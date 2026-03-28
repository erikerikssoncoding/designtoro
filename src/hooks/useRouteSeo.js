import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSeo, serializeSchemaPayload } from '../seo/routeMeta';

function upsertMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertSchema(schemaItems) {
  const schemaText = serializeSchemaPayload(schemaItems);
  let element = document.head.querySelector('script[data-route-schema="true"]');

  if (!schemaText) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-route-schema', 'true');
    document.head.appendChild(element);
  }

  element.textContent = schemaText;
}

export function useRouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getPageSeo(location.pathname);

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.robots);
    upsertMeta('property', 'og:locale', 'ro_RO');
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:site_name', 'DesignToro');
    upsertMeta('property', 'og:image', seo.ogImage);
    upsertMeta('name', 'twitter:card', seo.twitterCard);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', seo.ogImage);
    upsertCanonical(seo.canonical);
    upsertSchema(seo.schema);
  }, [location.pathname]);
}
