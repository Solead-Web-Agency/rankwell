/**
 * DATA - Page La Baule (Agence GEO & SEO pour les entreprises bauloises)
 * URL: /agence-geo-seo/france/la-baule (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO La Baule, Agence GEO La Baule, Référencement La Baule
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises bauloises - Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de La Baule. Référencement Google et optimisation IA pour le tourisme, l\'événementiel et l\'hôtellerie de la Côte d\'Amour.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'La Baule' },
  ] as BreadcrumbItem[],
  badge: 'la-baule',
  title: 'Agence GEO et SEO à La Baule',
  description:
    'La Baule accueille 200 000 vacanciers chaque été et génère 26 millions d\'euros de retombées en tourisme d\'affaires. Dans cet écosystème où l\'hôtellerie, la thalassothérapie et l\'événementiel se disputent l\'attention digitale, la visibilité Search fait la différence.',
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
  badge: 'La Baule',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale au service de la Côte d\'Amour',
  paragraphs: [
    'La Baule n\'est pas une station balnéaire ordinaire. Ses 9 km de plage, son Palais des Congrès Atlantia et ses deux centres de thalassothérapie face à l\'océan en font un pôle économique où le tourisme de loisirs croise le tourisme d\'affaires. La concurrence digitale y est féroce : hôtels, restaurants, prestataires événementiels et commerces se battent pour capter une clientèle au pouvoir d\'achat élevé.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises bauloises avec une <strong>collaboration à distance structurée et efficace</strong>. Visioconférences régulières, outils partagés, transparence totale via notre plateforme Rankwell One. Le fait de ne pas être à La Baule ne change rien à la qualité de l\'accompagnement.',
    'Le GEO (Generative Engine Optimization) est devenu incontournable pour les acteurs du tourisme et de l\'événementiel. Quand un voyageur demande à ChatGPT « où séjourner sur la Côte d\'Amour », votre établissement doit apparaître. Nous combinons <strong>SEO et GEO avec une approche business centrix</strong> qui mesure le succès en réservations et en leads, pas en positions.',
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
  badge: 'Rankwell pour La Baule',
  title: 'Ce que nous apportons aux entreprises bauloises',
  subtitle: 'Une expertise Search nationale accessible avec une collaboration à distance qui fonctionne.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      title: '+350 clients',
      description: 'Accompagnés depuis 2017, partout en France.',
    },
    {
      id: 2,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Optimisation Google ET moteurs IA dès le départ.',
    },
    {
      id: 3,
      icon: 'Video',
      title: 'Collaboration efficace',
      description: 'Visios régulières, outils partagés, réactivité.',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Pas de junior sur votre dossier.',
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
  title: 'Le GEO : pourquoi ça change la donne pour les entreprises bauloises',
  subtitle:
    'Le SEO traditionnel vise les 10 liens bleus de Google. C\'est toujours indispensable. Mais les habitudes de recherche évoluent : de plus en plus de voyageurs et de professionnels interrogent des IA pour préparer leurs séjours et événements.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de ranker sur Google, mais de devenir la source que l\'IA recommande quand un utilisateur cherche un hôtel, un spa ou un lieu d\'événement sur la Côte d\'Amour.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA cherchent des passages qu\'elles peuvent extraire et reformuler facilement. Descriptions précises de vos prestations, données chiffrées sur vos capacités d\'accueil, avis structurés. On optimise vos contenus pour maximiser les chances d\'être cité quand un voyageur interroge une IA sur La Baule.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet donné. Pour un hôtel baulois, cela signifie démontrer une expertise cohérente : histoire de l\'établissement, ancrage local, offre détaillée. L\'ensemble de votre présence digitale doit converger vers cette légitimité.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions sur d\'autres sites : guides touristiques en ligne, articles de presse régionale, plateformes de réservation, blogs spécialisés. Le netlinking reste décisif, mais la logique de citation multi-sources prend le dessus.',
    },
  ],
};

// ============================================
// CALLOUT LA BAULE
// ============================================
export const calloutData = {
  label: 'Le contexte économique baulois',
  text: 'La Baule-Escoublac compte 16 600 habitants permanents mais accueille plus de 200 000 vacanciers en période estivale. Le revenu moyen y atteint 28 490 € contre 20 590 € au niveau national, et le taux de chômage reste bas à 6,1 %. Le Palais des Congrès Atlantia génère à lui seul 120 événements professionnels par an. Un marché à fort pouvoir d\'achat où la visibilité digitale conditionne directement le remplissage.',
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
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell pour les acteurs de la Côte d\'Amour.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur « thalasso La Baule » sans générer de réservations, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : demandes de devis, réservations directes, taux de remplissage. Le trafic n\'est qu\'un moyen.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Cibler la clientèle parisienne en résidence secondaire n\'a pas la même stratégie que capter le tourisme d\'affaires via Atlantia. Notre rôle, c\'est aussi de vous réorienter quand c\'est nécessaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas de junior, pas d\'intermédiaire. Vous avez un interlocuteur unique qui connaît votre dossier, votre marché saisonnier et les spécificités de la station.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous voyez l\'impact réel en temps réel : positions Google, citations IA, leads générés. Pas des vanity metrics dans un rapport mensuel.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises bauloises. Voici les situations et les secteurs où nous créons le plus de valeur.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez transformer votre visibilité digitale en réservations',
      description: 'Votre site existe mais ne génère pas assez de demandes directes. Vous dépendez trop des OTA ou des intermédiaires. Vous cherchez un partenaire pour structurer une stratégie Search qui ramène du business en propre.',
    },
    {
      label: 'Vous préparez un événement ou une saison et voulez anticiper',
      description: 'La saisonnalité de La Baule impose de travailler en amont. Vous avez besoin d\'une stratégie qui prépare la visibilité avant le pic estival ou avant un congrès majeur à Atlantia.',
    },
    {
      label: 'Hôtellerie, thalassothérapie et bien-être',
      description: 'Les deux centres de thalasso face à l\'océan, les hôtels du Resort Barrière et les établissements indépendants se disputent une clientèle premium. Le GEO est un levier décisif pour être recommandé par les IA aux voyageurs en phase de recherche.',
    },
    {
      label: 'Tourisme d\'affaires et événementiel',
      description: 'Atlantia accueille 120 événements professionnels par an dans ses 3 500 m². Les prestataires événementiels, traiteurs, organisateurs de séminaires ont besoin d\'être visibles quand les décideurs cherchent un lieu sur la Côte d\'Amour.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes dépassées. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats mesurables.',
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
  title: 'Nos services GEO & SEO à La Baule',
  subtitle: 'Quatre services complémentaires pour accompagner la croissance digitale des entreprises de la Côte d\'Amour.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie ce qui freine votre visibilité et les leviers pour capter la clientèle premium bauloise.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable adapté à la saisonnalité touristique.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Guides touristiques, presse régionale, annuaires spécialisés : une stratégie ciblée.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready pour l\'hôtellerie, la thalasso et l\'événementiel. Du contenu qui convertit, pas du remplissage.',
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
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés pour les entreprises bauloises.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 min en visio pour comprendre vos enjeux : saisonnalité, cibles, concurrence locale. Pas de pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet de votre situation : SEO technique, GEO-readiness, analyse concurrentielle sur le marché baulois et la Côte d\'Amour.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec priorités classées par impact business. On intègre la saisonnalité touristique dans le calendrier d\'actions.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustement. Suivi en temps réel via Rankwell One. Points réguliers en visio avec votre consultant dédié.',
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
  title: 'Ce que les entreprises bauloises gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus. Voici ce que notre approche SEO + GEO change concrètement pour les acteurs de La Baule.',
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
  quote: 'Good SEO work only gets better over time. It\'s only search engine tricks that need to keep changing when the ranking algorithms change.',
  author: 'Jill Whalen',
  role: 'Pionnière du SEO, HighRankings',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à La Baule',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises à La Baule sans être sur place ?',
      answer: 'Oui, nous accompagnons des entreprises sur toute la France depuis 2017. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La distance n\'affecte ni la qualité ni la réactivité de l\'accompagnement.',
    },
    {
      id: '2',
      question: 'Le GEO est-il vraiment utile pour le secteur touristique baulois ?',
      answer: 'C\'est même l\'un des secteurs où le GEO a le plus d\'impact. Les voyageurs utilisent de plus en plus ChatGPT et Perplexity pour préparer leurs séjours : « meilleur hôtel à La Baule », « thalasso Côte d\'Amour ». Si votre établissement n\'est pas cité dans ces réponses, vous perdez une source de réservations directes en pleine croissance.',
    },
    {
      id: '3',
      question: 'Comment gérez-vous la saisonnalité de La Baule ?',
      answer: 'La saisonnalité est au cœur de notre stratégie. On travaille les contenus et le netlinking en amont de la haute saison pour que la visibilité soit maximale quand la demande explose. L\'hiver, on prépare les fondations techniques et on capitalise sur le tourisme d\'affaires autour d\'Atlantia.',
    },
    {
      id: '4',
      question: 'Quels secteurs accompagnez-vous à La Baule ?',
      answer: 'Hôtellerie et résidences haut de gamme, centres de thalassothérapie, restaurants gastronomiques, organisateurs d\'événements professionnels, agences immobilières spécialisées en résidences secondaires, commerces premium. Le point commun : des entreprises qui veulent convertir leur visibilité en business réel.',
    },
    {
      id: '5',
      question: 'Comment le GEO peut-il aider le tourisme d\'affaires à La Baule ?',
      answer: 'Le Palais des Congrès Atlantia génère 120 événements par an et 26 millions d\'euros de retombées. Quand un organisateur demande à une IA « lieu de séminaire Côte atlantique », les prestataires qui ont travaillé leur GEO apparaissent dans la réponse. C\'est un avantage concurrentiel direct sur les destinations rivales.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs pour une entreprise bauloise ?',
      answer: 'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. On travaille sur des forfaits mensuels ou des projets ponctuels comme un audit. Le plus simple : un premier échange de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer: 'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon le point de départ et la concurrence. Le GEO peut être plus rapide car les IA mettent à jour leurs sources régulièrement. On vous donne des projections réalistes dès le départ, calées sur votre calendrier saisonnier.',
    },
    {
      id: '8',
      question: 'Comment mesurez-vous la performance du GEO ?',
      answer: 'Nous monitorons vos citations dans les réponses de ChatGPT, Perplexity et les AI Overviews de Google. Ces données sont croisées avec vos métriques business (réservations, demandes de devis) via Rankwell One. Vous voyez exactement l\'impact du GEO sur votre activité, pas juste un compteur de mentions.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet à La Baule',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On analyse votre situation sur la Côte d\'Amour et on vous dit ce qu\'on en pense.',
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
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Saint-Malo', href: '/agence-geo-seo/france/saint-malo' },
    { label: 'Brest', href: '/agence-geo-seo/france/brest' },
    { label: 'Vannes', href: '/agence-geo-seo/france/vannes' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
  ],
};
