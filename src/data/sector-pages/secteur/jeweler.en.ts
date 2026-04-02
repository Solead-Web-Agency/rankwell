/**
 * DATA: Sector Page Jewelers (EN)
 * Route: /en/geo-seo-agency/sectors/bijoutier
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'jeweler',
    title: 'GEO & SEO Agency for Jewelers - Rankwell',
    description:
      'Rankwell helps jewelers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the jewelry industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Jewelers' },
    ],
    title: 'GEO & SEO for Jewelers: Google & AI Engine Visibility',
    subtitle:
      'Your jewelry store needs to appear where buyers search: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to the constraints of the jewelry industry.',
    ctaText: 'Request a GEO & SEO audit for your jewelry store',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for jewelers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 60% of jewelry searches include a city or "near me"</strong>. Whether in New York, London, or Dubai, this is a local SEO market where the sale starts in Google\'s Local Pack or in an AI engine response.',
    constraints:
      'Jewelry falls under strict consumer protection rules: <strong class="text-secondary dark:text-accent">FTC Jewelry Guides</strong> (US), <strong class="text-secondary dark:text-accent">Hallmarking Act</strong> (UK), <strong class="text-secondary dark:text-accent">DMCC</strong> (UAE). Content must reflect verifiable expertise on precious metals and gemstone certifications (GIA, Kimberley Process). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must integrate these compliance signals into every page.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Blue Nile, James Allen, Brilliant Earth</strong> (US), <strong class="text-secondary dark:text-accent">Vashi, Hatton Garden directories</strong> (UK), <strong class="text-secondary dark:text-accent">Gold Souk platforms, Damas</strong> (UAE) dominate high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent jeweler stays invisible.',
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
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'jewelry store near me', volume: 368000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'custom engagement rings', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'jeweler near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'custom jewelry', volume: 12100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'jewelry repair near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how to choose an engagement ring', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'jewellers near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'bespoke engagement rings', volume: 5400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'jewellery repair near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'gold jewellery uk', volume: 3600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'hatton garden jewellers', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bespoke jewellery uk', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to buy a diamond ring uk', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'gold jewellery dubai', volume: 9900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'jewelry store dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'gold souk dubai', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'custom jewelry dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'diamond ring dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'engagement ring dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "jewelry store near me", "jewellers near me", or "gold jewellery dubai" represent potential buyers actively looking for a trusted jeweler. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your store does not appear there, those clients buy from a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for jewelers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the specific needs of the jewelry industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of product pages and collection pages.',
        items: [
          'Page structure by jewelry type (rings, necklaces, bracelets, watches)',
          'Schema.org JewelryStore and Product markup',
          'Performance and Core Web Vitals (high-resolution images, lazy loading)',
          'Crawl and indexation of product pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the jewelry store\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the store\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density (materials, certifications, techniques)',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & jewelry keyword research',
        subtitle: 'Mapping of search queries by jewelry type, occasion, and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Jewelry type + city combinations with low competition',
          'Occasion-based queries (engagement ring, wedding band, anniversary gift)',
          'Analysis of queries asked to AI engines about jewelry',
          'Real search volumes by product category and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the jewelry buyer journey: from discovery to in-store appointment.',
        items: [
          'Collection page > product page > buying guide > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with jewelry vocabulary',
        ],
      },
      {
        title: 'Jewelry content strategy',
        subtitle: 'Creation of educational content demonstrating the jeweler\'s expertise, written to be citable by LLMs.',
        items: [
          'Buying guides (how to choose a diamond, understanding hallmarks and carats)',
          'Material and technique pages (18k gold, platinum, stone setting, engraving)',
          'Self-sufficient factual sentences with verifiable data and certifications',
        ],
      },
      {
        title: 'Authority & jewelry link building',
        subtitle: 'Authority development through specialized directories and luxury and craft publications.',
        items: [
          'JCK, Rapaport, National Jeweler (US)',
          'The Goldsmiths\' Company, Assay Offices (UK)',
          'DMCC, Dubai Gold & Jewellery Group (UAE)',
          'Partnerships with wedding and lifestyle publications',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the store\'s Google Business Profile to capture local "jeweler + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Jewelry Store + secondary categories (repair, custom design)',
          'Client review management and collection strategy after each sale',
          'Photos of the workshop, display cases, creations, and behind-the-scenes craftsmanship',
          'Consistent NAP citations across jewelry directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by jewelry category, and appointment requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by product category',
          'GEO Score: visibility in AI engines',
          'Appointment requests and quote inquiries',
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
        description: 'Full diagnostic of your jewelry store\'s website: page architecture by collection and product type, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your jewelry store in ChatGPT, Perplexity, and Gemini on your target jewelry queries. Benchmark against 3 to 5 competing stores and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'JewelryStore, Product, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your materials (18k gold, platinum 950), certifications (GIA, Kimberley), and services. Delivered with a CMS integration guide (Shopify, WordPress, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of collection pages, buying guides (engagement rings, diamond selection, hallmarks), jewelry care articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from jewelry trade directories (JCK, National Jeweler, The Goldsmiths\' Company), luxury and lifestyle blogs, and wedding publications. Tracking of links obtained and Domain Rating progression of your store.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by product category page and local keyword, organic traffic by jewelry type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your jewelry store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which jeweler do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your store does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which jeweler do you recommend in New York for an engagement ring?": the LLM does not cite a specific independent store. It provides a list of selection criteria (GIA certification, custom design capability, client reviews, hallmarking compliance) and redirects to directories or well-known districts like the Diamond District or Hatton Garden.</p><h4>Informational queries</h4><p>"How to choose a diamond?" or "what is 18k gold?": the LLM generates a structured guide with 5 to 7 criteria (the 4Cs, metal purity, certifications), without citing any specific jeweler. The store that publishes this type of expert content on its website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does an engagement ring cost?": the LLM gives detailed pricing ranges (USD 3,000 to USD 10,000 for a solitaire in the US, GBP 2,000 to GBP 8,000 in the UK). Sites providing precise, up-to-date pricing data with material breakdowns have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "jeweler near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Jewelry stores with a complete Google Business Profile (category Jewelry Store, recent reviews, photos of the workshop and creations) appear directly in the AI response.</p>',
    structuredData:
      '<p>For jewelry stores, the recommended schema.org types are: <code>JewelryStore</code> (primary type), <code>Product</code> (jewelry items), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>JewelryStore</code> markup allows Google and LLMs to precisely identify the type of business, location, opening hours, and client reviews. The <code>Product</code> markup on each jewelry item enriches Google Shopping results and facilitates extraction by AI engines.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your jewelry store\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content about materials, techniques, and collections), Legitimacy & Citability (external trust signals: reviews, press mentions, certifications), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for jewelers',
    items: [
      {
        question: 'How much does SEO cost for a jewelry store?',
        answer:
          'The SEO budget for a jewelry store depends on the number of product categories, the competitive landscape, and whether you sell in-store, online, or both. At Rankwell, SEO engagements for jewelers start from USD 1,800/month (or GBP 1,400/month) for a single-location boutique targeting one city, and can reach USD 5,000-7,000/month for a multi-collection store competing against national chains and marketplaces.',
      },
      {
        question: 'How long does it take to see results from jewelry SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "bespoke jeweller Brighton" or "custom engagement ring Austin") are faster to rank for than nationally competitive terms like "jewelry store near me". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'What regulations impact jewelry store SEO?',
        answer:
          'In the US, the FTC Jewelry Guides mandate accurate descriptions of precious metals (e.g., 14k vs 18k gold) and gemstone treatments. In the UK, the Hallmarking Act requires assay office stamps on gold, silver, and platinum. In the UAE, the DMCC sets standards for gold purity and diamond trade. These compliance details are powerful E-E-A-T signals: Rankwell integrates them into content strategy to strengthen credibility with both Google and AI engines.',
      },
      {
        question: 'Does a jewelry store need a blog to improve rankings?',
        answer:
          'A blog is a powerful lever for a jewelry store when it targets real buyer questions: how to choose a diamond (the 4Cs), understanding gold purity and hallmarks, differences between lab-grown and natural diamonds, caring for fine jewelry. These educational articles position the jeweler as an expert and are highly citable by AI engines. Rankwell recommends 2 to 4 articles per month targeting long-tail informational queries with strong purchase intent.',
      },
      {
        question: 'How can a jeweler appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a jewelry store must accumulate web authority signals: presence on trade directories (JCK, National Jeweler, The Goldsmiths\' Company), mentions in luxury and wedding press, a complete Google Business Profile with photos and reviews, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and e-commerce SEO for a jeweler?',
        answer:
          'Local SEO targets "jewelry store + city" or "jeweler near me" queries and relies on Google Business Profile, client reviews, and local citations. E-commerce SEO targets product queries ("diamond engagement ring", "18k gold necklace") and requires optimized product pages with structured data. Rankwell combines both approaches depending on whether the jeweler sells only in-store, only online, or through both channels.',
      },
      {
        question: 'Are Blue Nile and online marketplaces enough to sell jewelry?',
        answer:
          'Online marketplaces like Blue Nile, Etsy, and Amazon provide initial exposure, but they create dependency: the jeweler is just one listing among thousands. A well-optimized website allows the store to control its brand image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps jewelers build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your jewelry store visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Florist', href: '/en/geo-seo-agency/sectors/fleuriste' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/coiffeur' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'SEO E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      ],
      cms: [
        { label: 'SEO Shopify', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
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
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/fleuriste' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/coiffeur' },
      { label: 'Barber', href: '/en/geo-seo-agency/sectors/barbier' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/imprimeur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'JewelryStore',
};

export default data;
