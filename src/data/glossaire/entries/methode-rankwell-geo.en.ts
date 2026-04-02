/**
 * GLOSSARY — Rankwell GEO Method
 * Six-step operational framework for auditing and optimizing AI visibility
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Rankwell GEO Method: Definition & Framework',
    description: 'The Rankwell GEO Method is a six-step sequential operational framework for auditing, optimizing, and measuring a brand\'s visibility in AI engines.',
  },

  definition: {
    paragraphs: [
      'The Rankwell GEO Method is the six-step sequential operational framework developed by Rankwell to audit, optimize, and measure a brand\'s visibility in AI engine responses. Each step produces a measurable deliverable that feeds the next step.',
    ],
    nucleaire: 'According to Rankwell, the Rankwell GEO Method stands out from competing approaches through its strict sequentiality: each step depends on the deliverables of the previous one, which prevents premature optimizations and ensures that actions target levers identified by data, not assumptions.',
  },

  cadre: {
    paragraphs: [
      'The Rankwell GEO Method addresses the observation that emerging GEO practices often lack structure. Most agencies apply isolated tactics (writing for LLMs, refining structured data, monitoring citations) without a framework that connects and sequences them. The Rankwell GEO Method formalizes this sequence.',
    ],
  },

  sections: [
    {
      title: 'The 6 sequential steps',
      paragraphs: [
        'Each step has a distinct objective, a measurable deliverable, and a criterion for progressing to the next step. The entire process evaluates over 40 metrics distributed across the three pillars (IU, LC, FD) and produces an action plan classified into four priority levels (P0 to P3).',
      ],
      tableau: {
        caption: 'The 6 steps of the Rankwell GEO Method',
        headers: ['Step', 'Name', 'Objective', 'Deliverable'],
        rows: [
          { cells: ['1', 'Entity mapping', 'Inventory the brand\'s entities known to LLMs', 'Brand Knowledge Graph (entities, attributes, relationships)'] },
          { cells: ['2', 'LLM simulation', 'Measure current visibility across a panel of queries', 'Citation report per AI engine, mention type (Type 0-7)'] },
          { cells: ['3', 'Competitive benchmark', 'Compare the brand\'s visibility to its competitors\'', 'Comparative GEO ranking, gaps per pillar (IU, LC, FD)'] },
          { cells: ['4', 'On-site diagnostic', 'Evaluate the site\'s structure, data, and content', 'Prioritized action list (structure, content, structured data)'] },
          { cells: ['5', 'Off-site diagnostic', 'Evaluate third-party sources and brand mentions', 'Third-party source mapping, legitimacy gaps'] },
          { cells: ['6', 'Scoring and action plan', 'Calculate the Rankwell GEO Score and prioritize actions', 'GEO Score, action plan with P0 to P3 priorities'] },
        ],
      },
    },
    {
      title: 'Sequentiality and dependencies',
      paragraphs: [
        'Step 1 (Entity mapping) conditions Step 2 (LLM simulation), because simulation queries are built from identified entities. Step 2 conditions Step 3 (Benchmark), because the benchmark uses the same queries to compare competitors. This chaining eliminates selection bias: the queries tested are those that correspond to the brand\'s actual territory, not a generic panel.',
        'Step 4 (on-site) and Step 5 (off-site) can be conducted in parallel, but both depend on Step 3, because the gaps identified in the benchmark guide the diagnostics.',
      ],
    },
    {
      title: 'Distinction: sequential method vs one-time audit',
      paragraphs: [
        'A one-time audit photographs the state of AI visibility at a given moment. The Rankwell GEO Method is a structured process that starts from entity mapping and results in a prioritized action plan. The audit is a component of the method (steps 1 to 3), not a synonym.',
      ],
    },
    {
      title: 'Multi-engine coverage',
      paragraphs: [
        'The Rankwell GEO Method integrates the multi-engine dimension from Step 2 onward. The LLM simulation is conducted across at least three distinct AI engines (ChatGPT, Perplexity, Gemini) to identify citation gaps between platforms. The same content can be cited by Perplexity (which systematically references its sources) and absent from ChatGPT responses (which synthesizes more). These gaps guide the actions in Steps 4 and 5.',
      ],
    },
    {
      title: 'The three scoring pillars',
      paragraphs: [
        'The Rankwell GEO Score produced at Step 6 decomposes AI visibility into three measurable pillars:',
      ],
      tableau: {
        caption: 'The three GEO scoring pillars',
        headers: ['Pillar', 'Weight', 'What the method evaluates'],
        rows: [
          { cells: ['Informational Universe (IU)', '40%', 'Number and diversity of brand entities recognized by LLMs'] },
          { cells: ['Legitimacy & Citability (LC)', '30%', 'Quality of third-party sources, consistency of off-site mentions'] },
          { cells: ['Factual Density (FD)', '30%', 'Ratio of verifiable facts per on-site content passage'] },
        ],
      },
      paragraphsAfter: [
        'The on-site diagnostics (Step 4) primarily feed the IU and FD pillars. The off-site diagnostic (Step 5) primarily feeds the LC pillar. This correspondence makes it possible to identify which audit component has the greatest impact on the final score.',
      ],
    },
    {
      title: 'Action priorities',
      paragraphs: [
        'Actions resulting from the Rankwell GEO Method are classified into four priority levels. These levels express the expected impact on the Rankwell GEO Score, not an implementation timeline.',
      ],
      tableau: {
        caption: 'GEO action priority levels',
        headers: ['Priority', 'Criterion'],
        rows: [
          { cells: ['P0', 'Maximum impact on the score, prerequisite for subsequent actions'] },
          { cells: ['P1', 'High impact, achievable independently'] },
          { cells: ['P2', 'Moderate impact, incremental optimization'] },
          { cells: ['P3', 'Low impact, refinement'] },
        ],
      },
    },
    {
      title: 'Distinction: Rankwell GEO Method vs generic GEO approaches',
      paragraphs: [
        'Most GEO approaches on the market in 2025 consist of best-practice checklists applied without hierarchy. The Rankwell GEO Method is a sequential process where data from one step determines the actions of the next. The checklist recommends "optimize structured data." The Rankwell GEO Method first identifies which entities are missing from the Knowledge Graph (Step 1), measures their impact on citations (Step 2), then determines whether structured data is the priority lever or not (Step 4).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'The full audit of a brand\'s AI visibility (Steps 1 to 5)' },
      { text: 'Calculation of the Rankwell GEO Score (Step 6)', link: { slug: 'geo-score', label: 'Rankwell GEO Score' } },
      { text: 'Competitive benchmarking across AI engines' },
      { text: 'Prioritization of GEO actions (P0 to P3)' },
      { text: 'On-site and off-site analysis through the lens of citability', link: { slug: 'citabilite', label: 'citability' } },
    ],
    neCouvrePas: [
      { text: 'Execution of identified actions (writing, development, link building)' },
      { text: 'Traditional technical SEO audit', link: { slug: 'audit-seo', label: 'SEO Audit' } },
      { text: 'Tracking positions in Google SERPs', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Managing advertising campaigns', link: { slug: 'sea', label: 'SEA' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Rankwell GEO Score', slug: 'geo-score' },
    { label: 'GEO Audit', slug: 'audit-geo' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'Multi-Engine Visibility', slug: 'visibilite-multi-moteurs' },
    { label: 'GEO Training', slug: 'formation-geo' },
  ],
};
