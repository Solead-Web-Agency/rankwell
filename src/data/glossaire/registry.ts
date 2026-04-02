/**
 * ============================================
 * GLOSSAIRE - Registre des entrées
 * ============================================
 *
 * Source de vérité pour toutes les entrées du glossaire.
 * Chaque entrée mappe un slug FR vers un slug EN et une catégorie.
 *
 * Ce registre est utilisé par :
 * - generateStaticParams() pour générer les pages statiques
 * - La page index /glossaire pour lister les entrées
 * - Le système i18n pour les alternates hreflang
 */

// ============================================
// TYPES
// ============================================

export type GlossaireCategory =
  | 'geo-visibilite-ia'
  | 'seo-fondamental'
  | 'seo-technique'
  | 'strategie-semantique'
  | 'specialisations'
  | 'marketing-autres';

export interface GlossaireEntry {
  /** Slug FR (= nom du fichier .md sans extension) */
  slug: string;
  /** Slug EN pour la route /en/glossary/{slugEn} */
  slugEn: string;
  /** Titre FR du concept (pour l'index et le SEO) */
  title: string;
  /** Titre EN du concept */
  titleEn: string;
  /** Catégorie pour regroupement sur la page index */
  category: GlossaireCategory;
}

// ============================================
// CATÉGORIES
// ============================================

export const GLOSSAIRE_CATEGORIES: Record<GlossaireCategory, { fr: string; en: string }> = {
  'geo-visibilite-ia': {
    fr: 'GEO & Visibilité IA',
    en: 'GEO & AI Visibility',
  },
  'seo-fondamental': {
    fr: 'SEO Fondamental',
    en: 'SEO Fundamentals',
  },
  'seo-technique': {
    fr: 'SEO Technique',
    en: 'Technical SEO',
  },
  'strategie-semantique': {
    fr: 'Stratégie sémantique & Contenu',
    en: 'Semantic Strategy & Content',
  },
  'specialisations': {
    fr: 'Spécialisations',
    en: 'Specializations',
  },
  'marketing-autres': {
    fr: 'Marketing & Autres',
    en: 'Marketing & Others',
  },
};

// ============================================
// REGISTRE DES ENTRÉES (47 concepts)
// ============================================

