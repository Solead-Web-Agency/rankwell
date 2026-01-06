/**
 * I18N ROUTES
 * Mapping bidirectionnel des segments d'URL entre français et anglais
 */

import { type Locale, defaultLocale } from './config';

/**
 * Traduction des segments d'URL
 * Clé = segment français, Valeur = segment anglais
 */
export const segmentTranslations: Record<string, string> = {
  // Services principaux
  'agence-geo-seo': 'geo-seo-agency',
  'agence-sea': 'sea-agency',
  'agence-data': 'data-agency',
  'agence': 'agency',

  // Sous-pages GEO-SEO
  'audit': 'audit',
  'technique-semantique': 'technical-semantic',
  'netlinking': 'link-building',
  'creation-contenu': 'content-creation',
  'local': 'local',
  'international': 'international',

  // Sous-pages SEA
  'setup': 'setup',
  'accompagnement': 'management',
  'analyse-semantique': 'semantic-analysis',

  // Sous-pages Data
  'tracking': 'tracking',
  'analytics': 'analytics',
  'cro': 'cro',

  // Pages Agence
  'qui-sommes-nous': 'about-us',
  'nos-bureaux': 'our-offices',

  // Autres
  'contact': 'contact',
  'formations': 'training',
  'mentions-legales': 'legal-notice',
  'politique-confidentialite': 'privacy-policy',
};

/**
 * Mapping inverse : anglais → français
 */
export const reverseSegmentTranslations: Record<string, string> = Object.fromEntries(
  Object.entries(segmentTranslations).map(([fr, en]) => [en, fr])
);

/**
 * Traduit un chemin français vers anglais
 * @param frenchPath - Chemin en français (ex: /agence-sea/analyse-semantique)
 * @returns Chemin en anglais (ex: /sea-agency/semantic-analysis)
 */
export function translatePathToEnglish(frenchPath: string): string {
  if (frenchPath === '/' || frenchPath === '') {
    return '/';
  }

  const segments = frenchPath.split('/').filter(Boolean);
  const translatedSegments = segments.map(
    (segment) => segmentTranslations[segment] || segment
  );

  return '/' + translatedSegments.join('/');
}

/**
 * Traduit un chemin anglais vers français
 * @param englishPath - Chemin en anglais (ex: /sea-agency/semantic-analysis)
 * @returns Chemin en français (ex: /agence-sea/analyse-semantique)
 */
export function translatePathToFrench(englishPath: string): string {
  if (englishPath === '/' || englishPath === '') {
    return '/';
  }

  const segments = englishPath.split('/').filter(Boolean);
  const translatedSegments = segments.map(
    (segment) => reverseSegmentTranslations[segment] || segment
  );

  return '/' + translatedSegments.join('/');
}

/**
 * Génère l'URL localisée complète pour un chemin français donné
 * @param frenchPath - Chemin interne en français (ex: /agence-sea/audit)
 * @param locale - Locale cible
 * @returns URL localisée (ex: /en/sea-agency/audit pour EN, /agence-sea/audit pour FR)
 */
export function getLocalizedPath(frenchPath: string, locale: Locale): string {
  if (locale === defaultLocale) {
    // Français : pas de préfixe, chemin tel quel
    return frenchPath;
  }

  // Anglais : préfixe /en + segments traduits
  const translatedPath = translatePathToEnglish(frenchPath);
  return `/en${translatedPath === '/' ? '' : translatedPath}`;
}

/**
 * Extrait le chemin français depuis une URL (avec ou sans locale)
 * @param pathname - URL actuelle (ex: /en/sea-agency/audit ou /fr/agence-sea/audit ou /agence-sea/audit)
 * @returns Chemin français interne (ex: /agence-sea/audit)
 */
export function getFrenchPathFromUrl(pathname: string): string {
  // Si commence par /en, extraire et traduire
  if (pathname.startsWith('/en/')) {
    const englishPath = pathname.slice(3); // Enlever '/en'
    return translatePathToFrench(englishPath);
  }
  if (pathname === '/en') {
    return '/';
  }

  // Si commence par /fr (préfixe ajouté par middleware), l'enlever
  if (pathname.startsWith('/fr/')) {
    return pathname.slice(3); // Enlever '/fr'
  }
  if (pathname === '/fr') {
    return '/';
  }

  // Sinon c'est déjà un chemin français sans préfixe
  return pathname;
}

/**
 * Routes complètes avec leurs traductions (pour référence)
 */
export const LOCALIZED_ROUTES = {
  HOME: { fr: '/', en: '/en' },
  CONTACT: { fr: '/contact', en: '/en/contact' },

  GEO_SEO: {
    INDEX: { fr: '/agence-geo-seo', en: '/en/geo-seo-agency' },
    AUDIT: { fr: '/agence-geo-seo/audit', en: '/en/geo-seo-agency/audit' },
    TECHNIQUE_SEMANTIQUE: { fr: '/agence-geo-seo/technique-semantique', en: '/en/geo-seo-agency/technical-semantic' },
    NETLINKING: { fr: '/agence-geo-seo/netlinking', en: '/en/geo-seo-agency/link-building' },
    CREATION_CONTENU: { fr: '/agence-geo-seo/creation-contenu', en: '/en/geo-seo-agency/content-creation' },
    LOCAL: { fr: '/agence-geo-seo/local', en: '/en/geo-seo-agency/local' },
    INTERNATIONAL: { fr: '/agence-geo-seo/international', en: '/en/geo-seo-agency/international' },
  },

  SEA: {
    INDEX: { fr: '/agence-sea', en: '/en/sea-agency' },
    SETUP: { fr: '/agence-sea/setup', en: '/en/sea-agency/setup' },
    ACCOMPAGNEMENT: { fr: '/agence-sea/accompagnement', en: '/en/sea-agency/management' },
    ANALYSE_SEMANTIQUE: { fr: '/agence-sea/analyse-semantique', en: '/en/sea-agency/semantic-analysis' },
    LOCAL: { fr: '/agence-sea/local', en: '/en/sea-agency/local' },
    INTERNATIONAL: { fr: '/agence-sea/international', en: '/en/sea-agency/international' },
  },

  DATA: {
    INDEX: { fr: '/agence-data', en: '/en/data-agency' },
    TRACKING: { fr: '/agence-data/tracking', en: '/en/data-agency/tracking' },
    ANALYTICS: { fr: '/agence-data/analytics', en: '/en/data-agency/analytics' },
    CRO: { fr: '/agence-data/cro', en: '/en/data-agency/cro' },
  },

  AGENCE: {
    QUI_SOMMES_NOUS: { fr: '/agence/qui-sommes-nous', en: '/en/agency/about-us' },
    NOS_BUREAUX: { fr: '/agence/nos-bureaux', en: '/en/agency/our-offices' },
  },

  FORMATIONS: { fr: '/formations', en: '/en/training' },
} as const;
