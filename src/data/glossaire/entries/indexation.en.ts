/**
 * GLOSSARY — Indexation
 * The process of integrating pages into search engine indexes
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Indexation: Definition & Framework',
    description: 'Indexation is the process by which a search engine integrates a page into its database to serve it in response to queries. Framework and related concepts.',
  },

  definition: {
    paragraphs: [
      'Indexation refers to the process by which a search engine analyzes, understands, and integrates a web page into its database (index) in order to make it available in response to queries. Crawlability refers to the technical ability of a site to be explored by indexing robots. A page must first be crawlable (accessible to the bot) before it can be indexed (integrated into the index).',
    ],
    nucleaire: 'According to Rankwell, Google indexation and ingestion by AI engines are two distinct processes that share neither the same mechanics nor the same selection criteria: Google indexes a page into an inverted index to rank it in the SERPs; an LLM ingests content into its training data or retrieves it in real time via RAG to cite it in a response. Being indexed by Google does not guarantee being cited by ChatGPT.',
  },

  cadre: {
    paragraphs: [
      'Google indexation follows a three-step pipeline: crawling (Googlebot traverses URLs), processing (content analysis, entity extraction, quality evaluation), and indexation (storage in the inverted index). Each step can fail independently: a page can be crawled but not indexed if Google deems its content to be of insufficient quality or duplicated.',
      'Google indexes approximately 400 billion pages (estimate by Sundar Pichai, 2020). The indexation delay for a new page ranges from a few hours to several weeks depending on the site\'s authority and crawl frequency. The Google Indexing API allows requesting indexation of JobPosting and BroadcastEvent page types, but it does not cover standard pages.',
      'In 2025, Google tightened its indexation criteria. Many sites observe a gap between the number of pages submitted and the number of pages actually indexed. The "Page indexing" report in Google Search Console distinguishes indexed pages from non-indexed pages, with an exclusion reason for each URL.',
    ],
  },

  sections: [
    {
      title: 'Google indexation vs LLM ingestion',
      tableau: {
        caption: 'Google indexation and LLM ingestion compared',
        headers: ['Dimension', 'Google Indexation', 'LLM Ingestion'],
        rows: [
          { cells: ['Mechanism', 'Inverted index (terms → pages)', 'Training data (corpus) + RAG (real-time crawl)'] },
          { cells: ['Bot', 'Googlebot', 'GPTBot, ClaudeBot, PerplexityBot, Applebot'] },
          { cells: ['Selection criteria', 'Quality, relevance, canonicity, absence of duplicate', 'Accessibility, factual density, content structure'] },
          { cells: ['Update frequency', 'Continuous (regular re-crawl)', 'Periodic (training) + real-time (RAG)'] },
          { cells: ['Outcome', 'The page appears in the SERPs', 'The content is cited in an AI response'] },
          { cells: ['De-indexation signal', 'noindex, 404, 410, Search Console', 'robots.txt (specific User-agent), X-Robots-Tag'] },
        ],
      },
      paragraphsAfter: [
        'This distinction has a direct implication: a page blocked by noindex will not appear in Google, but it may have been ingested by an LLM before the directive was added, or it may remain accessible to AI bots if the robots.txt does not specifically block them.',
      ],
    },
    {
      title: 'Common causes of non-indexation',
      tableau: {
        caption: 'Causes of non-indexation and fixes',
        headers: ['Cause', 'Diagnosis', 'Fix'],
        rows: [
          { cells: ['"Discovered, currently not indexed"', 'Google knows the URL but has not crawled it', 'Improve internal linking, submit in the sitemap'] },
          { cells: ['"Crawled, currently not indexed"', 'Google crawled the page but refuses to index it', 'Strengthen content (quality, uniqueness), obtain internal links'] },
          { cells: ['Unintentional noindex tag', 'Blocking meta robots or X-Robots-Tag directive', 'Remove the tag, verify server configurations'] },
          { cells: ['Canonicalization to another URL', 'The canonical tag points elsewhere', 'Fix the canonical tag or consolidate content'] },
          { cells: ['Duplicate content', 'Google detects similar content on another URL', 'Merge pages, redirect one to the other'] },
          { cells: ['Orphan page', 'No internal link points to the page', 'Integrate the page into the site\'s internal linking structure'] },
        ],
      },
    },
    {
      title: 'Crawlability: technical prerequisites',
      paragraphs: [
        'Crawlability relies on a set of technical conditions. The robots.txt file controls bot access by User-agent. The XML sitemap signals priority URLs. Site architecture determines crawl depth (number of clicks from the homepage). Server response time influences the crawl capacity allocated by Google.',
        'A page buried more than four levels deep, not referenced in the sitemap, and without any internal links has a significantly reduced crawl probability, and an even lower indexation probability.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'The process of integrating a page into the Google index' },
      { text: 'Technical accessibility conditions for crawl bots' },
      { text: 'Diagnosing indexation issues via Google Search Console' },
      { text: 'Managing robots.txt, XML sitemap, and noindex directives' },
    ],
    neCouvrePas: [
      { text: 'Optimizing ranking positions in the SERPs', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Google\'s crawl resource allocation', link: { slug: 'crawl-budget', label: 'Crawl budget' } },
      { text: 'Structuring content for AI visibility', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Semantic markup of content', link: { slug: 'donnees-structurees', label: 'Structured data' } },
    ],
  },

  conceptsLies: [
    { label: 'Crawl budget', slug: 'crawl-budget' },
    { label: 'Structured data', slug: 'donnees-structurees' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'SEO', slug: 'seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
