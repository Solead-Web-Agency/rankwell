/**
 * ============================================
 * DATA - Contenu de la page Analytics
 * ============================================
 *
 * URL: /agence-data/analytics
 * Mots-clés: Agence Google Analytics, GA4, Audit analytics, Analyse données web
 * Intention: Transactionnelle
 * Parent: /agence-data
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence Web Analytics GA4 et Dashboards - Rankwell',
  description: 'Agence web analytics experte GA4. Audit, configuration avancée, dashboards Looker Studio. Formation GA4 pour vos équipes. Consultant analytics à votre service.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Data', href: '/agence-data' },
    { label: 'Analytics' },
  ] as BreadcrumbItem[],
  title: 'Agence web analytics : GA4 et dashboards actionnables',
  description: 'Collecter des données, c\'est facile. Les comprendre et agir dessus, c\'est autre chose. Nos consultants web analytics vous aident à voir clair dans vos stats GA4.',
  ctaText: 'Parler de vos analytics',
  ctaHref: '/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Web Analytics',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'Vous avez GA4. Tout le monde a GA4. Mais qui s\'en sert vraiment ? La plupart des entreprises ont des données qui dorment, des rapports que personne ne lit, des dashboards que personne ne comprend.',
    'Le problème n\'est pas le manque de données. C\'est le manque d\'interprétation. Des chiffres sans contexte ne mènent nulle part. Des métriques sans lien avec le business non plus. C\'est là qu\'intervient notre agence web analytics.',
    'Découvrez comment nos consultants web analytics transforment vos données brutes en intelligence actionnable. L\'approche <strong class="text-secondary dark:text-accent">business centrix</strong> appliquée à vos analytics : chaque insight doit mener à une décision.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Notre expertise', icon: 'Award' },
    { id: 'services', label: 'Nos services', icon: 'Briefcase' },
    { id: 'metriques', label: 'Métriques clés', icon: 'ChartBar' },
    { id: 'ga4', label: 'Expertise GA4', icon: 'ChartLine' },
    { id: 'dashboards', label: 'Dashboards', icon: 'LayoutDashboard' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'formules', label: 'Formules', icon: 'LayoutGrid' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Notre expertise',
  accentColor: 'rw-purple' as const,
  title: 'Ce que couvre notre expertise web analytics',
  subtitle: 'De l\'audit à la formation GA4, une maîtrise complète de vos données.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Audit GA4',
      description: 'Configuration, événements, conversions, intégrations',
    },
    {
      id: 2,
      icon: 'Settings',
      title: 'Configuration avancée',
      description: 'Événements custom, dimensions, audiences GA4',
    },
    {
      id: 3,
      icon: 'LayoutDashboard',
      title: 'Dashboards Looker Studio',
      description: 'Vues unifiées et actionnables',
    },
    {
      id: 4,
      icon: 'GraduationCap',
      title: 'Formation GA4',
      description: 'Vos équipes autonomes sur Google Analytics 4',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The goal is to turn data into information, and information into insight.',
  author: 'Carly Fiorina',
  role: 'Ex-CEO HP',
};

// ============================================
// 5. SERVICES DATA (#services) - Pour FeaturesGrid
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-purple' as const,
  title: 'Que faisons-nous en tant qu\'agence web analytics ?',
  subtitle: '5 interventions complémentaires. De l\'audit à la formation GA4, pour une autonomie complète.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-data/analytics/service-audit-ga4.webp',
      alt: 'Audit de configuration GA4',
      title: 'Audit de configuration GA4',
      desc: 'Votre GA4 est-il bien configuré ? Événements, conversions, propriétés, filtres. Nos consultants web analytics vérifient que tout est en place.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-data/analytics/service-configuration-avancee.webp',
      alt: 'Configuration avancée GA4',
      title: 'Configuration avancée GA4',
      desc: 'Au-delà de l\'installation de base : événements personnalisés, dimensions custom, audiences, intégrations. Un GA4 taillé pour vos besoins.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-data/analytics/service-dashboards.webp',
      alt: 'Dashboards et reporting Looker Studio',
      title: 'Dashboards et reporting',
      desc: 'Des tableaux de bord Looker Studio (ex Data Studio) clairs et actionnables. Les bonnes métriques, bien présentées, accessibles à tous.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-data/analytics/service-analyse.webp',
      alt: 'Analyse et recommandations analytics',
      title: 'Analyse et recommandations',
      desc: 'On plonge dans vos données GA4 pour en extraire des insights. Qu\'est-ce qui marche ? Qu\'est-ce qui coince ? Quelles opportunités ?',
    },
    {
      id: 5,
      // image: '/images/pages/agence-data/analytics/service-formation-ga4.webp',
      alt: 'Formation GA4 pour équipes',
      title: 'Formation GA4',
      desc: 'Vos équipes doivent être autonomes. Notre formation GA4 couvre la lecture des données et l\'utilisation des dashboards.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Analytics et connaissance client',
  text: 'Chaque visite, chaque clic, chaque conversion enrichit votre connaissance client. Avec le temps, vous comprenez mieux qui sont vos utilisateurs, ce qu\'ils cherchent, ce qui les fait convertir. Cette intelligence accumulée devient un avantage compétitif.',
};

// ============================================
// 7. TABLEAU MÉTRIQUES DATA (#metriques)
// ============================================
export const tableauMetriquesData = {
  sectionId: 'metriques',
  badge: 'Métriques',
  accentColor: 'rw-purple' as const,
  title: 'Les métriques GA4 qui comptent vraiment',
  subtitle: 'GA4 propose des dizaines de métriques. Voici celles qui font la différence selon vos objectifs.',
  columns: ['Objectif business', 'Métrique clé', 'Seuil d\'alerte', 'Ce qu\'elle révèle'],
  rows: [
    ['Acquisition', 'Sessions par source', 'Variation > 20% vs période précédente', 'Efficacité de chaque canal'],
    ['Engagement', 'Taux d\'engagement', '< 50% = problème de pertinence', 'Le contenu répond-il aux attentes ?'],
    ['Conversion', 'Taux de conversion par source', '< 1% e-commerce, < 3% lead gen', 'Qualité du trafic par canal'],
    ['Rétention', '% utilisateurs récurrents', '< 20% = faible fidélisation', 'Capacité à faire revenir'],
    ['UX mobile', 'Taux rebond mobile vs desktop', 'Écart > 15% = UX mobile à revoir', 'Parité d\'expérience'],
    ['ROI SEA', 'ROAS (via import conversions)', '< 3x pour e-commerce classique', 'Rentabilité des campagnes'],
  ],
};

// ============================================
// 8. GA4 DATA - Pour StepsDimensions
// ============================================
export const ga4Data = {
  sectionId: 'ga4',
  badge: 'Expertise GA4',
  accentColor: 'rw-purple' as const,
  title: 'Pourquoi maîtrisons-nous GA4 sur le bout des doigts ?',
  subtitle: 'GA4 a changé la donne. Nouvelle logique, nouvelle interface, nouveaux événements. Nous accompagnons cette transition depuis le début.',
  dimensions: [
    {
      dimension: 1,
      label: 'Flux',
      title: 'Configuration des flux',
      subtitle: 'La base de toute collecte de données GA4.',
      items: ['Web streams', 'App streams iOS/Android', 'Measurement Protocol', 'Debug view'],
    },
    {
      dimension: 2,
      label: 'Événements',
      title: 'Événements et conversions',
      subtitle: 'Le cœur du modèle GA4.',
      items: ['Événements automatiques', 'Événements recommandés', 'Événements personnalisés', 'Marquage des conversions'],
    },
    {
      dimension: 3,
      label: 'Custom',
      title: 'Dimensions et paramètres',
      subtitle: 'Pour aller au-delà des données standard.',
      items: ['Dimensions custom', 'Métriques custom', 'Paramètres d\'événements', 'Propriétés utilisateur'],
    },
  ],
};

// ============================================
// 9. DASHBOARDS DATA (#dashboards) - Pour StickyFeatures
// ============================================
export const dashboardsData = {
  sectionId: 'dashboards',
  badge: 'Dashboards',
  accentColor: 'rw-purple' as const,
  title: 'Qu\'est-ce qui fait un dashboard vraiment utile ?',
  subtitle: '4 caractéristiques essentielles. La différence entre un dashboard décoratif et un outil de pilotage.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Les bonnes métriques',
      description: 'Celles qui comptent pour votre business, pas toutes les métriques disponibles',
    },
    {
      id: 2,
      icon: 'Eye',
      title: 'Une lecture claire',
      description: 'On comprend en 30 secondes si ça va ou pas',
    },
    {
      id: 3,
      icon: 'MousePointerClick',
      title: 'De l\'actionnable',
      description: 'Chaque donnée doit pouvoir mener à une décision',
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Accessible à tous',
      description: 'Pas besoin d\'être data analyst pour le lire',
    },
  ],
};

// ============================================
// 10. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Un dashboard trop complexe ne sera pas utilisé. Mieux vaut 5 métriques pertinentes qu\'une visualisation exhaustive que personne ne regarde. Nous concevons des vues adaptées à chaque profil utilisateur.',
};

// ============================================
// 11. PROCESS DATA (#process) - Pour ProcessSteps
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'Comment se déroule notre collaboration ?',
  subtitle: '5 étapes structurées. De l\'audit à l\'autonomie de vos équipes.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit de l\'existant',
      description: 'On regarde ce qui est en place, ce qui manque, ce qui ne fonctionne pas.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Définition des KPIs',
      description: 'Avec vous, on identifie les métriques qui comptent vraiment pour votre business.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Configuration / Optimisation',
      description: 'On met en place ou on améliore la configuration GA4 pour collecter les bonnes données.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Création des dashboards',
      description: 'Des tableaux de bord sur mesure, connectés à vos sources, accessibles à vos équipes.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Formation et passation',
      description: 'On vous montre comment lire et utiliser ces données au quotidien.',
    },
  ],
};

// ============================================
// 12. FORMULES DATA (#formules) - Pour FeaturesGrid
// ============================================
export const formulesData = {
  sectionId: 'formules',
  badge: 'Formules',
  accentColor: 'rw-purple' as const,
  title: 'Quels formats de collaboration proposons-nous ?',
  subtitle: '3 formules selon vos besoins. Du diagnostic ponctuel au partenariat continu.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-data/analytics/formule-audit.webp',
      alt: 'Audit analytics ponctuel',
      title: 'Audit ponctuel',
      desc: 'Un état des lieux de votre configuration analytics avec recommandations. Idéal pour savoir où vous en êtes.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-data/analytics/formule-mise-en-place.webp',
      alt: 'Projet de mise en place GA4',
      title: 'Projet de mise en place',
      desc: 'Configuration complète GA4 + dashboards + formation. Le package pour partir sur de bonnes bases.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-data/analytics/formule-accompagnement.webp',
      alt: 'Accompagnement analytics continu',
      title: 'Accompagnement continu',
      desc: 'Suivi régulier, analyses périodiques, évolution des dashboards. Un partenaire data sur la durée.',
    },
  ],
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur les analytics.',
  items: [
    {
      id: 'faq-1',
      question: 'Nos données Universal Analytics sont-elles récupérables ?',
      answer: 'La récupération des données Universal Analytics n\'est plus possible directement dans Google. Si vous aviez configuré une exportation vers BigQuery ou sauvegardé vos données, nous pouvons travailler dessus. Sinon, nous repartons sur une base propre avec GA4.',
    },
    {
      id: 'faq-2',
      question: 'GA4 suffit-il ou faut-il d\'autres outils analytics ?',
      answer: 'GA4 couvre la majorité des besoins analytics standards. Pour des analyses avancées, des volumes très importants ou des besoins de confidentialité spécifiques, nous pouvons compléter avec BigQuery, Matomo ou d\'autres solutions adaptées.',
    },
    {
      id: 'faq-3',
      question: 'Qui peut accéder aux dashboards que vous créez ?',
      answer: 'L\'accès aux dashboards est entièrement configurable. Nous pouvons créer des vues différentes selon les profils (direction, marketing, commercial) avec des niveaux de détail adaptés à chaque audience.',
    },
    {
      id: 'faq-4',
      question: 'Qu\'est-ce que Looker Studio et pourquoi l\'utiliser ?',
      answer: 'Looker Studio (anciennement Google Data Studio) est l\'outil de visualisation de données gratuit de Google. Il permet de créer des dashboards connectés à toutes vos sources (GA4, Ads, Search Console, CRM) et de les partager facilement avec vos équipes.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Numbers have an important story to tell. They rely on you to give them a voice.',
  author: 'Stephen Few',
  role: 'Data Visualization Expert',
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Vos données GA4 ont des choses',
  titleHighlight: 'à vous dire',
  description: 'Vos web analytics contiennent des réponses à des questions business essentielles. D\'où viennent vos meilleurs clients ? Qu\'est-ce qui bloque les conversions ? Où investir pour maximiser le ROI ?',
  secondaryDescription: 'Première étape : un audit de votre configuration GA4. Notre agence web analytics identifie ce qui fonctionne, ce qui manque, et les opportunités d\'amélioration.',
  buttonText: 'Parler de vos analytics',
  checklistItems: [
    { id: '1', text: 'Audit GA4 gratuit' },
    { id: '2', text: 'Dashboards sur mesure' },
    { id: '3', text: 'Formation GA4 incluse' },
  ],
};
