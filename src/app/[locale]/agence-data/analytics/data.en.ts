/**
 * ============================================
 * DATA - Analytics Page Content
 * ============================================
 *
 * URL: /en/data-agency/analytics
 * Keywords: Google Analytics agency, GA4, Analytics audit, Web data analysis
 * Intent: Transactional
 * Parent: /en/data-agency
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Web Analytics Agency GA4 and Dashboards - Rankwell',
  description: 'Expert web analytics agency in GA4. Audit, advanced configuration, Looker Studio dashboards. GA4 training for your teams. Analytics consultant at your service.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'Data', href: '/en/data-agency' },
    { label: 'Analytics' },
  ] as BreadcrumbItem[],
  title: 'Web analytics agency: GA4 and actionable dashboards',
  description: 'Collecting data is easy. Understanding and acting on it is something else. Our web analytics consultants help you see clearly in your GA4 stats.',
  ctaText: 'Discuss your analytics',
  ctaHref: '/en/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Web Analytics',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'You have GA4. Everyone has GA4. But who actually uses it? Most companies have data sitting idle, reports nobody reads, dashboards nobody understands.',
    'The problem isn\'t lack of data. It\'s lack of interpretation. Numbers without context lead nowhere. Metrics without business connection don\'t either. That\'s where our web analytics agency comes in.',
    'Discover how our web analytics consultants transform your raw data into actionable intelligence. The <strong class="text-secondary dark:text-accent">business centrix</strong> approach applied to your analytics: every insight must lead to a decision.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Our expertise', icon: 'Award' },
    { id: 'services', label: 'Our services', icon: 'Briefcase' },
    { id: 'metriques', label: 'Key metrics', icon: 'ChartBar' },
    { id: 'ga4', label: 'GA4 expertise', icon: 'ChartLine' },
    { id: 'dashboards', label: 'Dashboards', icon: 'LayoutDashboard' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'formules', label: 'Packages', icon: 'LayoutGrid' },
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
  title: 'What our web analytics expertise covers',
  subtitle: 'From audit to GA4 training, complete mastery of your data.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'GA4 Audit',
      description: 'Configuration, events, conversions, integrations',
    },
    {
      id: 2,
      icon: 'Settings',
      title: 'Advanced configuration',
      description: 'Custom events, dimensions, GA4 audiences',
    },
    {
      id: 3,
      icon: 'LayoutDashboard',
      title: 'Looker Studio dashboards',
      description: 'Unified and actionable views',
    },
    {
      id: 4,
      icon: 'GraduationCap',
      title: 'GA4 Training',
      description: 'Your teams autonomous on Google Analytics 4',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The goal is to turn data into information, and information into insight.',
  author: 'Carly Fiorina',
  role: 'Former HP CEO',
};

// ============================================
// 5. SERVICES DATA (#services) - For FeaturesGrid
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-purple' as const,
  title: 'What do we do as a web analytics agency?',
  subtitle: '5 complementary services. From audit to GA4 training, for complete autonomy.',
  items: [
    {
      id: 1,
      alt: 'GA4 configuration audit',
      title: 'GA4 configuration audit',
      desc: 'Is your GA4 properly configured? Events, conversions, properties, filters. Our web analytics consultants verify everything is in place.',
    },
    {
      id: 2,
      alt: 'Advanced GA4 configuration',
      title: 'Advanced GA4 configuration',
      desc: 'Beyond basic installation: custom events, custom dimensions, audiences, integrations. GA4 tailored to your needs.',
    },
    {
      id: 3,
      alt: 'Looker Studio dashboards and reporting',
      title: 'Dashboards and reporting',
      desc: 'Clear and actionable Looker Studio (formerly Data Studio) dashboards. The right metrics, well presented, accessible to all.',
    },
    {
      id: 4,
      alt: 'Analytics analysis and recommendations',
      title: 'Analysis and recommendations',
      desc: 'We dive into your GA4 data to extract insights. What works? What\'s stuck? What opportunities exist?',
    },
    {
      id: 5,
      alt: 'GA4 training for teams',
      title: 'GA4 Training',
      desc: 'Your teams need to be autonomous. Our GA4 training covers data reading and dashboard usage.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Analytics and customer knowledge',
  text: 'Every visit, every click, every conversion enriches your customer knowledge. Over time, you better understand who your users are, what they\'re looking for, what makes them convert. This accumulated intelligence becomes a competitive advantage.',
};

// ============================================
// 7. TABLEAU MÉTRIQUES DATA (#metriques)
// ============================================
export const tableauMetriquesData = {
  sectionId: 'metriques',
  badge: 'Metrics',
  accentColor: 'rw-purple' as const,
  title: 'The GA4 metrics that really matter',
  subtitle: 'GA4 offers dozens of metrics. Here are the ones that make a difference based on your objectives.',
  columns: ['Business objective', 'Key metric', 'Alert threshold', 'What it reveals'],
  rows: [
    ['Acquisition', 'Sessions by source', 'Variation > 20% vs previous period', 'Effectiveness of each channel'],
    ['Engagement', 'Engagement rate', '< 50% = relevance problem', 'Does content meet expectations?'],
    ['Conversion', 'Conversion rate by source', '< 1% e-commerce, < 3% lead gen', 'Traffic quality by channel'],
    ['Retention', '% returning users', '< 20% = low retention', 'Ability to bring back visitors'],
    ['Mobile UX', 'Mobile vs desktop bounce rate', 'Gap > 15% = mobile UX needs work', 'Experience parity'],
    ['SEA ROI', 'ROAS (via conversion import)', '< 3x for standard e-commerce', 'Campaign profitability'],
  ],
};

// ============================================
// 8. GA4 DATA - For StepsDimensions
// ============================================
export const ga4Data = {
  sectionId: 'ga4',
  badge: 'GA4 Expertise',
  accentColor: 'rw-purple' as const,
  title: 'Why do we know GA4 inside out?',
  subtitle: 'GA4 changed the game. New logic, new interface, new events. We\'ve been supporting this transition from the start.',
  dimensions: [
    {
      dimension: 1,
      label: 'Streams',
      title: 'Stream configuration',
      subtitle: 'The foundation of all GA4 data collection.',
      items: ['Web streams', 'iOS/Android app streams', 'Measurement Protocol', 'Debug view'],
    },
    {
      dimension: 2,
      label: 'Events',
      title: 'Events and conversions',
      subtitle: 'The heart of the GA4 model.',
      items: ['Automatic events', 'Recommended events', 'Custom events', 'Conversion marking'],
    },
    {
      dimension: 3,
      label: 'Custom',
      title: 'Dimensions and parameters',
      subtitle: 'To go beyond standard data.',
      items: ['Custom dimensions', 'Custom metrics', 'Event parameters', 'User properties'],
    },
  ],
};

// ============================================
// 9. DASHBOARDS DATA (#dashboards) - For StickyFeatures
// ============================================
export const dashboardsData = {
  sectionId: 'dashboards',
  badge: 'Dashboards',
  accentColor: 'rw-purple' as const,
  title: 'What makes a dashboard truly useful?',
  subtitle: '4 essential characteristics. The difference between a decorative dashboard and a steering tool.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'The right metrics',
      description: 'The ones that matter for your business, not all available metrics',
    },
    {
      id: 2,
      icon: 'Eye',
      title: 'Clear reading',
      description: 'You understand in 30 seconds if things are going well or not',
    },
    {
      id: 3,
      icon: 'MousePointerClick',
      title: 'Actionable',
      description: 'Every piece of data should lead to a decision',
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Accessible to all',
      description: 'No need to be a data analyst to read it',
    },
  ],
};

// ============================================
// 10. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Important note',
  text: 'An overly complex dashboard won\'t be used. Better 5 relevant metrics than an exhaustive visualization nobody looks at. We design views adapted to each user profile.',
};

// ============================================
// 11. PROCESS DATA (#process) - For ProcessSteps
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'How does our collaboration work?',
  subtitle: '5 structured steps. From audit to team autonomy.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit of existing setup',
      description: 'We look at what\'s in place, what\'s missing, what\'s not working.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'KPI definition',
      description: 'With you, we identify the metrics that really matter for your business.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Configuration / Optimization',
      description: 'We set up or improve GA4 configuration to collect the right data.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Dashboard creation',
      description: 'Custom dashboards, connected to your sources, accessible to your teams.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Training and handover',
      description: 'We show you how to read and use this data daily.',
    },
  ],
};

// ============================================
// 12. FORMULES DATA (#formules) - For FeaturesGrid
// ============================================
export const formulesData = {
  sectionId: 'formules',
  badge: 'Packages',
  accentColor: 'rw-purple' as const,
  title: 'What collaboration formats do we offer?',
  subtitle: '3 packages based on your needs. From one-time diagnostic to ongoing partnership.',
  items: [
    {
      id: 1,
      alt: 'One-time analytics audit',
      title: 'One-time audit',
      desc: 'An assessment of your analytics configuration with recommendations. Ideal to know where you stand.',
    },
    {
      id: 2,
      alt: 'GA4 setup project',
      title: 'Setup project',
      desc: 'Complete GA4 configuration + dashboards + training. The package to start on solid foundations.',
    },
    {
      id: 3,
      alt: 'Ongoing analytics support',
      title: 'Ongoing support',
      desc: 'Regular monitoring, periodic analyses, dashboard evolution. A data partner for the long term.',
    },
  ],
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about analytics.',
  items: [
    {
      id: 'faq-1',
      question: 'Can our Universal Analytics data be recovered?',
      answer: 'Universal Analytics data recovery is no longer possible directly in Google. If you had configured BigQuery export or saved your data, we can work with that. Otherwise, we start fresh with a clean GA4 base.',
    },
    {
      id: 'faq-2',
      question: 'Is GA4 enough or do we need other analytics tools?',
      answer: 'GA4 covers most standard analytics needs. For advanced analyses, very high volumes, or specific privacy requirements, we can complement with BigQuery, Matomo, or other suitable solutions.',
    },
    {
      id: 'faq-3',
      question: 'Who can access the dashboards you create?',
      answer: 'Dashboard access is fully configurable. We can create different views based on profiles (management, marketing, sales) with detail levels adapted to each audience.',
    },
    {
      id: 'faq-4',
      question: 'What is Looker Studio and why use it?',
      answer: 'Looker Studio (formerly Google Data Studio) is Google\'s free data visualization tool. It lets you create dashboards connected to all your sources (GA4, Ads, Search Console, CRM) and easily share them with your teams.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Numbers have an important story to tell. They rely on you to give them a voice.',
  author: 'Stephen Few',
  role: 'Data Visualization Expert',
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Your GA4 data has things',
  titleHighlight: 'to tell you',
  description: 'Your web analytics contain answers to essential business questions. Where do your best customers come from? What\'s blocking conversions? Where to invest to maximize ROI?',
  secondaryDescription: 'First step: an audit of your GA4 configuration. Our web analytics agency identifies what works, what\'s missing, and opportunities for improvement.',
  buttonText: 'Discuss your analytics',
  checklistItems: [
    { id: '1', text: 'Free GA4 audit' },
    { id: '2', text: 'Custom dashboards' },
    { id: '3', text: 'GA4 training included' },
  ],
};
