/**
 * DATA FR - Agence GEO & SEO à Angers
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Angers | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Angers. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale de l\'Anjou.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Angers' },
  ],
  badge: 'angers',
  title: 'Agence GEO & SEO à Angers',
  description:
    'Propulsez la visibilité en ligne de votre entreprise angevine avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées à la capitale de l\'Anjou et au Val de Loire.',
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
  badge: 'Votre partenaire digital à Angers',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises angevines',
  paragraphs: [
    "Angers, capitale de l'Anjou et ville d'art et d'histoire, conjugue un patrimoine exceptionnel, un écosystème universitaire dynamique et une économie en pleine croissance. Régulièrement classée parmi les villes les plus agréables à vivre de France, elle attire entreprises et talents.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs angevins dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
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
  title: 'GEO & SEO à Angers : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché angevin.',
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
      description: 'Stratégies calibrées pour le bassin économique angevin et ligérien.',
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
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise angevine.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Architecture des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google AI Overviews agrègent des données provenant de multiples sources pour formuler des réponses complètes et contextualisées. Pour une entreprise angevine, être identifié comme source de référence par ces moteurs est devenu un avantage concurrentiel décisif.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et crédibles',
      description:
        'Les systèmes IA privilégient les contenus rigoureusement organisés, sourcés avec des données vérifiables et démontrant une expertise sectorielle réelle. La qualité sémantique de vos pages conditionne directement votre capacité à être cité dans les réponses génératives.',
    },
    {
      icon: 'Award',
      title: 'Marqueurs de confiance',
      description:
        'Citations dans des médias spécialisés, backlinks depuis des sites institutionnels et mentions régulières de votre marque consolident votre crédibilité aux yeux des moteurs IA. Ce réseau de signaux favorise votre recommandation dans les réponses générées.',
    },
    {
      icon: 'ChartLine',
      title: 'Suivi de performance GEO',
      description:
        'Des outils analytiques spécifiques permettent de monitorer votre présence dans les réponses IA, de mesurer la fréquence de vos citations et d\'ajuster la stratégie en continu. Nous suivons votre visibilité sur ChatGPT, Perplexity et les AI Overviews de Google.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique angevin',
  text: 'Angers Loire Métropole concentre 7 000 emplois et 900 entreprises dans l\'électronique et le numérique, générant 1,3 milliard d\'euros de chiffre d\'affaires. Le pôle de compétitivité Végépolys Valley, premier pôle mondial du végétal avec 700 adhérents, a accompagné plus de 1 300 projets valorisés à 4 milliards d\'euros. Labellisée French Tech et engagée dans le plus grand projet de territoire intelligent de France (127 millions d\'euros), Angers est un écosystème où la visibilité digitale est un levier de croissance incontournable.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Angers',
  subtitle:
    'Notre démarche intègre les particularités du marché angevin pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Exploration approfondie de votre secteur à Angers : analyse de vos concurrents directs sur le bassin angevin, cartographie des opportunités de positionnement et identification des requêtes à fort potentiel de conversion sur votre zone de chalandise.',
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
        'Rédaction de contenus qui démontrent votre expertise sectorielle, structurés pour être à la fois bien positionnés sur Google et facilement cités par les moteurs IA. Chaque contenu intègre le vocabulaire métier et les spécificités du marché angevin.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Mise en valeur du terroir angevin',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Paramétrage de votre site pour atteindre les meilleurs scores de performance : temps de chargement, balisage Schema.org, compatibilité mobile et accessibilité. Des fondations techniques solides sont indispensables pour que les moteurs traditionnels et IA puissent indexer et citer vos contenus.',
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
        'Suivi continu de vos indicateurs clés via Rankwell One : positions Google, citations dans les réponses IA, trafic qualifié et conversions. Des tableaux de bord clairs et des ajustements stratégiques mensuels pour maximiser votre retour sur investissement.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement vous aider à Angers.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de contacts ou de ventes. Vous cherchez un partenaire capable de structurer une stratégie Search complète, du SEO technique au contenu, pour transformer votre présence en ligne en véritable levier commercial.',
    },
    {
      label: 'Vous cherchez une expertise GEO pour anticiper',
      description: 'Vous avez compris que ChatGPT, Perplexity et les AI Overviews de Google modifient les comportements de recherche. Vous voulez une agence qui maîtrise ces nouveaux canaux et sait positionner votre entreprise dans les réponses génératives.',
    },
    {
      label: 'Végétal, horticulture et filière verte angevine',
      description: 'Pépinières, entreprises du pôle Végépolys Valley, acteurs de la filière horticole : Angers est le premier pôle mondial du végétal. Nous aidons ces entreprises à valoriser leur expertise sectorielle en ligne et à être citées par les moteurs IA sur leur domaine.',
    },
    {
      label: 'Électronique, numérique et startups de la French Tech Angers',
      description: 'L\'écosystème angevin du numérique compte 900 entreprises et 7 000 emplois. Éditeurs de logiciels, startups et acteurs de l\'électronique ont besoin d\'une visibilité digitale à la hauteur de leur innovation pour conquérir des marchés au-delà du territoire.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats démontrés. Notre collaboration à distance avec les entreprises angevines est fluide et efficace.',
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
  title: 'Nos services GEO & SEO à Angers',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité et les leviers prioritaires pour l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage Schema.org et performance technique. Les fondations indispensables d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Une stratégie sur mesure, sans spam ni réseaux de liens artificiels.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, conçus pour se positionner sur Google et être cités par les moteurs IA. Du contenu qui convertit.',
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
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Angers et opportunités à exploiter.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte angevin.',
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
  quote: 'SEO is not about tricking Google. It\'s about partnering with Google to provide the best search results for Google\'s users.',
  author: 'Joost de Valk',
  role: 'Fondateur de Yoast SEO',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Angers',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Travaillez-vous avec des entreprises à Angers ?',
      answer: 'Oui, nous accompagnons des entreprises angevines avec une collaboration à distance efficace. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. Pas besoin d\'être dans la même ville pour obtenir des résultats concrets et mesurables.',
    },
    {
      question: 'Quels secteurs accompagnez-vous à Angers ?',
      answer: 'Nous travaillons avec des entreprises de secteurs variés : végétal et horticulture (un pilier de l\'économie angevine avec Végépolys Valley), électronique et numérique (900 entreprises labellisées French Tech), œnotourisme et viticulture en Anjou, services B2B et professions libérales. Le point commun : des entreprises qui veulent générer du business via le Search.',
    },
    {
      question: 'Qu\'est-ce que le GEO et pourquoi est-ce important à Angers ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités quand ces IA répondent à des questions liées à votre expertise. Dans un écosystème compétitif comme Angers, être visible à la fois sur Google et dans les réponses IA donne un avantage décisif.',
    },
    {
      question: 'Comment se déroule un accompagnement type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux spécifiques. Audit complet de votre situation digitale (SEO, GEO-readiness, technique, concurrence locale). Puis une roadmap avec des priorités classées par impact business. Exécution par un consultant senior dédié avec des points réguliers et un suivi en temps réel via Rankwell One.',
    },
    {
      question: 'Les entreprises du pôle végétal ont-elles besoin du SEO et du GEO ?',
      answer: 'Le pôle végétal angevin regroupe 700 adhérents au sein de Végépolys Valley. La concurrence est forte, y compris à l\'international. Le SEO permet de capter les recherches Google des acheteurs professionnels. Le GEO assure que quand un acheteur demande à ChatGPT un fournisseur horticole en France, votre entreprise soit dans la réponse. Les deux sont complémentaires.',
    },
    {
      question: 'Quels sont vos tarifs pour un accompagnement à Angers ?',
      answer: 'Les tarifs dépendent de vos objectifs, de votre secteur et du niveau de concurrence. Nous travaillons sur des forfaits mensuels ou des projets ponctuels (audit, refonte). Le plus simple est un premier échange pour évaluer votre situation et vous donner une estimation réaliste. Pas de surprise : tout est transparent dès le départ.',
    },
    {
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer: 'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et la concurrence sur votre marché. En GEO, l\'intégration dans les réponses IA peut être plus rapide avec des contenus bien structurés. Nous fixons des objectifs réalistes dès le démarrage et mesurons la progression chaque mois.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Angers ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise angevine vers de nouveaux horizons.',
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
    { label: 'Le Mans', href: '/agence-geo-seo/france/le-mans' },
    { label: 'Saumur', href: '/agence-geo-seo/france/saumur' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
