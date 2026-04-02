/**
 * DATA: Sector Page Marketing Agencies (EN)
 * Route: /en/geo-seo-agency/sectors/marketing-agency
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
    slug: 'marketing-agency',
    title: 'GEO & SEO Agency for Marketing Agencies - Rankwell',
    description:
      'Rankwell helps marketing agencies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the marketing and communications industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Marketing Agencies' },
    ],
    title: 'GEO & SEO for Marketing Agencies: Google & AI Engine Visibility',
    subtitle:
      'Your agency needs to appear where prospects search for partners: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to the competitive reality of the marketing industry.',
    ctaText: 'Request a GEO & SEO audit for your agency',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for marketing agencies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of queries for marketing agencies include a city name or "near me"</strong>. This is a local SEO market where the decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Over 120,000 agencies compete across the US, UK, and UAE</strong>. Generic queries like "marketing agency" (27,100 searches/month US) are dominated by aggregators. Without clear specialization by vertical or geography, an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> cannot break through.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Clutch, UpCity, G2</strong> (US), <strong class="text-secondary dark:text-accent">The Drum, RAR</strong> (UK), <strong class="text-secondary dark:text-accent">Sortlist, Agency Spotter</strong> (UAE/International) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, your firm depends entirely on these intermediaries for visibility.',
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
        { keyword: 'marketing agency', volume: 27100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'digital marketing agency', volume: 22200, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'marketing agency near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'social media marketing agency', volume: 14800, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'content marketing agency', volume: 5400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'branding agency', volume: 9900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how to choose a marketing agency', volume: 1300, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'marketing agency', volume: 6600, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'digital marketing agency', volume: 5400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'marketing agency near me', volume: 3600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'social media marketing agency', volume: 2400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'branding agency London', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'content marketing agency UK', volume: 720, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'marketing agency for small business', volume: 880, intent: 'mixte', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'marketing agency dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'digital marketing agency dubai', volume: 3600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'social media marketing agency dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'branding agency dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'advertising agency dubai', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'marketing company UAE', volume: 720, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best marketing agency Abu Dhabi', volume: 480, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "marketing agency near me", "digital marketing agency", or "marketing agency dubai" represent businesses actively looking for an agency partner. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your agency does not appear there, those contracts go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for marketing agencies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the competitive dynamics of the marketing and communications industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of portfolio pages and case studies.',
        items: [
          'Page structure by service line (branding, digital, PR, events)',
          'Schema.org ProfessionalService and MarketingAgency markup',
          'Performance and Core Web Vitals on media-heavy pages',
          'Crawl and indexation review of case studies and portfolio items',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the agency\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the agency\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for marketing services',
        ],
      },
      {
        title: 'Market study & marketing keyword research',
        subtitle: 'Mapping of search queries by service specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines about choosing an agency',
          'Real search volumes by service type and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the prospect journey: from discovery to contact request.',
        items: [
          'Service page > case study > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Content strategy for marketing agencies',
        subtitle: 'Creation of content demonstrating the agency\'s expertise across its service lines, written to be citable by LLMs.',
        items: [
          'Case studies with measurable results (ROI, reach, engagement metrics)',
          'Self-sufficient factual sentences with verifiable data',
          'Guides and FAQs answering Google People Also Ask queries',
        ],
      },
      {
        title: 'Authority & link building for agencies',
        subtitle: 'Authority development through qualified industry directories and specialized publications.',
        items: [
          'Clutch, UpCity, G2, Agency Spotter (US/International)',
          'The Drum, RAR, Marketing Week (UK)',
          'Industry press publications and award submissions',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the agency\'s Google Business Profile to capture local "marketing agency + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Marketing Agency + secondary categories by specialty',
          'Client review management and collection strategy',
          'Photos of work, office, team, and regular posts',
          'Consistent NAP citations across industry directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service line, and inquiry volume generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service page',
          'GEO Score: visibility in AI engines',
          'Inquiry volume and conversions',
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
        description: 'Full diagnostic of your agency\'s website: page architecture by service line, loading speed on portfolio pages, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your agency in ChatGPT, Perplexity, and Gemini on your target marketing queries. Benchmark against 3 to 5 competing agencies and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, MarketingAgency, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your agency\'s service lines. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (branding, digital strategy, social media, PR), case studies with measurable results, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from industry directories (Clutch, G2, UpCity, The Drum), marketing blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your agency.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your agency in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a CMO asks ChatGPT "which marketing agency do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your agency does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which marketing agency do you recommend in New York?": the LLM does not cite a specific agency. It provides a list of selection criteria (industry specialization, case studies, client reviews, award track record, pricing transparency) and redirects to directories: Clutch, G2, UpCity, and Google Maps. Agencies with verified reviews and detailed portfolios are best positioned to be cited.</p><h4>Informational queries</h4><p>"How to choose a good marketing agency?" or "in-house vs agency: pros and cons?": the LLM generates a structured guide with 6 to 8 criteria, without citing any agency or external source. The agency that publishes this type of content on its website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a marketing agency cost?": the LLM gives detailed pricing ranges (USD 3,000 to USD 25,000 per month for retainer-based engagements, GBP 2,000 to GBP 15,000 per month for UK agencies). Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "marketing agency near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Agencies with a complete Google Business Profile (category, recent reviews, portfolio photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For marketing agencies, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>MarketingAgency</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>ProfessionalService</code> markup allows Google and LLMs to precisely identify the service lines, location, and client reviews of the agency.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your agency\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for marketing agencies',
    items: [
      {
        question: 'How much does SEO cost for a marketing agency?',
        answer:
          'The SEO budget for a marketing agency depends on the number of service lines to position and the geographic scope targeted. At Rankwell, SEO engagements for marketing agencies start from USD 2,000/month (or GBP 1,600/month) for a single specialty and one city, and can reach USD 5,000-8,000/month for a full-service agency targeting competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from SEO for a marketing agency?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "branding agency Austin" or "PR agency Manchester") are faster to rank for than nationally competitive terms like "digital marketing agency". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Does a marketing agency really need SEO when it already masters digital marketing?',
        answer:
          'Marketing and SEO are distinct disciplines. An agency excels at brand strategy, creative campaigns, and media buying, but technical SEO (architecture, crawl, Core Web Vitals) and GEO (AI engine optimization) require specialized expertise. At Rankwell, over 40% of agencies we work with acknowledge that their own website is their weakest asset when it comes to organic search.',
      },
      {
        question: 'Does a marketing agency need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real prospect questions ("how to choose a marketing agency", "in-house vs agency"), demonstrate verifiable expertise through data-backed case studies, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a marketing agency appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an agency must accumulate web authority signals: presence on industry directories (Clutch, G2, UpCity), mentions in trade press (Ad Age, The Drum, Marketing Week), an optimized Google Business Profile, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a marketing agency?',
        answer:
          'Local SEO targets "marketing agency + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best digital marketing agency") and requires high-authority educational content and industry award visibility. Rankwell combines both approaches based on the agency\'s growth strategy and target market.',
      },
      {
        question: 'Are Clutch and agency ranking platforms enough to be visible?',
        answer:
          'Platforms like Clutch, G2, and UpCity are useful for initial visibility, but they create dependency: the agency is just one profile among thousands, and every lead carries a platform fee. A well-optimized website allows the agency to control its image, convert directly, and build lasting authority that no platform can revoke. Rankwell helps marketing agencies build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your agency visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architect' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
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
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notary' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/bank' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
