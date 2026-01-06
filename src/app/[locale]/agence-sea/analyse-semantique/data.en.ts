/**
 * ============================================
 * DATA - SEA Semantic Analysis Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Google Ads Keyword Audit That Reveals ROI - Rankwell',
  description: 'Google Ads keyword audit: we find queries that convert and those burning your budget. Custom SEA keyword strategy.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA', href: '/en/sea-agency' },
    { label: 'Keyword Audit' },
  ] as BreadcrumbItem[],
  title: 'Google Ads keyword audit to target what converts',
  description: 'In SEA, keywords make everything. Target the wrong ones, waste budget. Our semantic audit reveals those that actually generate business.',
  ctaText: 'Request a keyword audit',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Ads Keyword Audit',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Google Ads lets you target thousands of keywords. The problem: not all are equal. Some bring traffic that converts. Others burn your budget with no return.',
    'Semantic audit of your Ads campaigns identifies queries that actually generate business. Understanding the intent behind each search. Structuring your keyword strategy to maximize ROI.',
    'Discover how our SEA keyword research and our <strong class="text-secondary dark:text-accent">business-centric</strong> approach determine your entire campaign performance. Target what converts, not what impresses.',
  ],
  tocItems: [
    { id: 'inclus', label: 'What\'s included', icon: 'Package' },
    { id: 'dimensions', label: 'Analysis dimensions', icon: 'Layers' },
    { id: 'grille', label: 'Decision grid', icon: 'Table' },
    { id: 'livrables', label: 'Deliverables', icon: 'FileText' },
    { id: 'quand', label: 'When to analyze', icon: 'Clock' },
    { id: 'process', label: 'How it works', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Included',
  accentColor: 'rw-cyan' as const,
  title: 'What our semantic analysis includes',
  subtitle: 'A complete vision of your potential on Google Ads.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Existing audit',
      description: 'What converts, what costs, missed opportunities',
    },
    {
      id: 2,
      icon: 'ListTree',
      title: 'Exhaustive research',
      description: 'All relevant queries for your business',
    },
    {
      id: 3,
      icon: 'Brain',
      title: 'Intent analysis',
      description: 'Transactional, comparative, informational',
    },
    {
      id: 4,
      icon: 'Ban',
      title: 'Negative list',
      description: 'Terms to exclude to avoid waste',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 5. DIMENSIONS DATA (#dimensions)
// ============================================
export const dimensionsData = {
  sectionId: 'dimensions',
  badge: 'Analysis',
  accentColor: 'rw-cyan' as const,
  title: 'What dimensions does our analysis cover?',
  subtitle: '6 dimensions for a complete vision of your semantic potential.',
  dimensions: [
    {
      dimension: 1,
      label: 'Existing',
      title: 'Existing audit',
      subtitle: 'If you already have campaigns, we analyze your current keywords.',
      items: ['Keywords that convert', 'Those that cost without returning', 'Missed opportunities'],
    },
    {
      dimension: 2,
      label: 'Research',
      title: 'Keyword research',
      subtitle: 'Exhaustive identification of queries related to your business.',
      items: ['Search volumes', 'CPC estimates', 'High-potential niche queries'],
    },
    {
      dimension: 3,
      label: 'Intents',
      title: 'Intent analysis',
      subtitle: 'Not all queries are equal. We distinguish intents.',
      items: ['Transactional (buy, price)', 'Comparative (best, reviews)', 'Informational (how to)'],
    },
    {
      dimension: 4,
      label: 'Competition',
      title: 'Competitive analysis',
      subtitle: 'Understand where your competitors invest and where there\'s opportunity.',
      items: ['Keywords targeted by competitors', 'Dominant positions', 'Available opportunities'],
    },
    {
      dimension: 5,
      label: 'Negatives',
      title: 'Negative keywords list',
      subtitle: 'As important as keywords to target: those to exclude.',
      items: ['Unqualified terms', 'Off-target queries', 'Budget savings'],
    },
    {
      dimension: 6,
      label: 'Structure',
      title: 'Structure recommendations',
      subtitle: 'How to organize these keywords in your Google Ads account.',
      items: ['Campaign organization', 'Coherent ad groups', 'Optimization logic'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'SEA and SEO synergy',
  text: 'SEA semantic analysis reveals valuable insights for SEO. Keywords that convert in Ads are often those to work on organically. We share these learnings if you combine both channels.',
};

// ============================================
// 7. TABLEAU GRILLE DATA (#grille)
// ============================================
export const tableauGrilleData = {
  sectionId: 'grille',
  badge: 'Decision',
  accentColor: 'rw-cyan' as const,
  title: 'How to evaluate a Google Ads keyword',
  subtitle: 'Not all keywords deserve the same investment. Here\'s our decision grid.',
  columns: ['Keyword type', 'Typical CPC', 'Conversion rate', 'Priority', 'Strategy'],
  rows: [
    ['Own brand', '€0.10-0.50', '8-15%', 'Defensive', 'Protect if competitors bid'],
    ['Transactional ("buy X")', '€2-10', '3-8%', '★★★★★', 'Priority budget'],
    ['Comparative ("best X")', '€1-5', '2-5%', '★★★★☆', 'Landing pages with proof'],
    ['Local ("X + city")', '€0.50-3', '5-10%', '★★★★☆', 'Excellent ROI if relevant area'],
    ['Generic ("X")', '€1-8', '1-3%', '★★★☆☆', 'Qualify with negatives'],
    ['Informational ("how to X")', '€0.30-1', '0.5-2%', '★★☆☆☆', 'Remarketing or SEO instead'],
  ],
};

// ============================================
// 8. LIVRABLES DATA (#livrables)
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Deliverables',
  accentColor: 'rw-cyan' as const,
  title: 'What do you concretely receive?',
  subtitle: '5 actionable deliverables. From keyword database to structure recommendations.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-base-mots-cles.webp',
      alt: 'Keyword database',
      title: 'Complete keyword database',
      desc: 'Structured file with volumes, estimated CPCs, intents and priorities',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-negatifs.webp',
      alt: 'Negative list',
      title: 'Negative list',
      desc: 'Keywords to exclude to avoid unqualified traffic',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-structure.webp',
      alt: 'Structure recommendations',
      title: 'Structure recommendations',
      desc: 'Optimal organization in your Google Ads account',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-budget.webp',
      alt: 'Budget estimate',
      title: 'Budget estimate',
      desc: 'Projection of budget to cover priority keywords',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-presentation.webp',
      alt: 'Findings presentation',
      title: 'Findings presentation',
      desc: 'Call to present analysis and answer your questions',
    },
  ],
};

// ============================================
// 9. QUAND DATA (#quand)
// ============================================
export const quandData = {
  sectionId: 'quand',
  badge: 'Timing',
  accentColor: 'rw-cyan' as const,
  title: 'When to do SEA semantic analysis',
  subtitle: '5 situations where semantic analysis makes the difference.',
  items: [
    {
      id: 1,
      icon: 'Rocket',
      title: 'Before launching Google Ads',
      description: 'To start on the right foundations and not waste startup budget. Analysis reveals priority keywords from the start.',
    },
    {
      id: 2,
      icon: 'TrendingDown',
      title: 'Stagnating account',
      description: 'To identify new opportunities and restart growth. Often, high-potential queries remain unexploited.',
    },
    {
      id: 3,
      icon: 'DollarSign',
      title: 'Budget flowing without results',
      description: 'To understand where money goes and redirect investments. Analysis reveals keywords consuming without converting.',
    },
    {
      id: 4,
      icon: 'Sparkles',
      title: 'New product or service',
      description: 'To identify potential of a new product/service before investing in advertising.',
    },
    {
      id: 5,
      icon: 'Globe',
      title: 'Geographic expansion',
      description: 'To adapt semantics to a new market. Queries vary by region.',
    },
  ],
};

// ============================================
// 10. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'How it works',
  subtitle: '4 steps from brief to delivery. Allow 1-2 weeks depending on complexity.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief',
      description: 'We understand your business, products/services, targets, objectives.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Collection',
      description: 'Extracting existing data, tool research, competitive analysis.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Analysis',
      description: 'Sorting, qualifying, prioritizing keywords. This is the bulk of the work.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Delivery',
      description: 'Deliverables handover and video presentation.',
    },
  ],
};

// ============================================
// 11. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about SEA semantic analysis.',
  items: [
    {
      id: 'faq-1',
      question: 'How many keywords will you analyze?',
      answer: 'It depends on your sector and the breadth of your offering. We aim for exhaustiveness on relevant queries, not an arbitrary number.',
    },
    {
      id: 'faq-2',
      question: 'Will identified keywords be implemented?',
      answer: 'Semantic analysis is a deliverable in itself. Implementation in your campaigns can be a separate setup or management engagement.',
    },
    {
      id: 'faq-3',
      question: 'How long does it take?',
      answer: 'Allow 1-2 weeks depending on your sector\'s complexity.',
    },
    {
      id: 'faq-4',
      question: 'Is the analysis useful for SEO too?',
      answer: 'Absolutely. Keywords that convert in SEA are often those to work on organically. We share these insights if you combine both channels.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 12. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best keyword is the one that converts, not the one with the most searches.',
  author: 'Perry Marshall',
  role: 'Google Ads Expert',
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Target what',
  titleHighlight: 'converts',
  description: 'Good semantic analysis is the foundation of a high-performing Google Ads account. It reveals what your customers actually search for and where to invest your budget.',
  secondaryDescription: 'First step: a brief to understand your business and objectives. We then deliver a complete analysis with prioritized recommendations.',
  buttonText: 'Request an analysis',
  checklistItems: [
    { id: '1', text: 'Free brief' },
    { id: '2', text: 'Delivery in 1-2 weeks' },
    { id: '3', text: 'Actionable deliverables' },
  ],
};
