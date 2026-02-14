import { useState } from 'react';
import { submitForm } from '../utils/api';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  terms: false,
};

export default function Contact() {
  const [formValues, setFormValues] = useState(initialState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setGlobalError('');

    try {
      const result = await submitForm('/api/contact', {
        ...formValues,
        referrer: document.referrer,
        page_url: window.location.href,
      });
      if (result?.success) {
        setIsSuccess(true);
        setFormValues(initialState);
      }
    } catch (error) {
      setIsSuccess(false);
      setGlobalError(error.message);
      setFieldErrors(error.fieldErrors || {});
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="form-shell" data-form-wrapper>
              <div className={`form-success-message${isSuccess ? ' is-visible' : ''}`} data-form-success role="status" aria-live="polite" hidden={!isSuccess}>
                <span className="form-success-icon" aria-hidden="true">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                <div>
                  <p className="form-success-title">Cererea ta este în curs!</p>
                  <p>
                    Ți-am primit detaliile și revenim în maximum o zi lucrătoare. Ai ceva de adăugat? Contactează-ne pe{' '}
                    <a href="https://wa.me/40757568812" className="link-arrow">
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`form-feedback${globalError ? ' is-visible' : ''}`} data-form-global-error aria-live="polite">
                  {globalError && <p>{globalError}</p>}
                </div>
                <div className={`form-group${fieldErrors.name ? ' has-error' : ''}`}>
                  <label htmlFor="name" className="form-label">
                    Nume *
                  </label>
                  <input type="text" id="name" name="name" className="form-control" value={formValues.name} onChange={handleChange} required />
                  <p className="form-error" data-field-error="name" aria-live="polite">
                    {fieldErrors.name}
                  </p>
                </div>
                <div className={`form-group${fieldErrors.email ? ' has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" className="form-control" value={formValues.email} onChange={handleChange} required />
                  <p className="form-error" data-field-error="email" aria-live="polite">
                    {fieldErrors.email}
                  </p>
                </div>
                <div className={`form-group${fieldErrors.phone ? ' has-error' : ''}`}>
                  <label htmlFor="phone" className="form-label">
                    Telefon
                  </label>
                  <input type="tel" id="phone" name="phone" className="form-control" value={formValues.phone} onChange={handleChange} />
                  <p className="form-error" data-field-error="phone" aria-live="polite">
                    {fieldErrors.phone}
                  </p>
                </div>
                <div className="form-group honeypot">
                  <label htmlFor="company">Companie</label>
                  <input type="text" id="company" name="company" autoComplete="off" tabIndex={-1} />
                </div>
                <div className={`form-group${fieldErrors.message ? ' has-error' : ''}`}>
                  <label htmlFor="message" className="form-label">
                    Mesaj *
                  </label>
                  <textarea id="message" name="message" rows="5" className="form-control" value={formValues.message} onChange={handleChange} required></textarea>
                  <p className="form-error" data-field-error="message" aria-live="polite">
                    {fieldErrors.message}
                  </p>
                </div>
                <div className={`form-group form-consent${fieldErrors.terms ? ' has-error' : ''}`}>
                  <input type="checkbox" id="contact-terms" name="terms" value="1" required className="form-consent__input" checked={formValues.terms} onChange={handleChange} />
                  <label className="form-consent__label" htmlFor="contact-terms">
                    <span className="form-consent__checkbox" aria-hidden="true">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="form-consent__text">
                      Sunt de acord cu{' '}
                      <a href="/termeni-si-conditii">
                        Termenii și condițiile
                      </a>{' '}
                      și cu{' '}
                      <a href="/politica-de-confidentialitate">
                        Politica de confidențialitate
                      </a>
                      .
                    </span>
                  </label>
                  <p className="form-error" data-field-error="terms" aria-live="polite">
                    {fieldErrors.terms}
                  </p>
                </div>
                <button className="btn btn-accent" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                </button>
              </form>
            </div>
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
