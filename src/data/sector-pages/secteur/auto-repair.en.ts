/**
 * DATA: Sector Page Auto Repair Shops (EN)
 * Route: /en/geo-seo-agency/sectors/auto-repair
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'auto-repair',
    title: 'GEO & SEO Agency for Auto Repair Shops - Rankwell',
    description:
      'Rankwell helps auto repair shops boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the automotive repair industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Auto Repair Shops' },
    ],
    title: 'GEO & SEO for Auto Repair: Google & AI Engine Visibility',
    subtitle:
      'Your shop needs to appear when a driver searches for a repair, a service, or an inspection nearby. Our experts design GEO & SEO strategies tailored to the constraints of the automotive repair industry.',
    ctaText: 'Request a GEO & SEO audit for your auto repair shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for auto repair shops',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of auto repair searches contain a local intent</strong>. Drivers need an immediate solution, usually on mobile. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens between the top 3 shops in Google\'s Local Pack.',
    constraints:
      '<strong class="text-secondary dark:text-accent">A shop below 4 stars loses the majority of its click potential</strong>. Drivers fear unnecessary repairs and inflated bills. Certifications like ASE (US), RAC/AA approved (UK), or RTA registered (UAE) are the trust signals both customers and AI engines look for.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Yelp, RepairPal, AAA</strong> (US), <strong class="text-secondary dark:text-accent">WhoCanFixMyCar</strong> (UK) position themselves as comparison platforms with online quotes. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent shop stays invisible against these aggregators and franchise chains (Midas, Firestone, Pep Boys).',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s local pack.',
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
        { keyword: 'auto repair near me', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'auto repair shop', volume: 90500, intent: 'mixte', difficulty: 'très élevée' },
        { keyword: 'car mechanic near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'auto mechanic near me', volume: 60500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'brake repair near me', volume: 27100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'transmission repair near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a car service cost', volume: 9900, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'car garage near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'MOT test near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car mechanic near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car service near me', volume: 27100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car repair garage', volume: 6600, intent: 'mixte', difficulty: 'moyenne' },
        { keyword: 'full car service cost', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'independent garage vs dealership', volume: 1300, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'car repair dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'auto repair dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car garage near me', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car mechanic dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'car AC repair dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'car service cost UAE', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'RTA vehicle testing centre', volume: 590, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "auto repair near me", "car garage near me", or "car repair dubai" represent drivers actively looking for a shop. The majority click on the top 3 results in Google\'s Local Pack, or follow the recommendation of an AI engine. If your shop does not appear there, those customers drive to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for auto repair shops',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of the automotive repair industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the shop\'s website architecture, mobile loading speed, and technical factors blocking indexation of service pages.',
        items: [
          'Page structure by service type (oil change, brakes, transmission, AC, diagnostics)',
          'Schema.org AutoRepair and AutomotiveBusiness markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of service pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the shop\'s informational universe (brands serviced, specialties, certifications)',
          'Measurement of legitimacy and citability against franchise chains',
          'Evaluation of content factual density (pricing, turnaround times, equipment)',
          'Competitive benchmark on automotive AI queries',
        ],
      },
      {
        title: 'Market study & automotive keyword research',
        subtitle: 'Mapping of search queries by service type, vehicle brand, and service area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Service + city combinations with strong potential ("brake repair Houston", "MOT test Manchester")',
          'Analysis of queries asked to AI engines about car maintenance',
          'Real search volumes by repair type, vehicle brand, and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with a user journey designed for drivers searching for a specific service and for Google crawl efficiency.',
        items: [
          'Service page > pricing page > quote request / contact page',
          'Primary keyword + 3-5 secondary keywords per service page',
          'Title tag, meta description, and heading optimization with service names and vehicle brands',
        ],
      },
      {
        title: 'Automotive content strategy',
        subtitle: 'Creation of educational content demonstrating the shop\'s expertise in automotive repair, written to be citable by LLMs.',
        items: [
          'Practical guides: "When to replace your timing belt?", "Signs your brakes need changing"',
          'FAQ with factual data (average costs, service intervals by vehicle brand)',
          'Self-sufficient factual sentences about the shop\'s specialties and certifications',
        ],
      },
      {
        title: 'Authority & automotive link building',
        subtitle: 'Authority development through qualified automotive directories and local partnerships.',
        items: [
          'Yelp, RepairPal, AAA, BBB (US); WhoCanFixMyCar, RAC (UK)',
          'Partnerships with driving schools, dealerships, and local insurance agents',
          'Registration with quality networks (ASE Blue Seal, AAA Approved in the US; RAC Approved in the UK)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the shop\'s Google Business Profile to capture "auto repair + city" and "mechanic near me" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Auto Repair Shop + secondary categories (oil change, tires, AC, diagnostics)',
          'Review management and collection strategy after each service visit',
          'Photos of the workshop, diagnostic equipment, and team',
          'Consistent NAP citations across automotive and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and quote requests generated.',
        items: [
          'Google positions by automotive keyword',
          'Organic traffic by service type and geographic area',
          'GEO Score: visibility in AI engines',
          'Quote requests, phone calls, and Maps directions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team can act on immediately to improve your shop\'s online visibility.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of the shop\'s website: service pages (oil change, brakes, transmission, diagnostics), mobile loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your shop in ChatGPT, Perplexity, and Gemini on target automotive queries. Benchmark against 3 to 5 local competitors and franchise chains. GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'AutoRepair, AutomotiveBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your shop\'s services. Includes vehicle brands serviced, certifications, and location data.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages, vehicle brand pages, maintenance guides, and FAQs. Direct integration on your CMS or via FTP, with SEO-optimized page templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from automotive directories (Yelp, RepairPal, AAA, WhoCanFixMyCar), auto blogs, and local press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by service type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a driver asks ChatGPT "which auto repair shop do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your shop does not appear in any cited source, it is invisible in this new customer acquisition channel.',
    llmBehavior:
      '<h4>Franchise chains as default response</h4>' +
      '<p>On "which auto repair shop do you recommend in Houston?", the LLM does not cite any independent shop. Midas, Firestone, Pep Boys, and Jiffy Lube appear systematically as fallback answers: the LLM lacks reliable local data on independent shops and defaults to nationally recognized chains it has seen across thousands of web pages.</p>' +
      '<h4>Informational queries: educational guide mode</h4>' +
      '<p>On "how to choose a trustworthy auto mechanic?" or "independent mechanic vs dealership for car service?", the LLM produces a structured guide with selection criteria and a pro/con comparison. It cites ASE certification (US), RAC/AA approved status (UK), and RTA registration (UAE) as trust signals. The Magnuson-Moss Warranty Act (US) and Consumer Rights Act 2015 (UK) are cited as legal references. No specific shop is named.</p>' +
      '<h4>Pricing queries: ranges without sources</h4>' +
      '<p>On "how much does a car service cost?", the LLM gives pricing ranges by service type (oil change USD 35-75, brake pads USD 150-300, MOT test GBP 40-55) and by market. No exact price from any specific shop, no link to a comparison tool. Shops publishing precise, up-to-date pricing on their website have the highest citability potential.</p>' +
      '<h4>ChatGPT Search changes the game</h4>' +
      '<p>When ChatGPT activates Search mode on a local query, it displays a Maps card with 3-5 shops, their Google ratings, and their hours. Shops with a complete Google Business Profile (category Auto Repair Shop, recent reviews, workshop photos) appear directly in the AI response. <strong>This is the only LLM pathway where an independent auto repair shop can be recommended by name</strong>, provided it is visible on Google Maps and automotive directories.</p>',
    structuredData:
      '<p>For auto repair shops, the recommended schema.org types are: <code>AutoRepair</code> (primary type), <code>AutomotiveBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>AutoRepair</code> markup allows Google and LLMs to precisely identify the services offered (oil change, brakes, transmission, AC), the location, and the customer reviews of the shop.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on your services and specialties), Legitimacy & Citability (external trust signals: reviews, directories, mentions), and Factual Density (richness of structured data and named entities: vehicle brands serviced, certifications, equipment).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for auto repair shops',
    items: [
      {
        question: 'How much does SEO cost for an auto repair shop?',
        answer:
          'The SEO budget for an auto repair shop depends on the size of the service area and the number of services to rank for. At Rankwell, SEO engagements for auto repair shops start from USD 1,500/month (or GBP 1,200/month) for a single-location shop targeting one city, and can reach USD 4,000-6,000/month for a multi-location operation or a shop competing in a major metropolitan area.',
      },
      {
        question: 'How long does it take to see results from automotive SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "transmission repair Austin" or "MOT test Croydon") rank faster than highly competitive generic terms. Rankwell provides a realistic timeline based on the initial competitive analysis and the current state of your Google Business Profile.',
      },
      {
        question: 'How can an independent shop compete with franchise chains in SEO?',
        answer:
          'Franchise chains like Midas, Firestone, or Pep Boys have large marketing budgets, but their local SEO is often generic: identical pages across locations, little location-specific content. An independent shop with a well-optimized website, authentic customer reviews, expert content on its specialties (European cars, hybrid vehicles, classic cars), and a complete Google Business Profile can outrank a franchise in the Local Pack. Rankwell leverages precisely these differentiation opportunities.',
      },
      {
        question: 'Does an auto repair shop need a blog to improve rankings?',
        answer:
          'A maintenance blog is a powerful lever for a shop when it answers real driver questions: "when to replace your timing belt", "signs your brakes need changing", "synthetic vs conventional oil". These articles demonstrate verifiable expertise and are easily citable by AI engines. Rankwell recommends 2-3 articles per month targeting informational queries related to the shop\'s core services.',
      },
      {
        question: 'How can an auto repair shop appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a shop must accumulate web authority signals: presence on automotive directories (Yelp, RepairPal, AAA for the US; WhoCanFixMyCar, RAC for the UK), numerous and recent Google reviews, a complete Google Business Profile with workshop photos, and rich factual content on its website (pricing, specialties, brands serviced, certifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an auto repair shop?',
        answer:
          'Local SEO targets "auto repair + city" and "mechanic near me" queries and relies on Google Business Profile, customer reviews, and NAP citations across automotive directories. National SEO targets generic queries ("best shop for timing belt replacement") and requires high-authority educational content. For the vast majority of auto repair shops, local SEO is the priority. Rankwell adapts the budget allocation between local and national based on the shop\'s growth strategy.',
      },
      {
        question: 'Are Yelp and auto repair platforms enough to be visible?',
        answer:
          'Platforms like Yelp, RepairPal, or WhoCanFixMyCar are useful for initial visibility, but they create dependency: the shop is just one profile among hundreds, competing primarily on price and review count. A well-optimized website allows the shop to control its image, highlight its specialties (ASE certified, European vehicle specialist, hybrid expertise), convert directly without commission, and build lasting authority. Rankwell helps auto repair shops build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your auto repair shop visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to the automotive repair industry.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Car Dealer', href: '/en/geo-seo-agency/sectors/car-dealer' },
        { label: 'SEO Body Shop', href: '/en/geo-seo-agency/sectors/body-shop' },
        { label: 'SEO Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
        { label: 'SEO Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
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
      { label: 'Car Dealer', href: '/en/geo-seo-agency/sectors/car-dealer' },
      { label: 'Body Shop', href: '/en/geo-seo-agency/sectors/body-shop' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
      { label: 'Heating Engineer', href: '/en/geo-seo-agency/sectors/heating-engineer' },
      { label: 'Mover', href: '/en/geo-seo-agency/sectors/mover' },
      { label: 'Locksmith', href: '/en/geo-seo-agency/sectors/locksmith' },
    ],
  },

  // Schema.org primary type
  schemaType: 'AutoRepair',
};

export default data;
