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
        <h1 id="portfolio-hero">Producții digitale care captivează.</h1>
        <p>Selecție de proiecte în care designul cinematic întâlnește performanța de top.</p>
    </div>
</section>
<section class="portfolio-filters py-3" aria-label="Filtre portofoliu">
    <div class="container filter-buttons">
        <button class="filter-button is-active" data-filter="all">Toate</button>
        <button class="filter-button" data-filter="website">Experiențe web</button>
        <button class="filter-button" data-filter="ecommerce">Magazine online</button>
        <button class="filter-button" data-filter="branding">Branding &amp; content</button>
    </div>
</section>
<section class="portfolio-gallery py-4" aria-label="Galerie portofoliu">
    <div class="container portfolio-masonry">
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">Poster digital Pulse</div>
            <div class="portfolio-details">
                <h2>Pulse Media</h2>
                <p>Hub de content video &amp; podcast</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">Poster digital Nebula</div>
            <div class="portfolio-details">
                <h2>Nebula Commerce</h2>
                <p>Magazin online fashion premium</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">Poster digital Skyline</div>
            <div class="portfolio-details">
                <h2>Skyline Air</h2>
                <p>Identitate și platformă de rezervări</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">Poster digital Prime</div>
            <div class="portfolio-details">
                <h2>Prime Estates</h2>
                <p>Platformă imobiliară interactivă</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">Poster digital Orbit</div>
            <div class="portfolio-details">
                <h2>Orbit Tech</h2>
                <p>Store B2B cu integrări complexe</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">Poster digital Lumen</div>
            <div class="portfolio-details">
                <h2>Lumen Studio</h2>
                <p>Branding și ghid de identitate</p>
            </div>
        </article>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-portfolio">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-portfolio">Ți-ai imaginat proiectul tău pe această listă?</h2>
            <p>Spune-ne despre provocare și îți arătăm cum o transformăm într-o poveste memorabilă.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Hai să discutăm</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
