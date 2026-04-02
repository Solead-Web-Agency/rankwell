/**
 * DATA: Sector Page Car Dealers (EN)
 * Route: /en/geo-seo-agency/sectors/car-dealer
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
    slug: 'car-dealer',
    title: 'GEO & SEO Agency for Car Dealers - Rankwell',
    description:
      'Rankwell helps car dealerships boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the automotive retail industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Car Dealers' },
    ],
    title: 'GEO & SEO for Car Dealers: Google & AI Engine Visibility',
    subtitle:
      'Your future buyers research online long before visiting a showroom. Our experts design GEO & SEO strategies tailored to the automotive retail sector, where listing portals and manufacturer sites dominate the search results.',
    ctaText: 'Request a GEO & SEO audit for your dealership',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for car dealers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of car buyers start their purchase journey online</strong>. Queries combine brand, model, and location ("Toyota dealer near me", "used cars London"). This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the sale is won or lost in the first three Google results.',
    constraints:
      '<strong class="text-secondary dark:text-accent">The average new vehicle transaction price exceeds USD 48,000 in the US and GBP 29,000 in the UK</strong>. This high-ticket purchase creates a long decision cycle where buyers consult multiple sources. Content must answer questions about pricing, financing, trade-ins, and delivery timelines at every step.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">AutoTrader, Cars.com, CarGurus</strong> (US), <strong class="text-secondary dark:text-accent">AutoTrader UK, Carwow</strong> (UK), <strong class="text-secondary dark:text-accent">Dubizzle, CarSwitch</strong> (UAE) capture the majority of high-intent automotive queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a dealership remains invisible against these aggregators.',
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
        { keyword: 'used cars for sale', volume: 673000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'car dealerships near me', volume: 368000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'used car dealers near me', volume: 165000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car dealer near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'used cars under 10000', volume: 60500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how to negotiate car price at dealership', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'used cars for sale near me', volume: 74000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'car dealers near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'used cars for sale', volume: 33100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'car dealership near me', volume: 22200, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'used cars under 5000', volume: 14800, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best used car dealers UK', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to buy a used car UK', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'used cars in Dubai', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'car dealer Dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'used cars for sale UAE', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'car dealership Abu Dhabi', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best car deals Dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'car finance UAE', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "car dealerships near me", "used cars for sale", or "car dealer Dubai" represent buyers actively looking for a vehicle. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your dealership does not appear there, those buyers drive to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for car dealerships',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of automotive retail across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the dealership website architecture, online inventory management, and technical factors blocking vehicle listing indexation.',
        items: [
          'Indexation of inventory pages (new, used, certified pre-owned)',
          'Schema.org AutoDealer and Vehicle markup',
          'Performance and Core Web Vitals on image-heavy pages',
          'Crawl of search filters and faceted navigation management',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the dealership\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the dealership\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density (pricing, availability, services)',
          'Competitive benchmark on AI automotive queries',
        ],
      },
      {
        title: 'Market study & automotive keyword research',
        subtitle: 'Mapping of search queries by brand, model, vehicle type, and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Brand + model + city combinations with low competition',
          'Purchase intent queries: new, used, CPO, leasing, financing',
          'Analysis of queries asked to AI engines about car buying',
          'Real search volumes by brand and vehicle segment',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the car-buying journey and Google crawl efficiency.',
        items: [
          'Brand page > model page > vehicle listing > contact/test-drive page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
          'Landing pages for seasonal promotions and special offers',
        ],
      },
      {
        title: 'Automotive content strategy',
        subtitle: 'Creation of educational content demonstrating the dealership\'s expertise, written to be citable by LLMs.',
        items: [
          'Buying guides (new vs used, leasing vs financing, EV vs hybrid)',
          'Self-sufficient factual sentences with verifiable data (pricing, fuel economy, range)',
          'Advice pages: trade-in value, financing options, warranty, maintenance',
        ],
      },
      {
        title: 'Authority & automotive link building',
        subtitle: 'Authority development through qualified automotive directories and specialized publications.',
        items: [
          'AutoTrader, Cars.com, CarGurus, Edmunds (US)',
          'AutoTrader UK, Carwow, Honest John (UK)',
          'Dubizzle, CarSwitch (UAE)',
          'Automotive press publications and manufacturer partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of Google Business Profile for each dealership location to capture local "dealer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Car Dealer + secondary categories by brand represented',
          'Client review management and post-delivery collection strategy',
          'Showroom photos, lot images, workshop pictures, hours, and attributes',
          'Consistent NAP citations across automotive directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by brand and model, and lead generation metrics.',
        items: [
          'Google positions by keyword (brand + city, model + used)',
          'Organic traffic by page type (new inventory, used inventory, services)',
          'GEO Score: visibility in AI engines',
          'Contact requests, test-drive bookings, and financing inquiries',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, web developers, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your dealership website: vehicle inventory pages, brand and model pages, loading speed, Google indexation, and heading structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your dealership in ChatGPT, Perplexity, and Gemini on your target automotive queries. Benchmark against 3 to 5 competing dealerships and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'AutoDealer, Vehicle, Offer, FAQPage, and BreadcrumbList markup ready to integrate, adapted to the brands you represent. Delivered with a CMS integration guide (WordPress, custom DMS, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of brand and model pages, buying guides (new vs used, leasing vs financing, EV range comparison), and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from automotive portals (AutoTrader, Cars.com, CarGurus, Edmunds), automotive blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by brand and geographic zone, organic traffic by page type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your dealership in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which car dealer do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your dealership does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which car dealer do you recommend in Houston?": the LLM does not cite a specific dealership by name. It provides a list of selection criteria (proximity, brand selection, customer reviews, after-sales service quality) and redirects to manufacturer locator tools and Google Maps. The dealership that accumulates online reputation signals (reviews, local press mentions, factual content) has the best chance of being named in future responses.</p><h4>Informational queries</h4><p>"How to choose a car dealer?" or "dealer vs private sale: what is the difference?": the LLM generates a structured guide with 6 to 8 criteria (price transparency, warranty, financing terms, trade-in policies) without citing an external source. Dealerships publishing this type of factual content on their website can become the cited source.</p><h4>Pricing queries</h4><p>"How much does a used car cost in the UK?": the LLM gives pricing ranges by segment (compact GBP 8,000-15,000, SUV GBP 18,000-35,000, luxury GBP 30,000-70,000) and details negotiation levers (trade-in, manufacturer rebates, financing promotions). Sites providing precise, up-to-date pricing data by model have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "car dealership near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Dealerships with a complete Google Business Profile (category Car Dealer, recent reviews, showroom photos, hours) appear directly in the AI response.</p>',
    structuredData:
      '<p>For car dealerships, the recommended schema.org types are: <code>AutoDealer</code> (primary type), <code>Vehicle</code> (for each vehicle listing), <code>Offer</code> (for pricing and promotions), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>AutoDealer</code> markup allows Google and LLMs to precisely identify the brands represented, location, and services offered by the dealership.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your dealership\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on brands, models, and services), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for car dealers',
    items: [
      {
        question: 'How much does SEO cost for a car dealership?',
        answer:
          'The SEO budget for a car dealership depends on the number of brands represented, the size of the online inventory, and the geographic scope targeted. At Rankwell, SEO engagements for dealerships start from USD 2,000/month (or GBP 1,600/month) for a single-brand location, and can reach USD 6,000-10,000/month for a multi-brand dealer group covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from automotive SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "Honda dealer Phoenix" or "used cars Southampton") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis and the existing site authority.',
      },
      {
        question: 'How do you handle vehicle listings that change constantly?',
        answer:
          'Inventory turnover is the primary SEO challenge for car dealers. Rankwell implements an architecture that separates permanent model pages (indexed and ranked) from individual vehicle listings (dynamic stock). The model pages capture SEO traffic and link to available inventory. This structure avoids mass 404 errors and preserves the authority built over time.',
      },
      {
        question: 'Does a car dealership need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever when well targeted. Articles should answer real buyer questions (buying guides, financing comparisons, EV vs hybrid analysis), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries related to car buying.',
      },
      {
        question: 'How can a car dealer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a dealership must accumulate web authority signals: presence on automotive portals (AutoTrader, Cars.com, CarGurus), mentions in local press, an optimized Google Business Profile with recent reviews, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a car dealer?',
        answer:
          'Local SEO targets "dealer + brand + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best SUV 2026", "electric car comparison") and requires high-authority educational content. Rankwell combines both approaches based on the dealership strategy: a multi-location group benefits from local SEO per location and national SEO for the group brand.',
      },
      {
        question: 'Are AutoTrader, Cars.com, and listing portals enough to sell vehicles online?',
        answer:
          'Listing portals like AutoTrader and Cars.com are useful for initial visibility, but they create costly dependency: the dealer pays subscription fees and remains one profile among thousands. A well-optimized website allows the dealership to control its brand image, convert directly without commission, and build lasting authority that platforms cannot revoke. Rankwell helps car dealers build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your dealership visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
        { label: 'SEO Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
        { label: 'SEO Bank', href: '/en/geo-seo-agency/sectors/bank' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'SEO E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Prestashop', href: '/en/geo-seo-agency/cms/prestashop' },
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
      { label: 'Auto Repair', href: '/en/geo-seo-agency/sectors/auto-repair' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/bank' },
      { label: 'Property Inspector', href: '/en/geo-seo-agency/sectors/property-inspector' },
      { label: 'Property Manager', href: '/en/geo-seo-agency/sectors/property-manager' },
      { label: 'Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
    ],
  },

  // Schema.org primary type
  schemaType: 'AutoDealer',
};

export default data;
