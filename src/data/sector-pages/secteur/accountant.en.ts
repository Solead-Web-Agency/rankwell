/**
 * DATA: Sector Page Accountants (EN)
 * Route: /en/geo-seo-agency/sectors/expert-comptable
 *
 * Adapted for US / UK / UAE markets
 * CPA (US), Chartered Accountant ACCA/ICAEW (UK), Auditor (UAE)
 * Keyword data: Ahrefs Keywords Explorer + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'accountant',
    title: 'GEO & SEO Agency for Accountants - Rankwell',
    description:
      'Rankwell helps accounting firms boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for CPAs, chartered accountants, and auditors.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Accountants' },
    ],
    title: 'GEO & SEO for Accountants: Google & AI Engine Visibility',
    subtitle:
      'Business owners compare accounting firms on Google and ask ChatGPT before choosing their CPA or chartered accountant. Our experts design GEO & SEO strategies tailored to the accounting profession.',
    ctaText: 'Request a GEO & SEO audit for your accounting firm',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for accountants',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of accounting queries include a city or "near me"</strong>. Whether CPA (US), chartered accountant (UK), or auditor (UAE), this is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where Google\'s Local Pack and AI engine responses drive new client acquisition.',
    constraints:
      'Accounting content is classified <strong class="text-secondary dark:text-accent">YMYL (Your Money Your Life)</strong> by Google, triggering the highest E-E-A-T bar. Every page must display verifiable credentials: CPA license (US), ACCA or ICAEW membership (UK), DIFC registration (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">QuickBooks ProAdvisor, Bench, Pilot</strong> (US), <strong class="text-secondary dark:text-accent">ICAEW, ACCA Find an Accountant</strong> (UK), and <strong class="text-secondary dark:text-accent">DIFC directory</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an accounting firm stays invisible against these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its reputation than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
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
        { keyword: 'cpa near me', volume: 90500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'accountants near me', volume: 60500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'tax accountant near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'certified public accountant', volume: 18100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'small business accountant', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'accounting services', volume: 12100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how much does a cpa cost', volume: 8100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'chartered accountant near me', volume: 90500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'accountants near me', volume: 60500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bookkeeping services', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'small business accountant', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'tax accountant', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'accounting firms near me', volume: 33100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does an accountant cost uk', volume: 6600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'accountant dubai', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'accounting firms in dubai', volume: 3600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'auditor dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'tax consultant dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'bookkeeping services dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'vat registration uae', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'DIFC auditor', volume: 590, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "CPA near me", "chartered accountant near me", or "accountant dubai" represent business owners actively seeking accounting services. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your firm does not appear there, those clients go to a competitor or an online platform.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for accounting firms',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the accounting profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of accounting service pages.',
        items: [
          'Page structure by service type (tax, bookkeeping, payroll, advisory)',
          'Schema.org AccountingService and ProfessionalService markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the firm\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the firm\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for accounting services',
        ],
      },
      {
        title: 'Market study & accounting keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with low competition',
          'Analysis of queries asked to AI engines about accounting',
          'Real search volumes by specialty and market (tax, audit, advisory)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the business owner journey from service discovery to contact.',
        items: [
          'Service page > industry specialization page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
          'Pages by business type (LLC, Ltd, sole trader, S-Corp, free zone)',
        ],
      },
      {
        title: 'Accounting content strategy',
        subtitle: 'Creation of educational content demonstrating the firm\'s expertise, written to be citable by LLMs and compliant with professional ethics.',
        items: [
          'Guides and FAQs answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable data and regulatory references',
          'Articles on tax obligations by business structure',
          'Compliance with professional advertising rules (AICPA, ACCA, DIFC)',
        ],
      },
      {
        title: 'Authority & accounting link building',
        subtitle: 'Authority development through qualified professional directories and specialized publications.',
        items: [
          'AICPA, QuickBooks ProAdvisor, CPA Directory (US)',
          'ICAEW, ACCA, AccountingWEB (UK)',
          'Professional press publications and institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the firm\'s Google Business Profile to capture local "accountant + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Accountant + secondary categories (Tax Preparation Service, Bookkeeping Service)',
          'Client review management and collection strategy',
          'Photos, hours, attributes, and regular posts',
          'Consistent NAP citations across accounting directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service area, and contact requests generated.',
        items: [
          'Google positions by accounting keyword',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Contact requests and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team can act on immediately to improve your accounting firm\'s online visibility.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your firm\'s website: page architecture by service area (tax, bookkeeping, payroll, advisory), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your firm in ChatGPT, Perplexity, and Gemini on your target accounting queries. Benchmark against 3 to 5 competing firms and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'AccountingService, ProfessionalService, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your firm\'s service areas. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (tax preparation, bookkeeping, payroll, advisory), industry-specific articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from accounting directories (AICPA, QuickBooks ProAdvisor, ICAEW, ACCA), professional blogs, and business press. Tracking of links obtained and Domain Rating progression of your firm.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by accounting specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your firm in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a business owner asks ChatGPT "which accountant do you recommend in New York for a small business?", the LLM compiles information from across the web to formulate its response. If your firm does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which accountant do you recommend in New York for a small business?": the LLM does not cite a specific firm. It provides a list of selection criteria (CPA license, industry specialization, fee structure, technology stack) and redirects to directories: AICPA "Find a CPA", QuickBooks ProAdvisor, Yelp, and Google Maps. National online platforms (Bench, Pilot, 1-800Accountant) are mentioned as alternatives.</p><h4>Informational queries</h4><p>"How to choose a good accountant for my business?": the LLM generates a structured guide with 7 to 9 criteria, distinguishing between CPA (US), Chartered Accountant ACCA/ICAEW (UK), and auditor (UAE). No firm or external source is cited. The firm that publishes this type of jurisdiction-aware content can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does an accountant cost in the UK?": the LLM gives detailed pricing ranges (GBP 300 to GBP 600 for sole trader annual accounts, GBP 800 to GBP 1,500 for limited companies, USD 200 to USD 500 per month for US small businesses). Sites providing precise fee schedules by business type have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "accountant near me for tax filing", <strong>ChatGPT activates Search mode with a Maps card</strong>. Firms with a complete Google Business Profile (category Accountant, recent reviews, services listed) appear directly in the AI response.</p>',
    structuredData:
      '<p>For accounting firms, the recommended schema.org types are: <code>AccountingService</code> (primary type), <code>ProfessionalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>AccountingService</code> markup allows Google and LLMs to precisely identify the services offered, location, and professional credentials of the firm.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your firm\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of accounting content), Legitimacy & Citability (external trust signals, professional body memberships), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for accountants',
    items: [
      {
        question: 'How much does SEO cost for an accounting firm?',
        answer:
          'The SEO budget for an accounting firm depends on the number of services promoted and the geographic scope targeted. At Rankwell, SEO engagements for accounting firms start from USD 2,000/month (or GBP 1,600/month) for a single service area and one city, and can reach USD 6,000-8,000/month for a multi-service firm in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from accounting SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "CPA for startups Austin" or "chartered accountant VAT returns Manchester") are faster to rank for than nationally competitive terms like "accounting services". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with accountant advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with professional advertising rules, provided certain limits are respected. In the US, the AICPA Code of Professional Conduct prohibits misleading claims and restricts solicitation. In the UK, ACCA and ICAEW have their own advertising guidelines requiring transparency. In the UAE, DIFC and ADGM each regulate marketing for licensed firms. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does an accounting firm need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real questions (inspired by Google People Also Ask), such as "what is the difference between a CPA and an accountant" or "do I need an accountant for my LLC". Content must demonstrate verifiable expertise and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can an accountant appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a firm must accumulate web authority signals: presence on professional directories (AICPA, ICAEW, ACCA), mentions in business press, an optimized Google Business Profile, and rich factual content on its website with regulatory references. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an accounting firm?',
        answer:
          'Local SEO targets "accountant + specialty + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best accounting firm for startups") and requires high-authority educational content. Rankwell combines both approaches based on the firm\'s growth strategy.',
      },
      {
        question: 'Are QuickBooks ProAdvisor and online platforms enough to be visible?',
        answer:
          'Directories like QuickBooks ProAdvisor and platforms like Bench or Pilot are useful for initial visibility, but they create dependency: the firm is just one profile among hundreds. A well-optimized website allows the firm to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps accounting firms build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your accounting firm visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
        { label: 'SEO Notary', href: '/en/geo-seo-agency/sectors/notaire' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
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
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notaire' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'AccountingService',
};

export default data;
