/**
 * DATA : Page Secteur Restaurants (FR)
 * Route : /agence-geo-seo/secteur/restaurant
 *
 * Contenu 100 % restauration, mots-clés Ahrefs, mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'restaurant',
    title: 'Agence GEO & SEO pour Restaurants - Rankwell',
    description:
      'Rankwell accompagne les restaurants dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour la restauration.',
  },

  // ============================================
  // BLOC 1 - HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Restaurants' },
    ],
    title: 'GEO & SEO Restaurant : visibilité Google & moteurs IA',
    subtitle:
      'Votre restaurant doit apparaître quand un client cherche où manger : sur Google Maps, dans le Local Pack et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités de la restauration.',
    ctaText: 'Demander un audit GEO & SEO restaurant',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 - Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les restaurants',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">90 % des recherches de restaurants se font sur mobile</strong>, souvent en situation immédiate (« restaurant autour de moi », « où manger ce soir »). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la fiche Google Business Profile pèse plus que le site web : note, photos et distance décident du clic.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les avis clients sont le facteur de classement n°1</strong> : un restaurant sous 4 étoiles Google perd jusqu\'à 70 % de ses clics. Menus saisonniers, fermetures hebdomadaires et dépendance aux photos imposent des mises à jour permanentes que peu de restaurateurs ont le temps de gérer.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">TheFork, TripAdvisor, Uber Eats, Google Maps</strong> captent l\'essentiel du trafic transactionnel avec des commissions de 15 à 30 %. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte de la restauration, un restaurant reste invisible en dehors de ces intermédiaires.',
  },

  // ============================================
  // QUOTE - Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 - Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'restaurant autour de moi', volume: 180000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'restaurant paris', volume: 34000, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'restaurant lyon', volume: 29000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'restaurant bordeaux', volume: 24000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'restaurant italien', volume: 22000, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'brunch paris', volume: 21000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'restaurant à proximité', volume: 11000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'restaurant italien paris', volume: 9500, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'restaurant gastronomique', volume: 8400, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'restaurant gastronomique paris', volume: 7500, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, 180 000 recherches « restaurant autour de moi » et des dizaines de milliers de requêtes locales comme « restaurant paris », « restaurant lyon » ou « restaurant bordeaux » représentent autant de couverts potentiels. Les requêtes par type de cuisine (« restaurant italien », « brunch paris ») captent une clientèle à forte intention. Le client clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre établissement n\'y figure pas, ces clients réservent ailleurs.',
  },

  // ============================================
  // BLOC 4 - Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les restaurants',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de la restauration.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site du restaurant : architecture des pages (carte, réservation, horaires), vitesse de chargement mobile et facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par type de cuisine et service (midi, soir, brunch)',
          'Balises schema.org Restaurant et Menu',
          'Performance mobile et Core Web Vitals',
          'Crawl et indexation des pages carte/menu',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du restaurant dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du restaurant (guides, critiques, presse gastronomique)',
          'Mesure de la légitimité et citabilité (mentions, avis, récompenses)',
          'Évaluation de la densité factuelle (carte, prix, horaires, allergènes)',
          'Benchmark concurrentiel sur les requêtes IA locales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés restauration',
        subtitle: 'Cartographie des requêtes par type de cuisine, gamme de prix et zone géographique. Identification des créneaux à faible concurrence.',
        items: [
          'Combinaisons cuisine + ville + moment (« restaurant italien lyon midi »)',
          'Analyse des requêtes posées aux moteurs IA (« où manger ce soir à Bordeaux »)',
          'Volumes de recherche réels par spécialité culinaire',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un parcours pensé pour convertir le visiteur en réservation.',
        items: [
          'Page d\'accueil → page carte/menu → page réservation',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec les spécialités culinaires',
        ],
      },
      {
        title: 'Stratégie de contenu gastronomique',
        subtitle: 'Création de contenus qui mettent en valeur le savoir-faire du chef et l\'identité du restaurant, rédigés pour être citables par les LLM.',
        items: [
          'Pages dédiées par service (brunch, afterwork, privatisation, traiteur)',
          'Actualités saisonnières : menu de saison, événements, accords mets-vins',
          'Phrases factuelles auto-suffisantes (chef, produits, labels, récompenses)',
        ],
      },
      {
        title: 'Autorité & netlinking restauration',
        subtitle: 'Développement de l\'autorité via les guides gastronomiques, la presse locale et les annuaires qualifiés de la restauration.',
        items: [
          'TheFork, TripAdvisor, Guide Michelin, Gault & Millau',
          'Articles dans la presse locale et les blogs gastronomiques',
          'Partenariats avec des producteurs locaux et des offices de tourisme',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du restaurant pour capter les requêtes « restaurant + ville » et « restaurant autour de moi », et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Restaurant + catégories secondaires par cuisine (italien, japonais, gastronomique)',
          'Gestion des avis clients et stratégie de collecte post-repas',
          'Photos professionnelles des plats, de la salle et de la terrasse',
          'Horaires à jour, menu en ligne, lien de réservation, attributs (terrasse, Wi-Fi, accessible PMR)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par requête locale et les réservations générées via le site.',
        items: [
          'Positions Google par mot-clé local',
          'Trafic organique par type de cuisine et zone géographique',
          'Score GEO : visibilité dans les moteurs IA',
          'Réservations et appels générés depuis le site et la fiche Google',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 - Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en r\u00e9f\u00e9rencement, votre \u00e9quipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic du site du restaurant : vitesse mobile, architecture des pages (carte, menu, r\u00e9servation), indexation. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates restauration, benchmark contre 3 \u00e0 5 concurrents locaux et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Restaurant, Menu, FoodEstablishment et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec horaires, prix et lien de r\u00e9servation.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages (carte, chef, histoire), articles blog recettes et \u00e9v\u00e9nements, FAQ, int\u00e9gration CMS ou FTP, et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis guides gastronomiques, blogs food, presse locale et annuaires (TheFork, TripAdvisor). Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, r\u00e9servations attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 - Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre restaurant dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel restaurant italien recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre restaurant n\'apparaît dans aucune source citée (guides, blogs gastronomiques, avis), il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4>' +
      '<p>Sur « quel restaurant italien recommandes-tu à Lyon ? » ou « meilleur restaurant gastronomique en France ? », le LLM cite 4 à 8 établissements avec des données factuelles : étoiles Michelin, nom du chef, quartier, fourchette de prix. Les restaurants recommandés sont ceux qui cumulent des mentions sur plusieurs sources : Guide Michelin, avis Google, presse gastronomique, TheFork. Un établissement absent de ces sources n\'est jamais cité.</p>' +
      '<h4>Requêtes d\'information</h4>' +
      '<p>Sur « comment choisir un bon restaurant pour un dîner d\'affaires ? », le LLM bascule en mode guide de critères (ambiance, carte des vins, emplacement, service) sans citer aucun établissement. Le restaurant qui publie ce type de contenu expert sur son propre site peut devenir la source que le LLM référence dans sa réponse.</p>' +
      '<h4>Requêtes locales et Maps</h4>' +
      '<p>Sur « restaurant autour de moi » ou toute requête géolocalisée, le LLM active systématiquement le mode Search avec carte Maps. Les restaurants dotés d\'une fiche Google Business Profile complète (catégorie précise, note supérieure à 4,3, photos récentes des plats, horaires à jour et lien de réservation) apparaissent directement dans la réponse IA. Sans géolocalisation disponible, le LLM renvoie vers Google Maps et les plateformes de réservation sans valeur ajoutée.</p>',
    structuredData:
      '<p>Pour les restaurants, les types schema.org recommandés sont : <code>Restaurant</code> (type principal), <code>FoodEstablishment</code>, <code>Menu</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Restaurant</code> permet à Google et aux LLM d\'identifier précisément le type de cuisine, la fourchette de prix, les horaires d\'ouverture et la localisation de l\'établissement.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre restaurant par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus : carte, histoire, chef), la Légitimité & Citabilité (signaux de confiance externes : guides, avis, presse), et la Densité Factuelle (richesse des données structurées et des entités nommées : prix, labels, allergènes).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 - FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les restaurants',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de restaurant ?',
        answer:
          'Le budget SEO pour un restaurant dépend de la zone de chalandise et du nombre d\'établissements. Chez Rankwell, les accompagnements SEO pour les restaurants démarrent à 800 €/mois pour un établissement unique en ville moyenne, et peuvent atteindre 3 000-5 000 €/mois pour un groupe multi-sites ou un restaurant gastronomique en zone très concurrentielle comme Paris ou Lyon.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un restaurant ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 4 mois. Les requêtes locales de niche (ex : « restaurant libanais Nantes ») se positionnent plus rapidement que les requêtes très concurrentielles (« restaurant paris »). L\'optimisation de la fiche Google Business Profile produit des effets dès les premières semaines. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone.',
      },
      {
        question: 'Les avis Google sont-ils vraiment décisifs pour le référencement d\'un restaurant ?',
        answer:
          'Oui, les avis clients sont le facteur de classement le plus influent pour les restaurants dans le Local Pack Google. Un établissement avec une note inférieure à 4 étoiles et moins de 50 avis perd jusqu\'à 70 % de ses clics face à un concurrent mieux noté. Rankwell met en place une stratégie de collecte d\'avis (QR codes en salle, email post-repas, réponses personnalisées) et surveille l\'évolution de votre e-réputation.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un restaurant ?',
        answer:
          'Un blog n\'est pas indispensable pour un restaurant, mais des contenus réguliers font la différence : articles sur les produits de saison, portraits de producteurs, événements à venir, accords mets-vins. Ces pages captent des requêtes informationnelles et démontrent l\'expertise du chef, ce qui renforce la citabilité IA. Rankwell recommande 1-2 publications par mois, ciblant des requêtes de longue traîne liées à votre spécialité culinaire.',
      },
      {
        question: 'Comment un restaurant peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un restaurant doit accumuler des signaux de notoriété sur le web : présence sur les guides gastronomiques (Michelin, Gault & Millau, TheFork), mentions dans la presse locale, note Google supérieure à 4,3, contenus riches et factuels sur son site (carte, prix, chef, labels). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un restaurant ?',
        answer:
          'Le SEO local cible les requêtes « restaurant + cuisine + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales (PagesJaunes, annuaires de quartier). C\'est la priorité pour 95 % des restaurants. Le SEO national concerne les chaînes ou les restaurants gastronomiques qui attirent une clientèle touristique (« meilleur restaurant étoilé France »). Rankwell adapte la stratégie selon le rayon de chalandise de votre établissement.',
      },
      {
        question: 'TheFork et les plateformes de livraison suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme TheFork ou Uber Eats apportent de la visibilité, mais à un coût élevé : commissions de 15 à 30 % par couvert ou commande, aucun contrôle sur votre image, et dépendance totale à leur algorithme. Un site propre bien référencé permet de recevoir des réservations directes sans commission, de contrôler votre marque et de construire une audience fidèle. Rankwell aide les restaurants à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre restaurant visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Hôtel', href: '/agence-geo-seo/secteur/hotel' },
        { label: 'SEO Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
        { label: 'SEO Bar', href: '/agence-geo-seo/secteur/bar' },
        { label: 'SEO Food truck', href: '/agence-geo-seo/secteur/food-truck' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
        { label: 'Optimisation fiche Google Business', href: '/glossaire/optimisation-de-la-fiche-google-my-business-gmb' },
      ],
    },
  },

  // Bandeau maillage - secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Hôtel', href: '/agence-geo-seo/secteur/hotel' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Food truck', href: '/agence-geo-seo/secteur/food-truck' },
      { label: 'Caviste', href: '/agence-geo-seo/secteur/caviste' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Camping', href: '/agence-geo-seo/secteur/camping' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Restaurant',
};

export default data;
