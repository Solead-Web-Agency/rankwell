/**
 * SECTORS - GEO & SEO by sector gateway page
 * List of business sectors and project types for internal linking
 */

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'GEO & SEO Agency by Sector | SEO for your industry - Rankwell',
  description:
    'Discover our GEO & SEO services tailored to your business sector. SEO for lawyers, restaurants, e-commerce, real estate, hotels and more.',
};

// ============================================
// PAGE HERO
// ============================================
export const pageHeroData = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Sectors' },
  ],
  title: 'GEO & SEO Agency by Sector',
};

// ============================================
// INTRO
// ============================================
export const introData = {
  title: 'SEO expertise tailored to each industry',
  description:
    'Every business has its specificities. Our GEO & SEO experts develop tailored strategies adapted to your industry challenges and the type of web project you want to develop.',
};

// ============================================
// BUSINESS SECTORS
// ============================================
export interface SecteurItem {
  slug: string;
  name: string;
  category?: string;
}

export const secteursMetiersData: SecteurItem[] = [
  // Legal
  { slug: 'avocat', name: 'Lawyers', category: 'Legal' },
  { slug: 'notaire', name: 'Notaries', category: 'Legal' },
  { slug: 'huissier', name: 'Bailiffs', category: 'Legal' },

  // Finance & Accounting
  { slug: 'expert-comptable', name: 'Accountants', category: 'Finance' },
  { slug: 'banque', name: 'Banks', category: 'Finance' },
  { slug: 'assurance', name: 'Insurance', category: 'Finance' },
  { slug: 'courtier', name: 'Brokers', category: 'Finance' },
  { slug: 'gestionnaire-patrimoine', name: 'Wealth Managers', category: 'Finance' },

  // Healthcare
  { slug: 'medecin', name: 'General Practitioners', category: 'Healthcare' },
  { slug: 'chirurgien', name: 'Surgeons', category: 'Healthcare' },
  { slug: 'dentiste', name: 'Dentists', category: 'Healthcare' },
  { slug: 'orthodontiste', name: 'Orthodontists', category: 'Healthcare' },
  { slug: 'ophtalmologue', name: 'Ophthalmologists', category: 'Healthcare' },
  { slug: 'dermatologue', name: 'Dermatologists', category: 'Healthcare' },
  { slug: 'kinesitherapeute', name: 'Physiotherapists', category: 'Healthcare' },
  { slug: 'osteopathe', name: 'Osteopaths', category: 'Healthcare' },
  { slug: 'psychologue', name: 'Psychologists', category: 'Healthcare' },
  { slug: 'veterinaire', name: 'Veterinarians', category: 'Healthcare' },
  { slug: 'pharmacie', name: 'Pharmacies', category: 'Healthcare' },
  { slug: 'clinique', name: 'Clinics', category: 'Healthcare' },
  { slug: 'laboratoire', name: 'Medical Labs', category: 'Healthcare' },

  // Beauty & Wellness
  { slug: 'coiffeur', name: 'Hairdressers', category: 'Beauty' },
  { slug: 'estheticienne', name: 'Beauticians', category: 'Beauty' },
  { slug: 'spa', name: 'Spas', category: 'Beauty' },
  { slug: 'salon-beaute', name: 'Beauty Salons', category: 'Beauty' },
  { slug: 'barbier', name: 'Barbers', category: 'Beauty' },

  // Hospitality
  { slug: 'hotel', name: 'Hotels', category: 'Hospitality' },
  { slug: 'chambre-hote', name: 'B&Bs', category: 'Hospitality' },
  { slug: 'gite', name: 'Holiday Rentals', category: 'Hospitality' },
  { slug: 'camping', name: 'Campsites', category: 'Hospitality' },
  { slug: 'residence-tourisme', name: 'Tourist Residences', category: 'Hospitality' },
  { slug: 'auberge', name: 'Inns', category: 'Hospitality' },

  // Food & Beverage
  { slug: 'restaurant', name: 'Restaurants', category: 'Food & Beverage' },
  { slug: 'restaurant-gastronomique', name: 'Fine Dining', category: 'Food & Beverage' },
  { slug: 'pizzeria', name: 'Pizzerias', category: 'Food & Beverage' },
  { slug: 'brasserie', name: 'Brasseries', category: 'Food & Beverage' },
  { slug: 'traiteur', name: 'Caterers', category: 'Food & Beverage' },
  { slug: 'food-truck', name: 'Food Trucks', category: 'Food & Beverage' },
  { slug: 'bar', name: 'Bars', category: 'Food & Beverage' },
  { slug: 'cafe', name: 'Cafés', category: 'Food & Beverage' },
  { slug: 'boulangerie', name: 'Bakeries', category: 'Food & Beverage' },
  { slug: 'patisserie', name: 'Pastry Shops', category: 'Food & Beverage' },

  // Real Estate
  { slug: 'agence-immobiliere', name: 'Real Estate Agencies', category: 'Real Estate' },
  { slug: 'promoteur-immobilier', name: 'Property Developers', category: 'Real Estate' },
  { slug: 'constructeur-maison', name: 'Home Builders', category: 'Real Estate' },
  { slug: 'syndic', name: 'Property Managers', category: 'Real Estate' },
  { slug: 'diagnostiqueur', name: 'Property Inspectors', category: 'Real Estate' },

  // Architecture & Design
  { slug: 'architecte', name: 'Architects', category: 'Architecture' },
  { slug: 'architecte-interieur', name: 'Interior Designers', category: 'Architecture' },
  { slug: 'decorateur', name: 'Decorators', category: 'Architecture' },
  { slug: 'paysagiste', name: 'Landscapers', category: 'Architecture' },

  // Trades & Crafts
  { slug: 'plombier', name: 'Plumbers', category: 'Trades' },
  { slug: 'electricien', name: 'Electricians', category: 'Trades' },
  { slug: 'chauffagiste', name: 'Heating Engineers', category: 'Trades' },
  { slug: 'menuisier', name: 'Carpenters', category: 'Trades' },
  { slug: 'serrurier', name: 'Locksmiths', category: 'Trades' },
  { slug: 'carreleur', name: 'Tilers', category: 'Trades' },
  { slug: 'peintre', name: 'Painters', category: 'Trades' },
  { slug: 'couvreur', name: 'Roofers', category: 'Trades' },
  { slug: 'macon', name: 'Masons', category: 'Trades' },
  { slug: 'charpentier', name: 'Joiners', category: 'Trades' },
  { slug: 'cuisiniste', name: 'Kitchen Fitters', category: 'Trades' },
  { slug: 'pisciniste', name: 'Pool Builders', category: 'Trades' },
  { slug: 'vitrier', name: 'Glaziers', category: 'Trades' },
  { slug: 'demenageur', name: 'Movers', category: 'Trades' },

  // Automotive
  { slug: 'garage', name: 'Auto Repair Shops', category: 'Automotive' },
  { slug: 'concessionnaire', name: 'Car Dealers', category: 'Automotive' },
  { slug: 'carrossier', name: 'Body Shops', category: 'Automotive' },
  { slug: 'auto-ecole', name: 'Driving Schools', category: 'Automotive' },
  { slug: 'location-voiture', name: 'Car Rentals', category: 'Automotive' },

  // B2B Services
  { slug: 'agence-communication', name: 'Marketing Agencies', category: 'B2B Services' },
  { slug: 'agence-web', name: 'Web Agencies', category: 'B2B Services' },
  { slug: 'consultant', name: 'Consultants', category: 'B2B Services' },
  { slug: 'coach', name: 'Business Coaches', category: 'B2B Services' },
  { slug: 'traducteur', name: 'Translators', category: 'B2B Services' },
  { slug: 'imprimeur', name: 'Printers', category: 'B2B Services' },

  // Creatives
  { slug: 'photographe', name: 'Photographers', category: 'Creatives' },
  { slug: 'videaste', name: 'Videographers', category: 'Creatives' },
  { slug: 'graphiste', name: 'Graphic Designers', category: 'Creatives' },
  { slug: 'wedding-planner', name: 'Wedding Planners', category: 'Creatives' },

  // Education & Training
  { slug: 'ecole-privee', name: 'Private Schools', category: 'Education' },
  { slug: 'centre-formation', name: 'Training Centers', category: 'Education' },
  { slug: 'professeur-particulier', name: 'Private Tutors', category: 'Education' },
  { slug: 'ecole-langue', name: 'Language Schools', category: 'Education' },
  { slug: 'creche', name: 'Nurseries', category: 'Education' },

  // Sports & Leisure
  { slug: 'salle-sport', name: 'Gyms', category: 'Sports' },
  { slug: 'coach-sportif', name: 'Personal Trainers', category: 'Sports' },
  { slug: 'club-golf', name: 'Golf Clubs', category: 'Sports' },
  { slug: 'club-tennis', name: 'Tennis Clubs', category: 'Sports' },
  { slug: 'centre-equestre', name: 'Equestrian Centers', category: 'Sports' },

  // Retail
  { slug: 'fleuriste', name: 'Florists', category: 'Retail' },
  { slug: 'bijoutier', name: 'Jewelers', category: 'Retail' },
  { slug: 'opticien', name: 'Opticians', category: 'Retail' },
  { slug: 'caviste', name: 'Wine Merchants', category: 'Retail' },
  { slug: 'epicerie-fine', name: 'Delicatessens', category: 'Retail' },
  { slug: 'franchise', name: 'Franchises', category: 'Retail' },

  // Business Types
  { slug: 'startup', name: 'Startups', category: 'Business' },
  { slug: 'pme', name: 'SMEs', category: 'Business' },
  { slug: 'industrie', name: 'Industries', category: 'Business' },
  { slug: 'association', name: 'Non-profits', category: 'Business' },
];

