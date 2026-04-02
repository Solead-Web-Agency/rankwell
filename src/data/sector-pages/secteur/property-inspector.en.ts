/**
 * DATA: Sector Page Property Inspectors (EN)
 * Route: /en/geo-seo-agency/sectors/property-inspector
 *
 * Adapted for US / UK / UAE markets
 * Home inspector ASHI/InterNACHI (US), surveyor RICS (UK), Snagging/DLP inspector (UAE)
 * Keyword data: Ahrefs seed "home inspector" + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'property-inspector',
    title: 'GEO & SEO Agency for Property Inspectors - Rankwell',
    description:
      'Rankwell helps home inspectors and building surveyors boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the property inspection industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Property Inspectors' },
    ],
    title: 'GEO & SEO for Property Inspectors: Google & AI Engine Visibility',
    subtitle:
      'Homebuyers compare inspection reports and prices before booking. Whether you are an ASHI-certified home inspector in the US, a RICS building surveyor in the UK, or a snagging specialist in the UAE, our experts design GEO & SEO strategies tailored to the property inspection market.',
    ctaText: 'Request a GEO & SEO audit for your inspection business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for property inspectors',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of property inspection searches include a geographic qualifier or "near me"</strong>. Homebuyers need a certified inspector within their area. The decision happens in minutes between the top 3 Google results or an AI engine recommendation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Professional certification is the first trust signal for Google and AI engines.</strong> ASHI or InterNACHI (US), RICS (UK), or RERA/DLD (UAE) must appear on your site with structured markup. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate licensing rules that vary by state, country, and inspection type.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HomeAdvisor, Angi, Thumbtack</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, RICS Find a Surveyor</strong> (UK), and <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent inspection queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent inspector stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s local pack.',
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
        { keyword: 'home inspector near me', volume: 40500, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'home inspection', volume: 33100, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'home inspection cost', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'home inspector', volume: 27100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'pre purchase home inspection', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'home inspection checklist', volume: 8100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'radon inspection', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'building survey', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'home survey cost', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'RICS surveyor near me', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'homebuyer report', volume: 3600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'EPC certificate', volume: 9900, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'snagging survey new build', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'property survey types', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'home inspection dubai', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'snagging inspection dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'property inspection dubai', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'building inspection abu dhabi', volume: 390, intent: 'locale', difficulty: 'faible' },
        { keyword: 'DLP inspection dubai', volume: 320, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'villa inspection UAE', volume: 260, intent: 'locale', difficulty: 'faible' },
        { keyword: 'property defect report dubai', volume: 170, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "home inspector near me", "building survey", or "snagging inspection dubai" represent buyers actively seeking a certified inspector. The majority contact one of the top 3 results, or follow the recommendation of an AI engine. If your inspection business does not appear there, those clients go to an aggregator or a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for property inspectors',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory and competitive constraints of the home inspection industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation on inspection-related queries.',
        items: [
          'Page structure by inspection type (general, radon, mold, termite, snagging)',
          'Schema.org ProfessionalService and HomeInspection markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of service area pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your inspection business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your business\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for property inspection',
        ],
      },
      {
        title: 'Market study & inspection keyword research',
        subtitle: 'Mapping of search queries by inspection type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Inspection type + city combinations with low competition',
          'Analysis of queries asked to AI engines about inspections and certifications',
          'Real search volumes by specialty (home, radon, snagging, EPC, building survey)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the homebuyer journey from research to booking.',
        items: [
          'Inspection type page > service area page > booking/quote page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with localized terms',
        ],
      },
      {
        title: 'Property inspection content strategy',
        subtitle: 'Creation of educational content demonstrating your expertise, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask (inspection checklist, cost, timeline)',
          'Self-sufficient factual sentences with verifiable data',
          'Content adapted to market regulations (state licensing US, Part P/Gas Safe UK, RERA UAE)',
        ],
      },
      {
        title: 'Authority & inspection link building',
        subtitle: 'Authority development through qualified inspection directories and specialized publications.',
        items: [
          'ASHI, InterNACHI directories (US)',
          'RICS Find a Surveyor, Checkatrade, TrustATrader (UK)',
          'Property press publications and real estate partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture "home inspector + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Home Inspector + secondary categories by inspection type',
          'Client review management and collection strategy',
          'Photos of inspections, certifications displayed, service area specified',
          'Consistent NAP citations across inspection and real estate directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by inspection type, and quote requests generated.',
        items: [
          'Google positions by keyword and service area',
          'Organic traffic by inspection type',
          'GEO Score: visibility in AI engines',
          'Quote requests and conversions',
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
        description: 'Full diagnostic of your website: page architecture by inspection type (general, radon, mold, snagging, EPC), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your business in ChatGPT, Perplexity, and Gemini on your target inspection queries. Benchmark against 3 to 5 competing inspectors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, Service (with serviceType per inspection), FAQPage, and BreadcrumbList markup ready to integrate, adapted to your inspection specialties. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of inspection type pages (home, radon, termite, snagging, building survey), educational articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from inspection directories (ASHI, InterNACHI, RICS), real estate blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by inspection type and service area, organic traffic by specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your inspection business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a homebuyer asks ChatGPT "which home inspector do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which home inspector do you recommend in Houston for a pre-purchase inspection?": the LLM does not cite any specific inspector. It provides a list of selection criteria (ASHI/InterNACHI certification, client reviews, Errors & Omissions insurance, years of experience) and redirects to directories and aggregators.</p><h4>Informational queries</h4><p>"What does a home inspection include?" or "home inspector vs building surveyor": the LLM generates a structured guide with 6 to 8 checklist items (roof, foundation, plumbing, electrical, HVAC, insulation) without citing any specific inspector. Businesses that publish this type of factual educational content on their website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a home inspection cost?": the LLM gives detailed pricing ranges (USD 200 to USD 500 in the US, GBP 300 to GBP 1,500 for RICS surveys in the UK). Sites providing precise, up-to-date pricing data by inspection type and property size have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "home inspector near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Inspectors with a complete Google Business Profile (category Home Inspector, recent reviews, service area) appear directly in the AI response.</p>',
    structuredData:
      '<p>For property inspection businesses, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>Service</code> (with a <code>serviceType</code> per inspection offered), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>ProfessionalService</code> markup allows Google and LLMs to precisely identify the types of inspections offered, the service area, and the certifications held.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your inspection business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content across inspection types), Legitimacy & Citability (external trust signals, ASHI/InterNACHI/RICS accreditation, press mentions), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for property inspectors',
    items: [
      {
        question: 'How much does SEO cost for a home inspection business?',
        answer:
          'The SEO budget for a property inspection business depends on the number of inspection types offered and the geographic scope. At Rankwell, SEO engagements for inspectors start from USD 1,500/month (or GBP 1,200/month) for a single service area, and can reach USD 4,000-6,000/month for multi-city coverage with multiple inspection specialties.',
      },
      {
        question: 'How long does it take to see results from inspection SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "radon inspection Atlanta" or "snagging survey Manchester") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Does ASHI or InterNACHI certification help SEO rankings?',
        answer:
          'Yes, professional certifications are powerful E-E-A-T signals for Google. A website that clearly displays ASHI or InterNACHI membership numbers, certification dates, continuing education, and Errors & Omissions insurance sends a verifiable legitimacy signal. Rankwell integrates these credentials into schema.org markup and site structure to maximize their impact on rankings and AI citability.',
      },
      {
        question: 'Does a home inspector need a blog to improve rankings?',
        answer:
          'A blog focused on homebuyer education is a powerful lever. Articles should answer real questions: what does a home inspection cover, how to read an inspection report, common defects in older homes, radon testing explained. Rankwell recommends 2-4 articles per month targeting long-tail informational queries that LLMs cite frequently.',
      },
      {
        question: 'How can a property inspector appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an inspection business must accumulate web authority signals: presence on ASHI.com, InterNACHI.org, or RICS Find a Surveyor, mentions in real estate press, an optimized Google Business Profile, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an inspector?',
        answer:
          'Local SEO targets "home inspector + city" or "building surveyor near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("home inspection checklist", "what does a building survey include") and requires high-authority educational content. Rankwell combines both approaches based on your business strategy.',
      },
      {
        question: 'Are aggregator directories enough to be visible as an inspector?',
        answer:
          'Directories like HomeAdvisor, Checkatrade, or ServiceMarket are useful for initial visibility, but they create dependency: your business is one profile among hundreds. A well-optimized website allows you to control your image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps inspectors build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your inspection business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architecte' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
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
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
