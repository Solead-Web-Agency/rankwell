/**
 * ============================================
 * DATA - Local SEO / Local GEO Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Local SEO Agency and Local Search Optimization - Rankwell',
  description: 'Expert local SEO agency specializing in local search optimization. Dominate proximity searches on Google and AI. Google Business Profile, local citations and local GEO.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'Local SEO' },
  ] as BreadcrumbItem[],
  title: 'Local SEO agency: dominate local search',
  description: 'Your customers search "near me". Are you visible? Our local SEO agency optimizes your presence on Google AND on AI that recommend addresses.',
  ctaText: 'Discuss your local visibility',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/local/hero.webp',
  imageAlt: 'Local SEO and Local GEO Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Local SEO Agency',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    '46% of Google searches have local intent. "Italian restaurant Lyon", "emergency plumber Paris 15", "employment lawyer Bordeaux". If you\'re not visible on these queries, you\'re losing customers every day.',
    'But local search optimization is no longer limited to Google. ChatGPT recommends businesses. Perplexity suggests service providers. Generative AI is becoming intelligent directories.',
    'Discover how our local SEO agency and our expertise in <strong class="text-secondary dark:text-accent">local SEO and local GEO</strong> position you where your customers are searching. Google Maps, local pack, AND conversational AI responses.',
  ],
  tocItems: [
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'enjeux', label: 'Local challenges', icon: 'CircleAlert' },
    { id: 'piliers', label: '5 pillars', icon: 'Columns2' },
    { id: 'gbp', label: 'Google Business', icon: 'MapPin' },
    { id: 'citations', label: 'Local citations', icon: 'Quote' },
    { id: 'avis', label: 'Customer reviews', icon: 'Star' },
    { id: 'mesure', label: 'Local KPIs', icon: 'ChartBar' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. ENJEUX LOCAL DATA (#enjeux)
// ============================================
export const enjeuxLocalData = {
  sectionId: 'enjeux',
  badge: 'Challenges',
  accentColor: 'rw-blue' as const,
  title: 'Why has local search become strategic?',
  subtitle: 'Search behaviors have changed. Local SEO is no longer optional, it\'s a major acquisition channel.',
  reasons: [
    {
      id: 'comportement',
      title: '"Near me" searches',
      description: '"Near me" searches have exploded 500% in 5 years. Your customers search local, on mobile, with immediate action intent.',
      icon: 'MapPin',
    },
    {
      id: 'conversion',
      title: 'High conversion rate',
      description: '78% of local mobile searches result in an in-store purchase within 24 hours. Local intent is purchase intent.',
      icon: 'ShoppingBag',
    },
    {
      id: 'ia-locale',
      title: 'AI recommends addresses',
      description: 'ChatGPT and Perplexity now suggest local businesses. Being well-referenced locally also means being recommended by AI.',
      icon: 'Bot',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Think globally, act locally. The best marketing strategy ever.',
  author: 'Seth Godin',
  role: 'Marketing Author & Entrepreneur',
};

// ============================================
// 5. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Our approach',
  accentColor: 'rw-blue' as const,
  title: 'A local search strategy that covers all fronts',
  subtitle: "Local SEO is more than Google Business Profile. Our local SEO agency masters the complete ecosystem.",
  items: [
    {
      id: 1,
      title: 'Google Business Profile',
      description: 'Complete optimization of your listing: categories, attributes, posts, photos, Q&A.',
      icon: 'MapPin',
    },
    {
      id: 2,
      title: 'Citations and NAP',
      description: 'Consistency of your information across all directories and local platforms.',
      icon: 'Building2',
    },
    {
      id: 3,
      title: 'Geolocalized content',
      description: 'Local pages, landing pages by zone, content that responds to local intents.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Reputation and reviews',
      description: 'Review acquisition strategy and local e-reputation management.',
      icon: 'Star',
    },
  ] as RecapItem[],
};

// ============================================
// 7. 5 PILIERS SEO LOCAL DATA (#piliers)
// ============================================
export const piliersLocalData = {
  sectionId: 'piliers',
  badge: '5 pillars',
  accentColor: 'rw-blue' as const,
  title: 'The 5 pillars of effective local search optimization',
  subtitle: 'A solid local SEO strategy rests on these 5 dimensions. Each reinforces the others.',
  dimensions: [
    {
      dimension: 1,
      label: 'PILLAR 1',
      title: 'Google Business Profile',
      subtitle: 'Your storefront on Google Maps and the local pack.',
      items: ['Optimized categories and attributes', 'Regular posts and updates', 'Quality photos and videos', 'Completed Q&A section', 'Up-to-date hours and services'],
    },
    {
      dimension: 2,
      label: 'PILLAR 2',
      title: 'Local citations',
      subtitle: 'Your presence on directories and platforms.',
      items: ['Consistent NAP everywhere', 'Industry directories', 'Yelp, TripAdvisor, Yellow Pages', 'Chambers of commerce', 'Local news sites'],
    },
    {
      dimension: 3,
      label: 'PILLAR 3',
      title: 'Local content',
      subtitle: 'Pages that respond to proximity searches.',
      items: ['Pages by geographic zone', 'Landing pages by service + city', 'Blog with local focus', 'Local news and events', 'Local client case studies'],
    },
    {
      dimension: 4,
      label: 'PILLAR 4',
      title: 'Reviews and reputation',
      subtitle: 'The social proof that makes the difference.',
      items: ['Review acquisition strategy', 'Systematic response to reviews', 'Negative review management', 'Platform diversification', 'Integration on your site'],
    },
    {
      dimension: 5,
      label: 'PILLAR 5',
      title: 'Technical signals',
      subtitle: 'The technical foundations of local SEO.',
      items: ['LocalBusiness Schema', 'Geographic structured data', 'Mobile-first imperative', 'Loading speed', 'AMP pages if relevant'],
    },
  ],
};

// ============================================
// 8. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Local GEO: the new frontier',
  text: 'Generative AI is starting to recommend local businesses and service providers. ChatGPT suggests restaurants, Perplexity proposes lawyers. Your well-structured local search optimization feeds what these AI "know" about you. Local GEO is becoming as important as local SEO.',
};

// ============================================
// 9. GBP OPTIMISATION DATA (#gbp)
// ============================================
export const gbpData = {
  sectionId: 'gbp',
  badge: 'Google Business Profile',
  accentColor: 'rw-blue' as const,
  title: 'Criteria for an optimized Google Business listing',
  subtitle: 'Your GBP listing is often the first contact with your prospects. Here is what makes the difference.',
  items: [
    {
      id: 1,
      title: 'Complete information',
      description: 'Well-chosen categories, filled attributes, description with local keywords. Google favors comprehensive listings.',
      icon: 'ClipboardList',
    },
    {
      id: 2,
      title: 'Quality visual content',
      description: 'Listings with photos generate 42% more direction requests. Visual quality directly influences click-through rate.',
      icon: 'Image',
    },
    {
      id: 3,
      title: 'Regular activity',
      description: 'Posts, news, offers: an active listing sends a positive signal to Google. "Living" listings rank higher in the local pack.',
      icon: 'Calendar',
    },
    {
      id: 4,
      title: 'Questions & Answers',
      description: 'The Q&A section is indexed by Google. Complete answers to your FAQs strengthen your relevance on associated queries.',
      icon: 'MessageCircle',
    },
  ],
};

// ============================================
// 10. TABLEAU CITATIONS DATA (#citations)
// ============================================
export const tableauCitationsData = {
  sectionId: 'citations',
  badge: 'Citations',
  accentColor: 'rw-blue' as const,
  title: 'Which local citations are essential?',
  subtitle: 'Citations (mentions of your NAP) strengthen your local legitimacy. Here are the priority platforms by sector.',
  columns: ['Sector', 'Essential platforms', 'Secondary platforms', 'Estimated impact'],
  rows: [
    ['Restaurants', 'TripAdvisor, Yelp, OpenTable', 'Google Maps, Yellow Pages, Foursquare', '★★★★★'],
    ['B2C Services', 'Yellow Pages, Yelp, Trustpilot', 'Google Maps, Mappy, local directories', '★★★★☆'],
    ['Healthcare', 'ZocDoc, Healthgrades, Google Maps', 'Professional association directories', '★★★★★'],
    ['Real Estate', 'Zillow, Realtor.com, Redfin', 'Local MLS, real estate portals', '★★★★☆'],
    ['B2B Services', 'LinkedIn, Google Maps, Industry directories', 'Chamber of Commerce, trade associations', '★★★☆☆'],
    ['Retail', 'Google Maps, Yelp, Yellow Pages', 'Apple Maps, local directories', '★★★★☆'],
  ],
};

// ============================================
// 11. AVIS CLIENTS DATA (#avis)
// ============================================
export const avisClientsData = {
  sectionId: 'avis',
  badge: 'Customer reviews',
  accentColor: 'rw-blue' as const,
  title: 'Why are reviews a major local SEO signal?',
  subtitle: 'Reviews directly influence your positioning in the local pack. Here is what Google and AI evaluate.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Volume and recency',
      description: 'Google favors businesses with recent and regular reviews. A constant flow of reviews signals a living activity.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Average rating',
      description: 'Rating influences CTR in the local pack. Between two results, users click on the one with 4.7 stars rather than 3.9.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Response to reviews',
      description: 'Responding to reviews (positive and negative) sends an engagement signal. Google takes this into account. So do AI.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Keywords in reviews',
      description: 'Terms used by your customers in their reviews strengthen your topical relevance. "Excellent fast plumber" helps rank on these queries.',
    },
  ],
};

// ============================================
// 12. KPIs LOCAUX DATA (#mesure)
// ============================================
export const kpisLocauxData = {
  sectionId: 'mesure',
  badge: 'Measurement',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'How do we measure your local search optimization?',
  subtitle: 'Specific local SEO KPIs to track your progress and adjust strategy.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/local/kpi-pack-local.webp',
      alt: 'Visibility in Google local pack',
      title: 'Local pack visibility',
      desc: 'Average position in the local pack (top 3) on your target keywords.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/local/kpi-impressions-gbp.webp',
      alt: 'Google Business Profile impressions',
      title: 'GBP impressions',
      desc: 'Number of times your listing appears in searches and on Maps.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/local/kpi-actions-gbp.webp',
      alt: 'Actions from Google Business Profile',
      title: 'Actions from GBP',
      desc: 'Calls, directions, site visits from your Google Business listing.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/local/kpi-avis.webp',
      alt: 'Customer review rating and volume',
      title: 'Rating and review volume',
      desc: 'Evolution of your average rating and number of reviews on key platforms.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/local/kpi-trafic-local.webp',
      alt: 'Local organic traffic',
      title: 'Local organic traffic',
      desc: 'Visitors from geolocalized queries on your website.',
    },
    {
      id: 6,
      // image: '/images/pages/agence-geo-seo/local/kpi-presence-ia.webp',
      alt: 'Presence in local AI responses',
      title: 'Local AI presence',
      desc: 'Your business recommended by ChatGPT/Perplexity on local queries.',
    },
  ] as FeatureItem[],
};

// ============================================
// 13. FORWHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is our local SEO agency for?',
  subtitle: 'Our local SEO agency supports any business with a defined geographic service area.',
  criteria: [
    { label: 'Physical stores', description: 'Boutiques, restaurants, salons, brick-and-mortar shops' },
    { label: 'Proximity services', description: 'Tradespeople, professionals, home services' },
    { label: 'Franchises and networks', description: 'Multi-location management with brand consistency' },
    { label: 'Healthcare professionals', description: 'Doctors, dentists, physios, clinics, labs' },
    { label: 'Real estate agencies', description: 'Visibility on local buy/rent searches' },
  ],
  ctaTitle: 'Ready to dominate your area?',
  ctaDescription: 'We analyze your current local presence and identify your opportunities. Free visibility audit.',
  ctaButtonText: 'Request a local audit',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 16. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: "Local SEO is not about gaming the system. It's about making sure your business shows up when people need you.",
  author: 'Mike Blumenthal',
  role: 'Local Search Expert',
};

// ============================================
// 17. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about local search optimization and local GEO',
  items: [
    {
      id: 'faq-1',
      question: 'How long to see results in local search optimization?',
      answer: 'Local SEO can produce results faster than national SEO. Count 2 to 4 months to see significant improvements in the local pack. Google Business Profile optimization has an almost immediate impact. Citations and local content take longer to produce their effects.',
    },
    {
      id: 'faq-2',
      question: 'Do I need multiple Google Business listings for multiple services?',
      answer: "No, unless you have multiple distinct physical addresses. One listing per establishment, with all your service categories. Creating fictitious listings is a violation of Google's guidelines that can result in deletion of your presence.",
    },
    {
      id: 'faq-3',
      question: 'How to handle negative reviews?',
      answer: 'Always respond, quickly and professionally. Acknowledge the problem, propose a solution, invite to continue privately. A well-handled response transforms a negative review into a demonstration of your customer service. Never ignore, never be aggressive.',
    },
    {
      id: 'faq-4',
      question: 'Does local search optimization work for B2B companies?',
      answer: 'Yes, but differently. Local B2B searches exist: "web agency London", "accountant downtown", "corporate lawyer Manchester". Our local SEO agency adapts the strategy: fewer general public reviews, more professional citations and local expertise content.',
    },
    {
      id: 'faq-5',
      question: 'What exactly is local GEO?',
      answer: 'Local GEO is optimization to be recommended by generative AI on local queries. "What is the best Italian restaurant in Nice?" asked to ChatGPT. AI relies on the same signals as Google (reviews, citations, authority) but adds the notion of "source reliability". Being well-positioned in local SEO also feeds your local GEO presence.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 18. CTA DATA
// ============================================
export const ctaData = {
  title: 'Your customers are searching',
  titleHighlight: 'near them',
  description: 'Local search optimization is no longer optional. Your competitors are already in the local pack, on Google Maps, in ChatGPT responses. And you?',
  secondaryDescription: 'First step: a free audit of your local presence. Our local SEO agency analyzes your Google Business listing, your citations, your reviews. And we show you where your opportunities are.',
  buttonText: 'Get my free local audit',
  checklistItems: [
    { id: '1', text: 'Free audit' },
    { id: '2', text: 'No commitment' },
    { id: '3', text: 'Opportunities identified' },
  ],
};
