/**
 * DATA FR - Agence GEO & SEO à La Baule
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à La Baule | Référencement IA & Traditionnel',
  description: 'Agence spécialisée en GEO et SEO à La Baule. Boostez votre visibilité sur les moteurs IA et traditionnels dans la plus belle baie d\'Europe.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'La Baule' },
  ],
  badge: 'la-baule',
  title: 'Agence GEO & SEO à La Baule',
  description: 'Propulsez la visibilité en ligne de votre entreprise bauloise avec notre expertise en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées à la station balnéaire premium de la côte atlantique.',
  primaryCta: { text: 'Demander un audit gratuit', href: '/contact' },
  secondaryCta: { text: 'Découvrir nos services', href: '#services' },
};

// ============================================
// INTRO DATA
// ============================================
export const introData = {
  badge: 'Votre partenaire digital à La Baule',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises bauloises',
  paragraphs: [
    "La Baule, station balnéaire de renommée internationale, offre 9 km de plage de sable fin et une clientèle premium toute l\'année. Entre tourisme haut de gamme et résidences secondaires, la ville attire une clientèle exigeante.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs IA comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette expertise garantit une couverture optimale.",
    "Notre agence soutient les acteurs baulois dans leur développement numérique, en élaborant des stratégies qui captent le flux touristique haut de gamme.",
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
  title: 'GEO & SEO à La Baule : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché baulois.',
  accentColor: 'rw-blue' as const,
  items: [
    { icon: 'Bot', title: 'GEO - IA', description: 'Présence dans les réponses générées par les assistants IA.' },
    { icon: 'Search', title: 'SEO classique', description: 'Positionnement solide sur Google et les moteurs traditionnels.' },
    { icon: 'Target', title: 'Focus premium', description: 'Stratégies pour capter la clientèle haut de gamme.' },
    { icon: 'TrendingUp', title: 'Impact mesurable', description: 'Augmentation du trafic qualifié et des réservations.' },
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
  subtitle: 'Le GEO bouleverse les codes du référencement. Découvrez ses bénéfices pour votre entreprise bauloise.',
  accentColor: 'rw-blue' as const,
  items: [
    { icon: 'Bot', title: 'Architecture des moteurs IA', description: 'ChatGPT, Perplexity et SGE agrègent des données pour formuler des réponses complètes.' },
    { icon: 'FileText', title: 'Contenus structurés', description: 'Les IA privilégient les contenus bien organisés et experts.' },
    { icon: 'Award', title: 'Marqueurs de confiance', description: 'Citations et backlinks consolident votre crédibilité.' },
    { icon: 'ChartLine', title: 'Suivi de performance', description: 'Monitoring de votre présence dans les réponses IA.' },
  ],
};

// ============================================
// CALLOUT DATA
// ============================================
export const calloutData = {
  label: 'Le saviez-vous ?',
  text: "La Baule possède la plus belle baie d'Europe avec ses 9 km de plage. Station balnéaire premium depuis le XIXe siècle, elle attire une clientèle internationale et de nombreux événements prestigieux.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à La Baule',
  subtitle: 'Notre démarche intègre les codes du marché premium baulois.',
  accentColor: 'rw-blue' as const,
  items: [
    { icon: 'Search', title: 'Diagnostic du marché local', description: 'Exploration du marché premium baulois et identification des opportunités touristiques haut de gamme.' },
    { icon: 'FileText', title: 'Production de contenus experts', description: 'Rédaction de contenus premium valorisant l\'excellence bauloise.' },
    { icon: 'Settings', title: 'Optimisation technique', description: 'Performance, balisage Schema.org et expérience utilisateur premium.' },
    { icon: 'BarChart3', title: 'Monitoring et amélioration', description: 'Suivi des performances et ajustements stratégiques.' },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Les entreprises bauloises que nous accompagnons',
  subtitle: 'Notre expertise s\'adresse aux acteurs du marché premium baulois.',
  accentColor: 'rw-blue' as const,
  criteria: [
    { icon: 'Building2', title: 'Hôtellerie de luxe', description: 'Hôtels, palaces et établissements de thalassothérapie.' },
    { icon: 'Globe', title: 'Immobilier premium', description: 'Agences immobilières et promoteurs sur le marché des résidences secondaires.' },
    { icon: 'ShoppingBag', title: 'Commerce & Restauration', description: 'Boutiques haut de gamme et restaurants gastronomiques.' },
    { icon: 'Briefcase', title: 'Services aux particuliers', description: 'Prestataires de services premium et conciergeries.' },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription: 'Échangez avec notre équipe pour développer votre présence digitale à La Baule.',
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
  title: 'Nos services GEO & SEO à La Baule',
  subtitle: 'Quatre services complémentaires pour vos besoins en référencement.',
  items: [
    { id: 1, title: 'Audit SEO complet', description: 'Analyse technique, sémantique et concurrentielle.', href: '/agence-geo-seo/audit', buttonText: 'En savoir plus', imageAlt: 'Audit SEO complet' },
    { id: 2, title: 'SEO sémantique & technique', description: 'Optimisation on-site et performance.', href: '/agence-geo-seo/technique-semantique', buttonText: 'En savoir plus', imageAlt: 'SEO sémantique' },
    { id: 3, title: 'Netlinking', description: 'Acquisition de liens de qualité.', href: '/agence-geo-seo/netlinking', buttonText: 'En savoir plus', imageAlt: 'Netlinking' },
    { id: 4, title: 'Création de contenu', description: 'Contenus optimisés SEO et GEO.', href: '/agence-geo-seo/creation-contenu', buttonText: 'En savoir plus', imageAlt: 'Création de contenu' },
  ],
};

// ============================================
// CHIFFRES DATA
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    { value: '40', suffix: '%', label: 'Des recherches passent par des IA en 2025' },
    { value: '9', suffix: 'km', label: 'De plage de sable fin' },
    { value: '16', suffix: 'k', label: "D'habitants permanents" },
    { value: '95', suffix: '%', label: 'De clients satisfaits' },
  ],
};

// ============================================
// PROCESS DATA
// ============================================
export const processData = {
  sectionId: 'processus',
  badge: 'Processus',
  title: 'Notre méthode de travail',
  subtitle: 'Une approche structurée pour des résultats concrets.',
  accentColor: 'rw-blue' as const,
  steps: [
    { number: 1, title: 'Audit initial', description: 'Analyse de votre situation et des opportunités.' },
    { number: 2, title: 'Stratégie personnalisée', description: 'Plan d\'action SEO et GEO sur mesure.' },
    { number: 3, title: 'Déploiement', description: 'Mise en œuvre des optimisations.' },
    { number: 4, title: 'Suivi et amélioration', description: 'Monitoring et ajustements continus.' },
  ],
};

// ============================================
// COMPARAISON DATA
// ============================================
export const comparaisonData = {
  sectionId: 'comparaison',
  badge: 'Comparatif',
  title: 'SEO traditionnel versus GEO',
  subtitle: 'Comprendre les différences pour mieux combiner ces leviers.',
  accentColor: 'rw-blue' as const,
  columns: ['Dimension', 'SEO classique', 'GEO (IA)'],
  rows: [
    ['Cible', 'Google, Bing', 'ChatGPT, Perplexity, SGE'],
    ['Format résultat', 'Liens bleus', 'Réponses synthétisées'],
    ['Contenu optimal', 'Mots-clés ciblés', 'Contexte et expertise'],
    ['Mesure', 'Rankings, CTR', 'Mentions, visibilité IA'],
  ],
};

// ============================================
// QUOTE DATA
// ============================================
export const quoteData = {
  quote: 'La clientèle premium de La Baule prépare ses séjours via l\'IA. Être cité dans ces réponses devient un avantage concurrentiel majeur.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à La Baule',
  accentColor: 'rw-blue' as const,
  items: [
    { question: 'Quelle est la différence entre SEO et GEO ?', answer: 'Le SEO positionne sur Google, le GEO vous fait citer par les IA. Les deux sont complémentaires.' },
    { question: 'Pourquoi le GEO est-il crucial pour le tourisme premium ?', answer: 'Les voyageurs haut de gamme planifient de plus en plus via l\'IA. Être recommandé par ChatGPT est un avantage concurrentiel.' },
    { question: 'Travaillez-vous avec l\'hôtellerie de luxe ?', answer: 'Absolument. Nous accompagnons hôtels, palaces et établissements de thalassothérapie.' },
    { question: 'Quels résultats peut-on espérer ?', answer: 'Les premiers effets SEO sont visibles sous 3 à 6 mois. Le GEO peut être plus rapide.' },
    { question: 'Comment mesurez-vous les performances ?', answer: 'Nous suivons vos positions Google et vos citations dans les réponses IA.' },
    { question: 'Proposez-vous des formations ?', answer: 'Oui, nous formons vos équipes au GEO et au SEO.' },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à briller à La Baule ?',
  description: 'Demandez un audit gratuit pour découvrir comment propulser votre entreprise bauloise.',
  buttonText: 'Obtenir mon audit gratuit',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES DATA
// ============================================
export const autresVillesData = {
  title: 'Découvrez nos services GEO & SEO dans d\'autres villes',
  cities: [
    { label: 'Pays de la Loire', href: '/agence-geo-seo/france/pays-de-la-loire' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Saint-Malo', href: '/agence-geo-seo/france/saint-malo' },
    { label: 'Deauville', href: '/agence-geo-seo/france/deauville' },
    { label: 'Biarritz', href: '/agence-geo-seo/france/biarritz' },
  ],
};
