/**
 * FORMATIONS - Données FR
 * URL: /formations
 *
 * Mots-clés ciblés :
 * - formation seo (800) - principal
 * - formation google ads (1500)
 * - formation ga4 (500)
 * - formation référencement (300)
 *
 * Alternance couleurs : blue → cyan → purple → blue → cyan → purple
 */

import type { BreadcrumbItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Formations SEO, Google Ads et GA4 : Passez Pro - Rankwell',
  description:
    'Votre équipe maîtrise le SEO et Google Ads en 4 jours ? Formations 100% appliquées à VOTRE site. Zéro théorie vide, que du concret. Certifié Qualiopi, finançable OPCO.',
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Formations' },
];

// ============================================
// HERO (couleur: blue)
// ============================================
export const heroData = {
  title: 'Formez vos équipes au Search',
  description:
    'Des formations en SEO, Google Ads et GA4 100% appliquées à votre cas. Pas de théorie générique : on travaille sur votre site, vos données, vos enjeux.',
  secondaryDescription:
    'Certifié Qualiopi. Finançable par votre OPCO. Sur-mesure.',
  ctaText: 'Demander un programme',
  ctaHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// USP - Points forts (couleur: cyan)
// ============================================
export const uspData = {
  sectionId: 'pourquoi-nous',
  badge: 'Notre approche',
  title: 'Pourquoi nos formations font la différence',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 1,
      title: 'Appliqué à votre cas',
      desc: "On ne forme pas sur des exemples génériques. Chaque exercice, chaque audit, chaque stratégie est construit sur votre site et vos données réelles.",
    },
    {
      id: 2,
      title: 'Experts praticiens',
      desc: "Nos formateurs sont les mêmes consultants qui accompagnent nos clients au quotidien. De l'expérience terrain, pas de la théorie académique.",
    },
    {
      id: 3,
      title: 'Opérationnel immédiat',
      desc: "À la fin de la formation, vous repartez avec des livrables concrets : audits, plans d'action, templates. Prêts à être déployés.",
    },
  ],
};

// ============================================
// FORMATIONS - Catalogue (couleur: purple)
// Format: PricingCards
// ============================================
export const formationsData = {
  sectionId: 'nos-formations',
  badge: 'Nos formations',
  title: 'Trois programmes pour monter en compétence',
  subtitle:
    'Formation au référencement naturel, à la publicité Search et à la web analytics. Adaptables à tous les niveaux.',
  accentColor: 'rw-purple' as const,
  items: [
    {
      id: 'seo-geo',
      title: 'Formation SEO & GEO',
      tagline: 'Maîtrisez le référencement naturel',
      description:
        "Comprendre les mécaniques du SEO et du GEO pour optimiser votre visibilité sur Google et les moteurs IA.",
      price: '1 900 €',
      priceNote: 'HT/pers.',
      details: {
        duration: '4 jours (28h)',
        format: 'Présentiel ou distanciel',
      },
      buttonText: 'Demander un devis',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Auditer un site et identifier les priorités', enabled: true },
        { label: 'Construire une stratégie sémantique efficace', enabled: true },
        { label: 'Optimiser pour Google et les moteurs IA', enabled: true },
        { label: 'Mesurer et piloter les performances SEO', enabled: true },
        { label: 'Briefer une équipe technique ou des prestataires', enabled: true },
      ],
    },
    {
      id: 'google-ads-ga4',
      title: 'Formation Google Ads & GA4',
      tagline: 'Publicité Search et Analytics',
      description:
        "Maîtrisez Google Ads et GA4 pour maximiser votre ROI publicitaire et mesurer précisément vos résultats.",
      price: '1 900 €',
      priceNote: 'HT/pers.',
      details: {
        duration: '3 jours (21h)',
        format: 'Présentiel ou distanciel',
      },
      buttonText: 'Demander un devis',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Structurer un compte Google Ads efficacement', enabled: true },
        { label: 'Créer des campagnes Search, Shopping et PMax', enabled: true },
        { label: 'Configurer GA4 et ses conversions', enabled: true },
        { label: 'Optimiser les enchères et les audiences', enabled: true },
        { label: 'Analyser les performances et le ROI', enabled: true },
      ],
    },
    {
      id: 'contenu',
      title: 'Création de contenu SEO',
      tagline: 'Écrire pour Google et les IA',
      description:
        "Produire des contenus qui rankent et qui convertissent, optimisés pour le SEO et les IA génératives.",
      price: '1 400 €',
      priceNote: 'HT/pers.',
      details: {
        duration: '2 jours (14h)',
        format: 'Présentiel ou distanciel',
      },
      buttonText: 'Demander un devis',
      buttonHref: '/contact',
      featured: false,
      features: [
        { label: 'Identifier les intentions de recherche', enabled: true },
        { label: 'Structurer un contenu pour le SEO et le GEO', enabled: true },
        { label: 'Rédiger des contenus citation-ready pour les IA', enabled: true },
        { label: 'Optimiser les contenus existants', enabled: true },
        { label: 'Mesurer la performance éditoriale', enabled: true },
      ],
    },
  ],
};

