/**
 * QUI SOMMES NOUS - Données de contenu
 * Page de présentation de l'agence Rankwell
 */

import type { TimelineStep, KeyFigureItem } from '@/components/shared/global';
import type { StickyFeatureItem } from '@/components/shared/services';
import type { ServiceItem } from '@/components/shared/homepage';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: "Qui sommes-nous | Rankwell - Agence GEO, SEO & SEA",
  description: "Découvrez l'histoire de Rankwell, agence Search fondée en 2017. GEO, SEO, SEA et Data avec une approche business centrix. Bureaux à Paris et Dubaï.",
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Qui sommes-nous' },
  ],
  badge: "L'agence Rankwell",
  title: "Rankwell, l'agence qui pense Search autrement",
  description: "Depuis 2017, on accompagne les entreprises qui refusent de choisir entre visibilité et performance. GEO, SEO, SEA, Data : tout est lié, on traite tout. Avec une approche business centrix.",
  primaryCta: {
    text: "Prendre contact",
    href: "/contact",
  },
  secondaryCta: {
    text: "Nos services",
    href: "#expertises",
  },
};

// ============================================
// PRÉSENTATION (FeaturesGrid 2 colonnes - au-dessus de la timeline)
// ============================================
export const presentationData = {
  sectionId: "presentation",
  badge: "Qui sommes-nous",
  badgeVariant: "colored" as const,
  title: "Une agence Search internationale",
  subtitle: "SEO, SEA, GEO et Data : on construit votre visibilité là où vos clients cherchent.",
  accentColor: "rw-blue" as const,
  columns: 2 as const,
  bgWhite: true,
  items: [
    {
      id: 1,
      image: "/images/pages/qui-sommes-nous/photo-team.webp",
      alt: "L'équipe Rankwell",
      title: "Notre expertise",
      desc: "Rankwell est une agence experte en référencement naturel (SEO), référencement payant (SEA), optimisation pour les IA génératives (GEO) et Data. Nous aidons les entreprises à développer leur visibilité sur Google, Bing, ChatGPT, Perplexity et les autres moteurs de recherche.",
    },
    {
      id: 2,
      image: "/images/pages/qui-sommes-nous/fondateurs.webp",
      alt: "Fondateurs de Rankwell",
      title: "Notre approche",
      desc: "Repousser les limites est dans notre ADN. Nous proposons un accompagnement sur-mesure, adapté à votre profil et à vos besoins en France comme à l'international. Une équipe de natifs pour créer du contenu local sur chaque marché.",
    },
  ],
};

// ============================================
// HISTOIRE / TIMELINE (ProcessTimeline)
// ============================================
export const histoireData = {
  sectionId: "histoire",
  badge: "Notre histoire",
  badgeClassName: "bg-rw-purple-light text-rw-purple",
  title: "De 2017 à aujourd'hui",
  subtitle: "En 2017, Véronique, Steve et Benjamin s'associent pour créer la première agence SEO/SEA multilingue internationale. Aujourd'hui, Rankwell compte une vingtaine d'experts dans toutes les compétences du Search.",
  accentColor: "rw-purple",
  stepLabel: "",
  compact: true,
  steps: [
    {
      id: 1,
      title: "2017",
      description: "Création de Rankwell à Paris. Focus SEO et accompagnement sur-mesure.",
    },
    {
      id: 2,
      title: "2019",
      description: "Lancement de l'offre SEA. Une vision unifiée du Search payant et organique.",
    },
    {
      id: 3,
      title: "2023",
      description: "Ouverture du bureau de Dubaï. Accompagnement des entreprises sur les marchés MENA.",
    },
    {
      id: 4,
      title: "2024",
      description: "Intégration du GEO. Optimisation native pour les moteurs génératifs.",
    },
    {
      id: 5,
      title: "2025",
      description: "Lancement de Rankwell One. Pilotage centralisé des performances Search.",
    },
  ] as TimelineStep[],
};

