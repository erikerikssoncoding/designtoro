<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Contact - Agenție Web Design | DesignToro';
$pageDescription = 'Contactează echipa DesignToro pentru o discuție rapidă despre site-ul tău, promovare și bugete clare.';
$pageKeywords = 'contact web design, ofertă personalizată site, agenție bucurești contact';
$pageUrl = 'https://www.designtoro.ro/contact';
$currentPage = 'contact';
$formResponse = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once __DIR__ . '/includes/contact-handler.php';
    $formResponse = handle_contact_form();

    $wantsJson = isset($_SERVER['HTTP_ACCEPT']) && stripos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;
    if ($wantsJson) {
        header('Content-Type: application/json');
        http_response_code(!empty($formResponse['success']) ? 200 : 400);
        echo json_encode($formResponse);
        exit;
    }
}
$bodyClasses = $bodyClasses ?? [];
if ($formResponse && empty($formResponse['success'])) {
    $bodyClasses[] = 'show-recaptcha';
}
$formFieldErrors = $formResponse['fieldErrors'] ?? [];
$formWasSuccessful = $formResponse && !empty($formResponse['success']);
$globalFormErrors = ($formResponse && empty($formResponse['success'])) ? ($formResponse['errors'] ?? []) : [];
include __DIR__ . '/partials/head.php';
?>
<section class="contact-hero py-5" aria-labelledby="contact-title">
    <div class="container contact-grid row g-5 align-items-start">
        <div class="col-lg-5">
            <h1 id="contact-title">Hai să discutăm despre proiectul tău online.</h1>
            <p>Scrie-ne câteva detalii, iar în cel mult o zi lucrătoare primești un plan simplu și pașii următori.</p>
            <ul class="contact-details list-unstyled d-grid gap-2">
                <li><i class="fa-solid fa-phone text-primary" aria-hidden="true"></i><strong>Telefon:</strong> <a href="tel:+40757568812">+40 757 568 812</a></li>
                <li><i class="fa-solid fa-envelope-open-text text-primary" aria-hidden="true"></i><strong>Email:</strong> <a href="mailto:office@designtoro.ro">office@designtoro.ro</a></li>
                <li><i class="fa-solid fa-location-dot text-primary" aria-hidden="true"></i><strong>Adresă:</strong> București, România</li>
            </ul>
        </div>
        <div class="col-lg-7">
            <div class="form-shell" data-form-wrapper>
                <div
                    class="form-success-message<?= $formWasSuccessful ? ' is-visible' : ''; ?>"
                    data-form-success
                    role="status"
                    aria-live="polite"
                    <?= $formWasSuccessful ? '' : 'hidden'; ?>
                >
                    <span class="form-success-icon" aria-hidden="true">
                        <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <div>
                        <p class="form-success-title">Cererea ta este în curs!</p>
                        <p>Ți-am primit detaliile și revenim în maximum o zi lucrătoare. Dacă ai completat deja formularul „Cere ofertă”, nu este nevoie să ne trimiți un alt mesaj în următoarele 24 de ore.</p>
                    </div>
                </div>
                <form
                    class="contact-form"
                    method="post"
                    action="/contact"
                    novalidate
                    data-async-form
                    data-success-storage-key="contact"
                    data-shared-success-keys="offer"
                >
                    <div class="form-feedback<?= !empty($globalFormErrors) ? ' is-visible' : ''; ?>" data-form-global-error aria-live="polite">
                        <?php if (!empty($globalFormErrors)): ?>
                            <ul>
                                <?php foreach ($globalFormErrors as $error): ?>
                                    <li><?= $error; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                    <div class="form-group<?= isset($formFieldErrors['name']) ? ' has-error' : ''; ?>">
                        <label for="name" class="form-label">Nume *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            value="<?= htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                            required
                        >
                        <p class="form-error" data-field-error="name" aria-live="polite">
                            <?= $formFieldErrors['name'] ?? ''; ?>
                        </p>
                    </div>
                    <div class="form-group<?= isset($formFieldErrors['email']) ? ' has-error' : ''; ?>">
                        <label for="email" class="form-label">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            value="<?= htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                            required
                        >
                        <p class="form-error" data-field-error="email" aria-live="polite">
                            <?= $formFieldErrors['email'] ?? ''; ?>
                        </p>
                    </div>
                    <div class="form-group<?= isset($formFieldErrors['phone']) ? ' has-error' : ''; ?>">
                        <label for="phone" class="form-label">Telefon</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            class="form-control"
                            value="<?= htmlspecialchars($_POST['phone'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                        >
                        <p class="form-error" data-field-error="phone" aria-live="polite">
                            <?= $formFieldErrors['phone'] ?? ''; ?>
                        </p>
                    </div>
                    <div class="form-group honeypot">
                        <label for="company">Companie</label>
                        <input type="text" id="company" name="company" autocomplete="off">
                    </div>
                    <div class="form-group<?= isset($formFieldErrors['message']) ? ' has-error' : ''; ?>">
                        <label for="message" class="form-label">Mesaj *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            class="form-control"
                            required
                        ><?= htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8'); ?></textarea>
                        <p class="form-error" data-field-error="message" aria-live="polite">
                            <?= $formFieldErrors['message'] ?? ''; ?>
                        </p>
                    </div>
                    <div class="form-group form-consent<?= isset($formFieldErrors['terms']) ? ' has-error' : ''; ?>">
                        <input
                            type="checkbox"
                            id="contact-terms"
                            name="terms"
                            value="1"
                            required
                            <?= isset($_POST['terms']) ? 'checked' : ''; ?>
                            class="form-consent__input"
                        >
                        <label class="form-consent__label" for="contact-terms">
                            <span class="form-consent__checkbox" aria-hidden="true">
                                <i class="fa-solid fa-check"></i>
                            </span>
                            <span class="form-consent__text">
                                Sunt de acord cu <a href="/termeni-si-conditii" target="_blank" rel="noopener">Termenii și condițiile</a>
                                și cu <a href="/politica-de-confidentialitate" target="_blank" rel="noopener">Politica de confidențialitate</a>.
                            </span>
                        </label>
                        <p class="form-error" data-field-error="terms" aria-live="polite">
                            <?= $formFieldErrors['terms'] ?? ''; ?>
                        </p>
                    </div>
                    <input type="hidden" name="g-recaptcha-response" data-recaptcha-token>
                    <input type="hidden" name="fingerprint" data-device-fingerprint>
                    <input type="hidden" name="page_url" value="<?= htmlspecialchars($pageUrl ?? ($_SERVER['REQUEST_URI'] ?? ''), ENT_QUOTES, 'UTF-8'); ?>">
                    <button class="btn btn-accent" type="submit">Trimite mesajul</button>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-contact">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-contact">Vrei să vorbim direct la telefon?</h2>
            <p>Sună-ne și clarificăm pe loc bugetul, calendarul și pașii următori.</p>
        </div>
        <a class="btn btn-secondary" href="tel:+40757568812">Sună acum</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
