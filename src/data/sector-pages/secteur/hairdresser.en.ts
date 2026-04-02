/**
 * DATA: Sector Page Hairdressers (EN)
 * Route: /en/geo-seo-agency/sectors/hairdresser
 *
 * Adapted for US / UK / UAE markets
 * US = "hair salon" / "hair stylist", UK = "hairdresser", UAE = "salon" / "ladies salon"
 * Keyword data: Ahrefs + industry sources (Booksy, Vagaro, Fresha, Treatwell), March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'hairdresser',
    title: 'GEO & SEO Agency for Hair Salons - Rankwell',
    description:
      'Rankwell helps hair salons and hairdressers boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the hair industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Hairdressers' },
    ],
    title: 'GEO & SEO for Hairdressers: Google & AI Engine Visibility',
    subtitle:
      'Your future clients search for a hair salon on Google Maps, on booking platforms, and increasingly via ChatGPT and Perplexity. Our experts design GEO & SEO strategies tailored to the highly local and competitive hair industry.',
    ctaText: 'Request a GEO & SEO audit for your hair salon',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for hairdressers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">"Hair salon near me" generates over 3.3 million monthly US searches</strong>. Virtually all are mobile with immediate booking intent. Decisions happen in the 3 results of Google\'s Local Pack or in an AI engine recommendation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">The hair industry has extreme local competition</strong>: 40 to 80 salons per mid-size city. Google reviews and photos are decisive for the first visit. Service-specific keywords (balayage, color correction, curly cut) each form a distinct search universe.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Booksy, Vagaro</strong> (US), <strong class="text-secondary dark:text-accent">Fresha, Treatwell</strong> (UK) capture a large share of booking traffic with hundreds of competing listings. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a salon stays invisible behind these platforms.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (Local SEO)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search marketing where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from those of Google\'s Local Pack.',
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
        { keyword: 'hair salon near me', volume: 823000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'haircut near me', volume: 456000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'hair stylist near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'balayage near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'hair colorist near me', volume: 27100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'curly hair salon near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a haircut cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'hairdresser near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'hair salon near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'mobile hairdresser near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'hairdresser London', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'balayage near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'curly hair specialist near me', volume: 2400, intent: 'locale', difficulty: 'faible' },
        { keyword: 'how much does a haircut cost UK', volume: 3600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'hair salon dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'ladies salon dubai', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best hair salon dubai', volume: 3600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'balayage dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'hair color dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'hair salon Abu Dhabi', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'keratin treatment dubai', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, millions of searches like "hair salon near me", "hairdresser near me", or "hair salon dubai" represent potential clients ready to book an appointment. The majority click on the top 3 results of the Local Pack, or follow the recommendation of an AI engine. If your salon does not appear there, those clients walk into a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for hair salons',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the highly local and competitive nature of the hair industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the salon\'s website: page architecture, mobile loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by service (cut, color, balayage, treatments)',
          'Schema.org HairSalon and BeautySalon markup',
          'Mobile performance and Core Web Vitals',
          'Crawl and indexation review of service pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the salon\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the salon\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for hair services',
        ],
      },
      {
        title: 'Market study & hair industry keyword research',
        subtitle: 'Mapping of search queries by service type and geographic area across US, UK, and UAE markets. Identification of high-potential service + city combinations.',
        items: [
          'Service + city combinations with low competition (balayage Austin, curly cut Manchester)',
          'Specialty queries (color correction, keratin treatment, wedding hair)',
          'Analysis of queries asked to AI engines about hair services',
          'Real search volumes by service and by city',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the booking journey: from service discovery to appointment.',
        items: [
          'Service page > stylist page > pricing page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
          'Dedicated pages by specialty (balayage, curly hair, bridal)',
        ],
      },
      {
        title: 'Hair salon content strategy',
        subtitle: 'Creation of educational content demonstrating the salon\'s expertise, written to be citable by LLMs.',
        items: [
          'Practical guides (curly hair care routine, how often to color, balayage vs highlights)',
          'FAQs answering Google People Also Ask on services and pricing',
          'Self-sufficient factual sentences with verifiable data',
          'Seasonal content (summer hair trends, wedding season styles, holiday looks)',
        ],
      },
      {
        title: 'Authority & hair industry link building',
        subtitle: 'Authority development through booking platforms, beauty publications, and local directories.',
        items: [
          'Booksy, Vagaro, StyleSeat (US)',
          'Fresha, Treatwell, NHF directory (UK)',
          'Local lifestyle blogs and beauty press partnerships',
          'Social media profiles (Instagram, TikTok) with backlinks to the website',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the salon\'s Google Business Profile to capture local "hair salon + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Hair Salon + secondary categories (Barber Shop, Beauty Salon)',
          'Client review management and post-appointment collection strategy',
          'Photos of the salon, stylist work, and team updated regularly',
          'Consistent NAP citations across Booksy, Fresha, Treatwell, and local directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service, and bookings generated.',
        items: [
          'Google positions by keyword and by city',
          'Organic traffic by service page',
          'GEO Score: visibility in AI engines',
          'Online bookings and contact requests',
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
        description: 'Full diagnostic of your salon\'s website: service page structure (cut, color, treatments), mobile loading speed, Google indexation, and a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your salon in ChatGPT, Perplexity, and Gemini on your target hair queries. Benchmark against local competitors and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'HairSalon, BeautySalon, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your salon\'s services and pricing. Delivered with a CMS integration guide (WordPress, Wix, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages (balayage, color correction, curly cut), hair care articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from booking platforms (Booksy, Vagaro, Fresha, Treatwell), beauty blogs, and local press. Tracking of links obtained and Domain Rating progression of your salon.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by hair service, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your salon in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which hair salon do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your salon does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4>' +
      '<p>"Which hair salon do you recommend in London?": the LLM does not cite a specific salon by name. It provides a list of selection criteria (specialization, Google reviews, proximity, pricing transparency) and redirects to Fresha, Treatwell, and Google Maps. Salons with strong platform presence are not necessarily cited in the text response itself.</p>' +
      '<h4>Informational queries</h4>' +
      '<p>"How to choose a good hairdresser?" or "balayage vs highlights: what is the difference?": the LLM generates a structured guide with 5 to 7 criteria or a detailed comparison, without citing any salon. The salon that publishes this type of detailed content on its website can become the extracted source.</p>' +
      '<h4>Pricing queries</h4>' +
      '<p>"How much does a haircut cost?": the LLM gives detailed ranges (USD 30-80 for a standard cut, USD 150-350 for balayage, GBP 40-100 for color in the UK). Sites providing precise, up-to-date pricing tables have the highest chance of being extracted as a source by AI engines.</p>' +
      '<h4>Local and Maps queries</h4>' +
      '<p>On "hair salon near me open on Monday", <strong>ChatGPT activates Search mode with a Maps card</strong>. The LLM notes that many salons are closed on Mondays (a traditional rest day in the industry). Salons that clearly display their opening hours on their Google Business Profile and are open on that day appear first in the AI response.</p>',
    structuredData:
      '<p>For hair salons, the recommended schema.org types are: <code>HairSalon</code> (primary type), <code>BeautySalon</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>HairSalon</code> markup allows Google and LLMs to precisely identify the services offered, location, opening hours, and client reviews of the salon.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your salon\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for hair salons',
    items: [
      {
        question: 'How much does SEO cost for a hair salon?',
        answer:
          'The SEO budget for a hair salon depends on the geographic scope and the number of services to promote. At Rankwell, SEO engagements for hair salons start from USD 1,200/month (or GBP 900/month) for a single-location salon in a mid-size city, and can reach USD 3,000-5,000/month for a multi-location salon or a premium salon in a competitive metropolitan area like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take for a hair salon to appear on Google?',
        answer:
          'Initial results typically appear between 2 and 5 months. Niche local queries (e.g., "curly hair specialist Austin" or "balayage colorist Manchester") are faster to rank for than broadly competitive terms like "hair salon London". Rankwell provides a realistic timeline based on the initial competitive analysis of your area.',
      },
      {
        question: 'Why are Google reviews so important for a hair salon?',
        answer:
          'Google reviews are the primary decision factor for 70 to 80% of clients searching for a new salon. Google uses the number, recency, and average rating of reviews to rank salons in the Local Pack. AI engines like ChatGPT also rely on aggregated review data to formulate their recommendations. Rankwell implements a post-appointment review collection strategy adapted to hair salons.',
      },
      {
        question: 'Does a hair salon need a blog to improve its rankings?',
        answer:
          'A blog is a powerful lever when properly targeted. Articles should answer real client questions (curly hair care routine, how often to refresh a balayage, difference between highlights and balayage) and be written to be citable by AI engines. Rankwell recommends 2 to 3 articles per month targeting long-tail informational queries specific to the hair industry.',
      },
      {
        question: 'How can a hair salon appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a salon must accumulate web authority signals: presence on booking platforms (Booksy, Vagaro, Fresha, Treatwell), numerous and recent Google reviews, mentions in local press or beauty blogs, and rich factual content on its website (pricing, specialties, stylist bios). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a hair salon?',
        answer:
          'Local SEO targets "hair salon + city" or "hairdresser near me" queries and relies on Google Business Profile, client reviews, and citations on local directories. National SEO targets generic queries like "best balayage salon" and requires high-authority educational content. For an independent salon, Rankwell prioritizes local SEO, which directly generates bookings.',
      },
      {
        question: 'Are Booksy, Fresha, and booking platforms enough to be visible?',
        answer:
          'Booking platforms like Booksy and Fresha are useful for online scheduling, but they create dependency: your salon is just one profile among hundreds in your area. A well-optimized website allows you to control your image, showcase your specialties, and convert clients directly without platform commissions. Rankwell helps salons build an independent digital presence through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your salon visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentist' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Wix', href: '/en/geo-seo-agency/cms/wix' },
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
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographer' },
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentist' },
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/doctor' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/real-estate-agency' },
    ],
  },

  // Schema.org primary type
  schemaType: 'HairSalon',
};

export default data;
