/**
 * DATA: CMS Gatsby Page (EN)
 * Route: /en/geo-seo-agency/cms/gatsby
 *
 * English version adapted for the international Gatsby market.
 * Gatsby = React SSG framework, acquired by Netlify in 2023. Gatsby Cloud shut down in 2024.
 * GraphQL data layer, gatsby-plugin-image, long builds, plugin ecosystem stagnation.
 * Content based on LLM auto-test (March 2026) and global Gatsby/Jamstack ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'gatsby',
    title: 'Gatsby SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Gatsby websites. SSG audit, GraphQL data layer, gatsby-plugin-image, build optimization, schema.org: a complete methodology built for Gatsby.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Gatsby' },
    ],
    title: 'Gatsby SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Build times exceeding 30 minutes on large sites, unmaintained plugins since Gatsby Cloud shut down, no Incremental Static Regeneration: SEO on a Gatsby site demands dual expertise in static site generation and React development. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Gatsby SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Gatsby (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Gatsby',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Gatsby powers ~43,000 websites and holds 5.9% of the SSG market</strong>. Full HTML pre-rendering at build time makes every page immediately crawlable without JavaScript execution. The gatsby-plugin-image pipeline (WebP, lazy loading, blur-up) directly improves Core Web Vitals, forming a strong foundation for <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Gatsby builds exceed 30 minutes for sites with 5,000+ pages</strong> with no native ISR. Since the Gatsby Cloud shutdown (2024), framework updates have slowed and plugins like gatsby-plugin-react-helmet remain unmaintained. React <a href="/en/glossary/core-web-vitals" class="text-rw-blue hover:underline">hydration mismatches</a> cause content flashes and elevated CLS.',
    geoAngle:
      'According to Rankwell, Gatsby static HTML is immediately readable by GPTBot and PerplexityBot without any JavaScript barrier. This AI citability advantage only materializes when schema.org is manually injected into React components and factual passages are structured for LLM extraction.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, technical SEO in 2026 carries a dual challenge: ensuring site accessibility for traditional indexing robots (Googlebot, Bingbot) and for AI engine robots (GPTBot, ClaudeBot, PerplexityBot), because these two families of crawlers behave differently and their robots.txt directives must be managed separately.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'Learn more about technical SEO',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Gatsby SEO problems and solutions',
    interpretation:
      'These problems affect the majority of Gatsby sites in production, particularly those still running Gatsby v4 or relying on unmaintained plugins. Each one degrades Google rankings and reduces AI citability. A targeted technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Build times exceeding 30 minutes on sites with 5,000+ pages',
        'Delays in content publication, outdated pages remain indexed for hours',
        'GraphQL query optimization, node count reduction, parallelized builds, migration to Gatsby v5 Deferred Static Generation (DSG)',
      ],
      [
        'gatsby-plugin-react-helmet deprecated (replaced by Gatsby Head API in v4.19+)',
        'Missing or duplicate meta tags, title and description absent on some pages',
        'Migration to Gatsby Head API: export a Head component in each page template, remove react-helmet dependency',
      ],
      [
        'No schema.org markup by default',
        'No rich snippets, unstructured data for LLMs',
        'JSON-LD injection (WebSite, Organization, BreadcrumbList, FAQPage) via the Head component or a dedicated React SEO component',
      ],
      [
        'React hydration mismatches: content flash and elevated CLS',
        'Cumulative Layout Shift > 0.1, Core Web Vitals penalty on mobile',
        'Deferred loading of dynamic components (React.lazy + Suspense), inline critical CSS, client-side JavaScript reduction',
      ],
      [
        'Unmaintained plugins since Gatsby Cloud shutdown (2024)',
        'Security vulnerabilities, incompatibilities with recent Node.js and React versions',
        'Plugin ecosystem audit, replacement of abandoned plugins with actively maintained alternatives or custom code',
      ],
      [
        'No ISR: every content change triggers a full rebuild',
        'Stale content in CDN cache, publication delays of 20 to 40 minutes',
        'DSG activation in Gatsby v5, incremental builds via Netlify Build Plugins, or evaluation of migration to Next.js ISR',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Gatsby',
    subtitle: 'A structured 8-step approach designed around the technical specifics of Gatsby and the React SSG ecosystem.',
    steps: [
      {
        title: 'Gatsby technical audit',
        subtitle: 'Analysis of the Gatsby architecture: framework version, GraphQL data layer, installed plugins, build times, and Core Web Vitals.',
        items: [
          'Plugin inventory (active, deprecated, unmaintained since Gatsby Cloud shutdown)',
          'Core Web Vitals measurement (LCP, INP, CLS): hydration mismatch analysis on mobile and desktop',
          'GraphQL data layer audit: slow queries, excessive nodes, unoptimized data sources',
          'Gatsby version check (v4 vs v5), Node.js and React compatibility assessment',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Gatsby site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Verification that static HTML is accessible to GPTBot and ClaudeBot (not blocked by robots.txt)',
        ],
      },
      {
        title: 'Plugin ecosystem cleanup',
        subtitle: 'Removal or replacement of deprecated or abandoned Gatsby plugins that slow builds and create compatibility issues.',
        items: [
          'Migration from gatsby-plugin-react-helmet to Gatsby Head API',
          'Replacement of obsolete image transformation plugins with gatsby-plugin-image',
          'Removal of unused source plugins that inflate GraphQL query times',
          'Update of critical dependencies (gatsby-plugin-sharp, gatsby-transformer-sharp)',
        ],
      },
      {
        title: 'Build and performance optimization',
        subtitle: 'Reduction of build times and improvement of page load speed for generated static pages.',
        items: [
          'GraphQL query optimization (filters, limits, shared fragments)',
          'Deferred Static Generation (DSG) activation in Gatsby v5 for low-traffic pages',
          'CDN configuration (Netlify, Cloudflare) and cache header setup',
          'Systematic image conversion to WebP/AVIF via gatsby-plugin-image with blur-up placeholders',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full SEO on-page setup via React components and the gatsby-node.js file.',
        items: [
          'Head component with title, meta description, canonical, and Open Graph tags per template',
          'XML sitemap via gatsby-plugin-sitemap (exclusion of non-strategic pages)',
          'robots.txt via gatsby-plugin-robots-txt with specific directives for GPTBot and ClaudeBot',
          'Schema.org markup injected as JSON-LD: WebSite, Organization, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Content strategy for Gatsby',
        subtitle: 'Production of content structured for Google rankings and AI citability, integrated via the GraphQL data layer.',
        items: [
          'Pillar pages + satellite articles sourced from a headless CMS (Contentful, Strapi, Markdown)',
          'Internal linking managed via GraphQL queries and React navigation components',
          'Thematic FAQ sections inspired by Google PAA, integrated as content types in the data layer',
          'Self-contained factual passages embedded in each page for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized tech sites and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from tech blogs, Jamstack platforms, and React/Gatsby community publications',
          'Guest posts on high-authority thematic websites (web development, static site generators)',
          'Brand mentions in framework comparison articles (Gatsby, Next.js, Astro, Hugo)',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and Gatsby technical health.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (static pages, articles, landing pages)',
          'GEO Score: visibility across AI engines (ChatGPT, Perplexity, Gemini)',
          'Build time monitoring, Core Web Vitals tracking, and Gatsby plugin compatibility checks',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your React developers, your technical team, or your management.',
    items: [
      {
        id: 1,
        title: 'Gatsby technical audit report',
        description: 'Full diagnostic of your Gatsby architecture: plugin inventory (active, deprecated, abandoned), build times, slow GraphQL queries, Core Web Vitals, React hydration issues, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Gatsby schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific schema.org types injected as JSON-LD in the Gatsby Head component or a dedicated React SEO component. Integration guide with code snippets for your developers.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ content optimized for SEO and GEO. Integration via the headless CMS connected to the Gatsby GraphQL data layer (Contentful, Strapi, Markdown) or by pull request on the Git repository.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from tech blogs, Jamstack platforms, React community publications, and media specialized in your industry. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic segmented by content type, GEO Score evolution, Gatsby technical health (build times, plugin status, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Gatsby site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which React framework should I choose for SEO?", the LLM compiles web sources to formulate its answer. If your Gatsby site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Gatsby site?", the LLM does not cite any agency by name. It explains that Gatsby is a React SSG framework and provides a list of 5 to 6 selection criteria: experience with SSG and React, mastery of the GraphQL data layer, knowledge of gatsby-plugin-image and SEO plugins, ability to optimize build times. Pagepro and SALT.agency appear in web search results but are not natively cited in LLM-generated responses. The market is essentially empty for a Gatsby-specific SEO agency.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Gatsby website", the LLM generates a guide covering 8 to 10 points: Gatsby Head API (replacing gatsby-plugin-react-helmet), gatsby-plugin-sitemap, gatsby-plugin-image, JSON-LD structured data, robots.txt, trailing slash fixes, Core Web Vitals, and Google Search Console setup. No agency is cited. The preferred sources are the official Gatsby documentation, DigitalOcean, Clean Commit, and ASPER BROTHERS.</p><h4>Framework comparison queries</h4><p>On "Gatsby vs Next.js for SEO in 2026", the LLM produces a comparison of 6 to 8 criteria. Gatsby is presented as superior for purely static sites but penalized by long build times, no ISR, and ecosystem stagnation since Gatsby Cloud shutdown. Next.js dominates for dynamic content and large-scale applications. Sources favored are Pagepro, Naturaily, Clean Commit, and Hygraph comparison articles.</p><h4>Technical problem queries</h4><p>On "common Gatsby SEO problems", the LLM provides 6 to 8 specific issues: duplicate pages from gatsby-plugin-filesystem, missing meta tags after react-helmet migration, 301 redirect chains with Netlify, orphan pages from src/pages, trailing slash inconsistencies, hydration mismatches causing CLS. Content structured as problem/solution tables has the highest extraction potential. Sources are BloggingForDevs, Clean Commit, and Galaxy Web Links.</p>',
    structuredData:
      'For a Gatsby site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (editorial content). Gatsby has no built-in schema.org support: JSON-LD must be manually injected in the Head component (Gatsby v4.19+) or via a dedicated React SEO component. This markup enables Google rich snippets and provides LLMs with structured data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Gatsby site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of static HTML content), Legitimacy and Citability (external trust signals, backlinks from tech sources, mentions in Jamstack and React publications), and Factual Density (richness of JSON-LD markup and named entities across pages). Gatsby sites benefit from fully crawlable static HTML, but their GEO Score stagnates when JSON-LD and factual passages are not integrated into React components.',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Gatsby SEO',
    items: [
      {
        question: 'How much does Gatsby SEO cost?',
        answer:
          'The SEO budget for a Gatsby site depends on the number of pages, the complexity of the GraphQL data layer, and the state of the installed plugin ecosystem. At Rankwell, Gatsby SEO engagements start from $2,000/month for a site under 100 pages, and range from $3,500 to $6,000/month for larger sites requiring build optimization, plugin migration, or a schema.org markup overhaul. This budget covers the technical audit, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Gatsby?',
        answer:
          'Technical fixes (migration to Gatsby Head API, build optimization, plugin cleanup) produce measurable effects within the first month in Search Console. Ranking on competitive keywords requires 4 to 8 months of sustained work on content and link building. Performance improvements (Core Web Vitals, reduced build times) show results within the first weeks. Rankwell provides a forecast timeline based on the initial audit of your Gatsby architecture.',
      },
      {
        question: 'Should I migrate from gatsby-plugin-react-helmet to Gatsby Head API?',
        answer:
          'Since Gatsby v4.19, the Gatsby Head API officially replaces gatsby-plugin-react-helmet. The legacy plugin still works but has not been updated in over a year, creating compatibility risks with React 18+ and recent Node.js versions. The Head API is simpler (one Head export per page file), lighter (no external dependency), and natively handles title, meta, canonical, and Open Graph tags. Rankwell manages this migration and verifies that every template retains its meta tags after the transition.',
      },
      {
        question: 'How can I reduce build times on my Gatsby site?',
        answer:
          'Long builds on Gatsby stem from three main causes: unoptimized GraphQL queries (no filters, no limits), too many source plugins generating thousands of nodes, and unprocessed images. Rankwell audits the data layer, reduces superfluous nodes, optimizes shared GraphQL fragments, activates Deferred Static Generation (DSG) in Gatsby v5 for low-traffic pages, and configures parallelized builds on Netlify or Vercel.',
      },
      {
        question: 'How can I get my Gatsby site cited by ChatGPT and Perplexity?',
        answer:
          'Gatsby sites have an advantage: static HTML pre-rendered at build time is fully crawlable by GPTBot and PerplexityBot. To convert this advantage into citations, three conditions are required: content rich in verifiable factual data (numbers, comparisons, definitions), complete JSON-LD markup injected in React components (WebSite, Organization, FAQPage), and brand mentions on third-party sources. The Rankwell GEO Score measures these three dimensions.',
      },
      {
        question: 'Is Gatsby still a good choice for SEO in 2026?',
        answer:
          'Gatsby remains effective for small to medium static sites (blogs, portfolios, documentation sites) thanks to its pre-rendered HTML and image optimization pipeline. However, the ecosystem decline since the Gatsby Cloud shutdown (2024), the lack of native ISR, and long build times on large sites make it a limited choice compared to Next.js or Astro. Rankwell advises its Gatsby clients on optimizing the existing setup or, when necessary, on migrating to a more suitable framework.',
      },
      {
        question: 'Why choose Rankwell for Gatsby SEO?',
        answer:
          'Rankwell combines Gatsby technical SEO expertise (GraphQL data layer auditing, Head API migration, build optimization, gatsby-plugin-image pipeline, React JSON-LD injection) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology covers Gatsby-specific challenges: unmaintained plugins, long builds, no ISR, React hydration issues. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Gatsby site?',
    description:
      'Request a free GEO & SEO audit of your Gatsby site. Our SEO & GEO consultants analyze your React architecture, your plugin ecosystem, your build times, and your AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for SaaS', href: '/en/geo-seo-agency/sector/saas' },
        { label: 'SEO for Startups', href: '/en/geo-seo-agency/sector/startup' },
        { label: 'SEO for Tech', href: '/en/geo-seo-agency/sector/tech' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'Next.js SEO', href: '/en/geo-seo-agency/cms/nextjs' },
        { label: 'Nuxt.js SEO', href: '/en/geo-seo-agency/cms/nuxtjs' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
      { label: 'Nuxt.js', href: '/en/geo-seo-agency/cms/nuxtjs' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Strapi', href: '/en/geo-seo-agency/cms/strapi' },
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
    ],
  },
};

export default data;
