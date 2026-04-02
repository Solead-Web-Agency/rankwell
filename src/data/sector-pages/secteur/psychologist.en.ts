/**
 * DATA: Sector Page Psychologists (EN)
 * Route: /en/geo-seo-agency/sectors/psychologue
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: industry-standard volumes (Ahrefs unavailable, cross-referenced with
 * SEMrush public benchmarks and Google Keyword Planner ranges), March 2026
 * Auto-test LLM: ChatGPT (anonymous mode, chatgpt.com), 19/03/2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'psychologist',
    title: 'GEO & SEO Agency for Psychologists - Rankwell',
    description:
      'Rankwell helps psychologists and therapy practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the mental health industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Psychologists' },
    ],
    title: 'GEO & SEO for Psychologists: Google & AI Engine Visibility',
    subtitle:
      'Psychology Today, BetterHelp, and the APA directory capture most clicks on mental health queries. Our experts design GEO & SEO strategies to make your practice visible on Google and in ChatGPT and Perplexity responses.',
    ctaText: 'Request a GEO & SEO audit for your practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for psychologists',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 300,000 monthly searches for "psychologist near me" in the US</strong>. Most therapy queries include a city or a specific issue (anxiety, ADHD, couples). Decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Mental health is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable credentials (state licensure/APA in the US, HCPC/BPS in the UK, DHA in the UAE). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must ensure compliance with each market\'s ethics codes.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Psychology Today, BetterHelp</strong> (US), <strong class="text-secondary dark:text-accent">Counselling Directory, NHS</strong> (UK), <strong class="text-secondary dark:text-accent">Okadoc</strong> (UAE) dominate mental health queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a practice stays invisible against these platforms.',
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
        { keyword: 'psychologist near me', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'therapist near me', volume: 368000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'child psychologist near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'anxiety therapist near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'couples therapist near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'psychologist vs psychiatrist', volume: 33100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'how much does a psychologist cost', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'psychologist near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'clinical psychologist near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'child psychologist', volume: 8100, intent: 'mixte', difficulty: 'élevée' },
        { keyword: 'CBT therapist near me', volume: 5400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'counselling psychologist', volume: 4400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'private psychologist London', volume: 2900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how much does a psychologist cost UK', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'psychologist Dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'therapist Dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'child psychologist Dubai', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best psychologist in Dubai', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'couples therapy Dubai', volume: 1600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'clinical psychologist Dubai', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'online therapy Dubai', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 300,000 searches for "psychologist near me" in the US alone represent potential clients actively seeking therapy. In the UK, "psychologist near me" and "CBT therapist near me" generate tens of thousands of searches. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your practice does not appear there, those clients book with a competitor or sign up on BetterHelp.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for psychology practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory and ethical constraints of the mental health profession across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the practice website architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by specialty (anxiety, ADHD, couples, child psychology)',
          'Schema.org MedicalBusiness and Psychologist markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe in mental health',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries (therapy, anxiety, depression)',
        ],
      },
      {
        title: 'Market study & mental health keyword research',
        subtitle: 'Mapping of search queries by therapeutic specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps in underserved niches.',
        items: [
          'Specialty + city combinations with low competition (e.g. "EMDR therapist Brooklyn", "CBT psychologist Manchester")',
          'Analysis of queries asked to AI engines on mental health topics',
          'Real search volumes by condition and therapeutic approach',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the client journey and Google crawl efficiency.',
        items: [
          'Specialty page (CBT, EMDR, child) > psychologist page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Mental health content strategy',
        subtitle: 'Creation of educational content demonstrating the psychologist\'s expertise, written to be citable by LLMs while complying with professional ethics codes.',
        items: [
          'Condition guides and FAQs answering Google People Also Ask (anxiety, depression, ADHD, burnout)',
          'Self-sufficient factual sentences with verifiable data and clinical references',
          'Compliance with APA Ethical Principles (US), BPS Code of Ethics (UK), DHA regulations (UAE)',
        ],
      },
      {
        title: 'Authority & mental health link building',
        subtitle: 'Authority development through qualified psychology directories and specialized publications.',
        items: [
          'Psychology Today, APA Psychologist Locator, GoodTherapy (US)',
          'Counselling Directory, HCPC register, BACP directory (UK)',
          'DHA licensed provider directory, Okadoc (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the practice\'s Google Business Profile to capture local "psychologist + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Psychologist + secondary categories by specialty (Counselor, Marriage therapist)',
          'Client review management and collection strategy (respecting confidentiality)',
          'Photos of the practice, consultation hours, attributes, and regular posts',
          'Consistent NAP citations across mental health directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by specialty, and appointment bookings generated.',
        items: [
          'Google positions by mental health keyword',
          'Organic traffic by specialty and condition',
          'GEO Score: visibility in AI engines',
          'Appointment bookings and client conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your practice team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your practice website: YMYL compliance for mental health, loading speed, Google and AI bot indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target mental health queries. Benchmark against 3 to 5 competing practices and platforms (Psychology Today, BetterHelp), and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Psychologist, MedicalBusiness, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your therapeutic specialties (CBT, EMDR, child, couples). Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of specialty pages (anxiety, depression, ADHD, couples therapy), condition guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed. All content compliant with professional ethics codes.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from psychology directories (Psychology Today, APA Locator, Counselling Directory), mental health blogs, and health press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by specialty page and local keyword, organic traffic by condition, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a potential client asks ChatGPT "which psychologist do you recommend in New York for anxiety?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new client acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: no individual psychologist named</h4><p>On "which psychologist do you recommend in New York for anxiety therapy?", ChatGPT does NOT name specific psychologists. It provides general guidance: search on therapy directories, check credentials, read reviews. It redirects to <strong>Psychology Today</strong>, the <strong>APA Psychologist Locator</strong>, and <strong>FindaPsychologist.org</strong>. The practice that appears prominently on these directories and has a strong Google Business Profile will be surfaced in the AI\'s Search mode with a Maps card.</p><h4>Informational queries</h4><p>"How to find a good psychologist for anxiety?": the LLM generates a structured step-by-step guide (search online, use professional directories, ask for referrals from your doctor, check credentials and specialization). No practice or external source is cited. The psychologist who publishes this type of factual guide on their website can be cited as a reference by the LLM.</p><h4>Comparison queries</h4><p>"Psychologist vs psychiatrist vs therapist: what is the difference?": the LLM produces a detailed comparison table with training (Ph.D./PsyD vs MD), prescribing rights, types of therapy offered, and typical costs. No external source is cited. A practice publishing this type of structured factual comparison is highly extractible as a source.</p><h4>Pricing queries</h4><p>"How much does a psychologist cost?": the LLM gives detailed pricing ranges by country. US: USD 100 to USD 250 per session (USD 20-60 co-pay with insurance). UK: GBP 40 to GBP 150 per session (free via NHS with waiting list). It also mentions sliding scale fees and online therapy alternatives (USD 50-200). Sites providing precise, up-to-date pricing data by market have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "psychologist near me for child behavior issues", <strong>ChatGPT provides a structured action plan</strong> referencing the APA Psychologist Locator, Psychology Today directory, and National Register of Health Service Psychologists by name. Practices with a complete Google Business Profile (category Psychologist, specialties in description, recent reviews) are surfaced directly via the AI\'s Search mode.</p>',
    structuredData:
      '<p>For psychology practices, the recommended schema.org types are: <code>MedicalBusiness</code> (primary type), <code>Psychologist</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>MedicalBusiness</code> markup with the <code>Psychologist</code> subtype allows Google and LLMs to precisely identify the therapeutic specialization, location, consultation hours, and client reviews of the practice.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of mental health content), Legitimacy & Citability (external trust signals: psychology directories, professional registrations, health publications), and Factual Density (richness of structured data and named entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for psychologists',
    items: [
      {
        question: 'How much does SEO cost for a psychology practice?',
        answer:
          'The SEO budget for a psychology practice depends on the number of therapeutic specialties and the geographic scope targeted. At Rankwell, SEO engagements for psychologists start from USD 1,500/month (or GBP 1,200/month) for a single specialty in one city, and can reach USD 4,000-6,000/month for a multi-specialty practice in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from psychology SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "EMDR therapist Brooklyn" or "child psychologist Manchester") are faster to rank for than nationally competitive terms like "psychologist near me". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with psychology ethics codes?',
        answer:
          'Yes, SEO is fully compatible with professional ethics codes, provided certain limits are respected. In the US, the APA Ethical Principles of Psychologists and Code of Conduct require truthful advertising and prohibit misleading claims about treatment outcomes. In the UK, the BPS Code of Ethics and HCPC Standards of Conduct apply. In the UAE, the DHA enforces strict healthcare advertising regulations including mandatory license display. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a psychology practice need a mental health blog to improve rankings?',
        answer:
          'A mental health blog is a powerful lever when well executed. Articles should answer real questions from potential clients (inspired by Google People Also Ask): "how to manage an anxiety attack", "when should I see a psychologist for my child", "CBT vs EMDR for PTSD". Rankwell recommends 2-4 articles per month targeting long-tail informational queries, written to be citable by AI engines.',
      },
      {
        question: 'How can a psychologist appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a practice must accumulate web authority signals: presence on psychology directories (Psychology Today, APA Locator, Counselling Directory), recent positive Google reviews, mentions in health publications, and rich factual content on its website. ChatGPT currently does not name individual psychologists but redirects to directories and Google Maps. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a psychologist?',
        answer:
          'Local SEO targets "psychologist + specialty + city" queries and relies on Google Business Profile, client reviews, and citations on psychology directories. National SEO targets generic queries ("how to choose a psychologist" or "online therapy for anxiety") and requires high-authority educational content. For a neighborhood practice, local SEO represents 80% of the potential. Rankwell combines both approaches based on the practice\'s strategy and online therapy ambitions.',
      },
      {
        question: 'Are Psychology Today and BetterHelp enough to be visible as a psychologist?',
        answer:
          'Psychology Today is the dominant directory in the US, and BetterHelp is the largest online therapy platform. Both are useful for initial visibility, but they create dependency: the psychologist is one profile among hundreds of thousands, subject to each platform\'s algorithm and fee structure. A well-optimized practice website allows control over branding, publication of expert mental health content, reinforcement of E-E-A-T signals, and construction of lasting authority that no platform can revoke. Rankwell helps psychology practices build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your psychology practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
        { label: 'SEO Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
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
      { label: 'Notary', href: '/en/geo-seo-agency/sectors/notaire' },
      { label: 'Architect', href: '/en/geo-seo-agency/sectors/architecte' },
      { label: 'Photographer', href: '/en/geo-seo-agency/sectors/photographe' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Psychologist',
};

export default data;
