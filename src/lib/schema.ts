/**
 * SCHEMA.ORG - Données structurées JSON-LD
 * Configuration centralisée pour les données structurées Schema.org
 * Avec support i18n pour les descriptions
 */

import { type Locale } from '@/lib/i18n/config';

// ============================================
// CONFIGURATION ORGANISATION
// ============================================
export const organizationData = {
  name: 'Rankwell',
  url: 'https://www.rankwell.agency',
  logo: 'https://www.rankwell.agency/images/shared/logo-header.webp',
  email: 'contact@rankwell.fr',
  foundingDate: '2017',
  description: {
    fr: 'Agence GEO, SEO, SEA & Data Marketing. Rankwell accompagne les entreprises dans leur croissance digitale avec des stratégies sur mesure.',
    en: 'GEO, SEO, SEA & Data Marketing Agency. Rankwell supports businesses in their digital growth with tailored strategies.',
  },
  sameAs: [
    'https://www.facebook.com/rankwellagency',
    'https://www.linkedin.com/company/rankwell/',
    'https://www.instagram.com/rankwell.agency/',
  ],
  locations: {
    paris: {
      name: 'Rankwell Paris',
      streetAddress: '8 place Boulnois',
      postalCode: '75017',
      city: 'Paris',
      country: 'FR',
      telephone: '+33182283000',
      telephoneDisplay: '01 82 28 30 00',
      email: 'contact@rankwell.fr',
    },
    dubai: {
      name: 'Rankwell Dubai',
      streetAddress: 'Oud Metha Road 18th Street',
      postalCode: '25775',
      city: 'Dubai',
      country: 'AE',
      telephone: '+971555294430',
      telephoneDisplay: '+971 55 529 4430',
      email: 'theophile@rankwell.com',
    },
  },
};

/**
 * Helper to get localized description
 */
export function getOrganizationDescription(locale: Locale = 'fr'): string {
  return organizationData.description[locale];
}

// ============================================
// TYPES
// ============================================
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

// ============================================
// GÉNÉRATEURS DE SCHEMA
// ============================================

/**
 * Génère le Schema Organization pour le layout principal
 * @param locale - La locale pour la description (fr ou en)
 */
export function generateOrganizationSchema(locale: Locale = 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationData.name,
    url: organizationData.url,
    logo: organizationData.logo,
    email: organizationData.email,
    foundingDate: organizationData.foundingDate,
    description: getOrganizationDescription(locale),
    sameAs: organizationData.sameAs,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: organizationData.locations.paris.streetAddress,
        addressLocality: organizationData.locations.paris.city,
        postalCode: organizationData.locations.paris.postalCode,
        addressCountry: organizationData.locations.paris.country,
      },
      {
        '@type': 'PostalAddress',
        streetAddress: organizationData.locations.dubai.streetAddress,
        addressLocality: organizationData.locations.dubai.city,
        postalCode: organizationData.locations.dubai.postalCode,
        addressCountry: organizationData.locations.dubai.country,
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: organizationData.locations.paris.telephone,
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
      },
      {
        '@type': 'ContactPoint',
        telephone: organizationData.locations.dubai.telephone,
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['English', 'French'],
      },
    ],
  };
}

/**
 * Génère le Schema WebSite pour le layout principal
 * @param locale - La locale pour la description (fr ou en)
 */
export function generateWebSiteSchema(locale: Locale = 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organizationData.name,
    url: organizationData.url,
    description: getOrganizationDescription(locale),
    publisher: {
      '@type': 'Organization',
      name: organizationData.name,
      logo: organizationData.logo,
    },
  };
}

/**
 * Génère le Schema BreadcrumbList
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${organizationData.url}${item.url}`,
    })),
  };
}

/**
 * Génère le Schema Service pour les pages de services
 */
export function generateServiceSchema(service: ServiceSchemaData) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: service.provider || organizationData.name,
      url: organizationData.url,
    },
    areaServed: ['FR', 'AE', 'International'],
    serviceType: 'Digital Marketing',
  };

  // Ajouter l'image si fournie
  if (service.image) {
    schema.image = service.image.startsWith('http')
      ? service.image
      : `${organizationData.url}${service.image}`;
  }

  return schema;
}

/**
 * Génère le Schema FAQPage
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Génère le Schema HowTo pour les processus/méthodologies
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Génère le Schema LocalBusiness pour les pages de contact/bureaux
 */
export function generateLocalBusinessSchema(location: 'paris' | 'dubai') {
  const loc = organizationData.locations[location];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: loc.name,
    url: organizationData.url,
    logo: organizationData.logo,
    image: organizationData.logo,
    telephone: loc.telephone,
    email: loc.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.streetAddress,
      addressLocality: loc.city,
      postalCode: loc.postalCode,
      addressCountry: loc.country,
    },
    priceRange: '€€€',
    sameAs: organizationData.sameAs,
  };
}
