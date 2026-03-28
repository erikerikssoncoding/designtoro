export const SITE_URL = 'https://www.designtoro.ro';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/img/designtoro-hero.webp`;

const sharedSchema = [
  {
    '@type': 'ProfessionalService',
    name: 'DesignToro',
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    description:
      'DesignToro livreaza site-uri, marketing digital, automatizari si servicii de Integrare Agent AI pentru afaceri din Romania.',
    telephone: '+40 757 568 812',
    email: 'office@designtoro.ro',
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bucuresti',
      addressCountry: 'RO',
    },
    sameAs: [
      'https://www.instagram.com/designtoro.romania',
      'https://www.facebook.com/DesignToroRomania/',
    ],
  },
];

const pageMeta = {
  '/': {
    title: 'DesignToro | Agentie Web Design, SEO si Marketing Digital Bucuresti',
    description:
      'DesignToro construieste site-uri de prezentare, magazine online, campanii de marketing digital si strategii SEO pentru afaceri care vor mai multi clienti.',
    schemaType: 'WebPage',
  },
  '/servicii': {
    title: 'Servicii Web Design, SEO si Marketing Digital | DesignToro',
    description:
      'Descopera serviciile DesignToro pentru site-uri de prezentare, magazine online, SEO, branding, continut si campanii digitale orientate spre conversii.',
    schemaType: 'CollectionPage',
  },
  '/preturi': {
    title: 'Preturi Web Design si Pachete Digitale | DesignToro',
    description:
      'Vezi pachetele DesignToro pentru web design, magazine online si servicii digitale. Compari usor optiunile si ceri rapid o oferta personalizata.',
    schemaType: 'WebPage',
  },
  '/portofoliu': {
    title: 'Portofoliu Web Design si Magazine Online | DesignToro',
    description:
      'Exploreaza portofoliul DesignToro cu site-uri de prezentare si magazine online construite pentru afaceri care vor o prezenta digitala clara si eficienta.',
    schemaType: 'CollectionPage',
  },
  '/contact': {
    title: 'Contact DesignToro | Cere Oferta pentru Site, SEO sau Automatizari',
    description:
      'Contacteaza echipa DesignToro pentru o oferta personalizata de web design, SEO, marketing digital sau Integrare Agent AI pentru businessul tau.',
    schemaType: 'ContactPage',
  },
  '/integrare-agent-ai': {
    title: 'Integrare Agent AI | Agent AI WhatsApp, CRM si eCommerce | DesignToro',
    description:
      'Integrare Agent AI pentru WhatsApp support, confirmare comenzi in eCommerce, adaugare produse, conectare la CRM si automatizari scalabile pentru afaceri.',
    schemaType: 'WebPage',
    schemaName: 'Integrare Agent AI',
    schema: [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Acasa',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Integrare Agent AI',
            item: `${SITE_URL}/integrare-agent-ai`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Integrare Agent AI',
        serviceType: 'Integrare Agent AI',
        url: `${SITE_URL}/integrare-agent-ai`,
        areaServed: {
          '@type': 'Country',
          name: 'Romania',
        },
        description:
          'Serviciu de Integrare Agent AI pentru suport pe WhatsApp, confirmare comenzi, actualizare produse, integrare CRM si automatizari de business.',
        provider: {
          '@type': 'ProfessionalService',
          name: 'DesignToro',
          url: SITE_URL,
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Companii care vand online sau gestioneaza lead-uri si suport',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Ce inseamna Integrare Agent AI pentru un business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Integrarea Agent AI conecteaza agentul cu canalele si sistemele companiei, precum WhatsApp, magazin online, CRM, email sau alte fluxuri, astfel incat raspunsurile si actiunile automate sa fie utile in business, nu doar conversatii izolate.',
            },
          },
          {
            '@type': 'Question',
            name: 'Se poate implementa un Agent AI WhatsApp pentru suport clienti?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Da. Putem configura un Agent AI WhatsApp care raspunde la intrebari frecvente, verifica statusuri, preia cereri, califica lead-uri si transfera conversatia catre un operator uman atunci cand este necesar.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puteti conecta agentul AI la platforme eCommerce si CRM-uri?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Da. Putem integra agentul cu platforme eCommerce, CRM-uri, webhooks, email, foi de calcul si alte sisteme interne, in functie de procesele care trebuie automatizate.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ce tipuri de automatizari puteti livra?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Putem construi fluxuri pentru support, confirmare comenzi, actualizare produse, preluare lead-uri, sincronizare date in CRM, notificari interne si alte procese repetitive care consuma timp echipei.',
            },
          },
        ],
      },
    ],
  },
  '/termeni-si-conditii': {
    title: 'Termeni si Conditii | DesignToro',
    description: 'Citeste termenii si conditiile de utilizare pentru site-ul si serviciile DesignToro.',
    robots: 'noindex,follow',
    schemaType: 'WebPage',
  },
  '/politica-de-confidentialitate': {
    title: 'Politica de Confidentialitate | DesignToro',
    description:
      'Afla cum colecteaza, proceseaza si protejeaza DesignToro datele cu caracter personal transmise prin site si formulare.',
    robots: 'noindex,follow',
    schemaType: 'WebPage',
  },
  '/politica-cookie-uri': {
    title: 'Politica privind Cookie-urile | DesignToro',
    description: 'Detalii despre cookie-urile utilizate pe site-ul DesignToro si despre optiunile de consimtamant disponibile.',
    robots: 'noindex,follow',
    schemaType: 'WebPage',
  },
};

function normalizePathname(pathname = '/') {
  const cleanPath = String(pathname).split('?')[0].split('#')[0] || '/';
  if (cleanPath === '/') {
    return '/';
  }

  return cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
}

function buildAbsoluteUrl(pathname) {
  return pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
}

function buildPageSchema(meta, canonical) {
  return {
    '@type': meta.schemaType || 'WebPage',
    name: meta.schemaName || meta.title,
    description: meta.description,
    url: canonical,
    inLanguage: 'ro',
    isPartOf: {
      '@type': 'WebSite',
      name: 'DesignToro',
      url: SITE_URL,
    },
  };
}

export function getPageSeo(pathname = '/') {
  const normalizedPathname = normalizePathname(pathname);
  const baseMeta = pageMeta[normalizedPathname] || pageMeta['/'];
  const canonical = baseMeta.canonical || buildAbsoluteUrl(normalizedPathname);
  const pageSchema = buildPageSchema(baseMeta, canonical);

  return {
    ...baseMeta,
    canonical,
    pathname: normalizedPathname,
    robots: baseMeta.robots || 'index,follow',
    ogType: baseMeta.ogType || 'website',
    ogImage: baseMeta.ogImage || DEFAULT_OG_IMAGE,
    twitterCard: baseMeta.twitterCard || 'summary_large_image',
    schema: [...sharedSchema, pageSchema, ...(baseMeta.schema || [])],
  };
}

export function buildSchemaPayload(schemaItems = []) {
  const cleanedItems = schemaItems
    .filter(Boolean)
    .map((item) => {
      const { ['@context']: _context, ...rest } = item;
      return rest;
    });

  if (!cleanedItems.length) {
    return null;
  }

  if (cleanedItems.length === 1) {
    return {
      '@context': 'https://schema.org',
      ...cleanedItems[0],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': cleanedItems,
  };
}

export function serializeSchemaPayload(schemaItems = []) {
  const payload = buildSchemaPayload(schemaItems);
  return payload ? JSON.stringify(payload).replace(/</g, '\\u003c') : '';
}
