/**
 * FORMATIONS - English Data
 * URL: /en/training
 *
 * Target keywords:
 * - SEO training
 * - Google Ads training
 * - GA4 training
 * - digital marketing training
 *
 * Color alternation: blue → cyan → purple → blue → cyan → purple
 */

import type { BreadcrumbItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'SEO, Google Ads & GA4 Training: Go Pro - Rankwell',
  description:
    'Your team masters SEO and Google Ads in 4 days? 100% hands-on training applied to YOUR website. Zero empty theory, only real results. Certified & fundable.',
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Training' },
];

// ============================================
// HERO (color: blue)
// ============================================
export const heroData = {
  title: 'Train Your Teams in Search',
  description:
    'SEO, Google Ads and GA4 training 100% applied to your case. No generic theory: we work on your site, your data, your challenges.',
  secondaryDescription:
    'Certified training. Custom-built programs. Hands-on approach.',
  ctaText: 'Request a program',
  ctaHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// USP - Key benefits (color: cyan)
// ============================================
export const uspData = {
  sectionId: 'why-us',
  badge: 'Our approach',
  title: 'Why our training makes a difference',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 1,
      title: 'Applied to your case',
      desc: "We don't train on generic examples. Every exercise, every audit, every strategy is built on your actual website and real data.",
    },
    {
      id: 2,
      title: 'Expert practitioners',
      desc: "Our trainers are the same consultants who support our clients daily. Field experience, not academic theory.",
    },
    {
      id: 3,
      title: 'Immediately actionable',
      desc: "At the end of the training, you leave with concrete deliverables: audits, action plans, templates. Ready to deploy.",
    },
  ],
};

// ============================================
// FORMATIONS - Catalog (color: purple)
// Format: PricingCards
// ============================================
export const formationsData = {
  sectionId: 'our-training',
  badge: 'Our training',
  title: 'Three programs to level up',
  subtitle:
    'Training in organic search, Search advertising and web analytics. Adaptable to all levels.',
  accentColor: 'rw-purple' as const,
  items: [
    {
      id: 'seo-geo',
      title: 'SEO & GEO Training',
      tagline: 'Master organic search',
      description:
        "Understand SEO and GEO mechanics to optimize your visibility on Google and AI search engines.",
      price: '€1,900',
      priceNote: 'excl. VAT/pers.',
      details: {
        duration: '4 days (28h)',
        format: 'On-site or remote',
      },
      buttonText: 'Request a quote',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Audit a site and identify priorities', enabled: true },
        { label: 'Build an effective semantic strategy', enabled: true },
        { label: 'Optimize for Google and AI engines', enabled: true },
        { label: 'Measure and manage SEO performance', enabled: true },
        { label: 'Brief technical teams or contractors', enabled: true },
      ],
    },
    {
      id: 'google-ads-ga4',
      title: 'Google Ads & GA4 Training',
      tagline: 'Search Advertising and Analytics',
      description:
        "Master Google Ads and GA4 to maximize your advertising ROI and accurately measure your results.",
      price: '€1,900',
      priceNote: 'excl. VAT/pers.',
      details: {
        duration: '3 days (21h)',
        format: 'On-site or remote',
      },
      buttonText: 'Request a quote',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Structure a Google Ads account effectively', enabled: true },
        { label: 'Create Search, Shopping and PMax campaigns', enabled: true },
        { label: 'Configure GA4 and its conversions', enabled: true },
        { label: 'Optimize bidding and audiences', enabled: true },
        { label: 'Analyze performance and ROI', enabled: true },
      ],
    },
    {
      id: 'content',
      title: 'SEO Content Creation',
      tagline: 'Write for Google and AI',
      description:
        "Produce content that ranks and converts, optimized for SEO and generative AI.",
      price: '€1,400',
      priceNote: 'excl. VAT/pers.',
      details: {
        duration: '2 days (14h)',
        format: 'On-site or remote',
      },
      buttonText: 'Request a quote',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Identify search intent', enabled: true },
        { label: 'Structure content for SEO and GEO', enabled: true },
        { label: 'Write citation-ready content for AI', enabled: true },
        { label: 'Optimize existing content', enabled: true },
        { label: 'Measure editorial performance', enabled: true },
      ],
    },
  ],
};

// ============================================
// CUSTOM APPROACH - Process (color: blue)
// ============================================
export const approachData = {
  sectionId: 'approach',
  badge: 'Custom-built',
  title: '100% personalized training',
  subtitle:
    'Forget generic training. With us, everything is built around your reality.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Scoping your challenges',
      description:
        "We discuss your context, objectives, and team levels. We adapt the program accordingly.",
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Preparation on your case',
      description:
        'Before training, we analyze your site, data, and competitors. All exercises will be based on these.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Applied training',
      description:
        'Minimal theory, maximum practice. We audit your site together, we build your strategy.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Actionable deliverables',
      description:
        "You leave with an audit, action plan, and templates. Not just slides.",
    },
  ],
};

