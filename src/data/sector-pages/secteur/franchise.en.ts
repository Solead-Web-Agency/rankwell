/**
 * DATA: Sector Page Franchises (EN)
 * Route: /en/geo-seo-agency/sectors/franchise
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'franchise',
    title: 'GEO & SEO Agency for Franchises - Rankwell',
    description:
      'Rankwell helps franchise networks boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the franchise industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Franchises' },
    ],
    title: 'GEO & SEO for Franchises: Google & AI Engine Visibility',
    subtitle:
      'Every franchise location must capture its own local audience while the brand scales nationally. Our experts design GEO & SEO strategies that align brand-level authority with local performance for each franchisee.',
    ctaText: 'Request a GEO & SEO audit for your franchise',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for franchises',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of franchise-related queries carry local or transactional intent</strong>. Prospective franchisees search "franchise opportunities near me" while end consumers search "brand + city". This dual search flow makes franchising a local SEO market at scale.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Franchise SEO demands brand consistency without content duplication</strong>. Each location needs unique local content while respecting brand guidelines. FTC disclosure rules (US), BFA codes (UK), and MOHRE regulations (UAE) add compliance layers an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Franchise Direct, Franchise Gator, BizBuySell</strong> (US), <strong class="text-secondary dark:text-accent">Point Franchise</strong> (UK), <strong class="text-secondary dark:text-accent">Gulf Franchise</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a franchise network stays buried behind these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its notoriety than on the factual structure of its content. A website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citability',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'franchise opportunities', volume: 49500, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'how to start a franchise', volume: 27100, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'most profitable franchises', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'low cost franchise opportunities', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'franchise business for sale', volume: 9900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how much does a franchise cost', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'franchise near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'franchise opportunities UK', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how to start a franchise UK', volume: 2900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'low cost franchises UK', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best franchises to own UK', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'franchise business for sale', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how much does it cost to franchise', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'franchise opportunities in Dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'franchise business UAE', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best franchise to open in Dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'low investment franchise Dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'franchise cost in UAE', volume: 590, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'food franchise Dubai', volume: 480, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "franchise opportunities", "how to start a franchise UK", or "franchise business UAE" represent entrepreneurs actively evaluating franchise investments. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your franchise network does not appear there, those candidates sign with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for franchise networks',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the multi-location constraints of the franchise industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the multi-site architecture: franchisor corporate site, individual franchisee pages, URL consistency, and content duplication across locations.',
        items: [
          'Detection of duplicate content across franchisee pages',
          'Schema.org LocalBusiness markup per location',
          'Performance and Core Web Vitals on each local template',
          'Crawl and indexation review of brand + city pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the network\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini). Does your brand get cited when a user asks "which franchise should I invest in?".',
        items: [
          'Analysis of the franchise network\'s informational universe',
          'Measurement of brand legitimacy and citability',
          'Evaluation of content factual density (FDD, key metrics, testimonials)',
          'Competitive benchmark on AI queries related to franchising',
        ],
      },
      {
        title: 'Market study & franchise keyword research',
        subtitle: 'Mapping of search queries from prospective franchisees ("franchise opportunities + sector") and end consumers ("brand + city") across US, UK, and UAE markets.',
        items: [
          'Franchisee queries: "franchise opportunities", "best franchises to own"',
          'Consumer queries: "brand + city", "near me"',
          'Analysis of queries asked to AI engines about franchise selection',
          'Search volumes by sector and geographic area per market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring to serve both audiences: prospective franchisees in their decision journey and end consumers in local search.',
        items: [
          'Brand page > sector page > franchisee recruitment page',
          'Unique local pages per location (no duplication)',
          'Title tag, meta description, and heading optimization per template',
          'Internal linking between national pages and local pages',
        ],
      },
      {
        title: 'Franchise content strategy',
        subtitle: 'Creation of content that positions the brand as a sector authority: guides for prospective franchisees, franchisee testimonials, and network performance data.',
        items: [
          'Guides "how to open a franchise in [sector]" targeting Google People Also Ask',
          'Transparent data sheets: investment, fees, average revenue, royalties',
          'Franchisee success stories with verifiable performance data',
          'Self-sufficient factual content written to be citable by LLMs',
        ],
      },
      {
        title: 'Authority & franchise link building',
        subtitle: 'Authority development through qualified franchise directories, industry publications, and events.',
        items: [
          'Franchise Direct, Franchise Gator, BizBuySell (US/International)',
          'Point Franchise, BFA, The Franchising Centre (UK)',
          'Press releases on new openings and network performance',
          'Partnerships with franchise associations (IFA, BFA, MENA Franchise Association)',
        ],
      },
      {
        title: 'Google Business Profile & multi-location local SEO',
        subtitle: 'Optimization of each Google Business Profile across the network to capture "brand + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary GBP category adapted to each franchisee\'s sector',
          'Centralized review management and collection strategy per location',
          'Photos, hours, attributes, and posts consistent with brand guidelines',
          'Consistent NAP citations across local and franchise directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Consolidated monthly reporting for the franchisor and individualized by franchisee: Google positions, organic traffic, AI visibility, and conversions.',
        items: [
          'Google positions by keyword (national + local per location)',
          'Organic traffic by franchisee and geographic area',
          'GEO Score: network visibility in AI engines',
          'Contact requests from prospects and end consumers per location',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your franchise development team, marketing department, or individual franchisees can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your franchise network\'s web architecture: location pages, content duplication between franchisees, loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your brand in ChatGPT, Perplexity, and Gemini on franchise-related queries. Benchmark against 3 to 5 competing networks and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Organization (franchisor), LocalBusiness (each location), FAQPage, and BreadcrumbList markup ready to integrate, with sector-specific sub-types per franchisee. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of concept pages, location pages, franchise guides ("how to open a franchise in [sector]"), franchisee testimonials, and FAQs. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from franchise directories (Franchise Direct, BizBuySell, Point Franchise), industry blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions per location page and keyword, organic traffic from prospective franchisees and consumers, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your franchise network in ChatGPT, Perplexity, and Google AI',
    intro:
      'When an entrepreneur asks ChatGPT "which franchise do you recommend to start a business?", the LLM compiles information from across the web to formulate its response. If your brand does not appear in any cited source, it is invisible in this new candidate acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which franchise do you recommend to open a business?": the LLM does not recommend a single brand. It structures its response by sector (fast food, fitness, home services, real estate) and cites 3 to 5 brands per category with investment ranges and initial franchise fees. Networks with publicly available and verifiable financial data are systematically cited.</p><h4>Informational queries</h4><p>"How to choose a good franchise?" or "what to look for in a franchise agreement?": the LLM generates a structured guide with 6 to 8 criteria (network strength, documented profitability, FDD content, initial investment, support, territory exclusivity). It does not cite a specific brand. Sites publishing comparative guides with up-to-date financial data have the highest chance of being extracted as a source.</p><h4>Pricing queries</h4><p>"How much does it cost to open a franchise?": the LLM provides detailed ranges by brand and sector (fast food: USD 250,000 to USD 1,500,000 total investment, service franchises: USD 50,000 to USD 150,000). Sites offering precise cost breakdowns (franchise fee, build-out, royalties) are prioritarily extracted.</p><h4>Comparison queries</h4><p>"Franchise vs independent business": the LLM structures a comparison with data points (5-year survival rate of 85% for franchisees compared to 50% for independents). Factual content and institutional sources (IFA, BFA) dominate the citations.</p>',
    structuredData:
      '<p>For franchise networks, the recommended schema.org types are: <code>Organization</code> (franchisor brand), <code>LocalBusiness</code> (each franchisee location), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>LocalBusiness</code> markup with sector-specific sub-types (e.g., <code>Restaurant</code> or <code>Store</code>) allows Google and LLMs to precisely identify each franchisee, its location, hours, and reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your franchise network\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of network content), Legitimacy & Citability (external trust signals, press mentions, franchise directories), and Factual Density (richness of structured data, key network metrics, and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for franchises',
    items: [
      {
        question: 'How much does SEO cost for a franchise network?',
        answer:
          'The SEO budget for a franchise network depends on the number of locations and the geographic scope targeted. At Rankwell, SEO engagements for franchise networks start from USD 2,500/month (or GBP 2,000/month) for a franchisor with 5 to 10 locations, and can reach USD 8,000-12,000/month for a national network with 50 or more outlets, including local page management and consolidated reporting.',
      },
      {
        question: 'How long does it take to see results from franchise SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Local franchisee pages in low-competition areas (mid-sized cities) rank faster than nationally competitive terms like "best franchise to own". Rankwell provides a realistic timeline based on the initial competitive analysis and the number of locations to optimize.',
      },
      {
        question: 'How do you prevent content duplication across franchisee pages?',
        answer:
          'Content duplication is the main SEO pitfall for franchise networks. Copying the same description across 50 local pages and only changing the city name penalizes the entire network. Rankwell creates local page templates with unique content blocks per franchisee (local reviews, team bios, location-specific services, events) while maintaining the brand consistency required by the franchisor. In the US, FTC Franchise Rule disclosures add a compliance layer; in the UK, the BFA Code of Ethics sets transparency standards.',
      },
      {
        question: 'Does a franchise network need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever for franchise networks, provided it targets both audiences. For prospective franchisees: guides on "how to open a franchise in [sector]", franchisee success stories, profitability analyses. For end consumers: local content per location. Rankwell recommends 2 to 4 articles per month at the franchisor level, complemented by quarterly local content per franchisee.',
      },
      {
        question: 'How can a franchise brand appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a franchise network must accumulate web authority signals: presence on franchise directories (Franchise Direct, Franchise Gator, Point Franchise), mentions in industry press, optimized Google Business Profiles per location, and transparent financial data (investment costs, average revenue, royalties). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a franchise?',
        answer:
          'National SEO positions the franchisor on generic queries ("franchise opportunities", "best franchise to own") to recruit new candidates. Local SEO positions each franchisee on "brand + city" queries to capture end consumers within their territory. Rankwell combines both approaches: a national content strategy for recruitment and optimized local pages per location.',
      },
      {
        question: 'Are franchise directories like Franchise Direct enough to be visible?',
        answer:
          'Franchise directories like Franchise Direct or BizBuySell are useful for initial visibility among prospective franchisees, but they create dependency: your brand is just one profile among hundreds. A well-optimized website allows the franchisor to control brand messaging, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps franchise networks build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your franchise network visible?',
    description:
      'Request a free GEO & SEO audit of your franchise network. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to your multi-location challenges.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'GEO Audit', href: '/en/glossary/audit-geo' },
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/florist' },
      { label: 'Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/bank' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Organization',
};

export default data;
