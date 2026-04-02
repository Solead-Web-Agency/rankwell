/**
 * GLOSSARY — Topical Authority
 * Level of expertise attributed to a site on a given subject
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Topical Authority: Definition & Framework',
    description: 'Topical authority is the level of expertise a search engine attributes to a site on a subject. Construction, measurement for Google and LLMs, key factors.',
  },

  definition: {
    paragraphs: [
      'Topical authority refers to the level of expertise that a search engine or AI engine attributes to a website on a given subject. It is built through the accumulation of relevant content, thematic links, and external recognition signals within the same knowledge domain. A site that covers a subject in both depth and breadth is considered authoritative on that subject.',
    ],
    nucleaire: 'According to Rankwell, topical authority is the measurable outcome of a content strategy, not a technique in itself: a site that publishes 50 pages on a topic without factual depth acquires no thematic authority with AI engines, which evaluate the density of verifiable facts per passage, not the volume of indexed pages.',
  },

  cadre: {
    paragraphs: [
      'Topical authority rests on a simple principle: a search engine trusts a site that covers a subject comprehensively more than a site that publishes a single isolated page on the same subject. This principle applies to Google since quality-focused updates (Panda, Helpful Content, December 2025 Core Update) and applies to LLMs by design: their source selection algorithms favor coherent and deep corpora. A HubSpot study (2023) shows that sites organized in topic clusters achieve on average 3.5 times more organic traffic on their thematic clusters than sites that publish standalone content without a linking structure.',
    ],
  },

  sections: [
    {
      title: 'Topical authority and topic clusters',
      paragraphs: [
        'A topic cluster is a structuring technique that organizes pages and internal links. Topical authority is the result of that structuring combined with other factors. Conflating the two is like confusing training with athletic performance: the former contributes to the latter, but does not guarantee it alone.',
        'A site can have a well-structured topic cluster and weak topical authority (if the content is superficial or if no external source recognizes it). Conversely, a site without a formalized cluster can have strong topical authority (if its content is deep, cited by third parties, and regularly updated).',
      ],
    },
    {
      title: 'Measuring topical authority for Google',
      paragraphs: [
        'For traditional search engines, topical authority is measured through indirect indicators: number of keywords ranked on a thematic cluster, impression volume on the subject\'s queries, number and quality of thematic backlinks, diversity of indexed pages on the topic. No tool provides an official topical authority score, and available metrics (Majestic\'s Topical Trust Flow, Semrush\'s Authority Score) are approximations. A Clearscope analysis (2024) of 500,000 URLs identified a 0.73 correlation between topical coverage (number of sub-topics covered by a domain in a cluster) and average first-page ranking on Google.',
      ],
    },
    {
      title: 'Measuring topical authority for LLMs',
      paragraphs: [
        'For AI engines, topical authority is measured differently. The primary criterion is citation frequency: how often and in what context an LLM cites the site as a source on the topic. Relevant metrics include the citation rate across a panel of thematic queries, the type of citation (simple mention vs recommendation vs expert source), and the consistency of mentions across different LLMs.',
        'A site can have strong topical authority for Google (many backlinks, good rankings) and weak topical authority for LLMs (content too optimized for SEO, not factual enough to be cited). The reverse also exists: an academic site poorly optimized for Google but frequently cited by LLMs for the factual quality of its content.',
      ],
    },
    {
      title: 'Construction factors',
      tableau: {
        caption: 'Topical authority construction factors',
        headers: ['Factor', 'Google Impact', 'LLM Impact'],
        rows: [
          { cells: ['Depth of topical coverage', 'High', 'High'] },
          { cells: ['Structured internal linking (cluster)', 'High', 'Medium (facilitates AI crawl)'] },
          { cells: ['Thematic backlinks', 'High', 'Low (LLMs do not count backlinks)'] },
          { cells: ['Citations in third-party sources', 'Medium', 'High'] },
          { cells: ['Proprietary and original data', 'Medium', 'High'] },
          { cells: ['Regular content updates', 'Medium', 'Medium'] },
          { cells: ['Author/brand recognition', 'Medium', 'High'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Evaluating a site\'s perceived expertise on a subject' },
      { text: 'Building thematic credibility through content' },
      { text: 'Measuring topical authority for Google and LLMs' },
      { text: 'Strategy for topical coverage in depth and breadth' },
    ],
    neCouvrePas: [
      { text: 'Technical structuring of internal linking', link: { slug: 'cocon-semantique', label: 'Topic cluster' } },
      { text: 'Writing and optimizing content', link: { slug: 'content-marketing-seo', label: 'SEO content marketing' } },
      { text: 'Individual E-E-A-T signals for each page', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'Measuring overall visibility in AI engines', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Topic cluster', slug: 'cocon-semantique' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'SEO content marketing', slug: 'content-marketing-seo' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citability', slug: 'citabilite' },
  ],
};
