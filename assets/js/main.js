(function () {
    const docEl = document.documentElement;
    docEl.classList.remove('no-js');
    document.body.classList.remove('no-js');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    const revealTargets = document.querySelectorAll(
        'section:not(.hero), .service-card, .portfolio-card, .portfolio-item, .pricing-card, .stat-card'
    );

    revealTargets.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    const heroRevealTargets = document.querySelectorAll(
        '.hero .hero-text > *, .hero .hero-metric, .hero .hero-metric .accent-card'
    );

    heroRevealTargets.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        const stickyMediaQuery = window.matchMedia
            ? window.matchMedia('(min-width: 992px)')
            : null;

        const updateHeaderState = () => {
            if (stickyMediaQuery && !stickyMediaQuery.matches) {
                siteHeader.classList.remove('is-sticky');
                return;
            }

            if (window.scrollY > 0) {
                siteHeader.classList.add('is-sticky');
            } else {
                siteHeader.classList.remove('is-sticky');
            }
        };

        updateHeaderState();
        window.addEventListener('scroll', updateHeaderState, { passive: true });

        if (stickyMediaQuery) {
            const handleMediaChange = () => updateHeaderState();

            if (typeof stickyMediaQuery.addEventListener === 'function') {
                stickyMediaQuery.addEventListener('change', handleMediaChange);
            } else if (typeof stickyMediaQuery.addListener === 'function') {
                stickyMediaQuery.addListener(handleMediaChange);
            }
        }
    }

    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach((btn) => btn.classList.remove('is-active'));
            button.classList.add('is-active');

            portfolioItems.forEach((item) => {
                const category = item.getAttribute('data-category');
                const isVisible = filter === 'all' || category === filter;
                item.setAttribute('aria-hidden', String(!isVisible));
                item.style.display = isVisible ? 'flex' : 'none';
            });
        });
    });

    document.querySelectorAll('[data-scroll="contact"]').forEach((button) => {
        button.addEventListener('click', (event) => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                event.preventDefault();
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const pricingCards = document.querySelectorAll('[data-pricing-card]');

    pricingCards.forEach((card) => {
        const front = card.querySelector('.pricing-card-front');
        const back = card.querySelector('.pricing-card-back');
        const toggleButton = card.querySelector('[data-info-toggle]');

        const setState = (flipped) => {
            card.classList.toggle('is-flipped', flipped);
            if (front) {
                front.setAttribute('aria-hidden', flipped ? 'true' : 'false');
            }
            if (back) {
                back.setAttribute('aria-hidden', flipped ? 'false' : 'true');
            }
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', flipped ? 'true' : 'false');
            }
        };

        const toggleState = () => {
            setState(!card.classList.contains('is-flipped'));
        };

        card.addEventListener('click', (event) => {
            const target = event.target;

            if (target.closest('.btn')) {
                return;
            }

            if (target.closest('[data-info-close]')) {
                event.preventDefault();
                setState(false);
                return;
            }

            if (target.closest('[data-info-toggle]')) {
                event.preventDefault();
                toggleState();
                return;
            }

            if (!target.closest('.pricing-card-face')) {
                return;
            }

            toggleState();
        });

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setState(false);
                return;
            }

            if (event.target !== card) {
                return;
            }

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleState();
            }
        });

        setState(false);
    });

    const pricingInfoPrompt = document.getElementById('pricing-info-prompt');
    const firstPricingToggle = document.querySelector('[data-pricing-card] [data-info-toggle]');

    if (pricingInfoPrompt && firstPricingToggle) {
        const PROMPT_STORAGE_KEY = 'pricingInfoPromptShownAt';
        const PROMPT_INTERVAL = 24 * 60 * 60 * 1000;
        const PROMPT_DELAY = 2000;
        const PROMPT_DURATION = 10000;

        let lastShownTimestamp = 0;

        try {
            const storedTimestamp = localStorage.getItem(PROMPT_STORAGE_KEY);
            if (storedTimestamp) {
                lastShownTimestamp = parseInt(storedTimestamp, 10) || 0;
            }
        } catch (error) {
            lastShownTimestamp = 0;
        }

        const now = Date.now();
        const canShowPrompt = !lastShownTimestamp || now - lastShownTimestamp >= PROMPT_INTERVAL;

        const hidePrompt = () => {
            pricingInfoPrompt.classList.remove('is-visible');
            pricingInfoPrompt.setAttribute('aria-hidden', 'true');
        };

        if (canShowPrompt) {
            window.setTimeout(() => {
                pricingInfoPrompt.classList.add('is-visible');
                pricingInfoPrompt.setAttribute('aria-hidden', 'false');

                try {
                    localStorage.setItem(PROMPT_STORAGE_KEY, String(Date.now()));
                } catch (error) {
                    /* localStorage might be unavailable; ignore */
                }

                window.setTimeout(hidePrompt, PROMPT_DURATION);
            }, PROMPT_DELAY);
        }

        const dismissPrompt = () => {
            if (pricingInfoPrompt.classList.contains('is-visible')) {
                hidePrompt();
            }
        };

        firstPricingToggle.addEventListener('click', dismissPrompt);
        firstPricingToggle.addEventListener('focus', dismissPrompt);
        firstPricingToggle.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                dismissPrompt();
            }
        });
    }

    const recaptchaSiteKey = window.RECAPTCHA_SITE_KEY;
    let recaptchaBadgeVisible = document.body.classList.contains('show-recaptcha');
    const showRecaptchaBadge = () => {
        if (!recaptchaBadgeVisible) {
            document.body.classList.add('show-recaptcha');
            recaptchaBadgeVisible = true;
        }
    };
    const hideRecaptchaBadge = () => {
        if (recaptchaBadgeVisible) {
            document.body.classList.remove('show-recaptcha');
            recaptchaBadgeVisible = false;
        }
    };
    const setRecaptchaTokenValue = (token) => {
        document.querySelectorAll('[data-recaptcha-token]').forEach((field) => {
            field.value = token || '';
        });
    };
    let pendingRecaptchaRequest = null;
    const requestRecaptchaToken = () => {
        if (!recaptchaSiteKey || typeof grecaptcha === 'undefined') {
            showRecaptchaBadge();
            setRecaptchaTokenValue('');
            return Promise.resolve(null);
        }

        if (pendingRecaptchaRequest) {
            return pendingRecaptchaRequest;
        }

        pendingRecaptchaRequest = new Promise((resolve) => {
            grecaptcha.ready(() => {
                grecaptcha
                    .execute(recaptchaSiteKey, { action: 'contact' })
                    .then((token) => {
                        setRecaptchaTokenValue(token);
                        hideRecaptchaBadge();
                        pendingRecaptchaRequest = null;
                        resolve(token);
                    })
                    .catch(() => {
                        console.warn('Nu s-a putut genera tokenul reCAPTCHA.');
                        showRecaptchaBadge();
                        setRecaptchaTokenValue('');
                        pendingRecaptchaRequest = null;
                        resolve(null);
                    });
            });
        });

        return pendingRecaptchaRequest;
    };
    const initializeRecaptcha = () => {
        if (!recaptchaSiteKey) {
            return;
        }

        if (typeof grecaptcha !== 'undefined') {
            requestRecaptchaToken();
        } else {
            window.addEventListener('load', () => {
                if (typeof grecaptcha !== 'undefined') {
                    requestRecaptchaToken();
                }
            });
        }
    };

    initializeRecaptcha();

    const offerModal = document.querySelector('[data-offer-modal]');
    if (offerModal) {
        const offerOpenButtons = document.querySelectorAll('[data-offer-modal-open]');
        const planField = offerModal.querySelector('#offer-plan-field');
        const offerDialog = offerModal.querySelector('.offer-modal__dialog');
        const closeSelectors = '[data-offer-modal-close]';
        const offerCloseElements = offerModal.querySelectorAll(closeSelectors);
        const animatedElements = offerModal.querySelectorAll('[data-offer-animate]');
        const prefersReducedMotion = typeof window.matchMedia === 'function'
            ? window.matchMedia('(prefers-reduced-motion: reduce)')
            : { matches: false };
        const offerModalCloseDuration = prefersReducedMotion.matches ? 0 : 280;

        if (offerDialog && !offerDialog.hasAttribute('tabindex')) {
            offerDialog.setAttribute('tabindex', '-1');
        }

        const animateOfferFields = () => {
            if (!animatedElements.length) {
                return;
            }

            animatedElements.forEach((element) => {
                element.classList.remove('is-animated');
                element.style.removeProperty('--offer-animate-delay');
            });

            window.requestAnimationFrame(() => {
                animatedElements.forEach((element, index) => {
                    const delayBase = prefersReducedMotion.matches ? 0 : 250;
                    const delayStep = prefersReducedMotion.matches ? 0 : 180;
                    const delay = delayBase + (delayStep * index);

                    if (delay) {
                        element.style.setProperty('--offer-animate-delay', `${delay}ms`);
                    }

                    element.classList.add('is-animated');
                });
            });
        };

        const setAriaState = (isOpen) => {
            offerModal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            if (isOpen) {
                document.body.classList.add('offer-modal-open');
            } else {
                document.body.classList.remove('offer-modal-open');
            }
        };

        const openOfferModal = (plan) => {
            if (planField && typeof plan === 'string') {
                planField.value = plan;
            }

            offerModal.classList.remove('is-closing');
            offerModal.classList.add('is-visible');
            setAriaState(true);
            animateOfferFields();

            window.setTimeout(() => {
                if (offerDialog && typeof offerDialog.focus === 'function') {
                    offerDialog.focus();
                } else if (offerModal && typeof offerModal.focus === 'function') {
                    offerModal.focus();
                }
            }, 50);
        };

        const closeOfferModal = () => {
            if (!offerModal.classList.contains('is-visible')) {
                setAriaState(false);
                return;
            }

            if (prefersReducedMotion.matches) {
                offerModal.classList.remove('is-visible');
                offerModal.classList.remove('is-closing');
                setAriaState(false);
                return;
            }

            offerModal.classList.add('is-closing');
            setAriaState(false);
            window.setTimeout(() => {
                offerModal.classList.remove('is-visible');
                offerModal.classList.remove('is-closing');
            }, offerModalCloseDuration);
        };

        const bindCloseElement = (element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                closeOfferModal();
            });

            element.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    closeOfferModal();
                }
            });
        };

        offerCloseElements.forEach((element) => {
            bindCloseElement(element);
        });

        if (offerModal.classList.contains('is-visible')) {
            setAriaState(true);
            animateOfferFields();
            window.setTimeout(() => {
                if (offerDialog && typeof offerDialog.focus === 'function') {
                    offerDialog.focus();
                } else if (offerModal && typeof offerModal.focus === 'function') {
                    offerModal.focus();
                }
            }, 50);
        }

        offerOpenButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const plan = button.getAttribute('data-offer-plan') || button.textContent.trim();
                openOfferModal(plan);
            });
        });

        offerModal.addEventListener('click', (event) => {
            if (event.target.closest(closeSelectors)) {
                event.preventDefault();
                closeOfferModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && offerModal.classList.contains('is-visible')) {
                closeOfferModal();
            }
        });

        if (typeof prefersReducedMotion.addEventListener === 'function') {
            prefersReducedMotion.addEventListener('change', () => {
                if (offerModal.classList.contains('is-visible')) {
                    animateOfferFields();
                }
            });
        }
    }

    const fingerprintFields = document.querySelectorAll('[data-device-fingerprint]');
    if (fingerprintFields.length) {
        const fingerprintData = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: Array.isArray(navigator.languages) ? navigator.languages : [],
            platform: navigator.platform,
            vendor: navigator.vendor,
            screen: {
                width: window.screen ? window.screen.width : undefined,
                height: window.screen ? window.screen.height : undefined,
                availWidth: window.screen ? window.screen.availWidth : undefined,
                availHeight: window.screen ? window.screen.availHeight : undefined,
                colorDepth: window.screen ? window.screen.colorDepth : undefined,
                pixelRatio: window.devicePixelRatio
            },
            timezone: Intl.DateTimeFormat ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined,
            timezoneOffset: new Date().getTimezoneOffset(),
            hardwareConcurrency: navigator.hardwareConcurrency,
            deviceMemory: navigator.deviceMemory,
            maxTouchPoints: navigator.maxTouchPoints,
            cookieEnabled: navigator.cookieEnabled,
            referrer: document.referrer
        };

        let fingerprintString = '';
        try {
            fingerprintString = JSON.stringify(fingerprintData);
        } catch (error) {
            fingerprintString = '';
        }

        fingerprintFields.forEach((field) => {
            field.value = fingerprintString;
        });
    }

    const FORM_SUCCESS_STORAGE_PREFIX = 'dtFormSuccess:';
    const FORM_SUCCESS_TTL = 24 * 60 * 60 * 1000;
    const getStoredSuccessTimestamp = (key) => {
        if (!key) {
            return 0;
        }

        try {
            const rawValue = localStorage.getItem(FORM_SUCCESS_STORAGE_PREFIX + key);
            if (!rawValue) {
                return 0;
            }

            const timestamp = parseInt(rawValue, 10);
            if (!timestamp || Number.isNaN(timestamp)) {
                localStorage.removeItem(FORM_SUCCESS_STORAGE_PREFIX + key);
                return 0;
            }

            if (Date.now() - timestamp >= FORM_SUCCESS_TTL) {
                localStorage.removeItem(FORM_SUCCESS_STORAGE_PREFIX + key);
                return 0;
            }

            return timestamp;
        } catch (error) {
            return 0;
        }
    };
    const storeSuccessTimestamp = (key) => {
        if (!key) {
            return;
        }

        try {
            localStorage.setItem(FORM_SUCCESS_STORAGE_PREFIX + key, String(Date.now()));
        } catch (error) {
            /* localStorage may be unavailable */
        }
    };
    const clearStoredSuccess = (key) => {
        if (!key) {
            return;
        }

        try {
            localStorage.removeItem(FORM_SUCCESS_STORAGE_PREFIX + key);
        } catch (error) {
            /* ignore */
        }
    };

    const parseSuccessKeys = (value) => {
        if (typeof value !== 'string' || !value.trim()) {
            return [];
        }

        return value
            .split(',')
            .map((key) => key.trim())
            .filter((key) => key.length > 0);
    };

    const getActiveSuccessKey = (primaryKey, additionalKeys = []) => {
        if (primaryKey && getStoredSuccessTimestamp(primaryKey)) {
            return primaryKey;
        }

        for (const key of additionalKeys) {
            if (getStoredSuccessTimestamp(key)) {
                return key;
            }
        }

        return '';
    };

    const phoneValidationMessages = {
        invalidCharacters: 'Numărul de telefon poate conține doar cifre (și un singur + la început).',
        invalidInternational: 'Numărul de telefon în format internațional trebuie să aibă între 6 și 14 cifre.',
        invalidNational: 'Numărul de telefon trebuie să conțină exact 10 cifre.',
        required: 'Numărul de telefon este obligatoriu.'
    };

    const validatePhoneValue = (value, isRequired) => {
        const trimmed = value.trim();

        if (!trimmed) {
            if (isRequired) {
                return { valid: false, message: phoneValidationMessages.required };
            }

            return { valid: true, message: '' };
        }

        const hasPlus = trimmed.startsWith('+');
        const digits = hasPlus ? trimmed.slice(1) : trimmed;

        if (!/^[0-9]*$/.test(digits) || digits.length === 0) {
            return { valid: false, message: phoneValidationMessages.invalidCharacters };
        }

        if (hasPlus) {
            if (digits.length < 6 || digits.length > 14) {
                return { valid: false, message: phoneValidationMessages.invalidInternational };
            }
        } else if (digits.length !== 10) {
            return { valid: false, message: phoneValidationMessages.invalidNational };
        }

        return { valid: true, message: '' };
    };

    const errorMessages = {
        name: { required: 'Numele este obligatoriu.' },
        email: {
            required: 'Adresa de email este obligatorie.',
            invalid: 'Adresa de email nu este validă.'
        },
        phone: {
            required: phoneValidationMessages.required
        },
        message: { required: 'Mesajul este obligatoriu.' },
        details: { required: 'Detaliile despre proiect sunt obligatorii.' },
        terms: {
            required: 'Trebuie să accepți Termenii și condițiile și Politica de confidențialitate.'
        }
    };

    const asyncForms = document.querySelectorAll('[data-async-form]');
    asyncForms.forEach((form) => {
        const storageKey = form.getAttribute('data-success-storage-key');
        const sharedSuccessKeys = parseSuccessKeys(form.getAttribute('data-shared-success-keys'));
        const formWrapper = form.closest('[data-form-wrapper]');
        const successContainer = formWrapper ? formWrapper.querySelector('[data-form-success]') : null;
        const infoNotices = formWrapper
            ? Array.from(formWrapper.querySelectorAll('[data-form-notice]'))
            : [];
        const globalErrorContainer = form.querySelector('[data-form-global-error]');
        const fieldErrorElements = new Map();
        form.querySelectorAll('[data-field-error]').forEach((element) => {
            const fieldName = element.getAttribute('data-field-error');
            if (fieldName) {
                fieldErrorElements.set(fieldName, element);
            }
        });

        const hasActiveFieldErrors = () => {
            for (const element of fieldErrorElements.values()) {
                if (element.textContent && element.textContent.trim() !== '') {
                    return true;
                }
            }
            return false;
        };

        const showGlobalErrors = (messages) => {
            if (!globalErrorContainer) {
                return;
            }

            if (!messages || !messages.length) {
                globalErrorContainer.innerHTML = '';
                globalErrorContainer.hidden = true;
                globalErrorContainer.classList.remove('is-visible');
                return;
            }

            const list = document.createElement('ul');
            messages.forEach((message) => {
                const listItem = document.createElement('li');
                listItem.textContent = message;
                list.appendChild(listItem);
            });

            globalErrorContainer.innerHTML = '';
            globalErrorContainer.appendChild(list);
            globalErrorContainer.hidden = false;
            globalErrorContainer.classList.add('is-visible');
        };

        const showFieldError = (name, message) => {
            const errorElement = fieldErrorElements.get(name);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.hidden = false;
            }

            const fields = form.elements[name];
            if (!fields) {
                return;
            }

            const fieldNodes = fields instanceof RadioNodeList ? Array.from(fields) : [fields];
            fieldNodes.forEach((field) => {
                const group = field.closest('.form-group');
                if (group) {
                    group.classList.add('has-error');
                }
            });
        };

        const clearFieldError = (name) => {
            const errorElement = fieldErrorElements.get(name);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.hidden = true;
            }

            const fields = form.elements[name];
            if (!fields) {
                return;
            }

            const fieldNodes = fields instanceof RadioNodeList ? Array.from(fields) : [fields];
            fieldNodes.forEach((field) => {
                const group = field.closest('.form-group');
                if (group) {
                    group.classList.remove('has-error');
                }
            });
        };

        const clearAllErrors = () => {
            fieldErrorElements.forEach((_, key) => {
                clearFieldError(key);
            });
            showGlobalErrors([]);
        };

        const validateField = (field) => {
            if (!field || !field.name || field.disabled) {
                return null;
            }

            const name = field.name;
            const type = field.type;
            const isCheckbox = type === 'checkbox';
            const isRequired = field.required === true || field.getAttribute('required') !== null;
            const value = isCheckbox ? field.checked : field.value.trim();
            const fieldMessages = errorMessages[name] || {};

            if (isCheckbox) {
                if (isRequired && !field.checked) {
                    return fieldMessages.required || 'Acest câmp este obligatoriu.';
                }
                return null;
            }

            if (isRequired && value === '') {
                return fieldMessages.required || 'Acest câmp este obligatoriu.';
            }

            if (name === 'email' && value !== '') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    return fieldMessages.invalid || 'Adresa de email nu este validă.';
                }
            }

            if (name === 'phone') {
                const validationResult = validatePhoneValue(field.value, isRequired);
                if (!validationResult.valid) {
                    return validationResult.message;
                }
            }

            return null;
        };

        const validateForm = () => {
            const fieldErrors = {};
            Array.from(form.elements).forEach((element) => {
                if (!(element instanceof HTMLElement)) {
                    return;
                }

                if (!element.name || element.type === 'hidden' || element.type === 'submit' || element.type === 'button') {
                    return;
                }

                const message = validateField(element);
                if (message) {
                    fieldErrors[element.name] = message;
                }
            });

            return fieldErrors;
        };

        const setFormVisibility = (hidden) => {
            if (hidden) {
                form.classList.add('is-hidden');
                form.setAttribute('aria-hidden', 'true');
            } else {
                form.classList.remove('is-hidden');
                form.removeAttribute('aria-hidden');
            }

            infoNotices.forEach((notice) => {
                if (!(notice instanceof HTMLElement)) {
                    return;
                }

                if (hidden) {
                    notice.classList.add('is-hidden');
                    notice.setAttribute('hidden', '');
                } else {
                    notice.classList.remove('is-hidden');
                    notice.removeAttribute('hidden');
                }
            });
        };

        const setSuccessVisibility = (visible) => {
            if (!successContainer) {
                return;
            }

            successContainer.hidden = !visible;
            successContainer.classList.toggle('is-visible', visible);
        };

        const showSuccessState = () => {
            if (storageKey) {
                storeSuccessTimestamp(storageKey);
            }
            clearAllErrors();
            setFormVisibility(true);
            setSuccessVisibility(true);
            hideRecaptchaBadge();
        };

        const handleStoredSuccess = () => {
            const activeSuccessKey = getActiveSuccessKey(storageKey, sharedSuccessKeys);

            if (activeSuccessKey) {
                setFormVisibility(true);
                setSuccessVisibility(true);
                return;
            }

            const successInitiallyVisible = successContainer
                ? successContainer.classList.contains('is-visible')
                : false;

            setSuccessVisibility(successInitiallyVisible);

            if (successInitiallyVisible && storageKey) {
                storeSuccessTimestamp(storageKey);
                setFormVisibility(true);
            } else {
                setFormVisibility(false);
            }
        };

        handleStoredSuccess();

        const submitButton = form.querySelector('[type="submit"]');
        const setSubmittingState = (isSubmitting) => {
            if (isSubmitting) {
                form.setAttribute('aria-busy', 'true');
            } else {
                form.removeAttribute('aria-busy');
            }

            if (submitButton) {
                submitButton.disabled = Boolean(isSubmitting);
            }
        };

        const touchedFields = new Set();
        fieldErrorElements.forEach((errorElement, name) => {
            if (errorElement && !errorElement.hidden && errorElement.textContent.trim() !== '') {
                touchedFields.add(name);
            }
        });

        const handleFieldValidation = (field) => {
            if (!field || !field.name) {
                return;
            }

            const message = validateField(field);
            if (message) {
                showFieldError(field.name, message);
                if (storageKey) {
                    clearStoredSuccess(storageKey);
                }
            } else {
                clearFieldError(field.name);
                if (!hasActiveFieldErrors()) {
                    showGlobalErrors([]);
                }
            }
        };

        const handleFieldInput = (event) => {
            const field = event.target;
            if (!field || !field.name) {
                return;
            }

            if (!touchedFields.has(field.name)) {
                return;
            }

            handleFieldValidation(field);
        };

        const handleFieldBlur = (event) => {
            const field = event.target;
            if (!(field instanceof HTMLElement) || !field.name) {
                return;
            }

            if (!field.matches('input, textarea, select')) {
                return;
            }

            touchedFields.add(field.name);
            handleFieldValidation(field);
        };

        Array.from(form.elements).forEach((element) => {
            if (!(element instanceof HTMLElement)) {
                return;
            }

            const isInputLike = element.matches('input, textarea, select');
            if (!isInputLike) {
                return;
            }

            element.addEventListener('input', handleFieldInput);
            element.addEventListener('change', () => {
                touchedFields.add(element.name);
                handleFieldValidation(element);
            });
        });

        form.addEventListener('focusout', handleFieldBlur);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            clearAllErrors();

            const fieldErrors = validateForm();
            if (Object.keys(fieldErrors).length > 0) {
                Object.entries(fieldErrors).forEach(([name, message]) => {
                    showFieldError(name, message);
                    touchedFields.add(name);
                });
                showGlobalErrors(['Te rugăm să verifici câmpurile marcate.']);
                return;
            }

            setSubmittingState(true);

            requestRecaptchaToken()
                .catch(() => null)
                .finally(() => {
                    const formData = new FormData(form);

                    fetch(form.action, {
                        method: form.method || 'POST',
                        body: formData,
                        headers: {
                            Accept: 'application/json',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        credentials: 'same-origin'
                    })
                        .then(async (response) => {
                            let data;
                            try {
                                data = await response.json();
                            } catch (error) {
                                throw new Error('invalid-response');
                            }

                            if (!data || typeof data !== 'object') {
                                throw new Error('invalid-response');
                            }

                            return data;
                        })
                        .then((data) => {
                            if (data.success) {
                                showSuccessState();
                                return;
                            }

                            const responseFieldErrors = data.fieldErrors || {};
                            Object.entries(responseFieldErrors).forEach(([name, message]) => {
                                showFieldError(name, message);
                            });

                            const responseErrors = Array.isArray(data.errors) ? data.errors : [];
                            if (responseErrors.length) {
                                showGlobalErrors(responseErrors);
                            } else if (Object.keys(responseFieldErrors).length) {
                                showGlobalErrors(['Te rugăm să verifici câmpurile marcate.']);
                            } else {
                                showGlobalErrors(['Nu am putut trimite formularul. Încearcă din nou.']);
                            }

                            if (storageKey) {
                                clearStoredSuccess(storageKey);
                            }
                        })
                        .catch(() => {
                            showGlobalErrors(['Nu am putut trimite formularul. Încearcă din nou sau contactează-ne telefonic.']);
                        })
                        .finally(() => {
                            setSubmittingState(false);
                        });
                });
        });
    });

    const stickyFooterNav = document.querySelector('.mobile-footer-nav');
    if (stickyFooterNav) {
        const updateStickyNavVisibility = () => {
            const viewport = window.visualViewport;
            const scale = viewport && typeof viewport.scale === 'number' ? viewport.scale : 1;
            if (scale > 1.15) {
                stickyFooterNav.classList.add('is-hidden-zoom');
            } else {
                stickyFooterNav.classList.remove('is-hidden-zoom');
            }
        };

        updateStickyNavVisibility();

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', updateStickyNavVisibility);
            window.visualViewport.addEventListener('scroll', updateStickyNavVisibility);
        } else {
            window.addEventListener('resize', updateStickyNavVisibility);
        }
    }
})();
