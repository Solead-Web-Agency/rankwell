/**
 * DATA FR - Agence GEO & SEO à Nîmes
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Nîmes | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Nîmes. Boostez votre visibilité sur les moteurs IA et traditionnels dans la cité romaine.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Nîmes' },
  ],
  badge: 'nimes',
  title: 'Agence GEO & SEO à Nîmes',
  description:
    'Propulsez la visibilité en ligne de votre entreprise nîmoise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées au carrefour du Languedoc et de la Provence.',
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
  badge: 'Votre partenaire digital à Nîmes',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises nîmoises',
  paragraphs: [
    "Nîmes, la Rome française, conjugue un patrimoine antique exceptionnel et un dynamisme économique moderne. Aux portes de la Provence et du Languedoc, la cité gardoise attire entrepreneurs, commerçants et professionnels du tourisme séduits par son cadre de vie méditerranéen.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs nîmois dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
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
  title: 'GEO & SEO à Nîmes : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché nîmois.',
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
      description: 'Stratégies calibrées pour le bassin économique nîmois et gardois.',
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
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise nîmoise.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) désigne l\'ensemble des techniques qui permettent à vos contenus d\'être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'enjeu n\'est plus seulement de figurer dans les liens bleus, mais de devenir la source que l\'intelligence artificielle recommande spontanément à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les moteurs IA sélectionnent des passages clairs, structurés et sourcés qu\'ils peuvent reformuler dans leurs réponses. Des définitions précises, des listes ordonnées, des données chiffrées avec leurs références : nous structurons vos contenus pour maximiser vos chances d\'être cité lorsqu\'un utilisateur interroge une IA sur votre secteur d\'activité.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si votre site constitue une source légitime sur un sujet donné. Ils analysent la cohérence globale de votre présence en ligne : profondeur du contenu, expertise démontrée, interconnexion des pages. Une entreprise nîmoise spécialisée dans le tourisme patrimonial doit prouver son expertise sur l\'ensemble de cette thématique.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA vérifient votre crédibilité en analysant les mentions de votre marque sur d\'autres sites : articles de presse régionale, études sectorielles, annuaires professionnels du Gard, forums spécialisés. Le netlinking classique évolue vers un écosystème de citations multi-sources qui renforce votre autorité aux yeux des algorithmes génératifs.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique nîmois',
  text: 'Nîmes Métropole rassemble 265 000 habitants et plus de 27 000 entreprises, concentrant 41 % des emplois du Gard. En 2024, les monuments romains ont franchi la barre des 734 000 visiteurs, dont 416 000 pour les Arènes seules. La Maison Carrée, inscrite au patrimoine mondial de l\'UNESCO en 2023, a vu sa fréquentation bondir de 11 %. Tourisme patrimonial, viticulture (Costières de Nîmes), agroalimentaire et services : la concurrence digitale s\'intensifie sur ce territoire dynamique.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Nîmes',
  subtitle:
    'Notre démarche intègre les particularités du marché nîmois pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur « Arènes de Nîmes » sans générer de réservations, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées, coût d\'acquisition. Chaque action SEO ou GEO est évaluée à l\'aune de son retour business réel.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Cibler des requêtes à fort volume sans intention d\'achat, c\'est du temps perdu. Notre rôle, c\'est aussi de recadrer la stratégie quand elle s\'éloigne du business. Un partenaire qui dit oui à tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui conçoit votre stratégie est la même qui l\'exécute. Pas de junior, pas d\'intermédiaire. Vous avez un interlocuteur unique qui connaît votre dossier dans le détail, disponible par visio, email ou téléphone. C\'est la clé d\'une collaboration fluide à distance.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous suivez en temps réel l\'impact de chaque action sur votre activité nîmoise : positions, citations IA, trafic qualifié, conversions. Pas de vanity metrics dans un PDF mensuel, mais un tableau de bord vivant.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez un partenaire capable de structurer une stratégie Search qui transforme le trafic en clients, pas juste en visiteurs qui repartent aussitôt.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement',
      description: 'Vous créez un nouveau site ou repensez l\'existant. Intégrer le SEO et le GEO dès la conception évite les corrections coûteuses après coup et vous donne une longueur d\'avance sur vos concurrents nîmois.',
    },
    {
      label: 'Tourisme et patrimoine gardois',
      description: 'Hôteliers, restaurateurs, guides, prestataires d\'événements : avec 734 000 visiteurs dans les monuments romains en 2024 et la Maison Carrée classée UNESCO, capter ce flux touristique en ligne est devenu un levier de croissance incontournable.',
    },
    {
      label: 'Viticulture et agroalimentaire du Gard',
      description: 'Domaines viticoles des Costières de Nîmes, producteurs locaux, coopératives : le digital transforme la commercialisation agricole. Être visible sur Google et recommandé par les IA quand un acheteur cherche un vin du Gard, c\'est ouvrir de nouveaux canaux de vente.',
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
  title: 'Nos services GEO & SEO à Nîmes',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité auprès des entreprises et touristes nîmois, et les leviers à activer en priorité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable qui positionne votre entreprise sur les requêtes qui génèrent du business.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour renforcer votre autorité de domaine. Stratégie sur mesure avec des partenaires éditoriaux pertinents, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui positionnent votre expertise gardoise. Du contenu qui se classe, qui est cité par les IA et qui convertit vos visiteurs en clients.',
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
  subtitle: 'Une approche structurée en quatre étapes pour garantir des résultats concrets et pérennes.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Audit initial',
      description:
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Nîmes et opportunités à exploiter.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte nîmois.',
    },
    {
      number: 3,
      title: 'Déploiement',
      description:
        'Mise en œuvre des optimisations techniques et éditoriales, création de contenus et renforcement de votre autorité en ligne.',
    },
    {
      number: 4,
      title: 'Suivi et amélioration',
      description:
        'Monitoring régulier des indicateurs clés, ajustements continus et reporting transparent sur les avancées.',
    },
  ],
};

// ============================================
// COMPARAISON SEO vs GEO
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO traditionnel versus GEO',
  subtitle:
    'Appréhendez les différences entre ces deux approches pour comprendre notre stratégie intégrée.',
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
  quote: 'A well-designed, easy-to-navigate website is useless if no one can find it. If your company is going to succeed in the web economy, optimizing your site for search engine visibility is essential.',
  author: 'Stephan Spencer',
  role: 'Co-auteur de The Art of SEO',
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
      question: 'Travaillez-vous avec des entreprises à Nîmes sans être sur place ?',
      answer: 'Oui, nous accompagnons des entreprises nîmoises depuis plusieurs années. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. Notre modèle de collaboration à distance est éprouvé auprès de plus de 350 clients en France. La qualité de l\'accompagnement ne dépend pas de la distance, mais de la méthodologie et de la réactivité.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous à Nîmes ?',
      answer: 'Nous travaillons avec des entreprises de tous secteurs du bassin nîmois : tourisme patrimonial (un secteur clé avec 734 000 visiteurs dans les monuments romains en 2024), viticulture (Costières de Nîmes), agroalimentaire, services professionnels, e-commerce. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic qui ne convertit pas.',
    },
    {
      id: '3',
      question: 'Qu\'est-ce que le GEO et pourquoi c\'est important pour une entreprise nîmoise ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un touriste demande à une IA « quel domaine viticole visiter près de Nîmes ? » ou « meilleur restaurant Nîmes centre », vous voulez être la réponse. C\'est le futur du Search, et on l\'intègre dans tous nos projets dès le départ.',
    },
    {
      id: '4',
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon le point de départ et l\'intensité concurrentielle sur votre marché. Le GEO peut produire des effets plus rapides quand les contenus sont bien structurés. On vous donne des projections réalistes dès le départ, pas des promesses intenables. Et vous suivez l\'avancement en temps réel via Rankwell One.',
    },
    {
      id: '5',
      question: 'Comment se déroule un projet type ?',
      answer: 'Premier échange de 30 minutes en visio pour comprendre vos enjeux. Audit complet de votre situation actuelle. Roadmap avec priorités classées par impact business. Puis exécution avec un consultant senior dédié et des points réguliers. Tout est transparent : vous voyez les actions réalisées, les résultats obtenus et les prochaines étapes planifiées dans votre espace Rankwell One.',
    },
    {
      id: '6',
      question: 'Quels sont vos tarifs pour une entreprise nîmoise ?',
      answer: 'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. On travaille sur des forfaits mensuels ou des missions ponctuelles (audit, refonte). Pas de forfait low-cost avec des résultats au rabais. Le plus simple : un premier échange pour comprendre votre situation et recevoir une estimation réaliste et détaillée.',
    },
    {
      id: '7',
      question: 'Le tourisme à Nîmes est saisonnier. Le SEO reste-t-il pertinent toute l\'année ?',
      answer: 'Absolument. Les touristes préparent leur voyage des semaines, voire des mois à l\'avance. Les recherches sur la Feria, les Arènes ou les hébergements gardois commencent bien avant l\'été. Un référencement travaillé en continu vous positionne au moment où l\'intention de voyage se forme. De plus, les moteurs IA répondent aux questions de planification toute l\'année, amplifiant l\'effet de votre visibilité digitale.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Nîmes ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise nîmoise vers de nouveaux horizons.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (MAILLAGE INTERNE)
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
