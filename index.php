<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'DesignToro | Agenție Web Design & Marketing Digital București';
$pageDescription = 'DesignToro creează site-uri clare și campanii ușor de înțeles pentru afaceri care vor rezultate reale.';
$pageKeywords = 'agenție web design, creare site bucurești, marketing digital, servicii seo, promovare online';
$pageUrl = 'https://www.designtoro.ro/';
$currentPage = 'home';

$experienceStartDate = new DateTime('2013-10-13');
$experienceYears = max(1, $experienceStartDate->diff(new DateTime())->y);

include __DIR__ . '/partials/head.php';
?>
<section class="hero py-5" aria-labelledby="hero-title">
    <div class="container">
        <div class="row align-items-center g-5 hero-content">
            <div class="col-12 col-lg-10 col-xl-8 hero-text">
                <p class="eyebrow">Site-uri clare care aduc clienți reali</p>
                <div class="hero-badges">
                    <span class="badge-pill is-gradient">Planuri simple care cresc vânzările</span>
                    <span class="badge-pill">Site-uri ușor de folosit pe orice device</span>
                </div>
                <h1 id="hero-title" class="hero-title-mini">
                    Construim site-uri ușor de înțeles care cresc afacerile.
                </h1>
                <p>
                    Îți construim un site clar, cu un parcurs simplu pentru vizitatori și cu mesaje care explică pe înțelesul
                    tuturor ce vinzi. Ne ocupăm de design, texte și promovare astfel încât afacerea ta să fie vizibilă și să
                    convingă oamenii să aleagă produsele sau serviciile tale.
                </p>
                <ul class="hero-highlights">
                    <li><i class="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>Site-uri rapide și stabile, ușor
                    de folosit pe telefon, tabletă sau laptop.</li>
                    <li><i class="fa-solid fa-rocket text-primary" aria-hidden="true"></i>Texte, imagini și e-mailuri care
                    explică simplu beneficiile și încurajează oamenii să ia legătura cu tine.</li>
                    <li><i class="fa-solid fa-diagram-project text-primary" aria-hidden="true"></i>Promovare online constantă,
                    astfel încât să apari în fața clienților potriviți când au nevoie de tine.</li>
                </ul>
                <div class="hero-actions">
                    <a class="btn btn-accent" href="/portofoliu">Explorează portofoliul</a>
                    <a class="btn btn-ghost" href="/contact">Programează o discuție</a>
                </div>
            </div>
        </div>
        <div class="hero-metric" role="list" aria-label="Rezultatele DesignToro">
            <article class="accent-card hero-metric-card" role="listitem">
                <strong>1.300+</strong>
                <span>Website-uri lansate</span>
            </article>
            <article class="accent-card hero-metric-card" role="listitem">
                <strong>700+</strong>
                <span>Afaceri care au crescut alături de noi</span>
            </article>
            <article class="accent-card hero-metric-card" role="listitem">
                <strong><?php echo $experienceYears; ?>+</strong>
                <span>Peste <?php echo $experienceYears; ?> ani de experiență digitală</span>
            </article>
        </div>
    </div>
</section>
<section class="about" id="despre" aria-labelledby="about-title">
    <div class="container about-grid">
        <div class="about-summary">
            <h2 id="about-title">Agenție digitală din București specializată în site-uri și promovare online</h2>
            <p>De peste <?php echo $experienceYears; ?> ani, DesignToro pregătește și lansează site-uri care aduc clienți. Combinăm obiectivele
            de business cu un limbaj simplu, imagini potrivite și soluții tehnice sigure, ca brandurile să fie ușor de găsit și de ales.</p>
            <div class="about-metrics" role="list" aria-label="Indicatori de performanță DesignToro">
                <div class="about-metric" role="listitem">
                    <strong>3x</strong>
                    <span>de trei ori mai multe cereri în primele 90 de zile după lansare</span>
                </div>
                <div class="about-metric" role="listitem">
                    <strong>2,1s</strong>
                    <span>timp mediu de încărcare pentru site-urile create de noi</span>
                </div>
            </div>
        </div>
        <div class="about-details">
            <h3>De ce brandurile ne aleg pentru creștere constantă</h3>
            <p>Ne ocupăm de tot drumul digital: analizăm publicul, desenăm paginile, scriem textele, construim site-ul și îl promovăm. Lucrăm
            pas cu pas și explicăm clar fiecare etapă, astfel încât să știi mereu ce se întâmplă.</p>
            <ul class="about-list">
                <li>Design curat, adaptat brandului tău, astfel încât fiecare pagină să fie ușor de parcurs.</li>
                <li>Optimizare pentru motoarele de căutare și plan de conținut explicat în pași simpli.</li>
                <li>Mesaje și reclame care ajung la oamenii interesați și îi îndeamnă să îți scrie sau să cumpere.</li>
                <li>Actualizări regulate, rapoarte ușor de înțeles și suport după lansare ori de câte ori ai nevoie.</li>
            </ul>
        </div>
    </div>
