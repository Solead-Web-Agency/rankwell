/**
 * DATA: Sector Page Property Managers / Syndics (EN)
 * Route: /en/geo-seo-agency/sectors/property-manager
 *
 * Adapted for US / UK / UAE markets
 * US: HOA management, condo association, property management company
 * UK: managing agent, block management, ARMA
 * UAE: owners association, community management, RERA
 * Keyword data: Ahrefs seed "property manager" + industry calibration, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'property-manager',
    title: 'GEO & SEO Agency for Property Managers - Rankwell',
    description:
      'Rankwell helps property management companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for HOA management, block management, and owners associations.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Property Managers' },
    ],
    title: 'GEO & SEO for Property Managers: Google & AI Engine Visibility',
    subtitle:
      'Board members and homeowners compare property management companies online before voting at the annual meeting. Our experts design GEO & SEO strategies tailored to the constraints of residential property management, HOA administration, and block management.',
    ctaText: 'Request a GEO & SEO audit for your property management company',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for property managers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 65% of property management queries include a city or "near me"</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where visibility in the Local Pack directly determines whether an HOA management company, managing agent, or owners association manager wins the contract.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Property management is a regulated, contract-driven industry</strong> with annual renewal cycles. US HOA boards follow state-specific statutes (Davis-Stirling, Chapter 720), UK firms need ARMA/RICS standards, and UAE managers require RERA registration. Content covering these frameworks builds credibility with selection committees.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HOA Management (.com), CINC Systems</strong> (US), <strong class="text-secondary dark:text-accent">HomeOwners Alliance, ARMA directory</strong> (UK), <strong class="text-secondary dark:text-accent">Bayut, Property Finder</strong> (UAE) capture a growing share of traffic. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a property management firm stays invisible against these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs are becoming a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s local pack.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'Learn more about local SEO',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future clients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'property management companies', volume: 33100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'HOA management company', volume: 12100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'property management near me', volume: 27100, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'condo management company', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'HOA management fees', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'how to change HOA management company', volume: 3600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'best property management company near me', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'property management company', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'block management company', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'managing agent', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'leasehold management company', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'service charge dispute', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'right to manage', volume: 2900, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'ARMA managing agent near me', volume: 720, intent: 'locale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'property management dubai', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'owners association dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'community management dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'RERA property management', volume: 880, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'villa management dubai', volume: 720, intent: 'locale', difficulty: 'faible' },
        { keyword: 'building management company UAE', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'property management fees dubai', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, tens of thousands of searches like "property management companies", "block management company", or "owners association dubai" represent board members and homeowners actively seeking a new management firm. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your company does not appear there, those contracts go to a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for property management companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the contract-driven dynamics and regulatory constraints of property management across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation on property management queries.',
        items: [
          'Page structure by property type (HOA, condo, co-op, leasehold, freehold)',
          'Schema.org RealEstateAgent and LocalBusiness markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of service area pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the firm\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the firm\'s informational universe',
          'Measurement of legitimacy and citability in AI responses',
          'Evaluation of content factual density (fees, procedures, regulatory obligations)',
          'Competitive benchmark against local and national property management firms',
        ],
      },
      {
        title: 'Market study & property management keyword research',
        subtitle: 'Mapping of search queries by geographic area, property type, and management model across US, UK, and UAE markets. Identification of high-potential gaps where competition is low.',
        items: [
          'Property type + city combinations (HOA + city, block management + borough)',
          'Queries related to switching management companies and competitive bidding',
          'Analysis of questions asked to AI engines about property management',
          'Real search volumes by geographic area and management type',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the decision journey of board members comparing proposals.',
        items: [
          'Service area page > management offering page > quote request page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Dedicated pages by property type, management model, and city',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Property management content strategy',
        subtitle: 'Creation of educational content demonstrating the firm\'s expertise in residential property management, written to be citable by LLMs.',
        items: [
          'Guides on switching management companies and competitive bidding processes',
          'FAQs on service charges, maintenance, annual meetings, and reserve funds',
          'Self-sufficient factual sentences with verifiable data (fee structures, legal deadlines)',
          'Content adapted to regulatory requirements by market (HOA statutes, ARMA standards, RERA rules)',
        ],
      },
      {
        title: 'Authority & property management link building',
        subtitle: 'Authority development through qualified industry directories and specialized publications.',
        items: [
          'CAI (Community Associations Institute), NARPM, IREM listings (US)',
          'ARMA, RICS, Propertymark directories (UK)',
          'RERA-registered firms directory, Dubai Land Department resources (UAE)',
          'Local press publications and partnerships with real estate attorneys, accountants',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the firm\'s Google Business Profile to capture local "property management + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Property Management Company + secondary categories',
          'Review management and post-annual-meeting collection strategy',
          'Photos of the office, managed properties, and team',
          'Consistent NAP citations across real estate and professional directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by geographic area, and quote requests generated.',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by service area page',
          'GEO Score: visibility in AI engines',
          'Quote requests and management contracts signed',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, operations staff, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your firm\'s website: page architecture by property type and service area, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your firm in ChatGPT, Perplexity, and Gemini on your target property management queries. Benchmark against 3 to 5 competing firms and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'RealEstateAgent, LocalBusiness, Service, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your geographic coverage and property types managed. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service area pages, management guides, FAQs on service charges and annual meetings, and board member resources. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from industry directories (CAI, ARMA, RERA), property management blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your firm.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service area and local keyword, organic traffic by property type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your firm in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a homeowner asks ChatGPT "which property management company do you recommend in Miami?", the LLM compiles information from across the web to formulate its response. If your firm does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which HOA management company do you recommend in Miami?": the LLM does not cite a specific firm. It provides a list of 5 to 7 selection criteria (fee transparency, communication responsiveness, financial reporting quality, technology platform, community size experience) and redirects to directories: CAI, NARPM, Google Maps, and review aggregators. Large national firms (FirstService Residential, Associa, RealManage) are mentioned generically due to their web footprint, but no local firm is named.</p><h4>Informational queries</h4><p>"How to choose a good property management company?" or "HOA management vs self-management": the LLM generates a structured guide with 6 to 8 criteria without citing any specific firm. It details the distinction between professional management (licensed, insured, financial reporting, vendor management) and self-managed associations (volunteer board, no management fee, higher personal liability). Third-party management and portfolio size are mentioned as evaluation factors.</p><h4>Pricing queries</h4><p>"How much does HOA management cost per unit?": the LLM gives precise ranges: USD 10 to 25 per unit per month for US HOA management, GBP 200 to 500 per unit per year for UK block management, and AED 3 to 8 per square foot per year for UAE community management. Firms publishing transparent fee structures on their website have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "property management company near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Firms with a complete Google Business Profile (category Property Management Company, recent reviews, service area defined) appear directly in the AI response.</p>',
    structuredData:
      '<p>For property management companies, the recommended schema.org types are: <code>RealEstateAgent</code> (primary type), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>RealEstateAgent</code> markup allows Google and LLMs to precisely identify the service area, types of properties managed, and client reviews of the firm.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your firm\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on property management topics), Legitimacy & Citability (external trust signals: CAI/ARMA/RERA membership, industry press, reviews), and Factual Density (richness of structured data and named entities: fee schedules, regulatory references, service area data).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for property managers',
    items: [
      {
        question: 'How much does SEO cost for a property management company?',
        answer:
          'The SEO budget for a property management firm depends on the number of cities covered and the portfolio size targeted. At Rankwell, SEO engagements for property managers start from USD 2,000/month (or GBP 1,600/month) for a single geographic area, and can reach USD 5,000-7,000/month for a multi-office firm covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from property management SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "HOA management Austin" or "block management Islington") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis of your market.',
      },
      {
        question: 'How do annual contract renewals affect property management SEO?',
        answer:
          'The annual renewal cycle creates predictable prospection windows: each year, thousands of HOA boards, leaseholders exercising the right to manage, and owners associations in the UAE review their management contracts. Rankwell times content publication and local SEO efforts to align with these decision periods, positioning your firm on competitive bidding and management switch queries at the moment boards are actively searching.',
      },
      {
        question: 'Does a property management firm need a blog to improve rankings?',
        answer:
          'A blog focused on residential property management is a powerful lever when well executed. Articles should answer real questions from board members and homeowners: how to switch management companies, reserve fund best practices, annual meeting procedures, and maintenance planning. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a property management company appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a property management firm must accumulate web authority signals: presence on industry directories (CAI, ARMA, RERA), mentions in property management press, an optimized Google Business Profile, and rich factual content on its website (fee structures, regulatory guides, service area data). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a property manager?',
        answer:
          'Local SEO targets "property management + city" or "HOA management + neighborhood" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best HOA management company", "how to choose a property manager") and requires high-authority educational content. Rankwell combines both approaches based on the firm\'s growth strategy.',
      },
      {
        question: 'Are industry directories like CAI and ARMA enough to be visible?',
        answer:
          'Industry directories like CAI, ARMA, and RERA listings are useful for initial credibility and backlinks, but they create dependency: your firm is just one entry among hundreds. A well-optimized website allows you to control your brand narrative, convert directly, and build lasting authority that directories cannot revoke. Rankwell helps property management firms build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your property management firm visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to the property management sector.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
        { label: 'SEO Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
        { label: 'SEO Architect', href: '/en/geo-seo-agency/sectors/architect' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Webflow', href: '/en/geo-seo-agency/cms/webflow' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/en/glossary/geo' },
        { label: 'GEO Audit', href: '/en/glossary/audit-geo' },
        { label: 'Local SEO', href: '/en/glossary/seo-local' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Real Estate Agency', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
      { label: 'Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Electrician', href: '/en/geo-seo-agency/sectors/electrician' },
      { label: 'Plumber', href: '/en/geo-seo-agency/sectors/plumber' },
    ],
  },

  // Schema.org primary type
  schemaType: 'RealEstateAgent',
};

export default data;
