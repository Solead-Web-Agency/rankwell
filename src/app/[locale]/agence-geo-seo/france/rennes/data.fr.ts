/**
 * DATA - Page Rennes (Agence GEO & SEO pour les entreprises rennaises)
 * URL: /agence-geo-seo/france/rennes (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Rennes, Agence GEO Rennes, Référencement Rennes
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises rennaises | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Rennes. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Rennes' },
  ] as BreadcrumbItem[],
  badge: 'rennes',
  title: 'Agence GEO et SEO à Rennes',
  description:
    'Rennes est devenue le deuxième pôle numérique français. Les entreprises rennaises évoluent dans un écosystème tech où la visibilité digitale représente un enjeu stratégique. SEO, GEO, SEA et Data.',
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
  badge: 'Rennes',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises rennaises',
  paragraphs: [
    'Rennes s\'est imposée comme capitale du numérique en région. Startups, ESN, grands groupes tech : la concurrence digitale y est forte. Google ne représente plus l\'unique canal de visibilité. ChatGPT, Perplexity et les AI Overviews transforment radicalement les parcours de recherche des décideurs B2B et B2C.',
    'Rankwell accompagne des entreprises partout en France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises rennaises via une <strong>collaboration à distance efficace</strong>. Échanges réguliers en visioconférence, outils collaboratifs, suivi en temps réel grâce à notre plateforme Rankwell One.',
    'Découvrez comment nous aidons les entreprises ambitieuses à conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui mesure la réussite sur les conversions, pas sur les positions.',
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
  badge: 'Rankwell pour Rennes',
  title: 'Ce que nous apportons aux entreprises rennaises',
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
    'Le SEO classique cible les résultats traditionnels de Google. C\'est toujours fondamental. Mais une évolution majeure est en cours : les utilisateurs interrogent de plus en plus directement des intelligences artificielles.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'art d\'optimiser vos contenus pour être cité par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de ranker, mais de devenir la source que l\'IA décide de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA recherchent des passages faciles à extraire et reformuler. Définitions précises, listes ordonnées, données chiffrées avec leurs sources. Nous structurons vos contenus pour maximiser les citations.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs analysent si vous représentez une source légitime sur un sujet. Pas uniquement si vous avez rédigé un article, mais si votre présence digitale globale témoigne d\'une expertise approfondie.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité grâce aux mentions externes : couverture presse, études sectorielles, discussions dans des communautés spécialisées. Le netlinking reste central, mais sous une forme différente.',
    },
  ],
};

// ============================================
// CALLOUT RENNES
// ============================================
export const calloutData = {
  label: 'Le contexte économique rennais',
  text: 'Rennes Métropole rassemble plus de 450 000 habitants et s\'est hissée au rang de deuxième pôle numérique français après Paris. Plus de 70 000 étudiants, un écosystème tech dense (Rennes Atalante, French Tech) et des grands groupes (Orange, SII) créent un environnement où la visibilité digitale est un différenciateur majeur.',
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
  subtitle: 'Beaucoup d\'agences évoquent le ROI. Voici notre définition concrète.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans potentiel commercial n\'a pas de sens. Notre indicateur clé, c\'est l\'impact sur votre activité : leads générés, ventes attribuées, coût d\'acquisition optimisé.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle inclut de vous alerter quand une direction semble erronée. Un partenaire qui dit oui à tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui élabore votre stratégie est celui qui l\'exécute. Aucun intermédiaire. Vous disposez d\'un interlocuteur qui maîtrise parfaitement votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos résultats business. Vous visualisez l\'impact réel en temps réel, pas des métriques de surface dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de prospects ou de ventes. Vous recherchez un partenaire pour concevoir et exécuter une stratégie Search performante.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez compris que ChatGPT et les IA modifient les comportements de recherche. Vous voulez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et voulez intégrer les fondamentaux SEO et GEO dès le départ. L\'optimisation en amont évite les corrections coûteuses par la suite.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO plafonne malgré vos investissements. Vous avez besoin d\'un diagnostic objectif pour identifier les véritables freins et définir les priorités.',
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
  title: 'Nos services GEO & SEO à Rennes',
  subtitle: 'Quatre services complémentaires pour booster votre acquisition digitale.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. On repère ce qui bloque votre visibilité et ce qui peut l\'amplifier.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, performance technique. Les bases d\'un référencement qui dure.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens qualitatifs pour renforcer votre autorité. Pas de spam, pas de réseaux artificiels.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit votre audience cible.',
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
      description: 'Diagnostic exhaustif : SEO, GEO-readiness, technique, analyse concurrentielle.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec priorités classées par impact.',
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
  title: 'Ce que les entreprises rennaises gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises à Rennes ?',
      answer: 'Oui, nous collaborons avec des entreprises rennaises depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance est parfaitement fluide.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Rennes ?',
      answer: 'Nous intervenons dans tous les secteurs : tech et numérique (le cœur de l\'écosystème rennais), services B2B, industrie, agroalimentaire, e-commerce. Le dénominateur commun : des entreprises qui veulent transformer leur visibilité Search en résultats business.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre situation digitale. Élaboration d\'une roadmap avec priorités claires. Puis exécution par un consultant senior dédié avec des points réguliers. Le suivi s\'effectue en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : faire en sorte que vos contenus soient cités par ces IA lorsqu\'elles répondent à des questions liées à votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans chaque projet.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs dépendent de vos objectifs, votre secteur et l\'intensité concurrentielle. Nous proposons des accompagnements mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour évaluer votre contexte et vous donner une estimation réaliste. Aucune surprise par la suite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats tangibles émergent généralement entre 3 et 6 mois selon votre point de départ et le niveau de concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous fournissons des projections réalistes dès le départ, sans promesses impossibles.',
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
    { label: 'Brest', href: '/agence-geo-seo/france/brest' },
    { label: 'Quimper', href: '/agence-geo-seo/france/quimper' },
    { label: 'Saint-Malo', href: '/agence-geo-seo/france/saint-malo' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
