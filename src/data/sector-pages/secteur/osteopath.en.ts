/**
 * DATA: Sector Page Osteopaths (EN)
 * Route: /en/geo-seo-agency/sectors/osteopathe
 *
 * Adapted for US / UK / UAE markets
 * US: DO (Doctor of Osteopathic Medicine) = full physician
 * UK: Osteopath = manual therapy practitioner (GOsC regulated)
 * UAE: Osteopath = DHA-licensed manual therapist
 * Keyword data: Ahrefs Keywords Explorer, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'osteopath',
    title: 'GEO & SEO Agency for Osteopaths - Rankwell',
    description:
      'Rankwell helps osteopaths and osteopathic practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the osteopathy sector.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Osteopaths' },
    ],
    title: 'GEO & SEO for Osteopaths: Google & AI Engine Visibility',
    subtitle:
      'Patients search for osteopaths on Google, ChatGPT, and Perplexity. Our experts design GEO & SEO strategies tailored to osteopathic practices, whether you are a DO in the US, a GOsC-registered osteopath in the UK, or a DHA-licensed practitioner in the UAE.',
    ctaText: 'Request a GEO & SEO audit for your osteopathic practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for osteopaths',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">The majority of osteopathy queries are geolocated</strong>. "Osteopath near me" generates over 40,000 monthly searches in the UK and nearly 15,000 in the US. Patients choose a practitioner within a short radius via the Local Pack or AI engine responses.',
    constraints:
      'Osteopathy falls under <strong class="text-secondary dark:text-accent">YMYL</strong> for Google, requiring high E-E-A-T signals. DOs are full physicians in the US; the GOsC protects the title in the UK; the DHA requires licensing in the UAE. An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate these distinct frameworks.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, AOA directory</strong> (US), <strong class="text-secondary dark:text-accent">GOsC register, Doctify</strong> (UK), <strong class="text-secondary dark:text-accent">DHA, Practo</strong> (UAE) capture most high-intent queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a practice stays invisible against these aggregators.',
  },

  // ============================================
  // QUOTE: Nuclear phrase from referentiel (SEO local)
  // ============================================
  quote: {
    text: 'According to Rankwell, local SEO is the first area of search optimization where LLMs become a direct and measurable recommendation channel: ChatGPT and Perplexity recommend local businesses in response to conversational queries, and these recommendations rely on signals that differ from those of Google\'s Local Pack.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'Learn more about local SEO',
  },

  // ============================================
  // BLOC 3: Strategic keywords (3 markets)
  // ============================================
  keywords: {
    title: 'What your future patients search on Google',
    entries: [],
    entriesByMarket: {
      us: [
        { keyword: 'osteopathic doctor near me', volume: 18100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'osteopath near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'DO vs MD', volume: 12100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'osteopathic manipulative treatment', volume: 6600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'osteopath for back pain', volume: 4400, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'how much does an osteopath cost', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'cranial osteopathy', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uk: [
        { keyword: 'osteopath near me', volume: 40500, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'osteopath', volume: 27100, intent: 'mixte', difficulty: 'moyenne' },
        { keyword: 'osteopath london', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'cranial osteopathy', volume: 3600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'osteopath vs chiropractor', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'how much does an osteopath cost', volume: 2400, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'osteopath for back pain', volume: 1900, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'osteopath dubai', volume: 1600, intent: 'locale', difficulty: 'faible' },
        { keyword: 'osteopathy dubai', volume: 1000, intent: 'mixte', difficulty: 'faible' },
        { keyword: 'osteopath abu dhabi', volume: 480, intent: 'locale', difficulty: 'faible' },
        { keyword: 'back pain treatment dubai', volume: 1300, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'cranial osteopathy dubai', volume: 390, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'osteopath near me dubai', volume: 320, intent: 'locale', difficulty: 'faible' },
        { keyword: 'sports osteopath dubai', volume: 260, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, "osteopath near me" generates over 40,000 searches in the UK and nearly 15,000 in the US. In the UAE, "osteopath dubai" captures a growing patient base seeking manual therapy alternatives. The majority of these patients click on the top 3 results or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for osteopathic practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints and local nature of osteopathy across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of your osteopathic practice website architecture, loading speed, and technical factors blocking indexation of specialty pages.',
        items: [
          'Page structure by osteopathic specialty (structural, cranial, visceral, sports, pediatric)',
          'Schema.org MedicalBusiness and Physician markup',
          'Performance and Core Web Vitals',
          'Crawl and indexation of practitioner and specialty pages',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of your practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of osteopathic content factual density',
          'Competitive benchmark on AI osteopathy queries',
        ],
      },
      {
        title: 'Market study & osteopathy keyword research',
        subtitle: 'Mapping of search queries by osteopathic specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Specialty + city combinations with lower competition (cranial osteopath Manchester, sports osteopath Miami)',
          'Analysis of osteopathy queries asked to AI engines',
          'Real search volumes by specialty and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Specialty page (back pain, sports injury, pregnancy) > practitioner page > booking page',
          'Primary keyword + 3-5 secondary keywords per specialty page',
          'Title tag, meta description, and heading optimization per condition treated',
        ],
      },
      {
        title: 'Osteopathic content strategy',
        subtitle: 'Creation of educational content demonstrating clinical expertise, written to be citable by LLMs while complying with osteopathic regulations.',
        items: [
          'Patient guides and FAQs answering Google People Also Ask (cost, insurance, osteopath vs chiropractor)',
          'Self-sufficient factual sentences with verifiable clinical data',
          'Compliance with regulatory standards (state medical boards US, GOsC UK, DHA UAE)',
        ],
      },
      {
        title: 'Authority & osteopathy link building',
        subtitle: 'Authority development through qualified healthcare directories and specialized publications.',
        items: [
          'AOA directory, Zocdoc, Healthgrades (US)',
          'GOsC register, NHS Choices, Doctify (UK)',
          'Health press publications and institutional osteopathic partnerships',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of your Google Business Profile to capture local "osteopath + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Osteopath + secondary categories by specialty (Sports Medicine, Cranial Osteopathy)',
          'Patient review management and collection strategy',
          'Photos of the practice, treatment rooms, hours, and attributes (wheelchair accessible, parking)',
          'Consistent NAP citations across healthcare directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by specialty page, and appointment bookings generated.',
        items: [
          'Google positions by osteopathy keyword',
          'Organic traffic by specialty page',
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
    subtitle: 'Each deliverable is a document or tool your practice manager or marketing team can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your osteopathic practice website: page architecture by specialty (structural, cranial, visceral, pediatric), loading speed, Google indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target osteopathy queries. Benchmark against 3 to 5 competing practices and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'MedicalBusiness, Physician, FAQPage, and BreadcrumbList markup ready to integrate, adapted to your osteopathic specialties and conditions treated. Delivered with a CMS integration guide (WordPress, Squarespace, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of specialty pages (back pain, sports injuries, pregnancy, cranial osteopathy), patient guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from healthcare directories (GOsC register, Zocdoc, Healthgrades, Doctify), health blogs, and wellness press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by specialty page and local keyword, organic traffic by osteopathic specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a user asks ChatGPT "which osteopath do you recommend in London?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries</h4><p>"Which osteopath do you recommend in London?": the LLM does not cite a specific practitioner by name. It provides a list of selection criteria (GOsC registration, qualifications, specialization, patient reviews, initial consultation process) and redirects to the GOsC register, Google Maps, and Doctify. No individual practice is recommended.</p><h4>Informational queries</h4><p>"How to choose a good osteopath?" or "osteopath vs chiropractor vs physiotherapist": the LLM generates a structured guide with 6 criteria or a detailed comparison (whole-body manual approach vs spinal adjustment vs exercise-based rehabilitation). It systematically flags the US/UK distinction: DO (physician) in the US versus manual therapist in the UK and UAE. The practice that publishes this type of structured, factual content on its website can be cited as a source.</p><h4>Pricing queries</h4><p>"How much does an osteopath cost?": the LLM gives detailed ranges (GBP 45 to GBP 65 outside London, GBP 60 to GBP 95 in London, AED 300 to AED 600 in the UAE). It explains that osteopathy is not NHS-funded but may be covered by private insurance. Sites providing precise, up-to-date pricing data have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "osteopath near me for back pain", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Osteopath, recent reviews, specialization indicated) appear directly in the AI response.</p>',
    structuredData:
      '<p>For osteopathic practices, the recommended schema.org types are: <code>MedicalBusiness</code> (primary type), <code>Physician</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>MedicalBusiness</code> markup allows Google and LLMs to precisely identify the osteopathic specialties offered, the practice location, and patient reviews.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your osteopathic practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of osteopathic content), Legitimacy & Citability (external trust signals: regulatory registration, patient reviews, health press), and Factual Density (richness of structured data and named entities related to osteopathic treatments).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for osteopaths',
    items: [
      {
        question: 'How much does SEO cost for an osteopathic practice?',
        answer:
          'The SEO budget for an osteopathic practice depends on the geographic area and the number of specialties to position. At Rankwell, SEO engagements for osteopaths start from USD 1,200/month (or GBP 950/month) for a single-practitioner clinic in one city, and can reach USD 3,000-4,500/month for a multi-practitioner practice in competitive metropolitan areas like London, New York, or Dubai.',
      },
      {
        question: 'How long does it take to see results from osteopathy SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "cranial osteopath Manchester" or "sports osteopath Miami") are faster to rank for than competitive metropolitan terms. Rankwell provides a realistic timeline based on the initial competitive analysis and your practice\'s current domain authority.',
      },
      {
        question: 'Is SEO compatible with osteopathic regulations?',
        answer:
          'Yes, SEO is fully compatible with osteopathic regulations, provided content respects the relevant regulatory framework. In the US, DOs are licensed physicians regulated by state medical boards and must comply with medical advertising rules. In the UK, the GOsC (General Osteopathic Council) protects the title and regulates standards of practice and advertising. In the UAE, the DHA (Dubai Health Authority) requires licensing for all practitioners and governs healthcare marketing claims. Rankwell adapts every content strategy to remain compliant.',
      },
      {
        question: 'Does an osteopathic practice need a blog to improve rankings?',
        answer:
          'A health blog is a powerful lever when well executed. Articles should answer real patient questions (osteopath vs chiropractor, cost per session, insurance coverage, what to expect during a first visit) and demonstrate verifiable clinical expertise. Rankwell recommends 2-4 articles per month targeting long-tail informational queries like "cranial osteopathy for babies" or "osteopathic treatment for sciatica".',
      },
      {
        question: 'How can an osteopath appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a practice must accumulate web authority signals: registration on the GOsC register (UK) or AOA directory (US), presence on Zocdoc and Healthgrades, recent positive patient reviews, an optimized Google Business Profile with correct categories and photos, and rich factual content on its website (specialty pages, pricing, FAQs). The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an osteopath?',
        answer:
          'Local SEO targets "osteopath + city" and "osteopath near me" queries, and relies on Google Business Profile, patient reviews, and citations in healthcare directories. National SEO targets generic queries ("cranial osteopathy", "osteopath vs physiotherapist") and requires high-authority educational content. For an osteopathic practice, local SEO represents 80-90% of the patient acquisition potential. Rankwell combines both approaches based on the practice\'s strategy and catchment area.',
      },
      {
        question: 'Are healthcare directories enough to be visible as an osteopath?',
        answer:
          'Healthcare directories like the GOsC register, Zocdoc, or Doctify are useful for initial visibility, but they create dependency: your practice is just one profile among hundreds, with no control over ranking or how your brand is presented. A well-optimized website allows the practice to differentiate by specialty (structural, cranial, sports, pediatric), control its image, and convert patients directly. Rankwell helps osteopaths build independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your osteopathic practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan tailored to the osteopathy sector.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
        { label: 'SEO Personal Trainer', href: '/en/geo-seo-agency/sectors/coach-sportif' },
      ],
      projets: [
        { label: 'SEO Business Website', href: '/en/geo-seo-agency/project/site-vitrine' },
        { label: 'Website Redesign', href: '/en/geo-seo-agency/project/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/en/geo-seo-agency/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/en/geo-seo-agency/cms/squarespace' },
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
      { label: 'Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Pharmacy', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Psychologist', href: '/en/geo-seo-agency/sectors/psychologue' },
      { label: 'Personal Trainer', href: '/en/geo-seo-agency/sectors/coach-sportif' },
      { label: 'Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
      { label: 'Clinic', href: '/en/geo-seo-agency/sectors/clinique' },
      { label: 'Veterinarian', href: '/en/geo-seo-agency/sectors/veterinaire' },
    ],
  },

  // Schema.org primary type
  schemaType: 'MedicalBusiness',
};

export default data;
