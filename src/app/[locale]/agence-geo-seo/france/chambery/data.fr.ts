/**
 * DATA - Page Chambéry (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/chambery (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Chambéry | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Chambéry. Référencement Google et optimisation pour les moteurs IA. Collaboration à distance efficace. Résultats mesurables.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Chambéry' },
  ] as BreadcrumbItem[],
  badge: 'chambéry',
  title: 'Agence GEO et SEO à Chambéry',
  description:
    'Porte des Alpes et capitale historique de la Savoie, Chambéry accueille un tissu économique diversifié. Notre expertise SEO et GEO accompagne les entreprises locales vers plus de visibilité.',
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
  badge: 'Chambéry',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search pour les entreprises chambériennes',
  paragraphs: [
    'Chambéry n\'est pas qu\'une étape vers les stations. C\'est un pôle économique à part entière, entre industrie, tourisme et services. La concurrence digitale y existe et s\'intensifie.',
    'Rankwell accompagne les entreprises françaises depuis 2017 avec une approche qui combine SEO et GEO. Pour les acteurs chambériens, cela signifie une <strong>expertise de haut niveau accessible à distance</strong> : visios, outils partagés, suivi en temps réel.',
    'Les moteurs de recherche évoluent. ChatGPT, Perplexity et les AI Overviews de Google changent les règles. Notre méthodologie intègre ces transformations pour une <strong>visibilité pérenne</strong>.',
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
  badge: 'Rankwell pour Chambéry',
  title: 'Ce que nous apportons aux entreprises chambériennes',
  subtitle: 'L\'expertise d\'une agence nationale, la proximité d\'un partenaire engagé.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Entreprises françaises accompagnées.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO intégré',
      description: 'Google + IA dès le premier jour.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration agile',
      description: 'Visios, réactivité, outils communs.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Expérience confirmée garantie.',
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
    'Le SEO vise les résultats Google. Le GEO étend cette ambition aux réponses générées par les IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO signifie Generative Engine Optimization. L\'objectif : optimiser vos contenus pour qu\'ils soient cités par ChatGPT, Perplexity ou les AI Overviews de Google.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis. Structurer vos contenus avec des définitions claires et des données sourcées maximise vos chances d\'être cité.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent votre légitimité globale sur un sujet. Un corpus de contenus cohérent renforce cette perception.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA recoupent les sources. Être mentionné sur des sites de référence augmente votre crédibilité algorithmique.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Chambéry en chiffres',
  text: 'Avec près de 60 000 habitants et une position stratégique aux portes des Alpes, Chambéry est un carrefour économique entre Lyon, Grenoble et l\'Italie. Tourisme, industrie, services : les opportunités digitales sont réelles.',
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
        'Pas les positions, mais les résultats business : leads, ventes, coût d\'acquisition. Ce qui impacte votre chiffre d\'affaires.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si la direction choisie nous semble hasardeuse, on le dit. Un partenaire honnête vaut mieux qu\'un prestataire complaisant.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La même personne conçoit et déploie votre stratégie. Un seul interlocuteur, une vraie connaissance de votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Performances Search et métriques business réunies sur une plateforme accessible en temps réel.',
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
  subtitle: 'Nous travaillons avec des entreprises qui veulent convertir leur visibilité en chiffre d\'affaires.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre présence en ligne ne génère pas assez de business. Vous cherchez une approche structurée.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA bouleversent la recherche. Vous voulez un partenaire qui maîtrise ces nouveaux territoires.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Intégrer SEO et GEO dès la conception évite les correctifs après coup.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre référencement stagne. Un regard externe peut débloquer la situation.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique n\'est pas un gage de compétence. Privilégiez l\'expertise et les résultats.',
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
  title: 'Nos services GEO & SEO à Chambéry',
  subtitle: 'Quatre services complémentaires pour booster votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Examen technique, sémantique et concurrentiel de votre site. Un diagnostic actionnable pour orienter votre stratégie.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site méthodique : structure de pages, balises, liens internes et rapidité de chargement au service du référencement.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Création d\'un profil de liens entrants robuste. Approche qualitative, partenariats pertinents, sans techniques black-hat.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus SEO et GEO-ready, rédigés pour répondre aux requêtes utilisateurs et favoriser les conversions.',
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
  subtitle: 'Une méthode éprouvée, du premier contact à l\'exécution.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour comprendre vos enjeux. Aucun engagement.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic SEO, GEO-readiness, technique et concurrence.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Plan d\'action priorisé selon l\'impact business attendu.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Déploiement, suivi, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises chambériennes gagnent avec le GEO',
  subtitle: 'Dépasser le SEO classique pour capter les nouveaux comportements de recherche.',
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
      question: 'Travaillez-vous avec des entreprises à Chambéry ?',
      answer: 'Oui. Nous accompagnons des entreprises chambériennes avec la même rigueur que nos clients des grandes métropoles. Visios, Rankwell One, consultant senior dédié.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Chambéry ?',
      answer: 'Tourisme, industrie, services, commerce : tous les secteurs. Notre approche s\'adapte à votre contexte spécifique.',
    },
    {
      id: '3',
      question: 'Comment fonctionne la collaboration à distance ?',
      answer: 'Visios régulières, outils de travail partagés, accès temps réel aux données via Rankwell One. Votre consultant senior reste joignable et réactif.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'L\'optimisation pour les moteurs IA (ChatGPT, Perplexity, AI Overviews). Être cité comme source fiable quand les IA répondent à des questions de votre domaine.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Ils varient selon vos objectifs et votre environnement concurrentiel. Premier échange gratuit pour évaluer et proposer une estimation.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'En SEO/GEO, 3 à 6 mois pour des résultats significatifs. En SEA, quelques semaines. On fixe des attentes réalistes dès le départ.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. On écoute, on analyse, on vous dit ce qu\'on en pense. Sans engagement.',
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
    { label: 'Valence', href: '/agence-geo-seo/france/valence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
  ],
};
