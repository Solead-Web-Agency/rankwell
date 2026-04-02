/**
 * DATA FR - Agence GEO & SEO à Biarritz
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Biarritz - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Biarritz. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché de la côte basque.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Biarritz' },
  ],
  badge: 'biarritz',
  title: 'Agence GEO & SEO à Biarritz',
  description:
    'Station balnéaire de renommée internationale et capitale européenne du surf, Biarritz attire une clientèle premium du monde entier. Notre agence accompagne les entreprises biarrotes dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Biarritz',
  accentColor: 'rw-blue' as const,
  title: 'Brillez sur les moteurs de recherche à Biarritz',
  paragraphs: [
    'Biarritz incarne l\'élégance et le dynamisme de la côte basque, attirant une clientèle internationale exigeante toute l\'année. Cette notoriété exceptionnelle génère une concurrence digitale intense où seules les entreprises bien référencées captent l\'attention.',
    'Notre approche combine le SEO traditionnel avec le GEO (Generative Engine Optimization), l\'optimisation pour les moteurs propulsés par l\'IA. Vous serez ainsi visible sur Google et recommandé par ChatGPT, Perplexity ou Google SGE.',
    'De la Grande Plage au quartier du Port Vieux, des établissements de thalassothérapie aux écoles de surf, nous calibrons nos stratégies pour toucher une clientèle haut de gamme, française et internationale.',
  ],
  tocItems: [
    { id: 'recap', label: 'En bref' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO' },
    { id: 'approche', label: 'Notre approche' },
    { id: 'pour-qui', label: 'Pour qui ?' },
    { id: 'expertises', label: 'Nos expertises' },
    { id: 'process', label: 'Notre process' },
    { id: 'faq', label: 'FAQ' },
  ],
};

// ============================================
// RECAP BOX DATA
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'L\'essentiel de notre service GEO & SEO à Biarritz',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché premium biarrot',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie haut de gamme, thalasso, surf et services premium',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle qualifiée et réservations directes',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Stratégie premium, contenu d\'excellence et suivi des performances',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION DATA
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  title: 'Le GEO : visibilité IA pour Biarritz',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle haut de gamme à Biarritz',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un voyageur demande « meilleur hôtel thalasso à Biarritz », le GEO garantit que votre établissement soit la source recommandée, pas juste un lien parmi d\'autres.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO est crucial à Biarritz ?',
      description:
        'La clientèle internationale qui visite Biarritz utilise massivement l\'IA pour planifier voyages et expériences haut de gamme. 1,5 million de visiteurs par an préparent leur séjour en ligne. Être recommandé par les assistants IA devient un facteur différenciant décisif sur ce marché où la concurrence digitale est féroce.',
    },
    {
      icon: 'BarChart3',
      title: 'Alliance SEO + GEO',
      description:
        'Le SEO assure vos positions sur les liens bleus de Google, le GEO vous fait citer dans les réponses conversationnelles des IA. La combinaison de ces deux approches couvre l\'intégralité des comportements de recherche de votre clientèle, du voyageur qui tape un mot-clé à celui qui pose une question à ChatGPT.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu premium pour l\'IA',
      description:
        'Les moteurs génératifs privilégient le contenu expert, authentique et structuré. Nos équipes créent des contenus qui reflètent l\'excellence de Biarritz — guides d\'expérience, descriptions détaillées, données chiffrées — formatés pour être facilement extraits et cités par les IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique biarrot',
  text: 'Biarritz et le Pays Basque nord génèrent 1,3 milliard d\'euros de retombées touristiques annuelles. La ville compte environ 26 700 habitants mais accueille plus d\'1,5 million de visiteurs par an. Le tourisme représente plus de 25 000 emplois dans la région, soit 10 % de la population active. Avec un revenu médian supérieur à la moyenne nationale (26 495 € contre 20 590 €), le tissu économique biarrot mêle hôtellerie haut de gamme, surf, thalassothérapie et services premium.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie d\'excellence pour le marché biarrot',
  subtitle:
    'Notre expertise du luxe et du tourisme haut de gamme nous permet de déployer des stratégies adaptées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché premium',
      description:
        'Nous cartographions la concurrence digitale sur la côte basque, analysons les requêtes à haute valeur de la clientèle internationale et identifions les opportunités de positionnement sur les thématiques luxe, surf et bien-être qui définissent Biarritz.',
    },
    {
      icon: 'FileText',
      title: 'Contenu d\'exception',
      description:
        'Production de contenus éditoriaux reflétant l\'excellence de Biarritz et du Pays Basque. Storytelling premium, guides d\'expérience et pages de destination pensés pour séduire une clientèle exigeante tout en répondant aux critères des moteurs IA.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique irréprochable',
      description:
        'Performance de chargement exemplaire, expérience mobile fluide pour les visiteurs en déplacement, balisage Schema.org pour les établissements locaux et architecture technique sans compromis. Chaque milliseconde gagnée compte sur un marché premium.',
    },
    {
      icon: 'Award',
      title: 'Autorité et prestige digital',
      description:
        'Stratégie de netlinking ciblant les médias de voyage internationaux, les publications basques de référence et les guides touristiques influents. Nous construisons une empreinte digitale qui renforce votre crédibilité auprès de Google et des moteurs IA.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour vous ?',
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises sur la côte basque. Voici les situations où nous pouvons réellement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter la clientèle internationale',
      description: 'Votre établissement attire déjà des visiteurs du monde entier, mais votre visibilité en ligne ne reflète pas votre standing. Vous cherchez un partenaire capable d\'optimiser votre présence sur Google et les moteurs IA en français, anglais et espagnol.',
    },
    {
      label: 'Vous préparez une saison ou un lancement',
      description: 'Vous ouvrez un nouvel établissement ou préparez la haute saison sur la côte basque. Vous voulez partir sur des bases SEO et GEO solides pour maximiser les réservations directes dès le départ, sans dépendre uniquement des plateformes.',
    },
    {
      label: 'Hôtellerie, thalasso et bien-être',
      description: 'Hôtels de charme, centres de thalassothérapie, spas et établissements de bien-être à Biarritz. Le marché premium du Pays Basque exige une stratégie digitale qui reflète votre positionnement haut de gamme et capte les recherches à forte intention.',
    },
    {
      label: 'Surf, glisse et tourisme actif',
      description: 'Écoles de surf, shops, prestataires d\'activités nautiques et acteurs du tourisme sportif. Biarritz est la capitale européenne du surf : votre visibilité en ligne doit être à la hauteur de cette réputation pour capter une clientèle internationale et passionnée.',
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
  title: 'Nos services GEO & SEO à Biarritz',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité et les leviers concrets pour l\'accélérer sur le marché biarrot.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage structuré et performance technique. Les fondations d\'un référencement durable adapté aux exigences du marché premium.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs auprès de médias de voyage, guides touristiques et publications basques. Une stratégie sur mesure, sans spam ni réseaux douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui positionnent votre expertise et attirent votre audience cible. Du contenu premium qui convertit, pas du remplissage.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// CHIFFRES DATA
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
// PROCESS DATA
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Notre process',
  title: 'Comment nous travaillons ensemble',
  subtitle:
    'Une méthodologie d\'excellence pour des résultats à la hauteur de Biarritz',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel et identification des opportunités sur le marché premium.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action aligné avec les codes du luxe et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations et création de contenus premium.',
    },
    {
      number: 4,
      title: 'Mesure & Excellence',
      description:
        'Suivi des KPIs et optimisations continues pour maintenir l\'excellence.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Biarritz ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"cours surf Biarritz"', '"où apprendre le surf à Biarritz ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Premium, expert, authentique'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et excellence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'The future of search is search experience optimization — understanding which platform each query belongs to and meeting users where they actually search.',
  author: 'Britney Muller',
  role: 'Ex-Senior SEO Scientist chez Moz, AI Educator',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Biarritz',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Travaillez-vous avec des entreprises à Biarritz sans être sur place ?',
      answer:
        'Oui, nous accompagnons des entreprises sur la côte basque depuis plusieurs années en collaboration à distance. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. La distance n\'est pas un frein : ce qui compte, c\'est la compétence et la réactivité, pas l\'adresse postale.',
    },
    {
      id: '2',
      question: 'Pourquoi le SEO est-il particulièrement important à Biarritz ?',
      answer:
        'Biarritz accueille plus d\'1,5 million de visiteurs par an et le tourisme génère 1,3 milliard d\'euros de retombées au Pays Basque. La concurrence digitale y est intense, notamment sur les requêtes liées à l\'hôtellerie, au surf et à la thalassothérapie. Un référencement efficace vous permet de capter ces recherches à haute valeur ajoutée et de vous différencier face aux plateformes de réservation.',
    },
    {
      id: '3',
      question: 'Comment le GEO aide-t-il à toucher la clientèle haut de gamme ?',
      answer:
        'La clientèle premium prépare de plus en plus ses séjours via les assistants IA. Quand un voyageur demande à ChatGPT « où séjourner à Biarritz pour un week-end thalasso », il attend une recommandation directe, pas une liste de liens. Le GEO positionne votre établissement comme la source de référence que l\'IA choisit de mentionner, créant un avantage concurrentiel difficile à répliquer.',
    },
    {
      id: '4',
      question: 'Quels secteurs accompagnez-vous sur la côte basque ?',
      answer:
        'Nous travaillons avec tous les secteurs présents à Biarritz : hôtellerie et thalassothérapie, écoles de surf et sports nautiques, gastronomie basque, immobilier de prestige, location saisonnière, commerces haut de gamme et services aux entreprises. Le point commun : des entreprises qui veulent générer du business via le Search, pas juste du trafic sans conversion.',
    },
    {
      id: '5',
      question: 'Optimisez-vous la visibilité en plusieurs langues ?',
      answer:
        'Oui, c\'est même une spécificité essentielle pour le marché biarrot. Nous optimisons votre présence en français, anglais et espagnol pour capter la clientèle internationale de la côte basque. Le GEO multilingue est particulièrement efficace car les assistants IA répondent dans la langue de l\'utilisateur et puisent dans des sources de toutes les langues.',
    },
    {
      id: '6',
      question: 'Couvrez-vous toute la côte basque ou uniquement Biarritz ?',
      answer:
        'Nous accompagnons les entreprises de tout le BAB (Bayonne-Anglet-Biarritz) et au-delà : Saint-Jean-de-Luz, Hendaye, Bidart, Guéthary. La stratégie SEO et GEO s\'adapte à votre zone de chalandise réelle. Pour un hôtel de Biarritz, on ciblera les requêtes internationales. Pour un artisan de Bayonne, on travaillera le référencement local et les requêtes de proximité.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs arrivent généralement entre 3 et 6 mois selon votre point de départ et le niveau de concurrence. Le GEO peut montrer des effets plus rapides sur certaines requêtes conversationnelles. Nous vous donnons des projections réalistes dès le départ, avec des indicateurs de progression visibles dès le premier mois via Rankwell One.',
    },
    {
      id: '8',
      question: 'Comment mesurez-vous concrètement les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour monitorer vos citations dans les réponses de ChatGPT, Perplexity et les AI Overviews de Google. Nous mesurons la fréquence de mention, la qualité du contexte dans lequel vous êtes cité et l\'impact sur votre trafic et vos conversions. Tout est accessible en temps réel via notre plateforme Rankwell One, pas dans un PDF mensuel.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à briller à Biarritz ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne de la côte basque.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Nouvelle-Aquitaine', href: '/agence-geo-seo/france/nouvelle-aquitaine' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
  ],
};
