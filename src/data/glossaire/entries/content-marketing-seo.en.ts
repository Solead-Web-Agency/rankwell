/**
 * GLOSSARY — SEO Content Marketing
 * Content strategy aligned with SEO and AI citability
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO Content Marketing: Definition & Framework',
    description: 'SEO content marketing refers to producing content designed to match search intent and meet search engine ranking criteria. Framework, formats, and AI citability.',
  },

  definition: {
    paragraphs: [
      'SEO content marketing refers to the production and distribution of content designed simultaneously to match user search intent and to meet search engine ranking criteria. It combines editorial strategy (topic selection, angle, format) with technical optimization (keywords, heading structure, structured data, internal linking).',
      'Content marketing represents a market estimated at $600 billion in 2024 (Content Marketing Institute). Long-form articles (2,000+ words) generate 3x more organic traffic than short articles (HubSpot, 2023). Google\'s Helpful Content Update (August 2022, September 2023) penalized mass-produced content with no added value.',
    ],
    nucleaire: 'According to Rankwell, SEO content marketing is entering a phase where two production logics coexist: content optimized for clicks (catchy titles, partial answers to force clicks) and content optimized for AI citation (complete answers, verifiable data, self-contained passages). Both logics produce different formats and measure different KPIs. Sites that fail to distinguish between these two goals lose effectiveness on both fronts.',
  },

  cadre: {
    paragraphs: [
      'SEO content marketing sits at the intersection of three disciplines: content strategy (what to publish, for whom, in what order), SEO (how to optimize each piece of content for search engines), and distribution (how to promote content once published). Its effectiveness is measured by visibility metrics (rankings, impressions, organic traffic) and, increasingly, by AI citability metrics (frequency of citation by LLMs, type of mention).',
    ],
  },

  sections: [
    {
      title: 'Content designed for clicks vs content designed for citation',
      paragraphs: [
        'Click-oriented content targets click-through rates in SERPs: engaging titles, persuasive meta descriptions, promises of immediate value. Citation-oriented content targets selection as a source by AI engines: verifiable data, self-contained passages, factual structure, absence of promotional bias.',
      ],
      tableau: {
        caption: 'SEO content (clicks) vs GEO content (citation)',
        headers: ['Criterion', 'SEO content (clicks)', 'GEO content (citation)'],
        rows: [
          { cells: ['Goal', 'Maximize click-through rate in SERPs', 'Be selected as a source by AI engines'] },
          { cells: ['Format', 'Listicles, engaging titles, value promises', 'Precise definitions, tables, self-contained passages'] },
          { cells: ['Quality signal', 'High CTR, time on page', 'Factual accuracy, consensus consistency, verifiable data'] },
          { cells: ['Metric', 'Rankings, impressions, organic traffic', 'Frequency of citation by LLMs, type of mention'] },
          { cells: ['Lifespan', 'Depends on maintaining SERP positions', 'Persists as long as content remains in reference corpora'] },
          { cells: ['Example', '"10 tips to boost your SEO"', 'Comparative table with sourced data and figures'] },
        ],
      },
      paragraphsAfter: [
        'These two approaches are not incompatible, but they are not identical. An article titled "10 tips to boost your SEO" may generate clicks but will rarely be cited by an LLM. An article structured with precise definitions, comparative tables, and sourced figures will be cited by LLMs but may generate a lower CTR in SERPs. SEO content marketing strategy must arbitrate between these two goals based on the page and the targeted intent.',
      ],
    },
    {
      title: 'Pillars of an SEO content marketing strategy',
      items: [
        { label: 'Intent research', description: 'Identify the target audience\'s questions and needs, group intents into topical clusters, prioritize topics by search volume and citability potential.' },
        { label: 'Structured production', description: 'Write each piece of content in a format suited to the intent (guide for informational, comparison for commercial, product page for transactional). Structure passages so they can be extracted independently by an LLM.' },
        { label: 'Technical optimization', description: 'Integrate keywords in strategic positions (H1, H2, first paragraph, URL), implement relevant structured data markup, build internal links toward pillar pages of the content hub.' },
        { label: 'Distribution and amplification', description: 'Acquire topical backlinks, generate citations in third-party sources, update existing content to maintain its relevance.' },
      ],
    },
    {
      title: 'Impact of generative AI on SEO content marketing',
      paragraphs: [
        'AI engines are changing the content marketing value chain. Content that is not cited by LLMs loses a growing share of its potential visibility. The content most cited by AI engines shares common characteristics: proprietary data, self-contained factual passages, clear structure, no filler.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Editorial strategy aligned with search intent' },
      { text: 'Producing content optimized for search engines and LLMs' },
      { text: 'On-page optimization (keywords, structure, structured data)' },
      { text: 'Content planning and prioritization by topical cluster' },
    ],
    neCouvrePas: [
      { text: 'Internal linking architecture', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'External link acquisition', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'Technical site optimization', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'User experience after the click', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'SEO programmatique', slug: 'seo-programmatique' },
  ],
};
