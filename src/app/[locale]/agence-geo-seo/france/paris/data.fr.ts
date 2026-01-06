/**
 * DATA - Page Paris (Agence GEO & SEO à Paris)
 * URL: /agence-geo-seo/france/paris (FR only)
 *
 * Page locale prioritaire avec présence physique
 * Mots-clés: Agence SEO Paris, Agence GEO Paris, Référencement Paris
 */

import type { BreadcrumbItem, TocItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Agence GEO et SEO à Paris | Référencement Google & IA - Rankwell',
  description:
    'Agence GEO et SEO à Paris. Référencement Google et optimisation pour les IA génératives. Bureaux dans le 17e. Approche business centrix orientée résultats.',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'France', href: '/agence-geo-seo/france' },
    { label: 'Paris' },
  ] as BreadcrumbItem[],
  badge: 'paris',
  title: 'Agence GEO et SEO à Paris',
  description:
    'Google n\'est plus le seul moteur de recherche. ChatGPT, Perplexity, Gemini répondent aussi à vos futurs clients. Rankwell vous aide à être visible sur les deux fronts.',
  primaryCta: {
    text: 'Prendre rendez-vous',
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
  badge: 'Paris',
  accentColor: 'rw-blue' as const,
  title: 'Une agence SEO à Paris qui intègre le GEO',
  paragraphs: [
    'Le référencement naturel évolue. Depuis 2023, une part croissante des recherches passe par des interfaces conversationnelles : ChatGPT, Perplexity, Gemini, et bientôt Google avec son AI Overview.',
    'Ces moteurs IA ne fonctionnent pas comme Google. Ils ne renvoient pas une liste de liens. Ils donnent une réponse, parfois avec des sources citées. La question devient donc : <strong>est-ce que votre entreprise fait partie des sources que ces IA considèrent comme fiables et pertinentes ?</strong>',
    'C\'est ce qu\'on appelle le GEO (Generative Engine Optimization). Depuis nos bureaux parisiens, nous combinons SEO et GEO pour construire une visibilité durable sur Google ET sur les moteurs IA.',
  ],
  tocItems: [
    { id: 'bureaux', label: 'Nos bureaux Paris', icon: 'Building2' },
    { id: 'comprendre-geo', label: 'Comprendre le GEO', icon: 'Lightbulb' },
    { id: 'approche', label: 'Notre approche', icon: 'Target' },
    { id: 'pour-qui', label: 'À qui ça s\'adresse', icon: 'Users' },
    { id: 'expertises', label: 'Nos expertises', icon: 'Layers' },
    { id: 'faq', label: 'Questions fréquentes', icon: 'HelpCircle' },
  ] as TocItem[],
};

// ============================================
// BUREAU PARIS
// ============================================
export const bureauData = {
  sectionId: 'bureaux',
  title: 'Nos bureaux à Paris',
  description:
    'On croit aux vraies conversations. Celles où on dessine sur un tableau, où on challenge les idées, où on construit ensemble.',
  secondaryDescription:
    'Kick-off de projet, atelier stratégique, restitution d\'audit, ou simplement un café pour discuter de votre situation : on vous reçoit sur rendez-vous.',
  office: {
    title: 'Rankwell Paris',
    subtitle: 'Notre siège, dans le 17e arrondissement',
    address: '8 place Boulnois',
    city: '75017 Paris, France',
    transports: 'Ligne 2 Ternes, Ligne 3 Pereire, RER A Charles de Gaulle Étoile',
    hours: 'Lundi - Vendredi, 10h - 19h',
    phone: '01 82 28 30 00',
    email: 'contact@rankwell.fr',
    latitude: 48.8792,
    longitude: 2.2962,
  },
};

