/**
 * GLOSSARY — Technical SEO
 * Infrastructure and accessibility for search engines and AI crawlers
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Technical SEO: Definition & Framework',
    description: 'Technical SEO refers to infrastructure optimizations that facilitate a site\'s crawl, indexation and ranking by search engines. Framework, scope and related concepts.',
  },

  definition: {
    paragraphs: [
      'Technical SEO refers to all infrastructure optimizations on a website designed to facilitate its crawl, indexation and ranking by search engines. Technical SEO covers server performance, site architecture, HTML markup, URL management and compliance with user experience signals (Core Web Vitals).',
    ],
    nucleaire: 'According to Rankwell, technical SEO in 2026 carries a dual challenge: ensuring site accessibility to traditional indexing crawlers (Googlebot, Bingbot) and to AI engine crawlers (GPTBot, ClaudeBot, PerplexityBot), as these two crawler families have distinct behaviors and their robots.txt directives must be managed separately.',
  },

  cadre: {
    paragraphs: [
      'Technical SEO was long limited to crawl and indexation management. Since 2021, the introduction of Core Web Vitals as a ranking signal has expanded the scope to include load time (LCP), responsiveness (INP since March 2024) and visual stability (CLS).',
      'In 2025-2026, three developments are shaping technical SEO: the replacement of FID by INP, which measures the latency of any user interaction rather than just the first one; the strengthening of HTTPS and security signals; and the emergence of new AI user-agents that crawl sites to feed language models. According to the Chrome UX Report (Google, 2024), only 43% of mobile websites meet the "good" threshold for all three Core Web Vitals simultaneously.',
    ],
  },

  sections: [
    {
      title: 'Google crawl and AI crawler crawl: two distinct mechanisms',
      paragraphs: [
        'Googlebot crawls a site to index its pages in SERPs. GPTBot, ClaudeBot and PerplexityBot crawl a site to feed their knowledge bases or verify information in real time. Both mechanisms use the robots.txt file, but directives must be designed separately.',
      ],
      tableau: {
        caption: 'Google crawl and AI crawler crawl compared',
        headers: ['Criterion', 'Google crawl', 'AI crawler crawl'],
        rows: [
          { cells: ['Objective', 'Index pages in SERPs', 'Feed the model or verify facts'] },
          { cells: ['User-agent', 'Googlebot, Googlebot-Mobile', 'GPTBot, ClaudeBot, PerplexityBot, Applebot'] },
          { cells: ['Frequency', 'Regular, based on crawl budget', 'Variable, often batch-based'] },
          { cells: ['Impact of blocking', 'Page not indexed on Google', 'Content absent from AI responses'] },
          { cells: ['robots.txt signal', 'User-agent: Googlebot', 'User-agent: GPTBot (for example)'] },
        ],
      },
      paragraphsAfter: [
        'Blocking GPTBot in robots.txt prevents OpenAI from using the site\'s content. This decision has a direct cost on ChatGPT visibility. Conversely, allowing AI crawl without structuring the content (structured data, explicit entities) limits how effectively LLMs can exploit the pages.',
      ],
    },
    {
      title: 'Critical technical signals in 2025-2026',
      tableau: {
        caption: 'Technical signals and recommended thresholds',
        headers: ['Signal', 'Metric', 'Recommended threshold'],
        rows: [
          { cells: ['Largest Contentful Paint (LCP)', 'Load time of the largest visible element', '<= 2.5 seconds'] },
          { cells: ['Interaction to Next Paint (INP)', 'Worst user interaction latency', '<= 200 milliseconds'] },
          { cells: ['Cumulative Layout Shift (CLS)', 'Visual stability during loading', '<= 0.1'] },
          { cells: ['HTTPS', 'Valid SSL/TLS certificate', 'Required'] },
          { cells: ['Mobile-friendliness', 'Mobile compatibility (responsive)', 'Mobile-first indexing by default'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Crawl and indexation optimization (robots.txt, XML sitemap, redirect management)', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'Site performance (Core Web Vitals, server response time, caching)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'URL architecture and site structure' },
      { text: 'HTML markup (canonical tags, hreflang, structured data)', link: { slug: 'donnees-structurees', label: 'données structurées' } },
      { text: 'AI crawler management (GPTBot, ClaudeBot) in robots.txt' },
      { text: 'Security (HTTPS, security headers)' },
    ],
    neCouvrePas: [
      { text: 'Content writing and optimization', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'Backlink acquisition', link: { slug: 'strategie-netlinking', label: 'Netlinking' } },
      { text: 'Full site audit including content and authority', link: { slug: 'audit-seo', label: 'Audit SEO' } },
      { text: 'Google Business Profile optimization', link: { slug: 'seo-local', label: 'SEO local' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'SEO Migration', slug: 'migration-seo' },
    { label: 'Comment Spam', slug: 'spam-de-commentaires' },
  ],
};
