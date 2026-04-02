/**
 * DATA: CMS Framer Page (EN)
 * Route: /en/geo-seo-agency/cms/framer
 *
 * English version adapted for the international Framer market.
 * Framer: SaaS design/prototyping turned no-code CMS, React-based SSG,
 * fast CDN hosting, limited CMS (no hierarchical collections), schema.org
 * manual via Custom Code, nascent ecosystem.
 * Content based on LLM auto-test (March 2026) and global Framer ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'framer',
    title: 'Framer SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Framer websites. React runtime, limited CMS, manual schema.org: a complete methodology built for Framer.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Framer' },
    ],
    title: 'Framer SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'React runtime of 200 to 500 KB per page, a CMS with no hierarchical collections, and no schema.org by default: ranking a Framer site demands expertise that design alone cannot deliver. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Framer SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Framer (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Framer',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Framer combines SSG and intelligent pre-rendering (TPR) to serve static pages from a global CDN</strong>, achieving median LCP below 1.5 s. Images convert to WebP/AVIF and Rolldown chunking improves LCP by 41%, forming a strong performance base for an <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategy.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Framer\'s React runtime transfers 200 to 500 KB of JavaScript per page</strong>. The CMS lacks hierarchical categories, collection relationships, and native tags, blocking <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">semantic silo</a> architecture. Schema.org requires manual Custom Code injection, and 301 redirects are capped at ~100 on the Pro plan.',
    geoAngle:
      'According to Rankwell, Framer sites suffer from a structural AI citability deficit: no native structured data, editorial content rarely deep enough for self-contained factual passages, and a nascent third-party ecosystem that generates few brand mentions exploitable by LLMs.',
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
    title: 'Common Framer SEO problems and solutions',
    interpretation:
      'These issues affect the majority of Framer sites that have not been optimized by an SEO specialist. Each problem degrades Google rankings or reduces citability by AI engines. A technical audit identifies which ones apply to your site and prioritizes fixes by impact.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'React runtime of 200 to 500 KB per page',
        'Degraded LCP on mobile, Lighthouse score below 70 on heavy pages',
        'Reduction of complex animations, lazy loading of non-critical components, removal of unnecessary interactions below the fold',
      ],
      [
        'No schema.org markup by default',
        'No rich snippets, invisible to LLMs during factual extraction',
        'Manual JSON-LD injection via Custom Code: WebSite, Organization, BreadcrumbList, FAQPage, with dynamic CMS variables ({{}} syntax)',
      ],
      [
        'Flat CMS without hierarchical categories or tags',
        'No native semantic silo architecture, limited internal linking',
        'Manual pillar pages with contextual links to CMS pages, content structuring via thematic collections',
      ],
      [
        'URL slugs not translatable in multilingual mode',
        'Identical URLs across FR and EN versions, weakened language signal for Google',
        'Hreflang tag configuration in Custom Code, localized meta titles and descriptions, /fr/ and /en/ folder structure',
      ],
      [
        '301 redirects capped at approximately 100 on Pro plan',
        'Risk of mass 404 errors during migrations or restructurings',
        'Plan tier evaluation before migration, CDN/DNS-level redirect management when the Framer quota is exceeded',
      ],
      [
        'Custom canonicals reserved for Enterprise plan',
        'Duplicate content between similar pages without an explicit canonical signal',
        'Duplicate page audit, content consolidation, Enterprise plan negotiation when canonicals are critical',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Framer',
    subtitle: 'A structured 8-step approach to Framer SEO, designed around the platform-specific challenges of this design-to-code CMS.',
    steps: [
      {
        title: 'Framer technical audit',
        subtitle: 'Full analysis of your Framer site: plan tier, CMS collections, animations, JavaScript weight, and Core Web Vitals.',
        items: [
          'Inventory of pages, CMS collections, and interactive components',
          'Core Web Vitals measurement (LCP, INP, CLS) on mobile and desktop',
          'Total JavaScript weight analysis: React runtime + animations + custom components',
          'Configuration verification: sitemap, robots.txt, 301 redirects, canonicals',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Framer site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Runtime and animation optimization',
        subtitle: 'Reduction of JavaScript weight and Framer animations to achieve a mobile LCP below 2.5 s.',
        items: [
          'Animation audit: removal of complex transitions on mobile',
          'Lazy loading of interactive components outside the visible viewport',
          'Rolldown chunking verification and identification of render-blocking scripts',
          'Image optimization: WebP/AVIF compression, responsive sizing',
        ],
      },
      {
        title: 'Schema.org markup injection',
        subtitle: 'Creation and injection of JSON-LD markup in Framer Custom Code, with dynamic variables for CMS pages.',
        items: [
          'WebSite, Organization, BreadcrumbList markup for the global site',
          'FAQPage markup on FAQ pages, Article or BlogPosting on editorial content',
          'Dynamic injection via Framer {{}} variable syntax for CMS pages (title, date, author)',
          'Validation with Google Rich Results Test and Schema.org Validator',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'Meta tag setup, redirect management, and hreflang configuration to maximize SEO control within Framer.',
        items: [
          'Meta title and description optimized page by page (including CMS pages)',
          '301 redirect configuration for legacy URLs (plan quota management)',
          'Hreflang tags in Custom Code for multilingual sites',
          'XML sitemap submission to Google Search Console',
        ],
      },
      {
        title: 'Framer content strategy',
        subtitle: 'Creation of SEO-optimized content adapted to the limitations of the Framer CMS.',
        items: [
          'Pillar pages created as static pages with contextual links to CMS collections',
          'Manual internal linking between pages and articles (no native CMS relationships)',
          'Thematic FAQ sections with self-contained factual passages for LLM extraction',
          'Content enriched with verifiable data (figures, comparisons, specifications)',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized design, SaaS, and no-code websites.',
        items: [
          'Backlinks from no-code blogs, design publications, and SaaS directories',
          'Guest posts on high-authority websites in the startup ecosystem (Product Hunt, Indie Hackers, Medium)',
          'Brand mentions in Framer vs Webflow comparison articles and CMS buying guides',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and corrective actions for the following month.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by content type (static pages vs CMS items)',
          'GEO Score: visibility across AI engines',
          'Core Web Vitals evolution and global JavaScript weight tracking for the Framer site',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your design team, your developer, or your management.',
    items: [
      {
        id: 1,
        title: 'Framer technical audit report',
        description: 'Full diagnostic of your Framer site: JavaScript weight (React runtime + animations), Core Web Vitals, CMS collections, sitemap/robots.txt/redirect configuration, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Framer schema.org kit',
        description: 'Complete JSON-LD markup (WebSite, Organization, BreadcrumbList, FAQPage, Article) injected in Framer Custom Code. Dynamic {{}} variables for CMS pages. Step-by-step integration guide with screenshots.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pages and articles optimized for SEO and GEO. Integration into Framer CMS or as static pages. Manual internal linking to compensate for the absence of collection relationships.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from no-code blogs, design platform comparators, and SaaS/startup media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic, GEO Score evolution, Core Web Vitals, JavaScript weight of the Framer runtime, and adjustment recommendations.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Framer site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency should I choose for a Framer site?", the LLM compiles web sources to formulate its answer. If your site does not appear in any cited source, you are invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Framer site?", the LLM does not recommend any agency by name. It provides 5 to 6 selection criteria: no-code platform experience, understanding of Framer-specific constraints (React SSG, limited CMS, manual schema.org), ability to compensate for SEO limitations via custom configurations, and client references on design or SaaS websites. Agency discovery platforms (Clutch, Sortlist, DesignRush) are referenced, but no specialist is singled out. The anglophone market for "Framer SEO agency" is empty.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Framer website", the LLM generates a guide covering meta tags, slug optimization, manual JSON-LD injection via Custom Code, sitemap submission to GSC, 301 redirect configuration (Pro plan, capped at approximately 100), animation reduction for LCP, and Rolldown chunking. Preferred sources: clicks.supply, BRIX Templates, official Framer documentation, and Relume.</p><h4>CMS comparison queries</h4><p>On "Framer vs Webflow for SEO", the LLM produces a comparison table of 6 to 8 criteria. Webflow is systematically presented as superior for advanced SEO (full sitemap control, wildcard redirects, hierarchical CMS, Finsweet ecosystem). Framer is qualified as "sufficient for simple sites" with good default performance. Sites publishing structured comparisons with measurable data are favored as extraction sources.</p><h4>Technical problem queries</h4><p>On "common Framer SEO problems", the LLM identifies the React runtime (200 to 500 KB), absent schema.org, limited CMS (no categories, no tags, no collection relationships), capped redirects, and non-translatable slugs. Content structured as problem-solution tables with quantified data has the highest chance of being extracted.</p>',
    structuredData:
      'For a Framer site, schema.org types must be injected manually as JSON-LD via Custom Code: <code>WebSite</code> (primary type), <code>Organization</code> or <code>LocalBusiness</code> (depending on the business), <code>BreadcrumbList</code> (navigation, absent natively), <code>FAQPage</code> (FAQ pages), <code>Article</code> or <code>BlogPosting</code> (CMS content). The <code>{{}}</code> variable syntax in Framer allows generating unique JSON-LD per CMS page. Unlike WordPress (Yoast/RankMath) or Webflow (Finsweet), Framer has no built-in or third-party tool for markup injection.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Framer site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content, often limited by the Framer CMS), Legitimacy and Citability (external trust signals, backlinks, mentions in the no-code/design ecosystem), and Factual Density (richness of JSON-LD markup injected manually and presence of named entities across pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Framer SEO',
    items: [
      {
        question: 'How much does Framer SEO cost?',
        answer:
          'The SEO budget for a Framer site depends on the number of pages, the Framer plan tier, and the competition level on your target keywords. At Rankwell, Framer SEO engagements start from $1,800/month for a brochure site under 30 pages, and range from $3,500 to $6,000/month for sites with dynamic CMS content and editorial strategy needs. This budget covers the technical audit, schema.org JSON-LD injection, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long does it take to see SEO results on Framer?',
        answer:
          'Technical fixes (runtime optimization, schema.org injection, redirect configuration) produce measurable effects within 1 to 2 months. Ranking improvements on competitive keywords require 4 to 8 months of sustained work, as content strategy on Framer is slower to deploy (manual internal linking, no native semantic silo). Rankwell provides a forecast timeline based on the initial audit of your Framer site.',
      },
      {
        question: 'How do I add schema.org markup to a Framer site?',
        answer:
          'Framer does not generate any schema.org markup by default. JSON-LD must be injected manually in the Custom Code section (head). For CMS pages, the {{}} dynamic variable syntax allows generating unique markup per page (title, date, author). Rankwell delivers a complete JSON-LD kit (WebSite, Organization, BreadcrumbList, FAQPage, Article) ready to integrate, validated with Google Rich Results Test.',
      },
      {
        question: 'How do I improve page speed on my Framer site?',
        answer:
          'Framer site weight comes primarily from the React runtime (200 to 500 KB of JavaScript), complex animations, and unoptimized images. Rankwell begins with a performance audit that identifies the heaviest components, removes non-essential animations on mobile, configures lazy loading for elements outside the viewport, and verifies that Framer correctly leverages Rolldown chunking and WebP/AVIF compression.',
      },
      {
        question: 'How can I get my Framer site cited by ChatGPT and Perplexity?',
        answer:
          'Framer sites are rarely cited by AI engines because their CMS produces limited editorial content and no native schema.org markup. Three actions are required to increase citability: inject complete JSON-LD markup, publish content with verifiable factual data (figures, comparisons, specifications), and obtain brand mentions on third-party sources. The Rankwell GEO Score measures these three dimensions and identifies priority levers.',
      },
      {
        question: 'Is Framer a good CMS for SEO in 2026?',
        answer:
          'Framer is well suited for SEO on brochure sites, portfolios, and startup landing pages. Its native SSG performance and global CDN provide a solid technical foundation. However, for ambitious content strategies (high-volume blog, e-commerce, semantic silo), the CMS remains too limited: no categories, no tags, no collection relationships. Rankwell adapts its SEO and GEO methodology to the real scope of Framer, without promising what the platform cannot deliver.',
      },
      {
        question: 'Why choose Rankwell for Framer SEO?',
        answer:
          'Rankwell combines no-code technical SEO expertise (Framer, Webflow, Squarespace) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 8-step methodology is built for Framer-specific challenges: heavy React runtime, absent schema.org, limited CMS, capped redirects. The proprietary GEO Score measures your site visibility across AI engines, an angle your competitors do not cover.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Framer site?',
    description:
      'Request a free GEO & SEO audit of your Framer site. Our SEO & GEO consultants analyze your runtime, CMS collections, schema.org markup, and AI engine visibility, and deliver a concrete action plan.',
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
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
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
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'Wix', href: '/en/geo-seo-agency/cms/wix' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
    ],
  },
};

export default data;
