/**
 * DATA FR - Agence GEO & SEO en Nouvelle-Aquitaine
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Nouvelle-Aquitaine | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Nouvelle-Aquitaine. Optimisez votre visibilité sur Google et les moteurs IA de Bordeaux à Biarritz, de La Rochelle à Poitiers.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Nouvelle-Aquitaine' },
  ],
  badge: 'nouvelle-aquitaine',
  title: 'Agence GEO & SEO en Nouvelle-Aquitaine',
  description:
    'Plus grande région de France, la Nouvelle-Aquitaine offre une diversité économique remarquable : viticulture bordelaise, tourisme atlantique, industries aéronautiques et tertiaire de pointe. Notre agence accompagne les entreprises régionales dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Nouvelle-Aquitaine',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur un territoire aussi vaste exige une expertise régionale',
  paragraphs: [
    'La Nouvelle-Aquitaine concentre des économies diverses : l\'excellence viticole du Bordelais, le dynamisme touristique de la côte basque, l\'aéronautique à Pau et Bordeaux, et un tissu de PME innovantes. Cette variété crée des marchés digitaux spécifiques où la visibilité en ligne conditionne la croissance.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'De Bordeaux à Biarritz, de La Rochelle à Poitiers, de Limoges à Angoulême, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Nouvelle-Aquitaine',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA en Nouvelle-Aquitaine',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du vin, tourisme, industrie, services et commerces régionaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, leads locaux et visibilité multi-territoire',
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
  title: 'Le GEO : révolution de la visibilité en Nouvelle-Aquitaine',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises néo-aquitaines',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un amateur de vin demande à ChatGPT "meilleur domaine viticole à visiter à Saint-Émilion", le GEO assure que votre château soit mentionné.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Nouvelle-Aquitaine ?',
      description:
        'Avec 30 millions de touristes par an et une économie diversifiée, la région voit ses prospects utiliser massivement l\'IA. Les moteurs génératifs recommandent directement domaines viticoles, hébergements et services professionnels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients régionaux et internationaux.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté aux filières régionales',
      description:
        'L\'IA privilégie le contenu expert et contextualisé. Nos équipes créent des contenus qui reflètent l\'excellence de votre entreprise et les spécificités de votre filière néo-aquitaine.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'La Nouvelle-Aquitaine est la plus grande région de France avec 84 000 km² et génère plus de 15 milliards d\'euros de recettes touristiques annuelles.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à la diversité néo-aquitaine',
  subtitle:
    'Notre expertise régionale nous permet de déployer des stratégies calibrées pour chaque territoire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse des marchés locaux',
      description:
        'Étude de votre positionnement face aux concurrents locaux, analyse des requêtes spécifiques à chaque territoire (Gironde, Pays Basque, Charente, etc.) et identification des opportunités.',
    },
    {
      icon: 'FileText',
      title: 'Contenu à forte valeur régionale',
      description:
        'Création de contenus valorisant l\'identité de votre territoire et votre expertise métier. Articles de fond, guides locaux et landing pages optimisées pour le référencement régional.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique rigoureuse',
      description:
        'Performance mobile prioritaire, données structurées Schema.org, vitesse de chargement optimale et architecture de site pensée pour le SEO local multi-villes.',
    },
    {
      icon: 'Award',
      title: 'Renforcement de l\'autorité territoriale',
      description:
        'Stratégie de netlinking avec des médias régionaux, partenariats avec des institutions locales et développement de votre présence sur les annuaires néo-aquitains.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises ciblées en Nouvelle-Aquitaine',
  subtitle:
    'Nous accompagnons les acteurs économiques régionaux dans leur conquête de visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Viticulture & Œnotourisme',
      description:
        'Châteaux, domaines, caves et prestataires œnotouristiques souhaitant développer leurs ventes directes et visites.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Tourisme & Hôtellerie',
      description:
        'Hôtels, campings, restaurants et acteurs du tourisme atlantique, pyrénéen et rural.',
    },
    {
      icon: 'Briefcase',
      title: 'Services aux entreprises',
      description:
        'Cabinets de conseil, agences, professions libérales et prestataires B2B ciblant le tissu économique régional.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Construction',
      description:
        'Agences immobilières, promoteurs et acteurs du BTP sur les marchés de Bordeaux, côte basque et territoires.',
    },
  ],
  ctaTitle: 'Votre secteur ne figure pas dans cette liste ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Contactez-nous pour évaluer comment le GEO et le SEO peuvent propulser votre entreprise en Nouvelle-Aquitaine.',
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
  title: 'Nos services GEO & SEO en Nouvelle-Aquitaine',
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
    { value: '6M', label: 'Habitants en Nouvelle-Aquitaine' },
    { value: '30M', label: 'Touristes accueillis par an' },
    { value: '84K', label: 'km² - Plus grande région' },
    { value: '40%', label: 'Utiliseront l\'IA d\'ici 2026' },
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
    'Une méthodologie éprouvée pour des résultats mesurables en Nouvelle-Aquitaine',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents régionaux et identification des opportunités sur vos marchés locaux.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et les spécificités de votre territoire.',
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
        'Suivi des KPIs, reporting transparent et ajustements stratégiques pour une progression continue.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"château visite Saint-Émilion"', '"quel domaine visiter à Saint-Émilion ?"'],
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
    'L\'IA bouleverse la façon dont les touristes et professionnels recherchent des services en Nouvelle-Aquitaine. Se préparer maintenant au GEO, c\'est prendre une longueur d\'avance sur un marché en pleine mutation.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Nouvelle-Aquitaine',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO et le GEO en Nouvelle-Aquitaine ?',
      answer:
        'La Nouvelle-Aquitaine est un territoire économiquement dynamique avec 30 millions de touristes et des filières d\'excellence (vin, aéronautique, tourisme). La concurrence digitale y est forte. SEO et GEO vous permettent de capter efficacement votre cible locale et internationale.',
    },
    {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes. Nous établissons des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toute la région ?',
      answer:
        'Oui, nous accompagnons des entreprises de Bordeaux, La Rochelle, Biarritz, Pau, Poitiers, Limoges, Angoulême et au-delà. Notre expertise couvre l\'ensemble du territoire néo-aquitain.',
    },
    {
      question: 'Le GEO remplace-t-il le SEO traditionnel ?',
      answer:
        'Non, le GEO complète le SEO. Google reste dominant, mais les recherches via l\'IA progressent rapidement. Une stratégie complète intègre les deux approches pour maximiser votre présence sur tous les canaux.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés pour suivre vos citations dans les réponses des IA (ChatGPT, Perplexity, Google SGE), analyser les requêtes où vous êtes mentionné et mesurer l\'évolution de votre visibilité.',
    },
    {
      question: 'Proposez-vous des services pour la filière viticole ?',
      answer:
        'Absolument. L\'œnotourisme et la vente directe nécessitent une stratégie digitale adaptée. Nous accompagnons châteaux et domaines pour développer leur visibilité en ligne et leurs réservations de visites.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir la Nouvelle-Aquitaine ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée à votre territoire.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans les villes de Nouvelle-Aquitaine',
  cities: [
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Limoges', href: '/agence-geo-seo/france/limoges' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
  ],
};
