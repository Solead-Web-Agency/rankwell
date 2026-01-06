/**
 * ============================================
 * DATA - Contenu de la page SEO International
 * Sections dans l'ordre d'apparition sur la page
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'SEO international et référencement multilingue - Rankwell',
  description: 'SEO international et référencement multilingue pour conquérir de nouveaux marchés. Stratégie SEO internationale multi-pays, SEO multilingue et GEO. Paris & Dubaï.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'International' },
  ] as BreadcrumbItem[],
  title: 'SEO international : conquérir de nouveaux marchés',
  description: 'Vous visez plusieurs marchés, plusieurs langues, plusieurs pays. Le SEO international et le référencement multilingue ne se résument pas à traduire vos pages. C\'est une stratégie à part entière.',
  ctaText: 'Discuter de votre projet',
  ctaHref: '/contact',
  imageAlt: 'SEO et GEO international Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'SEO International',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Chaque marché a ses spécificités. Les comportements de recherche diffèrent. Les moteurs dominants varient. La concurrence locale a ses propres forces. Une stratégie SEO internationale qui fonctionne en France ne se transpose pas automatiquement ailleurs.',
    'Avec des bureaux à Paris et Dubaï, Rankwell accompagne les entreprises qui se développent à l\'international. Notre expertise en SEO multilingue couvre l\'Europe, le MENA, et au-delà. On maîtrise les enjeux techniques (hreflang, structure de domaine) et le référencement multilingue stratégique.',
    'Et avec le GEO international, on vous prépare aussi à être cité par les moteurs IA sur vos marchés cibles. ChatGPT, Perplexity et les autres ne connaissent pas de frontières.',
  ],
  tocItems: [
    { id: 'enjeux', label: 'Les enjeux', icon: 'CircleAlert' },
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'process', label: 'Comment ça marche', icon: 'ListChecks' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'recap',
  badge: 'Ce qu\'on apporte',
  accentColor: 'rw-blue' as const,
  title: 'Ce qu\'on apporte en SEO international',
  subtitle: 'Une expertise complète en référencement multilingue et stratégie SEO internationale.',
  items: [
    {
      id: 1,
      title: 'Stratégie multi-marchés',
      description: 'Pas une traduction, une vraie adaptation par pays.',
      icon: 'Globe',
    },
    {
      id: 2,
      title: 'Architecture technique',
      description: 'Hreflang, structure de domaine, indexation par pays.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Contenu localisé',
      description: 'Rédaction native ou supervision de traducteurs spécialisés.',
      icon: 'Languages',
    },
    {
      id: 4,
      title: 'Link building local',
      description: 'Acquisition de liens sur chaque marché cible.',
      icon: 'Link',
    },
  ] as RecapItem[],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Think global, act local. In SEO, this means understanding that each market has its own rules.',
  author: 'Aleyda Solis',
  role: 'International SEO Consultant',
};

// ============================================
// 5. ENJEUX DATA (#enjeux)
// ============================================
export const enjeuxData = {
  sectionId: 'enjeux',
  badge: 'Les enjeux',
  accentColor: 'rw-blue' as const,
  title: 'Les vrais enjeux du SEO international',
  subtitle: 'Se lancer à l\'international sans stratégie SEO internationale adaptée, c\'est partir avec un handicap. Voici ce qui fait la différence.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/international/enjeu-marche.webp',
      alt: 'Chaque marché a ses propres règles SEO',
      title: 'Chaque marché a son propre jeu',
      desc: 'Les mots-clés ne se traduisent pas, ils se recherchent. L\'intention derrière une requête varie selon les cultures. Vos concurrents locaux ont des années d\'avance sur leur marché.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/international/enjeu-technique.webp',
      alt: 'Structure technique SEO international',
      title: 'La technique doit suivre',
      desc: 'Sous-domaines, répertoires, domaines nationaux ? Hreflang mal implémenté ? Contenu dupliqué entre versions linguistiques ? Les erreurs techniques coûtent cher en international.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/international/enjeu-autorite.webp',
      alt: 'Autorité et backlinks par marché',
      title: 'L\'autorité se construit localement',
      desc: 'Vos backlinks français ne vous aident pas en Allemagne. Chaque marché demande sa propre stratégie de notoriété. Les mentions locales comptent pour les moteurs ET pour les IA.',
    },
  ] as FeatureItem[],
};

// ============================================
// 6. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'GEO international',
  text: 'Les moteurs IA comme ChatGPT répondent dans la langue de l\'utilisateur. Être cité en anglais ne garantit pas d\'être cité en allemand ou en arabe. Le GEO international et le SEO multilingue demandent une stratégie de contenu adaptée à chaque marché.',
};

// ============================================
// 7. TABLEAU STRUCTURE DATA
// ============================================
export const tableauStructureData = {
  sectionId: 'structure',
  badge: 'Architecture',
  accentColor: 'rw-blue' as const,
  title: 'Choisir sa structure de site pour le SEO international',
  subtitle: 'Chaque option de référencement multilingue a ses avantages. Voici notre grille de décision pour votre stratégie SEO internationale.',
  columns: ['Structure', 'Exemple', 'Signal géographique', 'Mutualisation autorité', 'Recommandé quand'],
  rows: [
    ['ccTLD', 'site.de, site.fr', '★★★★★', '★☆☆☆☆ (sites séparés)', 'Marchés majeurs, budget conséquent'],
    ['Sous-domaines', 'de.site.com', '★★★☆☆', '★★☆☆☆ (partielle)', 'Équipes locales autonomes'],
    ['Sous-répertoires', 'site.com/de/', '★★☆☆☆', '★★★★★ (même domaine)', 'Budget limité, lancement rapide'],
    ['Paramètres URL', 'site.com?lang=de', '★☆☆☆☆', '★★★☆☆', 'Jamais recommandé en SEO'],
  ],
};

// ============================================
// 8. APPROCHE DATA (#approche)
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Notre approche du SEO international et du référencement multilingue',
  subtitle: 'Pas de recette unique. Une stratégie SEO internationale adaptée à votre situation, vos marchés cibles et vos ressources.',
  items: [
    {
      id: 1,
      title: 'Priorisation des marchés',
      description: 'On analyse le potentiel SEO par pays : volume de recherche, concurrence, maturité du marché. Vous savez où concentrer vos efforts.',
      icon: 'Target',
    },
    {
      id: 2,
      title: 'Architecture sur mesure',
      description: 'ccTLD, sous-domaines, répertoires : chaque option a ses avantages. On recommande la structure adaptée à votre situation.',
      icon: 'Network',
    },
    {
      id: 3,
      title: 'Contenu adapté, pas traduit',
      description: 'On travaille avec des rédacteurs natifs ou on supervise vos traducteurs pour un contenu qui performe localement.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Pilotage centralisé',
      description: 'Plusieurs marchés, un seul tableau de bord. Vue consolidée de vos performances par pays.',
      icon: 'LayoutDashboard',
    },
  ] as RecapItem[],
};

// ============================================
// 9. FOR WHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Le SEO international et le référencement multilingue, c\'est pour vous ?',
  subtitle: 'Voici les situations où une stratégie SEO internationale fait sens.',
  criteria: [
    { label: 'Expansion planifiée', description: 'Vous lancez votre activité sur de nouveaux marchés' },
    { label: 'Site multilingue existant', description: 'Vous avez des versions locales mais elles sous-performent' },
    { label: 'Concurrence internationale', description: 'Vos concurrents sont déjà visibles sur vos marchés cibles' },
    { label: 'E-commerce cross-border', description: 'Vous vendez déjà à l\'étranger et voulez accélérer' },
    { label: 'Groupe multi-pays', description: 'Vous gérez plusieurs entités avec des sites locaux' },
  ],
  ctaTitle: 'Prêt à vous développer à l\'international ?',
  ctaDescription: 'On échange sur vos marchés cibles et on évalue ensemble le potentiel SEO par pays.',
  ctaButtonText: 'Discuter de votre projet',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 10. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Notre réseau',
  text: 'Avec des bureaux à Paris et Dubaï, et un réseau de partenaires locaux, on couvre l\'Europe, la région MENA, l\'Amérique du Nord et au-delà. Asie, Amérique latine : parlons-en pour évaluer la faisabilité.',
};

// ============================================
// 12. PROCESS DATA (#process)
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'Comment se déroule un projet de SEO international',
  subtitle: '4 étapes pour déployer votre stratégie SEO internationale et votre référencement multilingue sur vos marchés cibles.',
  steps: [
    {
      id: 'cadrage',
      stepNumber: 1,
      title: 'Cadrage',
      description: 'Objectifs, marchés prioritaires, ressources disponibles, contraintes.',
    },
    {
      id: 'audit',
      stepNumber: 2,
      title: 'Audit & Stratégie',
      description: 'Analyse par marché, opportunités, roadmap priorisée.',
    },
    {
      id: 'deploiement',
      stepNumber: 3,
      title: 'Déploiement',
      description: 'Technique, contenu, liens. Marché par marché ou en parallèle.',
    },
    {
      id: 'pilotage',
      stepNumber: 4,
      title: 'Pilotage',
      description: 'Suivi par pays, ajustements, arbitrages entre marchés.',
    },
  ],
};

// ============================================
// 13. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le SEO international et le référencement multilingue',
  items: [
    {
      id: 'faq-1',
      question: 'Faut-il un site par pays ou un site multilingue ?',
      answer: 'Ça dépend de votre situation. Les ccTLD (.de, .es, .ae) envoient un signal local fort mais demandent plus de ressources. Les sous-répertoires (/de/, /es/) mutualisent l\'autorité du domaine principal. On analyse votre cas et on recommande la meilleure option.',
    },
    {
      id: 'faq-2',
      question: 'Peut-on simplement traduire notre contenu français ?',
      answer: 'La traduction est un point de départ, pas une stratégie de SEO international. Les mots-clés, les intentions de recherche, les angles éditoriaux diffèrent selon les marchés. Le SEO multilingue adapte le contenu pour qu\'il performe localement, pas juste pour qu\'il soit compréhensible.',
    },
    {
      id: 'faq-3',
      question: 'Comment gérez-vous les langues que vous ne parlez pas ?',
      answer: 'On travaille avec des rédacteurs et consultants natifs sur chaque marché. Pour les langues comme l\'arabe ou l\'allemand, on a des partenaires de confiance intégrés à notre process. Vous avez un seul interlocuteur chez Rankwell, on gère la coordination.',
    },
    {
      id: 'faq-4',
      question: 'Quel budget prévoir pour du SEO international ?',
      answer: 'Ça dépend du nombre de marchés, de votre point de départ et de vos objectifs. Un projet sur 2-3 pays européens n\'a pas le même coût qu\'un déploiement mondial. Premier échange pour cadrer votre besoin et vous donner une estimation réaliste.',
    },
    {
      id: 'faq-5',
      question: 'Le GEO fonctionne-t-il de la même façon partout ?',
      answer: 'Les principes sont les mêmes (autorité, citabilité, mentions), mais l\'exécution varie. Les sources que consultent les IA diffèrent selon les langues. Un contenu en anglais bien optimisé GEO ne garantit pas d\'être cité quand l\'utilisateur pose sa question en allemand.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 14. CTA DATA
// ============================================
export const ctaData = {
  title: 'Lancez votre',
  titleHighlight: 'SEO international',
  description: 'Paris, Dubaï ou visio. On échange sur vos marchés cibles et on définit votre stratégie SEO internationale et de référencement multilingue.',
  secondaryDescription: 'Premier échange pour comprendre vos objectifs et vos marchés prioritaires. Sans engagement.',
  buttonText: 'Discuter de votre projet',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Paris & Dubaï' },
    { id: '3', text: 'Multi-marchés' },
  ],
};
