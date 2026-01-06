/**
 * DATA - Page Valence (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/valence (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Valence | Rankwell',
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
      desc: 'GEO (Generative Engine Optimization) : faire en sorte que vos contenus soient cités par les IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Devenir LA référence.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA privilégient les contenus bien structurés : définitions précises, listes organisées, données vérifiables. On optimise cette dimension.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Un ensemble cohérent de contenus experts renforce votre crédibilité aux yeux des algorithmes IA. Pas un article isolé, mais une présence affirmée.',
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
  label: 'Valence en chiffres',
  text: 'Avec plus de 65 000 habitants et une position stratégique sur l\'axe rhodanien, Valence est un carrefour logistique et économique majeur. Agroalimentaire, industrie, services : la concurrence digitale s\'intensifie.',
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
        'Les positions ne suffisent pas. On suit les leads générés, les ventes attribuées, le retour sur investissement concret.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Une stratégie qui nous semble bancale, on le dit. C\'est le rôle d\'un partenaire de confiance.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie l\'exécute aussi. Un interlocuteur unique qui maîtrise votre dossier.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Vos performances accessibles en temps réel. Données Search et métriques business connectées.',
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
      description: 'Votre site existe mais ne génère pas assez de leads. Vous cherchez une stratégie structurée.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA transforment la recherche. Vous voulez une agence qui anticipe ces évolutions.',
    },
    {
      label: 'Vous préparez une refonte',
      description: 'SEO et GEO intégrés dès la conception. Éviter les correctifs tardifs et coûteux.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque',
      description: 'Votre référencement plafonne. Un diagnostic externe peut débloquer la situation.',
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
      question: 'Travaillez-vous avec des entreprises à Valence ?',
      answer: 'Oui. Nous accompagnons des entreprises valentunoises avec le même engagement que nos clients des grandes métropoles. Visios, Rankwell One, consultant dédié.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Valence ?',
      answer: 'Agroalimentaire, industrie, services, commerce : tous les secteurs. L\'expertise Search s\'adapte à votre contexte, pas l\'inverse.',
    },
    {
      id: '3',
      question: 'La collaboration à distance fonctionne-t-elle ?',
      answer: 'Parfaitement. Visios régulières, outils partagés, accès temps réel à vos données via Rankwell One. Votre consultant senior reste votre interlocuteur principal.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'L\'optimisation pour les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. Être cité comme source de référence sur vos sujets d\'expertise.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs ?',
      answer: 'Variables selon vos objectifs et votre contexte concurrentiel. Premier échange gratuit pour cadrer le projet et proposer une estimation réaliste.',
    },
    {
      id: '6',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'En SEO/GEO, 3 à 6 mois pour des résultats tangibles. En SEA, quelques semaines. On fixe des attentes honnêtes dès le départ.',
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
