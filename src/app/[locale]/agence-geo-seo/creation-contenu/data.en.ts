/**
 * ============================================
 * DATA - Content Creation Page Content - ENGLISH
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'SEO & GEO Content Writing and Creation - Rankwell',
  description: 'SEO content writing and creation optimized for Google and AI. Strategic content marketing: content that ranks and converts. Not filler.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'GEO & SEO', href: '/en/geo-seo-agency' },
    { label: 'Content Creation' },
  ] as BreadcrumbItem[],
  title: 'Content creation for Google and AI',
  description: "Content creation is the fuel for your SEO and GEO visibility. Not just any content: strategic writing that responds to real search intents.",
  ctaText: 'Discuss your content strategy',
  ctaHref: '/en/contact',
  // image: '/images/pages/agence-geo-seo/creation-contenu/hero.webp',
  imageAlt: 'SEO and GEO Content Creation Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'SEO Writing',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'For years, SEO writing meant placing keywords in articles. It worked. That\'s over. Google understands meaning, not just words.',
    'Generative AI goes further: they evaluate whether your content deserves to be cited, recommended, used as a reliable source. Your SEO content creation builds what they "know" about your brand.',
    'Discover how our content strategy and our <strong class="text-secondary dark:text-accent">business-centric</strong> approach produce content that ranks on Google AND feeds AI knowledge about your expertise.',
  ],
  tocItems: [
    { id: 'approche', label: 'Our approach', icon: 'Compass' },
    { id: 'methode', label: '4 pillars', icon: 'Columns2' },
    { id: 'types', label: 'Content types', icon: 'FileText' },
    { id: 'process', label: '6 steps', icon: 'ListChecks' },
    { id: 'formats', label: 'Formats by objective', icon: 'LayoutGrid' },
    { id: 'difference', label: 'What makes the difference', icon: 'Sparkles' },
    { id: 'collaboration', label: 'Collaboration formats', icon: 'Handshake' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'What distinguishes our approach',
  accentColor: 'rw-blue' as const,
  title: 'SEO writing that performs on Google and AI',
  subtitle: 'Our SEO content creation is designed to meet the expectations of Google, AI and your prospects.',
  items: [
    {
      id: 1,
      title: 'Business objectives',
      description: 'Each piece of content serves a specific objective, not an editorial calendar.',
      icon: 'Target',
    },
    {
      id: 2,
      title: 'Dual SEO + GEO optimization',
      description: 'Content designed for Google and generative AI engines.',
      icon: 'Layers',
    },
    {
      id: 3,
      title: 'Lasting value content',
      description: 'Production designed to perform over time, not to fill space.',
      icon: 'Clock',
    },
    {
      id: 4,
      title: 'Built-in conversion',
      description: 'Positioning serving lead generation.',
      icon: 'MousePointerClick',
    },
  ] as RecapItem[],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Content is king, but context is God.',
  author: 'Gary Vaynerchuk',
  role: 'CEO VaynerMedia',
};

// ============================================
// 5. METHODE 4 PILIERS DATA (#methode)
// ============================================
export const methodeData = {
  sectionId: 'methode',
  badge: '4 pillars',
  accentColor: 'rw-blue' as const,
  title: 'How does our SEO writing perform?',
  subtitle: 'Our content strategy rests on 4 pillars. Each SEO content creation meets the expectations of Google, AI and your prospects.',
  dimensions: [
    {
      dimension: 1,
      label: 'PILLAR 1',
      title: 'Content strategy',
      subtitle: 'Each piece of content has a specific role in your content marketing ecosystem.',
      items: ['Search intent analysis', 'Content/customer journey mapping', 'Business potential prioritization', 'Strategic editorial calendar'],
    },
    {
      dimension: 2,
      label: 'PILLAR 2',
      title: 'Deep research',
      subtitle: 'Content worth citing, not rewriting.',
      items: ['Interviews with your subject matter experts', 'Primary source analysis', 'Verified data and figures', 'Differentiating angle identified'],
    },
    {
      dimension: 3,
      label: 'PILLAR 3',
      title: 'GEO-ready structure',
      subtitle: 'Formatted to be cited by generative AI.',
      items: ['Clear, standalone paragraphs', 'Structured lists and FAQs', 'Citable, sourced data', 'Schema.org and structured data'],
    },
    {
      dimension: 4,
      label: 'PILLAR 4',
      title: 'Natural optimization',
      subtitle: 'SEO serving readability, never at its expense.',
      items: ['Naturally integrated keywords', 'Strategic internal linking', 'Optimized tags and meta', 'Performance and accessibility'],
    },
  ],
};

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Content and brand knowledge',
  text: 'Every piece of content we produce strengthens what the web "knows" about your brand. Generative AI builds their responses from this knowledge. Well-structured content becomes a building block of your digital reputation.',
};

// ============================================
// 8. TYPES DE CONTENUS DATA (#types)
// ============================================
export const typesContenusData = {
  sectionId: 'types',
  badge: 'Content types',
  accentColor: 'rw-blue' as const,
  title: 'What types of SEO content creation do we offer?',
  subtitle: 'Five content types to cover your entire content strategy. Each has a specific role in your visibility.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-pages-piliers.webp',
      alt: 'SEO pillar pages',
      title: 'Pillar pages',
      desc: 'Long, comprehensive content that anchors your expertise on a topic. They structure your semantic interlinking and capture main queries.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-articles-blog.webp',
      alt: 'SEO blog articles',
      title: 'Blog articles',
      desc: 'Regular content targeting specific queries, answering your audience\'s questions, building your topical authority.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-pages-services.webp',
      alt: 'Service and product pages',
      title: 'Service/product pages',
      desc: 'Your commercial pages optimized to convert and rank. The right balance between persuasion and SEO.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-landing-pages.webp',
      alt: 'Optimized landing pages',
      title: 'Landing pages',
      desc: 'Landing pages optimized for specific campaigns or particular audience segments.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/creation-contenu/type-faq.webp',
      alt: 'FAQ and structured content',
      title: 'FAQ and structured content',
      desc: 'Direct answers to frequent questions, formatted for featured snippets and AI responses.',
    },
  ] as FeatureItem[],
};

// ============================================
// 9. PROCESS DATA (#process) - 6 steps
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Process',
  accentColor: 'rw-blue' as const,
  title: 'How does our SEO writing work?',
  subtitle: '6 steps from brief to publication. Each SEO content creation goes through this process to ensure quality and performance.',
  steps: [
    {
      id: 'brief',
      stepNumber: 'Step 1',
      title: 'Strategic brief',
      description: 'Define objectives, analyze the topic, keyword research, competition study. We know exactly what we\'re aiming for before writing.',
      icon: 'ClipboardList',
    },
    {
      id: 'structuration',
      stepNumber: 'Step 2',
      title: 'Structuring',
      description: 'Detailed outline validated with you. You know what the content will contain before writing.',
      icon: 'LayoutList',
    },
    {
      id: 'redaction',
      stepNumber: 'Step 3',
      title: 'Writing',
      description: 'Writing by a writer specialized in your sector or trained on your topics. No generic content.',
      icon: 'PenTool',
    },
    {
      id: 'optimisation',
      stepNumber: 'Step 4',
      title: 'Optimization',
      description: 'SEO integration, GEO-readiness verification, internal linking, metadata.',
      icon: 'Settings',
    },
    {
      id: 'validation',
      stepNumber: 'Step 5',
      title: 'Validation',
      description: "Proofreading, corrections, client validation. We don't publish anything without your approval.",
      icon: 'CircleCheck',
    },
    {
      id: 'integration',
      stepNumber: 'Step 6',
      title: 'Integration',
      description: 'We can handle integration on your CMS if needed, or deliver ready-to-publish files.',
      icon: 'Upload',
    },
  ],
};

// ============================================
// 11. TABLEAU FORMATS DATA (#formats)
// ============================================
export const tableauFormatsData = {
  sectionId: 'formats',
  badge: 'Formats',
  accentColor: 'rw-blue' as const,
  title: 'Which SEO writing format for which objective?',
  subtitle: 'Each content marketing format has its strengths. Here is how to choose based on your content strategy.',
  columns: ['Format', 'Primary objective', 'SEO potential', 'GEO potential', 'Production effort'],
  rows: [
    ['Complete guide (3000+ words)', 'Rank on main query', '★★★★★', '★★★☆☆', 'High'],
    ['Structured FAQ article', 'Featured snippets + AI citations', '★★★★☆', '★★★★★', 'Medium'],
    ['Data-backed case study', 'Social proof + backlinks', '★★★☆☆', '★★★★★', 'High'],
    ['Comparison/versus', 'Transactional queries', '★★★★☆', '★★★★☆', 'Medium'],
    ['Glossary/definitions', 'Long tail + authority', '★★★☆☆', '★★★★★', 'Low per entry'],
    ['Original data study', 'Backlinks + press citations', '★★★★☆', '★★★★★', 'Very high'],
  ],
};

// ============================================
// 12. DIFFERENCE DATA (#difference)
// ============================================
export const differenceData = {
  sectionId: 'difference',
  badge: 'What makes the difference',
  accentColor: 'rw-blue' as const,
  title: 'What makes the difference?',
  subtitle: 'Four elements distinguish our content production. Each contributes to the performance and sustainability of your content.',
  items: [
    {
      id: 1,
      title: 'No raw AI content',
      description: "AI is a tool, not a writer. We can use it to accelerate certain steps, but each piece of content is reworked, enriched, humanized by our teams.",
      icon: 'UserCheck',
    },
    {
      id: 2,
      title: 'Sector expertise',
      description: "We assign the right profiles to the right topics. B2B tech content isn't written by someone who does lifestyle.",
      icon: 'Briefcase',
    },
    {
      id: 3,
      title: 'Designed for conversion',
      description: 'Ranking is good. Converting is better. Each piece of content includes elements that guide toward action.',
      icon: 'Target',
    },
    {
      id: 4,
      title: 'Performance tracking',
      description: "We monitor the ranking and traffic of each piece of content. What works, we do more of. What's stuck, we optimize.",
      icon: 'ChartBar',
    },
  ],
};

// ============================================
// 14. COLLABORATION DATA (#collaboration)
// ============================================
export const collaborationData = {
  sectionId: 'collaboration',
  badge: 'Collaboration',
  accentColor: 'rw-blue' as const,
  title: 'Collaboration formats',
  subtitle: 'Three ways to work together, depending on your needs and internal resources.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-recurrent.webp',
      alt: 'Recurring content production',
      title: 'Recurring production',
      desc: 'A monthly volume of content, editorial calendar, continuous production. Ideal for regularly feeding your site.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-oneshot.webp',
      alt: 'One-shot content project',
      title: 'One-shot project',
      desc: 'Revamping your existing pages, creating a topic cluster, launching a new product. A defined project with a clear deliverable.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/creation-contenu/collab-accompagnement.webp',
      alt: 'Internal team coaching',
      title: 'Coaching your teams',
      desc: 'You have in-house writers? We can train them, define briefs, proofread and optimize their productions.',
    },
  ] as FeatureItem[],
};

// ============================================
// 15. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about our SEO writing and content creation',
  items: [
    {
      id: 'faq-1',
      question: 'Do you use ChatGPT?',
      answer: "Yes, we use generative AI (GPT, Claude, Gemini) to produce content. But the real value is elsewhere: in all the upstream work. Detailed brief, client knowledge, brand tone, target persona, strategic keywords, SEO and GEO-ready structure. AI follows strict guidelines to produce content that performs. Without this framework, AI produces generic content. With it, it produces content that ranks.",
    },
    {
      id: 'faq-2',
      question: 'Who are your writers?',
      answer: "Production is largely handled by AI, supervised by our teams. This allows us to be fast and competitive. If you need a human writer specialized in your sector, it's possible on request. We have a network of expert profiles (tech, finance, healthcare, etc.) that we mobilize according to projects.",
    },
    {
      id: 'faq-3',
      question: 'What languages do you write in?',
      answer: "Thanks to AI, we no longer have language barriers. French, English, Spanish, German, Arabic, Chinese... We can produce in your target market's language. Our Dubai office also gives us real cultural knowledge for MENA markets.",
    },
    {
      id: 'faq-4',
      question: 'How much does content cost?',
      answer: "Since production is largely AI-driven, the cost is mainly related to strategic work: brief, research, structure, SEO/GEO optimization, validation. So it's custom pricing based on your project's complexity, not per-word pricing. Exception: if you request a specialized human writer, then we switch to more traditional pricing.",
    },
  ] as FAQServiceItem[],
};

// ============================================
// 16. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 17. CTA DATA
// ============================================
export const ctaData = {
  title: 'SEO writing that',
  titleHighlight: 'works for you',
  description: 'Every SEO content creation must serve your objectives. Our content marketing ranks on Google, gets cited by AI and converts your visitors into clients.',
  secondaryDescription: 'First step: a discussion about your needs. We propose a content strategy adapted to your objectives and sector. One-time or recurring SEO writing, you choose.',
  buttonText: 'Discuss your content needs',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: '30-minute call' },
    { id: '3', text: 'Custom strategy' },
  ],
};
