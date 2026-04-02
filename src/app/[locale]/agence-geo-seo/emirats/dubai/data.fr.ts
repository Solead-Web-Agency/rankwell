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
  title: 'Agence SEO et GEO à Dubaï pour le marché MENA - Rankwell',
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
      desc: 'GEO (Generative Engine Optimization) est la discipline qui consiste à optimiser vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity, Claude ou les AI Overviews de Google. Contrairement au SEO classique qui vise le top 10 des résultats, le GEO vise à faire de votre contenu LA source que l\'IA choisit de citer et de reformuler dans ses réponses conversationnelles.',
    },
    {
      id: 2,
      title: 'Pourquoi le GEO compte plus au Moyen-Orient',
      desc: 'Les Émirats affichent un taux de pénétration internet de 99 % et le gouvernement investit massivement dans l\'IA avec la stratégie nationale UAE AI 2031. Les utilisateurs de la région adoptent ChatGPT et les assistants IA plus vite que la moyenne mondiale. Ceux qui vous trouvent via ces moteurs sont des prospects à forte valeur ajoutée, habitués à prendre des décisions rapides.',
    },
    {
      id: 3,
      title: 'Un marché anglophone aligné avec l\'IA',
      desc: 'Le business se fait en anglais dans le Golfe, et les moteurs IA sont les plus matures dans cette langue. C\'est un alignement parfait pour déployer des stratégies GEO performantes dès maintenant. Notre équipe exécute le SEO et le GEO en anglais et en français, avec un réseau de spécialistes natifs pour les marchés arabophones.',
    },
    {
      id: 4,
      title: 'Free zones et écosystème digital',
      desc: 'Dubaï compte plus de 30 free zones spécialisées, dont DMCC (26 000 entreprises) et DIFC, qui attirent chaque année des milliers de sociétés internationales. Chacune de ces entreprises a besoin de visibilité digitale sur un marché ultra-compétitif. Le GEO permet de se démarquer là où le SEO classique ne suffit plus face à cette densité concurrentielle.',
    },
  ],
};

