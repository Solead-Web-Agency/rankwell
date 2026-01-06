/**
 * ============================================
 * DATA - Link Building Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Link Building Agency: SEO Link Strategy - Rankwell',
  description: 'Expert link building agency specializing in quality link strategies. Custom link building campaigns to strengthen your SEO authority. Business-centric approach.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'Link Building' },
  ] as BreadcrumbItem[],
  title: 'Link building agency: build your authority',
  description: 'Link building remains a pillar of SEO. But not all links are equal. Our agency builds a link strategy that matters to Google and AI.',
  ctaText: 'Discuss your link strategy',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/netlinking/hero.webp',
  imageAlt: 'Rankwell Link Building Strategy',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Link Building Agency',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Link building no longer just serves to "rank higher on Google". Every link on a reference site enriches what search engines and AI understand about your brand. Your strengths, your expertise, your positioning.',
    'A good link tells a story. It associates your brand with a context, a topic, an authority. Google interprets it. ChatGPT and Perplexity do too when they decide which sources to recommend.',
    'Discover how our link building strategy and our <strong class="text-secondary dark:text-accent">business-centric</strong> approach build your online identity. Not just backlinks. A link building campaign that strengthens what the web knows about you.',
  ],
  tocItems: [
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'pourquoi', label: 'Why links matter', icon: 'Link' },
    { id: 'methode', label: '5 steps', icon: 'ListChecks' },
    { id: 'criteres', label: 'Quality criteria', icon: 'CircleCheck' },
    { id: 'leviers', label: 'Acquisition methods', icon: 'Magnet' },
    { id: 'refus', label: 'Refused practices', icon: 'Ban' },
    { id: 'mesure', label: 'Success KPIs', icon: 'ChartBar' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'What sets us apart',
  accentColor: 'rw-blue' as const,
  title: 'A link building strategy that builds your authority',
  subtitle: 'Each link building campaign strengthens your positioning on Google and your credibility with AI.',
  items: [
    {
      id: 1,
      title: 'Links that tell a story',
      description: 'Each backlink reinforces your topical positioning and enriches what search engines understand about you.',
      icon: 'Link2',
    },
    {
      id: 2,
      title: 'Brand knowledge',
      description: 'We enrich what search engines and AI understand about your expertise.',
      icon: 'Brain',
    },
    {
      id: 3,
      title: 'Competitive analysis',
      description: "We map your competitors' links to identify opportunities.",
      icon: 'Users',
    },
    {
      id: 4,
      title: 'SEO + GEO impact',
      description: 'Google visibility and credibility with generative AI. Double benefit.',
      icon: 'Layers',
    },
  ] as RecapItem[],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 5. POURQUOI LIENS DATA (#pourquoi)
// ============================================
export const pourquoiLiensData = {
  sectionId: 'pourquoi',
  badge: 'Impact',
  accentColor: 'rw-blue' as const,
  title: 'Why does link building still matter so much?',
  subtitle: 'Link building remains a major signal for Google. Links are also becoming a credibility criterion for AI selecting their sources.',
  reasons: [
    {
      id: 'google',
      title: 'For Google',
      description: "Links remain a major signal in the algorithm. A site that reliable sources point to is perceived as reliable. It's mechanical.",
      icon: 'Search',
    },
    {
      id: 'ia',
      title: 'For generative AI',
      description: 'ChatGPT, Perplexity and others evaluate source credibility. A site cited by other reference sites is more likely to be recommended.',
      icon: 'Bot',
    },
    {
      id: 'notoriete',
      title: 'For your reputation',
      description: 'Beyond SEO, links on recognized sites mean visibility, referral traffic, credibility. A compound effect.',
      icon: 'TrendingUp',
    },
  ],
};

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Why this is strategic',
  text: 'Generative AI builds their responses from what they "know" about a brand. Links on reference sites enrich this knowledge. The more your brand is associated with reliable sources, the more AI recommends you.',
};

// ============================================
// 8. METHODE NETLINKING DATA (#methode)
// ============================================
export const methodeNetlinkingData = {
  sectionId: 'methode',
  badge: '5 steps',
  accentColor: 'rw-blue' as const,
  title: 'How does a link building campaign work?',
  subtitle: 'Our link building strategy combines analysis, custom approach and quality acquisition. Each link must make sense for your topic.',
  steps: [
    {
      step: 1,
      label: 'STEP 1',
      title: 'Analysis of your current profile',
      subtitle: 'We start from what exists to build on healthy foundations.',
      items: [
        'Inventory of existing backlinks',
        'Link quality analysis',
        'Detection of toxic links',
        'Disavow recommendations',
      ],
    },
    {
      step: 2,
      label: 'STEP 2',
      title: 'Competitive study',
      subtitle: 'We map the terrain to identify relevant targets.',
      items: [
        "Competitors' link sources",
        'Opportunities to capture',
        'Backlink gap analysis',
        'Domain authority benchmark',
      ],
    },
    {
      step: 3,
      label: 'STEP 3',
      title: 'Custom strategy',
      subtitle: 'No "100 links/month" package. A strategy adapted to your sector.',
      items: [
        'Defined objectives and KPIs',
        'Selection of priority targets',
        'Acquisition calendar',
        'Budget and resources allocated',
      ],
    },
    {
      step: 4,
      label: 'STEP 4',
      title: 'Quality acquisition',
      subtitle: 'Methods that create value, not spam.',
      items: [
        'Digital PR',
        'Strategic guest blogging',
        'Linkbaiting and attractive content',
        'Editorial partnerships',
      ],
    },
    {
      step: 5,
      label: 'STEP 5',
      title: 'Monitoring and reporting',
      subtitle: 'Every link obtained is documented. Total transparency.',
      items: [
        'Detailed monthly report',
        'Domain Rating evolution',
        'Impact on rankings',
        'Strategy adjustments',
      ],
    },
  ],
};

// ============================================
// 9. TABLEAU QUALITE LIEN DATA (#criteres)
// ============================================
export const tableauQualiteLienData = {
  sectionId: 'criteres',
  badge: 'Criteria',
  accentColor: 'rw-blue' as const,
  title: 'How to evaluate link quality?',
  subtitle: 'Not all links are equal. Here are the criteria we analyze before accepting an opportunity.',
  columns: ['Criterion', 'Minimum threshold', 'Ideal target', 'Red flag'],
  rows: [
    ['Domain Rating (Ahrefs)', 'DR 30+', 'DR 50+', 'DR < 20 or artificially inflated DR'],
    ['Site organic traffic', '1,000 visits/month', '10,000+ visits/month', '0 traffic = ghost site'],
    ['Topical relevance', 'Same broad sector', 'Same precise niche', 'No relation to your activity'],
    ['Outbound links ratio/page', '< 10 external links', '< 5 external links', 'Page with 50+ links = spam'],
    ['Domain age', '2+ years', '5+ years with clean history', 'Recently purchased expired domain'],
    ['Editorial context', 'Link in body text', 'Link in dedicated original content', 'Footer, sidebar, link list'],
  ],
};

// ============================================
// 10. LEVIERS ACQUISITION DATA (#leviers)
// ============================================
export const leviersAcquisitionData = {
  sectionId: 'leviers',
  badge: 'Methods',
  accentColor: 'rw-blue' as const,
  title: 'What acquisition methods do we use?',
  subtitle: 'Five complementary methods to build a natural and relevant link profile.',
  steps: [
    {
      id: 'levier-1',
      stepNumber: '01',
      title: 'Digital PR',
      description: 'Journalists, bloggers, media in your sector',
    },
    {
      id: 'levier-2',
      stepNumber: '02',
      title: 'Guest blogging',
      description: 'Contributions on recognized sites',
    },
    {
      id: 'levier-3',
      stepNumber: '03',
      title: 'Linkbaiting',
      description: 'Content that naturally attracts links',
    },
    {
      id: 'levier-4',
      stepNumber: '04',
      title: 'Reclamation',
      description: 'Unlinked mentions, broken links to convert',
    },
    {
      id: 'levier-5',
      stepNumber: '05',
      title: 'Partnerships',
      description: 'Long-term collaborations with complementary sites',
    },
  ],
};

// ============================================
// 11. PRATIQUES REFUSEES DATA (#refus)
// ============================================
export const pratiquesRefuseesData = {
  sectionId: 'refus',
  badge: "What we refuse",
  accentColor: 'rw-blue' as const,
  title: 'What practices do we refuse?',
  subtitle: 'Certain practices seem incompatible with a sustainable strategy. We systematically refuse them.',
  footerText: 'These practices may work short-term. They expose you to penalties medium-term. Worse: they pollute what AI understands about your brand.',
  pratiques: [
    { label: 'Mass link buying', description: 'On dubious site networks' },
    { label: 'PBN (Private Blog Networks)', description: 'Site networks created solely for link building' },
    { label: 'Comment or forum spam', description: 'Links without added value' },
    { label: 'Systematic reciprocal exchanges', description: 'Easily detectable patterns' },
    { label: 'Off-topic links', description: 'On sites unrelated to your activity' },
  ],
};

// ============================================
// 12. KPIS / MESURE DATA (#mesure)
// ============================================
export const kpisData = {
  sectionId: 'mesure',
  badge: 'Measurement',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'How do we measure success?',
  subtitle: 'We track concrete indicators. Not just the number of links, but their real impact on your visibility and credibility.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-domain-rating.webp',
      alt: 'Domain Rating and Authority Score',
      title: 'Domain Rating / Authority',
      desc: 'The evolution of your overall authority',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-domaines-referents.webp',
      alt: 'Number of unique referring domains',
      title: 'Number of referring domains',
      desc: 'The diversity of your link profile',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-qualite-liens.webp',
      alt: 'Backlink quality analysis',
      title: 'Quality of links obtained',
      desc: 'Topical relevance, source site authority, context',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-impact-positions.webp',
      alt: 'Impact of links on Google rankings',
      title: 'Impact on rankings',
      desc: 'Correlation between links and Google rankings',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-presence-ia.webp',
      alt: 'Presence in generative AI responses',
      title: 'Presence in AI responses',
      desc: 'Your brand cited by ChatGPT, Perplexity',
    },
    {
      id: 6,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-trafic-referent.webp',
      alt: 'Referral traffic from backlinks',
      title: 'Referral traffic',
      desc: 'Links also bring qualified visitors',
    },
  ] as FeatureItem[],
};

// ============================================
// 13. FORWHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is a link building campaign for?',
  subtitle: 'Our link building agency supports companies that want to build lasting authority, not just links.',
  criteria: [
    { label: 'Strengthen your credibility', description: 'You want to be recognized as the reference in your market' },
    { label: 'Be cited by AI', description: 'ChatGPT and Perplexity recommend brands they "know"' },
    { label: 'Amplify a solid SEO base', description: 'You have the foundations, authority is missing' },
    { label: 'Invest in quality', description: 'You prefer 5 quality links to 50 mediocre ones' },
  ],
  ctaTitle: 'Ready to build your authority?',
  ctaDescription: 'We analyze your current link profile and identify opportunities. Custom strategy.',
  ctaButtonText: "Let's discuss your project",
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 16. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEO strategy is to build a brand that people search for by name.',
  author: 'Neil Patel',
  role: 'Digital Marketing Expert',
};

// ============================================
// 17. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about link building and our strategy',
  items: [
    {
      id: 'faq-1',
      question: 'How many links per month in a link building campaign?',
      answer: "There's no magic number. Better 5 quality links than 50 mediocre ones. Our link building agency calibrates the strategy based on your objectives and what your competitors are doing.",
    },
    {
      id: 'faq-2',
      question: 'Do you buy links?',
      answer: 'We work with editorial partners, which may involve compensation. But we never buy links in bulk on dubious platforms. Quality and topical relevance always take priority over volume.',
    },
    {
      id: 'faq-3',
      question: 'How long before seeing impact?',
      answer: "Generally 2 to 4 months. Links take time to be taken into account by Google and produce their full effect on rankings. It's a medium-long term investment that builds lasting assets.",
    },
    {
      id: 'faq-4',
      question: 'What about NoFollow links?',
      answer: "NoFollow links also have value. A natural link profile contains DoFollow and NoFollow. NoFollow links bring reputation, referral traffic and diversity. For generative AI, it's the mention of your brand in a relevant context that counts, not just the link attribute.",
    },
  ] as FAQServiceItem[],
};

// ============================================
// 18. CTA DATA
// ============================================
export const ctaData = {
  title: 'Ready to launch',
  titleHighlight: 'your link building strategy',
  description: 'Free audit of your current link profile. Our link building agency identifies your opportunities and designs a custom link building campaign to build your authority.',
  secondaryDescription: 'First step: a 30-minute exchange to understand your situation. No commitment.',
  buttonText: "Let's discuss your project",
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Free audit' },
    { id: '3', text: 'Custom strategy' },
  ],
};
