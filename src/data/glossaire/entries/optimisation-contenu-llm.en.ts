/**
 * GLOSSARY — LLM Content Optimization
 * Editorial and structural practices to maximize citability by AI engines
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'LLM Content Optimization: Definition & Framework',
    description: 'LLM content optimization encompasses the editorial practices aimed at increasing content citability by AI engines. Principles, checklist, and anti-patterns.',
  },

  definition: {
    paragraphs: [
      'LLM content optimization refers to the set of editorial and structural practices aimed at increasing a content\'s citability by the language models (LLMs) that power AI engines. It focuses on how a text is written, structured, and enriched with factual data to maximize the probability that an LLM will extract, rephrase, and cite it in its responses.',
    ],
    nucleaire: 'According to Rankwell, LLM content optimization operates at a different granularity than SEO optimization. An LLM does not read a page like Google: it does not evaluate the title, H1, keyword density, and internal linking as a coherent whole. It extracts individual passages (a paragraph, a table row, a definition) and integrates them into its response. Optimizing for LLMs means optimizing at the passage level, not at the page level.',
  },

  cadre: {
    paragraphs: [
      'LLM content optimization falls within the operational scope of GEO. Once the GEO audit is completed and actions are identified, content optimization translates these actions into concrete editorial changes.',
      'According to the reference study by Aggarwal et al. (2023, Georgia Tech, Princeton, IIT Delhi, Allen Institute), published under the title "GEO: Generative Engine Optimization," adding citations and verifiable statistics to content improves its visibility in generative engines by 30 to 40%. Structured content (lists, tables) is extracted approximately twice as often as unstructured prose in LLM responses.',
    ],
  },

  sections: [
    {
      title: 'Distinction: LLM optimization vs on-page SEO optimization',
      paragraphs: [
        'On-page SEO optimization targets the entire page: title, H1, keyword density, internal links. LLM content optimization targets the individual passage: a paragraph, a table row, a definition. The former reasons in positionable pages. The latter reasons in citable passages.',
        'The two are not contradictory. Content optimized for LLMs is also well-structured content for SEO. The operational difference lies in the unit of optimization: one works on the document, the other works on the extractable fragment.',
      ],
    },
    {
      title: 'Writing principles for citability',
      tableau: {
        caption: 'Writing principles for LLM citability',
        headers: ['Principle', 'Application', 'Effect on citability'],
        rows: [
          { cells: ['Passage self-sufficiency', 'Each paragraph is understandable isolated from its context', 'The LLM can extract a single passage and produce a coherent response'] },
          { cells: ['Factual density', 'Each section contains at least one verifiable fact (figure, date, data point)', 'The LLM favors passages that provide concrete information'] },
          { cells: ['Formalized distinctions', '"X does this. Y does that." rather than "X and Y are different"', 'The distinction pattern is the most extracted by LLMs'] },
          { cells: ['Canonical definitions', '"{Concept} refers to {definition}." as the opening', 'The LLM uses the definition as a direct answer'] },
          { cells: ['Short paragraphs', '2-4 sentences maximum', 'Short passages are preferentially extracted over long blocks'] },
          { cells: ['Comparative tables', 'Data structured in rows and columns', 'Tables are preferentially extracted over narrative paragraphs'] },
          { cells: ['Stable vocabulary', 'Use the same term throughout the text, without synonyms', 'The LLM associates the term with the source consistently'] },
        ],
      },
    },
    {
      title: 'Passage-level optimization checklist',
      paragraphs: [
        'Each passage of content intended to be cited by an LLM can be evaluated against five criteria. This grid serves as a quality control tool applied passage by passage, not page by page.',
      ],
      tableau: {
        caption: 'Passage-level optimization checklist',
        headers: ['Criterion', 'Test', 'Compliant example', 'Non-compliant example'],
        rows: [
          { cells: ['Self-sufficiency', 'Is the passage understandable without reading the rest of the page?', '"The GEO Score measures a brand\'s visibility in AI responses across three pillars: IU (40%), LC (30%), FD (30%)."', '"This score, as we saw, is based on three pillars."'] },
          { cells: ['Factual density', 'Does the passage contain at least one verifiable fact (figure, date, proper noun)?', '"According to Aggarwal et al. (2023), adding citations improves visibility in generative engines by 30 to 40%."', '"Several studies show that citations improve visibility."'] },
          { cells: ['Explicit subject', 'Is the passage subject named (no "this," "it," "this method" without a referent)?', '"The Rankwell GEO Method consists of six sequential steps."', '"It consists of six sequential steps."'] },
          { cells: ['Length', 'Is the passage between 2 and 4 sentences?', 'A 3-sentence paragraph with a fact, a framework, and a conclusion.', 'A 9-sentence block mixing context, argument, and examples.'] },
          { cells: ['Format', 'Is the passage declarative (not interrogative, not conditional)?', '"A GEO audit tests 30+ queries across 3 AI engines."', '"How might one test a brand\'s visibility?"'] },
        ],
      },
    },
    {
      title: 'Anti-patterns: what reduces citability',
      tableau: {
        caption: 'LLM citability anti-patterns',
        headers: ['Anti-pattern', 'Why the LLM does not cite', 'Correction'],
        rows: [
          { cells: ['Promotional content ("market leader," "innovative solution")', 'Filtered as non-factual', 'Rephrase with verifiable facts'] },
          { cells: ['Internal references ("as seen previously")', 'Non-self-contained passage', 'Repeat the term rather than the reference'] },
          { cells: ['Vague wording ("several factors influence")', 'The LLM cannot extract anything specific', 'Name the factors immediately'] },
          { cells: ['Absence of numerical data', 'The passage loses factual density', 'Add one sourced figure per section'] },
          { cells: ['Blocks of 8+ sentences', 'Too long to be extracted as a single passage', 'Split into 2-4 sentence paragraphs'] },
          { cells: ['Undefined jargon', 'The LLM cannot rephrase clearly', 'Define each technical term at its first occurrence'] },
          { cells: ['Duplicated or paraphrased content from other sources', 'The LLM already has this information elsewhere', 'Provide an exclusive data point, framework, or distinction'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Editorial principles for passage-level citability', link: { slug: 'citabilite', label: 'citability' } },
      { text: 'Content structuring into self-contained passages' },
      { text: 'Enrichment with factual data and formalized distinctions' },
      { text: 'Identification and correction of citability anti-patterns' },
      { text: 'Passage-by-passage quality control (five-criteria checklist)' },
    ],
    neCouvrePas: [
      { text: 'The overall AI visibility strategy', link: { slug: 'geo', label: 'GEO' } },
      { text: 'AI visibility measurement', link: { slug: 'geo-score', label: 'Rankwell GEO Score' } },
      { text: 'Technical aspects: structured data, AI indexing bots, site architecture', link: { slug: 'robots-ia', label: 'AI indexing bots' } },
      { text: 'Optimization for Featured Snippets', link: { slug: 'aeo', label: 'AEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Citability', slug: 'citabilite' },
    { label: 'GEO', slug: 'geo' },
    { label: 'AEO', slug: 'aeo' },
    { label: 'GEO Audit', slug: 'audit-geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
  ],
};
