/**
 * DATA - Dubai Page (GEO & SEO Agency in Dubai)
 * URL: /agence-geo-seo/emirats/dubai (EN version)
 *
 * Priority local page with physical presence
 * Keywords: SEO Agency Dubai, GEO Agency Dubai, SEO Dubai, SEO MENA
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'SEO and GEO Agency in Dubai for the MENA Market | Rankwell',
  description:
    'SEO and GEO agency based in Dubai. Optimization for Google and AI-powered search engines in the MENA market. Dubai office, business-centric approach.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Emirates' },
    { label: 'Dubai' },
  ] as BreadcrumbItem[],
  badge: 'dubai',
  title: 'SEO and GEO Agency in Dubai',
  description:
    'Rankwell opened its Dubai office in 2023. For companies targeting the MENA market or expanding internationally from the Gulf, we\'re on the ground. SEO, GEO, SEA and Data.',
  primaryCta: {
    text: 'Book a meeting in Dubai',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Understand GEO',
    href: '#comprendre-geo',
  },
};

// ============================================
// INTRO
// ============================================
export const introData = {
  badge: 'Dubai',
  accentColor: 'rw-blue' as const,
  title: 'Why work with an agency based in Dubai',
  paragraphs: [
    'The MENA market has its own rules. Multilingual queries, intense international competition, rapid adoption of new technologies. An agency that understands these dynamics from the ground makes the difference.',
    'Rankwell didn\'t open a Dubai office to look good on a map. We did it because our international clients needed a partner on the ground. <strong>Same timezone, local market understanding, in-person meetings when needed.</strong>',
    'Discover how our Dubai team combines Search expertise built since 2017 with hands-on knowledge of the Gulf and international market.',
  ],
  tocItems: [
    { id: 'comprendre-geo', label: 'Understanding GEO', icon: 'Lightbulb' },
    { id: 'marche-mena', label: 'The MENA Market', icon: 'Globe' },
    { id: 'pour-qui', label: 'Who It\'s For', icon: 'Users' },
    { id: 'expertises', label: 'Our Services', icon: 'Layers' },
    { id: 'bureaux', label: 'Our Dubai Office', icon: 'Building2' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
  ] as TocItem[],
};

// ============================================
// DUBAI OFFICE
// ============================================
export const bureauData = {
  sectionId: 'bureaux',
  title: 'Our Dubai Office',
  description:
    'We believe in real conversations. The ones where you draw on a whiteboard, challenge ideas, and build together.',
  secondaryDescription:
    'Project kick-off, strategy workshop, audit presentation, or simply a coffee to discuss your situation: we welcome you by appointment.',
  office: {
    title: 'Rankwell Dubai',
    subtitle: 'Our office in the heart of Dubai',
    address: 'Oud Metha Road 18th Street',
    city: 'Dubai, United Arab Emirates',
    transports: 'Oud Metha Metro Station',
    hours: 'Sunday - Thursday, 9am - 6pm',
    phone: '+971 55 529 4430',
    email: 'theophile@rankwell.com',
    latitude: 25.2285,
    longitude: 55.3273,
  },
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'Rankwell Dubai',
  title: 'What our Dubai office brings you',
  subtitle: 'A comprehensive approach to SEO, adapted to the MENA market.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Building2',
      title: 'Local presence',
      description: 'Dubai office for in-person meetings. Same timezone.',
    },
    {
      id: 2,
      icon: 'Globe',
      title: 'MENA market expertise',
      description: 'We understand the region\'s specifics from the ground.',
    },
    {
      id: 3,
      icon: 'Sparkles',
      title: 'Native GEO',
      description: 'Google AND AI engine optimization from the start.',
    },
    {
      id: 4,
      icon: 'Languages',
      title: 'Multilingual SEO',
      description: 'English, French, Arabic-speaking markets.',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Understanding GEO',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'GEO: The future of Search is already here in the Gulf',
  subtitle:
    'The MENA region adopts new technologies faster than the global average. ChatGPT, Perplexity, Google AI Overviews are already widely used.',
  items: [
    {
      id: 1,
      title: 'What is GEO?',
      desc: 'GEO (Generative Engine Optimization) is the discipline of optimizing your content to be cited by AI engines like ChatGPT, Perplexity, Claude or Google\'s AI Overviews. Unlike SEO which aims for the top of results, GEO aims to make your content THE source the AI chooses to cite.',
    },
    {
      id: 2,
      title: 'Why GEO matters more in the Middle East',
      desc: 'The UAE has a 99% internet penetration rate. Government and private sector invest heavily in AI. Users expect AI-powered experiences. MENA users who find you through AI engines are high-value prospects.',
    },
    {
      id: 3,
      title: 'An English-speaking market aligned with AI',
      desc: 'Business is done in English in the Gulf. AI engines are most mature in English. Perfect alignment to deploy effective GEO strategies. We master SEO/GEO in English and French, with a network for Arabic-speaking markets.',
    },
  ],
};

// ============================================
// MENA CALLOUT
// ============================================
export const calloutData = {
  label: 'The MENA market in numbers',
  text: 'The United Arab Emirates has over 9 million inhabitants with one of the highest GDP per capita in the world. Digital visibility here generates significant ROI. But competition is fierce: companies from around the world target this market.',
  icon: 'TrendingUp' as const,
};

// ============================================
// MENA MARKET SPECIFICS
// ============================================
export const marcheMenaData = {
  sectionId: 'marche-mena',
  badge: 'MENA Market',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Search market specifics in the Middle East',
  subtitle: 'The Gulf is not Europe or the United States. Generic strategies that work elsewhere often underperform here.',
  items: [
    {
      id: 1,
      title: 'Multilingual search behavior',
      desc: 'Users search in English, Arabic, sometimes French. A single-language strategy isn\'t enough. We build approaches that cover all entry points.',
    },
    {
      id: 2,
      title: 'International competition',
      desc: 'Dubai attracts companies from around the world. Real estate, finance, tourism, luxury: global players compete for the same keywords. Standing out requires a smart strategy.',
    },
    {
      id: 3,
      title: 'Sunday to Thursday week',
      desc: 'The Gulf operates on a different calendar. Having an agency on the same rhythm means smoother communication, aligned deadlines.',
    },
    {
      id: 4,
      title: 'Specific cultural context',
      desc: 'Content that resonates locally differs from what works in Western markets. We understand what speaks to MENA audiences.',
    },
  ],
};

// ============================================
// WHO IT'S FOR
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Who It\'s For',
  title: 'Is it relevant for you?',
  subtitle: 'Our expertise from Dubai serves different company profiles. Here are the situations where we can really help.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'You\'re expanding in the Gulf',
      description: 'European or international company setting up in Dubai or targeting MENA markets. You need a partner who understands both worlds.',
    },
    {
      label: 'You\'re based in the UAE',
      description: 'Local company wanting to dominate Search in your market. Face-to-face collaboration with an agency that understands local dynamics.',
    },
    {
      label: 'You\'re going international from Dubai',
      description: 'You use Dubai as a hub to expand globally. Multi-market SEO strategy with consistent methodology.',
    },
    {
      label: 'You want the AI advantage',
      description: 'Visionary company that wants to be cited by AI engines, not just ranked on Google. GEO expertise is our specialty.',
    },
  ],
  ctaTitle: 'Not sure if it\'s for you?',
  ctaDescription: 'The first call is no-commitment. We discuss your situation, we honestly tell you if we can help.',
  ctaButtonText: 'Let\'s discuss your project',
  ctaButtonHref: '/contact',
};

// ============================================
// GEO & SEO SERVICES
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Our Services',
  accentColor: 'rw-blue' as const,
  title: 'Our GEO & SEO Services in Dubai',
  subtitle: 'Four complementary services to cover all your organic search needs.',
  items: [
    {
      id: 1,
      title: 'Complete SEO Audit',
      description: 'Technical, semantic and competitive analysis. We identify what\'s holding back your visibility and what can accelerate it.',
      href: '/agence-geo-seo/audit',
      buttonText: 'Learn more',
      imageAlt: 'Complete SEO Audit',
    },
    {
      id: 2,
      title: 'Semantic & Technical SEO',
      description: 'On-site optimization, content structure, technical performance. The foundations of lasting visibility.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'Learn more',
      imageAlt: 'Semantic and technical SEO',
    },
    {
      id: 3,
      title: 'Link Building',
      description: 'Link strategy designed to strengthen your authority. No spam, no shady networks. Real links that matter.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'Learn more',
      imageAlt: 'Link Building Strategy',
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'SEO and GEO-ready writing. Content that ranks and converts. No filler.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'Learn more',
      imageAlt: 'SEO Content Creation',
    },
  ],
};

// ============================================
// KEY FIGURES
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      number: 350,
      suffix: '+',
      label: 'Clients served',
    },
    {
      id: 2,
      icon: 'Calendar',
      number: 8,
      suffix: ' yrs',
      label: 'Of Search expertise',
    },
    {
      id: 3,
      icon: 'ThumbsUp',
      number: 99,
      suffix: '%',
      label: 'Satisfied clients',
    },
    {
      id: 4,
      icon: 'Target',
      number: 100,
      suffix: '%',
      label: 'Business-centric',
    },
  ],
};

// ============================================
// PROCESS
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Our Method',
  accentColor: 'rw-blue' as const,
  title: 'How an engagement starts from Dubai',
  subtitle: 'From first contact to execution, here are the key steps.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'First meeting',
      description: 'At our office, at yours, or via video. No sales pitch.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Complete diagnostic: SEO, GEO-readiness, technical, competition.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Custom strategy with priorities ranked by impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Execution',
      description: 'Production, measurement, adjustment. Transparency via Rankwell One.',
    },
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Frequently asked questions about our Dubai agency',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Where exactly is your Dubai office located?',
      answer: 'Our Dubai office is located in Oud Metha. We receive clients by appointment from Sunday to Thursday, 9am to 6pm. We can also travel to your premises anywhere in Dubai or the UAE.',
    },
    {
      id: '2',
      question: 'Do you work with companies outside the UAE?',
      answer: 'Yes. We work with companies targeting the MENA region from anywhere in the world, as well as UAE-based companies targeting international markets. Our Dubai office serves as a hub for the Middle East, North Africa and connections to European markets via our Paris office.',
    },
    {
      id: '3',
      question: 'What languages do you support for SEO?',
      answer: 'We execute SEO strategies directly in English and French. For Arabic-speaking markets, we work with native specialists in our network. Multilingual SEO is one of our key strengths for the MENA region.',
    },
    {
      id: '4',
      question: 'What is GEO and why does it matter?',
      answer: 'GEO (Generative Engine Optimization) is optimization for AI engines like ChatGPT, Perplexity and Google\'s AI features. As users increasingly get answers from AI rather than clicking on search results, being the source AI cites becomes crucial. We integrate GEO into every SEO strategy from the start.',
    },
    {
      id: '5',
      question: 'How does your approach differ from other Dubai SEO agencies?',
      answer: 'Three things set us apart: native GEO integration (not an afterthought), real local presence (our team is actually here, not remote support), and business-centric methodology (we measure success in conversions and revenue, not just rankings).',
    },
    {
      id: '6',
      question: 'Can we meet before committing?',
      answer: 'Absolutely. We offer a free initial consultation to understand your situation and assess if we\'re the right fit. This meeting can be at our Dubai office, at your premises, or via video depending on your preference. No commitment.',
    },
  ],
};

// ============================================
// FINAL CTA
// ============================================
export const ctaData = {
  title: 'Let\'s meet in Dubai',
  description:
    '30-minute first meeting at our office or via video. No commitment. We listen, analyze, and tell you what we think.',
  buttonText: 'Book a meeting in Dubai',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// OTHER CITIES (internal linking)
// ============================================
export const autresVillesData = {
  title: 'We also work with companies in these cities',
  cities: [
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
  ],
};
