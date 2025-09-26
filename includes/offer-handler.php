<?php
require_once __DIR__ . '/../config/secretkey.php';

function offer_sanitize_input(string $value): string
{
    $value = trim($value);
    $value = strip_tags($value);
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function offer_verify_recaptcha(string $token, string $remoteIp): bool
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

function handle_offer_request(): array
{
    $errors = [];
    $honeypot = $_POST['company'] ?? '';
    if (!empty($honeypot)) {
        $errors[] = 'Formular invalid.';
        return ['success' => false, 'errors' => $errors];
    }

    $name = offer_sanitize_input($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = offer_sanitize_input($_POST['phone'] ?? '');
    $details = offer_sanitize_input($_POST['details'] ?? '');
    $plan = offer_sanitize_input($_POST['offer_plan'] ?? '');
    $termsAccepted = isset($_POST['terms']) && $_POST['terms'] === '1';
    $token = $_POST['g-recaptcha-response'] ?? '';

    if ($name === '') {
        $errors[] = 'Numele este obligatoriu.';
    }

    if ($phone === '') {
        $errors[] = 'Numărul de telefon este obligatoriu.';
    }

    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Adresa de email nu este validă.';
    }

    if ($details === '') {
        $errors[] = 'Detaliile despre proiect sunt obligatorii.';
    }

    if (!$termsAccepted) {
        $errors[] = 'Trebuie să accepți Termenii și condițiile și Politica de confidențialitate.';
    }

    if ($token === '') {
        $errors[] = 'Verificarea reCAPTCHA a eșuat.';
    } elseif (!offer_verify_recaptcha($token, $_SERVER['REMOTE_ADDR'] ?? '')) {
        $errors[] = 'Nu am putut valida reCAPTCHA.';
    }

    if (!empty($errors)) {
        return ['success' => false, 'errors' => $errors];
    }

    $subject = 'Cerere de ofertă nouă - DesignToro.ro';
    $bodyLines = [
        "Nume: {$name}",
        "Telefon: {$phone}",
        "Email: {$email}",
    ];

    if ($plan !== '') {
        $bodyLines[] = "Pachet de interes: {$plan}";
    }

    $bodyLines[] = "Detalii:\n{$details}";
    $body = implode("\n", $bodyLines);
    $headers = 'From: no-reply@designtoro.ro' . "\r\n" . 'Reply-To: ' . $email;

    $mailSent = false;
    if (function_exists('mail')) {
        $mailSent = mail('office@designtoro.ro', $subject, $body, $headers);
    }

    if (!$mailSent) {
        return [
            'success' => false,
            'errors' => ['Momentan nu putem trimite mesajul. Vă rugăm să ne contactați telefonic.'],
        ];
    }

    return ['success' => true, 'errors' => []];
}
