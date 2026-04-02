/**
 * GLOSSARY — Meta-tags Joomla
 * Managing meta tags in the Joomla CMS
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Meta-tags Joomla: Definition & Framework',
    description: 'Joomla meta-tags are HTML metadata tags configured through the Joomla CMS. Three-level architecture, WordPress/Shopify comparison, and best practices.',
  },

  definition: {
    paragraphs: [
      'Joomla meta-tags are HTML metadata tags configured through the Joomla CMS to communicate information about a page\'s content to search engines. The essential SEO meta-tags (title, meta description, meta robots) are managed in Joomla through the administration interface of each article, category, and menu item.',
    ],
    nucleaire: 'According to Rankwell, managing meta-tags in Joomla requires an understanding of the CMS\'s specific architecture. Unlike WordPress where an SEO plugin centralizes configuration, Joomla distributes meta-tags across global settings, articles, and menu items, creating risks of conflict and duplication.',
  },

  cadre: {
    paragraphs: [
      'Joomla manages meta-tags at three hierarchical levels: the site\'s global configuration, menu items, and individual articles. This layered architecture is a Joomla-specific feature that does not exist in WordPress or Shopify.',
    ],
  },

  sections: [
    {
      title: 'Essential meta-tags and their configuration in Joomla',
      tableau: {
        caption: 'Essential meta-tags and their configuration in Joomla',
        headers: ['Meta-tag', 'SEO Role', 'Joomla Configuration'],
        rows: [
          { cells: ['Title (`<title>` tag)', 'Title displayed in the SERPs and browser tabs', '"Browser Page Title" field in each menu item'] },
          { cells: ['Meta description', 'Description displayed below the title in the SERPs', '"Metadata" tab of each article and menu item'] },
          { cells: ['Meta robots', 'Indexation directive (index/noindex, follow/nofollow)', 'Global configuration + metadata tab per article'] },
          { cells: ['Canonical', 'Canonical URL to prevent duplicate content', 'Natively supported since Joomla 4'] },
        ],
      },
    },
    {
      title: 'Joomla specifics vs WordPress and Shopify',
      paragraphs: [
        'In WordPress, SEO plugins (Yoast, Rank Math, SEOPress) centralize meta-tag management in a single interface per page. In Joomla, a page\'s title is defined in its associated menu item, not in the article. An article without an associated menu item inherits meta-tags from the parent category or global configuration. This indirect logic is the main source of meta-tag errors in Joomla.',
        'Shopify manages meta-tags directly within each page, product, or collection, without any intermediate layer. Joomla is the only major CMS where the title is decoupled from the editorial content.',
      ],
      tableau: {
        caption: 'Meta-tag management by CMS',
        headers: ['CMS', 'Meta-tag Management', 'Main Risk'],
        rows: [
          { cells: ['Joomla', 'Distributed across global config, menus, and articles', 'Conflicts between levels, uncontrolled inheritance'] },
          { cells: ['WordPress', 'Centralized via SEO plugin', 'Dependency on a third-party plugin'] },
          { cells: ['Shopify', 'Integrated by content type (product, page, collection)', 'No control over system pages'] },
        ],
      },
    },
    {
      title: 'Common mistake: the Joomla meta-tag hierarchy',
      paragraphs: [
        'Joomla\'s specificity is that meta-tags are defined at three levels, and the most specific level always takes precedence. The classic mistake: a practitioner modifies the title in the article but forgets that the associated menu item has its own title that may override it depending on the configuration.',
      ],
      tableau: {
        caption: 'Meta-tag hierarchy in Joomla',
        headers: ['Level', 'Definition', 'Priority', 'Risk'],
        rows: [
          { cells: ['Global configuration', 'Site-wide default meta-tags', 'Lowest', 'Unintentional inheritance on all pages without specific meta-tags'] },
          { cells: ['Menu item', 'Meta-tags defined in the menu item', 'Intermediate', 'Overrides global config, often forgotten during modifications'] },
          { cells: ['Article', 'Meta-tags defined in the Metadata tab', 'Highest', 'Only applies if the article is linked to a menu item'] },
        ],
      },
      paragraphsAfter: [
        'An article without an associated menu item does not benefit from article-level priority: it inherits meta-tags from the parent category or global configuration. This inheritance logic is the main source of title and meta description inconsistencies in Joomla.',
      ],
    },
    {
      title: 'Best practices for Joomla',
      paragraphs: [
        'Every page intended for indexation should have an associated menu item with a manually filled title and meta description. The global configuration should not contain a generic meta description (it would be inherited by all pages without a specific meta-tag). Joomla\'s native "Meta Keywords" field has been ignored by Google since 2009 and does not need to be filled. Since Joomla 4 and Joomla 5, canonical markup and Open Graph support are native, reducing dependency on third-party extensions.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Configuring title, meta description, and meta robots tags in Joomla' },
      { text: 'The three-level architecture (global, menu, article) and its implications' },
      { text: 'Management differences compared to WordPress and Shopify' },
      { text: 'Best configuration practices for SEO' },
    ],
    neCouvrePas: [
      { text: 'Editorial content optimization for pages', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Schema.org markup and structured data', link: { slug: 'donnees-structurees', label: 'Structured data' } },
      { text: 'Server-side indexation control', link: { slug: 'x-robots-tag', label: 'X-Robots-Tag' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'X-Robots-Tag', slug: 'x-robots-tag' },
    { label: 'Structured data', slug: 'donnees-structurees' },
    { label: 'Ranking algorithms', slug: 'algorithmes-de-classement' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Technical SEO', slug: 'seo-technique' },
  ],
};
