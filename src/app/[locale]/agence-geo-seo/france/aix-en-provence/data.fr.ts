/**
 * DATA FR - Agence GEO & SEO à Aix-en-Provence
 * Page ville SANS présence physique
 */


// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Aix-en-Provence | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Aix-en-Provence. Boostez votre visibilité sur Google et les moteurs IA pour conquérir le marché aixois et provençal.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Aix-en-Provence' },
  ],
  badge: 'aix-en-provence',
  title: 'Agence GEO & SEO à Aix-en-Provence',
  description:
    'Ville d\'art et d\'histoire au cœur de la Provence, Aix-en-Provence conjugue patrimoine culturel et dynamisme économique. Notre agence accompagne les entreprises aixoises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Aix-en-Provence',
  accentColor: 'rw-blue' as const,
  title: 'Positionnez votre entreprise en tête des recherches à Aix-en-Provence',
  paragraphs: [
    'Aix-en-Provence réunit un patrimoine exceptionnel, une vie étudiante dynamique et un tissu économique florissant. Ce mélange unique crée un environnement concurrentiel où la visibilité digitale fait la différence entre les entreprises qui prospèrent et celles qui stagnent.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques avancées du GEO (Generative Engine Optimization). Vous serez ainsi présent sur Google et recommandé par ChatGPT, Perplexity ou Google SGE lorsque vos prospects recherchent vos services.',
    'Du Cours Mirabeau aux zones d\'activités périphériques, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche spécifiques des Aixois et des visiteurs de la région.',
  ],
  tocItems: [
    { id: 'recap', label: 'En bref', icon: 'FileText' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO', icon: 'Lightbulb' },
    { id: 'approche', label: 'Notre approche', icon: 'Target' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'expertises', label: 'Nos expertises', icon: 'Layers' },
    { id: 'process', label: 'Notre process', icon: 'Settings' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
  ],
};

// ============================================
// RECAP BOX DATA
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'L\'essentiel de notre service GEO & SEO à Aix-en-Provence',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché aixois et provençal',
    },
    {
      id: 2,
      icon: 'Users',
      title: 'Pour qui',
      description: 'Commerces aixois, professions libérales, services et entreprises régionales',
    },
    {
      id: 3,
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et acquisition de clients provençaux',
    },
    {
      id: 4,
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie locale, contenu optimisé et mesure des résultats',
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
  title: 'Le GEO : nouvelle dimension du référencement à Aix-en-Provence',
  subtitle:
    'Le Generative Engine Optimization transforme la façon dont les entreprises aixoises captent leur audience',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc:
        'Le GEO (Generative Engine Optimization) désigne l\'optimisation pour les moteurs alimentés par l\'IA. Quand quelqu\'un demande à ChatGPT "meilleur restaurant gastronomique à Aix-en-Provence", le GEO assure que votre établissement figure dans la réponse.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte à Aix-en-Provence ?',
      desc:
        'Avec ses 40 000 étudiants et son attrait touristique, Aix voit ses consommateurs adopter massivement les assistants IA. Être recommandé par ces outils devient un avantage concurrentiel majeur pour les entreprises locales.',
    },
    {
      id: 3,
      title: 'Complémentarité SEO + GEO',
      desc:
        'Le SEO garantit vos positions sur Google, le GEO vous fait recommander par l\'IA. En associant ces deux approches, vous captez l\'intégralité des flux de recherche de votre cible aixoise.',
    },
    {
      id: 4,
      title: 'Contenus adaptés aux IA',
      desc:
        'Les moteurs génératifs favorisent le contenu structuré, factuel et contextualisé. Nos équipes produisent des contenus répondant à ces critères tout en valorisant l\'identité provençale de votre entreprise.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Aix-en-Provence est la plus grande ville étudiante de France après Paris, avec 40 000 étudiants pour 145 000 habitants.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché aixois',
  subtitle:
    'Notre expertise provençale nous permet de déployer des actions parfaitement adaptées à Aix-en-Provence',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Analyse du marché aixois',
      description:
        'Cartographie de la concurrence locale, identification des requêtes propres à Aix-en-Provence et détection des opportunités de positionnement sur le marché provençal.',
    },
    {
      id: 2,
      icon: 'FileText',
      title: 'Contenu ancré en Provence',
      description:
        'Production de contenus valorisant l\'identité aixoise, les spécificités locales et l\'expertise de votre entreprise. Articles et pages pensés pour le référencement et l\'engagement.',
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des temps de chargement, architecture de site orientée SEO, données structurées Schema.org et expérience mobile irréprochable.',
    },
    {
      id: 4,
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Développement de liens depuis des sites aixois et provençaux reconnus, présence sur les annuaires locaux et partenariats avec des acteurs du territoire.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises aixoises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques d\'Aix-en-Provence à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Hôtellerie & Restauration',
      description:
        'Hôtels, restaurants, traiteurs et établissements touristiques souhaitant augmenter leurs réservations directes.',
    },
    {
      label: 'Commerce & Artisanat',
      description:
        'Boutiques du centre-ville, commerces de quartier et artisans provençaux cherchant à développer leur clientèle.',
    },
    {
      label: 'Professions libérales',
      description:
        'Avocats, médecins, architectes, experts-comptables et consultants ciblant la clientèle aixoise.',
    },
    {
      label: 'Immobilier & Services',
      description:
        'Agences immobilières, courtiers et prestataires de services aux particuliers et entreprises.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'applique à tous les domaines d\'activité. Échangeons sur vos enjeux pour définir une stratégie GEO & SEO adaptée à votre entreprise aixoise.',
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
  title: 'Nos services GEO & SEO à Aix-en-Provence',
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
// CHIFFRES DATA
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      number: 145,
      suffix: 'K',
      label: 'Habitants à Aix-en-Provence',
    },
    {
      id: 2,
      icon: 'GraduationCap',
      number: 40,
      suffix: 'K',
      label: 'Étudiants dans la ville',
    },
    {
      id: 3,
      icon: 'TrendingUp',
      number: 3,
      suffix: 'M',
      label: 'Visiteurs annuels au Pays d\'Aix',
    },
    {
      id: 4,
      icon: 'Smartphone',
      number: 55,
      suffix: '%',
      label: 'Recherches locales sur mobile',
    },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Aix-en-Provence',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence aixoise et identification des opportunités de croissance digitale.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et les spécificités du marché provençal.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Déploiement & Optimisation',
      description:
        'Implémentation des recommandations techniques, création de contenus et développement de votre notoriété locale.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Mesure & Ajustement',
      description:
        'Suivi des indicateurs clés, reporting régulier et optimisations continues pour maximiser votre ROI.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Aix ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"avocat droit des affaires Aix"', '"quel avocat d\'affaires choisir à Aix ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, factuel, expert'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'À Aix-en-Provence, où tradition et modernité se côtoient, les entreprises qui adoptent le GEO dès maintenant prennent une avance décisive. L\'IA redéfinit les recherches locales.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Aix-en-Provence',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Pourquoi le SEO est-il important pour une entreprise à Aix-en-Provence ?',
      answer:
        'Aix-en-Provence est une ville dynamique avec une forte concurrence dans de nombreux secteurs. Un bon référencement vous permet de capter les recherches des 145 000 habitants, des 40 000 étudiants et des millions de visiteurs annuels.',
    },
    {
      id: '2',
      question: 'Comment le GEO peut-il aider mon entreprise à Aix ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Aix. Si quelqu\'un demande "meilleur traiteur à Aix-en-Provence" à ChatGPT, votre entreprise pourra être mentionnée si votre contenu est optimisé.',
    },
    {
      id: '3',
      question: 'Combien de temps pour voir des résultats à Aix-en-Provence ?',
      answer:
        'Le SEO produit généralement des résultats visibles en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes. Nous mettons en place des indicateurs de progression dès le premier mois.',
    },
    {
      id: '4',
      question: 'Travaillez-vous avec tous les secteurs d\'activité ?',
      answer:
        'Oui, nous accompagnons des entreprises de tous secteurs à Aix-en-Provence : hôtellerie-restauration, commerce, services B2B, immobilier, professions libérales, santé, etc.',
    },
    {
      id: '5',
      question: 'Proposez-vous un accompagnement pour le Pays d\'Aix ?',
      answer:
        'Absolument. Nous pouvons étendre votre référencement aux communes du Pays d\'Aix et de la métropole. Le SEO local permet d\'optimiser votre visibilité sur des périmètres géographiques étendus.',
    },
    {
      id: '6',
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos mentions dans les réponses des IA (ChatGPT, Perplexity, Google SGE). Nous analysons les requêtes où vous êtes cité et mesurons l\'évolution de votre visibilité sur ces nouveaux canaux.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Aix-en-Provence ?',
  description:
    'Parlons de votre projet et construisons ensemble une stratégie GEO & SEO taillée pour le marché aixois.',
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
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
