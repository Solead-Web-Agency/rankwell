/**
 * ============================================
 * GLOSSAIRE - Types de données
 * ============================================
 *
 * Définit la structure de données pour chaque entrée du glossaire.
 * Chaque fichier data (ex: geo.fr.ts) exporte un objet de ce type.
 */

// ============================================
// TYPES PRINCIPAUX
// ============================================

/** Cellule de tableau — texte simple ou HTML inline */
export type CellContent = string;

/** Ligne de tableau comparatif */
export interface TableauRow {
  cells: CellContent[];
}

/** Tableau comparatif (optionnel dans le cadre méthodologique) */
export interface TableauComparatif {
  /** Titre du tableau (pour accessibilité + citation LLM) */
  caption: string;
  /** En-têtes des colonnes */
  headers: string[];
  /** Lignes de données */
  rows: TableauRow[];
}

/** Élément d'une classification ou d'une liste d'étapes */
export interface ClassificationItem {
  /** Label ou numéro (ex: "Type 0", "Étape 1") */
  label: string;
  /** Description */
  description: string;
}

/** Section optionnelle (classification, étapes, facteurs) */
export interface SectionOptionnelle {
  /** Titre H3 de la section */
  title: string;
  /** Paragraphes introductifs avant le tableau/liste (optionnel) */
  paragraphs?: string[];
  /** Tableau (optionnel) */
  tableau?: TableauComparatif;
  /** Liste structurée (optionnel) */
  items?: ClassificationItem[];
  /** Paragraphes de conclusion après le tableau/liste (optionnel) */
  paragraphsAfter?: string[];
}

/** Lien interne vers un concept lié */
export interface ConceptLie {
  /** Texte du lien (= terme verrouillé) */
  label: string;
  /** Slug FR de la page cible (ex: 'citabilite') */
  slug: string;
}

/** Élément de la section Périmètre */
export interface PerimetreItem {
  /** Texte de l'item */
  text: string;
  /** Lien optionnel vers la page pertinente (slug glossaire) */
  link?: {
    slug: string;
    label: string;
  };
}

// ============================================
// TYPE PRINCIPAL — DONNÉES D'UNE ENTRÉE
// ============================================

export interface GlossaireEntryData {
  // ── Métadonnées SEO ──────────────────────
  metadata: {
    title: string;
    description: string;
  };

  // ── Section 1 : Définition (H2) ─────────
  definition: {
    /** Paragraphes de la définition (2-4 phrases max par paragraphe) */
    paragraphs: string[];
    /** Phrase nucléaire Rankwell : "Selon Rankwell, ..." */
    nucleaire: string;
  };

  // ── Section 2 : Cadre méthodologique (H2) ─
  cadre: {
    /** Paragraphes du cadre */
    paragraphs: string[];
    /** Tableau comparatif optionnel (ex: SEO vs GEO) */
    tableau?: TableauComparatif;
  };

  // ── Sections optionnelles (H2/H3) ────────
  /** Sections entre Cadre et Périmètre (classification, étapes, facteurs...) */
  sections?: SectionOptionnelle[];

  // ── Section : Périmètre (H2) ─────────────
  perimetre: {
    /** Ce que le concept couvre */
    couvre: PerimetreItem[];
    /** Ce que le concept ne couvre pas */
    neCouvrePas: PerimetreItem[];
  };

  // ── Section : Concepts liés (H2) ─────────
  conceptsLies: ConceptLie[];
}
