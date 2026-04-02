/**
 * DATA FR - Agence GEO & SEO à Angoulême
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Angoulême | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Angoulême. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale de la BD.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Angoulême' },
  ],
  badge: 'angouleme',
  title: 'Agence GEO & SEO à Angoulême',
  description:
    'Propulsez la visibilité en ligne de votre entreprise angoumoisine grâce à notre expertise en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies sur mesure pour le territoire charentais.',
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
  badge: 'Votre expert digital à Angoulême',
  accentColor: 'rw-blue' as const,
  title: 'Des solutions SEO et GEO taillées pour les entreprises d\'Angoulême',
  paragraphs: [
    "Angoulême, cité internationale de la bande dessinée et de l'image, rayonne bien au-delà de ses remparts historiques. Des studios créatifs aux entreprises industrielles, le territoire charentais abrite un tissu économique varié qui mérite une présence digitale à la hauteur de son dynamisme.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, visant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise assure une couverture maximale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs angoumoisins dans leur croissance numérique, en élaborant des stratégies adaptées aux spécificités locales tout en ouvrant de nouveaux horizons commerciaux.",
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
  title: 'GEO & SEO à Angoulême : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché angoumoisin.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Visibilité dans les réponses générées par les assistants IA de nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Positionnement durable sur Google et les moteurs de recherche historiques.',
    },
    {
      icon: 'Target',
      title: 'Focus local',
      description: 'Stratégies calibrées pour le territoire charentais et néo-aquitain.',
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
    'Le GEO bouleverse les règles du référencement. Explorez son fonctionnement et ses bénéfices pour votre entreprise angoumoisine.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Architecture des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google AI Overviews compilent des données issues de multiples sources pour produire des réponses détaillées. Pour un studio d\'animation angoumoisin ou un négociant en cognac, être identifié comme source de référence par ces systèmes devient un avantage concurrentiel déterminant.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et crédibles',
      description:
        'Les modèles de langage privilégient les contenus bien organisés, sourcés et démontrant une expertise vérifiable. Un contenu qui cite des données précises sur votre secteur et structure ses informations de manière claire sera davantage repris par les IA dans leurs réponses.',
    },
    {
      icon: 'Award',
      title: 'Marqueurs de confiance',
      description:
        'Citations dans la presse spécialisée, backlinks depuis des sites institutionnels et mentions cohérentes de votre marque sur le web consolident votre crédibilité aux yeux des moteurs IA. Ce réseau de signaux détermine si l\'IA vous recommande ou recommande un concurrent.',
    },
    {
      icon: 'ChartLine',
      title: 'Suivi de performance',
      description:
        'Des outils spécialisés permettent de traquer vos apparitions dans les réponses générées par les IA, de mesurer votre part de voix par rapport à vos concurrents et d\'ajuster votre stratégie de contenu pour maximiser votre taux de citation.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique angoumoisin',
  text: "L'agglomération du Grand Angoulême rassemble 141 000 habitants et un tissu entrepreneurial dense avec une entreprise pour 12 habitants. Le Pôle Image Magelis génère 124 millions d'euros de chiffre d'affaires direct et emploie 2 500 professionnels dans les industries créatives. Avec 910 entreprises créées en 2024 et 15 écoles supérieures spécialisées accueillant 2 000 étudiants, Angoulême est un territoire où la visibilité digitale conditionne la croissance.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Angoulême',
  subtitle:
    'Notre démarche intègre les particularités du bassin angoumoisin pour déployer des stratégies réellement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Exploration approfondie de votre secteur à Angoulême : cartographie concurrentielle, analyse des requêtes spécifiques au territoire charentais et identification des opportunités inexploitées. On évalue votre visibilité actuelle sur Google et dans les réponses des IA.',
      features: [
        'Audit de visibilité actuelle',
        'Étude de la concurrence locale',
        'Analyse des requêtes locales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Rédaction de contenus qui démontrent votre expertise et sont conçus pour être cités par les moteurs IA. Structure sémantique avancée, données chiffrées sourcées et intégration du vocabulaire métier propre aux industries créatives, au cognac ou à l\'artisanat charentais.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du jargon métier',
        'Mise en valeur du savoir-faire régional',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Paramétrage de votre site pour satisfaire les exigences de performance des moteurs traditionnels et IA : temps de chargement optimisés, balisage Schema.org complet, expérience mobile irréprochable et architecture de site pensée pour faciliter l\'extraction d\'informations par les LLMs.',
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
        'Suivi continu des performances via notre plateforme Rankwell One : positions Google, citations dans les réponses IA, trafic qualifié et conversions. Chaque mois, vous recevez un rapport clair avec les actions réalisées, les résultats obtenus et les prochaines priorités.',
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
  title: 'Est-ce pertinent pour votre entreprise angoumoisine ?',
  subtitle:
    'Notre expertise s\'adresse à des profils variés. Voici les situations où notre accompagnement SEO et GEO fait vraiment la différence.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous cherchez à développer votre acquisition digitale',
      description: 'Votre site existe mais les leads ou les ventes restent insuffisants. Vous avez besoin d\'un partenaire capable de structurer une stratégie Search complète — SEO et GEO — et de l\'exécuter avec rigueur pour générer un retour mesurable.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement de site',
      description: 'Vous lancez un nouveau site ou repensez l\'existant. Intégrer le SEO et le GEO dès la conception évite les corrections coûteuses et vous positionne immédiatement sur les bons canaux de recherche, Google comme IA.',
    },
    {
      label: 'Studios créatifs et acteurs de l\'image à Angoulême',
      description: 'Studios d\'animation, éditeurs de BD, agences créatives du Pôle Magelis : votre savoir-faire mérite une visibilité à la hauteur de votre réputation. Le GEO vous positionne comme référence quand les IA répondent aux questions sur l\'animation ou la bande dessinée.',
    },
    {
      label: 'Entreprises du cognac et de l\'agroalimentaire charentais',
      description: 'Maisons de cognac, producteurs et transformateurs agroalimentaires de Charente : votre marché est international et la recherche en ligne conditionne les décisions d\'achat. Être cité par les IA comme expert de votre domaine accélère votre développement commercial.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats. Rankwell accompagne des entreprises partout en France depuis 2017.',
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
  title: 'Nos services GEO & SEO à Angoulême',
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
      description: 'Optimisation on-site, structure de contenu, performance technique. Les fondations d\'une visibilité durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens pensée pour renforcer votre autorité. Pas de spam, pas de réseaux douteux. De vrais liens qui comptent.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit. Pas du remplissage.',
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
  subtitle: 'Une démarche structurée en quatre étapes pour garantir des résultats concrets et pérennes.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Audit initial',
      description:
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Angoulême et opportunités à exploiter.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte angoumoisin.',
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
    'I have never bought a backlink because people will link for free if you give them something worth linking to.',
  author: 'Bill Slawski',
  role: 'SEO by the Sea (1958–2022)',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Angoulême',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Travaillez-vous avec des entreprises à Angoulême sans être sur place ?',
      answer:
        'Oui, nous accompagnons des entreprises partout en France depuis 2017. La collaboration se fait par visioconférences régulières, un consultant senior dédié joignable directement par email ou téléphone, et un accès à notre plateforme Rankwell One pour suivre vos performances en temps réel. La distance n\'affecte ni la réactivité ni la qualité du travail.',
    },
    {
      question: 'Quelle est la différence entre SEO et GEO ?',
      answer:
        'Le SEO positionne votre site dans les résultats classiques de Google (les liens bleus). Le GEO optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux sont complémentaires : le SEO reste indispensable, mais le GEO capte une part croissante des recherches, notamment chez les publics jeunes et technophiles.',
    },
    {
      question: 'Le GEO est-il pertinent pour les industries créatives d\'Angoulême ?',
      answer:
        'Absolument. Le Pôle Image Magelis emploie 2 500 professionnels et génère 124 millions d\'euros de chiffre d\'affaires. Quand un producteur cherche un studio d\'animation via ChatGPT ou qu\'un éditeur international se renseigne sur les talents angoumoisins, le GEO garantit que votre structure est citée comme référence dans ces réponses.',
    },
    {
      question: 'Quels secteurs accompagnez-vous à Angoulême ?',
      answer:
        'Nous travaillons avec tous les secteurs : studios d\'animation et éditeurs BD, maisons de cognac et agroalimentaire, commerces et artisans, professions libérales, tourisme et hôtellerie. Le point commun de nos clients : des entreprises qui veulent transformer leur visibilité digitale en chiffre d\'affaires, pas simplement accumuler du trafic sans valeur.',
    },
    {
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs apparaissent entre 3 et 6 mois selon votre point de départ et le niveau de concurrence sur vos mots-clés. Le GEO peut produire des effets plus rapides sur certaines requêtes conversationnelles. Nous vous donnons des projections réalistes dès le premier échange, sans promesses intenables.',
    },
    {
      question: 'Comment mesurez-vous la visibilité dans les moteurs IA ?',
      answer:
        'Nous utilisons des outils dédiés qui interrogent régulièrement ChatGPT, Perplexity et d\'autres IA sur des requêtes liées à votre activité. Nous traquons les mentions de votre marque, mesurons votre part de voix par rapport aux concurrents et ajustons la stratégie en fonction des résultats. Tout est visible dans votre tableau de bord Rankwell One.',
    },
    {
      question: 'Quels sont vos tarifs pour une entreprise angoumoisine ?',
      answer:
        'Les tarifs dépendent de vos objectifs, de votre secteur et du niveau de concurrence. Nous proposons des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles comme un audit. Le plus simple : un premier échange de 30 minutes en visio pour comprendre votre situation et vous donner une estimation réaliste et transparente.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Angoulême ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise angoumoisine vers de nouveaux horizons.',
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
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Limoges', href: '/agence-geo-seo/france/limoges' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
