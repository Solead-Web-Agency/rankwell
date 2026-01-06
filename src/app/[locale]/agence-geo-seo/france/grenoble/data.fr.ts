/**
 * DATA - Page Grenoble (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/grenoble (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Grenoble | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises grenobloises. Référencement Google et optimisation pour les moteurs IA. Approche business centrix orientée résultats.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Grenoble' },
  ] as BreadcrumbItem[],
  badge: 'grenoble',
  title: 'Agence GEO et SEO à Grenoble',
  description:
    'Capitale technologique des Alpes, Grenoble concentre innovation et recherche. Notre expertise SEO et GEO accompagne les entreprises grenobloises dans leur visibilité digitale.',
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
  badge: 'Grenoble',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search accessible aux entreprises grenobloises',
  paragraphs: [
    'L\'écosystème grenoblois est unique : tech, recherche, industrie de pointe. La concurrence digitale y est intense, portée par des acteurs innovants. Google ne suffit plus. Les IA conversationnelles comme ChatGPT ou Perplexity captent une part croissante des recherches.',
    'Rankwell accompagne les entreprises françaises depuis 2017. Notre savoir-faire SEO et GEO est accessible aux acteurs grenoblois via une <strong>collaboration à distance efficace</strong> : visios régulières, outils partagés, suivi en temps réel.',
    'Notre objectif : vous rendre visible là où vos prospects cherchent, que ce soit sur Google ou via les moteurs IA. Une approche <strong>orientée business</strong>, pas orientée vanity metrics.',
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
  badge: 'Rankwell pour Grenoble',
  title: 'Ce que nous apportons aux entreprises grenobloises',
  subtitle: 'L\'expertise d\'une agence nationale, accessible à distance.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Entreprises accompagnées depuis 2017.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Google ET moteurs IA dès le départ.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration fluide',
      description: 'Visios, outils partagés, disponibilité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Experts seniors',
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
    'Au-delà des 10 liens bleus de Google, les IA conversationnelles redéfinissent la recherche d\'information.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) : l\'art d\'optimiser vos contenus pour être cités par les IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Devenir la source que l\'IA recommande.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis : définitions, listes, données chiffrées. Structurer vos contenus pour faciliter cette extraction maximise votre visibilité.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les modèles de langage évaluent votre expertise globale sur un sujet. Un ensemble cohérent de contenus renforce votre crédibilité algorithmique.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent les sources pour valider votre légitimité. Être mentionné sur des sites de référence amplifie votre signal de confiance.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Grenoble en chiffres',
  text: 'Avec plus de 160 000 habitants et un écosystème tech de premier plan (CEA, CNRS, STMicroelectronics), Grenoble est un pôle d\'innovation majeur. La visibilité digitale y est un enjeu stratégique pour se démarquer.',
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
        'Les positions ne paient pas les factures. On se concentre sur les leads générés, les ventes attribuées, le retour sur investissement réel.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Une stratégie bancale, on vous le dit. Notre rôle de partenaire implique parfois de challenger vos certitudes.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La même personne pense et exécute votre stratégie. Un interlocuteur unique qui maîtrise votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Accès temps réel à vos performances. Données Search connectées à vos métriques business.',
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
  subtitle: 'Nous accompagnons les entreprises qui veulent convertir leur visibilité en résultats mesurables.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de business. Vous cherchez une stratégie Search qui délivre.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA changent la recherche d\'information. Vous voulez une agence qui anticipe ces évolutions.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Intégrer le SEO et le GEO dès la conception évite les corrections coûteuses après lancement.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre référencement plafonne. Un audit objectif identifie les freins et les leviers prioritaires.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité ne fait pas l\'expertise. Ce qui compte : la méthode, l\'expérience, les résultats prouvés.',
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
  title: 'Nos services GEO & SEO à Grenoble',
  subtitle: 'Quatre services complémentaires pour développer votre visibilité en ligne.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie les obstacles et les opportunités de croissance.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, balisage et performance. Les fondations d\'un SEO robuste.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour consolider votre autorité. Une approche éthique et efficace.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu qui performe et qui convertit.',
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
  subtitle: 'Un processus structuré, de la découverte à l\'exécution.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour cerner vos enjeux. Pas de discours commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, environnement concurrentiel.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie personnalisée avec actions priorisées par impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Mise en œuvre, mesure, itération. Suivi transparent via Rankwell One.',
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
  title: 'Ce que les entreprises grenobloises gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus. Voici l\'avantage d\'une approche combinée.',
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
      question: 'Travaillez-vous avec des entreprises à Grenoble ?',
      answer: 'Oui, nous accompagnons des entreprises grenobloises depuis plusieurs années. Visios régulières, plateforme Rankwell One, consultant senior dédié. La distance n\'est pas un frein.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Grenoble ?',
      answer: 'Tech, industrie, services, recherche : nous travaillons avec tous les secteurs. Le point commun de nos clients : vouloir générer du business via le Search, pas juste du trafic.',
    },
    {
      id: '3',
      question: 'Comment fonctionne la collaboration à distance ?',
      answer: 'Visioconférences régulières, outils partagés, accès temps réel à vos données via Rankwell One. Un consultant senior dédié reste votre interlocuteur privilégié.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'Le GEO optimise vos contenus pour les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. L\'objectif : être cité comme source de référence sur votre expertise.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Variables selon vos objectifs et votre contexte concurrentiel. Premier échange gratuit pour évaluer votre situation et proposer une estimation réaliste.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'SEO/GEO : 3 à 6 mois pour des résultats tangibles. SEA : quelques semaines. On vous donne des projections honnêtes dès le départ.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On analyse votre situation et on vous donne notre avis.',
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
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
  ],
};
