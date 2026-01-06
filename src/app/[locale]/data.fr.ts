/**
 * ============================================
 * DATA - HOMEPAGE (/)
 * ============================================
 *
 * Ce fichier contient TOUT le contenu textuel de la homepage.
 * Pour modifier le contenu, éditez uniquement ce fichier.
 *
 * Sections ordonnées selon leur apparition dans page.tsx :
 * 1. metadata
 * 2. heroData
 * 3. introData
 * 4. quote1Data
 * 5. servicesData
 * 6. processData
 * 7. pointVigilanceData
 * 8. whyUsData
 * 9. quote2Data
 * 10. faqData
 * 11. ctaData
 */

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Agence Marketing Digital & Webmarketing | Rankwell',
  description: 'Rankwell, agence digitale spécialisée en marketing digital et performance Search. Nous accompagnons les entreprises dans leur croissance avec une approche data-driven. Paris & Dubaï.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  badge: 'Agence GEO & SEO, SEA, Data',
  title: 'Agence marketing digital orientée performanceux',
  description: 'Votre partenaire digital pour générer du business via le Search. SEO, SEA, Data : on construit votre présence sur Google et sur les moteurs IA avec une approche 100% résultats.',
  primaryCta: {
    text: 'Discutons de votre projet',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Découvrir notre approche',
    href: '/agence-geo-seo',
  },
  trustIndicator: {
    main: '4,7/5 sur Google',
    sub: 'Voir les avis',
    href: 'https://www.google.com/search?sa=X&sca_esv=1cf06cdd23137a81&q=RANKWELL+FRANCE+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDIwMDIzBGIzExNTcwNTS7MNjIyvGEWCHP28w109fBTcgCxnVwXHssziRaxYhQHq9gl4SAAAAA&rldimm=8200261026644570596&tbm=lcl&hl=fr-FR&ved=2ahUKEwjXkdHK1eeRAxWVUKQEHclQAqAQ9fQKegQIVBAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews',
  },
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: "L'évolution du Search",
  title: 'Le Search a changé. Et vous ?',
  paragraphs: [
    "Google n'est plus seul. ChatGPT, Perplexity, Gemini... Vos futurs clients posent leurs questions à des IA. Ces moteurs synthétisent, recommandent et citent des sources. Être bien positionné sur Google ne suffit plus.",
    "Il faut être <strong>la source de référence</strong>, quel que soit le moteur. Notre agence digitale ne sépare pas GEO et SEO. Les fondamentaux sont les mêmes. Ce qui change, c'est la surface de jeu.",
    "Découvrez comment notre approche <strong>business centrix</strong> combine SEO, GEO, SEA et Data pour générer du business, pas juste du trafic.",
  ],
  highlightsTitle: 'Ce qui nous définit',
  highlights: [
    { strong: '+350 clients', text: 'accompagnés depuis 2015 avec une approche 100% orientée résultats' },
    { strong: 'GEO natif', text: ': optimisation pour Google ET les moteurs IA dès le départ' },
    { strong: '2 bureaux', text: 'à Paris et Dubaï pour une vision internationale' },
    { strong: 'Rankwell One', text: ': notre plateforme de pilotage centralisé pour voir vos performances en temps réel' },
    { strong: 'Business centrix', text: ': on mesure en conversions et CA, pas en positions' },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The future of search is about understanding intent and delivering the best answer, not just the best link.',
  author: 'Sundar Pichai',
  role: 'CEO Google & Alphabet',
};

// ============================================
// 5. SERVICES DATA
// ============================================
export const servicesData = {
  badge: 'Nos Expertises',
  title: 'Trois expertises complémentaires pour votre croissance',
  description: "Nous combinons GEO & SEO, SEA et Data pour couvrir l'ensemble du parcours Search. Chaque expertise se renforce mutuellement.",
  items: [
    {
      id: 1,
      title: 'GEO & SEO',
      description: 'Le référencement naturel pensé pour Google ET les moteurs génératifs. Audit technique, stratégie sémantique, netlinking, création de contenu. Une approche complète pour dominer les résultats de recherche classiques et les réponses IA.',
      href: '/agence-geo-seo',
      buttonText: "Découvrir l'expertise",
      // image: '/images/homepage/expertise-geo-seo.webp',
      imageAlt: 'Expertise GEO & SEO Rankwell',
    },
    {
      id: 2,
      title: 'SEA',
      description: 'Google Ads piloté par la performance. Set-up, optimisation continue, analyse sémantique. Chaque euro investi doit rapporter. On ne fait pas de la dépense publicitaire, on génère du business.',
      href: '/agence-sea',
      buttonText: "Découvrir l'expertise",
      // image: '/images/homepage/expertise-sea.webp',
      imageAlt: 'Expertise SEA Rankwell',
    },
    {
      id: 3,
      title: 'Data & Analytics',
      description: 'Pas de décision sans donnée fiable. Tracking, Analytics, CRO. On mesure ce qui compte, on optimise ce qui convertit. La data au service de votre croissance, pas de dashboards inutiles.',
      href: '/agence-data',
      buttonText: "Découvrir l'expertise",
      // image: '/images/homepage/expertise-data.webp',
      imageAlt: 'Expertise Data & Analytics Rankwell',
    },
  ],
};

