/**
 * DATA: CMS Weebly Page (EN)
 * Route: /en/geo-seo-agency/cms/weebly
 *
 * English version adapted for the international Weebly market.
 * SaaS builder acquired by Square in 2018, approaching end-of-life (replaced by Square Online).
 * Very basic SEO, drag-and-drop, no native schema.org, limited redirects.
 * Content based on LLM auto-test (March 2026) and anglophone Weebly ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'weebly',
    title: 'Weebly SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Weebly websites. Technical audit, Square Online migration, native SEO limitations, performance: a complete methodology built for Weebly.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Weebly' },
    ],
    title: 'Weebly SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Headings limited to H2, URLs locked with /store/ and /blog/ prefixes, no native schema.org: SEO on Weebly faces structural constraints that generic agencies cannot solve. Our experts combine technical SEO and GEO to maximize your visibility or pilot a migration without traffic loss.',
    ctaText: 'Request a Weebly SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Weebly (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Weebly',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Weebly still powers roughly 700,000 active websites worldwide</strong>. The platform handles SSL, mobile responsiveness, and XML sitemap generation automatically. The drag-and-drop editor allows modifying page titles, meta descriptions, and alt text without code. For small sites under 20 pages, Weebly provides a baseline sufficient for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy on low-competition keywords.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Weebly natively limits heading tags to H2</strong> and enforces mandatory URL prefixes (/store/, /blog/). The site name is appended to every title tag, diluting keyword signals. No native schema.org, no sitemap control, severely limited 301 redirects. Since the <strong>2018 Square acquisition</strong>, no meaningful SEO updates have been released.',
    geoAngle:
      'According to Rankwell, Weebly sites are among the least citable by AI engines due to the absence of native schema.org and content structure limited to H2. A Weebly site not enriched through custom JSON-LD injection remains invisible to ChatGPT, Perplexity, and Gemini.',
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
    title: 'Common Weebly SEO problems and solutions',
    interpretation:
      'These problems are inherent to Weebly\'s closed architecture. Some can be mitigated through custom code injection, others require a migration to a more flexible CMS. A technical audit identifies which limitations are fixable and which justify a platform change.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Heading tags limited to H2 (no native H3/H4)',
        'Flat Hn structure, Google cannot interpret content hierarchy',
        'H3/H4 injection via the built-in HTML code editor or third-party Weebly App Center apps',
      ],
      [
        'URLs locked with mandatory prefixes (/store/, /blog/, /category/)',
        'Non-optimized URLs, English prefixes on non-English sites',
        'Keyword integration in the editable portion of the slug, 301 redirects if migrating',
      ],
      [
        'Site name appended to every title tag',
        'Titles too long, primary keyword signal diluted',
        'Reducing the site name to the bare minimum in Weebly general settings',
      ],
      [
        'No native schema.org markup',
        'No rich snippets, invisibility to AI engines',
        'Manual JSON-LD injection in the header or footer via the Weebly code editor',
      ],
      [
        'No control over the auto-generated XML sitemap',
        'Non-strategic pages indexed, crawl budget wasted',
        'Manual deindexation via meta robots noindex on non-strategic pages',
      ],
      [
        'Poor loading performance (no configurable CDN, no advanced caching)',
        'High LCP on mobile, degraded Core Web Vitals',
        'Image compression before upload, reducing heavy drag-and-drop elements (videos, GIFs), enabling lazy loading via code embed',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Weebly',
    subtitle: 'A structured 8-step approach to Weebly SEO, designed around the platform-specific constraints of a SaaS builder approaching end-of-life.',
    steps: [
      {
        title: 'Weebly technical audit',
        subtitle: 'Full analysis of the Weebly configuration: Hn structure, URLs, title tags, sitemap, performance, and platform limitations.',
        items: [
          'Inventory of all pages and their Hn structure (H1/H2 only or H3+ injected)',
          'URL analysis: mandatory prefixes, modified slugs, active redirects',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Verification of the auto-generated XML sitemap and indexed pages',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Weebly site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Migration diagnostic',
        subtitle: 'Assessment of whether migrating from Weebly to a more capable CMS (WordPress, Webflow, Shopify) or to Square Online is the right move.',
        items: [
          'Inventory of pages, content, and media to migrate',
          'Analysis of current URLs and complete 301 redirect plan',
          'CMS comparison based on needs (portfolio, e-commerce, blog)',
          'SEO risk estimation for the migration and mitigation plan',
        ],
      },
      {
        title: 'Optimization within Weebly constraints',
        subtitle: 'If migration is not immediate, maximum SEO optimization within the platform\'s constrained environment.',
        items: [
          'H3/H4 tag injection via the built-in HTML code editor',
          'Page title optimization (reducing site name, front-loading keywords)',
          'Image compression and renaming before upload (alt text, descriptive file names)',
          'Adding meta robots noindex on non-strategic pages',
        ],
      },
      {
        title: 'Schema.org injection',
        subtitle: 'Manual addition of JSON-LD structured data in Weebly to compensate for the absence of native markup.',
        items: [
          'WebSite and Organization markup in the global header via the code editor',
          'BreadcrumbList injected page by page via the Weebly "Header Code" field',
          'FAQPage on question-and-answer pages',
          'LocalBusiness for local business sites (address, hours, reviews)',
        ],
      },
      {
        title: 'Content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI engine citability, adapted to the constraints of the Weebly editor.',
        items: [
          'Blog articles of 800+ words with Hn structure injected via HTML',
          'Pillar pages covering the main topics of the business',
          'Internal linking between pages and articles (contextual links within content)',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through quality backlinks, critical given that Weebly offers few internal technical levers.',
        items: [
          'Backlinks from local directories, thematic blogs, and partner websites',
          'Listings on review platforms (Google Business Profile, Trustpilot, Yelp)',
          'Guest posts on high-authority websites in the relevant industry',
          'Brand mentions in comparison guides and roundups to strengthen AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and migration tracking if applicable.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (pages, blog, store)',
          'GEO Score: visibility across AI engines',
          'Monitoring of 301 redirects and post-migration indexation if applicable',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your team, whether you stay on Weebly or migrate to another CMS.',
    items: [
      {
        id: 1,
        title: 'Weebly technical audit report',
        description: 'Full diagnostic of your Weebly site: Hn structure (native H2 vs injected H3+), URLs with mandatory prefixes, appended title tags, Core Web Vitals, auto-generated sitemap, with a list of fixable issues and non-bypassable limitations.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Weebly schema.org injection kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and LocalBusiness markup in JSON-LD, ready to paste into the Weebly "Header Code" field. Integration guide with screenshots for each page type.',
      },
      {
        id: 4,
        title: 'SEO-safe migration plan',
        description: 'Page and content inventory, old-to-new URL mapping table, complete 301 redirect plan, batch migration schedule, and post-migration validation checklist.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from local directories, thematic blogs, and industry partner sites. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, 301 redirect status (if migration in progress), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Weebly site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "what is the easiest tool to build a website?", the LLM compiles web sources to formulate its answer. If your Weebly site does not appear in any cited source, it is invisible in this new discovery channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Weebly site?", the LLM does not name any agency directly. It provides generic selection criteria (platform experience, understanding of Weebly technical limits). The volume of dedicated English-language sources is very low (2 to 3 sites). The rare mentions reference Web Alliance and niche blogs like NoCode-SEO. No agency is recommended by name.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Weebly website", the LLM generates a guide covering 7 to 10 basic points: titles, meta descriptions, alt text, URLs, sitemap. It notes that Weebly handles SSL and responsive design automatically but that advanced SEO options are limited. Preferred sources are the Weebly Help Center, Page Optimizer Pro, and Weeblytutorials. No agency is cited.</p><h4>CMS comparison queries</h4><p>On "Weebly vs Wix for SEO", the LLM produces a comparison systematically unfavorable to Weebly. Wix is presented as superior: built-in SEO Wiz, native Google Search Console integration, more performant mobile templates. Weebly is criticized for hard-to-find SEO settings, the absence of an SEO checklist, and poor mobile performance.</p><h4>Migration queries</h4><p>On queries related to Weebly migration, the LLM confirms the platform is approaching end-of-life and the transition to Square Online. It clarifies that migration is not automatic: the site must be recreated entirely. 301 redirects must be configured manually. No source covers this angle with a structured SEO methodology.</p>',
    structuredData:
      'Weebly provides no native schema.org markup whatsoever. For a Weebly site, the recommended types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation). These must be manually injected as JSON-LD via the Weebly "Header Code" field (per-page settings) or via the global footer. This manual injection is the only way to obtain Google rich snippets and provide LLMs with exploitable structured data.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Weebly site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities). On Weebly, Factual Density is typically the lowest score due to the complete absence of native schema.org.',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Weebly SEO',
    items: [
      {
        question: 'How much does Weebly SEO cost?',
        answer:
          'The SEO budget for a Weebly site depends on the number of pages, the technical limitations to work around, and whether migration is needed. At Rankwell, Weebly SEO engagements start from $1,000/month for a portfolio site under 20 pages (optimization within platform limits). If a migration to WordPress, Webflow, or Shopify is required, an additional $2,500 to $6,000 covers the SEO-managed migration (301 redirects, URL mapping, post-migration validation).',
      },
      {
        question: 'How long does it take to see SEO results on Weebly?',
        answer:
          'Technical fixes accessible on Weebly (titles, meta descriptions, alt text, H3/H4 injection) produce measurable effects within 1 to 2 months. Ranking on competitive keywords is limited by platform constraints: without migration, gains plateau quickly. If migrating to a more capable CMS, first post-migration results appear within 2 to 4 months when 301 redirects are correctly configured. Rankwell provides a forecast timeline based on the initial audit.',
      },
      {
        question: 'Should I migrate from Weebly or stay on the platform?',
        answer:
          'Weebly has been approaching end-of-life since the Square acquisition in 2018. The platform receives no meaningful SEO updates and Square is pushing users toward Square Online. If your site generates organic traffic, a managed migration (with a complete 301 redirect plan) preserves your SEO assets. For sites under 10 pages with low traffic, recreating the site directly on a modern CMS (WordPress, Webflow) is often more cost-effective. Rankwell evaluates each situation and recommends the appropriate solution.',
      },
      {
        question: 'How can I improve my Weebly site loading speed?',
        answer:
          'Weebly offers neither a configurable CDN nor an advanced caching system. The available levers are image compression before upload (WebP or optimized JPEG under 200 KB), reducing heavy elements in the drag-and-drop editor (autoplay videos, animated GIFs, third-party widgets), and enabling lazy loading via footer code injection. Rankwell measures Core Web Vitals on every page and identifies the elements responsible for slowness.',
      },
      {
        question: 'How can I get my Weebly site cited by ChatGPT and Perplexity?',
        answer:
          'Weebly sites are particularly disadvantaged in AI citability: no native schema.org, flat heading structure, typically short content. To increase the chances of being cited, three actions are critical: manually injecting JSON-LD (WebSite, Organization, FAQPage), producing long-form content with verifiable factual data, and earning brand mentions on third-party sources (directories, blogs, local press). The Rankwell GEO Score measures these three dimensions and identifies the priority levers.',
      },
      {
        question: 'Is Weebly still a viable choice for SEO in 2026?',
        answer:
          'Weebly is no longer a recommended choice for SEO in 2026. The platform has been in minimal maintenance since the Square acquisition, SEO features have not evolved (no schema.org, limited heading tags, no sitemap control), and Square is directing its investments toward Square Online. For an existing site, Rankwell maximizes SEO within platform limits while preparing a migration to a more flexible CMS (WordPress, Webflow, Shopify depending on the need).',
      },
      {
        question: 'Why choose Rankwell for Weebly SEO?',
        answer:
          'Rankwell combines knowledge of Weebly\'s technical limitations (restricted heading tags, locked URLs, no native schema.org) with expertise in SEO migration and AI visibility (GEO) that the vast majority of SEO agencies have not yet integrated. Our 8-step methodology includes a migration diagnostic (stay or go?) and full management of 301 redirects. The proprietary GEO Score measures your visibility across AI engines, a critical issue for Weebly sites that start with a structural citability deficit.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Weebly site?',
    description:
      'Request a free GEO & SEO audit of your Weebly site. Our SEO & GEO consultants analyze your technical constraints, your migration potential, and your AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Artisans', href: '/en/geo-seo-agency/sector/artisan' },
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
        { label: 'SEO for Local Shops', href: '/en/geo-seo-agency/sector/commerce-proximite' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'SEO Migration', href: '/en/geo-seo-agency/project/migration' },
      ],
      cms: [
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'SEO Migration', href: '/en/glossary/migration-seo' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Wix', href: '/en/geo-seo-agency/cms/wix' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Framer', href: '/en/geo-seo-agency/cms/framer' },
    ],
  },
};

export default data;
