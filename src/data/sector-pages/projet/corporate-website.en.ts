/**
 * DATA: Corporate Website Project Page (EN)
 * Route: /en/geo-seo-agency/project/corporate-website
 *
 * Adapted for US/UK/UAE corporate and small business website markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'corporate-website',
    title: 'Corporate Website SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO rankings and AI engine visibility (GEO) for corporate websites. Flat architecture, thin content, LocalBusiness schema, full methodology.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Corporate Website' },
    ],
    title: 'SEO & GEO for Corporate Websites: Full Methodology',
    subtitle:
      'Flat architecture, thin content pages, reliance on Google Business Profile: SEO for a corporate website requires compensating a low page count with maximum semantic and factual density. Our experts combine SEO and GEO to rank your service pages on Google and get your business cited by AI engines.',
    ctaText: 'Request a corporate website SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a corporate website',
    technicalContext:
      'A corporate website typically has <strong class="text-secondary dark:text-accent">5 to 15 indexable pages</strong>. This flat architecture offers Google no depth signals: no dense internal linking, no pagination, no regular content flow. Each page must carry enough semantic weight to establish <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">topical authority</a>.',
    marketData:
      'Over <strong class="text-secondary dark:text-accent">60% of small and mid-size businesses</strong> have a corporate website, yet fewer than 20% invest in structured SEO beyond Google Business Profile. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> turns these sites into real acquisition channels.',
    geoAngle:
      'According to Rankwell, LLM citability depends less on reputation than on content structure. A corporate website where every paragraph contains a verifiable fact or sourced data point will be preferentially extracted by AI engines, regardless of domain authority.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its reputation than on the factual structure of its content. A corporate website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your corporate website',
    subtitle: 'A structured SEO approach in 7 steps, designed for the technical challenges specific to corporate websites.',
    steps: [
      {
        title: 'Corporate website technical audit',
        subtitle: 'Analysis of the flat architecture, HTML markup on each page, and performance signals (Core Web Vitals, HTTPS, mobile-first indexing).',
        items: [
          'Mapping of all 5 to 15 existing pages and their semantic depth',
          'Title tag, meta description, and heading structure review on every service page',
          'Page-by-page load time, CLS, and LCP analysis',
          'Detection of orphan pages, missing canonicals, and 404 errors',
        ],
      },
      {
        title: 'GEO audit: business citability in AI engines',
        subtitle: 'Assessment of your brand and service visibility in ChatGPT, Perplexity, Gemini, and Google AI Overviews responses.',
        items: [
          'Testing 20 to 30 local and industry queries across LLMs',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct local competitors',
          'Identification of which services get cited vs. ignored by AI engines',
        ],
      },
      {
        title: 'Architecture and page densification',
        subtitle: 'Restructuring your site from a flat layout to a semantically rich hierarchy, without artificially inflating page count.',
        items: [
          'Creating a dedicated page per service instead of a single catch-all page',
          'Adding a FAQ section to each service page using real local questions',
          'Launching a blog with 2 to 4 monthly articles tied to your service verticals',
          'Internal linking between service pages, blog posts, and homepage',
        ],
      },
      {
        title: 'On-page optimization and Google Business Profile',
        subtitle: 'Writing unique content per page with verifiable factual data and synchronizing website data with Google Business Profile.',
        items: [
          'Service descriptions with figures, coverage areas, and certifications',
          'LocalBusiness, Service, FAQPage, and BreadcrumbList schema.org markup',
          'NAP consistency (Name, Address, Phone) between website and GBP listing',
          'Integration of structured customer reviews and verifiable testimonials',
        ],
      },
      {
        title: 'Content strategy for corporate websites',
        subtitle: 'Creating editorial content targeting informational queries that service pages cannot capture on their own.',
        items: [
          'Blog articles answering the most common questions in your industry vertical',
          'Practical guides with local data (regulations, average pricing, certifications)',
          'Case study and testimonial pages with measurable outcomes',
          'Self-contained structured passages designed for AI engine extraction',
        ],
      },
      {
        title: 'Local link building and domain authority',
        subtitle: 'Acquiring backlinks from local and industry sources to compensate for the site\'s low page volume.',
        items: [
          'Listings on professional directories (Chamber of Commerce, Better Business Bureau, Yelp)',
          'Partnerships with local blogs and industry media for guest articles',
          'Mentions in local press and institutional websites',
          'Each external link strengthens both PageRank and AI citability of your brand',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting with positions per service page, organic traffic, leads generated, and GEO Score evolution.',
        items: [
          'Google positions tracked per service page and per local target query',
          'Organic traffic segmented by page and by source (Google, Bing, AI engines)',
          'GEO Score: evolution of AI engine citability over time',
          'Iterative adjustments: reinforcing underperforming pages',
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
        description: 'Diagnostic of your corporate website\'s flat architecture, heading and meta tag analysis per service page, performance issue inventory, with corrective actions ranked by priority.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your brand and services on ChatGPT, Perplexity, and Gemini, with competitive benchmark and detailed GEO Score breakdown on industry queries.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LocalBusiness, Service, FAQPage, and BreadcrumbList markup adapted to your CMS (WordPress, Wix, Squarespace, Webflow), with integration guide and Rich Results Test validation.',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of detailed service pages, blog articles, and FAQ content, with direct CMS integration via FTP. Page templates created if your site lacks structure.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from professional directories (BBB, Chamber of Commerce), local blogs, and industry media. Ongoing tracking of acquired links and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of positions per service page, organic traffic by source, leads generated through SEO, and GEO Score evolution across AI engines.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your corporate website in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a prospect asks ChatGPT "which employment lawyer near me is recommended?", the LLM compiles web sources to formulate its answer. If your corporate website is not among the sources cited, your business is invisible in this new recommendation channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for small business websites", the LLM does not name any specific agency. It provides a list of selection criteria (experience with small businesses, local SEO expertise, Google Business Profile management, transparent pricing) and directs toward platforms like Clutch or Trustpilot. An agency publishing small business case studies and structured methodologies has the profile to be cited as a reference.</p><h4>Technical queries</h4><p>On "how to improve SEO for a corporate website", the LLM generates a structured guide of 8 to 10 points covering title tags, service page creation, internal linking, and Google Business Profile optimization. No agency is cited. The advice is generic and does not contain data specific to low-page-count architectures.</p><h4>CMS comparison queries</h4><p>On "WordPress vs Wix vs Squarespace for SEO", the LLM produces a comparison table of 3 to 5 platforms with advantages and limitations for each. WordPress is consistently presented as the most flexible. Sites publishing structured comparisons with measurable criteria (load time, URL control, schema support) are favored as extraction sources.</p><h4>AI visibility queries</h4><p>On "how to get a small business cited by ChatGPT", the LLM has very little material to draw from. Its recommendations remain general: enrich factual content, add schema.org markup, build third-party presence. This is a nearly untouched territory where the first structured, substantive content has a strong chance of being ingested as a reference source by AI engines.</p>',
    structuredData:
      '<p>For a corporate website, the recommended schema.org types are: <code>LocalBusiness</code> (with industry-specific subtype, such as <code>LegalService</code> or <code>MedicalBusiness</code>), <code>Service</code> (on each service page), <code>FAQPage</code> (on thematic FAQ sections), <code>BreadcrumbList</code> (navigation), and <code>Organization</code> (company information). <code>LocalBusiness</code> markup with hours, service area, and reviews enables Google rich snippets and gives LLMs structured data to extract for local recommendations.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your corporate website\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (breadth and depth of service and editorial content), Legitimacy and Citability (customer reviews, local press mentions, backlinks from professional directories), and Factual Density (schema.org markup richness, structured contact data, named entities in service pages).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for corporate websites',
    items: [
      {
        question: 'How much does SEO cost for a corporate website?',
        answer:
          'SEO budgets for corporate websites depend on page count, industry, and local competitive intensity. At Rankwell, SEO engagements for corporate websites start from $1,500/month (or GBP 1,200/month) for sites with 5 to 10 pages, and range from $3,000 to $5,000/month for projects that include editorial content production and local link building. This covers technical audit, on-page optimization, content strategy, and GEO monitoring.',
      },
      {
        question: 'How long before SEO results appear on a corporate website?',
        answer:
          'Initial results typically appear between 2 and 4 months for local queries with moderate competition (service name + city). National or highly competitive queries require 4 to 8 months of sustained work. Creating dedicated service pages produces measurable effects within the first month in terms of indexed pages. Rankwell provides a realistic timeline based on competitive density in your geographic area.',
      },
      {
        question: 'How many pages does a corporate website need for effective SEO?',
        answer:
          'A high-performing corporate website requires at minimum 8 to 15 strategic pages: an optimized homepage, a dedicated page per service (not a single catch-all page), an about page with documented expertise, a contact page with structured NAP data, FAQ sections per topic, and a blog with 2 to 4 monthly articles. Rankwell structures this architecture to maximize semantic coverage without artificially inflating the URL count.',
      },
      {
        question: 'Which CMS is best for corporate website SEO?',
        answer:
          'WordPress remains the most flexible CMS for corporate website SEO: native tag management, proven SEO plugins (Yoast, Rank Math), and full control over schema.org markup. Wix and Squarespace suit very small sites (under 10 pages) but limit technical customization. Webflow offers a strong compromise between design quality and SEO control. Rankwell adapts its methodology to the technical specifics of each platform and integrates GEO markup regardless of CMS.',
      },
      {
        question: 'How can my corporate website get cited by ChatGPT?',
        answer:
          'For AI engines to cite your business, three conditions must be met: service pages containing verifiable factual data (certifications, service area, indicative pricing), complete LocalBusiness and Service schema.org markup, and brand mentions on third-party sources (professional directories, local press, Google reviews). The Rankwell GEO Score measures these three dimensions and identifies which levers to prioritize for increasing your AI citability.',
      },
      {
        question: 'What is the difference between SEO and GEO for a corporate website?',
        answer:
          'SEO positions your service pages in Google search results (positions 1 through 10). GEO (Generative Engine Optimization) gets your business cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews. For a corporate website, this distinction is critical: with only 5 to 15 pages, SEO potential is capped by content volume. GEO enables visibility through citability, even with few pages, provided each page is rich in verifiable factual data. Rankwell integrates both approaches in a unified methodology.',
      },
      {
        question: 'Why choose Rankwell for corporate website SEO?',
        answer:
          'Rankwell combines technical SEO expertise (corporate website architecture, LocalBusiness markup, Google Business Profile optimization) with the GEO dimension that the vast majority of SEO agencies have not yet integrated. Our 7-step methodology is built for the core constraint of corporate websites: transforming a small number of pages into sources of topical authority. The proprietary GEO Score measures your business visibility in AI engines, a metric no other provider offers for corporate websites.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to make your corporate website visible?',
    description:
      'Request a free GEO & SEO audit of your corporate website. Our SEO & GEO consultants analyze your architecture, service pages, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
        { label: 'SEO for Doctors', href: '/en/geo-seo-agency/sector/medecin' },
        { label: 'SEO for Accountants', href: '/en/geo-seo-agency/sector/expert-comptable' },
        { label: 'SEO for Architects', href: '/en/geo-seo-agency/sector/architecte' },
      ],
      projets: [
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
        { label: 'Blog', href: '/en/geo-seo-agency/project/blog' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
        { label: 'Squarespace SEO', href: '/en/geo-seo-agency/cms/squarespace' },
      ],
      glossaire: [
        { label: 'Citability', href: '/en/glossary/citabilite' },
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
        { label: 'Structured Data (Schema.org)', href: '/en/glossary/donnees-structurees' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our expertise for professional services and SMBs',
    items: [
      { label: 'Lawyers', href: '/en/geo-seo-agency/sector/avocat' },
      { label: 'Doctors', href: '/en/geo-seo-agency/sector/medecin' },
      { label: 'Accountants', href: '/en/geo-seo-agency/sector/expert-comptable' },
      { label: 'Architects', href: '/en/geo-seo-agency/sector/architecte' },
      { label: 'Graphic Designers', href: '/en/geo-seo-agency/sector/graphiste' },
      { label: 'Photographers', href: '/en/geo-seo-agency/sector/photographe' },
      { label: 'SMBs', href: '/en/geo-seo-agency/sector/pme' },
      { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
    ],
  },
};

export default data;
