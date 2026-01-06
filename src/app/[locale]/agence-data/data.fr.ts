/**
 * ============================================
 * DATA - Contenu de la page Agence Data (Page pilier)
 * ============================================
 *
 * URL: /agence-data
 * Mots-clés: Agence data marketing, Agence analytics, Data-driven marketing
 * Intention: Transactionnelle
 */

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence Data Marketing : Analytics, Tracking, CRO - Rankwell',
  description: 'Votre agence data marketing transforme vos données en décisions. Analytics GA4, tracking GTM, CRO. Adoptez une approche data driven pour booster votre ROI.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Data' },
  ] as BreadcrumbItem[],
  title: 'Agence data marketing : des décisions basées sur les faits',
  description: 'Tracking, Analytics, CRO. On mesure ce qui compte, on identifie ce qui bloque, on optimise ce qui convertit. Une approche data driven pour piloter votre croissance.',
  ctaText: 'Parler de vos besoins data',
  ctaHref: '/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence Data Marketing',
  accentColor: 'rw-purple' as const,
  paragraphs: [
    'Vous investissez en SEO, en SEA, en contenu. Mais savez-vous vraiment ce qui fonctionne ? Quels canaux génèrent vos meilleurs clients ? Où perdez-vous des conversions ? Le data marketing répond à ces questions.',
    'Sans analytics fiables, vous pilotez à l\'aveugle. Vous optimisez au doigt mouillé. Vous ratez des opportunités sans même le savoir. Plus grave encore : vous ne construisez pas la connaissance de votre audience qui permettrait d\'affiner chaque action.',
    'Découvrez comment notre agence analytics transforme vos données brutes en intelligence actionnable. C\'est le fondement de l\'approche <strong class="text-secondary dark:text-accent">business centrix</strong> : une stratégie data driven pour prendre les bonnes décisions.',
  ],
  tocItems: [
    { id: 'inclus', label: 'Notre expertise', icon: 'Award' },
    { id: 'pourquoi', label: 'Pourquoi la data', icon: 'ChartBar' },
    { id: 'maturite', label: 'Maturité data', icon: 'Gauge' },
    { id: 'services', label: 'Nos services', icon: 'Briefcase' },
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'synergie', label: 'Synergie', icon: 'Layers' },
    { id: 'pour-qui', label: 'Pour qui', icon: 'Users' },
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
  title: 'Ce que couvre notre expertise Data',
  subtitle: 'De la collecte à l\'optimisation, une vision complète de vos données.',
  items: [
    {
      id: 1,
      icon: 'Activity',
      title: 'Tracking fiable',
      description: 'GTM, GA4, conversions Ads correctement mesurées',
    },
    {
      id: 2,
      icon: 'ChartBar',
      title: 'Analytics actionnables',
      description: 'Dashboards et rapports qui mènent à des décisions',
    },
    {
      id: 3,
      icon: 'TrendingUp',
      title: 'CRO orienté business',
      description: 'Optimisation du taux de conversion basée sur les données',
    },
    {
      id: 4,
      icon: 'Layers',
      title: 'Vision unifiée',
      description: 'SEO + SEA + comportement utilisateur dans un même référentiel',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Without data, you\'re just another person with an opinion.',
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 5. POURQUOI DATA (#pourquoi) - Pour FeaturesGrid
// ============================================
export const pourquoiData = {
  sectionId: 'pourquoi',
  badge: 'Data Marketing',
  accentColor: 'rw-purple' as const,
  title: 'Pourquoi le data marketing est non-négociable',
  subtitle: '4 raisons fondamentales. Le marketing data driven transforme l\'intuition en pilotage par la preuve.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-data/pourquoi-roi.webp',
      alt: 'Mesurer le ROI réel data marketing',
      title: 'Mesurer le ROI réel',
      desc: 'Vos campagnes SEO et SEA génèrent-elles vraiment du business ? Sans tracking propre, impossible de le savoir. Notre agence analytics vous donne les réponses.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-data/pourquoi-fuites.webp',
      alt: 'Identifier les fuites de conversion',
      title: 'Identifier les fuites',
      desc: 'Votre trafic augmente mais pas vos conversions ? Il y a une fuite quelque part. Une approche data driven permet de la trouver et de la colmater.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-data/pourquoi-prioriser.webp',
      alt: 'Prioriser les actions marketing',
      title: 'Prioriser les actions',
      desc: 'Vous ne pouvez pas tout faire. Le data marketing vous dit où concentrer vos efforts pour un impact maximum.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-data/pourquoi-prouver.webp',
      alt: 'Prouver la valeur du marketing',
      title: 'Prouver la valeur',
      desc: 'Au board, à la direction, aux investisseurs. Des chiffres solides pour démontrer l\'impact de vos actions marketing.',
    },
  ],
};

// ============================================
// 6. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Data et connaissance marché',
  text: 'Chaque donnée collectée enrichit votre compréhension du marché. Qui sont vos visiteurs ? D\'où viennent-ils ? Que cherchent-ils ? Cette connaissance cumulée devient un avantage compétitif : vous savez ce que vos concurrents ignorent.',
};

