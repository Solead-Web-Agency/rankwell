/**
 * DATA - Page Dubai (Agence GEO & SEO à Dubaï)
 * URL: /agence-geo-seo/emirats/dubai (FR only)
 *
 * Page locale prioritaire avec présence physique
 * Mots-clés: Agence SEO Dubaï, Agence GEO Dubaï, SEO Dubai, SEO MENA
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence SEO et GEO à Dubaï pour le marché MENA | Rankwell',
  description:
    'Agence SEO et GEO implantée à Dubaï. Optimisation pour Google et les moteurs IA sur le marché MENA. Bureaux à Dubai, approche business centrix.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Émirats' },
    { label: 'Dubaï' },
  ] as BreadcrumbItem[],
  badge: 'dubaï',
  title: 'Agence SEO et GEO à Dubaï',
  description:
    'Rankwell a ouvert son bureau à Dubaï en 2023. Pour les entreprises qui visent le marché MENA ou qui s\'internationalisent depuis le Golfe, on est sur place. SEO, GEO, SEA et Data.',
  primaryCta: {
    text: 'Prendre rendez-vous à Dubaï',
    href: '/contact',
  },
  secondaryCta: {
    text: 'Comprendre le GEO',
    href: '#comprendre-geo',
  },
};

// ============================================
// INTRO
// ============================================
export const introData = {
  badge: 'Dubaï',
  accentColor: 'rw-blue' as const,
  title: 'Pourquoi travailler avec une agence implantée à Dubaï',
  paragraphs: [
    'Le marché MENA a ses propres règles. Requêtes multilingues, concurrence internationale intense, adoption rapide des nouvelles technologies. Une agence qui comprend ces dynamiques depuis le terrain fait la différence.',
    'Rankwell n\'a pas ouvert un bureau à Dubaï pour faire joli sur une carte. On l\'a fait parce que nos clients internationaux avaient besoin d\'un partenaire présent sur place. <strong>Même fuseau horaire, compréhension du marché local, rencontres en personne quand c\'est nécessaire.</strong>',
    'Découvrez comment notre équipe à Dubaï combine l\'expertise Search acquise depuis 2017 avec une connaissance concrète du marché Golfe et international.',
  ],
  tocItems: [
    { id: 'comprendre-geo', label: 'Comprendre le GEO', icon: 'Lightbulb' },
    { id: 'marche-mena', label: 'Le marché MENA', icon: 'Globe' },
    { id: 'pour-qui', label: 'À qui ça s\'adresse', icon: 'Users' },
    { id: 'expertises', label: 'Nos services', icon: 'Layers' },
    { id: 'bureaux', label: 'Notre bureau Dubaï', icon: 'Building2' },
    { id: 'faq', label: 'Questions fréquentes', icon: 'HelpCircle' },
  ] as TocItem[],
};

// ============================================
// BUREAU DUBAI
// ============================================
export const bureauData = {
  sectionId: 'bureaux',
  title: 'Notre bureau à Dubaï',
  description:
    'On croit aux vraies conversations. Celles où on dessine sur un tableau, où on challenge les idées, où on construit ensemble.',
  secondaryDescription:
    'Kick-off de projet, atelier stratégique, restitution d\'audit, ou simplement un café pour discuter de votre situation : on vous reçoit sur rendez-vous.',
  office: {
    title: 'Rankwell Dubai',
    subtitle: 'Notre bureau au cœur de Dubaï',
    address: 'Oud Metha Road 18th Street',
    city: 'Dubaï, Émirats Arabes Unis',
    transports: 'Oud Metha Metro Station',
    hours: 'Dimanche - Jeudi, 9h - 18h',
    phone: '+971 55 529 4430',
    email: 'theophile@rankwell.com',
    latitude: 25.2285,
    longitude: 55.3273,
  },
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'Rankwell Dubaï',
  title: 'Ce que notre bureau de Dubaï vous apporte',
  subtitle: 'Une approche complète du référencement, adaptée au marché MENA.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Building2',
      title: 'Présence locale',
      description: 'Bureaux à Dubaï pour les réunions en personne. Même fuseau horaire.',
    },
    {
      id: 2,
      icon: 'Globe',
      title: 'Expertise marché MENA',
      description: 'On comprend les spécificités de la région depuis le terrain.',
    },
    {
      id: 3,
      icon: 'Sparkles',
      title: 'GEO natif',
      description: 'Optimisation Google ET moteurs IA dès le départ.',
    },
    {
      id: 4,
      icon: 'Languages',
      title: 'SEO multilingue',
      description: 'Anglais, français, marchés arabophones.',
    },
  ],
};

// ============================================
// SECTION ÉDUCATIVE GEO
// ============================================
export const geoEducationData = {
  sectionId: 'comprendre-geo',
  badge: 'Comprendre le GEO',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Le GEO : le futur du Search est déjà là dans le Golfe',
  subtitle:
    'La région MENA adopte les nouvelles technologies plus vite que la moyenne mondiale. ChatGPT, Perplexity, Google AI Overviews sont déjà largement utilisés.',
  items: [
    {
      id: 1,
      title: 'Qu\'est-ce que le GEO ?',
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity, Claude ou les AI Overviews de Google. Contrairement au SEO qui vise le top des résultats, le GEO vise à faire de votre contenu LA source que l\'IA choisit de citer.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte plus au Moyen-Orient',
      desc: 'Les Émirats ont un taux de pénétration internet de 99%. Le gouvernement et le secteur privé investissent massivement dans l\'IA. Les utilisateurs s\'attendent à des expériences propulsées par l\'IA. Les utilisateurs MENA qui vous trouvent via les moteurs IA sont des prospects à forte valeur.',
    },
    {
      id: 3,
      title: 'Un marché anglophone aligné avec l\'IA',
      desc: 'Le business se fait en anglais dans le Golfe. Les moteurs IA sont les plus matures en anglais. Alignement parfait pour déployer des stratégies GEO efficaces. On maîtrise le SEO/GEO en anglais et en français, avec un réseau pour les marchés arabophones.',
    },
  ],
};

// ============================================
// CALLOUT MENA
// ============================================
export const calloutData = {
  label: 'Le marché MENA en chiffres',
  text: 'Les Émirats Arabes Unis comptent plus de 9 millions d\'habitants avec un PIB par habitant parmi les plus élevés au monde. La visibilité digitale ici génère un ROI significatif. Mais la concurrence est féroce : des entreprises du monde entier ciblent ce marché.',
  icon: 'TrendingUp' as const,
};

// ============================================
// SPÉCIFICITÉS MARCHÉ MENA
// ============================================
export const marcheMenaData = {
  sectionId: 'marche-mena',
  badge: 'Marché MENA',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Les spécificités du marché Search au Moyen-Orient',
  subtitle: 'Le Golfe n\'est pas l\'Europe ou les États-Unis. Les stratégies génériques qui fonctionnent ailleurs sous-performent souvent ici.',
  items: [
    {
      id: 1,
      title: 'Comportement de recherche multilingue',
      desc: 'Les utilisateurs cherchent en anglais, en arabe, parfois en français. Une stratégie mono-langue ne suffit pas. On construit des approches qui couvrent tous les points d\'entrée.',
    },
    {
      id: 2,
      title: 'Concurrence internationale',
      desc: 'Dubaï attire des entreprises du monde entier. Immobilier, finance, tourisme, luxe : des acteurs mondiaux se disputent les mêmes mots-clés. Se démarquer demande une stratégie intelligente.',
    },
    {
      id: 3,
      title: 'Semaine du dimanche au jeudi',
      desc: 'Le Golfe fonctionne sur un calendrier différent. Avoir une agence sur le même rythme signifie une communication plus fluide, des deadlines alignées.',
    },
    {
      id: 4,
      title: 'Contexte culturel spécifique',
      desc: 'Le contenu qui résonne localement diffère de ce qui marche sur les marchés occidentaux. On comprend ce qui parle aux audiences MENA.',
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'Est-ce pertinent pour vous ?',
  subtitle: 'Notre expertise depuis Dubaï s\'adresse à différents profils d\'entreprises. Voici les situations où on peut vraiment vous aider.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous vous développez dans le Golfe',
      description: 'Entreprise européenne ou internationale qui s\'implante à Dubaï ou cible les marchés MENA. Vous avez besoin d\'un partenaire qui comprend les deux mondes.',
    },
    {
      label: 'Vous êtes basé aux Émirats',
      description: 'Entreprise locale qui veut dominer le Search sur son marché. Collaboration en face-à-face avec une agence qui comprend les dynamiques locales.',
    },
    {
      label: 'Vous vous internationalisez depuis Dubaï',
      description: 'Vous utilisez Dubaï comme hub pour vous développer mondialement. Stratégie SEO multi-marchés avec une méthodologie cohérente.',
    },
    {
      label: 'Vous voulez l\'avantage IA',
      description: 'Entreprise visionnaire qui veut être citée par les moteurs IA, pas juste rankée sur Google. L\'expertise GEO est notre spécialité.',
    },
  ],
  ctaTitle: 'Pas sûr que ce soit pour vous ?',
  ctaDescription: 'Le premier échange est sans engagement. On discute de votre situation, on vous dit honnêtement si on peut vous aider.',
  ctaButtonText: 'Discutons de votre projet',
  ctaButtonHref: '/contact',
};

// ============================================
// SERVICES GEO & SEO (mêmes que /agence-geo-seo)
// ============================================
export const expertisesData = {
  sectionId: 'expertises',
  badge: 'Nos services',
  accentColor: 'rw-blue' as const,
  title: 'Nos services GEO & SEO à Dubaï',
  subtitle: 'Quatre services complémentaires pour couvrir l\'ensemble de vos besoins en référencement naturel.',
  items: [
    {
      id: 1,
      title: 'Audit SEO complet',
      description: 'Analyse technique, sémantique et concurrentielle. Nous identifions ce qui freine votre visibilité et ce qui peut l\'accélérer.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, structure de contenu, performance technique. Les fondations d\'une visibilité durable.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Stratégie de liens pensée pour renforcer votre autorité. Pas de spam, pas de réseaux douteux. De vrais liens qui comptent.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready. Du contenu qui se positionne et qui convertit. Pas du remplissage.',
      href: '/agence-geo-seo/creation-contenu',
      buttonText: 'En savoir plus',
      imageAlt: 'Création de contenu SEO',
    },
  ],
};

// ============================================
// CHIFFRES CLÉS
// ============================================
export const chiffresData = {
  sectionId: 'chiffres',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Users',
      number: 350,
      suffix: '+',
      label: 'Clients accompagnés',
    },
    {
      id: 2,
      icon: 'Calendar',
      number: 8,
      suffix: ' ans',
      label: 'D\'expertise Search',
    },
    {
      id: 3,
      icon: 'ThumbsUp',
      number: 99,
      suffix: '%',
      label: 'Clients satisfaits',
    },
    {
      id: 4,
      icon: 'Target',
      number: 100,
      suffix: '%',
      label: 'Business centrix',
    },
  ],
};

// ============================================
// PROCESS
// ============================================
export const processData = {
  sectionId: 'process',
  badge: 'Notre méthode',
  accentColor: 'rw-blue' as const,
  title: 'Comment démarre un accompagnement depuis Dubaï',
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier rendez-vous',
      description: 'À notre bureau, chez vous ou en visio. Pas de pitch commercial.',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Audit',
      description: 'Diagnostic complet : SEO, GEO-readiness, technique, concurrence.',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Roadmap',
      description: 'Stratégie sur mesure avec priorités classées par impact.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustement. Transparence via Rankwell One.',
    },
  ],
};

// ============================================
// QUOTE
// ============================================
export const quoteData = {
  quote: 'In a world where AI curates information, being the source that AI trusts becomes the ultimate competitive advantage.',
  author: 'Rand Fishkin',
  role: 'Founder SparkToro',
};

// ============================================
// FAQ
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  title: 'Questions fréquentes sur notre agence à Dubaï',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Où se situe exactement votre bureau à Dubaï ?',
      answer: 'Notre bureau de Dubaï est situé à Oud Metha. Nous recevons les clients sur rendez-vous du dimanche au jeudi, de 9h à 18h. Nous pouvons aussi nous déplacer dans vos locaux partout à Dubaï ou aux Émirats.',
    },
    {
      id: '2',
      question: 'Travaillez-vous avec des entreprises hors des Émirats ?',
      answer: 'Oui. Nous travaillons avec des entreprises ciblant la région MENA depuis n\'importe où dans le monde, ainsi qu\'avec des entreprises basées aux Émirats qui ciblent les marchés internationaux. Notre bureau de Dubaï sert de hub pour le Moyen-Orient, l\'Afrique du Nord et les connexions vers les marchés européens via notre bureau parisien.',
    },
    {
      id: '3',
      question: 'Quelles langues supportez-vous pour le SEO ?',
      answer: 'Nous exécutons des stratégies SEO directement en anglais et en français. Pour les marchés arabophones, nous travaillons avec des spécialistes natifs dans notre réseau. Le SEO multilingue est l\'une de nos forces principales pour la région MENA.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi c\'est important ?',
      answer: 'GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA comme ChatGPT, Perplexity et les fonctionnalités IA de Google. Alors que les utilisateurs obtiennent de plus en plus leurs réponses de l\'IA plutôt qu\'en cliquant sur les résultats de recherche, être la source que l\'IA cite devient crucial. Nous intégrons le GEO dans chaque stratégie SEO dès le départ.',
    },
    {
      id: '5',
      question: 'En quoi votre approche diffère des autres agences SEO à Dubaï ?',
      answer: 'Trois choses nous différencient : l\'intégration native du GEO (pas une réflexion après coup), une vraie présence locale (notre équipe est vraiment ici, pas un support distant), et la méthodologie business centrix (on mesure le succès en conversions et en revenus, pas juste en rankings).',
    },
    {
      id: '6',
      question: 'Peut-on se rencontrer avant de s\'engager ?',
      answer: 'Absolument. Nous proposons une consultation initiale gratuite pour comprendre votre situation et évaluer si on est le bon fit. Cette réunion peut avoir lieu à notre bureau de Dubaï, dans vos locaux ou en visio selon votre préférence. Sans engagement.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Rencontrons-nous à Dubaï',
  description:
    'Premier échange de 30 minutes dans notre bureau ou en visio. Sans engagement. On écoute, on analyse, on vous dit ce qu\'on en pense.',
  buttonText: 'Prendre rendez-vous à Dubaï',
  buttonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// AUTRES VILLES (pour le maillage interne)
// ============================================
export const autresVillesData = {
  title: 'Nous accompagnons aussi des entreprises dans ces villes',
  cities: [
    { label: 'Paris', href: '/agence-geo-seo/france/paris' },
    { label: 'Dubaï', href: '/agence-geo-seo/emirats/dubai' },
    { label: 'Lyon', href: '/agence-geo-seo/france/lyon' },
    { label: 'Marseille', href: '/agence-geo-seo/france/marseille' },
    { label: 'Toulouse', href: '/agence-geo-seo/france/toulouse' },
    { label: 'Bordeaux', href: '/agence-geo-seo/france/bordeaux' },
    { label: 'Lille', href: '/agence-geo-seo/france/lille' },
    { label: 'Nantes', href: '/agence-geo-seo/france/nantes' },
    { label: 'Strasbourg', href: '/agence-geo-seo/france/strasbourg' },
    { label: 'Nice', href: '/agence-geo-seo/france/nice' },
    { label: 'Montpellier', href: '/agence-geo-seo/france/montpellier' },
    { label: 'Rennes', href: '/agence-geo-seo/france/rennes' },
  ],
};
