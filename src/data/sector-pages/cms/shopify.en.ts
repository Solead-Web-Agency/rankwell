/**
 * DATA: CMS Shopify Page (EN)
 * Route: /en/geo-seo-agency/cms/shopify
 *
 * English version adapted for the international Shopify e-commerce market.
 * Content based on LLM auto-test (March 2026) and global Shopify ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'shopify',
    title: 'Shopify SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Shopify stores. URL structure, duplicate content, Product schema, app optimization: a complete methodology built for Shopify.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Shopify' },
    ],
    title: 'Shopify SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Fixed URL patterns in /collections/ and /products/, duplicate content from collection assignments, missing Product schema by default: Shopify SEO requires platform-specific expertise that generic agencies miss. Our experts combine technical SEO and GEO to rank your store on Google and get your products cited by AI engines.',
    ctaText: 'Request a Shopify SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Shopify (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Shopify',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">5.6 million active stores and 30% US e-commerce market share</strong>. Built-in CDN (309 ms load time), automatic SSL, XML sitemap, canonical tags, and metafields for Product markup provide a solid foundation for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">A product in 3 collections generates 4 accessible URLs</strong>, creating structural duplication. Rigid URL prefixes (/products/, /collections/) prevent subcategories, the native blog lacks hierarchical categories, and Liquid restricts server-side optimizations.',
    geoAngle:
      'According to Rankwell, Shopify stores that leverage metafields to inject enriched Product markup (price, reviews, GTIN) and structure product pages with self-contained factual passages become preferred sources for AI product recommendations.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, e-commerce SEO in 2026 integrates an unprecedented challenge: LLMs are becoming a full-fledged product recommendation channel. ChatGPT and Perplexity compare products, recommend brands, and cite product pages in their responses.',
    glossarySlug: 'seo-ecommerce',
    glossaryLabel: 'Learn more about e-commerce SEO',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Shopify SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Shopify stores. Each one degrades Google rankings and reduces the ability of your product pages to be cited by AI engines. A technical audit identifies which ones apply to your store and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Duplicate content: 1 product in 3 collections = 4 URLs',
        'Crawl budget dilution, cannibalization between product URLs',
        'Canonical tag audit, consolidation via 301 redirects, removal of redundant collections',
      ],
      [
        'Rigid URL structure (/products/, /collections/, /pages/)',
        'Flat architecture, lost hierarchical signal for Google',
        'URL handle optimization, collection organization with faceted navigation, contextual internal linking',
      ],
      [
        'No enriched Product schema by default',
        'No product rich snippets (price, reviews, stock), invisible to LLMs',
        'JSON-LD Product injection via metafields or dedicated app (JSON-LD for SEO, Tiny SEO), with price, GTIN, aggregated reviews',
      ],
      [
        'Tag pages indexed automatically',
        'Hundreds of thin content pages in Google index',
        'Noindex on tag pages via Liquid theme modification, creation of real collections for high-volume search tags',
      ],
      [
        'Limited native blog (no categories, no topical clusters)',
        'Difficulty building topical authority through content',
        'Articles organized by strategic tags, internal linking between blog posts and product pages, integrated product FAQ',
      ],
      [
        'Auto-generated sitemap with no control',
        'Inclusion of unnecessary pages (legal notices, policy pages), no exclusion option',
        'Filtering via customized robots.txt (theme editor), supplemented by submitting an additional sitemap in GSC',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Shopify',
    subtitle: 'A structured 8-step approach to Shopify SEO, designed around the platform-specific challenges of the world\'s leading hosted e-commerce platform.',
    steps: [
      {
        title: 'Shopify technical audit',
        subtitle: 'Full analysis of your Shopify store: theme, installed apps, URL configuration, canonical tags, and Core Web Vitals.',
        items: [
          'Inventory of active apps and detection of those injecting blocking JavaScript',
          'Core Web Vitals measurement (LCP, FID, CLS) on product pages and collection pages',
          'Duplicate content analysis: mapping product URLs by collection',
          'Verification of robots.txt, sitemap, and SSL configuration',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Shopify store visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 product and brand queries on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors in your product category',
          'Identification of product pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'App cleanup and rationalization',
        subtitle: 'Removal of redundant or unused apps that slow down your store and degrade page load times.',
        items: [
          'Uninstallation of inactive apps (including leftover code in the theme)',
          'Replacement of heavy apps with native or lightweight solutions',
          'Cleanup of Liquid code injected by uninstalled apps',
          'Verification that third-party scripts do not add accidental noindex directives',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement by leveraging Shopify\'s native CDN and optimizing theme assets.',
        items: [
          'Image compression to WebP with Shopify native lazy loading',
          'Theme CSS/JS reduction (removal of unused code)',
          'Exploitation of Shopify CDN and preconnect on third-party resources',
          'Deferred loading of non-critical app scripts (reviews, chat, popups)',
        ],
      },
      {
        title: 'Advanced Shopify SEO configuration',
        subtitle: 'Full setup of meta tags, schema.org, and redirects to compensate for the native limitations of the platform.',
        items: [
          'URL handle optimization for every product, collection, and page',
          'Enriched JSON-LD Product injection via metafields (price, GTIN, reviews, availability)',
          'robots.txt customization via the Liquid theme editor',
          'Complementary markup: Organization, WebSite, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Creation of structured content for Google rankings and product citability by AI engines.',
        items: [
          'Enriched product pages with specifications, comparisons, and integrated FAQ',
          'Buying guides and blog articles linked to collections via internal linking',
          'Optimized collection descriptions with unique content (no generic text)',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from specialized media, product comparators, and influencers in your niche.',
        items: [
          'Backlinks from product comparators, niche blogs, and e-commerce media',
          'Listings on marketplaces and industry directories',
          'Brand mentions in buying guides and comparison articles',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and e-commerce KPIs.',
        items: [
          'Google rankings by product page, collection, and blog article',
          'Organic traffic segmented by page type (product, collection, blog)',
          'GEO Score: visibility evolution across AI engines',
          'Core Web Vitals tracking and Shopify technical health (apps, theme)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your e-commerce team, your Shopify developer, or your management.',
    items: [
      {
        id: 1,
        title: 'Shopify technical audit report',
        description: 'Full diagnostic of your Shopify store: app inventory (active, residual code, conflicts), duplicate content audit by collection, Core Web Vitals by page type, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your store and products in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Shopify schema.org kit',
        description: 'Enriched Product markup (price, GTIN, reviews, availability) injected via metafields or a dedicated app, plus Organization, WebSite, BreadcrumbList, and FAQPage types. Liquid integration guide with code examples.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of product pages, collection descriptions, buying guides, and blog articles optimized for SEO and GEO. Direct integration into the Shopify admin or via the Liquid theme.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from product comparators, e-commerce blogs, and specialized media in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product page and collection, segmented organic traffic, GEO Score evolution, Shopify technical health (apps, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Shopify store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "what is the best product for..." or "which online store should I choose for...", the LLM compiles web sources to formulate its answer. If your product pages lack structured factual data, your store is invisible in this new recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Shopify store?", the LLM does not name any specific agency. It provides a list of 5 to 7 selection criteria (proven Shopify experience, e-commerce references with measurable results, mastery of Shopify-specific constraints, documented methodology) and points toward directories like Clutch and Semrush Agency Partners. No agency holds a reference position in the English-speaking market. The agency that publishes a structured methodology with measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Shopify store", the LLM generates a guide covering 8 to 12 points including URL handle optimization, meta descriptions, image compression, blogging for informational traffic, schema.org Product via metafields or apps, and sitemap submission. It notes that Shopify handles approximately 80% of technical SEO natively. The preferred sources are the official Shopify blog, Shopify Help Center, Neil Patel, OptinMonster, and Charle Agency.</p><h4>CMS comparison queries</h4><p>On "Shopify vs WooCommerce for SEO", the LLM produces a comparison table with 6 to 9 criteria. Shopify is presented as better out of the box (CDN, 309 ms load time, SSL) but more limited (fixed URL patterns, no subcategories). WooCommerce is presented as more flexible with full HTML control and advanced SEO plugins. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Problem queries</h4><p>On "common Shopify SEO problems", the LLM provides a list of 7 to 10 platform-specific issues: duplicate content from collections, rigid URL structure, indexed tag pages, missing Product schema, limited blog, auto-generated sitemap. Content structured as problem-solution tables or numbered lists with specific fixes has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a Shopify store, the recommended schema.org types are: <code>Product</code> (primary type, enriched via metafields with price, GTIN, reviews, availability), <code>Organization</code> (brand identity), <code>WebSite</code> (with SearchAction for the search bar), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (product FAQ or general FAQ), <code>CollectionPage</code> (collection pages). Enriched Product markup is the most critical: it enables Google to display product rich snippets (price, stars, stock) and allows LLMs to extract structured data for their purchase recommendations.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Shopify store by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product content, buying guides, blog), Legitimacy and Citability (customer reviews, mentions on comparators, e-commerce backlinks), and Factual Density (richness of Product markup, structured data, and measurable specifications in product pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Shopify SEO',
    items: [
      {
        question: 'How much does Shopify SEO cost?',
        answer:
          'The SEO budget for a Shopify store depends on the number of products, competition level, and catalog complexity. At Rankwell, Shopify SEO engagements start from $2,000/month for a store with fewer than 200 products, and range from $4,000 to $8,000/month for large catalogs or Shopify Plus stores with international requirements. This budget covers the technical audit, product page optimization, schema.org markup, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Shopify?',
        answer:
          'Technical fixes (duplicate content, canonical tags, deindexing tag pages) produce measurable effects within 2 to 4 weeks. Ranking improvements on competitive keywords (product names, categories) require 4 to 8 months of sustained work. The advantage of Shopify is that native performance (CDN, SSL, mobile-first) eliminates speed issues from the start. Rankwell provides a forecast timeline based on the initial audit of your store.',
      },
      {
        question: 'How do I fix duplicate content created by Shopify collections?',
        answer:
          'Shopify generates a collection URL for each product in addition to the canonical /products/ URL. For example, a t-shirt present in 3 collections produces 4 distinct URLs. The solution involves verifying canonical tags (Shopify handles them automatically, but some themes override them), removing redundant collections, and setting up 301 redirects for merged collections. Rankwell audits every product URL to detect cannibalization cases.',
      },
      {
        question: 'How do I improve the speed of my Shopify store?',
        answer:
          'Shopify offers a built-in CDN with an average load time of 309 ms, but third-party apps degrade this performance. Each app installs JavaScript that runs on every page, even after uninstallation if the Liquid code is not cleaned up. Rankwell starts with an app audit: uninstalling unused apps, cleaning residual code from the theme, compressing images to WebP, and deferring non-critical scripts.',
      },
      {
        question: 'How can I get my Shopify store cited by ChatGPT and Perplexity?',
        answer:
          'AI engines cite stores whose product pages contain verifiable factual data: technical specifications, comparisons, certifications, aggregated customer reviews. On Shopify, this requires enriching Product metafields (GTIN, materials, dimensions), injecting complete JSON-LD, and creating structured buying guides. The Rankwell GEO Score measures these three dimensions and identifies the product pages to optimize first.',
      },
      {
        question: 'Is Shopify a good choice for e-commerce SEO in 2026?',
        answer:
          'Shopify is an excellent choice for merchants who want a reliable technical foundation without managing hosting, security, or updates. Its native performance (CDN, 309 ms, SSL) outperforms most unoptimized WooCommerce or PrestaShop installations. However, stores that need complex URL architecture (subcategories, advanced facets) or full server control may prefer WooCommerce or Magento. Rankwell adapts its SEO and GEO methodology to the strengths and limitations of each platform.',
      },
      {
        question: 'Why choose Rankwell for Shopify SEO?',
        answer:
          'Rankwell combines Shopify technical SEO expertise (app auditing, collection duplicate content management, Product schema injection via metafields, Liquid optimization) with the GEO dimension that specialized Shopify agencies have not yet integrated. Our 8-step methodology covers the challenges specific to Shopify: fixed URL patterns, indexed tag pages, auto-generated sitemap, limited blog. The proprietary GEO Score measures your product visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Shopify store?',
    description:
      'Request a free GEO & SEO audit of your Shopify store. Our SEO & GEO consultants analyze your catalog, collections, Product markup, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for Fashion', href: '/en/geo-seo-agency/sector/mode' },
        { label: 'SEO for Cosmetics', href: '/en/geo-seo-agency/sector/cosmetique' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'International SEO', href: '/en/geo-seo-agency/project/international' },
      ],
      cms: [
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
        { label: 'Magento SEO', href: '/en/geo-seo-agency/cms/magento' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'BigCommerce', href: '/en/geo-seo-agency/cms/bigcommerce' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
    ],
  },
};

export default data;
