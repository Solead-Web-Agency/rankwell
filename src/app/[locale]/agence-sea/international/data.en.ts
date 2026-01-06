/**
 * ============================================
 * DATA - International SEA Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'International Multi-Country Google Ads - Rankwell',
  description: 'International Google Ads and multilingual campaigns. International advertising on Google adapted to each market. ROI-driven international SEA.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA', href: '/en/sea-agency' },
    { label: 'International Google Ads' },
  ] as BreadcrumbItem[],
  title: 'International Google Ads to conquer new markets',
  description: 'You\'re launching campaigns in multiple countries. International SEA requires advertising adapted to each market, multilingual ads, and expert management. Offices in Paris and Dubai.',
  ctaText: 'Discuss your project',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'International Google Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Duplicating your French campaigns to other markets doesn\'t work. CPCs vary enormously from country to country. Messages that convert in France fall flat elsewhere. Your international advertising on Google must be adapted.',
    'With offices in Paris and Dubai, Rankwell manages multilingual Ads campaigns across Europe, MENA and beyond. Our international SEA expertise adapts strategy to each market while maintaining a consolidated view of your overall ROI.',
    'Every euro invested must return, <strong class="text-secondary dark:text-accent">regardless of which country</strong> it\'s spent in.',
  ],
  tocItems: [
    { id: 'inclus', label: 'What we bring', icon: 'Package' },
    { id: 'enjeux', label: 'The challenges', icon: 'CircleAlert' },
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'marches', label: 'Markets covered', icon: 'Globe' },
    { id: 'campagnes', label: 'Campaign types', icon: 'LayoutGrid' },
    { id: 'process', label: 'How it works', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Our contribution',
  accentColor: 'rw-cyan' as const,
  title: 'What we bring to international SEA',
  subtitle: 'Multi-market expertise to maximize your global ROI.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Per-market strategy',
      description: 'Bids, messages, landing pages adapted to each country',
    },
    {
      id: 2,
      icon: 'FolderTree',
      title: 'Optimized structure',
      description: 'Clear and scalable multi-country organization',
    },
    {
      id: 3,
      icon: 'Languages',
      title: 'Localized ads',
      description: 'Native copywriting, no automatic translation',
    },
    {
      id: 4,
      icon: 'ChartBar',
      title: 'ROI tracking by country',
      description: 'You know what each market returns',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'International PPC isn\'t about translating ads. It\'s about understanding how people in different markets search, think, and buy.',
  author: 'Brad Geddes',
  role: 'Founder Adalysis',
};

// ============================================
// 5. ENJEUX DATA (#enjeux)
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'Challenges',
  accentColor: 'rw-cyan' as const,
  title: 'The real challenges of international SEA',
  subtitle: 'Launching international campaigns without adaptation means wasting budget.',
  dimensions: [
    {
      dimension: 1,
      label: 'CPC',
      title: 'CPCs vary enormously',
      subtitle: 'A click costing €2 in France can cost $15 in the US or $0.50 in Morocco.',
      items: ['CPC analysis by market', 'Adapted bidding strategies', 'Realistic CPA targets by country'],
    },
    {
      dimension: 2,
      label: 'Messages',
      title: 'Messages must resonate locally',
      subtitle: 'A hook that works in France can be incomprehensible elsewhere.',
      items: ['Ad copy by native writers', 'A/B testing by market', 'Adapted extensions and assets'],
    },
    {
      dimension: 3,
      label: 'Tracking',
      title: 'Tracking must be granular',
      subtitle: 'Knowing that "international" returns isn\'t enough. You need to know what each country returns.',
      items: ['Tracking by country', 'Multi-market attribution', 'Consolidated dashboards with drill-down'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Currencies and time zones',
  text: 'Managing multi-country campaigns also means managing different currencies, offset time zones, and commercial calendars that don\'t align. Our experience in MENA markets has taught us to handle these complexities.',
};

// ============================================
// 7. TABLEAU CPC DATA
// ============================================
export const tableauCpcData = {
  sectionId: 'cpc',
  badge: 'Benchmark',
  accentColor: 'rw-cyan' as const,
  title: 'Average CPCs and potential by geographic zone',
  subtitle: 'Costs and opportunities vary enormously by market.',
  columns: ['Zone', 'Average Search CPC', 'Competition', 'ROI potential', 'Minimum budget'],
  rows: [
    ['France', '€1-4', '★★★★☆', '★★★★☆', '€2-5k/month'],
    ['UK', '£2-6', '★★★★★', '★★★★☆', '€5-10k/month'],
    ['Germany', '€1-5', '★★★★☆', '★★★★★', '€3-8k/month'],
    ['United States', '$3-15', '★★★★★', '★★★☆☆', '€10k/month min'],
    ['MENA (UAE, KSA)', '$0.5-3', '★★★☆☆', '★★★★★', '€2-5k/month'],
    ['Spain / Italy', '€0.5-2', '★★★☆☆', '★★★★☆', '€1.5-4k/month'],
  ],
};

// ============================================
// 8. APPROCHE DATA (#approche)
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Approach',
  accentColor: 'rw-cyan' as const,
  title: 'Our approach to international SEA',
  subtitle: 'A proven methodology to maximize ROI on your multi-country campaigns.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/international/approche-structure.webp',
      alt: 'Account structure',
      title: 'Clear account structure',
      desc: 'Campaigns organized by country or zone. Consistent naming. Separate budgets by market.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/international/approche-localisation.webp',
      alt: 'Ad localization',
      title: 'Ad localization',
      desc: 'No Google Translate translation. We work with native copywriters for ads that speak to each audience.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/international/approche-landing-pages.webp',
      alt: 'Landing pages',
      title: 'Adapted landing pages',
      desc: 'The ad attracts the click, the landing page converts. We ensure your pages are optimized for each market.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/international/approche-arbitrage.webp',
      alt: 'Dynamic allocation',
      title: 'Dynamic allocation',
      desc: 'Budgets aren\'t fixed. We reallocate to performing markets in real time.',
    },
  ],
};

// ============================================
// 9. MARCHES DATA (#marches)
// ============================================
export const marchesData = {
  sectionId: 'marches',
  badge: 'Coverage',
  accentColor: 'rw-cyan' as const,
  title: 'Markets we cover',
  subtitle: 'With offices in Paris and Dubai, we manage your campaigns across these zones.',
  reasons: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Europe',
      description: 'France, UK, Germany, Spain, Italy, Benelux, Switzerland, Nordic countries. We know CPC levels and specificities of each market.',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'MENA',
      description: 'UAE, Saudi Arabia, Qatar, Kuwait, Egypt. Fast-growing markets with attractive CPC opportunities.',
    },
    {
      id: 3,
      icon: 'Flag',
      title: 'North America',
      description: 'United States, Canada. The most competitive and expensive market. Requires a specific strategy to be profitable.',
    },
  ],
};

// ============================================
// 10. CAMPAGNES DATA (#campagnes)
// ============================================
export const campagnesData = {
  sectionId: 'campagnes',
  badge: 'Campaigns',
  accentColor: 'rw-cyan' as const,
  title: 'Campaign types managed',
  subtitle: 'All Google Ads formats, adapted to each market.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/international/campagne-search.webp',
      alt: 'Search',
      title: 'Search',
      desc: 'Campaigns on Google search network. Keywords localized by market, adapted ads.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/international/campagne-shopping.webp',
      alt: 'Shopping',
      title: 'Shopping',
      desc: 'For multi-country e-commerce. Product feeds by market, currencies, local shipping policies.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/international/campagne-display-youtube.webp',
      alt: 'Display YouTube',
      title: 'Display & YouTube',
      desc: 'Awareness and remarketing internationally. Visuals and videos adapted to local sensibilities.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/international/campagne-performance-max.webp',
      alt: 'Performance Max',
      title: 'Performance Max',
      desc: 'Multi-channel automated campaigns. We configure audience signals by market.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/international/campagne-demand-gen.webp',
      alt: 'Demand Gen',
      title: 'Demand Gen',
      desc: 'Demand generation on Discover, Gmail, YouTube. Creatives adapted to each culture.',
    },
    {
      id: 6,
      // image: '/images/pages/agence-sea/international/campagne-app.webp',
      alt: 'App Campaigns',
      title: 'App Campaigns',
      desc: 'User acquisition for your apps across different markets. Coordinated ASO and paid acquisition.',
    },
  ],
};

// ============================================
// 11. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'How an international SEA project works',
  subtitle: '4 steps to deploy your multi-country campaigns.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit & Scoping',
      description: 'Target markets, budgets, objectives by country, existing structure.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Setup',
      description: 'Account structure, campaigns, localized ads, tracking.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Launch',
      description: 'Activation by market, intensive monitoring, quick adjustments.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Optimization',
      description: 'Testing, arbitration, scaling profitable markets.',
    },
  ],
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about international SEA.',
  items: [
    {
      id: 'faq-1',
      question: 'Do we need a Google Ads account per country?',
      answer: 'Not necessarily. A single account with well-structured campaigns by country works very well in most cases. We recommend separate accounts only for specific situations (different legal entities, local agencies involved).',
    },
    {
      id: 'faq-2',
      question: 'How do you handle different currencies?',
      answer: 'We can manage in local currency or centralize in euros/dollars based on your accounting preference. Reporting is consolidated with automatic conversion so you have a clear view of your overall ROI.',
    },
    {
      id: 'faq-3',
      question: 'Can we start small and scale later?',
      answer: 'It\'s even recommended. We often launch on 2-3 priority markets, validate the model, then expand progressively. This allows learning without taking too much budget risk.',
    },
    {
      id: 'faq-4',
      question: 'How do you handle languages you don\'t speak?',
      answer: 'We work with native copywriters for each language. German, Spanish, Arabic, Italian: we have trusted partners integrated into our process. You keep a single contact at Rankwell.',
    },
    {
      id: 'faq-5',
      question: 'What minimum budget for international SEA?',
      answer: 'It depends on target markets. The US requires larger budgets than Southern Europe or MENA. We give you a realistic estimate during the first call based on your objectives and markets.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Grow your campaigns',
  titleHighlight: 'internationally',
  description: 'Paris, Dubai or video call. Let\'s discuss your target markets and tell you how to maximize your ROI.',
  secondaryDescription: 'Offices in Paris and Dubai. Multi-market management. Native copywriters.',
  buttonText: 'Discuss your project',
  checklistItems: [
    { id: '1', text: 'Free audit' },
    { id: '2', text: '15+ countries managed' },
    { id: '3', text: 'Native copywriters' },
  ],
};
