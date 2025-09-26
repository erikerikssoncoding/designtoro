<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Servicii Web Design, SEO și Marketing Online | DesignToro';
$pageDescription = 'Află ce servicii oferă DesignToro: creare site, optimizare Google, social media și branding explicate pe înțelesul tuturor.';
$pageKeywords = 'servicii creare site, optimizare seo, management social media, creare magazin online, branding';
$pageUrl = 'https://www.designtoro.ro/servicii';
$currentPage = 'servicii';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="services-hero">
    <div class="container narrow text-center">
        <h1 id="services-hero">Servicii pentru site-uri și campanii care aduc clienți.</h1>
        <p>Un singur partener pentru design, texte, promovare și suport continuu, explicate pe înțelesul tuturor.</p>
    </div>
</section>
<section class="service-list py-5" aria-label="Lista serviciilor principale">
    <div class="container service-grid detailed">
        <article class="service-card" id="web-design">
            <div class="service-icon"><i class="fa-solid fa-display" aria-hidden="true"></i></div>
            <h2>Experiențe Web &amp; Platforme</h2>
            <p>Site-uri de prezentare și magazine online care se încarcă rapid și sunt ușor de folosit.</p>
            <ul class="service-benefits">
                <li>Analizăm afacerea ta și stabilim ce pagini și conținut sunt necesare.</li>
                <li>Design adaptat brandului, ușor de urmărit pe telefon și desktop.</li>
                <li>Integrare cu sistem de administrare, plăți și formulare simple.</li>
            </ul>
            <a class="link-arrow" href="/contact">Programează o discuție</a>
        </article>
        <article class="service-card" id="seo">
            <div class="service-icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></div>
            <h2>SEO &amp; Content Serializat</h2>
            <p>Optimizare pentru Google și conținut clar care răspunde la întrebările clienților tăi.</p>
            <ul class="service-benefits">
                <li>Căutăm expresiile folosite de publicul tău și rescriem paginile importante.</li>
                <li>Îmbunătățim structura tehnică și viteza site-ului.</li>
                <li>Scriem articole ușor de citit și obținem recomandări din site-uri relevante.</li>
            </ul>
            <a class="link-arrow" href="/contact">Solicită un audit SEO</a>
        </article>
        <article class="service-card" id="social-media">
            <div class="service-icon"><i class="fa-solid fa-comments" aria-hidden="true"></i></div>
            <h2>Social Media &amp; Communities</h2>
            <p>Postări, campanii și răspunsuri rapide care țin comunitatea aproape.</p>
            <ul class="service-benefits">
                <li>Stabilim tonul mesajelor și calendarul de postări.</li>
                <li>Creăm imagini, clipuri și șabloane ușor de refolosit.</li>
                <li>Setăm reclame și mesaje automate prietenoase.</li>
            </ul>
            <a class="link-arrow" href="/contact">Planifică o campanie</a>
        </article>
        <article class="service-card" id="branding">
            <div class="service-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
            <h2>Branding &amp; Content Studio</h2>
            <p>Identitate vizuală și texte care explică simplu ce te face diferit.</p>
            <ul class="service-benefits">
                <li>Definim povestea brandului și mesajele principale.</li>
                <li>Creăm logo, culori și materiale pentru online și offline.</li>
                <li>Scriem texte clare pentru pagini, prezentări și campanii.</li>
            </ul>
            <a class="link-arrow" href="/contact">Cere o ofertă personalizată</a>
        </article>
    </div>
</section>
<section class="service-process py-5" aria-labelledby="process-title">
    <div class="container process-grid">
        <div>
            <h2 id="process-title">Pașii prin care lucrăm împreună</h2>
            <p>Îți arătăm din start ce urmează și ce avem nevoie de la tine, astfel încât proiectul să se miște fără blocaje.</p>
        </div>
        <ol class="process-steps">
            <li>
                <h3>Descoperire</h3>
                <p>Discutăm despre afacerea ta, publicul țintă și ofertele principale, apoi stabilim planul site-ului.</p>
            </li>
            <li>
                <h3>Design &amp; Testare</h3>
                <p>Îți prezentăm schițe și variante de design, le ajustăm pe baza feedbackului și pregătim textele.</p>
            </li>
            <li>
                <h3>Construcție &amp; verificări</h3>
                <p>Transformăm designul în pagini reale, verificăm viteza, formularele și afișarea pe toate dispozitivele.</p>
            </li>
            <li>
                <h3>Lansare &amp; creștere</h3>
                <p>Publicăm site-ul, urmărim rezultatele și propunem îmbunătățiri pentru a aduce constant clienți noi.</p>
            </li>
        </ol>
    </div>
</section>
<section class="cta-banner py-5" aria-labelledby="cta-services">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-services">Hai să discutăm despre următorul tău site.</h2>
            <p>Scrie-ne câteva detalii, iar în 24 de ore primești un plan pe pași simpli și un buget estimativ.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Cere ofertă</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
