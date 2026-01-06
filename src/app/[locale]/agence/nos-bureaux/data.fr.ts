/**
 * DATA - Page Nos Bureaux
 * Contenu textuel et données pour la page /agence/nos-bureaux
 */

import type { BreadcrumbItem } from '@/components/shared/services';
import type { OfficeItem } from '@/components/shared/global';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Nos bureaux Paris et Dubaï | Rankwell',
  description:
    'Rankwell est implantée à Paris et Dubaï. Deux bureaux, une même approche business centrix. Rencontrez-nous pour parler de votre projet SEO, GEO, SEA ou Data.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Agence', href: '/agence/qui-sommes-nous' },
    { label: 'Nos bureaux' },
  ],
  badge: 'nos bureaux',
  title: 'Paris et Dubaï',
  description:
    'Deux implantations pour accompagner nos clients en France, en Europe et au Moyen-Orient.',
  primaryCta: {
    text: 'Nous contacter',
    href: '/contact',
  },
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Accueil', href: '/' },
  { label: "L'agence", href: '/agence/qui-sommes-nous' },
  { label: 'Nos bureaux' },
];

// ============================================
// INTRO
// ============================================
export const introData = {
  text: "On croit aux vraies conversations. Celles où on dessine sur un tableau, où on challenge les idées, où on construit ensemble. Nos bureaux sont ouverts sur rendez-vous pour les clients et prospects qui veulent échanger en personne.",
};

// ============================================
// BUREAUX DÉTAILLÉS
// ============================================
export const officesDetailedData = {
  paris: {
    title: 'Paris',
    subtitle: 'Notre siège, dans le 17e arrondissement. C\'est ici que tout a commencé en 2017.',
    address: '8 place Boulnois',
    city: '75017 Paris, France',
    metro: 'Malesherbes (ligne 3)',
    hours: 'Lundi - Vendredi, 9h - 18h',
    phone: '01 82 28 30 00',
    email: 'contact@rankwell.fr',
    latitude: 48.8792,
    longitude: 2.2962,
    services: [
      'Accompagnement clients France et Europe',
      'Ateliers stratégiques et kick-offs',
      'Restitutions d\'audits',
      'Formation équipes internes',
    ],
  },
  dubai: {
    title: 'Dubaï',
    subtitle: 'Notre bureau pour les marchés MENA et l\'international. Ouvert en 2021.',
    address: 'Oud Metha Road 18th Street',
    city: 'Dubaï, Émirats Arabes Unis',
    hours: 'Dimanche - Jeudi, 9h - 18h',
    phone: '+971 55 529 4430',
    email: 'theophile@rankwell.com',
    latitude: 25.2285,
    longitude: 55.3117,
    services: [
      'Accompagnement marchés MENA',
      'Stratégies SEO multilingues (EN/FR/AR)',
      'Expansion internationale',
      'Coordination avec le bureau Paris',
    ],
  },
};

// ============================================
// OFFICES MAP (format simplifié pour le composant)
// ============================================
export const officesMapData: OfficeItem[] = [
  {
    id: 1,
    title: 'Rankwell Paris',
    description: 'Notre siège, dans le 17e arrondissement.',
    address: '8 place Boulnois, 75017 Paris',
    latitude: 48.8792,
    longitude: 2.2962,
  },
  {
    id: 2,
    title: 'Rankwell Dubaï',
    description: 'Notre bureau pour les marchés MENA.',
    address: 'Oud Metha Road 18th Street, Dubai',
    latitude: 25.2285,
    longitude: 55.3117,
  },
];

// ============================================
// EXPERTISES (lien vers les services)
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'nos expertises',
  title: 'Les mêmes expertises, des deux côtés',
  description:
    'Que vous travailliez avec Paris ou Dubaï, vous accédez à l\'ensemble de nos compétences.',
  items: [
    {
      id: 1,
      badge: 'geo & seo',
      title: 'GEO & SEO',
      description: 'Référencement Google et optimisation pour les moteurs IA.',
      href: '/agence-geo-seo',
      buttonText: 'En savoir plus',
      color: 'rw-blue' as const,
    },
    {
      id: 2,
      badge: 'sea',
      title: 'SEA',
      description: 'Google Ads piloté par le ROI.',
      href: '/agence-sea',
      buttonText: 'En savoir plus',
      color: 'rw-cyan' as const,
    },
    {
      id: 3,
      badge: 'data',
      title: 'Data',
      description: 'Tracking, Analytics, CRO.',
      href: '/agence-data',
      buttonText: 'En savoir plus',
      color: 'rw-purple' as const,
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Rencontrons-nous',
  description:
    'Paris ou Dubaï, en personne ou en visio. Le premier échange est sans engagement.',
  buttonText: 'Prendre rendez-vous',
};
