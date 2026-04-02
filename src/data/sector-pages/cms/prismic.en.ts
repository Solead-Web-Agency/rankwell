/**
 * DATA: CMS Prismic Page (EN)
 * Route: /en/geo-seo-agency/cms/prismic
 *
 * English version adapted for the anglophone Prismic headless CMS ecosystem.
 * Prismic = headless CMS SaaS, Slice Machine (reusable components),
 * REST + GraphQL APIs, Route Resolver (native URL mapping),
 * native SDKs for Next.js/Nuxt/SvelteKit, built-in imgix CDN.
 * SEO = 100% frontend-dependent, zero native SEO on the CMS side.
 * Content based on LLM auto-test (March 2026) and anglophone headless CMS ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'prismic',
    title: 'Prismic SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Prismic websites. Slice Machine, Route Resolver, SSR/SSG rendering, frontend schema.org, imgix CDN: a complete methodology built for Prismic.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Prismic' },
    ],
    title: 'Prismic SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Slice Machine without structured markup, misconfigured Route Resolver, zero native sitemap: Prismic SEO depends entirely on the frontend framework (Next.js, Nuxt, SvelteKit). Our experts combine headless technical SEO and GEO to rank your site on Google and get it cited by AI engines.',
    ctaText: 'Request a Prismic SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Prismic (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Prismic',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Prismic powers roughly 1,480 websites worldwide</strong> with its Slice Machine for visual content modeling and a Route Resolver for native URL mapping (up to two nesting levels). The built-in imgix CDN optimizes images automatically (WebP, AVIF). Paired with Next.js or Nuxt in SSR/SSG mode, Prismic provides a solid foundation for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Prismic generates no XML sitemap, no 301 redirects, and no schema.org by default</strong>: everything depends on the frontend framework. A misconfigured Route Resolver produces cascading 404 errors. The Medium plan (<strong>$150/month</strong>) is required for editorial teams. Without SSR or SSG, client-side rendering leaves pages invisible to Googlebot.',
    geoAngle:
      'According to Rankwell, Prismic presents an underexploited GEO lever: the Slice Machine enables structured factual passages within each reusable component, and the Route Resolver guarantees stable semantic URLs. This citability remains latent until the frontend transforms Slices into JSON-LD markup exploitable by LLMs.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, structured data plays a dual role: it feeds Google\\\'s enriched results (rich snippets, FAQ, reviews) and provides LLMs with an explicit semantic comprehension layer that facilitates factual extraction. A properly marked-up DefinedTerm type becomes an entity directly ingestible by an AI engine.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'Learn more about structured data',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Prismic SEO problems and solutions',
    interpretation:
      'These problems stem from Prismic\\\'s headless architecture, where the CMS manages content without controlling the rendering layer. Each one degrades Google rankings and reduces the ability of AI engines to extract reliable data from your pages. A technical audit identifies which ones apply to your setup and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Frontend in pure CSR (React SPA without SSR or SSG)',
        'Pages invisible to Googlebot, zero organic indexation',
        'Migration to Next.js (SSR/SSG via @prismicio/next) or Nuxt (@prismicio/nuxt), with static generation of Prismic routes',
      ],
      [
        'Route Resolver misconfigured or absent',
        'Inconsistent URLs, broken internal links, cascading 404 errors',
        'Route Resolver configuration in prismicio.ts with explicit mapping per Page Type, automated URL testing across all generated paths',
      ],
      [
        'No XML sitemap generated by Prismic',
        'Incomplete page discovery, inefficient crawling',
        'Automatic generation via next-sitemap (Next.js) or nuxt-sitemap (Nuxt), fed by the Prismic API with Page Type filtering',
      ],
      [
        'SEO fields in Page Types not validated by editors',
        'Duplicate meta titles, empty descriptions, CTR loss',
        'Custom validations in Slice Machine (meta title 50-60 characters, mandatory meta description), editor training on SEO fields',
      ],
      [
        '301 redirects not handled natively',
        'PageRank loss on slug changes, 404 errors',
        'Redirect management in next.config.js (redirects) or via CDN rules (Vercel, Netlify), plus a dedicated "Redirect" Custom Type in Prismic',
      ],
      [
        'No schema.org despite content-rich Slices',
        'No rich snippets, invisible to LLMs',
        'Systematic mapping of Slices to schema.org types (Article, FAQPage, HowTo) via a JSON-LD component injected in the frontend layout',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Prismic',
    subtitle: 'A structured 8-step approach to Prismic SEO, designed around the platform-specific challenges of headless architecture and the Slice Machine workflow.',
    steps: [
      {
        title: 'Prismic + frontend technical audit',
        subtitle: 'Full analysis of the headless architecture: Slice Machine, Page Types, Route Resolver, frontend framework (Next.js, Nuxt, SvelteKit), and Core Web Vitals.',
        items: [
          'Inventory of Page Types, Custom Types, and Slices in the Slice Machine',
          'Route Resolver verification: generated URL consistency, nesting levels, slug management',
          'Core Web Vitals measurement (LCP, INP, CLS) and frontend rendering mode check (CSR, SSR, SSG)',
          'SEO field audit on Page Types: meta title, meta description, OG image, UID presence and validation',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Prismic site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Headless architecture correction',
        subtitle: 'Resolution of structural issues linked to the Prismic backend / frontend separation that block indexation and SEO performance.',
        items: [
          'Transition to SSR or SSG if the frontend uses pure CSR (migration to @prismicio/next or @prismicio/nuxt)',
          'Route Resolver reconfiguration for consistent semantic URLs (category/slug, blog/article)',
          'Automatic XML sitemap generation via next-sitemap or nuxt-sitemap, fed by the Prismic API',
          'Creation of a "Redirect" Custom Type to manage 301 redirects from the Prismic interface',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Reduction of load times by leveraging Prismic\\\'s built-in imgix CDN and frontend framework caching strategies.',
        items: [
          'Prismic imgix CDN configuration: automatic WebP/AVIF format, adaptive resizing, lazy loading',
          'ISR (Incremental Static Regeneration) activation on Next.js for high-traffic pages',
          'API response caching via the framework CDN (Vercel Edge, Netlify CDN)',
          'CSS/JS minification and deferred loading of non-critical scripts in the frontend layout',
        ],
      },
      {
        title: 'Schema.org and structured data markup',
        subtitle: 'Systematic mapping of Prismic Slices and Page Types to schema.org types to maximize rich snippets and AI citability.',
        items: [
          'WebSite, Organization, BreadcrumbList markup injected as JSON-LD in the main frontend layout',
          'Article, FAQPage, HowTo, Product mapping on corresponding Slice Machine components',
          'Dynamic JSON-LD generation from Prismic fields via the @prismicio/client SDK',
          'Validation testing with Google Rich Results Test on each Page Type',
        ],
      },
      {
        title: 'Prismic content strategy',
        subtitle: 'Creation of structured content leveraged by the Slice Machine for Google rankings and AI engine citability.',
        items: [
          'Pillar pages plus satellite articles organized via Prismic Content Relationship fields',
          'Automated internal linking through Link and Content Relationship fields in the Slice Machine',
          'FAQ structured as reusable Slices with automatic FAQPage JSON-LD rendering on the frontend',
          'Self-contained factual passages within each Slice, designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized headless CMS and Jamstack tech sources.',
        items: [
          'Backlinks from headless CMS tech blogs, SaaS comparators, and Jamstack communities',
          'Guest posts on high-authority sites within the Prismic ecosystem (DEV.to, Smashing Magazine, CSS-Tricks)',
          'Brand mentions in headless CMS comparison articles and frontend architecture guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and the technical health of the Prismic + frontend stack.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by Prismic Page Type (page, blog_post, landing)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution, indexation rate, and Route Resolver consistency tracking',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your development team, your Prismic editors, or your management.',
    items: [
      {
        id: 1,
        title: 'Prismic technical audit report',
        description: 'Full diagnostic of your headless architecture: Page Type and Slice inventory, Route Resolver configuration, frontend rendering mode (CSR/SSR/SSG), Core Web Vitals, missing or unvalidated SEO fields, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Prismic schema.org kit',
        description: 'Complete mapping of Slices and Page Types to schema.org types (Article, FAQPage, HowTo, BreadcrumbList). Frontend code (Next.js or Nuxt) for dynamic JSON-LD generation from Prismic fields via the @prismicio/client SDK.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages and FAQ sections optimized for SEO and GEO. Direct integration into Prismic via the Slice Machine and Writing Room. Creation of dedicated Slices (FAQ, Testimonial, Comparison) if needed.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from headless CMS tech blogs, SaaS comparators, and specialized Jamstack media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic segmented by Prismic Page Type, GEO Score evolution, frontend technical health (indexability, Core Web Vitals, Route Resolver), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Prismic site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency for a Prismic site?", the LLM compiles web sources to formulate its answer. The field is even more open than for WordPress or Shopify: SEO content about Prismic is almost exclusively produced by Prismic itself (official blog) or by development agencies. No SEO agency is cited.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Prismic site?", the LLM does not name any SEO agency. It explains that Prismic is a headless CMS and that SEO depends entirely on the frontend (Next.js, Nuxt, SvelteKit). It provides 5 to 7 selection criteria (Slice Machine mastery, SSR/SSG experience, Route Resolver knowledge, headless project references) and mentions development agencies like Dernier Cri and Neodelta, not SEO specialists. SEOWebster appears in web results as a Prismic SEO service provider but is not cited in generative responses. The agency that publishes structured SEO methodology with measurable results on Prismic fills an empty space.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Prismic site", the LLM generates a structured guide covering 8 to 10 points: SSR/SSG via @prismicio/next, Route Resolver for clean URLs, sitemap via next-sitemap, meta tags via Page Type SEO fields, image optimization via the built-in imgix CDN, JSON-LD injection in the frontend layout, and internal linking via Content Relationships. Preferred sources are prismic.io/blog, Prismic documentation, and Next.js tutorials. No SEO agency is cited.</p><h4>CMS comparison queries</h4><p>On "Prismic vs Contentful for SEO", the LLM produces a comparison table with 6 to 8 criteria. Prismic is positioned as more accessible (visual Slice Machine, lower pricing, native SDKs) and oriented toward website building. Contentful is presented as more enterprise-grade (Fastly CDN, advanced content modeling, larger app marketplace). Neither has native SEO. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Prismic SEO problems", the LLM lists 5 to 7 issues specific to the headless architecture: CSR rendering not indexed, misconfigured Route Resolver producing inconsistent URLs, no native sitemap, unvalidated SEO fields in Page Types, unmanaged redirects, missing schema.org. Content structured as problem-solution tables using Prismic-specific terms (Slice Machine, Route Resolver, Page Type) has the highest chance of being extracted.</p>',
    structuredData:
      'For a Prismic site, schema.org types must be injected in the frontend (Next.js, Nuxt, SvelteKit), as Prismic generates no markup by default. Recommended types: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation, consistent with the Route Resolver), <code>FAQPage</code> (FAQ Slices), <code>Article</code> or <code>BlogPosting</code> (editorial content). The @prismicio/client SDK provides the structured data needed to dynamically feed JSON-LD from Prismic fields. The Rankwell approach maps each Slice Machine component to a schema.org type for complete coverage.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Prismic site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of structured content within Slices and Page Types), Legitimacy and Citability (external trust signals, backlinks, mentions in the headless ecosystem), and Factual Density (richness of schema.org markup generated by the frontend and named entities across rendered pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Prismic SEO',
    items: [
      {
        question: 'How much does Prismic SEO cost?',
        answer:
          'The SEO budget for a Prismic site depends on the stack complexity (Prismic + Next.js, Nuxt, or SvelteKit), the number of Page Types, and the competition level on your target queries. At Rankwell, Prismic SEO engagements start from $2,000/month for a headless business site under 50 pages, and range from $4,000 to $8,000/month for projects with multilingual setup, editorial blog, or product catalog. This budget covers the Slice Machine audit, frontend SSR/SSG configuration, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Prismic?',
        answer:
          'Initial results typically appear within 1 to 3 months for technical fixes (SSR/SSG migration, Route Resolver configuration, sitemap generation). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Performance gains (Core Web Vitals, imgix image optimization) produce measurable effects within the first weeks. Rankwell provides a forecast timeline based on the initial audit of your Prismic stack.',
      },
      {
        question: 'Does the Route Resolver handle all URL management for SEO?',
        answer:
          'The Route Resolver manages the mapping between Prismic documents and frontend URLs. It supports up to two nesting levels (for example /blog/category/article) and is configured in the prismicio.ts file. However, it does not cover 301 redirects on slug changes, canonical tags, or XML sitemaps. Rankwell configures the Route Resolver for clean semantic URLs and complements the stack with redirects and sitemap generation on the frontend side.',
      },
      {
        question: 'How can I fix performance issues on a Prismic site?',
        answer:
          'Performance problems on Prismic sites rarely come from the API itself (the imgix CDN responds quickly) but from the frontend. Common causes include an oversized JavaScript bundle, images not processed through the built-in imgix CDN (WebP/AVIF not activated), and missing ISR cache on Next.js. Rankwell audits the frontend, activates imgix optimization (format, resizing, lazy loading), configures ISR, and sets up API response caching via the framework CDN.',
      },
      {
        question: 'How can I get my Prismic site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Prismic site, three conditions must be met: content rich in structured factual data within Slices (numbers, definitions, comparisons), schema.org markup dynamically generated from Page Types (WebSite, Organization, FAQPage, Article), and brand mentions on third-party tech and Jamstack sources. The Rankwell GEO Score measures these three dimensions and identifies the priority levers.',
      },
      {
        question: 'Is Prismic a good choice for SEO in 2026?',
        answer:
          'Prismic offers strong SEO potential when the architecture is correctly implemented (SSR/SSG, Route Resolver, frontend schema.org). The Slice Machine simplifies structured content production, and the imgix CDN optimizes images natively. However, the complete absence of native SEO requires a technical team capable of configuring the frontend. For projects without developers, a CMS with built-in SEO (WordPress + Yoast) remains more accessible. Rankwell adapts its SEO and GEO methodology to each headless architecture.',
      },
      {
        question: 'Why choose Rankwell for Prismic SEO?',
        answer:
          'Rankwell combines headless technical SEO expertise (Slice Machine audit, Route Resolver configuration, schema.org mapping from Slices, SSR/SSG frontend optimization) with the GEO dimension that the vast majority of SEO agencies do not offer. Our 8-step methodology covers the challenges specific to Prismic: absence of native SEO, frontend dependency, URL management via the Route Resolver, image optimization via imgix. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Prismic site?',
    description:
      'Request a free GEO & SEO audit of your Prismic site. Our SEO & GEO consultants analyze your Slice Machine, your Route Resolver, your frontend rendering layer, and your AI engine visibility, and deliver a concrete action plan.',
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
        { label: 'Strapi SEO', href: '/en/geo-seo-agency/cms/strapi' },
        { label: 'Next.js SEO', href: '/en/geo-seo-agency/cms/nextjs' },
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
      { label: 'Strapi', href: '/en/geo-seo-agency/cms/strapi' },
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
      { label: 'Nuxt.js', href: '/en/geo-seo-agency/cms/nuxtjs' },
      { label: 'Gatsby', href: '/en/geo-seo-agency/cms/gatsby' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
    ],
  },
};

export default data;
