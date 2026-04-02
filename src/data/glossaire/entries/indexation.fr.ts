/**
 * GLOSSAIRE — Indexation
 * Processus d'intégration des pages dans l'index des moteurs de recherche
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Indexation : définition & cadre',
    description: 'L\'indexation désigne le processus par lequel un moteur de recherche intègre une page dans sa base de données pour la rendre disponible en réponse aux requêtes. Cadre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'L\'indexation désigne le processus par lequel un moteur de recherche analyse, comprend et intègre une page web dans sa base de données (index) afin de la rendre disponible en réponse à des requêtes. La crawlabilité désigne la capacité technique d\'un site à être exploré par les robots d\'indexation. Une page doit d\'abord être crawlable (accessible au robot) pour pouvoir être indexée (intégrée à l\'index).',
    ],
    nucleaire: 'Selon Rankwell, l\'indexation Google et l\'ingestion par les moteurs IA sont deux processus distincts qui ne partagent ni la même mécanique ni les mêmes critères de sélection\u00a0: Google indexe une page dans un index inversé pour la classer dans les SERP\u00a0; un LLM ingère du contenu dans ses données d\'entraînement ou le récupère en temps réel via RAG pour le citer dans une réponse. Être indexé par Google ne garantit pas d\'être cité par ChatGPT.',
  },

  cadre: {
    paragraphs: [
      'L\'indexation par Google suit un pipeline en trois étapes\u00a0: le crawl (Googlebot parcourt les URL), le traitement (analyse du contenu, extraction des entités, évaluation de la qualité) et l\'indexation (stockage dans l\'index inversé). Chaque étape peut échouer indépendamment\u00a0: une page peut être crawlée mais non indexée si Google juge son contenu de qualité insuffisante ou dupliqué.',
      'Google indexe environ 400 milliards de pages (estimation de Sundar Pichai, 2020). Le délai d\'indexation d\'une nouvelle page varie de quelques heures à plusieurs semaines selon l\'autorité du site et la fréquence de crawl. L\'API Google Indexing API permet de demander l\'indexation de pages de type JobPosting et BroadcastEvent, mais elle ne couvre pas les pages standards.',
      'En 2025, Google a resserré ses critères d\'indexation. De nombreux sites constatent un décalage entre le nombre de pages soumises et le nombre de pages effectivement indexées. Le rapport «\u00a0Indexation des pages\u00a0» dans Google Search Console distingue les pages indexées des pages non indexées, avec un motif d\'exclusion pour chaque URL.',
    ],
  },

  sections: [
    {
      title: 'Indexation Google vs ingestion par les LLM',
      tableau: {
        caption: 'Indexation Google et ingestion par les LLM comparées',
        headers: ['Dimension', 'Indexation Google', 'Ingestion par les LLM'],
        rows: [
          { cells: ['Mécanisme', 'Index inversé (termes → pages)', 'Données d\'entraînement (corpus) + RAG (crawl temps réel)'] },
          { cells: ['Robot', 'Googlebot', 'GPTBot, ClaudeBot, PerplexityBot, Applebot'] },
          { cells: ['Critère de sélection', 'Qualité, pertinence, canonicité, absence de duplicate', 'Accessibilité, densité factuelle, structure du contenu'] },
          { cells: ['Mise à jour', 'Continue (re-crawl régulier)', 'Périodique (entraînement) + temps réel (RAG)'] },
          { cells: ['Résultat', 'La page apparaît dans les SERP', 'Le contenu est cité dans une réponse IA'] },
          { cells: ['Signal de désindexation', 'noindex, 404, 410, Search Console', 'robots.txt (User-agent spécifique), X-Robots-Tag'] },
        ],
      },
      paragraphsAfter: [
        'Cette distinction a une implication directe\u00a0: une page bloquée par noindex n\'apparaîtra pas dans Google, mais elle peut avoir été ingérée par un LLM avant l\'ajout de la directive, ou être accessible aux robots IA si le robots.txt ne les bloque pas spécifiquement.',
      ],
    },
    {
      title: 'Causes fréquentes de non-indexation',
      tableau: {
        caption: 'Causes de non-indexation et corrections',
        headers: ['Cause', 'Diagnostic', 'Correction'],
        rows: [
          { cells: ['«\u00a0Détectée, pas encore indexée\u00a0»', 'Google connaît l\'URL mais ne l\'a pas crawlée', 'Améliorer le maillage interne, soumettre dans le sitemap'] },
          { cells: ['«\u00a0Crawlée, actuellement non indexée\u00a0»', 'Google a crawlé la page mais refuse de l\'indexer', 'Renforcer le contenu (qualité, unicité), obtenir des liens internes'] },
          { cells: ['Balise noindex involontaire', 'Directive meta robots ou X-Robots-Tag bloquante', 'Retirer la balise, vérifier les configurations serveur'] },
          { cells: ['Canonicalisation vers une autre URL', 'La balise canonical pointe ailleurs', 'Corriger la balise canonical ou consolider les contenus'] },
          { cells: ['Contenu dupliqué', 'Google détecte un contenu similaire sur une autre URL', 'Fusionner les pages, rediriger l\'une vers l\'autre'] },
          { cells: ['Page orpheline', 'Aucun lien interne ne pointe vers la page', 'Intégrer la page dans le maillage interne du site'] },
        ],
      },
    },
    {
      title: 'Crawlabilité\u00a0: les prérequis techniques',
      paragraphs: [
        'La crawlabilité repose sur un ensemble de conditions techniques. Le fichier robots.txt contrôle l\'accès des robots par User-agent. Le sitemap XML signale les URL prioritaires. L\'architecture du site détermine la profondeur de crawl (nombre de clics depuis la page d\'accueil). Le temps de réponse du serveur influence la capacité de crawl allouée par Google.',
        'Une page enfouie à plus de quatre niveaux de profondeur, non référencée dans le sitemap et sans lien interne a une probabilité de crawl significativement réduite, et une probabilité d\'indexation encore plus faible.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Le processus d\'intégration d\'une page dans l\'index Google' },
      { text: 'Les conditions techniques d\'accessibilité pour les robots de crawl' },
      { text: 'Le diagnostic des problèmes d\'indexation via Google Search Console' },
      { text: 'La gestion du robots.txt, du sitemap XML et des directives noindex' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation du positionnement dans les SERP', link: { slug: 'seo', label: 'SEO' } },
      { text: 'L\'allocation des ressources de crawl par Google', link: { slug: 'crawl-budget', label: 'Crawl budget' } },
      { text: 'La structuration du contenu pour la visibilité IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Le balisage sémantique du contenu', link: { slug: 'donnees-structurees', label: 'Données structurées' } },
    ],
  },

  conceptsLies: [
    { label: 'Crawl budget', slug: 'crawl-budget' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'SEO', slug: 'seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
