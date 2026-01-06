/**
 * ============================================
 * DATA - Contenu de la page Création de contenu
 * Sections dans l'ordre d'apparition sur la page
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Rédaction et création de contenu SEO & GEO - Rankwell',
  description: 'Rédaction SEO et création de contenu optimisé pour Google et les IA. Content marketing stratégique : contenus qui se positionnent et convertissent.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Création de contenu' },
  ] as BreadcrumbItem[],
  title: 'Création de contenu pour Google et les IA',
  description: 'La création de contenu est le carburant de votre visibilité SEO et GEO. Pas n\'importe quel contenu : de la rédaction stratégique qui répond aux vraies intentions de recherche.',
  ctaText: 'Parler de votre stratégie de contenu',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/creation-contenu/hero.webp',
  imageAlt: 'Création de contenu SEO et GEO Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Rédaction SEO',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Pendant des années, la rédaction SEO signifiait placer des mots-clés dans des articles. Ça marchait. C\'est fini. Google comprend le sens, pas juste les mots.',
    'Les IA génératives vont plus loin : elles évaluent si votre contenu mérite d\'être cité, recommandé, utilisé comme source fiable. Votre création de contenu SEO construit ce qu\'elles "savent" de votre marque.',
    'Découvrez comment notre stratégie de contenu et notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> produisent du contenu qui se positionne sur Google ET qui nourrit la connaissance des IA sur votre expertise.',
  ],
  tocItems: [
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'methode', label: '4 piliers', icon: 'Columns2' },
    { id: 'types', label: 'Types de contenus', icon: 'FileText' },
    { id: 'process', label: '6 étapes', icon: 'ListChecks' },
    { id: 'formats', label: 'Formats par objectif', icon: 'LayoutGrid' },
    { id: 'difference', label: 'Ce qui fait la différence', icon: 'Sparkles' },
    { id: 'collaboration', label: 'Formats de collaboration', icon: 'Handshake' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Ce qui distingue notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Une rédaction SEO qui performe sur Google et les IA',
  subtitle: 'Notre création de contenu SEO est pensée pour répondre aux attentes de Google, des IA et de vos prospects.',
  items: [
    {
      id: 1,
      title: 'Objectifs business',
      description: 'Chaque contenu répond à un objectif précis, pas à un calendrier éditorial.',
      icon: 'Target',
    },
    {
      id: 2,
      title: 'Double optimisation SEO + GEO',
      description: 'Contenus conçus pour Google et les moteurs IA génératifs.',
      icon: 'Layers',
    },
    {
      id: 3,
      title: 'Contenus à valeur durable',
      description: 'Production pensée pour performer dans le temps, pas pour remplir.',
      icon: 'Clock',
    },
    {
      id: 4,
      title: 'Conversion intégrée',
      description: 'Le positionnement au service de la génération de leads.',
      icon: 'MousePointerClick',
    },
  ] as RecapItem[],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Content is king, but context is God.',
  author: 'Gary Vaynerchuk',
  role: 'CEO VaynerMedia',
};

// ============================================
// 5. METHODE 4 PILIERS DATA (#methode)
// ============================================
export const methodeData = {
  sectionId: 'methode',
  badge: '4 piliers',
  accentColor: 'rw-blue' as const,
  title: 'Comment notre rédaction SEO performe-t-elle ?',
  subtitle: 'Notre stratégie de contenu repose sur 4 piliers. Chaque création de contenu SEO répond aux attentes de Google, des IA et de vos prospects.',
  dimensions: [
    {
      dimension: 1,
      label: 'PILIER 1',
      title: 'Stratégie de contenu',
      subtitle: 'Chaque contenu a un rôle précis dans votre écosystème de content marketing.',
      items: ['Analyse des intentions de recherche', 'Mapping contenu/parcours client', 'Priorisation par potentiel business', 'Calendrier éditorial stratégique'],
    },
    {
      dimension: 2,
      label: 'PILIER 2',
      title: 'Recherche approfondie',
      subtitle: 'Du contenu qu\'on a envie de citer, pas de la réécriture.',
      items: ['Interview de vos experts métier', 'Analyse des sources primaires', 'Données et chiffres vérifiés', 'Angle différenciant identifié'],
    },
    {
      dimension: 3,
      label: 'PILIER 3',
      title: 'Structure GEO-ready',
      subtitle: 'Formaté pour être cité par les IA génératives.',
      items: ['Paragraphes clairs et autonomes', 'Listes et FAQ structurées', 'Données citables et sourcées', 'Schema.org et données structurées'],
    },
    {
      dimension: 4,
      label: 'PILIER 4',
      title: 'Optimisation naturelle',
      subtitle: 'Le SEO au service de la lisibilité, jamais au détriment.',
      items: ['Mots-clés intégrés naturellement', 'Maillage interne stratégique', 'Balises et méta optimisées', 'Performance et accessibilité'],
    },
  ],
};

// ============================================
// 6. TRUST BANNER (composant global sans data)
// ============================================

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Contenu et connaissance de marque',
  text: 'Chaque contenu que nous produisons renforce ce que le web "sait" de votre marque. Les IA génératives construisent leurs réponses à partir de cette connaissance. Un contenu bien structuré devient une brique de votre réputation digitale.',
};

// ============================================
// 8. TYPES DE CONTENUS DATA (#types)
// ============================================
export const typesContenusData = {
  sectionId: 'types',
  badge: 'Types de contenus',
  accentColor: 'rw-blue' as const,
  title: 'Quels types de création de contenu SEO proposons-nous ?',
  subtitle: 'Cinq types de contenus pour couvrir l\'ensemble de votre stratégie de contenu. Chacun a un rôle précis dans votre visibilité.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-pages-piliers.webp',
      alt: 'Pages piliers SEO',
      title: 'Pages piliers',
      desc: 'Les contenus longs et exhaustifs qui ancrent votre expertise sur un sujet. Ils structurent votre maillage sémantique et captent les requêtes principales.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-articles-blog.webp',
      alt: 'Articles de blog SEO',
      title: 'Articles de blog',
      desc: 'Contenus réguliers qui ciblent des requêtes spécifiques, répondent aux questions de votre audience, alimentent votre autorité thématique.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-pages-services.webp',
      alt: 'Pages services et produits',
      title: 'Pages services/produits',
      desc: 'Vos pages commerciales optimisées pour convertir et se positionner. Le bon équilibre entre persuasion et SEO.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-landing-pages.webp',
      alt: 'Landing pages optimisées',
      title: 'Landing pages',
      desc: 'Pages d\'atterrissage optimisées pour des campagnes spécifiques ou des segments d\'audience particuliers.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-faq.webp',
      alt: 'FAQ et contenus structurés',
      title: 'FAQ et contenus structurés',
      desc: 'Réponses directes aux questions fréquentes, formatées pour les featured snippets et les réponses IA.',
    },
  ] as FeatureItem[],
};

// ============================================
// 9. PROCESS DATA (#process) - 6 étapes
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'Comment se déroule notre rédaction SEO ?',
  subtitle: '6 étapes du brief à la publication. Chaque création de contenu SEO passe par ce processus pour garantir qualité et performance.',
  steps: [
    {
      id: 'brief',
      stepNumber: 'Étape 1',
      title: 'Brief stratégique',
      description: 'Définition des objectifs, analyse du sujet, recherche de mots-clés, étude de la concurrence. On sait exactement ce qu\'on vise avant d\'écrire.',
      icon: 'ClipboardList',
    },
    {
      id: 'structuration',
      stepNumber: 'Étape 2',
      title: 'Structuration',
      description: 'Plan détaillé validé avec vous. Vous savez ce que contiendra le contenu avant sa rédaction.',
      icon: 'LayoutList',
    },
    {
      id: 'redaction',
      stepNumber: 'Étape 3',
      title: 'Rédaction',
      description: 'Écriture par un rédacteur spécialisé dans votre secteur ou formé à vos sujets. Pas de contenu générique.',
      icon: 'PenTool',
    },
    {
      id: 'optimisation',
      stepNumber: 'Étape 4',
      title: 'Optimisation',
      description: 'Intégration SEO, vérification GEO-readiness, maillage interne, meta données.',
      icon: 'Settings',
    },
    {
      id: 'validation',
      stepNumber: 'Étape 5',
      title: 'Validation',
      description: 'Relecture, corrections, validation client. On ne publie rien sans votre accord.',
      icon: 'CircleCheck',
    },
    {
      id: 'integration',
      stepNumber: 'Étape 6',
      title: 'Intégration',
      description: 'On peut gérer l\'intégration sur votre CMS si besoin, ou vous livrer des fichiers prêts à publier.',
      icon: 'Upload',
    },
  ],
};

// ============================================
// 10. CLIENTS (composant global sans data)
// ============================================

// ============================================
// 11. TABLEAU FORMATS DATA (#formats)
// ============================================
export const tableauFormatsData = {
  sectionId: 'formats',
  badge: 'Formats',
  accentColor: 'rw-blue' as const,
  title: 'Quel format de rédaction SEO pour quel objectif ?',
  subtitle: 'Chaque format de content marketing a ses forces. Voici comment choisir en fonction de votre stratégie de contenu.',
  columns: ['Format', 'Objectif principal', 'Potentiel SEO', 'Potentiel GEO', 'Effort production'],
  rows: [
    ['Guide complet (3000+ mots)', 'Position sur requête principale', '★★★★★', '★★★☆☆', 'Élevé'],
    ['Article FAQ structuré', 'Featured snippets + citations IA', '★★★★☆', '★★★★★', 'Moyen'],
    ['Étude de cas chiffrée', 'Preuve sociale + backlinks', '★★★☆☆', '★★★★★', 'Élevé'],
    ['Comparatif/versus', 'Requêtes transactionnelles', '★★★★☆', '★★★★☆', 'Moyen'],
    ['Glossaire/définitions', 'Longue traîne + autorité', '★★★☆☆', '★★★★★', 'Faible par entrée'],
    ['Étude données originales', 'Backlinks + citations presse', '★★★★☆', '★★★★★', 'Très élevé'],
  ],
};

// ============================================
// 12. DIFFERENCE DATA (#difference)
// ============================================
export const differenceData = {
  sectionId: 'difference',
  badge: 'Ce qui fait la différence',
  accentColor: 'rw-blue' as const,
  title: 'Qu\'est-ce qui fait la différence ?',
  subtitle: 'Quatre éléments distinguent notre production de contenu. Chacun contribue à la performance et à la durabilité de vos contenus.',
  items: [
    {
      id: 1,
      title: 'Pas de contenus IA bruts',
      description: 'L\'IA est un outil, pas un rédacteur. On peut l\'utiliser pour accélérer certaines étapes, mais chaque contenu est retravaillé, enrichi, humanisé par nos équipes.',
      icon: 'UserCheck',
    },
    {
      id: 2,
      title: 'Expertise sectorielle',
      description: 'On affecte les bons profils aux bons sujets. Un contenu B2B tech n\'est pas écrit par quelqu\'un qui fait du lifestyle.',
      icon: 'Briefcase',
    },
    {
      id: 3,
      title: 'Pensé pour la conversion',
      description: 'Se positionner c\'est bien. Convertir c\'est mieux. Chaque contenu intègre des éléments qui guident vers l\'action.',
      icon: 'Target',
    },
    {
      id: 4,
      title: 'Suivi de performance',
      description: 'On monitore le positionnement et le trafic de chaque contenu. Ce qui marche, on en fait plus. Ce qui coince, on optimise.',
      icon: 'ChartBar',
    },
  ],
};

// ============================================
// 13. TESTIMONIALS (composant global sans data)
// ============================================

// ============================================
// 14. COLLABORATION DATA (#collaboration)
// ============================================
export const collaborationData = {
  sectionId: 'collaboration',
  badge: 'Collaboration',
  accentColor: 'rw-blue' as const,
  title: 'Formats de collaboration',
  subtitle: 'Trois façons de travailler ensemble, selon vos besoins et vos ressources internes.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-recurrent.webp',
      alt: 'Production de contenu récurrente',
      title: 'Production récurrente',
      desc: 'Un volume mensuel de contenus, calendrier éditorial, production continue. Idéal pour alimenter régulièrement votre site.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-oneshot.webp',
      alt: 'Projet contenu one-shot',
      title: 'Projet one-shot',
      desc: 'Refonte de vos pages existantes, création d\'un cluster thématique, lancement d\'un nouveau produit. Un projet défini avec un livrable clair.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-accompagnement.webp',
      alt: 'Accompagnement équipes internes',
      title: 'Accompagnement de vos équipes',
      desc: 'Vous avez des rédacteurs en interne ? On peut les former, définir les briefs, relire et optimiser leurs productions.',
    },
  ] as FeatureItem[],
};

// ============================================
// 15. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur notre rédaction SEO et notre création de contenu',
  items: [
    {
      id: 'faq-1',
      question: 'Utilisez-vous ChatGPT ?',
      answer: 'Oui, nous utilisons les IA génératives (GPT, Claude, Gemini) pour produire le contenu. Mais la vraie valeur est ailleurs : dans tout le travail en amont. Brief détaillé, connaissance client, ton de marque, persona cible, mots-clés stratégiques, structure SEO et GEO-ready. L\'IA suit des directives strictes pour produire un contenu qui performe. Sans ce cadrage, l\'IA produit du générique. Avec, elle produit du contenu qui se positionne.',
    },
    {
      id: 'faq-2',
      question: 'Qui sont vos rédacteurs ?',
      answer: 'La production est très largement assurée par l\'IA, encadrée par nos équipes. C\'est ce qui nous permet d\'être rapides et compétitifs. Si vous avez besoin d\'un rédacteur humain spécialisé sur votre secteur, c\'est possible sur demande. Nous avons un réseau de profils experts (tech, finance, santé, etc.) que nous mobilisons selon les projets.',
    },
    {
      id: 'faq-3',
      question: 'Vous écrivez dans quelles langues ?',
      answer: 'Grâce à l\'IA, nous n\'avons plus de barrière linguistique. Français, anglais, espagnol, allemand, arabe, chinois... Nous pouvons produire dans la langue de votre marché cible. Notre bureau de Dubaï nous donne aussi une vraie connaissance des nuances culturelles pour les marchés MENA.',
    },
    {
      id: 'faq-4',
      question: 'Combien coûte un contenu ?',
      answer: 'Puisque la production est largement IA, le coût est surtout lié au travail stratégique : brief, recherche, structure, optimisation SEO/GEO, validation. C\'est donc du sur-mesure selon la complexité de votre projet, pas un prix au mot. Exception : si vous demandez un rédacteur humain spécialisé, là on passe sur une tarification plus classique.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 16. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 17. CTA DATA
// ============================================
export const ctaData = {
  title: 'Une rédaction SEO qui',
  titleHighlight: 'travaille pour vous',
  description: 'Chaque création de contenu SEO doit servir vos objectifs. Notre content marketing se positionne sur Google, se fait citer par les IA et convertit vos visiteurs en clients.',
  secondaryDescription: 'Première étape : un échange sur vos besoins. Nous vous proposons une stratégie de contenu adaptée à vos objectifs et à votre secteur. Rédaction SEO ponctuelle ou récurrente, vous choisissez.',
  buttonText: 'Parler de vos besoins en contenu',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Call de 30 min' },
    { id: '3', text: 'Stratégie sur mesure' },
  ],
};
