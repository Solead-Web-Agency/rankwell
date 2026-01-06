/**
 * FRANCE - Page passerelle GEO & SEO en France
 * Liste des régions et villes pour le maillage interne
 *
 * Cette page n'existe qu'en français (pas de version EN)
 */

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO & SEO en France | Référencement par ville et région - Rankwell',
  description:
    'Découvrez nos services GEO & SEO partout en France. Accompagnement par région (Île-de-France, Nouvelle-Aquitaine, Occitanie...) et par ville (Paris, Lyon, Bordeaux...).',
};

// ============================================
// PAGE HERO
// ============================================
export const pageHeroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France' },
  ],
  title: 'Agence GEO & SEO en France',
};

// ============================================
// INTRO
// ============================================
export const introData = {
  title: 'Notre accompagnement GEO & SEO partout en France',
  description:
    'Rankwell accompagne les entreprises dans toute la France. Nos experts GEO & SEO interviennent à distance ou sur site pour optimiser votre visibilité locale et nationale.',
};

// ============================================
// LISTE DES RÉGIONS
// ============================================
export interface RegionItem {
  slug: string;
  name: string;
}

export const regionsData: RegionItem[] = [
  { slug: 'ile-de-france', name: 'Île-de-France' },
  { slug: 'auvergne-rhone-alpes', name: 'Auvergne-Rhône-Alpes' },
  { slug: 'provence-alpes-cote-azur', name: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'nouvelle-aquitaine', name: 'Nouvelle-Aquitaine' },
  { slug: 'occitanie', name: 'Occitanie' },
  { slug: 'hauts-de-france', name: 'Hauts-de-France' },
  { slug: 'grand-est', name: 'Grand Est' },
  { slug: 'pays-de-la-loire', name: 'Pays de la Loire' },
  { slug: 'bretagne', name: 'Bretagne' },
  { slug: 'normandie', name: 'Normandie' },
  { slug: 'centre-val-de-loire', name: 'Centre-Val de Loire' },
  { slug: 'bourgogne-franche-comte', name: 'Bourgogne-Franche-Comté' },
  { slug: 'corse', name: 'Corse' },
];

// ============================================
// LISTE DES VILLES (50 villes pertinentes)
// ============================================
export interface VilleItem {
  slug: string;
  name: string;
  region: string;
}

export const villesData: VilleItem[] = [
  // Île-de-France
  { slug: 'paris', name: 'Paris', region: 'Île-de-France' },

  // Auvergne-Rhône-Alpes
  { slug: 'lyon', name: 'Lyon', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'grenoble', name: 'Grenoble', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'annecy', name: 'Annecy', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'chambery', name: 'Chambéry', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'valence', name: 'Valence', region: 'Auvergne-Rhône-Alpes' },

  // Provence-Alpes-Côte d'Azur
  { slug: 'marseille', name: 'Marseille', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'nice', name: 'Nice', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'aix-en-provence', name: 'Aix-en-Provence', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'cannes', name: 'Cannes', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'avignon', name: 'Avignon', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'saint-remy-de-provence', name: 'Saint-Rémy-de-Provence', region: 'Provence-Alpes-Côte d\'Azur' },

  // Nouvelle-Aquitaine
  { slug: 'bordeaux', name: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
  { slug: 'la-rochelle', name: 'La Rochelle', region: 'Nouvelle-Aquitaine' },
  { slug: 'rochefort', name: 'Rochefort', region: 'Nouvelle-Aquitaine' },
  { slug: 'biarritz', name: 'Biarritz', region: 'Nouvelle-Aquitaine' },
  { slug: 'pau', name: 'Pau', region: 'Nouvelle-Aquitaine' },
  { slug: 'poitiers', name: 'Poitiers', region: 'Nouvelle-Aquitaine' },
  { slug: 'limoges', name: 'Limoges', region: 'Nouvelle-Aquitaine' },
  { slug: 'angouleme', name: 'Angoulême', region: 'Nouvelle-Aquitaine' },

  // Occitanie
  { slug: 'toulouse', name: 'Toulouse', region: 'Occitanie' },
  { slug: 'montpellier', name: 'Montpellier', region: 'Occitanie' },
  { slug: 'nimes', name: 'Nîmes', region: 'Occitanie' },
  { slug: 'perpignan', name: 'Perpignan', region: 'Occitanie' },
  { slug: 'carcassonne', name: 'Carcassonne', region: 'Occitanie' },

  // Hauts-de-France
  { slug: 'lille', name: 'Lille', region: 'Hauts-de-France' },
  { slug: 'amiens', name: 'Amiens', region: 'Hauts-de-France' },

  // Grand Est
  { slug: 'strasbourg', name: 'Strasbourg', region: 'Grand Est' },
  { slug: 'reims', name: 'Reims', region: 'Grand Est' },
  { slug: 'metz', name: 'Metz', region: 'Grand Est' },
  { slug: 'nancy', name: 'Nancy', region: 'Grand Est' },
  { slug: 'colmar', name: 'Colmar', region: 'Grand Est' },

  // Pays de la Loire
  { slug: 'nantes', name: 'Nantes', region: 'Pays de la Loire' },
  { slug: 'angers', name: 'Angers', region: 'Pays de la Loire' },
  { slug: 'le-mans', name: 'Le Mans', region: 'Pays de la Loire' },
  { slug: 'cholet', name: 'Cholet', region: 'Pays de la Loire' },
  { slug: 'saumur', name: 'Saumur', region: 'Pays de la Loire' },
  { slug: 'la-baule', name: 'La Baule', region: 'Pays de la Loire' },

  // Bretagne
  { slug: 'rennes', name: 'Rennes', region: 'Bretagne' },
  { slug: 'brest', name: 'Brest', region: 'Bretagne' },
  { slug: 'saint-malo', name: 'Saint-Malo', region: 'Bretagne' },
  { slug: 'vannes', name: 'Vannes', region: 'Bretagne' },
  { slug: 'quimper', name: 'Quimper', region: 'Bretagne' },

  // Normandie
  { slug: 'rouen', name: 'Rouen', region: 'Normandie' },
  { slug: 'caen', name: 'Caen', region: 'Normandie' },
  { slug: 'deauville', name: 'Deauville', region: 'Normandie' },

  // Centre-Val de Loire
  { slug: 'tours', name: 'Tours', region: 'Centre-Val de Loire' },
  { slug: 'orleans', name: 'Orléans', region: 'Centre-Val de Loire' },
  { slug: 'blois', name: 'Blois', region: 'Centre-Val de Loire' },

  // Bourgogne-Franche-Comté
  { slug: 'dijon', name: 'Dijon', region: 'Bourgogne-Franche-Comté' },
  { slug: 'beaune', name: 'Beaune', region: 'Bourgogne-Franche-Comté' },
];

// ============================================
// CTA
// ============================================
export const ctaData = {
  title: 'Votre ville ou région n\'est pas listée ?',
  description:
    'Nous intervenons partout en France, contactez-nous pour discuter de votre projet GEO & SEO local.',
  buttonText: 'Nous contacter',
  buttonHref: '/contact',
};
