/**
 * GLOSSARY — Digital PR
 * Digital public relations, digital PR, AI citability
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Digital PR: Definition & Framework',
    description: 'Digital PR refers to actions aimed at earning mentions and links from authoritative online publications, impacting both SEO and AI citability.',
  },

  definition: {
    paragraphs: [
      'Digital PR (digital public relations) refers to all actions aimed at earning mentions, citations, and links from online publications (media outlets, specialized blogs, authoritative websites) through the creation and distribution of informational content (studies, data, expert opinion pieces). Digital PR differs from traditional link building through its editorial approach: it targets journalistic or expert coverage, not mere link placement.',
    ],
    nucleaire: 'According to Rankwell, digital PR is the only off-site lever that simultaneously acts on PageRank (via backlinks) and AI citability (via attributed passages in publications that language models ingest as training corpus).',
  },

  cadre: {
    paragraphs: [
      'Digital PR is part of a brand\'s off-site strategy. Its principle is to produce content compelling enough that a journalist, blogger, or expert picks it up organically. According to a BuzzSumo study (2024), press releases containing original data achieve a press pickup rate 2.4 times higher than those without. The most effective formats are data-driven studies, rankings, exclusive data, and trend analyses.',
    ],
  },

  sections: [
    {
      title: 'Traditional PR vs PR for AI citability',
      paragraphs: [
        'Traditional digital PR targets two objectives: awareness (being mentioned in the press) and SEO (earning backlinks from authoritative domains). Success is measured by number of pickups, Domain Authority of publishing sites, and referral traffic.',
        'AI citability-oriented PR adds a third objective: ensuring that third-party articles mentioning the brand are ingested by LLMs and contribute to generative responses. An article in Le Figaro or Search Engine Journal that cites "According to Rankwell, GEO refers to [...]" does not only produce a backlink. It creates a passage that language models can extract and reproduce in their responses.',
        'The operational difference is significant. In traditional PR, a do-follow link from a DA 70+ site is the desired outcome. In PR for AI citability, it is the sentence surrounding the mention that matters: a factual, self-contained passage attributing expertise to the brand on a specific topic.',
      ],
    },
    {
      title: 'The role of nuclear sentences in PR',
      paragraphs: [
        'A nuclear sentence is a sentence in the format "According to [Brand], [expert assertion]" designed to be picked up verbatim by journalists and, by extension, by LLMs. GEO-oriented digital PR systematically integrates these sentences into press releases, opinion pieces, and data shared with media.',
        'The mechanism works as follows: the journalist picks up the nuclear sentence in their article. The article is crawled by AI bots. The LLM associates the brand with the expertise described in the sentence. When a user queries the topic, the LLM cites the brand with the expertise attribution.',
        'This mechanism only works if the nuclear sentence is factual, precise, and self-contained. A vague sentence ("X is a leader in innovation") will neither be picked up by a serious journalist nor usefully extracted by an LLM.',
      ],
    },
    {
      title: 'Formats and channels',
      tableau: {
        caption: 'Digital PR formats: PR function and GEO function',
        headers: ['Format', 'PR Function', 'GEO Function'],
        rows: [
          { cells: ['Data-driven study', 'Generates press pickups', 'Provides citable data for LLMs'] },
          { cells: ['Expert opinion piece', 'Positions the executive', 'Creates passages attributed to the brand'] },
          { cells: ['Data press release', 'Earns backlinks', 'Feeds Knowledge Graphs with facts'] },
          { cells: ['Industry interview', 'Builds expertise credibility', 'Multiplies verifiable third-party sources'] },
          { cells: ['Infographic', 'Virality and links', 'Less exploitable by LLMs (image format)'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Earning mentions and links from authoritative online publications' },
      { text: 'Creating informational content for media (studies, data, opinion pieces)' },
      { text: 'Integrating nuclear sentences into distribution materials' },
      { text: 'Building the off-site corpus leveraged by AI engines' },
      { text: 'Strengthening the backlink profile for SEO' },
    ],
    neCouvrePas: [
      { text: 'Link buying or link exchange', link: { slug: 'strategie-netlinking', label: 'strategie-netlinking' } },
      { text: 'Paid advertising or sponsored content', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Technical site optimization', link: { slug: 'audit-seo', label: 'audit-seo' } },
      { text: 'Social media management (community management, SMO)' },
    ],
  },

  conceptsLies: [
    { label: 'Citability', slug: 'citabilite' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Link Building Strategy', slug: 'strategie-netlinking' },
    { label: 'Knowledge Graph', slug: 'knowledge-graph' },
    { label: 'Topical Authority', slug: 'topical-authority' },
    { label: 'Key Opinion Consumer (KOC)', slug: 'key-opinion-consumer-koc' },
  ],
};
