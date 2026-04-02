/**
 * DATA: Website Migration Project Page (EN)
 * Route: /en/geo-seo-agency/project/website-migration
 *
 * Adapted for US/UK/international markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'website-migration',
    title: 'Website Migration SEO & GEO Agency - Rankwell',
    description:
      'Rankwell manages SEO and GEO for website migrations. 301 redirects, URL mapping, traffic preservation, and AI citability transfer. Full methodology.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Website Migration' },
    ],
    title: 'SEO & GEO for Website Migration: Full Methodology',
    subtitle:
      '301 redirects, URL mapping across thousands of pages, backlink preservation, and Knowledge Graph transfer: SEO for a website migration demands specialized technical expertise. Our experts combine SEO and GEO to protect your organic traffic and your visibility in AI engines.',
    ctaText: 'Request a migration SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a website migration',
    technicalContext:
      'A website migration requires mapping each indexed URL with a <strong class="text-secondary dark:text-accent">301 redirect</strong>. On a site with <strong class="text-secondary dark:text-accent">10,000 to 500,000 URLs</strong>, a single redirect chain dilutes PageRank and slows Googlebot. Misconfigured canonical tags after migration cause mass deindexation within days.',
    marketData:
      '<strong class="text-secondary dark:text-accent">60% to 80% of website migrations without SEO guidance result in permanent traffic loss</strong>. Recovery takes <strong class="text-secondary dark:text-accent">3 to 6 months</strong> when executed properly, but losses become irreversible if redirects are missing. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> reduces the risk to under 10%.',
    geoAngle:
      'According to Rankwell, a migration carries an invisible risk: the loss of Knowledge Graph signals and AI citability. Brand mentions, entities, and structured data on the old domain feed LLM responses. If not transferred, the brand disappears from generative answers.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, a website migration in 2026 carries an invisible risk that traditional methodologies do not address: the loss of Knowledge Graph signals and the disruption of AI citability.',
    glossarySlug: 'migration-seo',
    glossaryLabel: 'Learn more about SEO migration',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your website migration',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to website migrations.',
    steps: [
      {
        title: 'Pre-migration audit: full baseline capture',
        subtitle: 'Exhaustive crawl of the current site to capture every indexed URL, every backlink, every structured data element, and every organic position before any intervention.',
        items: [
          'Full crawl (Screaming Frog): URL inventory, status codes, canonical tags',
          'Google position export by page via Search Console and Haloscan',
          'Backlink mapping by URL (Ahrefs/Haloscan)',
          'Inventory of schema.org structured data on the old site',
        ],
      },
      {
        title: 'GEO pre-migration audit: AI citability of the old domain',
        subtitle: 'Assessment of your brand and page visibility in AI engines (ChatGPT, Perplexity, Gemini) before the migration.',
        items: [
          'Testing 20 to 30 strategic queries across LLMs to measure current citability',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Identification of pages cited by LLMs (priority pages to protect)',
          'Benchmark of the brand Knowledge Graph presence (Wikidata, Google Knowledge Panel)',
        ],
      },
      {
        title: '301 redirect plan and URL mapping',
        subtitle: 'Creating the mapping file between every URL on the old site and its counterpart on the new site, with zero redirect chain verification.',
        items: [
          '1-to-1 mapping of every indexed URL to its new URL (no homepage catch-all redirects)',
          'Systematic verification: zero redirect chains (maximum 1 hop per URL)',
          'Priority treatment for URLs receiving external backlinks',
          'Obsolete page plan: redirecting to the most relevant parent page',
        ],
      },
      {
        title: 'Structured data and markup transfer',
        subtitle: 'Recreating schema.org markup on the new site and verifying canonical tags, hreflang, and meta tags.',
        items: [
          'Schema.org migration (WebSite, Organization, BreadcrumbList, FAQPage)',
          'Canonical tag verification: every URL points to itself, not to the old domain',
          'Hreflang tag transfer for multilingual and multi-country sites',
          'Robots.txt and sitemap.xml validation on the new domain',
        ],
      },
      {
        title: 'Pre-production testing and SEO validation',
        subtitle: 'Verifying all redirects and markup on a staging environment before going live.',
        items: [
          'Staging site crawl: verifying status codes, redirects, and canonicals',
          'Testing every 301 redirect on high-traffic and high-backlink URLs',
          'Schema.org markup validation via Google Rich Results Test',
          'Core Web Vitals performance check on the new site',
        ],
      },
      {
        title: 'Go-live and search engine submission',
        subtitle: 'Coordinated launch with the hosting provider, new sitemap submission, and Google notification via Search Console.',
        items: [
          'Server-side 301 redirect activation (htaccess, nginx, or CDN)',
          'New sitemap.xml submission in Google Search Console',
          'Indexation request for strategic pages via the URL Inspection tool',
          'AI robot accessibility check (GPTBot, ClaudeBot, PerplexityBot)',
        ],
      },
      {
        title: 'Post-migration monitoring and iterations',
        subtitle: 'Daily tracking of positions, organic traffic, crawl errors, and GEO Score for 3 to 6 months after go-live.',
        items: [
          'Daily 404 error monitoring in Search Console (fixes within 24 hours)',
          'Weekly position comparison before/after migration by page',
          'Organic traffic monitoring segmented by page type',
          'Post-migration GEO Score: verifying AI citability on the new domain',
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
        title: '301 redirect plan',
        description: 'Complete mapping file (old URL to new URL) with priority rules based on traffic and backlinks. Includes regex rules for repeating patterns and zero-chain verification for every redirect.',
      },
      {
        id: 2,
        title: 'GEO pre-migration audit report',
        description: 'Baseline GEO Score before migration, pages cited by AI engines, Knowledge Graph benchmark. This document serves as the reference to measure migration impact on AI visibility.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, and FAQPage markup adapted to the new CMS, with integration guide. Parity verification against the old site markup.',
      },
      {
        id: 4,
        title: 'Comparative crawl report',
        description: 'Full crawl of both the old and new sites, with differential analysis of status codes, canonical tags, and indexed pages. Gap identification with corrective action list.',
      },
      {
        id: 5,
        title: 'Post-migration monitoring dashboard',
        description: 'Tracking dashboard with daily position monitoring, segmented organic traffic, 404 errors, and GEO Score. Automated alerts for abnormal drops in traffic or visibility.',
      },
      {
        id: 6,
        title: 'SEO and GEO post-migration report',
        description: 'Assessment at 3 and 6 months: position comparison, traffic, and AI citability before and after migration. Recovery percentage by page category.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your migrated website in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "how to migrate a website without losing SEO rankings?", the LLM compiles technical sources to generate its answer. If your old domain was cited by AI engines and the migration breaks those signals, your brand disappears from this visibility channel.',
    llmBehavior:
      '<h4>Migration methodology queries</h4><p>On "how to avoid losing rankings during a website migration", the LLM generates a structured guide of 10 to 14 steps covering pre-migration audit, URL mapping, 301 redirects, and post-migration monitoring. No agency is named. Content rich in quantified steps and documented case studies is prioritized as a source.</p><h4>Migration risk queries</h4><p>On "CMS migration SEO risks", the LLM enumerates 6 to 8 technical risks (backlink loss, redirect chains, deindexation, structured data loss). It cites traffic loss ranges (60% to 80% without guidance) and references studies from Ahrefs and Moz. Agencies that publish migration benchmarks with documented results have the structural profile to be cited.</p><h4>Recovery timeline queries</h4><p>On "how long does it take to recover traffic after a domain migration", the LLM distinguishes cases: domain change (6 to 12 months), CMS migration (1 to 3 months), HTTPS migration (2 to 4 weeks). Sources with documented recovery curves and quantified case studies are favored.</p><h4>AI visibility and migration queries</h4><p>On "how to preserve AI visibility during a website migration", the LLM addresses the question with less certainty than traditional SEO queries. Few sources document this topic. This is near-virgin territory for a GEO agency publishing a methodology for transferring citability signals.</p>',
    structuredData:
      '<p>For a website migration, the schema.org types to preserve and recreate are: <code>WebSite</code> (domain identity), <code>Organization</code> (brand entity), <code>BreadcrumbList</code> (hierarchical navigation), <code>FAQPage</code> (informational content), and <code>Service</code> (commercial offering). The <code>WebSite</code> markup with <code>url</code> and <code>potentialAction</code> properties must point to the new domain so Google and LLMs associate the brand entity with the new URL.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your website\'s citability by AI engines on a 0-to-100 scale, before and after migration. It evaluates three dimensions: the Informational Universe (presence and depth of transferred content), Legitimacy and Citability (redirected backlinks, preserved brand mentions), and Factual Density (schema.org markup recreated, named entities preserved on the new domain).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for website migration',
    items: [
      {
        question: 'How much does SEO support for a website migration cost?',
        answer:
          'The budget depends on the number of URLs to migrate, the technical complexity (domain change, CMS switch, or URL restructuring), and the volume of backlinks to preserve. At Rankwell, migration SEO engagements start from $3,000 (or GBP 2,500) for sites under 500 URLs, and range from $10,000 to $25,000 (or GBP 8,000 to GBP 20,000) for sites exceeding 50,000 URLs with multi-domain requirements. This covers the pre-migration audit, redirect plan, staging tests, and post-migration monitoring.',
      },
      {
        question: 'How long does it take to recover traffic after a website migration?',
        answer:
          'Recovery time depends on the migration type. An HTTPS protocol switch stabilizes in 2 to 4 weeks. A CMS change with preserved URLs takes 1 to 3 months. A full domain change requires 3 to 6 months, sometimes up to 12 months in highly competitive verticals. Rankwell provides a realistic timeline based on the backlink profile analysis and indexed page volume before migration.',
      },
      {
        question: 'How do you prevent redirect chains during a migration?',
        answer:
          'A redirect chain forms when URL A redirects to B, which redirects to C. Each additional hop dilutes the transmitted PageRank and slows the crawl. The rule at Rankwell is strict: maximum 1 hop per URL. The redirect plan maps every indexable URL from the old site directly to its final destination on the new site. Existing redirects inherited from previous migrations are updated to point directly to the final target.',
      },
      {
        question: 'Which CMS should I choose when replacing the old one during a migration?',
        answer:
          'The choice depends on the site type and objectives. WordPress suits brochure sites and blogs under 5,000 pages. Shopify and WooCommerce handle mid-sized e-commerce stores. Headless CMS options (Strapi, Contentful) offer maximum flexibility for complex architectures. Rankwell evaluates each CMS on three criteria: native URL and redirect management, schema.org markup support, and accessibility to AI robots (GPTBot, ClaudeBot).',
      },
      {
        question: 'How do I preserve AI visibility for my website after a migration?',
        answer:
          'AI engines (ChatGPT, Perplexity, Gemini) cite your site based on signals built on the old domain: brand mentions, structured data, named entities. Three actions are required to preserve these signals: recreating schema.org markup identically on the new domain, maintaining AI robot accessibility (no GPTBot blocking in robots.txt), and verifying that the post-migration GEO Score remains stable. Rankwell measures citability before and after migration to detect any disruption.',
      },
      {
        question: 'What is the difference between traditional SEO and GEO for a website migration?',
        answer:
          'Migration SEO focuses on 301 redirects, preserving Google positions, and conserving backlink equity. Migration GEO adds a further layer: preserving AI citability signals (Knowledge Graph, structured data, brand mentions in LLM corpora). A site can recover its Google positions in 3 months but lose its visibility in ChatGPT if entities and markup are not transferred. Rankwell integrates both dimensions in a unified methodology.',
      },
      {
        question: 'Why choose Rankwell for my website migration SEO?',
        answer:
          'Rankwell combines technical migration expertise (URL mapping, chain-free 301 redirects, staging validation) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 7-step methodology includes a pre-migration AI citability audit, a structured data transfer plan, and post-migration GEO Score monitoring. This dual tracking (Google positions plus AI engine visibility) is a metric no other provider offers in the context of a website migration.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to migrate your website without losing visibility?',
    description:
      'Request a free GEO & SEO audit before your migration. Our SEO & GEO consultants analyze your current site, map your URLs and backlinks, and deliver a secure migration plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
        { label: 'SEO for Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
        { label: 'SEO for Pharmacies', href: '/en/geo-seo-agency/sector/pharmacie' },
      ],
      projets: [
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
        { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
      ],
      glossaire: [
        { label: 'SEO Migration', href: '/en/glossary/migration-seo' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Crawl Budget', href: '/en/glossary/crawl-budget' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our web project expertise',
    items: [
      { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
      { label: 'Marketplace', href: '/en/geo-seo-agency/project/marketplace' },
      { label: 'Web App & SaaS', href: '/en/geo-seo-agency/project/web-app' },
    ],
  },
};

export default data;
