// Navigation Rankwell - Menu principal + Maillage interne
// Utilise le système de routes centralisé pour garantir la cohérence des URLs

import { GEO_SEO_ROUTES, SEA_ROUTES, DATA_ROUTES, ROUTES } from '@/lib/routes';
import { type Locale } from '@/lib/i18n';

export interface NavItem {
  id: string;
  label: string;
  labelEn?: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  labelEn?: string;
  href: string;
  /** Si défini, le lien n'apparaît que pour cette locale */
  localeOnly?: 'fr' | 'en';
}

export interface FooterColumn {
  title: string;
  titleEn?: string;
  links: FooterLink[];
}

// Menu principal Rankwell (avec labels bilingues)
const navigationData: NavItem[] = [
  {
    id: 'agence',
    label: "L'agence",
    labelEn: 'Agency',
    href: ROUTES.AGENCE.QUI_SOMMES_NOUS,
    children: [
      { id: 'qui-sommes-nous', label: 'Qui sommes-nous', labelEn: 'About us', href: ROUTES.AGENCE.QUI_SOMMES_NOUS },
      { id: 'bureaux', label: 'Nos bureaux', labelEn: 'Our offices', href: ROUTES.AGENCE.BUREAUX },
    ],
  },
  {
    id: 'expertises',
    label: 'Expertises',
    labelEn: 'Expertise',
    href: '#',
    children: [
      {
        id: 'geo-seo',
        label: 'Agence GEO & SEO',
        labelEn: 'GEO & SEO Agency',
        href: GEO_SEO_ROUTES.INDEX,
        children: [
          { id: 'audit', label: 'Audit SEO', labelEn: 'SEO Audit', href: GEO_SEO_ROUTES.AUDIT },
          { id: 'technique-semantique', label: 'Technique & sémantique', labelEn: 'Technical & semantic', href: GEO_SEO_ROUTES.TECHNIQUE_SEMANTIQUE },
          { id: 'netlinking', label: 'Netlinking', labelEn: 'Link building', href: GEO_SEO_ROUTES.NETLINKING },
          { id: 'creation-contenu', label: 'Création de contenu', labelEn: 'Content creation', href: GEO_SEO_ROUTES.CREATION_CONTENU },
          { id: 'local', label: 'SEO local', labelEn: 'Local SEO', href: GEO_SEO_ROUTES.LOCAL },
          { id: 'international', label: 'SEO international', labelEn: 'International SEO', href: GEO_SEO_ROUTES.INTERNATIONAL },
        ],
      },
      {
        id: 'sea',
        label: 'Agence SEA',
        labelEn: 'SEA Agency',
        href: SEA_ROUTES.INDEX,
        children: [
          { id: 'setup', label: 'Setup campagnes', labelEn: 'Campaign setup', href: SEA_ROUTES.SETUP },
          { id: 'accompagnement', label: 'Accompagnement', labelEn: 'Management', href: SEA_ROUTES.ACCOMPAGNEMENT },
          { id: 'analyse-semantique', label: 'Analyse sémantique', labelEn: 'Semantic analysis', href: SEA_ROUTES.ANALYSE_SEMANTIQUE },
          { id: 'sea-local', label: 'SEA local', labelEn: 'Local SEA', href: SEA_ROUTES.LOCAL },
          { id: 'sea-international', label: 'SEA international', labelEn: 'International SEA', href: SEA_ROUTES.INTERNATIONAL },
        ],
      },
      {
        id: 'data',
        label: 'Agence Data',
        labelEn: 'Data Agency',
        href: DATA_ROUTES.INDEX,
        children: [
          { id: 'tracking', label: 'Tracking', labelEn: 'Tracking', href: DATA_ROUTES.TRACKING },
          { id: 'analytics', label: 'Analytics', labelEn: 'Analytics', href: DATA_ROUTES.ANALYTICS },
          { id: 'cro', label: 'CRO', labelEn: 'CRO', href: DATA_ROUTES.CRO },
        ],
      },
    ],
  },
  {
    id: 'formations',
    label: 'Formations',
    labelEn: 'Training',
    href: ROUTES.FORMATIONS,
  },
  {
    id: 'ressources',
    label: 'Ressources',
    labelEn: 'Resources',
    href: '#',
    children: [
      { id: 'etudes-de-cas', label: 'Études de cas', labelEn: 'Case studies', href: ROUTES.RESSOURCES.ETUDES_DE_CAS },
      { id: 'guides', label: 'Guides', labelEn: 'Guides', href: ROUTES.RESSOURCES.GUIDES },
      { id: 'blog', label: 'Actualités', labelEn: 'News', href: ROUTES.RESSOURCES.BLOG },
    ],
  },
];

