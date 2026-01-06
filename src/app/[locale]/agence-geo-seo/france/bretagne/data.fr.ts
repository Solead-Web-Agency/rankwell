/**
 * DATA - Page Bretagne (Agence GEO & SEO pour les entreprises de la région)
 * URL: /agence-geo-seo/france/bretagne (FR only)
 *
 * Page région SANS présence physique
 * Mots-clés: Agence SEO Bretagne, Agence GEO Bretagne, Référencement Rennes
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO en Bretagne | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises bretonnes. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Bretagne' },
  ] as BreadcrumbItem[],
  badge: 'bretagne',
  title: 'Agence GEO et SEO en Bretagne',
  description:
    'La Bretagne combine dynamisme économique et identité forte. Les entreprises bretonnes portent des savoir-faire reconnus qui méritent une visibilité digitale à leur mesure. SEO, GEO, SEA et Data.',
  primaryCta: {
    text: 'Discuter de votre projet',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Comprendre le GEO',
    href: '#comprendre-geo',
  },
};

// ============================================
// INTRO
// ============================================
export const introData = {
  badge: 'Bretagne',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises bretonnes',
  paragraphs: [
    'La Bretagne affiche un tissu économique diversifié et robuste. Tech et numérique à Rennes, industrie navale et maritime à Brest, agroalimentaire, tourisme : chaque filière réunit des acteurs ambitieux. Google n\'est plus le seul levier. ChatGPT, Perplexity et les AI Overviews redessinent les parcours de recherche des décideurs.',
    'Rankwell accompagne des entreprises partout en France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises bretonnes grâce à une <strong>collaboration à distance bien rodée</strong>. Points réguliers en visioconférence, outils collaboratifs partagés, suivi permanent via notre plateforme Rankwell One.',
    'Découvrez notre accompagnement pour les entreprises ambitieuses qui veulent se positionner sur Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui évalue le succès en conversions réelles, pas en classements.',
  ],
  tocItems: [
    { id: 'comprendre-geo', label: 'Comprendre le GEO', icon: 'Lightbulb' },
    { id: 'approche', label: 'Notre approche', icon: 'Target' },
    { id: 'pour-qui', label: 'À qui ça s\'adresse', icon: 'Users' },
    { id: 'expertises', label: 'Nos expertises', icon: 'Layers' },
    { id: 'comparaison', label: 'SEO vs GEO', icon: 'GitCompare' },
    { id: 'faq', label: 'Questions fréquentes', icon: 'HelpCircle' },
  ] as TocItem[],
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'Rankwell pour la Bretagne',
  title: 'Ce que nous apportons aux entreprises bretonnes',
  subtitle: 'Une expertise Search de niveau national accessible via une collaboration à distance efficace.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés depuis 2017 sur tout le territoire.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Optimisation Google ET moteurs IA intégrée.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration fluide',
      description: 'Visios programmées, outils communs, disponibilité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Des experts confirmés sur votre dossier.',
    },
  ],
};

// ============================================
// SECTION ÉDUCATIVE GEO
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Le GEO : pourquoi ça change la donne pour le référencement',
  subtitle:
    'Le SEO traditionnel cible les résultats classiques de Google. C\'est toujours essentiel. Mais une mutation profonde s\'opère : les utilisateurs interrogent de plus en plus directement des IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) représente la discipline qui consiste à optimiser vos contenus pour être repris par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif dépasse le classement : devenir la source que l\'IA choisit de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient des passages faciles à extraire et reformuler. Définitions claires, listes structurées, données chiffrées sourcées. Nous concevons vos contenus pour maximiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source crédible sur un sujet. Pas seulement si vous avez publié un contenu, mais si votre présence digitale globale témoigne d\'une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA valident votre crédibilité via les mentions sur d\'autres sites : articles de presse, rapports sectoriels, discussions dans des communautés d\'experts. Le netlinking reste clé, mais différemment.',
    },
  ],
};

// ============================================
// CALLOUT BRETAGNE
// ============================================
export const calloutData = {
  label: 'Le contexte économique breton',
  text: 'La Bretagne compte 3,4 millions d\'habitants et un PIB supérieur à 100 milliards d\'euros. Rennes s\'est imposée comme deuxième pôle numérique français après Paris. L\'agroalimentaire, le naval et le maritime complètent un tissu économique dynamique. Une présence digitale optimisée permet de rayonner bien au-delà de la région.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Notre approche business centrix',
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que cela signifie concrètement chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans valeur commerciale est inutile. Notre indicateur principal, c\'est l\'impact sur votre activité : leads qualifiés, chiffre d\'affaires attribué, coût d\'acquisition maîtrisé.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous croyez vouloir n\'est pas ce dont vous avez besoin. Notre mission inclut de vous alerter si une direction semble inappropriée. Un partenaire qui valide tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui conçoit votre stratégie est celui qui la met en œuvre. Aucun intermédiaire. Vous disposez d\'un interlocuteur qui connaît votre dossier en détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Vous voyez l\'impact réel en temps réel, pas des vanity metrics dans un rapport mensuel.',
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour vous ?',
  subtitle: 'Notre expertise convient à différents profils d\'entreprises. Voici les situations où nous pouvons véritablement vous accompagner.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de leads ou de ventes. Vous cherchez un partenaire pour élaborer et déployer une stratégie Search efficace.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez identifié que ChatGPT et les IA transforment les comportements de recherche. Vous souhaitez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous créez un nouveau site et voulez intégrer les bonnes pratiques SEO et GEO dès la conception. L\'optimisation en amont évite les corrections coûteuses ultérieures.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO stagne malgré les investissements. Vous avez besoin d\'un diagnostic objectif pour cerner les véritables freins et hiérarchiser les priorités.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas l\'expertise. Une agence locale peut utiliser des méthodes dépassées. Ce qui compte, c\'est la compétence, la rigueur méthodologique et les résultats prouvés.',
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
  title: 'Nos services GEO & SEO en Bretagne',
  subtitle: 'Quatre services complémentaires pour renforcer votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Évaluation technique, sémantique et concurrentielle exhaustive. Un diagnostic clair pour prioriser les actions à fort impact.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site globale : structure éditoriale, balisage HTML, maillage interne et vitesse de chargement pour plaire à Google et aux IA.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Développement d\'un réseau de liens entrants qualitatifs. Méthodes éthiques, partenariats ciblés, autorité de domaine renforcée.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Production de contenus SEO et GEO-ready, alignés sur les intentions de recherche et optimisés pour la conversion.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// CHIFFRES CLÉS
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
      label: 'D\'expertise Search',
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
// PROCESS
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Notre méthode',
  accentColor: 'rw-blue' as const,
  title: 'Comment démarre un accompagnement',
  subtitle: 'Du premier contact à l\'exécution, voici les étapes essentielles.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour appréhender vos enjeux. Sans discours commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, benchmark concurrentiel.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie personnalisée avec actions classées par niveau d\'impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustements continus. Visibilité totale via Rankwell One.',
    },
  ],
};

// ============================================
// COMPARAISON SEO vs GEO (Tableau)
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'SEO + GEO',
  accentColor: 'rw-blue' as const,
  title: 'Ce que les entreprises bretonnes gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus. Voici les bénéfices concrets de notre approche SEO + GEO.',
  columns: ['Aspect', 'SEO traditionnel', 'SEO + GEO (Rankwell)'],
  rows: [
    ['Moteurs ciblés', 'Google uniquement', 'Google + ChatGPT, Perplexity, AI Overviews'],
    ['Objectif', 'Top 10 des liens bleus', 'Être cité comme source fiable par les IA'],
    ['Structure contenu', 'Optimisé mots-clés', 'Citation-ready + mots-clés'],
    ['Autorité construite', 'Backlinks classiques', 'Backlinks + mentions multi-sources'],
    ['Mesure du succès', 'Positions Google', 'Positions + citations IA + conversions'],
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises en Bretagne ?',
      answer: 'Oui, nous collaborons avec des entreprises bretonnes depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance est parfaitement rodée.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en Bretagne ?',
      answer: 'Nous intervenons dans tous les secteurs : tech et numérique (le cœur de Rennes), naval et maritime, agroalimentaire, tourisme, services B2B, e-commerce. Le point commun : des entreprises qui veulent transformer leur présence Search en résultats commerciaux.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit détaillé de votre présence digitale. Élaboration d\'une roadmap avec priorités claires. Puis exécution par un consultant senior dédié avec des points réguliers. Le suivi s\'effectue en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : faire en sorte que vos contenus soient cités par ces IA lorsqu\'elles traitent de questions liées à votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans chaque projet.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs varient selon vos objectifs, votre secteur et l\'intensité concurrentielle. Nous proposons des forfaits mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour analyser votre contexte et vous donner une estimation réaliste. Aucune surprise par la suite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats significatifs apparaissent généralement entre 3 et 6 mois selon votre situation de départ et le niveau de concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous communiquons des projections réalistes dès le départ, sans promesses impossibles.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. Nous écoutons, analysons et partageons notre avis.',
  buttonText: 'Discuter de votre projet',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (pour le maillage interne)
// ============================================
export const autresVillesData = {
  title: 'Nous accompagnons aussi des entreprises dans ces villes',
  cities: [
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Brest', href: '/agence-geo-seo/france/brest' },
    { label: 'Quimper', href: '/agence-geo-seo/france/quimper' },
    { label: 'Saint-Malo', href: '/agence-geo-seo/france/saint-malo' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
  ],
};
