var klaroConfig = {
  elementID: 'klaro',
  storageName: 'designtoro-consent',
  storageMethod: 'cookie',
  cookieExpiresAfterDays: 365,
  callback: function (consent) {
    if (
      typeof window.__designtoroApplyGoogleConsent === 'function'
    ) {
      window.__designtoroApplyGoogleConsent(consent);
    }
  },
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  htmlTexts: false,
  lang: 'ro',
  translations: {
    zz: {
      privacyPolicyUrl: '/politica-de-confidentialitate',
      title: 'Preferințe cookie',
      consentNotice: {
        title: 'Cookie-uri',
        description:
          'Acest site folosește cookie-uri pentru funcționare. Pentru servicii opționale, alege ce preferați.',
        learnMore: 'Află mai multe',
        privacyPolicy: {
          name: 'Politica de confidențialitate',
        },
      },
      consentModal: {
        title: 'Setări cookie',
        description:
          'Aici poți modifica preferințele pentru servicii. Poți activa sau dezactiva orice opțiune non-esențială.',
      },
      poweredBy: '',
      acceptAll: 'Acceptă tot',
      acceptSelected: 'Salvează selecția',
      decline: 'Refuză toate',
      close: 'Închide',
      save: 'Salvează',
      privacyPolicy: {
        name: 'Politica de confidențialitate',
        text: 'Consultați {privacyPolicy} pentru detalii.',
      },
      ok: 'OK',
      purposes: {
        essential: {
          title: 'Necesare',
        },
        analytics: {
          title: 'Analitice',
        },
      },
      service: {
        required: {
          title: ' (obligatoriu)',
          description: 'Aceste cookie-uri sunt necesare pentru funcționarea site-ului.',
        },
      },
    },
    ro: {
      privacyPolicyUrl: '/politica-de-confidentialitate',
      title: 'Preferințe cookie',
      consentNotice: {
        title: 'Cookie-uri',
        description:
          'Acest site folosește cookie-uri pentru funcționare. Pentru servicii opționale, alege ce preferați.',
        learnMore: 'Află mai multe',
        privacyPolicy: {
          name: 'Politica de confidențialitate',
        },
      },
      consentModal: {
        title: 'Setări cookie',
        description:
          'Aici poți modifica preferințele pentru servicii. Poți activa sau dezactiva orice opțiune non-esențială.',
      },
      poweredBy: '',
      acceptAll: 'Acceptă tot',
      acceptSelected: 'Salvează selecția',
      decline: 'Refuză toate',
      close: 'Închide',
      save: 'Salvează',
      privacyPolicy: {
        name: 'Politica de confidențialitate',
        text: 'Consultați {privacyPolicy} pentru detalii.',
      },
      ok: 'OK',
      purposes: {
        essential: {
          title: 'Necesare',
        },
        analytics: {
          title: 'Analitice',
        },
      },
      service: {
        required: {
          title: ' (obligatoriu)',
          description: 'Aceste cookie-uri sunt necesare pentru funcționarea site-ului.',
        },
      },
    },
  },
  services: [
    {
      name: 'essential',
      title: 'Cookie-uri necesare',
      default: true,
      required: true,
      onlyOnce: true,
      purposes: ['essential'],
      translations: {
        zz: {
          title: 'Cookie-uri necesare',
          description: 'Cookie-uri tehnice fără de care site-ul nu poate funcționa.',
        },
        ro: {
          title: 'Cookie-uri necesare',
          description:
            'Cookie-uri tehnice fără de care site-ul nu poate funcționa corect.',
        },
      },
      cookies: [],
    },
    {
      name: 'analytics',
      title: 'Analitice',
      default: false,
      purposes: ['analytics'],
      translations: {
        zz: {
          title: 'Analitice',
          description: 'Ne ajută să îmbunătățim site-ul pe baza datelor agregate.',
        },
        ro: {
          title: 'Analitice',
          description:
            'Ne ajută să îmbunătățim site-ul pe baza statisticilor agregate.',
        },
      },
      cookies: [],
      onlyOnce: true,
    },
  ],
};
