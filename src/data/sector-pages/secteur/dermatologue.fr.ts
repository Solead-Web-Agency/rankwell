/**
 * DATA : Page Secteur Dermatologues (FR)
 * Route : /agence-geo-seo/secteur/dermatologue
 *
 * Mots-clés Ahrefs (country: fr) - mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'dermatologue',
    title: 'Agence GEO & SEO pour Dermatologues - Rankwell',
    description:
      'Rankwell accompagne les dermatologues dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur dermatologique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Dermatologues' },
    ],
    title: 'GEO & SEO Dermatologue : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs patients vous cherchent sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes de la dermatologie et aux délais d\'attente record du secteur.',
    ctaText: 'Demander un audit GEO & SEO dermatologue',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les dermatologues',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Dermatologue » cumule 110 000 recherches mensuelles en France</strong>, dont 85 % contiennent un nom de ville ou « autour de moi ». C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le patient choisit parmi les 3 premiers résultats du Local Pack Google ou les recommandations d\'un moteur IA.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google avec exigence E-E-A-T maximale</strong>. La dermatologie couvre des actes médicaux remboursés (dépistage mélanome, traitement eczéma) et des actes esthétiques non remboursés (peeling, laser, injections). Le Code de déontologie médicale encadre strictement la communication des praticiens.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib capte 70 à 80 % de la visibilité</strong> sur les requêtes « dermatologue + ville ». Les plateformes de téléconsultation (Qare, Livi) et les annuaires du CNOM complètent le paysage. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée en santé, un cabinet reste invisible face à ces plateformes.',
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
      { keyword: 'dermatologue', volume: 110000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'dermatologue autour de moi', volume: 16000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dermatologue paris', volume: 7600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dermatologue lyon', volume: 6900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dermatologue bordeaux', volume: 4800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dermatologue marseille', volume: 4400, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'dermatologue nantes', volume: 4100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dermatologue rdv rapide', volume: 3700, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'dermatologie esthétique', volume: 400, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'dermatologue esthétique', volume: 350, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 110 000 recherches sont effectuées sur le seul mot « dermatologue » en France. Les requêtes locales (« dermatologue autour de moi », « dermatologue paris ») représentent des milliers de patients en quête d\'un praticien disponible. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients prennent rendez-vous ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les dermatologues',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur dermatologique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site de dermatologue.',
        items: [
          'Structure des pages par acte (dermatologie médicale, chirurgicale, esthétique)',
          'Balises schema.org Physician et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet de dermatologie',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA en dermatologie',
        ],
      },
      {
        title: 'Étude de marché & mots-clés dermatologiques',
        subtitle: 'Cartographie des requêtes par type d\'acte et zone géographique. Identification des combinaisons « dermatologue + ville » à faible concurrence.',
        items: [
          'Combinaisons spécialité + ville (dermatologue esthétique Lyon, peeling laser Paris)',
          'Analyse des requêtes posées aux moteurs IA sur la peau et les soins',
          'Volumes de recherche réels par acte dermatologique',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page acte (peeling, laser, dépistage) vers page praticien vers page prise de rendez-vous',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu dermatologique',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du dermatologue, rédigés pour être citables par les LLM.',
        items: [
          'Guides patients : acné, eczéma, mélanome, vieillissement cutané',
          'Phrases factuelles auto-suffisantes avec données chiffrées (taux de guérison, durée de traitement)',
          'Respect du Code de déontologie médicale dans la communication',
        ],
      },
      {
        title: 'Autorité & netlinking en dermatologie',
        subtitle: 'Développement de l\'autorité via les sources médicales qualifiées et les publications spécialisées.',
        items: [
          'Annuaire du CNOM, Doctolib, annuaires santé régionaux',
          'Publications dans la presse médicale (Journal of the European Academy of Dermatology, Annales de Dermatologie)',
          'Partenariats avec des sites institutionnels de santé',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « dermatologue + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Dermatologist + catégories secondaires par acte',
          'Gestion des avis patients et stratégie de collecte',
          'Photos du cabinet, horaires, attributs (téléconsultation, accessibilité)',
          'Citations NAP cohérentes sur les annuaires médicaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par acte dermatologique et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type d\'acte',
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
        description: 'Diagnostic site, pages pathologies cutanees et actes esthetiques, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes dermatologie, benchmark confreres, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage Physician, Dermatology, FAQPage avec pathologies (acne, eczema, psoriasis) et actes (peeling, laser).',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages pathologies, fiches soins esthetiques, FAQ patient, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires sante, Doctolib, blogs dermatologie, presse beaute/sante, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par pathologie/soin, trafic organique, prises de RDV attribuees, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel dermatologue recommandes-tu à Marseille ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel dermatologue à Marseille ? » : le LLM ne cite aucun praticien par nom. Il fournit une liste de critères de sélection (spécialisation, conventionnement secteur 1 ou 2, avis patients, délai de rendez-vous) et redirige vers Doctolib, l\'annuaire du CNOM et les Pages Jaunes.</p><h4>Requêtes d\'information et de choix</h4><p>« Comment choisir un bon dermatologue ? » : le LLM génère un guide structuré en 5 à 7 critères (inscription au CNOM, secteur de conventionnement, spécialisation en dermatologie médicale ou esthétique, avis, proximité). Aucun praticien ni source externe n\'est cité. Le cabinet qui publie ce type de contenu factuel sur son site peut devenir une source de référence.</p><h4>Requêtes comparatives</h4><p>« Dermatologue vs esthéticienne pour l\'acné ? » : le LLM détaille la formation du dermatologue (6 ans de médecine + 4 ans de DES), sa capacité à prescrire (isotrétinoïne, antibiotiques) et à réaliser des actes médicaux (peeling chimique, laser). Les sites qui structurent cette comparaison avec des données précises sont les plus susceptibles d\'être extraits.</p><h4>Requêtes tarifaires</h4><p>« Prix consultation dermatologue » : le LLM donne des fourchettes chiffrées : 30 euros en secteur 1, 50 à 120 euros en secteur 2, peeling 80 à 200 euros, laser 100 à 400 euros par séance. Les sites proposant des grilles tarifaires actualisées ont le plus de chances d\'être cités comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « dermatologue autour de moi sans délai », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie Dermatologist, avis récents, photos du cabinet) apparaissent directement dans la réponse IA. Le LLM mentionne aussi la téléconsultation comme alternative aux délais moyens de 2 à 6 mois.</p>',
    structuredData:
      '<p>Pour les cabinets de dermatologie, les types schema.org recommandés sont : <code>Physician</code> (type principal), <code>MedicalOrganization</code>, <code>MedicalSpecialty</code> (avec la valeur <code>Dermatology</code>), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Physician</code> combiné à <code>MedicalSpecialty</code> permet à Google et aux LLM d\'identifier précisément le champ de compétence, la localisation et les actes pratiqués par le dermatologue.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus dermatologiques), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les dermatologues',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de dermatologue ?',
        answer:
          'Le budget SEO pour un cabinet de dermatologie dépend du nombre d\'actes référencés et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les dermatologues démarrent à 1 500 euros par mois pour un cabinet mono-site, et peuvent atteindre 4 000 à 6 000 euros par mois pour un centre de dermatologie multi-praticiens couvrant plusieurs villes.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO dermatologique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (par exemple « dermatologue esthétique Nantes ») sont plus rapides à positionner que les requêtes nationales très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et la densité de praticiens dans la zone visée.',
      },
      {
        question: 'La communication en dermatologie est-elle encadrée par la déontologie ?',
        answer:
          'Oui, le Code de déontologie médicale (articles R.4127-19 et R.4127-20) encadre strictement la publicité des médecins. Un dermatologue ne peut pas afficher de témoignages patients à visée promotionnelle ni comparer ses résultats à ceux de confrères. Rankwell connaît ces contraintes et adapte chaque stratégie de contenu pour respecter les règles du Conseil de l\'Ordre tout en maximisant la visibilité.',
      },
      {
        question: 'Faut-il un blog médical pour améliorer son référencement en dermatologie ?',
        answer:
          'Un blog médical est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (acné, eczéma, taches brunes, protection solaire), démontrer une expertise médicale vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne spécifiques à la dermatologie.',
      },
      {
        question: 'Comment un dermatologue peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet de dermatologie doit accumuler des signaux de notoriété sur le web : présence sur les annuaires médicaux (CNOM, Doctolib), mentions dans la presse santé, profil Google Business optimisé, contenus riches et factuels sur son site (guides pathologies, grilles tarifaires). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un dermatologue ?',
        answer:
          'Le SEO local cible les requêtes « dermatologue + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations dans les annuaires médicaux. Le SEO national vise des requêtes génériques (« meilleur dermatologue pour l\'acné ») et nécessite du contenu éducatif à forte autorité médicale. Rankwell combine les deux approches selon la stratégie du cabinet et sa zone de chalandise.',
      },
      {
        question: 'Doctolib suffit-il pour être visible en tant que dermatologue ?',
        answer:
          'Doctolib est incontournable pour la prise de rendez-vous, mais il crée une dépendance : le dermatologue n\'est qu\'un profil parmi des centaines dans sa ville. Un site propre bien référencé permet de contrôler son image, de détailler ses spécialités (dermatologie esthétique, chirurgicale, pédiatrique) et de construire une autorité durable que Doctolib ne peut pas retirer. Rankwell aide les cabinets à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
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
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Physician',
};

export default data;
