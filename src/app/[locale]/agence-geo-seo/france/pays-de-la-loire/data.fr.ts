/**
 * DATA FR - Agence GEO & SEO en Pays de la Loire
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Pays de la Loire - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Pays de la Loire. Optimisez votre visibilité sur Google et les moteurs IA de Nantes à Angers, du Mans à La Baule.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Pays de la Loire' },
  ],
  badge: 'pays-de-la-loire',
  title: 'Agence GEO & SEO en Pays de la Loire',
  description:
    'Région atlantique dynamique, les Pays de la Loire combinent métropole nantaise, patrimoine ligérien et littoral attractif. Notre agence accompagne les entreprises régionales dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur un territoire en plein essor',
  paragraphs: [
    'Les Pays de la Loire s\'affirment comme l\'une des régions les plus dynamiques de France, portée par Nantes devenue métropole d\'envergure européenne. Entre industrie navale, aéronautique, agroalimentaire et tourisme, la région offre un tissu économique diversifié.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'De Nantes à Angers, du Mans à La Baule, de Cholet à Saumur, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Pays de la Loire',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA en Pays de la Loire',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Industrie, commerce, tourisme littoral et services régionaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, leads locaux et visibilité multi-territoire',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, optimisation technique, contenu stratégique et suivi continu',
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
  title: 'Le GEO : révolution de la visibilité en Pays de la Loire',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises ligériennes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un touriste demande à ChatGPT "meilleur restaurant à La Baule", le GEO assure que votre établissement soit mentionné.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Pays de la Loire ?',
      description:
        'Avec une économie diversifiée et un tourisme littoral attractif, la région voit ses prospects utiliser massivement l\'IA. Les moteurs génératifs recommandent directement hébergements, restaurants et services professionnels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté aux filières régionales',
      description:
        'L\'IA privilégie le contenu expert et contextualisé. Nos équipes créent des contenus qui reflètent l\'excellence de votre entreprise et les spécificités ligériennes.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le dynamisme économique des Pays de la Loire',
  text: 'Avec un PIB de 137 milliards d\'euros et 3,8 millions d\'habitants, les Pays de la Loire affichent la 2e croissance régionale de France (+3,3 % par an entre 2015 et 2022). Nantes concentre 270 startups et se classe 1re ville française pour la création d\'emplois numériques. Saint-Nazaire abrite les Chantiers de l\'Atlantique, leader mondial de la construction de paquebots. Industrie, numérique, agroalimentaire : la concurrence digitale reflète ce dynamisme.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Notre approche business centrix',
  subtitle:
    'Beaucoup d\'agences parlent de résultats. Voici ce que ça signifie concrètement chez Rankwell pour les entreprises ligériennes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Ranker sur un mot-clé qui ne génère pas de chiffre d\'affaires n\'a aucune valeur. Notre métrique principale, c\'est l\'impact sur votre activité : leads qualifiés, ventes attribuées, coût d\'acquisition. Que vous soyez industriel à Saint-Nazaire ou éditeur SaaS à Nantes, on pilote par les résultats business.',
    },
    {
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle, c\'est aussi de vous alerter quand votre stratégie fait fausse route. Un partenaire qui valide tout sans esprit critique ne vous fait pas progresser. On concentre l\'effort là où le retour sera maximal.',
    },
    {
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui conçoit votre stratégie Search est celui qui la met en œuvre. Pas de junior affecté à votre dossier, pas d\'intermédiaire. Vous avez un interlocuteur unique, expert de votre secteur, qui connaît les enjeux spécifiques de votre marché ligérien.',
    },
    {
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme propriétaire connecte vos données Search à vos résultats business. Positions, citations IA, conversions : tout est visible en temps réel. Pas de rapport mensuel statique, mais un tableau de bord vivant partageable avec votre équipe de direction.',
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
    'Notre accompagnement s\'adresse aux entreprises ligériennes qui veulent convertir leur visibilité digitale en croissance mesurable.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site ne génère pas suffisamment de leads ou de ventes. Vous cherchez un partenaire capable de structurer une stratégie Search efficace, mesurable et directement connectée à vos objectifs de croissance commerciale.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement de site',
      description: 'Vous lancez un nouveau site ou refondez l\'existant. Intégrer le SEO et le GEO dès la conception vous fait gagner des mois de visibilité et évite les corrections techniques coûteuses après le lancement.',
    },
    {
      label: 'Industrie navale, aéronautique et sous-traitance',
      description: 'Saint-Nazaire et son complexe industrialo-portuaire emploient 28 700 salariés. Chantiers navals, équipementiers aéronautiques et sous-traitants industriels ont besoin d\'être trouvés sur les requêtes métier spécialisées, y compris via les réponses IA.',
    },
    {
      label: 'Numérique, startups et SaaS nantaises',
      description: 'Nantes est classée 1re ville française pour la création d\'emplois dans le numérique, avec 270 startups et 2 000 diplômés par an dans la tech. Ces acteurs ont besoin d\'une acquisition organique solide pour scaler au-delà du marché local.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte : l\'expertise, la méthodologie et les résultats prouvés auprès de plus de 350 clients.',
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
  title: 'Nos services GEO & SEO en Pays de la Loire',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, analyse sémantique et étude concurrentielle sur votre marché ligérien. On identifie les freins à votre visibilité et les leviers d\'accélération prioritaires.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage structuré et performance. Les fondations d\'un référencement solide qui résiste aux évolutions de Google et des IA.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Stratégie sur mesure, zéro pratique douteuse, uniquement des sources pertinentes et fiables.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, conçus pour être cités par les IA et convertir vos visiteurs. Du contenu expert, pas du remplissage de mots-clés.',
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
    'Une méthodologie éprouvée pour des résultats mesurables en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents régionaux et identification des opportunités sur vos marchés locaux.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et les spécificités de votre territoire.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus et développement de votre autorité régionale.',
    },
    {
      number: 4,
      title: 'Mesure & Amélioration',
      description:
        'Suivi des KPIs, reporting transparent et ajustements stratégiques pour une progression continue.',
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
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"restaurant La Baule"', '"où manger à La Baule ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Riche, structuré, expert'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, parts de réponse'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote: 'A lack of strategy is why SEO recommendations don\'t get prioritized and why SEO teams get marginalized. Creating a strategy is work. Valuable work.',
  author: 'Tom Critchlow',
  role: 'Founder SEO MBA',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises en Pays de la Loire ?',
      answer:
        'Oui, nous accompagnons des entreprises de toute la région : Nantes, Angers, Le Mans, La Baule, Cholet, Saumur, Saint-Nazaire et au-delà. Visioconférences régulières, accès à Rankwell One pour le suivi en temps réel, consultant senior dédié. Notre mode de collaboration à distance est éprouvé auprès de plus de 350 clients en France, avec la même exigence de qualité qu\'en présentiel.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en Pays de la Loire ?',
      answer:
        'Nous intervenons dans les secteurs clés de la région : industrie navale et aéronautique (Saint-Nazaire, Nantes), agroalimentaire, numérique et startups, tourisme littoral et fluvial, services B2B et e-commerce. Le dénominateur commun de nos clients : des entreprises qui veulent convertir leur visibilité Search en résultats business concrets et mesurables.',
    },
    {
      id: '3',
      question: 'Pourquoi investir dans le SEO et le GEO en Pays de la Loire ?',
      answer:
        'Les Pays de la Loire affichent la 2e croissance régionale de France avec un PIB de 137 milliards d\'euros. Nantes est un hub numérique majeur, Saint-Nazaire un pôle industriel de premier plan. Cette dynamique crée une concurrence digitale intense. Combiner SEO et GEO vous permet de capter vos cibles sur Google et sur les moteurs IA, avant vos concurrents régionaux.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi ça change la donne ?',
      answer:
        'Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par ChatGPT, Perplexity ou Google AI Overviews. Quand un prospect demande à une IA "quel chantier naval construit les plus grands paquebots" ou "meilleur prestataire SaaS à Nantes", le GEO fait en sorte que votre entreprise soit mentionnée. C\'est un levier nouveau que très peu d\'entreprises ligériennes exploitent.',
    },
    {
      id: '5',
      question: 'Comment se déroule un accompagnement type ?',
      answer:
        'Premier échange en visio de 30 minutes pour comprendre vos enjeux, sans pitch commercial. Puis un audit complet : SEO technique, GEO-readiness, analyse concurrentielle. Ensuite, une roadmap priorisée par impact sur votre chiffre d\'affaires. Et enfin l\'exécution avec un consultant senior dédié et un suivi transparent via Rankwell One.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, de votre secteur d\'activité et du niveau de concurrence. Nous travaillons sur des forfaits mensuels pour l\'accompagnement continu ou des projets ponctuels (audits, refontes). Le plus simple : un premier échange gratuit pour évaluer votre situation et recevoir une estimation claire et sans engagement.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO/GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et la concurrence dans votre secteur. En SEA (publicité Google), les retours sont plus rapides, de l\'ordre de quelques semaines. Nous établissons des projections réalistes dès le départ, avec des indicateurs de progression visibles dès le premier mois.',
    },
    {
      id: '8',
      question: 'Pourquoi choisir Rankwell plutôt qu\'une agence locale nantaise ?',
      answer:
        'La proximité géographique ne garantit pas la compétence ni les résultats. Rankwell accompagne plus de 350 entreprises en France depuis 2017. Notre expertise GEO, notre approche business centrix et notre plateforme Rankwell One sont des atouts que peu d\'agences locales peuvent proposer. Ce qui compte : la méthode, les compétences et la capacité à générer du business mesurable.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir les Pays de la Loire ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée à votre territoire.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans les villes des Pays de la Loire',
  cities: [
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Le Mans', href: '/agence-geo-seo/france/le-mans' },
    { label: 'Cholet', href: '/agence-geo-seo/france/cholet' },
    { label: 'Saumur', href: '/agence-geo-seo/france/saumur' },
    { label: 'La Baule', href: '/agence-geo-seo/france/la-baule' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
  ],
};
