/**
 * DATA: Sector Page Roofers (EN)
 * Route: /en/geo-seo-agency/sectors/couvreur
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (Hook Agency, CinchLocal, Roofing Webmasters), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'roofer',
    title: 'GEO & SEO Agency for Roofers - Rankwell',
    description:
      'Rankwell helps roofing contractors boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the roofing industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Roofers' },
    ],
    title: 'GEO & SEO for Roofers: Google & AI Engine Visibility',
    subtitle:
      'Homeowners search for roofers on Google and now ask ChatGPT for recommendations. Our experts design GEO & SEO strategies tailored to the roofing industry, where the Local Pack decides who gets the job.',
    ctaText: 'Request a GEO & SEO audit for your roofing company',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for roofers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of roofing queries include a city name or "near me"</strong>. "Roofing companies near me" alone generates <strong class="text-secondary dark:text-accent">31,000 monthly searches</strong> in the US. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the top 3 results in Google\'s Local Pack capture almost every lead.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Roofing is a high-trust trade</strong> where licensing, insurance, and warranties directly affect rankings. US state contractor licenses and BBB accreditation, UK TrustMark and NFRC membership are key trust signals that must be embedded into every page for Google and AI engines.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HomeAdvisor, Angi, Thumbtack</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, MyBuilder</strong> (UK), <strong class="text-secondary dark:text-accent">ServiceMarket</strong> (UAE) dominate high-intent roofing queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a roofing contractor stays invisible against these aggregators.',
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
        { keyword: 'roofing companies near me', volume: 31000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'roof repair near me', volume: 15000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'roof replacement cost', volume: 9800, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'roofer near me', volume: 7700, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'roofing contractor', volume: 5700, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'emergency roof repair', volume: 2900, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'how much does a new roof cost', volume: 2400, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'roofers near me', volume: 22000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'roofing contractors near me', volume: 5400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'roof repair near me', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'flat roof repair', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'roof replacement cost UK', volume: 1900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'emergency roofer', volume: 1300, intent: 'transactionnelle', difficulty: 'faible' },
        { keyword: 'how to find a good roofer', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'roofing contractor dubai', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'roof waterproofing dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'roof repair dubai', volume: 880, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'waterproofing companies UAE', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'roof insulation dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'villa roof maintenance UAE', volume: 320, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "roofing companies near me", "roofers near me", or "roof repair dubai" represent homeowners actively looking for a contractor. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your roofing company does not appear there, those jobs go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for roofing companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory and trust requirements of the roofing trade across US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by service type (roof repair, replacement, installation, waterproofing)',
          'Schema.org RoofingContractor and HomeAndConstructionBusiness markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your roofing company\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the company\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries in the roofing sector',
        ],
      },
      {
        title: 'Market study & roofing keyword research',
        subtitle: 'Mapping of search queries by roofing specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines about roofing',
          'Real search volumes by specialty (shingle, metal, flat roof, slate, waterproofing)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the homeowner journey from research to quote request.',
        items: [
          'Service page (repair, replacement, installation) > area page > quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Roofing content strategy',
        subtitle: 'Creation of educational content demonstrating the company\'s expertise, written to be citable by LLMs.',
        items: [
          'Cost guides per roofing material (asphalt shingles, metal, tile, slate, flat roof)',
          'FAQs answering Google People Also Ask (lifespan, maintenance, permits)',
          'Self-sufficient factual sentences with verifiable data on materials and techniques',
        ],
      },
      {
        title: 'Authority & roofing link building',
        subtitle: 'Authority development through qualified trade directories and specialized publications.',
        items: [
          'HomeAdvisor, Angi, Thumbtack, BBB (US)',
          'Checkatrade, TrustMark, NFRC, MyBuilder (UK)',
          'Home improvement press publications and manufacturer partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the company\'s Google Business Profile to capture local "roofer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Roofing Contractor + secondary categories by specialty',
          'Client review management and post-job collection strategy',
          'Photos of completed projects (before/after), certifications, and licenses',
          'Consistent NAP citations across trade directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by roofing specialty',
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
    subtitle: 'Each deliverable is a document or tool your marketing team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your roofing website: page architecture by service type (repair, replacement, installation, waterproofing), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your roofing company in ChatGPT, Perplexity, and Gemini on your target roofing queries. Benchmark against 3 to 5 competing contractors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'RoofingContractor, HomeAndConstructionBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your service areas. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (roof repair, metal roofing, flat roof, waterproofing), cost guides per material, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (HomeAdvisor, Angi, Checkatrade, TrustMark), home improvement blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by roofing specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your roofing company in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a homeowner asks ChatGPT "which roofer do you recommend in Dallas?", the LLM compiles information from across the web to formulate its response. If your roofing company does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which roofer do you recommend in Houston?": the LLM does not cite a specific contractor. It provides a list of selection criteria (licensing, insurance, reviews, warranty terms) and redirects to directories: HomeAdvisor, Angi, BBB, and local roofing associations.</p><h4>Informational queries</h4><p>"How to choose a good roofer?" or "metal roof vs shingles: which is better?": the LLM generates a structured guide with 6 to 8 criteria, without citing any company or external source. The contractor that publishes this type of content on its website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a new roof cost?": the LLM gives detailed pricing ranges (USD 5,000 to USD 15,000 for asphalt shingles, USD 15,000 to USD 30,000 for metal, GBP 5,000 to GBP 12,000 in the UK). Sites providing precise, up-to-date pricing data by material and region have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "roofer near me for emergency repair", <strong>ChatGPT activates Search mode with a Maps card</strong>. Roofing companies with a complete Google Business Profile (category, recent reviews, project photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For roofing companies, the recommended schema.org types are: <code>RoofingContractor</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>RoofingContractor</code> markup allows Google and LLMs to precisely identify the services offered, the service area, and client reviews of the company.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your roofing company\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for roofers',
    items: [
      {
        question: 'How much does SEO cost for a roofing company?',
        answer:
          'The SEO budget for a roofing contractor depends on the number of services offered and the geographic scope targeted. At Rankwell, SEO engagements for roofing companies start from USD 1,500/month (or GBP 1,200/month) for a single service and one city, and can reach USD 4,000-6,000/month for a multi-service company covering a metropolitan area like Houston, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from roofing SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "flat roof repair Sheffield" or "roof waterproofing Abu Dhabi") are faster to rank for than highly competitive metro terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'How does Rankwell handle roofing licensing and trust signals for SEO?',
        answer:
          'Roofing is a high-trust trade where homeowners verify credentials before hiring. In the US, state contractor licenses, liability insurance, and BBB accreditation are critical. In the UK, TrustMark registration and NFRC membership serve as trust markers. In the UAE, municipality trade licenses and DEWA approvals matter. Rankwell embeds these credentials into structured data, page content, and Google Business Profile to maximize both Google and AI engine trust.',
      },
      {
        question: 'Does a roofing company need a blog to improve rankings?',
        answer:
          'A roofing blog is a powerful lever when well executed. Articles should answer real homeowner questions (cost per square foot by material, roof lifespan, storm damage signs), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a roofer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a roofing company must accumulate web authority signals: presence on trade directories (HomeAdvisor, Angi, Checkatrade), consistent positive reviews, an optimized Google Business Profile with project photos, and rich factual content on its website (cost guides, material comparisons, FAQ). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a roofer?',
        answer:
          'Local SEO targets "roofer + city" and "near me" queries and relies on Google Business Profile, client reviews, and local directory citations. National SEO targets generic queries ("roof replacement cost", "best roofing materials") and requires high-authority educational content. Rankwell combines both approaches based on the contractor\'s service radius and growth objectives.',
      },
      {
        question: 'Are HomeAdvisor, Angi, and trade directories enough to be visible?',
        answer:
          'Trade directories like HomeAdvisor and Angi are useful for initial visibility, but they create dependency: the contractor is one profile among hundreds and pays per lead. A well-optimized website allows the company to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps roofing contractors build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your roofing company visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plombier' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electricien' },
        { label: 'SEO Carpenter', href: '/en/geo-seo-agency/sectors/charpentier' },
        { label: 'SEO Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
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
      { label: 'Carpenter', href: '/en/geo-seo-agency/sectors/charpentier' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/serrurier' },
      { label: 'Glazier', href: '/en/geo-seo-agency/sectors/vitrier' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/paysagiste' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'RoofingContractor',
};

export default data;
