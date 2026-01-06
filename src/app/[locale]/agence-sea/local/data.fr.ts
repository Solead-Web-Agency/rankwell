/**
 * ============================================
 * DATA - Contenu de la page SEA Local
 * ============================================
 *
 * URL: /agence-sea/local
 * Mots-clés: Google Ads local, SEA local, publicité locale Google, campagnes locales
 * Intention: Transactionnelle
 * Parent: /agence-sea
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Publicité locale Google Ads et SEA local - Rankwell',
  description: 'Campagnes publicitaires locales sur Google Ads pour capter les clients près de chez vous. Agence experte en publicité géolocalisée et ciblage de proximité.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA', href: '/agence-sea' },
    { label: 'Local Ads' },
  ] as BreadcrumbItem[],
  title: 'Publicité locale Google Ads pour dominer votre zone',
  description: 'Vos clients cherchent "près de chez moi". Les campagnes locales Google Ads vous positionnent au moment précis où ils ont besoin de vous. Notre agence maximise votre visibilité là où ça compte.',
  ctaText: 'Parler de votre visibilité locale',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Local Services Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    '46% des recherches Google ont une intention locale. "Plombier urgent Paris 15", "restaurant italien Lyon", "garagiste ouvert dimanche". Ces requêtes traduisent un besoin immédiat. Et celui qui apparaît en premier avec ses Local Ads remporte souvent le client.',
    'Le SEA local, c\'est la capacité d\'être présent exactement au bon moment, au bon endroit. Local Services Ads, ciblage par rayon, extensions de lieu : des leviers puissants pour les entreprises à zone de chalandise locale.',
    'Découvrez comment notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> appliquée aux campagnes locales maximise votre ROI sur les clients de proximité. Chaque clic local doit se transformer en visite ou en appel.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Ce qu\'on fait', icon: 'Package' },
    { id: 'enjeux', label: 'Enjeux du local', icon: 'CircleAlert' },
    { id: 'ciblage', label: 'Ciblage géo', icon: 'MapPin' },
    { id: 'formats', label: 'Formats locaux', icon: 'LayoutGrid' },
    { id: 'secteurs', label: 'Secteurs', icon: 'Briefcase' },
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
  title: 'Ce qu\'on fait pour votre visibilité locale payante',
  subtitle: 'Une stratégie Google Ads pensée pour capter les clients de votre zone.',
  items: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Ciblage géographique précis',
      description: 'Rayons, codes postaux, zones personnalisées autour de vos établissements',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'Extensions de lieu',
      description: 'Adresse, téléphone, itinéraire directement dans vos annonces',
    },
    {
      id: 3,
      icon: 'Navigation',
      title: 'Enchères par proximité',
      description: 'Ajustements d\'enchères selon la distance à votre établissement',
    },
    {
      id: 4,
      icon: 'Activity',
      title: 'Tracking des visites',
      description: 'Mesure des visites en magasin et des appels générés',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The best place to hide a dead body is page 2 of Google results.',
  author: 'Inconnu',
  role: 'Dicton SEO/SEA',
};

// ============================================
// 5. ENJEUX DATA (#enjeux) - Pour StepsDimensions
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'Enjeux',
  accentColor: 'rw-cyan' as const,
  title: 'Pourquoi le SEA local est stratégique ?',
  subtitle: 'Le comportement de recherche locale est unique. Il demande une approche publicitaire adaptée.',
  dimensions: [
    {
      dimension: 1,
      label: 'Intention',
      title: 'L\'intention locale est une intention d\'action',
      subtitle: '78% des recherches locales mobiles aboutissent à un achat dans les 24h.',
      items: ['Urgence élevée', 'Décision rapide', 'Prêt à se déplacer ou appeler'],
    },
    {
      dimension: 2,
      label: 'Concurrence',
      title: 'La bataille se joue sur quelques kilomètres',
      subtitle: 'Vos concurrents locaux enchérissent sur les mêmes requêtes, dans la même zone.',
      items: ['CPC variables selon la densité', 'Avantage au plus proche', 'Horaires stratégiques'],
    },
    {
      dimension: 3,
      label: 'Mobile',
      title: 'Le mobile domine les recherches locales',
      subtitle: '76% des recherches locales se font sur smartphone. L\'expérience mobile est critique.',
      items: ['Click-to-call essentiel', 'Itinéraire en un clic', 'Annonces adaptées mobile'],
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'SEA local + SEO local = combo gagnant',
  text: 'Le SEA local complète votre stratégie SEO local. Il vous positionne immédiatement pendant que le SEO construit votre visibilité organique. Les deux canaux se renforcent : le SEA révèle les mots-clés qui convertissent, le SEO réduit la dépendance au paid sur le long terme.',
};

// ============================================
// 7. TABLEAU CIBLAGE DATA (#ciblage)
// ============================================
export const tableauCiblageData = {
  sectionId: 'ciblage',
  badge: 'Ciblage',
  accentColor: 'rw-cyan' as const,
  title: 'Les options de ciblage géographique Google Ads',
  subtitle: 'Google Ads offre plusieurs niveaux de précision pour cibler votre zone de chalandise.',
  columns: ['Type de ciblage', 'Précision', 'Cas d\'usage', 'Recommandation'],
  rows: [
    ['Par pays/région', 'Faible', 'Campagnes nationales', 'Pas pour le local'],
    ['Par ville', 'Moyenne', 'Couverture métropolitaine', 'Bon pour grandes zones'],
    ['Par code postal', 'Haute', 'Quartiers spécifiques', 'Idéal commerce de proximité'],
    ['Par rayon (km)', 'Très haute', 'Autour d\'un point précis', 'Notre recommandation'],
    ['Zone personnalisée', 'Maximale', 'Forme libre sur carte', 'Pour cas complexes'],
    ['Par lieu d\'intérêt', 'Variable', 'Personnes recherchant une zone', 'Complément au rayon'],
  ],
};

// ============================================
// 8. FORMATS DATA (#formats) - Pour StickyFeatures
// ============================================
export const formatsData = {
  sectionId: 'formats',
  badge: 'Formats',
  accentColor: 'rw-cyan' as const,
  title: 'Les formats Google Ads pensés pour le local',
  subtitle: '5 leviers publicitaires pour maximiser votre visibilité locale.',
  items: [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Extensions de lieu',
      description: 'Ajoutent votre adresse et un lien vers Google Maps directement dans vos annonces Search. Les utilisateurs voient la distance et peuvent calculer l\'itinéraire en un clic.',
    },
    {
      id: 2,
      icon: 'Phone',
      title: 'Extensions d\'appel',
      description: 'Un bouton "Appeler" directement dans l\'annonce. Sur mobile, un clic suffit pour vous joindre. Idéal pour les services d\'urgence et les activités où le téléphone convertit.',
    },
    {
      id: 3,
      icon: 'BadgeCheck',
      title: 'Campagnes Local Services',
      description: 'Pour certains secteurs (plombiers, serruriers, électriciens...), Google propose des annonces avec badge "Garanti Google". Paiement au lead, pas au clic.',
    },
    {
      id: 4,
      icon: 'Zap',
      title: 'Performance Max local',
      description: 'Les campagnes Performance Max peuvent être optimisées pour les visites en magasin. L\'algorithme diffuse sur tous les canaux pour maximiser le trafic physique.',
    },
    {
      id: 5,
      icon: 'Map',
      title: 'Annonces sur Google Maps',
      description: 'Vos annonces peuvent apparaître directement dans Google Maps quand les utilisateurs cherchent des établissements. Visibilité maximale au moment de la décision.',
    },
  ],
};

// ============================================
// 9. SECTEURS DATA (#secteurs) - Pour ReasonsGrid
// ============================================
export const secteursData = {
  sectionId: 'secteurs',
  badge: 'Secteurs',
  accentColor: 'rw-cyan' as const,
  title: 'Pour quels secteurs le SEA local excelle ?',
  subtitle: 'Le SEA local est particulièrement performant pour ces typologies d\'entreprises.',
  reasons: [
    {
      id: 1,
      icon: 'Siren',
      title: 'Services d\'urgence',
      description: 'Plombiers, serruriers, dépannage. Quand le client a besoin de vous maintenant, celui qui apparaît en premier gagne. Le SEA local est roi.',
    },
    {
      id: 2,
      icon: 'Store',
      title: 'Commerces de proximité',
      description: 'Restaurants, salons de coiffure, boutiques. Les recherches "près de moi" explosent. Être visible sur ces requêtes génère du trafic en magasin.',
    },
    {
      id: 3,
      icon: 'Briefcase',
      title: 'Professions libérales',
      description: 'Avocats, médecins, experts-comptables. La proximité géographique est un critère de choix. Le SEA local capte les prospects de votre zone.',
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
  title: 'Comment on déploie votre SEA local',
  subtitle: '4 étapes pour maximiser votre visibilité payante locale.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Analyse de zone',
      description: 'On cartographie votre zone de chalandise, identifie la concurrence locale, estime les volumes et CPC par secteur géographique.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Configuration locale',
      description: 'Ciblage géographique précis, extensions de lieu liées à Google Business, enchères ajustées par proximité.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Lancement et test',
      description: 'Activation des campagnes, monitoring des performances par zone, A/B test sur les messages locaux.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Optimisation continue',
      description: 'Ajustement des rayons, optimisation des horaires de diffusion, scaling sur les zones qui performent.',
    },
  ],
};

// ============================================
// 11. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Think globally, act locally. The best marketing strategy ever.',
  author: 'Seth Godin',
  role: 'Marketing Author',
};

// ============================================
// 12. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le SEA local.',
  items: [
    {
      id: 'faq-1',
      question: 'Quel budget pour du SEA local ?',
      answer: 'Le SEA local peut fonctionner avec des budgets plus modestes que le national, car la zone de diffusion est limitée. Comptez 500 à 2000€/mois pour une zone urbaine. Les CPC varient selon la concurrence locale et le secteur d\'activité.',
    },
    {
      id: 'faq-2',
      question: 'Comment mesurer les visites en magasin ?',
      answer: 'Google Ads propose le suivi des visites en magasin pour les comptes éligibles (volume suffisant, Google Business Profile lié). Sinon, on mesure les appels, les demandes d\'itinéraire et les conversions sur le site. Des codes promo spécifiques peuvent aussi tracer l\'attribution.',
    },
    {
      id: 'faq-3',
      question: 'Faut-il un Google Business Profile ?',
      answer: 'Fortement recommandé. Le Google Business Profile permet d\'activer les extensions de lieu, d\'apparaître sur Google Maps et de bénéficier des formats publicitaires locaux. Sans GBP, vous perdez des leviers importants.',
    },
    {
      id: 'faq-4',
      question: 'SEA local ou SEO local, que choisir ?',
      answer: 'Les deux sont complémentaires. Le SEA local apporte des résultats immédiats et permet de tester des zones. Le SEO local construit une visibilité organique durable. L\'idéal est de combiner les deux pour une couverture maximale.',
    },
    {
      id: 'faq-5',
      question: 'Peut-on cibler plusieurs établissements ?',
      answer: 'Oui, c\'est même une de nos spécialités. On configure des campagnes par établissement ou par zone, avec un reporting consolidé ou détaillé selon vos besoins. La structure de compte est pensée pour scaler.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 13. CTA DATA
// ============================================
export const ctaData = {
  title: 'Captez les clients',
  titleHighlight: 'près de chez vous',
  description: 'Vos clients locaux vous cherchent sur Google. Le SEA local vous positionne exactement là où ils regardent, au moment où ils ont besoin de vous.',
  secondaryDescription: 'Première étape : une analyse de votre zone et de la concurrence locale. On vous dit quel potentiel existe et comment le capter.',
  buttonText: 'Analyser mon potentiel local',
  checklistItems: [
    { id: '1', text: 'Analyse gratuite' },
    { id: '2', text: 'Potentiel estimé' },
    { id: '3', text: 'Concurrence mappée' },
  ],
};
