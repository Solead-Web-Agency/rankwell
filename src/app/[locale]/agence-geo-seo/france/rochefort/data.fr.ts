/**
 * DATA FR - Agence GEO & SEO à Rochefort
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Rochefort | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Rochefort. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché charentais.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Rochefort' },
  ],
  badge: 'rochefort',
  title: 'Agence GEO & SEO à Rochefort',
  description:
    'Cité historique de la Corderie Royale et berceau de l\'Hermione, Rochefort conjugue patrimoine maritime et dynamisme touristique. Notre agence accompagne les entreprises rochefortaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Rochefort',
  accentColor: 'rw-blue' as const,
  title: 'Développez votre visibilité digitale à Rochefort',
  paragraphs: [
    'Rochefort tire parti de son héritage naval exceptionnel pour attirer visiteurs et touristes du monde entier. La reconstruction de l\'Hermione et la Corderie Royale ont redynamisé l\'économie locale, créant un environnement où la visibilité en ligne devient un atout majeur.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque des visiteurs préparent leur séjour.',
    'De l\'Arsenal aux thermes, du centre-ville aux stations balnéaires voisines, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des touristes.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Rochefort',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché rochefortais',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme patrimonial, commerces, thermes et services locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, réservations directes et notoriété locale',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie patrimoniale, contenu local et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour Rochefort',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de visiteurs à Rochefort',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un visiteur demande à ChatGPT "que visiter à Rochefort", le GEO assure que votre site ou activité soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Rochefort ?',
      description:
        'Avec l\'Hermione et la Corderie Royale, Rochefort attire des visiteurs passionnés d\'histoire maritime. Ces visiteurs utilisent de plus en plus l\'IA pour organiser leur séjour et découvrir les activités locales.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les IA. La combinaison de ces deux approches couvre l\'ensemble des comportements de recherche de vos prospects.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu patrimonial et touristique',
      description:
        'Les moteurs génératifs privilégient le contenu expert et culturel. Nos équipes créent des contenus qui valorisent l\'héritage rochefortais et répondent aux critères des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'L\'Hermione et la Corderie Royale attirent ensemble plus de 500 000 visiteurs par an, faisant de Rochefort un pôle touristique majeur de Charente-Maritime.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie pensée pour le marché rochefortais',
  subtitle:
    'Notre expertise du patrimoine et du tourisme nous permet de déployer des actions adaptées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché local',
      description:
        'Étude de la concurrence, identification des requêtes patrimoniales et touristiques, détection des opportunités de positionnement sur les thématiques maritimes.',
    },
    {
      icon: 'FileText',
      title: 'Contenu patrimonial authentique',
      description:
        'Production de contenus valorisant l\'histoire navale de Rochefort, le patrimoine local et l\'expertise de votre entreprise.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Performance mobile pour les touristes, données structurées Schema.org et vitesse de chargement optimale.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Stratégie de netlinking ciblant les sites patrimoniaux et touristiques de la région.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises rochefortaises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de Rochefort à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Tourisme & Patrimoine',
      description:
        'Sites touristiques, musées, guides et prestataires culturels souhaitant augmenter leur fréquentation.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Artisanat',
      description:
        'Boutiques du centre-ville, commerces de proximité et artisans locaux.',
    },
    {
      icon: 'Briefcase',
      title: 'Thermalisme & Bien-être',
      description:
        'Établissements thermaux, spas et prestataires de bien-être de la station thermale.',
    },
    {
      icon: 'Home',
      title: 'Hôtellerie & Restauration',
      description:
        'Hôtels, chambres d\'hôtes, restaurants et hébergements touristiques.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Échangeons pour définir une stratégie GEO & SEO adaptée.',
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
  title: 'Nos services GEO & SEO à Rochefort',
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
    { value: '25K', label: 'Habitants à Rochefort' },
    { value: '500K', label: 'Visiteurs patrimoniaux par an' },
    { value: '400', label: 'Ans d\'histoire navale' },
    { value: '+65%', label: 'Recherches sur mobile' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Rochefort',
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
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations et création de contenus.',
    },
    {
      number: 4,
      title: 'Mesure & Ajustement',
      description:
        'Suivi des indicateurs et optimisations continues.',
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
    ['Recherche type', '"visite Hermione Rochefort"', '"que visiter à Rochefort ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, expert, culturel'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Rochefort attire des passionnés d\'histoire qui préparent leur visite via l\'IA. Les entreprises qui maîtrisent le GEO captent ces visiteurs avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Rochefort',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important à Rochefort ?',
      answer:
        'Rochefort accueille plus de 500 000 visiteurs patrimoniaux par an. Un bon référencement vous permet de capter ces recherches touristiques et de développer votre clientèle locale.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Rochefort et son patrimoine maritime.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit généralement des résultats en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes.',
    },
    {
      question: 'Travaillez-vous avec le thermalisme ?',
      answer:
        'Oui, nous accompagnons les établissements thermaux et de bien-être de Rochefort pour développer leur visibilité en ligne.',
    },
    {
      question: 'Couvrez-vous les environs de Rochefort ?',
      answer:
        'Absolument. Nous pouvons étendre votre référencement aux communes voisines et aux stations balnéaires de la côte.',
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
  title: 'Prêt à développer votre visibilité à Rochefort ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée.',
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
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
  ],
};
