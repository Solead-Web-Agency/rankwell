/**
 * DATA: Sector Page Joiners (EN)
 * Route: /en/geo-seo-agency/sectors/joiner
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
    slug: 'joiner',
    title: 'GEO & SEO Agency for Joiners - Rankwell',
    description:
      'Rankwell helps joiners and timber framers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the joinery industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Joiners' },
    ],
    title: 'GEO & SEO for Joiners: Google & AI Engine Visibility',
    subtitle:
      'Timber framing, bespoke joinery, structural carpentry: your future clients search on Google and in AI engine responses. Our experts design GEO & SEO strategies tailored to the joinery trade.',
    ctaText: 'Request a GEO & SEO audit for your joinery business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for joiners',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of joinery searches include a location or "near me"</strong>. Timber framers, bespoke joiners, and fit-out contractors all compete in a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where ranking in the Local Pack determines who receives the quote request.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Licensing and trade certifications are the first trust signals</strong>. A contractor license (US), CITB or Guild of Master Craftsmen membership (UK), or a municipality trade license (UAE) must appear on your website with structured markup, as Google classifies joinery searches as high financial commitment.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, Houzz, Thumbtack</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent joinery queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent joiner stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
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
        { keyword: 'joiner near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'timber framing contractor', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'custom woodworker near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'finish carpentry contractor', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'timber frame house cost', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'cabinet joinery services', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how much does a timber frame cost', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'joiner near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'bespoke joinery', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'joinery companies near me', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'timber frame construction', volume: 2400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'carpenter and joiner near me', volume: 1600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'bespoke staircase joiner', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how much does a joiner cost UK', volume: 1300, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'joinery companies dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'custom joinery dubai', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'fit out contractor dubai', volume: 1900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'woodworker dubai', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'bespoke furniture joinery UAE', volume: 480, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'joinery workshop Abu Dhabi', volume: 390, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "joiner near me", "bespoke joinery", or "joinery companies dubai" represent clients actively seeking skilled joiners for a renovation, a new build, or bespoke woodwork. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your business does not appear there, those projects go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for joiners',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the trade constraints of the joinery sector across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation for a joinery website.',
        items: [
          'Page structure by service type (timber framing, bespoke joinery, staircases, fit-out)',
          'Schema.org HomeAndConstructionBusiness markup',
          'Performance and Core Web Vitals on mobile',
          'Crawl and indexation review of project portfolio pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your joinery business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your business\'s informational universe',
          'Measurement of legitimacy and citability in the construction sector',
          'Evaluation of content factual density (certifications, completed projects)',
          'Competitive benchmark on AI queries related to joinery',
        ],
      },
      {
        title: 'Market study & joinery keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines about joinery',
          'Real search volumes by service type (timber framing, fit-out, bespoke furniture)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the customer journey of someone looking for a joiner.',
        items: [
          'Service page > project portfolio page > contact/quote page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with trade terminology',
        ],
      },
      {
        title: 'Joinery content strategy',
        subtitle: 'Creation of technical content demonstrating the joiner\'s craftsmanship, written to be citable by LLMs.',
        items: [
          'Guides comparing timber species, framing methods, and finishes',
          'Project showcases with photos and technical specifications',
          'FAQs answering Google People Also Ask (costs, timelines, wood types)',
          'Self-sufficient factual sentences with verifiable data for AI citation',
        ],
      },
      {
        title: 'Authority & trade link building',
        subtitle: 'Authority development through qualified trade directories and professional associations.',
        items: [
          'Angi, Houzz, BBB, National Association of Home Builders (US)',
          'Checkatrade, Guild of Master Craftsmen, Federation of Master Builders (UK)',
          'Trade press publications and partnerships with architects and builders',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile to capture local "joiner + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Carpenter + secondary categories (Joinery, Timber Framing, Cabinet Maker)',
          'Photos of completed projects, before/after, joinery details',
          'Client review management and post-project collection strategy',
          'Consistent NAP citations across trade directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword (joinery + city)',
          'Organic traffic by service type',
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
        description: 'Full diagnostic of your website: page architecture by service type (timber framing, bespoke joinery, staircases, fit-out), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your business in ChatGPT, Perplexity, and Gemini on your target joinery queries. Benchmark against 3 to 5 competing joiners and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'HomeAndConstructionBusiness, Service, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your joinery specialties and service area. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (timber framing, bespoke staircases, cabinetry, fit-out), technical articles on wood species and framing methods, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (Angi, Checkatrade, Guild of Master Craftsmen, Houzz), construction blogs, and local press. Tracking of links obtained and Domain Rating progression.',
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
    title: 'AI Visibility: your joinery business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which joiner do you recommend in Manchester?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Local recommendation queries</h4><p>"Which joiner do you recommend in Manchester?": the LLM does not cite any specific joiner by name. It provides a list of 5 to 7 selection criteria (trade certifications, Google reviews, portfolio quality, specialization in bespoke or structural work) and redirects to Checkatrade, Houzz, and the Guild of Master Craftsmen. Joiners with detailed technical content and verifiable trust signals are the most likely to be cited over time.</p><h4>Technical information queries</h4><p>"Joiner vs carpenter: what is the difference?": the LLM distinguishes the two trades (joiners work primarily in a workshop producing fitted items, while carpenters work on-site with structural timber). It may reference trade classification codes. Sites publishing structured content on these trade distinctions become reference sources for AI engines.</p><h4>Pricing queries</h4><p>"How much does a joiner cost per day?": the LLM gives detailed pricing ranges (USD 250 to USD 500 per day in the US, GBP 150 to GBP 350 per day in the UK). It details factors of variation: complexity of the project, timber species, bespoke vs standard. Sites providing precise, up-to-date pricing grids by region are the sources most frequently extracted.</p><h4>Local and Maps queries</h4><p>On "joiner near me", ChatGPT activates Search mode with a Maps card displaying nearby joiners. Businesses with a complete Google Business Profile (category, recent reviews, project photos, response to reviews) appear directly in the AI response.</p>',
    structuredData:
      '<p>For joiners, the recommended schema.org types are: <code>HomeAndConstructionBusiness</code> (primary type), <code>GeneralContractor</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>HomeAndConstructionBusiness</code> markup allows Google and LLMs to precisely identify the specialty (timber framing, bespoke joinery, cabinetry), service area, and certifications of the business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your joinery business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of technical content), Legitimacy & Citability (external trust signals: trade certifications, reviews, directory listings), and Factual Density (richness of structured data and named entities linked to your services).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for joiners',
    items: [
      {
        question: 'How much does SEO cost for a joinery business with Rankwell?',
        answer:
          'The SEO budget for a joiner depends on the service area and the number of service pages to rank (timber framing, bespoke joinery, staircases, cabinetry). At Rankwell, SEO engagements for joiners start from USD 1,500/month (or GBP 1,200/month) for a single city and primary service type, and can reach USD 4,000-5,000/month for multi-city coverage in competitive metropolitan areas.',
      },
      {
        question: 'How long does it take for Rankwell to deliver SEO results for a joiner?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "bespoke joiner Sheffield" or "timber framer Austin") are faster to rank for than broadly competitive terms like "joiner near me" in major cities. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'What trade certifications should Rankwell highlight on a joiner website for SEO?',
        answer:
          'In the US, a state contractor license and NAHB membership are the strongest trust signals. In the UK, CITB qualifications, Guild of Master Craftsmen membership, and Federation of Master Builders registration carry the most weight with Google and AI engines. In the UAE, a municipality trade license and JAFZA or DAFZA free zone registration are key. Rankwell structures these certifications in schema.org markup to maximize visibility in enriched results and AI responses.',
      },
      {
        question: 'Does Rankwell recommend a blog for a joinery website?',
        answer:
          'A technical blog is a powerful lever when well executed. Articles should answer real questions: comparisons between timber species (oak vs Douglas fir vs cedar), maintenance guides, cost breakdowns by project type (staircase, fitted wardrobe, timber frame extension). Rankwell recommends 2 to 4 articles per month targeting long-tail informational queries that potential clients search before requesting a quote.',
      },
      {
        question: 'How can Rankwell help a joiner appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a joiner must accumulate web authority signals: a complete Google Business Profile with recent reviews, presence on trade directories (Angi, Checkatrade, Houzz), detailed project showcases on their website, and transparent pricing information. The Rankwell GEO Score measures and optimizes precisely these AI citability signals for the joinery trade.',
      },
      {
        question: 'What is the difference between local and national SEO for a joiner according to Rankwell?',
        answer:
          'Local SEO targets "joiner + city" or "joiner near me" queries and relies on Google Business Profile, client reviews, and trade directory citations. National SEO targets generic queries ("timber frame house cost", "bespoke staircase design") and requires high-authority educational content. Rankwell combines both approaches based on the joiner\'s geographic reach and business ambitions.',
      },
      {
        question: 'Are platforms like Houzz, Checkatrade, or Angi enough to find clients without Rankwell SEO?',
        answer:
          'Lead generation platforms like Houzz (US/UK), Angi (US), or Checkatrade (UK) bring leads but create dependency: per-lead fees, no brand control, and intense competition on each listing. A well-optimized website allows your joinery business to receive quote requests directly, without commissions, and to build lasting authority that no platform can revoke. Rankwell helps joiners build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your joinery business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the joinery trade.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Roofer', href: '/en/geo-seo-agency/sectors/roofer' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architect' },
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
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/roofer' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/carpenter' },
      { label: 'Tiler', href: '/en/geo-seo-agency/sectors/tiler' },
      { label: 'Glazier', href: '/en/geo-seo-agency/sectors/glazier' },
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
    ],
  },

  // Schema.org primary type
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
