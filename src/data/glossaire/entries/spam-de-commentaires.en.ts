/**
 * GLOSSARY — Comment Spam
 * Unsolicited comments, link manipulation, prevention
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Comment Spam: Definition & Framework',
    description: 'Comment spam refers to the mass posting of unsolicited comments on blogs and forums to manipulate a site\'s link profile and degrade quality signals.',
  },

  definition: {
    paragraphs: [
      'Comment spam refers to the mass posting of unsolicited comments on blogs, forums, and websites, typically with the goal of inserting outbound links to third-party sites. These comments are produced by automated bots or manual spam operators and aim to manipulate the link profile of target sites to gain PageRank or referral traffic.',
    ],
    nucleaire: 'According to Rankwell, comment spam is not merely a technical nuisance. It constitutes a passive negative SEO vector that degrades a site\'s perceived quality by search engines and LLMs, by associating the domain with unreliable content.',
  },

  cadre: {
    paragraphs: [
      'Comment spam has existed since the early days of the participatory web. In 2005, Google introduced the rel="nofollow" attribute to allow publishers to signal that links in comments should not pass PageRank. In 2019, Google added two complementary attributes: rel="ugc" (User Generated Content) for user-generated content and rel="sponsored" for commercial links.',
    ],
    tableau: {
      caption: 'SEO impact of comment spam',
      headers: ['Impact', 'Mechanism', 'Risk'],
      rows: [
        { cells: ['Relevance dilution', 'Spam links point to off-topic sites', 'The search engine associates the host site with irrelevant topics'] },
        { cells: ['Degraded quality signal', 'A site with hundreds of spam comments appears poorly moderated', 'Quality algorithms (Helpful Content) may penalize the site'] },
        { cells: ['Malicious content injection', 'Some comments contain code or redirects', 'Security risk for visitors and potential Google manual action'] },
        { cells: ['Degraded user experience', 'Spam comments harm readability', 'Increased bounce rate, negative engagement signal'] },
      ],
    },
  },

  sections: [
    {
      title: 'Comment spam vs negative SEO: the distinction',
      paragraphs: [
        'Comment spam is a massive, opportunistic manipulation technique: bots target all sites with open comments, without intent to harm any specific site. Negative SEO is a targeted attack against a specific competitor, using various techniques (toxic links, content scraping, fake reviews).',
        'A site that is a victim of comment spam is not necessarily the target of a negative SEO campaign. Confusing the two leads to disproportionate responses (mass link disavowal) where simple moderation would suffice.',
      ],
    },
    {
      title: 'Prevention methods',
      items: [
        { label: 'Link attributes', description: 'Apply rel="ugc nofollow" to all links in comments (native in WordPress, configurable in Joomla).' },
        { label: 'Moderation', description: 'Pre-moderation or post-moderation of comments.' },
        { label: 'CAPTCHA', description: 'Anti-bot verification (reCAPTCHA, hCaptcha) on comment forms.' },
        { label: 'Anti-spam plugins', description: 'Dedicated plugins (Akismet, Antispam Bee) that filter automated comments.' },
        { label: 'Closing comments', description: 'Disable comments on old pages or non-editorial pages.' },
        { label: 'Link limitation', description: 'Block comments containing more than one hyperlink.' },
      ],
    },
    {
      title: 'Impact on AI visibility',
      paragraphs: [
        'LLMs crawl entire pages, including comment sections. If comments contain spam (links to pharmaceutical sites, online casinos), the LLM associates those terms with the host domain. This association reduces the likelihood of the site being cited as a reliable source on its core topic.',
        'A nutrition blog whose comments are flooded with links to online pharmacies will be perceived by the LLM as thematically ambiguous. Comment moderation is therefore a direct AI citability lever.',
      ],
    },
    {
      title: 'Key figures',
      paragraphs: [
        'Akismet has blocked over 500 billion spam comments since its launch (automattic.com). WordPress is the most targeted CMS because it powers approximately 43% of websites (W3Techs, 2024). The rel="nofollow" directive was introduced by Google in 2005 to neutralize PageRank passed through comments, then supplemented by rel="ugc" in 2019 to distinguish user-generated content.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Unsolicited comments posted by bots or spam operators' },
      { text: 'Impact on link profile and perceived site quality' },
      { text: 'The distinction from targeted negative SEO' },
      { text: 'Prevention and filtering methods' },
    ],
    neCouvrePas: [
      { text: 'Link spam in external backlinks', link: { slug: 'algorithmes-de-classement', label: 'algorithmes-de-classement' } },
      { text: 'Fraudulent review management on Google Business Profile', link: { slug: 'optimisation-de-la-fiche-google-my-business-gmb', label: 'Google My Business Optimization' } },
      { text: 'Content scraping and malicious duplicate content' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Ranking Algorithms', slug: 'algorithmes-de-classement' },
    { label: 'X-Robots-Tag', slug: 'x-robots-tag' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