// ============================================
// CHIFFRES CLÉS (KeyFiguresAnimated)
// ============================================
export const keyFiguresData = {
  sectionId: "chiffres",
  badge: "Chiffres clés",
  badgeClassName: "bg-rw-cyan-light text-rw-cyan",
  title: "Rankwell en quelques chiffres",
  subtitle: "8 ans d'expérience, 2 bureaux, une obsession : vos résultats.",
  accentColor: "rw-cyan" as const,
  items: [
    {
      id: 1,
      icon: "Users",
      number: 350,
      suffix: "+",
      label: "Clients accompagnés",
    },
    {
      id: 2,
      icon: "Calendar",
      number: 8,
      suffix: " ans",
      label: "D'expertise Search",
    },
    {
      id: 3,
      icon: "MapPin",
      number: 2,
      label: "Bureaux (Paris & Dubaï)",
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
  badge: "Nos expertises",
  title: "Ce qu'on fait, concrètement",
  description: "Trois pôles d'expertise complémentaires pour une stratégie Search complète.",
  items: [
    {
      id: 1,
      title: "GEO & SEO",
      description: "Référencement naturel et optimisation pour les moteurs génératifs. On construit votre visibilité sur Google et les IA comme ChatGPT ou Perplexity.",
      href: "/agence-geo-seo",
      buttonText: "Découvrir le GEO & SEO",
    },
    {
      id: 2,
      title: "SEA",
      description: "Campagnes Google Ads pilotées par le ROI. On transforme chaque euro investi en résultat mesurable avec une approche business centrix.",
      href: "/agence-sea",
      buttonText: "Découvrir le SEA",
    },
    {
      id: 3,
      title: "Data",
      description: "Tracking, Analytics et CRO. On mesure, on analyse, on optimise. Chaque décision est basée sur des données fiables.",
      href: "/agence-data",
      buttonText: "Découvrir la Data",
    },
  ] as ServiceItem[],
};

// ============================================
// VALEURS (StickyFeatures)
// ============================================
export const valeursData = {
  sectionId: "valeurs",
  badge: "Nos valeurs",
  accentColor: "rw-blue" as const,
  title: "Ce en quoi on croit",
  subtitle: "Quatre convictions qui guident notre travail au quotidien.",
  items: [
    {
      id: 1,
      icon: "Eye",
      title: "Transparence",
      description: "On ne vend pas de \"méthode secrète\". On vous explique ce qu'on fait, pourquoi on le fait, et ce que ça donne.",
    },
    {
      id: 2,
      icon: "TrendingUp",
      title: "Résultats",
      description: "Ce qui compte, c'est ce qui se passe sur votre site, dans votre pipe commercial, sur votre compte en banque.",
    },
    {
      id: 3,
      icon: "Clock",
      title: "Long terme",
      description: "On construit des assets durables. Du contenu qui performe dans 3 ans, pas des hacks qui s'effondrent.",
    },
    {
      id: 4,
      icon: "RefreshCw",
      title: "Adaptation",
      description: "Le Search évolue en permanence. On reste en veille, on ajuste, on anticipe. Votre stratégie vit avec son environnement.",
    },
  ] as StickyFeatureItem[],
};

// ============================================
// PRÉSENCE / BUREAUX (OfficesMap avec cartes)
// ============================================
export const presenceData = {
  sectionId: "presence",
  badge: "Nos bureaux",
  title: "Paris et Dubaï",
  subtitle: "Deux implantations stratégiques pour accompagner vos projets en Europe et au Moyen-Orient.",
  accentColor: "rw-purple" as const,
  cta: {
    text: "Découvrir nos bureaux",
    href: "/agence/nos-bureaux",
  },
  offices: [
    {
      id: 1,
      title: "Paris",
      description: "Notre siège historique, dans le 17e arrondissement. C'est ici qu'on accompagne la majorité de nos clients français et européens.",
      address: "8 place Boulnois, 75017 Paris",
      latitude: 48.8792,
      longitude: 2.2962,
    },
    {
      id: 2,
      title: "Dubaï",
      description: "Notre antenne pour les marchés du Golfe et au-delà. Les entreprises qui visent le Moyen-Orient ou l'Asie ont besoin d'un partenaire local.",
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
  title: "Envie de travailler avec nous ?",
  description: "On ne travaille pas avec tout le monde. On choisit nos clients comme ils nous choisissent : sur la base d'une vraie compatibilité.",
  buttonText: "Prendre contact",
};
