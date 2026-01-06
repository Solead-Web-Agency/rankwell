/**
 * ============================================
 * DATA - GEO & SEO Main Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'SEO & GEO & SEO Agency - Business-Oriented - Rankwell',
  description: 'Expert SEO agency in organic search and GEO. Our SEO experts boost your visibility on Google and AI engines. Guaranteed measurable results.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'SEO Agency' },
  ] as BreadcrumbItem[],
  title: 'SEO and GEO Agency to dominate Google and AI',
  description: 'Organic search is no longer limited to Google. ChatGPT, Perplexity, Gemini cite sources and recommend brands. Our GEO SEO agency builds your visibility on all fronts.',
  ctaText: 'Request an audit',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/hero.webp',
  imageAlt: 'Rankwell SEO and GEO Agency',
  showTrustIndicator: true,
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'Expert SEO Agency',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    '<strong class="text-secondary dark:text-accent">GEO</strong> stands for Generative Engine Optimization. <strong class="text-secondary dark:text-accent">SEO</strong>, you know. Organic search targets classic result pages. GEO targets AI-generated responses.',
    'The levers largely overlap. Content that has authority for Google has authority for ChatGPT. Our SEO experts master both. A clean technical structure helps crawlers as well as LLMs. A coherent semantic mesh strengthens expertise in the eyes of all search engines.',
    'Discover how our organic search agency and its unified <strong class="text-secondary dark:text-accent">business-centric</strong> approach make you essential, regardless of the path your future customer takes to find you.',
  ],
  tocItems: [
    { id: 'pourquoi-geo', label: 'Understanding GEO', icon: 'Bot' },
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'methode', label: 'Our method', icon: 'ListChecks' },
    { id: 'comparaison', label: 'SEO vs GEO', icon: 'GitCompare' },
    { id: 'services', label: 'Our expertise', icon: 'Briefcase' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'resultats', label: 'Client results', icon: 'TrendingUp' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. WHYGEO DATA
// ============================================
export const whyGeoData = {
  sectionId: 'pourquoi-geo',
  badge: 'Understanding GEO',
  accentColor: 'rw-blue' as const,
  title: 'Why GEO is a game changer',
  subtitle: "Generative AI doesn't just index. They read, synthesize and recommend. Being in these responses means capturing a prospect at the exact moment they're searching.",
  blocks: [
    {
      title: 'A new way to search',
      text: 'When a user asks "which SEO agency to choose in Paris?", ChatGPT doesn\'t return 10 blue links. It gives an answer. With names. No click to earn, no position to defend.',
    },
    {
      title: 'What this changes',
      text: 'Direct recommendation. AIs cite the sources they deem reliable and relevant.',
    },
  ],
  constat: {
    icon: 'CircleAlert',
    title: 'The reality',
    text: 'ChatGPT, Perplexity, Gemini... These tools only cite <strong>3 to 5 sources</strong> per response. If you\'re not among these sources, you don\'t exist for the user. It\'s binary: recommended or invisible.',
  },
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'AI won\'t replace search, it will transform it. The companies that understand this shift early will dominate their markets.',
  author: 'Satya Nadella',
  role: 'CEO Microsoft',
};

// ============================================
// 6. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Our approach',
  accentColor: 'rw-blue' as const,
  title: 'What sets our GEO & SEO expertise apart',
  subtitle: 'A unified and measurable approach to maximize your visibility on Google and AI engines.',
  items: [
    {
      id: 1,
      title: 'SEO + GEO together',
      description: 'No silos. A coherent strategy that optimizes for Google AND AI engines at the same time.',
      icon: 'Layers',
    },
    {
      id: 2,
      title: 'Total transparency',
      description: 'No black box. You know exactly what we do, why, and what results it generates.',
      icon: 'Eye',
    },
    {
      id: 3,
      title: 'Long-term vision',
      description: 'No hacks or shortcuts. We build lasting authority that withstands updates.',
      icon: 'Clock',
    },
    {
      id: 4,
      title: 'Measurable results',
      description: 'No vanity metrics. We track the indicators that matter: qualified traffic, conversions, revenue generated.',
      icon: 'ChartBar',
    },
  ] as RecapItem[],
};

// ============================================
// 7. PROCESS DATA
// ============================================
export const processData = {
  sectionId: 'methode',
  badge: 'Our method',
  accentColor: 'rw-blue' as const,
  title: 'How do we build your GEO & SEO visibility?',
  subtitle: 'Our approach follows 5 key steps. Each reinforces the others. The goal: make you the reference source on your topics.',
  steps: [
    { id: 'step-1', stepNumber: '01', title: 'Map', description: 'Your topics, competitors and customer questions' },
    { id: 'step-2', stepNumber: '02', title: 'Structure', description: 'Topic clusters and internal linking' },
    { id: 'step-3', stepNumber: '03', title: 'Produce', description: 'Valuable content that deserves to be cited' },
    { id: 'step-4', stepNumber: '04', title: 'Build', description: 'Quality and contextual link building' },
    { id: 'step-5', stepNumber: '05', title: 'Measure', description: 'Continuous monitoring and adjustments' },
  ],
};

// ============================================
// 8. TABLEAU COMPARAISON DATA
// ============================================
export const tableauComparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparison',
  title: 'Ranking signals: what Google and AI evaluate',
  subtitle: 'The criteria differ. This table helps you prioritize your efforts.',
  columns: ['Signal', 'Google Impact', 'AI Impact', 'Your priority'],
  rows: [
    ['Backlinks quantity', 'High', 'Medium', 'Necessary but insufficient alone'],
    ['Media/study citations', 'Medium', 'Very High', 'Key to being cited by AI'],
    ['Structured data (Schema)', 'Medium', 'High', 'FAQ, HowTo, Organization minimum'],
    ['Identified author (E-E-A-T)', 'High', 'Very High', 'Author pages with credentials'],
    ['Formatted direct answers', 'Medium', 'Very High', 'Definitions 40-60 words, numbered lists'],
    ['Content freshness', 'Medium', 'High', 'Visible dates, regular updates'],
  ],
};

// ============================================
// 9. SERVICES DATA
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Our expertise',
  accentColor: 'rw-blue' as const,
  title: 'Our GEO & SEO services',
  subtitle: 'Four complementary services to cover all your organic search needs.',
  items: [
    {
      id: 1,
      title: 'Complete SEO audit',
      description: 'Technical, semantic and competitive analysis. We identify what\'s holding back your visibility and what can accelerate it.',
      href: '/en/geo-seo-agency/audit',
      buttonText: 'Learn more',
      // image:
      imageAlt: 'Complete SEO audit',
    },
    {
      id: 2,
      title: 'Semantic & technical SEO',
      description: 'On-site optimization, content structure, technical performance. The foundations of lasting visibility.',
      href: '/en/geo-seo-agency/technical-semantic',
      buttonText: 'Learn more',
      // image:
      imageAlt: 'Semantic and technical SEO',
    },
    {
      id: 3,
      title: 'Link building',
      description: 'Link strategy designed to strengthen your authority. No spam, no shady networks. Real links that count.',
      href: '/en/geo-seo-agency/link-building',
      buttonText: 'Learn more',
      // image:
      imageAlt: 'Link Building Strategy',
    },
    {
      id: 4,
      title: 'Content creation',
      description: 'SEO and GEO-ready writing. Content that ranks and converts. Not filler.',
      href: '/en/geo-seo-agency/content-creation',
      buttonText: 'Learn more',
      // image:
      imageAlt: 'SEO Content Creation',
    },
  ],
};

// ============================================
// 10. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Is this service right for you?',
  subtitle: "No matter your industry or company size. What matters is your ambition and your vision of organic search.",
  criteria: [
    'You see SEO as an investment, not an expense',
    'You\'re looking for business results, not just traffic',
    'You\'re ready to build over 12-24 months',
    'You want a partner, not just a vendor',
  ],
  ctaTitle: 'Does this sound like you?',
  ctaDescription: "Whether you're e-commerce, SaaS, B2B, service or other — if you share this vision, we can build together.",
  ctaButtonText: "Let's discuss your project",
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 11. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'The challenge',
  text: 'A site optimized only for Google risks progressively losing opportunities. Generative engines evaluate authority and relevance differently. Without adaptation, you remain invisible for a growing share of searches.',
};

// ============================================
// 12. RESULTS DATA
// ============================================
export const resultsData = {
  sectionId: 'resultats',
  badge: 'Results',
  accentColor: 'rw-blue' as const,
  title: 'What results do we achieve for our clients?',
  subtitle: "We don't promise rankings. We deliver measurable business results.",
  items: [
    {
      id: 1,
      title: 'Qualified traffic',
      description: 'Increase in traffic that converts, not just visitors.',
      icon: 'Users',
    },
    {
      id: 2,
      title: 'AI presence',
      description: 'Citations in AI engine responses for your strategic queries.',
      icon: 'Bot',
    },
    {
      id: 3,
      title: 'Conversion',
      description: 'Improved conversion rates and reduced dependence on paid.',
      icon: 'Target',
    },
  ],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 14. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about our GEO & SEO approach',
  items: [
    {
      id: 'faq-1',
      question: 'What is the difference between GEO and SEO?',
      answer: 'The difference between GEO and SEO lies in the targeted engines. SEO aims for positioning in classic results (Google, Bing). GEO aims for presence in AI-generated responses (ChatGPT, Perplexity, Google SGE). The techniques largely overlap. That\'s why we treat them together in a unified strategy.',
    },
    {
      id: 'faq-2',
      question: 'How long until we see SEO and GEO results?',
      answer: 'The time to see SEO and GEO results varies depending on your starting point. Count on 3-6 months for the first significant effects. Consolidated results are generally observed at 12 months. We give you visibility on progress from the start. SEO is foundational work that builds lasting assets.',
    },
    {
      id: 'faq-3',
      question: 'Which markets do you work in?',
      answer: 'We work in France, Europe, Middle East and international markets. Our Dubai office allows us to address MENA markets with real local knowledge. We have experience in multilingual and multi-market SEO.',
    },
    {
      id: 'faq-4',
      question: 'How do you measure the success of a GEO & SEO strategy?',
      answer: "We measure success through business metrics: qualified traffic, conversions, generated revenue. Not vanity metrics. We define together the KPIs that matter to you. That's the business-centric approach.",
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Ready to dominate',
  titleHighlight: 'Google and AI',
  description: 'Free audit of your current visibility on Google and AI engines. We identify your opportunities and show you the path.',
  secondaryDescription: 'First step: a 30-minute call to understand your challenges. No commitment.',
  buttonText: 'Request an audit',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Complete diagnostic' },
    { id: '3', text: 'Actionable recommendations' },
  ],
};
