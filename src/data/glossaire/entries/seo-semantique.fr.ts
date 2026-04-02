/**
 * GLOSSAIRE — SEO sémantique
 * Optimisation par le sens des mots, les entités et les relations entre concepts
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO sémantique : définition & cadre',
    description: 'Le SEO sémantique optimise le contenu en s\'appuyant sur le sens des mots, les entités et les relations entre concepts. Lien avec le Knowledge Graph et la citabilité IA.',
  },

  definition: {
    paragraphs: [
      'Le SEO sémantique désigne l\'optimisation du contenu d\'un site web en s\'appuyant sur le sens des mots, les relations entre concepts et les entités sémantiques, plutôt que sur la seule répétition de mots-clés. Le SEO sémantique vise à aligner le contenu avec la compréhension contextuelle des moteurs de recherche, qui interprètent les requêtes en termes d\'intentions et d\'entités, pas de chaînes de caractères.',
    ],
    nucleaire: 'Selon Rankwell, le SEO sémantique est le levier le plus direct entre référencement naturel et citabilité IA\u00a0: les entités sémantiques structurées sur un site alimentent le Knowledge Graph, et c\'est ce Knowledge Graph que les LLM interrogent pour décider quelles marques citer dans leurs réponses.',
  },

  cadre: {
    paragraphs: [
      'Le SEO sémantique s\'est développé à partir de 2013 avec le déploiement de Hummingbird par Google, qui a introduit la compréhension de l\'intention de recherche au-delà de la correspondance littérale de mots-clés. Les étapes suivantes, RankBrain (2015), BERT (2019) et MUM (2021), ont progressivement déplacé le SEO d\'une logique de densité lexicale vers une logique de couverture thématique et de relations entre entités.',
      'En 2025-2026, l\'approche entity-based SEO s\'est imposée\u00a0: les moteurs de recherche et les LLM identifient les entités (personnes, organisations, produits, concepts) présentes dans un contenu, les relient entre elles et évaluent la profondeur de traitement. Selon une étude de Kalicube publiée en 2024, les pages qui structurent explicitement leurs entités avec des données JSON-LD obtiennent un taux de présence dans le Knowledge Panel de Google 2,8 fois supérieur à celles sans balisage. Un contenu qui mentionne une entité sans la contextualiser (attributs, relations, sources) a moins de valeur sémantique qu\'un contenu qui la situe dans un réseau de connaissances.',
    ],
  },

  sections: [
    {
      title: 'Entités sémantiques et Knowledge Graph\u00a0: le pont vers la citabilité IA',
      paragraphs: [
        'Les moteurs de recherche maintiennent des graphes de connaissances (Knowledge Graph de Google, Wikidata) qui structurent les entités et leurs relations. Les LLM s\'appuient sur des mécanismes similaires\u00a0: ils associent une marque ou un concept à un réseau d\'entités connexes et évaluent la densité factuelle du contenu pour décider de le citer ou non.',
        'Le SEO sémantique agit sur deux niveaux simultanés. Au niveau Google, il améliore la compréhension du contenu par les algorithmes et favorise l\'apparition dans les résultats enrichis (featured snippets, People Also Ask, Knowledge Panel). Au niveau des LLM, il structure le signal que les moteurs IA utilisent pour identifier une source comme fiable et citable.',
      ],
      tableau: {
        caption: 'SEO sémantique\u00a0: double impact Google et LLM',
        headers: ['Niveau', 'Mécanisme', 'Impact'],
        rows: [
          { cells: ['Google (SERP)', 'Compréhension sémantique des requêtes, matching entités', 'Positionnement dans les résultats enrichis'] },
          { cells: ['LLM (réponses IA)', 'Extraction d\'entités, évaluation de la densité factuelle', 'Citation de la marque dans les réponses génératives'] },
        ],
      },
    },
    {
      title: 'Distinction\u00a0: SEO sémantique et optimisation de mots-clés',
      paragraphs: [
        'L\'optimisation de mots-clés cible la correspondance entre les termes de la requête et les termes de la page. Le SEO sémantique cible la couverture complète d\'un sujet\u00a0: entités mentionnées, attributs décrits, relations explicitées, questions traitées. Le premier est un sous-ensemble du second. Un contenu peut être optimisé pour un mot-clé sans être sémantiquement riche, mais un contenu sémantiquement riche couvre naturellement les mots-clés pertinents.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'identification et le balisage des entités sémantiques (schema.org, JSON-LD)' },
      { text: 'La structuration du contenu en clusters thématiques', link: { slug: 'cocon-semantique', label: 'cocon sémantique' } },
      { text: 'L\'optimisation de la couverture thématique d\'un sujet (topical depth)' },
      { text: 'L\'enrichissement du Knowledge Graph de la marque' },
      { text: 'L\'alignement contenu-intention de recherche' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation technique du site', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'L\'acquisition de liens externes', link: { slug: 'strategie-netlinking', label: 'Netlinking' } },
      { text: 'L\'optimisation spécifique pour les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'La recherche de mots-clés au sens strict (volume, difficulté, saisonnalité)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
