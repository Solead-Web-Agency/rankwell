/**
 * DATA: Sector Page Caterers (EN)
 * Route: /en/geo-seo-agency/sectors/caterer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 * LLM test: ChatGPT anonymous mode, March 2026 (see rapport-test-traiteur-en.md)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'caterer',
    title: 'GEO & SEO Agency for Caterers - Rankwell',
    description:
      'Rankwell helps caterers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the catering industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Caterers' },
    ],
    title: 'GEO & SEO for Caterers: Google & AI Engine Visibility',
    subtitle:
      'Weddings, corporate events, cocktail receptions: your future clients compare caterers on Google and ask AI engines for recommendations. Our experts design GEO & SEO strategies that position your catering business where decisions are made.',
    ctaText: 'Request a GEO & SEO audit for your catering business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for caterers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of catering searches include a geographic or event-type qualifier</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market with strong seasonality: May through September concentrates <strong class="text-secondary dark:text-accent">over 60% of wedding catering quote requests</strong>, while corporate demand peaks in Q4.',
    constraints:
      '<strong class="text-secondary dark:text-accent">The decision cycle is long (2 to 8 months before the event)</strong>: prospects visit 4 to 6 websites before requesting a quote. Caterers must convince through visual content and social proof. Publishing in January captures summer wedding prospects.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">The Knot, WeddingWire, Zola</strong> (US), <strong class="text-secondary dark:text-accent">Hitched, Bark, Bridebook</strong> (UK), and <strong class="text-secondary dark:text-accent">Time Out</strong> (UAE) capture most high-intent catering traffic. The top Google results are marketplace listings, not independent caterers. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a caterer stays buried behind these platforms.',
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
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'caterer near me', volume: 33100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'wedding caterer', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'catering near me', volume: 90500, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'corporate catering', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'wedding catering cost per person', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best caterers near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'cocktail party catering', volume: 2900, intent: 'commerciale', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'wedding caterers near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'catering companies near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'corporate catering London', volume: 1600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'hog roast catering', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'event catering', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'wedding catering cost per head UK', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'buffet catering near me', volume: 880, intent: 'locale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'catering companies in Dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'wedding catering Dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'corporate catering Dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'catering services Abu Dhabi', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'event catering UAE', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'party catering Dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'halal catering Dubai', volume: 480, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "catering near me", "wedding caterer", or "catering companies in Dubai" represent potential clients actively seeking a caterer for their event. The majority click on the top 3 results or follow the recommendation of an AI engine. If your business does not appear there, those clients request quotes from your competitors.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for caterers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the seasonal dynamics and visual demands of the catering industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the catering website: page architecture, loading speed, and technical factors blocking indexation. Special attention to image galleries (file weight, lazy loading, alt tags).',
        items: [
          'Page structure by service type (wedding, corporate, cocktail)',
          'Schema.org FoodEstablishment and CateringService markup',
          'Performance and Core Web Vitals (high-resolution image optimization)',
          'Crawl and indexation of seasonal menu pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the caterer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the catering business\'s informational universe',
          'Measurement of legitimacy and citability across LLMs',
          'Evaluation of content factual density (menus, pricing, past events)',
          'Competitive benchmark on AI event-related queries',
        ],
      },
      {
        title: 'Market study & event keyword research',
        subtitle: 'Mapping of search queries by event type and geographic area across US, UK, and UAE markets. Identification of low-competition, high-conversion opportunities.',
        items: [
          'Event type + city combinations ("wedding caterer Austin", "corporate catering Manchester")',
          'Analysis of queries asked to AI engines about caterers',
          'Real search volumes by service type and season',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the user journey: from discovery to quote request.',
        items: [
          'Service page > portfolio gallery > quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by event type',
        ],
      },
      {
        title: 'Event-focused content strategy',
        subtitle: 'Creation of educational content showcasing the caterer\'s expertise, written to be citable by LLMs: selection guides, pricing breakdowns, past event showcases.',
        items: [
          'Practical guides answering Google People Also Ask ("how to choose a wedding caterer")',
          'Self-sufficient factual sentences with verifiable data (price ranges per head, guest capacity)',
          'Seasonal content published months ahead (January publishing for summer wedding season)',
        ],
      },
      {
        title: 'Authority & event industry link building',
        subtitle: 'Authority development through wedding and event platforms and partnerships with industry stakeholders.',
        items: [
          'The Knot, WeddingWire, Zola, Thumbtack (US)',
          'Hitched, Bark, Bridebook (UK)',
          'Partnerships with venues, wedding planners, photographers, and florists',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the caterer\'s Google Business Profile to capture "caterer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Caterer + secondary categories (Wedding Venue, Catering Service)',
          'Review management and post-event collection strategy',
          'Photos of buffets, plated dinners, and styled events with geolocation',
          'Consistent NAP citations across event directories and wedding platforms',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by event type, and quote requests generated through the website.',
        items: [
          'Google positions by event-related keyword',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Quote requests and conversions by channel',
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
        description: 'Full diagnostic of your catering website: page architecture by service type (wedding, corporate, cocktail), image loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests in AI engines on catering queries, benchmark against 3 to 5 local competitors, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'FoodEstablishment, CateringService, FAQPage markup ready to integrate, with service area, price ranges, and menu details. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (wedding, corporate, cocktail), event articles, and FAQs. Direct CMS or FTP integration, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from wedding platforms (The Knot, WeddingWire, Zola), event blogs, local press, and industry directories. Domain Rating tracking and new link reporting.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by event type, organic traffic, quote requests attributed to the SEO channel, and GEO Score evolution. Delivered monthly with adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your catering business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which caterer do you recommend for a wedding in New York?", the LLM compiles information from across the web to formulate its response. If your catering business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which caterer do you recommend for a wedding in New York?": the LLM cites 8 to 11 caterers by name, organized by category (high-end full-service, boutique creative, couple favorites). Each entry includes a description and, when available, a direct link to the caterer\'s website. The LLM sources its recommendations from wedding platforms (Zola, The Knot) and the caterers\' own websites. Caterers absent from these sources are never cited.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a good wedding caterer?": the LLM generates a structured guide with 6 to 8 criteria (tasting session, menu flexibility, service style, dietary accommodations, insurance, references) without citing any specific caterer. A caterer that publishes this type of expert content on its own website can become the source the LLM references.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does wedding catering cost per person?": the LLM gives detailed per-person ranges by tier and service style. Budget: USD 25-40 (buffet, food trucks). Mid-range: USD 50-100. Luxury: USD 100-200+. It breaks down by style (buffet USD 40-65, plated dinner USD 65-120+, cocktail USD 35-55) and by region (NYC/LA USD 100-200+, smaller cities USD 45-70). Sites with transparent, detailed pricing grids are cited as sources.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "caterer near me for an event", <strong>ChatGPT activates Search mode with a Maps card</strong>. Caterers with a complete Google Business Profile (category Caterer, recent event photos, reviews above 4.2, service area listed) appear directly in the AI response.</p>',
    structuredData:
      '<p>For caterers, the recommended schema.org types are: <code>FoodEstablishment</code> (primary type), <code>CateringService</code> (recognized by Google), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>FoodEstablishment</code> markup with the properties <code>servesCuisine</code>, <code>priceRange</code>, and <code>areaServed</code> allows Google and LLMs to identify the specialization, price tier, and service area of the caterer.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your catering business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content about your services), Legitimacy & Citability (external trust signals: reviews, mentions, partnerships), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for caterers',
    items: [
      {
        question: 'How much does SEO cost for a catering business?',
        answer:
          'The SEO budget for a caterer depends on the geographic area targeted and the number of service types to rank for (wedding, corporate, cocktail). At Rankwell, SEO engagements for caterers start from USD 1,500/month (or GBP 1,200/month) for a single city and one event type, and can reach USD 4,000-6,000/month for a multi-service caterer covering several metro areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from catering SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "wedding caterer Austin" or "corporate catering Manchester") rank faster than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis and adapted to the seasonal peaks of the catering industry.',
      },
      {
        question: 'Does seasonality affect catering SEO?',
        answer:
          'Seasonality is a defining factor for caterers: over 60% of "wedding caterer" searches happen between January and June, for events planned between May and September. Corporate catering peaks in Q4. Rankwell anticipates these surges by publishing strategic content 3 to 6 months ahead of peak season, capturing prospects at the start of their research.',
      },
      {
        question: 'Does a caterer need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real prospect questions: "how to choose a wedding caterer", "catering cost per person", "buffet vs plated dinner". Rankwell recommends 2 to 4 articles per month targeting long-tail informational queries, with verifiable data and photos of past events to maximize AI citability.',
      },
      {
        question: 'How can a caterer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a caterer must accumulate web authority signals: presence on wedding platforms (The Knot, WeddingWire, Zola in the US; Hitched, Bark in the UK), recent and numerous Google reviews, mentions in local press, and rich factual content on its website (detailed menus, transparent pricing grids, event portfolio). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a caterer?',
        answer:
          'Local SEO targets "caterer + event type + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best wedding caterer") and requires high-authority educational content. Rankwell combines both approaches based on the caterer\'s service area and target clientele.',
      },
      {
        question: 'Are The Knot, WeddingWire, and event directories enough to be visible?',
        answer:
          'Wedding platforms like The Knot and WeddingWire provide useful initial visibility, but they create dependency: the caterer is just one profile among hundreds, subject to an opaque ranking algorithm and lead commissions. A well-optimized website allows the caterer to control its brand image, convert directly without intermediaries, and build lasting authority. Rankwell helps caterers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your catering business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
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
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/florist' },
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
    ],
  },

  // Schema.org primary type
  schemaType: 'FoodEstablishment',
};

export default data;
