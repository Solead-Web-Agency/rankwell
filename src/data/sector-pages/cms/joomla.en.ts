/**
 * DATA: CMS Joomla Page (EN)
 * Route: /en/geo-seo-agency/cms/joomla
 *
 * English version adapted for the international Joomla market.
 * Content based on LLM auto-test (March 2026) and global Joomla ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'joomla',
    title: 'Joomla SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Joomla websites. Meta tag governance, menu items, 4SEO, duplicate content, Joomla 5 migration: a complete methodology built for Joomla.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Joomla' },
    ],
    title: 'Joomla SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Meta tags split across global configuration, articles, and menu items, duplicate content from multiple menu links, complex URLs with numeric IDs: Joomla SEO demands platform-specific expertise. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Joomla SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Joomla (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Joomla',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Joomla powers roughly 1.8% of all websites worldwide</strong> with native per-article and per-menu-item meta tags, built-in SEF URL rewriting, 70+ language packs, and Joomla 5 schema.org support via 7 built-in plugins, forming a solid base for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">60% of Joomla sites still run version 3.x</strong> without security patches. Meta tag configuration is scattered across global settings, articles, and menu items, creating conflicts. Multiple menu items pointing to one article generate duplicate URLs and <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO cannibalization</a> without canonical tags.',
    geoAngle:
      'According to Rankwell, Joomla 5 native multilingual architecture and built-in schema.org plugins give a structural AI citability advantage, but it remains dormant without unified meta tag governance across global configuration, articles, and menu items.',
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
    title: 'Common Joomla SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Joomla sites, especially those still running Joomla 3.x. Each one degrades Google rankings and reduces citability by AI engines. A Joomla-specific technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Complex URLs with numeric IDs (/index.php?option=com_content&id=123)',
        'Unreadable URLs, lost semantic signal, reduced CTR in SERPs',
        'SEF URL activation + mod_rewrite in .htaccess, 4SEF configuration for clean URLs without numeric identifiers',
      ],
      [
        'Duplicate content via multiple menu items',
        'Multiple URLs for the same article, crawl budget dilution and cannibalization',
        'Menu item audit, canonical tags via 4SEO, enforcement of "one article = one menu path" rule',
      ],
      [
        'Scattered meta tags (global / article / menu)',
        'Title and description conflicts, empty or duplicated meta tags',
        'Centralized governance via 4SEO with priority rules (menu > article > global), comprehensive audit of all 3 levels',
      ],
      [
        'Outdated Joomla 3.x version (60% of sites)',
        'Security vulnerabilities, no native schema.org, no built-in canonical tags',
        'Joomla 3 to Joomla 5 migration plan with pre/post migration SEO audit, 301 redirects and URL control',
      ],
      [
        'Missing or limited schema.org markup (Article type only)',
        'No rich snippets, invisible to LLMs',
        'Activation of Joomla 5 native schema.org plugins (7 built-in), supplemented by Google Structured Data extension (Tassos) for specific types',
      ],
      [
        'Poor performance (heavy extensions, no caching)',
        'LCP > 4s on mobile, ranking loss',
        'Joomla native cache activation, CSS/JS minification via JCH Optimize, CDN setup, audit and removal of unused extensions',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Joomla',
    subtitle: 'A structured 8-step approach to Joomla SEO, designed around the platform-specific challenges of this open-source CMS with advanced ACL and native multilingual capabilities.',
    steps: [
      {
        title: 'Joomla technical audit',
        subtitle: 'Full analysis of your Joomla installation: CMS version, active extensions, menu item configuration, meta tag status, and Core Web Vitals.',
        items: [
          'Extension inventory (active, disabled, incompatible with Joomla 5)',
          'Menu item mapping and detection of duplicate content paths',
          'Meta tag audit across all 3 levels (global, article, menu) to identify conflicts and duplicates',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Joomla site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Extension cleanup and rationalization',
        subtitle: 'Removal of outdated or incompatible extensions that slow down the site and create technical conflicts.',
        items: [
          'Uninstallation of obsolete extensions (sh404SEF, JoomSEF) and migration to 4SEO',
          'Removal of inactive components still loading CSS/JS on the front end',
          'Template rationalization: a single active template optimized for performance',
          'Database cleanup (orphaned tables from uninstalled extensions)',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement through Joomla native cache, asset compression, and image optimization.',
        items: [
          'Joomla native cache activation and configuration (progressive or conservative depending on the site)',
          'CSS/JS minification and concatenation via JCH Optimize',
          'Image conversion to WebP with lazy loading',
          'CDN setup (Cloudflare, BunnyCDN) and .htaccess Gzip compression configuration',
        ],
      },
      {
        title: 'Advanced Joomla SEO configuration',
        subtitle: 'Full setup of 4SEO and Joomla native options to unify meta tag management, sitemaps, and structured data.',
        items: [
          'SEF URLs enabled with mod_rewrite, removal of /index.php/ from URL paths',
          'Meta tag governance: priority rules (menu > article > global) via 4SEO',
          'XML sitemap configured (exclusion of non-strategic pages and duplicate articles)',
          'Schema.org markup via Joomla 5 native plugins (7 built-in) + Google Structured Data for specific types',
        ],
      },
      {
        title: 'Joomla content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI engine citability, integrated via the Joomla native editor.',
        items: [
          'Joomla categories organized as topical clusters (one category = one thematic silo)',
          'Contextual internal linking between articles using Joomla native link options',
          'Thematic FAQ sections inspired by Google PAA (People Also Ask), marked up with FAQPage schema.org',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sources and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from institutional sites, specialized media, and industry directories',
          'Guest posts on high-authority thematic websites',
          'Brand mentions in comparison articles and Joomla migration guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by Joomla category',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and Joomla technical health monitoring (version, extensions, security)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your technical team, your Joomla webmaster, or your management.',
    items: [
      {
        id: 1,
        title: 'Joomla technical audit report',
        description: 'Full diagnostic of your Joomla installation: menu item mapping and duplicate path detection, extension inventory (active, obsolete, incompatible with Joomla 5), meta tag audit across 3 levels, Core Web Vitals, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Joomla schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and business-specific type markup, configured via Joomla 5 native plugins (7 built-in) and supplemented by Google Structured Data extension (Tassos) for uncovered types.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, articles, and FAQ sections optimized for SEO and GEO. Direct integration into Joomla via the native editor (TinyMCE or JCE) with meta tag configuration at both article and menu item levels.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from institutional sites, industry directories, and specialized media relevant to your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic segmented by Joomla category, GEO Score evolution, technical health monitoring (Joomla version, extensions, compatibility), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Joomla site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Joomla site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Joomla site?", the LLM does not name any specific agency. It provides a list of 5 to 7 selection criteria (Joomla-specific expertise, knowledge of the menu item architecture and ACL system, mastery of 4SEO, ability to manage native multilingual SEO, experience with Joomla 3 to 5 migrations) and directs toward directories like the Joomla Community Service Providers Directory and Clutch. The agency that publishes a structured methodology with measurable results on Joomla has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Joomla website", the LLM generates a step-by-step guide covering 8 to 12 points: SEF URL activation, meta tag configuration per article and per menu item, 4SEO or Route66 installation, duplicate content resolution, canonical tags, .htaccess optimization, and schema.org structured data setup. No agency is cited. The preferred sources are JoomlaSEO.com, SiteGround knowledge base, Seobility blog, ThemeXpert, and Weeblr documentation (4SEO developer).</p><h4>CMS comparison queries</h4><p>On "Joomla vs WordPress for SEO", the LLM produces a balanced comparison with 6 to 8 criteria. Joomla is recognized for its superior native SEO options (per-article and per-menu-item meta tags, built-in multilingual support with 70+ language packs) but WordPress wins through its SEO plugin ecosystem (Yoast, RankMath) and vastly larger community. Sites publishing structured comparisons with feature-by-feature tables and quantified differences (extension count, market share, native vs plugin capabilities) are favored as extraction sources.</p><h4>Extension recommendation queries</h4><p>On "best Joomla SEO extensions 2026", the LLM lists 4SEO (all-in-one, successor to sh404SEF), Route66 (free Yoast-like alternative), EFSEO (frontend meta editing), Google Structured Data by Tassos (schema.org), and JSitemap Pro (sitemap with AI engine indexing and LLMS.txt support). It highlights the sh404SEF to 4SEO transition and recommends 4 to 7 extensions per site. Content structured as categorized extension lists with feature comparisons has the highest chance of being extracted.</p>',
    structuredData:
      'For a Joomla 5 site, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Article</code> (editorial content). Joomla 5 includes 7 native schema.org plugins covering the base types. For specific types (Product, Event, Service), the Google Structured Data extension by Tassos completes the markup. This enables Google to display rich snippets and allows LLMs to extract structured data for their responses.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Joomla site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Joomla SEO',
    items: [
      {
        question: 'How much does Joomla SEO cost?',
        answer:
          'The SEO budget for a Joomla site depends on the number of pages, the CMS version, and competition level. At Rankwell, Joomla SEO engagements start from $1,500/month for a business site under 50 pages, and range from $3,000 to $5,000/month for multilingual sites or institutional portals with hundreds of pages. This budget covers the technical audit (meta tags, menu items, extensions), content strategy, and GEO monitoring. If a migration from Joomla 3 to Joomla 5 is required, a supplementary budget is allocated to safeguard existing SEO assets.',
      },
      {
        question: 'How long does it take to see SEO results on Joomla?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (duplicate URL cleanup, meta tag unification, SEF URL activation). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. If your site is still running Joomla 3.x, the migration to Joomla 5 may extend the timeline by 1 to 2 additional months. Rankwell provides a forecast timeline based on the initial audit of your Joomla installation.',
      },
      {
        question: 'Should I install 4SEO or use Joomla 5 native SEO options?',
        answer:
          'Joomla 5 improved its native SEO features (canonical tags, built-in schema.org plugins), but these remain basic for a professional site. 4SEO, the successor to sh404SEF, centralizes meta tag management with priority rules, handles 301 redirects, produces error reports, and configures Open Graph. Rankwell recommends 4SEO for any Joomla site with more than 20 pages, supplemented by native schema.org plugins for structured markup.',
      },
      {
        question: 'How do I fix a slow Joomla site for SEO?',
        answer:
          'Joomla site slowness typically stems from three causes: obsolete extensions loading unnecessary CSS/JS, lack of caching, and underpowered shared hosting. Rankwell starts with a performance audit that identifies the extensions responsible for slowdowns, activates Joomla native cache (progressive or conservative), installs JCH Optimize for asset minification, converts images to WebP, and configures a CDN with hosting from providers like SiteGround or Cloudways.',
      },
      {
        question: 'How can I get my Joomla site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Joomla site, three conditions must be met: content rich in verifiable factual data (statistics, comparisons, definitions), complete schema.org markup (via Joomla 5 native plugins and Google Structured Data extension), and brand mentions on third-party sources (blogs, press, directories). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your Joomla site citability.',
      },
      {
        question: 'Is Joomla still a good choice for SEO in 2026?',
        answer:
          'Joomla remains relevant for SEO in 2026, particularly for multilingual institutional sites and portals requiring granular access control (ACL). Joomla 5 addressed several gaps (native schema.org, canonical tags, improved SEF URLs). However, its declining market share (from 10.9% in 2011 to 1.8% in 2025) reduces the available pool of developers and extensions. Rankwell adapts its SEO and GEO methodology to leverage Joomla strengths while anticipating the risks tied to its evolving ecosystem.',
      },
      {
        question: 'Why choose Rankwell for Joomla SEO?',
        answer:
          'Rankwell combines Joomla technical SEO expertise (meta tag auditing across 3 levels, duplicate URL cleanup, 4SEO migration, native schema.org configuration) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology covers Joomla-specific challenges: scattered meta tags, duplicate content from menu items, Joomla 5 migration, and SEO extension configuration. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Joomla site?',
    description:
      'Request a free GEO & SEO audit of your Joomla site. Our SEO & GEO consultants analyze your configuration, menu items, extensions, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Associations', href: '/en/geo-seo-agency/sector/association' },
        { label: 'SEO for Government', href: '/en/geo-seo-agency/sector/collectivite' },
        { label: 'SEO for Education', href: '/en/geo-seo-agency/sector/education' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'SEO Migration', href: '/en/geo-seo-agency/project/migration' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Drupal SEO', href: '/en/geo-seo-agency/cms/drupal' },
        { label: 'TYPO3 SEO', href: '/en/geo-seo-agency/cms/typo3' },
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
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Drupal', href: '/en/geo-seo-agency/cms/drupal' },
      { label: 'TYPO3', href: '/en/geo-seo-agency/cms/typo3' },
      { label: 'PrestaShop', href: '/en/geo-seo-agency/cms/prestashop' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
    ],
  },
};

export default data;
