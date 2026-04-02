/**
 * DATA: Sector Page Videographers (EN)
 * Route: /en/geo-seo-agency/sectors/videographer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (The Knot, Bark, ProductionHub), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'videographer',
    title: 'GEO & SEO Agency for Videographers - Rankwell',
    description:
      'Rankwell helps videographers and video production companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the video production industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Videographers' },
    ],
    title: 'GEO & SEO for Videographers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for a videographer on Google, but also via ChatGPT and Perplexity. Our experts design GEO & SEO strategies tailored to the visual, portfolio-driven, and local nature of the video production market.',
    ctaText: 'Request a GEO & SEO audit for your video production business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for videographers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of videographer queries include a specialty or a city</strong>. The decision happens in Google\'s Local Pack, YouTube search results, or an AI engine recommendation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Video content alone does not rank on Google</strong>. A showreel without surrounding text and transcriptions is invisible to search engines. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must bridge cinematic quality and search engine readability.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">The Knot, WeddingWire</strong> (US), <strong class="text-secondary dark:text-accent">Bark, Hitched</strong> (UK), <strong class="text-secondary dark:text-accent">Arabia Weddings</strong> (UAE), plus YouTube and freelance platforms capture most traffic. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a videographer stays buried among aggregator profiles.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its fame than on the factual structure of its content. A website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'videographer near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'wedding videographer', volume: 33100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'corporate videographer', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'video production company', volume: 9900, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'wedding videographer near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how much does a wedding videographer cost', volume: 5400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'real estate videographer near me', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'videographer near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'wedding videographer', volume: 2900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'corporate video production', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'videographer London', volume: 1000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'event videographer near me', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a videographer cost UK', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'music video production company', volume: 590, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'videographer dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'video production company dubai', volume: 1600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'wedding videographer dubai', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'corporate video production dubai', volume: 720, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'event videographer dubai', volume: 480, intent: 'locale', difficulty: 'faible' },
        { keyword: 'drone videographer dubai', volume: 390, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'real estate video production UAE', volume: 320, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "videographer near me", "wedding videographer", or "video production company dubai" represent potential clients actively looking to hire a video professional. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your website does not appear there, those clients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for videographers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the visual and portfolio-driven nature of the video production industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed (critical for video-heavy portfolios), and technical factors blocking indexation of project pages.',
        items: [
          'Page structure by video specialty (wedding, corporate, events, real estate)',
          'Schema.org VideoObject and ProfessionalService markup',
          'Performance and Core Web Vitals (video embed optimization, lazy loading)',
          'Crawl and indexation review of portfolio and showreel pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the videographer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the videographer\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for video production',
        ],
      },
      {
        title: 'Market study & video keyword research',
        subtitle: 'Mapping of search queries by video specialty and geographic area across US, UK, and UAE markets. Identification of low-competition "specialty + city" combinations.',
        items: [
          'Specialty + city combinations with low competition (wedding videographer Austin, corporate video Manchester)',
          'Analysis of queries asked to AI engines about videography',
          'Real search volumes by specialty (wedding, corporate, events, drone, real estate)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed to guide visitors from showreel to inquiry form, while facilitating Google crawl efficiency.',
        items: [
          'Specialty page > project gallery > pricing page > contact page',
          'Primary keyword + 3-5 secondary keywords per specialty page',
          'Optimization of title tags, meta descriptions, headings, and video descriptions',
        ],
      },
      {
        title: 'Video content & editorial strategy',
        subtitle: 'Creation of text content to accompany video portfolios: optimized descriptions, behind-the-scenes articles, and pricing guides written to be citable by LLMs.',
        items: [
          'Project pages with contextual text, transcriptions, and production details',
          'Practical guides answering Google People Also Ask (how to choose a videographer, expected budget)',
          'Self-sufficient factual sentences with verifiable data (number of projects delivered, turnaround time)',
        ],
      },
      {
        title: 'Authority & creative link building',
        subtitle: 'Authority development through specialized directories, wedding publications, and industry blogs.',
        items: [
          'The Knot, WeddingWire, Fearless Photographers (US)',
          'Bark, Hitched, ProductionBase (UK)',
          'Arabia Weddings, ProductionHub, Clutch (UAE/International)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the videographer\'s Google Business Profile to capture local "videographer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Videographer + secondary categories by specialty (Wedding videographer, Corporate videographer)',
          'Client review management and post-project collection strategy',
          'Behind-the-scenes photos, video thumbnails, and regular posts',
          'Consistent NAP citations across creative and wedding directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by specialty, and inquiry requests generated.',
        items: [
          'Google positions by keyword and specialty',
          'Organic traffic by project type',
          'GEO Score: visibility in AI engines',
          'Inquiry requests and booking conversions',
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
        description: 'Full diagnostic of your website and portfolio: video embed performance (player optimization, lazy loading), loading speed, gallery indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your video production business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against 3 to 5 competing videographers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, VideoObject, FAQPage, and BreadcrumbList markup ready to integrate, with your production specialties (wedding, corporate, events). Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of specialty pages (wedding films, corporate video, event coverage), articles on video trends and production tips, and FAQs. Direct integration on your CMS or via FTP, with reusable page templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from video and wedding directories (The Knot, WeddingWire, Bark, ProductionHub), specialized blogs, and local press. Domain Rating tracking and link profile evolution.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by specialty and geographic area, organic traffic by project type, inquiry requests attributed to SEO, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your video production business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which wedding videographer do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your website does not appear in any cited source, you are invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which wedding videographer do you recommend in New York?": LLMs rarely cite individual videographers. They provide a list of 5 to 7 selection criteria (cinematic style, experience, showreel quality, Google reviews) and redirect to directories: The Knot, WeddingWire, and Thumbtack. The videographer who publishes these criteria as a structured guide on their own website positions themselves as an extractable source.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a good videographer?" or "videographer vs photographer for a wedding": LLMs generate structured guides with 6 to 8 points (portfolio, style, equipment, delivery timeline) without citing any external source. Sites that offer this type of editorial content with concrete data (average film length, equipment used, turnaround time) have a higher chance of being extracted as a reference.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does a wedding videographer cost?": LLMs give detailed price ranges by service tier. Basic package (ceremony + reception highlights, 4 to 6 hours): USD 1,500 to USD 3,000. Full-day cinematic package (entire day, highlight film + full edit): USD 3,000 to USD 7,000. In the UK, GBP 800 to GBP 4,000 for comparable coverage. Sites providing transparent, up-to-date pricing have the highest chance of being cited.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "videographer near me for corporate video", <strong>ChatGPT activates Search mode with a Maps card</strong>. Videographers with a complete Google Business Profile (category Videographer, recent reviews, portfolio link, behind-the-scenes photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For videographers, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>VideoObject</code> (for each project or showreel), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>VideoObject</code> markup allows Google and LLMs to precisely identify the subject, duration, and description of each video published on the site.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your video production business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of text content accompanying the portfolio), Legitimacy & Citability (external trust signals: reviews, press mentions, specialized directories), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for videographers',
    items: [
      {
        question: 'How much does SEO cost for a videographer?',
        answer:
          'The SEO budget for a videographer depends on the number of specialties covered (wedding, corporate, events, real estate) and the geographic scope targeted. At Rankwell, SEO engagements for videographers start from USD 1,500/month (or GBP 1,200/month) for a single specialty and one city, and can reach USD 4,000-6,000/month for a multi-specialty production company covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from videographer SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "event videographer Manchester" or "drone videographer Dubai") are faster to rank for than nationally competitive terms like "wedding videographer". Rankwell provides a realistic timeline based on the initial competitive analysis of your local market.',
      },
      {
        question: 'Is a YouTube channel enough to rank well on Google?',
        answer:
          'YouTube is a powerful platform, but it does not replace a well-optimized website. YouTube videos rank on YouTube and Google Videos, not in standard web results. A dedicated website lets you combine video embeds with optimized text (descriptions, transcriptions, production details), multiplying your entry points on Google. Rankwell integrates YouTube strategy into a comprehensive SEO approach, linking each video to an optimized page on your site.',
      },
      {
        question: 'Does a videographer need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when it targets the right queries. Articles should answer real questions ("how to choose a wedding videographer", "corporate video production cost") and include factual data (number of projects delivered, equipment specifications, delivery timelines). Rankwell recommends 2 to 4 articles per month targeting long-tail informational queries related to your specialties.',
      },
      {
        question: 'How can a videographer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a videographer must accumulate web authority signals: presence on specialized directories (The Knot, WeddingWire, Bark), detailed Google reviews with project photos, mentions in event blogs or local press, and rich factual content on their website (pricing grids, guides, behind-the-scenes articles). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a videographer?',
        answer:
          'Local SEO targets "videographer + specialty + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best wedding videographer") and requires high-authority educational content and backlinks from national event publications. Rankwell combines both approaches based on the videographer\'s service area and growth objectives.',
      },
      {
        question: 'Are The Knot, WeddingWire, and freelance platforms enough to be visible?',
        answer:
          'Platforms like The Knot, WeddingWire, or Fiverr provide initial visibility, but they create dependency: the videographer is just one profile among thousands, subject to the platform\'s algorithm and fee structure. A well-optimized website allows the videographer to control their image, showcase their showreel without format constraints, and convert directly without intermediary commissions. Rankwell helps videographers build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your video production business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
        { label: 'SEO Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
        { label: 'SEO Communication Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
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
        { label: 'Citability', href: '/en/glossary/citabilite' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Communication Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/imprimeur' },
      { label: 'Translator', href: '/en/geo-seo-agency/sectors/traducteur' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
