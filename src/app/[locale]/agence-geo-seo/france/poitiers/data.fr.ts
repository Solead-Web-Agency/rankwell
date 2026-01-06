/**
 * DATA FR - Agence GEO & SEO à Poitiers
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Poitiers | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Poitiers. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché poitevin et régional.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Poitiers' },
  ],
  badge: 'poitiers',
  title: 'Agence GEO & SEO à Poitiers',
  description:
    'Ville d\'art et d\'histoire, capitale de la Vienne et pôle universitaire majeur, Poitiers conjugue patrimoine et innovation. Notre agence accompagne les entreprises poitevines dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Poitiers',
  accentColor: 'rw-blue' as const,
  title: 'Développez votre visibilité digitale à Poitiers',
  paragraphs: [
    'Poitiers s\'impose comme un pôle universitaire et économique du Centre-Ouest, abritant le Futuroscope et un patrimoine roman exceptionnel. Cette dynamique crée un environnement où la visibilité en ligne devient un atout stratégique pour les entreprises locales.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE.',
    'Du centre historique aux zones d\'activités du Futuroscope, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des Poitevins et des visiteurs.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Poitiers',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché poitevin',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'PME locales, acteurs du tourisme, université et services B2B',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et génération de leads',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie locale, contenu optimisé et suivi des performances',
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
  title: 'Le GEO : nouvelle dimension du référencement à Poitiers',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises poitevines',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand quelqu\'un demande à ChatGPT "que visiter à Poitiers", le GEO assure que votre site ou activité soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Poitiers ?',
      description:
        'Avec le Futuroscope et 28 000 étudiants, Poitiers voit ses visiteurs et sa population jeune utiliser massivement l\'IA pour trouver informations et services.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO garantit vos positions sur Google, le GEO vous fait recommander par l\'IA. En associant ces deux approches, vous captez l\'ensemble des flux de recherche.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté au territoire',
      description:
        'Les moteurs génératifs favorisent le contenu expert et contextualisé. Nos équipes produisent des contenus valorisant le patrimoine et l\'innovation poitevine.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Le Futuroscope attire près de 2 millions de visiteurs par an, faisant de Poitiers l\'une des principales destinations touristiques du Centre-Ouest.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché poitevin',
  subtitle:
    'Notre expertise régionale nous permet de déployer des actions parfaitement adaptées à Poitiers',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché poitevin',
      description:
        'Cartographie de la concurrence locale, identification des requêtes propres à Poitiers et sa région, détection des opportunités.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le territoire',
      description:
        'Production de contenus valorisant le patrimoine poitevin, l\'innovation et l\'expertise de votre entreprise.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des performances, données structurées Schema.org et expérience mobile irréprochable.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Développement de liens depuis des sites poitevins reconnus et partenariats avec des acteurs locaux.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises poitevines accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de Poitiers à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Tourisme & Culture',
      description:
        'Hôtels, restaurants, sites touristiques et prestataires culturels liés au Futuroscope et au patrimoine.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Artisanat',
      description:
        'Commerces du centre-ville, boutiques de quartier et artisans locaux.',
    },
    {
      icon: 'Briefcase',
      title: 'Services professionnels',
      description:
        'Avocats, experts-comptables, consultants et prestataires B2B de la Vienne.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Services',
      description:
        'Agences immobilières et prestataires de services aux particuliers et entreprises.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines. Échangeons pour définir une stratégie GEO & SEO adaptée à votre entreprise poitevine.',
  ctaButtonText: 'Parler de votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO à Poitiers',
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
    { value: '90K', label: 'Habitants à Poitiers' },
    { value: '28K', label: 'Étudiants' },
    { value: '2M', label: 'Visiteurs au Futuroscope' },
    { value: '+55%', label: 'Recherches sur mobile' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Poitiers',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs et au marché poitevin.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations et création de contenus locaux.',
    },
    {
      number: 4,
      title: 'Mesure & Ajustement',
      description:
        'Suivi des indicateurs et optimisations continues pour maximiser votre ROI.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Poitiers ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel près Futuroscope"', '"où dormir près du Futuroscope ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, expert, local'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Poitiers combine patrimoine historique et innovation avec le Futuroscope. Les entreprises qui maîtrisent le GEO captent ces flux touristiques et cette population jeune.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Poitiers',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important à Poitiers ?',
      answer:
        'Poitiers accueille 2 millions de visiteurs au Futuroscope et compte 28 000 étudiants. Un bon référencement vous permet de capter ces publics variés.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Poitiers et ses environs.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit généralement des résultats en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes.',
    },
    {
      question: 'Travaillez-vous avec le secteur touristique ?',
      answer:
        'Oui, nous accompagnons les hôtels, restaurants et prestataires touristiques liés au Futuroscope et au patrimoine poitevin.',
    },
    {
      question: 'Couvrez-vous la Vienne ?',
      answer:
        'Absolument. Nous pouvons étendre votre référencement à l\'ensemble du département de la Vienne.',
    },
    {
      question: 'Comment mesurez-vous les performances ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos positions Google et vos citations dans les réponses des IA.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Poitiers ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée au marché poitevin.',
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
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Limoges', href: '/agence-geo-seo/france/limoges' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
  ],
};
