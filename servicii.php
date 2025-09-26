<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Servicii Web Design, SEO și Marketing Online | DesignToro';
$pageDescription = 'Descoperă serviciile DesignToro: web design, optimizare SEO, social media, branding și content pentru branduri ambițioase.';
$pageKeywords = 'servicii creare site, optimizare seo, management social media, creare magazin online, branding';
$pageUrl = 'https://www.designtoro.ro/servicii';
$currentPage = 'servicii';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="services-hero">
    <div class="container narrow text-center">
        <h1 id="services-hero">Servicii pentru platforme digitale orientate spre conversie.</h1>
        <p>Strategii integrate, echipă multidisciplinară și un flux de lucru orientat spre rezultate măsurabile.</p>
    </div>
</section>
<section class="service-list py-5" aria-label="Lista serviciilor principale">
    <div class="container service-grid detailed">
        <article class="service-card" id="web-design">
            <div class="service-icon"><i class="fa-solid fa-display" aria-hidden="true"></i></div>
            <h2>Experiențe Web &amp; Platforme</h2>
            <p>Site-uri de prezentare, membership și ecommerce construite ca un hub digital de performanță.</p>
            <ul class="service-benefits">
                <li>Audit de produs și mapping al experienței utilizatorului</li>
                <li>UI modular cu animații subtile orientate spre UX</li>
                <li>Integrare CMS, membership și soluții ecommerce</li>
            </ul>
            <a class="link-arrow" href="/contact">Programează un discovery call</a>
        </article>
        <article class="service-card" id="seo">
            <div class="service-icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></div>
            <h2>SEO &amp; Content Serializat</h2>
            <p>Optimizări tehnice și storytelling evergreen pentru vizibilitate organică de durată.</p>
            <ul class="service-benefits">
                <li>Cercetare avansată de cuvinte cheie și intenție</li>
                <li>Optimizare tehnică, Core Web Vitals și schema markup</li>
                <li>Content serializat și orchestrare de backlink-uri</li>
            </ul>
            <a class="link-arrow" href="/contact">Solicită un audit SEO</a>
        </article>
        <article class="service-card" id="social-media">
            <div class="service-icon"><i class="fa-solid fa-comments" aria-hidden="true"></i></div>
            <h2>Social Media &amp; Communities</h2>
            <p>Campanii episodice și conținut snackable care mențin comunitatea conectată.</p>
            <ul class="service-benefits">
                <li>Tone of voice și structură editorială episodică</li>
                <li>Producție creativă pentru stories și asset-uri sociale</li>
                <li>Campanii paid și automatizări de retargeting</li>
            </ul>
            <a class="link-arrow" href="/contact">Planifică o campanie</a>
        </article>
        <article class="service-card" id="branding">
            <div class="service-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
            <h2>Branding &amp; Content Studio</h2>
            <p>Identități vizuale și narațiuni care construiesc conexiuni emoționale.</p>
            <ul class="service-benefits">
                <li>Platformă de brand, logo adaptiv și ghid complet</li>
                <li>Design pentru landing page-uri, pitch deck-uri și materiale promo</li>
                <li>Copywriting și ghiduri de campanii axate pe conversie</li>
            </ul>
            <a class="link-arrow" href="/contact">Cere o ofertă personalizată</a>
        </article>
    </div>
</section>
<section class="service-process py-5" aria-labelledby="process-title">
    <div class="container process-grid">
        <div>
            <h2 id="process-title">Procesul nostru în 4 acte</h2>
            <p>Un parcurs clar, colaborativ și agil care transformă ideile în experiențe digitale complete.</p>
        </div>
        <ol class="process-steps">
            <li>
                <h3>Discovery</h3>
                <p>Analizăm contextul brandului și definim scenariul strategic al proiectului.</p>
            </li>
            <li>
                <h3>Design &amp; Prototipare</h3>
                <p>Construim wireframe-uri interactive și moodboard-uri pentru feedback rapid.</p>
            </li>
            <li>
                <h3>Build &amp; QA</h3>
                <p>Implementăm funcționalitățile, optimizăm performanța și testăm cross-device.</p>
            </li>
            <li>
                <h3>Launch &amp; Growth</h3>
                <p>Orchestrăm lansarea, monitorizăm datele și iterăm pentru rezultate sustenabile.</p>
            </li>
        </ol>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-services">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-services">Hai să lansăm următorul sezon digital.</h2>
            <p>Completează formularul și revenim cu o propunere strategică în 24 de ore.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Cere ofertă</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
