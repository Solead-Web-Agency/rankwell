/**
 * GLOSSARY — AI Indexing Bots
 * Crawlers deployed by AI engine operators to collect web content
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'AI Indexing Bots: Definition & Framework',
    description: 'AI indexing bots are crawlers deployed by AI engine operators (OpenAI, Anthropic, Perplexity, Google) to collect web content. Mapping and management strategies.',
  },

  definition: {
    paragraphs: [
      'AI indexing bots are the automated programs (crawlers) deployed by AI engine operators (OpenAI, Anthropic, Perplexity, Google, Meta, Apple) to browse and collect website content. This content feeds the training of language models and real-time response generation. AI indexing bots differ from traditional search bots (Googlebot, Bingbot) in their purpose: they do not rank pages in a list of results; they ingest content for an LLM to synthesize.',
    ],
    nucleaire: 'According to Rankwell, AI indexing bots represent the data acquisition layer of GEO: a site invisible to these bots is structurally excluded from generative responses, regardless of its content quality or SEO positioning.',
  },

  cadre: {
    paragraphs: [
      'AI indexing bots are part of the transformation of the web ecosystem. Since 2023, the crawl volume of AI bots has increased massively. According to a Vercel analysis published in 2025, between May 2024 and May 2025, overall crawler traffic increased by 18%, with GPTBot growing 305% and Googlebot 96% over the same period. According to an Originality.ai study from 2024, approximately 35% of the top 1,000 most visited sites block GPTBot in their robots.txt file, and this rate reaches 26% for news sites.',
    ],
  },

  sections: [
    {
      title: 'AI indexing bot mapping (2025)',
      tableau: {
        caption: 'AI indexing bots in 2025',
        headers: ['Bot', 'Operator', 'User-Agent', 'Purpose', 'Real-time web access'],
        rows: [
          { cells: ['GPTBot', 'OpenAI', 'GPTBot', 'Training + ChatGPT response generation', 'Yes (ChatGPT Search)'] },
          { cells: ['OAI-SearchBot', 'OpenAI', 'OAI-SearchBot', 'Real-time web search for ChatGPT', 'Yes'] },
          { cells: ['ClaudeBot', 'Anthropic', 'ClaudeBot', 'Claude model training', 'Limited'] },
          { cells: ['PerplexityBot', 'Perplexity', 'PerplexityBot', 'Real-time response generation', 'Yes'] },
          { cells: ['Google-Extended', 'Google', 'Google-Extended', 'Gemini training (distinct from Googlebot)', 'Via Google\'s index'] },
          { cells: ['Bytespider', 'ByteDance', 'Bytespider', 'AI model training', 'No'] },
          { cells: ['Meta-ExternalAgent', 'Meta', 'Meta-ExternalAgent', 'Meta AI model training', 'No'] },
          { cells: ['Applebot-Extended', 'Apple', 'Applebot-Extended', 'Apple Intelligence training', 'No'] },
          { cells: ['CCBot', 'Common Crawl', 'CCBot', 'Open corpus used by many LLMs', 'No'] },
        ],
      },
    },
    {
      title: 'Distinction: traditional search bots vs AI indexing bots',
      tableau: {
        caption: 'Search bots vs AI indexing bots',
        headers: ['Criterion', 'Search bots (Googlebot, Bingbot)', 'AI indexing bots (GPTBot, ClaudeBot)'],
        rows: [
          { cells: ['Purpose', 'Index pages to rank them in SERPs', 'Collect content for LLM training or real-time generation'] },
          { cells: ['Outcome for the publisher', 'Clickable link in search results', 'Potential citation in a generated response, no guaranteed link'] },
          { cells: ['Crawl frequency', 'Regular, calibrated to crawl budget', 'Variable, often intensive and sporadic'] },
          { cells: ['Robots.txt', 'Respected systematically', 'Respected by most (GPTBot, ClaudeBot) but not by all'] },
          { cells: ['Crawl-to-reference ratio', 'High: each crawled page can generate clicks', 'Low: crawl volume disproportionate to references returned'] },
        ],
      },
    },
    {
      title: 'Managing AI indexing bots via robots.txt',
      paragraphs: [
        'The robots.txt file remains the primary mechanism for controlling AI indexing bot access. Three strategies exist:',
      ],
      tableau: {
        caption: 'AI bot management strategies via robots.txt',
        headers: ['Strategy', 'Robots.txt configuration', 'Consequence'],
        rows: [
          { cells: ['Full access', 'No specific restrictions', 'All AI bots can crawl the site'] },
          { cells: ['Selective access', 'Allow certain bots (GPTBot, PerplexityBot), block others (Bytespider, CCBot)', 'Visibility on chosen AI engines, protection against mass crawling'] },
          { cells: ['Full block', 'Disallow for all AI bots', 'The site is excluded from generative responses of all AI engines'] },
        ],
      },
      paragraphsAfter: [
        'The choice between these strategies has a direct impact on the brand\'s multi-engine visibility. A full block eliminates the brand from AI responses. Selective access allows control over which AI engines can use the content.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Crawlers deployed by AI engine operators' },
      { text: 'Access control mechanisms (robots.txt, HTTP headers)' },
      { text: 'The impact of AI crawling on visibility in generative responses' },
      { text: 'The distinction with traditional search bots' },
    ],
    neCouvrePas: [
      { text: 'Content optimization for citation', link: { slug: 'optimisation-contenu-llm', label: 'LLM Content Optimization' } },
      { text: 'The full AI visibility audit', link: { slug: 'audit-geo', label: 'GEO Audit' } },
      { text: 'Crawl budget management for traditional search engines', link: { slug: 'seo-technique', label: 'Technical SEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Multi-Engine Visibility', slug: 'visibilite-multi-moteurs' },
    { label: 'GEO Audit', slug: 'audit-geo' },
    { label: 'LLM Content Optimization', slug: 'optimisation-contenu-llm' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
  ],
};
