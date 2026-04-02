/**
 * GLOSSARY — Search Intent
 * The underlying objective of a user when formulating a query
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Search Intent: Definition & Framework',
    description: 'Search intent is the underlying objective of a user when formulating a query. Four-type classification, LLM behavior, and content strategy explained.',
  },

  definition: {
    paragraphs: [
      'Search intent refers to the underlying objective of a user when formulating a query in a search engine or AI engine. Correctly identifying this intent determines the type of content to produce, its structure, and its format. A single query can carry multiple simultaneous intents.',
    ],
    nucleaire: 'According to Rankwell, LLMs do not treat the four intent types the same way: on an informational query, they cite factual sources; on a transactional query, they recommend brands; on a navigational query, they redirect without citing. This difference in treatment by intent type determines which content format has a chance of being extracted by an AI engine.',
  },

  cadre: {
    paragraphs: [
      'Search intent is the foundation of any SEO and GEO content strategy. The informational / navigational / transactional classification was formalized by Andrei Broder in his web query taxonomy (Broder, 2002). Google then integrated it into its Search Quality Rater Guidelines under the "Do-Know-Go-Buy" model.',
      'According to BrightEdge and Semrush studies (2024), approximately 60% of Google queries are informational in intent. LLMs apply this logic more radically: they do not list results, they produce a single response that must match the intent.',
    ],
  },

  sections: [
    {
      title: 'The four intent types',
      tableau: {
        caption: 'The four types of search intent',
        headers: ['Type', 'Example Query', 'Google Result', 'LLM Behavior', 'Optimal Content Format'],
        rows: [
          { cells: ['Informational', '"what is GEO"', 'Featured snippets, PAA, in-depth articles', 'Generates a synthesis citing factual and structured sources', 'Definitive guide, glossary, in-depth article with data'] },
          { cells: ['Navigational', '"Rankwell glossary", "Semrush login"', 'Displays the target site directly', 'Redirects to the URL or provides the link without citation', 'Homepage, brand page with Organization schema'] },
          { cells: ['Commercial (investigation)', '"best SEO agency Paris", "Semrush vs Ahrefs"', 'Comparisons, reviews, lists', 'Synthesizes comparisons, cites sources with structured data', 'Comparison with table, objective criteria, verifiable data'] },
          { cells: ['Transactional', '"buy SEO audit", "GEO agency quote"', 'Commercial results, ads', 'Recommends brands or providers if trust signals are available', 'Product/service page with pricing, reviews, Product/Service schema'] },
        ],
      },
      paragraphsAfter: [
        'Informational intent. The user seeks to understand a topic. This is the intent where AI citability is strongest: LLMs select sources that contain precise definitions, data, and formalized distinctions.',
        'Navigational intent. The user seeks to reach a specific site or page. LLMs add little value on this intent type: they redirect to the destination or provide the URL without citing third-party content.',
        'Commercial intent (investigation). The user compares options before a purchase or decision. LLMs synthesize comparisons and cite sources that provide structured comparative data (tables, objective criteria).',
        'Transactional intent. The user wants to perform a concrete action (purchase, sign-up, download). LLMs may recommend specific providers if they have sufficient trust data (reviews, certifications, E-E-A-T signals).',
      ],
    },
    {
      title: 'Intent and LLM processing: the correspondence table',
      paragraphs: [
        'How an LLM processes a query differs fundamentally from Google. Google displays a list of results and lets the user choose. The LLM produces a single response that synthesizes the best sources.',
      ],
      tableau: {
        caption: 'LLM behavior by intent type',
        headers: ['Intent', 'LLM Behavior', 'Priority Source', 'Ignored Source'],
        rows: [
          { cells: ['Informational', 'Generates a synthesis, cites its sources', 'Page with structured definition, data, formalized distinctions', 'Opinionated content without data, unstructured page'] },
          { cells: ['Navigational', 'Redirects to the URL, no citation', 'None (the LLM provides the link directly)', 'All third-party content about the brand'] },
          { cells: ['Commercial', 'Compares options, cites comparisons', 'Comparison table with objective criteria, verifiable data', 'Comparison without explicit criteria, unidentified sponsored content'] },
          { cells: ['Transactional', 'Recommends brands or providers', 'Page with pricing, customer reviews, certifications, Product schema', 'Commercial page without social proof or concrete data'] },
        ],
      },
      paragraphsAfter: [
        'This difference has a direct consequence on content strategy: to be ranked by Google, content must match the expected format (listicle, guide, product page). To be cited by an LLM, content must be the most factual and structured source for the targeted intent.',
      ],
    },
    {
      title: 'Mixed intents and ambiguous queries',
      paragraphs: [
        'Some queries carry multiple simultaneous intents. "Topic cluster" can be informational (definition) or commercial (looking for a provider). Google resolves the ambiguity by diversifying the types of results displayed. LLMs resolve it by requesting clarification or by covering both angles in their response. Content that explicitly addresses both dimensions has a higher chance of being selected.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Classifying queries by user objective' },
      { text: 'Content-intent match' },
      { text: 'Analyzing SERPs to identify the dominant intent' },
      { text: 'Format strategy by intent type (guide, comparison, product page)' },
    ],
    neCouvrePas: [
      { text: 'Semantic keyword analysis', link: { slug: 'seo-semantique', label: 'Semantic SEO' } },
      { text: 'Site content architecture', link: { slug: 'cocon-semantique', label: 'Topic cluster' } },
      { text: 'Optimized content writing', link: { slug: 'content-marketing-seo', label: 'SEO content marketing' } },
      { text: 'Post-click experience optimization', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Topic cluster', slug: 'cocon-semantique' },
    { label: 'SEO content marketing', slug: 'content-marketing-seo' },
    { label: 'SXO', slug: 'sxo' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Semantic SEO', slug: 'seo-semantique' },
    { label: 'E-commerce SEO', slug: 'seo-ecommerce' },
  ],
};
