/**
 * DATA: CMS Salesforce Commerce Cloud Page (EN)
 * Route: /en/geo-seo-agency/cms/salesforce
 *
 * English version adapted for the international Salesforce Commerce Cloud (SFCC) market.
 * SFCC (ex-Demandware): enterprise SaaS e-commerce platform. Business Manager,
 * SFRA (Storefront Reference Architecture), ISML templates, URL rules, multi-site
 * international, Einstein Copilot. GMV-based pricing (1 to 3%).
 * Content based on LLM auto-test (March 2026) and global SFCC ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'salesforce',
    title: 'Salesforce Commerce Cloud SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Salesforce Commerce Cloud websites. Business Manager, SFRA, URL rules, multi-site international: a complete methodology built for SFCC.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Salesforce Commerce Cloud' },
    ],
    title: 'Salesforce Commerce Cloud SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Soft 404s, index bloat from parameterized URLs, unoptimized ISML templates: Salesforce Commerce Cloud SEO demands platform-specific expertise that generalist agencies cannot deliver. Our experts combine SFCC technical SEO and GEO to rank your store on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Salesforce SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Salesforce Commerce Cloud (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Salesforce Commerce Cloud',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Over 13,000 e-commerce sites worldwide run on Salesforce Commerce Cloud</strong>. Business Manager provides complete SEO control: customizable URL rules, segmented XML sitemaps, rule-based meta tags, and native multi-site/multi-language management with built-in hreflang. SFRA delivers a modern front-end with native 301 redirects, a robust base for an enterprise <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">60 to 70% of SEO time during an SFRA launch is spent on 301 redirects</strong>. ISML templates require certified SFCC developers, and parameterized search generates distinct URLs for every filter combination, causing massive index bloat. Non-existent pages often redirect to the homepage instead of returning a 404, confusing Googlebot. GMV-based pricing (<strong>1 to 3%</strong>) makes the platform expensive.',
    geoAngle:
      'According to Rankwell, SFCC sites hold a structural GEO advantage through their multi-site architecture enabling localized factual content per market. But this citability remains theoretical if schema.org Product and Organization markup is not injected via ISML templates and category pages retain generic meta tags.',
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
    title: 'Common Salesforce Commerce Cloud SEO problems and solutions',
    interpretation:
      'These issues affect the majority of SFCC sites that have not been audited by an external SEO specialist. Each one degrades Google rankings and reduces AI engine visibility. A technical audit centered on Business Manager and ISML templates identifies the priority corrections.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Index bloat from parameterized search (each filter combination generates a distinct URL)',
        'Crawl budget dilution, thousands of unnecessary pages indexed',
        'Canonical configuration in Business Manager, noindex on sort and filter parameter URLs, XML sitemap cleanup',
      ],
      [
        'Soft 404s: non-existent pages redirected to the homepage',
        'Googlebot fails to detect errors, ghost pages remain in the index',
        'SFRA error pipeline configuration to return an explicit HTTP 404 status code with a dedicated error page',
      ],
      [
        'Generic or duplicate meta tags on category pages',
        'Internal cannibalization, low CTR in SERPs',
        'Activation of rule-based meta tags in Business Manager, title and description templates per page type',
      ],
      [
        'Unoptimized ISML templates (JavaScript bloat, slow rendering)',
        'LCP above 4s, loss of mobile rankings, elevated bounce rate',
        'ISML template audit, deferred loading of non-critical scripts, Salesforce CDN cache optimization',
      ],
      [
        'Missing hreflang x-default on multi-country sites',
        'Competition between local versions in SERPs, loss of international traffic',
        'Hreflang configuration via Business Manager with x-default pointing to the primary version, URL rules audit per locale',
      ],
      [
        'Absence of enriched schema.org Product markup',
        'No product rich snippets (price, reviews, stock), invisibility to LLMs',
        'Schema.org Product, BreadcrumbList, and Organization injection via ISML templates or SFCC Page Designer',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Salesforce Commerce Cloud',
    subtitle: 'A structured 8-step approach to SFCC SEO, designed around the platform-specific constraints of an enterprise e-commerce system.',
    steps: [
      {
        title: 'Salesforce Commerce Cloud technical audit',
        subtitle: 'Full analysis of your SFCC configuration: Business Manager, URL rules, ISML templates, CDN cache, and Core Web Vitals.',
        items: [
          'Review of Business Manager configuration (URL rules, sitemaps, robots.txt, meta tags)',
          'Core Web Vitals measurement (LCP, FID, CLS) on product, category, and search pages',
          'Crawl budget analysis: indexed pages vs wasted pages (parameterized URLs, soft 404s, duplicates)',
          'SFRA configuration verification: version, pipelines, custom controllers',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your SFCC site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your products and brand on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors in your e-commerce market',
          'Identification of product pages and categories cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Index cleanup and URL rationalization',
        subtitle: 'Removal of parasitic URLs generated by parameterized search and SFCC navigation filters.',
        items: [
          'Identification and deindexation of sort, filter, and pagination parameter URLs',
          'Soft 404 correction: SFRA error pipeline returning a true 404 status code',
          'XML sitemap cleanup: exclusion of non-strategic pages, segmentation by content type',
          'Canonical tag implementation on internal search URLs and product variants',
        ],
      },
      {
        title: 'SFCC performance optimization',
        subtitle: 'Page speed improvement via Salesforce CDN cache, image compression, and ISML template optimization.',
        items: [
          'Optimal configuration of the platform-integrated CDN cache',
          'Product image conversion to WebP with lazy loading',
          'ISML template audit: JavaScript bloat removal, deferred script loading',
          'CSS/JS minification and critical rendering path optimization on mobile',
        ],
      },
      {
        title: 'Advanced SEO configuration in Business Manager',
        subtitle: 'Complete Business Manager setup to maximize control over URLs, meta tags, sitemaps, and redirects.',
        items: [
          'Optimized URL rules per category, product, and brand (under 70 characters, name attribute)',
          'Rule-based meta tags for category and product pages',
          'Segmented XML sitemaps by content type with differentiated priorities',
          'Schema.org markup: Product, Organization, BreadcrumbList, FAQPage via ISML or Page Designer',
        ],
      },
      {
        title: 'SFCC e-commerce content strategy',
        subtitle: 'Structured content creation for Google rankings and AI citability, integrated via Page Designer.',
        items: [
          'Enriched guide and category pages organized in semantic content clusters',
          'Product pages with factual descriptions, technical specs, and comparisons',
          'Thematic FAQ pages inspired by Google PAA, designed for LLM extraction',
          'Localized content per market (SFCC native multi-site) with consistent hreflang',
        ],
      },
      {
        title: 'Authority and e-commerce link building',
        subtitle: 'Domain authority development through backlinks from specialized retail media and brand mentions extractable by LLMs.',
        items: [
          'Backlinks from e-commerce comparators, retail media outlets, and specialized blogs',
          'Guest publications on high-authority sites in your industry',
          'Brand mentions in buying guides and product ranking articles',
          'Each external mention strengthens Domain Rating and AI citability of your product pages',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword, product page, and category page',
          'Organic traffic segmented by page type and by market (multi-site)',
          'GEO Score: AI engine visibility by product category',
          'Core Web Vitals evolution and SFCC technical health (index bloat, soft 404s, CDN cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your SFCC technical team, your marketing team, or your management.',
    items: [
      {
        id: 1,
        title: 'SFCC technical audit report',
        description: 'Full diagnostic of your Salesforce Commerce Cloud configuration: Business Manager (URL rules, sitemaps, meta tags), ISML templates, Core Web Vitals, crawl budget, soft 404s, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target product queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Salesforce Commerce Cloud schema.org kit',
        description: 'Product, Organization, BreadcrumbList, and FAQPage markup designed for SFCC, with injection specifications via ISML templates or Page Designer. Integration guide for your SFCC development team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of product pages, category descriptions, and buying guides optimized for SEO and GEO. Integration via SFCC Page Designer or delivery of specifications for your ISML developers.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from e-commerce comparators, retail media outlets, and specialized blogs in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by product page and category, organic traffic segmented by market (multi-site), GEO Score evolution, SFCC technical health (index bloat, soft 404s, CDN cache), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Salesforce Commerce Cloud site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a buyer asks ChatGPT "which e-commerce site should I recommend for [your product category]?", the LLM compiles web sources to formulate its answer. If your product pages and category pages do not appear in any cited source, your SFCC store is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Salesforce Commerce Cloud website?", the LLM does not cite any agency specializing in SFCC-specific SEO. It references the Salesforce partner ecosystem and directories such as Clutch and the AppExchange. Named entities (NOVOS, Resignal, Foxglove Partner) are presented as implementation partners, not SEO specialists. The LLM lists 5 to 7 selection criteria centered on SFCC expertise: Business Manager mastery, SFRA knowledge, multi-site international management. An agency publishing a detailed methodology with SFCC case studies and a GEO/AI dimension would be positioned to become the reference.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Salesforce Commerce Cloud website", the LLM generates a guide of 8 to 12 points centered on Business Manager and SFRA: URL rules, segmented XML sitemaps, rule-based meta tags, robots.txt, 301 redirects. It states that 60 to 70% of SEO time during an SFRA launch is spent on redirections. Sources cited include official Salesforce documentation, NOVOS, Resignal, Foxglove Partner, and Octiv Digital. No agency is cited as a recognized SEO specialist.</p><h4>CMS comparison queries</h4><p>On "Salesforce Commerce Cloud vs Shopify for SEO", the LLM produces a comparison table with 6 to 8 criteria. SFCC is presented as the platform offering complete technical control (customizable URLs, native multi-site, Einstein Copilot) but with high cost (1 to 3% of GMV) and complexity requiring certified developers. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Problem queries</h4><p>On "common Salesforce Commerce Cloud SEO problems", the LLM provides a list of 8 to 10 platform-specific issues: soft 404s, index bloat from parameterized URLs, generic meta tags, oversized sitemaps, missing hreflang x-default. Sources include Shogun, SALT.agency, FTF Agency, and Portent. Content structured as problem-impact-solution tables has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a Salesforce Commerce Cloud site, the recommended schema.org types are: <code>Product</code> (product pages with price, reviews, availability), <code>Organization</code> (merchant entity), <code>BreadcrumbList</code> (category > subcategory > product navigation), <code>FAQPage</code> (FAQ pages), <code>Offer</code> (commercial offers and promotions). Injection is done via ISML templates or SFCC Page Designer. This markup enables Google to display product rich snippets and LLMs to extract structured data for their recommendation responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Salesforce Commerce Cloud site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of product and category content), Legitimacy and Citability (external trust signals, backlinks, mentions in retail media), and Factual Density (richness of schema.org Product markup, structured data, and named entities in product pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Salesforce Commerce Cloud SEO',
    items: [
      {
        question: 'How much does Salesforce Commerce Cloud SEO cost?',
        answer:
          'The SEO budget for an SFCC site depends on the number of products, the number of storefronts (multi-site international), and ISML template complexity. At Rankwell, Salesforce Commerce Cloud SEO engagements start from $3,500/month for a single-country site with fewer than 5,000 products, and range from $7,000 to $14,000/month for multi-site international configurations with tens of thousands of SKUs. This budget covers the Business Manager audit, template optimization, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Salesforce Commerce Cloud?',
        answer:
          'Technical fixes (index bloat cleanup, soft 404 correction, canonical configuration) produce measurable effects within the first month. Ranking improvements on competitive e-commerce keywords require 4 to 8 months of sustained work. Resolving crawl budget issues caused by SFCC parameterized URLs delivers measurable gains within the first 2 to 4 weeks. Rankwell provides a forecast timeline based on the initial Business Manager audit.',
      },
      {
        question: 'Should I migrate to SFRA to improve my SFCC site SEO?',
        answer:
          'Migrating to SFRA (Storefront Reference Architecture) improves the technical SEO foundation through a more modern and performant front-end architecture. However, 60 to 70% of the migration time is spent on 301 redirects: every existing URL must be mapped to its new version to prevent ranking losses. Rankwell audits your current configuration, evaluates the potential SEO gain from an SFRA migration, and produces the complete redirect plan if the migration is justified.',
      },
      {
        question: 'How do I reduce index bloat on Salesforce Commerce Cloud?',
        answer:
          'Index bloat on SFCC primarily comes from parameterized search and navigation filter URLs: each filter combination creates a distinct URL. Rankwell configures canonicals in Business Manager, applies noindex on sort and filter URLs, cleans the XML sitemap by excluding non-strategic pages, and sets up monitoring to detect new parasitic URLs generated by catalog updates.',
      },
      {
        question: 'How can I get my SFCC products cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Salesforce Commerce Cloud product pages, three conditions are necessary: product descriptions rich in verifiable factual data (technical specs, comparisons, materials), complete schema.org Product markup injected via ISML templates (price, reviews, availability), and brand mentions on third-party sources (comparators, retail press, buying guides). The Rankwell GEO Score measures these three dimensions and identifies the priority levers.',
      },
      {
        question: 'Is Salesforce Commerce Cloud suited for SEO in 2026?',
        answer:
          'SFCC offers complete technical SEO control (URL rules, segmented sitemaps, rule-based meta tags, native multi-site) and benefits from Einstein Copilot for content generation. However, the platform remains complex: ISML templates require certified SFCC developers, SEO documentation is sparse, and GMV-based pricing is high. SFCC suits enterprise merchants with dedicated technical budgets. Rankwell adapts its SEO and GEO methodology to the specific constraints of the platform.',
      },
      {
        question: 'Why choose Rankwell for Salesforce Commerce Cloud SEO?',
        answer:
          'Rankwell combines SFCC technical SEO expertise (Business Manager audit, ISML optimization, URL rules, multi-site international) with the GEO dimension that the vast majority of SEO agencies have not yet integrated. Our 8-step methodology addresses the challenges specific to Salesforce Commerce Cloud: index bloat, soft 404s, generic meta tags, hreflang multi-site configuration. The proprietary GEO Score measures your product visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Salesforce Commerce Cloud site?',
    description:
      'Request a free GEO & SEO audit of your SFCC site. Our SEO & GEO consultants analyze your Business Manager configuration, your ISML templates, your multi-site international setup, and your AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for Fashion', href: '/en/geo-seo-agency/sector/mode' },
        { label: 'SEO for Retail', href: '/en/geo-seo-agency/sector/retail' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'International SEO', href: '/en/geo-seo-agency/project/international' },
      ],
      cms: [
        { label: 'Magento SEO', href: '/en/geo-seo-agency/cms/magento' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'BigCommerce SEO', href: '/en/geo-seo-agency/cms/bigcommerce' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'International SEO', href: '/en/glossary/seo-international' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'BigCommerce', href: '/en/geo-seo-agency/cms/bigcommerce' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'HubSpot', href: '/en/geo-seo-agency/cms/hubspot' },
      { label: 'Odoo', href: '/en/geo-seo-agency/cms/odoo' },
    ],
  },
};

export default data;
