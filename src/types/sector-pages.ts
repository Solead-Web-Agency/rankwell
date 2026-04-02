/**
 * TYPES — Pages programmatiques Secteur / Projet / CMS
 *
 * 3 templates, 94 pages (54 secteur + 8 projet + 27 CMS)
 * Routes : /agence-geo-seo/secteur/{slug}, /projet/{slug}, /cms/{slug}
 */

import type { ReactNode } from 'react';

// ============================================
// TYPES COMMUNS
// ============================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CitablePassage {
  /** Texte complet du passage (commence par "Selon Rankwell, ...") */
  text: string;
  /** Bloc dans lequel placer ce passage (ex: 'intro', 'geo', 'faq') */
  bloc: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface RelatedPages {
  secteurs?: InternalLink[];
  projets?: InternalLink[];
  cms?: InternalLink[];
  glossaire?: InternalLink[];
}

/** Métadonnées SEO de la page */
export interface PageSEO {
  title: string;
  description: string;
  /** Slug pour l'URL (ex: 'avocat', 'wordpress', 'ecommerce') */
  slug: string;
}

/** Données hero communes */
export interface HeroData {
  breadcrumb: BreadcrumbItem[];
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

/** Étape de méthodologie (format HTML — utilisé par CMS et Projet) */
export interface MethodologyStep {
  title: string;
  /** Description en HTML ou texte brut */
  description: string;
}

/** Étape de méthodologie structurée (format subtitle + items — utilisé par Secteur avec StepsDimensions) */
export interface SecteurMethodStep {
  title: string;
  /** Sous-titre concis (texte brut) */
  subtitle: string;
  /** Points clés en bullet points */
  items: string[];
}

/** Section GEO/Visibilité IA commune aux 3 templates */
export interface GeoVisibilityData {
  title: string;
  intro: string;
  /** Comment les LLM répondent à ce type de requête */
  llmBehavior: string;
  /** Données structurées recommandées */
  structuredData: string;
  /** Score GEO et audit de citabilité */
  geoScore: string;
  /** Passage citable (optionnel — remplacé par Quote sur les pages /secteur) */
  citablePassage?: string;
  /** Liens glossaire */
  glossaryLinks?: InternalLink[];
}

/** Citation du référentiel pour le composant Quote */
export interface ReferentielQuote {
  /** Phrase nucléaire complète (commence par "Selon Rankwell, ...") */
  text: string;
  /** Slug de la page du glossaire source */
  glossarySlug: string;
  /** Label du lien vers la page du glossaire */
  glossaryLabel: string;
}

/** Données CTA + maillage en bas de page */
export interface CTAData {
  title: string | ReactNode;
  description: string;
  buttonText: string;
  buttonHref?: string;
  relatedPages: RelatedPages;
}

// ============================================
// TEMPLATE 1 — SECTEUR (54 pages)
// ============================================

export interface KeywordEntry {
  keyword: string;
  volume: number;
  intent: 'transactionnelle' | 'informationnelle' | 'navigationnelle' | 'commerciale' | 'locale' | 'mixte';
  difficulty: 'faible' | 'moyenne' | 'élevée' | 'très élevée';
}

/** Données livrables BLOC 5 — Ce que Rankwell vous apporte (FeaturesGrid 3×3) */
export interface FeaturesData {
  title: string;
  subtitle?: string;
  items: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface SecteurPageData {
  seo: PageSEO;
  hero: HeroData;

  /** BLOC 2 — Pourquoi le SEO est différent (IntroService) */
  whyDifferent: {
    title: string;
    /** Comportement de recherche des clients du secteur */
    searchBehavior: string;
    /** Contraintes sectorielles (YMYL, déontologie, etc.) */
    constraints: string;
    /** Plateformes concurrentes */
    competingPlatforms: string;
  };

  /** Quote — phrase nucléaire du référentiel */
  quote: ReferentielQuote;

  /** BLOC 3 — Tableau de mots-clés stratégiques */
  keywords: {
    title: string;
    entries: KeywordEntry[];
    interpretation: string;
    /** EN: keyword entries segmented by market (replaces entries for EN pages) */
    entriesByMarket?: {
      us: KeywordEntry[];
      uk: KeywordEntry[];
      uae: KeywordEntry[];
    };
  };

  /** BLOC 4 — Méthodologie Rankwell (7 étapes avec StepsDimensions) */
  methodology: {
    title: string;
    subtitle: string;
    steps: SecteurMethodStep[];
  };

  /** BLOC 5 — Ce que Rankwell vous apporte (FeaturesGrid 3×3) */
  features: FeaturesData;

  /** BLOC 6 — Visibilité IA */
  geoVisibility: GeoVisibilityData;

  /** BLOC 7 — Résultats (conditionnel) */
  results?: {
    title: string;
    content: string;
  };

  /** BLOC 8 — FAQ */
  faq: {
    title: string;
    items: FAQItem[];
  };

  /** BLOC 9 — CTA + Maillage */
  cta: CTAData;

  /** Bandeau maillage — secteurs proches */
  relatedSectors?: {
    title: string;
    items: InternalLink[];
  };

  /** Schema.org type principal (ex: 'Attorney', 'Restaurant', 'Dentist') */
  schemaType?: string;
}

// ============================================
// TEMPLATE 2 — PROJET (8 pages)
// ============================================

export interface CMSComparisonEntry {
  name: string;
  seoFlexibility: string;
  performance: string;
  cost: string;
  aiReadiness: string;
}

export interface ProjetPageData {
  seo: PageSEO;
  hero: HeroData;

