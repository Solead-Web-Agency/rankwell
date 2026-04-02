/**
 * DATA: Sector Page Movers (EN)
 * Route: /en/geo-seo-agency/sectors/demenageur
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (Loopex Digital, MarketKeep, RemovalsPal), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'mover',
    title: 'GEO & SEO Agency for Movers - Rankwell',
    description:
      'Rankwell helps moving companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the moving industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Movers' },
    ],
    title: 'GEO & SEO for Movers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients compare quotes online and follow Google or ChatGPT recommendations before booking a move. Our experts design GEO & SEO strategies tailored to the constraints of the moving industry.',
    ctaText: 'Request a GEO & SEO audit for your moving company',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for movers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of moving searches are triggered by an immediate need</strong>. The prospect compares 3 to 5 quotes within 48 hours, and the decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      'Moving is a <strong class="text-secondary dark:text-accent">trust-sensitive service</strong> where licensing matters: USDOT registration (US), BAR membership (UK), DED trade license (UAE). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must integrate these trust signals into every page and structured data.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, Yelp, Moving.com</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, Bark</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket, Bayut</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a moving company stays invisible against these aggregators.',
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
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'moving company near me', volume: 23000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'long distance movers', volume: 49500, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'local movers near me', volume: 74000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'full service moving company', volume: 4900, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'cross country movers', volume: 22200, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'moving company cost', volume: 9900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'cheap moving companies near me', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'removal companies near me', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'removals near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'man and van near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'house removals', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'moving companies near me', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'long distance movers', volume: 390, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'removal company london', volume: 1900, intent: 'locale', difficulty: 'élevée' },
      ],
      uae: [
        { keyword: 'movers in dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'packers and movers dubai', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'moving company dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best movers in dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'movers abu dhabi', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'relocation companies dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'international movers UAE', volume: 880, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "moving company near me", "removal companies near me", or "movers in Dubai" represent potential clients actively looking for a mover. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your company does not appear there, those clients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for moving companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the operational constraints of the moving industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of service and coverage area pages.',
        items: [
          'Page structure by service type (local, long distance, international, commercial)',
          'Schema.org MovingCompany markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of geographic landing pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the company\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the company\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density (pricing grids, certifications)',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & moving keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service type + city combinations with low competition',
          'Analysis of queries asked to AI engines ("best movers in Dallas?")',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the prospect journey: from service page to quote request.',
        items: [
          'Service type page > coverage area page > quote page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Moving industry content strategy',
        subtitle: 'Creation of practical content demonstrating the company\'s expertise: pricing guides, checklists, regulatory information, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask (costs, timelines, insurance)',
          'Self-sufficient factual sentences with data by volume and distance',
          'Content on licensing requirements (USDOT, BAR, DED trade license)',
        ],
      },
      {
        title: 'Authority & moving industry link building',
        subtitle: 'Authority development through qualified directories and specialized publications.',
        items: [
          'Angi, Yelp, Moving.com, Better Business Bureau (US)',
          'Checkatrade, Bark, British Association of Removers (UK)',
          'ServiceMarket, Bayut, Dubai Yellow Pages (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the company\'s Google Business Profile to capture local "mover + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Moving Company + secondary categories (storage, packing)',
          'Client review management and post-move collection strategy',
          'Photos of fleet, crew, and completed moves',
          'Consistent NAP citations across moving directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service type and coverage area',
          'GEO Score: visibility in AI engines',
          'Quote requests and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your moving company\'s website: page architecture by service type and coverage area, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your company in ChatGPT, Perplexity, and Gemini on your target moving queries. Benchmark against 3 to 5 competing movers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'MovingCompany, Service, and FAQPage markup ready to integrate, with your coverage areas and service types. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service type pages (local moves, long distance, international) and city-specific landing pages, moving preparation guides, and quote FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from moving directories (Angi, Yelp, Checkatrade, ServiceMarket), home improvement blogs, and local press. Tracking of links obtained and Domain Rating progression of your company.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by coverage area and service type, organic traffic, quote requests generated, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your moving company in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which mover do you recommend in Dallas?", the LLM compiles information from across the web to formulate its response. If your company does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which moving company do you recommend in Chicago?": the LLM does not recommend a specific mover. It provides a list of selection criteria (USDOT registration, insurance coverage, customer reviews, written estimates) and redirects to directories: Angi, Yelp, Moving.com, and the Better Business Bureau. National brands are sometimes mentioned as examples, without endorsement.</p><h4>Pricing queries</h4><p>"How much does it cost to move a 3-bedroom house from New York to Los Angeles?": the LLM generates detailed pricing ranges by service level: budget (USD 2,500 to USD 4,500), standard (USD 4,500 to USD 7,000), full service (USD 7,000 to USD 12,000). Factors such as distance, volume, season, and special items are systematically listed. Sites publishing precise, up-to-date pricing grids have the highest chance of being extracted as a source.</p><h4>Comparison queries</h4><p>"Professional movers vs renting a van": the LLM structures a detailed comparison with costs, risks, and advantages of each option. Content that formalizes this comparison with real data is highly citable.</p><h4>Local and Maps queries</h4><p>On "movers near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Companies with a complete Google Business Profile (category Moving Company, recent reviews, fleet photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For moving companies, the recommended schema.org types are: <code>MovingCompany</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>MovingCompany</code> markup allows Google and LLMs to precisely identify the coverage area, service types, and client reviews of the company.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your moving company\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for movers',
    items: [
      {
        question: 'How much does SEO cost for a moving company?',
        answer:
          'The SEO budget for a moving company depends on the geographic coverage and the number of service types to rank. At Rankwell, SEO engagements for movers start from USD 2,000/month (or GBP 1,600/month) for a single metro area, and can reach USD 5,000-7,000/month for multi-state or multi-city coverage with several service categories (local, long distance, international, commercial).',
      },
      {
        question: 'How long does it take to see results from moving company SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "movers in Scottsdale" or "removals company Bristol") are faster to rank for than nationally competitive terms like "long distance movers". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'What licensing requirements affect SEO for movers?',
        answer:
          'In the US, interstate movers must hold USDOT registration and comply with FMCSA regulations, while intrastate rules vary by state. In the UK, British Association of Removers (BAR) membership signals credibility to both clients and search engines. In the UAE, trade licenses from the Department of Economic Development are required. Rankwell ensures these trust signals are prominently displayed on the website and structured data to strengthen E-E-A-T.',
      },
      {
        question: 'Does a moving company need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real questions prospects have: "how much does a long distance move cost", "moving checklist", "how to choose a mover". Rankwell recommends 2-4 articles per month targeting long-tail informational queries, written to be citable by AI engines.',
      },
      {
        question: 'How can a mover appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a moving company must accumulate web authority signals: presence on specialized directories (Angi, Yelp, Checkatrade), detailed and recent Google reviews, an optimized Google Business Profile, precise pricing data, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a mover?',
        answer:
          'Local SEO targets "mover + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best long distance moving companies", "cross country movers") and requires high-authority educational content. Most movers benefit from combining both. Rankwell adapts the strategy based on the company\'s geographic footprint.',
      },
      {
        question: 'Are moving directories and aggregators enough to be visible?',
        answer:
          'Directories like Angi, Moving.com, or Checkatrade are useful for initial lead generation, but they create dependency: the company is just one profile among hundreds, with no control over its image or acquisition costs. A well-optimized website allows the company to convert directly, build lasting authority, and appear in AI responses. Rankwell helps movers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your moving company visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
        { label: 'SEO Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/creation-site' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Wix', href: '/en/geo-seo-agency/cms/wix' },
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
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notaire' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/garage' },
      { label: 'Property Manager', href: '/en/geo-seo-agency/sectors/syndic' },
      { label: 'Property Inspector', href: '/en/geo-seo-agency/sectors/diagnostiqueur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'MovingCompany',
};

export default data;
