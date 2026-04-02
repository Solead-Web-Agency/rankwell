/**
 * DATA: Sector Page Veterinarians (EN)
 * Route: /en/geo-seo-agency/sectors/veterinarian
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources (SerpWars, VetVox, DVMelite), March 2026
 * Regulatory bodies: AVMA (US), RCVS (UK), MOEW (UAE)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'veterinarian',
    title: 'GEO & SEO Agency for Veterinarians - Rankwell',
    description:
      'Rankwell helps veterinary clinics and animal hospitals boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the veterinary industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Veterinarians' },
    ],
    title: 'GEO & SEO for Veterinarians: Google & AI Engine Visibility',
    subtitle:
      'Your clinic needs to appear when a pet owner searches for a vet: on Google, but also in ChatGPT and Perplexity responses. Our experts design GEO & SEO strategies tailored to the constraints of the veterinary profession.',
    ctaText: 'Request a GEO & SEO audit for your veterinary clinic',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for veterinarians',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">450,000 monthly searches for "veterinarian near me" in the US alone</strong>. Pet owners search on mobile within a 15-minute drive, especially for emergencies. Google Business Profile and client reviews are decisive for visibility.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Veterinary advertising rules vary by market</strong>: AVMA ethics in the US, RCVS conduct rules in the UK, MOEW licensing in the UAE. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must ensure content avoids misleading claims or guaranteed outcomes.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Yelp, BringFido</strong> (US), <strong class="text-secondary dark:text-accent">RCVS Find a Vet</strong> (UK), <strong class="text-secondary dark:text-accent">MyPawLand</strong> (UAE) dominate high-intent veterinary queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a clinic stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (local SEO)
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
        { keyword: 'veterinarian near me', volume: 450000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'animal hospital near me', volume: 201000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'emergency vet near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'veterinary clinic near me', volume: 49500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best veterinarian near me', volume: 12100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a vet visit cost', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: '24 hour vet clinic near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'vet near me', volume: 110000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'emergency vet near me', volume: 27100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'veterinary clinic near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'RCVS registered vet', volume: 4400, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'vet costs UK', volume: 6600, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: '24 hour vet near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'exotic pet vet near me', volume: 2900, intent: 'locale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'vet dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'veterinary clinic dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best vet in dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'emergency vet dubai', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: '24 hour vet dubai', volume: 1000, intent: 'locale', difficulty: 'faible' },
        { keyword: 'pet hospital abu dhabi', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'cat vet dubai', volume: 720, intent: 'locale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 450,000 searches for "veterinarian near me" in the US alone represent pet owners actively seeking a clinic. In the UK, "vet near me" generates 110,000 monthly searches. The majority click on the top 3 results in the Local Pack, or follow the recommendation of an AI engine. If your clinic does not appear there, those clients book an appointment elsewhere.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for veterinary clinics',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the veterinary profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of site architecture, loading speed, and technical factors blocking indexation of your veterinary clinic.',
        items: [
          'Page structure by service type (consultation, surgery, emergency, exotic pets)',
          'Schema.org VeterinaryCare markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of practitioner profiles',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the clinic\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the clinic\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on veterinary AI queries',
        ],
      },
      {
        title: 'Market study & veterinary keyword research',
        subtitle: 'Mapping of search queries by service type, animal species, and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city + species combinations ("exotic pet vet Austin", "cat vet London")',
          'Analysis of queries asked to AI engines',
          'Real search volumes by service type (emergency, vaccination, spay/neuter, dental)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the pet owner journey and Google crawl efficiency.',
        items: [
          'Service page (surgery, dermatology, dental) > practitioner page > contact page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization with veterinary terminology',
        ],
      },
      {
        title: 'Veterinary content strategy',
        subtitle: 'Creation of educational pet health content demonstrating the clinic\'s expertise, written to be citable by LLMs.',
        items: [
          'Guides and FAQs answering Google People Also Ask (vaccination schedules, spay/neuter, pet nutrition)',
          'Self-sufficient factual sentences with verifiable data (price ranges, procedure duration)',
          'Species-specific pages (dogs, cats, exotic pets) and condition-specific content',
        ],
      },
      {
        title: 'Authority & veterinary link building',
        subtitle: 'Authority development through qualified veterinary directories and specialized publications.',
        items: [
          'AVMA Find a Vet, Yelp, BringFido (US)',
          'RCVS Find a Vet, Vets4Pets, Vets Now (UK)',
          'Veterinary press publications (DVM360, Veterinary Record, Veterinary Practice News)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the clinic\'s Google Business Profile to capture local "vet + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Veterinarian + secondary categories (Emergency Veterinarian, Animal Hospital)',
          'Client review management and post-visit collection strategy',
          'Photos of clinic, equipment, team, and emergency hours displayed',
          'Consistent NAP citations across veterinary directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by service type, and appointment requests generated.',
        items: [
          'Google positions by keyword',
          'Organic traffic by service (consultation, emergency, surgery)',
          'GEO Score: visibility in AI engines',
          'Appointment requests and phone calls',
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
        description: 'Full diagnostic of your clinic\'s website: page architecture by service type (consultation, surgery, emergency, exotic pets), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your clinic in ChatGPT, Perplexity, and Gemini on your target veterinary queries. Benchmark against 3 to 5 competing clinics and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'VeterinaryCare, AnimalShelter (if applicable), FAQPage, and BreadcrumbList markup ready to integrate, adapted to your clinic\'s services and species treated. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of service pages by species (dogs, cats, exotic pets), pet health articles, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from veterinary directories (AVMA, RCVS Find a Vet, Yelp), pet care blogs, and specialized press. Tracking of links obtained and Domain Rating progression of your clinic.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by service page and local keyword, organic traffic by veterinary specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your clinic in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a pet owner asks ChatGPT "which vet do you recommend in Austin?", the LLM compiles information from across the web to formulate its response. If your clinic does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which vet do you recommend in Houston?": the LLM cites specific clinics by name when they have strong web presence (multiple directory listings, reviews, press mentions). It provides a list of 4-5 clinics with brief descriptions (24/7 emergency service, specialty care, community reputation) and advises checking license and insurance. Clinics with published pet health content and strong review profiles have the highest chance of being named.</p><h4>Informational queries</h4><p>"How to choose a good veterinarian?" or "veterinarian vs veterinary specialist: what\'s the difference?": the LLM generates a structured guide with 6-8 criteria (proximity, specialization, reviews, equipment, emergency availability, pricing transparency), without citing any individual clinic. The clinic that publishes this type of guide with its own factual data can be cited as a reference source.</p><h4>Pricing queries</h4><p>"How much does a vet visit cost?": the LLM gives detailed pricing ranges by market (USD 50-75 routine exam, USD 150-300 emergency visit in the US; GBP 30-60 consultation, GBP 100-200 emergency in the UK; AED 150-400 consultation in the UAE). Veterinary fees are unregulated in most markets. Clinics displaying an up-to-date fee schedule on their website have the highest chance of being extracted as a source.</p><h4>Local and emergency queries</h4><p>On "emergency vet near me open now", <strong>ChatGPT activates Search mode with a Maps card</strong>. Clinics with a complete Google Business Profile (category Veterinarian, emergency hours listed, visible phone number) appear directly in the AI response.</p>',
    structuredData:
      '<p>For veterinary clinics, the recommended schema.org types are: <code>VeterinaryCare</code> (primary type), <code>AnimalShelter</code> (if shelter associated), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>VeterinaryCare</code> markup allows Google and LLMs to precisely identify the services offered (consultation, surgery, emergency, exotic pets), the location, and the opening hours of the clinic.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your clinic\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of pet health content), Legitimacy & Citability (external trust signals), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for veterinarians',
    items: [
      {
        question: 'How much does SEO cost for a veterinary clinic?',
        answer:
          'The SEO budget for a veterinary clinic depends on the number of services offered (consultation, surgery, emergency, exotic pets) and the geographic scope targeted. At Rankwell, SEO engagements for veterinary clinics start from USD 1,500/month (or GBP 1,200/month) for a single-location practice, and can reach USD 4,000-6,000/month for a multi-location network in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from veterinary SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "exotic pet vet Austin" or "24 hour vet Croydon") are faster to rank for than nationally competitive terms like "veterinarian near me". Rankwell provides a realistic timeline based on the initial competitive analysis of your service area.',
      },
      {
        question: 'Is SEO compatible with veterinary advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with veterinary advertising rules. In the US, the AVMA Principles of Veterinary Medical Ethics require truthful, non-deceptive communication. In the UK, the RCVS Code of Professional Conduct restricts misleading testimonials and unsubstantiated claims. In the UAE, the MOEW regulates veterinary practice licensing and communications. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a veterinary clinic need a pet health blog to improve rankings?',
        answer:
          'A pet health blog is a powerful lever when well executed. Articles should answer real questions (puppy vaccination schedule, cat spaying recovery, exotic pet nutrition), demonstrate verifiable expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries like "when to vaccinate a kitten" or "signs of bloat in dogs".',
      },
      {
        question: 'How can a veterinary clinic appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a clinic must accumulate web authority signals: presence on veterinary directories (AVMA Find a Vet, RCVS, Yelp), mentions in veterinary press (DVM360, Veterinary Record), an optimized Google Business Profile, and rich factual pet health content on its website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a veterinary clinic?',
        answer:
          'Local SEO targets "vet + city" or "veterinarian near me" queries and relies on Google Business Profile, client reviews, and local citations. National SEO targets generic queries ("best exotic pet vet") and requires high-authority educational content. Rankwell combines both approaches: local to capture pet owners in your service area, national to establish the clinic\'s expertise on specific specialties.',
      },
      {
        question: 'Are Yelp, RCVS, and veterinary directories enough to be visible?',
        answer:
          'Veterinary directories like Yelp, AVMA Find a Vet, and RCVS Find a Vet are useful for initial visibility, but they create dependency: the clinic is just one listing among hundreds. A well-optimized website allows the clinic to control its image, publish educational content, convert directly, and build lasting authority. Rankwell helps veterinary clinics build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your veterinary clinic visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/doctor' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentist' },
        { label: 'SEO Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacy' },
        { label: 'SEO Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
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
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/doctor' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentist' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacy' },
      { label: 'Restaurant', href: '/en/geo-seo-agency/sectors/restaurant' },
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notary' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architect' },
    ],
  },

  // Schema.org primary type
  schemaType: 'VeterinaryCare',
};

export default data;
