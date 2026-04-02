/**
 * DATA: Sector Page Architects (EN)
 * Route: /en/geo-seo-agency/sectors/architect
 *
 * Pilot EN page, adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (RIBA, AIA, Houzz), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'architect',
    title: 'GEO & SEO Agency for Architects - Rankwell',
    description:
      'Rankwell helps architecture firms boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the architecture industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Architects' },
    ],
    title: 'GEO & SEO for Architects: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for architects on Google and ask ChatGPT before commissioning a project. Our experts design GEO & SEO strategies tailored to the constraints of architecture firms across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your architecture firm',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for architects',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of architecture-related queries include a city name or "near me"</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens in the top 3 Google results or in AI engine responses.',
    constraints:
      '"Architect" is a <strong class="text-secondary dark:text-accent">legally protected title</strong> in most markets: state licensing boards (US), ARB registration (UK), Dubai Municipality (UAE). Content must reflect verifiable credentials to satisfy E-E-A-T requirements.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Houzz, Architizer, RIBA Find an Architect</strong> (UK), <strong class="text-secondary dark:text-accent">AIA Architect Finder</strong> (US) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an architecture firm stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its notoriety than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
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
        { keyword: 'architect near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'residential architect', volume: 12100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'architect cost', volume: 8100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'home architect', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'architect for home renovation', volume: 3600, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how much does an architect cost', volume: 5400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'modern house architect', volume: 2900, intent: 'commerciale', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'architect near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'residential architect london', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'architect fees uk', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'house extension architect', volume: 1900, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'architect vs architectural designer', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'riba architect', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'architect for loft conversion', volume: 720, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'architect dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'architecture firms dubai', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'residential architect dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'villa architect dubai', volume: 480, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'interior architect dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'architect cost dubai', volume: 390, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'architect abu dhabi', volume: 480, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "architect near me", "residential architect", or "architect dubai" represent potential clients actively seeking an architecture firm for their project. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your firm does not appear there, those projects go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for architecture firms',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints and visual nature of the architecture profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of project pages and portfolio galleries.',
        items: [
          'Page structure by project type (residential, commercial, renovation, urban planning)',
          'Schema.org ArchitectureFirm and ProfessionalService markup',
          'Performance and Core Web Vitals (HD portfolio images often unoptimized)',
          'Crawl and indexation review for visual galleries',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the firm\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the firm\'s informational universe',
          'Measurement of legitimacy and citability across LLMs',
          'Evaluation of content factual density (project data, materials, budgets)',
          'Competitive benchmark on AI queries in the architecture sector',
        ],
      },
      {
        title: 'Market study & architecture keyword research',
        subtitle: 'Mapping of search queries by architectural specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines about architecture',
          'Real search volumes by project type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the client journey, from first contact to project commission.',
        items: [
          'Specialty page (residential, renovation, commercial) > project page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with architectural terminology',
        ],
      },
      {
        title: 'Architecture content strategy',
        subtitle: 'Creation of content showcasing the firm\'s expertise (case studies, regulatory guides, project analyses), written to be citable by LLMs.',
        items: [
          'Detailed case studies with quantified data (area, budget, timeline, materials)',
          'Practical guides: planning permission, building regulations, sustainability standards',
          'Self-sufficient factual sentences compliant with professional codes of conduct',
        ],
      },
      {
        title: 'Authority & architecture link building',
        subtitle: 'Authority development through qualified professional directories and specialized publications.',
        items: [
          'RIBA Find an Architect, AIA Architect Finder, Houzz, Architizer',
          'Publications in architecture press (Dezeen, ArchDaily, Architectural Digest)',
          'Partnerships with professional bodies (RIBA, AIA, Dubai Municipality)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the firm\'s Google Business Profile to capture local "architect + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Architect + secondary categories (Building Firm, Architectural Designer)',
          'Project photos, plans, construction progress shots',
          'Client review management and post-completion collection strategy',
          'Consistent NAP citations across architecture directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by architectural specialty, and project inquiries generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by specialty (new build, renovation, extension, commercial)',
          'GEO Score: visibility in AI engines',
          'Project inquiries and contact requests',
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
        description: 'Full diagnostic of your firm\'s website: page architecture by project type, loading speed (with portfolio image optimization audit), Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your firm in ChatGPT, Perplexity, and Gemini on your target architecture queries. Benchmark against 3 to 5 competing firms and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, ArchitectureFirm, ImageGallery, and FAQPage markup ready to integrate, adapted to your firm\'s specialties. Delivered with a CMS integration guide (WordPress, Webflow, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of project pages (residential, renovation, commercial, urban design), architecture articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from architecture directories (Houzz, Architizer, RIBA), design blogs, and specialized press (Dezeen, ArchDaily). Tracking of links obtained and Domain Rating progression of your firm.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by project type page and local keyword, organic traffic by architectural specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your firm in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which architect do you recommend for a home extension in London?", the LLM compiles information from across the web to formulate its response. If your firm does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>No individual firm cited, ever</h4><p>Across 5 queries tested ("which architect do you recommend for a home extension in London?", "how to choose a good architect?", "architect vs interior designer", "how much does an architect cost for a new home?", "architect near me for renovation"), <strong>no LLM cites a named architecture firm</strong>. Even on an explicit local query with a city name, the model refuses nominative recommendation and redirects to directories.</p><h4>Professional registration bodies: absolute trust anchors</h4><p>ARB and RIBA (UK), state licensing boards and AIA (US), and Dubai Municipality (UAE) are mentioned in every response. They are the only institutions systematically cited. A firm registered with and featured in the resources of these bodies (directories, awards, publications) benefits from a structural citability advantage.</p><h4>Platforms capture all visibility</h4><p>RIBA Find an Architect, AIA Architect Finder, Houzz, and Architizer appear in 4 out of 5 responses as search intermediaries. Individual firm websites remain invisible. On "architect near me", <strong>ChatGPT activates Search mode with a Maps card</strong>: only firms with a complete Google Business Profile (Architect category, project photos, recent reviews) appear in the AI response.</p><h4>Generic fee ranges, citability opportunity</h4><p>Fee ranges remain vague: "8-15% of construction cost". A firm publishing detailed fee examples by project type (home extension 500 sqft, full renovation 2,000 sqft, new build 3,000 sqft) would provide the factual source that LLMs prefer to extract.</p>',
    structuredData:
      '<p>For architecture firms, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>Architect</code> (subtype), <code>ImageGallery</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>ProfessionalService</code> markup allows Google and LLMs to precisely identify the firm\'s specialties (residential, commercial, renovation), service area, and completed projects.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your architecture firm\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of architectural content), Legitimacy & Citability (external trust signals: press, directories, professional bodies), and Factual Density (richness of structured data and named entities in the portfolio).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for architects',
    items: [
      {
        question: 'How much does SEO cost for an architecture firm?',
        answer:
          'The SEO budget for an architecture firm depends on the number of specialties covered (residential, renovation, commercial, urban design) and the geographic scope targeted. At Rankwell, SEO engagements for architecture firms start from USD 2,000/month (or GBP 1,600/month) for a single specialty and one city, and can reach USD 5,000-7,000/month for a multi-specialty firm in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from architectural SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "architect for loft conversion Edinburgh" or "villa architect Dubai") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with architectural professional regulations?',
        answer:
          'Yes, SEO is fully compatible with the professional codes governing architecture. In the US, state licensing boards and AIA guidelines require truthful representation of credentials and project involvement. In the UK, the ARB Code of Conduct and RIBA Charter require accuracy in public communications. In the UAE, Dubai Municipality sets marketing standards for licensed firms. Rankwell understands these constraints and adapts every strategy to showcase the portfolio and expertise without breaching professional obligations.',
      },
      {
        question: 'Does an architecture firm need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever for architects when well executed. Articles should cover real questions (inspired by Google People Also Ask), such as planning permission processes, building regulation compliance, sustainability standards, and project cost breakdowns. Rankwell recommends 2-4 articles per month targeting long-tail informational queries, each written with quantified project data to maximize citability by AI engines.',
      },
      {
        question: 'How can an architect appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a firm must accumulate web authority signals: presence on professional directories (RIBA Find an Architect, AIA Architect Finder, Houzz, Architizer), mentions in architecture press (Dezeen, ArchDaily, Architectural Digest), an optimized Google Business Profile with project photos, and rich factual content on its website (detailed case studies with area, budget, and materials data). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an architect?',
        answer:
          'Local SEO targets "architect + city" or "architect near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best residential architect", "modern house architect") and requires high-authority editorial content (published case studies, press features, award mentions). Rankwell combines both approaches based on the firm\'s strategy and service area.',
      },
      {
        question: 'Are platforms like Houzz or Architizer enough to be visible?',
        answer:
          'Platforms like Houzz, Architizer, or RIBA Find an Architect are useful for initial visibility and portfolio exposure, but they create dependency: the firm is just one profile among thousands, with no control over the ranking algorithm. A well-optimized website allows the firm to present its portfolio in full detail, convert prospects directly, and build lasting authority that platforms cannot revoke. Rankwell helps architecture firms build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your architecture firm visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Landscaper', href: '/en/geo-seo-agency/sectors/landscaper' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
        { label: 'SEO Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Webflow', href: '/en/geo-seo-agency/cms/webflow' },
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
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/landscaper' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/carpenter' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
