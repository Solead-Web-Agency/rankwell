/**
 * DATA: Marketplace Project Page (EN)
 * Route: /en/geo-seo-agency/project/marketplace
 *
 * Adapted for US/UK/UAE marketplace markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'marketplace',
    title: 'Marketplace SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO rankings and AI engine visibility (GEO) for multi-vendor marketplaces. Crawl budget, AggregateOffer schema, vendor content governance, full methodology.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Marketplace' },
    ],
    title: 'SEO & GEO for Marketplaces: Full Methodology',
    subtitle:
      'Multi-vendor content, crawl budget on millions of pages, cross-seller duplicates, dual buyer/seller audience: SEO for a marketplace raises volume and governance challenges that generalist agencies cannot address. Our experts combine SEO and GEO to rank your pages on Google and make your platform citable by AI engines.',
    ctaText: 'Request a marketplace SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a marketplace',
    technicalContext:
      'A marketplace generates <strong class="text-secondary dark:text-accent">500,000 to 20 million indexable URLs</strong>. When the same product is listed by 15 sellers with near-identical descriptions, Google indexes 15 competing pages instead of one canonical listing. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> tackles cross-vendor duplication and crawl budget waste at scale.',
    marketData:
      'Niche marketplaces outside the top 3 generalists depend on SEO for <strong class="text-secondary dark:text-accent">40% to 55% of their traffic</strong>. Organic click share on product queries has dropped 11 to 23 points year-over-year as AI Overviews expand. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a> is essential to defend this traffic.',
    geoAngle:
      'According to Rankwell, programmatic SEO works only when each generated page delivers distinct informational value. AI engines penalize programmatic content that amounts to superficial template variations.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, programmatic SEO works only when each generated page delivers distinct informational value. AI engines penalize programmatic content that amounts to superficial variations of the same template.',
    glossarySlug: 'seo-programmatique',
    glossaryLabel: 'Learn more about programmatic SEO',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your marketplace',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to multi-vendor marketplace platforms.',
    steps: [
      {
        title: 'Marketplace technical audit',
        subtitle: 'Full analysis of real crawl budget allocation via server logs, identification of cross-vendor duplicate pages and uncontrolled combinatorial filters.',
        items: [
          'Strategic URL ratio vs. wasted crawl on a catalog of 100,000+ pages',
          'Detection of duplicate product listings across vendors (same EAN, identical descriptions)',
          'Mapping of mega-menus and combinatorial faceted filters consuming crawl budget',
          'Audit of 404 pages triggered by out-of-stock items and vendor shop closures',
        ],
      },
      {
        title: 'GEO audit: platform citability and AI presence',
        subtitle: 'Assessment of your marketplace visibility in AI engines (ChatGPT, Perplexity, Gemini) against dominant generalist platforms.',
        items: [
          'Testing 20 to 30 purchase-intent queries across LLMs to verify if your platform is cited',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against Amazon, eBay, Etsy, and your direct niche competitors',
          'Identification of product categories cited vs. ignored by AI engines',
        ],
      },
      {
        title: 'Multi-vendor architecture and catalog governance',
        subtitle: 'Restructuring site hierarchy to centralize SEO authority on canonical product pages and eliminate cross-vendor duplication.',
        items: [
          'Single canonical product page per EAN, aggregating offers from all sellers',
          'Thematic siloing: product universes, categories, subcategories, and product pages',
          'Selective indexation of faceted filters: noindex on combinations with no search volume',
          'Conditional indexation of vendor shop pages based on content quality and traffic volume',
        ],
      },
      {
        title: 'Product page optimization for Google and LLMs',
        subtitle: 'Enforcing vendor content quality through enriched templates and schema.org markup tailored to the multi-offer model.',
        items: [
          'Product listing templates with mandatory fields: technical specs, materials, certifications',
          'Product and AggregateOffer schema to aggregate min/max prices across multiple sellers',
          'Automatic enrichment via customer reviews and Q&A sections',
          'Self-contained factual passages designed for AI engine extraction',
        ],
      },
      {
        title: 'Editorial content strategy for marketplaces',
        subtitle: 'Creating informational content to capture top-of-funnel traffic and build thematic authority for the platform.',
        items: [
          'Buying guides targeting "how to choose a [product]" queries',
          'Cross-vendor comparisons with objective criteria (price, shipping time, rating)',
          'Trend and curated selection pages for seasonal informational queries',
          'Seller-facing content (guides, resources) to capture the B2B side of the dual audience',
        ],
      },
      {
        title: 'Link building and platform authority',
        subtitle: 'Building domain authority through backlinks from specialized publications and proprietary marketplace data.',
        items: [
          'Backlinks from independent comparison sites, e-commerce media, and niche blogs',
          'Publishing proprietary data: pricing trends, sales volumes by category',
          'Presence on Trustpilot, G2, and marketplace comparison platforms',
          'Press outreach around new category launches or featured vendor partnerships',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting with positions by category, segmented organic traffic by page type, and GEO Score evolution.',
        items: [
          'Google positions by category, page type (product, vendor shop, filter), and strategic seller',
          'Organic traffic segmented by audience: buyers vs. potential sellers',
          'GEO Score: AI engine visibility on purchase-intent and comparison queries',
          'Iterative reallocation toward categories with the highest conversion rates',
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
        title: 'Technical audit report',
        description: 'Crawl map of your multi-vendor catalog, crawl budget diagnostic, analysis of cross-vendor duplicate listings and combinatorial filters, with corrective actions ranked by priority.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your platform and key categories on ChatGPT, Perplexity, and Gemini, with benchmark against market leaders (Amazon, Etsy) and detailed GEO Score breakdown.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Product, AggregateOffer, Organization, and BreadcrumbList markup adapted to the multi-vendor model, with CMS-specific integration guides (Mirakl, Sharetribe, Magento Marketplace).',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of buying guides, cross-vendor comparisons, and category pages, with direct CMS integration. Optimized product listing and vendor page templates created if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from marketplace comparison platforms, e-commerce media, and niche blogs in your product vertical. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of positions by category and page type, segmented organic traffic for buyers and sellers, revenue generated through SEO, and GEO Score evolution across AI engines.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your marketplace in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a shopper asks ChatGPT "what is the best marketplace for handmade furniture?", the LLM compiles web sources to formulate its answer. Generalist platforms (Amazon, Etsy) are systematically cited. If your niche marketplace does not appear in any cited source, it is invisible in this new discovery channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for marketplace websites", the LLM does not name any specific agency. It provides evaluation criteria (multi-vendor platform experience, marketplace CMS expertise, documented case studies, crawl budget management at scale) and directs toward directories like Clutch or G2. An agency that publishes marketplace-specific methodologies (cross-vendor canonical strategies, AggregateOffer schema, vendor content governance) has the structural profile to be cited as a reference.</p><h4>Technical queries</h4><p>On "how to improve SEO for a marketplace website", the LLM generates a structured guide of 7 to 10 points covering product listing optimization, schema markup, canonical URL management, faceted navigation, and vendor content guidelines. No agency is cited. Content that addresses marketplace-specific challenges (as opposed to generic e-commerce advice) is underrepresented in current sources, creating an opportunity for specialized content.</p><h4>Comparison queries</h4><p>On "marketplace vs ecommerce SEO differences", the LLM produces a structured comparison on 5 to 7 criteria: content control, duplicate risk, crawl budget complexity, keyword strategy at scale, and vendor management overhead. Sites publishing comparisons with quantified data (crawl waste percentages, duplication rates before and after remediation) would be favored as extraction sources.</p><h4>Duplicate content queries</h4><p>On "how to manage duplicate content on a multi-vendor marketplace", the LLM delivers precise technical solutions: canonical tags per SKU, vendor content guidelines with originality requirements, user-generated content enrichment, and automated duplicate detection. Content with implementation benchmarks (e.g., "reducing duplication rate from 40% to under 5%") and CMS-specific guidance is prioritized for citation.</p>',
    structuredData:
      '<p>For a marketplace, the recommended schema.org types are: <code>Product</code> and <code>AggregateOffer</code> (on each multi-vendor product page, aggregating min/max prices and offer count), <code>Organization</code> (platform page and vendor shop pages), <code>ItemList</code> (category pages and search results), <code>BreadcrumbList</code> (navigation). <code>AggregateOffer</code> markup is marketplace-specific: it enables Google to display multi-vendor price ranges in rich snippets and gives LLMs structured comparison data to extract.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your marketplace\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (depth of editorial content, buying guides, and curated selections beyond basic product listings), Legitimacy and Citability (press mentions, backlinks from comparison platforms, Trustpilot reviews), and Factual Density (schema.org markup richness for multi-vendor data, market statistics, named entities in category pages).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for marketplaces',
    items: [
      {
        question: 'How much does SEO cost for a marketplace?',
        answer:
          'Marketplace SEO budgets depend on the number of active vendors, catalog size, and platform technical complexity. At Rankwell, marketplace SEO engagements start from $3,000/month (or GBP 2,400/month) for platforms with fewer than 50,000 listings, and range from $8,000 to $15,000/month (GBP 6,500 to 12,000/month) for marketplaces exceeding 500,000 pages with multi-category requirements. This covers technical audit, vendor content governance, editorial content strategy, and GEO monitoring.',
      },
      {
        question: 'How long before SEO results appear on a marketplace?',
        answer:
          'Initial effects from technical cleanup (filter deindexation, cross-vendor canonicals) appear within 1 to 2 months in terms of indexed page ratios. Ranking gains on strategic categories require 4 to 8 months depending on competitive intensity. Vertical niche marketplaces (B2B industrial, artisan goods) progress faster than generalist platforms. Rankwell provides a realistic timeline based on the initial crawl budget audit and competitive benchmark.',
      },
      {
        question: 'How do you manage duplicate content across vendors on a marketplace?',
        answer:
          'On a marketplace, the same product (same EAN) can be listed by 10 to 50 vendors with near-identical descriptions. The technical solution involves creating a single canonical product page per SKU that aggregates all offers, enriching it with verified technical attributes and customer reviews, and applying canonical tags on individual vendor listings. Rankwell implements this model with AggregateOffer markup that displays multi-vendor price ranges in Google search results.',
      },
      {
        question: 'Which CMS is best for building an SEO-optimized marketplace?',
        answer:
          'The choice depends on the business model and vendor volume. Mirakl suits large B2C marketplaces with enterprise requirements. Sharetribe is designed for service and C2C marketplaces. Magento Marketplace handles complex B2B catalogs with multi-supplier management. WooCommerce with Dokan or WCFM allows launching on a reduced budget. Rankwell has SEO and GEO expertise across all four platforms and adapts the methodology to each solution.',
      },
      {
        question: 'How can my marketplace get cited by ChatGPT and Perplexity?',
        answer:
          'AI engines systematically recommend well-known marketplaces (Amazon, eBay, Etsy) because they have millions of web mentions. For a niche marketplace to be cited, three conditions must be met: editorial content beyond product listings (buying guides, curated selections, market trend data), mentions on third-party sources (specialized press, comparison platforms, blogs), and complete AggregateOffer schema.org markup. The Rankwell GEO Score measures these three dimensions and identifies which levers to prioritize.',
      },
      {
        question: 'What is the difference between SEO and GEO for a marketplace?',
        answer:
          'SEO positions your marketplace pages in Google search results (positions 1 through 10). GEO (Generative Engine Optimization) gets your platform cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews. For a marketplace, the GEO challenge is even more critical than for a standard e-commerce site: AI engines recommend generalist giants by default. Rankwell integrates both approaches so your niche platform gains visibility across both channels.',
      },
      {
        question: 'Why choose Rankwell for marketplace SEO?',
        answer:
          'Rankwell combines technical SEO expertise for multi-vendor platforms (crawl budget on 500,000+ page catalogs, cross-vendor canonicals, AggregateOffer markup) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 7-step methodology covers marketplace-specific challenges: vendor content governance, dual buyer/seller audience, and massive out-of-stock page management. The proprietary GEO Score measures your platform citability against sector leaders, a metric no other provider offers.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to make your marketplace visible?',
    description:
      'Request a free GEO & SEO audit of your marketplace. Our SEO & GEO consultants analyze your multi-vendor catalog, technical architecture, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Franchises', href: '/en/geo-seo-agency/sector/franchise' },
        { label: 'SEO for Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
        { label: 'SEO for Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
        { label: 'SEO for Opticians', href: '/en/geo-seo-agency/sector/opticien' },
      ],
      projets: [
        { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
        { label: 'Website Migration', href: '/en/geo-seo-agency/project/website-migration' },
      ],
      cms: [
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'PrestaShop SEO', href: '/en/geo-seo-agency/cms/prestashop' },
      ],
      glossaire: [
        { label: 'Programmatic SEO', href: '/en/glossary/seo-programmatique' },
        { label: 'Crawl Budget', href: '/en/glossary/crawl-budget' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our commerce and platform expertise',
    items: [
      { label: 'E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      { label: 'Franchises', href: '/en/geo-seo-agency/sector/franchise' },
      { label: 'Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
      { label: 'Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
      { label: 'Opticians', href: '/en/geo-seo-agency/sector/opticien' },
      { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      { label: 'Website Migration', href: '/en/geo-seo-agency/project/website-migration' },
    ],
  },
};

export default data;
