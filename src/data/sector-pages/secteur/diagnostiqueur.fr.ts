/**
 * DATA : Page Secteur Diagnostiqueurs immobiliers (FR)
 * Route : /agence-geo-seo/secteur/diagnostiqueur
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'diagnostiqueur',
    title: 'Agence GEO & SEO pour Diagnostiqueurs - Rankwell',
    description:
      'Rankwell accompagne les diagnostiqueurs immobiliers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le diagnostic immobilier.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Diagnostiqueurs immobiliers' },
    ],
    title: 'GEO & SEO Diagnostiqueur immobilier : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients comparent les prix et la disponibilité d\'un diagnostiqueur avant même de décrocher le téléphone. Nos experts conçoivent des stratégies de référencement GEO & SEO calibrées pour le secteur du diagnostic immobilier.',
    ctaText: 'Demander un audit GEO & SEO diagnostiqueur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les diagnostiqueurs immobiliers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches diagnostic immobilier contiennent un critère géographique</strong> (« diagnostic immobilier autour de moi », « diagnostiqueur Toulouse »). Le propriétaire cherche un professionnel disponible rapidement dans sa zone. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue en quelques minutes entre les 3 premiers résultats du Local Pack ou la recommandation d\'un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La certification Cofrac est obligatoire pour exercer</strong> (articles L. 271-4 à L. 271-6 du Code de la construction), avec renouvellement tous les 7 ans et assurance RC Pro. Le contenu publié doit refléter ces obligations réglementaires pour satisfaire les exigences E-E-A-T de Google sur ce secteur YMYL.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">AlloImmo, Arliane, MeilleurDiag, Allodiagnostic</strong> dominent les résultats Google sur les requêtes transactionnelles et prélèvent une commission sur chaque mission. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un cabinet de diagnostic reste noyé sous ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'diagnostic immobilier', volume: 18000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'prix dpe', volume: 2500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'prix diagnostic immobilier', volume: 1700, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier autour de moi', volume: 700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'diagnostic immobilier location', volume: 700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier paris', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier obligatoire', volume: 600, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier marseille', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier toulouse', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'diagnostic immobilier lille', volume: 250, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de propriétaires et de vendeurs tapent « diagnostic immobilier autour de moi » ou « prix diagnostic immobilier » pour trouver un professionnel certifié. La majorité contacte l\'un des 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre cabinet de diagnostic n\'y figure pas, ces missions vont à vos concurrents ou aux plateformes de mise en relation.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les diagnostiqueurs immobiliers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et concurrentielles du secteur du diagnostic immobilier.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation sur les requêtes liées au diagnostic immobilier.',
        items: [
          'Structure des pages par type de diagnostic (DPE, amiante, électricité, gaz)',
          'Balises schema.org ProfessionalService',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages géolocalisées',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre cabinet de diagnostic dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre cabinet',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA du diagnostic immobilier',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du diagnostic',
        subtitle: 'Cartographie des requêtes par type de diagnostic et zone géographique. Identification des combinaisons « diagnostic + ville » à faible concurrence et fort potentiel.',
        items: [
          'Combinaisons type de diagnostic + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur le DPE et les obligations',
          'Volumes de recherche réels par spécialité (amiante, plomb, termites, gaz)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne conçu pour le parcours du propriétaire vendeur ou bailleur.',
        items: [
          'Page type de diagnostic (DPE, amiante, plomb) vers page zone d\'intervention vers page devis',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec les combinaisons géolocalisées',
        ],
      },
      {
        title: 'Stratégie de contenu diagnostic immobilier',
        subtitle: 'Création de contenus pédagogiques sur les obligations réglementaires, les réformes DPE et les prix, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : obligations par type de transaction (vente, location, copropriété)',
          'Phrases factuelles auto-suffisantes avec données réglementaires à jour',
          'FAQ sur les durées de validité, les tarifs et les certifications Cofrac',
        ],
      },
      {
        title: 'Autorité & netlinking diagnostic',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels et les publications spécialisées du secteur immobilier.',
        items: [
          'Inscription sur les annuaires Cofrac et FIDI',
          'Publications sur les sites spécialisés (DiagActu, Batiactu, LeMoniteur)',
          'Partenariats avec les sites institutionnels et notariaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de votre cabinet pour capter les requêtes « diagnostic immobilier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale « Service de diagnostic immobilier » + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte post-intervention',
          'Photos des rapports, certifications affichées, zone d\'intervention précisée',
          'Citations NAP cohérentes sur les annuaires du diagnostic et de l\'immobilier',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de diagnostic et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par type de diagnostic',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions',
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
        description: 'Diagnostic site, pages diagnostics (DPE, amiante, plomb, \u00e9lectricit\u00e9), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates diagnostic immobilier, benchmark confr\u00e8res, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage ProfessionalService, Service, FAQPage avec types de diagnostics et zones d\'intervention.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages diagnostics, guides r\u00e9glementation (DPE obligatoire, audit \u00e9nerg\u00e9tique), FAQ tarifs, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires immobiliers, blogs habitat/r\u00e9novation, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par type de diagnostic et zone, trafic organique, demandes de devis attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet de diagnostic dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un propriétaire demande à ChatGPT « quel diagnostiqueur immobilier recommandes-tu à Toulouse ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de missions.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel diagnostiqueur immobilier recommandes-tu à Toulouse ? » : le LLM ne cite aucun cabinet de diagnostic précis. Il fournit une liste de critères de sélection (certification Cofrac, avis clients, transparence tarifaire, délais d\'intervention) et renvoie vers les plateformes de mise en relation comme AlloImmo, Arliane ou MeilleurDiag.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon diagnostiqueur ? » : le LLM génère un guide structuré en 5 à 7 critères sans citer de professionnel. Les cabinets qui publient ce type de contenu pédagogique sur leur site (certification, assurance RC Pro, exhaustivité des diagnostics) peuvent être cités en référence.</p><h4>Requêtes tarifaires</h4><p>« Prix diagnostic immobilier complet » : le LLM donne des fourchettes chiffrées (300 à 700 euros pour un pack complet vente, 100 à 250 euros pour un DPE seul). Les sites proposant des grilles tarifaires détaillées et actualisées par type de diagnostic ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « diagnostic immobilier autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie « Service de diagnostic immobilier », avis récents, zone d\'intervention) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets de diagnostic immobilier, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>Service</code> (avec un <code>serviceType</code> par diagnostic proposé), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>ProfessionalService</code> permet à Google et aux LLM d\'identifier précisément les types de diagnostics proposés, la zone d\'intervention et les certifications du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet de diagnostic par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les différents types de diagnostic), la Légitimité & Citabilité (signaux de confiance externes, certifications Cofrac, mentions presse), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les diagnostiqueurs immobiliers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de diagnostiqueur immobilier ?',
        answer:
          'Le budget SEO pour un cabinet de diagnostic immobilier dépend de la zone géographique ciblée et du nombre de villes à couvrir. Chez Rankwell, les accompagnements SEO pour les diagnostiqueurs démarrent à 800 euros par mois pour une ville et ses environs, et peuvent atteindre 2 500 à 4 000 euros par mois pour une couverture départementale ou régionale avec plusieurs types de diagnostics.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un diagnostiqueur ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« diagnostic amiante Nantes » ou « DPE Bordeaux ») sont plus rapides à positionner que les requêtes nationales comme « prix diagnostic immobilier ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et la densité de diagnostiqueurs dans votre zone.',
      },
      {
        question: 'La certification Cofrac aide-t-elle le référencement d\'un diagnostiqueur ?',
        answer:
          'Oui, la certification Cofrac est un signal E-E-A-T puissant pour Google. Un site qui affiche clairement ses numéros de certification, les dates de validité et les domaines couverts (DPE, amiante, plomb, électricité, gaz, termites) envoie un signal de légitimité vérifiable. Rankwell intègre ces informations dans le balisage schema.org et dans la structure du site pour maximiser leur impact sur le référencement et la citabilité par les moteurs IA.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de diagnostic ?',
        answer:
          'Un blog centré sur les obligations réglementaires du diagnostic immobilier est un levier puissant. Les articles doivent répondre à des questions concrètes des propriétaires : quels diagnostics pour une vente, durée de validité du DPE, réforme 2021, calendrier d\'interdiction des passoires énergétiques. Rankwell recommande 2 à 4 articles par mois ciblant des requêtes informationnelles que les LLM citent fréquemment.',
      },
      {
        question: 'Comment un diagnostiqueur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet de diagnostic doit accumuler des signaux de notoriété : présence sur les annuaires Cofrac et FIDI, mentions sur les sites spécialisés (DiagActu, Batiactu), profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un diagnostiqueur ?',
        answer:
          'Le SEO local cible les requêtes « diagnostic immobilier + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise les requêtes génériques (« prix diagnostic immobilier », « DPE obligatoire ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches : le local pour capter les missions dans votre zone, le national pour construire l\'autorité qui alimente la citabilité IA.',
      },
      {
        question: 'Les plateformes de mise en relation suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme AlloImmo, Arliane ou MeilleurDiag apportent des missions mais créent une dépendance : votre cabinet est un profil parmi des centaines et vous payez une commission sur chaque intervention. Un site propre bien référencé permet de recevoir des demandes de devis en direct, sans intermédiaire, et de construire une autorité durable. Rankwell aide les diagnostiqueurs à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet de diagnostic visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
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
        { label: 'SEO local', href: '/glossaire/seo-local' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
