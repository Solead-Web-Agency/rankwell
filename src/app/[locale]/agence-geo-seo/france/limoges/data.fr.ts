/**
 * DATA FR - Agence GEO & SEO à Limoges
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Limoges | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO à Limoges. Optimisez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Limousin.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Limoges' },
  ],
  badge: 'limoges',
  title: 'Agence GEO & SEO à Limoges',
  description:
    'Développez la présence digitale de votre entreprise limougeaude grâce à notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des solutions adaptées au tissu économique local.',
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
  badge: 'Votre partenaire digital à Limoges',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises limougeaudes',
  paragraphs: [
    "Limoges, capitale de la porcelaine et du feu, est aussi un centre économique dynamique au cœur de la Nouvelle-Aquitaine. Du luxe artisanal aux industries émergentes, les entreprises de la région doivent aujourd'hui conquérir leur place dans un univers digital en constante mutation.",
    "Le GEO (Generative Engine Optimization) représente la nouvelle frontière du référencement, ciblant les moteurs de recherche propulsés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Conjuguée au SEO classique, cette approche duale garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence accompagne les acteurs limougeauds dans leur transformation numérique, en leur offrant des stratégies personnalisées qui respectent leur identité tout en maximisant leur portée en ligne.",
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
  title: 'GEO & SEO à Limoges : les fondamentaux',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché limougeaud.',
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
      description: 'Maintien des positions sur Google et les autres moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Stratégie locale',
      description: 'Approche calibrée pour le tissu économique limougeaud et néo-aquitain.',
    },
    {
      icon: 'TrendingUp',
      title: 'Résultats concrets',
      description: 'Augmentation mesurable du trafic qualifié et des conversions.',
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
    'Le GEO transforme le paysage du référencement. Découvrez comment cette discipline fonctionne et en quoi elle peut propulser votre entreprise limougeaude.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google SGE synthétisent des informations issues de multiples sources pour formuler des réponses complètes. Être identifié comme source fiable devient crucial.',
    },
    {
      icon: 'FileText',
      title: 'Contenu structuré et autoritaire',
      description:
        'Les systèmes IA valorisent les contenus bien organisés, factuels et faisant preuve d\'expertise. La structuration sémantique influence directement votre visibilité.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance',
      description:
        'Citations, backlinks de qualité et mentions de marque renforcent la crédibilité perçue par les moteurs IA, augmentant vos chances d\'être recommandé.',
    },
    {
      icon: 'ChartLine',
      title: 'Performance quantifiable',
      description:
        'Des outils spécialisés permettent de suivre votre présence dans les réponses IA et d\'ajuster la stratégie en fonction des résultats.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Limoges abrite plus de 3 000 entreprises artisanales et industrielles, dont les célèbres manufactures de porcelaine qui exportent dans le monde entier. Une présence digitale optimisée est essentielle pour ces savoir-faire d'excellence.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour Limoges',
  subtitle:
    'Notre démarche intègre les particularités du marché limougeaud pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché local',
      description:
        'Étude approfondie de votre secteur à Limoges, identification des concurrents et des opportunités spécifiques au territoire limousin.',
      features: [
        'Audit de présence digitale',
        'Cartographie concurrentielle',
        'Analyse des recherches locales',
        'Étude des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Création de contenus experts',
      description:
        'Élaboration de contenus qui positionnent votre entreprise comme référence, aussi bien pour Google que pour les moteurs IA.',
      features: [
        'Rédaction optimisée SEO et GEO',
        'Structuration sémantique avancée',
        'Intégration du vocabulaire métier',
        'Valorisation du savoir-faire local',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Configuration de votre site pour satisfaire les exigences des moteurs traditionnels et IA en termes de performance et d\'accessibilité.',
      features: [
        'Amélioration des temps de chargement',
        'Structure de données Schema.org',
        'Optimisation mobile et UX',
        'Sécurisation et accessibilité',
      ],
    },
    {
      icon: 'BarChart3',
      title: 'Pilotage et optimisation continue',
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
  title: 'Les entreprises limougeaudes que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises du territoire limousin.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'PME et artisans locaux',
      description:
        'Porcelainiers, émailleurs, entreprises du cuir et artisans d\'art cherchant à rayonner au-delà de Limoges grâce au digital.',
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
        'Avocats, médecins, experts-comptables et consultants désireux d\'améliorer leur visibilité auprès des habitants de la région.',
    },
    {
      icon: 'Globe',
      title: 'Acteurs du tourisme',
      description:
        'Hôteliers, restaurateurs et prestataires touristiques voulant attirer visiteurs et professionnels dans le Limousin.',
    },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription:
    'Prenez contact avec notre équipe pour découvrir comment nous pouvons développer votre visibilité digitale à Limoges et bien au-delà.',
  ctaButtonText: 'Échanger avec un expert',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO à Limoges',
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
      value: '130',
      suffix: 'k',
      label: "Habitants dans l'aire urbaine de Limoges",
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
        'Analyse détaillée de votre situation actuelle : présence web, positionnement, concurrence locale à Limoges et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Élaboration de la stratégie',
      description:
        'Construction d\'un plan d\'action personnalisé combinant SEO et GEO, adapté à vos objectifs et au contexte limougeaud.',
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
    'Les moteurs IA redéfinissent la manière dont les internautes accèdent à l\'information. Anticiper cette évolution, c\'est offrir à son entreprise un avantage compétitif décisif.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Limoges',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs de recherche classiques (Google, Bing). Le GEO cible les moteurs IA (ChatGPT, Perplexity) qui génèrent des réponses synthétiques. Les deux disciplines sont complémentaires.',
    },
    {
      question: 'Pourquoi une entreprise de Limoges doit-elle s\'intéresser au GEO ?',
      answer:
        'Les consommateurs et professionnels utilisent de plus en plus les assistants IA pour leurs recherches. Être visible dans ces réponses permet de toucher de nouveaux prospects et de renforcer votre image d\'expert.',
    },
    {
      question: 'Quels résultats peut-on attendre et en combien de temps ?',
      answer:
        'Les premiers effets SEO apparaissent généralement sous 3 à 6 mois. Pour le GEO, l\'intégration dans les réponses IA peut être plus rapide selon la qualité du contenu. Nous établissons des objectifs réalistes dès le départ.',
    },
    {
      question: 'Comment mesurez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui analysent les réponses générées par les différentes IA pour détecter les mentions de votre marque et suivre leur évolution.',
    },
    {
      question: 'Faut-il privilégier le SEO ou le GEO pour une PME limougeaude ?',
      answer:
        'Nous recommandons une approche combinée. Le SEO assure un socle solide sur les moteurs traditionnels, tandis que le GEO prépare votre visibilité future sur les plateformes IA en pleine expansion.',
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
  title: 'Prêt à développer votre visibilité à Limoges ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise limougeaude vers de nouveaux sommets.',
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
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
