/**
 * DATA: Sector Page Surgeons (EN)
 * Route: /en/geo-seo-agency/sectors/chirurgien
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: industry sources (Healthgrades, RealSelf, RCS), March 2026
 * Auto-test LLM performed on 5 patient queries in English
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'surgeon',
    title: 'GEO & SEO Agency for Surgeons - Rankwell',
    description:
      'Rankwell helps surgeons boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the surgical industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Surgeons' },
    ],
    title: 'GEO & SEO for Surgeons: Google & AI Engine Visibility',
    subtitle:
      'Patients search for surgeons by specialty and city. Our experts design GEO & SEO strategies adapted to the YMYL constraints of the surgical profession across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your surgical practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for surgeons',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 65% of surgical queries combine a specialty and a location</strong>. "Orthopedic surgeon near me" alone generates 165,000 monthly US searches. Decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Surgery is classified <strong class="text-secondary dark:text-accent">YMYL health</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable credentials (ABMS certification, Royal College fellowship, DHA license). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must comply with AMA (US), GMC (UK), and DHA (UAE) advertising rules.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Healthgrades, RealSelf</strong> (US), <strong class="text-secondary dark:text-accent">NHS Find a Surgeon</strong> (UK), <strong class="text-secondary dark:text-accent">DHA, Mediclinic</strong> (UAE) dominate high-intent surgical queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a surgeon stays invisible against these aggregators.',
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
        { keyword: 'orthopedic surgeon near me', volume: 165000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'plastic surgeon near me', volume: 135000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'best orthopedic surgeon near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'bariatric surgeon near me', volume: 33100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how much does a plastic surgeon cost', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'board certified surgeon', volume: 9900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'knee replacement surgeon near me', volume: 8100, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'plastic surgeon near me', volume: 9900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'orthopedic surgeon near me', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'cosmetic surgeon London', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'hip replacement surgeon UK', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to choose a surgeon NHS', volume: 1600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'consultant surgeon near me', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best knee surgeon London', volume: 1000, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'plastic surgeon Dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'orthopedic surgeon Dubai', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best surgeon in Dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'bariatric surgeon Dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'cosmetic surgery Dubai cost', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'spine surgeon Abu Dhabi', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'DHA approved surgeon', volume: 720, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "orthopedic surgeon near me", "plastic surgeon near me", or "best surgeon in Dubai" represent patients actively seeking surgical care. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for surgical practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the surgical profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the practice website architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by surgical specialty (orthopedic, plastic, cardiac, bariatric)',
          'Schema.org Physician and MedicalOrganization markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the surgeon\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the surgeon\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density on surgical procedures',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & surgical keyword research',
        subtitle: 'Mapping of search queries by surgical specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines ("best surgeon for knee replacement")',
          'Real search volumes by procedure and surgical specialty',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Specialty page > procedure page > surgeon profile > appointment booking',
          'Primary keyword + 3-5 secondary keywords per procedure page',
          'Title tag, meta description, and heading optimization by procedure',
        ],
      },
      {
        title: 'Surgical content strategy',
        subtitle: 'Creation of educational content demonstrating the surgeon\'s expertise, written to be citable by LLMs while complying with medical advertising regulations.',
        items: [
          'Patient guides by procedure (preparation, surgery, recovery)',
          'FAQs answering Google People Also Ask on surgical questions',
          'Self-sufficient factual sentences with verifiable data (success rates, recovery times)',
          'Compliance with AMA guidelines (US), GMC standards (UK), DHA regulations (UAE)',
        ],
      },
      {
        title: 'Authority & medical link building',
        subtitle: 'Authority development through qualified surgical directories and medical publications.',
        items: [
          'Healthgrades, RealSelf, US News Health, Castle Connolly (US)',
          'Royal College of Surgeons, NHS Find a Surgeon, BMI Healthcare (UK)',
          'DHA provider directory, Mediclinic, Cleveland Clinic Abu Dhabi (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the surgeon\'s Google Business Profile to capture local "surgeon + specialty + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Surgeon + secondary categories by specialty (Plastic Surgeon, Orthopedic Surgeon)',
          'Patient review management and collection strategy post-consultation',
          'Photos of practice, consultation hours, attributes, and regular posts',
          'Consistent NAP citations across medical directories (Healthgrades, RealSelf, Vitals)',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by surgical specialty, and appointment bookings generated.',
        items: [
          'Google positions by surgical keyword',
          'Organic traffic by procedure and specialty',
          'GEO Score: visibility in AI engines',
          'Appointment bookings and patient consultations',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your surgical practice team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your practice website: YMYL compliance, page architecture by surgical specialty, loading speed, Google and AI bot indexation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target surgical queries. Benchmark against 3 to 5 competing surgeons and platforms, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Physician, MedicalOrganization, MedicalProcedure, MedicalSpecialty, and FAQPage markup ready to integrate, adapted to your surgical specialties. Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of procedure pages (knee replacement, rhinoplasty, bariatric surgery), patient guides (pre-op, recovery), and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from medical directories (Healthgrades, RealSelf, Royal College of Surgeons), surgical journals, and health press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by procedure page and local keyword, organic traffic by surgical specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which orthopedic surgeon do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which plastic surgeon do you recommend in New York?": the LLM does not cite a specific surgeon by name. It provides 5 to 6 selection criteria (board certification by ABMS or ABPS, fellowship training, hospital privileges, before-and-after portfolio, patient reviews) and redirects toward directories: Healthgrades, RealSelf, the American Board of Plastic Surgery verification tool, and Castle Connolly. The surgeon who structures these credentials on their own website has the highest chance of being extracted as a source.</p><h4>Informational queries</h4><p>"Orthopedic surgeon vs rheumatologist: who should I see?" or "How to choose a good surgeon?": the LLM generates a structured guide with 6 to 8 criteria. Rheumatologists handle non-surgical treatment (medications, physical therapy), while orthopedic surgeons intervene when conservative treatment fails. No individual surgeon is cited. A practice publishing this type of factual comparison content can be referenced by the LLM.</p><h4>Pricing queries</h4><p>"How much does knee replacement surgery cost?": the LLM gives detailed pricing ranges (USD 30,000 to 50,000 in the US without insurance, GBP 10,000 to 15,000 privately in the UK, AED 60,000 to 120,000 in Dubai). Sites providing precise, up-to-date pricing data by procedure have the highest chance of being cited as a source.</p><h4>Local and Maps queries</h4><p>On "surgeon near me for hip replacement", <strong>ChatGPT activates Search mode with a Maps card</strong>. Surgeons with a complete Google Business Profile (category Surgeon or Orthopedic Surgeon, recent patient reviews, photos of the practice) appear directly in the AI response.</p>',
    structuredData:
      '<p>For surgeons, the recommended schema.org types are: <code>Physician</code> (primary type), <code>MedicalOrganization</code>, <code>MedicalProcedure</code>, <code>MedicalSpecialty</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Physician</code> markup with the <code>medicalSpecialty</code> property allows Google and LLMs to precisely identify the surgical specialty, board certifications, location, and patient reviews of the surgeon.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of medical content by procedure), Legitimacy & Citability (external trust signals: Royal College fellowship, board certification, medical publications), and Factual Density (richness of structured data and named medical entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for surgeons',
    items: [
      {
        question: 'How much does SEO cost for a surgical practice?',
        answer:
          'The SEO budget for a surgical practice depends on the number of specialties, procedures covered, and the geographic scope targeted. At Rankwell, SEO engagements for surgeons start from USD 2,000/month (or GBP 1,600/month) for a single specialty in one city, and can reach USD 6,000-8,000/month for a multi-specialty surgical group in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from surgical SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "bariatric surgeon Glasgow" or "spine surgeon Abu Dhabi") are faster to rank for than nationally competitive terms like "best plastic surgeon near me". Rankwell provides a realistic timeline based on the initial competitive analysis of your specialty.',
      },
      {
        question: 'Is SEO compatible with medical advertising regulations for surgeons?',
        answer:
          'Yes, SEO is fully compatible with surgical advertising rules, provided certain limits are respected. In the US, the AMA Code of Medical Ethics and state medical board rules prohibit misleading claims and require truthful representation of qualifications. In the UK, the GMC (General Medical Council) and ASA (Advertising Standards Authority) require that all surgical content is accurate, not misleading, and does not exploit patients\' vulnerability. In the UAE, the DHA and DOH enforce strict rules including mandatory license display. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a surgeon need a medical blog to improve rankings?',
        answer:
          'A medical blog is a powerful lever when well executed. Articles should answer real patient questions (inspired by Google People Also Ask): preparation for surgery, recovery timelines, comparison between surgical and non-surgical options. Rankwell recommends 2-4 articles per month targeting long-tail informational queries, written to be citable by AI engines while respecting medical ethics.',
      },
      {
        question: 'How can a surgeon appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a surgeon must accumulate web authority signals: board certification listed on ABMS or Royal College directories, presence on Healthgrades and RealSelf, recent positive Google reviews, mentions in medical publications, and rich factual content on their website. The Rankwell GEO Score measures and optimizes precisely these AI citability signals for the surgical sector.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a surgeon?',
        answer:
          'Local SEO targets "surgeon + specialty + city" queries and relies on Google Business Profile, patient reviews, and citations on medical directories. National SEO targets generic queries ("best orthopedic surgeon" or "knee replacement recovery time") and requires high-authority educational content. For a local surgical practice, local SEO represents 70-80% of the patient acquisition potential. Rankwell combines both approaches based on the practice\'s strategy.',
      },
      {
        question: 'Are Healthgrades, RealSelf, and medical directories enough to be visible?',
        answer:
          'Medical directories like Healthgrades and RealSelf are useful for initial visibility and patient reviews, but they create dependency: the surgeon is just one profile among thousands, sorted by proximity and review count rather than expertise. A well-optimized practice website allows the surgeon to showcase credentials, publish detailed procedure guides, and build lasting authority that no platform can revoke. Rankwell helps surgeons build this independent visibility through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your surgical practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to your surgical specialty.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
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
        { label: 'E-E-A-T', href: '/en/glossary/eeat' },
      ],
    },
  },

  // Related sectors banner
  relatedSectors: {
    title: 'We also work with these sectors',
    items: [
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Physician',
};

export default data;
