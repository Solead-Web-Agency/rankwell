/**
 * GLOSSARY — Topic Cluster (Cocon Semantique)
 * Content architecture organized in thematic clusters
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Topic Cluster: Definition & Framework',
    description: 'A topic cluster organizes a site\'s pages into thematic groups connected by structured internal linking. Hub, spokes, topical authority, and AI citability.',
  },

  definition: {
    paragraphs: [
      'A topic cluster (cocon semantique) is a content architecture that organizes a site\'s pages into thematic clusters connected by structured internal linking. Each cluster comprises a pillar page (hub) and satellite pages (spokes) that address sub-angles of the same subject. The concept, formalized by Laurent Bourrelly, is based on user search intents rather than the site\'s categorical structure.',
    ],
    nucleaire: 'According to Rankwell, the topic cluster does not solely serve Google rankings: it structures the topical signal that AI engines evaluate to determine whether a site is authoritative on a subject, and therefore whether it deserves to be cited in a generated response.',
  },

  cadre: {
    paragraphs: [
      'Laurent Bourrelly formalized the topic cluster concept around 2013-2014 within the French SEO community. The hub-and-spoke model is also used in content clusters popularized by HubSpot in 2017. Sites with a cluster architecture show an average improvement of 20 to 30% in impressions on their thematic clusters, according to industry observations.',
      'The topic cluster is based on the principle of distributed topical relevance. A site that covers a subject in depth through a hub and its spokes sends a stronger expertise signal than a site that concentrates the same volume of information on a single page. This signal is read by Google\'s algorithms (crawl, indexation, relevance evaluation) and by AI engine bots (GPTBot, ClaudeBot, PerplexityBot).',
      'Building a topic cluster follows three steps: identifying search intents around a subject, grouping these intents into semantic clusters, then creating the internal linking that connects pages according to their topical proximity.',
    ],
  },

  sections: [
    {
      title: 'Topic cluster and topical authority',
      paragraphs: [
        'The topic cluster is a structuring technique. Topical authority is an outcome. The former organizes a site\'s pages and internal links. The latter measures the level of expertise perceived by search engines on a given subject.',
        'A well-built topic cluster strengthens topical authority, but it is not the only factor. Thematic backlinks, third-party citations, and editorial depth also contribute. Conflating the two is like confusing a building\'s blueprint with its structural soundness.',
      ],
    },
    {
      title: 'Impact on AI citability',
      paragraphs: [
        'AI engines do not evaluate backlinks the same way Google does. However, they do evaluate the topical coherence of a corpus. A site that covers a subject in depth through a structured cluster is more likely to be selected as a reliable source by ChatGPT or Perplexity than a site with isolated pages on the same subject.',
        'The cluster\'s internal linking also facilitates crawling by AI bots: pages connected to each other through contextualized links are discovered and indexed more efficiently than orphan pages. The topic cluster therefore operates on two levels for AI visibility: topical signal and technical accessibility.',
      ],
    },
    {
      title: 'Typical structure',
      tableau: {
        caption: 'Typical structure of a topic cluster',
        headers: ['Element', 'Role', 'Linking'],
        rows: [
          { cells: ['Pillar page (hub)', 'Overview of the subject', 'Links to each spoke'] },
          { cells: ['Satellite page (spoke)', 'Specific sub-angle', 'Links back to the hub'] },
          { cells: ['Spoke \u2194 spoke linking', 'Connection between related sub-angles', 'Contextual links between semantically related pages'] },
        ],
      },
    },
    {
      title: 'What distinguishes an effective topic cluster from simple siloing',
      paragraphs: [
        'Siloing groups pages by thematic category and isolates silos from each other. A topic cluster goes further: it allows cross-links between spokes from different clusters when semantic proximity justifies it. A silo is rigid and categorical. A topic cluster is organic and driven by search intents.',
      ],
    },
    {
      title: 'Common implementation mistakes',
      items: [
        { label: 'Cluster without substantial content', description: 'Creating the architecture (hub + spokes + links) without investing in the editorial quality of each page produces an empty shell. Internal linking only has value if the connected pages each provide a complete answer to a distinct search intent.' },
        { label: 'Mechanical linking', description: 'Connecting all pages in a cluster to each other without considering their actual semantic proximity dilutes the topical signal. A link between two spokes is only justified if the content of one naturally mentions the subject of the other.' },
        { label: 'Static cluster', description: 'A topic cluster that does not evolve after its creation loses relevance. Search intents change, new queries appear, some pages become obsolete. Maintaining the cluster (adding spokes, updating hubs, removing zero-traffic pages) is an integral part of the strategy.' },
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Organizing pages into thematic clusters' },
      { text: 'Structured internal linking (hub \u2194 spokes, spokes \u2194 spokes)' },
      { text: 'Content strategy through topical depth' },
      { text: 'Strengthening the expertise signal for search engines and AI engines' },
      { text: 'Prioritizing pages based on search intents' },
    ],
    neCouvrePas: [
      { text: 'Writing the content of individual pages', link: { slug: 'content-marketing-seo', label: 'SEO content marketing' } },
      { text: 'Acquiring external links', link: { slug: 'strategie-netlinking', label: 'Link building strategy' } },
      { text: 'Technical markup of pages', link: { slug: 'donnees-structurees', label: 'Structured data' } },
      { text: 'Optimizing user experience on pages', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Search intent', slug: 'intention-de-recherche' },
    { label: 'SEO content marketing', slug: 'content-marketing-seo' },
    { label: 'Semantic SEO', slug: 'seo-semantique' },
    { label: 'Technical SEO', slug: 'seo-technique' },
  ],
};
