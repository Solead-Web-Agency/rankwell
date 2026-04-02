/**
 * DATA : Page Secteur Paysagistes (FR)
 * Route : /agence-geo-seo/secteur/paysagiste
 *
 * Mots-cles Ahrefs (mars 2026), marche FR
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'paysagiste',
    title: 'Agence GEO & SEO pour Paysagistes - Rankwell',
    description:
      'Rankwell accompagne les paysagistes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du paysagisme.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Paysagistes' },
    ],
    title: 'GEO & SEO Paysagiste : visibilité Google & moteurs IA',
    subtitle:
      'Création de jardins, aménagement extérieur, entretien paysager : vos futurs clients cherchent un paysagiste sur Google et dans les réponses IA. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au métier de paysagiste.',
    ctaText: 'Demander un audit GEO & SEO paysagiste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les paysagistes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">82 % des requêtes « paysagiste » sont géolocalisées ou contiennent « autour de moi »</strong> (3 700 recherches/mois). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le client cherche un professionnel capable d\'intervenir sur son terrain. La décision repose sur le portfolio, les avis Google et la proximité.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La certification Qualipaysage et l\'inscription au registre des métiers sont des signaux de confiance décisifs</strong> pour Google et les moteurs IA. Un site sans décennale affichée (obligatoire pour les travaux de création), certifications ni photos avant/après sera déclassé. La maçonnerie paysagère, le terrassement et les plantations structurantes relèvent de la garantie décennale.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Houzz, PagesJaunes, Allovoisins et Daniel Moquet</strong> (1 600 recherches/mois) captent les requêtes d\'aménagement extérieur grâce à un maillage de pages locales massif. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur paysager, un paysagiste indépendant reste invisible face à ces acteurs.',
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
      { keyword: 'paysagiste', volume: 16000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'paysagiste autour de moi', volume: 3700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'jardinier paysagiste', volume: 2300, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'architecte paysagiste', volume: 2300, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'entreprise paysagiste', volume: 1000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'idee jardin paysagiste', volume: 800, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'entreprise paysagiste autour de moi', volume: 800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'paysagiste nantes', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'devis paysagiste', volume: 450, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'paysagiste bordeaux', volume: 450, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, 16 000 recherches portent sur « paysagiste » en France, dont une majorité de requêtes géolocalisées (« paysagiste autour de moi », « paysagiste nantes », « paysagiste bordeaux »). Ces internautes cherchent un professionnel pour un aménagement de jardin, une création paysagère ou un entretien régulier. Ils cliquent sur les 3 premiers résultats du pack local ou suivent la recommandation d\'un moteur IA. Si votre entreprise de paysagisme n\'y figure pas, ces clients contactent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les paysagistes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur du paysagisme et de l\'aménagement extérieur.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site de paysagiste.',
        items: [
          'Structure des pages par type de prestation (création de jardin, entretien, maçonnerie paysagère, terrasse)',
          'Balises schema.org LandscapingBusiness',
          'Performance et Core Web Vitals (poids des images de réalisations)',
          'Crawl et indexation des galeries photos',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise de paysagisme dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du paysagiste',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés paysagisme',
        subtitle: 'Cartographie des requêtes par type de prestation paysagère et zone géographique. Identification des combinaisons « prestation + ville » à faible concurrence.',
        items: [
          'Combinaisons création jardin/terrasse/clôture + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA (« quel paysagiste recommandes-tu ? »)',
          'Volumes de recherche réels par type d\'aménagement extérieur',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'un propriétaire en recherche de paysagiste.',
        items: [
          'Page prestation → page réalisations par type → page devis/contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu paysagisme',
        subtitle: 'Création de contenus visuels et techniques démontrant le savoir-faire du paysagiste, rédigés pour être citables par les LLM.',
        items: [
          'Galeries avant/après avec descriptions détaillées (surface, essences plantées, budget)',
          'Guides pratiques : « comment aménager un jardin de 200 m² », « quelle haie choisir »',
          'FAQ répondant aux PAA Google sur les prestations courantes',
        ],
      },
      {
        title: 'Autorité & netlinking paysagiste',
        subtitle: 'Développement de l\'autorité via les annuaires qualifiés du paysagisme et les plateformes de mise en relation.',
        items: [
          'Qualipaysage, UNEP (Union Nationale des Entreprises du Paysage)',
          'Annuaires spécialisés : Houzz, PagesJaunes, Travaux.com',
          'Inscriptions sur les répertoires institutionnels (CMA, Chambre des Métiers)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « paysagiste + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Landscaper + catégories secondaires (Landscape Designer, Garden Center)',
          'Photos de réalisations avant/après, horaires, zone d\'intervention et posts saisonniers',
          'Gestion des avis clients et stratégie de collecte post-chantier',
          'Citations NAP cohérentes sur les annuaires paysagistes et du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type de prestation paysagère',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et appels entrants',
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
        description: 'Diagnostic complet de votre site : pages de r\u00e9alisations et prestations jardin, vitesse de chargement, indexation locale et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates paysagiste aupr\u00e8s des moteurs IA, benchmark de vos concurrents locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage LandscapingBusiness, Service et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos zones d\'intervention et vos types de prestations paysag\u00e8res.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages cr\u00e9ations paysag\u00e8res, articles entretien jardin et conseils saisonniers, FAQ devis, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis Houzz, blogs jardin et presse habitat. Suivi du Domain Rating et de la progression.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation et par zone, trafic organique, demandes de devis attribu\u00e9es au SEO, \u00e9volution du Score GEO et recommandations pour la p\u00e9riode suivante.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de paysagisme dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel paysagiste recommandes-tu à Nantes ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise de paysagisme n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Aucun paysagiste cité par nom</h4>' +
      '<p>Sur « quel paysagiste recommandes-tu à Nantes ? », le LLM ne cite aucun professionnel par nom. Il fournit une liste de 5 à 7 critères de sélection (certification Qualipaysage, portfolio de réalisations, avis clients, assurance décennale, devis comparatifs) et renvoie vers PagesJaunes, Houzz et les annuaires locaux. Seules les franchises à forte notoriété nationale comme Daniel Moquet apparaissent occasionnellement.</p>' +
      '<h4>Guides de sélection structurés</h4>' +
      '<p>Sur « comment choisir un bon paysagiste ? », le LLM génère un guide en 6 à 8 critères : vérifier les qualifications (BTSa aménagements paysagers, certification Qualipaysage), demander un portfolio avant/après, comparer 3 devis détaillés, vérifier l\'assurance décennale et la RC Pro. Aucune source externe citée. Le paysagiste qui publie ce type de contenu structuré sur son site devient une source citable.</p>' +
      '<h4>Fourchettes de prix détaillées</h4>' +
      '<p>Sur « prix aménagement jardin paysagiste », le LLM fournit des fourchettes précises : 50 à 150 euros/m² pour un aménagement complet, 500 à 2 500 euros pour une terrasse, 500 à 2 000 euros pour un plan paysager seul. Les sites qui publient des grilles tarifaires actualisées par type de prestation ont le plus de chances d\'être extraits comme source.</p>' +
      '<h4>Requêtes locales et Maps</h4>' +
      '<p>Sur « paysagiste autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les entreprises de paysagisme disposant d\'une fiche Google Business Profile complète (catégorie Landscaper, photos de réalisations avant/après, avis récents avec note supérieure à 4,2) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les paysagistes, les types schema.org recommandés sont : <code>LandscapingBusiness</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>LandscapingBusiness</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées (création, entretien, maçonnerie paysagère), la zone d\'intervention et les avis clients de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de paysagisme par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus techniques et visuels), la Légitimité & Citabilité (signaux de confiance externes : Qualipaysage, UNEP, avis, mentions), et la Densité Factuelle (richesse des données structurées et des entités nommées liées à vos prestations).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les paysagistes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de paysagiste ?',
        answer:
          'Le budget SEO pour un paysagiste dépend de la zone géographique ciblée et du nombre de prestations à positionner (création de jardin, entretien, terrasse, clôture). Chez Rankwell, les accompagnements SEO pour les paysagistes démarrent à 800 euros/mois pour une ville et un type de prestation, et peuvent atteindre 2 500 à 4 000 euros/mois pour une couverture multi-villes ou un catalogue de prestations étendu.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un paysagiste ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (ex : « paysagiste terrasse bois Nantes ») sont plus rapides à positionner que les requêtes génériques très concurrentielles comme « paysagiste autour de moi ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone d\'intervention.',
      },
      {
        question: 'La certification Qualipaysage aide-t-elle le référencement ?',
        answer:
          'Oui, la certification Qualipaysage délivrée par l\'UNEP est un signal E-E-A-T fort pour Google. Elle prouve une expertise vérifiable et un engagement qualité reconnu par la profession. Afficher cette certification de manière structurée sur votre site, avec le numéro de certificat et la date de validité, renforce la confiance de Google et des moteurs IA. Rankwell intègre systématiquement ces éléments dans la stratégie de contenu et le balisage schema.org des sites de paysagistes.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de paysagiste ?',
        answer:
          'Un blog orienté conseil est un levier puissant pour un paysagiste s\'il est accompagné d\'un contenu visuel de qualité. Les articles doivent répondre à des questions concrètes (« quelle haie persistante choisir pour un jardin de ville », « comment aménager un petit jardin de 50 m² ») et intégrer des photos avant/après de vos réalisations. Rankwell recommande 2 à 3 articles par mois ciblant des requêtes informationnelles liées à l\'aménagement extérieur.',
      },
      {
        question: 'Comment un paysagiste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un paysagiste doit accumuler des signaux de notoriété sur le web : présence sur Houzz, PagesJaunes et les annuaires du bâtiment, avis Google récents et détaillés avec photos de réalisations, profil Google Business Profile optimisé avec catégorie Landscaper, contenus techniques riches et galeries avant/après sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un paysagiste ?',
        answer:
          'Le SEO local cible les requêtes « paysagiste + ville » ou « paysagiste autour de moi » et s\'appuie sur Google Business Profile, les avis clients post-chantier et les citations sur les annuaires professionnels. Le SEO national vise des requêtes génériques (« prix aménagement jardin », « idée jardin paysagiste ») et nécessite du contenu éducatif riche en visuels. Rankwell combine les deux approches selon la couverture géographique du paysagiste.',
      },
      {
        question: 'Les plateformes comme Houzz ou Allovoisins suffisent-elles pour être visible ?',
        answer:
          'Les plateformes de mise en relation comme Houzz, Allovoisins ou Travaux.com apportent de la visibilité initiale, mais elles créent une dépendance : le paysagiste n\'est qu\'un profil parmi des centaines, sans contrôle sur son image ni sur les leads générés. Un site de paysagiste bien référencé permet de recevoir des demandes de devis directes, de présenter son portfolio en détail et de bâtir une réputation durable. Rankwell aide les paysagistes à construire cette visibilité indépendante grâce à une stratégie de référencement SEO & GEO qui ne dépend d\'aucune plateforme tierce.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de paysagisme visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur du paysagisme.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
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
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Carreleur', href: '/agence-geo-seo/secteur/carreleur' },
      { label: 'Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Diagnostiqueur', href: '/agence-geo-seo/secteur/diagnostiqueur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'LandscapingBusiness',
};

export default data;