// ============================================
// 6. PROCESS DATA
// ============================================
export const processData = {
  badge: 'Process',
  title: 'Comment travaillons-nous avec nos clients ?',
  description: "Nous ne débarquons pas avec une méthode toute faite. Chaque accompagnement commence par l'écoute et l'analyse. C'est l'approche <strong>business centrix</strong>.",
  steps: [
    {
      number: '1',
      title: 'Immersion',
      description: 'Nous plongeons dans votre univers. Marché, concurrents, clients, objectifs.',
    },
    {
      number: '2',
      title: 'Stratégie',
      description: 'Nous définissons les leviers prioritaires. Ce qui va générer du business.',
    },
    {
      number: '3',
      title: 'Exécution',
      description: 'Nous produisons, optimisons, itérons. Contenus, technique, liens, campagnes.',
    },
    {
      number: '4',
      title: 'Pilotage',
      description: 'Nous mesurons, ajustons, accélérons. Avec Rankwell One, tout en temps réel.',
    },
  ],
};

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: "L'enjeu",
  text: "Un site bien positionné sur Google mais absent des réponses IA perd progressivement des opportunités. Les moteurs génératifs ne crawlent pas comme Google. Ils évaluent l'autorité, la structure et la citabilité des contenus.",
};

// ============================================
// 8. WHY US DATA
// ============================================
export const whyUsData = {
  badge: 'Pourquoi nous choisir',
  title: 'Pourquoi choisir',
  titleHighlight: 'Rankwell ?',
  description: 'Quatre éléments nous différencient des autres agences Search. Chacun reflète notre approche business centrix.',
  ctaText: 'Discutons de votre projet',
  ctaHref: '/contact',
  cards: [
    {
      icon: 'Bot',
      title: 'GEO intégré dès le départ',
      description: "L'optimisation pour les IA génératives est native dans notre approche. Pas un add-on.",
    },
    {
      icon: 'Target',
      title: 'Business centrix',
      description: "Nous parlons conversions et CA. Votre ranking nous intéresse quand il génère du chiffre d'affaires.",
    },
    {
      icon: 'ChartBar',
      title: 'Data-driven, vraiment',
      description: 'Rankwell One centralise vos performances Search. Vous savez ce qui marche en temps réel.',
    },
    {
      icon: 'Globe',
      title: 'Paris & Dubaï',
      description: 'Deux bureaux, une vision internationale. Nous accompagnons les entreprises qui pensent grand.',
    },
  ],
};

// ============================================
// 9. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 10. FAQ DATA
// ============================================
export const faqData = {
  badge: 'FAQ',
  title: 'Questions fréquentes',
  description: 'Les réponses aux questions que vous vous posez sur notre approche GEO & SEO, nos méthodes et nos résultats.',
  items: [
    {
      id: '1',
      question: "Qu'est-ce que le GEO et pourquoi est-ce important ?",
      answer: "Le GEO (Generative Engine Optimization) est l'optimisation pour les moteurs de recherche à IA générative. ChatGPT, Perplexity, Gemini et Google SGE ne fonctionnent pas comme le Google classique. Ils synthétisent l'information et citent des sources. Pour être recommandé par ces IA, votre contenu doit être structuré différemment : phrases courtes et citables, données factuelles sourcées, autorité thématique démontrée. Les entreprises optimisées pour le GEO captent une audience croissante avant leurs concurrents.",
    },
    {
      id: '2',
      question: 'Quelle différence entre votre approche et une agence SEO classique ?',
      answer: "Notre différence majeure est l'intégration native du GEO dans chaque projet. Une agence SEO classique optimise pour Google. Nous optimisons pour l'ensemble des moteurs de recherche, IA incluses. L'autre différence est l'approche business centrix. Nous ne parlons pas de positions. Nous parlons de conversions et de chiffre d'affaires. Chaque action est mesurée par son impact business.",
    },
    {
      id: '3',
      question: 'Combien de temps pour voir les premiers résultats ?',
      answer: "Les premiers résultats visibles dépendent du levier activé. Le SEA produit du trafic dès le premier jour. Le SEO et le GEO demandent 3 à 6 mois pour les premiers effets significatifs. Les résultats consolidés en référencement naturel s'observent généralement à 12 mois. C'est un investissement long terme qui construit des actifs durables.",
    },
    {
      id: '4',
      question: "Travaillez-vous avec tous les secteurs d'activité ?",
      answer: "Nous accompagnons des entreprises de secteurs variés : e-commerce, B2B, SaaS, services, industrie. Le secteur importe moins que l'ambition. Nos clients partagent un point commun : ils veulent générer du business via le Search, pas juste du trafic. Ils recherchent un partenaire stratégique, pas un simple exécutant.",
    },
    {
      id: '5',
      question: 'Pourquoi choisir une agence marketing digital spécialisée Search ?',
      answer: "Une agence webmarketing généraliste disperse ses efforts sur tous les canaux. Notre spécialisation Search (SEO, SEA, GEO) nous permet d'aller plus loin dans l'expertise et d'obtenir des résultats concrets. Le Search reste le canal d'acquisition le plus rentable à long terme : il capte une intention d'achat là où les réseaux sociaux créent de la notoriété. C'est pourquoi nous concentrons 100% de notre énergie sur ce levier.",
    },
  ],
};

// ============================================
// 11. CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à',
  titleHighlight: 'dominer le Search ?',
  description: "Audit gratuit de votre visibilité actuelle sur Google et les moteurs IA. On identifie vos opportunités et on vous montre le chemin.",
  secondaryDescription: "Première étape : un échange de 30 minutes pour comprendre vos enjeux. Sans engagement.",
  buttonText: 'Discutons de votre projet',
  buttonHref: '/contact',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Audit offert' },
    { id: '3', text: 'Recommandations actionnables' },
  ],
};