  /** BLOC 2 — Pourquoi le SEO de ce type de projet est différent (IntroService) */
  whyDifferent: {
    title: string;
    /** Spécificités techniques du type de projet */
    technicalContext: string;
    /** Données marché et chiffres clés */
    marketData: string;
    /** Dimension GEO et IA */
    geoAngle: string;
  };

  /** Quote — phrase nucléaire du référentiel */
  quote: ReferentielQuote;

  /** BLOC 3 — Méthodologie Rankwell (StepsDimensions) */
  methodology: {
    title: string;
    subtitle: string;
    steps: SecteurMethodStep[];
  };

  /** BLOC 4 — Ce que Rankwell vous apporte (FeaturesGrid 3x3) */
  features: FeaturesData;

  /** BLOC 5 — Visibilité IA (GeoVisibilitySection) */
  geoVisibility: GeoVisibilityData;

  /** BLOC 6 — FAQ (FAQService) */
  faq: {
    title: string;
    items: FAQItem[];
  };

  /** BLOC 7 — CTA + Maillage */
  cta: CTAData;

  /** Bandeau maillage — projets et secteurs proches */
  relatedSectors?: {
    title: string;
    items: InternalLink[];
  };
}

// ============================================
// TEMPLATE 3 — CMS (26 pages)
// ============================================

/** @deprecated Ancien type CMS, conserve pour les composants legacy */
export interface CMSPlugin {
  name: string;
  role: string;
  config: string;
}

/** @deprecated Ancien type CMS, conserve pour les composants legacy */
export interface CMSTechnicalProblem {
  problem: string;
  solution: string;
}

/** @deprecated Ancien type CMS, conserve pour les composants legacy */
export interface CMSStat {
  label: string;
  value: string;
}

export interface CmsPageData {
  seo: PageSEO;
  hero: HeroData;

  /** BLOC 2 — Pourquoi le SEO est different sur ce CMS (IntroService compact) */
  whyDifferent: {
    title: string;
    /** Forces SEO du CMS (HTML) */
    seoStrengths: string;
    /** Limites techniques SEO (HTML) */
    seoLimitations: string;
    /** Dimension GEO/IA (texte brut ou HTML leger) */
    geoAngle: string;
  };

  /** Quote — phrase nucleaire du referentiel */
  quote: ReferentielQuote;

  /** BLOC 3 — Problemes techniques courants et solutions (TableauService) */
  technicalTable: {
    title: string;
    interpretation: string;
    columns: string[];
    rows: string[][];
  };

  /** BLOC 4 — Methodologie specifique CMS (StepsDimensions) */
  methodology: {
    title: string;
    subtitle: string;
    steps: SecteurMethodStep[];
  };

  /** BLOC 5 — 6 livrables concrets (FeaturesGrid) */
  features: FeaturesData;

  /** BLOC 6 — Visibilite IA (GeoVisibilitySection) */
  geoVisibility: GeoVisibilityData;

  /** BLOC 7 — FAQ (FAQService) */
  faq: {
    title: string;
    items: FAQItem[];
  };

  /** BLOC 8 — CTA + Maillage */
  cta: CTAData;

  /** Bandeau maillage — CMS et plateformes proches */
  relatedSectors?: {
    title: string;
    items: InternalLink[];
  };
}

// ============================================
// UNION TYPE (pour les helpers)
// ============================================

export type SectorPageData = SecteurPageData | ProjetPageData | CmsPageData;
export type SectorPageType = 'secteur' | 'projet' | 'cms';
