/**
 * DATA : Page Secteur Hôtels (FR)
 * Route : /agence-geo-seo/secteur/hotel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'hotel',
    title: 'Agence GEO & SEO pour Hôtels - Rankwell',
    description:
      'Rankwell accompagne les hôteliers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur hôtelier.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Hôtels' },
    ],
    title: 'GEO & SEO Hôtel : visibilité Google & moteurs IA',
    subtitle:
      'Votre hôtel doit apparaître là où vos futurs clients réservent : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur hôtelier.',
    ctaText: 'Demander un audit GEO & SEO hôtel',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les hôtels',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">83 % des recherches hôtelières sont effectuées sur mobile</strong>, souvent avec une intention de réservation immédiate. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 premiers résultats du Local Pack Google et les établissements cités par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La saisonnalité structure tout le calendrier SEO hôtelier</strong> : les volumes varient du simple au triple entre basse et haute saison. Les classements par étoiles sont réglementés par Atout France, et un hôtel avec une note Google inférieure à 4,0 perd la quasi-totalité du trafic comparatif.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Booking.com, Expedia, Trivago, Hotels.com et Google Hotels</strong> captent plus de 70 % des clics sur les requêtes hôtelières génériques. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un hôtel indépendant reste invisible face à ces OTA qui investissent des milliards.',
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
      { keyword: 'hôtel autour de moi', volume: 4600, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'hôtel paris', volume: 2900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel à proximité', volume: 2100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel de luxe', volume: 1800, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'hôtel strasbourg', volume: 1800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel bordeaux', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel lyon', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel pas cher paris', volume: 800, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'hôtel nice', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'hôtel 4 étoiles paris', volume: 300, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches locales comme « hôtel autour de moi » ou « hôtel pas cher paris » représentent autant de réservations potentielles. La majorité des voyageurs clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre établissement n\'y figure pas, ces clients réservent chez vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les hôtels',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur hôtelier.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation. Attention particulière au moteur de réservation qui génère souvent du contenu dupliqué.',
        items: [
          'Structure des pages par type de chambre et offre',
          'Balises schema.org Hotel et LodgingBusiness',
          'Performance et Core Web Vitals (images HD des chambres)',
          'Crawl et indexation du moteur de réservation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'hôtel dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'établissement',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA hôtelières',
        ],
      },
      {
        title: 'Étude de marché & mots-clés hôteliers',
        subtitle: 'Cartographie des requêtes par catégorie d\'hébergement, gamme de prix et zone géographique. Identification des niches à forte conversion (« hôtel spa + ville », « hôtel avec piscine + destination »).',
        items: [
          'Combinaisons catégorie + ville + critère à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par destination et saison',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de réservation du voyageur et le crawl Google.',
        items: [
          'Page destination → page hôtel → page chambre → réservation',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par type de chambre',
        ],
      },
      {
        title: 'Stratégie de contenu hôtelier',
        subtitle: 'Création de contenus mettant en valeur l\'expérience client et la destination, rédigés pour être citables par les LLM.',
        items: [
          'Guides de destination et itinéraires locaux',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Pages thématiques : séjour romantique, business, famille',
        ],
      },
      {
        title: 'Autorité & netlinking hôtelier',
        subtitle: 'Développement de l\'autorité via les annuaires de tourisme qualifiés, les guides de voyage et la presse spécialisée.',
        items: [
          'TripAdvisor, Booking.com, Google Hotels, Michelin Guide',
          'Publications dans la presse tourisme et lifestyle',
          'Partenariats avec les offices de tourisme locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'hôtel pour capter les requêtes locales « hôtel + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Hotel + catégories secondaires (spa, restaurant)',
          'Gestion des avis clients et stratégie de collecte post-séjour',
          'Photos professionnelles des chambres, lobby et équipements',
          'Citations NAP cohérentes sur les OTA et annuaires tourisme',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par destination et les réservations directes générées.',
        items: [
          'Positions Google par mot-clé et par destination',
          'Trafic organique vs trafic OTA',
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
        description: 'Diagnostic du site : pages chambres, tarifs, module de r\u00e9servation, vitesse mobile et indexation. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates h\u00f4teli\u00e8res, benchmark contre 3 \u00e0 5 \u00e9tablissements concurrents et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Hotel, LodgingReservation et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec types de chambres, tarifs et services de l\'\u00e9tablissement.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages chambres, guides destination et activit\u00e9s, articles saisons et FAQ. Int\u00e9gration CMS ou FTP et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis guides de voyage, OTA, blogs tourisme et presse. Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, r\u00e9servations directes attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre hôtel dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un voyageur demande à ChatGPT « quel hôtel recommandes-tu à Nice ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre établissement n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal de réservation.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel hôtel recommandes-tu à Nice ? » : le LLM cite 5 à 8 hôtels par catégorie de prix (budget, milieu de gamme, luxe), avec le quartier et une fourchette tarifaire. Les établissements disposant d\'une forte empreinte web (avis Google, mentions dans la presse, profils OTA complets) reviennent systématiquement.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon hôtel ? » : le LLM génère un guide structuré en 6 à 8 critères (emplacement, avis clients, rapport qualité-prix, services, classement étoiles). Aucun nom d\'établissement cité. Un hôtel publiant ce type de contenu informatif enrichi de données factuelles peut être extrait comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix nuit hôtel 4 étoiles Paris » : le LLM fournit des fourchettes (150 à 350 euros la nuit), différenciées par quartier et saison. Les sites affichant des grilles tarifaires actualisées et géolocalisées ont le plus de chances d\'être cités.</p><h4>Requêtes locales et Maps</h4><p>Sur « hôtel autour de moi pas cher », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les hôtels disposant d\'une fiche Google Business Profile complète (catégorie, avis récents, photos professionnelles, prix affichés) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les hôtels, les types schema.org recommandés sont : <code>Hotel</code> (type principal), <code>LodgingBusiness</code>, <code>LodgingReservation</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Hotel</code> permet à Google et aux LLM d\'identifier précisément la catégorie, la localisation, les tarifs et les avis de l\'établissement.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre hôtel par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les hôtels',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'hôtel ?',
        answer:
          'Le budget SEO pour un hôtel dépend de la destination, du nombre de chambres et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les hôtels démarrent à 1 500 euros/mois pour un établissement mono-site, et peuvent atteindre 5 000 à 8 000 euros/mois pour un groupe hôtelier multi-destinations.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO hôtelier ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche (« hôtel spa Annecy », « hôtel avec piscine Bordeaux ») se positionnent plus rapidement que les requêtes génériques très concurrentielles comme « hôtel Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre destination.',
      },
      {
        question: 'Un hôtel peut-il concurrencer Booking.com en SEO ?',
        answer:
          'Un hôtel indépendant ne peut pas dépasser Booking.com sur les requêtes génériques (« hôtel Paris »), mais il peut le surclasser sur les requêtes de niche et longue traîne : « hôtel familial avec piscine Côte d\'Azur », « boutique hôtel romantique Provence ». Rankwell identifie ces créneaux et construit une stratégie de contenu ciblée qui génère des réservations directes, sans commission OTA.',
      },
      {
        question: 'Le contenu de destination aide-t-il le référencement d\'un hôtel ?',
        answer:
          'Les guides de destination sont un levier puissant pour le SEO hôtelier. Les voyageurs recherchent « que faire à Bordeaux » ou « meilleurs restaurants Nice » avant de réserver. Un hôtel qui publie des guides locaux de qualité capte ce trafic d\'intention en amont de la réservation. Rankwell recommande 2 à 4 contenus de destination par mois, ciblant des requêtes informationnelles à fort potentiel de conversion.',
      },
      {
        question: 'Comment un hôtel peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un hôtel doit accumuler des signaux de notoriété sur le web : présence sur les OTA majeures, avis récents et positifs sur Google et TripAdvisor, mentions dans les guides de voyage et la presse tourisme, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un hôtel ?',
        answer:
          'Le SEO local cible les requêtes « hôtel + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires tourisme. Le SEO national vise des requêtes plus larges (« meilleur hôtel spa en France », « hôtel de luxe bord de mer ») et nécessite du contenu à forte autorité thématique. Rankwell combine les deux approches selon le positionnement et la clientèle cible de l\'établissement.',
      },
      {
        question: 'Les OTA suffisent-elles pour remplir un hôtel ?',
        answer:
          'Les OTA comme Booking.com ou Expedia génèrent des réservations, mais avec des commissions de 15 à 25 % par nuit. Un site propre bien référencé permet de capter des réservations directes, sans commission, et de contrôler l\'image de marque. Les hôtels qui investissent en SEO réduisent progressivement leur dépendance aux OTA. Rankwell aide les hôteliers à bâtir cette visibilité organique propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre hôtel visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Spa', href: '/agence-geo-seo/secteur/spa' },
        { label: 'SEO Bar', href: '/agence-geo-seo/secteur/bar' },
        { label: 'SEO Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
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
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Food truck', href: '/agence-geo-seo/secteur/food-truck' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Hotel',
};

export default data;
