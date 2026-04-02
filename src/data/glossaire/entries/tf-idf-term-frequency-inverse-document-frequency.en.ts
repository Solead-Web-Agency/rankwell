/**
 * GLOSSARY — TF-IDF (Term Frequency-Inverse Document Frequency)
 * Statistical method for measuring term importance
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'TF-IDF (Term Frequency-Inverse Document Frequency): Definition & Framework',
    description: 'TF-IDF is a statistical method measuring the importance of a term within a document relative to a corpus. Calculation, SEO usage, and limitations vs. transformers.',
  },

  definition: {
    paragraphs: [
      'TF-IDF (Term Frequency-Inverse Document Frequency) is a statistical method that measures the relative importance of a term within a document compared to a reference corpus. The TF-IDF score increases proportionally with the term\'s frequency in the document (TF) and decreases proportionally with its frequency across the entire corpus (IDF). A term that is frequent in a document but rare across the corpus receives a high score.',
    ],
    nucleaire: 'According to Rankwell, TF-IDF remains a useful analytical tool for identifying discriminating terms within content, but it no longer reflects how modern ranking algorithms or LLMs work, as these reason in terms of semantic entities and contextual relationships, not term frequencies.',
  },

  cadre: {
    paragraphs: [
      'TF-IDF was formalized by Karen Sparck Jones in 1972 in her paper "A Statistical Interpretation of Term Specificity and Its Application in Retrieval" (Journal of Documentation, 1972). Gerard Salton subsequently integrated and popularized the method within the SMART system at Cornell during the 1980s. The principle relies on two combined components.',
    ],
  },

  sections: [
    {
      title: 'Calculation mechanism',
      paragraphs: [
        'The TF (Term Frequency) component counts the number of occurrences of a term in a document, normalized by the document length. The IDF (Inverse Document Frequency) component calculates the inverse logarithm of the proportion of documents in the corpus containing that term. The product of both yields the TF-IDF score.',
      ],
      tableau: {
        caption: 'TF-IDF components',
        headers: ['Component', 'Measure', 'Interpretation'],
        rows: [
          { cells: ['TF', 'Frequency of the term in the document', 'A term highly present in the document is potentially important for that document'] },
          { cells: ['IDF', 'Rarity of the term in the corpus', 'A rare term in the corpus is more discriminating than a common term'] },
          { cells: ['TF-IDF', 'TF x IDF', 'A term that is frequent locally AND rare globally has strong characterization power'] },
        ],
      },
      paragraphsAfter: [
        'A term like "the" gets a high TF (present everywhere) but a near-zero IDF (present in all documents). Its TF-IDF score is therefore low. A technical term specific to a topic gets a moderate TF and a high IDF: its TF-IDF score will be high.',
      ],
    },
    {
      title: 'Usage in SEO',
      paragraphs: [
        'Content optimization tools (Surfer SEO, Clearscope, YourTextGuru) use TF-IDF variants to compare a text against pages ranking on Google\'s first page. They identify terms that competing pages use frequently and that the analyzed page underuses. This approach helps cover a lexical field expected by search engines, but it does not capture semantic relationships between terms.',
      ],
    },
    {
      title: 'Limitations compared to semantic models',
      paragraphs: [
        'TF-IDF treats each term as an independent unit. It understands neither synonymy ("car" and "automobile"), nor polysemy ("bank" the financial institution vs. "bank" the riverbank), nor contextual relationships between concepts. Modern ranking algorithms (BERT, MUM) and LLMs (GPT, Claude, Gemini) use transformer-based language models that represent words as vectors in a multidimensional semantic space. These models understand context, intent, and relationships between entities.',
        'TF-IDF measures the statistical relevance of a term. Transformers measure the semantic relevance of a passage. Content optimized solely through TF-IDF risks covering the right terms without producing a semantically coherent text. Content structured around entities and contextual relationships will be better understood by modern search engines and LLMs, regardless of the exact frequency of each term.',
      ],
      tableau: {
        caption: 'TF-IDF vs semantic models (transformers)',
        headers: ['Criterion', 'TF-IDF', 'Semantic models (transformers)'],
        rows: [
          { cells: ['Unit of analysis', 'Isolated term', 'Contextual passage'] },
          { cells: ['Understands synonymy', 'No', 'Yes'] },
          { cells: ['Understands intent', 'No', 'Yes'] },
          { cells: ['Used by Google (2026)', 'One component among many', 'Foundation of ranking'] },
          { cells: ['Used by LLMs', 'No', 'Yes (native transformer architecture)'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Statistical measurement of term importance within a document' },
      { text: 'Identifying discriminating terms relative to a corpus' },
      { text: 'Comparative lexical field analysis between competing pages' },
      { text: 'Usage in SEO content optimization tools' },
    ],
    neCouvrePas: [
      { text: 'Semantic understanding of content', link: { slug: 'coherence-semantique', label: 'Cohérence sémantique' } },
      { text: 'How language models (LLMs) and transformers work' },
      { text: 'Optimizing citability by AI engines', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Relevance scoring in modern Google ranking algorithms', link: { slug: 'algorithmes-de-classement', label: 'Algorithmes de classement' } },
    ],
  },

  conceptsLies: [
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'Cohérence sémantique', slug: 'coherence-semantique' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'GEO', slug: 'geo' },
  ],
};
