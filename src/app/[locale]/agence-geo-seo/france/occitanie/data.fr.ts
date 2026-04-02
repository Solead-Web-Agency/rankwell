/**
 * DATA FR - Agence GEO & SEO en Occitanie
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Occitanie | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO en Occitanie. Optimisez votre visibilité sur les moteurs IA et traditionnels de Toulouse à Montpellier.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Occitanie' },
  ],
  badge: 'occitanie',
  title: 'Agence GEO & SEO en Occitanie',
  description:
    'Développez la visibilité digitale de votre entreprise occitane avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. De Toulouse à Montpellier, des solutions adaptées à votre territoire.',
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
  badge: 'Votre partenaire digital en Occitanie',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises occitanes',
  paragraphs: [
    "L'Occitanie, née de la fusion de Midi-Pyrénées et Languedoc-Roussillon, constitue une région d'exception où l'innovation côtoie un patrimoine culturel millénaire. De la capitale aéronautique toulousaine aux plages méditerranéennes, le territoire concentre une diversité économique remarquable.",
    "Le GEO (Generative Engine Optimization) représente le nouveau chapitre du référencement, ciblant les moteurs de recherche propulsés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double compétence assure une présence optimale sur l'ensemble des canaux de recherche.",
    "Notre agence accompagne les entreprises occitanes dans leur transformation numérique, en développant des stratégies personnalisées qui valorisent les spécificités régionales tout en maximisant leur portée nationale et internationale.",
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
  title: 'GEO & SEO en Occitanie : les fondamentaux',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché occitan.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Positionnement dans les réponses générées par les assistants IA nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Consolidation des positions sur Google et les moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Ancrage régional',
      description: 'Stratégies adaptées aux bassins économiques occitans de Toulouse à Perpignan.',
    },
    {
      icon: 'TrendingUp',
      title: 'Croissance mesurable',
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
  title: 'L\'optimisation pour les moteurs IA expliquée',
  subtitle:
    'Le GEO redéfinit les règles du référencement. Découvrez comment cette discipline fonctionne et ce qu\'elle peut apporter à votre entreprise occitane.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google AI Overviews synthétisent des informations issues de multiples sources pour formuler des réponses complètes. Pour une entreprise aéronautique toulousaine ou une startup montpelliéraine, être reconnu comme source fiable par ces moteurs devient un avantage concurrentiel majeur.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et experts',
      description:
        'Les systèmes IA privilégient les contenus organisés, sourcés et démontrant une expertise sectorielle réelle. Définitions précises, données chiffrées, listes structurées : la sémantique de vos pages influence directement votre capacité à être cité dans les réponses génératives.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance',
      description:
        'Les LLMs évaluent votre crédibilité via un réseau de mentions : articles de presse, études sectorielles, forums spécialisés. Citations, backlinks pertinents et mentions de marque renforcent la confiance perçue par les moteurs IA et augmentent vos chances d\'être recommandé.',
    },
    {
      icon: 'ChartLine',
      title: 'Performance mesurable',
      description:
        'Des outils spécialisés permettent de suivre votre présence dans les réponses IA, d\'identifier les requêtes pour lesquelles vous êtes cité et d\'ajuster la stratégie en continu. On mesure les citations IA au même titre que les positions Google.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique occitan',
  text: 'L\'Occitanie compte 6,2 millions d\'habitants et constitue la 2e région française par sa superficie. La filière aéronautique et spatiale, portée par Airbus à Toulouse, a progressé de 7 % en 2024. La région accueille plus de 1 000 startups et 150 000 emplois dans le numérique, avec 432 millions d\'euros levés par les startups occitanes en 2024. Un tissu économique dense où la visibilité digitale est un levier de croissance décisif.',
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour l\'Occitanie',
  subtitle:
    'Notre démarche intègre les particularités du marché occitan pour déployer des stratégies véritablement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Être premier sur un mot-clé qui ne génère pas de business, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées, coût d\'acquisition. Que vous soyez un sous-traitant aéronautique toulousain ou un éditeur SaaS montpelliérain.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre job, c\'est aussi de vous dire quand une stratégie fait fausse route. Un partenaire qui dit oui à tout n\'est pas un partenaire. On préfère la franchise à la complaisance.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'La personne qui réfléchit à votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire, pas de junior sur votre dossier. Vous avez un interlocuteur unique qui connaît les spécificités du marché occitan et le détail de votre projet.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme connecte vos données Search à vos données business. Vous suivez l\'impact réel en temps réel : positions Google, citations IA, conversions. Pas des vanity metrics dans un rapport mensuel, mais de la donnée actionnable.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises en Occitanie. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de leads ou de ventes. Vous cherchez un partenaire pour structurer et exécuter une stratégie Search qui produit des résultats concrets, mesurables en conversions.',
    },
    {
      label: 'Vous préparez une refonte ou un lancement',
      description: 'Vous lancez un nouveau site ou migrez l\'existant et voulez partir sur de bonnes bases SEO et GEO. L\'optimisation dès la conception évite les corrections coûteuses après coup et accélère la montée en visibilité.',
    },
    {
      label: 'Aéronautique, spatial et industries de pointe',
      description: 'L\'Occitanie concentre 800 entreprises dans la filière aérospatiale autour de Toulouse. Face à une concurrence B2B internationale, une stratégie Search solide vous positionne comme référence sectorielle sur Google et auprès des IA.',
    },
    {
      label: 'Startups tech et santé numérique',
      description: 'Avec 432 millions d\'euros levés en 2024 et des pôles santé-biotech en forte croissance, l\'écosystème startup occitan est dense. Se différencier en ligne dès les premiers mois d\'activité est un levier de croissance essentiel.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes dépassées. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats démontrables.',
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
  title: 'Nos services GEO & SEO en Occitanie',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel. On identifie ce qui freine votre visibilité et ce qui peut l\'accélérer, avec des priorités classées par impact business.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, performance technique. Les fondations d\'un référencement durable qui résiste aux mises à jour algorithmiques.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs pour construire votre autorité. Une stratégie sur mesure, sans spam ni réseaux douteux. Des liens qui renforcent aussi votre crédibilité auprès des IA.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready. Du contenu structuré, sourcé, qui se positionne sur Google et que les moteurs IA choisissent de citer. Pas du remplissage.',
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
  subtitle: 'Une approche structurée en quatre phases pour garantir des résultats concrets et durables.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Audit initial',
      description:
        'Analyse complète de votre situation actuelle : présence web, positionnement, concurrence régionale et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Définition de la stratégie',
      description:
        'Élaboration d\'un plan d\'action personnalisé combinant SEO et GEO, adapté à vos objectifs et au contexte occitan.',
    },
    {
      number: 3,
      title: 'Déploiement',
      description:
        'Mise en œuvre des optimisations techniques et éditoriales, création de contenus et développement de votre autorité en ligne.',
    },
    {
      number: 4,
      title: 'Suivi et amélioration',
      description:
        'Monitoring permanent des indicateurs de performance, ajustements réguliers et reporting transparent sur les avancées.',
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
    'Comprenez les spécificités de chaque approche pour mieux appréhender notre stratégie intégrée.',
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
  quote:
    'Every pixel on your site matters, and it\'s how you\'ll stand a chance against digital goliaths.',
  author: 'Glen Allsopp',
  role: 'Fondateur de Detailed.com',
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
      question: 'Travaillez-vous avec des entreprises en Occitanie ?',
      answer:
        'Oui, nous accompagnons des entreprises sur tout le territoire occitan depuis plusieurs années. Visios régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La distance n\'est pas un obstacle : notre modèle de collaboration à distance est éprouvé avec des clients dans toute la France.',
    },
    {
      id: '2',
      question: 'Quels secteurs accompagnez-vous en Occitanie ?',
      answer:
        'Nous travaillons avec des entreprises de tous secteurs : aéronautique et spatial (la filière historique de Toulouse), santé-biotech (un secteur en forte croissance avec 127 millions d\'euros levés en 2024), startups tech, e-commerce, tourisme, viticulture. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic.',
    },
    {
      id: '3',
      question: 'Qu\'est-ce que le GEO exactement ?',
      answer:
        'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. L\'objectif : que vos contenus soient cités par ces IA quand on leur pose des questions liées à votre expertise. C\'est complémentaire au SEO classique, et on l\'intègre dans tous nos projets dès le départ.',
    },
    {
      id: '4',
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        'En SEO, les premiers résultats significatifs arrivent généralement entre 3 et 6 mois selon la concurrence et votre point de départ. En GEO, l\'intégration dans les réponses IA peut être plus rapide si vos contenus sont bien structurés. On vous donne des projections réalistes dès le premier échange, avec des jalons clairs pour mesurer la progression.',
    },
    {
      id: '5',
      question: 'Pourquoi choisir une agence nationale plutôt qu\'une agence locale ?',
      answer:
        'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise méthodologique, la connaissance des algorithmes et la capacité à produire des résultats. Nos consultants seniors ont une vision nationale du marché Search, enrichie par 8 ans d\'expérience et plus de 350 clients accompagnés dans des secteurs très variés.',
    },
    {
      id: '6',
      question: 'Comment se déroule la collaboration au quotidien ?',
      answer:
        'Premier échange en visio pour comprendre vos enjeux. Audit complet de votre situation. Roadmap avec priorités claires. Puis exécution avec un consultant senior dédié et des points réguliers. Vous suivez l\'avancement en temps réel via Rankwell One, notre plateforme qui connecte données Search et données business.',
    },
    {
      id: '7',
      question: 'Le GEO est-il pertinent pour une entreprise B2B en Occitanie ?',
      answer:
        'Absolument. Les acheteurs B2B, y compris dans l\'aéronautique et l\'industrie, utilisent de plus en plus les IA pour qualifier des fournisseurs et comparer des solutions. Être cité par ChatGPT ou Perplexity quand un prospect recherche un prestataire dans votre domaine, c\'est un avantage compétitif concret qui se traduit en prises de contact qualifiées.',
    },
    {
      id: '8',
      question: 'Quels sont vos tarifs ?',
      answer:
        'Les tarifs dépendent de vos objectifs, votre secteur et le niveau de concurrence. On travaille sur des forfaits mensuels ou des projets ponctuels comme des audits. Le plus simple : un premier échange de 30 minutes pour comprendre votre situation et vous donner une estimation réaliste. Sans engagement, sans surprise.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité en Occitanie ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise occitane vers de nouveaux sommets.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (MAILLAGE INTERNE)
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO en Occitanie',
  cities: [
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
