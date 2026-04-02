/**
 * DATA: E-commerce Project Page (EN)
 * Route: /en/geo-seo-agency/project/ecommerce
 *
 * Adapted for US/UK/international e-commerce markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'ecommerce',
    title: 'E-commerce SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO rankings and AI engine visibility (GEO) for e-commerce websites. Crawl budget, Product schema, CMS comparison, full methodology.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'E-commerce' },
    ],
    title: 'SEO & GEO for E-commerce Websites: Full Methodology',
    subtitle:
      'Crawl budget waste, duplicate product descriptions, faceted navigation, Product schema: SEO for an online store requires specialized expertise that generalist agencies lack. Our experts combine SEO and GEO to rank your pages on Google and get your products cited by AI engines.',
    ctaText: 'Request an e-commerce SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for an e-commerce website',
    technicalContext:
      'An e-commerce site generates <strong class="text-secondary dark:text-accent">10,000 to 500,000 indexable URLs</strong>. When 60% of crawl budget is wasted on faceted filters, strategic product pages never get crawled. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> tackles cannibalization, duplicate descriptions, and pagination at scale.',
    marketData:
      '<strong class="text-secondary dark:text-accent">43% of e-commerce traffic comes from organic search</strong>, with conversion rates of 1.5% to 3%, outperforming paid channels. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a> captures this high-intent traffic.',
    geoAngle:
      'According to Rankwell, LLMs have become a product recommendation channel. ChatGPT and Perplexity compare products, recommend brands, and cite product pages directly in their responses.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, e-commerce SEO in 2026 includes an unprecedented challenge: LLMs have become a full-fledged product recommendation channel. ChatGPT and Perplexity compare products, recommend brands, and cite product pages in their responses.',
    glossarySlug: 'seo-ecommerce',
    glossaryLabel: 'Learn more about e-commerce SEO',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your e-commerce website',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to e-commerce stores.',
    steps: [
      {
        title: 'E-commerce technical audit',
        subtitle: 'Full analysis of catalog architecture, faceted navigation handling, and real crawl budget allocation via server log analysis.',
        items: [
          'Category structure, pagination, and canonical tag review',
          'Faceted filter handling and hreflang setup for multi-language stores',
          'Orphan page detection and redirect chain resolution',
          'Crawl budget measurement: strategic URL ratio vs. wasted crawl on filter pages',
        ],
      },
      {
        title: 'GEO audit: product citability and AI presence',
        subtitle: 'Assessment of your product and brand visibility in AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews).',
        items: [
          'Testing 20 to 30 purchase-intent queries across LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitors',
          'Identification of which product pages get cited vs. ignored by AI engines',
        ],
      },
      {
        title: 'Catalog architecture and internal linking',
        subtitle: 'Restructuring site hierarchy to maximize PageRank distribution toward high-revenue pages.',
        items: [
          'Thematic siloing: product universes, subcategories, and product pages',
          'Filter treatment: selective indexation, noindex, or canonical consolidation',
          'Reducing wasted crawl budget by 40 to 60%',
          'Focusing indexation on revenue-generating pages',
        ],
      },
      {
        title: 'Product page optimization for Google and LLMs',
        subtitle: 'Writing unique product descriptions with verifiable factual data and complete schema.org markup.',
        items: [
          'Original product descriptions: dimensions, materials, certifications, and use cases',
          'Product, Offer, and AggregateRating schema on every product page',
          'Image optimization (descriptive alt text, WebP format, lazy loading)',
          'Self-contained citable passages designed for AI engine extraction',
        ],
      },
      {
        title: 'Editorial content strategy',
        subtitle: 'Creating informational content around your catalog: buying guides, comparisons, and thematic FAQ pages for SEO and GEO.',
        items: [
          'Buying guides targeting "how to choose a [product]" queries',
          'Comparison tables with quantified criteria and attributed recommendations',
          'Editorial calendar aligned with seasonal peaks (Black Friday, Prime Day, holiday season)',
          'Factual structured passages optimized for LLM extraction',
        ],
      },
      {
        title: 'Link building and e-commerce authority',
        subtitle: 'Building domain authority through backlinks from specialized publications and proprietary data assets.',
        items: [
          'Backlinks from niche expert blogs, industry magazines, and independent comparison sites',
          'Publishing proprietary benchmarks and original market statistics',
          'Presence on Trustpilot, G2, and relevant vertical comparison platforms',
          'Each external mention strengthens both PageRank and AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting with positions by category, segmented organic traffic, revenue attribution, and GEO Score evolution.',
        items: [
          'Google positions tracked by category and strategic product page',
          'Organic traffic segmented by page type (category, product, editorial)',
          'GEO Score: AI engine visibility on purchase-intent queries',
          'Iterative reallocation toward highest-ROI categories',
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
        description: 'Crawl map of your product catalog, crawl budget diagnostic, faceted navigation and pagination analysis, with corrective actions ranked by priority.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your product pages and brand on ChatGPT, Perplexity, and Gemini, with competitive benchmark and detailed GEO Score breakdown.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Product, Offer, AggregateRating, and BreadcrumbList markup adapted to your e-commerce CMS, with platform-specific integration guides (Shopify, WooCommerce, Magento).',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of buying guides, product comparisons, and FAQ content, with direct CMS integration via FTP. Category and product page templates created if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from e-commerce blogs, comparison sites, and industry media in your product vertical. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of positions by product category, segmented organic traffic, revenue generated through SEO, and GEO Score evolution across AI engines.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your e-commerce store in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a shopper asks ChatGPT "what is the best robot vacuum in 2026?", the LLM compiles web sources to formulate its answer. If your product pages are not among the sources cited, your products are absent from this new recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for e-commerce stores", the LLM does not name any specific agency. It provides a list of selection criteria (e-commerce vertical experience, CMS expertise, measurable case studies, pricing transparency) and directs toward directories like Clutch or G2. An agency that publishes detailed methodologies, CMS comparisons, and verifiable benchmarks has the structural profile to be cited as a reference.</p><h4>Technical queries</h4><p>On "how to improve SEO for an e-commerce website", the LLM generates a structured guide of 8 to 10 points covering URL structure, meta tags, images, and Product schema. No agency is cited. Content rich in quantified data and specific implementation steps is prioritized as a source.</p><h4>CMS comparison queries</h4><p>On "Shopify vs WooCommerce for SEO", the LLM produces a comparison table of 5 to 6 platforms with advantages and limitations for each. Sites that publish structured comparisons with measurable criteria (load time, URL flexibility, schema support) are favored as extraction sources.</p><h4>Data-driven queries</h4><p>On "average SEO conversion rate for e-commerce", the LLM provides ranges (1.5% to 3%) and cites market studies (Contentsquare, Wolfgang Digital). Agencies that publish their own benchmarks with transparent methodologies could be cited alongside these established sources.</p>',
    structuredData:
      '<p>For an e-commerce website, the recommended schema.org types are: <code>Product</code> and <code>Offer</code> (on every product page), <code>AggregateRating</code> (if customer reviews exist), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (buying guides), and <code>ItemList</code> (category pages). <code>Product</code> markup with price, availability, and reviews enables Google rich snippets and gives LLMs structured product data to extract for their recommendations.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your e-commerce website\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (breadth and depth of product and editorial content), Legitimacy and Citability (customer reviews, press mentions, backlinks from specialized sites), and Factual Density (schema.org markup richness, structured product data, named entities in product pages).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for e-commerce',
    items: [
      {
        question: 'How much does SEO cost for an e-commerce website?',
        answer:
          'E-commerce SEO budgets depend on catalog size, CMS complexity, and competitive intensity. At Rankwell, e-commerce SEO engagements start from $2,500/month (or GBP 2,000/month) for catalogs under 1,000 SKUs, and range from $6,000 to $12,000/month for catalogs exceeding 10,000 products with multi-country requirements. This covers technical audit, product page optimization, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long before SEO results appear on an e-commerce site?',
        answer:
          'Initial results typically appear between 3 and 6 months for niche categories with moderate competition. High-competition verticals (fashion, electronics, beauty) require 6 to 12 months of sustained work. Technical cleanup (crawl budget, canonicals, faceted filters) produces measurable effects within the first month in terms of indexed pages. Rankwell provides a realistic timeline based on the initial competitive audit.',
      },
      {
        question: 'How do you manage crawl budget on a catalog of 50,000+ products?',
        answer:
          'Crawl budget is managed through three levers: blocking indexation of non-strategic faceted filters (via robots.txt or meta noindex), configuring canonical tags to eliminate duplicate content between product variants, and strengthening internal links toward high-revenue pages. Rankwell analyzes server logs to identify exactly where Googlebot spends its crawl time and reallocates that budget toward pages that drive revenue.',
      },
      {
        question: 'Which CMS is best for e-commerce SEO?',
        answer:
          'The choice depends on catalog volume and technical resources. Shopify suits small to mid-size businesses with under 5,000 SKUs and limited dev capacity. WooCommerce offers greater SEO flexibility for medium catalogs with WordPress expertise available. Magento (Adobe Commerce) handles large multi-country catalogs with complex requirements. Rankwell has SEO and GEO expertise across all three platforms and adapts the methodology to each CMS.',
      },
      {
        question: 'How can my products get cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your products, three conditions must be met: product pages containing verifiable factual data (dimensions, materials, certifications), complete Product/Offer schema.org markup, and brand mentions on third-party sources (comparison sites, specialized blogs, press). The Rankwell GEO Score measures these three dimensions and identifies which levers to prioritize for increasing your product citability.',
      },
      {
        question: 'What is the difference between SEO and GEO for an e-commerce site?',
        answer:
          'SEO positions your pages in Google search results (positions 1 through 10). GEO (Generative Engine Optimization) gets your products and brand cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews. Both disciplines share fundamentals (quality content, structured markup) but GEO additionally requires high factual density and machine-readable structured data that LLMs can extract. Rankwell is the only agency integrating both approaches in a unified methodology.',
      },
      {
        question: 'Why choose Rankwell for e-commerce SEO?',
        answer:
          'Rankwell combines technical SEO expertise (crawl budget, catalog architecture, Product schema) with the GEO dimension that 93% of SEO agencies have not yet integrated. Our 7-step methodology is built specifically for e-commerce challenges: duplicate product descriptions, faceted navigation, pagination, and cannibalization. The proprietary GEO Score measures your product visibility in AI engines, a metric no other provider offers.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to make your e-commerce store visible?',
    description:
      'Request a free GEO & SEO audit of your e-commerce website. Our SEO & GEO consultants analyze your catalog, technical architecture, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
        { label: 'SEO for Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
        { label: 'SEO for Florists', href: '/en/geo-seo-agency/sector/fleuriste' },
        { label: 'SEO for Opticians', href: '/en/geo-seo-agency/sector/opticien' },
        { label: 'SEO for Pharmacies', href: '/en/geo-seo-agency/sector/pharmacie' },
      ],
      projets: [
        { label: 'Site Migration', href: '/en/geo-seo-agency/project/migration' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
        { label: 'Marketplace', href: '/en/geo-seo-agency/project/marketplace' },
      ],
      cms: [
        { label: 'Shopify SEO', href: '/en/geo-seo-agency/cms/shopify' },
        { label: 'WooCommerce SEO', href: '/en/geo-seo-agency/cms/woocommerce' },
        { label: 'Magento SEO', href: '/en/geo-seo-agency/cms/magento' },
      ],
      glossaire: [
        { label: 'E-commerce SEO', href: '/en/glossary/seo-ecommerce' },
        { label: 'Crawl Budget', href: '/en/glossary/crawl-budget' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our commerce and retail expertise',
    items: [
      { label: 'Jewelers', href: '/en/geo-seo-agency/sector/bijoutier' },
      { label: 'Wine Shops', href: '/en/geo-seo-agency/sector/caviste' },
      { label: 'Florists', href: '/en/geo-seo-agency/sector/fleuriste' },
      { label: 'Opticians', href: '/en/geo-seo-agency/sector/opticien' },
      { label: 'Franchises', href: '/en/geo-seo-agency/sector/franchise' },
      { label: 'Marketplace', href: '/en/geo-seo-agency/project/marketplace' },
    ],
  },
};

export default data;
