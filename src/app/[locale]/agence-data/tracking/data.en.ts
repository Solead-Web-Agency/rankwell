/**
 * ============================================
 * DATA - Tracking Page Content
 * ============================================
 *
 * URL: /en/data-agency/tracking
 * Keywords: Tagging plan, Web tracking, GTM, Google Tag Manager
 * Intent: Transactional
 * Parent: /en/data-agency
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'GTM Agency: Tracking and Google Tag Manager - Rankwell',
  description: 'Google Tag Manager and web tracking experts. Tagging plan, GA4, Ads conversions. Need GTM training? We configure and train your teams.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'Data', href: '/en/data-agency' },
    { label: 'Tracking' },
  ] as BreadcrumbItem[],
  title: 'GTM agency: reliable tracking and tagging plan',
  description: 'Without clean tracking, your data is wrong. Google Tag Manager experts, we implement reliable collection for analytics that make sense.',
  ctaText: 'Audit my tracking',
  ctaHref: '/en/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Tag Manager',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'You look at your Analytics stats every week. But are you sure the numbers are correct? How many conversions slip under the radar? How many are counted twice? Misconfigured Google Tag Manager is the source of the problem.',
    'Faulty tracking means missed conversions, wrong attributions, duplicates. You think you\'re optimizing, you\'re optimizing on thin air. And you\'re not building real knowledge of what works.',
    'Discover how our GTM agency lays solid measurement foundations. Tracking is the first pillar of the <strong class="text-secondary dark:text-accent">business centrix</strong> approach: reliable data for reliable decisions. Without it, everything else is biased.',
  ],
  tocItems: [
    { id: 'inclus', label: 'What we do', icon: 'Package' },
    { id: 'problemes', label: 'Common problems', icon: 'TriangleAlert' },
    { id: 'checklist', label: 'Checklist', icon: 'SquareCheck' },
    { id: 'evenements', label: 'Events', icon: 'Activity' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'livrables', label: 'Deliverables', icon: 'Package' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Our service',
  accentColor: 'rw-purple' as const,
  title: 'What our Google Tag Manager service includes',
  subtitle: 'From audit to GTM training, complete and reliable tracking.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Existing audit',
      description: 'Complete diagnostic of your current GTM configuration',
    },
    {
      id: 2,
      icon: 'FileText',
      title: 'Tagging plan',
      description: 'Documentation of everything that needs to be measured',
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'GTM implementation',
      description: 'Clean and maintainable Google Tag Manager configuration',
    },
    {
      id: 4,
      icon: 'GraduationCap',
      title: 'GTM training',
      description: 'Your teams autonomous on Google Tag Manager',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'If you can\'t measure it, you can\'t improve it.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 5. PROBLÈMES DATA (#problemes) - For FeaturesGrid
// ============================================
export const problemesData = {
  sectionId: 'problemes',
  badge: 'Problems',
  accentColor: 'rw-purple' as const,
  title: 'What tracking problems do we encounter most often?',
  subtitle: '5 recurring problems. We find them in the majority of audits we perform.',
  items: [
    {
      id: 1,
      alt: 'Untracked conversions',
      title: 'Untracked conversions',
      desc: 'Forms submitted, purchases made, but nothing in the stats. Impossible to know what works.',
    },
    {
      id: 2,
      alt: 'Tracking duplicates and over-counting',
      title: 'Duplicates and over-counting',
      desc: 'The same conversion counted multiple times. Numbers are inflated, decisions are biased.',
    },
    {
      id: 3,
      alt: 'Bad SEO SEA attribution',
      title: 'Bad attribution',
      desc: 'Google Ads takes credit for conversions that come from SEO (or vice versa). You don\'t know where to invest.',
    },
    {
      id: 4,
      alt: 'Missing tracking data',
      title: 'Missing data',
      desc: 'Tracking doesn\'t work on mobile, or on certain pages, or after consent. Gaps in your data.',
    },
    {
      id: 5,
      alt: 'Failed GA4 migration',
      title: 'Failed GA4 migration',
      desc: 'The switch from Universal Analytics to GA4 was rushed. Events aren\'t coming through correctly.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Key data',
  text: 'On average, we find that 30% of conversions are not properly tracked with our new clients. This means your marketing decisions are based on incomplete data.',
};

// ============================================
// 7. TABLEAU CHECKLIST DATA (#checklist)
// ============================================
export const tableauChecklistData = {
  sectionId: 'checklist',
  badge: 'Checklist',
  accentColor: 'rw-purple' as const,
  title: 'Checklist: is your tracking reliable?',
  subtitle: 'Here are the points we systematically check during an audit.',
  columns: ['Check point', 'Impact if failing', 'Problem frequency', 'Complexity'],
  rows: [
    ['Key conversions tracked', 'ROI impossible to measure', '40% of sites', 'Medium'],
    ['No duplicates', 'Inflated data, bad decisions', '25% of sites', 'Low'],
    ['Correct SEO/SEA attribution', 'Budget misallocated', '35% of sites', 'Medium'],
    ['Mobile tracking working', '60% of traffic invisible', '20% of sites', 'Variable'],
    ['Consent mode v2 configured', 'Data loss + GDPR risk', '50% of sites', 'Medium'],
    ['Enhanced conversions enabled', 'Degraded Ads attribution', '70% of sites', 'Low'],
  ],
};

// ============================================
// 8. ÉVÉNEMENTS DATA (#evenements) - For StepsDimensions
// ============================================
export const evenementsData = {
  sectionId: 'evenements',
  badge: 'Events',
  accentColor: 'rw-purple' as const,
  title: 'What events do we track?',
  subtitle: '3 levels of tracking. From business-critical conversions to engagement signals.',
  dimensions: [
    {
      dimension: 1,
      label: 'Macro',
      title: 'Macro conversions',
      subtitle: 'The conversions that really matter for your business.',
      items: ['Purchases / Transactions', 'Contact forms submitted', 'Quote requests', 'Registrations / Sign-ups', 'Phone calls'],
    },
    {
      dimension: 2,
      label: 'Micro',
      title: 'Micro conversions',
      subtitle: 'Intent signals that precede conversion.',
      items: ['Add to cart', 'Form starts', 'Downloads', 'Key page views', 'CTA clicks'],
    },
    {
      dimension: 3,
      label: 'Engagement',
      title: 'Engagement',
      subtitle: 'Visit quality indicators.',
      items: ['Scroll depth', 'Time spent', 'Video interactions', 'Outbound clicks'],
    },
  ],
};

// ============================================
// 9. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Important note',
  text: 'Exhaustive tracking isn\'t always relevant. We define with you which events are truly useful for your decisions. Too much data kills data: we focus on what has business impact.',
};

// ============================================
// 10. PROCESS DATA (#process) - For ProcessSteps
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'How does implementation work?',
  subtitle: '5 structured steps. From initial audit to final documentation.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit and brief',
      description: 'We analyze what exists and understand your needs. What are your key conversions? What journeys do you want to track?',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Tagging plan',
      description: 'We document everything to be tracked: events, conversions, parameters. The technical spec for clean implementation.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'GTM + GA4 implementation',
      description: 'GTM configuration, tag and trigger creation, custom GA4 events, Google Ads linking.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Testing and validation',
      description: 'We verify everything is coming through correctly. Real-world testing, debugging, corrections.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Documentation and handover',
      description: 'We deliver clear documentation. You know what\'s in place and how it works.',
    },
  ],
};

// ============================================
// 11. LIVRABLES DATA (#livrables) - For StackCardsSection
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Deliverables',
  accentColor: 'rw-purple' as const,
  title: 'What do you actually receive?',
  subtitle: '6 usable deliverables. Operational and documented tracking.',
  cards: [
    {
      id: 1,
      icon: 'CircleCheck',
      title: 'Complete reliable tracking',
      description: 'All your key events measured correctly, without duplicates or gaps.',
    },
    {
      id: 2,
      icon: 'Box',
      title: 'Clean GTM container',
      description: 'Clear structure, documented tags, maintainable by your team.',
    },
    {
      id: 3,
      icon: 'ChartLine',
      title: 'Configured GA4',
      description: 'Custom events, conversions, dimensions tailored to your business.',
    },
    {
      id: 4,
      icon: 'DollarSign',
      title: 'Google Ads conversions',
      description: 'Linking configured, conversions imported, values feeding back for optimization.',
    },
    {
      id: 5,
      icon: 'FileText',
      title: 'Technical documentation',
      description: 'Complete reference: what\'s tracked, how, why. For your team and future providers.',
    },
    {
      id: 6,
      icon: 'Shield',
      title: 'Consent Mode v2',
      description: 'GDPR-compliant configuration. Tracking respects user choice while optimizing collection.',
    },
  ],
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about tracking and GTM.',
  items: [
    {
      id: 'faq-1',
      question: 'Who implements the tags on my site?',
      answer: 'Tag implementation is done mainly via Google Tag Manager, without touching your source code. If developer-side changes are needed (dataLayer for example), we provide detailed technical specifications and support implementation.',
    },
    {
      id: 'faq-2',
      question: 'What impact does tracking have on site performance?',
      answer: 'Tracking\'s impact on performance depends on implementation quality. A well-configured GTM has minimal impact. We use Google Tag Manager with optimized triggers and asynchronous loading to not penalize your Core Web Vitals.',
    },
    {
      id: 'faq-3',
      question: 'Do you offer GTM training for our teams?',
      answer: 'GTM training is part of our services. We train your teams on Google Tag Manager so they can handle simple tag additions autonomously, while understanding the structure in place.',
    },
    {
      id: 'faq-4',
      question: 'How long does it take to set up tracking?',
      answer: 'Implementation time depends on your site\'s complexity. Count 1 to 3 weeks between initial audit and production deployment, including testing and validation phases.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Data is the new oil. But like oil, it\'s valuable only when refined.',
  author: 'Clive Humby',
  role: 'Data Science Pioneer',
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Reliable data,',
  titleHighlight: 'finally',
  description: 'Properly configured Google Tag Manager is the foundation of all reliable measurement. Clean tracking means certainty that your analytics reflect the reality of your business.',
  secondaryDescription: 'First step: an audit of your current GTM configuration. Our GTM agency identifies what\'s tracked, what\'s missing, what\'s wrong. You leave with a clear diagnostic.',
  buttonText: 'Audit my tracking',
  checklistItems: [
    { id: '1', text: 'Free GTM audit' },
    { id: '2', text: 'GTM training included' },
    { id: '3', text: 'GDPR-compliant' },
  ],
};
