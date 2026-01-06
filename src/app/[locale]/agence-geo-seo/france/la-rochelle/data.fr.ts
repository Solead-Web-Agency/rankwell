/**
 * DATA FR - Agence GEO & SEO à La Rochelle
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à La Rochelle | Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à La Rochelle. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché charentais et atlantique.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'La Rochelle' },
  ],
  badge: 'la-rochelle',
  title: 'Agence GEO & SEO à La Rochelle',
  description:
    'Perle de l\'Atlantique et port historique, La Rochelle conjugue patrimoine maritime et tourisme balnéaire attractif. Notre agence accompagne les entreprises rochelaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à La Rochelle',
  accentColor: 'rw-blue' as const,
  title: 'Dominez les recherches sur le littoral charentais',
  paragraphs: [
    'La Rochelle bénéficie d\'une attractivité touristique majeure avec ses tours emblématiques, son vieux port et la proximité des îles de Ré et d\'Oléron. Cette position privilégiée génère une concurrence digitale intense où la visibilité en ligne devient déterminante.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque des visiteurs préparent leur séjour.',
    'Du Vieux-Port aux zones commerciales, de l\'île de Ré aux plages environnantes, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des touristes et habitants.',
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
  title: 'L\'essentiel de notre service GEO & SEO à La Rochelle',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché rochelais',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme, commerces locaux, services et entreprises maritimes',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, réservations directes et notoriété locale',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie touristique, contenu local et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour La Rochelle',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de clientèle touristique à La Rochelle',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs alimentés par l\'IA. Quand un voyageur demande à ChatGPT "meilleur restaurant de fruits de mer à La Rochelle", le GEO assure que votre établissement soit recommandé.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à La Rochelle ?',
      description:
        'Avec 3 millions de visiteurs annuels, La Rochelle voit ses touristes utiliser massivement l\'IA pour planifier leur séjour. Être recommandé par les assistants IA devient un avantage concurrentiel décisif.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO assure vos positions sur Google, le GEO vous fait citer par les IA. La combinaison de ces deux approches couvre l\'ensemble des comportements de recherche de vos prospects.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu maritime et touristique',
      description:
        'Les moteurs génératifs privilégient le contenu authentique et expert. Nos équipes créent des contenus qui valorisent l\'identité maritime rochelaise et répondent aux critères des IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Chiffre clé',
  text: 'La Rochelle et l\'agglomération accueillent plus de 3 millions de visiteurs par an, avec un pic estival qui en fait l\'une des destinations atlantiques les plus prisées.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie pensée pour le marché rochelais',
  subtitle:
    'Notre expertise du littoral atlantique nous permet de déployer des actions parfaitement adaptées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché touristique',
      description:
        'Étude de la concurrence locale, identification des requêtes saisonnières et détection des opportunités de positionnement sur les thématiques maritimes et touristiques.',
    },
    {
      icon: 'FileText',
      title: 'Contenu maritime authentique',
      description:
        'Production de contenus valorisant l\'identité rochelaise, le patrimoine maritime et l\'expertise de votre entreprise. Articles et pages pensés pour le référencement et l\'engagement.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Performance mobile prioritaire pour les touristes en déplacement, données structurées Schema.org et vitesse de chargement optimale.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Stratégie de netlinking ciblant les médias régionaux, partenariats avec des institutions locales et présence sur les annuaires touristiques.',
    },
  ],
};

// ============================================
// POUR QUI DATA
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Entreprises rochelaises accompagnées',
  subtitle:
    'Nous aidons les acteurs économiques de La Rochelle à conquérir leur visibilité digitale',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Tourisme & Hôtellerie',
      description:
        'Hôtels, campings, restaurants et prestataires touristiques souhaitant augmenter leurs réservations directes.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Artisanat',
      description:
        'Boutiques du Vieux-Port, commerces de quartier et artisans locaux cherchant à développer leur clientèle.',
    },
    {
      icon: 'Briefcase',
      title: 'Nautisme & Maritime',
      description:
        'Activités nautiques, ports de plaisance, loueurs de bateaux et entreprises du secteur maritime.',
    },
    {
      icon: 'Home',
      title: 'Immobilier & Services',
      description:
        'Agences immobilières, conciergeries et prestataires de services aux résidents et vacanciers.',
    },
  ],
  ctaTitle: 'Votre secteur n\'est pas listé ?',
  ctaDescription:
    'Notre expertise s\'adapte à tous les domaines d\'activité. Échangeons sur vos enjeux pour définir une stratégie GEO & SEO adaptée à votre entreprise rochelaise.',
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
  title: 'Nos services GEO & SEO à La Rochelle',
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
    { value: '80K', label: 'Habitants à La Rochelle' },
    { value: '3M', label: 'Visiteurs par an' },
    { value: '4500', label: 'Anneaux au port de plaisance' },
    { value: '+75%', label: 'Recherches touristiques sur mobile' },
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
    'Une méthodologie éprouvée pour des résultats mesurables à La Rochelle',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement actuel, étude de la concurrence rochelaise et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs, votre secteur et la saisonnalité touristique.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations techniques, création de contenus et développement de votre notoriété locale.',
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
  title: 'SEO vs GEO : quelle approche pour votre entreprise à La Rochelle ?',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers',
  accentColor: 'rw-blue' as const,
  columns: ['Critère', 'SEO classique', 'GEO (IA générative)'],
  rows: [
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"restaurant fruits de mer La Rochelle"', '"où manger des huîtres à La Rochelle ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, expert, local'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix IA'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence contextuelle'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'La Rochelle attire des visiteurs qui préparent leur séjour via l\'IA. Les entreprises qui maîtrisent le GEO captent ces flux touristiques avant leurs concurrents.',
  author: 'Notre équipe',
  role: 'Experts GEO & SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à La Rochelle',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important pour une entreprise à La Rochelle ?',
      answer:
        'La Rochelle accueille 3 millions de visiteurs par an. Un bon référencement vous permet de capter ces recherches touristiques et de toucher les 80 000 habitants de la ville et les 175 000 de l\'agglomération.',
    },
    {
      question: 'Comment le GEO peut-il aider mon entreprise à La Rochelle ?',
      answer:
        'Le GEO vous permet d\'être recommandé par les assistants IA quand les utilisateurs posent des questions sur La Rochelle. Si un touriste demande à ChatGPT "que faire à La Rochelle ce week-end", votre activité pourra être mentionnée.',
    },
    {
      question: 'Combien de temps pour voir des résultats à La Rochelle ?',
      answer:
        'Le SEO produit généralement des résultats visibles en 3 à 6 mois. Le GEO peut avoir un impact plus rapide sur certaines requêtes. Nous mettons en place des indicateurs de progression dès le premier mois.',
    },
    {
      question: 'Proposez-vous des services pour l\'île de Ré ?',
      answer:
        'Absolument. Nous couvrons La Rochelle et l\'île de Ré, permettant d\'optimiser votre visibilité sur ces deux marchés touristiques complémentaires.',
    },
    {
      question: 'Travaillez-vous avec la saisonnalité touristique ?',
      answer:
        'Oui, nous intégrons la saisonnalité dans nos stratégies. Nous anticipons les pics de recherche estivaux pour maximiser votre visibilité au moment où le potentiel est le plus élevé.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils dédiés pour suivre vos citations dans les réponses des IA. Nous analysons les requêtes où vous êtes mentionné et mesurons l\'évolution de votre visibilité.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à conquérir La Rochelle ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée au marché rochelais.',
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
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
