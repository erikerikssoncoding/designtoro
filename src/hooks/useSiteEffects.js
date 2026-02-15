import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSiteEffects() {
  const location = useLocation();

  useEffect(() => {
    const docEl = document.documentElement;
    const body = document.body;
    const isPortfolioPage = location.pathname === '/portofoliu';
    let initialRevealFrame;
    let firstRowRevealFrame;

    docEl.classList.remove('no-js');
    body.classList.remove('no-js');
    const isHomePage = location.pathname === '/';
    body.classList.toggle('page-home', isHomePage);

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

    const revealTargets = document.querySelectorAll('section:not(.hero), .service-card, .portfolio-card, .portfolio-item, .pricing-card, .stat-card');

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || docEl.clientHeight;

      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < viewportHeight && rect.bottom > 0;

        if (isInView) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      });
    };

    revealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    initialRevealFrame = window.requestAnimationFrame(() => {
      initialRevealFrame = window.requestAnimationFrame(revealVisibleElements);
    });

    if (isPortfolioPage) {
      const revealPortfolioElements = () => {
        const forceReveal = (selector) => {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.add('in-view');
            observer.unobserve(element);
          }
        };

        forceReveal('.page-hero');
        forceReveal('.portfolio-filters');
        forceReveal('.portfolio-gallery');

        const portfolioItems = document.querySelectorAll('.portfolio-item');
        if (!portfolioItems.length) {
          return;
        }

        const firstRowTop = portfolioItems[0].getBoundingClientRect().top;
        const rowTolerance = 16;

        portfolioItems.forEach((item) => {
          const itemTop = item.getBoundingClientRect().top;
          if (Math.abs(itemTop - firstRowTop) <= rowTolerance) {
            item.classList.add('in-view');
            observer.unobserve(item);
          }
        });
      };

      firstRowRevealFrame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(revealPortfolioElements);
      });
    }

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
      body.classList.remove('page-home');
      observer.disconnect();
      window.removeEventListener('scroll', updateHeaderState);
      if (stickyMediaQuery) {
        if (typeof stickyMediaQuery.removeEventListener === 'function') {
          stickyMediaQuery.removeEventListener('change', handleMediaChange);
        } else if (typeof stickyMediaQuery.removeListener === 'function') {
          stickyMediaQuery.removeListener(handleMediaChange);
        }
      }
      if (firstRowRevealFrame) {
        window.cancelAnimationFrame(firstRowRevealFrame);
      }

      if (initialRevealFrame) {
        window.cancelAnimationFrame(initialRevealFrame);
      }
    };
  }, [location.pathname]);
}
