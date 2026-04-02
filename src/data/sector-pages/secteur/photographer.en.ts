/**
 * DATA: Sector Page Photographers (EN)
 * Route: /en/geo-seo-agency/sectors/photographer
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (The Knot, WeddingWire, Hitched), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'photographer',
    title: 'GEO & SEO Agency for Photographers - Rankwell',
    description:
      'Rankwell helps photographers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the photography industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Photographers' },
    ],
    title: 'GEO & SEO for Photographers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for a photographer on Google, but also via ChatGPT and Perplexity. Our experts design GEO & SEO strategies tailored to the highly visual and local photography market.',
    ctaText: 'Request a GEO & SEO audit for your photography business',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for photographers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 80% of photography queries include a specialty or a city</strong>. Decisions happen in Google\'s Local Pack, Google Images, or AI engine recommendations.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Visual content alone does not rank</strong>. Google reads alt tags, captions, and surrounding text. A portfolio of 500 photos with no optimized text is invisible to search engines. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must bridge visual excellence and search engine readability.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">The Knot, WeddingWire</strong> (US), <strong class="text-secondary dark:text-accent">Hitched</strong> (UK), and <strong class="text-secondary dark:text-accent">Instagram, Pinterest</strong> capture the bulk of traffic, diverting prospects into closed ecosystems with no link to the photographer\'s website. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a photographer stays buried among aggregator profiles.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Citability)
  // ============================================
  quote: {
    text: 'According to Rankwell, a brand\'s citability by LLMs depends less on its fame than on the factual structure of its content. A website where every paragraph contains a verifiable fact, a sourced data point, or a formalized distinction will be preferentially extracted by AI engines, regardless of its domain authority.',
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
        { keyword: 'wedding photographer', volume: 60500, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'photographer near me', volume: 49500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'headshot photographer near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'newborn photographer', volume: 14800, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'family photographer near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a wedding photographer cost', volume: 8100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'boudoir photographer near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'wedding photographer near me', volume: 1600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'photographer near me', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'portrait photographer near me', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'newborn photographer near me', volume: 900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'wedding photographer London', volume: 720, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'family photographer near me', volume: 590, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a wedding photographer cost UK', volume: 1900, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'photographer dubai', volume: 3600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'wedding photographer dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'newborn photographer dubai', volume: 720, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'portrait photographer dubai', volume: 590, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'event photographer dubai', volume: 480, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'family photographer dubai', volume: 390, intent: 'locale', difficulty: 'faible' },
        { keyword: 'photography studio dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "wedding photographer", "photographer near me", or "photographer dubai" represent potential clients actively looking to book a session. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your website does not appear there, those clients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for photographers',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the visual and local nature of the photography industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed (critical for image-heavy portfolios), and technical factors blocking indexation.',
        items: [
          'Page structure by photography specialty (wedding, corporate, events)',
          'Schema.org Photographer and ImageObject markup',
          'Performance and Core Web Vitals (image compression, lazy loading)',
          'Crawl and indexation review of gallery pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the photographer\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the photographer\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for photography',
        ],
      },
      {
        title: 'Market study & photography keyword research',
        subtitle: 'Mapping of search queries by photography specialty and geographic area across US, UK, and UAE markets. Identification of low-competition "specialty + city" combinations.',
        items: [
          'Specialty + city combinations with low competition (wedding Austin, corporate Manchester)',
          'Analysis of queries asked to AI engines about photography',
          'Real search volumes by specialty (wedding, portrait, events, newborn)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed to guide visitors from portfolio to booking, while facilitating Google crawl efficiency.',
        items: [
          'Specialty page > portfolio gallery > pricing page > contact page',
          'Primary keyword + 3-5 secondary keywords per specialty page',
          'Optimization of title tags, meta descriptions, headings, and alt tags for every image',
        ],
      },
      {
        title: 'Photography content strategy',
        subtitle: 'Creation of text content to accompany portfolios, written to be citable by LLMs while showcasing the photographer\'s visual expertise.',
        items: [
          'Behind-the-scenes articles with technical data (location, gear, lighting conditions)',
          'Practical guides answering Google People Also Ask (how to choose a photographer, what budget to expect)',
          'Self-sufficient factual sentences with verifiable data (number of weddings covered, delivery timeline)',
        ],
      },
      {
        title: 'Authority & photography link building',
        subtitle: 'Authority development through specialized directories, wedding publications, and event blogs.',
        items: [
          'The Knot, WeddingWire, Fearless Photographers (US)',
          'Hitched, Bridebook, The Society of Photographers (UK)',
          'Arabia Weddings, WeddingBazaar, WedMeGood (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the photographer\'s Google Business Profile to capture local "photographer + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Photographer + secondary categories by specialty (Wedding photographer, Portrait photographer)',
          'Client review management and post-session collection strategy',
          'Recent work photos, hours, service area, and regular posts',
          'Consistent NAP citations across photography and wedding directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by specialty, and booking requests generated.',
        items: [
          'Google positions by keyword and specialty',
          'Organic traffic by session type',
          'GEO Score: visibility in AI engines',
          'Booking requests and inquiries generated',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your SEO experts, technical team, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your website and portfolio: image optimization (alt tags, compression, lazy loading), loading speed, gallery indexation, and identification of technical blockers.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your photography business in ChatGPT, Perplexity, and Gemini on your target queries. Benchmark against local competitors on AI engines and GEO Score calculation with optimization axes.',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Photographer, ImageGallery, Service, and FAQPage structured markup integrated into your site, with your specialties (wedding, portrait, corporate) and your service area.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Specialty pages, SEO-optimized portfolio pages, articles (shooting tips, session preparation), and FAQs. Direct integration on your CMS or via FTP, with reusable templates.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from photography directories (The Knot, WeddingWire, Hitched), specialized blogs, and local press. Domain Rating tracking and link profile evolution.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Google positions by specialty and geographic area, organic traffic, booking requests attributed to SEO, and GEO Score evolution in AI engines.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your photography business in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which wedding photographer do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your website does not appear in any cited source, you are invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which wedding photographer do you recommend in New York?": LLMs rarely cite individual photographers. Only professionals with strong cross-media presence (features in Vogue, Martha Stewart Weddings, simultaneous presence on The Knot, WeddingWire, and Fearless Photographers) emerge. LLMs systematically redirect to specialized directories rather than individual photographer websites.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a wedding photographer?" or "professional photographer vs amateur": LLMs produce structured guides with 5-7 criteria without citing any photographer as a source. The professional who publishes this type of educational content with their own factual data (number of weddings covered, delivery timeline, gear used) positions themselves as an extractable source.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does a wedding photographer cost?": LLMs give detailed price ranges by session type (portrait USD 150-400, wedding USD 2,000-5,000, corporate headshots USD 200-500). A photographer who displays transparent pricing with packages, inclusions, and number of edited photos creates content that LLMs will extract as a pricing reference.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "photographer near me for family photos", <strong>ChatGPT activates Search mode with a Maps card</strong>. Photographers with a complete Google Business Profile (Photographer category, recent reviews with session photos) appear directly in the AI response.</p>',
    structuredData:
      '<p>For photographers, the recommended schema.org types are: <code>Photographer</code> (primary type), <code>ProfessionalService</code>, <code>ImageObject</code> (for each portfolio photo), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Photographer</code> markup allows Google and LLMs to precisely identify the specialty, service area, and client reviews of the photographer.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your photography business\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of text content accompanying the portfolio), Legitimacy & Citability (external trust signals: reviews, press mentions, specialized directories), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for photographers',
    items: [
      {
        question: 'How much does SEO cost for a photographer?',
        answer:
          'The SEO budget for a photographer depends on the number of specialties covered (wedding, portrait, corporate, events) and the geographic scope targeted. At Rankwell, SEO engagements for photographers start from USD 1,500/month (or GBP 1,200/month) for a single specialty and one city, and can reach USD 4,000-6,000/month for a multi-specialty studio covering several metropolitan areas.',
      },
      {
        question: 'How long does it take to see results from photography SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "newborn photographer Austin" or "headshot photographer Manchester") are faster to rank for than nationally competitive terms like "wedding photographer". Rankwell provides a realistic timeline based on the initial competitive analysis of your local market.',
      },
      {
        question: 'Is a portfolio alone enough to rank well on Google?',
        answer:
          'No. Google cannot "see" images: it reads alt tags, captions, headings, and the surrounding text for each photo. A portfolio of 500 images with no optimized text is invisible to search engines. Rankwell recommends accompanying each gallery with 200-300 words of descriptive text including the location, session type, and natural keywords.',
      },
      {
        question: 'Does a photographer need a blog to improve rankings?',
        answer:
          'A photography blog is a powerful lever when it goes beyond simple "photo report" posts. Articles should answer real questions ("how much does a wedding photographer cost?", "how to prepare for a corporate headshot session?"), include factual data, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries.',
      },
      {
        question: 'How can a photographer appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a photographer must accumulate web authority signals: presence on specialized directories (The Knot, WeddingWire, Hitched), detailed Google reviews with session photos, mentions in event blogs, and rich factual content on their website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a photographer?',
        answer:
          'Local SEO targets "photographer + specialty + city" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("wedding photographer") and requires high-authority educational content and backlinks from national event publications. Rankwell combines both approaches based on the photographer\'s service area.',
      },
      {
        question: 'Are The Knot, WeddingWire, and wedding platforms enough to be visible?',
        answer:
          'Wedding platforms like The Knot or WeddingWire provide initial visibility, but they create dependency: the photographer is just one profile among thousands, and lead quality varies. A well-optimized website allows the photographer to control their image, showcase their portfolio without format constraints, and convert directly without intermediary commissions. Rankwell helps photographers build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your photography business visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Videographer', href: '/en/geo-seo-agency/sectors/videaste' },
        { label: 'SEO Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
        { label: 'SEO Communication Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
        { label: 'SEO Caterer', href: '/en/geo-seo-agency/sectors/traiteur' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Creation', href: '/en/geo-seo-agency/project/creation-site' },
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
      { label: 'Videographer', href: '/en/geo-seo-agency/sectors/videaste' },
      { label: 'Graphic Designer', href: '/en/geo-seo-agency/sectors/graphiste' },
      { label: 'Communication Agency', href: '/en/geo-seo-agency/sectors/agence-communication' },
      { label: 'Printer', href: '/en/geo-seo-agency/sectors/imprimeur' },
      { label: 'Hair Salon', href: '/en/geo-seo-agency/sectors/coiffeur' },
      { label: 'Florist', href: '/en/geo-seo-agency/sectors/fleuriste' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Caterer', href: '/en/geo-seo-agency/sectors/traiteur' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Photographer',
};

export default data;
