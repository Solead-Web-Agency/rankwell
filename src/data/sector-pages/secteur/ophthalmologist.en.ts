/**
 * DATA: Sector Page Ophthalmologists (EN)
 * Route: /en/geo-seo-agency/sectors/ophtalmologue
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: Ahrefs seed "ophthalmologist" + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'ophthalmologist',
    title: 'GEO & SEO Agency for Ophthalmologists - Rankwell',
    description:
      'Rankwell helps ophthalmology practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the eye care industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Ophthalmologists' },
    ],
    title: 'GEO & SEO for Ophthalmologists: Google & AI Engine Visibility',
    subtitle:
      'Zocdoc, Healthgrades, and NHS directories capture most clicks on eye care queries. Our experts design GEO & SEO strategies to make your ophthalmology practice visible on Google and in ChatGPT and Perplexity responses.',
    ctaText: 'Request a GEO & SEO audit for your ophthalmology practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for ophthalmologists',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 368,000 monthly searches for eye doctors in the US alone</strong>. "Ophthalmologist near me" and "cataract surgery near me" drive the majority of patient acquisition. Decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Eye care is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable expertise (board certifications, fellowship training, published research). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate AAO/HIPAA (US), GMC (UK), and DHA/HAAD (UAE) regulations.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, Healthgrades</strong> (US), <strong class="text-secondary dark:text-accent">NHS, Moorfields</strong> (UK), <strong class="text-secondary dark:text-accent">DHA app</strong> (UAE) dominate high-intent ophthalmology queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a practice stays invisible against these aggregators.',
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
        { keyword: 'ophthalmologist near me', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'eye doctor near me', volume: 368000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'cataract surgery near me', volume: 49500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'LASIK eye surgery near me', volume: 40500, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'retina specialist near me', volume: 22200, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best ophthalmologist near me', volume: 18100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'how much does cataract surgery cost', volume: 33100, intent: 'informationnelle', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'eye specialist near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'ophthalmologist near me', volume: 9900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'private cataract surgery UK', volume: 6600, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'LASIK surgery cost UK', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'NHS eye specialist referral', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'glaucoma specialist London', volume: 1300, intent: 'locale', difficulty: 'faible' },
        { keyword: 'private eye hospital near me', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
      ],
      uae: [
        { keyword: 'best ophthalmologist in Dubai', volume: 4400, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'eye doctor Dubai', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'LASIK surgery Dubai', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'cataract surgery Dubai cost', volume: 2400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'eye specialist Abu Dhabi', volume: 1900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'retina specialist Dubai', volume: 880, intent: 'locale', difficulty: 'faible' },
        { keyword: 'DHA approved eye doctor', volume: 720, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over 300,000 searches for "ophthalmologist near me" in the US alone represent patients actively seeking eye care. In the UK, "eye specialist near me" and "private cataract surgery" generate tens of thousands of searches. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for ophthalmology practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the eye care industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the practice website architecture, loading speed, and technical factors blocking indexation of an ophthalmology site.',
        items: [
          'Page structure by subspecialty (cataract, glaucoma, refractive surgery, retina)',
          'Schema.org Physician and MedicalOrganization markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe in ophthalmology',
          'Measurement of legitimacy and citability of the physician',
          'Evaluation of content factual density on eye conditions',
          'Competitive benchmark on AI queries in eye care',
        ],
      },
      {
        title: 'Market study & ophthalmology keyword research',
        subtitle: 'Mapping of search queries by eye care subspecialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Subspecialty + city combinations with low competition (e.g., "glaucoma specialist Houston")',
          'Analysis of queries asked to AI engines about eye conditions',
          'Real search volumes by procedure (cataract, LASIK, retinal injection)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey: from eye condition to specialist, then to appointment booking.',
        items: [
          'Condition page (glaucoma, macular degeneration, myopia) > physician page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by subspecialty',
        ],
      },
      {
        title: 'Ophthalmology content strategy',
        subtitle: 'Creation of educational content on eye conditions and treatments, written to be citable by LLMs while complying with medical advertising regulations.',
        items: [
          'Patient guides by condition (cataract, presbyopia, keratoconus, diabetic retinopathy)',
          'FAQs answering Google People Also Ask on procedures and costs',
          'Self-sufficient factual sentences with verifiable clinical data',
        ],
      },
      {
        title: 'Authority & ophthalmology link building',
        subtitle: 'Authority development through qualified eye care directories and specialized ophthalmology publications.',
        items: [
          'AAO Find an Ophthalmologist, Zocdoc, Healthgrades, Vitals (US)',
          'Royal College of Ophthalmologists, NHS directories, private eye hospital listings (UK)',
          'DHA licensed provider directory, Moorfields Eye Hospital Dubai directory (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the practice\'s Google Business Profile to capture local "ophthalmologist + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Ophthalmologist + secondary categories (Eye Care Center, LASIK Surgery Center)',
          'Patient review management and collection strategy',
          'Photos of the practice, equipment (OCT, fundus camera, visual field analyzer), hours and attributes',
          'Consistent NAP citations across Zocdoc, Healthgrades, AAO directory, NHS listings',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by eye care subspecialty, and appointment bookings generated.',
        items: [
          'Google positions by keyword and by eye condition',
          'Organic traffic by subspecialty and by city',
          'GEO Score: visibility in AI engines',
          'Appointment bookings and patient conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your ophthalmology practice team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your practice website: YMYL compliance, page architecture by subspecialty (cataract, glaucoma, retina), loading speed, Google and AI bot indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target ophthalmology queries. Benchmark against 3 to 5 competing practices and platforms, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Physician, MedicalOrganization, MedicalClinic, FAQPage, and BreadcrumbList markup ready to integrate, with the Ophthalmology specialty and subspecialties mapped. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of condition pages (cataract, glaucoma, macular degeneration), procedure guides (LASIK, intravitreal injections, OCT), and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from eye care directories (AAO, Zocdoc, Healthgrades, NHS directories), ophthalmology blogs, and medical press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by subspecialty page and local keyword, organic traffic by eye condition, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your ophthalmology practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which ophthalmologist do you recommend in Houston?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: clinics named with ratings</h4><p>On "best ophthalmologist in Dubai" or "top eye doctor near me", ChatGPT in Search mode names specific clinics and individual ophthalmologists with Google ratings (4.5 to 5.0), fellowship credentials, and subspecialty focus. Practices with high Google ratings, complete profiles, and active reviews are surfaced directly in the AI response with a Maps card. Research shows 73.8% of ChatGPT ophthalmologist recommendations contain inaccuracies, which means practices with strong, consistent web signals stand out even more.</p><h4>Informational queries</h4><p>"How to choose an ophthalmologist?" or "ophthalmologist vs optometrist: what\'s the difference?": the LLM generates a structured guide with 5 to 7 criteria (subspecialty training, board certification, patient reviews, hospital affiliations, equipment). No individual practice is cited. The practice publishing this type of expert content on its website can be extracted as a reference source.</p><h4>Pricing queries</h4><p>"How much does cataract surgery cost?" or "LASIK surgery cost": the LLM gives detailed pricing ranges (USD 3,500-5,000 per eye for LASIK in the US, GBP 2,500-3,500 per eye in the UK, AED 7,000-12,000 per eye in Dubai). Sites providing precise, up-to-date pricing data by procedure have the highest chance of being cited as a source.</p><h4>Local and Maps queries</h4><p>On "ophthalmologist near me accepting new patients", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Ophthalmologist, recent patient reviews, photos of equipment, updated consultation hours) appear directly in the AI response.</p>',
    structuredData:
      '<p>For ophthalmology practices, the recommended schema.org types are: <code>Physician</code> (primary type), <code>MedicalOrganization</code>, <code>MedicalClinic</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Physician</code> markup with the <code>Ophthalmology</code> specialty allows Google and LLMs to precisely identify the subspecialties, location, consultation hours, and patient reviews of the practice.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your ophthalmology practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of content on eye conditions and procedures), Legitimacy & Citability (external trust signals: medical directories, patient reviews, ophthalmology publications), and Factual Density (richness of structured data and named medical entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for ophthalmologists',
    items: [
      {
        question: 'How much does SEO cost for an ophthalmology practice?',
        answer:
          'The SEO budget for an ophthalmology practice depends on the number of subspecialties covered and the geographic scope targeted. At Rankwell, SEO engagements for ophthalmology practices start from USD 2,000/month (or GBP 1,600/month) for a single-subspecialty practice in one city, and can reach USD 6,000-8,000/month for a multi-subspecialty clinic covering cataract, refractive surgery, retina, and glaucoma in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from ophthalmology SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "retina specialist Houston" or "private glaucoma treatment London") are faster to rank for than nationally competitive terms like "best LASIK surgeon". Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with medical advertising regulations for ophthalmologists?',
        answer:
          'Yes, SEO is fully compatible with healthcare advertising rules for eye care, provided certain limits are respected. In the US, HIPAA restricts patient information use, and the AAO (American Academy of Ophthalmology) publishes ethical guidelines on physician marketing. In the UK, the Royal College of Ophthalmologists and GMC require accurate, non-misleading content. In the UAE, the DHA (Dubai Health Authority) and HAAD enforce strict rules including mandatory license display. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does an ophthalmology practice need a blog to improve rankings?',
        answer:
          'A medical blog is a powerful lever when well executed. Articles should answer real patient questions (inspired by Google People Also Ask), demonstrate verifiable ophthalmology expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries: condition guides (cataract, glaucoma, diabetic retinopathy), procedure explanations (LASIK, intravitreal injections), and pre- and post-operative care tips.',
      },
      {
        question: 'How can an ophthalmologist appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a practice must accumulate web authority signals: presence on eye care directories (AAO Find an Ophthalmologist, Zocdoc, Healthgrades, Royal College of Ophthalmologists), recent positive Google reviews, mentions in ophthalmology publications, and rich factual content on its website. ChatGPT in Search mode does surface specific clinics with ratings and Maps integration for eye care queries. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for an ophthalmologist?',
        answer:
          'Local SEO targets "ophthalmologist + subspecialty + city" queries and relies on Google Business Profile, patient reviews, and citations on eye care directories. National SEO targets generic queries ("how to choose an ophthalmologist", "best LASIK surgeon") and requires high-authority educational content. For a neighborhood practice, local SEO represents 80% of the potential. Rankwell combines both approaches based on the practice\'s strategy and subspecialties.',
      },
      {
        question: 'Are Zocdoc, Healthgrades, and eye care directories enough to be visible?',
        answer:
          'Eye care directories like Zocdoc and Healthgrades are useful for initial visibility and appointment booking, but they create dependency: the ophthalmologist is just one profile among thousands, subject to the platform\'s algorithm and review system. A well-optimized practice website allows control over branding, publication of expert eye care content, reinforcement of E-E-A-T signals, and construction of lasting authority that no platform can revoke. Rankwell helps ophthalmology practices build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your ophthalmology practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
        { label: 'SEO Clinic', href: '/en/geo-seo-agency/sectors/clinique' },
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
      { label: 'Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
      { label: 'Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
      { label: 'Clinic', href: '/en/geo-seo-agency/sectors/clinique' },
      { label: 'Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
      { label: 'Optician', href: '/en/geo-seo-agency/sectors/opticien' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Physician',
};

export default data;
