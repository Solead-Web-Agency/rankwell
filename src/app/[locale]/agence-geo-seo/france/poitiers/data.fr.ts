/**
 * DATA FR - Agence GEO & SEO à Poitiers
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Poitiers - Rankwell',
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
        'Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un visiteur demande à une IA « où dormir près du Futuroscope » ou « quel prestataire B2B à Poitiers », le GEO garantit que votre entreprise est mentionnée dans la réponse.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Poitiers ?',
      description:
        'Grand Poitiers accueille 27 000 étudiants et le Futuroscope draine près de 2 millions de visiteurs par an. Cette population jeune et ces touristes connectés utilisent massivement les assistants IA pour trouver informations, services et recommandations. Ne pas être visible dans ces réponses, c\'est perdre des clients.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO positionne votre site dans les résultats Google classiques. Le GEO fait en sorte que les IA vous recommandent. En combinant les deux, vous captez l\'intégralité des flux de recherche, qu\'ils passent par un moteur traditionnel ou par un assistant conversationnel.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu expert et contextualisé',
      description:
        'Les modèles de langage privilégient les contenus qui démontrent une expertise réelle et un ancrage local. Nos équipes produisent des contenus qui valorisent le patrimoine roman de Poitiers, l\'innovation du technopôle et le savoir-faire de vos équipes, dans un format optimisé pour la citation par les IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique poitevin',
  text: 'Grand Poitiers est le deuxième pôle d\'enseignement supérieur de Nouvelle-Aquitaine avec 27 000 étudiants, 36 laboratoires de recherche et plus de 1 300 chercheurs. Le technopôle du Futuroscope accueille 250 établissements et 7 500 salariés, tandis que le parc attire près de 2 millions de visiteurs chaque année. Un bassin économique où la visibilité digitale conditionne la captation de ces flux.',
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
        'Cartographie détaillée de la concurrence locale et régionale, identification des requêtes spécifiques au bassin poitevin et détection des opportunités inexploitées. On évalue votre positionnement actuel sur Google et dans les réponses des moteurs IA pour établir un diagnostic précis.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le territoire',
      description:
        'Production de contenus qui valorisent votre expertise et votre ancrage poitevin. Chaque texte est structuré pour ranker sur Google et être cité par les IA : données vérifiables, passages facilement extractibles et démonstration d\'autorité thématique sur votre secteur d\'activité.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des temps de chargement, balisage Schema.org complet, architecture de site logique et expérience mobile sans friction. Le socle technique conditionne aussi bien votre positionnement Google que la capacité des IA à extraire et reformuler vos informations.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Construction d\'un réseau de liens et de mentions depuis des sources poitevines reconnues : presse locale, annuaires professionnels, sites institutionnels du Grand Poitiers. Ces signaux de confiance renforcent votre crédibilité auprès de Google et des moteurs IA.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour votre entreprise poitevine ?',
  subtitle:
    'Notre expertise s\'adresse à des profils variés d\'entreprises. Voici les situations où notre accompagnement SEO et GEO génère un impact concret.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site web ne convertit pas suffisamment. Vous cherchez un partenaire capable de construire une stratégie Search complète — SEO et GEO — qui transforme le trafic en leads qualifiés et en ventes, avec des indicateurs de performance clairs et un suivi rigoureux.',
    },
    {
      label: 'Vous voulez comprendre pourquoi votre SEO stagne',
      description: 'Malgré vos efforts ou ceux de votre prestataire actuel, vos positions Google n\'évoluent plus. Vous avez besoin d\'un audit objectif qui identifie les vrais blocages, hiérarchise les priorités d\'action et intègre les enjeux GEO que votre stratégie actuelle ignore probablement.',
    },
    {
      label: 'Acteurs du tourisme liés au Futuroscope et au patrimoine poitevin',
      description: 'Hôtels, restaurants, sites culturels et prestataires touristiques de la Vienne : le Futuroscope draine 2 millions de visiteurs par an. Quand un touriste demande à une IA « où dormir près du Futuroscope » ou « que visiter à Poitiers », le GEO garantit que votre établissement figure dans la réponse.',
    },
    {
      label: 'Start-ups et entreprises tech du technopôle du Futuroscope',
      description: 'Le technopôle concentre 250 établissements et 7 500 salariés dans l\'innovation, le numérique et la recherche. Dans cet écosystème compétitif, le référencement SEO et GEO vous distingue des concurrents et attire les décideurs B2B qui cherchent des partenaires technologiques via Google ou les IA.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats. Rankwell accompagne des entreprises partout en France depuis 2017.',
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
  title: 'Nos services GEO & SEO à Poitiers',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité et ce qui peut l\'accélérer rapidement.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage et performance technique. Les fondations indispensables d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Une stratégie sur mesure, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu qui se positionne sur Google, qui est cité par les IA et qui convertit.',
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
    'It is important to think about producing something excellent first. If you have an outstanding product or world-class content, then you can step back and start thinking about how to promote it.',
  author: 'Eric Enge',
  role: 'Co-author, The Art of SEO — Pilot Holding',
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
      question: 'Travaillez-vous avec des entreprises à Poitiers sans être sur place ?',
      answer:
        'Oui, nous accompagnons des entreprises dans toute la France depuis 2017 grâce à une collaboration à distance efficace. Visioconférences régulières avec un consultant senior dédié, accès permanent à notre plateforme Rankwell One pour suivre vos performances en temps réel et réactivité garantie par email ou téléphone. La distance n\'affecte ni la qualité ni les résultats.',
    },
    {
      question: 'Pourquoi le SEO et le GEO sont-ils particulièrement importants à Poitiers ?',
      answer:
        'Grand Poitiers est le deuxième pôle universitaire de Nouvelle-Aquitaine avec 27 000 étudiants, et le Futuroscope attire 2 millions de visiteurs par an. Cette population jeune et ces touristes connectés utilisent massivement Google et les assistants IA pour trouver des services. Un référencement solide sur ces deux canaux vous permet de capter ces publics à fort potentiel.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise poitevine ?',
      answer:
        'Le GEO optimise vos contenus pour être cités dans les réponses de ChatGPT, Perplexity et Google AI Overviews. Concrètement, quand un visiteur demande à une IA « quel restaurant gastronomique à Poitiers » ou un décideur recherche « prestataire numérique dans la Vienne », votre entreprise apparaît dans la réponse générée. C\'est un avantage concurrentiel que peu d\'entreprises locales exploitent aujourd\'hui.',
    },
    {
      question: 'Quels secteurs accompagnez-vous dans le Grand Poitiers ?',
      answer:
        'Nous travaillons avec des entreprises variées : hôtellerie et tourisme liés au Futuroscope, start-ups et entreprises tech du technopôle, commerces du centre-ville, professions libérales, acteurs de l\'immobilier et prestataires B2B. Le point commun de nos clients : des entreprises qui veulent transformer le Search en levier de croissance mesurable.',
    },
    {
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs apparaissent entre 3 et 6 mois selon votre positionnement de départ et le niveau de concurrence dans votre secteur. Le GEO peut produire des effets plus rapides sur les requêtes conversationnelles, car la concurrence y est encore faible. Nous fixons des objectifs réalistes dès le premier échange et vous donnons une feuille de route claire.',
    },
    {
      question: 'Comment mesurez-vous la visibilité dans les réponses IA ?',
      answer:
        'Nous interrogeons régulièrement les principaux moteurs IA sur des requêtes pertinentes pour votre activité à Poitiers. Nous traquons la fréquence de vos citations, mesurons votre part de voix face aux concurrents et suivons l\'évolution dans le temps. Ces données sont accessibles en permanence sur votre tableau de bord Rankwell One, aux côtés de vos métriques SEO classiques.',
    },
    {
      question: 'Quels sont vos tarifs pour une entreprise poitevine ?',
      answer:
        'Les tarifs dépendent de vos objectifs, de votre secteur d\'activité et du niveau de concurrence. Nous proposons des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles comme un audit SEO et GEO. Le plus simple : un premier échange de 30 minutes en visio pour analyser votre situation et vous donner une estimation précise, sans engagement et sans mauvaise surprise.',
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
