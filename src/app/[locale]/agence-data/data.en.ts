/**
 * ============================================
 * DATA - Data Marketing Agency Page Content (Pillar Page)
 * ============================================
 *
 * URL: /en/data-agency
 * Keywords: Data marketing agency, Analytics agency, Data-driven marketing
 * Intent: Transactional
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Data Marketing Agency: Analytics, Tracking, CRO - Rankwell',
  description: 'Your data marketing agency transforms your data into decisions. GA4 analytics, GTM tracking, CRO. Adopt a data driven approach to boost your ROI.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'Data' },
  ] as BreadcrumbItem[],
  title: 'Data marketing agency: decisions based on facts',
  description: 'Tracking, Analytics, CRO. We measure what matters, identify what blocks, optimize what converts. A data driven approach to drive your growth.',
  ctaText: 'Discuss your data needs',
  ctaHref: '/en/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Data Marketing Agency',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'You invest in SEO, SEA, content. But do you really know what works? Which channels generate your best customers? Where are you losing conversions? Data marketing answers these questions.',
    'Without reliable analytics, you\'re flying blind. You optimize by guesswork. You miss opportunities without even knowing it. Worse still: you\'re not building the audience knowledge that would refine every action.',
    'Discover how our analytics agency transforms your raw data into actionable intelligence. This is the foundation of the <strong class="text-secondary dark:text-accent">business centrix</strong> approach: a data driven strategy for making the right decisions.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Our expertise', icon: 'Award' },
    { id: 'pourquoi', label: 'Why data', icon: 'ChartBar' },
    { id: 'maturite', label: 'Data maturity', icon: 'Gauge' },
    { id: 'services', label: 'Our services', icon: 'Briefcase' },
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'synergie', label: 'Synergy', icon: 'Layers' },
    { id: 'pour-qui', label: 'For whom', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Our expertise',
  accentColor: 'rw-purple' as const,
  title: 'What our Data expertise covers',
  subtitle: 'From collection to optimization, a complete view of your data.',
  items: [
    {
      id: 1,
      icon: 'Activity',
      title: 'Reliable tracking',
      description: 'GTM, GA4, properly measured Ads conversions',
    },
    {
      id: 2,
      icon: 'ChartBar',
      title: 'Actionable analytics',
      description: 'Dashboards and reports that lead to decisions',
    },
    {
      id: 3,
      icon: 'TrendingUp',
      title: 'Business-oriented CRO',
      description: 'Data-based conversion rate optimization',
    },
    {
      id: 4,
      icon: 'Layers',
      title: 'Unified vision',
      description: 'SEO + SEA + user behavior in a single framework',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Without data, you\'re just another person with an opinion.',
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 5. POURQUOI DATA (#pourquoi) - For FeaturesGrid
// ============================================
export const pourquoiData = {
  sectionId: 'pourquoi',
  badge: 'Data Marketing',
  accentColor: 'rw-purple' as const,
  title: 'Why data marketing is non-negotiable',
  subtitle: '4 fundamental reasons. Data driven marketing transforms intuition into evidence-based steering.',
  items: [
    {
      id: 1,
      alt: 'Measure real ROI data marketing',
      title: 'Measure real ROI',
      desc: 'Are your SEO and SEA campaigns really generating business? Without proper tracking, you can\'t know. Our analytics agency gives you the answers.',
    },
    {
      id: 2,
      alt: 'Identify conversion leaks',
      title: 'Identify leaks',
      desc: 'Your traffic is growing but not your conversions? There\'s a leak somewhere. A data driven approach lets you find and fix it.',
    },
    {
      id: 3,
      alt: 'Prioritize marketing actions',
      title: 'Prioritize actions',
      desc: 'You can\'t do everything. Data marketing tells you where to focus your efforts for maximum impact.',
    },
    {
      id: 4,
      alt: 'Prove marketing value',
      title: 'Prove value',
      desc: 'To the board, to management, to investors. Solid figures to demonstrate the impact of your marketing actions.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Data and market knowledge',
  text: 'Every piece of data collected enriches your understanding of the market. Who are your visitors? Where do they come from? What are they looking for? This accumulated knowledge becomes a competitive advantage: you know what your competitors don\'t.',
};

// ============================================
// 7. TABLEAU MATURITÉ DATA (#maturite)
// ============================================
export const tableauMaturiteData = {
  sectionId: 'maturite',
  badge: 'Diagnostic',
  accentColor: 'rw-purple' as const,
  title: 'Diagnose your data maturity',
  subtitle: 'Where are you? Here are the 4 levels of data maturity we encounter.',
  columns: ['Level', 'Symptoms', 'Risks', 'Action priority'],
  rows: [
    ['1. Blind', 'No GA4 or poorly configured, no conversions tracked', 'Guesswork decisions, unknown ROI', 'Urgent tracking'],
    ['2. Collector', 'GA4 in place but nobody looks, unused data', 'Aging data, missed opportunities', 'Dashboards + training'],
    ['3. Analyzer', 'Regular reports but no action, data ≠ decision', 'Analysis paralysis, cost without value', 'Decision processes'],
    ['4. Optimizer', 'Data → decision → test → iterate, continuous improvement', 'None (this is the goal)', 'Maintain and deepen'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. SERVICES DATA (#services) - For ServicesCards
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-purple' as const,
  title: 'Our Data expertise',
  subtitle: '3 complementary pillars. From foundational tracking to conversion optimization.',
  items: [
    {
      id: 'tracking',
      title: 'Tracking & Tagging plan',
      description: 'The foundation of everything. Without reliable tracking, no reliable data. We configure Google Tag Manager, events, conversions. Properly.',
      href: '/en/data-agency/tracking',
      buttonText: 'Discover tracking',
      accentColor: 'rw-purple' as const,
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'GA4, dashboards, reports. We transform your raw data into actionable insights. You understand what\'s happening on your site.',
      href: '/en/data-agency/analytics',
      buttonText: 'Discover analytics',
      accentColor: 'rw-purple' as const,
    },
    {
      id: 'cro',
      title: 'CRO Audit',
      description: 'Conversion rate optimization. We analyze user journeys, identify friction points, propose testable improvements.',
      href: '/en/data-agency/cro',
      buttonText: 'Discover CRO',
      accentColor: 'rw-purple' as const,
    },
  ],
};

// ============================================
// 9. APPROCHE DATA (#approche) - For ProcessSteps
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Approach',
  accentColor: 'rw-purple' as const,
  title: 'How do we approach Data?',
  subtitle: '4 steps that guide our approach. From collection to action, every phase counts.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Start with foundations',
      description: 'Before analyzing, you need to collect. We ensure your tracking is clean, complete, reliable. Otherwise, everything else is biased.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Define the right KPIs',
      description: 'We don\'t measure everything. We measure what matters for your business. Conversions, revenue, LTV. Not vanity metrics.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Make data accessible',
      description: 'Clear dashboards, readable reports. Data should be usable by your teams, not reserved for data scientists.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Transform into actions',
      description: 'Data without action is useless. Every insight must lead to a decision, an optimization, a test.',
    },
  ],
};

// ============================================
// 10. SYNERGIE DATA - For CategoriesGrid
// ============================================
export const synergieData = {
  sectionId: 'synergie',
  badge: 'Synergy',
  accentColor: 'rw-purple' as const,
  title: 'How Data and Search feed each other',
  subtitle: 'A virtuous cycle. Data improves Search, Search generates data.',
  categories: [
    {
      category: 'Keyword selection',
      icon: 'Type',
      items: ['Conversion data', 'Query prioritization', 'ROI per keyword'],
    },
    {
      category: 'Performing content',
      icon: 'FileText',
      items: ['Journey analysis', 'Converting pages', 'Continuous optimization'],
    },
    {
      category: 'Maximize traffic',
      icon: 'TrendingUp',
      items: ['CRO on Search', 'Value per visitor', 'Tests and iterations'],
    },
    {
      category: 'Unified vision',
      icon: 'Layers',
      items: ['SEO + SEA combined', 'User behavior', 'Integrated dashboards'],
    },
  ],
};

// ============================================
// 11. POUR QUI DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is our Data expertise for?',
  subtitle: 'Any business investing in digital marketing that wants to measure impact.',
  criteria: [
    'E-commerce sites that want to understand the purchase journey and optimize the conversion funnel',
    'Lead gen sites looking to track conversions and measure lead quality',
    'SaaS companies that need to track activations, churn and customer value',
    'Any business investing in digital that wants to know if it\'s really paying off',
  ],
  ctaTitle: 'Sound like you?',
  ctaDescription: 'A diagnostic of your current configuration identifies what works and what\'s missing.',
  ctaButtonText: 'Request a diagnostic',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 12. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Important note',
  text: 'Data alone isn\'t enough. Without a clear business strategy, you\'ll collect metrics without knowing what to do with them. We always start by defining your objectives before configuring anything.',
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about our Data expertise.',
  items: [
    {
      id: 'faq-1',
      question: 'Is our tracking reliable?',
      answer: 'Tracking reliability is often overestimated by internal teams. We regularly find gaps of 20 to 40% between actual conversions and those measured. A quick audit can verify the state of your configuration.',
    },
    {
      id: 'faq-2',
      question: 'GA4 or another analytics solution?',
      answer: 'The choice of analytics solution depends on your specific needs. GA4 is our default recommendation: free, powerful, perfectly integrated with the Google ecosystem (Ads, Search Console). For enhanced privacy needs or very high volumes, we can work with other solutions.',
    },
    {
      id: 'faq-3',
      question: 'Do you do A/B testing?',
      answer: 'A/B testing is part of our CRO arsenal. We can recommend and support tests as part of a structured optimization approach. It\'s one tool among others, to be used when traffic volume allows.',
    },
    {
      id: 'faq-4',
      question: 'How do you handle GDPR compliance?',
      answer: 'GDPR compliance is built into all our implementations. Consent management, data anonymization, storage periods respected. We collect the maximum legally possible while respecting user choices.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'What gets measured gets managed.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Stop guessing,',
  titleHighlight: 'start knowing',
  description: 'Data marketing isn\'t a luxury. It\'s the foundation of effective marketing. Reliable tracking, actionable analytics, business-oriented CRO: each building block creates your competitive advantage.',
  secondaryDescription: 'First step: a diagnostic of your current configuration. Our data marketing agency identifies what works, what\'s missing, and opportunities for improvement.',
  buttonText: 'Discuss your data needs',
  checklistItems: [
    { id: '1', text: 'Free diagnostic' },
    { id: '2', text: 'Data driven approach' },
    { id: '3', text: 'Paris & Dubai' },
  ],
};
