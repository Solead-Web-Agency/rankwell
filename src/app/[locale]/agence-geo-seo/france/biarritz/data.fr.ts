/**
 * DATA FR - Agence GEO & SEO à Biarritz
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Biarritz | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Biarritz. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché de la côte basque.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Biarritz' },
  ],
  badge: 'biarritz',
  title: 'Agence GEO & SEO à Biarritz',
  description:
    'Station balnéaire de renommée internationale et capitale européenne du surf, Biarritz attire une clientèle premium du monde entier. Notre agence accompagne les entreprises biarrotes dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Biarritz',
  accentColor: 'rw-blue' as const,
  title: 'Brillez sur les moteurs de recherche à Biarritz',
  paragraphs: [
    'Biarritz incarne l\'élégance et le dynamisme de la côte basque, attirant une clientèle internationale exigeante toute l\'année. Cette notoriété exceptionnelle génère une concurrence digitale intense où seules les entreprises bien référencées captent l\'attention.',
    'Notre approche combine le SEO traditionnel avec le GEO (Generative Engine Optimization), l\'optimisation pour les moteurs propulsés par l\'IA. Vous serez ainsi visible sur Google et recommandé par ChatGPT, Perplexity ou Google SGE.',
    'De la Grande Plage au quartier du Port Vieux, des établissements de thalassothérapie aux écoles de surf, nous calibrons nos stratégies pour toucher une clientèle haut de gamme, française et internationale.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Biarritz',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché premium biarrot',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie haut de gamme, thalasso, surf et services premium',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle qualifiée et réservations directes',
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
  title: 'Le GEO : visibilité IA pour Biarritz',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle haut de gamme à Biarritz',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs de recherche IA. Quand un voyageur demande à ChatGPT "meilleur hôtel thalasso Biarritz", le GEO garantit que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO est crucial à Biarritz ?',
      description:
        'La clientèle internationale qui visite Biarritz utilise massivement l\'IA pour planifier voyages et expériences. Être recommandé par les assistants IA devient un facteur différenciant sur ce marché premium.',
    },
    {
      icon: 'BarChart3',
      title: 'Alliance SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les IA. La combinaison de ces deux approches couvre l\'ensemble des comportements de recherche de votre clientèle.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu premium pour l\'IA',
      description:
        'Les moteurs génératifs privilégient le contenu expert et authentique. Nos équipes créent des contenus qui reflètent l\'excellence de Biarritz et répondent aux critères des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Biarritz accueille plus d\'1,5 million de visiteurs par an et possède 6 plages labellisées, faisant d\'elle la capitale européenne du surf.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie d\'excellence pour le marché biarrot',
  subtitle:
    'Notre expertise du luxe et du tourisme haut de gamme nous permet de déployer des stratégies adaptées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché premium',
      description:
        'Étude de la concurrence biarrote, identification des requêtes de la clientèle haut de gamme et détection des opportunités de positionnement.',
    },
    {
      icon: 'FileText',
      title: 'Contenu d\'exception',
      description:
        'Production de contenus reflétant l\'excellence de Biarritz et du Pays Basque. Storytelling premium adapté aux attentes d\'une clientèle exigeante.',
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
        'Stratégie de netlinking ciblant les médias de voyage et les publications basques de référence.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises biarrotes accompagnées',
  subtitle:
    'Nous aidons les acteurs du marché premium de Biarritz à développer leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie & Thalasso',
      description:
        'Hôtels de charme, établissements de thalassothérapie et spas souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Surf & Sports nautiques',
      description:
        'Écoles de surf, shops et prestataires de sports de glisse ciblant une clientèle internationale.',
    },
    {
      icon: 'Briefcase',
      title: 'Gastronomie & Art de vivre',
      description:
        'Restaurants gastronomiques, bars à tapas et établissements valorisant l\'art de vivre basque.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Location',
      description:
        'Agences spécialisées dans l\'immobilier de prestige et la location saisonnière sur la côte basque.',
    },
  ],
  ctaTitle: 'Votre activité ne figure pas ici ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les secteurs premium. Échangeons pour définir comment le GEO et le SEO peuvent propulser votre entreprise à Biarritz.',
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
  title: 'Nos services GEO & SEO à Biarritz',
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
    { value: '25K', label: 'Habitants à Biarritz' },
    { value: '1.5M', label: 'Visiteurs par an' },
    { value: '6', label: 'Plages labellisées' },
    { value: '+75%', label: 'Clientèle internationale' },
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
    'Une méthodologie d\'excellence pour des résultats à la hauteur de Biarritz',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel et identification des opportunités sur le marché premium.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action aligné avec les codes du luxe et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations et création de contenus premium.',
    },
    {
      number: 4,
      title: 'Mesure & Excellence',
      description:
        'Suivi des KPIs et optimisations continues pour maintenir l\'excellence.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Biarritz ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"cours surf Biarritz"', '"où apprendre le surf à Biarritz ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Premium, expert, authentique'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et excellence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Biarritz attire une clientèle internationale exigeante qui prépare ses séjours via l\'IA. Les établissements qui maîtrisent le GEO captent ces visiteurs premium avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Biarritz',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il crucial à Biarritz ?',
      answer:
        'Biarritz attire une clientèle internationale premium. Un référencement efficace vous permet de capter ces recherches à haute valeur et de vous différencier sur un marché concurrentiel.',
    },
    {
      question: 'Comment le GEO aide-t-il à toucher la clientèle haut de gamme ?',
      answer:
        'La clientèle premium utilise de plus en plus l\'IA pour planifier séjours et expériences. Être recommandé par ChatGPT ou Perplexity représente un avantage concurrentiel majeur.',
    },
    {
      question: 'Travaillez-vous en plusieurs langues ?',
      answer:
        'Absolument. Nous optimisons votre présence en français, anglais et espagnol pour capter la clientèle internationale de la côte basque.',
    },
    {
      question: 'Couvrez-vous toute la côte basque ?',
      answer:
        'Oui, nous accompagnons les entreprises de Biarritz mais aussi de Bayonne, Anglet, Saint-Jean-de-Luz et au-delà.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos citations dans les réponses des IA et mesurer l\'évolution de votre visibilité.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à briller à Biarritz ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne de la côte basque.',
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
    { label: 'Nouvelle-Aquitaine', href: '/agence-geo-seo/france/nouvelle-aquitaine' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
