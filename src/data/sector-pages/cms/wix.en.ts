/**
 * DATA: CMS Wix Page (EN)
 * Route: /en/geo-seo-agency/cms/wix
 *
 * English version adapted for the international Wix market.
 * Wix: SaaS platform, SEO Setup Checklist (formerly SEO Wiz), native SSR,
 * improved URLs but legacy reputation of poor SEO, Velo (JavaScript),
 * no server access. Content based on LLM auto-test (March 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'wix',
    title: 'Wix SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Wix websites. Technical audit, performance, schema.org, Velo: a complete methodology built to overcome the platform\'s limitations.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Wix' },
    ],
    title: 'Wix SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Proprietary JavaScript bloat, no server access, cryptic image filenames: Wix SEO demands platform-specific expertise that generic agencies overlook. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Wix SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Wix (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Wix',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Wix powers roughly 8% of all CMS-based websites</strong> with 45% builder market share. Native SSR, automatic XML sitemap, SSL, global CDN, WebP conversion, and bulk 301 redirects provide solid foundations for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Wix sites average 3 to 4 seconds load time</strong> due to proprietary JavaScript weight that users cannot modify. No server access, limited robots.txt control, and cryptic image filenames (09a0ab7~mv2.jpg) penalize Google Images rankings.',
    geoAngle:
      'According to Rankwell, Wix sites suffer from an AI citability deficit: LLMs favor rich schema.org markup and factual passages, but no source code control and no third-party SEO plugins limit GEO signals without technical intervention via Velo.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, technical SEO in 2026 carries a dual challenge: ensuring the site is accessible to traditional indexing robots (Googlebot, Bingbot) and to AI engine robots (GPTBot, ClaudeBot, PerplexityBot), because these two families of crawlers have distinct behaviors and their robots.txt directives must be managed separately.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'Learn more about technical SEO',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Wix SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Wix sites. Each one degrades Google rankings and reduces visibility across AI engines. A targeted technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Proprietary JavaScript/CSS weight (not editable)',
        'LCP > 3s on mobile, degraded Core Web Vitals',
        'Optimization of loaded content (WebP images, lazy loading), removal of unused sections and widgets, activation of Wix CDN',
      ],
      [
        'Cryptic image filenames (09a0ab7~mv2.jpg)',
        'Lost semantic signal in Google Images, insufficient alt text',
        'Systematic image renaming before upload, descriptive alt text integrating target keywords',
      ],
      [
        'Limited robots.txt control and no .htaccess',
        'Unable to block parasitic URLs, fine-grained directive management impossible',
        'Use of Wix SEO panel for available rules, noindex on non-strategic pages via page settings',
      ],
      [
        'Velo content (client-side JavaScript) invisible to some crawlers',
        'Pages partially indexed by engines other than Google',
        'seoMarkup injection on custom elements, data loading via datasets (SSR) instead of onReady() code',
      ],
      [
        'Non-optimized pagination on large catalogs',
        'Crawl budget dilution, deep pages not indexed',
        'Thematic silo architecture, contextual internal links to deep pages, canonical tags on paginated pages',
      ],
      [
        'No advanced schema.org markup natively',
        'No rich snippets, invisible to LLMs',
        'JSON-LD injection via Velo (wix-seo API) for Organization, LocalBusiness, FAQPage, BreadcrumbList types',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Wix',
    subtitle: 'A structured 8-step approach to Wix SEO, designed around the platform-specific constraints of a proprietary SaaS builder.',
    steps: [
      {
        title: 'Wix technical audit',
        subtitle: 'Full analysis of your Wix site: SEO Setup Checklist configuration, performance, JavaScript rendering, and Core Web Vitals.',
        items: [
          'Verification of Wix SEO Setup Checklist configuration (titles, meta descriptions, image alt text)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'SSR vs client-side rendering analysis: identification of Velo content not indexed',
          'Inventory of indexed pages vs parasitic pages (tags, filters, pagination)',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Wix site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Cleanup and structure rationalization',
        subtitle: 'Removal of unused pages, sections, and widgets that bloat the site and dilute thematic signals.',
        items: [
          'Removal of draft pages and hidden sections that were never deleted',
          'Cleanup of unused Wix App Market applications (each adds JavaScript weight)',
          'Navigation menu restructuring to reflect thematic silos',
          'Bulk 301 redirect setup via the Wix redirect manager',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement within the constraints of a SaaS platform.',
        items: [
          'Image compression and resizing before upload (Wix converts to WebP automatically)',
          'Native lazy loading activation on elements below the fold',
          'Reduction of sections per page (each section adds DOM weight)',
          'Verification of Wix CDN activation and browser caching',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of Wix SEO options and structured markup injection via Velo.',
        items: [
          'Custom, descriptive URLs for every page, article, and product',
          'XML sitemap verified (exclusion of non-strategic pages via noindex)',
          'Schema.org markup injected via the wix-seo API: Organization, WebSite, BreadcrumbList, FAQPage',
          'Canonical tags and meta robots configured page by page',
        ],
      },
      {
        title: 'Wix content strategy',
        subtitle: 'Structured content creation using the built-in blog and dynamic pages on Wix.',
        items: [
          'Pillar pages + satellite articles organized in a topical cluster via Wix blog categories',
          'Contextual internal linking between articles, static pages, and dynamic collections',
          'Thematic FAQ sections inspired by Google PAA, written as self-contained factual passages',
          'Content loaded via datasets (SSR) to guarantee complete indexation',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sources and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from tech blogs, website builder comparators, and industry publications',
          'Guest posts on high-authority thematic websites',
          'Brand mentions in comparison articles (Wix vs WordPress, Wix vs Squarespace)',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (static pages, blog, collections)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and monitoring of Wix updates impacting SEO',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your team, your Wix webmaster, or your management.',
    items: [
      {
        id: 1,
        title: 'Wix technical audit report',
        description: 'Full diagnostic of your Wix site: SEO Setup Checklist configuration, Core Web Vitals, SSR vs Velo rendering, indexed vs parasitic pages, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Wix schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, injected via the wix-seo API (Velo). Integration guide with ready-to-copy code snippets.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, blog articles, and FAQ sections optimized for SEO and GEO. Direct integration in the Wix editor or via dynamic data collections (Wix CMS).',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from tech blogs, website builder comparators, and industry media relevant to your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, Core Web Vitals monitoring, and assessment of Wix platform updates impacting SEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Wix site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Wix site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Wix site?", the LLM does not recommend any agency by name. It provides a list of 5 to 7 selection criteria (Wix platform experience, SaaS technical SEO skills, client references) and points toward directories like the Wix Marketplace, Clutch, and agency listings. A few niche Wix-focused agencies appear in Google SERPs (1Digital Agency, SEO Locale), but LLMs do not endorse them by name. The agency that publishes a documented methodology with measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Wix website", the LLM generates a structured guide covering 8 to 12 points: custom domain, HTTPS, SEO Setup Checklist, compressed images, active blog, automatic sitemap, meta titles and descriptions, alt text, Google Search Console integration. The preferred sources are the Wix SEO Hub (wix.com/seo/learn), Wix Help Center, Elfsight tutorials, and independent review sites (TechRadar, Tooltester). No agency is cited.</p><h4>CMS comparison queries</h4><p>On "Wix vs WordPress for SEO", the LLM produces a comparison table with 6 to 9 criteria. WordPress is presented as superior in flexibility and performance (load time under 2s vs 3-4s). Wix is recognized for simplicity, built-in tools, and native SSR. The LLM notes that Wix has significantly improved since its pre-2020 Flash and client-side JavaScript era. Sites publishing structured comparisons with measurable benchmarks are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Wix SEO problems", the LLM distinguishes platform limitations (JavaScript weight, robots.txt, cryptic image filenames) from user errors (missing alt text, no blog activity, empty meta descriptions). It lists 8 to 10 issues with fixes for each. Content structured as problem/impact/solution tables or numbered lists has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a Wix site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (blog content). Wix generates basic markup automatically, but advanced types require injection via the wix-seo API (Velo). This complementary markup enables Google to display rich snippets and allows LLMs to extract structured data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Wix site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Wix SEO',
    items: [
      {
        question: 'How much does Wix SEO cost?',
        answer:
          'The SEO budget for a Wix site depends on the number of pages, technical complexity, and competition level on your target keywords. At Rankwell, Wix SEO engagements start from $1,500/month for a business site under 30 pages, and range from $3,000 to $6,000/month for sites with an active blog, dynamic collections, or a Wix eCommerce store. This budget covers the technical audit, optimization within the platform\'s constraints, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Wix?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (page cleanup, image optimization, SEO Setup Checklist configuration). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. On Wix, performance gains are limited by the proprietary code weight, making content strategy and link building even more critical. Rankwell provides a forecast timeline based on the initial audit.',
      },
      {
        question: 'Should I switch from Wix to WordPress for better SEO?',
        answer:
          'Not necessarily. In 2026, Wix offers native SSR, an automatic sitemap, a built-in CDN, automatic WebP conversion, and customizable URLs. For a business site or a blog with fewer than 200 pages, Wix can achieve strong rankings when content and link building are properly managed. However, for an eCommerce catalog exceeding 1,000 products or a project requiring total technical control (robots.txt, .htaccess, server-side caching), WordPress or an open-source solution will be more suitable. Rankwell analyzes your situation before recommending a migration.',
      },
      {
        question: 'How can I reduce the slowness of my Wix site?',
        answer:
          'Wix site slowness stems primarily from three factors: proprietary JavaScript code weight (not editable), uncompressed images uploaded directly, and the accumulation of sections and widgets on a single page. Rankwell addresses the accessible levers: image compression before upload, removal of unused sections and Wix App Market applications, lazy loading activation, and reducing the number of loaded fonts. These optimizations typically save 0.5 to 1.5 seconds on LCP.',
      },
      {
        question: 'How can I get my Wix site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Wix site, three conditions must be met: content rich in verifiable factual data (statistics, comparisons, definitions), schema.org markup injected via the wix-seo API (WebSite, Organization, FAQPage), and brand mentions on trusted third-party sources. The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site\'s citability, despite the platform\'s constraints.',
      },
      {
        question: 'Is Wix still a bad choice for SEO in 2026?',
        answer:
          'No. The reputation of Wix as an SEO-unfriendly platform dates from before 2020, when the platform relied entirely on Flash and then client-side JavaScript. In 2026, Wix offers native SSR, a global CDN, automatic WebP conversion, customizable URLs, and configurable canonical tags. The remaining limitations concern proprietary code weight, the absence of server access, and partial robots.txt control. Rankwell adapts its SEO and GEO methodology to these specific constraints.',
      },
      {
        question: 'Why choose Rankwell for Wix SEO?',
        answer:
          'Rankwell combines SaaS platform technical SEO expertise (performance auditing, schema.org injection via Velo, optimization within Wix constraints) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for Wix-specific challenges: no server access, non-editable JavaScript weight, advanced markup via API. The proprietary GEO Score measures your site\'s visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Wix site?',
    description:
      'Request a free GEO & SEO audit of your Wix site. Our SEO & GEO consultants analyze your configuration, performance, markup, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
        { label: 'SEO for Artisans', href: '/en/geo-seo-agency/sector/artisan' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
        { label: 'Indexation', href: '/en/glossary/indexation' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Jimdo', href: '/en/geo-seo-agency/cms/jimdo' },
      { label: 'Weebly', href: '/en/geo-seo-agency/cms/weebly' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
    ],
  },
};

export default data;
