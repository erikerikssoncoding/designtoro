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
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet Starter Premiere">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Starter Premiere</h2>
                    <p class="pricing-tag">Ideal pentru start-up-uri</p>
                    <ul>
                        <li>Landing page scenarizat pentru conversie rapidă</li>
                        <li>Design one-page cu animații ușoare</li>
                        <li>Copywriting de bază și integrare formulare</li>
                        <li>Implementare analytics &amp; heatmaps</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Starter Premiere este pachetul potrivit dacă vrei să lansezi rapid un site clar și ușor de urmărit.</p>
                    <ul>
                        <li>Construim o singură pagină care explică pe înțelesul tuturor cine ești și ce oferi.</li>
                        <li>Textele și imaginile sunt alese pentru a ghida vizitatorul spre acțiunea dorită.</li>
                        <li>Primești instrumente simple de monitorizare ca să știi câți oameni ajung pe site.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
        <article class="pricing-card popular" data-pricing-card tabindex="0" aria-label="Detalii pachet Spotlight">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <div class="badge">Cel mai ales</div>
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Spotlight</h2>
                    <p class="pricing-tag">Pentru branduri în creștere</p>
                    <ul>
                        <li>Website multipage cu UI orientat spre conversie</li>
                        <li>SEO on-page, content calendar și blog integrat</li>
                        <li>Automatizări lead nurturing &amp; e-mail marketing</li>
                        <li>Suport dedicat în primele 60 de zile</li>
                    </ul>
                    <button class="btn btn-accent" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Spotlight este pentru brandurile care cresc și vor să își spună povestea pe mai multe pagini.</p>
                    <ul>
                        <li>Structurăm site-ul pe secțiuni clare pentru servicii, produse și articole.</li>
                        <li>Te ajutăm să apari în căutările relevante și îți oferim un plan de conținut lunar.</li>
                        <li>Automatizările țin legătura cu potențialii clienți și îți economisesc timp.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet Prime Release">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Prime Release</h2>
                    <p class="pricing-tag">Pentru companii enterprise</p>
                    <ul>
                        <li>Experiențe digitale custom și arhitectură complexă</li>
                        <li>Integrare CRM, membership și marketing automation</li>
                        <li>Optimizare conversii continuă &amp; growth sprints</li>
                        <li>Consultanță CX și raportare avansată</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Prime Release este gândit pentru echipe mari cu procese complexe și multe integrări digitale.</p>
                    <ul>
                        <li>Construim experiențe personalizate care țin cont de fiecare etapă a clientului.</li>
                        <li>Legăm site-ul de CRM, zone cu acces pe bază de cont sau abonamente fără bătăi de cap.</li>
                        <li>Optimizările și rapoartele recurente te ajută să iei decizii bazate pe date reale.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
    </div>
</section>
<section class="pricing py-5" aria-label="Pachete de mentenanță și social media">
    <div class="container pricing-grid maintenance">
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet Mentenanță și Support">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Mentenanță &amp; Support</h2>
                    <ul>
                        <li>Monitorizare uptime, securitate și backup-uri automate</li>
                        <li>Actualizări lunare platformă și componente</li>
                        <li>Raportare de performanță și recomandări</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Pachetul de mentenanță te scapă de grija actualizărilor și a problemelor tehnice neașteptate.</p>
                    <ul>
                        <li>Monitorizăm constant site-ul și intervenim rapid dacă apare o eroare.</li>
                        <li>Actualizăm platforma la timp și păstrăm copii de siguranță.</li>
                        <li>Primești rapoarte pe înțelesul tău despre ce s-a lucrat.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet Social Media Showrunner">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Social Media Showrunner</h2>
                    <ul>
                        <li>Strategie editorială, grilă de conținut și tone of voice</li>
                        <li>Producție creativă pentru social media și asset-uri animate</li>
                        <li>Campanii plătite și raportări detaliate</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Social Media Showrunner este pentru brandurile care vor o prezență constantă și coerentă.</p>
                    <ul>
                        <li>Primești un plan editorial simplu care arată ce se postează și când.</li>
                        <li>Creăm vizualuri și animații adaptate fiecărei platforme.</li>
                        <li>Analizăm campaniile plătite și optimizăm mesajele lună de lună.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
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
