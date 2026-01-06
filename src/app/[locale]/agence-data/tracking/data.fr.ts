/**
 * ============================================
 * DATA - Contenu de la page Tracking
 * ============================================
 *
 * URL: /agence-data/tracking
 * Mots-clés: Plan de taggage, Tracking web, GTM, Google Tag Manager
 * Intention: Transactionnelle
 * Parent: /agence-data
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GTM : Tracking et Google Tag Manager - Rankwell',
  description: 'Experts Google Tag Manager et tracking web. Plan de taggage, GA4, conversions Ads. Besoin d\'une formation GTM ? On configure et on forme vos équipes.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Data', href: '/agence-data' },
    { label: 'Tracking' },
  ] as BreadcrumbItem[],
  title: 'Agence GTM : tracking et plan de taggage fiables',
  description: 'Sans tracking propre, vos données sont fausses. Experts Google Tag Manager, on met en place une collecte fiable pour des analyses qui ont du sens.',
  ctaText: 'Auditer mon tracking',
  ctaHref: '/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Tag Manager',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'Vous regardez vos stats Analytics chaque semaine. Mais êtes-vous sûr que les chiffres sont justes ? Combien de conversions passent sous le radar ? Combien sont comptées en double ? Google Tag Manager mal configuré, c\'est la source du problème.',
    'Un tracking défaillant, c\'est des conversions manquées, des attributions fausses, des doublons. Vous pensez optimiser, vous optimisez sur du vent. Et vous ne construisez pas la connaissance réelle de ce qui fonctionne.',
    'Découvrez comment notre agence GTM pose des fondations de mesure solides. Le tracking est le premier pilier de l\'approche <strong class="text-secondary dark:text-accent">business centrix</strong> : des données fiables pour des décisions fiables. Sans ça, tout le reste est biaisé.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Ce qu\'on fait', icon: 'Package' },
    { id: 'problemes', label: 'Problèmes courants', icon: 'TriangleAlert' },
    { id: 'checklist', label: 'Checklist', icon: 'SquareCheck' },
    { id: 'evenements', label: 'Événements', icon: 'Activity' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'livrables', label: 'Livrables', icon: 'Package' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Notre prestation',
  accentColor: 'rw-purple' as const,
  title: 'Ce que comprend notre prestation Google Tag Manager',
  subtitle: 'De l\'audit à la formation GTM, un tracking complet et fiable.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Audit de l\'existant',
      description: 'Diagnostic complet de votre configuration GTM actuelle',
    },
    {
      id: 2,
      icon: 'FileText',
      title: 'Plan de taggage',
      description: 'Documentation de tout ce qui doit être mesuré',
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'Implémentation GTM',
      description: 'Configuration Google Tag Manager propre et maintenable',
    },
    {
      id: 4,
      icon: 'GraduationCap',
      title: 'Formation GTM',
      description: 'Vos équipes autonomes sur Google Tag Manager',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'If you can\'t measure it, you can\'t improve it.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 5. PROBLÈMES DATA (#problemes) - Pour FeaturesGrid
// ============================================
export const problemesData = {
  sectionId: 'problemes',
  badge: 'Problèmes',
  accentColor: 'rw-purple' as const,
  title: 'Quels problèmes de tracking rencontrons-nous le plus souvent ?',
  subtitle: '5 problèmes récurrents. Nous les trouvons dans la majorité des audits que nous réalisons.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-data/tracking/probleme-conversions.webp',
      alt: 'Conversions non trackées',
      title: 'Conversions non trackées',
      desc: 'Des formulaires envoyés, des achats réalisés, mais rien dans les stats. Impossible de savoir ce qui fonctionne.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-data/tracking/probleme-doublons.webp',
      alt: 'Doublons et sur-comptage tracking',
      title: 'Doublons et sur-comptage',
      desc: 'La même conversion comptée plusieurs fois. Les chiffres sont gonflés, les décisions biaisées.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-data/tracking/probleme-attribution.webp',
      alt: 'Mauvaise attribution SEO SEA',
      title: 'Mauvaise attribution',
      desc: 'Google Ads s\'attribue des conversions qui viennent du SEO (ou l\'inverse). Vous ne savez pas où investir.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-data/tracking/probleme-donnees-manquantes.webp',
      alt: 'Données manquantes tracking',
      title: 'Données manquantes',
      desc: 'Le tracking ne fonctionne pas sur mobile, ou sur certaines pages, ou après consentement. Des trous dans vos données.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-data/tracking/probleme-migration-ga4.webp',
      alt: 'Migration GA4 ratée',
      title: 'Migration GA4 ratée',
      desc: 'Le passage de Universal Analytics à GA4 a été fait à la va-vite. Les événements ne remontent pas correctement.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Donnée clé',
  text: 'En moyenne, nous constatons que 30% des conversions ne sont pas correctement trackées chez nos nouveaux clients. Cela signifie que vos décisions marketing reposent sur des données incomplètes.',
};

// ============================================
// 7. TABLEAU CHECKLIST DATA (#checklist)
// ============================================
export const tableauChecklistData = {
  sectionId: 'checklist',
  badge: 'Checklist',
  accentColor: 'rw-purple' as const,
  title: 'Checklist : votre tracking est-il fiable ?',
  subtitle: 'Voici les points que nous vérifions systématiquement lors d\'un audit.',
  columns: ['Point de contrôle', 'Impact si défaillant', 'Fréquence du problème', 'Complexité'],
  rows: [
    ['Conversions clés trackées', 'ROI impossible à mesurer', '40% des sites', 'Moyenne'],
    ['Pas de doublons', 'Données gonflées, mauvaises décisions', '25% des sites', 'Faible'],
    ['Attribution correcte SEO/SEA', 'Budget mal réparti', '35% des sites', 'Moyenne'],
    ['Tracking mobile fonctionnel', '60% du trafic invisible', '20% des sites', 'Variable'],
    ['Consent mode v2 configuré', 'Perte de données + risque RGPD', '50% des sites', 'Moyenne'],
    ['Enhanced conversions activé', 'Attribution Ads dégradée', '70% des sites', 'Faible'],
  ],
};

// ============================================
// 8. ÉVÉNEMENTS DATA (#evenements) - Pour StepsDimensions
// ============================================
export const evenementsData = {
  sectionId: 'evenements',
  badge: 'Événements',
  accentColor: 'rw-purple' as const,
  title: 'Quels événements trackons-nous ?',
  subtitle: '3 niveaux de tracking. Des conversions business critiques aux signaux d\'engagement.',
  dimensions: [
    {
      dimension: 1,
      label: 'Macro',
      title: 'Conversions macro',
      subtitle: 'Les conversions qui comptent vraiment pour votre business.',
      items: ['Achats / Transactions', 'Formulaires de contact envoyés', 'Demandes de devis', 'Inscriptions / Sign-ups', 'Appels téléphoniques'],
    },
    {
      dimension: 2,
      label: 'Micro',
      title: 'Conversions micro',
      subtitle: 'Les signaux d\'intention qui précèdent la conversion.',
      items: ['Ajouts au panier', 'Début de formulaire', 'Téléchargements', 'Vues de pages clés', 'Clics sur CTA'],
    },
    {
      dimension: 3,
      label: 'Engagement',
      title: 'Engagement',
      subtitle: 'Les indicateurs de qualité de visite.',
      items: ['Scroll depth', 'Temps passé', 'Interactions vidéo', 'Clics sortants'],
    },
  ],
};

// ============================================
// 9. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Un tracking exhaustif n\'est pas toujours pertinent. Nous définissons avec vous les événements vraiment utiles pour vos décisions. Trop de données tue la donnée : on se concentre sur ce qui a un impact business.',
};

// ============================================
// 10. PROCESS DATA (#process) - Pour ProcessSteps
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-purple' as const,
  title: 'Comment se déroule la mise en place ?',
  subtitle: '5 étapes structurées. De l\'audit initial à la documentation finale.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit et brief',
      description: 'On analyse l\'existant et on comprend vos besoins. Quelles sont vos conversions clés ? Quels parcours voulez-vous suivre ?',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Plan de taggage',
      description: 'On documente tout ce qui doit être tracké : événements, conversions, paramètres. La spec technique pour une implémentation propre.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Implémentation GTM + GA4',
      description: 'Configuration de GTM, création des tags et déclencheurs, événements personnalisés GA4, liaison Google Ads.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Tests et validation',
      description: 'On vérifie que tout remonte correctement. Tests en conditions réelles, debug, corrections.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Documentation et passation',
      description: 'On vous livre une documentation claire. Vous savez ce qui est en place et comment ça fonctionne.',
    },
  ],
};

// ============================================
// 11. LIVRABLES DATA (#livrables) - Pour StackCardsSection
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Livrables',
  accentColor: 'rw-purple' as const,
  title: 'Que recevez-vous concrètement ?',
  subtitle: '6 livrables exploitables. Un tracking opérationnel et documenté.',
  cards: [
    {
      id: 1,
      icon: 'CircleCheck',
      title: 'Tracking fiable et complet',
      description: 'Tous vos événements clés mesurés correctement, sans doublons ni trous.',
    },
    {
      id: 2,
      icon: 'Box',
      title: 'Conteneur GTM propre',
      description: 'Structure claire, tags documentés, maintenable par votre équipe.',
    },
    {
      id: 3,
      icon: 'ChartLine',
      title: 'GA4 configuré',
      description: 'Événements personnalisés, conversions, dimensions adaptées à votre business.',
    },
    {
      id: 4,
      icon: 'DollarSign',
      title: 'Conversions Google Ads',
      description: 'Liaison configurée, conversions importées, valeurs qui remontent pour l\'optimisation.',
    },
    {
      id: 5,
      icon: 'FileText',
      title: 'Documentation technique',
      description: 'Référence complète : ce qui est tracké, comment, pourquoi. Pour votre équipe et vos futurs prestataires.',
    },
    {
      id: 6,
      icon: 'Shield',
      title: 'Consent Mode v2',
      description: 'Configuration RGPD-compliant. Le tracking respecte le choix utilisateur tout en optimisant la collecte.',
    },
  ],
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le tracking et GTM.',
  items: [
    {
      id: 'faq-1',
      question: 'Qui implémente les tags sur mon site ?',
      answer: 'L\'implémentation des tags se fait majoritairement via Google Tag Manager, sans toucher à votre code source. Si des modifications côté développeur sont nécessaires (dataLayer par exemple), nous fournissons les spécifications techniques détaillées et accompagnons la mise en place.',
    },
    {
      id: 'faq-2',
      question: 'Quel impact le tracking a-t-il sur la performance du site ?',
      answer: 'L\'impact du tracking sur les performances dépend de la qualité de l\'implémentation. Un GTM bien configuré a un impact minimal. Nous utilisons Google Tag Manager avec des déclenchements optimisés et du chargement asynchrone pour ne pas pénaliser vos Core Web Vitals.',
    },
    {
      id: 'faq-3',
      question: 'Proposez-vous une formation GTM pour nos équipes ?',
      answer: 'La formation GTM fait partie de nos prestations. Nous formons vos équipes à Google Tag Manager pour qu\'elles puissent gérer les ajouts simples de tags en autonomie, tout en comprenant la structure mise en place.',
    },
    {
      id: 'faq-4',
      question: 'Combien de temps faut-il pour mettre en place le tracking ?',
      answer: 'Le délai de mise en place dépend de la complexité de votre site. Comptez 1 à 3 semaines entre l\'audit initial et la mise en production, incluant les phases de test et de validation.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Data is the new oil. But like oil, it\'s valuable only when refined.',
  author: 'Clive Humby',
  role: 'Data Science Pioneer',
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Des données fiables,',
  titleHighlight: 'enfin',
  description: 'Google Tag Manager bien configuré, c\'est la fondation de toute mesure fiable. Un tracking propre, c\'est la certitude que vos analyses reflètent la réalité de votre business.',
  secondaryDescription: 'Première étape : un audit de votre configuration GTM actuelle. Notre agence GTM identifie ce qui est tracké, ce qui manque, ce qui est faux. Vous repartez avec un diagnostic clair.',
  buttonText: 'Auditer mon tracking',
  checklistItems: [
    { id: '1', text: 'Audit GTM gratuit' },
    { id: '2', text: 'Formation GTM incluse' },
    { id: '3', text: 'RGPD-compliant' },
  ],
};
