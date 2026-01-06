/**
 * I18N DICTIONARIES
 * Chargement des dictionnaires de traduction pour les strings UI
 */

import { type Locale } from './config';

// Type pour le dictionnaire
export interface Dictionary {
  common: {
    contact: string;
    learnMore: string;
    seeAll: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    menu: string;
    search: string;
    loading: string;
  };
  nav: {
    home: string;
    agency: string;
    aboutUs: string;
    ourOffices: string;
    expertise: string;
    geoSeo: string;
    sea: string;
    data: string;
    training: string;
    resources: string;
    caseStudies: string;
    guides: string;
    blog: string;
  };
  cta: {
    getStarted: string;
    contactUs: string;
    requestQuote: string;
    bookCall: string;
    downloadGuide: string;
  };
  footer: {
    services: string;
    company: string;
    resources: string;
    legal: string;
    legalNotice: string;
    privacyPolicy: string;
    allRightsReserved: string;
  };
  errors: {
    notFound: string;
    notFoundDescription: string;
    backHome: string;
  };
  languageSwitcher: {
    switchTo: string;
    currentLanguage: string;
  };
}

// Dictionnaires inline pour éviter les problèmes de chargement
const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    common: {
      contact: 'Contact',
      learnMore: 'En savoir plus',
      seeAll: 'Voir tout',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Precedent',
      close: 'Fermer',
      menu: 'Menu',
      search: 'Rechercher',
      loading: 'Chargement...',
    },
    nav: {
      home: 'Accueil',
      agency: "L'agence",
      aboutUs: 'Qui sommes-nous',
      ourOffices: 'Nos bureaux',
      expertise: 'Expertises',
      geoSeo: 'GEO & SEO',
      sea: 'SEA',
      data: 'Data',
      training: 'Formations',
      resources: 'Ressources',
      caseStudies: 'Etudes de cas',
      guides: 'Guides',
      blog: 'Blog',
    },
    cta: {
      getStarted: 'Commencer',
      contactUs: 'Nous contacter',
      requestQuote: 'Demander un devis',
      bookCall: 'Reserver un appel',
      downloadGuide: 'Telecharger le guide',
    },
    footer: {
      services: 'Services',
      company: 'Agence',
      resources: 'Ressources',
      legal: 'Legal',
      legalNotice: 'Mentions legales',
      privacyPolicy: 'Politique de confidentialite',
      allRightsReserved: 'Tous droits reserves',
    },
    errors: {
      notFound: 'Page non trouvee',
      notFoundDescription: "La page que vous recherchez n'existe pas ou a ete deplacee.",
      backHome: "Retour a l'accueil",
    },
    languageSwitcher: {
      switchTo: 'Switch to English',
      currentLanguage: 'FR',
    },
  },
  en: {
    common: {
      contact: 'Contact',
      learnMore: 'Learn more',
      seeAll: 'See all',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      menu: 'Menu',
      search: 'Search',
      loading: 'Loading...',
    },
    nav: {
      home: 'Home',
      agency: 'Agency',
      aboutUs: 'About us',
      ourOffices: 'Our offices',
      expertise: 'Expertise',
      geoSeo: 'GEO & SEO',
      sea: 'SEA',
      data: 'Data',
      training: 'Training',
      resources: 'Resources',
      caseStudies: 'Case studies',
      guides: 'Guides',
      blog: 'Blog',
    },
    cta: {
      getStarted: 'Get started',
      contactUs: 'Contact us',
      requestQuote: 'Request a quote',
      bookCall: 'Book a call',
      downloadGuide: 'Download guide',
    },
    footer: {
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      legalNotice: 'Legal notice',
      privacyPolicy: 'Privacy policy',
      allRightsReserved: 'All rights reserved',
    },
    errors: {
      notFound: 'Page not found',
      notFoundDescription: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to home',
    },
    languageSwitcher: {
      switchTo: 'Passer en francais',
      currentLanguage: 'EN',
    },
  },
};

/**
 * Récupère le dictionnaire pour une locale donnée
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/**
 * Récupère une traduction spécifique
 */
export function t(locale: Locale, key: string): string {
  const dict = getDictionary(locale);
  const keys = key.split('.');
  let value: unknown = dict;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Retourne la clé si pas trouvée
    }
  }

  return typeof value === 'string' ? value : key;
}