</section>
<section class="services-preview py-5" id="servicii" aria-labelledby="services-title">
    <div class="container">
        <h2 id="services-title">Servicii create pentru afaceri vizibile online</h2>
        <div class="service-grid">
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-window-restore" aria-hidden="true"></i></div>
                <h3>Experiențe Web &amp; Platforme</h3>
                <p>Site-uri de prezentare și magazine online care pornesc rapid și sunt ușor de administrat.</p>
                <a class="link-arrow" href="/servicii#web-design">Vezi cum lucrăm</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-chart-line" aria-hidden="true"></i></div>
                <h3>SEO &amp; Distribuție organică</h3>
                <p>Optimizare pentru Google și conținut clar, astfel încât oamenii să te găsească ușor.</p>
                <a class="link-arrow" href="/servicii#seo">Solicită un audit</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-users" aria-hidden="true"></i></div>
                <h3>Social Media &amp; Communities</h3>
                <p>Postări și campanii pe rețelele sociale care păstrează comunitatea aproape de brand.</p>
                <a class="link-arrow" href="/servicii#social-media">Planifică următoarea campanie</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
                <h3>Branding &amp; Content Studio</h3>
                <p>Logo, materiale vizuale și texte care explică limpede ce te diferențiază.</p>
                <a class="link-arrow" href="/preturi">Vezi prețurile</a>
            </article>
        </div>
    </div>
</section>
<section class="insights" id="strategie-digitala" aria-labelledby="insights-title">
    <div class="container">
        <div>
            <h2 id="insights-title">Cum lucrăm pentru ca site-ul tău să dea rezultate</h2>
            <p>Urmezi un plan clar, bazat pe discuții cu tine și pe nevoile reale ale clienților tăi. Astfel, lansarea site-ului este
            ordonată, fără surprize, iar afacerea ta poate crește în ritmul dorit.</p>
        </div>
        <div class="insights-grid">
            <article class="insight-card">
                <span>Descoperire</span>
                <h3>Îți cunoaștem afacerea și clienții</h3>
                <p>Discutăm despre ce vinzi, ce își doresc oamenii și ce fac competitorii, pentru a stabili ce conținut și ce pagini sunt necesare.</p>
            </article>
            <article class="insight-card">
                <span>Design &amp; Construire</span>
                <h3>Creăm pagini frumoase și ușor de folosit</h3>
                <p>Transformăm ideile în machete, apoi în pagini reale, rapide și ușor de accesat de pe orice dispozitiv.</p>
            </article>
            <article class="insight-card">
                <span>Creștere</span>
                <h3>Actualizăm constant pentru mai multe vânzări</h3>
                <p>Măsurăm rezultatele, ajustăm textele și imaginile și lansăm campanii noi ca să atragem mereu clienți pregătiți să cumpere.</p>
            </article>
        </div>
    </div>
