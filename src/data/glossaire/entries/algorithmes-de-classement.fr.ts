/**
 * GLOSSAIRE — Algorithmes de classement
 * Systèmes de ranking des moteurs de recherche
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Algorithmes de classement : définition & cadre',
    description: 'Les algorithmes de classement désignent les systèmes automatisés des moteurs de recherche pour ordonner les résultats par pertinence. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Les algorithmes de classement désignent les systèmes automatisés utilisés par les moteurs de recherche pour ordonner les résultats en fonction de leur pertinence par rapport à une requête. Google utilise plusieurs systèmes de classement interconnectés (pertinence, autorité, expérience utilisateur, fraîcheur) qui évaluent simultanément des centaines de signaux pour produire un ordre de résultats.',
    ],
    nucleaire: 'Selon Rankwell, les algorithmes de classement Google produisent un ranking ordonné (position 1, 2, 3...) en pondérant des centaines de signaux de pertinence relative. Les LLM effectuent une sélection binaire de passages à citer (cité ou non cité) en évaluant la densité factuelle et la vérifiabilité du contenu. Le premier mécanisme optimise la pertinence relative entre pages concurrentes, le second optimise la fiabilité absolue d\'un passage donné.',
  },

  cadre: {
    paragraphs: [
      'Les algorithmes de classement de Google ont évolué par couches successives depuis 1998. Le PageRank, breveté par Larry Page en 1998, mesurait l\'autorité d\'une page par le nombre et la qualité de ses liens entrants. Google utilise plus de 200 facteurs de classement (chiffre déclaré par Matt Cutts en 2009, toujours cité comme référence).',
      'Les mises à jour Panda (2011), Penguin (2012), Hummingbird (2013) puis RankBrain (2015) et BERT (2019) ont progressivement déplacé le critère dominant de l\'autorité de liens vers la compréhension sémantique de la requête et du contenu.',
    ],
  },

  sections: [
    {
      title: 'Les grandes familles de signaux',
      paragraphs: [
        'Les algorithmes de classement modernes s\'appuient sur quatre familles de signaux qui interagissent simultanément.',
      ],
      tableau: {
        caption: 'Les quatre familles de signaux de classement',
        headers: ['Famille', 'Signaux principaux', 'Objectif'],
        rows: [
          { cells: ['Pertinence', 'Correspondance sémantique requête-contenu, entités, contexte', 'Le contenu répond-il à la question\u00a0?'] },
          { cells: ['Autorité', 'Backlinks, mentions, E-E-A-T, expertise de l\'auteur', 'La source est-elle fiable\u00a0?'] },
          { cells: ['Expérience', 'Core Web Vitals, compatibilité mobile, accessibilité', 'L\'expérience utilisateur est-elle satisfaisante\u00a0?'] },
          { cells: ['Fraîcheur', 'Date de publication, fréquence de mise à jour, actualité du sujet', 'Le contenu est-il à jour\u00a0?'] },
        ],
      },
      paragraphsAfter: [
        'La pertinence et l\'autorité restent les deux piliers dominants. L\'expérience et la fraîcheur agissent comme des facteurs de départage lorsque la pertinence et l\'autorité sont équivalentes entre plusieurs résultats.',
      ],
    },
    {
      title: 'Core Updates et systèmes permanents',
      paragraphs: [
        'Google distingue les core updates (mises à jour majeures déployées plusieurs fois par an) des systèmes permanents (systèmes actifs en continu). Les core updates ajustent les pondérations entre les familles de signaux. Les systèmes permanents, comme le Helpful Content System, le spam detection et le reviews system, filtrent ou pénalisent en temps réel les contenus non conformes.',
        'Le December 2025 Core Update a renforcé le poids des signaux E-E-A-T, en particulier pour les requêtes YMYL (Your Money Your Life), et a accéléré l\'intégration des AI Overviews dans les résultats. Le spam update de mars 2024 a désindexé des centaines de sites de contenu IA de faible qualité, confirmant la priorité de Google à la fiabilité des sources.',
      ],
    },
    {
      title: 'Comment les LLM sélectionnent leurs sources',
      paragraphs: [
        'Les LLM ne classent pas les résultats. Ils sélectionnent des passages à intégrer dans leurs réponses. Cette sélection repose sur des critères différents du ranking Google\u00a0: la factualité du passage, sa cohérence avec les autres sources disponibles, la densité d\'information et la citabilité du format (passages courts, faits vérifiables, données structurées).',
        'Un site en position 1 sur Google n\'est pas automatiquement la source citée par ChatGPT ou Perplexity. Les LLM peuvent préférer une source moins bien classée mais dont le contenu est plus factuel, plus structuré et plus extractible. Le ranking Google et la sélection LLM se recoupent partiellement (les signaux d\'autorité et de pertinence jouent dans les deux cas), mais les mécanismes sont fondamentalement distincts.',
      ],
      tableau: {
        caption: 'Algorithmes de classement Google et sélection de sources LLM',
        headers: ['Critère', 'Algorithmes de classement (Google)', 'Sélection de sources (LLM)'],
        rows: [
          { cells: ['Résultat', 'Liste ordonnée de pages', 'Passages intégrés dans une réponse'] },
          { cells: ['Unité', 'Page web', 'Passage (paragraphe, tableau, phrase)'] },
          { cells: ['Signal dominant', 'Pertinence + autorité', 'Factualité + cohérence inter-sources'] },
          { cells: ['Visibilité du classement', 'Position visible (1, 2, 3...)', 'Aucun classement visible'] },
          { cells: ['Contrôle', 'Optimisation on-page et off-page', 'Structuration du contenu et citabilité'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les systèmes de ranking des moteurs de recherche (Google, Bing)' },
      { text: 'Les familles de signaux (pertinence, autorité, expérience, fraîcheur)' },
      { text: 'Les core updates et les systèmes de classement permanents' },
      { text: 'La distinction entre ranking moteur et sélection de sources IA' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation technique d\'un site pour les moteurs', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Les critères d\'évaluation de la qualité E-E-A-T', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'L\'optimisation pour les réponses génératives des LLM', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Le fonctionnement du TF-IDF et des métriques statistiques', link: { slug: 'tf-idf-term-frequency-inverse-document-frequency', label: 'TF-IDF' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'GEO', slug: 'geo' },
    { label: 'TF-IDF', slug: 'tf-idf-term-frequency-inverse-document-frequency' },
  ],
};
