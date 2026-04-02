/**
 * DATA: Sector Page Property Developers (EN)
 * Route: /en/geo-seo-agency/sectors/property-developer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 * Auto-test LLM: 5 queries tested, report in rapport-test-promoteur-immobilier-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'property-developer',
    title: 'GEO & SEO Agency for Property Developers - Rankwell',
    description:
      'Rankwell helps property developers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for new build developments across the US, UK, and UAE.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Property Developers' },
    ],
    title: 'GEO & SEO for Property Developers: Google & AI Engine Visibility',
    subtitle:
      'Your new build developments need to appear where buyers and investors search: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies adapted to the sales cycle of real estate development.',
    ctaText: 'Request a GEO & SEO audit for your development company',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for property developers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of new build searches include a city or neighborhood name</strong>. Each development must rank for its location, and your brand must be visible across all your markets. This is a local SEO market at two scales: project-level and corporate-level.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Sales cycles of 12 to 24 months per development</strong>: SEO must deliver leads before unsold inventory impacts cash flow. Shifting regulations (tax incentives, zoning, sustainability codes) change buyer queries. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must keep content aligned with market conditions.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zillow New Construction, Realtor.com</strong> (US), <strong class="text-secondary dark:text-accent">Rightmove New Homes, Zoopla</strong> (UK), and <strong class="text-secondary dark:text-accent">Property Finder, Bayut</strong> (UAE) dominate "new build + city" queries. National players (Lennar, Barratt, Emaar) hold top positions through domain authority. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent developer stays invisible.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s local pack.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'Learn more about local SEO',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future buyers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'new construction homes', volume: 135000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'new construction homes near me', volume: 90500, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'real estate developer', volume: 12100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'new build homes for sale', volume: 8100, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'luxury home builders near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'new developments near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a new build home cost', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'new build homes', volume: 33100, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'new build homes near me', volume: 22200, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'property developer', volume: 6600, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'new build developments', volume: 5400, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'house builders near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'new homes for sale', volume: 3600, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'help to buy new build', volume: 2900, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'off plan projects dubai', volume: 18100, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'new projects in dubai', volume: 14800, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'property developer dubai', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'emaar properties', volume: 40500, intent: 'navigationnelle', difficulty: 'très élevée' },
        { keyword: 'damac properties', volume: 33100, intent: 'navigationnelle', difficulty: 'très élevée' },
        { keyword: 'dubai property developers', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'off plan payment plan dubai', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "new construction homes near me", "new build homes", or "off plan projects dubai" represent buyers and investors actively looking for new developments. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your developments do not appear there, those buyers sign with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for property developers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of real estate development sales cycles across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of development pages with heavy visuals (renderings, floor plans, virtual tours).',
        items: [
          'Page structure by development, city, and property type',
          'Schema.org RealEstateAgent and Residence markup',
          'Performance and Core Web Vitals on development listing pages',
          'Crawl and indexation of active vs completed developments',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the developer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the developer\'s informational universe',
          'Measurement of legitimacy and citability against portals (Zillow, Rightmove, Property Finder)',
          'Evaluation of content factual density on development pages',
          'Competitive benchmark on AI-driven property queries',
        ],
      },
      {
        title: 'Market study & development keyword research',
        subtitle: 'Mapping of search queries by development type, geographic area, and buyer profile across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          '"New build + city" and "developer + region" combinations with low competition',
          'Queries tied to financing and incentives (FHA loans, Help to Buy, off-plan payment plans)',
          'Analysis of queries asked to AI engines about new developments',
          'Search volumes by city and property type',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the buyer journey and Google crawl efficiency.',
        items: [
          'City page > development page > unit type page > contact / booking form',
          'Primary keyword + 3-5 secondary keywords per development page',
          'Title tag, meta description, and heading optimization per development',
          'Lifecycle management: launch, selling, sold out, completed',
        ],
      },
      {
        title: 'Development content strategy',
        subtitle: 'Creation of educational content demonstrating the developer\'s expertise, written to be citable by LLMs.',
        items: [
          'Buyer guides: purchasing off-plan, warranties, handover process',
          'City and neighborhood pages with market data (price per sqft, trends, amenities)',
          'Self-sufficient factual sentences with verifiable data',
          'Content on financing options and regulatory updates',
        ],
      },
      {
        title: 'Authority & property link building',
        subtitle: 'Authority development through property portals, industry publications, and institutional partnerships.',
        items: [
          'Zillow New Construction, Realtor.com, NewHomeSource (US)',
          'Rightmove New Homes, WhatHouse, NHBC (UK)',
          'Property Finder, Bayut, Dubai Land Department (UAE)',
          'Press releases on development launches and industry publications',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the developer\'s Google Business Profile and individual sales office profiles to capture local queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Real estate developer + secondary categories',
          'GBP profile per sales office and flagship development',
          'Photos of developments, floor plans, 3D renderings, and regular posts',
          'Consistent NAP citations across property portals and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by development, and leads generated (brochure requests, viewing bookings, unit reservations).',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by development listing page',
          'GEO Score: visibility in AI engines',
          'Leads generated and conversion rate by development',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, sales office, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your development website: page architecture by project, city, and unit type, loading speed on visual-heavy pages, Google indexation of active vs completed developments, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your brand in ChatGPT, Perplexity, and Gemini on your target development queries. Benchmark against 3 to 5 competing developers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'RealEstateAgent, Residence, Offer, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your developments and locations. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of development pages, buyer guides (off-plan purchasing, warranties, financing), neighborhood data pages, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from property portals (Zillow New Construction, Rightmove New Homes, Property Finder), industry press, and institutional directories. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by development and local keyword, organic traffic by project page, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your developments in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which property developer do you recommend in Dubai?", the LLM compiles information from across the web to formulate its response. If your brand does not appear in any cited source, your developments are invisible in this new buyer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which property developer do you recommend in Dubai?": the LLM cites 5 to 7 names, predominantly large-scale developers (Emaar, Nakheel, Aldar, Dubai Properties, Meraas). Each name comes with a positioning qualifier and notable projects. Regional or independent developers are cited only if they have a strong web and press presence. In the US and UK markets, the LLM redirects to portals (Zillow New Construction, Rightmove New Homes) rather than naming individual developers.</p><h4>Informational queries</h4><p>"How to choose a good property developer for buying off plan?": the LLM generates a structured guide with 6 to 8 criteria (track record, RERA/NHBC registration, escrow accounts, payment plans, completed projects). No developer is named. The developer that publishes this type of content on its website can be extracted as a source.</p><h4>Pricing queries</h4><p>"How much does a new build home cost in the US and UK?": the LLM provides detailed pricing ranges by country and region (US: USD 400,000 to 500,000 average, UK: GBP 250,000 to 350,000 average, with city-level breakdowns). Sites providing precise, up-to-date pricing data by market have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "new build homes near me", <strong>ChatGPT asks for the user\'s location</strong> before providing any recommendation. In Search mode with geolocation, developments listed on portals and with a complete Google Business Profile appear directly in the AI response.</p>',
    structuredData:
      '<p>For property developers, the recommended schema.org types are: <code>RealEstateAgent</code> (primary type), <code>Residence</code> (per development), <code>Offer</code> (per unit type), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>RealEstateAgent</code> markup allows Google and LLMs to precisely identify the geographic coverage, development types, and certifications of the developer.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your brand\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on your developments and markets), Legitimacy & Citability (external trust signals: portal presence, press mentions, industry certifications), and Factual Density (richness of structured data and named entities: price per sqft, unit counts, delivery timelines).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for property developers',
    items: [
      {
        question: 'How much does SEO cost for a property developer?',
        answer:
          'The SEO budget for a property developer depends on the number of active developments and the geographic scope targeted. At Rankwell, SEO engagements for developers start from USD 2,500/month (or GBP 2,000/month) for a portfolio of 3 to 5 developments in one region, and can reach USD 8,000-10,000/month for a multi-region developer with 15 or more developments in active sales.',
      },
      {
        question: 'How long does it take to rank a new development on Google?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "new build homes Scottsdale" or "new build flats Salford") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline aligned with the sales cycle of each development, because SEO must generate leads during the selling window.',
      },
      {
        question: 'How should we handle completed or sold-out development pages?',
        answer:
          'Pages for completed developments should not be deleted: they carry authority and backlinks. Rankwell recommends transforming them into portfolio or testimonial pages, with traffic redirected to active developments in the same area. This strategy preserves accumulated SEO capital while directing buyers toward available inventory.',
      },
      {
        question: 'Does a property developer need editorial content to improve rankings?',
        answer:
          'Editorial content is a powerful lever for capturing informational buyer queries: off-plan purchasing guides, financing explainers (FHA loans in the US, Help to Buy in the UK, payment plans in the UAE), and market data by city. Rankwell recommends 2 to 4 pieces per month, targeting long-tail queries tied to real buyer and investor concerns.',
      },
      {
        question: 'How can a property developer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a developer must accumulate web authority signals: presence on property portals (Zillow, Rightmove, Property Finder), mentions in industry press, optimized Google Business Profiles for each sales office, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a developer?',
        answer:
          'Local SEO targets "new build + city" and "developer + region" queries and relies on Google Business Profile, buyer reviews, and citations on property portals. National SEO targets generic queries ("best property developer", "new construction investment") and requires high-authority educational content. Rankwell combines both approaches based on the developer\'s geographic footprint.',
      },
      {
        question: 'Are property portals (Zillow, Rightmove) enough to be visible?',
        answer:
          'Property portals are essential for listing distribution, but they create dependency: the developer is just one listing among thousands, with no control over the buyer journey or conversion. A well-optimized developer website allows direct lead generation, full brand control, and lasting authority that portals cannot revoke. Rankwell helps developers build this independent organic visibility through a GEO & SEO strategy that reduces reliance on paid portal placements.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your developments visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to your development portfolio.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architect' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Webflow', href: '/en/geo-seo-agency/cms/webflow' },
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
      { label: 'Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
    ],
  },

  // Schema.org primary type
  schemaType: 'RealEstateAgent',
};

export default data;
