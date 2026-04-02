/**
 * DATA: CMS OpenCart Page (EN)
 * Route: /en/geo-seo-agency/cms/opencart
 *
 * English version adapted for the international OpenCart e-commerce market.
 * Content based on LLM auto-test (March 2026) and global OpenCart ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'opencart',
    title: 'OpenCart SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for OpenCart stores. Duplicate URLs, canonical tags, Product schema, SEO extensions: a complete methodology built for OpenCart.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'OpenCart' },
    ],
    title: 'OpenCart SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Duplicate URLs from category paths, no native canonical tags, missing XML sitemap without extensions: OpenCart SEO requires platform-specific expertise that generic agencies miss. Our experts combine technical SEO and GEO to rank your store on Google and get your products cited by AI engines.',
    ctaText: 'Request an OpenCart SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on OpenCart (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on OpenCart',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">OpenCart powers over 400,000 active stores worldwide</strong>. Its PHP MVC architecture gives direct access to controllers, Twig templates, and .htaccess for full URL rewrite and HTML control. The lightweight core (under 30 MB) delivers fast server response times, a solid base for an advanced <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">The OpenCart marketplace lists ~13,000 extensions versus 40,000+ for WooCommerce</strong>, with none pre-installed for SEO. No native canonical tags, XML sitemap, 301 redirects, or schema.org Product markup, causing dozens of URL variants per product and systematic <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">crawl budget waste and cannibalization</a>.',
    geoAngle:
      'According to Rankwell, OpenCart stores suffer from an AI citability deficit: no native schema.org Product markup and no structured factual passages on product pages. LLMs prioritize sources with technical data (price, availability) encapsulated in JSON-LD, which OpenCart does not produce by default.',
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
    title: 'Common OpenCart SEO problems and solutions',
    interpretation:
      'These issues affect the vast majority of unoptimized OpenCart stores. Each one degrades Google rankings and reduces the ability of AI engines to extract your product pages. A targeted technical audit identifies which ones apply to your store and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Duplicate URLs: same product accessible via multiple category paths',
        'Crawl budget dilution, cannibalization between URL variants',
        'SEO URL module activation, single canonical rewrite per product, canonical directives via SEO Pack Pro by iSenseLabs',
      ],
      [
        'No native canonical tags',
        'Google indexes multiple versions of the same page, PageRank signal loss',
        'Installation of a canonical extension (SEO Pack Pro or SEO Module Pro), systematic verification via Screaming Frog',
      ],
      [
        'No native XML sitemap',
        'Googlebot cannot discover all pages, incomplete catalog indexation',
        'XML Sitemap Generator extension, submission in Google Search Console, exclusion of filtered pages and pagination',
      ],
      [
        'Missing schema.org Product markup on product pages',
        'No product rich snippets (price, availability, reviews), invisible to e-commerce LLMs',
        'JSON-LD Product injection via SEO Markup Module or direct modification of product.twig template',
      ],
      [
        'Identical or missing meta descriptions on category pages',
        'Low CTR in SERPs, thin content signal for Google',
        'Manual meta writing per category in the OpenCart admin, tag audit via GSC',
      ],
      [
        'No native 301 redirect management',
        '404 errors when products are deleted, link equity loss',
        'Redirect management via .htaccess or dedicated extension, 404 monitoring in GSC',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for OpenCart',
    subtitle: 'A structured 8-step approach to OpenCart SEO, designed around the platform-specific challenges of this lightweight open-source e-commerce CMS.',
    steps: [
      {
        title: 'OpenCart technical audit',
        subtitle: 'Full analysis of your OpenCart installation: core version (3.x or 4.x), active extensions, PHP configuration, server performance, and Core Web Vitals.',
        items: [
          'Inventory of installed extensions (active, inactive, obsolete)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: detection of duplicate URLs from category paths and filters',
          'Security verification: PHP version, SSL certificate, HTTP security headers',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your OpenCart store visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 product and sector queries on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors (including stores on other CMS platforms)',
          'Identification of product pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'URL cleanup and correction',
        subtitle: 'Elimination of duplicate URLs and implementation of a clean canonical URL structure across the entire catalog.',
        items: [
          'SEO URL module configuration for unique routes per product',
          'Deactivation or removal of unused and obsolete extensions',
          'Twig template correction for pages generating incorrect Hn tags',
          'Canonical tag setup on each page type (product, category, manufacturer)',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement leveraging the native lightweight core of OpenCart.',
        items: [
          'PHP OPcache and native OpenCart cache configuration',
          'Product image compression to WebP with lazy loading',
          'CDN setup (Cloudflare, BunnyCDN) for static assets',
          'CSS/JS minification and deferred loading of non-critical scripts',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Installation and setup of essential SEO extensions to compensate for the native limitations of OpenCart.',
        items: [
          'SEO Pack Pro or SEO Module Pro: canonical tags, meta management, 301 redirects',
          'XML sitemap generation with exclusion of filtered pages and pagination',
          'Schema.org Product, BreadcrumbList, Organization markup via JSON-LD',
          'Unique meta description configuration per category and CMS page',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Product page and category enrichment for Google rankings and AI engine citability.',
        items: [
          'Unique product descriptions with structured technical specifications',
          'Buying guides and comparison articles linked to product categories',
          'Thematic FAQ per category, inspired by Google People Also Ask',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from specialized media, product comparators, and niche industry sites.',
        items: [
          'Backlinks from price comparators, e-commerce blogs, and specialized media',
          'Guest posts on high-authority sites in your product vertical',
          'Brand and product mentions in independent buying guides and reviews',
          'Each external mention strengthens PageRank and AI citability of your product pages',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and product page',
          'Organic traffic segmented by page type (product, category, guide)',
          'GEO Score: product visibility across AI engines',
          'Core Web Vitals evolution and OpenCart technical health',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your technical team, your OpenCart developer, or your management.',
    items: [
      {
        id: 1,
        title: 'OpenCart technical audit report',
        description: 'Full diagnostic of your OpenCart installation: extension inventory (active, obsolete, conflicting), Core Web Vitals, crawl budget, duplicate URL detection, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your store and products in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'OpenCart schema.org kit',
        description: 'JSON-LD Product, BreadcrumbList, Organization, and AggregateRating markup configured via the SEO Markup Module or by direct injection into Twig templates (catalog/view/theme/*/template/product/product.twig). Step-by-step integration guide.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Product page writing, category descriptions, and buying guides optimized for SEO and GEO. Direct integration into the OpenCart back-office or via FTP access to Twig templates.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from price comparators, e-commerce blogs, and specialized media in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product page and category, segmented organic traffic, GEO Score evolution, OpenCart technical health (extensions, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your OpenCart store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a buyer asks ChatGPT "which product should I choose for [your category]?", the LLM compiles web sources to formulate its answer. If your OpenCart product pages contain no Product markup and no structured technical data, they are invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for an OpenCart store?", the LLM does not cite any agency by name. It notes that OpenCart is a niche e-commerce CMS with a smaller community than WooCommerce or Shopify, and recommends looking for an agency familiar with the MVC architecture (controller/model/view) and the extension ecosystem. It points toward the OpenCart marketplace and community forums. The agency that publishes a documented methodology and OpenCart case studies has strong citation potential.</p><h4>Technical queries</h4><p>On "how to improve SEO on an OpenCart website", the LLM generates a guide covering 8 to 10 points: enabling SEO URLs, installing extensions for canonical tags and sitemap, image compression, schema.org Product markup, and robots.txt configuration. The preferred sources are the official OpenCart documentation, iSenseLabs blog, Matt Jackson OpenCart guides, and ScalaHosting. No agency is cited.</p><h4>CMS comparison queries</h4><p>On "OpenCart vs PrestaShop for SEO", the LLM produces a comparison with 5 to 7 criteria. OpenCart is positioned as lighter but inferior in native SEO (no canonical, no sitemap, no redirects). PrestaShop is presented as superior with built-in URL rewriting, per-product meta, and canonical tags. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Problem queries</h4><p>On "common OpenCart SEO problems", the LLM lists duplicate URLs from category paths, .htaccess misconfiguration, SEO keyword conflicts, missing canonical tags, and no native sitemap. Content structured as problem-solution tables with specific fixes has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For an OpenCart store, the recommended schema.org types are: <code>Product</code> (product pages with price, availability, SKU), <code>AggregateRating</code> (customer reviews), <code>BreadcrumbList</code> (category navigation), <code>Organization</code> (store identity), <code>WebSite</code> with <code>SearchAction</code> (internal search). OpenCart generates none of these types natively. Injection is done via the SEO Markup Module or by direct modification of Twig templates (catalog/view/theme/*/template/product/product.twig).',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your OpenCart store by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (depth of product descriptions and editorial content), Legitimacy and Citability (backlinks, brand mentions, external customer reviews), and Factual Density (richness of schema.org Product markup, structured technical data, and verifiable specifications).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: OpenCart SEO',
    items: [
      {
        question: 'How much does OpenCart SEO cost?',
        answer:
          'The SEO budget for an OpenCart store depends on the number of products, technical complexity, and competition level in your sector. At Rankwell, OpenCart SEO engagements start from $1,500/month for a catalog with fewer than 500 products, and range from $3,000 to $6,000/month for larger catalogs with multiple languages. This budget covers duplicate URL correction, missing SEO extension installation, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on OpenCart?',
        answer:
          'Technical fixes (canonical tags, sitemap, 301 redirects) produce measurable effects within 1 to 2 months, as they resolve indexation issues blocking the crawl. Ranking improvements on competitive product keywords require 4 to 8 months of sustained work. OpenCart stores often start from a weak technical baseline (duplicate URLs, no schema.org), which means initial gains are faster once the foundations are corrected. Rankwell provides a forecast timeline after the audit.',
      },
      {
        question: 'SEO Pack Pro or SEO Module Pro: which OpenCart SEO extension should I choose?',
        answer:
          'SEO Pack Pro by iSenseLabs is a comprehensive toolkit with meta automation, canonical handling, rich snippets, and image optimization, with over 5,000 sales on the marketplace. SEO Module Pro focuses on canonical, meta, and 301 redirect management in a single interface. The choice depends on your OpenCart version (3.x or 4.x) and your needs. Rankwell tests both extensions in a staging environment before production deployment to avoid conflicts with your existing modules.',
      },
      {
        question: 'How do I fix performance issues on my OpenCart store?',
        answer:
          'OpenCart is natively lightweight (core under 30 MB), but performance degrades with extension accumulation, uncompressed images, and unoptimized SQL queries. Rankwell identifies extensions slowing down rendering, activates PHP OPcache, converts images to WebP, sets up a CDN, and optimizes database queries. The target is an LCP below 2.5 seconds on mobile.',
      },
      {
        question: 'How can I get my OpenCart store cited by ChatGPT and Perplexity?',
        answer:
          'AI engines prioritize stores whose product pages contain schema.org Product markup with price, availability, and reviews, verifiable technical specifications, and structured buying guides. OpenCart produces none of these signals natively. The Rankwell GEO Score measures three dimensions (Informational Universe, Legitimacy, Factual Density) and identifies the priority levers to increase your product citability by LLMs.',
      },
      {
        question: 'Is OpenCart a good choice for e-commerce SEO in 2026?',
        answer:
          'OpenCart suits small to mid-size catalogs (fewer than 5,000 products) looking for a lightweight, self-hosted CMS. Its native server performance is an asset, but its lack of native SEO features (no canonical, no sitemap, no schema.org) requires investment in extensions and configuration. Compared to PrestaShop (more complete native SEO) or WooCommerce (larger free extension ecosystem), OpenCart remains competitive if the technical team can maintain SEO extensions. Rankwell adapts its SEO and GEO methodology to the specific strengths and limitations of OpenCart.',
      },
      {
        question: 'Why choose Rankwell for OpenCart SEO?',
        answer:
          'Rankwell combines OpenCart technical SEO expertise (duplicate URL correction, SEO extension installation and configuration, schema.org Product markup, Twig template optimization) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology covers OpenCart-specific challenges: missing native canonical tags, absent sitemap, extension dependency. The proprietary GEO Score measures your product page visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your OpenCart store?',
    description:
      'Request a free GEO & SEO audit of your OpenCart store. Our SEO & GEO consultants analyze your extensions, URLs, schema.org markup, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for Artisans', href: '/en/geo-seo-agency/sector/artisan' },
        { label: 'SEO for SMBs', href: '/en/geo-seo-agency/sector/pme' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Magento SEO', href: '/en/geo-seo-agency/cms/magento' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'SEO Cannibalization', href: '/en/glossary/cannibalisation-seo' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'Sylius', href: '/en/geo-seo-agency/cms/sylius' },
    ],
  },
};

export default data;
