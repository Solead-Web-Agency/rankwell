/**
 * DATA: Sector Page Doctors (EN)
 * Route: /en/geo-seo-agency/sectors/medecin
 *
 * Pilot EN page, adapted for US / UK / UAE markets
 * Keyword data: Ahrefs + industry sources, March 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'doctor',
    title: 'GEO & SEO Agency for Doctors - Rankwell',
    description:
      'Rankwell helps medical practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the healthcare industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Doctors' },
    ],
    title: 'GEO & SEO for Doctors: Google & AI Engine Visibility',
    subtitle:
      'Zocdoc, Healthgrades, and the NHS capture most clicks on medical queries. Our experts design GEO & SEO strategies to make your practice visible on Google and in ChatGPT and Perplexity responses.',
    ctaText: 'Request a GEO & SEO audit for your medical practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for doctors',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 75% of healthcare queries include a city or "near me"</strong>. This is a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">local SEO</a> market where the decision happens in Google\'s Local Pack or in AI engine responses.',
    constraints:
      'Healthcare is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable expertise (medical licenses, board certifications, published research) and comply with HIPAA (US), GMC (UK), or DHA (UAE) regulations.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, Healthgrades, WebMD</strong> (US), <strong class="text-secondary dark:text-accent">NHS Find a GP</strong> (UK), <strong class="text-secondary dark:text-accent">DHA app</strong> (UAE) dominate high-intent medical queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a medical practice stays invisible against these aggregators.',
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
        { keyword: 'doctor near me', volume: 1220000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'primary care physician near me', volume: 135000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'family doctor near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'doctor accepting new patients', volume: 49500, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'urgent care near me', volume: 823000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'how much does a doctor visit cost without insurance', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best primary care doctor near me', volume: 27100, intent: 'locale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'GP near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'GP accepting new patients', volume: 33100, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'private GP London', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'NHS GP registration', volume: 6600, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'doctor near me', volume: 90500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'private health check-up London', volume: 4400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'how to register with a GP', volume: 5400, intent: 'informationnelle', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'doctor Dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best doctor in Dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'general practitioner Dubai', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'DHA approved doctors', volume: 2400, intent: 'commerciale', difficulty: 'faible' },
        { keyword: 'family medicine Dubai', volume: 1900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'medical clinic near me Dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'doctor home visit Dubai', volume: 1600, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over one million searches for "doctor near me" in the US alone represent patients actively seeking a physician. In the UK, "GP near me" and "GP accepting new patients" generate hundreds of thousands of searches. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for medical practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the healthcare industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the practice website architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by medical specialty and condition',
          'Schema.org Physician and MedicalOrganization markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries',
        ],
      },
      {
        title: 'Market study & healthcare keyword research',
        subtitle: 'Mapping of search queries by medical specialty and geographic area across US, UK, and UAE markets. Identification of high-potential gaps in underserved areas.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines',
          'Real search volumes by condition and medical specialty',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Specialty page > physician page > appointment booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Healthcare content strategy',
        subtitle: 'Creation of educational health content demonstrating the physician\'s expertise, written to be citable by LLMs while complying with medical advertising regulations.',
        items: [
          'Condition guides and prevention articles answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable medical data',
          'Compliance with HIPAA (US), GMC guidelines (UK), DHA regulations (UAE)',
        ],
      },
      {
        title: 'Authority & medical link building',
        subtitle: 'Authority development through qualified healthcare directories and medical publications.',
        items: [
          'Zocdoc, Healthgrades, WebMD, Vitals (US)',
          'NHS Choices, CQC directory, private GP directories (UK)',
          'DHA licensed provider directory, Dubai Health (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the practice\'s Google Business Profile to capture local "doctor + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Doctor + secondary categories by specialty (General practitioner, Family medicine)',
          'Patient review management and collection strategy',
          'Photos, consultation hours, attributes, and regular posts',
          'Consistent NAP citations across medical directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by medical specialty, and appointment bookings generated.',
        items: [
          'Google positions by healthcare keyword',
          'Organic traffic by specialty and condition',
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
    subtitle: 'Each deliverable is a document or tool your medical practice team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your practice website: YMYL compliance, loading speed, Google and AI bot indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target medical queries. Benchmark against 3 to 5 competing practices and platforms, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Physician, MedicalOrganization, MedicalClinic, and FAQPage markup ready to integrate, adapted to your medical specialties. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of condition pages, preventive health guides, and FAQs inspired by Google People Also Ask. Direct integration on your CMS or via FTP, with page template creation if needed. All content compliant with medical advertising regulations.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from healthcare directories (Zocdoc, Healthgrades, NHS Choices), medical blogs, and health press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by specialty page and local keyword, organic traffic by medical condition, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which doctor do you recommend in London for a health check-up?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: clinics named with ratings</h4><p>Unlike the legal sector, ChatGPT in Search mode DOES name specific medical clinics and individual doctors. On "which doctor do you recommend in London for a health check-up?", the LLM listed 6 private GP clinics with Google ratings (4.7 to 5.0), named individual physicians, and provided pricing ranges (GBP 200-300 for a basic check, GBP 400-700 for a full screening). Practices with high Google ratings and complete profiles are surfaced directly in the AI response with a Maps card.</p><h4>Informational queries</h4><p>"How to find a good GP who accepts new patients?" or "GP vs specialist: when should I see which?": the LLM generates a structured guide with step-by-step advice and redirects to platform-specific tools (NHS Find a GP for UK, Zocdoc for US, DHA app for UAE). No individual practice is cited. A practice publishing expert health content on its website can be cited as a reference on these educational queries.</p><h4>Pricing queries</h4><p>"How much does a doctor visit cost without insurance?": the LLM gives detailed pricing ranges (USD 150-300 for a standard visit, GBP 200-300 for a private GP consultation, AED 300-800 for a Dubai clinic visit). Sites providing precise, up-to-date pricing data by visit type and insurance status have the highest chance of being extracted as a source.</p><h4>Local and Maps queries</h4><p>On "doctor near me accepting new patients", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Doctor or General practitioner, recent patient reviews, photos, updated consultation hours) appear directly in the AI response.</p>',
    structuredData:
      '<p>For medical practices, the recommended schema.org types are: <code>Physician</code> (primary type), <code>MedicalOrganization</code>, <code>MedicalClinic</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Physician</code> markup allows Google and LLMs to precisely identify the medical specialty, location, consultation hours, and patient reviews of the practice.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of health content), Legitimacy & Citability (external trust signals: medical directories, patient reviews, medical publications), and Factual Density (richness of structured data and named medical entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for doctors',
    items: [
      {
        question: 'How much does SEO cost for a medical practice?',
        answer:
          'The SEO budget for a medical practice depends on the number of physicians, medical specialties covered, and the geographic scope targeted. At Rankwell, SEO engagements for medical practices start from USD 1,800/month (or GBP 1,400/month) for a single-physician practice in one city, and can reach USD 5,000-7,000/month for a multi-specialty clinic in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from medical SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "family doctor accepting patients in Brooklyn" or "private GP Kensington") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis.',
      },
      {
        question: 'Is SEO compatible with medical advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with healthcare advertising rules, provided certain limits are respected. In the US, HIPAA restricts the use of patient information, and the FTC monitors health claims. In the UK, the GMC (General Medical Council) and ASA (Advertising Standards Authority) require that all medical content is accurate and not misleading. In the UAE, the DHA (Dubai Health Authority) and HAAD enforce strict rules on medical advertising, including mandatory license display. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a medical practice need a health blog to improve rankings?',
        answer:
          'A health blog is a powerful lever when well executed. Articles should answer real patient questions (inspired by Google People Also Ask), demonstrate verifiable medical expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries: condition guides, prevention tips, explanations of common medical procedures.',
      },
      {
        question: 'How can a doctor appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a practice must accumulate web authority signals: presence on medical directories (Zocdoc, Healthgrades, NHS Choices), recent positive Google reviews, mentions in health publications, and rich factual content on its website. Unlike other YMYL sectors, ChatGPT in Search mode does surface specific clinics with ratings and Maps integration. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a doctor?',
        answer:
          'Local SEO targets "doctor + specialty + city" queries and relies on Google Business Profile, patient reviews, and citations on medical directories. National SEO targets generic queries ("how to choose a primary care physician") and requires high-authority educational content. For a neighborhood practice, local SEO represents 80% of the potential. Rankwell combines both approaches based on the practice\'s strategy.',
      },
      {
        question: 'Are Zocdoc, Healthgrades, and medical directories enough to be visible?',
        answer:
          'Medical directories like Zocdoc and Healthgrades are useful for initial visibility and appointment booking, but they create dependency: the physician is just one profile among hundreds of thousands, subject to the platform\'s algorithm and review system. A well-optimized practice website allows control over branding, publication of expert medical content, reinforcement of E-E-A-T signals, and construction of lasting authority that no platform can revoke. Rankwell helps medical practices build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your medical practice visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
        { label: 'SEO Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
        { label: 'SEO Psychologist', href: '/en/geo-seo-agency/sectors/psychologue' },
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
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Lawyer', href: '/en/geo-seo-agency/sectors/avocat' },
      { label: 'Accountant', href: '/en/geo-seo-agency/sectors/expert-comptable' },
      { label: 'Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Psychologist', href: '/en/geo-seo-agency/sectors/psychologue' },
      { label: 'Real Estate Agent', href: '/en/geo-seo-agency/sectors/agence-immobiliere' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Physician',
};

export default data;
