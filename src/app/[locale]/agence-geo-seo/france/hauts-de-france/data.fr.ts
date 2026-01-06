/**
 * DATA - Page Hauts-de-France (Agence GEO & SEO pour les entreprises du Nord)
 * URL: /agence-geo-seo/france/hauts-de-france (FR only)
 *
 * Page régionale SANS présence physique
 * Mots-clés: Agence SEO Hauts-de-France, Agence GEO Hauts-de-France, Référencement Nord
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises des Hauts-de-France | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises des Hauts-de-France. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Hauts-de-France' },
  ] as BreadcrumbItem[],
  badge: 'hauts-de-france',
  title: 'Agence GEO et SEO en Hauts-de-France',
  description:
    'Les Hauts-de-France forment un carrefour économique majeur entre Paris, Bruxelles et Londres. Lille, Amiens, et les métropoles régionales abritent des entreprises qui peuvent développer leur visibilité digitale. SEO, GEO, SEA et Data.',
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
  badge: 'Hauts-de-France',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale au service des entreprises nordistes',
  paragraphs: [
    'Les Hauts-de-France représentent la troisième région économique française. Logistique, grande distribution, industrie automobile, agroalimentaire, textile de luxe : les secteurs qui composent le tissu économique régional requièrent une présence digitale performante. Google ne constitue plus l\'unique vitrine. ChatGPT, Perplexity et les AI Overviews modifient les comportements de recherche des décideurs.',
    'Rankwell accompagne des entreprises sur l\'ensemble du territoire national depuis 2017. Notre maîtrise du GEO et du SEO profite aux entreprises des Hauts-de-France via une <strong>collaboration à distance efficace</strong>. Points réguliers en visioconférence, outils collaboratifs, reporting en temps réel via notre plateforme Rankwell One.',
    'Découvrez notre accompagnement destiné aux entreprises ambitieuses qui souhaitent conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui évalue le succès en conversions réelles, pas en positions.',
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
  badge: 'Rankwell pour les Hauts-de-France',
  title: 'Ce que nous apportons aux entreprises nordistes',
  subtitle: 'Une expertise Search de niveau national accessible grâce à une collaboration à distance performante.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés depuis 2017, partout en France.',
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
      title: 'Collaboration efficace',
      description: 'Visios régulières, outils partagés, réactivité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Pas de junior sur votre projet.',
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
  title: 'Le GEO : pourquoi cette évolution transforme le référencement',
  subtitle:
    'Le SEO traditionnel vise les résultats classiques de Google. Il reste fondamental. Cependant une transformation profonde s\'opère : les utilisateurs interrogent de plus en plus directement les IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'ensemble des techniques pour être cité par les moteurs IA tels que ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu va au-delà du classement : devenir la source que l\'IA sélectionne pour répondre.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient les extraits facilement reformulables. Définitions précises, énumérations structurées, données sourcées. Nous architecturons vos contenus pour optimiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent votre légitimité sur un sujet donné. Pas uniquement si vous avez écrit un article, mais si l\'ensemble de votre présence digitale atteste d\'une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions tierces : médias spécialisés, publications professionnelles, recommandations d\'experts. Le netlinking demeure crucial, mais sous une forme renouvelée.',
    },
  ],
};

// ============================================
// CALLOUT HAUTS-DE-FRANCE
// ============================================
export const calloutData = {
  label: 'L\'économie des Hauts-de-France',
  text: 'Les Hauts-de-France comptent 6 millions d\'habitants et constituent la troisième région économique française. Position géographique stratégique entre Paris, Londres et Bruxelles, premier bassin logistique européen, pôles d\'excellence en automobile et ferroviaire. Une visibilité digitale optimisée permet de rayonner sur les marchés français et européens.',
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
  subtitle: 'De nombreuses agences mentionnent le ROI. Voici ce que cela signifie réellement chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Atteindre la première place sur un mot-clé sans valeur commerciale n\'a aucun intérêt. Notre indicateur principal reste l\'impact sur votre activité : leads qualifiés, ventes, chiffre d\'affaires attribuable.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous croyez vouloir n\'est pas ce dont vous avez besoin. Notre rôle inclut de vous alerter quand une orientation semble inadaptée. Un partenaire qui acquiesce à tout n\'est pas un vrai partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui élabore votre stratégie est celui qui la met en œuvre. Aucun intermédiaire. Vous bénéficiez d\'un interlocuteur qui connaît votre dossier dans ses moindres détails.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos métriques business. Vous visualisez l\'impact réel en temps réel, sans vous contenter de métriques superficielles dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons véritablement vous accompagner.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous recherchez un partenaire pour construire et déployer une stratégie Search performante.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez identifié que ChatGPT et les IA modifient les comportements de recherche. Vous souhaitez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et voulez intégrer les fondamentaux SEO et GEO dès la conception. L\'optimisation en amont évite les reprises coûteuses par la suite.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO stagne malgré les investissements. Vous avez besoin d\'un diagnostic objectif pour identifier les véritables freins et établir les priorités.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas l\'expertise. Une agence locale peut appliquer des méthodes obsolètes. Ce qui compte, c\'est la compétence, la méthodologie et les résultats prouvés.',
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
  title: 'Nos services GEO & SEO en Hauts-de-France',
  subtitle: 'Quatre services complémentaires pour renforcer votre présence sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. Une analyse exhaustive pour révéler vos opportunités de croissance.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site globale : architecture de contenu, maillage interne, performances techniques et Core Web Vitals pour des bases robustes.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie d\'acquisition de liens qualitatifs via des partenariats éditoriaux pertinents. Zéro spam, uniquement des backlinks à forte valeur ajoutée.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction de contenus SEO et GEO-ready qui captent l\'attention, répondent aux requêtes utilisateurs et génèrent des conversions.',
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
  subtitle: 'Du premier échange jusqu\'à la mise en œuvre, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour cerner vos enjeux. Sans argumentaire commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, analyse concurrentielle.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec priorités ordonnées par impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, optimisations. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises nordistes gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus. Voici ce que notre approche SEO + GEO change concrètement.',
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
      question: 'Travaillez-vous avec des entreprises des Hauts-de-France ?',
      answer: 'Oui, nous collaborons avec des entreprises nordistes depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance fonctionne parfaitement.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous dans les Hauts-de-France ?',
      answer: 'Nous intervenons dans tous les secteurs : logistique et supply chain, grande distribution, automobile et ferroviaire, agroalimentaire, textile de luxe, e-commerce. Le dénominateur commun : des entreprises qui veulent transformer leur visibilité Search en résultats commerciaux.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit détaillé de votre présence digitale. Élaboration d\'une roadmap avec priorités claires. Puis exécution par un consultant senior dédié avec des points réguliers. Le suivi s\'effectue en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : faire en sorte que vos contenus soient cités par ces IA lorsqu\'elles répondent à des questions liées à votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans chaque projet.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs varient selon vos objectifs, votre secteur et l\'intensité concurrentielle. Nous proposons des forfaits mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour analyser votre contexte et vous donner une estimation réaliste. Aucune surprise par la suite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats tangibles émergent généralement entre 3 et 6 mois selon votre situation de départ et le niveau de concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous fournissons des projections réalistes dès le départ, sans promesses impossibles.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On écoute, on analyse, on partage notre point de vue.',
  buttonText: 'Discuter de votre projet',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (pour le maillage interne)
// ============================================
export const autresVillesData = {
  title: 'Découvrez aussi nos services dans ces villes des Hauts-de-France',
  cities: [
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
    { label: 'Amiens', href: '/agence-geo-seo/france/amiens' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Rouen', href: '/agence-geo-seo/france/rouen' },
    { label: 'Reims', href: '/agence-geo-seo/france/reims' },
    { label: 'Bruxelles', href: '/agence-geo-seo/belgique/bruxelles' },
  ],
};
