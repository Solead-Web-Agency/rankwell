/**
 * DATA : Page Secteur Food Trucks (FR)
 * Route : /agence-geo-seo/secteur/food-truck
 *
 * Données Ahrefs (country: fr) collectées le 18 mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'food-truck',
    title: 'Agence GEO & SEO pour Food Trucks - Rankwell',
    description:
      'Rankwell accompagne les food trucks dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour la street food.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Food Trucks' },
    ],
    title: 'GEO & SEO Food Truck : visibilité Google & moteurs IA',
    subtitle:
      'Votre food truck doit apparaître là où vos clients cherchent : sur Google Maps, dans les résultats locaux et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées à la mobilité et à la saisonnalité de la street food.',
    ctaText: 'Demander un audit GEO & SEO food truck',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les food trucks',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">4 700 recherches mensuelles sur « food truck autour de moi »</strong> en France, avec une intention immédiate : l\'internaute veut manger dans les 30 minutes. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> hyper-mobile où la visibilité se joue sur Google Maps et où la géolocalisation du véhicule change chaque jour.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Un food truck change d\'emplacement plusieurs fois par semaine</strong>, rendant les signaux de localisation classiques (adresse fixe, citations NAP) inopérants. Le SEO doit s\'adapter à des emplacements rotatifs, des horaires variables et une forte saisonnalité (festivals d\'été, marchés de Noël).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Google Maps, Instagram, Facebook et mariages.net</strong> captent la majorité du trafic des food trucks. Sur « food truck mariage » (<strong>1 300 recherches/mois</strong>), les annuaires événementiels dominent les SERP. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un food truck reste dépendant de son seul compte Instagram.',
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
      { keyword: 'food truck', volume: 20000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'food truck autour de moi', volume: 4700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'location food truck', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'food truck mariage', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'food truck à domicile', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'food truck à domicile tarif', volume: 600, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'food truck toulouse', volume: 450, intent: 'locale', difficulty: 'faible' },
      { keyword: 'food truck lyon', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'food truck bordeaux', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'food truck paris', volume: 350, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, 20 000 recherches sur « food truck » et 4 700 sur « food truck autour de moi » représentent autant de clients affamés qui cherchent où manger. Les requêtes locales (Toulouse, Lyon, Bordeaux, Paris) montrent que chaque ville constitue un micro-marché. Si votre food truck n\'apparaît pas dans les 3 premiers résultats Maps ou dans la réponse d\'un moteur IA, ces clients commandent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les food trucks',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de mobilité et de saisonnalité de la street food.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse de l\'architecture du site, du temps de chargement mobile et de la présence sur les plateformes clés du secteur food truck.',
        items: [
          'Structure des pages par type de cuisine et zone de service',
          'Balises schema.org FoodEstablishment',
          'Performance mobile (Core Web Vitals sur smartphone)',
          'Crawl, indexation et détection des pages orphelines',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du food truck dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du food truck',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA locales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés street food',
        subtitle: 'Cartographie des requêtes par type de cuisine, zone géographique et événement. Identification des opportunités à faible concurrence.',
        items: [
          'Combinaisons cuisine + ville à fort potentiel (« food truck burger Lyon »)',
          'Requêtes événementielles (mariage, festival, anniversaire)',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par ville et par saison',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage pensé pour les parcours clients : localisation, menu, réservation événementielle.',
        items: [
          'Page menu → page zone de service → page réservation',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par ville desservie',
        ],
      },
      {
        title: 'Stratégie de contenu food truck',
        subtitle: 'Création de contenus qui démontrent l\'expertise culinaire et la capacité événementielle du food truck, rédigés pour être citables par les LLM.',
        items: [
          'Pages de prestation (mariage, entreprise, festival, anniversaire)',
          'Contenus factuels avec données chiffrées (tarifs, capacité, menus)',
          'Blog de recettes ou coulisses pour renforcer l\'authenticité',
        ],
      },
      {
        title: 'Autorité & netlinking food truck',
        subtitle: 'Développement de l\'autorité via les annuaires événementiels, les blogs culinaires et la presse locale.',
        items: [
          'Mariages.net, La Belle Assiette, annuaires événementiels',
          'Articles dans la presse locale et les blogs food',
          'Partenariats avec des organisateurs d\'événements et des marchés',
        ],
      },
      {
        title: 'Google Business Profile & SEO local mobile',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « food truck autour de moi » et apparaître dans le pack local Maps et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Food Truck + catégories secondaires par spécialité',
          'Mise à jour régulière des emplacements et horaires (posts GBP)',
          'Photos du camion, des plats et de l\'équipe actualisées chaque mois',
          'Stratégie de collecte d\'avis clients après chaque événement',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par ville, les réservations événementielles et le Score GEO.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de réservation et conversions',
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
        description: 'Diagnostic site/reseaux, pages carte/emplacements, vitesse mobile, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes food truck, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage FoodEstablishment, LocalBusiness, FAQPage avec carte et zones d\'activite.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages carte, calendrier emplacements, articles evenementiel (mariages, festivals), FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires evenementiel (Mariages.net), blogs street food, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions, trafic organique, demandes de privatisation attribuees, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre food truck dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel food truck recommandes-tu à Lyon ? », le LLM ne cite aucun nom précis. Il suggère des zones et des types de cuisine, puis renvoie vers Google Maps. Si votre food truck n\'apparaît dans aucune source exploitable par le LLM, il est invisible dans ce canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel food truck recommandes-tu à Lyon ? » : le LLM ne cite aucun food truck par nom. Il suggère des quartiers connus pour la street food (Presqu\'île, Part-Dieu) et des types de cuisine (burger, tacos, cuisine asiatique), puis recommande Google Maps et Instagram. Les food trucks disposant d\'une fiche GBP complète avec avis récents sont les seuls à pouvoir apparaître via le mode Search/Maps de ChatGPT.</p><h4>Requêtes informationnelles</h4><p>« Comment lancer un food truck ? » : le LLM génère un guide en 6 à 8 étapes (concept, business plan, véhicule, autorisations, emplacements, communication) avec des fourchettes budgétaires (30 000 à 100 000 euros pour le véhicule aménagé). Aucune source externe n\'est citée. Un food truck qui publie ce type de contenu structuré sur son site peut être extrait comme référence.</p><h4>Requêtes tarifaires et événementielles</h4><p>« Prix food truck pour un mariage » : le LLM donne des fourchettes précises (1 500 à 4 000 euros pour 50 à 100 convives). Les sites proposant des grilles tarifaires claires et détaillées (par nombre de convives, type de formule) ont les meilleures chances d\'être cités comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « food truck autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les food trucks disposant d\'une fiche Google Business Profile complète (catégorie Food Truck, photos récentes du camion et des plats, avis clients, horaires mis à jour) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les food trucks, les types schema.org recommandés sont : <code>FoodEstablishment</code> (type principal), <code>FoodService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>FoodEstablishment</code> permet à Google et aux LLM d\'identifier le type de cuisine, la zone de service, les horaires et les avis clients du food truck.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre food truck par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les food trucks',
    items: [
      {
        question: 'Combien coûte le référencement d\'un food truck ?',
        answer:
          'Le budget SEO pour un food truck dépend du nombre de villes desservies et des prestations événementielles proposées. Chez Rankwell, les accompagnements SEO pour les food trucks démarrent à 800 euros/mois pour une zone de service locale, et peuvent atteindre 2 000 à 3 000 euros/mois pour un food truck multi-villes avec prestation événementielle (mariages, festivals, entreprises).',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO food truck ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 4 mois. Les requêtes locales de niche (« food truck burger Toulouse », « food truck mariage Normandie ») se positionnent plus rapidement que les requêtes génériques nationales. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone de service.',
      },
      {
        question: 'Comment gérer le SEO local quand mon food truck change d\'emplacement ?',
        answer:
          'C\'est la spécificité majeure du SEO food truck. Rankwell met en place une stratégie combinant les posts Google Business Profile (mise à jour des emplacements hebdomadaires), des pages de zone de service sur le site (par ville ou quartier desservi), et une gestion dynamique des horaires. La fiche GBP reste l\'ancrage principal, même si l\'adresse physique n\'est pas fixe.',
      },
      {
        question: 'Faut-il un site web quand on a déjà Instagram et Facebook ?',
        answer:
          'Les réseaux sociaux sont essentiels pour un food truck, mais ils ne remplacent pas un site web pour le référencement Google et la visibilité IA. Un site propre permet de positionner des pages sur les requêtes événementielles (« food truck mariage », « food truck entreprise »), de publier des grilles tarifaires et de contrôler son image. Rankwell recommande un site léger avec pages de prestations, menu et formulaire de réservation.',
      },
      {
        question: 'Comment un food truck peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un food truck doit accumuler des signaux de notoriété : fiche Google Business Profile complète avec avis récents, présence sur les annuaires événementiels (mariages.net, La Belle Assiette), articles dans la presse locale, contenus factuels sur son site (tarifs, zones de service, spécialités). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un food truck ?',
        answer:
          'Le SEO local cible les requêtes « food truck + ville » et « food truck autour de moi » via Google Business Profile, les avis clients et les pages de zone de service. Le SEO national vise des requêtes génériques (« food truck mariage », « location food truck ») et nécessite du contenu éducatif sur les prestations événementielles. Rankwell combine les deux approches selon la stratégie et la zone de couverture du food truck.',
      },
      {
        question: 'Les plateformes événementielles suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme mariages.net ou les annuaires de traiteurs événementiels apportent une visibilité initiale, mais elles créent une dépendance : le food truck n\'est qu\'un profil parmi des centaines de prestataires. Un site propre bien référencé permet de convertir directement, de publier des tarifs transparents et de construire une autorité durable. Rankwell aide les food trucks à développer cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre food truck visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
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
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'FoodEstablishment',
};

export default data;
