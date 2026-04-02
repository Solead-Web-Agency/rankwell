/**
 * DATA : Page Secteur Imprimeurs (FR)
 * Route : /agence-geo-seo/secteur/imprimeur
 *
 * Mots-clés Ahrefs (country: fr), mars 2026
 * Auto-test LLM : 5 requêtes testées, rapport dans rapport-test-imprimeur.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'imprimeur',
    title: 'Agence GEO & SEO pour Imprimeurs - Rankwell',
    description:
      'Rankwell accompagne les imprimeurs et imprimeries dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de l\'impression.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Imprimeurs' },
    ],
    title: 'GEO & SEO Imprimeur : visibilité Google & moteurs IA',
    subtitle:
      'Vos clients cherchent un imprimeur sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur de l\'impression.',
    ctaText: 'Demander un audit GEO & SEO imprimeur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les imprimeurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">17 000 recherches mensuelles pour « imprimerie autour de moi »</strong> en France, le mot-clé dominant du secteur. Les clients cherchent un imprimeur de proximité avec une intention d\'achat immédiate. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 résultats du Local Pack Google ou ceux recommandés par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les imprimeries en ligne (Vistaprint, Printoclock, Exaprint) écrasent les prix</strong> avec des budgets SEA et SEO que les imprimeurs locaux ne peuvent pas suivre. Les requêtes transactionnelles génériques sont captées par ces plateformes. Un imprimeur local doit miser sur sa proximité et son expertise technique (offset, sérigraphie, finitions spéciales).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vistaprint, Printoclock, Exaprint, Pixartprinting, Helloprint</strong> trustent les premières positions sur les requêtes transactionnelles, et Google Shopping affiche des résultats produits. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un imprimeur local reste invisible et sous-exploite son potentiel sur les requêtes de proximité.',
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
      { keyword: 'imprimerie autour de moi', volume: 17000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'imprimerie à proximité', volume: 5200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'imprimeur', volume: 4400, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'impression en ligne', volume: 2100, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'imprimerie paris', volume: 1900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'imprimerie en ligne', volume: 1500, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'imprimerie bordeaux', volume: 1300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'imprimeur autour de moi', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'imprimeur en ligne', volume: 600, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'imprimeur carte de visite', volume: 250, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 17 000 personnes tapent « imprimerie autour de moi » sur Google, et 5 200 autres cherchent « imprimerie à proximité ». Ce sont des clients prêts à commander : flyers, cartes de visite, affiches, brochures. La majorité clique sur les 3 premiers résultats locaux, ou suit la recommandation d\'un moteur IA. Si votre imprimerie n\'y figure pas, ces commandes partent chez un concurrent ou sur une plateforme en ligne.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les imprimeurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de l\'impression.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages produits et services d\'impression.',
        items: [
          'Structure des pages par type de produit (flyers, affiches, brochures, livres)',
          'Balises schema.org LocalBusiness et ProfessionalService',
          'Performance et Core Web Vitals sur les pages catalogue',
          'Crawl et indexation des fiches produits',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre imprimerie dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'imprimerie',
          'Mesure de la légitimité et citabilité face aux plateformes en ligne',
          'Évaluation de la densité factuelle du contenu (prix, délais, certifications)',
          'Benchmark concurrentiel sur les requêtes IA locales et transactionnelles',
        ],
      },
      {
        title: 'Étude de marché & mots-clés de l\'impression',
        subtitle: 'Cartographie des requêtes par type de produit imprimé et zone géographique. Identification des niches à faible concurrence (impression grand format, sérigraphie, reliure).',
        items: [
          'Combinaisons produit + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur l\'impression',
          'Volumes de recherche réels par spécialité d\'impression',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat : du produit recherché au devis.',
        items: [
          'Page catégorie → page produit → page devis / commande',
          'Requête principale + 3-5 requêtes secondaires par page produit',
          'Optimisation des balises title, meta, Hn pour chaque gamme d\'impression',
        ],
      },
      {
        title: 'Stratégie de contenu pour l\'impression',
        subtitle: 'Création de contenus démontrant l\'expertise technique de l\'imprimeur, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : quel papier choisir, offset vs numérique, préparer un fichier d\'impression',
          'Phrases factuelles auto-suffisantes avec données chiffrées (grammages, formats, délais)',
          'Comparatifs transparents : imprimeur local vs en ligne, offset vs numérique',
        ],
      },
      {
        title: 'Autorité & netlinking sectoriel',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels et les partenariats avec les acteurs du secteur graphique.',
        items: [
          'Annuaires spécialisés : Pages Jaunes, Imprimerie de France, CCI locales',
          'Partenariats avec les chambres des métiers et syndicats professionnels (UNIIC)',
          'Références croisées avec graphistes, agences de communication, organisateurs d\'événements',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « imprimeur + ville » et apparaitre dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Printing Service + catégories secondaires (Copy Shop, Graphic Designer)',
          'Gestion des avis clients et stratégie de collecte ciblée',
          'Photos de l\'atelier, des machines et des réalisations clients',
          'Citations NAP cohérentes sur les annuaires professionnels et locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de produit et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par catégorie de produit d\'impression',
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
        description: 'Diagnostic complet de votre site : architecture des pages produits et services d\'impression, vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre imprimerie dans ChatGPT, Perplexity et Gemini sur vos requ\u00eates impression cibles. Benchmark contre 3 \u00e0 5 concurrents locaux et Score GEO sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage LocalBusiness, Service et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec les types d\'impression couverts (offset, num\u00e9rique, grand format). Livr\u00e9 avec un guide d\'int\u00e9gration pour votre CMS (WordPress, Prestashop ou autre).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages par type d\'impression (offset, num\u00e9rique, grand format), articles packaging et supports print, FAQ. Int\u00e9gration directe sur votre CMS ou par FTP, avec cr\u00e9ation de templates de pages si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires imprimerie, l\'UNIIC, blogs communication print et presse locale. Suivi des liens obtenus et progression du Domain Rating de votre imprimerie.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par cat\u00e9gorie de produit et par ville, trafic organique, demandes de devis g\u00e9n\u00e9r\u00e9es, \u00e9volution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre imprimerie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel imprimeur recommandes-tu à Bordeaux ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre imprimerie n\'apparait dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel imprimeur recommandes-tu à Bordeaux ? » : le LLM ne cite aucun imprimeur par son nom. Il fournit des critères de sélection (proximité, spécialités offset/numérique, avis Google, certifications Imprim\'Vert) et renvoie vers Google Maps ou les annuaires professionnels. Les imprimeurs disposant d\'un site riche en contenu factuel et d\'une fiche GBP complète ont plus de chances d\'être cités dans les futures réponses.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon imprimeur ? » : le LLM génère un guide structuré en 6 à 8 critères (qualité d\'impression, délais, certifications environnementales FSC/PEFC/Imprim\'Vert, capacité technique, rapport qualité-prix, SAV). Aucun nom d\'imprimeur n\'est cité. L\'imprimerie qui publie ce type de contenu sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix impression flyers 1000 exemplaires » : le LLM donne des fourchettes chiffrées (30 à 80 euros pour 1 000 flyers A5, 50 à 120 euros pour A4). Il cite les plateformes en ligne (Vistaprint, Printoclock) car elles publient des prix transparents. Les imprimeurs locaux qui affichent leurs tarifs sur leur site ont une chance d\'apparaitre dans ces réponses.</p><h4>Requêtes locales et Maps</h4><p>Sur « imprimeur autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les imprimeries disposant d\'une fiche Google Business Profile complète (catégorie Printing Service, avis récents, photos de l\'atelier et des réalisations) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les imprimeurs, les types schema.org recommandés sont : <code>LocalBusiness</code> (type principal), <code>ProfessionalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>LocalBusiness</code> avec les sous-types pertinents permet à Google et aux LLM d\'identifier précisément les services proposés, la zone de chalandise et les avis clients de l\'imprimerie.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre imprimerie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur l\'impression), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les imprimeurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'imprimeur ?',
        answer:
          'Le budget SEO pour un imprimeur dépend du nombre de produits à référencer, de la zone géographique ciblée et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les imprimeurs démarrent à 1 200 euros/mois pour une zone locale mono-ville, et peuvent atteindre 3 500 à 5 000 euros/mois pour un imprimeur multi-sites ou visant le marché national face aux plateformes en ligne.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un imprimeur ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« imprimeur sérigraphie Toulouse », « impression grand format Lyon ») sont plus rapides à positionner que les requêtes nationales captées par Vistaprint et Printoclock. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone.',
      },
      {
        question: 'Comment un imprimeur local peut-il concurrencer Vistaprint sur Google ?',
        answer:
          'Un imprimeur local ne doit pas chercher à concurrencer Vistaprint sur les requêtes génériques nationales. Sa force se situe sur les requêtes locales (« imprimerie + ville »), les produits à forte valeur ajoutée (sérigraphie, impression grand format, finitions spéciales) et le conseil personnalisé. Rankwell construit une stratégie qui capitalise sur ces atouts différenciants pour capter les clients à proximité.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une imprimerie ?',
        answer:
          'Un blog est un levier efficace s\'il répond aux vraies questions des clients : comment préparer un fichier d\'impression, quelle différence entre offset et numérique, quel grammage choisir pour des cartes de visite. Ces contenus attirent du trafic qualifié et sont citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant les requêtes informationnelles du secteur de l\'impression.',
      },
      {
        question: 'Comment un imprimeur peut-il apparaitre dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un imprimeur doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels, mentions dans la presse locale, profil Google Business optimisé, contenus riches et factuels sur son site (prix, délais, certifications). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un imprimeur ?',
        answer:
          'Le SEO local cible les requêtes « imprimeur + ville » et « imprimerie à proximité », et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes comme « impression en ligne » ou « imprimeur carte de visite » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la zone de chalandise et les ambitions de l\'imprimeur.',
      },
      {
        question: 'Les plateformes d\'impression en ligne suffisent-elles pour être visible ?',
        answer:
          'Être référencé sur Printoclock ou Exaprint en tant que partenaire ne remplace pas un site propre bien référencé. Ces plateformes créent une dépendance : l\'imprimeur n\'est qu\'un prestataire parmi des centaines, sans contrôle sur son image ni sur les prix affichés. Un site propre permet de contrôler le message, de convertir directement et de construire une autorité durable. Rankwell aide les imprimeurs à bâtir cette présence indépendante grâce à une stratégie de référencement SEO & GEO.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre imprimerie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Prestashop', href: '/agence-geo-seo/cms/prestashop' },
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
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
      { label: 'Traducteur', href: '/agence-geo-seo/secteur/traducteur' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'LocalBusiness',
};

export default data;
