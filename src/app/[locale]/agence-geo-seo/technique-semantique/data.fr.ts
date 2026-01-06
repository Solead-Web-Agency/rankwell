/**
 * ============================================
 * DATA - Contenu de la page SEO sémantique et technique
 * ============================================
 *
 * Sections ordonnées selon leur apparition dans page.tsx :
 * 1. metadata
 * 2. heroData
 * 3. introData
 * 4. recapBoxData
 * 5. quote1Data
 * 6. seoTechniqueData
 * 7. seoSemantiqueData
 * 8. pointVigilance1Data
 * 9. tableauErreursData
 * 10. processMethodeData
 * 11. outilsData
 * 12. forWhoData
 * 13. pointVigilance2Data
 * 14. quote2Data
 * 15. faqData
 * 16. ctaData
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Agence SEO technique et sémantique - Rankwell',
  description: 'Agence SEO technique experte en optimisation technique SEO et SEO sémantique. Core Web Vitals, architecture, données structurées et clusters thématiques.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'SEO technique & sémantique' },
  ] as BreadcrumbItem[],
  title: 'Optimisation technique et sémantique pour votre visibilité',
  description: 'Un site rapide, bien structuré, avec du contenu pertinent. Ça paraît simple. C\'est pourtant là que la plupart des sites échouent. Notre agence SEO technique pose les bases solides.',
  ctaText: 'Demander un diagnostic',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/seo-semantique-technique/hero.webp',
  imageAlt: 'SEO technique et sémantique Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'SEO Technique & Sémantique',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Le meilleur contenu du monde ne performe pas sur un site lent. Un site techniquement parfait mais vide de sens ne se positionnera jamais. Les deux dimensions sont liées.',
    'Chez Rankwell, on refuse la fausse opposition "technique vs contenu". L\'optimisation technique SEO et le SEO sémantique se renforcent mutuellement. Les moteurs classiques comme les IA génératives évaluent ces critères ensemble.',
    'Découvrez comment notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> du SEO technique et du SEO sémantique pose des fondations solides pour votre visibilité sur Google et sur les moteurs IA.',
  ],
  tocItems: [
    { id: 'approche', label: 'Périmètre d\'expertise', icon: 'ClipboardList' },
    { id: 'technique', label: 'SEO Technique', icon: 'Settings' },
    { id: 'semantique', label: 'SEO Sémantique', icon: 'BookOpen' },
    { id: 'analyse', label: 'Erreurs et priorités', icon: 'TriangleAlert' },
    { id: 'process', label: 'Notre méthode', icon: 'ListChecks' },
    { id: 'outils', label: 'Nos outils', icon: 'Wrench' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Ce que couvre notre expertise',
  accentColor: 'rw-blue' as const,
  title: 'SEO technique et SEO sémantique réunis',
  subtitle: 'Une approche complète d\'optimisation technique SEO pour des fondations solides sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'Core Web Vitals',
      description: 'Performance, interactivité, stabilité visuelle optimisées. Les critères de Google qui comptent.',
      icon: 'Gauge',
    },
    {
      id: 2,
      title: 'Architecture crawl-friendly',
      description: 'Vos pages importantes indexées en priorité. Zéro budget crawl gaspillé.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Données structurées',
      description: 'Schema.org et JSON-LD pour les moteurs et les IA. Vos contenus deviennent citables.',
      icon: 'Code',
    },
    {
      id: 4,
      title: 'Clusters sémantiques',
      description: 'Vos contenus organisés en territoires d\'expertise. Les moteurs comprennent votre autorité.',
      icon: 'Blocks',
    },
  ] as RecapItem[],
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'SEO is not about gaming the system anymore; it\'s about learning how to play by the rules.',
  author: 'Jordan Teicher',
  role: 'Content Strategist',
};

// ============================================
// 6. SEO TECHNIQUE DATA
// ============================================
export const seoTechniqueData = {
  sectionId: 'technique',
  badge: 'SEO Technique',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'SEO technique : que voient vraiment les moteurs ?',
  subtitle: 'Avant de juger votre contenu, Google et les IA doivent pouvoir le lire. L\'optimisation technique SEO garantit que vos pages sont crawlées, indexées et performantes.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-performance.webp',
      alt: 'Performance et Core Web Vitals',
      title: 'Performance et Core Web Vitals',
      desc: 'Temps de chargement, interactivité, stabilité visuelle. Les critères de Google pour évaluer l\'expérience utilisateur.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-crawl.webp',
      alt: 'Crawl et indexation des pages',
      title: 'Crawl et indexation',
      desc: 'Vos pages importantes sont-elles crawlées ? Indexées ? Y a-t-il du budget crawl gaspillé sur des pages inutiles ?',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-architecture.webp',
      alt: 'Architecture et structure du site',
      title: 'Architecture et structure',
      desc: 'L\'arborescence de votre site, la profondeur des pages, le maillage interne. Une structure logique aide les moteurs.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-donnees-structurees.webp',
      alt: 'Données structurées Schema.org',
      title: 'Données structurées',
      desc: 'Schema.org, JSON-LD. Ces balises aident les moteurs et les IA génératives à comprendre vos contenus.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/technique-securite.webp',
      alt: 'Sécurité et accessibilité web',
      title: 'Sécurité et accessibilité',
      desc: 'HTTPS, responsive design, accessibilité. Les basiques qui ne sont pas toujours en place.',
    },
  ] as FeatureItem[],
};

// ============================================
// 7. SEO SEMANTIQUE DATA
// ============================================
export const seoSemantiqueData = {
  sectionId: 'semantique',
  badge: 'SEO Sémantique',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'SEO sémantique : comment les moteurs comprennent votre expertise ?',
  subtitle: 'Au-delà du SEO technique, il y a le sens. Les moteurs ne cherchent plus des mots-clés exacts. Ils cherchent à comprendre de quoi vous parlez et si vous faites autorité.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-mots-cles.webp',
      alt: 'Stratégie de mots-clés SEO',
      title: 'Stratégie de mots-clés',
      desc: 'Pas une liste de keywords à caser. Une cartographie des intentions de recherche de vos cibles.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-architecture.webp',
      alt: 'Architecture sémantique et clusters',
      title: 'Architecture sémantique',
      desc: 'Vos contenus organisés en clusters thématiques. Une page pilier, des pages satellites, un maillage qui renforce l\'ensemble.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-onpage.webp',
      alt: 'Optimisation on-page SEO',
      title: 'Optimisation on-page',
      desc: 'Titres, meta descriptions, balises Hn, contenus. Chaque page est optimisée pour sa cible principale.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-richesse.webp',
      alt: 'Richesse sémantique du contenu',
      title: 'Richesse sémantique',
      desc: 'Les entités, les concepts liés, le champ lexical. Un contenu riche qui couvre le sujet en profondeur.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/seo-semantique-technique/semantique-geo.webp',
      alt: 'Optimisation GEO pour les IA',
      title: 'Optimisation GEO',
      desc: 'Les IA génératives adorent les contenus bien sourcés, structurés, avec des données citables.',
    },
  ] as FeatureItem[],
};

// ============================================
// 8. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Point clé',
  text: 'Les Core Web Vitals sont un facteur de ranking officiel Google. Les IA génératives privilégient aussi les sites rapides et bien structurés quand elles sélectionnent leurs sources.',
};

// ============================================
// 9. TABLEAU ERREURS DATA
// ============================================
export const tableauErreursData = {
  sectionId: 'analyse',
  badge: 'Analyse',
  accentColor: 'rw-blue' as const,
  title: 'Erreurs du SEO technique : impact et priorité de correction',
  subtitle: 'Toutes les erreurs d\'optimisation technique SEO ne se valent pas. Voici comment nous les priorisons.',
  columns: ['Problème technique', 'Impact SEO', 'Impact GEO', 'Priorité', 'Délai correction'],
  rows: [
    ['Pages non indexables (noindex, robots.txt)', 'Bloquant', 'Bloquant', 'Critique', 'Immédiat'],
    ['Temps de chargement > 3s (LCP)', 'Élevé', 'Moyen', 'Haute', '1-2 semaines'],
    ['Contenu dupliqué interne', 'Élevé', 'Moyen', 'Haute', '1-2 semaines'],
    ['Absence de données structurées', 'Moyen', 'Élevé', 'Haute', '1 semaine'],
    ['Erreurs 404 sur pages à trafic', 'Élevé', 'Faible', 'Haute', 'Immédiat'],
    ['Chaînes de redirections (3+)', 'Moyen', 'Faible', 'Moyenne', '2-4 semaines'],
    ['Balises title/meta dupliquées', 'Moyen', 'Faible', 'Moyenne', '2-4 semaines'],
    ['Images sans alt text', 'Faible', 'Moyen', 'Basse', 'Progressif'],
  ],
};

// ============================================
// 10. PROCESS METHODE DATA
// ============================================
export const processMethodeData = {
  sectionId: 'process',
  badge: 'Méthode',
  accentColor: 'rw-blue' as const,
  title: 'Comment procédons-nous concrètement ?',
  subtitle: 'Notre méthode suit 4 étapes. De l\'audit initial au suivi continu. Chaque phase a des livrables concrets.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Audit complet',
      description: 'On passe votre site au crible. Technique, sémantique, concurrence. On identifie les quick wins et les chantiers de fond.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Priorisation',
      description: 'Tout ne peut pas être fait en même temps. On classe les actions par impact et faisabilité. Vous savez ce qui compte vraiment.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Implémentation',
      description: 'Selon vos ressources : on fait, on guide vos équipes, ou on travaille en binôme avec vos devs. Flexibilité totale.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Suivi et itération',
      description: 'On mesure l\'impact des optimisations. Ce qui marche, on capitalise. Ce qui coince, on ajuste.',
    },
  ],
};

// ============================================
// 11. OUTILS DATA
// ============================================
export const outilsData = {
  sectionId: 'outils',
  badge: 'Nos outils',
  accentColor: 'rw-blue' as const,
  title: 'Les meilleurs outils du marché',
  subtitle: 'On utilise les meilleurs outils du marché, combinés à notre plateforme Rankwell One pour centraliser et piloter.',
  logos: [
    { id: 1, name: 'Screaming Frog', /* image: '/images/logos/screaming-frog.svg', */ alt: 'Logo Screaming Frog' },
    { id: 2, name: 'Sitebulb', /* image: '/images/logos/sitebulb.svg', */ alt: 'Logo Sitebulb' },
    { id: 3, name: 'Semrush', /* image: '/images/logos/semrush.svg', */ alt: 'Logo Semrush' },
    { id: 4, name: 'Ahrefs', /* image: '/images/logos/ahrefs.svg', */ alt: 'Logo Ahrefs' },
    { id: 5, name: 'Google Search Console', /* image: '/images/logos/google-search-console.svg', */ alt: 'Logo Google Search Console' },
    { id: 6, name: 'PageSpeed Insights', /* image: '/images/logos/pagespeed-insights.svg', */ alt: 'Logo PageSpeed Insights' },
    { id: 7, name: 'Rankwell One', /* image: '/images/logos/rankwell-one.svg', */ alt: 'Logo Rankwell One' },
  ],
  categories: [
    { category: 'Audits techniques', tools: ['Screaming Frog', 'Sitebulb', 'Lumar', '...'], icon: 'Search' },
    { category: 'Analyse sémantique', tools: ['Semrush', 'Ahrefs', 'Surfer SEO', '...'], icon: 'BookOpen' },
    { category: 'Données first-party', tools: ['Google Search Console', 'Google Analytics 4', 'PageSpeed', '...'], icon: 'Database' },
    { category: 'Pilotage & reporting', tools: ['Rankwell One', 'Looker Studio', 'Google Drive', '...'], icon: 'ChartBar' },
  ],
};

