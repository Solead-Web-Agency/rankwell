/**
 * GLOSSARY — SEA (Search Engine Advertising)
 * Paid search, Google Ads, CPC bidding
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEA (Search Engine Advertising): Definition & Framework',
    description: 'SEA refers to paid advertising on search engines via CPC sponsored links. Framework, SEO/GEO comparison, and scope of search engine advertising.',
  },

  definition: {
    paragraphs: [
      'SEA (Search Engine Advertising) refers to all paid advertising techniques on search engines, primarily via sponsored links displayed at the top and bottom of search result pages. The dominant pricing model is CPC (cost per click): the advertiser only pays when a user clicks on their ad. Google Ads is the main SEA platform, followed by Microsoft Advertising (Bing).',
    ],
    nucleaire: 'According to Rankwell, SEA buys instant visibility in SERPs, but it has zero effect on AI citability: no Google Ads budget, however large, will get a brand cited by ChatGPT or Perplexity. LLMs do not factor in advertising spend when selecting their sources.',
  },

  cadre: {
    paragraphs: [
      'SEA is part of a paid acquisition strategy. According to Statista (2024), global search advertising spend reached $306 billion in 2024, with Google Ads representing approximately 39% market share. Unlike SEO, which aims for lasting organic positioning, SEA produces immediate results but stops generating traffic as soon as the budget is cut.',
      'The mechanism relies on a real-time auction system. For each query, Google evaluates eligible ads by combining the advertiser\'s maximum bid and the Quality Score (ad relevance, landing page quality, expected click-through rate). The top-ranked ad is not necessarily the one with the highest bid.',
    ],
    tableau: {
      caption: 'SEA, SEO, and GEO: three distinct disciplines',
      headers: ['Criterion', 'SEA', 'SEO', 'GEO'],
      rows: [
        { cells: ['Nature', 'Paid advertising', 'Organic optimization', 'Optimization for AI engines'] },
        { cells: ['Cost', 'Direct CPC (media budget)', 'Indirect (content production, technical)', 'Indirect (structuring, data, third-party sources)'] },
        { cells: ['Timeframe', 'Immediate, stops when budget ends', 'Medium/long term, lasting effects', 'Long term, ingestion into AI corpora'] },
        { cells: ['SERP position', 'Header ("Sponsored")', 'Organic results', 'AI Overviews, conversational responses'] },
        { cells: ['LLM impact', 'None', 'Indirect (SEO content can be crawled by AI bots)', 'Direct (content structured for AI citation)'] },
        { cells: ['Primary metric', 'CPC, ROAS, conversion rate', 'Position, organic CTR, traffic', 'Citation rate, mention type'] },
      ],
    },
  },

  sections: [
    {
      title: 'SEA and AI Overviews',
      paragraphs: [
        'Since Google\'s deployment of AI Overviews (2024), ad placements appear within generative responses. Google integrates Search and Shopping ads into AI Overviews when the query has a commercial intent. The format differs from standard SERP ads: the ad is contextualized within the AI-generated response by Google.',
        'This mechanism is specific to Google. Third-party AI engines (ChatGPT, Perplexity, Claude) do not serve ads in the same way. Perplexity experimented with "sponsored follow-up questions" in 2025, but the model remains marginal compared to traditional SEA.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Purchasing sponsored links on search engines (Google Ads, Microsoft Advertising)' },
      { text: 'Search, Shopping, Display, and Performance Max campaigns' },
      { text: 'The CPC auction system and Quality Score' },
      { text: 'ROAS (Return on Ad Spend) and conversion tracking' },
    ],
    neCouvrePas: [
      { text: 'Organic ranking in search results', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Visibility in AI engine responses', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Social media advertising (Social Ads)' },
      { text: 'Operational management of Google Ads campaigns', link: { slug: 'google-ads', label: 'Google Ads' } },
    ],
  },

  conceptsLies: [
    { label: 'Google Ads', slug: 'google-ads' },
    { label: 'SEO', slug: 'seo' },
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
  ],
};
