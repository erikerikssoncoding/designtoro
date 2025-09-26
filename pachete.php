<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Prețuri Creare Site și Pachete Marketing | DesignToro';
$pageDescription = 'Compară pachetele DesignToro pentru web design, marketing și mentenanță. Alege soluția potrivită afacerii tale.';
$pageKeywords = 'preț creare site, pachet web design, ofertă site prezentare, cost mentenanță site, prețuri marketing';
$pageUrl = 'https://www.designtoro.ro/pachete';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="pricing-hero">
    <div class="container narrow text-center">
        <h1 id="pricing-hero">Pachete adaptate nevoilor tale.</h1>
        <p>Transparență totală, beneficii clare și flexibilitate pentru proiecte la început sau în plină expansiune.</p>
    </div>
</section>
<section class="pricing py-5" aria-label="Pachete de servicii">
    <div class="container pricing-grid">
        <article class="pricing-card">
            <h2>Entry Level</h2>
            <p class="pricing-tag">Ideal pentru start-up-uri</p>
            <ul>
                <li>Design landing page</li>
                <li>Structură one-page</li>
                <li>Copywriting de bază</li>
                <li>Integrare formulare esențiale</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
        </article>
        <article class="pricing-card popular">
            <div class="badge">Cel mai popular</div>
            <h2>Business Plus</h2>
            <p class="pricing-tag">Potrivit pentru afaceri în creștere</p>
            <ul>
                <li>Design multipage personalizat</li>
                <li>SEO on-page & analytics</li>
                <li>Integrare blog & automatizări</li>
                <li>Suport prioritar la lansare</li>
            </ul>
            <button class="btn btn-accent" data-scroll="contact">Cere ofertă</button>
        </article>
        <article class="pricing-card">
            <h2>Executive</h2>
            <p class="pricing-tag">Pentru branduri enterprise</p>
            <ul>
                <li>Experiențe digitale custom</li>
                <li>Integrare CRM & marketing automation</li>
                <li>Optimizare conversii ongoing</li>
                <li>Consultanță dedicată CX</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
        </article>
    </div>
</section>
<section class="pricing py-5" aria-label="Pachete de mentenanță și social media">
    <div class="container pricing-grid maintenance">
        <article class="pricing-card">
            <h2>Mentenanță Web</h2>
            <ul>
                <li>Monitorizare uptime & securitate</li>
                <li>Actualizări lunare platformă & plugin-uri</li>
                <li>Raportare performanță</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
        </article>
        <article class="pricing-card">
            <h2>Social Media Marketing</h2>
            <ul>
                <li>Strategie și calendar editorial</li>
                <li>Producție creativă foto/video</li>
                <li>Campanii plătite și raportări</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
        </article>
    </div>
</section>
<section class="special-offer" aria-labelledby="offer-title">
    <div class="container special-grid">
        <div>
            <h2 id="offer-title">Magazin online complet</h2>
            <p>De la <strong>399€</strong> pentru un magazin online scalabil, optimizat pentru vânzări și automatizări.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Primește ofertă personalizată</a>
    </div>
</section>
<section class="cta-banner py-5" id="contact" aria-labelledby="cta-pricing">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-pricing">Vrei să discutăm pachetul potrivit?</h2>
            <p>Lasă-ne detaliile proiectului și îți răspundem cu un plan personalizat.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
