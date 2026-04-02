/**
 * DATA - Page Pau (Agence GEO & SEO pour les entreprises paloises)
 * URL: /agence-geo-seo/france/pau (FR only)
 *
 * Page locale SANS présence physique
 * Mots-clés: Agence SEO Pau, Agence GEO Pau, Référencement Pau, SEO aéronautique, SEO énergie
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO pour les entreprises paloises - Rankwell',
  description:
    'Expertise SEO et GEO pour les entreprises de Pau. Référencement Google et optimisation pour les moteurs IA. Approche business centrix adaptée au tissu industriel béarnais.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Pau' },
  ] as BreadcrumbItem[],
  badge: 'pau',
  title: 'Agence GEO et SEO à Pau',
  description:
    'Pau est un hub industriel de premier plan, entre aéronautique et énergie. Les entreprises paloises opèrent dans des filières exigeantes où la crédibilité digitale conditionne le développement commercial. SEO, GEO, SEA et Data.',
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
  badge: 'Pau',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise Search nationale au service du tissu industriel palois',
  paragraphs: [
    'Le bassin de Pau concentre des filières à forte valeur ajoutée : aéronautique avec Safran Helicopter Engines et Daher, énergie avec le centre R&D de TotalEnergies, chimie avec Arkema. Dans cet écosystème B2B exigeant, la visibilité digitale conditionne l\'accès aux donneurs d\'ordres et aux appels d\'offres industriels.',
    'Rankwell accompagne des entreprises dans toute la France depuis 2017. Notre expertise GEO et SEO est accessible aux entreprises paloises avec une <strong>collaboration à distance structurée</strong>. Visioconférences régulières, outils partagés, transparence totale via notre plateforme Rankwell One.',
    'Le marché palois a ses spécificités : cycles de vente longs en B2B industriel, recherches techniques pointues, concurrence régionale avec Toulouse et Bordeaux. Notre approche <strong>business centrix</strong> intègre ces réalités pour générer des résultats mesurables en leads, pas en vanity metrics.',
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
  badge: 'Rankwell pour Pau',
  title: 'Ce que nous apportons aux entreprises paloises',
  subtitle: 'Une expertise Search nationale adaptée aux enjeux industriels et B2B du bassin palois.',
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
  title: 'Le GEO : pourquoi les industriels palois doivent s\'y intéresser',
  subtitle:
    'Le SEO traditionnel vise les 10 liens bleus de Google. C\'est toujours essentiel. Mais les décideurs B2B utilisent désormais ChatGPT et Perplexity pour sourcer leurs prestataires industriels.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif n\'est plus seulement de ranker, mais de devenir la source que l\'IA recommande quand un donneur d\'ordres cherche un partenaire industriel.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA extraient des passages précis pour formuler leurs réponses. Des spécifications techniques claires, des certifications documentées, des cas clients chiffrés. On structure vos contenus pour que les LLMs vous citent naturellement quand un acheteur cherche un sous-traitant aéronautique ou un prestataire énergie.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les modèles de langage évaluent votre légitimité sur un sujet en analysant l\'ensemble de votre empreinte digitale. Un site qui démontre une expertise cohérente en usinage de précision ou en maintenance industrielle sera privilégié par l\'IA face à un généraliste.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité via les mentions sur d\'autres sites : publications Aerospace Valley, articles spécialisés, annuaires professionnels, retombées presse régionale. Le netlinking industriel reste déterminant, mais avec une logique différente.',
    },
  ],
};

// ============================================
// CALLOUT PAU
// ============================================
export const calloutData = {
  label: 'Le contexte économique palois',
  text: 'Le Territoire d\'Industrie Lacq-Pau-Tarbes concentre 27 000 emplois industriels répartis dans près de 4 000 établissements. Safran Helicopter Engines emploie plus de 2 500 personnes, TotalEnergies opère son principal centre de R&D mondial depuis le CSTJF. L\'agglomération paloise est un bassin décisionnel où la visibilité digitale conditionne l\'accès aux marchés.',
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
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell pour les entreprises paloises.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur « sous-traitant aéronautique » sans générer de demandes de devis, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre pipe commercial : RFQ reçues, contacts qualifiés, coût d\'acquisition par lead.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Cibler des mots-clés grand public quand votre marché est le B2B industriel, c\'est du gaspillage. Notre job inclut de recadrer la stratégie quand elle dévie. Un partenaire qui dit oui à tout n\'apporte rien.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui élabore votre stratégie est celle qui l\'exécute. Pas de stagiaire, pas de sous-traitance. Votre consultant connaît votre dossier, votre secteur et vos concurrents dans le détail.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs business. Vous suivez en temps réel l\'impact sur votre activité : visibilité, citations IA, leads générés. Pas de rapport mensuel cosmétique.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations et secteurs palois où nous apportons le plus de valeur.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter des donneurs d\'ordres via le digital',
      description: 'Votre site existe mais ne génère pas assez de demandes qualifiées. Vous avez besoin d\'une stratégie Search qui attire les acheteurs industriels et les décideurs B2B qui recherchent vos compétences.',
    },
    {
      label: 'Vous préparez votre visibilité sur les moteurs IA',
      description: 'Vos concurrents apparaissent déjà dans les réponses de ChatGPT et Perplexity, pas vous. Vous cherchez une agence capable d\'optimiser pour ces nouveaux canaux, pas seulement pour Google.',
    },
    {
      label: 'Aéronautique & Défense',
      description: 'Sous-traitants de Safran, Dassault, Daher. Entreprises de la filière Aerospace Valley qui veulent renforcer leur visibilité auprès des donneurs d\'ordres et se positionner sur les appels d\'offres numériques.',
    },
    {
      label: 'Énergie, Chimie & Industrie',
      description: 'Acteurs du bassin de Lacq, prestataires de TotalEnergies et Arkema, PME industrielles du Béarn. Des secteurs techniques où l\'expertise documentée en ligne devient un avantage concurrentiel décisif.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise sectorielle, la méthodologie et les résultats mesurables. Nos clients palois le confirment.',
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
  title: 'Nos services GEO & SEO à Pau',
  subtitle: 'Quatre services complémentaires pour accompagner la croissance digitale des entreprises paloises.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie les freins à votre visibilité et les leviers d\'accélération spécifiques à votre marché.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage technique et performance. Les fondations d\'un référencement durable pour l\'industrie.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité sectorielle. Stratégie ciblée sur les médias industriels et les publications spécialisées.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui documentent votre expertise technique et attirent les décideurs. Du contenu qui convertit.',
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
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés de notre collaboration.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 minutes en visio pour comprendre vos enjeux, votre marché et vos objectifs. Pas de pitch commercial, que de l\'écoute.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet de votre situation : SEO technique, GEO-readiness, analyse concurrentielle sur votre secteur et votre bassin.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec des actions priorisées par impact business. Chaque recommandation est chiffrée et planifiée.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, optimisation, mesure et ajustement continu. Suivi transparent via Rankwell One, points réguliers en visio.',
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
  title: 'Ce que les entreprises paloises gagnent avec le GEO',
  subtitle: 'Le SEO seul ne suffit plus quand vos prospects B2B interrogent ChatGPT pour sourcer un prestataire. Voici ce que change notre approche combinée.',
  columns: ['Aspect', 'SEO traditionnel', 'SEO + GEO (Rankwell)'],
  rows: [
    ['Moteurs ciblés', 'Google uniquement', 'Google + ChatGPT, Perplexity, AI Overviews'],
    ['Objectif', 'Top 10 des liens bleus', 'Être cité comme référence par les IA'],
    ['Structure contenu', 'Optimisé mots-clés', 'Citation-ready + mots-clés techniques'],
    ['Autorité construite', 'Backlinks classiques', 'Backlinks + mentions sectorielles multi-sources'],
    ['Mesure du succès', 'Positions Google', 'Positions + citations IA + leads qualifiés'],
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'SEO is not about gaming the system anymore; it\'s about learning how to play by the rules.',
  author: 'Jordan Teicher',
  role: 'Content strategist, Contently',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO et SEO à Pau',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises industrielles à Pau ?',
      answer: 'Oui, nous accompagnons des entreprises B2B et industrielles dans toute la France, y compris le bassin palois. Visioconférences régulières, accès à Rankwell One pour le suivi en temps réel, consultant senior dédié qui comprend les cycles de vente longs du B2B industriel. La distance n\'est pas un frein.',
    },
    {
      id: '2',
      question: 'Pouvez-vous aider un sous-traitant aéronautique à se rendre visible en ligne ?',
      answer: 'C\'est exactement notre terrain. Un sous-traitant aéronautique doit être trouvé par les donneurs d\'ordres qui cherchent des compétences spécifiques : usinage, traitement de surface, assemblage. On optimise votre présence pour que ces recherches techniques vous trouvent, sur Google comme sur les moteurs IA.',
    },
    {
      id: '3',
      question: 'En quoi le GEO est-il pertinent pour le secteur de l\'énergie à Pau ?',
      answer: 'Les décideurs du secteur énergie utilisent de plus en plus les IA pour identifier des prestataires, comparer des solutions ou préparer des cahiers des charges. Si vos contenus ne sont pas structurés pour être cités par ces outils, vous êtes invisible auprès d\'une part croissante de vos prospects.',
    },
    {
      id: '4',
      question: 'Comment vous positionnez-vous face aux agences SEO locales de Pau ?',
      answer: 'La compétence n\'est pas une question de code postal. Nous apportons une expertise nationale forgée sur 350+ clients avec des méthodologies éprouvées. Nos consultants seniors ont traité des problématiques similaires dans d\'autres bassins industriels. C\'est cette expérience qui fait la différence.',
    },
    {
      id: '5',
      question: 'Quel budget prévoir pour une stratégie SEO et GEO à Pau ?',
      answer: 'Le budget dépend de vos objectifs, de la concurrence sur votre secteur et de votre point de départ. On travaille sur des forfaits mensuels ou des missions ponctuelles. Premier échange sans engagement pour évaluer votre situation et vous donner une estimation réaliste, sans mauvaise surprise ensuite.',
    },
    {
      id: '6',
      question: 'Combien de temps faut-il pour voir des résultats concrets ?',
      answer: 'En SEO et GEO, les premiers résultats significatifs apparaissent entre 3 et 6 mois selon le niveau de concurrence et l\'état de votre site. Pour le secteur industriel palois, la concurrence SEO est souvent moins intense que dans les métropoles, ce qui peut accélérer les gains de visibilité.',
    },
    {
      id: '7',
      question: 'Travaillez-vous aussi avec les entreprises du tourisme pyrénéen ?',
      answer: 'Tout à fait. Pau est la porte d\'entrée des Pyrénées et son économie touristique est réelle : hébergements, activités outdoor, stations thermales. Nous adaptons notre approche au tourisme avec un focus sur le SEO local, la saisonnalité et l\'optimisation GEO pour les recherches conversationnelles des voyageurs.',
    },
    {
      id: '8',
      question: 'Proposez-vous aussi du SEA (Google Ads) à Pau ?',
      answer: 'Oui, nous intégrons le SEA dans nos stratégies quand c\'est pertinent. Pour certains secteurs palois comme les services B2B ou le recrutement industriel, une combinaison SEO + GEO + SEA permet de couvrir l\'ensemble du parcours de recherche et d\'accélérer la génération de leads dès le premier mois.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Discutons de votre projet à Pau',
  description:
    'Premier échange de 30 minutes en visio. Sans engagement. On analyse votre situation, on identifie les opportunités et on vous dit ce qu\'on en pense.',
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
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Bayonne', href: '/agence-geo-seo/france/bayonne' },
    { label: 'Nouvelle-Aquitaine', href: '/agence-geo-seo/france/nouvelle-aquitaine' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
  ],
};
