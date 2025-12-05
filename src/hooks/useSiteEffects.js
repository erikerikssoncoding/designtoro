import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSiteEffects() {
  const location = useLocation();

  useEffect(() => {
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
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    const revealTargets = document.querySelectorAll(
      'section:not(.hero), .service-card, .portfolio-card, .portfolio-item, .pricing-card, .stat-card',
    );

    revealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const heroRevealTargets = document.querySelectorAll(
      '.hero .hero-text > *, .hero .hero-metric, .hero .hero-metric .accent-card',
    );

    heroRevealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const siteHeader = document.querySelector('.site-header');
    const stickyMediaQuery = window.matchMedia ? window.matchMedia('(min-width: 992px)') : null;

    const updateHeaderState = () => {
      if (stickyMediaQuery && !stickyMediaQuery.matches) {
        siteHeader?.classList.remove('is-sticky');
        return;
      }

      if (window.scrollY > 0) {
        siteHeader?.classList.add('is-sticky');
      } else {
        siteHeader?.classList.remove('is-sticky');
      }
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    const handleMediaChange = () => updateHeaderState();

    if (stickyMediaQuery) {
      if (typeof stickyMediaQuery.addEventListener === 'function') {
        stickyMediaQuery.addEventListener('change', handleMediaChange);
      } else if (typeof stickyMediaQuery.addListener === 'function') {
        stickyMediaQuery.addListener(handleMediaChange);
      }
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateHeaderState);
      if (stickyMediaQuery) {
        if (typeof stickyMediaQuery.removeEventListener === 'function') {
          stickyMediaQuery.removeEventListener('change', handleMediaChange);
        } else if (typeof stickyMediaQuery.removeListener === 'function') {
          stickyMediaQuery.removeListener(handleMediaChange);
        }
      }
    };
  }, [location.pathname]);
}
