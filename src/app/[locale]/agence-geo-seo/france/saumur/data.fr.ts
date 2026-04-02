/**
 * DATA - Page Saumur (Agence GEO & SEO pour les entreprises saumuroises)
 * URL: /agence-geo-seo/france/saumur (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Saumur, Agence GEO Saumur, Référencement Saumur
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises saumuroises - Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Saumur et du Val de Loire. Référencement Google et optimisation pour les moteurs IA. Collaboration à distance efficace, approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Saumur' },
  ] as BreadcrumbItem[],
  badge: 'saumur',
  title: 'Agence GEO et SEO à Saumur',
  description:
    'Troisième ville de Maine-et-Loire, Saumur conjugue patrimoine UNESCO, filière équestre et vignoble de renommée internationale. Les entreprises saumuroises ont besoin d\'une visibilité digitale à la hauteur de cette richesse. SEO, GEO, SEA et Data.',
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
  badge: 'Saumur',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale au service des entreprises saumuroises',
  paragraphs: [
    'Saumur accueille chaque année plus d\'un million de visiteurs attirés par le Cadre Noir, le château royal et les caves troglodytes du Val de Loire. Plus de 3 000 entreprises y sont implantées, de la viticulture à l\'agroalimentaire en passant par la métallurgie. Capter cette dynamique économique et touristique en ligne demande une stratégie Search solide.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises saumuroises avec une <strong>collaboration à distance qui fonctionne</strong>. Visioconférences régulières, outils partagés, transparence totale via notre plateforme Rankwell One. Pas besoin d\'être dans la même rue pour obtenir des résultats.',
    'Le Search évolue. Google reste incontournable, mais ChatGPT, Perplexity et les AI Overviews captent une part croissante des recherches. Nous aidons les entreprises saumuroises à devenir visibles sur tous ces canaux, avec une approche <strong>business centrix</strong> qui mesure le succès en conversions, pas en positions.',
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
  badge: 'Rankwell pour Saumur',
  title: 'Ce que nous apportons aux entreprises saumuroises',
  subtitle: 'Une expertise Search nationale accessible avec une collaboration à distance efficace.',
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
  title: 'Le GEO : ce que ça change concrètement pour le référencement',
  subtitle:
    'Le SEO classique vise les 10 liens bleus de Google. C\'est toujours essentiel. Mais les usages changent : de plus en plus d\'internautes posent leurs questions directement à des moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) consiste à optimiser vos contenus pour qu\'ils soient cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de ranker, mais de devenir LA source que l\'IA choisit de recommander à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Des contenus prêts à être cités',
      desc: 'Les IA extraient des passages qu\'elles peuvent reformuler facilement. Des définitions précises, des listes structurées, des données chiffrées sourcées. Nous structurons vos contenus pour maximiser les chances d\'être sélectionnés comme référence par ces moteurs.',
    },
    {
      id: 3,
      title: 'Construire une autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet donné. Pas seulement si vous avez publié un article, mais si l\'ensemble de votre présence digitale démontre une expertise cohérente et reconnue dans votre domaine.',
    },
    {
      id: 4,
      title: 'Un réseau de mentions solide',
      desc: 'Les IA vérifient votre crédibilité en analysant les mentions sur d\'autres sites : articles de presse, publications sectorielles, forums spécialisés. Le netlinking reste fondamental, mais il évolue vers un travail de réputation multi-sources.',
    },
  ],
};

// ============================================
// CALLOUT SAUMUR
// ============================================
export const calloutData = {
  label: 'Le contexte économique saumurois',
  text: 'Saumur Val de Loire, c\'est plus de 3 000 entreprises actives, un million de touristes par an et une économie diversifiée : viticulture (Saumur-Champigny, Crémant de Loire), filière équestre autour du Cadre Noir, agroalimentaire (Bonduelle, Marie Surgelés), métallurgie (Alltub, Greystal) et végétal. Le label Vignobles & Découvertes renforce l\'attractivité œnotouristique.',
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
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell pour une entreprise saumuroise.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé qui ne génère pas de business, c\'est inutile. Notre métrique principale, c\'est l\'impact réel : leads générés, demandes de devis, réservations touristiques, conversions attribuées au Search.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Ce que vous pensez vouloir n\'est pas toujours ce dont vous avez besoin. Notre rôle, c\'est aussi de vous dire quand une direction est sous-optimale. Un partenaire qui acquiesce à tout n\'est pas un vrai partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui réfléchit à votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de turnover. Vous avez un interlocuteur unique qui connaît votre dossier, votre marché et vos contraintes.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous visualisez l\'impact réel en temps réel, pas des vanity metrics dans un rapport mensuel envoyé avec trois semaines de retard.',
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour votre entreprise saumuroise ?',
  subtitle: 'Notre expertise s\'adresse à différents profils. Voici les situations où nous pouvons réellement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter le flux touristique en ligne',
      description: 'Saumur attire un million de visiteurs par an, mais la majorité prépare son séjour via Google ou une IA. Si votre établissement n\'apparaît pas dans ces résultats, vous passez à côté de réservations et de visites.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement de site',
      description: 'Vous créez un nouveau site ou refondez l\'existant et voulez partir sur des bases SEO et GEO solides. L\'optimisation dès la conception évite les reprises coûteuses une fois le site en ligne.',
    },
    {
      label: 'Viticulture et œnotourisme',
      description: 'Domaines viticoles, caves, prestataires de l\'œnotourisme saumurois : votre visibilité digitale conditionne directement les réservations de visites et les ventes directes. Le GEO est un levier particulièrement puissant pour ce secteur.',
    },
    {
      label: 'Agroalimentaire et industrie locale',
      description: 'Saumur héberge des acteurs majeurs de l\'agroalimentaire et de la métallurgie. Pour les entreprises B2B du territoire, le référencement génère des contacts commerciaux qualifiés auprès de décideurs qui recherchent des fournisseurs.',
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
  title: 'Nos services GEO & SEO à Saumur',
  subtitle: 'Quatre services complémentaires pour accompagner votre croissance digitale.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité. Une stratégie sur mesure, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu qui se positionne et qui convertit. Pas du remplissage.',
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
      label: "D'expertise Search",
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
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour comprendre vos enjeux. Pas de pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, analyse concurrentielle.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec priorités classées par impact business.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustement continu. Transparence via Rankwell One.',
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
  title: 'Ce que les entreprises saumuroises gagnent avec le GEO',
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
  quote: 'Google only loves you when everyone else loves you first.',
  author: 'Wendy Piersall',
  role: 'Auteure & entrepreneuse digitale',
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
      question: 'Travaillez-vous avec des entreprises à Saumur ?',
      answer: 'Oui, nous accompagnons des entreprises du Val de Loire et de toute la France. La collaboration se fait en visio avec des points réguliers, un accès à notre plateforme Rankwell One pour suivre vos performances en temps réel, et un consultant senior dédié joignable par email ou téléphone. La distance n\'est jamais un frein.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Saumur ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs présents sur le territoire saumurois : viticulture et œnotourisme (un pilier de l\'économie locale), hôtellerie-restauration, agroalimentaire, industrie et B2B, commerces. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic.',
    },
    {
      id: '3',
      question: 'Le GEO est-il pertinent pour le tourisme et l\'œnotourisme ?',
      answer: 'Particulièrement. Les touristes planifient de plus en plus leurs séjours via ChatGPT ou Google AI Overviews. Quand quelqu\'un demande « quels domaines viticoles visiter dans le Val de Loire ? », vous voulez être la réponse que l\'IA recommande. Le GEO rend cela possible en structurant vos contenus pour être cités.',
    },
    {
      id: '4',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange en visio de 30 minutes pour comprendre vos enjeux. Audit complet de votre situation actuelle. Roadmap avec priorités classées par impact. Puis exécution avec un consultant senior dédié et des points réguliers. Vous suivez l\'avancement en temps réel via Rankwell One.',
    },
    {
      id: '5',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand des internautes posent des questions liées à votre expertise. C\'est le futur du Search, et nous l\'intégrons dans tous nos projets.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. Nous travaillons sur des forfaits mensuels ou des projets ponctuels (audit, migration). Le plus simple : un premier échange pour comprendre votre situation et vous donner une estimation réaliste. Pas de mauvaise surprise ensuite.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO et GEO, les premiers résultats significatifs arrivent généralement entre 3 et 6 mois selon le point de départ et la concurrence. En SEA, les effets sont plus rapides (quelques semaines). Nous vous donnons des projections réalistes dès le départ, pas des promesses intenables.',
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
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
    { label: 'Le Mans', href: '/agence-geo-seo/france/le-mans' },
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
