<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Prețuri Creare Site și Pachete Marketing | DesignToro';
$pageDescription = 'Compară prețurile și pachetele DesignToro pentru web design, marketing și mentenanță. Alege soluția potrivită afacerii tale.';
$pageKeywords = 'preț creare site, pachet web design, ofertă site prezentare, cost mentenanță site, prețuri marketing';
$pageUrl = 'https://www.designtoro.ro/preturi';
$currentPage = 'preturi';
$offerResponse = null;
$offerModalShouldOpen = false;
$bodyClasses = $bodyClasses ?? [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once __DIR__ . '/includes/offer-handler.php';
    $offerResponse = handle_offer_request();
    $offerModalShouldOpen = true;

    if (empty($offerResponse['success'])) {
        $bodyClasses[] = 'show-recaptcha';
    }
}

include __DIR__ . '/partials/head.php';
?>
<section class="page-hero py-5" aria-labelledby="pricing-hero">
    <div class="container narrow text-center">
        <h1 id="pricing-hero">Prețuri transparente pentru lansări digitale performante.</h1>
        <p>Transparență totală, beneficii clare și flexibilitate pentru branduri aflate la start sau în expansiune.</p>
    </div>
</section>
<section class="pricing py-5" aria-label="Prețuri servicii web design">
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
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="StartUp">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 5-10 zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>StartUp este fundația potrivită dacă vrei o prezență online rapidă, clară și construită corect încă de la început.</p>
                    <ul>
                        <li>Site-ul este găzduit pe serverul nostru privat la care au acces doar clienții DesignToro – nu îl împarți cu mii de site-uri, ca în găzduirea de masă.</li>
                        <li>Primești o arhitectură clară cu design original, copy de start și elemente vizuale aliniate identității brandului.</li>
                        <li>Administrarea conținutului rămâne intuitivă datorită tutorialelor dedicate și adreselor de e-mail profesionale.</li>
                        <li>Securitatea este activ monitorizată prin SSL, backup-uri zilnice testate și alerte de uptime.</li>
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
                    </ul>
                    <button class="btn btn-accent" data-offer-modal-open data-offer-plan="Business Plus">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 10-20 de zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Business Plus este soluția completă pentru afaceri care vor să transforme vizitatorii în clienți.</p>
                    <ul>
                        <li>Textele persuasive și sesiunile de interviu ne ajută să traducem expertiza ta în mesaje clare care convertesc.</li>
                        <li>Logo-ul, paleta cromatică și sistemul vizual sunt livrate în format editabil, gata pentru orice material viitor.</li>
                        <li>Instrumentele de analiză și chat oferă vizibilitate asupra performanței și sprijină conversia în timp real.</li>
                        <li>Infrastructura privată asigură resurse dedicate – site-ul tău nu împarte CPU sau memorie cu sute de proiecte străine.</li>
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
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Executive">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 20-40 de zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Executive este pachetul pentru companii care vor autoritate, performanță și vizibilitate constantă.</p>
                    <ul>
                        <li>Arhitectura extinsă a site-ului susține campanii de conținut, lead magnets și integrarea CRM-ului.</li>
                        <li>Strategia SEO avansată și infrastructura multi-region asigură încărcare rapidă din orice țară și protecție DDoS.</li>
                        <li>Workshop-urile trimestriale și materialele de brand dedicate alimentează constant echipa de vânzări.</li>
                        <li>Găzduirea pe server dedicat DesignToro păstrează resursele doar pentru brandul tău și menține uptime de 99,9%.</li>
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
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Mentenanță &amp; Support">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Pachetul de mentenanță te scapă de grija actualizărilor și a problemelor tehnice neașteptate.</p>
                    <ul>
                        <li>Monitorizăm constant site-ul și intervenim rapid dacă apare o eroare sau un plugin vulnerabil.</li>
                        <li>Actualizăm platforma la timp, testăm compatibilitatea și păstrăm copii de siguranță în locații separate.</li>
                        <li>Primești rapoarte clare despre fiecare intervenție și recomandări acționabile pentru următoarea lună.</li>
                        <li>Serverul privat rămâne optimizat doar pentru clienții noștri, astfel uptime-ul rămâne peste 99,9%.</li>
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
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Social Media Showrunner">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Social Media Showrunner este pentru brandurile care vor o prezență constantă și coerentă.</p>
                    <ul>
                        <li>Primești un plan editorial simplu care arată ce se postează și când, plus guideline-uri de răspuns rapid.</li>
                        <li>Creăm vizualuri, animații și template-uri reutilizabile astfel încât echipa ta să posteze fără blocaje.</li>
                        <li>Analizăm campaniile plătite și optimizăm mesajele lună de lună, cu focus pe leaduri și vânzări.</li>
                        <li>Sincronizăm constant comunicarea cu landing page-urile găzduite pe serverul nostru privat pentru un parcurs fluent.</li>
                    </ul>
                    <button class="info-back" type="button" data-info-close>Înapoi la detalii</button>
                </div>
            </div>
        </article>
    </div>
