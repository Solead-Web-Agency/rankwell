/**
 * DATA : Page Secteur Gites (FR)
 * Route : /agence-geo-seo/secteur/gite
 *
 * Secteur tourisme rural : hebergement meuble independant,
 * marche domine par Gites de France, Abritel et Airbnb.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'gite',
    title: 'Agence GEO & SEO pour Gites - Rankwell',
    description:
      'Rankwell accompagne les propriétaires de gîtes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du tourisme rural.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Gîtes' },
    ],
    title: 'GEO & SEO Gîte : visibilité Google & moteurs IA',
    subtitle:
      'Votre gîte doit apparaître là où les voyageurs planifient leur séjour : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au tourisme rural et saisonnier.',
    ctaText: 'Demander un audit GEO & SEO gîte',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les gîtes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des requêtes gîte contiennent une région ou un département</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> à forte saisonnalité, où la décision de réservation se joue entre les 3 premiers résultats Google ou la recommandation d\'un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">60 à 70 % des réservations se concentrent entre juin et septembre</strong>, ce qui impose un calendrier SEO anticipé de 3 à 4 mois. Le classement préfectoral (1 à 5 épis ou étoiles) conditionne la visibilité sur les plateformes, et les obligations déclaratives en mairie encadrent la communication en ligne.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Gîtes de France, Abritel, Airbnb, Booking.com et Leboncoin</strong> captent la quasi-totalité du trafic transactionnel sur les requêtes de location saisonnière. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un gîte indépendant reste invisible face à ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-cles strategiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'gîte de france', volume: 9700, intent: 'navigationnelle', difficulty: 'élevée' },
      { keyword: 'gîte', volume: 3700, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'location gîte anniversaire week-end 50 personnes', volume: 1800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'location gîte anniversaire week-end 30 personnes', volume: 900, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'location gîte', volume: 500, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'gîte de groupe', volume: 450, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'location gîte avec piscine intérieure chauffée privée', volume: 400, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'gîte de france bretagne', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'gîte pas cher autour de moi', volume: 250, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'gîte avec jacuzzi privatif autour de moi', volume: 250, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches comme « location gîte anniversaire week-end 50 personnes » ou « gîte avec piscine intérieure » représentent autant de voyageurs prêts à réserver. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre gîte n\'y figure pas, ces réservations vont aux plateformes ou à vos concurrents directs.',
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les gîtes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur touristique rural et saisonnier.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages de votre gîte.',
        items: [
          'Structure des pages par hébergement et par saison',
          'Balises schema.org LodgingBusiness et VacationRental',
          'Performance et Core Web Vitals (images haute résolution optimisées)',
          'Crawl et indexation des pages de disponibilités',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre gîte dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du gîte et de sa région',
          'Mesure de la légitimité et citabilité face aux plateformes',
          'Évaluation de la densité factuelle du contenu (capacité, équipements, tarifs)',
          'Benchmark concurrentiel sur les requêtes IA touristiques',
        ],
      },
      {
        title: 'Étude de marché & mots-clés touristiques',
        subtitle: 'Cartographie des requêtes par type d\'hébergement, capacité et zone géographique. Identification des combinaisons à fort potentiel de réservation.',
        items: [
          'Combinaisons type + capacité + région à faible concurrence',
          'Analyse des requêtes saisonnières (anticipation haute saison)',
          'Requêtes posées aux moteurs IA (« quel gîte recommandes-tu en... »)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un parcours pensé pour convertir le visiteur en réservation directe, sans passer par une plateforme.',
        items: [
          'Page hébergement avec galerie, tarifs et disponibilités',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec ancrage régional',
        ],
      },
      {
        title: 'Stratégie de contenu touristique',
        subtitle: 'Création de contenus valorisant le territoire et les activités locales, rédigés pour être citables par les LLM lorsqu\'un voyageur cherche des recommandations.',
        items: [
          'Guides des activités et sites touristiques de la région',
          'Pages thématiques (gîte de groupe, gîte avec piscine, gîte à la ferme)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (capacité, superficie, tarifs)',
        ],
      },
      {
        title: 'Autorité & netlinking touristique',
        subtitle: 'Développement de l\'autorité via les annuaires touristiques qualifiés et les offices de tourisme locaux.',
        items: [
          'Gîtes de France, Clévacances, Accueil Paysan',
          'Offices de tourisme départementaux et régionaux',
          'Partenariats avec des blogs de voyage et guides régionaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du gîte pour capter les requêtes locales « gîte + région » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Vacation Rental (Gîte) + catégories secondaires',
          'Gestion des avis clients et stratégie de collecte post-séjour',
          'Photos professionnelles des hébergements, piscine, environnement',
          'Citations NAP cohérentes sur les annuaires touristiques',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de séjour et les demandes de réservation générées.',
        items: [
          'Positions Google par mot-clé saisonnier',
          'Trafic organique par type d\'hébergement et par région',
          'Score GEO : visibilité dans les moteurs IA',
          'Réservations directes et taux de conversion',
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
        description: 'Diagnostic du site : pages h\u00e9bergements, tarifs, disponibilit\u00e9s, vitesse de chargement et indexation. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates touristiques, benchmark contre 3 \u00e0 5 g\u00eetes concurrents et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage LodgingBusiness, VacationRental et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec capacit\u00e9, \u00e9quipements et tarifs par saison.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages g\u00eetes, guides tourisme r\u00e9gional et activit\u00e9s, articles saisons et FAQ. Int\u00e9gration CMS ou FTP et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis G\u00eetes de France, Abritel, blogs tourisme rural et presse. Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, r\u00e9servations directes attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre gîte dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un voyageur demande à ChatGPT « quel gîte recommandes-tu en Dordogne ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre gîte n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal de réservation.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel gîte recommandes-tu en Dordogne ? » : le LLM ne cite aucun gîte par son nom. Il fournit des critères de sélection (proximité des sites touristiques, labels, capacité, équipements) et renvoie vers Gîtes de France, Abritel et Airbnb. Les zones géographiques sont mentionnées (Sarlat, Périgord Noir) sans aucun établissement individuel.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon gîte ? » ou « gîte vs chambre d\'hôtes : quelle différence ? » : le LLM génère un guide structuré en 5 à 7 critères (emplacement, capacité, avis, labels, rapport qualité-prix). Il distingue le gîte (location meublée indépendante) de la chambre d\'hôtes (chez l\'habitant, petit-déjeuner inclus). Aucune source externe citée.</p><h4>Requêtes tarifaires</h4><p>« Prix gîte à la semaine » : le LLM donne des fourchettes précises (300 à 600 euros en basse saison pour 2-4 personnes, 600 à 1 500 euros en haute saison, 1 500 à 3 000+ euros pour les gîtes de charme). Les sites affichant des grilles tarifaires détaillées par saison ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « gîte autour de moi avec piscine », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les gîtes disposant d\'une fiche Google Business Profile complète (catégorie Vacation Rental, photos de la piscine, avis récents) apparaissent directement dans la réponse IA géolocalisée.</p>',
    structuredData:
      '<p>Pour les gîtes, les types schema.org recommandés sont : <code>LodgingBusiness</code> (type principal), <code>VacationRental</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>LodgingBusiness</code> avec les propriétés <code>amenityFeature</code>, <code>numberOfRooms</code> et <code>priceRange</code> permet à Google et aux LLM d\'identifier précisément la capacité, les équipements et la localisation du gîte.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre gîte par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur le gîte et sa région), la Légitimité & Citabilité (signaux de confiance externes : labels, avis, annuaires touristiques), et la Densité Factuelle (richesse des données structurées : capacité, tarifs, équipements, activités).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les gîtes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de gîte ?',
        answer:
          'Le budget SEO pour un gîte dépend du nombre d\'hébergements, de la zone géographique ciblée et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les gîtes démarrent à 800 euros/mois pour un gîte individuel sur une région, et peuvent atteindre 2 500 à 4 000 euros/mois pour un domaine multi-gîtes ciblant plusieurs départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO touristique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes longue traîne à forte intention (« gîte 20 personnes Ardèche avec piscine ») sont plus rapides à positionner que les requêtes génériques très concurrentielles comme « location gîte ». Rankwell recommande de lancer la stratégie SEO en automne pour être visible avant la haute saison estivale.',
      },
      {
        question: 'Le classement en étoiles ou en épis influence-t-il le référencement ?',
        answer:
          'Le classement préfectoral (1 à 5 étoiles meublé de tourisme) ou le label Gîtes de France (1 à 5 épis) n\'est pas un facteur de classement Google direct, mais il génère des signaux indirects puissants : présence sur les annuaires labellisés, mentions dans les offices de tourisme, confiance accrue des utilisateurs. Rankwell intègre ces labels dans la stratégie de données structurées et de netlinking.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement de son gîte ?',
        answer:
          'Un blog touristique est un levier puissant pour un gîte, à condition de cibler les requêtes réelles des voyageurs. Les articles doivent valoriser le territoire (activités, sites touristiques, événements locaux) et répondre aux questions de planification de séjour. Rankwell recommande 2 à 4 articles par mois, publiés en amont de la saison ciblée pour laisser le temps à l\'indexation.',
      },
      {
        question: 'Comment un gîte peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un gîte doit accumuler des signaux de notoriété : présence sur les annuaires touristiques qualifiés (Gîtes de France, Clévacances, offices de tourisme), avis clients nombreux et récents, contenu riche et factuel sur son site (capacité, tarifs, équipements, activités). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un gîte ?',
        answer:
          'Le SEO local cible les requêtes « gîte + région/département » et s\'appuie sur Google Business Profile, les avis clients et les citations dans les annuaires touristiques locaux. Le SEO national vise des requêtes génériques (« location gîte avec piscine intérieure ») et nécessite du contenu thématique à forte autorité. Rankwell combine les deux approches selon la zone de chalandise et la capacité du gîte.',
      },
      {
        question: 'Les plateformes comme Airbnb et Abritel suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme Airbnb, Abritel ou Gîtes de France sont utiles pour la visibilité initiale, mais elles créent une dépendance : commissions de 12 à 20 % par réservation, aucun contrôle sur l\'image, et le voyageur compare votre gîte avec des centaines d\'autres. Un site propre bien référencé permet de recevoir des réservations directes sans commission et de bâtir une autorité durable. Rankwell aide les propriétaires de gîtes à construire cette indépendance grâce à une stratégie de référencement SEO & GEO propre.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre gîte visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret pour la prochaine saison.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Spa', href: '/agence-geo-seo/secteur/spa' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
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
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'LodgingBusiness',
};

export default data;
