/**
 * ============================================
 * DATA - CRO Audit Page Content
 * ============================================
 *
 * URL: /en/data-agency/cro
 * Keywords: CRO Audit, Conversion optimization, CRO Agency, Conversion rate
 * Intent: Transactional
 * Parent: /en/data-agency
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'CRO Agency: Conversion Rate Optimization - Rankwell',
  description: 'Expert CRO agency in conversion rate optimization. Complete CRO audit for e-commerce and lead gen. Boost your conversion rate and revenue.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'Data', href: '/en/data-agency' },
    { label: 'CRO' },
  ] as BreadcrumbItem[],
  title: 'CRO agency: convert more with the same traffic',
  description: 'You have traffic. But does it convert? Conversion rate optimization turns your visitors into customers. E-commerce or lead gen, our CRO audit boosts your results.',
  ctaText: 'Request a CRO audit',
  ctaHref: '/en/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'CRO Agency',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'Most companies focus on traffic. More visitors = more customers, right? Not that simple. If your e-commerce conversion rate is 1%, you can double your traffic... or double your conversion rate.',
    'Conversion rate optimization involves identifying why your visitors don\'t convert, and fixing the friction points. The result is the same as doubling traffic, but the cost is often much lower.',
    'Discover how our CRO audit reveals the invisible blockers costing you conversions. Every percentage point gained is additional revenue. This is the <strong class="text-secondary dark:text-accent">business centrix</strong> approach pushed to its maximum: maximizing the value of every visitor.',
  ],
  tocItems: [
    { id: 'inclus', label: 'The audit', icon: 'ClipboardList' },
    { id: 'roi', label: 'CRO ROI', icon: 'TrendingUp' },
    { id: 'frictions', label: 'Friction impact', icon: 'TriangleAlert' },
    { id: 'dimensions', label: 'Dimensions', icon: 'Layers' },
    { id: 'livrables', label: 'Deliverables', icon: 'Package' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Our audit',
  accentColor: 'rw-purple' as const,
  title: 'What our CRO audit includes',
  subtitle: 'A complete analysis to identify and fix friction points.',
  items: [
    {
      id: 1,
      icon: 'ChartBar',
      title: 'Quantitative analysis',
      description: 'User journeys, exit rates, conversion funnel',
    },
    {
      id: 2,
      icon: 'MousePointer',
      title: 'Behavioral analysis',
      description: 'Heatmaps, scrollmaps, session recordings',
    },
    {
      id: 3,
      icon: 'Palette',
      title: 'UX/UI audit',
      description: 'Clarity, visual hierarchy, CTA effectiveness',
    },
    {
      id: 4,
      icon: 'ListOrdered',
      title: 'Prioritized recommendations',
      description: 'Potential impact vs ease of implementation',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Conversion is about persuasion, and persuasion is about understanding people.',
  author: 'Peep Laja',
  role: 'Founder CXL',
};

// ============================================
// 5. ROI DATA (#roi) - For StepsDimensions
// ============================================
export const roiData = {
  sectionId: 'roi',
  badge: 'ROI',
  accentColor: 'rw-purple' as const,
  title: 'Why does CRO offer exceptional ROI?',
  subtitle: 'The math is simple. Same traffic, more conversions, no additional acquisition cost.',
  dimensions: [
    {
      dimension: 1,
      label: 'Before',
      title: 'Current situation',
      subtitle: 'Your performance with a standard conversion rate.',
      items: ['10,000 visitors / month', 'Conversion rate: 2%', '= 200 conversions'],
    },
    {
      dimension: 2,
      label: 'After',
      title: 'After CRO optimization',
      subtitle: 'Same performance with an optimized rate.',
      items: ['10,000 visitors / month (unchanged)', 'Conversion rate: 3%', '= 300 conversions', '+50% conversions without spending more'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Key data',
  text: 'On average, a 20 to 30% improvement in e-commerce conversion rate is realistic after a CRO audit. On a site with 100k monthly revenue, that represents 20 to 30k in additional monthly revenue.',
};

// ============================================
// 7. TABLEAU FRICTIONS DATA (#frictions)
// ============================================
export const tableauFrictionsData = {
  sectionId: 'frictions',
  badge: 'Impact',
  accentColor: 'rw-purple' as const,
  title: 'CRO optimization impact by friction type',
  subtitle: 'Not all frictions have the same impact. Here\'s our prioritization grid based on hundreds of audits.',
  columns: ['Friction type', 'Average impact', 'Fix effort', 'Priority'],
  rows: [
    ['Form too long (>5 fields)', '-25 to -50% completions', 'Low (1-2 days)', '★★★★★ Immediate'],
    ['Checkout requiring account creation', '-30% abandonments', 'Medium (1 week)', '★★★★★ Immediate'],
    ['CTA not visible or poorly placed', '-15 to -30% clicks', 'Low (few hours)', '★★★★☆ Priority'],
    ['Load time >3s', '-20% per additional second', 'Variable (technical)', '★★★★☆ Priority'],
    ['Absence of social proof', '-10 to -20% trust', 'Low (add reviews/logos)', '★★★☆☆ Important'],
    ['Unclear value proposition', '-30% engagement', 'Medium (reflection + copy)', '★★★☆☆ Important'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. DIMENSIONS DATA (#dimensions) - For FeaturesGrid
// ============================================
export const dimensionsData = {
  sectionId: 'dimensions',
  badge: 'Analysis',
  accentColor: 'rw-purple' as const,
  title: 'What dimensions do we analyze?',
  subtitle: '5 complementary analysis angles. Quantitative, behavioral data and UX expertise combined.',
  items: [
    {
      id: 1,
      alt: 'CRO quantitative data analysis',
      title: 'Quantitative data analysis',
      desc: 'Study of user journeys in GA4. Identification of high exit rate pages. Conversion funnel analysis. Segmentation by source, device, audience.',
    },
    {
      id: 2,
      alt: 'Behavioral heatmaps analysis',
      title: 'Behavioral analysis',
      desc: 'Heatmaps: where do your visitors click? Scrollmaps: how far do they scroll? Session recordings: how do they navigate?',
    },
    {
      id: 3,
      alt: 'Conversion UX/UI audit',
      title: 'UX/UI audit',
      desc: 'Value proposition clarity. Visual hierarchy and readability. CTA effectiveness. Journey fluidity. Reassurance elements.',
    },
    {
      id: 4,
      alt: 'Key site pages analysis',
      title: 'Key pages analysis',
      desc: 'Homepage, product/service pages, category pages, landing pages, checkout funnel and forms.',
    },
    {
      id: 5,
      alt: 'CRO competitive benchmark',
      title: 'Competitive benchmark',
      desc: 'How do your competitors do it? What best practices can you adopt? Where can you differentiate?',
    },
  ],
};

// ============================================
// 9. FRICTIONS COURANTES - For StickyFeatures
// ============================================
export const frictionsCourantesData = {
  sectionId: 'frictions-courantes',
  badge: 'Frictions',
  accentColor: 'rw-purple' as const,
  title: 'What frictions do we find most often?',
  subtitle: '6 recurring problems. We identify them in the majority of audits we perform.',
  items: [
    {
      id: 1,
      icon: 'MessageSquare',
      title: 'Unclear value proposition',
      description: 'The visitor doesn\'t understand in 5 seconds what you offer and why it\'s for them.',
    },
    {
      id: 2,
      icon: 'MousePointerClick',
      title: 'Invisible or confusing CTAs',
      description: 'The action button isn\'t visible, isn\'t clear, or there are too many.',
    },
    {
      id: 3,
      icon: 'TextCursorInput',
      title: 'Forms too long',
      description: 'Every additional field loses prospects.',
    },
    {
      id: 4,
      icon: 'ShieldCheck',
      title: 'Lack of reassurance',
      description: 'No customer reviews, no guarantees, no social proof. The visitor doesn\'t trust.',
    },
    {
      id: 5,
      icon: 'ShoppingCart',
      title: 'Complex checkout',
      description: 'Mandatory account creation, too many steps, hidden fees. Cart abandonment guaranteed.',
    },
    {
      id: 6,
      icon: 'Smartphone',
      title: 'Degraded mobile experience',
      description: 'Buttons too small, unreadable text, difficult navigation. And 60% of traffic is mobile.',
    },
  ],
};

// ============================================
// 10. LIVRABLES DATA (#livrables) - For StackCardsSection
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Deliverables',
  accentColor: 'rw-purple' as const,
  title: 'What do you actually receive?',
  subtitle: '4 usable deliverables. A complete diagnostic with prioritized recommendations.',
  cards: [
    {
      id: 1,
      icon: 'FileText',
      title: 'Detailed audit report',
      description: 'Each identified problem is documented with screenshots, supporting data, and estimated impact.',
    },
    {
      id: 2,
      icon: 'ListOrdered',
      title: 'Prioritized recommendations',
      description: 'An action list ranked by potential impact and ease of implementation. You know where to start.',
    },
    {
      id: 3,
      icon: 'FlaskConical',
      title: 'Test hypotheses',
      description: 'Concrete A/B test proposals to validate the optimizations.',
    },
    {
      id: 4,
      icon: 'Video',
      title: 'Video presentation',
      description: 'We present the findings, answer your questions, challenge priorities together.',
    },
  ],
};

// ============================================
// 11. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Important note',
  text: 'A CRO audit isn\'t a list of generic best practices. Every site is unique. We analyze your real data to identify your specific frictions, not those of a theoretical site.',
};

// ============================================
// 12. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'How does a CRO audit work?',
  subtitle: '5 structured steps. From brief to presentation, count 2 to 4 weeks depending on complexity.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief and access',
      description: 'We understand your objectives and get access (GA4, heatmap tools or we install).',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Data collection',
      description: 'If needed, we install behavioral analysis tools and let them run for a few days/weeks.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Analysis',
      description: 'We cross-reference quantitative, behavioral data and UX expertise to identify problems.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Action plan',
      description: 'We formalize findings and prioritize by impact and ease.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Presentation',
      description: 'Presentation and discussion to validate the action plan.',
    },
  ],
};

// ============================================
// 13. ET APRÈS - For TwoPathsSection
// ============================================
export const etApresData = {
  sectionId: 'et-apres',
  badge: 'What next?',
  accentColor: 'rw-purple' as const,
  title: 'What happens after the audit?',
  subtitle: 'The audit is the diagnosis. Implementation is the treatment. Two options depending on your resources.',
  items: [
    {
      id: 1,
      icon: 'User',
      title: 'You implement in-house',
      description: 'We\'ve given you the roadmap, you execute with your teams. We remain available for ad-hoc advice if needed.',
      href: '',
      buttonText: '',
    },
    {
      id: 2,
      icon: 'Handshake',
      title: 'We support you',
      description: 'We manage optimizations and A/B tests with you to maximize impact.',
      href: '/en/contact',
      buttonText: 'Request support',
    },
  ],
  footerText: 'No obligation. You choose what works best for you.',
};

// ============================================
// 14. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about CRO audits.',
  items: [
    {
      id: 'faq-1',
      question: 'What\'s the difference between a CRO audit and a UX audit?',
      answer: 'The difference between CRO audit and UX audit lies in the objective. UX audit focuses on overall user experience. CRO audit is focused on conversion: turning visitors into customers. It integrates UX but also data analysis and persuasion psychology.',
    },
    {
      id: 'faq-2',
      question: 'Do you need minimum traffic for a CRO audit?',
      answer: 'Required traffic volume depends on the approach. For a qualitative audit based on behavioral and UX analysis, no. For statistically significant A/B tests afterward, yes (a few thousand visitors per month). We adapt the methodology to your volume.',
    },
    {
      id: 'faq-3',
      question: 'How long does a complete CRO audit take?',
      answer: 'CRO audit duration varies between 2 and 4 weeks depending on site size and time needed to collect relevant behavioral data (heatmaps, session recordings).',
    },
    {
      id: 'faq-4',
      question: 'What return on investment can we expect?',
      answer: 'CRO audit ROI depends on your current situation and volume. A 20 to 30% improvement in conversion rate is realistic after implementing recommendations. Calculate the impact on your monthly revenue to estimate potential.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Don\'t make me think.',
  author: 'Steve Krug',
  role: 'UX Expert (title of his seminal book)',
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Every visitor',
  titleHighlight: 'counts',
  description: 'You invest to bring traffic. Conversion rate optimization maximizes the value of every visitor. Whether to improve your e-commerce or lead gen conversion rate, our CRO audit reveals where you\'re losing conversions.',
  secondaryDescription: 'First step: a discussion to understand your site, your objectives, and your volumes. Our CRO agency then proposes a tailored audit with an estimate of potential gains.',
  buttonText: 'Request a CRO audit',
  checklistItems: [
    { id: '1', text: 'Complete CRO audit' },
    { id: '2', text: 'Conversion rate optimization' },
    { id: '3', text: 'Estimated ROI' },
  ],
};
