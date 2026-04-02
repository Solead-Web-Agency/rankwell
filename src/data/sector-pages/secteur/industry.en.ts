/**
 * DATA: Sector Page Industries (EN)
 * Route: /en/geo-seo-agency/sectors/industry
 *
 * B2B / national sector: subcontractors, manufacturers, industrial SMEs.
 * Adapted for US / UK / UAE markets.
 * Keyword data: Ahrefs + industry sources (MediaSearchGroup, ThomasNet, Backlinko), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'industry',
    title: 'GEO & SEO Agency for Industrial Companies - Rankwell',
    description:
      'Rankwell helps manufacturers and industrial companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the manufacturing sector.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Industries' },
    ],
    title: 'GEO & SEO for Industry: Google & AI Engine Visibility',
    subtitle:
      'Subcontractors, manufacturers, industrial SMEs: your buyers and procurement teams search for suppliers on Google and in ChatGPT responses. Our experts design GEO & SEO strategies tailored to long B2B purchasing cycles and technical requirements of the manufacturing sector.',
    ctaText: 'Request a GEO & SEO audit for your industrial company',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for industrial companies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">78% of industrial B2B buyers start their sourcing with an online search</strong>. Queries combine process and specification: "CNC machining titanium", "precision engineering aerospace". This is not a standard <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market: the buyer looks for technical capability first, then location.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Industrial purchasing cycles last 3 to 12 months</strong>, involve multiple decision-makers and supplier qualification phases (ISO 9001, AS9100, IATF 16949). Content must include spec sheets, case studies, and proof of compliance at every stage.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">ThomasNet, GlobalSpec, Kompass</strong> (US/International), <strong class="text-secondary dark:text-accent">Made in Britain</strong> (UK), <strong class="text-secondary dark:text-accent">Dubai Industrial City, Jafza</strong> (UAE) dominate sourcing queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an industrial company remains one listing among thousands.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Structured Data)
  // ============================================
  quote: {
    text: 'According to Rankwell, structured data plays a dual role: it powers Google\'s rich results (rich snippets, FAQ, reviews) and provides LLMs with an explicit semantic comprehension layer that facilitates factual extraction. A properly marked-up DefinedTerm type becomes an entity directly ingestible by an AI engine.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'Learn more about structured data',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'CNC machining', volume: 12100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'manufacturing companies near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'metal fabricator', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'sheet metal fabrication', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'contract manufacturing', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'precision machining services', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to choose a contract manufacturer', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'CNC machining UK', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'sheet metal fabrication', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'engineering companies near me', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'precision engineering', volume: 1300, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'contract manufacturer UK', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'subcontract machining', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'ISO 9001 manufacturer', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'manufacturing companies in Dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'metal fabrication Dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'CNC machining UAE', volume: 880, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'steel fabrication Sharjah', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'industrial supplier Dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'precision engineering UAE', volume: 390, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "CNC machining", "sheet metal fabrication", or "manufacturing companies near me" represent procurement teams actively seeking suppliers. B2B buyers select their vendors from the top 3 to 5 Google results, or follow the recommendation of an AI engine. If your industrial website does not appear there, your competitors capture those RFQs.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for industrial companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the technical constraints and long sales cycles of the B2B manufacturing sector across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of your site architecture, product pages, and technical factors blocking the indexation of industrial catalogs.',
        items: [
          'Page structure by process, material, and target industry',
          'Schema.org Product and OfferCatalog markup',
          'Performance and Core Web Vitals on large catalogs',
          'Crawl and indexation review for technical PDF spec sheets',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your company\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your industrial brand\'s informational universe',
          'Measurement of legitimacy and citability on your processes',
          'Evaluation of technical content factual density',
          'Competitive benchmark on AI sourcing queries',
        ],
      },
      {
        title: 'Market study & industrial keyword research',
        subtitle: 'Mapping of sourcing queries by technical process, material, and target application across US, UK, and UAE markets. Identification of high-potential niches.',
        items: [
          'Process + material + specification combinations ("titanium 5-axis CNC machining")',
          'Analysis of queries asked to AI engines by procurement teams',
          'Real search volumes by industrial vertical and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the industrial buyer journey and Google crawl efficiency.',
        items: [
          'Process page > capability page > quote/contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with technical terminology',
        ],
      },
      {
        title: 'Industrial content strategy',
        subtitle: 'Creation of technical content demonstrating your company\'s expertise, written to be citable by LLMs.',
        items: [
          'Detailed process pages with tolerances, materials, and certifications',
          'Client case studies with verifiable quantified data',
          'Technical guides answering Google People Also Ask in your vertical',
        ],
      },
      {
        title: 'Authority & industrial link building',
        subtitle: 'Authority development through qualified B2B directories and specialized publications.',
        items: [
          'ThomasNet, GlobalSpec, Kompass, DirectIndustry (US/International)',
          'Made in Britain, Engineering Capacity (UK)',
          'Trade press publications and cluster/industry body partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your production site\'s Google Business Profile to capture regional sourcing queries and appear in geolocated AI responses.',
        items: [
          'Primary category adapted (Industrial Company, Machine Shop, Metal Fabricator)',
          'Workshop photos, certifications displayed, production hours',
          'Consistent NAP citations across regional industrial directories',
          'Separate listings per production site for multi-site manufacturers',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by vertical, and quote requests generated.',
        items: [
          'Google positions by technical keyword',
          'Organic traffic by process and target industry',
          'GEO Score: visibility in AI engines',
          'Quote requests and qualified conversions',
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
        description: 'In-depth analysis of your product pages, processes, and certifications: indexation, Core Web Vitals, catalog architecture, and technical blockers identified with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Measurement of your company\'s visibility in ChatGPT, Perplexity, and Google AI Overviews responses. GEO Score out of 100 with competitive benchmark across your industrial vertical.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Organization, Product, OfferCatalog, and FAQPage markup ready to integrate. Each type is configured with properties adapted to your processes, materials, and certifications.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of industrial process pages, technical spec sheets, innovation articles and ISO standards guides, FAQs. Direct CMS or FTP integration depending on your infrastructure.',
      },
      {
        id: 5,
        title: 'Industrial link building management',
        description: 'Backlink acquisition from ThomasNet, GlobalSpec, Kompass, DirectIndustry, trade press, and technical blogs. Each link targets a strategic page on your website.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions, organic traffic, quote requests, and GEO Score evolution with AI citability monitoring and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your industrial company in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a procurement manager asks ChatGPT "which subcontractor do you recommend for precision CNC machining?", the LLM compiles information from across the web to formulate its response. If your company does not appear in any cited source, it is invisible in this new sourcing channel.',
    llmBehavior:
      '<h4>Supplier recommendation queries</h4><p>"Which industrial subcontractor do you recommend for CNC machining?": the LLM does not cite any company name. It provides a list of selection criteria (ISO 9001 certification, AS9100, machine capabilities, proximity) and redirects to B2B directories: ThomasNet, GlobalSpec, Kompass. Companies with structured technical content and mentions on these platforms are more likely to be referenced over time.</p><h4>Technical information queries</h4><p>"How to choose a good industrial subcontractor?" or "CNC machining vs 3D printing for aerospace parts": the LLM generates a structured guide with 6 to 8 criteria (quality certifications, client references, machine park, traceability). It cites no company or external source. The industrial site that publishes this type of structured content can be extracted as a reference source.</p><h4>Comparative queries</h4><p>"Manufacturer vs distributor: what\'s the difference?": the LLM produces a factual comparative analysis (in-house production vs stock, custom vs standard, MOQ vs immediate availability). No brand cited. Educational B2B content structured in comparison tables has the highest chance of being extracted.</p><h4>Trade show and event queries</h4><p>"Industrial trade show US 2026" or "manufacturing expo Dubai": the LLM cites IMTS (Chicago), The Manufacturer Live (Birmingham), and Arab Health/ADIPEC by name. This is the only query type where named entities appear. Companies exhibiting at these events and visible in related content benefit from a notoriety signal exploitable by LLMs.</p>',
    structuredData:
      '<p>For industrial companies, the recommended schema.org types are: <code>Organization</code> (primary type), <code>Product</code>, <code>OfferCatalog</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Product</code> markup with <code>material</code>, <code>manufacturer</code>, and <code>additionalProperty</code> allows Google and LLMs to precisely identify the processes, materials, and technical capabilities of the company.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your industrial company\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of technical content), Legitimacy & Citability (external trust signals: B2B directories, trade press, certifications), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for industrial companies',
    items: [
      {
        question: 'How much does SEO cost for an industrial company?',
        answer:
          'The SEO budget for a manufacturing company depends on the number of processes, target verticals, and catalog depth. At Rankwell, SEO engagements for industrial companies start from USD 2,000/month (or GBP 1,600/month) for a single vertical, and can reach USD 6,000-10,000/month for a multi-site group covering several processes (CNC machining, sheet metal fabrication, welding).',
      },
      {
        question: 'How long does it take to see results from manufacturing SEO?',
        answer:
          'Initial results typically appear between 4 and 8 months. Niche technical queries (e.g., "5-axis titanium CNC machining" or "AS9100 certified manufacturer UK") are faster to rank for than highly competitive generic terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your vertical.',
      },
      {
        question: 'Do quality certifications influence SEO rankings?',
        answer:
          'Yes, directly. ISO 9001, AS9100 (aerospace), IATF 16949 (automotive), and ISO 13485 (medical devices) are strong E-E-A-T signals for Google. They also strengthen AI citability: LLMs favor companies whose qualifications are verifiable and documented. Rankwell systematically integrates certifications into content strategy and structured data markup.',
      },
      {
        question: 'Does a manufacturing company need a technical blog to improve rankings?',
        answer:
          'A technical blog is a powerful lever when it addresses real buyer concerns. Content should answer sourcing questions (material selection, tolerances, process comparisons) and include verifiable quantified data. Rankwell recommends 2 to 4 publications per month targeting long-tail informational queries specific to your vertical.',
      },
      {
        question: 'How can a manufacturer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an industrial company must accumulate web authority signals: presence on B2B directories (ThomasNet, GlobalSpec, Kompass), mentions in trade press, rich and structured technical content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'Is SEO relevant for a company that sells exclusively B2B?',
        answer:
          'B2B industrial SEO targets procurement managers, engineers, and quality directors who search for suppliers online. Unlike B2C, search volumes are lower but purchase intent is highly qualified: a single RFQ can represent a contract worth tens of thousands of dollars or pounds. Rankwell adapts tracking metrics to the long purchasing cycle of B2B manufacturing.',
      },
      {
        question: 'Are B2B directories like ThomasNet and Kompass enough to be visible?',
        answer:
          'B2B directories like ThomasNet or Kompass are useful for initial visibility, but they create dependency: your company is one listing among thousands, with no technical differentiation. A well-optimized proprietary website allows you to demonstrate your expertise, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps manufacturers build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your industrial company visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to your industrial vertical.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
        { label: 'SEO Bank', href: '/en/geo-seo-agency/sectors/banque' },
        { label: 'SEO Marketing Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architecte' },
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
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related sectors banner (B2B / professional services)
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/banque' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/assurance' },
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/imprimeur' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Translator', href: '/en/geo-seo-agency/sectors/traducteur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Organization',
};

export default data;
