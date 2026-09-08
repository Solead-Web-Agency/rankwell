/**
 * ============================================
 * DATA - Landing page conversion SEA
 * ============================================
 *
 * URL: /agence-sea2 (FR uniquement, noindex)
 * Objectif: Génération de leads (formulaire en modale)
 * Source: version condensée de /agence-sea/data.fr.ts
 *
 * Page standalone : pas de header/footer du site, aucun lien sortant
 * hors mentions légales. Tous les CTA ouvrent la modale.
 */

import type { FAQServiceItem, ProcessStepItem, RecapItem } from '@/components/shared/services';
import type { KeyFigureItem } from '@/components/shared/global';
import type { LeadModalContent, LandingStickyBarContent } from '@/components/shared/landing';

const PHONE_HREF = 'tel:+33182283000';
const PHONE_LABEL = '01 82 28 30 00';
const CTA_TEXT = 'Demander mon audit offert';
const PHONE_REVEAL_TEXT = 'Afficher le numéro';

// ============================================
// SETTINGS
// ============================================
export const settings = {
  formId: 'agence-sea2',
  accentColor: 'rw-cyan' as const,
  exitIntent: true,
  exitIntentDelay: 8000,
};

// ============================================
// METADATA (noindex : la page est un doublon conversion de /agence-sea)
// ============================================
export const metadata = {
  title: 'Agence Google Ads orientée ROI - Audit offert | Rankwell',
  description:
    'Transformez votre budget Google Ads en clients. Audit complet de votre compte offert, sans engagement. Pilotage au ROI, prix transparent, résultats mesurables.',
};

// ============================================
// 1. HEADER
// ============================================
export const headerData = {
  ctaText: CTA_TEXT,
  phoneLabel: PHONE_LABEL,
  phoneHref: PHONE_HREF,
  phoneRevealText: PHONE_REVEAL_TEXT,
};

// ============================================
// 2. HERO
// ============================================
export const heroData = {
  badge: 'Agence Google Ads · Google Partner',
  title: 'Transformez votre budget Google Ads',
  titleHighlight: 'en clients',
  description:
    'Le SEA sans stratégie, c\'est brûler du budget. Nous pilotons vos campagnes au ROI, avec un prix transparent et des résultats mesurables dès le premier mois.',
  benefits: [
    'Audit complet de votre compte offert, sans engagement',
    'Pilotage au ROI : des conversions et du chiffre d\'affaires, pas des clics',
    'Reporting transparent : vous savez où va chaque euro et ce qu\'il rapporte',
  ],
  ctaText: CTA_TEXT,
  ctaSubtext: 'Réponse sous 24h ouvrées · Sans engagement',
  phoneLabel: PHONE_LABEL,
  phoneHref: PHONE_HREF,
  phoneRevealText: PHONE_REVEAL_TEXT,
  image: '/images/pages/agence-sea/hero.webp',
  imageAlt: 'Agence Google Ads Rankwell',
  socialProof: '350+ entreprises accompagnées',
};

// ============================================
// 3. POURQUOI RANKWELL (#pourquoi)
// ============================================
export const recapBoxData = {
  sectionId: 'pourquoi',
  badge: 'Pourquoi Rankwell',
  title: 'Une agence SEA qui pilote au résultat',
  subtitle: 'Business centrix : on ne maximise pas vos clics, on maximise votre retour sur investissement.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'Pilotage ROI',
      description: 'Chaque campagne est mesurée par son retour sur investissement, pas par son volume de clics.',
    },
    {
      id: 2,
      icon: 'Search',
      title: 'Ciblage précis',
      description: 'Mots-clés rentables, exclusions systématiques, audiences affinées en continu.',
    },
    {
      id: 3,
      icon: 'Eye',
      title: 'Transparence totale',
      description: 'Pas de boîte noire : vous savez où va votre budget et ce qu\'on fait pour l\'améliorer.',
    },
    {
      id: 4,
      icon: 'ChartBar',
      title: 'Tracking fiable',
      description: 'On vérifie vos conversions avant d\'optimiser. Sans données fiables, pas de bonnes décisions.',
    },
  ] as RecapItem[],
};

// ============================================
// 4. CHIFFRES CLÉS (#chiffres)
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  items: [
    { id: 1, icon: 'Users', number: 350, suffix: '+', label: 'Clients accompagnés' },
    { id: 2, icon: 'Calendar', number: 8, suffix: ' ans', label: 'D\'expertise Search' },
    { id: 3, icon: 'ThumbsUp', number: 99, suffix: '%', label: 'Clients satisfaits' },
    { id: 4, icon: 'Clock', number: 24, suffix: 'h', label: 'Délai de réponse' },
  ] as KeyFigureItem[],
};

// ============================================
// 5. MÉTHODE (#methode)
// ============================================
export const methodeData = {
  sectionId: 'methode',
  badge: 'Méthode',
  title: 'Comment pilotons-nous vos campagnes ?',
  subtitle: 'Quatre étapes, de la compréhension de votre business au reporting transparent.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Comprendre votre business',
      description: 'Vos marges, votre cycle de vente, vos objectifs. Le SEA doit être rentable, pas juste actif.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Structurer et cibler',
      description: 'Compte propre, campagnes organisées, mots-clés rentables, exclusions de ce qui ne convertit pas.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Optimiser sans relâche',
      description: 'Enchères, annonces, extensions, audiences. On teste, on mesure, on améliore chaque semaine.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Reporter avec transparence',
      description: 'Vous savez exactement où va votre budget, ce qu\'il rapporte et ce qu\'on fait pour l\'améliorer.',
    },
  ] as ProcessStepItem[],
};

