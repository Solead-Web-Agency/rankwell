/**
 * DATA: Sector Page Carpenters (EN)
 * Route: /en/geo-seo-agency/sectors/menuisier
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (MarketKeep, SeoLabs), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'carpenter',
    title: 'GEO & SEO Agency for Carpenters - Rankwell',
    description:
      'Rankwell helps carpenters and carpentry businesses boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the carpentry industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Carpenters' },
    ],
    title: 'GEO & SEO for Carpenters: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for a carpenter on Google and in AI engine responses. Our experts design GEO & SEO strategies tailored to the constraints of the carpentry trade across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your carpentry business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for carpenters',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of carpentry-related queries contain a local component</strong>. Clients search from mobile for a nearby professional to handle a concrete project. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      'Homeowners verify qualifications, licensing, insurance, and reviews before contacting a carpenter. In the US, state contractor licensing varies; in the UK, NVQ and <strong class="text-secondary dark:text-accent">Federation of Master Builders</strong> membership matter; in the UAE, DED trade licenses are required. These trust signals must appear on every page.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, Houzz, HomeAdvisor</strong> (US), <strong class="text-secondary dark:text-accent">MyBuilder, Checkatrade</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent carpentry queries with comparison quotes. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent carpenter stays invisible against these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
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
        { keyword: 'carpenter near me', volume: 27100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'custom carpentry', volume: 1600, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'finish carpenter near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'cabinet installation services', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'deck building carpenter', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'carpentry services near me', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a carpenter cost', volume: 1300, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'carpenter near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'joiner near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bespoke carpentry', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'kitchen fitter near me', volume: 2900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'custom furniture maker', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'carpenter and joiner', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'how to find a good carpenter UK', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'carpenter dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'carpentry services dubai', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'fit out carpenter dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'custom furniture dubai', volume: 880, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'joinery company UAE', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'kitchen cabinet maker dubai', volume: 480, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a carpenter cost in dubai', volume: 320, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "carpenter near me", "joiner near me", or "carpentry services dubai" represent homeowners and businesses with concrete projects: custom cabinets, kitchen fitting, decking, bespoke furniture. The majority contact the top 3 results on Google, or follow the recommendation of an AI engine. If your business does not appear there, those projects go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for carpentry businesses',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of the carpentry trade across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation for a carpentry website.',
        items: [
          'Page structure by service type (custom furniture, cabinetry, decking, fit-out)',
          'Schema.org Carpenter and HomeAndConstructionBusiness markup',
          'Performance and Core Web Vitals (project gallery images often heavy)',
          'Crawl and indexation review of portfolio and project pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the carpentry business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the business\'s informational universe in the carpentry niche',
          'Measurement of legitimacy and citability on trade-related queries',
          'Evaluation of content factual density (certifications, project data, materials)',
          'Competitive benchmark on AI queries in the carpentry sector',
        ],
      },
      {
        title: 'Market study & carpentry keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines about carpentry',
          'Real search volumes by specialty (cabinetry, decking, bespoke furniture) and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the homeowner\'s journey from inspiration to quote request.',
        items: [
          'Service page (kitchen, decking, furniture) > project gallery > quote request',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with trade-specific terms',
        ],
      },
      {
        title: 'Carpentry content strategy',
        subtitle: 'Creation of educational content demonstrating the business\'s craftsmanship, written to be citable by LLMs.',
        items: [
          'Guides: "How to choose between hardwood, softwood, and engineered timber"',
          'Project showcases with before/after photos and technical specifications',
          'FAQs answering Google People Also Ask (pricing, timelines, material comparisons)',
        ],
      },
      {
        title: 'Authority & trade link building',
        subtitle: 'Authority development through qualified trade directories and specialized publications.',
        items: [
          'Angi, Houzz, HomeAdvisor, BBB (US)',
          'Checkatrade, MyBuilder, Federation of Master Builders (UK)',
          'Trade press publications and supplier partnership backlinks',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the Google Business Profile to capture local "carpenter + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Carpenter + secondary categories (Cabinet Maker, Woodworker)',
          'Client review management and post-project collection strategy',
          'Project photos, hours, service area, and regular posts',
          'Consistent NAP citations across trade directories (Houzz, Angi, Checkatrade)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by carpentry keyword',
          'Organic traffic by service (cabinetry, decking, furniture)',
          'GEO Score: visibility in AI engines',
          'Quote requests and phone call conversions',
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
        description: 'Full diagnostic of your carpentry website: page architecture by service type (cabinetry, decking, furniture, fit-out), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your business in ChatGPT, Perplexity, and Gemini on your target carpentry queries. Benchmark against 3 to 5 competing businesses and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Carpenter, HomeAndConstructionBusiness, FAQPage, and BreadcrumbList markup ready to integrate. Allows Google and AI engines to identify your specialties, service area, and client reviews.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (custom cabinets, decking, bespoke furniture), project showcases with technical data, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (Angi, Houzz, Checkatrade, MyBuilder), home improvement blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by carpentry specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your carpentry business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which carpenter do you recommend in Dallas?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which carpenter do you recommend in London for a kitchen refit?": the LLM does not cite a specific business. It provides a list of selection criteria (qualifications, trade body membership, insurance, client reviews) and redirects to directories: Checkatrade, MyBuilder, Houzz, and the Federation of Master Builders. Carpenters with a complete Google Business Profile and recent reviews are mentioned as easier to evaluate.</p><h4>Informational queries</h4><p>"How to choose a good carpenter?" or "carpenter vs joiner: what\'s the difference?": the LLM generates a structured guide with 6 to 8 criteria, without citing any specific business. The carpenter who publishes this type of structured content on their website can be cited as a reference source.</p><h4>Pricing queries</h4><p>"How much does a carpenter charge per hour?": the LLM gives detailed pricing ranges (USD 40 to USD 90 per hour in the US, GBP 25 to GBP 50 per hour in the UK, AED 80 to AED 200 per hour in the UAE). Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "carpenter near me for custom cabinets", <strong>ChatGPT activates Search mode with a Maps card</strong>. Businesses with a complete Google Business Profile (category, recent reviews, project photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For carpentry businesses, the recommended schema.org types are: <code>Carpenter</code> (primary type, subtype of <code>HomeAndConstructionBusiness</code>), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Carpenter</code> markup allows Google and LLMs to precisely identify the specialties (cabinetry, decking, bespoke furniture), the service area, and the client reviews of the business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your carpentry business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content across carpentry services), Legitimacy & Citability (external trust signals: trade directories, reviews, press), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for carpenters',
    items: [
      {
        question: 'How much does SEO cost for a carpentry business?',
        answer:
          'The SEO budget for a carpentry business depends on the number of services and the geographic scope targeted. At Rankwell, SEO engagements for carpenters start from USD 1,500/month (or GBP 1,200/month) for a single service area and one city, and can reach USD 4,000-6,000/month for a multi-service carpentry company covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from carpentry SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "bespoke joiner Glasgow" or "fit-out carpenter Dubai") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your local market.',
      },
      {
        question: 'What certifications and qualifications help a carpenter rank better?',
        answer:
          'Trade certifications are strong trust signals for both Google and AI engines. In the US, state contractor licenses and EPA Lead-Safe certification matter. In the UK, NVQ Level 2-3, City & Guilds, and Federation of Master Builders membership carry weight. In the UAE, DED trade licenses and JAFZA/DAFZA free zone permits are required. Rankwell integrates these credentials into the content strategy and structured data markup.',
      },
      {
        question: 'Does a carpentry business need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real questions (inspired by Google People Also Ask), demonstrate verifiable craftsmanship, and be written to be citable by AI engines. Rankwell recommends 2-3 articles per month targeting long-tail informational queries such as material comparisons, project cost breakdowns, and maintenance guides.',
      },
      {
        question: 'How can a carpenter appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a carpentry business must accumulate web authority signals: presence on trade directories (Angi, Houzz, Checkatrade, MyBuilder), client reviews, an optimized Google Business Profile, and rich factual content on its website (pricing, project data, certifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a carpenter?',
        answer:
          'Local SEO targets "carpenter + city" or "carpenter near me" queries and relies on Google Business Profile, client reviews, and trade directory citations. National SEO targets broader queries ("custom furniture maker", "bespoke cabinetry") and requires high-authority educational content. Rankwell combines both approaches based on the business\'s ambition and service area.',
      },
      {
        question: 'Are platforms like Angi, Houzz, and Checkatrade enough to be visible?',
        answer:
          'Trade platforms like Angi and Houzz are useful for initial visibility, but they create dependency: the carpenter is just one profile among hundreds, competing on price. A well-optimized website allows the business to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps carpenters build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your carpentry business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architecte' },
        { label: 'SEO Auto Repair', href: '/en/geo-seo-agency/sectors/garage' },
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
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/garage' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Carpenter',
};

export default data;
