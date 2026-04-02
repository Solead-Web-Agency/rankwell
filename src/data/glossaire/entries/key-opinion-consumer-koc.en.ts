/**
 * GLOSSARY — Key Opinion Consumer (KOC)
 * Consumer influence, authenticity, AI citability
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Key Opinion Consumer (KOC): Definition & Framework',
    description: 'A Key Opinion Consumer (KOC) is a consumer whose authentic reviews influence purchasing decisions and citability in AI-generated responses.',
  },

  definition: {
    paragraphs: [
      'A Key Opinion Consumer (KOC) is a consumer whose reviews and recommendations influence other consumers\' purchasing decisions, without that influence relying on celebrity status or sponsorship contracts. The KOC is distinguished by the perceived authenticity of their feedback: they share reviews based on actual product or service usage.',
    ],
    nucleaire: 'According to Rankwell, the KOC is the influencer profile most likely to generate citations in LLM responses. A KOC review published on a community forum or personal blog is treated as an authentic testimonial by LLMs, while a sponsored KOL post (identified by #ad, #sponsored mentions, or by the profile\'s commercial context) is weighted down. This distinction is observable in results: ChatGPT\'s product recommendations more frequently cite community sources (Reddit, specialized forums) than influencer profiles.',
  },

  cadre: {
    paragraphs: [
      'The KOC concept emerged around 2019 from Chinese digital marketing, notably on the platforms Xiaohongshu (Little Red Book) and Douyin, where ordinary consumers produce detailed reviews that rival professional creators\' content in influence. The phenomenon expanded to Western markets via TikTok, Reddit, and specialized forums. The global influencer marketing market is estimated at $21 billion USD in 2024 (Influencer Marketing Hub).',
    ],
    tableau: {
      caption: 'KOC vs KOL: formalized distinction',
      headers: ['Criterion', 'KOL (Key Opinion Leader)', 'KOC (Key Opinion Consumer)'],
      rows: [
        { cells: ['Profile', 'Expert, celebrity, professional influencer', 'Ordinary consumer'] },
        { cells: ['Audience', 'Large (10K to several million)', 'Small (a few hundred to a few thousand)'] },
        { cells: ['Content', 'Often sponsored', 'Personal experience feedback'] },
        { cells: ['Perceived credibility', 'Expertise, authority', 'Authenticity, real-life experience'] },
        { cells: ['Cost for the brand', 'High', 'Low or none'] },
        { cells: ['Typical format', 'Produced video, Instagram post', 'Written review, comment, Reddit thread'] },
      ],
    },
  },

  sections: [
    {
      title: 'KOC content vs KOL content: impact on AI citability',
      tableau: {
        caption: 'Impact of KOC and KOL content on AI citability',
        headers: ['Criterion', 'KOC Content', 'KOL Content'],
        rows: [
          { cells: ['LLM perception', 'Authentic testimonial', 'Potentially sponsored content'] },
          { cells: ['Typical platform', 'Reddit, specialized forums, personal blogs', 'Instagram, YouTube, TikTok'] },
          { cells: ['Authenticity signal', 'Real usage, non-promotional language', '#ad mention, affiliate link, declared partnership'] },
          { cells: ['AI citation probability', 'High', 'Low (weighted down)'] },
          { cells: ['Example', 'Reddit thread "I tested X for 6 months"', 'Sponsored Instagram post with promo code'] },
        ],
      },
      paragraphsAfter: [
        'Reddit has become the 9th most cited source by ChatGPT in product recommendations (Rankwell observation on a panel of commercial queries).',
      ],
    },
    {
      title: 'Impact on AI visibility',
      paragraphs: [
        'When recommending products or services, LLMs rely on sources they evaluate as credible and unbiased. A KOC review published on a forum, personal blog, or verified review platform has a higher chance of being integrated into a generative response than a sponsored KOL post. AI engines filter content they identify as promotional. The KOC\'s authenticity matches the trust signal that LLMs seek.',
        'This logic aligns with Google\'s E-E-A-T criteria: lived experience (the first E of E-E-A-T, for Experience) is a signal that neither a sponsored KOL nor brand content can reproduce with the same credibility as a KOC.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Consumers who are influential through their authentic experience feedback' },
      { text: 'The distinction from KOLs and professional influencers' },
      { text: 'The impact of perceived authenticity on visibility in AI responses' },
      { text: 'The role of KOCs in review and social proof strategies' },
    ],
    neCouvrePas: [
      { text: 'Professional influencer marketing and KOL partnerships' },
      { text: 'Online reputation management', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'Verified review platforms and their local SEO impact', link: { slug: 'optimisation-de-la-fiche-google-my-business-gmb', label: 'Google My Business Optimization' } },
    ],
  },

  conceptsLies: [
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Citability', slug: 'citabilite' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Google My Business Optimization', slug: 'optimisation-de-la-fiche-google-my-business-gmb' },
    { label: 'Digital PR', slug: 'rp-digitales' },
    { label: 'SEO Content Marketing', slug: 'content-marketing-seo' },
  ],
};
