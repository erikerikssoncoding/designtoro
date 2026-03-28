import { useEffect, useState } from 'react';
import { submitForm } from '../utils/api';

function createInitialState(defaultMessage = '') {
  return {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: defaultMessage,
    terms: false,
  };
}

export default function ContactForm({
  idPrefix = 'contact',
  requestTopic = '',
  defaultMessage = '',
  messagePlaceholder = 'Spune-ne câteva detalii despre proiect, obiective, platforme și ce ai vrea să automatizezi.',
  submitLabel = 'Trimite mesajul',
}) {
  const [formValues, setFormValues] = useState(() => createInitialState(defaultMessage));
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setFormValues(createInitialState(defaultMessage));
    setFieldErrors({});
    setGlobalError('');
    setIsSuccess(false);
  }, [defaultMessage, requestTopic]);

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
        request_topic: requestTopic,
        referrer: document.referrer,
        page_url: window.location.href,
      });

      if (result?.success) {
        setIsSuccess(true);
        setFormValues(createInitialState(defaultMessage));
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
    <div className="form-shell" data-form-wrapper>
      <div
        className={`form-success-message${isSuccess ? ' is-visible' : ''}`}
        data-form-success
        role="status"
        aria-live="polite"
        hidden={!isSuccess}
      >
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
          <label htmlFor={`${idPrefix}-name`} className="form-label">
            Nume *
          </label>
          <input
            type="text"
            id={`${idPrefix}-name`}
            name="name"
            className="form-control"
            value={formValues.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <p className="form-error" data-field-error="name" aria-live="polite">
            {fieldErrors.name}
          </p>
        </div>
        <div className={`form-group${fieldErrors.email ? ' has-error' : ''}`}>
          <label htmlFor={`${idPrefix}-email`} className="form-label">
            Email *
          </label>
          <input
            type="email"
            id={`${idPrefix}-email`}
            name="email"
            className="form-control"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          <p className="form-error" data-field-error="email" aria-live="polite">
            {fieldErrors.email}
          </p>
        </div>
        <div className={`form-group${fieldErrors.phone ? ' has-error' : ''}`}>
          <label htmlFor={`${idPrefix}-phone`} className="form-label">
            Telefon
          </label>
          <input
            type="tel"
            id={`${idPrefix}-phone`}
            name="phone"
            className="form-control"
            value={formValues.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          <p className="form-error" data-field-error="phone" aria-live="polite">
            {fieldErrors.phone}
          </p>
        </div>
        <div className="form-group honeypot">
          <label htmlFor={`${idPrefix}-company`}>Companie</label>
          <input
            type="text"
            id={`${idPrefix}-company`}
            name="company"
            autoComplete="off"
            tabIndex={-1}
            value={formValues.company}
            onChange={handleChange}
          />
        </div>
        <div className={`form-group${fieldErrors.message ? ' has-error' : ''}`}>
          <label htmlFor={`${idPrefix}-message`} className="form-label">
            Mesaj *
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows="5"
            className="form-control"
            value={formValues.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            required
          ></textarea>
          <p className="form-error" data-field-error="message" aria-live="polite">
            {fieldErrors.message}
          </p>
        </div>
        <div className={`form-group form-consent${fieldErrors.terms ? ' has-error' : ''}`}>
          <input
            type="checkbox"
            id={`${idPrefix}-terms`}
            name="terms"
            value="1"
            required
            className="form-consent__input"
            checked={formValues.terms}
            onChange={handleChange}
          />
          <label className="form-consent__label" htmlFor={`${idPrefix}-terms`}>
            <span className="form-consent__checkbox" aria-hidden="true">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="form-consent__text">
              Sunt de acord cu <a href="/termeni-si-conditii">Termenii și condițiile</a> și cu{' '}
              <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>.
            </span>
          </label>
          <p className="form-error" data-field-error="terms" aria-live="polite">
            {fieldErrors.terms}
          </p>
        </div>
        <button className="btn btn-accent" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Se trimite...' : submitLabel}
        </button>
      </form>
    </div>
  );
}
