/**
 * GLOSSARY — Rankwell GEO Score
 * Composite AI visibility indicator developed by Rankwell
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Rankwell GEO Score: Definition & Framework',
    description: 'The Rankwell GEO Score measures a brand\'s visibility in AI engine responses. Three pillars (IU, LC, FD), calculation formula, and interpretation scale.',
  },

  definition: {
    paragraphs: [
      'The Rankwell GEO Score is the composite indicator developed by Rankwell to measure a brand\'s visibility in AI engine responses. It aggregates three dimensions (Informational Universe, Legitimacy & Citability, Factual Density) into a score out of 100 that allows comparing a brand to its competitors across the same set of queries.',
    ],
    nucleaire: 'According to Rankwell, the Rankwell GEO Score fills a structural gap in the market: traditional SEO metrics (DA, DR, rankings) do not capture visibility in generative responses, and existing AI monitoring tools measure mention frequency without evaluating their quality or underlying causes.',
  },

  cadre: {
    paragraphs: [
      'The Rankwell GEO Score is calculated at step 6 of the Rankwell GEO Method, after entity mapping, LLM simulation, competitive benchmark, and on-site and off-site diagnostics. The score is not a standalone indicator: it is the result of a structured audit process.',
    ],
  },

  sections: [
    {
      title: 'Calculation formula',
      paragraphs: [
        'The Rankwell GEO Score is the weighted average of three sub-scores, each rated out of 100: GEO Score = (IU x 0.40) + (LC x 0.30) + (FD x 0.30).',
      ],
      tableau: {
        caption: 'Rankwell GEO Score sub-scores',
        headers: ['Sub-score', 'Full name', 'Weight', 'What it measures'],
        rows: [
          { cells: ['IU', 'Informational Universe', '40%', 'Breadth of the thematic territory covered by the brand in the LLMs\' Knowledge Graph'] },
          { cells: ['LC', 'Legitimacy & Citability', '30%', 'Credibility as perceived by LLMs, quality of third-party sources, off-site mentions'] },
          { cells: ['FD', 'Factual Density', '30%', 'Richness in verifiable facts per passage: figures, definitions, entity attributes'] },
        ],
      },
    },
    {
      title: 'Detailed sub-scores',
      paragraphs: [
        'Informational Universe (IU) is calculated from the number of brand entities recognized by LLMs, the diversity of topics covered, and the depth of interlinking between these entities. A high IU means the LLM has a rich and varied model of the brand.',
        'Legitimacy & Citability (LC) is calculated from third-party citations, the presence of exploitable structured data, and the consistency between off-site mentions and on-site content. A high LC means the LLM has reasons to trust the brand as a source.',
        'Factual Density (FD) is calculated from the ratio of verifiable facts per content passage: sourced figures, canonical definitions, documented entity attributes. A high FD means the brand\'s content provides passages directly extractable by the LLM.',
      ],
    },
    {
      title: 'Interpretation scale',
      tableau: {
        caption: 'Rankwell GEO Score interpretation scale',
        headers: ['Range', 'Level', 'Interpretation'],
        rows: [
          { cells: ['0-30', 'Invisible', 'The brand is absent or marginal in AI responses'] },
          { cells: ['31-50', 'Emerging', 'The brand appears occasionally, Type 1-2 citations'] },
          { cells: ['51-65', 'Follower', 'The brand is cited regularly but not in a reference position'] },
          { cells: ['66-80', 'Established', 'The brand obtains Type 4-5 citations on its core topics'] },
          { cells: ['81-100', 'Reference', 'The brand is the priority source cited by LLMs on its territory'] },
        ],
      },
    },
    {
      title: 'Distinction: GEO Score vs SEO metrics',
      paragraphs: [
        'The Rankwell GEO Score does not replace SEO metrics. It measures a different dimension of visibility.',
      ],
      tableau: {
        caption: 'Rankwell GEO Score vs SEO metrics',
        headers: ['Metric', 'What it measures', 'Limitations in a GEO context'],
        rows: [
          { cells: ['Domain Authority (DA/DR)', 'Link profile strength', 'Does not predict citability by LLMs'] },
          { cells: ['SERP position', 'Ranking in Google results', 'Does not capture citations in AI responses'] },
          { cells: ['Organic traffic', 'Volume of visits from search engines', 'Does not measure zero-click mentions'] },
          { cells: ['Rankwell GEO Score', 'Visibility in generative responses', 'Does not measure traditional SERP ranking'] },
        ],
      },
    },
    {
      title: 'Market context',
      paragraphs: [
        'Existing AI visibility monitoring tools (Otterly, Profound, Peec AI) measure the frequency of brand mentions in generative responses. According to Gartner (2025), 30% of search traffic will be redirected to AI engines by 2026. Additionally, Brightedge (2024) estimates that 58% of marketers have no tool to measure their visibility in LLM responses. The Rankwell GEO Score differentiates itself by combining visibility measurement with diagnosis of its causes (IU, LC, FD).',
      ],
    },
    {
      title: 'Comparability',
      paragraphs: [
        'The Rankwell GEO Score only makes sense in comparison. A score of 62 means nothing in absolute terms. It becomes meaningful when the main competitor scores 78: the 16-point gap identifies a measurable deficit. The competitive benchmark (step 3 of the Rankwell GEO Method) provides this context.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Composite measurement of a brand\'s AI visibility (IU, LC, FD)' },
      { text: 'Comparison between a brand and its competitors across the same query panel' },
      { text: 'Identification of the weakest pillars (targeted diagnosis)' },
      { text: 'Tracking progression over time after corrective actions' },
    ],
    neCouvrePas: [
      { text: 'Detailed audit of the causes behind a low score', link: { slug: 'audit-geo', label: 'GEO Audit' } },
      { text: 'Measuring visibility in traditional SERPs', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Real-time monitoring of AI citations (the score is calculated during an audit)' },
      { text: 'Individual quality of each citation', link: { slug: 'citabilite', label: 'Citability' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Rankwell GEO Method', slug: 'methode-rankwell-geo' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'GEO Audit', slug: 'audit-geo' },
    { label: 'Multi-Engine Visibility', slug: 'visibilite-multi-moteurs' },
  ],
};
