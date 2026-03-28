import ContactForm from '../components/ContactForm';

const integrationCards = [
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'Agent AI WhatsApp pentru support',
    description:
      'Construim fluxuri de support pe WhatsApp care preiau întrebările repetitive, oferă răspunsuri clare și transferă rapid conversația către un operator uman atunci când este nevoie.',
    bullets: [
      'Răspunsuri instant pentru FAQ, program, status comandă sau cereri standard.',
      'Escaladare către echipa ta când conversația cere intervenție umană.',
      'Ton de comunicare adaptat brandului și tipurilor de clienți.',
    ],
  },
  {
    icon: 'fa-solid fa-box-open',
    title: 'Confirmare comenzi în eCommerce',
    description:
      'Automatizăm confirmarea comenzilor și urmărirea etapelor importante din vânzare, astfel încât echipa ta să piardă mai puțin timp pe apeluri și mesaje repetitive.',
    bullets: [
      'Confirmare automată pe WhatsApp sau alte canale după plasarea comenzii.',
      'Filtrare pentru comenzi suspecte, incomplete sau care necesită verificare suplimentară.',
      'Notificări și actualizări sincronizate cu magazinul online.',
    ],
  },
  {
    icon: 'fa-solid fa-cart-plus',
    title: 'Adăugare și actualizare produse',
    description:
      'Pregătim automatizări care ajută la adăugare produse, completare descrieri, mapare atribute și actualizare date în platforma de vânzare.',
    bullets: [
      'Fluxuri pentru completarea și standardizarea informațiilor despre produse.',
      'Suport pentru categorii, descrieri, variante și specificații repetitive.',
      'Integrare cu surse de date, fișiere sau procese interne existente.',
    ],
  },
  {
    icon: 'fa-solid fa-people-arrows',
    title: 'Integrare cu CRM-uri și lead management',
    description:
      'Conectăm agentul AI la CRM, email sau formulare, astfel încât lead-urile și interacțiunile să ajungă organizat în locul potrivit, fără pași manuali.',
    bullets: [
      'Creare sau actualizare automată de lead-uri, contacte și oportunități.',
      'Calificare inițială pentru cereri venite din WhatsApp, site sau campanii.',
      'Sincronizare mai bună între echipa de vânzări, suport și operațional.',
    ],
  },
  {
    icon: 'fa-solid fa-arrows-spin',
    title: 'Automatizări și fluxuri operaționale',
    description:
      'Livrăm Integrări Agent AI pentru procese repetitive din business: notificări interne, aprobări, follow-up, colectare informații și pași operaționali care consumă timp.',
    bullets: [
      'Automatizări între formulare, email, CRM, foi de calcul și sisteme interne.',
      'Logici de decizie, ramificații și notificări către echipele potrivite.',
      'Fluxuri scalabile construite pe procese reale, nu pe demo-uri generice.',
    ],
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Asistență hibridă AI + operator',
    description:
      'Nu forțăm automatizarea totală. Construim fluxuri în care agentul AI preia partea repetitivă, iar oamenii intervin exact când apar excepții sau oportunități comerciale importante.',
    bullets: [
      'Predare clară către operator cu tot contextul deja colectat.',
      'Mai puține conversații pierdute și mai puține solicitări dublate.',
      'Experiență mai bună pentru client și timp câștigat pentru echipă.',
    ],
  },
];

const benefitCards = [
  {
    title: 'Procese mai rapide',
    text: 'Reduci blocajele create de sarcini repetitive și muți echipa pe activități care chiar cer atenție umană.',
  },
  {
    title: 'Date mai curate',
    text: 'Lead-urile, comenzile și cererile ajung structurat în CRM, inbox sau în sistemele în care lucrați deja.',
  },
  {
    title: 'Răspuns consecvent',
    text: 'Mesajele importante sunt livrate într-un ton unitar, cu logică clară și fără dependență de disponibilitatea unei singure persoane.',
  },
  {
    title: 'Scalare controlată',
    text: 'Poți porni cu un singur flux și extinde treptat către alte canale, echipe și automatizări, fără să reconstruiești totul de la zero.',
  },
];

const systemTags = [
  'WhatsApp Business',
  'WooCommerce',
  'Shopify',
  'Formulare website',
  'CRM-uri și ERP-uri',
  'Email și notificări',
  'Google Sheets',
  'API-uri și webhook-uri',
];

