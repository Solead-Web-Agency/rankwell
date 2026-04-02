/**
 * GLOSSARY — E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Google quality criteria — SEO and AI trust signal
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'E-E-A-T: Definition & Framework',
    description: 'E-E-A-T stands for four content quality criteria: Experience, Expertise, Authoritativeness and Trustworthiness. Framework, scope and related concepts.',
  },

  definition: {
    paragraphs: [
      'E-E-A-T stands for four criteria used to evaluate the quality of content and its author: Experience, Expertise, Authoritativeness and Trustworthiness. These criteria are defined in the Search Quality Rater Guidelines, the reference document Google provides to its human evaluators for rating search result quality. The "E" for Experience was added in December 2022 to the original three criteria (E-A-T).',
    ],
    nucleaire: 'According to Rankwell, E-E-A-T signals do not merely serve to satisfy Google\'s Quality Raters. They constitute the primary source selection criterion for AI engines, which favor content demonstrating verifiable expertise and documented experience over mere domain authority.',
  },

  cadre: {
    paragraphs: [
      'E-E-A-T is not a direct algorithmic ranking factor. Google does not calculate an "E-E-A-T score." These criteria guide the human evaluators who test result quality, and their feedback informs algorithmic adjustments. E-E-A-T functions as a qualitative evaluation framework, not as a measurable technical signal.',
      'The December 2025 Core Update reinforced the weight of quality and E-E-A-T signals in the algorithm. Sites weak in E-E-A-T experienced significant visibility losses, even when their individual pages were technically optimized.',
    ],
  },

  sections: [
    {
      title: 'The four components and their impact on AI citability',
      paragraphs: [
        'The Search Quality Rater Guidelines span over 170 pages and are updated several times a year. The table below summarizes the four E-E-A-T components, their evaluation by Google and by LLMs.',
      ],
      tableau: {
        caption: 'The four E-E-A-T components',
        headers: ['Component', 'Definition', 'Google signal', 'LLM signal', 'How to demonstrate it'],
        rows: [
          { cells: ['Experience', 'Evidence of direct, first-hand experience with the subject', 'First-hand content detected by Quality Raters', 'Proprietary data, field observations, original case studies', 'Factual testimonials, on-site photos, proprietary data'] },
          { cells: ['Expertise', 'Technical or professional competence of the author', 'Author signals (bio, publications, affiliations)', 'Author entities in the Knowledge Graph, mentions in third-party sources', 'Detailed author page, verifiable publications, certifications'] },
          { cells: ['Authoritativeness', 'Recognition by third parties as a reference on the topic', 'Backlinks, citations, mentions in specialized publications', 'Frequency and quality of citations in training corpora', 'Mentions in trade press, academic citations, topical backlinks'] },
          { cells: ['Trustworthiness', 'Transparency, factual consistency, information freshness', 'The most important dimension according to Google (center of the E-E-A-T model)', 'Sourced content, verifiable data, consistency with consensus', 'Cited sources, update dates, legal notices, HTTPS'] },
        ],
      },
      paragraphsAfter: [
        'Experience. Evidence that the author or organization has direct, first-hand experience with the subject. AI engines identify markers of lived experience (proprietary data, first-hand observations) and distinguish them from content compiled from secondary sources.',
        'Expertise. The author\'s technical or professional competence on the subject. LLMs evaluate expertise through the entities associated with the author in the Knowledge Graph: publications, affiliations, mentions in third-party sources.',
        'Authoritativeness. Recognition of the author or site as a reference on a topic by third parties. For AI engines, authority is measured by the frequency and quality of citations of the source in training corpora and real-time crawled sources.',
        'Trustworthiness. The most important dimension according to Google. Trustworthiness encompasses transparency (who writes, for whom, with what sources), factual consistency and information freshness. LLMs prioritize content that cites its sources and presents verifiable data.',
      ],
    },
    {
      title: 'E-E-A-T and YMYL pages',
      paragraphs: [
        'E-E-A-T requirements are heightened for YMYL (Your Money or Your Life) pages, which cover health, finance, safety and legal topics. On these subjects, both search engines and AI engines apply a higher quality threshold. Medical content without an identified author or referenced medical sources will neither rank favorably on Google nor be cited by LLMs.',
      ],
    },
    {
      title: 'How LLMs use E-E-A-T signals',
      paragraphs: [
        'Google and LLMs share the same logic but apply it differently. Google evaluates E-E-A-T through PageRank, structured data, trust signals and human evaluations. LLMs evaluate E-E-A-T through the intrinsic quality of the content: factual accuracy, verifiable citations, consistency with other sources, and the presence of the author or brand in the Knowledge Graph.',
        'A site can have strong E-E-A-T for Google (powerful backlinks, aged domain) and weak E-E-A-T for LLMs (generic content, no proprietary data). The reverse is also possible: a recent site with few backlinks but highly factual and original content can be frequently cited by AI engines.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Qualitative evaluation of content and its author' },
      { text: 'Criteria used by Google\'s Quality Raters' },
      { text: 'Trust signals for SERP ranking' },
      { text: 'Source selection criteria for AI engines' },
      { text: 'Heightened requirements for YMYL topics' },
    ],
    neCouvrePas: [
      { text: 'Technical ranking factors', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'Site content architecture', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'Link acquisition strategy', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'On-page optimization', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'AI engine visibility measurement', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'Topical Authority', slug: 'topical-authority' },
    { label: 'SEO Content Marketing', slug: 'content-marketing-seo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
  ],
};
