/**
 * DATA: CMS Nuxt.js Page (EN)
 * Route: /en/geo-seo-agency/cms/nuxtjs
 *
 * English version adapted for the international Nuxt.js market.
 * Content based on LLM auto-test (March 2026) and global Nuxt.js ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'nuxtjs',
    title: 'Nuxt.js SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Nuxt.js websites. Hybrid rendering SSR/SSG, @nuxtjs/seo module, useSchemaOrg, Nuxt Content, auto-imports: a complete methodology built for Nuxt.js.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Nuxt.js' },
    ],
    title: 'Nuxt.js SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Hydration mismatch, SSR accidentally disabled, meta tags missing from server output: SEO on a Nuxt.js site requires deep expertise in Vue.js hybrid rendering and the @nuxtjs/seo module. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Nuxt.js SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Nuxt.js (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Nuxt.js',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Nuxt.js powers over 400,000 websites</strong> as the leading Vue.js SEO framework. Hybrid rendering (SSR, SSG, ISR) delivers complete HTML to crawlers. The @nuxtjs/seo module bundles sitemap, robots.txt, schema.org, and OG images in one package. Auto-imports reduce bundle size for scalable <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Nuxt.js represents only 0.3% of websites</strong> (vs 2.3% for Next.js), limiting community SEO resources. Hydration mismatches create DOM inconsistencies for Googlebot. Meta tags in onMounted() are not server-rendered, and disabled SSR makes pages invisible, wasting <a href="/en/glossary/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a>.',
    geoAngle:
      'According to Rankwell, Nuxt.js offers a unique AI citability advantage via the useSchemaOrg composable: type-safe JSON-LD graphs (WebSite, Organization, FAQPage) injected directly from Vue code. This capability remains dormant if hybrid rendering is misconfigured or factual passages are not server-rendered.',
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
    title: 'Common Nuxt.js SEO problems and solutions',
    interpretation:
      'These problems stem from the flexibility of Nuxt.js hybrid rendering: each route can be SSR, SSG, ISR, or CSR, multiplying possible configurations and error risks. A technical audit identifies the affected routes and prioritizes fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Hydration mismatch between server and client rendering',
        'Different content indexed by Googlebot and seen by users, console errors',
        'Audit of Vue components with conditional rendering (v-if on client-only data), migration to <ClientOnly> for non-SEO-critical blocks',
      ],
      [
        'SSR disabled on critical routes (ssr: false in routeRules)',
        'Pages invisible to Googlebot, zero indexation',
        'Audit of nuxt.config.ts and routeRules, SSR reactivation on all indexable routes, SSG via prerender for static pages',
      ],
      [
        'Meta tags defined in onMounted() instead of useSeoMeta()',
        'Indexation without title or description, collapsed CTR in SERPs',
        'Migration of meta tags to useSeoMeta() (SSR-compatible composable), removal of useHead() from client-only hooks',
      ],
      [
        'Incomplete sitemap: dynamic routes missing',
        'Google does not discover new pages, partial indexation',
        'Configuration of @nuxtjs/sitemap module with dynamic sources (API, Nuxt Content), route pattern declaration in nuxt.config.ts',
      ],
      [
        'Missing schema.org or markup injected client-side only',
        'No rich snippets, structured data invisible to LLMs',
        'Installation of nuxt-schema-org, JSON-LD injection via useSchemaOrg() in each layout and page (WebSite, Organization, BreadcrumbList, FAQPage)',
      ],
      [
        'Nuxt Content: Markdown articles not generated as SSG',
        'Articles rendered via CSR, indexation delay, content absent from Google cache',
        'Prerender activation for /blog/* routes in nuxt.config.ts, static sitemap generation for Nuxt Content with @nuxtjs/sitemap module',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Nuxt.js',
    subtitle: 'A structured 8-step approach designed around the technical specifics of Nuxt.js and its Vue.js ecosystem.',
    steps: [
      {
        title: 'Nuxt.js technical audit',
        subtitle: 'Full analysis of your Nuxt configuration: nuxt.config.ts, routeRules, installed modules, rendering mode per route, and Core Web Vitals.',
        items: [
          'Rendering mode verification per route (SSR, SSG, ISR, CSR) via routeRules',
          'Core Web Vitals measurement (LCP, INP, CLS) on mobile and desktop',
          'Audit of installed modules: @nuxtjs/seo, @nuxt/image, @nuxtjs/i18n, Nuxt Content',
          'Hydration mismatch detection via Nuxt dev mode and View Source vs rendered DOM comparison',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Nuxt.js site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Hybrid rendering correction',
        subtitle: 'Resolution of rendering issues blocking indexation: disabled SSR, hydration mismatches, meta tags missing from server output.',
        items: [
          'SSR reactivation on critical routes, SSG via prerender for static pages',
          'Hydration mismatch correction (<ClientOnly> components, v-if on process.client)',
          'Meta tag migration from useHead()/onMounted() to useSeoMeta() (native SSR)',
          'routeRules configuration: SSR for dynamic content, SSG for marketing pages, ISR with stale-while-revalidate for frequently updated content',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Load speed improvement leveraging Nuxt.js auto-imports, tree-shaking, and native lazy loading.',
        items: [
          'Bundle audit via Nuxt DevTools (chunk size, unused code)',
          'Activation of @nuxt/image module for lazy loading, resizing, and automatic WebP conversion',
          'ISR cache configuration (stale-while-revalidate) to reduce TTFB on dynamic pages',
          'Verification that auto-imports work correctly (no duplicate manual imports of Vue composables)',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of the @nuxtjs/seo module and its sub-modules to maximize control over tags, sitemaps, and structured data.',
        items: [
          'Installation and configuration of @nuxtjs/seo (sitemap, robots, schema.org, OG image, link checker)',
          'Dynamic XML sitemap generation with dynamic route declaration and Nuxt Content integration',
          'robots.txt configuration via @nuxtjs/robots with explicit GPTBot, ClaudeBot, and PerplexityBot management',
          'Type-safe JSON-LD injection via useSchemaOrg(): WebSite, Organization, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Content strategy for Nuxt.js',
        subtitle: 'Production of content structured for Google rankings and AI citability, leveraging Nuxt Content for the blog.',
        items: [
          'Topical clusters structured via the Nuxt page system (nested directories in /pages)',
          'Markdown blog with Nuxt Content: SSG-generated articles, front matter for meta tags, Vue components in Markdown (MDC)',
          'Internal linking managed via NuxtLink components and Nuxt Content article relationships',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sources and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from Vue.js blogs, Nuxt.js communities, and JavaScript framework comparators',
          'Guest posts on high-authority thematic websites (Vue.js News, DEV.to, Smashing Magazine)',
          'Brand mentions in framework comparison articles and Vue.js technical guides',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and technical health of your Nuxt.js site.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by route type (SSR, SSG, ISR)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution, indexation rate, and routeRules status',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your Vue.js development team, your marketing team, or your management.',
    items: [
      {
        id: 1,
        title: 'Nuxt.js technical audit report',
        description: 'Full diagnostic of your Nuxt configuration: nuxt.config.ts, routeRules per route (SSR/SSG/ISR/CSR), installed modules (@nuxtjs/seo, @nuxt/image, Nuxt Content), Core Web Vitals, hydration mismatches, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Nuxt.js schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific types injected via the useSchemaOrg() composable from the nuxt-schema-org module. The kit includes ready-to-integrate Vue snippets for your layouts and pages.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQs optimized for SEO and GEO. Integration via Nuxt Content (Markdown articles with front matter and MDC components) or directly in Vue pages with useSeoMeta() for meta tags.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from Vue.js blogs, Nuxt.js communities, JavaScript framework comparators, and sector-specific media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, Nuxt.js technical health (routeRules, Core Web Vitals, indexation rate, module status), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Nuxt.js site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Nuxt.js site?", the LLM compiles web sources to formulate its answer. The field is empty: SEO content about Nuxt.js is produced by nuxtseo.com (technical documentation) or developer blogs (Medium, DEV.to). No SEO agency is cited.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Nuxt.js site?", the LLM does not cite any SEO agency. It explains that Nuxt.js is a Vue.js framework with built-in SSR/SSG and that SEO requires mastery of hybrid rendering and the @nuxtjs/seo module. It mentions Nuxt.js development agencies (TheCodingMachine, Incrona, Neodelta) but no SEO agency. The agency that publishes structured content on Nuxt.js SEO, with methodology and results, occupies a completely empty space.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Nuxt.js website", the LLM generates a guide covering 8 to 10 points: the @nuxtjs/seo module, the useSeoMeta() composable, hybrid rendering (routeRules), dynamic sitemap, and JSON-LD injection via nuxt-schema-org. Preferred sources are nuxtseo.com, the official nuxt.com documentation, Djamware, and DEV Community. No SEO agency is cited.</p><h4>CMS comparison queries</h4><p>On "Nuxt.js vs Next.js for SEO", the LLM produces a comparison table where both frameworks are presented as equivalent. Nuxt.js is favored for its all-in-one @nuxtjs/seo module, Next.js for its wider adoption (2.3% of sites vs 0.3%). Sites publishing structured comparisons with measurable criteria (Core Web Vitals, schema.org coverage, indexation rate) are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Nuxt.js SEO problems", the LLM provides 6 to 8 issues related to hybrid rendering: hydration mismatch, disabled SSR, meta tags in onMounted(), incomplete sitemap, missing schema.org, unoptimized images. Content presenting each problem with a precise Nuxt configuration solution (routeRules, useSeoMeta, nuxt.config.ts) has the best chance of extraction.</p>',
    structuredData:
      'For a Nuxt.js site, schema.org markup is injected via the nuxt-schema-org module (included in @nuxtjs/seo) using the type-safe <code>useSchemaOrg()</code> composable. Recommended types: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (Nuxt Content articles). The composable generates a JSON-LD graph validated at build time, eliminating common markup errors. Types are defined in Vue code, not in an external plugin, ensuring full per-page control.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Nuxt.js site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content rendered via SSR/SSG), Legitimacy and Citability (external trust signals, backlinks, mentions in Vue.js and Nuxt.js communities), and Factual Density (richness of JSON-LD markup injected via useSchemaOrg and named entities across server-rendered pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Nuxt.js SEO',
    items: [
      {
        question: 'How much does Nuxt.js SEO cost?',
        answer:
          'The SEO budget for a Nuxt.js site depends on the complexity of the hybrid rendering (SSR, SSG, ISR), the number of dynamic routes, and the level of competition. At Rankwell, Nuxt.js SEO engagements start from $2,000/month for a business site under 50 pages, and range from $4,000 to $7,000/month for projects with a Nuxt Content blog, @nuxtjs/i18n multilingual setup, or multi-domain architecture. This budget covers the technical audit of the Nuxt configuration, routeRules optimization, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Nuxt.js?',
        answer:
          'Initial results appear within 1 to 3 months for technical fixes (SSR reactivation, hydration mismatch corrections, sitemap configuration via @nuxtjs/seo). Ranking on competitive keywords requires 4 to 8 months of sustained work. Performance gains (Core Web Vitals, LCP) are measurable within the first weeks thanks to auto-imports and native tree-shaking. Rankwell provides a forecast timeline based on the initial audit of your configuration.',
      },
      {
        question: 'Is the @nuxtjs/seo module enough for SEO?',
        answer:
          '@nuxtjs/seo bundles XML sitemap, robots.txt, schema.org (via nuxt-schema-org), Open Graph images (via nuxt-og-image), link checker, and SEO utils in a single package. It is the best technical starting point for Nuxt.js. However, the module does not fix hydration mismatches, does not manage routeRules (SSR vs SSG vs ISR per route), does not produce optimized content, and does not build domain authority. Rankwell configures the module AND drives the content and link building strategy that complements it.',
      },
      {
        question: 'How do I fix slow page loads on my Nuxt.js site?',
        answer:
          'Slow Nuxt.js performance typically comes from three causes: oversized JavaScript bundles (manual imports instead of Nuxt auto-imports), unoptimized images (missing @nuxt/image module), and dynamic routes without ISR cache (stale-while-revalidate). Rankwell begins by auditing the bundle via Nuxt DevTools to identify oversized chunks, configures @nuxt/image for lazy loading and WebP conversion, and activates ISR on high-traffic routes to reduce TTFB.',
      },
      {
        question: 'How can I get my Nuxt.js site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Nuxt.js site, three conditions must be met: content rich in verifiable factual data (rendered via SSR or SSG to be accessible to AI crawlers), complete JSON-LD markup injected via useSchemaOrg() (WebSite, Organization, FAQPage), and brand mentions on third-party sources (Vue.js blogs, specialized press, framework comparators). The Rankwell GEO Score measures these three dimensions and identifies priority levers to increase your site citability.',
      },
      {
        question: 'Is Nuxt.js a good choice for SEO in 2026?',
        answer:
          'Nuxt.js is a strong choice for SEO in 2026 thanks to its hybrid rendering (SSR, SSG, ISR), its all-in-one @nuxtjs/seo module, and its auto-imports that reduce bundle size. Compared to Next.js, Nuxt.js offers a more centralized SEO ecosystem (one module vs multiple libraries). However, the community is smaller (0.3% of websites vs 2.3% for Next.js) and Nuxt-specific SEO resources are fewer. Rankwell adapts its SEO and GEO methodology to the specifics of Nuxt.js and the Vue.js ecosystem.',
      },
      {
        question: 'Why choose Rankwell for Nuxt.js SEO?',
        answer:
          'Rankwell combines Nuxt.js technical SEO expertise (routeRules auditing, hybrid rendering configuration SSR/SSG/ISR, @nuxtjs/seo module, useSchemaOrg, Nuxt Content, @nuxt/image) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology covers Nuxt.js-specific challenges: hydration mismatches, meta tags not rendered server-side, dynamic sitemap, AI bot management in robots.txt. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Nuxt.js site?',
    description:
      'Request a free GEO & SEO audit of your Nuxt.js site. Our SEO & GEO consultants analyze your hybrid rendering configuration, routeRules, schema.org coverage via useSchemaOrg, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for SaaS', href: '/en/geo-seo-agency/sector/saas' },
        { label: 'SEO for Startups', href: '/en/geo-seo-agency/sector/startup' },
        { label: 'SEO for E-commerce', href: '/en/geo-seo-agency/sector/ecommerce' },
      ],
      projets: [
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'Technical SEO', href: '/en/geo-seo-agency/project/seo-technique' },
      ],
      cms: [
        { label: 'Next.js SEO', href: '/en/geo-seo-agency/cms/nextjs' },
        { label: 'Gatsby SEO', href: '/en/geo-seo-agency/cms/gatsby' },
        { label: 'Strapi SEO', href: '/en/geo-seo-agency/cms/strapi' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
      { label: 'Gatsby', href: '/en/geo-seo-agency/cms/gatsby' },
      { label: 'Strapi', href: '/en/geo-seo-agency/cms/strapi' },
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
    ],
  },
};

export default data;
