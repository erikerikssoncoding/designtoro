<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Contact - Agenție Web Design | DesignToro';
$pageDescription = 'Contactează echipa DesignToro pentru o ofertă personalizată de web design, SEO sau marketing digital.';
$pageKeywords = 'contact web design, ofertă personalizată site, agenție bucurești contact';
$pageUrl = 'https://www.designtoro.ro/contact';
$currentPage = 'contact';
$formResponse = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once __DIR__ . '/includes/contact-handler.php';
    $formResponse = handle_contact_form();
}
$bodyClasses = $bodyClasses ?? [];
if ($formResponse && empty($formResponse['success'])) {
    $bodyClasses[] = 'show-recaptcha';
}
include __DIR__ . '/partials/head.php';
?>
<section class="contact-hero py-5" aria-labelledby="contact-title">
    <div class="container contact-grid row g-5 align-items-start">
        <div class="col-lg-5">
            <h1 id="contact-title">Hai să planificăm strategia digitală.</h1>
            <p>Spune-ne câteva detalii despre proiect și îți răspundem cu un plan de acțiune în maximum o zi lucrătoare.</p>
            <ul class="contact-details list-unstyled d-grid gap-2">
                <li><i class="fa-solid fa-phone text-primary" aria-hidden="true"></i><strong>Telefon:</strong> <a href="tel:+40757568812">+40 757 568 812</a></li>
                <li><i class="fa-solid fa-envelope-open-text text-primary" aria-hidden="true"></i><strong>Email:</strong> <a href="mailto:office@designtoro.ro">office@designtoro.ro</a></li>
                <li><i class="fa-solid fa-location-dot text-primary" aria-hidden="true"></i><strong>Adresă:</strong> București, România</li>
            </ul>
        </div>
        <div class="col-lg-7">
            <form class="contact-form" method="post" action="/contact" novalidate>
                <?php if ($formResponse): ?>
                    <div class="form-feedback <?= $formResponse['success'] ? 'success' : 'error'; ?>">
                        <?php if ($formResponse['success']): ?>
                            <p>Îți mulțumim! Mesajul a fost trimis cu succes.</p>
                        <?php else: ?>
                            <ul>
                                <?php foreach ($formResponse['errors'] as $error): ?>
                                    <li><?= $error; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <div class="form-group">
                    <label for="name" class="form-label">Nume *</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email *</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="phone" class="form-label">Telefon</label>
                    <input type="tel" id="phone" name="phone" class="form-control">
                </div>
                <div class="form-group honeypot">
                    <label for="company">Companie</label>
                    <input type="text" id="company" name="company" autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Mesaj *</label>
                    <textarea id="message" name="message" rows="5" class="form-control" required></textarea>
                </div>
                <input type="hidden" name="g-recaptcha-response" id="recaptcha-token">
                <button class="btn btn-accent" type="submit">Trimite mesajul</button>
            </form>
        </div>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-contact">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-contact">Preferi o sesiune rapidă live?</h2>
            <p>Stabilește o întâlnire și discutăm despre strategie, bugete și calendar.</p>
        </div>
        <a class="btn btn-secondary" href="tel:+40757568812">Sună acum</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
