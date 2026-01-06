/**
 * DATA - Page Dijon (Agence GEO & SEO pour les entreprises dijonnaises)
 * URL: /agence-geo-seo/france/dijon (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Dijon, Agence GEO Dijon, Référencement Dijon
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises dijonnaises | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Dijon. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Dijon' },
  ] as BreadcrumbItem[],
  badge: 'dijon',
  title: 'Agence GEO et SEO à Dijon',
  description:
    'Dijon est la capitale de la Bourgogne et un pôle économique majeur de l\'Est de la France. Les entreprises dijonnaises évoluent sur des marchés où la présence digitale devient indispensable. SEO, GEO, SEA et Data.',
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
  badge: 'Dijon',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises dijonnaises',
  paragraphs: [
    'Le tissu économique dijonnais est riche et diversifié. Agroalimentaire de renommée mondiale, pharmacie, services aux entreprises, commerce : chaque secteur compte des acteurs qui rivalisent pour capter l\'attention en ligne. Google ne représente plus l\'unique canal. ChatGPT, Perplexity et les AI Overviews modifient profondément les parcours de recherche.',
    'Rankwell collabore avec des entreprises sur tout le territoire depuis 2017. Notre expertise GEO et SEO est disponible pour les entreprises dijonnaises via une <strong>collaboration à distance structurée et efficace</strong>. Rendez-vous réguliers en visioconférence, outils partagés, transparence absolue grâce à notre plateforme Rankwell One.',
    'Découvrez notre accompagnement pour les entreprises ambitieuses qui veulent conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> où le succès se mesure en conversions, pas en classements.',
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
  badge: 'Rankwell pour Dijon',
  title: 'Ce que nous apportons aux entreprises dijonnaises',
  subtitle: 'Une expertise Search de niveau national accessible via une collaboration à distance efficace.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés depuis 2017, dans toute la France.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Optimisation Google ET moteurs IA de base.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration efficace',
      description: 'Visios programmées, outils communs, réactivité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Aucun junior sur votre projet.',
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
    'Le SEO conventionnel cible les résultats classiques de Google. C\'est toujours essentiel. Mais une évolution profonde est en marche : les internautes posent de plus en plus directement leurs questions aux IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) représente la discipline qui consiste à optimiser vos contenus pour être mentionné par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu dépasse le simple classement : il s\'agit de devenir LA référence que l\'IA choisit de citer.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA sélectionnent des passages qu\'elles peuvent extraire et reformuler aisément. Définitions limpides, listes structurées, chiffres accompagnés de leurs sources. Nous concevons vos contenus pour maximiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous constituez une source crédible sur un sujet. Pas uniquement si vous avez publié un contenu dessus, mais si l\'ensemble de votre présence en ligne démontre une expertise solide et cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA valident votre crédibilité via les mentions sur d\'autres sites : couverture presse, études sectorielles, discussions dans les communautés d\'experts. Le netlinking demeure crucial, mais sous une forme différente.',
    },
  ],
};

// ============================================
// CALLOUT DIJON
// ============================================
export const calloutData = {
  label: 'Le contexte économique dijonnais',
  text: 'Dijon Métropole regroupe plus de 260 000 habitants et constitue le moteur économique de la Bourgogne. L\'agroalimentaire (moutarde, cassis, commerce du vin), la pharmacie et les biotechnologies, ainsi qu\'une communauté universitaire de 35 000 étudiants font de Dijon un carrefour d\'opportunités où la visibilité digitale ouvre des marchés.',
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
  subtitle: 'Beaucoup d\'agences mentionnent le ROI. Voici ce que cela signifie chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Occuper la première place sur un mot-clé sans potentiel commercial n\'a pas de sens. Notre métrique centrale, c\'est l\'effet sur votre activité : leads obtenus, ventes générées, coût d\'acquisition optimisé.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre mission inclut de vous alerter si une orientation semble inadaptée. Un partenaire qui approuve tout systématiquement n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui élabore votre stratégie est celle qui l\'exécute. Aucun relais. Vous disposez d\'un interlocuteur qui connaît parfaitement votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos résultats business. Vous constatez l\'impact réel en temps réel, pas des indicateurs de façade dans un rapport mensuel.',
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
  subtitle: 'Notre expertise convient à différents profils d\'entreprises. Voici les situations où nous pouvons véritablement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site est en ligne mais ne génère pas suffisamment de prospects ou de ventes. Vous cherchez un partenaire pour bâtir et exécuter une stratégie Search qui fonctionne.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez compris que ChatGPT et les IA bouleversent les habitudes de recherche. Vous souhaitez une agence capable d\'optimiser pour ces nouveaux moteurs, pas seulement pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous créez un nouveau site et voulez intégrer les fondamentaux SEO et GEO dès le départ. L\'optimisation en amont évite les reprises coûteuses ultérieures.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO stagne malgré les efforts investis. Vous avez besoin d\'un audit impartial pour identifier les véritables obstacles et hiérarchiser les actions.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut perpétuer des pratiques dépassées. Ce qui importe, c\'est l\'expertise, la rigueur méthodologique et les résultats démontrés.',
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
  title: 'Nos services GEO & SEO à Dijon',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. On détecte ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance. Les bases d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens qualitatifs pour renforcer votre autorité. Pas de pratiques douteuses.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et génère des conversions.',
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
  subtitle: 'Du premier contact jusqu\'à l\'exécution, voici les étapes principales.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour saisir vos enjeux. Sans argumentaire commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic approfondi : SEO, GEO-readiness, technique, analyse concurrentielle.',
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
      description: 'Mise en œuvre, mesure, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises dijonnaises gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus. Voici ce que notre approche SEO + GEO apporte concrètement.',
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
      question: 'Travaillez-vous avec des entreprises à Dijon ?',
      answer: 'Oui, nous accompagnons des entreprises dijonnaises depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance est parfaitement fluide.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Dijon ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs : agroalimentaire (un domaine phare à Dijon), pharmacie et biotechnologies, commerce et distribution, services aux entreprises, e-commerce. Le dénominateur commun : des structures qui veulent transformer leur visibilité Search en résultats business.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit détaillé de votre présence digitale. Élaboration d\'une roadmap avec priorités claires. Puis exécution par un consultant senior dédié avec des points réguliers. Vous suivez la progression en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand elles traitent de questions relevant de votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans tous nos projets.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. Nous proposons des accompagnements mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour évaluer votre situation et vous fournir une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats significatifs émergent généralement entre 3 et 6 mois selon le point de départ et la concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous communiquons des projections réalistes dès le départ, pas des promesses impossibles à tenir.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On écoute, on analyse, on vous dit ce qu\'on en pense.',
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
    { label: 'Besançon', href: '/agence-geo-seo/france/besancon' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
