/**
 * ============================================
 * DATA - Main SEA Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'ROI-Driven Google Ads Agency - Rankwell',
  description: 'Google Ads and SEA agency that turns clicks into customers. Transparent pricing, measurable ROI. Discover why our campaigns convert better.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA' },
  ] as BreadcrumbItem[],
  title: 'Google Ads agency driven by performance',
  description: 'SEA without strategy means burning budget. Our SEA agency transforms every euro invested into measurable results. Transparent pricing, guaranteed ROI.',
  ctaText: 'Discuss your campaigns',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Ads Agency',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Many advertisers manage Google Ads like a click machine. More budget = more visits. Except visits don\'t pay the bills. Conversions do.',
    'Our SEA agency approach is the same as for SEO: <strong class="text-secondary dark:text-accent">business-centric</strong>. We don\'t seek to maximize impressions or clicks. We seek to maximize your ROI. And we tell you clearly how much it costs.',
    'Discover how our rigor on targeting, bidding, and conversion tracking transforms your Google Ads campaigns into a business machine. Hard work, not magic.',
  ],
  tocItems: [
    { id: 'expertise', label: 'Our expertise', icon: 'Award' },
    { id: 'pourquoi', label: 'Why SEA', icon: 'Zap' },
    { id: 'methode', label: 'Our method', icon: 'ListChecks' },
    { id: 'services', label: 'Our services', icon: 'Briefcase' },
    { id: 'campagnes', label: 'Campaign types', icon: 'LayoutGrid' },
    { id: 'encheres', label: 'Bidding strategies', icon: 'TrendingUp' },
    { id: 'synergie', label: 'SEA + SEO', icon: 'Layers' },
    { id: 'pour-qui', label: 'For whom', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#expertise)
// ============================================
export const recapBoxData = {
  sectionId: 'expertise',
  badge: 'Expertise',
  accentColor: 'rw-cyan' as const,
  title: 'What sets our SEA expertise apart',
  subtitle: 'A rigorous approach centered on your business results.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'ROI-driven management',
      description: 'Every campaign measured by its return on investment',
    },
    {
      id: 2,
      icon: 'Search',
      title: 'Market knowledge',
      description: 'In-depth analysis of your sector and competitors',
    },
    {
      id: 3,
      icon: 'Eye',
      title: 'Total transparency',
      description: 'You know where every euro goes and what it brings back',
    },
    {
      id: 4,
      icon: 'ChartBar',
      title: 'Business-centric approach',
      description: 'Conversions and revenue, not just clicks',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The best marketing doesn\'t feel like marketing.',
  author: 'Tom Fishburne',
  role: 'Founder Marketoonist',
};

// ============================================
// 5. POURQUOI SEA DATA (#pourquoi)
// ============================================
export const pourquoiSeaData = {
  sectionId: 'pourquoi',
  badge: 'Benefits',
  accentColor: 'rw-cyan' as const,
  title: 'Why is SEA still essential?',
  subtitle: 'SEA complements SEO. It delivers immediate results and precise targeting. Four reasons to include it in your strategy.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/pourquoi-resultats-immediats.webp',
      alt: 'Immediate SEA results',
      title: 'Immediate results',
      desc: 'SEO takes time. SEA delivers traffic from day one. Ideal for launches, promotions, or high seasonality.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/pourquoi-ciblage-precis.webp',
      alt: 'Precise Google Ads targeting',
      title: 'Precise targeting',
      desc: 'Keywords, geography, schedules, devices, audiences. You reach exactly who you want, when you want.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/pourquoi-controle-total.webp',
      alt: 'Total campaign control',
      title: 'Total control',
      desc: 'Budget, bids, delivery: everything is configurable. You keep control, we manage day-to-day.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/pourquoi-mesurabilite.webp',
      alt: 'SEA measurability',
      title: 'Measurability',
      desc: 'Every click, every conversion, every euro is tracked. No ambiguity about what works.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'SEA and customer insights',
  text: 'SEA data is valuable. It reveals what your prospects actually search for, which words trigger action, which pages convert. We use these insights to refine your overall strategy.',
};

// ============================================
// 7. METHODE DATA (#methode)
// ============================================
export const methodeData = {
  sectionId: 'methode',
  badge: 'Method',
  accentColor: 'rw-cyan' as const,
  title: 'How do we manage your campaigns?',
  subtitle: 'Our method rests on 5 pillars. From understanding your business to transparent reporting.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Understand your business',
      description: 'Before creating a campaign, we understand your margins, sales cycle, objectives. SEA must be profitable, not just active.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Structure intelligently',
      description: 'Clean accounts, organized campaigns, coherent ad groups. A clear structure facilitates optimization and reporting.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Target with precision',
      description: 'No broad targeting that wastes budget. We identify profitable keywords, exclude what doesn\'t convert, refine continuously.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Optimize relentlessly',
      description: 'Bids, ads, extensions, audiences. We test, measure, improve. Every week, every month.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Report with transparency',
      description: 'You know exactly where your budget goes, what it returns, what we\'re doing to improve it. No black box.',
    },
  ],
};

// ============================================
// 8. SERVICES SEA DATA (#services)
// ============================================
export const servicesSeaData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-cyan' as const,
  title: 'What SEA services do we offer?',
  subtitle: 'Three complementary services to cover all your Google Ads needs. From initial setup to continuous optimization.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/service-setup.webp',
      imageAlt: 'Google Ads SEA Setup',
      title: 'SEA Setup',
      description: 'Account creation, campaign structure, tracking configuration. We lay the foundations for a high-performing account.',
      href: '/en/sea-agency/setup',
      buttonText: 'Learn more',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/service-accompagnement.webp',
      imageAlt: 'SEA Management',
      title: 'Management & monitoring',
      description: 'Continuous campaign management, bid optimization, ad testing, strategic adjustments.',
      href: '/en/sea-agency/management',
      buttonText: 'Learn more',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/service-analyse-semantique.webp',
      imageAlt: 'SEA Semantic Analysis',
      title: 'SEA Keyword Analysis',
      description: 'Audit of your keywords, opportunity identification, semantic restructuring for better performance.',
      href: '/en/sea-agency/semantic-analysis',
      buttonText: 'Learn more',
    },
  ],
};

// ============================================
// 9. TYPES CAMPAGNES DATA (#campagnes)
// ============================================
export const campagnesData = {
  sectionId: 'campagnes',
  badge: 'Campaigns',
  accentColor: 'rw-cyan' as const,
  title: 'What types of campaigns do we manage?',
  subtitle: 'Five campaign types to cover all objectives. Each has its specifics and use cases.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/campagne-search.webp',
      alt: 'Google Ads Search Campaigns',
      title: 'Search',
      desc: 'Classic text ads on Google results. The core of SEA, the one that captures intent.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/campagne-shopping.webp',
      alt: 'Shopping Campaigns',
      title: 'Shopping',
      desc: 'For e-commerce. Your products directly in search results, with image and price.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/campagne-display.webp',
      alt: 'Display Campaigns',
      title: 'Display',
      desc: 'Banners on Google partner sites network. For awareness, remarketing, audiences.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/campagne-performance-max.webp',
      alt: 'Performance Max Campaigns',
      title: 'Performance Max',
      desc: 'Google\'s automated campaigns that broadcast across all channels. We know how to configure them for real performance.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/campagne-youtube.webp',
      alt: 'YouTube Ads Campaigns',
      title: 'YouTube Ads',
      desc: 'Video for awareness or conversion. An underutilized lever by many advertisers.',
    },
  ],
};

// ============================================
// 10. TABLEAU ENCHERES DATA (#encheres)
// ============================================
export const tableauEncheresData = {
  sectionId: 'encheres',
  badge: 'Strategies',
  accentColor: 'rw-cyan' as const,
  title: 'Which bidding strategy for your objective?',
  subtitle: 'Google offers several strategies. Here\'s when to use each one.',
  columns: ['Strategy', 'Objective', 'When to use', 'Prerequisites'],
  rows: [
    ['Maximize conversions', 'Lead/sale volume', 'Fixed budget, need volume', '30+ conversions/month minimum'],
    ['Target CPA', 'Controlled cost per acquisition', 'Precise profitability target', '50+ conversions/month, stable history'],
    ['Target ROAS', 'Return on ad spend', 'E-commerce with conversion values', 'E-commerce tracking configured'],
    ['Maximize clicks', 'Raw traffic', 'Awareness, launch, little data', 'None (but limited value)'],
    ['Manual CPC', 'Total control', 'Tests, very specific niches', 'Time to optimize manually'],
    ['Target impression share', 'Maximum visibility', 'Brand, competitive defense', 'Substantial budget'],
  ],
};

// ============================================
// 11. SYNERGIE SEA+SEO DATA (#synergie)
// ============================================
export const synergieData = {
  sectionId: 'synergie',
  badge: 'Synergy',
  accentColor: 'rw-cyan' as const,
  title: 'Why combine SEA and SEO?',
  subtitle: 'SEA and SEO aren\'t competing. They reinforce each other. We manage both to maximize Search as a whole.',
  items: [
    {
      id: 1,
      icon: 'Maximize2',
      title: 'Complete coverage',
      description: 'SEA covers positions SEO doesn\'t reach yet',
    },
    {
      id: 2,
      icon: 'Database',
      title: 'Cross-channel data',
      description: 'SEA data (converting keywords) feeds SEO strategy',
    },
    {
      id: 3,
      icon: 'Clock',
      title: 'Long-term independence',
      description: 'SEO reduces paid dependency over time',
    },
    {
      id: 4,
      icon: 'CircleCheck',
      title: 'Double presence',
      description: 'Combined presence (organic + paid) increases credibility',
    },
  ],
};

// ============================================
// 12. POUR QUI DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is our SEA management for?',
  subtitle: 'Our SEA expertise is for companies that want to make their advertising investment profitable. The sector matters less than the ROI ambition.',
  criteria: [
    'E-commerce looking to generate direct sales and make every click profitable',
    'Lead generation to capture qualified prospects at controlled cost',
    'SaaS and services to acquire users or demo requests',
    'Launch or seasonality when you need volume quickly',
  ],
  ctaTitle: 'Sound like you?',
  ctaDescription: 'Let\'s discuss your objectives and how SEA can help you achieve them.',
  ctaButtonText: 'Book a call',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 13. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Important note',
  text: 'Google Ads without reliable tracking is flying blind. We systematically verify that your conversions are properly measured before optimizing. Without reliable data, no informed decisions.',
};

// ============================================
// 14. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Frequently asked questions',
  subtitle: 'Answers to questions you might have about our SEA management.',
  items: [
    {
      id: 'faq-1',
      question: 'What is Google Ads pricing and what budget should I plan?',
      answer: 'Google Ads pricing varies depending on your sector and keyword competition. There\'s no technical minimum imposed by Google. To get significant results and exploitable data, we generally recommend at least €2-3k/month in media budget. Below that, volumes are often insufficient for effective optimization.',
    },
    {
      id: 'faq-2',
      question: 'How do you charge for your Google Ads agency services?',
      answer: 'Our compensation can be fixed management fees or a percentage of media budget. It depends on account size and your preferences. We discuss what makes sense for your situation. No hidden commissions on Google Ads pricing, everything is transparent.',
    },
    {
      id: 'faq-3',
      question: 'How long to see results?',
      answer: 'Time to see SEA results is short for traffic (immediate) but longer for optimization. Traffic comes from day one. Optimization to reach target profitability typically takes 2-3 months of testing and adjustments.',
    },
    {
      id: 'faq-4',
      question: 'Do you work with platforms other than Google?',
      answer: 'Our main focus is Google Ads, which represents the majority of paid Search. That\'s where we have the most expertise. For Meta Ads or LinkedIn Ads, we can discuss based on your needs and refer you if necessary.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Half the money I spend on advertising is wasted; the trouble is I don\'t know which half.',
  author: 'John Wanamaker',
  role: 'Marketing Pioneer (SEA solves this problem)',
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Make your',
  titleHighlight: 'Ads investment profitable',
  description: 'Google Ads can be a money pit or a business machine. The difference is strategy, tracking, and rigorous execution. We transform your budget into measurable conversions.',
  secondaryDescription: 'First step: an audit of your current account or scoping for a new account. We give you a clear vision of the potential and priority actions.',
  buttonText: 'Discuss your campaigns',
  checklistItems: [
    { id: '1', text: 'Free audit' },
    { id: '2', text: 'No commitment' },
    { id: '3', text: 'ROI focus' },
  ],
};
