/**
 * I18N CONFIGURATION
 * Configuration centralisée pour l'internationalisation
 */

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Francais',
  en: 'English',
};

// Mapping OpenGraph locale
export const ogLocales: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
};

// Base URL du site
export const baseUrl = 'https://www.rankwell.agency';

// ============================================
// CONFIGURATION DES TRADUCTIONS
// ============================================

/**
 * Patterns de chemins qui N'ONT PAS de traduction anglaise
 * Utilise des patterns glob-like :
 * - '*' match un segment
 * - '**' match plusieurs segments
 */
export const frenchOnlyPatterns: string[] = [
  '/agence-geo-seo/france',       // Page passerelle France
  '/agence-geo-seo/france/*',     // Pages villes/régions GEO-SEO
  '/agence-geo-seo/france/**',    // Sous-pages
  '/agence-geo-seo/emirats',      // Page passerelle Émirats
  '/agence-geo-seo/emirats/*',    // Pages villes Émirats (Dubai, etc.)
  '/agence-geo-seo/emirats/**',   // Sous-pages
  '/agence-sea/france',           // Page passerelle France SEA
  '/agence-sea/france/*',         // Pages villes/régions SEA
  '/agence-sea/france/**',
  // Ajouter d'autres patterns ici si nécessaire
];

/**
 * Pages spécifiques sans traduction (si pas couvert par les patterns)
 */
export const frenchOnlyPages: string[] = [
  '/maillage',    // Page secrète - pas de version EN
  '/composants',  // Page secrète - pas de version EN
];

/**
 * Pages qui ONT une traduction anglaise malgré les patterns frenchOnly
 * Ces exceptions sont vérifiées EN PREMIER avant les patterns
 */
export const englishAvailableExceptions: string[] = [
  '/agence-geo-seo/france/paris',   // Bureau physique Paris
  '/agence-geo-seo/emirats/dubai',  // Bureau physique Dubai
];

/**
 * Pages à exclure du sitemap (noindex)
 */
export const noIndexPages: string[] = [
  '/mentions-legales',
  '/politique-confidentialite',
  '/maillage',     // Page secrète analyse maillage interne
  '/composants',   // Page secrète liste des composants
];

/**
 * Vérifie si un chemin français a une traduction anglaise
 * @param frenchPath - Chemin en français (ex: /agence-geo-seo/france/lyon)
 * @returns true si la page a une traduction EN
 */
export function hasEnglishTranslation(frenchPath: string): boolean {
  // 1. Vérifier les EXCEPTIONS qui ont une traduction (prioritaire)
  if (englishAvailableExceptions.includes(frenchPath)) {
    return true;
  }

  // 2. Vérifier les pages spécifiques sans traduction
  if (frenchOnlyPages.includes(frenchPath)) {
    return false;
  }

  // 3. Vérifier les patterns
  for (const pattern of frenchOnlyPatterns) {
    if (matchPattern(frenchPath, pattern)) {
      return false;
    }
  }

  return true;
}

/**
 * Match un chemin contre un pattern glob-like
 */
function matchPattern(path: string, pattern: string): boolean {
  // Convertir le pattern en regex
  const regexPattern = pattern
    .replace(/\*\*/g, '<<<DOUBLESTAR>>>')
    .replace(/\*/g, '[^/]+')
    .replace(/<<<DOUBLESTAR>>>/g, '.*');

  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(path);
}

/**
 * Vérifie si une string est une locale valide
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Extrait la locale depuis un pathname
 */
export function getLocaleFromPath(pathname: string): Locale {
  // Vérifier si le path commence par /en
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return defaultLocale;
}