// ============================================
// PROJECT TYPES
// ============================================
export const typesProjetsData: SecteurItem[] = [
  // Site types
  { slug: 'ecommerce', name: 'E-commerce', category: 'Site Type' },
  { slug: 'site-vitrine', name: 'Corporate Website', category: 'Site Type' },
  { slug: 'marketplace', name: 'Marketplace', category: 'Site Type' },
  { slug: 'blog', name: 'Blog', category: 'Site Type' },
  { slug: 'application-web', name: 'Web App & SaaS', category: 'Site Type' },
  { slug: 'intranet', name: 'Intranet', category: 'Site Type' },

  // Actions
  { slug: 'refonte', name: 'Website Redesign', category: 'Project' },
  { slug: 'migration', name: 'Website Migration', category: 'Project' },
  { slug: 'creation-site', name: 'Website Creation', category: 'Project' },
];

// ============================================
// CMS & PLATFORMS
// ============================================
export const cmsPlatformesData: SecteurItem[] = [
  // Open Source CMS
  { slug: 'wordpress', name: 'WordPress', category: 'Open Source CMS' },
  { slug: 'drupal', name: 'Drupal', category: 'Open Source CMS' },
  { slug: 'joomla', name: 'Joomla', category: 'Open Source CMS' },
  { slug: 'typo3', name: 'TYPO3', category: 'Open Source CMS' },

  // E-commerce Open Source
  { slug: 'prestashop', name: 'PrestaShop', category: 'E-commerce' },
  { slug: 'woocommerce', name: 'WooCommerce', category: 'E-commerce' },
  { slug: 'magento', name: 'Magento', category: 'E-commerce' },
  { slug: 'opencart', name: 'OpenCart', category: 'E-commerce' },
  { slug: 'sylius', name: 'Sylius', category: 'E-commerce' },

  // SaaS & Hosted
  { slug: 'shopify', name: 'Shopify', category: 'SaaS' },
  { slug: 'wix', name: 'Wix', category: 'SaaS' },
  { slug: 'squarespace', name: 'Squarespace', category: 'SaaS' },
  { slug: 'webflow', name: 'Webflow', category: 'SaaS' },
  { slug: 'framer', name: 'Framer', category: 'SaaS' },
  { slug: 'jimdo', name: 'Jimdo', category: 'SaaS' },
  { slug: 'weebly', name: 'Weebly', category: 'SaaS' },
  { slug: 'bigcommerce', name: 'BigCommerce', category: 'SaaS' },

  // Headless & Modern
  { slug: 'strapi', name: 'Strapi', category: 'Headless CMS' },
  { slug: 'contentful', name: 'Contentful', category: 'Headless CMS' },
  { slug: 'sanity', name: 'Sanity', category: 'Headless CMS' },
  { slug: 'prismic', name: 'Prismic', category: 'Headless CMS' },

  // Frameworks
  { slug: 'nextjs', name: 'Next.js', category: 'Framework' },
  { slug: 'nuxtjs', name: 'Nuxt.js', category: 'Framework' },
  { slug: 'gatsby', name: 'Gatsby', category: 'Framework' },

  // ERP & Business
  { slug: 'odoo', name: 'Odoo', category: 'ERP & Business' },
  { slug: 'hubspot', name: 'HubSpot CMS', category: 'ERP & Business' },
  { slug: 'salesforce', name: 'Salesforce Commerce', category: 'ERP & Business' },
];

// ============================================
// CTA
// ============================================
export const ctaData = {
  title: 'Your sector is not listed?',
  description:
    'We support all types of businesses. Contact us to discuss your GEO & SEO project tailored to your industry.',
  buttonText: 'Contact us',
  buttonHref: '/contact',
};
