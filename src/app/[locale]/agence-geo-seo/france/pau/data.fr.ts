/**
 * DATA FR - Agence GEO & SEO à Pau
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Pau | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Pau. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché béarnais et pyrénéen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Pau' },
  ],
  badge: 'pau',
  title: 'Agence GEO & SEO à Pau',
  description:
    'Capitale du Béarn aux portes des Pyrénées, Pau conjugue douceur de vivre et dynamisme économique. Notre agence accompagne les entreprises paloises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Pau',
  accentColor: 'rw-blue' as const,
  title: 'Développez votre visibilité digitale à Pau',
  paragraphs: [
    'Pau bénéficie d\'une situation exceptionnelle face aux Pyrénées et d\'une économie diversifiée entre aéronautique, énergie et tourisme. Cette position stratégique crée un environnement où la visibilité en ligne devient un levier de croissance majeur.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE.',
    'Du Boulevard des Pyrénées aux zones industrielles, de la vieille ville aux quartiers d\'affaires, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des Palois.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Pau',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché palois et béarnais',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'PME locales, acteurs de l\'aéronautique, tourisme pyrénéen et services',
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
  title: 'Le GEO : nouvelle dimension du référencement à Pau',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises paloises',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand quelqu\'un demande à ChatGPT "meilleur restaurant gastronomique à Pau", le GEO assure que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Pau ?',
      description:
        'Entre son pôle aéronautique et son attractivité touristique liée aux Pyrénées, Pau voit ses prospects utiliser de plus en plus l\'IA pour trouver prestataires et services.',
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
        'Les moteurs génératifs favorisent le contenu expert et contextualisé. Nos équipes produisent des contenus valorisant l\'identité béarnaise et pyrénéenne.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Pau est le 2ème pôle aéronautique français après Toulouse, avec plus de 8 000 emplois dans le secteur et des sous-traitants de rang mondial.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché palois',
  subtitle:
    'Notre expertise régionale nous permet de déployer des actions parfaitement adaptées à Pau',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché béarnais',
      description:
        'Cartographie de la concurrence locale, identification des requêtes propres à Pau et au Béarn, détection des opportunités sectorielles.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le territoire',
      description:
        'Production de contenus valorisant l\'identité paloise, les Pyrénées et l\'expertise de votre entreprise.',
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
        'Développement de liens depuis des sites béarnais reconnus et partenariats avec des acteurs locaux.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises paloises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de Pau à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Industrie & Aéronautique',
      description:
        'Sous-traitants aéronautiques, entreprises industrielles et acteurs de la filière énergie.',
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
        'Avocats, experts-comptables, consultants et prestataires B2B du Béarn.',
    },
    {
      icon: 'Home',
      title: 'Tourisme & Montagne',
      description:
        'Hébergements, prestataires de tourisme pyrénéen et stations de ski.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines. Échangeons pour définir une stratégie GEO & SEO adaptée à votre entreprise paloise.',
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
  title: 'Nos services GEO & SEO à Pau',
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
    { value: '77K', label: 'Habitants à Pau' },
    { value: '165K', label: 'Dans l\'agglomération' },
    { value: '8000', label: 'Emplois aéronautiques' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Pau',
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
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs et au marché béarnais.',
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
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Pau ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"sous-traitant aéronautique Pau"', '"entreprises aéronautiques à Pau ?"'],
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
    'Entre aéronautique et tourisme pyrénéen, Pau offre des opportunités uniques. Les entreprises qui maîtrisent le GEO captent ces prospects avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Pau',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important pour une entreprise à Pau ?',
      answer:
        'Pau est un pôle économique majeur du Sud-Ouest. Un bon référencement vous permet de capter les recherches des 165 000 habitants de l\'agglomération et des nombreux professionnels de l\'aéronautique.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise à Pau ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Pau et ses entreprises.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit généralement des résultats en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes.',
    },
    {
      question: 'Travaillez-vous avec le secteur aéronautique ?',
      answer:
        'Oui, nous accompagnons les sous-traitants et entreprises de l\'aéronautique palois pour développer leur visibilité en ligne.',
    },
    {
      question: 'Couvrez-vous tout le Béarn ?',
      answer:
        'Absolument. Nous pouvons étendre votre référencement à l\'ensemble du Béarn et aux vallées pyrénéennes.',
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
  title: 'Prêt à conquérir Pau ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée au marché béarnais.',
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
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
  ],
};
