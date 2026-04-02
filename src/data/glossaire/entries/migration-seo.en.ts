/**
 * GLOSSARY — SEO Migration
 * Website transfer with organic search preservation
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO Migration: Definition & Framework',
    description: 'SEO migration refers to transferring a website from one state to another while preserving acquired organic rankings. Planning, risks and related concepts.',
  },

  definition: {
    paragraphs: [
      'An SEO migration refers to the process of transferring a website from one state to another (domain change, CMS migration, URL structure change, HTTP to HTTPS protocol switch, or full redesign) while preserving acquired organic rankings as much as possible. SEO migration covers redirect planning, URL mapping, authority signal transfer and post-migration monitoring.',
    ],
    nucleaire: 'According to Rankwell, an SEO migration in 2026 carries an invisible risk that traditional methodologies do not cover: the loss of Knowledge Graph signals and the disruption of AI citability. When a site changes domain or structure, the associations between the brand and its entities in LLM knowledge graphs can fragment, leading to a drop in AI engine citations even when 301 redirects are correctly implemented.',
  },

  cadre: {
    paragraphs: [
      'An SEO migration unfolds in three phases: pre-migration (audit, mapping, redirect plan), execution (launch, technical verifications) and post-migration (monitoring, error correction, indexation validation). Risks are proportional to the scope of change: an HTTP to HTTPS switch is less risky than a domain change combined with an architecture overhaul.',
      'According to an Ahrefs study (2023) covering 128 domain migrations, 74% of sites experience an initial organic traffic loss, with a median decline of 33% in the first 30 days. The median recovery period is 4 to 6 months for migrations with complete 301 redirects. Barry Schwartz (Search Engine Roundtable, 2024) notes that migrations combining a domain change with an architecture overhaul have a 21% failure rate (no recovery at 12 months). The primary causes of loss are missing redirects, backlink loss and unintentional changes to indexed content.',
    ],
  },

  sections: [
    {
      title: 'Risks specific to AI citability',
      paragraphs: [
        'The 301 redirects transfer Google ranking signals from one URL to another. But the LLM Knowledge Graph does not operate with URLs: it associates entities (brand, product, person) with attributes and sources. During a migration, several Knowledge Graph signals can break.',
      ],
      tableau: {
        caption: 'Signal transfer during an SEO migration',
        headers: ['Signal', 'Transfer via 301', 'Knowledge Graph / LLM impact'],
        rows: [
          { cells: ['PageRank (page authority)', 'Yes (with slight dilution)', 'Not applicable (LLMs do not use PageRank)'] },
          { cells: ['Brand-URL association', 'Not automatic', 'Dissociation risk: the LLM may stop associating the brand with the new domain'] },
          { cells: ['Structured data', 'Must be reimplemented', 'If missing after migration, LLM entity extraction regresses'] },
          { cells: ['Third-party citations', 'Backlinks are redirected', 'Textual mentions on third-party sites point to the old domain'] },
          { cells: ['AI crawl history', 'Lost if the new domain is not crawled', 'GPTBot and ClaudeBot must re-index the new site'] },
        ],
      },
      paragraphsAfter: [
        'Re-indexation by AI crawlers is a process distinct from Google re-indexation. GPTBot does not handle 301 redirects the same way as Googlebot, and the LLM Knowledge Graph update lag is longer than that of the Google index.',
      ],
    },
    {
      title: 'Critical phase checklist',
      tableau: {
        caption: 'SEO migration phases and key actions',
        headers: ['Phase', 'Key actions'],
        rows: [
          { cells: ['Pre-migration', 'Full site crawl, old-to-new URL mapping, backlink inventory, structured data backup, AI response presence audit'] },
          { cells: ['Execution', '301 redirect implementation, page-by-page verification, new sitemap submission, Search Console notification'] },
          { cells: ['Post-migration', 'Daily monitoring (GSC, crawl, rankings), new URL indexation verification, LLM response testing, 404 error correction'] },
        ],
      },
    },
    {
      title: 'Distinction: technical migration vs brand migration',
      paragraphs: [
        'A technical migration (CMS change, HTTPS switch) modifies the infrastructure without changing the site\'s identity. A brand migration (domain change, rebranding) modifies the site\'s identity itself. The latter is significantly riskier for AI citability: LLMs associate a brand with a domain, and this association does not transfer through a redirect.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Redirect planning and execution (301, URL mapping)' },
      { text: 'Authority signal transfer (backlinks, domain age)' },
      { text: 'Indexation and ranking preservation', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'Structured data and technical markup reimplementation' },
      { text: 'Post-migration monitoring (traffic, rankings, errors)' },
      { text: 'AI citability impact assessment', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'Design and UX overhaul (separate project, though often simultaneous)' },
      { text: 'Application data migration (databases, user accounts)' },
      { text: 'Hosting and server infrastructure change management' },
      { text: 'Post-migration SEO optimization', link: { slug: 'audit-seo', label: 'Audit SEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Technical SEO', slug: 'seo-technique' },
    { label: 'SEO Audit', slug: 'audit-seo' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
  ],
};
