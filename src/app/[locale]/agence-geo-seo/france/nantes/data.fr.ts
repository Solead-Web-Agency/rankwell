/**
 * DATA FR - Agence GEO & SEO à Nantes
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Nantes | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Nantes. Boostez votre visibilité sur les moteurs IA et traditionnels dans la métropole nantaise.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Nantes' },
  ],
  badge: 'nantes',
  title: 'Agence GEO & SEO à Nantes',
  description:
    'Propulsez la visibilité en ligne de votre entreprise nantaise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées à la métropole la plus dynamique de l\'Ouest.',
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
  badge: 'Votre partenaire digital à Nantes',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises nantaises',
  paragraphs: [
    "Nantes s'impose comme l'une des métropoles les plus attractives de France, conjuguant dynamisme économique, innovation et qualité de vie exceptionnelle. Capitale de la région Pays de la Loire, elle attire entrepreneurs, startups et grands groupes séduits par son écosystème créatif.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs nantais dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
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
  title: 'GEO & SEO à Nantes : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché nantais.',
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
      title: 'Focus métropole',
      description: 'Stratégies calibrées pour le bassin économique nantais et ligérien.',
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
  title: 'Décryptage de l\'optimisation pour les moteurs IA',
  subtitle:
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise nantaise.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'ensemble des techniques permettant à vos contenus d\'être sélectionnés et cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de ranker, mais de devenir la source que l\'IA recommande spontanément à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les moteurs IA cherchent des passages extractibles et reformulables : définitions précises, listes structurées, données chiffrées sourcées. Nous retravaillons vos contenus pour qu\'ils présentent ces caractéristiques et maximisent vos chances d\'être cités dans les réponses générées automatiquement.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet donné. Cela dépasse le simple article publié : c\'est l\'ensemble de votre empreinte digitale — site, profils, publications — qui doit démontrer une expertise cohérente et approfondie sur votre domaine d\'activité.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les moteurs IA vérifient votre crédibilité en analysant les mentions sur des sites tiers : articles de presse, études sectorielles, forums spécialisés, annuaires professionnels. Le netlinking reste déterminant, mais selon des critères de pertinence et de confiance différents du SEO classique.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Nantes est régulièrement classée parmi les villes où il fait bon travailler en France. Sa métropole de 660 000 habitants concentre un écosystème tech et créatif dynamique avec la French Tech Nantes, des événements comme le Web2Day et plus de 300 startups actives.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Nantes',
  subtitle:
    'Notre démarche intègre les particularités du marché nantais pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans potentiel commercial ne sert à rien. Notre métrique principale, c\'est l\'impact réel sur votre activité nantaise : leads générés, ventes attribuées au Search, coût d\'acquisition maîtrisé.',
      features: [
        'Audit de visibilité actuelle',
        'Étude de la concurrence locale',
        'Analyse des requêtes métropolitaines',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle inclut de vous alerter quand une direction n\'est pas la bonne. Un prestataire qui acquiesce à tout ne produit pas de résultats durables.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Mise en valeur de l\'innovation nantaise',
      ],
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est celle qui l\'exécute. Pas d\'intermédiaire ni de sous-traitance. Vous disposez d\'un interlocuteur unique qui maîtrise votre dossier et le contexte du marché nantais.',
      features: [
        'Amélioration de la vitesse',
        'Balisage Schema.org',
        'Responsive et UX',
        'Sécurité et conformité',
      ],
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Vous visualisez l\'impact réel en temps réel, pas des vanity metrics dans un PDF mensuel. Chaque euro investi est traçable.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement faire la différence.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de leads ou de ventes. Vous cherchez un partenaire capable de structurer et piloter une stratégie Search performante adaptée au marché nantais.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et souhaitez intégrer le SEO et le GEO dès la conception. Optimiser en amont évite les corrections coûteuses et les pertes de trafic post-migration.',
    },
    {
      label: 'Numérique et startups',
      description: 'Nantes est la 3e métropole numérique de France : plus de 300 startups, un label French Tech dynamique et 133 M\u20AC levés en 2024. Un écosystème où la visibilité IA devient un avantage concurrentiel décisif.',
    },
    {
      label: 'Industrie et agroalimentaire',
      description: 'Capgemini, LU/Belin, construction navale : le tissu industriel nantais est dense et diversifié. Les décideurs B2B utilisent de plus en plus les moteurs IA pour sourcer leurs fournisseurs et prestataires.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes dépassées. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats mesurables.',
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
  title: 'Nos services GEO & SEO à Nantes',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. Nous identifions ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure du site, balisage et performance. Les fondations d\'un référencement solide.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens de qualité pour renforcer votre autorité. Une stratégie sur-mesure adaptée à votre secteur.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO qui positionnent votre expertise et attirent votre audience cible.',
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
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Nantes et opportunités à exploiter.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte nantais.',
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
  quote:
    'Content is the reason search began in the first place.',
  author: 'Lee Odden',
  role: 'CEO TopRank Marketing',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Nantes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs classiques comme Google et Bing. Le GEO cible les moteurs IA (ChatGPT, Perplexity, AI Overviews) qui formulent des réponses synthétiques en citant leurs sources. Les deux disciplines sont complémentaires : le SEO assure votre socle de visibilité, le GEO prépare votre présence sur les canaux émergents.',
    },
    {
      id: '2',
      question: 'Pourquoi une entreprise nantaise doit-elle s\'intéresser au GEO ?',
      answer:
        'Nantes concentre un écosystème numérique parmi les plus actifs de France, avec des utilisateurs particulièrement en avance sur l\'adoption des outils IA. Les décideurs locaux interrogent de plus en plus ChatGPT ou Perplexity pour sourcer des prestataires. Ne pas y figurer, c\'est laisser le champ libre à vos concurrents sur un canal en pleine croissance.',
    },
    {
      id: '3',
      question: 'Quels résultats peut-on espérer et sous quel délai ?',
      answer:
        'Les premiers effets SEO sont généralement visibles sous 3 à 6 mois selon la concurrence sectorielle. Pour le GEO, l\'apparition dans les réponses IA peut être plus rapide si vos contenus sont déjà bien structurés et sourcés. Nous définissons des KPIs réalistes dès le lancement et mesurons chaque mois l\'évolution des leads, du trafic et des citations IA.',
    },
    {
      id: '4',
      question: 'Comment évaluez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui interrogent régulièrement les principaux LLMs sur vos requêtes stratégiques et analysent les réponses générées. Cela permet de repérer les mentions de votre marque, de suivre leur fréquence dans le temps et d\'identifier les contenus concurrents qui captent les citations à votre place.',
    },
    {
      id: '5',
      question: 'Travaillez-vous avec les startups nantaises ?',
      answer:
        'Absolument. L\'écosystème French Tech Nantes est l\'un des plus dynamiques de France, avec plus de 300 startups actives. Nous accompagnons startups et scale-ups dans leur stratégie de visibilité Search, en adaptant nos méthodes à leurs contraintes de croissance rapide et à leurs cycles de levée de fonds.',
    },
    {
      id: '6',
      question: 'Proposez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous dispensons des formations pratiques pour aider vos équipes à comprendre les mécanismes du GEO, à identifier les opportunités propres à votre secteur et à produire des contenus optimisés pour les moteurs IA. Ces sessions combinent théorie et exercices appliqués à vos problématiques métier réelles.',
    },
    {
      id: '7',
      question: 'L\'écosystème tech nantais influence-t-il votre stratégie ?',
      answer:
        'Directement. Nantes est la 3e métropole numérique française, portée par le Web2Day, la Cantine Numérique et des pôles comme Atlanpole. Cette maturité digitale implique une concurrence accrue en ligne. Nous en tenons compte dans le calibrage des mots-clés, la construction de l\'autorité thématique et le ciblage des requêtes conversationnelles propres à ce bassin tech.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Nantes ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise nantaise vers de nouveaux horizons.',
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
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Le Mans', href: '/agence-geo-seo/france/le-mans' },
    { label: 'La Baule', href: '/agence-geo-seo/france/la-baule' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
  ],
};
