/**
 * ============================================
 * DATA - Technical and Semantic SEO Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Technical and Semantic SEO Agency - Rankwell',
  description: 'Technical SEO agency expert in technical SEO optimization and semantic SEO. Core Web Vitals, architecture, structured data and topic clusters.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'Technical & Semantic SEO' },
  ] as BreadcrumbItem[],
  title: 'Technical and semantic optimization for your visibility',
  description: "A fast, well-structured site with relevant content. Sounds simple. Yet that's where most sites fail. Our technical SEO agency builds solid foundations.",
  ctaText: 'Request a diagnostic',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/seo-semantique-technique/hero.webp',
  imageAlt: 'Technical and Semantic SEO Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'Technical & Semantic SEO',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    "The best content in the world won't perform on a slow site. A technically perfect but meaningless site will never rank. The two dimensions are linked.",
    "At Rankwell, we reject the false dichotomy of \"technical vs content\". Technical SEO optimization and semantic SEO reinforce each other. Classic search engines and generative AI evaluate these criteria together.",
    'Discover how our <strong class="text-secondary dark:text-accent">business-centric</strong> approach to technical SEO and semantic SEO builds solid foundations for your visibility on Google and AI engines.',
  ],
  tocItems: [
    { id: 'approche', label: 'Scope of expertise', icon: 'ClipboardList' },
    { id: 'technique', label: 'Technical SEO', icon: 'Settings' },
    { id: 'semantique', label: 'Semantic SEO', icon: 'BookOpen' },
    { id: 'analyse', label: 'Errors and priorities', icon: 'TriangleAlert' },
    { id: 'process', label: 'Our method', icon: 'ListChecks' },
    { id: 'outils', label: 'Our tools', icon: 'Wrench' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'What our expertise covers',
  accentColor: 'rw-blue' as const,
  title: 'Technical SEO and semantic SEO combined',
  subtitle: 'A comprehensive technical SEO optimization approach for solid foundations on Google and AI engines.',
  items: [
    {
      id: 1,
      title: 'Core Web Vitals',
      description: "Optimized performance, interactivity, visual stability. Google's criteria that matter.",
      icon: 'Gauge',
    },
    {
      id: 2,
      title: 'Crawl-friendly architecture',
      description: 'Your important pages indexed first. Zero wasted crawl budget.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Structured data',
      description: 'Schema.org and JSON-LD for search engines and AI. Your content becomes citable.',
      icon: 'Code',
    },
    {
      id: 4,
      title: 'Semantic clusters',
      description: 'Your content organized into expertise territories. Search engines understand your authority.',
      icon: 'Blocks',
    },
  ] as RecapItem[],
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: "SEO is not about gaming the system anymore; it's about learning how to play by the rules.",
  author: 'Jordan Teicher',
  role: 'Content Strategist',
};

// ============================================
// 6. SEO TECHNIQUE DATA
// ============================================
export const seoTechniqueData = {
  sectionId: 'technique',
  badge: 'Technical SEO',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Technical SEO: what do search engines really see?',
  subtitle: 'Before judging your content, Google and AI must be able to read it. Technical SEO optimization ensures your pages are crawled, indexed and performant.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-performance.webp',
      alt: 'Performance and Core Web Vitals',
      title: 'Performance and Core Web Vitals',
      desc: "Loading time, interactivity, visual stability. Google's criteria for evaluating user experience.",
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-crawl.webp',
      alt: 'Page crawling and indexing',
      title: 'Crawling and indexing',
      desc: 'Are your important pages being crawled? Indexed? Is crawl budget being wasted on useless pages?',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-architecture.webp',
      alt: 'Site architecture and structure',
      title: 'Architecture and structure',
      desc: 'Your site tree, page depth, internal linking. A logical structure helps search engines.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-donnees-structurees.webp',
      alt: 'Schema.org structured data',
      title: 'Structured data',
      desc: 'Schema.org, JSON-LD. These tags help search engines and generative AI understand your content.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-securite.webp',
      alt: 'Web security and accessibility',
      title: 'Security and accessibility',
      desc: "HTTPS, responsive design, accessibility. The basics that aren't always in place.",
    },
  ] as FeatureItem[],
};

// ============================================
// 7. SEO SEMANTIQUE DATA
// ============================================
export const seoSemantiqueData = {
  sectionId: 'semantique',
  badge: 'Semantic SEO',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Semantic SEO: how do search engines understand your expertise?',
  subtitle: "Beyond technical SEO, there's meaning. Search engines no longer look for exact keywords. They seek to understand what you're about and whether you have authority.",
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-mots-cles.webp',
      alt: 'SEO keyword strategy',
      title: 'Keyword strategy',
      desc: 'Not a list of keywords to stuff in. A mapping of your target audience\'s search intents.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-architecture.webp',
      alt: 'Semantic architecture and clusters',
      title: 'Semantic architecture',
      desc: 'Your content organized into topic clusters. A pillar page, satellite pages, interlinking that strengthens the whole.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-onpage.webp',
      alt: 'On-page SEO optimization',
      title: 'On-page optimization',
      desc: 'Titles, meta descriptions, heading tags, content. Each page optimized for its main target.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-richesse.webp',
      alt: 'Semantic richness of content',
      title: 'Semantic richness',
      desc: 'Entities, related concepts, lexical field. Rich content that covers the topic in depth.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-geo.webp',
      alt: 'GEO optimization for AI',
      title: 'GEO optimization',
      desc: 'Generative AI loves well-sourced, structured content with citable data.',
    },
  ] as FeatureItem[],
};

// ============================================
// 8. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Key point',
  text: 'Core Web Vitals are an official Google ranking factor. Generative AI also favors fast, well-structured sites when selecting their sources.',
};

// ============================================
// 9. TABLEAU ERREURS DATA
// ============================================
export const tableauErreursData = {
  sectionId: 'analyse',
  badge: 'Analysis',
  accentColor: 'rw-blue' as const,
  title: 'Technical SEO errors: impact and correction priority',
  subtitle: 'Not all technical SEO optimization errors are equal. Here is how we prioritize them.',
  columns: ['Technical issue', 'SEO Impact', 'GEO Impact', 'Priority', 'Fix timeframe'],
  rows: [
    ['Non-indexable pages (noindex, robots.txt)', 'Blocking', 'Blocking', 'Critical', 'Immediate'],
    ['Loading time > 3s (LCP)', 'High', 'Medium', 'High', '1-2 weeks'],
    ['Internal duplicate content', 'High', 'Medium', 'High', '1-2 weeks'],
    ['Missing structured data', 'Medium', 'High', 'High', '1 week'],
    ['404 errors on traffic pages', 'High', 'Low', 'High', 'Immediate'],
    ['Redirect chains (3+)', 'Medium', 'Low', 'Medium', '2-4 weeks'],
    ['Duplicate title/meta tags', 'Medium', 'Low', 'Medium', '2-4 weeks'],
    ['Images without alt text', 'Low', 'Medium', 'Low', 'Progressive'],
  ],
};

// ============================================
// 10. PROCESS METHODE DATA
// ============================================
export const processMethodeData = {
  sectionId: 'process',
  badge: 'Method',
  accentColor: 'rw-blue' as const,
  title: 'How do we concretely proceed?',
  subtitle: 'Our method follows 4 steps. From initial audit to continuous monitoring. Each phase has concrete deliverables.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Complete audit',
      description: 'We scrutinize your site. Technical, semantic, competition. We identify quick wins and major projects.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Prioritization',
      description: "Not everything can be done at once. We rank actions by impact and feasibility. You know what really matters.",
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Implementation',
      description: 'Depending on your resources: we do it, we guide your teams, or we work alongside your devs. Total flexibility.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Monitoring and iteration',
      description: "We measure the impact of optimizations. What works, we capitalize on. What's stuck, we adjust.",
    },
  ],
};

// ============================================
// 11. OUTILS DATA
// ============================================
export const outilsData = {
  sectionId: 'outils',
  badge: 'Our tools',
  accentColor: 'rw-blue' as const,
  title: 'The best tools on the market',
  subtitle: 'We use the best tools on the market, combined with our Rankwell One platform to centralize and manage.',
  logos: [
    { id: 1, name: 'Screaming Frog', /* image: '/images/logos/screaming-frog.svg', */ alt: 'Screaming Frog Logo' },
    { id: 2, name: 'Sitebulb', /* image: '/images/logos/sitebulb.svg', */ alt: 'Sitebulb Logo' },
    { id: 3, name: 'Semrush', /* image: '/images/logos/semrush.svg', */ alt: 'Semrush Logo' },
    { id: 4, name: 'Ahrefs', /* image: '/images/logos/ahrefs.svg', */ alt: 'Ahrefs Logo' },
    { id: 5, name: 'Google Search Console', /* image: '/images/logos/google-search-console.svg', */ alt: 'Google Search Console Logo' },
    { id: 6, name: 'PageSpeed Insights', /* image: '/images/logos/pagespeed-insights.svg', */ alt: 'PageSpeed Insights Logo' },
    { id: 7, name: 'Rankwell One', /* image: '/images/logos/rankwell-one.svg', */ alt: 'Rankwell One Logo' },
  ],
  categories: [
    { category: 'Technical audits', tools: ['Screaming Frog', 'Sitebulb', 'Lumar', '...'], icon: 'Search' },
    { category: 'Semantic analysis', tools: ['Semrush', 'Ahrefs', 'Surfer SEO', '...'], icon: 'BookOpen' },
    { category: 'First-party data', tools: ['Google Search Console', 'Google Analytics 4', 'PageSpeed', '...'], icon: 'Database' },
    { category: 'Management & reporting', tools: ['Rankwell One', 'Looker Studio', 'Google Drive', '...'], icon: 'ChartBar' },
  ],
};

