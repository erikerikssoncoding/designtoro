<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'Prețuri Creare Site și Pachete Marketing | DesignToro';
$pageDescription = 'Vezi prețurile DesignToro pentru site-uri, promovare și mentenanță. Alege pachetul potrivit pentru afacerea ta.';
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
        <h1 id="pricing-hero">Prețuri clare pentru site-uri și promovare online.</h1>
        <p>Alege pachetul care se potrivește afacerii tale și află dinainte ce primești și în cât timp livrăm.</p>
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
                        <span>apasă aici pentru explicații pe scurt</span>
                    </div>
                    <h2>StartUp</h2>
                    <p class="pricing-tag">Tot ce îți trebuie pentru a fi online</p>
                    <ul>
                        <li>Găzduire sigură pe server dedicat și domeniu .RO inclus</li>
                        <li>Design personalizat pentru până la 4 pagini importante</li>
                        <li>Site adaptat pentru telefon, tabletă și desktop</li>
                        <li>Panou de administrare simplu și adrese de e-mail profesionale</li>
                        <li>Protecție de bază: certificat SSL și copii de siguranță zilnice</li>
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="StartUp">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 5-10 zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>StartUp este baza potrivită dacă vrei un site rapid, ușor de folosit și construit corect încă de la început.</p>
                    <ul>
                        <li>Site-ul este găzduit pe serverul nostru dedicat – nu împarți resursele cu sute de alte proiecte.</li>
                        <li>Primești un design original, texte de start și imagini potrivite brandului tău.</li>
                        <li>Îți arătăm cum să actualizezi singur paginile și setăm e-mailuri cu numele afacerii tale.</li>
                        <li>Monitorizăm securitatea, facem backup-uri zilnice și te anunțăm imediat dacă apare o problemă.</li>
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
                    <p class="pricing-tag">Pentru afaceri care vor să fie preferate</p>
                    <ul>
                        <li>Include tot ce oferă StartUp plus texte și imagini realizate de echipa noastră</li>
                        <li>Structură extinsă până la 7 pagini și actualizarea identității vizuale</li>
                        <li>Optimizare pentru Google și setări esențiale de confidențialitate</li>
                        <li>Integrare cu instrumente de analiză și chat pentru clienți</li>
                    </ul>
                    <button class="btn btn-accent" data-offer-modal-open data-offer-plan="Business Plus">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 10-20 de zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Business Plus este pachetul complet pentru afaceri care vor să transforme vizitatorii în clienți fideli.</p>
                    <ul>
                        <li>Realizăm interviuri scurte cu tine și echipa, apoi scriem mesaje clare și convingătoare.</li>
                        <li>Primești fișiere editabile pentru logo și materiale, gata pentru orice suport de comunicare.</li>
                        <li>Setăm instrumente care arată câți vizitatori ai și ce acțiuni fac în site.</li>
                        <li>Serverul dedicat păstrează site-ul rapid și stabil chiar și în perioade aglomerate.</li>
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
                    <p class="pricing-tag">Pentru companii cu planuri mari</p>
                    <ul>
                        <li>Include toate avantajele StartUp și Business Plus, extins până la 15 pagini complexe</li>
                        <li>Plan SEO detaliat pentru fiecare pagină importantă</li>
                        <li>Consiliere pentru conținut, integrarea sistemelor interne și hosting internațional</li>
                        <li>Optimizare pentru Google Business Profile și materiale de prezentare dedicate</li>
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Executive">Cere ofertă</button>
                    <p class="delivery-note">Termen estimat de livrare: 20-40 de zile lucrătoare</p>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Executive este pachetul pentru companii care vor vizibilitate constantă și procese automate.</p>
                    <ul>
                        <li>Structura site-ului susține campanii ample, formulare complexe și conectare cu CRM-ul tău.</li>
                        <li>Hostingul global asigură încărcare rapidă și protecție în orice țară.</li>
                        <li>Organizăm sesiuni periodice pentru planificare și oferim materiale proaspete pentru echipa de vânzări.</li>
                        <li>Serverul dedicat DesignToro păstrează resursele doar pentru brandul tău și menține uptime aproape de 100%.</li>
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
                        <li>Supraveghere zilnică a site-ului și copii de siguranță automate</li>
                        <li>Actualizări lunare pentru platformă și module</li>
                        <li>Raport lunar cu intervenții și recomandări</li>
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Mentenanță &amp; Support">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Pachetul de mentenanță te scapă de grija actualizărilor și a problemelor tehnice neașteptate.</p>
                    <ul>
                        <li>Verificăm site-ul zilnic și intervenim rapid când apare o eroare sau o alertă de securitate.</li>
                        <li>Actualizăm platforma, testăm compatibilitatea și păstrăm copii de siguranță în locuri separate.</li>
                        <li>Primești rapoarte pe înțelesul tău și pași clari pentru luna următoare.</li>
                        <li>Serverul dedicat pentru clienți DesignToro menține site-ul stabil și rapid.</li>
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
                        <li>Plan editorial lunar și stil de comunicare adaptat publicului tău</li>
                        <li>Materiale vizuale și video scurte pentru rețelele sociale</li>
                        <li>Campanii plătite și rapoarte ușor de citit</li>
                    </ul>
                    <button class="btn btn-secondary" data-offer-modal-open data-offer-plan="Social Media Showrunner">Solicită pachet</button>
                </div>
                <div class="pricing-card-face pricing-card-back" aria-hidden="true">
                    <h3>Pe scurt</h3>
                    <p>Social Media Showrunner este pentru brandurile care vor o prezență constantă și coerentă.</p>
                    <ul>
                        <li>Primești un calendar simplu cu ce se postează și când, plus răspunsuri standard pentru comentarii.</li>
                        <li>Creăm imagini, animații și șabloane ușor de folosit de echipa ta.</li>
                        <li>Verificăm lunar campaniile plătite și ajustăm mesajele pentru mai multe cereri și vânzări.</li>
                        <li>Aliniem mesajele cu paginile site-ului tău pentru un parcurs clar din social media până la contact.</li>
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
            <h2 id="offer-title">Pachet complet pentru magazine online</h2>
            <p>De la <strong>399€</strong> pentru un magazin online pregătit pentru plăți, facturare și promovare continuă.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Primește ofertă personalizată</a>
    </div>
</section>
<section class="cta-banner py-5" id="contact" aria-labelledby="cta-pricing">
    <div class="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
        <div>
            <h2 id="cta-pricing">Hai să alegem împreună pachetul potrivit.</h2>
            <p>Spune-ne ce planuri ai, iar noi îți trimitem o recomandare clară de buget și pași următori.</p>
        </div>
        <a class="btn btn-accent" href="/contact">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
