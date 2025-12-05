import { useMemo, useState } from 'react';
import { portfolioItems } from '../data/portfolioItems';

const filters = [
  { key: 'all', label: 'Toate' },
  { key: 'website', label: 'Site-uri de prezentare' },
  { key: 'ecommerce', label: 'Magazine online' },
  { key: 'branding', label: 'Identitate și conținut' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="page-hero py-5" aria-labelledby="portfolio-hero">
        <div className="container narrow text-center">
          <h1 id="portfolio-hero">Proiecte digitale care aduc rezultate reale.</h1>
          <p>Vezi exemple de site-uri, magazine online și campanii pe care le-am construit pas cu pas împreună cu clienții noștri.</p>
        </div>
      </section>

      <section className="portfolio-filters py-3" aria-label="Filtre portofoliu">
        <div className="container filter-buttons">
          {filters
            .filter((filter) => filter.key === 'all' || portfolioItems.some((item) => item.category === filter.key))
            .map((filter) => (
              <button key={filter.key} className={`filter-button${activeFilter === filter.key ? ' is-active' : ''}`} data-filter={filter.key} onClick={() => setActiveFilter(filter.key)}>
                {filter.label}
              </button>
            ))}
        </div>
      </section>

      <section className="portfolio-gallery py-4" aria-label="Galerie portofoliu">
        <div className="container portfolio-masonry">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <article key={item.filename} className="portfolio-item" data-category={item.category}>
                <a className="portfolio-link" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Deschide ${item.host}`}>
                  <figure className="portfolio-media">
                    <img src={`/img/portofoliu/${item.filename}`} alt={item.alt} loading="lazy" width="960" height="1890" />
                  </figure>
                  <div className="portfolio-details">
                    <h2>{item.name}</h2>
                    <p>{item.label}</p>
                  </div>
                </a>
              </article>
            ))
          ) : (
            <p className="portfolio-empty">Momentan pregătim proiectele pentru această secțiune. Revino curând pentru noutăți.</p>
          )}
        </div>
      </section>

      <section className="cta-banner py-5" aria-labelledby="cta-portfolio">
        <div className="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <div>
            <h2 id="cta-portfolio">Vrei să vezi proiectul tău în această galerie?</h2>
            <p>Trimite-ne câteva detalii și îți arătăm ce pași urmăm pentru a ajunge acolo.</p>
          </div>
          <a className="btn btn-accent" href="/contact">
            Hai să discutăm
          </a>
        </div>
      </section>

      <section className="portfolio-more py-5" aria-hidden="true">
        <div className="container">
          <p>SI MULTE ALTELE...</p>
        </div>
      </section>
    </>
  );
}