</section>
<section class="portfolio-preview" aria-labelledby="portfolio-title">
    <div class="container">
        <div class="section-header">
            <h2 id="portfolio-title">Proiecte recente</h2>
            <a class="link-arrow" href="/portofoliu">Vezi toate exemplele</a>
        </div>
        <div class="portfolio-grid">
            <article class="portfolio-card">
                <div class="portfolio-media">
                    <div class="mockup-card mockup-pulse" role="img" aria-label="Previzualizare proiect Pulse Media">
                        <span class="mockup-label" aria-hidden="true">Pulse Media</span>
                    </div>
                </div>
                <div class="portfolio-overlay">
                    <h3>Pulse Media</h3>
                    <p>Site de știri și newsletter ușor de actualizat</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">
                    <div class="mockup-card mockup-nebula" role="img" aria-label="Previzualizare proiect Nebula Commerce">
                        <span class="mockup-label" aria-hidden="true">Nebula Commerce</span>
                    </div>
                </div>
                <div class="portfolio-overlay">
                    <h3>Nebula Commerce</h3>
                    <p>Magazin online de modă cu proces de cumpărare simplu</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">
                    <div class="mockup-card mockup-skyline" role="img" aria-label="Previzualizare proiect Skyline Air">
                        <span class="mockup-label" aria-hidden="true">Skyline Air</span>
                    </div>
                </div>
                <div class="portfolio-overlay">
                    <h3>Skyline Air</h3>
                    <p>Platformă de rezervări cu explicații pas cu pas</p>
                </div>
            </article>
            <article class="portfolio-card">
                <div class="portfolio-media">
                    <div class="mockup-card mockup-prime" role="img" aria-label="Previzualizare proiect Prime Estates">
                        <span class="mockup-label" aria-hidden="true">Prime Estates</span>
                    </div>
                </div>
                <div class="portfolio-overlay">
                    <h3>Prime Estates</h3>
                    <p>Site imobiliar cu tururi virtuale și formulare clare</p>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="testimonials" id="testimoniale" aria-labelledby="testimonials-title">
    <div class="container">
        <h2 id="testimonials-title">Ce spun clienții despre noi</h2>
        <div class="testimonial-grid">
            <article class="testimonial-card">
                <p class="testimonial-quote">„DesignToro ne-a făcut un site ușor de folosit și de actualizat. Avem de două ori mai
                multe cereri decât înainte.”</p>
                <div class="testimonial-meta">
                    <strong>Irina C., CEO Glow Beauty</strong>
                    <span>Industrie beauty</span>
                </div>
            </article>
            <article class="testimonial-card">
                <p class="testimonial-quote">„Lansarea a fost simplă și bine organizată. Echipa s-a ocupat de site și de reclame,
                iar vânzările au crescut din prima lună.”</p>
                <div class="testimonial-meta">
                    <strong>Andrei M., Co-fondator UrbanFit</strong>
                    <span>Start-up fitness</span>
                </div>
            </article>
            <article class="testimonial-card">
                <p class="testimonial-quote">„Primim rapoarte clare și recomandări ușor de pus în practică. Știm mereu ce se întâmplă cu
                site-ul și cu campaniile noastre.”</p>
                <div class="testimonial-meta">
                    <strong>Bianca P., Marketing Manager NordEstate</strong>
                    <span>Real estate</span>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="principles" aria-labelledby="principles-title">
    <div class="container principles-grid">
        <div class="principles-intro">
            <h2 id="principles-title">Cum colaborăm de la prima discuție până după lansare</h2>
            <p>Ne dorim ca totul să fie simplu, clar și ușor de urmărit, indiferent cât de familiar ești cu partea digitală.</p>
        </div>
        <ul class="principles-list">
            <li>
                <h3>Plan pe înțelesul tuturor</h3>
                <p>Stabilim împreună pașii importanți, termenele și responsabilitățile, fără termeni complicați.</p>
            </li>
            <li>
                <h3>Idei testate, nu experimente riscante</h3>
                <p>Folosim soluții verificate și explicăm de ce sunt potrivite înainte de a le implementa.</p>
            </li>
            <li>
                <h3>Rezultate care se văd</h3>
                <p>Urmărim cifre simple: câți vizitatori primești, câte cereri apar și cum se schimbă vânzările.</p>
            </li>
            <li>
                <h3>Sprijin după lansare</h3>
                <p>Răspundem rapid la întrebări, facem actualizări și oferim sfaturi ori de câte ori ai nevoie.</p>
            </li>
        </ul>
    </div>
</section>
<section class="faq" id="intrebari-frecvente" aria-labelledby="faq-title">
    <div class="container">
        <h2 id="faq-title">Întrebări frecvente despre colaborarea cu noi</h2>
        <div class="faq-grid">
            <article class="faq-item">
                <h3>Cât durează să lansăm un site?</h3>
                <p>În mod obișnuit, un site complet durează între 1 și 6 săptămâni, în funcție de complexitate și materialele
                pe care le avem disponibile. Îți arătăm stadiul proiectului în fiecare săptămână.</p>
            </article>
            <article class="faq-item">
                <h3>Ce include pachetul de SEO și conținut?</h3>
                <p>Analizăm ce caută clienții tăi, rescriem paginile cheie și pregătim articole simple care răspund întrebărilor lor.
                Ne ocupăm și de setările tehnice necesare pentru Google.</p>
            </article>
            <article class="faq-item">
                <h3>Gestionați și campaniile de lansare?</h3>
                <p>Da. Setăm reclamele online, mesajele pentru e-mail și postările din social media, astfel încât oamenii să afle rapid
                despre noul tău site și să revină pentru a cumpăra.</p>
            </article>
        </div>
    </div>
</section>
<section class="cta-final" aria-labelledby="cta-title">
    <div class="container cta-content">
        <h2 id="cta-title">Ești gata să îți crești afacerea online?</h2>
        <p>Hai să discutăm despre următorul tău site și despre pașii clari prin care ajungem la mai mulți clienți.</p>
        <a class="btn btn-accent" href="/contact">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
