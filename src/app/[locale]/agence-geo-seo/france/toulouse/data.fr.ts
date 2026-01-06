/**
 * DATA FR - Agence GEO & SEO à Toulouse
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Toulouse | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO à Toulouse. Optimisez votre visibilité sur les moteurs IA et traditionnels dans la Ville Rose.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Toulouse' },
  ],
  badge: 'toulouse',
  title: 'Agence GEO & SEO à Toulouse',
  description:
    'Propulsez la visibilité digitale de votre entreprise toulousaine avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des solutions taillées pour la capitale aéronautique européenne.',
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
  badge: 'Votre partenaire digital à Toulouse',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises toulousaines',
  paragraphs: [
    "Toulouse, la Ville Rose, rayonne bien au-delà de ses célèbres façades de brique. Capitale européenne de l'aéronautique avec Airbus, pôle spatial d'envergure mondiale et vivier de startups innovantes, la métropole occitane incarne le dynamisme économique du Sud-Ouest.",
    "Le GEO (Generative Engine Optimization) constitue le nouveau paradigme du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double maîtrise garantit une présence optimale sur tous les canaux de recherche.",
    "Notre agence accompagne les entreprises toulousaines dans leur expansion numérique, en déployant des stratégies personnalisées qui valorisent leur expertise tout en captant de nouvelles opportunités commerciales.",
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
  title: 'GEO & SEO à Toulouse : les points essentiels',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché toulousain.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Positionnement dans les réponses générées par les assistants IA nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Consolidation des positions sur Google et les moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Ancrage local',
      description: 'Stratégies calibrées pour le bassin économique toulousain et sa région.',
    },
    {
      icon: 'TrendingUp',
      title: 'Résultats tangibles',
      description: 'Augmentation mesurable du trafic qualifié et des opportunités commerciales.',
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
  title: 'L\'optimisation pour les moteurs IA décryptée',
  subtitle:
    'Le GEO redéfinit les codes du référencement. Découvrez son fonctionnement et ce qu\'il peut apporter à votre entreprise toulousaine.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google SGE agrègent des informations de multiples sources pour formuler des réponses complètes. Être reconnu comme source fiable devient stratégique.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et experts',
      description:
        'Les systèmes IA privilégient les contenus bien organisés, sourcés et démontrant une expertise réelle. La structuration sémantique conditionne votre visibilité.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance',
      description:
        'Citations, backlinks pertinents et mentions de marque renforcent la crédibilité perçue par les moteurs IA, augmentant vos chances d\'être recommandé.',
    },
    {
      icon: 'ChartLine',
      title: 'Mesure de performance',
      description:
        'Des outils spécialisés permettent de suivre votre présence dans les réponses IA et d\'ajuster la stratégie selon les résultats obtenus.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Toulouse est la 4e ville de France et la métropole la plus dynamique du pays en termes de croissance démographique. Avec plus de 120 000 emplois dans l'aéronautique et le spatial, c'est un carrefour économique majeur où la visibilité digitale est déterminante.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour Toulouse',
  subtitle:
    'Notre démarche intègre les particularités du marché toulousain pour déployer des stratégies véritablement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Analyse approfondie de votre secteur à Toulouse, cartographie concurrentielle et identification des opportunités spécifiques à la métropole.',
      features: [
        'Audit de présence digitale',
        'Étude de la concurrence locale',
        'Analyse des recherches régionales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Création de contenus qui établissent votre expertise, optimisés pour le SEO comme pour les critères des moteurs IA.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Valorisation des savoir-faire locaux',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Paramétrage de votre site pour satisfaire les exigences de performance et d\'accessibilité des moteurs traditionnels et IA.',
      features: [
        'Amélioration de la vitesse',
        'Balisage Schema.org',
        'Responsive et expérience utilisateur',
        'Sécurité et conformité',
      ],
    },
    {
      icon: 'BarChart3',
      title: 'Pilotage et amélioration continue',
      description:
        'Suivi régulier des performances avec tableaux de bord détaillés et ajustements stratégiques pour maximiser les résultats.',
      features: [
        'Reporting mensuel personnalisé',
        'Suivi des positions SEO et GEO',
        'Analyse des conversions',
        'Recommandations d\'évolution',
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
  title: 'Les entreprises toulousaines que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises de la métropole toulousaine.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'PME et sous-traitants industriels',
      description:
        'Acteurs de l\'aéronautique, du spatial et de leurs chaînes de sous-traitance cherchant à développer leur visibilité digitale.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerces et e-commerçants',
      description:
        'Boutiques, enseignes locales et sites marchands souhaitant capter une clientèle plus large via les moteurs de recherche.',
    },
    {
      icon: 'Briefcase',
      title: 'Professions libérales',
      description:
        'Avocats, médecins, consultants et experts-comptables désireux de renforcer leur présence auprès des Toulousains.',
    },
    {
      icon: 'Globe',
      title: 'Acteurs du tourisme',
      description:
        'Hôteliers, restaurateurs et prestataires touristiques voulant attirer visiteurs et congressistes dans la Ville Rose.',
    },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription:
    'Échangez avec notre équipe pour découvrir comment nous pouvons développer votre visibilité digitale à Toulouse et au-delà.',
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
  title: 'Nos services GEO & SEO à Toulouse',
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
      value: '1.4',
      suffix: 'M',
      label: "D'habitants dans la métropole toulousaine",
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
  subtitle: 'Une approche structurée en quatre phases pour garantir des résultats concrets et durables.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Audit initial',
      description:
        'Analyse complète de votre situation actuelle : présence web, positionnement, concurrence locale à Toulouse et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Élaboration de la stratégie',
      description:
        'Construction d\'un plan d\'action sur mesure combinant SEO et GEO, adapté à vos objectifs et au contexte toulousain.',
    },
    {
      number: 3,
      title: 'Mise en œuvre',
      description:
        'Déploiement des optimisations techniques et éditoriales, création de contenus et développement de votre autorité en ligne.',
    },
    {
      number: 4,
      title: 'Suivi et amélioration',
      description:
        'Monitoring permanent des indicateurs de performance, ajustements réguliers et reporting transparent sur les avancées.',
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
    'Comprenez les spécificités de chaque approche pour mieux appréhender notre stratégie combinée.',
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
    'Les moteurs IA redéfinissent la manière dont les internautes accèdent à l\'information. Anticiper cette transformation, c\'est offrir à son entreprise un avantage compétitif décisif.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Toulouse',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs classiques (Google, Bing). Le GEO cible les moteurs IA (ChatGPT, Perplexity) qui génèrent des réponses synthétiques. Les deux disciplines sont complémentaires.',
    },
    {
      question: 'Pourquoi une entreprise toulousaine doit-elle s\'intéresser au GEO ?',
      answer:
        'Les utilisateurs recourent de plus en plus aux assistants IA pour leurs recherches. Être présent dans ces réponses permet d\'atteindre de nouveaux prospects et de renforcer votre image d\'expert sur votre marché.',
    },
    {
      question: 'Quels résultats peut-on attendre et sous quel délai ?',
      answer:
        'Les premiers effets SEO apparaissent généralement sous 3 à 6 mois. Pour le GEO, l\'intégration dans les réponses IA peut être plus rapide selon la qualité du contenu. Nous fixons des objectifs réalistes dès le départ.',
    },
    {
      question: 'Comment mesurez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui analysent les réponses générées par les différentes IA pour repérer les mentions de votre marque et suivre leur évolution.',
    },
    {
      question: 'Faut-il privilégier le SEO ou le GEO pour une PME toulousaine ?',
      answer:
        'Nous préconisons une approche combinée. Le SEO assure un socle solide sur les moteurs traditionnels, tandis que le GEO prépare votre visibilité sur les plateformes IA en pleine expansion.',
    },
    {
      question: 'Proposez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous dispensons des formations pour aider vos équipes à comprendre les enjeux du GEO et à produire des contenus optimisés pour les moteurs IA.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité à Toulouse ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise toulousaine vers de nouveaux sommets.',
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
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
