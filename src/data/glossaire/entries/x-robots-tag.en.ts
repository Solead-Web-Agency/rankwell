/**
 * GLOSSARY — X-Robots-Tag
 * HTTP header for indexation control of non-HTML resources
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'X-Robots-Tag: Definition & Framework',
    description: 'The X-Robots-Tag is an HTTP header controlling indexation of non-HTML resources (PDFs, images, APIs). Distinction with meta robots, robots.txt, AI compliance.',
  },

  definition: {
    paragraphs: [
      'The X-Robots-Tag is an HTTP header that controls the indexation and behavior of search engine bots for web resources that are not standard HTML pages. Unlike the `<meta name="robots">` tag which is inserted into a page\'s HTML code, the X-Robots-Tag is applied at the server level via HTTP response headers, allowing it to target PDF files, images, JSON files, or API responses. The X-Robots-Tag was introduced by Google as a proprietary extension of the HTTP protocol; it is not part of W3C standards. Its configuration is done at the server level (Apache, Nginx) or in application code, which requires access to the server configuration.',
    ],
    nucleaire: 'According to Rankwell, the X-Robots-Tag is the only mechanism that controls indexation of non-HTML resources at the individual resource level. The robots.txt blocks crawling of entire files without distinguishing between indexation and access. The meta robots tag only applies to HTML documents. The X-Robots-Tag precisely targets the specific resource (a PDF, an image, a JavaScript file) and allows applying specific indexation directives to it, including per user-agent. This granularity makes it the only tool capable of selectively managing AI bot access to a site\'s non-HTML assets.',
  },

  cadre: {
    paragraphs: [
      'The X-Robots-Tag accepts the same directives as the meta robots tag: `noindex`, `nofollow`, `noarchive`, `nosnippet`, `max-snippet`, `max-image-preview`, `none`. The most common combination of directives for staging environments is `noindex, nofollow`, applied globally to all HTTP responses from the server.',
    ],
  },

  sections: [
    {
      title: 'X-Robots-Tag, meta robots, and robots.txt: three distinct mechanisms',
      paragraphs: [
        'The robots.txt controls whether a bot can access a resource. Meta robots and the X-Robots-Tag control whether an accessible resource should be indexed. A file blocked by robots.txt will not be crawled, but if it is linked from other pages, Google can index it without reading its content. An accessible file bearing an X-Robots-Tag `noindex` will be crawled then excluded from the index.',
      ],
      tableau: {
        caption: 'X-Robots-Tag, meta robots, and robots.txt compared',
        headers: ['Mechanism', 'Action Level', 'Applies To', 'Controls', 'AI Bot Coverage'],
        rows: [
          { cells: ['robots.txt', 'Crawl (access)', 'All file types', 'Allows or blocks bot access to the file', 'GPTBot, ClaudeBot, PerplexityBot, Googlebot-Extended document robots.txt compliance'] },
          { cells: ['Meta robots', 'Indexation (HTML)', 'HTML pages only', 'Indexation directives in the source code', 'Only applicable to HTML pages; not relevant for AI crawlers accessing non-HTML resources'] },
          { cells: ['X-Robots-Tag', 'Indexation (HTTP)', 'All file types (PDF, images, API, HTML)', 'Indexation directives in the HTTP header', 'Only Googlebot and Googlebot-Extended officially document X-Robots-Tag compliance'] },
        ],
      },
    },
    {
      title: 'AI bot compliance with X-Robots-Tag',
      paragraphs: [
        'The official documentation of major AI bots does not systematically mention the X-Robots-Tag. This gap means that for AI bots other than Googlebot-Extended, robots.txt remains the only control mechanism with documented compliance.',
      ],
      tableau: {
        caption: 'AI bot compliance with X-Robots-Tag (early 2026)',
        headers: ['Bot', 'User-Agent', 'X-Robots-Tag Documented', 'Observed Behavior'],
        rows: [
          { cells: ['Googlebot', 'Googlebot', 'Yes (official Google documentation)', 'Full compliance with all X-Robots-Tag directives'] },
          { cells: ['Googlebot-Extended', 'Googlebot-Extended', 'Yes (official Google documentation)', 'Full compliance, used to control Google AI training'] },
          { cells: ['GPTBot', 'GPTBot', 'No. OpenAI documentation mentions robots.txt but does not reference X-Robots-Tag', 'Undocumented behavior for X-Robots-Tag'] },
          { cells: ['ClaudeBot', 'ClaudeBot', 'No. Anthropic documentation covers robots.txt only', 'Undocumented behavior for X-Robots-Tag'] },
          { cells: ['PerplexityBot', 'PerplexityBot', 'No. Perplexity documentation covers robots.txt only', 'Undocumented behavior for X-Robots-Tag'] },
        ],
      },
    },
    {
      title: 'Main use cases',
      items: [
        { label: 'PDF files', description: 'PDFs cannot contain a meta robots tag. The X-Robots-Tag is the only way to control their indexation server-side, without modifying the file itself.' },
        { label: 'Images and media files', description: 'To prevent image indexation in Google Images or visual results without blocking crawling (which would prevent their display on the site).' },
        { label: 'API responses and dynamic pages', description: 'Web applications that generate JSON responses or server-side dynamic pages can use the X-Robots-Tag to exclude these responses from indexation.' },
        { label: 'Staging environments', description: 'Applying an X-Robots-Tag `noindex` to all responses from a pre-production environment protects against accidental indexation.' },
      ],
    },
    {
      title: 'Controlling AI bot access',
      paragraphs: [
        'The X-Robots-Tag allows targeting specific bots. The directive can be prefixed with the user-agent name: `GPTBot: noindex`, `ClaudeBot: noindex`. This granularity allows authorizing indexation by Google while excluding AI bots from certain resources. The robots.txt offers similar granularity at the crawl level, but the X-Robots-Tag acts at the indexation level, providing a second line of control for resources already crawled. However, as documented in the compliance table above, the effectiveness of this directive depends on the targeted bot.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Indexation control via HTTP header for non-HTML files' },
      { text: 'Distinction with meta robots and robots.txt, including AI bot coverage' },
      { text: 'Application to PDF files, images, APIs, and staging environments' },
      { text: 'AI bot targeting by user-agent and documented compliance status' },
    ],
    neCouvrePas: [
      { text: 'Optimizing meta tags in HTML pages', link: { slug: 'meta-tags-joomla', label: 'Meta-tags Joomla' } },
      { text: 'Configuring the robots.txt file' },
      { text: 'Managing crawl budget', link: { slug: 'crawl-budget', label: 'Crawl budget' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Technical SEO', slug: 'seo-technique' },
    { label: 'Meta-tags Joomla', slug: 'meta-tags-joomla' },
    { label: 'Ranking algorithms', slug: 'algorithmes-de-classement' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Crawl budget', slug: 'crawl-budget' },
    { label: 'Indexation', slug: 'indexation' },
  ],
};
