/**
 * DATA: Sector Page Restaurants (EN)
 * Route: /en/geo-seo-agency/sectors/restaurant
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
    slug: 'restaurant',
    title: 'GEO & SEO Agency for Restaurants - Rankwell',
    description:
      'Rankwell helps restaurants boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the restaurant industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Restaurants' },
    ],
    title: 'GEO & SEO for Restaurants: Google & AI Engine Visibility',
    subtitle:
      'Your restaurant needs to appear where hungry diners search: on Google Maps, in the Local Pack, and in ChatGPT or Perplexity responses. Our experts design GEO & SEO strategies tailored to the restaurant industry.',
    ctaText: 'Request a GEO & SEO audit for your restaurant',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for restaurants',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 90% of restaurant searches happen on mobile</strong> with immediate intent. The decision takes seconds: ratings, photos, distance. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the Google Business Profile matters more than the website itself.',
    constraints:
      '<strong class="text-secondary dark:text-accent">A venue with fewer than 4 stars on Google loses up to 70% of its clicks</strong>. Seasonal menus, weekly closures, and food photography create a constant need for updates that most restaurant owners struggle to manage.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Yelp, TripAdvisor, OpenTable</strong> (US), <strong class="text-secondary dark:text-accent">Zomato, Talabat</strong> (UAE) capture high-intent dining traffic and charge commissions of 15 to 30% per cover. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a restaurant stays invisible outside these intermediaries.',
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
    title: 'What your future diners search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'restaurants near me', volume: 7480000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'best restaurants near me', volume: 673000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'italian restaurant near me', volume: 450000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'restaurant reservations', volume: 165000, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'best brunch near me', volume: 135000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'fine dining near me', volume: 90500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how to get more restaurant reviews', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'restaurants near me', volume: 1830000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'best restaurants near me', volume: 201000, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'restaurant booking', volume: 49500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'indian restaurant near me', volume: 110000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'sunday lunch near me', volume: 74000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best restaurants london', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'michelin star restaurants near me', volume: 27100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'restaurants near me', volume: 301000, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'best restaurants in dubai', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'restaurants in abu dhabi', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'fine dining dubai', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'brunch dubai', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'restaurant deals dubai', volume: 8100, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'new restaurants dubai 2026', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "restaurants near me", "best restaurants near me", or "fine dining dubai" represent potential diners actively choosing where to eat. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your restaurant does not appear there, those customers book elsewhere.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for restaurants',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the unique demands of the restaurant industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the restaurant website: page architecture (menu, reservations, hours), mobile loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by cuisine type and service (lunch, dinner, brunch)',
          'Schema.org Restaurant and Menu markup',
          'Mobile performance and Core Web Vitals',
          'Crawl and indexation of menu/reservation pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the restaurant\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the restaurant\'s informational universe (guides, reviews, food press)',
          'Measurement of legitimacy and citability (mentions, awards, critic reviews)',
          'Evaluation of content factual density (menu, prices, hours, allergens)',
          'Competitive benchmark on local AI queries',
        ],
      },
      {
        title: 'Market study & restaurant keyword research',
        subtitle: 'Mapping of search queries by cuisine type, price range, and geographic area across US, UK, and UAE markets. Identification of low-competition opportunities.',
        items: [
          'Cuisine + city + occasion combinations ("italian restaurant downtown lunch")',
          'Analysis of queries asked to AI engines ("where to eat tonight in Dubai")',
          'Real search volumes by culinary specialty and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a user journey designed to convert visitors into reservations.',
        items: [
          'Homepage > menu page > reservation page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with cuisine specialties',
        ],
      },
      {
        title: 'Culinary content strategy',
        subtitle: 'Creation of content that showcases the chef\'s expertise and the restaurant\'s identity, written to be citable by LLMs.',
        items: [
          'Dedicated pages by service (brunch, private dining, catering, happy hour)',
          'Seasonal updates: new menu items, food events, wine pairings',
          'Self-sufficient factual sentences (chef background, sourcing, awards, labels)',
        ],
      },
      {
        title: 'Authority & restaurant link building',
        subtitle: 'Authority development through food guides, local press, and qualified restaurant directories.',
        items: [
          'Yelp, TripAdvisor, OpenTable, Resy (US/International)',
          'Michelin Guide, Harden\'s, Square Meal (UK/International)',
          'Local press features and partnerships with local producers and tourism boards',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the restaurant\'s Google Business Profile to capture "restaurant + city" and "restaurants near me" queries, and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Restaurant + secondary categories by cuisine (Italian, Japanese, Fine Dining)',
          'Review management and post-meal collection strategy (QR codes, follow-up emails)',
          'Professional photos of dishes, interior, and outdoor seating',
          'Updated hours, online menu, reservation link, attributes (patio, Wi-Fi, wheelchair accessible)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by local query, and reservations generated through the website.',
        items: [
          'Google positions by local keyword',
          'Organic traffic by cuisine type and geographic area',
          'GEO Score: visibility in AI engines',
          'Reservations and calls generated from the website and Google listing',
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
        description: 'Full diagnostic of your restaurant website: mobile speed, page architecture (menu, reservations, hours), Google indexation. Every blocking issue is documented with its fix.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on restaurant queries, benchmark against 3 to 5 local competitors, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Restaurant, Menu, FoodEstablishment, and FAQPage markup ready to integrate, with hours, prices, and reservation link. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of key pages (menu, chef, story), blog articles on recipes and events, FAQs, CMS or FTP integration, and page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from food guides, food blogs, local press, and directories (Yelp, TripAdvisor, OpenTable). Domain Rating tracking and new link reporting.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by page, organic traffic, reservations attributed to the SEO channel, and GEO Score evolution. Delivered monthly with adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your restaurant in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which Italian restaurant do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your restaurant does not appear in any cited source (food guides, review platforms, press), it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which Italian restaurant do you recommend in London?" or "best fine dining in New York?": the LLM cites 4 to 8 restaurants with factual data: Michelin stars, chef name, neighborhood, price range. Restaurants recommended are those with mentions across multiple sources: Michelin Guide, Google reviews, food press, TripAdvisor. A venue absent from these sources is never cited.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a good restaurant for a business dinner?": the LLM switches to a criteria guide (ambiance, wine list, location, service quality) without citing any specific restaurant. A restaurant that publishes this type of expert content on its own website can become the source the LLM references in its response.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "restaurants near me" or any geolocated query, <strong>ChatGPT activates Search mode with a Maps card</strong>. Restaurants with a complete Google Business Profile (precise category, 4.3+ rating, recent food photos, updated hours, and reservation link) appear directly in the AI response. Without available geolocation, the LLM redirects to Google Maps and booking platforms without added value.</p>',
    structuredData:
      '<p>For restaurants, the recommended schema.org types are: <code>Restaurant</code> (primary type), <code>FoodEstablishment</code>, <code>Menu</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Restaurant</code> markup allows Google and LLMs to precisely identify the cuisine type, price range, opening hours, and location of the establishment.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your restaurant\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content: menu, story, chef), Legitimacy & Citability (external trust signals: food guides, reviews, press), and Factual Density (richness of structured data and named entities: prices, labels, allergens).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for restaurants',
    items: [
      {
        question: 'How much does SEO cost for a restaurant?',
        answer:
          'The SEO budget for a restaurant depends on the geographic area and the number of locations. At Rankwell, SEO engagements for restaurants start from USD 1,000/month (or GBP 800/month) for a single venue in a mid-size city, and can reach USD 4,000-6,000/month for a multi-location group or a fine-dining restaurant in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from restaurant SEO?',
        answer:
          'Initial results typically appear between 2 and 4 months. Niche local queries (e.g., "Lebanese restaurant Austin" or "Sunday roast pub Shoreditch") rank faster than highly competitive terms ("best restaurants New York"). Google Business Profile optimization produces visible effects within the first weeks. Rankwell provides a realistic timeline based on the competitive analysis of your area.',
      },
      {
        question: 'Are Google reviews really that important for restaurant SEO?',
        answer:
          'Yes, online reviews are the most influential ranking factor for restaurants in Google\'s Local Pack. A venue with fewer than 4 stars and under 50 reviews loses up to 70% of its clicks compared to a higher-rated competitor. Rankwell implements a review collection strategy (QR codes at the table, post-visit email, personalized replies) and monitors your online reputation over time.',
      },
      {
        question: 'Does a restaurant need a blog to improve its rankings?',
        answer:
          'A blog is not essential for a restaurant, but regular content makes a significant difference: articles about seasonal ingredients, chef profiles, upcoming events, wine or cocktail pairings. These pages capture informational queries and demonstrate the chef\'s expertise, which strengthens AI citability. Rankwell recommends 1-2 posts per month targeting long-tail queries related to your culinary specialty.',
      },
      {
        question: 'How can a restaurant appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a restaurant must accumulate web authority signals: presence on food guides (Michelin, Yelp, TripAdvisor), mentions in local press, a Google rating above 4.3, and rich factual content on its website (menu, prices, chef, sourcing, awards). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a restaurant?',
        answer:
          'Local SEO targets "restaurant + cuisine + city" queries and relies on Google Business Profile, customer reviews, and local citations. This is the priority for 95% of restaurants. National SEO applies to chains or fine-dining restaurants attracting tourist clientele ("best Michelin star restaurants in the UK"). Rankwell adapts the strategy to your venue\'s catchment area.',
      },
      {
        question: 'Are Yelp, TripAdvisor, and delivery platforms enough to be visible?',
        answer:
          'Platforms like Yelp, TripAdvisor, and Uber Eats provide visibility, but at a high cost: commissions of 15 to 30% per cover or order, no control over your brand image, and total dependency on their algorithm. A well-optimized website allows your restaurant to receive direct reservations without commission, control your brand, and build a loyal audience. Rankwell helps restaurants build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your restaurant visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
        { label: 'SEO Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
        { label: 'SEO Bar', href: '/en/geo-seo-agency/sectors/bar' },
        { label: 'SEO Food Truck', href: '/en/geo-seo-agency/sectors/food-truck' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
        { label: 'Google Business Profile Optimization', href: '/en/glossary/optimisation-de-la-fiche-google-my-business-gmb' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
      { label: 'Bar', href: '/en/geo-seo-agency/sectors/bar' },
      { label: 'Food Truck', href: '/en/geo-seo-agency/sectors/food-truck' },
      { label: 'Wine Merchant', href: '/en/geo-seo-agency/sectors/wine-merchant' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/florist' },
      { label: 'Campsite', href: '/en/geo-seo-agency/sectors/campsite' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Restaurant',
};

export default data;
