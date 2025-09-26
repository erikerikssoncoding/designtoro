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
    const enableRecaptchaBadge = (auto = false) => {
        document.body.classList.add('show-recaptcha');
        if (auto) {
            document.body.dataset.recaptchaAuto = 'true';
        }
    };
    const disableAutoRecaptchaBadge = () => {
        if (document.body.dataset.recaptchaAuto === 'true') {
            document.body.classList.remove('show-recaptcha');
            delete document.body.dataset.recaptchaAuto;
        }
    };
    const initializeRecaptcha = () => {
        if (typeof grecaptcha === 'undefined' || !recaptchaSiteKey) {
            enableRecaptchaBadge(true);
            return;
        }

        grecaptcha.ready(() => {
            grecaptcha
                .execute(recaptchaSiteKey, { action: 'contact' })
                .then((token) => {
                    const tokenField = document.getElementById('recaptcha-token');
                    if (tokenField) {
                        tokenField.value = token;
                    }
                    disableAutoRecaptchaBadge();
                })
                .catch(() => {
                    console.warn('Nu s-a putut genera tokenul reCAPTCHA.');
                    enableRecaptchaBadge(true);
                });
        });
    };

    if (recaptchaSiteKey) {
        if (typeof grecaptcha !== 'undefined') {
            initializeRecaptcha();
        } else {
            window.addEventListener('load', () => {
                if (typeof grecaptcha !== 'undefined') {
                    initializeRecaptcha();
                } else {
                    enableRecaptchaBadge(true);
                }
            });
        }
    }

    const offerModal = document.querySelector('[data-offer-modal]');
    if (offerModal) {
        const offerOpenButtons = document.querySelectorAll('[data-offer-modal-open]');
        const planField = offerModal.querySelector('#offer-plan-field');
        const nameField = offerModal.querySelector('#offer-name');
        const closeSelectors = '[data-offer-modal-close]';
        const animatedElements = offerModal.querySelectorAll('[data-offer-animate]');
        const prefersReducedMotion = typeof window.matchMedia === 'function'
            ? window.matchMedia('(prefers-reduced-motion: reduce)')
            : { matches: false };

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

            offerModal.classList.add('is-visible');
            setAriaState(true);
            animateOfferFields();

            window.setTimeout(() => {
                if (nameField && typeof nameField.focus === 'function') {
                    nameField.focus();
                }
            }, 50);
        };

        const closeOfferModal = () => {
            offerModal.classList.remove('is-visible');
            setAriaState(false);
        };

        if (offerModal.classList.contains('is-visible')) {
            setAriaState(true);
            animateOfferFields();
            window.setTimeout(() => {
                if (nameField && typeof nameField.focus === 'function') {
                    nameField.focus();
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
