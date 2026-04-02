/**
 * DATA - Page Grenoble (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/grenoble (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Grenoble - Rankwell',
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
      desc: 'GEO (Generative Engine Optimization) désigne l\'ensemble des techniques pour faire citer vos contenus par les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. Au-delà du classement Google, l\'enjeu est de devenir la source que l\'intelligence artificielle choisit de recommander à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis pour construire leurs réponses : définitions, listes, données chiffrées et sourcées. Nous structurons vos contenus pour faciliter cette extraction et maximiser le nombre de citations obtenues auprès des différents modèles de langage.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les modèles de langage évaluent votre expertise non pas page par page, mais sur l\'ensemble de votre présence en ligne. Un corpus cohérent de contenus experts, couvrant les différents aspects de votre domaine, renforce durablement votre crédibilité algorithmique.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent les informations provenant de multiples sources pour valider votre légitimité. Être mentionné dans la presse sectorielle, des publications académiques ou des annuaires professionnels amplifie votre signal de confiance auprès des algorithmes.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Le contexte économique grenoblois',
  text: 'Grenoble Alpes Métropole regroupe 450 000 habitants sur 49 communes et a été élue Capitale européenne de l\'innovation 2026. L\'écosystème compte 475 startups actives dont 44 % en deeptech, le pôle Minalogic (micro et nanotechnologies) et des acteurs majeurs comme STMicroelectronics (4 000 salariés sur site), le CEA et Schneider Electric. Grenoble figure dans le Top 20 mondial des écosystèmes deeptech.',
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
        'Les positions ne paient pas les factures. Notre métrique principale, c\'est l\'impact concret sur votre activité : nombre de leads qualifiés générés, ventes attribuées au canal Search, coût d\'acquisition par rapport aux autres leviers marketing.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si une stratégie nous semble inadaptée à votre marché, on vous le dit avant de la déployer. Notre rôle de partenaire implique un devoir de conseil sincère, y compris quand cela signifie remettre en question vos certitudes initiales.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La même personne pense et exécute votre stratégie. Un interlocuteur unique qui connaît votre marché, vos contraintes techniques et vos objectifs commerciaux. Pas de rotation d\'équipe, pas de perte de contexte.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Accès permanent à vos performances via notre plateforme propriétaire. Données Search connectées à vos métriques business : vous visualisez l\'impact réel de chaque action, sans attendre un rapport mensuel.',
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
      description: 'Votre site existe mais ne génère pas le volume de leads ou de ventes attendu. Vous avez besoin d\'un partenaire expérimenté pour construire une stratégie Search qui produit des résultats mesurables et durables.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA conversationnelles transforment la façon dont vos prospects et clients cherchent l\'information. Vous voulez une agence qui intègre ces nouveaux canaux dans sa stratégie, pas une qui les ignore encore.',
    },
    {
      label: 'Startups et entreprises tech de l\'écosystème grenoblois',
      description: 'Deeptech, SaaS, micro-électronique, cleantech : l\'innovation grenobloise mérite une visibilité à la hauteur de son excellence. Le SEO et le GEO vous positionnent devant les décideurs, investisseurs et partenaires qui recherchent des solutions avancées.',
    },
    {
      label: 'Laboratoires et structures de recherche',
      description: 'Centres de recherche, spin-offs universitaires, sociétés de conseil scientifique : votre expertise est pointue et votre audience spécifique. Nous structurons votre présence digitale pour toucher les bonnes cibles sur les requêtes techniques pertinentes.',
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
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie les obstacles à votre visibilité et les opportunités de croissance à saisir en priorité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site complète : architecture de contenu, balisage structuré, maillage interne et performance de chargement. Les fondations d\'un référencement robuste et durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour consolider votre autorité de domaine. Des partenariats pertinents dans votre secteur, une approche éthique sans techniques risquées.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et structurés pour le GEO. Des textes qui se positionnent sur Google, qui sont cités par les IA et qui convertissent vos visiteurs en clients.',
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
  quote: 'Modern SEO is all about crafting content so compelling that other people want to promote it by linking to it or sharing it, which increases your trust and authority.',
  author: 'Brian Dean',
  role: 'Founder Backlinko',
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
      answer: 'Oui, nous accompagnons des entreprises grenobloises avec le même niveau d\'exigence que nos clients parisiens ou lyonnais. Visioconférences régulières, accès permanent à notre plateforme Rankwell One, et un consultant senior dédié qui suit votre dossier dans la durée. La distance géographique n\'a jamais freiné la qualité de nos résultats.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Grenoble ?',
      answer: 'Tech et deeptech, micro-électronique, énergie, services aux entreprises, recherche appliquée, SaaS : nous travaillons avec les secteurs qui font la force de l\'écosystème grenoblois. Le point commun de nos clients : ils veulent transformer leur visibilité digitale en résultats business concrets, pas accumuler du trafic sans valeur.',
    },
    {
      id: '3',
      question: 'Votre approche est-elle adaptée aux entreprises tech et deeptech ?',
      answer: 'Parfaitement. Les entreprises technologiques ont des enjeux SEO spécifiques : requêtes techniques à fort potentiel de conversion, cycles de vente B2B longs, audience de décideurs et d\'ingénieurs. Notre méthodologie intègre ces particularités. Le GEO est d\'ailleurs particulièrement efficace pour les acteurs tech, car les décideurs utilisent massivement les IA pour leur veille.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et en quoi diffère-t-il du SEO ?',
      answer: 'Le GEO (Generative Engine Optimization) optimise vos contenus pour les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. Tandis que le SEO vise les résultats classiques de Google, le GEO vise à être cité comme source de référence dans les réponses générées par l\'IA. Ces deux disciplines sont complémentaires et nous les déployons ensemble.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs pour une entreprise grenobloise ?',
      answer: 'Les tarifs dépendent de la complexité de votre projet : taille du site, objectifs de croissance, intensité concurrentielle de votre marché. Nous proposons des accompagnements mensuels et des missions ponctuelles comme les audits SEO. Le premier échange de 30 minutes est gratuit et nous permet de vous proposer un budget adapté à vos ambitions.',
    },
    {
      id: '6',
      question: 'Combien de temps pour observer des résultats mesurables ?',
      answer: 'En SEO et GEO, les premiers résultats tangibles apparaissent entre 3 et 6 mois selon votre situation de départ et le niveau de concurrence. Les campagnes SEA (Google Ads) produisent des résultats dès les premières semaines. Nous définissons des indicateurs de progression intermédiaires pour que vous puissiez suivre l\'avancement dès le premier mois.',
    },
    {
      id: '7',
      question: 'Grenoble est un pôle d\'innovation : en quoi Rankwell est pertinent ?',
      answer: 'Grenoble est la 7e ville mondiale en densité d\'écosystème deeptech. Cette concentration d\'acteurs innovants crée une concurrence digitale intense, y compris sur les requêtes B2B techniques. Rankwell apporte une expertise GEO que les agences locales ne proposent généralement pas, et notre plateforme Rankwell One offre le niveau de transparence que les dirigeants tech attendent.',
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
