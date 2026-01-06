/**
 * DATA FR - Agence GEO & SEO à Saumur
 * Page ville SANS présence physique
 */

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO à Saumur | Référencement IA & Traditionnel',
  description: 'Agence spécialisée en GEO et SEO à Saumur. Boostez votre visibilité sur les moteurs IA et traditionnels dans la capitale du cheval et des vins de Loire.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Saumur' },
  ],
  badge: 'saumur',
  title: 'Agence GEO & SEO à Saumur',
  description: 'Propulsez la visibilité en ligne de votre entreprise saumuroise avec notre expertise en référencement traditionnel et optimisation pour les moteurs IA. Des stratégies adaptées à la capitale équestre et viticole.',
  primaryCta: { text: 'Demander un audit gratuit', href: '/contact' },
  secondaryCta: { text: 'Découvrir nos services', href: '#services' },
};

// ============================================
// INTRO DATA
// ============================================
export const introData = {
  badge: 'Votre partenaire digital à Saumur',
  accentColor: 'rw-blue' as const,
  title: 'Une expertise SEO et GEO pour les entreprises saumuroises',
  paragraphs: [
    "Saumur, perle du Val de Loire classé UNESCO, conjugue patrimoine exceptionnel, tradition équestre et excellence viticole. Son château emblématique et ses caves troglodytes attirent des visiteurs du monde entier.",
    "Le GEO (Generative Engine Optimization) constitue la nouvelle dimension du référencement, ciblant les moteurs IA comme ChatGPT, Perplexity ou Google SGE. Associée au SEO traditionnel, cette expertise garantit une couverture optimale.",
    "Notre agence soutient les acteurs saumurois dans leur développement numérique, en valorisant le patrimoine local et en captant le flux touristique.",
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
  title: 'GEO & SEO à Saumur : l\'essentiel',
  subtitle: 'Les points clés de notre expertise pour le marché saumurois.',
  accentColor: 'rw-blue' as const,
  items: [
    { icon: 'Bot', title: 'GEO - IA', description: 'Présence dans les réponses générées par les assistants IA.' },
    { icon: 'Search', title: 'SEO classique', description: 'Positionnement solide sur Google et les moteurs traditionnels.' },
    { icon: 'Target', title: 'Focus tourisme', description: 'Stratégies pour capter les visiteurs du Val de Loire.' },
    { icon: 'TrendingUp', title: 'Impact mesurable', description: 'Augmentation du trafic qualifié et des opportunités.' },
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
  subtitle: 'Le GEO bouleverse les codes du référencement. Découvrez ses bénéfices pour votre entreprise saumuroise.',
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
  text: "Saumur est la capitale française du cheval avec le Cadre Noir, école d'équitation de renommée mondiale. Ses vins de Loire (Saumur-Champigny, Crémant) attirent les amateurs d'œnotourisme.",
  icon: 'TrendingUp' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  title: 'Une méthodologie adaptée à Saumur',
  subtitle: 'Notre démarche intègre les particularités du marché saumurois.',
  accentColor: 'rw-blue' as const,
  items: [
    { icon: 'Search', title: 'Diagnostic du marché local', description: 'Exploration de votre secteur à Saumur et identification des opportunités touristiques et viticoles.' },
    { icon: 'FileText', title: 'Production de contenus experts', description: 'Rédaction de contenus valorisant le patrimoine et l\'expertise locale.' },
    { icon: 'Settings', title: 'Optimisation technique', description: 'Performance, balisage Schema.org et expérience utilisateur.' },
    { icon: 'BarChart3', title: 'Monitoring et amélioration', description: 'Suivi des performances et ajustements stratégiques.' },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Les entreprises saumuroises que nous accompagnons',
  subtitle: 'Notre expertise s\'adresse aux acteurs du Val de Loire.',
  accentColor: 'rw-blue' as const,
  criteria: [
    { icon: 'Globe', title: 'Œnotourisme', description: 'Domaines viticoles, caves et prestataires œnotouristiques.' },
    { icon: 'Building2', title: 'Hôtellerie & Restauration', description: 'Hôtels, chambres d\'hôtes et restaurants gastronomiques.' },
    { icon: 'ShoppingBag', title: 'Commerce & Artisanat', description: 'Boutiques, artisans et commerces du centre-ville.' },
    { icon: 'Briefcase', title: 'Équestre & Loisirs', description: 'Centres équestres et prestataires de loisirs.' },
  ],
  ctaTitle: 'Votre activité correspond à ces profils ?',
  ctaDescription: 'Échangez avec notre équipe pour développer votre présence digitale à Saumur.',
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
  title: 'Nos services GEO & SEO à Saumur',
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
    { value: '3', suffix: 'x', label: 'Plus de trafic grâce à la synergie SEO + GEO' },
    { value: '27', suffix: 'k', label: "D'habitants à Saumur" },
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
  quote: 'L\'IA redéfinit les parcours de recherche. S\'y préparer aujourd\'hui, c\'est assurer la compétitivité de son entreprise.',
  author: 'Thomas Aubert',
  role: 'Directeur SEO & GEO, Rankwell',
};

// ============================================
// FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur le GEO & SEO à Saumur',
  accentColor: 'rw-blue' as const,
  items: [
    { question: 'Quelle est la différence entre SEO et GEO ?', answer: 'Le SEO positionne sur Google, le GEO vous fait citer par les IA. Les deux sont complémentaires.' },
    { question: 'Pourquoi le GEO est-il important pour l\'œnotourisme ?', answer: 'Les touristes planifient de plus en plus leurs séjours via l\'IA. Être cité permet de capter ces visiteurs.' },
    { question: 'Travaillez-vous avec les domaines viticoles ?', answer: 'Absolument. L\'œnotourisme est au cœur de l\'économie saumuroise.' },
    { question: 'Quels résultats peut-on espérer ?', answer: 'Les premiers effets SEO sont visibles sous 3 à 6 mois. Le GEO peut être plus rapide.' },
    { question: 'Comment mesurez-vous les performances ?', answer: 'Nous suivons vos positions Google et vos citations dans les réponses IA.' },
    { question: 'Proposez-vous des formations ?', answer: 'Oui, nous formons vos équipes au GEO et au SEO.' },
  ],
};

// ============================================
// CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à renforcer votre visibilité à Saumur ?',
  description: 'Demandez un audit gratuit pour découvrir comment propulser votre entreprise.',
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
    { label: 'Angers', href: '/agence-geo-seo/france/angers' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Tours', href: '/agence-geo-seo/france/tours' },
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubai', href: '/agence-geo-seo/emirats-arabes-unis/dubai' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
  ],
};
