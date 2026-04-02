/**
 * SECTORS - GEO & SEO by sector gateway page
 * List of business sectors and project types for internal linking
 *
 * 40 entries removed after SEO validation via HaloScan/Ahrefs (March 2026)
 */

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'GEO & SEO Agency by Sector | SEO for your industry',
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
  { slug: 'lawyer', name: 'Lawyers', category: 'Legal' },
  { slug: 'notary', name: 'Notaries', category: 'Legal' },

  // Finance & Accounting
  { slug: 'accountant', name: 'Accountants', category: 'Finance' },
  { slug: 'bank', name: 'Banks', category: 'Finance' },
  { slug: 'insurance', name: 'Insurance', category: 'Finance' },

  // Healthcare
  { slug: 'doctor', name: 'General Practitioners', category: 'Healthcare' },
  { slug: 'surgeon', name: 'Surgeons', category: 'Healthcare' },
  { slug: 'dentist', name: 'Dentists', category: 'Healthcare' },
  { slug: 'ophthalmologist', name: 'Ophthalmologists', category: 'Healthcare' },
  { slug: 'dermatologist', name: 'Dermatologists', category: 'Healthcare' },
  { slug: 'osteopath', name: 'Osteopaths', category: 'Healthcare' },
  { slug: 'psychologist', name: 'Psychologists', category: 'Healthcare' },
  { slug: 'veterinarian', name: 'Veterinarians', category: 'Healthcare' },
  { slug: 'pharmacy', name: 'Pharmacies', category: 'Healthcare' },
  { slug: 'clinic', name: 'Clinics', category: 'Healthcare' },

  // Beauty & Wellness
  { slug: 'hairdresser', name: 'Hairdressers', category: 'Beauty' },
  { slug: 'spa', name: 'Spas', category: 'Beauty' },
  { slug: 'barber', name: 'Barbers', category: 'Beauty' },

  // Hospitality
  { slug: 'hotel', name: 'Hotels', category: 'Hospitality' },
  { slug: 'holiday-rental', name: 'Holiday Rentals', category: 'Hospitality' },
  { slug: 'campsite', name: 'Campsites', category: 'Hospitality' },

  // Food & Beverage
  { slug: 'restaurant', name: 'Restaurants', category: 'Food & Beverage' },
  { slug: 'caterer', name: 'Caterers', category: 'Food & Beverage' },
  { slug: 'food-truck', name: 'Food Trucks', category: 'Food & Beverage' },
  { slug: 'bar', name: 'Bars', category: 'Food & Beverage' },

  // Real Estate
  { slug: 'real-estate-agency', name: 'Real Estate Agencies', category: 'Real Estate' },
  { slug: 'property-developer', name: 'Property Developers', category: 'Real Estate' },
  { slug: 'property-manager', name: 'Property Managers', category: 'Real Estate' },
  { slug: 'property-inspector', name: 'Property Inspectors', category: 'Real Estate' },

  // Architecture & Design
  { slug: 'architect', name: 'Architects', category: 'Architecture' },
  { slug: 'landscaper', name: 'Landscapers', category: 'Architecture' },

  // Trades & Crafts
  { slug: 'plumber', name: 'Plumbers', category: 'Trades' },
  { slug: 'electrician', name: 'Electricians', category: 'Trades' },
  { slug: 'heating-engineer', name: 'Heating Engineers', category: 'Trades' },
  { slug: 'carpenter', name: 'Carpenters', category: 'Trades' },
  { slug: 'locksmith', name: 'Locksmiths', category: 'Trades' },
  { slug: 'tiler', name: 'Tilers', category: 'Trades' },
  { slug: 'roofer', name: 'Roofers', category: 'Trades' },
  { slug: 'joiner', name: 'Joiners', category: 'Trades' },
  { slug: 'glazier', name: 'Glaziers', category: 'Trades' },
  { slug: 'mover', name: 'Movers', category: 'Trades' },

  // Automotive
  { slug: 'auto-repair', name: 'Auto Repair Shops', category: 'Automotive' },
  { slug: 'car-dealer', name: 'Car Dealers', category: 'Automotive' },
  { slug: 'body-shop', name: 'Body Shops', category: 'Automotive' },

  // B2B Services
  { slug: 'marketing-agency', name: 'Marketing Agencies', category: 'B2B Services' },
  { slug: 'translator', name: 'Translators', category: 'B2B Services' },
  { slug: 'printer', name: 'Printers', category: 'B2B Services' },

  // Creatives
  { slug: 'photographer', name: 'Photographers', category: 'Creatives' },
  { slug: 'videographer', name: 'Videographers', category: 'Creatives' },
  { slug: 'graphic-designer', name: 'Graphic Designers', category: 'Creatives' },

  // Sports & Leisure
  { slug: 'personal-trainer', name: 'Personal Trainers', category: 'Sports' },

  // Retail
  { slug: 'florist', name: 'Florists', category: 'Retail' },
  { slug: 'jeweler', name: 'Jewelers', category: 'Retail' },
  { slug: 'optician', name: 'Opticians', category: 'Retail' },
  { slug: 'wine-merchant', name: 'Wine Merchants', category: 'Retail' },
  { slug: 'franchise', name: 'Franchises', category: 'Retail' },

  // Business Types
  { slug: 'startup', name: 'Startups', category: 'Business' },
  { slug: 'sme', name: 'SMEs', category: 'Business' },
  { slug: 'industry', name: 'Industries', category: 'Business' },
  { slug: 'non-profit', name: 'Non-profits', category: 'Business' },
];

// ============================================
// PROJECT TYPES
// ============================================
export const typesProjetsData: SecteurItem[] = [
  // Site types
  { slug: 'ecommerce', name: 'E-commerce', category: 'Site Type' },
  { slug: 'corporate-website', name: 'Corporate Website', category: 'Site Type' },
  { slug: 'marketplace', name: 'Marketplace', category: 'Site Type' },
  { slug: 'blog', name: 'Blog', category: 'Site Type' },
  { slug: 'web-app', name: 'Web App & SaaS', category: 'Site Type' },

  // Actions
  { slug: 'website-redesign', name: 'Website Redesign', category: 'Project' },
  { slug: 'website-migration', name: 'Website Migration', category: 'Project' },
  { slug: 'website-creation', name: 'Website Creation', category: 'Project' },
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
// SECTION TITLES
// ============================================
export const sectionTitles = {
  secteurs: 'By industry',
  projets: 'By project type',
  cms: 'By CMS & platform',
};

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
