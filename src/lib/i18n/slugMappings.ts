/**
 * SLUG MAPPINGS FR <-> EN
 * Pour les pages dynamiques /secteur, /projet, /cms
 * Cle = slug FR, Valeur = slug EN
 */

export const sectorSlugMapping: Record<string, string> = {
  // Legal
  avocat: 'lawyer',
  notaire: 'notary',
  // Finance
  'expert-comptable': 'accountant',
  banque: 'bank',
  assurance: 'insurance',
  // Healthcare
  medecin: 'doctor',
  chirurgien: 'surgeon',
  dentiste: 'dentist',
  ophtalmologue: 'ophthalmologist',
  dermatologue: 'dermatologist',
  osteopathe: 'osteopath',
  psychologue: 'psychologist',
  veterinaire: 'veterinarian',
  pharmacie: 'pharmacy',
  clinique: 'clinic',
  // Beauty
  coiffeur: 'hairdresser',
  spa: 'spa',
  barbier: 'barber',
  // Hospitality
  hotel: 'hotel',
  gite: 'holiday-rental',
  camping: 'campsite',
  // Food
  restaurant: 'restaurant',
  traiteur: 'caterer',
  'food-truck': 'food-truck',
  bar: 'bar',
  // Real Estate
  'agence-immobiliere': 'real-estate-agency',
  'promoteur-immobilier': 'property-developer',
  syndic: 'property-manager',
  diagnostiqueur: 'property-inspector',
  // Architecture
  architecte: 'architect',
  paysagiste: 'landscaper',
  // Trades
  plombier: 'plumber',
  electricien: 'electrician',
  menuisier: 'carpenter',
  serrurier: 'locksmith',
  carreleur: 'tiler',
  couvreur: 'roofer',
  charpentier: 'joiner',
  vitrier: 'glazier',
  demenageur: 'mover',
  // Automotive
  garage: 'auto-repair',
  concessionnaire: 'car-dealer',
  carrossier: 'body-shop',
  // B2B
  'agence-communication': 'marketing-agency',
  traducteur: 'translator',
  imprimeur: 'printer',
  // Creatives
  photographe: 'photographer',
  videaste: 'videographer',
  graphiste: 'graphic-designer',
  // Sports
  'coach-sportif': 'personal-trainer',
  // Retail
  fleuriste: 'florist',
  bijoutier: 'jeweler',
  opticien: 'optician',
  caviste: 'wine-merchant',
  franchise: 'franchise',
  // Business
  startup: 'startup',
  pme: 'sme',
  industrie: 'industry',
  association: 'non-profit',
};

export const projectSlugMapping: Record<string, string> = {
  ecommerce: 'ecommerce',
  'site-vitrine': 'corporate-website',
  marketplace: 'marketplace',
  blog: 'blog',
  'application-web': 'web-app',
  refonte: 'website-redesign',
  migration: 'website-migration',
  'creation-site': 'website-creation',
};

export const cmsSlugMapping: Record<string, string> = {
  wordpress: 'wordpress',
  drupal: 'drupal',
  joomla: 'joomla',
  typo3: 'typo3',
  prestashop: 'prestashop',
  woocommerce: 'woocommerce',
  magento: 'magento',
  opencart: 'opencart',
  sylius: 'sylius',
  shopify: 'shopify',
  wix: 'wix',
  squarespace: 'squarespace',
  webflow: 'webflow',
  framer: 'framer',
  jimdo: 'jimdo',
  weebly: 'weebly',
  bigcommerce: 'bigcommerce',
  strapi: 'strapi',
  contentful: 'contentful',
  prismic: 'prismic',
  nextjs: 'nextjs',
  nuxtjs: 'nuxtjs',
  gatsby: 'gatsby',
  odoo: 'odoo',
  hubspot: 'hubspot',
  salesforce: 'salesforce',
};

// Reverse mappings (EN -> FR)
function reverseMapping(mapping: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(mapping).map(([fr, en]) => [en, fr]));
}

export const reverseSectorSlugMapping = reverseMapping(sectorSlugMapping);
export const reverseProjectSlugMapping = reverseMapping(projectSlugMapping);
export const reverseCmsSlugMapping = reverseMapping(cmsSlugMapping);

/**
 * Traduit un slug dynamique FR -> EN
 */
export function translateSlugToEnglish(slug: string, type: 'secteur' | 'projet' | 'cms'): string {
  const mapping = type === 'secteur' ? sectorSlugMapping : type === 'projet' ? projectSlugMapping : cmsSlugMapping;
  return mapping[slug] || slug;
}

/**
 * Traduit un slug dynamique EN -> FR
 */
export function translateSlugToFrench(slug: string, type: 'secteur' | 'projet' | 'cms'): string {
  const mapping = type === 'secteur' ? reverseSectorSlugMapping : type === 'projet' ? reverseProjectSlugMapping : reverseCmsSlugMapping;
  return mapping[slug] || slug;
}
