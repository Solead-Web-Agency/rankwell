/**
 * DATA FR - Agence GEO & SEO à Avignon
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Avignon | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Avignon. Boostez votre visibilité sur Google et les moteurs IA pour conquérir le marché vauclusien et provençal.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Avignon' },
  ],
  badge: 'avignon',
  title: 'Agence GEO & SEO à Avignon',
  description:
    'Cité des Papes et capitale culturelle de la Provence, Avignon conjugue patrimoine historique exceptionnel et dynamisme économique. Notre agence accompagne les entreprises avignonnaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Avignon',
  accentColor: 'rw-blue' as const,
  title: 'Positionnez votre entreprise en tête des recherches à Avignon',
  paragraphs: [
    'Avignon rayonne au-delà de ses remparts grâce à son patrimoine UNESCO et son festival mondialement connu. Cette attractivité génère un flux touristique considérable et une économie locale diversifiée où la visibilité digitale devient un enjeu stratégique.',
    'Notre méthodologie associe le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque vos prospects recherchent vos services.',
    'Du Palais des Papes aux quartiers commerçants, de l\'intra-muros aux zones d\'activités périphériques, nous adaptons nos stratégies aux réalités avignonnaises et aux comportements de recherche locaux.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Avignon',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché avignonnais et vauclusien',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme, commerces, services culturels et entreprises locales',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et acquisition de clients provençaux',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie locale, contenu optimisé et mesure des résultats',
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
  title: 'Le GEO : nouvelle dimension du référencement à Avignon',
  subtitle:
    'Le Generative Engine Optimization transforme la façon dont les entreprises avignonnaises captent leur audience',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand quelqu\'un demande à ChatGPT "meilleur restaurant près du Palais des Papes", le GEO assure que votre établissement figure dans la réponse.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Avignon ?',
      description:
        'Avec 4 millions de visiteurs annuels, Avignon voit ses touristes utiliser massivement l\'IA pour planifier leur séjour. Être recommandé par ces outils devient un avantage concurrentiel décisif pour les entreprises locales.',
    },
    {
      icon: 'BarChart3',
      title: 'Complémentarité SEO + GEO',
      description:
        'Le SEO garantit vos positions sur Google, le GEO vous fait recommander par l\'IA. En associant ces deux approches, vous captez l\'intégralité des flux de recherche de votre cible avignonnaise et touristique.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenus adaptés aux IA',
      description:
        'Les moteurs génératifs favorisent le contenu structuré, factuel et riche culturellement. Nos équipes produisent des contenus qui valorisent le patrimoine avignonnais tout en répondant aux critères des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Le Festival d\'Avignon attire plus de 700 000 spectateurs chaque été, générant 150 millions d\'euros de retombées économiques.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché avignonnais',
  subtitle:
    'Notre expertise provençale nous permet de déployer des actions parfaitement adaptées à Avignon',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché avignonnais',
      description:
        'Cartographie de la concurrence locale, identification des requêtes propres à Avignon et au Vaucluse, détection des opportunités de positionnement sur le marché culturel et touristique.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le patrimoine',
      description:
        'Production de contenus valorisant l\'identité avignonnaise, le patrimoine UNESCO et l\'expertise de votre entreprise. Articles et pages pensés pour le référencement et l\'engagement.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des temps de chargement, architecture de site orientée SEO, données structurées Schema.org et expérience mobile irréprochable pour les touristes en visite.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Développement de liens depuis des sites avignonnais et provençaux reconnus, présence sur les annuaires locaux et partenariats avec des acteurs culturels du territoire.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises avignonnaises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques d\'Avignon à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Tourisme & Culture',
      description:
        'Hôtels, restaurants, musées, sites touristiques et prestataires culturels souhaitant augmenter leur fréquentation.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Artisanat',
      description:
        'Boutiques de l\'intra-muros, commerces de quartier et artisans provençaux cherchant à développer leur clientèle.',
    },
    {
      icon: 'Briefcase',
      title: 'Services professionnels',
      description:
        'Avocats, experts-comptables, consultants et prestataires B2B ciblant le marché vauclusien.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Agriculture',
      description:
        'Agences immobilières, domaines viticoles et acteurs de l\'œnotourisme en Côtes du Rhône.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'applique à tous les domaines d\'activité. Échangeons sur vos enjeux pour définir une stratégie GEO & SEO adaptée à votre entreprise avignonnaise.',
  ctaButtonText: 'Parler de votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO à Avignon',
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
      description: 'Optimisation on-site, structure du site, balisage et performance. Les fondations d\'un référencement solide.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens de qualité pour renforcer votre autorité. Une stratégie sur-mesure adaptée à votre secteur.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO qui positionnent votre expertise et attirent votre audience cible.',
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
    { value: '93K', label: 'Habitants à Avignon' },
    { value: '4M', label: 'Visiteurs annuels' },
    { value: '700K', label: 'Spectateurs au Festival' },
    { value: '+60%', label: 'Recherches touristiques sur mobile' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Avignon',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence avignonnaise et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et les spécificités du marché vauclusien.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Implémentation des recommandations techniques, création de contenus et développement de votre notoriété locale.',
    },
    {
      number: 4,
      title: 'Mesure & Ajustement',
      description:
        'Suivi des indicateurs clés, reporting régulier et optimisations continues pour maximiser votre ROI.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise à Avignon ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel centre Avignon"', '"où dormir près du Palais des Papes ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, culturel, expert'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Avignon attire des visiteurs du monde entier qui préparent leur séjour via l\'IA. Les entreprises qui maîtrisent le GEO captent ces flux touristiques avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Avignon',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important pour une entreprise à Avignon ?',
      answer:
        'Avignon accueille 4 millions de visiteurs par an grâce à son patrimoine UNESCO et son festival. Un bon référencement vous permet de capter ces recherches touristiques et de toucher les 200 000 habitants de l\'agglomération.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise à Avignon ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Avignon. Si un touriste demande à ChatGPT "que faire à Avignon ce week-end", votre activité pourra être mentionnée.',
    },
    {
      question: 'Combien de temps pour voir des résultats à Avignon ?',
      answer:
        'Le SEO produit généralement des résultats visibles en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes. Nous mettons en place des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Proposez-vous des services pour la période du Festival ?',
      answer:
        'Absolument. Nous anticipons les pics de recherche liés au Festival d\'Avignon et optimisons votre visibilité en amont pour capter le maximum de trafic pendant cette période stratégique.',
    },
    {
      question: 'Travaillez-vous avec le secteur viticole ?',
      answer:
        'Oui, nous accompagnons les domaines viticoles et acteurs de l\'œnotourisme en Côtes du Rhône. Le SEO et le GEO sont particulièrement pertinents pour développer la vente directe et l\'accueil au domaine.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos mentions dans les réponses des IA (ChatGPT, Perplexity, Google SGE). Nous analysons les requêtes où vous êtes cité et mesurons l\'évolution de votre visibilité.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Avignon ?',
  description:
    'Parlons de votre projet et construisons ensemble une stratégie GEO & SEO taillée pour le marché avignonnais.',
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
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Saint-Rémy-de-Provence', href: '/agence-geo-seo/france/saint-remy-de-provence' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