// ============================================
// RECAP BOX
// ============================================
export const recapData = {
  sectionId: 'recap',
  badge: 'Rankwell Paris',
  title: 'Ce que Rankwell apporte aux entreprises parisiennes',
  subtitle: 'Une approche complète du référencement, adaptée aux évolutions du Search.',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: 1,
      icon: 'Sparkles',
      title: 'Expertise GEO et SEO combinée',
      description: 'Visible sur Google et les moteurs IA. Une stratégie unifiée pour les deux fronts.',
    },
    {
      id: 2,
      icon: 'Target',
      title: 'Approche business centrix',
      description: 'On mesure les résultats en conversions, pas en positions. Votre ROI avant tout.',
    },
    {
      id: 3,
      icon: 'UserCheck',
      title: 'Consultants seniors',
      description: 'Des experts qui pilotent votre projet de A à Z. Pas de turnover, pas de junior.',
    },
    {
      id: 4,
      icon: 'ChartLine',
      title: 'Rankwell One',
      description: 'Notre plateforme pour suivre vos performances en temps réel.',
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
  title: 'Comment fonctionne le GEO',
  subtitle:
    'Pour optimiser votre visibilité sur les moteurs IA, il faut comprendre comment ils sélectionnent leurs sources.',
  items: [
    {
      id: 1,
      title: 'L\'autorité thématique',
      desc: 'Les LLMs évaluent si vous êtes une source légitime sur un sujet. Votre stratégie de contenu doit construire des clusters thématiques cohérents. Mieux vaut creuser 5 sujets en profondeur que traiter 50 sujets superficiellement.',
    },
    {
      id: 2,
      title: 'La citabilité du contenu',
      desc: 'Les IA cherchent des passages qu\'elles peuvent extraire et reformuler facilement. Des définitions claires, des listes structurées, des données chiffrées avec leurs sources.',
    },
    {
      id: 3,
      title: 'Le réseau de mentions',
      desc: 'Les LLMs ne regardent pas que votre site. Ils évaluent comment vous êtes mentionné ailleurs : articles de presse, études sectorielles, forums spécialisés.',
    },
    {
      id: 4,
      title: 'La fraîcheur des informations',
      desc: 'Les IA privilégient les sources à jour. Vos contenus stratégiques doivent être maintenus vivants. Dates de mise à jour visibles, informations actualisées régulièrement.',
    },
  ],
};

// ============================================
// CALLOUT SEO + GEO
// ============================================
export const calloutData = {
  label: 'SEO et GEO ne s\'opposent pas',
  text: 'Un contenu bien structuré pour le GEO performe généralement bien en SEO aussi. Les fondamentaux sont les mêmes : autorité thématique, contenu de qualité, structure technique solide. Ce qui change, c\'est la façon de structurer l\'information pour qu\'elle soit "citable" par les IA.',
  icon: 'Lightbulb' as const,
};

// ============================================
// NOTRE APPROCHE
// ============================================
export const approcheData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Notre approche business centrix',
  subtitle: 'Beaucoup d\'agences parlent de ROI. Voici ce que ça signifie concrètement chez Rankwell.',
  items: [
    {
      id: 1,
      icon: 'Target',
      title: 'On mesure ce qui compte',
      description: 'Être premier sur un mot-clé qui ne génère pas de business, ça ne sert à rien. Notre métrique principale, c\'est l\'impact sur votre activité : leads générés, ventes attribuées, coût d\'acquisition.',
    },
    {
      id: 2,
      icon: 'MessageCircle',
      title: 'On challenge vos objectifs',
      description: 'Parfois, ce que vous pensez vouloir n\'est pas ce dont vous avez besoin. Notre job, c\'est aussi de vous dire quand vous faites fausse route. Un partenaire qui dit oui à tout n\'est pas un partenaire.',
    },
    {
      id: 3,
      icon: 'Settings',
      title: 'On s\'adapte à votre contexte',
      description: 'Une startup early-stage n\'a pas les mêmes besoins qu\'un grand groupe. Un e-commerce ne se pilote pas comme un SaaS B2B. Notre approche s\'adapte à votre situation.',
    },
    {
      id: 4,
      icon: 'Eye',
      title: 'On vous donne de la visibilité',
      description: 'Rankwell One connecte vos données Search à vos données business. Vous voyez l\'impact réel, pas des vanity metrics. Et vous pouvez suivre l\'évolution en temps réel.',
    },
  ],
};

