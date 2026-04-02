/**
 * DATA: Sector Page Holiday Rentals (EN)
 * Route: /en/geo-seo-agency/sectors/holiday-rental
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs, Clicks.so, MarketKeep, RankLocally UK, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'holiday-rental',
    title: 'GEO & SEO Agency for Holiday Rentals - Rankwell',
    description:
      'Rankwell helps holiday rental owners boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the vacation rental industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Holiday Rentals' },
    ],
    title: 'GEO & SEO for Holiday Rentals: Google & AI Engine Visibility',
    subtitle:
      'Your property must appear where travelers plan their stay: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to seasonal rental properties and vacation homes.',
    ctaText: 'Request a GEO & SEO audit for your holiday rental',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for holiday rentals',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of vacation rental queries include a location</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market shaped by sharp seasonality, where the top 3 Google results and AI responses capture most bookings.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Seasonality concentrates 60 to 70% of bookings within a few peak months</strong>, requiring SEO work 3 to 4 months in advance. Regulations differ by jurisdiction: DTCM licensing (Dubai), council registration (UK), city-level STR permits (US).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Airbnb, Vrbo, Booking.com</strong> (US/global), <strong class="text-secondary dark:text-accent">Cottages.com, Sykes</strong> (UK), <strong class="text-secondary dark:text-accent">Bayut, Property Finder</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent rental stays invisible against these platforms.',
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
    title: 'What your future guests search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'vacation rentals', volume: 201000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'cabin rentals near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'cabins near me', volume: 90500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'vacation rental by owner', volume: 96200, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'beach house rental', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'mountain cabin rental', volume: 8100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how much does it cost to rent a cabin', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'holiday cottages', volume: 110000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'holiday home rentals UK', volume: 6200, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'self-catering cottages UK', volume: 5800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'pet-friendly holiday homes', volume: 4000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'holiday cottages with hot tub', volume: 3600, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'holiday cottage Cornwall', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'holiday cottage vs hotel which is cheaper', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'holiday homes Dubai', volume: 4600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'vacation rental Dubai', volume: 3800, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'short term rental Dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'holiday villa Dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'serviced apartment Dubai', volume: 1600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'holiday homes Abu Dhabi', volume: 1000, intent: 'locale', difficulty: 'faible' },
        { keyword: 'DTCM licensed holiday home', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "vacation rentals", "holiday cottages", or "holiday homes Dubai" represent travelers actively looking for accommodation. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your rental does not appear there, those bookings go to aggregator platforms or to your direct competitors.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for holiday rentals',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the seasonal and geographic constraints of the vacation rental market across the US, UK, and UAE.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of your property pages.',
        items: [
          'Page structure by property type and season',
          'Schema.org LodgingBusiness and VacationRental markup',
          'Performance and Core Web Vitals (high-resolution images optimized)',
          'Crawl and indexation of availability and booking pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your rental\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the property\'s informational universe and its region',
          'Measurement of legitimacy and citability against major platforms',
          'Evaluation of content factual density (capacity, amenities, rates)',
          'Competitive benchmark on AI travel queries',
        ],
      },
      {
        title: 'Market study & vacation rental keyword research',
        subtitle: 'Mapping of search queries by property type, capacity, and geographic area across US, UK, and UAE markets. Identification of high-potential booking combinations.',
        items: [
          'Property type + capacity + location combinations with low competition',
          'Seasonal query analysis (booking anticipation for peak months)',
          'Queries asked to AI engines ("which vacation rental do you recommend in...")',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a conversion path designed to turn visitors into direct bookings, bypassing platform commissions.',
        items: [
          'Property page with gallery, rates, and availability calendar',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with regional anchoring',
        ],
      },
      {
        title: 'Tourism content strategy',
        subtitle: 'Creation of content showcasing the local area and activities, written to be citable by LLMs when travelers seek recommendations.',
        items: [
          'Guides to local activities, landmarks, and attractions',
          'Thematic pages (group rental, pool, beachfront, pet-friendly)',
          'Self-sufficient factual sentences with verifiable data (capacity, square footage, rates)',
        ],
      },
      {
        title: 'Authority & tourism link building',
        subtitle: 'Authority development through qualified tourism directories and local visitor organizations.',
        items: [
          'VisitBritain, VisitEngland, local tourism boards (UK)',
          'State tourism offices, TripAdvisor, Vrbo listings (US)',
          'DTCM-approved directories, Dubai Tourism (UAE)',
          'Partnerships with travel blogs and regional guides',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the Google Business Profile to capture local "rental + location" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Vacation Rental + secondary categories by property type',
          'Guest review management and post-stay collection strategy',
          'Professional photos of property, pool, surroundings',
          'Consistent NAP citations across tourism directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by property type, and direct booking requests generated.',
        items: [
          'Google positions by seasonal keyword',
          'Organic traffic by property type and region',
          'GEO Score: visibility in AI engines',
          'Direct bookings and conversion rate',
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
        description: 'Full diagnostic of your rental website: property pages, rates, availability, loading speed, and indexation. Each blocking issue is documented with its fix.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on travel queries, benchmark against 3 to 5 competing rentals, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LodgingBusiness, VacationRental, and FAQPage markup ready to integrate, with capacity, amenities, and seasonal rates. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of property pages, regional tourism guides, activity articles, and FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from tourism directories (VisitBritain, TripAdvisor, state tourism offices), travel blogs, and regional press. Tracking of Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by property page and seasonal keyword, organic traffic by property type, GEO Score evolution, and direct bookings attributed to SEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your rental in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a traveler asks ChatGPT "which holiday rental do you recommend in Cornwall?", the LLM compiles information from across the web to formulate its response. If your property does not appear in any cited source, it is invisible in this new booking channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which vacation rental do you recommend in the Smoky Mountains?": the LLM does not cite a specific property by name. It provides a list of selection criteria (proximity to attractions, guest reviews, amenities, capacity) and redirects to Airbnb, Vrbo, and local tourism boards. Geographic areas are mentioned without any individual listing.</p><h4>Informational queries</h4><p>"How to choose a good vacation rental?" or "Airbnb vs direct booking: what\'s the difference?": the LLM generates a structured guide with 5 to 7 criteria (location, capacity, reviews, cancellation policy, value for money). It distinguishes vacation rentals (independent furnished property) from hotels and B&Bs. No external source is cited.</p><h4>Pricing queries</h4><p>"How much does a vacation rental cost per week?": the LLM gives detailed pricing ranges (USD 800 to USD 2,500 per week for a US cabin in peak season, GBP 400 to GBP 1,200 per week for a UK cottage). Sites providing precise, seasonal pricing grids have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "holiday rental near me with pool", <strong>ChatGPT activates Search mode with a Maps card</strong>. Rentals with a complete Google Business Profile (category Vacation Rental, pool photos, recent reviews) appear directly in the AI response.</p>',
    structuredData:
      '<p>For holiday rentals, the recommended schema.org types are: <code>LodgingBusiness</code> (primary type), <code>VacationRental</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>LodgingBusiness</code> markup with properties <code>amenityFeature</code>, <code>numberOfRooms</code>, and <code>priceRange</code> allows Google and LLMs to precisely identify the capacity, amenities, and location of the property.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your rental\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content about the property and its region), Legitimacy & Citability (external trust signals: reviews, directories, tourism board listings), and Factual Density (richness of structured data: capacity, rates, amenities, activities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for holiday rentals',
    items: [
      {
        question: 'How much does SEO cost for a holiday rental website?',
        answer:
          'The SEO budget for a holiday rental depends on the number of properties, the geographic scope, and local competition. At Rankwell, SEO engagements for vacation rentals start from USD 1,500/month (or GBP 1,200/month) for a single property in one region, and can reach USD 4,000 to 6,000/month for a multi-property portfolio targeting competitive destinations.',
      },
      {
        question: 'How long does it take to see results from vacation rental SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Long-tail queries with high booking intent (e.g., "lakefront cabin with hot tub Smokies" or "pet-friendly cottage Lake District") are faster to rank for than generic terms. Rankwell recommends launching the SEO strategy in autumn to be visible before the summer peak season.',
      },
      {
        question: 'Do short-term rental regulations affect SEO strategy?',
        answer:
          'Yes, regulations shape content and structured data. In the US, many cities require STR permits and enforce zoning restrictions. In the UK, councils impose planning permission for change-of-use to holiday lets, and tax rules differ for furnished holiday lettings. In the UAE, DTCM (Dubai Tourism) licensing is mandatory for all holiday homes. Rankwell integrates these regulatory requirements into every SEO strategy to ensure compliant, authoritative content.',
      },
      {
        question: 'Does a holiday rental need a blog to improve rankings?',
        answer:
          'A tourism blog is a powerful lever for a vacation rental, provided it targets real traveler queries. Articles should highlight the local area (activities, landmarks, events) and answer trip-planning questions. Rankwell recommends 2 to 4 articles per month, published ahead of the target season to allow time for indexation.',
      },
      {
        question: 'How can a holiday rental appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a rental must accumulate web authority signals: presence on qualified tourism directories (VisitBritain, TripAdvisor, state tourism boards), numerous recent guest reviews, and rich factual content on its website (capacity, rates, amenities, activities). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a vacation rental?',
        answer:
          'Local SEO targets "rental + location" queries and relies on Google Business Profile, guest reviews, and citations in regional tourism directories. National SEO targets generic queries ("vacation rental with pool") and requires high-authority thematic content. Rankwell combines both approaches based on the property\'s catchment area and booking capacity.',
      },
      {
        question: 'Are platforms like Airbnb and Vrbo enough to be visible?',
        answer:
          'Platforms like Airbnb, Vrbo, and Booking.com are useful for initial visibility, but they create dependency: commissions of 12 to 20% per booking, no control over your brand, and your property competes against hundreds of listings on the same page. A well-optimized direct website allows you to receive commission-free bookings and build lasting authority that platforms cannot revoke. Rankwell helps rental owners build this independence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your holiday rental visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan for the next season.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Spa', href: '/en/geo-seo-agency/sectors/spa' },
        { label: 'SEO Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
        { label: 'SEO Campsite', href: '/en/geo-seo-agency/sectors/campsite' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
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
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      { label: 'Campsite', href: '/en/geo-seo-agency/sectors/campsite' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/landscaper' },
      { label: 'Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
    ],
  },

  // Schema.org primary type
  schemaType: 'LodgingBusiness',
};

export default data;
