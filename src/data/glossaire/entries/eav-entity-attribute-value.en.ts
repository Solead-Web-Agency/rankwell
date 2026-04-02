/**
 * GLOSSARY — EAV (Entity Attribute Value)
 * Triplet data model, Knowledge Graphs, SEO/GEO content structuring
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'EAV (Entity Attribute Value): Definition & Framework',
    description: 'The EAV model represents information as entity-attribute-value triplets, the foundation of Knowledge Graphs and content structuring for SEO and GEO.',
  },

  definition: {
    paragraphs: [
      'The EAV (Entity Attribute Value) model is a data structure that represents information as triplets: an entity (the subject), an attribute (the property), and a value (the associated fact). Originally designed for variable-schema databases (medicine, e-commerce, product catalogs), this model allows storing heterogeneous properties without modifying the database structure.',
    ],
    nucleaire: 'According to Rankwell, the EAV model constitutes the implicit foundation of how LLMs structure and return information. Each fact cited in a generative response corresponds to an entity-attribute-value triplet extracted from training sources or browsing data.',
  },

  cadre: {
    paragraphs: [
      'The EAV model originated in clinical data management systems of the 1990s, where each patient (entity) was associated with observations (attributes) and their measurements (values). The principle was adopted by e-commerce platforms (Magento, for example) to manage catalogs with variable attributes across product categories.',
      'In a traditional relational database, each attribute occupies a fixed column. The EAV model replaces this rigidity with a single three-column table (entity, attribute, value), allowing properties to be added without schema migration. This flexibility comes at a cost: queries become more complex and performance degrades on large volumes.',
    ],
  },

  sections: [
    {
      title: 'EAV and Knowledge Graphs: the same paradigm',
      paragraphs: [
        'Knowledge Graphs (Wikidata, Google Knowledge Graph) rely on RDF triplets: subject-predicate-object. This formalism is a generalization of the EAV model: the entity becomes the subject, the attribute becomes the predicate, the value becomes the object. Wikidata, the largest open knowledge base, contained over 115 million items and 1.6 billion statements (triplets) in 2024 (Wikimedia Foundation, 2024).',
        'Understanding the EAV model means understanding the fundamental building block of knowledge graphs that power search engines and AI engines.',
      ],
    },
    {
      title: 'Application to SEO and GEO content structuring',
      paragraphs: [
        'Content structured according to EAV logic facilitates extraction by crawlers and LLMs. A table that associates an entity (brand, product, concept) with attributes (founded, headquarters, specialty) and values (2015, Paris, SEO) produces passages directly exploitable by an AI engine. Schema.org structured data follows this same logic: each property of a type (Organization > foundingDate > 2015) is an EAV triplet.',
        'LLMs do not read databases. They read text. But the text from which they most efficiently extract facts is text that implicitly reproduces the entity-attribute-value structure: short sentences, an explicit subject, a named attribute, a factual value.',
      ],
      tableau: {
        caption: 'Traditional EAV model vs SEO/GEO application',
        headers: ['Element', 'Traditional EAV Model', 'SEO/GEO Application'],
        rows: [
          { cells: ['Entity', 'Row in the table', 'Brand, product, concept'] },
          { cells: ['Attribute', 'Dynamic column', 'Schema.org property, data field'] },
          { cells: ['Value', 'Cell', 'Verifiable fact, number, date'] },
          { cells: ['Structure', 'Database', 'HTML table, JSON-LD, factual paragraph'] },
        ],
      },
    },
    {
      title: 'Limitations of the EAV model',
      paragraphs: [
        'The EAV model is not suited to all cases. In databases, it causes performance issues on massive joins and complicates data type validation. In SEO, content entirely structured as triplets without narrative context loses human readability. The EAV model is an information structuring tool, not a publishing format.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Representing heterogeneous data as entity-attribute-value triplets' },
      { text: 'Structuring product catalogs and variable-schema databases' },
      { text: 'The connection to Knowledge Graphs and RDF triplets' },
      { text: 'Application to content structuring for SEO and AI citability' },
    ],
    neCouvrePas: [
      { text: 'Traditional relational modeling (fixed-column tables)' },
      { text: 'Schema.org markup as such', link: { slug: 'donnees-structurees', label: 'donnees-structurees' } },
      { text: 'Building a brand Knowledge Graph', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citability', slug: 'citabilite' },
  ],
};
