/**
 * DATA - Page Besançon (Agence GEO & SEO pour les entreprises bisontines)
 * URL: /agence-geo-seo/france/besancon (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Besançon, Agence GEO Besançon, Référencement Besançon
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises bisontines | Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Besançon. Référencement Google et optimisation pour les moteurs IA. Bureaux à Paris, collaboration à distance efficace. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Besançon' },
  ] as BreadcrumbItem[],
  badge: 'besançon',
  title: 'Agence GEO et SEO à Besançon',
  description:
    'Besançon est la capitale française des microtechniques et de l\'horlogerie. Les entreprises bisontines portent un savoir-faire d\'excellence qui mérite une visibilité digitale à la hauteur. SEO, GEO, SEA et Data.',
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
  badge: 'Besançon',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale accessible aux entreprises bisontines',
  paragraphs: [
    'Besançon possède un écosystème économique singulier. Microtechniques de précision, horlogerie, medtech, services aux entreprises : chaque secteur réunit des acteurs qui se distinguent par leur technicité. Google n\'est plus l\'unique vitrine. ChatGPT, Perplexity et les AI Overviews bouleversent les parcours d\'information des décideurs.',
    'Rankwell accompagne des entreprises partout en France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises bisontines grâce à une <strong>collaboration à distance structurée</strong>. Réunions régulières en visioconférence, outils collaboratifs partagés, visibilité totale via notre plateforme Rankwell One.',
    'Découvrez comment nous aidons les entreprises exigeantes à conquérir Google et les moteurs IA, avec une approche <strong>business centrix</strong> qui mesure la réussite sur les conversions réelles, pas sur les positions.',
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
  badge: 'Rankwell pour Besançon',
  title: 'Ce que nous apportons aux entreprises bisontines',
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
      title: 'Collaboration structurée',
      description: 'Visios planifiées, outils partagés, disponibilité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Des experts chevronnés sur votre projet.',
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
    'Le SEO traditionnel cible les résultats classiques de Google. C\'est toujours fondamental. Mais une mutation majeure est en cours : les utilisateurs interrogent de plus en plus directement des intelligences artificielles.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'art d\'optimiser vos contenus pour être repris par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif n\'est plus seulement de figurer dans les résultats, mais de devenir la source que l\'IA décide de mentionner.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA recherchent des passages faciles à extraire et à reformuler. Définitions précises, listes organisées, données chiffrées sourcées. Nous structurons vos contenus pour favoriser au maximum les citations.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous représentez une source légitime sur un sujet. Pas seulement si vous avez rédigé un contenu, mais si l\'ensemble de votre empreinte digitale témoigne d\'une expertise cohérente.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions sur des sites tiers : articles de presse, rapports sectoriels, échanges dans des communautés expertes. Le netlinking reste essentiel, mais sous une forme différente.',
    },
  ],
};

// ============================================
// CALLOUT BESANÇON
// ============================================
export const calloutData = {
  label: 'Le contexte économique bisontin',
  text: 'Besançon compte 120 000 habitants et s\'est imposée comme capitale française des microtechniques. Le pôle de compétitivité des microtechniques, les entreprises horlogères historiques et un écosystème medtech en croissance forment un tissu industriel à forte valeur ajoutée. Une visibilité digitale optimisée permet de toucher des donneurs d\'ordre bien au-delà de la région.',
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
        'Être premier sur un mot-clé sans potentiel commercial est sans intérêt. Notre indicateur principal, c\'est l\'impact sur votre activité : prospects qualifiés, chiffre d\'affaires attribué, coût d\'acquisition maîtrisé.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle inclut de vous alerter si une direction semble inadéquate. Un partenaire qui valide tout systématiquement n\'en est pas vraiment un.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui définit votre stratégie est celui qui la déploie. Pas d\'intermédiaire. Vous disposez d\'un interlocuteur qui maîtrise votre dossier dans les moindres détails.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme relie vos données Search à vos indicateurs business. Vous visualisez l\'impact réel en temps réel, pas des métriques de surface dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement vous accompagner.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas suffisamment de prospects ou de commandes. Vous recherchez un partenaire pour concevoir et déployer une stratégie Search performante.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez identifié que ChatGPT et les IA transforment les comportements de recherche. Vous voulez une agence capable d\'optimiser pour ces nouveaux moteurs, pas uniquement pour Google.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'Vous lancez un nouveau site et souhaitez intégrer les bonnes pratiques SEO et GEO dès la conception. L\'optimisation en amont évite les corrections onéreuses par la suite.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre SEO plafonne malgré les efforts investis. Vous avez besoin d\'un diagnostic objectif pour identifier les véritables freins et hiérarchiser les actions.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas l\'expertise. Une agence locale peut appliquer des méthodes périmées. Ce qui compte, c\'est la compétence, la méthodologie et les résultats prouvés.',
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
  title: 'Nos services GEO & SEO à Besançon',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. Identification des freins et des opportunités de croissance.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, balisage et performance. Les fondations d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Une stratégie sur mesure et éthique.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit.',
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
  subtitle: 'Du premier contact à la mise en œuvre, voici les étapes clés.',
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
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, benchmark concurrentiel.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie personnalisée avec priorités classées par niveau d\'impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, optimisations continues. Visibilité totale via Rankwell One.',
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
  title: 'Ce que les entreprises bisontines gagnent avec le GEO',
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
      question: 'Travaillez-vous avec des entreprises à Besançon ?',
      answer: 'Oui, nous collaborons avec des entreprises bisontines depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La collaboration à distance fonctionne parfaitement.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Besançon ?',
      answer: 'Nous intervenons dans tous les secteurs : microtechniques et horlogerie (le cœur historique de Besançon), medtech, industrie de précision, services B2B, e-commerce. Le point commun : des entreprises qui veulent convertir leur visibilité Search en résultats commerciaux.',
    },
    {
      id: '3',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre présence digitale. Élaboration d\'une roadmap avec priorités définies. Puis exécution par un consultant senior dédié avec des points réguliers. Le suivi s\'effectue en temps réel via Rankwell One.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) correspond à l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : faire en sorte que vos contenus soient cités par ces IA lorsqu\'elles traitent de questions liées à votre expertise. C\'est l\'évolution majeure du Search, et nous l\'intégrons dans chaque projet.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs varient selon vos objectifs, votre secteur et l\'intensité concurrentielle. Nous proposons des forfaits mensuels ou des missions ponctuelles. Le plus simple : un premier échange pour évaluer votre contexte et vous communiquer une estimation réaliste. Aucune surprise par la suite.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO/GEO, les premiers résultats tangibles apparaissent généralement entre 3 et 6 mois selon votre situation de départ et le niveau de concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous communiquons des projections réalistes dès le départ, sans promesses irréalistes.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On écoute, on analyse, on partage notre point de vue.',
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
    { label: 'Dijon', href: '/agence-geo-seo/france/dijon' },
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
  ],
};
