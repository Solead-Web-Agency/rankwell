/**
 * DATA FR - Agence GEO & SEO à Avignon
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Avignon - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Avignon. Boostez votre visibilité sur Google et les moteurs IA pour conquérir le marché vauclusien et provençal.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Avignon' },
  ],
  badge: 'avignon',
  title: 'Agence GEO & SEO à Avignon',
  description:
    'Cité des Papes et capitale culturelle de la Provence, Avignon conjugue patrimoine historique exceptionnel et dynamisme économique. Notre agence accompagne les entreprises avignonnaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Avignon',
  accentColor: 'rw-blue' as const,
  title: 'Positionnez votre entreprise en tête des recherches à Avignon',
  paragraphs: [
    'Avignon rayonne au-delà de ses remparts grâce à son patrimoine UNESCO et son festival mondialement connu. Cette attractivité génère un flux touristique considérable et une économie locale diversifiée où la visibilité digitale devient un enjeu stratégique.',
    'Notre méthodologie associe le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque vos prospects recherchent vos services.',
    'Du Palais des Papes aux quartiers commerçants, de l\'intra-muros aux zones d\'activités périphériques, nous adaptons nos stratégies aux réalités avignonnaises et aux comportements de recherche locaux.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Avignon',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché avignonnais et vauclusien',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme, commerces, services culturels et entreprises locales',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et acquisition de clients provençaux',
    },
    {
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
  title: 'Le GEO : nouvelle dimension du référencement à Avignon',
  subtitle:
    'Le Generative Engine Optimization transforme la façon dont les entreprises avignonnaises captent leur audience',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un touriste demande à une IA « meilleur restaurant près du Palais des Papes », le GEO assure que votre établissement figure dans la réponse générée.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte à Avignon ?',
      desc: 'Avec 4 millions de visiteurs annuels et une agglomération de près de 200 000 habitants, Avignon concentre un flux massif de recherches digitales. Les touristes et résidents utilisent de plus en plus les assistants IA pour planifier sorties, réservations et achats. Être recommandé par ces outils devient un avantage concurrentiel décisif pour les commerces et prestataires locaux.',
    },
    {
      id: 3,
      title: 'Complémentarité SEO + GEO',
      desc: 'Le SEO garantit vos positions dans les résultats classiques de Google, le GEO vous fait citer comme source fiable par les IA. En combinant ces deux approches, vous couvrez l\'intégralité des comportements de recherche de votre cible avignonnaise, qu\'elle passe par Google, ChatGPT, Perplexity ou les AI Overviews.',
    },
    {
      id: 4,
      title: 'Contenus citation-ready',
      desc: 'Les moteurs génératifs recherchent des passages qu\'ils peuvent extraire et reformuler facilement : définitions claires, listes structurées, données chiffrées sourcées. Nous produisons des contenus qui valorisent le patrimoine et l\'économie avignonnaise tout en maximisant vos chances d\'être cité par les IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique avignonnais',
  text: 'Le Grand Avignon rassemble près de 200 000 habitants et plus de 90 000 emplois répartis dans 17 800 établissements. Les secteurs services, commerce, agroalimentaire, logistique et tourisme dominent l\'économie locale. Le Festival d\'Avignon attire chaque été plus de 700 000 spectateurs, générant 150 millions d\'euros de retombées. Une présence digitale solide est indispensable pour capter cette audience.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Notre approche business centrix pour Avignon',
  subtitle:
    'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement pour les entreprises avignonnaises.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être visible sur « Festival Avignon » sans générer de réservations, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées au Search, coût d\'acquisition. On cartographie la concurrence vauclusienne et on identifie les requêtes qui convertissent vraiment.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Si cibler les touristes n\'est pas pertinent pour votre activité B2B, on vous le dit. Un partenaire qui dit oui à tout n\'est pas un partenaire. On construit des stratégies alignées avec vos vrais enjeux commerciaux.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui réfléchit à votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur qui connaît le marché avignonnais et votre secteur dans le détail, joignable en visio, par email ou téléphone.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous suivez l\'impact réel en temps réel — trafic, leads, citations IA — pas des vanity metrics dans un rapport mensuel. Chaque euro investi est traçable.',
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
    'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider à Avignon.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description:
        'Votre site existe mais ne génère pas assez de leads ou de réservations. Vous cherchez un partenaire pour structurer et exécuter une stratégie Search efficace sur le marché avignonnais et vauclusien.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description:
        'Vous avez compris que ChatGPT et les IA changent la donne. Vous voulez une agence qui sait optimiser pour ces nouveaux moteurs, pas juste pour Google. À Avignon, avec 4 millions de visiteurs qui préparent leur séjour via l\'IA, c\'est un levier décisif.',
    },
    {
      label: 'Tourisme, culture et hôtellerie avignonnaise',
      description:
        'Hôtels, restaurants, musées, compagnies théâtrales, prestataires du Festival : vous dépendez des flux touristiques et des pics saisonniers. Le SEO et le GEO captent ces recherches en amont, quand le voyageur planifie son séjour.',
    },
    {
      label: 'Agroalimentaire et commerce vauclusien',
      description:
        'Domaines viticoles en Côtes du Rhône, producteurs locaux, commerces de l\'intra-muros : vous voulez toucher une clientèle locale et touristique. Le référencement naturel et l\'IA vous rendent visibles là où vos clients cherchent.',
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
  title: 'Nos services GEO & SEO à Avignon',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale sur le marché vauclusien.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité à Avignon et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage Schema.org et performance technique. Les fondations d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Stratégie sur mesure ciblant les médias provençaux et sites de référence, sans spam.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu qui se positionne sur Google et qui est cité par les IA. Pas du remplissage.',
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
    'Une méthodologie éprouvée pour des résultats mesurables à Avignon',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence avignonnaise et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et les spécificités du marché vauclusien.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Implémentation des recommandations techniques, création de contenus et développement de votre notoriété locale.',
    },
    {
      number: 4,
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
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Avignon ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel centre Avignon"', '"où dormir près du Palais des Papes ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, culturel, expert'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Optimize for citation-worthiness. Establish yourself as an authority in your field by making your unique selling proposition very clear and optimizing your web presence accordingly.',
  author: 'Aleyda Solís',
  role: 'Fondatrice d\'Orainti, European Search Personality of the Year 2018',
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
      question: 'Travaillez-vous avec des entreprises à Avignon ?',
      answer:
        'Oui, nous accompagnons des entreprises avignonnaises et vauclusiennes. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. Le Grand Avignon compte plus de 17 800 établissements — la concurrence digitale y est forte et nécessite une approche structurée.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Avignon ?',
      answer:
        'Nous travaillons avec des entreprises de tous secteurs : tourisme et hôtellerie (un pilier à Avignon avec 4 millions de visiteurs par an), commerce et artisanat de l\'intra-muros, agroalimentaire et viticulture en Côtes du Rhône, services professionnels B2B, logistique. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer:
        'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre situation SEO et GEO-readiness. Roadmap avec priorités classées par impact sur votre activité. Puis exécution avec un consultant senior dédié et des points réguliers. Vous suivez l\'avancement en temps réel via notre plateforme Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer:
        'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand on leur pose des questions liées à votre expertise. À Avignon, c\'est particulièrement pertinent car les touristes planifient de plus en plus via l\'IA.',
    },
    {
      id: '5',
      question: 'Proposez-vous des stratégies pour le Festival d\'Avignon ?',
      answer:
        'Absolument. Le Festival génère plus de 700 000 spectateurs et 150 millions d\'euros de retombées chaque été. Nous anticipons les pics de recherche plusieurs mois en amont, optimisons votre visibilité Google et IA pour capter le maximum de trafic qualifié pendant cette période stratégique. Le travail de fond en SEO et GEO se fait toute l\'année pour être prêt le jour J.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence sur le marché avignonnais. Nous proposons des forfaits mensuels ou des projets ponctuels (audit, refonte). Le plus simple : un premier échange de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO/GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon le point de départ et la concurrence. En SEA, les résultats sont plus rapides (quelques semaines). On vous donne des projections réalistes dès le départ, pas des promesses intenables. Des indicateurs de progression sont mis en place dès le premier mois.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Avignon ?',
  description:
    'Parlons de votre projet et construisons ensemble une stratégie GEO & SEO taillée pour le marché avignonnais.',
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
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Saint-Rémy-de-Provence', href: '/agence-geo-seo/france/saint-remy-de-provence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
