/**
 * GLOSSAIRE — AI Overviews
 * Réponses génératives de Google affichées en haut des résultats de recherche
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'AI Overviews : définition & cadre',
    description: 'Les AI Overviews sont les réponses génératives affichées par Google en haut des résultats de recherche. Impact sur le CTR, lien avec le SEO et le GEO, données de marché.',
  },

  definition: {
    paragraphs: [
      'Les AI Overviews désignent les réponses génératives affichées par Google en haut de la page de résultats, rédigées par un modèle d\'IA à partir de sources web indexées. Lancées en mai 2024 aux États-Unis et déployées progressivement à l\'international, les AI Overviews représentent l\'intégration directe d\'une couche générative dans le moteur de recherche dominant.',
    ],
    nucleaire: 'Selon Rankwell, les AI Overviews constituent le point de convergence entre SEO et GEO\u00a0: elles sont déclenchées par une requête Google classique, mais la réponse est générée par un LLM qui sélectionne et cite des sources selon des critères de citabilité, pas uniquement de positionnement SERP.',
  },

  cadre: {
    paragraphs: [
      'Les AI Overviews modifient la mécanique d\'interaction entre l\'utilisateur et les résultats de recherche. En SERP classique, l\'utilisateur parcourt une liste de liens et choisit celui qui lui semble pertinent. Avec les AI Overviews, l\'utilisateur obtient une réponse rédigée directement dans la page de résultats, accompagnée de liens vers les sources utilisées.',
    ],
  },

  sections: [
    {
      title: 'Impact mesuré sur le comportement de recherche',
      paragraphs: [
        'Les données disponibles en 2025 permettent de quantifier l\'impact des AI Overviews\u00a0:',
      ],
      tableau: {
        caption: 'Impact des AI Overviews — données 2025',
        headers: ['Indicateur', 'Valeur', 'Source'],
        rows: [
          { cells: ['Part des requêtes déclenchant une AI Overview', '~16\u00a0% des requêtes', 'Semrush, 2025'] },
          { cells: ['Croissance de la prévalence des AI Overviews (sept. 2024 → sept. 2025)', '+492\u00a0% sur desktop', 'seoClarity, 2025'] },
          { cells: ['Baisse du CTR organique sur les requêtes avec AI Overview', '-61\u00a0% (de 1,76\u00a0% à 0,61\u00a0%)', 'Seer Interactive, sept. 2025'] },
          { cells: ['Baisse du CTR payant sur les requêtes avec AI Overview', '-68\u00a0% (de 19,7\u00a0% à 6,34\u00a0%)', 'Seer Interactive, sept. 2025'] },
          { cells: ['Entreprises rapportant un impact positif sur le trafic organique', '63\u00a0%', 'WordStream, 2025'] },
        ],
      },
    },
    {
      title: 'Pont GEO\u00a0: AI Overviews au croisement du SEO et du GEO',
      paragraphs: [
        'Les AI Overviews créent un pont entre les deux disciplines. Elles sont déclenchées par le mécanisme SEO (une requête sur Google) mais utilisent un mécanisme GEO (un LLM qui sélectionne des sources et rédige une réponse).',
      ],
      tableau: {
        caption: 'AI Overviews\u00a0: mécanisme SEO vs mécanisme GEO',
        headers: ['Dimension', 'Mécanisme SEO', 'Mécanisme GEO'],
        rows: [
          { cells: ['Déclenchement', 'Requête tapée dans Google', 'Identique'] },
          { cells: ['Sélection des résultats', 'Algorithme de classement (PageRank, etc.)', 'LLM qui évalue la pertinence et la fiabilité des sources'] },
          { cells: ['Format de la réponse', 'Liste de liens', 'Texte rédigé avec citations intégrées'] },
          { cells: ['Visibilité de la marque', 'Position dans la liste', 'Mention nommée dans le texte généré'] },
          { cells: ['Métrique de succès', 'CTR, position', 'Présence dans la réponse, type de citation'] },
        ],
      },
      paragraphsAfter: [
        'Un site bien positionné dans les SERP n\'apparaît pas automatiquement dans les AI Overviews. Un site absent du top 10 peut y être cité si son contenu offre une réponse factuelle et structurée que le LLM juge fiable. La corrélation entre position SERP et citation AI Overview existe mais n\'est pas absolue.',
      ],
    },
    {
      title: 'Catégories de requêtes concernées',
      paragraphs: [
        'Les AI Overviews ne se déclenchent pas uniformément. Elles apparaissent préférentiellement sur les requêtes informationnelles complexes (comparaisons, définitions, processus) et moins fréquemment sur les requêtes transactionnelles pures ou navigationnelles. Les requêtes YMYL (santé, finance) font l\'objet d\'un filtrage renforcé.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les réponses génératives dans les résultats de recherche Google' },
      { text: 'L\'impact sur le CTR organique et payant' },
      { text: 'Les sources citées dans les réponses génératives Google' },
      { text: 'Le lien entre positionnement SERP et visibilité dans la couche générative' },
    ],
    neCouvrePas: [
      { text: 'Les réponses générées par les moteurs IA indépendants\u00a0: ChatGPT, Perplexity, Claude', link: { slug: 'visibilite-multi-moteurs', label: 'Visibilité multi-moteurs' } },
      { text: 'L\'optimisation pour les Featured Snippets classiques', link: { slug: 'aeo', label: 'AEO' } },
      { text: 'L\'ensemble de la stratégie GEO', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Optimisation de contenu pour les LLM', slug: 'optimisation-contenu-llm' },
    { label: 'Audit GEO', slug: 'audit-geo' },
  ],
};
