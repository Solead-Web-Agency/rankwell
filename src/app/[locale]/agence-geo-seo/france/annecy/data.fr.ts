/**
 * DATA - Page Annecy (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/annecy (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Annecy - Rankwell',
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
      desc: 'Le GEO (Generative Engine Optimization) consiste à optimiser vos contenus pour qu\'ils soient cités par les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. L\'enjeu n\'est plus seulement de ranker sur Google, mais de devenir la source que l\'IA choisit de recommander à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis pour formuler leurs réponses. Définitions claires, listes structurées, données chiffrées avec leurs sources : nous structurons vos contenus pour maximiser les chances d\'être sélectionné et cité par les modèles de langage.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les modèles de langage évaluent si votre site est une source légitime sur un sujet donné. Un corpus cohérent de contenus experts, couvrant votre domaine en profondeur, renforce cette perception et augmente vos chances d\'être cité comme référence.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent les sources pour valider la crédibilité d\'une information. Être mentionné dans des articles de presse, des études sectorielles ou des forums spécialisés amplifie votre signal de confiance auprès des algorithmes.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Le contexte économique annécien',
  text: 'L\'agglomération du Grand Annecy regroupe près de 136 000 habitants et affiche un taux de chômage inférieur à 6 %. Siège de marques mondiales comme Salomon, Fusalp et NTN Europe (premier employeur privé de Haute-Savoie avec 2 400 salariés), le bassin annécien excelle dans l\'outdoor, la mécatronique, le numérique et les industries créatives. Plus de 2 000 entreprises y sont créées chaque année.',
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
        'Les classements Google ne paient pas les factures. On pilote par les leads générés, les ventes attribuées et le coût d\'acquisition client. C\'est votre chiffre d\'affaires qui détermine le succès, pas le nombre de mots-clés en première page.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si votre stratégie part dans une direction qui ne servira pas vos résultats, on vous le dit franchement. Un partenaire qui acquiesce à tout n\'est pas un partenaire, c\'est un exécutant. Notre rôle inclut le devoir de conseil.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute au quotidien. Pas d\'intermédiaire, pas de junior. Vous avez un interlocuteur expert qui connaît votre dossier dans le détail et reste disponible.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme propriétaire connecte vos données Search à vos métriques business. Vous suivez l\'impact réel de nos actions en temps réel, pas des vanity metrics présentées dans un rapport mensuel.',
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
      description: 'Votre site existe mais ne génère pas suffisamment de leads ou de ventes. Vous cherchez un partenaire pour structurer une stratégie Search qui convertit réellement votre audience en clients.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'ChatGPT, Perplexity et les AI Overviews redéfinissent la manière dont vos prospects trouvent l\'information. Vous voulez une agence qui maîtrise ces nouveaux canaux, pas une qui découvre le sujet.',
    },
    {
      label: 'Acteurs de l\'outdoor et du tourisme alpin',
      description: 'Marques de sport, hébergeurs, prestataires d\'activités : dans le bassin annécien, la concurrence digitale est féroce. Une stratégie SEO et GEO ciblée fait la différence pour capter les recherches saisonnières et pérennes.',
    },
    {
      label: 'Entreprises industrielles et mécatroniques',
      description: 'La filière mécatronique annécienne (automobile, aéronautique, médical) a des cycles de vente B2B longs. Une visibilité Search durable sur les requêtes techniques attire des prospects qualifiés sans dépendre uniquement du réseau.',
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
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité et les leviers prioritaires pour l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage et performance technique. Les fondations d\'un référencement durable et robuste.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Une stratégie sur mesure, sans spam ni réseaux de liens douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, conçus pour se positionner sur Google et être cités par les IA. Du contenu qui convertit, pas du remplissage.',
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
  quote: 'What is said about your brand will matter as much as—or more than—where your brand ranks.',
  author: 'Barry Schwartz',
  role: 'Founder Search Engine Roundtable',
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
      answer: 'Oui, nous accompagnons des entreprises annéciennes depuis plusieurs années. La collaboration se fait via des visioconférences régulières, un accès permanent à notre plateforme Rankwell One pour suivre vos performances en temps réel, et un consultant senior dédié joignable par email ou téléphone. La distance n\'est jamais un frein à la qualité de l\'accompagnement.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Annecy ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs présents dans le bassin annécien : outdoor et équipements sportifs, tourisme et hôtellerie, mécatronique et industrie, services professionnels, numérique et industries créatives. Le dénominateur commun de nos clients : ils veulent générer du business via le Search, pas simplement du trafic.',
    },
    {
      id: '3',
      question: 'La collaboration à distance est-elle aussi efficace qu\'en présentiel ?',
      answer: 'Plus de 80 % de nos clients sont en dehors de Paris, et notre méthodologie est conçue pour la distance. Visioconférences de suivi régulières, outils de travail partagés, accès temps réel aux données via Rankwell One. Votre consultant senior reste votre interlocuteur unique. Nos résultats le prouvent : la proximité géographique n\'est pas un facteur de performance.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi c\'est important ?',
      answer: 'Le GEO (Generative Engine Optimization) est l\'optimisation de vos contenus pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités quand ces IA répondent à des questions liées à votre expertise. C\'est un complément essentiel au SEO classique, car ces IA captent une part croissante des recherches B2B et B2C.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs pour une entreprise annécienne ?',
      answer: 'Les tarifs dépendent de vos objectifs, de votre secteur d\'activité et du niveau de concurrence sur vos requêtes cibles. Nous proposons des forfaits mensuels ou des missions ponctuelles (audit, refonte). Le plus simple : un premier échange gratuit de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO et GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et la concurrence dans votre secteur. Les actions SEA (publicité Google Ads) produisent des résultats en quelques semaines. Nous posons des projections honnêtes dès le départ pour que vous sachiez exactement à quoi vous attendre.',
    },
    {
      id: '7',
      question: 'Pourquoi choisir une agence nationale plutôt qu\'une agence locale à Annecy ?',
      answer: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise technique, la méthodologie éprouvée et les résultats concrets. Rankwell accompagne plus de 350 entreprises en France depuis 2017, avec une approche GEO que peu d\'agences locales maîtrisent. Notre plateforme Rankwell One assure une transparence totale, quelle que soit la distance.',
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
