/**
 * DATA: Sector Page Spas (EN)
 * Route: /en/geo-seo-agency/sectors/spa
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs Keywords Explorer + KeySearch + Clicks.so, March 2026
 * LLM auto-test: ChatGPT (anonymous mode), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'spa',
    title: 'GEO & SEO Agency for Spas - Rankwell',
    description:
      'Rankwell helps spas and wellness centres boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the spa and wellness industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Spas' },
    ],
    title: 'GEO & SEO for Spas: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for their next treatment on Google and in ChatGPT responses. Our experts design GEO & SEO strategies tailored to the spa and wellness industry, whether you run a day spa, resort spa, or wellness centre.',
    ctaText: 'Request a GEO & SEO audit for your spa',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for spas',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of spa queries are geolocated</strong>. With <strong class="text-secondary dark:text-accent">823,000 monthly searches</strong> for "spa near me" in the US alone, clients choose within driving distance on mobile. The Google Local Pack and AI engine responses determine how many new bookings you receive.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Seasonality heavily impacts spa search traffic</strong>: searches increase by 40 to 60% between October and February, then drop in summer. Reviews below 4.3 stars cost local visibility. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must factor in these patterns, hygiene standards, and practitioner certifications.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Mindbody, Vagaro, Groupon</strong> (US), <strong class="text-secondary dark:text-accent">Treatwell, Fresha, SpaSeekers</strong> (UK), and <strong class="text-secondary dark:text-accent">Tripadvisor</strong> (UAE) dominate transactional wellness queries, aggregate reviews, and charge commissions. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a spa remains dependent on these intermediaries.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s local pack.',
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
        { keyword: 'spa near me', volume: 823000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'day spa near me', volume: 60500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'couples massage near me', volume: 49500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'medical spa near me', volume: 27800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'luxury spa', volume: 20100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'spa packages', volume: 18100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how much does a spa day cost', volume: 8100, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'spa near me', volume: 110000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'spa breaks', volume: 74000, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'spa day near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'day spa', volume: 22200, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'wellness centre near me', volume: 6600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'spa hotel UK', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'couples spa day', volume: 3600, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'spa dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best spa in dubai', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'luxury spa dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'couples spa dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'spa abu dhabi', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'spa treatments dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'spa deals dubai', volume: 880, intent: 'transactionnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 823,000 searches for "spa near me" in the US alone represent potential clients ready to book a treatment. Combined with "spa breaks" in the UK (74,000/month) and "spa dubai" (12,100/month), the wellness sector generates massive local search demand across all three markets. The majority of clients click on the top 3 results or follow the recommendation of an AI engine. If your spa does not appear there, those clients book with a competitor or through a booking platform that takes a commission.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for spas',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the seasonal and competitive dynamics of the spa and wellness industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of your spa website architecture, loading speed, and technical factors blocking indexation of treatment and booking pages.',
        items: [
          'Page structure by treatment type (massage, facial, body scrub, hydrotherapy)',
          'Schema.org DaySpa and HealthAndBeautyBusiness markup',
          'Performance and Core Web Vitals on mobile',
          'Crawl and indexation of booking and pricing pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your spa\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the spa\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of wellness content factual density',
          'Competitive benchmark on AI spa queries',
        ],
      },
      {
        title: 'Market study & wellness keyword research',
        subtitle: 'Mapping of search queries by treatment type, format (couples, day package, resort), and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Treatment + city combinations with lower competition',
          'Analysis of spa queries asked to AI engines',
          'Real search volumes by treatment category and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the booking journey and Google crawl efficiency.',
        items: [
          'Treatment category page > individual treatment page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization per treatment',
        ],
      },
      {
        title: 'Wellness content strategy',
        subtitle: 'Creation of educational content demonstrating your spa\'s expertise, written to be citable by LLMs and to answer common client questions.',
        items: [
          'Comparative guides (day spa vs resort spa, hammam vs sauna, hot stone vs Swedish)',
          'Self-sufficient factual sentences with pricing data and treatment durations',
          'FAQs answering Google People Also Ask on treatments and costs',
        ],
      },
      {
        title: 'Authority & wellness link building',
        subtitle: 'Authority development through qualified wellness directories and specialized lifestyle publications.',
        items: [
          'Mindbody, Vagaro, Yelp, Groupon (US)',
          'Treatwell, Fresha, SpaSeekers, Good Spa Guide (UK)',
          'Lifestyle press, tourism boards, and hotel partnership features',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "spa + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Day Spa + secondary categories (Massage, Facial, Wellness Centre)',
          'Client review management and post-treatment collection strategy',
          'Photos of treatment rooms, relaxation areas, facilities, and signature treatments',
          'Consistent NAP citations across wellness directories (Mindbody, Treatwell, Tripadvisor)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by treatment page, and bookings generated.',
        items: [
          'Google positions by spa keyword',
          'Organic traffic by treatment category',
          'GEO Score: visibility in AI engines',
          'Online bookings and contact requests',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your spa manager, marketing team, or owner can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your spa website: page architecture by treatment type, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your spa in ChatGPT, Perplexity, and Gemini on your target wellness queries. Benchmark against 3 to 5 competing spas and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'DaySpa, HealthAndBeautyBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your treatment types and pricing. Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of treatment pages (massage, facial, body treatments, hydrotherapy), wellness guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from wellness directories (Mindbody, Treatwell, SpaSeekers), lifestyle blogs, and local press. Tracking of links obtained and Domain Rating progression of your spa.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by treatment page and local keyword, organic traffic by wellness category, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your spa in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which spa do you recommend in New York for a couples massage?", the LLM compiles information from across the web to formulate its response. If your spa does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: "best spa in New York for couples", "spa near me open Saturday"</h4>' +
      '<p>ChatGPT with Search mode activated names specific spas pulled from Google Business Profile data, displaying spa names, ratings (4.5 to 5.0 stars), and categories (Day Spa, Massage Spa). In our testing, 7 named spas appeared for a New York couples massage query, organized by category: luxury hotel spas, highly rated day spas, and private/mobile options. Spas with a complete Google Business Profile (DaySpa category, recent reviews, photos of facilities) and a website detailing couples packages appear directly in the AI response.</p>' +
      '<h4>Pricing queries: "how much does a spa day cost in the US?", "spa treatment prices UK"</h4>' +
      '<p>The LLM provides detailed pricing ranges by tier: basic spa visit USD 50 to USD 150, mid-range spa day USD 120 to USD 350, luxury resort spa USD 300 to USD 800+. It cites pricing comparison websites as sources and breaks down what is included (treatments, facility access, robes) versus extras (tips 15-20%, taxes, premium add-ons). Spas publishing transparent, up-to-date pricing grids on their websites have the highest chance of being extracted as a cited source.</p>' +
      '<h4>Informational queries: "how to choose a good spa?", "day spa vs resort spa"</h4>' +
      '<p>The LLM generates a structured guide with 6 to 8 selection criteria (hygiene standards, practitioner certifications, treatment range, client reviews, facilities, pricing transparency) without citing any specific spa. Websites that publish this type of factual, expert content with verifiable data (ISPA membership, practitioner qualifications, facility details) can become a referenced source.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "spa near me for a weekend couple retreat", <strong>ChatGPT activates Search mode with a Maps card</strong>. Spas with a complete Google Business Profile (DaySpa category, recent reviews, photos of treatment rooms and relaxation areas, attributes like "couples massage" or "private spa") appear directly in the AI response with ratings and links to their website.</p>',
    structuredData:
      '<p>For spas, the recommended schema.org types are: <code>DaySpa</code> (primary type), <code>HealthAndBeautyBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>DaySpa</code> markup allows Google and LLMs to precisely identify the facility category, location, treatment types offered, and client reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your spa\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of treatment content), Legitimacy & Citability (external trust signals: reviews, press mentions, wellness directories), and Factual Density (richness of structured data and named entities related to spa treatments and pricing).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for spas',
    items: [
      {
        question: 'How much does SEO cost for a spa?',
        answer:
          'The SEO budget for a spa depends on the number of treatments offered and the geographic scope targeted. At Rankwell, SEO engagements for spas start from USD 1,500/month (or GBP 1,200/month) for a single-location day spa in one city, and can reach USD 4,000-6,000/month for a resort spa or multi-location business in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from spa SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "couples spa day Bristol" or "hammam Abu Dhabi") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis and your spa\'s current domain authority.',
      },
      {
        question: 'How do you handle seasonality in spa SEO?',
        answer:
          'Spa searches increase by 40 to 60% between October and February, then drop in summer. Rankwell anticipates this seasonality by scheduling content and link building campaigns ahead of peak periods, and by targeting off-season queries (post-workout recovery treatments in summer, gift vouchers in autumn) to smooth traffic across the full year.',
      },
      {
        question: 'Does a spa need a blog to improve rankings?',
        answer:
          'A wellness blog is a powerful lever when well executed. Articles should answer real client questions ("day spa vs resort spa: which is right for you?", "benefits of a hot stone massage"), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a spa appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a spa must accumulate web authority signals: presence on wellness directories (Mindbody, Treatwell, SpaSeekers), mentions in lifestyle press, an optimized Google Business Profile with recent reviews and photos, and rich factual content on its website (treatment descriptions, pricing grids, practitioner qualifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a spa?',
        answer:
          'Local SEO targets "spa + city" and "spa near me" queries and relies on Google Business Profile, client reviews, and citations in wellness directories. National SEO targets generic queries ("best luxury spa", "spa breaks UK") and requires high-authority editorial content. For most spas, local SEO represents 80-90% of the client acquisition potential. Rankwell combines both approaches based on your spa\'s strategy and positioning.',
      },
      {
        question: 'Are Mindbody, Treatwell, and booking platforms enough to be visible?',
        answer:
          'Booking platforms like Mindbody, Vagaro, and Treatwell are useful for initial visibility, but they create dependency: your spa is just one profile among hundreds, with commissions on every booking and no control over how your brand is presented. A well-optimized website allows the spa to differentiate by specialty, control its image, and convert clients directly without commission. Rankwell helps spas build independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your spa visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the spa and wellness sector.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/coiffeur' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
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
      { label: 'Hotel', href: '/en/geo-seo-agency/sectors/hotel' },
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/coiffeur' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Barber', href: '/en/geo-seo-agency/sectors/barbier' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'DaySpa',
};

export default data;
