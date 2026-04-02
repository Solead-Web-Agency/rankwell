/**
 * DATA: Sector Page Bars (EN)
 * Route: /en/geo-seo-agency/sectors/bar
 *
 * CHR sector: bars, cocktail bars, wine bars, speakeasy, rooftops.
 * Adapted for US / UK / UAE markets.
 * Keyword data: Ahrefs + industry sources (KRG Hospitality, SERPs Growth, TimeOut), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bar',
    title: 'GEO & SEO Agency for Bars - Rankwell',
    description:
      'Rankwell helps bars boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for cocktail bars, wine bars, rooftops, and speakeasies.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Bars' },
    ],
    title: 'GEO & SEO for Bars: Google & AI Engine Visibility',
    subtitle:
      'Your bar needs to appear where potential guests search: on Google Maps, in local rankings, and in ChatGPT or Perplexity responses. Our experts design GEO & SEO strategies tailored to cocktail bars, wine bars, rooftops, and speakeasies.',
    ctaText: 'Request a GEO & SEO audit for your bar',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for bars',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of bar-related searches are geolocated</strong>. Guests search on mobile, often the same evening, with immediate intent. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens in seconds between the top 3 Local Pack results or an AI engine recommendation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Liquor licensing and alcohol advertising regulations</strong> restrict online promotion: TTB and state ABC boards (US), ASA and Portman Group (UK), and a full advertising ban in the UAE. Seasonality is strong: rooftops in summer, speakeasies in winter, events year-round.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Yelp, Google Maps</strong> (US), <strong class="text-secondary dark:text-accent">DesignMyNight, TimeOut</strong> (UK), <strong class="text-secondary dark:text-accent">Zomato</strong> (UAE), and the <strong class="text-secondary dark:text-accent">World\'s 50 Best Bars</strong> rankings capture most "best bar" and "bar + city" traffic. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent bar stays invisible against these aggregators.',
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
    title: 'What your future guests search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'bars near me', volume: 1220000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'cocktail bar near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'rooftop bar near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'sports bar near me', volume: 165000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'wine bar near me', volume: 60500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'speakeasy bar near me', volume: 27100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'happy hour near me', volume: 135000, intent: 'locale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'bars near me', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'cocktail bars london', volume: 22200, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'rooftop bar london', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'cocktail bar near me', volume: 33100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bars in manchester', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'wine bar near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'karaoke bar near me', volume: 9900, intent: 'locale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'bars in dubai', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'rooftop bar dubai', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best bars in dubai', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'happy hour dubai', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'ladies night dubai', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bars in abu dhabi', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'beach bar dubai', volume: 4400, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over a million searches like "bars near me", "cocktail bar near me", or "rooftop bar dubai" represent potential guests actively choosing where to go tonight. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your bar does not appear there, those guests walk into a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for bars',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints and seasonal dynamics of the bar industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the bar website: page architecture (menu, events, reservations), mobile loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by universe (cocktails, wines, events, private hire)',
          'Schema.org BarOrPub and FoodEstablishment markup',
          'Mobile performance and Core Web Vitals',
          'Crawl and indexation of event pages and seasonal content',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the bar\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the bar\'s informational universe (press mentions, rankings, reviews)',
          'Measurement of legitimacy and citability by LLMs',
          'Evaluation of content factual density (menu, prices, hours, events)',
          'Competitive benchmark on local AI queries',
        ],
      },
      {
        title: 'Market study & bar keyword research',
        subtitle: 'Mapping of search queries by bar type (cocktail, wine, rooftop, speakeasy) and geographic area across US, UK, and UAE markets. Identification of low-competition opportunities.',
        items: [
          'Bar type + city + occasion combinations with low competition',
          'Analysis of queries asked to AI engines ("best bar for a date night in...")',
          'Real search volumes by bar specialty and neighborhood',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a user journey designed to convert the visit into a reservation or a spontaneous walk-in.',
        items: [
          'Homepage > menu/ambiance page > reservation/contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with neighborhood and bar type',
        ],
      },
      {
        title: 'Bar content strategy',
        subtitle: 'Creation of content that showcases the bar\'s identity and mixology expertise while respecting alcohol advertising regulations in each market.',
        items: [
          'Articles on mixology trends, spirit pairings, music programming',
          'Event pages optimized for search (tastings, DJ nights, private hire)',
          'Self-sufficient factual sentences with verifiable data for AI citability',
        ],
      },
      {
        title: 'Authority & bar link building',
        subtitle: 'Authority development through local guides, lifestyle press, and recognized bar rankings.',
        items: [
          'Yelp, Google Maps, OpenTable, Resy (US)',
          'DesignMyNight, TimeOut, Square Meal (UK)',
          'World\'s 50 Best Bars mentions, local press partnerships, food & drink blog outreach',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the bar\'s Google Business Profile to capture "bar + city" and "bars near me" queries, and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Bar (or Cocktail Bar, Wine Bar) + secondary categories',
          'Review management and collection strategy (QR codes on table, receipt prompts)',
          'Ambiance photos, menu, terrace/rooftop views, hours, and regular posts',
          'Consistent NAP citations across Yelp, TripAdvisor, DesignMyNight, Zomato, and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by query type, and conversions (reservations, calls, direction requests).',
        items: [
          'Google positions by keyword (bar + city, bar + type)',
          'Organic traffic by source and page',
          'GEO Score: visibility in AI engines',
          'Conversions: online reservations, direction clicks, phone calls',
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
        description: 'Full diagnostic of your bar website: mobile speed, page architecture (menu, events, reservations), Google indexation. Every blocking issue is documented with its fix.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on bar and cocktail queries, benchmark against 3 to 5 local competitors, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'BarOrPub, FoodEstablishment, FAQPage, and BreadcrumbList markup ready to integrate, with hours, menu, events, and price range. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of key pages (cocktail menu, events, private hire), articles on mixology trends and seasonal programming, FAQs, CMS or FTP integration, and page templates if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from local guides (TimeOut, DesignMyNight, Yelp), cocktail blogs, lifestyle press, and bar ranking lists. Domain Rating tracking and new link reporting.',
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
    title: 'AI Visibility: your bar in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which cocktail bar do you recommend in London?", the LLM compiles information from bar rankings, Google reviews, and local guides to formulate its response. If your bar does not appear in any of these sources, it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which cocktail bar do you recommend in New York?" or "best rooftop bar in Dubai?": the LLM cites 5 to 8 named venues with neighborhood, specialty (craft cocktails, natural wines, speakeasy), and price range. Bars cited consistently appear in public rankings (World\'s 50 Best Bars, TimeOut, DesignMyNight) and hold a Google rating above 4.3.</p><h4>Informational queries</h4><p>"How to choose a good bar for a date night?" or "what is a speakeasy bar?": the LLM generates a structured guide with 5 to 7 criteria (ambiance, drink menu, price range, location, reviews, music). No specific venue is named. A bar publishing this type of expert content on its website can be extracted as a reference source.</p><h4>Pricing queries</h4><p>"How much do cocktails cost in London?" or "average drink prices at bars in Dubai": the LLM provides segmented price ranges: GBP 10-14 for standard bars, GBP 14-18 for cocktail bars, GBP 16-22 for premium speakeasies in the UK; USD 14-18 for craft cocktail bars in the US; AED 50-80 for premium venues in the UAE. Sites displaying their menu with explicit prices have the highest chance of being cited as a source.</p><h4>Local and Maps queries</h4><p>On "bars near me open tonight" or "cocktail bar open late near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Bars with a complete Google Business Profile (up-to-date hours, recent ambiance photos, fresh reviews) appear directly in the AI response.</p>',
    structuredData:
      '<p>For bars, the recommended schema.org types are: <code>BarOrPub</code> (primary type), <code>FoodEstablishment</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>BarOrPub</code> markup allows Google and LLMs to precisely identify the venue type, location, opening hours, price range, and customer reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your bar\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence in guides, rankings, and press mentions), Legitimacy & Citability (external trust signals: reviews, backlinks, directory citations), and Factual Density (richness of structured data and named entities on your website).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for bars',
    items: [
      {
        question: 'How much does SEO cost for a bar?',
        answer:
          'The SEO budget for a bar depends on the geographic area, venue type, and local competition. At Rankwell, SEO engagements for bars start from USD 1,000/month (or GBP 800/month) for a single venue in a mid-size city, and can reach USD 3,500-5,000/month for a high-end cocktail bar or rooftop in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from bar SEO?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "wine bar Shoreditch" or "speakeasy bar Austin") rank faster than highly competitive generic terms ("bars near me"). Google Business Profile optimization produces visible effects within the first weeks. Rankwell provides a realistic timeline based on the competitive analysis of your area.',
      },
      {
        question: 'Is SEO compatible with alcohol advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with alcohol regulations, provided the content is adapted to each market. In the US, the TTB and state ABC boards regulate advertising claims, but informational content about ambiance and experience is permitted. In the UK, ASA and Portman Group rules prohibit encouraging irresponsible drinking. In the UAE, alcohol advertising is banned, but venue listings and factual content (hours, location, cuisine) are allowed on licensed platforms. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a bar need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when well targeted. Articles should answer real queries: seasonal cocktail trends, best neighborhoods for a night out, how to organize a private event. These pages capture informational searches and demonstrate expertise, strengthening AI citability. Rankwell recommends 2 to 4 articles per month targeting long-tail queries related to your bar specialty and location.',
      },
      {
        question: 'How can a bar appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a bar must accumulate web authority signals: presence in local guides (TimeOut, DesignMyNight, Yelp), mentions in bar rankings (World\'s 50 Best Bars, local "best of" lists), an optimized Google Business Profile with recent reviews, and rich factual content on its website (menu, prices, hours, events). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a bar?',
        answer:
          'Local SEO targets "bar + neighborhood/city" and "bars near me" queries, relying on Google Business Profile, customer reviews, and local citations. This is the priority for the vast majority of bars. National SEO applies to destination bars or groups with multiple venues ("best cocktail bars in the UK"). Rankwell combines both approaches based on the venue\'s positioning and ambition.',
      },
      {
        question: 'Are Yelp, TripAdvisor, and listing platforms enough to be visible?',
        answer:
          'Platforms like Yelp, TripAdvisor, and Google Maps provide initial visibility, but they create dependency: your bar is just one profile among thousands. A well-optimized website allows you to control your brand, present your menu and events, and build lasting authority that platforms cannot revoke. Rankwell helps bars build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your bar visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
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
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacy' },
    ],
  },

  // Schema.org primary type
  schemaType: 'BarOrPub',
};

export default data;
