/**
 * DATA: Sector Page Graphic Designers (EN)
 * Route: /en/geo-seo-agency/sectors/graphic-designer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + KeySearch + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'graphic-designer',
    title: 'GEO & SEO Agency for Graphic Designers - Rankwell',
    description:
      'Rankwell helps graphic designers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the graphic design industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Graphic Designers' },
    ],
    title: 'GEO & SEO for Graphic Designers: Google & AI Engine Visibility',
    subtitle:
      'Your potential clients search for a graphic designer on Google, Dribbble or in ChatGPT responses. Our experts design GEO & SEO strategies tailored to the graphic design market and the portfolio-driven client journey.',
    ctaText: 'Request a GEO & SEO audit for your design business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for graphic designers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of graphic design queries include a city, "near me" or "freelance"</strong>. The decision happens in Google\'s Local Pack, on portfolio platforms, or in AI engine responses.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Portfolios drive conversions, but Google cannot read images</strong>. A site built on 90% visuals with no structured text is nearly invisible. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must make visual work indexable (alt tags, captions, contextual copy) while preserving aesthetic impact.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Dribbble, Behance, Fiverr, 99designs, Upwork</strong> and <strong class="text-secondary dark:text-accent">Bark</strong> dominate high-intent design queries across all three markets. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent designer stays buried behind these aggregators.',
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
        { keyword: 'graphic designer near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'freelance graphic designer', volume: 22200, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'graphic design services', volume: 12100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'logo designer near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'graphic design agency', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how much does a graphic designer cost', volume: 3600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'graphic designer near me', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'freelance graphic designer', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'graphic design agency', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'logo designer UK', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'graphic design services', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'branding agency near me', volume: 880, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a graphic designer charge UK', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'graphic designer dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'graphic design company dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'freelance graphic designer dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'logo design dubai', volume: 880, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'branding agency dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'graphic design services UAE', volume: 480, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "graphic designer near me", "freelance graphic designer", or "graphic design company dubai" represent potential clients actively looking for design services. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your portfolio site does not appear there, those projects go to a platform or a better-ranked competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for graphic designers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the visual-first nature of design portfolios and the competitive landscape across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the portfolio site architecture, image loading performance, and technical factors blocking indexation of visual content.',
        items: [
          'Portfolio page indexability (images, contextual text, gallery structure)',
          'Schema.org ProfessionalService and VisualArtwork markup',
          'Performance and Core Web Vitals (image weight optimization)',
          'Crawl and indexation review of gallery pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the designer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the designer\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & design keyword research',
        subtitle: 'Mapping of search queries by design specialty (branding, packaging, web design, print) and geographic area across US, UK, and UAE markets.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring to make each portfolio project indexable and comprehensible by Google while preserving visual impact.',
        items: [
          'Service page (logo, branding, print, web) with text and visuals',
          'Primary keyword + 3-5 secondary keywords per page',
          'Descriptive alt tags, captions, and contextual text for every visual',
        ],
      },
      {
        title: 'Creative content strategy',
        subtitle: 'Creation of educational content demonstrating the designer\'s expertise, written to be citable by LLMs.',
        items: [
          'Case studies with brief, process, and outcome',
          'Articles on design trends, tools, and best practices',
          'FAQs on pricing, timelines, and the creative process',
        ],
      },
      {
        title: 'Authority & creative link building',
        subtitle: 'Authority development through design platforms, specialized publications, and creative awards.',
        items: [
          'Dribbble, Behance, Upwork profiles with backlinks',
          'Publications in design blogs, magazines (Creative Bloq, AIGA Eye on Design)',
          'Submissions to creative awards (Awwwards, CSS Design Awards, D&AD)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the Google Business Profile to capture local "graphic designer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Graphic Designer + secondary categories by specialty',
          'Client review management and post-project collection strategy',
          'Portfolio photos, hours, attributes fully completed',
          'Consistent NAP citations across freelance directories and design platforms',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service (logo, branding, print, web)',
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
    subtitle: 'Each deliverable is a document or tool your SEO experts, creative team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your design website: portfolio architecture, image loading speed, alt tag coverage, gallery indexation. Every blocking issue is documented with its corrective action.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your design business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against 3 to 5 competing designers or studios and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, VisualArtwork, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your design specialties and service area. Delivered with a CMS integration guide (WordPress, Webflow, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (logo design, branding, print, web), case studies, trend articles, and FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from Dribbble, Behance, design blogs, and creative press. Tracking of links obtained and Domain Rating progression of your design business.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by design specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your design business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which freelance graphic designer do you recommend in Chicago?", the LLM compiles information from across the web to formulate its response. If your site does not appear in any cited source, you are invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which graphic designer do you recommend in London for branding?": the LLM does not cite a specific designer. It provides a list of 5 to 7 selection criteria (portfolio quality, specialization, client reviews, pricing) and redirects to platforms: Dribbble, Behance, Bark, and Upwork. Designers with a well-ranked personal website and active profiles on these platforms accumulate the most visibility signals.</p><h4>Informational queries</h4><p>"How to choose a good graphic designer?" or "graphic designer vs graphic artist": the LLM generates a structured guide with 6 to 8 criteria, without citing any specific designer or source. Sites publishing comparison guides with factual data (pricing ranges, turnaround times by project type) have the strongest citation potential.</p><h4>Pricing queries</h4><p>"How much does a graphic designer cost?": the LLM gives detailed pricing ranges by experience level: freelance beginner (USD 25-50/hour), mid-level freelancer (USD 50-150/hour), senior designer or agency (USD 150-300/hour). For project-based pricing, it lists: logo design (USD 300-2,500), full brand identity (USD 2,000-10,000). Sites providing precise, up-to-date pricing grids are extracted as sources first.</p><h4>Local and Maps queries</h4><p>On "graphic designer near me", ChatGPT activates Search mode with a Maps card. Designers with a complete Google Business Profile (category Graphic Designer, portfolio photos, recent reviews) appear directly in the AI response.</p>',
    structuredData:
      '<p>For graphic designers, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>VisualArtwork</code> (for portfolio projects), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>ProfessionalService</code> markup allows Google and LLMs to precisely identify the services offered, the location, and the client reviews of the designer.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your design business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for graphic designers',
    items: [
      {
        question: 'How much does SEO cost for a graphic design business?',
        answer:
          'The SEO budget for a graphic designer or design studio depends on the number of specialties and the geographic scope targeted. At Rankwell, SEO engagements for graphic designers start from USD 1,500/month (or GBP 1,200/month) for a freelancer targeting one city, and can reach USD 4,000-6,000/month for a multi-specialty studio targeting several metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from SEO for a graphic designer?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "freelance graphic designer Austin" or "logo designer Manchester") are faster to rank for than nationally competitive terms like "graphic design agency". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'My portfolio is mostly images. How can Google index it?',
        answer:
          'Google cannot read images directly. To make a portfolio indexable, every visual must be accompanied by contextual text: a descriptive alt tag, a caption, a project title, the client brief, and a description of the creative process. Rankwell structures each portfolio page so it is readable by search engines while preserving visual impact. This approach also makes content extractable by AI engines like ChatGPT and Perplexity.',
      },
      {
        question: 'Does a graphic designer need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real client questions (pricing, trends, creative process) and demonstrate verifiable expertise. Rankwell recommends 2 to 4 articles per month, targeting long-tail informational queries like "how much does a logo cost" or "graphic design trends 2026".',
      },
      {
        question: 'How can a graphic designer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a designer must accumulate web authority signals: active profiles on Dribbble, Behance and Upwork, mentions in design publications, an optimized Google Business Profile, and rich factual content on their website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a graphic designer?',
        answer:
          'Local SEO targets "graphic designer + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("freelance graphic designer", "graphic design services") and requires high-authority educational content. Rankwell combines both approaches based on the designer\'s strategy and service area.',
      },
      {
        question: 'Are platforms like Dribbble, Fiverr, or Upwork enough to find clients?',
        answer:
          'Freelance platforms are useful for initial visibility, but they create dependency: the designer is just one profile among thousands, subject to commissions and platform algorithms. A well-optimized personal website lets the designer control their image, convert directly without commission, and build lasting authority that platforms cannot revoke. Rankwell helps graphic designers build this independent online presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your design business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architect' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
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
        { label: 'Citability', href: '/en/glossary/citabilite' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Barber', href: '/en/geo-seo-agency/sectors/barber' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/landscaper' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
