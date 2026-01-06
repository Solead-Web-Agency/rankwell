/**
 * DATA - Page Lyon (Agence GEO & SEO pour les entreprises lyonnaises)
 * URL: /agence-geo-seo/france/lyon (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Lyon, Agence GEO Lyon, Référencement Lyon
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises lyonnaises | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Lyon. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Lyon' },
  ] as BreadcrumbItem[],
  badge: 'lyon',
  title: 'Agence GEO et SEO à Lyon',
  description:
    'Lyon est le deuxième pôle économique de France. Les entreprises lyonnaises évoluent dans un environnement compétitif où la visibilité digitale fait la différence. SEO, GEO, SEA et Data.',
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
  badge: 'Lyon',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises lyonnaises',
  paragraphs: [
    'Le marché lyonnais est compétitif. Santé, industrie, tech, services : chaque secteur a ses acteurs qui se disputent la visibilité digitale. Google ne suffit plus. ChatGPT, Perplexity, Google AI Overviews captent une part croissante des recherches B2B et B2C.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises lyonnaises avec une <strong>collaboration à distance qui fonctionne</strong>. Visioconférences régulières, outils partagés, transparence totale via notre plateforme Rankwell One.',
    'Découvrez comment nous aidons les entreprises ambitieuses à devenir visibles sur Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui mesure le succès en conversions, pas en positions.',
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
  badge: 'Rankwell pour Lyon',
  title: 'Ce que nous apportons aux entreprises lyonnaises',
  subtitle: 'Une expertise Search nationale accessible avec une collaboration à distance efficace.',
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
      description: 'Optimisation Google ET moteurs IA dès le départ.',
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
      description: 'Pas de junior sur votre dossier.',
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
    'Le SEO traditionnel vise les 10 liens bleus de Google. C\'est toujours important. Mais une transformation majeure est en cours : les utilisateurs posent de plus en plus leurs questions à des IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Pas juste ranker sur Google, mais devenir LA source que l\'IA choisit de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA cherchent des passages qu\'elles peuvent extraire et reformuler facilement. Des définitions claires. Des listes structurées. Des données chiffrées avec leurs sources. On structure vos contenus pour maximiser les citations.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet. Pas juste si vous avez écrit un article dessus, mais si l\'ensemble de votre présence digitale démontre une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions sur d\'autres sites : articles de presse, études sectorielles, forums spécialisés. Le netlinking reste crucial, mais différemment.',
    },
  ],
};

// ============================================
// CALLOUT LYON
// ============================================
export const calloutData = {
  label: 'Le contexte économique lyonnais',
  text: 'Lyon Métropole représente plus de 1,4 million d\'habitants et le deuxième bassin économique français. Les secteurs santé-biotech, industrie, tech et services professionnels y sont particulièrement développés. La concurrence digitale est intense. Une stratégie Search solide fait la différence.',
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
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé qui ne génère pas de business, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées, coût d\'acquisition.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre job, c\'est aussi de vous dire quand vous faites fausse route. Un partenaire qui dit oui à tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui réfléchit à votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire. Vous avez un interlocuteur qui connaît votre dossier dans le détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous voyez l\'impact réel en temps réel, pas des vanity metrics dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez un partenaire pour structurer et exécuter une stratégie Search efficace.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez compris que ChatGPT et les IA changent la donne. Vous voulez une agence qui sait optimiser pour ces nouveaux moteurs, pas juste pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et voulez partir sur de bonnes bases SEO et GEO. L\'optimisation dès la conception évite les corrections coûteuses après coup.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO stagne malgré vos efforts. Vous avez besoin d\'un audit objectif pour identifier les vrais problèmes et les priorités d\'action.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes dépassées. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats.',
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
  title: 'Nos services GEO & SEO à Lyon',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable.',
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
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu qui se positionne, qui convertit. Pas du remplissage.',
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
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 min en visio pour comprendre vos enjeux. Pas de pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, concurrence.',
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
      description: 'Production, mesure, ajustement. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises lyonnaises gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises à Lyon ?',
      answer: 'Oui, nous accompagnons des entreprises lyonnaises depuis plusieurs années. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration est fluide et efficace.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Lyon ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs : santé-biotech (un secteur fort à Lyon), industrie et B2B, tech et SaaS, services professionnels, e-commerce. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre situation. Roadmap avec priorités claires. Puis exécution avec un consultant senior dédié et des points réguliers. Vous suivez l\'avancement en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand on leur pose des questions liées à votre expertise. C\'est le futur du Search, et on l\'intègre dans tous nos projets.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. On travaille sur des forfaits mensuels ou des projets ponctuels. Le plus simple : un premier échange pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats significatifs arrivent généralement entre 3 et 6 mois selon le point de départ et la concurrence. En SEA, les résultats sont plus rapides (quelques semaines). On vous donne des projections réalistes dès le départ, pas des promesses intenables.',
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
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
  ],
};
