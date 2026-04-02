/**
 * DATA : Page Secteur Bars (FR)
 * Route : /agence-geo-seo/secteur/bar
 *
 * Secteur CHR : bars, bars a cocktails, bars a vin, speakeasy, rooftops.
 * Dominante locale forte (85 %+ des requetes contiennent une ville ou "autour de moi").
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bar',
    title: 'Agence GEO & SEO pour Bars - Rankwell',
    description:
      'Rankwell accompagne les bars dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur des bars.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Bars' },
    ],
    title: 'GEO & SEO Bar : visibilité Google & moteurs IA',
    subtitle:
      'Votre bar doit apparaître là où vos futurs clients cherchent : sur Google Maps, dans les classements en ligne et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur des bars et de la nuit.',
    ctaText: 'Demander un audit GEO & SEO bar',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les bars',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches liées aux bars sont géolocalisées</strong> (« bar autour de moi », « bar cocktail Paris »). Le client cherche sur mobile, souvent le soir même, et choisit parmi les 3 premiers résultats du Local Pack ou la recommandation d\'un moteur IA. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> à intention immédiate.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les contenus doivent respecter la loi Évin</strong> (pas d\'incitation à la consommation d\'alcool), ce qui limite les approches SEO classiques axées sur le produit. La saisonnalité est forte : terrasses en été, bars cachés et speakeasy en hiver, événements ponctuels.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Google Maps, TripAdvisor, Time Out, Le Fooding et les classements « 50 Best Bars »</strong> captent la majorité du trafic sur « meilleur bar » et « bar + ville ». Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un bar indépendant reste invisible face à ces plateformes.',
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
      { keyword: 'bar autour de moi', volume: 15000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar dansant paris', volume: 4600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar paris', volume: 4400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar à jeux paris', volume: 2100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar a cocktail', volume: 1800, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'bar caché paris', volume: 1700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'rooftop bar paris', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar a vin paris', volume: 1200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar a cocktail paris', volume: 1000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bar à vin', volume: 700, intent: 'mixte', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de recherches locales comme « bar autour de moi » ou « bar cocktail Paris » représentent autant de clients potentiels. La majorité choisit parmi les 3 premiers résultats Google Maps ou suit la recommandation d\'un moteur IA. Si votre bar n\'y figure pas, ces clients poussent la porte d\'un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les bars',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur des bars et de la vie nocturne.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site du bar : architecture des pages (carte, événements, réservation), vitesse de chargement mobile et facteurs techniques freinant l\'indexation.',
        items: [
          'Structure des pages par univers (cocktails, vins, événements, privatisation)',
          'Balises schema.org BarOrPub et FoodEstablishment',
          'Performance mobile et Core Web Vitals',
          'Crawl et indexation des pages événementielles',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité du bar dans les réponses de ChatGPT, Perplexity et Gemini via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du bar (mentions presse, classements, avis)',
          'Mesure de la légitimité et citabilité par les LLM',
          'Évaluation de la densité factuelle du contenu (carte, prix, horaires)',
          'Benchmark concurrentiel sur les requêtes IA locales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du secteur bar',
        subtitle: 'Cartographie des requêtes par type de bar (cocktail, vin, dansant, speakeasy) et par zone géographique. Identification des créneaux sous-exploités.',
        items: [
          'Combinaisons type de bar + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA (« meilleur bar pour... »)',
          'Volumes de recherche réels par spécialité et quartier',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un parcours utilisateur pensé pour convertir la visite en réservation ou en venue spontanée.',
        items: [
          'Page d\'accueil → page carte/ambiance → page réservation/contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec le quartier et le type de bar',
        ],
      },
      {
        title: 'Stratégie de contenu pour bars',
        subtitle: 'Création de contenus qui valorisent l\'identité du bar tout en respectant la loi Évin : focus sur l\'ambiance, le savoir-faire et les événements.',
        items: [
          'Articles sur les tendances mixologie, accords mets-vins, programmation musicale',
          'Pages événementielles optimisées (soirées, dégustations, privatisation)',
          'Phrases factuelles auto-suffisantes avec données chiffrées pour la citabilité IA',
        ],
      },
      {
        title: 'Autorité & netlinking sectoriel',
        subtitle: 'Développement de l\'autorité via les guides locaux, la presse lifestyle et les classements de bars reconnus.',
        items: [
          'Référencement dans Time Out, Le Fooding, Le Bonbon, Sortir à Paris',
          'Mentions dans les classements 50 Best Bars et World\'s Best Bars',
          'Partenariats avec des blogs et influenceurs food & drink locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du bar pour capter les requêtes locales « bar + ville » et « bar autour de moi », et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Bar (ou Cocktail Bar, Wine Bar) + catégories secondaires',
          'Gestion des avis clients et stratégie de collecte (QR code sur table, ticket)',
          'Photos d\'ambiance, menu, terrasse, horaires et posts réguliers',
          'Citations NAP cohérentes sur TripAdvisor, Yelp, PagesJaunes, annuaires locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de requête et les conversions (réservations, appels, itinéraires).',
        items: [
          'Positions Google par mot-clé (bar + ville, bar + type)',
          'Trafic organique par source et par page',
          'Score GEO : visibilité dans les moteurs IA',
          'Conversions : réservations en ligne, clics itinéraire, appels',
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
        description: 'Diagnostic site, pages carte/evenements, vitesse mobile, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes bar/cocktail, benchmark concurrents locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage BarOrPub, FoodEstablishment, FAQPage avec carte, horaires et evenements.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages carte cocktails, articles soirees/evenements (conformes loi Evin), FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis guides sortie (Time Out, Le Fooding), blogs cocktail, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions, trafic organique, reservations attribuees au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre bar dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel bar à cocktails recommandes-tu à Paris ? », le LLM compile des informations provenant des classements en ligne, des avis Google et des guides locaux pour formuler sa réponse. Si votre bar n\'apparaît dans aucune de ces sources, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel bar à cocktails recommandes-tu à Paris ? » : le LLM cite 5 à 8 établissements nommés avec quartier et spécialité (cocktails d\'auteur, speakeasy, spiritueux français). Les bars cités figurent systématiquement dans les classements publics (50 Best Bars, Time Out, Le Fooding) et disposent d\'une note Google supérieure à 4,3.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon bar pour une soirée ? » : le LLM génère un guide structuré en 5 à 7 critères (ambiance, carte des boissons, fourchette de prix, localisation, avis clients, programmation musicale). Aucun établissement n\'est cité nommément. Un bar publiant ce type de contenu sur son site peut être extrait comme source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix cocktail dans un bar » : le LLM fournit des fourchettes segmentées : 10-15 EUR en province, 13-18 EUR à Paris, 15-22 EUR pour les bars premium ou speakeasy. Les sites affichant leur carte avec les prix explicites ont le plus de chances d\'être cités comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « bar autour de moi ouvert ce soir », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les bars disposant d\'une fiche Google Business Profile complète (horaires à jour, photos d\'ambiance récentes, avis récents) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les bars, les types schema.org recommandés sont : <code>BarOrPub</code> (type principal), <code>FoodEstablishment</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>BarOrPub</code> permet à Google et aux LLM d\'identifier précisément le type d\'établissement, la localisation, les horaires d\'ouverture, la fourchette de prix et les avis clients.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre bar par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence dans les guides, classements et mentions presse), la Légitimité & Citabilité (signaux de confiance externes : avis, backlinks, citations), et la Densité Factuelle (richesse des données structurées et des entités nommées sur votre site).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les bars',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de bar ?',
        answer:
          'Le budget SEO pour un bar dépend de la zone géographique et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les bars démarrent à 800 EUR/mois pour un établissement mono-site en province, et peuvent atteindre 2 500-4 000 EUR/mois pour un bar parisien ou un groupe multi-établissements en zone très concurrentielle.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un bar ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (« bar à vin Bordeaux centre ») sont plus rapides à positionner que les requêtes génériques très concurrentielles (« bar Paris »). Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle du quartier.',
      },
      {
        question: 'Le SEO d\'un bar est-il compatible avec la loi Évin ?',
        answer:
          'Oui, le référencement d\'un bar est parfaitement compatible avec la loi Évin, à condition d\'adapter le contenu : pas d\'incitation à la consommation d\'alcool, pas de mise en avant de promotions sur les boissons alcoolisées. Rankwell connaît ces contraintes légales et structure chaque stratégie de contenu autour de l\'ambiance, du savoir-faire et de l\'expérience client.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un bar ?',
        answer:
          'Un blog est un levier efficace s\'il est bien ciblé. Les articles doivent répondre à des requêtes réelles : tendances cocktails de la saison, guide des meilleurs quartiers pour sortir, conseils pour organiser un événement privé. Rankwell recommande 2 à 4 articles par mois, orientés vers des requêtes informationnelles à forte intention locale.',
      },
      {
        question: 'Comment un bar peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un bar doit accumuler des signaux de notoriété sur le web : présence dans les guides locaux (Time Out, Le Fooding), mentions dans les classements de bars, profil Google Business optimisé avec avis récents, contenus factuels sur son site (carte, prix, horaires). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un bar ?',
        answer:
          'Le SEO local cible les requêtes « bar + quartier/ville » et « bar autour de moi » en s\'appuyant sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes de notoriété (« meilleurs bars à cocktails en France ») et nécessite des mentions presse et des classements. Rankwell combine les deux approches selon le positionnement de l\'établissement.',
      },
      {
        question: 'TripAdvisor et les guides en ligne suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme TripAdvisor, Time Out ou Google Maps sont utiles pour la visibilité initiale, mais elles créent une dépendance : votre bar n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de contrôler votre image, de présenter votre carte et vos événements, et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les bars à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre bar visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Hôtel', href: '/agence-geo-seo/secteur/hotel' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
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
      { label: 'Hôtel', href: '/agence-geo-seo/secteur/hotel' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
    ],
  },

  // Schema.org type principal
  schemaType: 'BarOrPub',
};

export default data;
