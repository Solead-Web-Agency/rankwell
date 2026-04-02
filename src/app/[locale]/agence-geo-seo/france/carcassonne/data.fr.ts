/**
 * DATA FR - Agence GEO & SEO à Carcassonne
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Carcassonne | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Carcassonne. Boostez votre visibilité sur les moteurs IA et traditionnels dans la cité médiévale classée UNESCO.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Carcassonne' },
  ],
  badge: 'carcassonne',
  title: 'Agence GEO & SEO à Carcassonne',
  description:
    'Propulsez la visibilité en ligne de votre entreprise carcassonnaise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées au patrimoine exceptionnel et au tourisme de la cité médiévale.',
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
  badge: 'Votre partenaire digital à Carcassonne',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises carcassonnaises',
  paragraphs: [
    "Carcassonne, joyau médiéval classé au patrimoine mondial de l'UNESCO, attire plus de 3 millions de visiteurs par an. Cette ville d'art et d'histoire conjugue un patrimoine exceptionnel et un dynamisme économique porté par le tourisme, l'agriculture et l'industrie.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence soutient les acteurs carcassonnais dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en captant le flux touristique international.",
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
  title: 'GEO & SEO à Carcassonne : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché carcassonnais.',
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
      title: 'Focus touristique',
      description: 'Stratégies calibrées pour capter les visiteurs de la cité médiévale.',
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
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise carcassonnaise.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à faire apparaître vos contenus dans les réponses des moteurs IA : ChatGPT, Perplexity, Google AI Overviews. Pour une entreprise carcassonnaise, c\'est la possibilité d\'être recommandé quand un touriste demande à une IA « que visiter à Carcassonne » ou quand un acheteur cherche « meilleur vin du Languedoc ».',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les moteurs IA privilégient les contenus qu\'ils peuvent extraire et attribuer facilement : définitions précises, listes structurées, données chiffrées avec sources. Pour un domaine viticole ou un hôtel près de la Cité, nous créons des contenus que les algorithmes génératifs identifient comme des sources fiables et dignes d\'être citées dans leurs réponses.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les LLMs évaluent si votre site fait autorité sur son sujet. Un restaurant gastronomique de Carcassonne doit démontrer une expertise culinaire cohérente, pas seulement publier un menu en ligne. La profondeur du contenu, sa cohérence thématique et son maillage sémantique sont les critères que les IA utilisent pour décider de vous recommander ou non.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les IA croisent de multiples sources pour valider votre crédibilité avant de vous citer. Articles de presse locale (L\'Indépendant, Midi Libre), guides touristiques en ligne, avis vérifiés, annuaires institutionnels de l\'Aude : chaque mention positive renforce votre profil de confiance auprès des algorithmes génératifs et augmente vos chances de recommandation.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique carcassonnais',
  text: 'Carcassonne Agglo compte 44 691 emplois et 1 627 entreprises créées en 2024. Le territoire possède deux sites classés UNESCO (la Cité médiévale et le Canal du Midi) qui attirent plus de 3 millions de visiteurs par an. Le tourisme génère 1,2 milliard d\'euros de chiffre d\'affaires annuel dans l\'Aude et représente 15 à 17 % de l\'emploi salarié départemental. La viticulture occupe la moitié des espaces agricoles, avec 1 448 exploitations dont 309 en agriculture biologique.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Carcassonne',
  subtitle:
    'Notre démarche intègre les particularités du marché carcassonnais pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Ranker sur « Cité de Carcassonne » sans que ça génère des réservations ou des ventes, c\'est du gaspillage. Notre métrique principale, c\'est l\'impact sur votre chiffre d\'affaires : réservations directes, demandes de devis, ventes en ligne. Chaque action SEO ou GEO est évaluée par son retour business.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Miser uniquement sur les requêtes touristiques génériques quand votre clientèle est locale, c\'est une erreur fréquente. Notre job inclut de recadrer la stratégie pour qu\'elle serve vos vrais objectifs commerciaux. Un partenaire qui acquiesce sans réfléchir ne vous fait pas avancer.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui pense votre stratégie est la même qui la met en œuvre. Pas de sous-traitance, pas d\'intermédiaire. Votre consultant comprend les dynamiques touristiques et viticoles de l\'Aude et reste votre point de contact unique, joignable en visio, email ou téléphone.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos résultats commerciaux. Positions Google, citations par les IA, trafic qualifié, conversions : tout est visible en temps réel. Vous prenez des décisions informées, pas basées sur des impressions ou un rapport mensuel déjà obsolète.',
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
      label: 'Vous voulez transformer votre visibilité en réservations',
      description: 'Votre établissement existe en ligne mais les réservations directes restent insuffisantes face aux plateformes intermédiaires. Vous cherchez un partenaire pour reprendre le contrôle de votre acquisition et réduire votre dépendance aux OTA et comparateurs.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque votre croissance digitale',
      description: 'Votre SEO stagne malgré vos efforts ou ceux de votre prestataire actuel. Vous avez besoin d\'un audit objectif qui identifie les vrais problèmes, hiérarchise les priorités et propose un plan d\'action concret avec des résultats mesurables.',
    },
    {
      label: 'Tourisme et hôtellerie-restauration dans l\'Aude',
      description: 'Hôtels, chambres d\'hôtes, restaurants, guides touristiques : avec 3 millions de visiteurs annuels à la Cité et le Canal du Midi classé UNESCO, capter ce flux en ligne est vital. Les touristes préparent leur séjour via Google et les IA, et c\'est là que vous devez être visible.',
    },
    {
      label: 'Viticulture et terroir audois',
      description: 'Domaines viticoles, caves coopératives, producteurs bio de l\'Aude : avec 1 448 exploitations agricoles et une montée en puissance du bio (309 producteurs certifiés), la différenciation digitale devient un levier de commercialisation essentiel face à une offre abondante.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise Search, la méthodologie et la capacité à mesurer l\'impact réel sur votre activité. Un partenaire distant mais compétent surpasse un prestataire local aux méthodes obsolètes.',
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
  title: 'Nos services GEO & SEO à Carcassonne',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On évalue votre positionnement face aux acteurs touristiques et viticoles de l\'Aude, et on identifie les leviers de croissance prioritaires.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Architecture de contenu, balisage Schema.org, performance technique. Les fondations d\'un référencement durable qui résiste aux mises à jour algorithmiques et positionne votre expertise audoise.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs auprès de médias, guides touristiques et sites institutionnels. Une stratégie de backlinks qui renforce votre autorité sans recourir au spam ou aux réseaux factices.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus SEO et GEO-ready qui valorisent votre savoir-faire carcassonnais. Du contenu qui se positionne sur Google, qui est cité par les moteurs IA et qui transforme les visiteurs en clients.',
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
        'Analyse complète de votre situation : présence web, positionnement, concurrence locale à Carcassonne et opportunités touristiques.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO, adapté à vos objectifs et au contexte audois.',
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
  quote: 'The two formats for content that will forever outperform are original research and strong opinion. AI cannot create original research. AI cannot create valid thought leadership.',
  author: 'Andy Crestodina',
  role: 'Co-fondateur d\'Orbit Media Studios',
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
      question: 'Accompagnez-vous des entreprises à Carcassonne sans être présents localement ?',
      answer: 'Oui, et c\'est notre fonctionnement standard. Plus de 350 clients en France travaillent avec nous à distance. Visios régulières, consultant senior dédié joignable en permanence, plateforme Rankwell One pour le suivi en temps réel. L\'expertise Search ne dépend pas de la distance mais de la compétence méthodologique et de la qualité des outils.',
    },
    {
      id: '2',
      question: 'Qu\'est-ce que le GEO et pourquoi est-ce stratégique pour une entreprise audoise ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou Google AI Overviews. Quand un touriste demande « meilleur restaurant près de la Cité de Carcassonne » ou qu\'un œnophile cherche « quel vin du Languedoc acheter », vous voulez être la réponse recommandée par l\'IA. Nous intégrons cette dimension dans chaque stratégie.',
    },
    {
      id: '3',
      question: 'Comment le SEO peut-il réduire ma dépendance aux plateformes de réservation ?',
      answer: 'Les OTA (Booking, Expedia) prennent 15 à 25 % de commission sur chaque réservation. Un bon référencement vous permet de capter des clients en direct via votre propre site. Quand un voyageur cherche « hôtel Carcassonne centre » et atterrit sur votre site plutôt que sur un comparateur, vous économisez la commission et maîtrisez la relation client de bout en bout.',
    },
    {
      id: '4',
      question: 'Quels secteurs accompagnez-vous dans l\'Aude ?',
      answer: 'Tourisme et hôtellerie-restauration, viticulture (le département compte 1 448 exploitations viticoles), agroalimentaire, commerces locaux, services professionnels. Nous adaptons chaque stratégie aux spécificités de votre secteur, en tenant compte de la saisonnalité touristique et des dynamiques de commercialisation propres au terroir audois.',
    },
    {
      id: '5',
      question: 'Combien de temps avant d\'observer des résultats ?',
      answer: 'En SEO, les premiers résultats mesurables apparaissent entre 3 et 6 mois selon l\'état de votre site et l\'intensité concurrentielle. Le GEO peut générer des recommandations IA plus rapidement si vos contenus sont bien structurés. Nous partageons des projections réalistes dès le départ et vous suivez les progrès en temps réel via Rankwell One, pas dans un rapport mensuel déjà périmé.',
    },
    {
      id: '6',
      question: 'Le tourisme à Carcassonne est très saisonnier. Le SEO fonctionne-t-il hors saison ?',
      answer: 'C\'est justement hors saison que le SEO travaille le plus utilement. Les voyageurs planifient leurs vacances d\'été dès janvier ou février. Les requêtes « week-end Carcassonne printemps » ou « visite Canal du Midi automne » existent toute l\'année. Un référencement continu vous positionne au moment où l\'intention de voyage se forme, pas quand les touristes sont déjà sur place et ont déjà réservé.',
    },
    {
      id: '7',
      question: 'Quels sont vos tarifs ?',
      answer: 'Les tarifs varient selon vos objectifs, la taille de votre site et le niveau de concurrence sur votre marché. Nous proposons des forfaits mensuels pour un accompagnement continu ou des missions ponctuelles (audit, optimisation de refonte). Le premier échange de 30 minutes est gratuit et sans engagement, pour comprendre votre situation et vous donner une estimation transparente.',
    },
    {
      id: '8',
      question: 'Comment un domaine viticole peut-il tirer parti du GEO ?',
      answer: 'Les amateurs de vin utilisent de plus en plus les IA pour découvrir des domaines et planifier des dégustations. Quand quelqu\'un demande à ChatGPT « quels vins du Languedoc goûter » ou « domaine viticole bio Carcassonne », votre domaine doit apparaître dans la réponse. Nous structurons vos contenus pour que les IA identifient votre expertise œnologique et vous recommandent naturellement.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Carcassonne ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise carcassonnaise vers de nouveaux horizons.',
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
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
