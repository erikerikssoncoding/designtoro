<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Servicii Web Design, SEO și Marketing Online | DesignToro';
$pageDescription = 'Descoperă serviciile DesignToro: web design, optimizare SEO, social media, branding și content pentru branduri ambițioase.';
$pageKeywords = 'servicii creare site, optimizare seo, management social media, creare magazin online, branding';
$pageUrl = 'https://www.designtoro.ro/servicii';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero" aria-labelledby="services-hero">
    <div class="container narrow">
        <h1 id="services-hero">Servicii complete pentru succesul tău online.</h1>
        <p>Strategii integrate, echipă multidisciplinară și metodologie orientată spre rezultate măsurabile.</p>
    </div>
</section>
<section class="service-list" aria-label="Lista serviciilor principale">
    <div class="container service-grid detailed">
        <article class="service-card" id="web-design">
            <div class="service-icon">Icon</div>
            <h2>Web Design & Dezvoltare</h2>
            <p>Site-uri de prezentare și magazine online construite pe principii UX/UI actuale, cu performanțe ridicate și scalabilitate.</p>
            <ul class="service-benefits">
                <li>Audit și arhitectură de informație</li>
                <li>Design responsiv și animații fluide</li>
                <li>Integrare CMS și soluții ecommerce</li>
            </ul>
            <a class="link-arrow" href="/contact.php">Programează un discovery call</a>
        </article>
        <article class="service-card" id="seo">
            <div class="service-icon">Icon</div>
            <h2>SEO & Content Marketing</h2>
            <p>Optimizări tehnice, content strategic și campanii off-page pentru vizibilitate organică.</p>
            <ul class="service-benefits">
                <li>Analiză cuvinte cheie și intentie</li>
                <li>Optimizare tehnică și Core Web Vitals</li>
                <li>Content marketing și link building</li>
            </ul>
            <a class="link-arrow" href="/contact.php">Solicită un audit SEO</a>
        </article>
        <article class="service-card" id="social-media">
            <div class="service-icon">Icon</div>
            <h2>Social Media Marketing</h2>
            <p>Strategii multi-platformă cu conținut captivant și campanii de performanță pentru creșterea comunității.</p>
            <ul class="service-benefits">
                <li>Strategie editorială și tone of voice</li>
                <li>Producție foto/video și grafică</li>
                <li>Campanii plătite și raportare</li>
            </ul>
            <a class="link-arrow" href="/contact.php">Planifică o campanie</a>
        </article>
        <article class="service-card" id="branding">
            <div class="service-icon">Icon</div>
            <h2>Branding & Identitate vizuală</h2>
            <p>Creăm identități consistente care consolidează diferențiatorii brandului pe toate canalele.</p>
            <ul class="service-benefits">
                <li>Naming, logo și ghid de brand</li>
                <li>Design de materiale digitale și print</li>
                <li>Copywriting orientat pe beneficii</li>
            </ul>
            <a class="link-arrow" href="/contact.php">Cere o ofertă personalizată</a>
        </article>
    </div>
</section>
<section class="service-process" aria-labelledby="process-title">
    <div class="container process-grid">
        <div>
            <h2 id="process-title">Procesul nostru în 4 pași</h2>
            <p>Un proces clar, colaborativ și agil pentru proiecte livrate la timp și fără compromisuri.</p>
        </div>
        <ol class="process-steps">
            <li>
                <h3>1. Descoperire</h3>
                <p>Înțelegem contextul afacerii și obiectivele pentru a defini direcția strategică.</p>
            </li>
            <li>
                <h3>2. Design & prototipare</h3>
                <p>Construim wireframe-uri și prototipuri interactive pentru feedback rapid.</p>
            </li>
            <li>
                <h3>3. Dezvoltare & testare</h3>
                <p>Implementăm funcționalitățile cu standarde moderne și testare cross-device.</p>
            </li>
            <li>
                <h3>4. Lansare & optimizare</h3>
                <p>Monitorizăm performanța și optimizăm continuu pentru rezultate sustenabile.</p>
            </li>
        </ol>
    </div>
</section>
<section class="cta-banner" aria-labelledby="cta-services">
    <div class="container cta-inline">
        <div>
            <h2 id="cta-services">Hai să creăm următorul proiect emblematic.</h2>
            <p>Completează formularul și în 24h revenim cu o propunere strategică.</p>
        </div>
        <a class="btn btn-accent" href="/contact.php">Cere ofertă</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
