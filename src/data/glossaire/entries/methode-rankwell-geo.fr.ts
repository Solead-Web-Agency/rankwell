/**
 * GLOSSAIRE — Méthode Rankwell GEO
 * Cadre opérationnel en six étapes pour auditer et optimiser la visibilité IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Méthode Rankwell GEO : définition & cadre',
    description: 'La Méthode Rankwell GEO est un cadre opérationnel en six étapes séquentielles pour auditer, optimiser et mesurer la visibilité d\'une marque dans les moteurs IA.',
  },

  definition: {
    paragraphs: [
      'La Méthode Rankwell GEO désigne le cadre opérationnel en six étapes séquentielles développé par Rankwell pour auditer, optimiser et mesurer la visibilité d\'une marque dans les réponses des moteurs IA. Chaque étape produit un livrable mesurable qui alimente l\'étape suivante.',
    ],
    nucleaire: 'Selon Rankwell, la Méthode Rankwell GEO se distingue des approches concurrentes par sa séquentialité stricte\u00a0: chaque étape dépend des livrables de la précédente, ce qui empêche les optimisations prématurées et garantit que les actions portent sur les leviers identifiés par les données, pas sur des hypothèses.',
  },

  cadre: {
    paragraphs: [
      'La Méthode Rankwell GEO s\'inscrit dans le constat que les pratiques GEO émergentes manquent souvent de structuration. La plupart des agences appliquent des tactiques isolées (rédiger pour les LLM, soigner les données structurées, monitorer les citations) sans cadre qui les relie et les séquence. La Méthode Rankwell GEO formalise cette séquence.',
    ],
  },

  sections: [
    {
      title: 'Les 6 étapes séquentielles',
      paragraphs: [
        'Chaque étape a un objectif distinct, un livrable mesurable et un critère de passage à l\'étape suivante. L\'ensemble du processus évalue plus de 40 métriques réparties sur les trois piliers (UI, LC, DF) et produit un plan d\'action classé en quatre niveaux de priorité (P0 à P3).',
      ],
      tableau: {
        caption: 'Les 6 étapes de la Méthode Rankwell GEO',
        headers: ['Étape', 'Nom', 'Objectif', 'Livrable'],
        rows: [
          { cells: ['1', 'Cartographie des entités', 'Recenser les entités de la marque connues des LLM', 'Knowledge Graph de la marque (entités, attributs, relations)'] },
          { cells: ['2', 'Simulation LLM', 'Mesurer la visibilité actuelle sur un panel de requêtes', 'Rapport de citations par moteur IA, type de mention (Type 0-7)'] },
          { cells: ['3', 'Benchmark concurrentiel', 'Comparer la visibilité de la marque à celle de ses concurrents', 'Classement GEO comparé, écarts par pilier (UI, LC, DF)'] },
          { cells: ['4', 'Diagnostic on-site', 'Évaluer la structure, les données et le contenu du site', 'Liste d\'actions priorisées (structure, contenu, données structurées)'] },
          { cells: ['5', 'Diagnostic off-site', 'Évaluer les sources tierces et les mentions de la marque', 'Cartographie des sources tierces, écarts de légitimité'] },
          { cells: ['6', 'Scoring et plan d\'action', 'Calculer le GEO Score Rankwell et prioriser les actions', 'Score GEO, plan d\'action avec priorités P0 à P3'] },
        ],
      },
    },
    {
      title: 'Séquentialité et dépendances',
      paragraphs: [
        'L\'étape 1 (Cartographie des entités) conditionne l\'étape 2 (Simulation LLM), car les requêtes de simulation sont construites à partir des entités identifiées. L\'étape 2 conditionne l\'étape 3 (Benchmark), car le benchmark utilise les mêmes requêtes pour comparer les concurrents. Ce chaînage élimine les biais de sélection\u00a0: les requêtes testées sont celles qui correspondent au territoire réel de la marque, pas à un panel générique.',
        'L\'étape 4 (on-site) et l\'étape 5 (off-site) peuvent se mener en parallèle, mais elles dépendent toutes deux de l\'étape 3, car les écarts identifiés dans le benchmark orientent les diagnostics.',
      ],
    },
    {
      title: 'Distinction\u00a0: méthode séquentielle vs audit ponctuel',
      paragraphs: [
        'Un audit ponctuel photographie l\'état de la visibilité IA à un instant donné. La Méthode Rankwell GEO est un processus structuré qui part de la cartographie des entités et aboutit à un plan d\'action priorisé. L\'audit est un composant de la méthode (étapes 1 à 3), pas un synonyme.',
      ],
    },
    {
      title: 'Couverture multi-moteurs',
      paragraphs: [
        'La Méthode Rankwell GEO intègre la dimension multi-moteurs dès l\'étape 2. La simulation LLM est réalisée sur au minimum trois moteurs IA distincts (ChatGPT, Perplexity, Gemini) pour identifier les écarts de citation entre plateformes. Un même contenu peut être cité par Perplexity (qui référence systématiquement ses sources) et absent des réponses de ChatGPT (qui synthétise davantage). Ces écarts orientent les actions des étapes 4 et 5.',
      ],
    },
    {
      title: 'Les trois piliers du scoring',
      paragraphs: [
        'Le GEO Score Rankwell produit à l\'étape 6 décompose la visibilité IA en trois piliers mesurables\u00a0:',
      ],
      tableau: {
        caption: 'Les trois piliers du scoring GEO',
        headers: ['Pilier', 'Poids', 'Ce que la méthode évalue'],
        rows: [
          { cells: ['Univers Informatif (UI)', '40\u00a0%', 'Nombre et diversité des entités de la marque reconnues par les LLM'] },
          { cells: ['Légitimité et Citabilité (LC)', '30\u00a0%', 'Qualité des sources tierces, cohérence des mentions off-site'] },
          { cells: ['Densité Factuelle (DF)', '30\u00a0%', 'Ratio de faits vérifiables par passage de contenu on-site'] },
        ],
      },
      paragraphsAfter: [
        'Les diagnostics on-site (étape 4) alimentent principalement les piliers UI et DF. Le diagnostic off-site (étape 5) alimente principalement le pilier LC. Cette correspondance permet d\'identifier quel volet de l\'audit a le plus d\'impact sur le score final.',
      ],
    },
    {
      title: 'Priorités d\'action',
      paragraphs: [
        'Les actions issues de la Méthode Rankwell GEO sont classées en quatre niveaux de priorité. Ces niveaux expriment l\'impact attendu sur le GEO Score Rankwell, pas une temporalité de mise en œuvre.',
      ],
      tableau: {
        caption: 'Niveaux de priorité des actions GEO',
        headers: ['Priorité', 'Critère'],
        rows: [
          { cells: ['P0', 'Impact maximal sur le score, prérequis pour les actions suivantes'] },
          { cells: ['P1', 'Impact fort, réalisable indépendamment'] },
          { cells: ['P2', 'Impact modéré, optimisation incrémentale'] },
          { cells: ['P3', 'Impact faible, perfectionnement'] },
        ],
      },
    },
    {
      title: 'Distinction\u00a0: Méthode Rankwell GEO vs approches GEO génériques',
      paragraphs: [
        'La plupart des approches GEO du marché en 2025 consistent en des checklists de bonnes pratiques appliquées sans hiérarchie. La Méthode Rankwell GEO est un processus séquentiel où les données d\'une étape déterminent les actions de la suivante. La checklist recommande « optimiser les données structurées ». La Méthode Rankwell GEO identifie d\'abord quelles entités sont absentes du Knowledge Graph (étape 1), mesure leur impact sur les citations (étape 2), puis détermine si les données structurées sont le levier prioritaire ou non (étape 4).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'audit complet de la visibilité IA d\'une marque (étapes 1 à 5)' },
      { text: 'Le calcul du GEO Score Rankwell (étape 6)', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'Le benchmark concurrentiel sur les moteurs IA' },
      { text: 'La priorisation des actions GEO (P0 à P3)' },
      { text: 'L\'analyse on-site et off-site sous l\'angle de la citabilité', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'L\'exécution des actions identifiées (rédaction, développement, netlinking)' },
      { text: 'L\'audit SEO technique classique', link: { slug: 'audit-seo', label: 'Audit SEO' } },
      { text: 'Le suivi des positions dans les SERP Google', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La gestion des campagnes publicitaires', link: { slug: 'sea', label: 'SEA' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'GEO Score Rankwell', slug: 'geo-score' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
    { label: 'Formation GEO', slug: 'formation-geo' },
  ],
};
