/**
 * DATA: Sector Page Printers (EN)
 * Route: /en/geo-seo-agency/sectors/printer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs Keywords Explorer (US, GB, AE), March 2026
 * Auto-test LLM: 5 queries tested, report in rapport-test-imprimeur-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'printer',
    title: 'GEO & SEO Agency for Printers - Rankwell',
    description:
      'Rankwell helps printing companies boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the commercial printing industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Printers' },
    ],
    title: 'GEO & SEO for Printers: Google & AI Engine Visibility',
    subtitle:
      'Your clients search for a local print shop on Google and in ChatGPT responses. Our experts design GEO & SEO strategies tailored to the specific challenges of the commercial printing industry.',
    ctaText: 'Request a GEO & SEO audit for your print shop',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for printers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 110,000 monthly searches for "print shop near me" in the US alone</strong>. This is a local SEO market where the purchase decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Online printing giants like Vistaprint and Moo dominate transactional queries</strong>. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must position a local printer on proximity, technical expertise (offset, screen printing, large format), and personalized service.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vistaprint, Moo, Shutterfly</strong> (US/UK), <strong class="text-secondary dark:text-accent">Instantprint, Solopress</strong> (UK), <strong class="text-secondary dark:text-accent">Al Reyami, Horizon Printing</strong> (UAE) dominate high-volume queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a local printer stays invisible against these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct, measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from Google\'s Local Pack.',
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
        { keyword: 'print shop near me', volume: 110000, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'printing company near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'commercial printer', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'custom printing', volume: 14800, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'large format printing', volume: 12100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'business card printing', volume: 33100, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'how to choose a printing company', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'print shop near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'printing company near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'commercial printing services', volume: 2400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'large format printing', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'business card printing', volume: 9900, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'flyer printing', volume: 8100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'offset printing vs digital printing', volume: 720, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'printing company dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'printing press dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'business card printing dubai', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'large format printing dubai', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'printing services abu dhabi', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'banner printing dubai', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'custom packaging printing UAE', volume: 590, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 110,000 people search "print shop near me" in the US alone, and thousands more type "printing company near me" or "printing press dubai". These are clients ready to order: business cards, flyers, banners, brochures. The majority click on the top 3 local results, or follow the recommendation of an AI engine. If your print shop does not appear there, those orders go to a competitor or an online platform.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for printing companies',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the competitive dynamics of the commercial printing industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of product and service pages.',
        items: [
          'Page structure by product type (business cards, flyers, banners, brochures, packaging)',
          'Schema.org LocalBusiness and ProfessionalService markup',
          'Performance and Core Web Vitals on catalog pages',
          'Crawl and indexation review of product pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your print shop\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the print shop\'s informational universe',
          'Measurement of legitimacy and citability against online platforms',
          'Evaluation of content factual density (pricing, turnaround times, certifications)',
          'Competitive benchmark on local and transactional AI queries',
        ],
      },
      {
        title: 'Market study & printing keyword research',
        subtitle: 'Mapping of search queries by print product type and geographic area across US, UK, and UAE markets. Identification of low-competition niches (large format, screen printing, specialty finishes).',
        items: [
          'Product + city combinations with low competition',
          'Analysis of queries asked to AI engines about printing',
          'Real search volumes by printing specialty and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the buyer journey: from product search to quote request.',
        items: [
          'Category page > product page > quote / order page',
          'Primary keyword + 3-5 secondary keywords per product page',
          'Title tag, meta description, and heading optimization for each product range',
        ],
      },
      {
        title: 'Content strategy for the printing industry',
        subtitle: 'Creation of educational content demonstrating the printer\'s technical expertise, written to be citable by LLMs.',
        items: [
          'Practical guides: how to prepare a print file, offset vs digital, choosing the right paper weight',
          'Self-sufficient factual sentences with verifiable data (paper weights, formats, turnaround times)',
          'Transparent comparisons: local print shop vs online platform, offset vs digital printing',
        ],
      },
      {
        title: 'Authority & industry link building',
        subtitle: 'Authority development through professional directories, trade associations, and partnerships with creative professionals.',
        items: [
          'Professional directories: Better Business Bureau, local Chamber of Commerce, Yelp',
          'Trade associations: PIA (US), BPIF/Smithers (UK), Dubai Print Awards (UAE)',
          'Cross-references with graphic designers, marketing agencies, event planners',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the print shop\'s Google Business Profile to capture local "printer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Printing Service + secondary categories (Copy Shop, Graphic Designer)',
          'Client review management and collection strategy',
          'Photos of the workshop, printing equipment, and finished client projects',
          'Consistent NAP citations across professional and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by product type, and quote requests generated.',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by printing product category',
          'GEO Score: visibility in AI engines',
          'Quote requests and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your marketing team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your website: page architecture by product type and printing service, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your print shop in ChatGPT, Perplexity, and Gemini on your target printing queries. Benchmark against 3 to 5 local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'LocalBusiness, Service, and FAQPage markup ready to integrate, covering all your printing services (offset, digital, large format). Delivered with a CMS integration guide (WordPress, Shopify, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of pages by print product type (offset, digital, large format, packaging), articles on paper selection and print specifications, and FAQs. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from printing trade directories, industry associations (PIA, BPIF), local business directories, and design blogs. Tracking of links obtained and Domain Rating progression of your print shop.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by product category and city, organic traffic by printing specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your print shop in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which printing company do you recommend in Chicago?", the LLM compiles information from across the web to formulate its response. If your print shop does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Local recommendation queries</h4><p>"Which printer do you recommend in Chicago?": the LLM does not cite any print shop by name. It provides selection criteria (proximity, offset/digital capabilities, Google reviews, environmental certifications like FSC or SFI) and redirects to Google Maps or professional directories. Print shops with a content-rich website and a complete GBP profile have the best chance of being cited in future responses.</p><h4>Informational queries</h4><p>"How to choose a good printing company?" or "offset vs digital printing: which should I use?": the LLM generates a structured guide with 6 to 8 criteria (print quality, turnaround time, environmental certifications, technical capacity, value for money, customer service). No print shop is cited by name. The printing company that publishes this type of content on its website can become the reference source.</p><h4>Pricing queries</h4><p>"How much does it cost to print 1,000 flyers?": the LLM gives detailed pricing ranges (USD 30 to USD 100 for 1,000 A5 flyers, GBP 25 to GBP 80 in the UK). It cites online platforms because they publish transparent pricing. Local printers that display their rates on their website have a chance to appear in these responses.</p><h4>Local and Maps queries</h4><p>On "print shop near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Print shops with a complete Google Business Profile (Printing Service category, recent reviews, photos of the workshop and finished products) appear directly in the AI response.</p>',
    structuredData:
      '<p>For printing companies, the recommended schema.org types are: <code>LocalBusiness</code> (primary type), <code>ProfessionalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>LocalBusiness</code> markup with relevant subtypes allows Google and LLMs to precisely identify the services offered, the service area, and the client reviews of the print shop.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your print shop\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on printing services), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for printers',
    items: [
      {
        question: 'How much does SEO cost for a printing company?',
        answer:
          'The SEO budget for a printing company depends on the number of products to rank, the geographic scope targeted, and the local competitive landscape. At Rankwell, SEO engagements for printers start from USD 1,500/month (or GBP 1,200/month) for a single-location local strategy, and can reach USD 4,000-6,000/month for a multi-location printing company or one competing nationally against online platforms.',
      },
      {
        question: 'How long does it take to see results from SEO for a printer?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "screen printing Chicago" or "large format printing Manchester") are faster to rank for than nationally competitive terms captured by Vistaprint or Moo. Rankwell provides a realistic timeline based on the initial competitive analysis of your market area.',
      },
      {
        question: 'How can a local print shop compete with Vistaprint on Google?',
        answer:
          'A local printer should not try to compete with Vistaprint on generic national queries. The strength of a local print shop lies in "printer + city" queries, high-value products (screen printing, large format, specialty finishes, custom packaging), and personalized consulting. Rankwell builds a strategy that capitalizes on these differentiating assets to capture nearby clients who value quality and direct service over low-cost online ordering.',
      },
      {
        question: 'Does a printing company need a blog to improve rankings?',
        answer:
          'A printing blog is an effective lever when it answers real client questions: how to prepare a print-ready file, what is the difference between offset and digital printing, which paper weight to choose for business cards. These articles attract qualified traffic and are citable by AI engines. Rankwell recommends 2 to 4 articles per month targeting informational queries in the printing sector.',
      },
      {
        question: 'How can a printer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a printing company must accumulate web authority signals: presence on professional directories (Better Business Bureau, Yelp, local Chamber of Commerce), mentions in local press or design blogs, an optimized Google Business Profile with workshop photos, and rich factual content on its website (pricing, turnaround times, certifications). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a printer?',
        answer:
          'Local SEO targets "printer + city" and "print shop near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries like "online printing" or "business card printing" and requires high-authority educational content. Rankwell combines both approaches based on the print shop\'s service area and growth ambitions.',
      },
      {
        question: 'Are online printing platforms enough to be visible?',
        answer:
          'Being listed as a fulfillment partner on platforms like Vistaprint or Printful does not replace a well-optimized website. These platforms create dependency: the printer is just one supplier among hundreds, with no control over pricing or branding. A dedicated website allows the printing company to control its message, convert clients directly, and build lasting authority that platforms cannot revoke. Rankwell helps printers build this independent online presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your printing company visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
        { label: 'SEO Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
        { label: 'SEO Videographer', href: '/en/geo-seo-agency/sectors/videographer' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/corporate-website' },
        { label: 'SEO E-commerce', href: '/en/geo-seo-agency/project/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Prestashop', href: '/en/geo-seo-agency/cms/prestashop' },
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
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphic-designer' },
      { label: 'Marketing Agency', href: '/en/geo-seo-agency/sectors/marketing-agency' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Videographer', href: '/en/geo-seo-agency/sectors/videographer' },
      { label: 'Translator', href: '/en/geo-seo-agency/sectors/translator' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
    ],
  },

  // Schema.org primary type
  schemaType: 'LocalBusiness',
};

export default data;
