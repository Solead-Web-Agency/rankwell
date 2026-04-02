/**
 * DATA: CMS WooCommerce Page (EN)
 * Route: /en/geo-seo-agency/cms/woocommerce
 *
 * English version adapted for the international WooCommerce market.
 * Content based on LLM auto-test (March 2026) and global WooCommerce ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'woocommerce',
    title: 'WooCommerce SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for WooCommerce stores. Product pages, catalog performance, schema Product, variants: a complete methodology built for WooCommerce.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'WooCommerce' },
    ],
    title: 'WooCommerce SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Product variants generating duplicate content, wp_postmeta database slowing down beyond 5,000 SKUs, manufacturer descriptions copied across stores: WooCommerce SEO demands dual WordPress and e-commerce expertise. Our experts combine technical SEO and GEO to rank your product pages on Google and get your catalog cited by AI engines.',
    ctaText: 'Request a WooCommerce SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on WooCommerce (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on WooCommerce',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">WooCommerce powers roughly 33% of all online stores worldwide</strong>, over 4 million active sites. Built on WordPress, it offers full HTML control, mature SEO plugins (Yoast WooCommerce addon, RankMath with automatic Product schema), and complete access to <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> markup.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">The wp_postmeta table exceeds 4 to 5 million rows on catalogs with 10,000+ products</strong>, degrading Core Web Vitals. Product variants dilute crawl budget, faceted filters generate thousands of indexable pages, and manufacturer descriptions produce duplicate content at scale.',
    geoAngle:
      'According to Rankwell, WooCommerce combines Product schema (price, reviews) with WordPress editorial flexibility, creating a unique AI citability lever. But this remains theoretical without original descriptions, structured FAQ sections, and verifiable E-E-A-T signals.',
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
    title: 'Common WooCommerce SEO problems and solutions',
    interpretation:
      'These issues affect the majority of WooCommerce stores once the catalog exceeds a few hundred products. Each one degrades Google rankings and reduces the ability of AI engines to extract your product pages as reliable sources. A targeted technical audit identifies which ones apply to your store and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Database slowdown (wp_postmeta > 4M rows)',
        'LCP > 4s on category pages, mobile cart abandonment',
        'Cleanup of expired transients, SQL indexes on critical columns (price, stock), migration to HPOS (High-Performance Order Storage)',
      ],
      [
        'Duplicate content from product variants',
        'Crawl budget dilution, cannibalization between variants and parent listing',
        'Canonical to parent product, noindex on individual variants, consolidation of attributes into a single Product schema',
      ],
      [
        'Non-optimized URLs (/product-category/, /product/)',
        'Long URLs, lost semantic signal, confusing hierarchy',
        'Removal of /product/ and /product-category/ bases via WooCommerce settings, 301 redirects on legacy URLs',
      ],
      [
        'Indexable faceted filters (size, color, price)',
        'Thousands of near-identical pages indexed, crawl budget explosion',
        'Noindex + nofollow on filtered URLs, canonical to parent category, configuration via Yoast or RankMath',
      ],
      [
        'Manufacturer-copied product descriptions',
        'Cross-site duplicate content, zero competitive advantage in SEO or AI citability',
        'Product description rewriting with added value (benefits, use cases, original technical data), category-level FAQ sections',
      ],
      [
        'Missing or incomplete Product schema',
        'No product rich snippets (price, reviews, stock), invisible to LLMs',
        'Product schema configuration via RankMath (free) or Yoast WooCommerce SEO addon, adding offers, aggregateRating, and availability fields',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for WooCommerce',
    subtitle: 'A structured 8-step approach to WooCommerce SEO, designed around the platform-specific challenges of the world\'s most popular open-source e-commerce solution.',
    steps: [
      {
        title: 'WooCommerce technical audit',
        subtitle: 'Full analysis of your WooCommerce installation: active plugins, theme, PHP version, database health, and Core Web Vitals on product and category pages.',
        items: [
          'Plugin inventory (WooCommerce core, SEO addons, payment and shipping extensions)',
          'Core Web Vitals measurement on product pages, categories, and cart (mobile and desktop)',
          'Database analysis: wp_postmeta table size, expired transients, orphaned sessions',
          'Crawl budget audit: indexed pages vs wasted pages (variants, filters, pagination)',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your WooCommerce store visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your products and categories on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors (same products, same market)',
          'Identification of product pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'WooCommerce cleanup and rationalization',
        subtitle: 'Removal of redundant plugins, database cleanup, and elimination of parasitic pages that bloat the catalog.',
        items: [
          'Reduction of active plugins (target: retain only extensions essential to store operations)',
          'Database purge: transients, revisions, expired sessions, orphaned meta entries',
          'Noindex or removal of standalone variant pages, internal search results, and filter pages',
          'Activation of HPOS (High-Performance Order Storage) to offload wp_postmeta',
        ],
      },
      {
        title: 'Catalog performance optimization',
        subtitle: 'Page speed improvement for product and category pages through caching, compression, and SQL query optimization.',
        items: [
          'WP Rocket or LiteSpeed Cache configuration with WooCommerce-specific rules (cart and checkout exclusions)',
          'Product image conversion to WebP with lazy loading and responsive sizing',
          'CDN setup (Cloudflare, BunnyCDN) with category page caching',
          'SQL index additions on critical columns (price, stock, categories) to accelerate catalog queries',
        ],
      },
      {
        title: 'Advanced e-commerce SEO configuration',
        subtitle: 'Full SEO plugin setup to maximize visibility for product pages, categories, and brand pages.',
        items: [
          'Clean product permalinks (removal of /product/ and /product-category/), e-commerce breadcrumbs enabled',
          'Segmented XML sitemap: active products, main categories, editorial pages (variants and filters excluded)',
          'Complete Product schema: offers, aggregateRating, availability, brand via RankMath or Yoast WooCommerce SEO',
          'Canonical tags on variants, noindex on faceted filters and internal search result pages',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Creation of structured content around the catalog to capture informational queries and strengthen AI citability.',
        items: [
          'Product description rewriting with benefits, use cases, and original technical data',
          'Buying guides and comparisons by category, linked to product pages via internal linking',
          'Thematic FAQ sections per category inspired by Google PAA and LLM-asked questions',
          'Self-contained factual passages in each guide (prices, specifications, comparisons) designed for LLM extraction',
        ],
      },
      {
        title: 'E-commerce authority and link building',
        subtitle: 'Domain authority development through backlinks from sites specialized in your product sector.',
        items: [
          'Backlinks from product comparators, specialized blogs, and industry media in your sector',
          'Guest posts on high-authority thematic websites (buying guides, product reviews)',
          'Brand mentions in comparison articles cited by LLMs as recommendation sources',
          'Acquisition of verified customer reviews that feed the aggregateRating schema and strengthen AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings by product page, organic traffic, GEO Score, and corrective actions.',
        items: [
          'Google rankings by product keyword and by category',
          'Organic traffic segmented by page type (products, categories, guides, blog)',
          'GEO Score: catalog visibility across AI engines (product recommendations)',
          'Core Web Vitals evolution and WooCommerce technical health (database, plugins, cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your e-commerce team, your WordPress developer, or your management.',
    items: [
      {
        id: 1,
        title: 'WooCommerce technical audit report',
        description: 'Full diagnostic of your WooCommerce store: plugin inventory (core, SEO, payment, shipping), wp_postmeta database health, Core Web Vitals by page type, crawl budget and security assessment, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your store and products in ChatGPT, Perplexity, and Gemini on your catalog queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'WooCommerce schema.org kit',
        description: 'Product markup (offers, aggregateRating, availability, brand), e-commerce BreadcrumbList, Organization, and FAQPage, configured in RankMath or via the Yoast WooCommerce SEO addon. Integration guide with screenshots for your team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Product description rewriting, buying guides, and category FAQ sections optimized for SEO and GEO. Direct integration into WooCommerce via the Gutenberg editor or FTP access.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from product comparators, specialized blogs, and industry media relevant to your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product page and category, segmented organic traffic, GEO Score evolution, WooCommerce technical health (database, plugins, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your WooCommerce store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a buyer asks ChatGPT "what is the best product for [need]?", the LLM compiles web sources to formulate its recommendation. If your WooCommerce product pages do not contain structured factual data (price, specifications, reviews), your catalog is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a WooCommerce site?", the LLM does not name any agency directly. It provides a list of selection criteria: e-commerce experience, dual WordPress and WooCommerce expertise, knowledge of catalog-specific challenges (variants, database performance, Product schema). It points toward directories like Clutch and G2. The agency that demonstrates a WooCommerce-specific methodology with measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a WooCommerce website", the LLM generates a structured guide covering 8 to 10 points: URL architecture (remove /product/ and /product-category/), product page optimization (original descriptions, not manufacturer copy), performance (caching, database), SEO plugins (Yoast WooCommerce SEO, RankMath), and internal linking (related products, buying guides). Preferred sources are WPBeginner, RankMath Blog, and Elegant Themes.</p><h4>CMS comparison queries</h4><p>On "WooCommerce vs Shopify for SEO", the LLM produces a comparison table with 6 to 8 criteria. WooCommerce is presented as more flexible (full URL control, meta, schema.org via Yoast/RankMath) but more complex and dependent on hosting quality. Shopify is presented as simpler with a fixed URL structure that prevents errors but limits customization. Sites publishing factual comparisons with measurable criteria are favored as extraction sources.</p><h4>Common problem queries</h4><p>On "common WooCommerce SEO problems", the LLM provides a list of 7 to 10 platform-specific issues: duplicate content from product variants, wp_postmeta database slowdown, indexable faceted filters, manufacturer-copied descriptions, missing Product schema, non-optimized URLs, and uncompressed product images. Content structured as problem-impact-solution tables is the most likely to be extracted.</p>',
    structuredData:
      'For a WooCommerce store, the recommended schema.org types are: <code>Product</code> (primary type on product pages, with <code>offers</code>, <code>aggregateRating</code>, <code>availability</code>, and <code>brand</code>), <code>BreadcrumbList</code> (e-commerce navigation), <code>Organization</code> (merchant identity), <code>WebSite</code> (SearchAction for internal search), <code>FAQPage</code> (category FAQ and guides). RankMath handles Product schema natively. The Yoast WooCommerce SEO addon ($99/year) adds Product markup with dynamic fields (price, stock). This markup enables Google to display product rich snippets and allows LLMs to extract price, reviews, and availability for their recommendations.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your WooCommerce store by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product content, buying guides, comparisons), Legitimacy and Citability (verified customer reviews, backlinks from comparators and specialized media), and Factual Density (richness of Product schema markup, price/stock/review data, and structured product entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: WooCommerce SEO',
    items: [
      {
        question: 'How much does WooCommerce SEO cost?',
        answer:
          'The SEO budget for a WooCommerce store depends on the number of products, catalog complexity (variants, attributes), and competition level. At Rankwell, WooCommerce SEO engagements start from $2,000/month for a store with fewer than 500 products, and range from $4,000 to $8,000/month for catalogs with thousands of SKUs requiring deep work on the database, product pages, and content strategy.',
      },
      {
        question: 'How long does it take to see SEO results on WooCommerce?',
        answer:
          'Technical fixes (database cleanup, cache optimization, redirects) produce measurable effects on page speed within the first month. Product page rankings on transactional keywords require 3 to 6 months of sustained work. Product description rewriting and buying guide creation show results from the 4th month onward. Rankwell provides a forecast timeline based on the initial audit of your catalog.',
      },
      {
        question: 'Should I use RankMath or Yoast WooCommerce SEO for product markup?',
        answer:
          'RankMath handles Product schema natively and for free, with offers, aggregateRating, and availability fields. Yoast requires the WooCommerce SEO addon ($99/year) for the same level of product markup. RankMath also offers multi-keyword analysis and built-in redirects in its free version. Rankwell works with both plugins and recommends whichever integrates best with your existing configuration.',
      },
      {
        question: 'How do I fix a slow WooCommerce store?',
        answer:
          'WooCommerce slowness typically stems from three causes: an overloaded wp_postmeta database (exceeding 4 million rows on large catalogs), uncompressed product images, and too many active plugins. Rankwell starts with a performance audit that measures the impact of each component, cleans the database (transients, sessions, orphaned meta), activates HPOS for orders, and configures a WooCommerce-specific cache (WP Rocket with cart and checkout exclusions).',
      },
      {
        question: 'How can I get my WooCommerce products cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to recommend your products, three conditions must be met: product pages containing verifiable factual data (technical specifications, prices, measurable comparisons), complete Product schema markup (offers, aggregateRating, availability, brand), and verified customer reviews published on your site and on third-party platforms. The Rankwell GEO Score measures these three dimensions and identifies which product pages to optimize first.',
      },
      {
        question: 'Is WooCommerce the best choice for e-commerce SEO in 2026?',
        answer:
          'WooCommerce remains the most flexible e-commerce solution for SEO thanks to full control over URLs, HTML, schema.org markup, and redirects. But this flexibility comes at a cost: it requires higher technical skills than Shopify, and performance degrades without proactive database optimization. For catalogs under 1,000 products, WooCommerce and Shopify deliver comparable SEO results. Beyond that, Rankwell recommends WooCommerce for its advanced customization capabilities.',
      },
      {
        question: 'Why choose Rankwell for WooCommerce SEO?',
        answer:
          'Rankwell combines WordPress technical SEO expertise (plugin auditing, database optimization, performance) with knowledge of WooCommerce-specific e-commerce challenges (product variants, faceted filters, Product schema, catalog descriptions) and the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology addresses each layer: WordPress infrastructure, WooCommerce catalog, product content, and AI engine visibility.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your WooCommerce store?',
    description:
      'Request a free GEO & SEO audit of your WooCommerce store. Our SEO & GEO consultants analyze your catalog, database, product pages, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for Artisans', href: '/en/geo-seo-agency/sector/artisan' },
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/site-ecommerce' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
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
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'BigCommerce', href: '/en/geo-seo-agency/cms/bigcommerce' },
      { label: 'OpenCart', href: '/en/geo-seo-agency/cms/opencart' },
    ],
  },
};

export default data;
