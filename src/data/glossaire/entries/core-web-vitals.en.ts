/**
 * GLOSSARY — Core Web Vitals
 * Google user experience metrics (LCP, INP, CLS)
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Core Web Vitals: Definition & Framework',
    description: 'Core Web Vitals are three Google metrics for evaluating user experience: LCP, INP and CLS. Ranking signal, thresholds and related concepts.',
  },

  definition: {
    paragraphs: [
      'Core Web Vitals are a set of three metrics defined by Google to evaluate the user experience of a web page: loading speed (LCP), interaction responsiveness (INP) and visual stability (CLS). Since 2021, these metrics have been part of Google\'s ranking signals. In March 2024, INP (Interaction to Next Paint) replaced FID (First Input Delay) as the responsiveness metric.',
    ],
    nucleaire: 'According to Rankwell, Core Web Vitals measure user experience for Google, but AI engines do not evaluate a site\'s speed. They evaluate the structural quality of its content. A slow but rigorously structured site will be cited more by ChatGPT than a fast site with superficial content.',
  },

  cadre: {
    paragraphs: [
      'Core Web Vitals are part of Google\'s Page Experience program, which groups signals related to user experience quality. Google uses Chrome User Experience Report (CrUX) data to collect these metrics under real-world usage conditions, on both mobile and desktop devices.',
      'Performance thresholds are classified into three zones: "Good" (green), "Needs Improvement" (amber) and "Poor" (red). Google recommends that 75% of page loads fall within the "Good" zone for each metric (Google Search Central, 2023).',
      'According to HTTP Archive (2025), 51% of mobile websites meet the "Good" threshold across all three Core Web Vitals simultaneously, up from 39% in 2022. A Cloudflare study (2024) found that sites moving from "Poor" to "Good" on LCP see an average 8% improvement in conversion rate.',
    ],
  },

  sections: [
    {
      title: 'The three metrics',
      tableau: {
        caption: 'The three Core Web Vitals',
        headers: ['Metric', 'Measurement', '"Good" threshold', 'What it evaluates'],
        rows: [
          { cells: ['LCP (Largest Contentful Paint)', 'Time to render the largest visible element', '<= 2.5 seconds', 'Perceived loading speed'] },
          { cells: ['INP (Interaction to Next Paint)', 'Latency between a user interaction and the visual update', '<= 200 milliseconds', 'Page responsiveness to clicks, taps and keyboard input'] },
          { cells: ['CLS (Cumulative Layout Shift)', 'Cumulative score of unexpected visual shifts', '<= 0.1', 'Visual stability (elements that "jump" during loading)'] },
        ],
      },
      paragraphsAfter: [
        'INP differs from the former FID in its coverage: FID measured only the delay of the first interaction, while INP accounts for all interactions in the session and retains the slowest (at the 98th percentile). JavaScript-heavy pages are the most affected by this metric.',
      ],
    },
    {
      title: 'Core Web Vitals and AI visibility: a necessary distinction',
      paragraphs: [
        'Core Web Vitals are a ranking signal for Google Search. AI engines (ChatGPT, Perplexity, Claude) do not rank pages: they generate responses by citing sources. Their selection mechanism relies on factual relevance, content structure and source reputation, not on loading speed.',
        'GPTBot, ClaudeBot and PerplexityBot crawl a page\'s HTML content. They do not execute JavaScript, do not measure LCP and do not evaluate CLS. A site with a CLS of 0.4 (poor for Google) but content structured as verifiable data and marked up with Schema.org remains perfectly citable by an LLM.',
        'The reverse is also true: a site achieving a perfect score on all three Core Web Vitals but with superficial content or no structured data has no advantage in terms of citability.',
      ],
    },
    {
      title: 'Optimization factors by metric',
      tableau: {
        caption: 'Core Web Vitals degradation causes and optimization levers',
        headers: ['Metric', 'Common degradation causes', 'Optimization levers'],
        rows: [
          { cells: ['LCP', 'Uncompressed images, render-blocking CSS, high server response time', 'Preloading, CDN, image compression, TTFB optimization'] },
          { cells: ['INP', 'Heavy JavaScript, blocking event handlers', 'Code splitting, Web Workers, debouncing'] },
          { cells: ['CLS', 'Images/videos without dimensions, dynamic content injection', 'Explicit width/height attributes, reserved space for ads'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'User experience performance measurement on web pages' },
      { text: 'LCP (loading), INP (responsiveness) and CLS (visual stability)' },
      { text: 'Impact as a ranking signal in Google Search' },
      { text: 'Field data collected via the Chrome User Experience Report (CrUX)' },
    ],
    neCouvrePas: [
      { text: 'All web performance metrics (TTFB, FCP, TBT are not Core Web Vitals)', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'Page crawlability and indexation by search engines', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'Content quality or semantic relevance' },
      { text: 'AI engine visibility', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO Audit', slug: 'audit-seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
