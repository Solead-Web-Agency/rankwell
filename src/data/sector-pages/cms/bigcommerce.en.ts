/**
 * DATA: CMS BigCommerce Page (EN)
 * Route: /en/geo-seo-agency/cms/bigcommerce
 *
 * English version adapted for the international BigCommerce mid-market ecosystem.
 * Content based on LLM auto-test (March 2026) and global BigCommerce ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bigcommerce',
    title: 'BigCommerce SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for BigCommerce stores. Customizable URLs, native Product microdata, multi-storefront, Stencil: a complete methodology built for BigCommerce.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'BigCommerce' },
    ],
    title: 'BigCommerce SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Native blog published on a subdomain, limited Stencil theme flexibility, schema.org restricted to Product microdata: BigCommerce SEO requires platform-specific expertise. Our experts combine technical SEO and GEO to rank your store on Google and get your products cited by AI engines.',
    ctaText: 'Request a BigCommerce SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on BigCommerce (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on BigCommerce',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">BigCommerce powers over 37,000 stores generating $34 billion in annual GMV</strong>, with fully customizable URLs (no forced prefix), admin-managed 301 redirects, auto-generated XML sitemap, and native Product microdata in Stencil themes. Its Akamai CDN across 8 nodes supports a performant <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Fewer than 15 free Stencil themes are available</strong>, and the native blog publishes on a subdomain, diluting domain authority. Schema.org is limited to Product microdata. Product variants generate <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">duplicate content</a> via poorly canonicalized URL parameters, and no native staging environment exists.',
    geoAngle:
      'According to Rankwell, BigCommerce stores that supplement native Product microdata with JSON-LD injection (Organization, FAQPage, BreadcrumbList) create an entity graph directly ingestible by LLMs. The multi-storefront capability multiplies AI citation entry points across localized markets.',
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
    title: 'Common BigCommerce SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized BigCommerce stores. Each one degrades Google rankings and reduces the ability of your product pages to be cited by AI engines. A BigCommerce technical audit identifies which ones apply to your store and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Native blog published on a subdomain',
        'Editorial content does not transfer authority to the main domain',
        'Blog migration to the main domain via headless WordPress integration on a subdirectory (/blog/) or creation of enriched BigCommerce CMS pages',
      ],
      [
        'Duplicate content from product variants and URL parameters',
        'Crawl budget dilution, cannibalization between variant URLs',
        'Canonical tag audit per variant, consolidation via 301 redirects, URL parameter configuration in GSC',
      ],
      [
        'Stencil themes with predefined template objects',
        'Unable to display certain structural data (parent category, custom attributes) in product templates',
        'Use of BigCommerce custom fields and metafields to inject additional data, supplemented by Widgets API',
      ],
      [
        'Schema.org limited to Product microdata',
        'No FAQ rich snippets, no enriched breadcrumbs, partial invisibility to LLMs',
        'Complementary JSON-LD injection (Organization, WebSite, BreadcrumbList, FAQPage) via Script Manager or Stencil theme modification',
      ],
      [
        'No native staging environment',
        'Risk of SEO errors in production (broken URLs, lost meta tags)',
        'Stencil theme duplication for preview, pre-deployment verification checklist, post-deployment monitoring via Screaming Frog crawl',
      ],
      [
        'Category page pagination poorly configured',
        'Pagination pages indexed without unique content, crawl budget dilution',
        'Implementation of rel="next/prev" tags in the Stencil theme, addition of unique content at the top of each category',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for BigCommerce',
    subtitle: 'A structured 8-step approach to BigCommerce SEO, designed around the platform-specific challenges of this mid-market e-commerce solution.',
    steps: [
      {
        title: 'BigCommerce technical audit',
        subtitle: 'Full analysis of your BigCommerce store: Stencil theme, marketplace apps, URL configuration, Product microdata, and Core Web Vitals.',
        items: [
          'Inventory of apps and third-party scripts injected via Script Manager',
          'Core Web Vitals measurement (LCP, FID, CLS) on product pages, category pages, and brand pages',
          'Duplicate content analysis: product variants, URL parameters, pagination pages',
          'Verification of automatic XML sitemap, robots.txt, and Akamai CDN configuration',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your BigCommerce store visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 product and brand queries on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors in your mid-market segment',
          'Identification of product pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Technical cleanup and rationalization',
        subtitle: 'Removal of unnecessary third-party scripts and optimization of Stencil configuration to reduce page weight.',
        items: [
          'Audit of scripts injected via Script Manager (analytics, chat, popups)',
          'Uninstallation of unused marketplace apps and cleanup of residual code',
          'Consolidation of product variants to eliminate duplicate URLs',
          'Canonical tag configuration for each page type (product, category, brand)',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Core Web Vitals improvement by leveraging BigCommerce\'s native Google Cloud Platform infrastructure and Akamai CDN.',
        items: [
          'Image compression via Akamai Image Manager (up to 70% file size reduction)',
          'Native lazy loading on product images and galleries',
          'Deferred loading of non-critical scripts (reviews, widgets, popups)',
          'CSS/JS optimization of the Stencil theme (removal of unused code)',
        ],
      },
      {
        title: 'Advanced BigCommerce SEO configuration',
        subtitle: 'Full setup of schema.org markup, meta tags, and redirects to leverage the full SEO potential of the platform.',
        items: [
          'URL customization for every product, category, and brand page (no forced prefix)',
          'Complementary JSON-LD injection: Organization, WebSite, BreadcrumbList, FAQPage via Script Manager',
          'Verification and enrichment of native Product microdata (price, GTIN, stock, aggregated reviews)',
          '301 redirect configuration from the BigCommerce admin panel',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Creation of structured content for Google rankings and product citability by AI engines, working around the native blog limitations.',
        items: [
          'Enriched product pages with technical specifications, comparisons, and integrated FAQ',
          'BigCommerce CMS pages for buying guides and editorial content (on the main domain)',
          'Optimized category descriptions with unique content and internal linking to product pages',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from comparators, specialized media, and industry publications.',
        items: [
          'Backlinks from product comparators, e-commerce blogs, and specialized media',
          'Listings on B2B directories and industry marketplaces',
          'Brand mentions in mid-market buying guides and comparison articles',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and BigCommerce e-commerce KPIs.',
        items: [
          'Google rankings by product page, category page, and brand page',
          'Organic traffic segmented by page type (product, category, brand, CMS)',
          'GEO Score: visibility evolution across AI engines',
          'Core Web Vitals tracking and BigCommerce technical health (apps, Stencil, Akamai CDN)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your e-commerce team, your BigCommerce developer, or your management.',
    items: [
      {
        id: 1,
        title: 'BigCommerce technical audit report',
        description: 'Full diagnostic of your BigCommerce store: marketplace app inventory, duplicate content audit (variants, URL parameters), Core Web Vitals by page type, Stencil theme analysis, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your store and products in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'BigCommerce schema.org kit',
        description: 'Verification of native Product microdata (price, GTIN, reviews, stock) and complementary JSON-LD injection (Organization, WebSite, BreadcrumbList, FAQPage) via Script Manager. Stencil integration guide with code examples.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of product pages, category descriptions, buying guides, and CMS pages optimized for SEO and GEO. Direct integration into the BigCommerce admin or via the Stencil theme.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from product comparators, e-commerce blogs, and specialized media in your mid-market sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product page and category, segmented organic traffic, GEO Score evolution, BigCommerce technical health (apps, Stencil, Core Web Vitals, Akamai CDN), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your BigCommerce store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which mid-market e-commerce platform should I choose?" or "which product should I recommend in [your category]?", the LLM compiles web sources to formulate its answer. If your BigCommerce product pages lack structured factual data beyond the native microdata, your store remains invisible in this new recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a BigCommerce store?", the LLM does not name any agency specializing in BigCommerce SEO. It provides 5 to 7 selection criteria (proven BigCommerce experience, knowledge of Stencil and APIs, mid-market e-commerce references) and references directories such as Clutch and DesignRush. The pool of dedicated BigCommerce SEO experts is notably smaller than for Shopify, which represents an opportunity for positioning.</p><h4>Technical queries</h4><p>On "how to improve SEO on a BigCommerce store", the LLM generates a guide covering 8 to 10 points including URL customization (no forced /products/ prefix), meta tag optimization, image compression via Akamai Image Manager, sitemap configuration, and 301 redirects from the admin panel. It states that BigCommerce handles approximately 85% of technical SEO natively. The cited sources are the official BigCommerce blog, SeoProfy, HigherVisibility, and ResultFirst.</p><h4>CMS comparison queries</h4><p>On "BigCommerce vs Shopify for SEO", the LLM produces a comparison table with 6 to 8 criteria. BigCommerce is presented as superior on URL flexibility (customizable, no forced prefix), zero transaction fees, and native Product microdata. Shopify is presented as superior on the app ecosystem and developer community. BigCommerce is positioned for mid-market merchants (500 to 50,000 products).</p><h4>Problem queries</h4><p>On "common BigCommerce SEO problems", the LLM provides a list of 6 to 9 platform-specific issues: subdomain blog, duplicate content from variants, limited Stencil theme flexibility, no staging environment, difficult canonical tag configuration, pagination issues. Content structured as problem-solution tables has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a BigCommerce store, Product microdata is natively integrated into Stencil themes (price, availability, aggregated reviews). The complementary schema.org types to inject via Script Manager as JSON-LD are: <code>Organization</code> (brand identity), <code>WebSite</code> (with SearchAction for the search bar), <code>BreadcrumbList</code> (hierarchical navigation), <code>FAQPage</code> (product FAQ or general FAQ). For multi-storefront stores, the <code>Organization</code> markup should be deployed per market with distinct <code>areaServed</code> attributes. The combination of native microdata and injected JSON-LD enables Google to display product rich snippets and allows LLMs to extract structured entities for their purchase recommendations.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your BigCommerce store by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product content, buying guides, CMS pages), Legitimacy and Citability (customer reviews, mentions on comparators, mid-market e-commerce backlinks), and Factual Density (richness of native Product microdata, complementary JSON-LD, and measurable specifications in product pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: BigCommerce SEO',
    items: [
      {
        question: 'How much does BigCommerce SEO cost?',
        answer:
          'The SEO budget for a BigCommerce store depends on the number of products, the number of storefronts, and competition level. At Rankwell, BigCommerce SEO engagements start from $2,000/month for a single-storefront store with fewer than 500 products, and range from $5,000 to $10,000/month for multi-storefront configurations or catalogs with several thousand SKUs. This budget covers the Stencil technical audit, product page optimization, complementary schema.org markup, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on BigCommerce?',
        answer:
          'Technical fixes (canonical tags on variants, duplicate content cleanup, JSON-LD injection) produce measurable effects within 2 to 4 weeks. Ranking improvements on competitive product category keywords require 4 to 8 months of sustained work. The advantage of BigCommerce is that its infrastructure (Akamai CDN, Google Cloud Platform, native Product microdata) eliminates performance issues from the start. Rankwell provides a forecast timeline based on the initial audit of your store.',
      },
      {
        question: 'How do I work around the native BigCommerce blog limitations?',
        answer:
          'The native BigCommerce blog publishes articles on a subdomain, preventing editorial content from strengthening the main domain authority. Two solutions exist: integrate a headless WordPress blog on a subdirectory (/blog/) via the BigCommerce API, or use BigCommerce CMS pages to create buying guides and SEO content directly on the main domain. Rankwell recommends the second approach for stores without dedicated development resources.',
      },
      {
        question: 'How can I improve the speed of my BigCommerce store?',
        answer:
          'BigCommerce runs on Google Cloud Platform with an Akamai CDN that automatically compresses images (up to 70% reduction via Akamai Image Manager). Speed issues typically come from third-party scripts injected via Script Manager (review widgets, live chat, popups) and unoptimized Stencil code. Rankwell audits every script, disables non-critical synchronous loads, and optimizes theme CSS/JS files to improve Core Web Vitals.',
      },
      {
        question: 'How can I get my BigCommerce store cited by ChatGPT and Perplexity?',
        answer:
          'AI engines cite stores whose product pages contain verifiable factual data: quantified technical specifications, structured comparisons, certifications, aggregated customer reviews. On BigCommerce, the native Product microdata provides a solid foundation, but it must be supplemented with JSON-LD (FAQPage, Organization) and editorial content published on the main domain. The Rankwell GEO Score measures these dimensions and identifies the product pages to optimize first.',
      },
      {
        question: 'Is BigCommerce a good choice for e-commerce SEO in 2026?',
        answer:
          'BigCommerce offers a native SEO foundation superior to Shopify on several points: customizable URLs with no forced prefix, built-in Product microdata, admin-managed 301 redirects, and zero transaction fees. It is particularly suited to mid-market merchants (500 to 50,000 products) who want more SEO control than Shopify without the complexity of self-hosted Magento. The main limitations remain the subdomain blog and limited Stencil theme flexibility. Rankwell adapts its SEO and GEO methodology to the specific strengths and limitations of BigCommerce.',
      },
      {
        question: 'Why choose Rankwell for BigCommerce SEO?',
        answer:
          'Rankwell combines BigCommerce technical SEO expertise (Stencil audit, Product microdata, JSON-LD injection via Script Manager, variant duplicate content management, multi-storefront) with the GEO dimension that the few existing BigCommerce agencies have not yet integrated. Our 8-step methodology covers the challenges specific to BigCommerce: subdomain blog, incomplete schema.org, no staging environment, unoptimized pagination. The proprietary GEO Score measures your product visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your BigCommerce store?',
    description:
      'Request a free GEO & SEO audit of your BigCommerce store. Our SEO & GEO consultants analyze your catalog, your Stencil theme, your Product markup, and your AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for Fashion', href: '/en/geo-seo-agency/sector/mode' },
        { label: 'SEO for Industry', href: '/en/geo-seo-agency/sector/industrie' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'International SEO', href: '/en/geo-seo-agency/project/international' },
      ],
      cms: [
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
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
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'OpenCart', href: '/en/geo-seo-agency/cms/opencart' },
    ],
  },
};

export default data;
