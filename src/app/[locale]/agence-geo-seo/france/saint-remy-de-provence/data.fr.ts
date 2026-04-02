/**
 * DATA FR - Agence GEO & SEO à Saint-Rémy-de-Provence
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Saint-Rémy-de-Provence - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Saint-Rémy-de-Provence. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché des Alpilles.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Saint-Rémy-de-Provence' },
  ],
  badge: 'saint-remy-de-provence',
  title: 'Agence GEO & SEO à Saint-Rémy-de-Provence',
  description:
    'Joyau des Alpilles et village de caractère par excellence, Saint-Rémy-de-Provence attire une clientèle internationale en quête d\'authenticité provençale. Notre agence accompagne les entreprises saint-rémoises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Saint-Rémy-de-Provence',
  accentColor: 'rw-blue' as const,
  title: 'Rayonnez sur les moteurs de recherche depuis les Alpilles',
  paragraphs: [
    'Saint-Rémy-de-Provence incarne l\'essence de la Provence avec ses paysages des Alpilles, son patrimoine culturel (Van Gogh, Nostradamus) et son art de vivre. Cette notoriété internationale génère un flux touristique premium où la visibilité digitale est devenue essentielle.',
    'Notre méthodologie associe le référencement SEO classique aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque des visiteurs planifient leur séjour.',
    'Du centre historique aux domaines viticoles des Alpilles, des mas provençaux aux restaurants étoilés, nous calibrons nos stratégies pour toucher une clientèle exigeante, française comme internationale.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Saint-Rémy-de-Provence',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché des Alpilles',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie de charme, domaines viticoles, restaurants et artisans locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle haut de gamme et réservations directes',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Stratégie authentique, contenu provençal et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour les Alpilles',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les acteurs des Alpilles',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un voyageur demande « plus belle maison d\'hôtes près des Alpilles », le GEO garantit que votre établissement figure dans la réponse générée.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte à Saint-Rémy ?',
      desc: 'Avec près de 10 000 habitants mais un flux touristique considérable, Saint-Rémy-de-Provence vit au rythme de sa clientèle internationale. Ces voyageurs préparent leur séjour via les assistants IA, demandant les meilleures adresses, les domaines viticoles à visiter, les marchés provençaux à ne pas manquer. Être recommandé par ces outils devient un avantage concurrentiel décisif.',
    },
    {
      id: 3,
      title: 'Alliance SEO + GEO',
      desc: 'Le SEO assure vos positions dans les résultats classiques de Google, le GEO vous fait citer comme source de confiance par les IA. En combinant ces deux approches, vous couvrez l\'ensemble des comportements de recherche de votre clientèle premium, qu\'elle passe par Google, ChatGPT ou Perplexity.',
    },
    {
      id: 4,
      title: 'Contenu authentiquement provençal',
      desc: 'Les moteurs génératifs privilégient le contenu authentique, expert et richement documenté. Nous créons des contenus qui reflètent l\'art de vivre des Alpilles — héritage de Van Gogh, huile d\'olive AOP, vins des Baux-de-Provence — tout en répondant aux critères techniques des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique des Alpilles',
  text: 'Saint-Rémy-de-Provence compte près de 10 000 habitants mais accueille un flux touristique disproportionné, attiré par le site antique de Glanum, l\'héritage de Van Gogh et les marchés provençaux. Le revenu moyen par habitant (23 250 €) dépasse la moyenne nationale. L\'économie repose sur le tourisme haut de gamme, la viticulture AOP Baux-de-Provence, l\'oléiculture et l\'artisanat. Une visibilité digitale forte est essentielle pour capter cette clientèle exigeante.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Notre approche business centrix pour les Alpilles',
  subtitle:
    'Ce que ROI signifie concrètement pour les entreprises de Saint-Rémy-de-Provence et des Alpilles.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être visible sur « Alpilles » sans générer de réservations ou de ventes directes, ça ne sert à rien. Notre métrique principale, c\'est l\'impact concret : réservations attribuées au Search, demandes de devis, ventes en ligne. On identifie les requêtes qui convertissent votre clientèle premium.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Faut-il cibler les touristes anglophones ou les résidents secondaires ? Le marché français ou l\'international ? Notre rôle, c\'est de vous orienter vers les stratégies qui génèrent du business réel, pas celles qui flattent les vanity metrics. Un vrai partenaire dit ce qui fonctionne.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur qui comprend le marché du tourisme de charme et de l\'art de vivre provençal, disponible en visio, par email ou téléphone.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Réservations, demandes de contact, citations IA : vous suivez l\'impact réel de votre investissement en temps réel, pas dans un rapport mensuel. Chaque action est traçable.',
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
    'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider à Saint-Rémy et dans les Alpilles.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter la clientèle internationale',
      description:
        'Votre établissement ou votre domaine attire des visiteurs étrangers, mais votre présence digitale ne reflète pas votre qualité. Vous cherchez un partenaire pour structurer votre visibilité en français et en anglais, sur Google comme sur les moteurs IA.',
    },
    {
      label: 'Vous voulez plus de réservations directes',
      description:
        'Vous dépendez trop des plateformes de réservation ou des intermédiaires. Le SEO et le GEO captent les voyageurs au moment où ils planifient leur séjour dans les Alpilles, et les orientent directement vers votre site.',
    },
    {
      label: 'Œnotourisme, oléiculture et gastronomie',
      description:
        'Domaines viticoles AOP Baux-de-Provence, producteurs d\'huile d\'olive, restaurants gastronomiques : vous incarnez l\'art de vivre provençal. Le référencement vous rend visible auprès des amateurs de terroir qui préparent leur visite via Google et les assistants IA.',
    },
    {
      label: 'Hôtellerie de charme et immobilier de prestige',
      description:
        'Maisons d\'hôtes, bastides, mas rénovés, agences spécialisées dans les propriétés des Alpilles : votre clientèle haut de gamme recherche l\'authenticité en ligne avant de se déplacer. Le SEO et le GEO captent ces recherches à forte valeur ajoutée.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise Search, la méthodologie et la capacité à atteindre une clientèle internationale exigeante.',
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
  title: 'Nos services GEO & SEO à Saint-Rémy-de-Provence',
  subtitle: 'Quatre services complémentaires pour développer votre visibilité sur le marché premium des Alpilles.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre présence digitale. On identifie les freins à votre visibilité et les leviers d\'accélération prioritaires.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, données structurées Schema.org et performance technique. Les fondations d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs ciblant les médias de voyage, les guides gastronomiques et les publications provençales de référence. Pas de spam, que de la qualité.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, en français et en anglais. Du contenu authentique qui se positionne, qui est cité par les IA et qui convertit.',
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
    'Une méthodologie d\'excellence pour des résultats à la hauteur des Alpilles',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence locale et identification des opportunités sur le marché des Alpilles.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO aligné avec l\'authenticité provençale et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus authentiques et développement de votre autorité.',
    },
    {
      number: 4,
      title: 'Mesure & Excellence',
      description:
        'Suivi des KPIs, reporting transparent et optimisations continues pour maintenir l\'excellence de vos performances.',
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
    ['Recherche type', '"mas Alpilles piscine"', '"où loger de charme près des Alpilles ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Authentique, expert, provençal'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et authenticité'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Good SEO is good GEO. What you\'ve been doing for search engines generally is still perfectly fine and is still the things that you should be doing. Good SEO is really having good content for people.',
  author: 'Danny Sullivan',
  role: 'Google Search Liaison, Director of Google Search',
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
      question: 'Travaillez-vous avec des entreprises à Saint-Rémy-de-Provence ?',
      answer:
        'Oui, nous accompagnons des entreprises des Alpilles et de toute la Provence. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié. Saint-Rémy est un marché de niche haut de gamme où la qualité du référencement fait la différence entre capter ou manquer une clientèle internationale exigeante.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous dans les Alpilles ?',
      answer:
        'Nous travaillons avec des entreprises du tourisme de charme (maisons d\'hôtes, bastides, mas rénovés), de l\'œnotourisme et la viticulture AOP, de la gastronomie et restauration, de l\'immobilier de prestige, de l\'artisanat provençal et des producteurs locaux (huile d\'olive, lavande). Le point commun : des acteurs qui veulent rayonner au-delà des Alpilles grâce au digital.',
    },
    {
      id: '3',
      question: 'Travaillez-vous en français et en anglais ?',
      answer:
        'Absolument. Nous optimisons votre présence en français et en anglais pour capter la clientèle internationale qui représente une part significative des visiteurs de Saint-Rémy. Le multilinguisme est un levier majeur en SEO comme en GEO : les voyageurs anglophones qui demandent à ChatGPT « best places to stay in Alpilles » doivent trouver votre établissement.',
    },
    {
      id: '4',
      question: 'Comment se déroule un projet type ?',
      answer:
        'Premier échange en visio pour comprendre vos enjeux et votre positionnement. Audit complet de votre situation SEO et GEO-readiness. Roadmap avec priorités classées par impact sur votre activité. Puis exécution avec un consultant senior dédié, des points réguliers et un suivi en temps réel via notre plateforme Rankwell One.',
    },
    {
      id: '5',
      question: 'Le GEO est-il pertinent pour un domaine viticole ou un producteur ?',
      answer:
        'Particulièrement. Les amateurs de vin et de gastronomie utilisent de plus en plus les IA pour découvrir des domaines et planifier des dégustations. Quand un voyageur demande à Perplexity « meilleurs domaines viticoles des Baux-de-Provence », le GEO fait en sorte que votre domaine soit cité. C\'est un complément idéal au SEO classique pour développer la vente directe et l\'accueil.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, de votre secteur et du périmètre géographique visé (local, national, international). Nous proposons des forfaits mensuels ou des projets ponctuels. Le plus simple : un premier échange de 30 minutes en visio pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO/GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois. Sur un marché de niche comme les Alpilles, les effets peuvent être plus rapides que sur des marchés très concurrentiels. On vous donne des projections réalistes dès le départ et des indicateurs de progression sont mis en place dès le premier mois.',
    },
    {
      id: '8',
      question: 'Couvrez-vous d\'autres communes des Alpilles ?',
      answer:
        'Oui. Notre accompagnement peut s\'étendre à l\'ensemble du massif des Alpilles : Les Baux-de-Provence, Eygalières, Maussane-les-Alpilles, Mouriès, Fontvieille. Le SEO local permet de cibler ces zones géographiques avec précision tout en renforçant votre visibilité sur l\'ensemble de la destination Alpilles.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à rayonner depuis les Alpilles ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne de Saint-Rémy-de-Provence.',
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
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
