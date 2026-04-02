/**
 * DATA: Sector Page Body Shops (EN)
 * Route: /en/geo-seo-agency/sectors/body-shop
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: industry SEO sources (MarketKeep, SERPWARS, RankLocally UK), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'body-shop',
    title: 'GEO & SEO Agency for Body Shops - Rankwell',
    description:
      'Rankwell helps body shops boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the collision repair industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Body Shops' },
    ],
    title: 'GEO & SEO for Body Shops: Google & AI Engine Visibility',
    subtitle:
      'Your body shop must appear when a driver searches for collision repair, dent removal, or a paint job nearby. Our experts design GEO & SEO strategies tailored to the constraints of the auto body repair industry.',
    ctaText: 'Request a GEO & SEO audit for your body shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for body shops',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">"Body shop near me" generates over 368,000 monthly searches in the US alone</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens on mobile, often at the scene of an accident, across collision centers, bodywork shops, and paint repair facilities.',
    constraints:
      'Body shops operate in a market shaped by <strong class="text-secondary dark:text-accent">insurance referral networks</strong>. US DRPs (Direct Repair Programs) and UK BSI PAS 125 approved networks steer policyholders toward specific shops. Drivers often do not know they can choose their own repairer, making SEO content that educates them on this right a key acquisition lever.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Carwise, Yelp, Angi</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, WhoCanFixMyCar</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMycar</strong> (UAE) dominate high-intent queries with online estimates. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent body shop is invisible against these aggregators.',
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
        { keyword: 'body shop near me', volume: 368000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'auto body shop near me', volume: 246000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'collision repair near me', volume: 110000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'auto body repair', volume: 33100, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'paintless dent repair near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car paint shops near me', volume: 49500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does collision repair cost', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'car body repair near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'body shop near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car spray painting near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'dent repair near me', volume: 3600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'accident repair centre', volume: 2400, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'paintless dent removal', volume: 1800, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'car body repair cost UK', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'car body repair dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'body shop dubai', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'auto body shop dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car paint shop dubai', volume: 1900, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'dent repair dubai', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'collision repair UAE', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'car scratch repair dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "body shop near me", "collision repair near me", or "car body repair dubai" represent drivers actively looking for repair services. The majority contact one of the top 3 results in Google\'s Local Pack, or follow the recommendation of an AI engine. If your body shop does not appear there, those customers go to a competitor or follow their insurer\'s referral.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for body shops',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the competitive dynamics of the collision repair industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of your body shop website.',
        items: [
          'Page structure by service type (collision repair, paintless dent repair, paint refinishing)',
          'Schema.org AutoBodyShop markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your body shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the shop\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries related to collision repair',
        ],
      },
      {
        title: 'Market study & body shop keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition ("paintless dent repair Austin")',
          'Analysis of queries asked to AI engines about collision repair',
          'Real search volumes by repair type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the journey of a driver who needs bodywork done.',
        items: [
          'Service page (collision repair, painting, bumper repair) > estimate page > contact page',
          'Primary keyword + 3-5 secondary keywords per service page',
          'Title tag, meta description, and heading optimization with body shop vocabulary',
        ],
      },
      {
        title: 'Body shop content strategy',
        subtitle: 'Creation of educational content demonstrating the shop\'s expertise, written to be citable by LLMs.',
        items: [
          'Guides: "paintless dent repair vs traditional bodywork", "what to do after a car accident"',
          'Detailed pricing guides by type of damage and repair service',
          'FAQ on insurance claims, right to choose your own repairer, and DRP alternatives',
        ],
      },
      {
        title: 'Authority & body shop link building',
        subtitle: 'Authority development through qualified automotive directories and industry associations.',
        items: [
          'Carwise, BBB, Angi, Yelp (US)',
          'Checkatrade, WhoCanFixMyCar, Trustpilot (UK)',
          'Industry press, local publications, and institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the shop\'s Google Business Profile to capture local "body shop + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Auto Body Shop + secondary categories (Auto Painting, Dent Removal)',
          'Photos of the shop, spray booths, and before/after repair results',
          'Client review management and post-repair collection strategy',
          'Consistent NAP citations across automotive directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and estimate requests generated.',
        items: [
          'Google positions by body shop keyword',
          'Organic traffic by repair service type',
          'GEO Score: visibility in AI engines',
          'Estimate requests and conversions',
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
        description: 'Full diagnostic of your body shop\'s website: service page structure for collision repair, paintless dent repair, and painting, loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your body shop in ChatGPT, Perplexity, and Gemini on your target repair queries. Benchmark against 3 to 5 competing shops and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'AutoBodyShop, AutomotiveBusiness, FAQPage, and BreadcrumbList markup ready to integrate, covering your repair services and service areas. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (collision repair, bumper repair, paint refinishing), educational articles on insurance claims and repair options, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from automotive directories (Carwise, BBB, Angi, Checkatrade), auto industry blogs, and local press. Tracking of links obtained and Domain Rating progression of your shop.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by repair type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your body shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a driver asks ChatGPT "which body shop do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your shop does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which body shop do you recommend in Chicago for collision repair?": the LLM does not cite a specific shop. It provides a list of selection criteria (certifications, reviews, insurance partnerships, warranty on repairs) and redirects to Yelp, Google Maps, Carwise, and BBB. On ChatGPT, Search mode with a Maps card is activated to display the highest-rated Google Business Profiles.</p><h4>Informational queries</h4><p>"Paintless dent repair vs traditional bodywork: what is the difference?": the LLM generates a structured comparison with 5 to 7 criteria, without citing any shop. Body shops publishing this type of detailed, factual content on their website have the opportunity to be cited as a reference source.</p><h4>Pricing queries</h4><p>"How much does collision repair cost?": the LLM gives detailed pricing ranges (USD 500 to USD 5,000 depending on damage severity in the US, GBP 300 to GBP 3,000 in the UK). Sites providing precise, up-to-date pricing grids by damage type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "body shop near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Shops with a complete Google Business Profile (category Auto Body Shop, rating above 4 stars, photos of the facility and before/after results) appear directly in the AI response.</p>',
    structuredData:
      '<p>For body shops, the recommended schema.org types are: <code>AutoBodyShop</code> (primary type), <code>AutomotiveBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>AutoBodyShop</code> markup allows Google and LLMs to precisely identify the repair services offered, the location, and client reviews of the shop.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your body shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on repair services), Legitimacy & Citability (external trust signals, reviews, industry certifications), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for body shops',
    items: [
      {
        question: 'How much does SEO cost for a body shop?',
        answer:
          'The SEO budget for a body shop depends on the number of services offered and the geographic scope targeted. At Rankwell, SEO engagements for body shops start from USD 1,500/month (or GBP 1,200/month) for a single location and core services, and can reach USD 4,000-6,000/month for a multi-location shop competing in major metropolitan areas like Los Angeles, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from body shop SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "paintless dent repair Scottsdale" or "accident repair centre Leeds") are faster to rank for than highly competitive metro-wide terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Can SEO help a body shop compete against insurance referral networks?',
        answer:
          'Yes, and this is a central challenge for independent body shops. In the US, Direct Repair Programs (DRPs) steer policyholders toward network shops, but drivers have the legal right to choose their own repairer in all 50 states. In the UK, BSI PAS 125 accreditation and insurer-approved networks control a large share of claims work, yet the consumer\'s right to choose is protected. Well-crafted SEO content that educates drivers about these rights (guides, FAQs) captures high-intent informational searches. Rankwell integrates this insurance education dimension into every body shop content strategy.',
      },
      {
        question: 'Does a body shop need a blog to improve its Google rankings?',
        answer:
          'A blog is a powerful lever for a body shop when it answers real customer questions: "paintless dent repair vs traditional bodywork", "what to do after a fender bender", "how much does bumper replacement cost". These articles demonstrate verifiable expertise and are easily citable by AI engines. Rankwell recommends 2 to 3 articles per month targeting informational queries related to damage types and repair techniques.',
      },
      {
        question: 'How can a body shop appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a body shop must accumulate web authority signals: presence on automotive directories (Carwise, Yelp, Angi in the US; Checkatrade, WhoCanFixMyCar in the UK), numerous and recent Google reviews, a complete Google Business Profile with before/after repair photos, and rich factual content on its website (pricing grids, service descriptions, certifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a body shop?',
        answer:
          'Local SEO targets "body shop + city" and "collision repair near me" queries and relies on Google Business Profile, client reviews, and consistent NAP citations across automotive directories. National SEO targets broader queries ("best paintless dent repair techniques") and requires high-authority educational content. For the vast majority of body shops, local SEO is the priority. Rankwell adapts the balance between local and national based on the shop\'s growth strategy.',
      },
      {
        question: 'Are Yelp, Carwise, and automotive directories enough to be visible as a body shop?',
        answer:
          'Automotive directories like Carwise and Yelp are useful for capturing estimate requests, but they create dependency: your body shop is just one profile among hundreds, competing primarily on price. A well-optimized website allows the shop to control its image, highlight specialties (luxury vehicles, classic cars, paintless dent repair), convert directly without commission, and build lasting authority. Rankwell helps body shops build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your body shop visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the collision repair industry.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
        { label: 'SEO Car Dealer', href: '/en/geo-seo-agency/sectors/car-dealer' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
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
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
      { label: 'Car Dealer', href: '/en/geo-seo-agency/sectors/car-dealer' },
      { label: 'Mover', href: '/en/geo-seo-agency/sectors/mover' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/locksmith' },
    ],
  },

  // Schema.org primary type
  schemaType: 'AutoBodyShop',
};

export default data;
