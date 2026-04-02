/**
 * GLOSSAIRE — Knowledge Panel
 * Encadré d'information structurée dans les SERP Google
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Knowledge Panel : définition & cadre',
    description: 'Le Knowledge Panel est l\'encadré d\'information structurée affiché dans les SERP Google pour une entité identifiée. Facteurs, revendication et lien avec la visibilité IA.',
  },

  definition: {
    paragraphs: [
      'Le Knowledge Panel désigne l\'encadré d\'information structurée qui apparaît dans les résultats de recherche Google lorsqu\'une entité (personne, entreprise, lieu, concept) est identifiée avec certitude dans le Knowledge Graph de Google. Le Knowledge Panel agrège des données provenant de sources multiples (Wikidata, Wikipedia, site officiel, Google Business Profile, sources tierces) et les présente sous forme de fiche synthétique à droite des résultats de recherche sur desktop, ou en position proéminente sur mobile.',
    ],
    nucleaire: 'Selon Rankwell, le Knowledge Panel est un indicateur indirect de citabilité IA. Une entité qui possède un Knowledge Panel a plus de chances d\'être citée par les LLM, non pas parce que les LLM accèdent au Knowledge Graph de Google, mais parce que les mêmes sources publiques qui alimentent le Knowledge Graph (Wikidata, Wikipedia, mentions tierces concordantes) sont aussi celles que les LLM ingèrent dans leurs corpus d\'entraînement. Si un Knowledge Panel existe, les données sous-jacentes sont probablement dans les corpus des LLM.',
  },

  cadre: {
    paragraphs: [
      'Le Knowledge Panel est généré automatiquement par Google à partir de son Knowledge Graph, qui contient plus de 500 milliards de faits sur plus de 5 milliards d\'entités (Google I/O, 2023). Une entité obtient un Knowledge Panel lorsque Google dispose de suffisamment de données concordantes provenant de sources indépendantes pour confirmer son existence et ses attributs (nom, type, description, site officiel, profils sociaux).',
    ],
  },

  sections: [
    {
      title: 'Comment obtenir un Knowledge Panel',
      paragraphs: [
        'L\'obtention d\'un Knowledge Panel n\'est pas un processus de demande directe. Google génère le panel lorsque l\'entité atteint un seuil de notabilité et de cohérence dans les données disponibles.',
      ],
      tableau: {
        caption: 'Facteurs de déclenchement d\'un Knowledge Panel',
        headers: ['Facteur', 'Description', 'Action associée'],
        rows: [
          { cells: ['Présence sur Wikidata', 'L\'entité possède un item Wikidata avec des propriétés renseignées', 'Créer ou enrichir l\'item Wikidata de l\'entité'] },
          { cells: ['Page Wikipedia', 'Un article Wikipedia existe pour l\'entité', 'L\'article doit respecter les critères de notabilité Wikipedia'] },
          { cells: ['Concordance des données', 'Le nom, le type et les attributs sont cohérents à travers les sources', 'NAP cohérent, Schema.org sur le site, profils sociaux alignés'] },
          { cells: ['Données structurées', 'Le site officiel utilise Schema.org (Organization, Person, LocalBusiness)', 'Balisage JSON-LD avec les propriétés clés'] },
          { cells: ['Mentions tierces', 'L\'entité est mentionnée par des sources indépendantes et autoritaires', 'Relations presse, publications sectorielles, annuaires professionnels'] },
          { cells: ['Google Business Profile', 'Pour les entreprises locales, le profil GBP est vérifié et complet', 'Compléter toutes les informations, ajouter des photos, collecter des avis'] },
        ],
      },
    },
    {
      title: 'Revendiquer et optimiser un Knowledge Panel',
      paragraphs: [
        'Google permet aux entités vérifiées de revendiquer leur Knowledge Panel via le processus de vérification de Google Search, disponible depuis 2019. Une fois revendiqué, l\'entité peut suggérer des modifications (correction d\'informations, ajout de profils sociaux, modification de la description). Google n\'est pas tenu d\'accepter ces suggestions\u00a0: le panel reste sous contrôle algorithmique.',
        'Jason Barnard (Kalicube) a formalisé le concept de "digital brand SERP" autour du Knowledge Panel, définissant le panel comme le pivot de la gestion de l\'identité numérique d\'une marque dans les résultats Google.',
      ],
    },
    {
      title: 'Knowledge Panel et AI Overviews',
      paragraphs: [
        'Le Knowledge Panel alimente directement les AI Overviews de Google. Lorsqu\'un utilisateur pose une question sur une entité disposant d\'un Knowledge Panel, les AI Overviews utilisent les données du Knowledge Graph pour structurer leur réponse. Une entité avec un Knowledge Panel riche et exact a plus de chances de voir ses informations reprises correctement dans les réponses génératives de Google.',
        'Ce lien est bidirectionnel\u00a0: les données du Knowledge Graph qui alimentent le Knowledge Panel sont les mêmes que celles utilisées par les systèmes d\'IA de Google pour générer des réponses. Les LLM tiers (ChatGPT, Claude, Perplexity) n\'ont pas accès au Knowledge Graph de Google, mais ils accèdent aux mêmes sources publiques (Wikidata, Wikipedia, sites officiels) qui alimentent ce Knowledge Graph. Une entité bien représentée dans ces sources est donc visible à la fois dans le Knowledge Panel Google et dans les réponses des LLM tiers.',
      ],
    },
    {
      title: 'Knowledge Panel et Knowledge Graph\u00a0: distinction',
      paragraphs: [
        'Le Knowledge Graph est la base de données d\'entités et de relations de Google. Le Knowledge Panel est l\'affichage de surface d\'une entrée de ce graphe. Le Knowledge Graph est invisible pour l\'utilisateur. Le Knowledge Panel est l\'interface visible. Un site peut être présent dans le Knowledge Graph (Google connaît l\'entité) sans déclencher un Knowledge Panel (le seuil de notabilité n\'est pas atteint).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'encadré d\'information structurée dans les résultats Google' },
      { text: 'Les facteurs de déclenchement (notabilité, concordance des données, Wikidata)' },
      { text: 'La procédure de revendication et de suggestion de modifications' },
      { text: 'Le lien avec les AI Overviews et la visibilité IA' },
    ],
    neCouvrePas: [
      { text: 'La construction du Knowledge Graph de Google (système interne non accessible)' },
      { text: 'Le balisage Schema.org en détail', link: { slug: 'donnees-structurees', label: 'Données structurées' } },
      { text: 'L\'optimisation des fiches locales', link: { slug: 'optimisation-de-la-fiche-google-my-business-gmb', label: 'Optimisation Google My Business' } },
      { text: 'Les sitelinks dans les résultats de recherche', link: { slug: 'sitelinks', label: 'Sitelinks' } },
    ],
  },

  conceptsLies: [
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Knowledge Graph', slug: 'knowledge-graph' },
    { label: 'Optimisation Google My Business', slug: 'optimisation-de-la-fiche-google-my-business-gmb' },
    { label: 'Sitelinks', slug: 'sitelinks' },
    { label: 'GEO', slug: 'geo' },
  ],
};
