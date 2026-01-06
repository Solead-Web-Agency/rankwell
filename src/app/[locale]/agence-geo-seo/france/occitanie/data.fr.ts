/**
 * DATA FR - Agence GEO & SEO en Occitanie
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Occitanie | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO en Occitanie. Optimisez votre visibilité sur les moteurs IA et traditionnels de Toulouse à Montpellier.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Occitanie' },
  ],
  badge: 'occitanie',
  title: 'Agence GEO & SEO en Occitanie',
  description:
    'Développez la visibilité digitale de votre entreprise occitane avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. De Toulouse à Montpellier, des solutions adaptées à votre territoire.',
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
  badge: 'Votre partenaire digital en Occitanie',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises occitanes',
  paragraphs: [
    "L'Occitanie, née de la fusion de Midi-Pyrénées et Languedoc-Roussillon, constitue une région d'exception où l'innovation côtoie un patrimoine culturel millénaire. De la capitale aéronautique toulousaine aux plages méditerranéennes, le territoire concentre une diversité économique remarquable.",
    "Le GEO (Generative Engine Optimization) représente le nouveau chapitre du référencement, ciblant les moteurs de recherche propulsés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double compétence assure une présence optimale sur l'ensemble des canaux de recherche.",
    "Notre agence accompagne les entreprises occitanes dans leur transformation numérique, en développant des stratégies personnalisées qui valorisent les spécificités régionales tout en maximisant leur portée nationale et internationale.",
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
  title: 'GEO & SEO en Occitanie : les fondamentaux',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché occitan.',
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
      title: 'Ancrage régional',
      description: 'Stratégies adaptées aux bassins économiques occitans de Toulouse à Perpignan.',
    },
    {
      icon: 'TrendingUp',
      title: 'Croissance mesurable',
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
  title: 'L\'optimisation pour les moteurs IA expliquée',
  subtitle:
    'Le GEO redéfinit les règles du référencement. Découvrez comment cette discipline fonctionne et ce qu\'elle peut apporter à votre entreprise occitane.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google SGE synthétisent des informations issues de multiples sources pour formuler des réponses complètes. Être reconnu comme source fiable devient stratégique.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et experts',
      description:
        'Les systèmes IA privilégient les contenus organisés, sourcés et démontrant une expertise réelle. La sémantique influence directement votre visibilité.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance',
      description:
        'Citations, backlinks pertinents et mentions de marque renforcent la crédibilité perçue par les moteurs IA, augmentant vos chances d\'être recommandé.',
    },
    {
      icon: 'ChartLine',
      title: 'Performance mesurable',
      description:
        'Des outils spécialisés permettent de suivre votre présence dans les réponses IA et d\'ajuster la stratégie en fonction des résultats obtenus.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "L'Occitanie est la 2e région française par sa superficie et compte plus de 6 millions d'habitants. Avec Toulouse, capitale européenne de l'aéronautique, et Montpellier, pôle d'excellence numérique, la région offre un potentiel économique considérable.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour l\'Occitanie',
  subtitle:
    'Notre démarche intègre les particularités du marché occitan pour déployer des stratégies véritablement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché régional',
      description:
        'Analyse approfondie de votre secteur en Occitanie, cartographie concurrentielle et identification des opportunités spécifiques au territoire.',
      features: [
        'Audit de présence digitale',
        'Étude de la concurrence locale',
        'Analyse des recherches régionales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Création de contenus experts',
      description:
        'Production de contenus qui établissent votre expertise, optimisés pour le SEO comme pour les critères des moteurs IA.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Valorisation des savoir-faire régionaux',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Configuration de votre site pour satisfaire les exigences de performance et d\'accessibilité des moteurs traditionnels et IA.',
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
  title: 'Les entreprises occitanes que nous accompagnons',
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises sur tout le territoire occitan.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'PME et ETI régionales',
      description:
        'Industries aéronautiques, spatiales, agroalimentaires et technologiques souhaitant amplifier leur visibilité digitale.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerces et e-commerçants',
      description:
        'Boutiques, enseignes locales et sites marchands désireux d\'attirer une clientèle plus large via les moteurs de recherche.',
    },
    {
      icon: 'Briefcase',
      title: 'Professions libérales',
      description:
        'Avocats, médecins, consultants et experts-comptables cherchant à renforcer leur visibilité régionale.',
    },
    {
      icon: 'Globe',
      title: 'Acteurs du tourisme',
      description:
        'Hôteliers, restaurateurs et prestataires touristiques souhaitant capter les visiteurs en Occitanie.',
    },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription:
    'Échangez avec notre équipe pour découvrir comment nous pouvons développer votre visibilité digitale en Occitanie et au-delà.',
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
  title: 'Nos services GEO & SEO en Occitanie',
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
      value: '6',
      suffix: 'M',
      label: "D'habitants en Occitanie",
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
        'Analyse complète de votre situation actuelle : présence web, positionnement, concurrence régionale et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action personnalisé combinant SEO et GEO, adapté à vos objectifs et au contexte occitan.',
    },
    {
      number: 3,
      title: 'Déploiement',
      description:
        'Mise en œuvre des optimisations techniques et éditoriales, création de contenus et développement de votre autorité en ligne.',
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
    'Comprenez les spécificités de chaque approche pour mieux appréhender notre stratégie intégrée.',
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
    'Les moteurs IA transforment radicalement la manière dont les internautes accèdent à l\'information. Anticiper cette évolution, c\'est offrir à son entreprise un avantage compétitif décisif.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Occitanie',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats des moteurs de recherche classiques (Google, Bing). Le GEO cible les moteurs IA (ChatGPT, Perplexity) qui génèrent des réponses synthétiques. Les deux disciplines sont complémentaires.',
    },
    {
      question: 'Pourquoi une entreprise occitane doit-elle s\'intéresser au GEO ?',
      answer:
        'Les utilisateurs recourent de plus en plus aux assistants IA pour leurs recherches. Être visible dans ces réponses permet d\'atteindre de nouveaux prospects et de renforcer votre image d\'expert sur votre marché.',
    },
    {
      question: 'Quels résultats peut-on attendre et sous quel délai ?',
      answer:
        'Les premiers effets SEO sont généralement visibles sous 3 à 6 mois. Pour le GEO, l\'intégration dans les réponses IA peut être plus rapide selon la qualité du contenu. Nous établissons des objectifs réalistes dès le départ.',
    },
    {
      question: 'Comment mesurez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui analysent les réponses générées par les différentes IA pour repérer les mentions de votre marque et suivre leur évolution.',
    },
    {
      question: 'Faut-il privilégier le SEO ou le GEO pour une entreprise régionale ?',
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
  title: 'Prêt à développer votre visibilité en Occitanie ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise occitane vers de nouveaux sommets.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (MAILLAGE INTERNE)
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO en Occitanie',
  cities: [
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
