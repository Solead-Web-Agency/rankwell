/**
 * DATA: CMS Squarespace Page (EN)
 * Route: /en/geo-seo-agency/cms/squarespace
 *
 * English version adapted for the international Squarespace market.
 * Design-first SaaS builder, decent SEO basics (SSL, responsive, clean URLs),
 * but limited (no plugins, no .htaccess, basic schema.org, no regex redirects).
 * Content based on LLM auto-test (March 2026) and anglophone Squarespace ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'squarespace',
    title: 'Squarespace SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Squarespace websites. Technical audit, performance, schema.org injection, template limitations: a complete methodology built for Squarespace.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Squarespace' },
    ],
    title: 'Squarespace SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Theme-imposed heading hierarchy, schema.org limited to the bare minimum, no regex redirects: Squarespace SEO hits platform constraints that generic agencies cannot solve. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Squarespace SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Squarespace (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Squarespace',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Squarespace powers over 4.4 million active websites</strong>, primarily in creative industries. Automatic SSL, mobile responsiveness, sitemap.xml, clean URLs, and native Google Search Console integration cover roughly 60% of basic <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> requirements.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Squarespace has no SEO plugin system comparable to Yoast or RankMath</strong>. The heading hierarchy is template-imposed, redirects support only path-to-path mapping (no regex), and native schema.org is limited to WebSite and SearchAction.',
    geoAngle:
      'According to Rankwell, Squarespace sites suffer from a structural AI citability deficit: native schema.org is limited to WebSite and SearchAction, and the platform offers no mechanism to inject enriched JSON-LD (Organization, FAQPage, LocalBusiness) without Code Injection.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its reputation than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Squarespace SEO problems and solutions',
    interpretation:
      'These issues affect the majority of unoptimized Squarespace sites. Each one limits Google rankings and reduces citability by AI engines. A targeted technical audit identifies which ones apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Heading hierarchy imposed by the template (duplicate H1, H3 before H2)',
        'Semantic confusion for Google, loss of hierarchical signal',
        'Custom code injection (Custom CSS/HTML blocks) to fix the Hn structure without breaking the template design',
      ],
      [
        'Native schema.org limited to WebSite and SearchAction',
        'No rich snippets, invisibility to LLMs',
        'JSON-LD injection via Code Injection (header/footer): Organization, LocalBusiness, BreadcrumbList, FAQPage, Product based on the business type',
      ],
      [
        'Redirects limited to path-to-path only (no regex)',
        'Large-scale migration impossible, broken links during redesign',
        'URL-by-URL mapping before migration, Cloudflare proxy for complex redirect patterns if needed',
      ],
      [
        'Performance degraded by images and template JavaScript',
        'LCP > 4s on mobile, ranking drops on mobile queries',
        'Image compression and resizing before upload, limiting animations and embedded videos, enabling native lazy loading',
      ],
      [
        'Meta descriptions inherited from the global site description',
        'Duplicate content in SERPs, reduced CTR',
        'Writing unique meta descriptions for every page and blog post via the Squarespace SEO panel',
      ],
      [
        'Image alt text tied to captions instead of optimized descriptions',
        'Images not indexed in Google Images, degraded accessibility',
        'Manual alt text entry (separate from the caption) for every image via the Squarespace image editing panel',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Squarespace',
    subtitle: 'A structured 8-step approach to Squarespace SEO, designed around the platform-specific constraints of a design-first SaaS builder.',
    steps: [
      {
        title: 'Squarespace technical audit',
        subtitle: 'Full analysis of your Squarespace site: active template, heading structure, schema.org markup, performance, and native SEO configuration.',
        items: [
          'Review of the Hn hierarchy generated by the template on every page type',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Audit of native schema.org markup and missing types (Organization, FAQPage, BreadcrumbList)',
          'Inventory of existing 301 redirects and detection of broken links',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Squarespace site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'HTML structure correction',
        subtitle: 'Repair of heading tag hierarchy and semantic markup without altering the Squarespace template design.',
        items: [
          'Custom code injection via Code blocks and Code Injection to fix Hn tags',
          'Removal of duplicate H1 tags generated by the template',
          'Addition of missing semantic tags (nav, main, article) absent from the native template',
          'Hn consistency check across blog, portfolio, and commerce pages',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvement within Squarespace platform constraints, without server access or .htaccess control.',
        items: [
          'Image compression and resizing before upload (target: < 200 KB per image)',
          'Reducing animations, embedded videos, and heavy galleries on the homepage',
          'Enabling native Squarespace lazy loading for below-the-fold images',
          'External CDN setup (Cloudflare) if LCP remains critical after optimization',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Full setup of native Squarespace SEO features and injection of missing structured data.',
        items: [
          'Writing unique title tags and meta descriptions for every page',
          'JSON-LD injection via Code Injection: Organization, BreadcrumbList, FAQPage, LocalBusiness',
          'Configuring 301 redirects (URL by URL) for removed or restructured pages',
          'Sitemap.xml verification and submission in Google Search Console',
        ],
      },
      {
        title: 'Squarespace content strategy',
        subtitle: 'Creation of structured content for Google rankings and AI engine citability, adapted to the capabilities of the Squarespace blog.',
        items: [
          'Pillar pages + satellite articles organized with Squarespace categories and tags',
          'Contextual internal linking between service pages, blog posts, and portfolio',
          'Thematic FAQ sections integrated via native Squarespace Accordion blocks',
          'Self-contained factual passages designed for LLM extraction',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized sites and brand mentions exploitable by LLMs.',
        items: [
          'Backlinks from industry directories, thematic blogs, and niche media',
          'Guest posts on high-authority websites in creative industries',
          'Brand mentions in web platform comparisons and buyer guides',
          'Each external mention strengthens PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (pages, blog, portfolio)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and tracking of Squarespace technical limitations',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your team, your Squarespace web designer, or your management.',
    items: [
      {
        id: 1,
        title: 'Squarespace technical audit report',
        description: 'Full diagnostic of your Squarespace site: Hn structure by template, native schema.org markup, Core Web Vitals, redirects and broken links, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Squarespace schema.org kit',
        description: 'Complete JSON-LD markup (Organization, BreadcrumbList, FAQPage, LocalBusiness, Product) injected via Squarespace Code Injection. Integration guide with screenshots for your web designer.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages, blog posts, and FAQ sections optimized for SEO and GEO. Direct integration into the Squarespace visual editor (text blocks, FAQ accordions, optimized galleries).',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from niche blogs, specialized directories (creative, design, food service), and thematic media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, segmented organic traffic, GEO Score evolution, Squarespace performance status (Core Web Vitals, page weight), and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Squarespace site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which agency should I choose for my Squarespace site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Squarespace site?", the LLM does not recommend any agency directly. It provides selection criteria (Squarespace experience, understanding of platform limitations, ability to work within a closed ecosystem) and points toward directories like Clutch and Embarque. SEOSpace (official plugin, 40,000+ sites) is the only tool mentioned consistently. The agency that structures its content with a documented methodology and measurable results has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Squarespace website", the LLM generates a guide covering 8 to 12 points: title tags, meta descriptions, image optimization, internal linking, and Google Search Console integration. No agency is cited. Preferred sources are Squarespace Help Center, Neil Patel, and Elfsight tutorials. The GEO dimension is entirely absent.</p><h4>CMS comparison queries</h4><p>On "Squarespace vs WordPress for SEO", the LLM produces a comparison table with 6 to 9 criteria. WordPress is presented as superior in flexibility (plugins, .htaccess, full schema.org). Squarespace is presented as adequate for basics but limited in technical customization. Sites publishing structured comparisons with measurable criteria are favored as sources.</p><h4>Technical problem queries</h4><p>On "common Squarespace SEO problems", the LLM provides a list of 6 to 8 specific issues: theme-imposed headings, basic schema.org, no regex redirects, image performance. Content structured as problem-solution tables has the highest chance of being extracted.</p>',
    structuredData:
      'For a Squarespace site, native schema.org markup is limited to <code>WebSite</code> and <code>SearchAction</code>. All additional types must be manually injected via Code Injection (header): <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ pages), <code>Product</code> (for Squarespace Commerce). This manual injection is the only way to obtain Google rich snippets and allow LLMs to extract usable structured data.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Squarespace site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy and Citability (external trust signals, backlinks, mentions), and Factual Density (richness of schema.org markup, structured data, and named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Squarespace SEO',
    items: [
      {
        question: 'How much does Squarespace SEO cost?',
        answer:
          'The SEO budget for a Squarespace site depends on the number of pages, the template used, and the competition level on your target queries. At Rankwell, Squarespace SEO engagements start from $1,500/month for a portfolio site under 30 pages, and range from $3,000 to $5,000/month for Squarespace Commerce stores or large portfolio sites with hundreds of pages. This budget covers the technical audit, schema.org injection, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Squarespace?',
        answer:
          'Initial results typically appear within 2 to 4 months for technical fixes (heading structure, meta descriptions, schema.org). Ranking improvements on competitive keywords require 4 to 8 months of sustained work. Performance gains (image compression, LCP reduction) produce measurable effects within the first month. Rankwell provides a forecast timeline based on the initial audit of your Squarespace site.',
      },
      {
        question: 'Can you add advanced schema.org to Squarespace without plugins?',
        answer:
          'Yes, but only via Code Injection (header or footer) available in Squarespace advanced settings. Native markup is limited to WebSite and SearchAction. To get Google rich snippets (FAQ, reviews, breadcrumbs), JSON-LD must be manually injected for each type: Organization, BreadcrumbList, FAQPage, LocalBusiness, Product. Rankwell produces these snippets and integrates them directly into your site.',
      },
      {
        question: 'How can I improve my Squarespace site speed?',
        answer:
          'Squarespace slowness comes from three main causes: images uploaded without compression (often > 2 MB), homepage animations and embedded videos, and proprietary template JavaScript that cannot be configured. Rankwell addresses this upstream (compression and resizing before upload, limiting heavy galleries) and configures native lazy loading. If LCP remains critical, a CDN proxy (Cloudflare) can be placed in front of Squarespace to accelerate delivery.',
      },
      {
        question: 'How can I get my Squarespace site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your Squarespace site, three conditions must be met: content rich in verifiable factual data (statistics, comparisons, definitions) rather than purely visual, schema.org markup injected manually (native Squarespace markup is insufficient), and brand mentions on third-party sources (blogs, press, directories). The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site citability.',
      },
      {
        question: 'Is Squarespace a good choice for SEO in 2026?',
        answer:
          'Squarespace covers SEO fundamentals (SSL, responsive design, clean URLs, automatic sitemap) and suits portfolio sites for creatives, photographers, and restaurants. For projects where SEO is a strategic priority (e-commerce, editorial, lead generation), its limitations become a constraint: no SEO plugins, basic schema.org, URL-by-URL redirects, suboptimal image performance. Rankwell adapts its SEO and GEO methodology to the specific constraints of Squarespace to maximize results.',
      },
      {
        question: 'Why choose Rankwell for Squarespace SEO?',
        answer:
          'Rankwell combines Squarespace technical SEO expertise (template heading correction, JSON-LD injection via Code Injection, performance optimization within platform constraints) with the GEO dimension that the vast majority of SEO agencies have not yet integrated. Our 8-step methodology is designed for the specific constraints of Squarespace: no plugins, limited schema.org, manual redirects. The proprietary GEO Score measures your site visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Squarespace site?',
    description:
      'Request a free GEO & SEO audit of your Squarespace site. Our SEO & GEO consultants analyze your template, your markup, your performance, and your AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
        { label: 'SEO for Photographers', href: '/en/geo-seo-agency/sector/photographe' },
        { label: 'SEO for Consultants', href: '/en/geo-seo-agency/sector/consultant' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
      ],
      glossaire: [
        { label: 'Citability', href: '/en/glossary/citabilite' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/en/glossary/core-web-vitals' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Wix', href: '/en/geo-seo-agency/cms/wix' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Framer', href: '/en/geo-seo-agency/cms/framer' },
      { label: 'Shopify', href: '/en/geo-seo-agency/cms/shopify' },
      { label: 'Weebly', href: '/en/geo-seo-agency/cms/weebly' },
    ],
  },
};

export default data;
