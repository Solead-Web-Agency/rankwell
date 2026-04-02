/**
 * DATA: Sector Page Banks (EN)
 * Route: /en/geo-seo-agency/sectors/bank
 *
 * Financial sector: retail banks, online banks, neobanks, business banks.
 * Adapted for US / UK / UAE markets.
 * Keyword data: Ahrefs + industry sources (NerdWallet, Bankrate, MoneySavingExpert), March 2026
 * LLM tests: ChatGPT anonymous mode, 4 queries, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bank',
    title: 'GEO & SEO Agency for Banks - Rankwell',
    description:
      'Rankwell helps banks boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the banking industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Banks' },
    ],
    title: 'GEO & SEO for Banks: Google & AI Engine Visibility',
    subtitle:
      'Your future customers compare banks on Google and ask ChatGPT before choosing. Our experts design GEO & SEO strategies tailored to the regulatory constraints of the banking sector across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your bank',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for banks',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 450,000 monthly searches for "best online bank" in the US</strong>. Banking splits between national comparison queries and <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> queries to find a nearby branch. The decision often happens on a comparison site or in an AI engine response.',
    constraints:
      'Banking is classified <strong class="text-secondary dark:text-accent">YMYL (Your Money or Your Life)</strong> by Google, triggering the highest E-E-A-T bar. Content must comply with FDIC disclosures (US), FCA conduct rules (UK), and CBUAE regulations (UAE). Every product page must display accurate fee schedules and APY rates.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">NerdWallet, Bankrate, Forbes Advisor</strong> (US), <strong class="text-secondary dark:text-accent">MoneySavingExpert, CompareTheMarket</strong> (UK), and <strong class="text-secondary dark:text-accent">Bayzat</strong> (UAE) dominate comparison banking queries. Neobanks (Chime, Monzo, Starling) also capture massive organic visibility. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a bank stays invisible against these players.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'According to Rankwell, E-E-A-T signals do not only serve to satisfy Google\'s Quality Raters. They constitute the primary criterion by which AI engines select their sources, favoring content that demonstrates verifiable expertise and documented experience rather than mere domain authority.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'Learn more about E-E-A-T',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'best online bank', volume: 450000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'best bank for small business', volume: 74000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'checking account', volume: 33000, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'high yield savings account', volume: 165000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'bank near me', volume: 823000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how to open a bank account', volume: 22200, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best free checking account', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'best bank account UK', volume: 22200, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'best online bank UK', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'business bank account', volume: 14800, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'bank near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best savings account UK', volume: 49500, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'how to switch bank account', volume: 5400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'bank open on Saturday', volume: 3600, intent: 'locale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'best bank in UAE', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'bank account Dubai', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best savings account UAE', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'business bank account Dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'Islamic bank UAE', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to open bank account UAE', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'bank near me Dubai', volume: 1300, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "best online bank", "bank near me", or "best bank in UAE" represent consumers and businesses actively comparing financial institutions. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your bank does not appear there, those potential customers go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for banks',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints and competitive landscape of the banking sector across the US, UK, and UAE.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the bank\'s website architecture, loading speed, and technical factors blocking indexation of product pages.',
        items: [
          'Page structure by product line (checking, savings, loans, credit cards)',
          'Schema.org BankOrCreditUnion and FinancialProduct markup',
          'Performance and Core Web Vitals on application and onboarding flows',
          'Crawl and indexation of fee schedule pages and calculators',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the bank\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the bank\'s informational universe',
          'Measurement of legitimacy and citability on banking queries',
          'Evaluation of factual density (fees, rates, product comparisons)',
          'Competitive benchmark against neobanks and comparison platforms',
        ],
      },
      {
        title: 'Market study & banking keyword research',
        subtitle: 'Mapping of search queries by banking product and geographic area across US, UK, and UAE markets. Identification of high-conversion comparison queries.',
        items: [
          'Product + intent combinations ("best business checking account", "high yield savings")',
          'Analysis of queries asked to AI engines about banking products',
          'Real search volumes by product family (checking, savings, loans, credit cards)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the banking customer journey and Google crawl efficiency.',
        items: [
          'Product category page > product page > calculator > application flow',
          'Primary keyword + 3-5 secondary keywords per product page',
          'Title tag, meta description, and heading optimization with banking terminology',
        ],
      },
      {
        title: 'Banking content strategy',
        subtitle: 'Creation of educational content demonstrating the bank\'s expertise, written to be citable by LLMs on financial queries.',
        items: [
          'Guides and comparisons ("how to choose a bank", "checking vs savings account")',
          'Product comparisons with up-to-date fee and rate data',
          'Compliance with FDIC disclosure rules (US), FCA requirements (UK), CBUAE standards (UAE)',
        ],
      },
      {
        title: 'Authority & financial link building',
        subtitle: 'Authority development through qualified financial directories and specialized publications.',
        items: [
          'Presence on reference comparison platforms (NerdWallet, Bankrate, MoneySavingExpert)',
          'Publications in financial press and industry outlets',
          'Partnerships with institutional sites (FDIC, FCA, banking associations)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of each branch\'s Google Business Profile to capture "bank near me" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Bank + secondary categories by service (mortgage lender, wealth management)',
          'Client review management and collection strategy per branch',
          'Photos, opening hours (including Saturday), attributes, and regular posts',
          'Consistent NAP citations across financial directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by banking product, and account applications generated.',
        items: [
          'Google positions by keyword and product line',
          'Organic traffic by product family',
          'GEO Score: visibility in AI engines',
          'Applications and conversions by organic channel',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your SEO team, compliance department, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of the bank\'s website: page architecture by product line (checking, savings, loans, credit cards), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your bank in ChatGPT, Perplexity, and Gemini on your target banking queries. Benchmark against 3 to 5 competing institutions and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'BankOrCreditUnion, FinancialProduct, FAQPage, and BreadcrumbList markup ready to integrate, adapted to each product line. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of product pages (checking accounts, savings, loans), financial guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from financial comparison platforms (NerdWallet, Bankrate, MoneySavingExpert), finance blogs, and specialized press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by product page and local keyword, organic traffic by banking product, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your bank in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which bank do you recommend for a small business?", the LLM compiles information from across the web to formulate its response. If your institution does not appear in any cited source, it is invisible in this new acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which bank do you recommend for a small business in the US?": the LLM generates a list of 5 to 7 banks segmented by business size (sole proprietor, LLC, startup, established company). It cites specific names (Chase, Mercury, Bluevine, Relay, Bank of America) with selection criteria: monthly fees, transaction limits, integrated accounting tools, FDIC insurance status. Neobanks systematically dominate recommendations for startups and solopreneurs.</p><h4>Comparison queries</h4><p>"Online bank vs traditional bank" or "best savings account UK 2026": the LLM structures a comparative table across 5 to 6 dimensions (fees, branch access, interest rates, mobile app, security, customer service). It provides specific rate ranges (0.01% to 0.05% APY at traditional banks, 4% to 5% APY at online banks) and cites NerdWallet, Bankrate (US) or MoneySavingExpert (UK) as reference sources.</p><h4>Informational queries</h4><p>"How to choose a good bank?": the LLM produces a structured guide with 7 to 9 criteria without citing any specific bank or external source. Institutions publishing this type of guide with real comparative data are positioned to be extracted as a reference source.</p><h4>Local and Maps queries</h4><p>On "bank near me open on Saturday", <strong>ChatGPT activates Search mode with a Maps card</strong>. Branches with a complete Google Business Profile (Saturday hours specified, recent reviews, Bank category) appear directly in the AI response. In the US, Chase, Bank of America, and Wells Fargo networks are the most visible for Saturday hours. In the UK, building societies like Nationwide and selected Barclays or HSBC branches appear.</p>',
    structuredData:
      '<p>For banks, the recommended schema.org types are: <code>BankOrCreditUnion</code> (primary institution type), <code>FinancialProduct</code> (for each product: checking, savings, loans, credit cards), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>BankOrCreditUnion</code> markup allows Google and LLMs to precisely identify the services offered, branch locations, and financial products available.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your bank\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of banking content), Legitimacy & Citability (external trust signals, presence on comparison platforms, press mentions), and Factual Density (richness of structured data: fee schedules, rates, product specifications).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for banks',
    items: [
      {
        question: 'How much does SEO cost for a bank?',
        answer:
          'The SEO budget for a bank depends on the number of products, branch locations, and geographic scope targeted. At Rankwell, SEO engagements for banking institutions start from USD 3,000/month (or GBP 2,400/month) for a focused product range, and can reach USD 10,000-15,000/month for a multi-branch network with integrated content strategy across several regions.',
      },
      {
        question: 'How long does it take to see results from banking SEO?',
        answer:
          'Initial results typically appear between 4 and 8 months depending on competition. Niche queries ("best business checking account for LLC", "Islamic savings account UAE") are faster to rank for than ultra-competitive terms like "best online bank". Rankwell provides a realistic timeline based on the initial competitive analysis and your current rankings.',
      },
      {
        question: 'Is banking SEO compatible with financial regulations?',
        answer:
          'SEO is fully compatible with banking regulations, provided content includes required disclosures. In the US, FDIC insurance notices, Truth in Savings Act disclosures, and Regulation DD requirements must appear on product pages. In the UK, the FCA and PRA require clear, fair, and not misleading financial promotions. In the UAE, the CBUAE mandates specific consumer protection disclosures. Rankwell understands these constraints and adapts every content strategy accordingly.',
      },
      {
        question: 'Does a bank need a blog to improve rankings?',
        answer:
          'An editorial section is a powerful lever for banks, provided it covers topics actively searched by customers: account comparisons, savings guides, fee breakdowns, credit score advice. Articles must contain up-to-date figures and verifiable data to be citable by AI engines. Rankwell recommends 3 to 6 articles per month targeting informational queries with strong intent.',
      },
      {
        question: 'How can a bank appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a bank must accumulate web authority signals: presence on financial comparison platforms (NerdWallet, Bankrate, MoneySavingExpert), mentions in financial press, structured fee and rate data on its website, and optimized Google Business Profiles per branch. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a bank?',
        answer:
          'Local SEO targets "bank near me" and "bank open on Saturday" queries by leveraging each branch\'s Google Business Profile, client reviews, and local citations. National SEO targets comparison queries ("best online bank", "best savings account") and requires high-authority educational and comparative content. Rankwell combines both approaches based on your institution\'s strategy.',
      },
      {
        question: 'Are comparison platforms enough to be visible as a bank?',
        answer:
          'Comparison platforms like NerdWallet, Bankrate, or MoneySavingExpert are useful for initial visibility, but they create dependency: your bank is just one line in a table among dozens. A well-optimized website allows the institution to control its brand image, convert directly, and build lasting authority that comparison platforms cannot revoke. Rankwell helps banks build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your bank visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
        { label: 'SEO Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
        { label: 'SEO Notary', href: '/en/geo-seo-agency/sectors/notary' },
        { label: 'SEO Real Estate', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Drupal', href: '/en/geo-seo-agency/cms/drupal' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'GEO Audit', href: '/en/glossary/audit-geo' },
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notary' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
    ],
  },

  // Schema.org primary type
  schemaType: 'BankOrCreditUnion',
};

export default data;
