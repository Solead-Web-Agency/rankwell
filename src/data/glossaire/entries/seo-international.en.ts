/**
 * GLOSSARY — International SEO
 * Multi-country and multilingual search engine optimization
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'International SEO: Definition & Framework',
    description: 'International SEO covers optimization techniques for ranking a website across multiple countries or language regions: hreflang, localization, and multi-engine strategy.',
  },

  definition: {
    paragraphs: [
      'International SEO refers to all optimization techniques aimed at ranking a website in search results across multiple countries or language regions. International SEO addresses site structure (ccTLD, subdomains, subdirectories), hreflang markup, content localization, and adaptation to the specifics of each market.',
    ],
    nucleaire: 'According to Rankwell, international SEO in 2026 is inherently a multi-engine visibility challenge: each geographic market has its own search ecosystem (Google in Europe, Baidu in China, Naver in South Korea, Yandex in Russia), and AI engines add an additional layer where language and local entities determine citation in generative responses.',
  },

  cadre: {
    paragraphs: [
      'International SEO rests on two axes: geographic targeting (reaching users in a specific country) and language targeting (reaching users of a specific language, regardless of their location). These two axes translate into technical choices (site structure, markup) and editorial choices (content localization).',
      'Hreflang markup, introduced by Google in 2011, remains the standard for indicating to search engines the language and country targeted by each version of a page. Hreflang implementation errors are among the most frequent technical issues: missing tags, lack of reciprocity between versions, or confusion between language and country (French from France is not Canadian French).',
    ],
  },

  sections: [
    {
      title: 'Multi-engine visibility by market',
      paragraphs: [
        'International SEO cannot be limited to Google optimization. Each market has its own specifics in terms of dominant search engines and user behavior.',
      ],
      tableau: {
        caption: 'Dominant search engines by market',
        headers: ['Market', 'Dominant engine', 'Estimated market share', 'Specifics'],
        rows: [
          { cells: ['Europe (FR, DE, UK, ES)', 'Google', '> 90%', 'AI Overviews being rolled out'] },
          { cells: ['China', 'Baidu', '~ 60%', 'Local hosting required, ICP license'] },
          { cells: ['South Korea', 'Naver', '~ 55%', 'Closed ecosystem, Naver Blog essential'] },
          { cells: ['Russia', 'Yandex', '~ 55%', 'Behavioral factors predominant'] },
          { cells: ['Japan', 'Google + Yahoo Japan', '~ 95% combined', 'Yahoo Japan uses Google, but distinct UX'] },
        ],
      },
      paragraphsAfter: [
        'AI engines add an additional dimension. ChatGPT, Perplexity, and Gemini respond in the query language and cite sources in that language. A site without a localized version in the target language has little chance of being cited by an LLM for a query in that language.',
      ],
    },
    {
      title: 'Technical structure: three approaches',
      tableau: {
        caption: 'Multi-country site structures compared',
        headers: ['Structure', 'Example', 'Advantage', 'Disadvantage'],
        rows: [
          { cells: ['ccTLD', 'example.fr, example.de', 'Strong geographic signal', 'Fragmented domain authority'] },
          { cells: ['Subdomain', 'fr.example.com', 'Separate technical management', 'Weaker geographic signal'] },
          { cells: ['Subdirectory', 'example.com/fr/', 'Consolidated domain authority', 'Mandatory hreflang configuration'] },
        ],
      },
      paragraphsAfter: [
        'The choice depends on strategy: ccTLDs send the clearest geographic signal but fragment domain authority. Subdirectories consolidate authority but require rigorous hreflang implementation.',
      ],
    },
    {
      title: 'International SEO and multi-language AI visibility',
      paragraphs: [
        'LLMs do not process all languages with the same depth. ChatGPT and Claude have a significantly richer English-language corpus than their French, Spanish, or German corpora. A brand present only in French is structurally disadvantaged in English-language responses.',
        'International SEO optimization for AI visibility involves publishing content in each target language, not just translating meta tags. Named entities (brands, products, concepts) must appear in content natively written in each language for LLMs to associate them with queries in that language.',
        'AI bots (GPTBot, ClaudeBot, PerplexityBot) do not necessarily respect hreflang markup. They crawl all accessible language versions and treat them as distinct content. Content localization therefore serves a dual purpose: signaling geographic relevance to Google via hreflang, and feeding LLMs with corpora in each target language.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Choosing the multi-country/multi-language site structure' },
      { text: 'Implementing and validating hreflang markup' },
      { text: 'Content localization (linguistic and cultural adaptation)' },
      { text: 'Optimization for local search engines (Baidu, Naver, Yandex)' },
      { text: 'Managing geographic signals (Search Console, hosting, CDN)' },
    ],
    neCouvrePas: [
      { text: 'City-level local search optimization', link: { slug: 'seo-local', label: 'SEO local' } },
      { text: 'Raw translation without localization or SEO adaptation' },
      { text: 'International paid advertising campaign management', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Specific AI engine optimization', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'SEO local', slug: 'seo-local' },
    { label: 'Migration SEO', slug: 'migration-seo' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
  ],
};