export const GLOSSAIRE_ENTRIES: GlossaireEntry[] = [
  // ── GEO & Visibilité IA ──────────────────────────
  {
    slug: 'geo',
    slugEn: 'geo',
    title: 'Generative Engine Optimization (GEO)',
    titleEn: 'Generative Engine Optimization (GEO)',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'aeo',
    slugEn: 'aeo',
    title: 'Answer Engine Optimization (AEO)',
    titleEn: 'Answer Engine Optimization (AEO)',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'citabilite',
    slugEn: 'citability',
    title: 'Citabilité',
    titleEn: 'Citability',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'geo-score',
    slugEn: 'geo-score',
    title: 'GEO Score Rankwell',
    titleEn: 'Rankwell GEO Score',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'ai-overviews',
    slugEn: 'ai-overviews',
    title: 'AI Overviews',
    titleEn: 'AI Overviews',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'robots-ia',
    slugEn: 'ai-crawlers',
    title: 'Robots IA',
    titleEn: 'AI Crawlers',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'optimisation-contenu-llm',
    slugEn: 'llm-content-optimization',
    title: 'Optimisation de contenu pour LLM',
    titleEn: 'LLM Content Optimization',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'methode-rankwell-geo',
    slugEn: 'rankwell-geo-method',
    title: 'Méthode Rankwell GEO',
    titleEn: 'Rankwell GEO Method',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'visibilite-multi-moteurs',
    slugEn: 'multi-engine-visibility',
    title: 'Visibilité multi-moteurs',
    titleEn: 'Multi-Engine Visibility',
    category: 'geo-visibilite-ia',
  },
  {
    slug: 'audit-geo',
    slugEn: 'geo-audit',
    title: 'Audit GEO',
    titleEn: 'GEO Audit',
    category: 'geo-visibilite-ia',
  },

  // ── SEO Fondamental ──────────────────────────────
  {
    slug: 'seo',
    slugEn: 'seo',
    title: 'SEO (Search Engine Optimization)',
    titleEn: 'SEO (Search Engine Optimization)',
    category: 'seo-fondamental',
  },
  {
    slug: 'audit-seo',
    slugEn: 'seo-audit',
    title: 'Audit SEO',
    titleEn: 'SEO Audit',
    category: 'seo-fondamental',
  },
  {
    slug: 'e-e-a-t',
    slugEn: 'e-e-a-t',
    title: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)',
    titleEn: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)',
    category: 'seo-fondamental',
  },
  {
    slug: 'sxo',
    slugEn: 'sxo',
    title: 'SXO (Search Experience Optimization)',
    titleEn: 'SXO (Search Experience Optimization)',
    category: 'seo-fondamental',
  },
  {
    slug: 'migration-seo',
    slugEn: 'seo-migration',
    title: 'Migration SEO',
    titleEn: 'SEO Migration',
    category: 'seo-fondamental',
  },
  {
    slug: 'cannibalisation-seo',
    slugEn: 'seo-cannibalization',
    title: 'Cannibalisation SEO',
    titleEn: 'SEO Cannibalization',
    category: 'seo-fondamental',
  },
  {
    slug: 'algorithmes-de-classement',
    slugEn: 'ranking-algorithms',
    title: 'Algorithmes de classement',
    titleEn: 'Ranking Algorithms',
    category: 'seo-fondamental',
  },

  // ── SEO Technique ────────────────────────────────
  {
    slug: 'seo-technique',
    slugEn: 'technical-seo',
    title: 'SEO technique',
    titleEn: 'Technical SEO',
    category: 'seo-technique',
  },
  {
    slug: 'core-web-vitals',
    slugEn: 'core-web-vitals',
    title: 'Core Web Vitals',
    titleEn: 'Core Web Vitals',
    category: 'seo-technique',
  },
  {
    slug: 'crawl-budget',
    slugEn: 'crawl-budget',
    title: 'Crawl budget',
    titleEn: 'Crawl Budget',
    category: 'seo-technique',
  },
  {
    slug: 'indexation',
    slugEn: 'indexing',
    title: 'Indexation',
    titleEn: 'Indexing',
    category: 'seo-technique',
  },
  {
    slug: 'donnees-structurees',
    slugEn: 'structured-data',
    title: 'Données structurées',
    titleEn: 'Structured Data',
    category: 'seo-technique',
  },
  {
    slug: 'x-robots-tag',
    slugEn: 'x-robots-tag',
    title: 'X-Robots-Tag',
    titleEn: 'X-Robots-Tag',
    category: 'seo-technique',
  },
  {
    slug: 'sitelinks',
    slugEn: 'sitelinks',
    title: 'Sitelinks',
    titleEn: 'Sitelinks',
    category: 'seo-technique',
  },
  {
    slug: 'meta-tags-joomla',
    slugEn: 'joomla-meta-tags',
    title: 'Meta tags Joomla',
    titleEn: 'Joomla Meta Tags',
    category: 'seo-technique',
  },

  // ── Stratégie sémantique & Contenu ───────────────
  {
    slug: 'cocon-semantique',
    slugEn: 'topic-cluster',
    title: 'Cocon sémantique',
    titleEn: 'Topic Cluster',
    category: 'strategie-semantique',
  },
  {
    slug: 'coherence-semantique',
    slugEn: 'semantic-coherence',
    title: 'Cohérence sémantique',
    titleEn: 'Semantic Coherence',
    category: 'strategie-semantique',
  },
  {
    slug: 'seo-semantique',
    slugEn: 'semantic-seo',
    title: 'SEO sémantique',
    titleEn: 'Semantic SEO',
    category: 'strategie-semantique',
  },
  {
    slug: 'topical-authority',
    slugEn: 'topical-authority',
    title: 'Topical authority',
    titleEn: 'Topical Authority',
    category: 'strategie-semantique',
  },
  {
    slug: 'intention-de-recherche',
    slugEn: 'search-intent',
    title: 'Intention de recherche',
    titleEn: 'Search Intent',
    category: 'strategie-semantique',
  },
  {
    slug: 'strategie-netlinking',
    slugEn: 'link-building-strategy',
    title: 'Stratégie de netlinking',
    titleEn: 'Link Building Strategy',
    category: 'strategie-semantique',
  },
  {
    slug: 'tf-idf-term-frequency-inverse-document-frequency',
    slugEn: 'tf-idf-term-frequency-inverse-document-frequency',
    title: 'TF-IDF (Term Frequency-Inverse Document Frequency)',
    titleEn: 'TF-IDF (Term Frequency-Inverse Document Frequency)',
    category: 'strategie-semantique',
  },
  {
    slug: 'content-marketing-seo',
    slugEn: 'seo-content-marketing',
    title: 'Content marketing SEO',
    titleEn: 'SEO Content Marketing',
    category: 'strategie-semantique',
  },
  {
    slug: 'knowledge-graph',
    slugEn: 'knowledge-graph',
    title: 'Knowledge Graph',
    titleEn: 'Knowledge Graph',
    category: 'strategie-semantique',
  },
  {
    slug: 'knowledge-panel',
    slugEn: 'knowledge-panel',
    title: 'Knowledge Panel',
    titleEn: 'Knowledge Panel',
    category: 'strategie-semantique',
  },

  // ── Spécialisations ──────────────────────────────
  {
    slug: 'seo-ecommerce',
    slugEn: 'ecommerce-seo',
    title: 'SEO e-commerce',
    titleEn: 'E-commerce SEO',
    category: 'specialisations',
  },
  {
    slug: 'seo-local',
    slugEn: 'local-seo',
    title: 'SEO local',
    titleEn: 'Local SEO',
    category: 'specialisations',
  },
  {
    slug: 'seo-international',
    slugEn: 'international-seo',
    title: 'SEO international',
    titleEn: 'International SEO',
    category: 'specialisations',
  },
  {
    slug: 'seo-programmatique',
    slugEn: 'programmatic-seo',
    title: 'SEO programmatique',
    titleEn: 'Programmatic SEO',
    category: 'specialisations',
  },
  {
    slug: 'formation-geo',
    slugEn: 'geo-training',
    title: 'Formation GEO',
    titleEn: 'GEO Training',
    category: 'specialisations',
  },
  {
    slug: 'optimisation-de-la-fiche-google-my-business-gmb',
    slugEn: 'google-my-business-optimization-gmb',
    title: 'Optimisation de la fiche Google My Business (GMB)',
    titleEn: 'Google My Business (GMB) Optimization',
    category: 'specialisations',
  },

  // ── Marketing & Autres ───────────────────────────
  {
    slug: 'sea',
    slugEn: 'sea',
    title: 'SEA (Search Engine Advertising)',
    titleEn: 'SEA (Search Engine Advertising)',
    category: 'marketing-autres',
  },
  {
    slug: 'google-ads',
    slugEn: 'google-ads',
    title: 'Google Ads',
    titleEn: 'Google Ads',
    category: 'marketing-autres',
  },
  {
    slug: 'rp-digitales',
    slugEn: 'digital-pr',
    title: 'RP digitales',
    titleEn: 'Digital PR',
    category: 'marketing-autres',
  },
  {
    slug: 'key-opinion-consumer-koc',
    slugEn: 'key-opinion-consumer-koc',
    title: 'Key Opinion Consumer (KOC)',
    titleEn: 'Key Opinion Consumer (KOC)',
    category: 'marketing-autres',
  },
  {
    slug: 'spam-de-commentaires',
    slugEn: 'comment-spam',
    title: 'Spam de commentaires',
    titleEn: 'Comment Spam',
    category: 'marketing-autres',
  },
  {
    slug: 'eav-entity-attribute-value',
    slugEn: 'eav-entity-attribute-value',
    title: 'EAV (Entity-Attribute-Value)',
    titleEn: 'EAV (Entity-Attribute-Value)',
    category: 'marketing-autres',
  },
];

