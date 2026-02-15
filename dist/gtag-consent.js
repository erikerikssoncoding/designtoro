(function () {
  var GA_ID = 'G-D4SLSVKP28';
  var hasConfigured = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  var defaultConsent = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  };

  function hasAnalyticsConsent(consentState) {
    if (!consentState || typeof consentState !== 'object') {
      return false;
    }

    if (typeof consentState.analytics === 'boolean') {
      return consentState.analytics;
    }

    if (typeof consentState === 'boolean') {
      return consentState;
    }

    if (Array.isArray(consentState)) {
      return consentState.indexOf('analytics') !== -1;
    }

    if (Object.prototype.hasOwnProperty.call(consentState, 'analytics')) {
      return !!consentState.analytics;
    }

    return false;
  }

  function applyConsentState(consentState) {
    var analyticsEnabled = hasAnalyticsConsent(consentState);

    window.gtag('consent', 'update', {
      ad_storage: analyticsEnabled ? 'granted' : 'denied',
      ad_user_data: analyticsEnabled ? 'granted' : 'denied',
      ad_personalization: analyticsEnabled ? 'granted' : 'denied',
      analytics_storage: analyticsEnabled ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
    });

    if (analyticsEnabled && !hasConfigured) {
      window.gtag('config', GA_ID, {
        send_page_view: true,
      });
      hasConfigured = true;
    }
  }

  window.__designtoroApplyGoogleConsent = function (consentState) {
    applyConsentState(consentState);
  };

  window.gtag('js', new Date());
  window.gtag('consent', 'default', defaultConsent);
  window.gtag('config', GA_ID, {
    send_page_view: false,
  });

  var script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
})();
