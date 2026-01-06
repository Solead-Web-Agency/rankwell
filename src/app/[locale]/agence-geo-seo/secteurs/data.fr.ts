/**
 * SECTEURS - Page passerelle GEO & SEO par secteur
 * Liste des secteurs d'activité et types de projets pour le maillage interne
 *
 * Cette page n'existe qu'en français (pas de version EN)
 */

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO par secteur | Référencement par métier et type de projet - Rankwell',
  description:
    'Découvrez nos services GEO & SEO adaptés à votre secteur d\'activité. Référencement pour avocats, restaurants, e-commerce, immobilier, hôtels et bien plus.',
};

// ============================================
// PAGE HERO
// ============================================
export const pageHeroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Secteurs' },
  ],
  title: 'Agence GEO & SEO par secteur',
};

// ============================================
// INTRO
// ============================================
export const introData = {
  title: 'Une expertise SEO adaptée à chaque secteur',
  description:
    'Chaque métier a ses spécificités. Nos experts GEO & SEO développent des stratégies sur mesure adaptées aux enjeux de votre secteur d\'activité et au type de projet web que vous souhaitez développer.',
};

// ============================================
// SECTEURS D'ACTIVITÉ (MÉTIERS)
// ============================================
export interface SecteurItem {
  slug: string;
  name: string;
  category?: string;
}

