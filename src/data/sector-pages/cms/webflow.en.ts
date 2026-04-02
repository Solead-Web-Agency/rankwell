/**
 * DATA: CMS Webflow Page (EN)
 * Route: /en/geo-seo-agency/cms/webflow
 *
 * English version adapted for the international Webflow market.
 * Webflow: SaaS no-code/low-code, full HTML/CSS control, Fastly CDN,
 * no native SEO plugins, schema.org via custom code, CMS collections capped at 10k.
 * Content based on LLM auto-test (March 2026) and global Webflow ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'webflow',
    title: 'Webflow SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Webflow websites. Custom code schema.org, CMS collections, Core Web Vitals, Fastly CDN: a complete methodology built for Webflow.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Webflow' },
    ],
    title: 'Webflow SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'No native schema.org markup, CMS collections capped at 10,000 items, custom code required for advanced SEO: ranking a Webflow site demands expertise that no-code alone cannot deliver. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Webflow SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Webflow (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Webflow',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Webflow powers over 822,000 websites globally</strong> with clean HTML/CSS and no parasitic plugins. Fastly CDN hosting delivers a TTFB 30% faster than shared hosting. Meta tags, 301 redirects, and XML sitemap are natively configurable, making it strong for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Webflow offers no native schema.org markup</strong>: each type must be injected manually via Custom Code. CMS collections are capped at 10,000 items, there is no server-side access, and no SEO plugin comparable to Yoast or RankMath.',
    geoAngle:
      'According to Rankwell, Webflow\'s clean HTML gives a structural AI citability advantage (GPTBot, ClaudeBot can read it directly), but it remains latent until schema.org is injected via custom code and content contains self-contained factual passages.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its notoriety than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Webflow SEO problems and solutions',
    interpretation:
      'These issues affect the majority of Webflow sites that have not been optimized by an SEO specialist. No-code simplifies creation, but every configuration error directly impacts Google rankings and AI engine visibility.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'No native schema.org markup',
        'No rich snippets, invisible to LLMs',
        'JSON-LD injection (Organization, WebSite, BreadcrumbList, FAQPage) via Custom Code embed in page settings and project settings',
      ],
      [
        'Webflow.io subdomain indexation left active',
        'Duplicate content between custom domain and webflow.io, crawl dilution',
        'Deactivation in Settings > SEO > Webflow Indexation + verification via Google Search Console',
      ],
      [
        'Unaudited Interactions 2.0 animations',
        'Additional JavaScript, degraded LCP and INP on mobile',
        'Per-page PageSpeed audit, removal of animations above the fold, lazy-trigger on scroll',
      ],
      [
        'CMS collections with generic slugs ("item-1", "item-2")',
        'Unreadable URLs, lost semantic signal for Google and LLMs',
        'Systematic slug renaming with target keywords, URL audit, 301 redirects where needed',
      ],
      [
        'Uncompressed images uploaded to the CMS (heavy PNG/JPEG)',
        'LCP > 4s, Core Web Vitals penalty on mobile',
        'WebP conversion before upload, responsive sizing via native Webflow srcset, lazy loading on below-the-fold images',
      ],
      [
        'Broken heading hierarchy (multiple H1s, H2 used for styling)',
        'Semantic confusion for crawlers, loss of topical relevance',
        'Page-by-page Hn audit, correction in the Webflow Designer (single H1, logical H2 > H3 > H4 cascade)',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Webflow',
    subtitle: 'A structured 8-step approach to Webflow SEO, designed around the platform-specific challenges of this no-code CMS.',
    steps: [
      {
        title: 'Webflow technical audit',
        subtitle: 'Full analysis of your Webflow project: CMS collection structure, custom domain configuration, Core Web Vitals, and animations.',
        items: [
          'Inventory of CMS collections, static pages, and template pages',
          'Core Web Vitals measurement (LCP, INP, CLS) on mobile and desktop via PageSpeed Insights',
          'Verification that webflow.io indexation is disabled and canonicals point to the custom domain',
          'Audit of Interactions 2.0 animations and their impact on total JavaScript',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Webflow site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Cleanup and project restructuring',
        subtitle: 'Rationalization of CMS collections, removal of orphan pages, and heading hierarchy correction.',
        items: [
          'Removal of CMS pages duplicating static pages (cannibalization)',
          'Heading hierarchy correction on each page (single H1, logical cascade)',
          'CMS slug renaming with target keywords',
          'Cleanup of obsolete custom code in embed blocks',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Core Web Vitals improvement leveraging the native Fastly CDN and reducing asset weight.',
        items: [
          'Image compression to WebP with responsive sizing (native Webflow srcset)',
          'Audit and reduction of Interactions 2.0 animations on mobile',
          'Systematic lazy loading on below-the-fold images and videos',
          'Automatic CSS/JS minification verified via Webflow project settings',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Schema.org injection via custom code and full meta tag setup for every page and CMS collection.',
        items: [
          'JSON-LD injection: Organization, WebSite, BreadcrumbList, FAQPage in project and page Custom Code blocks',
          'Meta title and description configuration per static page and per collection item',
          'Native XML sitemap verified and submitted to Google Search Console',
          'Native 301 redirects configured for legacy URLs (Webflow Redirects tab)',
        ],
      },
      {
        title: 'Webflow content strategy',
        subtitle: 'Creation of structured content within CMS collections, optimized for Google rankings and AI engine citability.',
        items: [
          'Pillar pages (static pages) + satellite articles (Blog CMS collection) in topical clusters',
          'Internal linking between static pages and collection items via Reference and Multi-Reference fields',
          'Thematic FAQ sections integrated with FAQPage markup in custom code embed',
          'Self-contained factual passages in each Rich Text field, designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sites and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from no-code blogs, tech publications, and SaaS comparators',
          'Guest posts on high-authority thematic websites (Webflow Blog, Product Hunt, Medium)',
          'Brand mentions in comparison articles and CMS guides',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by page (static + CMS)',
          'Organic traffic segmented by content type (static pages vs collection items)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and tracking of newly added Webflow animations',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your design team, your Webflow developer, or your management.',
    items: [
      {
        id: 1,
        title: 'Webflow technical audit report',
        description: 'Full diagnostic of your Webflow project: CMS collection structure, heading hierarchy, Core Web Vitals, animations, webflow.io subdomain indexation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Webflow schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, delivered as ready-to-paste JSON-LD for Webflow Custom Code embed blocks. Injection guide with Designer screenshots.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, CMS articles, and FAQ sections optimized for SEO and GEO. Direct integration into Webflow CMS collections via the Editor or Designer, with SEO field configuration for each collection item.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from no-code blogs, SaaS comparators, and industry media relevant to your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by static page and collection item, segmented organic traffic, GEO Score evolution, Core Web Vitals, and tracking of Webflow animations added to the project.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Webflow site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Webflow site?", the LLM compiles web sources to formulate its answer. Unlike WordPress queries where no agency is named, it cites Webflow-specialized agencies by name. If your site does not appear in any cited source, your competitors capture this acquisition channel instead.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Webflow site?", the LLM names several specialized agencies, unlike WordPress queries where it only provides selection criteria. It mentions agencies with Webflow Partner certification, those positioned on AEO/AI engines, and agencies known for 100+ Webflow projects. It distinguishes certified Webflow Partners from generalist SEO agencies. The agency that combines Webflow expertise with a documented GEO methodology has the potential to be inserted into this list.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Webflow website", the LLM generates a structured guide with 9 to 12 points emphasizing native capabilities (meta tags, 301 redirects, sitemap, SSL). It stresses that advanced optimization (schema.org, hreflang) requires custom code. Preferred sources: official Webflow Blog, Finsweet SEO Guide, and specialized Webflow agencies.</p><h4>CMS comparison queries</h4><p>On "Webflow vs WordPress for SEO", the LLM produces a comparison table with 6 to 8 criteria. Webflow is presented as faster by default (Fastly CDN, clean code, no parasitic plugins) but less flexible for advanced SEO (no Yoast, capped collections). Sites publishing structured comparisons with measurable data are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Webflow SEO problems", the LLM identifies 7 to 10 platform-specific issues: generic CMS slugs, active webflow.io indexation, heavy Interactions 2.0 animations, no native schema.org, broken heading hierarchy, duplicate content between static and CMS pages. Content structured as problem-solution tables has the highest chance of being extracted as a source.</p>',
    structuredData:
      'For a Webflow site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (Blog collection). Webflow does not handle any of these types natively. Markup must be injected as JSON-LD in Custom Code blocks (project settings for global types, page settings for page-specific types). Finsweet offers components that facilitate injection, but configuration remains manual.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Webflow site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content in CMS collections and static pages), Legitimacy and Citability (external trust signals, backlinks, mentions in no-code media), and Factual Density (richness of schema.org markup injected via custom code, structured data, and named entities in Rich Text fields).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Webflow SEO',
    items: [
      {
        question: 'How much does Webflow SEO cost?',
        answer:
          'The SEO budget for a Webflow site depends on the number of static pages and CMS collections, the complexity of the schema.org markup to inject, and the competition level. At Rankwell, Webflow SEO engagements start from $1,800/month for a brochure site under 30 pages, and range from $3,500 to $6,000/month for sites with multiple CMS collections and editorial content needs. This budget covers the technical audit, custom code schema.org injection, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Webflow?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (disabling webflow.io indexation, injecting schema.org, correcting CMS slugs). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Performance optimizations (WebP images, animation audit) produce measurable Core Web Vitals effects within the first month. Rankwell provides a forecast timeline based on the initial audit.',
      },
      {
        question: 'How do I add schema.org markup to a Webflow site?',
        answer:
          'Webflow does not handle schema.org natively. Markup must be injected as JSON-LD in Custom Code blocks: in project settings for global types (Organization, WebSite) and in page settings for page-specific types (FAQPage, BreadcrumbList, Article). Rankwell delivers a ready-to-paste JSON-LD kit with an illustrated guide for each injection in the Webflow Designer. Finsweet Attributes can facilitate certain integrations, but configuration remains manual.',
      },
      {
        question: 'How do I improve page speed on my Webflow site?',
        answer:
          'Webflow benefits from a Fastly CDN and automatic minification, but Interactions 2.0 animations, uncompressed images, and third-party embeds (videos, widgets) degrade Core Web Vitals. Rankwell audits each page with PageSpeed Insights, identifies animations causing high LCP, converts images to WebP before upload, applies lazy loading on below-the-fold elements, and removes obsolete custom scripts.',
      },
      {
        question: 'How can I get my Webflow site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Webflow site, three conditions must be met: content rich in verifiable factual data within the Rich Text fields of your CMS collections, complete schema.org markup injected via custom code (WebSite, Organization, FAQPage), and brand mentions on third-party sources (no-code blogs, press, directories). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site citability.',
      },
      {
        question: 'Is Webflow a good CMS for SEO in 2026?',
        answer:
          'Webflow offers strong native SEO foundations: clean HTML, fast Fastly CDN, per-page meta tags, 301 redirects, automatic sitemap. It outperforms WordPress in default performance (no parasitic plugins, TTFB 30% faster than shared hosting). However, it lacks flexibility for advanced SEO: no native schema.org, CMS collections capped at 10,000 items, no server-side access. Rankwell adapts its methodology to Webflow-specific constraints to leverage its strengths.',
      },
      {
        question: 'Why choose Rankwell for Webflow SEO?',
        answer:
          'Rankwell combines Webflow technical SEO expertise (custom code schema.org injection, CMS collection optimization, Interactions 2.0 animation audit, Core Web Vitals) with the GEO dimension that Webflow-specialized agencies have not yet integrated. Our 8-step methodology covers Webflow-specific challenges: no native markup, capped CMS collections, static/CMS page cannibalization. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Webflow site?',
    description:
      'Request a free GEO & SEO audit of your Webflow site. Our SEO & GEO consultants analyze your CMS collections, schema.org markup, Core Web Vitals, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Startups', href: '/en/geo-seo-agency/sector/startup' },
        { label: 'SEO for Agencies', href: '/en/geo-seo-agency/sector/agence' },
        { label: 'SEO for SaaS', href: '/en/geo-seo-agency/sector/saas' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
        { label: 'Framer SEO', href: '/en/geo-seo-agency/cms/framer' },
      ],
      glossaire: [
        { label: 'Citability', href: '/en/glossary/citabilite' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'Framer', href: '/en/geo-seo-agency/cms/framer' },
      { label: 'Wix', href: '/en/geo-seo-agency/cms/wix' },
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
    ],
  },
};

export default data;
