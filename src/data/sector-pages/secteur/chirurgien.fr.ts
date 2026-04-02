/**
 * DATA : Page Secteur Chirurgiens (FR)
 * Route : /agence-geo-seo/secteur/chirurgien
 *
 * Mots-clés Ahrefs (FR) — mars 2026
 * Auto-test LLM réalisé sur 5 requêtes patients
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'chirurgien',
    title: 'Agence GEO & SEO pour Chirurgiens - Rankwell',
    description:
      'Rankwell accompagne les chirurgiens dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur chirurgical.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Chirurgiens' },
    ],
    title: 'GEO & SEO Chirurgien : visibilité Google & moteurs IA',
    subtitle:
      'Vos patients recherchent un chirurgien par spécialité et par ville. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux exigences YMYL du secteur chirurgical.',
    ctaText: 'Demander un audit GEO & SEO chirurgien',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les chirurgiens',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">65 % des requêtes chirurgicales combinent une spécialité et une ville</strong> (« chirurgien orthopédiste autour de moi », « chirurgien esthétique Paris »). Le patient compare 2 à 3 praticiens avant de prendre rendez-vous. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre le Local Pack Google, Doctolib et les recommandations des moteurs IA.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL santé par Google avec exigence E-E-A-T maximale</strong>. Chaque page doit démontrer la qualification du praticien (DESC, DU, inscription à l\'Ordre). Le Code de déontologie médicale interdit la publicité comparative, impose l\'information sur les risques et proscrit toute promesse de résultats chirurgicaux.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, le CNOM, la SOFCPRE et Google Maps</strong> captent la majorité du trafic sur les requêtes « chirurgien + ville ». Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur chirurgical, un praticien reste invisible face à ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'Selon Rankwell, les signaux E-E-A-T ne servent pas qu\'à satisfaire les Quality Raters de Google. Ils constituent le principal critère de sélection des sources par les moteurs IA, qui privilégient les contenus démontrant une expertise vérifiable et une expérience documentée plutôt qu\'une simple autorité de domaine.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'En savoir plus sur l\'E-E-A-T',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs patients tapent sur Google',
    entries: [
      { keyword: 'chirurgien orthopédiste', volume: 13000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'chirurgie esthétique', volume: 9300, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'chirurgien', volume: 7300, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'chirurgien orthopédiste autour de moi', volume: 1700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'chirurgien esthétique', volume: 1200, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'chirurgien esthétique paris', volume: 900, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'chirurgie esthétique paris', volume: 600, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'chirurgie esthétique autour de moi', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'meilleur chirurgien orthopédique rouen', volume: 450, intent: 'locale', difficulty: 'faible' },
      { keyword: 'meilleur chirurgien orthopédique var', volume: 400, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de recherches comme « chirurgien orthopédiste autour de moi » ou « chirurgien esthétique Paris » représentent autant de patients potentiels. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients prennent rendez-vous ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les chirurgiens',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et déontologiques du secteur chirurgical.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site de chirurgien.',
        items: [
          'Structure des pages par spécialité chirurgicale (orthopédie, esthétique, viscérale)',
          'Balises schema.org Physician et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages d\'interventions',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du chirurgien dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du praticien',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu médical',
          'Benchmark concurrentiel sur les requêtes IA chirurgicales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés chirurgicaux',
        subtitle: 'Cartographie des requêtes par spécialité chirurgicale et zone géographique. Identification des combinaisons à fort potentiel et faible concurrence.',
        items: [
          'Combinaisons spécialité + ville (« chirurgien orthopédiste Lyon »)',
          'Analyse des requêtes posées aux moteurs IA (« meilleur chirurgien pour prothèse de hanche »)',
          'Volumes de recherche réels par spécialité et par intervention',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page spécialité (orthopédie, esthétique) vers page intervention vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page d\'intervention',
          'Optimisation des balises title, meta, Hn par spécialité',
        ],
      },
      {
        title: 'Stratégie de contenu médical',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du chirurgien, rédigés pour être citables par les LLM tout en respectant la déontologie médicale.',
        items: [
          'Guides patients par intervention (préparation, déroulement, suites opératoires)',
          'FAQ répondant aux PAA Google sur les questions chirurgicales',
          'Phrases factuelles auto-suffisantes avec données chiffrées (taux de réussite, durées)',
          'Respect du Code de déontologie médicale dans chaque publication',
        ],
      },
      {
        title: 'Autorité & netlinking médical',
        subtitle: 'Développement de l\'autorité via les annuaires médicaux qualifiés et les publications spécialisées en chirurgie.',
        items: [
          'Conseil National de l\'Ordre des Médecins, SOFCPRE, Doctolib',
          'Publications dans la presse médicale spécialisée',
          'Partenariats avec des sites institutionnels de santé (HAS, sociétés savantes)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du chirurgien pour capter les requêtes locales « chirurgien + spécialité + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Surgeon + catégories secondaires par spécialité (Plastic Surgeon, Orthopedic Surgeon)',
          'Gestion des avis patients et stratégie de collecte post-consultation',
          'Photos du cabinet, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires médicaux (Doctolib, Pages Jaunes, CNOM)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité chirurgicale et les demandes de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé et par spécialité',
          'Trafic organique par intervention chirurgicale',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de rendez-vous et conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic site, pages specialites chirurgicales, conformite YMYL, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes chirurgicales, benchmark confreres, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage Physician, MedicalOrganization, MedicalSpecialty, FAQPage avec specialites et actes.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages interventions, fiches patients pre/post-operatoires, FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires medicaux, blogs sante, revues specialisees, Doctolib, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par intervention, trafic organique, demandes de consultation attribuees au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un patient demande à ChatGPT « quel chirurgien esthétique recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel chirurgien esthétique recommandes-tu à Paris ? » : le LLM ne cite aucun praticien par nom. Il fournit 5 à 6 critères de sélection (qualification DESC, inscription à l\'Ordre, expérience dans l\'intervention visée) et oriente vers l\'annuaire du Conseil National de l\'Ordre des Médecins et le répertoire de la SOFCPRE. Le chirurgien qui structure ces critères sur son propre site a plus de chances d\'être extrait comme source.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon chirurgien ? » ou « chirurgien orthopédique vs rhumatologue : qui consulter ? » : le LLM génère un guide structuré en 5 à 7 points, sans citer de praticien. Les comparaisons par spécialité (orthopédie vs rhumatologie, chirurgie esthétique vs médecine esthétique) sont des contenus factuels que les LLM extraient facilement.</p><h4>Requêtes tarifaires</h4><p>« Prix rhinoplastie chirurgien esthétique » : le LLM donne des fourchettes chiffrées (3 000 à 8 000 euros, jusqu\'à 10 000+ euros à Paris). Les sites affichant des grilles tarifaires détaillées par intervention ont le plus de chances d\'être cités comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « chirurgien autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les praticiens disposant d\'une fiche Google Business Profile complète (catégorie Surgeon, avis récents, photos du cabinet) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les chirurgiens, les types schema.org recommandés sont : <code>Physician</code> (type principal), <code>MedicalOrganization</code>, <code>MedicalProcedure</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Physician</code> avec la propriété <code>medicalSpecialty</code> permet à Google et aux LLM d\'identifier précisément la spécialité chirurgicale, la localisation et les qualifications du praticien.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus médicaux), la Légitimité & Citabilité (signaux de confiance externes : Ordre, sociétés savantes, publications), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les chirurgiens',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de chirurgien ?',
        answer:
          'Le budget SEO pour un chirurgien dépend de la spécialité, du nombre d\'interventions référencées et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les chirurgiens démarrent à 1 500 euros par mois pour une spécialité et une ville, et peuvent atteindre 5 000 à 7 000 euros par mois pour un cabinet multi-spécialités en Île-de-France avec plusieurs chirurgiens associés.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO chirurgical ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« chirurgien orthopédiste Rouen » ou « chirurgien viscéral Nantes ») se positionnent plus rapidement que les requêtes nationales très concurrentielles comme « chirurgie esthétique Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre spécialité.',
      },
      {
        question: 'Le SEO est-il compatible avec la déontologie médicale pour un chirurgien ?',
        answer:
          'Le SEO est compatible avec le Code de déontologie médicale, à condition de respecter les limites fixées par l\'Ordre des médecins : pas de publicité comparative, pas de promesses de résultats chirurgicaux, obligation d\'informer sur les risques et alternatives. Rankwell connaît ces contraintes spécifiques au secteur chirurgical et adapte chaque stratégie de contenu pour rester dans le cadre réglementaire tout en maximisant la visibilité.',
      },
      {
        question: 'Faut-il un blog médical pour améliorer le référencement d\'un chirurgien ?',
        answer:
          'Un blog médical est un levier puissant s\'il est bien structuré. Les contenus doivent répondre à des questions réelles des patients (inspirées des PAA Google) : préparation à une intervention, suites opératoires, comparaison entre approches chirurgicales. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles longue traîne, rédigés pour être citables par les moteurs IA.',
      },
      {
        question: 'Comment un chirurgien peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un chirurgien doit accumuler des signaux de notoriété sur le web : présence sur l\'annuaire de l\'Ordre des médecins, profil SOFCPRE ou société savante de sa spécialité, fiche Doctolib optimisée, profil Google Business complet, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour le secteur chirurgical.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un chirurgien ?',
        answer:
          'Le SEO local cible les requêtes « chirurgien + spécialité + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations sur les annuaires médicaux. Le SEO national vise des requêtes génériques (« meilleur chirurgien esthétique en France ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie du cabinet et sa zone de chalandise.',
      },
      {
        question: 'Doctolib et les annuaires médicaux suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Doctolib sont utiles pour la prise de rendez-vous, mais elles créent une dépendance : le chirurgien n\'est qu\'un profil parmi des milliers, trié par proximité et disponibilité plutôt que par expertise. Un site propre bien référencé permet de contrôler son image, de détailler ses interventions et de construire une autorité durable. Rankwell aide les chirurgiens à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre spécialité chirurgicale.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'E-E-A-T', href: '/glossaire/eeat' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Physician',
};

export default data;
