/**
 * ============================================
 * DATA - Contenu de la page GEO & SEO principale
 * ============================================
 *
 * Ce fichier contient toutes les données de contenu pour la page /agence-geo-seo
 * Les titres JSX sont créés directement dans page.tsx car ils ne peuvent
 * pas être sérialisés.
 *
 * Sections ordonnées selon leur apparition dans page.tsx :
 * 1. metadata
 * 2. heroData
 * 3. introData
 * 4. whyGeoData
 * 5. quote1Data
 * 6. recapBoxData
 * 7. processData
 * 8. tableauComparaisonData
 * 9. servicesData
 * 10. forWhoData
 * 11. pointVigilanceData
 * 12. resultsData
 * 13. quote2Data
 * 14. faqData
 * 15. ctaData
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Agence SEO et GEO orientée business - Rankwell',
  description: 'Agence SEO experte en référencement naturel et GEO. Nos experts SEO boostent votre visibilité sur Google et les IA. Résultats mesurables garantis.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence SEO' },
  ] as BreadcrumbItem[],
  title: 'Agence SEO et GEO pour dominer Google et les IA',
  description: 'Le référencement naturel ne se limite plus à Google. ChatGPT, Perplexity, Gemini citent des sources et recommandent des marques. Notre agence GEO SEO construit votre visibilité sur tous les fronts.',
  ctaText: 'Demander un audit',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/hero.webp',
  imageAlt: 'Agence SEO et GEO Rankwell',
  showTrustIndicator: true,
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence SEO experte',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    '<strong class="text-secondary dark:text-accent">GEO</strong> signifie Generative Engine Optimization. <strong class="text-secondary dark:text-accent">SEO</strong>, vous connaissez. Le référencement naturel vise les pages de résultats classiques. Le GEO vise les réponses générées par les IA.',
    'Les leviers se recoupent largement. Un contenu qui fait autorité pour Google fait autorité pour ChatGPT. Nos experts SEO maîtrisent les deux. Une structure technique propre aide les crawlers comme les LLMs. Un maillage sémantique cohérent renforce l\'expertise aux yeux de tous les moteurs.',
    'Découvrez comment notre agence de référencement naturel et son approche unifiée <strong class="text-secondary dark:text-accent">business centrix</strong> vous rendent incontournable, quel que soit le chemin que prend votre futur client pour vous trouver.',
  ],
  tocItems: [
    { id: 'pourquoi-geo', label: 'Comprendre le GEO', icon: 'Bot' },
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'methode', label: 'Notre méthode', icon: 'ListChecks' },
    { id: 'comparaison', label: 'SEO vs GEO', icon: 'GitCompare' },
    { id: 'services', label: 'Nos expertises', icon: 'Briefcase' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'resultats', label: 'Résultats clients', icon: 'TrendingUp' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. WHYGEO DATA
// ============================================
export const whyGeoData = {
  sectionId: 'pourquoi-geo',
  badge: 'Comprendre le GEO',
  accentColor: 'rw-blue' as const,
  title: 'Pourquoi le GEO change la donne',
  subtitle: 'Les IA génératives ne se contentent pas d\'indexer. Elles lisent, synthétisent et recommandent. Être dans ces réponses, c\'est capter un prospect au moment exact où il cherche.',
  blocks: [
    {
      title: 'Une nouvelle façon de chercher',
      text: 'Quand un utilisateur demande "quelle agence SEO choisir à Paris ?", ChatGPT ne renvoie pas 10 liens bleus. Il donne une réponse. Avec des noms. Sans clic à arracher, sans position à défendre.',
    },
    {
      title: 'Ce que ça change',
      text: 'Juste la recommandation directe. Les IA citent les sources qu\'elles jugent fiables et pertinentes.',
    },
  ],
  constat: {
    icon: 'CircleAlert',
    title: 'Le constat',
    text: 'ChatGPT, Perplexity, Gemini... Ces outils ne citent que <strong>3 à 5 sources</strong> par réponse. Si vous n\'êtes pas dans ces sources, vous n\'existez pas pour l\'utilisateur. C\'est binaire : recommandé ou invisible.',
  },
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'AI won\'t replace search, it will transform it. The companies that understand this shift early will dominate their markets.',
  author: 'Satya Nadella',
  role: 'CEO Microsoft',
};

// ============================================
// 6. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Ce qui distingue notre expertise GEO & SEO',
  subtitle: 'Une approche unifiée et mesurable pour maximiser votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: 'SEO + GEO ensemble',
      description: 'Pas de silos. Une stratégie cohérente qui optimise pour Google ET pour les moteurs IA en même temps.',
      icon: 'Layers',
    },
    {
      id: 2,
      title: 'Transparence totale',
      description: 'Pas de boîte noire. Vous savez exactement ce qu\'on fait, pourquoi, et quels résultats ça génère.',
      icon: 'Eye',
    },
    {
      id: 3,
      title: 'Vision long terme',
      description: 'Pas de hacks ni de raccourcis. On construit une autorité durable qui résiste aux mises à jour.',
      icon: 'Clock',
    },
    {
      id: 4,
      title: 'Résultats mesurables',
      description: 'Pas de vanity metrics. On suit les indicateurs qui comptent : trafic qualifié, conversions, CA généré.',
      icon: 'ChartBar',
    },
  ] as RecapItem[],
};

// ============================================
// 7. PROCESS DATA
// ============================================
export const processData = {
  sectionId: 'methode',
  badge: 'Notre méthode',
  accentColor: 'rw-blue' as const,
  title: 'Comment construisons-nous votre visibilité GEO & SEO ?',
  subtitle: 'Notre approche suit 5 étapes clés. Chacune renforce les autres. L\'objectif : faire de vous la source de référence sur vos sujets.',
  steps: [
    { id: 'step-1', stepNumber: '01', title: 'Cartographier', description: 'Vos thématiques, concurrents et questions clients' },
    { id: 'step-2', stepNumber: '02', title: 'Structurer', description: 'Clusters thématiques et maillage interne' },
    { id: 'step-3', stepNumber: '03', title: 'Produire', description: 'Contenu de valeur qui mérite d\'être cité' },
    { id: 'step-4', stepNumber: '04', title: 'Construire', description: 'Netlinking qualitatif et contextuel' },
    { id: 'step-5', stepNumber: '05', title: 'Mesurer', description: 'Monitoring et ajustements continus' },
  ],
};

// ============================================
// 8. TABLEAU COMPARAISON DATA
// ============================================
export const tableauComparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparaison',
  title: 'Signaux de ranking : ce que Google et les IA évaluent',
  subtitle: 'Les critères diffèrent. Ce tableau vous aide à prioriser vos efforts.',
  columns: ['Signal', 'Impact Google', 'Impact IA', 'Votre priorité'],
  rows: [
    ['Backlinks quantité', 'Élevé', 'Moyen', 'Nécessaire mais insuffisant seul'],
    ['Citations médias/études', 'Moyen', 'Très élevé', 'Clé pour être cité par les IA'],
    ['Données structurées (Schema)', 'Moyen', 'Élevé', 'FAQ, HowTo, Organization minimum'],
    ['Auteur identifié (E-E-A-T)', 'Élevé', 'Très élevé', 'Pages auteurs avec credentials'],
    ['Réponses directes formatées', 'Moyen', 'Très élevé', 'Définitions 40-60 mots, listes numérotées'],
    ['Fraîcheur contenu', 'Moyen', 'Élevé', 'Dates visibles, MAJ régulières'],
  ],
};

// ============================================
// 9. SERVICES DATA
// ============================================
export const servicesData = {
  sectionId: 'services',
  badge: 'Nos expertises',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. Nous identifions ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      // image:
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, performance technique. Les fondations d\'une visibilité durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      // image:
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens pensée pour renforcer votre autorité. Pas de spam, pas de réseaux douteux. De vrais liens qui comptent.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      // image:
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit. Pas du remplissage.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      // image:
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// 10. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Cet accompagnement est-il fait pour vous ?',
  subtitle: 'Peu importe votre secteur ou la taille de votre entreprise. Ce qui compte, c\'est votre ambition et votre vision du référencement.',
  criteria: [
    'Vous voyez le SEO comme un investissement, pas comme une dépense',
    'Vous cherchez des résultats business, pas juste du trafic',
    'Vous êtes prêt à construire sur 12-24 mois',
    'Vous voulez un partenaire, pas un simple prestataire',
  ],
  ctaTitle: 'Vous vous reconnaissez ?',
  ctaDescription: 'Que vous soyez e-commerce, SaaS, B2B, service ou autre — si vous partagez cette vision, on peut construire ensemble.',
  ctaButtonText: 'Discutons de votre projet',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 11. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'L\'enjeu',
  text: 'Un site optimisé uniquement pour Google risque de perdre progressivement des opportunités. Les moteurs génératifs évaluent différemment l\'autorité et la pertinence. Sans adaptation, vous restez invisible pour une part croissante des recherches.',
};

// ============================================
// 12. RESULTS DATA
// ============================================
export const resultsData = {
  sectionId: 'resultats',
  badge: 'Résultats',
  accentColor: 'rw-blue' as const,
  title: 'Quels résultats obtenons-nous pour nos clients ?',
  subtitle: 'Nous ne promettons pas des positions. Nous livrons des résultats business mesurables.',
  items: [
    {
      id: 1,
      title: 'Trafic qualifié',
      description: 'Augmentation du trafic qui convertit, pas juste des visiteurs.',
      icon: 'Users',
    },
    {
      id: 2,
      title: 'Présence IA',
      description: 'Citations dans les réponses des moteurs IA sur vos requêtes stratégiques.',
      icon: 'Bot',
    },
    {
      id: 3,
      title: 'Conversion',
      description: 'Amélioration des taux de conversion et réduction de la dépendance au paid.',
      icon: 'Target',
    },
  ],
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 14. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur notre approche GEO & SEO',
  items: [
    {
      id: 'faq-1',
      question: 'Quelle différence entre GEO et SEO ?',
      answer: 'La différence entre GEO et SEO réside dans les moteurs ciblés. Le SEO vise le positionnement dans les résultats classiques (Google, Bing). Le GEO vise la présence dans les réponses générées par les IA (ChatGPT, Perplexity, Google SGE). Les techniques se recoupent largement. C\'est pourquoi nous les traitons ensemble dans une stratégie unifiée.',
    },
    {
      id: 'faq-2',
      question: 'Combien de temps pour voir des résultats en SEO et GEO ?',
      answer: 'Le délai pour voir des résultats en SEO et GEO varie selon votre situation de départ. Comptez 3-6 mois pour les premiers effets significatifs. Les résultats consolidés s\'observent généralement à 12 mois. Nous vous donnons de la visibilité sur l\'avancement dès le départ. Le SEO est un travail de fond qui construit des actifs durables.',
    },
    {
      id: 'faq-3',
      question: 'Sur quels marchés travaillez-vous ?',
      answer: 'Nous travaillons sur les marchés France, Europe, Moyen-Orient et international. Notre bureau de Dubaï nous permet d\'adresser les marchés MENA avec une vraie connaissance locale. Nous avons l\'expérience du SEO multilingue et multi-marchés.',
    },
    {
      id: 'faq-4',
      question: 'Comment mesurez-vous le succès d\'une stratégie GEO & SEO ?',
      answer: 'Nous mesurons le succès par des métriques business : trafic qualifié, conversions, chiffre d\'affaires généré. Pas par des vanity metrics. Nous définissons ensemble les KPIs qui comptent pour vous. C\'est l\'approche business centrix.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à dominer',
  titleHighlight: 'Google et les IA',
  description: 'Audit gratuit de votre visibilité actuelle sur Google et les moteurs IA. On identifie vos opportunités et on vous montre le chemin.',
  secondaryDescription: 'Première étape : un échange de 30 minutes pour comprendre vos enjeux. Sans engagement.',
  buttonText: 'Demander un audit',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Diagnostic complet' },
    { id: '3', text: 'Recommandations actionnables' },
  ],
};
