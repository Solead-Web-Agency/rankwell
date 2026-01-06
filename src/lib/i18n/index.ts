/**
 * I18N - Export centralisé
 * Toutes les fonctionnalités i18n accessibles depuis @/lib/i18n
 */

// Configuration
export {
  locales,
  defaultLocale,
  localeNames,
  ogLocales,
  baseUrl,
  isValidLocale,
  getLocaleFromPath,
  hasEnglishTranslation,
  frenchOnlyPatterns,
  frenchOnlyPages,
  noIndexPages,
  type Locale,
} from './config';

// Routes et traductions de chemins
export {
  segmentTranslations,
  reverseSegmentTranslations,
  translatePathToEnglish,
  translatePathToFrench,
  getLocalizedPath,
  getFrenchPathFromUrl,
  LOCALIZED_ROUTES,
} from './routes';

// Helpers et context
export {
  LocaleContext,
  useLocale,
  getLocalizedHref,
  getFullLocalizedUrl,
  getAlternateLanguageUrl,
  currentPageHasTranslation,
  generateAlternates,
  generateOpenGraphAlternates,
} from './helpers';

// Dictionnaires
export {
  getDictionary,
  t,
  type Dictionary,
} from './dictionaries';
