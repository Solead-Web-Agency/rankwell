/**
 * DATA FR - Agence GEO & SEO au Mans
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO au Mans | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO au Mans. Boostez votre visibilité sur les moteurs IA et traditionnels dans la préfecture de la Sarthe.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Le Mans' },
  ],
  badge: 'le-mans',
  title: 'Agence GEO & SEO au Mans',
  description:
    'Propulsez la visibilité en ligne de votre entreprise mancelle avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées à la ville des 24 Heures et de l\'industrie automobile.',
  primaryCta: {
    text: 'Demander un audit gratuit',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Découvrir nos services',
    href: '#services',
  },
};

// ============================================
// INTRO DATA
// ============================================
export const introData = {
  badge: 'Votre partenaire digital au Mans',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises mancelles',
  paragraphs: [
    "Le Mans, préfecture de la Sarthe, est mondialement connue pour ses 24 Heures et son patrimoine médiéval remarquable. Ville industrielle dynamique avec un fort ancrage dans l'automobile et l'assurance, elle offre un tissu économique diversifié.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs manceaux dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
  ],
  tocItems: [
    { id: 'recap', label: 'En bref' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO' },
    { id: 'approche', label: 'Notre approche' },
    { id: 'pour-qui', label: 'Pour qui ?' },
    { id: 'services', label: 'Nos services' },
    { id: 'processus', label: 'Processus' },
    { id: 'comparaison', label: 'SEO vs GEO' },
    { id: 'faq', label: 'FAQ' },
  ],
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'GEO & SEO au Mans : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché manceau.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Présence dans les réponses générées par les assistants IA nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Positionnement solide sur Google et les moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Focus local',
      description: 'Stratégies calibrées pour le bassin économique manceau et sarthois.',
    },
    {
      icon: 'TrendingUp',
      title: 'Impact mesurable',
      description: 'Augmentation tangible du trafic qualifié et des opportunités commerciales.',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  title: 'Le GEO : pourquoi ça change la donne pour les entreprises mancelles',
  subtitle:
    'Le SEO traditionnel cible les 10 liens bleus de Google. Mais une mutation profonde est en marche : les utilisateurs posent de plus en plus leurs questions à des IA conversationnelles.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'GEO (Generative Engine Optimization) désigne l\'optimisation de vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de ranker, mais de devenir la source que l\'IA recommande quand un prospect manceau pose une question.',
    },
    {
      icon: 'FileText',
      title: 'Contenus citation-ready',
      description:
        'Les IA extraient des passages précis pour construire leurs réponses : définitions claires, listes structurées, données chiffrées avec sources. Nous structurons vos contenus pour maximiser ces citations et positionner votre entreprise comme référence dans votre secteur d\'activité.',
    },
    {
      icon: 'Award',
      title: 'Autorité thématique',
      description:
        'Les LLMs évaluent si vous êtes une source légitime sur un sujet donné. Pas juste si vous avez publié un article, mais si l\'ensemble de votre présence digitale démontre une expertise cohérente et vérifiable. Pour une entreprise mancelle, cette autorité se construit méthodiquement.',
    },
    {
      icon: 'ChartLine',
      title: 'Réseau de mentions',
      description:
        'Les IA vérifient votre crédibilité via les mentions sur d\'autres sites : articles de presse locaux et nationaux, annuaires professionnels, forums sectoriels. Le netlinking reste essentiel, mais les signaux de confiance se diversifient avec les moteurs génératifs.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique manceau',
  text: 'Le Mans Métropole est le troisième pôle économique des Pays de la Loire. L\'économie sarthoise s\'articule autour de trois piliers : l\'automobile (Renault, équipementiers), l\'assurance (MMA et le groupe Covéa, 27,7 milliards d\'euros de primes en 2024) et l\'agroalimentaire (groupe LDC). La technopole Le Mans Innovation et le réseau Le Mans Tech, labellisé French Tech, accélèrent les projets de mobilité durable. Les 24 Heures attirent 250 000 spectateurs et une couverture médiatique mondiale chaque année.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée au Mans',
  subtitle:
    'Notre démarche intègre les particularités du marché manceau pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Cartographie complète de votre environnement concurrentiel au Mans : analyse de vos rivaux sur le bassin sarthois, identification des requêtes à fort potentiel de conversion et repérage des opportunités spécifiques à votre secteur d\'activité.',
      features: [
        'Audit de visibilité actuelle',
        'Étude de la concurrence locale',
        'Analyse des requêtes régionales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Rédaction de contenus qui démontrent votre expertise sectorielle, structurés pour performer sur Google et être cités par les moteurs IA. Chaque contenu intègre le vocabulaire métier et les spécificités du marché manceau pour toucher précisément votre audience.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Mise en valeur de l\'expertise locale',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Mise à niveau technique de votre site : temps de chargement, balisage Schema.org, compatibilité mobile et accessibilité. Des fondations solides sont le prérequis pour que les moteurs traditionnels et IA puissent correctement indexer et valoriser vos contenus.',
      features: [
        'Amélioration de la vitesse',
        'Balisage Schema.org',
        'Responsive et UX',
        'Sécurité et conformité',
      ],
    },
    {
      icon: 'BarChart3',
      title: 'Monitoring et amélioration',
      description:
        'Suivi en continu de vos indicateurs clés via Rankwell One : positions Google, fréquence de citations dans les réponses IA, trafic qualifié et taux de conversion. Des ajustements stratégiques réguliers pour maximiser votre retour sur investissement.',
      features: [
        'Reporting mensuel',
        'Suivi des positions SEO et GEO',
        'Analyse des conversions',
        'Recommandations évolutives',
      ],
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour vous ?',
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement vous aider au Mans.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de contacts qualifiés ou de ventes. Vous cherchez un partenaire pour construire une stratégie Search globale, du SEO au GEO, qui transforme votre présence en ligne en véritable canal d\'acquisition commerciale.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque votre SEO',
      description: 'Votre référencement stagne malgré vos efforts et vos investissements. Vous avez besoin d\'un audit objectif et indépendant pour identifier les vrais problèmes, hiérarchiser les priorités et repartir sur des bases solides.',
    },
    {
      label: 'Automobile, équipementiers et industrie sarthoise',
      description: 'Le Mans est un pôle automobile majeur avec Renault et ses sous-traitants. Nous aidons les équipementiers et industriels manceaux à gagner en visibilité auprès de leurs donneurs d\'ordre, y compris dans les réponses des moteurs IA utilisés par les acheteurs professionnels.',
    },
    {
      label: 'Assurance, mutuelle et services financiers du bassin manceau',
      description: 'MMA et le groupe Covéa ont fait du Mans un centre névralgique de l\'assurance française. Courtiers, mutuelles et prestataires de ce secteur peuvent renforcer leur visibilité digitale pour attirer des clients particuliers et professionnels au-delà du territoire sarthois.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence SEO. Ce qui compte, c\'est l\'expertise technique, la méthodologie rigoureuse et les résultats démontrés. Notre collaboration à distance avec les entreprises mancelles est efficace et transparente.',
  ctaButtonText: 'Discuter de votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO au Mans',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On détecte ce qui freine votre visibilité et on priorise les actions à fort impact.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage structuré et performance technique. Les fondations d\'un référencement qui résiste dans la durée.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Une stratégie propre, sans spam ni techniques risquées. Des liens pertinents.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, pensés pour se positionner sur Google et être cités par les moteurs IA. Du contenu qui sert votre business.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// CHIFFRES CLÉS
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      number: 350,
      suffix: '+',
      label: 'Clients accompagnés',
    },
    {
      id: 2,
      icon: 'Calendar',
      number: 8,
      suffix: ' ans',
      label: "D'expertise Search",
    },
    {
      id: 3,
      icon: 'ThumbsUp',
      number: 99,
      suffix: '%',
      label: 'Clients satisfaits',
    },
    {
      id: 4,
      icon: 'Target',
      number: 100,
      suffix: '%',
      label: 'Business centrix',
    },
  ],
};

// ============================================
// PROCESS
// ============================================
export const processData = {
  sectionId: 'processus',
  badge: 'Processus',
  title: 'Notre méthode de travail',
  subtitle: 'Une approche structurée en quatre étapes pour garantir des résultats concrets et pérennes.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Audit initial',
      description:
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale au Mans et opportunités à exploiter.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte manceau.',
    },
    {
      number: 3,
      title: 'Déploiement',
      description:
        'Mise en œuvre des optimisations techniques et éditoriales, création de contenus et renforcement de votre autorité en ligne.',
    },
    {
      number: 4,
      title: 'Suivi et amélioration',
      description:
        'Monitoring régulier des indicateurs clés, ajustements continus et reporting transparent sur les avancées.',
    },
  ],
};

// ============================================
// COMPARAISON SEO vs GEO
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO traditionnel versus GEO',
  subtitle:
    'Appréhendez les différences entre ces deux approches pour comprendre notre stratégie intégrée.',
  accentColor: 'rw-blue' as const,
  columns: ['Dimension', 'SEO classique', 'GEO (IA)'],
  rows: [
    ['Cible', 'Google, Bing', 'ChatGPT, Perplexity, SGE'],
    ['Format résultat', 'Liens bleus', 'Réponses synthétisées'],
    ['Contenu optimal', 'Mots-clés ciblés', 'Contexte et expertise'],
    ['Critères clés', 'Backlinks, technique', 'Autorité, citations'],
    ['Mesure', 'Rankings, CTR', 'Mentions, visibilité IA'],
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'The best marketing doesn\'t feel like marketing.',
  author: 'Ann Handley',
  role: 'Chief Content Officer, MarketingProfs',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO au Mans',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Travaillez-vous avec des entreprises au Mans ?',
      answer: 'Oui, nous accompagnons des entreprises mancelles avec une collaboration à distance structurée et efficace. Visioconférences régulières, consultant senior dédié joignable en direct, accès à Rankwell One pour suivre vos performances en temps réel. La distance n\'est pas un frein quand la méthodologie et les outils sont en place.',
    },
    {
      question: 'Quels secteurs accompagnez-vous au Mans ?',
      answer: 'Nous travaillons avec les secteurs clés de l\'économie mancelle : automobile et équipementiers (un pilier historique du bassin sarthois), assurance et services financiers (MMA, courtiers, mutuelles), agroalimentaire, tourisme événementiel lié aux 24 Heures et acteurs de la mobilité durable portés par Le Mans Tech. Le dénominateur commun : des entreprises qui veulent du business, pas des vanity metrics.',
    },
    {
      question: 'Qu\'est-ce que le GEO et pourquoi est-ce important au Mans ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités quand un prospect pose une question liée à votre expertise. Au Mans, dans un tissu économique dominé par l\'automobile et l\'assurance, être visible dans ces nouvelles réponses IA offre un avantage concurrentiel tangible.',
    },
    {
      question: 'Comment se déroule un accompagnement type ?',
      answer: 'Premier échange en visio de 30 minutes pour comprendre vos enjeux. Audit complet de votre situation digitale : SEO technique, contenu, concurrence locale, GEO-readiness. Puis élaboration d\'une roadmap avec des priorités classées par impact business. Exécution par un consultant senior dédié qui connaît votre dossier, avec des points réguliers et un suivi transparent via Rankwell One.',
    },
    {
      question: 'Le GEO est-il utile pour le secteur de l\'assurance au Mans ?',
      answer: 'Le Mans concentre un écosystème assuranciel majeur autour de MMA et Covéa. Quand un prospect demande à ChatGPT quel courtier ou quelle mutuelle recommander dans la Sarthe, votre entreprise doit figurer dans la réponse. Le GEO structure vos contenus pour maximiser ces citations dans les moteurs IA, en complément du SEO classique qui capte les recherches Google.',
    },
    {
      question: 'Quels sont vos tarifs pour un accompagnement au Mans ?',
      answer: 'Les tarifs dépendent de vos objectifs, de votre secteur et de l\'intensité concurrentielle. Nous proposons des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles (audit SEO, stratégie GEO). Le plus simple : un premier échange pour évaluer votre situation et vous donner une estimation réaliste. Tout est transparent dès le départ, sans surprise.',
    },
    {
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO, les premiers résultats significatifs apparaissent entre 3 et 6 mois selon votre point de départ et la concurrence sur votre marché sarthois. En GEO, l\'intégration dans les réponses IA peut être plus rapide si les contenus sont correctement structurés. Nous fixons des objectifs réalistes dès le démarrage et mesurons la progression chaque mois.',
    },
    {
      question: 'Pourquoi choisir Rankwell plutôt qu\'une agence locale ?',
      answer: 'La proximité géographique ne détermine pas la qualité d\'un accompagnement SEO et GEO. Avec plus de 350 clients accompagnés depuis 2017 et une spécialisation GEO que très peu d\'agences maîtrisent en France, nous apportons un niveau d\'expertise et de méthodologie difficilement trouvable au niveau local. Notre plateforme Rankwell One garantit une transparence totale sur l\'avancement et les résultats.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité au Mans ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise mancelle vers de nouveaux horizons.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (MAILLAGE INTERNE)
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Orléans', href: '/agence-geo-seo/france/orleans' },
  ],
};
