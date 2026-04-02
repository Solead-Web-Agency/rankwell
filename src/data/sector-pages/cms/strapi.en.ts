/**
 * DATA: CMS Strapi Page (EN)
 * Route: /en/geo-seo-agency/cms/strapi
 *
 * English version adapted for the anglophone Strapi ecosystem.
 * Strapi = open-source headless CMS (Node.js), API-first (REST + GraphQL).
 * No frontend: SEO depends entirely on the client-side framework (Next.js, Nuxt.js, Gatsby).
 * Official plugin @strapi/plugin-seo + community strapi-plugin-sitemap.
 * Content based on LLM auto-test (March 2026) and anglophone headless CMS ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'strapi',
    title: 'Strapi SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Strapi websites. Headless technical audit, SSR/SSG, API caching, frontend schema.org, @strapi/plugin-seo configuration: a complete methodology built for Strapi.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Strapi' },
    ],
    title: 'Strapi SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Headless CMS with no frontend, zero native SEO, no default schema.org: Strapi SEO relies entirely on the frontend framework implementation (Next.js, Nuxt.js). Our experts combine headless technical SEO and GEO to rank your site on Google and get it cited by AI engines.',
    ctaText: 'Request a Strapi SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Strapi (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Strapi',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Strapi holds 6.6% of the API-first CMS market</strong> and powers over 2,300 companies. Its headless architecture (REST + GraphQL) paired with SSR/SSG frontends (Next.js, Nuxt.js) delivers superior Core Web Vitals, full HTML control, and freedom to inject any schema.org markup for a custom <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Strapi generates no URLs, no sitemap, and no schema.org by default</strong>. The @strapi/plugin-seo adds meta fields but covers neither redirects nor canonical tags. Without SSR or SSG, pages are invisible to Googlebot, causing <a href="/en/glossary/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> waste and duplicate content across routes.',
    geoAngle:
      'According to Rankwell, Strapi presents an AI citability paradox: the API-first architecture enables precise JSON-LD injection, but none of these optimizations exist by default. Without deliberate schema.org in the frontend and content written for LLM extraction, a Strapi site remains invisible.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, structured data plays a dual role: it feeds Google\'s rich results (rich snippets, FAQ, reviews) and it provides LLMs with an explicit semantic comprehension layer that facilitates factual extraction. A properly marked-up DefinedTerm type becomes an entity directly ingestible by an AI engine.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'Learn more about structured data',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Strapi SEO problems and solutions',
    interpretation:
      'These problems are not Strapi bugs: they stem from the headless architecture, where the CMS does not control the rendering layer. Each point requires intervention in the frontend code. A technical audit identifies which ones apply to your project and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Client-side JavaScript rendering (CSR) without SSR or SSG',
        'Pages invisible to Googlebot, zero indexation',
        'Migration to Next.js (SSR/SSG) or Nuxt.js (universal mode), using getStaticProps or generateStaticParams for every route',
      ],
      [
        'No default XML sitemap',
        'Google does not discover new pages, incomplete indexation',
        'Installation of strapi-plugin-sitemap with a daily cron job, or dynamic generation via next-sitemap on the Next.js side',
      ],
      [
        'No native 301 redirects',
        'Link equity loss on slug changes, cascading 404 errors',
        'Redirect management in next.config.js (rewrites/redirects), or via an upstream NGINX/Cloudflare middleware',
      ],
      [
        'Slow API response times without caching',
        'LCP > 4s, Core Web Vitals degradation and mobile ranking drops',
        'Multi-layer cache: Cloudflare/NGINX reverse proxy on Strapi GET requests, ISR (Incremental Static Regeneration) on the Next.js side, Redis for recurring queries',
      ],
      [
        'No schema.org markup (zero default structured data)',
        'No rich snippets, no structured data for LLMs',
        'JSON-LD injection (WebSite, Organization, BreadcrumbList, FAQPage) in the Next.js/Nuxt.js layout, fed by Strapi fields via the API',
      ],
      [
        'Duplicate content across frontend routes',
        'Internal cannibalization, crawl budget dilution',
        'Dynamically generated canonical tags in the frontend head, with a 1:1 mapping between each Strapi entry and a single URL',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Strapi',
    subtitle: 'A structured 8-step approach to Strapi SEO, designed around the specific technical constraints of headless architecture.',
    steps: [
      {
        title: 'Strapi + frontend technical audit',
        subtitle: 'Full analysis of the complete stack: Strapi configuration (content types, plugins, API), frontend framework (Next.js, Nuxt.js, Gatsby), and hosting infrastructure.',
        items: [
          'Inventory of content types, components, and relations in the Strapi admin',
          'Verification of the frontend rendering mode (CSR, SSR, SSG, ISR) and its impact on indexation',
          'Core Web Vitals measurement (LCP, FID, CLS) and Strapi API response time benchmarking',
          'Audit of installed plugins: @strapi/plugin-seo, strapi-plugin-sitemap, strapi-plugin-generate-schema',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Strapi site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Headless architecture correction',
        subtitle: 'Resolution of structural issues linked to the backend/frontend separation that block indexation and SEO performance.',
        items: [
          'Transition to SSR or SSG if the frontend uses pure CSR (migration to Next.js App Router or Nuxt.js universal mode)',
          'Multi-layer API cache setup (Cloudflare, Redis, ISR)',
          'Dynamic sitemap configuration (strapi-plugin-sitemap or next-sitemap)',
          'Creation of a 301 redirect system in the frontend or reverse proxy',
        ],
      },
      {
        title: 'API performance optimization',
        subtitle: 'Reduction of Strapi API response times to guarantee an LCP below 2.5 seconds on every page.',
        items: [
          'Audit of API queries (populate, filters, pagination) and JSON payload reduction',
          'Caching GET requests via reverse proxy (Cloudflare, NGINX, Fastly)',
          'Enabling ISR (Incremental Static Regeneration) for high-traffic pages',
          'Image optimization via Strapi media library: WebP transformation, resizing, frontend-side lazy loading',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Setup of every SEO building block that Strapi does not provide natively: meta tags, canonical, schema.org, robots.txt.',
        items: [
          'Adding the shared.seo component via @strapi/plugin-seo on every content type',
          'Dynamic generation of canonical and meta robots tags in the frontend head',
          'JSON-LD injection (WebSite, Organization, BreadcrumbList, FAQPage) from API data in the Next.js/Nuxt.js layout',
          'robots.txt and XML sitemap configuration with Google Search Console submission',
        ],
      },
      {
        title: 'Headless content strategy',
        subtitle: 'Creation of structured content in Strapi for Google rankings and AI engine citability, leveraging the flexibility of content types.',
        items: [
          'Content type modeling in Strapi to support semantic clusters (parent/child relations between pages)',
          'Internal linking managed via Strapi relation fields, rendered dynamically on the frontend',
          'Structured FAQ as repeatable components in Strapi, with automatic JSON-LD rendering',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sources and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from tech blogs, headless CMS communities, and SaaS comparison platforms',
          'Guest posts on high-authority websites (Jamstack, Dev.to, Smashing Magazine)',
          'Brand mentions in headless CMS comparison articles and technical guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and the technical health of the Strapi + frontend stack.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by Strapi content type',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution, API response times, and indexation rate tracking',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your development team, your marketing team, or your management.',
    items: [
      {
        id: 1,
        title: 'Strapi technical audit report',
        description: 'Full diagnostic of your Strapi + frontend stack: content type and component inventory, rendering mode (CSR/SSR/SSG/ISR), API response times, Core Web Vitals, installed plugins (@strapi/plugin-seo, sitemap), with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Strapi schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage markup and business-specific types, injected as JSON-LD in the Next.js or Nuxt.js layout. The kit includes ready-to-integrate code snippets, dynamically fed by the Strapi API.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ sections optimized for SEO and GEO. Integration into Strapi via dedicated content types, with shared.seo field configuration (meta title, meta description) and repeatable components for FAQ.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from tech blogs, Jamstack communities, headless CMS comparison platforms, and specialized media in your industry. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, Strapi stack technical health (API response times, indexation rate, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Strapi site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Strapi site?", the LLM compiles web sources to formulate its answer. The field is even more open than for WordPress or Shopify: SEO content about Strapi is almost exclusively produced by Strapi (official blog) or by development agencies. No SEO agency is cited.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Strapi site?", the LLM does not name any SEO agency. It explains that Strapi is a headless CMS and that SEO depends on the frontend. It provides selection criteria (mastery of headless architectures, SSR/SSG experience, knowledge of @strapi/plugin-seo) and mentions Strapi Solution Partners (development agencies, not SEO). SALT.agency appears as a reference source for its detailed Strapi SEO guide. The agency that publishes structured content on headless Strapi SEO, with methodology and results, occupies an empty space.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Strapi website", the LLM generates an 8 to 10 point guide centered on frontend implementation: SSR/SSG, @strapi/plugin-seo, sitemap, API cache, JSON-LD. Preferred sources are the official Strapi blog, SALT.agency, and the Next.js/Nuxt.js documentation. No SEO agency is cited in technical responses.</p><h4>CMS comparison queries</h4><p>On "Strapi vs WordPress for SEO", the LLM produces a comparison table where WordPress dominates on native SEO and Strapi on performance. It highlights that Strapi requires a development team for every SEO feature. Sites publishing structured comparisons with measurable criteria (API response times, schema.org coverage, indexation rates) are favored as sources.</p><h4>Technical problem queries</h4><p>On "common Strapi SEO problems", the LLM provides 6 to 8 issues tied to the headless architecture: CSR without SSR, no sitemap, no redirects, missing meta tags, slow API, duplicate content. Content that presents each problem with a precise technical solution (code snippets, configuration) has the highest chance of being extracted.</p>',
    structuredData:
      'For a Strapi site, schema.org types must be injected in the frontend (Next.js, Nuxt.js), as Strapi generates no markup by default. Recommended types: <code>WebSite</code> (main type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ), <code>Article</code> or <code>BlogPosting</code> (editorial content). The strapi-plugin-generate-schema plugin can automate the mapping between Strapi content types and schema.org JSON-LD via a ?schemaOrg=true parameter on API requests. The Rankwell approach combines this plugin with manual injection of uncovered types to guarantee complete coverage.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Strapi site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content served by the Strapi API), Legitimacy and Citability (external trust signals, backlinks, mentions in tech communities), and Factual Density (richness of JSON-LD markup injected in the frontend and named entities across rendered pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Strapi SEO',
    items: [
      {
        question: 'How much does Strapi SEO cost?',
        answer:
          'The SEO budget for a Strapi site depends on the stack complexity (Strapi + Next.js, Nuxt.js, or Gatsby), the number of content types, and the competition level on your target queries. At Rankwell, Strapi SEO engagements start from $2,000/month for a headless business site under 50 pages, and range from $4,000 to $8,000/month for projects with a product catalog, multilingual setup, or multi-site architecture. This budget covers the full stack technical audit, frontend SEO configuration, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Strapi?',
        answer:
          'Initial results typically appear within 1 to 3 months for technical fixes (SSR/SSG migration, sitemap setup, API cache configuration). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Performance gains (Core Web Vitals, API response times) produce measurable effects within the first weeks. Rankwell provides a forecast timeline based on the initial audit of your Strapi stack.',
      },
      {
        question: 'Does the @strapi/plugin-seo plugin cover all SEO needs?',
        answer:
          'No. The official @strapi/plugin-seo adds a shared.seo component with meta title, meta description, and SERP preview in the Strapi admin. It is useful for editorial meta tag management, but it covers neither XML sitemaps, nor 301 redirects, nor canonical tags, nor schema.org, nor robots.txt. All of these must be implemented in the frontend (Next.js, Nuxt.js). Rankwell configures the plugin and the frontend for complete SEO coverage.',
      },
      {
        question: 'How can I fix slow performance on a Strapi site?',
        answer:
          'Strapi site slowness generally comes from three causes: unoptimized API queries (deep populate, large JSON payloads), absence of caching (no reverse proxy, no ISR), and undersized hosting. Rankwell starts by auditing API queries to reduce payloads, configures a multi-layer cache (Cloudflare as reverse proxy, ISR on the Next.js side, Redis for recurring queries), and optimizes images via the Strapi media library (WebP, lazy loading).',
      },
      {
        question: 'How can I get my Strapi site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Strapi site, three conditions must be met: content rich in verifiable factual data, complete JSON-LD markup injected in the frontend (WebSite, Organization, FAQPage), and brand mentions on third-party sources (tech blogs, Jamstack communities, specialized press). The Rankwell GEO Score measures these three dimensions and identifies the priority levers. The advantage of Strapi: the API flexibility allows structuring passages optimized for LLM extraction.',
      },
      {
        question: 'Is Strapi a good choice for SEO in 2026?',
        answer:
          'Strapi is an excellent choice for SEO, provided you have a development team capable of implementing every SEO building block in the frontend. Strapi sites properly configured with SSR/SSG achieve Core Web Vitals that outperform monolithic CMS platforms (WordPress, Drupal). However, if your team lacks Next.js or Nuxt.js skills, a CMS with built-in SEO (WordPress + Yoast) will be more efficient. Rankwell adapts its SEO and GEO methodology to your technical stack.',
      },
      {
        question: 'Why choose Rankwell for Strapi SEO?',
        answer:
          'Rankwell combines headless technical SEO expertise (Strapi + Next.js/Nuxt.js stack audit, SSR/SSG configuration, API caching, frontend JSON-LD) with the GEO dimension that the vast majority of SEO agencies have not yet integrated. Our 8-step methodology is designed for the specific constraints of headless architecture: every SEO building block absent by default (sitemap, redirects, canonical, schema.org) is covered. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Strapi site?',
    description:
      'Request a free GEO & SEO audit of your Strapi site. Our SEO & GEO consultants analyze your headless stack (Strapi + frontend), your API response times, your schema.org coverage, and your AI engine visibility, and deliver a concrete action plan.',
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
        { label: 'Contentful SEO', href: '/en/geo-seo-agency/cms/contentful' },
        { label: 'Next.js SEO', href: '/en/geo-seo-agency/cms/nextjs' },
        { label: 'Nuxt.js SEO', href: '/en/geo-seo-agency/cms/nuxtjs' },
      ],
      glossaire: [
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Crawl Budget', href: '/en/glossary/crawl-budget' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
      { label: 'Prismic', href: '/en/geo-seo-agency/cms/prismic' },
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
      { label: 'Nuxt.js', href: '/en/geo-seo-agency/cms/nuxtjs' },
      { label: 'Gatsby', href: '/en/geo-seo-agency/cms/gatsby' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
    ],
  },
};

export default data;
