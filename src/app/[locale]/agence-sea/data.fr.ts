/**
 * ============================================
 * DATA - Contenu de la page SEA principale
 * ============================================
 *
 * URL: /agence-sea
 * Mots-clés: Agence SEA, Agence Google Ads, Gestion campagnes Ads, Publicité Google
 * Intention: Transactionnelle
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence Google Ads orientée ROI - Rankwell',
  description: 'Agence Google Ads et SEA qui transforme vos clics en clients. Prix transparent, ROI mesurable. Découvrez pourquoi nos campagnes convertissent mieux.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'SEA' },
  ] as BreadcrumbItem[],
  title: 'Agence Google Ads pilotée par la performance',
  description: 'Le SEA sans stratégie, c\'est brûler du budget. Notre agence SEA transforme chaque euro investi en résultat mesurable. Prix transparent, ROI garanti.',
  ctaText: 'Parler de vos campagnes',
  ctaHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence Google Ads',
  accentColor: 'rw-cyan' as const,
  paragraphs: [
    'Beaucoup d\'annonceurs gèrent Google Ads comme une machine à clics. Plus de budget = plus de visites. Sauf que les visites ne payent pas les factures. Les conversions, oui.',
    'Notre approche d\'agence SEA est la même que pour le SEO : <strong class="text-secondary dark:text-accent">business centrix</strong>. On ne cherche pas à maximiser les impressions ou les clics. On cherche à maximiser votre ROI. Et on vous dit clairement combien ça coûte.',
    'Découvrez comment notre rigueur sur le ciblage, les enchères et le suivi des conversions transforme vos campagnes Google Ads en machine à business. Du travail, pas de la magie.',
  ],
  tocItems: [
    { id: 'expertise', label: 'Notre expertise', icon: 'Award' },
    { id: 'pourquoi', label: 'Pourquoi le SEA', icon: 'Zap' },
    { id: 'methode', label: 'Notre méthode', icon: 'ListChecks' },
    { id: 'services', label: 'Nos services', icon: 'Briefcase' },
    { id: 'campagnes', label: 'Types de campagnes', icon: 'LayoutGrid' },
    { id: 'encheres', label: 'Stratégies d\'enchères', icon: 'TrendingUp' },
    { id: 'synergie', label: 'SEA + SEO', icon: 'Layers' },
    { id: 'pour-qui', label: 'Pour qui', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAP BOX DATA (#expertise)
// ============================================
export const recapBoxData = {
  sectionId: 'expertise',
  badge: 'Expertise',
  accentColor: 'rw-cyan' as const,
  title: 'Ce qui distingue notre expertise SEA',
  subtitle: 'Une approche rigoureuse centrée sur vos résultats business.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Pilotage ROI',
      description: 'Chaque campagne mesurée par son retour sur investissement',
    },
    {
      id: 2,
      icon: 'Search',
      title: 'Connaissance marché',
      description: 'Analyse approfondie de votre secteur et de vos concurrents',
    },
    {
      id: 3,
      icon: 'Eye',
      title: 'Transparence totale',
      description: 'Vous savez où va chaque euro et ce qu\'il rapporte',
    },
    {
      id: 4,
      icon: 'ChartBar',
      title: 'Approche business centrix',
      description: 'Conversions et CA, pas juste des clics',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The best marketing doesn\'t feel like marketing.',
  author: 'Tom Fishburne',
  role: 'Founder Marketoonist',
};

// ============================================
// 5. POURQUOI SEA DATA (#pourquoi)
// ============================================
export const pourquoiSeaData = {
  sectionId: 'pourquoi',
  badge: 'Avantages',
  accentColor: 'rw-cyan' as const,
  title: 'Pourquoi le SEA reste-t-il incontournable ?',
  subtitle: 'Le SEA complète le SEO. Il apporte des résultats immédiats et un ciblage précis. Quatre raisons de l\'intégrer à votre stratégie.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/pourquoi-resultats-immediats.webp',
      alt: 'Résultats immédiats SEA',
      title: 'Résultats immédiats',
      desc: 'Le SEO prend du temps. Le SEA produit du trafic dès le premier jour. Idéal pour un lancement, une promo, une saisonnalité forte.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/pourquoi-ciblage-precis.webp',
      alt: 'Ciblage précis Google Ads',
      title: 'Ciblage précis',
      desc: 'Mots-clés, géographie, horaires, appareils, audiences. Vous touchez exactement qui vous voulez, quand vous voulez.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/pourquoi-controle-total.webp',
      alt: 'Contrôle total campagnes',
      title: 'Contrôle total',
      desc: 'Budget, enchères, diffusion : tout est paramétrable. Vous gardez la main, on pilote au quotidien.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/pourquoi-mesurabilite.webp',
      alt: 'Mesurabilité SEA',
      title: 'Mesurabilité',
      desc: 'Chaque clic, chaque conversion, chaque euro est tracké. Pas d\'ambiguïté sur ce qui marche.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'SEA et connaissance client',
  text: 'Les données SEA sont précieuses. Elles révèlent ce que vos prospects cherchent vraiment, quels mots déclenchent l\'action, quelles pages convertissent. Nous utilisons ces insights pour affiner votre stratégie globale.',
};

// ============================================
// 7. METHODE DATA (#methode)
// ============================================
export const methodeData = {
  sectionId: 'methode',
  badge: 'Méthode',
  accentColor: 'rw-cyan' as const,
  title: 'Comment pilotons-nous vos campagnes ?',
  subtitle: 'Notre méthode repose sur 5 piliers. De la compréhension de votre business au reporting transparent.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Comprendre votre business',
      description: 'Avant de créer une campagne, on comprend vos marges, votre cycle de vente, vos objectifs. Le SEA doit être rentable, pas juste actif.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Structurer intelligemment',
      description: 'Comptes propres, campagnes organisées, groupes d\'annonces cohérents. Une structure claire facilite l\'optimisation et le reporting.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Cibler avec précision',
      description: 'Pas de ciblage large qui gaspille du budget. On identifie les mots-clés rentables, on exclut ce qui ne convertit pas, on affine en continu.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Optimiser sans relâche',
      description: 'Enchères, annonces, extensions, audiences. On teste, on mesure, on améliore. Chaque semaine, chaque mois.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Reporter avec transparence',
      description: 'Vous savez exactement où va votre budget, ce qu\'il rapporte, ce qu\'on fait pour l\'améliorer. Pas de boîte noire.',
    },
  ],
};

// ============================================
// 8. SERVICES SEA DATA (#services)
// ============================================
export const servicesSeaData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-cyan' as const,
  title: 'Quels services SEA proposons-nous ?',
  subtitle: 'Trois services complémentaires pour couvrir tous vos besoins Google Ads. Du set up initial à l\'optimisation continue.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/service-setup.webp',
      imageAlt: 'Set Up SEA Google Ads',
      title: 'Set Up SEA',
      description: 'Création de compte, structure de campagnes, configuration du tracking. On pose les fondations d\'un compte performant.',
      href: '/agence-sea/setup',
      buttonText: 'En savoir plus',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/service-accompagnement.webp',
      imageAlt: 'Accompagnement SEA',
      title: 'Accompagnement & monitoring',
      description: 'Gestion continue de vos campagnes, optimisation des enchères, tests d\'annonces, ajustements stratégiques.',
      href: '/agence-sea/accompagnement',
      buttonText: 'En savoir plus',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/service-analyse-semantique.webp',
      imageAlt: 'Analyse sémantique SEA',
      title: 'Analyse sémantique SEA',
      description: 'Audit de vos mots-clés, identification des opportunités, restructuration sémantique pour plus de performance.',
      href: '/agence-sea/analyse-semantique',
      buttonText: 'En savoir plus',
    },
  ],
};

// ============================================
// 9. TYPES CAMPAGNES DATA (#campagnes)
// ============================================
export const campagnesData = {
  sectionId: 'campagnes',
  badge: 'Campagnes',
  accentColor: 'rw-cyan' as const,
  title: 'Quels types de campagnes gérons-nous ?',
  subtitle: 'Cinq types de campagnes pour couvrir l\'ensemble des objectifs. Chacun a ses spécificités et ses cas d\'usage.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-sea/campagne-search.webp',
      alt: 'Campagnes Search Google Ads',
      title: 'Search',
      desc: 'Les annonces textuelles classiques sur les résultats Google. Le coeur du SEA, celui qui capte l\'intention.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-sea/campagne-shopping.webp',
      alt: 'Campagnes Shopping',
      title: 'Shopping',
      desc: 'Pour les e-commerçants. Vos produits directement dans les résultats, avec image et prix.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-sea/campagne-display.webp',
      alt: 'Campagnes Display',
      title: 'Display',
      desc: 'Bannières sur le réseau de sites partenaires Google. Pour la notoriété, le remarketing, les audiences.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-sea/campagne-performance-max.webp',
      alt: 'Campagnes Performance Max',
      title: 'Performance Max',
      desc: 'Les campagnes automatisées de Google qui diffusent sur tous les canaux. On sait les configurer pour qu\'elles performent vraiment.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-sea/campagne-youtube.webp',
      alt: 'Campagnes YouTube Ads',
      title: 'YouTube Ads',
      desc: 'Vidéo pour la notoriété ou la conversion. Un levier sous-exploité par beaucoup d\'annonceurs.',
    },
  ],
};

// ============================================
// 10. TABLEAU ENCHERES DATA (#encheres)
// ============================================
export const tableauEncheresData = {
  sectionId: 'encheres',
  badge: 'Stratégies',
  accentColor: 'rw-cyan' as const,
  title: 'Quelle stratégie d\'enchères pour votre objectif ?',
  subtitle: 'Google propose plusieurs stratégies. Voici quand utiliser chacune.',
  columns: ['Stratégie', 'Objectif', 'Quand l\'utiliser', 'Prérequis'],
  rows: [
    ['Maximiser les conversions', 'Volume de leads/ventes', 'Budget fixe, besoin de volume', '30+ conversions/mois minimum'],
    ['CPA cible', 'Coût par acquisition maîtrisé', 'Objectif de rentabilité précis', '50+ conversions/mois, historique stable'],
    ['ROAS cible', 'Retour sur dépense pub', 'E-commerce avec valeurs de conversion', 'Tracking e-commerce configuré'],
    ['Maximiser les clics', 'Trafic brut', 'Notoriété, lancement, peu de data', 'Aucun (mais limité en valeur)'],
    ['CPC manuel', 'Contrôle total', 'Tests, niches très spécifiques', 'Temps pour optimiser manuellement'],
    ['Part d\'impressions cible', 'Visibilité maximale', 'Marque, défense concurrentielle', 'Budget conséquent'],
  ],
};

// ============================================
// 11. SYNERGIE SEA+SEO DATA (#synergie)
// ============================================
export const synergieData = {
  sectionId: 'synergie',
  badge: 'Synergie',
  accentColor: 'rw-cyan' as const,
  title: 'Pourquoi combiner SEA et SEO ?',
  subtitle: 'Le SEA et le SEO ne sont pas en concurrence. Ils se renforcent mutuellement. Nous pilotons les deux pour maximiser le Search dans son ensemble.',
  items: [
    {
      id: 1,
      icon: 'Maximize2',
      title: 'Couverture complète',
      description: 'Le SEA couvre les positions que le SEO n\'atteint pas encore',
    },
    {
      id: 2,
      icon: 'Database',
      title: 'Data cross-canal',
      description: 'Les données SEA (mots-clés qui convertissent) alimentent la stratégie SEO',
    },
    {
      id: 3,
      icon: 'Clock',
      title: 'Indépendance long terme',
      description: 'Le SEO réduit la dépendance au paid sur le long terme',
    },
    {
      id: 4,
      icon: 'CircleCheck',
      title: 'Double présence',
      description: 'La présence combinée (organique + payant) augmente la crédibilité',
    },
  ],
};

// ============================================
// 12. POUR QUI DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Pour qui est notre accompagnement SEA ?',
  subtitle: 'Notre expertise SEA s\'adresse aux entreprises qui veulent rentabiliser leur investissement publicitaire. Le secteur compte moins que l\'ambition de ROI.',
  criteria: [
    'E-commerce qui veut générer des ventes directes et rentabiliser chaque clic',
    'Lead generation pour capter des prospects qualifiés à coût maîtrisé',
    'SaaS et services pour acquérir des utilisateurs ou des demandes de démo',
    'Lancement ou saisonnalité quand vous avez besoin de volume rapidement',
  ],
  ctaTitle: 'Vous vous reconnaissez ?',
  ctaDescription: 'Discutons de vos objectifs et de comment le SEA peut vous aider à les atteindre.',
  ctaButtonText: 'Prendre rendez-vous',
  ctaButtonHref: '/contact',
  accentColor: 'rw-cyan' as const,
};

// ============================================
// 13. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Google Ads sans tracking fiable, c\'est piloter à l\'aveugle. Nous vérifions systématiquement que vos conversions sont correctement mesurées avant d\'optimiser. Sans données fiables, pas de décisions éclairées.',
};

// ============================================
// 14. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-cyan' as const,
  title: 'Questions fréquentes',
  subtitle: 'Les réponses aux questions que vous vous posez sur notre accompagnement SEA.',
  items: [
    {
      id: 'faq-1',
      question: 'Quel est le prix de Google Ads et quel budget prévoir ?',
      answer: 'Le prix de Google Ads varie selon votre secteur et la concurrence sur vos mots-clés. Il n\'y a pas de minimum technique imposé par Google. Pour obtenir des résultats significatifs et des données exploitables, nous recommandons généralement au moins 2-3k€/mois de budget média. En dessous, les volumes sont souvent insuffisants pour optimiser efficacement.',
    },
    {
      id: 'faq-2',
      question: 'Comment facturez-vous vos services d\'agence Google Ads ?',
      answer: 'Notre rémunération peut être des frais de gestion fixes ou un pourcentage du budget média. Cela dépend de la taille des comptes et de vos préférences. Nous discutons de ce qui fait sens pour votre situation. Pas de commissions cachées sur le prix de Google Ads, tout est transparent.',
    },
    {
      id: 'faq-3',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'Le délai pour voir des résultats en SEA est court pour le trafic (immédiat) mais plus long pour l\'optimisation. Le trafic arrive dès le premier jour. L\'optimisation pour atteindre la rentabilité cible prend généralement 2-3 mois de tests et d\'ajustements.',
    },
    {
      id: 'faq-4',
      question: 'Travaillez-vous avec d\'autres plateformes que Google ?',
      answer: 'Notre focus principal est Google Ads, qui représente l\'essentiel du Search payant. C\'est là que nous avons le plus d\'expertise. Pour Meta Ads ou LinkedIn Ads, nous pouvons en discuter selon vos besoins et vous orienter si nécessaire.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Half the money I spend on advertising is wasted; the trouble is I don\'t know which half.',
  author: 'John Wanamaker',
  role: 'Marketing Pioneer (le SEA résout ce problème)',
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Rentabilisez votre',
  titleHighlight: 'investissement Ads',
  description: 'Google Ads peut être un gouffre ou une machine à business. La différence, c\'est la stratégie, le tracking et l\'exécution rigoureuse. Nous transformons votre budget en conversions mesurables.',
  secondaryDescription: 'Première étape : un audit de votre compte actuel ou un cadrage pour un nouveau compte. Nous vous donnons une vision claire du potentiel et des actions prioritaires.',
  buttonText: 'Parler de vos campagnes',
  checklistItems: [
    { id: '1', text: 'Audit offert' },
    { id: '2', text: 'Sans engagement' },
    { id: '3', text: 'ROI focus' },
  ],
};
