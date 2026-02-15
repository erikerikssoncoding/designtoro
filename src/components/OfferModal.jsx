import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { submitForm } from '../utils/api';

const initialOfferState = {
  name: '',
  phone: '',
  email: '',
  details: '',
  terms: false,
  offer_plan: '',
};

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function OfferModal({ isOpen, onClose, plan }) {
  const [formValues, setFormValues] = useState(initialOfferState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalContentRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    const modalElement = modalContentRef.current;
    const focusable = modalElement ? modalElement.querySelectorAll(FOCUSABLE_SELECTORS) : [];
    const firstFocusable = focusable?.[0];
    if (firstFocusable instanceof HTMLElement) {
      firstFocusable.focus();
    }

    document.body.classList.add('offer-modal-open');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.classList.remove('offer-modal-open');
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setFormValues((prev) => ({ ...prev, offer_plan: plan || prev.offer_plan }));
      setIsSuccess(false);
      setFieldErrors({});
      setGlobalError('');
    }
  }, [isOpen, plan]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const modalContent = document.querySelector('[data-offer-modal-content]');

    if (!modalContent) {
      return undefined;
    }

    const animatedElements = Array.from(modalContent.querySelectorAll('[data-offer-animate]'));
    const timers = animatedElements.map((element, index) =>
      window.setTimeout(() => {
        element.classList.add('is-animated');
      }, index * 60),
    );

    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId));
      animatedElements.forEach((element) => element.classList.remove('is-animated'));
    };
  }, [isOpen]);

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
      const result = await submitForm('/api/offer', {
        ...formValues,
        referrer: document.referrer,
        page_url: window.location.href,
      });

      if (result?.success) {
        setIsSuccess(true);
        setFormValues(initialOfferState);
      }
    } catch (error) {
      setIsSuccess(false);
      setGlobalError(error.message);
      setFieldErrors(error.fieldErrors || {});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
        className={`offer-modal is-visible${isSuccess ? ' is-success' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-modal-title"
        aria-describedby="offer-modal-subtitle"
      >
      <div className="offer-modal__backdrop" onClick={onClose} aria-hidden="true"></div>
      <div className="offer-modal__dialog" ref={modalContentRef} role="document" tabIndex={-1}>
        <button className="offer-modal__close" type="button" onClick={onClose} aria-label="Închide formularul">
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <div className="offer-modal__content" data-offer-modal-content>
          <h2 id="offer-modal-title" data-offer-animate>
            Cere o ofertă personalizată
          </h2>
          <p id="offer-modal-subtitle" className="offer-modal__subtitle" data-offer-animate>
            Completează detaliile esențiale și revenim cu propunerea potrivită în maximum o zi lucrătoare.
          </p>
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
            <form className="offer-form" id="offer-form" onSubmit={handleSubmit} noValidate>
              <div
                className={`form-feedback${globalError ? ' is-visible' : ''}`}
                data-form-global-error
                aria-live="polite"
                data-offer-animate
              >
                {globalError && <p>{globalError}</p>}
              </div>
              <div className={`form-group${fieldErrors.name ? ' has-error' : ''}`} data-offer-animate>
                <label htmlFor="offer-name" className="form-label">
                  Nume *
                </label>
                <input type="text" id="offer-name" name="name" className="form-control" value={formValues.name} onChange={handleChange} required />
                <p className="form-error" data-field-error="name" aria-live="polite">
                  {fieldErrors.name}
                </p>
              </div>
              <div className={`form-group${fieldErrors.phone ? ' has-error' : ''}`} data-offer-animate>
                <label htmlFor="offer-phone" className="form-label">
                  Număr de telefon *
                </label>
                <input type="tel" id="offer-phone" name="phone" className="form-control" value={formValues.phone} onChange={handleChange} required />
                <p className="form-error" data-field-error="phone" aria-live="polite">
                  {fieldErrors.phone}
                </p>
              </div>
              <div className={`form-group${fieldErrors.email ? ' has-error' : ''}`} data-offer-animate>
                <label htmlFor="offer-email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="offer-email"
                  name="email"
                  className="form-control"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                <p className="form-error" data-field-error="email" aria-live="polite">
                  {fieldErrors.email}
                </p>
              </div>
              <div className={`form-group${fieldErrors.details ? ' has-error' : ''}`} data-offer-animate>
                <label htmlFor="offer-details" className="form-label">
                  Detalii despre site / proiect *
                </label>
                <textarea
                  id="offer-details"
                  name="details"
                  rows="5"
                  className="form-control"
                  value={formValues.details}
                  onChange={handleChange}
                  required
                ></textarea>
                <p className="form-error" data-field-error="details" aria-live="polite">
                  {fieldErrors.details}
                </p>
              </div>
              <div className="form-group honeypot">
                <label htmlFor="offer-company">Companie</label>
                <input type="text" id="offer-company" name="company" autoComplete="off" tabIndex={-1} />
              </div>
              <div className={`form-group form-consent${fieldErrors.terms ? ' has-error' : ''}`} data-offer-animate>
                <input
                  type="checkbox"
                  id="offer-terms"
                  name="terms"
                  value="1"
                  required
                  className="form-consent__input"
                  checked={formValues.terms}
                  onChange={handleChange}
                />
                <label className="form-consent__label" htmlFor="offer-terms">
                  <span className="form-consent__checkbox" aria-hidden="true">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span className="form-consent__text">
                    Sunt de acord cu{' '}
                    <a href="/termeni-si-conditii">Termenii și condițiile</a> și cu{' '}
                    <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>.
                  </span>
                </label>
                <p className="form-error" data-field-error="terms" aria-live="polite">
                  {fieldErrors.terms}
                </p>
              </div>
              <input type="hidden" name="offer_plan" value={formValues.offer_plan} />
              <button className="btn btn-accent" type="submit" data-offer-animate disabled={isSubmitting}>
                {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