// ============================================
// 12. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is this expertise for?',
  subtitle: 'This expertise is for companies that want solid foundations. No lasting visibility without mastered technical and semantic SEO.',
  criteria: [
    { label: 'Stagnating sites', description: 'Despite quality content, your traffic is not taking off' },
    { label: 'Upcoming redesigns', description: 'You want to start on good SEO and GEO foundations' },
    { label: 'E-commerce sites', description: 'Thousands of pages to structure efficiently' },
    { label: 'Stuck companies', description: 'You want to understand why "it\'s not working"' },
  ],
  ctaTitle: 'Ready to build solid foundations?',
  ctaDescription: 'A technical and semantic diagnostic is the starting point of any serious strategy.',
  ctaButtonText: 'Request a diagnostic',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 13. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Watch out',
  text: "A technical audit without semantic vision only solves half the problem. Classic search engines and AI evaluate your site's overall coherence: speed, structure AND content relevance.",
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEO strategy is to build a brand that people search for by name.',
  author: 'Neil Patel',
  role: 'Digital Marketing Expert',
};

// ============================================
// 15. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about technical SEO and semantic SEO',
  items: [
    {
      id: 'faq-1',
      question: 'What is the difference between technical SEO and semantic SEO?',
      answer: 'Technical SEO concerns technical site optimization: speed, indexing, structure, Core Web Vitals. Semantic SEO concerns meaning: keywords, topic clusters, on-page optimization. Both are complementary and inseparable for an effective strategy.',
    },
    {
      id: 'faq-2',
      question: 'How long until we see results?',
      answer: 'Technical corrections often have a quick impact (a few weeks). Semantic optimizations take longer (3-6 months). We give you visibility on both timeframes from the start.',
    },
    {
      id: 'faq-3',
      question: 'Do you work with our technical teams?',
      answer: "Yes, it's even our preferred mode. We make the recommendations, we support your devs for implementation, we validate. Otherwise, we can also implement directly depending on your access.",
    },
    {
      id: 'faq-4',
      question: 'Is structured data really important for AI?',
      answer: 'Yes. Generative AI like ChatGPT favors structured and sourced content. Schema.org structured data allows them to understand and cite your content more easily.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Your site deserves',
  titleHighlight: 'solid foundations',
  description: 'A technical SEO and semantic SEO diagnostic is the starting point of any serious strategy. Our technical SEO agency analyzes what search engines see and understand about your site.',
  secondaryDescription: 'First step: a complete technical SEO optimization diagnostic. We identify what is blocking, what can be improved, and in what order. No commitment.',
  buttonText: 'Request a diagnostic',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Complete diagnostic' },
    { id: '3', text: 'Clear prioritization' },
  ],
};
