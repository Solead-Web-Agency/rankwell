/**
 * ============================================
 * DATA - Contenu de la page Accompagnement SEA
 * ============================================
 *
 * URL: /agence-sea/accompagnement
 * Mots-clés: Gestion campagnes Google Ads, Suivi SEA, Management Google Ads, Optimisation Ads
 * Intention: Transactionnelle
 * Parent: /agence-sea
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Consultant Google Ads expert ROI - Rankwell',
  description: 'Consultant Google Ads certifié pour la gestion de vos campagnes. Expert Google Ads qui optimise votre ROI au quotidien. Résultats ou on en parle.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA', href: '/agence-sea' },
    { label: 'Gestion Google Ads' },
  ] as BreadcrumbItem[],
  title: 'Consultant Google Ads pour la gestion de vos campagnes',
  description: 'Google Ads ne s\'optimise pas tout seul. Nos experts Google Ads prennent les commandes, ajustent en continu, vous récoltez les conversions.',
  ctaText: 'Confier la gestion de mes campagnes',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Gestion Google Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'La gestion de Google Ads demande du temps et de l\'expertise. Analyser les données, ajuster les enchères, tester les annonces, surveiller la concurrence. C\'est un métier à part entière.',
    'En interne, vous avez rarement les ressources. Les campagnes tournent en pilote automatique, le budget file, les performances stagnent. Avec un consultant Google Ads dédié, vos campagnes sont optimisées en continu.',
    'Découvrez comment nos experts Google Ads et notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> transforment vos campagnes en machine à business. Chaque action vise à améliorer votre ROI, pas juste à maintenir les campagnes actives.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Ce qui est inclus', icon: 'Package' },
    { id: 'actions', label: 'Actions quotidiennes', icon: 'Activity' },
    { id: 'impact', label: 'Impact ROI', icon: 'TrendingUp' },
    { id: 'rythme', label: 'Rythme d\'optimisation', icon: 'Clock' },
    { id: 'metriques', label: 'Métriques clés', icon: 'ChartBar' },
    { id: 'formules', label: 'Formules', icon: 'LayoutGrid' },
    { id: 'transparence', label: 'Transparence', icon: 'Eye' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Inclus',
  accentColor: 'rw-cyan' as const,
  title: 'Ce que comprend notre accompagnement',
  subtitle: 'Un pilotage complet de vos campagnes, orienté résultats.',
  items: [
    {
      id: 1,
      icon: 'Settings',
      title: 'Optimisation continue',
      description: 'Enchères, annonces, audiences ajustées chaque semaine',
    },
    {
      id: 2,
      icon: 'Eye',
      title: 'Monitoring quotidien',
      description: 'Surveillance des anomalies et réaction rapide',
    },
    {
      id: 3,
      icon: 'FileText',
      title: 'Reporting transparent',
      description: 'Vous savez ce qu\'on fait et ce que ça donne',
    },
    {
      id: 4,
      icon: 'UserCheck',
      title: 'Consultant dédié',
      description: 'Un interlocuteur qui connaît votre compte et vos enjeux',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'In God we trust. All others must bring data.',
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 5. ACTIONS DATA (#actions) - Pour StackCardsSection
// ============================================
export const actionsData = {
  sectionId: 'actions',
  badge: 'Au quotidien',
  accentColor: 'rw-cyan' as const,
  title: 'Quelles actions menons-nous au quotidien ?',
  description: '7 leviers d\'optimisation activés en continu. Chaque semaine, chaque mois, nous améliorons vos campagnes.',
  cards: [
    {
      id: 1,
      icon: 'DollarSign',
      title: 'Optimisation des enchères',
      description: 'Ajustement des stratégies d\'enchères, des CPC max, des modificateurs. On cherche le sweet spot entre volume et rentabilité.',
    },
    {
      id: 2,
      icon: 'Type',
      title: 'Gestion des mots-clés',
      description: 'Ajout de nouveaux mots-clés pertinents, exclusion des termes qui ne convertissent pas, ajustement des types de correspondance.',
    },
    {
      id: 3,
      icon: 'FlaskConical',
      title: 'Tests et optimisation des annonces',
      description: 'Création de variantes, analyse des performances, itération vers les messages qui convertissent le mieux.',
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Gestion des audiences',
      description: 'Remarketing, audiences similaires, exclusions. On affine le ciblage pour toucher les bonnes personnes.',
    },
    {
      id: 5,
      icon: 'Activity',
      title: 'Suivi des conversions',
      description: 'Vérification régulière du tracking, attribution, analyse du parcours de conversion.',
    },
    {
      id: 6,
      icon: 'Radar',
      title: 'Veille concurrentielle',
      description: 'Surveillance des concurrents sur vos mots-clés, ajustement de la stratégie si nécessaire.',
    },
    {
      id: 7,
      icon: 'ChartBar',
      title: 'Reporting régulier',
      description: 'Un point mensuel (ou plus fréquent selon les besoins) sur les performances, les actions menées, les recommandations.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Données pour la stratégie globale',
  text: 'Les insights récoltés via vos campagnes Google Ads (mots-clés qui convertissent, messages qui fonctionnent) nourrissent aussi votre stratégie SEO et votre connaissance client. Nous partageons ces learnings avec vous.',
};

// ============================================
// 7. TABLEAU IMPACT DATA (#impact)
// ============================================
export const tableauImpactData = {
  sectionId: 'impact',
  badge: 'Impact',
  accentColor: 'rw-cyan' as const,
  title: 'Optimisations avec le plus fort impact ROI',
  subtitle: 'Voici les actions que nous priorisons car elles ont le plus d\'impact mesurable sur vos résultats.',
  columns: ['Optimisation', 'Impact typique', 'Fréquence', 'Délai résultats'],
  rows: [
    ['Ajout de mots-clés négatifs', '-15 à -25% dépenses inutiles', 'Hebdomadaire', 'Immédiat'],
    ['Ajustement enchères par device', '+10 à +20% de ROAS', 'Hebdomadaire', '1-2 semaines'],
    ['Tests d\'annonces (RSA)', '+15 à +30% de CTR', 'Bi-mensuel', '2-4 semaines'],
    ['Optimisation des audiences', '+20 à +40% taux conversion', 'Mensuel', '2-4 semaines'],
    ['Restructuration campagnes', '+30 à +50% efficacité globale', 'Trimestriel', '1-2 mois'],
    ['Migration Smart Bidding', '+10 à +25% de conversions', 'Quand assez de data', '2-6 semaines'],
  ],
};

// ============================================
// 8. RYTHME DATA (#rythme) - Pour ProcessSteps
// ============================================
export const rythmeData = {
  sectionId: 'rythme',
  badge: 'Rythme',
  accentColor: 'rw-cyan' as const,
  title: 'À quel rythme optimisons-nous ?',
  subtitle: '4 niveaux d\'intervention. Du monitoring quotidien aux revues stratégiques trimestrielles.',
  steps: [
    {
      id: 'rythme-1',
      stepNumber: '01',
      title: 'Quotidien',
      description: 'Surveillance des anomalies, des pics de dépenses, des alertes. On réagit vite si quelque chose déraille.',
    },
    {
      id: 'rythme-2',
      stepNumber: '02',
      title: 'Hebdomadaire',
      description: 'Analyse des performances de la semaine, ajustements des enchères, optimisation des annonces, gestion des mots-clés.',
    },
    {
      id: 'rythme-3',
      stepNumber: '03',
      title: 'Mensuel',
      description: 'Bilan complet, reporting détaillé, recommandations stratégiques, call de suivi avec vous.',
    },
    {
      id: 'rythme-4',
      stepNumber: '04',
      title: 'Trimestriel',
      description: 'Revue stratégique, ajustement des objectifs, planification des prochaines actions.',
    },
  ],
};

// ============================================
// 9. METRIQUES DATA (#metriques) - Pour StepsDimensions
// ============================================
export const metriquesData = {
  sectionId: 'metriques',
  badge: 'KPIs',
  accentColor: 'rw-cyan' as const,
  title: 'Quelles métriques surveillons-nous ?',
  subtitle: '6 métriques clés pour piloter vos campagnes. Mais la décision finale repose toujours sur l\'impact business.',
  dimensions: [
    {
      dimension: 1,
      label: 'Rentabilité',
      title: 'Coût par conversion (CPA)',
      subtitle: 'Combien vous coûte chaque lead ou vente. La métrique reine pour évaluer l\'efficacité.',
      items: ['Suivi par campagne', 'Benchmark sectoriel', 'Objectif à atteindre'],
    },
    {
      dimension: 2,
      label: 'Performance',
      title: 'Retour sur investissement (ROAS)',
      subtitle: 'Combien rapporte chaque euro investi. Essentiel pour les e-commerces.',
      items: ['Calcul précis', 'Par produit/catégorie', 'Tendance mensuelle'],
    },
    {
      dimension: 3,
      label: 'Efficacité',
      title: 'Taux de conversion',
      subtitle: 'Quelle part du trafic convertit. Indicateur de qualité du ciblage et des landing pages.',
      items: ['Par source de trafic', 'Par device', 'Comparaison périodes'],
    },
    {
      dimension: 4,
      label: 'Qualité',
      title: 'Quality Score & CPC',
      subtitle: 'La note de qualité de vos annonces et le coût par clic. Leviers d\'optimisation.',
      items: ['Score par mot-clé', 'CPC moyen', 'Part d\'impression'],
    },
  ],
};

// ============================================
// 10. FORMULES DATA (#formules) - Pour FeaturesGrid
// ============================================
export const formulesData = {
  sectionId: 'formules',
  badge: 'Formules',
  accentColor: 'rw-cyan' as const,
  title: 'Quel format d\'accompagnement choisir ?',
  subtitle: 'Trois formules selon vos ressources internes et vos besoins. De la gestion complète au conseil ponctuel.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/accompagnement/formule-gestion-complete.webp',
      alt: 'Gestion complète Google Ads',
      title: 'Gestion complète',
      desc: 'On gère tout. Vous nous donnez vos objectifs et votre budget, on s\'occupe du reste. Vous recevez les reportings et validez les orientations stratégiques.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/accompagnement/formule-co-pilotage.webp',
      alt: 'Co-pilotage Google Ads',
      title: 'Co-pilotage',
      desc: 'Vous avez une équipe qui gère au quotidien, on intervient en support : audits réguliers, recommandations, formation, validation des grandes décisions.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/accompagnement/formule-conseil-ponctuel.webp',
      alt: 'Conseil ponctuel Google Ads',
      title: 'Conseil ponctuel',
      desc: 'Vous êtes autonome mais vous avez besoin d\'un regard expert de temps en temps. On intervient sur demande pour des audits ou des problématiques spécifiques.',
    },
  ],
};

// ============================================
// 11. TRANSPARENCE DATA (#transparence) - Pour CategoriesGrid
// ============================================
export const transparenceData = {
  sectionId: 'transparence',
  badge: 'Engagements',
  accentColor: 'rw-cyan' as const,
  title: 'Notre engagement transparence',
  subtitle: 'Des principes clairs pour une relation de confiance.',
  categories: [
    {
      category: 'Accès total',
      icon: 'Key',
      items: ['Votre compte, vos accès', 'Admin complet', 'Aucune dépendance'],
    },
    {
      category: 'Budget séparé',
      icon: 'Wallet',
      items: ['Frais Google distincts', 'Honoraires clairs', 'Zéro marge cachée'],
    },
    {
      category: 'Reporting clair',
      icon: 'FileText',
      items: ['Actions détaillées', 'Résultats mesurés', 'Recommandations'],
    },
    {
      category: 'Sans engagement',
      icon: 'LockOpen',
      items: ['Pas de contrat long', 'Qualité = fidélité', 'Liberté totale'],
    },
  ],
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur notre accompagnement Google Ads.',
  items: [
    {
      id: 'faq-1',
      question: 'Combien coûte l\'accompagnement ?',
      answer: 'Frais fixes ou pourcentage du budget média, selon la taille de vos campagnes. On établit une proposition claire après avoir compris vos besoins.',
    },
    {
      id: 'faq-2',
      question: 'Quelle est la durée d\'engagement ?',
      answer: 'On recommande un minimum de 3 mois pour avoir le temps d\'optimiser et de voir des résultats. Mais pas d\'engagement sur 12 mois si vous n\'êtes pas satisfait.',
    },
    {
      id: 'faq-3',
      question: 'Qui sera mon interlocuteur ?',
      answer: 'Un consultant dédié qui connaît votre compte et vos enjeux. Pas de turnover permanent, de la continuité.',
    },
    {
      id: 'faq-4',
      question: 'Que se passe-t-il si je veux arrêter ?',
      answer: 'Le compte vous appartient, avec tout son historique. On vous fait une passation propre et vous continuez comme vous le souhaitez.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The key is not to spend money, but to invest it.',
  author: 'Larry Page',
  role: 'Co-founder Google',
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Concentrez-vous sur',
  titleHighlight: 'votre business',
  description: 'Nous gérons vos campagnes Google Ads, vous gérez votre entreprise. Chacun son métier. Vos campagnes sont optimisées en continu pour maximiser le ROI.',
  secondaryDescription: 'Première étape : un audit de vos campagnes actuelles ou un call de cadrage si vous partez de zéro. Nous vous proposons un accompagnement adapté à vos besoins et votre budget.',
  buttonText: 'Discuter de l\'accompagnement',
  checklistItems: [
    { id: '1', text: 'Audit gratuit' },
    { id: '2', text: 'Proposition sous 48h' },
    { id: '3', text: 'Sans engagement long' },
  ],
};
