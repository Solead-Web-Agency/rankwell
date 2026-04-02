/**
 * GLOSSARY — Local SEO
 * Geolocalized search engine optimization for physical businesses
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Local SEO: Definition & Framework',
    description: 'Local SEO refers to optimization techniques aimed at improving a physical business\'s visibility in geolocalized search results. GBP, citations, and AI.',
  },

  definition: {
    paragraphs: [
      'Local SEO refers to all optimization techniques aimed at improving the visibility of a physical business (store, office, agency) in geolocalized search results. Local SEO covers Google Business Profile optimization, local citation management (directories, Yellow Pages, industry-specific directories), customer reviews, and geographic proximity signals.',
    ],
    nucleaire: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct, measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries ("what is the best Italian restaurant in Lyon?"), and these recommendations rely on different signals than Google\'s local pack: verifiable entities, aggregated reviews, and mentions on third-party sources.',
  },

  cadre: {
    paragraphs: [
      'Local SEO has been structured around Google Business Profile (formerly Google My Business), which remains the central lever for visibility in the local pack (the 3 geolocalized results displayed at the top of SERPs). According to Google (Think with Google, 2022), 76% of people who perform a local search on their smartphone visit a business within 24 hours, and 28% of these searches result in a purchase. In 2026, local ranking factors remain stable: relevance (consistency between the query and the declared activity), distance (geographic proximity), and prominence (online authority, reviews, citations).',
      'Two recent developments are changing the landscape. Google\'s Local Services Ads (LSA) are expanding to new industries, creating a paid layer above the organic local pack. Meanwhile, click-to-call rates from organic local results are declining in favor of direct SERP interactions (directions, hours, website without calling).',
    ],
  },

  sections: [
    {
      title: 'LLMs and local search: a new recommendation channel',
      paragraphs: [
        'AI engines are beginning to respond to local queries. When ChatGPT recommends a business, it relies on three types of signals: mentions of the business in verifiable sources (guides, local press articles, reference directories), consistency of NAP (Name, Address, Phone) information across sources, and density of structured reviews.',
      ],
      tableau: {
        caption: 'Google local pack vs LLM recommendation',
        headers: ['Signal', 'Google local pack', 'LLM recommendation'],
        rows: [
          { cells: ['Google Business Profile', 'Central factor', 'Not directly used'] },
          { cells: ['Google reviews', 'Major factor', 'Used if accessible to crawling'] },
          { cells: ['Directory citations', 'Prominence factor', 'Verifiability signal'] },
          { cells: ['Local press mentions', 'Indirect factor', 'Strong legitimacy signal'] },
          { cells: ['Structured data (LocalBusiness)', 'Improves display', 'Facilitates entity extraction'] },
        ],
      },
      paragraphsAfter: [
        'A business well-positioned in Google Maps but absent from verifiable third-party sources risks never being recommended by an LLM. Local SEO in 2026 must cover both channels.',
      ],
    },
    {
      title: 'The three pillars of local SEO',
      tableau: {
        caption: 'Local SEO pillars',
        headers: ['Pillar', 'Actions', 'Impact'],
        rows: [
          { cells: ['Google Business Profile', 'Complete listing, categories, photos, posts, Q&A', 'Visibility in the local pack and Google Maps'] },
          { cells: ['Citations and NAP consistency', 'Directory registration, information standardization', 'Trust signal for Google and LLMs'] },
          { cells: ['Reviews and reputation', 'Review collection, responses, monitoring', 'Local ranking factor and AI citability signal'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Google Business Profile optimization and management' },
      { text: 'Local citation (NAP) management on directories and third-party platforms' },
      { text: 'Customer review collection and management strategy' },
      { text: 'On-page optimization for geolocalized queries (local pages, LocalBusiness markup)' },
      { text: 'Positioning in the local pack and Google Maps' },
    ],
    neCouvrePas: [
      { text: 'Search engine optimization beyond geographic scope', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Multi-country and multilingual SEO', link: { slug: 'seo-international', label: 'SEO international' } },
      { text: 'Local Google Ads campaigns and Local Services Ads', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Overall brand AI citability optimization', link: { slug: 'geo', label: 'GEO' } },
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
