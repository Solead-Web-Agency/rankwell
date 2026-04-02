/**
 * DATA: Website Redesign Project Page (EN)
 * Route: /en/geo-seo-agency/project/website-redesign
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
    slug: 'website-redesign',
    title: 'Website Redesign SEO & GEO Agency - Rankwell',
    description:
      'Rankwell protects your SEO capital during a website redesign. 301 redirects, schema.org migration, GEO integration, staging QA, full post-launch monitoring.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Website Redesign' },
    ],
    title: 'SEO & GEO for a Website Redesign: Full Methodology',
    subtitle:
      'Mass 301 redirects, SEO capital preservation, schema.org markup recreation, regression testing: SEO for a website redesign demands technical expertise that generalist agencies lack. Our experts combine SEO and GEO to protect your rankings and integrate AI visibility from day one.',
    ctaText: 'Request a website redesign SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a website redesign',
    technicalContext:
      'A website redesign redistributes <strong class="text-secondary dark:text-accent">100% of accumulated SEO capital</strong>: rankings, backlinks, domain authority. Every URL changed without a 301 redirect causes permanent PageRank loss. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> handles redirect mapping, schema.org recreation, and pre-production crawl testing.',
    marketData:
      '<strong class="text-secondary dark:text-accent">60 to 80% of website redesigns result in organic traffic loss</strong> when no SEO support is planned. Recovery after a properly managed redesign takes <strong class="text-secondary dark:text-accent">3 to 6 months</strong>. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO agency</a> turns this risk into a growth opportunity.',
    geoAngle:
      'According to Rankwell, a redesign carries an invisible risk: the loss of Knowledge Graph signals and AI citability. Generative engines cite specific URLs. If those URLs change without redirects, the brand vanishes from AI responses.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, a website redesign in 2026 carries an invisible risk that traditional methodologies do not cover: the loss of Knowledge Graph signals and the breakdown of AI citability.',
    glossarySlug: 'migration-seo',
    glossaryLabel: 'Learn more about SEO migration',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your website redesign',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to a website redesign.',
    steps: [
      {
        title: 'Pre-redesign SEO audit',
        subtitle: 'Full inventory of existing SEO capital: indexed pages, acquired positions, backlink profile, and active structured data markup.',
        items: [
          'Extraction of all indexed URLs via Google Search Console and Screaming Frog',
          'Backlink mapping by landing page destination (Ahrefs, Haloscan)',
          'Survey of active rich snippets and existing schema.org markup',
          'Identification of pages generating 80% of organic traffic (Pareto principle)',
        ],
      },
      {
        title: 'GEO audit: AI citability before redesign',
        subtitle: 'Assessment of your brand and page visibility in AI engines, to measure what must be preserved during the transition.',
        items: [
          'Testing 20 to 30 industry queries on ChatGPT, Perplexity, and Gemini',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Identification of URLs currently cited by LLMs (priority protection targets)',
          'Citability benchmark against 3 to 5 direct competitors',
        ],
      },
      {
        title: '301 redirect plan and URL mapping',
        subtitle: 'Building an exhaustive old-to-new mapping for every indexed URL, every page receiving backlinks, and every URL cited by LLMs.',
        items: [
          'One-to-one mapping of each old URL to its equivalent in the new architecture',
          'Redirect prioritization by traffic volume and number of inbound backlinks',
          'Detection and elimination of redirect chains (3 hops maximum)',
          'Immediate redirects for AI-cited URLs to preserve citability',
        ],
      },
      {
        title: 'SEO and GEO integration in the new architecture',
        subtitle: 'Designing the site structure, internal linking, and native schema.org markup on the new version.',
        items: [
          'Page architecture aligned with existing keyword clusters',
          'Full schema.org recreation: WebSite, Organization, BreadcrumbList, FAQPage, Service',
          'Internal linking restructured to distribute PageRank toward strategic pages',
          'Self-contained factual passages embedded from design stage (native GEO optimization)',
        ],
      },
      {
        title: 'SEO staging QA',
        subtitle: 'Comparative crawl of staging vs. production to detect any regression before launch.',
        items: [
          'Full staging crawl with Screaming Frog: 404s, canonicals, hreflang, response times',
          'Redirect plan verification: every old URL resolves to the correct target',
          'Schema.org validation on each page template (Rich Results Test)',
          'JavaScript rendering test for dynamic pages (Googlebot rendering)',
        ],
      },
      {
        title: 'Launch and real-time monitoring',
        subtitle: 'Secure launch protocol with real-time tracking of positions, indexation, and server errors during the first 48 hours.',
        items: [
          'New sitemap submission via Google Search Console',
          'Hourly monitoring of 404 and 500 errors during the first 48 hours',
          'Googlebot crawl verification via server logs (frequency and pages crawled)',
          'Position monitoring on the top 50 strategic keywords',
        ],
      },
      {
        title: 'Post-redesign tracking and recovery',
        subtitle: 'Ongoing support for 3 to 6 months after launch to ensure traffic recovery and measure GEO Score evolution.',
        items: [
          'Weekly organic traffic comparison: before vs. after redesign',
          'Iterative corrections: missing redirects, deindexed pages, canonical errors',
          'Post-redesign GEO Score: AI citability verification on key queries',
          'Monthly report with recovery curve and adjustment recommendations',
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
        title: 'Pre-redesign audit report',
        description: 'Inventory of indexed URLs, acquired positions, backlink profile, and active rich snippets, with identification of critical pages to protect as a priority.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Brand citability tests on ChatGPT, Perplexity, and Gemini before the redesign, with detailed GEO Score breakdown and list of URLs cited by AI engines.',
      },
      {
        id: 3,
        title: '301 redirect plan',
        description: 'Complete old-to-new mapping file for every indexed URL, ranked by traffic volume and backlink count, ready to deploy on your server or CDN.',
      },
      {
        id: 4,
        title: 'Turnkey schema.org kit',
        description: 'WebSite, Organization, BreadcrumbList, FAQPage, and Service markup recreated for the new architecture, with per-template integration guide.',
      },
      {
        id: 5,
        title: 'SEO QA checklist',
        description: 'Pre-launch validation checklist: redirects, canonicals, hreflang, schema.org markup, JavaScript rendering, server response times, indexation status.',
      },
      {
        id: 6,
        title: 'Post-redesign SEO and GEO report',
        description: 'Monthly tracking of positions, organic traffic, redirect health, and GEO Score evolution for 6 months after launch.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your redesigned website in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "how to redesign a website without losing SEO rankings?", the LLM compiles web sources to formulate its answer. If your expertise content is not among the sources cited, your agency or brand remains invisible in this recommendation channel.',
    llmBehavior:
      '<h4>SEO loss prevention queries</h4><p>On "how to redesign a website without losing SEO?", the LLM generates a chronological guide of 8 to 12 steps: pre-redesign audit, URL inventory, 301 redirect plan, meta tag preservation, staging tests, post-launch monitoring. Sources structured as step-by-step guides with quantified data (traffic loss percentage, recovery timeline) are extracted first. No agency is named.</p><h4>Redesign risk queries</h4><p>On "website redesign SEO risks", the LLM lists 6 to 8 technical risks: traffic loss, backlink breakage, rich snippet disappearance, redirect chains. It references the 60 to 80% statistic for redesigns with traffic loss. Content documenting these risks with concrete case studies is prioritized.</p><h4>Agency recommendation queries</h4><p>On "best SEO agency for a website redesign", the LLM does not name any specific agency. It provides selection criteria: migration experience, redirect planning capability, before-and-after references. Agencies publishing detailed redesign case studies with traffic recovery curves have the structural profile to be cited.</p><h4>GEO and redesign queries</h4><p>On "how to integrate GEO into a website redesign?", the LLM produces no relevant response. It confuses GEO (Generative Engine Optimization) with geolocation or geographic targeting. This is entirely uncharted territory that no competitor covers.</p>',
    structuredData:
      '<p>For a website redesign, the schema.org types to recreate are: <code>WebSite</code> (domain identity), <code>Organization</code> (owning entity), <code>Service</code> (service pages), <code>BreadcrumbList</code> (hierarchical navigation), <code>FAQPage</code> (FAQ pages). <code>WebSite</code> markup with <code>potentialAction</code> (SearchAction) allows AI engines to identify the site structure from launch and reindex entities without delay.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your website\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (presence and depth of content on the new architecture), Legitimacy and Citability (preserved backlinks, press mentions, external trust signals), and Factual Density (richness of recreated schema.org markup and named entities in new content).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for a website redesign',
    items: [
      {
        question: 'How much does SEO support for a website redesign cost?',
        answer:
          'The budget depends on the number of indexed pages, redirect plan complexity, and scope of the redesign (visual refresh, technical rebuild, or domain change). At Rankwell, SEO redesign engagements start from $3,000 (or GBP 2,400) for sites under 200 pages, and range from $8,000 to $15,000 (GBP 6,400 to GBP 12,000) for sites exceeding 5,000 URLs with backlink and structured data considerations. This covers the pre-redesign audit, redirect plan, staging QA, and post-launch monitoring.',
      },
      {
        question: 'How long does traffic recovery take after a website redesign?',
        answer:
          'With a complete 301 redirect plan and rigorous SEO QA, traffic recovery takes 3 to 6 months. A domain change without redirects can cause permanent loss. A purely visual refresh with URL preservation typically causes no measurable drop. Rankwell provides a realistic recovery timeline based on your specific redesign scope and page volume.',
      },
      {
        question: 'How do you prevent backlink loss during a website redesign?',
        answer:
          'Backlinks point to specific URLs. If those URLs change without a 301 redirect, the PageRank transmitted by those links is lost. Rankwell maps every backlink by landing page, builds an old-to-new mapping for each affected URL, and verifies after launch that every redirect returns a 301 status (not 302 or a redirect chain). This preserves authority built over years.',
      },
      {
        question: 'Should we change CMS during a website redesign?',
        answer:
          'A CMS change during a redesign adds a layer of technical complexity: new URL structures, new markup, new HTML rendering. If the current CMS meets functional requirements, keeping it reduces SEO risk. If a change is necessary, Rankwell integrates the CMS migration into the redirect plan and adapts the SEO QA to the specifics of the new platform (WordPress, Shopify, Next.js, or other).',
      },
      {
        question: 'How can our brand get cited by ChatGPT after a website redesign?',
        answer:
          'AI engines cite specific URLs in their responses. If those URLs change without a redirect, the brand disappears from generative responses. Rankwell identifies URLs cited by LLMs before the redesign and protects them with priority redirects. The new architecture includes self-contained factual passages and complete schema.org markup to maximize AI citability. The GEO Score measures this visibility before and after the redesign.',
      },
      {
        question: 'What is the difference between SEO and GEO for a website redesign?',
        answer:
          'SEO protects rankings in Google search results: 301 redirects, internal linking preservation, technical markup. GEO (Generative Engine Optimization) protects AI citability: identification of URLs cited by ChatGPT and Perplexity, preservation of factual passages, recreation of schema.org markup that LLMs can process. Both disciplines are complementary. Rankwell is the only agency integrating both in a unified redesign protocol.',
      },
      {
        question: 'Why choose Rankwell for a website redesign?',
        answer:
          'Rankwell combines technical SEO expertise (redirect planning, staging QA, post-launch monitoring) with the GEO dimension that traditional methodologies ignore. Our 7-step protocol covers the pre-redesign audit, URL mapping, schema.org integration, regression testing, and 6-month follow-up. The proprietary GEO Score measures your brand visibility in AI engines, a metric no other provider offers in the context of a website redesign.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to redesign your website without losing traffic?',
    description:
      'Request a free GEO & SEO audit of your website before the redesign. Our SEO & GEO consultants map your SEO capital, identify risks, and deliver a tailored protection plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'E-commerce SEO', href: '/en/geo-seo-agency/sector/ecommerce' },
        { label: 'Franchise SEO', href: '/en/geo-seo-agency/sector/franchise' },
        { label: 'Lawyer SEO', href: '/en/geo-seo-agency/sector/lawyer' },
        { label: 'Restaurant SEO', href: '/en/geo-seo-agency/sector/restaurant' },
      ],
      projets: [
        { label: 'Website Migration', href: '/en/geo-seo-agency/project/website-migration' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
        { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
      ],
      glossaire: [
        { label: 'SEO Migration', href: '/en/glossary/migration-seo' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our web project expertise',
    items: [
      { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      { label: 'Website Migration', href: '/en/geo-seo-agency/project/website-migration' },
      { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
      { label: 'Web App & SaaS', href: '/en/geo-seo-agency/project/web-app' },
      { label: 'Marketplace', href: '/en/geo-seo-agency/project/marketplace' },
    ],
  },
};

export default data;
