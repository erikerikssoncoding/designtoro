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
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet StartUp">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <div class="info-notice" id="pricing-info-prompt" role="status" aria-live="polite" aria-hidden="true">
                        <span>apasa aici pentru informatii</span>
                    </div>
                    <h2>StartUp</h2>
                    <p class="pricing-tag">Prezență online esențială</p>
                    <ul>
                        <li>Găzduire web premium pe server privat și domeniu .RO inclus</li>
                        <li>Design 100% original pentru până la 4 pagini esențiale</li>
                        <li>Interfață complet adaptabilă pe mobil, tabletă și desktop</li>
                        <li>Panou de administrare intuitiv și e-mailuri profesionale personalizate</li>
                        <li>Securitate standard: SSL și backup-uri zilnice</li>
                        <li>Termen de livrare: 5-10 zile lucrătoare</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>StartUp este fundația potrivită dacă vrei o prezență online rapidă, clară și construită corect încă de la început.</p>
                    <ul>
                        <li>Primești o arhitectură de bază cu design original și elemente vizuale personalizate brandului tău.</li>
                        <li>Administrarea conținutului este simplă datorită panoului intuitiv și adreselor de e-mail dedicate.</li>
                        <li>Securitatea este asigurată prin SSL, backup-uri zilnice și găzduire performantă.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
        <article class="pricing-card popular" data-pricing-card tabindex="0" aria-label="Detalii pachet Business Plus">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <div class="badge">Cel mai ales</div>
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Business Plus</h2>
                    <p class="pricing-tag">Pentru branduri care vor să convingă</p>
                    <ul>
                        <li>Include toate beneficiile StartUp plus conținut profesional (texte și imagini premium)</li>
                        <li>Structură extinsă până la 7 pagini și identitate vizuală cu logo vectorial</li>
                        <li>Optimizare SEO on-page și conformitate GDPR de bază</li>
                        <li>Integrare Google Analytics, Facebook Pixel și soluții de chat</li>
                        <li>Termen de livrare: 10-20 de zile lucrătoare</li>
                    </ul>
                    <button class="btn btn-accent" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Business Plus este soluția completă pentru afaceri care vor să transforme vizitatorii în clienți.</p>
                    <ul>
                        <li>Textele persuasive și imaginile atent selectate construiesc încredere și diferențiază brandul.</li>
                        <li>Logo-ul și identitatea vizuală consolidează mesajul pe fiecare pagină a site-ului.</li>
                        <li>Instrumentele de analiză și chat oferă vizibilitate asupra performanței și sprijină conversia.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
        <article class="pricing-card" data-pricing-card tabindex="0" aria-label="Detalii pachet Executive">
            <div class="pricing-card-inner">
                <div class="pricing-card-face pricing-card-front" aria-hidden="false">
                    <button class="info-toggle" type="button" data-info-toggle aria-expanded="false" aria-label="Vezi explicații ușor de înțeles">
                        <span aria-hidden="true">i</span>
                    </button>
                    <h2>Executive</h2>
                    <p class="pricing-tag">Strategic pentru afaceri consolidate</p>
                    <ul>
                        <li>Include toate avantajele StartUp și Business Plus cu până la 15 pagini complexe</li>
                        <li>Strategie SEO avansată: cercetare de cuvinte cheie și optimizare pentru fiecare pagină</li>
                        <li>Consultanță pentru strategie de conținut și infrastructură performantă globală</li>
                        <li>Optimizare Google Business Profile și materiale de brand dedicate</li>
                        <li>Termen de livrare: 20-40 de zile lucrătoare</li>
                    </ul>
                    <button class="btn btn-secondary" data-scroll="contact">Cere ofertă</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Executive este pachetul pentru companii care vor autoritate, performanță și vizibilitate constantă.</p>
                    <ul>
                        <li>Arhitectura extinsă a site-ului susține un conținut variat, cu accent pe autoritate și conversie.</li>
                        <li>Strategia SEO avansată și infrastructura globală oferă viteză, protecție și poziționare solidă.</li>
                        <li>Dominanța locală și materialele de brand întăresc prezența companiei în fața clienților cheie.</li>
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