// ============================================
// 7. TABLEAU MATURITÉ DATA (#maturite)
// ============================================
export const tableauMaturiteData = {
  sectionId: 'maturite',
  badge: 'Diagnostic',
  accentColor: 'rw-purple' as const,
  title: 'Diagnostiquer votre maturité data',
  subtitle: 'Où en êtes-vous ? Voici les 4 niveaux de maturité data que nous rencontrons.',
  columns: ['Niveau', 'Symptômes', 'Risques', 'Priorité d\'action'],
  rows: [
    ['1. Aveugle', 'Pas de GA4 ou mal configuré, aucune conversion trackée', 'Décisions au doigt mouillé, ROI inconnu', 'Tracking urgent'],
    ['2. Collecteur', 'GA4 en place mais personne ne regarde, données non exploitées', 'Données qui vieillissent, opportunités ratées', 'Dashboards + formation'],
    ['3. Analyseur', 'Rapports réguliers mais pas d\'action, data ≠ décision', 'Paralysie par l\'analyse, coût sans valeur', 'Processus décisionnels'],
    ['4. Optimiseur', 'Data → décision → test → itération, amélioration continue', 'Aucun (c\'est l\'objectif)', 'Maintenir et approfondir'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. SERVICES DATA (#services) - Pour ServicesCards
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Services',
  accentColor: 'rw-purple' as const,
  title: 'Nos expertises Data',
  subtitle: '3 piliers complémentaires. Du tracking fondamental à l\'optimisation de la conversion.',
  items: [
    {
      id: 'tracking',
      title: 'Tracking & Plan de taggage',
      description: 'La base de tout. Sans tracking fiable, pas de données fiables. On configure Google Tag Manager, les événements, les conversions. Proprement.',
      href: '/agence-data/tracking',
      buttonText: 'Découvrir le tracking',
      accentColor: 'rw-purple' as const,
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'GA4, dashboards, rapports. On transforme vos données brutes en insights actionnables. Vous comprenez ce qui se passe sur votre site.',
      href: '/agence-data/analytics',
      buttonText: 'Découvrir les analytics',
      accentColor: 'rw-purple' as const,
    },
    {
      id: 'cro',
      title: 'Audit CRO',
      description: 'Optimisation du taux de conversion. On analyse les parcours utilisateurs, identifie les frictions, propose des améliorations testables.',
      href: '/agence-data/cro',
      buttonText: 'Découvrir le CRO',
      accentColor: 'rw-purple' as const,
    },
  ],
};

// ============================================
// 9. APPROCHE DATA (#approche) - Pour ProcessSteps
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Approche',
  accentColor: 'rw-purple' as const,
  title: 'Comment abordons-nous la Data ?',
  subtitle: '4 étapes qui guident notre approche. De la collecte à l\'action, chaque phase compte.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Commencer par les fondations',
      description: 'Avant d\'analyser, il faut collecter. On s\'assure que votre tracking est propre, complet, fiable. Sinon, tout le reste est biaisé.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Définir les bons KPIs',
      description: 'On ne mesure pas tout. On mesure ce qui compte pour votre business. Conversions, revenus, LTV. Pas des vanity metrics.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Rendre la data accessible',
      description: 'Des dashboards clairs, des rapports lisibles. La data doit être utilisable par vos équipes, pas réservée aux data scientists.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Transformer en actions',
      description: 'Une donnée sans action est inutile. Chaque insight doit mener à une décision, une optimisation, un test.',
    },
  ],
};

