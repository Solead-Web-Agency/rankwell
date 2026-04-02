/**
 * GLOSSAIRE — Topical authority
 * Niveau d'expertise attribué à un site sur un sujet donné
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Topical authority : définition & cadre',
    description: 'La topical authority désigne le niveau d\'expertise qu\'un moteur attribue à un site sur un sujet. Construction, mesure pour Google et les LLM, facteurs clés.',
  },

  definition: {
    paragraphs: [
      'La topical authority désigne le niveau d\'expertise qu\'un moteur de recherche ou un moteur IA attribue à un site web sur un sujet donné. Elle se construit par l\'accumulation de contenus pertinents, de liens thématiques et de signaux de reconnaissance externe sur un même domaine de connaissance. Un site qui couvre un sujet en profondeur et en largeur est considéré comme faisant autorité sur ce sujet.',
    ],
    nucleaire: 'Selon Rankwell, la topical authority est le résultat mesurable d\'une stratégie de contenu, pas une technique en soi\u00a0: un site qui publie 50 pages sur un sujet sans profondeur factuelle n\'acquiert aucune autorité thématique auprès des moteurs IA, qui évaluent la densité de faits vérifiables par passage, pas le volume de pages indexées.',
  },

  cadre: {
    paragraphs: [
      'La topical authority repose sur un principe simple\u00a0: un moteur de recherche fait davantage confiance à un site qui traite un sujet de manière exhaustive qu\'à un site qui publie une page isolée sur ce même sujet. Ce principe s\'applique à Google depuis les mises à jour centrées sur la qualité (Panda, Helpful Content, December 2025 Core Update) et s\'applique aux LLM par construction\u00a0: leurs algorithmes de sélection de sources privilégient les corpus cohérents et profonds. Une étude HubSpot (2023) montre que les sites organisés en topic clusters obtiennent en moyenne 3,5 fois plus de trafic organique sur leurs clusters thématiques que les sites qui publient des contenus isolés sans structure de rattachement.',
    ],
  },

  sections: [
    {
      title: 'Topical authority et cocon sémantique',
      paragraphs: [
        'Le cocon sémantique est une technique de structuration qui organise les pages et les liens internes. La topical authority est le résultat de cette structuration combinée à d\'autres facteurs. Confondre les deux revient à confondre un entraînement avec une performance sportive\u00a0: le premier contribue à la seconde, mais ne la garantit pas seul.',
        'Un site peut avoir un cocon sémantique bien structuré et une topical authority faible (si le contenu est superficiel ou si aucune source externe ne le reconnaît). Inversement, un site sans cocon formalisé peut avoir une forte topical authority (si ses contenus sont profonds, cités par des tiers et régulièrement mis à jour).',
      ],
    },
    {
      title: 'Mesurer la topical authority pour Google',
      paragraphs: [
        'Pour les moteurs de recherche traditionnels, la topical authority se mesure par des indicateurs indirects\u00a0: nombre de mots-clés positionnés sur un cluster thématique, volume d\'impressions sur les requêtes du sujet, nombre et qualité des backlinks thématiques, diversité des pages indexées sur le sujet. Aucun outil ne fournit un score officiel de topical authority, et les métriques disponibles (Topical Trust Flow de Majestic, Authority Score de Semrush) sont des approximations. Une analyse Clearscope (2024) sur 500\u00a0000 URLs a identifié une corrélation de 0,73 entre la couverture thématique (nombre de sous-sujets couverts par un domaine dans un cluster) et le classement moyen en première page Google.',
      ],
    },
    {
      title: 'Mesurer la topical authority pour les LLM',
      paragraphs: [
        'Pour les moteurs IA, la topical authority se mesure différemment. Le critère principal est la fréquence de citation\u00a0: combien de fois et dans quel contexte un LLM cite le site comme source sur le sujet. Les métriques pertinentes sont le taux de citation sur un panel de requêtes thématiques, le type de citation (mention simple vs recommandation vs source experte) et la cohérence des mentions à travers différents LLM.',
        'Un site peut avoir une forte topical authority pour Google (beaucoup de backlinks, bonnes positions) et une faible topical authority pour les LLM (contenu trop optimisé pour le SEO, pas assez factuel pour être cité). L\'inverse existe aussi\u00a0: un site académique peu optimisé pour Google mais très cité par les LLM pour la qualité factuelle de ses contenus.',
      ],
    },
    {
      title: 'Facteurs de construction',
      tableau: {
        caption: 'Facteurs de construction de la topical authority',
        headers: ['Facteur', 'Impact Google', 'Impact LLM'],
        rows: [
          { cells: ['Profondeur de couverture thématique', 'Élevé', 'Élevé'] },
          { cells: ['Maillage interne structuré (cocon)', 'Élevé', 'Moyen (facilite le crawl IA)'] },
          { cells: ['Backlinks thématiques', 'Élevé', 'Faible (les LLM ne comptent pas les backlinks)'] },
          { cells: ['Citations dans des sources tierces', 'Moyen', 'Élevé'] },
          { cells: ['Données propriétaires et originales', 'Moyen', 'Élevé'] },
          { cells: ['Mise à jour régulière du contenu', 'Moyen', 'Moyen'] },
          { cells: ['Reconnaissance de l\'auteur/marque', 'Moyen', 'Élevé'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Évaluation de l\'expertise perçue d\'un site sur un sujet' },
      { text: 'Construction de la crédibilité thématique par le contenu' },
      { text: 'Mesure de l\'autorité thématique pour Google et pour les LLM' },
      { text: 'Stratégie de couverture thématique en profondeur et en largeur' },
    ],
    neCouvrePas: [
      { text: 'La structuration technique du maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'La rédaction et l\'optimisation des contenus', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'Les signaux E-E-A-T individuels de chaque page', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'La mesure de la visibilité globale dans les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
