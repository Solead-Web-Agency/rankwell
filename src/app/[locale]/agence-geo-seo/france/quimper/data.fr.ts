/**
 * DATA - Page Quimper (Agence GEO & SEO pour les entreprises quimpéroises)
 * URL: /agence-geo-seo/france/quimper (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Quimper, Agence GEO Quimper, Référencement Quimper
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises quimpéroises | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Quimper. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Quimper' },
  ] as BreadcrumbItem[],
  badge: 'quimper',
  title: 'Agence GEO et SEO à Quimper',
  description:
    'Quimper est la capitale culturelle de la Cornouaille et un pôle économique dynamique du Finistère sud. Les entreprises quimpéroises méritent une visibilité digitale à la hauteur de leur savoir-faire. SEO, GEO, SEA et Data.',
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
  badge: 'Quimper',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises quimpéroises',
  paragraphs: [
    'Quimper et la Cornouaille constituent un bassin économique diversifié. Agroalimentaire, tourisme, artisanat d\'art, services : chaque secteur compte des acteurs qui cherchent à se démarquer. Google ne représente plus l\'unique canal de visibilité. ChatGPT, Perplexity et les AI Overviews transforment les habitudes de recherche des décideurs.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises quimpéroises grâce à une <strong>collaboration à distance efficace</strong>. Points réguliers en visioconférence, outils collaboratifs, suivi permanent via notre plateforme Rankwell One.',
    'Découvrez notre accompagnement pour les entreprises ambitieuses qui veulent conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui mesure le succès en conversions réelles, pas en positions.',
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
  badge: 'Rankwell pour Quimper',
  title: 'Ce que nous apportons aux entreprises quimpéroises',
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
      description: 'Visios programmées, outils partagés, réactivité.',
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
    'Le SEO traditionnel cible les résultats classiques de Google. C\'est toujours fondamental. Mais une évolution majeure s\'opère : les utilisateurs posent de plus en plus leurs questions à des IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'art d\'optimiser vos contenus pour être cité par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif dépasse le classement : devenir la source que l\'IA choisit de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient des passages faciles à extraire et reformuler. Définitions claires, listes ordonnées, données chiffrées avec leurs sources. Nous structurons vos contenus pour maximiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source crédible sur un sujet. Pas seulement si vous avez rédigé un contenu, mais si l\'ensemble de votre présence digitale témoigne d\'une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions sur d\'autres sites : presse locale et nationale, études de marché, communautés spécialisées. Le netlinking reste clé, mais différemment.',
    },
  ],
};

// ============================================
// CALLOUT QUIMPER
// ============================================
export const calloutData = {
  label: 'Le contexte économique quimpérois',
  text: 'Quimper Bretagne Occidentale rassemble plus de 100 000 habitants et constitue le moteur économique du Finistère sud. L\'agroalimentaire (Hénaff, Tipiak), le tourisme culturel (faïenceries, Festival de Cornouaille) et un tissu de PME dynamiques forment un écosystème où la visibilité digitale ouvre des marchés au-delà de la région.',
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
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici notre définition concrète.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans valeur commerciale est inutile. Notre indicateur clé, c\'est l\'impact sur votre activité : leads qualifiés, ventes générées, coût d\'acquisition optimisé.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle inclut de vous alerter si une direction semble inadaptée. Un partenaire qui valide tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui élabore votre stratégie est celui qui l\'exécute. Aucun intermédiaire. Vous disposez d\'un interlocuteur qui connaît parfaitement votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos résultats business. Vous voyez l\'impact réel en temps réel, pas des vanity metrics dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons véritablement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de leads ou de ventes. Vous cherchez un partenaire pour élaborer et déployer une stratégie Search efficace.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez identifié que ChatGPT et les IA modifient les comportements de recherche. Vous voulez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et voulez intégrer les bonnes pratiques SEO et GEO dès la conception. L\'optimisation en amont évite les corrections coûteuses ultérieures.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO plafonne malgré les efforts. Vous avez besoin d\'un diagnostic objectif pour identifier les véritables freins et hiérarchiser les priorités.',
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
  title: 'Nos services GEO & SEO à Quimper',
  subtitle: 'Quatre services complémentaires pour propulser votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle de fond. Un bilan exhaustif pour tracer votre feuille de route SEO.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site rigoureuse : architecture de contenu, maillage interne, vitesse et Core Web Vitals pour un socle technique optimal.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Développement d\'un profil de liens solide via des partenariats éditoriaux de confiance. Pas de techniques douteuses, des backlinks qui durent.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Production de contenus SEO et GEO-ready qui captent les requêtes pertinentes et accompagnent vos prospects jusqu\'à la conversion.',
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
  subtitle: 'Du premier contact à l\'exécution, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour appréhender vos enjeux. Sans argumentaire commercial.',
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
      description: 'Stratégie sur mesure avec priorités classées par impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises quimpéroises gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises à Quimper ?',
      answer: 'Oui, nous collaborons avec des entreprises quimpéroises depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance fonctionne parfaitement.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Quimper ?',
      answer: 'Nous intervenons dans tous les secteurs : agroalimentaire (un pilier de l\'économie quimpéroise), tourisme et hôtellerie, artisanat, services B2B, e-commerce. Le point commun : des entreprises qui veulent transformer leur visibilité Search en résultats commerciaux.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre présence digitale. Élaboration d\'une roadmap avec priorités claires. Puis exécution par un consultant senior dédié avec des points réguliers. Le suivi s\'effectue en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : faire en sorte que vos contenus soient cités par ces IA lorsqu\'elles traitent de questions liées à votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans chaque projet.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs varient selon vos objectifs, votre secteur et l\'intensité concurrentielle. Nous proposons des forfaits mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour évaluer votre contexte et vous donner une estimation réaliste. Aucune surprise par la suite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats tangibles apparaissent généralement entre 3 et 6 mois selon votre point de départ et le niveau de concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous communiquons des projections réalistes dès le départ, sans promesses impossibles.',
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
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Brest', href: '/agence-geo-seo/france/brest' },
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
