/**
 * GLOSSAIRE — EAV (Entity Attribute Value)
 * Modèle de données en triplets, Knowledge Graphs, structuration SEO/GEO
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'EAV (Entity Attribute Value) : définition & cadre',
    description: 'Le modèle EAV représente l\'information en triplets entité-attribut-valeur, socle des Knowledge Graphs et de la structuration de contenu pour le SEO et le GEO.',
  },

  definition: {
    paragraphs: [
      'Le modèle EAV (Entity Attribute Value) désigne une structure de données qui représente l\'information sous forme de triplets\u00a0: une entité (le sujet), un attribut (la propriété) et une valeur (le fait associé). Initialement conçu pour les bases de données à schéma variable (médecine, e-commerce, catalogues produits), ce modèle permet de stocker des propriétés hétérogènes sans modifier la structure de la base.',
    ],
    nucleaire: 'Selon Rankwell, le modèle EAV constitue le socle implicite de la façon dont les LLM structurent et restituent l\'information. Chaque fait cité dans une réponse générative correspond à un triplet entité-attribut-valeur extrait des sources d\'entraînement ou de navigation.',
  },

  cadre: {
    paragraphs: [
      'Le modèle EAV trouve son origine dans les systèmes de gestion de données cliniques des années 1990, où chaque patient (entité) se voyait associer des observations (attributs) avec leurs mesures (valeurs). Le principe a été adopté par les plateformes e-commerce (Magento, par exemple) pour gérer des catalogues aux attributs variables selon les catégories de produits.',
      'En base de données relationnelle classique, chaque attribut occupe une colonne fixe. Le modèle EAV remplace cette rigidité par une table unique à trois colonnes (entité, attribut, valeur), ce qui permet d\'ajouter des propriétés sans migration de schéma. Cette flexibilité a un coût\u00a0: les requêtes deviennent plus complexes et les performances se dégradent sur de grands volumes.',
    ],
  },

  sections: [
    {
      title: 'EAV et Knowledge Graphs\u00a0: le même paradigme',
      paragraphs: [
        'Les Knowledge Graphs (Wikidata, Google Knowledge Graph) reposent sur des triplets RDF\u00a0: sujet-prédicat-objet. Ce formalisme est une généralisation du modèle EAV\u00a0: l\'entité devient le sujet, l\'attribut devient le prédicat, la valeur devient l\'objet. Wikidata, la plus grande base de connaissances ouverte, contenait plus de 115 millions d\'éléments et 1,6 milliard de déclarations (triplets) en 2024 (Wikimedia Foundation, 2024).',
        'Comprendre le modèle EAV, c\'est comprendre la brique fondamentale des graphes de connaissances qui alimentent les moteurs de recherche et les moteurs IA.',
      ],
    },
    {
      title: 'Application à la structuration SEO et GEO',
      paragraphs: [
        'Un contenu structuré selon la logique EAV facilite l\'extraction par les crawlers et les LLM. Un tableau qui associe une entité (marque, produit, concept) à des attributs (fondation, siège, spécialité) et des valeurs (2015, Paris, SEO) produit des passages directement exploitables par un moteur IA. Les données structurées Schema.org suivent cette même logique\u00a0: chaque propriété d\'un type (Organization → foundingDate → 2015) est un triplet EAV.',
        'Les LLM ne lisent pas les bases de données. Ils lisent du texte. Mais le texte dont ils extraient le plus efficacement des faits est celui qui reproduit implicitement la structure entité-attribut-valeur\u00a0: des phrases courtes, un sujet explicite, un attribut nommé, une valeur factuelle.',
      ],
      tableau: {
        caption: 'Modèle EAV classique vs application SEO/GEO',
        headers: ['Élément', 'Modèle EAV classique', 'Application SEO/GEO'],
        rows: [
          { cells: ['Entité', 'Ligne dans la table', 'Marque, produit, concept'] },
          { cells: ['Attribut', 'Colonne dynamique', 'Propriété Schema.org, champ de données'] },
          { cells: ['Valeur', 'Cellule', 'Fait vérifiable, chiffre, date'] },
          { cells: ['Structure', 'Base de données', 'Tableau HTML, JSON-LD, paragraphe factuel'] },
        ],
      },
    },
    {
      title: 'Limites du modèle EAV',
      paragraphs: [
        'Le modèle EAV n\'est pas adapté à tous les cas. En base de données, il pose des problèmes de performance sur les jointures massives et complique la validation des types de données. En SEO, un contenu intégralement structuré en triplets sans contextualisation narrative perd en lisibilité humaine. Le modèle EAV est un outil de structuration de l\'information, pas un format de publication.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La représentation de données hétérogènes en triplets entité-attribut-valeur' },
      { text: 'La structuration de catalogues produits et de bases de données à schéma variable' },
      { text: 'Le lien avec les Knowledge Graphs et les triplets RDF' },
      { text: 'L\'application à la structuration de contenu pour le SEO et la citabilité IA' },
    ],
    neCouvrePas: [
      { text: 'La modélisation relationnelle classique (tables à colonnes fixes)' },
      { text: 'Le balisage Schema.org en tant que tel', link: { slug: 'donnees-structurees', label: 'Données structurées' } },
      { text: 'La construction d\'un Knowledge Graph de marque', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
