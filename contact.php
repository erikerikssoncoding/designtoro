<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Contact - Agenție Web Design | DesignToro';
$pageDescription = 'Contactează echipa DesignToro pentru o ofertă personalizată de web design, SEO sau marketing digital.';
$pageKeywords = 'contact web design, ofertă personalizată site, agenție bucurești contact';
$pageUrl = 'https://www.designtoro.ro/contact';
$formResponse = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once __DIR__ . '/includes/contact-handler.php';
    $formResponse = handle_contact_form();
}
include __DIR__ . '/partials/head.php';
?>
<section class="contact-hero" aria-labelledby="contact-title">
    <div class="container contact-grid">
        <div>
            <h1 id="contact-title">Hai să stăm de vorbă.</h1>
            <p>Spune-ne câteva detalii despre proiectul tău și îți vom răspunde în cel mult o zi lucrătoare.</p>
            <ul class="contact-details">
                <li><strong>Telefon:</strong> <a href="tel:+40722123456">+40 722 123 456</a></li>
                <li><strong>Email:</strong> <a href="mailto:contact@designtoro.ro">contact@designtoro.ro</a></li>
                <li><strong>Adresă:</strong> București, România</li>
            </ul>
        </div>
        <div>
            <form class="contact-form" method="post" action="/contact.php" novalidate>
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
                    <label for="name">Nume *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group honeypot">
                    <label for="company">Companie</label>
                    <input type="text" id="company" name="company" autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="message">Mesaj *</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <input type="hidden" name="g-recaptcha-response" id="recaptcha-token">
                <button class="btn btn-accent" type="submit">Trimite mesajul</button>
            </form>
        </div>
    </div>
</section>
<section class="cta-banner" aria-labelledby="cta-contact">
    <div class="container cta-inline">
        <div>
            <h2 id="cta-contact">Preferi o întâlnire față în față?</h2>
            <p>Stabilește o sesiune de consultanță și vom analiza împreună soluțiile potrivite.</p>
        </div>
        <a class="btn btn-secondary" href="tel:+40722123456">Sună acum</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
