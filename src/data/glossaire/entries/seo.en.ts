/**
 * GLOSSARY — SEO (Search Engine Optimization)
 * Foundational entry — Core pillar of digital visibility
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO (Search Engine Optimization): Definition & Framework',
    description: 'SEO refers to the set of techniques aimed at improving a website\'s visibility in organic search engine results. Framework, scope and related concepts.',
  },

  definition: {
    paragraphs: [
      'SEO (Search Engine Optimization) refers to the set of techniques aimed at improving a website\'s visibility in organic search engine results. SEO encompasses three fundamental pillars: technical (site accessibility and performance), content (relevance and semantic depth) and authority (external trust signals, primarily backlinks).',
    ],
    nucleaire: 'According to Rankwell, SEO is the foundational layer upon which AI citability rests: a site with poor technical performance, weak content and low authority will neither rank on Google nor be cited by an LLM, because both systems evaluate the same trust signals upstream of their respective algorithms.',
  },

  cadre: {
    paragraphs: [
      'SEO became structured from the 2000s around optimization for Google\'s algorithms, which holds 91.4% of the search market share in France according to StatCounter (January 2025). Practices have evolved through three major phases: the keyword stuffing era (2000-2011), the content quality and algorithmic penalty era (2012-2022, with Panda, Penguin, then Core Updates), and the multi-engine visibility era (since 2023), marked by the emergence of Google\'s AI Overviews and generative AI search engines.',
      'In March 2024, Google replaced First Input Delay (FID) with Interaction to Next Paint (INP) in the Core Web Vitals, strengthening the weight of user experience signals. Meanwhile, the Helpful Content updates (2023-2024) repositioned informational value as a central ranking criterion.',
    ],
  },

  sections: [
    {
      title: 'SEO, GEO and AEO: three distinct disciplines',
      paragraphs: [
        'SEO optimizes a site\'s ranking in search engine results pages (SERPs). GEO (Generative Engine Optimization) optimizes a brand\'s citation in AI-generated responses. AEO (Answer Engine Optimization) optimizes visibility in direct answer features (featured snippets, People Also Ask, AI Overviews).',
      ],
      tableau: {
        caption: 'SEO, GEO and AEO compared',
        headers: ['Criterion', 'SEO', 'GEO', 'AEO'],
        rows: [
          { cells: ['Target', 'Organic SERPs', 'Generative responses (LLMs)', 'Direct answer blocks (SERPs)'] },
          { cells: ['Primary metric', 'Position, CTR', 'Citation rate, mention type', 'Zero-position appearance rate'] },
          { cells: ['Primary lever', 'Technical + content + links', 'Structured content + citability', 'Q&A content + structured data'] },
          { cells: ['Engines involved', 'Google, Bing, Yahoo', 'ChatGPT, Perplexity, Gemini, Claude', 'Google (AI Overviews, featured snippets)'] },
        ],
      },
      paragraphsAfter: [
        'These three disciplines are not mutually exclusive. Content structured for SEO, enriched with semantic entities and marked up with structured data, simultaneously serves all three objectives. The distinction lies in strategic intent, not in technical actions.',
      ],
    },
    {
      title: 'The multi-engine visibility era',
      paragraphs: [
        'Since 2024, AI engines represent a growing discovery channel. ChatGPT, Perplexity and Gemini generate responses that recommend brands, services and products by drawing on verifiable third-party sources. A site optimized solely for Google ranking ignores this channel.',
        'Multi-engine visibility integrates classic SERPs, AI Overviews, conversational LLM responses and vertical engine results (YouTube, Amazon, Maps). SEO remains the foundation: without solid technical and semantic groundwork, a site will neither rank well on Google nor be cited by AI engines.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Technical site optimization (crawl, indexation, performance, Core Web Vitals)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'Search engine-oriented content strategy' },
      { text: 'Backlink acquisition and management (link building)' },
      { text: 'On-page optimization (meta tags, heading structure, internal linking)' },
      { text: 'Ranking and organic traffic monitoring' },
    ],
    neCouvrePas: [
      { text: 'Paid search engine advertising', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Specific optimization for generative AI engines', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Social media optimization (SMO)' },
      { text: 'Google Business Profile management for local SEO', link: { slug: 'seo-local', label: 'SEO local' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
    { label: 'Technical SEO', slug: 'seo-technique' },
    { label: 'Semantic SEO', slug: 'seo-semantique' },
    { label: 'Topic Cluster', slug: 'cocon-semantique' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
