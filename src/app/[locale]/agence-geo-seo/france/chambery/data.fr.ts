/**
 * DATA - Page Chambéry (Agence GEO & SEO)
 * URL: /agence-geo-seo/france/chambery (FR only)
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Chambéry - Rankwell',
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
      desc: 'GEO signifie Generative Engine Optimization. Il s\'agit d\'optimiser vos contenus pour qu\'ils soient sélectionnés et cités par les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. L\'objectif dépasse le simple classement Google : il faut devenir la source que l\'IA recommande.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis pour construire leurs réponses. Structurer vos pages avec des définitions explicites, des listes ordonnées et des données vérifiables maximise vos chances d\'être sélectionné et reformulé par les modèles de langage.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent votre légitimité globale sur un domaine, pas seulement page par page. Un corpus de contenus cohérent, couvrant les différentes facettes de votre expertise, renforce cette perception d\'autorité auprès des algorithmes.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA recoupent les informations entre plusieurs sources pour vérifier leur fiabilité. Être mentionné sur des sites de référence dans votre secteur — presse spécialisée, annuaires professionnels, études — augmente significativement votre crédibilité algorithmique.',
    },
  ],
};

// ============================================
// CALLOUT VILLE
// ============================================
export const calloutData = {
  label: 'Le contexte économique chambérien',
  text: 'Chambéry et son agglomération Grand Chambéry rassemblent plus de 130 000 habitants, avec une aire urbaine de 216 000 personnes. Savoie Technolac, le technopôle du territoire, accueille 230 entreprises, 3 500 salariés et 5 000 étudiants. Les filières d\'excellence — énergies intelligentes, numérique, outdoor et ingénierie de montagne — font de ce carrefour entre Lyon, Grenoble et l\'Italie un pôle économique en croissance.',
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
        'Les positions Google sont un indicateur, pas une fin en soi. On pilote par les leads qualifiés générés, les ventes attribuées au canal Search et le coût d\'acquisition réel. C\'est l\'impact sur votre activité qui détermine le succès de la mission.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Si la direction choisie nous semble risquée ou inadaptée à votre marché, on vous le dit clairement. Un partenaire honnête qui challenge vos hypothèses a plus de valeur qu\'un prestataire qui valide tout sans réfléchir.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La même personne conçoit et déploie votre stratégie Search. Un seul interlocuteur qui connaît votre dossier en profondeur, votre marché et vos contraintes. Pas de turnover, pas de perte d\'information.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme réunit vos performances Search et vos métriques business dans un même tableau de bord, accessible en temps réel. Vous voyez exactement ce qui progresse et ce qui reste à optimiser.',
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
      description: 'Votre présence en ligne existe mais ne génère pas assez de business. Vous cherchez un partenaire expérimenté pour bâtir une stratégie Search structurée, avec des objectifs clairs et des résultats mesurables.',
    },
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Les IA conversationnelles bouleversent les habitudes de recherche de vos clients et prospects. Vous voulez un partenaire qui maîtrise ces nouveaux territoires et peut vous y positionner dès maintenant.',
    },
    {
      label: 'Acteurs du tourisme et de la montagne en Savoie',
      description: 'Hébergeurs, stations, prestataires d\'activités, commerces de montagne : la saisonnalité impose une stratégie Search anticipée. Être visible au bon moment sur les requêtes touristiques et locales génère des réservations directes.',
    },
    {
      label: 'Entreprises du technopôle et de l\'innovation',
      description: 'Startups de Savoie Technolac, bureaux d\'études, sociétés d\'ingénierie : votre expertise technique mérite une visibilité à la hauteur. Le SEO et le GEO positionnent votre savoir-faire devant les décideurs qui cherchent des solutions.',
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
      description: 'Examen technique, sémantique et concurrentiel approfondi de votre site. Un diagnostic actionnable avec des priorités classées par impact pour orienter votre stratégie.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site méthodique : structure de pages, maillage interne, balisage structuré et performance technique. Les fondations indispensables d\'un référencement pérenne.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Construction d\'un profil de liens entrants solide et cohérent. Approche qualitative avec des partenariats pertinents dans votre secteur, sans techniques black-hat.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, rédigés pour répondre aux requêtes de vos cibles et maximiser les conversions. Des textes utiles qui performent, pas du remplissage.',
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
  quote: 'The bar for content quality has risen. Merely good content is no longer sufficient—you need to create unique and engaging content that offers value beyond what AI can produce.',
  author: 'Cyrus Shepard',
  role: 'Founder Zyppy SEO',
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
      answer: 'Absolument. Nous accompagnons des entreprises chambériennes avec la même rigueur et le même engagement que nos clients des grandes métropoles. Visioconférences de suivi planifiées, accès à la plateforme Rankwell One, consultant senior dédié qui connaît votre dossier. Notre méthodologie est pensée pour fonctionner parfaitement à distance.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous dans le bassin chambérien ?',
      answer: 'Tourisme et montagne, énergies renouvelables, ingénierie, numérique, commerce et services : nous travaillons avec tous les secteurs représentés sur le territoire de Grand Chambéry. Notre expertise Search s\'adapte à votre contexte métier et à votre environnement concurrentiel spécifique.',
    },
    {
      id: '3',
      question: 'Comment fonctionne concrètement la collaboration à distance ?',
      answer: 'Visioconférences de suivi à fréquence définie ensemble, outils de travail partagés pour la gestion des contenus et des actions, et accès temps réel à toutes vos données de performance via Rankwell One. Votre consultant senior reste joignable par email et téléphone. La majorité de nos 350+ clients fonctionnent ainsi avec succès.',
    },
    {
      id: '4',
      question: 'En quoi le GEO est-il différent du SEO classique ?',
      answer: 'Le SEO vise les résultats classiques de Google (les 10 liens bleus). Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par les IA conversationnelles : ChatGPT, Perplexity, Google AI Overviews. Ces deux disciplines sont complémentaires et nous les intégrons systématiquement dans nos stratégies.',
    },
    {
      id: '5',
      question: 'Quels sont vos tarifs pour une entreprise chambérienne ?',
      answer: 'Les tarifs varient selon l\'ampleur de vos objectifs, la taille de votre site et le niveau de concurrence sur vos mots-clés cibles. Nous proposons des accompagnements mensuels et des missions ponctuelles. Le premier échange de 30 minutes est gratuit et sans engagement : il nous permet d\'évaluer votre situation et de vous proposer un budget réaliste.',
    },
    {
      id: '6',
      question: 'Combien de temps avant de constater des résultats concrets ?',
      answer: 'En SEO et GEO, comptez entre 3 et 6 mois pour observer des résultats significatifs, selon votre point de départ et l\'intensité concurrentielle de votre marché. Les campagnes SEA (Google Ads) produisent des résultats dès les premières semaines. Nous fixons des jalons intermédiaires clairs pour mesurer la progression.',
    },
    {
      id: '7',
      question: 'Avez-vous de l\'expérience avec les entreprises du technopôle Savoie Technolac ?',
      answer: 'Notre expertise s\'adapte parfaitement aux entreprises tech et innovantes. Startups, bureaux d\'études, sociétés d\'ingénierie : nous comprenons les cycles de vente B2B longs et les requêtes techniques sur lesquelles il faut se positionner. Le GEO est particulièrement pertinent pour ces structures, car les décideurs utilisent de plus en plus les IA pour identifier des fournisseurs.',
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