export const secteursMetiersData: SecteurItem[] = [
  // Juridique
  { slug: 'avocat', name: 'Avocats', category: 'Juridique' },
  { slug: 'notaire', name: 'Notaires', category: 'Juridique' },
  { slug: 'huissier', name: 'Huissiers', category: 'Juridique' },

  // Finance & Comptabilité
  { slug: 'expert-comptable', name: 'Experts-comptables', category: 'Finance' },
  { slug: 'banque', name: 'Banques', category: 'Finance' },
  { slug: 'assurance', name: 'Assurances', category: 'Finance' },
  { slug: 'courtier', name: 'Courtiers', category: 'Finance' },
  { slug: 'gestionnaire-patrimoine', name: 'Gestionnaires de patrimoine', category: 'Finance' },

  // Santé
  { slug: 'medecin', name: 'Médecins généralistes', category: 'Santé' },
  { slug: 'chirurgien', name: 'Chirurgiens', category: 'Santé' },
  { slug: 'dentiste', name: 'Dentistes', category: 'Santé' },
  { slug: 'orthodontiste', name: 'Orthodontistes', category: 'Santé' },
  { slug: 'ophtalmologue', name: 'Ophtalmologues', category: 'Santé' },
  { slug: 'dermatologue', name: 'Dermatologues', category: 'Santé' },
  { slug: 'kinesitherapeute', name: 'Kinésithérapeutes', category: 'Santé' },
  { slug: 'osteopathe', name: 'Ostéopathes', category: 'Santé' },
  { slug: 'psychologue', name: 'Psychologues', category: 'Santé' },
  { slug: 'veterinaire', name: 'Vétérinaires', category: 'Santé' },
  { slug: 'pharmacie', name: 'Pharmacies', category: 'Santé' },
  { slug: 'clinique', name: 'Cliniques', category: 'Santé' },
  { slug: 'laboratoire', name: 'Laboratoires d\'analyses', category: 'Santé' },

  // Beauté & Bien-être
  { slug: 'coiffeur', name: 'Coiffeurs', category: 'Beauté' },
  { slug: 'estheticienne', name: 'Esthéticiennes', category: 'Beauté' },
  { slug: 'spa', name: 'Spas', category: 'Beauté' },
  { slug: 'salon-beaute', name: 'Salons de beauté', category: 'Beauté' },
  { slug: 'barbier', name: 'Barbiers', category: 'Beauté' },

  // Hôtellerie
  { slug: 'hotel', name: 'Hôtels', category: 'Hôtellerie' },
  { slug: 'chambre-hote', name: 'Chambres d\'hôtes', category: 'Hôtellerie' },
  { slug: 'gite', name: 'Gîtes', category: 'Hôtellerie' },
  { slug: 'camping', name: 'Campings', category: 'Hôtellerie' },
  { slug: 'residence-tourisme', name: 'Résidences de tourisme', category: 'Hôtellerie' },
  { slug: 'auberge', name: 'Auberges', category: 'Hôtellerie' },

  // Restauration
  { slug: 'restaurant', name: 'Restaurants', category: 'Restauration' },
  { slug: 'restaurant-gastronomique', name: 'Restaurants gastronomiques', category: 'Restauration' },
  { slug: 'pizzeria', name: 'Pizzerias', category: 'Restauration' },
  { slug: 'brasserie', name: 'Brasseries', category: 'Restauration' },
  { slug: 'traiteur', name: 'Traiteurs', category: 'Restauration' },
  { slug: 'food-truck', name: 'Food trucks', category: 'Restauration' },
  { slug: 'bar', name: 'Bars', category: 'Restauration' },
  { slug: 'cafe', name: 'Cafés', category: 'Restauration' },
  { slug: 'boulangerie', name: 'Boulangeries', category: 'Restauration' },
  { slug: 'patisserie', name: 'Pâtisseries', category: 'Restauration' },

  // Immobilier
  { slug: 'agence-immobiliere', name: 'Agences immobilières', category: 'Immobilier' },
  { slug: 'promoteur-immobilier', name: 'Promoteurs immobiliers', category: 'Immobilier' },
  { slug: 'constructeur-maison', name: 'Constructeurs de maisons', category: 'Immobilier' },
  { slug: 'syndic', name: 'Syndics de copropriété', category: 'Immobilier' },
  { slug: 'diagnostiqueur', name: 'Diagnostiqueurs immobiliers', category: 'Immobilier' },

  // Architecture & Design
  { slug: 'architecte', name: 'Architectes', category: 'Architecture' },
  { slug: 'architecte-interieur', name: 'Architectes d\'intérieur', category: 'Architecture' },
  { slug: 'decorateur', name: 'Décorateurs', category: 'Architecture' },
  { slug: 'paysagiste', name: 'Paysagistes', category: 'Architecture' },

  // Artisanat du bâtiment
  { slug: 'plombier', name: 'Plombiers', category: 'Artisanat' },
  { slug: 'electricien', name: 'Électriciens', category: 'Artisanat' },
  { slug: 'chauffagiste', name: 'Chauffagistes', category: 'Artisanat' },
  { slug: 'menuisier', name: 'Menuisiers', category: 'Artisanat' },
  { slug: 'serrurier', name: 'Serruriers', category: 'Artisanat' },
  { slug: 'carreleur', name: 'Carreleurs', category: 'Artisanat' },
  { slug: 'peintre', name: 'Peintres en bâtiment', category: 'Artisanat' },
  { slug: 'couvreur', name: 'Couvreurs', category: 'Artisanat' },
  { slug: 'macon', name: 'Maçons', category: 'Artisanat' },
  { slug: 'charpentier', name: 'Charpentiers', category: 'Artisanat' },
  { slug: 'cuisiniste', name: 'Cuisinistes', category: 'Artisanat' },
  { slug: 'pisciniste', name: 'Piscinistes', category: 'Artisanat' },
  { slug: 'vitrier', name: 'Vitriers', category: 'Artisanat' },
  { slug: 'demenageur', name: 'Déménageurs', category: 'Artisanat' },

  // Automobile
  { slug: 'garage', name: 'Garages automobiles', category: 'Automobile' },
  { slug: 'concessionnaire', name: 'Concessionnaires', category: 'Automobile' },
  { slug: 'carrossier', name: 'Carrossiers', category: 'Automobile' },
  { slug: 'auto-ecole', name: 'Auto-écoles', category: 'Automobile' },
  { slug: 'location-voiture', name: 'Location de voitures', category: 'Automobile' },

  // Services aux entreprises
  { slug: 'agence-communication', name: 'Agences de communication', category: 'Services B2B' },
  { slug: 'agence-web', name: 'Agences web', category: 'Services B2B' },
  { slug: 'consultant', name: 'Consultants', category: 'Services B2B' },
  { slug: 'coach', name: 'Coachs professionnels', category: 'Services B2B' },
  { slug: 'traducteur', name: 'Traducteurs', category: 'Services B2B' },
  { slug: 'imprimeur', name: 'Imprimeurs', category: 'Services B2B' },

  // Créatifs
  { slug: 'photographe', name: 'Photographes', category: 'Créatifs' },
  { slug: 'videaste', name: 'Vidéastes', category: 'Créatifs' },
  { slug: 'graphiste', name: 'Graphistes', category: 'Créatifs' },
  { slug: 'wedding-planner', name: 'Wedding planners', category: 'Créatifs' },

  // Formation & Éducation
  { slug: 'ecole-privee', name: 'Écoles privées', category: 'Formation' },
  { slug: 'centre-formation', name: 'Centres de formation', category: 'Formation' },
  { slug: 'professeur-particulier', name: 'Professeurs particuliers', category: 'Formation' },
  { slug: 'ecole-langue', name: 'Écoles de langues', category: 'Formation' },
  { slug: 'creche', name: 'Crèches', category: 'Formation' },

  // Sport & Loisirs
  { slug: 'salle-sport', name: 'Salles de sport', category: 'Sport' },
  { slug: 'coach-sportif', name: 'Coachs sportifs', category: 'Sport' },
  { slug: 'club-golf', name: 'Clubs de golf', category: 'Sport' },
  { slug: 'club-tennis', name: 'Clubs de tennis', category: 'Sport' },
  { slug: 'centre-equestre', name: 'Centres équestres', category: 'Sport' },

  // Commerce
  { slug: 'fleuriste', name: 'Fleuristes', category: 'Commerce' },
  { slug: 'bijoutier', name: 'Bijoutiers', category: 'Commerce' },
  { slug: 'opticien', name: 'Opticiens', category: 'Commerce' },
  { slug: 'caviste', name: 'Cavistes', category: 'Commerce' },
  { slug: 'epicerie-fine', name: 'Épiceries fines', category: 'Commerce' },
  { slug: 'franchise', name: 'Franchises', category: 'Commerce' },

  // Entreprises
  { slug: 'startup', name: 'Startups', category: 'Entreprise' },
  { slug: 'pme', name: 'PME', category: 'Entreprise' },
  { slug: 'industrie', name: 'Industries', category: 'Entreprise' },
  { slug: 'association', name: 'Associations', category: 'Entreprise' },
];