// Helper to get localized navigation
function localizeNavItem(item: NavItem, locale: Locale): NavItem {
  return {
    ...item,
    label: locale === 'en' && item.labelEn ? item.labelEn : item.label,
    children: item.children?.map(child => localizeNavItem(child, locale)),
  };
}

/**
 * Get navigation items localized for the specified locale
 */
export function getNavigation(locale: Locale = 'fr'): NavItem[] {
  return navigationData.map(item => localizeNavItem(item, locale));
}

// Export for backward compatibility (French version)
export const navigation = navigationData;

// Footer columns (with bilingual labels)
const footerColumnsData: FooterColumn[] = [
  {
    title: 'Services',
    titleEn: 'Services',
    links: [
      { label: 'GEO & SEO', labelEn: 'GEO & SEO', href: GEO_SEO_ROUTES.INDEX },
      { label: 'SEA', labelEn: 'SEA', href: SEA_ROUTES.INDEX },
      { label: 'Data & Analytics', labelEn: 'Data & Analytics', href: DATA_ROUTES.INDEX },
      { label: 'Formations', labelEn: 'Training', href: ROUTES.FORMATIONS },
      { label: 'en France', href: GEO_SEO_ROUTES.FRANCE, localeOnly: 'fr' },
      { label: 'par Secteur', labelEn: 'by Sector', href: GEO_SEO_ROUTES.SECTEURS },
    ],
  },
  {
    title: 'Agence',
    titleEn: 'Agency',
    links: [
      { label: 'Qui sommes-nous', labelEn: 'About us', href: ROUTES.AGENCE.QUI_SOMMES_NOUS },
      { label: 'Nos bureaux', labelEn: 'Our offices', href: ROUTES.AGENCE.BUREAUX },
    ],
  },
  {
    title: 'Ressources',
    titleEn: 'Resources',
    links: [
      { label: 'Études de cas', labelEn: 'Case studies', href: ROUTES.RESSOURCES.ETUDES_DE_CAS },
      { label: 'Guides', labelEn: 'Guides', href: ROUTES.RESSOURCES.GUIDES },
      { label: 'Actualités', labelEn: 'News', href: ROUTES.RESSOURCES.BLOG },
      { label: 'Glossaire', labelEn: 'Glossary', href: ROUTES.RESSOURCES.GLOSSAIRE },
    ],
  },
];

/**
 * Get footer columns localized for the specified locale
 */
export function getFooterColumns(locale: Locale = 'fr'): FooterColumn[] {
  return footerColumnsData.map(column => ({
    ...column,
    title: locale === 'en' && column.titleEn ? column.titleEn : column.title,
    links: column.links
      // Filtrer les liens par locale si localeOnly est défini
      .filter(link => !link.localeOnly || link.localeOnly === locale)
      .map(link => ({
        ...link,
        label: locale === 'en' && link.labelEn ? link.labelEn : link.label,
      })),
  }));
}

// Export for backward compatibility
export const footerColumns = footerColumnsData;

// Company info (bilingual)
export const companyInfo = {
  name: 'Rankwell',
  tagline: {
    fr: 'Agence GEO, SEO, SEA & Data',
    en: 'GEO, SEO, SEA & Data Agency',
  },
  description: {
    fr: 'Rankwell accompagne les entreprises dans leur croissance digitale avec des stratégies SEO, SEA et Data sur mesure.',
    en: 'Rankwell supports businesses in their digital growth with tailored SEO, SEA and Data strategies.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/rankwell/?originalSubdomain=fr',
    facebook: 'https://fr-fr.facebook.com/RankwellAgency/',
    instagram: 'https://www.instagram.com/rankwell_agency/?hl=fr',
  },
};

// Office info for footer
export const officesInfo = {
  paris: {
    name: 'Paris',
    href: '/agence-geo-seo/france/paris',
    address: '8 place Boulnois',
    city: '75017 Paris',
    phone: '01 82 28 30 00',
    email: 'contact@rankwell.fr',
  },
  dubai: {
    name: 'Dubai',
    href: '/agence-geo-seo/emirats/dubai',
    address: 'Oud Metha Road 18th Street',
    city: 'Dubai, UAE',
    phone: '+971 55 529 4430',
    email: 'theophile@rankwell.com',
  },
};

/**
 * Get company info localized for the specified locale
 */
export function getCompanyInfo(locale: Locale = 'fr') {
  return {
    name: companyInfo.name,
    tagline: companyInfo.tagline[locale],
    description: companyInfo.description[locale],
    social: companyInfo.social,
  };
}