// ============================================
// 6. OFFRE (#offre)
// ============================================
export const offerData = {
  sectionId: 'offre',
  badge: 'Audit offert',
  title: 'Un audit Google Ads complet, offert et sans engagement',
  subtitle:
    'Compte existant ou nouveau projet : nous analysons votre situation et vous remettons un plan d\'action priorisé. Vous repartez avec, que vous travailliez avec nous ou non.',
  includedTitle: 'Ce que vous recevez',
  included: [
    { icon: 'Search', text: 'Analyse de la structure du compte et des campagnes' },
    { icon: 'Target', text: 'Audit du ciblage mots-clés et des exclusions' },
    { icon: 'ChartBar', text: 'Vérification du tracking des conversions' },
    { icon: 'Coins', text: 'Estimation du budget gaspillé et des économies possibles' },
    { icon: 'TrendingUp', text: 'Recommandations priorisées pour améliorer le ROI' },
    { icon: 'Calendar', text: 'Restitution en visio de 30 minutes' },
  ],
  forWhoTitle: 'Pour qui ?',
  forWho: [
    'E-commerce qui veut rentabiliser chaque clic',
    'Lead generation à coût d\'acquisition maîtrisé',
    'SaaS et services B2B en quête de démos qualifiées',
    'Lancement ou saisonnalité avec besoin de volume rapide',
  ],
  ctaText: CTA_TEXT,
  ctaNote: 'Réponse sous 24h ouvrées. Aucun engagement, aucune carte bancaire.',
};

// ============================================
// 7. FAQ (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Vos questions avant de nous contacter',
  subtitle: 'Les réponses courtes aux questions qu\'on nous pose le plus souvent.',
  items: [
    {
      id: 'faq-1',
      question: 'Quel budget Google Ads faut-il prévoir ?',
      answer:
        'Il n\'y a pas de minimum imposé par Google. Pour obtenir des données exploitables et optimiser efficacement, nous recommandons généralement au moins 2 à 3 k€ de budget média par mois. En dessous, les volumes sont souvent insuffisants.',
    },
    {
      id: 'faq-2',
      question: 'Comment facturez-vous vos services ?',
      answer:
        'Frais de gestion fixes ou pourcentage du budget média, selon la taille du compte et vos préférences. Tout est transparent, sans commission cachée. Le montant est défini avec vous avant tout démarrage.',
    },
    {
      id: 'faq-3',
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        'Le trafic arrive dès le premier jour. L\'optimisation pour atteindre la rentabilité cible prend généralement 2 à 3 mois de tests et d\'ajustements.',
    },
    {
      id: 'faq-4',
      question: 'L\'audit est-il vraiment offert et sans engagement ?',
      answer:
        'Oui. Vous recevez une analyse et un plan d\'action priorisé, restitués en visio. Vous êtes libre de le mettre en œuvre seul, avec une autre agence ou avec nous.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 8. CTA FINAL
// ============================================
export const finalCtaData = {
  title: 'Rentabilisez votre',
  titleHighlight: 'investissement Ads',
  description:
    'Google Ads peut être un gouffre ou une machine à business. La différence, c\'est la stratégie, le tracking et l\'exécution rigoureuse. Première étape : votre audit offert.',
  buttonText: CTA_TEXT,
  checklistItems: [
    { id: '1', text: 'Audit offert' },
    { id: '2', text: 'Sans engagement' },
    { id: '3', text: 'Réponse sous 24h' },
  ],
};

// ============================================
// 9. MODALE FORMULAIRE
// ============================================
export const modalData: LeadModalContent = {
  title: 'Demandez votre audit Google Ads offert',
  subtitle: 'Laissez-nous vos coordonnées, un expert SEA vous recontacte sous 24h ouvrées.',
  reassurance: ['Sans engagement', 'Réponse sous 24h', 'Données confidentielles'],
  labels: {
    name: 'Nom complet',
    namePlaceholder: 'Marie Dupont',
    email: 'Email professionnel',
    emailPlaceholder: 'marie@entreprise.fr',
    phone: 'Téléphone',
    phonePlaceholder: '06 12 34 56 78',
    website: 'Site web',
    websitePlaceholder: 'www.entreprise.fr (optionnel)',
    budget: 'Budget Google Ads mensuel',
    budgetPlaceholder: 'Sélectionnez une fourchette (optionnel)',
    consent: 'J\'accepte d\'être recontacté par Rankwell au sujet de ma demande.',
    submit: 'Recevoir mon audit offert',
    sending: 'Envoi en cours...',
    close: 'Fermer',
  },
  budgetOptions: [
    'Pas encore de campagne',
    'Moins de 1 000 € / mois',
    '1 000 à 3 000 € / mois',
    '3 000 à 10 000 € / mois',
    'Plus de 10 000 € / mois',
  ],
  success: {
    title: 'Demande bien reçue !',
    text: 'Un expert SEA Rankwell vous recontacte sous 24h ouvrées pour planifier votre audit. Pensez à vérifier vos spams.',
    button: 'Fermer',
  },
  error: 'Une erreur est survenue. Réessayez ou appelez-nous au 01 82 28 30 00.',
};

// ============================================
// 10. BARRE STICKY MOBILE
// ============================================
export const stickyBarData: LandingStickyBarContent = {
  ctaText: 'Mon audit offert',
  phoneLabel: 'Appeler Rankwell',
  phoneHref: PHONE_HREF,
  showAfter: 500,
};

// ============================================
// 11. FOOTER
// ============================================
export const footerData = {
  // Pas de liens légaux : aucune sortie possible depuis la landing
  phoneRevealText: PHONE_REVEAL_TEXT,
};
