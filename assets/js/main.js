(function () {
    const docEl = document.documentElement;
    docEl.classList.remove('no-js');
    document.body.classList.remove('no-js');

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('is-open');
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement && event.target.matches('a')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('is-open');
            }
        });
    }

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

    document
        .querySelectorAll('.service-card, .portfolio-card, .portfolio-item, .pricing-card, .stat-card')
        .forEach((el) => {
            el.classList.add('reveal');
            observer.observe(el);
        });

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

    const recaptchaSiteKey = window.RECAPTCHA_SITE_KEY;
    if (typeof grecaptcha !== 'undefined' && recaptchaSiteKey) {
        grecaptcha.ready(() => {
            grecaptcha
                .execute(recaptchaSiteKey, { action: 'contact' })
                .then((token) => {
                    const tokenField = document.getElementById('recaptcha-token');
                    if (tokenField) {
                        tokenField.value = token;
                    }
                })
                .catch(() => {
                    console.warn('Nu s-a putut genera tokenul reCAPTCHA.');
                });
        });
    }
})();
