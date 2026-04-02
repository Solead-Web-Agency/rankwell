/**
 * DATA: Sector Page Clinics (EN)
 * Route: /en/geo-seo-agency/sectors/clinique
 *
 * Adapted for US / UK / UAE markets
 * US: private clinic, urgent care / UK: private hospital, CQC rated / UAE: JCI accredited
 * Keyword data: Ahrefs + industry sources, March 2026
 * YMYL sector
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'clinic',
    title: 'GEO & SEO Agency for Clinics - Rankwell',
    description:
      'Rankwell helps private clinics and hospitals boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the healthcare facility sector.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Clinics' },
    ],
    title: 'GEO & SEO for Clinics: Google & AI Engine Visibility',
    subtitle:
      'Patients search for clinics on Google and in ChatGPT or Perplexity responses before booking. Our experts design GEO & SEO strategies adapted to private clinics, urgent care centers, and hospitals across the US, UK, and UAE.',
    ctaText: 'Request a GEO & SEO audit for your clinic',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for clinics',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">"Urgent care near me" generates over 823,000 monthly searches in the US</strong>. Patients compare facilities through reviews, accreditations, and AI engine recommendations. Online reputation directly determines patient volume.',
    constraints:
      'Healthcare facilities are classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Every page must show verifiable expertise: accreditations, physician credentials, published outcomes. Regulations vary: HIPAA (US), CQC (UK), DHA/JCI (UAE).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Zocdoc, Healthgrades</strong> (US), <strong class="text-secondary dark:text-accent">CQC, NHS Choices</strong> (UK), <strong class="text-secondary dark:text-accent">DHA app, Medcare</strong> (UAE) and large hospital groups dominate clinic queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, an independent clinic remains invisible.',
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
        { keyword: 'urgent care near me', volume: 823000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'walk in clinic near me', volume: 301000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'clinic near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'private clinic near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does urgent care cost without insurance', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'outpatient clinic near me', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'best urgent care near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
      ],
      uk: [
        { keyword: 'private hospital near me', volume: 22200, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'private clinic London', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'walk in clinic near me', volume: 14800, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'CQC rated hospital', volume: 2900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'private health clinic UK', volume: 3600, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'private hospital costs UK', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best private hospital London', volume: 6600, intent: 'locale', difficulty: 'élevée' },
      ],
      uae: [
        { keyword: 'best hospital in Dubai', volume: 12100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'clinic Dubai', volume: 8100, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'JCI accredited hospital Dubai', volume: 2400, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'private hospital Dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'medical center near me Dubai', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'hospital Abu Dhabi', volume: 3600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'health check up Dubai cost', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, hundreds of thousands of searches like "urgent care near me", "private hospital London", or "best hospital in Dubai" represent patients actively seeking a healthcare facility. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your clinic does not appear there, those patients choose a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for clinics',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints and competitive landscape of private healthcare facilities across the US, UK, and UAE.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the clinic website architecture, loading speed, and technical factors blocking indexation of specialty and service pages.',
        items: [
          'Page structure by medical department and specialty',
          'Schema.org MedicalClinic and Hospital markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the clinic\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the clinic\'s informational universe',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density across medical departments',
          'Competitive benchmark on AI queries against hospital groups',
        ],
      },
      {
        title: 'Market study & healthcare keyword research',
        subtitle: 'Mapping of search queries by medical specialty and geographic area across US, UK, and UAE markets. Identification of high-potential specialty + city combinations.',
        items: [
          'Specialty + city combinations with low competition',
          'Analysis of queries asked to AI engines about clinics and hospitals',
          'Real search volumes by medical department and procedure',
          'Pricing queries (cost of surgery, hospital stay, insurance coverage)',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Department page > specialty page > physician page > appointment booking',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization by department',
        ],
      },
      {
        title: 'Medical content strategy',
        subtitle: 'Creation of educational health content demonstrating the clinic\'s expertise, written to be citable by LLMs while complying with healthcare advertising regulations.',
        items: [
          'Patient guides and procedure FAQs answering Google People Also Ask',
          'Self-sufficient factual sentences with verifiable data (accreditation, outcomes, volumes)',
          'Compliance with HIPAA (US), CQC standards (UK), DHA and JCI requirements (UAE)',
        ],
      },
      {
        title: 'Authority & healthcare link building',
        subtitle: 'Authority development through qualified healthcare directories, accreditation bodies, and medical publications.',
        items: [
          'Zocdoc, Healthgrades, WebMD, US News Best Hospitals (US)',
          'CQC directory, NHS Choices, Bupa, Private Healthcare UK (UK)',
          'DHA licensed provider directory, JCI accreditation listing (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the clinic\'s Google Business Profile to capture local "clinic + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Hospital or Medical clinic + secondary categories by specialty',
          'Patient review management and collection strategy after treatment',
          'Photos of facilities, equipment, and medical teams',
          'Consistent NAP citations across healthcare directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by medical department, and patient inquiries generated.',
        items: [
          'Google positions by keyword and department',
          'Organic traffic by specialty and procedure',
          'GEO Score: visibility in AI engines',
          'Patient inquiries, appointment bookings, and conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5: Deliverables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'The concrete deliverables you receive',
    subtitle: 'Each deliverable is a document or tool your clinic management, marketing team, or web developer can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your clinic website: YMYL compliance, loading speed, Google and AI bot indexation, heading and meta tag structure, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your clinic in ChatGPT, Perplexity, and Gemini on your target healthcare queries. Benchmark against 3 to 5 competing facilities and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'MedicalClinic, Hospital, MedicalSpecialty, and FAQPage markup ready to integrate, adapted to your departments and physicians. Delivered with a CMS integration guide (WordPress, Webflow, or other).',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of department pages, procedure guides, pricing FAQs, and patient information pages. Direct integration on your CMS or via FTP, with page template creation if needed. All content compliant with healthcare advertising regulations.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from healthcare directories (Zocdoc, Healthgrades, CQC, JCI listing), medical blogs, and health press. Tracking of links obtained and Domain Rating progression.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by department and local keyword, organic traffic by specialty, GEO Score evolution, patient inquiry volumes, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your clinic in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which private clinic do you recommend in Dubai?", the LLM compiles information from across the web to formulate its response. If your clinic does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: clinics named with ratings</h4><p>On "which private clinic do you recommend in New York?", ChatGPT in Search mode lists 5 to 8 facilities with Google ratings, named physicians, and pricing ranges. It highlights accreditation status (JCI, CQC Outstanding) and specialty strengths. Clinics with high Google ratings, complete profiles, and recognized accreditations are surfaced directly in the AI response with a Maps card.</p><h4>Informational queries</h4><p>"How to choose a good private clinic?" or "what does CQC Outstanding mean?": the LLM generates a structured guide with 6 to 8 selection criteria (accreditation, infection rates, physician credentials, patient reviews, insurance coverage). No specific clinic is cited. Clinics publishing this type of educational content on their website can be cited as a reference.</p><h4>Pricing queries</h4><p>"How much does a private hospital stay cost?": the LLM gives detailed pricing ranges by market (USD 2,000-5,000 per night in the US, GBP 800-2,500 in the UK, AED 1,500-4,000 in Dubai) and distinguishes between insured and self-pay patients. Clinics providing transparent, structured pricing data on their website are cited as sources.</p><h4>Local and Maps queries</h4><p>On "clinic near me" or "urgent care near me", <strong>ChatGPT activates Search mode with a Maps card</strong>. Clinics with a complete Google Business Profile (category Hospital or Medical clinic, recent reviews, facility photos, listed specialties) appear directly in the geolocated AI response.</p>',
    structuredData:
      '<p>For clinics and hospitals, the recommended schema.org types are: <code>MedicalClinic</code> (primary type for clinics), <code>Hospital</code> (for larger facilities), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>MedicalClinic</code> and <code>Hospital</code> markup allows Google and LLMs to precisely identify the medical specialties, location, physicians, accreditations, and patient reviews of the facility.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your clinic\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of medical content by department), Legitimacy & Citability (external trust signals: accreditations, directories, medical press, patient reviews), and Factual Density (richness of structured data and named medical entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for clinics',
    items: [
      {
        question: 'How much does SEO cost for a clinic or hospital?',
        answer:
          'The SEO budget for a clinic depends on the number of medical departments, the facility size, and the geographic scope targeted. At Rankwell, SEO engagements for clinics start from USD 2,500/month (or GBP 2,000/month) for a single-specialty clinic in one city, and can reach USD 8,000-12,000/month for a multi-department hospital in competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from clinic SEO?',
        answer:
          'Initial results typically appear between 4 and 6 months. Niche local queries (e.g., "orthopedic clinic Brooklyn" or "private eye clinic Manchester") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis, accounting for the weight of hospital groups on the SERPs.',
      },
      {
        question: 'Is SEO compatible with healthcare advertising regulations?',
        answer:
          'Yes, SEO is fully compatible with healthcare advertising rules, provided certain limits are respected. In the US, HIPAA restricts patient data use, and the FTC monitors health claims. In the UK, the CQC and ASA require that all medical content is accurate and not misleading. In the UAE, the DHA enforces strict rules on medical advertising, including mandatory license display and JCI accreditation reference. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a clinic need a medical blog to improve rankings?',
        answer:
          'A medical blog is a powerful lever when well executed. Articles should answer real patient questions (inspired by Google People Also Ask), demonstrate verifiable medical expertise, and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries: procedure guides, pre-operative preparation, recovery timelines, pricing breakdowns by insurance type.',
      },
      {
        question: 'How can a clinic appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a clinic must accumulate web authority signals: presence on healthcare directories (Zocdoc, Healthgrades, CQC, JCI listing), recent positive Google reviews, mentions in health press and accreditation listings, and rich factual content on its website. ChatGPT in Search mode does surface specific clinics with ratings and Maps integration. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a clinic?',
        answer:
          'Local SEO targets "clinic + specialty + city" queries and relies on Google Business Profile, patient reviews, and citations on healthcare directories. National SEO targets generic queries ("best private hospital for knee replacement") and requires high-authority educational content and strong backlink profiles. For a single-location clinic, local SEO represents 80% of the opportunity. Rankwell combines both approaches based on the facility\'s geographic reach.',
      },
      {
        question: 'Are healthcare directories and accreditation listings enough to be visible?',
        answer:
          'Directories like Zocdoc and Healthgrades, and accreditation listings like CQC and JCI, are useful for initial visibility and trust, but they create dependency: the clinic is just one entry among thousands. A well-optimized clinic website allows control over branding, publication of detailed medical content, reinforcement of E-E-A-T signals, and construction of lasting authority that no platform can revoke. Rankwell helps clinics build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your clinic visible?',
    description:
      'Request a free GEO & SEO audit of your website. Our SEO & GEO consultants analyze your current rankings on Google and AI engines, and propose a concrete action plan.',
    buttonText: 'Request a free audit',
    buttonHref: '/en/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Doctor', href: '/en/geo-seo-agency/sectors/medecin' },
        { label: 'SEO Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
        { label: 'SEO Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
        { label: 'SEO Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
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
      { label: 'Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
      { label: 'Dermatologist', href: '/en/geo-seo-agency/sectors/dermatologue' },
      { label: 'Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Osteopath', href: '/en/geo-seo-agency/sectors/osteopathe' },
      { label: 'Physiotherapist', href: '/en/geo-seo-agency/sectors/kinesitherapeute' },
    ],
  },

  // Schema.org primary type
  schemaType: 'MedicalClinic',
};

export default data;
