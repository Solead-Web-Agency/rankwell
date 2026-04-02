/**
 * DATA FR - Agence GEO & SEO en Nouvelle-Aquitaine
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Nouvelle-Aquitaine - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Nouvelle-Aquitaine. Optimisez votre visibilité sur Google et les moteurs IA de Bordeaux à Biarritz, de La Rochelle à Poitiers.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Nouvelle-Aquitaine' },
  ],
  badge: 'nouvelle-aquitaine',
  title: 'Agence GEO & SEO en Nouvelle-Aquitaine',
  description:
    'Plus grande région de France, la Nouvelle-Aquitaine offre une diversité économique remarquable : viticulture bordelaise, tourisme atlantique, industries aéronautiques et tertiaire de pointe. Notre agence accompagne les entreprises régionales dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Nouvelle-Aquitaine',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur un territoire aussi vaste exige une expertise régionale',
  paragraphs: [
    'La Nouvelle-Aquitaine concentre des économies diverses : l\'excellence viticole du Bordelais, le dynamisme touristique de la côte basque, l\'aéronautique à Pau et Bordeaux, et un tissu de PME innovantes. Cette variété crée des marchés digitaux spécifiques où la visibilité en ligne conditionne la croissance.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'De Bordeaux à Biarritz, de La Rochelle à Poitiers, de Limoges à Angoulême, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Nouvelle-Aquitaine',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA en Nouvelle-Aquitaine',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du vin, tourisme, industrie, services et commerces régionaux',
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
  title: 'Le GEO : révolution de la visibilité en Nouvelle-Aquitaine',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises néo-aquitaines',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un amateur de vin demande à ChatGPT "meilleur domaine viticole à visiter à Saint-Émilion", le GEO assure que votre château soit mentionné.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Nouvelle-Aquitaine ?',
      description:
        'Avec 30 millions de touristes par an et une économie diversifiée, la région voit ses prospects utiliser massivement l\'IA. Les moteurs génératifs recommandent directement domaines viticoles, hébergements et services professionnels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients régionaux et internationaux.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté aux filières régionales',
      description:
        'L\'IA privilégie le contenu expert et contextualisé. Nos équipes créent des contenus qui reflètent l\'excellence de votre entreprise et les spécificités de votre filière néo-aquitaine.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le poids économique de la Nouvelle-Aquitaine',
  text: 'Avec 6,15 millions d\'habitants et un PIB de 214 milliards d\'euros, la Nouvelle-Aquitaine est la 3e région économique de France. Plus grande région du pays par sa superficie (84 000 km²), elle génère près de 18 milliards d\'euros de consommation touristique annuelle, emploie 140 000 personnes dans le tourisme et concentre 17 000 emplois directs dans l\'aéronautique. Une diversité économique qui crée autant d\'opportunités digitales que de concurrence.',
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
    'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell pour les entreprises néo-aquitaines.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Se positionner sur un mot-clé qui ne génère pas de business n\'a aucun intérêt. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées au Search, coût d\'acquisition client. Pour un domaine viticole comme pour un sous-traitant aéronautique, on pilote par les résultats.',
    },
    {
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si votre stratégie fait fausse route, on vous le dit. Un partenaire qui acquiesce à tout ne vous fait pas avancer. Notre rôle, c\'est aussi de requestionner vos priorités pour concentrer l\'investissement là où le retour sera maximal sur votre marché néo-aquitain.',
    },
    {
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas de junior, pas d\'intermédiaire. Vous avez un interlocuteur unique qui connaît votre secteur, votre concurrence et les spécificités de votre marché régional dans le détail.',
    },
    {
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme propriétaire connecte vos données Search à vos résultats business en temps réel. Positions, citations IA, trafic, conversions : vous voyez l\'impact concret de chaque action. Pas de vanity metrics dans un rapport PDF mensuel, mais un tableau de bord vivant.',
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
    'Notre accompagnement s\'adresse aux entreprises néo-aquitaines qui veulent transformer leur visibilité digitale en résultats concrets.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne convertit pas assez. Vous cherchez un partenaire pour bâtir une stratégie Search qui génère des leads qualifiés et des ventes mesurables, pas seulement du trafic sans lendemain.',
    },
    {
      label: 'Vous cherchez une expertise GEO avant vos concurrents',
      description: 'Les IA conversationnelles redistribuent les cartes du Search. Vous voulez une agence qui sait optimiser pour ChatGPT et Perplexity, pas seulement pour les 10 liens bleus de Google. En Nouvelle-Aquitaine, peu d\'acteurs ont pris ce virage.',
    },
    {
      label: 'Viticulture, œnotourisme et filière viticole',
      description: 'Avec près de 25 000 emplois dans la filière viti-vinicole régionale, châteaux, domaines et prestataires œnotouristiques ont besoin d\'une présence digitale qui capte les visiteurs internationaux et développe la vente directe en ligne.',
    },
    {
      label: 'Aéronautique, industrie et services B2B',
      description: 'La construction aéronautique et spatiale représente 14 % des effectifs nationaux du secteur en Nouvelle-Aquitaine. Sous-traitants, équipementiers et prestataires B2B doivent être visibles sur les requêtes métier spécialisées, y compris via les IA.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte : l\'expertise, la méthode et les résultats prouvés sur des marchés exigeants.',
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
  title: 'Nos services GEO & SEO en Nouvelle-Aquitaine',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, analyse sémantique et étude concurrentielle adaptée à votre marché. On identifie ce qui freine votre visibilité et les leviers prioritaires pour l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage Schema.org et performance technique. Les fondations d\'un référencement durable et résistant aux évolutions algorithmiques.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Une stratégie sur mesure, sans pratiques douteuses ni réseaux de liens artificiels.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, structurés pour la citation par les IA. Du contenu qui se positionne et qui convertit, pas du remplissage.',
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
    'Une méthodologie éprouvée pour des résultats mesurables en Nouvelle-Aquitaine',
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
    ['Recherche type', '"château visite Saint-Émilion"', '"quel domaine visiter à Saint-Émilion ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Riche, structuré, expert'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, parts de réponse'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote: 'The most important thing you need is your curiosity. You\'re working, being a detective, and trying to understand what\'s happening under the hood.',
  author: 'Areej AbuAli',
  role: 'Founder Crawlina & Women in Tech SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Nouvelle-Aquitaine',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises en Nouvelle-Aquitaine ?',
      answer:
        'Oui, nous accompagnons des entreprises de toute la région : Bordeaux, La Rochelle, Biarritz, Pau, Poitiers, Limoges, Angoulême et au-delà. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email et téléphone. Notre mode de collaboration à distance couvre l\'ensemble du territoire néo-aquitain sans compromis sur la qualité.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en Nouvelle-Aquitaine ?',
      answer:
        'Nous intervenons dans tous les secteurs présents dans la région : viticulture et œnotourisme (Bordelais, Cognac), aéronautique et industrie (Bordeaux, Pau), tourisme atlantique et pyrénéen, services B2B, e-commerce et professions libérales. Le dénominateur commun : des entreprises qui veulent que leur visibilité digitale génère du business mesurable, pas seulement du trafic.',
    },
    {
      id: '3',
      question: 'Pourquoi investir dans le SEO et le GEO en Nouvelle-Aquitaine ?',
      answer:
        'La Nouvelle-Aquitaine est la 3e région économique de France avec un PIB de 214 milliards d\'euros, 32 millions de touristes par an et des filières d\'excellence reconnues mondialement (vin, aéronautique, tourisme). La concurrence digitale est proportionnelle à ce dynamisme. Investir dans le SEO et le GEO vous permet de capter efficacement vos cibles locales et internationales sur tous les canaux de recherche.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et en quoi c\'est différent du SEO ?',
      answer:
        'Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou Google AI Overviews. Le SEO vise les 10 liens bleus de Google. Les deux sont complémentaires : le GEO ne remplace pas le SEO, il l\'enrichit. Un domaine viticole optimisé en GEO sera recommandé quand un touriste demande à ChatGPT "quel château visiter à Saint-Émilion".',
    },
    {
      id: '5',
      question: 'Comment se déroule un accompagnement type ?',
      answer:
        'Premier échange de 30 minutes en visio pour comprendre vos enjeux, sans pitch commercial. Puis un audit complet de votre situation (SEO, GEO-readiness, technique, concurrence). Ensuite, une roadmap priorisée par impact business. Et l\'exécution avec un consultant senior dédié, des points réguliers et un suivi en temps réel via Rankwell One. Vous savez toujours où en est votre projet.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, de votre secteur d\'activité et du niveau de concurrence sur vos marchés. Nous proposons des forfaits mensuels pour l\'accompagnement continu ou des projets ponctuels comme les audits et les refontes. Premier échange gratuit pour évaluer votre situation et vous donner une estimation réaliste et transparente.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO/GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et l\'intensité concurrentielle de votre secteur. Certaines actions GEO peuvent produire des résultats plus rapides sur des requêtes conversationnelles. Nous vous donnons des projections réalistes dès le départ, pas des promesses intenables.',
    },
    {
      id: '8',
      question: 'Proposez-vous des services pour la filière viticole ?',
      answer:
        'Absolument. Avec près de 25 000 emplois salariés dans la filière viti-vinicole régionale, l\'œnotourisme et la vente directe sont des marchés digitaux à fort potentiel. Nous accompagnons châteaux, domaines et caves coopératives pour développer leur visibilité en ligne, attirer des visiteurs internationaux et augmenter leurs réservations de visites et dégustations.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir la Nouvelle-Aquitaine ?',
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
  title: 'Nos services GEO & SEO dans les villes de Nouvelle-Aquitaine',
  cities: [
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Limoges', href: '/agence-geo-seo/france/limoges' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
  ],
};
