/**
 * GLOSSARY — SEO Audit
 * Comprehensive diagnosis of a website's search engine visibility
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO Audit: Definition & Framework',
    description: 'An SEO audit is the systematic analysis of a website to identify factors hindering or boosting its visibility. Technical, content, authority and AI dimensions.',
  },

  definition: {
    paragraphs: [
      'An SEO audit is the systematic analysis of a website aimed at identifying the factors that hinder or boost its visibility in search engines. The audit covers three dimensions: technical (performance, crawl, indexation), content (semantic relevance, structure, internal linking) and authority (link profile, domain authority). The deliverable is a factual diagnosis accompanied by recommendations prioritized by impact.',
    ],
    nucleaire: 'According to Rankwell, an SEO audit that does not measure a site\'s AI citability overlooks a growing share of its visibility potential. As AI engines have become a discovery channel in their own right, a comprehensive diagnosis now includes evaluating the site\'s ability to be cited by ChatGPT, Perplexity or Gemini.',
  },

  cadre: {
    paragraphs: [
      'The SEO audit has historically been built around the analysis of the three pillars of organic search: technical, content and authority. Each pillar produces a set of measurable findings (crawl errors, orphan pages, link profile) leading to a prioritized action plan. According to an Ahrefs study (2024), 96.55% of web pages receive no organic traffic from Google, illustrating the gap between sites that have undergone a structured diagnosis and those that have not.',
      'In 2025-2026, two developments are changing the scope of an SEO audit. First, the Core Web Vitals now include INP (Interaction to Next Paint), which replaced FID in March 2024. Second, content quality criteria integrate E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), reinforced by Google\'s Helpful Content updates.',
    ],
    tableau: {
      caption: 'SEO audit and GEO audit: two distinct scopes',
      headers: ['Criterion', 'SEO Audit', 'GEO Audit'],
      rows: [
        { cells: ['Subject analyzed', 'The website', 'The brand and its entities'] },
        { cells: ['Data sources', 'GSC, technical crawl, backlinks', 'LLM responses, Knowledge Graph, third-party sources'] },
        { cells: ['Primary metric', 'Rankings, organic traffic', 'GEO Score, citation rate, mention type'] },
        { cells: ['Deliverable', 'Technical + content + link action plan', 'Citability + entity + source action plan'] },
      ],
    },
  },

  sections: [
    {
      title: 'Components of a modern SEO audit',
      paragraphs: [
        'A structured SEO audit covers six components, each producing specific findings and recommendations:',
      ],
      tableau: {
        caption: 'The six components of an SEO audit',
        headers: ['Component', 'Subject', 'Examples of analyzed items'],
        rows: [
          { cells: ['Technical', 'Site infrastructure', 'Crawl, indexation, Core Web Vitals (LCP, INP, CLS), HTTPS, robots.txt, sitemap'] },
          { cells: ['Content', 'Quality and relevance', 'Heading structure, semantic coverage, duplicate content, cannibalization, E-E-A-T'] },
          { cells: ['Internal linking', 'Link architecture', 'Orphan pages, click depth, topic clusters, internal PageRank distribution'] },
          { cells: ['Authority', 'Backlink profile', 'Volume, quality, referring domain diversity, anchors, toxic links'] },
          { cells: ['UX / Performance', 'User experience', 'Page speed, responsive design, navigation paths, bounce rate'] },
          { cells: ['AI dimension', 'LLM citability', 'Presence in AI responses, data structuring, accessibility to AI crawlers (GPTBot, ClaudeBot)'] },
        ],
      },
      paragraphsAfter: [
        'The sixth component, the AI dimension, is the addition that distinguishes a 2026 SEO audit from a traditional one. It evaluates whether AI crawlers can access the site (robots.txt), whether the content is structured in a way that LLMs can exploit (structured data, identified entities), and whether the brand appears in generative responses.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Complete technical analysis of the site (crawl, indexation, performance)' },
      { text: 'Evaluation of content strategy and semantic structure' },
      { text: 'Backlink profile and domain authority analysis' },
      { text: 'Internal linking and site architecture diagnosis' },
      { text: 'Identification of visibility blockers and prioritization of corrective actions' },
      { text: 'AI citability evaluation (modern component)', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'Paid advertising campaign audits', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Full AI engine visibility audit', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'Social media presence audit' },
      { text: 'UX design audit (beyond SEO signals)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Technical SEO', slug: 'seo-technique' },
    { label: 'GEO Audit', slug: 'audit-geo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
  ],
};
