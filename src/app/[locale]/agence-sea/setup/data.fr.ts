/**
 * ============================================
 * DATA - Contenu de la page Set Up SEA
 * ============================================
 *
 * URL: /agence-sea/setup
 * Mots-clés: Création campagne Google Ads, Configuration compte Ads, Set up Google Ads
 * Intention: Transactionnelle
 * Parent: /agence-sea
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Création de campagne Google Ads qui convertit - Rankwell',
  description: 'Création de campagne Google Ads sur-mesure. Setup complet : structure, tracking, annonces. Vos campagnes performent dès le jour 1. Devis gratuit.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA', href: '/agence-sea' },
    { label: 'Création de campagne' },
  ] as BreadcrumbItem[],
  title: 'Création de campagne Google Ads performante',
  description: 'Une campagne Google Ads mal structurée, c\'est du budget gaspillé dès le départ. On crée des bases propres pour performer dès le lancement.',
  ctaText: 'Créer ma campagne Google Ads',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Création de campagne',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Beaucoup d\'annonceurs lancent leur campagne Google Ads dans l\'urgence. Ciblage large, structure improvisée, on verra bien. Résultat : un compte en désordre, impossible à optimiser, qui brûle du budget.',
    'Un setup Google Ads bien fait, c\'est l\'inverse. Une structure logique, un tracking fiable, des fondations qui permettent d\'optimiser efficacement par la suite.',
    'Découvrez comment notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> de la création de campagne pose les bases d\'un compte performant. Investir dans la structure, c\'est maximiser le ROI sur le long terme.',
  ],
  tocItems: [
    { id: 'garanties', label: 'Nos garanties', icon: 'Shield' },
    { id: 'etapes', label: 'Les 7 étapes', icon: 'ListChecks' },
    { id: 'erreurs', label: 'Erreurs coûteuses', icon: 'TriangleAlert' },
    { id: 'scenarios', label: 'Types de set up', icon: 'LayoutGrid' },
    { id: 'process', label: 'Déroulement', icon: 'GitBranch' },
    { id: 'livrables', label: 'Livrables', icon: 'Package' },
    { id: 'apres', label: 'Après le set up', icon: 'ArrowRight' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. GARANTIES DATA (#garanties)
// ============================================
export const garantiesData = {
  sectionId: 'garanties',
  badge: 'Garanties',
  accentColor: 'rw-cyan' as const,
  title: 'Ce que nous vous garantissons',
  subtitle: 'Des engagements concrets avant même de commencer.',
  items: [
    {
      id: 1,
      icon: 'Key',
      title: 'Compte 100% à vous',
      description: 'Propriété totale, accès admin. Aucune dépendance envers nous.',
    },
    {
      id: 2,
      icon: 'CircleCheck',
      title: 'Tracking validé avant lancement',
      description: 'Aucune campagne lancée sans suivi des conversions fonctionnel.',
    },
    {
      id: 3,
      icon: 'FileText',
      title: 'Documentation incluse',
      description: 'Vous comprenez ce qui a été fait, pourquoi, et comment le faire évoluer.',
    },
    {
      id: 4,
      icon: 'Headphones',
      title: 'Suivi post-lancement',
      description: 'On ne vous abandonne pas : monitoring et ajustements les premiers jours.',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
  author: 'Abraham Lincoln',
  role: '(applicable au SEA)',
};

// ============================================
// 5. ETAPES SET UP DATA (#etapes) - Pour StackCardsSection
// ============================================
export const etapesSetupData = {
  sectionId: 'etapes',
  badge: 'Méthodologie',
  accentColor: 'rw-cyan' as const,
  title: 'Que comprend concrètement notre set up ?',
  titleHighlight: '',
  description: '7 étapes pour poser des fondations solides. Chaque étape a des livrables concrets.',
  cards: [
    {
      id: 1,
      icon: 'Search',
      title: 'Audit préalable (si compte existant)',
      description: 'Vous avez déjà un compte ? On analyse ce qui existe, ce qui fonctionne, ce qui doit être restructuré. Pas de table rase si ce n\'est pas nécessaire.',
    },
    {
      id: 2,
      icon: 'Target',
      title: 'Définition de la stratégie',
      description: 'Objectifs business (ventes, leads, notoriété), KPIs cibles (CPA, ROAS, volume), budget et répartition, priorités géographiques et temporelles.',
    },
    {
      id: 3,
      icon: 'Type',
      title: 'Recherche de mots-clés',
      description: 'Identification des requêtes à cibler, analyse des volumes et de la concurrence, liste de mots-clés négatifs, segmentation par intention.',
    },
    {
      id: 4,
      icon: 'FolderTree',
      title: 'Structure du compte',
      description: 'Organisation des campagnes par objectif/thématique, groupes d\'annonces cohérents, logique de naming claire, paramètres de ciblage.',
    },
    {
      id: 5,
      icon: 'PenTool',
      title: 'Création des annonces',
      description: 'Rédaction des annonces (RSA, DSA selon les cas), configuration des extensions (liens, accroches, appels...), variantes pour les tests A/B.',
    },
    {
      id: 6,
      icon: 'Activity',
      title: 'Configuration du tracking',
      description: 'Installation des balises de conversion, liaison avec Google Analytics, configuration des objectifs, tests de suivi des conversions.',
    },
    {
      id: 7,
      icon: 'DollarSign',
      title: 'Paramétrage des enchères',
      description: 'Stratégie d\'enchères adaptée aux objectifs, enchères de départ réalistes, configuration du budget quotidien.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Tracking : la fondation de tout',
  text: 'Un set up sans tracking fiable ne sert à rien. Nous configurons systématiquement le suivi des conversions avant de lancer quoi que ce soit. C\'est la base pour mesurer et optimiser.',
};

// ============================================
// 7. TABLEAU ERREURS DATA (#erreurs)
// ============================================
export const tableauErreursData = {
  sectionId: 'erreurs',
  badge: 'Attention',
  accentColor: 'rw-cyan' as const,
  title: 'Erreurs de set up les plus coûteuses',
  subtitle: 'Ces erreurs de configuration que nous corrigeons régulièrement coûtent cher dès le premier jour.',
  columns: ['Erreur de configuration', 'Conséquence', 'Perte estimée', 'Temps pour corriger'],
  rows: [
    ['Ciblage géo trop large', 'Clics hors zone de chalandise', '20-40% du budget gaspillé', '5 minutes'],
    ['Pas de mots-clés négatifs', 'Trafic non qualifié', '15-30% du budget gaspillé', '1-2 heures'],
    ['Structure trop plate', 'Optimisation impossible', 'Manque à gagner important', 'Restructuration complète'],
    ['Conversions non trackées', 'Algorithme aveugle, ROAS inconnu', 'Impossible à chiffrer', '2-4 heures'],
    ['Budget mal réparti', 'Campagnes rentables sous-financées', 'Opportunités perdues', 'Analyse + ajustement'],
    ['Annonces génériques', 'CTR bas, Quality Score faible', 'CPC 20-50% plus cher', 'Rédaction dédiée'],
  ],
};

// ============================================
// 8. SCENARIOS DATA (#scenarios)
// ============================================
export const scenariosData = {
  sectionId: 'scenarios',
  badge: 'Situations',
  accentColor: 'rw-cyan' as const,
  title: 'Quel type de set up pour votre situation ?',
  subtitle: 'Trois scénarios possibles. Nous adaptons notre approche à votre point de départ.',
  reasons: [
    {
      id: 'creation',
      title: 'Création de compte',
      description: 'Vous n\'avez jamais fait de Google Ads. On part de zéro, on crée tout proprement.',
      icon: 'Plus',
    },
    {
      id: 'restructuration',
      title: 'Restructuration',
      description: 'Vous avez un compte mais c\'est le chaos. On remet de l\'ordre, on conserve l\'historique utile.',
      icon: 'RefreshCw',
    },
    {
      id: 'expansion',
      title: 'Expansion',
      description: 'Vous avez des campagnes qui marchent, vous voulez en lancer de nouvelles (nouveau produit, nouveau marché). On structure l\'extension.',
      icon: 'TrendingUp',
    },
  ],
};

// ============================================
// 9. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'Comment se déroule le set up ?',
  subtitle: '5 étapes du brief au lancement. Comptez 1 à 2 semaines selon la complexité de votre projet.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief stratégique',
      description: 'On comprend votre business, vos objectifs, vos contraintes. Le set up doit servir votre stratégie, pas l\'inverse.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Recherche et planification',
      description: 'Analyse des mots-clés, de la concurrence, définition de la structure optimale.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Création et configuration',
      description: 'Mise en place de tout : compte, campagnes, annonces, tracking.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Tests et validation',
      description: 'On vérifie que tout fonctionne avant de lancer : tracking, ciblage, diffusion.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Lancement et monitoring',
      description: 'Mise en ligne et surveillance rapprochée les premiers jours pour ajuster si nécessaire.',
    },
  ],
};

// ============================================
// 10. LIVRABLES DATA (#livrables)
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Livrables',
  accentColor: 'rw-cyan' as const,
  title: 'Que recevez-vous concrètement ?',
  subtitle: 'Un compte prêt à performer avec tout ce qu\'il faut pour mesurer et optimiser.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/setup/livrable-compte-structure.webp',
      alt: 'Compte Google Ads structuré',
      title: 'Compte Google Ads structuré',
      desc: 'Prêt à performer dès le lancement',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/setup/livrable-tracking.webp',
      alt: 'Tracking conversions',
      title: 'Tracking fiable',
      desc: 'Pour mesurer les conversions avec précision',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/setup/livrable-documentation.webp',
      alt: 'Documentation set up',
      title: 'Documentation complète',
      desc: 'De la structure et des choix stratégiques',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/setup/livrable-acces.webp',
      alt: 'Accès compte Google Ads',
      title: 'Accès total à votre compte',
      desc: 'C\'est le vôtre, pas le nôtre',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/setup/livrable-accompagnement.webp',
      alt: 'Accompagnement post-lancement',
      title: 'Accompagnement post-lancement',
      desc: 'Surveillance et ajustements les premiers jours',
    },
  ],
};

// ============================================
// 11. APRES SET UP DATA (#apres)
// ============================================
export const apresSetupData = {
  sectionId: 'apres',
  badge: 'Et après ?',
  accentColor: 'rw-cyan' as const,
  title: 'Que se passe-t-il après le set up ?',
  subtitle: 'Le set up est le point de départ. Ensuite, vous choisissez comment continuer.',
  items: [
    {
      id: 1,
      title: 'Vous gérez en interne',
      description: 'On vous a donné les clés, vous pilotez. On reste disponible pour du conseil ponctuel si besoin.',
      icon: 'User',
      href: '',
      buttonText: '',
    },
    {
      id: 2,
      title: 'On continue ensemble',
      description: 'Accompagnement et monitoring continu pour optimiser et faire croître vos campagnes.',
      icon: 'Handshake',
      href: '/agence-sea/accompagnement',
      buttonText: 'Découvrir l\'accompagnement',
    },
  ],
  footerText: 'Pas d\'obligation, pas de piège. Vous choisissez ce qui vous convient.',
};

// ============================================
// 12. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEA accounts are built on solid foundations, not quick fixes.',
  author: 'Brad Geddes',
  role: 'Google Ads Expert',
};

// ============================================
// 13. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le set up Google Ads.',
  items: [
    {
      id: 'faq-1',
      question: 'Combien de temps prend un set up Google Ads ?',
      answer: 'Comptez 1 à 2 semaines selon la complexité de votre projet. Un set up pour une activité locale simple sera plus rapide qu\'un compte e-commerce avec plusieurs catégories de produits. On préfère prendre le temps de bien faire plutôt que de bâcler.',
    },
    {
      id: 'faq-2',
      question: 'Puis-je gérer mon compte moi-même après le set up ?',
      answer: 'Absolument. C\'est votre compte, pas le nôtre. On vous livre un compte structuré avec une documentation complète. Vous pouvez le gérer en interne ou nous confier l\'accompagnement continu.',
    },
    {
      id: 'faq-3',
      question: 'Et si j\'ai déjà un compte Google Ads ?',
      answer: 'On commence par un audit de l\'existant. Selon l\'état du compte, on restructure ce qui doit l\'être en conservant l\'historique utile. Pas de table rase systématique.',
    },
    {
      id: 'faq-4',
      question: 'Le tracking est-il vraiment indispensable ?',
      answer: 'Oui, c\'est la base. Sans tracking fiable, impossible de savoir ce qui fonctionne. L\'algorithme Google optimise à l\'aveugle, vous ne pouvez pas calculer votre ROI. On ne lance jamais de campagne sans avoir validé le suivi des conversions.',
    },
    {
      id: 'faq-5',
      question: 'Quel budget prévoir pour le set up ?',
      answer: 'Le coût dépend de la complexité : nombre de campagnes, types d\'annonces, besoins en tracking. On établit un devis après le brief initial. C\'est un investissement ponctuel qui évite des mois de budget publicitaire gaspillé.',
    },
    {
      id: 'faq-6',
      question: 'Quelle différence avec les configurations automatiques de Google ?',
      answer: 'Les configurations automatiques de Google sont conçues pour dépenser votre budget rapidement, pas pour maximiser votre ROI. Notre set up est pensé pour vos objectifs business, avec une structure qui permet d\'optimiser finement.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Partez sur de',
  titleHighlight: 'bonnes bases',
  description: 'Un set up bien fait, c\'est des mois d\'optimisation gagnés. Des fondations solides permettent de tester, ajuster et scaler efficacement. Le ROI commence par là.',
  secondaryDescription: 'Première étape : un brief de 30 minutes pour comprendre votre projet. Nous vous proposons ensuite un set up adapté à vos objectifs et votre budget.',
  buttonText: 'Lancer mon projet SEA',
  checklistItems: [
    { id: '1', text: 'Brief gratuit' },
    { id: '2', text: 'Devis sous 48h' },
    { id: '3', text: 'Lancement en 1-2 semaines' },
  ],
};
