/**
 * ============================================
 * DATA - SEO Audit Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem } from '@/components/shared/services';

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Complete SEO Audit: Technical and Semantic - Rankwell',
  description: 'SEO audit of your website: technical, semantic and competitive analysis. Our SEO audit agency delivers prioritized and actionable recommendations.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'SEO Audit' },
  ] as BreadcrumbItem[],
  title: 'SEO Audit of your site: understand before acting',
  description: "Your site underperforming? Our agency performs a complete SEO audit of your website: technical, semantic and competitive. We diagnose, prioritize, and give you the roadmap.",
  ctaText: 'Request an SEO audit',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/audit-seo/hero.webp',
  imageAlt: 'Rankwell Complete SEO Audit',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'SEO Audit Agency',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    "Optimizing a site without auditing it is like treating without diagnosis. You can spend months on actions with no impact, while the real problem remains ignored.",
    "A rigorous SEO audit of your website gives you visibility on what's blocking, what's working, and what needs to be prioritized. Our technical SEO audit and semantic SEO audit reveal growth levers. Not assumptions: facts, data, actionable recommendations.",
    'Discover how our <strong class="text-secondary dark:text-accent">business-centric</strong> approach to SEO audits starts from your objectives to identify what really matters. Google and AI engines included.',
  ],
  tocItems: [
    { id: 'approche', label: 'Audit scope', icon: 'ClipboardList' },
    { id: 'dimensions', label: '5 dimensions analyzed', icon: 'Layers' },
    { id: 'analyse', label: 'Analysis by maturity', icon: 'ChartLine' },
    { id: 'livrables', label: 'Concrete deliverables', icon: 'FileText' },
    { id: 'process', label: 'Process', icon: 'ListChecks' },
    { id: 'pour-qui', label: 'For whom?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 4. RECAPBOX DATA
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'What our SEO audit covers',
  accentColor: 'rw-blue' as const,
  title: 'A complete diagnosis, not an automated report',
  subtitle: 'Our SEO audit covers everything that influences your visibility on Google and AI engines.',
  items: [
    {
      id: 1,
      title: '5 dimensions analyzed',
      description: 'Technical SEO audit, semantic audit, popularity, competition and GEO-readiness. Nothing is left to chance.',
      icon: 'Layers',
    },
    {
      id: 2,
      title: 'Prioritized recommendations',
      description: 'Ranked by impact and feasibility. You know exactly where to start.',
      icon: 'ListOrdered',
    },
    {
      id: 3,
      title: 'Competitive analysis',
      description: "We analyze your site AND your competitors'. To understand your real position.",
      icon: 'Users',
    },
    {
      id: 4,
      title: 'Complete deliverable',
      description: 'Detailed report + video restitution. No automated tool export.',
      icon: 'FileText',
    },
  ] as RecapItem[],
};

// ============================================
// 5. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: "Without data, you're just another person with an opinion.",
  author: 'W. Edwards Deming',
  role: 'Quality Management Pioneer',
};

// ============================================
// 6. AUDIT DIMENSIONS DATA
// ============================================
export const auditDimensionsData = {
  sectionId: 'dimensions',
  badge: '5 dimensions',
  accentColor: 'rw-blue' as const,
  title: 'What dimensions does our SEO audit cover?',
  subtitle: 'Our SEO audit covers 5 complementary dimensions. Each reveals a facet of your current visibility and potential.',
  dimensions: [
    {
      dimension: 1,
      label: 'DIMENSION 1',
      title: 'Technical SEO Audit',
      subtitle: "Your site's health as seen by search engines.",
      items: ['Crawl and indexing', 'Performance and Core Web Vitals', 'Architecture and URLs', '404 errors and redirects', 'Mobile experience'],
    },
    {
      dimension: 2,
      label: 'DIMENSION 2',
      title: 'Semantic SEO Audit',
      subtitle: 'The relevance of your content for your targets.',
      items: ['Semantic coverage', 'On-page optimization', 'Clusters and internal linking', 'Search intents', 'Keyword cannibalization'],
    },
    {
      dimension: 3,
      label: 'DIMENSION 3',
      title: 'Popularity Audit',
      subtitle: 'Your authority in the eyes of Google and AI.',
      items: ['Backlink profile', 'Anchor quality', 'Risky toxic links', 'Competitive benchmark'],
    },
    {
      dimension: 4,
      label: 'DIMENSION 4',
      title: 'Competitive Audit',
      subtitle: 'Your position in your ecosystem.',
      items: ['Real SEO competitors', 'Competitor keywords', 'Strengths and weaknesses', 'Unexploited opportunities'],
    },
    {
      dimension: 5,
      label: 'DIMENSION 5',
      title: 'GEO-readiness Audit',
      subtitle: 'Your preparation for generative AI engines.',
      items: ['Citable content structure', 'Schema.org structured data', 'E-E-A-T topical authority', 'FAQ and list formats'],
    },
  ],
};

// ============================================
// 7. TABLEAU MATURITE DATA
// ============================================
export const tableauMaturiteData = {
  sectionId: 'analyse',
  badge: 'Analysis',
  accentColor: 'rw-blue' as const,
  title: "What an SEO audit reveals based on your site's maturity",
  subtitle: 'Problems differ based on your situation. Here is what our website SEO audit typically reveals.',
  columns: ['SEO Maturity', 'Common problems', 'Typical quick wins', 'Potential gains'],
  rows: [
    ['Beginner (never optimized)', 'No tags, thin content, 0 backlinks', 'Titles/metas, key pages, indexing', '+100-300% traffic possible'],
    ['Intermediate (basics in place)', 'Cannibalization, neglected technical, weak links', 'Page consolidation, Core Web Vitals', '+30-80% traffic possible'],
    ['Advanced (active SEO)', 'Glass ceiling, strong competition', 'GEO-readiness, topical authority', '+10-30% + AI visibility'],
    ['Post-redesign', 'Broken redirects, position loss', 'Urgent fixes, recovery', 'Return to previous level'],
  ],
  highlightLastColumn: true,
};

// ============================================
// 8. POINT VIGILANCE 1 DATA
// ============================================
export const pointVigilance1Data = {
  label: 'GEO-readiness Dimension',
  text: "Our audit includes an analysis of your preparation for AI engines. Is your content structured to be cited by ChatGPT or Perplexity? Are your structured data in place? This is a dimension that few audits cover.",
};

// ============================================
// 9. LIVRABLES DATA
// ============================================
export const livrablesData = {
  sectionId: 'livrables',
  badge: 'Deliverables',
  accentColor: 'rw-blue' as const,
  title: 'What do you concretely receive?',
  subtitle: "An audit only has value if it's actionable. Here's what we deliver.",
  items: [
    {
      id: 1,
      alt: 'Complete SEO audit report',
      title: 'A complete report',
      description: 'Not an automated tool export. A structured, analyzed, commented document. Each point is explained, contextualized, illustrated.',
    },
    {
      id: 2,
      alt: 'SEO recommendations prioritization',
      title: 'Clear prioritization',
      description: "Not all recommendations are equal. We rank by potential impact and ease of implementation. You know where to start.",
    },
    {
      id: 3,
      alt: 'Actionable SEO recommendations',
      title: 'Actionable recommendations',
      description: 'No "you should improve SEO". Concrete actions: this page, this tag, this content, this link.',
    },
    {
      id: 4,
      alt: 'Video audit presentation',
      title: 'A video presentation',
      description: 'We present the findings, answer your questions, make sure you understand the stakes.',
    },
  ],
};

// ============================================
// 10. AUDIT PROCESS DATA
// ============================================
export const auditProcessData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'How does an audit work?',
  subtitle: '5 steps from initial brief to presentation. Count 2 to 4 weeks depending on your site size.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Initial brief',
      description: 'We understand your context, objectives, constraints. An audit only makes sense if adapted to your situation.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Collection and analysis',
      description: "We scrutinize your site and your competitors'. Tools, crawl, manual analysis. Count 2-3 weeks.",
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Synthesis and prioritization',
      description: 'We transform raw data into structured recommendations prioritized by impact and feasibility.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Presentation',
      description: 'Detailed presentation of findings and roadmap. Q&A session to clarify all points.',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'What next?',
      description: 'The audit is a starting point. We can then support you on implementation, or let you proceed autonomously.',
    },
  ],
};

// ============================================
// 11. FORWHO DATA
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Who is this audit for?',
  subtitle: 'The audit is for any company that wants to understand their current SEO situation before investing.',
  criteria: [
    { label: 'Stagnating sites', description: "You produce content, but it's not taking off" },
    { label: 'Before a redesign', description: 'Identify what to preserve and what to fix' },
    { label: 'After a redesign', description: "Verify everything is in place, fix errors" },
    { label: 'New SEO team', description: 'Have an objective baseline to start' },
    { label: 'Due diligence', description: 'Evaluate the SEO of a potential acquisition' },
  ],
  ctaTitle: 'Ready to understand your situation?',
  ctaDescription: 'A well-done audit saves you months of misdirected efforts. We diagnose, you decide.',
  ctaButtonText: 'Request an audit',
  ctaButtonHref: '/en/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 12. POINT VIGILANCE 2 DATA
// ============================================
export const pointVigilance2Data = {
  label: 'Watch out',
  text: 'An SEO audit that ignores the GEO dimension is incomplete. AI engines already represent 30% of searches. Ignoring this dimension means ignoring a growing part of your potential audience.',
};

// ============================================
// 13. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'The best SEO strategy is to build a brand that people search for by name.',
  author: 'Neil Patel',
  role: 'Digital Marketing Expert',
};

// ============================================
// 14. FAQ DATA
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about our SEO audit',
  items: [
    {
      id: 'faq-1',
      question: 'How much does a website SEO audit cost?',
      answer: "The cost of an SEO audit depends on your site size and desired depth of analysis. Our SEO audit agency provides a quote after understanding your context. No opaque pricing. You know exactly what's included before committing.",
    },
    {
      id: 'faq-2',
      question: 'How long does an SEO audit take?',
      answer: 'The duration of a complete SEO audit is typically 2 to 4 weeks between initial brief and presentation. Technical SEO audit and semantic SEO audit require time to be done properly. A rushed audit is useless.',
    },
    {
      id: 'faq-3',
      question: 'Does the audit include implementation?',
      answer: 'The audit is a diagnosis, not implementation. Both are distinct steps. Implementation can be the subject of separate support. You can also implement internally with our recommendations.',
    },
    {
      id: 'faq-4',
      question: 'Do you need access to our tools?',
      answer: 'Access to your tools (Google Search Console, Analytics, CMS) allows for a more complete audit. This first-party data is valuable for analysis. We can also work with limited access if necessary.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 15. CTA DATA
// ============================================
export const ctaData = {
  title: 'Stop guessing,',
  titleHighlight: 'start knowing',
  description: "A well-done SEO audit saves you months of misdirected efforts. Our website SEO audit reveals what's blocking your visibility on Google as well as AI engines. And it prioritizes high-impact actions.",
  secondaryDescription: 'First step: a 30-minute call to understand your context. Our agency then offers you an SEO audit adapted to your situation, with a clear scope and budget.',
  buttonText: 'Request an SEO audit',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: '30-minute call' },
    { id: '3', text: 'Clear quote' },
  ],
};
