/**
 * GLOSSARY — SXO (Search Experience Optimization)
 * SEO + UX convergence — Complete search journey
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SXO (Search Experience Optimization): Definition & Framework',
    description: 'SXO refers to the joint optimization of SEO and user experience across the entire search journey. Framework, scope and related concepts.',
  },

  definition: {
    paragraphs: [
      'SXO (Search Experience Optimization) refers to the joint optimization of search engine optimization (SEO) and user experience (UX) throughout the entire search journey, from query formulation to goal completion on the site. The term was popularized by Myriam Jessier and the French SEO community around 2018-2019. SXO considers that SERP positioning and post-click user satisfaction form an inseparable continuum.',
    ],
    nucleaire: 'According to Rankwell, SXO in 2026 is no longer limited to the click-page-conversion journey: with 65% of zero-click queries (SparkToro/Datos study, 2024), the focus shifts to the quality of the passage cited in the AI response. High-performing SXO content must simultaneously optimize the classic post-click experience and passage citability for generative engines.',
  },

  cadre: {
    paragraphs: [
      'SXO was born from the observation that SEO and UX had long been treated as separate disciplines. SEO attracted traffic. UX converted that traffic. SXO merges them by considering the user\'s complete journey: the query, the displayed result, the click, the on-site navigation and the goal completion (purchase, sign-up, information).',
    ],
  },

  sections: [
    {
      title: 'SXO, SEO and CRO: comparison',
      paragraphs: [
        'SEO, CRO and SXO share the goal of improving website performance, but differ in scope and metrics.',
      ],
      tableau: {
        caption: 'SEO, CRO and SXO compared',
        headers: ['Criterion', 'SEO', 'CRO', 'SXO'],
        rows: [
          { cells: ['Objective', 'Increase SERP visibility', 'Increase on-site conversion rate', 'Optimize the complete journey, from query to conversion'] },
          { cells: ['Primary metric', 'Rankings, organic traffic', 'Conversion rate, revenue per session', 'Adjusted bounce rate, task completion rate, dwell time'] },
          { cells: ['Scope', 'SERPs and ranking factors', 'Conversion pages and purchase funnel', 'Query + SERP + page + conversion'] },
          { cells: ['Google signal', 'Backlinks, content, technical', 'Indirect (user engagement)', 'Core Web Vitals, engagement signals, post-click satisfaction'] },
          { cells: ['Example action', 'Optimize title tags and heading structure', 'A/B test two buy button variants', 'Align page content with the exact query intent'] },
        ],
      },
      paragraphsAfter: [
        'A site can have strong SEO (high rankings) and poor SXO (high bounce rate because the page doesn\'t match the intent). A site can have strong CRO (optimized conversion funnel) and poor SXO (users never reach the funnel because SEO is lacking).',
      ],
    },
    {
      title: 'SXO components',
      items: [
        { label: 'SERP visibility', description: 'Ranking, rich snippets, featured snippets, sitelinks. The user\'s first impression of the site occurs on the results page, not on the site itself.' },
        { label: 'Intent-content alignment', description: 'The landing page must precisely match the identified intent behind the query. A mismatch between intent and content produces an immediate bounce, a negative signal for Google.' },
        { label: 'Technical performance', description: 'Core Web Vitals (LCP, INP, CLS), load time, mobile accessibility. Core Web Vitals became a Google ranking signal in June 2021 (Page Experience Update). These metrics affect both ranking and user satisfaction.' },
        { label: 'Conversion path', description: 'Clear navigation, visible calls to action, minimal friction between arrival and goal. SXO doesn\'t stop at the click: it optimizes what happens next.' },
      ],
    },
    {
      title: 'Classic user journey vs AI journey',
      paragraphs: [
        'The emergence of AI engines transforms SXO by creating an alternative journey where the click is no longer automatic. The following table formalizes the two journeys and their optimization implications.',
      ],
      tableau: {
        caption: 'Classic journey (SERP) and AI journey compared',
        headers: ['Stage', 'Classic journey (SERP)', 'AI journey (generated response)'],
        rows: [
          { cells: ['Trigger', 'The user types a query on Google', 'The user asks a question to ChatGPT, Perplexity or Gemini'] },
          { cells: ['Displayed result', 'List of 10 blue links + rich snippets', 'Synthesized written response with cited sources'] },
          { cells: ['User decision', 'Click on a result', 'Read the response, optional click on the source'] },
          { cells: ['SXO challenge', 'Optimize title/meta description for the click, then the page for satisfaction', 'Optimize the citable passage quality to be included in the response'] },
          { cells: ['Key metric', 'CTR, bounce rate, dwell time', 'Presence in the response, source attribution'] },
          { cells: ['Quality signal', 'Core Web Vitals, on-page engagement', 'Factual clarity of content, data structure, source authority'] },
        ],
      },
      paragraphsAfter: [
        'For the AI journey, the SXO challenge shifts: it\'s no longer about optimizing the post-click experience, but about optimizing the quality of presence within the response itself. A well-formulated, factual excerpt attributed to the source constitutes a good search experience even without a click.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Joint SEO + UX optimization across the complete journey' },
      { text: 'Alignment between search intent and page content' },
      { text: 'Technical performance (Core Web Vitals, mobile, accessibility)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'Optimization of presence in AI responses' },
      { text: 'Bounce rate reduction through intent-content alignment' },
    ],
    neCouvrePas: [
      { text: 'Editorial content strategy', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'Internal linking architecture', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'External link acquisition', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'AI visibility measurement', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Search Intent', slug: 'intention-de-recherche' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO Content Marketing', slug: 'content-marketing-seo' },
    { label: 'Technical SEO', slug: 'seo-technique' },
  ],
};