// ============================================
// POUR QUI
// ============================================
export const pourQuiData = {
  sectionId: 'pour-qui',
  badge: 'Pour qui ?',
  title: 'On travaille avec des entreprises de toutes tailles',
  subtitle: 'Startups, PME, ETI, grands groupes. Ce qui compte, c\'est d\'avoir un vrai enjeu de visibilité et l\'envie d\'avancer.',
  accentColor: 'rw-blue' as const,
  criteria: [
    {
      label: 'Vous voulez développer votre acquisition digitale',
      description: 'Vous savez que le Search est un levier, mais vous n\'avez pas forcément le temps ou l\'expertise en interne.',
    },
    {
      label: 'Vous voulez anticiper les évolutions du Search',
      description: 'Vous vous demandez ce que l\'IA générative change pour votre visibilité et comment vous y préparer.',
    },
    {
      label: 'Vous avez besoin de résultats mesurables',
      description: 'Vous en avez assez des reportings qui parlent de positions sans lien avec votre business.',
    },
    {
      label: 'Vous cherchez un partenaire, pas un prestataire',
      description: 'Vous voulez une agence qui vous challenge et s\'engage sur vos résultats.',
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
  title: 'Nos services GEO & SEO à Paris',
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
  title: 'Comment démarre un accompagnement',
  subtitle: 'De la première prise de contact à l\'exécution, voici les étapes clés.',
  steps: [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Premier échange',
      description: '30 min pour comprendre votre situation. Pas de pitch commercial.',
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
      title: 'Proposition',
      description: 'Stratégie sur mesure avec objectifs clairs et mesurables.',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Exécution',
      description: 'Production, mesure, ajustement. Transparence totale via Rankwell One.',
    },
  ],
};

// ============================================
// ÉQUIPE
// ============================================
export const equipeData = {
  sectionId: 'equipe',
  badge: 'L\'équipe',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'L\'équipe Rankwell Paris',
  items: [
    {
      id: 1,
      title: 'Un consultant senior dédié',
      desc: 'La personne qui réfléchit à votre stratégie est la même qui l\'exécute. Pas d\'intermédiaire. Un interlocuteur qui connaît votre dossier dans le détail.',
    },
    {
      id: 2,
      title: 'Des experts mobilisables',
      desc: 'Selon vos besoins, votre consultant peut faire appel à nos experts techniques, data, contenu ou netlinking. Les compétences pointues, sans gérer 5 interlocuteurs.',
    },
    {
      id: 3,
      title: 'Une direction impliquée',
      desc: 'Les fondateurs restent accessibles pour les décisions stratégiques. Vous ne travaillez pas avec une machine, mais avec des gens qui s\'engagent sur vos résultats.',
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
  title: 'Questions fréquentes sur notre agence SEO à Paris',
  accentColor: 'rw-blue' as const,
  items: [
    {
      id: '1',
      question: 'Quelle est la différence entre SEO et GEO ?',
      answer: 'Le SEO optimise pour les moteurs de recherche traditionnels (Google principalement). Le GEO optimise pour les moteurs à IA générative (ChatGPT, Perplexity, Gemini). Concrètement, le GEO demande une structure de contenu différente : les IA cherchent des passages "citables" (définitions claires, listes structurées, données sourcées). Un contenu bien optimisé GEO performe généralement bien en SEO aussi.',
    },
    {
      id: '2',
      question: 'Combien de temps pour voir des résultats ?',
      answer: 'Ça dépend de votre situation de départ et de vos objectifs. SEA : résultats immédiats dès le lancement des campagnes. SEO/GEO : premiers signaux à 3 mois, résultats significatifs à 6-12 mois. Le référencement naturel est un investissement moyen-long terme qui construit des actifs durables.',
    },
    {
      id: '3',
      question: 'Travaillez-vous avec des concurrents dans le même secteur ?',
      answer: 'Non. On s\'engage à ne pas travailler avec des concurrents directs sur le même marché géographique. C\'est une question d\'éthique et d\'efficacité. Avant de démarrer, on vérifie qu\'il n\'y a pas de conflit d\'intérêt.',
    },
    {
      id: '4',
      question: 'Quel budget prévoir ?',
      answer: 'Ça dépend de vos objectifs, de votre secteur et de la concurrence. Un accompagnement SEO/GEO sérieux demande un investissement minimum pour être efficace. Si votre budget est très contraint, on vous proposera peut-être une approche différente (formation, audit ponctuel).',
    },
    {
      id: '5',
      question: 'Peut-on vous rencontrer avant de s\'engager ?',
      answer: 'Bien sûr. Le premier échange est sans engagement. On peut se voir dans nos bureaux du 17e, chez vous, ou en visio. L\'objectif : comprendre votre situation et voir si on est le bon partenaire.',
    },
    {
      id: '6',
      question: 'Travaillez-vous uniquement avec des entreprises parisiennes ?',
      answer: 'Non. On travaille avec des entreprises de toute la France et à l\'international depuis nos bureaux de Paris et Dubaï. La proximité géographique facilite certains échanges mais n\'est pas un prérequis.',
    },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Rencontrons-nous à Paris',
  description:
    'Premier échange de 30 minutes dans nos bureaux du 17e ou en visio. Sans engagement. On écoute, on analyse, on vous dit ce qu\'on en pense.',
  buttonText: 'Prendre rendez-vous',
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
