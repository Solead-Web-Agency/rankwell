/**
 * DATA: Sector Page Locksmiths (EN)
 * Route: /en/geo-seo-agency/sectors/locksmith
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (MarketKeep, Loopex Digital, OneBaseMedia), March 2026
 * LLM auto-test: rapport-test-serrurier-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'locksmith',
    title: 'GEO & SEO Agency for Locksmiths - Rankwell',
    description:
      'Rankwell helps locksmith businesses boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the locksmith industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Locksmiths' },
    ],
    title: 'GEO & SEO for Locksmiths: Google & AI Engine Visibility',
    subtitle:
      'Your customers search in a panic, often at night, on mobile. Our experts design GEO & SEO strategies that place your locksmith business ahead of scam operators and directory aggregators in Google results and AI engine responses.',
    ctaText: 'Request a GEO & SEO audit for your locksmith business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for locksmiths',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 90% of locksmith searches happen on mobile, in an emergency context</strong>. "Locksmith near me" generates <strong class="text-secondary dark:text-accent">200,000+ monthly searches in the US and 74,000 in the UK</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the first credible result captures almost every call.',
    constraints:
      'The locksmith industry faces a <strong class="text-secondary dark:text-accent">severe trust crisis online</strong>. Scam operators flood Google Ads with bait pricing (USD 35 quoted, USD 500+ charged). The FTC (US) and Trading Standards (UK) have flagged these practices repeatedly, making organic SEO more strategic than ever for legitimate locksmiths.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Angi, Yelp, HomeAdvisor</strong> (US), <strong class="text-secondary dark:text-accent">Checkatrade, the Master Locksmiths Association</strong> (UK) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a legitimate locksmith stays invisible behind these aggregators and scam listings.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s Local Pack.',
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
        { keyword: 'locksmith near me', volume: 204000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'car locksmith near me', volume: 10000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency locksmith near me', volume: 1900, intent: 'locale', difficulty: 'faible' },
        { keyword: '24 hour locksmith', volume: 12100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how much does a locksmith cost', volume: 3000, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'car key replacement', volume: 33100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'lock rekey', volume: 14800, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'locksmith near me', volume: 74000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency locksmith', volume: 12100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'emergency locksmith near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'auto locksmith near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: '24 hour locksmith', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'locksmith prices', volume: 720, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'lock change near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'locksmith near me', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'locksmith dubai', volume: 2400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car key replacement dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'emergency locksmith dubai', volume: 880, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'door lock repair dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'key cutting near me', volume: 590, intent: 'locale', difficulty: 'faible' },
        { keyword: 'locksmith abu dhabi', volume: 480, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 200,000 searches for "locksmith near me" are performed in the US alone, with 74,000 more in the UK. The vast majority happen in an emergency, on mobile, with an immediate conversion to a phone call. If your business does not appear in the top 3 Google results or in an AI engine recommendation, it is a competitor or a scam operator who picks up that call.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for locksmith businesses',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the unique challenges of the locksmith industry: emergency intent, trust signals, and scam competition.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, mobile loading speed, and the trust signals that are critical in an industry plagued by online fraud.',
        items: [
          'Page structure by service type (lockout, rekey, car key, installation)',
          'Schema.org Locksmith markup',
          'Mobile performance and Core Web Vitals',
          'Trust signal verification (license, insurance, certifications)',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your business\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the informational universe around your locksmith business',
          'Measurement of legitimacy and citability vs. aggregator platforms',
          'Evaluation of factual density (pricing grids, qualifications, service areas)',
          'Competitive benchmark on AI queries about emergency services',
        ],
      },
      {
        title: 'Market study & locksmith keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-conversion gaps.',
        items: [
          'Service + city combinations with low organic competition',
          'Emergency queries ("locksmith open now", "24 hour locksmith near me")',
          'Real search volumes by service type and market',
          'Analysis of queries asked to AI engines about locksmith services',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the journey of a customer in an emergency: they need a service, a price, and a phone number.',
        items: [
          'Service page > area page > contact/quote page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with trust signals',
        ],
      },
      {
        title: 'Locksmith content strategy',
        subtitle: 'Creation of educational content that demonstrates expertise and builds trust in an industry where prospects are highly skeptical of online operators.',
        items: [
          'Practical guides: "how to identify a legitimate locksmith"',
          'Transparent pricing grids by service type (lockout, rekey, car key)',
          'Self-sufficient factual sentences with verifiable data (license, insurance)',
          'FAQs targeting Google People Also Ask on scams and pricing',
        ],
      },
      {
        title: 'Authority & locksmith link building',
        subtitle: 'Authority development through qualified trade directories and specialized publications.',
        items: [
          'Angi, HomeAdvisor, Yelp, BBB (US)',
          'Checkatrade, Master Locksmiths Association, Yell (UK)',
          'Trade press publications and consumer protection partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile to capture "locksmith + city" and "locksmith near me" queries, and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Locksmith + secondary categories by specialty',
          'Client review management and post-service collection strategy',
          'Photos of real jobs, hours including night/weekend availability',
          'Consistent NAP citations across trade directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and calls generated.',
        items: [
          'Google positions by keyword and geographic area',
          'Organic traffic by service type',
          'GEO Score: visibility in AI engines',
          'Incoming calls, quote requests, and conversions',
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
        description: 'Full diagnostic of your locksmith website: service pages for lockouts, rekeying, and car key replacement, mobile loading speed, local indexation, and technical blocking factors.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests on locksmith queries across AI engines, benchmark against your local competitors, and GEO Score calculation with improvement axes (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Locksmith, HomeAndConstructionBusiness, and FAQPage markup ready to deploy, including your emergency services and service areas. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (emergency lockout, lock change, car key replacement), security articles, transparent pricing FAQs, CMS integration or FTP upload, and optimized page templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from trade directories (Angi, Checkatrade, Master Locksmiths Association), local press, and consumer protection publications. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by service type, GEO Score evolution, incoming calls and quotes attributed to SEO, and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your locksmith business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When someone locked out at night asks ChatGPT "which reliable locksmith should I call?", the LLM compiles information from across the web to formulate its response. If your business does not appear in any cited source, it is invisible in this new client acquisition channel, and it is a competitor or a platform that captures the call.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which locksmith do you recommend near me?": the LLM does not cite a specific locksmith by name. It provides a list of 5 to 7 criteria for choosing a reliable provider (license verification, Google reviews, upfront pricing, avoidance of bait-and-switch tactics) and redirects to platforms (Angi, Checkatrade, the Master Locksmiths Association). The risk of scams is systematically mentioned.</p><h4>Anti-scam and informational queries</h4><p>"How to choose a reliable locksmith and avoid scams?": the LLM generates a structured guide with 6 to 8 checkpoints (trade license, written quote before work begins, refusal of phone-only estimates, review verification). It cites consumer protection agencies like the FTC and Trading Standards as recourse. Sites publishing content on pricing transparency and qualifications have the highest citation potential.</p><h4>Pricing queries</h4><p>"How much does a locksmith cost?": the LLM provides detailed ranges: USD 75 to USD 200 for a standard lockout, USD 150 to USD 400 for car key replacement, GBP 70 to GBP 150 for an emergency callout in the UK. Sites offering up-to-date, verifiable pricing grids are the sources most easily extracted.</p><h4>Local and Maps queries</h4><p>On "emergency locksmith near me open now", <strong>ChatGPT activates Search mode with a Maps card</strong>. Locksmiths with a complete Google Business Profile (24/7 hours, recent reviews, photos of real jobs) appear as a priority in the AI response.</p>',
    structuredData:
      '<p>For locksmiths, the recommended schema.org types are: <code>Locksmith</code> (primary type), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Locksmith</code> markup allows Google and LLMs to precisely identify the service area, types of services, availability hours, and client reviews of the business.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your locksmith business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on your services), Legitimacy & Citability (external trust signals: reviews, directories, press mentions), and Factual Density (richness of structured data, pricing grids, and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for locksmiths',
    items: [
      {
        question: 'How much does SEO cost for a locksmith business with Rankwell?',
        answer:
          'The SEO budget for a locksmith depends on the number of geographic areas targeted and local competition intensity. At Rankwell, SEO engagements for locksmiths start from USD 1,500/month (or GBP 1,200/month) for a single city and core services, and can reach USD 4,000-6,000/month for multi-city coverage in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from locksmith SEO with Rankwell?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "emergency locksmith Scottsdale" or "auto locksmith Glasgow") are faster to rank for than highly competitive terms like "locksmith near me" in major cities. Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'How does Rankwell help a locksmith stand out from scam operators in Google results?',
        answer:
          'The locksmith industry is heavily targeted by scam operators who flood Google Ads with bait pricing. Rankwell differentiates legitimate businesses through verifiable trust signals: trade license displayed, insurance documentation, transparent pricing grids, authentic Google Business Profile reviews, and schema.org Locksmith markup. These signals help Google and AI engines identify your business as legitimate, pushing scam operators down in organic results.',
      },
      {
        question: 'Does a locksmith need a blog to improve rankings with Rankwell?',
        answer:
          'A blog is a powerful lever when it targets the right queries. The most effective articles for locksmiths answer concrete questions: "how to identify a legitimate locksmith", "lock rekey vs lock change cost", "what to do if your key breaks in the lock". Rankwell recommends 2 to 4 articles per month, targeting Google People Also Ask queries and informational searches related to locksmith services.',
      },
      {
        question: 'How can a locksmith appear in ChatGPT responses according to Rankwell?',
        answer:
          'To be cited by ChatGPT or Perplexity, a locksmith must accumulate web trust signals: a complete Google Business Profile with recent reviews, presence on trade directories (Angi, Checkatrade, Master Locksmiths Association), mentions in local press, and rich factual content on its website (pricing grids, certifications, service areas). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a locksmith according to Rankwell?',
        answer:
          'Local SEO targets "locksmith + city" and "locksmith near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("lock rekey cost", "car key replacement") and requires high-authority educational content. Rankwell combines both approaches based on the geographic coverage of your locksmith business.',
      },
      {
        question: 'Are platforms like Angi, Checkatrade, and trade directories enough to be visible according to Rankwell?',
        answer:
          'Trade directories like Angi and Checkatrade provide initial visibility, but they create dependency: your business is just one listing among hundreds, and the customer compares on price without any loyalty. A well-optimized website allows you to control your image, display your certifications and transparent pricing, and convert directly. Rankwell helps locksmiths build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your locksmith business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
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
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Locksmith',
};

export default data;
