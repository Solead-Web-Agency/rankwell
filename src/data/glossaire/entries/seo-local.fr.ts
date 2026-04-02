/**
 * GLOSSAIRE — SEO local
 * Référencement naturel géolocalisé pour établissements physiques
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO local : définition & cadre',
    description: 'Le SEO local désigne les techniques d\'optimisation visant à améliorer la visibilité d\'un établissement physique dans les résultats de recherche géolocalisés.',
  },

  definition: {
    paragraphs: [
      'Le SEO local désigne l\'ensemble des techniques d\'optimisation visant à améliorer la visibilité d\'un établissement physique (commerce, cabinet, agence) dans les résultats de recherche géolocalisés. Le SEO local couvre l\'optimisation de la fiche Google Business Profile, la gestion des citations locales (annuaires, Pages Jaunes, annuaires sectoriels), les avis clients et les signaux de proximité géographique.',
    ],
    nucleaire: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable\u00a0: ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles (« quel est le meilleur restaurant italien à Lyon\u00a0? »), et ces recommandations s\'appuient sur des signaux différents du pack local de Google\u00a0: entités vérifiables, avis agrégés et mentions sur des sources tierces.',
  },

  cadre: {
    paragraphs: [
      'Le SEO local s\'est structuré autour de Google Business Profile (anciennement Google My Business), qui reste le levier central de la visibilité dans le pack local (les 3 résultats géolocalisés affichés en haut des SERP). Selon Google (Think with Google, 2022), 76\u00a0% des personnes qui effectuent une recherche locale sur leur smartphone visitent un commerce dans les 24 heures, et 28\u00a0% de ces recherches aboutissent à un achat. En 2026, les facteurs de classement local restent stables\u00a0: pertinence (cohérence entre la requête et l\'activité déclarée), distance (proximité géographique), et proéminence (autorité en ligne, avis, citations).',
      'Deux évolutions récentes modifient le paysage. Les Local Services Ads (LSA) de Google s\'étendent à de nouveaux secteurs, créant une couche payante au-dessus du pack local organique. Parallèlement, les taux de clic-to-call depuis les résultats locaux organiques diminuent au profit des interactions directes dans les SERP (itinéraire, horaires, site web sans appel).',
    ],
  },

  sections: [
    {
      title: 'LLM et recherche locale\u00a0: un nouveau canal de recommandation',
      paragraphs: [
        'Les moteurs IA commencent à répondre aux requêtes locales. ChatGPT, lorsqu\'il recommande un établissement, s\'appuie sur trois types de signaux\u00a0: les mentions de l\'établissement dans des sources vérifiables (guides, articles de presse locale, annuaires de référence), la cohérence des informations NAP (Nom, Adresse, Téléphone) à travers les sources, et la densité d\'avis structurés.',
      ],
      tableau: {
        caption: 'Pack local Google vs recommandation LLM',
        headers: ['Signal', 'Pack local Google', 'Recommandation LLM'],
        rows: [
          { cells: ['Google Business Profile', 'Facteur central', 'Non utilisé directement'] },
          { cells: ['Avis Google', 'Facteur majeur', 'Utilisé si accessible au crawl'] },
          { cells: ['Citations annuaires', 'Facteur de proéminence', 'Signal de vérifiabilité'] },
          { cells: ['Mentions presse locale', 'Facteur indirect', 'Signal fort de légitimité'] },
          { cells: ['Données structurées (LocalBusiness)', 'Améliore l\'affichage', 'Facilite l\'extraction d\'entités'] },
        ],
      },
      paragraphsAfter: [
        'Un établissement bien positionné dans Google Maps mais absent des sources tierces vérifiables risque de ne jamais être recommandé par un LLM. Le SEO local en 2026 doit couvrir les deux canaux.',
      ],
    },
    {
      title: 'Les trois piliers du SEO local',
      tableau: {
        caption: 'Piliers du SEO local',
        headers: ['Pilier', 'Actions', 'Impact'],
        rows: [
          { cells: ['Google Business Profile', 'Fiche complète, catégories, photos, posts, Q&A', 'Visibilité dans le pack local et Google Maps'] },
          { cells: ['Citations et cohérence NAP', 'Inscription dans les annuaires, uniformisation des informations', 'Signal de confiance pour Google et les LLM'] },
          { cells: ['Avis et réputation', 'Collecte d\'avis, réponses, monitoring', 'Facteur de classement local et signal de citabilité IA'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'optimisation et la gestion de la fiche Google Business Profile' },
      { text: 'La gestion des citations locales (NAP) sur les annuaires et plateformes tierces' },
      { text: 'La stratégie de collecte et de gestion des avis clients' },
      { text: 'L\'optimisation on-page pour les requêtes géolocalisées (pages locales, balisage LocalBusiness)' },
      { text: 'Le positionnement dans le pack local et Google Maps' },
    ],
    neCouvrePas: [
      { text: 'Le référencement naturel hors dimension géographique', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le référencement multi-pays et multilingue', link: { slug: 'seo-international', label: 'SEO international' } },
      { text: 'Les campagnes Google Ads locales et Local Services Ads', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'optimisation globale de la citabilité IA de la marque', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO international', slug: 'seo-international' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'GEO', slug: 'geo' },
  ],
};
