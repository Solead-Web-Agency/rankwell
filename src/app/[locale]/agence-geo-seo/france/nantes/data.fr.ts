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
      icon: 'Bot',
      title: 'Architecture des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google SGE agrègent des données multiples pour formuler des réponses complètes. Être reconnu comme source de référence devient stratégique.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et crédibles',
      description:
        'Les systèmes IA privilégient les contenus bien organisés, sourcés et démontrant une expertise réelle. La sémantique conditionne votre visibilité.',
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
  text: "Nantes est régulièrement classée parmi les villes où il fait bon travailler en France. Sa métropole de 660 000 habitants concentre un écosystème tech et créatif dynamique avec la French Tech Nantes et des événements comme le Web2Day.",
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
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Exploration approfondie de votre secteur à Nantes, mapping concurrentiel et identification des opportunités propres à la métropole ligérienne.',
      features: [
        'Audit de visibilité actuelle',
        'Étude de la concurrence locale',
        'Analyse des requêtes métropolitaines',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Rédaction de contenus qui établissent votre expertise, optimisés pour le SEO comme pour les critères des moteurs IA.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Mise en valeur de l\'innovation nantaise',
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
  title: 'Les entreprises nantaises que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises de la métropole nantaise.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Startups & Tech',
      description:
        'Startups de la French Tech Nantes, éditeurs SaaS et entreprises innovantes souhaitant amplifier leur visibilité digitale.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerces et e-commerçants',
      description:
        'Boutiques, enseignes locales et sites marchands désireux d\'attirer une clientèle plus large via les moteurs de recherche.',
    },
    {
      icon: 'Briefcase',
      title: 'Services aux entreprises',
      description:
        'Cabinets de conseil, agences, professions libérales et prestataires B2B ciblant le tissu économique nantais.',
    },
    {
      icon: 'Globe',
      title: 'Industrie & Naval',
      description:
        'Entreprises industrielles, chantiers navals et équipementiers de l\'estuaire de la Loire.',
    },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription:
    'Échangez avec notre équipe pour découvrir comment nous pouvons développer votre présence digitale à Nantes et dans toute la métropole.',
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
      value: '660',
      suffix: 'k',
      label: "D'habitants dans la métropole nantaise",
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
    'L\'avènement des moteurs IA redéfinit les parcours de recherche des utilisateurs. S\'y préparer aujourd\'hui, c\'est assurer la compétitivité de son entreprise pour les années à venir.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
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
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs classiques (Google, Bing). Le GEO cible les moteurs IA (ChatGPT, Perplexity) qui formulent des réponses synthétiques. Ces deux disciplines sont complémentaires.',
    },
    {
      question: 'Pourquoi une entreprise nantaise doit-elle s\'intéresser au GEO ?',
      answer:
        'Les utilisateurs recourent de plus en plus aux assistants IA pour leurs recherches. Être présent dans ces réponses permet d\'atteindre de nouveaux prospects dans cette métropole tech-friendly.',
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
      question: 'Travaillez-vous avec les startups nantaises ?',
      answer:
        'Absolument. L\'écosystème French Tech Nantes est dynamique et nous accompagnons de nombreuses startups et scale-ups dans leur stratégie de visibilité.',
    },
    {
      question: 'Proposez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous offrons des sessions de formation pour aider vos équipes à maîtriser les enjeux du GEO et à produire des contenus optimisés pour les moteurs IA.',
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