// ============================================
// APPROCHE SUR-MESURE - Process (couleur: blue)
// ============================================
export const approachData = {
  sectionId: 'approche',
  badge: 'Sur-mesure',
  title: 'Une formation 100% personnalisée',
  subtitle:
    'Oubliez les formations génériques. Chez nous, tout est construit autour de votre réalité.',
  accentColor: 'rw-blue' as const,
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Cadrage de vos enjeux',
      description:
        "On échange sur votre contexte, vos objectifs, le niveau de vos équipes. On adapte le programme.",
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Préparation sur votre cas',
      description:
        'Avant la formation, on analyse votre site, vos données, vos concurrents. Tous les exercices seront basés dessus.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Formation appliquée',
      description:
        'Théorie minimale, pratique maximale. On audite votre site ensemble, on construit votre stratégie.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Livrables opérationnels',
      description:
        "Vous repartez avec un audit, un plan d'action, des templates. Pas juste des slides.",
    },
  ],
};

// ============================================
// FINANCEMENT (couleur: cyan)
// ============================================
export const financementData = {
  sectionId: 'financement',
  badge: 'Financement',
  title: 'Financement simplifié',
  subtitle:
    "Nos formations sont certifiées Qualiopi et éligibles au financement par votre OPCO. On vous accompagne dans les démarches.",
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 1,
      title: 'OPCO',
      desc: "Financement jusqu'à 100% par l'OPCO de votre entreprise. Atlas, Opcommerce, Afdas... On connaît les processus.",
    },
    {
      id: 2,
      title: 'France Travail',
      desc: "Pour les demandeurs d'emploi, financement possible via France Travail (ex Pôle Emploi).",
    },
    {
      id: 3,
      title: 'Plan de formation',
      desc: 'Intégration au plan de développement des compétences de votre entreprise.',
    },
  ],
};

// ============================================
// POUR QUI (couleur: purple)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: "À qui s'adressent nos formations ?",
  subtitle:
    "Que vous soyez marketeur, technique ou dirigeant, nos programmes s'adaptent à votre profil.",
  accentColor: 'rw-purple' as const,
  criteria: [
    {
      label: 'Équipes marketing',
      description:
        'Responsables marketing, chefs de projet digital, content managers. Montez en compétence pour piloter vos prestataires ou internaliser.',
    },
    {
      label: 'Équipes techniques',
      description:
        'Développeurs, intégrateurs, CTO. Comprenez les enjeux SEO pour les intégrer dès la conception.',
    },
    {
      label: 'Dirigeants et entrepreneurs',
      description:
        'Comprenez les leviers Search pour prendre les bonnes décisions stratégiques.',
    },
  ],
  ctaTitle: "Besoin d'un programme adapté ?",
  ctaDescription:
    'On peut mixer les modules, ajuster le niveau, intégrer vos problématiques spécifiques. Chaque formation est unique.',
  ctaButtonText: 'Discuter de votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// MODALITÉS - Format StickyFeatures (couleur: blue)
