/**
 * DATA FR - Agence GEO & SEO à Toulouse
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Toulouse | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO à Toulouse. Optimisez votre visibilité sur les moteurs IA et traditionnels dans la Ville Rose.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Toulouse' },
  ],
  badge: 'toulouse',
  title: 'Agence GEO & SEO à Toulouse',
  description:
    'Propulsez la visibilité digitale de votre entreprise toulousaine avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des solutions taillées pour la capitale aéronautique européenne.',
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
  badge: 'Votre partenaire digital à Toulouse',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises toulousaines',
  paragraphs: [
    "Toulouse, la Ville Rose, rayonne bien au-delà de ses célèbres façades de brique. Capitale européenne de l'aéronautique avec Airbus, pôle spatial d'envergure mondiale et vivier de startups innovantes, la métropole occitane incarne le dynamisme économique du Sud-Ouest.",
    "Le GEO (Generative Engine Optimization) constitue le nouveau paradigme du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double maîtrise garantit une présence optimale sur tous les canaux de recherche.",
    "Notre agence accompagne les entreprises toulousaines dans leur expansion numérique, en déployant des stratégies personnalisées qui valorisent leur expertise tout en captant de nouvelles opportunités commerciales.",
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
  title: 'GEO & SEO à Toulouse : les points essentiels',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché toulousain.',
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
      title: 'Ancrage local',
      description: 'Stratégies calibrées pour le bassin économique toulousain et sa région.',
    },
    {
      icon: 'TrendingUp',
      title: 'Résultats tangibles',
      description: 'Augmentation mesurable du trafic qualifié et des opportunités commerciales.',
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
  title: 'L\'optimisation pour les moteurs IA décryptée',
  subtitle:
    'Le GEO redéfinit les codes du référencement. Découvrez son fonctionnement et ce qu\'il peut apporter à votre entreprise toulousaine.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      desc:
        'ChatGPT, Perplexity et Google SGE ne se contentent pas d\'afficher des liens : ils synthétisent l\'information de centaines de sources pour formuler une réponse unique. Être reconnu comme source fiable par ces systèmes devient un enjeu stratégique majeur pour toute entreprise toulousaine souhaitant capter la demande conversationnelle.',
    },
    {
      id: 2,
      icon: 'FileText',
      title: 'Contenus structurés et experts',
      desc:
        'Les moteurs génératifs privilégient les contenus bien organisés, sourcés et démontrant une expertise vérifiable. La structuration sémantique — titres hiérarchisés, données factuelles, citations d\'experts — conditionne directement votre visibilité dans les réponses IA et votre capacité à être recommandé plutôt que simplement indexé.',
    },
    {
      id: 3,
      icon: 'Award',
      title: 'Signaux de confiance',
      desc:
        'Citations dans des médias reconnus, backlinks depuis des sites d\'autorité et mentions régulières de votre marque forment un écosystème de crédibilité que les moteurs IA exploitent pour sélectionner leurs sources. Plus ces signaux sont cohérents et diversifiés, plus votre entreprise a de chances d\'apparaître dans les recommandations génératives.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Mesure de performance',
      desc:
        'Des outils spécialisés interrogent périodiquement les IA sur vos requêtes stratégiques pour mesurer votre part de voix, la fréquence de vos mentions et le contexte dans lequel vous êtes cité. Ces données permettent d\'ajuster la stratégie en continu et de démontrer un retour sur investissement concret, au-delà des métriques SEO classiques.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Toulouse est la 4e ville de France et la métropole la plus dynamique du pays en termes de croissance démographique. Avec plus de 120 000 emplois dans l'aéronautique et le spatial, c'est un carrefour économique majeur où la visibilité digitale est déterminante.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour Toulouse',
  subtitle:
    'Notre démarche intègre les particularités du marché toulousain pour déployer des stratégies véritablement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Nous cartographions votre environnement concurrentiel toulousain, identifions les requêtes à fort potentiel et détectons les lacunes de votre présence digitale actuelle. Chaque opportunité est quantifiée en volume de recherche et en potentiel business.',
      features: [
        'Audit de présence digitale',
        'Étude de la concurrence locale',
        'Analyse des recherches régionales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      id: 2,
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Nous créons des contenus qui démontrent votre expertise sectorielle, structurés pour satisfaire à la fois les algorithmes Google et les critères de sélection des moteurs IA. Chaque page est pensée pour convertir un visiteur en prospect qualifié.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Valorisation des savoir-faire locaux',
      ],
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Votre site doit être rapide, accessible et parfaitement compris par les robots d\'indexation. Nous intervenons sur la performance serveur, le balisage structuré Schema.org, l\'expérience mobile et la sécurité pour bâtir des fondations techniques solides.',
      features: [
        'Amélioration de la vitesse',
        'Balisage Schema.org',
        'Responsive et expérience utilisateur',
        'Sécurité et conformité',
      ],
    },
    {
      id: 4,
      icon: 'BarChart3',
      title: 'Pilotage et amélioration continue',
      description:
        'Nous mesurons chaque action avec des tableaux de bord en temps réel. Positions SEO, mentions GEO, trafic qualifié et conversions sont suivis mensuellement. Les ajustements stratégiques sont pilotés par la donnée, pas par l\'intuition.',
      features: [
        'Reporting mensuel personnalisé',
        'Suivi des positions SEO et GEO',
        'Analyse des conversions',
        'Recommandations d\'évolution',
      ],
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Les entreprises toulousaines que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises de la métropole toulousaine.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous cherchez une expertise GEO',
      description:
        'Vous avez compris que les moteurs IA bouleversent la recherche d\'information et vous voulez être parmi les premiers de votre secteur à Toulouse à apparaître dans les réponses de ChatGPT, Perplexity et Google SGE.',
    },
    {
      label: 'Votre SEO stagne malgré vos investissements',
      description:
        'Vous avez déjà investi en référencement mais les résultats plafonnent. Vous cherchez un regard neuf, une méthodologie data-driven et une double expertise SEO + GEO pour débloquer votre croissance organique sur le marché toulousain.',
    },
    {
      label: 'Aéronautique et sous-traitance',
      description:
        'Airbus, Safran, Latécoère et leurs 40 000 emplois directs structurent l\'économie toulousaine. Nous accompagnons les sous-traitants et équipementiers de la filière pour renforcer leur visibilité digitale auprès des donneurs d\'ordres.',
    },
    {
      label: 'Tech et innovation',
      description:
        'Toulouse est labellisée French Tech et abrite un écosystème de startups et scale-ups en forte croissance. Le GEO positionne votre solution dans les recommandations IA que consultent investisseurs, partenaires et early adopters.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est la méthodologie, la transparence des résultats et la capacité à comprendre votre marché. Nous travaillons avec des entreprises toulousaines depuis nos bureaux — et nos résultats parlent d\'eux-mêmes.',
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
  title: 'Nos services GEO & SEO à Toulouse',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. Nous identifions ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, performance technique. Les fondations d\'une visibilité durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens pensée pour renforcer votre autorité. Pas de spam, pas de réseaux douteux. De vrais liens qui comptent.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit. Pas du remplissage.',
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
        'Analyse complète de votre situation actuelle : présence web, positionnement, concurrence locale à Toulouse et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Élaboration de la stratégie',
      description:
        'Construction d\'un plan d\'action sur mesure combinant SEO et GEO, adapté à vos objectifs et au contexte toulousain.',
    },
    {
      number: 3,
      title: 'Mise en œuvre',
      description:
        'Déploiement des optimisations techniques et éditoriales, création de contenus et développement de votre autorité en ligne.',
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
    'Comprenez les spécificités de chaque approche pour mieux appréhender notre stratégie combinée.',
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
    'SEO is a marathon, not a sprint. The companies that win are those that commit to building authority over time.',
  author: 'Neil Patel',
  role: 'Entrepreneur & expert marketing digital',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Toulouse',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 'faq-1',
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO vise à positionner votre site dans les résultats classiques de Google et Bing via des liens bleus. Le GEO cible les moteurs IA — ChatGPT, Perplexity, Google SGE — qui génèrent des réponses synthétiques en citant leurs sources. Les deux disciplines sont complémentaires : le SEO assure un flux constant de trafic organique, le GEO vous positionne comme référence dans les réponses conversationnelles.',
    },
    {
      id: 'faq-2',
      question: 'Pourquoi une entreprise toulousaine doit-elle s\'intéresser au GEO ?',
      answer:
        'Toulouse est une métropole de 800 000 habitants avec un tissu économique tourné vers l\'innovation. Les décideurs de l\'aéronautique, du spatial et de la tech adoptent massivement les assistants IA dans leur veille et leurs recherches. Être présent dans ces réponses permet d\'atteindre de nouveaux prospects qualifiés et de consolider votre image d\'expert sur un marché local exigeant.',
    },
    {
      id: 'faq-3',
      question: 'Quels résultats peut-on attendre et sous quel délai ?',
      answer:
        'Les premiers effets SEO apparaissent généralement entre 3 et 6 mois, selon la compétitivité de votre secteur et l\'état technique de votre site. Le GEO peut produire des résultats plus rapides — parfois sous 4 à 8 semaines — car les moteurs génératifs réévaluent leurs sources en continu. Nous installons un tableau de bord dès le premier mois avec des indicateurs de progression concrets.',
    },
    {
      id: 'faq-4',
      question: 'Comment mesurez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous utilisons des outils spécialisés qui interrogent périodiquement ChatGPT, Perplexity et Google SGE sur les requêtes stratégiques de votre secteur à Toulouse. Nous analysons la fréquence de vos mentions, le contexte dans lequel vous êtes cité et votre part de voix face aux concurrents. Ces données sont restituées dans un reporting mensuel qui pilote les ajustements stratégiques.',
    },
    {
      id: 'faq-5',
      question: 'Faut-il privilégier le SEO ou le GEO pour une PME toulousaine ?',
      answer:
        'Nous préconisons une approche combinée. Le SEO construit un socle solide sur les moteurs traditionnels — trafic récurrent, positions durables, conversions mesurables. Le GEO prépare votre visibilité sur les plateformes IA en pleine expansion et capte une audience complémentaire. L\'un sans l\'autre laisse des opportunités commerciales sur la table, surtout sur un marché aussi concurrentiel que Toulouse.',
    },
    {
      id: 'faq-6',
      question: 'Proposez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous dispensons des formations adaptées à vos équipes pour qu\'elles comprennent les enjeux du GEO et sachent produire des contenus optimisés pour les moteurs IA. Ces sessions couvrent les critères de sélection des IA, la structuration sémantique, les signaux de confiance et les bonnes pratiques rédactionnelles. Un accompagnement opérationnel complète la formation.',
    },
    {
      id: 'faq-7',
      question: 'Comment le GEO profite-t-il aux entreprises de l\'aéronautique toulousaine ?',
      answer:
        'La filière aéronautique toulousaine — Airbus, Safran, Latécoère et leurs milliers de sous-traitants — fonctionne sur un marché B2B où la crédibilité est déterminante. Le GEO positionne votre entreprise comme référence sectorielle dans les réponses IA que consultent les donneurs d\'ordres, les acheteurs industriels et les partenaires potentiels, créant un avantage concurrentiel difficile à répliquer.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité à Toulouse ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise toulousaine vers de nouveaux sommets.',
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
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
