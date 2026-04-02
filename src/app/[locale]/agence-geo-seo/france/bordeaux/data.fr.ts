/**
 * DATA FR - Agence GEO & SEO à Bordeaux
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Bordeaux - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Bordeaux. Boostez votre visibilité sur Google et les moteurs IA pour conquérir le marché bordelais et la Nouvelle-Aquitaine.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Bordeaux' },
  ],
  badge: 'bordeaux',
  title: 'Agence GEO & SEO à Bordeaux',
  description:
    'Métropole dynamique et capitale mondiale du vin, Bordeaux conjugue patrimoine UNESCO et économie numérique en plein essor. Notre agence accompagne les entreprises bordelaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Bordeaux',
  accentColor: 'rw-blue' as const,
  title: 'Le référencement à Bordeaux requiert une approche sur mesure',
  paragraphs: [
    'Bordeaux s\'est imposée comme l\'une des métropoles les plus attractives de France, attirant entreprises, talents et touristes du monde entier. Cette dynamique crée un environnement digital compétitif où la visibilité en ligne devient un enjeu stratégique majeur.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques avancées du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'Du quartier des Chartrons à Mériadeck, de la Cité du Vin aux zones d\'activités de la métropole, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des Bordelais.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Bordeaux',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché bordelais',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'PME bordelaises, acteurs du vin, services B2B et commerces locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et génération de leads',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit approfondi, optimisation complète, contenu local et suivi des performances',
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
  title: 'Le GEO : nouvelle ère du référencement à Bordeaux',
  subtitle:
    'Le Generative Engine Optimization redéfinit la captation de clientèle pour les entreprises bordelaises',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un œnophile demande à ChatGPT "meilleur château à visiter à Saint-Émilion", le GEO assure que votre domaine soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Bordeaux ?',
      description:
        'Avec 6 millions de visiteurs annuels et un tissu économique en croissance, Bordeaux voit ses consommateurs adopter massivement les assistants IA. Être recommandé par ces outils devient un avantage concurrentiel décisif.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = visibilité maximale',
      description:
        'Le SEO garantit vos positions sur Google, le GEO vous fait recommander par l\'IA. En associant ces deux expertises, vous captez l\'ensemble des canaux de recherche utilisés par votre cible bordelaise.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu pensé pour l\'IA',
      description:
        'Les moteurs génératifs favorisent le contenu structuré, factuel et expert. Nos équipes produisent des contenus répondant à ces critères tout en valorisant l\'identité bordelaise de votre entreprise.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique bordelais',
  text: 'Bordeaux Métropole regroupe 750 000 habitants sur 28 communes et 77 000 entreprises. 7e métropole de France, elle a attiré 91,2 M€ d\'investissements en 2024 (+122 %). Ses moteurs économiques — vin et œnotourisme, aéronautique, spatial et défense, numérique — génèrent 40 000 emplois industriels et 1,8 Md€ de valeur ajoutée.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché bordelais',
  subtitle:
    'Notre connaissance du tissu économique girondin nous permet de déployer des actions parfaitement ciblées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché bordelais',
      description:
        'Cartographie de la concurrence locale, identification des requêtes propres à Bordeaux et sa métropole, détection des opportunités de positionnement sur les thématiques locales.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le territoire',
      description:
        'Rédaction de contenus valorisant l\'identité bordelaise, les spécificités locales et l\'expertise de votre entreprise. Des articles et pages pensés pour le référencement et l\'engagement.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des temps de chargement, architecture de site orientée SEO, données structurées Schema.org et expérience mobile irréprochable. Chaque détail technique est un levier de performance.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Développement de liens depuis des sites bordelais reconnus, présence sur les annuaires locaux et partenariats éditoriaux avec des acteurs du territoire girondin.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises bordelaises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de la métropole à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description:
        'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez une stratégie SEO et GEO structurée pour transformer votre présence en ligne en véritable canal d\'acquisition sur le marché bordelais.',
    },
    {
      label: 'Vous préparez une refonte ou un repositionnement',
      description:
        'Migration de site, changement de marque ou pivot stratégique : vous avez besoin d\'un accompagnement pour préserver votre référencement acquis et saisir l\'opportunité de gagner en visibilité sur les moteurs IA.',
    },
    {
      label: 'Vin et œnotourisme',
      description:
        'Châteaux, négoce, caves et prestataires œnotouristiques du Bordelais. Le GEO est un levier décisif quand un voyageur demande à une IA « quel domaine visiter près de Saint-Émilion » et que votre nom doit apparaître.',
    },
    {
      label: 'Services professionnels et B2B',
      description:
        'Cabinets de conseil, ESN, professions réglementées et sous-traitants industriels de la métropole. Le SEO capte la demande existante, le GEO positionne votre expertise dans les réponses conversationnelles des décideurs.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est la méthodologie, la transparence des résultats et la capacité à comprendre votre marché. Nous travaillons avec des entreprises bordelaises depuis nos bureaux — et nos résultats parlent d\'eux-mêmes.',
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
  title: 'Nos services GEO & SEO à Bordeaux',
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
    'Une méthodologie éprouvée pour des résultats mesurables à Bordeaux',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence bordelaise et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et les spécificités du marché girondin.',
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
  title: 'SEO vs GEO : quelle stratégie pour votre entreprise bordelaise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"château visite Saint-Émilion"', '"quel château visiter à Saint-Émilion ?"'],
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
    'The objective is not to make your links appear natural; the objective is that your links are natural.',
  author: 'Matt Cutts',
  role: 'Ancien responsable Webspam, Google',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Bordeaux',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 'faq-1',
      question: 'Pourquoi le SEO est-il crucial pour une entreprise bordelaise ?',
      answer:
        'Bordeaux Métropole concentre 750 000 habitants, 77 000 entreprises et accueille 6 millions de visiteurs par an. Cette densité économique crée une concurrence digitale féroce : sans référencement structuré, votre entreprise reste invisible face à des concurrents qui investissent déjà. Le SEO transforme cette pression concurrentielle en opportunité en vous positionnant exactement là où vos prospects cherchent.',
    },
    {
      id: 'faq-2',
      question: 'Comment le GEO peut-il aider mon entreprise à Bordeaux ?',
      answer:
        'Le GEO optimise votre présence dans les réponses générées par ChatGPT, Perplexity et Google SGE. Concrètement, quand un utilisateur demande « meilleur prestataire [votre secteur] à Bordeaux », votre entreprise apparaît dans la recommandation. C\'est un canal d\'acquisition complémentaire au SEO qui capte une audience en forte croissance, notamment parmi les décideurs B2B et les jeunes professionnels bordelais.',
    },
    {
      id: 'faq-3',
      question: 'Combien de temps pour voir des résultats à Bordeaux ?',
      answer:
        'Le SEO produit des résultats mesurables entre 3 et 6 mois selon la compétitivité de votre secteur et l\'état initial de votre site. Le GEO peut générer des mentions IA plus rapidement, parfois sous 4 à 8 semaines, car les moteurs génératifs réévaluent leurs sources en continu. Nous installons un tableau de bord dès le premier mois pour suivre chaque indicateur de progression.',
    },
    {
      id: 'faq-4',
      question: 'Travaillez-vous avec le secteur viticole ?',
      answer:
        'Oui, le vin et l\'œnotourisme sont des secteurs clés de notre accompagnement bordelais. Nous aidons châteaux, négociants et caves à développer la vente directe, les réservations de visites et la notoriété internationale. Le GEO est particulièrement puissant ici : quand un touriste demande à une IA « quel domaine visiter près de Saint-Émilion », être recommandé change la donne.',
    },
    {
      id: 'faq-5',
      question: 'Proposez-vous un accompagnement pour toute la métropole ?',
      answer:
        'Absolument. Notre stratégie couvre Bordeaux centre comme les 28 communes de la métropole : Mérignac, Pessac, Talence, Bègles, Villenave-d\'Ornon, Gradignan, etc. Le SEO local permet de cibler des périmètres géographiques précis, tandis que le GEO capte les requêtes conversationnelles qui ne mentionnent pas toujours une commune mais décrivent un besoin dans la zone bordelaise.',
    },
    {
      id: 'faq-6',
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés qui interrogent régulièrement les IA (ChatGPT, Perplexity, Google SGE) sur les requêtes stratégiques de votre secteur. Nous analysons la fréquence de vos mentions, le contexte dans lequel vous êtes cité, et la part de voix face à vos concurrents. Ces données alimentent un reporting mensuel qui oriente les ajustements stratégiques.',
    },
    {
      id: 'faq-7',
      question: 'Comment le GEO s\'applique-t-il au secteur du tourisme et de l\'œnotourisme bordelais ?',
      answer:
        'Le tourisme bordelais — Cité du Vin, route des châteaux, gastronomie — génère des millions de requêtes conversationnelles sur les IA. Le GEO structure votre contenu pour que les moteurs génératifs vous recommandent comme référence locale. Nous travaillons les données structurées, les avis, les guides experts et les partenariats éditoriaux pour maximiser votre visibilité dans ces réponses IA à forte intention de conversion.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Bordeaux ?',
  description:
    'Parlons de votre projet et construisons ensemble une stratégie GEO & SEO taillée pour le marché bordelais.',
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
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
  ],
};
