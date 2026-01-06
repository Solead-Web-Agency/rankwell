/**
 * DATA FR - Agence GEO & SEO à Saint-Rémy-de-Provence
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Saint-Rémy-de-Provence | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Saint-Rémy-de-Provence. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché des Alpilles.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Saint-Rémy-de-Provence' },
  ],
  badge: 'saint-remy-de-provence',
  title: 'Agence GEO & SEO à Saint-Rémy-de-Provence',
  description:
    'Joyau des Alpilles et village de caractère par excellence, Saint-Rémy-de-Provence attire une clientèle internationale en quête d\'authenticité provençale. Notre agence accompagne les entreprises saint-rémoises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Saint-Rémy-de-Provence',
  accentColor: 'rw-blue' as const,
  title: 'Rayonnez sur les moteurs de recherche depuis les Alpilles',
  paragraphs: [
    'Saint-Rémy-de-Provence incarne l\'essence de la Provence avec ses paysages des Alpilles, son patrimoine culturel (Van Gogh, Nostradamus) et son art de vivre. Cette notoriété internationale génère un flux touristique premium où la visibilité digitale est devenue essentielle.',
    'Notre méthodologie associe le référencement SEO classique aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque des visiteurs planifient leur séjour.',
    'Du centre historique aux domaines viticoles des Alpilles, des mas provençaux aux restaurants étoilés, nous calibrons nos stratégies pour toucher une clientèle exigeante, française comme internationale.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Saint-Rémy-de-Provence',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché des Alpilles',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie de charme, domaines viticoles, restaurants et artisans locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle haut de gamme et réservations directes',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Stratégie authentique, contenu provençal et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour les Alpilles',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les acteurs des Alpilles',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs de recherche IA. Quand un voyageur demande à ChatGPT "plus belle maison d\'hôtes près des Alpilles", le GEO garantit que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Saint-Rémy ?',
      description:
        'La clientèle internationale qui visite Saint-Rémy utilise massivement l\'IA pour organiser ses séjours en Provence. Être recommandé par les assistants IA devient un avantage concurrentiel majeur pour les établissements locaux.',
    },
    {
      icon: 'BarChart3',
      title: 'Alliance SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les IA. La combinaison de ces deux approches couvre l\'ensemble des comportements de recherche de votre clientèle premium.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu authentiquement provençal',
      description:
        'Les moteurs génératifs privilégient le contenu authentique et expert. Nos équipes créent des contenus qui reflètent l\'art de vivre provençal et répondent aux critères de qualité des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Saint-Rémy-de-Provence accueille plus de 2 millions de visiteurs par an, attirés par le site de Glanum, l\'héritage de Van Gogh et le marché provençal.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie d\'authenticité pour le marché des Alpilles',
  subtitle:
    'Notre expertise provençale nous permet de déployer des stratégies respectant l\'identité de Saint-Rémy',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché des Alpilles',
      description:
        'Étude de la concurrence locale, identification des requêtes liées aux Alpilles et détection des opportunités de positionnement sur le tourisme de charme.',
    },
    {
      icon: 'FileText',
      title: 'Contenu d\'exception',
      description:
        'Production de contenus reflétant l\'authenticité provençale, l\'héritage culturel et le savoir-faire local. Storytelling adapté aux attentes d\'une clientèle en quête d\'expériences.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique irréprochable',
      description:
        'Performance de site exemplaire, expérience utilisateur premium, données structurées et architecture technique pensée pour le référencement local.',
    },
    {
      icon: 'Award',
      title: 'Autorité et authenticité',
      description:
        'Stratégie de netlinking ciblant les médias de voyage et les publications provençales de référence pour asseoir votre légitimité.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises saint-rémoises accompagnées',
  subtitle:
    'Nous aidons les acteurs des Alpilles à développer leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie de charme',
      description:
        'Maisons d\'hôtes, bastides, mas provençaux et établissements de caractère souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Artisanat & Produits locaux',
      description:
        'Artisans, producteurs, boutiques provençales et marchés locaux cherchant à développer leur clientèle.',
    },
    {
      icon: 'Briefcase',
      title: 'Œnotourisme & Gastronomie',
      description:
        'Domaines viticoles, restaurants gastronomiques et prestataires de l\'art de vivre provençal.',
    },
    {
      icon: 'Home',
      title: 'Immobilier de prestige',
      description:
        'Agences spécialisées dans les mas, bastides et propriétés de caractère des Alpilles.',
    },
  ],
  ctaTitle: 'Votre activité ne figure pas ici ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les secteurs. Échangeons pour définir comment le GEO et le SEO peuvent propulser votre entreprise à Saint-Rémy-de-Provence.',
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
  title: 'Nos services GEO & SEO à Saint-Rémy-de-Provence',
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
    { value: '10K', label: 'Habitants à Saint-Rémy' },
    { value: '2M', label: 'Visiteurs annuels' },
    { value: '70%', label: 'Clientèle internationale' },
    { value: '+80%', label: 'Recherches mobiles' },
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
    'Une méthodologie d\'excellence pour des résultats à la hauteur des Alpilles',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence locale et identification des opportunités sur le marché des Alpilles.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO aligné avec l\'authenticité provençale et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus authentiques et développement de votre autorité.',
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
  title: 'SEO vs GEO : quelle approche pour votre entreprise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"mas Alpilles piscine"', '"où loger de charme près des Alpilles ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Authentique, expert, provençal'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et authenticité'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Saint-Rémy-de-Provence attire des voyageurs en quête d\'authenticité qui préparent leur séjour via l\'IA. Les établissements qui maîtrisent le GEO captent ces visiteurs premium avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Saint-Rémy-de-Provence',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important pour une entreprise à Saint-Rémy ?',
      answer:
        'Saint-Rémy accueille 2 millions de visiteurs par an, principalement internationaux. Un bon référencement vous permet de capter ces recherches à haute valeur et de vous différencier sur un marché où l\'authenticité est recherchée.',
    },
    {
      question: 'Comment le GEO aide-t-il à toucher la clientèle internationale ?',
      answer:
        'La clientèle internationale qui visite les Alpilles utilise massivement l\'IA pour planifier ses séjours. Être recommandé par ChatGPT ou Perplexity quand quelqu\'un cherche les meilleures adresses représente un avantage concurrentiel majeur.',
    },
    {
      question: 'Travaillez-vous en plusieurs langues ?',
      answer:
        'Absolument. Nous optimisons votre présence en français et en anglais pour capter la clientèle internationale. Le multilinguisme est essentiel pour un marché comme Saint-Rémy où 70% des visiteurs viennent de l\'étranger.',
    },
    {
      question: 'Proposez-vous des services pour les domaines viticoles ?',
      answer:
        'Oui, nous accompagnons les domaines des Alpilles et des Baux-de-Provence. Le SEO et le GEO sont particulièrement pertinents pour développer l\'œnotourisme et la vente directe.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes spécifiques aux Alpilles. Nous établissons des indicateurs dès le démarrage.',
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
  title: 'Prêt à rayonner depuis les Alpilles ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne de Saint-Rémy-de-Provence.',
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
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
