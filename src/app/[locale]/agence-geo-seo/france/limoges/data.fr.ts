/**
 * DATA FR - Agence GEO & SEO à Limoges
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Limoges | Référencement IA & Traditionnel',
  description:
    'Agence experte en GEO (Generative Engine Optimization) et SEO à Limoges. Optimisez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Limousin.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Limoges' },
  ],
  badge: 'limoges',
  title: 'Agence GEO & SEO à Limoges',
  description:
    'Développez la présence digitale de votre entreprise limougeaude grâce à notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des solutions adaptées au tissu économique local.',
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
  badge: 'Votre partenaire digital à Limoges',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises limougeaudes',
  paragraphs: [
    "Limoges, capitale de la porcelaine et du feu, est aussi un centre économique dynamique au cœur de la Nouvelle-Aquitaine. Du luxe artisanal aux industries émergentes, les entreprises de la région doivent aujourd'hui conquérir leur place dans un univers digital en constante mutation.",
    "Le GEO (Generative Engine Optimization) représente la nouvelle frontière du référencement, ciblant les moteurs de recherche propulsés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Conjuguée au SEO classique, cette approche duale garantit une couverture optimale de tous les canaux de recherche.",
    "Notre agence accompagne les acteurs limougeauds dans leur transformation numérique, en leur offrant des stratégies personnalisées qui respectent leur identité tout en maximisant leur portée en ligne.",
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
  title: 'GEO & SEO à Limoges : les fondamentaux',
  subtitle: 'Tout ce qu\'il faut retenir de notre expertise pour le marché limougeaud.',
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
      description: 'Maintien des positions sur Google et les autres moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Stratégie locale',
      description: 'Approche calibrée pour le tissu économique limougeaud et néo-aquitain.',
    },
    {
      icon: 'TrendingUp',
      title: 'Résultats concrets',
      description: 'Augmentation mesurable du trafic qualifié et des conversions.',
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
  title: 'L\'optimisation pour les moteurs IA décryptée',
  subtitle:
    'Le GEO transforme le paysage du référencement. Découvrez comment cette discipline fonctionne et en quoi elle peut propulser votre entreprise limougeaude.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Fonctionnement des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google AI Overviews synthétisent des informations issues de multiples sources pour formuler des réponses contextualisées. Pour un porcelainier limougeaud ou une entreprise du technopôle ESTER, être identifié comme source fiable par ces systèmes conditionne directement la captation de nouveaux clients.',
    },
    {
      icon: 'FileText',
      title: 'Contenu structuré et autoritaire',
      description:
        'Les modèles de langage valorisent les contenus bien organisés, factuels et démontrant une expertise véritable. Des définitions claires, des données chiffrées avec leurs sources et une architecture sémantique rigoureuse augmentent considérablement vos chances d\'être cité dans les réponses IA.',
    },
    {
      icon: 'Award',
      title: 'Signaux de confiance',
      description:
        'Mentions dans la presse spécialisée, citations sur des sites institutionnels, backlinks depuis des annuaires professionnels reconnus : ces signaux convergents renforcent la crédibilité que les moteurs IA vous attribuent et déterminent si votre entreprise est recommandée ou ignorée.',
    },
    {
      icon: 'ChartLine',
      title: 'Performance quantifiable',
      description:
        'Nos outils spécialisés interrogent régulièrement les IA sur des requêtes liées à votre activité pour mesurer votre présence, suivre l\'évolution de votre part de voix et identifier les ajustements nécessaires. Chaque action est reliée à un indicateur mesurable.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique limougeaud',
  text: "Limoges Métropole concentre un tissu industriel de 600 entreprises et 9 200 salariés, soit 14,3 % de l'emploi salarié de la communauté urbaine. Le technopôle ESTER rassemble 186 structures et 2 600 emplois sur 210 hectares. Avec des fleurons comme Legrand (leader mondial de l'appareillage électrique), Bernardaud (porcelaine de luxe) et un secteur numérique qui génère 3 000 emplois locaux, la compétition digitale est réelle.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie éprouvée pour Limoges',
  subtitle:
    'Notre démarche intègre les particularités du marché limougeaud pour déployer des stratégies véritablement efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché local',
      description:
        'Étude approfondie de votre secteur à Limoges : cartographie de vos concurrents directs et indirects, analyse des requêtes spécifiques au territoire limousin et évaluation de votre visibilité actuelle sur Google comme dans les réponses des moteurs IA.',
      features: [
        'Audit de présence digitale',
        'Cartographie concurrentielle',
        'Analyse des recherches locales',
        'Étude des comportements utilisateurs',
      ],
    },
    {
      icon: 'FileText',
      title: 'Création de contenus experts',
      description:
        'Élaboration de contenus qui positionnent votre entreprise comme référence dans votre domaine. Chaque texte est conçu pour ranker sur Google et être cité par les IA : données chiffrées sourcées, structure sémantique avancée et vocabulaire métier maîtrisé, du luxe artisanal à l\'électronique de pointe.',
      features: [
        'Rédaction optimisée SEO et GEO',
        'Structuration sémantique avancée',
        'Intégration du vocabulaire métier',
        'Valorisation du savoir-faire local',
      ],
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Configuration de votre site pour satisfaire les critères de performance des moteurs traditionnels et faciliter l\'extraction d\'informations par les IA : temps de chargement réduits, balisage Schema.org complet, architecture de contenu logique et expérience mobile sans friction.',
      features: [
        'Amélioration des temps de chargement',
        'Structure de données Schema.org',
        'Optimisation mobile et UX',
        'Sécurisation et accessibilité',
      ],
    },
    {
      icon: 'BarChart3',
      title: 'Pilotage et optimisation continue',
      description:
        'Suivi régulier via notre plateforme Rankwell One : positions Google, mentions dans les réponses IA, trafic qualifié et conversions. Chaque mois, vous recevez un rapport détaillé avec les résultats obtenus, les actions en cours et les priorités pour la période suivante.',
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
  title: 'Est-ce pertinent pour votre entreprise limougeaude ?',
  subtitle:
    'Notre expertise s\'adresse à des profils variés. Voici les situations où notre accompagnement SEO et GEO produit un impact mesurable.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Votre site ne génère pas assez de leads ou de ventes',
      description: 'Vous avez investi dans un site web mais les résultats ne suivent pas. Vous cherchez un partenaire qui sait transformer la visibilité en chiffre d\'affaires, avec une approche structurée et des indicateurs de performance clairs et transparents.',
    },
    {
      label: 'Vous voulez anticiper l\'impact des IA sur votre marché',
      description: 'ChatGPT et Perplexity changent la manière dont vos clients trouvent des fournisseurs. Vous souhaitez une agence qui maîtrise le GEO pour que votre entreprise soit citée comme référence dans les réponses de ces nouveaux moteurs.',
    },
    {
      label: 'Porcelainiers, émailleurs et métiers d\'art du Limousin',
      description: 'L\'Indication Géographique « Porcelaine de Limoges » est un atout mondial. Mais encore faut-il que les acheteurs internationaux vous trouvent en ligne. Le GEO vous positionne comme expert quand les IA répondent aux questions sur la porcelaine, l\'émail ou les arts du feu.',
    },
    {
      label: 'Entreprises tech et industrielles du technopôle ESTER',
      description: 'ESTER rassemble 186 structures et 2 600 emplois dans l\'innovation, l\'électronique et les hyperfréquences. Dans cet écosystème compétitif, le référencement SEO et GEO vous différencie de vos concurrents et attire les décideurs B2B qui recherchent des partenaires technologiques.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'La proximité géographique ne garantit pas la compétence. Ce qui compte, c\'est l\'expertise, la méthodologie et les résultats. Rankwell accompagne des entreprises partout en France depuis 2017.',
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
  title: 'Nos services GEO & SEO à Limoges',
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
        'Analyse détaillée de votre situation actuelle : présence web, positionnement, concurrence locale à Limoges et opportunités à saisir.',
    },
    {
      number: 2,
      title: 'Élaboration de la stratégie',
      description:
        'Construction d\'un plan d\'action personnalisé combinant SEO et GEO, adapté à vos objectifs et au contexte limougeaud.',
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
    'Mobile-first indexing wasn\'t really about mobile. It was more about entities. Search engines are moving beyond simple keywords to grasping the relationships between concepts and entities.',
  author: 'Cindy Krum',
  role: 'CEO & Founder, MobileMoxie',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Limoges',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Accompagnez-vous des entreprises à Limoges sans y être implanté ?',
      answer:
        'Oui, depuis 2017 nous travaillons avec des entreprises dans toute la France via une collaboration à distance parfaitement rodée. Visioconférences régulières, un consultant senior dédié qui connaît votre dossier dans le détail, et un accès permanent à notre plateforme Rankwell One pour suivre vos performances. Nos clients limougeauds bénéficient de la même qualité de service que ceux basés à Paris.',
    },
    {
      question: 'Quelle est la différence entre SEO et GEO ?',
      answer:
        'Le SEO vise les résultats classiques de Google : les liens bleus et les rich snippets. Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. Les deux sont complémentaires et nous les intégrons systématiquement dans nos stratégies pour maximiser votre visibilité sur l\'ensemble des canaux de recherche.',
    },
    {
      question: 'Le GEO est-il utile pour les métiers d\'art et la porcelaine de Limoges ?',
      answer:
        'Tout à fait. La porcelaine de Limoges bénéficie d\'une Indication Géographique reconnue et d\'un rayonnement international. Quand un acheteur ou un collectionneur interroge une IA sur la porcelaine française, le GEO garantit que votre manufacture ou votre atelier est cité comme source de référence. C\'est un levier puissant pour le marché du luxe et de l\'artisanat d\'art.',
    },
    {
      question: 'Quels secteurs accompagnez-vous à Limoges ?',
      answer:
        'Nous accompagnons des entreprises de tous secteurs : porcelainiers et métiers d\'art, entreprises industrielles et technologiques du pôle ESTER, commerces et e-commerçants, professions libérales, acteurs du tourisme et de l\'hôtellerie. Notre critère de sélection est simple : des entreprises qui veulent générer du business mesurable via le Search, pas juste du trafic.',
    },
    {
      question: 'Combien de temps faut-il pour observer des résultats ?',
      answer:
        'Les premiers résultats SEO significatifs se manifestent entre 3 et 6 mois selon votre positionnement de départ et l\'intensité concurrentielle de votre secteur. Pour le GEO, l\'intégration dans les réponses IA peut être plus rapide, surtout quand le contenu est de haute qualité. Nous définissons des objectifs réalistes dès le départ et vous donnons une feuille de route transparente.',
    },
    {
      question: 'Comment suivez-vous la visibilité dans les réponses IA ?',
      answer:
        'Nous utilisons des outils dédiés qui interrogent régulièrement les principaux moteurs IA (ChatGPT, Perplexity, Google AI Overviews) sur des requêtes pertinentes pour votre activité. Nous mesurons la fréquence de vos citations, votre part de voix par rapport aux concurrents et l\'évolution dans le temps. Ces données sont accessibles sur votre tableau de bord Rankwell One.',
    },
    {
      question: 'Quels sont vos tarifs pour une entreprise limougeaude ?',
      answer:
        'Nos tarifs varient selon vos objectifs, votre secteur et le niveau de concurrence. Nous proposons des forfaits mensuels pour un accompagnement continu ou des interventions ponctuelles (audit, stratégie de contenu). Un premier échange de 30 minutes en visio nous permet de comprendre votre situation et de vous donner une estimation précise, sans engagement.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité à Limoges ?',
  description:
    'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise limougeaude vers de nouveaux sommets.',
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
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Pau', href: '/agence-geo-seo/france/pau' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
    { label: 'Rochefort', href: '/agence-geo-seo/france/rochefort' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
  ],
};
