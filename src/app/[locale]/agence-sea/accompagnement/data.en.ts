/**
 * ============================================
 * DATA - SEA Management Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'ROI Expert Google Ads Consultant - Rankwell',
  description: 'Certified Google Ads consultant for managing your campaigns. Google Ads expert who optimizes your ROI daily. Results or we talk about it.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA', href: '/en/sea-agency' },
    { label: 'Google Ads Management' },
  ] as BreadcrumbItem[],
  title: 'Google Ads consultant for managing your campaigns',
  description: 'Google Ads doesn\'t optimize itself. Our Google Ads experts take the controls, adjust continuously, you collect the conversions.',
  ctaText: 'Entrust campaign management to us',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Ads Management',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Managing Google Ads requires time and expertise. Analyzing data, adjusting bids, testing ads, monitoring competition. It\'s a profession in itself.',
    'In-house, you rarely have the resources. Campaigns run on autopilot, budget flows, performance stagnates. With a dedicated Google Ads consultant, your campaigns are continuously optimized.',
    'Discover how our Google Ads experts and our <strong class="text-secondary dark:text-accent">business-centric</strong> approach transform your campaigns into a business machine. Every action aims to improve your ROI, not just keep campaigns active.',
  ],
  tocItems: [
    { id: 'inclus', label: 'What\'s included', icon: 'Package' },
    { id: 'actions', label: 'Daily actions', icon: 'Activity' },
    { id: 'impact', label: 'ROI impact', icon: 'TrendingUp' },
    { id: 'rythme', label: 'Optimization rhythm', icon: 'Clock' },
    { id: 'metriques', label: 'Key metrics', icon: 'ChartBar' },
    { id: 'formules', label: 'Packages', icon: 'LayoutGrid' },
    { id: 'transparence', label: 'Transparency', icon: 'Eye' },
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
  title: 'What our management includes',
  subtitle: 'Complete campaign management, results-oriented.',
  items: [
    {
      id: 1,
      icon: 'Settings',
      title: 'Continuous optimization',
      description: 'Bids, ads, audiences adjusted weekly',
    },
    {
      id: 2,
      icon: 'Eye',
      title: 'Daily monitoring',
      description: 'Anomaly detection and fast response',
    },
    {
      id: 3,
      icon: 'FileText',
      title: 'Transparent reporting',
      description: 'You know what we do and what it delivers',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Dedicated consultant',
      description: 'One contact who knows your account and challenges',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'In God we trust. All others must bring data.',
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 5. ACTIONS DATA (#actions)
// ============================================
export const actionsData = {
  sectionId: 'actions',
  badge: 'Daily',
  accentColor: 'rw-cyan' as const,
  title: 'What actions do we perform daily?',
  description: '7 optimization levers activated continuously. Every week, every month, we improve your campaigns.',
  cards: [
    {
      id: 1,
      icon: 'DollarSign',
      title: 'Bid optimization',
      description: 'Adjusting bidding strategies, max CPCs, modifiers. We find the sweet spot between volume and profitability.',
    },
    {
      id: 2,
      icon: 'Type',
      title: 'Keyword management',
      description: 'Adding new relevant keywords, excluding terms that don\'t convert, adjusting match types.',
    },
    {
      id: 3,
      icon: 'FlaskConical',
      title: 'Ad testing and optimization',
      description: 'Creating variants, analyzing performance, iterating toward messages that convert best.',
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Audience management',
      description: 'Remarketing, similar audiences, exclusions. We refine targeting to reach the right people.',
    },
    {
      id: 5,
      icon: 'Activity',
      title: 'Conversion tracking',
      description: 'Regular tracking verification, attribution, conversion path analysis.',
    },
    {
      id: 6,
      icon: 'Radar',
      title: 'Competitive monitoring',
      description: 'Monitoring competitors on your keywords, adjusting strategy when necessary.',
    },
    {
      id: 7,
      icon: 'ChartBar',
      title: 'Regular reporting',
      description: 'Monthly check-in (or more frequent as needed) on performance, actions taken, recommendations.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Data for overall strategy',
  text: 'Insights collected from your Google Ads campaigns (converting keywords, working messages) also feed your SEO strategy and customer knowledge. We share these learnings with you.',
};

// ============================================
// 7. TABLEAU IMPACT DATA (#impact)
// ============================================
export const tableauImpactData = {
  sectionId: 'impact',
  badge: 'Impact',
  accentColor: 'rw-cyan' as const,
  title: 'Optimizations with highest ROI impact',
  subtitle: 'Here are the actions we prioritize because they have the most measurable impact on your results.',
  columns: ['Optimization', 'Typical impact', 'Frequency', 'Time to results'],
  rows: [
    ['Adding negative keywords', '-15 to -25% wasted spend', 'Weekly', 'Immediate'],
    ['Device bid adjustments', '+10 to +20% ROAS', 'Weekly', '1-2 weeks'],
    ['Ad testing (RSA)', '+15 to +30% CTR', 'Bi-monthly', '2-4 weeks'],
    ['Audience optimization', '+20 to +40% conversion rate', 'Monthly', '2-4 weeks'],
    ['Campaign restructuring', '+30 to +50% overall efficiency', 'Quarterly', '1-2 months'],
    ['Smart Bidding migration', '+10 to +25% conversions', 'When enough data', '2-6 weeks'],
  ],
};

// ============================================
// 8. RYTHME DATA (#rythme)
// ============================================
export const rythmeData = {
  sectionId: 'rythme',
  badge: 'Rhythm',
  accentColor: 'rw-cyan' as const,
  title: 'How often do we optimize?',
  subtitle: '4 intervention levels. From daily monitoring to quarterly strategic reviews.',
  steps: [
    {
      id: 'rythme-1',
      stepNumber: '01',
      title: 'Daily',
      description: 'Monitoring for anomalies, spending spikes, alerts. We react quickly if something goes wrong.',
    },
    {
      id: 'rythme-2',
      stepNumber: '02',
      title: 'Weekly',
      description: 'Performance analysis for the week, bid adjustments, ad optimization, keyword management.',
    },
    {
      id: 'rythme-3',
      stepNumber: '03',
      title: 'Monthly',
      description: 'Complete review, detailed reporting, strategic recommendations, follow-up call with you.',
    },
    {
      id: 'rythme-4',
      stepNumber: '04',
      title: 'Quarterly',
      description: 'Strategic review, objective adjustments, planning for next actions.',
    },
  ],
};

// ============================================
// 9. METRIQUES DATA (#metriques)
// ============================================
export const metriquesData = {
  sectionId: 'metriques',
  badge: 'KPIs',
  accentColor: 'rw-cyan' as const,
  title: 'What metrics do we monitor?',
  subtitle: '6 key metrics to manage your campaigns. But the final decision always rests on business impact.',
  dimensions: [
    {
      dimension: 1,
      label: 'Profitability',
      title: 'Cost per conversion (CPA)',
      subtitle: 'How much each lead or sale costs you. The key metric for evaluating efficiency.',
      items: ['Tracking by campaign', 'Industry benchmark', 'Target to achieve'],
    },
    {
      dimension: 2,
      label: 'Performance',
      title: 'Return on ad spend (ROAS)',
      subtitle: 'How much each euro invested returns. Essential for e-commerce.',
      items: ['Precise calculation', 'By product/category', 'Monthly trend'],
    },
    {
      dimension: 3,
      label: 'Efficiency',
      title: 'Conversion rate',
      subtitle: 'What share of traffic converts. Indicator of targeting and landing page quality.',
      items: ['By traffic source', 'By device', 'Period comparison'],
    },
    {
      dimension: 4,
      label: 'Quality',
      title: 'Quality Score & CPC',
      subtitle: 'Your ads\' quality score and cost per click. Optimization levers.',
      items: ['Score by keyword', 'Average CPC', 'Impression share'],
    },
  ],
};

// ============================================
// 10. FORMULES DATA (#formules)
// ============================================
export const formulesData = {
  sectionId: 'formules',
  badge: 'Packages',
  accentColor: 'rw-cyan' as const,
  title: 'Which management format to choose?',
  subtitle: 'Three packages based on your internal resources and needs. From complete management to occasional consulting.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/accompagnement/formule-gestion-complete.webp',
      alt: 'Complete Google Ads management',
      title: 'Complete management',
      desc: 'We handle everything. You give us your objectives and budget, we take care of the rest. You receive reports and validate strategic directions.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/accompagnement/formule-co-pilotage.webp',
      alt: 'Google Ads co-management',
      title: 'Co-management',
      desc: 'You have a team managing day-to-day, we provide support: regular audits, recommendations, training, validation of major decisions.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/accompagnement/formule-conseil-ponctuel.webp',
      alt: 'Occasional Google Ads consulting',
      title: 'Occasional consulting',
      desc: 'You\'re autonomous but need expert insight from time to time. We intervene on demand for audits or specific issues.',
    },
  ],
};

// ============================================
// 11. TRANSPARENCE DATA (#transparence)
// ============================================
export const transparenceData = {
  sectionId: 'transparence',
  badge: 'Commitments',
  accentColor: 'rw-cyan' as const,
  title: 'Our transparency commitment',
  subtitle: 'Clear principles for a trusting relationship.',
  categories: [
    {
      category: 'Full access',
      icon: 'Key',
      items: ['Your account, your access', 'Full admin', 'No dependency'],
    },
    {
      category: 'Separate budget',
      icon: 'Wallet',
      items: ['Google fees distinct', 'Clear fees', 'Zero hidden margin'],
    },
    {
      category: 'Clear reporting',
      icon: 'FileText',
      items: ['Detailed actions', 'Measured results', 'Recommendations'],
    },
    {
      category: 'No commitment',
      icon: 'LockOpen',
      items: ['No long contract', 'Quality = loyalty', 'Total freedom'],
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
  subtitle: 'Everything you need to know about our Google Ads management.',
  items: [
    {
      id: 'faq-1',
      question: 'How much does management cost?',
      answer: 'Fixed fees or percentage of media budget, depending on your campaign size. We establish a clear proposal after understanding your needs.',
    },
    {
      id: 'faq-2',
      question: 'What is the commitment duration?',
      answer: 'We recommend a minimum of 3 months to have time to optimize and see results. But no 12-month commitment if you\'re not satisfied.',
    },
    {
      id: 'faq-3',
      question: 'Who will be my contact?',
      answer: 'A dedicated consultant who knows your account and challenges. No constant turnover, continuity.',
    },
    {
      id: 'faq-4',
      question: 'What happens if I want to stop?',
      answer: 'The account is yours, with all its history. We do a proper handover and you continue as you wish.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The key is not to spend money, but to invest it.',
  author: 'Larry Page',
  role: 'Co-founder Google',
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Focus on',
  titleHighlight: 'your business',
  description: 'We manage your Google Ads campaigns, you manage your company. Each to their own. Your campaigns are continuously optimized to maximize ROI.',
  secondaryDescription: 'First step: an audit of your current campaigns or a scoping call if starting from scratch. We propose management adapted to your needs and budget.',
  buttonText: 'Discuss management',
  checklistItems: [
    { id: '1', text: 'Free audit' },
    { id: '2', text: 'Proposal within 48h' },
    { id: '3', text: 'No long commitment' },
  ],
};
