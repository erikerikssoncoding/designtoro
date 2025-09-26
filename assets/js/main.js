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
