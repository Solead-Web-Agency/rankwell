/**
 * DATA: CMS Magento / Adobe Commerce Page (EN)
 * Route: /en/geo-seo-agency/cms/magento
 *
 * English version adapted for the international Magento/Adobe Commerce market.
 * Content based on LLM auto-test (March 2026) and global Magento ecosystem.
 * Magento = enterprise e-commerce platform, acquired by Adobe (Adobe Commerce).
 * Strengths: full SEO control, massive catalogs, multistore, native hreflang.
 * Limitations: heavy infrastructure (Varnish, Redis, Elasticsearch), high cost, technical complexity.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'magento',
    title: 'Magento SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Magento / Adobe Commerce websites. Layered navigation, Varnish, schema.org Product, multistore: a complete methodology built for Magento 2.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Magento' },
    ],
    title: 'Magento SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Non-canonical faceted navigation, JavaScript bloat, misconfigured URL rewrites: SEO on a Magento 2 site demands platform-specific expertise that generic agencies miss. Our experts combine technical SEO and GEO to rank your catalog on Google and get your products cited by AI engines.',
    ctaText: 'Request a Magento SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Magento (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Magento',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Magento powers over 100,000 stores generating $155 billion+ in annual merchandise volume</strong>. Granular URL rewrites, canonical tags per product, XML sitemaps per store view, native hreflang, and schema.org injectable at template level make it the reference for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy on international catalogs.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Magento\\\'s layered navigation generates thousands of indexable filter URLs by default</strong>, each combination creating a page without a canonical tag. Native JavaScript bloat (RequireJS, KnockoutJS) degrades Core Web Vitals, and the infrastructure requires Varnish, Redis, and Elasticsearch.',
    geoAngle:
      'According to Rankwell, Magento can inject enriched Product markup (price, stock, reviews, GTIN) directly into Phtml templates, but without explicit structured data configuration and factual passages on category pages, LLMs ignore the catalog.',
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
    title: 'Common Magento SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Magento 2 stores. Each technical flaw degrades Google rankings and reduces the ability of your site to be cited by AI engines. A Magento-specific audit identifies the priority fixes for your catalog.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Layered navigation: each filter combination generates a distinct URL',
        'Thousands of duplicate pages indexed, wasted crawl budget',
        'Canonical tags on filtered pages, noindex via robots meta on non-strategic combinations, Amasty or Mageworx extension configuration',
      ],
      [
        'JavaScript bloat (RequireJS, KnockoutJS native to Magento 2)',
        'LCP > 4s on mobile, PageSpeed score below 40',
        'Migration to Hyva theme or removal of unused JS modules, critical bundling, deferral of non-essential scripts',
      ],
      [
        'Non-canonical multi-parameter URLs (?color=red&size=M)',
        'Authority dilution, pages competing with main categories',
        'Varnish/Nginx rewrite rules, dynamic canonical tags, parameter exclusion in Google Search Console',
      ],
      [
        'XML sitemap including CMS pages, filters, and inactive store views',
        'Crawl budget wasted on non-strategic URLs',
        'Granular configuration of Magento native sitemap: exclusion of filters, noindex pages, and disabled store views',
      ],
      [
        'Missing enriched schema.org Product markup (price, stock, reviews, GTIN)',
        'No product rich snippets, invisible to LLMs',
        'Injection of Product, AggregateRating, and Offer markup in Phtml templates or via a dedicated extension',
      ],
      [
        'Multistore configuration with missing or inconsistent hreflang tags',
        'Cannibalization between store views, incorrect geographic targeting',
        'Automatic hreflang generation per store view, language/country mapping audit, x-default tags',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Magento',
    subtitle: 'A structured 8-step approach to Magento SEO, designed around the platform-specific challenges of Magento 2 and Adobe Commerce.',
    steps: [
      {
        title: 'Magento technical audit',
        subtitle: 'Full analysis of the Magento 2 installation: version, active modules, server configuration (Varnish, Redis, Elasticsearch), and Core Web Vitals.',
        items: [
          'Inventory of installed modules (active, disabled, conflicting)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: indexed pages vs wasted pages (layered navigation, filter parameters)',
          'Server stack verification: Varnish active, Redis configured, Elasticsearch functional',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Magento catalog visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your products and categories on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct e-commerce competitors',
          'Identification of product pages and category pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Technical cleanup and rationalization',
        subtitle: 'Removal of unused Magento modules, correction of broken URL rewrites, and database cleanup.',
        items: [
          'Deactivation of unused native modules (Magento_Wishlist, Magento_Newsletter if not in use)',
          'Cleanup of the url_rewrite table (obsolete entries, redirect loops)',
          'Canonical tag correction on layered navigation pages',
          'Removal of inactive store views and CMS pages from the sitemap',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement through Varnish configuration, asset compression, and front-end rendering optimization.',
        items: [
          'Optimal configuration of Varnish Full Page Cache and Redis for sessions and object cache',
          'Product image compression (WebP, native Magento 2 lazy loading)',
          'JavaScript audit: removal of RequireJS on critical pages, selective bundling',
          'CDN setup (Fastly, Cloudflare) for static assets',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Setup of URL rewrites, canonicals, sitemap, and schema.org Product markup in Magento 2.',
        items: [
          'Clean URL rewrites (removal of parent categories from product URLs)',
          'Dynamic canonical tags on category pages and filter pages',
          'XML sitemap configured per store view (exclusion of noindex pages)',
          'Schema.org markup: Product, AggregateRating, Offer, BreadcrumbList, Organization',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Creation of structured content for category pages, product pages, and buying guides.',
        items: [
          'Writing unique category descriptions with factual data and comparisons',
          'Product page enrichment: technical specifications, product FAQ, sizing guides',
          'Creation of buying guides and comparisons to capture informational queries',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from e-commerce media, product comparators, and specialized publications.',
        items: [
          'Backlinks from product comparators, e-commerce blogs, and industry media',
          'Guest posts on high-authority thematic websites',
          'Brand mentions in buying guides and comparison articles',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and Magento technical health.',
        items: [
          'Google rankings by keyword and by page (categories, product pages, guides)',
          'Organic traffic segmented by page type and by store view',
          'GEO Score: product and brand visibility across AI engines',
          'Core Web Vitals evolution and server stack status (Varnish, Redis, Elasticsearch)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your Magento technical team, your development agency, or your e-commerce management.',
    items: [
      {
        id: 1,
        title: 'Magento technical audit report',
        description: 'Full diagnostic of your Magento 2 installation: module inventory (active, disabled, conflicting), Varnish/Redis/Elasticsearch configuration, Core Web Vitals, crawl budget, layered navigation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your catalog and brand in ChatGPT, Perplexity, and Gemini on your target product queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Magento schema.org kit',
        description: 'Product, AggregateRating, Offer, BreadcrumbList, and Organization markup injected into your Phtml templates or configured via Amasty SEO Toolkit / Mageworx SEO Suite. Technical integration guide for your development team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of category descriptions, enriched product pages, buying guides, and FAQ sections optimized for SEO and GEO. Direct integration into the Magento 2 back-office or deployment on your staging environment.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from product comparators, e-commerce blogs, and specialized media in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by category and product page, organic traffic segmented by store view, GEO Score evolution, Magento technical health (Varnish, Redis, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Magento site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a buyer asks ChatGPT "which site to buy [your product]?", the LLM compiles web sources to formulate its answer. If your Magento catalog does not appear in any cited source, your products are invisible in this new recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries for Magento</h4><p>On "which SEO agency for a Magento site?", the LLM does not name any agency. It provides a list of selection criteria (Magento/Adobe Commerce experience, mastery of Varnish and Elasticsearch, references on catalogs exceeding 10,000 SKUs) and points toward the Adobe partner directory. Only specialized English-speaking agencies (1Digital Agency, IWD Agency) are mentioned. The agency that publishes a detailed methodology with measurable results on Magento has open territory to claim.</p><h4>Magento technical queries</h4><p>On "how to improve SEO on a Magento site", the LLM generates a structured guide covering 10 to 14 points including URL rewrites, layered navigation, canonicals, sitemaps, SEO extensions (Amasty, Mageworx), Varnish configuration, and schema.org Product markup. No agency is cited. The preferred sources are the official Adobe Commerce documentation, Amasty Blog, Nexcess, and FireBear Studio.</p><h4>CMS comparison queries</h4><p>On "Magento vs Shopify for SEO", the LLM produces a comparison table with 6 to 8 criteria. Magento is presented as the platform with the most complete technical control but requiring costly infrastructure and advanced development skills. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Magento SEO problems", the LLM provides a list of 8 to 12 Magento-specific issues (layered navigation, JavaScript bloat, multi-parameter URLs). Content that structures problem/impact/solution in a table format has the highest chance of being extracted as a reference source.</p>',
    structuredData:
      'For a Magento 2 site, the recommended schema.org types are: <code>Product</code> with <code>Offer</code> and <code>AggregateRating</code> (product pages), <code>BreadcrumbList</code> (navigation), <code>Organization</code> (homepage), <code>ItemList</code> (category pages), <code>FAQPage</code> (guides and FAQ). Magento does not natively handle enriched markup: injection is done through Phtml templates, Amasty or Mageworx extensions, or custom modules. This markup enables Google to display product rich snippets (price, availability, reviews) and LLMs to extract structured data for their recommendations.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Magento catalog by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product content, buying guides, and comparisons), Legitimacy and Citability (external trust signals, backlinks from e-commerce media and comparators), and Factual Density (richness of schema.org Product markup, technical data, and specifications on product pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Magento SEO',
    items: [
      {
        question: 'How much does Magento SEO cost?',
        answer:
          'The SEO budget for a Magento site depends on the number of products, the complexity of the layered navigation, and the number of active store views. At Rankwell, Magento SEO engagements start from $3,000/month for a catalog under 5,000 products, and range from $6,000 to $12,000/month for massive catalogs (50,000+ SKUs) with international multistores. This budget covers the technical audit, server stack optimization, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Magento?',
        answer:
          'Technical Magento fixes (layered navigation, canonicals, Varnish) produce measurable effects on crawl budget within the first month. Ranking improvements on competitive keywords require 4 to 8 months of sustained work, depending on the e-commerce competition level. Core Web Vitals optimization (JavaScript bloat removal) improves PageSpeed scores in 2 to 4 weeks. Rankwell provides a forecast timeline based on the initial audit of your Magento installation.',
      },
      {
        question: 'Should I choose Amasty SEO Toolkit or Mageworx SEO Suite for Magento?',
        answer:
          'Amasty SEO Toolkit and Mageworx SEO Suite Ultimate are the two leading SEO extensions for Magento 2. Amasty (around $249) offers an all-in-one solution covering meta tags, rich snippets, sitemaps, and canonical URLs. Mageworx (around $299) stands out with advanced duplicate content management, meta tag templates, and OpenAI integration for generating product descriptions. Rankwell works with both extensions and recommends whichever best fits your existing configuration and catalog volume.',
      },
      {
        question: 'How do I fix a slow Magento site?',
        answer:
          'Magento 2 slowness typically stems from three causes: native JavaScript bloat (RequireJS and KnockoutJS loading hundreds of kilobytes of unused code), an underpowered server configuration (Varnish, Redis, or Elasticsearch absent or misconfigured), and uncompressed product images. Rankwell starts with a performance audit that identifies the modules responsible for slowdowns, configures Varnish Full Page Cache, activates Redis for sessions, converts images to WebP, and evaluates theme migration to Hyva to eliminate the legacy front end.',
      },
      {
        question: 'How can I get my Magento catalog cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Magento products, three conditions must be met: product pages rich in verifiable factual data (technical specifications, comparisons, GTIN), complete schema.org Product markup (Product, Offer, AggregateRating), and product mentions on third-party sources (comparators, specialized press, independent reviews). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your catalog citability.',
      },
      {
        question: 'Is Magento still the best e-commerce CMS for SEO in 2026?',
        answer:
          'Magento (Adobe Commerce) remains the e-commerce platform with the most complete SEO control in 2026: granular URL rewrites, canonical tags, native hreflang, full code access. However, Shopify offers superior native performance without server configuration, and WooCommerce inherits the WordPress plugin ecosystem. Magento suits catalogs exceeding 10,000 SKUs, international multistores, and businesses with a dedicated technical team. Rankwell adapts its SEO and GEO methodology to the specifics of each platform.',
      },
      {
        question: 'Why choose Rankwell for Magento SEO?',
        answer:
          'Rankwell combines Magento technical SEO expertise (layered navigation audit, Varnish/Redis configuration, schema.org Product markup, multistore management) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for Magento 2-specific challenges: duplicate content from filters, JavaScript bloat, server infrastructure, multistore hreflang. The proprietary GEO Score measures your catalog visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Magento site?',
    description:
      'Request a free GEO & SEO audit of your Magento site. Our SEO & GEO consultants analyze your catalog, layered navigation, server stack, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'E-commerce SEO', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'Fashion & Textile SEO', href: '/en/geo-seo-agency/sector/mode-textile' },
        { label: 'Industry SEO', href: '/en/geo-seo-agency/sector/industrie' },
      ],
      projets: [
        { label: 'E-commerce SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'SEO Migration', href: '/en/geo-seo-agency/project/migration' },
        { label: 'International SEO', href: '/en/geo-seo-agency/project/international' },
      ],
      cms: [
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Crawl budget', href: '/en/glossary/crawl-budget' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'BigCommerce', href: '/en/geo-seo-agency/cms/bigcommerce' },
      { label: 'OpenCart', href: '/en/geo-seo-agency/cms/opencart' },
      { label: 'Sylius', href: '/en/geo-seo-agency/cms/sylius' },
    ],
  },
};

export default data;
