/**
 * DATA: Sector Page Florists (EN)
 * Route: /en/geo-seo-agency/sectors/florist
 *
 * Adapted for US / UK / UAE markets
 * US = "florist" / "flower shop", UK = "florist", UAE = "flower shop" / "flower delivery"
 * Keyword data: Ahrefs + industry sources (BloomNation, Floranext, Direct2Florist), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'florist',
    title: 'GEO & SEO Agency for Florists - Rankwell',
    description:
      'Rankwell helps florists and flower shops boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the floral industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Florists' },
    ],
    title: 'GEO & SEO for Florists: Google & AI Engine Visibility',
    subtitle:
      'Your flower shop must appear when a client searches for a florist in their city, on Google and in ChatGPT or Perplexity responses. Our experts design GEO & SEO strategies tailored to the seasonal and hyper-local nature of the floral trade.',
    ctaText: 'Request a GEO & SEO audit for your flower shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for florists',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">"Florist near me" generates over 1.5 million monthly searches in the US</strong>, with "flower delivery" adding 550,000. Nearly all are mobile with immediate purchase intent, making this a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the Local Pack captures most orders.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Extreme seasonality defines the floral industry</strong>: Valentine\'s Day, Mother\'s Day, and the holiday season concentrate most annual revenue. Each peak triggers high-intent search surges that must be prepared months in advance.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">1-800-Flowers, FTD, BloomNation</strong> (US), <strong class="text-secondary dark:text-accent">Interflora, Bloom & Wild</strong> (UK), <strong class="text-secondary dark:text-accent">Ferns N Petals</strong> (UAE) dominate transactional queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent florist stays invisible behind these networks.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from those of Google\'s Local Pack.',
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
        { keyword: 'florist near me', volume: 1500000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'flower delivery', volume: 550000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'flower shop near me', volume: 368000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'same day flower delivery', volume: 110000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'wedding florist near me', volume: 27100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'cheap flowers delivery', volume: 40500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'how much do wedding flowers cost', volume: 14800, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'florist near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'flower delivery', volume: 74000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'flower shop near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'same day flower delivery', volume: 22200, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'wedding florist', volume: 6600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'funeral flowers', volume: 12100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'flowers delivery London', volume: 5400, intent: 'locale', difficulty: 'élevée' },
      ],
      uae: [
        { keyword: 'flower delivery dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'florist dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'flower shop dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'same day flower delivery dubai', volume: 2900, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'wedding flowers dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'flower delivery Abu Dhabi', volume: 1600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'best florist dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
      ],
    },
    interpretation:
      'Every month, over 1.5 million searches for "florist near me" in the US alone, plus hundreds of thousands for "flower delivery" and "flower shop near me", represent clients ready to place an order. The majority click on the first 3 results of the Local Pack, or follow the recommendation of an AI engine. If your shop does not appear there, those orders go to a delivery network or a better-ranked competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for florists',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the seasonal peaks and hyper-local competition of the floral industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the flower shop\'s website: page architecture, image loading speed, and technical factors blocking indexation, with a focus on high-resolution arrangement galleries.',
        items: [
          'Page structure by product type (bouquet, arrangement, plant, event floral design)',
          'Schema.org Florist and Product markup',
          'Performance and Core Web Vitals (high-resolution image optimization)',
          'Crawl and indexation of seasonal pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the shop\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for floral services',
        ],
      },
      {
        title: 'Market study & floral keyword research',
        subtitle: 'Mapping of search queries by occasion, product type, and geographic area across US, UK, and UAE markets. Identification of low-competition seasonal gaps.',
        items: [
          'Occasion + city combinations (wedding florist Austin, funeral flowers Manchester)',
          'Seasonal volume analysis (Valentine\'s Day, Mother\'s Day, holiday season)',
          'Analysis of queries asked to AI engines about flowers',
          'Real search volumes by product category and by city',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the ordering journey: from browsing to checkout or in-store visit.',
        items: [
          'Collection page > arrangement page > order/delivery page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
          'Dedicated pages by occasion (wedding, sympathy, birthday, corporate events)',
        ],
      },
      {
        title: 'Floral content strategy',
        subtitle: 'Creation of seasonal and educational content demonstrating artisan expertise, written to be citable by LLMs.',
        items: [
          'Seasonal guides (flowers in season, bouquet care tips, flower meanings)',
          'FAQs answering Google People Also Ask on pricing and occasions',
          'Self-sufficient factual sentences with verifiable data',
          'Occasion-based content (wedding, sympathy, baby shower, corporate gifting)',
        ],
      },
      {
        title: 'Authority & floral link building',
        subtitle: 'Authority development through floral directories, wedding platforms, and local business partnerships.',
        items: [
          'BloomNation, Floranext, Teleflora, SAF directory (US)',
          'Direct2Florist, Interflora partner pages, BFA directory (UK)',
          'Partnerships with wedding planners, event coordinators, and funeral homes',
          'Local business directories and chamber of commerce listings',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the shop\'s Google Business Profile to capture "florist + city" and "florist near me" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Florist + secondary categories (flower delivery, event floral design)',
          'Arrangement photos updated weekly with seasonal compositions',
          'Client review management and post-order collection strategy',
          'Consistent NAP citations across floral directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by product category, and orders generated, with a focus on seasonal peaks.',
        items: [
          'Google positions by floral keyword',
          'Organic traffic by category (bouquets, plants, delivery)',
          'GEO Score: visibility in AI engines',
          'Orders and quote requests generated',
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
        description: 'Full diagnostic of your flower shop\'s website: page architecture by product type, image loading speed, Google indexation, and a prioritized list of corrective actions focused on arrangement galleries and delivery pages.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your shop in ChatGPT, Perplexity, and Gemini on your target floral queries. Benchmark against local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Florist, Product, FAQPage, and BreadcrumbList markup ready to integrate, with your delivery zones, services (wedding, sympathy, corporate), and opening hours. Delivered with a CMS integration guide (WordPress, Shopify, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of arrangement pages by occasion (wedding, sympathy, birthday), seasonal articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from floral directories (BloomNation, Direct2Florist, SAF), wedding blogs, and local press. Tracking of links obtained and Domain Rating progression of your shop.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by product page and local keyword, organic traffic by floral category, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your flower shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which florist do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your shop does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which florist do you recommend in London?": the LLM does not cite a specific florist by name. It provides 5 to 6 selection criteria (Google reviews, freshness of flowers, arrangement creativity, delivery reliability) and redirects to Google Maps. With Search mode active, <strong>ChatGPT displays a Maps card</strong> with the best-rated flower shops in the area.</p>' +
      '<h4>Comparison queries</h4>' +
      '<p>"Local florist vs 1-800-Flowers: what is the difference?": the LLM produces a structured comparison. Local florist: bespoke arrangements, market-fresh stems, personal service. 1-800-Flowers (or Interflora in the UK): nationwide delivery network, online ordering 24/7, standardized designs. The LLM notes that network orders are often assembled by a local partner florist.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does a bouquet of flowers cost?": the LLM gives detailed ranges by arrangement type (simple bouquet USD 25 to USD 50, event centerpiece USD 75 to USD 200, wedding bridal bouquet USD 150 to USD 400, or GBP 25 to GBP 250 in the UK). Sites providing precise, up-to-date pricing grids have the highest chance of being extracted as a source.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "florist near me same day delivery", <strong>ChatGPT activates Search mode with a Maps card</strong>. Florists with a complete Google Business Profile (recent arrangement photos, reviews above 4.2 stars, "delivery" listed as a service) appear first in the AI response.</p>',
    structuredData:
      '<p>For florists, the recommended schema.org types are: <code>Florist</code> (primary type), <code>Product</code> (for each arrangement), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Florist</code> markup allows Google and LLMs to precisely identify the location, delivery zones, services offered (wedding, sympathy, corporate), and client reviews of the shop.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your flower shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of floral content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for florists',
    items: [
      {
        question: 'How much does SEO cost for a flower shop?',
        answer:
          'The SEO budget for a florist depends on the geographic scope and the range of services offered (retail, delivery, weddings, corporate events). At Rankwell, SEO engagements for flower shops start from USD 1,200/month (or GBP 900/month) for a single location and one city, and can reach USD 3,500-5,000/month for a multi-location florist with an online store targeting competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from floral SEO?',
        answer:
          'Initial results typically appear between 3 and 5 months. Niche local queries (e.g., "wedding florist Austin" or "funeral flowers Manchester") are faster to rank for than nationally competitive terms like "flower delivery". Rankwell provides a realistic timeline synchronized with your seasonal peaks to ensure maximum visibility when it matters most.',
      },
      {
        question: 'How should a florist handle seasonality in SEO?',
        answer:
          'Valentine\'s Day, Mother\'s Day (second Sunday of May in the US, fourth Sunday of Lent in the UK), and the December holiday season are the three major peaks of the floral trade. In the UAE, occasions like Eid and National Day also drive surges. Seasonal pages must be prepared and indexed 2 to 3 months before each peak. Rankwell builds these seasonal spikes into the editorial calendar and optimizes dedicated pages well ahead of each event.',
      },
      {
        question: 'Does a flower shop need a blog to improve rankings?',
        answer:
          'A floral blog is a powerful lever when properly targeted. Articles should answer real client questions: flower meanings, bouquet care tips, seasonal flower availability, gift ideas by occasion. This educational content attracts informational traffic and demonstrates artisan expertise. Rankwell recommends 2 to 3 articles per month targeting long-tail seasonal queries.',
      },
      {
        question: 'How can a florist appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a florist must accumulate web authority signals: a complete Google Business Profile with recent arrangement photos, regular client reviews, mentions in local press or wedding blogs, and rich factual content on its website (pricing grids, delivery zones, specialties). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a florist?',
        answer:
          'Local SEO targets "florist + city" and "florist near me" queries and relies on Google Business Profile, client reviews, and local directory citations. National SEO targets queries like "flower delivery" and requires a structured e-commerce catalog with product pages. Rankwell adapts the strategy to the business model: neighborhood boutique, local delivery, or nationwide online store.',
      },
      {
        question: 'Are 1-800-Flowers, Interflora, and delivery networks enough to be visible?',
        answer:
          'Delivery networks like 1-800-Flowers (US), FTD, Interflora (UK), and Ferns N Petals (UAE) bring orders, but they create dependency: the florist is one fulfillment partner among thousands, with reduced margins and no control over branding. A well-optimized website allows the shop to receive direct orders, set its own prices, and build a loyal client base. Rankwell helps florists build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your flower shop visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
        { label: 'SEO Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
        { label: 'SEO Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
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
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/caterer' },
      { label: 'Hairdresser', href: '/en/geo-seo-agency/sectors/hairdresser' },
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Landscaper', href: '/en/geo-seo-agency/sectors/landscaper' },
      { label: 'Bar', href: '/en/geo-seo-agency/sectors/bar' },
      { label: 'Barber', href: '/en/geo-seo-agency/sectors/barber' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Florist',
};

export default data;
