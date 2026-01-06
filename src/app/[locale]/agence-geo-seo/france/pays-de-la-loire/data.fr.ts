/**
 * DATA FR - Agence GEO & SEO en Pays de la Loire
 * Page région SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en Pays de la Loire | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO en Pays de la Loire. Optimisez votre visibilité sur Google et les moteurs IA de Nantes à Angers, du Mans à La Baule.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Pays de la Loire' },
  ],
  badge: 'pays-de-la-loire',
  title: 'Agence GEO & SEO en Pays de la Loire',
  description:
    'Région atlantique dynamique, les Pays de la Loire combinent métropole nantaise, patrimoine ligérien et littoral attractif. Notre agence accompagne les entreprises régionales dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  title: 'Dominer les recherches sur un territoire en plein essor',
  paragraphs: [
    'Les Pays de la Loire s\'affirment comme l\'une des régions les plus dynamiques de France, portée par Nantes devenue métropole d\'envergure européenne. Entre industrie navale, aéronautique, agroalimentaire et tourisme, la région offre un tissu économique diversifié.',
    'Notre méthodologie intègre le référencement SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Cette combinaison permet à votre entreprise d\'apparaître sur Google comme dans les réponses de ChatGPT, Perplexity ou Google SGE.',
    'De Nantes à Angers, du Mans à La Baule, de Cholet à Saumur, nous adaptons nos stratégies aux particularités de chaque marché local et aux attentes de votre clientèle.',
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
  title: 'L\'essentiel de notre service GEO & SEO en Pays de la Loire',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats de recherche Google et IA en Pays de la Loire',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Industrie, commerce, tourisme littoral et services régionaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, leads locaux et visibilité multi-territoire',
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
  title: 'Le GEO : révolution de la visibilité en Pays de la Loire',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle pour les entreprises ligériennes',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un touriste demande à ChatGPT "meilleur restaurant à La Baule", le GEO assure que votre établissement soit mentionné.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi c\'est essentiel en Pays de la Loire ?',
      description:
        'Avec une économie diversifiée et un tourisme littoral attractif, la région voit ses prospects utiliser massivement l\'IA. Les moteurs génératifs recommandent directement hébergements, restaurants et services professionnels.',
    },
    {
      icon: 'BarChart3',
      title: 'SEO + GEO = couverture maximale',
      description:
        'Le SEO vous positionne sur Google, le GEO vous fait recommander par l\'IA. En combinant ces deux approches, vous captez l\'ensemble des canaux de recherche utilisés par vos clients.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu adapté aux filières régionales',
      description:
        'L\'IA privilégie le contenu expert et contextualisé. Nos équipes créent des contenus qui reflètent l\'excellence de votre entreprise et les spécificités ligériennes.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'Les Pays de la Loire comptent 3,8 millions d\'habitants et Nantes est régulièrement classée parmi les villes où il fait bon vivre en France, attirant entreprises et talents.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à la diversité ligérienne',
  subtitle:
    'Notre expertise régionale nous permet de déployer des stratégies calibrées pour chaque territoire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse des marchés locaux',
      description:
        'Étude de votre positionnement face aux concurrents locaux, analyse des requêtes spécifiques à chaque territoire (Loire-Atlantique, Maine-et-Loire, Sarthe, etc.) et identification des opportunités.',
    },
    {
      icon: 'FileText',
      title: 'Contenu à forte valeur régionale',
      description:
        'Création de contenus valorisant l\'identité de votre territoire et votre expertise métier. Articles de fond, guides locaux et landing pages optimisées pour le référencement régional.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique rigoureuse',
      description:
        'Performance mobile prioritaire, données structurées Schema.org, vitesse de chargement optimale et architecture de site pensée pour le SEO local multi-villes.',
    },
    {
      icon: 'Award',
      title: 'Renforcement de l\'autorité territoriale',
      description:
        'Stratégie de netlinking avec des médias régionaux, partenariats avec des institutions locales et développement de votre présence sur les annuaires ligériens.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises ciblées en Pays de la Loire',
  subtitle:
    'Nous accompagnons les acteurs économiques régionaux dans leur conquête de visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Industrie & Naval',
      description:
        'Chantiers navals, équipementiers et sous-traitants industriels de la région nantaise et nazairienne.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Tourisme & Hôtellerie',
      description:
        'Hôtels, campings, restaurants et acteurs du tourisme littoral de La Baule au Croisic.',
    },
    {
      icon: 'Briefcase',
      title: 'Services aux entreprises',
      description:
        'Cabinets de conseil, agences, professions libérales et prestataires B2B ciblant le tissu économique régional.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Viticulture',
      description:
        'Agences immobilières, promoteurs et domaines viticoles du Muscadet et de l\'Anjou.',
    },
  ],
  ctaTitle: 'Votre secteur ne figure pas dans cette liste ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Contactez-nous pour évaluer comment le GEO et le SEO peuvent propulser votre entreprise en Pays de la Loire.',
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
  title: 'Nos services GEO & SEO en Pays de la Loire',
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
    { value: '3.8M', label: 'Habitants en Pays de la Loire' },
    { value: '660K', label: 'Habitants métropole nantaise' },
    { value: '2ème', label: 'Région française pour l\'emploi' },
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
    'Une méthodologie éprouvée pour des résultats mesurables en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre situation actuelle, étude des concurrents régionaux et identification des opportunités sur vos marchés locaux.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à votre secteur, vos objectifs et les spécificités de votre territoire.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus et développement de votre autorité régionale.',
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
    ['Recherche type', '"restaurant La Baule"', '"où manger à La Baule ?"'],
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
    'L\'IA bouleverse la façon dont les clients recherchent des services en Pays de la Loire. Se préparer maintenant au GEO, c\'est prendre une longueur d\'avance sur un marché en pleine mutation.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO en Pays de la Loire',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi investir dans le SEO et le GEO en Pays de la Loire ?',
      answer:
        'Les Pays de la Loire sont l\'une des régions les plus dynamiques de France avec une économie diversifiée. La concurrence digitale y est forte. SEO et GEO vous permettent de capter efficacement votre cible locale.',
    },
    {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer:
        'Le SEO produit généralement ses premiers effets en 3 à 6 mois. Le GEO peut montrer des résultats plus rapides sur certaines requêtes. Nous établissons des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toute la région ?',
      answer:
        'Oui, nous accompagnons des entreprises de Nantes, Angers, Le Mans, La Baule, Cholet, Saumur et au-delà. Notre expertise couvre l\'ensemble du territoire ligérien.',
    },
    {
      question: 'Le GEO remplace-t-il le SEO traditionnel ?',
      answer:
        'Non, le GEO complète le SEO. Google reste dominant, mais les recherches via l\'IA progressent rapidement. Une stratégie complète intègre les deux approches.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés pour suivre vos citations dans les réponses des IA (ChatGPT, Perplexity, Google SGE) et mesurer l\'évolution de votre visibilité.',
    },
    {
      question: 'Proposez-vous des services pour le tourisme littoral ?',
      answer:
        'Absolument. Le tourisme est un secteur clé de la région. Nous accompagnons hôtels, restaurants et prestataires pour capter les visiteurs de la côte atlantique.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir les Pays de la Loire ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée à votre territoire.',
  buttonText: 'Demander un audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Nos services GEO & SEO dans les villes des Pays de la Loire',
  cities: [
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Le Mans', href: '/agence-geo-seo/france/le-mans' },
    { label: 'Cholet', href: '/agence-geo-seo/france/cholet' },
    { label: 'Saumur', href: '/agence-geo-seo/france/saumur' },
    { label: 'La Baule', href: '/agence-geo-seo/france/la-baule' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
  ],
};
