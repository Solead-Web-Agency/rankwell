/**
 * DATA: Website Creation Project Page (EN)
 * Route: /en/geo-seo-agency/project/website-creation
 *
 * Adapted for US/UK/UAE markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'website-creation',
    title: 'Website Creation SEO & GEO Agency - Rankwell',
    description:
      'Rankwell integrates SEO and AI visibility (GEO) from the first line of code. Architecture, schema.org, CMS selection, initial content strategy.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Website Creation' },
    ],
    title: 'SEO & GEO for Website Creation: Full Methodology',
    subtitle:
      'GEO-native architecture, SEO-driven CMS selection, schema.org markup embedded from development: our experts build your website\'s Google rankings and AI engine visibility before it even goes live.',
    ctaText: 'Request a website creation SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a new website',
    technicalContext:
      'A website built without SEO accumulates <strong class="text-secondary dark:text-accent">measurable technical debt within 6 months</strong>: non-semantic URLs, default title tags, missing sitemap, and a robots.txt exposing staging pages. Fixing these foundations after launch costs 2 to 5 times more than building them correctly from the start.',
    marketData:
      '<strong class="text-secondary dark:text-accent">Over 70% of small businesses have a website, but fewer than 30% involved an SEO specialist during the build</strong>. The result: sites invisible on Google and absent from AI responses. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> involved from the design phase builds visibility foundations from day one.',
    geoAngle:
      'According to Rankwell, technical SEO now carries a dual mandate: ensuring accessibility for traditional bots (Googlebot, Bingbot) and AI crawlers (GPTBot, ClaudeBot, PerplexityBot). These two families have distinct behaviors and require separate robots.txt directives.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, technical SEO in 2026 carries a dual mandate: ensuring site accessibility for traditional indexing bots (Googlebot, Bingbot) and for AI engine crawlers (GPTBot, ClaudeBot, PerplexityBot), because these two families of crawlers have distinct behaviors and their robots.txt directives must be managed separately.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'Learn more about technical SEO',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your new website',
    subtitle: 'A structured SEO approach in 7 steps, designed to embed search engine rankings and AI visibility into your website from day one.',
    steps: [
      {
        title: 'SEO and GEO specifications document',
        subtitle: 'Writing the technical specifications that integrate SEO and AI citability requirements before CMS selection or vendor briefing.',
        items: [
          'Visibility goals: target Google positions and presence in AI-generated responses',
          'Technical SEO specs: URL structure, meta tags, sitemap, robots.txt with separate AI crawler directives',
          'GEO requirements: native schema.org markup, AI crawler accessibility, factual content guidelines',
          'CMS evaluation criteria based on SEO flexibility and AI compatibility',
        ],
      },
      {
        title: 'GEO audit: pre-launch citability benchmark',
        subtitle: 'Assessing your brand and competitor visibility in AI engines before going live, to calibrate the initial content strategy.',
        items: [
          'Testing 20 to 30 industry queries across ChatGPT, Perplexity, and Gemini',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 competitors already online',
          'Identifying which entities and content to create first for AI citability',
        ],
      },
      {
        title: 'Site architecture and GEO-native structure',
        subtitle: 'Building the site hierarchy in semantic silos, with a page structure designed for Google and AI engines alike.',
        items: [
          'Silo architecture: pillar pages, thematic sub-pages, planned internal linking',
          'Clean URL structure with semantic slugs (no numeric IDs or query parameters)',
          'Pagination plan and canonical tag configuration from the design phase',
          'Consistent Hn heading hierarchy across every page template',
        ],
      },
      {
        title: 'CMS selection and technical configuration',
        subtitle: 'Selecting the right CMS for the project (WordPress, Shopify, Next.js, Webflow) and configuring native SEO settings.',
        items: [
          'Evaluating native SEO capabilities: URL rewriting, meta tags, auto-generated sitemap',
          'Configuring robots.txt with separate directives for Googlebot and AI crawlers',
          'Installing and configuring SEO plugins (Yoast, Rank Math, or equivalent)',
          'Setting up server-side rendering (SSR/SSG) for JavaScript frameworks',
        ],
      },
      {
        title: 'Schema.org markup and structured data',
        subtitle: 'Integrating schema.org markup on every page type during development, to feed Google rich results and LLM Knowledge Graphs.',
        items: [
          'WebSite and Organization markup on the homepage',
          'Service, FAQPage, and BreadcrumbList markup on service pages',
          'Article and Person markup on editorial content pages',
          'Validation via Rich Results Test and verification of AI crawler ingestion',
        ],
      },
      {
        title: 'Initial content strategy',
        subtitle: 'Writing and integrating launch content: pillar pages, FAQ sections, SEO-friendly legal pages, and factual passages designed for LLM extraction.',
        items: [
          'Pillar page copywriting with high factual density (figures, named entities, verifiable data)',
          'Structured FAQ pages by topic for FAQPage schema markup',
          'About and legal pages enriched for Knowledge Graph recognition',
          'Self-contained passages written specifically for AI engine extraction',
        ],
      },
      {
        title: 'SEO QA and post-launch monitoring',
        subtitle: 'Full technical verification before go-live, then tracking Google positions and AI citability during the first 3 months.',
        items: [
          'Pre-production crawl: URL validation, canonicals, sitemap, robots.txt, page speed',
          'Sitemap submission to Google Search Console and indexation verification',
          'Google position tracking by page and target keyword',
          'GEO Score monitoring: AI citability evolution on strategic queries',
        ],
      },
    ],
  },

  // ============================================
  // BLOCK 4: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or leadership can act on immediately.',
    items: [
      {
        id: 1,
        title: 'SEO specifications document',
        description: 'Technical SEO and GEO specifications to include in your development brief: URL structure, meta tags, robots.txt, schema.org, and CMS evaluation criteria.',
      },
      {
        id: 2,
        title: 'Pre-launch GEO audit report',
        description: 'Citability analysis of your brand on ChatGPT, Perplexity, and Gemini before go-live, with GEO Score breakdown and competitive benchmark.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'WebSite, Organization, Service, FAQPage, and BreadcrumbList markup adapted to your CMS, with technical integration guide and ready-to-deploy JSON-LD files.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pillar pages, FAQ content, and launch copy, with direct CMS integration. Optimized page templates created for SEO and AI engine extraction.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Initial backlink acquisition from professional directories, industry blogs, and specialized media to establish domain authority from launch day.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of Google positions by page, organic traffic growth, progressive indexation, and GEO Score evolution during the first 3 months.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your new website in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "how to build an SEO-optimized website from scratch?", the LLM compiles web sources to formulate its answer. If your site does not exist in any cited source at launch, it starts with a citability deficit that only structured GEO work can close.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for building a new website", the LLM does not cite any agency by name. It provides a list of selection criteria (technical SEO expertise, portfolio, integrated SEO methodology) and directs toward directories like Clutch or Upwork. An agency that publishes a detailed website creation methodology with integrated SEO and GEO has the structural profile to be cited.</p><h4>Technical queries</h4><p>On "how to build a website optimized for SEO from day one", the LLM generates a guide of 8 to 12 points covering domain selection, URL structure, Hn tags, sitemap, and robots.txt. It does not mention the GEO dimension or AI crawler configuration. Content that integrates this additional layer stands out.</p><h4>CMS comparison queries</h4><p>On "best CMS for SEO in 2026", the LLM produces a comparison table of 5 to 7 platforms with WordPress consistently ranked first for SEO flexibility. No CMS is evaluated on AI crawler compatibility or native schema.org support without plugins.</p><h4>AI visibility queries</h4><p>On "how to make a new website visible on AI search engines", the LLM recommends schema.org markup, entity profiles (Wikipedia, Wikidata), and third-party presence. No structured methodology or citability measurement tool is mentioned.</p>',
    structuredData:
      '<p>For a new website, the schema.org types to integrate during development are: <code>WebSite</code> (homepage with sitelinks potential), <code>Organization</code> (entity identity), <code>Service</code> (service pages), <code>FAQPage</code> (FAQ pages), and <code>BreadcrumbList</code> (navigation). <code>WebSite</code> markup with <code>SearchAction</code> enables Google to display a sitelink search box, and all types feed LLM Knowledge Graphs from the very first crawl.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your new website\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (presence and depth of initial content), Legitimacy and Citability (early press mentions, backlinks, entity profiles), and Factual Density (schema.org markup richness and structured data integrated from launch).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for website creation',
    items: [
      {
        question: 'How much does it cost to build a website with integrated SEO?',
        answer:
          'The budget depends on the site type (brochure, e-commerce, custom application) and the volume of launch content. At Rankwell, SEO and GEO support for a website creation project starts from $2,000 (or GBP 1,500) for the technical specifications and architecture, with an additional $1,500 to $4,000/month (or GBP 1,200 to GBP 3,200/month) for content strategy and post-launch monitoring. This budget is separate from the website development cost itself.',
      },
      {
        question: 'How long does it take for a new website to appear on Google?',
        answer:
          'Initial indexation by Google takes 1 to 4 weeks after submitting the sitemap via Search Console. First rankings on niche queries appear between 2 and 4 months. Competitive keywords require 6 to 12 months of sustained effort. Rankwell accelerates the process by building a GEO-native architecture and submitting the site to AI crawlers from launch day.',
      },
      {
        question: 'Why integrate SEO during the build rather than after launch?',
        answer:
          'A website built without an SEO strategy accumulates technical debt: non-semantic URLs, inconsistent heading tags, missing canonical tags, duplicate content between staging and production pages. Fixing these foundations after launch costs 2 to 5 times more and delays indexation by 3 to 6 months. Rankwell integrates SEO and GEO requirements into the development brief to prevent this cost overrun.',
      },
      {
        question: 'Which CMS should I choose for an SEO and GEO-optimized website?',
        answer:
          'The choice depends on the project scope. WordPress suits brochure sites and blogs thanks to its SEO plugins (Yoast, Rank Math). Shopify and BigCommerce are suited to e-commerce. Next.js and Webflow offer full control over rendering and markup for custom projects. Rankwell evaluates each CMS on 4 criteria: SEO flexibility, AI crawler compatibility, native schema.org capability, and rendering performance.',
      },
      {
        question: 'How can my new website get cited by ChatGPT from launch?',
        answer:
          'AI citability rests on three pillars: factual content with verifiable data (figures, named entities, sourced claims), complete schema.org markup (WebSite, Organization, Service), and brand mentions on third-party sources (press, professional directories, comparison platforms). The Rankwell GEO Score measures these three dimensions and identifies the priority actions to establish citability from day one.',
      },
      {
        question: 'What is the difference between SEO and GEO for a new website?',
        answer:
          'SEO positions your pages in Google search results. GEO (Generative Engine Optimization) gets your brand and content cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews. For a new website, GEO is a competitive advantage: established competitors have years of SEO history, but most have no GEO strategy at all. Rankwell exploits this window by building AI citability from the design phase.',
      },
      {
        question: 'Why choose Rankwell for website creation?',
        answer:
          'Rankwell is the only agency integrating GEO from the website design phase. Our 7-step methodology covers SEO specifications, AI citability benchmarking, GEO-native architecture, CMS selection, schema.org markup, initial content strategy, and post-launch monitoring. The proprietary GEO Score measures your site visibility in AI engines, a metric no other provider offers at this stage of the project.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to launch a website visible from day one?',
    description:
      'Request a free GEO & SEO audit for your website creation project. Our SEO & GEO consultants analyze your industry, competitors, and strategy, and deliver a tailored technical brief.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
        { label: 'SEO for Doctors', href: '/en/geo-seo-agency/sector/medecin' },
        { label: 'SEO for Accountants', href: '/en/geo-seo-agency/sector/expert-comptable' },
        { label: 'SEO for Architects', href: '/en/geo-seo-agency/sector/architecte' },
      ],
      projets: [
        { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
        { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'AI Indexation Bots', href: '/en/glossary/robots-ia' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our website and digital project expertise',
    items: [
      { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
      { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      { label: 'Website Migration', href: '/en/geo-seo-agency/project/website-migration' },
      { label: 'Web App & SaaS', href: '/en/geo-seo-agency/project/web-app' },
      { label: 'Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
      { label: 'Accountants', href: '/en/geo-seo-agency/sector/expert-comptable' },
    ],
  },
};

export default data;
