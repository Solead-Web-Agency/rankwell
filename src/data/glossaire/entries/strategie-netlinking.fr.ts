/**
 * GLOSSAIRE — Stratégie de netlinking
 * Acquisition de backlinks et positionnement comme source tierce vérifiable
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Stratégie de netlinking : définition & cadre',
    description: 'Le netlinking désigne les actions visant à obtenir des backlinks depuis des sites tiers. Double fonction\u00a0: signal PageRank pour Google et source vérifiable pour les LLM.',
  },

  definition: {
    paragraphs: [
      'Le netlinking désigne l\'ensemble des actions visant à obtenir des liens hypertextes entrants (backlinks) depuis des sites tiers vers un site cible, dans le but de renforcer son autorité de domaine et son classement dans les moteurs de recherche. Le netlinking constitue le troisième pilier du SEO, aux côtés de la technique et du contenu.',
    ],
    nucleaire: 'Selon Rankwell, le netlinking en 2026 remplit deux fonctions distinctes qui ne se recoupent que partiellement\u00a0: les backlinks servent de signal de confiance pour Google (PageRank), tandis que les sources tierces vérifiables servent de signal de fiabilité pour les LLM. Un lien sur un annuaire de faible qualité peut transmettre du PageRank sans jamais être vérifié par un moteur IA, et inversement, une mention non-linkée sur un site de référence peut être citée par ChatGPT sans transmettre de PageRank.',
  },

  cadre: {
    paragraphs: [
      'Le netlinking est né avec le PageRank de Google (1998), qui modélise chaque lien comme un vote de confiance. Depuis, les algorithmes ont évolué\u00a0: Penguin (2012) a pénalisé les liens artificiels, et les Core Updates successives ont renforcé le poids de la qualité et de la pertinence thématique des domaines référents par rapport au volume brut de liens.',
      'En 2025-2026, le Digital PR s\'est imposé comme la tactique de netlinking dominante. Une étude Backlinko (2023) portant sur 11,8 millions de résultats Google a confirmé que le nombre de domaines référents reste le facteur de corrélation le plus fort avec le positionnement en première page. Les approches reposent sur la création d\'actifs linkables (études originales, outils interactifs, données exclusives) et sur les relations presse numériques.',
    ],
  },

  sections: [
    {
      title: 'Backlinks pour Google et sources pour les LLM\u00a0: deux mécaniques',
      paragraphs: [
        'Google évalue un lien comme un signal de confiance entre deux pages. Les LLM évaluent une source comme un signal de fiabilité factuelle. Ces deux évaluations ne suivent pas les mêmes critères.',
      ],
      tableau: {
        caption: 'Backlinks (Google) vs sources tierces (LLM)',
        headers: ['Critère', 'Backlink (signal Google)', 'Source tierce (signal LLM)'],
        rows: [
          { cells: ['Nature', 'Lien hypertexte HTML (dofollow/nofollow)', 'Mention vérifiable sur un site de référence'] },
          { cells: ['Évaluation', 'PageRank, autorité du domaine, ancre, thématique', 'Fiabilité de la source, cohérence factuelle, récurrence'] },
          { cells: ['Lien requis', 'Oui (balise `<a href>`)', 'Non (une mention textuelle suffit)'] },
          { cells: ['Exemple efficace', 'Lien éditorial depuis un média thématique', 'Citation de la marque dans une étude sectorielle'] },
          { cells: ['Exemple inefficace', 'Lien depuis un annuaire générique à faible DA', 'Mention sur un forum sans crédibilité'] },
        ],
      },
      paragraphsAfter: [
        'Un profil de liens efficace en 2026 sert les deux mécaniques\u00a0: il génère des backlinks de qualité pour le classement Google et positionne la marque comme source vérifiable dans des publications que les LLM considèrent comme fiables.',
      ],
    },
    {
      title: 'Typologie des tactiques de netlinking actuelles',
      tableau: {
        caption: 'Tactiques de netlinking et leur impact',
        headers: ['Tactique', 'Principe', 'Impact Google', 'Impact LLM'],
        rows: [
          { cells: ['Digital PR', 'Relations presse numériques, études originales', 'Élevé (liens éditoriaux haute autorité)', 'Élevé (mention dans des médias vérifiables)'] },
          { cells: ['Guest posting', 'Publication d\'articles invités sur des sites partenaires', 'Moyen à élevé (selon la qualité du site)', 'Variable (dépend de la crédibilité du site)'] },
          { cells: ['Linkable assets', 'Création d\'outils, données, études citables', 'Élevé (liens naturels)', 'Élevé (contenu de référence)'] },
          { cells: ['Broken link building', 'Remplacement de liens cassés par des liens vers son contenu', 'Moyen', 'Faible (mécanique purement technique)'] },
          { cells: ['Annuaires et répertoires', 'Inscription dans des annuaires sectoriels', 'Faible à moyen', 'Faible (sources rarement vérifiées par les LLM)'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'acquisition de liens entrants (backlinks) depuis des sites tiers' },
      { text: 'Le Digital PR et les relations presse numériques' },
      { text: 'La création d\'actifs linkables (études, outils, données)' },
      { text: 'L\'analyse et le nettoyage du profil de liens (désaveu de liens toxiques)' },
      { text: 'Le positionnement comme source tierce vérifiable pour les LLM' },
    ],
    neCouvrePas: [
      { text: 'Le maillage interne du site', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'L\'optimisation du contenu on-page', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'L\'optimisation technique du site', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'La publicité payante et les liens sponsorisés', link: { slug: 'sea', label: 'SEA' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
