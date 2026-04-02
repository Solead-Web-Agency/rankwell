/**
 * GLOSSARY — Semantic Coherence
 * Topical alignment across a site's pages
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Semantic Coherence: Definition & Framework',
    description: 'Semantic coherence measures the topical alignment across a site\'s pages. Distinction from keyword density, signals used by Google and LLMs explained.',
  },

  definition: {
    paragraphs: [
      'Semantic coherence refers to the degree of topical alignment across the pages, sections, and content of a website. A semantically coherent site covers its subjects in depth, with a stable vocabulary and logical relationships between pages, without topical digressions or internal contradictions.',
    ],
    nucleaire: 'According to Rankwell, semantic coherence determines whether an LLM treats a site as a specialist source or a generalist source. A site covering five scattered topics will be treated as a lower-tier source on each of them, even if each individual page is of high quality. It is the entire corpus that AI engines evaluate, not the isolated page.',
  },

  cadre: {
    paragraphs: [
      'Semantic coherence falls within the framework of semantic SEO and GEO. Search engines and AI engines evaluate a site not page by page, but as a corpus. The coherence of that corpus -- the fact that pages complement each other, reference each other, and share a stable lexical field -- constitutes a factor of topical authority.',
    ],
  },

  sections: [
    {
      title: 'Semantic coherence and keyword density: a fundamental distinction',
      paragraphs: [
        'Keyword density measures how frequently a term appears within a page. Semantic coherence measures the topical alignment across all pages of a site or cluster. The former is a local metric (one page, one word). The latter is a global metric (one site, one subject).',
      ],
      tableau: {
        caption: 'Keyword density vs semantic coherence',
        headers: ['Criterion', 'Keyword Density', 'Semantic Coherence'],
        rows: [
          { cells: ['Scope', 'Individual page', 'Site or page cluster'] },
          { cells: ['Metric', 'Frequency of a term in the text', 'Topical coverage of the corpus'] },
          { cells: ['Google signal', 'Local relevance (page/query)', 'Topical authority (site/topic)'] },
          { cells: ['LLM signal', 'Weak: a repeated word does not increase confidence', 'Strong: a coherent corpus is treated as a specialist source'] },
          { cells: ['Risk', 'Keyword stuffing, penalization', 'No penalization risk'] },
        ],
      },
      paragraphsAfter: [
        'Repeating a keyword 50 times on a page increases density without improving coherence. Publishing 20 complementary pages on the same subject with natural vocabulary improves coherence without forcing density.',
      ],
    },
    {
      title: 'Semantic coherence signals exploited by search engines',
      tableau: {
        caption: 'Semantic coherence signals and their impact',
        headers: ['Signal', 'Google Impact', 'LLM Impact'],
        rows: [
          { cells: ['Stable lexical field across cluster pages', 'Algorithms identify the covered topic and reinforce the cluster\'s positioning', 'The LLM recognizes specialist vocabulary and increases the source\'s confidence score'] },
          { cells: ['Thematic internal linking', 'Reinforces the cluster signal, distributes internal PageRank', 'The LLM follows internal links to verify the depth of topic coverage'] },
          { cells: ['Recurring entities (people, organizations, concepts)', 'Contributes to topical authority via the Knowledge Graph', 'The LLM associates the site with entities it mentions consistently'] },
          { cells: ['Absence of off-topic content', 'Avoids topical dilution, protects acquired positions', 'The LLM classifies the site as generalist if unrelated topics coexist on the same domain'] },
          { cells: ['Hierarchical structure (pillar page, satellite pages, sub-angles)', 'Engines understand the depth of coverage', 'The LLM identifies the most relevant page for each sub-angle of a query'] },
        ],
      },
    },
    {
      title: 'Impact on AI visibility',
      paragraphs: [
        'LLMs evaluate a source\'s reliability partly through the coherence of its corpus. A site covering SEO, cooking recipes, and cryptocurrency on the same domain sends a diffuse topical signal. A site that exhaustively covers SEO and its sub-domains (technical, content, local, international) sends a specialization signal.',
        'Studies on topical authority (Ahrefs, 2023) show a correlation between a site\'s topical coverage and its average rankings. Google\'s Helpful Content Update (2023) explicitly penalizes sites that publish outside their area of expertise. These two signals converge: AI engines favor specialized sources when selecting passages to cite in their responses.',
        'Semantic coherence also operates at the page level. An article whose introduction discusses local SEO and whose conclusion drifts into SEA presents an internal coherence break that LLMs detect. The extracted passage risks being imprecise or contradictory with the rest of the response.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Topical alignment across a site\'s or cluster\'s pages' },
      { text: 'Lexical field stability throughout the corpus' },
      { text: 'Internal linking as a vector of coherence' },
      { text: 'Evaluating the depth of topic coverage' },
    ],
    neCouvrePas: [
      { text: 'Optimizing an individual page for a keyword', link: { slug: 'seo-semantique', label: 'Semantic SEO' } },
      { text: 'Building internal linking structure', link: { slug: 'cocon-semantique', label: 'Topic cluster' } },
      { text: 'Measuring keyword density (an outdated metric in modern SEO)' },
    ],
  },

  conceptsLies: [
    { label: 'Topic cluster', slug: 'cocon-semantique' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO', slug: 'seo' },
  ],
};
