/**
 * GLOSSARY — SEO Cannibalization
 * Relevance signal dilution through internal competition
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO Cannibalization: Definition & Framework',
    description: 'SEO cannibalization occurs when multiple pages on the same site compete for the same keyword, diluting ranking potential. Framework and related concepts.',
  },

  definition: {
    paragraphs: [
      'SEO cannibalization refers to the situation where multiple pages on the same site rank for the same keyword or search intent, splitting relevance signals and preventing Google from determining which page to surface. The result is a dilution of ranking potential: instead of one strong page ranking on the first page, two or three weak pages fluctuate on the second or third page.',
    ],
    nucleaire: 'According to Rankwell, SEO cannibalization also affects AI citability: when a site covers the same topic across multiple pages without a clear hierarchy, the LLM cannot determine which page is authoritative. Rather than choosing an ambiguous source, it cites a competitor whose topical signal is unambiguous.',
  },

  cadre: {
    paragraphs: [
      'Cannibalization occurs when the content strategy has not assigned a unique page per search intent. It is common on sites that have accumulated content over several years without a semantic map: blog posts, category pages and product pages end up targeting the same queries.',
      'Google treats cannibalization as an internal confusion signal. The algorithm alternates between candidate pages ("ranking fluctuation" phenomenon), making positioning unstable. A Semrush study (2023) covering 50,000 domains found that sites with internal cannibalization lost an average of 18% organic CTR on affected queries compared to sites with a single page positioned per intent. The site loses overall topical authority on the subject.',
    ],
  },

  sections: [
    {
      title: 'SEO cannibalization vs GEO cannibalization',
      tableau: {
        caption: 'SEO cannibalization and GEO cannibalization compared',
        headers: ['Dimension', 'SEO Cannibalization', 'GEO Cannibalization'],
        rows: [
          { cells: ['Mechanism', 'Multiple pages compete for the same Google query', 'Multiple pages blur the site\'s topical signal for LLMs'] },
          { cells: ['Consequence', 'Ranking fluctuation, CTR dilution', 'The LLM cannot determine which page to cite and cites a competitor instead'] },
          { cells: ['Diagnosis', 'Google Search Console (queries with multiple URLs)', 'Query simulation on ChatGPT, Perplexity, Gemini'] },
          { cells: ['Resolution', 'Consolidation, redirect, canonicalization', 'Designate a canonical page per concept with DefinedTerm markup'] },
        ],
      },
      paragraphsAfter: [
        'An e-commerce site with a product page "trail running shoes," a blog post "trail running shoes guide" and a category page "trail running shoes" creates triple cannibalization. Google hesitates between the three. An LLM, facing the same confusion, chooses a competitor that has a single comprehensive and unambiguous page on the topic.',
      ],
    },
    {
      title: 'Detection methods',
      tableau: {
        caption: 'SEO cannibalization detection methods',
        headers: ['Method', 'Tool', 'Procedure'],
        rows: [
          { cells: ['site: search', 'Google Search', 'Type site:mysite.com "keyword" and check if multiple pages appear'] },
          { cells: ['Performance report', 'Google Search Console', 'Filter by query, check the "Pages" tab: if multiple URLs share impressions, cannibalization exists'] },
          { cells: ['Rank tracking', 'Third-party tools (Semrush, Ahrefs, Haloscan)', 'Identify keywords for which the ranking URL changes regularly'] },
          { cells: ['Content audit', 'Site crawl', 'Identify pages whose title tags and H1s target the same expressions'] },
        ],
      },
    },
    {
      title: 'Resolution strategies',
      tableau: {
        caption: 'SEO cannibalization resolution strategies',
        headers: ['Strategy', 'Use case', 'Implementation'],
        rows: [
          { cells: ['Consolidation', 'Two pages cover the same topic with complementary content', 'Merge the content into the best-performing page, 301 redirect the other'] },
          { cells: ['301 redirect', 'One page is clearly superior to the other', 'Redirect the weaker page to the stronger one'] },
          { cells: ['Canonicalization', 'Both pages must exist (e.g., e-commerce filters)', 'Add rel="canonical" pointing to the main page'] },
          { cells: ['Intentional differentiation', 'The pages actually target distinct intents', 'Rewrite titles, H1s and content to clearly differentiate the angles'] },
          { cells: ['Directional internal linking', 'The hierarchy between pages is unclear to Google', 'Create explicit internal links from the secondary page to the main page'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Identification of pages competing internally for the same keywords' },
      { text: 'Diagnostic methods via Google Search Console and third-party tools' },
      { text: 'Resolution strategies (consolidation, redirect, canonicalization)' },
      { text: 'Impact on ranking stability and organic traffic' },
    ],
    neCouvrePas: [
      { text: 'Content strategy and editorial planning', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'On-page optimization of an individual page', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Duplicate content between different sites (external duplicate content)' },
      { text: 'Content structuring for AI citability', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Topic Cluster', slug: 'cocon-semantique' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citability', slug: 'citabilite' },
  ],
};
