/**
 * DATA: Sector Page Landscapers (EN)
 * Route: /en/geo-seo-agency/sectors/paysagiste
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs (landscaper/landscaping/garden design seeds), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'landscaper',
    title: 'GEO & SEO Agency for Landscapers - Rankwell',
    description:
      'Rankwell helps landscapers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the landscaping industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Landscapers' },
    ],
    title: 'GEO & SEO for Landscapers: Google & AI Engine Visibility',
    subtitle:
      'Garden design, hardscaping, outdoor living spaces: your future clients search for a landscaper on Google and in AI engine responses. Our experts design GEO & SEO strategies tailored to the landscaping profession.',
    ctaText: 'Request a GEO & SEO audit for your landscaping business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for landscapers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of landscaping queries include a location or "near me"</strong>. Clients need a professional who can physically visit and transform their outdoor space. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the Local Pack determines who gets the quote request.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Licensing, insurance, and portfolio evidence are critical trust signals</strong>. US contractor licensing varies by state, UK firms rely on BALI (British Association of Landscape Industries) membership, and UAE businesses require municipality trade licenses. These credentials and before-and-after galleries must be showcased to meet E-E-A-T requirements.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Houzz, Angi, Bark</strong> (US/UK), <strong class="text-secondary dark:text-accent">Checkatrade</strong> (UK), and <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent landscaping queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent landscaper stays invisible against these aggregators.',
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
        { keyword: 'landscaping companies near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'landscaper near me', volume: 60500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'landscape design', volume: 40500, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'backyard landscaping ideas', volume: 33100, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'hardscape contractor near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does landscaping cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'landscape architect near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'landscapers near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'garden design', volume: 14800, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'landscape gardener near me', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'garden landscaping ideas', volume: 5400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'patio installers near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a garden makeover cost UK', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'BALI registered landscaper', volume: 720, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'landscaping companies in Dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'garden design Dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'landscaping Abu Dhabi', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'outdoor landscaping UAE', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'pool landscaping Dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'villa garden design Dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "landscaper near me", "garden design", or "landscaping companies in Dubai" represent homeowners and property managers actively seeking a landscaping professional. The majority click on the top 3 results or follow an AI engine recommendation. If your business does not appear there, those clients contact a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for landscapers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the specific needs of landscaping businesses across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of a landscaping website.',
        items: [
          'Page structure by service type (garden design, hardscaping, maintenance, irrigation)',
          'Schema.org LandscapingBusiness markup',
          'Performance and Core Web Vitals (image-heavy portfolio optimization)',
          'Crawl and indexation of project galleries',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your landscaping business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the landscaper\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & landscaping keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines ("which landscaper do you recommend?")',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for a homeowner\'s journey from inspiration to quote request.',
        items: [
          'Service page > project gallery > quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Landscaping content strategy',
        subtitle: 'Creation of visual and educational content demonstrating the landscaper\'s expertise, written to be citable by LLMs.',
        items: [
          'Before-and-after project galleries with detailed descriptions (area, materials, plant species, budget)',
          'Guides and FAQs answering Google People Also Ask ("how much does a patio cost", "best plants for shade")',
          'Self-sufficient factual sentences with verifiable project data',
        ],
      },
      {
        title: 'Authority & landscaping link building',
        subtitle: 'Authority development through qualified directories and industry platforms.',
        items: [
          'Houzz, Angi, Bark, HomeAdvisor (US/International)',
          'Checkatrade, MyBuilder, BALI directory (UK)',
          'Industry press, local business associations, and supplier partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "landscaper + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Landscaper + secondary categories (Landscape Designer, Garden Center)',
          'Before-and-after project photos, service area, seasonal posts',
          'Client review management and post-project collection strategy',
          'Consistent NAP citations across landscaping and home improvement directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword',
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
        description: 'Full diagnostic of your landscaping website: service pages, project portfolios, loading speed, Google indexation, and heading structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your landscaping business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against 3 to 5 local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LandscapingBusiness, Service, and FAQPage markup ready to deploy, including your service areas and landscaping specialties. Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (garden design, hardscaping, irrigation, maintenance), project case studies, and seasonal content. Direct integration on your CMS or via FTP, with optimized page templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from landscaping directories (Houzz, Angi, Checkatrade), home and garden blogs, and local business publications. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by landscaping specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your landscaping business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which landscaper do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your landscaping business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which landscaper do you recommend in Austin?" or "best garden designer in London?": the LLM does not cite a specific company. It provides a list of selection criteria (licensing, insurance, portfolio quality, client reviews, professional memberships) and redirects to directories: Houzz, Angi, Checkatrade, and local trade associations.</p><h4>Informational queries</h4><p>"How to choose a good landscaper?" or "what to look for in a landscape designer?": the LLM generates a structured guide with 6 to 8 criteria, without citing any company or external source. The landscaper who publishes this type of content on their website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does landscaping cost?": the LLM gives detailed pricing ranges (USD 4,000 to USD 20,000 for a full garden redesign, GBP 5,000 to GBP 15,000 for a medium garden makeover in the UK). Sites providing precise, up-to-date pricing data by project type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "landscaper near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Landscaping companies with a complete Google Business Profile (category Landscaper, before-and-after photos, recent reviews with ratings above 4.2) appear directly in the AI response.</p>',
    structuredData:
      '<p>For landscapers, the recommended schema.org types are: <code>LandscapingBusiness</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>LandscapingBusiness</code> markup allows Google and LLMs to precisely identify the services offered (design, installation, maintenance), the service area, and the client reviews of the business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your landscaping business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of visual and technical content), Legitimacy & Citability (external trust signals: industry memberships, reviews, press mentions), and Factual Density (richness of structured data and named entities tied to your services).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for landscapers',
    items: [
      {
        question: 'How much does SEO cost for a landscaping business?',
        answer:
          'The SEO budget for a landscaper depends on the service area and the number of specialties to rank for (garden design, hardscaping, maintenance, irrigation). At Rankwell, SEO engagements for landscapers start from USD 1,500/month (or GBP 1,200/month) for one service type and one city, and can reach USD 4,000-6,000/month for a multi-city operation or a broad service catalog.',
      },
      {
        question: 'How long does it take to see results from landscaping SEO?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "patio installer Richmond" or "garden designer Guildford") are faster to rank for than nationally competitive terms like "landscaper near me". Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Do licensing and industry memberships help landscaping SEO?',
        answer:
          'Yes, professional credentials are strong E-E-A-T signals for Google and AI engines. In the US, state contractor licenses and NALP (National Association of Landscape Professionals) membership signal trustworthiness. In the UK, BALI registration and TrustMark certification carry similar weight. In the UAE, municipality trade licenses are mandatory. Rankwell integrates these credentials into schema.org markup and content strategy to maximize their SEO impact.',
      },
      {
        question: 'Does a landscaper need a blog to improve rankings?',
        answer:
          'A blog focused on practical advice is a powerful lever for landscapers when paired with high-quality visuals. Articles should answer real questions ("how much does a new patio cost", "best drought-resistant plants for Texas", "garden ideas for small spaces") and feature before-and-after photos from your projects. Rankwell recommends 2-3 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a landscaper appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a landscaping business must accumulate web authority signals: presence on directories (Houzz, Angi, Checkatrade), detailed Google reviews with project photos, an optimized Google Business Profile with category Landscaper, and rich factual content on its website including project case studies. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a landscaper?',
        answer:
          'Local SEO targets "landscaper + city" or "near me" queries and relies on Google Business Profile, client reviews, and local directory citations. National SEO targets broader queries ("backyard landscaping ideas", "how much does landscaping cost") and requires in-depth educational content with strong visuals. Rankwell combines both approaches based on the landscaper\'s geographic coverage and growth goals.',
      },
      {
        question: 'Are platforms like Houzz and Angi enough to be visible as a landscaper?',
        answer:
          'Lead-generation platforms like Houzz, Angi, Bark, and Checkatrade provide initial visibility, but they create dependency: the landscaper is just one profile among hundreds, with limited control over branding and lead quality. A well-optimized website allows the business to receive direct quote requests, showcase its full portfolio, and build lasting authority. Rankwell helps landscapers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your landscaping business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the landscaping industry.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architecte' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
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
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/menuisier' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Tiler', href: '/en/geo-seo-agency/sectors/carreleur' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Property Inspector', href: '/en/geo-seo-agency/sectors/diagnostiqueur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'LandscapingBusiness',
};

export default data;
