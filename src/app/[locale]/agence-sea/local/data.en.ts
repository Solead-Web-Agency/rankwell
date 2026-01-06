/**
 * ============================================
 * DATA - Local SEA Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Local Google Ads Advertising and Local SEA - Rankwell',
  description: 'Local advertising campaigns on Google Ads to capture customers near you. Agency expert in geolocated advertising and proximity targeting.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEA', href: '/en/sea-agency' },
    { label: 'Local Ads' },
  ] as BreadcrumbItem[],
  title: 'Local Google Ads advertising to dominate your area',
  description: 'Your customers search "near me". Local Google Ads campaigns position you at the exact moment they need you. Our agency maximizes your visibility where it matters.',
  ctaText: 'Discuss your local visibility',
  ctaHref: '/en/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Local Services Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    '46% of Google searches have local intent. "Emergency plumber Paris 15", "Italian restaurant Lyon", "mechanic open Sunday". These queries translate to immediate need. And whoever appears first with their Local Ads often wins the customer.',
    'Local SEA is the ability to be present exactly at the right time, in the right place. Local Services Ads, radius targeting, location extensions: powerful levers for businesses with a local catchment area.',
    'Discover how our <strong class="text-secondary dark:text-accent">business-centric</strong> approach applied to local campaigns maximizes your ROI on proximity customers. Every local click must turn into a visit or call.',
  ],
  tocItems: [
    { id: 'inclus', label: 'What we do', icon: 'Package' },
    { id: 'enjeux', label: 'Local challenges', icon: 'CircleAlert' },
    { id: 'ciblage', label: 'Geo targeting', icon: 'MapPin' },
    { id: 'formats', label: 'Local formats', icon: 'LayoutGrid' },
    { id: 'secteurs', label: 'Sectors', icon: 'Briefcase' },
    { id: 'process', label: 'How it works', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Our contribution',
  accentColor: 'rw-cyan' as const,
  title: 'What we do for your paid local visibility',
  subtitle: 'A Google Ads strategy designed to capture customers in your area.',
  items: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Precise geographic targeting',
      description: 'Radius, postal codes, custom zones around your locations',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'Location extensions',
      description: 'Address, phone, directions directly in your ads',
    },
    {
      id: 3,
      icon: 'Navigation',
      title: 'Proximity bid adjustments',
      description: 'Bid modifiers based on distance to your location',
    },
    {
      id: 4,
      icon: 'Activity',
      title: 'Visit tracking',
      description: 'Measuring store visits and calls generated',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The best place to hide a dead body is page 2 of Google results.',
  author: 'Unknown',
  role: 'SEO/SEA saying',
};

// ============================================
// 5. ENJEUX DATA (#enjeux)
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'Challenges',
  accentColor: 'rw-cyan' as const,
  title: 'Why is local SEA strategic?',
  subtitle: 'Local search behavior is unique. It requires an adapted advertising approach.',
  dimensions: [
    {
      dimension: 1,
      label: 'Intent',
      title: 'Local intent is action intent',
      subtitle: '78% of local mobile searches result in a purchase within 24 hours.',
      items: ['High urgency', 'Quick decision', 'Ready to travel or call'],
    },
    {
      dimension: 2,
      label: 'Competition',
      title: 'The battle plays out over a few kilometers',
      subtitle: 'Your local competitors bid on the same queries, in the same area.',
      items: ['Variable CPCs by density', 'Advantage to closest', 'Strategic hours'],
    },
    {
      dimension: 3,
      label: 'Mobile',
      title: 'Mobile dominates local searches',
      subtitle: '76% of local searches are on smartphone. Mobile experience is critical.',
      items: ['Click-to-call essential', 'Directions in one click', 'Mobile-adapted ads'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Local SEA + Local SEO = winning combo',
  text: 'Local SEA complements your local SEO strategy. It positions you immediately while SEO builds your organic visibility. Both channels reinforce each other: SEA reveals converting keywords, SEO reduces paid dependency long term.',
};

// ============================================
// 7. TABLEAU CIBLAGE DATA (#ciblage)
// ============================================
export const tableauCiblageData = {
  sectionId: 'ciblage',
  badge: 'Targeting',
  accentColor: 'rw-cyan' as const,
  title: 'Google Ads geographic targeting options',
  subtitle: 'Google Ads offers several precision levels to target your catchment area.',
  columns: ['Targeting type', 'Precision', 'Use case', 'Recommendation'],
  rows: [
    ['By country/region', 'Low', 'National campaigns', 'Not for local'],
    ['By city', 'Medium', 'Metropolitan coverage', 'Good for large areas'],
    ['By postal code', 'High', 'Specific neighborhoods', 'Ideal for local retail'],
    ['By radius (km)', 'Very high', 'Around a precise point', 'Our recommendation'],
    ['Custom zone', 'Maximum', 'Free-form on map', 'For complex cases'],
    ['By point of interest', 'Variable', 'People searching an area', 'Complement to radius'],
  ],
};

// ============================================
// 8. FORMATS DATA (#formats)
// ============================================
export const formatsData = {
  sectionId: 'formats',
  badge: 'Formats',
  accentColor: 'rw-cyan' as const,
  title: 'Google Ads formats designed for local',
  subtitle: '5 advertising levers to maximize your local visibility.',
  items: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Location extensions',
      description: 'Add your address and a Google Maps link directly in your Search ads. Users see the distance and can calculate directions in one click.',
    },
    {
      id: 2,
      icon: 'Phone',
      title: 'Call extensions',
      description: 'A "Call" button directly in the ad. On mobile, one click is enough to reach you. Ideal for emergency services and businesses where phone converts.',
    },
    {
      id: 3,
      icon: 'BadgeCheck',
      title: 'Local Services Campaigns',
      description: 'For certain sectors (plumbers, locksmiths, electricians...), Google offers ads with "Google Guaranteed" badge. Pay per lead, not per click.',
    },
    {
      id: 4,
      icon: 'Zap',
      title: 'Local Performance Max',
      description: 'Performance Max campaigns can be optimized for store visits. The algorithm broadcasts across all channels to maximize physical traffic.',
    },
    {
      id: 5,
      icon: 'Map',
      title: 'Ads on Google Maps',
      description: 'Your ads can appear directly in Google Maps when users search for businesses. Maximum visibility at the moment of decision.',
    },
  ],
};

// ============================================
// 9. SECTEURS DATA (#secteurs)
// ============================================
export const secteursData = {
  sectionId: 'secteurs',
  badge: 'Sectors',
  accentColor: 'rw-cyan' as const,
  title: 'Which sectors does local SEA excel for?',
  subtitle: 'Local SEA is particularly effective for these business types.',
  reasons: [
    {
      id: 1,
      icon: 'Siren',
      title: 'Emergency services',
      description: 'Plumbers, locksmiths, roadside assistance. When the customer needs you now, whoever appears first wins. Local SEA is king.',
    },
    {
      id: 2,
      icon: 'Store',
      title: 'Local retail',
      description: 'Restaurants, hair salons, boutiques. "Near me" searches are exploding. Being visible on these queries generates in-store traffic.',
    },
    {
      id: 3,
      icon: 'Briefcase',
      title: 'Professional services',
      description: 'Lawyers, doctors, accountants. Geographic proximity is a selection criterion. Local SEA captures prospects in your area.',
    },
  ],
};

// ============================================
// 10. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'How we deploy your local SEA',
  subtitle: '4 steps to maximize your paid local visibility.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Area analysis',
      description: 'We map your catchment area, identify local competition, estimate volumes and CPCs by geographic sector.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Local configuration',
      description: 'Precise geographic targeting, location extensions linked to Google Business, proximity-adjusted bids.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Launch and test',
      description: 'Campaign activation, performance monitoring by zone, A/B testing on local messages.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Continuous optimization',
      description: 'Radius adjustments, delivery time optimization, scaling on performing zones.',
    },
  ],
};

// ============================================
// 11. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Think globally, act locally. The best marketing strategy ever.',
  author: 'Seth Godin',
  role: 'Marketing Author',
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about local SEA.',
  items: [
    {
      id: 'faq-1',
      question: 'What budget for local SEA?',
      answer: 'Local SEA can work with smaller budgets than national, since the broadcast area is limited. Plan €500-2000/month for an urban area. CPCs vary by local competition and industry.',
    },
    {
      id: 'faq-2',
      question: 'How do you measure store visits?',
      answer: 'Google Ads offers store visit tracking for eligible accounts (sufficient volume, linked Google Business Profile). Otherwise, we measure calls, direction requests, and website conversions. Specific promo codes can also track attribution.',
    },
    {
      id: 'faq-3',
      question: 'Do I need a Google Business Profile?',
      answer: 'Strongly recommended. Google Business Profile enables location extensions, appearing on Google Maps, and benefiting from local ad formats. Without GBP, you lose important levers.',
    },
    {
      id: 'faq-4',
      question: 'Local SEA or local SEO, which to choose?',
      answer: 'Both are complementary. Local SEA delivers immediate results and lets you test areas. Local SEO builds lasting organic visibility. Ideally, combine both for maximum coverage.',
    },
    {
      id: 'faq-5',
      question: 'Can we target multiple locations?',
      answer: 'Yes, it\'s even one of our specialties. We configure campaigns by location or zone, with consolidated or detailed reporting based on your needs. Account structure is designed to scale.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Capture customers',
  titleHighlight: 'near you',
  description: 'Your local customers are searching on Google. Local SEA positions you exactly where they look, when they need you.',
  secondaryDescription: 'First step: an analysis of your area and local competition. We tell you what potential exists and how to capture it.',
  buttonText: 'Analyze my local potential',
  checklistItems: [
    { id: '1', text: 'Free analysis' },
    { id: '2', text: 'Potential estimated' },
    { id: '3', text: 'Competition mapped' },
  ],
};
