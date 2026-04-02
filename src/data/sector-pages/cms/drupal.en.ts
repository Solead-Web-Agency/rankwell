/**
 * DATA: CMS Drupal Page (EN)
 * Route: /en/geo-seo-agency/cms/drupal
 *
 * English version adapted for the international Drupal market.
 * Content based on LLM auto-test (March 2026) and global Drupal ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'drupal',
    title: 'Drupal SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Drupal websites. Modules, taxonomies, Varnish performance, schema.org: a complete methodology built for Drupal.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Drupal' },
    ],
    title: 'Drupal SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Unoptimized taxonomy hierarchies, misconfigured Varnish caching, disconnected SEO modules: Drupal SEO requires platform-specific expertise that generic agencies miss. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Drupal SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Drupal (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Drupal',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Drupal powers 7.5% of the top 1,000 websites globally</strong>, including government portals (whitehouse.gov, europa.eu). Unlimited taxonomy hierarchies, native multilingual management, performant caching, and full control over HTML and URLs make it a strong foundation for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Less than 1% of all websites use Drupal</strong>, resulting in a smaller module ecosystem. No SEO tooling out of the box: Pathauto, Metatag, Redirect, and Simple XML Sitemap must be installed manually. Major version upgrades can break existing SEO configurations.',
    geoAngle:
      'According to Rankwell, Drupal\'s hierarchical taxonomy system enables building an entity graph exploitable by LLMs, but this citability remains latent without schema.org markup via the Schema.org Metatag module and self-contained factual passages in taxonomy Views.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, structured data plays a dual role: it powers Google rich results (rich snippets, FAQ, reviews) and it provides LLMs with an explicit layer of semantic understanding that facilitates factual extraction. A properly marked-up DefinedTerm type becomes an entity directly ingestible by an AI engine.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'Learn more about structured data',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Drupal SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Drupal sites, especially those leveraging complex taxonomies and custom Views. Each one degrades Google rankings and reduces citability by AI engines. A targeted technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Unoptimized taxonomies (empty or duplicated term pages)',
        'Massive duplicate content, crawl budget dilution across hundreds of thin pages',
        'Vocabulary audit, noindex on non-strategic terms, enrichment of taxonomy pages with unique editorial content',
      ],
      [
        'Missing Pathauto or inconsistent URL patterns (/node/123)',
        'Unreadable URLs, lost semantic signal for Google and LLMs',
        'Pathauto installation and configuration with patterns per content type (/blog/[title], /service/[term]/[title]), 301 redirects via the Redirect module',
      ],
      [
        'Misconfigured or missing Varnish/Redis caching',
        'TTFB > 2s, degraded LCP, lost rankings on mobile',
        'Varnish deployment as reverse proxy with automatic purge via the Purge module, Redis for back-end cache, Cloudflare CDN on the front end',
      ],
      [
        'Metatag and Schema.org Metatag modules not installed',
        'No control over title/description tags, no rich snippets, invisible to LLMs',
        'Metatag + Schema.org Metatag installation, mapping configuration per content type (Article, Organization, BreadcrumbList, FAQPage)',
      ],
      [
        'Views generating non-canonical pages and infinite pagination',
        'Duplicate indexed pages, crawl budget wasted on sort and filter variants',
        'Canonical tags on each View, noindex on filter/sort pages, rel=next/prev pagination, limiting the number of indexed pages',
      ],
      [
        'Drupal 9 to 10/11 migration with lost SEO configurations',
        'Missing 301 redirects, broken sitemaps, lost schema.org markup',
        'Pre-migration audit of URLs and SEO modules, complete redirect plan, Simple XML Sitemap and Metatag reconfiguration post-migration',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Drupal',
    subtitle: 'A structured 8-step approach to Drupal SEO, designed around the platform-specific challenges of the leading enterprise CMS.',
    steps: [
      {
        title: 'Drupal technical audit',
        subtitle: 'Full analysis of your Drupal installation: core version, contributed modules, server configuration (PHP, Varnish, Redis), and Core Web Vitals.',
        items: [
          'Inventory of active, inactive, and obsolete modules (Drupal 10/11 compatibility)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: indexed pages vs wasted pages (empty taxonomies, duplicate Views, /node/ paths)',
          'Security check: Drupal security updates, permissions, SSL certificate, HTTP headers',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Drupal site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Module cleanup and rationalization',
        subtitle: 'Removal of obsolete or redundant modules, consolidating the Drupal technical stack for performance and maintainability.',
        items: [
          'Uninstallation of inactive or incompatible modules (Drupal 10/11)',
          'Replacement of unmaintained modules with supported alternatives',
          'SEO module consolidation: Pathauto + Metatag + Redirect + Simple XML Sitemap as the reference stack',
          'Database cleanup: content revisions, orphaned tables, expired cache',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Configuration of the Drupal caching layer (internal, Varnish, Redis) and front-end optimization to meet Core Web Vitals thresholds.',
        items: [
          'Internal Drupal cache configuration (page cache, dynamic page cache, render cache)',
          'Varnish deployment as reverse proxy with automatic purge (Purge module)',
          'Redis or Memcached for back-end cache (sessions, entity cache)',
          'CSS/JS aggregation via Advanced CSS/JS Aggregation module, WebP images with lazy loading',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of Pathauto, Metatag, Redirect, and Schema.org Metatag modules to maximize control over URLs, tags, and structured data.',
        items: [
          'Pathauto patterns per content type and per taxonomy vocabulary',
          'Metatag: title, description, canonical, and Open Graph tag configuration per bundle',
          'Simple XML Sitemap: multilingual generation with hreflang and exclusion of non-strategic pages',
          'Schema.org Metatag: Organization, WebSite, BreadcrumbList, FAQPage markup per content type',
        ],
      },
      {
        title: 'Drupal content strategy',
        subtitle: 'Creation of structured content leveraging Drupal hierarchical taxonomies and Views for Google rankings and AI engine citability.',
        items: [
          'Content architecture based on taxonomy vocabularies (native topical clustering)',
          'Taxonomy pages enriched with unique editorial content (not just node lists)',
          'Structured FAQ sections via dedicated content types with automatic FAQPage markup',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sites and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from the Drupal community (Drupal.org, DrupalCon, contributed blogs)',
          'Guest posts on high-authority thematic websites in your industry',
          'Brand mentions in CMS comparison articles and technical guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and Drupal technical health monitoring.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type and taxonomy vocabulary',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and Drupal security update tracking',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your Drupal development team, your SEO specialists, or your management.',
    items: [
      {
        id: 1,
        title: 'Drupal technical audit report',
        description: 'Full diagnostic of your Drupal installation: module inventory (active, obsolete, incompatible), taxonomy and Views analysis, Core Web Vitals, Varnish/Redis configuration, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Drupal schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, configured directly via the Schema.org Metatag module. Integration guide with screenshots for your Drupal team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ sections optimized for SEO and GEO. Direct integration into Drupal via the admin interface or configuration deployment (Drush, Config Split). Custom content types and Views created if needed.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from the Drupal community (Drupal.org, contributed blogs), industry media, and high-authority sites in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic segmented by taxonomy, GEO Score evolution, Drupal technical health (modules, security updates, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Drupal site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a decision-maker asks ChatGPT "which SEO agency should I choose for a Drupal site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Drupal site?", the LLM does not name any agency. It provides a list of 5 to 7 selection criteria (Drupal architecture experience, knowledge of SEO modules, enterprise client references, ability to handle version migrations) and points toward directories like Clutch and the Drupal.org marketplace. The agency that publishes a detailed methodology with measurable results on Drupal projects has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Drupal website", the LLM generates a structured guide covering 8 to 12 points including Pathauto, Metatag, Simple XML Sitemap, Varnish caching, structured data, and internal linking. No agency is cited. The preferred sources are Drupal.org, Acquia blog, and specialized Drupal technical blogs like Lullabot and Specbee.</p><h4>CMS comparison queries</h4><p>On "Drupal vs WordPress for SEO", the LLM produces a structured comparison with 6 to 8 criteria. Drupal is presented as natively more performant (built-in caching, no plugin bloat) but more complex to configure. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Module queries</h4><p>On "best Drupal SEO modules", the LLM provides a categorized list of 6 to 10 modules sorted by function: Pathauto (URLs), Metatag (meta tags), Redirect (redirects), Simple XML Sitemap, Easy Breadcrumb, Real-time SEO. Content that structures each module with its precise role and recommended configuration has the highest chance of being extracted.</p>',
    structuredData:
      'For a Drupal site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>GovernmentOrganization</code> (depending on the business), <code>BreadcrumbList</code> (navigation via Easy Breadcrumb), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>WebPage</code> (editorial content). The Schema.org Metatag module allows configuring these types per bundle (content type). Combined with the Metatag module, it provides granular control over the markup injected into each page.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Drupal site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of structured content via Drupal taxonomies), Legitimacy and Citability (external trust signals, backlinks, mentions in the Drupal community), and Factual Density (richness of schema.org markup via Schema.org Metatag, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Drupal SEO',
    items: [
      {
        question: 'How much does Drupal SEO cost?',
        answer:
          'The SEO budget for a Drupal site depends on the complexity of the architecture (number of content types, taxonomy vocabularies, contributed modules) and the competition level. At Rankwell, Drupal SEO engagements start from $2,000/month for a mid-sized institutional site, and range from $4,000 to $8,000/month for enterprise multilingual portals with hundreds of thousands of pages. This budget covers the technical audit, SEO module configuration, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Drupal?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (Pathauto configuration, Varnish deployment, taxonomy cleanup). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Drupal performance optimizations (caching, CSS/JS aggregation) produce measurable effects within the first month. Rankwell provides a forecast timeline based on the initial audit.',
      },
      {
        question: 'Which SEO modules are essential on Drupal?',
        answer:
          'The reference SEO stack for Drupal includes five core modules: Pathauto (automatic clean URLs), Metatag (title, description, Open Graph tags), Redirect (301 redirect management), Simple XML Sitemap (multilingual sitemap with hreflang), and Schema.org Metatag (structured data per content type). Easy Breadcrumb and Real-time SEO complete the stack. Rankwell configures each module based on your content architecture and taxonomy vocabularies.',
      },
      {
        question: 'How do I fix a slow Drupal site for SEO?',
        answer:
          'Drupal site slowness typically stems from three causes: missing reverse proxy cache (Varnish), unoptimized contributed modules running heavy queries, and complex Views without proper pagination. Rankwell starts with a performance audit that identifies bottlenecks, configures internal Drupal cache (page cache, render cache), deploys Varnish with automatic purge and Redis for back-end caching, then optimizes the front end (CSS/JS aggregation, WebP images, CDN).',
      },
      {
        question: 'How can I get my Drupal site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Drupal site, three conditions must be met: content rich in verifiable factual data (leveraging Drupal hierarchical taxonomies to structure information), complete schema.org markup via the Schema.org Metatag module (WebSite, Organization, FAQPage), and brand mentions on third-party sources. The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site citability.',
      },
      {
        question: 'Is Drupal still a good choice for SEO in 2026?',
        answer:
          'Drupal remains the most capable CMS for complex and multilingual sites in 2026: its hierarchical taxonomies, native multilingual management (entity-level translation with automatic hreflang), and enterprise-grade security make it a solid choice for institutional portals and large organizations. However, WordPress (accessibility) and Next.js (native SSR) offer advantages on specific points. Rankwell adapts its SEO and GEO methodology to the specifics of each CMS.',
      },
      {
        question: 'Why choose Rankwell for Drupal SEO?',
        answer:
          'Rankwell combines Drupal technical SEO expertise (module auditing, Pathauto/Metatag/Schema.org Metatag configuration, Varnish/Redis optimization) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for Drupal-specific challenges: complex taxonomies, version migrations, enterprise performance, multilingual architecture. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Drupal site?',
    description:
      'Request a free GEO & SEO audit of your Drupal site. Our SEO & GEO consultants analyze your taxonomy architecture, modules, Varnish configuration, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Real Estate', href: '/en/geo-seo-agency/sector/immobilier' },
        { label: 'SEO for Education', href: '/en/geo-seo-agency/sector/education' },
        { label: 'SEO for Industry', href: '/en/geo-seo-agency/sector/industrie' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'International SEO', href: '/en/geo-seo-agency/project/international' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Joomla SEO', href: '/en/geo-seo-agency/cms/joomla' },
        { label: 'TYPO3 SEO', href: '/en/geo-seo-agency/cms/typo3' },
      ],
      glossaire: [
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'E-E-A-T', href: '/en/glossary/e-e-a-t' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Joomla', href: '/en/geo-seo-agency/cms/joomla' },
      { label: 'TYPO3', href: '/en/geo-seo-agency/cms/typo3' },
      { label: 'Strapi', href: '/en/geo-seo-agency/cms/strapi' },
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
    ],
  },
};

export default data;