const faqs = [
  {
    question: 'Ce include concret un proiect de Integrare Agent AI?',
    answer:
      'Începem cu analiza procesului, definim scenariile utile, configurăm logica agentului, legăm canalele sau sistemele relevante și testăm tot fluxul înainte de lansare.',
  },
  {
    question: 'Pot avea un Agent AI WhatsApp care să confirme comenzi și să răspundă la întrebări?',
    answer:
      'Da. Putem construi un flux mixt în care agentul AI răspunde la întrebări frecvente, verifică anumite detalii și execută confirmarea comenzilor sau alte acțiuni permise de procesul tău.',
  },
  {
    question: 'Se poate integra și cu CRM-ul pe care îl folosim deja?',
    answer:
      'Da. Putem lucra cu CRM-uri, API-uri, webhook-uri, email sau alte sisteme interne, în funcție de ce documentație și acces tehnic există în infrastructura ta.',
  },
  {
    question: 'Este potrivit doar pentru magazine online?',
    answer:
      'Nu. Integrarea Agent AI este utilă și pentru clinici, firme de servicii, echipe de vânzări, suport tehnic, rezervări sau orice business care gestionează multe cereri repetitive.',
  },
];

export default function AiIntegrations() {
  return (
    <>
      <section className="ai-hero py-5" aria-labelledby="ai-hero-title">
        <div className="container ai-hero-grid">
          <div className="ai-hero-copy">
            <p className="eyebrow" data-hero-reveal>
              Integrare Agent AI pentru echipe care vor procese mai clare și mai rapide
            </p>
            <div className="hero-badges" data-hero-reveal>
              <span className="badge-pill is-gradient">Integrare Agent AI</span>
              <span className="badge-pill">Agent AI WhatsApp</span>
              <span className="badge-pill">eCommerce + CRM + Automatizări</span>
            </div>
            <h1 id="ai-hero-title" className="hero-title-mini" data-hero-reveal>
              Integrare Agent AI pentru WhatsApp, eCommerce, CRM și automatizări.
            </h1>
            <p data-hero-reveal>
              Implementăm fluxuri de <strong>Integrare Agent AI</strong> care lucrează pe procese reale: support pe WhatsApp,
              confirmare comenzi în eCommerce, adăugare produse, conectare la CRM-uri și automatizări operaționale care
              reduc munca repetitivă. Dacă ai nevoie de un <strong>Agent AI WhatsApp</strong> sau de o infrastructură AI
              conectată la sistemele tale, o construim cap-coadă.
            </p>
            <ul className="hero-highlights ai-highlights" data-hero-reveal>
              <li>
                <i className="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>
                Fluxuri AI construite pe procese comerciale reale, nu doar pe conversații demonstrative.
              </li>
              <li>
                <i className="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>
                Integrare între WhatsApp, magazine online, CRM-uri, email și sisteme interne.
              </li>
              <li>
                <i className="fa-solid fa-circle-check text-primary" aria-hidden="true"></i>
                Logică de escaladare către operator atunci când contează intervenția umană.
              </li>
            </ul>
            <div className="hero-actions" data-hero-reveal>
              <a className="btn btn-accent" href="#formular-ai">
                Cere o discuție
              </a>
              <a className="btn btn-ghost" href="https://wa.me/40757568812">
                Scrie pe WhatsApp
              </a>
            </div>
          </div>

          <aside className="accent-card ai-hero-panel" data-hero-reveal>
            <span className="badge-pill ai-hero-panel__badge">Conectat la business</span>
            <h2>Ce putem integra concret</h2>
            <ul className="ai-panel-list">
              <li>Suport clienți și lead qualification pe WhatsApp</li>
              <li>Confirmare comenzi și follow-up pentru magazine online</li>
              <li>Adăugare produse și actualizare conținut operațional</li>
              <li>Sincronizare cu CRM-uri, email și fluxuri interne</li>
              <li>Automatizări pentru echipe de vânzări, suport și operațional</li>
            </ul>
            <p className="ai-panel-note">
              Construim arhitectura potrivită pentru procesul tău, astfel încât agentul AI să fie util din prima zi și
              să poată crește odată cu businessul.
            </p>
          </aside>
        </div>
      </section>

      <section className="ai-solutions py-5" aria-labelledby="ai-solutions-title">
        <div className="container">
          <div className="section-header ai-section-header" data-reveal>
            <h2 id="ai-solutions-title">Tipuri de Integrări Agent AI pe care le implementăm</h2>
            <p>
              Pornim de la obiectivul afacerii tale și conectăm agentul acolo unde produce cel mai mare impact: suport,
              vânzări, comenzi, catalog de produse sau automatizări între sisteme.
            </p>
          </div>
          <div className="service-grid ai-card-grid">
            {integrationCards.map((card) => (
              <article className="service-card ai-integration-card" key={card.title} data-reveal>
                <div className="service-icon">
                  <i className={card.icon} aria-hidden="true"></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="service-benefits">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-benefits py-5" aria-labelledby="ai-benefits-title">
        <div className="container">
          <div className="section-header ai-section-header" data-reveal>
            <h2 id="ai-benefits-title">De ce merită o Integrare Agent AI bine făcută</h2>
            <p>
              Scopul nu este doar să răspunzi automat, ci să câștigi timp, claritate și consistență în procesele pe care
              echipa ta le rulează zilnic.
            </p>
          </div>
          <div className="ai-benefit-grid">
            {benefitCards.map((benefit) => (
              <article className="ai-benefit-card" key={benefit.title} data-reveal>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-systems py-5" aria-labelledby="ai-systems-title">
        <div className="container ai-systems-grid">
          <div data-reveal>
            <h2 id="ai-systems-title">Canale și sisteme pe care le putem conecta</h2>
            <p>
              Fie că vrei un Agent AI WhatsApp, un flux de confirmare comenzi sau o automatizare între formular, CRM și
              email, construim integrarea în jurul instrumentelor pe care le folosești deja.
            </p>
            <div className="ai-tag-cloud" aria-label="Sisteme și canale compatibile">
              {systemTags.map((tag) => (
                <span className="badge-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="accent-card ai-stack-card" data-reveal>
            <strong>1 flux coerent</strong>
            <span>
              Legăm canalele de conversație, sursele de date și pașii operaționali astfel încât agentul AI să nu fie un
              layer separat, ci o componentă utilă din operațiunea ta.
            </span>
          </div>
        </div>
      </section>

      <section className="service-process py-5" aria-labelledby="ai-process-title">
        <div className="container process-grid">
          <div data-reveal>
            <h2 id="ai-process-title">Cum lucrăm pentru o implementare stabilă</h2>
            <p>
              Tratăm proiectul ca pe un proces de business, nu doar ca pe o configurare tehnică. Asta înseamnă analiză,
              logică bună, testare și lansare controlată.
            </p>
          </div>
          <ol className="process-steps">
            <li data-reveal>
              <h3>Audit de proces</h3>
              <p>Înțelegem unde apar blocajele, ce sisteme folosiți și ce scenarii trebuie automatizate.</p>
            </li>
            <li data-reveal>
              <h3>Design de flux și logică AI</h3>
              <p>Definim răspunsurile, regulile, escaladările și ce date trebuie preluate sau actualizate.</p>
            </li>
            <li data-reveal>
              <h3>Integrare și testare</h3>
              <p>Conectăm canalul, CRM-ul sau platforma eCommerce și testăm toate scenariile importante.</p>
            </li>
            <li data-reveal>
              <h3>Lansare și optimizare</h3>
              <p>Monitorizăm interacțiunile, ajustăm logica și extindem automatizarea pe măsură ce apar noi nevoi.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="faq py-5" aria-labelledby="ai-faq-title">
        <div className="container">
          <div className="section-header ai-section-header" data-reveal>
            <h2 id="ai-faq-title">Întrebări frecvente despre Agent AI WhatsApp și Integrări AI</h2>
            <p>
              Dacă te gândești la suport, comenzi, lead-uri sau conectare la CRM, acestea sunt primele întrebări la care
              răspundem de obicei.
            </p>
          </div>
          <div className="faq-grid ai-faq-grid">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question} data-reveal>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-contact py-5" id="formular-ai" aria-labelledby="ai-contact-title">
        <div className="container ai-contact-grid">
          <div className="ai-contact-copy" data-reveal>
            <p className="eyebrow">Discuție aplicată pe procesul tău</p>
            <h2 id="ai-contact-title">Spune-ne ce vrei să automatizezi și îți propunem varianta potrivită</h2>
            <p>
              Putem porni de la un singur flux, cum ar fi un Agent AI WhatsApp pentru support sau confirmare comenzi, și
              îl extindem apoi către CRM, produse sau alte automatizări.
            </p>
            <ul className="contact-details list-unstyled d-grid gap-2">
              <li>
                <i className="fa-solid fa-comments text-primary" aria-hidden="true"></i>
                <strong>Spune-ne canalul:</strong> WhatsApp, website, email sau alt flux intern
              </li>
              <li>
                <i className="fa-solid fa-layer-group text-primary" aria-hidden="true"></i>
                <strong>Spune-ne platforma:</strong> eCommerce, CRM, ERP, formular sau API existent
              </li>
              <li>
                <i className="fa-solid fa-bolt text-primary" aria-hidden="true"></i>
                <strong>Spune-ne obiectivul:</strong> support, comenzi, produse, lead-uri sau automatizare operațională
              </li>
            </ul>
          </div>
          <div data-reveal>
            <ContactForm
              idPrefix="ai-contact"
              requestTopic="Integrare Agent AI"
              submitLabel="Solicită integrarea"
              messagePlaceholder="Exemplu: Vrem un Agent AI WhatsApp pentru support și confirmare comenzi, conectat la magazinul online și CRM."
            />
          </div>
        </div>
      </section>
    </>
  );
}
