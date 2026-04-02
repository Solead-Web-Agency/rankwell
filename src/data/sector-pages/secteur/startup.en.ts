/**
 * DATA: Sector Page Startups (EN)
 * Route: /en/geo-seo-agency/sectors/startup
 *
 * National sector (no local dominance).
 * Target: founders, CEOs, CTOs, CMOs of early-stage startups and scale-ups.
 * Adapted for US / UK / UAE markets.
 * Keyword data: Ahrefs + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'startup',
    title: 'GEO & SEO Agency for Startups - Rankwell',
    description:
      'Rankwell helps startups boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the startup ecosystem.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Startups' },
    ],
    title: 'GEO & SEO for Startups: Google & AI Engine Visibility',
    subtitle:
      'Your future users search for solutions on Google and ask ChatGPT before choosing a tool. Our experts design GEO & SEO strategies calibrated for the fast cycles and tight budgets of startups.',
    ctaText: 'Request a GEO & SEO audit for your startup',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for startups',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">78% of B2B SaaS queries are informational</strong>. Startup founders compete on niche high-intent terms: comparisons, alternatives, how-to guides. The goal is to capture qualified traffic that converts into free trials or demos.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Speed and limited budget</strong>: an early-stage startup cannot invest 18 months before seeing returns. JavaScript frameworks (React, Next.js, Vue) often block indexation. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these technical constraints while keeping pace with frequent product pivots.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">G2, Capterra, Product Hunt, TrustRadius</strong> and AI comparison engines capture most transactional traffic on "best tool {category}" queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a young company stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its awareness than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'SEO for startups', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'startup marketing strategy', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'SaaS SEO agency', volume: 600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'SaaS SEO strategy', volume: 900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'startup SEO strategy', volume: 500, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'how to get organic traffic for startup', volume: 350, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'best SEO tools for startups', volume: 450, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'SEO for startups', volume: 400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'startup marketing agency UK', volume: 300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'SaaS SEO', volume: 500, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'startup digital marketing', volume: 350, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'SEO agency for tech companies', volume: 250, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how to grow a startup online', volume: 200, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'startup marketing Dubai', volume: 350, intent: 'locale', difficulty: 'faible' },
        { keyword: 'SEO agency Dubai startup', volume: 200, intent: 'locale', difficulty: 'faible' },
        { keyword: 'digital marketing for startups UAE', volume: 250, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'SaaS company Dubai', volume: 300, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'startup growth strategy UAE', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'SEO for tech companies Dubai', volume: 180, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, thousands of searches like "SEO for startups", "SaaS SEO strategy", or "startup marketing Dubai" represent founders actively seeking growth solutions. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your startup does not appear there, those potential users go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for startups',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the constraints of the startup ecosystem: fast cycles, tight budgets, and frequent pivots across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, with a focus on common startup technical issues: JavaScript frameworks (React, Next.js, Vue), poorly indexed SPAs, and loading performance.',
        items: [
          'Server-side vs client-side rendering and indexation impact',
          'Schema.org Organization and SoftwareApplication markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of web applications',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the startup\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the startup\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries in the vertical',
        ],
      },
      {
        title: 'Market study & niche keyword research',
        subtitle: 'Mapping of search queries by product vertical and maturity stage across US, UK, and UAE markets. Identification of SEO gaps that competitors have not yet covered.',
        items: [
          'Comparison queries ("alternative to {competitor}")',
          'Bottom-of-funnel queries ("best {category} tool")',
          'Analysis of queries asked to AI engines in the vertical',
          'Search volumes by target market segment',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the SaaS user journey: from educational content to product page, then to conversion.',
        items: [
          'Category page > feature page > pricing page > signup',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Product-led content strategy',
        subtitle: 'Creation of content that demonstrates the startup\'s expertise while driving acquisition: practical guides, benchmarks, and case studies written to be citable by LLMs.',
        items: [
          'Bottom-of-funnel and data-driven comparison content',
          'Self-sufficient factual sentences with verifiable data',
          'Free templates and tools that generate backlinks',
        ],
      },
      {
        title: 'Authority & startup link building',
        subtitle: 'Authority development through tech media, review platforms, and specialized publications in the startup ecosystem.',
        items: [
          'Product Hunt, G2, Capterra, TrustRadius',
          'Publications on TechCrunch, The Verge, Wired, Sifted (UK), Gulf Business (UAE)',
          'Digital PR and funding round press releases',
        ],
      },
      {
        title: 'Discovery platform presence',
        subtitle: 'Optimization of profiles on platforms where decision-makers search and compare SaaS solutions: directories, marketplaces, and open-source repositories.',
        items: [
          'G2, Capterra, and TrustRadius profiles with verified reviews',
          'Optimized Product Hunt profile for launches',
          'Specialized directories by vertical (FinTech, HealthTech, EdTech)',
          'Presence on GitHub and Stack Overflow for technical tools',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by market segment, and signups generated through the organic channel.',
        items: [
          'Google positions by strategic keyword',
          'Organic traffic by product landing page',
          'GEO Score: visibility in AI engines',
          'Signups, demos, and conversions attributed to SEO',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, technical lead, or founders can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your startup\'s website: product pages, pricing, and blog analysis covering indexation, Core Web Vitals, JavaScript rendering, site architecture, and technical blockers identified with a prioritized action list.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your startup in ChatGPT, Perplexity, and Google AI Overviews on your target queries. GEO Score out of 100 with competitive benchmark on your vertical (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'SoftwareApplication, Organization, and FAQPage markup ready to integrate. Each type is configured with properties adapted to your product and market positioning. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Optimized product pages, content hub (guides, comparisons, use cases), thought leadership articles, and FAQs. Direct integration on your CMS or via FTP depending on your tech stack.',
      },
      {
        id: 5,
        title: 'Startup link building',
        description: 'Backlink acquisition from tech blogs and SaaS publications, Product Hunt, G2, TechCrunch, and industry-specific media. Each link targets a strategic page on your website.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions, organic traffic, signups attributed to the SEO channel, and GEO Score evolution with AI citability monitoring across ChatGPT, Perplexity, and Gemini.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your startup in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a decision-maker asks ChatGPT "what is the best project management tool for a startup?", the LLM compiles information from across the web to formulate its response. If your startup does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which SEO agency do you recommend for a SaaS startup?": the LLM does not cite any agency by name. It provides a list of 5 to 7 selection criteria (SaaS expertise, understanding of product-led growth, startup-friendly pricing). Agencies that publish data-driven case studies on startups have the best chance of being cited.</p><h4>Informational queries</h4><p>"How can a startup rank on Google?" or "SaaS SEO strategy": the LLM generates a structured 6 to 8 step guide without citing any source or agency. Content is synthesized from tech blogs (HubSpot, Ahrefs, Moz) and startup media (TechCrunch, Sifted). The startup that produces this type of content on its site can be cited as a reference.</p><h4>Budget queries</h4><p>"SEO budget for an early-stage startup": the LLM provides detailed pricing ranges (freelancer USD 500 to USD 2,000/month, agency USD 2,000 to USD 6,000/month) without attribution. Sites providing precise, up-to-date pricing data for startups have the highest chance of being extracted as a source.</p><h4>Comparison queries</h4><p>"SEO vs paid ads for a startup" or "startup vs scale-up SEO strategy": the LLM produces structured comparison tables. This is the most extractable format. Content that formalizes clear distinctions with supporting data is prioritized in generative responses.</p>',
    structuredData:
      '<p>For startups, the recommended schema.org types are: <code>Organization</code> (primary type), <code>SoftwareApplication</code> (for SaaS products), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Organization</code> markup combined with <code>SoftwareApplication</code> allows Google and LLMs to precisely identify the vertical, features, and positioning of the startup.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your startup\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals: G2 reviews, press mentions, tech backlinks), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for startups',
    items: [
      {
        question: 'How much does SEO cost for a startup?',
        answer:
          'The SEO budget for a startup depends on the maturity stage and the technical complexity of the site. At Rankwell, SEO engagements for startups start from USD 2,000/month (or GBP 1,600/month) for a single vertical, and can reach USD 5,000-8,000/month for a multi-market scale-up with internationalization requirements.',
      },
      {
        question: 'How long does it take to see results from startup SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche long-tail queries (e.g., "alternative to {competitor} {vertical}") rank faster than generic competitive terms. Rankwell provides a realistic timeline based on the competitive analysis of your vertical and prioritizes quick-win actions.',
      },
      {
        question: 'Is SEO compatible with frequent product pivots?',
        answer:
          'Yes, provided it is anticipated. A pivot changes target keywords, priority pages, and sometimes the entire site architecture. Rankwell integrates continuous monitoring of the startup\'s product positioning and adapts the SEO strategy at each iteration. 301 redirects, acquired authority preservation, and content updates are planned in advance to prevent traffic loss.',
      },
      {
        question: 'Does a startup need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when it serves acquisition. Articles should answer real user queries (comparisons, guides, tutorials) and be written to be citable by AI engines. Rankwell recommends 3 to 6 articles per month for a growth-stage startup, targeting informational and bottom-of-funnel queries with high intent.',
      },
      {
        question: 'How can a startup appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a startup must accumulate verifiable web authority signals: reviews on G2 and Capterra, mentions in tech press, a Product Hunt profile, rich factual content on its website, and schema.org structured data. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'SEO or paid ads: which channel should a startup prioritize?',
        answer:
          'Both are complementary. Paid ads (Google Ads) deliver immediate results and allow rapid market validation, but cost per click increases with competition and creates budget dependency. SEO builds a lasting asset with decreasing marginal cost. Rankwell recommends combining both in early-stage, then gradually shifting budget toward SEO as organic authority builds.',
      },
      {
        question: 'Are platforms like G2 and Capterra enough to be visible?',
        answer:
          'Review platforms like G2, Capterra, and TrustRadius are useful for credibility and initial visibility, but they create dependency: the startup is just one profile among thousands. A well-optimized website allows the startup to control its image, convert directly, and build lasting authority that platforms cannot revoke. Rankwell helps startups build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your startup visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to your growth stage.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO SME', href: '/en/geo-seo-agency/sectors/sme' },
        { label: 'SEO Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      ],
      projets: [
        { label: 'SEO Web App & SaaS', href: '/en/geo-seo-agency/project/web-app' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/website-creation' },
      ],
      cms: [
        { label: 'SEO Next.js', href: '/en/geo-seo-agency/cms/nextjs' },
        { label: 'SEO Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'GEO Audit', href: '/en/glossary/audit-geo' },
        { label: 'Citability', href: '/en/glossary/citabilite' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'SME', href: '/en/geo-seo-agency/sectors/sme' },
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/bank' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
      { label: 'Franchise', href: '/en/geo-seo-agency/sectors/franchise' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Organization',
};

export default data;
