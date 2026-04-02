/**
 * GLOSSAIRE — Knowledge Graph
 * Base de données structurée entités-relations
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Knowledge Graph : définition & cadre',
    description: 'Le Knowledge Graph est une base de données structurée organisant les informations en entités et relations. Rôle dans les SERP, les LLM et la citabilité IA.',
  },

  definition: {
    paragraphs: [
      'Le Knowledge Graph désigne une base de données structurée qui organise les informations sous forme d\'entités (personnes, lieux, marques, concepts) et de relations entre ces entités. Google a introduit son Knowledge Graph en 2012 pour enrichir les résultats de recherche avec des informations factuelles directement affichées dans les SERP, sous forme de Knowledge Panels et d\'encadrés informatifs.',
    ],
    nucleaire: 'Selon Rankwell, le Knowledge Graph est le socle de la citabilité IA\u00a0: les moteurs génératifs citent en priorité les marques dont le graphe d\'entités est riche, cohérent et alimenté par des sources tierces vérifiables.',
  },

  cadre: {
    paragraphs: [
      'Le Knowledge Graph repose sur le principe de la recherche sémantique. Au lieu de faire correspondre des mots-clés à des pages, le moteur identifie les entités présentes dans la requête et les relie aux faits stockés dans son graphe. Une recherche sur « fondateur de Tesla » ne cherche pas les pages contenant ces mots\u00a0: elle résout l\'entité « Tesla » puis suit la relation « fondateur » pour renvoyer « Elon Musk ».',
      'Ce modèle entité-relation est devenu le fondement des réponses automatisées\u00a0: AI Overviews, Featured Snippets et réponses conversationnelles des LLM s\'appuient tous sur des graphes de connaissances pour vérifier et structurer leurs réponses.',
    ],
  },

  sections: [
    {
      title: 'Knowledge Graph Google vs Knowledge Graph de marque',
      paragraphs: [
        'Le terme « Knowledge Graph » recouvre deux réalités distinctes qu\'il est nécessaire de séparer.',
        'Le Knowledge Graph Google est la base de données interne de Google. Lors de son lancement en 2012, il contenait 500 millions d\'entités et 3,5 milliards de faits (Google, 2012). En 2024, il dépasse les 5 milliards d\'entités interconnectées, alimentées par Wikidata, Wikipedia, le Data Commons et les données structurées des sites web. Une marque y figure si Google l\'a identifiée comme entité, ce qui se manifeste par un Knowledge Panel dans les SERP.',
        'Le Knowledge Graph d\'une marque désigne l\'ensemble des entités, attributs et relations que les moteurs (Google et LLM) associent à cette marque. Il ne se limite pas à Google\u00a0: il inclut les informations que ChatGPT, Perplexity ou Gemini « connaissent » sur la marque. Ce graphe se construit à travers le contenu on-site (données structurées, pages factuelles), les sources off-site (articles tiers, annuaires, RP) et la cohérence des informations à travers ces sources.',
        'Une marque peut avoir un Knowledge Panel Google sans que les LLM la citent. Inversement, une marque abondamment mentionnée dans des sources que les LLM ingèrent peut être citée en réponse conversationnelle sans disposer d\'un Knowledge Panel.',
      ],
    },
    {
      title: 'Entités et attributs',
      paragraphs: [
        'Un Knowledge Graph se compose de trois éléments\u00a0:',
      ],
      tableau: {
        caption: 'Éléments constitutifs d\'un Knowledge Graph',
        headers: ['Élément', 'Fonction', 'Exemple'],
        rows: [
          { cells: ['Entité', 'Nœud du graphe, c\'est-à-dire un objet identifiable', '« Rankwell », « GEO », « Paris »'] },
          { cells: ['Attribut', 'Propriété d\'une entité', '« Date de fondation\u00a0: 2018 », « Secteur\u00a0: marketing digital »'] },
          { cells: ['Relation', 'Lien entre deux entités', '« Rankwell → spécialisé en → GEO »'] },
        ],
      },
      paragraphsAfter: [
        'La densité et la précision de ces trois éléments déterminent la profondeur du graphe. Un graphe pauvre (peu d\'attributs, relations vagues) produit des réponses génériques. Un graphe dense (attributs chiffrés, relations explicites) alimente des réponses détaillées et citées.',
      ],
    },
    {
      title: 'Pont GEO\u00a0: le Knowledge Graph comme levier de citabilité IA',
      paragraphs: [
        'Les LLM ne consultent pas le Knowledge Graph Google en temps réel. Ils construisent leur propre représentation des entités à partir des corpus sur lesquels ils sont entraînés et, pour certains (Perplexity, ChatGPT avec browsing), à partir du web en temps réel.',
        'La conséquence pour le GEO est directe\u00a0: enrichir le Knowledge Graph d\'une marque revient à multiplier les points d\'entrée par lesquels un LLM peut la citer. Chaque entité correctement documentée (page dédiée, données structurées, mention dans une source tierce) augmente la probabilité qu\'un moteur IA associe cette marque au sujet correspondant.',
        'Le travail de Knowledge Graph en GEO se distingue du SEO classique sur un point\u00a0: en SEO, l\'objectif est qu\'une page apparaisse dans les résultats. En GEO, l\'objectif est que la marque soit reconnue comme entité légitime sur un sujet, indépendamment d\'une page spécifique.',
      ],
    },
    {
      title: 'Données structurées et Knowledge Graph',
      paragraphs: [
        'Les données structurées (Schema.org) sont le canal technique par lequel un site communique ses entités à Google. Le balisage Organization, Product, Person ou DefinedTerm déclare explicitement les entités et leurs attributs. Sans ce balisage, Google doit les déduire du texte, ce qui est moins fiable.',
        'Pour les LLM, les données structurées jouent un rôle indirect\u00a0: elles sont crawlées par les robots IA (GPTBot, PerplexityBot) et contribuent à structurer les informations que le modèle ingère.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'organisation des informations en entités, attributs et relations' },
      { text: 'Les Knowledge Panels Google et les encadrés informatifs des SERP' },
      { text: 'Les données structurées Schema.org comme canal d\'alimentation du graphe' },
      { text: 'La cartographie des entités associées à une marque par les moteurs IA' },
      { text: 'Le lien entre densité d\'entités et citabilité LLM', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation du positionnement dans les résultats classiques', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La rédaction de contenu optimisé pour les mots-clés', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'La mesure du score de visibilité IA', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'La stratégie d\'acquisition de liens', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'EAV (Entity Attribute Value)', slug: 'eav-entity-attribute-value' },
  ],
};
