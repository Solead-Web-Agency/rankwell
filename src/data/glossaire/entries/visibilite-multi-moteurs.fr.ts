/**
 * GLOSSAIRE — Visibilité multi-moteurs
 * Présence d'une marque dans les réponses de l'ensemble des moteurs IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Visibilité multi-moteurs : définition & cadre',
    description: 'La visibilité multi-moteurs désigne la présence d\'une marque dans les réponses de l\'ensemble des moteurs IA (ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews).',
  },

  definition: {
    paragraphs: [
      'La visibilité multi-moteurs désigne la présence d\'une marque dans les réponses générées par l\'ensemble des moteurs IA (Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude, Copilot) et non sur un seul d\'entre eux. Chaque moteur IA utilise un modèle de langage distinct, des sources de données différentes et des critères de sélection propres.',
    ],
    nucleaire: 'Selon Rankwell, la visibilité multi-moteurs est le corollaire direct du GEO\u00a0: optimiser pour un seul moteur IA revient à reproduire l\'erreur historique du SEO « Google-only » dans un écosystème qui, en 2025, compte déjà six moteurs IA générant des réponses à partir de sources web.',
  },

  cadre: {
    paragraphs: [
      'La visibilité multi-moteurs s\'inscrit dans le constat que l\'écosystème des moteurs IA est fragmenté. Contrairement au SEO où Google concentre plus de 90\u00a0% des parts de marché en Europe, les moteurs IA se partagent les usages sans qu\'un acteur unique domine l\'ensemble des cas d\'utilisation.',
    ],
    tableau: {
      caption: 'Distinction\u00a0: multi-moteurs et multicanal',
      headers: ['Concept', 'Périmètre', 'Exemples'],
      rows: [
        { cells: ['Visibilité multi-moteurs', 'Réponses génératives des moteurs IA', 'ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews'] },
        { cells: ['Visibilité multicanal', 'Canaux marketing digitaux', 'SEO, SEA, réseaux sociaux, emailing, display'] },
      ],
    },
  },

  sections: [
    {
      title: 'Cartographie des moteurs IA (2025)',
      paragraphs: [
        'Chaque moteur IA a un profil distinct qui influence le type de contenu qu\'il cite et la façon dont il le fait.',
      ],
      tableau: {
        caption: 'Cartographie des moteurs IA en 2025',
        headers: ['Moteur IA', 'Modèle sous-jacent', 'Accès aux sources web', 'Mode de citation', 'Profil d\'usage'],
        rows: [
          { cells: ['Google AI Overviews', 'Gemini', 'Index Google en temps réel', 'Sources intégrées avec liens', 'Requêtes de recherche classiques'] },
          { cells: ['ChatGPT (Search)', 'GPT-4o', 'Crawl GPTBot + recherche Bing', 'Citations avec liens dans la réponse', 'Questions conversationnelles, recherche'] },
          { cells: ['Perplexity', 'Modèles multiples', 'Crawl PerplexityBot + recherche web', 'Citations numérotées avec sources', 'Recherche factuelle approfondie'] },
          { cells: ['Gemini', 'Gemini', 'Index Google + recherche web', 'Réponses avec sources liées', 'Assistant intégré à l\'écosystème Google'] },
          { cells: ['Claude', 'Claude', 'Crawl ClaudeBot (limité)', 'Citations textuelles dans la réponse', 'Analyse, rédaction, raisonnement'] },
          { cells: ['Copilot (Microsoft)', 'GPT-4o', 'Index Bing + recherche web', 'Citations numérotées avec sources', 'Recherche intégrée à l\'écosystème Microsoft'] },
        ],
      },
    },
    {
      title: 'Pourquoi un contenu cité par un moteur IA ne l\'est pas forcément par un autre',
      paragraphs: [
        'Une étude Authoritas (2024) comparant les sources citées par ChatGPT, Perplexity et Gemini sur 1 000 requêtes commerciales a mesuré un taux de recoupement de seulement 12\u00a0%\u00a0: seules 12\u00a0% des sources apparaissaient dans les réponses des trois moteurs IA simultanément. Ce résultat confirme que la visibilité sur un seul moteur IA ne préjuge pas de la visibilité sur les autres.',
      ],
      items: [
        { label: 'Corpus de données', description: 'Chaque moteur IA accède à un ensemble de sources différent. Un site bloqué par GPTBot dans robots.txt ne sera pas indexé par ChatGPT mais pourra l\'être par Perplexity si PerplexityBot est autorisé.' },
        { label: 'Algorithme de sélection', description: 'Les critères qui déterminent quelles sources sont citées varient d\'un modèle à l\'autre. Perplexity privilégie les sources factuelles et les cite systématiquement. ChatGPT synthétise davantage et cite moins souvent.' },
        { label: 'Fraîcheur des données', description: 'Certains moteurs crawlent le web en temps réel (Perplexity, AI Overviews), d\'autres intègrent les données avec un décalage lié à l\'entraînement du modèle.' },
      ],
      paragraphsAfter: [
        'Selon Gartner (2025), 70\u00a0% des recherches web intègreront une composante générative d\'ici fin 2026, répartie entre au moins quatre plateformes distinctes (Google, OpenAI, Anthropic, Perplexity). Cette fragmentation renforce la nécessité d\'une stratégie multi-moteurs dès la conception du contenu.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La présence d\'une marque dans les réponses de chaque moteur IA' },
      { text: 'Les écarts de citation entre moteurs IA pour une même requête' },
      { text: 'L\'impact des robots d\'indexation IA sur la couverture multi-moteurs', link: { slug: 'robots-ia', label: 'robots d\'indexation IA' } },
      { text: 'La stratégie de contenu adaptée à l\'ensemble des moteurs IA' },
    ],
    neCouvrePas: [
      { text: 'Le positionnement dans les SERP classiques de Google ou Bing', link: { slug: 'seo', label: 'SEO' } },
      { text: 'L\'optimisation spécifique aux AI Overviews de Google', link: { slug: 'ai-overviews', label: 'AI Overviews' } },
      { text: 'La mesure composite de la visibilité IA', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'Robots d\'indexation IA', slug: 'robots-ia' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