// ============================================
export const modalitesData = {
  sectionId: 'modalites',
  badge: 'Modalités',
  title: 'Modalités pratiques',
  subtitle: 'Tout ce que vous devez savoir avant de vous lancer.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      title: 'Format flexible',
      description: 'Présentiel (dans vos locaux ou à Paris), distanciel (sessions de 3h30 max), ou hybride selon vos contraintes.',
      icon: 'Monitor',
    },
    {
      id: 2,
      title: 'Intra-entreprise',
      description: 'Formation dédiée à votre équipe, de 2 à 8 personnes par session. Délai : 3 à 4 semaines après validation du financement.',
      icon: 'Users',
    },
    {
      id: 3,
      title: 'Livrables inclus',
      description: 'Support personnalisé, audit de votre site, templates et outils réutilisables, attestation de formation.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Suivi post-formation',
      description: "Accès email au formateur pendant 1 mois. Session de Q&A à distance (1h) incluse.",
      icon: 'Headphones',
    },
  ],
};

// ============================================
// FAQ - Format FAQService (couleur: cyan)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur nos formations.',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 'faq-1',
      question: 'Comment se passe le financement OPCO ?',
      answer:
        "On vous accompagne dans les démarches. Concrètement : vous nous transmettez les infos de votre OPCO, on prépare le dossier (programme, convention, devis), vous le soumettez. Délai moyen : 3-4 semaines pour l'accord.",
    },
    {
      id: 'faq-2',
      question: 'Les formations sont-elles adaptées aux débutants ?',
      answer:
        "Oui, on adapte le niveau au profil des participants. Lors du cadrage, on évalue le niveau de chacun pour ajuster le contenu. On recommande des groupes relativement homogènes pour une meilleure dynamique.",
    },
    {
      id: 'faq-3',
      question: 'Peut-on personnaliser le programme ?',
      answer:
        "C'est même le principe. Le programme de base est un cadre qu'on adapte à vos enjeux spécifiques. Refonte en cours, secteur réglementé, international... on intègre vos problématiques.",
    },
    {
      id: 'faq-4',
      question: 'Combien de personnes peuvent participer ?',
      answer:
        "De 2 à 8 personnes par session. Au-delà, la qualité des échanges diminue. Pour des groupes plus importants, on peut organiser plusieurs sessions.",
    },
    {
      id: 'faq-5',
      question: 'Quelle est la différence avec une formation en ligne ?',
      answer:
        "Les formations en ligne enseignent la théorie générale. Nos formations sont 100% appliquées à votre cas : on travaille sur votre site, vos données, vos concurrents. Vous repartez avec des livrables exploitables.",
    },
    {
      id: 'faq-6',
      question: 'Proposez-vous un accompagnement post-formation ?',
      answer:
        "Une session de Q&A d'1h est incluse dans le mois suivant la formation. Au-delà, on peut proposer un accompagnement sur mesure : audit complémentaire, coaching, prestation récurrente.",
    },
  ],
};

// ============================================
// CTA FINAL (couleur: purple)
// ============================================
export const ctaData = {
  title: 'Prêt à former vos équipes au Search ?',
  description:
    "On échange sur vos besoins, on vous propose un programme adapté et on vous accompagne pour le financement.",
  secondaryDescription:
    "Premier appel sans engagement. On vous envoie ensuite un programme détaillé et un devis.",
  buttonText: 'Discuter de votre projet de formation',
  buttonHref: '/contact',
  accentColor: 'rw-purple' as const,
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Programme sur-mesure' },
    { id: '3', text: 'Certifié Qualiopi' },
  ],
};
