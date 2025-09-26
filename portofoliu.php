<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Portofoliu Web Design și Proiecte Digitale | DesignToro';
$pageDescription = 'Explorează proiectele DesignToro: website-uri, ecommerce și branding pentru branduri din diverse industrii.';
$pageKeywords = 'portofoliu web design, proiecte site-uri, exemple magazine online, lucrări design';
$pageUrl = 'https://www.designtoro.ro/portofoliu';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="portfolio-hero">
    <div class="container narrow text-center">
        <h1 id="portfolio-hero">Proiecte realizate cu mândrie.</h1>
        <p>Selecție de proiecte care îmbină designul minimalist cu performanța de top.</p>
    </div>
</section>
<section class="portfolio-filters py-3" aria-label="Filtre portofoliu">
    <div class="container filter-buttons">
        <button class="filter-button is-active" data-filter="all">Toate</button>
        <button class="filter-button" data-filter="website">Website-uri</button>
        <button class="filter-button" data-filter="ecommerce">Magazine online</button>
        <button class="filter-button" data-filter="branding">Logo & branding</button>
    </div>
</section>
<section class="portfolio-gallery py-4" aria-label="Galerie portofoliu">
    <div class="container portfolio-masonry">
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">Placeholder Vision</div>
            <div class="portfolio-details">
                <h2>VisionLabs</h2>
                <p>Website corporate</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">Placeholder Nova</div>
            <div class="portfolio-details">
                <h2>NovaStore</h2>
                <p>Magazin online fashion</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">Placeholder Aero</div>
            <div class="portfolio-details">
                <h2>Aero Dynamics</h2>
                <p>Identitate vizuală</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">Placeholder Atlas</div>
            <div class="portfolio-details">
                <h2>Atlas Finance</h2>
                <p>Landing page conversie</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">Placeholder Orbit</div>
            <div class="portfolio-details">
                <h2>Orbit Tech</h2>
                <p>Store B2B</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">Placeholder Lumen</div>
            <div class="portfolio-details">
                <h2>Lumen Studio</h2>
                <p>Logo și manual de brand</p>
            </div>
        </article>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-portfolio">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-portfolio">Îți dorești un proiect la fel de memorabil?</h2>
            <p>Scrie-ne despre provocarea ta și îți arătăm cum o putem transforma într-o poveste de succes.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Hai să discutăm</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
