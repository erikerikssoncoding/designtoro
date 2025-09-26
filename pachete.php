<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Prețuri Creare Site și Pachete Marketing | DesignToro';
$pageDescription = 'Compară pachetele DesignToro pentru web design, marketing și mentenanță. Alege soluția potrivită afacerii tale.';
$pageKeywords = 'preț creare site, pachet web design, ofertă site prezentare, cost mentenanță site, prețuri marketing';
$pageUrl = 'https://www.designtoro.ro/pachete';
$currentPage = 'pachete';
include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="pricing-hero">
    <div class="container narrow text-center">
        <h1 id="pricing-hero">Pachete create pentru lansări digitale performante.</h1>
        <p>Transparență totală, beneficii clare și flexibilitate pentru branduri aflate la start sau în expansiune.</p>
    </div>
</section>
<section class="pricing py-5" aria-label="Pachete de servicii">
    <div class="container pricing-grid">
        <article class="pricing-card">
            <h2>Starter Premiere</h2>
            <p class="pricing-tag">Ideal pentru start-up-uri</p>
            <ul>
                <li>Landing page scenarizat pentru conversie rapidă</li>
                <li>Design one-page cu animații ușoare</li>
                <li>Copywriting de bază și integrare formulare</li>
                <li>Implementare analytics &amp; heatmaps</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
        </article>
        <article class="pricing-card popular">
            <div class="badge">Cel mai ales</div>
            <h2>Spotlight</h2>
            <p class="pricing-tag">Pentru branduri în creștere</p>
            <ul>
                <li>Website multipage cu UI orientat spre conversie</li>
                <li>SEO on-page, content calendar și blog integrat</li>
                <li>Automatizări lead nurturing &amp; e-mail marketing</li>
                <li>Suport dedicat în primele 60 de zile</li>
            </ul>
            <button class="btn btn-accent" data-scroll="contact">Cere ofertă</button>
        </article>
        <article class="pricing-card">
            <h2>Prime Release</h2>
            <p class="pricing-tag">Pentru companii enterprise</p>
            <ul>
                <li>Experiențe digitale custom și arhitectură complexă</li>
                <li>Integrare CRM, membership și marketing automation</li>
                <li>Optimizare conversii continuă &amp; growth sprints</li>
                <li>Consultanță CX și raportare avansată</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
        </article>
    </div>
</section>
<section class="pricing py-5" aria-label="Pachete de mentenanță și social media">
    <div class="container pricing-grid maintenance">
        <article class="pricing-card">
            <h2>Mentenanță &amp; Support</h2>
            <ul>
                <li>Monitorizare uptime, securitate și backup-uri automate</li>
                <li>Actualizări lunare platformă și componente</li>
                <li>Raportare de performanță și recomandări</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
        </article>
        <article class="pricing-card">
            <h2>Social Media Showrunner</h2>
            <ul>
                <li>Strategie editorială, grilă de conținut și tone of voice</li>
                <li>Producție creativă pentru social media și asset-uri animate</li>
                <li>Campanii plătite și raportări detaliate</li>
            </ul>
            <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
        </article>
    </div>
</section>
<section class="special-offer" aria-labelledby="offer-title">
    <div class="container special-grid">
        <div>
            <h2 id="offer-title">Pachet ecommerce complet</h2>
            <p>De la <strong>399€</strong> pentru un magazin online scalabil, optimizat pentru funnel-uri și automatizări.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Primește ofertă personalizată</a>
    </div>
</section>
<section class="cta-banner py-5" id="contact" aria-labelledby="cta-pricing">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-pricing">Vrei să discutăm pachetul potrivit?</h2>
            <p>Spune-ne despre obiectivele tale și îți trimitem o propunere adaptată.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
