/**
 * DATA : Page Secteur Ophtalmologues (FR)
 * Route : /agence-geo-seo/secteur/ophtalmologue
 *
 * Mots-clés Ahrefs (mars 2026), auto-test LLM réalisé
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'ophtalmologue',
    title: 'Agence GEO & SEO pour Ophtalmologues - Rankwell',
    description:
      'Rankwell accompagne les ophtalmologues dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur ophtalmologique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Ophtalmologues' },
    ],
    title: 'GEO & SEO Ophtalmologue : visibilité Google & moteurs IA',
    subtitle:
      'Avec des délais de rendez-vous parmi les plus longs de la médecine, vos futurs patients cherchent un ophtalmologue disponible sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités de l\'ophtalmologie.',
    ctaText: 'Demander un audit GEO & SEO ophtalmologue',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les ophtalmologues',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Ophtalmologue autour de moi » cumule 18 000 recherches mensuelles en France</strong>, l\'une des requêtes médicales locales les plus volumineuses. La pénurie de praticiens (un ophtalmologue pour 10 000 habitants) intensifie la pression sur le Local Pack. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> dominé par le mobile, où 80 % des recherches sont géolocalisées.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL santé par Google avec exigence E-E-A-T maximale</strong>. Le Code de déontologie médicale (article R.4127-19) interdit la publicité comparative et impose une information loyale. Les contenus doivent distinguer actes médicaux (fond d\'oeil, OCT) et actes chirurgicaux (cataracte, chirurgie réfractive).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib capte 70 à 80 % de la visibilité</strong> sur les requêtes transactionnelles ophtalmologiques. Ameli.fr, PagesJaunes et le Conseil de l\'Ordre occupent les positions restantes. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un cabinet reste invisible face à ces plateformes.',
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
      { keyword: 'ophtalmologue autour de moi', volume: 18000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ophtalmologue paris', volume: 3400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ophtalmologue marseille', volume: 3600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ophtalmologue nantes', volume: 3400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ophtalmologue toulouse', volume: 2600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ophtalmologiste', volume: 2500, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'prix consultation ophtalmo', volume: 1700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'rdv ophtalmo', volume: 1500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'ophtalmo autour de moi', volume: 1100, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'remboursement ophtalmo', volume: 800, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, « ophtalmologue autour de moi » génère à lui seul 18 000 recherches en France, auxquelles s\'ajoutent des milliers de requêtes locales par ville. La majorité de ces patients clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients prennent rendez-vous ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les ophtalmologues',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur ophtalmologique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site médical ophtalmologique.',
        items: [
          'Structure des pages par spécialité (cataracte, glaucome, chirurgie réfractive, rétine)',
          'Balises schema.org Physician et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages pathologies',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet ophtalmologique',
          'Mesure de la légitimité et citabilité du praticien',
          'Évaluation de la densité factuelle du contenu médical',
          'Benchmark concurrentiel sur les requêtes IA en ophtalmologie',
        ],
      },
      {
        title: 'Étude de marché & mots-clés ophtalmologiques',
        subtitle: 'Cartographie des requêtes par spécialité ophtalmologique et zone géographique. Identification des combinaisons à fort potentiel.',
        items: [
          'Combinaisons spécialité + ville (« ophtalmologue glaucome Lyon »)',
          'Analyse des requêtes posées aux moteurs IA sur les pathologies oculaires',
          'Volumes de recherche réels par acte (cataracte, LASIK, fond d\'oeil)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient : de la pathologie vers le praticien, puis vers la prise de rendez-vous.',
        items: [
          'Page pathologie (glaucome, DMLA, myopie) vers page praticien vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par spécialité',
        ],
      },
      {
        title: 'Stratégie de contenu ophtalmologique',
        subtitle: 'Création de contenus éducatifs sur les pathologies et traitements oculaires, rédigés pour être citables par les LLM tout en respectant la déontologie médicale.',
        items: [
          'Guides patients par pathologie (cataracte, presbytie, kératocône)',
          'FAQ répondant aux PAA Google sur les actes et les tarifs',
          'Phrases factuelles auto-suffisantes avec données cliniques vérifiables',
        ],
      },
      {
        title: 'Autorité & netlinking ophtalmologique',
        subtitle: 'Développement de l\'autorité via les annuaires médicaux qualifiés et les publications spécialisées en ophtalmologie.',
        items: [
          'Conseil de l\'Ordre, Ameli.fr, annuaire de la SFO',
          'Publications dans la presse médicale spécialisée',
          'Partenariats avec les sites institutionnels de santé (HAS, Inserm)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes « ophtalmologue + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Ophthalmologist + catégories secondaires (Eye Care Center)',
          'Gestion des avis patients et stratégie de collecte post-consultation',
          'Photos du cabinet, équipements (OCT, rétinographe), horaires et attributs',
          'Citations NAP cohérentes sur Doctolib, PagesJaunes, Ameli.fr',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité ophtalmologique et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé et par pathologie',
          'Trafic organique par spécialité et par ville',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et conversions',
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
        description: 'Diagnostic site du cabinet, pages pathologies oculaires, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes ophtalmologie, benchmark confreres, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage Physician, MedicalOrganization, FAQPage avec pathologies (cataracte, myopie, glaucome) et actes.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages pathologies, fiches examens (fond d\'oeil, OCT, champ visuel), FAQ patient, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires sante, Doctolib, blogs ophtalmologie, presse medicale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par pathologie, trafic organique, prises de RDV attribuees au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet d\'ophtalmologie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel ophtalmologue recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel ophtalmologue à Lyon ? » : le LLM ne cite pas de praticien ni de cabinet. Il fournit une liste de critères de sélection (spécialisation, secteur de conventionnement, avis patients, équipements du cabinet) et renvoie vers Doctolib, Ameli.fr et l\'annuaire du Conseil de l\'Ordre. En mode Search, ChatGPT active une carte Maps avec les cabinets géolocalisés disposant d\'une fiche Google Business Profile complète.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un ophtalmologue ? » : le LLM génère un guide structuré en 5 à 7 critères (spécialisation par pathologie, secteur 1 vs secteur 2, équipements diagnostiques, délai de rendez-vous, proximité). Aucun praticien ni source externe cité. Le cabinet qui publie ce type de contenu structuré sur son site peut être extrait comme référence.</p><h4>Requêtes tarifaires</h4><p>« Prix consultation ophtalmologue » : le LLM donne des fourchettes précises : 30 euros en secteur 1 (tarif conventionnel), 50 à 120 euros en secteur 2 selon la ville. Il détaille le remboursement Sécurité sociale (base de 25 euros remboursés à 70 %). Les sites publiant des grilles tarifaires actualisées par acte (fond d\'oeil, OCT, champ visuel) sont les plus susceptibles d\'être cités.</p><h4>Requêtes locales et Maps</h4><p>Sur « ophtalmologue autour de moi sans rdv », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Le LLM précise que les consultations sans rendez-vous sont rares en ophtalmologie en raison de la pénurie de praticiens (délai moyen de 80 jours en France) et oriente vers les urgences ophtalmologiques ou le protocole de coopération ophtalmologue-orthoptiste.</p>',
    structuredData:
      '<p>Pour les cabinets d\'ophtalmologie, les types schema.org recommandés sont : <code>Physician</code> (type principal), <code>MedicalOrganization</code>, <code>MedicalClinic</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Physician</code> avec la spécialité <code>Ophthalmology</code> permet à Google et aux LLM d\'identifier précisément le domaine de compétence, la localisation et les pathologies traitées par le praticien.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet d\'ophtalmologie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les pathologies oculaires), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les ophtalmologues',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'ophtalmologue ?',
        answer:
          'Le budget SEO pour un cabinet d\'ophtalmologie dépend du nombre de spécialités pratiquées et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les ophtalmologues démarrent à 1 500 euros par mois pour une spécialité et une ville, et peuvent atteindre 4 000 à 6 000 euros par mois pour un cabinet multi-spécialités couvrant une métropole entière.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO ophtalmologique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« ophtalmologue glaucome Nantes ») sont plus rapides à positionner que les requêtes métropolitaines très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau de saturation de Doctolib sur votre zone.',
      },
      {
        question: 'Le SEO est-il compatible avec la déontologie médicale des ophtalmologues ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de déontologie médicale, à condition de respecter l\'article R.4127-19 : pas de publicité comparative, information loyale et vérifiable, pas de promesses de résultats cliniques. Les contenus éducatifs sur les pathologies oculaires (cataracte, DMLA, glaucome) sont non seulement autorisés mais encouragés par la HAS. Rankwell connaît ces contraintes et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog médical pour améliorer son référencement ophtalmologique ?',
        answer:
          'Un blog médical est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (symptômes, déroulement d\'un examen, préparation opératoire), démontrer une expertise médicale vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois ciblant des requêtes informationnelles de longue traîne liées aux pathologies oculaires.',
      },
      {
        question: 'Comment un ophtalmologue peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet d\'ophtalmologie doit accumuler des signaux de notoriété sur le web : présence sur les annuaires médicaux (Conseil de l\'Ordre, SFO, Ameli.fr), mentions dans la presse santé, fiche Google Business Profile optimisée, contenus riches et factuels sur les pathologies traitées. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un ophtalmologue ?',
        answer:
          'Le SEO local cible les requêtes « ophtalmologue + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations sur Doctolib et Ameli.fr. Le SEO national vise des requêtes génériques (« meilleur chirurgien cataracte ») et nécessite du contenu éducatif à forte autorité médicale. Rankwell combine les deux approches selon la stratégie du cabinet et ses spécialités chirurgicales.',
      },
      {
        question: 'Doctolib suffit-il pour être visible en tant qu\'ophtalmologue ?',
        answer:
          'Doctolib est indispensable pour la prise de rendez-vous, mais la plateforme crée une dépendance : votre cabinet n\'est qu\'un profil parmi des centaines, trié par disponibilité et non par expertise. Un site propre bien référencé permet de contrôler votre image, de valoriser vos spécialités chirurgicales et de construire une autorité durable que Doctolib ne peut pas retirer. Rankwell aide les ophtalmologues à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante de la plateforme.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet d\'ophtalmologie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
        { label: 'SEO Clinique', href: '/agence-geo-seo/secteur/clinique' },
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
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Opticien', href: '/agence-geo-seo/secteur/opticien' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Physician',
};

export default data;
