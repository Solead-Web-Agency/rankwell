/**
 * DATA - Page Valence (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/valence (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Valence - Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Valence et la Drôme. Référencement Google et optimisation IA. Collaboration à distance performante. Approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Valence' },
  ] as BreadcrumbItem[],
  badge: 'valence',
  title: 'Agence GEO et SEO à Valence',
  description:
    'Carrefour stratégique de la vallée du Rhône, Valence accueille un tissu économique dynamique. Notre expertise SEO et GEO accompagne les entreprises valentunoises vers une visibilité digitale performante.',
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
  badge: 'Valence',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search pour les entreprises valentunoises',
  paragraphs: [
    'Valence se positionne comme un hub économique entre Lyon et Marseille. Agroalimentaire, logistique, services : les acteurs locaux ont besoin d\'une visibilité digitale à la hauteur de leurs ambitions.',
    'Depuis 2017, Rankwell accompagne les entreprises françaises avec une méthodologie éprouvée. Pour les acteurs valentinois, notre expertise SEO et GEO est accessible via une <strong>collaboration à distance fluide</strong> : visios régulières, outils partagés, suivi transparent.',
    'Google reste important, mais les IA conversationnelles gagnent du terrain. Notre approche intègre ces nouveaux canaux pour construire une <strong>visibilité complète et durable</strong>.',
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
  badge: 'Rankwell pour Valence',
  title: 'Ce que nous apportons aux entreprises valentunoises',
  subtitle: 'Une expertise nationale accessible aux acteurs locaux.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Entreprises accompagnées en France.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Optimisation Google + IA incluse.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration efficace',
      description: 'Visios, réactivité, outils partagés.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Experts confirmés',
      description: 'Consultants seniors sur chaque dossier.',
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
    'Les IA conversationnelles transforment la recherche d\'information. Le référencement évolue en conséquence.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) : faire en sorte que vos contenus soient cités par les IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Pas juste apparaître dans les liens bleus, mais devenir LA source que l\'IA choisit de mentionner quand un prospect pose une question liée à votre expertise.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient les contenus bien structurés qu\'elles peuvent extraire et reformuler : définitions précises, listes organisées, données chiffrées avec leurs sources. On structure vos contenus pour maximiser les chances de citation par les moteurs génératifs.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les algorithmes IA évaluent si vous êtes une source légitime sur un sujet. Pas juste un article isolé, mais l\'ensemble de votre présence digitale qui démontre une expertise cohérente. C\'est cette profondeur qui différencie les sources citées des sources ignorées.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent les sources pour valider votre crédibilité : articles de presse, annuaires professionnels, publications sectorielles. Être mentionné sur des sites de référence de la Drôme et au niveau national amplifie considérablement votre signal de confiance.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Le contexte économique valentinois',
  text: 'Valence Romans Agglo rassemble 223 000 habitants, 102 000 emplois et 23 000 établissements, ce qui en fait le 5e pôle économique d\'Auvergne-Rhône-Alpes. Le parc Rovaltain accueille 150 entreprises et 2 800 emplois autour du numérique et de la recherche. Agroalimentaire, industrie, luxe-maroquinerie : la concurrence digitale s\'intensifie sur un territoire en pleine croissance démographique.',
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
        'Être premier sur un mot-clé qui ne génère pas de business n\'a aucun intérêt. Notre métrique principale, c\'est l\'impact concret sur votre activité : leads qualifiés générés, ventes attribuées au Search, coût d\'acquisition par canal.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Une stratégie qui nous semble bancale, on vous le dit. Un partenaire qui acquiesce à tout n\'est pas un partenaire, c\'est un prestataire passif.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur unique qui connaît votre contexte valentinois et vos objectifs dans le détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos métriques business. Vous voyez l\'impact réel en temps réel : positions, citations IA, leads générés. Pas des vanity metrics dans un rapport mensuel, des données actionnables au quotidien.',
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
  subtitle: 'Nous accompagnons les entreprises orientées résultats, pas les chercheurs de vanity metrics.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de leads ou de demandes de devis. Vous cherchez un partenaire pour structurer et exécuter une stratégie Search qui transforme le trafic en résultats commerciaux mesurables.',
    },
    {
      label: 'Vous cherchez une expertise GEO avant vos concurrents',
      description: 'ChatGPT, Perplexity et les AI Overviews de Google changent la façon dont vos prospects trouvent des fournisseurs. Vous voulez une agence qui maîtrise ces nouveaux canaux, pas qui les découvre en même temps que vous.',
    },
    {
      label: 'Agroalimentaire et industrie drômoise',
      description: 'Avec 16 % d\'emplois industriels et un label Territoire d\'industrie, la Drôme concentre des filières agroalimentaires, mécaniques et électroniques compétitives. Un référencement B2B performant attire des prospects qualifiés bien au-delà du bassin valentinois.',
    },
    {
      label: 'Numérique et services sur Rovaltain',
      description: 'Le parc Rovaltain accueille 150 entreprises dont un quart dans le numérique, avec Le Cube Numérique comme vitrine de la French Tech locale. Agences, startups, éditeurs : une visibilité Search solide est le socle d\'une stratégie d\'acquisition pérenne.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La distance n\'est pas un obstacle. L\'expertise et les résultats sont les seuls critères qui comptent.',
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
  title: 'Nos services GEO & SEO à Valence',
  subtitle: 'Quatre services complémentaires pour booster votre visibilité et générer des leads qualifiés.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse globale de votre présence digitale : technique, contenu et positionnement face à vos concurrents.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation complète du site : architecture, contenus enrichis et performances techniques au service du référencement.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Obtention de liens entrants de qualité depuis des sources pertinentes. Pas de spam, uniquement des liens à valeur ajoutée.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés pour le SEO et prêts pour le GEO, qui captent l\'attention et incitent à l\'action.',
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
  subtitle: 'Un processus clair du premier échange à la mise en œuvre.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour cerner vos enjeux. Pas de pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Analyse SEO, GEO-readiness, technique, environnement concurrentiel.',
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
      description: 'Mise en œuvre, mesure, ajustements. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises valentunoises gagnent avec le GEO',
  subtitle: 'Étendre sa visibilité au-delà de Google pour capter les nouveaux usages.',
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
  quote: 'You can\'t even start thinking about keywords until you think about the people that will use them.',
  author: 'Mike King',
  role: 'Founder & CEO, iPullRank',
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
      question: 'Travaillez-vous avec des entreprises à Valence ?',
      answer: 'Oui. Nous accompagnons des entreprises valentunoises avec le même engagement et les mêmes outils que nos clients parisiens ou lyonnais. Visioconférences régulières, accès à Rankwell One pour le suivi en temps réel, consultant senior dédié joignable par email ou téléphone. La distance n\'a aucun impact sur la qualité de l\'accompagnement.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Valence ?',
      answer: 'Agroalimentaire, industrie mécanique et électronique, services numériques, luxe-maroquinerie, commerce : notre expertise Search s\'adapte à votre contexte sectoriel. Valence Romans Agglo concentre 102 000 emplois dans des filières variées. Le référencement SEO et GEO fonctionne dès lors qu\'il y a une audience qui recherche vos produits ou services en ligne.',
    },
    {
      id: '3',
      question: 'La collaboration à distance est-elle vraiment efficace ?',
      answer: 'C\'est notre mode de fonctionnement pour toutes les villes hors Paris, et ça marche depuis 2017 avec plus de 350 entreprises. Visios planifiées, accès partagé à votre tableau de bord Rankwell One, livrables commentés en direct, consultant senior qui connaît votre dossier. Ce qui détermine la qualité d\'un accompagnement SEO, c\'est l\'expertise et la rigueur, pas l\'adresse postale.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi c\'est important à Valence ?',
      answer: 'Le GEO (Generative Engine Optimization) optimise votre présence pour les IA conversationnelles comme ChatGPT, Perplexity et les AI Overviews de Google. Quand un prospect B2B demande à une IA « quel fournisseur agroalimentaire dans la Drôme ? », le GEO travaille pour que votre entreprise soit citée. Sur un territoire comme Valence où l\'industrie est forte, c\'est un avantage concurrentiel décisif.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs varient selon vos objectifs, votre secteur et le niveau de concurrence digitale. Nous travaillons sur des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles pour des audits et des refontes. Le premier échange de 30 minutes est gratuit et sans engagement : on analyse votre situation et vous proposons une estimation réaliste.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats concrets ?',
      answer: 'En SEO et GEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon votre point de départ et la compétitivité de votre marché. En SEA, les retours sont plus rapides, en quelques semaines. On vous donne des projections honnêtes dès le départ et des jalons de progression mesurables via Rankwell One. Pas de promesses spectaculaires impossibles à tenir.',
    },
    {
      id: '7',
      question: 'Pouvez-vous accompagner des entreprises de Rovaltain ?',
      answer: 'Bien sûr. Le parc Rovaltain accueille 150 entreprises spécialisées dans le numérique, la recherche et l\'économie verte. Que vous soyez une startup, un bureau d\'études ou une PME installée sur le parc, notre expertise SEO et GEO s\'adapte à vos enjeux B2B : génération de leads qualifiés, visibilité sectorielle et positionnement comme référence dans votre domaine.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet',
  description:
    '30 minutes en visio pour analyser votre situation. Sans engagement, sans discours commercial.',
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
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
  ],
};
