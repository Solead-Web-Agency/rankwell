/**
 * DATA: CMS TYPO3 Page (EN)
 * Route: /en/geo-seo-agency/cms/typo3
 *
 * English version adapted for the international TYPO3 market.
 * Content based on LLM auto-test (March 2026) and global TYPO3 ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'typo3',
    title: 'TYPO3 SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for TYPO3 websites. TypoScript configuration, SEO extensions, multi-site, hreflang, schema.org: a complete methodology built for TYPO3.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'TYPO3' },
    ],
    title: 'TYPO3 SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Complex TypoScript configuration, fragmented speaking URLs across language trees, a limited SEO extension ecosystem: TYPO3 SEO demands platform-specific expertise that generic agencies lack. Our experts combine technical SEO and GEO to rank your TYPO3 site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a TYPO3 SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on TYPO3 (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on TYPO3',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">TYPO3 powers over 500,000 installations worldwide</strong> (45%+ in the DACH region). Native multi-site management, automatic hreflang, built-in redirect module (since v9.5), and speaking URLs via Site Management make it a strong foundation for <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> on enterprise multilingual projects.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">40 to 45% of TYPO3 installations run on unsupported versions</strong>, creating security risks and extension incompatibilities. No native schema.org markup exists (requires brotkrueml/schema or cs_seo), and the SEO extension ecosystem is far smaller than WordPress, creating a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">technical bottleneck</a> on international projects.',
    geoAngle:
      'According to Rankwell, TYPO3 native hreflang management and multilingual page trees provide LLMs with clear localization signals per language entity. But this AI citability remains dormant until schema.org is injected via a dedicated extension and factual passages are structured for extraction.',
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
    title: 'Common TYPO3 SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized TYPO3 sites, especially those running versions older than v11. Each one degrades Google rankings and reduces citability by AI engines. A targeted technical audit identifies which ones apply to your installation and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Misconfigured speaking URLs (duplicate slugs across language trees)',
        'Internal cannibalization between language versions, inconsistent hreflang signals',
        'Slug audit per language tree in the Site Management module, duplicate removal, cross-validation of hreflang tags',
      ],
      [
        'Outdated TYPO3 version (v8, v9, v10 no longer supported)',
        'Security vulnerabilities, incompatibility with recent SEO extensions, loss of core features',
        'Migration plan to TYPO3 v12 or v13, extension compatibility audit, SEO non-regression testing',
      ],
      [
        'No schema.org markup (not native in TYPO3)',
        'No rich snippets, invisible to LLMs',
        'Installation and configuration of brotkrueml/schema or cs_seo, WebSite, Organization, BreadcrumbList, and FAQPage markup in JSON-LD',
      ],
      [
        'Fragmented meta tags (global settings vs page-level vs TypoScript overrides)',
        'Duplicate titles, inconsistent descriptions, priority conflicts',
        'Centralization via cs_seo or Yoast for TYPO3, removal of legacy TypoScript overrides, page-by-page audit',
      ],
      [
        'Misconfigured caching (uncached pages or overly aggressive cache)',
        'LCP > 3s, stale content served to crawlers',
        'TYPO3 caching framework configuration with Redis or Varnish, StaticFileCache activation for static HTML caching',
      ],
      [
        'XML sitemap including non-strategic pages (archives, duplicates, hidden pages)',
        'Crawl budget dilution, indexation of useless pages',
        'Native sitemap configuration (ext:seo) with exclusion of non-relevant page types, verification in Google Search Console',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for TYPO3',
    subtitle: 'A structured 8-step approach to TYPO3 SEO, designed around the platform-specific challenges of this enterprise CMS.',
    steps: [
      {
        title: 'TYPO3 technical audit',
        subtitle: 'Full analysis of your TYPO3 installation: CMS version, active extensions, TypoScript configuration, Site Management, and Core Web Vitals.',
        items: [
          'Inventory of installed extensions (active, inactive, incompatible with the current version)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: indexed pages vs wasted pages (multilingual duplicates, hidden pages)',
          'Security check: TYPO3 version, SSL certificate, HTTP headers, workspace permissions',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your TYPO3 site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors (including those on WordPress or Drupal)',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Extension cleanup and rationalization',
        subtitle: 'Removal of obsolete or redundant extensions that slow down the site and create configuration conflicts.',
        items: [
          'Deactivation of unused or incompatible extensions for the current TYPO3 version',
          'SEO extension consolidation: selecting one primary tool (cs_seo or Yoast for TYPO3)',
          'Cleanup of legacy TypoScript overrides inherited from previous versions',
          'Update of critical extensions (brotkrueml/schema, StaticFileCache, redirects)',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Improvement of loading speed via the TYPO3 caching framework, compression, and asset optimization.',
        items: [
          'StaticFileCache configuration for static HTML caching',
          'Redis or Varnish deployment as cache backend',
          'Image conversion to WebP via FAL (File Abstraction Layer) with lazy loading',
          'CSS/JS minification via TypoScript (compressJs, compressCss, concatenateJs)',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of the SEO core extension and third-party extensions to maximize control over tags, sitemaps, and structured data.',
        items: [
          'Clean speaking URLs via the Site Management module (per-site and per-language configuration)',
          'XML sitemap configured via ext:seo (exclusion of non-strategic pages)',
          'Automatic hreflang tags verified per multilingual page tree',
          'Schema.org markup: Organization, WebSite, BreadcrumbList, FAQPage via brotkrueml/schema',
        ],
      },
      {
        title: 'TYPO3 content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI engine citability, integrated via TYPO3 content elements.',
        items: [
          'Pillar pages and satellite articles organized in semantic clusters',
          'Contextual internal linking between content via content elements and TypoLink',
          'Thematic FAQ sections inspired by Google PAA, integrated into dedicated content elements',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through specialized backlinks and brand mentions exploitable by AI engines.',
        items: [
          'Backlinks from TYPO3 technical blogs (T3Planet, b13, TYPO3 News), industry media, and comparison sites',
          'Guest posts on high-authority thematic websites in your industry',
          'Brand mentions in CMS comparison guides and specialized articles',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and TYPO3 technical health monitoring.',
        items: [
          'Google rankings by keyword and by page (segmented by language for multi-domain sites)',
          'Organic traffic segmented by content type and language version',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and TYPO3 technical health (version, extensions, cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your TYPO3 development team, your SEO specialists, or your management.',
    items: [
      {
        id: 1,
        title: 'TYPO3 technical audit report',
        description: 'Full diagnostic of your TYPO3 installation: CMS version, extension inventory (active, obsolete, conflicting), TypoScript configuration, Core Web Vitals, speaking URLs, hreflang, and crawl budget, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'TYPO3 schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, configured via brotkrueml/schema or cs_seo. Integration guide with TypoScript and Fluid documentation for your team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ sections optimized for SEO and GEO. Direct integration into TYPO3 via native content elements or backend access with workspace management for editorial validation.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from TYPO3 community blogs (T3Planet, b13), technical media, CMS comparison sites, and industry-specific publications. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword (segmented by language for multi-sites), organic traffic, GEO Score evolution, TYPO3 technical health (extensions, cache, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your TYPO3 site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a decision-maker asks ChatGPT "which SEO agency should I choose for a TYPO3 site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a TYPO3 site?", the LLM does not name any agency. It provides a list of selection criteria (TYPO3 development experience, TypoScript and Fluid mastery, enterprise multi-site references) and directs toward the TYPO3 Partner Directory, Sortlist, and DesignRush. The market is dominated by German-speaking agencies. The agency that publishes a TYPO3-specific SEO methodology with measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a TYPO3 website", the LLM generates a structured guide covering 8 to 10 points: Site Management module, speaking URLs, SEO extensions (cs_seo, Yoast for TYPO3), native sitemap, and caching framework. Preferred sources are docs.typo3.org, T3Planet, and Ranktracker. No agency is cited.</p><h4>CMS comparison queries</h4><p>On "TYPO3 vs WordPress for SEO", the LLM produces a comparison with 6 to 8 criteria. TYPO3 is positioned as the enterprise choice (multi-site, security, native multilingual) while WordPress leads on plugin ecosystem accessibility. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Extension queries</h4><p>On "best TYPO3 SEO extensions 2026", the LLM lists the core SEO extension, cs_seo, brotkrueml/schema, Yoast for TYPO3, and metaseo with their features and version compatibility limits. It notes the smaller ecosystem compared to WordPress. Content with extension comparison tables structured by function and compatibility is preferred for extraction.</p>',
    structuredData:
      'For a TYPO3 site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (editorial content). TYPO3 does not handle schema.org natively: the brotkrueml/schema extension (compatible v12-v13) injects clean JSON-LD via Fluid ViewHelpers or TypoScript configuration. The cs_seo extension also adds per-page JSON-LD options. This markup enables Google rich snippets and gives LLMs structured data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your TYPO3 site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: TYPO3 SEO',
    items: [
      {
        question: 'How much does TYPO3 SEO cost?',
        answer:
          'The SEO budget for a TYPO3 site depends on the complexity of the installation (single-site or multi-domain), the number of languages managed, and the competition level. At Rankwell, TYPO3 SEO engagements start from $2,500/month for a single-language corporate site, and range from $5,000 to $10,000/month for multi-site multilingual installations with tens of thousands of pages. This budget covers the technical audit, SEO extension configuration, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on TYPO3?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (speaking URLs, caching, redirects). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. TYPO3 performance optimizations (StaticFileCache, Redis, asset compression) produce measurable effects on Core Web Vitals within the first month. Rankwell provides a forecast timeline based on the initial audit of your installation.',
      },
      {
        question: 'Should I choose cs_seo or Yoast SEO for TYPO3?',
        answer:
          'cs_seo is the most comprehensive SEO extension for TYPO3: SERP preview, on-page analysis, Open Graph, JSON-LD, and compatibility up to TYPO3 v11. Yoast SEO for TYPO3 brings readability scoring and keyword analysis, but its compatibility stops at TYPO3 v10 (premium features merged into the free version since June 2023). For recent installations (v12, v13), cs_seo is the recommended choice, complemented by brotkrueml/schema for advanced JSON-LD markup. Rankwell configures the extension best suited to your TYPO3 version.',
      },
      {
        question: 'How do I fix a slow TYPO3 site for SEO?',
        answer:
          'TYPO3 site slowness typically stems from three causes: misconfigured caching (uncached pages or stale cache), unoptimized TypoScript (non-minified CSS/JS, synchronous loading), and lack of a CDN. Rankwell starts with a performance audit that identifies bottlenecks: StaticFileCache activation, Redis or Varnish deployment as cache backend, asset compression and concatenation via TypoScript, WebP image conversion via FAL, and CDN setup.',
      },
      {
        question: 'How can I get my TYPO3 site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your TYPO3 site, three conditions must be met: content rich in verifiable factual data (figures, comparisons, definitions), complete schema.org markup via brotkrueml/schema (WebSite, Organization, FAQPage), and brand mentions on third-party sources (technical blogs, industry media, specialized directories). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site citability.',
      },
      {
        question: 'Is TYPO3 still a good CMS for SEO in 2026?',
        answer:
          'TYPO3 remains a solid CMS for enterprise SEO in 2026, thanks to its native multi-site management, built-in multilingual support (automatic hreflang), and granular editorial workflows. Its limitations are the smaller SEO extension ecosystem compared to WordPress, the absence of native schema.org, and the dependency on specialized developers. TYPO3 suits large organizations, institutional sites, and multi-domain projects. For SMBs or brochure sites, WordPress or Webflow offer a more favorable effort-to-result ratio. Rankwell adapts its methodology to the specifics of each CMS.',
      },
      {
        question: 'Why choose Rankwell for TYPO3 SEO?',
        answer:
          'Rankwell combines TYPO3 technical SEO expertise (extension auditing, TypoScript configuration, speaking URLs, hreflang, schema.org via brotkrueml/schema) with the GEO dimension that traditional TYPO3 agencies have not yet integrated. Our 8-step methodology is built for TYPO3-specific challenges: multi-site management, multilingual architecture, caching framework, limited extension ecosystem. The proprietary GEO Score measures your site visibility across AI engines, a blind spot for 93% of SEO agencies.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your TYPO3 site?',
    description:
      'Request a free GEO & SEO audit of your TYPO3 site. Our SEO & GEO consultants analyze your installation, extensions, multi-site configuration, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Industry', href: '/en/geo-seo-agency/sector/industrie' },
        { label: 'SEO for Banking', href: '/en/geo-seo-agency/sector/banque' },
        { label: 'SEO for Insurance', href: '/en/geo-seo-agency/sector/assurance' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'SEO Migration', href: '/en/geo-seo-agency/project/migration' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Drupal SEO', href: '/en/geo-seo-agency/cms/drupal' },
        { label: 'Joomla SEO', href: '/en/geo-seo-agency/cms/joomla' },
      ],
      glossaire: [
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'International SEO', href: '/en/glossary/seo-international' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Drupal', href: '/en/geo-seo-agency/cms/drupal' },
      { label: 'Joomla', href: '/en/geo-seo-agency/cms/joomla' },
      { label: 'Magento', href: '/en/geo-seo-agency/cms/magento' },
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
    ],
  },
};

export default data;
