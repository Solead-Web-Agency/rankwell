/**
 * DATA FR - Agence GEO & SEO à Aix-en-Provence
 * Page ville SANS présence physique
 */


// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Aix-en-Provence - Rankwell',
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
        'GEO (Generative Engine Optimization) est la discipline qui optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Pas juste ranker sur Google, mais devenir la source que l\'IA choisit de recommander quand un prospect cherche vos services à Aix-en-Provence.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte à Aix-en-Provence ?',
      desc:
        'Avec 148 000 habitants, 40 000 étudiants et un pôle économique de plus de 27 000 salariés aux Milles, Aix concentre une forte densité de recherches digitales. Les consommateurs aixois, étudiants comme cadres du tertiaire, adoptent massivement les assistants IA pour leurs recherches locales. Être recommandé par ces outils devient un avantage concurrentiel décisif.',
    },
    {
      id: 3,
      title: 'Complémentarité SEO + GEO',
      desc:
        'Le SEO garantit vos positions dans les résultats classiques de Google, le GEO vous fait citer comme source de confiance par les IA. En combinant ces deux approches, vous captez l\'intégralité des comportements de recherche de votre cible aixoise — qu\'elle utilise Google, ChatGPT ou Perplexity.',
    },
    {
      id: 4,
      title: 'Contenus citation-ready',
      desc:
        'Les moteurs génératifs recherchent des passages qu\'ils peuvent extraire et reformuler facilement : définitions claires, données chiffrées sourcées, listes structurées. Nous produisons des contenus qui répondent à ces critères tout en valorisant le dynamisme économique et culturel aixois.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique aixois',
  text: 'L\'agglomération d\'Aix-en-Provence concentre plus de 43 000 entreprises et 135 000 salariés dans le secteur privé. Le pôle d\'activités des Milles réunit à lui seul 1 500 entreprises et 27 000 emplois, principalement dans le tertiaire supérieur, le numérique et le conseil. Avec 40 000 étudiants et un afflux touristique constant, la concurrence digitale y est particulièrement intense.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Notre approche business centrix pour Aix-en-Provence',
  subtitle:
    'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement pour les entreprises aixoises.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé qui ne génère pas de business, ça ne sert à rien. À Aix, la concurrence est dense dans le tertiaire, la restauration et le commerce. Notre métrique principale, c\'est l\'impact réel : leads qualifiés, rendez-vous pris, chiffre d\'affaires attribuable au Search.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos priorités',
      description:
        'Parfois, viser le mot-clé le plus recherché n\'est pas la bonne stratégie. Si votre cible est le cadre du pôle des Milles, pas le touriste de passage, on adapte. Notre rôle, c\'est aussi de vous réorienter quand votre intuition ne colle pas aux données.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur unique qui connaît votre secteur et le tissu économique aixois, joignable en visio, par email ou téléphone.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Trafic qualifié, leads, citations IA : vous suivez l\'impact réel en temps réel, pas des vanity metrics dans un rapport mensuel. Chaque action est traçable et justifiée.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour vous ?',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider à Aix-en-Provence.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description:
        'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez un partenaire pour structurer et exécuter une stratégie Search efficace sur le marché aixois, que vous cibliez les particuliers ou le B2B.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement',
      description:
        'Vous lancez un nouveau site ou refondez l\'existant et voulez partir sur des bases SEO et GEO solides. L\'optimisation dès la conception évite les corrections coûteuses après coup et accélère votre montée en visibilité.',
    },
    {
      label: 'Tertiaire, conseil et numérique aixois',
      description:
        'Cabinets de conseil, ESN, startups du pôle des Milles ou de l\'Arbois : le tertiaire supérieur représente le poumon économique d\'Aix avec plus de 27 000 emplois. Le SEO et le GEO sont des leviers essentiels pour vous distinguer face à la concurrence métropolitaine.',
    },
    {
      label: 'Commerce, restauration et tourisme',
      description:
        'Boutiques du Cours Mirabeau, restaurants gastronomiques, hôtels de charme : Aix attire des millions de visiteurs chaque année. Le référencement capte ces recherches au moment où le consommateur décide, sur Google comme via les assistants IA.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes dépassées. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats mesurables.',
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
  title: 'Nos services GEO & SEO à Aix-en-Provence',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale sur le marché aixois.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie ce qui freine votre visibilité à Aix et les leviers d\'accélération prioritaires.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique et balisage Schema.org. Les fondations d\'une visibilité durable sur Google.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Stratégie sur mesure ciblant les médias régionaux et sites de référence, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu structuré qui se positionne sur Google et qui est cité par les IA. Pas du remplissage.',
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
      number: 350,
      suffix: '+',
      label: 'Clients accompagnés',
    },
    {
      id: 2,
      icon: 'Calendar',
      number: 8,
      suffix: ' ans',
      label: "D'expertise Search",
    },
    {
      id: 3,
      icon: 'ThumbsUp',
      number: 99,
      suffix: '%',
      label: 'Clients satisfaits',
    },
    {
      id: 4,
      icon: 'Target',
      number: 100,
      suffix: '%',
      label: 'Business centrix',
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
    'I personally believe that almost, if not all, of the core updates since early 2017 are focused on some element of E-E-A-T: Expertise, Experience, Authoritativeness, and Trust.',
  author: 'Marie Haynes',
  role: 'Fondatrice de Marie Haynes Consulting, experte Google Algorithms',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises à Aix-en-Provence ?',
      answer:
        'Oui, nous accompagnons des entreprises aixoises depuis plusieurs années. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. Aix-en-Provence concentre plus de 43 000 entreprises — la concurrence digitale y est forte, surtout dans le tertiaire et le commerce.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Aix-en-Provence ?',
      answer:
        'Nous travaillons avec des entreprises de tous secteurs : tertiaire supérieur et numérique (le poumon économique d\'Aix avec le pôle des Milles), commerces du centre-ville, hôtellerie-restauration, professions libérales, immobilier, santé. Le point commun : des entreprises qui veulent transformer leur visibilité digitale en chiffre d\'affaires.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer:
        'Premier échange en visio pour comprendre vos enjeux et votre marché. Audit complet de votre situation SEO et GEO-readiness. Roadmap avec priorités classées par impact business. Puis exécution avec un consultant senior dédié et des points réguliers. Vous suivez tout en temps réel via notre plateforme Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer:
        'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités comme source fiable par ces IA quand on leur pose des questions liées à votre expertise. C\'est le complément indispensable du SEO classique, et nous l\'intégrons dans tous nos projets.',
    },
    {
      id: '5',
      question: 'Couvrez-vous le Pays d\'Aix et la métropole ?',
      answer:
        'Absolument. Le Pays d\'Aix regroupe 36 communes et la métropole Aix-Marseille-Provence représente un bassin de 1,9 million d\'habitants. Nous adaptons le périmètre géographique à vos objectifs : référencement hyperlocal sur Aix centre, couverture du pôle des Milles ou rayonnement métropolitain plus large.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence sur le marché aixois. Nous proposons des forfaits mensuels ou des projets ponctuels (audit, accompagnement refonte). Le plus simple : un premier échange de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO/GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon le point de départ et l\'intensité concurrentielle de votre secteur à Aix. En SEA, les effets sont quasi immédiats. On vous donne des projections réalistes dès le départ et des indicateurs de progression sont mis en place dès le premier mois de collaboration.',
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
