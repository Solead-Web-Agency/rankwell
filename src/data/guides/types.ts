/**
 * ============================================
 * GUIDES - Types de donnees
 * ============================================
 *
 * Definit la structure de donnees pour chaque article/guide.
 * Chaque fichier data (ex: cocon-semantique.fr.ts) exporte un objet de ce type.
 *
 * Pattern identique au glossaire : types -> registry -> entries -> page.tsx
 * Layout : split-view (image sticky + contenu defilant)
 */

// ============================================
// BLOCS DE CONTENU
// ============================================

/** Paragraphe simple */
export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

/** Sous-titre H3 */
export interface Heading3Block {
  type: 'heading3';
  text: string;
}

/** Liste a puces ou numerotee */
export interface ListBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

/** Tableau avec en-tetes */
export interface TableBlock {
  type: 'table';
  caption?: string;
  headers: string[];
  rows: string[][];
}

/** Encadre (a retenir, saviez-vous, attention, checklist) */
export interface CalloutBlock {
  type: 'callout';
  variant: 'remember' | 'didyouknow' | 'warning' | 'checklist';
  title: string;
  content: string;
}

/** Widget interactif (chart, quiz, calculateur, etc.) */
export interface WidgetBlock {
  type: 'widget';
  widgetType: string;
  config: Record<string, unknown>;
}

/** Union de tous les blocs possibles dans une section */
export type GuideSectionBlock =
  | ParagraphBlock
  | Heading3Block
  | ListBlock
  | TableBlock
  | CalloutBlock
  | WidgetBlock;

// ============================================
// SECTION H2
// ============================================

export interface GuideSection {
  /** ID pour ancre et TOC (ex: 'pourquoi-le-geo') */
  id: string;
  /** Titre H2 */
  title: string;
  /** Blocs de contenu ordonnes */
  blocks: GuideSectionBlock[];
}

// ============================================
// SOURCE
// ============================================

export interface GuideSource {
  /** Organisme (ex: 'Google', 'Moz', 'Statista') */
  organisme: string;
  /** Titre de la source */
  titre: string;
  /** Annee de publication */
  annee: string;
  /** Langue (FR, EN) */
  langue: string;
  /** URL de la source */
  url: string;
}

// ============================================
// LIEN INTERNE
// ============================================

export interface GuideLink {
  /** Texte d'ancrage */
  anchor: string;
  /** URL cible (relative, ex: '/glossaire/geo') */
  href: string;
}

// ============================================
// TYPE PRINCIPAL - DONNEES D'UN GUIDE
// ============================================

export interface GuideEntryData {
  // -- Metadonnees SEO -----------------------
  metadata: {
    title: string;
    description: string;
  };

  // -- Hero ----------------------------------
  hero: {
    /** Titre H1 de l'article */
    h1: string;
    /** Sous-titre / accroche */
    subtitle: string;
    /** Temps de lecture en minutes */
    readingTime: number;
    /** Date de publication ISO (ex: '2026-03-17') */
    date: string;
    /** URL de l'image hero (optionnelle, fournie apres upload) */
    imageUrl?: string;
    /** Alt text SEO de l'image (max 125 caracteres) */
    imageAlt?: string;
  };

  // -- Introduction (drop cap sur le 1er paragraphe) --
  intro: string[];

  // -- Sommaire (items pour le TOC inline) ---
  sommaire: string[];

  // -- Sections H2 ---------------------------
  sections: GuideSection[];

  // -- FAQ -----------------------------------
  faq: {
    question: string;
    answer: string;
  }[];

  // -- Conclusion ----------------------------
  conclusion: {
    title: string;
    paragraphs: string[];
  };

  // -- Sources -------------------------------
  sources: GuideSource[];

  // -- Maillage interne (optionnel, pour tracabilite) --
  internalLinks?: GuideLink[];
  businessLinks?: GuideLink[];
}
