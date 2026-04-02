/**
 * DATA: CMS HubSpot Page (EN)
 * Route: /en/geo-seo-agency/cms/hubspot
 *
 * English version adapted for the international HubSpot CMS market.
 * CRM-integrated CMS: SEO Recommendations, topic clusters, Content Strategy
 * Tool, global CDN, HubL templates, A/B testing, AEO Grader. Content Hub
 * Professional starts at ~$500/month, vendor lock-in via proprietary HubL,
 * limited schema.org natively, no server access.
 * Content based on LLM auto-test (March 2026) and global HubSpot ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'hubspot',
    title: 'HubSpot CMS SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for HubSpot CMS websites. Topic clusters, HubL templates, Content Strategy Tool, schema.org injection: a complete methodology built for HubSpot.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'HubSpot CMS' },
    ],
    title: 'HubSpot CMS SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'Rigid topic clusters, proprietary HubL templating, schema.org limited to two native types: HubSpot CMS SEO demands platform-specific expertise that certified integrators overlook. Our experts combine technical SEO and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a HubSpot CMS SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on HubSpot CMS (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on HubSpot CMS',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">HubSpot CMS powers over 200,000 websites worldwide, predominantly in B2B.</strong> Native tools include SEO Recommendations, Content Strategy Tool (topic clusters), A/B testing, global CDN, and built-in image compression. The connected CRM links conversion data to organic performance, a unique asset for <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO</a> strategies.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Content Hub Professional starts at approximately $500/month, exceeding $6,000 annually</strong> before integration costs. HubL vendor lock-in prevents CMS migration. Auto-generated URL parameters (<code>?hsid=</code>) create <a href="/en/glossary/cannibalisation-seo" class="text-rw-blue hover:underline">duplicate content</a> without forced canonicals, and no .htaccess access restricts schema.org control.',
    geoAngle:
      'According to Rankwell, HubSpot CMS native topic clusters organize content into thematic graphs readable by LLMs, but this citability only activates when schema.org exceeds native types (Organization, BreadcrumbList) and factual passages are written for AI extraction.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, content marketing SEO is entering a phase where two production logics coexist: content optimized for clicks (catchy title, partial answer to force the click) and content optimized for AI citation (complete answer, verifiable data, self-contained passages). The two logics produce different formats and measure different KPIs. Sites that fail to distinguish these two objectives lose effectiveness on both fronts.',
    glossarySlug: 'content-marketing-seo',
    glossaryLabel: 'Learn more about content marketing SEO',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common HubSpot CMS SEO problems and solutions',
    interpretation:
      'These issues affect the majority of HubSpot CMS websites that have not been audited by an external SEO specialist. Certified HubSpot integrators focus on CRM and inbound marketing, not on technical SEO. A targeted audit identifies which problems apply to your site and prioritizes the fixes.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Auto-generated URL parameters (?hsid=, ?hstc=)',
        'Duplicate content, crawl budget dilution across hundreds of URL variants',
        'Canonical tag enforcement via custom HubL module, exclusion rules in robots.txt, URL parameter configuration in Google Search Console',
      ],
      [
        'Non-granular meta tags on HubDB and dynamic pages',
        'Identical title and description across all listing pages, loss of relevance',
        'Dynamic meta tag injection via HubL (hubl_tag) and HubDB tokens to generate unique titles per entry',
      ],
      [
        'Schema.org limited to native types (Organization, BreadcrumbList)',
        'No FAQ, Article, or Product rich snippets, reduced visibility for LLMs',
        'Custom JSON-LD injection in the <head> via dedicated HubL module: FAQPage, Article, Service, HowTo depending on page type',
      ],
      [
        'Rigid topic clusters in the Content Strategy Tool',
        'Fixed semantic architecture, impossible to create multi-level content silos',
        'Complement native topic clusters with manual contextual internal linking between articles and pillar pages',
      ],
      [
        'No access to .htaccess or server-side code',
        'Redirects limited to simple 301s, no regex rules, no advanced HTTP headers',
        'HubSpot redirect manager for simple cases, frontal Cloudflare CDN for complex rules and security headers',
      ],
      [
        'Uncontrolled third-party scripts (tracking, chatbots, analytics)',
        'Degraded LCP, elevated TBT, loss of mobile rankings',
        'Script audit, deferred loading of non-critical scripts, removal of unused modules, Core Web Vitals monitoring',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for HubSpot CMS',
    subtitle: 'A structured 8-step approach to HubSpot CMS SEO, designed around the platform-specific constraints of a CRM-integrated content management system.',
    steps: [
      {
        title: 'HubSpot CMS technical audit',
        subtitle: 'Full analysis of your HubSpot portal: active modules, HubL templates, CDN configuration, Core Web Vitals, and URL parameters.',
        items: [
          'Inventory of active HubL modules and templates in use',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Crawl budget analysis: indexed pages vs pages generated by ?hsid and ?hstc parameters',
          'Verification of canonical tags, redirects, and robots.txt configuration',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your HubSpot site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\\\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Portal cleanup and rationalization',
        subtitle: 'Removal of unused modules, ghost pages, and URL parameters that pollute the Google index.',
        items: [
          'Deactivation of unused HubL modules that load unnecessary CSS/JS',
          'Noindex or removal of auto-generated pages (obsolete landing pages, test templates)',
          'Exclusion of parameterized URL variants from the XML sitemap',
          'Topic cluster consolidation: merge redundant clusters, fix broken internal links',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Speed improvement despite the constraints of a hosted platform with no server access.',
        items: [
          'Activation of native image compression and WebP conversion',
          'Third-party script audit: deferred loading of tracking scripts, removal of non-essential chatbots',
          'HubSpot CDN configuration and, if needed, frontal Cloudflare layer',
          'HubL template weight reduction: removal of inherited modules and DOM simplification',
        ],
      },
      {
        title: 'Advanced SEO configuration',
        subtitle: 'SEO setup beyond HubSpot native settings, via custom HubL modules and manual injections.',
        items: [
          'Custom JSON-LD injection (FAQPage, Article, Service, HowTo) in the <head> via HubL module',
          'Dynamic meta tags for HubDB pages (unique title and description per entry)',
          'Forced canonical tags on all pages with URL parameters',
          'Google Search Console integration and URL parameter configuration',
        ],
      },
      {
        title: 'HubSpot content strategy',
        subtitle: 'Leveraging the Content Strategy Tool and native topic clusters, complemented by contextual internal linking for SEO and AI citability.',
        items: [
          'Pillar pages plus satellite articles organized in topic clusters via the native HubSpot tool',
          'Additional contextual internal linking between articles, beyond automatic cluster links',
          'Self-contained factual passages written for LLM extraction',
          'Native A/B testing on titles and meta descriptions to maximize organic CTR',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through backlinks from specialized B2B media and brand mentions extractable by LLMs.',
        items: [
          'Backlinks from SaaS blogs, B2B media outlets, and solution comparators',
          'Guest publications on high-authority sites in your industry',
          'Brand mentions in CRM and marketing automation comparison articles',
          'Each external mention strengthens Domain Rating and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting that crosses SEO data (rankings, traffic) with HubSpot CRM data (leads, conversions) to drive ROI.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic segmented by topic cluster and pillar page',
          'GEO Score: visibility evolution across AI engines',
          'Cross-referencing with HubSpot CRM data (MQL, SQL, organic conversion rate)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by your marketing team, your HubSpot integrator, or your management.',
    items: [
      {
        id: 1,
        title: 'HubSpot CMS technical audit report',
        description: 'Full diagnostic of your HubSpot portal: active HubL modules, problematic URL parameters (?hsid, ?hstc), Core Web Vitals, crawl budget, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'HubSpot schema.org kit',
        description: 'Custom JSON-LD modules developed in HubL to inject FAQPage, Article, Service, and HowTo in the <head> of your pages. Installation guide for your team or your HubSpot integrator.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pillar pages, articles, and FAQ optimized for SEO and GEO. Direct integration into HubSpot CMS via the native editor, with topic cluster configuration and internal linking setup.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from SaaS blogs, B2B comparators, and specialized media in your sector. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic segmented by topic cluster, GEO Score evolution, and cross-referencing with HubSpot CRM data (leads, organic conversions).',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your HubSpot site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which SEO agency for a HubSpot CMS website?", the LLM compiles web sources to formulate its answer. It points to the HubSpot Solutions Marketplace and lists selection criteria, without citing any SEO agency by name. If your site does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a HubSpot CMS website?", the LLM does not cite any specialized SEO agency. It references the HubSpot Solutions Marketplace and directories such as Clutch and Semrush Agency Partners. Named agencies (SmartBug Media, Ironpaper, Sixth City Marketing) are presented as HubSpot integrators or inbound marketing specialists, not as technical SEO experts. The agency that demonstrates platform-specific SEO expertise (HubL, schema.org, crawl budget) has the potential to be cited.</p><h4>Technical queries</h4><p>On "how to improve SEO on a HubSpot CMS website", the LLM generates a guide of 8 to 12 points centered on native tools: SEO Recommendations, Content Strategy Tool, topic clusters, image compression, global CDN. It does not mention customization limitations (proprietary HubL, no server access). Preferred sources are wearetg.com (TG), seo.com, INSIDEA, and SmithDigital.</p><h4>CMS comparison queries</h4><p>On "HubSpot CMS vs WordPress for SEO", the LLM produces a comparison table with 6 to 8 criteria. HubSpot is presented as superior for native SEO tools and built-in performance, WordPress for technical flexibility and cost. Content Hub Professional pricing (approximately $500/month) is consistently cited as a barrier. Sites publishing structured comparisons with measurable criteria are favored as extraction sources.</p><h4>Problem queries</h4><p>On "common HubSpot CMS SEO problems", the LLM identifies 6 to 8 platform-specific issues: URL parameters (?hsid=), non-granular metadata on HubDB pages, limited schema.org, rigid topic clusters, no server access. Sources include Diagram (wearediagram.com), INSIDEA, OnTarget Agency, and the HubSpot Community Forum. Content structured as problem-solution tables has the highest chance of being extracted.</p>',
    structuredData:
      'For a HubSpot CMS website, the recommended schema.org types are: <code>WebSite</code> (primary type), <code>Organization</code> (native in HubSpot), <code>BreadcrumbList</code> (native), <code>FAQPage</code> (custom injection via HubL module), <code>Article</code> or <code>BlogPosting</code> (custom injection for the blog), <code>Service</code> (custom injection for service pages). HubSpot natively handles only Organization and BreadcrumbList. All other types require a dedicated HubL module to inject JSON-LD into the <code>&lt;head&gt;</code>.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your HubSpot site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content, quality of topic clusters), Legitimacy and Citability (external trust signals, backlinks, mentions in B2B media), and Factual Density (richness of schema.org markup beyond native HubSpot types, structured data, and named entities in pages).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: HubSpot CMS SEO',
    items: [
      {
        question: 'How much does HubSpot CMS SEO cost?',
        answer:
          'The SEO budget for a HubSpot CMS site depends on the number of pages, topic cluster complexity, and the level of custom technical work required (HubL modules, schema.org injection). You must also factor in the platform cost itself: Content Hub Professional starts at approximately $500/month. At Rankwell, HubSpot SEO engagements start from $2,000/month for portals with fewer than 100 pages, and range from $4,000 to $6,000/month for complex portals with HubDB and smart content.',
      },
      {
        question: 'How long does it take to see SEO results on HubSpot CMS?',
        answer:
          'Technical fixes (canonical tags, URL parameter cleanup, crawl budget rationalization) produce measurable effects within the first month. Ranking improvements on competitive keywords via topic clusters require 4 to 8 months of sustained work. HubSpot\\\'s native performance (global CDN, automatic caching) accelerates Core Web Vitals gains compared to self-hosted CMS platforms. Rankwell provides a forecast timeline based on the initial audit of your portal.',
      },
      {
        question: 'Can you add advanced schema.org markup to HubSpot CMS?',
        answer:
          'HubSpot CMS natively supports only Organization and BreadcrumbList types. To add FAQPage, Article, Service, or HowTo, a dedicated HubL module must be developed to inject JSON-LD into the <head> tag of each template. Rankwell creates these custom modules and provides an installation guide for your team or your HubSpot integrator. This advanced markup activates Google rich snippets and improves citability by AI engines.',
      },
      {
        question: 'How do I fix slow page speed on my HubSpot CMS site?',
        answer:
          'Slow loading on a HubSpot CMS site rarely comes from the hosting itself (the global CDN is performant) but from third-party scripts: tracking pixels, chatbots, analytics modules, and form widgets. Rankwell begins with a performance audit that identifies the scripts responsible for elevated TBT, defers non-critical scripts, removes unused HubL modules, and simplifies template DOM structure. Images are converted to WebP via HubSpot native compression.',
      },
      {
        question: 'How can I get my HubSpot site cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your HubSpot site, three conditions are necessary: rich factual content organized in topic clusters (HubSpot\\\'s native structure facilitates this), complete schema.org markup beyond native types (FAQPage, Article, Service via custom HubL module), and brand mentions on third-party B2B sources. The Rankwell GEO Score measures these three dimensions and identifies the priority levers to increase your site\\\'s citability.',
      },
      {
        question: 'Is HubSpot CMS a good choice for SEO in 2026?',
        answer:
          'HubSpot CMS excels for B2B marketing teams that want a CMS integrated with the CRM and native SEO tools (topic clusters, A/B testing, SEO Recommendations, AEO Grader). It is less suited for e-commerce sites, editorial media, or projects requiring advanced technical control over code (custom schema.org, regex redirects, SSR). The cost (approximately $500/month for Content Hub Professional) and vendor lock-in (HubL cannot be exported) are two factors to evaluate. Rankwell adapts its SEO and GEO methodology to the strengths and limitations of HubSpot CMS.',
      },
      {
        question: 'Why choose Rankwell for HubSpot CMS SEO?',
        answer:
          'Rankwell combines HubSpot CMS technical SEO expertise (custom HubL modules, advanced schema.org, URL parameter cleanup, topic cluster optimization) with the GEO dimension that certified HubSpot integrators have not yet integrated. Our 8-step methodology addresses the challenges specific to HubSpot CMS: proprietary vendor lock-in, limited native markup, duplicate content from URL parameters. The proprietary GEO Score measures your site\\\'s visibility across AI engines.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your HubSpot CMS site?',
    description:
      'Request a free GEO & SEO audit of your HubSpot CMS site. Our SEO & GEO consultants analyze your topic clusters, HubL modules, schema.org markup, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Startups', href: '/en/geo-seo-agency/sector/startup' },
        { label: 'SEO for Industry', href: '/en/geo-seo-agency/sector/industrie' },
        { label: 'SEO for SMBs', href: '/en/geo-seo-agency/sector/pme' },
      ],
      projets: [
        { label: 'Corporate Website SEO', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign SEO', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'Web App & SaaS SEO', href: '/en/geo-seo-agency/project/application-web' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Salesforce SEO', href: '/en/geo-seo-agency/cms/salesforce' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'Content Marketing SEO', href: '/en/glossary/content-marketing-seo' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
        { label: 'E-E-A-T', href: '/en/glossary/e-e-a-t' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Salesforce', href: '/en/geo-seo-agency/cms/salesforce' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'Contentful', href: '/en/geo-seo-agency/cms/contentful' },
      { label: 'Odoo', href: '/en/geo-seo-agency/cms/odoo' },
    ],
  },
};

export default data;
