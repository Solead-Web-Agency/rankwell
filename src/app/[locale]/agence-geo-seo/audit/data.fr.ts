/**
 * ============================================
 * DATA - Contenu de la page Audit SEO
 * ============================================
 *
 * Sections ordonnées selon leur apparition dans page.tsx :
 * 1. metadata
 * 2. heroData
 * 3. introData
 * 4. recapBoxData
 * 5. quote1Data
 * 6. auditDimensionsData
 * 7. tableauMaturiteData
 * 8. pointVigilance1Data
 * 9. livrablesData
 * 10. auditProcessData
 * 11. forWhoData
 * 12. pointVigilance2Data
 * 13. quote2Data
 * 14. faqData
 * 15. ctaData
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Audit SEO complet : technique et sémantique - Rankwell',
  description: 'Audit SEO de votre site internet : analyse technique, sémantique et concurrentielle. Notre agence audit SEO livre des recommandations priorisées et actionnables.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Audit SEO' },
  ] as BreadcrumbItem[],
  title: 'Audit SEO de votre site : comprendre avant d\'agir',
  description: 'Votre site sous-performe ? Notre agence réalise l\'audit SEO complet de votre site internet : technique, sémantique et concurrentiel. On diagnostique, on priorise, on vous donne la roadmap.',
  ctaText: 'Demander un audit SEO',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/audit-seo/hero.webp',
  imageAlt: 'Audit SEO complet Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence audit SEO',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Optimiser un site sans l\'avoir audité, c\'est soigner sans diagnostic. On peut passer des mois sur des actions sans impact, pendant que le vrai problème reste ignoré.',
    'Un audit SEO rigoureux de votre site internet vous donne la visibilité sur ce qui bloque, ce qui fonctionne, et ce qui doit être priorisé. Notre audit technique SEO et notre audit SEO sémantique révèlent les leviers de croissance. Pas des suppositions : des faits, des données, des recommandations actionnables.',
    'Découvrez comment notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> de l\'audit SEO part de vos objectifs pour identifier ce qui compte vraiment. Google et moteurs IA inclus.',
  ],
  tocItems: [
    { id: 'approche', label: 'Périmètre de l\'audit', icon: 'ClipboardList' },
    { id: 'dimensions', label: '5 dimensions analysées', icon: 'Layers' },
    { id: 'analyse', label: 'Analyse par maturité', icon: 'ChartLine' },
    { id: 'livrables', label: 'Livrables concrets', icon: 'FileText' },
    { id: 'process', label: 'Déroulement', icon: 'ListChecks' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Ce que couvre notre audit SEO',
  accentColor: 'rw-blue' as const,
  title: 'Un diagnostic complet, pas un rapport automatique',
  subtitle: 'Notre audit SEO couvre tout ce qui influence votre visibilité sur Google et les moteurs IA.',
  items: [
    {
      id: 1,
      title: '5 dimensions analysées',
      description: 'Audit technique SEO, audit sémantique, popularité, concurrence et GEO-readiness. Rien n\'est laissé au hasard.',
      icon: 'Layers',
    },
    {
      id: 2,
      title: 'Recommandations priorisées',
      description: 'Classées par impact et faisabilité. Vous savez exactement par où commencer.',
      icon: 'ListOrdered',
    },
    {
      id: 3,
      title: 'Analyse concurrentielle',
      description: 'On analyse votre site ET celui de vos concurrents. Pour comprendre votre position réelle.',
      icon: 'Users',
    },
    {
      id: 4,
      title: 'Livrable complet',
      description: 'Rapport détaillé + restitution en visio. Pas d\'export d\'outil automatique.',
      icon: 'FileText',
    },
  ] as RecapItem[],
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Without data, you\'re just another person with an opinion.',
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 6. AUDIT DIMENSIONS DATA
// ============================================
export const auditDimensionsData = {
  sectionId: 'dimensions',
  badge: '5 dimensions',
  accentColor: 'rw-blue' as const,
  title: 'Quelles dimensions couvre notre audit SEO ?',
  subtitle: 'Notre audit SEO couvre 5 dimensions complémentaires. Chacune révèle une facette de votre visibilité actuelle et de votre potentiel.',
  dimensions: [
    {
      dimension: 1,
      label: 'DIMENSION 1',
      title: 'Audit technique SEO',
      subtitle: 'La santé de votre site vue par les moteurs de recherche.',
      items: ['Crawl et indexation', 'Performance et Core Web Vitals', 'Architecture et URLs', 'Erreurs 404 et redirections', 'Expérience mobile'],
    },
    {
      dimension: 2,
      label: 'DIMENSION 2',
      title: 'Audit SEO sémantique',
      subtitle: 'La pertinence de vos contenus pour vos cibles.',
      items: ['Couverture sémantique', 'Optimisation on-page', 'Clusters et maillage interne', 'Intentions de recherche', 'Cannibalisation de mots-clés'],
    },
    {
      dimension: 3,
      label: 'DIMENSION 3',
      title: 'Audit de popularité',
      subtitle: 'Votre autorité aux yeux de Google et des IA.',
      items: ['Profil de backlinks', 'Qualité des ancres', 'Liens toxiques à risque', 'Benchmark concurrentiel'],
    },
    {
      dimension: 4,
      label: 'DIMENSION 4',
      title: 'Audit concurrentiel',
      subtitle: 'Votre position dans votre écosystème.',
      items: ['Vrais concurrents SEO', 'Mots-clés concurrents', 'Forces et faiblesses', 'Opportunités inexploitées'],
    },
    {
      dimension: 5,
      label: 'DIMENSION 5',
      title: 'Audit GEO-readiness',
      subtitle: 'Votre préparation aux moteurs IA génératifs.',
      items: ['Structure des contenus citables', 'Données structurées Schema.org', 'Autorité thématique E-E-A-T', 'Format FAQ et listes'],
    },
  ],
};

// ============================================
// 7. TABLEAU MATURITE DATA
// ============================================
export const tableauMaturiteData = {
  sectionId: 'analyse',
  badge: 'Analyse',
  accentColor: 'rw-blue' as const,
  title: 'Ce que révèle un audit SEO selon la maturité de votre site',
  subtitle: 'Les problèmes diffèrent selon votre situation. Voici ce que notre audit SEO de site internet révèle généralement.',
  columns: ['Maturité SEO', 'Problèmes fréquents', 'Quick wins typiques', 'Potentiel de gains'],
  rows: [
    ['Débutant (jamais optimisé)', 'Pas de balises, contenu fin, 0 backlinks', 'Titres/metas, pages clés, indexation', '+100-300% trafic possible'],
    ['Intermédiaire (bases posées)', 'Cannibalisation, technique négligé, liens faibles', 'Consolidation pages, Core Web Vitals', '+30-80% trafic possible'],
    ['Avancé (SEO actif)', 'Plafond de verre, concurrence forte', 'GEO-readiness, autorité thématique', '+10-30% + visibilité IA'],
    ['Post-refonte', 'Redirections cassées, perte de positions', 'Corrections urgentes, récupération', 'Retour au niveau antérieur'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'Dimension GEO-readiness',
  text: 'Notre audit inclut une analyse de votre préparation aux moteurs IA. Vos contenus sont-ils structurés pour être cités par ChatGPT ou Perplexity ? Vos données structurées sont-elles en place ? C\'est une dimension que peu d\'audits couvrent.',
};

// ============================================
// 9. LIVRABLES DATA
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Livrables',
  accentColor: 'rw-blue' as const,
  title: 'Que recevez-vous concrètement ?',
  subtitle: 'Un audit n\'a de valeur que s\'il est exploitable. Voici ce que nous livrons.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/audit/livrable-rapport.webp',
      alt: 'Rapport d\'audit SEO complet',
      title: 'Un rapport complet',
      description: 'Pas un export d\'outil automatique. Un document structuré, analysé, commenté. Chaque point est expliqué, contextualisé, illustré.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/audit/livrable-priorisation.webp',
      alt: 'Priorisation des recommandations SEO',
      title: 'Une priorisation claire',
      description: 'Toutes les recommandations ne se valent pas. On classe par impact potentiel et facilité de mise en œuvre. Vous savez par quoi commencer.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/audit/livrable-actions.webp',
      alt: 'Recommandations SEO actionnables',
      title: 'Des recommandations actionnables',
      description: 'Pas de "il faudrait améliorer le SEO". Des actions concrètes : cette page, cette balise, ce contenu, ce lien.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/audit/livrable-restitution.webp',
      alt: 'Restitution d\'audit en visio',
      title: 'Une restitution en visio',
      description: 'On vous présente les findings, on répond à vos questions, on s\'assure que vous avez compris les enjeux.',
    },
  ],
};

// ============================================
// 10. AUDIT PROCESS DATA
// ============================================
export const auditProcessData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'Comment se déroule un audit ?',
  subtitle: '5 étapes du brief initial à la restitution. Comptez 2 à 4 semaines selon la taille de votre site.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Brief initial',
      description: 'On comprend votre contexte, vos objectifs, vos contraintes. Un audit n\'a de sens que s\'il est adapté à votre situation.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Collecte et analyse',
      description: 'On passe votre site et celui de vos concurrents au crible. Outils, crawl, analyse manuelle. Comptez 2-3 semaines.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Synthèse et priorisation',
      description: 'On transforme les données brutes en recommandations structurées et priorisées par impact et faisabilité.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Restitution',
      description: 'Présentation détaillée des findings et de la roadmap. Session questions/réponses pour clarifier tous les points.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Et après ?',
      description: 'L\'audit est un point de départ. On peut ensuite vous accompagner sur l\'implémentation, ou vous laisser avancer en autonomie.',
    },
  ],
};

// ============================================
// 11. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Pour qui est cet audit ?',
  subtitle: 'L\'audit s\'adresse à toute entreprise qui veut comprendre sa situation SEO actuelle avant d\'investir.',
  criteria: [
    { label: 'Sites qui stagnent', description: 'Vous produisez du contenu, mais ça ne décolle pas' },
    { label: 'Avant une refonte', description: 'Identifier ce qu\'il faut préserver et ce qu\'il faut corriger' },
    { label: 'Après une refonte', description: 'Vérifier que tout est en place, corriger les erreurs' },
    { label: 'Nouvelle équipe SEO', description: 'Avoir un état des lieux objectif pour démarrer' },
    { label: 'Due diligence', description: 'Évaluer le SEO d\'une acquisition potentielle' },
  ],
  ctaTitle: 'Prêt à comprendre votre situation ?',
  ctaDescription: 'Un audit bien fait vous évite des mois d\'efforts mal orientés. On diagnostique, vous décidez.',
  ctaButtonText: 'Demander un audit',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 12. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Point de vigilance',
  text: 'Un audit SEO qui ignore la dimension GEO est incomplet. Les moteurs IA représentent déjà 30% des recherches. Ignorer cette dimension, c\'est ignorer une partie croissante de votre audience potentielle.',
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEO strategy is to build a brand that people search for by name.',
  author: 'Neil Patel',
  role: 'Digital Marketing Expert',
};

// ============================================
// 14. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur notre audit SEO',
  items: [
    {
      id: 'faq-1',
      question: 'Combien coûte un audit SEO de site internet ?',
      answer: 'Le coût d\'un audit SEO dépend de la taille de votre site et de la profondeur d\'analyse souhaitée. Notre agence audit SEO établit un devis après avoir compris votre contexte. Pas de tarif opaque. Vous savez exactement ce qui est inclus avant de vous engager.',
    },
    {
      id: 'faq-2',
      question: 'Combien de temps dure un audit SEO ?',
      answer: 'La durée d\'un audit SEO complet est généralement de 2 à 4 semaines entre le brief initial et la restitution. L\'audit technique SEO et l\'audit SEO sémantique demandent du temps pour être bien réalisés. Un audit bâclé ne sert à rien.',
    },
    {
      id: 'faq-3',
      question: 'L\'audit inclut-il l\'implémentation ?',
      answer: 'L\'audit est un diagnostic, pas une implémentation. Les deux sont des étapes distinctes. L\'implémentation peut faire l\'objet d\'un accompagnement séparé. Vous pouvez aussi implémenter en interne avec nos recommandations.',
    },
    {
      id: 'faq-4',
      question: 'Avez-vous besoin d\'accès à nos outils ?',
      answer: 'L\'accès à vos outils (Google Search Console, Analytics, CMS) permet un audit plus complet. Ces données first-party sont précieuses pour l\'analyse. Nous pouvons aussi travailler avec des accès limités si nécessaire.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Arrêtez de deviner,',
  titleHighlight: 'commencez à savoir',
  description: 'Un audit SEO bien fait vous fait gagner des mois d\'efforts mal orientés. Notre audit SEO de site internet révèle ce qui bloque votre visibilité sur Google comme sur les moteurs IA. Et il priorise les actions à impact.',
  secondaryDescription: 'Première étape : un call de 30 minutes pour comprendre votre contexte. Notre agence vous propose ensuite un audit SEO adapté à votre situation, avec un périmètre et un budget clairs.',
  buttonText: 'Demander un audit SEO',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Call de 30 min' },
    { id: '3', text: 'Devis clair' },
  ],
};
