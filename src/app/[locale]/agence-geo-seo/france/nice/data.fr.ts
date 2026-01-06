/**
 * DATA FR - Agence GEO & SEO à Nice
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Nice | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Nice. Optimisez votre visibilité sur Google et les moteurs IA pour développer votre activité sur la Côte d\'Azur.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Nice' },
  ],
  badge: 'nice',
  title: 'Agence GEO & SEO à Nice',
  description:
    'Capitale de la Côte d\'Azur et cinquième ville de France, Nice attire entrepreneurs, touristes internationaux et investisseurs. Notre agence aide les entreprises niçoises à optimiser leur visibilité sur Google et les moteurs de recherche propulsés par l\'IA.',
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
  badge: 'GEO & SEO à Nice',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur le marché azuréen exige une expertise pointue',
  paragraphs: [
    'Nice occupe une position privilégiée sur le littoral méditerranéen, conjuguant attractivité touristique et écosystème économique solide. Cette double vocation génère une concurrence digitale intense où seule une stratégie de référencement élaborée permet de se démarquer.',
    'Notre approche fusionne le SEO traditionnel avec le GEO (Generative Engine Optimization), nouvelle discipline d\'optimisation pour les moteurs IA. Vous serez ainsi visible sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'De la Promenade des Anglais au quartier d\'affaires Nice Meridia, nous calibrons nos stratégies selon les quartiers, les cibles et les spécificités du marché azuréen.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Nice',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché niçois et azuréen',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme, commerces azuréens, services B2B et entreprises locales',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, visibilité internationale et croissance de votre clientèle',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie locale, contenu optimisé et suivi des performances',
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
  title: 'Le GEO : optimisation pour l\'IA à Nice',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises azuréennes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) consiste à optimiser votre présence pour les moteurs de recherche IA. Quand un voyageur demande à ChatGPT "meilleur hôtel avec piscine à Nice", le GEO garantit que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Enjeu majeur pour Nice',
      description:
        'Avec 4 millions de visiteurs annuels dont une large part d\'internationaux, Nice voit ses touristes utiliser massivement l\'IA pour planifier leur séjour. Les moteurs génératifs deviennent un canal de réservation incontournable.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les assistants IA. La combinaison de ces deux approches couvre l\'intégralité des comportements de recherche de vos prospects niçois et internationaux.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté aux attentes IA',
      description:
        'Les moteurs génératifs privilégient un contenu expert, structuré et contextualisé. Nos équipes créent des contenus qui répondent à ces critères tout en mettant en valeur l\'expérience unique de Nice.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'L\'aéroport Nice Côte d\'Azur est le 3ème aéroport de France avec 14,5 millions de passagers par an, générant un flux touristique international majeur.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie pensée pour le marché niçois',
  subtitle:
    'Notre expertise azuréenne nous permet de déployer des stratégies parfaitement calibrées pour Nice',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché niçois',
      description:
        'Étude approfondie de la concurrence locale, cartographie des requêtes spécifiques à Nice et identification des opportunités de positionnement sur les thématiques azuréennes.',
    },
    {
      icon: 'FileText',
      title: 'Contenu à dimension internationale',
      description:
        'Production de contenus valorisant l\'attractivité de Nice, adaptés au référencement local et capables de résonner avec une clientèle française comme internationale.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique avancée',
      description:
        'Performance mobile prioritaire pour les touristes en déplacement, balisage Schema.org, vitesse de chargement et architecture de site pensée pour le SEO local.',
    },
    {
      icon: 'Award',
      title: 'Construction d\'autorité locale',
      description:
        'Stratégie de netlinking ciblant les médias azuréens, partenariats avec des acteurs régionaux et présence sur les annuaires de référence de la Côte d\'Azur.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises niçoises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de la Côte d\'Azur à développer leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie & Tourisme',
      description:
        'Hôtels, résidences de vacances, restaurants et prestataires touristiques cherchant à augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Luxe & Retail',
      description:
        'Boutiques de luxe, joailleries, commerces haut de gamme et enseignes azuréennes ciblant une clientèle exigeante.',
    },
    {
      icon: 'Briefcase',
      title: 'Services professionnels',
      description:
        'Cabinets juridiques, experts-comptables, consultants et entreprises B2B implantées à Nice.',
    },
    {
      icon: 'Home',
      title: 'Immobilier de prestige',
      description:
        'Agences immobilières, promoteurs et gestionnaires de biens sur la Côte d\'Azur.',
    },
  ],
  ctaTitle: 'Votre activité ne figure pas ici ?',
  ctaDescription:
    'Notre savoir-faire s\'adapte à tous les secteurs. Échangeons pour définir comment le GEO et le SEO peuvent propulser votre entreprise niçoise.',
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
  title: 'Nos services GEO & SEO à Nice',
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
// CHIFFRES DATA
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    { value: '340K', label: 'Habitants à Nice' },
    { value: '4M', label: 'Touristes par an' },
    { value: '3ème', label: 'Aéroport de France' },
    { value: '+70%', label: 'Recherches internationales' },
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
    'Une méthodologie éprouvée pour des résultats tangibles à Nice',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude de la concurrence niçoise et identification des leviers de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO sur mesure, aligné avec vos objectifs et les spécificités du marché azuréen.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, production de contenus et développement de votre notoriété locale.',
    },
    {
      number: 4,
      title: 'Mesure & Amélioration',
      description:
        'Suivi des KPIs, reporting transparent et ajustements continus pour maximiser votre retour sur investissement.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise niçoise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel vue mer Nice"', '"où loger avec vue mer à Nice ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, expert, contextuel'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, part de voix'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'Nice attire une clientèle internationale qui planifie de plus en plus via l\'IA. Les entreprises azuréennes qui intègrent le GEO dans leur stratégie captent ces flux touristiques avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Nice',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO à Nice ?',
      answer:
        'Nice est la cinquième ville de France avec un marché touristique majeur. La concurrence digitale y est forte dans la plupart des secteurs. Un référencement efficace permet de capter les recherches des habitants et des millions de touristes internationaux.',
    },
    {
      question: 'En quoi le GEO est-il particulièrement pertinent pour Nice ?',
      answer:
        'Nice accueille une clientèle internationale qui utilise massivement l\'IA pour planifier voyages et séjours. Être recommandé par ChatGPT ou Perplexity quand un visiteur recherche des services à Nice représente un avantage concurrentiel décisif.',
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes. Nous établissons des indicateurs de progression dès le démarrage pour suivre l\'impact de nos actions.',
    },
    {
      question: 'Travaillez-vous en plusieurs langues pour Nice ?',
      answer:
        'Oui, nous pouvons optimiser votre présence en français et en anglais pour capter la clientèle internationale de la Côte d\'Azur. Cette approche multilingue est particulièrement pertinente pour le tourisme et l\'immobilier de prestige.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos citations dans les réponses des IA (ChatGPT, Perplexity, Google SGE). Nous analysons les requêtes où vous apparaissez et mesurons l\'évolution de votre visibilité sur ces nouveaux canaux.',
    },
    {
      question: 'Proposez-vous des services pour les événements azuréens ?',
      answer:
        'Absolument. Nous intégrons la saisonnalité et les événements (festivals, congrès, saison estivale) dans nos stratégies. Cela permet de maximiser votre visibilité au moment où le potentiel de recherche est le plus élevé.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Nice ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée au marché azuréen.',
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
    { label: 'Aix-en-Provence', href: '/agence-geo-seo/france/aix-en-provence' },
    { label: 'Cannes', href: '/agence-geo-seo/france/cannes' },
    { label: 'Avignon', href: '/agence-geo-seo/france/avignon' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
