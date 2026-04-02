/**
 * ============================================
 * GUIDES - Registre des entrees
 * ============================================
 *
 * Source de verite pour tous les guides/articles.
 * Chaque article existe dans UNE SEULE langue (FR ou EN).
 * Pas de traduction croisee — chaque article est pense pour son marche.
 *
 * Ce registre est mis a jour a chaque nouvel article produit par _REDACTION.
 */

// ============================================
// TYPES
// ============================================

export type GuideCategory =
  | 'seo'
  | 'geo'
  | 'sea'
  | 'data'
  | 'strategie';

export interface GuideEntry {
  /** Slug = nom du fichier .{locale}.ts sans extension */
  slug: string;
  /** Titre de l'article */
  title: string;
  /** Langue unique de l'article */
  locale: 'fr' | 'en';
  /** Categorie pour regroupement sur la page index */
  category: GuideCategory;
}

// ============================================
// CATEGORIES
// ============================================

export const GUIDE_CATEGORIES: Record<GuideCategory, { fr: string; en: string }> = {
  seo: {
    fr: 'SEO',
    en: 'SEO',
  },
  geo: {
    fr: 'GEO & Visibilite IA',
    en: 'GEO & AI Visibility',
  },
  sea: {
    fr: 'SEA & Publicite',
    en: 'SEA & Advertising',
  },
  data: {
    fr: 'Data & Analytics',
    en: 'Data & Analytics',
  },
  strategie: {
    fr: 'Strategie digitale',
    en: 'Digital Strategy',
  },
};

// ============================================
// REGISTRE DES ENTREES
// ============================================
// Ajouter chaque nouvel article ici apres production par _REDACTION.
// Un article = une langue. Pas de doublon FR/EN.

export const GUIDE_ENTRIES: GuideEntry[] = [
  // -- Article test FR (a supprimer apres validation) --
  {
    slug: 'test-guide',
    title: 'Cocon semantique : le guide complet',
    locale: 'fr',
    category: 'seo',
  },
];

// ============================================
// HELPERS
// ============================================

/** Recupere une entree par slug + locale */
export function getGuideBySlug(slug: string, locale: string): GuideEntry | undefined {
  return GUIDE_ENTRIES.find((e) => e.slug === slug && e.locale === locale);
}

/** Recupere toutes les entrees d'une locale */
export function getGuidesByLocale(locale: string): GuideEntry[] {
  return GUIDE_ENTRIES.filter((e) => e.locale === locale);
}

/** Recupere toutes les entrees d'une categorie pour une locale */
export function getGuidesByCategory(category: GuideCategory, locale: string): GuideEntry[] {
  return GUIDE_ENTRIES.filter((e) => e.category === category && e.locale === locale);
}

/** Tous les params pour generateStaticParams — chaque article dans sa locale uniquement */
export function getAllGuideParams(): { locale: string; slug: string }[] {
  return GUIDE_ENTRIES.map((e) => ({ locale: e.locale, slug: e.slug }));
}
