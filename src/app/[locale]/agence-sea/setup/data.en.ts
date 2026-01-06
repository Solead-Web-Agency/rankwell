/**
 * ============================================
 * DATA - SEA Setup Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Google Ads Campaign Creation That Converts - Rankwell',
  description: 'Custom Google Ads campaign creation. Complete setup: structure, tracking, ads. Your campaigns perform from day 1. Free quote.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA', href: '/en/sea-agency' },
    { label: 'Campaign Creation' },
  ] as BreadcrumbItem[],
  title: 'High-performing Google Ads campaign creation',
  description: 'A poorly structured Google Ads campaign means wasted budget from the start. We create clean foundations to perform from launch.',
  ctaText: 'Create my Google Ads campaign',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Campaign Creation',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Many advertisers launch their Google Ads campaign in a rush. Broad targeting, improvised structure, let\'s see what happens. Result: a disorganized account, impossible to optimize, burning budget.',
    'A well-done Google Ads setup is the opposite. A logical structure, reliable tracking, foundations that allow effective optimization afterwards.',
    'Discover how our <strong class="text-secondary dark:text-accent">business-centric</strong> approach to campaign creation lays the groundwork for a high-performing account. Investing in structure means maximizing long-term ROI.',
  ],
  tocItems: [
    { id: 'garanties', label: 'Our guarantees', icon: 'Shield' },
    { id: 'etapes', label: 'The 7 steps', icon: 'ListChecks' },
    { id: 'erreurs', label: 'Costly mistakes', icon: 'TriangleAlert' },
    { id: 'scenarios', label: 'Setup types', icon: 'LayoutGrid' },
    { id: 'process', label: 'How it works', icon: 'GitBranch' },
    { id: 'livrables', label: 'Deliverables', icon: 'Package' },
    { id: 'apres', label: 'After setup', icon: 'ArrowRight' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. GARANTIES DATA (#garanties)
// ============================================
export const garantiesData = {
  sectionId: 'garanties',
  badge: 'Guarantees',
  accentColor: 'rw-cyan' as const,
  title: 'What we guarantee',
  subtitle: 'Concrete commitments before we even start.',
  items: [
    {
      id: 1,
      icon: 'Key',
      title: '100% your account',
      description: 'Full ownership, admin access. No dependency on us.',
    },
    {
      id: 2,
      icon: 'CircleCheck',
      title: 'Tracking validated before launch',
      description: 'No campaign launched without working conversion tracking.',
    },
    {
      id: 3,
      icon: 'FileText',
      title: 'Documentation included',
      description: 'You understand what was done, why, and how to evolve it.',
    },
    {
      id: 4,
      icon: 'Headphones',
      title: 'Post-launch support',
      description: 'We don\'t abandon you: monitoring and adjustments in the first days.',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
  author: 'Abraham Lincoln',
  role: '(applicable to SEA)',
};

// ============================================
// 5. ETAPES SET UP DATA (#etapes)
// ============================================
export const etapesSetupData = {
  sectionId: 'etapes',
  badge: 'Methodology',
  accentColor: 'rw-cyan' as const,
  title: 'What does our setup concretely include?',
  titleHighlight: '',
  description: '7 steps to lay solid foundations. Each step has concrete deliverables.',
  cards: [
    {
      id: 1,
      icon: 'Search',
      title: 'Prior audit (if existing account)',
      description: 'Already have an account? We analyze what exists, what works, what needs restructuring. No clean slate if not necessary.',
    },
    {
      id: 2,
      icon: 'Target',
      title: 'Strategy definition',
      description: 'Business objectives (sales, leads, awareness), target KPIs (CPA, ROAS, volume), budget and allocation, geographic and temporal priorities.',
    },
    {
      id: 3,
      icon: 'Type',
      title: 'Keyword research',
      description: 'Identification of queries to target, volume and competition analysis, negative keywords list, segmentation by intent.',
    },
    {
      id: 4,
      icon: 'FolderTree',
      title: 'Account structure',
      description: 'Campaign organization by objective/theme, coherent ad groups, clear naming logic, targeting parameters.',
    },
    {
      id: 5,
      icon: 'PenTool',
      title: 'Ad creation',
      description: 'Ad copy writing (RSA, DSA as needed), extension configuration (sitelinks, callouts, calls...), A/B test variants.',
    },
    {
      id: 6,
      icon: 'Activity',
      title: 'Tracking configuration',
      description: 'Conversion tag installation, Google Analytics linking, goal configuration, conversion tracking tests.',
    },
    {
      id: 7,
      icon: 'DollarSign',
      title: 'Bidding setup',
      description: 'Bidding strategy adapted to objectives, realistic starting bids, daily budget configuration.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Tracking: the foundation of everything',
  text: 'A setup without reliable tracking is useless. We systematically configure conversion tracking before launching anything. It\'s the basis for measuring and optimizing.',
};

// ============================================
// 7. TABLEAU ERREURS DATA (#erreurs)
// ============================================
export const tableauErreursData = {
  sectionId: 'erreurs',
  badge: 'Warning',
  accentColor: 'rw-cyan' as const,
  title: 'Most costly setup mistakes',
  subtitle: 'These configuration errors that we regularly fix are expensive from day one.',
  columns: ['Configuration error', 'Consequence', 'Estimated loss', 'Time to fix'],
  rows: [
    ['Geo targeting too broad', 'Clicks outside catchment area', '20-40% budget wasted', '5 minutes'],
    ['No negative keywords', 'Unqualified traffic', '15-30% budget wasted', '1-2 hours'],
    ['Structure too flat', 'Optimization impossible', 'Significant missed opportunity', 'Complete restructuring'],
    ['Untracked conversions', 'Blind algorithm, unknown ROAS', 'Impossible to quantify', '2-4 hours'],
    ['Poorly allocated budget', 'Profitable campaigns underfunded', 'Lost opportunities', 'Analysis + adjustment'],
    ['Generic ads', 'Low CTR, poor Quality Score', 'CPC 20-50% higher', 'Dedicated copywriting'],
  ],
};

// ============================================
// 8. SCENARIOS DATA (#scenarios)
// ============================================
export const scenariosData = {
  sectionId: 'scenarios',
  badge: 'Situations',
  accentColor: 'rw-cyan' as const,
  title: 'What type of setup for your situation?',
  subtitle: 'Three possible scenarios. We adapt our approach to your starting point.',
  reasons: [
    {
      id: 'creation',
      title: 'Account creation',
      description: 'You\'ve never done Google Ads. We start from scratch, create everything properly.',
      icon: 'Plus',
    },
    {
      id: 'restructuration',
      title: 'Restructuring',
      description: 'You have an account but it\'s chaos. We put things in order, keep useful history.',
      icon: 'RefreshCw',
    },
    {
      id: 'expansion',
      title: 'Expansion',
      description: 'You have campaigns that work, you want to launch new ones (new product, new market). We structure the extension.',
      icon: 'TrendingUp',
    },
  ],
};

// ============================================
// 9. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'How does the setup work?',
  subtitle: '5 steps from brief to launch. Allow 1-2 weeks depending on project complexity.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Strategic brief',
      description: 'We understand your business, objectives, constraints. The setup must serve your strategy, not the other way around.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Research and planning',
      description: 'Keyword analysis, competition study, optimal structure definition.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Creation and configuration',
      description: 'Setting up everything: account, campaigns, ads, tracking.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Testing and validation',
      description: 'We verify everything works before launching: tracking, targeting, delivery.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Launch and monitoring',
      description: 'Going live and close monitoring in the first days to adjust if needed.',
    },
  ],
};

// ============================================
// 10. LIVRABLES DATA (#livrables)
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Deliverables',
  accentColor: 'rw-cyan' as const,
  title: 'What do you concretely receive?',
  subtitle: 'An account ready to perform with everything needed to measure and optimize.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/setup/livrable-compte-structure.webp',
      alt: 'Structured Google Ads account',
      title: 'Structured Google Ads account',
      desc: 'Ready to perform from launch',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/setup/livrable-tracking.webp',
      alt: 'Conversion tracking',
      title: 'Reliable tracking',
      desc: 'To measure conversions accurately',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/setup/livrable-documentation.webp',
      alt: 'Setup documentation',
      title: 'Complete documentation',
      desc: 'Of structure and strategic choices',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/setup/livrable-acces.webp',
      alt: 'Google Ads account access',
      title: 'Full account access',
      desc: 'It\'s yours, not ours',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/setup/livrable-accompagnement.webp',
      alt: 'Post-launch support',
      title: 'Post-launch support',
      desc: 'Monitoring and adjustments in the first days',
    },
  ],
};

// ============================================
// 11. APRES SET UP DATA (#apres)
// ============================================
export const apresSetupData = {
  sectionId: 'apres',
  badge: 'What\'s next?',
  accentColor: 'rw-cyan' as const,
  title: 'What happens after setup?',
  subtitle: 'Setup is the starting point. Then, you choose how to continue.',
  items: [
    {
      id: 1,
      title: 'You manage in-house',
      description: 'We gave you the keys, you drive. We remain available for occasional consulting if needed.',
      icon: 'User',
      href: '',
      buttonText: '',
    },
    {
      id: 2,
      title: 'We continue together',
      description: 'Ongoing management and monitoring to optimize and grow your campaigns.',
      icon: 'Handshake',
      href: '/en/sea-agency/management',
      buttonText: 'Discover management',
    },
  ],
  footerText: 'No obligation, no trap. You choose what suits you.',
};

// ============================================
// 12. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEA accounts are built on solid foundations, not quick fixes.',
  author: 'Brad Geddes',
  role: 'Google Ads Expert',
};

// ============================================
// 13. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about Google Ads setup.',
  items: [
    {
      id: 'faq-1',
      question: 'How long does a Google Ads setup take?',
      answer: 'Allow 1-2 weeks depending on project complexity. A setup for a simple local business will be faster than an e-commerce account with multiple product categories. We prefer taking time to do it right rather than rushing.',
    },
    {
      id: 'faq-2',
      question: 'Can I manage my account myself after setup?',
      answer: 'Absolutely. It\'s your account, not ours. We deliver a structured account with complete documentation. You can manage it in-house or entrust us with ongoing management.',
    },
    {
      id: 'faq-3',
      question: 'What if I already have a Google Ads account?',
      answer: 'We start with an audit of what exists. Depending on account status, we restructure what needs to be while keeping useful history. No systematic clean slate.',
    },
    {
      id: 'faq-4',
      question: 'Is tracking really essential?',
      answer: 'Yes, it\'s the foundation. Without reliable tracking, impossible to know what works. Google\'s algorithm optimizes blindly, you can\'t calculate your ROI. We never launch a campaign without validated conversion tracking.',
    },
    {
      id: 'faq-5',
      question: 'What budget for setup?',
      answer: 'Cost depends on complexity: number of campaigns, ad types, tracking needs. We provide a quote after initial brief. It\'s a one-time investment that prevents months of wasted ad budget.',
    },
    {
      id: 'faq-6',
      question: 'What\'s the difference with Google\'s automatic configurations?',
      answer: 'Google\'s automatic configurations are designed to spend your budget quickly, not maximize your ROI. Our setup is designed for your business objectives, with a structure that allows fine optimization.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Start on the',
  titleHighlight: 'right foundations',
  description: 'A well-done setup saves months of optimization. Solid foundations allow you to test, adjust, and scale effectively. ROI starts here.',
  secondaryDescription: 'First step: a 30-minute brief to understand your project. We then propose a setup adapted to your objectives and budget.',
  buttonText: 'Launch my SEA project',
  checklistItems: [
    { id: '1', text: 'Free brief' },
    { id: '2', text: 'Quote within 48h' },
    { id: '3', text: 'Launch in 1-2 weeks' },
  ],
};
