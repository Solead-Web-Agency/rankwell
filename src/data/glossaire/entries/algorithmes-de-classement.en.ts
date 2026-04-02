/**
 * GLOSSARY — Ranking Algorithms
 * Search engine ranking systems
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Ranking Algorithms: Definition & Framework',
    description: 'Ranking algorithms are the automated systems search engines use to order results by relevance. Framework, scope and related concepts.',
  },

  definition: {
    paragraphs: [
      'Ranking algorithms are the automated systems used by search engines to order results by relevance to a query. Google uses multiple interconnected ranking systems (relevance, authority, user experience, freshness) that simultaneously evaluate hundreds of signals to produce a result ordering.',
    ],
    nucleaire: 'According to Rankwell, Google\'s ranking algorithms produce an ordered ranking (position 1, 2, 3...) by weighting hundreds of relative relevance signals. LLMs perform a binary selection of passages to cite (cited or not cited) by evaluating the factual density and verifiability of the content. The first mechanism optimizes relative relevance between competing pages; the second optimizes the absolute reliability of a given passage.',
  },

  cadre: {
    paragraphs: [
      'Google\'s ranking algorithms have evolved in successive layers since 1998. PageRank, patented by Larry Page in 1998, measured a page\'s authority by the number and quality of its incoming links. Google uses over 200 ranking factors (a figure stated by Matt Cutts in 2009, still cited as a reference).',
      'The Panda (2011), Penguin (2012), Hummingbird (2013), RankBrain (2015) and BERT (2019) updates progressively shifted the dominant criterion from link authority to semantic understanding of the query and content.',
    ],
  },

  sections: [
    {
      title: 'The main signal families',
      paragraphs: [
        'Modern ranking algorithms rely on four signal families that interact simultaneously.',
      ],
      tableau: {
        caption: 'The four ranking signal families',
        headers: ['Family', 'Primary signals', 'Objective'],
        rows: [
          { cells: ['Relevance', 'Semantic query-content match, entities, context', 'Does the content answer the question?'] },
          { cells: ['Authority', 'Backlinks, mentions, E-E-A-T, author expertise', 'Is the source trustworthy?'] },
          { cells: ['Experience', 'Core Web Vitals, mobile compatibility, accessibility', 'Is the user experience satisfactory?'] },
          { cells: ['Freshness', 'Publication date, update frequency, topic timeliness', 'Is the content up to date?'] },
        ],
      },
      paragraphsAfter: [
        'Relevance and authority remain the two dominant pillars. Experience and freshness act as tiebreakers when relevance and authority are equivalent across multiple results.',
      ],
    },
    {
      title: 'Core Updates and permanent systems',
      paragraphs: [
        'Google distinguishes core updates (major updates deployed several times a year) from permanent systems (systems active continuously). Core updates adjust the weightings between signal families. Permanent systems, such as the Helpful Content System, spam detection and the reviews system, filter or penalize non-compliant content in real time.',
        'The December 2025 Core Update strengthened the weight of E-E-A-T signals, particularly for YMYL (Your Money Your Life) queries, and accelerated the integration of AI Overviews into results. The March 2024 spam update de-indexed hundreds of low-quality AI content sites, confirming Google\'s prioritization of source reliability.',
      ],
    },
    {
      title: 'How LLMs select their sources',
      paragraphs: [
        'LLMs do not rank results. They select passages to integrate into their responses. This selection relies on criteria different from Google ranking: passage factuality, consistency with other available sources, information density and format citability (short passages, verifiable facts, structured data).',
        'A site ranking #1 on Google is not automatically the source cited by ChatGPT or Perplexity. LLMs may prefer a lower-ranked source whose content is more factual, more structured and more extractable. Google ranking and LLM source selection partially overlap (authority and relevance signals play a role in both), but the mechanisms are fundamentally distinct.',
      ],
      tableau: {
        caption: 'Google ranking algorithms and LLM source selection',
        headers: ['Criterion', 'Ranking algorithms (Google)', 'Source selection (LLMs)'],
        rows: [
          { cells: ['Output', 'Ordered list of pages', 'Passages integrated into a response'] },
          { cells: ['Unit', 'Web page', 'Passage (paragraph, table, sentence)'] },
          { cells: ['Dominant signal', 'Relevance + authority', 'Factuality + inter-source consistency'] },
          { cells: ['Ranking visibility', 'Visible position (1, 2, 3...)', 'No visible ranking'] },
          { cells: ['Control', 'On-page and off-page optimization', 'Content structuring and citability'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Search engine ranking systems (Google, Bing)' },
      { text: 'Signal families (relevance, authority, experience, freshness)' },
      { text: 'Core updates and permanent ranking systems' },
      { text: 'The distinction between engine ranking and AI source selection' },
    ],
    neCouvrePas: [
      { text: 'Technical site optimization for search engines', link: { slug: 'seo', label: 'SEO' } },
      { text: 'E-E-A-T quality evaluation criteria', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'Optimization for LLM generative responses', link: { slug: 'geo', label: 'GEO' } },
      { text: 'How TF-IDF and statistical metrics work', link: { slug: 'tf-idf-term-frequency-inverse-document-frequency', label: 'TF-IDF' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'GEO', slug: 'geo' },
    { label: 'TF-IDF', slug: 'tf-idf-term-frequency-inverse-document-frequency' },
  ],
};
