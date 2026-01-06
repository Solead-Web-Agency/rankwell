/**
 * DATA - Paris Page (GEO & SEO Agency in Paris)
 * URL: /agence-geo-seo/france/paris (EN version)
 *
 * Priority local page with physical presence
 * Keywords: SEO Agency Paris, GEO Agency Paris, Paris SEO
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'GEO and SEO Agency in Paris | Google & AI Optimization - Rankwell',
  description:
    'GEO and SEO agency in Paris. Google optimization and AI-powered search engines. Office in the 17th arrondissement. Business-centric approach focused on results.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Paris' },
  ] as BreadcrumbItem[],
  badge: 'paris',
  title: 'GEO and SEO Agency in Paris',
  description:
    'Google is no longer the only search engine. ChatGPT, Perplexity, Gemini also answer your future customers. Rankwell helps you be visible on both fronts.',
  primaryCta: {
    text: 'Book a meeting',
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
  badge: 'Paris',
  accentColor: 'rw-blue' as const,
  title: 'A Paris SEO agency that integrates GEO',
  paragraphs: [
    'Search is evolving. Since 2023, a growing share of searches goes through conversational interfaces: ChatGPT, Perplexity, Gemini, and soon Google with its AI Overview.',
    'These AI engines don\'t work like Google. They don\'t return a list of links. They give an answer, sometimes with cited sources. The question becomes: <strong>is your company among the sources these AIs consider reliable and relevant?</strong>',
    'This is what we call GEO (Generative Engine Optimization). From our Paris offices, we combine SEO and GEO to build lasting visibility on Google AND AI-powered search engines.',
  ],
  tocItems: [
    { id: 'bureaux', label: 'Our Paris Office', icon: 'Building2' },
    { id: 'comprendre-geo', label: 'Understanding GEO', icon: 'Lightbulb' },
    { id: 'approche', label: 'Our Approach', icon: 'Target' },
    { id: 'pour-qui', label: 'Who It\'s For', icon: 'Users' },
    { id: 'expertises', label: 'Our Services', icon: 'Layers' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
  ] as TocItem[],
};

// ============================================
// PARIS OFFICE
// ============================================
export const bureauData = {
  sectionId: 'bureaux',
  title: 'Our Paris Office',
  description:
    'We believe in real conversations. The ones where you draw on a whiteboard, challenge ideas, and build together.',
  secondaryDescription:
    'Project kick-off, strategy workshop, audit presentation, or simply a coffee to discuss your situation: we welcome you by appointment.',
  office: {
    title: 'Rankwell Paris',
    subtitle: 'Our headquarters in the 17th arrondissement',
    address: '8 place Boulnois',
    city: '75017 Paris, France',
    transports: 'Line 2 Ternes, Line 3 Pereire, RER A Charles de Gaulle Etoile',
    hours: 'Monday - Friday, 10am - 7pm',
    phone: '01 82 28 30 00',
    email: 'contact@rankwell.fr',
    latitude: 48.8792,
    longitude: 2.2962,
  },
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'Rankwell Paris',
  title: 'What Rankwell brings to Paris-based companies',
  subtitle: 'A comprehensive approach to SEO, adapted to Search evolution.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Sparkles',
      title: 'Combined GEO and SEO expertise',
      description: 'Visible on Google and AI engines. A unified strategy for both fronts.',
    },
    {
      id: 2,
      icon: 'Target',
      title: 'Business-centric approach',
      description: 'We measure results in conversions, not rankings. Your ROI first.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Senior consultants',
      description: 'Experts who manage your project from A to Z. No turnover, no juniors.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Rankwell One',
      description: 'Our platform to track your performance in real-time.',
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
  title: 'How GEO Works',
  subtitle:
    'To optimize your visibility on AI engines, you need to understand how they select their sources.',
  items: [
    {
      id: 1,
      title: 'Topical authority',
      desc: 'LLMs evaluate whether you\'re a legitimate source on a topic. Your content strategy must build coherent topic clusters. Better to go deep on 5 subjects than to cover 50 superficially.',
    },
    {
      id: 2,
      title: 'Content citability',
      desc: 'AIs look for passages they can easily extract and rephrase. Clear definitions, structured lists, sourced data points.',
    },
    {
      id: 3,
      title: 'Mention network',
      desc: 'LLMs don\'t just look at your site. They evaluate how you\'re mentioned elsewhere: press articles, industry studies, specialized forums.',
    },
    {
      id: 4,
      title: 'Information freshness',
      desc: 'AIs favor up-to-date sources. Your strategic content must be kept alive. Visible update dates, regularly refreshed information.',
    },
  ],
};

// ============================================
// CALLOUT SEO + GEO
// ============================================
export const calloutData = {
  label: 'SEO and GEO are not opposed',
  text: 'Well-structured content for GEO usually performs well in SEO too. The fundamentals are the same: topical authority, quality content, solid technical structure. What changes is how you structure information to make it "citable" by AIs.',
  icon: 'Lightbulb' as const,
};

// ============================================
// OUR APPROACH
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Our Approach',
  accentColor: 'rw-blue' as const,
  title: 'Our business-centric approach',
  subtitle: 'Many agencies talk about ROI. Here\'s what it actually means at Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'We measure what matters',
      description: 'Ranking first for a keyword that doesn\'t generate business is useless. Our main metric is impact on your business: leads generated, attributed sales, acquisition cost.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'We challenge your goals',
      description: 'Sometimes what you think you want isn\'t what you need. Our job is also to tell you when you\'re on the wrong track. A partner who says yes to everything isn\'t a partner.',
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'We adapt to your context',
      description: 'An early-stage startup doesn\'t have the same needs as a large corporation. An e-commerce isn\'t managed like a B2B SaaS. Our approach adapts to your situation.',
    },
    {
      id: 4,
      icon: 'Eye',
      title: 'We give you visibility',
      description: 'Rankwell One connects your Search data to your business data. You see real impact, not vanity metrics. And you can track evolution in real-time.',
    },
  ],
};

// ============================================
// WHO IT'S FOR
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Who It\'s For',
  title: 'We work with companies of all sizes',
  subtitle: 'Startups, SMEs, mid-caps, large groups. What matters is having a real visibility challenge and the will to move forward.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'You want to develop your digital acquisition',
      description: 'You know Search is a lever, but you don\'t necessarily have the time or expertise in-house.',
    },
    {
      label: 'You want to anticipate Search evolution',
      description: 'You\'re wondering what generative AI changes for your visibility and how to prepare.',
    },
    {
      label: 'You need measurable results',
      description: 'You\'re tired of reports that talk about rankings with no link to your business.',
    },
    {
      label: 'You\'re looking for a partner, not a vendor',
      description: 'You want an agency that challenges you and commits to your results.',
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
  title: 'Our GEO & SEO Services in Paris',
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
  title: 'How an engagement starts',
  subtitle: 'From first contact to execution, here are the key steps.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'First call',
      description: '30 min to understand your situation. No sales pitch.',
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
      title: 'Proposal',
      description: 'Custom strategy with clear, measurable objectives.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Execution',
      description: 'Production, measurement, adjustment. Full transparency via Rankwell One.',
    },
  ],
};

// ============================================
// TEAM
// ============================================
export const equipeData = {
  sectionId: 'equipe',
  badge: 'The Team',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'The Rankwell Paris Team',
  items: [
    {
      id: 1,
      title: 'A dedicated senior consultant',
      desc: 'The person who thinks about your strategy is the same one who executes it. No middleman. One contact who knows your file inside out.',
    },
    {
      id: 2,
      title: 'Available experts',
      desc: 'Depending on your needs, your consultant can call on our technical, data, content or link building experts. Specialized skills without managing 5 contacts.',
    },
    {
      id: 3,
      title: 'Involved leadership',
      desc: 'Founders remain accessible for strategic decisions. You\'re not working with a machine, but with people who commit to your results.',
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
  title: 'Frequently asked questions about our Paris SEO agency',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'What\'s the difference between SEO and GEO?',
      answer: 'SEO optimizes for traditional search engines (mainly Google). GEO optimizes for AI-powered search engines (ChatGPT, Perplexity, Gemini). Concretely, GEO requires a different content structure: AIs look for "citable" passages (clear definitions, structured lists, sourced data). Well-optimized GEO content usually performs well in SEO too.',
    },
    {
      id: '2',
      question: 'How long to see results?',
      answer: 'It depends on your starting point and goals. SEA: immediate results upon campaign launch. SEO/GEO: first signals at 3 months, significant results at 6-12 months. Organic search is a medium-long term investment that builds lasting assets.',
    },
    {
      id: '3',
      question: 'Do you work with competitors in the same industry?',
      answer: 'No. We commit to not working with direct competitors in the same geographic market. It\'s a matter of ethics and effectiveness. Before starting, we check there\'s no conflict of interest.',
    },
    {
      id: '4',
      question: 'What budget should I plan?',
      answer: 'It depends on your objectives, your industry and competition. A serious SEO/GEO engagement requires a minimum investment to be effective. If your budget is very constrained, we might suggest a different approach (training, one-time audit).',
    },
    {
      id: '5',
      question: 'Can we meet before committing?',
      answer: 'Of course. The first call is no-commitment. We can meet at our 17th arrondissement office, at your place, or via video. The goal: understand your situation and see if we\'re the right partner.',
    },
    {
      id: '6',
      question: 'Do you only work with Paris-based companies?',
      answer: 'No. We work with companies from all over France and internationally from our Paris and Dubai offices. Geographic proximity makes some exchanges easier but isn\'t a prerequisite.',
    },
  ],
};

// ============================================
// FINAL CTA
// ============================================
export const ctaData = {
  title: 'Let\'s meet in Paris',
  description:
    '30-minute first meeting at our 17th arrondissement office or via video. No commitment. We listen, analyze, and tell you what we think.',
  buttonText: 'Book a meeting',
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
