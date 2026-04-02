/**
 * DATA: CMS PrestaShop Page (EN)
 * Route: /en/geo-seo-agency/cms/prestashop
 *
 * English version adapted for the international PrestaShop market.
 * Content based on LLM auto-test (March 2026) and global PrestaShop ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'prestashop',
    title: 'PrestaShop SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for PrestaShop stores. URL rewriting, faceted navigation, performance, schema.org Product: a complete methodology built for PrestaShop.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'PrestaShop' },
    ],
    title: 'PrestaShop SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Numeric ID URLs, unmanaged faceted navigation, degraded performance from module overload: PrestaShop SEO demands platform-specific expertise that generic agencies lack. Our experts combine technical SEO and GEO to rank your e-commerce store on Google and get your products cited by AI engines.',
    ctaText: 'Request a PrestaShop SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on PrestaShop (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on PrestaShop',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">PrestaShop powers approximately 300,000 stores across 190+ countries</strong>. Full control over URLs, per-product meta tags, and direct structured data injection into Smarty templates. Modules like SEO Expert and Pretty URLs unlock complete URL rewriting for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">70% of PrestaShop stores fail Core Web Vitals on mobile</strong>. Default URLs contain numeric IDs, no XML sitemap or schema.org Product markup exists without third-party modules, and faceted filters create thousands of indexable pages diluting crawl budget.',
    geoAngle:
      'According to Rankwell, PrestaShop stores suffer from an AI citability deficit because schema.org Product markup is absent by default. Configuring the SEO Expert module to inject Product, AggregateRating, and FAQ structured data is the first measurable GEO lever.',
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
    title: 'Common PrestaShop SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized PrestaShop stores. Each one degrades Google rankings and reduces the ability of AI engines to cite your products. A targeted technical audit identifies which ones apply to your store and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'URLs with numeric IDs (/product.php?id_product=847)',
        'Unreadable URLs, lost semantic signal for Google and LLMs',
        'Pretty URLs module: ID removal, rewriting to /product-name/, automatic 301 redirects',
      ],
      [
        'Indexable faceted filters (color, size, price)',
        'Thousands of duplicate pages indexed, crawl budget dilution',
        'Noindex/nofollow on filter combinations, canonical to parent category, Canonical URL module',
      ],
      [
        'Inconsistent canonicals on product combinations',
        'Duplicate content between variants, cannibalization across combination URLs',
        'Canonical set to default product URL (without combination ID), SEO Expert module configuration',
      ],
      [
        'Degraded performance (LCP > 4s on mobile)',
        'Lost mobile rankings, high bounce rate',
        'Native PrestaShop CCC activation (Combine, Compress, Cache), CDN, WebP image compression, optimized PHP 8.2+ hosting',
      ],
      [
        'No native XML sitemap',
        'Orphan pages undiscovered by Google',
        'Google Sitemap module, exclusion of filtered pages and combinations, submission via Google Search Console',
      ],
      [
        'Schema.org Product markup absent by default',
        'No rich snippets (price, reviews, stock), invisible to LLMs',
        'Product, AggregateRating, and Offer schema.org injection in Smarty templates or via the SEO Expert module',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for PrestaShop',
    subtitle: 'A structured 8-step approach to PrestaShop SEO, designed around the platform-specific challenges of this open-source e-commerce CMS.',
    steps: [
      {
        title: 'PrestaShop technical audit',
        subtitle: 'Full analysis of your PrestaShop installation: CMS version, active modules, PHP server configuration, MySQL version, and Core Web Vitals.',
        items: [
          'Module inventory (active, inactive, obsolete, conflicting)',
          'Core Web Vitals measurement (LCP, INP, CLS) on product, category, and home pages',
          'Crawl budget analysis: indexed pages vs parasitic pages (facets, combinations, pagination)',
          'SEO configuration check: friendly URLs, canonicals, robots.txt, sitemap',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your PrestaShop store visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your products and brand on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct e-commerce competitors',
          'Identification of product pages cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Module cleanup and rationalization',
        subtitle: 'Removal of redundant or obsolete modules that slow down the store and create technical conflicts.',
        items: [
          'Deactivation of unused modules that inject JS/CSS on the front-office',
          'Replacement of heavy modules with lightweight alternatives or native PrestaShop 8 features',
          'Hook audit: removal of module calls on critical pages (product, category)',
          'MySQL database cleanup (logs, abandoned carts, expired sessions)',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement through PrestaShop\\\'s native CCC, image compression, and server configuration.',
        items: [
          'PrestaShop CCC activation (Combine, Compress, Cache CSS/JS)',
          'Catalog image conversion to WebP with lazy loading',
          'CDN setup (Cloudflare, KeyCDN) for static assets',
          'Server optimization: PHP 8.2+, OPcache, Redis or Memcached for object caching',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of SEO Expert and Pretty URLs modules to maximize control over URLs, canonicals, and structured data.',
        items: [
          'Pretty URLs enabled: ID removal, rewriting to /product-name/ and /category-name/',
          'Canonicals configured per product, combination, category, and CMS page',
          'Noindex on faceted filter pages, pagination, and internal search',
          'Schema.org markup: Product, AggregateRating, Offer, BreadcrumbList, Organization',
        ],
      },
      {
        title: 'E-commerce content strategy',
        subtitle: 'Creation of content optimized for Google rankings and AI engine citability, adapted to PrestaShop\\\'s specific constraints.',
        items: [
          'Enriched product descriptions with factual data (materials, dimensions, certifications)',
          'Category pages with structured editorial text (H2/H3, FAQ, comparison tables)',
          'E-commerce blog via dedicated module (buying guides, comparisons, usage tips)',
          'Self-contained factual passages designed for LLM extraction on every product page',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from e-commerce sites, price comparison platforms, and specialized media.',
        items: [
          'Backlinks from price comparison sites, e-commerce blogs, and specialized publications',
          'Listings on e-commerce directories and industry marketplaces',
          'Brand mentions in comparison articles and online buying guides',
          'Each external mention strengthens PageRank and AI citability of the store',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by product/category page',
          'Organic traffic segmented by page type (product, category, blog, CMS)',
          'GEO Score: visibility across AI engines on product queries',
          'Core Web Vitals evolution and PrestaShop technical health (modules, PHP, database)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your technical team, your e-commerce agency, or your management.',
    items: [
      {
        id: 1,
        title: 'PrestaShop technical audit report',
        description: 'Full diagnostic of your PrestaShop installation: module inventory (active, obsolete, conflicting), Core Web Vitals by page type, crawl budget, canonicals, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your store and brand in ChatGPT, Perplexity, and Gemini on your target product queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'PrestaShop schema.org kit',
        description: 'Product, AggregateRating, Offer, BreadcrumbList, and Organization markup injected in Smarty templates or configured via the SEO Expert module. Integration guide with screenshots for your technical team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of product pages, category pages, buying guides, and FAQ sections optimized for SEO and GEO. Direct integration into the PrestaShop back-office or via FTP access to Smarty templates.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from price comparison sites, e-commerce blogs, and specialized media relevant to your product sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product and category page, segmented organic traffic, GEO Score evolution, PrestaShop technical health (modules, Core Web Vitals, database), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your PrestaShop store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which site to buy {your product}?", the LLM compiles web sources to formulate its answer. If your PrestaShop product pages lack structured data and extractable factual passages, your store remains invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a PrestaShop store?", the LLM does not cite any agency by name. It provides a list of 5 to 6 selection criteria (PrestaShop experience, mastery of SEO Expert and Pretty URLs modules, knowledge of faceted navigation) and points toward directories. Agencies like ForzaSEO and Keyweo appear in web results but are not natively cited by the LLM. The agency that publishes a structured methodology with measurable results on PrestaShop stores has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a PrestaShop website", the LLM generates a guide covering 8 to 12 points: enable friendly URLs, configure meta tags per product and category, set up canonical tags, create an XML sitemap via module, implement schema.org Product markup, optimize images, improve site speed, and build internal links. No agency is cited. The preferred sources are the official PrestaShop documentation, ThemeBooster, FME Modules blog, and PrestaHero.</p><h4>CMS comparison queries</h4><p>On "PrestaShop vs Shopify for SEO", the LLM produces a comparison table with 6 to 8 criteria. PrestaShop is presented as more flexible (full code access, customizable URLs, granular meta control) but more technical and lacking a native blog. Shopify is presented as simpler with better native performance but locked URL structures (/products/, /collections/). Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common PrestaShop SEO problems", the LLM provides a list of 6 to 8 specific issues: URLs with numeric IDs, indexable faceted filters, inconsistent canonicals, missing meta tags across product pages, no native sitemap, poor site speed from module overload, and missing schema.org markup. Content that structures problem/solution pairs in tables has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a PrestaShop store, the recommended schema.org types are: <code>Product</code> with <code>Offer</code> (price, availability, currency) and <code>AggregateRating</code> (rating, review count) on every product page, <code>BreadcrumbList</code> (navigation), <code>Organization</code> (brand), <code>FAQPage</code> (FAQ and buying guide pages), and <code>ItemList</code> (category pages). The SEO Expert module handles some of these types. For missing types, injection is done in Smarty templates (.tpl). This markup enables Google to display rich snippets (price, stars, stock) and allows LLMs to extract structured product data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your PrestaShop store by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product and editorial content), Legitimacy and Citability (external trust signals, backlinks from comparison sites, brand mentions), and Factual Density (richness of schema.org Product markup, structured data, and technical specifications on product pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: PrestaShop SEO',
    items: [
      {
        question: 'How much does PrestaShop SEO cost?',
        answer:
          'The SEO budget for a PrestaShop store depends on the number of products, catalog complexity (filters, combinations, multilingual), and competition level. At Rankwell, PrestaShop SEO engagements start from $1,800/month for a store with fewer than 500 SKUs, and range from $3,500 to $8,000/month for catalogs with thousands of products, faceted navigation, and multistore management. This budget covers the technical audit, SEO module configuration, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on PrestaShop?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (friendly URLs, canonicals, removal of indexed filter pages). Ranking improvements on competitive product keywords require 4 to 8 months of sustained work. PrestaShop performance optimizations (CCC, CDN, PHP 8.2) produce measurable effects within the first month on Core Web Vitals. Rankwell provides a forecast timeline based on the initial audit of your store.',
      },
      {
        question: 'How do I manage faceted navigation on PrestaShop without harming SEO?',
        answer:
          'Faceted filters (color, size, price, brand) create thousands of indexable URL combinations that dilute crawl budget and generate duplicate content. Rankwell configures a three-layer facet management system: canonical to the parent category, noindex/nofollow on non-strategic combinations, and selective indexing of high-search-volume filters (for example "black leather sofa"). The Canonical URL module and robots.txt configuration complete the setup.',
      },
      {
        question: 'How do I fix a slow PrestaShop store?',
        answer:
          'PrestaShop store slowness typically stems from four causes: too many active modules injecting JavaScript on the front-office, uncompressed catalog images, underpowered shared hosting, and an outdated PHP version. Rankwell starts with a performance audit that identifies the modules responsible for slowdowns, activates PrestaShop\\\'s native CCC (Combine, Compress, Cache), converts images to WebP, configures a CDN, and recommends PHP 8.2+ hosting with OPcache.',
      },
      {
        question: 'How can I get my PrestaShop store cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your PrestaShop store, three conditions must be met: product pages enriched with verifiable factual data (materials, dimensions, certifications, comparisons), complete schema.org Product markup (price, reviews, stock via the SEO Expert module), and brand mentions on third-party sources (price comparison sites, specialized blogs, e-commerce press). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your store citability.',
      },
      {
        question: 'Is PrestaShop still a good CMS for e-commerce SEO in 2026?',
        answer:
          'PrestaShop remains a strong choice for e-commerce SEO in 2026, thanks to its full control over URLs, per-product meta tags, and direct access to Smarty template source code. However, its default configuration requires significant technical work (Pretty URLs, canonicals, schema.org). Alternatives like Shopify offer better native performance but with less SEO flexibility (non-editable URLs). Rankwell adapts its SEO and GEO methodology to the strengths and limitations of each e-commerce platform.',
      },
      {
        question: 'Why choose Rankwell for PrestaShop SEO?',
        answer:
          'Rankwell combines PrestaShop technical SEO expertise (SEO Expert and Pretty URLs module configuration, faceted navigation management, schema.org Product injection in Smarty templates) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for PrestaShop-specific challenges: numeric ID URLs, unmanaged facets, no native blog, degraded performance. The proprietary GEO Score measures your store visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your PrestaShop store?',
    description:
      'Request a free GEO & SEO audit of your PrestaShop store. Our SEO & GEO consultants analyze your modules, URLs, faceted navigation, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
        { label: 'SEO for Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
        { label: 'SEO for Florists', href: '/en/geo-seo-agency/sector/fleuriste' },
      ],
      projets: [
        { label: 'E-commerce SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
      ],
      cms: [
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'Magento SEO', href: '/en/geo-seo-agency/cms/magento' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Crawl Budget', href: '/en/glossary/crawl-budget' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'OpenCart', href: '/en/geo-seo-agency/cms/opencart' },
      { label: 'BigCommerce', href: '/en/geo-seo-agency/cms/bigcommerce' },
    ],
  },
};

export default data;
