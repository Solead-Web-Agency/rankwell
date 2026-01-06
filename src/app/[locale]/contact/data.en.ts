/**
 * CONTACT - English Data
 * URL: /en/contact
 *
 * Contact page with form and information
 */

import type { BreadcrumbItem } from '@/components/shared/services';
import type { ContactFormLabels, OfficeContactInfo } from '@/components/shared/global';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Contact Rankwell | Paris & Dubai - SEO, SEA & Data Agency',
  description:
    'Need an SEO audit, Google Ads strategy or Data support? Contact our team in Paris or Dubai. Response within 24h.',
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
];

// ============================================
// PAGE HERO (breadcrumb + H1)
// ============================================
export const pageHeroData = {
  title: 'Contact us',
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactSectionData = {
  title: 'Let\'s discuss your Search challenges',
  subtitle:
    'Whether you have a specific project or just questions, we take the time to discuss. First exchange with no commitment.',
  accentColor: 'rw-blue' as const,
  parisOffice: {
    title: 'Paris',
    items: [
      {
        id: 1,
        icon: 'MapPin',
        title: 'Office',
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
        title: 'Phone',
        content: '+33 1 82 28 30 00',
        link: 'tel:+33182283000',
      },
    ],
  } as OfficeContactInfo,
  dubaiOffice: {
    title: 'Dubai',
    items: [
      {
        id: 1,
        icon: 'MapPin',
        title: 'Office',
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
        title: 'Phone',
        content: '+971 4 123 4567',
        link: 'tel:+97141234567',
      },
    ],
  } as OfficeContactInfo,
  formLabels: {
    name: 'Your name',
    namePlaceholder: 'John Smith',
    company: 'Company',
    companyPlaceholder: 'Your company name',
    email: 'Email',
    emailPlaceholder: 'john@company.com',
    phone: 'Phone',
    phonePlaceholder: '+1 234 567 890',
    subject: 'Subject',
    subjectPlaceholder: 'Ex: SEO audit request',
    message: 'Your message',
    messagePlaceholder: 'Describe your project or ask us your questions...',
    terms: 'I accept the',
    termsLink: 'terms and conditions',
    submit: 'Send message',
    sending: 'Sending...',
    success: 'Message sent! We\'ll respond within 24h.',
    error: 'An error occurred. Please try again.',
  } as ContactFormLabels,
};

// ============================================
// MAP SECTION
// ============================================
export const mapSectionData = {
  title: 'Our offices',
  paris: {
    title: 'Paris',
    address: '8 place Boulnois, 75017 Paris',
    latitude: 48.8792,
    longitude: 2.2962,
  },
  dubai: {
    title: 'Dubai',
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
  title: 'Frequently asked questions',
  subtitle: 'Before contacting us, you might find your answer here.',
  accentColor: 'rw-cyan' as const,
  items: [
    {
      id: 'faq-1',
      question: 'What is the response time?',
      answer:
        'We respond within 24 business hours. For urgent requests, call us directly.',
    },
    {
      id: 'faq-2',
      question: 'Do you offer a free initial consultation?',
      answer:
        'Yes, the first discovery call (30 min) is with no commitment. We discuss your context and objectives to see if we can help.',
    },
    {
      id: 'faq-3',
      question: 'Do you work with companies of all sizes?',
      answer:
        'We mainly support SMEs, mid-caps and large accounts. We do not provide one-off services or hourly consulting.',
    },
    {
      id: 'faq-4',
      question: 'Can we meet in person?',
      answer:
        'Yes, our Paris and Dubai offices are open by appointment. We prefer face-to-face meetings for kick-offs and strategic workshops.',
    },
  ],
};

// ============================================
// CTA
// ============================================
export const ctaData = {
  title: 'Prefer a call?',
  description:
    'If you prefer to talk live, book a slot directly with our team.',
  buttonText: 'Book a call',
  buttonHref: 'https://calendly.com/rankwell',
  accentColor: 'rw-purple' as const,
  checklistItems: [
    { id: '1', text: '30 min, no commitment' },
    { id: '2', text: 'With a Search expert' },
    { id: '3', text: 'Personalized advice' },
  ],
};
