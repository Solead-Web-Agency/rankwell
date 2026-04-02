/**
 * DATA : Page Secteur Vétérinaires (FR)
 * Route : /agence-geo-seo/secteur/veterinaire
 *
 * Contenu unique, non-interchangeable, basé sur données Ahrefs (mars 2026)
 * et auto-test LLM factuel.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'veterinaire',
    title: 'Agence GEO & SEO pour Vétérinaires - Rankwell',
    description:
      'Rankwell accompagne les cliniques et cabinets vétérinaires dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur vétérinaire.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Vétérinaires' },
    ],
    title: 'GEO & SEO Vétérinaire : visibilité Google & moteurs IA',
    subtitle:
      'Votre clinique doit apparaitre quand un propriétaire d\'animal cherche un vétérinaire : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur vétérinaire.',
    ctaText: 'Demander un audit GEO & SEO vétérinaire',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les vétérinaires',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">8 600 recherches mensuelles pour « clinique vétérinaire autour de moi » et 5 200 pour « vétérinaire autour de moi »</strong>. Les propriétaires d\'animaux cherchent un praticien dans un rayon de 15 minutes, surtout en urgence. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> dominé par le mobile, où la fiche Google Business Profile et les avis clients sont décisifs.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les tarifs vétérinaires sont libres</strong>, sans convention nationale. Cette opacité tarifaire pousse les propriétaires d\'animaux à comparer en ligne avant de prendre rendez-vous. Le Code de déontologie vétérinaire autorise la présence en ligne mais interdit le dénigrement des confrères et les promesses de résultats thérapeutiques.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Pages Jaunes, annuaire-veterinaire.fr (Ordre national), Google Maps et Doctolib</strong> captent une part croissante des requêtes transactionnelles. Sur « clinique vétérinaire + ville », les annuaires occupent souvent les 3 premières positions. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une clinique reste noyée dans les fiches d\'annuaires.',
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
      { keyword: 'clinique vétérinaire', volume: 27000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'vétérinaire autour de moi', volume: 5200, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'vétérinaire de garde', volume: 3800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'cabinet vétérinaire', volume: 3800, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'prix consultation vétérinaire', volume: 2100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'vétérinaire de garde autour de moi', volume: 2100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vétérinaire à domicile autour de moi', volume: 1300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vétérinaire à proximité', volume: 1300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'clinique vétérinaire paris', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vétérinaire paris', volume: 350, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 40 000 recherches locales comme « clinique vétérinaire » ou « vétérinaire autour de moi » représentent autant de propriétaires d\'animaux en quête d\'un praticien. La majorité clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre clinique n\'y figure pas, ces clients prennent rendez-vous ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les vétérinaires',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur vétérinaire.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation de votre clinique vétérinaire.',
        items: [
          'Structure des pages par type de soin (consultation, chirurgie, urgences, NAC)',
          'Balises schema.org VeterinaryCare',
          'Performance et Core Web Vitals',
          'Crawl et indexation des fiches praticiens',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre clinique dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la clinique',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA vétérinaires',
        ],
      },
      {
        title: 'Étude de marché & mots-clés vétérinaires',
        subtitle: 'Cartographie des requêtes par type de soin, espèce animale et zone géographique. Identification des combinaisons à fort potentiel.',
        items: [
          'Combinaisons spécialité + ville + espèce (« vétérinaire NAC Lyon »)',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par type de soin (urgence, vaccination, stérilisation)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du propriétaire d\'animal et le crawl Google.',
        items: [
          'Page service (chirurgie, dermatologie, dentisterie) vers page praticien vers page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec terminologie vétérinaire',
        ],
      },
      {
        title: 'Stratégie de contenu vétérinaire',
        subtitle: 'Création de contenus éducatifs sur la santé animale, démontrant l\'expertise de la clinique et rédigés pour être citables par les LLM.',
        items: [
          'Guides et FAQ répondant aux PAA Google (vaccination, stérilisation, alimentation)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (fourchettes de prix, durée d\'intervention)',
          'Fiches par espèce animale (chien, chat, NAC) et par pathologie',
        ],
      },
      {
        title: 'Autorité & netlinking vétérinaire',
        subtitle: 'Développement de l\'autorité via les annuaires vétérinaires qualifiés et les publications spécialisées.',
        items: [
          'Annuaire de l\'Ordre des vétérinaires (annuaire-veterinaire.fr)',
          'Pages Jaunes, Yelp, annuaires locaux',
          'Publications dans la presse spécialisée (La Semaine Vétérinaire, Le Point Vétérinaire)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de la clinique pour capter les requêtes locales « vétérinaire + ville » et apparaitre dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Veterinarian + catégories secondaires (Emergency Veterinarian, Animal Hospital)',
          'Gestion des avis clients et stratégie de collecte post-consultation',
          'Photos de la clinique, équipements, équipe, horaires de garde renseignés',
          'Citations NAP cohérentes sur les annuaires vétérinaires',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de soin et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par service (consultation, urgence, chirurgie)',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et appels téléphoniques',
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
        description: 'Diagnostic site de la clinique, pages esp\u00e8ces/soins, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates v\u00e9t\u00e9rinaires, benchmark confr\u00e8res, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage VeterinaryCare, AnimalShelter, FAQPage avec esp\u00e8ces (chien, chat, NAC) et soins.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages soins par esp\u00e8ce, articles conseils (vaccination, alimentation, urgences), FAQ tarifs, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires v\u00e9t\u00e9rinaires, blogs animaux, presse animali\u00e8re, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par type de soin, trafic organique, prises de RDV attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre clinique dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un propriétaire d\'animal demande à ChatGPT « quel vétérinaire recommandes-tu à Nantes ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre clinique n\'apparait dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel vétérinaire recommandes-tu à Nantes ? » : le LLM ne cite aucune clinique par nom. Il fournit une liste de critères de sélection (proximité, avis Google, spécialisation, équipements) et renvoie vers l\'annuaire de l\'Ordre des vétérinaires, Google Maps et les Pages Jaunes. Les cliniques ayant publié des contenus de santé animale sourcés et détaillés ont le plus de chances d\'émerger comme source citée.</p><h4>Requêtes d\'information et de comparaison</h4><p>« Vétérinaire généraliste vs spécialiste NAC ? » : le LLM génère une comparaison structurée (80 % de la clientèle vétérinaire concerne chiens et chats, le spécialiste NAC requiert une formation complémentaire type DESV, consultation 20 à 50 % plus chère). Aucun praticien n\'est cité. La clinique qui publie ce type de comparaison factuelle sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix consultation vétérinaire chien » : le LLM donne des fourchettes (30 à 60 euros en consultation classique, 60 à 120 euros chez un spécialiste, 250 à 500 euros pour une stérilisation). Les tarifs vétérinaires étant libres, les cliniques affichant une grille tarifaire actualisée sur leur site ont le plus de chances d\'être extraites comme source.</p><h4>Requêtes locales et urgences</h4><p>Sur « vétérinaire de garde autour de moi ce soir », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cliniques disposant d\'une fiche Google Business Profile complète (catégorie Veterinarian, horaires de garde renseignés, numéro d\'urgence visible) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cliniques vétérinaires, les types schema.org recommandés sont : <code>VeterinaryCare</code> (type principal), <code>AnimalShelter</code> (si refuge associé), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>VeterinaryCare</code> permet à Google et aux LLM d\'identifier précisément les services proposés (consultation, chirurgie, urgences, NAC), la localisation et les horaires de la clinique.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre clinique vétérinaire par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus santé animale), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les vétérinaires',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de clinique vétérinaire ?',
        answer:
          'Le budget SEO pour une clinique vétérinaire dépend du nombre de services proposés (consultation, chirurgie, urgences, NAC) et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cliniques vétérinaires démarrent à 1 200 euros/mois pour une clinique mono-site, et peuvent atteindre 3 000-5 000 euros/mois pour un réseau de cliniques multi-villes.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO vétérinaire ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « vétérinaire NAC Toulouse ») sont plus rapides à positionner que les requêtes génériques très concurrentielles comme « clinique vétérinaire ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone géographique.',
      },
      {
        question: 'La publicité en ligne est-elle autorisée pour les vétérinaires ?',
        answer:
          'Le Code de déontologie vétérinaire (article R242-35 du Code rural) autorise la communication en ligne à condition qu\'elle soit loyale, honnête et non comparative. La publicité directe avec promesse de résultats thérapeutiques est interdite. Le SEO est compatible avec ces règles : il s\'agit de rendre votre site visible sur les moteurs de recherche, pas de faire de la publicité agressive. Rankwell connait ces contraintes et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog santé animale pour améliorer son référencement vétérinaire ?',
        answer:
          'Un blog santé animale est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles (vaccination chiot, stérilisation chat, alimentation NAC), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traine comme « quand vacciner son chaton » ou « symptômes torsion estomac chien ».',
      },
      {
        question: 'Comment une clinique vétérinaire peut-elle apparaitre dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une clinique doit accumuler des signaux de notoriété sur le web : présence sur l\'annuaire de l\'Ordre des vétérinaires, mentions dans la presse spécialisée (La Semaine Vétérinaire), profil Google Business optimisé, contenus santé animale riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un vétérinaire ?',
        answer:
          'Le SEO local cible les requêtes « vétérinaire + ville » ou « clinique vétérinaire autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur vétérinaire NAC ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches : le local pour capter les propriétaires d\'animaux de votre zone, le national pour asseoir l\'expertise de la clinique.',
      },
      {
        question: 'Les annuaires vétérinaires suffisent-ils pour être visible en ligne ?',
        answer:
          'Les annuaires comme annuaire-veterinaire.fr ou Pages Jaunes sont utiles pour la visibilité initiale, mais ils créent une dépendance : votre clinique n\'est qu\'une fiche parmi des centaines. Un site propre bien référencé permet de contrôler votre image, de publier des contenus éducatifs, de convertir directement et de construire une autorité durable. Rankwell aide les cliniques vétérinaires à bâtir cette présence propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre clinique visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
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
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'VeterinaryCare',
};

export default data;
