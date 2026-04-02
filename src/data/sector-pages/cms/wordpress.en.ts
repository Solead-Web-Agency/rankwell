/**
 * DATA: CMS WordPress Page (EN)
 * Route: /en/geo-seo-agency/cms/wordpress
 *
 * English version adapted for the international WordPress market.
 * Content based on LLM auto-test (March 2026) and global WordPress ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'wordpress',
    title: 'WordPress SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for WordPress websites. Technical audit, plugin configuration, performance, schema.org: a complete methodology built for WordPress.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'WordPress' },
    ],
    title: 'WordPress SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Plugin overload, slow page speed, duplicate content from archives and tags: WordPress SEO requires platform-specific expertise that generic agencies miss. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a WordPress SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on WordPress (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on WordPress',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">43% of all websites run on WordPress</strong>. Plugins like Yoast and RankMath centralize title tags, sitemaps, and structured data. Full HTML control makes it the top CMS for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">40% of WordPress sites run an outdated version</strong>. The average site loads 20 to 30 plugins, degrading Core Web Vitals and wasting crawl budget on duplicate archives and tag pages.',
    geoAngle:
      'According to Rankwell, WordPress structured data plugins give an AI citability edge, but only when schema.org is correctly configured and content contains self-sufficient factual passages verifiable by LLMs.',
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
    title: 'Common WordPress SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized WordPress sites. Each one degrades Google rankings and reduces citability by AI engines. A targeted technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Slow page load (20+ active plugins)',
        'LCP > 4s, lost rankings on mobile',
        'Plugin audit, removal of duplicates, caching setup (WP Rocket), CDN, managed hosting (Kinsta, WP Engine)',
      ],
      [
        'Duplicate content (archives, tags, pagination)',
        'Crawl budget dilution, internal cannibalization',
        'Noindex on non-strategic archives, canonical tags, removal of unused tag pages',
      ],
      [
        'Non-optimized permalinks (/?p=123)',
        'Unreadable URLs, lost semantic signal',
        'Configuration to /%postname%/, 301 redirects on legacy URLs',
      ],
      [
        'Conflicting SEO plugins',
        'Multiple sitemaps, duplicate meta tags',
        'Active plugin audit, single SEO plugin selection (Yoast or RankMath), deactivation of overlapping tools',
      ],
      [
        'Security vulnerabilities (outdated core, unpatched plugins)',
        'Spam injection, deindexing via Google Safe Browsing',
        'WordPress core + plugin + theme updates, application firewall (Wordfence/Sucuri), security headers',
      ],
      [
        'Missing or incomplete schema.org markup',
        'No rich snippets, invisible to LLMs',
        'Full markup configuration: WebSite, Organization, BreadcrumbList, FAQPage via Yoast/RankMath or custom injection',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for WordPress',
    subtitle: 'A structured 8-step approach to WordPress SEO, designed around the platform-specific challenges of the world\'s most widely used CMS.',
    steps: [
      {
        title: 'WordPress technical audit',
        subtitle: 'Full analysis of your WordPress installation: active plugins, theme, PHP version, server configuration, and Core Web Vitals.',
        items: [
          'Plugin inventory (active, inactive, conflicting)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: indexed pages vs wasted pages (archives, tags, attachments)',
          'Security check: WordPress version, SSL certificate, HTTP headers',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your WordPress site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Plugin cleanup and rationalization',
        subtitle: 'Removal of redundant or unused plugins that slow down the site and create technical conflicts.',
        items: [
          'Reduction of active plugins (target: 10 to 15 essentials)',
          'Replacement of heavy plugins with lightweight alternatives',
          'Optimal configuration of the primary SEO plugin (Yoast or RankMath)',
          'Elimination of unused JS/CSS scripts loaded on the front end',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement through caching, compression, and image optimization tailored to WordPress.',
        items: [
          'WP Rocket or LiteSpeed Cache configuration',
          'Image conversion to WebP with lazy loading',
          'CDN setup (Cloudflare, BunnyCDN)',
          'CSS/JS minification and deferred loading of non-critical scripts',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of Yoast SEO or RankMath to maximize control over tags, sitemaps, and structured data.',
        items: [
          'Permalinks set to /%postname%/, breadcrumbs enabled',
          'XML sitemap configured (exclusion of non-strategic pages)',
          'Noindex on author archives, tags, and search result pages',
          'Schema.org markup: Organization, WebSite, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'WordPress content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI engine citability.',
        items: [
          'Pillar pages + satellite articles organized in a topical cluster',
          'Automated and contextual internal linking between articles and pages',
          'Thematic FAQ sections inspired by Google PAA (People Also Ask)',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sites and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from WordPress blogs, tech publications, and industry comparators',
          'Guest posts on high-authority thematic websites',
          'Brand mentions in comparison articles and buyer guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and WordPress technical health',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your SEO team, your developers, or your management.',
    items: [
      {
        id: 1,
        title: 'WordPress technical audit report',
        description: 'Full diagnostic of your WordPress installation: plugin inventory (active, inactive, conflicting), Core Web Vitals, crawl budget, security assessment, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'WordPress schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, configured directly in Yoast or RankMath. Integration guide with screenshots for your team.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ sections optimized for SEO and GEO. Direct integration into WordPress via the Gutenberg editor or FTP access. Custom page templates created if needed.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from WordPress blogs, tech comparators, and industry media relevant to your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, WordPress technical health (plugins, Core Web Vitals), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your WordPress site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a WordPress site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a WordPress site?", the LLM does not name any specific agency. It provides a list of 5 to 7 selection criteria (WordPress experience, plugin expertise, transparent methodology, client case studies) and redirects toward directories like Clutch, G2, and Semrush Agency Partners. The agency that publishes a structured methodology with measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a WordPress website", the LLM generates a structured guide covering 10 to 14 points: permalinks, plugin selection, image optimization, caching, CDN setup, internal linking, and schema.org markup. No agency is cited. The preferred sources are WPBeginner, Kinsta Blog, Yoast documentation, and Jetpack resources.</p><h4>CMS comparison queries</h4><p>On "WordPress vs Shopify for SEO", the LLM produces a comparison table with 6 to 9 criteria covering URL control, plugin ecosystem, content flexibility, and hosting. WordPress is presented as more flexible but requiring more maintenance. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Plugin recommendation queries</h4><p>On "best WordPress SEO plugins 2026", the LLM lists Yoast SEO, RankMath, AIOSEO, and SEOPress with feature-by-feature breakdowns. It highlights the trend of AI search optimization features being added to traditional SEO plugins. Content structured as comparison tables with specific feature lists has the highest chance of being extracted.</p>',
    structuredData:
      'For a WordPress site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (editorial content). Yoast SEO and RankMath natively handle most of these types. This markup enables Google to display rich snippets and allows LLMs to extract structured data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your WordPress site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: WordPress SEO',
    items: [
      {
        question: 'How much does WordPress SEO cost?',
        answer:
          'The SEO budget for a WordPress site depends on the number of pages, technical complexity, and competition level. At Rankwell, WordPress SEO engagements start from $2,000/month for a business site under 50 pages, and range from $4,000 to $8,000/month for editorial sites or WooCommerce stores with thousands of pages. This budget covers the technical audit, plugin optimization, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on WordPress?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (plugin cleanup, page speed, redirects). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. WordPress-specific technical optimizations (crawl budget, Core Web Vitals) produce measurable effects within the first month. Rankwell provides a forecast timeline based on the initial audit.',
      },
      {
        question: 'Should I choose Yoast SEO or RankMath for WordPress?',
        answer:
          'Yoast SEO and RankMath are the two leading SEO plugins for WordPress. Yoast is the most widely installed with over 10 million active sites, an intuitive interface, and a generous free tier. RankMath offers more free features out of the box (multi-keyword analysis, built-in redirects, advanced schema.org). Rankwell works with both plugins and recommends whichever best fits your existing configuration and specific requirements.',
      },
      {
        question: 'How do I fix a slow WordPress site for SEO?',
        answer:
          'WordPress slowness typically stems from three causes: too many active plugins (20+ loading unnecessary JavaScript), uncompressed images, and underpowered shared hosting. Rankwell starts with a performance audit that identifies the plugins responsible for slowdowns, replaces duplicates, configures a caching system (WP Rocket), converts images to WebP, and sets up a CDN with managed hosting like Kinsta or WP Engine.',
      },
      {
        question: 'How can I get my WordPress site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your WordPress site, three conditions must be met: content rich in verifiable factual data (statistics, comparisons, definitions), complete schema.org markup (WebSite, Organization, FAQPage), and brand mentions on third-party sources (blogs, press, directories). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site citability.',
      },
      {
        question: 'Is WordPress still the best CMS for SEO in 2026?',
        answer:
          'WordPress remains the most flexible CMS for SEO in 2026, thanks to its full HTML control, mature SEO plugins, and massive community. However, alternatives like Webflow (native performance) or Next.js (SSR and SSG) offer technical advantages on specific points. The choice depends on your needs: WordPress suits editorial sites, business websites, and WooCommerce stores. Rankwell adapts its SEO and GEO methodology to the specifics of each CMS.',
      },
      {
        question: 'Why choose Rankwell for WordPress SEO?',
        answer:
          'Rankwell combines WordPress technical SEO expertise (plugin auditing, performance optimization, Yoast/RankMath configuration, schema.org) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for WordPress-specific challenges: plugin overload, duplicate content, security, and Core Web Vitals. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your WordPress site?',
    description:
      'Request a free GEO & SEO audit of your WordPress site. Our SEO & GEO consultants analyze your installation, plugins, performance, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
        { label: 'SEO for Doctors', href: '/en/geo-seo-agency/sector/medecin' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
      ],
      cms: [
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
        { label: 'E-E-A-T', href: '/en/glossary/e-e-a-t' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WooCommerce', href: '/en/geo-seo-agency/cms/woocommerce' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Drupal', href: '/en/geo-seo-agency/cms/drupal' },
      { label: 'Joomla', href: '/en/geo-seo-agency/cms/joomla' },
    ],
  },
};

export default data;