// ============================================
// CALLOUT MENA
// ============================================
export const calloutData = {
  label: 'Le marché MENA en chiffres',
  text: 'Le PIB de Dubaï a progressé de 4,4 % au premier semestre 2025, porté par un secteur non-pétrolier qui représente plus de 95 % de l\'économie. Le marché e-commerce des Émirats pèse 8,8 milliards de dollars et devrait atteindre 13,8 milliards d\'ici 2029. La concurrence est féroce — des entreprises du monde entier ciblent ce marché à fort pouvoir d\'achat.',
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
      description: 'Entreprise européenne ou internationale qui s\'implante à Dubaï ou cible les marchés MENA. Vous avez besoin d\'un partenaire qui comprend les deux mondes — les codes du business local et les exigences du Search multilingue anglais-arabe-français.',
    },
    {
      label: 'Vous êtes basé aux Émirats',
      description: 'Entreprise locale qui veut dominer le Search sur son marché face à une concurrence internationale féroce. On se rencontre en personne, on travaille dans le même fuseau horaire et on comprend les dynamiques spécifiques de chaque free zone.',
    },
    {
      label: 'Immobilier, finance, tourisme ou luxe à Dubaï',
      description: 'Ces quatre secteurs représentent l\'essentiel du PIB de Dubaï et la concurrence SEO y est mondiale. Nous construisons des stratégies qui combinent autorité locale et visibilité internationale pour capter une clientèle à très fort pouvoir d\'achat.',
    },
    {
      label: 'Startup ou scale-up en free zone',
      description: 'DMCC, DIFC, Dubai Silicon Oasis : chaque année, des milliers de nouvelles entreprises s\'installent dans les free zones. Vous devez gagner en visibilité rapidement face à des concurrents déjà établis. Le GEO vous donne un avantage compétitif immédiat.',
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
      description: 'Analyse technique, sémantique et concurrentielle adaptée au marché MENA. On identifie vos freins à la visibilité et les leviers de croissance face aux acteurs internationaux.',
      href: '/agence-geo-seo/audit',
      buttonText: 'En savoir plus',
      imageAlt: 'Audit SEO complet',
    },
    {
      id: 2,
      title: 'SEO sémantique & technique',
      description: 'Optimisation on-site, architecture de contenu multilingue et performance technique. Les fondations d\'un référencement durable sur un marché anglophone-arabophone.',
      href: '/agence-geo-seo/technique-semantique',
      buttonText: 'En savoir plus',
      imageAlt: 'SEO sémantique et technique',
    },
    {
      id: 3,
      title: 'Netlinking',
      description: 'Acquisition de liens de qualité auprès de médias régionaux et internationaux. Pas de spam ni de réseaux douteux — de vrais liens qui construisent votre autorité dans le Golfe.',
      href: '/agence-geo-seo/netlinking',
      buttonText: 'En savoir plus',
      imageAlt: 'Stratégie Netlinking',
    },
    {
      id: 4,
      title: 'Création de contenu',
      description: 'Rédaction SEO et GEO-ready en anglais et en français. Du contenu expert, citation-ready, pensé pour être repris par les moteurs IA et convertir une audience internationale.',
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
  quote: 'In a crowded marketplace, fitting in is a failure. In a busy marketplace, not standing out is the same as being invisible.',
  author: 'Seth Godin',
  role: 'Author, Purple Cow',
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
      answer: 'Notre bureau est situé à Oud Metha, à proximité de la station de métro du même nom. Nous recevons les clients sur rendez-vous du dimanche au jeudi, de 9h à 18h. Nous pouvons aussi nous déplacer dans vos locaux partout à Dubaï, Abu Dhabi ou dans les autres émirats selon les besoins du projet.',
    },
    {
      id: '2',
      question: 'Travaillez-vous avec des entreprises hors des Émirats ?',
      answer: 'Oui, notre bureau de Dubaï fonctionne comme un hub régional. Nous accompagnons des entreprises ciblant la région MENA depuis l\'Europe ou l\'Asie, ainsi que des sociétés basées aux Émirats qui visent des marchés internationaux. La connexion avec notre bureau parisien permet de couvrir simultanément les marchés européens et moyen-orientaux avec une méthodologie cohérente.',
    },
    {
      id: '3',
      question: 'Quelles langues supportez-vous pour le SEO ?',
      answer: 'Nous exécutons des stratégies SEO et GEO directement en anglais et en français — les deux langues de travail principales à Dubaï. Pour les marchés arabophones, nous collaborons avec des spécialistes natifs de notre réseau. Le SEO multilingue est essentiel dans une région où les requêtes de recherche mélangent trois langues selon l\'intention et le contexte.',
    },
    {
      id: '4',
      question: 'Qu\'est-ce que le GEO et pourquoi c\'est important à Dubaï ?',
      answer: 'Le GEO (Generative Engine Optimization) optimise vos contenus pour être cités par les moteurs IA comme ChatGPT, Perplexity et les AI Overviews de Google. À Dubaï, où le taux de pénétration internet atteint 99 % et l\'adoption de l\'IA est parmi les plus rapides au monde, être la source que l\'IA cite est un avantage concurrentiel décisif. Nous intégrons le GEO dans chaque stratégie dès le premier jour.',
    },
    {
      id: '5',
      question: 'En quoi votre approche diffère des autres agences SEO à Dubaï ?',
      answer: 'Trois éléments nous différencient. L\'intégration native du GEO dans chaque stratégie SEO — ce n\'est pas un service optionnel mais notre ADN. Une vraie présence locale avec des consultants seniors basés à Dubaï, pas un support distant opéré depuis l\'étranger. Et notre méthodologie business centrix qui mesure le succès en leads générés et en revenus attribuables, pas uniquement en positions Google.',
    },
    {
      id: '6',
      question: 'Quels secteurs accompagnez-vous à Dubaï ?',
      answer: 'Nous travaillons avec des entreprises de secteurs variés : immobilier et promotion, finance et fintech (DIFC), tourisme et hôtellerie de luxe, e-commerce, SaaS et tech. Le dénominateur commun est la volonté de générer du business mesurable via le Search sur un marché où la concurrence est mondiale. Les free zones DMCC et DIFC comptent à elles seules plus de 30 000 entreprises inscrites.',
    },
    {
      id: '7',
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'Sur le marché MENA, les premiers résultats SEO significatifs apparaissent entre 3 et 6 mois selon la concurrence sectorielle et votre point de départ. Le GEO peut produire des résultats plus rapides car les moteurs IA valorisent la qualité du contenu plus que l\'ancienneté du domaine. Nous établissons des indicateurs de progression dès le premier mois et partageons tout via Rankwell One en temps réel.',
    },
    {
      id: '8',
      question: 'Peut-on se rencontrer avant de s\'engager ?',
      answer: 'Absolument. Nous proposons un premier échange gratuit de 30 minutes pour comprendre votre situation et évaluer si nous sommes le bon partenaire. Ce rendez-vous peut avoir lieu à notre bureau d\'Oud Metha, dans vos locaux ou en visio selon votre préférence. Pas de pitch commercial, pas d\'engagement — juste une conversation honnête sur vos enjeux de visibilité.',
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
