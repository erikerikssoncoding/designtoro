import { useMemo, useState } from 'react';
import OfferModal from '../components/OfferModal';

const primaryPlans = [
  {
    name: 'StartUp',
    tag: 'Tot ce îți trebuie pentru a fi online',
    features: [
      'Găzduire sigură pe server dedicat și domeniu .RO inclus',
      'Design personalizat pentru până la 4 pagini importante',
      'Site adaptat pentru telefon, tabletă și desktop',
      'Panou de administrare simplu și adrese de e-mail profesionale',
      'Protecție de bază: certificat SSL și copii de siguranță zilnice',
    ],
    summaryTitle: 'Pe scurt',
    summaryBody: 'StartUp este baza potrivită dacă vrei un site rapid, ușor de folosit și construit corect încă de la început.',
    summaryList: [
      'Site-ul este găzduit pe serverul nostru dedicat – nu împarți resursele cu sute de alte proiecte.',
      'Primești un design original, texte de start și imagini potrivite brandului tău.',
      'Îți arătăm cum să actualizezi singur paginile și setăm e-mailuri cu numele afacerii tale.',
      'Monitorizăm securitatea, facem backup-uri zilnice și te anunțăm imediat dacă apare o problemă.',
    ],
    delivery: 'Termen estimat de livrare: 5-10 zile lucrătoare',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Business Plus',
    tag: 'Pentru afaceri care vor să fie preferate',
    badge: 'Cel mai ales',
    features: [
      'Include tot ce oferă StartUp plus texte și imagini realizate de echipa noastră',
      'Structură extinsă până la 7 pagini și actualizarea identității vizuale',
      'Optimizare pentru Google și setări esențiale de confidențialitate',
      'Integrare cu instrumente de analiză și chat pentru clienți',
    ],
    summaryTitle: 'Pe scurt',
    summaryBody: 'Business Plus este pachetul complet pentru afaceri care vor să transforme vizitatorii în clienți fideli.',
    summaryList: [
      'Realizăm interviuri scurte cu tine și echipa, apoi scriem mesaje clare și convingătoare.',
      'Primești fișiere editabile pentru logo și materiale, gata pentru orice suport de comunicare.',
      'Setăm instrumente care arată câți vizitatori ai și ce acțiuni fac în site.',
      'Serverul dedicat păstrează site-ul rapid și stabil chiar și în perioade aglomerate.',
    ],
    delivery: 'Termen estimat de livrare: 10-20 de zile lucrătoare',
    ctaClass: 'btn-accent',
    popular: true,
  },
  {
    name: 'Executive',
    tag: 'Pentru companii cu planuri mari',
    features: [
      'Include toate avantajele StartUp și Business Plus, extins până la 15 pagini complexe',
      'Plan SEO detaliat pentru fiecare pagină importantă',
      'Consiliere pentru conținut, integrarea sistemelor interne și hosting internațional',
      'Optimizare pentru Google Business Profile și materiale de prezentare dedicate',
    ],
    summaryTitle: 'Pe scurt',
    summaryBody: 'Executive este pachetul pentru companii care vor vizibilitate constantă și procese automate.',
    summaryList: [
      'Structura site-ului susține campanii ample, formulare complexe și conectare cu CRM-ul tău.',
      'Hostingul global asigură încărcare rapidă și protecție în orice țară.',
      'Organizăm sesiuni periodice pentru planificare și oferim materiale proaspete pentru echipa de vânzări.',
      'Serverul dedicat DesignToro păstrează resursele doar pentru brandul tău și menține uptime aproape de 100%.',
    ],
    delivery: 'Termen estimat de livrare: 20-40 de zile lucrătoare',
    ctaClass: 'btn-secondary',
  },
];

const serviceAddons = [
  {
    name: 'Mentenanță & Support',
    features: [
      'Supraveghere zilnică a site-ului și copii de siguranță automate',
      'Actualizări lunare pentru platformă și module',
      'Raport lunar cu intervenții și recomandări',
    ],
    summaryBody: 'Pachetul de mentenanță te scapă de grija actualizărilor și a problemelor tehnice neașteptate.',
    summaryList: [
      'Verificăm site-ul zilnic și intervenim rapid când apare o eroare sau o alertă de securitate.',
      'Actualizăm platforma, testăm compatibilitatea și păstrăm copii de siguranță în locuri separate.',
      'Primești rapoarte pe înțelesul tău și pași clari pentru luna următoare.',
      'Serverul dedicat pentru clienți DesignToro menține site-ul stabil și rapid.',
    ],
  },
  {
    name: 'Social Media Showrunner',
    features: [
      'Plan editorial lunar și stil de comunicare adaptat publicului tău',
      'Materiale vizuale și video scurte pentru rețelele sociale',
      'Campanii plătite și rapoarte ușor de citit',
    ],
    summaryBody: 'Social Media Showrunner este pentru brandurile care vor o prezență constantă și coerentă.',
    summaryList: [
      'Primești un calendar simplu cu ce se postează și când, plus răspunsuri standard pentru comentarii.',
      'Creăm imagini, animații și șabloane ușor de folosit de echipa ta.',
      'Verificăm lunar campaniile plătite și ajustăm mesajele pentru mai multe cereri și vânzări.',
      'Aliniem mesajele cu paginile site-ului tău pentru un parcurs clar din social media până la contact.',
    ],
  },
];

