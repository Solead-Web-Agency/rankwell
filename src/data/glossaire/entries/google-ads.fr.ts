/**
 * GLOSSAIRE — Google Ads
 * Plateforme publicitaire Google, campagnes Search/Shopping/Display/PMax
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Google Ads : définition & cadre',
    description: 'Google Ads est la plateforme publicitaire de Google permettant de diffuser des annonces payantes sur Search, Shopping, Display, YouTube et Performance Max.',
  },

  definition: {
    paragraphs: [
      'Google Ads désigne la plateforme publicitaire de Google permettant aux annonceurs de diffuser des annonces payantes sur le réseau de recherche Google, le réseau Display (sites partenaires), YouTube, Gmail, Google Maps et Google Shopping. Lancée en 2000 sous le nom Google AdWords, la plateforme a été renommée Google Ads en 2018. Elle fonctionne sur un modèle d\'enchères en temps réel, principalement au coût par clic (CPC).',
      'Google Ads a généré 307 milliards USD de revenus en 2024, représentant environ 80\u00a0% du revenu total d\'Alphabet (rapport annuel 2024). Le CPC moyen en France est d\'environ 1 à 2 EUR tous secteurs confondus, mais peut dépasser 50 EUR dans des secteurs comme l\'assurance ou le juridique.',
    ],
    nucleaire: 'Selon Rankwell, Google Ads est l\'outil opérationnel du SEA, mais son périmètre d\'influence s\'arrête aux emplacements publicitaires achetés\u00a0: les campagnes Google Ads n\'alimentent ni le Knowledge Graph de Google ni les données d\'entraînement des LLM. Un site invisible en organique mais actif en Ads reste invisible pour ChatGPT et Perplexity. Investir en Google Ads rend visible dans les SERP payantes, pas dans les réponses génératives.',
  },

  cadre: {
    paragraphs: [
      'Google Ads structure ses campagnes par types, chacun correspondant à un réseau de diffusion et à un format d\'annonce spécifique. Le choix du type de campagne dépend de l\'objectif (notoriété, trafic, conversion, vente en ligne) et du secteur d\'activité.',
    ],
    tableau: {
      caption: 'Types de campagnes Google Ads',
      headers: ['Type', 'Réseau de diffusion', 'Format', 'Cas d\'usage'],
      rows: [
        { cells: ['Search', 'Résultats de recherche Google', 'Annonces textuelles (titres + descriptions)', 'Capturer l\'intention de recherche active'] },
        { cells: ['Shopping', 'Onglet Shopping + résultats de recherche', 'Fiches produits avec image, prix, nom du marchand', 'E-commerce, vente en ligne'] },
        { cells: ['Display', 'Sites partenaires du réseau Display Google (2M+ sites)', 'Bannières visuelles, annonces responsives', 'Notoriété, retargeting'] },
        { cells: ['Video', 'YouTube', 'Annonces vidéo (in-stream, bumper, in-feed)', 'Notoriété, considération'] },
        { cells: ['Performance Max', 'Tous les réseaux Google simultanément', 'Multi-format (texte, image, vidéo) généré par l\'IA', 'Maximisation des conversions cross-canal'] },
        { cells: ['Demand Gen', 'YouTube, Discover, Gmail', 'Visuels immersifs', 'Génération de demande, audiences froides'] },
      ],
    },
  },

  sections: [
    {
      title: 'Performance Max et l\'automatisation IA',
      paragraphs: [
        'Performance Max (PMax), lancé en 2021, est le type de campagne le plus automatisé de Google Ads. L\'annonceur fournit des « asset groups » (titres, descriptions, images, vidéos, URL de destination) et Google génère automatiquement les combinaisons d\'annonces les plus performantes, diffusées sur l\'ensemble des réseaux.',
        'En 2025-2026, Google a renforcé la transparence de PMax\u00a0: les rapports par réseau de diffusion sont désormais plus détaillés, et les annonceurs disposent de leviers de contrôle accrus (exclusion de mots-clés au niveau campagne, rapports de termes de recherche élargis). Google a également introduit « AI Max for Search », qui applique les capacités d\'automatisation par intelligence artificielle aux campagnes Search classiques (expansion automatique des termes de recherche, création dynamique d\'annonces).',
      ],
    },
    {
      title: 'Google Ads et AI Overviews',
      paragraphs: [
        'Les AI Overviews de Google affichent des réponses génératives en haut de certaines SERP. Google y insère des emplacements publicitaires lorsque la requête présente une intention commerciale. Les annonces Shopping et Search peuvent apparaître dans le contexte d\'une réponse IA générée par Google, avec la mention « Sponsorisé ».',
        'Ce mécanisme est exclusif à l\'écosystème Google. Les moteurs IA tiers (ChatGPT, Perplexity, Claude) n\'affichent pas d\'annonces Google Ads dans leurs réponses. La visibilité obtenue via Google Ads dans les AI Overviews dépend de l\'éligibilité de la campagne et de la requête, et ne se transfère pas aux autres moteurs IA.',
      ],
    },
    {
      title: 'Métriques clés',
      tableau: {
        caption: 'Métriques clés de Google Ads',
        headers: ['Métrique', 'Définition', 'Utilisation'],
        rows: [
          { cells: ['CPC (Coût par clic)', 'Prix payé pour chaque clic sur l\'annonce', 'Contrôle du coût d\'acquisition de trafic'] },
          { cells: ['CTR (Taux de clic)', 'Clics / Impressions', 'Évaluation de la pertinence de l\'annonce'] },
          { cells: ['Quality Score', 'Note 1-10 attribuée par Google (pertinence, page de destination, CTR attendu)', 'Optimisation du coût et du positionnement'] },
          { cells: ['ROAS (Return on Ad Spend)', 'Revenu généré / Dépense publicitaire', 'Mesure de la rentabilité des campagnes'] },
          { cells: ['Taux de conversion', 'Conversions / Clics', 'Évaluation de l\'efficacité de la page de destination'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La création et la gestion de campagnes publicitaires sur les réseaux Google' },
      { text: 'Les formats Search, Shopping, Display, Video, Performance Max et Demand Gen' },
      { text: 'Le système d\'enchères CPC, CPM et CPA' },
      { text: 'Le ciblage par mots-clés, audiences, emplacements et données démographiques' },
      { text: 'L\'apparition dans les AI Overviews de Google (emplacements sponsorisés)' },
    ],
    neCouvrePas: [
      { text: 'Le positionnement organique dans les résultats Google', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La visibilité dans les réponses des moteurs IA tiers', link: { slug: 'geo', label: 'GEO' } },
      { text: 'La publicité sur les réseaux sociaux (Meta Ads, LinkedIn Ads)' },
      { text: 'La stratégie globale de référencement payant multi-plateformes', link: { slug: 'sea', label: 'SEA' } },
    ],
  },

  conceptsLies: [
    { label: 'SEA', slug: 'sea' },
    { label: 'SEO', slug: 'seo' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Knowledge Graph', slug: 'knowledge-graph' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
  ],
};