// ============================================
// FUNDING (color: cyan)
// ============================================
export const financementData = {
  sectionId: 'funding',
  badge: 'Funding',
  title: 'Simplified funding',
  subtitle:
    "Our training programs are certified and eligible for various funding options. We guide you through the process.",
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 1,
      title: 'Corporate funding',
      desc: "Training can be funded through your company's training budget. We handle the administrative paperwork.",
    },
    {
      id: 2,
      title: 'Government programs',
      desc: "Various government-sponsored training programs may apply depending on your location and situation.",
    },
    {
      id: 3,
      title: 'Skills development plan',
      desc: "Integration into your company's skills development plan for tax-efficient training investment.",
    },
  ],
};

// ============================================
// FOR WHO (color: purple)
// ============================================
export const forWhoData = {
  sectionId: 'for-who',
  badge: 'For who?',
  title: 'Who are our training programs for?',
  subtitle:
    "Whether you're a marketer, technical, or executive, our programs adapt to your profile.",
  accentColor: 'rw-purple' as const,
  criteria: [
    {
      label: 'Marketing teams',
      description:
        'Marketing managers, digital project managers, content managers. Level up to manage your vendors or bring it in-house.',
    },
    {
      label: 'Technical teams',
      description:
        'Developers, integrators, CTOs. Understand SEO challenges to integrate them from the design phase.',
    },
    {
      label: 'Executives and entrepreneurs',
      description:
        'Understand Search levers to make the right strategic decisions.',
    },
  ],
  ctaTitle: 'Need a custom program?',
  ctaDescription:
    'We can mix modules, adjust the level, integrate your specific challenges. Each training is unique.',
  ctaButtonText: 'Discuss your project',
  ctaButtonHref: '/contact',
};

// ============================================
// LOGISTICS - Format StickyFeatures (color: blue)
// ============================================
export const modalitesData = {
  sectionId: 'logistics',
  badge: 'Logistics',
  title: 'Practical details',
  subtitle: 'Everything you need to know before getting started.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Flexible format',
      description: 'On-site (at your office or in Paris), remote (3h30 max sessions), or hybrid based on your constraints.',
      icon: 'Monitor',
    },
    {
      id: 2,
      title: 'In-company training',
      description: 'Dedicated training for your team, 2 to 8 people per session. Lead time: 3-4 weeks after funding approval.',
      icon: 'Users',
    },
    {
      id: 3,
      title: 'Deliverables included',
      description: 'Personalized materials, site audit, reusable templates and tools, training certificate.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Post-training support',
      description: "Email access to the trainer for 1 month. Remote Q&A session (1h) included.",
      icon: 'Headphones',
    },
  ],
};

// ============================================
// FAQ - Format FAQService (color: cyan)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about our training programs.',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 'faq-1',
      question: 'How does the funding process work?',
      answer:
        "We guide you through the process. Specifically: you provide us with your funding details, we prepare the documentation (program, agreement, quote), and you submit it. Average timeline: 3-4 weeks for approval.",
    },
    {
      id: 'faq-2',
      question: 'Are the training programs suitable for beginners?',
      answer:
        "Yes, we adapt the level to participant profiles. During scoping, we assess each person's level to adjust content. We recommend relatively homogeneous groups for better dynamics.",
    },
    {
      id: 'faq-3',
      question: 'Can the program be customized?',
      answer:
        "That's actually the principle. The base program is a framework we adapt to your specific challenges. Ongoing redesign, regulated industry, international... we integrate your issues.",
    },
    {
      id: 'faq-4',
      question: 'How many people can participate?',
      answer:
        "2 to 8 people per session. Beyond that, exchange quality decreases. For larger groups, we can organize multiple sessions.",
    },
    {
      id: 'faq-5',
      question: "What's the difference with online training?",
      answer:
        "Online training teaches general theory. Our training is 100% applied to your case: we work on your site, your data, your competitors. You leave with actionable deliverables.",
    },
    {
      id: 'faq-6',
      question: 'Do you offer post-training support?',
      answer:
        "A 1-hour Q&A session is included within the month following training. Beyond that, we can offer custom support: additional audit, coaching, recurring services.",
    },
  ],
};

// ============================================
// FINAL CTA (color: purple)
// ============================================
export const ctaData = {
  title: 'Ready to train your teams in Search?',
  description:
    "We discuss your needs, propose a tailored program and support you with funding.",
  secondaryDescription:
    "First call with no commitment. We then send you a detailed program and quote.",
  buttonText: 'Discuss your training project',
  buttonHref: '/contact',
  accentColor: 'rw-purple' as const,
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Custom program' },
    { id: '3', text: 'Certified training' },
  ],
};
