/**
 * DATA FR - Agence GEO & SEO à Cannes
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Cannes - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Cannes. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché cannois et azuréen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Cannes' },
  ],
  badge: 'cannes',
  title: 'Agence GEO & SEO à Cannes',
  description:
    'Capitale internationale du cinéma et du luxe, Cannes attire une clientèle haut de gamme du monde entier. Notre agence accompagne les entreprises cannoises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Cannes',
  accentColor: 'rw-blue' as const,
  title: 'Brillez sur les moteurs de recherche à Cannes',
  paragraphs: [
    'Cannes incarne le prestige et l\'excellence sur la scène internationale. Cette notoriété exceptionnelle génère une concurrence digitale intense où seules les entreprises les mieux référencées captent l\'attention des clients premium.',
    'Notre approche combine le SEO traditionnel avec le GEO (Generative Engine Optimization), l\'optimisation pour les moteurs propulsés par l\'IA. Vous serez ainsi visible sur Google et recommandé par ChatGPT, Perplexity ou Google SGE.',
    'De la Croisette au quartier du Suquet, des palaces aux boutiques de luxe, nous calibrons nos stratégies pour toucher une clientèle exigeante, française comme internationale.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Cannes',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché premium cannois',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Hôtellerie de luxe, commerces premium, événementiel et services haut de gamme',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Visibilité internationale, clientèle qualifiée et image de marque renforcée',
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
  title: 'Le GEO : visibilité IA pour le marché cannois',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle haut de gamme à Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs de recherche propulsés par l\'IA. Quand un client fortuné demande à ChatGPT « meilleur palace avec vue mer à Cannes », le GEO travaille pour que votre établissement soit la recommandation principale. Ce n\'est pas du SEO classique : c\'est l\'art de devenir la source que l\'IA choisit de citer.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO est crucial à Cannes ?',
      description:
        'La clientèle internationale de Cannes utilise massivement l\'IA pour planifier séjours de luxe, réserver des restaurants étoilés ou trouver un prestataire événementiel. Être recommandé par ChatGPT ou Perplexity quand un congressiste du MIPIM cherche un hôtel haut de gamme représente un avantage décisif que vos concurrents ne maîtrisent pas encore.',
    },
    {
      icon: 'BarChart3',
      title: 'Alliance SEO + GEO',
      description:
        'Le SEO assure vos positions sur les résultats classiques de Google, le GEO vous fait citer dans les réponses des IA conversationnelles. La combinaison de ces deux leviers couvre l\'intégralité des comportements de recherche de votre clientèle premium, que ce soit une requête tapée sur Google ou une question posée à un assistant IA.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu premium pour l\'IA',
      description:
        'Les moteurs génératifs privilégient le contenu expert, structuré et faisant autorité. Nos équipes produisent des contenus qui reflètent le prestige de votre établissement cannois tout en respectant les critères de citation des IA : données vérifiables, expertise démontrée, formulations que les algorithmes peuvent extraire et reformuler facilement.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique cannois',
  text: 'Le Palais des Festivals et des Congrès génère plus d\'un milliard d\'euros de retombées économiques annuelles avec 156 événements organisés sur 340 jours d\'activité. Premier centre de congrès de France en chiffre d\'affaires, devant Paris, Cannes accueille le MIPIM, Cannes Lions et le Festival qui attire à lui seul 40 000 accrédités de 160 pays. La concurrence digitale y est féroce.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie d\'excellence pour le marché cannois',
  subtitle:
    'Notre expertise du luxe nous permet de déployer des stratégies adaptées aux exigences de Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché premium',
      description:
        'Cartographie concurrentielle du marché cannois, analyse des requêtes à forte valeur formulées par la clientèle internationale et identification des opportunités de positionnement sur les thématiques luxe, événementiel et congrès. On ne cible pas le volume, on cible le business.',
    },
    {
      icon: 'FileText',
      title: 'Contenu d\'exception',
      description:
        'Production de contenus qui incarnent le prestige de Cannes et la singularité de votre établissement. Storytelling premium calibré pour une clientèle exigeante, optimisé pour être cité par les IA lorsqu\'elles recommandent les meilleures adresses de la Croisette.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique irréprochable',
      description:
        'Performance de chargement exemplaire, expérience mobile impeccable pour les visiteurs internationaux, données structurées Schema.org et architecture technique sans compromis. Un site premium doit offrir une expérience à la hauteur de la marque.',
    },
    {
      icon: 'Award',
      title: 'Autorité et prestige digital',
      description:
        'Stratégie de netlinking ciblant les médias de luxe, les guides de voyage haut de gamme et les publications azuréennes de référence. Chaque lien acquis renforce votre crédibilité aux yeux de Google et des IA qui évaluent votre légitimité sectorielle.',
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
  subtitle:
    'Notre expertise s\'adresse aux entreprises ambitieuses du marché cannois. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter la clientèle internationale',
      description:
        'Votre entreprise est présente à Cannes mais votre site ne convertit pas suffisamment les visiteurs étrangers. Vous avez besoin d\'une stratégie Search multilingue qui cible les requêtes à forte valeur ajoutée formulées par une clientèle premium.',
    },
    {
      label: 'Vous cherchez une visibilité IA pour le marché du luxe',
      description:
        'Les clients haut de gamme interrogent ChatGPT et Perplexity pour planifier séjours, achats et événements. Vous voulez une agence capable d\'optimiser votre présence sur ces nouveaux canaux, pas uniquement sur Google.',
    },
    {
      label: 'Hôtellerie de luxe et palaces',
      description:
        'Cannes accueille des palaces et hôtels 5 étoiles en compétition directe pour les réservations directes. Le référencement SEO et GEO réduit votre dépendance aux OTA et positionne votre établissement comme la référence citée par les assistants IA.',
    },
    {
      label: 'Événementiel, congrès et MICE',
      description:
        'Le Palais des Festivals génère plus d\'un milliard d\'euros de retombées annuelles. Organisateurs, traiteurs, prestataires MICE : capter les recherches liées aux 156 événements annuels de Cannes demande une stratégie Search dédiée et saisonnière.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'Le prestige d\'une adresse cannoise ne suffit pas en ligne. La visibilité digitale se construit avec méthode, pas avec un logo doré.',
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
  title: 'Nos services GEO & SEO à Cannes',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel du marché cannois. On identifie ce qui freine votre visibilité et les leviers à activer en priorité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu multilingue, balisage structuré et performance technique. Le socle d\'un référencement premium durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs depuis les médias luxe, guides de voyage et publications azuréennes. Pas de spam, une stratégie sur mesure.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus premium optimisés SEO et GEO-ready qui incarnent l\'excellence cannoise, se positionnent et convertissent une clientèle exigeante.',
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
    'Une méthodologie d\'excellence pour des résultats à la hauteur de Cannes',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence cannoise et identification des opportunités sur le marché premium.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO aligné avec les codes du luxe et les attentes de votre clientèle internationale.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus premium et développement de votre autorité.',
    },
    {
      number: 4,
      title: 'Mesure & Excellence',
      description:
        'Suivi des KPIs, reporting transparent et optimisations continues pour maintenir l\'excellence de vos performances.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Cannes ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"palace vue mer Cannes"', '"quel est le meilleur palace à Cannes ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Premium, expert, prestigieux'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et excellence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'I think they are important, but I think people overestimate the importance of links. It hasn\'t been in the top three for some time.',
  author: 'Gary Illyes',
  role: 'Search Analyst, Google',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Cannes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il crucial pour une entreprise à Cannes ?',
      answer:
        'Cannes accueille chaque année plus de 156 événements au Palais des Festivals, générant plus d\'un milliard d\'euros de retombées. Cette dynamique crée une concurrence digitale intense entre hôtels, restaurants, prestataires et commerces. Un référencement efficace vous permet de capter les recherches à haute valeur formulées par cette clientèle internationale et de vous démarquer sur un marché où chaque position Google compte.',
    },
    {
      question: 'Comment le GEO aide-t-il à toucher la clientèle de luxe ?',
      answer:
        'La clientèle haut de gamme utilise de plus en plus les assistants IA pour planifier séjours, réserver des tables étoilées ou trouver un prestataire événementiel. Quand un congressiste du MIPIM demande à ChatGPT « quel est le meilleur restaurant gastronomique près du Palais des Festivals ? », le GEO travaille pour que votre établissement soit la recommandation. C\'est un avantage concurrentiel que la majorité de vos concurrents ne maîtrise pas encore.',
    },
    {
      question: 'Travaillez-vous en plusieurs langues pour Cannes ?',
      answer:
        'Oui. Le marché cannois est par nature international : 40 000 accrédités de 160 pays pour le Festival, des congressistes venus du monde entier pour le MIPIM et Cannes Lions. Nous optimisons votre présence en français et en anglais comme base, et d\'autres langues peuvent être intégrées selon vos marchés cibles prioritaires. L\'enjeu est de capter les requêtes dans la langue de vos clients, pas seulement en français.',
    },
    {
      question: 'Proposez-vous des services adaptés à la saisonnalité cannoise ?',
      answer:
        'Absolument. Cannes vit au rythme de ses événements : Festival en mai, MIPIM en mars, Cannes Lions en juin, ILTM en décembre. Nous intégrons cette saisonnalité dans la stratégie SEO et GEO avec des contenus anticipés, des optimisations ciblées avant chaque temps fort et un suivi des performances par période. L\'objectif est de maximiser votre visibilité aux moments où la demande explose.',
    },
    {
      question: 'Combien de temps pour voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon la compétitivité de votre secteur et votre point de départ. Le GEO peut produire des effets plus rapides sur certaines requêtes conversationnelles. Nous fixons des indicateurs de progression dès le démarrage et vous donnons accès à Rankwell One pour suivre l\'évolution en temps réel. Pas de promesses irréalistes, des projections honnêtes.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour tracer vos citations dans les réponses de ChatGPT, Perplexity et les AI Overviews de Google. Nous analysons les requêtes où votre entreprise est mentionnée, mesurons la fréquence de citation par rapport à vos concurrents et suivons l\'évolution de votre part de voix sur ces canaux émergents. Ces métriques sont intégrées à votre tableau de bord Rankwell One.',
    },
    {
      question: 'Travaillez-vous avec des entreprises à Cannes sans être sur place ?',
      answer:
        'Oui, et c\'est notre mode de fonctionnement pour toutes les villes hors Paris. Visioconférences régulières, accès partagé à Rankwell One pour le suivi en temps réel, consultant senior dédié joignable par email ou téléphone. Nous accompagnons plus de 350 entreprises partout en France avec cette méthode. La compétence compte plus que le code postal.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à briller à Cannes ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO digne du marché cannois.',
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
    { label: 'PACA', href: '/agence-geo-seo/france/provence-alpes-cote-d-azur' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
