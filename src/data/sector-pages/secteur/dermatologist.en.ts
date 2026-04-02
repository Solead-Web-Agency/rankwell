/**
 * DATA: Sector Page Dermatologists (EN)
 * Route: /en/geo-seo-agency/sectors/dermatologue
 *
 * Adapted for US / UK / UAE markets
 * Keyword data: industry sources (AAD, BAD, Healthgrades, Zocdoc), March 2026
 * LLM test: rapport-test-dermatologue-en.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'dermatologist',
    title: 'GEO & SEO Agency for Dermatologists - Rankwell',
    description:
      'Rankwell helps dermatology practices boost their Google rankings and AI engine visibility (ChatGPT, Perplexity). Tailored GEO & SEO strategy for the dermatology industry.',
  },

  // ============================================
  // BLOC 1: HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'GEO & SEO Agency', href: '/en/geo-seo-agency' },
      { label: 'Sectors', href: '/en/geo-seo-agency/sectors' },
      { label: 'Dermatologists' },
    ],
    title: 'GEO & SEO for Dermatologists: Google & AI Engine Visibility',
    subtitle:
      'Healthgrades, Zocdoc, and the NHS capture most clicks on dermatology queries. Our experts design GEO & SEO strategies to make your practice visible on Google and in ChatGPT and Perplexity responses.',
    ctaText: 'Request a GEO & SEO audit for your dermatology practice',
    ctaHref: '/en/contact',
  },

  // ============================================
  // BLOC 2: Why SEO is different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Why SEO is different for dermatologists',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Over 550,000 monthly searches for "dermatologist near me" in the US</strong>. Patients search by condition (acne, eczema) and city. Decisions happen in Google\'s Local Pack or AI engine responses.',
    constraints:
      'Dermatology is classified <strong class="text-secondary dark:text-accent">YMYL</strong> by Google, triggering the highest E-E-A-T bar. Content must show verifiable expertise (board certifications, fellowship training). An <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">SEO and GEO agency</a> must navigate HIPAA/FTC (US), GMC/ASA (UK), and DHA (UAE) regulations.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Healthgrades, Zocdoc, RealSelf</strong> (US), <strong class="text-secondary dark:text-accent">NHS, BAD directory</strong> (UK), <strong class="text-secondary dark:text-accent">DHA app, Practo</strong> (UAE) dominate high-intent dermatology queries. Without a <a href="/en/geo-seo-agency" class="text-rw-blue hover:underline">GEO & SEO strategy</a>, a practice stays invisible against these aggregators.',
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
        { keyword: 'dermatologist near me', volume: 550000, intent: 'locale', difficulty: 'très élevée' },
        { keyword: 'best dermatologist near me', volume: 110000, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'cosmetic dermatologist near me', volume: 40500, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'dermatologist for acne', volume: 33100, intent: 'commerciale', difficulty: 'élevée' },
        { keyword: 'pediatric dermatologist near me', volume: 27100, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a dermatologist cost', volume: 18100, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'board certified dermatologist near me', volume: 14800, intent: 'locale', difficulty: 'moyenne' },
      ],
      uk: [
        { keyword: 'dermatologist near me', volume: 22200, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'private dermatologist London', volume: 6600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'dermatologist NHS', volume: 4400, intent: 'informationnelle', difficulty: 'moyenne' },
        { keyword: 'best dermatologist London', volume: 3600, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'skin specialist near me', volume: 2900, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'how much does a private dermatologist cost UK', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
        { keyword: 'dermatologist for eczema', volume: 1600, intent: 'commerciale', difficulty: 'faible' },
      ],
      uae: [
        { keyword: 'dermatologist Dubai', volume: 9900, intent: 'locale', difficulty: 'élevée' },
        { keyword: 'best dermatologist in Dubai', volume: 6600, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'skin doctor Dubai', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'cosmetic dermatologist Dubai', volume: 2900, intent: 'commerciale', difficulty: 'moyenne' },
        { keyword: 'dermatologist Abu Dhabi', volume: 2400, intent: 'locale', difficulty: 'moyenne' },
        { keyword: 'skin specialist Dubai', volume: 1900, intent: 'locale', difficulty: 'faible' },
        { keyword: 'dermatologist consultation Dubai', volume: 1000, intent: 'commerciale', difficulty: 'faible' },
      ],
    },
    interpretation:
      'Every month, over half a million searches for "dermatologist near me" in the US alone represent patients actively seeking a skin specialist. In the UK, "dermatologist near me" and "private dermatologist London" generate tens of thousands of searches. The majority click on the top 3 results, or follow the recommendation of an AI engine. If your practice does not appear there, those patients book with a competitor.',
  },

  // ============================================
  // BLOC 4: Methodology (StepsDimensions)
  // ============================================
  methodology: {
    title: 'Our GEO & SEO methodology for dermatology practices',
    subtitle: 'A structured SEO approach in 8 steps, adapted to the regulatory constraints of the dermatology industry across the US, UK, and UAE markets.',
    steps: [
      {
        title: 'Technical & semantic audit',
        subtitle: 'Full analysis of the practice website architecture, loading speed, and technical factors blocking indexation.',
        items: [
          'Page structure by treatment type (medical dermatology, cosmetic, surgical)',
          'Schema.org Physician and MedicalSpecialty (Dermatology) markup',
          'Performance and Core Web Vitals (mobile-first for healthcare)',
          'Crawl and indexation by Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'GEO audit: citability and AI presence',
        subtitle: 'Assessment of the practice\'s current visibility in AI engines (ChatGPT, Perplexity, Gemini) via Rankwell\'s proprietary GEO audit.',
        items: [
          'Analysis of the practice\'s informational universe in dermatology',
          'Measurement of legitimacy and citability',
          'Evaluation of content factual density',
          'Competitive benchmark on AI queries for skin conditions',
        ],
      },
      {
        title: 'Market study & dermatology keyword research',
        subtitle: 'Mapping of search queries by treatment type and geographic area across US, UK, and UAE markets. Identification of high-potential gaps.',
        items: [
          'Treatment + city combinations with low competition (cosmetic dermatologist + city, acne specialist + city)',
          'Analysis of queries asked to AI engines about skin conditions',
          'Real search volumes by dermatological procedure and market',
        ],
      },
      {
        title: 'Architecture & on-page optimization',
        subtitle: 'Website restructuring with internal linking designed for the patient journey and Google crawl efficiency.',
        items: [
          'Condition page > treatment page > dermatologist page > booking page',
          'Primary keyword + 3-5 secondary keywords per page',
          'Title tag, meta description, and heading optimization',
        ],
      },
      {
        title: 'Dermatology content strategy',
        subtitle: 'Creation of educational content demonstrating the dermatologist\'s expertise, written to be citable by LLMs while complying with medical advertising regulations.',
        items: [
          'Condition guides and treatment articles answering Google People Also Ask (acne, eczema, psoriasis, melanoma)',
          'Self-sufficient factual sentences with verifiable data (treatment success rates, recovery timelines)',
          'Compliance with HIPAA (US), GMC and ASA guidelines (UK), DHA regulations (UAE)',
        ],
      },
      {
        title: 'Authority & dermatology link building',
        subtitle: 'Authority development through qualified healthcare directories and dermatology publications.',
        items: [
          'AAD directory, Healthgrades, Zocdoc, RealSelf, Vitals (US)',
          'BAD directory, NHS Choices, private dermatology directories (UK)',
          'DHA licensed provider directory, Practo, Dubai Health (UAE)',
        ],
      },
      {
        title: 'Google Business Profile & local SEO',
        subtitle: 'Optimization of the practice\'s Google Business Profile to capture local "dermatologist + city" queries and appear in the Local Pack and geolocated AI responses.',
        items: [
          'Primary category Dermatologist + secondary categories (Cosmetic dermatologist, Skin care clinic)',
          'Patient review management and collection strategy',
          'Photos, consultation hours, attributes (telehealth, accessibility)',
          'Consistent NAP citations across medical and dermatology directories',
        ],
      },
      {
        title: 'Tracking, reporting & iterations',
        subtitle: 'Monthly reporting including Google positions, organic traffic by dermatological condition, and appointment bookings generated.',
        items: [
          'Google positions by dermatology keyword',
          'Organic traffic by condition and treatment type',
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
    subtitle: 'Each deliverable is a document or tool your dermatology practice team, web developer, or management can act on immediately.',
    items: [
      {
        id: 1,
        title: 'Technical audit report',
        description: 'Full diagnostic of your practice website: YMYL compliance, page architecture by skin condition and cosmetic procedure, loading speed, Google and AI bot indexation, with a prioritized list of corrective actions.',
      },
      {
        id: 2,
        title: 'GEO audit report',
        description: 'Citability tests of your practice in ChatGPT, Perplexity, and Gemini on your target dermatology queries. Benchmark against 3 to 5 competing practices and platforms, and GEO Score out of 100 (Informational Universe, Legitimacy, Factual Density).',
      },
      {
        id: 3,
        title: 'Turnkey schema.org kit',
        description: 'Physician, MedicalOrganization, MedicalSpecialty (Dermatology), and FAQPage markup ready to integrate, adapted to your treatment offerings (acne, eczema, psoriasis, cosmetic procedures). Delivered with a CMS integration guide.',
      },
      {
        id: 4,
        title: 'Content production & integration',
        description: 'Writing of condition pages (acne, eczema, melanoma, aging skin), treatment guides (chemical peels, laser therapy, Botox), and FAQs inspired by Google People Also Ask. Direct integration on your CMS, with page template creation if needed.',
      },
      {
        id: 5,
        title: 'Link building management',
        description: 'Backlink acquisition from healthcare directories (AAD, Healthgrades, Zocdoc, BAD), dermatology blogs, and health press. Tracking of links obtained and Domain Rating progression of your practice.',
      },
      {
        id: 6,
        title: 'Monthly SEO and GEO report',
        description: 'Tracking of Google positions by condition page and local keyword, organic traffic by dermatological specialty, GEO Score evolution, and adjustment recommendations for the following month.',
      },
    ],
  },

  // ============================================
  // BLOC 6: AI Visibility
  // ============================================
  geoVisibility: {
    title: 'AI Visibility: your practice in ChatGPT, Perplexity, and Google AI',
    intro:
      'When a patient asks ChatGPT "which dermatologist do you recommend in London for eczema?", the LLM compiles information from across the web to formulate its response. If your practice does not appear in any cited source, it is invisible in this new patient acquisition channel.',
    llmBehavior:
      '<h4>Recommendation queries: dermatologists named with credentials</h4><p>ChatGPT names specific dermatologists on UK queries. On "best dermatologist in London for eczema treatment", the LLM listed 4 consultant dermatologists with clinic names, locations, and specializations (Dr. Alexis Granite at The Cadogan Clinic, Dr. Anjali Mahto at Skin Health Spa, Professor Carsten Flohr at St John\'s Institute of Dermatology). Dermatologists with published research, hospital affiliations, and strong web profiles are surfaced directly in the AI response.</p><h4>Informational queries</h4><p>"How to find a good board-certified dermatologist near me?": the LLM generates a structured 6-step guide citing AAD (aad.org), the American Board of Dermatology (abderm.org), Healthgrades, Zocdoc, and Vitals as authoritative resources. No individual practice is cited. A dermatology practice publishing board certification details and AAD affiliation on its website strengthens its citability on these queries.</p><h4>Comparative queries</h4><p>"Dermatologist vs esthetician: what is the difference?": the LLM details the dermatologist\'s training (medical school + dermatology residency), prescribing capabilities (isotretinoin, antibiotics), and scope of medical and cosmetic procedures (Botox, chemical peels, laser, excisions). No source is cited. Sites that structure this comparison with precise training data and procedure lists have the highest chance of being extracted as a reference.</p><h4>Pricing queries</h4><p>"How much does a dermatologist cost in the US and UK?": the LLM gives detailed pricing ranges. US without insurance: USD 100-300 initial consultation, USD 75-200 follow-up, USD 150-500+ for specialized procedures. US with insurance: USD 20-50 copay. UK NHS: free via GP referral with long wait times. UK private: GBP 100-250 initial, GBP 50-150 follow-up. Sites providing precise, up-to-date pricing data by treatment type have the highest chance of being cited.</p><h4>Local and Maps queries</h4><p>On "dermatologist near me for acne", <strong>ChatGPT activates Search mode with a Maps card</strong>. Practices with a complete Google Business Profile (category Dermatologist, recent patient reviews, photos, updated consultation hours) appear directly in the AI response.</p>',
    structuredData:
      '<p>For dermatology practices, the recommended schema.org types are: <code>Physician</code> (primary type), <code>MedicalOrganization</code>, <code>MedicalSpecialty</code> (with the value <code>Dermatology</code>), <code>FAQPage</code>, <code>BreadcrumbList</code>. The <code>Physician</code> markup combined with <code>MedicalSpecialty</code> allows Google and LLMs to precisely identify the dermatologist\'s scope of practice, board certifications, location, and treatment offerings.</p>',
    geoScore:
      '<p>The <strong>Rankwell GEO Score</strong> measures your practice\'s citability by AI engines on a scale of 0 to 100. It evaluates three dimensions: Informational Universe (presence and depth of dermatology content), Legitimacy & Citability (external trust signals: medical directories, patient reviews, dermatology publications), and Factual Density (richness of structured data and named medical entities).</p>',
    glossaryLinks: [
      { label: 'What is GEO?', href: '/en/glossary/geo' },
      { label: 'GEO Audit: full method', href: '/en/glossary/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8: FAQ
  // ============================================
  faq: {
    title: 'Frequently asked questions: SEO for dermatologists',
    items: [
      {
        question: 'How much does SEO cost for a dermatology practice?',
        answer:
          'The SEO budget for a dermatology practice depends on the number of dermatologists, treatment types covered (medical, cosmetic, surgical), and the geographic scope targeted. At Rankwell, SEO engagements for dermatology practices start from USD 2,000/month (or GBP 1,600/month) for a single-dermatologist practice in one city, and can reach USD 6,000-8,000/month for a multi-provider clinic covering cosmetic and medical dermatology across competitive metropolitan areas like New York, London, or Dubai.',
      },
      {
        question: 'How long does it take to see results from dermatology SEO?',
        answer:
          'Initial results typically appear between 3 and 6 months. Niche local queries (e.g., "cosmetic dermatologist Scottsdale" or "private dermatologist Manchester") are faster to rank for than nationally competitive terms. Rankwell provides a realistic timeline based on the initial competitive analysis and the density of dermatology practices in the target area.',
      },
      {
        question: 'Is SEO compatible with medical advertising regulations for dermatologists?',
        answer:
          'Yes, SEO is fully compatible with healthcare advertising rules, provided certain limits are respected. In the US, HIPAA restricts the use of patient information, and the FTC monitors health claims. The AAD also provides ethical guidelines for dermatology advertising. In the UK, the GMC and ASA require that all medical content is accurate and not misleading. In the UAE, the DHA enforces strict rules on medical advertising, including mandatory license display. Rankwell understands these constraints and adapts every strategy accordingly.',
      },
      {
        question: 'Does a dermatology practice need a medical blog to improve rankings?',
        answer:
          'A dermatology blog is a powerful lever when well executed. Articles should answer real patient questions (inspired by Google People Also Ask) about conditions like acne, eczema, psoriasis, and skin aging. Content must demonstrate verifiable medical expertise and be written to be citable by AI engines. Rankwell recommends 2-4 articles per month targeting long-tail informational queries specific to dermatology.',
      },
      {
        question: 'How can a dermatologist appear in ChatGPT responses?',
        answer:
          'To be cited by ChatGPT or Perplexity, a dermatology practice must accumulate web authority signals: presence on medical directories (AAD, Healthgrades, Zocdoc, BAD), recent positive Google reviews, board certification details prominently displayed, and rich factual content on its website. ChatGPT in Search mode names specific dermatologists with clinic names and credentials on UK market queries. The Rankwell GEO Score measures and optimizes precisely these AI citability signals.',
      },
      {
        question: 'What is the difference between local SEO and national SEO for a dermatologist?',
        answer:
          'Local SEO targets "dermatologist + specialty + city" queries and relies on Google Business Profile, patient reviews, and citations on medical directories. National SEO targets generic queries ("best treatment for adult acne") and requires high-authority educational content. For a neighborhood practice, local SEO represents 80% of the potential. Rankwell combines both approaches based on the practice\'s strategy and whether it offers specialized or cosmetic services that attract patients beyond the local area.',
      },
      {
        question: 'Are Healthgrades, Zocdoc, and medical directories enough to be visible as a dermatologist?',
        answer:
          'Medical directories like Healthgrades and Zocdoc are useful for initial visibility and appointment booking, but they create dependency: the dermatologist is just one profile among thousands, subject to the platform\'s algorithm and review system. A well-optimized practice website allows control over branding, publication of expert dermatology content (condition guides, treatment comparisons, before/after case studies), and construction of lasting authority that no platform can revoke. Rankwell helps dermatology practices build this independent authority through a GEO & SEO strategy that does not depend on aggregators.',
      },
    ],
  },

  // ============================================
  // CTA + Internal linking
  // ============================================
  cta: {
    title: 'Ready to make your dermatology practice visible?',
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
      { label: 'Dentist', href: '/en/geo-seo-agency/sectors/dentiste' },
      { label: 'Surgeon', href: '/en/geo-seo-agency/sectors/chirurgien' },
      { label: 'Ophthalmologist', href: '/en/geo-seo-agency/sectors/ophtalmologue' },
      { label: 'Pharmacist', href: '/en/geo-seo-agency/sectors/pharmacie' },
      { label: 'Psychologist', href: '/en/geo-seo-agency/sectors/psychologue' },
    ],
  },

  // Schema.org primary type
  schemaType: 'Physician',
};

export default data;
