/**
 * CONTACT - Données FR
 * URL: /contact
 *
 * Page de contact avec formulaire et informations
 */

import type { BreadcrumbItem } from '@/components/shared/services';
import type { ContactFormLabels, OfficeContactInfo } from '@/components/shared/global';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Contactez Rankwell | Paris & Dubaï - Agence SEO, SEA & Data',
  description:
    'Besoin d\'un audit SEO, d\'une stratégie Google Ads ou d\'un accompagnement Data ? Contactez notre équipe à Paris ou Dubaï. Réponse sous 24h.',
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Contact' },
];

// ============================================
// PAGE HERO (breadcrumb + H1)
// ============================================
export const pageHeroData = {
  title: 'Contactez-nous',
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactSectionData = {
  title: 'Échangeons sur vos enjeux Search',
  subtitle:
    'Que vous ayez un projet précis ou simplement des questions, on prend le temps d\'en discuter. Premier échange sans engagement.',
  accentColor: 'rw-blue' as const,
  parisOffice: {
    title: 'Paris',
    items: [
      {
        id: 1,
        icon: 'MapPin',
        title: 'Bureau',
        content: '8 place Boulnois, 75017 Paris',
      },
      {
        id: 2,
        icon: 'Mail',
        title: 'Email',
        content: 'contact@rankwell.fr',
        link: 'mailto:contact@rankwell.fr',
      },
      {
        id: 3,
        icon: 'Phone',
        title: 'Téléphone',
        content: '01 82 28 30 00',
        link: 'tel:+33182283000',
      },
    ],
  } as OfficeContactInfo,
  dubaiOffice: {
    title: 'Dubaï',
    items: [
      {
        id: 1,
        icon: 'MapPin',
        title: 'Bureau',
        content: 'Oud Metha Road 18th Street, Dubai',
      },
      {
        id: 2,
        icon: 'Mail',
        title: 'Email',
        content: 'theophile@rankwell.com',
        link: 'mailto:theophile@rankwell.com',
      },
      {
        id: 3,
        icon: 'Phone',
        title: 'Téléphone',
        content: '+971 4 123 4567',
        link: 'tel:+97141234567',
      },
    ],
  } as OfficeContactInfo,
  formLabels: {
    name: 'Votre nom',
    namePlaceholder: 'Jean Dupont',
    company: 'Entreprise',
    companyPlaceholder: 'Nom de votre entreprise',
    email: 'Email',
    emailPlaceholder: 'jean@entreprise.com',
    phone: 'Téléphone',
    phonePlaceholder: '06 12 34 56 78',
    subject: 'Sujet',
    subjectPlaceholder: 'Ex: Demande d\'audit SEO',
    message: 'Votre message',
    messagePlaceholder: 'Décrivez votre projet ou posez-nous vos questions...',
    terms: 'J\'accepte les',
    termsLink: 'conditions générales',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours...',
    success: 'Message envoyé ! Nous vous répondons sous 24h.',
    error: 'Une erreur est survenue. Veuillez réessayer.',
  } as ContactFormLabels,
};

// ============================================
// MAP SECTION
// ============================================
export const mapSectionData = {
  title: 'Nos bureaux',
  paris: {
    title: 'Paris',
    address: '8 place Boulnois, 75017 Paris',
    latitude: 48.8792,
    longitude: 2.2962,
  },
  dubai: {
    title: 'Dubaï',
    address: 'Oud Metha Road 18th Street, Dubai',
    latitude: 25.2285,
    longitude: 55.3117,
  },
};

// ============================================
// FAQ CONTACT
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes',
  subtitle: 'Avant de nous contacter, peut-être trouverez-vous votre réponse ici.',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 'faq-1',
      question: 'Quel est le délai de réponse ?',
      answer:
        'Nous répondons sous 24h ouvrées. Pour les demandes urgentes, appelez-nous directement.',
    },
    {
      id: 'faq-2',
      question: 'Proposez-vous un premier échange gratuit ?',
      answer:
        'Oui, le premier appel de découverte (30 min) est sans engagement. On échange sur votre contexte et vos objectifs pour voir si on peut vous aider.',
    },
    {
      id: 'faq-3',
      question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
      answer:
        'Nous accompagnons principalement des PME, ETI et grands comptes. Nous ne faisons pas de prestation ponctuelle ou de conseil à l\'heure.',
    },
    {
      id: 'faq-4',
      question: 'Peut-on vous rencontrer physiquement ?',
      answer:
        'Oui, nos bureaux de Paris et Dubaï sont ouverts sur rendez-vous. On privilégie les rencontres physiques pour les kick-offs et les ateliers stratégiques.',
    },
  ],
};

// ============================================
// CTA
// ============================================
export const ctaData = {
  title: 'Préférez un appel ?',
  description:
    'Si vous préférez échanger de vive voix, réservez directement un créneau avec notre équipe.',
  buttonText: 'Réserver un appel',
  buttonHref: 'https://calendly.com/rankwell',
  accentColor: 'rw-purple' as const,
  checklistItems: [
    { id: '1', text: '30 min sans engagement' },
    { id: '2', text: 'Avec un expert Search' },
    { id: '3', text: 'Conseils personnalisés' },
  ],
};
