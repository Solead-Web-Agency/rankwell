/**
 * DATA: Sector Page Pharmacies (EN)
 * Route: /en/geo-seo-agency/sectors/pharmacy
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 * LLM auto-test: rapport-test-pharmacie-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'pharmacy',
    title: 'GEO & SEO Agency for Pharmacies - Rankwell',
    description:
      'Rankwell helps pharmacies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the pharmacy industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Pharmacies' },
    ],
    title: 'GEO & SEO for Pharmacies: Google & AI Engine Visibility',
    subtitle:
      'Patients search for an open pharmacy, an on-duty service, or health advice: on Google, in Google Maps, and in ChatGPT responses. Our experts design GEO & SEO strategies adapted to the regulatory constraints of the pharmacy sector.',
    ctaText: 'Request a GEO & SEO audit for your pharmacy',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for pharmacies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 1.8 million monthly searches for "pharmacy near me" in the US</strong>. Most queries include an urgency marker ("open now", "24 hour", "open Sunday"). Google Business Profile and up-to-date hours are the primary visibility factors.',
    constraints:
      'Pharmacy is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Regulations differ: FDA and state boards in the US, GPhC in the UK, MOHAP in the UAE. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these frameworks plus online pharmacy accreditation requirements.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">CVS, Walgreens</strong> (US), <strong class="text-secondary dark:text-accent">Boots, NHS Pharmacy Finder</strong> (UK), <strong class="text-secondary dark:text-accent">Life Pharmacy, Aster</strong> (UAE) dominate pharmacy traffic and AI engine responses. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent pharmacy stays invisible.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
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
    title: 'What your future patients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'pharmacy near me', volume: 1830000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: '24 hour pharmacy', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'pharmacy open now', volume: 165000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'online pharmacy', volume: 74000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'pharmacy delivery', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'CVS pharmacy near me', volume: 246000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how to transfer prescription to another pharmacy', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'pharmacy near me', volume: 450000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'pharmacy open now', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'late night pharmacy', volume: 27100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'Boots pharmacy', volume: 135000, intent: 'navigationnelle', difficulty: 'élevée' },
        { keyword: 'online pharmacy UK', volume: 22200, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'NHS pharmacy services', volume: 8100, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'pharmacy delivery near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'pharmacy dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: '24 hour pharmacy dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'pharmacy near me dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'online pharmacy UAE', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'pharmacy delivery dubai', volume: 2900, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'Life Pharmacy dubai', volume: 8100, intent: 'navigationnelle', difficulty: 'élevée' },
        { keyword: 'pharmacy abu dhabi', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "pharmacy near me", "24 hour pharmacy", or "pharmacy open now" represent patients in immediate need. In the US alone, "pharmacy near me" generates over 1.8 million monthly searches. The majority click on the first Maps result or follow the recommendation of an AI engine. If your pharmacy does not appear with up-to-date hours and clearly listed services, those patients go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for pharmacies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the pharmacy industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the pharmacy website architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by product category (prescription, OTC, health & beauty, medical devices)',
          'Schema.org Pharmacy and MedicalOrganization markup',
          'Performance and Core Web Vitals (mobile-first for pharmacy)',
          'Crawl and indexation of product pages and service pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the pharmacy\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the pharmacy\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of health content factual density',
          'Competitive benchmark on AI pharmacy queries',
        ],
      },
      {
        title: 'Market study & pharmacy keyword research',
        subtitle: 'Mapping of search queries by service type (on-duty, vaccination, testing, consultation) and geographic area across US, UK, and UAE markets.',
        items: [
          'Service + city + urgency combinations with low competition',
          'Analysis of queries asked to AI engines about medications and services',
          'Real search volumes by product category and service type',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Service page (on-duty, vaccination, testing) > pharmacy page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by product category',
        ],
      },
      {
        title: 'Health content strategy',
        subtitle: 'Creation of educational health content demonstrating pharmacy expertise, written to be citable by LLMs and compliant with pharmaceutical advertising regulations.',
        items: [
          'Health guides and FAQs answering Google People Also Ask (self-care, prevention, seasonal health)',
          'Self-sufficient factual sentences with verifiable data',
          'Compliance with FDA/state regulations (US), GPhC standards (UK), MOHAP rules (UAE)',
        ],
      },
      {
        title: 'Authority & pharmacy link building',
        subtitle: 'Authority development through qualified health directories and specialized publications.',
        items: [
          'NABP, APhA, state pharmacy boards, GoodRx (US)',
          'GPhC register, NHS Pharmacy Finder, Pharmacy2U (UK)',
          'MOHAP licensed pharmacy directory, DHA (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the pharmacy\'s Google Business Profile to capture local "pharmacy + city" queries and on-duty searches, and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Pharmacy + service attributes (vaccination, COVID testing, click & collect)',
          'Patient review management and collection strategy',
          'On-duty hours and extended hours kept up to date, storefront and consultation area photos',
          'Consistent NAP citations across health directories and pharmacy locators',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and conversions generated (calls, directions, click & collect orders).',
        items: [
          'Google positions by health keyword and service',
          'Organic traffic by service category',
          'GEO Score: visibility in AI engines',
          'Conversions: calls, Maps directions, appointment bookings',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your pharmacy team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your pharmacy website: service pages (on-duty, vaccination, telehealth), loading speed, Google and AI bot indexation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests on pharmacy queries in ChatGPT, Perplexity, and Gemini. Benchmark against local competitors and chain pharmacies, GEO Score out of 100.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Pharmacy, MedicalOrganization, FAQPage markup with services, on-duty hours, and product categories. Delivered with a CMS integration guide (WordPress, Shopify, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Service pages, health and prevention articles, on-duty and hours FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from pharmacy directories, health blogs, local press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by service, organic traffic, in-store visits attributed, GEO Score evolution, and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your pharmacy in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which pharmacy is open near me right now?", the LLM compiles information from across the web to formulate its response. If your pharmacy does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>On-duty and urgency queries</h4><p>"Which pharmacy is open near me right now?": the LLM cannot provide real-time data. It redirects to Google Maps and mentions chain pharmacies by name. In the US, CVS, Walgreens, and Rite Aid are cited systematically. In the UK, Boots is referenced. In the UAE, Life Pharmacy and Al-Dawaa are named as 24-hour options. No independent pharmacy is ever cited by name.</p><h4>Information and advice queries</h4><p>"How to choose a good pharmacy?": the LLM generates a structured guide covering licensing, staff qualifications, services offered (vaccinations, blood pressure monitoring, prescription delivery), and patient reviews. No pharmacy is named. The pharmacy that publishes these criteria on its website with verifiable data can be referenced as a source.</p><h4>Comparison queries</h4><p>"CVS vs Walgreens vs Boots: which is better for online prescriptions?": the LLM produces a detailed factual comparison. It names each chain with their specific programs (ExtraCare Rewards, Prescription Savings Club, Advantage Card) and segments by market (US vs UK). Independent pharmacies with an e-commerce presence and documented services gain dual visibility.</p><h4>Local and Maps queries</h4><p>On "24 hour pharmacy near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Pharmacies with a complete Google Business Profile (on-duty hours kept up to date, services listed, recent reviews) appear directly in the geolocated AI response.</p>',
    structuredData:
      '<p>For pharmacies, the recommended schema.org types are: <code>Pharmacy</code> (primary type), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Pharmacy</code> markup allows Google and LLMs to precisely identify the services offered (on-duty, vaccination, testing), the location, and the opening hours of the pharmacy.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your pharmacy\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of health content), Legitimacy & Citability (external trust signals such as pharmacy board registration and regulatory accreditation), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for pharmacies',
    items: [
      {
        question: 'How much does SEO cost for a pharmacy?',
        answer:
          'The SEO budget for a pharmacy depends on the scope: local storefront website, e-commerce with OTC and health products, or both. At Rankwell, SEO engagements for pharmacies start from USD 1,500/month (or GBP 1,200/month) for a local storefront website, and can reach USD 4,000-6,000/month for an e-commerce pharmacy with a product catalog covering OTC, health and beauty, and medical devices.',
      },
      {
        question: 'How long does it take to see results from pharmacy SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "24 hour pharmacy + city" or "pharmacy open Sunday + neighborhood") are faster to rank for than nationally competitive terms like "online pharmacy". Rankwell provides a realistic timeline based on the initial competitive analysis of your catchment area.',
      },
      {
        question: 'Is SEO compatible with pharmaceutical regulations?',
        answer:
          'Yes, SEO is fully compatible with pharmaceutical regulations, provided certain limits are respected. In the US, the FDA and state pharmacy boards regulate drug advertising, and VIPPS accreditation is required for online pharmacies. In the UK, the GPhC (General Pharmaceutical Council) enforces standards for internet pharmacies and requires the display of a registered pharmacy logo. In the UAE, MOHAP (Ministry of Health and Prevention) mandates e-pharmacy licensing and restricts prescription drug advertising. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a pharmacy need a health blog to improve rankings?',
        answer:
          'A health blog is a powerful lever when well executed and compliant with regulations. Articles should answer real patient questions (inspired by Google People Also Ask), demonstrate pharmaceutical expertise, and be written to be citable by AI engines. Rankwell recommends 2 to 4 articles per month on seasonal topics (allergies, flu, sun protection) or self-care guides.',
      },
      {
        question: 'How can a pharmacy appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a pharmacy must accumulate web authority signals: presence on pharmacy directories (NABP, GPhC register, MOHAP directory), a complete Google Business Profile with services listed and up-to-date hours, and factual sourced health content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a pharmacy?',
        answer:
          'Local SEO targets "pharmacy + city" or "pharmacy open now + neighborhood" queries and relies on Google Business Profile, patient reviews, and NAP citations on health directories. National SEO targets generic queries ("online pharmacy", "best OTC allergy medicine") and requires high-authority educational content and an optimized product catalog. Rankwell combines both approaches based on the pharmacy\'s business model.',
      },
      {
        question: 'Are Google Maps and chain pharmacy aggregators enough to be visible?',
        answer:
          'Google Maps and chain aggregators are useful for basic visibility, but they create dependency: your pharmacy is just one pin among hundreds. A well-optimized website allows you to control your image, showcase your specialized services (compounding, vaccinations, chronic disease management), convert directly, and build lasting authority that no aggregator can revoke. Rankwell helps pharmacies build this independent visibility through a GEO & SEO strategy that does not depend on platforms.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your pharmacy visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Optician', href: '/en/geo-seo-agency/sectors/opticien' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'SEO E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Shopify', href: '/en/geo-seo-agency/cms/shopify' },
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
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
      { label: 'Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
      { label: 'Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
      { label: 'Clinic', href: '/en/geo-seo-agency/sectors/clinique' },
      { label: 'Optician', href: '/en/geo-seo-agency/sectors/opticien' },
      { label: 'Veterinarian', href: '/en/geo-seo-agency/sectors/veterinaire' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Pharmacy',
};

export default data;
