/**
 * ============================================
 * DATA - Contenu de la page Audit CRO
 * ============================================
 *
 * URL: /agence-data/cro
 * Mots-clés: Audit CRO, Optimisation conversion, Agence CRO, Taux de conversion
 * Intention: Transactionnelle
 * Parent: /agence-data
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence CRO : Optimisation du Taux de Conversion - Rankwell',
  description: 'Agence CRO experte en optimisation du taux de conversion. Audit CRO complet pour e-commerce et lead gen. Boostez votre taux de conversion et votre CA.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Data', href: '/agence-data' },
    { label: 'CRO' },
  ] as BreadcrumbItem[],
  title: 'Agence CRO : convertir plus avec le même trafic',
  description: 'Vous avez du trafic. Mais convertit-il ? L\'optimisation du taux de conversion transforme vos visiteurs en clients. E-commerce ou lead gen, notre audit CRO booste vos résultats.',
  ctaText: 'Demander un audit CRO',
  ctaHref: '/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence CRO',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'La plupart des entreprises se focalisent sur le trafic. Plus de visiteurs = plus de clients, non ? Pas si simple. Si votre taux de conversion e-commerce est de 1%, vous pouvez doubler votre trafic... ou doubler votre taux de conversion.',
    'L\'optimisation du taux de conversion consiste à identifier pourquoi vos visiteurs ne convertissent pas, et à corriger les frictions. Le résultat est le même que doubler le trafic, mais le coût est souvent bien moindre.',
    'Découvrez comment notre audit CRO révèle les blocages invisibles qui vous coûtent des conversions. Chaque point gagné, c\'est du chiffre d\'affaires en plus. C\'est l\'approche <strong class="text-secondary dark:text-accent">business centrix</strong> poussée à son maximum : maximiser la valeur de chaque visiteur.',
  ],
  tocItems: [
    { id: 'inclus', label: 'L\'audit', icon: 'ClipboardList' },
    { id: 'roi', label: 'ROI du CRO', icon: 'TrendingUp' },
    { id: 'frictions', label: 'Impact frictions', icon: 'TriangleAlert' },
    { id: 'dimensions', label: 'Dimensions', icon: 'Layers' },
    { id: 'livrables', label: 'Livrables', icon: 'Package' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Notre audit',
  accentColor: 'rw-purple' as const,
  title: 'Ce que comprend notre audit CRO',
  subtitle: 'Une analyse complète pour identifier et corriger les frictions.',
  items: [
    {
      id: 1,
      icon: 'ChartBar',
      title: 'Analyse quantitative',
      description: 'Parcours utilisateurs, taux de sortie, tunnel de conversion',
    },
    {
      id: 2,
      icon: 'MousePointer',
      title: 'Analyse comportementale',
      description: 'Heatmaps, scrollmaps, enregistrements de sessions',
    },
    {
      id: 3,
      icon: 'Palette',
      title: 'Audit UX/UI',
      description: 'Clarté, hiérarchie visuelle, efficacité des CTA',
    },
    {
      id: 4,
      icon: 'ListOrdered',
      title: 'Recommandations priorisées',
      description: 'Impact potentiel vs facilité de mise en œuvre',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Conversion is about persuasion, and persuasion is about understanding people.',
  author: 'Peep Laja',
  role: 'Founder CXL',
};

// ============================================
// 5. ROI DATA (#roi) - Pour StepsDimensions
// ============================================
export const roiData = {
  sectionId: 'roi',
  badge: 'ROI',
  accentColor: 'rw-purple' as const,
  title: 'Pourquoi le CRO offre-t-il un ROI exceptionnel ?',
  subtitle: 'Le calcul est simple. Même trafic, plus de conversions, sans coût d\'acquisition supplémentaire.',
  dimensions: [
    {
      dimension: 1,
      label: 'Avant',
      title: 'Situation actuelle',
      subtitle: 'Votre performance avec un taux de conversion standard.',
      items: ['10 000 visiteurs / mois', 'Taux de conversion : 2%', '= 200 conversions'],
    },
    {
      dimension: 2,
      label: 'Après',
      title: 'Après optimisation CRO',
      subtitle: 'La même performance avec un taux optimisé.',
      items: ['10 000 visiteurs / mois (inchangé)', 'Taux de conversion : 3%', '= 300 conversions', '+50% de conversions sans dépenser plus'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Donnée clé',
  text: 'En moyenne, une amélioration de 20 à 30% du taux de conversion e-commerce est réaliste après un audit CRO. Sur un site à 100k€ de CA mensuel, cela représente 20 à 30k€ de revenus supplémentaires par mois.',
};

// ============================================
// 7. TABLEAU FRICTIONS DATA (#frictions)
// ============================================
export const tableauFrictionsData = {
  sectionId: 'frictions',
  badge: 'Impact',
  accentColor: 'rw-purple' as const,
  title: 'Impact des optimisations CRO par type de friction',
  subtitle: 'Toutes les frictions n\'ont pas le même impact. Voici notre grille de priorisation basée sur des centaines d\'audits.',
  columns: ['Type de friction', 'Impact moyen', 'Effort de correction', 'Priorité'],
  rows: [
    ['Formulaire trop long (>5 champs)', '-25 à -50% de complétions', 'Faible (1-2 jours)', '★★★★★ Immédiat'],
    ['Checkout obligeant création compte', '-30% d\'abandons', 'Moyen (1 semaine)', '★★★★★ Immédiat'],
    ['CTA peu visible ou mal placé', '-15 à -30% de clics', 'Faible (quelques heures)', '★★★★☆ Prioritaire'],
    ['Temps de chargement >3s', '-20% par seconde supplémentaire', 'Variable (technique)', '★★★★☆ Prioritaire'],
    ['Absence de preuve sociale', '-10 à -20% de confiance', 'Faible (ajout avis/logos)', '★★★☆☆ Important'],
    ['Proposition de valeur floue', '-30% d\'engagement', 'Moyen (réflexion + copy)', '★★★☆☆ Important'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. DIMENSIONS DATA (#dimensions) - Pour FeaturesGrid
// ============================================
export const dimensionsData = {
  sectionId: 'dimensions',
  badge: 'Analyse',
  accentColor: 'rw-purple' as const,
  title: 'Quelles dimensions analysons-nous ?',
  subtitle: '5 angles d\'analyse complémentaires. Données quantitatives, comportementales et expertise UX croisées.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-data/cro/dimension-quantitative.webp',
      alt: 'Analyse des données quantitatives CRO',
      title: 'Analyse des données quantitatives',
      desc: 'Étude des parcours utilisateurs dans GA4. Identification des pages à fort taux de sortie. Analyse du tunnel de conversion. Segmentation par source, device, audience.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-data/cro/dimension-comportementale.webp',
      alt: 'Analyse comportementale heatmaps',
      title: 'Analyse comportementale',
      desc: 'Heatmaps : où cliquent vos visiteurs ? Scrollmaps : jusqu\'où scrollent-ils ? Enregistrements de sessions : comment naviguent-ils ?',
    },
    {
      id: 3,
      // image: '/images/pages/agence-data/cro/dimension-ux-ui.webp',
      alt: 'Audit UX/UI conversion',
      title: 'Audit UX/UI',
      desc: 'Clarté de la proposition de valeur. Hiérarchie visuelle et lisibilité. Efficacité des CTA. Fluidité du parcours. Éléments de réassurance.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-data/cro/dimension-pages-cles.webp',
      alt: 'Analyse des pages clés du site',
      title: 'Analyse des pages clés',
      desc: 'Homepage, pages produits/services, pages de catégories, landing pages, tunnel de checkout et formulaires.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-data/cro/dimension-benchmark.webp',
      alt: 'Benchmark concurrentiel CRO',
      title: 'Benchmark concurrentiel',
      desc: 'Comment font vos concurrents ? Quelles bonnes pratiques pouvez-vous adopter ? Où pouvez-vous vous différencier ?',
    },
  ],
};

// ============================================
// 9. FRICTIONS COURANTES - Pour StickyFeatures
// ============================================
export const frictionsCourantesData = {
  sectionId: 'frictions-courantes',
  badge: 'Frictions',
  accentColor: 'rw-purple' as const,
  title: 'Quelles frictions trouvons-nous le plus souvent ?',
  subtitle: '6 problèmes récurrents. Nous les identifions dans la majorité des audits que nous réalisons.',
  items: [
    {
      id: 1,
      icon: 'MessageSquare',
      title: 'Proposition de valeur floue',
      description: 'Le visiteur ne comprend pas en 5 secondes ce que vous proposez et pourquoi c\'est pour lui.',
    },
    {
      id: 2,
      icon: 'MousePointerClick',
      title: 'CTA invisibles ou confus',
      description: 'Le bouton d\'action n\'est pas visible, pas clair, ou il y en a trop.',
    },
    {
      id: 3,
      icon: 'TextCursorInput',
      title: 'Formulaires trop longs',
      description: 'Chaque champ supplémentaire fait fuir des prospects.',
    },
    {
      id: 4,
      icon: 'ShieldCheck',
      title: 'Manque de réassurance',
      description: 'Pas d\'avis clients, pas de garanties, pas de preuves sociales. Le visiteur n\'a pas confiance.',
    },
    {
      id: 5,
      icon: 'ShoppingCart',
      title: 'Checkout complexe',
      description: 'Création de compte obligatoire, trop d\'étapes, frais cachés. Abandon de panier garanti.',
    },
    {
      id: 6,
      icon: 'Smartphone',
      title: 'Expérience mobile dégradée',
      description: 'Boutons trop petits, texte illisible, navigation laborieuse. Et 60% du trafic est mobile.',
    },
  ],
};

// ============================================
// 10. LIVRABLES DATA (#livrables) - Pour StackCardsSection
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Livrables',
  accentColor: 'rw-purple' as const,
  title: 'Que recevez-vous concrètement ?',
  subtitle: '4 livrables exploitables. Un diagnostic complet avec des recommandations priorisées.',
  cards: [
    {
      id: 1,
      icon: 'FileText',
      title: 'Rapport d\'audit détaillé',
      description: 'Chaque problème identifié est documenté avec captures d\'écran, données à l\'appui, et impact estimé.',
    },
    {
      id: 2,
      icon: 'ListOrdered',
      title: 'Recommandations priorisées',
      description: 'Une liste d\'actions classées par impact potentiel et facilité de mise en œuvre. Vous savez par où commencer.',
    },
    {
      id: 3,
      icon: 'FlaskConical',
      title: 'Hypothèses de tests',
      description: 'Des propositions concrètes de tests A/B à mener pour valider les optimisations.',
    },
    {
      id: 4,
      icon: 'Video',
      title: 'Présentation en visio',
      description: 'On vous présente les findings, on répond à vos questions, on challenge ensemble les priorités.',
    },
  ],
};

// ============================================
// 11. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Un audit CRO n\'est pas une liste de best practices génériques. Chaque site est unique. Nous analysons vos données réelles pour identifier vos frictions spécifiques, pas celles d\'un site théorique.',
};

// ============================================
// 12. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'Comment se déroule un audit CRO ?',
  subtitle: '5 étapes structurées. Du brief à la restitution, comptez 2 à 4 semaines selon la complexité.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief et accès',
      description: 'On comprend vos objectifs et on récupère les accès (GA4, outils de heatmap ou on installe).',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Collecte de données',
      description: 'Si besoin, on installe les outils d\'analyse comportementale et on laisse tourner quelques jours/semaines.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Analyse',
      description: 'On croise données quantitatives, comportementales et expertise UX pour identifier les problèmes.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Plan d’action',
      description: 'On formalise les findings et les priorise par impact et facilité.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Restitution',
      description: 'Présentation et échanges pour valider le plan d\'action.',
    },
  ],
};

// ============================================
// 13. ET APRÈS - Pour TwoPathsSection
// ============================================
export const etApresData = {
  sectionId: 'et-apres',
  badge: 'Et après ?',
  accentColor: 'rw-purple' as const,
  title: 'Que se passe-t-il après l\'audit ?',
  subtitle: 'L\'audit est le diagnostic. L\'implémentation est le traitement. Deux options selon vos ressources.',
  items: [
    {
      id: 1,
      icon: 'User',
      title: 'Vous implémentez en interne',
      description: 'On vous a donné la roadmap, vous exécutez avec vos équipes. On reste disponible pour du conseil ponctuel si besoin.',
      href: '',
      buttonText: '',
    },
    {
      id: 2,
      icon: 'Handshake',
      title: 'On vous accompagne',
      description: 'On pilote les optimisations et les tests A/B avec vous pour maximiser l\'impact.',
      href: '/contact',
      buttonText: 'Demander un accompagnement',
    },
  ],
  footerText: 'Pas d\'obligation. Vous choisissez ce qui vous convient le mieux.',
};

// ============================================
// 14. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur l\'audit CRO.',
  items: [
    {
      id: 'faq-1',
      question: 'Quelle différence entre audit CRO et audit UX ?',
      answer: 'La différence entre audit CRO et audit UX réside dans l\'objectif. L\'audit UX se concentre sur l\'expérience utilisateur globale. L\'audit CRO est focalisé sur la conversion : transformer les visiteurs en clients. Il intègre l\'UX mais aussi l\'analyse data et la psychologie de persuasion.',
    },
    {
      id: 'faq-2',
      question: 'Faut-il un minimum de trafic pour faire un audit CRO ?',
      answer: 'Le volume de trafic nécessaire dépend de l\'approche. Pour un audit qualitatif basé sur l\'analyse comportementale et UX, non. Pour des tests A/B statistiquement significatifs ensuite, oui (quelques milliers de visiteurs par mois). Nous adaptons la méthodologie à votre volume.',
    },
    {
      id: 'faq-3',
      question: 'Combien de temps dure un audit CRO complet ?',
      answer: 'La durée d\'un audit CRO varie entre 2 et 4 semaines selon la taille du site et le temps nécessaire pour collecter des données comportementales pertinentes (heatmaps, enregistrements de sessions).',
    },
    {
      id: 'faq-4',
      question: 'Quel retour sur investissement peut-on attendre ?',
      answer: 'Le ROI d\'un audit CRO dépend de votre situation actuelle et de votre volume. Une amélioration de 20 à 30% du taux de conversion est réaliste après implémentation des recommandations. Calculez l\'impact sur votre CA mensuel pour estimer le potentiel.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Don\'t make me think.',
  author: 'Steve Krug',
  role: 'UX Expert (titre de son livre culte)',
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Chaque visiteur',
  titleHighlight: 'compte',
  description: 'Vous investissez pour amener du trafic. L\'optimisation du taux de conversion maximise la valeur de chaque visiteur. Que ce soit pour améliorer votre taux de conversion e-commerce ou lead gen, notre audit CRO révèle où vous perdez des conversions.',
  secondaryDescription: 'Première étape : un échange pour comprendre votre site, vos objectifs et vos volumes. Notre agence CRO vous propose ensuite un audit adapté avec une estimation du potentiel de gains.',
  buttonText: 'Demander un audit CRO',
  checklistItems: [
    { id: '1', text: 'Audit CRO complet' },
    { id: '2', text: 'Optimisation taux conversion' },
    { id: '3', text: 'ROI estimé' },
  ],
};
