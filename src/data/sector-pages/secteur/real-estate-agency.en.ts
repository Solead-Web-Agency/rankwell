/**
 * DATA: Sector Page Real Estate Agencies (EN)
 * Route: /en/geo-seo-agency/sectors/real-estate-agency
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (Virtuance, Helio, Promodo), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'real-estate-agency',
    title: 'GEO & SEO Agency for Real Estate Agents - Rankwell',
    description:
      'Rankwell helps real estate agencies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the real estate industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Real Estate Agencies' },
    ],
    title: 'GEO & SEO for Real Estate: Google & AI Engine Visibility',
    subtitle:
      'Your future buyers and sellers search for agents on Google and in ChatGPT responses. Our experts design GEO & SEO strategies tailored to the hyper-local dynamics of the real estate market.',
    ctaText: 'Request a GEO & SEO audit for your real estate agency',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for real estate agencies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">74,000 monthly searches for "real estate agent" and 22,200 for "near me" in the US alone</strong>. This is a hyper-local market where the decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Inventory changes constantly</strong>: listings published and removed each month create ephemeral URLs, cascading 404 pages, and wasted crawl budget. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must maintain indexation quality while navigating US state licensing, UK NAEA standards, and UAE RERA registration.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zillow, Realtor.com, Redfin</strong> (US), <strong class="text-secondary dark:text-accent">Rightmove, Zoopla</strong> (UK), <strong class="text-secondary dark:text-accent">Property Finder, Bayut</strong> (UAE) dominate high-intent property queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an agency stays invisible against these portals.',
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
        { keyword: 'real estate agent', volume: 74000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'real estate agents near me', volume: 22200, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'homes for sale near me', volume: 368000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'how much is my house worth', volume: 22400, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'sell my house for cash', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'best real estate agent near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'commercial real estate agent', volume: 8100, intent: 'commerciale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'estate agents near me', volume: 53000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'houses for sale near me', volume: 368000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'house valuation', volume: 49500, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'property for sale', volume: 135000, intent: 'transactionnelle', difficulty: 'très élevée' },
        { keyword: 'how much is my house worth', volume: 22200, intent: 'informationnelle', difficulty: 'élevée' },
        { keyword: 'letting agents near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'sold house prices', volume: 9900, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'apartments for sale dubai', volume: 40500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'dubai house for sale', volume: 49500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'buying property in dubai', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'real estate agents in dubai', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'dubai real estate investment', volume: 14800, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'off-plan property dubai', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'property valuation dubai', volume: 480, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "homes for sale near me", "estate agents near me", or "apartments for sale dubai" represent buyers and sellers actively looking for property services. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your agency does not appear there, those clients go to a portal or a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for real estate agencies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the challenges of managing rotating property inventories and hyper-local competition across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, expired listing management (301 vs 404 vs soft-404), and technical factors blocking crawl efficiency on property catalog pages.',
        items: [
          'URL management for sold or expired listings',
          'Schema.org RealEstateAgent and Offer markup',
          'Performance and Core Web Vitals on listing pages',
          'Crawl budget: selective indexation of the property catalog',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the agency\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the agency\'s informational universe',
          'Measurement of legitimacy and citability on local queries',
          'Evaluation of content factual density (neighborhoods, pricing, trends)',
          'Competitive benchmark on AI-driven property queries',
        ],
      },
      {
        title: 'Market study & real estate keyword research',
        subtitle: 'Mapping of search queries by transaction type (sale, rental, valuation), property type, and geographic area across US, UK, and UAE markets.',
        items: [
          'Transaction + property type + city combinations with low competition',
          'Analysis of queries asked to AI engines ("best real estate agent in...")',
          'Real search volumes by neighborhood and district',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for conversion: neighborhood page > property type page > valuation page > contact page.',
        items: [
          'Neighborhood pages optimized with price per sqft/sqm, trends, amenities',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by geographic zone',
        ],
      },
      {
        title: 'Real estate content strategy',
        subtitle: 'Creation of educational content demonstrating the agency\'s local expertise: neighborhood guides, market analyses, buyer/seller advice, written to be citable by LLMs.',
        items: [
          'Neighborhood guides with data (median price, price trends, schools, transport)',
          'Self-sufficient factual sentences: local market trends, average days on market',
          'Buyer and seller FAQs answering Google People Also Ask',
        ],
      },
      {
        title: 'Authority & real estate link building',
        subtitle: 'Authority development through property portals, local press, and institutional partnerships.',
        items: [
          'Optimized profiles on Zillow, Realtor.com, Redfin (US)',
          'Rightmove, Zoopla, OnTheMarket listings (UK)',
          'Property Finder, Bayut profiles (UAE)',
          'Local press publications and partnerships with mortgage brokers, solicitors',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the agency\'s Google Business Profile to capture local "real estate agent + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Real estate agency + secondary categories (property management, valuation)',
          'Client review management and post-transaction collection strategy',
          'Photos of the office, sold properties, neighborhoods covered',
          'Consistent NAP citations across property directories and local listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by geographic zone, and leads generated (valuations, viewing requests, instructions).',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by transaction type (sales, lettings, valuations)',
          'GEO Score: visibility in AI engines',
          'Leads generated and conversion rate by channel',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, agents, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your agency\'s website: page architecture for listings and neighborhoods, loading speed, Google indexation of the property catalog, expired listing handling, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your agency in ChatGPT, Perplexity, and Gemini on your target property queries. Benchmark against 3 to 5 competing agencies and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'RealEstateAgent, Offer, Place, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your geographic coverage and property types. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of neighborhood guides, buyer/seller guides, market analysis articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from property portals (Zillow, Rightmove, Property Finder), real estate blogs, and local press. Tracking of links obtained and Domain Rating progression of your agency.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by neighborhood and local keyword, organic traffic by transaction type, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your agency in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which real estate agent do you recommend in New York?" or "how to find the best estate agent in London?", the LLM compiles information from across the web to formulate its response. If your agency does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which real estate agent do you recommend in New York?": the LLM does not cite a specific local agent. It provides a list of selection criteria (local market knowledge, transaction volume, client reviews, commission transparency) and redirects to portals: Zillow, Realtor.com, Redfin, and Google Maps. National franchises (Compass, Keller Williams, Douglas Elliman) are mentioned generically due to their massive web footprint, but no independent local agency is named.</p><h4>Informational queries</h4><p>"How to choose a good estate agent to sell my house?": the LLM generates a structured checklist with 7 to 8 criteria, without citing any agency. It systematically references commission structures (including the 2024 NAR settlement for the US, sole agency vs multi-agency for the UK). The agency that publishes this type of content on its website positions itself as a citable source.</p><h4>Comparative queries</h4><p>"Real estate agent vs property portal: should I sell privately?": this generates the most brand citations. The LLM names 5 to 6 platforms (Zillow, Rightmove, Zoopla, Property Finder, Purplebricks, Redfin) and compares traditional agents, hybrid models, and FSBO. Comparative content on an agency\'s website has the highest chance of being extracted by the LLM.</p><h4>Local and Maps queries</h4><p>On "real estate agent near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Agencies with a complete Google Business Profile (category, recent reviews, photos) appear directly in the AI response. The Zillow-ChatGPT integration also surfaces live listing data directly within the conversation.</p>',
    structuredData:
      '<p>For real estate agencies, the recommended schema.org types are: <code>RealEstateAgent</code> (primary type), <code>Offer</code> (for listed properties), <code>Place</code> (for neighborhoods and cities covered), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>RealEstateAgent</code> markup allows Google and LLMs to precisely identify the geographic coverage, services offered (sales, lettings, property management), and client reviews of the agency.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your agency\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on neighborhoods and the local market), Legitimacy & Citability (external trust signals: reviews, portal presence, press mentions), and Factual Density (richness of structured data and named entities: price per sqft, transaction volumes, market trends).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for real estate agencies',
    items: [
      {
        question: 'How much does SEO cost for a real estate agency?',
        answer:
          'The SEO budget for a real estate agency depends on the number of cities covered and the scope of services (sales, lettings, property management). At Rankwell, SEO engagements for real estate agencies start from USD 2,000/month (or GBP 1,600/month) for a single geographic area, and can reach USD 6,000-8,000/month for a multi-office agency covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from real estate SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "estate agent Clapham" or "realtor Upper East Side") are faster to rank for than nationally competitive terms dominated by Zillow or Rightmove. Rankwell provides a realistic timeline based on the initial competitive analysis of your market.',
      },
      {
        question: 'How should we handle expired listings without losing SEO value?',
        answer:
          'Sold or delisted properties generate 404 pages that waste crawl budget and degrade user experience. Rankwell implements 301 redirects to the corresponding neighborhood or property type page, a dynamic sitemap that excludes expired listings, and schema.org Offer markup with "Sold" status for completed transactions, which enriches transaction signals for Google and LLMs.',
      },
      {
        question: 'Does a real estate agency need a blog to improve rankings?',
        answer:
          'A real estate blog is a powerful lever when well executed. Articles should answer real questions from buyers and sellers (median price by neighborhood, local market trends, tips for selling fast), demonstrate verifiable local expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries tied to your coverage areas.',
      },
      {
        question: 'How can a real estate agency appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a real estate agency must accumulate web authority signals: presence on property portals (Zillow, Rightmove, Property Finder), high volume of recent Google reviews, an optimized Google Business Profile, and rich factual content on the local market (neighborhood guides, pricing data, market analysis). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a real estate agency?',
        answer:
          'Local SEO targets "real estate agent + city" or "estate agent + neighborhood" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("home value estimator", "how to sell a house") and requires high-authority data-driven content. Rankwell combines both approaches based on the agency\'s growth strategy.',
      },
      {
        question: 'Are Zillow, Rightmove, and property portals enough to be visible?',
        answer:
          'Property portals like Zillow, Rightmove, or Property Finder are useful for listing distribution, but they create costly dependency: the agency pays for each listing and is just one profile among thousands. A well-optimized agency website allows direct lead generation at zero marginal cost, full brand control, and lasting local authority that portals cannot revoke. Rankwell helps real estate agencies build this independent organic visibility through a GEO & SEO strategy that progressively reduces reliance on paid portals.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your real estate agency visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan adapted to your geographic coverage.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
        { label: 'SEO Property Inspector', href: '/en/geo-seo-agency/sectors/property-inspector' },
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
      { label: 'Property Developer', href: '/en/geo-seo-agency/sectors/property-developer' },
      { label: 'Property Inspector', href: '/en/geo-seo-agency/sectors/property-inspector' },
      { label: 'Property Manager', href: '/en/geo-seo-agency/sectors/property-manager' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/lawyer' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/accountant' },
      { label: 'Bank', href: '/en/geo-seo-agency/sectors/bank' },
      { label: 'Insurance', href: '/en/geo-seo-agency/sectors/insurance' },
    ],
  },

  // Schema.org primary type
  schemaType: 'RealEstateAgent',
};

export default data;
