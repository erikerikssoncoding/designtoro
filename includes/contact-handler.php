<?php
require_once __DIR__ . '/../config/secretkey.php';
require_once __DIR__ . '/fingerprint-throttle.php';

function sanitize_input(string $value): string
{
    $value = trim($value);
    $value = strip_tags($value);
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function validate_phone_number(string $phone, bool $isRequired = false): array
{
    $phone = trim($phone);

    if ($phone === '') {
        if ($isRequired) {
            return [false, 'Numărul de telefon este obligatoriu.'];
        }

        return [true, ''];
    }

    $hasPlus = str_starts_with($phone, '+');
    $digits = $hasPlus ? substr($phone, 1) : $phone;

    if ($digits === '' || preg_match('/\D/', $digits)) {
        return [false, 'Numărul de telefon poate conține doar cifre (și un singur + la început).'];
    }

    $length = strlen($digits);

    if ($hasPlus) {
        if ($length < 6 || $length > 14) {
            return [false, 'Numărul de telefon în format internațional trebuie să aibă între 6 și 14 cifre.'];
        }
    } else {
        if ($length !== 10) {
            return [false, 'Numărul de telefon trebuie să conțină exact 10 cifre.'];
        }
    }

    return [true, $phone];
}

function build_submission_metadata(?string $fingerprintRaw = null, ?string $pageUrl = null): string
{
    $metadataLines = [];
    $metadataLines[] = '---- Informații tehnice ----';

    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'necunoscut';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'necunoscut';
    $acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? 'necunoscut';
    $referer = $_SERVER['HTTP_REFERER'] ?? 'necunoscut';
    $submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';

    $metadataLines[] = 'IP vizitator: ' . $ipAddress;
    $metadataLines[] = 'User agent: ' . $userAgent;
    $metadataLines[] = 'Limbi acceptate: ' . $acceptLanguage;
    $metadataLines[] = 'Referer: ' . $referer;

    if ($pageUrl) {
        $metadataLines[] = 'Pagină formular: ' . $pageUrl;
    }

    $metadataLines[] = 'Moment trimitere: ' . $submittedAt;

    if ($fingerprintRaw) {
        $decoded = json_decode($fingerprintRaw, true);
        if (is_array($decoded)) {
            $metadataLines[] = 'Amprentă dispozitiv:';
            foreach ($decoded as $key => $value) {
                if (is_array($value)) {
                    $value = implode(', ', array_map('strval', $value));
                }
                $metadataLines[] = '  - ' . $key . ': ' . (is_scalar($value) ? (string) $value : json_encode($value));
            }
        } else {
            $metadataLines[] = 'Amprentă dispozitiv: ' . $fingerprintRaw;
        }
    }

    return "\n\n" . implode("\n", $metadataLines);
}

function verify_recaptcha(string $token, string $remoteIp): bool
{
    if (RECAPTCHA_SECRET_KEY === 'YOUR_SECRET_KEY_HERE') {
        return false;
    }

    $response = file_get_contents(
        'https://www.google.com/recaptcha/api/siteverify?secret='
        . urlencode(RECAPTCHA_SECRET_KEY)
        . '&response=' . urlencode($token)
        . '&remoteip=' . urlencode($remoteIp)
    );

    if (!$response) {
        return false;
    }

    $result = json_decode($response, true);
    return is_array($result) && ($result['success'] ?? false) === true && ($result['score'] ?? 0) >= 0.5;
}

function handle_contact_form(): array
{
    $errors = [];
    $fieldErrors = [];
    $honeypot = $_POST['company'] ?? '';
    if (!empty($honeypot)) {
        $errors[] = 'Formular invalid.';
        return ['success' => false, 'errors' => $errors, 'fieldErrors' => $fieldErrors];
    }

    $name = sanitize_input($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = sanitize_input($_POST['phone'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');
    $termsAccepted = isset($_POST['terms']) && $_POST['terms'] === '1';
    $token = $_POST['g-recaptcha-response'] ?? '';
    $fingerprintRaw = isset($_POST['fingerprint']) ? substr((string) $_POST['fingerprint'], 0, 3000) : null;
    $fingerprintKey = fingerprint_generate_key($fingerprintRaw);
    $fingerprintScopes = ['contact', 'offer'];
    $pageUrl = isset($_POST['page_url']) ? substr((string) $_POST['page_url'], 0, 500) : null;

    if ($fingerprintKey && fingerprint_submission_blocked($fingerprintKey, $fingerprintScopes)) {
        $blockMessage = 'Ai trimis deja un formular în ultimele 24 de ore. Dacă ai detalii suplimentare, contactează-ne pe '
            . 'WhatsApp sau la office@designtoro.ro.';

        return [
            'success' => false,
            'errors' => [$blockMessage],
            'fieldErrors' => []
        ];
    }

    if ($name === '') {
        $fieldErrors['name'] = 'Numele este obligatoriu.';
    }

    if ($email === '') {
        $fieldErrors['email'] = 'Adresa de email este obligatorie.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $fieldErrors['email'] = 'Adresa de email nu este validă.';
    }

    [$isPhoneValid, $normalizedPhone] = validate_phone_number($phone, false);
    if (!$isPhoneValid) {
        $fieldErrors['phone'] = $normalizedPhone;
    } else {
        $phone = $normalizedPhone;
    }

    if ($message === '') {
        $fieldErrors['message'] = 'Mesajul este obligatoriu.';
    }

    if (!$termsAccepted) {
        $fieldErrors['terms'] = 'Trebuie să accepți Termenii și condițiile și Politica de confidențialitate.';
    }

    if ($token === '') {
        $errors[] = 'Verificarea reCAPTCHA a eșuat.';
    } elseif (!verify_recaptcha($token, $_SERVER['REMOTE_ADDR'] ?? '')) {
        $errors[] = 'Nu am putut valida reCAPTCHA.';
    }

    if (!empty($fieldErrors)) {
        $errors = array_merge($errors, array_values($fieldErrors));
    }

    if (!empty($errors)) {
        return ['success' => false, 'errors' => $errors, 'fieldErrors' => $fieldErrors];
    }

    $subject = 'Mesaj nou de pe DesignToro.ro';
    $body = "Nume: {$name}\nEmail: {$email}\nTelefon: {$phone}\nMesaj:\n{$message}";
    $body .= build_submission_metadata($fingerprintRaw, $pageUrl);
    $headers = 'From: no-reply@designtoro.ro' . "\r\n" . 'Reply-To: ' . $email;

    $mailSent = false;
    if (function_exists('mail')) {
        $mailSent = mail('office@designtoro.ro', $subject, $body, $headers);
    }

    if (!$mailSent) {
        return [
            'success' => false,
            'errors' => ['Momentan nu putem trimite mesajul. Vă rugăm să ne contactați telefonic.'],
            'fieldErrors' => []
        ];
    }

    if ($fingerprintKey) {
        fingerprint_remember_submission($fingerprintKey, $fingerprintScopes);
    }

    return ['success' => true, 'errors' => [], 'fieldErrors' => []];
}
?>
