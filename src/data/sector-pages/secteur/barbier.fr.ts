/**
 * DATA : Page Secteur Barbiers (FR)
 * Route : /agence-geo-seo/secteur/barbier
 *
 * Mots-cles Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'barbier',
    title: 'Agence GEO & SEO pour Barbiers - Rankwell',
    description:
      'Rankwell accompagne les barbiers et barber shops dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la barberie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Barbiers' },
    ],
    title: 'GEO & SEO Barbier : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent « barbier autour de moi » ou « barber shop » sur Google et dans ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO taillées pour les barbiers indépendants et les enseignes multi-salons.',
    ctaText: 'Demander un audit GEO & SEO barbier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les barbiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches liées aux barbiers sont géolocalisées</strong> (« barbier autour de moi », « barber shop Lyon »). Le client décide en quelques secondes parmi les 3 premiers résultats du Local Pack ou la recommandation d\'un moteur IA. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la fiche Google Business Profile et les avis clients font la différence.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le parcours d\'achat passe par Instagram et TikTok avant Google</strong> : un barbier sans portfolio visuel perd une part importante de sa clientèle potentielle. La saisonnalité est marquée avec des pics avant les fêtes, mariages et rentrées scolaires.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Planity, Treatwell, Google Maps, Instagram et TikTok</strong> captent la majorité du trafic lié aux barbiers. Planity domine la prise de rendez-vous en France avec <strong>plus de 100 000 professionnels</strong> référencés. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un barber shop reste invisible face à ces plateformes.',
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
      { keyword: 'barber shop', volume: 16000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'barbier', volume: 10000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'barbier autour de moi', volume: 4500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coiffeur barbier', volume: 3000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'coiffeur barbier autour de moi', volume: 1600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'barbier paris', volume: 1000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'barber shop paris', volume: 900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'barber shop lyon', volume: 800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'barbier nantes', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'barbier à proximité', volume: 700, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 40 000 recherches locales comme « barbier autour de moi » ou « barber shop Lyon » représentent autant de clients potentiels prêts à prendre rendez-vous. La majorité clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre salon n\'y figure pas, ces clients poussent la porte d\'un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les barbiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux spécificités du secteur barbier.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du barber shop, de la vitesse de chargement et de l\'indexation des pages de prestations.',
        items: [
          'Structure des pages par prestation (coupe, barbe, rasage, soins)',
          'Balises schema.org BarberShop',
          'Performance et Core Web Vitals sur mobile',
          'Crawl et indexation des pages portfolio',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité du barbier dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du salon',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA barbier',
        ],
      },
      {
        title: 'Étude de marché & mots-clés barbier',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à fort potentiel comme « barbier + ville » ou « barber shop + quartier ».',
        items: [
          'Combinaisons prestation + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche par prestation (coupe, barbe, rasage)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours client : découverte, choix de prestation, prise de rendez-vous.',
        items: [
          'Page prestation vers page barbier vers page réservation',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu barbier',
        subtitle: 'Création de contenus visuels et éducatifs qui montrent le savoir-faire du barbier et sont citables par les LLM.',
        items: [
          'Guides pratiques (entretien barbe, choix de coupe, rasage)',
          'Phrases factuelles avec données chiffrées (prix, durées)',
          'Galerie photos et vidéos des réalisations avant/après',
        ],
      },
      {
        title: 'Autorité & netlinking barbier',
        subtitle: 'Développement de la notoriété via les annuaires spécialisés, la presse locale et les collaborations avec des influenceurs lifestyle.',
        items: [
          'Planity, Treatwell, PagesJaunes, annuaires locaux',
          'Mentions dans la presse locale et blogs masculins',
          'Partenariats avec des marques de soins (Proraso, Captain Fawcett)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du barber shop pour capter les requêtes « barbier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Barber Shop + catégories secondaires (coiffeur homme)',
          'Gestion des avis clients et stratégie de collecte post-prestation',
          'Photos du salon, des réalisations et de l\'équipe mises à jour régulièrement',
          'Citations NAP cohérentes sur Planity, Treatwell et les annuaires locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par prestation et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par prestation',
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
        description: 'Diagnostic site/Instagram, pages prestations (coupe, barbe, soins), vitesse mobile, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes barbier/barber shop, benchmark concurrents locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage BarberShop, LocalBusiness, FAQPage avec prestations et tarifs.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages prestations, articles tendances barbe/grooming, FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires beaute (Planity, Treatwell), blogs grooming, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation, trafic organique, reservations Planity attribuees, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre barber shop dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel barbier recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre salon n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel barbier recommandes-tu à Lyon ? » : le LLM ne cite aucun établissement précis. Il fournit une liste de critères de sélection (avis Google supérieurs à 4,5, spécialité barbe ou coupe, ambiance du salon) et renvoie vers Google Maps et les réseaux sociaux. Le barbier disposant de mentions sur des sources tierces (presse locale, blogs lifestyle) a plus de chances d\'être cité nommément.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon barbier ? » : le LLM génère un guide structuré en 6 critères (spécialisation barbe et rasage, hygiène des outils, avis clients, ambiance, portfolio Instagram, rapport qualité-prix). Aucun nom d\'établissement ni source externe cités. Le barbier qui publie ce type de contenu éducatif sur son site peut être extrait comme référence.</p><h4>Requêtes comparatives</h4><p>« Barbier vs coiffeur homme : quelle différence ? » : le LLM produit une comparaison structurée en 5 points (formation, prestations, outils, ambiance, prix). Il mentionne la renaissance de la culture barbier depuis les années 2010. Les sites présentant ce type de contenu factuel et structuré sont les plus susceptibles d\'être cités comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix coupe barbier » : le LLM donne des fourchettes nationales (coupe simple 15 à 25 euros, coupe et barbe 25 à 40 euros, rasage traditionnel 15 à 30 euros). Les barber shops affichant des grilles tarifaires détaillées et actualisées sur leur site ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « barbier autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les barber shops disposant d\'une fiche Google Business Profile complète (catégorie Barber Shop, avis récents supérieurs à 4,3, photos du salon) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les barber shops, les types schema.org recommandés sont : <code>BarberShop</code> (type principal), <code>HealthAndBeautyBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>BarberShop</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées, la localisation et les avis clients du salon.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre barber shop par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les barbiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de barbier ?',
        answer:
          'Le budget SEO pour un barber shop dépend du nombre de salons et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les barbiers démarrent à 800 euros par mois pour un salon et une ville, et peuvent atteindre 2 500 à 4 000 euros par mois pour une enseigne multi-salons en agglomération.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO barbier ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (« barbier rasage traditionnel Nantes ») sont plus rapides à positionner que les requêtes génériques nationales. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone.',
      },
      {
        question: 'Instagram suffit-il pour attirer des clients en barber shop ?',
        answer:
          'Instagram est un canal puissant pour montrer le savoir-faire (photos avant/après, réels de coupes), mais il ne remplace pas le SEO. Un client qui tape « barbier autour de moi » sur Google ne verra pas votre profil Instagram dans les résultats. Rankwell combine la visibilité Google, la présence dans les moteurs IA et les signaux sociaux pour maximiser l\'acquisition de clients.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement de son barber shop ?',
        answer:
          'Un blog est un levier efficace s\'il est bien ciblé. Les articles doivent répondre à des questions réelles des clients (entretien de la barbe, choix de coupe selon la forme du visage, différence barbier et coiffeur) et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un barbier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un barber shop doit accumuler des signaux de notoriété sur le web : présence sur Planity et Treatwell, mentions dans la presse locale, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un barbier ?',
        answer:
          'Le SEO local cible les requêtes « barbier + ville » ou « barber shop à proximité » et s\'appuie sur Google Business Profile, les avis clients et les citations locales (Planity, PagesJaunes). Le SEO national vise des requêtes génériques (« meilleur barbier de France ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie du salon.',
      },
      {
        question: 'Planity et Treatwell suffisent-ils pour être visible en tant que barbier ?',
        answer:
          'Les plateformes de réservation comme Planity sont utiles pour la visibilité initiale, mais elles créent une dépendance : le barber shop n\'est qu\'un profil parmi des milliers, et chaque réservation est commissionnée. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les barbiers à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre barber shop visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
        { label: 'SEO Spa', href: '/agence-geo-seo/secteur/spa' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
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
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'BarberShop',
};

export default data;
