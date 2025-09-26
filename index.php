<?php
require_once __DIR__ . '/includes/security-headers.php';
$pageTitle = 'DesignToro | Agenție Web Design & Marketing Digital București';
$pageDescription = 'DesignToro creează experiențe digitale memorabile pentru branduri care vor să inspire acțiune.';
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
                <p class="eyebrow">Platforme digitale care generează rezultate</p>
                <div class="hero-badges">
                    <span class="badge-pill is-gradient">Strategii de conversie dovedite</span>
                    <span class="badge-pill">Experiențe web memorabile</span>
                </div>
                <h1 id="hero-title">
                    Experiența utilizatorului pe locul #1, cu ecosisteme digitale integrate ce unesc identitatea vizuală și
                    campaniile de marketing pentru a transforma prezența online într-un motor real de creștere.
                </h1>
                <p>
                    Creăm experiențe web orientate spre rezultate, cu fluxuri UX intuitive și strategii de marketing digital
                    perfect orchestrate. De la art direction și copywriting la arhitectură tehnică și growth marketing,
                    gestionăm fiecare proiect ca pe un ecosistem complet, cu un singur scop: creșterea afacerii
                    dumneavoastră.
                </p>
                <ul class="hero-highlights">
                    <li><i class="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>Site-uri orchestrate pentru
                    performanță, cu UI adaptiv și micro-interacțiuni care sporesc încrederea.</li>
                    <li><i class="fa-solid fa-rocket text-primary" aria-hidden="true"></i>Biblioteci de conținut și
                    automatizări personalizate care transformă vizitatorii în membri loiali.</li>
                    <li><i class="fa-solid fa-diagram-project text-primary" aria-hidden="true"></i>Campanii integrate și
                    optimizare continuă pentru conversii în fiecare episod al customer journey-ului.</li>
                </ul>
                <div class="hero-actions">
                    <a class="btn btn-accent" href="/portofoliu">Explorează portofoliul</a>
                    <a class="btn btn-ghost" href="/contact">Rezervă un call</a>
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
                <span>Branduri în prim-plan</span>
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
            <h2 id="about-title">Agenție digitală din București specializată în web design și marketing</h2>
            <p>De peste <?php echo $experienceYears; ?> ani, DesignToro planifică și lansează platforme digitale care convertesc. Aliniem strategia de
            business cu storytelling vizual, componente modulare și tehnologie scalabilă pentru branduri ce vor să-și crească
            vizibilitatea și vânzările.</p>
            <div class="about-metrics" role="list" aria-label="Indicatori de performanță DesignToro">
                <div class="about-metric" role="listitem">
                    <strong>3,2x</strong>
                    <span>ROI mediu generat în primele 90 de zile după lansare</span>
                </div>
                <div class="about-metric" role="listitem">
                    <strong>2,1s</strong>
                    <span>timp mediu de încărcare pentru experiențele optimizate</span>
                </div>
            </div>
        </div>
        <div class="about-details">
            <h3>De ce brandurile ne aleg pentru creștere continuă</h3>
            <p>Acoperim întregul pipeline digital: cercetare, UX, UI, content, dezvoltare, SEO și campanii orchestrate. Lucrăm
            în sprinturi transparente și livrăm kituri complete pentru echipe interne.</p>
            <ul class="about-list">
                <li>Design systems modulare, contraste puternice și micro-interacțiuni orientate spre conversie.</li>
                <li>SEO tehnic, analytics și content calendar integrate cu obiectivele de marketing.</li>
                <li>Automatizări CRM și campanii multi-channel care livrează lead-uri calificate.</li>
                <li>Raportare live, dashboard-uri personalizate și suport post-lansare constant.</li>
            </ul>
        </div>
    </div>
</section>
<section class="services-preview py-5" id="servicii" aria-labelledby="services-title">
    <div class="container">
        <h2 id="services-title">Servicii create pentru platforme captivante</h2>
        <div class="service-grid">
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-window-restore" aria-hidden="true"></i></div>
                <h3>Experiențe Web &amp; Platforme</h3>
                <p>Interfețe modulare, membership și ecommerce construite pentru performanță și conversii.</p>
                <a class="link-arrow" href="/servicii#web-design">Descoperă procesul</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-chart-line" aria-hidden="true"></i></div>
                <h3>SEO &amp; Distribuție organică</h3>
                <p>Optimizare tehnică, conținut serializat și strategii de căutare pentru audiențe calificate.</p>
                <a class="link-arrow" href="/servicii#seo">Solicită un audit</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-users" aria-hidden="true"></i></div>
                <h3>Social Media &amp; Communities</h3>
                <p>Campanii episodice, conținut snackable și automatizări de engagement.</p>
                <a class="link-arrow" href="/servicii#social-media">Planifică o campanie</a>
            </article>
            <article class="service-card">
                <div class="service-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
                <h3>Branding &amp; Content Studio</h3>
                <p>Identități vizuale, ghiduri de comunicare și campanii de conținut care vând.</p>
                <a class="link-arrow" href="/servicii#branding">Vezi pachetele</a>
            </article>
        </div>
    </div>
