/**
 * DATA FR - Agence GEO & SEO à Cannes
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Cannes | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Cannes. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché cannois et azuréen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Cannes' },
  ],
  badge: 'cannes',
  title: 'Agence GEO & SEO à Cannes',
  description:
    'Capitale internationale du cinéma et du luxe, Cannes attire une clientèle haut de gamme du monde entier. Notre agence accompagne les entreprises cannoises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Cannes',
  accentColor: 'rw-blue' as const,
  title: 'Brillez sur les moteurs de recherche à Cannes',
  paragraphs: [
    'Cannes incarne le prestige et l\'excellence sur la scène internationale. Cette notoriété exceptionnelle génère une concurrence digitale intense où seules les entreprises les mieux référencées captent l\'attention des clients premium.',
    'Notre approche combine le SEO traditionnel avec le GEO (Generative Engine Optimization), l\'optimisation pour les moteurs propulsés par l\'IA. Vous serez ainsi visible sur Google et recommandé par ChatGPT, Perplexity ou Google SGE.',
    'De la Croisette au quartier du Suquet, des palaces aux boutiques de luxe, nous calibrons nos stratégies pour toucher une clientèle exigeante, française comme internationale.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Cannes',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché premium cannois',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie de luxe, commerces premium, événementiel et services haut de gamme',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle qualifiée et image de marque renforcée',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Stratégie premium, contenu d\'excellence et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour le marché cannois',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle haut de gamme à Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs de recherche IA. Quand un client fortuné demande à ChatGPT "meilleur palace avec vue mer à Cannes", le GEO garantit que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO est crucial à Cannes ?',
      description:
        'La clientèle internationale de Cannes utilise massivement l\'IA pour planifier séjours et achats de luxe. Être recommandé par les assistants IA devient un facteur différenciant pour capter cette clientèle exigeante.',
    },
    {
      icon: 'BarChart3',
      title: 'Alliance SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les IA. La combinaison de ces deux approches couvre l\'ensemble des comportements de recherche de votre clientèle premium.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu premium pour l\'IA',
      description:
        'Les moteurs génératifs privilégient le contenu expert et prestigieux. Nos équipes créent des contenus qui reflètent l\'excellence de votre établissement et répondent aux critères des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Le Festival de Cannes génère plus de 200 millions d\'euros de retombées économiques annuelles et attire 200 000 visiteurs pendant 12 jours.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie d\'excellence pour le marché cannois',
  subtitle:
    'Notre expertise du luxe nous permet de déployer des stratégies adaptées aux exigences de Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché premium',
      description:
        'Étude de la concurrence cannoise, identification des requêtes de la clientèle haut de gamme et détection des opportunités de positionnement sur le marché du luxe.',
    },
    {
      icon: 'FileText',
      title: 'Contenu d\'exception',
      description:
        'Production de contenus reflétant le prestige de Cannes et l\'excellence de votre établissement. Storytelling premium adapté aux attentes d\'une clientèle exigeante.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique irréprochable',
      description:
        'Performance de site exemplaire, expérience utilisateur premium, données structurées et architecture technique sans compromis.',
    },
    {
      icon: 'Award',
      title: 'Autorité et prestige',
      description:
        'Stratégie de netlinking ciblant les médias de luxe et les publications azuréennes de référence pour asseoir votre légitimité.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises cannoises accompagnées',
  subtitle:
    'Nous aidons les acteurs du marché premium de Cannes à développer leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie de luxe',
      description:
        'Palaces, hôtels 5 étoiles et établissements premium souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Luxe & Retail',
      description:
        'Joailleries, boutiques de créateurs, commerces de luxe ciblant une clientèle internationale fortunée.',
    },
    {
      icon: 'Briefcase',
      title: 'Événementiel & Congrès',
      description:
        'Organisateurs d\'événements, traiteurs et prestataires du secteur MICE cannois.',
    },
    {
      icon: 'Home',
      title: 'Immobilier de prestige',
      description:
        'Agences spécialisées dans l\'immobilier de luxe et la location de villas sur la Côte d\'Azur.',
    },
  ],
  ctaTitle: 'Votre activité ne figure pas ici ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les secteurs premium. Échangeons pour définir comment le GEO et le SEO peuvent propulser votre entreprise à Cannes.',
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
  title: 'Nos services GEO & SEO à Cannes',
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
    { value: '75K', label: 'Habitants à Cannes' },
    { value: '2M', label: 'Touristes par an' },
    { value: '200M€', label: 'Retombées du Festival' },
    { value: '+80%', label: 'Clientèle internationale' },
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
    'Une méthodologie d\'excellence pour des résultats à la hauteur de Cannes',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence cannoise et identification des opportunités sur le marché premium.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO aligné avec les codes du luxe et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus premium et développement de votre autorité.',
    },
    {
      number: 4,
      title: 'Mesure & Excellence',
      description:
        'Suivi des KPIs, reporting transparent et optimisations continues pour maintenir l\'excellence de vos performances.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Cannes ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"palace vue mer Cannes"', '"quel est le meilleur palace à Cannes ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Premium, expert, prestigieux'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et excellence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'À Cannes, l\'excellence est un prérequis. Les entreprises qui maîtrisent le GEO se positionnent comme les références que l\'IA recommande à une clientèle internationale exigeante.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il crucial pour une entreprise à Cannes ?',
      answer:
        'Cannes attire une clientèle internationale fortunée qui recherche des services premium. Un référencement efficace vous permet de capter ces recherches à haute valeur et de vous différencier sur un marché ultra-compétitif.',
    },
    {
      question: 'Comment le GEO aide-t-il à toucher la clientèle de luxe ?',
      answer:
        'La clientèle haut de gamme utilise de plus en plus l\'IA pour planifier séjours et achats. Être recommandé par ChatGPT ou Perplexity quand quelqu\'un cherche les meilleurs établissements à Cannes représente un avantage concurrentiel majeur.',
    },
    {
      question: 'Travaillez-vous en plusieurs langues pour Cannes ?',
      answer:
        'Absolument. Nous optimisons votre présence en français et en anglais pour capter la clientèle internationale. D\'autres langues peuvent être envisagées selon vos marchés cibles (russe, arabe, chinois...).',
    },
    {
      question: 'Proposez-vous des services pour les événements cannois ?',
      answer:
        'Oui, nous intégrons la saisonnalité et les grands événements (Festival de Cannes, MIPIM, MIDEM, etc.) dans nos stratégies pour maximiser votre visibilité aux moments clés.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes. Nous établissons des indicateurs de progression dès le démarrage.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos citations dans les réponses des IA. Nous analysons les requêtes où vous êtes mentionné et mesurons l\'évolution de votre visibilité sur ces canaux émergents.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à briller à Cannes ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne du marché cannois.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'PACA', href: '/agence-geo-seo/france/provence-alpes-cote-d-azur' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
