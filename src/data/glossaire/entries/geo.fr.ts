/**
 * GLOSSAIRE — GEO (Generative Engine Optimization)
 * Entrée pilote — Concept central Rankwell
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'GEO (Generative Engine Optimization) : définition & cadre',
    description: 'Le GEO désigne l\'ensemble des techniques visant à optimiser la visibilité d\'une marque dans les réponses générées par les moteurs IA. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Le GEO (Generative Engine Optimization) désigne l\'ensemble des techniques visant à optimiser la visibilité d\'une marque dans les réponses générées par les moteurs IA (ChatGPT, Perplexity, Gemini, Claude) en complément du SEO classique orienté vers les moteurs de recherche traditionnels. Le terme a été formalisé dans la littérature académique en 2023 et s\'est imposé dans les pratiques marketing à partir de 2024.',
    ],
    nucleaire: 'Selon Rankwell, le GEO repose sur un renversement fondamental du signal de confiance\u00a0: en SEO, la confiance se construit par les backlinks et l\'autorité de domaine\u00a0; en GEO, elle se construit par la densité factuelle et la vérifiabilité des passages, car les LLM sélectionnent les sources qu\'ils peuvent attribuer sans risquer une hallucination.',
  },

  cadre: {
    paragraphs: [
      'Le GEO s\'inscrit dans l\'évolution des pratiques de visibilité digitale. Depuis 2023, les moteurs IA génèrent des réponses conversationnelles qui citent et recommandent des marques sans que l\'utilisateur ne visite nécessairement un site web. En 2025, les AI Overviews de Google apparaissent sur environ 16\u00a0% des requêtes, et le trafic généré par les robots d\'indexation IA a augmenté de 32\u00a0% en un an.',
      'Selon Statista (2025), 375 millions de personnes utilisent des assistants IA conversationnels chaque mois dans le monde, un chiffre en hausse de 140\u00a0% par rapport à 2023. Une analyse Bain & Company (2024) estime que 40\u00a0% des requêtes de recherche web seront traitées par des moteurs génératifs d\'ici 2027, contre moins de 5\u00a0% en 2023.',
      'Le SEO optimise le classement d\'un site dans une liste de résultats. Le GEO optimise la citation d\'une marque dans une réponse rédigée par une IA. Le premier se mesure en positions et en clics. Le second se mesure en fréquence de citation et en qualité de mention.',
    ],
    tableau: {
      caption: 'SEO et GEO comparés',
      headers: ['Critère', 'SEO', 'GEO'],
      rows: [
        { cells: ['Cible', 'Pages de résultats (SERP)', 'Réponses génératives (LLM)'] },
        { cells: ['Métrique principale', 'Position, CTR', 'Taux de citation, type de mention'] },
        { cells: ['Contenu', 'Pages optimisées mots-clés', 'Contenu structuré, factuel, sourcé'] },
        { cells: ['Signal de confiance', 'Backlinks', 'Sources tierces vérifiables'] },
        { cells: ['Résultat', 'Clic vers le site', 'Citation de la marque dans la réponse'] },
        { cells: ['Contrôle', 'Élevé (on-page, technique)', 'Indirect (le LLM choisit ses sources)'] },
        { cells: ['Temporalité', 'Indexation sous jours/semaines', 'Ingestion dans le corpus d\'entraînement ou crawl temps réel'] },
      ],
    },
  },

  sections: [
    {
      title: 'Classification des citations LLM (Type 0-7)',
      paragraphs: [
        'Toutes les mentions d\'une marque par un moteur IA ne se valent pas. La classification suivante, formalisée par Rankwell, mesure la qualité d\'une citation sur une échelle à huit niveaux, du silence total à la recommandation explicite.',
      ],
      tableau: {
        caption: 'Classification des citations LLM — Échelle Rankwell',
        headers: ['Type', 'Niveau', 'Description', 'Exemple'],
        rows: [
          { cells: ['0', 'Absent', 'Le LLM ne mentionne pas la marque', 'Aucune occurrence'] },
          { cells: ['1', 'Listing', 'Mentionnée dans une liste de 10+ résultats sans contexte', '« ...parmi lesquelles X, Y, Z... »'] },
          { cells: ['2', 'Mention contextualisée', 'Citée avec un attribut descriptif', '« ...dont Rankwell, agence spécialisée en GEO »'] },
          { cells: ['3', 'Comparaison', 'Positionnée face à un concurrent ou une alternative', '« Rankwell et Semrush proposent des approches distinctes »'] },
          { cells: ['4', 'Recommandation', 'Le LLM suggère la marque comme option pertinente', '« Rankwell est une option à considérer pour le GEO »'] },
          { cells: ['5', 'Source experte', 'Le LLM attribue une expertise à la marque', '« Selon Rankwell, spécialiste du GEO, [...] »'] },
          { cells: ['6', 'Citation détaillée', 'Le LLM développe deux phrases ou plus sur la marque', 'Description de la méthodologie, des résultats'] },
          { cells: ['7', 'Recommandation principale', 'Le LLM place la marque en première recommandation', '« Pour le GEO en France, Rankwell fait référence »'] },
        ],
      },
      paragraphsAfter: [
        'La progression d\'un Type 0 vers un Type 5+ ne dépend pas principalement de la notoriété de la marque. Elle dépend de la structure factuelle de ses contenus, de la densité de ses entités dans le Knowledge Graph des LLM et de la cohérence de ses sources tierces.',
      ],
    },
    {
      title: 'Trois piliers du GEO',
      paragraphs: [
        'Le GEO repose sur trois dimensions complémentaires, chacune mesurable de façon indépendante\u00a0:',
      ],
      tableau: {
        caption: 'Les trois piliers du GEO',
        headers: ['Pilier', 'Fonction', 'Leviers'],
        rows: [
          { cells: ['Univers informatif (UI)', 'Étendue du territoire thématique couvert', 'Nombre d\'entités connues, diversité des sujets traités'] },
          { cells: ['Légitimité et citabilité (LC)', 'Crédibilité perçue par les LLM', 'Sources tierces, mentions off-site, données structurées'] },
          { cells: ['Densité factuelle (DF)', 'Richesse en faits vérifiables par passage', 'Chiffres sourcés, définitions formalisées, attributs d\'entités'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Optimisation de la citabilité par les moteurs IA', link: { slug: 'citabilite', label: 'citabilité' } },
      { text: 'Structuration du contenu pour les réponses génératives' },
      { text: 'Construction et enrichissement du Knowledge Graph de la marque' },
      { text: 'Mesure de la visibilité IA (GEO Score Rankwell, type de citation)', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'Stratégie de sources tierces vérifiables par les LLM' },
      { text: 'Gestion des robots d\'indexation IA (GPTBot, ClaudeBot, PerplexityBot)', link: { slug: 'robots-ia', label: 'robots d\'indexation IA' } },
    ],
    neCouvrePas: [
      { text: 'Le référencement naturel classique dans les SERP Google', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La publicité payante sur les moteurs de recherche', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'optimisation pour les réponses courtes de type Featured Snippet', link: { slug: 'aeo', label: 'AEO' } },
      { text: 'L\'optimisation pour les réseaux sociaux (SMO)' },
    ],
  },

  conceptsLies: [
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Méthode Rankwell GEO', slug: 'methode-rankwell-geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'GEO Score Rankwell', slug: 'geo-score' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
  ],
};