export default function Pricing() {
  const [infoOpen, setInfoOpen] = useState('');
  const [offerPlan, setOfferPlan] = useState('');

  const openModalForPlan = (plan) => {
    setOfferPlan(plan);
  };

  const closeModal = () => {
    setOfferPlan('');
  };

  const pricingCards = useMemo(() => primaryPlans, []);

  return (
    <>
      <section className="page-hero py-5" aria-labelledby="pricing-hero">
        <div className="container narrow text-center">
          <h1 id="pricing-hero">Prețuri clare pentru site-uri și promovare online.</h1>
          <p>Alege pachetul care se potrivește afacerii tale și află dinainte ce primești și în cât timp livrăm.</p>
        </div>
      </section>

      <section className="pricing py-5" aria-label="Prețuri servicii web design">
        <div className="container pricing-grid">
          {pricingCards.map((plan) => {
            const isOpen = infoOpen === plan.name;
            return (
              <article
                key={plan.name}
                className={`pricing-card${plan.popular ? ' popular' : ''}${isOpen ? ' is-flipped' : ''}`}
                data-pricing-card
                tabIndex={0}
                aria-label={`Detalii pachet ${plan.name}`}
              >
                <div className="pricing-card-inner">
                  <div className="pricing-card-face pricing-card-front" aria-hidden={isOpen}>
                    {plan.badge && <div className="badge">{plan.badge}</div>}
                    <button className="info-toggle" type="button" data-info-toggle aria-expanded={isOpen} aria-label="Vezi explicații ușor de înțeles" onClick={() => setInfoOpen(isOpen ? '' : plan.name)}>
                      <span aria-hidden="true">i</span>
                    </button>
                    {!isOpen && plan.name === 'StartUp' && (
                      <div className="info-notice" id="pricing-info-prompt" role="status" aria-live="polite">
                        <span>apasă aici pentru explicații pe scurt</span>
                      </div>
                    )}
                    <h2>{plan.name}</h2>
                    <p className="pricing-tag">{plan.tag}</p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <button className={`btn ${plan.ctaClass}`} data-offer-modal-open data-offer-plan={plan.name} onClick={() => openModalForPlan(plan.name)}>
                      Cere ofertă
                    </button>
                    <p className="delivery-note">{plan.delivery}</p>
                  </div>
                  <div className="pricing-card-face pricing-card-back" aria-hidden={!isOpen}>
                    <h3>{plan.summaryTitle}</h3>
                    <p>{plan.summaryBody}</p>
                    <ul>
                      {plan.summaryList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button className="info-back" type="button" data-info-close onClick={() => setInfoOpen('')}>
                      Înapoi la detalii
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pricing py-5" aria-label="Pachete de mentenanță și social media">
        <div className="container pricing-grid maintenance">
          {serviceAddons.map((plan) => {
            const isOpen = infoOpen === plan.name;
            return (
              <article
                key={plan.name}
                className={`pricing-card${isOpen ? ' is-flipped' : ''}`}
                data-pricing-card
                tabIndex={0}
                aria-label={`Detalii pachet ${plan.name}`}
              >
                <div className="pricing-card-inner">
                  <div className="pricing-card-face pricing-card-front" aria-hidden={isOpen}>
                    <button className="info-toggle" type="button" data-info-toggle aria-expanded={isOpen} aria-label="Vezi explicații ușor de înțeles" onClick={() => setInfoOpen(isOpen ? '' : plan.name)}>
                      <span aria-hidden="true">i</span>
                    </button>
                    <h2>{plan.name}</h2>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <button className="btn btn-secondary" data-offer-modal-open data-offer-plan={plan.name} onClick={() => openModalForPlan(plan.name)}>
                      Solicită pachet
                    </button>
                  </div>
                  <div className="pricing-card-face pricing-card-back" aria-hidden={!isOpen}>
                    <h3>Pe scurt</h3>
                    <p>{plan.summaryBody}</p>
                    <ul>
                      {plan.summaryList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button className="info-back" type="button" data-info-close onClick={() => setInfoOpen('')}>
                      Înapoi la detalii
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="special-offer" aria-labelledby="offer-title">
        <div className="container special-grid">
          <div>
            <h2 id="offer-title">Pachet complet pentru magazine online</h2>
            <p>
              De la <strong>399€</strong> pentru un magazin online pregătit pentru plăți, facturare și promovare continuă.
            </p>
          </div>
          <a className="btn btn-accent" href="/contact">
            Primește ofertă personalizată
          </a>
        </div>
      </section>

      <section className="cta-banner py-5" id="contact" aria-labelledby="cta-pricing">
        <div className="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <div>
            <h2 id="cta-pricing">Hai să alegem împreună pachetul potrivit.</h2>
            <p>Spune-ne ce planuri ai, iar noi îți trimitem o recomandare clară de buget și pași următori.</p>
          </div>
          <a className="btn btn-accent" href="/contact">
            Contactează-ne
          </a>
        </div>
      </section>

      <OfferModal isOpen={Boolean(offerPlan)} onClose={closeModal} plan={offerPlan} />
    </>
  );
}
