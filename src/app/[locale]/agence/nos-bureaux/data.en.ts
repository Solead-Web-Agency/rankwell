/**
 * DATA - Our Offices Page
 * Text content and data for /en/agency/our-offices
 */

import type { BreadcrumbItem } from '@/components/shared/services';
import type { OfficeItem } from '@/components/shared/global';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Our Paris and Dubai Offices | Rankwell',
  description:
    'Rankwell has offices in Paris and Dubai. Two locations, one business centrix approach. Meet us to discuss your SEO, GEO, SEA or Data project.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'Agency', href: '/en/agency/about-us' },
    { label: 'Our offices' },
  ],
  badge: 'our offices',
  title: 'Paris and Dubai',
  description:
    'Two locations to support our clients in France, Europe and the Middle East.',
  primaryCta: {
    text: 'Contact us',
    href: '/en/contact',
  },
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/en' },
  { label: 'Agency', href: '/en/agency/about-us' },
  { label: 'Our offices' },
];

// ============================================
// INTRO
// ============================================
export const introData = {
  text: "We believe in real conversations. The ones where we draw on a whiteboard, challenge ideas, build together. Our offices are open by appointment for clients and prospects who want to exchange in person.",
};

// ============================================
// BUREAUX DÉTAILLÉS
// ============================================
export const officesDetailedData = {
  paris: {
    title: 'Paris',
    subtitle: 'Our headquarters in the 17th arrondissement. This is where it all started in 2017.',
    address: '8 place Boulnois',
    city: '75017 Paris, France',
    metro: 'Malesherbes (line 3)',
    hours: 'Monday - Friday, 9am - 6pm',
    phone: '01 82 28 30 00',
    email: 'contact@rankwell.fr',
    latitude: 48.8792,
    longitude: 2.2962,
    services: [
      'Support for clients in France and Europe',
      'Strategic workshops and kick-offs',
      'Audit presentations',
      'Internal team training',
    ],
  },
  dubai: {
    title: 'Dubai',
    subtitle: 'Our office for MENA markets and international. Opened in 2021.',
    address: 'Oud Metha Road 18th Street',
    city: 'Dubai, United Arab Emirates',
    hours: 'Sunday - Thursday, 9am - 6pm',
    phone: '+971 55 529 4430',
    email: 'theophile@rankwell.com',
    latitude: 25.2285,
    longitude: 55.3117,
    services: [
      'MENA markets support',
      'Multilingual SEO strategies (EN/FR/AR)',
      'International expansion',
      'Coordination with Paris office',
    ],
  },
};

// ============================================
// OFFICES MAP (simplified format for component)
// ============================================
export const officesMapData: OfficeItem[] = [
  {
    id: 1,
    title: 'Rankwell Paris',
    description: 'Our headquarters in the 17th arrondissement.',
    address: '8 place Boulnois, 75017 Paris',
    latitude: 48.8792,
    longitude: 2.2962,
  },
  {
    id: 2,
    title: 'Rankwell Dubai',
    description: 'Our office for MENA markets.',
    address: 'Oud Metha Road 18th Street, Dubai',
    latitude: 25.2285,
    longitude: 55.3117,
  },
];

// ============================================
// EXPERTISES (link to services)
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'our expertise',
  title: 'The same expertise, on both sides',
  description:
    'Whether you work with Paris or Dubai, you access all our capabilities.',
  items: [
    {
      id: 1,
      badge: 'geo & seo',
      title: 'GEO & SEO',
      description: 'Google search and optimization for AI engines.',
      href: '/en/geo-seo-agency',
      buttonText: 'Learn more',
      color: 'rw-blue' as const,
    },
    {
      id: 2,
      badge: 'sea',
      title: 'SEA',
      description: 'ROI-driven Google Ads.',
      href: '/en/sea-agency',
      buttonText: 'Learn more',
      color: 'rw-cyan' as const,
    },
    {
      id: 3,
      badge: 'data',
      title: 'Data',
      description: 'Tracking, Analytics, CRO.',
      href: '/en/data-agency',
      buttonText: 'Learn more',
      color: 'rw-purple' as const,
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: "Let's meet",
  description:
    'Paris or Dubai, in person or by video call. The first exchange is no-commitment.',
  buttonText: 'Book a meeting',
};
