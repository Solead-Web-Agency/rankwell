/**
 * GLOSSAIRE — SEA (Search Engine Advertising)
 * Référencement payant, Google Ads, enchères CPC
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEA (Search Engine Advertising) : définition & cadre',
    description: 'Le SEA désigne l\'achat d\'espace publicitaire sur les moteurs de recherche via des liens sponsorisés au CPC. Cadre, comparaison SEO/GEO et périmètre.',
  },

  definition: {
    paragraphs: [
      'Le SEA (Search Engine Advertising) désigne l\'ensemble des techniques d\'achat d\'espace publicitaire sur les moteurs de recherche, principalement via des liens sponsorisés affichés en haut et en bas des pages de résultats. Le modèle économique dominant est le CPC (coût par clic)\u00a0: l\'annonceur ne paie que lorsqu\'un utilisateur clique sur son annonce. Google Ads est la plateforme principale du SEA, suivie de Microsoft Advertising (Bing).',
    ],
    nucleaire: 'Selon Rankwell, le SEA achète de la visibilité instantanée dans les SERP, mais il n\'a aucun effet sur la citabilité IA\u00a0: un budget Google Ads, aussi élevé soit-il, ne fera pas citer une marque par ChatGPT ou Perplexity. Les LLM ne tiennent pas compte des investissements publicitaires pour sélectionner leurs sources.',
  },

  cadre: {
    paragraphs: [
      'Le SEA s\'inscrit dans une stratégie d\'acquisition payante. Selon Statista (2024), les dépenses mondiales en search advertising ont atteint 306 milliards de dollars en 2024, dont Google Ads représente environ 39\u00a0% de part de marché. Contrairement au SEO, qui vise un positionnement organique durable, le SEA produit des résultats immédiats mais cesse de générer du trafic dès que le budget est interrompu.',
      'Le mécanisme repose sur un système d\'enchères en temps réel. Pour chaque requête, Google évalue les annonces éligibles en combinant l\'enchère maximale de l\'annonceur et le Quality Score (pertinence de l\'annonce, qualité de la page de destination, taux de clic attendu). L\'annonce la mieux positionnée n\'est pas nécessairement celle qui propose l\'enchère la plus élevée.',
    ],
    tableau: {
      caption: 'SEA, SEO et GEO\u00a0: trois disciplines distinctes',
      headers: ['Critère', 'SEA', 'SEO', 'GEO'],
      rows: [
        { cells: ['Nature', 'Publicité payante', 'Optimisation organique', 'Optimisation pour les moteurs IA'] },
        { cells: ['Coût', 'CPC direct (budget média)', 'Indirect (production de contenu, technique)', 'Indirect (structuration, données, sources tierces)'] },
        { cells: ['Temporalité', 'Immédiat, cesse à l\'arrêt du budget', 'Moyen/long terme, effets durables', 'Long terme, ingestion dans les corpus IA'] },
        { cells: ['Position dans les SERP', 'En-tête (« Sponsorisé »)', 'Résultats organiques', 'AI Overviews, réponses conversationnelles'] },
        { cells: ['Impact sur les LLM', 'Aucun', 'Indirect (le contenu SEO peut être crawlé par les robots IA)', 'Direct (contenu structuré pour la citation IA)'] },
        { cells: ['Métrique principale', 'CPC, ROAS, taux de conversion', 'Position, CTR organique, trafic', 'Taux de citation, type de mention'] },
      ],
    },
  },

  sections: [
    {
      title: 'SEA et AI Overviews',
      paragraphs: [
        'Depuis le déploiement des AI Overviews par Google (2024), des emplacements publicitaires apparaissent au sein des réponses génératives. Google intègre des annonces Search et Shopping dans les AI Overviews lorsque la requête a une intention commerciale. Le format est distinct des annonces SERP classiques\u00a0: l\'annonce est contextualisée dans la réponse IA générée par Google.',
        'Ce mécanisme est propre à Google. Les moteurs IA tiers (ChatGPT, Perplexity, Claude) ne diffusent pas d\'annonces de la même façon. Perplexity a expérimenté des « sponsored follow-up questions » en 2025, mais le modèle reste marginal par rapport au SEA classique.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'achat de liens sponsorisés sur les moteurs de recherche (Google Ads, Microsoft Advertising)' },
      { text: 'Les campagnes Search, Shopping, Display et Performance Max' },
      { text: 'Le système d\'enchères CPC et le Quality Score' },
      { text: 'Le suivi du ROAS (Return on Ad Spend) et des conversions' },
    ],
    neCouvrePas: [
      { text: 'Le référencement naturel dans les résultats organiques', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La visibilité dans les réponses des moteurs IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'La publicité sur les réseaux sociaux (Social Ads)' },
      { text: 'La gestion opérationnelle des campagnes Google Ads', link: { slug: 'google-ads', label: 'Google Ads' } },
    ],
  },

  conceptsLies: [
    { label: 'Google Ads', slug: 'google-ads' },
    { label: 'SEO', slug: 'seo' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
  ],
};
