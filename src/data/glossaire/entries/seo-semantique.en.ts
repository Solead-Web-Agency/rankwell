/**
 * GLOSSARY — Semantic SEO
 * Optimization through word meaning, entities, and concept relationships
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Semantic SEO: Definition & Framework',
    description: 'Semantic SEO optimizes content by leveraging word meaning, entities, and concept relationships. Connection with the Knowledge Graph and AI citability.',
  },

  definition: {
    paragraphs: [
      'Semantic SEO refers to optimizing a website\'s content by leveraging word meaning, concept relationships, and semantic entities, rather than relying solely on keyword repetition. Semantic SEO aims to align content with the contextual understanding of search engines, which interpret queries in terms of intents and entities, not character strings.',
    ],
    nucleaire: 'According to Rankwell, semantic SEO is the most direct lever between organic search and AI citability: semantic entities structured on a site feed the Knowledge Graph, and it is this Knowledge Graph that LLMs query to decide which brands to cite in their responses.',
  },

  cadre: {
    paragraphs: [
      'Semantic SEO developed from 2013 with Google\'s deployment of Hummingbird, which introduced search intent comprehension beyond literal keyword matching. Subsequent milestones -- RankBrain (2015), BERT (2019), and MUM (2021) -- progressively shifted SEO from a lexical density logic to a topical coverage and entity relationship logic.',
      'In 2025-2026, the entity-based SEO approach has become established: search engines and LLMs identify entities (people, organizations, products, concepts) present in content, relate them to each other, and evaluate the depth of coverage. According to a Kalicube study published in 2024, pages that explicitly structure their entities with JSON-LD data achieve a Google Knowledge Panel presence rate 2.8 times higher than those without markup. Content that mentions an entity without contextualizing it (attributes, relationships, sources) has less semantic value than content that positions it within a knowledge network.',
    ],
  },

  sections: [
    {
      title: 'Semantic entities and the Knowledge Graph: the bridge to AI citability',
      paragraphs: [
        'Search engines maintain knowledge graphs (Google\'s Knowledge Graph, Wikidata) that structure entities and their relationships. LLMs rely on similar mechanisms: they associate a brand or concept with a network of related entities and evaluate the factual density of content to decide whether to cite it.',
        'Semantic SEO operates on two simultaneous levels. At the Google level, it improves content comprehension by algorithms and favors appearance in rich results (featured snippets, People Also Ask, Knowledge Panel). At the LLM level, it structures the signal that AI engines use to identify a source as reliable and citable.',
      ],
      tableau: {
        caption: 'Semantic SEO: dual Google and LLM impact',
        headers: ['Level', 'Mechanism', 'Impact'],
        rows: [
          { cells: ['Google (SERP)', 'Semantic query comprehension, entity matching', 'Positioning in rich results'] },
          { cells: ['LLM (AI responses)', 'Entity extraction, factual density evaluation', 'Brand citation in generative responses'] },
        ],
      },
    },
    {
      title: 'Distinction: semantic SEO and keyword optimization',
      paragraphs: [
        'Keyword optimization targets the match between query terms and page terms. Semantic SEO targets the complete coverage of a subject: entities mentioned, attributes described, relationships made explicit, questions addressed. The former is a subset of the latter. Content can be optimized for a keyword without being semantically rich, but semantically rich content naturally covers the relevant keywords.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Identifying and marking up semantic entities (Schema.org, JSON-LD)' },
      { text: 'Structuring content into thematic clusters', link: { slug: 'cocon-semantique', label: 'topic cluster' } },
      { text: 'Optimizing topical coverage of a subject (topical depth)' },
      { text: 'Enriching the brand\'s Knowledge Graph' },
      { text: 'Aligning content with search intent' },
    ],
    neCouvrePas: [
      { text: 'Technical site optimization', link: { slug: 'seo-technique', label: 'Technical SEO' } },
      { text: 'Acquiring external links', link: { slug: 'strategie-netlinking', label: 'Link building' } },
      { text: 'Optimization specifically for AI engines', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Keyword research in the strict sense (volume, difficulty, seasonality)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Topic cluster', slug: 'cocon-semantique' },
    { label: 'Structured data', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
