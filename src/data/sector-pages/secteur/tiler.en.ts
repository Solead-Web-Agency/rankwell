/**
 * DATA: Sector Page Tilers (EN)
 * Route: /en/geo-seo-agency/sectors/carreleur
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs Keywords Explorer, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'tiler',
    title: 'GEO & SEO Agency for Tilers - Rankwell',
    description:
      'Rankwell helps tilers and tile installers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the tiling industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Tilers' },
    ],
    title: 'GEO & SEO for Tilers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for tile installers on Google and in ChatGPT responses. Our experts design GEO & SEO strategies tailored to tiling professionals, from bathroom renovations to large-scale commercial projects.',
    ctaText: 'Request a GEO & SEO audit for your tiling business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for tilers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of tiling-related searches include a location or "near me"</strong>. Homeowners need a tile installer locally, often for a bathroom or kitchen renovation. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where Google\'s Local Pack decides the first contact.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Tilers must prove craftsmanship visually</strong>: before-and-after project photos, trade certifications, and verifiable insurance. Google favors profiles with strong E-E-A-T signals such as detailed reviews and documented work. These physical-world credentials must be translated into digital trust signals.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HomeAdvisor, Angi, Houzz</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent tiling queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a tiling business stays invisible against these lead-generation platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s Local Pack.',
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
        { keyword: 'tile installer near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'tile contractors near me', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bathroom tile installation', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'tile installation cost', volume: 5400, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'shower tile installer', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'floor tile installation near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does tile installation cost per square foot', volume: 2400, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'tiler near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bathroom tiler near me', volume: 4400, intent: 'locale', difficulty: 'faible' },
        { keyword: 'tiling cost per m2', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'kitchen tiler', volume: 1600, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'wall tiling near me', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a tiler charge per day', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'floor tiler London', volume: 720, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'tile installation dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'tiler dubai', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'bathroom tiling dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'villa tiling services UAE', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'tile contractor abu dhabi', volume: 480, intent: 'locale', difficulty: 'faible' },
        { keyword: 'swimming pool tiling dubai', volume: 390, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'floor tiling cost dubai', volume: 320, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "tile installer near me", "tiler near me", or "tile installation dubai" represent homeowners and businesses actively looking for a tiling professional. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your business does not appear there, those projects go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for tiling businesses',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the visual and local nature of the tiling trade across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of project galleries.',
        items: [
          'Page structure by service type (bathroom, kitchen, floor, pool)',
          'Schema.org HomeAndConstructionBusiness markup',
          'Performance and Core Web Vitals (heavy project images)',
          'Crawl and indexation of photo galleries',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your tiling business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your business\'s informational universe',
          'Measurement of legitimacy and citability on trade queries',
          'Evaluation of content factual density (certifications, completed projects)',
          'Competitive benchmark on local AI queries',
        ],
      },
      {
        title: 'Market study & tiling keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of low-competition combinations.',
        items: [
          'Service type + city combinations with low competition',
          'Analysis of pricing queries (cost per sqft, cost per m2, day rates)',
          'Real search volumes by specialty (mosaic, large format, outdoor)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a clear user journey: service page, portfolio page, quote request page.',
        items: [
          'Service page > portfolio (before/after photos) > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with local terms',
        ],
      },
      {
        title: 'Content strategy for tiling businesses',
        subtitle: 'Creation of practical content demonstrating craftsmanship, written to be citable by LLMs.',
        items: [
          'Guides: "How to choose bathroom tiles", "Tile vs vinyl flooring"',
          'Pricing FAQs with cost ranges by tile type and room',
          'Project portfolios with detailed technical descriptions',
        ],
      },
      {
        title: 'Authority & trade link building',
        subtitle: 'Authority development through qualified trade directories and home improvement publications.',
        items: [
          'HomeAdvisor, Angi, Houzz, Thumbtack (US)',
          'Checkatrade, MyBuilder, Rated People, TrustMark (UK)',
          'Home improvement press and local trade partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "tiler + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Tiling Contractor + secondary categories (Flooring Contractor, Home Improvement)',
          'Recent project photos (before/after, detail shots, finished rooms)',
          'Client review management and post-project collection strategy',
          'Consistent NAP citations across home improvement directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by local keyword',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Quote requests and phone calls',
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
        description: 'Full diagnostic of your tiling website: page architecture by service type, loading speed for image-heavy galleries, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your tiling business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against 3 to 5 competing businesses and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'HomeAndConstructionBusiness, Service, FAQPage, and BreadcrumbList markup ready to integrate. Allows Google and LLMs to identify your services, service area, and client reviews precisely.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (bathroom tiling, kitchen backsplash, floor installation, outdoor tiling), how-to articles, and pricing FAQs. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (HomeAdvisor, Checkatrade, Houzz), home improvement blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by tiling specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your tiling business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a homeowner asks ChatGPT "which tiler do you recommend near me?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new project acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which tile installer do you recommend in Houston?": the LLM does not name a specific tiler. It provides a list of 5 to 6 selection criteria (trade certifications, liability insurance, Google reviews above 4.5, portfolio of completed work) and redirects to platforms: HomeAdvisor, Angi, Houzz. Tilers absent from these directories do not exist in the response.</p><h4>Informational queries</h4><p>"How to choose a good tiler?" or "what to check before hiring a tile installer?": the LLM generates a structured guide with 6 criteria (licensing, insurance verification, requesting 3 quotes, reviewing portfolios). No specific professional or external source is cited. A tiler publishing this type of factual content on their site can become the reference source.</p><h4>Pricing queries</h4><p>"How much does tile installation cost per square foot?": the LLM gives detailed ranges (USD 5 to USD 15 per sqft for standard ceramic, USD 15 to USD 30 for natural stone). In the UK, typical day rates of GBP 150 to GBP 250 are cited. Sites providing precise, up-to-date pricing grids by tile type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "tiler near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Tilers with a complete Google Business Profile (category "Tiling Contractor", recent project photos, fresh reviews) appear directly in the AI response. Without a GBP, a tiler is absent from this response.</p>',
    structuredData:
      '<p>For tiling businesses, the recommended schema.org types are: <code>HomeAndConstructionBusiness</code> (primary type), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>HomeAndConstructionBusiness</code> markup allows Google and LLMs to precisely identify the service type, service area, and client reviews of the tiling business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your tiling business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content about your services), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for tilers',
    items: [
      {
        question: 'How much does SEO cost for a tiling business at Rankwell?',
        answer:
          'The SEO budget for a tiler depends on the geographic scope and number of services to position (bathroom tiling, floor installation, outdoor tiling, mosaics). At Rankwell, SEO engagements for tiling professionals start from USD 1,500/month (or GBP 1,200/month) for one city and one service type, and can reach USD 4,000/month for a multi-area business in competitive metropolitan markets.',
      },
      {
        question: 'How long does it take for a tiler to see SEO results with Rankwell?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "bathroom tiler Glasgow" or "pool tiling Dubai") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Does a tiler need trade certifications for effective SEO at Rankwell?',
        answer:
          'Trade certifications are not required for SEO, but they are powerful E-E-A-T signals. In the US, a licensed tile contractor with liability insurance ranks better. In the UK, TrustMark registration and NVQ qualifications strengthen Google trust signals. In the UAE, trade licenses from the Department of Economic Development are expected. Rankwell integrates all relevant certifications into your strategy.',
      },
      {
        question: 'Does a tiler need a blog to improve rankings with Rankwell?',
        answer:
          'A blog focused on practical advice is an effective lever for tilers. Articles should answer real homeowner questions: "tile vs vinyl flooring pros and cons", "what tile is best for a shower", "how much does bathroom tiling cost". Rankwell recommends 2 to 3 articles per month targeting informational queries with high conversion potential.',
      },
      {
        question: 'How can a tiler appear in ChatGPT responses with Rankwell\'s help?',
        answer:
          'To be cited by ChatGPT or Perplexity, a tiler must accumulate web authority signals: listings on trade directories (HomeAdvisor, Checkatrade, Houzz), recent and detailed Google reviews, and rich factual content on their website (pricing guides, portfolio galleries, material guides). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local and national SEO for a tiler at Rankwell?',
        answer:
          'Local SEO targets "tiler + city" queries and relies on Google Business Profile, client reviews, and local directory citations. National SEO targets generic queries ("tile installation cost per square foot") and requires high-authority educational content. Rankwell combines both approaches based on the service area and growth ambitions of the tiling business.',
      },
      {
        question: 'Are platforms like HomeAdvisor and Checkatrade enough to find projects at Rankwell?',
        answer:
          'Lead-generation platforms like HomeAdvisor (US), Checkatrade (UK), or ServiceMarket (UAE) deliver leads but at a high cost per contact and with strong dependency. The tiler is just one profile among hundreds, competing directly on price. A well-optimized website allows direct quote requests, without commissions or systematic price competition. Rankwell helps tilers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your tiling business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architecte' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
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
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/menuisier' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
      { label: 'Joiner', href: '/en/geo-seo-agency/sectors/charpentier' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/paysagiste' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
      { label: 'Glazier', href: '/en/geo-seo-agency/sectors/vitrier' },
    ],
  },

  // Schema.org primary type
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
