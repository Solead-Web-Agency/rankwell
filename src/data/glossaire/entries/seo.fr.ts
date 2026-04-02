/**
 * GLOSSAIRE — SEO (Search Engine Optimization)
 * Entrée fondatrice — Pilier central de la visibilité digitale
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO (Search Engine Optimization) : définition & cadre',
    description: 'Le SEO désigne l\'ensemble des techniques visant à améliorer la visibilité d\'un site dans les résultats organiques des moteurs de recherche. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Le SEO (Search Engine Optimization), ou référencement naturel, désigne l\'ensemble des techniques visant à améliorer la visibilité d\'un site web dans les résultats organiques des moteurs de recherche. Le SEO couvre trois piliers fondamentaux\u00a0: la technique (accessibilité et performance du site), le contenu (pertinence et profondeur sémantique) et la popularité (signaux de confiance externes, principalement les liens entrants).',
    ],
    nucleaire: 'Selon Rankwell, le SEO est la couche fondatrice sur laquelle repose la citabilité IA\u00a0: un site dont la technique, le contenu et la popularité sont défaillants ne sera ni classé par Google, ni cité par un LLM, parce que les deux systèmes évaluent les mêmes signaux de confiance en amont de leurs algorithmes respectifs.',
  },

  cadre: {
    paragraphs: [
      'Le SEO s\'est structuré à partir des années 2000 autour de l\'optimisation pour les algorithmes de Google, qui concentre 91,4\u00a0% des parts de marché de la recherche en France selon StatCounter (janvier 2025). Les pratiques ont évolué en trois phases majeures\u00a0: l\'ère du keyword stuffing (2000-2011), l\'ère de la qualité du contenu et des pénalités algorithmiques (2012-2022, avec Panda, Penguin, puis les Core Updates), et l\'ère de la visibilité multi-moteurs (depuis 2023), marquée par l\'émergence des AI Overviews de Google et des moteurs IA génératifs.',
      'En mars 2024, Google a remplacé le First Input Delay (FID) par l\'Interaction to Next Paint (INP) dans les Core Web Vitals, renforçant le poids des signaux d\'expérience utilisateur. En parallèle, les mises à jour Helpful Content (2023-2024) ont repositionné la valeur ajoutée informationnelle comme critère central de classement.',
    ],
  },

  sections: [
    {
      title: 'SEO, GEO et AEO\u00a0: trois disciplines distinctes',
      paragraphs: [
        'Le SEO optimise le classement d\'un site dans les pages de résultats (SERP) des moteurs de recherche. Le GEO (Generative Engine Optimization) optimise la citation d\'une marque dans les réponses générées par les moteurs IA. L\'AEO (Answer Engine Optimization) optimise l\'apparition dans les fonctionnalités de réponse directe (featured snippets, People Also Ask, AI Overviews).',
      ],
      tableau: {
        caption: 'SEO, GEO et AEO comparés',
        headers: ['Critère', 'SEO', 'GEO', 'AEO'],
        rows: [
          { cells: ['Cible', 'SERP organiques', 'Réponses génératives (LLM)', 'Blocs de réponse directe (SERP)'] },
          { cells: ['Métrique principale', 'Position, CTR', 'Taux de citation, type de mention', 'Taux d\'apparition en position zéro'] },
          { cells: ['Levier principal', 'Technique + contenu + liens', 'Contenu structuré + citabilité', 'Contenu question-réponse + données structurées'] },
          { cells: ['Moteurs concernés', 'Google, Bing, Yahoo', 'ChatGPT, Perplexity, Gemini, Claude', 'Google (AI Overviews, featured snippets)'] },
        ],
      },
      paragraphsAfter: [
        'Ces trois disciplines ne s\'excluent pas. Un contenu structuré pour le SEO, enrichi en entités sémantiques et balisé en données structurées, sert simultanément les trois objectifs. La distinction porte sur l\'intentionnalité stratégique, pas sur les actions techniques.',
      ],
    },
    {
      title: 'L\'ère de la visibilité multi-moteurs',
      paragraphs: [
        'Depuis 2024, les moteurs IA représentent un canal de découverte croissant. ChatGPT, Perplexity et Gemini génèrent des réponses qui recommandent des marques, des services et des produits en s\'appuyant sur des sources tierces vérifiables. Un site optimisé uniquement pour le classement Google ignore ce canal.',
        'La visibilité multi-moteurs intègre les SERP classiques, les AI Overviews, les réponses conversationnelles des LLM et les résultats des moteurs verticaux (YouTube, Amazon, Maps). Le SEO reste le socle\u00a0: sans fondations techniques et sémantiques solides, un site ne sera ni bien classé dans Google, ni cité par les moteurs IA.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'optimisation technique d\'un site (crawl, indexation, performance, Core Web Vitals)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'La stratégie de contenu orientée moteurs de recherche' },
      { text: 'L\'acquisition et la gestion de liens entrants (netlinking)' },
      { text: 'L\'optimisation on-page (balises, structure Hn, maillage interne)' },
      { text: 'Le suivi des positions et du trafic organique' },
    ],
    neCouvrePas: [
      { text: 'La publicité payante sur les moteurs de recherche', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'optimisation spécifique pour les moteurs IA génératifs', link: { slug: 'geo', label: 'GEO' } },
      { text: 'L\'optimisation pour les réseaux sociaux (SMO)' },
      { text: 'La gestion de la fiche Google Business Profile pour le référencement local', link: { slug: 'seo-local', label: 'SEO local' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'SEO sémantique', slug: 'seo-semantique' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
