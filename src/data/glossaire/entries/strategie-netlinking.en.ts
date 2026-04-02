/**
 * GLOSSARY — Link Building Strategy
 * Backlink acquisition and positioning as a verifiable third-party source
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Link Building Strategy: Definition & Framework',
    description: 'Link building refers to actions aimed at acquiring backlinks from third-party sites. Dual function: PageRank signal for Google and verifiable source for LLMs.',
  },

  definition: {
    paragraphs: [
      'Link building refers to all actions aimed at acquiring inbound hyperlinks (backlinks) from third-party websites to a target site, with the goal of strengthening its domain authority and search engine rankings. Link building constitutes the third pillar of SEO, alongside technical optimization and content.',
    ],
    nucleaire: 'According to Rankwell, link building in 2026 serves two distinct functions that only partially overlap: backlinks act as a trust signal for Google (PageRank), while verifiable third-party sources act as a reliability signal for LLMs. A link from a low-quality directory may pass PageRank without ever being verified by an AI engine, and conversely, an unlinked mention on a reference site may be cited by ChatGPT without passing any PageRank.',
  },

  cadre: {
    paragraphs: [
      'Link building was born with Google\'s PageRank (1998), which models each link as a vote of confidence. Since then, algorithms have evolved: Penguin (2012) penalized artificial links, and successive Core Updates have reinforced the weight of quality and topical relevance of referring domains over raw link volume.',
      'In 2025-2026, Digital PR has established itself as the dominant link building tactic. A Backlinko study (2023) covering 11.8 million Google results confirmed that the number of referring domains remains the strongest correlation factor with first-page rankings. Approaches rely on creating linkable assets (original studies, interactive tools, exclusive data) and digital press relations.',
    ],
  },

  sections: [
    {
      title: 'Backlinks for Google and sources for LLMs: two mechanisms',
      paragraphs: [
        'Google evaluates a link as a trust signal between two pages. LLMs evaluate a source as a factual reliability signal. These two evaluations do not follow the same criteria.',
      ],
      tableau: {
        caption: 'Backlinks (Google) vs third-party sources (LLM)',
        headers: ['Criterion', 'Backlink (Google signal)', 'Third-party source (LLM signal)'],
        rows: [
          { cells: ['Nature', 'HTML hyperlink (dofollow/nofollow)', 'Verifiable mention on a reference site'] },
          { cells: ['Evaluation', 'PageRank, domain authority, anchor text, topical relevance', 'Source reliability, factual consistency, recurrence'] },
          { cells: ['Link required', 'Yes (`<a href>` tag)', 'No (a textual mention suffices)'] },
          { cells: ['Effective example', 'Editorial link from a topical media outlet', 'Brand citation in an industry study'] },
          { cells: ['Ineffective example', 'Link from a generic low-DA directory', 'Mention on a forum with no credibility'] },
        ],
      },
      paragraphsAfter: [
        'An effective link profile in 2026 serves both mechanisms: it generates quality backlinks for Google rankings and positions the brand as a verifiable source in publications that LLMs consider reliable.',
      ],
    },
    {
      title: 'Typology of current link building tactics',
      tableau: {
        caption: 'Link building tactics and their impact',
        headers: ['Tactic', 'Principle', 'Google impact', 'LLM impact'],
        rows: [
          { cells: ['Digital PR', 'Digital press relations, original studies', 'High (high-authority editorial links)', 'High (mentions in verifiable media)'] },
          { cells: ['Guest posting', 'Publishing guest articles on partner sites', 'Medium to high (depends on site quality)', 'Variable (depends on site credibility)'] },
          { cells: ['Linkable assets', 'Creating tools, data, citable studies', 'High (natural links)', 'High (reference content)'] },
          { cells: ['Broken link building', 'Replacing broken links with links to your content', 'Medium', 'Low (purely technical mechanism)'] },
          { cells: ['Directories and listings', 'Registration in industry directories', 'Low to medium', 'Low (sources rarely verified by LLMs)'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Acquiring inbound links (backlinks) from third-party sites' },
      { text: 'Digital PR and digital press relations' },
      { text: 'Creating linkable assets (studies, tools, data)' },
      { text: 'Analyzing and cleaning the link profile (disavowing toxic links)' },
      { text: 'Positioning as a verifiable third-party source for LLMs' },
    ],
    neCouvrePas: [
      { text: 'Internal linking within the site', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'On-page content optimization', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'Technical site optimization', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'Paid advertising and sponsored links', link: { slug: 'sea', label: 'SEA' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
