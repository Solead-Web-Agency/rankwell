/**
 * DATA: Sector Page Lawyers (EN)
 * Route: /en/geo-seo-agency/sectors/avocat
 *
 * Pilot EN page, adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (Majux, Embryo, Rankings.io), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'lawyer',
    title: 'GEO & SEO Agency for Lawyers - Rankwell',
    description:
      'Rankwell helps law firms boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the legal industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Lawyers' },
    ],
    title: 'GEO & SEO for Lawyers: Google & AI Engine Visibility',
    subtitle:
      'Your firm needs to appear where potential clients search: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to the constraints of the legal profession.',
    ctaText: 'Request a GEO & SEO audit for your law firm',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for lawyers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 70% of legal queries include a city or "near me"</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Legal is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable expertise (bar admissions, case studies, press), and advertising rules differ by market: ABA (US), SRA (UK), DIFC/ADGM (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Avvo, FindLaw, Justia</strong> (US), <strong class="text-secondary dark:text-accent">Law Society</strong> (UK), <strong class="text-secondary dark:text-accent">Legal500</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a firm stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'According to Rankwell, E-E-A-T signals do not only serve to satisfy Google\'s Quality Raters. They constitute the primary criterion by which AI engines select their sources, favoring content that demonstrates verifiable expertise and documented experience rather than mere domain authority.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'Learn more about E-E-A-T',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'personal injury lawyer', volume: 90500, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'car accident lawyer', volume: 74000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'divorce lawyer', volume: 40500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'criminal defense attorney', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'employment lawyer', volume: 18100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'car accident lawyer near me', volume: 22200, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a lawyer cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'family law solicitors', volume: 3400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'personal injury lawyer near me', volume: 3000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'employment law solicitors', volume: 1400, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'employment law solicitors near me', volume: 1000, intent: 'locale', difficulty: 'faible' },
        { keyword: 'criminal law solicitors', volume: 600, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'family law attorney near me', volume: 500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how to make a will UK', volume: 2900, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'lawyer dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'legal consultant dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'divorce lawyer dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'law firms in dubai', volume: 2900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'employment lawyer UAE', volume: 1300, intent: 'mixte', difficulty: 'moyenne' },
        { keyword: 'family lawyer dubai', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'DIFC lawyer', volume: 720, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "personal injury lawyer", "solicitor near me", or "lawyer dubai" represent potential clients actively seeking legal representation. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your firm does not appear there, those clients go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for law firms',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the legal profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by practice area',
          'Schema.org Attorney and LegalService markup',
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
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & legal keyword research',
        subtitle: 'Mapping of search queries by legal specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines',
          'Real search volumes by practice area and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for user journey and Google crawl efficiency.',
        items: [
          'Practice area page > attorney page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Legal content strategy',
        subtitle: 'Creation of educational content demonstrating the firm\'s expertise, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable data',
          'Compliance with bar advertising rules (ABA, SRA, DIFC)',
        ],
      },
      {
        title: 'Authority & legal link building',
        subtitle: 'Authority development through qualified legal directories and specialized publications.',
        items: [
          'Avvo, FindLaw, Justia, Legal500 (US/International)',
          'The Law Society, Solicitors.guru (UK)',
          'Legal press publications and institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the firm\'s Google Business Profile to capture local "lawyer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Attorney + secondary categories by practice area',
          'Client review management and collection strategy',
          'Photos, hours, attributes, and regular posts',
          'Consistent NAP citations across legal directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by practice area, and contact requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by practice area',
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
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your firm\'s website: page architecture by practice area, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your firm in ChatGPT, Perplexity, and Gemini on your target legal queries. Benchmark against 3 to 5 competing firms and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Attorney, LegalService, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your firm\'s practice areas. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of practice area pages (personal injury, divorce, criminal defense), legal articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from legal directories (Avvo, FindLaw, Justia, Legal500), legal blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your firm.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by practice area page and local keyword, organic traffic by legal specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your firm in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which employment lawyer do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your firm does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which lawyer do you recommend in New York for a divorce?": the LLM does not cite a specific firm. It provides a list of selection criteria (specialization, client reviews, bar standing) and redirects to directories: Avvo, FindLaw, the New York State Bar Association, and SuperLawyers.</p><h4>Informational queries</h4><p>"How to choose a good lawyer?" or "solicitor vs barrister: what\'s the difference?": the LLM generates a structured guide with 6 to 8 criteria, without citing any firm or external source. The firm that publishes this type of content on its website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a lawyer cost in the UK?": the LLM gives detailed pricing ranges (GBP 150 to GBP 450 per hour for solicitors, USD 200 to USD 500 per hour for US attorneys). Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "lawyer near me for employment law", <strong>ChatGPT activates Search mode with a Maps card</strong>. Firms with a complete Google Business Profile (category, recent reviews, photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For law firms, the recommended schema.org types are: <code>Attorney</code> (primary type), <code>LegalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Attorney</code> markup allows Google and LLMs to precisely identify the practice areas, location, and client reviews of the firm.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your firm\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for lawyers',
    items: [
      {
        question: 'How much does SEO cost for a law firm?',
        answer:
          'The SEO budget for a law firm depends on the number of practice areas and the geographic scope targeted. At Rankwell, SEO engagements for law firms start from USD 2,000/month (or GBP 1,600/month) for a single practice area and one city, and can reach USD 6,000-8,000/month for a multi-practice firm in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from legal SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "employment solicitor Glasgow" or "DIFC arbitration lawyer") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with lawyer advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with legal advertising rules, provided certain limits are respected. In the US, the ABA Model Rules of Professional Conduct (Rule 7.1-7.3) prohibit misleading claims and restrict solicitation. In the UK, the SRA Standards and Regulations impose transparency obligations. In the UAE, DIFC and ADGM each have their own legal marketing codes. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a law firm need a legal blog to improve rankings?',
        answer:
          'A legal blog is a powerful lever when well executed. Articles should answer real questions (inspired by Google People Also Ask), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a lawyer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a firm must accumulate web authority signals: presence on legal directories (Avvo, FindLaw, The Law Society), mentions in legal press, an optimized Google Business Profile, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a law firm?',
        answer:
          'Local SEO targets "lawyer + specialty + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best personal injury attorney") and requires high-authority educational content. Rankwell combines both approaches based on the firm\'s strategy.',
      },
      {
        question: 'Are Avvo, FindLaw, and legal directories enough to be visible?',
        answer:
          'Legal directories like Avvo and FindLaw are useful for initial visibility, but they create dependency: the firm is just one profile among hundreds. A well-optimized website allows the firm to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps law firms build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your law firm visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Notary', href: '/en/geo-seo-agency/sectors/notaire' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
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
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notaire' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Attorney',
};

export default data;
