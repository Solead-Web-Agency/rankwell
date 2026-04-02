/**
 * DATA: Sector Page Opticians (EN)
 * Route: /en/geo-seo-agency/sectors/opticien
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs seed "optician" / "eye doctor" / "optometrist", March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'optician',
    title: 'GEO & SEO Agency for Opticians - Rankwell',
    description:
      'Rankwell helps opticians and optical practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the optical industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Opticians' },
    ],
    title: 'GEO & SEO for Opticians: Google & AI Engine Visibility',
    subtitle:
      'Your optical practice needs to appear first when a customer searches for an optician, eye doctor, or optometrist nearby. Our experts design GEO & SEO strategies tailored to the optical retail sector.',
    ctaText: 'Request a GEO & SEO audit for your optical practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for opticians',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of optical queries include a location or "near me"</strong>. Whether optometrist (US), dispensing optician (UK), or optical retailer (UAE), this is a local SEO market where the Google Local Pack and AI responses decide who captures walk-in traffic.',
    constraints:
      'The optical sector is regulated differently across markets: <strong class="text-secondary dark:text-accent">state optometry boards</strong> (US), <strong class="text-secondary dark:text-accent">General Optical Council</strong> (UK), <strong class="text-secondary dark:text-accent">DHA/DOH</strong> (UAE). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these advertising constraints to build compliant visibility.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, Healthgrades, VSP</strong> (US), <strong class="text-secondary dark:text-accent">Specsavers, Optical Express</strong> (UK), and <strong class="text-secondary dark:text-accent">Lenskart, Al Jaber Optical</strong> (UAE) dominate high-intent optical queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent optician stays invisible against these chains.',
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
    title: 'What your future customers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'eye doctor near me', volume: 1830000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'optometrist near me', volume: 550000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'optician near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'glasses near me', volume: 246000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'eye exam near me', volume: 550000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'how much is an eye exam without insurance', volume: 40500, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best eyeglasses store near me', volume: 22200, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'opticians near me', volume: 165000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'eye test near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'free eye test near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best opticians near me', volume: 12100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'cheap glasses near me', volume: 8100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'dispensing optician near me', volume: 4400, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much do glasses cost UK', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'optician dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'eye doctor dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'optical shop near me dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best optical shop in dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'eye test dubai', volume: 1600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'contact lenses dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'optometrist abu dhabi', volume: 880, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, 1.8 million searches for "eye doctor near me" in the US alone represent customers actively looking for optical care. Combined with "opticians near me" in the UK and "optician dubai" in the UAE, the optical sector generates massive local search demand. The majority click on the top 3 results or follow the recommendation of an AI engine. If your practice does not appear there, those customers walk into a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for optical practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory and commercial constraints of the optical industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of your optical website architecture, loading speed, and technical factors blocking indexation of product and service pages.',
        items: [
          'Page structure by specialty (prescription glasses, contact lenses, sunglasses, low vision)',
          'Schema.org Optician and LocalBusiness markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of product catalog pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of your optical practice\'s informational universe',
          'Measurement of legitimacy and citability against major chains',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries in the optical sector',
        ],
      },
      {
        title: 'Market study & optical keyword research',
        subtitle: 'Mapping of search queries by optical specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with lower competition',
          'Analysis of optical queries asked to AI engines',
          'Real search volumes by optical service and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the customer journey from eye exam to frame selection.',
        items: [
          'Service page (eye exam, contact lens fitting) > product page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization for optical terms',
        ],
      },
      {
        title: 'Optical content strategy',
        subtitle: 'Creation of educational content demonstrating your optical expertise, written to be citable by LLMs while complying with optical advertising regulations.',
        items: [
          'Guides and FAQs answering Google People Also Ask (progressive lenses, blue light protection, contact lens care)',
          'Self-sufficient factual sentences with verifiable data (pricing, insurance coverage, lens technology)',
          'Compliance with optical advertising rules (state boards US, GOC UK, DHA UAE)',
        ],
      },
      {
        title: 'Authority & optical link building',
        subtitle: 'Authority development through qualified optical and healthcare directories.',
        items: [
          'Zocdoc, Healthgrades, VSP provider directory (US)',
          'NHS Choices, GOC register, Optical Express directory (UK)',
          'DHA licensed provider lists, optical trade publications',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "optician + city" and "eye doctor near me" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Optician + secondary categories (eyewear store, contact lens supplier)',
          'Customer review management and collection strategy after each visit',
          'Photos of the store, frame collections, and exam equipment',
          'Consistent NAP citations across optical and healthcare directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by optical specialty, and appointments generated.',
        items: [
          'Google positions by keyword (optician + city, eye exam, contact lenses)',
          'Organic traffic by optical specialty and product category',
          'GEO Score: visibility in AI engines',
          'Appointment bookings and store visits attributed to SEO',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your optical team, marketing manager, or store owner can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your optical practice\'s website: page architecture by specialty (prescription glasses, lenses, sunglasses), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target optical queries. Benchmark against 3 to 5 competing optical retailers and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Optician, LocalBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your optical services and product catalog. Delivered with a CMS integration guide (WordPress, Shopify, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (eye exams, contact lens fittings, lens technology), buyer guides (choosing progressive lenses, blue light protection), and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from optical and healthcare directories (Zocdoc, Healthgrades, NHS Choices, GOC register), optical trade publications, and local health blogs. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by optical specialty page and local keyword, organic traffic by product category, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your optical practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which optician do you recommend near me?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which optician do you recommend in Houston?" or "best optometrist in Manchester?": the LLM does not cite a specific independent practice. It provides a list of selection criteria (licensed optometrist, range of frames, insurance acceptance, customer reviews) and redirects to directories: Zocdoc, Healthgrades, VSP (US), NHS Choices, Specsavers locator (UK). Independent opticians are absent from these responses.</p><h4>Comparison queries</h4><p>"Independent optician vs chain (Specsavers, LensCrafters): what is the difference?": the LLM structures a two-column comparison. It names the major chains (LensCrafters, Warby Parker, Specsavers, Vision Express) but no independent optician is mentioned. Only the "independent" category is described. Publishing a detailed comparison on your website creates a citability signal.</p><h4>Pricing queries</h4><p>"How much do glasses cost?" or "eye exam cost without insurance": the LLM gives detailed pricing ranges (USD 50 to USD 250 for an eye exam, USD 100 to USD 600 for prescription glasses in the US; GBP 20 to GBP 40 for NHS eye tests, GBP 50 to GBP 500 for glasses in the UK). Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "optician near me" or "eye doctor near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Optician, recent reviews, photos of the store and frame collections) appear directly in the AI response.</p>',
    structuredData:
      '<p>For opticians, the recommended schema.org types are: <code>Optician</code> (primary type), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Optician</code> markup allows Google and LLMs to precisely identify the specialties offered (prescription glasses, contact lenses, sunglasses), the location, and customer reviews of the practice.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your optical practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of optical content), Legitimacy & Citability (external trust signals, directories, reviews), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for opticians',
    items: [
      {
        question: 'How much does SEO cost for an optical practice?',
        answer:
          'The SEO budget for an optical practice depends on the geographic scope and the range of services promoted (eye exams, prescription glasses, contact lenses, sunglasses). At Rankwell, SEO engagements for opticians start from USD 1,500/month (or GBP 1,200/month) for a single-location practice and one city, and can reach USD 4,000-6,000/month for a multi-location optical retailer targeting competitive metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from optical SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "dispensing optician Bromley" or "contact lens fitting Austin") are faster to rank for than nationally competitive terms like "optician near me". Rankwell provides a realistic timeline based on the initial competitive analysis of your area.',
      },
      {
        question: 'Are there advertising restrictions for opticians that affect SEO?',
        answer:
          'Yes. In the US, state optometry boards regulate claims about eye exams and clinical services. In the UK, the General Optical Council (GOC) governs how optical professionals can advertise, including restrictions on price comparisons and clinical claims. In the UAE, the DHA and DOH impose their own marketing guidelines for optical practices. Rankwell understands these constraints and adapts every content and SEO strategy accordingly.',
      },
      {
        question: 'Does an optical practice need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real customer questions (inspired by Google People Also Ask): how to choose progressive lenses, when to replace contact lenses, what blue light glasses actually do. Rankwell recommends 2-4 articles per month targeting long-tail informational queries that position the optician as a trusted expert.',
      },
      {
        question: 'How can an optician appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an optical practice must accumulate web authority signals: presence on healthcare directories (Zocdoc, Healthgrades, NHS Choices), mentions in optical trade publications, an optimized Google Business Profile, and rich factual content on its website (pricing grids, lens technology guides, insurance coverage details). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an optician?',
        answer:
          'Local SEO targets "optician + city" and "eye doctor near me" queries and relies on Google Business Profile, customer reviews, and local citations. National SEO targets generic queries ("best glasses online", "progressive lens guide") and requires high-authority educational content. Rankwell combines both approaches based on the practice\'s number of locations and growth ambitions.',
      },
      {
        question: 'Are optical directories and chain locators enough to be visible online?',
        answer:
          'Optical directories and chain store locators (VSP, Specsavers, LensCrafters) are useful for initial visibility, but they create dependency: the practice is just one listing among hundreds. A well-optimized website allows the optician to control their image, highlight their specialties, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps optical practices build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your optical practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
        { label: 'SEO Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Shopify', href: '/en/geo-seo-agency/cms/shopify' },
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
      { label: 'Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
      { label: 'Jeweler', href: '/en/geo-seo-agency/sectors/bijoutier' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Optician',
};

export default data;
