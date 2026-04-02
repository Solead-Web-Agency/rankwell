/**
 * DATA: Sector Page Translators (EN)
 * Route: /en/geo-seo-agency/sectors/translator
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs (API units exhausted, volumes cross-referenced with industry benchmarks), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'translator',
    title: 'GEO & SEO Agency for Translators - Rankwell',
    description:
      'Rankwell helps translators and translation agencies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the translation industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Translators' },
    ],
    title: 'GEO & SEO for Translators: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for a certified translator or a specialized translation agency on Google and through AI engines. Our experts design GEO & SEO strategies tailored to the translation industry.',
    ctaText: 'Request a GEO & SEO audit for your translation business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for translators',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Translation queries split into two worlds</strong>: free online tools (1.8M searches/month US) and professional services. Only commercial and local queries generate clients, with prospects searching by city and language pair.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Freelancers and agencies require different SEO approaches</strong>. Certified translation carries YMYL weight for legal and immigration documents. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must surface verifiable credentials (ATA, ITI, MOJ approval) on every page.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">ProZ, TranslatorsCafe</strong> (global), <strong class="text-secondary dark:text-accent">ATA</strong> (US), <strong class="text-secondary dark:text-accent">ITI, CIOL</strong> (UK), and platforms like Fiverr and Upwork dominate commercial queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a translator remains invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its fame than on the factual structure of its content. A website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
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
        { keyword: 'translation services near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'certified translation services', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'legal translation services', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'document translation services', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'translation agency near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does translation cost', volume: 3600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'medical translation services', volume: 1900, intent: 'commerciale', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'translation services near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'certified translation services UK', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'translation agency London', volume: 880, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'legal translation services', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'sworn translator near me', volume: 590, intent: 'locale', difficulty: 'faible' },
        { keyword: 'document translation near me', volume: 480, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a certified translation cost UK', volume: 390, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'translation services dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'legal translation dubai', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'certified translation dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'translation office near me', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'arabic translation services', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'MOJ approved translation dubai', volume: 480, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'translation agency abu dhabi', volume: 390, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "translation services near me", "certified translation services", or "legal translation dubai" represent clients who need a professional translator for a legal, immigration, or commercial document. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your website does not appear there, those clients go to a competitor or a generalist platform.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for translators',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of the translation profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by language pair and specialty domain',
          'Schema.org ProfessionalService and Service markup',
          'Performance and Core Web Vitals',
          'Hreflang management and multilingual site architecture',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the translator\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the translator\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries (translator recommendations)',
        ],
      },
      {
        title: 'Market study & translation keyword research',
        subtitle: 'Mapping of search queries by language pair, specialty (legal, medical, technical), and geographic area across US, UK, and UAE markets. Identification of low-competition niches.',
        items: [
          'Language pair + city + specialty combinations with low competition',
          'Analysis of queries asked to AI engines about translation',
          'Real search volumes by specialty (certified, legal, medical, technical)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed to cover each language/specialty combination without cannibalization.',
        items: [
          'Language page > specialty page > quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Translation content strategy',
        subtitle: 'Creation of educational content demonstrating the translator\'s expertise, written to be citable by LLMs.',
        items: [
          'Practical guides: "certified translation vs notarized translation", "how to get a birth certificate translated"',
          'Self-sufficient factual sentences with verifiable data (rates, turnaround times)',
          'Educational content on language pairs and quality standards (ISO 17100, ATA certification)',
        ],
      },
      {
        title: 'Authority & translation link building',
        subtitle: 'Authority development through professional translation directories and specialized publications.',
        items: [
          'ATA (American Translators Association), NAJIT (US)',
          'ITI (Institute of Translation and Interpreting), CIOL (UK)',
          'Legal and immigration press publications, institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the Google Business Profile to capture local "translator + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Translator or Translation Service + secondary categories by specialty',
          'Client review management and post-project collection strategy',
          'Photos, hours, attributes, and regular posts',
          'Consistent NAP citations across translation directories (ATA, ProZ, ITI)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by language pair and specialty, and quote requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by language pair and specialty',
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
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your website: page architecture by language and specialty (legal, technical, medical), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your translation business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against 3 to 5 competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'ProfessionalService, Service (with serviceType: Translation), and FAQPage markup ready to integrate, with the language pairs and specialties covered. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of specialty pages (legal, technical, medical translation), articles on localization and quality standards, and pricing FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from translation directories (ATA, ProZ, ITI), linguistics blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by language pair and specialty, organic traffic, quote requests generated, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your translation business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which translation service do you recommend for legal documents in New York?", the LLM compiles information from across the web to formulate its response. If your website or profile does not appear in any cited source, you are invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which certified translator do you recommend in London?": the LLM does not cite any translator or agency by name. It redirects to professional directories (ITI, ATA, CIOL) and provides 4-5 selection criteria (certification, language pair, specialization, reviews, turnaround time). Translators whose websites structure these facts clearly are best positioned for future citations.</p><h4>Informational queries</h4><p>"How to choose a good translator?" or "certified translation vs notarized translation": the LLM generates a structured guide with 6-7 criteria (ISO 17100 certification, native target language, specialization, confidentiality agreement, transparent pricing) without citing any provider. Websites publishing this type of educational content can be extracted as a reference source.</p><h4>Pricing queries</h4><p>"How much does a certified translation cost?": the LLM gives detailed price ranges (USD 0.10 to 0.30 per word for standard translation, USD 25 to 50 per page for certified translation, GBP 0.08 to 0.20 per word in the UK). Websites displaying clear, up-to-date pricing grids have the highest chance of being cited.</p><h4>Local and Maps queries</h4><p>On "translation services near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Translation agencies with a complete Google Business Profile (Translation Service category, recent reviews, hours) appear directly in the AI response. Freelance translators without a GBP listing remain absent from these results.</p>',
    structuredData:
      '<p>For translators and translation agencies, the recommended schema.org types are: <code>ProfessionalService</code> (primary type), <code>Service</code> (with <code>serviceType</code>: Translation), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>ProfessionalService</code> markup allows Google and LLMs to precisely identify the languages offered, location, and specializations of the translator.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your translation business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for translators',
    items: [
      {
        question: 'How much does SEO cost for a translator or translation agency?',
        answer:
          'The SEO budget for a translator or translation agency depends on the number of language pairs and specialties targeted. At Rankwell, SEO engagements for translation professionals start from USD 1,500/month (or GBP 1,200/month) for a single language pair and one city, and can reach USD 4,000-6,000/month for a multi-language agency targeting national or international visibility.',
      },
      {
        question: 'How long does it take to see results from translation SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "certified Spanish translator Miami" or "legal translation services Manchester") rank faster than nationally competitive terms like "translation agency". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO relevant for a freelance translator?',
        answer:
          'Yes, SEO is particularly effective for freelance translators who target a niche (language pair + specialty + city). A freelancer specializing in legal English-to-Arabic translation in Dubai can rank in the top 3 on that precise query with a reasonable investment. Rankwell adapts its strategies to the budget and goals of both freelancers and agencies.',
      },
      {
        question: 'Does a translator need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever for translators, provided it targets the right queries. Comparative articles ("certified translation vs notarized translation"), practical guides ("how to get a birth certificate translated for USCIS"), and content on quality standards (ISO 17100, ATA certification) attract qualified traffic and demonstrate expertise. Rankwell recommends 2-4 articles per month on targeted informational queries.',
      },
      {
        question: 'How can a translator appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a translator must accumulate credibility signals: presence on professional directories (ATA, ITI, ProZ), mentions on third-party sites, an optimized Google Business Profile, and factual content with pricing grids and verifiable certifications. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a translator?',
        answer:
          'Local SEO targets "certified translator + city" queries and relies on Google Business Profile, client reviews, and local citations. It is the priority lever for certified translators whose clients search by proximity. National SEO targets generic queries ("translation agency" or "legal translation services") and requires high-authority content. Rankwell combines both approaches based on the translator\'s or agency\'s positioning.',
      },
      {
        question: 'Are platforms like ProZ or Upwork enough to be visible?',
        answer:
          'Platforms like ProZ, TranslatorsCafe, or Upwork provide initial visibility, but they create dependency: the translator is one profile among thousands, subject to price competition and platform fees. A well-optimized website allows translators to control their image, convert directly, and set their own rates. Rankwell helps translation professionals build independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your translation business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
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
        { label: 'Citability', href: '/en/glossary/citabilite' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Videographer', href: '/en/geo-seo-agency/sectors/videaste' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
    ],
  },

  // Schema.org primary type
  schemaType: 'ProfessionalService',
};

export default data;
