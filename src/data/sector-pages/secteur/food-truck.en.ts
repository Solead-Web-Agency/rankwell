/**
 * DATA: Sector Page Food Trucks (EN)
 * Route: /en/geo-seo-agency/sectors/food-truck
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs seed "food truck" + industry sources (Roaming Hunger, StreetDots), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'food-truck',
    title: 'GEO & SEO Agency for Food Trucks - Rankwell',
    description:
      'Rankwell helps food trucks boost their Google Maps rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the mobile food business.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Food Trucks' },
    ],
    title: 'GEO & SEO for Food Trucks: Google Maps & AI Engine Visibility',
    subtitle:
      'Your food truck needs to appear where hungry customers search: on Google Maps, in local results, and in ChatGPT or Perplexity responses. Our experts design GEO & SEO strategies adapted to the mobility and seasonality of the mobile food business.',
    ctaText: 'Request a GEO & SEO audit for your food truck',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for food trucks',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Food truck searches are hyper-local and immediate</strong>: customers want to eat within 30 minutes. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market driven by Google Maps. The truck\'s GPS location changes daily, making conventional signals like fixed address and consistent NAP citations unreliable.',
    constraints:
      '<strong class="text-secondary dark:text-accent">A food truck changes location several times a week</strong>, breaking the usual local SEO playbook. SEO must adapt to rotating pitches, variable hours, and strong seasonality (summer festivals, holiday markets). Vending permits vary by city (US), council (UK), and municipality (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Roaming Hunger</strong> (US, 17,900+ trucks), <strong class="text-secondary dark:text-accent">StreetDots</strong> (UK, 2,700+ traders), and <strong class="text-secondary dark:text-accent">event platforms</strong> (Eventbrite, The Knot) dominate "food truck catering" queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a food truck remains dependent on Instagram and word of mouth.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
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
    title: 'What your future customers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'food truck near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'food truck catering', volume: 18100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'food truck wedding', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'food truck for events', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'food truck rental', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'food truck lunch near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does food truck catering cost', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'food truck near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'food truck hire', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'street food truck', volume: 2400, intent: 'mixte', difficulty: 'faible' },
        { keyword: 'food truck hire for party', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'food truck wedding', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'mobile catering near me', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'food truck festival', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'food truck dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'food truck near me', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'street food dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'food truck license dubai', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'food truck catering dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'food truck abu dhabi', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'food truck business dubai', volume: 590, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 110,000 searches for "food truck near me" in the US alone represent hungry customers looking for a meal right now. Event queries like "food truck wedding" and "food truck catering" signal high-value bookings worth USD 1,500 to 5,000 each. In the UK, "food truck hire" and "mobile catering" drive event-based revenue. In the UAE, Dubai food truck searches reflect a growing street food scene. If your food truck does not appear in the top 3 Maps results or in an AI engine response, those customers order from a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for food trucks',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the mobility, seasonality, and event-driven nature of the food truck business across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Analysis of the food truck website and social media presence: page architecture, mobile speed, and platform coverage.',
        items: [
          'Page structure by cuisine type and service area',
          'Schema.org FoodEstablishment and FoodService markup',
          'Mobile performance (Core Web Vitals on smartphone)',
          'Crawl, indexation, and orphan page detection',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the food truck\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the food truck\'s informational universe',
          'Measurement of legitimacy and citability (reviews, press, directory presence)',
          'Evaluation of content factual density (menus, pricing, certifications)',
          'Competitive benchmark on local AI queries',
        ],
      },
      {
        title: 'Market study & food truck keyword research',
        subtitle: 'Mapping of search queries by cuisine type, geography, and event type across US, UK, and UAE markets. Identification of low-competition opportunities.',
        items: [
          'Cuisine + city combinations with high potential ("taco truck Austin", "burger van London")',
          'Event queries (wedding, corporate, festival, birthday)',
          'Analysis of queries asked to AI engines',
          'Real search volumes by city and season',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a user journey designed for food truck customers: find the menu, check the location, book for an event.',
        items: [
          'Menu page > service area page > booking/contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by city served',
        ],
      },
      {
        title: 'Food truck content strategy',
        subtitle: 'Creation of content that demonstrates culinary expertise and event capability, written to be citable by LLMs.',
        items: [
          'Event service pages (wedding, corporate, festival, birthday party)',
          'Factual content with pricing data (per person, per event, per package)',
          'Behind-the-scenes blog or recipe posts to reinforce authenticity',
        ],
      },
      {
        title: 'Authority & food truck link building',
        subtitle: 'Authority development through event directories, food blogs, and local press.',
        items: [
          'Roaming Hunger, FoodTrucksIn, Truckster (US)',
          'StreetDots, streetfoodapp.com (UK)',
          'Local press features, food blogger partnerships, and event organizer collaborations',
        ],
      },
      {
        title: 'Google Business Profile & mobile local SEO',
        subtitle: 'Optimization of the food truck\'s Google Business Profile to capture "food truck near me" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Food Truck + secondary categories by cuisine specialty',
          'Regular location updates via GBP posts (weekly pitch schedule)',
          'Fresh photos of the truck, dishes, and crew updated monthly',
          'Review collection strategy after every event and regular service day',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by city, event bookings, and GEO Score.',
        items: [
          'Google positions by keyword and city',
          'Organic traffic by service type (catering, daily lunch, events)',
          'GEO Score: visibility in AI engines',
          'Booking requests and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your food truck website and social presence: mobile speed, page architecture (menu, locations, events), Google indexation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on food truck queries, benchmark against 3 to 5 local competitors, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'FoodEstablishment, FoodService, FAQPage, and BreadcrumbList markup ready to integrate, with service areas and menu data. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (wedding, corporate, festival), location schedule pages, blog articles, and FAQs. Direct CMS or FTP integration, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from food truck directories (Roaming Hunger, StreetDots), food blogs, local press, and event platforms. Domain Rating tracking and new link reporting.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by page and keyword, organic traffic by city and event type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your food truck in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which food truck do you recommend in Austin for a corporate lunch?", the LLM starts listing specific trucks by name with cuisine type and suitability for the event format. If your food truck does not appear in any source the LLM can reference (Google Business Profile, Roaming Hunger, food blogs, local press), it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which food truck do you recommend in Austin for a corporate lunch?": ChatGPT provides a list of named food trucks categorized by cuisine type and corporate suitability. Trucks with detailed websites (menus, pricing, event packages), strong Google reviews, and presence on Roaming Hunger or Yelp are cited. A food truck absent from these sources is never recommended.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a food truck for a wedding?": the LLM generates a structured guide with 6 to 8 selection criteria (cuisine style, guest capacity, autonomous equipment, insurance, dietary options, references) without citing any specific food truck. A truck that publishes this type of expert content on its own website can become the source the LLM references.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does food truck catering cost per person?": the LLM gives detailed price ranges (USD 10-15 casual, USD 15-25 mid-range, USD 25-45+ premium) with breakdown of what is included (service staff, setup) and what is not (gratuity, fuel surcharge, generator). Sites publishing transparent pricing grids by guest count and package type have the highest chance of being extracted as a source.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "food truck near me" or "food truck lunch downtown", <strong>ChatGPT activates Search mode with a Maps card</strong>. Food trucks with a complete Google Business Profile (category Food Truck, recent photos of the truck and dishes, customer reviews, updated hours and locations via GBP posts) appear directly in the AI response.</p>',
    structuredData:
      '<p>For food trucks, the recommended schema.org types are: <code>FoodEstablishment</code> (primary type), <code>FoodService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>FoodEstablishment</code> markup allows Google and LLMs to precisely identify the cuisine type, service area, hours, and customer reviews of the food truck.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your food truck\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for food trucks',
    items: [
      {
        question: 'How much does SEO cost for a food truck?',
        answer:
          'The SEO budget for a food truck depends on the number of cities served and the types of events offered. At Rankwell, SEO engagements for food trucks start from USD 800/month (or GBP 600/month) for a single service area, and can reach USD 2,000-3,000/month for a multi-city food truck with event catering (weddings, corporate, festivals).',
      },
      {
        question: 'How long does it take to see results from food truck SEO?',
        answer:
          'Initial results typically appear between 2 and 4 months. Niche local queries (e.g., "taco truck Austin catering" or "burger van hire London") rank faster than nationally competitive terms. Google Business Profile optimization produces visible effects within the first weeks. Rankwell provides a realistic timeline based on the competitive analysis of your service area.',
      },
      {
        question: 'How do you manage local SEO when the food truck changes location?',
        answer:
          'This is the core challenge of food truck SEO. Rankwell implements a strategy combining Google Business Profile posts (weekly location schedule updates), service area pages on the website (by city or neighborhood served), and dynamic hours management. The GBP listing remains the main anchor, even if the physical address is not fixed.',
      },
      {
        question: 'Does a food truck need a website when it already has Instagram and Facebook?',
        answer:
          'Social media is essential for a food truck, but it does not replace a website for Google rankings and AI visibility. A dedicated website allows you to rank for event queries ("food truck wedding", "food truck corporate catering"), publish transparent pricing, and control your brand. Rankwell recommends a lean website with service pages, menu, and a booking form.',
      },
      {
        question: 'How can a food truck appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a food truck must accumulate web authority signals: a complete Google Business Profile with recent reviews, presence on food truck directories (Roaming Hunger in the US, StreetDots in the UK), local press mentions, and factual content on its website (pricing, service areas, specialties). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a food truck?',
        answer:
          'Local SEO targets "food truck + city" and "food truck near me" queries through Google Business Profile, customer reviews, and service area pages. National SEO targets generic queries ("food truck catering", "food truck wedding") and requires educational content about event services. Rankwell combines both approaches based on the food truck\'s strategy and geographic coverage.',
      },
      {
        question: 'Are platforms like Roaming Hunger and StreetDots enough to be visible?',
        answer:
          'Food truck platforms like Roaming Hunger (US) and StreetDots (UK) provide initial visibility, but they create dependency: your truck is one profile among thousands of vendors. A well-optimized website allows you to convert directly, publish transparent pricing, and build lasting authority that platforms cannot revoke. Rankwell helps food trucks build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your food truck visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
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
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacy' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
    ],
  },

  // Schema.org primary type
  schemaType: 'FoodEstablishment',
};

export default data;
