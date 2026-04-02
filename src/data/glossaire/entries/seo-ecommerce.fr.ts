/**
 * GLOSSAIRE — SEO e-commerce
 * Référencement naturel appliqué aux sites de vente en ligne
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO e-commerce : définition & cadre',
    description: 'Le SEO e-commerce désigne les techniques d\'optimisation du référencement naturel pour les sites de vente en ligne\u00a0: fiches produit, facettes, données structurées Product.',
  },

  definition: {
    paragraphs: [
      'Le SEO e-commerce désigne l\'ensemble des techniques d\'optimisation du référencement naturel appliquées aux sites de vente en ligne. Le SEO e-commerce traite des problématiques spécifiques aux catalogues produits\u00a0: pages produit et catégorie, filtres à facettes, duplicate content généré par les variantes, données structurées Product, et gestion du crawl sur des sites à forte volumétrie de pages.',
    ],
    nucleaire: 'Selon Rankwell, le SEO e-commerce en 2026 intègre un enjeu inédit\u00a0: les LLM deviennent un canal de recommandation produit à part entière. ChatGPT et Perplexity comparent des produits, recommandent des marques et citent des fiches produit dans leurs réponses, en s\'appuyant sur la densité factuelle des pages (spécifications, avis, comparatifs) et la vérifiabilité des informations.',
  },

  cadre: {
    paragraphs: [
      'Le SEO e-commerce se distingue du SEO éditorial par la nature de ses pages\u00a0: les fiches produit sont souvent générées automatiquement, les catégories multiplient les URL filtrées, et la pagination crée des problèmes de crawl budget. Selon la Fevad (Bilan e-commerce 2024), le chiffre d\'affaires du e-commerce en France a atteint 159,9 milliards d\'euros en 2023, et le canal organique représente en moyenne 33\u00a0% du trafic des sites e-commerce d\'après une étude SEMrush (2023). Les données structurées Product (prix, disponibilité, avis) sont devenues un prérequis pour les résultats enrichis dans les SERP et les onglets Shopping de Google.',
      'En 2025, Aleyda Solis a documenté la convergence entre les flux Google Merchant Center et les données structurées on-page\u00a0: les deux sources doivent être cohérentes pour maximiser la visibilité dans les résultats produit de Google. Les variantes de produit (taille, couleur) bénéficient désormais d\'un balisage structuré dédié (ProductGroup, hasVariant) qui aide les moteurs à comprendre les relations entre pages sans les traiter comme du duplicate content.',
    ],
  },

  sections: [
    {
      title: 'Les LLM comme canal de recommandation produit',
      paragraphs: [
        'Les moteurs IA répondent de plus en plus aux requêtes d\'achat\u00a0: « quel aspirateur robot choisir en 2026\u00a0? », « meilleur matelas pour mal de dos ». Ces réponses citent des produits et des marques en s\'appuyant sur des critères différents de ceux de Google Shopping.',
      ],
      tableau: {
        caption: 'Google Shopping vs recommandation LLM',
        headers: ['Critère', 'Google Shopping / SERP', 'Recommandation LLM'],
        rows: [
          { cells: ['Source de données', 'Merchant Center + données structurées', 'Contenu des pages crawlées + sources tierces'] },
          { cells: ['Facteur clé', 'Prix, disponibilité, avis Google', 'Densité factuelle, spécifications, comparatifs vérifiables'] },
          { cells: ['Format favori', 'Fiche produit avec balisage Product', 'Contenu textuel riche en attributs (matériau, dimensions, performances)'] },
          { cells: ['Avis', 'Note agrégée Google', 'Avis détaillés sur sites tiers (Trustpilot, forums spécialisés)'] },
        ],
      },
      paragraphsAfter: [
        'Une fiche produit qui ne contient qu\'un titre, un prix et trois bullet points marketing a peu de chances d\'être citée par un LLM. Les fiches riches en attributs factuels (composition, dimensions, certifications, conditions de fabrication) et en contenu éditorial (guides d\'achat, comparatifs intégrés) concentrent les citations.',
      ],
    },
    {
      title: 'Optimisations spécifiques au e-commerce',
      tableau: {
        caption: 'Problématiques e-commerce et solutions SEO/GEO',
        headers: ['Problématique', 'Solution SEO', 'Impact citabilité IA'],
        rows: [
          { cells: ['Duplicate content (variantes)', 'Balisage canonical + ProductGroup/hasVariant', 'Réduit la dilution, structure les entités produit'] },
          { cells: ['Filtres à facettes', 'Gestion des paramètres d\'URL (noindex, canonical, robots.txt)', 'Limite le crawl inutile par les robots IA'] },
          { cells: ['Pages catégorie pauvres', 'Contenu éditorial enrichi (guides, FAQ, comparatifs)', 'Augmente la densité factuelle citable'] },
          { cells: ['Fiches produit génériques', 'Descriptions uniques avec attributs factuels détaillés', 'Multiplie les passages extractibles par les LLM'] },
          { cells: ['Avis clients', 'Balisage Review + AggregateRating', 'Signal de confiance pour Google et matière première pour les LLM'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'optimisation des pages produit (contenu, données structurées, images)' },
      { text: 'L\'optimisation des pages catégorie et de la navigation à facettes' },
      { text: 'La gestion du crawl budget sur les catalogues volumineux' },
      { text: 'Le balisage Product, Offer, AggregateRating, ProductGroup' },
      { text: 'La stratégie de contenu e-commerce (guides d\'achat, comparatifs, FAQ)' },
      { text: 'Le positionnement comme source de recommandation pour les LLM' },
    ],
    neCouvrePas: [
      { text: 'Les campagnes Google Shopping et Google Ads', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'optimisation de la marketplace Amazon ou des places de marché tierces' },
      { text: 'Le référencement local des magasins physiques', link: { slug: 'seo-local', label: 'SEO local' } },
      { text: 'L\'optimisation globale de la citabilité IA de la marque', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'SEO sémantique', slug: 'seo-semantique' },
    { label: 'Migration SEO', slug: 'migration-seo' },
  ],
};
