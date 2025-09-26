<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Portofoliu Web Design și Proiecte Digitale | DesignToro';
$pageDescription = 'Explorează proiectele DesignToro: site-uri, magazine online și materiale de brand create pentru clienți din diferite domenii.';
$pageKeywords = 'portofoliu web design, proiecte site-uri, exemple magazine online, lucrări design';
$pageUrl = 'https://www.designtoro.ro/portofoliu';
$currentPage = 'portofoliu';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="portfolio-hero">
    <div class="container narrow text-center">
        <h1 id="portfolio-hero">Proiecte digitale care aduc rezultate reale.</h1>
        <p>Vezi exemple de site-uri, magazine online și campanii pe care le-am construit pas cu pas împreună cu clienții noștri.</p>
    </div>
</section>
<section class="portfolio-filters py-3" aria-label="Filtre portofoliu">
    <div class="container filter-buttons">
        <button class="filter-button is-active" data-filter="all">Toate</button>
        <button class="filter-button" data-filter="website">Site-uri de prezentare</button>
        <button class="filter-button" data-filter="ecommerce">Magazine online</button>
        <button class="filter-button" data-filter="branding">Identitate și conținut</button>
    </div>
</section>
<section class="portfolio-gallery py-4" aria-label="Galerie portofoliu">
    <div class="container portfolio-masonry">
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">
                <div class="mockup-card mockup-pulse" role="img" aria-label="Previzualizare proiect Pulse Media">
                    <span class="mockup-label" aria-hidden="true">Pulse Media</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Pulse Media</h2>
                <p>Site de știri și newsletter ușor de administrat</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">
                <div class="mockup-card mockup-nebula" role="img" aria-label="Previzualizare proiect Nebula Commerce">
                    <span class="mockup-label" aria-hidden="true">Nebula Commerce</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Nebula Commerce</h2>
                <p>Magazin online de modă cu experiență simplă de cumpărare</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">
                <div class="mockup-card mockup-skyline" role="img" aria-label="Previzualizare proiect Skyline Air">
                    <span class="mockup-label" aria-hidden="true">Skyline Air</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Skyline Air</h2>
                <p>Identitate vizuală și platformă clară de rezervări</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="website">
            <div class="portfolio-media">
                <div class="mockup-card mockup-prime" role="img" aria-label="Previzualizare proiect Prime Estates">
                    <span class="mockup-label" aria-hidden="true">Prime Estates</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Prime Estates</h2>
                <p>Site imobiliar cu tururi virtuale și formulare clare</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="ecommerce">
            <div class="portfolio-media">
                <div class="mockup-card mockup-orbit" role="img" aria-label="Previzualizare proiect Orbit Tech">
                    <span class="mockup-label" aria-hidden="true">Orbit Tech</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Orbit Tech</h2>
                <p>Magazin B2B cu comenzi rapide și integrare ERP</p>
            </div>
        </article>
        <article class="portfolio-item" data-category="branding">
            <div class="portfolio-media">
                <div class="mockup-card mockup-lumen" role="img" aria-label="Previzualizare proiect Lumen Studio">
                    <span class="mockup-label" aria-hidden="true">Lumen Studio</span>
                </div>
            </div>
            <div class="portfolio-details">
                <h2>Lumen Studio</h2>
                <p>Manual de brand și materiale ușor de folosit</p>
            </div>
        </article>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-portfolio">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-portfolio">Vrei să vezi proiectul tău în această galerie?</h2>
            <p>Trimite-ne câteva detalii și îți arătăm ce pași urmăm pentru a ajunge acolo.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Hai să discutăm</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
