/**
 * GLOSSARY — Citability
 * A content's ability to be extracted and cited by AI engines
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Citability: Definition & Framework',
    description: 'Citability refers to the ability of content to be selected and cited by an AI engine in its generative responses. Factors, anti-patterns, and citation classification.',
  },

  definition: {
    paragraphs: [
      'Citability refers to the ability of content or a brand to be selected, extracted, and cited by an AI engine in its generative responses. Citability should not be confused with brand awareness: a little-known site with rigorous factual content can be cited before a market leader with promotional content.',
    ],
    nucleaire: 'According to Rankwell, a brand\'s citability by LLMs depends less on its awareness than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
  },

  cadre: {
    paragraphs: [
      'Citability falls within the GEO framework. In traditional SEO, the trust signal relies on backlinks and domain authority. In GEO, the trust signal relies on the content\'s ability to provide an extractable answer, meaning a passage the LLM can isolate, rephrase, and integrate into its response without loss of meaning.',
      'An LLM does not cite a "page." It cites a passage: a paragraph, a table, a sentence. Citability is therefore measured at the passage level, not at the document level.',
    ],
  },

  sections: [
    {
      title: 'Citability and brand awareness: a fundamental distinction',
      paragraphs: [
        'Brand awareness measures recognition of a brand by users and media. Citability measures a content\'s aptitude to be selected by a text generation algorithm. A well-known brand whose site contains only promotional content will have high awareness and low citability.',
        'A little-known brand whose site formalizes methodological frameworks, sourced data, and clear distinctions will have low awareness and high citability.',
        'Awareness influences the probability that an LLM will mention a brand. Citability influences the depth of that mention (Type 1 vs Type 5-7 in the citation classification).',
      ],
    },
    {
      title: 'Citability factors',
      paragraphs: [
        'Citability factors determine the probability that a passage will be extracted by an LLM. They fall into three categories.',
      ],
      tableau: {
        caption: 'Citability factors by category',
        headers: ['Category', 'Factor', 'Impact'],
        rows: [
          { cells: ['Structure', 'Short paragraphs (2-4 sentences)', 'The LLM extracts short passages, not 8-sentence blocks'] },
          { cells: ['Structure', 'Self-contained sentences (understandable out of context)', 'The passage must work standalone, without internal references'] },
          { cells: ['Structure', 'Comparative tables', 'Tables are preferentially extracted over paragraphs'] },
          { cells: ['Content', 'Sourced numerical data', '"16% of queries" beats "a significant share"'] },
          { cells: ['Content', 'Formalized distinctions ("X does this. Y does that.")', 'The most frequently extracted pattern by LLMs'] },
          { cells: ['Content', 'Canonical definitions ("{Concept} refers to...")', 'Citable foundation, first passage extracted'] },
          { cells: ['Trust', 'Verifiable third-party sources', 'A fact cited by 3+ independent sources gains weight'] },
          { cells: ['Trust', 'Structured data (Schema.org)', 'Tagged entities are better understood by AI crawlers'] },
          { cells: ['Trust', 'Thematic consistency of the site (content cluster)', 'A site that covers a topic in depth is perceived as expert'] },
        ],
      },
    },
    {
      title: 'Citation classification (Type 0-7)',
      paragraphs: [
        'Citability produces results of varying quality. The Type 0-7 classification, formalized within the GEO framework, measures this quality across eight levels: from Type 0 (absent from responses) to Type 7 (primary recommendation). Each higher level corresponds to a higher degree of LLM trust in the source.',
        'High-citability content does not guarantee a Type 7 citation. It increases the probability of surpassing Type 2 (contextualized mention) to reach Type 4+ (recommendation or expert source).',
      ],
    },
    {
      title: 'Data on LLM extraction behavior',
      paragraphs: [
        'According to a study by Zhu et al. (Georgia Tech, 2023), LLMs with retrieval-augmented generation (RAG) mechanisms preferentially extract passages of 2 to 4 sentences containing at least one verifiable fact. An analysis by Perplexity Labs (2024) shows that passages containing sourced numerical data have a citation rate 3.2 times higher than passages without quantitative data, across a corpus of 50,000 informational queries.',
      ],
    },
    {
      title: 'Citability anti-patterns',
      tableau: {
        caption: 'Citability anti-patterns',
        headers: ['Anti-pattern', 'Effect on citability', 'Correction'],
        rows: [
          { cells: ['"As we saw above..."', 'Non-self-contained passage, unusable by the LLM', 'Repeat the term, not the internal reference'] },
          { cells: ['"There are several types of..." without naming them', 'Vague, the LLM cannot extract anything', 'Name the types immediately'] },
          { cells: ['Paragraph of 8+ sentences', 'Too long to be extracted as a single passage', '2-4 sentences per paragraph'] },
          { cells: ['Promotional content ("market leader")', 'Filtered by LLMs as non-factual', 'Rephrase with verifiable facts'] },
          { cells: ['Absence of numerical data', 'The passage loses factual density', 'Add one sourced figure per section'] },
          { cells: ['"It depends on the context."', 'Non-answer, the LLM seeks a verdict', 'Provide the 2-3 most common cases'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'The ability of a passage to be extracted and cited by an AI engine' },
      { text: 'The structural, editorial, and trust factors that influence this ability' },
      { text: 'The quality of citations obtained (Type 0-7)' },
      { text: 'Passage-by-passage optimization of existing content' },
    ],
    neCouvrePas: [
      { text: 'The overall measurement of a brand\'s AI visibility', link: { slug: 'geo-score', label: 'Rankwell GEO Score' } },
      { text: 'The full AI presence audit', link: { slug: 'audit-geo', label: 'GEO Audit' } },
      { text: 'Ranking in Google SERPs', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Optimization for short-form answers such as Featured Snippets', link: { slug: 'aeo', label: 'AEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'LLM Content Optimization', slug: 'optimisation-contenu-llm' },
    { label: 'Rankwell GEO Score', slug: 'geo-score' },
    { label: 'Rankwell GEO Method', slug: 'methode-rankwell-geo' },
    { label: 'GEO Audit', slug: 'audit-geo' },
  ],
};
