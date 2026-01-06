/**
 * ============================================
 * DATA - International SEO Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'International SEO and Multilingual Optimization - Rankwell',
  description: 'International SEO and multilingual optimization to conquer new markets. Multi-country international SEO strategy, multilingual SEO and GEO. Paris & Dubai.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'International' },
  ] as BreadcrumbItem[],
  title: 'International SEO: conquer new markets',
  description: "You're targeting multiple markets, multiple languages, multiple countries. International SEO and multilingual optimization isn't just about translating your pages. It's a strategy in its own right.",
  ctaText: 'Discuss your project',
  ctaHref: '/en/contact',
  imageAlt: 'International SEO and GEO Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'International SEO',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Each market has its specificities. Search behaviors differ. Dominant search engines vary. Local competition has its own strengths. An international SEO strategy that works in one country doesn\'t automatically transfer elsewhere.',
    "With offices in Paris and Dubai, Rankwell supports companies expanding internationally. Our multilingual SEO expertise covers Europe, MENA, and beyond. We master the technical challenges (hreflang, domain structure) and strategic multilingual optimization.",
    'And with international GEO, we also prepare you to be cited by AI engines in your target markets. ChatGPT, Perplexity and others know no borders.',
  ],
  tocItems: [
    { id: 'enjeux', label: 'The challenges', icon: 'CircleAlert' },
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'process', label: 'How it works', icon: 'ListChecks' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'recap',
  badge: 'What we bring',
  accentColor: 'rw-blue' as const,
  title: 'What we bring in international SEO',
  subtitle: 'Complete expertise in multilingual optimization and international SEO strategy.',
  items: [
    {
      id: 1,
      title: 'Multi-market strategy',
      description: 'Not a translation, a real adaptation by country.',
      icon: 'Globe',
    },
    {
      id: 2,
      title: 'Technical architecture',
      description: 'Hreflang, domain structure, indexing by country.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Localized content',
      description: 'Native writing or supervision of specialized translators.',
      icon: 'Languages',
    },
    {
      id: 4,
      title: 'Local link building',
      description: 'Link acquisition on each target market.',
      icon: 'Link',
    },
  ] as RecapItem[],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Think global, act local. In SEO, this means understanding that each market has its own rules.',
  author: 'Aleyda Solis',
  role: 'International SEO Consultant',
};

// ============================================
// 5. ENJEUX DATA (#enjeux)
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'The challenges',
  accentColor: 'rw-blue' as const,
  title: 'The real challenges of international SEO',
  subtitle: "Launching internationally without an adapted international SEO strategy means starting with a handicap. Here's what makes the difference.",
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/international/enjeu-marche.webp',
      alt: 'Each market has its own SEO rules',
      title: 'Each market has its own game',
      desc: "Keywords don't translate, they're searched. The intent behind a query varies according to cultures. Your local competitors have years of advantage on their market.",
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/international/enjeu-technique.webp',
      alt: 'International SEO technical structure',
      title: 'Technology must follow',
      desc: 'Subdomains, directories, national domains? Poorly implemented hreflang? Duplicate content between language versions? Technical errors are costly in international.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/international/enjeu-autorite.webp',
      alt: 'Authority and backlinks by market',
      title: 'Authority is built locally',
      desc: "Your French backlinks don't help you in Germany. Each market requires its own reputation strategy. Local mentions count for search engines AND for AI.",
    },
  ] as FeatureItem[],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'International GEO',
  text: "AI engines like ChatGPT respond in the user's language. Being cited in English doesn't guarantee being cited in German or Arabic. International GEO and multilingual SEO require a content strategy adapted to each market.",
};

// ============================================
// 7. TABLEAU STRUCTURE DATA
// ============================================
export const tableauStructureData = {
  sectionId: 'structure',
  badge: 'Architecture',
  accentColor: 'rw-blue' as const,
  title: 'Choosing your site structure for international SEO',
  subtitle: 'Each multilingual optimization option has its advantages. Here is our decision grid for your international SEO strategy.',
  columns: ['Structure', 'Example', 'Geographic signal', 'Authority sharing', 'Recommended when'],
  rows: [
    ['ccTLD', 'site.de, site.fr', '★★★★★', '★☆☆☆☆ (separate sites)', 'Major markets, substantial budget'],
    ['Subdomains', 'de.site.com', '★★★☆☆', '★★☆☆☆ (partial)', 'Autonomous local teams'],
    ['Subdirectories', 'site.com/de/', '★★☆☆☆', '★★★★★ (same domain)', 'Limited budget, quick launch'],
    ['URL parameters', 'site.com?lang=de', '★☆☆☆☆', '★★★☆☆', 'Never recommended in SEO'],
  ],
};

// ============================================
// 8. APPROCHE DATA (#approche)
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Our approach',
  accentColor: 'rw-blue' as const,
  title: 'Our approach to international SEO and multilingual optimization',
  subtitle: 'No one-size-fits-all recipe. An international SEO strategy adapted to your situation, target markets and resources.',
  items: [
    {
      id: 1,
      title: 'Market prioritization',
      description: 'We analyze SEO potential by country: search volume, competition, market maturity. You know where to focus your efforts.',
      icon: 'Target',
    },
    {
      id: 2,
      title: 'Custom architecture',
      description: 'ccTLD, subdomains, directories: each option has its advantages. We recommend the structure adapted to your situation.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Adapted, not translated content',
      description: 'We work with native writers or supervise your translators for content that performs locally.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Centralized management',
      description: 'Multiple markets, one dashboard. Consolidated view of your performance by country.',
      icon: 'LayoutDashboard',
    },
  ] as RecapItem[],
};

// ============================================
// 9. FOR WHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Is international SEO and multilingual optimization for you?',
  subtitle: 'Here are the situations where an international SEO strategy makes sense.',
  criteria: [
    { label: 'Planned expansion', description: "You're launching your business in new markets" },
    { label: 'Existing multilingual site', description: 'You have local versions but they underperform' },
    { label: 'International competition', description: 'Your competitors are already visible in your target markets' },
    { label: 'Cross-border e-commerce', description: 'You already sell abroad and want to accelerate' },
    { label: 'Multi-country group', description: 'You manage multiple entities with local sites' },
  ],
  ctaTitle: 'Ready to expand internationally?',
  ctaDescription: "Let's discuss your target markets and evaluate SEO potential by country together.",
  ctaButtonText: 'Discuss your project',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 10. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Our network',
  text: 'With offices in Paris and Dubai, and a network of local partners, we cover Europe, the MENA region, North America and beyond. Asia, Latin America: let\'s discuss to evaluate feasibility.',
};

// ============================================
// 12. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'How an international SEO project works',
  subtitle: '4 steps to deploy your international SEO strategy and multilingual optimization on your target markets.',
  steps: [
    {
      id: 'cadrage',
      stepNumber: 1,
      title: 'Scoping',
      description: 'Objectives, priority markets, available resources, constraints.',
    },
    {
      id: 'audit',
      stepNumber: 2,
      title: 'Audit & Strategy',
      description: 'Analysis by market, opportunities, prioritized roadmap.',
    },
    {
      id: 'deploiement',
      stepNumber: 3,
      title: 'Deployment',
      description: 'Technical, content, links. Market by market or in parallel.',
    },
    {
      id: 'pilotage',
      stepNumber: 4,
      title: 'Management',
      description: 'Tracking by country, adjustments, arbitration between markets.',
    },
  ],
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about international SEO and multilingual optimization',
  items: [
    {
      id: 'faq-1',
      question: 'Do we need a site per country or a multilingual site?',
      answer: 'It depends on your situation. ccTLDs (.de, .es, .ae) send a strong local signal but require more resources. Subdirectories (/de/, /es/) share the authority of the main domain. We analyze your case and recommend the best option.',
    },
    {
      id: 'faq-2',
      question: 'Can we simply translate our English content?',
      answer: "Translation is a starting point, not an international SEO strategy. Keywords, search intents, editorial angles differ by market. Multilingual SEO adapts content to perform locally, not just to be understandable.",
    },
    {
      id: 'faq-3',
      question: "How do you handle languages you don't speak?",
      answer: "We work with native writers and consultants in each market. For languages like Arabic or German, we have trusted partners integrated into our process. You have a single point of contact at Rankwell, we handle the coordination.",
    },
    {
      id: 'faq-4',
      question: 'What budget should we plan for international SEO?',
      answer: "It depends on the number of markets, your starting point and your objectives. A project on 2-3 European countries doesn't have the same cost as a global deployment. First exchange to scope your needs and give you a realistic estimate.",
    },
    {
      id: 'faq-5',
      question: 'Does GEO work the same way everywhere?',
      answer: "The principles are the same (authority, citability, mentions), but execution varies. The sources AI consults differ by language. Well-optimized GEO content in English doesn't guarantee being cited when the user asks their question in German.",
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Launch your',
  titleHighlight: 'international SEO',
  description: "Paris, Dubai or video call. Let's discuss your target markets and define your international SEO and multilingual optimization strategy.",
  secondaryDescription: 'First exchange to understand your objectives and priority markets. No commitment.',
  buttonText: 'Discuss your project',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Paris & Dubai' },
    { id: '3', text: 'Multi-market' },
  ],
};
