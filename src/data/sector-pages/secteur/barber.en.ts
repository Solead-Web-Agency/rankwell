/**
 * DATA: Sector Page Barbers (EN)
 * Route: /en/geo-seo-agency/sectors/barber
 *
 * Adapted for US / UK / UAE markets
 * US = "barber" / "barber shop", UK = "barber" / "barbershop", UAE = "barber" / "gents salon"
 * Keyword data: industry sources (Booksy, Squire, Fresha, Treatwell), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'barber',
    title: 'GEO & SEO Agency for Barbers - Rankwell',
    description:
      'Rankwell helps barber shops boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the barber industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Barbers' },
    ],
    title: 'GEO & SEO for Barbers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search "barber shop near me" on Google and increasingly ask ChatGPT for recommendations. Our experts design GEO & SEO strategies tailored to independent barbers and multi-location barbershop brands.',
    ctaText: 'Request a GEO & SEO audit for your barber shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for barbers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of barber-related searches are geolocated</strong>. "Barber shop near me" generates <strong class="text-secondary dark:text-accent">600,000+ monthly searches</strong> in the US. Clients pick from the top 3 Local Pack results or follow an AI engine recommendation. Google Business Profile and reviews make the difference in this <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market.',
    constraints:
      '<strong class="text-secondary dark:text-accent">The barber industry runs on image and social reputation</strong>. The buying journey passes through Instagram and TikTok before Google. A barber without a visual portfolio loses potential clients. Seasonal peaks before holidays, weddings, and back-to-school create predictable traffic spikes.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Booksy, Squire</strong> (US), <strong class="text-secondary dark:text-accent">Fresha, Treatwell</strong> (UK), and <strong class="text-secondary dark:text-accent">Google Maps</strong> (UAE) capture the majority of barber booking traffic. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a barber shop stays invisible behind these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from those of Google\'s Local Pack.',
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
        { keyword: 'barber shop near me', volume: 673000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'barber near me', volume: 301000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'barbershop', volume: 135000, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'best barber shop near me', volume: 60500, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'fade haircut near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'black barber shop near me', volume: 33100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much is a haircut at a barber', volume: 14800, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'barber near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'barber shop near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'barber London', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'Turkish barber near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'mobile barber near me', volume: 5400, intent: 'locale', difficulty: 'faible' },
        { keyword: 'best barber near me', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how much is a haircut at a barber UK', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'barber shop dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'barber near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best barber dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'gents salon dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'barber Abu Dhabi', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'fade haircut dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'barber shop Abu Dhabi', volume: 720, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "barber shop near me", "barber near me", or "barber shop dubai" represent potential clients ready to book an appointment. The majority click on the top 3 results of the Local Pack, or follow the recommendation of an AI engine. If your shop does not appear there, those clients walk into a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for barber shops',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the highly local and image-driven barber industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the barber shop\'s website: page architecture, mobile loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by service (haircut, beard trim, straight razor shave, grooming)',
          'Schema.org BarberShop markup',
          'Mobile performance and Core Web Vitals',
          'Crawl and indexation review of portfolio pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the barber shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the shop\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for barber services',
        ],
      },
      {
        title: 'Market study & barber keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential service + city combinations.',
        items: [
          'Service + city combinations with low competition (fade haircut Austin, Turkish barber Manchester)',
          'Specialty queries (beard trim, straight razor shave, skin fade)',
          'Analysis of queries asked to AI engines about barber services',
          'Real search volumes by service and by city',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the booking journey: from service discovery to appointment.',
        items: [
          'Service page > barber page > pricing page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
          'Dedicated pages by specialty (fades, beard grooming, hot towel shave)',
        ],
      },
      {
        title: 'Barber shop content strategy',
        subtitle: 'Creation of visual and educational content demonstrating the barber\'s craft, written to be citable by LLMs.',
        items: [
          'Practical guides (beard care routine, choosing the right fade, straight razor vs clipper)',
          'FAQs answering Google People Also Ask on services and pricing',
          'Self-sufficient factual sentences with verifiable data',
          'Before/after gallery and video content showcasing techniques',
        ],
      },
      {
        title: 'Authority & barber industry link building',
        subtitle: 'Authority development through booking platforms, grooming publications, and local directories.',
        items: [
          'Booksy, Squire, Yelp (US)',
          'Fresha, Treatwell, local directories (UK)',
          'Local lifestyle blogs and men\'s grooming press partnerships',
          'Social media profiles (Instagram, TikTok) with backlinks to the website',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the shop\'s Google Business Profile to capture local "barber + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Barber Shop + secondary categories (Hair Salon, Men\'s Hairdresser)',
          'Client review management and post-appointment collection strategy',
          'Photos of the shop, cut results, and team updated regularly',
          'Consistent NAP citations across Booksy, Fresha, Yelp, and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service, and bookings generated.',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by service page',
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
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your barber shop\'s website: service page structure (haircut, beard, shave, grooming), mobile loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your shop in ChatGPT, Perplexity, and Gemini on your target barber queries. Benchmark against local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'BarberShop, LocalBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your shop\'s services and pricing. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (fade, beard trim, hot towel shave), grooming articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from booking platforms (Booksy, Squire, Fresha, Treatwell), grooming blogs, and local press. Tracking of links obtained and Domain Rating progression of your shop.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by barber service, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your barber shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which barber do you recommend in Brooklyn?", the LLM compiles information from across the web to formulate its response. If your shop does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which barber do you recommend in New York?": the LLM does not cite a specific barbershop by name. It provides a list of selection criteria (fade specialization, Google reviews above 4.5, tool hygiene, Instagram portfolio) and redirects to Google Maps, Booksy, Squire, and Yelp. A barber shop with mentions on local press or lifestyle blogs has a higher chance of being cited by name.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a good barber?" or "barber vs hairdresser: what is the difference?": the LLM generates a structured guide with 6 criteria or a detailed comparison (licensing, services, tools, clientele, atmosphere). No barbershop is cited. The barber who publishes this type of educational content on their website can become the extracted source.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does a haircut cost at a barber?": the LLM gives detailed ranges (USD 20-35 for a standard cut, USD 30-50 for cut and beard, GBP 12-25 in the UK). Barber shops displaying precise, up-to-date pricing grids on their website have the highest chance of being extracted as a source by AI engines.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "barber shop near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Barber shops with a complete Google Business Profile (category Barber Shop, recent photos of cuts, reviews above 4.3, updated hours, booking link) appear directly in the AI response.</p>',
    structuredData:
      '<p>For barber shops, the recommended schema.org types are: <code>BarberShop</code> (primary type), <code>HealthAndBeautyBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>BarberShop</code> markup allows Google and LLMs to precisely identify the services offered, location, opening hours, and client reviews of the shop.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your barber shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for barber shops',
    items: [
      {
        question: 'How much does SEO cost for a barber shop?',
        answer:
          'The SEO budget for a barber shop depends on the number of locations and the geographic scope targeted. At Rankwell, SEO engagements for barber shops start from USD 1,000/month (or GBP 800/month) for a single-location shop in a mid-size city, and can reach USD 2,500-4,000/month for a multi-location barbershop brand in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take for a barber shop to appear on Google?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "Turkish barber Manchester" or "fade specialist Austin") are faster to rank for than broadly competitive terms like "barber near me" in a major city. Rankwell provides a realistic timeline based on the initial competitive analysis of your area.',
      },
      {
        question: 'Is Instagram enough to attract clients to a barber shop?',
        answer:
          'Instagram and TikTok are powerful channels for showcasing barber skills (before/after shots, fade tutorials, straight razor reels), but they do not replace SEO. A client searching "barber shop near me" on Google will not see your Instagram profile in the results. Rankwell combines Google visibility, AI engine presence, and social media signals to maximize client acquisition.',
      },
      {
        question: 'Does a barber shop need a blog to improve its rankings?',
        answer:
          'A blog is an effective lever when properly targeted. Articles should answer real client questions (beard care routine, choosing the right fade, barber vs hairdresser) and be written to be citable by AI engines. Rankwell recommends 2 to 3 articles per month targeting long-tail informational queries specific to the barber industry.',
      },
      {
        question: 'How can a barber appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a barber shop must accumulate web authority signals: presence on booking platforms (Booksy, Squire, Fresha), numerous and recent Google reviews, mentions in local press or grooming blogs, and rich factual content on its website (pricing, specialties, barber bios). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a barber?',
        answer:
          'Local SEO targets "barber + city" or "barber shop near me" queries and relies on Google Business Profile, client reviews, and citations on local directories. National SEO targets generic queries like "best barbershop" and requires high-authority educational content. For an independent barber shop, Rankwell prioritizes local SEO, which directly generates bookings.',
      },
      {
        question: 'Are Booksy, Fresha, and booking platforms enough to be visible as a barber?',
        answer:
          'Booking platforms like Booksy and Fresha are useful for online scheduling, but they create dependency: your shop is just one profile among hundreds in your area, and each booking may carry a commission. A well-optimized website allows you to control your image, showcase your specialties, and convert clients directly. Rankwell helps barber shops build an independent digital presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your barber shop visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
        { label: 'SEO Spa', href: '/en/geo-seo-agency/sectors/spa' },
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
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
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentist' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
    ],
  },

  // Schema.org primary type
  schemaType: 'BarberShop',
};

export default data;