// ============================================
// 10. SYNERGIE DATA - Pour CategoriesGrid
// ============================================
export const synergieData = {
  sectionId: 'synergie',
  badge: 'Synergie',
  accentColor: 'rw-purple' as const,
  title: 'Comment Data et Search se nourrissent mutuellement',
  subtitle: 'Une boucle vertueuse. La data améliore le Search, le Search génère de la data.',
  categories: [
    {
      category: 'Choix des mots-clés',
      icon: 'Type',
      items: ['Données de conversion', 'Priorisation des requêtes', 'ROI par mot-clé'],
    },
    {
      category: 'Contenus performants',
      icon: 'FileText',
      items: ['Analyse des parcours', 'Pages qui convertissent', 'Optimisation continue'],
    },
    {
      category: 'Maximiser le trafic',
      icon: 'TrendingUp',
      items: ['CRO sur le Search', 'Valeur par visiteur', 'Tests et itérations'],
    },
    {
      category: 'Vision unifiée',
      icon: 'Layers',
      items: ['SEO + SEA combinés', 'Comportement utilisateur', 'Dashboards intégrés'],
    },
  ],
};

// ============================================
// 11. POUR QUI DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'À qui s\'adresse notre expertise Data ?',
  subtitle: 'Toute entreprise qui investit en marketing digital et veut mesurer l\'impact.',
  criteria: [
    'Sites e-commerce qui veulent comprendre le parcours d\'achat et optimiser le tunnel de conversion',
    'Sites lead gen qui cherchent à tracker les conversions et mesurer la qualité des leads',
    'SaaS qui doivent suivre les activations, le churn et la valeur client',
    'Toute entreprise qui investit en digital et veut savoir si ça rapporte vraiment',
  ],
  ctaTitle: 'Vous vous reconnaissez ?',
  ctaDescription: 'Un diagnostic de votre configuration actuelle identifie ce qui fonctionne et ce qui manque.',
  ctaButtonText: 'Demander un diagnostic',
  ctaButtonHref: '/contact',
  accentColor: 'rw-purple' as const,
};

// ============================================
// 12. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'La data seule ne suffit pas. Sans stratégie business claire, vous collecterez des métriques sans savoir quoi en faire. Nous commençons toujours par définir vos objectifs avant de configurer quoi que ce soit.',
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-purple' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur notre expertise Data.',
  items: [
    {
      id: 'faq-1',
      question: 'Notre tracking est-il fiable ?',
      answer: 'La fiabilité du tracking est souvent surestimée par les équipes internes. Nous constatons régulièrement des écarts de 20 à 40% entre les conversions réelles et celles mesurées. Un audit rapide permet de vérifier l\'état de votre configuration.',
    },
    {
      id: 'faq-2',
      question: 'GA4 ou autre solution analytics ?',
      answer: 'Le choix de la solution analytics dépend de vos besoins spécifiques. GA4 est notre recommandation par défaut : gratuit, puissant, parfaitement intégré à l\'écosystème Google (Ads, Search Console). Pour des besoins de confidentialité renforcée ou de volumes très importants, nous pouvons travailler avec d\'autres solutions.',
    },
    {
      id: 'faq-3',
      question: 'Faites-vous du A/B testing ?',
      answer: 'L\'A/B testing fait partie de notre arsenal CRO. Nous pouvons recommander et accompagner des tests dans le cadre d\'une démarche d\'optimisation structurée. C\'est un outil parmi d\'autres, à utiliser quand le volume de trafic le permet.',
    },
    {
      id: 'faq-4',
      question: 'Comment gérez-vous la conformité RGPD ?',
      answer: 'La conformité RGPD est intégrée à toutes nos implémentations. Gestion du consentement, anonymisation des données, durées de conservation respectées. Nous collectons le maximum légalement possible tout en respectant les choix des utilisateurs.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'What gets measured gets managed.',
  author: 'Peter Drucker',
  role: 'Management Theorist',
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Arrêtez de deviner,',
  titleHighlight: 'commencez à savoir',
  description: 'Le data marketing n\'est pas un luxe. C\'est la base d\'un marketing performant. Tracking fiable, analytics actionnables, CRO orienté business : chaque brique construit votre avantage compétitif.',
  secondaryDescription: 'Première étape : un diagnostic de votre configuration actuelle. Notre agence data marketing identifie ce qui fonctionne, ce qui manque, et les opportunités d\'amélioration.',
  buttonText: 'Parler de vos besoins data',
  checklistItems: [
    { id: '1', text: 'Diagnostic gratuit' },
    { id: '2', text: 'Approche data driven' },
    { id: '3', text: 'Paris & Dubaï' },
  ],
};
