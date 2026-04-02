/**
 * DATA: Sector Page Hotels (EN)
 * Route: /en/geo-seo-agency/sectors/hotel
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs Keywords Explorer, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'hotel',
    title: 'GEO & SEO Agency for Hotels - Rankwell',
    description:
      'Rankwell helps hotels and hospitality groups boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the hotel industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Hotels' },
    ],
    title: 'GEO & SEO for Hotels: Google & AI Engine Visibility',
    subtitle:
      'Your hotel needs to appear where travelers book: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to the constraints of the hospitality industry.',
    ctaText: 'Request a GEO & SEO audit for your hotel',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for hotels',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of hotel searches happen on mobile</strong> with immediate booking intent. The decision happens in the top 3 Google results or in an AI engine recommendation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Seasonality structures the entire hotel SEO calendar</strong>: volumes can triple between low and peak season. Star ratings follow local systems (AAA Diamond US, AA Stars UK, DTCM Dubai), and guest reviews carry exceptional weight.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Booking.com, Expedia, Hotels.com, and Google Hotels</strong> capture over 70% of clicks on generic hotel queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent hotel stays invisible against these OTAs.',
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
        { keyword: 'hotels near me', volume: 2200000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'cheap hotels near me', volume: 368000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'boutique hotel', volume: 74000, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'pet friendly hotels near me', volume: 135000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best hotels in New York', volume: 27100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'hotel & resort', volume: 40500, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'luxury hotel deals', volume: 12100, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'hotels near me', volume: 823000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'cheap hotels', volume: 110000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'hotels in London', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'dog friendly hotels', volume: 40500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'boutique hotels UK', volume: 8100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'spa hotels near me', volume: 33100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how to book cheapest hotel', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'hotels in Dubai', volume: 60500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'hotel near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'cheap hotels in Dubai', volume: 18100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'luxury hotel Dubai', volume: 9900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'beach hotel Abu Dhabi', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'boutique hotel Dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best hotels in Abu Dhabi', volume: 2900, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "hotels near me", "cheap hotels", or "hotels in Dubai" represent travelers actively looking to book. The majority click on the top 3 organic results, or follow the recommendation of an AI engine. If your property does not appear there, those guests book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for hotels',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the specific constraints of the hospitality industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation. Special attention to the booking engine, which often generates duplicate content.',
        items: [
          'Page structure by room type and offer',
          'Schema.org Hotel and LodgingBusiness markup',
          'Performance and Core Web Vitals (high-resolution room images)',
          'Crawl and indexation of the booking engine',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the hotel\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the property\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI hotel queries',
        ],
      },
      {
        title: 'Market study & hotel keyword research',
        subtitle: 'Mapping of search queries by accommodation category, price range, and geographic area across US, UK, and UAE markets. Identification of high-conversion niches ("spa hotel + city", "pet friendly hotel + destination").',
        items: [
          'Category + city + amenity combinations with low competition',
          'Analysis of queries asked to AI engines',
          'Real search volumes by destination and season',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the traveler\'s booking journey and Google crawl efficiency.',
        items: [
          'Destination page > hotel page > room page > booking',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by room type',
        ],
      },
      {
        title: 'Hotel content strategy',
        subtitle: 'Creation of content showcasing the guest experience and the destination, written to be citable by LLMs.',
        items: [
          'Destination guides and local itineraries',
          'Self-sufficient factual sentences with verifiable data',
          'Thematic pages: romantic getaway, business travel, family vacation',
        ],
      },
      {
        title: 'Authority & hospitality link building',
        subtitle: 'Authority development through qualified tourism directories, travel guides, and specialized press.',
        items: [
          'TripAdvisor, Booking.com, Google Hotels, Michelin Guide',
          'Travel press and lifestyle publications',
          'Partnerships with local tourism boards and CVBs',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the hotel\'s Google Business Profile to capture local "hotel + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Hotel + secondary categories (spa, restaurant)',
          'Guest review management and post-stay collection strategy',
          'Professional photos of rooms, lobby, and amenities',
          'Consistent NAP citations across OTAs and tourism directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by destination, and direct bookings generated.',
        items: [
          'Google positions by keyword and destination',
          'Organic traffic vs OTA traffic',
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
    subtitle: 'Each deliverable is a document or tool your SEO experts, revenue team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your hotel\'s website: room pages, rate structure, booking engine, mobile speed, and indexation. Every blocking issue is documented with its correction.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your property in ChatGPT, Perplexity, and Gemini on your target hotel queries. Benchmark against 3 to 5 competing properties and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Hotel, LodgingReservation, and FAQPage markup ready to integrate, with room types, rates, and property amenities. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of room pages, destination guides, seasonal articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from travel guides, OTAs, tourism blogs, and hospitality press. Tracking of links obtained and Domain Rating progression of your property.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by page, organic traffic by destination, direct bookings attributed to the SEO channel, and GEO Score evolution. Delivered monthly with adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your hotel in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a traveler asks ChatGPT "which hotel do you recommend in Miami?", the LLM compiles information from across the web to formulate its response. If your property does not appear in any cited source, it is invisible in this new booking channel.',
    llmBehavior:
      '<h4>Local recommendation queries</h4><p>"Which hotel do you recommend in Miami?": the LLM cites 5 to 8 hotels by price category (budget, mid-range, luxury), with the neighborhood and a rate range. Properties with a strong web footprint (Google reviews, mentions in travel press, complete OTA profiles) appear systematically.</p><h4>Informational queries</h4><p>"How to choose a good hotel?" or "what does 5-star mean?": the LLM generates a structured guide with 6 to 8 criteria (location, reviews, value, amenities, star rating). No specific property is cited. A hotel that publishes this type of factual informational content on its website can be extracted as a source.</p><h4>Pricing queries</h4><p>"How much does a hotel cost in London?": the LLM gives detailed pricing ranges (GBP 80 to GBP 200 per night for mid-range, GBP 300+ for luxury). Sites providing precise, up-to-date pricing data broken down by neighborhood and season have the highest chance of being cited as a source.</p><h4>Local and Maps queries</h4><p>On "hotel near me cheap", <strong>ChatGPT activates Search mode with a Maps card</strong>. Hotels with a complete Google Business Profile (category, recent reviews, professional photos, displayed rates) appear directly in the AI response.</p>',
    structuredData:
      '<p>For hotels, the recommended schema.org types are: <code>Hotel</code> (primary type), <code>LodgingBusiness</code>, <code>LodgingReservation</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Hotel</code> markup allows Google and LLMs to precisely identify the property\'s category, location, rates, and guest reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your hotel\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for hotels',
    items: [
      {
        question: 'How much does SEO cost for a hotel?',
        answer:
          'The SEO budget for a hotel depends on the destination, number of rooms, and local competition. At Rankwell, SEO engagements for hotels start from USD 2,000/month (or GBP 1,600/month) for a single property and one destination, and can reach USD 6,000 to 10,000/month for a multi-property hospitality group targeting competitive markets like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from hotel SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche queries (e.g., "pet friendly boutique hotel Austin" or "spa hotel near Bath") rank faster than highly competitive generic terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your destination.',
      },
      {
        question: 'Can a hotel compete with Booking.com in SEO?',
        answer:
          'An independent hotel cannot outrank Booking.com on generic queries ("hotels New York"), but it can surpass OTAs on long-tail and niche queries: "family hotel with pool near Disney World", "boutique hotel with rooftop bar Shoreditch". Rankwell identifies these gaps and builds a targeted content strategy that generates direct bookings, without OTA commissions.',
      },
      {
        question: 'Does destination content help a hotel rank better?',
        answer:
          'Destination guides are a powerful lever for hotel SEO. Travelers search "things to do in Barcelona" or "best restaurants in Dubai Marina" before they book. A hotel that publishes quality local guides captures this upstream traffic before the booking intent crystallizes. Rankwell recommends 2 to 4 destination articles per month targeting informational queries with high conversion potential.',
      },
      {
        question: 'How can a hotel appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a hotel must accumulate web authority signals: presence on major OTAs, recent and positive reviews on Google and TripAdvisor, mentions in travel guides and hospitality press, and rich factual content on its own website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a hotel?',
        answer:
          'Local SEO targets "hotel + city" queries and relies on Google Business Profile, guest reviews, and citations on tourism directories. National SEO targets broader queries ("best spa hotels in the UK", "luxury beach resorts in the US") and requires high-authority editorial content. Rankwell combines both approaches based on the property\'s positioning and target clientele.',
      },
      {
        question: 'Are OTAs enough to fill a hotel?',
        answer:
          'OTAs like Booking.com and Expedia generate bookings, but with commissions of 15 to 25% per night. A well-optimized direct website allows the hotel to capture bookings without commission and control its brand image. Hotels that invest in SEO progressively reduce their OTA dependency. Rankwell helps hoteliers build this independent organic visibility through a GEO & SEO strategy that does not rely on aggregator platforms.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your hotel visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Spa', href: '/en/geo-seo-agency/sectors/spa' },
        { label: 'SEO Bar', href: '/en/geo-seo-agency/sectors/bar' },
        { label: 'SEO Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
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
      { label: 'Bar', href: '/en/geo-seo-agency/sectors/bar' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
      { label: 'Food Truck', href: '/en/geo-seo-agency/sectors/food-truck' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Hotel',
};

export default data;
