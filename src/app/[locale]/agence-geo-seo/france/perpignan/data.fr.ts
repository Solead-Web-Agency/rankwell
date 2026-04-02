/**
 * DATA FR - Agence GEO & SEO à Perpignan
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Perpignan | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Perpignan. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Roussillon.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Perpignan' },
  ],
  badge: 'perpignan',
  title: 'Agence GEO & SEO à Perpignan',
  description:
    'Propulsez la visibilité en ligne de votre entreprise perpignanaise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées au dynamisme catalan et transfrontalier.',
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
  badge: 'Votre partenaire digital à Perpignan',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises perpignanaises',
  paragraphs: [
    "Perpignan, capitale du Roussillon et porte d'entrée vers l'Espagne, conjugue un patrimoine catalan unique et un dynamisme économique transfrontalier. Entre mer Méditerranée et sommets pyrénéens, la ville attire entrepreneurs, commerçants et professionnels du tourisme séduits par son cadre de vie ensoleillé.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs perpignanais dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant les marchés catalan et espagnol.",
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
  title: 'GEO & SEO à Perpignan : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché perpignanais.',
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
      title: 'Focus transfrontalier',
      description: 'Stratégies calibrées pour le marché catalan français et espagnol.',
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
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise perpignanaise.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) regroupe les pratiques qui permettent à vos contenus d\'apparaître dans les réponses des moteurs IA : ChatGPT, Perplexity, AI Overviews de Google. Pour une entreprise perpignanaise, cela signifie être recommandé quand un prospect ou un touriste pose une question liée à votre activité, que ce soit en français, en espagnol ou en catalan.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA sélectionnent des extraits qu\'elles peuvent reformuler et attribuer. Pour être choisi, votre contenu doit être structuré avec des réponses directes, des données vérifiables et une expertise démontrée. Nous optimisons vos pages pour que les algorithmes génératifs les identifient comme des sources fiables sur votre domaine d\'expertise.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les modèles de langage évaluent la légitimité de votre site sur un sujet donné. Un acteur de la logistique fruits et légumes à Perpignan doit démontrer une expertise cohérente sur l\'ensemble de sa thématique. La profondeur sémantique, le maillage interne et la couverture exhaustive du sujet sont les leviers que nous actionnons.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent de multiples sources pour valider votre crédibilité : presse locale et nationale, sites institutionnels, annuaires professionnels, réseaux sociaux. Plus votre marque est mentionnée dans des contextes pertinents et diversifiés, plus les moteurs génératifs vous considèrent comme une référence digne de recommandation.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique perpignanais',
  text: 'Perpignan et son agglomération concentrent 56 % de la population des Pyrénées-Orientales, soit environ 122 000 habitants en ville et 491 000 dans le département. Saint-Charles International, premier centre européen de commercialisation de fruits et légumes frais, génère 2,3 milliards d\'euros de chiffre d\'affaires et emploie 10 000 personnes. La position transfrontalière de Perpignan, à 30 km de l\'Espagne, en fait un carrefour logistique et commercial où la visibilité digitale multilingue est un avantage concurrentiel décisif.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Perpignan',
  subtitle:
    'Notre démarche intègre les particularités du marché perpignanais et catalan pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Gagner des positions sur « logistique Perpignan » sans que ça génère des demandes de devis, ça ne sert à rien. Notre métrique principale, c\'est l\'impact concret sur votre activité : leads qualifiés, ventes attribuées au Search, coût d\'acquisition par canal. Chaque euro investi doit être traçable.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Viser le marché espagnol sans contenu en espagnol correctement localisé, c\'est une impasse. Notre rôle inclut de remettre en question les idées reçues et de réorienter les efforts vers ce qui produit des résultats. Un vrai partenaire stratégique ne se contente pas d\'exécuter aveuglément.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui élabore votre stratégie est celui qui l\'implémente. Pas de commercial qui promet et de junior qui livre. Votre consultant connaît les spécificités du marché transfrontalier catalan et reste votre interlocuteur unique tout au long de la mission, joignable en visio, email ou téléphone.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos indicateurs commerciaux. Vous suivez en temps réel les positions, les citations IA, le trafic qualifié et les conversions. Fini les rapports PDF statiques : vous disposez d\'un tableau de bord vivant, accessible quand vous le souhaitez.',
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
      description: 'Votre site existe mais les demandes de contact restent insuffisantes. Vous avez besoin d\'un partenaire qui structure une vraie stratégie Search, capable de transformer des visiteurs en clients sur le marché catalan et au-delà.',
    },
    {
      label: 'Vous cherchez une expertise GEO avant-gardiste',
      description: 'Vous avez compris que ChatGPT et Perplexity changent la façon dont les gens trouvent des prestataires. Vous voulez une agence qui sait positionner votre entreprise dans ces réponses IA, pas uniquement dans les résultats Google classiques.',
    },
    {
      label: 'Commerce transfrontalier et logistique',
      description: 'Acteurs de Saint-Charles International, transporteurs, grossistes, importateurs : avec 2,3 milliards d\'euros de chiffre d\'affaires sur la plateforme et 57 % d\'approvisionnement espagnol, votre visibilité digitale doit couvrir les marchés français et ibérique simultanément.',
    },
    {
      label: 'Tourisme de la Côte Vermeille et des Pyrénées catalanes',
      description: 'Hôteliers, campings, restaurateurs, prestataires d\'activités : les touristes planifient leurs séjours via Google et les IA. Être visible quand un voyageur cherche « où dormir à Collioure » ou « randonnée Canigou » en français, espagnol ou catalan, c\'est capter une clientèle internationale.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et la capacité à produire des résultats mesurables. Une agence qui comprend le marché transfrontalier vaut mieux qu\'un prestataire local sans vision internationale.',
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
  title: 'Nos services GEO & SEO à Perpignan',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel adapté au contexte transfrontalier perpignanais. On cartographie vos forces, vos freins et les opportunités de croissance sur les marchés français et ibérique.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Architecture de contenu multilingue, balisage technique, performance serveur. Les fondations d\'un référencement solide qui fonctionne aussi bien en français qu\'en espagnol et en catalan.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs sur des sites à forte autorité, en France comme en Espagne. Une stratégie sur-mesure qui renforce votre crédibilité auprès des moteurs et des IA.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready, pensés pour le marché catalan. Du contenu qui se positionne, qui est cité par les moteurs IA et qui convertit les prospects en clients.',
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
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Perpignan et opportunités transfrontalières.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte catalan.',
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
  quote: 'If you spend your time optimizing your site for algorithmic particulars, you\'ll never have time to do anything else. Focus on building something genuinely useful for your audience.',
  author: 'Vanessa Fox',
  role: 'Créatrice de Google Webmaster Central',
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
      question: 'Travaillez-vous avec des entreprises à Perpignan sans être sur place ?',
      answer: 'Oui, nous accompagnons des entreprises perpignanaises avec un modèle de collaboration à distance éprouvé auprès de plus de 350 clients. Visios régulières, consultant senior dédié joignable en permanence, accès à Rankwell One pour suivre vos résultats en temps réel. La distance n\'est pas un frein quand la méthodologie et les outils sont solides.',
    },
    {
      id: '2',
      question: 'Pouvez-vous travailler sur le marché espagnol et catalan ?',
      answer: 'Oui, la position transfrontalière de Perpignan rend le SEO multilingue stratégique. Nous optimisons votre visibilité en français, espagnol et catalan pour capter le trafic des deux côtés des Pyrénées. Cela inclut l\'adaptation des contenus aux spécificités linguistiques de chaque marché, le ciblage géographique et la gestion des versions multilingues de votre site.',
    },
    {
      id: '3',
      question: 'Qu\'est-ce que le GEO et en quoi ça concerne Perpignan ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou Google AI Overviews. Quand un importateur espagnol demande à une IA « meilleur transitaire fruits et légumes Perpignan » ou qu\'un touriste cherche « que faire à Collioure ce week-end », vous voulez être recommandé. Le GEO positionne votre entreprise dans ces nouvelles réponses conversationnelles.',
    },
    {
      id: '4',
      question: 'Quels secteurs accompagnez-vous dans les Pyrénées-Orientales ?',
      answer: 'Logistique et commerce de fruits et légumes (Saint-Charles International), tourisme balnéaire et montagnard (Côte Vermeille, Pyrénées catalanes), viticulture roussillonnaise, commerces locaux, services professionnels. Nous adaptons notre stratégie aux spécificités de chaque secteur, en intégrant les dynamiques transfrontalières propres au territoire.',
    },
    {
      id: '5',
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer: 'En SEO, comptez entre 3 et 6 mois pour des résultats mesurables, selon votre point de départ et la concurrence sur votre marché. Le GEO peut produire des effets plus rapides quand les contenus sont correctement structurés. On vous donne des projections réalistes dès le départ et vous suivez l\'avancement via votre tableau de bord Rankwell One.',
    },
    {
      id: '6',
      question: 'Le SEO est-il rentable pour une entreprise de taille modeste à Perpignan ?',
      answer: 'Oui, et souvent davantage que pour les grandes entreprises. Sur des marchés locaux comme Perpignan, la concurrence SEO est moins intense que sur les marchés nationaux. Cela signifie qu\'un investissement raisonnable peut produire des résultats significatifs plus rapidement. L\'important est de cibler les bonnes requêtes : celles qui génèrent des clients, pas du trafic inutile.',
    },
    {
      id: '7',
      question: 'Comment fonctionne votre tarification ?',
      answer: 'Les tarifs dépendent de vos objectifs, de la complexité de votre marché et du périmètre linguistique (français seul ou multilingue). Nous proposons des forfaits mensuels pour l\'accompagnement continu ou des missions ponctuelles pour les audits et refontes. Premier échange gratuit de 30 minutes pour comprendre votre situation et vous donner une estimation claire.',
    },
    {
      id: '8',
      question: 'Saint-Charles International est un marché très spécifique. Comprenez-vous ce secteur ?',
      answer: 'Notre approche business centrix implique de comprendre en profondeur le métier de chaque client avant de définir la stratégie. Pour le secteur logistique fruits et légumes, cela signifie maîtriser les cycles saisonniers, les flux d\'importation Espagne-Maroc, les requêtes B2B des acheteurs professionnels. On investit le temps nécessaire dans la compréhension de votre marché.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Perpignan ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise perpignanaise vers de nouveaux horizons.',
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
    { label: 'Occitanie', href: '/agence-geo-seo/france/occitanie' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Barcelone', href: '/agence-geo-seo/espagne/barcelone' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
