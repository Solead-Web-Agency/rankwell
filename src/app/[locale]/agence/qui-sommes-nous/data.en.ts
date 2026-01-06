/**
 * ABOUT US - Content Data
 * Rankwell agency presentation page
 */

import type { TimelineStep, KeyFigureItem } from '@/components/shared/global';
import type { StickyFeatureItem } from '@/components/shared/services';
import type { ServiceItem } from '@/components/shared/homepage';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: "About Us | Rankwell - GEO, SEO & SEA Agency",
  description: "Discover the story of Rankwell, a Search agency founded in 2017. GEO, SEO, SEA and Data with a business centrix approach. Offices in Paris and Dubai.",
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },
    { label: 'About us' },
  ],
  badge: "About Rankwell",
  title: "Rankwell, the agency that thinks Search differently",
  description: "Since 2017, we've supported businesses that refuse to choose between visibility and performance. GEO, SEO, SEA, Data: everything is connected, we handle it all. With a business centrix approach.",
  primaryCta: {
    text: "Get in touch",
    href: "/en/contact",
  },
  secondaryCta: {
    text: "Our services",
    href: "#expertises",
  },
};

// ============================================
// PRÉSENTATION (FeaturesGrid 2 columns - above timeline)
// ============================================
export const presentationData = {
  sectionId: "presentation",
  badge: "About us",
  badgeVariant: "colored" as const,
  title: "An international Search agency",
  subtitle: "SEO, SEA, GEO and Data: we build your visibility where your customers search.",
  accentColor: "rw-blue" as const,
  columns: 2 as const,
  bgWhite: true,
  items: [
    {
      id: 1,
      image: "/images/pages/qui-sommes-nous/photo-team.webp",
      alt: "The Rankwell team",
      title: "Our expertise",
      desc: "Rankwell is an agency specialized in organic search (SEO), paid search (SEA), generative AI optimization (GEO) and Data. We help businesses grow their visibility on Google, Bing, ChatGPT, Perplexity and other search engines.",
    },
    {
      id: 2,
      image: "/images/pages/qui-sommes-nous/fondateurs.webp",
      alt: "Rankwell founders",
      title: "Our approach",
      desc: "Pushing boundaries is in our DNA. We offer tailored support, adapted to your profile and needs in France and internationally. A team of native speakers to create local content in each market.",
    },
  ],
};

// ============================================
// HISTOIRE / TIMELINE (ProcessTimeline)
// ============================================
export const histoireData = {
  sectionId: "histoire",
  badge: "Our story",
  badgeClassName: "bg-rw-purple-light text-rw-purple",
  title: "From 2017 to today",
  subtitle: "In 2017, Véronique, Steve and Benjamin joined forces to create the first international multilingual SEO/SEA agency. Today, Rankwell has about twenty experts across all Search disciplines.",
  accentColor: "rw-purple",
  stepLabel: "",
  compact: true,
  steps: [
    {
      id: 1,
      title: "2017",
      description: "Rankwell founded in Paris. Focus on SEO and tailored support.",
    },
    {
      id: 2,
      title: "2019",
      description: "Launch of SEA services. A unified vision of paid and organic Search.",
    },
    {
      id: 3,
      title: "2023",
      description: "Dubai office opens. Supporting businesses in MENA markets.",
    },
    {
      id: 4,
      title: "2024",
      description: "GEO integration. Native optimization for generative search engines.",
    },
    {
      id: 5,
      title: "2025",
      description: "Launch of Rankwell One. Centralized Search performance management.",
    },
  ] as TimelineStep[],
};

