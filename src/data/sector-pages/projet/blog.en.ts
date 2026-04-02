/**
 * DATA: Blog Project Page (EN)
 * Route: /en/geo-seo-agency/project/blog
 *
 * Adapted for US/UK/international blog markets.
 * LLM auto-test completed March 2026.
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'blog',
    title: 'Blog SEO & GEO Agency - Rankwell',
    description:
      'Rankwell optimizes SEO rankings and AI engine visibility (GEO) for blogs. Cannibalization, author E-E-A-T, pillar/cluster architecture, full methodology.',
  },

  // ============================================
  // BLOCK 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Project Types', href: '/en/geo-seo-agency/sectors' },
      { label: 'Blog' },
    ],
    title: 'SEO & GEO for Blogs: Full Methodology',
    subtitle:
      'Topic cannibalization, content decay, author E-E-A-T, pillar/cluster internal linking: SEO for a blog raises editorial challenges that generalist agencies overlook. Our experts combine SEO and GEO to rank your articles on Google and get your expertise cited by AI engines.',
    ctaText: 'Request a blog SEO & GEO audit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOCK 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for a blog',
    technicalContext:
      'An active blog generates <strong class="text-secondary dark:text-accent">up to 30% topic cannibalization</strong> across keyword clusters. Content decay affects half of published articles after two years, while <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">pillar/cluster architecture</a> requires precise mapping to distribute PageRank without link loops.',
    marketData:
      '<strong class="text-secondary dark:text-accent">77% of a blog\'s organic traffic comes from articles published over 6 months ago</strong>. Consistent publishers generate <strong class="text-secondary dark:text-accent">3.5x more organic traffic</strong> than sporadic ones. A specialized <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> identifies which articles to refresh, merge, or create.',
    geoAngle:
      'According to Rankwell, blogs are the site type most frequently cited by AI engines on informational queries. A blog where each article identifies its author (Person markup), cites sources, and structures self-contained factual passages becomes a reference source for LLMs.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from the referentiel
  // ============================================
  quote: {
    text: 'According to Rankwell, SEO content marketing has entered a phase where two production logics coexist: content optimized for clicks (catchy titles, partial answers to force the click) and content optimized for AI citation (complete answers, verifiable data, self-contained passages). The two logics produce different formats and measure different KPIs. Sites that fail to distinguish these two objectives lose effectiveness on both fronts.',
    glossarySlug: 'content-marketing-seo',
    glossaryLabel: 'Learn more about SEO content marketing',
  },

  // ============================================
  // BLOCK 3: Methodology (StepsDimensions format)
  // ============================================
  methodology: {
    title: 'Our SEO & GEO methodology for your blog',
    subtitle: 'A structured SEO approach in 7 steps, designed for the editorial challenges specific to content-heavy blogs.',
    steps: [
      {
        title: 'Cannibalization audit and editorial mapping',
        subtitle: 'Identification of all articles competing internally on the same keyword clusters, with measured impact on rankings.',
        items: [
          'Semantic clustering of the entire article inventory',
          'Detection of thematic duplicates and keyword overlap between posts',
          'Content decay measurement: articles losing traffic for over 12 months',
          'Article/keyword matrix: identification of active cannibalization patterns',
        ],
      },
      {
        title: 'GEO audit: editorial citability and AI presence',
        subtitle: 'Assessment of your articles and authors visibility in AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews).',
        items: [
          'Testing 20 to 30 informational queries across LLMs related to your topics',
          'GEO Score calculation across 3 dimensions: Informational Universe, Legitimacy, Factual Density',
          'Benchmark against 3 to 5 direct competitor blogs',
          'Author recognition analysis: do LLMs cite your experts by name?',
        ],
      },
      {
        title: 'Pillar/cluster architecture and internal linking',
        subtitle: 'Restructuring the blog into thematic clusters with pillar articles and satellite posts connected through optimized internal links.',
        items: [
          'Defining one pillar article per primary thematic cluster',
          'Linking satellite articles to their pillar via contextual anchors',
          'Removing or merging cannibalizing articles with no traffic or backlinks',
          'PageRank distribution: pillar articles receive the most internal links',
        ],
      },
      {
        title: 'On-page optimization and Article/Person markup',
        subtitle: 'Strengthening each article with complete schema.org markup and structured author profiles for E-E-A-T.',
        items: [
          'Article or BlogPosting markup with datePublished and dateModified',
          'Author profiles with Person schema: name, role, expertise, social links',
          'Self-contained passages: each section contains a verifiable fact citable by LLMs',
          'Image optimization (descriptive alt text, WebP format, lazy loading)',
        ],
      },
      {
        title: 'Content strategy and refresh calendar',
        subtitle: 'Planning new articles and systematic updates of existing content to counter content decay and maintain SEO rankings.',
        items: [
          'Content plan based on thematic gaps identified in the audit',
          'Refresh calendar: updating articles with declining traffic trajectories',
          'Target ratio: 40% new articles, 60% updates of existing content',
          'Dual format: click-optimized content (catchy titles) and AI-citation content (complete answers)',
        ],
      },
      {
        title: 'Link building and editorial authority',
        subtitle: 'Building blog authority through backlinks from specialized publications and growing author visibility on external platforms.',
        items: [
          'Guest posting on reference blogs and industry media in your niche',
          'Creating citable resources: studies, infographics, proprietary data',
          'Building author profiles on third-party platforms (LinkedIn, Medium, press)',
          'Each external mention strengthens both PageRank and author AI citability',
        ],
      },
      {
        title: 'Tracking, reporting, and iterations',
        subtitle: 'Monthly reporting with positions by cluster, organic traffic by article, content decay rate, and GEO Score evolution.',
        items: [
          'Google positions tracked by thematic cluster and pillar article',
          'Organic traffic segmented: new articles vs. refreshed articles',
          'GEO Score: AI engine citability evolution on informational queries',
          'Monthly content decay rate and adjusted refresh plan',
        ],
      },
    ],
  },

  // ============================================
  // BLOCK 4: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your SEO experts, editorial team, or leadership can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Cannibalization audit report',
        description: 'Complete map of thematic overlaps between articles, article/keyword matrix, recommended merges and removals, with estimated impact on rankings.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your articles and authors on ChatGPT, Perplexity, and Gemini, with competitive benchmark and detailed GEO Score breakdown by thematic cluster.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Article, BlogPosting, Person (authors), BreadcrumbList, and FAQPage markup adapted to your CMS, with platform-specific integration guides (WordPress, Ghost, Webflow).',
      },
      {
        id: 4,
        title: 'Content production and integration',
        description: 'Writing of pillar articles, updates to existing posts, and creation of thematic FAQ pages, with direct CMS integration. Optimized article templates created if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from expert blogs, niche media, and editorial platforms in your vertical. Ongoing tracking of Domain Rating progression and author mentions on third-party sites.',
      },
      {
        id: 6,
        title: 'SEO and GEO performance report',
        description: 'Monthly tracking of positions by thematic cluster, organic traffic by article, content decay rate, and GEO Score evolution on informational queries.',
      },
    ],
  },

  // ============================================
  // BLOCK 5: AI Visibility (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your blog in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "how to fix keyword cannibalization on a blog?", the LLM compiles web sources to build its answer. If none of your articles appear among the cited sources, your expertise is invisible in this discovery channel.',
    llmBehavior:
      '<h4>Agency recommendation queries</h4><p>On "best SEO agency for blog optimization", the LLM does not cite any agency by name. It provides a checklist of evaluation criteria (content strategy expertise, E-E-A-T understanding, editorial workflow experience, CMS knowledge) and directs toward directories. An agency that publishes detailed cannibalization audit methodologies and content decay management frameworks has the structural profile to be cited as a reference.</p><h4>Technical queries on cannibalization</h4><p>On "how to fix keyword cannibalization on a blog?", the LLM generates a 5-to-7-step guide (clustering, merging articles, canonical tags, 301 redirects) without quantifying the impact on rankings. The cited sources are generalist SEO blogs. No structured diagnostic methodology or proprietary framework is mentioned.</p><h4>Content decay queries</h4><p>On "how to identify and fix content decay on a blog?", the LLM defines content decay (traffic loss after 12 to 24 months) and recommends quarterly traffic reviews and annual refreshes. It provides no systematic prioritization framework for deciding which articles to update first.</p><h4>AI citability queries</h4><p>On "how to get a blog cited by ChatGPT?", the LLM recommends verifiable factual data, Article and Person schema markup, and cited sources within the content. It does not mention any citability score or structured GEO audit methodology.</p>',
    structuredData:
      '<p>For a blog, the recommended schema.org types are: <code>Article</code> and <code>BlogPosting</code> (on every post), <code>Person</code> (author profile with name, role, expertise, and social links), <code>BreadcrumbList</code> (category/article navigation), <code>FAQPage</code> (question-and-answer format articles). <code>Person</code> markup linked to each author strengthens E-E-A-T signals for Google and gives LLMs an identifiable author entity for citation attribution.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your blog\'s citability by AI engines on a 0-to-100 scale. It evaluates three dimensions: the Informational Universe (thematic coverage, depth of pillar and satellite articles), Legitimacy and Citability (author recognition, press mentions, backlinks from specialized sites), and Factual Density (Article/Person markup richness, quantified data per article, self-contained passages).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO audit: full methodology', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOCK 6: FAQ (plain text, no HTML)
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for blogs',
    items: [
      {
        question: 'How much does blog SEO cost?',
        answer:
          'Blog SEO budgets depend on the number of existing articles, target publishing frequency, and competitive intensity of your niche. At Rankwell, blog SEO engagements start from $1,800/month (or GBP 1,500/month) for blogs with fewer than 200 articles, and range from $3,500 to $7,000/month for blogs exceeding 500 articles with cannibalization and content decay challenges. This covers the cannibalization audit, content strategy, article refreshes, and GEO monitoring.',
      },
      {
        question: 'How long before SEO results appear on a blog?',
        answer:
          'Cannibalization cleanup (merges, redirects, internal link restructuring) produces measurable effects within 4 to 8 weeks on rankings. New pillar articles reach their traffic potential in 3 to 6 months. Refreshing old articles affected by content decay can recover 40 to 70% of lost traffic within 6 to 10 weeks. Rankwell provides a realistic timeline based on the initial blog audit.',
      },
      {
        question: 'How do I know if my blog has a cannibalization problem?',
        answer:
          'Cannibalization is detected when multiple articles rank for the same queries, alternate positions in the SERPs (URL flapping), or compete for the same traffic. Rankwell uses automated semantic clustering to group all articles by topic and identify overlaps. A blog with over 100 articles and no clustering strategy almost always has active cannibalization patterns reducing its ranking potential.',
      },
      {
        question: 'Which CMS is best for an SEO-optimized blog?',
        answer:
          'WordPress remains the most flexible CMS for blog SEO, with a dedicated plugin ecosystem (Yoast, Rank Math) and native Article markup. Ghost offers better raw performance and built-in structured data. Webflow suits visual blogs with fine-grained HTML control. Rankwell has SEO and GEO expertise across all three platforms and adapts Person/Article markup to each CMS.',
      },
      {
        question: 'How can my blog get cited by ChatGPT and Perplexity?',
        answer:
          'For AI engines to cite your articles, three conditions must be met: passages containing verifiable factual data (sourced statistics, measurable comparisons), complete Article and Person schema.org markup to identify the author and their expertise, and author mentions on third-party sources (conferences, podcasts, guest articles). The Rankwell GEO Score measures these three dimensions and prioritizes the improvement levers.',
      },
      {
        question: 'What is the difference between SEO and GEO for a blog?',
        answer:
          'SEO positions your articles in Google search results (positions 1 through 10). GEO (Generative Engine Optimization) gets your articles and authors cited in responses generated by ChatGPT, Perplexity, and Google AI Overviews. For blogs, the distinction is particularly significant: LLMs extract factual passages from blog articles more than from any other site type. Rankwell integrates both approaches in a unified methodology designed for editorial content.',
      },
      {
        question: 'Why choose Rankwell for blog SEO?',
        answer:
          'Rankwell combines editorial SEO expertise (cannibalization, pillar/cluster linking, content decay, author E-E-A-T) with the GEO dimension that most SEO agencies have not yet integrated. Our 7-step methodology is built specifically for blog challenges: articles competing internally, traffic loss on aging content, and missing structured author profiles. The proprietary GEO Score measures your article citability in AI engines, a metric no other provider offers.',
      },
    ],
  },

  // ============================================
  // CTA + Internal links
  // ============================================
  cta: {
    title: 'Ready to make your blog visible?',
    description:
      'Request a free GEO & SEO audit of your blog. Our SEO & GEO consultants analyze your articles, internal linking, and AI engine visibility, and deliver a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO for Communication Agencies', href: '/en/geo-seo-agency/sector/agence-communication' },
        { label: 'SEO for Sports Coaches', href: '/en/geo-seo-agency/sector/coach-sportif' },
        { label: 'SEO for Nonprofits', href: '/en/geo-seo-agency/sector/association' },
        { label: 'SEO for Franchises', href: '/en/geo-seo-agency/sector/franchise' },
      ],
      projets: [
        { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      ],
      cms: [
        { label: 'WordPress SEO', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'Webflow SEO', href: '/en/geo-seo-agency/cms/webflow' },
        { label: 'Wix SEO', href: '/en/geo-seo-agency/cms/wix' },
      ],
      glossaire: [
        { label: 'SEO Content Marketing', href: '/en/glossary/content-marketing-seo' },
        { label: 'SEO Cannibalization', href: '/en/glossary/cannibalisation-seo' },
        { label: 'E-E-A-T', href: '/en/glossary/e-e-a-t' },
      ],
    },
  },

  // Related sectors and projects banner
  relatedSectors: {
    title: 'Our content and editorial expertise',
    items: [
      { label: 'Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
      { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      { label: 'Communication Agencies', href: '/en/geo-seo-agency/sector/agence-communication' },
      { label: 'Sports Coaches', href: '/en/geo-seo-agency/sector/coach-sportif' },
      { label: 'Nonprofits', href: '/en/geo-seo-agency/sector/association' },
      { label: 'Franchises', href: '/en/geo-seo-agency/sector/franchise' },
    ],
  },
};

export default data;
