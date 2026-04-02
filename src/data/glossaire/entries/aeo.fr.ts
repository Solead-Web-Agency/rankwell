/**
 * GLOSSAIRE — AEO (Answer Engine Optimization)
 * Optimisation pour les réponses directes (Featured Snippets, Position 0)
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'AEO (Answer Engine Optimization) : définition & cadre',
    description: 'L\'AEO désigne les techniques d\'optimisation pour les réponses directes des moteurs de recherche\u00a0: Featured Snippets, Position 0, assistants vocaux. Cadre et périmètre.',
  },

  definition: {
    paragraphs: [
      'L\'AEO (Answer Engine Optimization) désigne l\'ensemble des techniques visant à optimiser un contenu pour qu\'il soit sélectionné comme réponse directe par les moteurs de recherche et les assistants IA, dans des formats courts et structurés\u00a0: Featured Snippets Google, réponses vocales, encarts « Position 0 ». L\'AEO précède historiquement le GEO et s\'est développée à partir de 2016 avec la montée en puissance des Featured Snippets.',
    ],
    nucleaire: 'Selon Rankwell, l\'AEO repose sur un mécanisme d\'extraction\u00a0: le moteur isole un passage existant et l\'affiche tel quel. Le GEO repose sur un mécanisme de génération\u00a0: le LLM synthétise plusieurs sources pour produire une réponse nouvelle. Cette distinction mécanique explique pourquoi un contenu performant en Featured Snippet peut rester invisible dans les réponses de ChatGPT ou Perplexity.',
  },

  cadre: {
    paragraphs: [
      'L\'AEO s\'inscrit dans l\'évolution du comportement de recherche vers les réponses directes. L\'utilisateur qui pose une question factuelle (« Quelle est la capitale du Japon\u00a0? ») ne veut pas une liste de liens\u00a0: il veut une réponse immédiate. Les Featured Snippets, les Knowledge Panels et les réponses des assistants vocaux (Google Assistant, Alexa, Siri) répondent à ce besoin.',
    ],
    tableau: {
      caption: 'Distinction formalisée\u00a0: AEO vs GEO',
      headers: ['Critère', 'AEO', 'GEO'],
      rows: [
        { cells: ['Format de la réponse', 'Court\u00a0: extrait unique (paragraphe, liste, tableau)', 'Long\u00a0: réponse rédigée par un LLM (plusieurs paragraphes)'] },
        { cells: ['Source de la réponse', 'Une seule page sélectionnée', 'Multiples sources synthétisées par le LLM'] },
        { cells: ['Plateforme cible', 'Google (Featured Snippet, Position 0), assistants vocaux', 'Moteurs IA\u00a0: ChatGPT, Perplexity, Gemini, Claude, AI Overviews'] },
        { cells: ['Mécanisme de sélection', 'Extraction d\'un passage existant', 'Génération d\'une réponse nouvelle à partir de sources'] },
        { cells: ['Stratégie de contenu', 'Répondre à une question précise dans un format extractible', 'Fournir un contenu factuel, structuré et multi-passages'] },
        { cells: ['Mesure', 'Obtention du Featured Snippet (oui/non)', 'Type de citation (0-7), fréquence de mention'] },
        { cells: ['Période d\'émergence', '2016 (montée des Featured Snippets)', '2023 (déploiement des moteurs IA génératifs)'] },
      ],
    },
  },

  sections: [
    {
      title: 'Complémentarité AEO et GEO',
      paragraphs: [
        'L\'AEO et le GEO ne sont pas exclusifs. Un contenu optimisé pour l\'AEO (question-réponse structurée, données factuelles) possède des caractéristiques qui favorisent aussi la citabilité par les LLM. La différence réside dans la profondeur\u00a0: l\'AEO vise un seul passage extractible, le GEO vise un contenu dont chaque passage est potentiellement citable.',
        'Un site qui pratique l\'AEO sans GEO obtiendra des Featured Snippets mais ne sera pas nécessairement cité par ChatGPT ou Perplexity. Un site qui pratique le GEO sans AEO sera cité par les moteurs IA mais manquera les positions zéro de Google.',
      ],
    },
    {
      title: 'Données de marché',
      paragraphs: [
        'Selon une étude Ahrefs (2023), 12,3\u00a0% des requêtes Google déclenchent un Featured Snippet, ce qui en fait le format de réponse directe le plus répandu dans les SERP. Par ailleurs, une analyse Semrush (2024) estime que les requêtes de type question (« comment », « qu\'est-ce que », « pourquoi ») ont un taux d\'apparition de Featured Snippet 2,5 fois supérieur aux requêtes génériques.',
      ],
    },
    {
      title: 'Types de contenus AEO',
      tableau: {
        caption: 'Types de contenus AEO',
        headers: ['Type', 'Format', 'Exemple de requête'],
        rows: [
          { cells: ['Définition', 'Paragraphe court (40-60 mots)', '« Qu\'est-ce que le GEO\u00a0? »'] },
          { cells: ['Liste', 'Liste à puces ordonnée ou non', '« Étapes d\'un audit SEO »'] },
          { cells: ['Tableau', 'Tableau comparatif', '« Différence entre SEO et SEA »'] },
          { cells: ['Réponse numérique', 'Chiffre avec contexte', '« Taux de rebond moyen en e-commerce »'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'optimisation pour les Featured Snippets Google (Position 0)' },
      { text: 'L\'optimisation pour les réponses des assistants vocaux' },
      { text: 'La structuration question-réponse du contenu' },
      { text: 'Le balisage FAQ et HowTo en Schema.org' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation pour les réponses longues des moteurs IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'L\'optimisation de la visibilité sur les moteurs IA', link: { slug: 'visibilite-multi-moteurs', label: 'Visibilité multi-moteurs' } },
      { text: 'L\'audit de la présence IA d\'une marque', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'Le référencement naturel classique au-delà des Featured Snippets', link: { slug: 'seo', label: 'SEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'Optimisation de contenu pour les LLM', slug: 'optimisation-contenu-llm' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
