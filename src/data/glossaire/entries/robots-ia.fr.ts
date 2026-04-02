/**
 * GLOSSAIRE — Robots d'indexation IA
 * Crawlers déployés par les opérateurs de moteurs IA pour collecter du contenu web
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Robots d\'indexation IA : définition & cadre',
    description: 'Les robots d\'indexation IA sont les crawlers déployés par les opérateurs de moteurs IA (OpenAI, Anthropic, Perplexity, Google) pour collecter du contenu web. Cartographie et gestion.',
  },

  definition: {
    paragraphs: [
      'Les robots d\'indexation IA désignent les programmes automatisés (crawlers) déployés par les opérateurs de moteurs IA (OpenAI, Anthropic, Perplexity, Google, Meta, Apple) pour parcourir et collecter le contenu des sites web. Ce contenu alimente l\'entraînement des modèles de langage et la génération de réponses en temps réel. Les robots d\'indexation IA se distinguent des robots de recherche classiques (Googlebot, Bingbot) par leur finalité\u00a0: ils ne classent pas des pages dans une liste de résultats, ils ingèrent du contenu pour qu\'un LLM le synthétise.',
    ],
    nucleaire: 'Selon Rankwell, les robots d\'indexation IA représentent la couche d\'acquisition de données du GEO\u00a0: un site invisible pour ces robots est structurellement exclu des réponses génératives, quelle que soit la qualité de son contenu ou de son positionnement SEO.',
  },

  cadre: {
    paragraphs: [
      'Les robots d\'indexation IA s\'inscrivent dans la transformation de l\'écosystème web. Depuis 2023, le volume de crawl des robots IA a augmenté massivement. Selon une analyse de Vercel publiée en 2025, entre mai 2024 et mai 2025, le trafic global des crawlers a augmenté de 18\u00a0%, avec GPTBot en croissance de 305\u00a0% et Googlebot de 96\u00a0% sur la même période. D\'après une étude Originality.ai de 2024, environ 35\u00a0% des 1 000 sites les plus visités bloquent GPTBot dans leur fichier robots.txt, et ce taux atteint 26\u00a0% pour les sites d\'actualité.',
    ],
  },

  sections: [
    {
      title: 'Cartographie des robots d\'indexation IA (2025)',
      tableau: {
        caption: 'Robots d\'indexation IA en 2025',
        headers: ['Robot', 'Opérateur', 'User-Agent', 'Finalité', 'Accès web temps réel'],
        rows: [
          { cells: ['GPTBot', 'OpenAI', 'GPTBot', 'Entraînement + génération de réponses ChatGPT', 'Oui (ChatGPT Search)'] },
          { cells: ['OAI-SearchBot', 'OpenAI', 'OAI-SearchBot', 'Recherche web temps réel pour ChatGPT', 'Oui'] },
          { cells: ['ClaudeBot', 'Anthropic', 'ClaudeBot', 'Entraînement du modèle Claude', 'Limité'] },
          { cells: ['PerplexityBot', 'Perplexity', 'PerplexityBot', 'Génération de réponses en temps réel', 'Oui'] },
          { cells: ['Google-Extended', 'Google', 'Google-Extended', 'Entraînement Gemini (distinct de Googlebot)', 'Via l\'index Google'] },
          { cells: ['Bytespider', 'ByteDance', 'Bytespider', 'Entraînement de modèles IA', 'Non'] },
          { cells: ['Meta-ExternalAgent', 'Meta', 'Meta-ExternalAgent', 'Entraînement de modèles Meta AI', 'Non'] },
          { cells: ['Applebot-Extended', 'Apple', 'Applebot-Extended', 'Entraînement Apple Intelligence', 'Non'] },
          { cells: ['CCBot', 'Common Crawl', 'CCBot', 'Corpus ouvert utilisé par de nombreux LLM', 'Non'] },
        ],
      },
    },
    {
      title: 'Distinction\u00a0: robots de recherche classiques vs robots d\'indexation IA',
      tableau: {
        caption: 'Robots de recherche vs robots d\'indexation IA',
        headers: ['Critère', 'Robots de recherche (Googlebot, Bingbot)', 'Robots d\'indexation IA (GPTBot, ClaudeBot)'],
        rows: [
          { cells: ['Finalité', 'Indexer des pages pour les classer dans les SERP', 'Collecter du contenu pour l\'entraînement LLM ou la génération en temps réel'] },
          { cells: ['Résultat pour l\'éditeur', 'Lien cliquable dans les résultats de recherche', 'Citation potentielle dans une réponse générée, pas de lien garanti'] },
          { cells: ['Fréquence de crawl', 'Régulière, calibrée sur le crawl budget', 'Variable, souvent intensive et ponctuelle'] },
          { cells: ['Robots.txt', 'Respecté systématiquement', 'Respecté par la majorité (GPTBot, ClaudeBot) mais pas par tous'] },
          { cells: ['Ratio crawl/référence', 'Élevé\u00a0: chaque page crawlée peut générer des clics', 'Faible\u00a0: volume de crawl disproportionné par rapport aux références renvoyées'] },
        ],
      },
    },
    {
      title: 'Gestion des robots d\'indexation IA via robots.txt',
      paragraphs: [
        'Le fichier robots.txt reste le mécanisme principal pour contrôler l\'accès des robots d\'indexation IA. Trois stratégies existent\u00a0:',
      ],
      tableau: {
        caption: 'Stratégies de gestion des robots IA via robots.txt',
        headers: ['Stratégie', 'Configuration robots.txt', 'Conséquence'],
        rows: [
          { cells: ['Accès total', 'Aucune restriction spécifique', 'Tous les robots IA peuvent crawler le site'] },
          { cells: ['Accès sélectif', 'Autoriser certains robots (GPTBot, PerplexityBot), bloquer d\'autres (Bytespider, CCBot)', 'Visibilité sur les moteurs IA choisis, protection contre le crawl massif'] },
          { cells: ['Blocage total', 'Disallow pour tous les robots IA', 'Le site est exclu des réponses génératives de tous les moteurs IA'] },
        ],
      },
      paragraphsAfter: [
        'Le choix entre ces stratégies a un impact direct sur la visibilité multi-moteurs de la marque. Un blocage total élimine la marque des réponses IA. Un accès sélectif permet de contrôler quels moteurs IA peuvent utiliser le contenu.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les crawlers déployés par les opérateurs de moteurs IA' },
      { text: 'Les mécanismes de contrôle d\'accès (robots.txt, en-têtes HTTP)' },
      { text: 'L\'impact du crawl IA sur la visibilité dans les réponses génératives' },
      { text: 'La distinction avec les robots de recherche classiques' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation du contenu pour la citation', link: { slug: 'optimisation-contenu-llm', label: 'Optimisation de contenu pour les LLM' } },
      { text: 'L\'audit de la visibilité IA globale', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'La gestion du crawl budget pour les moteurs de recherche classiques', link: { slug: 'seo-technique', label: 'SEO technique' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'Optimisation de contenu pour les LLM', slug: 'optimisation-contenu-llm' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
  ],
};