// ============================================
// CHIFFRES CLÉS (KeyFiguresAnimated)
// ============================================
export const keyFiguresData = {
  sectionId: "chiffres",
  badge: "Key figures",
  badgeClassName: "bg-rw-cyan-light text-rw-cyan",
  title: "Rankwell in numbers",
  subtitle: "8 years of experience, 2 offices, one obsession: your results.",
  accentColor: "rw-cyan" as const,
  items: [
    {
      id: 1,
      icon: "Users",
      number: 350,
      suffix: "+",
      label: "Clients supported",
    },
    {
      id: 2,
      icon: "Calendar",
      number: 8,
      suffix: " years",
      label: "Of Search expertise",
    },
    {
      id: 3,
      icon: "MapPin",
      number: 2,
      label: "Offices (Paris & Dubai)",
    },
    {
      id: 4,
      icon: "Target",
      number: 100,
      suffix: "%",
      label: "Business centrix",
    },
  ] as KeyFigureItem[],
};

// ============================================
// NOS EXPERTISES (ServicesHomepage)
// ============================================
export const expertisesData = {
  sectionId: "expertises",
  badge: "Our expertise",
  title: "What we do, concretely",
  description: "Three complementary areas of expertise for a complete Search strategy.",
  items: [
    {
      id: 1,
      title: "GEO & SEO",
      description: "Organic search and optimization for generative engines. We build your visibility on Google and AIs like ChatGPT or Perplexity.",
      href: "/en/geo-seo-agency",
      buttonText: "Discover GEO & SEO",
    },
    {
      id: 2,
      title: "SEA",
      description: "ROI-driven Google Ads campaigns. We turn every euro invested into measurable results with a business centrix approach.",
      href: "/en/sea-agency",
      buttonText: "Discover SEA",
    },
    {
      id: 3,
      title: "Data",
      description: "Tracking, Analytics and CRO. We measure, analyze, optimize. Every decision is based on reliable data.",
      href: "/en/data-agency",
      buttonText: "Discover Data",
    },
  ] as ServiceItem[],
};

// ============================================
// VALEURS (StickyFeatures)
// ============================================
export const valeursData = {
  sectionId: "valeurs",
  badge: "Our values",
  accentColor: "rw-blue" as const,
  title: "What we believe in",
  subtitle: "Four convictions that guide our daily work.",
  items: [
    {
      id: 1,
      icon: "Eye",
      title: "Transparency",
      description: "We don't sell \"secret methods\". We explain what we do, why we do it, and what results it brings.",
    },
    {
      id: 2,
      icon: "TrendingUp",
      title: "Results",
      description: "What matters is what happens on your site, in your sales pipeline, in your bank account.",
    },
    {
      id: 3,
      icon: "Clock",
      title: "Long term",
      description: "We build lasting assets. Content that performs in 3 years, not hacks that collapse.",
    },
    {
      id: 4,
      icon: "RefreshCw",
      title: "Adaptation",
      description: "Search constantly evolves. We stay alert, adjust, anticipate. Your strategy lives with its environment.",
    },
  ] as StickyFeatureItem[],
};

// ============================================
// PRÉSENCE / BUREAUX (OfficesMap with cards)
// ============================================
export const presenceData = {
  sectionId: "presence",
  badge: "Our offices",
  title: "Paris and Dubai",
  subtitle: "Two strategic locations to support your projects in Europe and the Middle East.",
  accentColor: "rw-purple" as const,
  cta: {
    text: "Discover our offices",
    href: "/en/agency/our-offices",
  },
  offices: [
    {
      id: 1,
      title: "Paris",
      description: "Our historic headquarters in the 17th arrondissement. This is where we support most of our French and European clients.",
      address: "8 place Boulnois, 75017 Paris",
      latitude: 48.8792,
      longitude: 2.2962,
    },
    {
      id: 2,
      title: "Dubai",
      description: "Our hub for Gulf markets and beyond. Companies targeting the Middle East or Asia need a local partner.",
      address: "Oud Metha Road 18th Street, Dubai",
      latitude: 25.2367,
      longitude: 55.3093,
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: "Want to work with us?",
  description: "We don't work with everyone. We choose our clients as they choose us: based on genuine compatibility.",
  buttonText: "Get in touch",
};
