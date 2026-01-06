/**
 * ============================================
 * DATA - HOMEPAGE (/) - ENGLISH VERSION
 * ============================================
 *
 * This file contains ALL textual content for the homepage in English.
 * To modify the content, edit only this file.
 *
 * Sections ordered by their appearance in page.tsx:
 * 1. metadata
 * 2. heroData
 * 3. introData
 * 4. quote1Data
 * 5. servicesData
 * 6. processData
 * 7. pointVigilanceData
 * 8. whyUsData
 * 9. quote2Data
 * 10. faqData
 * 11. ctaData
 */

// ============================================
// 1. METADATA
// ============================================
export const metadata = {
  title: 'Digital Marketing & Performance Agency | Rankwell',
  description: 'Rankwell, a digital agency specialized in digital marketing and Search performance. We support businesses in their growth with a data-driven approach. Paris & Dubai.',
};

// ============================================
// 2. HERO DATA
// ============================================
export const heroData = {
  badge: 'GEO & SEO, SEA, Data Agency',
  title: 'Performance-driven digital marketing agency',
  description: 'Your digital partner to generate business through Search. SEO, SEA, Data: we build your presence on Google and AI search engines with a 100% results-oriented approach.',
  primaryCta: {
    text: "Let's discuss your project",
    href: '/en/contact',
  },
  secondaryCta: {
    text: 'Discover our approach',
    href: '/en/geo-seo-agency',
  },
  trustIndicator: {
    main: '4.7/5 on Google',
    sub: 'See reviews',
    href: 'https://www.google.com/search?sa=X&sca_esv=1cf06cdd23137a81&q=RANKWELL+FRANCE+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDIwMDIzBGIzExNTcwNTS7MNjIyvGEWCHP28w109fBTcgCxnVwXHssziRaxYhQHq9gl4SAAAAA&rldimm=8200261026644570596&tbm=lcl&hl=fr-FR&ved=2ahUKEwjXkdHK1eeRAxWVUKQEHclQAqAQ9fQKegQIVBAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews',
  },
};

// ============================================
// 3. INTRO DATA
// ============================================
export const introData = {
  badge: 'The evolution of Search',
  title: 'Search has changed. Have you?',
  paragraphs: [
    "Google is no longer alone. ChatGPT, Perplexity, Gemini... Your future customers are asking their questions to AI. These engines synthesize, recommend and cite sources. Being well-positioned on Google is no longer enough.",
    "You need to be <strong>the reference source</strong>, regardless of the search engine. Our digital agency doesn't separate GEO and SEO. The fundamentals are the same. What changes is the playing field.",
    "Discover how our <strong>business-centric</strong> approach combines SEO, GEO, SEA and Data to generate business, not just traffic.",
  ],
  highlightsTitle: 'What defines us',
  highlights: [
    { strong: '350+ clients', text: 'supported since 2015 with a 100% results-oriented approach' },
    { strong: 'Native GEO', text: ': optimization for Google AND AI engines from the start' },
    { strong: '2 offices', text: 'in Paris and Dubai for an international vision' },
    { strong: 'Rankwell One', text: ': our centralized dashboard to see your performance in real-time' },
    { strong: 'Business-centric', text: ': we measure in conversions and revenue, not rankings' },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'The future of search is about understanding intent and delivering the best answer, not just the best link.',
  author: 'Sundar Pichai',
  role: 'CEO Google & Alphabet',
};

// ============================================
// 5. SERVICES DATA
// ============================================
export const servicesData = {
  badge: 'Our Expertise',
  title: 'Three complementary expertises for your growth',
  description: "We combine GEO & SEO, SEA and Data to cover the entire Search journey. Each expertise reinforces the others.",
  items: [
    {
      id: 1,
      title: 'GEO & SEO',
      description: 'Organic search designed for Google AND generative engines. Technical audit, semantic strategy, link building, content creation. A comprehensive approach to dominate both classic search results and AI responses.',
      href: '/en/geo-seo-agency',
      buttonText: 'Discover our expertise',
      // image: '/images/homepage/expertise-geo-seo.webp',
      imageAlt: 'GEO & SEO Expertise Rankwell',
    },
    {
      id: 2,
      title: 'SEA',
      description: 'Performance-driven Google Ads. Setup, continuous optimization, semantic analysis. Every euro invested must deliver returns. We don\'t do advertising spend, we generate business.',
      href: '/en/sea-agency',
      buttonText: 'Discover our expertise',
      // image: '/images/homepage/expertise-sea.webp',
      imageAlt: 'SEA Expertise Rankwell',
    },
    {
      id: 3,
      title: 'Data & Analytics',
      description: 'No decision without reliable data. Tracking, Analytics, CRO. We measure what matters, we optimize what converts. Data serving your growth, not useless dashboards.',
      href: '/en/data-agency',
      buttonText: 'Discover our expertise',
      // image: '/images/homepage/expertise-data.webp',
      imageAlt: 'Data & Analytics Expertise Rankwell',
    },
  ],
};

// ============================================
// 6. PROCESS DATA
// ============================================
export const processData = {
  badge: 'Process',
  title: 'How do we work with our clients?',
  description: "We don't arrive with a ready-made method. Every engagement starts with listening and analysis. This is the <strong>business-centric</strong> approach.",
  steps: [
    {
      number: '1',
      title: 'Immersion',
      description: 'We dive into your world. Market, competitors, customers, objectives.',
    },
    {
      number: '2',
      title: 'Strategy',
      description: 'We define priority levers. What will generate business.',
    },
    {
      number: '3',
      title: 'Execution',
      description: 'We produce, optimize, iterate. Content, technical, links, campaigns.',
    },
    {
      number: '4',
      title: 'Management',
      description: 'We measure, adjust, accelerate. With Rankwell One, everything in real-time.',
    },
  ],
};

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'The challenge',
  text: "A website well-positioned on Google but absent from AI responses progressively loses opportunities. Generative engines don't crawl like Google. They evaluate authority, structure and content citability.",
};

