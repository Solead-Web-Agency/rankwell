/**
 * GLOSSARY — AEO (Answer Engine Optimization)
 * Optimization for direct answers (Featured Snippets, Position 0)
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'AEO (Answer Engine Optimization): Definition & Framework',
    description: 'AEO refers to optimization techniques for direct search engine answers: Featured Snippets, Position 0, and voice assistants. Framework and scope explained.',
  },

  definition: {
    paragraphs: [
      'AEO (Answer Engine Optimization) refers to the set of techniques designed to optimize content so that it is selected as a direct answer by search engines and AI assistants, in short and structured formats: Google Featured Snippets, voice answers, "Position 0" panels. AEO historically predates GEO and developed from 2016 onward with the rise of Featured Snippets.',
    ],
    nucleaire: 'According to Rankwell, AEO relies on an extraction mechanism: the engine isolates an existing passage and displays it as-is. GEO relies on a generation mechanism: the LLM synthesizes multiple sources to produce a new response. This mechanical distinction explains why content that performs well as a Featured Snippet can remain invisible in ChatGPT or Perplexity responses.',
  },

  cadre: {
    paragraphs: [
      'AEO is part of the evolution of search behavior toward direct answers. A user asking a factual question ("What is the capital of Japan?") does not want a list of links: they want an immediate answer. Featured Snippets, Knowledge Panels, and voice assistant responses (Google Assistant, Alexa, Siri) serve this need.',
    ],
    tableau: {
      caption: 'Formalized distinction: AEO vs GEO',
      headers: ['Criterion', 'AEO', 'GEO'],
      rows: [
        { cells: ['Response format', 'Short: single extract (paragraph, list, table)', 'Long: LLM-written response (multiple paragraphs)'] },
        { cells: ['Response source', 'A single selected page', 'Multiple sources synthesized by the LLM'] },
        { cells: ['Target platform', 'Google (Featured Snippet, Position 0), voice assistants', 'AI engines: ChatGPT, Perplexity, Gemini, Claude, AI Overviews'] },
        { cells: ['Selection mechanism', 'Extraction of an existing passage', 'Generation of a new response from sources'] },
        { cells: ['Content strategy', 'Answer a specific question in an extractable format', 'Provide factual, structured, multi-passage content'] },
        { cells: ['Measurement', 'Featured Snippet obtained (yes/no)', 'Citation type (0-7), mention frequency'] },
        { cells: ['Emergence period', '2016 (rise of Featured Snippets)', '2023 (deployment of generative AI engines)'] },
      ],
    },
  },

  sections: [
    {
      title: 'AEO and GEO complementarity',
      paragraphs: [
        'AEO and GEO are not mutually exclusive. Content optimized for AEO (structured question-answer, factual data) has characteristics that also favor citability by LLMs. The difference lies in depth: AEO targets a single extractable passage, while GEO targets content where every passage is potentially citable.',
        'A site that practices AEO without GEO will earn Featured Snippets but will not necessarily be cited by ChatGPT or Perplexity. A site that practices GEO without AEO will be cited by AI engines but will miss Google\'s position zero.',
      ],
    },
    {
      title: 'Market data',
      paragraphs: [
        'According to an Ahrefs study (2023), 12.3% of Google queries trigger a Featured Snippet, making it the most widespread direct answer format in SERPs. Additionally, a Semrush analysis (2024) estimates that question-type queries ("how to," "what is," "why") have a Featured Snippet appearance rate 2.5 times higher than generic queries.',
      ],
    },
    {
      title: 'AEO content types',
      tableau: {
        caption: 'AEO content types',
        headers: ['Type', 'Format', 'Example query'],
        rows: [
          { cells: ['Definition', 'Short paragraph (40-60 words)', '"What is GEO?"'] },
          { cells: ['List', 'Ordered or unordered bullet list', '"Steps of an SEO audit"'] },
          { cells: ['Table', 'Comparative table', '"Difference between SEO and SEA"'] },
          { cells: ['Numeric answer', 'Figure with context', '"Average bounce rate in e-commerce"'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Optimization for Google Featured Snippets (Position 0)' },
      { text: 'Optimization for voice assistant answers' },
      { text: 'Question-answer content structuring' },
      { text: 'FAQ and HowTo Schema.org markup' },
    ],
    neCouvrePas: [
      { text: 'Optimization for long-form AI engine responses', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Visibility optimization across AI engines', link: { slug: 'visibilite-multi-moteurs', label: 'Multi-Engine Visibility' } },
      { text: 'Auditing a brand\'s AI presence', link: { slug: 'audit-geo', label: 'GEO Audit' } },
      { text: 'Traditional organic search beyond Featured Snippets', link: { slug: 'seo', label: 'SEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'LLM Content Optimization', slug: 'optimisation-contenu-llm' },
    { label: 'Citability', slug: 'citabilite' },
  ],
};
