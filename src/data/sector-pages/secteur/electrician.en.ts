/**
 * DATA: Sector Page Electricians (EN)
 * Route: /en/geo-seo-agency/sectors/electrician
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
    slug: 'electrician',
    title: 'GEO & SEO Agency for Electricians - Rankwell',
    description:
      'Rankwell helps electricians boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the electrical trade.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Electricians' },
    ],
    title: 'GEO & SEO for Electricians: Google & AI Engine Visibility',
    subtitle:
      'Emergency callouts, panel upgrades, EV charger installs: your future clients search for an electrician on Google and in AI engine responses. Our experts design GEO & SEO strategies tailored to the electrical trade.',
    ctaText: 'Request a GEO & SEO audit for your electrical business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for electricians',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 70% of electrician searches include a city name or "near me"</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where emergency callouts and installations drive decisions in seconds from the Local Pack.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Licensing is the first trust signal for Google and AI engines.</strong> A state license (US), NICEIC/NAPIT registration (UK), or DEWA approval (UAE) must appear on your website with structured markup to outrank competitors.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, HomeAdvisor, Thumbtack</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK) dominate high-intent electrician queries. Without an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO strategy</a>, an independent electrician stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct, measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on different signals than Google\'s local pack.',
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
        { keyword: 'electrician near me', volume: 230000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'emergency electrician', volume: 18100, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'electrical contractor near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'licensed electrician', volume: 9900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'EV charger installation', volume: 14600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'electrical panel upgrade cost', volume: 5800, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'how much does an electrician cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'electrician near me', volume: 60500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'emergency electrician', volume: 8100, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'electrical contractors near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'NICEIC electrician near me', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'EV charger installer', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'consumer unit upgrade cost', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'Part P electrician', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'electrician dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'electrical contractor dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'DEWA approved electrician', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'electrician near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency electrician dubai', volume: 720, intent: 'transactionnelle', difficulty: 'faible' },
        { keyword: 'electrical maintenance dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'electrician Abu Dhabi', volume: 1300, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 230,000 searches for "electrician near me" are performed in the US alone, with 60,000+ in the UK and thousands more across the UAE. These users need an electrician for an emergency, an installation, or a quote. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your business does not appear there, those clients go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for electricians',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory and competitive constraints of the electrical trade across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation for an electrician website.',
        items: [
          'Page structure by service type (emergency, residential, commercial, EV charger)',
          'Schema.org Electrician and HomeAndConstructionBusiness markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your electrical business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the electrician\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & electrical keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines ("which electrician do you recommend?")',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the customer journey of someone searching for an electrician.',
        items: [
          'Service page > service area page > contact/quote page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Electrical content strategy',
        subtitle: 'Creation of technical content demonstrating the electrician\'s expertise, written to be citable by LLMs and compliant with industry codes.',
        items: [
          'Guides and FAQs answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable data (pricing, codes, timelines)',
          'Compliance references: NEC (US), BS 7671/Part P (UK), DEWA regulations (UAE)',
        ],
      },
      {
        title: 'Authority & trade link building',
        subtitle: 'Authority development through qualified trade directories and professional associations.',
        items: [
          'Angi, HomeAdvisor, BBB, Thumbtack (US)',
          'Checkatrade, NICEIC, Rated People, MyBuilder (UK)',
          'Trade press publications and local business partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile to capture local "electrician + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Electrician + secondary categories (Electrical Installation Service, Lighting Contractor)',
          'Client review management and post-job collection strategy',
          'Photos of completed work, hours, service area, and regular posts',
          'Consistent NAP citations across trade directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Quote requests and inbound calls',
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
        description: 'Full diagnostic of your website: page architecture by service type (emergency, panel upgrades, EV chargers, rewiring), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your business in ChatGPT, Perplexity, and Gemini on your target electrician queries. Benchmark against 3 to 5 competing contractors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Electrician, HomeAndConstructionBusiness, FAQPage, and BreadcrumbList markup ready to integrate, with service areas, licensing credentials, and review aggregation. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (emergency repair, panel upgrades, EV charger installation, rewiring), technical articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (Angi, Checkatrade, NICEIC, BBB), home improvement blogs, and local press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by service type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your electrical business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which electrician do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>No electrician cited by name</h4>' +
      '<p>On 5 test queries ("which electrician do you recommend in Houston?", "how to find a reliable electrician near me?", "emergency electrician near me at night"), <strong>the LLM does not cite any specific electrician or company</strong>. The local trades market is too fragmented for LLMs to memorize business names. Instead, the LLM redirects to Google Maps, Angi, HomeAdvisor, and Checkatrade.</p>' +
      '<h4>Licensing: the first trust signal</h4>' +
      '<p>State licensing (US), Part P certification and NICEIC/NAPIT registration (UK), and DEWA approval (UAE) appear in every response as the first criterion for selecting an electrician. An electrician website that does not display verifiable credentials is ignored by LLMs in their selection criteria.</p>' +
      '<h4>Pricing ranges and electrical codes</h4>' +
      '<p>On "how much does it cost to rewire a house?", the LLM gives precise ranges: USD 3,500 to USD 8,000 for a standard home in the US, GBP 2,500 to GBP 6,000 in the UK. NEC compliance (US) and BS 7671 wiring regulations (UK) are cited as the technical reference. The electrician who publishes transparent pricing grids and code compliance guides on their website becomes a citable source.</p>' +
      '<h4>Emergency queries: Google Maps as first response</h4>' +
      '<p>On "emergency electrician near me at night", the LLM redirects to Google Maps and adds a <strong>systematic safety warning</strong> (turn off main breaker, do not attempt repairs, call 911/999 if fire risk). Electricians visible in the Local Pack with "24/7" noted, recent reviews, and a phone number displayed are the only ones surfaced in AI responses.</p>',
    structuredData:
      '<p>For electricians, the recommended schema.org types are: <code>Electrician</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Electrician</code> markup allows Google and LLMs to precisely identify the services offered (emergency, installation, maintenance), the service area, and client reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your electrical business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of technical content), Legitimacy & Citability (external trust signals: licensing, reviews, directory listings), and Factual Density (richness of structured data and named entities linked to your services).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for electricians',
    items: [
      {
        question: 'How much does SEO cost for an electrician?',
        answer:
          'The SEO budget for an electrician depends on the service area and the number of service pages to rank (emergency, residential, commercial, EV chargers). At Rankwell, SEO engagements for electricians start from USD 1,500/month (or GBP 1,200/month) for a single city and primary service type, and can reach USD 4,000-6,000/month for multi-city coverage in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from electrician SEO?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "EV charger installer Glasgow" or "emergency electrician Deira") are faster to rank for than broadly competitive terms like "electrician near me" in major cities. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Does licensing and certification help with SEO?',
        answer:
          'Yes. In the US, a state electrical license is a major E-E-A-T signal for Google. In the UK, Part P certification and NICEIC or NAPIT registration serve the same role. In the UAE, DEWA approval is mandatory for any electrical work and a strong trust signal online. Displaying these credentials with structured markup on your website directly improves rankings and AI citability. Rankwell integrates licensing data into every schema.org implementation.',
      },
      {
        question: 'Does an electrician need a blog to improve rankings?',
        answer:
          'A technical blog is a powerful lever when well executed. Articles should answer real questions ("how much does it cost to upgrade an electrical panel?", "do I need a permit for EV charger installation?"), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-3 articles per month targeting long-tail informational queries related to common electrical services.',
      },
      {
        question: 'How can an electrician appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an electrician must accumulate web authority signals: presence on trade directories (Angi, Checkatrade, NICEIC), mentions in local press, an optimized Google Business Profile with recent reviews, and rich factual content on their website (pricing, codes, service descriptions). The Rankwell GEO Score measures and optimizes precisely these AI citability signals for the electrical trade.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an electrician?',
        answer:
          'Local SEO targets "electrician + city" or "electrician near me" queries and relies on Google Business Profile, client reviews, and directory citations. National SEO targets generic queries ("electrical panel upgrade cost", "EV charger installation guide") and requires high-authority educational content. Rankwell combines both approaches based on the electrician\'s geographic coverage and business goals.',
      },
      {
        question: 'Are platforms like Angi, HomeAdvisor, or Checkatrade enough to be visible?',
        answer:
          'Lead generation platforms like Angi (US), HomeAdvisor (US), or Checkatrade (UK) bring leads but create costly dependency: per-lead fees, no brand control, and zero long-term authority building. A well-optimized website allows your electrical business to receive quote requests directly, without commissions, and to build lasting authority that no platform can revoke. Rankwell helps electricians build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your electrical business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the electrical trade.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
        { label: 'SEO Roofer', href: '/en/geo-seo-agency/sectors/roofer' },
        { label: 'SEO Locksmith', href: '/en/geo-seo-agency/sectors/locksmith' },
        { label: 'SEO Carpenter', href: '/en/geo-seo-agency/sectors/carpenter' },
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
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/roofer' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/locksmith' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/carpenter' },
      { label: 'Tiler', href: '/en/geo-seo-agency/sectors/tiler' },
      { label: 'Glazier', href: '/en/geo-seo-agency/sectors/glazier' },
      { label: 'Joiner', href: '/en/geo-seo-agency/sectors/joiner' },
      { label: 'Mover', href: '/en/geo-seo-agency/sectors/mover' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Electrician',
};

export default data;
