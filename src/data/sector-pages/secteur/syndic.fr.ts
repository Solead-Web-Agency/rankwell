/**
 * DATA : Page Secteur Syndics de copropriété (FR)
 * Route : /agence-geo-seo/secteur/syndic
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'syndic',
    title: 'Agence GEO & SEO pour Syndics - Rankwell',
    description:
      'Rankwell accompagne les syndics de copropriété dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur immobilier.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Syndics de copropriété' },
    ],
    title: 'GEO & SEO Syndic : visibilité Google & moteurs IA',
    subtitle:
      'Les copropriétaires comparent les syndics en ligne avant de voter en assemblée générale. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur de la gestion de copropriété.',
    ctaText: 'Demander un audit GEO & SEO syndic',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les syndics de copropriété',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">68 % des requêtes syndic contiennent un nom de ville ou d\'arrondissement.</strong> Le conseil syndical compare 3 à 5 cabinets sur Google avant de voter en AG. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité dans le Local Pack conditionne l\'obtention du mandat.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La loi ALUR (2014) impose la mise en concurrence des syndics</strong> avant chaque renouvellement de contrat, générant un cycle de prospection récurrent. Carte professionnelle T, obligations comptables spécifiques et contrat-type encadré par décret exigent un contenu technique crédible pour convaincre les conseils syndicaux.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Matera, Cotoit, Homeland et Bellman</strong> captent une part croissante du trafic syndic en ligne, tandis que les fédérations (FNAIM, UNIS, ARC) dominent les résultats informationnels. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un cabinet reste noyé entre plateformes et annuaires.',
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
      { keyword: 'syndic de copropriété', volume: 7000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'syndic copropriété', volume: 900, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'syndic bénévole', volume: 800, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'syndic en ligne', volume: 500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'copropriété sans syndic', volume: 450, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'syndic de copropriété paris', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'syndic paris', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'syndic de copropriété marseille', volume: 200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'syndic de copropriété lille', volume: 200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'syndic de copropriété lyon', volume: 150, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de copropriétaires et de conseils syndicaux recherchent un syndic sur Google, notamment lors des mises en concurrence imposées par la loi ALUR. Les requêtes locales comme « syndic de copropriété Paris » ou « syndic Marseille » traduisent une intention de sélection immédiate. Si votre cabinet n\'apparaît pas dans les 3 premiers résultats, le mandat ira à un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les syndics de copropriété',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la gestion de copropriété.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du cabinet, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation sur les requêtes de syndic.',
        items: [
          'Structure des pages par type de copropriété (résidentielle, commerciale, mixte)',
          'Balises schema.org RealEstateAgent et LocalBusiness',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages de zones de service',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet de syndic',
          'Mesure de la légitimité et citabilité dans les réponses IA',
          'Évaluation de la densité factuelle du contenu (tarifs, procédures, obligations légales)',
          'Benchmark concurrentiel contre Matera, Cotoit et les syndics locaux',
        ],
      },
      {
        title: 'Étude de marché & mots-clés copropriété',
        subtitle: 'Cartographie des requêtes par zone géographique et par type de copropriété. Identification des combinaisons à fort potentiel où la concurrence est faible.',
        items: [
          'Combinaisons syndic + ville et syndic + arrondissement',
          'Requêtes de mise en concurrence et changement de syndic',
          'Analyse des questions posées aux moteurs IA sur la gestion de copropriété',
          'Volumes de recherche réels par zone géographique',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du conseil syndical qui compare les offres.',
        items: [
          'Page zone de service, page offre de gestion, page devis',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Pages dédiées par type de copropriété et par ville',
          'Optimisation des balises title, meta et Hn',
        ],
      },
      {
        title: 'Stratégie de contenu copropriété',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du cabinet en gestion de copropriété, rédigés pour être citables par les LLM.',
        items: [
          'Guides sur le changement de syndic et la mise en concurrence ALUR',
          'FAQ sur les charges, les travaux, les AG et le budget prévisionnel',
          'Phrases factuelles auto-suffisantes avec données chiffrées (tarifs, délais légaux)',
          'Contenus conformes aux obligations réglementaires du secteur',
        ],
      },
      {
        title: 'Autorité & netlinking immobilier',
        subtitle: 'Développement de l\'autorité du cabinet via les annuaires professionnels qualifiés et les publications spécialisées en immobilier.',
        items: [
          'Inscriptions FNAIM, UNIS, Chambre des Syndics de Copropriété',
          'Publications dans la presse immobilière spécialisée',
          'Partenariats avec les sites d\'information copropriété (ARC, CLCV)',
          'Backlinks depuis les plateformes de mise en concurrence',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « syndic + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Property Management Company + catégories secondaires',
          'Gestion des avis copropriétaires et stratégie de collecte post-AG',
          'Photos du cabinet, des copropriétés gérées, horaires d\'accueil',
          'Citations NAP cohérentes sur les annuaires immobiliers et professionnels',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par zone géographique et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par page de zone de service',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et mandats signés',
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
        title: 'Audit technique SEO',
        description: 'Analyse approfondie de l\'architecture de votre site : pages copropriétés, pages services, vitesse de chargement, indexation et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Audit GEO (visibilité IA)',
        description: 'Mesure de la citabilité de votre cabinet dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100 avec benchmark contre vos concurrents locaux.',
      },
      {
        id: 3,
        title: 'Kit schema.org syndic',
        description: 'Balisage structuré RealEstateAgent, Service et FAQPage, prêt à intégrer. Permet à Google et aux moteurs IA d\'identifier vos prestations, votre zone et vos avis.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Rédaction de pages copropriétés, guides assemblée générale et charges, FAQ conformes à la loi ALUR. Livraison au format CMS ou via injection FTP.',
      },
      {
        id: 5,
        title: 'Netlinking immobilier',
        description: 'Acquisition de liens depuis les annuaires FNAIM, UNIS, blogs immobilier et presse spécialisée copropriété pour renforcer l\'autorité de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel : positions Google par mot-clé et par ville, trafic organique, score GEO, demandes de devis et mandats générés.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet de syndic dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un copropriétaire demande à ChatGPT « quel syndic de copropriété recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de mandats.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel syndic de copropriété recommandes-tu à Paris ? » : le LLM ne cite aucun cabinet de syndic précis. Il fournit une liste de 5 a 7 critères de sélection (transparence tarifaire, réactivité, outils numériques, conformité ALUR) et renvoie vers les plateformes Matera, Cotoit, Homeland et les fédérations FNAIM et UNIS.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon syndic ? » ou « syndic professionnel vs syndic bénévole » : le LLM génère un guide structuré en 5 a 7 critères sans citer de cabinet ni de source. Il détaille la distinction entre syndic professionnel (carte T, assurance RC pro, comptabilité séparée) et syndic bénévole (gratuit, élu parmi les copropriétaires). Le syndic coopératif est mentionné comme troisième option.</p><h4>Requêtes tarifaires</h4><p>« Prix syndic de copropriété par lot » : le LLM donne des fourchettes précises, entre 150 et 300 euros HT par lot et par an pour un syndic classique, et 10 a 20 euros par lot et par mois pour les syndics en ligne. Les cabinets publiant des grilles tarifaires claires sur leur site ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « syndic autour de moi pour changer de syndic », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie Property Management Company, avis récents, zone de service définie) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets de syndic, les types schema.org recommandés sont : <code>RealEstateAgent</code> (type principal), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>RealEstateAgent</code> permet à Google et aux LLM d\'identifier précisément la zone de service, les types de copropriétés gérées et les avis clients du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet de syndic par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur la gestion de copropriété), la Légitimité & Citabilité (signaux de confiance externes : FNAIM, UNIS, presse immobilière), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les syndics de copropriété',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de syndic de copropriété ?',
        answer:
          'Le budget SEO pour un cabinet de syndic dépend du nombre de villes ciblées et de la taille du portefeuille visé. Chez Rankwell, les accompagnements SEO pour les syndics démarrent à 1 500 euros/mois pour une zone géographique unique, et peuvent atteindre 4 000 a 6 000 euros/mois pour un cabinet multi-agences couvrant plusieurs métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un syndic ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« syndic de copropriété Lille » ou « syndic Lyon 6 ») sont plus rapides à positionner que les requêtes nationales très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone.',
      },
      {
        question: 'Comment la loi ALUR influence-t-elle le SEO d\'un syndic ?',
        answer:
          'La loi ALUR impose la mise en concurrence des syndics avant chaque renouvellement de contrat. Cette obligation légale crée un cycle de prospection récurrent : chaque année, des milliers de conseils syndicaux recherchent des devis sur Google. Rankwell exploite ce mécanisme en positionnant votre site sur les requêtes de changement et de mise en concurrence, au moment exact où la décision se prend.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un syndic ?',
        answer:
          'Un blog orienté copropriété est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des copropriétaires : procédure de changement de syndic, répartition des charges, obligations en AG, travaux de rénovation énergétique. Rankwell recommande 2 a 4 articles par mois, ciblant des requêtes informationnelles de longue traîne pour démontrer l\'expertise du cabinet.',
      },
      {
        question: 'Comment un syndic peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet de syndic doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels (FNAIM, UNIS), mentions dans la presse immobilière, profil Google Business optimisé, contenus riches et factuels sur son site (grilles tarifaires, procédures légales). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un syndic ?',
        answer:
          'Le SEO local cible les requêtes « syndic + ville » ou « syndic + arrondissement » et s\'appuie sur Google Business Profile, les avis copropriétaires et les citations locales. Le SEO national vise des requêtes génériques comme « meilleur syndic de copropriété » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie de développement du cabinet.',
      },
      {
        question: 'Matera et les syndics en ligne suffisent-ils à rendre un syndic traditionnel invisible ?',
        answer:
          'Les syndics en ligne comme Matera ou Cotoit captent une part croissante du trafic, mais ils ciblent principalement les petites copropriétés sensibles au prix. Un syndic professionnel qui publie du contenu technique de qualité (gestion de sinistres, gros travaux, contentieux) se positionne sur des requêtes que les plateformes ne couvrent pas. Rankwell aide les cabinets à construire cette autorité propre via une stratégie de référencement SEO & GEO qui valorise leur expertise terrain.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet de syndic visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur de la copropriété.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
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
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'RealEstateAgent',
};

export default data;
