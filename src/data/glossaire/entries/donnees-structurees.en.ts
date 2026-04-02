/**
 * GLOSSARY — Structured Data (Schema.org)
 * Semantic markup for SEO and AI visibility
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Structured Data (Schema.org): Definition & Framework',
    description: 'Structured data is markup added to HTML to describe content to search engines and AI systems. Schema.org vocabulary, JSON-LD, and SEO/GEO impact explained.',
  },

  definition: {
    paragraphs: [
      'Structured data refers to a markup format added to a web page\'s HTML code to explicitly describe its content to search engines and artificial intelligence systems. The standard vocabulary is Schema.org, a shared repository maintained by Google, Microsoft, Yahoo, and Yandex since 2011. The recommended implementation format is JSON-LD, embedded within the `<script>` tag of the source code.',
    ],
    nucleaire: 'According to Rankwell, structured data serves a dual purpose: it feeds Google\'s rich results (rich snippets, FAQ, reviews) and provides LLMs with an explicit semantic comprehension layer that facilitates factual extraction. A properly marked-up `DefinedTerm` type becomes an entity directly ingestible by an AI engine.',
  },

  cadre: {
    paragraphs: [
      'Structured data transforms implicit content into explicit information. Without markup, a search engine must infer that a text discusses a product, its price, and its reviews. With `Product`, `Offer`, and `AggregateRating` markup, the information is declared unambiguously.',
      'Google uses structured data to generate rich results in the SERPs: review stars, expandable FAQs, breadcrumbs, events, recipes. Eligibility for rich results depends on the Schema.org type used and compliance with Google Search Central guidelines.',
      'According to a Milestone Research study (2024), pages implementing structured data achieve an average CTR 40% higher than standard results. Additionally, W3C Techs (2025) estimates that 45% of the top 10 million most visited sites use at least one Schema.org markup in JSON-LD.',
    ],
  },

  sections: [
    {
      title: 'Schema.org types and their function',
      tableau: {
        caption: 'Schema.org types and their function',
        headers: ['Schema.org Type', 'Function', 'SEO Impact', 'GEO Impact'],
        rows: [
          { cells: ['`Article` / `NewsArticle`', 'Identifies editorial content', 'Eligibility for Top Stories, news feed', 'Provides metadata (author, date) that LLMs use to assess freshness'] },
          { cells: ['`FAQPage`', 'Marks up question/answer pairs', 'FAQ rich snippet in the SERPs', 'Q/A pairs are directly extractable by LLMs for conversational responses'] },
          { cells: ['`Product` + `Offer`', 'Describes a product with price and availability', 'Shopping rich snippet, Merchant Center eligibility', 'Enables LLMs to cite verifiable product attributes (price, features)'] },
          { cells: ['`DefinedTerm`', 'Formalizes a canonical definition', 'No dedicated rich snippet', 'Explicitly signals to the LLM that a passage is a definition, facilitating direct citation'] },
          { cells: ['`Organization` + `Brand`', 'Describes an entity (company, brand)', 'Knowledge Panel', 'Strengthens entity identity in LLM Knowledge Graphs'] },
          { cells: ['`HowTo`', 'Structures a step-by-step process', 'How-to rich snippet', 'Numbered steps are a format naturally cited by LLMs'] },
        ],
      },
    },
    {
      title: 'Structured data and AI visibility: the GEO bridge',
      paragraphs: [
        'AI engines do not read structured data the same way Google does. Googlebot indexes JSON-LD to generate rich results. GPTBot and AI bots crawl raw HTML and textual content, and do not necessarily process JSON-LD as a markup instruction.',
        'However, structured data produces an indirect effect on AI citability. Content marked up with `DefinedTerm` or `FAQPage` is generally structured as self-contained passages (a definition, a question/answer pair), which matches the format that LLMs extract most easily. The markup enforces a structural rigor that benefits both SEO and GEO.',
        'Entities marked up with `Organization` and `Brand` contribute to the brand\'s presence in Google\'s Knowledge Graph, which is one of the truth sources used by AI Overviews.',
      ],
    },
    {
      title: 'Three common implementation mistakes',
      tableau: {
        caption: 'Three common structured data implementation mistakes',
        headers: ['Mistake', 'Consequence', 'Fix'],
        rows: [
          { cells: ['Invisible markup (structured data without corresponding visible content on the page)', 'Violation of Google guidelines, risk of manual penalty', 'Marked-up content must be visible to the user'] },
          { cells: ['Over-markup (50+ types on a single page)', 'Signal dilution, no type is treated as primary', 'Limit to types relevant to the actual page content'] },
          { cells: ['`FAQPage` on non-FAQ pages', 'Google restricted eligibility to government and health sites in 2023', 'Reserve `FAQPage` for pages that genuinely contain frequently asked questions'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Semantic markup of web content using the Schema.org vocabulary' },
      { text: 'Eligibility for rich results in Google Search' },
      { text: 'Explicit description of entities (organizations, products, people, concepts)' },
      { text: 'JSON-LD as the recommended implementation format' },
    ],
    neCouvrePas: [
      { text: 'The content itself (markup describes content, it does not replace it)' },
      { text: 'Internal linking and site architecture', link: { slug: 'cocon-semantique', label: 'topic cluster' } },
      { text: 'Page load speed optimization', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'Content strategy for AI engines', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Citability', slug: 'citabilite' },
  ],
};
