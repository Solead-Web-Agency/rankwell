/**
 * ============================================
 * DATA - Contenu de la page SEA International
 * ============================================
 *
 * URL: /agence-sea/international
 * Mots-clés: Google Ads international, SEA multi-pays, publicité internationale
 * Intention: Transactionnelle
 * Parent: /agence-sea
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Google Ads international multi-pays - Rankwell',
  description: 'Google Ads international et campagnes multilingues. Publicité internationale sur Google adaptée à chaque marché. SEA international ROI-driven.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA', href: '/agence-sea' },
    { label: 'Google Ads international' },
  ] as BreadcrumbItem[],
  title: 'Google Ads international pour conquérir de nouveaux marchés',
  description: 'Vous lancez des campagnes sur plusieurs pays. Le SEA international demande une publicité adaptée à chaque marché, des annonces multilingues et une gestion experte. Bureaux à Paris et Dubaï.',
  ctaText: 'Discuter de votre projet',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Google Ads international',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Dupliquer vos campagnes françaises sur d\'autres marchés, ça ne fonctionne pas. Les CPC varient énormément d\'un pays à l\'autre. Les messages qui convertissent en France tombent à plat ailleurs. Votre publicité internationale sur Google doit être adaptée.',
    'Avec des bureaux à Paris et Dubaï, Rankwell gère des campagnes Ads multilingues sur l\'Europe, le MENA et au-delà. Notre expertise en SEA international adapte la stratégie à chaque marché tout en gardant une vision consolidée de votre ROI global.',
    'Chaque euro investi doit rapporter, <strong class="text-secondary dark:text-accent">quel que soit le pays</strong> où il est dépensé.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Ce qu\'on apporte', icon: 'Package' },
    { id: 'enjeux', label: 'Les enjeux', icon: 'CircleAlert' },
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'marches', label: 'Marchés couverts', icon: 'Globe' },
    { id: 'campagnes', label: 'Types de campagnes', icon: 'LayoutGrid' },
    { id: 'process', label: 'Déroulement', icon: 'ListChecks' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#inclus)
// ============================================
export const incluData = {
  sectionId: 'inclus',
  badge: 'Notre apport',
  accentColor: 'rw-cyan' as const,
  title: 'Ce qu\'on apporte sur le SEA international',
  subtitle: 'Une expertise multi-marchés pour maximiser votre ROI global.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Stratégie par marché',
      description: 'Enchères, messages, landing pages adaptés à chaque pays',
    },
    {
      id: 2,
      icon: 'FolderTree',
      title: 'Structure optimisée',
      description: 'Organisation multi-pays claire et scalable',
    },
    {
      id: 3,
      icon: 'Languages',
      title: 'Annonces localisées',
      description: 'Rédaction native, pas de traduction automatique',
    },
    {
      id: 4,
      icon: 'ChartBar',
      title: 'Pilotage ROI par pays',
      description: 'Vous savez ce que rapporte chaque marché',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'International PPC isn\'t about translating ads. It\'s about understanding how people in different markets search, think, and buy.',
  author: 'Brad Geddes',
  role: 'Founder Adalysis',
};

// ============================================
// 5. ENJEUX DATA (#enjeux) - Pour StepsDimensions
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'Enjeux',
  accentColor: 'rw-cyan' as const,
  title: 'Les vrais enjeux du SEA international',
  subtitle: 'Lancer des campagnes à l\'international sans adaptation, c\'est gaspiller du budget.',
  dimensions: [
    {
      dimension: 1,
      label: 'CPC',
      title: 'Les CPC varient énormément',
      subtitle: 'Un clic qui coûte 2€ en France peut coûter 15€ aux États-Unis ou 0.50€ au Maroc.',
      items: ['Analyse des CPC par marché', 'Stratégies d\'enchères adaptées', 'Objectifs de CPA réalistes par pays'],
    },
    {
      dimension: 2,
      label: 'Messages',
      title: 'Les messages doivent résonner localement',
      subtitle: 'Une accroche qui fonctionne en France peut être incompréhensible ailleurs.',
      items: ['Rédaction d\'annonces par des natifs', 'Tests A/B par marché', 'Adaptation des extensions et assets'],
    },
    {
      dimension: 3,
      label: 'Tracking',
      title: 'Le suivi doit être granulaire',
      subtitle: 'Savoir que "l\'international" rapporte ne suffit pas. Vous devez savoir ce que rapporte chaque pays.',
      items: ['Tracking par pays', 'Attribution multi-marchés', 'Dashboards consolidés avec drill-down'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Devises et fuseaux horaires',
  text: 'Gérer des campagnes multi-pays, c\'est aussi gérer des devises différentes, des fuseaux horaires décalés et des calendriers commerciaux qui ne coïncident pas. Notre expérience sur les marchés MENA nous a appris à gérer ces complexités.',
};

// ============================================
// 7. TABLEAU CPC DATA
// ============================================
export const tableauCpcData = {
  sectionId: 'cpc',
  badge: 'Benchmark',
  accentColor: 'rw-cyan' as const,
  title: 'CPC moyens et potentiel par zone géographique',
  subtitle: 'Les coûts et opportunités varient énormément selon les marchés.',
  columns: ['Zone', 'CPC moyen Search', 'Concurrence', 'Potentiel ROI', 'Budget minimum'],
  rows: [
    ['France', '1-4€', '★★★★☆', '★★★★☆', '2-5k€/mois'],
    ['UK', '2-6£', '★★★★★', '★★★★☆', '5-10k€/mois'],
    ['Allemagne', '1-5€', '★★★★☆', '★★★★★', '3-8k€/mois'],
    ['États-Unis', '3-15$', '★★★★★', '★★★☆☆', '10k€/mois min'],
    ['MENA (EAU, KSA)', '0.5-3$', '★★★☆☆', '★★★★★', '2-5k€/mois'],
    ['Espagne / Italie', '0.5-2€', '★★★☆☆', '★★★★☆', '1.5-4k€/mois'],
  ],
};

// ============================================
// 8. APPROCHE DATA (#approche) - Pour FeaturesGrid
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Approche',
  accentColor: 'rw-cyan' as const,
  title: 'Notre approche du SEA international',
  subtitle: 'Une méthodologie éprouvée pour maximiser le ROI de vos campagnes multi-pays.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/international/approche-structure.webp',
      alt: 'Structure de compte',
      title: 'Structure de compte claire',
      desc: 'Campagnes organisées par pays ou zone. Nommage cohérent. Budgets séparés par marché.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/international/approche-localisation.webp',
      alt: 'Localisation annonces',
      title: 'Localisation des annonces',
      desc: 'Pas de traduction Google Translate. On travaille avec des rédacteurs natifs pour des annonces qui parlent à chaque audience.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/international/approche-landing-pages.webp',
      alt: 'Landing pages',
      title: 'Landing pages adaptées',
      desc: 'L\'annonce attire le clic, la landing page convertit. On s\'assure que vos pages sont optimisées pour chaque marché.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/international/approche-arbitrage.webp',
      alt: 'Arbitrage dynamique',
      title: 'Arbitrage dynamique',
      desc: 'Les budgets ne sont pas figés. On réalloue vers les marchés qui performent en temps réel.',
    },
  ],
};

// ============================================
// 9. MARCHES DATA (#marches) - Pour ReasonsGrid
// ============================================
export const marchesData = {
  sectionId: 'marches',
  badge: 'Couverture',
  accentColor: 'rw-cyan' as const,
  title: 'Les marchés que nous couvrons',
  subtitle: 'Avec des bureaux à Paris et Dubaï, on gère vos campagnes sur ces zones.',
  reasons: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Europe',
      description: 'France, UK, Allemagne, Espagne, Italie, Benelux, Suisse, pays nordiques. On connaît les niveaux de CPC et les spécificités de chaque marché.',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'MENA',
      description: 'Émirats, Arabie Saoudite, Qatar, Koweït, Égypte. Des marchés en forte croissance avec des opportunités de CPC intéressantes.',
    },
    {
      id: 3,
      icon: 'Flag',
      title: 'Amérique du Nord',
      description: 'États-Unis, Canada. Le marché le plus compétitif et le plus cher. Demande une stratégie spécifique pour être rentable.',
    },
  ],
};

// ============================================
// 10. CAMPAGNES DATA (#campagnes) - Pour FeaturesGrid
// ============================================
export const campagnesData = {
  sectionId: 'campagnes',
  badge: 'Campagnes',
  accentColor: 'rw-cyan' as const,
  title: 'Types de campagnes gérées',
  subtitle: 'Tous les formats Google Ads, adaptés à chaque marché.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/international/campagne-search.webp',
      alt: 'Search',
      title: 'Search',
      desc: 'Campagnes sur le réseau de recherche Google. Mots-clés localisés par marché, annonces adaptées.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/international/campagne-shopping.webp',
      alt: 'Shopping',
      title: 'Shopping',
      desc: 'Pour l\'e-commerce multi-pays. Flux produits par marché, devises, politiques de livraison locales.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/international/campagne-display-youtube.webp',
      alt: 'Display YouTube',
      title: 'Display & YouTube',
      desc: 'Notoriété et remarketing à l\'international. Visuels et vidéos adaptés aux sensibilités locales.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/international/campagne-performance-max.webp',
      alt: 'Performance Max',
      title: 'Performance Max',
      desc: 'Campagnes automatisées multi-canaux. On paramètre les signaux d\'audience par marché.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/international/campagne-demand-gen.webp',
      alt: 'Demand Gen',
      title: 'Demand Gen',
      desc: 'Génération de demande sur Discover, Gmail, YouTube. Créatifs adaptés à chaque culture.',
    },
    {
      id: 6,
      // image: '/images/pages/agence-sea/international/campagne-app.webp',
      alt: 'App Campaigns',
      title: 'App Campaigns',
      desc: 'Acquisition d\'utilisateurs pour vos apps sur différents marchés. ASO et paid acquisition coordonnés.',
    },
  ],
};

// ============================================
// 11. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-cyan' as const,
  title: 'Comment se déroule un projet SEA international',
  subtitle: '4 étapes pour déployer vos campagnes multi-pays.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Audit & Cadrage',
      description: 'Marchés cibles, budgets, objectifs par pays, structure existante.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Setup',
      description: 'Structure de compte, campagnes, annonces localisées, tracking.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Lancement',
      description: 'Activation par marché, monitoring intensif, ajustements rapides.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Optimisation',
      description: 'Tests, arbitrages, scaling des marchés rentables.',
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
  subtitle: 'Tout ce que vous devez savoir sur le SEA international.',
  items: [
    {
      id: 'faq-1',
      question: 'Faut-il un compte Google Ads par pays ?',
      answer: 'Pas nécessairement. Un compte unique avec des campagnes bien structurées par pays fonctionne très bien dans la plupart des cas. On recommande des comptes séparés uniquement pour des situations spécifiques (entités juridiques différentes, agences locales impliquées).',
    },
    {
      id: 'faq-2',
      question: 'Comment gérez-vous les différentes devises ?',
      answer: 'On peut gérer en devise locale ou centraliser en euros/dollars selon votre préférence comptable. Le reporting est consolidé avec conversion automatique pour que vous ayez une vue claire de votre ROI global.',
    },
    {
      id: 'faq-3',
      question: 'Peut-on commencer petit et scaler ensuite ?',
      answer: 'C\'est même recommandé. On lance souvent sur 2-3 marchés prioritaires, on valide le modèle, puis on étend progressivement. Ça permet d\'apprendre sans prendre trop de risques budgétaires.',
    },
    {
      id: 'faq-4',
      question: 'Comment gérez-vous les langues que vous ne parlez pas ?',
      answer: 'On travaille avec des rédacteurs natifs pour chaque langue. Allemand, espagnol, arabe, italien : on a des partenaires de confiance intégrés à notre process. Vous gardez un interlocuteur unique chez Rankwell.',
    },
    {
      id: 'faq-5',
      question: 'Quel budget minimum pour du SEA international ?',
      answer: 'Ça dépend des marchés ciblés. Les États-Unis demandent des budgets plus importants que l\'Europe du Sud ou le MENA. On vous donne une estimation réaliste lors du premier échange en fonction de vos objectifs et marchés.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Développez vos campagnes',
  titleHighlight: 'à l\'international',
  description: 'Paris, Dubaï ou visio. On échange sur vos marchés cibles et on vous dit comment maximiser votre ROI.',
  secondaryDescription: 'Bureaux à Paris et Dubaï. Gestion multi-marchés. Rédacteurs natifs.',
  buttonText: 'Discuter de votre projet',
  checklistItems: [
    { id: '1', text: 'Audit gratuit' },
    { id: '2', text: '15+ pays gérés' },
    { id: '3', text: 'Rédacteurs natifs' },
  ],
};
