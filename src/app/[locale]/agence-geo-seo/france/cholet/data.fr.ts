/**
 * DATA FR - Agence GEO & SEO à Cholet
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Cholet | Référencement IA & Traditionnel',
  description:
    'Agence spécialisée en GEO (Generative Engine Optimization) et SEO à Cholet. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale du Mouchoir.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Cholet' },
  ],
  badge: 'cholet',
  title: 'Agence GEO & SEO à Cholet',
  description:
    'Propulsez la visibilité en ligne de votre entreprise choletaise avec notre expertise combinée en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées au dynamisme industriel et commercial des Mauges.',
  primaryCta: {
    text: 'Demander un audit gratuit',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Découvrir nos services',
    href: '#services',
  },
};

// ============================================
// INTRO DATA
// ============================================
export const introData = {
  badge: 'Votre partenaire digital à Cholet',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises choletaises',
  paragraphs: [
    "Cholet, sous-préfecture du Maine-et-Loire et capitale des Mauges, conjugue tradition industrielle textile et dynamisme économique. Ville entrepreneuriale par excellence, elle abrite de nombreuses PME et un tissu commercial actif.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs de recherche alimentés par l'intelligence artificielle comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette double expertise garantit une couverture optimale.",
    "Notre agence soutient les acteurs choletais dans leur développement numérique, en élaborant des stratégies personnalisées qui valorisent leur ancrage local tout en leur ouvrant de nouveaux marchés.",
  ],
  tocItems: [
    { id: 'recap', label: 'En bref' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO' },
    { id: 'approche', label: 'Notre approche' },
    { id: 'pour-qui', label: 'Pour qui ?' },
    { id: 'services', label: 'Nos services' },
    { id: 'processus', label: 'Processus' },
    { id: 'comparaison', label: 'SEO vs GEO' },
    { id: 'faq', label: 'FAQ' },
  ],
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'En bref',
  title: 'GEO & SEO à Cholet : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché choletais.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'GEO - IA',
      description: 'Présence dans les réponses générées par les assistants IA nouvelle génération.',
    },
    {
      icon: 'Search',
      title: 'SEO classique',
      description: 'Positionnement solide sur Google et les moteurs de recherche traditionnels.',
    },
    {
      icon: 'Target',
      title: 'Focus local',
      description: 'Stratégies calibrées pour le bassin économique choletais et des Mauges.',
    },
    {
      icon: 'TrendingUp',
      title: 'Impact mesurable',
      description: 'Augmentation tangible du trafic qualifié et des opportunités commerciales.',
    },
  ],
};

// ============================================
// GEO EDUCATION SECTION
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  title: 'Décryptage de l\'optimisation pour les moteurs IA',
  subtitle:
    'Le GEO bouleverse les codes du référencement. Découvrez son fonctionnement et ses bénéfices pour votre entreprise choletaise.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Bot',
      title: 'Architecture des moteurs IA',
      description:
        'ChatGPT, Perplexity et Google SGE agrègent des données multiples pour formuler des réponses complètes. Être reconnu comme source de référence devient stratégique.',
    },
    {
      icon: 'FileText',
      title: 'Contenus structurés et crédibles',
      description:
        'Les systèmes IA privilégient les contenus bien organisés, sourcés et démontrant une expertise réelle.',
    },
    {
      icon: 'Award',
      title: 'Marqueurs de confiance',
      description:
        'Citations, backlinks pertinents et mentions de marque consolident votre crédibilité aux yeux des moteurs IA.',
    },
    {
      icon: 'ChartLine',
      title: 'Suivi de performance',
      description:
        'Des solutions analytiques permettent de monitorer votre présence dans les réponses IA.',
    },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "Cholet est historiquement connue pour son industrie textile et son célèbre mouchoir. Aujourd'hui, la ville abrite un tissu de PME dynamiques et un bassin d'emploi de plus de 100 000 actifs.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Cholet',
  subtitle:
    'Notre démarche intègre les particularités du marché choletais pour déployer des stratégies efficaces.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      icon: 'Search',
      title: 'Diagnostic du marché local',
      description:
        'Exploration approfondie de votre secteur à Cholet, mapping concurrentiel et identification des opportunités.',
    },
    {
      icon: 'FileText',
      title: 'Production de contenus experts',
      description:
        'Rédaction de contenus qui établissent votre expertise, optimisés pour le SEO et les moteurs IA.',
    },
    {
      icon: 'Settings',
      title: 'Optimisation technique',
      description:
        'Paramétrage de votre site pour répondre aux exigences de performance des moteurs traditionnels et IA.',
    },
    {
      icon: 'BarChart3',
      title: 'Monitoring et amélioration',
      description:
        'Suivi continu des performances avec tableaux de bord clairs et ajustements stratégiques.',
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Les entreprises choletaises que nous accompagnons',
  subtitle:
    'Notre expertise s\'adresse à différents profils d\'entreprises du territoire des Mauges.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      icon: 'Building2',
      title: 'Industrie & Textile',
      description:
        'Industries manufacturières, entreprises textile et sous-traitants du bassin choletais.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Commerce & Distribution',
      description:
        'Commerces du centre-ville, enseignes locales et acteurs de la distribution.',
    },
    {
      icon: 'Briefcase',
      title: 'Services aux entreprises',
      description:
        'Cabinets de conseil, professions libérales et prestataires B2B des Mauges.',
    },
    {
      icon: 'Globe',
      title: 'Artisanat & PME',
      description:
        'Artisans, PME et entreprises familiales souhaitant développer leur visibilité digitale.',
    },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription:
    'Échangez avec notre équipe pour découvrir comment nous pouvons développer votre présence digitale à Cholet.',
  ctaButtonText: 'Contacter un expert',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO à Cholet',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. Nous identifions ce qui freine votre visibilité.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure du site, balisage et performance.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens de qualité pour renforcer votre autorité.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie de netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Contenus optimisés SEO et GEO qui positionnent votre expertise.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// CHIFFRES CLÉS
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    { value: '40', suffix: '%', label: 'Des recherches passent par des IA en 2025' },
    { value: '3', suffix: 'x', label: 'Plus de trafic grâce à la synergie SEO + GEO' },
    { value: '55', suffix: 'k', label: "D'habitants à Cholet" },
    { value: '95', suffix: '%', label: 'De clients satisfaits' },
  ],
};

// ============================================
// PROCESS
// ============================================
export const processData = {
  sectionId: 'processus',
  badge: 'Processus',
  title: 'Notre méthode de travail',
  subtitle: 'Une approche structurée en quatre étapes pour garantir des résultats concrets.',
  accentColor: 'rw-blue' as const,
  steps: [
    { number: 1, title: 'Audit initial', description: 'Analyse complète de votre situation et identification des opportunités.' },
    { number: 2, title: 'Définition de la stratégie', description: 'Élaboration d\'un plan d\'action sur mesure alliant SEO et GEO.' },
    { number: 3, title: 'Déploiement', description: 'Mise en œuvre des optimisations et création de contenus.' },
    { number: 4, title: 'Suivi et amélioration', description: 'Monitoring régulier et ajustements continus.' },
  ],
};

// ============================================
// COMPARAISON SEO vs GEO
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO traditionnel versus GEO',
  subtitle: 'Comprendre les différences pour mieux combiner ces deux leviers.',
  accentColor: 'rw-blue' as const,
  columns: ['Dimension', 'SEO classique', 'GEO (IA)'],
  rows: [
    ['Cible', 'Google, Bing', 'ChatGPT, Perplexity, SGE'],
    ['Format résultat', 'Liens bleus', 'Réponses synthétisées'],
    ['Contenu optimal', 'Mots-clés ciblés', 'Contexte et expertise'],
    ['Critères clés', 'Backlinks, technique', 'Autorité, citations'],
    ['Mesure', 'Rankings, CTR', 'Mentions, visibilité IA'],
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'L\'avènement des moteurs IA redéfinit les parcours de recherche. S\'y préparer aujourd\'hui, c\'est assurer la compétitivité de son entreprise.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Cholet',
  accentColor: 'rw-blue' as const,
  items: [
    { question: 'Quelle est la différence entre SEO et GEO ?', answer: 'Le SEO positionne votre site sur Google. Le GEO vous fait citer par les IA. Les deux sont complémentaires.' },
    { question: 'Pourquoi s\'intéresser au GEO à Cholet ?', answer: 'Les utilisateurs utilisent de plus en plus l\'IA pour leurs recherches. Être présent dans ces réponses permet d\'atteindre de nouveaux prospects.' },
    { question: 'Quels résultats peut-on espérer ?', answer: 'Les premiers effets SEO sont visibles sous 3 à 6 mois. Le GEO peut montrer des résultats plus rapides.' },
    { question: 'Comment mesurez-vous les performances ?', answer: 'Nous utilisons des outils spécialisés pour suivre vos positions et vos citations dans les réponses IA.' },
    { question: 'Travaillez-vous avec l\'industrie textile ?', answer: 'Absolument. Nous accompagnons les entreprises de tous secteurs présents à Cholet.' },
    { question: 'Proposez-vous des formations ?', answer: 'Oui, nous offrons des sessions de formation sur le GEO et le SEO.' },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Cholet ?',
  description: 'Demandez un audit gratuit pour découvrir comment le GEO et le SEO peuvent propulser votre entreprise.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
  ],
};
