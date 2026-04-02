/**
 * GLOSSARY — Crawl Budget
 * Googlebot crawl resource allocation
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Crawl Budget: Definition & Framework',
    description: 'Crawl budget refers to the resources Googlebot allocates to crawling a site over a given period. Factors, optimization and related concepts.',
  },

  definition: {
    paragraphs: [
      'Crawl budget refers to the amount of resources Googlebot allocates to crawling a website over a given period. It results from two combined factors: crawl capacity (the number of simultaneous requests the server can handle without degradation) and crawl demand (the interest Google has in the site\'s URLs based on their popularity, freshness and type).',
    ],
    nucleaire: 'According to Rankwell, crawl budget is a technical SEO concern for Google, but it does not apply to AI crawlers: GPTBot, ClaudeBot and PerplexityBot have no notion of "budget" and crawl whatever they find accessible, without prioritizing URLs by popularity or respecting a self-regulated frequency limit.',
  },

  cadre: {
    paragraphs: [
      'Crawl budget primarily concerns large sites (beyond 10,000 URLs according to Google Search Central, 2024) or sites whose technical architecture generates a high number of accessible URLs (URL parameters, infinite pagination, filter facets). For a site with fewer than 1,000 pages and regularly updated content, crawl budget is generally not a limiting factor.',
      'According to a Screaming Frog analysis (2024) covering 200 e-commerce sites, sites where more than 30% of crawled URLs are parametric duplicates experience 2.4 times slower indexation of their new pages. Gary Illyes (Google, 2023) confirmed that sites with fewer than a few thousand pages are crawled in full, making crawl budget optimization non-priority for these cases.',
      'Google determines crawl priority based on internal signals (page popularity, update frequency, presence in the XML sitemap) and technical signals (server response time, HTTP errors). A page that repeatedly returns 5xx errors will see its crawl frequency decrease.',
    ],
  },

  sections: [
    {
      title: 'Googlebot crawl vs AI crawler crawl',
      tableau: {
        caption: 'Googlebot crawl and AI crawler crawl compared',
        headers: ['Dimension', 'Googlebot', 'AI crawlers (GPTBot, ClaudeBot, PerplexityBot)'],
        rows: [
          { cells: ['Objective', 'Index pages in the Google index', 'Collect content for training or real-time responses'] },
          { cells: ['Budget', 'Yes, limited by server capacity and Google demand', 'No, no documented self-regulated budget mechanism'] },
          { cells: ['Prioritization', 'By popularity, freshness, internal signals', 'By accessibility: crawls what is reachable and allowed'] },
          { cells: ['robots.txt compliance', 'Yes (User-agent: Googlebot)', 'Varies by operator (GPTBot respects robots.txt; not all do)'] },
          { cells: ['JavaScript rendering', 'Yes (via the Web Rendering Service)', 'No, most AI crawlers crawl raw HTML'] },
          { cells: ['Frequency', 'Continuous, modulated by budget', 'Occasional (training) or real-time (RAG)'] },
        ],
      },
      paragraphsAfter: [
        'This distinction is structural: optimizing crawl budget improves Google indexation but has no direct effect on AI engine ingestion. To control AI crawler access, the lever is the robots.txt file (specific directives per User-agent) and <meta name="robots"> tags.',
      ],
    },
    {
      title: 'Crawl budget waste factors',
      tableau: {
        caption: 'Crawl budget waste factors and solutions',
        headers: ['Factor', 'Mechanism', 'Solution'],
        rows: [
          { cells: ['Duplicate parameter pages', 'E-commerce filters generate thousands of URLs with the same content', 'Configure parameters in Google Search Console, canonical tag'] },
          { cells: ['Infinite pagination', 'Googlebot follows pagination links endlessly', 'Limit depth, implement rel="next"/"prev" or block pagination'] },
          { cells: ['Soft 404s', 'Empty pages returning a 200 status instead of 404', 'Return a proper 404 or 410 status code'] },
          { cells: ['Redirect chains', 'Each redirect consumes a crawl request', 'Limit to a single redirect per URL'] },
          { cells: ['Unblocked heavy resources', 'Non-essential CSS, JS and images being crawled', 'Block via robots.txt resources unnecessary for indexation'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Googlebot crawl resource allocation on a website' },
      { text: 'Technical factors influencing crawl frequency and depth' },
      { text: 'Architecture optimization to maximize crawling of strategic pages' },
      { text: 'robots.txt and XML sitemap management to guide the crawl' },
    ],
    neCouvrePas: [
      { text: 'Page indexation (being crawled does not guarantee being indexed)', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'Content quality or page relevance' },
      { text: 'AI crawler content access management', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Page load performance', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
    ],
  },

  conceptsLies: [
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
  ],
};
