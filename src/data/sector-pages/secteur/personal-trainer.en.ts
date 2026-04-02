/**
 * DATA: Sector Page Personal Trainers (EN)
 * Route: /en/geo-seo-agency/sectors/coach-sportif
 *
 * Adapted for US / UK / UAE markets
 * US: NASM, ACE, NSCA, ISSA certifications (NCCA-accredited)
 * UK: CIMSPA Level 3 + REPs registration
 * UAE: REPs UAE-approved certification + DED freelance visa
 * Keyword data: MarketKeep (Google Keyword Planner) + kwrds.ai + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'personal-trainer',
    title: 'GEO & SEO Agency for Personal Trainers - Rankwell',
    description:
      'Rankwell helps personal trainers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the personal training industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Personal Trainers' },
    ],
    title: 'GEO & SEO for Personal Trainers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search Google and ask ChatGPT before booking a session. Our experts design GEO & SEO strategies adapted to the hyper-local personal training market, where the top 3 results capture most bookings.',
    ctaText: 'Request a GEO & SEO audit for your personal training business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for personal trainers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">"Personal trainer near me" generates 165,000 monthly searches in the US alone</strong>. The decision happens in Google\'s Local Pack or in AI engine responses in this hyper-local market.',
    constraints:
      'Google classifies fitness content as <strong class="text-secondary dark:text-accent">YMYL</strong>, demanding strong E-E-A-T signals. Credentials must be visible: NASM/ACE (US), CIMSPA Level 3 (UK), REPs UAE (Emirates). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must reflect these qualifications in every page.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Thumbtack, Bark, ClassPass</strong> (US), <strong class="text-secondary dark:text-accent">PureGym, FindMyPersonalTrainer</strong> (UK), <strong class="text-secondary dark:text-accent">FitLov, UAE Personal Trainers</strong> (UAE) dominate high-intent fitness queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a trainer stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals different from Google\'s Local Pack.',
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
        { keyword: 'personal trainer near me', volume: 165000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'personal trainer', volume: 90500, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'certified personal trainer', volume: 40500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'personal trainer cost', volume: 5400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'fitness coach near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'personal trainer at home', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'online personal trainer', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'personal trainer near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'personal trainer', volume: 18100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'personal trainer cost UK', volume: 1900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'personal trainer London', volume: 2900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'fitness coach near me', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'online personal trainer UK', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how to find a good personal trainer', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'personal trainer dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'personal trainer near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'fitness coach dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'personal trainer abu dhabi', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'home personal trainer dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'female personal trainer dubai', volume: 1000, intent: 'locale', difficulty: 'faible' },
        { keyword: 'personal trainer cost dubai', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "personal trainer near me", "fitness coach dubai", or "personal trainer cost" represent potential clients actively seeking a trainer. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your profile does not appear there, those clients book a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for personal trainers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the certification requirements and hyper-local dynamics of the personal training industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the trainer\'s website: page structure by specialty (weight loss, strength training, sports performance), mobile loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by specialty and service area',
          'Schema.org SportsActivityLocation and Person markup',
          'Mobile performance and Core Web Vitals',
          'Crawl and indexation of service pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the trainer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the trainer\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for personal training',
        ],
      },
      {
        title: 'Market study & fitness keyword research',
        subtitle: 'Mapping of search queries by training specialty and geographic area across US, UK, and UAE markets. Identification of high-potential "trainer + city" combinations.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines about personal training',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the client journey: homepage to specialty page, then to service area, then to booking.',
        items: [
          'Specialty page > service area page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Fitness content strategy',
        subtitle: 'Creation of educational content demonstrating the trainer\'s expertise: exercise guides, nutrition basics, certification FAQs, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask on personal training',
          'Self-sufficient factual sentences with verifiable data',
          'Compliance with certification body guidelines (NASM, ACE, CIMSPA, REPs UAE)',
        ],
      },
      {
        title: 'Authority & fitness link building',
        subtitle: 'Authority development through qualified fitness directories and specialized publications.',
        items: [
          'Thumbtack, Bark, ClassPass (US)',
          'FindMyPersonalTrainer, PureGym directory, NRPT (UK)',
          'FitLov, UAE Personal Trainers, DubaiPT (UAE)',
          'Fitness press publications and health blog partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the trainer\'s Google Business Profile to capture local "personal trainer + city" and "near me" queries in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Personal Trainer + secondary categories by specialty',
          'Client review management and post-session collection strategy',
          'Training photos, hours, service area, and attributes',
          'Consistent NAP citations across fitness directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by specialty, and session bookings generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by training specialty',
          'GEO Score: visibility in AI engines',
          'Session bookings and contact requests',
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
        description: 'Full diagnostic of your website: page architecture by training specialty, mobile loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your training business in ChatGPT, Perplexity, and Gemini on your target fitness queries. Benchmark against 3 to 5 competing trainers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'SportsActivityLocation, Person with hasCredential and hasOccupation, FAQPage, and BreadcrumbList markup ready to integrate. Delivered with a CMS integration guide (WordPress, Wix, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of specialty pages (weight loss, strength training, sports performance), fitness articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from fitness directories (Thumbtack, Bark, FitLov, FindMyPersonalTrainer), fitness blogs, and health press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by specialty page and local keyword, organic traffic by training type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your training business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which personal trainer do you recommend in Dubai?", the LLM compiles information from across the web to formulate its response. If your profile does not appear in any cited source, you are invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which personal trainer do you recommend in Austin?": the LLM does not cite a specific trainer. It provides a list of selection criteria (certifications, specialization, client reviews, trial session availability) and redirects to directories: Thumbtack, Bark, ClassPass, and Google Maps. The trainer who publishes these proof points on their own website can be cited as a reference.</p><h4>Informational queries</h4><p>"How to choose a good personal trainer?" or "what certifications should a personal trainer have?": the LLM generates a structured guide with 6 to 8 criteria (NASM, ACE, CIMSPA, specialization, experience, client results), without citing any trainer or external source. The trainer that publishes this type of content on their website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a personal trainer cost?": the LLM gives detailed pricing ranges (USD 40 to USD 120 per session in the US, GBP 30 to GBP 60 in the UK, AED 200 to AED 500 in Dubai). Sites providing precise, up-to-date pricing grids by session type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "personal trainer near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Trainers with a complete Google Business Profile (category Personal Trainer, recent reviews, training photos, service area) appear directly in the AI response.</p>',
    structuredData:
      '<p>For personal trainers, the recommended schema.org types are: <code>SportsActivityLocation</code> (primary type for training locations), <code>Person</code> with <code>hasOccupation</code> and <code>hasCredential</code> (to identify the professional and their certifications), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Person</code> markup allows Google and LLMs to precisely identify the trainer\'s certifications, specialties, and service area.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your training business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for personal trainers',
    items: [
      {
        question: 'How much does SEO cost for a personal trainer?',
        answer:
          'The SEO budget for a personal trainer depends on the number of specialties offered and the geographic scope targeted. At Rankwell, SEO engagements for personal trainers start from USD 1,200/month (or GBP 950/month) for a single specialty and one city, and can reach USD 3,500-5,000/month for a multi-specialty trainer covering a large metropolitan area like Los Angeles, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from personal trainer SEO?',
        answer:
          'Initial results typically appear between 3 and 5 months. Niche local queries (e.g., "strength training coach Scottsdale" or "female personal trainer Kensington") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Do certification requirements affect SEO for personal trainers?',
        answer:
          'Yes, certifications directly impact E-E-A-T signals that Google evaluates for YMYL fitness content. In the US, NCCA-accredited certifications (NASM, ACE, NSCA, ISSA) are the standard. In the UK, CIMSPA Level 3 and REPs registration are required. In the UAE, REPs UAE-approved certification plus a DED freelance visa or business license are mandatory. Rankwell integrates these credentials into schema.org markup, about pages, and content strategy to strengthen both Google rankings and AI citability.',
      },
      {
        question: 'Does a personal trainer need a fitness blog to improve rankings?',
        answer:
          'A fitness blog is a powerful lever when well executed. Articles should answer real questions (inspired by Google People Also Ask), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries like "difference between personal training at home and in a gym" or "how to choose a certified personal trainer".',
      },
      {
        question: 'How can a personal trainer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a personal trainer must accumulate web authority signals: presence on fitness directories (Thumbtack, Bark, FitLov), recent and detailed Google reviews, and rich factual content on their website (specialties, certifications, pricing, client results). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a personal trainer?',
        answer:
          'Local SEO targets "personal trainer + city" and "near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best online personal trainer") and requires high-authority educational content. For independent trainers, Rankwell prioritizes local SEO, because over 80% of clients book a trainer within a 15-mile radius.',
      },
      {
        question: 'Are Thumbtack, Bark, and fitness platforms enough to be visible?',
        answer:
          'Fitness platforms like Thumbtack, ClassPass, or FitLov are useful for initial visibility, but they create dependency: the trainer is just one profile among thousands, subject to platform algorithms and commissions (up to 20%). A well-optimized personal website allows the trainer to control their image, convert directly, and build lasting authority. Rankwell helps personal trainers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your personal training business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
        { label: 'SEO Spa', href: '/en/geo-seo-agency/sectors/spa' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
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
      { label: 'Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
      { label: 'Spa', href: '/en/geo-seo-agency/sectors/spa' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Barber', href: '/en/geo-seo-agency/sectors/barbier' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/coiffeur' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
    ],
  },

  // Schema.org primary type
  schemaType: 'SportsActivityLocation',
};

export default data;
