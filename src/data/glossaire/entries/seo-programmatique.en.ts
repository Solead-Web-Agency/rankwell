/**
 * GLOSSARY — Programmatic SEO
 * Large-scale page generation from templates and data
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Programmatic SEO: Definition & Framework',
    description: 'Programmatic SEO refers to large-scale generation of optimized pages from templates and databases. Conditions for success, risks, and limitations with LLMs.',
  },

  definition: {
    paragraphs: [
      'Programmatic SEO refers to the large-scale generation of search-engine-optimized web pages from templates fed by structured databases. Each page targets a specific query (often long-tail) by combining dynamic variables (location, category, product attribute) with a constant editorial template.',
    ],
    nucleaire: 'According to Rankwell, programmatic SEO works on the condition that each generated page delivers distinct informational value. AI engines, which evaluate intrinsic content quality rather than the volume of indexed pages, penalize programmatic content that amounts to superficial variations of the same template.',
  },

  cadre: {
    paragraphs: [
      'Programmatic SEO relies on a principle of scale: where SEO content marketing produces dozens of editorial pages per month, programmatic SEO can generate thousands in a single operation. Classic use cases include geolocalized directories ("plumber + city"), e-commerce product pages, comparison sites, and attribute-combination pages.',
    ],
  },

  sections: [
    {
      title: 'Programmatic SEO vs editorial content',
      paragraphs: [
        'Editorial content is individually written, with a unique angle, structure, and narrative for each page. Programmatic content is generated from a template and data, with mechanical variations between pages. The former targets depth and originality. The latter targets coverage and volume.',
        'These two approaches are complementary, not interchangeable. Editorial content builds topical authority and AI citability. Programmatic content captures long-tail traffic. A site that only does programmatic lacks depth. A site that only does editorial lacks coverage.',
      ],
    },
    {
      title: 'Specific risks',
      tableau: {
        caption: 'Programmatic SEO risks',
        headers: ['Risk', 'Cause', 'Detection', 'Solution'],
        rows: [
          { cells: ['Thin content', 'Template too sparse or insufficient injected data', 'Indexation drop in Google Search Console, filtered pages', 'Enrich the template with unique data per page, add editorial content'] },
          { cells: ['Cannibalization', 'Multiple programmatic pages targeting queries too close together', 'Two pages from the same site competing on the same SERP, ranking fluctuations', 'Rigorous target query mapping before generation, grouping close variants'] },
          { cells: ['LLM detection', '500+ pages with the same structure and minor variations', 'Complete absence of AI citations for programmatic pages', 'Inject unique factual data (price, availability, verifiable coordinates)'] },
        ],
      },
      paragraphsAfter: [
        'The main risk is generating low-value pages. Google\'s Helpful Content Update (August 2022, September 2023) explicitly targets this type of content. When multiple programmatic pages target queries too close together, they compete internally. AI engines effectively identify template-generated content. Programmatic content is almost never cited by AI engines, unless it contains unique factual data (price, availability, verifiable coordinates).',
      ],
    },
    {
      title: 'Conditions for success',
      tableau: {
        caption: 'Programmatic SEO success conditions',
        headers: ['Condition', 'Why it\'s required', 'Risk if absent'],
        rows: [
          { cells: ['Unique source data per page', 'Each page must deliver distinct informational value to avoid thin content', 'Pages treated as thin content, deindexed by Google'] },
          { cells: ['Enriched template (not just {city}+{service})', 'A sparse template produces near-identical pages detected by the Helpful Content Update', 'Algorithmic penalty, content ignored by LLMs'] },
          { cells: ['Automated internal linking', 'Connects programmatic pages to editorial hub pages to distribute authority', 'Orphan pages with no authority, poor indexation'] },
          { cells: ['Indexation monitoring', 'Verify that Google actually indexes generated pages and does not filter them', 'Thousands of pages created but invisible in the index'] },
          { cells: ['Supplementary editorial content', 'Complements dynamic data with non-replicable editorial elements', 'Insufficient quality score for competitive queries'] },
        ],
      },
      paragraphsAfter: [
        'Programmatic SEO delivers results when these conditions are met simultaneously. The data injected into the template is unique, verifiable, and useful. Each page provides a distinct answer to a distinct query, with no overlap with other pages in the batch. Internal linking connects programmatic pages to the hub\'s editorial pages, so the site\'s topical authority benefits both types of content.',
      ],
    },
    {
      title: 'Large-scale deployment examples',
      paragraphs: [
        'The most cited programmatic deployments are Zapier (integration pages between two tools, over 70,000 pages), Tripadvisor (listings by destination x activity type), and Wise (currency-to-currency conversion pages). These sites succeed because each page contains genuinely distinct dynamic data (compatibility between two tools, verified reviews by location, real-time exchange rates).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Large-scale page generation from templates and data' },
      { text: 'Long-tail targeting through variable combinations' },
      { text: 'Template structuring for indexation' },
      { text: 'Managing cannibalization and thin content risks' },
    ],
    neCouvrePas: [
      { text: 'Editorial content writing', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'Internal linking architecture', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'User experience optimization', link: { slug: 'sxo', label: 'SXO' } },
      { text: 'AI citability optimization', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Cannibalisation SEO', slug: 'cannibalisation-seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
