<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'DesignToro | Agenție Web Design & Marketing Digital București';
$pageDescription = 'DesignToro creează experiențe digitale inspirate de Apple pentru branduri care vor să inspire acțiune.';
$pageKeywords = 'agenție web design, creare site bucurești, marketing digital, servicii seo, promovare online';
$pageUrl = 'https://www.designtoro.ro/';
include __DIR__ . '/partials/head.php';
?>
<section class="hero" aria-labelledby="hero-title">
    <div class="container hero-content">
        <div class="hero-text">
            <p class="eyebrow">Agenție Web Design & Marketing Digital</p>
            <h1 id="hero-title">Creăm experiențe digitale care inspiră acțiune.</h1>
            <p>DesignToro te ajută să transformi vizitatorii în clienți prin design minimalist, strategie clară și execuție impecabilă.</p>
            <div class="hero-actions">
                <a class="btn btn-accent" href="/portofoliu.php">Vezi portofoliul</a>
                <a class="btn btn-ghost" href="/contact.php">Programează o discuție</a>
            </div>
        </div>
        <div class="hero-media" aria-hidden="true">
            <div class="media-placeholder">Video / Imagine de fundal</div>
        </div>
    </div>
</section>
<section class="stats" aria-label="Rezultatele DesignToro">
    <div class="container stats-grid">
        <div class="stat-card">
            <span class="stat-value">225+</span>
            <span class="stat-label">Proiecte livrate</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">213+</span>
            <span class="stat-label">Clienți mulțumiți</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">8+</span>
            <span class="stat-label">Ani de experiență</span>
        </div>
    </div>
</section>
<section class="services-preview" id="servicii" aria-labelledby="services-title">
    <div class="container">
        <h2 id="services-title">Servicii create pentru impact digital</h2>
        <div class="service-grid">
            <article class="service-card">
                <div class="service-icon">Icon</div>
                <h3>Web Design</h3>
                <p>Site-uri de prezentare și magazine online cu design premium și experiență fluidă.</p>
                <a class="link-arrow" href="/servicii.php#web-design">Află mai multe</a>
            </article>
            <article class="service-card">
                <div class="service-icon">Icon</div>
                <h3>SEO & Performance</h3>
                <p>Strategii SEO tehnice și de conținut pentru poziții de top în rezultatele Google.</p>
                <a class="link-arrow" href="/servicii.php#seo">Află mai multe</a>
            </article>
            <article class="service-card">
                <div class="service-icon">Icon</div>
                <h3>Social Media</h3>
                <p>Campanii integrate și conținut creativ care transformă comunitățile în clienți.</p>
                <a class="link-arrow" href="/servicii.php#social-media">Află mai multe</a>
            </article>
            <article class="service-card">
                <div class="service-icon">Icon</div>
                <h3>Branding & Content</h3>
                <p>Identități vizuale coerente și conținut multimedia ce spun povestea brandului tău.</p>
                <a class="link-arrow" href="/servicii.php#branding">Află mai multe</a>
            </article>
        </div>
    </div>
</section>
<section class="portfolio-preview" aria-labelledby="portfolio-title">
    <div class="container">
        <div class="section-header">
            <h2 id="portfolio-title">Portofoliu selectat</h2>
            <a class="link-arrow" href="/portofoliu.php">Vezi toate proiectele</a>
        </div>
        <div class="portfolio-grid">
            <article class="portfolio-card">
                <div class="portfolio-media">Placeholder proiect 1</div>
                <div class="portfolio-overlay">
                    <h3>Proiect Vision</h3>
                    <p>Website de prezentare</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">Placeholder proiect 2</div>
                <div class="portfolio-overlay">
                    <h3>Proiect Nova</h3>
                    <p>Magazin online</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">Placeholder proiect 3</div>
                <div class="portfolio-overlay">
                    <h3>Proiect Aero</h3>
                    <p>Branding & UI</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">Placeholder proiect 4</div>
                <div class="portfolio-overlay">
                    <h3>Proiect Atlas</h3>
                    <p>Landing page campanie</p>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="principles" aria-labelledby="principles-title">
    <div class="container principles-grid">
        <div class="principles-intro">
            <h2 id="principles-title">Principiile noastre de colaborare</h2>
            <p>Parteneriate transparente, procese optimizate și soluții flexibile adaptate fiecărei etape de creștere.</p>
        </div>
        <ul class="principles-list">
            <li>
                <h3>Planificare strategică</h3>
                <p>Analizăm obiectivele și publicul pentru a crea un roadmap clar și ușor de urmărit.</p>
            </li>
            <li>
                <h3>Inovație constantă</h3>
                <p>Testăm și aplicăm cele mai noi tehnologii pentru experiențe digitale memorabile.</p>
            </li>
            <li>
                <h3>Raport calitate-preț optim</h3>
                <p>Livrăm rezultate măsurabile, cu investiții transparente și eficiente.</p>
            </li>
            <li>
                <h3>Suport dedicat</h3>
                <p>Suntem mereu alături de tine cu mentenanță, optimizări și consultanță.</p>
            </li>
        </ul>
    </div>
</section>
<section class="cta-final" aria-labelledby="cta-title">
    <div class="container cta-content">
        <h2 id="cta-title">Sunteți gata să vă transformați prezența online?</h2>
        <p>Hai să discutăm despre următorul proiect și cum îl putem duce la nivelul următor.</p>
        <a class="btn btn-accent" href="/contact.php">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