// ============================================
// 12. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Pour qui est cette expertise ?',
  subtitle: 'Cette expertise s\'adresse aux entreprises qui veulent des fondations solides. Pas de visibilité durable sans technique et sémantique maîtrisées.',
  criteria: [
    { label: 'Sites qui stagnent', description: 'Malgré du contenu de qualité, votre trafic ne décolle pas' },
    { label: 'Refontes à venir', description: 'Vous voulez partir sur de bonnes bases SEO et GEO' },
    { label: 'Sites e-commerce', description: 'Des milliers de pages à structurer efficacement' },
    { label: 'Entreprises qui bloquent', description: 'Vous voulez comprendre pourquoi "ça ne marche pas"' },
  ],
  ctaTitle: 'Prêt à poser des fondations solides ?',
  ctaDescription: 'Un diagnostic technique et sémantique, c\'est le point de départ de toute stratégie sérieuse.',
  ctaButtonText: 'Demander un diagnostic',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 13. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Un audit technique sans vision sémantique ne résout que la moitié du problème. Les moteurs classiques comme les IA évaluent la cohérence globale de votre site : vitesse, structure ET pertinence du contenu.',
};

// ============================================
// 14. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEO strategy is to build a brand that people search for by name.',
  author: 'Neil Patel',
  role: 'Digital Marketing Expert',
};

