/**
 * GLOSSAIRE — E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Critères qualitatifs Google — Signal de confiance SEO et IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'E-E-A-T : définition & cadre',
    description: 'L\'E-E-A-T désigne quatre critères d\'évaluation de la qualité d\'un contenu\u00a0: Expérience, Expertise, Autorité et Fiabilité. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'L\'E-E-A-T désigne quatre critères d\'évaluation de la qualité d\'un contenu et de son auteur\u00a0: Expérience, Expertise, Autorité et Fiabilité. Ces critères sont définis dans les Search Quality Rater Guidelines, le document de référence que Google fournit à ses évaluateurs humains pour noter la qualité des résultats de recherche. Le «\u00a0E\u00a0» d\'Experience a été ajouté en décembre 2022 aux trois critères initiaux (E-A-T).',
    ],
    nucleaire: 'Selon Rankwell, les signaux E-E-A-T ne servent pas qu\'à satisfaire les Quality Raters de Google. Ils constituent le principal critère de sélection des sources par les moteurs IA, qui privilégient les contenus démontrant une expertise vérifiable et une expérience documentée plutôt qu\'une simple autorité de domaine.',
  },

  cadre: {
    paragraphs: [
      'L\'E-E-A-T n\'est pas un facteur de classement algorithmique direct. Google ne calcule pas un «\u00a0score E-E-A-T\u00a0». Ces critères guident les évaluateurs humains qui testent la qualité des résultats, et les retours de ces évaluateurs orientent les ajustements algorithmiques. L\'E-E-A-T fonctionne comme un cadre d\'évaluation qualitative, pas comme un signal technique mesurable.',
      'La mise à jour de décembre 2025 (December 2025 Core Update) a renforcé le poids des signaux de qualité et d\'E-E-A-T dans l\'algorithme. Les sites faibles en E-E-A-T ont subi des baisses de visibilité significatives, même lorsque leurs pages individuelles étaient techniquement optimisées.',
    ],
  },

  sections: [
    {
      title: 'Les quatre composantes et leur impact sur la citabilité IA',
      paragraphs: [
        'Les Search Quality Rater Guidelines comptent plus de 170 pages et sont mises à jour plusieurs fois par an. Le tableau ci-dessous synthétise les quatre composantes E-E-A-T, leur évaluation par Google et par les LLM.',
      ],
      tableau: {
        caption: 'Les quatre composantes E-E-A-T',
        headers: ['Composante', 'Définition', 'Signal Google', 'Signal LLM', 'Comment le démontrer'],
        rows: [
          { cells: ['Experience', 'Preuve d\'une expérience directe du sujet traité', 'Contenu de première main détecté par les Quality Raters', 'Données propriétaires, observations terrain, études de cas originales', 'Témoignages factuels, photos de terrain, données propriétaires'] },
          { cells: ['Expertise', 'Compétence technique ou professionnelle de l\'auteur', 'Signaux auteur (bio, publications, affiliations)', 'Entités auteur dans le Knowledge Graph, mentions dans des sources tierces', 'Page auteur détaillée, publications vérifiables, certifications'] },
          { cells: ['Authoritativeness', 'Reconnaissance par des tiers comme référence sur le sujet', 'Backlinks, citations, mentions dans des publications spécialisées', 'Fréquence et qualité des citations dans les corpus d\'entraînement', 'Mentions dans la presse spécialisée, citations académiques, backlinks thématiques'] },
          { cells: ['Trustworthiness', 'Transparence, cohérence factuelle, mise à jour des informations', 'Dimension la plus importante selon Google (centre du modèle E-E-A-T)', 'Contenu sourcé, données vérifiables, cohérence avec le consensus', 'Sources citées, dates de mise à jour, mentions légales, HTTPS'] },
        ],
      },
      paragraphsAfter: [
        'Experience (Expérience). La preuve que l\'auteur ou l\'organisation a une expérience directe du sujet traité. Les moteurs IA identifient les marqueurs d\'expérience vécue (données propriétaires, observations de première main) et les distinguent du contenu compilé à partir de sources secondaires.',
        'Expertise. La compétence technique ou professionnelle de l\'auteur sur le sujet. Les LLM évaluent l\'expertise à travers les entités associées à l\'auteur dans le Knowledge Graph\u00a0: publications, affiliations, mentions dans des sources tierces.',
        'Authoritativeness (Autorité). La reconnaissance de l\'auteur ou du site comme référence sur un sujet par des tiers. Pour les moteurs IA, l\'autorité se mesure par la fréquence et la qualité des citations de la source dans les corpus d\'entraînement et les sources crawlées en temps réel.',
        'Trustworthiness (Fiabilité). La dimension la plus importante selon Google. La fiabilité englobe la transparence (qui écrit, pour qui, avec quelles sources), la cohérence factuelle et la mise à jour des informations. Les LLM sélectionnent en priorité un contenu qui cite ses sources et présente des données vérifiables.',
      ],
    },
    {
      title: 'E-E-A-T et pages YMYL',
      paragraphs: [
        'Les exigences E-E-A-T sont renforcées pour les pages YMYL (Your Money or Your Life), qui couvrent la santé, la finance, la sécurité et le droit. Sur ces thématiques, les moteurs de recherche et les moteurs IA appliquent un seuil de qualité plus élevé. Un contenu médical sans auteur identifié ni sources médicales référencées ne sera ni classé favorablement par Google, ni cité par les LLM.',
      ],
    },
    {
      title: 'Comment les LLM utilisent les signaux E-E-A-T',
      paragraphs: [
        'Google et les LLM partagent la même logique mais l\'appliquent différemment. Google évalue l\'E-E-A-T à travers le PageRank, les données structurées, les signaux de confiance et les évaluations humaines. Les LLM évaluent l\'E-E-A-T à travers la qualité intrinsèque du contenu\u00a0: précision factuelle, citations vérifiables, cohérence avec les autres sources, et présence de l\'auteur ou de la marque dans le Knowledge Graph.',
        'Un site peut avoir un bon E-E-A-T pour Google (backlinks puissants, domaine ancien) et un faible E-E-A-T pour les LLM (contenu générique, pas de données propriétaires). L\'inverse est également possible\u00a0: un site récent avec peu de backlinks mais un contenu très factuel et original peut être cité fréquemment par les moteurs IA.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Évaluation qualitative du contenu et de son auteur' },
      { text: 'Critères utilisés par les Quality Raters de Google' },
      { text: 'Signaux de confiance pour le classement dans les SERP' },
      { text: 'Critères de sélection des sources par les moteurs IA' },
      { text: 'Exigences renforcées pour les thématiques YMYL' },
    ],
    neCouvrePas: [
      { text: 'Les facteurs de classement techniques', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'L\'architecture de contenu du site', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'La stratégie d\'acquisition de liens', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'L\'optimisation on-page', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'La mesure de la visibilité dans les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
  ],
};
