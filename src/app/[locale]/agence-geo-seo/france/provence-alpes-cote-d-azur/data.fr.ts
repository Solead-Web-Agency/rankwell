/**
 * DATA FR - Agence GEO & SEO en Provence-Alpes-Côte d'Azur
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Provence-Alpes-Côte d\'Azur - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Provence-Alpes-Côte d\'Azur. Optimisez votre visibilité sur Google et les moteurs IA pour atteindre vos clients sur le littoral méditerranéen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Provence-Alpes-Côte d\'Azur' },
  ],
  badge: 'provence-alpes-cote-d-azur',
  title: 'Agence GEO & SEO en Provence-Alpes-Côte d\'Azur',
  description:
    'Dans une région où tourisme et économie se conjuguent intensément, être visible sur les moteurs de recherche est un levier de croissance incontournable. Notre agence accompagne les entreprises provençales et azuréennes dans leur stratégie de référencement SEO classique et d\'optimisation pour les moteurs IA (GEO).',
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
  badge: 'GEO & SEO en Provence-Alpes-Côte d\'Azur',
  accentColor: 'rw-blue' as const,
  title: 'Votre visibilité digitale en Provence-Alpes-Côte d\'Azur mérite une expertise pointue',
  paragraphs: [
    'La région PACA représente un marché diversifié alliant tourisme international, industries de pointe et services B2B. Pour émerger parmi cette concurrence dense, une stratégie digitale combinant SEO et GEO devient indispensable.',
    'Notre approche associe le référencement traditionnel aux nouvelles techniques d\'optimisation pour les réponses des intelligences artificielles génératives. Cette double expertise vous permet d\'apparaître tant sur Google que dans les résultats de ChatGPT, Perplexity ou Google SGE.',
    'De Marseille à Nice, en passant par Aix-en-Provence, Cannes, Avignon et les villages du Luberon, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Provence-Alpes-Côte d\'Azur',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA dans la région PACA',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Entreprises touristiques, commerces, services et PME régionales',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, leads locaux et visibilité multi-canal augmentée',
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
  title: 'Le GEO : révolution de la visibilité en Provence-Alpes-Côte d\'Azur',
  subtitle:
    'Le Generative Engine Optimization transforme profondément la manière dont les entreprises provençales captent leurs prospects en ligne',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) est l\'art d\'optimiser votre présence pour les moteurs de recherche propulsés par l\'IA. Un hôtelier niçois optimisé en GEO sera cité directement dans la réponse de ChatGPT quand un voyageur demandera "meilleurs hôtels avec vue mer à Nice".',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en PACA ?',
      description:
        'Avec 31 millions de touristes par an, la région PACA voit ses visiteurs planifier via l\'IA. Les moteurs génératifs recommandent directement restaurants, hébergements et activités. Ne pas y figurer signifie manquer une part croissante de clients potentiels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = stratégie gagnante',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous maximisez votre couverture sur l\'ensemble des canaux de recherche utilisés par vos clients méditerranéens et internationaux.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté au marché touristique',
      description:
        'L\'IA privilégie le contenu authentique et contextualisé. Nos équipes créent des contenus qui reflètent l\'identité de votre établissement, les spécificités du territoire PACA et les critères de qualité recherchés par les moteurs génératifs.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique en PACA',
  text: 'La région Provence-Alpes-Côte d\'Azur compte 5,24 millions d\'habitants et un PIB de 207 milliards d\'euros. Marseille-Fos, premier port de France, traite 70,5 millions de tonnes de marchandises. Sophia Antipolis rassemble 2 650 entreprises tech et 44 500 emplois. Le tourisme génère plus de 23 millions de nuitées hôtelières par an. Un marché dense où la visibilité digitale fait la différence.',
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
    'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell pour les entreprises de la région PACA.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé qui ne génère pas de réservations ou de leads, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : chiffre d\'affaires direct, coût d\'acquisition, réservations attribuées au canal Search. Pas des vanity metrics.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Le marché PACA a ses spécificités : saisonnalité du tourisme, concurrence internationale sur le luxe, densité de l\'offre à Marseille et Nice. Notre rôle, c\'est de vous dire quand une stratégie fait fausse route et de proposer des alternatives fondées sur la donnée.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur unique qui comprend les dynamiques du marché méditerranéen et connaît votre projet dans le détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Positions Google, citations dans les réponses IA, conversions : tout est visible en temps réel. Vous savez exactement ce que produit chaque euro investi.',
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
    'Notre expertise s\'adresse à différents profils d\'entreprises en PACA. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez augmenter vos réservations ou vos leads',
      description: 'Votre site existe mais ne convertit pas assez. Vous cherchez un partenaire capable de structurer une stratégie Search orientée résultats : plus de réservations directes, plus de demandes de devis, un coût d\'acquisition maîtrisé.',
    },
    {
      label: 'Vous cherchez une expertise GEO et IA',
      description: 'ChatGPT et Perplexity changent la façon dont vos prospects trouvent des prestataires. Vous voulez une agence qui sait optimiser pour ces nouveaux moteurs, pas juste pour les liens bleus de Google. Le GEO est intégré dans tous nos projets.',
    },
    {
      label: 'Tourisme, hôtellerie et économie saisonnière',
      description: 'Avec plus de 23 millions de nuitées hôtelières par an, la PACA est un marché touristique ultra-concurrentiel. Anticiper les pics de recherche, capter les voyageurs dès la phase de planification via les IA : c\'est là que le GEO fait la différence.',
    },
    {
      label: 'Tech, innovation et services B2B',
      description: 'Sophia Antipolis concentre 2 650 entreprises tech, Marseille développe son écosystème startup, Aix-en-Provence attire les sièges régionaux. Sur un marché B2B dense, votre visibilité Search détermine votre capacité à capter des prospects qualifiés.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats. Nos 8 ans d\'expérience et nos 350+ clients en témoignent.',
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
  title: 'Nos services GEO & SEO en Provence-Alpes-Côte d\'Azur',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie les freins à votre visibilité et les leviers de croissance, avec des priorités classées par impact sur votre activité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage Schema.org et performance technique. Les fondations d\'un référencement solide qui résiste aux évolutions algorithmiques.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Une stratégie sur mesure, sans spam ni réseaux douteux. Des liens qui comptent aussi pour la crédibilité IA.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready : structurés, sourcés, conçus pour se positionner sur Google et être cités par les moteurs IA. Du contenu qui convertit, pas du remplissage.',
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
    'Une méthodologie éprouvée pour des résultats mesurables en Provence-Alpes-Côte d\'Azur',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents régionaux et identification des opportunités sur les marchés provençaux et azuréens.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et les spécificités du marché PACA.',
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
        'Suivi des KPIs, reporting transparent et ajustements stratégiques pour une progression continue de votre visibilité.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise en PACA ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel vue mer Nice"', '"où dormir à Nice avec vue sur la mer ?"'],
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
    'High-quality web content that\'s useful, usable, and enjoyable is one of the greatest competitive advantages you can create for yourself online.',
  author: 'Kristina Halvorson',
  role: 'Fondatrice de Brain Traffic',
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
      question: 'Travaillez-vous avec des entreprises en Provence-Alpes-Côte d\'Azur ?',
      answer:
        'Oui, nous accompagnons des entreprises sur l\'ensemble du territoire PACA : Marseille, Nice, Cannes, Aix-en-Provence, Avignon, Toulon et au-delà. Notre modèle de collaboration à distance est éprouvé : visios régulières, consultant senior dédié joignable par email ou téléphone, et accès à Rankwell One pour suivre vos performances en temps réel.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en PACA ?',
      answer:
        'Nous travaillons avec des entreprises de tous secteurs : tourisme et hôtellerie (un marché majeur avec 23 millions de nuitées par an), tech et innovation (Sophia Antipolis), services portuaires et logistiques (Marseille-Fos), cosmétique et parfumerie (filière grassoise), immobilier de prestige. Le point commun : des entreprises qui veulent générer du business via le Search.',
    },
    {
      id: '3',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer:
        'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand un prospect pose une question liée à votre expertise. En PACA, où les touristes internationaux planifient de plus en plus via l\'IA, c\'est un levier de visibilité incontournable.',
    },
    {
      id: '4',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et la concurrence. Le GEO peut produire des effets plus rapides sur des requêtes ciblées. On vous donne des projections réalistes dès le premier échange, avec des jalons mensuels pour suivre la progression et ajuster si nécessaire.',
    },
    {
      id: '5',
      question: 'Comment gérez-vous la saisonnalité du marché PACA ?',
      answer:
        'Le tourisme en PACA est fortement saisonnier. Nous anticipons les pics de recherche — été, festivals, événements cannois, saison de ski dans les Alpes du Sud — et optimisons votre visibilité plusieurs mois en amont. L\'objectif est de capter le trafic au bon moment, pas de réagir quand il est trop tard.',
    },
    {
      id: '6',
      question: 'Pourquoi choisir une agence nationale plutôt qu\'une agence locale ?',
      answer:
        'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise méthodologique et la capacité à produire des résultats concrets. Nos consultants seniors ont une vision nationale du marché Search, 8 ans d\'expérience et plus de 350 clients accompagnés. La collaboration à distance est fluide et transparente via notre plateforme.',
    },
    {
      id: '7',
      question: 'Le GEO est-il utile pour une entreprise qui cible des clients internationaux ?',
      answer:
        'Particulièrement en PACA, où 37 % des touristes sont internationaux. Les voyageurs et acheteurs étrangers utilisent massivement les IA pour rechercher des prestataires. Être cité par ChatGPT en anglais quand un prospect demande des recommandations sur la Côte d\'Azur, c\'est un avantage compétitif direct qui se traduit en réservations et en prises de contact.',
    },
    {
      id: '8',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, votre secteur et l\'intensité concurrentielle. On travaille sur des forfaits mensuels ou des projets ponctuels comme des audits. Le plus simple : un premier échange de 30 minutes en visio pour comprendre votre situation et vous donner une estimation réaliste. Sans engagement, sans mauvaise surprise.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir le marché PACA ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée aux enjeux de la Provence-Alpes-Côte d\'Azur.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans les villes de Provence-Alpes-Côte d\'Azur',
  cities: [
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Saint-Rémy-de-Provence', href: '/agence-geo-seo/france/saint-remy-de-provence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
