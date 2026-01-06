/**
 * DATA FR - Agence GEO & SEO en Provence-Alpes-Côte d'Azur
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Provence-Alpes-Côte d\'Azur | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Provence-Alpes-Côte d\'Azur. Optimisez votre visibilité sur Google et les moteurs IA pour atteindre vos clients sur le littoral méditerranéen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Provence-Alpes-Côte d\'Azur' },
  ],
  badge: 'provence-alpes-cote-d-azur',
  title: 'Agence GEO & SEO en Provence-Alpes-Côte d\'Azur',
  description:
    'Dans une région où tourisme et économie se conjuguent intensément, être visible sur les moteurs de recherche est un levier de croissance incontournable. Notre agence accompagne les entreprises provençales et azuréennes dans leur stratégie de référencement SEO classique et d\'optimisation pour les moteurs IA (GEO).',
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
  badge: 'GEO & SEO en Provence-Alpes-Côte d\'Azur',
  accentColor: 'rw-blue' as const,
  title: 'Votre visibilité digitale en Provence-Alpes-Côte d\'Azur mérite une expertise pointue',
  paragraphs: [
    'La région PACA représente un marché diversifié alliant tourisme international, industries de pointe et services B2B. Pour émerger parmi cette concurrence dense, une stratégie digitale combinant SEO et GEO devient indispensable.',
    'Notre approche associe le référencement traditionnel aux nouvelles techniques d\'optimisation pour les réponses des intelligences artificielles génératives. Cette double expertise vous permet d\'apparaître tant sur Google que dans les résultats de ChatGPT, Perplexity ou Google SGE.',
    'De Marseille à Nice, en passant par Aix-en-Provence, Cannes, Avignon et les villages du Luberon, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
  ],
  tocItems: [
    { id: 'recap', label: 'En bref' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO' },
    { id: 'approche', label: 'Notre approche' },
    { id: 'pour-qui', label: 'Pour qui ?' },
    { id: 'expertises', label: 'Nos expertises' },
    { id: 'process', label: 'Notre process' },
    { id: 'faq', label: 'FAQ' },
  ],
};

// ============================================
// RECAP BOX DATA
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'L\'essentiel de notre service GEO & SEO en Provence-Alpes-Côte d\'Azur',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA dans la région PACA',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Entreprises touristiques, commerces, services et PME régionales',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, leads locaux et visibilité multi-canal augmentée',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, optimisation technique, contenu stratégique et suivi continu',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION DATA
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  title: 'Le GEO : révolution de la visibilité en Provence-Alpes-Côte d\'Azur',
  subtitle:
    'Le Generative Engine Optimization transforme profondément la manière dont les entreprises provençales captent leurs prospects en ligne',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) est l\'art d\'optimiser votre présence pour les moteurs de recherche propulsés par l\'IA. Un hôtelier niçois optimisé en GEO sera cité directement dans la réponse de ChatGPT quand un voyageur demandera "meilleurs hôtels avec vue mer à Nice".',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en PACA ?',
      description:
        'Avec 31 millions de touristes par an, la région PACA voit ses visiteurs planifier via l\'IA. Les moteurs génératifs recommandent directement restaurants, hébergements et activités. Ne pas y figurer signifie manquer une part croissante de clients potentiels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = stratégie gagnante',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous maximisez votre couverture sur l\'ensemble des canaux de recherche utilisés par vos clients méditerranéens et internationaux.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté au marché touristique',
      description:
        'L\'IA privilégie le contenu authentique et contextualisé. Nos équipes créent des contenus qui reflètent l\'identité de votre établissement, les spécificités du territoire PACA et les critères de qualité recherchés par les moteurs génératifs.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'La région PACA génère 20 milliards d\'euros de recettes touristiques annuelles, avec Nice et Cannes parmi les 10 premières destinations françaises.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée aux marchés provençaux et azuréens',
  subtitle:
    'Notre expertise régionale nous permet de déployer des stratégies parfaitement alignées avec les dynamiques économiques locales',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché régional',
      description:
        'Nous étudions votre positionnement face aux concurrents locaux, analysons les requêtes spécifiques au territoire PACA et identifions les opportunités de mots-clés saisonniers (tourisme estival, salons cannois, événements azuréens).',
    },
    {
      icon: 'FileText',
      title: 'Contenu à forte valeur méditerranéenne',
      description:
        'Création de contenus célébrant la Provence, la Côte d\'Azur et leurs spécificités. Articles de fond, guides locaux et landing pages optimisées pour le référencement régional et la reconnaissance par les IA.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique rigoureuse',
      description:
        'Performance mobile prioritaire pour les touristes en déplacement, données structurées Schema.org, vitesse de chargement optimale et architecture de site pensée pour le SEO local.',
    },
    {
      icon: 'Award',
      title: 'Renforcement de l\'autorité régionale',
      description:
        'Stratégie de netlinking avec des médias provençaux et azuréens, partenariats avec des institutions locales et développement de votre présence sur les annuaires régionaux de référence.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises ciblées en Provence-Alpes-Côte d\'Azur',
  subtitle:
    'Nous accompagnons les structures régionales dans leur conquête de visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie & Restauration',
      description:
        'Hôtels, restaurants gastronomiques, maisons d\'hôtes et établissements touristiques souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerces & Artisanat',
      description:
        'Boutiques provençales, producteurs locaux, commerces de luxe azuréens et artisans cherchant à développer leur clientèle.',
    },
    {
      icon: 'Briefcase',
      title: 'Services aux entreprises',
      description:
        'Cabinets de conseil, agences, professionnels libéraux et prestataires B2B ciblant le tissu économique régional.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Luxe',
      description:
        'Agences immobilières, promoteurs et acteurs du marché du luxe sur la Côte d\'Azur et dans l\'arrière-pays.',
    },
  ],
  ctaTitle: 'Votre secteur ne figure pas dans cette liste ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Contactez-nous pour évaluer comment le GEO et le SEO peuvent propulser votre entreprise provençale.',
  ctaButtonText: 'Échanger sur votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO en Provence-Alpes-Côte d\'Azur',
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
// CHIFFRES DATA
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    { value: '5M', label: 'Habitants en région PACA' },
    { value: '31M', label: 'Touristes accueillis par an' },
    { value: '+65%', label: 'Recherches locales sur mobile' },
    { value: '40%', label: 'Utiliseront l\'IA pour chercher d\'ici 2026' },
  ],
};

// ============================================
// PROCESS DATA
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Notre process',
  title: 'Comment nous travaillons ensemble',
  subtitle:
    'Une méthodologie éprouvée pour des résultats mesurables en Provence-Alpes-Côte d\'Azur',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents régionaux et identification des opportunités sur les marchés provençaux et azuréens.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et les spécificités du marché PACA.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus et développement de votre autorité régionale.',
    },
    {
      number: 4,
      title: 'Mesure & Amélioration',
      description:
        'Suivi des KPIs, reporting transparent et ajustements stratégiques pour une progression continue de votre visibilité.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise en PACA ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel vue mer Nice"', '"où dormir à Nice avec vue sur la mer ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Riche, structuré, expert'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, parts de réponse'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'L\'intelligence artificielle bouleverse la façon dont les touristes et professionnels recherchent des services en PACA. Se préparer maintenant au GEO, c\'est prendre une longueur d\'avance décisive sur ce marché ultra-concurrentiel.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Provence-Alpes-Côte d\'Azur',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO et le GEO en région PACA ?',
      answer:
        'La région PACA est l\'une des plus concurrentielles de France, notamment dans le tourisme et l\'immobilier. Avec 31 millions de touristes annuels et une économie dynamique, se démarquer en ligne est crucial. Le SEO vous positionne sur Google, le GEO vous fait recommander par les IA que ces touristes et prospects utilisent de plus en plus.',
    },
    {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes spécifiques. Nous établissons des indicateurs de progression dès le premier mois pour mesurer l\'impact de nos actions.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toute la région ?',
      answer:
        'Oui, nous accompagnons des entreprises de Marseille, Nice, Cannes, Aix-en-Provence, Avignon, Toulon et au-delà. Notre expertise couvre l\'ensemble du territoire PACA, y compris les zones touristiques alpines et l\'arrière-pays provençal.',
    },
    {
      question: 'Le GEO remplace-t-il le SEO traditionnel ?',
      answer:
        'Non, le GEO complète le SEO. Google reste le moteur dominant, mais les recherches via l\'IA progressent rapidement. Une stratégie complète intègre les deux approches pour maximiser votre présence sur tous les canaux de recherche.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés pour suivre vos citations dans les réponses des IA (ChatGPT, Perplexity, Google SGE), analyser les requêtes pour lesquelles vous êtes mentionné et mesurer l\'évolution de votre visibilité sur ces nouvelles plateformes.',
    },
    {
      question: 'Proposez-vous des services pour le tourisme saisonnier ?',
      answer:
        'Absolument. Le caractère saisonnier du tourisme en PACA nécessite une stratégie adaptée. Nous anticipons les pics de recherche (été, festivals, événements cannois) et optimisons votre visibilité en amont pour capter le maximum de trafic au bon moment.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir le marché PACA ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée aux enjeux de la Provence-Alpes-Côte d\'Azur.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans les villes de Provence-Alpes-Côte d\'Azur',
  cities: [
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Saint-Rémy-de-Provence', href: '/agence-geo-seo/france/saint-remy-de-provence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
