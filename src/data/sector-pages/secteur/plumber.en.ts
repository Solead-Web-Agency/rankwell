/**
 * DATA: Sector Page Plumbers (EN)
 * Route: /en/geo-seo-agency/sectors/plumber
 *
 * Pilot EN page, adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (Web Wise, The Atom Lab, SEO Hub), March 2026
 * LLM auto-test: rapport-test-plombier-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'plumber',
    title: 'GEO & SEO Agency for Plumbers - Rankwell',
    description:
      'Rankwell helps plumbers and plumbing companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the plumbing industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Plumbers' },
    ],
    title: 'GEO & SEO for Plumbers: Google & AI Engine Visibility',
    subtitle:
      'Your future customers search for a plumber in an emergency on Google or ask ChatGPT for a recommendation. Our experts design GEO & SEO strategies tailored to the constraints of emergency plumbing and the trades industry.',
    ctaText: 'Request a GEO & SEO audit for your plumbing business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for plumbers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 97% of plumbing searches have local intent</strong>. "Plumber near me" generates 1.2 million monthly searches in the US alone, mostly from mobile devices in emergency situations. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the first result in the Local Pack captures most calls.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Urgency dominates the buying journey</strong>: customers call the first professional they find. This demands flawless Core Web Vitals, a clickable phone number, and verifiable credentials: licensed plumber (US), Gas Safe registration (UK), DEWA approval (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, HomeAdvisor, Yelp</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) invest heavily in SEO and Ads to capture emergency leads. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent plumber stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Local SEO)
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
    title: 'What your future customers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'plumber near me', volume: 1200000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'emergency plumber', volume: 74000, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'plumber', volume: 301000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'licensed plumber near me', volume: 22200, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'plumbing services', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how much does a plumber cost', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'residential plumber', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'plumber near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'emergency plumber', volume: 40500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'gas safe plumber near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'boiler repair', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'central heating engineer', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'plumber cost per hour UK', volume: 3600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'local plumber', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'plumber dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'emergency plumber dubai', volume: 2400, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'plumbing services dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'plumber abu dhabi', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'water heater repair dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'plumber sharjah', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'AC maintenance dubai', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "plumber near me", "emergency plumber", or "plumber dubai" represent customers who need immediate help. The vast majority call the first result they see, or follow the recommendation of an AI engine. If your plumbing business does not appear there, those calls go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for plumbers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of emergency plumbing and the trades industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, mobile loading speed, and technical factors blocking indexation of service area and job type pages.',
        items: [
          'Page structure by service type (emergency repair, installation, maintenance)',
          'Schema.org Plumber and HomeAndConstructionBusiness markup',
          'Mobile performance and Core Web Vitals (LCP critical for emergencies)',
          'Crawl and indexation review for geolocated pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your plumbing company\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your plumbing company\'s informational universe',
          'Measurement of legitimacy and citability on "plumber + city" queries',
          'Evaluation of content factual density (pricing, service areas, certifications)',
          'Competitive benchmark on AI queries related to plumbing',
        ],
      },
      {
        title: 'Market study & plumbing keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential, low-competition combinations.',
        items: [
          'Service + city combinations with low competition ("licensed plumber Austin")',
          'Analysis of emergency queries asked to AI engines',
          'Real search volumes by service type (emergency repair, boiler installation, drain cleaning)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for fast conversion, built for the journey of a customer in an emergency.',
        items: [
          'Service page > service area page > contact / call page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta, and heading optimization with visible phone number',
        ],
      },
      {
        title: 'Plumbing content strategy',
        subtitle: 'Creation of practical content demonstrating the plumber\'s expertise, written to be citable by LLMs and answer real customer questions.',
        items: [
          'Troubleshooting guides and FAQs answering Google People Also Ask ("how to fix a leaking pipe")',
          'Pricing pages with cost ranges by service type',
          'Certification and qualification content (licensed plumber, Gas Safe, DEWA approved)',
        ],
      },
      {
        title: 'Authority & plumbing link building',
        subtitle: 'Authority development through qualified trade directories and local partnerships.',
        items: [
          'Angi, HomeAdvisor, Yelp, BBB (US)',
          'Checkatrade, MyBuilder, Rated People, Gas Safe Register (UK)',
          'ServiceMarket, Dubizzle, local municipality listings (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile to capture local "plumber + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Plumber + secondary categories (heating contractor, drain service)',
          'Client review management and post-service collection strategy',
          'Photos of completed jobs, certifications, service hours, and service area',
          'Consistent NAP citations across trade directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service area, and phone calls generated.',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Phone calls, quote requests, and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team can act on immediately to grow your plumbing business online.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your website: service pages (emergency repair, installation, heating), mobile loading speed, local indexation, and blocking technical factors.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests on plumbing queries across AI engines, benchmark of your local competitors, and GEO Score calculation with improvement priorities.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Plumber, HomeAndConstructionBusiness, Service, and FAQPage markup ready to deploy, including your service areas and emergency service offerings.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Service pages, city and service area pages, advice articles (boiler maintenance, leak repair), FAQs, CMS or FTP integration, and optimized page templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlinks from trade directories (Angi, Checkatrade, ServiceMarket), home improvement blogs, and local press. Domain Rating tracking and progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Positions by service and area, organic traffic, calls and quotes attributed to SEO, GEO Score evolution, and recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your plumbing business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which plumber do you recommend in Houston for a burst pipe?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new customer acquisition channel, and the call goes to a competitor.',
    llmBehavior:
      '<h4>Plumbers cited by name in the US market</h4>' +
      '<p>On "which plumber do you recommend in Houston for a burst pipe?", <strong>ChatGPT cites 5 plumbing companies by name</strong> (Abacus Plumbing, Benjamin Franklin Plumbing, Joe the Plumber, etc.). Unlike the French market where no plumber is cited, the US market generates nominative recommendations. Plumbers with strong web presence, 24/7 emergency messaging, and verified reviews are identified and recommended by LLMs.</p>' +
      '<h4>Platforms capture visibility in the UK and UAE</h4>' +
      '<p>On "emergency plumber near me", ChatGPT activates Search mode with a Maps card. In the UK, Checkatrade, MyBuilder, and Gas Safe Register appear as reference sources. In the UAE, ServiceMarket and Dubizzle dominate. A plumber absent from these directories and without their own optimized site is invisible to AI engines.</p>' +
      '<h4>Pricing queries generate detailed ranges</h4>' +
      '<p>On "how much does a plumber cost per hour", LLMs provide detailed ranges: USD 50-200/h in the US (average USD 100-150/h), GBP 40-80/h in the UK (emergency rates GBP 100-150/h), AED 100-300/h in the UAE. Sites publishing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p>' +
      '<h4>Factual content becomes the reference source</h4>' +
      '<p>On "plumber vs plumbing contractor: what is the difference?", the LLM produces a structured encyclopedic response distinguishing scope, licensing, and responsibility. A site publishing its <strong>detailed pricing, certifications (licensed plumber, Gas Safe, DEWA approved), and practical guides</strong> creates exactly the type of factual data that LLMs extract and cite as a source.</p>',
    structuredData:
      '<p>For plumbing businesses, the recommended schema.org types are: <code>Plumber</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Plumber</code> markup allows Google and LLMs to precisely identify the services offered (emergency repair, installation, maintenance), the service area, and the client reviews of the business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your plumbing company\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on your services and areas), Legitimacy & Citability (external trust signals: reviews, directories, mentions), and Factual Density (richness of structured data, published pricing, and displayed certifications).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for plumbers',
    items: [
      {
        question: 'How much does SEO cost for a plumbing business?',
        answer:
          'The SEO budget for a plumber depends on the geographic area and the number of services to rank. At Rankwell, SEO engagements for plumbers start from USD 1,500/month (or GBP 1,200/month) for one city and one service type, and can reach USD 4,000-6,000/month for a multi-area plumbing company in competitive metropolitan markets like Houston, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from plumbing SEO?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "licensed plumber Scottsdale" or "Gas Safe plumber Richmond") are faster to rank for than highly competitive terms like "plumber near me" in major cities. Google Business Profile optimization often produces results within the first few weeks. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'How can a plumber stand out from scams and unreliable services online?',
        answer:
          'The emergency plumbing sector suffers from a reputation problem linked to scam services and overcharging. A reputable plumber must clearly display their license number (US), Gas Safe registration (UK), or DEWA approval (UAE), along with transparent pricing, verified reviews, and business registration details. Rankwell structures this transparency on the website and Google Business Profile to build trust with Google, AI engines, and potential customers.',
      },
      {
        question: 'Does a plumbing business need a blog to improve rankings?',
        answer:
          'A blog with practical guides is a powerful lever for plumbers: "how to shut off water in an emergency", "when to replace your water heater", "cost of boiler replacement". These articles answer real customer questions and rank the site on informational queries. Rankwell recommends 2-4 articles per month, targeting Google People Also Ask and queries asked to AI engines.',
      },
      {
        question: 'How can a plumber appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a plumber must accumulate web authority signals: presence on trade directories (Angi, Checkatrade, ServiceMarket), recent positive Google reviews, and rich factual content on their website (pricing, service areas, certifications). Our LLM tests show that ChatGPT already cites US plumbers by name when they have a strong web footprint. The Rankwell GEO Score measures and optimizes precisely these AI citability signals for trades businesses.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a plumber?',
        answer:
          'Local SEO targets "plumber + city" or "plumber near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("plumber cost per hour", "how to choose a plumber") and requires high-authority educational content. For the vast majority of plumbing businesses, local SEO is the priority. Rankwell combines both approaches based on the size of the company and its service area.',
      },
      {
        question: 'Are platforms like Angi, Checkatrade, or HomeAdvisor enough to be visible?',
        answer:
          'Trade directories like Angi or Checkatrade provide initial visibility, but they create dependency: your business is just one profile among hundreds, and you pay for each lead. A well-optimized website allows you to receive direct calls without commission, control your brand image, and build lasting authority. Rankwell helps plumbers build this independent visibility through a GEO & SEO strategy that does not depend on aggregator platforms.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your plumbing business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to your service area.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
        { label: 'SEO Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
        { label: 'SEO Carpenter', href: '/en/geo-seo-agency/sectors/menuisier' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/creation-site' },
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
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/menuisier' },
      { label: 'Tiler', href: '/en/geo-seo-agency/sectors/carreleur' },
      { label: 'Glazier', href: '/en/geo-seo-agency/sectors/vitrier' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Plumber',
};

export default data;
