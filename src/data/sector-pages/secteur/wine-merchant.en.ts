/**
 * DATA: Sector Page Wine Merchants (EN)
 * Route: /en/geo-seo-agency/sectors/wine-merchant
 *
 * Adapted for US / UK / UAE markets
 * Sectoral constraint: alcohol advertising regulations (TTB in US, ASA/Portman Group in UK, federal law in UAE)
 * Keyword data: Ahrefs Keywords Explorer, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'wine-merchant',
    title: 'GEO & SEO Agency for Wine Merchants - Rankwell',
    description:
      'Rankwell helps wine shops and wine merchants boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the wine retail industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Wine Merchants' },
    ],
    title: 'GEO & SEO for Wine Merchants: Google & AI Engine Visibility',
    subtitle:
      'Your customers search for wine shops on Google Maps and in ChatGPT responses. Our experts design GEO & SEO strategies adapted to alcohol advertising regulations and the wine retail market.',
    ctaText: 'Request a GEO & SEO audit for your wine shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for wine merchants',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of wine retail queries include a location or "near me"</strong>. Whether wine store (US), wine merchant (UK), or wine shop (Dubai), this is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the Google Local Pack and AI recommendations drive foot traffic.',
    constraints:
      'Alcohol advertising is regulated in every market: <strong class="text-secondary dark:text-accent">TTB and state liquor boards</strong> (US), <strong class="text-secondary dark:text-accent">ASA and Portman Group</strong> (UK), licensed sale with heavy restrictions (UAE). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these rules to produce compliant, high-ranking content.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vivino, Wine-Searcher, Wine.com</strong> (US), <strong class="text-secondary dark:text-accent">Majestic Wine, Berry Bros. & Rudd</strong> (UK), and <strong class="text-secondary dark:text-accent">African + Eastern, MMI</strong> (UAE) dominate high-intent wine queries. Without a GEO & SEO strategy, an independent wine merchant stays invisible against these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s Local Pack.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'Learn more about local SEO',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future customers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'wine store near me', volume: 165000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'wine shop near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best wine store near me', volume: 18100, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'buy wine online', volume: 14800, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'natural wine shop', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'wine delivery near me', volume: 8100, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'how to start a wine collection', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'wine merchant near me', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'wine shop near me', volume: 22200, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'buy wine online UK', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'best wine merchants', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'natural wine London', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'wine delivery UK', volume: 4400, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'how to choose wine for dinner', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'wine shop dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'buy wine Dubai', volume: 3600, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'wine store Abu Dhabi', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'wine delivery Dubai', volume: 2400, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'best wine shop UAE', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'licensed liquor store Dubai', volume: 880, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "wine store near me", "wine merchant near me", or "wine shop dubai" represent customers actively looking for a place to buy wine. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your shop does not appear there, those customers walk into a competitor or order online.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for wine merchants',
    subtitle: 'A structured SEO approach in 8 steps, adapted to alcohol advertising regulations and the wine retail market across the US, UK, and UAE.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation. Focus on wine catalog structure and product page organization.',
        items: [
          'Page structure by region, grape variety, and appellation',
          'Schema.org LiquorStore and Product markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of the wine catalog',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the wine shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the shop\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries about wine',
        ],
      },
      {
        title: 'Market study & wine keyword research',
        subtitle: 'Mapping of search queries by wine type, region, and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Region + city combinations with low competition',
          'Analysis of queries asked to AI engines about wine',
          'Real search volumes by wine category and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the customer journey, from wine discovery to tasting reservation or online purchase.',
        items: [
          'Wine region page > grape variety page > product page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Wine content strategy',
        subtitle: 'Creation of educational content demonstrating the merchant\'s expertise (food and wine pairings, region guides, tasting notes), written to be citable by LLMs and compliant with alcohol advertising rules.',
        items: [
          'Region guides and grape variety profiles answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable data',
          'Compliance with alcohol advertising rules (TTB in US, ASA/Portman Group in UK, UAE licensing)',
        ],
      },
      {
        title: 'Authority & wine link building',
        subtitle: 'Authority development through wine directories, specialized publications, and partnerships with wineries and importers.',
        items: [
          'Wine-Searcher, Vivino, Decanter, Wine Enthusiast (US/International)',
          'Berry Bros. & Rudd, Jancis Robinson, The Drinks Business (UK)',
          'Wine press publications and winery partnership features',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the wine shop\'s Google Business Profile to capture local "wine shop + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Liquor Store + secondary categories (Wine Store, Beverage Store)',
          'Client review management and collection strategy',
          'Photos of the shop, wine selection, and tasting events',
          'Consistent NAP citations across wine directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by wine category, and store visits generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by wine type and region',
          'GEO Score: visibility in AI engines',
          'Store visits and conversions (click-to-call, directions)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your wine shop team, web agency, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your wine shop\'s website: catalog page architecture by region and grape variety, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your wine shop in ChatGPT, Perplexity, and Gemini on your target wine queries. Benchmark against 3 to 5 competing shops and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LiquorStore, Product, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your wine catalog structure. Delivered with a CMS integration guide (WordPress, Shopify, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of wine region pages, grape variety guides, food and wine pairing articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, compliant with alcohol advertising regulations.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from wine directories (Wine-Searcher, Vivino, Decanter), wine blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your wine shop.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by wine category and local keyword, organic traffic by wine region and type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your wine shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which wine shop do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your shop does not appear in any cited source, it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which wine shop do you recommend in New York?": the LLM does not cite a specific wine merchant by name. It provides a list of selection criteria (wine region specialization, tasting events, staff expertise, customer reviews) and redirects to Google Maps and wine directories. Wine shops absent from the web remain invisible.</p><h4>Informational queries</h4><p>"How to choose a good wine merchant?" or "difference between a wine shop and a liquor store": the LLM generates a structured guide with 5 to 7 criteria, without citing any shop or external source. The merchant that publishes this type of educational content on its website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does wine cost at a wine shop?": the LLM gives ranges by tier (USD 8 to USD 15 for everyday wines, USD 15 to USD 40 for mid-range, above USD 40 for premium selections). In the UK, GBP 6 to GBP 12 entry-level, GBP 12 to GBP 30 mid-range. Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "wine shop near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Wine shops with a complete Google Business Profile (category, recent reviews, photos of the shop and wine selection) appear directly in the AI response with rating, address, and opening hours.</p>',
    structuredData:
      '<p>For wine merchants, the recommended schema.org types are: <code>LiquorStore</code> (primary type), <code>Product</code> (for wine product pages), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>LiquorStore</code> markup allows Google and LLMs to precisely identify the shop\'s specialization, location, and customer reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your wine shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of wine content), Legitimacy & Citability (external trust signals: reviews, wine press mentions), and Factual Density (richness of structured data and named entities: appellations, grape varieties, wine regions).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for wine merchants',
    items: [
      {
        question: 'How much does SEO cost for a wine shop?',
        answer:
          'The SEO budget for a wine shop depends on the geographic scope and whether the business sells online. At Rankwell, SEO engagements for wine merchants start from USD 1,500/month (or GBP 1,200/month) for local SEO in a single city, and can reach USD 4,000-6,000/month for a multi-location merchant or a shop with a significant e-commerce operation.',
      },
      {
        question: 'How long does it take to see results from wine shop SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "natural wine shop Brooklyn" or "wine merchant Edinburgh") are faster to rank for than nationally competitive terms like "buy wine online". Rankwell provides a realistic timeline based on the initial competitive analysis of your catchment area.',
      },
      {
        question: 'Is SEO compatible with alcohol advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with alcohol advertising rules, provided certain limits are respected. In the US, the TTB (Alcohol and Tobacco Tax and Trade Bureau) and state-level liquor control boards regulate advertising language and prohibit certain promotional claims. In the UK, the ASA and Portman Group enforce strict advertising codes for alcohol marketing. In the UAE, alcohol sale and advertising require a license and are restricted to authorized retailers. Rankwell understands these constraints and produces compliant content: educational wine guides, region profiles, and food pairing articles are effective and fully legal.',
      },
      {
        question: 'Does a wine shop need a blog to improve rankings?',
        answer:
          'A wine blog is a powerful lever when well executed. Articles should answer real questions (inspired by Google People Also Ask): "what wine goes with steak?", "difference between Pinot Noir and Merlot". These articles demonstrate the merchant\'s expertise and are written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a wine merchant appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a wine shop must accumulate web authority signals: presence on wine directories (Wine-Searcher, Vivino, Decanter), mentions in specialized press, an optimized Google Business Profile, and rich factual content on its website (appellation guides, grape variety profiles, tasting event listings). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a wine merchant?',
        answer:
          'Local SEO targets "wine shop + city" and "wine store near me" queries and relies on Google Business Profile, customer reviews, and local directory citations. National SEO targets queries like "buy wine online" or "best wines under 20 dollars" and requires a structured e-commerce catalog with optimized product pages. Rankwell combines both approaches based on whether the merchant sells exclusively in-store or also operates an online shop.',
      },
      {
        question: 'Are Vivino, Wine-Searcher, and wine platforms enough to be visible?',
        answer:
          'Wine platforms like Vivino and Wine-Searcher are useful for initial visibility, but they create dependency: the merchant is just one profile among thousands, with no control over branding or margins. A well-optimized website allows the shop to control its image, convert directly (tasting reservations, online orders), and build lasting authority that platforms cannot revoke. Rankwell helps wine merchants build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your wine shop visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Bar', href: '/en/geo-seo-agency/sectors/bar' },
        { label: 'SEO Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
        { label: 'SEO Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'SEO E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
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
      { label: 'Bar', href: '/en/geo-seo-agency/sectors/bar' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/florist' },
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      { label: 'Food Truck', href: '/en/geo-seo-agency/sectors/food-truck' },
    ],
  },

  // Schema.org primary type
  schemaType: 'LiquorStore',
};

export default data;
