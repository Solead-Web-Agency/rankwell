/**
 * DATA FR - Agence GEO & SEO à Montpellier
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Montpellier | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO à Montpellier. Optimisez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Languedoc.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Montpellier' },
  ],
  badge: 'montpellier',
  title: 'Agence GEO & SEO à Montpellier',
  description:
    'Développez la présence digitale de votre entreprise montpelliéraine avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des solutions adaptées au dynamisme de la métropole méditerranéenne.',
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
  badge: 'Votre partenaire digital à Montpellier',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises montpelliéraines',
  paragraphs: [
    "Montpellier, joyau méditerranéen et capitale du Languedoc, s'impose comme l'une des métropoles les plus dynamiques de France. Pôle d'excellence en santé et biotechnologies, vivier de startups numériques et cité universitaire de premier plan, elle attire talents et entrepreneurs du monde entier.",
    "Le GEO (Generative Engine Optimization) représente la nouvelle frontière du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Combinée au SEO traditionnel, cette double expertise garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence accompagne les acteurs montpelliérains dans leur croissance numérique, en déployant des stratégies personnalisées qui valorisent leur singularité tout en maximisant leur portée nationale et internationale.",
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
  title: 'GEO & SEO à Montpellier : les points clés',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché montpelliérain.',
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
      description: 'Stratégies calibrées pour le bassin économique montpelliérain et sa région.',
    },
    {
      icon: 'TrendingUp',
      title: 'Croissance mesurable',
      description: 'Augmentation tangible du trafic qualifié et des opportunités commerciales.',
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
  title: 'L\'optimisation pour les moteurs IA expliquée',
  subtitle:
    'Le GEO redéfinit les règles du référencement. Découvrez comment cette discipline fonctionne et ce qu\'elle peut apporter à votre entreprise montpelliéraine.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) regroupe les méthodes permettant à vos contenus d\'être sélectionnés comme sources par les moteurs IA — ChatGPT, Perplexity, AI Overviews de Google. Il ne s\'agit plus seulement d\'apparaître dans une liste de liens, mais d\'être la référence que l\'IA cite et recommande à ses utilisateurs.',
    },
    {
      id: 2,
      title: 'Contenus citation-ready',
      desc: 'Les IA recherchent des passages faciles à extraire et à reformuler : définitions nettes, listes hiérarchisées, données chiffrées avec leurs sources. Nous adaptons la structure de vos contenus pour qu\'ils remplissent ces critères et augmentent significativement vos chances d\'apparaître dans les réponses générées.',
    },
    {
      id: 3,
      title: 'Autorité thématique',
      desc: 'Les grands modèles de langage jugent si vous êtes une source crédible sur votre domaine. Un seul article ne suffit pas : c\'est la cohérence globale de votre présence en ligne — publications, profils, backlinks — qui construit cette légitimité perçue par les algorithmes.',
    },
    {
      id: 4,
      title: 'Réseau de mentions',
      desc: 'Les moteurs IA recoupent votre crédibilité en scrutant les mentions sur des sites tiers : presse spécialisée, études de marché, forums professionnels, annuaires sectoriels. Le netlinking conserve son importance, mais les critères de qualité et de contextualisation priment désormais sur le volume brut de liens.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Montpellier est la ville française qui connaît la plus forte croissance démographique depuis 30 ans. Avec plus de 70 000 étudiants et un écosystème tech en pleine expansion, la métropole représente un marché à fort potentiel où la visibilité digitale est cruciale.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour Montpellier',
  subtitle:
    'Notre démarche intègre les spécificités du marché montpelliérain pour déployer des stratégies véritablement performantes.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description:
        'Ranker sur un mot-clé sans valeur commerciale n\'a aucun intérêt. Notre indicateur principal, c\'est l\'impact concret sur votre business montpelliérain : leads qualifiés captés, chiffre d\'affaires attribuable au Search, coût d\'acquisition optimisé.',
      features: [
        'Audit de présence digitale',
        'Étude de la concurrence locale',
        'Analyse des recherches régionales',
        'Compréhension des comportements utilisateurs',
      ],
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description:
        'Ce que vous croyez vouloir n\'est pas toujours ce dont vous avez besoin. Notre valeur ajoutée inclut la capacité à recadrer une stratégie mal orientée. Un prestataire complaisant ne délivre pas de résultats pérennes.',
      features: [
        'Rédaction SEO et GEO',
        'Architecture sémantique',
        'Intégration du vocabulaire métier',
        'Valorisation des savoir-faire locaux',
      ],
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Un consultant senior dédié',
      description:
        'Celui qui élabore votre stratégie est le même qui la met en œuvre. Aucun intermédiaire, aucune délégation opaque. Vous bénéficiez d\'un référent unique qui connaît votre dossier en profondeur et le contexte concurrentiel local.',
      features: [
        'Amélioration de la vitesse',
        'Balisage Schema.org',
        'Responsive et expérience utilisateur',
        'Sécurité et conformité',
      ],
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Transparence via Rankwell One',
      description:
        'Notre plateforme relie vos métriques Search à vos données commerciales. Vous suivez l\'impact réel en temps réel au lieu de recevoir des vanity metrics dans un rapport statique. Chaque action est traçable et justifiable.',
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
  title: 'Est-ce pertinent pour vous ?',
  subtitle: 'Notre expertise s\'adresse à différents profils d\'entreprises. Voici les contextes où nous apportons une vraie valeur ajoutée.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous cherchez une expertise GEO',
      description: 'Vous avez compris que ChatGPT et les moteurs IA transforment les parcours de recherche. Vous voulez une agence qui sait optimiser pour ces nouveaux canaux, pas seulement pour les résultats Google classiques.',
    },
    {
      label: 'Vous voulez comprendre ce qui bloque votre SEO',
      description: 'Votre référencement stagne malgré vos investissements. Vous avez besoin d\'un diagnostic objectif pour identifier les vrais blocages techniques ou éditoriaux et définir les priorités d\'action.',
    },
    {
      label: 'Santé et MedTech',
      description: 'MedVallée, le BIC de Montpellier, AI Stroke, les pôles e-santé : la métropole est un hub majeur des sciences de la vie. Le GEO permet aux acteurs santé de se positionner comme sources de référence dans les réponses IA.',
    },
    {
      label: 'Numérique et IA',
      description: 'IA2M, French Tech Méditerranée, cybersécurité, agritech : Montpellier développe un écosystème tech diversifié et ambitieux. La visibilité sur les moteurs IA est un levier de croissance naturel pour ces entreprises.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription: 'La proximité géographique ne garantit pas la compétence. Une agence locale peut appliquer des méthodes obsolètes. Ce qui fait la différence, c\'est l\'expertise, la rigueur méthodologique et les résultats démontrables.',
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
  title: 'Nos services GEO & SEO à Montpellier',
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
        'Analyse complète de votre situation actuelle : présence web, positionnement, concurrence locale à Montpellier et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Élaboration de la stratégie',
      description:
        'Construction d\'un plan d\'action sur mesure combinant SEO et GEO, adapté à vos objectifs et au contexte montpelliérain.',
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
    'The best SEO strategy is to build a brand people actually want to search for.',
  author: 'Duane Forrester',
  role: 'Ancien responsable SEO, Bing/Microsoft',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Montpellier',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Quelle est la différence fondamentale entre SEO et GEO ?',
      answer:
        'Le SEO positionne votre site dans les résultats classiques de Google et Bing. Le GEO cible les moteurs IA (ChatGPT, Perplexity, AI Overviews) qui produisent des réponses synthétiques en citant leurs sources. Les deux disciplines fonctionnent en synergie : un bon socle SEO renforce votre légitimité aux yeux des algorithmes IA, et le GEO ouvre de nouveaux canaux d\'acquisition.',
    },
    {
      id: '2',
      question: 'Pourquoi une entreprise montpelliéraine doit-elle s\'intéresser au GEO ?',
      answer:
        'Montpellier connaît une croissance démographique et économique exceptionnelle, avec un afflux constant de talents et de créateurs d\'entreprises. Ces profils utilisent massivement les assistants IA pour sourcer prestataires et solutions. Ne pas apparaître dans ces réponses revient à ignorer un canal d\'acquisition en pleine expansion dans une métropole particulièrement réceptive à l\'innovation.',
    },
    {
      id: '3',
      question: 'Quels résultats peut-on attendre et sous quel délai ?',
      answer:
        'Les premiers résultats SEO se manifestent généralement sous 3 à 6 mois, selon l\'intensité concurrentielle de votre secteur. Le GEO peut produire des effets plus rapides si vos contenus sont déjà structurés et sourcés correctement. Nous définissons des indicateurs précis dès le démarrage — leads, citations IA, trafic qualifié — et les mesurons chaque mois dans un reporting transparent.',
    },
    {
      id: '4',
      question: 'Comment mesurez-vous la visibilité sur les moteurs IA ?',
      answer:
        'Nous déployons des outils propriétaires et tiers qui interrogent périodiquement les principaux LLMs sur vos requêtes stratégiques. Cela nous permet de tracker les citations de votre marque, de mesurer leur fréquence et leur contexte, et d\'identifier les contenus concurrents qui captent les recommandations IA à votre place.',
    },
    {
      id: '5',
      question: 'Faut-il privilégier le SEO ou le GEO pour une startup montpelliéraine ?',
      answer:
        'Nous préconisons une approche combinée dès le départ. Le SEO construit un socle de trafic organique stable sur les moteurs traditionnels. Le GEO prépare votre présence sur les plateformes IA en forte croissance. Pour une startup, investir simultanément dans les deux canaux dès la phase de lancement permet de construire une autorité thématique cohérente et durable.',
    },
    {
      id: '6',
      question: 'Le GEO est-il pertinent pour le secteur santé et MedTech ?',
      answer:
        'Particulièrement. Les professionnels de santé, chercheurs et décideurs hospitaliers utilisent de plus en plus les IA pour s\'informer sur les innovations médicales, les dispositifs et les prestataires. Montpellier étant un pôle majeur avec MedVallée et le BIC, se positionner comme source de référence dans les réponses IA constitue un avantage concurrentiel stratégique pour les acteurs locaux de la santé.',
    },
    {
      id: '7',
      question: 'Proposez-vous des formations sur le GEO ?',
      answer:
        'Oui, nous animons des sessions de formation concrètes et opérationnelles. Vos équipes apprennent à identifier les opportunités GEO propres à votre secteur, à structurer des contenus citation-ready et à évaluer leur présence dans les réponses IA. Chaque formation est personnalisée selon votre industrie et votre niveau de maturité digitale.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité à Montpellier ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise montpelliéraine vers de nouveaux sommets.',
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
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Nîmes', href: '/agence-geo-seo/france/nimes' },
    { label: 'Perpignan', href: '/agence-geo-seo/france/perpignan' },
    { label: 'Carcassonne', href: '/agence-geo-seo/france/carcassonne' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