// ============================================
// 8. WHY US DATA
// ============================================
export const whyUsData = {
  badge: 'Why choose us',
  title: 'Why choose',
  titleHighlight: 'Rankwell?',
  description: 'Four elements differentiate us from other Search agencies. Each reflects our business-centric approach.',
  ctaText: "Let's discuss your project",
  ctaHref: '/en/contact',
  cards: [
    {
      icon: 'Bot',
      title: 'GEO integrated from the start',
      description: "Optimization for generative AI is native to our approach. Not an add-on.",
    },
    {
      icon: 'Target',
      title: 'Business-centric',
      description: "We talk conversions and revenue. Your ranking interests us when it generates business.",
    },
    {
      icon: 'ChartBar',
      title: 'Truly data-driven',
      description: 'Rankwell One centralizes your Search performance. You know what works in real-time.',
    },
    {
      icon: 'Globe',
      title: 'Paris & Dubai',
      description: 'Two offices, one international vision. We support companies that think big.',
    },
  ],
};

// ============================================
// 9. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro, Ex-Moz',
};

// ============================================
// 10. FAQ DATA
// ============================================
export const faqData = {
  badge: 'FAQ',
  title: 'Frequently asked questions',
  description: 'Answers to the questions you have about our GEO & SEO approach, our methods and our results.',
  items: [
    {
      id: '1',
      question: 'What is GEO and why is it important?',
      answer: "GEO (Generative Engine Optimization) is optimization for AI-powered search engines. ChatGPT, Perplexity, Gemini and Google SGE don't work like classic Google. They synthesize information and cite sources. To be recommended by these AIs, your content must be structured differently: short, quotable sentences, sourced factual data, demonstrated topical authority. Companies optimized for GEO capture a growing audience before their competitors.",
    },
    {
      id: '2',
      question: 'What differentiates your approach from a traditional SEO agency?',
      answer: "Our major difference is the native integration of GEO in every project. A traditional SEO agency optimizes for Google. We optimize for all search engines, including AI. The other difference is our business-centric approach. We don't talk about rankings. We talk about conversions and revenue. Every action is measured by its business impact.",
    },
    {
      id: '3',
      question: 'How long until we see the first results?',
      answer: "The first visible results depend on the activated lever. SEA produces traffic from day one. SEO and GEO require 3 to 6 months for initial significant effects. Consolidated organic results are generally observed at 12 months. It's a long-term investment that builds lasting assets.",
    },
    {
      id: '4',
      question: 'Do you work with all industries?',
      answer: "We support companies from various sectors: e-commerce, B2B, SaaS, services, industry. The sector matters less than the ambition. Our clients share one thing in common: they want to generate business through Search, not just traffic. They're looking for a strategic partner, not just an executor.",
    },
    {
      id: '5',
      question: 'Why choose a Search-specialized digital marketing agency?',
      answer: "A generalist digital marketing agency spreads its efforts across all channels. Our Search specialization (SEO, SEA, GEO) allows us to go further in expertise and achieve concrete results. Search remains the most profitable acquisition channel long-term: it captures purchase intent where social media creates awareness. That's why we focus 100% of our energy on this lever.",
    },
  ],
};

// ============================================
// 11. CTA DATA
// ============================================
export const ctaData = {
  title: 'Ready to',
  titleHighlight: 'dominate Search?',
  description: "Free audit of your current visibility on Google and AI engines. We identify your opportunities and show you the path.",
  secondaryDescription: "First step: a 30-minute call to understand your challenges. No commitment.",
  buttonText: "Let's discuss your project",
  buttonHref: '/en/contact',
  checklistItems: [
    { id: '1', text: 'No commitment' },
    { id: '2', text: 'Free audit' },
    { id: '3', text: 'Actionable recommendations' },
  ],
};