// ============================================
// HELPERS
// ============================================

/** Récupère une entrée par slug FR */
export function getEntryBySlug(slug: string): GlossaireEntry | undefined {
  return GLOSSAIRE_ENTRIES.find((e) => e.slug === slug);
}

/** Récupère une entrée par slug EN */
export function getEntryBySlugEn(slugEn: string): GlossaireEntry | undefined {
  return GLOSSAIRE_ENTRIES.find((e) => e.slugEn === slugEn);
}

/** Récupère toutes les entrées d'une catégorie */
export function getEntriesByCategory(category: GlossaireCategory): GlossaireEntry[] {
  return GLOSSAIRE_ENTRIES.filter((e) => e.category === category);
}

/** Tous les slugs FR (pour generateStaticParams) */
export function getAllSlugs(): string[] {
  return GLOSSAIRE_ENTRIES.map((e) => e.slug);
}

/** Tous les slugs EN (pour generateStaticParams) */
export function getAllSlugEn(): string[] {
  return GLOSSAIRE_ENTRIES.map((e) => e.slugEn);
}

/** Mapping slug FR → slug EN */
export function getSlugEn(slugFr: string): string | undefined {
  return GLOSSAIRE_ENTRIES.find((e) => e.slug === slugFr)?.slugEn;
}

/** Mapping slug EN → slug FR */
export function getSlugFr(slugEn: string): string | undefined {
  return GLOSSAIRE_ENTRIES.find((e) => e.slugEn === slugEn)?.slug;
}
