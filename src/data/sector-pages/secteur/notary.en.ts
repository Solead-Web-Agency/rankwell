/**
 * DATA: Sector Page Notary (EN)
 * Route: /en/geo-seo-agency/sectors/notary
 *
 * Pilot EN page, adapted for US / UK / UAE markets
 * Keyword data: industry sources (NNA, Notaries Society, MarketKeep), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'notary',
    title: 'GEO & SEO Agency for Notaries - Rankwell',
    description:
      'Rankwell helps notary practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for notary public services across the US, UK, and UAE.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Notary' },
    ],
    title: 'GEO & SEO for Notaries: Google & AI Engine Visibility',
    subtitle:
      'Your notary practice needs to appear where clients search: on Google, but also in ChatGPT and Perplexity responses. Whether you are a Notary Public in the US, a solicitor-notary in the UK, or a licensed notary in the UAE, our experts design GEO & SEO strategies tailored to your regulatory environment.',
    ctaText: 'Request a GEO & SEO audit for your notary practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for notaries',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of notary queries include a location or "near me"</strong>. In the US alone, "notary near me" exceeds 100,000 monthly searches. Decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Notary services are <strong class="text-secondary dark:text-accent">regulated differently in each market</strong>: state commissions in the US, Faculty Office in the UK, government offices and DIFC in the UAE. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these distinct regulatory frameworks.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">NNA, FindaNotary, The UPS Store</strong> (US), <strong class="text-secondary dark:text-accent">Notaries Society</strong> (UK), <strong class="text-secondary dark:text-accent">Dubai Courts</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent practice stays invisible.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'According to Rankwell, E-E-A-T signals do not only serve to satisfy Google\'s Quality Raters. They constitute the primary criterion by which AI engines select their sources, favoring content that demonstrates verifiable expertise and documented experience rather than mere domain authority.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'Learn more about E-E-A-T',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'notary public near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'mobile notary', volume: 49500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'notary services', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'notary signing agent', volume: 14800, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'remote online notarization', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'how much does a notary cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'notary fees by state', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'notary public near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'notary public london', volume: 3600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'notarise documents', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'notary public fees UK', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'apostille service', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'legalisation of documents', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'solicitor notary', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'notary public dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'attestation services dubai', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'notarisation dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'DIFC notary', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'document attestation UAE', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'apostille dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'notary abu dhabi', volume: 1000, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "notary public near me", "mobile notary", or "notary public dubai" represent individuals and businesses actively seeking notarisation services. In the US, "notary near me" alone exceeds 100,000 monthly searches. The majority click on the top 3 results in Google\'s Local Pack, or follow the recommendation of an AI engine. If your practice does not appear there, those clients go to a competitor or a chain provider like The UPS Store.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for notary practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of notary services across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by service type (real estate closings, powers of attorney, apostille, attestation)',
          'Schema.org Notary and LegalService markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & notary keyword research',
        subtitle: 'Mapping of search queries by notary service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service type + city combinations with low competition',
          'Analysis of queries asked to AI engines about notarisation',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for user journey and Google crawl efficiency.',
        items: [
          'Service page > notary profile page > booking/contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Notary content strategy',
        subtitle: 'Creation of educational content demonstrating the practice\'s expertise, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask (fees, process, documents needed)',
          'Self-sufficient factual sentences with verifiable regulatory references',
          'Compliance with notary advertising rules by jurisdiction (state commissions, Faculty Office, UAE MOJ)',
        ],
      },
      {
        title: 'Authority & notary link building',
        subtitle: 'Authority development through qualified notary directories and specialized publications.',
        items: [
          'National Notary Association, FindaNotary, Notary.com (US)',
          'The Notaries Society, Faculty Office directory (UK)',
          'Dubai Courts, DIFC portal, legal press publications',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the practice\'s Google Business Profile to capture local "notary + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Notary Public + secondary categories by service type',
          'Client review management and collection strategy',
          'Photos, hours, attributes, and regular posts',
          'Consistent NAP citations across notary directories and legal platforms',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and appointment requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Appointment requests and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team can act on immediately to improve visibility.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your notary website: page architecture by service type, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target notary queries. Benchmark against 3 to 5 competing practices and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Notary, LegalService, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your service types (real estate, powers of attorney, apostille). Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (real estate closings, powers of attorney, apostille, attestation), informational guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from notary directories (NNA, FindaNotary, Notaries Society), legal blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
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
    title: 'AI Visibility: your notary practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which notary public do you recommend near me?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>No specific practice named spontaneously</h4>' +
      '<p>Across 5 queries tested ("which notary public do you recommend in New York?", "how do I find a good notary?", "notary public vs solicitor notary UK", "how much does a notary cost?", "notary near me for power of attorney"), <strong>no LLM names a specific notary practice</strong>. The model refuses to recommend a specific notary and redirects to directories: the National Notary Association and FindaNotary (US), the Faculty Office and Notaries Society (UK), or Dubai Courts (UAE).</p>' +
      '<h4>Directories: the LLM\'s first reflex</h4>' +
      '<p>The National Notary Association (NNA) directory is mentioned in 3 out of 5 US-focused responses as the primary resource. The UPS Store is cited as a convenient option. In the UK, the Faculty Office "Find a Notary" tool appears systematically. <strong>These institutional directories are the sources LLMs trust most</strong>. Google Business Profile appears as the second resource for every local query.</p>' +
      '<h4>Fee and process content: the most citable format</h4>' +
      '<p>On "how much does a notary cost?", the LLM produces a detailed breakdown: USD 2 to USD 20 per signature in the US (varying by state), GBP 60 to GBP 250 per appointment in the UK, AED 499+ per transaction in the UAE. Sites providing precise, jurisdiction-specific pricing data and step-by-step process guides have the highest chance of being extracted as a source.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "notary near me" and "notary public london", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Notary Public, recent reviews, photos, hours) appear directly in the AI response. The LLM does not recommend a name, but displays the best-optimized local results.</p>',
    structuredData:
      '<p>For notary practices, the recommended schema.org types are: <code>Notary</code> (primary type), <code>LegalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Notary</code> markup allows Google and LLMs to precisely identify the service types, location, hours, and client reviews of the practice.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on notary services), Legitimacy & Citability (external trust signals: official directories, legal press, reviews), and Factual Density (richness of structured data and named entities related to notarisation).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for notaries',
    items: [
      {
        question: 'How much does SEO cost for a notary practice?',
        answer:
          'The SEO budget for a notary practice depends on the number of service types promoted and the geographic scope targeted. At Rankwell, SEO engagements for notaries start from USD 1,500/month (or GBP 1,200/month) for a single-location practice, and can reach USD 4,000-5,000/month for a multi-location practice in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from notary SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "mobile notary signing agent Sacramento" or "notary public Kensington") are faster to rank for than nationally competitive terms like "notary near me". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with notary regulations?',
        answer:
          'Yes, SEO is fully compatible with notary regulations in all three markets. In the US, notary advertising rules vary by state but generally permit online marketing as long as claims are truthful. In the UK, the Faculty Office oversees notary conduct and does not prohibit website promotion. In the UAE, licensed notaries and attestation services operate within the framework of the Ministry of Justice and DIFC. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a notary need a blog to improve rankings?',
        answer:
          'Educational content is a powerful lever for notary SEO. Articles answering real questions ("how much does notarisation cost?", "what documents do I need for a power of attorney?", "apostille vs notarisation") demonstrate expertise and are highly citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries specific to your jurisdiction.',
      },
      {
        question: 'How can a notary appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a notary practice must accumulate web authority signals: presence on notary directories (NNA, FindaNotary, Notaries Society), mentions in legal press, an optimized Google Business Profile, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a notary?',
        answer:
          'Local SEO targets "notary + city" or "notary near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("mobile notary services", "remote online notarization") and requires high-authority educational content. Rankwell combines both approaches based on the practice\'s growth strategy and geographic footprint.',
      },
      {
        question: 'Are notary directories enough to be visible online?',
        answer:
          'Notary directories like the NNA, FindaNotary, or The Notaries Society are useful for baseline visibility, but they create dependency: your practice is one listing among thousands. A well-optimized website allows the practice to control its image, convert directly, and build lasting authority that directories cannot revoke. Rankwell helps notary practices build this independent presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your notary practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'GEO Audit', href: '/en/glossary/audit-geo' },
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Notary',
};

export default data;
