import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="contact-hero py-5" aria-labelledby="contact-title">
        <div className="container contact-grid row g-5 align-items-start">
          <div className="col-lg-5">
            <h1 id="contact-title">Hai să discutăm despre proiectul tău online.</h1>
            <p>Scrie-ne câteva detalii, iar în cel mult o zi lucrătoare primești un plan simplu și pașii următori.</p>
            <ul className="contact-details list-unstyled d-grid gap-2">
              <li>
                <i className="fa-solid fa-phone text-primary" aria-hidden="true"></i>
                <strong>Telefon:</strong> <a href="tel:+40757568812">+40 757 568 812</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope-open-text text-primary" aria-hidden="true"></i>
                <strong>Email:</strong> <a href="mailto:office@designtoro.ro">office@designtoro.ro</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot text-primary" aria-hidden="true"></i>
                <strong>Adresă:</strong> București, România
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <ContactForm
              idPrefix="contact"
              messagePlaceholder="Spune-ne câteva detalii despre proiect, bugetul orientativ și ce ai vrea să obții."
            />
          </div>
        </div>
      </section>

      <section className="cta-banner py-5" aria-labelledby="cta-contact">
        <div className="container cta-inline d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
          <div>
            <h2 id="cta-contact">Vrei să vorbim direct la telefon?</h2>
            <p>Sună-ne și clarificăm pe loc bugetul, calendarul și pașii următori.</p>
          </div>
          <a className="btn btn-secondary" href="tel:+40757568812">
            Sună acum
          </a>
        </div>
      </section>
    </>
  );
}