// ============================================
// 15. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le SEO technique et le SEO sémantique',
  items: [
    {
      id: 'faq-1',
      question: 'Quelle différence entre SEO technique et SEO sémantique ?',
      answer: 'Le SEO technique concerne l\'optimisation technique du site : vitesse, indexation, structure, Core Web Vitals. Le SEO sémantique concerne le sens : mots-clés, clusters thématiques, optimisation on-page. Les deux sont complémentaires et indissociables pour une stratégie efficace.',
    },
    {
      id: 'faq-2',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'Les corrections techniques ont souvent un impact rapide (quelques semaines). Les optimisations sémantiques prennent plus de temps (3-6 mois). On vous donne de la visibilité sur les deux horizons dès le départ.',
    },
    {
      id: 'faq-3',
      question: 'Travaillez-vous avec nos équipes techniques ?',
      answer: 'Oui, c\'est même notre mode préféré. On fait les recommandations, on accompagne vos devs pour l\'implémentation, on valide. Sinon, on peut aussi implémenter directement selon vos accès.',
    },
    {
      id: 'faq-4',
      question: 'Les données structurées sont-elles vraiment importantes pour les IA ?',
      answer: 'Oui. Les IA génératives comme ChatGPT privilégient les contenus structurés et sourcés. Les données structurées Schema.org leur permettent de comprendre et citer vos contenus plus facilement.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 16. CTA DATA
// ============================================
export const ctaData = {
  title: 'Votre site mérite des',
  titleHighlight: 'fondations solides',
  description: 'Un diagnostic de SEO technique et de SEO sémantique, c\'est le point de départ de toute stratégie sérieuse. Notre agence SEO technique analyse ce que les moteurs voient et comprennent de votre site.',
  secondaryDescription: 'Première étape : un diagnostic complet d\'optimisation technique SEO. Nous identifions ce qui bloque, ce qui peut être amélioré, et dans quel ordre. Sans engagement.',
  buttonText: 'Demander un diagnostic',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Diagnostic complet' },
    { id: '3', text: 'Priorisation claire' },
  ],
};
