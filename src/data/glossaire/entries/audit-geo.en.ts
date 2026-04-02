/**
 * GLOSSARY — GEO Audit
 * Diagnostic of a brand's visibility in AI engine responses
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'GEO Audit: Definition & Framework',
    description: 'A GEO audit is the structured analysis of a brand\'s visibility in AI engine responses. Components, LLM simulation method, and competitive benchmarking.',
  },

  definition: {
    paragraphs: [
      'A GEO audit is the structured analysis of a brand\'s visibility in AI engine responses, aimed at identifying the strengths, weaknesses, and optimization levers of its presence in generative responses. The GEO audit constitutes the diagnostic phase of any GEO strategy.',
    ],
    nucleaire: 'According to Rankwell, a GEO audit reveals blind spots invisible to an SEO audit. A site can achieve a perfect technical score (fast load times, compliant HTML markup, solid backlink profile) while being absent from the LLMs\' Knowledge Graph, lacking factual density, and never cited in generative responses. The two diagnostics are complementary: one evaluates the site\'s infrastructure, the other evaluates the brand\'s informational reputation.',
  },

  cadre: {
    paragraphs: [
      'The GEO audit falls within the first three steps of the Rankwell GEO Method (Entity Mapping, LLM Simulation, Competitive Benchmark), complemented by on-site and off-site diagnostics. It produces a measurable assessment that feeds the Rankwell GEO Score calculation.',
      'The GEO audit methodology formalized by Rankwell tests 30+ queries representative of the brand\'s thematic territory, submitted to three distinct AI engines (ChatGPT, Perplexity, Gemini). The resulting GEO Score decomposes AI visibility into three weighted dimensions: Informational Universe (IU, 40%), Legitimacy & Citability (LC, 30%), Factual Density (FD, 30%). This scoring is calculated for the audited brand and for each of its competitors, across an identical query panel.',
    ],
    tableau: {
      caption: 'Formalized distinction: SEO audit vs GEO audit',
      headers: ['Criterion', 'SEO Audit', 'GEO Audit'],
      rows: [
        { cells: ['Object', 'The website (pages, architecture, links)', 'The brand and its entities in the AI ecosystem'] },
        { cells: ['Central question', '"Is the site properly indexed and ranked?"', '"Is the brand cited, and how?"'] },
        { cells: ['Primary metric', 'Rankings, crawlability, Core Web Vitals', 'Citation type (0-7), Rankwell GEO Score'] },
        { cells: ['Technical scope', 'Robots.txt, sitemap, speed, HTML markup', 'Structured data, Knowledge Graph entities, AI crawler accessibility'] },
        { cells: ['Content scope', 'Keywords, cannibalization, heading structure', 'Passage-level citability, factual density, self-sufficiency'] },
        { cells: ['Off-site scope', 'Backlink profile, domain authority', 'Third-party sources, mention consistency, presence in AI corpora'] },
        { cells: ['Competition', 'SERPs: who holds the positions?', 'AI responses: who is cited, at what type?'] },
      ],
    },
  },

  sections: [
    {
      title: 'The 5 specific components of a GEO audit',
      paragraphs: [
        'The GEO audit covers five components distinct from those of an SEO audit. Each component uses tools and methods specific to AI visibility analysis.',
      ],
      tableau: {
        caption: 'Components of a GEO audit',
        headers: ['#', 'Component', 'What it measures', 'Deliverable'],
        rows: [
          { cells: ['1', 'LLM simulation', 'Current brand citations across 30+ queries submitted to 3+ AI engines (ChatGPT, Perplexity, Gemini)', 'Mention report per engine, citation type (0-7) per query'] },
          { cells: ['2', 'Knowledge Graph mapping', 'Entities, attributes, and relationships that LLMs associate with the brand', 'Formalized Knowledge Graph (7 systematic entity types + sector-specific entities)'] },
          { cells: ['3', 'Factual density assessment', 'Ratio of verifiable facts per on-site content passage', 'FD score per page, identification of passages without factual data'] },
          { cells: ['4', 'Citable third-party source analysis', 'Presence, consistency, and quality of brand mentions in external sources', 'Source mapping, legitimacy gaps compared to competitors'] },
          { cells: ['5', 'Competitive GEO Score benchmark', 'Comparison of the brand\'s AI visibility to that of its direct competitors', 'Comparative ranking per pillar (IU, LC, FD), quantified gaps'] },
        ],
      },
    },
    {
      title: 'LLM simulation: method',
      paragraphs: [
        'LLM simulation consists of submitting a panel of 30+ queries representative of the brand\'s thematic territory to at least three AI engines, then analyzing the responses to identify whether the brand is cited, at what type (0-7), and in what context. The query panel is built from the entity mapping (component 2), which ensures that tested queries correspond to the brand\'s actual territory, not a generic panel.',
        'The simulation is conducted across at least three AI engines to cover the multi-engine dimension of visibility. The same content can be cited by Perplexity (which systematically references its web sources) and absent from ChatGPT responses (which synthesizes more from its training corpus).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'The state of a brand\'s AI visibility at a given point in time' },
      { text: 'The brand\'s Knowledge Graph as perceived by LLMs' },
      { text: 'Competitive benchmarking on generative responses' },
      { text: 'On-site and off-site evaluation through the lens of citability', link: { slug: 'citabilite', label: 'citability' } },
      { text: 'Calculation of the Rankwell GEO Score', link: { slug: 'geo-score', label: 'Rankwell GEO Score' } },
    ],
    neCouvrePas: [
      { text: 'Traditional technical SEO audit: crawlability, speed, Core Web Vitals', link: { slug: 'audit-seo', label: 'SEO Audit' } },
      { text: 'Execution of identified corrective actions' },
      { text: 'Continuous AI visibility monitoring over time' },
      { text: 'Google AI Overviews-specific analysis (a component of a GEO audit, not its entirety)', link: { slug: 'ai-overviews', label: 'AI Overviews' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Rankwell GEO Method', slug: 'methode-rankwell-geo' },
    { label: 'Rankwell GEO Score', slug: 'geo-score' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'Multi-Engine Visibility', slug: 'visibilite-multi-moteurs' },
  ],
};
