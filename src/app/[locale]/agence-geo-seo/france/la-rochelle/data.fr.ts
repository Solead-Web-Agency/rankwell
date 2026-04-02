/**
 * DATA FR - Agence GEO & SEO à La Rochelle
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à La Rochelle - Rankwell',
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
  subtitle: 'L\'essentiel de notre accompagnement pour les entreprises du littoral atlantique',
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
        'GEO (Generative Engine Optimization) est la discipline qui optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Quand un voyageur demande « meilleur restaurant de fruits de mer à La Rochelle », le GEO fait de votre établissement la source recommandée, pas juste un résultat parmi d\'autres.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à La Rochelle ?',
      description:
        'Avec près de 3 millions de nuitées par an et 608 millions d\'euros de retombées touristiques, La Rochelle voit ses visiteurs utiliser massivement l\'IA pour planifier leur séjour. Les requêtes conversationnelles comme « que faire à La Rochelle ce week-end » passent de plus en plus par les assistants IA. Ne pas y figurer, c\'est perdre des clients au profit de concurrents mieux référencés.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO assure vos positions sur les liens bleus de Google, le GEO vous fait citer dans les réponses conversationnelles des IA. La combinaison couvre l\'intégralité des comportements de recherche de vos prospects, du touriste qui tape un mot-clé au résident qui interroge son assistant vocal pour trouver un prestataire.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu local structuré pour l\'IA',
      description:
        'Les moteurs génératifs privilégient le contenu authentique, expert et bien structuré. Nos équipes créent des contenus qui valorisent l\'identité maritime rochelaise — guides de quartier, expertise sectorielle, données locales vérifiées — formatés pour être facilement extraits et cités par les IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique rochelais',
  text: 'L\'agglomération de La Rochelle rassemble 32 000 établissements, plus de 71 000 emplois salariés et accueille près de 3 millions de nuitées touristiques par an, générant 608 millions d\'euros de retombées économiques. La ville compte 80 000 habitants et se positionne sur des filières d\'excellence : numérique, biotechnologies, nautisme, éco-activités et agroalimentaire. Le secteur touristique à lui seul représente 9 070 emplois locaux.',
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
      title: 'Analyse du marché rochelais',
      description:
        'Nous cartographions la concurrence digitale sur le littoral charentais, analysons les requêtes saisonnières et détectons les opportunités de positionnement sur les thématiques maritimes, touristiques et industrielles propres au bassin rochelais.',
    },
    {
      icon: 'FileText',
      title: 'Contenu maritime authentique',
      description:
        'Production de contenus éditoriaux valorisant l\'identité rochelaise, le patrimoine maritime et l\'expertise de votre entreprise. Articles de fond, guides locaux et pages de destination conçus pour performer sur Google et être cités par les moteurs IA.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Performance mobile prioritaire pour les touristes en déplacement, balisage Schema.org adapté aux établissements locaux, vitesse de chargement optimale et architecture de site pensée pour la conversion. Chaque détail technique contribue à votre visibilité.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Stratégie de netlinking ciblant les médias régionaux charentais, les guides touristiques atlantiques et les institutions locales. Nous construisons une empreinte digitale qui renforce votre crédibilité auprès de Google et des IA génératives.',
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
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises sur le littoral charentais. Voici les situations où nous pouvons réellement vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Votre site existe mais ne génère pas assez de réservations ou de demandes de contact. Vous cherchez un partenaire pour structurer une stratégie Search efficace qui transforme le trafic en chiffre d\'affaires, pas en vanity metrics.',
    },
    {
      label: 'Vous préparez la saisonnalité touristique',
      description: 'Le littoral charentais vit au rythme des saisons. Vous voulez anticiper les pics de recherche estivaux, optimiser votre visibilité en amont et maximiser vos réservations directes sans dépendre uniquement des plateformes tierces.',
    },
    {
      label: 'Tourisme, hôtellerie et restauration',
      description: 'Hôtels, campings, restaurants de fruits de mer, prestataires touristiques et acteurs de l\'île de Ré. Avec près de 3 millions de nuitées par an, le marché rochelais exige une stratégie digitale qui capte les visiteurs dès la phase de planification de leur séjour.',
    },
    {
      label: 'Nautisme, maritime et éco-activités',
      description: 'Ports de plaisance, loueurs de bateaux, activités nautiques et entreprises des filières d\'excellence rochelaises. La Rochelle est le premier port de plaisance de l\'Atlantique : votre visibilité en ligne doit refléter ce positionnement stratégique.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'Choisir une agence proche géographiquement ne garantit rien. Ce qui fait la différence, c\'est la maîtrise des techniques actuelles, la transparence sur les résultats et un vrai engagement sur vos objectifs business.',
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
      description: 'Diagnostic technique, sémantique et concurrentiel de votre site. On identifie ce qui freine votre visibilité et les leviers d\'accélération sur le marché rochelais et atlantique.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, maillage interne, balisage Schema.org et performance technique adaptée aux flux saisonniers. Des fondations solides pour un référencement qui performe toute l\'année.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs auprès de médias régionaux, guides touristiques atlantiques et publications charentaises. Une stratégie sur mesure, sans spam ni raccourcis douteux.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui positionnent votre expertise locale et attirent votre audience cible. Du contenu qui se positionne et qui convertit, pas du remplissage.',
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
  subtitle: 'Deux approches complémentaires pour maximiser votre visibilité sur le marché rochelais',
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
    'We spend all of our time understanding how Google works and not enough time understanding how people work. Audiences over algorithms.',
  author: 'Wil Reynolds',
  role: 'Fondateur de Seer Interactive',
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
      id: '1',
      question: 'Travaillez-vous avec des entreprises à La Rochelle sans être sur place ?',
      answer:
        'Oui, nous accompagnons des entreprises sur le littoral atlantique en collaboration à distance depuis plusieurs années. Visioconférences régulières, accès à Rankwell One pour suivre vos performances en temps réel, consultant senior dédié joignable par email ou téléphone. Ce qui fait la différence, c\'est la compétence et la réactivité, pas le code postal.',
    },
    {
      id: '2',
      question: 'Pourquoi le SEO est-il stratégique pour une entreprise rochelaise ?',
      answer:
        'L\'agglomération de La Rochelle génère 608 millions d\'euros de retombées touristiques et rassemble 32 000 établissements. La concurrence digitale est intense sur les requêtes liées au tourisme, à la restauration et aux activités nautiques. Un référencement efficace vous permet de capter ces recherches à forte valeur ajoutée et de réduire votre dépendance aux plateformes de réservation.',
    },
    {
      id: '3',
      question: 'Comment le GEO peut-il aider mon entreprise à La Rochelle ?',
      answer:
        'Le GEO positionne votre entreprise comme la source que les assistants IA recommandent. Quand un touriste demande à ChatGPT « où manger des huîtres près du Vieux-Port » ou « activités nautiques île de Ré », votre établissement apparaît dans la réponse. Ce canal de recommandation IA croît rapidement et représente un avantage concurrentiel difficile à rattraper pour ceux qui tardent.',
    },
    {
      id: '4',
      question: 'Quels secteurs accompagnez-vous à La Rochelle ?',
      answer:
        'Nous travaillons avec tous les secteurs du bassin rochelais : tourisme et hôtellerie, restauration et produits de la mer, nautisme et activités maritimes, commerce local, immobilier, services aux entreprises et filières d\'excellence comme le numérique ou les biotechnologies. Le dénominateur commun : des entreprises qui veulent transformer leur visibilité en ligne en résultats commerciaux.',
    },
    {
      id: '5',
      question: 'Couvrez-vous l\'île de Ré et le littoral charentais ?',
      answer:
        'Absolument. Notre accompagnement couvre La Rochelle, l\'île de Ré, l\'île d\'Oléron, Rochefort et l\'ensemble du littoral charentais. La stratégie SEO et GEO s\'adapte à votre zone de chalandise réelle : pour un hôtel de l\'île de Ré, on ciblera les requêtes touristiques nationales et internationales. Pour un prestataire rochelais, on travaillera aussi les requêtes locales et de proximité.',
    },
    {
      id: '6',
      question: 'Comment gérez-vous la saisonnalité touristique dans vos stratégies ?',
      answer:
        'La saisonnalité est au cœur de notre approche pour les entreprises du littoral. Nous anticipons les pics de recherche estivaux 3 à 4 mois en amont, optimisons le contenu saisonnier, et travaillons la visibilité sur les requêtes « hors saison » pour lisser votre acquisition. Le GEO est particulièrement efficace en pré-saison quand les voyageurs planifient via l\'IA.',
    },
    {
      id: '7',
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs arrivent entre 3 et 6 mois selon la concurrence sur vos requêtes cibles. Le GEO peut montrer des effets plus rapides sur les requêtes conversationnelles. Nous installons des indicateurs de progression dès le premier mois via Rankwell One, pour que vous ayez une visibilité claire sur l\'avancement, sans attendre un rapport trimestriel.',
    },
    {
      id: '8',
      question: 'Comment mesurez-vous concrètement les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés pour monitorer vos citations dans les réponses de ChatGPT, Perplexity et les AI Overviews de Google. Nous mesurons la fréquence de mention, le contexte de citation et l\'impact sur votre trafic et vos conversions. Tout est centralisé dans notre plateforme Rankwell One, consultable à tout moment.',
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
