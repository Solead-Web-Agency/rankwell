/**
 * DATA: Sector Page Dentists (EN)
 * Route: /en/geo-seo-agency/sectors/dentiste
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs Keywords Explorer + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'dentist',
    title: 'GEO & SEO Agency for Dentists - Rankwell',
    description:
      'Rankwell helps dental practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the dental industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Dentists' },
    ],
    title: 'GEO & SEO for Dentists: Google & AI Engine Visibility',
    subtitle:
      'Patients now search for dentists on Google, ChatGPT, and Perplexity. Our SEO experts design GEO & SEO strategies tailored to dental practices, helping your clinic rank higher and get recommended by AI engines.',
    ctaText: 'Request a GEO & SEO audit for your dental practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for dentists',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 85% of dental queries are geolocated</strong>. Patients choose a practice within a 15-minute radius. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the Local Pack and AI engine responses determine how many new patients walk through your door.',
    constraints:
      'Dental content is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, requiring the highest E-E-A-T bar. Every page must demonstrate verifiable clinical credentials, and advertising rules differ: state dental boards (US), GDC Standards (UK), DHA (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, Healthgrades</strong> (US), <strong class="text-secondary dark:text-accent">NHS Find a Dentist</strong> (UK), <strong class="text-secondary dark:text-accent">DHA directory, Practo</strong> (UAE) dominate high-intent dental queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a dental practice stays invisible against these aggregators.',
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
    title: 'What your future patients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'dentist near me', volume: 1220000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'emergency dentist', volume: 301000, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'dental implants', volume: 135000, intent: 'commerciale', difficulty: 'très élevée' },
        { keyword: 'teeth whitening near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how much does a root canal cost', volume: 49500, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'pediatric dentist near me', volume: 74000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'dental implant cost without insurance', volume: 33100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'dentist near me', volume: 368000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'NHS dentist near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'emergency dentist', volume: 90500, intent: 'transactionnelle', difficulty: 'élevée' },
        { keyword: 'dental implants UK', volume: 18100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'how much do dental implants cost UK', volume: 8100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'private dentist near me', volume: 22200, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'teeth whitening cost UK', volume: 6600, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'dentist dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'dental implants dubai', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'best dentist in dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'teeth whitening dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'emergency dentist dubai', volume: 1900, intent: 'transactionnelle', difficulty: 'moyenne' },
        { keyword: 'dental clinic abu dhabi', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'veneers cost dubai', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 1.2 million searches for "dentist near me" in the US alone represent patients actively looking for dental care. Combined with emergency queries, implant pricing, and specialty searches, the dental sector generates massive search demand across all three markets. The majority of patients click on the top 3 results or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for dental practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to YMYL dental regulations across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of your dental website architecture, loading speed, and technical factors blocking indexation of treatment pages.',
        items: [
          'Page structure by treatment type (implants, orthodontics, cosmetic dentistry)',
          'Schema.org Dentist and MedicalOrganization markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of practitioner and treatment pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of dental content factual density',
          'Competitive benchmark on AI dental queries',
        ],
      },
      {
        title: 'Market study & dental keyword research',
        subtitle: 'Mapping of search queries by dental specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps where competition is weaker.',
        items: [
          'Treatment + city combinations with lower competition',
          'Analysis of dental queries asked to AI engines',
          'Real search volumes by dental specialty and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Treatment page > practitioner page > booking page',
          'Primary keyword + 3-5 secondary keywords per treatment page',
          'Title tag, meta description, and heading optimization per dental procedure',
        ],
      },
      {
        title: 'Dental content strategy',
        subtitle: 'Creation of educational content demonstrating clinical expertise, written to be citable by LLMs while complying with dental advertising regulations.',
        items: [
          'Patient guides and FAQs answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable clinical data',
          'Compliance with dental advertising rules (state boards US, GDC UK, DHA UAE)',
        ],
      },
      {
        title: 'Authority & dental link building',
        subtitle: 'Authority development through qualified dental directories and specialized health publications.',
        items: [
          'Zocdoc, Healthgrades, WebMD (US)',
          'NHS Choices, Dentists.co.uk, GDC register (UK)',
          'Health press publications and institutional dental partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "dentist + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Dentist + secondary categories (Orthodontist, Implant Provider, Cosmetic Dentist)',
          'Patient review management and collection strategy',
          'Photos of the practice, equipment, hours, and attributes (wheelchair accessible, parking)',
          'Consistent NAP citations across dental directories (Zocdoc, Healthgrades, NHS)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by treatment page, and appointment bookings generated.',
        items: [
          'Google positions by dental keyword',
          'Organic traffic by treatment page',
          'GEO Score: visibility in AI engines',
          'Appointment bookings and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your dental team, marketing manager, or practice owner can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your dental practice website: page architecture by treatment type, loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your dental practice in ChatGPT, Perplexity, and Gemini on your target dental queries. Benchmark against 3 to 5 competing practices and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Dentist, MedicalOrganization, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your dental specialties and opening hours. Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of treatment pages (implants, orthodontics, teeth whitening, cosmetic dentistry), patient guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from dental directories (Zocdoc, Healthgrades, NHS Choices), dental blogs, and health press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by treatment page and local keyword, organic traffic by dental specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your dental practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which dentist do you recommend for implants in London?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: "best dentist in London for implants", "dentist near me open Saturday"</h4>' +
      '<p>ChatGPT with Search mode activated names specific dental clinics pulled from Google Business Profile data, displaying practice names, ratings (4.7 to 4.9 stars), and categories. In our testing, 7 named clinics appeared for a London implant query. Practices with a complete Google Business Profile (category, recent reviews, photos, specialties) appear directly in the AI response. This contrasts sharply with other healthcare sectors where LLMs refuse to name individual practitioners.</p>' +
      '<h4>Pricing queries: "how much does a dentist cost without insurance?", "dental implant cost UK"</h4>' +
      '<p>The LLM provides detailed pricing ranges by procedure: exam + cleaning USD 75 to USD 200 (US), single implant GBP 2,000 to GBP 3,000 (UK), USD 3,000 to USD 7,000 (US). It cites health insurance platforms (Aflac) and dental pricing blogs as sources. Practices publishing transparent, up-to-date pricing on their websites have the highest chance of being extracted as a cited source.</p>' +
      '<h4>Informational queries: "how to choose a good dentist?", "dental implant vs bridge"</h4>' +
      '<p>All LLMs generate structured guides with numbered criteria (registration with dental board, specializations offered, patient reviews, technology and equipment, payment options). No specific practice is cited. The dental website that provides this type of expert, factual content can become a referenced source.</p>' +
      '<h4>What triggers visibility in AI dental responses</h4>' +
      '<p>Google Business Profile is the dominant signal: ratings, review count, categories, and photos feed directly into ChatGPT Search mode responses. On the practice\'s own website, <strong>transparent pricing pages, detailed treatment descriptions, and patient FAQs</strong> generate citability. Patient reviews are mentioned as a selection criterion in the majority of AI responses about dentists.</p>',
    structuredData:
      '<p>For dental practices, the recommended schema.org types are: <code>Dentist</code> (primary type), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Dentist</code> markup allows Google and LLMs to precisely identify the dental specialties offered (implantology, orthodontics, cosmetic dentistry), the practice location, and patient reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your dental practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of dental content), Legitimacy & Citability (external trust signals: dental board registration, patient reviews, health press), and Factual Density (richness of structured data and named entities related to dental procedures).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for dentists',
    items: [
      {
        question: 'How much does SEO cost for a dental practice?',
        answer:
          'The SEO budget for a dental practice depends on the number of treatments offered and the geographic scope targeted. At Rankwell, SEO engagements for dental practices start from USD 1,500/month (or GBP 1,200/month) for a single-practitioner clinic in one city, and can reach USD 4,000-6,000/month for a multi-dentist practice in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from dental SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "periodontist Glasgow" or "dental implants Abu Dhabi") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis and your practice\'s current domain authority.',
      },
      {
        question: 'Is SEO compatible with dental advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with dental advertising rules, provided certain limits are respected. In the US, state dental boards and the ADA Code of Ethics prohibit misleading claims about treatment outcomes. In the UK, the GDC (General Dental Council) Standards require accuracy and verifiability. In the UAE, the DHA (Dubai Health Authority) regulates all healthcare marketing. Rankwell understands these constraints and adapts every content strategy to remain compliant while maximizing visibility.',
      },
      {
        question: 'Does a dental practice need a blog to improve rankings?',
        answer:
          'A dental blog is a powerful lever when well executed. Articles should answer real patient questions (e.g., "does a dental implant hurt?", "at what age should a child see an orthodontist?"), demonstrate verifiable clinical expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational patient queries.',
      },
      {
        question: 'How can a dentist appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a dental practice must accumulate web authority signals: presence on dental directories (Zocdoc, Healthgrades in the US; NHS Find a Dentist, Dentists.co.uk in the UK), recent positive patient reviews, an optimized Google Business Profile with correct categories and photos, and rich factual content on its website (treatment pages, pricing, FAQs). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a dentist?',
        answer:
          'Local SEO targets "dentist + city" and "dental practice near me" queries, and relies on Google Business Profile, patient reviews, and citations in dental directories. National SEO targets generic queries ("best implant dentist") and requires high-authority educational content. For a dental practice, local SEO represents 80-90% of the patient acquisition potential. Rankwell combines both approaches based on the practice\'s strategy.',
      },
      {
        question: 'Are Zocdoc, Healthgrades, and dental directories enough to be visible?',
        answer:
          'Dental directories like Zocdoc and Healthgrades are useful for initial visibility, but they create dependency: your practice is just one profile among thousands, with no control over ranking or how your brand is presented. A well-optimized website allows the practice to differentiate by specialty (implantology, cosmetic dentistry), control its image, and convert patients directly. Rankwell helps dental practices build independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your dental practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the dental sector.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
        { label: 'SEO Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
        { label: 'SEO Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
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
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
      { label: 'Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
      { label: 'Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
      { label: 'Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Clinic', href: '/en/geo-seo-agency/sectors/clinique' },
      { label: 'Psychologist', href: '/en/geo-seo-agency/sectors/psychologue' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Dentist',
};

export default data;
