/**
 * DATA: Sector Page Insurance (EN)
 * Route: /en/geo-seo-agency/sectors/assurance
 *
 * Financial sector, national + local (brokers, agents)
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (NerdWallet, Policygenius, CompareTheMarket), March 2026
 * LLM tests: ChatGPT anonymous mode, 5 queries, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'insurance',
    title: 'GEO & SEO Agency for Insurance Companies - Rankwell',
    description:
      'Rankwell helps insurance companies and brokers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the insurance industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Insurance' },
    ],
    title: 'GEO & SEO for Insurance: Google & AI Engine Visibility',
    subtitle:
      'Comparison platforms, aggregators, and direct insurers compete for every click from your future policyholders. Our experts design GEO & SEO strategies tailored to the specificities of the insurance market across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your insurance business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for insurance companies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 1.2 million monthly searches for "car insurance" in the US and 135,000 in the UK</strong>. Policyholders systematically compare before purchasing. Brokers capture a local share through "insurance broker near me" queries, a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where proximity and reviews make the difference.',
    constraints:
      'Insurance is classified <strong class="text-secondary dark:text-accent">YMYL (Your Money Your Life)</strong> by Google, triggering the highest E-E-A-T bar. State regulators (US), the FCA (UK), and the Insurance Authority (UAE) govern marketing communications. Every page must include sourced pricing data and compliant disclosures.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">NerdWallet, Policygenius, The Zebra</strong> (US), <strong class="text-secondary dark:text-accent">CompareTheMarket, GoCompare</strong> (UK), and <strong class="text-secondary dark:text-accent">Bayzat</strong> (UAE) dominate high-intent insurance queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an insurer or broker stays invisible against these aggregators.',
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
    title: 'What your future policyholders search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'car insurance', volume: 1220000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'home insurance', volume: 301000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'cheap car insurance', volume: 165000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'life insurance', volume: 135000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'health insurance', volume: 110000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'auto insurance quotes', volume: 90500, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'insurance broker near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'car insurance', volume: 135000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'home insurance', volume: 74000, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'compare car insurance', volume: 40500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'life insurance UK', volume: 22200, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'cheap car insurance', volume: 18100, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'insurance broker near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much is car insurance for new drivers', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'car insurance dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'health insurance UAE', volume: 8100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'cheapest car insurance UAE', volume: 4400, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'insurance companies in dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'medical insurance dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best health insurance UAE', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'insurance broker dubai', volume: 1300, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "car insurance", "compare home insurance", or "health insurance UAE" represent policyholders actively seeking coverage. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your brand does not appear there, those policyholders purchase from a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for insurance companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the insurance industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of insurance product pages.',
        items: [
          'Page structure by product line (auto, home, health, life)',
          'Schema.org InsuranceAgency and FinancialProduct markup',
          'Performance and Core Web Vitals on quote journeys',
          'Crawl and indexation review of rate calculator pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the brand\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the brand\'s informational universe in insurance',
          'Measurement of legitimacy and citability on insurance queries',
          'Evaluation of content factual density on product pages',
          'Competitive benchmark on AI queries in the sector',
        ],
      },
      {
        title: 'Market study & insurance keyword research',
        subtitle: 'Mapping of search queries by product type (auto, home, health, commercial) and by intent (quote, comparison, information) across US, UK, and UAE markets.',
        items: [
          'Product + intent combinations (auto insurance quotes, compare home insurance)',
          'Analysis of queries asked to AI engines about pricing and coverage',
          'Real search volumes by product line and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the policyholder journey: from information to quote request.',
        items: [
          'Product page per line, quote page, coverage FAQ page',
          'Primary keyword + 3-5 secondary keywords per product page',
          'Title tag, meta description, and heading optimization on quote journeys',
        ],
      },
      {
        title: 'Insurance content strategy',
        subtitle: 'Creation of educational content demonstrating the brand\'s expertise, written to be citable by LLMs and compliant with insurance regulations.',
        items: [
          'Guides and FAQs answering Google People Also Ask (claims, deductibles, coverage)',
          'Self-sufficient factual sentences with verifiable pricing data',
          'Compliance with state insurance regulations (US), FCA rules (UK), IA requirements (UAE)',
        ],
      },
      {
        title: 'Authority & insurance link building',
        subtitle: 'Authority development through qualified insurance directories, financial press, and institutional publications.',
        items: [
          'NerdWallet, Policygenius, Investopedia (US/International)',
          'CompareTheMarket, MoneySuperMarket, FCA register (UK)',
          'Financial press publications and industry partnerships (NAIC, ABI, IA)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profiles for brokers and agents, to capture local "insurance broker + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Insurance Agency + secondary categories by specialty',
          'Client review management and collection strategy post-policy',
          'Photos, hours, attributes, and regular posts on offers',
          'Consistent NAP citations across insurance directories (NAIC, BIBA, IA)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by product line, and quote requests generated.',
        items: [
          'Google positions by product keyword',
          'Organic traffic by line (auto, home, health, commercial)',
          'GEO Score: visibility in AI engines',
          'Quote requests and policy conversions',
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
        description: 'Full diagnostic of your insurance website: product page architecture (auto, home, health, commercial), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your brand in ChatGPT, Perplexity, and Gemini on your target insurance queries. Benchmark against 3 to 5 competing insurers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'InsuranceAgency, FinancialProduct, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your product lines and coverage types. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of product pages (auto, home, health, life), insurance guides (claims, deductibles, comparisons), and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from insurance comparison platforms (NerdWallet, Policygenius, CompareTheMarket), financial blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your brand.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by product page and keyword, organic traffic by insurance line, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your insurance brand in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which car insurance do you recommend?", the LLM compiles information from across the web to formulate its response. If your brand does not appear in any cited source, it is invisible in this new policyholder acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which car insurance company do you recommend in the US?": the LLM cites 5 to 7 national brands (Geico, State Farm, Progressive, USAA, Allstate, Farmers, Nationwide) with a positioning line per insurer (affordability, local agents, flexibility). The ranking relies on overall web reputation and client reviews. No external link or source is cited.</p><h4>Informational queries</h4><p>"How to choose a good home insurance policy?": the LLM generates a structured guide with coverage types (dwelling, personal property, liability), selection criteria, and exclusions to watch for. No brand cited. The checklist format is systematic. Insurers publishing this type of factual content on their site can be extracted as a reference source.</p><h4>Pricing queries</h4><p>"How much does car insurance cost in the US, UK, and UAE?": the LLM provides detailed pricing ranges by country (USD 1,200-1,500/year US, GBP 500-700/year UK, AED 2,000-5,000/year UAE comprehensive). Factors of influence are detailed: age, vehicle type, location, driving history. Sites publishing precise, up-to-date pricing data by market have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "insurance broker near me for business liability", <strong>ChatGPT does not cite any individual broker</strong>. It redirects to directories (NAIB, Trusted Choice), Google Search, and the local Chamber of Commerce. Brokers with a complete Google Business Profile (specialty, recent reviews, hours) would appear in the Search/Maps mode of the AI response.</p>',
    structuredData:
      '<p>For insurers and brokers, the recommended schema.org types are: <code>InsuranceAgency</code> (primary type), <code>FinancialProduct</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>InsuranceAgency</code> markup allows Google and LLMs to precisely identify the products offered, the location, and the client reviews of the insurer or broker.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your insurance brand\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content by product line), Legitimacy & Citability (external trust signals, press mentions, regulatory registration), and Factual Density (richness of structured pricing data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for insurance companies',
    items: [
      {
        question: 'How much does SEO cost for an insurance company?',
        answer:
          'The SEO budget for an insurer or broker depends on the number of product lines and the geographic scope targeted. At Rankwell, SEO engagements for the insurance industry start from USD 2,000/month (or GBP 1,600/month) for a single product line (auto or home) and one region, and can reach USD 6,000-10,000/month for a multi-product insurer competing nationally against comparison platforms.',
      },
      {
        question: 'How long does it take to see results from insurance SEO?',
        answer:
          'Initial results typically appear between 4 and 8 months. Niche queries (e.g., "classic car insurance quotes" or "landlord insurance UK") are faster to rank for than nationally competitive terms like "car insurance". Rankwell provides a realistic timeline based on the initial competitive analysis and the level of competition from comparison platforms.',
      },
      {
        question: 'Is SEO compatible with insurance advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with insurance marketing regulations, provided certain limits are respected. In the US, each state has an insurance commissioner enforcing advertising rules that prohibit misleading claims and require fair disclosure. In the UK, the FCA (Financial Conduct Authority) mandates clear, fair, and not misleading communications. In the UAE, the Insurance Authority sets marketing standards for all licensed insurers. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does an insurance company need a blog to improve rankings?',
        answer:
          'An insurance blog is a powerful lever when well executed. Articles should answer real questions from policyholders (deductibles, claims process, coverage comparisons), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can an insurer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an insurer must accumulate web authority signals: presence on qualified comparison platforms (NerdWallet, Policygenius, CompareTheMarket), mentions in financial press, structured pricing data, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an insurer?',
        answer:
          'Local SEO targets "insurance broker + city" or "insurance agent near me" queries and relies on Google Business Profile, client reviews, and local citations (NAIC, BIBA). National SEO targets generic queries ("best car insurance", "compare home insurance") and requires high-authority educational content. Rankwell combines both approaches based on the insurer\'s distribution structure.',
      },
      {
        question: 'Are comparison platforms enough to be visible in insurance?',
        answer:
          'Comparison platforms like NerdWallet or CompareTheMarket drive qualified traffic, but they create dependency: the insurer is just one quote among dozens. A well-optimized website allows the brand to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps insurers build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your insurance brand visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
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
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notaire' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
    ],
  },

  // Schema.org primary type
  schemaType: 'InsuranceAgency',
};

export default data;