// ============================================
// TYPES DE PROJETS
// ============================================
export const typesProjetsData: SecteurItem[] = [
  // Types de sites
  { slug: 'ecommerce', name: 'E-commerce', category: 'Type de site' },
  { slug: 'site-vitrine', name: 'Site vitrine', category: 'Type de site' },
  { slug: 'marketplace', name: 'Marketplace', category: 'Type de site' },
  { slug: 'blog', name: 'Blog', category: 'Type de site' },
  { slug: 'application-web', name: 'Application web & SaaS', category: 'Type de site' },
  { slug: 'intranet', name: 'Intranet', category: 'Type de site' },

  // Actions
  { slug: 'refonte', name: 'Refonte de site', category: 'Projet' },
  { slug: 'migration', name: 'Migration de site', category: 'Projet' },
  { slug: 'creation-site', name: 'Création de site', category: 'Projet' },
];

// ============================================
// CMS & PLATEFORMES
// ============================================
export const cmsPlatformesData: SecteurItem[] = [
  // CMS Open Source
  { slug: 'wordpress', name: 'WordPress', category: 'CMS Open Source' },
  { slug: 'drupal', name: 'Drupal', category: 'CMS Open Source' },
  { slug: 'joomla', name: 'Joomla', category: 'CMS Open Source' },
  { slug: 'typo3', name: 'TYPO3', category: 'CMS Open Source' },

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

  // Headless & Moderne
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
  title: 'Votre secteur n\'est pas listé ?',
  description:
    'Nous accompagnons tous types d\'entreprises. Contactez-nous pour discuter de votre projet GEO & SEO adapté à votre métier.',
  buttonText: 'Nous contacter',
  buttonHref: '/contact',
};
