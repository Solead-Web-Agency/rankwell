/**
 * DATA: CMS Jimdo Page (EN)
 * Route: /en/geo-seo-agency/cms/jimdo
 *
 * English version adapted for the international Jimdo market.
 * German SaaS (Hamburg), targets small businesses and tradespeople.
 * Jimdo Dolphin (AI-driven) + Jimdo Creator (classic, no longer updated).
 * Very basic SEO: meta title/description, image alt, no 301 redirects,
 * no native schema.org, minimalist blog.
 * Content based on LLM auto-test (March 2026) and anglophone Jimdo ecosystem.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'jimdo',
    title: 'Jimdo SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO and AI visibility (GEO) for Jimdo websites. Technical audit, Dolphin workarounds, performance, local SEO: a methodology built for small businesses on Jimdo.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'CMS & Platforms', href: '/en/geo-seo-agency/sectors' },
      { label: 'Jimdo' },
    ],
    title: 'Jimdo SEO & GEO: Rankings and AI Visibility',
    subtitle:
      'A single global meta title across all pages in Jimdo Dolphin, no 301 redirects, zero native schema.org markup: ranking a Jimdo site hits walls that generic website builder guides never address. Our experts combine technical SEO adapted to SaaS constraints and GEO to rank your site on Google and get your brand cited by AI engines.',
    ctaText: 'Request a Jimdo SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different on Jimdo (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different on Jimdo',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Jimdo powers close to 4% of the website builder market</strong>, with 43% of users being small businesses under 50 employees. The platform handles SSL, generates an XML sitemap, and ensures mobile-responsive layouts. For small businesses seeking a fast online presence paired with a dedicated <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a>, Jimdo provides a clean baseline without server maintenance.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Jimdo Dolphin does not allow per-page meta title customization</strong>: a single global title applies site-wide. No 301 redirects in Dolphin, no native schema.org, no blog categories or tags. Unlike Wix or WordPress, Jimdo has zero third-party SEO apps or extensions.',
    geoAngle:
      'According to Rankwell, Jimdo sites face a structural AI citability disadvantage: the absence of schema.org deprives LLMs of the semantic layer needed to extract facts. Compensating requires reinforced off-site signals (Google Business Profile, directories, brand mentions) and factual density in on-site content.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, technical SEO in 2026 carries a dual challenge: ensuring site accessibility for traditional indexing crawlers (Googlebot, Bingbot) and for AI engine crawlers (GPTBot, ClaudeBot, PerplexityBot), because these two families of crawlers behave differently and their robots.txt directives must be managed separately.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'Learn more about technical SEO',
  },

  // ============================================
  // BLOC 3: Common technical problems (TableauService)
  // ============================================
  technicalTable: {
    title: 'Common Jimdo SEO problems and solutions',
    interpretation:
      'These problems affect the majority of unoptimized Jimdo sites. The SaaS platform imposes specific constraints that require targeted workarounds. A technical audit identifies which issues apply to your site and prioritizes the fixes that are feasible within your plan.',
    columns: ['Problem', 'SEO Impact', 'Rankwell Solution'],
    rows: [
      [
        'Global meta title in Jimdo Dolphin (single title for all pages)',
        'Loss of per-keyword relevance, every page sends the same ranking signal',
        'Migration to Creator (if viable) for per-page control, or compensation via optimized H1 tags and keyword-targeted body content on each page',
      ],
      [
        'No native 301 redirects (Dolphin) or restricted to premium plans (Creator)',
        'Lost link equity during restructurings, uncorrected 404 errors',
        'DNS-level redirect via the domain registrar (CNAME + 301 on the hosting side), or migration to Creator Business plan',
      ],
      [
        'No native schema.org markup',
        'No rich snippets (FAQ, reviews, product), semantic invisibility to LLMs',
        'JSON-LD injection via Creator HTML widget, or off-site structured signals (Google Business Profile with structured attributes)',
      ],
      [
        'Minimalist blog without categories, tags, or customizable URLs',
        'Impossible to build a semantic silo, no thematic internal linking',
        'Blog structuring via H2/H3 headings within each post, manual internal linking between posts and pages with descriptive anchors',
      ],
      [
        'No access to third-party SEO apps or extensions',
        'No integrated keyword analysis, on-page audit, or monitoring tools',
        'External Google Search Console + Google Analytics setup, professional SEO audit by Rankwell using industry tools (Ahrefs, Screaming Frog)',
      ],
      [
        'Uncompressed images by default and no native lazy loading on Creator',
        'Degraded load times, elevated LCP on mobile',
        'Manual compression before upload (TinyPNG, Squoosh), exact image sizing, WebP format when supported',
      ],
    ],
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for Jimdo',
    subtitle: 'A structured 8-step approach to Jimdo SEO, designed around the specific limitations of this SaaS website builder.',
    steps: [
      {
        title: 'Jimdo technical audit',
        subtitle: 'Full analysis of your Jimdo site: editor version (Dolphin or Creator), active plan, existing SEO configuration, and Core Web Vitals.',
        items: [
          'Identification of the Jimdo version (Dolphin or Creator) and active plan (Free, Start, Grow, Business)',
          'Core Web Vitals measurement (LCP, FID, CLS) on mobile and desktop',
          'Verification of existing meta titles and meta descriptions (global or per-page)',
          'Inventory of pages indexed in Google Search Console vs pages that are actually useful',
        ],
      },
      {
        title: 'GEO audit: AI citability and presence',
        subtitle: 'Evaluation of your Jimdo site visibility across AI engines (ChatGPT, Perplexity, Gemini) using Rankwell\'s proprietary GEO audit.',
        items: [
          'Testing 20 to 30 queries related to your business on LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors (including those on Wix or WordPress)',
          'Identification of content cited vs ignored by AI engines',
        ],
      },
      {
        title: 'Platform limitations and workaround mapping',
        subtitle: 'Jimdo imposes specific constraints. This step identifies what is achievable natively and what requires external solutions.',
        items: [
          'Identification of features blocked by the current plan (301 redirects, per-page meta, HTML widget)',
          'Evaluation of the potential gain from upgrading plans (Grow to Business for 301 redirects)',
          'List of workarounds via external tools (GSC, GTM, DNS-level redirects)',
          'Migration recommendation to a more flexible CMS if the SEO potential justifies the switch',
        ],
      },
      {
        title: 'Performance optimization',
        subtitle: 'Page speed improvements within the constraints of the Jimdo editor.',
        items: [
          'Compression and resizing of all images before upload',
          'Reduction of sections per page to lighten the DOM',
          'Verification of custom font weight and embedded video impact',
          'Before/after performance testing via PageSpeed Insights and WebPageTest',
        ],
      },
      {
        title: 'On-page SEO optimization',
        subtitle: 'Maximum configuration of accessible SEO settings in Jimdo, complemented by optimized content.',
        items: [
          'Unique meta title and meta description for each page (Creator) or H1-based optimization (Dolphin)',
          'Descriptive alt text on every image containing the target keyword',
          'Hierarchical H1 > H2 > H3 heading structure on each page',
          'XML sitemap submission to Google Search Console',
        ],
      },
      {
        title: 'Content strategy and local SEO',
        subtitle: 'Content creation adapted to the Jimdo format and local SEO reinforcement for small businesses and tradespeople.',
        items: [
          'Detailed service pages with factual data (pricing, service areas, specializations)',
          'Structured blog posts (H2/H3 headings, lists, short factual paragraphs)',
          'Google Business Profile optimization (categories, attributes, photos, FAQ)',
          'Listings in industry and local directories to reinforce NAP citations',
        ],
      },
      {
        title: 'Authority and link building',
        subtitle: 'Domain authority development through external sources, the primary lever when on-site options are limited.',
        items: [
          'Backlinks from professional directories and local chambers of commerce',
          'Brand mentions in local guides and comparison articles',
          'Verified client reviews on Google Business Profile and industry platforms',
          'Each external mention compensates for the absence of on-site signals (schema.org, 301 redirects)',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting covering Google rankings, organic traffic, GEO Score, and evaluation of the Jimdo technical ceiling.',
        items: [
          'Google rankings by keyword and by page',
          'Organic traffic measured via Google Analytics (connected externally)',
          'GEO Score: visibility across AI engines (ChatGPT, Perplexity, Gemini)',
          'Quarterly evaluation: does the SEO potential justify migration to WordPress or Webflow?',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool usable by you or your web provider, adapted to Jimdo constraints.',
    items: [
      {
        id: 1,
        title: 'Jimdo technical audit report',
        description: 'Full diagnostic of your Jimdo site: version (Dolphin or Creator), active plan, Core Web Vitals, indexed pages, identified technical limitations, and workarounds prioritized by impact.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your site and brand in ChatGPT, Perplexity, and Gemini on your target queries. Competitive benchmark and detailed GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Jimdo on-page optimization guide',
        description: 'Step-by-step instructions for configuring meta titles, meta descriptions, alt text, and heading structure in the Jimdo editor (Dolphin and Creator). Screenshots and instructions adapted to your plan.',
      },
      {
        id: 4,
        title: 'Content strategy and local SEO plan',
        description: 'Editorial plan adapted to the Jimdo blog (short articles, local FAQ pages, service pages), Google Business Profile optimization, and a list of industry directories for local SEO.',
      },
      {
        id: 5,
        title: 'Link building management and tracking',
        description: 'Backlink acquisition from professional directories, chambers of commerce, and local media. Ongoing tracking of brand mentions and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google rankings tracked by page and keyword, organic traffic (via externally connected Google Analytics), GEO Score evolution, Jimdo technical performance, and migration recommendation if the ceiling is reached.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI visibility: your Jimdo site in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which tradesperson should I choose for this service in my area?", the LLM compiles web sources to formulate its answer. If your Jimdo site does not appear in any cited source, you are invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "which SEO agency for a Jimdo site?", the LLM does not name any agency. It begins by flagging that Jimdo is a SaaS website builder with limited SEO capabilities and frequently suggests migrating to WordPress or Webflow for ambitious projects. It provides 4 to 5 generic selection criteria (SaaS platform experience, understanding of Jimdo limitations) and references Sortlist or freelance platforms. The agency that demonstrates concrete expertise with Jimdo-specific limitations has the potential to be cited first.</p><h4>Technical queries</h4><p>On "how to improve SEO on a Jimdo website", the LLM generates a guide covering 8 to 10 points: meta title/description, images, H1/H2/H3 structure, blog content, and Google Search Console. Preferred sources are the Jimdo Help Center, tooltester.com, and websitebuilderexpert.com. No agency is mentioned.</p><h4>CMS comparison queries</h4><p>On "Jimdo vs Wix for SEO", the LLM positions Jimdo behind Wix: Wix offers an SEO Wizard, 301 redirects, third-party apps, and an advanced blog that Jimdo does not provide. Jimdo is presented as suitable for simple personal sites only. Content that publishes factual comparisons with measurable criteria is favored as an extraction source.</p><h4>Technical problem queries</h4><p>On "common Jimdo SEO problems", the LLM identifies 6 to 8 specific limitations: global meta title in Dolphin, no 301 redirects, no schema.org, minimalist blog, no SEO extensions, limited URL structure. Content that lists these limitations with concrete workarounds is extracted preferentially.</p>',
    structuredData:
      'Jimdo offers no native schema.org markup in either Dolphin or Creator. For a Jimdo site, the recommended types would be <code>LocalBusiness</code> (small businesses and tradespeople), <code>WebSite</code> (primary type), and <code>BreadcrumbList</code> (navigation). Without native support, the only option is JSON-LD injection via the Creator HTML widget (paid plans), or reinforcing structured signals through Google Business Profile (categories, attributes, hours, FAQ). LLMs extract these external signals as a complement to on-site content.',
    geoScore:
      'The <strong>Rankwell GEO Score</strong> measures the citability of your Jimdo site by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content published in the Jimdo editor), Legitimacy and Citability (external trust signals: Google reviews, backlinks, directory listings), and Factual Density (richness of factual text, compensated by structured data from Google Business Profile in the absence of on-site schema.org).',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: Jimdo SEO',
    items: [
      {
        question: 'How much does Jimdo SEO cost?',
        answer:
          'The SEO budget for a Jimdo site depends on the active plan (Free, Start, Grow, Business) and the number of pages. At Rankwell, Jimdo SEO engagements start from $1,000/month for a small business brochure site. This budget covers the technical audit, on-page optimization within the Jimdo editor limitations, content strategy adapted to the minimalist blog, local SEO (Google Business Profile, directories), and GEO monitoring. If the SEO potential justifies migration to WordPress or Webflow, Rankwell evaluates the cost and return on investment before recommending the switch.',
      },
      {
        question: 'How long does it take to see SEO results on Jimdo?',
        answer:
          'Initial results appear within 2 to 4 months for on-page optimizations (meta title, H1 structure, images) and local SEO (Google Business Profile). Ranking improvements on competitive keywords take 4 to 8 months. On Jimdo, the technical ceiling is reached faster than on WordPress or Webflow: the absence of 301 redirects, schema.org, and SEO extensions limits progress beyond a certain threshold. Rankwell provides a forecast timeline based on the initial audit and regularly evaluates whether the platform remains suitable.',
      },
      {
        question: 'Jimdo Dolphin or Jimdo Creator: which is better for SEO?',
        answer:
          'Jimdo Creator offers more SEO control than Dolphin: per-page meta title and meta description, editable alt text, an HTML widget for injecting code (schema.org, Google Tag Manager), and 301 redirects on Business and Shop plans. Dolphin automates basic SEO (sitemaps, SSL) but enforces a global title that cannot be customized per page. Note: Creator has not been actively updated since 2024, and new users are directed to Dolphin. Rankwell adapts the strategy to the version in use.',
      },
      {
        question: 'How do I improve page speed on my Jimdo site?',
        answer:
          'Jimdo site speed depends primarily on image weight, the number of sections per page, and embedded videos. Jimdo offers no configurable cache system, no customizable CDN, and no native lazy loading in Creator. Rankwell intervenes before upload: image compression (TinyPNG, Squoosh), exact resizing, limiting sections per page, and replacing embedded videos with links or clickable thumbnails. These actions improve the LCP measurable via PageSpeed Insights.',
      },
      {
        question: 'How can I get my Jimdo site cited by ChatGPT and Perplexity?',
        answer:
          'The absence of native schema.org on Jimdo complicates citability by AI engines. Three levers are prioritized to compensate: publishing content rich in verifiable factual data (figures, pricing, service areas, specializations), multiplying external signals (Google reviews, professional directory listings, local press articles), and optimizing the Google Business Profile which serves as a structured data source for LLMs. The Rankwell GEO Score measures these dimensions and identifies the priority levers for your Jimdo site.',
      },
      {
        question: 'Is Jimdo still a good choice for SEO in 2026?',
        answer:
          'Jimdo remains suitable for small businesses and tradespeople who need a quick online presence without competing on highly competitive keywords. Its SEO limitations (no 301 redirects, no schema.org, basic blog, global meta title on Dolphin) place it behind Wix, Squarespace, and WordPress in terms of search engine optimization. For local proximity SEO, Jimdo can suffice if the off-site work (Google Business Profile, directories, reviews) is solid. Rankwell evaluates your situation and recommends Jimdo, migration, or off-site reinforcement based on the identified potential.',
      },
      {
        question: 'Why choose Rankwell for Jimdo SEO?',
        answer:
          'Rankwell understands the technical limitations of Jimdo (global meta title in Dolphin, no 301 redirects, no schema.org, blog without categories) and knows how to work within a constrained framework. Our 8-step methodology includes workarounds specific to Jimdo (JSON-LD injection via HTML widget, DNS-level redirects, reinforced local SEO). We add the GEO dimension that 93% of SEO agencies have not yet integrated. The proprietary GEO Score measures your visibility across AI engines, an angle your competitors on Jimdo are not working on.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to optimize your Jimdo site?',
    description:
      'Request a free GEO & SEO audit of your Jimdo site. Our SEO & GEO consultants analyze the limitations of your plan, your content, your local SEO, and your visibility across AI engines, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Artisans', href: '/en/geo-seo-agency/sector/artisan' },
        { label: 'SEO for Restaurants', href: '/en/geo-seo-agency/sector/restaurant' },
        { label: 'SEO for Hair Salons', href: '/en/geo-seo-agency/sector/coiffeur' },
      ],
      projets: [
        { label: 'SEO for Business Websites', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'New Website SEO', href: '/en/geo-seo-agency/project/creation-site' },
        { label: 'SEO Migration', href: '/en/geo-seo-agency/project/migration' },
      ],
      cms: [
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
        { label: 'Weebly SEO', href: '/en/geo-seo-agency/cms/weebly' },
      ],
      glossaire: [
        { label: 'Technical SEO', href: '/en/glossary/seo-technique' },
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
        { label: 'Citability', href: '/en/glossary/citabilite' },
      ],
    },
  },

  // Related CMS links
  relatedSectors: {
    title: 'SEO & GEO by CMS and platform',
    items: [
      { label: 'Wix', href: '/en/geo-seo-agency/cms/wix' },
      { label: 'Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
      { label: 'Weebly', href: '/en/geo-seo-agency/cms/weebly' },
      { label: 'Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      { label: 'WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
      { label: 'Framer', href: '/en/geo-seo-agency/cms/framer' },
    ],
  },
};

export default data;
