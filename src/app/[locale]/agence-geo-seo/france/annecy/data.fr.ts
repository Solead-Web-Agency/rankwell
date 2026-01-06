/**
 * DATA - Page Annecy (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/annecy (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Annecy | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises d\'Annecy et sa région. Référencement Google et optimisation IA. Collaboration à distance efficace. Approche orientée résultats.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Annecy' },
  ] as BreadcrumbItem[],
  badge: 'annecy',
  title: 'Agence GEO et SEO à Annecy',
  description:
    'Entre lac et montagnes, Annecy abrite un tissu économique dynamique tourné vers l\'outdoor, le tourisme et les services. Notre expertise SEO et GEO accompagne cette croissance.',
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
  badge: 'Annecy',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search pour les entreprises annéciennes',
  paragraphs: [
    'Annecy n\'est pas qu\'une carte postale. C\'est un bassin économique actif où se côtoient marques outdoor internationales, acteurs du tourisme et entreprises de services. La compétition digitale y est réelle.',
    'Depuis 2017, Rankwell accompagne les entreprises françaises dans leur visibilité Search. Notre expertise SEO et GEO est accessible aux acteurs annéciens grâce à une <strong>collaboration à distance rodée</strong> : visioconférences, outils partagés, transparence totale.',
    'Google ne suffit plus. ChatGPT, Perplexity, les AI Overviews captent une part croissante des recherches. Notre approche intègre ces nouveaux canaux pour une visibilité <strong>durable et complète</strong>.',
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
  badge: 'Rankwell pour Annecy',
  title: 'Ce que nous apportons aux entreprises annéciennes',
  subtitle: 'Une expertise nationale, une collaboration sur mesure.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés partout en France.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO inclus',
      description: 'Optimisation IA native.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Distance efficace',
      description: 'Visios, réactivité, outils partagés.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Seniors dédiés',
      description: 'Expertise confirmée sur chaque projet.',
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
    'Les IA conversationnelles transforment la manière dont les internautes trouvent l\'information. Le référencement s\'adapte.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'Le GEO (Generative Engine Optimization) vise à faire citer vos contenus par les IA : ChatGPT, Perplexity, Google AI Overviews. L\'enjeu : devenir la référence que l\'IA mentionne.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Définitions précises, listes structurées, données sourcées. Les IA privilégient les contenus facilement extractibles. Nous optimisons cette dimension.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Un corpus cohérent de contenus experts renforce votre crédibilité aux yeux des algorithmes. Les IA favorisent les sources qui démontrent une expertise établie.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent les sources. Être mentionné sur des sites reconnus amplifie votre légitimité et vos chances d\'être cité.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Annecy en chiffres',
  text: 'Plus de 130 000 habitants dans l\'agglomération, siège de marques mondiales comme Salomon et Fusalp. Le bassin annécien combine attractivité touristique et dynamisme économique. La visibilité digitale y est un avantage concurrentiel décisif.',
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
        'Les classements Google ne suffisent pas. On pilote par les leads, les ventes, le coût d\'acquisition client.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si votre stratégie part dans la mauvaise direction, on vous le dit franchement. C\'est ça, un vrai partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Votre stratégie est pensée et exécutée par la même personne. Un interlocuteur expert, disponible.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Vos performances Search connectées à vos résultats business, visibles en temps réel sur notre plateforme.',
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
  subtitle: 'Notre accompagnement s\'adresse aux entreprises qui veulent des résultats, pas des rapports.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site ne convertit pas assez. Vous cherchez un partenaire pour structurer et déployer une stratégie efficace.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA redéfinissent la recherche. Vous voulez anticiper plutôt que subir.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'SEO et GEO dès la conception. Éviter les rustines coûteuses après coup.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre référencement stagne sans raison apparente. Un diagnostic externe s\'impose.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'Une agence proche géographiquement n\'est pas forcément compétente. L\'expertise et les résultats priment.',
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
  title: 'Nos services GEO & SEO à Annecy',
  subtitle: 'Quatre services complémentaires pour développer votre présence en ligne.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On détecte ce qui freine votre visibilité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, performance. Les fondations d\'un référencement solide.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Une stratégie éthique et efficace.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui performe et qui convertit votre audience.',
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
  subtitle: 'Un cadre clair du premier contact à la mise en œuvre.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes de visio pour comprendre votre contexte. Zéro pitch.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Analyse SEO, GEO-readiness, technique, paysage concurrentiel.',
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
      description: 'Déploiement, mesure, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises annéciennes gagnent avec le GEO',
  subtitle: 'Aller au-delà du SEO classique pour capter les nouvelles audiences.',
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
      question: 'Travaillez-vous avec des entreprises à Annecy ?',
      answer: 'Absolument. Nous accompagnons des entreprises annéciennes avec le même niveau d\'exigence que nos clients parisiens. Visios, Rankwell One, consultant dédié.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Annecy ?',
      answer: 'Outdoor, tourisme, services, industrie : tous les secteurs. Notre expertise Search s\'adapte à votre contexte, pas l\'inverse.',
    },
    {
      id: '3',
      question: 'La collaboration à distance fonctionne-t-elle vraiment ?',
      answer: 'Oui. Visioconférences régulières, outils partagés, accès temps réel à vos données. Un consultant senior reste votre point de contact privilégié.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'L\'optimisation pour les moteurs IA : ChatGPT, Perplexity, Google AI Overviews. Être cité comme source fiable quand ces IA répondent à des questions.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Dépendent de vos objectifs et de la concurrence dans votre secteur. Premier échange gratuit pour cadrer le projet et donner une estimation.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'SEO/GEO : 3 à 6 mois selon le contexte. SEA : quelques semaines. On pose des attentes réalistes dès le départ.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    '30 minutes de visio pour analyser votre situation. Sans engagement, sans pitch commercial.',
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
    { label: 'Chambéry', href: '/agence-geo-seo/france/chambery' },
    { label: 'Valence', href: '/agence-geo-seo/france/valence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
  ],
};
