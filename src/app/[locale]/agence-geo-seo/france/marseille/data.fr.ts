/**
 * DATA FR - Agence GEO & SEO à Marseille
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Marseille | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Marseille. Boostez votre visibilité sur Google et les moteurs IA pour conquérir le marché phocéen et méditerranéen.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Marseille' },
  ],
  badge: 'marseille',
  title: 'Agence GEO & SEO à Marseille',
  description:
    'Deuxième ville de France par sa population, Marseille représente un hub économique majeur du bassin méditerranéen. Notre agence accompagne les entreprises marseillaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs de recherche génératifs (GEO).',
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
  badge: 'GEO & SEO à Marseille',
  accentColor: 'rw-blue' as const,
  title: 'Le référencement à Marseille nécessite une approche spécifique',
  paragraphs: [
    'Marseille conjugue tradition portuaire et modernité économique, attirant touristes, entrepreneurs et investisseurs. Ce dynamisme crée un environnement digital compétitif où la visibilité en ligne devient déterminante pour se différencier.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques émergentes du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'Du Vieux-Port aux quartiers d\'affaires d\'Euroméditerranée, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche spécifiques des Marseillais et des visiteurs de la cité phocéenne.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Marseille',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Positionner votre entreprise en tête des recherches Google et IA à Marseille',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'PME phocéennes, acteurs du tourisme, services B2B et commerces locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, notoriété locale renforcée et génération de leads marseillais',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit approfondi, optimisation complète, contenu local et suivi des performances',
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
  title: 'Le GEO : nouvelle frontière du référencement à Marseille',
  subtitle:
    'Le Generative Engine Optimization redéfinit la façon dont les entreprises phocéennes captent leur audience digitale',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) désigne l\'optimisation de votre contenu pour les moteurs alimentés par l\'IA. Quand un utilisateur demande à ChatGPT "meilleures bouillabaisse à Marseille", le GEO assure que votre restaurant soit mentionné dans la réponse.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Marseille ?',
      description:
        'Avec 5 millions de touristes annuels et un tissu économique dynamique, Marseille voit ses consommateurs adopter massivement les assistants IA. Les moteurs génératifs influencent désormais les décisions d\'achat et de réservation des Phocéens.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = visibilité maximale',
      description:
        'Le SEO garantit votre présence sur Google, le GEO vous fait recommander par l\'IA. En associant ces deux expertises, vous captez l\'ensemble des canaux de recherche utilisés par votre cible marseillaise.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu pensé pour l\'IA',
      description:
        'Les moteurs génératifs favorisent le contenu structuré, factuel et contextualisé. Nos équipes produisent des contenus répondant à ces critères tout en valorisant l\'identité marseillaise de votre entreprise.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Marseille accueille 5 millions de touristes par an et son port génère 43 000 emplois directs, en faisant le premier port de France et de Méditerranée.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie calibrée pour le marché marseillais',
  subtitle:
    'Notre connaissance du tissu économique phocéen nous permet de déployer des actions parfaitement ciblées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché phocéen',
      description:
        'Nous cartographions la concurrence locale, identifions les requêtes propres à Marseille et ses quartiers, et détectons les opportunités de positionnement sur les thématiques méditerranéennes.',
    },
    {
      icon: 'FileText',
      title: 'Contenu ancré dans le territoire',
      description:
        'Rédaction de contenus valorisant l\'identité marseillaise, les spécificités locales et l\'expertise de votre entreprise. Des articles et pages pensés pour le référencement et l\'engagement des lecteurs phocéens.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Optimisation des temps de chargement, architecture de site orientée SEO, données structurées Schema.org et expérience mobile irréprochable pour les Marseillais en déplacement.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Développement de liens depuis des sites marseillais reconnus, présence sur les annuaires locaux et partenariats avec des acteurs du territoire pour asseoir votre légitimité.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises marseillaises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques phocéens à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Tourisme & Hôtellerie',
      description:
        'Hôtels, restaurants, prestataires d\'excursions et acteurs du tourisme marseillais souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Retail',
      description:
        'Boutiques marseillaises, commerces des quartiers emblématiques et enseignes cherchant à développer leur clientèle locale.',
    },
    {
      icon: 'Briefcase',
      title: 'Services professionnels',
      description:
        'Avocats, experts-comptables, consultants et prestataires B2B ciblant le marché des entreprises marseillaises.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Maritime',
      description:
        'Agences immobilières, acteurs de la promotion et entreprises du secteur maritime opérant depuis Marseille.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'applique à tous les domaines d\'activité. Échangeons sur vos enjeux pour définir une stratégie GEO & SEO adaptée à votre entreprise marseillaise.',
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
  title: 'Nos services GEO & SEO à Marseille',
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
    { value: '870K', label: 'Habitants à Marseille' },
    { value: '5M', label: 'Touristes accueillis par an' },
    { value: '1er', label: 'Port de France et Méditerranée' },
    { value: '+60%', label: 'Recherches locales sur mobile' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à Marseille',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence marseillaise et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie sur mesure',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et les spécificités du marché phocéen.',
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
  title: 'SEO vs GEO : quelle stratégie pour votre entreprise marseillaise ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"restaurant bouillabaisse Marseille"', '"où manger la meilleure bouillabaisse à Marseille ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, factuel, expert'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'L\'IA transforme profondément les recherches locales à Marseille. Les entreprises qui s\'adaptent dès maintenant au GEO prendront une avance significative sur leurs concurrents phocéens.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Marseille',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il crucial pour une entreprise marseillaise ?',
      answer:
        'Marseille est une métropole dynamique avec une concurrence intense dans la plupart des secteurs. Un bon référencement vous permet de capter les recherches des 870 000 habitants et des 5 millions de touristes annuels. C\'est un investissement rentable pour développer votre activité localement.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise à Marseille ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur Marseille. Par exemple, si quelqu\'un demande "meilleur avocat fiscaliste à Marseille" à ChatGPT, votre cabinet pourra être mentionné si votre contenu est optimisé pour le GEO.',
    },
    {
      question: 'Combien de temps pour voir des résultats à Marseille ?',
      answer:
        'Le SEO produit généralement des résultats visibles en 3 à 6 mois, selon la concurrence de votre secteur. Le GEO peut avoir un impact plus rapide sur certaines requêtes. Nous mettons en place des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Travaillez-vous avec tous les secteurs d\'activité ?',
      answer:
        'Oui, nous accompagnons des entreprises de tous secteurs à Marseille : tourisme, hôtellerie-restauration, services B2B, commerce, immobilier, santé, maritime, etc. Notre approche s\'adapte aux spécificités de chaque marché.',
    },
    {
      question: 'Proposez-vous un accompagnement pour les quartiers spécifiques de Marseille ?',
      answer:
        'Absolument. Nous pouvons cibler des zones précises : Vieux-Port, Euroméditerranée, Prado, Castellane ou les différents arrondissements. Le SEO local permet d\'optimiser votre visibilité sur des périmètres géographiques définis.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos mentions dans les réponses des IA (ChatGPT, Perplexity, Google SGE). Nous analysons les requêtes où vous êtes cité et mesurons l\'évolution de votre visibilité sur ces nouveaux canaux de recherche.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir Marseille ?',
  description:
    'Parlons de votre projet et construisons ensemble une stratégie GEO & SEO taillée pour le marché phocéen.',
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
