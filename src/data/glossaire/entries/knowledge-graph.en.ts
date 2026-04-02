/**
 * GLOSSARY — Knowledge Graph
 * Structured entity-relationship database
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Knowledge Graph: Definition & Framework',
    description: 'A Knowledge Graph is a structured database organizing information as entities and relationships. Role in SERPs, LLMs, and AI citability explained.',
  },

  definition: {
    paragraphs: [
      'A Knowledge Graph is a structured database that organizes information as entities (people, places, brands, concepts) and relationships between those entities. Google introduced its Knowledge Graph in 2012 to enrich search results with factual information displayed directly in the SERPs, as Knowledge Panels and informational boxes.',
    ],
    nucleaire: 'According to Rankwell, the Knowledge Graph is the foundation of AI citability: generative engines prioritize citing brands whose entity graph is rich, consistent, and supported by verifiable third-party sources.',
  },

  cadre: {
    paragraphs: [
      'The Knowledge Graph relies on the principle of semantic search. Instead of matching keywords to pages, the engine identifies entities present in the query and connects them to facts stored in its graph. A search for "founder of Tesla" does not look for pages containing those words: it resolves the entity "Tesla" then follows the "founder" relationship to return "Elon Musk."',
      'This entity-relationship model has become the foundation of automated answers: AI Overviews, Featured Snippets, and LLM conversational responses all rely on knowledge graphs to verify and structure their answers.',
    ],
  },

  sections: [
    {
      title: 'Google Knowledge Graph vs brand Knowledge Graph',
      paragraphs: [
        'The term "Knowledge Graph" covers two distinct realities that need to be separated.',
        'The Google Knowledge Graph is Google\'s internal database. At its launch in 2012, it contained 500 million entities and 3.5 billion facts (Google, 2012). By 2024, it exceeds 5 billion interconnected entities, fed by Wikidata, Wikipedia, Data Commons, and structured data from websites. A brand is included if Google has identified it as an entity, which manifests as a Knowledge Panel in the SERPs.',
        'A brand\'s Knowledge Graph refers to the set of entities, attributes, and relationships that search engines (Google and LLMs) associate with that brand. It is not limited to Google: it includes the information that ChatGPT, Perplexity, or Gemini "know" about the brand. This graph is built through on-site content (structured data, factual pages), off-site sources (third-party articles, directories, PR), and the consistency of information across these sources.',
        'A brand may have a Google Knowledge Panel without being cited by LLMs. Conversely, a brand abundantly mentioned in sources that LLMs ingest may be cited in conversational responses without having a Knowledge Panel.',
      ],
    },
    {
      title: 'Entities and attributes',
      paragraphs: [
        'A Knowledge Graph consists of three elements:',
      ],
      tableau: {
        caption: 'Components of a Knowledge Graph',
        headers: ['Element', 'Function', 'Example'],
        rows: [
          { cells: ['Entity', 'Node of the graph, i.e., an identifiable object', '"Rankwell", "GEO", "Paris"'] },
          { cells: ['Attribute', 'Property of an entity', '"Founded: 2018", "Industry: digital marketing"'] },
          { cells: ['Relationship', 'Link between two entities', '"Rankwell -> specializes in -> GEO"'] },
        ],
      },
      paragraphsAfter: [
        'The density and accuracy of these three elements determine the depth of the graph. A sparse graph (few attributes, vague relationships) produces generic answers. A dense graph (quantified attributes, explicit relationships) feeds detailed and cited answers.',
      ],
    },
    {
      title: 'GEO bridge: the Knowledge Graph as an AI citability lever',
      paragraphs: [
        'LLMs do not query Google\'s Knowledge Graph in real time. They build their own entity representations from the corpora they were trained on and, for some (Perplexity, ChatGPT with browsing), from the live web.',
        'The consequence for GEO is direct: enriching a brand\'s Knowledge Graph amounts to multiplying the entry points through which an LLM can cite it. Every properly documented entity (dedicated page, structured data, mention in a third-party source) increases the probability that an AI engine associates that brand with the corresponding topic.',
        'Knowledge Graph work in GEO differs from traditional SEO on one key point: in SEO, the goal is for a page to appear in search results. In GEO, the goal is for the brand to be recognized as a legitimate entity on a topic, regardless of any specific page.',
      ],
    },
    {
      title: 'Structured data and the Knowledge Graph',
      paragraphs: [
        'Structured data (Schema.org) is the technical channel through which a site communicates its entities to Google. Organization, Product, Person, or DefinedTerm markup explicitly declares entities and their attributes. Without this markup, Google must infer them from text, which is less reliable.',
        'For LLMs, structured data plays an indirect role: it is crawled by AI bots (GPTBot, PerplexityBot) and helps structure the information the model ingests.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Organizing information as entities, attributes, and relationships' },
      { text: 'Google Knowledge Panels and informational boxes in SERPs' },
      { text: 'Schema.org structured data as a channel for feeding the graph' },
      { text: 'Mapping entities associated with a brand by AI engines' },
      { text: 'The link between entity density and LLM citability', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'Optimizing rankings in traditional search results', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Writing keyword-optimized content', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'Measuring AI visibility scores', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'Link acquisition strategy', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
    { label: 'EAV (Entity Attribute Value)', slug: 'eav-entity-attribute-value' },
  ],
};
