/**
 * DATA : Page Secteur Cavistes (FR)
 * Route : /agence-geo-seo/secteur/caviste
 *
 * Contrainte sectorielle : loi Évin (encadrement de la communication sur l'alcool)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'caviste',
    title: 'Agence GEO & SEO pour Cavistes - Rankwell',
    description:
      'Rankwell accompagne les cavistes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur vinicole.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Cavistes' },
    ],
    title: 'GEO & SEO Caviste : visibilité Google & moteurs IA',
    subtitle:
      'Vos clients cherchent un caviste sur Google Maps et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes de la loi Évin et du marché vinicole.',
    ctaText: 'Demander un audit GEO & SEO caviste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les cavistes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">4 400 recherches mensuelles sur « caviste autour de moi »</strong>, auxquelles s\'ajoutent les requêtes ville par ville (Bordeaux, Lyon, Toulouse, Lille). Le client veut un caviste accessible, avec des avis Google récents. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le Local Pack et la carte Maps concentrent l\'essentiel des clics.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La loi Évin encadre strictement la communication sur l\'alcool en France</strong> : interdiction de publicité incitative, obligation du message sanitaire. Chaque contenu publié doit respecter ce cadre légal. Le référencement d\'un caviste exige une expertise sectorielle pour produire du contenu éducatif conforme.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vivino, Wine-Searcher, Vinatis et les marketplaces (Millesima, Lavinia)</strong> dominent les requêtes informationnelles et transactionnelles sur le vin. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un caviste indépendant reste invisible face à ces plateformes à forte autorité de domaine.',
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
      { keyword: 'caviste', volume: 14000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'cave à vin autour de moi', volume: 1400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste autour de moi', volume: 4400, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'caviste paris', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste bordeaux', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste à proximité', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste lyon', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste toulouse', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'caviste en ligne', volume: 450, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'cave à vin à proximité', volume: 600, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 20 000 recherches locales combinent « caviste » ou « cave à vin » avec une ville ou « autour de moi ». La majorité des internautes cliquent sur les 3 premiers résultats du Local Pack Google, ou suivent la recommandation d\'un moteur IA. Si votre boutique n\'y figure pas, ces clients poussent la porte d\'un concurrent ou commandent en ligne.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les cavistes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur vinicole et de la loi Évin.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation. Focus sur la structure des pages par type de vin et appellation.',
        items: [
          'Structure des pages par appellation, cépage et région viticole',
          'Balises schema.org LiquorStore et Product',
          'Performance et Core Web Vitals',
          'Crawl et indexation du catalogue',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du caviste dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du caviste',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA locales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés vinicoles',
        subtitle: 'Cartographie des requêtes par type de vin, appellation et zone géographique. Identification des combinaisons à faible concurrence et fort potentiel.',
        items: [
          'Combinaisons appellation + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par spécialité (bio, nature, champagne)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat du client, de la découverte à la réservation d\'une dégustation.',
        items: [
          'Page région viticole, page appellation, page caviste, page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu vinicole',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du caviste (accords mets-vins, guides d\'appellations, conseils de conservation), rédigés pour être citables par les LLM et conformes à la loi Évin.',
        items: [
          'Guides d\'appellations et fiches cépages répondant aux PAA Google',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Respect de la loi Évin : pas de contenu incitatif à la consommation',
        ],
      },
      {
        title: 'Autorité & netlinking vinicole',
        subtitle: 'Développement de l\'autorité via les annuaires spécialisés, la presse vinicole et les partenariats avec les domaines et vignerons.',
        items: [
          'Annuaires spécialisés : Vin-Vigne, La Revue du Vin de France, Wine-Searcher',
          'Publications et mentions dans la presse vinicole',
          'Partenariats avec les syndicats d\'appellation et domaines viticoles',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du caviste pour capter les requêtes locales « caviste + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Liquor Store + catégories secondaires (Wine Store)',
          'Gestion des avis clients et stratégie de collecte post-achat',
          'Photos de la boutique, des rayons et des dégustations',
          'Citations NAP cohérentes sur les annuaires vinicoles',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de requête et les visites en boutique générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type de vin et appellation',
          'Score GEO : visibilité dans les moteurs IA',
          'Visites en boutique et conversions (click-to-call, itinéraire)',
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
        title: 'Audit technique du site',
        description: 'Analyse de l\'architecture, de la vitesse de chargement et de l\'indexation, avec un focus sur les pages de sélection de vins et les pages de dégustations.',
      },
      {
        id: 2,
        title: 'Audit GEO de citabilité IA',
        description: 'Mesure de la visibilité de votre cave dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100, benchmark concurrentiel et plan de progression.',
      },
      {
        id: 3,
        title: 'Kit schema.org caviste',
        description: 'Balisage structuré LiquorStore, LocalBusiness et FAQPage avec vos régions viticoles, vos appellations et vos services (dégustation, conseil, livraison).',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages régions et cépages, articles accords mets-vins conformes à la loi Évin, FAQ, le tout intégré dans votre CMS ou livré par FTP.',
      },
      {
        id: 5,
        title: 'Campagne de netlinking',
        description: 'Liens depuis les blogs vin, les guides d\'oenologie et la presse gastronomique, dans le respect du cadre légal de la loi Évin.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel avec positions Google, trafic organique par appellation et type de vin, score GEO et suivi de la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cave dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel caviste recommandes-tu à Bordeaux ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre boutique n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel caviste recommandes-tu à Bordeaux ? » : le LLM ne cite aucun caviste par son nom. Il fournit une liste de critères de sélection (spécialisation, présence de vignerons indépendants, qualité du conseil) et renvoie vers Google Maps. Il mentionne des quartiers connus (Chartrons, Saint-Pierre à Bordeaux) sans nommer d\'enseignes. Les cavistes absents du web restent totalement invisibles.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon caviste ? » : le LLM génère un guide structuré en 5 à 7 critères (diversité de la sélection, conseil personnalisé, rapport qualité-prix, dégustations proposées, spécialisation bio ou nature). Aucun caviste n\'est cité en exemple. Le caviste qui publie ce type de contenu éducatif sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix vin chez un caviste » : le LLM donne des fourchettes par gamme (5 à 10 euros en entrée de gamme, 10 à 25 euros en milieu de gamme, au-delà de 25 euros en haut de gamme). Les sites affichant des données de prix précises et actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « caviste autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cavistes disposant d\'une fiche Google Business Profile complète (catégorie, avis récents, photos de la boutique) apparaissent directement dans la réponse IA avec note, adresse et horaires.</p>',
    structuredData:
      '<p>Pour les cavistes, les types schema.org recommandés sont : <code>LiquorStore</code> (type principal), <code>Product</code> (pour les fiches produit), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>LiquorStore</code> permet à Google et aux LLM d\'identifier précisément la spécialisation du commerce, sa localisation et les avis clients.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre caviste par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur le vin), la Légitimité & Citabilité (signaux de confiance externes : avis, mentions presse vinicole), et la Densité Factuelle (richesse des données structurées et des entités nommées : appellations, cépages, domaines).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les cavistes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de caviste ?',
        answer:
          'Le budget SEO pour un caviste dépend de la zone géographique ciblée et de l\'ambition (une ville, plusieurs villes, e-commerce). Chez Rankwell, les accompagnements SEO pour les cavistes démarrent à 1 200 euros par mois pour un référencement local mono-ville, et peuvent atteindre 3 000 à 5 000 euros par mois pour un caviste multi-boutiques ou avec une activité de vente en ligne.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un caviste ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« caviste bio Nantes », « cave à vin nature Toulouse ») se positionnent plus rapidement que les requêtes nationales très concurrentielles comme « caviste en ligne ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone de chalandise.',
      },
      {
        question: 'Le SEO d\'un caviste est-il compatible avec la loi Évin ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec la loi Évin, à condition de respecter le cadre légal : pas de contenu incitant à la consommation d\'alcool, pas de mise en avant de promotions sur l\'alcool, mention sanitaire obligatoire sur les pages produit. Rankwell connaît ces contraintes et adapte chaque stratégie de contenu en conséquence. Les guides d\'appellations, les fiches cépages et les conseils d\'accords mets-vins sont des formats conformes et performants en SEO.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un caviste ?',
        answer:
          'Un blog vinicole est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles (inspirées des PAA Google) : « quel vin servir avec un plateau de fromages ? », « différence entre vin bio et vin nature ». Ces contenus démontrent l\'expertise du caviste et sont rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un caviste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un caviste doit accumuler des signaux de notoriété sur le web : présence sur les annuaires vinicoles (Wine-Searcher, Vin-Vigne), mentions dans la presse spécialisée, profil Google Business optimisé, contenus riches et factuels sur son site (guides d\'appellations, fiches producteurs). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un caviste ?',
        answer:
          'Le SEO local cible les requêtes « caviste + ville » et « caviste autour de moi ». Il s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes comme « caviste en ligne » ou « acheter vin en ligne » et nécessite du contenu éducatif à forte autorité (guides, comparatifs). Rankwell combine les deux approches selon que le caviste vend uniquement en boutique ou aussi en e-commerce.',
      },
      {
        question: 'Les plateformes comme Vivino ou Wine-Searcher suffisent-elles pour être visible ?',
        answer:
          'Les plateformes vinicoles sont utiles pour la visibilité initiale, mais elles créent une dépendance : le caviste n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de contrôler son image, de convertir directement (réservation de dégustation, commande en ligne) et de construire une autorité durable. Rankwell aide les cavistes à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des marketplaces.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cave visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Bar', href: '/agence-geo-seo/secteur/bar' },
        { label: 'SEO Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
        { label: 'SEO Hôtel', href: '/agence-geo-seo/secteur/hotel' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
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
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Hôtel', href: '/agence-geo-seo/secteur/hotel' },
      { label: 'Food truck', href: '/agence-geo-seo/secteur/food-truck' },
    ],
  },

  // Schema.org type principal
  schemaType: 'LiquorStore',
};

export default data;
