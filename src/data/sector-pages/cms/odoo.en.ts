/**
 * DATA: CMS Odoo Page (EN)
 * Route: /en/geo-seo-agency/cms/odoo
 *
 * English version adapted for the international Odoo ERP and e-commerce market.
 * Content based on LLM auto-test (March 2026) and global Odoo ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'odoo',
    title: 'Odoo SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Odoo websites. Website Builder, integrated e-commerce, QWeb framework, schema.org injection: a complete methodology built for Odoo.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Odoo' },
    ],
    title: 'Odoo SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Odoo Website Builder includes basic SEO (meta tags, XML sitemap, WebP compression), but lacks advanced schema.org markup, native 301 redirects, and fine-grained control over the QWeb JavaScript framework. Our experts combine technical SEO and GEO to rank your Odoo site on Google and get it cited by AI engines.',
    ctaText: 'Request an Odoo SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Odoo (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Odoo',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Odoo serves over 12 million users worldwide</strong>, combining ERP, CRM, e-commerce, and CMS in one ecosystem. The Website Builder auto-generates an XML sitemap, compresses images to WebP, and includes a built-in SEO analysis tool. The seamless integration between e-commerce and ERP back-office is a genuine asset for a unified <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Odoo Website Builder does not provide advanced schema.org markup by default</strong>: only basic microdata for products, events, and forums. The QWeb JavaScript framework inflates the DOM and degrades Core Web Vitals. No native 301 redirect module, no crawl budget management, no granular canonical tag control. On <strong>Odoo Online (SaaS)</strong>, community module installation is blocked entirely.',
    geoAngle:
      'According to Rankwell, Odoo websites suffer from an AI citability deficit caused by the absence of advanced schema.org (Organization, FAQPage, BreadcrumbList) and low factual density of Website Builder pages. Injecting JSON-LD via community modules or custom Python code in QWeb templates is essential for LLM extraction.',
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
    title: 'Common Odoo SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Odoo websites, especially those deployed on Odoo Online without access to community modules. A technical audit identifies the blockers specific to your version (v16, v17, v18) and deployment mode.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'No advanced schema.org markup by default (only basic product/event microdata)',
        'No FAQ, BreadcrumbList, or Organization rich snippets in SERPs',
        'JSON-LD injection via community module (ta_website_schema) or custom Python code in QWeb templates',
      ],
      [
        'Heavy QWeb JavaScript on widget-rich pages',
        'LCP above 3.5s on mobile, degraded Core Web Vitals scores',
        'Per-page widget audit, removal of non-essential dynamic blocks, lazy loading of non-critical JavaScript modules',
      ],
      [
        'No native 301 redirect module',
        'Link equity loss during URL changes or version migrations',
        'Server-level redirect configuration (Nginx/Apache) or Odoo community redirect module',
      ],
      [
        'Duplicate content between catalog pages and product variants',
        'Internal cannibalization, crawl budget dilution',
        'Canonical tags injected in QWeb templates, variant URLs set to noindex',
      ],
      [
        'Odoo Online blocks community SEO module installation',
        'Cannot add schema.org, redirects, or advanced SEO tooling',
        'Migration to Odoo.sh or On Premise for community module access, or Google Tag Manager injection as a workaround',
      ],
      [
        'Blog and page URLs not optimized by default (/blog/auto-generated-slug)',
        'Lost semantic signal, overly long or non-descriptive URLs',
        'Manual slug customization in the Odoo interface, consistent naming rules, URL rewriting via server configuration',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Odoo',
    subtitle: 'A structured 8-step approach to Odoo SEO, designed around the platform-specific challenges of this all-in-one ERP and e-commerce system.',
    steps: [
      {
        title: 'Odoo technical audit',
        subtitle: 'Full analysis of your Odoo installation: version (v16, v17, v18), deployment mode (Online, SH, On Premise), active modules, and server configuration.',
        items: [
          'Identification of Odoo version and deployment mode (Online, SH, On Premise)',
          'Core Web Vitals measurement (LCP, FID, CLS) with focus on QWeb JavaScript weight',
          'Inventory of active Website, eCommerce, and Blog modules and their rendering impact',
          'Verification of auto-generated XML sitemap, robots.txt, and HTTPS/SSL configuration',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Odoo website visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors (on Odoo and other CMS platforms)',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Module cleanup and rationalization',
        subtitle: 'Removal of unused modules that slow down the site and create conflicts between the Website Builder and other Odoo applications.',
        items: [
          'Deactivation of non-essential Website modules (animations, superfluous dynamic widgets)',
          'PostgreSQL database cleanup (draft pages, archived products still indexed)',
          'Theme rationalization: removal of unused CSS/JS assets from Odoo themes',
          'Conflict verification between e-commerce, blog, and website modules',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Reducing QWeb JavaScript weight and improving load speed for the Odoo Python/PostgreSQL architecture.',
        items: [
          'Server cache configuration (Nginx reverse proxy, static asset caching)',
          'PostgreSQL query optimization for high-volume catalog pages',
          'Product image compression and lazy loading in the e-commerce module',
          'CDN setup for static assets (CSS, JS, images)',
        ],
      },
      {
        title: 'Advanced Odoo SEO configuration',
        subtitle: 'Full SEO setup beyond native capabilities: schema.org, redirects, and canonical tags via community modules or custom code.',
        items: [
          'Installation and configuration of ta_website_schema module for JSON-LD markup (Organization, BreadcrumbList, FAQPage, Product)',
          '301 redirect setup via server configuration or community redirect module',
          'Canonical tag injection in QWeb templates for catalog pages',
          'URL slug customization for pages, blog posts, and product listings',
        ],
      },
      {
        title: 'Odoo content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI citability, integrated directly into the Blog module and Website pages.',
        items: [
          'Pillar pages and blog articles organized in topical clusters via the Odoo Blog module',
          'Internal linking between product pages, category pages, and blog articles',
          'Thematic FAQ pages with FAQPage schema injected via JSON-LD',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from ERP-specialized sites, e-commerce media, and industry publications.',
        items: [
          'Backlinks from Odoo-specialized blogs, partner directories, and ERP comparator sites',
          'Guest publications on e-commerce and business management media',
          'Brand mentions in ERP/CMS comparison guides (Odoo vs WordPress, Odoo vs Shopify)',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and Odoo technical health indicators.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (pages, blog, product listings)',
          'GEO Score: visibility evolution across AI engines',
          'Core Web Vitals tracking and Odoo server performance monitoring (Python response time, PostgreSQL load)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your Odoo technical team, your integrator, or your management.',
    items: [
      {
        id: 1,
        title: 'Odoo technical audit report',
        description: 'Full diagnostic of your Odoo installation: version, deployment mode (Online, SH, On Premise), active modules, Core Web Vitals, QWeb JavaScript weight, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your website and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Odoo schema.org kit',
        description: 'JSON-LD markup for Organization, BreadcrumbList, FAQPage, and Product configured via the ta_website_schema community module or injected as custom Python code in QWeb templates. Deployment guide for your Odoo integrator.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, blog articles, and FAQ content optimized for SEO and GEO. Direct integration into the Odoo Blog module and Website Builder, with schema.org markup injected for each piece of content.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from Odoo-specialized blogs, certified partner directories, ERP comparator sites, and e-commerce media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, Odoo technical health (server response time, Core Web Vitals, active modules), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Odoo website in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which ERP with a good CMS for e-commerce?", the LLM compiles web sources to formulate its answer. If your Odoo website lacks exploitable structured data and verifiable factual passages, it is invisible in this channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for an Odoo website?", the LLM names several organizations: Captivea (Odoo Gold Partner), iCreative Technologies (certified partner, 80+ Odoo websites), CandidRoot (Silver Partner), Webkul, and the official Odoo SEO service by Odoo S.A. Unlike WordPress or Shopify queries, the smaller Odoo ecosystem allows the LLM to identify specialized actors by name. All cited entities are Odoo integrators, not SEO specialists. None mention the GEO dimension or AI visibility as a service.</p><h4>Technical queries</h4><p>On "how to improve SEO on an Odoo website", the LLM generates a 7 to 10 point guide centered on native features: meta tags via the Website Builder SEO panel, built-in keyword analysis tool, automatic WebP compression, H1/H2 heading structure, alt text, responsive Bootstrap framework, XML sitemap, and Google Analytics integration. Preferred sources are the official Odoo documentation (v15 through v19), iCreative Technologies, Webkul, Aktiv Software, and Nerithonx. The Odoo-specific limitations (QWeb JavaScript weight, no advanced schema.org, deployment-mode restrictions) are not addressed.</p><h4>CMS comparison queries</h4><p>On "Odoo vs WordPress for SEO", the LLM produces a balanced comparison: WordPress is superior in SEO flexibility (Yoast, RankMath, thousands of plugins), Odoo is superior in backend integration (ERP, CRM, native e-commerce). Odoo includes a keyword tool and automatic URL redirect handling, while WordPress is susceptible to plugin bloat and hosting-dependent performance. The comparison is presented as a tie. The Odoo Apps Store is noted as significantly smaller. Sources include Seahawk Media, OdooExperts.nl, Much Consulting, ERPgap, and Software Advice.</p><h4>Problem queries</h4><p>On "common Odoo SEO problems", the LLM identifies URL parameter duplication (DUST problem), excessive redirects from dynamic URL structures, 403/404 errors, heading structure issues, and missing canonical tags on filtered URLs. It references the Odoo Community Forum, the zeroheure/odoo-seo GitHub repository, and Webkul blog. The LLM does not mention advanced limitations: no schema.org beyond basic microdata, QWeb rendering overhead, or the three-tier deployment restriction on community modules. Content that details these specific technical gaps has high extraction potential.</p>',
    structuredData:
      'For an Odoo website, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on activity), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Product</code> and <code>Offer</code> (e-commerce product pages). Odoo natively implements basic microdata for products and events, but not advanced JSON-LD. Installing the ta_website_schema community module or injecting JSON-LD directly into QWeb templates is required to cover all recommended types.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Odoo website by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions on ERP comparator sites), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Odoo SEO',
    items: [
      {
        question: 'How much does Odoo SEO cost?',
        answer:
          'The SEO budget for an Odoo website depends on the deployment mode (Online, SH, On Premise), the number of product pages, and the competition level in your sector. At Rankwell, Odoo SEO engagements start from $1,800/month for a brochure website built with Odoo Website Builder, and range from $3,500 to $6,000/month for e-commerce sites with large catalogs requiring custom Python development. This budget covers the technical audit, schema.org configuration, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Odoo?',
        answer:
          'Technical fixes (QWeb JavaScript optimization, image compression, 301 redirect setup) produce measurable effects within 2 to 4 months. Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Server performance optimizations (Nginx caching, PostgreSQL query tuning) show results within the first month. Rankwell provides a forecast timeline adapted to your Odoo version and hosting configuration.',
      },
      {
        question: 'Should I migrate from Odoo Online to Odoo.sh for SEO?',
        answer:
          'Odoo Online restricts community SEO module installation. If your website requires advanced schema.org markup, 301 redirects, or QWeb code optimizations, migrating to Odoo.sh (or On Premise) is recommended. Odoo.sh allows community module installation while delegating server management to Odoo S.A. Rankwell evaluates the cost-benefit ratio of this migration based on your SEO objectives and traffic volume.',
      },
      {
        question: 'How do I improve the speed of my Odoo website?',
        answer:
          'Odoo website slowness typically stems from three causes: too many dynamic QWeb widgets inflating the DOM, unoptimized product images despite native WebP compression, and slow PostgreSQL queries on large catalogs. Rankwell starts with a performance audit that identifies the widgets responsible for slowness, configures Nginx server caching, optimizes database queries, and sets up a CDN for static assets.',
      },
      {
        question: 'How can I get my Odoo website cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Odoo website, three conditions are required: content rich in verifiable factual data (figures, comparisons, technical specifications), complete schema.org markup (injected via community module or custom Python code in QWeb templates), and brand mentions on third-party sources (ERP comparator sites, Odoo blogs, specialized press). The Rankwell GEO Score measures these three dimensions and identifies the priority levers.',
      },
      {
        question: 'Is Odoo a good choice for e-commerce SEO in 2026?',
        answer:
          'Odoo provides solid native e-commerce SEO (sitemap, meta tags, customizable URLs, WebP compression) and the unique advantage of total integration between CMS, e-commerce module, and ERP. However, its SEO module ecosystem is limited compared to WordPress/WooCommerce or Shopify, and advanced schema.org markup requires specific development. Rankwell adapts its SEO and GEO methodology to leverage Odoo strengths while compensating for its limitations.',
      },
      {
        question: 'Why choose Rankwell for Odoo SEO?',
        answer:
          'Rankwell combines Odoo technical SEO expertise (QWeb optimization, Python/PostgreSQL server configuration, schema.org injection, community module setup) with the GEO dimension that standard Odoo integrators do not offer. Our 8-step methodology covers the challenges specific to Odoo: Online/SH/On Premise deployment modes, JavaScript framework performance, integrated e-commerce. The proprietary GEO Score measures your website visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Odoo website?',
    description:
      'Request a free GEO & SEO audit of your Odoo website. Our SEO & GEO consultants analyze your installation, modules, server performance, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'SEO for SaaS', href: '/en/geo-seo-agency/sector/saas' },
        { label: 'SEO for Industry', href: '/en/geo-seo-agency/sector/industrie' },
      ],
      projets: [
        { label: 'E-commerce Website SEO', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Migration SEO', href: '/en/geo-seo-agency/project/migration' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
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
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'HubSpot', href: '/en/geo-seo-agency/cms/hubspot' },
      { label: 'Salesforce', href: '/en/geo-seo-agency/cms/salesforce' },
    ],
  },
};

export default data;