</section>
<?php $offerSuccess = $offerResponse && !empty($offerResponse['success']); ?>
<div
    class="offer-modal<?= $offerModalShouldOpen ? ' is-visible' : ''; ?><?= $offerSuccess ? ' is-success' : ''; ?>"
    data-offer-modal
    aria-hidden="<?= $offerModalShouldOpen ? 'false' : 'true'; ?>"
    role="dialog"
    aria-modal="true"
    aria-labelledby="offer-modal-title"
>
    <div class="offer-modal__backdrop" data-offer-modal-close aria-hidden="true"></div>
    <div class="offer-modal__dialog" role="document">
        <button class="offer-modal__close" type="button" data-offer-modal-close aria-label="Închide formularul">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <div class="offer-modal__content" data-offer-modal-content>
            <h2 id="offer-modal-title">Cere o ofertă personalizată</h2>
            <p class="offer-modal__subtitle">Completează detaliile esențiale și revenim cu propunerea potrivită în maximum o zi lucrătoare.</p>
            <?php if ($offerResponse): ?>
                <div class="form-feedback <?= !empty($offerResponse['success']) ? 'success' : 'error'; ?>">
                    <?php if (!empty($offerResponse['success'])): ?>
                        <p>Îți mulțumim! Cererea a fost trimisă. Un specialist DesignToro te va contacta în scurt timp.</p>
                    <?php else: ?>
                        <ul>
                            <?php foreach ($offerResponse['errors'] as $error): ?>
                                <li><?= $error; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
            <form class="offer-form" id="offer-form" method="post" action="/preturi" novalidate>
                <div class="form-group">
                    <label for="offer-name" class="form-label">Nume *</label>
                    <input
                        type="text"
                        id="offer-name"
                        name="name"
                        class="form-control"
                        value="<?= htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                        required
                    >
                </div>
                <div class="form-group">
                    <label for="offer-phone" class="form-label">Număr de telefon *</label>
                    <input
                        type="tel"
                        id="offer-phone"
                        name="phone"
                        class="form-control"
                        value="<?= htmlspecialchars($_POST['phone'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                        required
                    >
                </div>
                <div class="form-group">
                    <label for="offer-email" class="form-label">Email *</label>
                    <input
                        type="email"
                        id="offer-email"
                        name="email"
                        class="form-control"
                        value="<?= htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                        required
                    >
                </div>
                <div class="form-group">
                    <label for="offer-details" class="form-label">Detalii despre site / proiect *</label>
                    <textarea
                        id="offer-details"
                        name="details"
                        rows="5"
                        class="form-control"
                        required
                    ><?= htmlspecialchars($_POST['details'] ?? '', ENT_QUOTES, 'UTF-8'); ?></textarea>
                </div>
                <div class="form-group honeypot">
                    <label for="offer-company">Companie</label>
                    <input type="text" id="offer-company" name="company" autocomplete="off">
                </div>
                <input type="hidden" name="offer_plan" id="offer-plan-field" value="<?= htmlspecialchars($_POST['offer_plan'] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
                <input type="hidden" name="g-recaptcha-response" id="recaptcha-token">
                <button class="btn btn-accent" type="submit">Trimite cererea</button>
            </form>
        </div>
    </div>
</div>
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
