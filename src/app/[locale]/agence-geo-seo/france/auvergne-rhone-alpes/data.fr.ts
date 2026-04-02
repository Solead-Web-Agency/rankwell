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
  title: 'Agence GEO et SEO en Auvergne-Rhône-Alpes - Rankwell',
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
      desc: 'GEO (Generative Engine Optimization) est la discipline qui vise à rendre vos contenus citables par les moteurs IA comme ChatGPT, Perplexity ou Google AI Overviews. L\'enjeu ne se limite plus à ranker sur Google : il s\'agit de devenir LA source de référence que les IA choisissent de mentionner quand un dirigeant ou un acheteur pose une question.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA ne fonctionnent pas comme Google : elles cherchent des passages qu\'elles peuvent extraire et reformuler. Définitions précises, listes structurées, données chiffrées avec leurs sources. En Auvergne-Rhône-Alpes, où la concurrence sectorielle est dense, structurer ses contenus pour la citation devient un avantage décisif.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet donné. Pas seulement si vous avez publié un article, mais si l\'ensemble de votre présence digitale démontre une expertise cohérente et approfondie. Pour les entreprises de la région, cela passe par un corpus de contenus experts aligné sur leur savoir-faire.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité en croisant les mentions sur d\'autres sites : articles de presse, études sectorielles, publications spécialisées. Dans une région où la densité d\'acteurs industriels et tech est forte, le netlinking évolue vers une stratégie de présence multi-sources qui dépasse le simple backlink.',
    },
  ],
};

// ============================================
// CALLOUT RÉGION
// ============================================
export const calloutData = {
  label: 'Le poids économique d\'Auvergne-Rhône-Alpes',
  text: 'Avec un PIB qui dépasse les 300 milliards d\'euros et 8 millions d\'habitants, Auvergne-Rhône-Alpes est la 2e économie régionale française et la 4e de l\'Union européenne. La région investit 8,4 milliards d\'euros en R&D (15 % de l\'effort national) et compte 17 des 100 plus grandes usines françaises. Tech, industrie, biotech, tourisme de montagne : la concurrence digitale est à la hauteur du dynamisme économique.',
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
        'Être premier sur un mot-clé sans impact business, ça ne sert à rien. Notre métrique principale, c\'est l\'impact concret sur votre activité : leads générés, ventes attribuées au Search, coût d\'acquisition par canal. Pour les entreprises d\'AURA, où les marchés sont matures, cette approche fait la différence.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Si votre stratégie fait fausse route, on vous le dit. Un partenaire qui dit oui à tout ne vous fait pas progresser. Notre rôle inclut de questionner vos priorités pour concentrer l\'effort là où le retour sera maximal.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute au quotidien. Pas de junior sur votre dossier, pas d\'intermédiaire. Vous avez un interlocuteur unique qui connaît votre marché régional, votre concurrence et vos objectifs dans le détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business en temps réel. Vous voyez l\'impact de chaque action sur vos conversions, pas des vanity metrics dans un rapport mensuel. Une transparence totale, accessible à tout moment depuis n\'importe où en région.',
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
      description: 'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez un partenaire pour structurer une stratégie Search efficace, mesurable et alignée sur vos objectifs de croissance.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement',
      description: 'Vous lancez un nouveau site ou refondez l\'existant. Intégrer le SEO et le GEO dès la conception évite les corrections coûteuses et vous fait gagner des mois de visibilité.',
    },
    {
      label: 'Industrie, tech et biotech régionales',
      description: 'Avec 17 des 100 plus grandes usines françaises et des pôles tech à Lyon et Grenoble, la région concentre des acteurs B2B qui ont besoin d\'une visibilité digitale à la hauteur de leur expertise sectorielle.',
    },
    {
      label: 'Tourisme et services en zone de montagne',
      description: 'Stations de ski, hébergeurs, prestataires outdoor : le tourisme de montagne et le thermalisme auvergnat génèrent des recherches saisonnières intenses où la visibilité Search conditionne directement le remplissage.',
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
      description: 'Diagnostic technique complet, analyse sémantique approfondie et étude concurrentielle ciblée sur votre marché. On identifie ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable qui résiste aux mises à jour algorithmiques.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs provenant de sites pertinents et fiables pour renforcer votre autorité. Une stratégie sur mesure, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui se positionnent et convertissent. Du contenu structuré pour la citation IA, pas du remplissage de mots-clés.',
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
  quote: 'SEO has become a growth discipline. You test, you iterate, you learn, you scale. The tactics come and go, but the strategies always stay the same.',
  author: 'Kevin Indig',
  role: 'Growth Advisor, ex-Shopify & G2',
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
      answer: 'Oui, nous accompagnons des entreprises de toute la région : Lyon, Grenoble, Annecy, Chambéry, Valence, Clermont-Ferrand et au-delà. Visioconférences régulières, accès en temps réel à Rankwell One pour suivre vos performances, consultant senior dédié joignable par email et téléphone. La collaboration à distance est fluide et efficace, avec la même exigence que pour nos clients parisiens.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en Auvergne-Rhône-Alpes ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs présents dans la région : industrie et sous-traitance automobile, tech et SaaS (Lyon, Grenoble), santé et biotech, tourisme de montagne et thermalisme, services B2B et e-commerce. Le point commun : des entreprises qui veulent générer du business via le Search, pas uniquement du trafic sans conversion.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange de 30 minutes en visio pour comprendre vos enjeux business. Puis un audit complet de votre situation SEO et GEO-readiness. Ensuite, une roadmap avec des priorités classées par impact sur votre activité. Et enfin, l\'exécution avec un consultant senior dédié et des points réguliers. Vous suivez l\'avancement en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi est-ce important pour la région ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou Google AI Overviews. Dans une région aussi compétitive qu\'Auvergne-Rhône-Alpes, avec son tissu dense d\'entreprises tech et industrielles, être cité par les IA quand on interroge sur votre domaine d\'expertise représente un avantage concurrentiel majeur que peu d\'acteurs exploitent encore.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs dépendent de vos objectifs, de votre secteur et du niveau de concurrence sur vos marchés. Nous proposons des forfaits mensuels pour un accompagnement continu ou des projets ponctuels (audit, refonte). Le plus simple : un premier échange gratuit pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats significatifs apparaissent généralement entre 3 et 6 mois selon votre point de départ et l\'intensité concurrentielle de votre marché. En SEA, les retours sont plus rapides, de l\'ordre de quelques semaines. Nous vous donnons des projections réalistes dès le départ, basées sur l\'analyse de votre secteur en Auvergne-Rhône-Alpes.',
    },
    {
      id: '7',
      question: 'Pourquoi ne pas choisir une agence SEO locale à Lyon ou Grenoble ?',
      answer: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats prouvés. Rankwell accompagne plus de 350 clients en France depuis 2017. Notre approche business centrix et notre expertise GEO sont difficiles à trouver dans une agence locale qui applique les mêmes recettes SEO depuis des années.',
    },
    {
      id: '8',
      question: 'Comment fonctionne Rankwell One ?',
      answer: 'Rankwell One est notre plateforme propriétaire qui connecte vos données Search (positions, trafic, citations IA) à vos données business (leads, ventes, CA attribué). Vous accédez à un tableau de bord en temps réel, partageable avec votre équipe. Fini les rapports mensuels statiques : vous voyez l\'impact de chaque action au fil de l\'eau.',
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
