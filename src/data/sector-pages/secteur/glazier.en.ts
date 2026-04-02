/**
 * DATA: Sector Page Glaziers (EN)
 * Route: /en/geo-seo-agency/sectors/vitrier
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
    slug: 'glazier',
    title: 'GEO & SEO Agency for Glaziers - Rankwell',
    description:
      'Rankwell helps glaziers and glass companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the glazing industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Glaziers' },
    ],
    title: 'GEO & SEO for Glaziers: Google & AI Engine Visibility',
    subtitle:
      'Homeowners and businesses search for glaziers in urgent moments: a broken window, a failed seal, a storefront shattered overnight. Our experts design GEO & SEO strategies tailored to the emergency-driven glazing trade.',
    ctaText: 'Request a GEO & SEO audit for your glazing business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for glaziers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of glazing searches include a location or "near me"</strong>. Clients need immediate service after a break-in or storm damage. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens in under five minutes, usually from a mobile device.',
    constraints:
      '<strong class="text-secondary dark:text-accent">The glazing industry faces a trust deficit online.</strong> Emergency glass repair is associated with overcharging and unlicensed operators. Google and AI engines penalize sites lacking verifiable trust signals: state contractor licenses (US), FENSA/GGF certification (UK), or municipality trade permits (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HomeAdvisor, Angi</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate emergency glazing queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a glazing business stays invisible behind these lead-generation aggregators.',
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
        { keyword: 'glass repair near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'window glass replacement', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'glazier near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency glass repair', volume: 6600, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'storefront glass replacement', volume: 2900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'broken window repair cost', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'double pane window repair', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'glazier near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency glazier', volume: 6600, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'double glazing repair', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'glass replacement near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'broken window repair', volume: 1600, intent: 'transactionnelle', difficulty: 'faible' },
        { keyword: 'window replacement cost UK', volume: 1300, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'commercial glazier', volume: 720, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'glass repair dubai', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'glass replacement dubai', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'glass company dubai', volume: 880, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'window repair dubai', volume: 590, intent: 'locale', difficulty: 'faible' },
        { keyword: 'glass work dubai', volume: 480, intent: 'mixte', difficulty: 'faible' },
        { keyword: 'glass installation dubai', volume: 390, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'emergency glass repair dubai', volume: 210, intent: 'transactionnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "glass repair near me", "glazier near me", or "glass repair dubai" represent clients dealing with an urgent or planned glazing need. The vast majority contact the first visible result or follow the recommendation of an AI engine. If your glazing business does not appear in the top 3 results, those clients call a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for glaziers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the emergency-driven nature of the glazing trade across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, mobile loading speed, and technical factors blocking indexation for a glazing business.',
        items: [
          'Page structure by service type (emergency repair, window replacement, double glazing)',
          'Schema.org HomeAndConstructionBusiness and GlassShop markup',
          'Performance and Core Web Vitals (critical for mobile emergency searches)',
          'Crawl and indexation of service area pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your glazing company\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your glazing company\'s informational universe',
          'Measurement of legitimacy and citability versus lead-generation platforms',
          'Evaluation of content factual density (pricing grids, certifications, service areas)',
          'Competitive benchmark on AI queries in the glazing sector',
        ],
      },
      {
        title: 'Market study & glazing keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of low-competition, high-conversion combinations.',
        items: [
          'Service + city combinations with low competition ("glazier Austin", "emergency glazier Manchester")',
          'Analysis of queries asked to AI engines about glass repair and replacement',
          'Real search volumes by service type (repair, replacement, installation) and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the emergency user journey and Google crawl efficiency.',
        items: [
          'Service page (emergency repair, window replacement, storefront glazing) > area page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by service and city',
        ],
      },
      {
        title: 'Glazing content strategy',
        subtitle: 'Creation of educational content demonstrating your glazing expertise, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask ("window replacement cost", "glazier vs glass fitter")',
          'Self-sufficient factual sentences with verifiable data (pricing ranges, lead times, certifications)',
          'Trust-building content: displayed licenses, real job photos, verified customer testimonials',
        ],
      },
      {
        title: 'Authority & trade link building',
        subtitle: 'Authority development through qualified trade directories and construction industry publications.',
        items: [
          'HomeAdvisor, Angi, Thumbtack (US); Checkatrade, MyBuilder, TrustATrader (UK)',
          'GGF (Glass and Glazing Federation), FENSA, local trade association listings',
          'Construction press publications and institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile to capture local "glazier + city" and emergency queries, and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Glass Shop + secondary categories (glass repair service, window installation)',
          'Client review management and collection strategy after each job',
          'Photos of completed work, hours (including emergency availability), attributes and regular posts',
          'Consistent NAP citations across trade directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword and service area',
          'Organic traffic by service type (emergency repair, replacement, installation)',
          'GEO Score: visibility in AI engines',
          'Quote requests, calls, and conversions',
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
        description: 'Full diagnostic of your glazing website: service page structure (emergency repair, window replacement, commercial glazing), mobile loading speed, local indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your glazing company in ChatGPT, Perplexity, and Gemini on your target glazing queries. Benchmark against 3 to 5 local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'HomeAndConstructionBusiness, Service, FAQPage, and BreadcrumbList markup ready to deploy, covering your service areas and emergency offerings. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (emergency glass repair, double glazing, storefront replacement), pricing guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (HomeAdvisor, Checkatrade, GGF), construction blogs, and local press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by glazing service type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your glazing business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which glazier do you recommend near me?", the LLM compiles information from across the web to formulate its response. If your glazing company does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which glazier do you recommend in Dallas?" or "best emergency glazier London": the LLM does not cite a specific business. It provides a list of selection criteria (licensing, insurance, customer reviews, emergency availability) and redirects to directories like HomeAdvisor, Checkatrade, or local trade associations. The glazier that accumulates these trust signals on its own website has the highest chance of being cited as a source.</p><h4>Informational queries</h4><p>"How to choose a good glazier?" or "double glazing vs single glazing": the LLM generates a structured guide with 6 to 8 criteria, without citing any business. The company that publishes this type of factual, educational content on its website can be extracted as a reference.</p><h4>Pricing queries</h4><p>"How much does window replacement cost?" or "glass repair cost UK": the LLM gives detailed pricing ranges (USD 200 to USD 600 per window in the US, GBP 300 to GBP 850 for double glazing units in the UK). Sites providing precise, up-to-date pricing data segmented by glass type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "glazier near me" or "emergency glass repair near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Glaziers with a complete Google Business Profile (Glass Shop category, recent reviews, job photos, emergency hours) appear directly in the AI response.</p>',
    structuredData:
      '<p>For glaziers, the recommended schema.org types are: <code>HomeAndConstructionBusiness</code> (primary type), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>HomeAndConstructionBusiness</code> markup allows Google and LLMs to precisely identify the service types (repair, replacement, installation), service area, and certifications of the glazing business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your glazing company\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of glazing content), Legitimacy & Citability (external trust signals, trade certifications, reviews), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for glaziers',
    items: [
      {
        question: 'How much does SEO cost for a glazing business?',
        answer:
          'The SEO budget for a glazier depends on the service area and the number of service types to rank for (emergency repair, window replacement, commercial glazing). At Rankwell, SEO engagements for glazing businesses start from USD 1,500/month (or GBP 1,200/month) for a single city and primary service, and can reach USD 4,000-5,000/month for multi-city coverage in competitive metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from glazier SEO?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "emergency glazier Sheffield" or "glass repair Sharjah") are faster to rank for than highly competitive metro terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'How does Rankwell handle the trust problem in the glazing industry?',
        answer:
          'The glazing sector is plagued by unlicensed operators and overcharging complaints across all markets. In the US, Rankwell highlights state contractor licenses and BBB accreditation. In the UK, FENSA registration and GGF membership are key trust signals. In the UAE, municipality trade permits and DED licensing are emphasized. Rankwell builds these verifiable trust signals into every page and structured data element so Google and AI engines distinguish your business from scam operators.',
      },
      {
        question: 'Does a glazing company need a blog to improve rankings?',
        answer:
          'A glazing blog is a powerful lever when well executed. Articles should answer real questions ("how much does double glazing cost", "single vs double pane windows", "what to do after a break-in"), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-3 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a glazier appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a glazing business must accumulate web authority signals: presence on trade directories (HomeAdvisor, Checkatrade, GGF), mentions in construction press, an optimized Google Business Profile with recent reviews and job photos, and rich factual content on its website (pricing grids, service area maps, certifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a glazier?',
        answer:
          'Local SEO targets "glazier + city" and "near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("window replacement cost", "types of glazing") and requires high-authority educational content. Rankwell combines both approaches based on the glazing company\'s service area and growth objectives.',
      },
      {
        question: 'Are trade directories like HomeAdvisor and Checkatrade enough to be visible?',
        answer:
          'Trade directories are useful for initial visibility, but they create dependency: your business is just one listing among hundreds, with no control over presentation or pricing. A well-optimized website allows a glazier to control its image, display certifications and real job photos, and convert directly without paying per lead. Rankwell helps glazing companies build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your glazing business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the glazing industry.',
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
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/garage' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Roofer', href: '/en/geo-seo-agency/sectors/couvreur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
