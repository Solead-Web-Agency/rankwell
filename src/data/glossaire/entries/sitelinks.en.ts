/**
 * GLOSSARY — Sitelinks
 * Additional navigation links in Google SERPs
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Sitelinks: Definition & Framework',
    description: 'Sitelinks are the navigation links displayed below a Google result. Appearance factors, CTR impact, parallel with AI navigability and AI Overviews.',
  },

  definition: {
    paragraphs: [
      'Sitelinks are the additional navigation links that Google displays below the main result of a site in the search engine results pages (SERPs). These links point to internal pages of the site and allow the user to access a relevant section directly without going through the homepage. Sitelinks are generated automatically by Google\'s algorithms. They appear on approximately 30% of branded queries, according to aggregated SERP feature studies.',
    ],
    nucleaire: 'According to Rankwell, sitelinks are not a configurable parameter: optimization does not target the sitelinks themselves, but the architectural signals that trigger them. The structural signals Google uses to generate sitelinks (coherent H1-H2-H3 hierarchy, explicit breadcrumb trail, unambiguous page roles, internal linking from the main navigation) are the same signals that allow AI bots (GPTBot, Googlebot-Extended, ClaudeBot) to efficiently crawl and extract content from a site. A site whose architecture produces sitelinks is a site whose structure is readable by AI crawlers.',
  },

  cadre: {
    paragraphs: [
      'Google generates sitelinks when it considers they will be useful to the user for a given query. Sitelinks appear primarily on branded queries (searching for a site or company name) and navigational queries (the user is looking for a specific site). Google removed the "Demote sitelinks" feature from Google Search Console in 2016, confirming that their generation is entirely algorithmic and not configurable by the webmaster.',
    ],
  },

  sections: [
    {
      title: 'Sitelink appearance factors',
      paragraphs: [
        'Google does not allow forcing sitelink display. However, several structural factors favor their appearance.',
      ],
      tableau: {
        caption: 'Sitelink appearance factors',
        headers: ['Factor', 'Description'],
        rows: [
          { cells: ['Clear architecture', 'Logical hierarchical structure (home, categories, pages)'] },
          { cells: ['Coherent internal linking', 'Main pages are linked from the navigation and content'] },
          { cells: ['Descriptive title tags', 'Each page has a unique and explicit title'] },
          { cells: ['XML sitemap', 'An up-to-date sitemap facilitates understanding of the structure'] },
          { cells: ['Structured data', 'SiteNavigationElement and BreadcrumbList help Google identify the hierarchy'] },
          { cells: ['Traffic and engagement', 'Frequently visited pages are more likely to appear as sitelinks'] },
        ],
      },
    },
    {
      title: 'Factors favoring sitelinks vs factors favoring AI navigability',
      tableau: {
        caption: 'Structural signals for Google sitelinks and AI navigability',
        headers: ['Structural Signal', 'Role for Google Sitelinks', 'Role for AI Navigability'],
        rows: [
          { cells: ['Logical H1-H2-H3 hierarchy', 'Allows Google to identify the main sections of the site', 'Allows AI crawlers to segment content by topic and extract targeted answers'] },
          { cells: ['Breadcrumb trail (BreadcrumbList)', 'Reinforces understanding of each page\'s depth', 'Provides an explicit navigation path that AI bots can follow to contextualize a page'] },
          { cells: ['Unambiguous page roles (one topic per page)', 'Google selects pages with clear roles as sitelinks', 'LLMs cite more easily a page whose topical scope is well-defined'] },
          { cells: ['Main navigation with text links', 'Primary source for sitelink identification', 'Only discovery mechanism for crawlers that do not execute JavaScript'] },
          { cells: ['SiteNavigationElement structured data', 'Explicit structure signal for Google', 'Not directly exploited by GPTBot or ClaudeBot, but interpreted by Googlebot-Extended'] },
          { cells: ['XML sitemap', 'Facilitates discovery of deep pages for sitelinks', 'Used by AI crawlers that follow the sitemaps protocol (Googlebot-Extended, AppleBot)'] },
          { cells: ['Traffic and engagement signals', 'Selection factor for sitelinks', 'Not relevant for AI crawlers, which do not measure user engagement'] },
        ],
      },
    },
    {
      title: 'Impact on CTR',
      paragraphs: [
        'Sitelinks increase the surface area occupied by a result in the SERPs. A result with sitelinks can occupy 4 to 8 lines instead of 2 to 3 for a standard result. This increased visibility improves the click-through rate (CTR) on branded queries. Sitelinks also provide direct access to the most requested pages, reducing the number of clicks needed to reach the information.',
      ],
    },
    {
      title: 'Sitelinks and AI Overviews',
      paragraphs: [
        'In Google\'s AI Overviews, cited sources may be accompanied by links to specific sections of the source site. This mechanism mirrors the sitelinks logic: Google identifies the most relevant internal pages for the query and offers them as direct access points. Google documented in 2024 the ability to use the "site:" operator in AI Overviews, confirming that a domain\'s internal pages can be referenced individually. A site whose architecture is clear enough to generate classic sitelinks also has a higher chance of seeing its internal pages cited individually in AI Overviews.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Additional navigation links below a Google result' },
      { text: 'Structural factors that favor their appearance' },
      { text: 'The parallel between architectural signals for sitelinks and AI navigability' },
      { text: 'Impact on visibility and CTR in the SERPs' },
      { text: 'The connection with AI Overviews and individual internal page citations' },
    ],
    neCouvrePas: [
      { text: 'Optimizing page meta tags', link: { slug: 'seo', label: 'SEO' } },
      { text: 'The Knowledge Panel', link: { slug: 'knowledge-panel', label: 'Knowledge Panel' } },
      { text: 'Building internal linking structure', link: { slug: 'cocon-semantique', label: 'Topic cluster' } },
      { text: 'Advertising link extensions (sitelink extensions in Google Ads)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Topic cluster', slug: 'cocon-semantique' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'Ranking algorithms', slug: 'algorithmes-de-classement' },
    { label: 'Structured data', slug: 'donnees-structurees' },
    { label: 'Indexation', slug: 'indexation' },
  ],
};
