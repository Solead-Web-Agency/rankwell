/**
 * GLOSSARY — Google My Business (GMB) Profile Optimization
 * Local SEO, Google Business Profile, local AI visibility
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Google My Business (GMB) Optimization: Definition & Framework',
    description: 'Google Business Profile optimization covers listing completeness, review management, NAP consistency, and impact on the Local Pack and LLM recommendations.',
  },

  definition: {
    paragraphs: [
      'Google My Business profile optimization (renamed Google Business Profile by Google in 2021) refers to all actions aimed at improving the visibility and relevance of a local business in Google search results, Google Maps, and the Local Pack. Optimization covers information completeness, review management, content publishing, and data consistency across online sources. 46% of Google searches have local intent (source: GoGulf, 2023), and the local pack appears on approximately 93% of queries with local intent (BrightLocal).',
      'GBP data (reviews, categories, attributes) is directly accessible to LLMs via Google Maps and public listings. When ChatGPT recommends "the best Italian restaurant in Lyon," it relies on aggregated GBP data (average rating, review count, primary category), not the restaurant\'s website. GBP optimization is therefore a direct GEO lever, not merely a local SEO lever.',
    ],
    nucleaire: 'According to Rankwell, GBP optimization is a direct GEO lever: LLMs rely on aggregated GBP data (rating, reviews, category) to formulate their local recommendations, independently of the business\'s website.',
  },

  cadre: {
    paragraphs: [
      'Google Business Profile (GBP) is Google\'s business listing system. The listing is free and verifiable by the business owner. It appears in three contexts: the Local Pack (the top 3 local results in SERPs), Google Maps, and the business\'s Knowledge Panel.',
    ],
    tableau: {
      caption: 'The three local ranking factors',
      headers: ['Factor', 'Definition', 'Optimization Lever'],
      rows: [
        { cells: ['Relevance', 'Match between the listing and the user\'s query', 'Categories, description, attributes, services, keywords in reviews'] },
        { cells: ['Distance', 'Geographic proximity between the user and the business', 'Not directly modifiable (depends on the user\'s location)'] },
        { cells: ['Prominence', 'Reputation and visibility of the business online and offline', 'Reviews (volume and rating), NAP citations, third-party mentions, backlinks'] },
      ],
    },
  },

  sections: [
    {
      title: 'GBP optimization vs Knowledge Panel optimization',
      paragraphs: [
        'GBP optimization and Knowledge Panel optimization both aim to improve an entity\'s presence on Google, but they act on different data and produce distinct effects.',
        'GBP optimization acts on local data (NAP, hours, reviews, photos, categories) to improve positioning in the Google Maps local pack. Knowledge Panel optimization acts on entity data (Wikidata, Wikipedia, Schema.org Organization) to improve entity recognition by Google and LLMs. The two are complementary: a business can optimize its GBP listing for the local pack while working on its Knowledge Panel for entity recognition, but the levers and effects are distinct.',
        'For a local business (restaurant, medical practice, tradesperson), GBP optimization is the priority because it directly targets the local pack and LLM recommendations. For a brand or organization without a physical point of sale, Knowledge Panel optimization is more relevant because it targets entity recognition and citability in generated responses.',
      ],
    },
    {
      title: 'Components of GBP optimization',
      items: [
        { label: 'Listing completeness', description: 'Every field must be filled in: business name (NAP), address, phone number, website, hours, primary category, secondary categories, attributes, service area, description. A complete listing sends a stronger reliability signal than a partial one.' },
        { label: 'Review management', description: 'Review volume, average rating, and frequency of new reviews are prominence signals. Owner responses to reviews (both positive and negative) demonstrate active engagement. Keywords present in reviews contribute to the listing\'s topical relevance.' },
        { label: 'NAP consistency', description: 'The Name-Address-Phone triplet must be identical across all online sources: website, directories, social media, review platforms. Inconsistencies weaken Google\'s confidence in the business\'s data.' },
        { label: 'Google Posts', description: 'Google Posts allow publishing news, offers, and events directly on the listing. These posts signal recent activity and enrich the listing\'s indexable content.' },
      ],
    },
    {
      title: 'GBP data leveraged by LLMs',
      paragraphs: [
        'LLMs that recommend local businesses or service providers rely on publicly accessible GBP data.',
      ],
      tableau: {
        caption: 'GBP data and impact on AI recommendations',
        headers: ['GBP Data', 'Accessible to LLMs', 'Impact on Recommendation', 'Optimization Action'],
        rows: [
          { cells: ['Average rating', 'Yes (via Google Maps, public listings)', 'Primary sorting criterion in local recommendations', 'Maintain a rating above 4.0/5 through active review monitoring'] },
          { cells: ['Review count', 'Yes', 'High volume = popularity signal, used to differentiate businesses with equal ratings', 'Encourage reviews after each service'] },
          { cells: ['Review text', 'Yes', 'LLMs extract verbatims to justify their recommendations ("customers mention the freshness of the products")', 'Encourage customers to detail their experience'] },
          { cells: ['Primary category', 'Yes', 'Determines whether the business is relevant to the query ("Italian restaurant", "orthopedic surgeon")', 'Choose the most specific category available'] },
          { cells: ['Photos', 'Partially (alt descriptions, metadata)', 'Low direct impact on text-based LLMs, strong impact on multimodal LLMs', 'Publish quality photos with descriptions'] },
          { cells: ['Attributes', 'Yes (accessibility, services, options)', 'Used for filters ("terrace", "wheelchair accessible", "delivery")', 'Fill in all applicable attributes'] },
          { cells: ['Hours', 'Yes', 'Used to filter real-time recommendations ("open now")', 'Keep hours up to date, including special hours'] },
          { cells: ['Website', 'Yes (URL, content crawled separately)', 'Used to verify information and enrich the recommendation', 'Ensure consistency between the website and the GBP listing'] },
        ],
      },
    },
    {
      title: 'Impact on AI visibility',
      paragraphs: [
        'LLMs increasingly recommend local businesses and service providers in their responses. ChatGPT, in partnership with local data sources, and Perplexity, via its map integrations, rely on the same data as Google Maps: name, address, category, reviews, rating. A business with a complete GBP listing, recent reviews, and a high rating has a greater chance of appearing in LLM local recommendations.',
        'LocalBusiness structured data on the business\'s website reinforces this signal by providing AI crawlers with verifiable information (hours, contact details, services) in a directly exploitable format.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'GBP listing completeness and accuracy' },
      { text: 'Review management and review responses' },
      { text: 'NAP consistency across online sources' },
      { text: 'Google Posts and listing content' },
      { text: 'Impact on Local Pack and Google Maps ranking' },
    ],
    neCouvrePas: [
      { text: 'Technical SEO for the business\'s website', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Brand Knowledge Panel', link: { slug: 'knowledge-panel', label: 'Knowledge Panel' } },
      { text: 'Local paid advertising (Google Ads Local)' },
      { text: 'On-site content strategy', link: { slug: 'cocon-semantique', label: 'cocon-semantique' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Local SEO', slug: 'seo-local' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Structured Data', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
  ],
};
