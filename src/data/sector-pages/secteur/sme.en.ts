/**
 * DATA: Sector Page SMEs (EN)
 * Route: /en/geo-seo-agency/sectors/sme
 *
 * Adapted for US / UK / UAE markets
 * SME = Small and Medium Enterprise (UK/UAE), also "small business" (US)
 * Keyword data: Ahrefs, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'sme',
    title: 'GEO & SEO Agency for SMEs - Rankwell',
    description:
      'Rankwell helps SMEs and small businesses boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for small and medium enterprises.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'SMEs' },
    ],
    title: 'GEO & SEO for SMEs: Google & AI Engine Visibility',
    subtitle:
      'Your business needs to generate qualified leads from Google and AI engines. Our experts design GEO & SEO strategies calibrated to the budget, market, and growth objectives of small and medium enterprises.',
    ctaText: 'Request a GEO & SEO audit for your business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for SMEs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">72% of small business owners consider their website the primary client acquisition channel</strong>. Unlike corporations with massive ad budgets, SMEs must earn every organic position through content relevance and solid <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO strategy</a>.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Limited budget, lean team, fast ROI expected</strong>. SMEs have no dedicated marketing department and no margin for campaigns that take 18 months to deliver. Every dollar or pound invested must be traceable.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Amazon, Yelp</strong> (US), <strong class="text-secondary dark:text-accent">Trustpilot, Yell</strong> (UK), <strong class="text-secondary dark:text-accent">Yellow Pages UAE, Bayut</strong> (UAE) absorb traffic that SMEs could capture directly. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO agency</a> that understands SME constraints, these businesses remain dependent on third-party platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its notoriety than on the factual structure of its content. A site where every paragraph contains a verifiable fact, a documented data point, or a formalized distinction will be extracted preferentially by AI engines, regardless of its domain authority.',
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
        { keyword: 'small business SEO', volume: 3600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'SEO for small business', volume: 2400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'small business marketing', volume: 14800, intent: 'informationnelle', difficulty: 'très élevée' },
        { keyword: 'how to get more customers for my small business', volume: 1900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'small business website', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'local SEO for small business', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best SEO company for small business', volume: 880, intent: 'commerciale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'SEO for small business', volume: 1600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'small business marketing', volume: 4400, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'how to improve Google ranking', volume: 1900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'SME digital marketing', volume: 720, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'local SEO services UK', volume: 590, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'small business website SEO', volume: 480, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'SEO company Dubai', volume: 2900, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'digital marketing for small business Dubai', volume: 720, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'SME marketing UAE', volume: 390, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'small business website Dubai', volume: 320, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to grow small business online UAE', volume: 210, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, thousands of SME owners and managers search for ways to improve their online visibility, find an SEO partner, or understand how to attract more clients through Google. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your business does not appear there, those prospects go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for SMEs',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the budget and organizational constraints of small and medium enterprises across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation, with attention to shared hosting limitations common among SMEs.',
        items: [
          'Page structure by product line or service offering',
          'Schema.org Organization and LocalBusiness markup',
          'Performance and Core Web Vitals (critical for SME sites on shared hosting)',
          'Crawl and indexation of strategic pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the SME\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the company\'s informational universe',
          'Measurement of legitimacy and citability against direct competitors',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries in the business sector',
        ],
      },
      {
        title: 'Market study & sector keyword research',
        subtitle: 'Mapping of search queries by product line, service offering, and geographic area across US, UK, and UAE markets. Identification of underexploited niches where the SME can rank quickly.',
        items: [
          'High commercial intent queries with low competition',
          'Analysis of queries asked to AI engines in the business sector',
          'Real search volumes by offering and catchment area',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the B2B or B2C customer journey of the SME.',
        items: [
          'Service/product page to contact/quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization per business line',
        ],
      },
      {
        title: 'Content strategy adapted to SMEs',
        subtitle: 'Creation of high-value content demonstrating the SME\'s industry expertise, written to be citable by LLMs.',
        items: [
          'Practical guides and FAQs answering Google People Also Ask',
          'Case studies and client testimonials documenting concrete results',
          'Self-sufficient factual sentences with industry-specific data',
        ],
      },
      {
        title: 'Authority & targeted link building',
        subtitle: 'Authority development through professional directories, local press, and sector publications accessible to SME budgets.',
        items: [
          'Qualified directories: BBB, Chamber of Commerce (US), Companies House, Yell (UK), Dubai Chamber, DMCC (UAE)',
          'Local and regional press coverage',
          'Partnerships with complementary businesses (clients, suppliers, trade associations)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the Google Business Profile to capture local queries and appear in the Local Pack and geolocated AI responses, when the SME has a defined service area.',
        items: [
          'Primary category matched to business sector + relevant secondary categories',
          'Client review management and systematic collection strategy',
          'Photos, hours, attributes, and regular posts',
          'Consistent NAP citations across professional directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by business line, and leads generated.',
        items: [
          'Google positions by strategic keyword',
          'Organic traffic by service/product page',
          'GEO Score: visibility in AI engines',
          'Leads, quote requests, and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, technical staff, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'In-depth analysis of your service and landing pages: indexation, Core Web Vitals, site architecture, and identified technical blockers with a prioritized action list.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Measurement of your SME\'s visibility in ChatGPT, Perplexity, and Google AI Overviews responses. GEO Score out of 100 with competitive benchmark in your sector.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LocalBusiness or Organization, Service, and FAQPage markup ready to integrate. Each type is configured with properties adapted to your business activity and service area.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Optimized service pages, industry expertise articles, and FAQs. CMS or FTP integration, with reusable templates for your future publications.',
      },
      {
        id: 5,
        title: 'SME link building',
        description: 'Backlink acquisition from Chamber of Commerce listings, professional directories, local press, and trade publications. Each link targets a strategic page on your site.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Monthly report including Google positions, organic traffic, leads and conversions, and GEO Score evolution with AI citability tracking.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your SME in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a business owner asks ChatGPT "how do I improve my small business visibility on Google?" or "which SEO agency works with SMEs?", the LLM compiles information from across the web to formulate its response. If your company does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Strategic advice queries</h4><p>"How to improve my small business visibility on Google?": the LLM generates a structured guide with 6 to 8 levers (Google Business Profile, technical SEO, content, link building). It does not cite any specific agency. SMEs that publish detailed, factual guides on these topics have the highest chance of being extracted as a reference source.</p><h4>Budget queries</h4><p>"How much does SEO cost for a small business?": the LLM provides pricing ranges (USD 500 to USD 5,000/month depending on size and objectives, or GBP 400 to GBP 4,000/month in the UK). It does not recommend any agency by name. Sites that publish transparent, verifiable pricing grids are most likely to be cited by AI engines.</p><h4>Website creation queries</h4><p>"How to create a website for a small business?": the LLM generates a step-by-step guide and mentions CMS platforms (WordPress, Shopify, Squarespace) but does not recommend any agency. The field is open for service providers that document their processes with concrete data and client results.</p><h4>Comparative queries</h4><p>"Small business: Google Ads or SEO?": the LLM compares both channels on cost, timeline, and ROI. It recommends a combined approach without citing any provider. Companies that publish comparisons backed by real client results have a citability advantage.</p>',
    structuredData:
      '<p>For SMEs, the recommended schema.org types are: <code>Organization</code> (primary type), <code>LocalBusiness</code> (if the business has a defined service area), <code>FAQPage</code>, <code>BreadcrumbList</code>, <code>Service</code>. The <code>Organization</code> markup allows Google and LLMs to precisely identify the business sector, size, location, and services offered by the company.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your SME\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for SMEs',
    items: [
      {
        question: 'How much does SEO cost for a small business?',
        answer:
          'The SEO budget for an SME depends on the industry, competition level, and geographic scope targeted. At Rankwell, SEO engagements for SMEs start from USD 1,500/month (or GBP 1,200/month) for a foundational package (audit + technical optimizations + monthly tracking) and can reach USD 4,000-6,000/month for a comprehensive strategy including content, link building, and GEO.',
      },
      {
        question: 'How long does it take to see SEO results for a small business?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche queries with low competition can be ranked faster, while highly contested national keywords require 6 to 12 months of sustained work. Rankwell provides a realistic timeline based on the initial competitive analysis of your market.',
      },
      {
        question: 'Can an SME with a small budget really compete in SEO?',
        answer:
          'Yes, provided it targets the right queries. SMEs should not chase the same keywords as large corporations. Rankwell identifies underexploited niches where competition is low but purchase intent is high: long-tail queries, local queries, and sector-specific queries. This prioritization allows SMEs to generate qualified traffic without a disproportionate budget.',
      },
      {
        question: 'Does an SME need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real questions posed by your clients (inspired by Google People Also Ask), demonstrate your industry expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries related to your sector.',
      },
      {
        question: 'How can a small business appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, an SME must accumulate web authority signals: presence on professional directories (BBB, Chamber of Commerce, Yell, Dubai Chamber), mentions in trade press, an optimized Google Business Profile, and rich factual content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an SME?',
        answer:
          'Local SEO targets geolocated queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries without a geographic component and requires high-authority educational content. Rankwell adapts the strategy to the SME\'s service area: local for a neighborhood business, national for a software publisher or B2B service provider.',
      },
      {
        question: 'Are marketplaces and directories enough for an SME to be visible?',
        answer:
          'Platforms like Amazon, Yelp, or Trustpilot are useful for initial visibility, but they create dependency: your business is just one profile among thousands, and every sale or lead is subject to a commission or algorithm change. A well-optimized website allows the business to control its image, convert directly, and build lasting authority. Rankwell helps SMEs build this independent authority through a GEO & SEO strategy that does not depend on third-party platforms.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to the budget and objectives of your SME.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
        { label: 'SEO Marketing Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
        { label: 'SEO Bank', href: '/en/geo-seo-agency/sectors/banque' },
        { label: 'SEO Insurance', href: '/en/geo-seo-agency/sectors/assurance' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Shopify', href: '/en/geo-seo-agency/cms/shopify' },
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
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/banque' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/assurance' },
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/imprimeur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Organization',
};

export default data;