</section>
<section class="insights" id="strategie-digitala" aria-labelledby="insights-title">
    <div class="container">
        <div>
            <h2 id="insights-title">Metoda noastră de creștere digitală</h2>
            <p>Construim ecosisteme digitale alimentate de date, storytelling și performanță. Fiecare proiect trece printr-un
            pipeline clar, astfel încât lansarea să fie previzibilă și scalabilă.</p>
        </div>
        <div class="insights-grid">
            <article class="insight-card">
                <span>Discovery &amp; Data</span>
                <h3>Analizăm audiența și planificăm sezonul digital</h3>
                <p>Workshop-uri de poziționare, maparea user journey-ului și benchmark competitiv pentru a crea arhitecturi
                intuitive.</p>
            </article>
            <article class="insight-card">
                <span>Design &amp; Build</span>
                <h3>UI orientat spre conversie și infrastructură gata de scalare</h3>
                <p>Design systems modulare, animații subtile și cod optimizat pentru încărcare rapidă pe orice device.</p>
            </article>
            <article class="insight-card">
                <span>Growth &amp; Iteration</span>
                <h3>Optimizare continuă pentru retenție și conversii</h3>
                <p>Monitorizăm indicatorii cheie, actualizăm conținutul și orchestrăm campanii integrate pentru rezultate
                sustenabile.</p>
            </article>
        </div>
    </div>
</section>
<section class="portfolio-preview" aria-labelledby="portfolio-title">
    <div class="container">
        <div class="section-header">
            <h2 id="portfolio-title">Proiecte recente</h2>
            <a class="link-arrow" href="/portofoliu">Vezi toată colecția</a>
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
                    <p>Platformă de content digital și marketing automation</p>
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
                    <p>Experiență ecommerce high-end</p>
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
                    <p>Portal de rezervări premium</p>
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
                    <p>Platformă imobiliară interactivă</p>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="testimonials" id="testimoniale" aria-labelledby="testimonials-title">
    <div class="container">
        <h2 id="testimonials-title">Feedback de la partenerii noștri</h2>
        <div class="testimonial-grid">
            <article class="testimonial-card">
                <p class="testimonial-quote">„DesignToro a creat o experiență digitală care arată și funcționează ca un hub
                media. Traficul organic a crescut constant, iar lead-urile calificate s-au dublat.”</p>
                <div class="testimonial-meta">
                    <strong>Irina C., CEO Glow Beauty</strong>
                    <span>Industrie beauty &amp; e-commerce</span>
                </div>
            </article>
            <article class="testimonial-card">
                <p class="testimonial-quote">„Lansarea noastră s-a simțit ca o premieră. Echipa a coordonat design, development
                și campaniile de performance astfel încât să avem conversii record din prima lună.”</p>
                <div class="testimonial-meta">
                    <strong>Andrei M., Co-fondator UrbanFit</strong>
                    <span>Start-up fitness &amp; lifestyle</span>
                </div>
            </article>
            <article class="testimonial-card">
                <p class="testimonial-quote">„Dashboard-urile live și optimizările constante ne țin mereu cu un pas înainte. Am
                găsit un partener care gândește strategic și execută impecabil.”</p>
                <div class="testimonial-meta">
                    <strong>Bianca P., Marketing Manager NordEstate</strong>
                    <span>Real estate &amp; investiții</span>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="principles" aria-labelledby="principles-title">
    <div class="container principles-grid">
        <div class="principles-intro">
            <h2 id="principles-title">Principii de colaborare pentru proiecte digitale performante</h2>
            <p>Parteneriate transparente, procese rapide și soluții flexibile adaptate fiecărei etape de creștere.</p>
        </div>
        <ul class="principles-list">
            <li>
                <h3>Strategie în ritm rapid</h3>
                <p>Stabilim traseul de la idee la lansare și prioritizăm sprinturile cu cel mai mare impact.</p>
            </li>
            <li>
                <h3>Inovație continuă</h3>
                <p>Testăm constant noi tehnologii și formate pentru a menține experiența fresh.</p>
            </li>
            <li>
                <h3>Valoare măsurabilă</h3>
                <p>Metodologia noastră este centrată pe KPI, conversii și retenție.</p>
            </li>
            <li>
                <h3>Suport dedicat</h3>
                <p>Suntem alături de echipa ta cu mentenanță, optimizări și consultanță continuă.</p>
            </li>
        </ul>
    </div>
</section>
<section class="faq" id="intrebari-frecvente" aria-labelledby="faq-title">
    <div class="container">
        <h2 id="faq-title">Întrebări frecvente despre experiențele noastre digitale</h2>
        <div class="faq-grid">
            <article class="faq-item">
                <h3>Cât durează să lansăm o platformă premium?</h3>
                <p>În funcție de complexitate, o producție completă — strategie, design, dezvoltare și setup de campanii — durează
                între 6 și 10 săptămâni. Lucrăm agil și oferim demo-uri săptămânale.</p>
            </article>
            <article class="faq-item">
                <h3>Ce include pachetul de SEO și conținut?</h3>
                <p>Audit tehnic, optimizări Core Web Vitals, arhitectură de conținut și articole serializate pentru audiențe
                relevante, plus automatizări pentru distribuție.</p>
            </article>
            <article class="faq-item">
                <h3>Gestionați și campaniile de lansare?</h3>
                <p>Da. Integrăm PPC, social media, e-mail marketing și automatizări CRM astfel încât lansarea să aibă impact maxim și
                retenție pe termen lung.</p>
            </article>
        </div>
    </div>
</section>
<section class="cta-final" aria-labelledby="cta-title">
    <div class="container cta-content">
        <h2 id="cta-title">Pregătit pentru lansarea digitală a brandului tău?</h2>
        <p>Hai să discutăm despre următorul proiect și cum îl transformăm într-o experiență memorabilă.</p>
        <a class="btn btn-accent" href="/contact">Contactează-ne</a>
    </div>
</section>
<?php include __DIR__ . '/partials/footer.php'; ?>
