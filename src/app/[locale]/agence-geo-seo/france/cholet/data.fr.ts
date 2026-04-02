/**
 * DATA FR - Agence GEO & SEO à Cholet
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Cholet | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Cholet. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Mouchoir.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Cholet' },
  ],
  badge: 'cholet',
  title: 'Agence GEO & SEO à Cholet',
  description:
    'Propulsez la visibilité en ligne de votre entreprise choletaise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées au dynamisme industriel et commercial des Mauges.',
  primaryCta: {
    text: 'Demander un audit gratuit',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Découvrir nos services',
    href: '#services',
  },
};

// ============================================
// INTRO DATA
// ============================================
export const introData = {
  badge: 'Votre partenaire digital à Cholet',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises choletaises',
  paragraphs: [
    "Cholet, sous-préfecture du Maine-et-Loire et capitale des Mauges, conjugue tradition industrielle textile et dynamisme économique. Ville entrepreneuriale par excellence, elle abrite de nombreuses PME et un tissu commercial actif.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale.",
    "Notre agence soutient les acteurs choletais dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
  ],
  tocItems: [
    { id: 'recap', label: 'En bref' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO' },
    { id: 'approche', label: 'Notre approche' },
    { id: 'pour-qui', label: 'Pour qui ?' },
    { id: 'services', label: 'Nos services' },
    { id: 'processus', label: 'Processus' },
    { id: 'comparaison', label: 'SEO vs GEO' },
    { id: 'faq', label: 'FAQ' },
  ],
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'GEO & SEO à Cholet : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché choletais.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Présence dans les réponses générées par les assistants IA nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Positionnement solide sur Google et les moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Focus local',
      description: 'Stratégies calibrées pour le bassin économique choletais et des Mauges.',
    },
    {
      icon: 'TrendingUp',
      title: 'Impact mesurable',
      description: 'Augmentation tangible du trafic qualifié et des opportunités commerciales.',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  title: 'Décryptage de l\'optimisation pour les moteurs IA',
  subtitle:
    'Le GEO bouleverse les codes du référencement. Découvrez comment cette discipline transforme la visibilité des entreprises choletaises sur les nouveaux canaux de recherche.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google AI Overviews ne fonctionnent pas comme Google classique. Ils synthétisent des informations provenant de multiples sources pour formuler une réponse unique et contextualisée. Être identifié comme source fiable par ces systèmes devient un enjeu majeur pour les PME choletaises.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et citation-ready',
      description:
        'Les systèmes IA privilégient les contenus rigoureusement organisés, qui démontrent une expertise vérifiable avec des données chiffrées et des sources. La qualité sémantique et la structure de vos pages déterminent directement si votre entreprise sera citée dans les réponses génératives.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance et autorité',
      description:
        'Citations dans des médias sectoriels, backlinks depuis des sites institutionnels, mentions cohérentes de votre marque sur le web : ces signaux renforcent votre crédibilité aux yeux des moteurs IA et augmentent la probabilité d\'être recommandé dans leurs réponses.',
    },
    {
      icon: 'ChartLine',
      title: 'Mesure de la visibilité IA',
      description:
        'Des outils analytiques dédiés permettent de monitorer votre présence dans les réponses générées par les IA, de mesurer la fréquence de vos citations et d\'ajuster la stratégie en continu. Nous suivons votre visibilité sur ChatGPT, Perplexity et les AI Overviews de Google.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique choletais',
  text: 'Le bassin Choletais-Mauges affiche l\'un des taux de chômage les plus bas de France (moins de 5 %). Avec 400 PMI, Cholet est le premier centre européen de vêtements pour enfants et abrite des marques comme Catimini, ÉRAM et GÉMO. Le territoire, labellisé « Territoires d\'industrie », combine fleurons industriels, sous-traitants spécialisés et jeunes pousses. Cette densité économique remarquable rend la visibilité digitale d\'autant plus stratégique pour se démarquer.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Notre approche business centrix',
  subtitle:
    'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement pour les entreprises choletaises.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé sans impact commercial, ça ne sert à rien. Notre métrique principale, c\'est l\'effet sur votre activité : leads générés, demandes de devis, coût d\'acquisition. Pour une PME choletaise, chaque euro investi doit produire un retour mesurable.',
    },
    {
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre rôle, c\'est aussi de vous dire quand une direction n\'est pas la bonne. Un partenaire qui valide tout sans discernement n\'est pas un vrai partenaire.',
    },
    {
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est celle qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur unique qui connaît votre marché choletais et vos enjeux dans le détail.',
    },
    {
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous voyez l\'impact réel en temps réel : trafic qualifié, citations IA, conversions. Pas des vanity metrics dans un rapport mensuel que personne ne lit.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où nous pouvons réellement faire la différence à Cholet.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez transformer votre site en machine à leads',
      description: 'Votre site vitrine ne génère pas de contacts qualifiés. Vous avez besoin d\'un partenaire qui sait structurer une stratégie Search orientée conversion : du diagnostic initial à l\'exécution, en passant par le contenu et la technique.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement digital',
      description: 'Vous lancez un nouveau site ou envisagez une refonte complète. Intégrer le SEO et le GEO dès la conception évite les corrections coûteuses après coup et vous donne un avantage dès la mise en ligne.',
    },
    {
      label: 'Industrie textile, mode et sous-traitance choletaise',
      description: 'Avec 400 PMI et des marques comme Catimini, ÉRAM et GÉMO, le bassin choletais est un pôle industriel majeur. Nous aidons fabricants, sous-traitants et marques de mode à gagner en visibilité en ligne, y compris dans les réponses des moteurs IA auprès d\'acheteurs professionnels.',
    },
    {
      label: 'PME industrielles et artisanales des Mauges',
      description: 'Le territoire Choletais-Mauges, labellisé « Territoires d\'industrie », concentre des entreprises innovantes avec un taux de chômage parmi les plus bas de France. Nous accompagnons ces PME dans leur digitalisation pour conquérir des marchés au-delà du bassin local.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la qualité d\'un accompagnement SEO. Ce qui compte, c\'est la méthodologie, l\'expertise et les résultats prouvés. Notre collaboration à distance avec les entreprises choletaises est fluide et sans friction.',
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
  title: 'Nos services GEO & SEO à Cholet',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel approfondi. On identifie les freins à votre visibilité et les leviers prioritaires pour accélérer votre croissance.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage structuré et performance technique. Les fondations d\'un référencement qui dure et qui résiste aux mises à jour.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour construire votre autorité de domaine. Stratégie sur mesure, sans spam ni réseaux artificiels. Des liens qui comptent vraiment.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready : structurés pour ranker sur Google et être cités par les moteurs IA. Du contenu qui positionne et qui convertit.',
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
  sectionId: 'processus',
  badge: 'Processus',
  title: 'Notre méthode de travail',
  subtitle: 'Une approche structurée en quatre étapes pour garantir des résultats concrets.',
  accentColor: 'rw-blue' as const,
  steps: [
    { number: 1, title: 'Audit initial', description: 'Analyse complète de votre situation et identification des opportunités.' },
    { number: 2, title: 'Définition de la stratégie', description: 'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO.' },
    { number: 3, title: 'Déploiement', description: 'Mise en œuvre des optimisations et création de contenus.' },
    { number: 4, title: 'Suivi et amélioration', description: 'Monitoring régulier et ajustements continus.' },
  ],
};

// ============================================
// COMPARAISON SEO vs GEO
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO traditionnel versus GEO',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers.',
  accentColor: 'rw-blue' as const,
  columns: ['Dimension', 'SEO classique', 'GEO (IA)'],
  rows: [
    ['Cible', 'Google, Bing', 'ChatGPT, Perplexity, SGE'],
    ['Format résultat', 'Liens bleus', 'Réponses synthétisées'],
    ['Contenu optimal', 'Mots-clés ciblés', 'Contexte et expertise'],
    ['Critères clés', 'Backlinks, technique', 'Autorité, citations'],
    ['Mesure', 'Rankings, CTR', 'Mentions, visibilité IA'],
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'Consumer ignorance is no longer a viable sales and marketing strategy.',
  author: 'Marcus Sheridan',
  role: 'Auteur de They Ask, You Answer',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Cholet',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Travaillez-vous avec des entreprises à Cholet malgré la distance ?',
      answer: 'Oui, nous accompagnons des entreprises choletaises avec une collaboration à distance qui fonctionne. Visioconférences régulières, consultant senior dédié joignable par téléphone et email, accès en temps réel à Rankwell One pour suivre vos performances. Nos clients choletais bénéficient exactement du même niveau de service que nos clients parisiens.',
    },
    {
      question: 'Comment le SEO et le GEO peuvent aider une PME industrielle choletaise ?',
      answer: 'Le bassin choletais compte 400 PMI et un tissu industriel dense. Le SEO positionne votre site sur les requêtes de vos acheteurs professionnels sur Google. Le GEO assure que quand un donneur d\'ordre demande à ChatGPT ou Perplexity un sous-traitant textile ou industriel dans l\'Ouest, votre entreprise soit dans la réponse. Les deux combinés couvrent l\'ensemble des canaux de recherche B2B.',
    },
    {
      question: 'Quels secteurs accompagnez-vous dans le bassin choletais ?',
      answer: 'Nous travaillons avec les secteurs clés du territoire : textile et mode (le Choletais est premier centre européen du vêtement enfant), industrie manufacturière et sous-traitance, commerce et distribution, services aux entreprises. Le point commun : des entreprises qui veulent transformer leur présence digitale en levier de croissance mesurable.',
    },
    {
      question: 'Quelle est la différence entre SEO et GEO ?',
      answer: 'Le SEO vise les résultats classiques de Google (les 10 liens bleus). Le GEO (Generative Engine Optimization) cible les moteurs IA comme ChatGPT, Perplexity et les AI Overviews de Google, qui formulent des réponses synthétiques. Ces deux disciplines sont complémentaires : le SEO capte les recherches traditionnelles, le GEO assure votre visibilité sur les nouveaux canaux.',
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'En SEO, les premiers résultats tangibles arrivent entre 3 et 6 mois selon votre point de départ et l\'intensité concurrentielle de votre marché. En GEO, l\'intégration dans les réponses IA peut être plus rapide si vos contenus sont bien structurés. Nous définissons des objectifs réalistes dès le démarrage et mesurons la progression chaque mois via Rankwell One.',
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs varient selon vos objectifs, votre secteur et le niveau de concurrence. Nous proposons des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles (audit, stratégie de contenu). Le plus simple : un premier échange de 30 minutes pour évaluer votre situation et vous donner une estimation transparente et sans engagement.',
    },
    {
      question: 'Pourquoi ne pas choisir une agence locale à Cholet ?',
      answer: 'La proximité géographique ne garantit pas la compétence en SEO et GEO. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats prouvés. Avec plus de 350 clients accompagnés depuis 2017 et une spécialisation GEO que peu d\'agences maîtrisent, nous apportons un niveau d\'expertise difficilement trouvable localement. La collaboration à distance est fluide et sans friction.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Cholet ?',
  description: 'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
  ],
};
