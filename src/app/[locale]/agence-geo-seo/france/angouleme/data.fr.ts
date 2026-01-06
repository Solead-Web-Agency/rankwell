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
        'ChatGPT, Perplexity et Google SGE agrègent des données multiples pour produire des réponses exhaustives. Être reconnu comme source de référence devient stratégique.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et crédibles',
      description:
        'Les systèmes IA privilégient les contenus organisés, sourcés et démontrant une expertise réelle. La sémantique influe directement sur votre visibilité.',
    },
    {
      icon: 'Award',
      title: 'Marqueurs de confiance',
      description:
        'Citations, backlinks pertinents et mentions de marque consolident votre crédibilité aux yeux des moteurs IA, favorisant votre recommandation.',
    },
    {
      icon: 'ChartLine',
      title: 'Suivi de performance',
      description:
        'Des solutions analytiques permettent de monitorer votre présence dans les réponses IA et d\'affiner la stratégie selon les résultats.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Le Festival International de la Bande Dessinée d'Angoulême attire chaque année plus de 200 000 visiteurs, faisant de la ville un pôle majeur des industries créatives en France et un territoire où la visibilité digitale est cruciale.",
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
        'Exploration approfondie de votre secteur à Angoulême, mapping concurrentiel et identification des opportunités propres au territoire charentais.',
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
        'Rédaction de contenus qui affirment votre expertise, optimisés pour le SEO comme pour les critères des moteurs IA.',
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
        'Paramétrage de votre site pour répondre aux exigences de performance et d\'accessibilité des moteurs traditionnels et IA.',
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
        'Suivi continu des performances avec tableaux de bord clairs et ajustements stratégiques pour maximiser le retour sur investissement.',
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
  title: 'Les entreprises angoumoisines que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises du territoire charentais.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'PME et acteurs créatifs',
      description:
        'Studios d\'animation, éditeurs, agences créatives et entreprises locales souhaitant amplifier leur rayonnement digital.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerces et e-commerçants',
      description:
        'Boutiques, enseignes locales et sites marchands désireux de capter une clientèle élargie via les moteurs de recherche.',
    },
    {
      icon: 'Briefcase',
      title: 'Professions libérales',
      description:
        'Avocats, médecins, consultants et experts-comptables cherchant à renforcer leur visibilité auprès des Charentais.',
    },
    {
      icon: 'Globe',
      title: 'Acteurs du tourisme',
      description:
        'Hôteliers, restaurateurs et prestataires touristiques voulant attirer visiteurs et congressistes en Charente.',
    },
  ],
  ctaTitle: 'Votre activité se reconnaît dans ces profils ?',
  ctaDescription:
    'Échangez avec notre équipe pour découvrir comment nous pouvons développer votre présence digitale à Angoulême et au-delà.',
  ctaButtonText: 'Contacter un expert',
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
      value: '40',
      suffix: '%',
      label: 'Des recherches passent par des IA en 2025',
    },
    {
      value: '3',
      suffix: 'x',
      label: 'Plus de trafic grâce à la synergie SEO + GEO',
    },
    {
      value: '110',
      suffix: 'k',
      label: "Habitants dans l'agglomération d'Angoulême",
    },
    {
      value: '95',
      suffix: '%',
      label: 'De clients satisfaits de nos accompagnements',
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
    'L\'essor des moteurs IA redéfinit les parcours de recherche des utilisateurs. S\'y préparer aujourd\'hui, c\'est assurer la compétitivité de son entreprise pour les années à venir.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
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
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs classiques (Google, Bing). Le GEO cible les moteurs IA (ChatGPT, Perplexity) qui formulent des réponses synthétiques. Ces deux disciplines sont complémentaires.',
    },
    {
      question: 'Pourquoi une entreprise d\'Angoulême doit-elle s\'intéresser au GEO ?',
      answer:
        'Les utilisateurs recourent de plus en plus aux assistants IA pour leurs recherches. Être présent dans ces réponses permet d\'atteindre de nouveaux prospects et de conforter votre image d\'expert.',
    },
    {
      question: 'Quels résultats peut-on espérer et sous quel délai ?',
      answer:
        'Les premiers effets SEO sont généralement visibles sous 3 à 6 mois. Pour le GEO, l\'intégration dans les réponses IA peut être plus rapide selon la qualité du contenu. Nous fixons des objectifs réalistes dès le départ.',
    },
    {
      question: 'Comment évaluez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui analysent les réponses générées par les différentes IA pour repérer les mentions de votre marque et suivre leur évolution.',
    },
    {
      question: 'Faut-il privilégier le SEO ou le GEO pour une PME angoumoisine ?',
      answer:
        'Nous préconisons une approche combinée. Le SEO assure un socle solide sur les moteurs traditionnels, tandis que le GEO anticipe votre visibilité sur les plateformes IA en plein essor.',
    },
    {
      question: 'Offrez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous proposons des sessions de formation pour aider vos équipes à maîtriser les enjeux du GEO et à produire des contenus optimisés pour les moteurs IA.',
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
