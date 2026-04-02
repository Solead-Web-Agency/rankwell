/**
 * DATA: Web App & SaaS Project Page (EN)
 * Route: /en/geo-seo-agency/project/web-app
 *
 * Adapted for US/UK/UAE SaaS markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'web-app',
    title: 'Web App & SaaS SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO rankings and AI engine visibility (GEO) for web applications and SaaS platforms. JS rendering, SoftwareApplication schema, content hub.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Web App & SaaS' },
    ],
    title: 'SEO & GEO for Web Apps and SaaS: Full Methodology',
    subtitle:
      'JavaScript rendering delays, content locked behind login walls, limited indexable pages: ranking a SaaS application requires specialized expertise. Our experts combine SEO and GEO to position your landing pages on Google and get your solution cited by AI engines.',
    ctaText: 'Request a SaaS SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a web application',
    technicalContext:
      'SaaS applications built on React, Angular, or Vue generate HTML client-side. Googlebot executes JavaScript with a <strong class="text-secondary dark:text-accent">5 to 20 second delay per page</strong>, leaving dynamically injected content invisible. Crawl budget is wasted on non-indexable application states (modals, tabs, filtered views).',
    marketData:
      'Content marketing drives <strong class="text-secondary dark:text-accent">67% of leads</strong> for B2B SaaS companies, yet most allocate budget to paid channels. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> helps SaaS brands reclaim high-intent organic traffic from aggregators like G2 and Capterra.',
    geoAngle:
      'According to Rankwell, structured data plays a dual role: powering Google rich results and providing LLMs with a semantic layer for factual extraction. A properly marked-up SoftwareApplication type becomes an entity AI engines can directly ingest.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, structured data plays a dual role: it powers Google rich results (rich snippets, FAQ, reviews) and provides LLMs with an explicit semantic layer that facilitates factual extraction. A properly marked-up SoftwareApplication type becomes an entity that AI engines can directly ingest.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'Learn more about structured data',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your SaaS application',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to web applications and SaaS platforms.',
    steps: [
      {
        title: 'Technical audit: rendering and crawler accessibility',
        subtitle: 'Analysis of JavaScript rendering behavior, Googlebot interaction with dynamic pages, and content accessibility behind authentication walls.',
        items: [
          'JS rendering test: comparison of initial HTML vs. DOM rendered by Googlebot',
          'Detection of invisible content (lazy loading, SPA routing, modals)',
          'Audit of authenticated sections: publicly accessible pages vs. locked content',
          'Server log analysis: crawl rate on landing pages vs. application states',
        ],
      },
      {
        title: 'GEO audit: SaaS citability and AI presence',
        subtitle: 'Assessment of your solution visibility in ChatGPT, Perplexity, and Gemini responses for software category queries.',
        items: [
          'Testing 20 to 30 "best [category] tool" queries across LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct SaaS competitors',
          'Identification of sources cited by LLMs (G2, Capterra, tech press, blogs)',
        ],
      },
      {
        title: 'Content architecture and thematic hub',
        subtitle: 'Building an indexable page structure around the product: use-case landing pages, glossary, and resource center for SEO and GEO.',
        items: [
          '"Solutions by persona" and "solutions by industry" pages targeting specific queries',
          'Comparison pages: "alternative to [competitor]" and "vs [competitor]"',
          'Industry glossary optimized for definitional queries',
          'Resource hub: case studies, templates, ROI calculators',
        ],
      },
      {
        title: 'On-page optimization and SoftwareApplication markup',
        subtitle: 'Deploying schema.org SoftwareApplication on product and pricing pages, with factual data designed for LLM extraction.',
        items: [
          'SoftwareApplication markup with category, OS, pricing, and aggregate ratings',
          'Server-side generated meta tags (SSR or pre-rendering)',
          'Self-contained passages on each landing page: features, pricing, integrations',
          'Structured FAQ with FAQPage markup per page',
        ],
      },
      {
        title: 'SaaS content marketing strategy',
        subtitle: 'Creating informational content targeting top-of-funnel queries: guides, industry studies, and proprietary benchmarks.',
        items: [
          '"How to [solve problem]" articles targeting informational queries for each persona',
          'Quantified case studies with verifiable metrics (ROI, time saved, adoption rate)',
          'Industry benchmarks published under open license to generate natural backlinks',
          'Public product documentation indexed and structured as topic clusters',
        ],
      },
      {
        title: 'Authority and SaaS link building',
        subtitle: 'Building solution authority through SaaS-specific channels: comparison platforms, tech press, and integration partnerships.',
        items: [
          'Optimized profiles on G2, Capterra, TrustRadius, and Product Hunt',
          'Backlinks from tech press articles and integration partnership pages',
          'Publishing proprietary data to earn citations in industry reports',
          'Each third-party mention strengthens both PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting with positions by thematic cluster, organic traffic by page type, generated leads, and GEO Score evolution.',
        items: [
          'Google positions tracked by landing page and content hub article',
          'Organic traffic segmented by page type (landing, blog, documentation, glossary)',
          'GEO Score: AI engine citations on software category queries',
          'Iterative reallocation toward clusters with highest MQL conversion rate',
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
        title: 'Technical audit report',
        description: 'JavaScript rendering diagnostic (raw HTML vs. rendered DOM comparison), inventory of pages invisible to Googlebot, server log analysis, and SSR/pre-rendering corrective action plan.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your SaaS solution on ChatGPT, Perplexity, and Gemini for "best [category] tool" queries, with competitive benchmark and detailed GEO Score breakdown.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'SoftwareApplication, Offer, AggregateRating, and FAQPage markup adapted to your product and pricing pages, with integration guide for Next.js, Nuxt, or Angular.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of use-case landing pages, "vs [competitor]" comparison pages, quantified case studies, and industry glossary articles. Direct CMS integration or via Git.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from SaaS comparison platforms (G2, Capterra), tech blogs, and specialized media. Ongoing tracking of review profiles and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of positions by thematic cluster, organic traffic segmented by page type (landing, blog, docs), MQLs generated through organic, and GEO Score evolution.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your SaaS application in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a decision-maker asks ChatGPT "what is the best project management tool for an SMB?", the LLM compiles web sources to formulate its answer. If your solution does not appear in any cited source (comparison site, tech press, blog), it is absent from this recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for SaaS web applications", the LLM does not name any specific agency. It provides a list of evaluation criteria (JavaScript rendering expertise, SaaS content marketing experience, SoftwareApplication schema knowledge, measurable case studies) and directs toward directories like Clutch and G2. An agency publishing detailed methodologies and verifiable SaaS benchmarks has the structural profile to be cited.</p><h4>Technical SEO strategy queries</h4><p>On "how to improve SEO for a SaaS web application", the LLM generates a structured guide of 8 to 12 points covering content marketing (blog, guides, glossaries), technical SEO (JS rendering, pre-rendering, SSR), and comparison pages. It cites SaaS-focused blogs (Ahrefs, HubSpot, Moz) but no agency.</p><h4>Framework comparison queries</h4><p>On "Next.js vs Nuxt for SaaS SEO", the LLM produces a comparison covering SSR capabilities, static generation, and SEO plugin ecosystems. Sites publishing structured comparisons with measurable criteria (load time, URL flexibility, schema support) are favored as extraction sources.</p><h4>AI visibility queries for SaaS</h4><p>On "how to get my SaaS cited by ChatGPT and Perplexity", the LLM recommends presence on G2, Capterra, and TrustRadius, publishing proprietary data, and deploying SoftwareApplication markup. No mention of GEO methodology or citability scoring appears in the results.</p>',
    structuredData:
      '<p>For a SaaS web application, the recommended schema.org types are: <code>SoftwareApplication</code> (on the product and pricing pages, with category, operating system, and pricing offer), <code>Organization</code> (about page), <code>FAQPage</code> (help center and public FAQ), <code>BreadcrumbList</code> (navigation). <code>SoftwareApplication</code> markup with <code>Offer</code> and <code>AggregateRating</code> enables Google rich snippets and gives LLMs structured product data to extract for their category recommendations.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your SaaS application\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (breadth and depth of the content hub, public documentation, industry glossary), Legitimacy and Citability (reviews on G2/Capterra, tech press mentions, backlinks from specialized blogs), and Factual Density (SoftwareApplication markup richness, structured product data, named entities in landing pages).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for web apps and SaaS',
    items: [
      {
        question: 'How much does SEO cost for a SaaS web application?',
        answer:
          'SaaS SEO budgets depend on the number of landing pages to create, rendering complexity, and competition level in your software category. At Rankwell, SaaS SEO engagements start from $2,500/month (or GBP 2,000/month) for solutions with fewer than 20 landing pages and an existing blog. Multi-product publishers targeting several markets range from $6,000 to $12,000/month. This covers technical audit, content strategy, link building, and GEO monitoring.',
      },
      {
        question: 'How long before SEO results appear on a SaaS application?',
        answer:
          'Initial results typically appear between 3 and 6 months for informational queries (guides, glossary) with low competition. Competitive category queries ("best [category] tool") require 6 to 12 months of sustained work. Fixing JavaScript rendering issues produces measurable effects within the first month in terms of indexed pages. Rankwell provides a realistic timeline based on the competitive audit and content volume required.',
      },
      {
        question: 'How do you index pages from a JavaScript application (React, Angular, Vue)?',
        answer:
          'Single-page JavaScript applications (SPAs) create indexation challenges: Googlebot executes JS with a 5 to 20 second delay, and some dynamically rendered content never gets crawled. The solution is SSR (Server-Side Rendering) via Next.js, Nuxt, or Angular Universal, or pre-rendering for static pages. Rankwell audits the actual rendering of your pages using server logs and Google Search Console, then implements the right technical solution for your stack.',
      },
      {
        question: 'Which framework is best for SaaS SEO?',
        answer:
          'Next.js (React) is the most mature framework for SaaS SEO, with native support for SSR, SSG, and ISR. Nuxt (Vue) offers equivalent capabilities. Angular Universal suits existing Angular applications. For SaaS products with limited public content, a headless CMS (Contentful, Strapi) paired with a static site generator works well. Rankwell has SEO and GEO expertise across these frameworks and adapts its methodology to each technical stack.',
      },
      {
        question: 'How can my SaaS get cited by ChatGPT and Perplexity?',
        answer:
          'LLMs cite SaaS solutions found in three types of sources: comparison platforms (G2, Capterra, TrustRadius), tech press and specialized blogs, and educational content published by the vendor (benchmarks, industry studies). Schema.org SoftwareApplication markup reinforces semantic comprehension. The Rankwell GEO Score measures these three dimensions and identifies priority levers to increase your solution citability.',
      },
      {
        question: 'What is the difference between SEO and GEO for a SaaS application?',
        answer:
          'SEO positions your landing pages in Google search results on queries like "[category] tool". GEO (Generative Engine Optimization) gets your solution cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews when a prospect asks "what is the best [category] software?". Both disciplines share fundamentals (structured content, domain authority) but GEO additionally requires verifiable factual data and complete SoftwareApplication markup. Rankwell integrates both approaches in a unified methodology.',
      },
      {
        question: 'Why choose Rankwell for SaaS web application SEO?',
        answer:
          'Rankwell combines technical SEO expertise (JS rendering, SaaS content architecture, SoftwareApplication schema) with the GEO dimension that most SEO agencies have not yet integrated. Our 7-step methodology is built for SaaS challenges: content behind login walls, limited indexable pages, content marketing dependency, and aggregator competition on category queries. The proprietary GEO Score measures your solution visibility in AI engines, a metric no other provider offers.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to make your SaaS application visible?',
    description:
      'Request a free GEO & SEO audit of your web application. Our SEO & GEO consultants analyze your rendering, content architecture, and AI engine visibility, and deliver a tailored action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Startups', href: '/en/geo-seo-agency/sector/startup' },
        { label: 'SEO for Fintech', href: '/en/geo-seo-agency/sector/fintech' },
        { label: 'SEO for Franchises', href: '/en/geo-seo-agency/sector/franchise' },
      ],
      projets: [
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
        { label: 'Blog', href: '/en/geo-seo-agency/project/blog' },
      ],
      cms: [
        { label: 'Next.js SEO', href: '/en/geo-seo-agency/cms/nextjs' },
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Content Marketing SEO', href: '/en/glossary/content-marketing-seo' },
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our tech and digital expertise',
    items: [
      { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      { label: 'Blog', href: '/en/geo-seo-agency/project/blog' },
      { label: 'Marketplace', href: '/en/geo-seo-agency/project/marketplace' },
      { label: 'Franchises', href: '/en/geo-seo-agency/sector/franchise' },
    ],
  },
};

export default data;
