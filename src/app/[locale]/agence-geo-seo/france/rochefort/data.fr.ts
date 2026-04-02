/**
 * DATA FR - Agence GEO & SEO à Rochefort
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Rochefort - Rankwell',
  description:
    'Agence spécialisée en GEO et SEO à Rochefort. Optimisez votre visibilité sur Google et les moteurs IA pour conquérir le marché charentais.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Rochefort' },
  ],
  badge: 'rochefort',
  title: 'Agence GEO & SEO à Rochefort',
  description:
    'Cité historique de la Corderie Royale et berceau de l\'Hermione, Rochefort conjugue patrimoine maritime et dynamisme touristique. Notre agence accompagne les entreprises rochefortaises dans leur stratégie de référencement SEO et d\'optimisation pour les moteurs IA.',
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
  badge: 'GEO & SEO à Rochefort',
  accentColor: 'rw-blue' as const,
  title: 'Développez votre visibilité digitale à Rochefort',
  paragraphs: [
    'Rochefort tire parti de son héritage naval exceptionnel pour attirer visiteurs et touristes du monde entier. La reconstruction de l\'Hermione et la Corderie Royale ont redynamisé l\'économie locale, créant un environnement où la visibilité en ligne devient un atout majeur.',
    'Notre méthodologie intègre le SEO traditionnel aux techniques du GEO (Generative Engine Optimization). Votre entreprise sera ainsi visible sur Google et recommandée par ChatGPT, Perplexity ou Google SGE lorsque des visiteurs préparent leur séjour.',
    'De l\'Arsenal aux thermes, du centre-ville aux stations balnéaires voisines, nous adaptons nos stratégies aux réalités locales et aux comportements de recherche des touristes.',
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
  title: 'L\'essentiel de notre service GEO & SEO à Rochefort',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement en référencement',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Target',
      title: 'Objectif',
      description: 'Dominer les résultats Google et IA sur le marché rochefortais',
    },
    {
      icon: 'Users',
      title: 'Pour qui',
      description: 'Acteurs du tourisme patrimonial, commerces, thermes et services locaux',
    },
    {
      icon: 'TrendingUp',
      title: 'Bénéfices',
      description: 'Trafic qualifié, réservations directes et notoriété locale',
    },
    {
      icon: 'Settings',
      title: 'Méthode',
      description: 'Audit complet, stratégie patrimoniale, contenu local et suivi des performances',
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
  title: 'Le GEO : visibilité IA pour Rochefort',
  subtitle:
    'Le Generative Engine Optimization transforme la captation de visiteurs à Rochefort',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Qu\'est-ce que le GEO ?',
      description:
        'Le GEO (Generative Engine Optimization) optimise votre présence pour les moteurs de recherche alimentés par l\'IA. Quand un touriste demande à ChatGPT « que visiter à Rochefort en Charente-Maritime ? », le GEO fait en sorte que votre site ou activité soit recommandé en priorité. L\'enjeu n\'est plus seulement d\'apparaître sur Google, mais de devenir la source que l\'IA cite spontanément.',
    },
    {
      icon: 'Eye',
      title: 'Pourquoi le GEO compte à Rochefort ?',
      description:
        'L\'Hermione et la Corderie Royale attirent plus de 500 000 visiteurs par an, des passionnés d\'histoire maritime qui préparent leur séjour en ligne. Ces voyageurs utilisent de plus en plus les assistants IA pour organiser leurs visites, trouver un hébergement ou découvrir les activités locales. Être recommandé par ces IA, c\'est capter cette audience avant vos concurrents.',
    },
    {
      icon: 'BarChart3',
      title: 'Synergie SEO + GEO',
      description:
        'Le SEO positionne votre site dans les résultats classiques de Google, le GEO vous fait citer dans les réponses conversationnelles des IA. À Rochefort, où le tourisme patrimonial génère des requêtes très spécifiques, cette double couverture capte aussi bien le visiteur qui tape une recherche Google que celui qui interroge Perplexity ou ChatGPT.',
    },
    {
      icon: 'Lightbulb',
      title: 'Contenu patrimonial et culturel',
      description:
        'Les moteurs génératifs privilégient le contenu expert, documenté et culturellement riche. Nos équipes produisent des contenus qui valorisent le patrimoine naval de Rochefort, l\'histoire de l\'Arsenal et les savoir-faire locaux, tout en respectant les critères de citation des IA : données sourcées, structure claire, expertise vérifiable.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le contexte économique rochefortais',
  text: 'Rochefort est le deuxième pôle industriel de Charente-Maritime, porté par l\'aéronautique (Airbus Atlantic, plus de 2 000 emplois), le thermalisme — première station thermale du centre-ouest de la France — et un tourisme patrimonial dynamique avec plus de 500 000 visiteurs annuels pour l\'Hermione et la Corderie Royale. Un écosystème diversifié où la visibilité digitale devient un levier de croissance incontournable.',
  icon: 'TrendingUp' as const,
};

// ============================================
// APPROCHE DATA
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une stratégie pensée pour le marché rochefortais',
  subtitle:
    'Notre expertise du patrimoine et du tourisme nous permet de déployer des actions adaptées',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Analyse du marché local',
      description:
        'Étude approfondie de la concurrence rochefortaise, cartographie des requêtes patrimoniales, touristiques et industrielles, et détection des opportunités de positionnement sur les thématiques maritimes, thermales et aéronautiques propres au bassin.',
    },
    {
      icon: 'FileText',
      title: 'Contenu patrimonial authentique',
      description:
        'Production de contenus qui valorisent l\'histoire navale de Rochefort, le patrimoine de l\'Arsenal et l\'expertise de votre entreprise. Des textes documentés, structurés pour le SEO et optimisés pour être cités par les IA quand un visiteur prépare son séjour en Charente-Maritime.',
    },
    {
      icon: 'Settings',
      title: 'Excellence technique',
      description:
        'Performance mobile optimale pour les touristes en déplacement, balisage Schema.org adapté aux activités culturelles et commerciales, vitesse de chargement irréprochable. Un socle technique solide qui soutient toutes les actions de visibilité.',
    },
    {
      icon: 'Award',
      title: 'Autorité locale renforcée',
      description:
        'Stratégie de netlinking ciblant les sites patrimoniaux, les offices de tourisme, les médias charentais et les publications culturelles de référence. Chaque lien acquis renforce votre signal de confiance auprès de Google et des algorithmes IA.',
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
    'Notre expertise s\'adresse aux entreprises qui veulent transformer leur visibilité digitale en résultats concrets. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez capter le flux touristique de Rochefort',
      description:
        'Plus de 500 000 visiteurs passent chaque année par l\'Hermione et la Corderie Royale. Votre site existe mais ne capte pas assez de ces recherches touristiques. Vous avez besoin d\'une stratégie SEO et GEO qui positionne votre activité là où ces visiteurs préparent leur séjour.',
    },
    {
      label: 'Vous cherchez une visibilité IA pour votre entreprise',
      description:
        'Les touristes interrogent ChatGPT et Perplexity pour organiser leurs visites en Charente-Maritime. Vous voulez une agence qui sait optimiser pour ces assistants IA, pas seulement pour les résultats classiques de Google.',
    },
    {
      label: 'Thermalisme et bien-être',
      description:
        'Rochefort abrite la première station thermale du centre-ouest de la France. Établissements thermaux, spas et prestataires bien-être : le référencement capte les curistes qui recherchent des soins spécifiques et comparent les destinations thermales en ligne avant de réserver.',
    },
    {
      label: 'Aéronautique et industrie',
      description:
        'Avec Airbus Atlantic et plus de 2 000 emplois dans le secteur aéronautique, Rochefort est un pôle industriel majeur. Sous-traitants, bureaux d\'études, entreprises B2B : une présence Search performante attire des prospects qualifiés au-delà du bassin local.',
    },
  ],
  ctaTitle: 'Point de vigilance',
  ctaDescription:
    'Une agence locale n\'est pas forcément mieux placée pour votre référencement. Ce qui compte, c\'est la maîtrise des techniques SEO et GEO, et les résultats démontrés.',
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
  title: 'Nos services GEO & SEO à Rochefort',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Diagnostic technique, sémantique et concurrentiel adapté aux enjeux rochefortais. On identifie les freins à votre visibilité et les actions prioritaires.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu, balisage Schema.org et performance mobile. Les fondations d\'un référencement solide pour le tourisme et l\'industrie.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens qualitatifs depuis les sites patrimoniaux, offices de tourisme et médias charentais. Pas de réseaux douteux, une stratégie ciblée.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO-ready qui valorisent votre expertise locale, se positionnent sur Google et sont cités par les assistants IA.',
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
    'Une méthodologie éprouvée pour des résultats mesurables à Rochefort',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      number: 1,
      title: 'Découverte & Audit',
      description:
        'Analyse de votre positionnement et identification des opportunités de croissance digitale.',
    },
    {
      number: 2,
      title: 'Stratégie personnalisée',
      description:
        'Élaboration d\'un plan d\'action SEO et GEO adapté à vos objectifs.',
    },
    {
      number: 3,
      title: 'Déploiement & Optimisation',
      description:
        'Mise en œuvre des recommandations et création de contenus.',
    },
    {
      number: 4,
      title: 'Mesure & Ajustement',
      description:
        'Suivi des indicateurs et optimisations continues.',
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
    ['Objectif', 'Ranker dans les résultats Google', 'Être cité dans les réponses IA'],
    ['Format', 'Liens bleus, rich snippets', 'Réponses conversationnelles'],
    ['Recherche type', '"visite Hermione Rochefort"', '"que visiter à Rochefort ?"'],
    ['Contenu', 'Optimisé mots-clés', 'Structuré, expert, culturel'],
    ['Mesure', 'Positions, trafic, CTR', 'Citations, mentions, part de voix'],
    ['Approche', 'Technique et backlinks', 'Autorité et pertinence'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote:
    'As search engine technology improves, the presentation of those answers will improve to the point where search engines may not even need to recommend any website links in response to a user\'s query.',
  author: 'Eli Schwartz',
  role: 'Author, Product-Led SEO',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Rochefort',
  accentColor: 'rw-blue' as const,
  items: [
    {
      question: 'Pourquoi le SEO est-il important pour une entreprise à Rochefort ?',
      answer:
        'Rochefort accueille plus de 500 000 visiteurs patrimoniaux par an et constitue le deuxième pôle industriel de Charente-Maritime avec l\'aéronautique et le thermalisme. Ce dynamisme crée une concurrence digitale croissante. Un référencement performant capte les recherches des touristes préparant leur séjour, des curistes comparant les stations thermales et des entreprises industrielles cherchant des partenaires locaux.',
    },
    {
      question: 'Comment le GEO peut-il aider mon activité à Rochefort ?',
      answer:
        'Le GEO vous positionne comme la source recommandée par les assistants IA. Quand un voyageur demande à ChatGPT « que visiter à Rochefort en famille ? » ou « meilleur restaurant près de la Corderie Royale ? », le GEO travaille pour que votre activité soit citée en priorité. C\'est un canal d\'acquisition complémentaire à Google que la plupart de vos concurrents locaux ignorent encore.',
    },
    {
      question: 'Combien de temps avant de voir des résultats concrets ?',
      answer:
        'En SEO, les premiers résultats significatifs apparaissent entre 3 et 6 mois selon votre point de départ et la concurrence sur vos thématiques. Le GEO peut produire des effets plus rapides sur les requêtes conversationnelles liées au tourisme et au patrimoine. Nous fixons des indicateurs de progression dès le démarrage et vous donnons accès à notre plateforme Rankwell One pour un suivi transparent.',
    },
    {
      question: 'Accompagnez-vous le secteur du thermalisme ?',
      answer:
        'Oui. Rochefort abrite la première station thermale du centre-ouest de la France. Nous accompagnons les établissements thermaux et les prestataires bien-être avec des stratégies SEO et GEO adaptées : ciblage des pathologies recherchées par les curistes, optimisation locale, contenu expert sur les soins proposés. L\'objectif est d\'augmenter les réservations directes sans dépendre uniquement des plateformes intermédiaires.',
    },
    {
      question: 'Travaillez-vous aussi avec le secteur aéronautique ?',
      answer:
        'Absolument. Avec Airbus Atlantic et son écosystème de sous-traitants, Rochefort est un pôle aéronautique important. Les entreprises B2B de ce secteur ont besoin d\'une visibilité Search qui dépasse le bassin local pour attirer des prospects nationaux et internationaux. Notre expertise SEO et GEO s\'adapte parfaitement aux enjeux de la filière industrielle.',
    },
    {
      question: 'Couvrez-vous les communes voisines de Rochefort ?',
      answer:
        'Oui. Nous pouvons étendre votre stratégie de référencement aux communes du bassin rochefortais et aux stations balnéaires voisines : Fouras, île d\'Aix, Châtelaillon-Plage, Tonnay-Charente. Le maillage géographique est un levier SEO local puissant pour capter les recherches des visiteurs qui explorent l\'ensemble de la côte charentaise.',
    },
    {
      question: 'La collaboration à distance fonctionne-t-elle vraiment ?',
      answer:
        'Parfaitement. Nous accompagnons plus de 350 entreprises partout en France depuis 2017 avec cette méthode. Visioconférences régulières, accès partagé à Rankwell One pour le suivi en temps réel, consultant senior dédié joignable par email et téléphone. Ce qui détermine la qualité d\'un accompagnement SEO, c\'est l\'expertise et la méthodologie, pas la proximité géographique.',
    },
    {
      question: 'Comment mesurez-vous les performances du GEO ?',
      answer:
        'Nous utilisons des outils spécialisés pour tracer vos citations dans les réponses de ChatGPT, Perplexity et les AI Overviews de Google. Nous analysons les requêtes où votre entreprise apparaît, mesurons la fréquence de citation face à vos concurrents et suivons l\'évolution de votre part de voix sur ces canaux. Ces données sont intégrées à votre tableau de bord Rankwell One pour une vision complète.',
    },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à développer votre visibilité à Rochefort ?',
  description:
    'Discutons de votre projet et élaborons ensemble une stratégie GEO & SEO adaptée.',
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
    { label: 'La Rochelle', href: '/agence-geo-seo/france/la-rochelle' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Poitiers', href: '/agence-geo-seo/france/poitiers' },
    { label: 'Angoulême', href: '/agence-geo-seo/france/angouleme' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
  ],
};
