/**
 * DATA FR - Agence GEO & SEO en Corse
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Corse - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Corse. Optimisez votre visibilité sur Google et les moteurs IA d\'Ajaccio à Bastia, de Porto-Vecchio à Calvi.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Corse' },
  ],
  badge: 'corse',
  title: 'Agence GEO & SEO en Corse',
  description:
    'Île de beauté aux paysages exceptionnels, la Corse attire chaque année des millions de visiteurs. Notre agence accompagne les entreprises insulaires dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Corse',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur l\'île de beauté',
  paragraphs: [
    'La Corse conjugue nature préservée, patrimoine culturel unique et tourisme de qualité. Entre montagnes et mer, l\'île attire une clientèle internationale exigeante, en quête d\'authenticité et de dépaysement.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'D\'Ajaccio à Bastia, de Porto-Vecchio à Calvi, de Bonifacio à Corte, nous adaptons nos stratégies aux particularités du marché insulaire et aux attentes de votre clientèle touristique.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Corse',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA sur le marché corse',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Tourisme, hôtellerie, immobilier et services aux visiteurs',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, réservations directes et visibilité internationale',
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
  title: 'Le GEO : révolution de la visibilité en Corse',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises corses',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un voyageur demande à ChatGPT « meilleur hôtel à Porto-Vecchio » ou à Perplexity « où randonner en Corse du Sud », le GEO garantit que votre établissement soit cité dans la réponse, pas noyé dans une liste de liens.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Corse ?',
      description:
        'Le tourisme génère 3,5 milliards d\'euros par an et représente 39 % du PIB insulaire. En 2024, la fréquentation a bondi de 6,7 % avec 9,9 millions de nuitées enregistrées. Les visiteurs planifient de plus en plus leurs séjours via les assistants IA — être recommandé directement par ces moteurs, c\'est capter cette clientèle avant vos concurrents.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne dans les résultats Google classiques, le GEO vous fait recommander dans les réponses conversationnelles des IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients — ceux qui tapent « camping Corse » sur Google comme ceux qui demandent des recommandations à ChatGPT.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu ancré dans le territoire',
      description:
        'Les moteurs IA privilégient le contenu expert et contextualisé localement. Nous créons des contenus qui reflètent l\'authenticité corse — terroir, savoir-faire artisanal, géographie singulière — et structurés pour être facilement extractibles et cités par les algorithmes de génération de réponses.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'L\'économie corse en chiffres',
  text: 'Le tourisme pèse 3,5 milliards d\'euros par an, soit 39 % du PIB insulaire. La Corse compte plus de 18 000 établissements actifs et 120 000 salariés — 95 % sont des micro-entreprises et PME. Dans un tissu économique aussi dense, la visibilité digitale est devenue le premier levier de différenciation, de la haute saison estivale au reste de l\'année.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée au marché corse',
  subtitle:
    'Notre expertise insulaire nous permet de déployer des stratégies calibrées pour chaque territoire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché insulaire',
      description:
        'Étude approfondie de votre positionnement face aux concurrents locaux et nationaux. Analyse des requêtes spécifiques par micro-région (Corse-du-Sud, Haute-Corse, Balagne, extrême sud) et cartographie des opportunités saisonnières pour anticiper les pics de recherche.',
    },
    {
      icon: 'FileText',
      title: 'Contenu à forte valeur touristique',
      description:
        'Création de contenus valorisant l\'authenticité corse et votre expertise métier. Articles de fond, guides locaux, landing pages multi-destinations — chaque contenu est structuré pour être citation-ready et repris par les moteurs IA lorsqu\'un voyageur planifie son séjour sur l\'île.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique rigoureuse',
      description:
        'Performance mobile prioritaire (80 % des recherches touristiques se font sur smartphone), données structurées Schema.org pour les établissements et activités, vitesse de chargement optimale et architecture de site pensée pour le SEO local multi-destinations insulaires.',
    },
    {
      icon: 'Award',
      title: 'Renforcement de l\'autorité territoriale',
      description:
        'Stratégie de netlinking ciblée avec des médias régionaux (Corse Matin, France 3 Corse), partenariats avec les offices de tourisme d\'Ajaccio, Bastia et Porto-Vecchio, et développement de votre présence sur les plateformes et annuaires de référence en Corse.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises ciblées en Corse',
  subtitle:
    'Nous accompagnons les acteurs économiques insulaires dans leur conquête de visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter la clientèle touristique en ligne',
      description:
        'Votre établissement ou activité dépend du flux saisonnier. Vous cherchez à maximiser les réservations directes et réduire votre dépendance aux plateformes intermédiaires comme Booking ou TripAdvisor grâce à un référencement performant.',
    },
    {
      label: 'Vous préparez la saison suivante',
      description:
        'Le SEO se travaille en amont. Vous souhaitez anticiper la haute saison en construisant dès maintenant une visibilité durable sur les requêtes touristiques liées à la Corse, de la Balagne à l\'extrême sud.',
    },
    {
      label: 'Hôtellerie, restauration et activités de plein air',
      description:
        'Hôtels, résidences, campings, restaurants, prestataires nautiques ou de randonnée : vous opérez dans les secteurs clés du tourisme corse et la concurrence digitale y est intense, notamment sur les requêtes localisées.',
    },
    {
      label: 'Artisanat, terroir et services insulaires',
      description:
        'Producteurs locaux, artisans, agences immobilières, conciergeries : l\'économie corse repose sur 95 % de micro-entreprises. Le référencement est votre meilleur levier pour vous démarquer sans budget publicitaire massif.',
    },
  ],
  ctaTitle: 'Votre secteur ne figure pas dans cette liste ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Contactez-nous pour évaluer comment le GEO et le SEO peuvent propulser votre entreprise en Corse.',
  ctaButtonText: 'Échanger sur votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO en Corse',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel adapté au contexte insulaire. On identifie les freins à votre visibilité et les opportunités face aux concurrents locaux et nationaux.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture multi-destinations, balisage structuré et performance mobile. Les fondations d\'un référencement solide pour chaque micro-région corse.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs auprès de médias régionaux et d\'acteurs du tourisme. Une stratégie de netlinking sur mesure pour renforcer votre autorité territoriale en Corse.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, ancrés dans le territoire corse. Du contenu expert qui se positionne sur Google et qui est repris par les moteurs IA.',
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
    'Une méthodologie éprouvée pour des résultats mesurables en Corse',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents insulaires et identification des opportunités sur vos marchés cibles.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et la saisonnalité touristique corse.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en oeuvre des recommandations techniques, création de contenus et développement de votre autorité insulaire.',
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
    ['Recherche type', '"hôtel Porto-Vecchio"', '"où loger en Corse du Sud ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Riche, structuré, expert'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, parts de réponse'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'You need to show that you really have something that\'s unique and compelling and of high quality.',
  author: 'John Mueller',
  role: 'Search Advocate, Google',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Corse',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO et le GEO en Corse ?',
      answer:
        'Le tourisme représente 39 % du PIB corse et la concurrence digitale est féroce entre acteurs locaux et plateformes nationales. SEO et GEO vous permettent de capter directement la clientèle qui planifie ses séjours en ligne ou via les assistants IA comme ChatGPT et Perplexity. Chaque réservation directe gagnée réduit votre dépendance aux intermédiaires qui prennent 15 à 25 % de commission.',
    },
    {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets significatifs en 3 à 6 mois, selon votre point de départ et le niveau de concurrence sur vos requêtes cibles. Le GEO peut montrer des résultats plus rapides car les moteurs IA valorisent la qualité du contenu davantage que l\'ancienneté du domaine. Nous établissons des indicateurs de progression dès le premier mois et partageons les données en temps réel via Rankwell One.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toute l\'île ?',
      answer:
        'Oui, nous accompagnons des entreprises basées à Ajaccio, Bastia, Porto-Vecchio, Calvi, Bonifacio, Corte et dans les zones rurales de l\'intérieur. Notre collaboration fonctionne à distance avec des visioconférences régulières, un consultant senior dédié et un accès permanent à Rankwell One pour suivre vos résultats. La proximité géographique n\'est pas un critère de qualité — l\'expertise l\'est.',
    },
    {
      question: 'Le GEO remplace-t-il le SEO traditionnel ?',
      answer:
        'Non, le GEO vient compléter le SEO. Google reste le moteur dominant pour les recherches touristiques en Corse, mais de plus en plus de voyageurs utilisent ChatGPT ou Perplexity pour planifier leur séjour. Une stratégie complète intègre les deux approches : le SEO pour capter le trafic Google, le GEO pour être cité dans les réponses IA quand un touriste demande « où loger en Corse du Sud cet été ».',
    },
    {
      question: 'Comment gérez-vous la saisonnalité du tourisme corse ?',
      answer:
        'La saisonnalité est au cœur de notre méthodologie pour les entreprises insulaires. En basse saison, on prépare les fondations : audit, optimisation technique, création de contenus. Au printemps, on intensifie la publication de contenus saisonniers. Pendant la haute saison, on optimise en continu et on mesure les performances réelles. L\'objectif est aussi d\'étendre la visibilité sur les requêtes hors saison pour lisser votre activité.',
    },
    {
      question: 'Proposez-vous des services multilingues ?',
      answer:
        'Oui, le tourisme corse attire des visiteurs français, italiens, allemands et britanniques principalement. Nous optimisons votre présence pour le marché français en priorité, avec des extensions en anglais, italien et allemand selon la provenance de votre clientèle. Le SEO multilingue est essentiel pour capter les touristes étrangers dès la phase de planification du séjour.',
    },
    {
      question: 'Quels sont vos tarifs pour une entreprise corse ?',
      answer:
        'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence sur vos requêtes cibles. Nous travaillons sur des forfaits mensuels ou des projets ponctuels comme un audit. Le plus simple est un premier échange de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste. Pas de surprise — la transparence fait partie de notre méthodologie.',
    },
    {
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer:
        'Le GEO (Generative Engine Optimization) est l\'optimisation de vos contenus pour être cités par les moteurs IA — ChatGPT, Perplexity, Google AI Overviews. Quand un voyageur demande à une IA « quel est le meilleur restaurant de fruits de mer à Ajaccio », le GEO fait en sorte que votre établissement apparaisse dans la réponse générée. C\'est le prolongement naturel du SEO à l\'ère de l\'intelligence artificielle.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir le marché corse ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée à l\'île de beauté.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans d\'autres régions',
  cities: [
    { label: 'Ajaccio', href: '/agence-geo-seo/france/ajaccio' },
    { label: 'Bastia', href: '/agence-geo-seo/france/bastia' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Provence-Alpes-Côte d\'Azur', href: '/agence-geo-seo/france/provence-alpes-cote-d-azur' },
    { label: 'Occitanie', href: '/agence-geo-seo/france/occitanie' },
  ],
};
