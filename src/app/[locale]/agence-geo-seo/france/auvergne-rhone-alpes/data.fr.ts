/**
 * DATA - Page Auvergne-Rhône-Alpes (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/auvergne-rhone-alpes (FR only)
 *
 * Page région SANS présence physique
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO en Auvergne-Rhône-Alpes | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises d\'Auvergne-Rhône-Alpes. Référencement Google et optimisation IA. Lyon, Grenoble, Annecy, Chambéry, Valence. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Auvergne-Rhône-Alpes' },
  ] as BreadcrumbItem[],
  badge: 'auvergne-rhône-alpes',
  title: 'Agence GEO et SEO en Auvergne-Rhône-Alpes',
  description:
    'Deuxième région économique de France, Auvergne-Rhône-Alpes concentre des entreprises ambitieuses dans la tech, l\'industrie et les services. Notre expertise SEO et GEO accompagne leur croissance digitale.',
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
  badge: 'Auvergne-Rhône-Alpes',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search pour les entreprises de la région',
  paragraphs: [
    'De Lyon à Grenoble, d\'Annecy à Valence, les entreprises d\'Auvergne-Rhône-Alpes font face à une concurrence digitale croissante. Les moteurs de recherche traditionnels ne suffisent plus : ChatGPT, Perplexity et les AI Overviews de Google redistribuent les cartes.',
    'Rankwell intervient dans toute la région depuis 2017. Notre approche combine SEO et GEO pour construire une visibilité qui résiste aux évolutions du Search. <strong>Collaboration à distance fluide</strong>, outils partagés et transparence totale via Rankwell One.',
    'Que vous soyez à Lyon, Grenoble ou ailleurs dans la région, nous mettons à votre disposition la même expertise et la même exigence de résultats. L\'objectif : <strong>générer du business</strong>, pas des vanity metrics.',
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
  badge: 'Rankwell en Auvergne-Rhône-Alpes',
  title: 'Ce que nous apportons aux entreprises de la région',
  subtitle: 'Une expertise Search nationale déployée pour les acteurs régionaux.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés en France depuis 2017.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO intégré',
      description: 'Optimisation pour Google et les moteurs IA.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'À distance efficace',
      description: 'Visios, outils partagés, réactivité garantie.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Seniors uniquement',
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
    'Le SEO classique cible les 10 liens bleus de Google. Le GEO va plus loin : il vise les réponses générées par les IA conversationnelles.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'Le GEO (Generative Engine Optimization) optimise vos contenus pour qu\'ils soient cités par ChatGPT, Perplexity ou Google AI Overviews. L\'enjeu : devenir LA source de référence que les IA choisissent de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient les contenus structurés : définitions claires, listes organisées, données sourcées. Nous formatons vos contenus pour maximiser leur potentiel de citation.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent votre légitimité sur un sujet. Un corpus cohérent de contenus experts renforce votre crédibilité auprès des algorithmes IA.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Votre réputation digitale compte. Les IA croisent les sources : presse, études, forums spécialisés. Le netlinking évolue vers une stratégie de présence globale.',
    },
  ],
};

// ============================================
// CALLOUT RÉGION
// ============================================
export const calloutData = {
  label: 'Auvergne-Rhône-Alpes en chiffres',
  text: 'Avec 8 millions d\'habitants et un PIB de plus de 280 milliards d\'euros, Auvergne-Rhône-Alpes est la 2e région économique française. Tech, industrie, tourisme : les opportunités digitales sont massives, la concurrence aussi.',
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
        'Ranker sur un mot-clé sans impact business, ça ne nous intéresse pas. On pilote par les leads, les ventes, le coût d\'acquisition.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si votre stratégie fait fausse route, on vous le dit. Un vrai partenaire n\'acquiesce pas à tout.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui pense votre stratégie est celui qui l\'exécute. Un seul interlocuteur, expert de votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos résultats business. Performances visibles en temps réel.',
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
  subtitle: 'Notre accompagnement s\'adresse aux entreprises qui veulent transformer leur visibilité en résultats concrets.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site ne génère pas assez de leads ou de ventes. Vous cherchez une stratégie Search structurée et efficace.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA conversationnelles changent la donne et vous voulez une agence qui maîtrise ces nouveaux enjeux.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Un nouveau site se construit avec le SEO et le GEO dès le départ. Pas après coup.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre référencement stagne. Il vous faut un diagnostic objectif et des priorités claires.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne fait pas la compétence. Ce qui compte : l\'expertise, la méthode, les résultats.',
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
  title: 'Nos services GEO & SEO en Auvergne-Rhône-Alpes',
  subtitle: 'Quatre services complémentaires pour construire une visibilité durable et générer du business.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, analyse sémantique et étude concurrentielle pour identifier vos axes de progression.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Travail sur l\'architecture, les contenus et les performances de votre site pour maximiser son potentiel de référencement.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie d\'acquisition de liens provenant de sites pertinents et fiables. Zéro pratique douteuse, que du qualitatif.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus SEO et GEO-ready conçus pour répondre aux intentions de recherche et transformer les visiteurs en clients.',
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
  subtitle: 'Un process clair, de la prise de contact à l\'exécution.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour comprendre vos enjeux. Sans pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Analyse complète : SEO, GEO-readiness, technique, concurrence.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Plan d\'action sur mesure, priorisé par impact business.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Mise en œuvre, suivi, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises d\'Auvergne-Rhône-Alpes gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises en Auvergne-Rhône-Alpes ?',
      answer: 'Oui, nous accompagnons des entreprises de toute la région : Lyon, Grenoble, Annecy, Chambéry, Valence et au-delà. Visios régulières, accès à Rankwell One, consultant senior dédié. La collaboration à distance fonctionne.',
    },
    {
      id: '2',
      question: 'Intervenez-vous dans toutes les villes de la région ?',
      answer: 'Nous travaillons avec des entreprises partout en Auvergne-Rhône-Alpes. Notre mode de collaboration à distance permet une flexibilité totale, sans compromis sur la qualité de l\'accompagnement.',
    },
    {
      id: '3',
      question: 'Comment se déroule la collaboration à distance ?',
      answer: 'Visioconférences régulières, outils de travail partagés, accès temps réel à vos performances via Rankwell One. Vous avez un consultant senior dédié, joignable par email et téléphone.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'Le GEO (Generative Engine Optimization) optimise vos contenus pour les moteurs IA : ChatGPT, Perplexity, Google AI Overviews. L\'objectif : être cité comme source fiable quand ces IA répondent à des questions liées à votre expertise.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs varient selon vos objectifs, votre secteur et la concurrence. Forfaits mensuels ou projets ponctuels. Premier échange gratuit pour évaluer votre situation et vous donner une estimation claire.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'En SEO/GEO, comptez 3 à 6 mois pour des résultats significatifs selon votre point de départ. En SEA, quelques semaines suffisent. On vous donne des projections réalistes, pas des promesses en l\'air.',
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
  buttonText: 'Prendre rendez-vous',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (pour le maillage interne)
// ============================================
export const autresVillesData = {
  title: 'Nous accompagnons aussi des entreprises dans ces villes',
  cities: [
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Grenoble', href: '/agence-geo-seo/france/grenoble' },
    { label: 'Annecy', href: '/agence-geo-seo/france/annecy' },
    { label: 'Chambéry', href: '/agence-geo-seo/france/chambery' },
    { label: 'Valence', href: '/agence-geo-seo/france/valence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
  ],
};
