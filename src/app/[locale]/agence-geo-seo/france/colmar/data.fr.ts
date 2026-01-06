/**
 * DATA - Page Colmar (Agence GEO & SEO pour les entreprises colmariennes)
 * URL: /agence-geo-seo/france/colmar (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Colmar, Agence GEO Colmar, Référencement Colmar
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises colmariennes | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Colmar et le Haut-Rhin. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Colmar' },
  ] as BreadcrumbItem[],
  badge: 'colmar',
  title: 'Agence GEO et SEO à Colmar',
  description:
    'Colmar est la capitale des vins d\'Alsace et un joyau touristique au cœur du vignoble. Les entreprises colmariennes évoluent dans un écosystème unique où la visibilité digitale fait la différence. SEO, GEO, SEA et Data.',
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
  badge: 'Colmar',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises colmariennes',
  paragraphs: [
    'Colmar et Colmar Agglomération forment un pôle économique dynamique. Viticulture et œnotourisme, tourisme patrimonial, agroalimentaire, industrie : chaque secteur compte des acteurs qui cherchent à se démarquer. Google ne représente plus l\'unique vitrine. ChatGPT, Perplexity et les AI Overviews redéfinissent les parcours de recherche des décideurs.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises colmariennes grâce à une <strong>collaboration à distance efficace</strong>. Échanges réguliers en visioconférence, outils collaboratifs, suivi en temps réel via notre plateforme Rankwell One.',
    'Découvrez notre accompagnement pour les entreprises ambitieuses qui veulent conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui mesure le succès en conversions réelles, pas en classements.',
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
  badge: 'Rankwell pour Colmar',
  title: 'Ce que nous apportons aux entreprises colmariennes',
  subtitle: 'Une expertise Search de niveau national accessible via une collaboration à distance performante.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés depuis 2017, sur tout le territoire.',
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
  title: 'Le GEO : pourquoi ça change la donne pour le référencement',
  subtitle:
    'Le SEO classique cible les résultats traditionnels de Google. C\'est toujours fondamental. Mais une évolution majeure s\'opère : les utilisateurs posent de plus en plus leurs questions à des IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'art d\'optimiser vos contenus pour être mentionné par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif dépasse le classement : devenir la source que l\'IA choisit de citer.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient des passages faciles à extraire et reformuler. Définitions claires, listes ordonnées, données chiffrées avec leurs sources. Nous structurons vos contenus pour maximiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source crédible sur un sujet. Pas seulement si vous avez rédigé un contenu, mais si votre empreinte digitale globale démontre une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions externes : guides œnotouristiques, presse spécialisée, avis d\'experts. Le netlinking reste essentiel, mais sous une forme renouvelée.',
    },
  ],
};

// ============================================
// CALLOUT COLMAR
// ============================================
export const calloutData = {
  label: 'Le contexte économique colmarien',
  text: 'Colmar Agglomération compte près de 115 000 habitants et représente le cœur de la Route des Vins d\'Alsace. Avec plus de 3 millions de visiteurs par an, la ville est l\'une des destinations touristiques majeures du Grand Est. Viticulture, marchés de Noël, patrimoine médiéval : un écosystème unique. Une visibilité digitale optimisée permet d\'attirer une clientèle internationale.',
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
  subtitle: 'Beaucoup d\'agences évoquent le ROI. Voici ce que cela signifie concrètement chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans potentiel commercial n\'a pas de sens. Notre indicateur principal, c\'est l\'impact sur votre activité : leads générés, réservations, chiffre d\'affaires attribué.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre mission inclut de vous alerter quand une direction semble inadaptée. Un partenaire qui valide tout n\'est pas un vrai partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui conçoit votre stratégie est celui qui la déploie. Aucun intermédiaire. Vous disposez d\'un interlocuteur qui maîtrise votre dossier dans les moindres détails.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Vous visualisez l\'impact réel en temps réel, pas des métriques de surface dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement vous accompagner.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de leads ou de réservations. Vous recherchez un partenaire pour élaborer et déployer une stratégie Search performante.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez identifié que ChatGPT et les IA transforment les habitudes de recherche. Vous souhaitez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et voulez intégrer les fondamentaux SEO et GEO dès la conception. L\'optimisation en amont évite les reprises coûteuses ultérieures.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO plafonne malgré les investissements. Vous avez besoin d\'un diagnostic objectif pour identifier les véritables freins et définir les priorités.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas l\'expertise. Une agence locale peut utiliser des méthodes obsolètes. Ce qui compte, c\'est la compétence, la méthodologie et les résultats prouvés.',
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
  title: 'Nos services GEO & SEO à Colmar',
  subtitle: 'Quatre services complémentaires pour optimiser votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, éditoriale et concurrentielle de votre présence digitale. Des recommandations priorisées pour avancer vite.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site exhaustive : arborescence, balisage, maillage interne et Core Web Vitals pour un site performant.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens qualitatifs pour renforcer votre autorité de domaine. Partenariats ciblés, approche éthique et pérenne.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Production de contenus optimisés SEO et GEO, pensés pour répondre aux requêtes et générer des résultats commerciaux.',
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
  subtitle: 'Du premier contact jusqu\'à la mise en œuvre, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour comprendre vos enjeux. Sans argumentaire commercial.',
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
  title: 'Ce que les entreprises colmariennes gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises à Colmar ?',
      answer: 'Oui, nous collaborons avec des entreprises colmariennes depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance est parfaitement fluide.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Colmar ?',
      answer: 'Nous intervenons dans les secteurs phares de Colmar : viticulture et domaines viticoles, œnotourisme, hôtellerie-restauration, artisanat, commerce, e-commerce. Le dénominateur commun : des entreprises qui veulent convertir leur visibilité Search en résultats commerciaux.',
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
  title: 'Nous accompagnons aussi des entreprises dans ces villes',
  cities: [
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
    { label: 'Metz', href: '/agence-geo-seo/france/metz' },
    { label: 'Nancy', href: '/agence-geo-seo/france/nancy' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Beaune', href: '/agence-geo-seo/france/beaune' },
    { label: 'Dijon', href: '/agence-geo-seo/france/dijon' },
  ],
};
