/**
 * I18N HELPERS
 * Fonctions utilitaires pour l'internationalisation
 */

'use client';

import { createContext, useContext } from 'react';
import { type Locale, defaultLocale, baseUrl, hasEnglishTranslation } from './config';
import { getLocalizedPath, getFrenchPathFromUrl } from './routes';

// ============================================
// CONTEXT
// ============================================

interface LocaleContextType {
  locale: Locale;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
});

/**
 * Hook pour accéder à la locale courante
 */
export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  return context.locale;
}

// ============================================
// URL HELPERS
// ============================================

/**
 * Génère un href localisé à partir d'un chemin français
 * À utiliser dans les composants client
 *
 * @param frenchPath - Chemin interne en français (ex: /agence-sea/audit)
 * @param locale - Locale cible (optionnel, utilise le context si non fourni)
 * @returns URL localisée
 *
 * @example
 * // Dans un composant client
 * const locale = useLocale();
 * const href = getLocalizedHref('/agence-sea/audit', locale);
 * // FR: /agence-sea/audit
 * // EN: /en/sea-agency/audit
 */
export function getLocalizedHref(frenchPath: string, locale: Locale): string {
  return getLocalizedPath(frenchPath, locale);
}

/**
 * Génère l'URL complète avec le domaine
 */
export function getFullLocalizedUrl(frenchPath: string, locale: Locale): string {
  const path = getLocalizedPath(frenchPath, locale);
  return `${baseUrl}${path}`;
}

/**
 * Génère l'URL de l'autre langue (pour le language switcher)
 *
 * @param currentPathname - Pathname actuel (peut être FR ou EN)
 * @param currentLocale - Locale actuelle
 * @returns URL dans l'autre langue, ou null si pas de traduction
 */
export function getAlternateLanguageUrl(
  currentPathname: string,
  currentLocale: Locale
): string | null {
  // Récupérer le chemin français interne
  const frenchPath = getFrenchPathFromUrl(currentPathname);

  // Vérifier si la page a une traduction
  if (!hasEnglishTranslation(frenchPath)) {
    return null;
  }

  // Générer l'URL dans l'autre langue
  const targetLocale: Locale = currentLocale === 'fr' ? 'en' : 'fr';
  return getLocalizedPath(frenchPath, targetLocale);
}

/**
 * Vérifie si la page courante a une traduction
 * @param currentPathname - Pathname actuel
 * @returns true si la page a une traduction EN
 */
export function currentPageHasTranslation(currentPathname: string): boolean {
  const frenchPath = getFrenchPathFromUrl(currentPathname);
  return hasEnglishTranslation(frenchPath);
}

// ============================================
// METADATA HELPERS
// ============================================

/**
 * Génère les alternates pour les métadonnées (hreflang)
 * À utiliser dans generateMetadata
 * Gère automatiquement les pages sans traduction
 */
export function generateAlternates(frenchPath: string, locale: Locale) {
  const frUrl = frenchPath === '/' ? baseUrl : `${baseUrl}${frenchPath}`;
  const hasTranslation = hasEnglishTranslation(frenchPath);

  if (hasTranslation) {
    const enPath = getLocalizedPath(frenchPath, 'en');
    const enUrl = `${baseUrl}${enPath}`;

    return {
      canonical: locale === 'fr' ? frUrl : enUrl,
      languages: {
        'fr': frUrl,
        'en': enUrl,
        'x-default': enUrl,
      },
    };
  }

  // Page FR uniquement : pas d'alternates
  return {
    canonical: frUrl,
  };
}

/**
 * Génère les métadonnées OpenGraph avec les alternates
 */
export function generateOpenGraphAlternates(locale: Locale) {
  return {
    locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
  };
}
