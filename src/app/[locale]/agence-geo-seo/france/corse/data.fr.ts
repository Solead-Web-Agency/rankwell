/**
 * DATA FR - Agence GEO & SEO en Corse
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Corse | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Corse. Optimisez votre visibilité sur Google et les moteurs IA d\'Ajaccio à Bastia, de Porto-Vecchio à Calvi.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Corse' },
  ],
  badge: 'corse',
  title: 'Agence GEO & SEO en Corse',
  description:
    'Île de beauté aux paysages exceptionnels, la Corse attire chaque année des millions de visiteurs. Notre agence accompagne les entreprises insulaires dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Corse',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur l\'île de beauté',
  paragraphs: [
    'La Corse conjugue nature préservée, patrimoine culturel unique et tourisme de qualité. Entre montagnes et mer, l\'île attire une clientèle internationale exigeante, en quête d\'authenticité et de dépaysement.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'D\'Ajaccio à Bastia, de Porto-Vecchio à Calvi, de Bonifacio à Corte, nous adaptons nos stratégies aux particularités du marché insulaire et aux attentes de votre clientèle touristique.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Corse',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA sur le marché corse',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Tourisme, hôtellerie, immobilier et services aux visiteurs',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, réservations directes et visibilité internationale',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, optimisation technique, contenu stratégique et suivi continu',
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
  title: 'Le GEO : révolution de la visibilité en Corse',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises corses',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un voyageur demande à ChatGPT "meilleur hôtel à Porto-Vecchio", le GEO assure que votre établissement soit mentionné.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Corse ?',
      description:
        'Avec 3 millions de touristes par an, la Corse voit ses visiteurs planifier massivement via l\'IA. Les moteurs génératifs recommandent directement hébergements, restaurants et activités.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté au tourisme insulaire',
      description:
        'L\'IA privilégie le contenu expert et contextualisé. Nos équipes créent des contenus qui reflètent l\'authenticité corse et répondent aux attentes des visiteurs.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'La Corse accueille plus de 3 millions de visiteurs par an, générant 2,7 milliards d\'euros de recettes touristiques. Le digital est devenu incontournable pour capter cette clientèle.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée au marché corse',
  subtitle:
    'Notre expertise insulaire nous permet de déployer des stratégies calibrées pour chaque territoire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché insulaire',
      description:
        'Étude de votre positionnement face aux concurrents locaux, analyse des requêtes spécifiques (Corse-du-Sud, Haute-Corse) et identification des opportunités saisonnières.',
    },
    {
      icon: 'FileText',
      title: 'Contenu à forte valeur touristique',
      description:
        'Création de contenus valorisant l\'authenticité corse et votre expertise métier. Articles de fond, guides locaux et landing pages optimisées pour le référencement insulaire.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique rigoureuse',
      description:
        'Performance mobile prioritaire, données structurées Schema.org, vitesse de chargement optimale et architecture de site pensée pour le SEO local multi-destinations.',
    },
    {
      icon: 'Award',
      title: 'Renforcement de l\'autorité territoriale',
      description:
        'Stratégie de netlinking avec des médias régionaux, partenariats avec des offices de tourisme et développement de votre présence sur les annuaires corses.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises ciblées en Corse',
  subtitle:
    'Nous accompagnons les acteurs économiques insulaires dans leur conquête de visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Hôtellerie & Hébergement',
      description:
        'Hôtels, résidences de tourisme, campings et locations saisonnières sur toute l\'île.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Restauration & Terroir',
      description:
        'Restaurants, producteurs locaux et acteurs de l\'agrotourisme valorisant les produits corses.',
    },
    {
      icon: 'Briefcase',
      title: 'Activités & Loisirs',
      description:
        'Prestataires nautiques, randonnées, excursions et activités de plein air.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Services',
      description:
        'Agences immobilières, conciergeries et prestataires de services aux visiteurs.',
    },
  ],
  ctaTitle: 'Votre secteur ne figure pas dans cette liste ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Contactez-nous pour évaluer comment le GEO et le SEO peuvent propulser votre entreprise en Corse.',
  ctaButtonText: 'Échanger sur votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO en Corse',
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
    { value: '340K', label: 'Habitants en Corse' },
    { value: '3M', label: 'Visiteurs par an' },
    { value: '2.7Md', label: 'Euros de recettes touristiques' },
    { value: '40%', label: 'Utiliseront l\'IA d\'ici 2026' },
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
    'Une méthodologie éprouvée pour des résultats mesurables en Corse',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents insulaires et identification des opportunités sur vos marchés cibles.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et la saisonnalité touristique corse.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en oeuvre des recommandations techniques, création de contenus et développement de votre autorité insulaire.',
    },
    {
      number: 4,
      title: 'Mesure & Amélioration',
      description:
        'Suivi des KPIs, reporting transparent et ajustements stratégiques pour une progression continue.',
    },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO vs GEO : quelle approche pour votre entreprise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Positionner dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"hôtel Porto-Vecchio"', '"où loger en Corse du Sud ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Riche, structuré, expert'],
    ['Mesure', 'Rankings, trafic, CTR', 'Citations, mentions, parts de réponse'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'L\'IA bouleverse la façon dont les touristes planifient leurs séjours en Corse. Se préparer maintenant au GEO, c\'est prendre une longueur d\'avance sur un marché ultra-concurrentiel.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Corse',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO et le GEO en Corse ?',
      answer:
        'Le tourisme corse est ultra-concurrentiel. SEO et GEO vous permettent de capter efficacement une clientèle internationale qui planifie ses séjours en ligne et via l\'IA.',
    },
    {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes. Nous établissons des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toute l\'île ?',
      answer:
        'Oui, nous accompagnons des entreprises d\'Ajaccio, Bastia, Porto-Vecchio, Calvi, Bonifacio, Corte et au-delà. Notre expertise couvre l\'ensemble du territoire corse.',
    },
    {
      question: 'Le GEO remplace-t-il le SEO traditionnel ?',
      answer:
        'Non, le GEO complète le SEO. Google reste dominant, mais les recherches via l\'IA progressent rapidement. Une stratégie complète intègre les deux approches.',
    },
    {
      question: 'Comment gérez-vous la saisonnalité du tourisme corse ?',
      answer:
        'Nous adaptons nos stratégies au calendrier touristique : préparation en basse saison, montée en puissance au printemps et optimisation continue pendant la haute saison.',
    },
    {
      question: 'Proposez-vous des services multilingues ?',
      answer:
        'Oui, nous optimisons votre présence pour les marchés français, mais aussi italien, allemand et anglais, essentiels pour le tourisme corse.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir le marché corse ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée à l\'île de beauté.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans d\'autres régions',
  cities: [
    { label: 'Ajaccio', href: '/agence-geo-seo/france/ajaccio' },
    { label: 'Bastia', href: '/agence-geo-seo/france/bastia' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Provence-Alpes-Côte d\'Azur', href: '/agence-geo-seo/france/provence-alpes-cote-d-azur' },
    { label: 'Occitanie', href: '/agence-geo-seo/france/occitanie' },
  ],
};
