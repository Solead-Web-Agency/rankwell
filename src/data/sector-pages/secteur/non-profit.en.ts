/**
 * DATA: Sector Page Non-profits (EN)
 * Route: /en/geo-seo-agency/sectors/non-profit
 *
 * Adapted for US / UK / UAE markets (non-profit, charity, NGO)
 * Keyword data: Ahrefs industry benchmarks, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'non-profit',
    title: 'GEO & SEO Agency for Non-profits - Rankwell',
    description:
      'Rankwell helps non-profits, charities, and NGOs boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the non-profit sector.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Non-profits' },
    ],
    title: 'GEO & SEO for Non-profits: Google & AI Engine Visibility',
    subtitle:
      'Your donors, volunteers, and beneficiaries search on Google and ask ChatGPT for recommendations. Our experts design GEO & SEO strategies tailored to the budget constraints and compliance requirements of non-profits, charities, and NGOs.',
    ctaText: 'Request a GEO & SEO audit for your non-profit',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for non-profits',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Tens of thousands of monthly searches target non-profit queries</strong>: "how to start a nonprofit" (US), "charity near me" (UK), "volunteer Dubai" (UAE). These represent donors and supporters actively looking to engage through the Local Pack and AI responses.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Limited budgets and strict compliance obligations</strong> define the sector: <strong class="text-secondary dark:text-accent">IRS 501(c)(3)</strong> standards (US), <strong class="text-secondary dark:text-accent">Charity Commission</strong> (UK), <strong class="text-secondary dark:text-accent">IACAD</strong> (UAE). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must maximize organic ROI within these regulatory constraints.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">GoFundMe, Charity Navigator, JustGiving</strong> (US/UK), <strong class="text-secondary dark:text-accent">GuideStar, VolunteerMatch</strong> (US), <strong class="text-secondary dark:text-accent">Dubai Cares</strong> (UAE) dominate donation and volunteering queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a non-profit stays invisible behind these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its notoriety than on the factual structure of its content. A website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'Learn more about citability',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future donors and volunteers search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'how to start a nonprofit', volume: 18100, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'nonprofit organization', volume: 14800, intent: 'informationnelle', difficulty: 'très élevée' },
        { keyword: 'donate to charity', volume: 12100, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: '501c3 lookup', volume: 9900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'volunteer near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'nonprofit marketing', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'charity website design', volume: 880, intent: 'commerciale', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'charity near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'donate to charity', volume: 4400, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'how to set up a charity UK', volume: 2900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'charity commission search', volume: 2400, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'volunteer near me', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'gift aid charity', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'charity SEO', volume: 390, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'charity Dubai', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'volunteer Dubai', volume: 1000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'donate Dubai', volume: 720, intent: 'transactionnelle', difficulty: 'faible' },
        { keyword: 'NGO Dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'charity organizations UAE', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'how to start a charity in UAE', volume: 320, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "how to start a nonprofit", "charity near me", or "volunteer Dubai" represent potential donors, volunteers, and partners actively looking to engage. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your non-profit does not appear there, those supporters go to another organization.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for non-profits',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the budget constraints and compliance requirements of non-profits, charities, and NGOs across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by mission, cause, and action',
          'Schema.org NGO and NonprofitType markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation review',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the non-profit\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the organization\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for your cause',
        ],
      },
      {
        title: 'Market study & non-profit keyword research',
        subtitle: 'Mapping of search queries by cause, geographic area, and engagement type across US, UK, and UAE markets. Identification of high-potential gaps for donations, volunteering, and partnerships.',
        items: [
          'Cause + city combinations with low competition',
          'Analysis of queries asked to AI engines',
          'Real search volumes by cause and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed to guide visitors from discovering the cause to concrete engagement.',
        items: [
          'Mission page > impact page > donate page > volunteer page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Non-profit content strategy',
        subtitle: 'Creation of impact-driven content demonstrating the organization\'s results, written to be citable by LLMs and compliant with regulatory transparency requirements.',
        items: [
          'Impact reports with verifiable data and field testimonials',
          'Self-sufficient factual sentences with measurable outcomes',
          'Guides and FAQs answering Google People Also Ask (donations, grants, volunteering)',
        ],
      },
      {
        title: 'Authority & non-profit link building',
        subtitle: 'Authority development through qualified directories, institutional platforms, and specialized publications.',
        items: [
          'Charity Navigator, GuideStar, VolunteerMatch (US)',
          'Charity Commission, JustGiving, NCVO (UK)',
          'IACAD, Dubai Cares, Emirates Foundation (UAE)',
          'Press publications and institutional partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the organization\'s Google Business Profile to capture local queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Non-profit organization + secondary categories by activity',
          'Review management and collection strategy from beneficiaries and volunteers',
          'Photos of field actions, office hours, events',
          'Consistent NAP citations across non-profit directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by cause, and conversions (donations, volunteer sign-ups, partnership requests).',
        items: [
          'Google positions by keyword',
          'Organic traffic by cause area',
          'GEO Score: visibility in AI engines',
          'Conversions: online donations, volunteer sign-ups, partner contacts',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your team, board, or grant manager can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your organization\'s website: page architecture by mission and cause, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your non-profit in ChatGPT, Perplexity, and Gemini on your target cause-related queries. Benchmark against 3 to 5 peer organizations and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'NGO, NonprofitType, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your organization\'s mission and programs. Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of mission pages, impact reports, grant guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from non-profit directories (Charity Navigator, GuideStar, JustGiving), cause-related blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by cause page and local keyword, organic traffic by mission area, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your non-profit in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which charity should I support for animal welfare?", the LLM compiles information from across the web to formulate its response. If your organization does not appear in any cited source, it is invisible in this new supporter acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which charity should I donate to for children\'s education?": the LLM does not cite a specific organization. It provides a list of selection criteria (transparency, impact reports, overhead ratio, regulatory status) and redirects to aggregators: Charity Navigator, GuideStar, the Charity Commission, and GiveDirectly.</p><h4>Informational queries</h4><p>"How to start a nonprofit?" or "501(c)(3) vs charity: what\'s the difference?": the LLM generates a structured guide with 6 to 8 steps, without citing any specific organization. The non-profit that publishes this type of content on its website can be cited as a reference.</p><h4>Funding queries</h4><p>"How much does it cost to run a charity?": the LLM gives detailed ranges (USD 2,000 to USD 50,000 for incorporation and first-year costs in the US, GBP 1,000 to GBP 15,000 in the UK). Organizations providing precise, up-to-date operational data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "volunteer near me" or "charity food bank London", <strong>ChatGPT activates Search mode with a Maps card</strong>. Organizations with a complete Google Business Profile (category, recent reviews, photos of field actions) appear directly in the AI response.</p>',
    structuredData:
      '<p>For non-profits, the recommended schema.org types are: <code>NGO</code> (primary type), <code>NonprofitType</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>NGO</code> markup allows Google and LLMs to precisely identify the mission, geographic scope, and cause of the organization.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your organization\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content about your cause), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for non-profits',
    items: [
      {
        question: 'How much does SEO cost for a non-profit?',
        answer:
          'The SEO budget for a non-profit depends on the size of the organization, the number of causes it supports, and the geographic scope targeted. At Rankwell, SEO engagements for non-profits start from USD 1,500/month (or GBP 1,200/month) for a local single-cause organization, and can reach USD 4,000-6,000/month for a national multi-program charity. Google Ad Grants (USD 10,000/month in free ad credits) can complement the organic strategy.',
      },
      {
        question: 'How long does it take to see results from non-profit SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "food bank volunteering Chicago" or "animal rescue charity Manchester") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Do non-profits face specific SEO compliance constraints?',
        answer:
          'Yes. In the US, 501(c)(3) organizations must comply with IRS reporting obligations, and their tax-exempt status requires transparency in financial communications. In the UK, the Charity Commission mandates annual reporting and accounts publication for charities above GBP 25,000 in income. In the UAE, IACAD (Islamic Affairs and Charitable Activities Department) regulates charitable activities with strict licensing requirements. Rankwell turns these transparency obligations into SEO assets: published impact reports and audited accounts become factual content that AI engines cite preferentially.',
      },
      {
        question: 'Does a non-profit need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when well executed. Articles should answer real questions from donors, volunteers, and beneficiaries (inspired by Google People Also Ask), demonstrate measurable impact, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries such as "how to claim Gift Aid" or "how to write a nonprofit grant proposal".',
      },
      {
        question: 'How can a non-profit appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a non-profit must accumulate web authority signals: presence on directories (Charity Navigator, GuideStar, JustGiving), mentions in press and institutional publications, an optimized Google Business Profile, and rich factual content on its website with published impact data. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a non-profit?',
        answer:
          'Local SEO targets "charity + cause + city" queries and relies on Google Business Profile, reviews, and local citations. It suits community-based organizations (food banks, shelters, local volunteer groups). National SEO targets generic queries ("best children\'s charities") and requires high-authority educational content. Rankwell combines both approaches based on the organization\'s scope of action.',
      },
      {
        question: 'Are Charity Navigator, JustGiving, and donation platforms enough to be visible?',
        answer:
          'Platforms like Charity Navigator, JustGiving, and GoFundMe are useful for initial visibility and fundraising, but they create dependency: the organization is just one profile among thousands. A well-optimized website allows the non-profit to control its narrative, convert visitors directly into donors or volunteers, and build lasting authority that platforms cannot revoke. Rankwell helps non-profits build this independent presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your non-profit visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to your organization\'s budget.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
        { label: 'SEO Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
        { label: 'SEO Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
      ],
      projets: [
        { label: 'SEO Corporate Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/website-redesign' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
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
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Videographer', href: '/en/geo-seo-agency/sectors/videographer' },
      { label: 'Personal Trainer', href: '/en/geo-seo-agency/sectors/personal-trainer' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/printer' },
    ],
  },

  // Schema.org primary type
  schemaType: 'NGO',
};

export default data;
