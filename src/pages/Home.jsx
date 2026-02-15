const experienceStart = new Date('2013-10-13T00:00:00Z');
const now = new Date();
const experienceYears = Math.max(1, now.getUTCFullYear() - experienceStart.getUTCFullYear());

const recentProjects = [
  {
    name: 'Kinetofusion',
    url: 'https://kinetofusion.ro',
    image: '/img/portofoliu/kinetofusion.ro_prezentare.webp',
    alt: 'Previzualizare site de prezentare Kinetofusion',
    type: 'Site de prezentare',
    description: 'Platformă clară pentru programări și servicii de kinetoterapie.',
  },
  {
    name: 'Sf. Vasile',
    url: 'https://sfvasile.ro',
    image: '/img/portofoliu/sfvasile.ro_prezentare.webp',
    alt: 'Previzualizare site de prezentare Sf. Vasile',
    type: 'Cămin de bătrâni, Voluntari',
    description: 'Site-ul căminului pentru seniori din Voluntari.',
  },
  {
    name: 'ExpertConfort',
    url: 'https://expertconfort.ro',
    image: '/img/portofoliu/expertconfort.ro_prezentare.webp',
    alt: 'Previzualizare site de prezentare ExpertConfort',
    type: 'Montaj și reparații aer condiționat',
    description: 'Servicii de montaj și reparații pentru sisteme de climatizare.',
  },
  {
    name: 'Fixishop',
    url: 'https://fixishop.ro',
    image: '/img/portofoliu/fixishop.ro_magazin.webp',
    alt: 'Previzualizare magazin online Fixishop',
    type: 'Magazin online de cosmetice',
    description: 'Magazin online de produse de cosmetică.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero py-5" aria-labelledby="hero-title">
        <div className="container">
          <div className="row align-items-center g-5 hero-content">
            <div className="col-12 col-lg-10 col-xl-8 hero-text">
              <p className="eyebrow">Site-uri clare care aduc clienți reali</p>
              <div className="hero-badges">
                <span className="badge-pill is-gradient">Planuri simple care cresc vânzările</span>
                <span className="badge-pill">Site-uri ușor de folosit pe orice device</span>
              </div>
              <h1 id="hero-title" className="hero-title-mini">
                Construim site-uri ușor de înțeles care cresc afacerile.
              </h1>
              <p>
                Îți construim un site clar, cu un parcurs simplu pentru vizitatori și cu mesaje care explică pe înțelesul tuturor ce vinzi. Ne ocupăm de design, texte și promovare astfel încât afacerea ta să fie vizibilă și să convingă oamenii să aleagă produsele sau serviciile tale.
              </p>
              <ul className="hero-highlights">
                <li>
                  <i className="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>Site-uri rapide și stabile, ușor de folosit pe telefon, tabletă sau laptop.
                </li>
                <li>
                  <i className="fa-solid fa-rocket text-primary" aria-hidden="true"></i>Texte, imagini și e-mailuri care explică simplu beneficiile și încurajează oamenii să ia legătura cu tine.
                </li>
                <li>
                  <i className="fa-solid fa-diagram-project text-primary" aria-hidden="true"></i>Promovare online constantă, astfel încât să apari în fața clienților potriviți când au nevoie de tine.
                </li>
              </ul>
              <div className="hero-actions">
                <a className="btn btn-accent" href="/portofoliu">
                  Explorează portofoliul
                </a>
                <a className="btn btn-ghost" href="/contact">
                  Programează o discuție
                </a>
              </div>
            </div>
          </div>
          <div className="hero-metric" role="list" aria-label="Rezultatele DesignToro">
            <article className="accent-card hero-metric-card" role="listitem">
              <strong>1.300+</strong>
              <span>Website-uri lansate</span>
            </article>
            <article className="accent-card hero-metric-card" role="listitem">
              <strong>700+</strong>
              <span>Afaceri care au crescut alături de noi</span>
            </article>
            <article className="accent-card hero-metric-card" role="listitem">
              <strong>{experienceYears}+</strong>
              <span>Peste {experienceYears} ani de experiență digitală</span>
            </article>
          </div>
        </div>
      </section>

      <section className="about" id="despre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-summary">
            <h2 id="about-title">Agenție digitală din București specializată în site-uri și promovare online</h2>
            <p>
              De peste {experienceYears} ani, DesignToro pregătește și lansează site-uri care aduc clienți. Combinăm obiectivele de business cu un limbaj simplu, imagini potrivite și soluții tehnice sigure, ca brandurile să fie ușor de găsit și de ales.
            </p>
            <div className="about-metrics" role="list" aria-label="Indicatori de performanță DesignToro">
              <div className="about-metric" role="listitem">
                <strong>3x</strong>
                <span>de trei ori mai multe cereri în primele 90 de zile după lansare</span>
              </div>
              <div className="about-metric" role="listitem">
                <strong>2,1s</strong>
                <span>timp mediu de încărcare pentru site-urile create de noi</span>
              </div>
            </div>
          </div>
          <div className="about-details">
            <h3>De ce brandurile ne aleg pentru creștere constantă</h3>
            <p>
              Ne ocupăm de tot drumul digital: analizăm publicul, desenăm paginile, scriem textele, construim site-ul și îl promovăm. Lucrăm pas cu pas și explicăm clar fiecare etapă, astfel încât să știi mereu ce se întâmplă.
            </p>
            <ul className="about-list">
              <li>Design curat, adaptat brandului tău, astfel încât fiecare pagină să fie ușor de parcurs.</li>
              <li>Optimizare pentru motoarele de căutare și plan de conținut explicat în pași simpli.</li>
              <li>Mesaje și reclame care ajung la oamenii interesați și îi îndeamnă să îți scrie sau să cumpere.</li>
              <li>Actualizări regulate, rapoarte ușor de înțeles și suport după lansare ori de câte ori ai nevoie.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-preview py-5" id="servicii" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title">Servicii create pentru afaceri vizibile online</h2>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-window-restore" aria-hidden="true"></i>
              </div>
              <h3>Experiențe Web &amp; Platforme</h3>
              <p>Site-uri de prezentare și magazine online care pornesc rapid și sunt ușor de administrat.</p>
              <a className="link-arrow" href="/servicii#web-design">
                Vezi cum lucrăm
              </a>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
              </div>
              <h3>SEO &amp; Distribuție organică</h3>
              <p>Optimizare pentru Google și conținut clar, astfel încât oamenii să te găsească ușor.</p>
              <a className="link-arrow" href="/servicii#seo">
                Solicită un audit
              </a>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-users" aria-hidden="true"></i>
              </div>
              <h3>Social Media &amp; Communities</h3>
              <p>Postări și campanii pe rețelele sociale care păstrează comunitatea aproape de brand.</p>
              <a className="link-arrow" href="/servicii#social-media">
                Planifică următoarea campanie
              </a>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-palette" aria-hidden="true"></i>
              </div>
              <h3>Branding &amp; Content Studio</h3>
              <p>Logo, materiale vizuale și texte care explică limpede ce te diferențiază.</p>
              <a className="link-arrow" href="/preturi">
                Vezi prețurile
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="insights" id="strategie-digitala" aria-labelledby="insights-title">
        <div className="container">
          <div>
            <h2 id="insights-title">Cum lucrăm pentru ca site-ul tău să dea rezultate</h2>
            <p>
              Urmezi un plan clar, bazat pe discuții cu tine și pe nevoile reale ale clienților tăi. Astfel, lansarea site-ului este ordonată, fără surprize, iar afacerea ta poate crește în ritmul dorit.
            </p>
          </div>
          <div className="insights-grid">
            <article className="insight-card">
              <span>Descoperire</span>
              <h3>Îți cunoaștem afacerea și clienții</h3>
              <p>Discutăm despre ce vinzi, ce își doresc oamenii și ce fac competitorii, pentru a stabili ce conținut și ce pagini sunt necesare.</p>
            </article>
            <article className="insight-card">
              <span>Design &amp; Construire</span>
              <h3>Creăm pagini frumoase și ușor de folosit</h3>
              <p>Transformăm ideile în machete, apoi în pagini reale, rapide și ușor de accesat de pe orice dispozitiv.</p>
            </article>
            <article className="insight-card">
              <span>Creștere</span>
              <h3>Actualizăm constant pentru mai multe vânzări</h3>
              <p>Măsurăm rezultatele, ajustăm textele și imaginile și lansăm campanii noi ca să atragem mereu clienți pregătiți să cumpere.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="portfolio-preview" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="section-header">
            <h2 id="portfolio-title">Proiecte recente</h2>
            <a className="link-arrow" href="/portofoliu">
              Vezi toate exemplele
            </a>
          </div>
          <div className="portfolio-grid">
            {recentProjects.map((project) => (
              <article className="portfolio-card" key={project.name}>
                <a
                  className="portfolio-card-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Deschide ${project.name}`}
                >
                  <figure className="portfolio-media">
                    <img src={project.image} alt={project.alt} loading="lazy" width="960" height="1890" />
                  </figure>
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimoniale" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title">Ce spun clienții despre noi</h2>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p className="testimonial-quote">
                „Colaborarea cu DesignToro este așa cum ar trebui să fie. M-a înștiințat de orice aspect era necesar și mi-a facilitat orice solicitare am avut pe parcursul timpului. Serviciile lor le-aș defini ca fiind prompte, calitative și la prețul corect.”
              </p>
              <div className="testimonial-rating" aria-label="5 din 5 stele">
                ★★★★★
              </div>
              <div className="testimonial-meta">
                <strong>Ciprian Cucu</strong>
                <span>Fizionomist &amp; Antreprenor</span>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-quote">
                „Modul de lucru m-a convins și am apelat cu încredere, nu am fost dezamăgită. S-a realizat un site frumos, care merită „răsfoit” pentru a alege serviciile de care pacienții noștri au nevoie. Mulțumim DesignToro!”
              </p>
              <div className="testimonial-rating" aria-label="5 din 5 stele">
                ★★★★★
              </div>
              <div className="testimonial-meta">
                <strong>Rodica Stan</strong>
                <span>Kinetoterapeut</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <div className="container principles-grid">
          <div className="principles-intro">
            <h2 id="principles-title">Cum colaborăm de la prima discuție până după lansare</h2>
            <p>Ne dorim ca totul să fie simplu, clar și ușor de urmărit, indiferent cât de familiar ești cu partea digitală.</p>
          </div>
          <ul className="principles-list">
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

      <section className="faq" id="intrebari-frecvente" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title">Întrebări frecvente despre colaborarea cu noi</h2>
          <div className="faq-grid">
            <article className="faq-item">
              <h3>Cât durează să lansăm un site?</h3>
              <p>
                În mod obișnuit, un site complet durează între 1 și 6 săptămâni, în funcție de complexitate și materialele pe care le avem disponibile. Îți arătăm stadiul proiectului în fiecare săptămână.
              </p>
            </article>
            <article className="faq-item">
              <h3>Ce include pachetul de SEO și conținut?</h3>
              <p>
                Analizăm ce caută clienții tăi, rescriem paginile cheie și pregătim articole simple care răspund întrebărilor lor. Ne ocupăm și de setările tehnice necesare pentru Google.
              </p>
            </article>
            <article className="faq-item">
              <h3>Gestionați și campaniile de lansare?</h3>
              <p>
                Da. Setăm reclamele online, mesajele pentru e-mail și postările din social media, astfel încât oamenii să afle rapid despre noul tău site și să revină pentru a cumpăra.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-final" aria-labelledby="cta-title">
        <div className="container cta-content">
          <h2 id="cta-title">Ești gata să îți crești afacerea online?</h2>
          <p>Hai să discutăm despre următorul tău site și despre pașii clari prin care ajungem la mai mulți clienți.</p>
          <a className="btn btn-accent" href="/contact">
            Contactează-ne
          </a>
        </div>
      </section>
    </>
  );
}
