/**
 * DATA: Sector Page Campsites (EN)
 * Route: /en/geo-seo-agency/sectors/campsite
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: search analysis tools, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'campsite',
    title: 'GEO & SEO Agency for Campsites - Rankwell',
    description:
      'Rankwell helps campgrounds, RV parks, and caravan sites boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the outdoor hospitality industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Campsites' },
    ],
    title: 'GEO & SEO for Campsites: Google & AI Engine Visibility',
    subtitle:
      'Your future guests compare campgrounds on Google and ask ChatGPT before booking. Our experts design GEO & SEO strategies tailored to the seasonality and specifics of the outdoor hospitality industry.',
    ctaText: 'Request a GEO & SEO audit for your campsite',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for campsites',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of campsite searches pair "camping" or "campground" with a location</strong>. The top 3 Google results and AI engine responses capture most bookings in this local SEO market.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Seasonality compresses 70% of revenue into 4 to 5 peak months</strong>. Rankings must be secured well ahead of the booking window. Accommodation types (tent pitches, RV hookups, glamping pods) and varying regulations add complexity that an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Hipcamp, The Dyrt, KOA</strong> (US), <strong class="text-secondary dark:text-accent">Pitchup, Campsites.co.uk</strong> (UK), <strong class="text-secondary dark:text-accent">Glamping Hub, TripAdvisor</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent campsite stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s Local Pack.',
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
        { keyword: 'camping near me', volume: 550000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'campgrounds near me', volume: 450000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'rv parks near me', volume: 246000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'glamping near me', volume: 135000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'state park camping', volume: 22200, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'campsite reservations', volume: 5400, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'how to choose a campground', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'campsites near me', volume: 74000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'caravan parks near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'holiday parks UK', volume: 27100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'glamping UK', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'camping Cornwall', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'dog friendly campsites', volume: 9900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best campsites UK', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'glamping Dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'camping UAE', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'desert camping Dubai', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'camping Ras Al Khaimah', volume: 2400, intent: 'locale', difficulty: 'faible' },
        { keyword: 'glamping near Dubai', volume: 1900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'best camping spots UAE', volume: 1300, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'luxury camping Dubai', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "camping near me", "campgrounds near me", or "glamping Dubai" represent travelers actively looking for a place to stay outdoors. The majority click on the top 3 results or follow the recommendation of an AI engine. If your campsite does not appear there, those guests book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for campsites',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the seasonal constraints and geographic diversity of the outdoor hospitality industry across the US, UK, and UAE.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation. Special attention to accommodation pages, rate tables, and photo galleries.',
        items: [
          'Page structure by accommodation type (tent pitches, RV hookups, cabins, glamping pods)',
          'Schema.org Campground and LodgingBusiness markup',
          'Performance and Core Web Vitals (heavy image galleries)',
          'Crawl and indexation of booking modules',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the campsite\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the campsite\'s informational universe (destination content, activities, amenities)',
          'Measurement of legitimacy and citability against chains (KOA, Haven, Thousand Trails)',
          'Evaluation of content factual density (rates, ratings, capacity)',
          'Competitive benchmark on AI queries for the destination',
        ],
      },
      {
        title: 'Market study & outdoor hospitality keyword research',
        subtitle: 'Mapping of search queries by destination, accommodation type, and season across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Destination + accommodation type + amenity combinations (pool, waterfront, pet-friendly)',
          'Analysis of queries asked to AI engines about the destination',
          'Real search volumes by season (off-peak, shoulder, peak)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the guest booking journey and Google crawl efficiency.',
        items: [
          'Destination page > accommodation page > booking module',
          'Primary keyword + 3 to 5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with location and accommodation type',
        ],
      },
      {
        title: 'Destination content strategy',
        subtitle: 'Creation of destination and activity guides demonstrating local expertise, written to be citable by LLMs.',
        items: [
          'Destination guides and FAQs answering Google People Also Ask ("things to do near...", "best beaches...")',
          'Self-sufficient factual sentences with verifiable data (capacity, amenities, distances)',
          'Seasonal content published 3 to 4 months ahead of peak booking periods',
        ],
      },
      {
        title: 'Authority & outdoor hospitality link building',
        subtitle: 'Authority development through qualified tourism directories and outdoor publications.',
        items: [
          'Hipcamp, The Dyrt, KOA, ReserveAmerica (US)',
          'Pitchup, Campsites.co.uk, The Caravan and Motorhome Club, VisitBritain (UK)',
          'Tourism boards, travel press, and regional outdoor blogs',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the campsite\'s Google Business Profile to capture local "campground + destination" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Campground + secondary categories (RV Park, Glamping Site)',
          'Post-stay review management and collection strategy',
          'Professional photos (drone shots, pool, accommodations, views), seasonal hours, attributes',
          'Consistent NAP citations across tourism directories and booking platforms',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by accommodation type, and direct bookings generated.',
        items: [
          'Google positions by keyword and destination',
          'Organic traffic by accommodation page and by season',
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
        description: 'Full diagnostic of your campsite\'s website: accommodation pages, rate tables, photo galleries, and booking module. Each blocking issue is documented with its fix.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on campsite and destination queries, benchmark against 3 to 5 competing properties, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Campground, LodgingBusiness, and FAQPage markup ready to integrate, covering amenities, activities, and accommodation types. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of accommodation pages, destination guides, activity articles, seasonal content, and FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from tourism directories (Hipcamp, Pitchup, The Dyrt), travel blogs, and outdoor press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by accommodation page and destination keyword, organic traffic by season, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your campsite in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which campground do you recommend near Yellowstone?", the LLM compiles information from across the web to formulate its response. If your campsite does not appear in any cited source, it is invisible in this new booking channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which campsite do you recommend in Cornwall?" or "best RV parks in Texas": the LLM cites 5 to 7 properties by name, with star ratings, key amenities, and location. Properties cited consistently have a rich Google Business Profile (photos, reviews, rating above 4.0) and presence on aggregators (Hipcamp, Pitchup, Campsites.co.uk).</p><h4>Informational queries</h4><p>"How to choose a good campsite?" or "glamping vs traditional camping": the LLM generates a structured guide with 6 to 8 criteria (location, amenities, star rating, reviews, budget, family-friendliness, proximity to attractions). No specific campsite is cited. The property that publishes this type of content on its site can become the reference source.</p><h4>Pricing queries</h4><p>"How much does a campsite cost in the UK?": the LLM gives detailed ranges (GBP 15 to GBP 40 per night for a tent pitch, GBP 50 to GBP 150 for a glamping pod depending on the season). In the US, tent sites range from USD 20 to USD 50 per night and RV hookups from USD 35 to USD 80. Sites providing precise, up-to-date pricing data are most likely to be extracted as a source.</p><h4>Local and Maps queries</h4><p>On "campsite near me with pool" or "RV park near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Campsites with a complete Google Business Profile (category, recent reviews, photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For campsites, the recommended schema.org types are: <code>Campground</code> (primary type), <code>LodgingBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Campground</code> markup allows Google and LLMs to precisely identify the accommodation types, location, star rating, and amenities of the property.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your campsite\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of destination and accommodation content), Legitimacy & Citability (external trust signals: reviews, tourism directories, press mentions), and Factual Density (richness of structured data: rates, capacity, amenities, ratings).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for campsites',
    items: [
      {
        question: 'How much does SEO cost for a campsite?',
        answer:
          'The SEO budget for a campsite depends on the number of destinations targeted, accommodation types, and local competition. At Rankwell, SEO engagements for campsites start from USD 1,500/month (or GBP 1,200/month) for a single-site property, and can reach USD 5,000 to USD 8,000/month for a multi-site group targeting several regions or states.',
      },
      {
        question: 'How long does it take to see results from campsite SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Seasonality means the SEO work should start no later than October to secure rankings before the following peak season. Niche queries (e.g., "pet-friendly glamping Cornwall" or "RV park near Yellowstone") rank faster than generic regional terms. Rankwell provides a realistic timeline aligned with seasonal booking patterns.',
      },
      {
        question: 'Does a campsite\'s star rating affect its search rankings?',
        answer:
          'Star ratings (1 to 5 stars, awarded by national tourism bodies like VisitEngland, the AAA in the US, or DTCM in Dubai) are not a direct Google ranking factor, but they influence click-through rates and guest trust. AI engines like ChatGPT systematically mention star classifications in their recommendations. A campsite whose rating is correctly marked up in schema.org benefits from richer visibility in Google search results. Rankwell integrates this dimension into every audit.',
      },
      {
        question: 'Does a campsite need a blog to improve its rankings?',
        answer:
          'A destination blog is a powerful lever when well executed. Articles should answer real questions from travelers ("things to do near Big Bend", "best beaches in Cornwall", "winter camping tips UAE"), demonstrate local expertise, and be written to be citable by AI engines. Rankwell recommends 2 to 4 articles per month, published 3 to 4 months ahead of peak season to capture planning-phase traffic.',
      },
      {
        question: 'How can a campsite appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a campsite must accumulate web authority signals: presence on tourism directories (Hipcamp, Pitchup, The Dyrt), recent positive Google reviews, mentions in travel press and outdoor blogs, and rich factual content on its website (amenities, rates, activities). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a campsite?',
        answer:
          'Local SEO targets "campsite + destination" queries (e.g., "camping Cornwall", "RV park Texas Hill Country", "glamping Dubai") and relies on Google Business Profile, guest reviews, and citations on tourism directories. National SEO targets generic queries ("best campsites in the US", "top glamping UK") and requires high-authority destination content. Rankwell combines both approaches based on the property\'s strategy and catchment area.',
      },
      {
        question: 'Are platforms like Hipcamp, Pitchup, and The Dyrt enough to fill a campsite?',
        answer:
          'Booking platforms like Hipcamp, Pitchup, and The Dyrt are useful for initial visibility, but they create dependency: the campsite is just one listing among thousands, and every booking generates a commission. A well-optimized website enables direct bookings without commission, full control over the property\'s image, and lasting authority that no platform can revoke. Rankwell helps campsites build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your campsite visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to your seasonal booking cycle.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Spa', href: '/en/geo-seo-agency/sectors/spa' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
        { label: 'SEO Landscaper', href: '/en/geo-seo-agency/sectors/paysagiste' },
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
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/paysagiste' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Bar', href: '/en/geo-seo-agency/sectors/bar' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/traiteur' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Campground',
};

export default data;
