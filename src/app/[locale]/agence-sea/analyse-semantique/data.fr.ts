/**
 * ============================================
 * DATA - Contenu de la page Analyse Sémantique SEA
 * ============================================
 *
 * URL: /agence-sea/analyse-semantique
 * Mots-clés: Audit mots-clés Google Ads, Étude sémantique SEA, Analyse keywords Ads
 * Intention: Transactionnelle
 * Parent: /agence-sea
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Audit mots-clés Google Ads qui révèle le ROI - Rankwell',
  description: 'Audit de mots-clés Google Ads : on trouve les requêtes qui convertissent et celles qui brûlent votre budget. Stratégie mots-clés SEA sur-mesure.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA', href: '/agence-sea' },
    { label: 'Audit mots-clés' },
  ] as BreadcrumbItem[],
  title: 'Audit de mots-clés Google Ads pour cibler ce qui convertit',
  description: 'En SEA, les mots-clés font tout. Cibler les mauvais, c\'est gaspiller du budget. Notre audit sémantique révèle ceux qui génèrent vraiment du business.',
  ctaText: 'Demander un audit mots-clés',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Audit mots-clés Google Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Google Ads vous permet de cibler des milliers de mots-clés. Le problème : tous ne se valent pas. Certains amènent du trafic qui convertit. D\'autres brûlent votre budget sans retour.',
    'L\'audit sémantique de vos campagnes Ads, c\'est identifier les requêtes qui génèrent vraiment du business. Comprendre l\'intention derrière chaque recherche. Structurer votre stratégie de mots-clés pour maximiser le ROI.',
    'Découvrez comment notre recherche de mots-clés SEA et notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> conditionnent toute la performance de vos campagnes. Cibler ce qui convertit, pas ce qui impressionne.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Ce qui est inclus', icon: 'Package' },
    { id: 'dimensions', label: 'Dimensions d\'analyse', icon: 'Layers' },
    { id: 'grille', label: 'Grille de décision', icon: 'Table' },
    { id: 'livrables', label: 'Livrables', icon: 'FileText' },
    { id: 'quand', label: 'Quand faire l\'analyse', icon: 'Clock' },
    { id: 'process', label: 'Déroulement', icon: 'ListChecks' },
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
  title: 'Ce que comprend notre analyse sémantique',
  subtitle: 'Une vision complète de votre potentiel sur Google Ads.',
  items: [
    {
      id: 1,
      icon: 'Search',
      title: 'Audit de l\'existant',
      description: 'Ce qui convertit, ce qui coûte, les opportunités manquées',
    },
    {
      id: 2,
      icon: 'ListTree',
      title: 'Recherche exhaustive',
      description: 'Toutes les requêtes pertinentes pour votre activité',
    },
    {
      id: 3,
      icon: 'Brain',
      title: 'Analyse des intentions',
      description: 'Transactionnelles, comparatives, informationnelles',
    },
    {
      id: 4,
      icon: 'Ban',
      title: 'Liste de négatifs',
      description: 'Les termes à exclure pour éviter le gaspillage',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 5. DIMENSIONS DATA (#dimensions) - Pour StepsDimensions
// ============================================
export const dimensionsData = {
  sectionId: 'dimensions',
  badge: 'Analyse',
  accentColor: 'rw-cyan' as const,
  title: 'Quelles dimensions couvre notre analyse ?',
  subtitle: '6 dimensions pour une vision complète de votre potentiel sémantique.',
  dimensions: [
    {
      dimension: 1,
      label: 'Existant',
      title: 'Audit de l\'existant',
      subtitle: 'Si vous avez déjà des campagnes, on analyse vos mots-clés actuels.',
      items: ['Mots-clés qui convertissent', 'Ceux qui coûtent sans rapporter', 'Opportunités manquées'],
    },
    {
      dimension: 2,
      label: 'Recherche',
      title: 'Recherche de mots-clés',
      subtitle: 'Identification exhaustive des requêtes liées à votre activité.',
      items: ['Volumes de recherche', 'Estimation des CPC', 'Requêtes de niche à fort potentiel'],
    },
    {
      dimension: 3,
      label: 'Intentions',
      title: 'Analyse des intentions',
      subtitle: 'Toutes les requêtes ne se valent pas. On distingue les intentions.',
      items: ['Transactionnelles (acheter, prix)', 'Comparatives (meilleur, avis)', 'Informationnelles (comment)'],
    },
    {
      dimension: 4,
      label: 'Concurrence',
      title: 'Analyse concurrentielle',
      subtitle: 'Comprendre où vos concurrents investissent et où il y a de la place.',
      items: ['Mots-clés ciblés par les concurrents', 'Positions dominantes', 'Opportunités disponibles'],
    },
    {
      dimension: 5,
      label: 'Négatifs',
      title: 'Liste de mots-clés négatifs',
      subtitle: 'Aussi important que les mots-clés à cibler : ceux à exclure.',
      items: ['Termes non qualifiés', 'Requêtes hors cible', 'Économies de budget'],
    },
    {
      dimension: 6,
      label: 'Structure',
      title: 'Recommandations de structure',
      subtitle: 'Comment organiser ces mots-clés dans votre compte Google Ads.',
      items: ['Organisation en campagnes', 'Groupes d\'annonces cohérents', 'Logique d\'optimisation'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Synergie SEA et SEO',
  text: 'L\'analyse sémantique SEA révèle des insights précieux pour le SEO. Les mots-clés qui convertissent en Ads sont souvent ceux à travailler en organique. Nous partageons ces learnings si vous combinez les deux leviers.',
};

// ============================================
// 7. TABLEAU GRILLE DATA (#grille)
// ============================================
export const tableauGrilleData = {
  sectionId: 'grille',
  badge: 'Décision',
  accentColor: 'rw-cyan' as const,
  title: 'Comment évaluer un mot-clé Google Ads',
  subtitle: 'Tous les mots-clés ne méritent pas le même investissement. Voici notre grille de décision.',
  columns: ['Type de mot-clé', 'CPC typique', 'Taux conversion', 'Priorité', 'Stratégie'],
  rows: [
    ['Marque propre', '0,10-0,50€', '8-15%', 'Défensif', 'Protéger si concurrents enchérissent'],
    ['Transactionnel ("acheter X")', '2-10€', '3-8%', '★★★★★', 'Budget prioritaire'],
    ['Comparatif ("meilleur X")', '1-5€', '2-5%', '★★★★☆', 'Landing pages avec preuves'],
    ['Local ("X + ville")', '0,50-3€', '5-10%', '★★★★☆', 'Excellent ROI si zone pertinente'],
    ['Générique ("X")', '1-8€', '1-3%', '★★★☆☆', 'Qualifier avec négatifs'],
    ['Informationnel ("comment X")', '0,30-1€', '0,5-2%', '★★☆☆☆', 'Remarketing ou SEO plutôt'],
  ],
};

// ============================================
// 8. LIVRABLES DATA (#livrables)
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Livrables',
  accentColor: 'rw-cyan' as const,
  title: 'Que recevez-vous concrètement ?',
  subtitle: '5 livrables exploitables. De la base de mots-clés aux recommandations de structure.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-base-mots-cles.webp',
      alt: 'Base de mots-clés',
      title: 'Base de mots-clés complète',
      desc: 'Fichier structuré avec volumes, CPC estimés, intentions et priorités',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-negatifs.webp',
      alt: 'Liste de négatifs',
      title: 'Liste de négatifs',
      desc: 'Mots-clés à exclure pour éviter le trafic non qualifié',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-structure.webp',
      alt: 'Recommandations structure',
      title: 'Recommandations structure',
      desc: 'Organisation optimale dans votre compte Google Ads',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-budget.webp',
      alt: 'Estimation budgétaire',
      title: 'Estimation budgétaire',
      desc: 'Projection du budget pour couvrir les mots-clés prioritaires',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/analyse-semantique/livrable-presentation.webp',
      alt: 'Présentation findings',
      title: 'Présentation des findings',
      desc: 'Call pour présenter l\'analyse et répondre à vos questions',
    },
  ],
};

// ============================================
// 9. QUAND DATA (#quand) - Pour StickyFeatures
// ============================================
export const quandData = {
  sectionId: 'quand',
  badge: 'Timing',
  accentColor: 'rw-cyan' as const,
  title: 'Quand faire une analyse sémantique SEA',
  subtitle: '5 situations où l\'analyse sémantique fait la différence.',
  items: [
    {
      id: 1,
      icon: 'Rocket',
      title: 'Avant de lancer Google Ads',
      description: 'Pour partir sur les bonnes bases et ne pas gaspiller le budget de démarrage. L\'analyse révèle les mots-clés prioritaires dès le départ.',
    },
    {
      id: 2,
      icon: 'TrendingDown',
      title: 'Compte qui stagne',
      description: 'Pour identifier de nouvelles opportunités et relancer la croissance. Souvent, des requêtes à fort potentiel restent inexploitées.',
    },
    {
      id: 3,
      icon: 'DollarSign',
      title: 'Budget qui file sans résultats',
      description: 'Pour comprendre où va l\'argent et réorienter les investissements. L\'analyse révèle les mots-clés qui consomment sans convertir.',
    },
    {
      id: 4,
      icon: 'Sparkles',
      title: 'Nouveau produit ou service',
      description: 'Pour identifier le potentiel d\'un nouveau produit/service avant d\'investir en publicité.',
    },
    {
      id: 5,
      icon: 'Globe',
      title: 'Expansion géographique',
      description: 'Pour adapter la sémantique à un nouveau marché. Les requêtes varient selon les régions.',
    },
  ],
};

// ============================================
// 10. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'Comment ça se passe',
  subtitle: '4 étapes du brief à la livraison. Comptez 1-2 semaines selon la complexité.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief',
      description: 'On comprend votre activité, vos produits/services, vos cibles, vos objectifs.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Collecte',
      description: 'Extraction des données existantes, recherche dans les outils, analyse concurrentielle.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Analyse',
      description: 'Tri, qualification, priorisation des mots-clés. C\'est le gros du travail.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Livraison',
      description: 'Remise des livrables et présentation en visio.',
    },
  ],
};

// ============================================
// 11. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur l\'analyse sémantique SEA.',
  items: [
    {
      id: 'faq-1',
      question: 'Combien de mots-clés allez-vous analyser ?',
      answer: 'Ça dépend de votre secteur et de l\'étendue de votre offre. On vise l\'exhaustivité sur les requêtes pertinentes, pas un nombre arbitraire.',
    },
    {
      id: 'faq-2',
      question: 'Les mots-clés identifiés seront-ils implémentés ?',
      answer: 'L\'analyse sémantique est un livrable en soi. L\'implémentation dans vos campagnes peut faire l\'objet d\'un set up ou d\'un accompagnement séparé.',
    },
    {
      id: 'faq-3',
      question: 'En combien de temps ?',
      answer: 'Comptez 1-2 semaines selon la complexité de votre secteur.',
    },
    {
      id: 'faq-4',
      question: 'L\'analyse est-elle utile aussi pour le SEO ?',
      answer: 'Absolument. Les mots-clés qui convertissent en SEA sont souvent ceux à travailler en organique. Nous partageons ces insights si vous combinez les deux leviers.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 12. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best keyword is the one that converts, not the one with the most searches.',
  author: 'Perry Marshall',
  role: 'Google Ads Expert',
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Ciblez ce qui',
  titleHighlight: 'convertit',
  description: 'Une bonne analyse sémantique, c\'est la base d\'un compte Google Ads performant. Elle révèle ce que vos clients cherchent vraiment et où investir votre budget.',
  secondaryDescription: 'Première étape : un brief pour comprendre votre activité et vos objectifs. Nous vous livrons ensuite une analyse complète avec des recommandations priorisées.',
  buttonText: 'Demander une analyse',
  checklistItems: [
    { id: '1', text: 'Brief gratuit' },
    { id: '2', text: 'Livraison en 1-2 semaines' },
    { id: '3', text: 'Livrables exploitables' },
  ],
};
