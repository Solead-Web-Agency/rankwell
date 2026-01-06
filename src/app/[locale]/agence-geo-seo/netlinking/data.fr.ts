/**
 * ============================================
 * DATA - Contenu de la page Netlinking
 * Sections dans l'ordre d'apparition sur la page
 * ============================================
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence netlinking : stratégie de liens SEO - Rankwell',
  description: 'Agence netlinking experte en stratégie de liens qualitative. Campagne netlinking sur-mesure pour renforcer votre autorité SEO. Approche business centrix.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'Netlinking' },
  ] as BreadcrumbItem[],
  title: 'Agence netlinking : construire votre autorité',
  description: 'Le netlinking reste un pilier du référencement. Mais tous les liens ne se valent pas. Notre agence construit une stratégie netlinking qui compte aux yeux de Google et des IA.',
  ctaText: 'Parler de votre stratégie de liens',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/netlinking/hero.webp',
  imageAlt: 'Stratégie netlinking Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence Netlinking',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Le netlinking ne sert plus seulement à "monter dans Google". Chaque lien sur un site de référence enrichit ce que les moteurs et les IA comprennent de votre marque. Vos forces, votre expertise, votre positionnement.',
    'Un bon lien raconte quelque chose. Il associe votre marque à un contexte, une thématique, une autorité. Google l\'interprète. ChatGPT et Perplexity aussi quand ils décident quelles sources recommander.',
    'Découvrez comment notre stratégie netlinking et notre approche <strong class="text-secondary dark:text-accent">business centrix</strong> construisent votre identité en ligne. Pas juste des backlinks. Une campagne netlinking qui renforce ce que le web sait de vous.',
  ],
  tocItems: [
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'pourquoi', label: 'Pourquoi les liens', icon: 'Link' },
    { id: 'methode', label: '5 étapes', icon: 'ListChecks' },
    { id: 'criteres', label: 'Critères de qualité', icon: 'CircleCheck' },
    { id: 'leviers', label: 'Leviers d\'acquisition', icon: 'Magnet' },
    { id: 'refus', label: 'Pratiques refusées', icon: 'Ban' },
    { id: 'mesure', label: 'KPIs de succès', icon: 'ChartBar' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Ce qui nous distingue',
  accentColor: 'rw-blue' as const,
  title: 'Une stratégie netlinking qui construit votre autorité',
  subtitle: 'Chaque campagne netlinking renforce votre positionnement sur Google et votre crédibilité auprès des IA.',
  items: [
    {
      id: 1,
      title: 'Liens qui racontent',
      description: 'Chaque backlink renforce votre positionnement thématique et enrichit ce que les moteurs comprennent de vous.',
      icon: 'Link2',
    },
    {
      id: 2,
      title: 'Connaissance de marque',
      description: 'On enrichit ce que les moteurs et les IA comprennent de votre expertise.',
      icon: 'Brain',
    },
    {
      id: 3,
      title: 'Analyse concurrentielle',
      description: 'On cartographie les liens de vos concurrents pour identifier les opportunités.',
      icon: 'Users',
    },
    {
      id: 4,
      title: 'Impact SEO + GEO',
      description: 'Visibilité Google et crédibilité auprès des IA génératives. Double bénéfice.',
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
  title: 'Pourquoi le netlinking compte toujours autant ?',
  subtitle: 'Le netlinking reste un signal majeur pour Google. Les liens deviennent aussi un critère de crédibilité pour les IA qui sélectionnent leurs sources.',
  reasons: [
    {
      id: 'google',
      title: 'Pour Google',
      description: 'Les liens restent un signal majeur de l\'algorithme. Un site vers lequel pointent des sources fiables est perçu comme fiable. C\'est mécanique.',
      icon: 'Search',
    },
    {
      id: 'ia',
      title: 'Pour les IA génératives',
      description: 'ChatGPT, Perplexity et consorts évaluent la crédibilité des sources. Un site cité par d\'autres sites de référence a plus de chances d\'être recommandé.',
      icon: 'Bot',
    },
    {
      id: 'notoriete',
      title: 'Pour votre notoriété',
      description: 'Au-delà du SEO, des liens sur des sites reconnus, c\'est de la visibilité, du trafic référent, de la crédibilité. Un effet compound.',
      icon: 'TrendingUp',
    },
  ],
};

// ============================================
// 6. TRUST BANNER (composant global sans data)
// ============================================

// ============================================
// 7. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'Pourquoi c\'est stratégique',
  text: 'Les IA génératives construisent leurs réponses à partir de ce qu\'elles "savent" d\'une marque. Des liens sur des sites de référence enrichissent cette connaissance. Plus votre marque est associée à des sources fiables, plus les IA vous recommandent.',
};

// ============================================
// 8. METHODE NETLINKING DATA (#methode)
// ============================================
export const methodeNetlinkingData = {
  sectionId: 'methode',
  badge: '5 étapes',
  accentColor: 'rw-blue' as const,
  title: 'Comment se déroule une campagne netlinking ?',
  subtitle: 'Notre stratégie netlinking combine analyse, approche sur-mesure et acquisition qualitative. Chaque lien doit avoir du sens pour votre thématique.',
  steps: [
    {
      step: 1,
      label: 'ÉTAPE 1',
      title: 'Analyse de votre profil actuel',
      subtitle: 'On part de l\'existant pour construire sur des bases saines.',
      items: [
        'Inventaire des backlinks existants',
        'Analyse de la qualité des liens',
        'Détection des liens toxiques',
        'Recommandations de désaveu',
      ],
    },
    {
      step: 2,
      label: 'ÉTAPE 2',
      title: 'Étude de la concurrence',
      subtitle: 'On cartographie le terrain pour identifier les cibles pertinentes.',
      items: [
        'Sources de liens des concurrents',
        'Opportunités à capter',
        'Gap analysis des backlinks',
        'Benchmark autorité de domaine',
      ],
    },
    {
      step: 3,
      label: 'ÉTAPE 3',
      title: 'Stratégie sur-mesure',
      subtitle: 'Pas de package "100 liens/mois". Une stratégie adaptée à votre secteur.',
      items: [
        'Objectifs et KPIs définis',
        'Sélection des cibles prioritaires',
        'Calendrier d\'acquisition',
        'Budget et ressources allouées',
      ],
    },
    {
      step: 4,
      label: 'ÉTAPE 4',
      title: 'Acquisition qualitative',
      subtitle: 'Des méthodes qui créent de la valeur, pas du spam.',
      items: [
        'Relations presse digitale',
        'Guest blogging stratégique',
        'Linkbaiting et contenus attractifs',
        'Partenariats éditoriaux',
      ],
    },
    {
      step: 5,
      label: 'ÉTAPE 5',
      title: 'Suivi et reporting',
      subtitle: 'Chaque lien obtenu est documenté. Transparence totale.',
      items: [
        'Rapport mensuel détaillé',
        'Évolution Domain Rating',
        'Impact sur les positions',
        'Ajustements stratégie',
      ],
    },
  ],
};

// ============================================
// 9. TABLEAU QUALITE LIEN DATA (#criteres)
// ============================================
export const tableauQualiteLienData = {
  sectionId: 'criteres',
  badge: 'Critères',
  accentColor: 'rw-blue' as const,
  title: 'Comment évaluer la qualité d\'un lien ?',
  subtitle: 'Tous les liens ne se valent pas. Voici les critères que nous analysons avant d\'accepter une opportunité.',
  columns: ['Critère', 'Seuil minimum', 'Cible idéale', 'Red flag'],
  rows: [
    ['Domain Rating (Ahrefs)', 'DR 30+', 'DR 50+', 'DR < 20 ou DR artificiellement gonflé'],
    ['Trafic organique du site', '1 000 visites/mois', '10 000+ visites/mois', '0 trafic = site fantôme'],
    ['Pertinence thématique', 'Même secteur large', 'Même niche précise', 'Aucun rapport avec votre activité'],
    ['Ratio liens sortants/page', '< 10 liens externes', '< 5 liens externes', 'Page avec 50+ liens = spam'],
    ['Ancienneté du domaine', '2+ ans', '5+ ans avec historique clean', 'Domaine expiré racheté récemment'],
    ['Contexte éditorial', 'Lien dans le corps du texte', 'Lien dans contenu original dédié', 'Footer, sidebar, liste de liens'],
  ],
};

// ============================================
// 10. LEVIERS ACQUISITION DATA (#leviers) - Utilise Process (comme /agence-geo-seo#methode)
// ============================================
export const leviersAcquisitionData = {
  sectionId: 'leviers',
  badge: 'Leviers',
  accentColor: 'rw-blue' as const,
  title: 'Quelles méthodes d\'acquisition utilisons-nous ?',
  subtitle: 'Cinq méthodes complémentaires pour construire un profil de liens naturel et pertinent.',
  steps: [
    {
      id: 'levier-1',
      stepNumber: '01',
      title: 'Relations presse',
      description: 'Journalistes, blogueurs, médias de votre secteur',
    },
    {
      id: 'levier-2',
      stepNumber: '02',
      title: 'Guest blogging',
      description: 'Contributions sur des sites reconnus',
    },
    {
      id: 'levier-3',
      stepNumber: '03',
      title: 'Linkbaiting',
      description: 'Contenus qui attirent naturellement les liens',
    },
    {
      id: 'levier-4',
      stepNumber: '04',
      title: 'Récupération',
      description: 'Mentions sans lien, liens cassés à convertir',
    },
    {
      id: 'levier-5',
      stepNumber: '05',
      title: 'Partenariats',
      description: 'Collaborations long terme avec sites complémentaires',
    },
  ],
};

// ============================================
// 11. PRATIQUES REFUSEES DATA (#refus)
// ============================================
export const pratiquesRefuseesData = {
  sectionId: 'refus',
  badge: 'Ce qu\'on refuse',
  accentColor: 'rw-blue' as const,
  title: 'Quelles pratiques refusons-nous ?',
  subtitle: 'Certaines pratiques nous semblent incompatibles avec une stratégie durable. Nous les refusons systématiquement.',
  footerText: 'Ces pratiques fonctionnent peut-être à court terme. Elles vous exposent à des pénalités à moyen terme. Pire : elles polluent ce que les IA comprennent de votre marque.',
  pratiques: [
    { label: 'Achat de liens en masse', description: 'Sur des réseaux de sites douteux' },
    { label: 'PBN (Private Blog Networks)', description: 'Réseaux de sites créés uniquement pour le link building' },
    { label: 'Spam de commentaires ou forums', description: 'Liens sans valeur ajoutée' },
    { label: 'Échanges réciproques systématiques', description: 'Patterns facilement détectables' },
    { label: 'Liens hors thématique', description: 'Sur des sites sans rapport avec votre activité' },
  ],
};

// ============================================
// 12. KPIS / MESURE DATA (#mesure) - Utilise FeaturesGrid
// ============================================
export const kpisData = {
  sectionId: 'mesure',
  badge: 'Mesure',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Comment mesurons-nous le succès ?',
  subtitle: 'Nous suivons des indicateurs concrets. Pas juste le nombre de liens, mais leur impact réel sur votre visibilité et votre crédibilité.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-domain-rating.webp',
      alt: 'Domain Rating et Authority Score',
      title: 'Domain Rating / Authority',
      desc: 'L\'évolution de votre autorité globale',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-domaines-referents.webp',
      alt: 'Nombre de domaines référents uniques',
      title: 'Nombre de domaines référents',
      desc: 'La diversité de votre profil de liens',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-qualite-liens.webp',
      alt: 'Analyse qualité des backlinks',
      title: 'Qualité des liens obtenus',
      desc: 'Pertinence thématique, autorité du site source, contexte',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-impact-positions.webp',
      alt: 'Impact des liens sur les positions Google',
      title: 'Impact sur les positions',
      desc: 'Corrélation entre liens et rankings Google',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-presence-ia.webp',
      alt: 'Présence dans les réponses IA génératives',
      title: 'Présence dans les réponses IA',
      desc: 'Votre marque citée par ChatGPT, Perplexity',
    },
    {
      id: 6,
      // image: '/images/pages/agence-geo-seo/netlinking/kpi-trafic-referent.webp',
      alt: 'Trafic référent depuis les backlinks',
      title: 'Trafic référent',
      desc: 'Les liens amènent aussi des visiteurs qualifiés',
    },
  ] as FeatureItem[],
};

// ============================================
// 13. FORWHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Pour qui est une campagne netlinking ?',
  subtitle: 'Notre agence netlinking accompagne les entreprises qui veulent construire une autorité durable, pas juste des liens.',
  criteria: [
    { label: 'Renforcer votre crédibilité', description: 'Vous voulez être reconnu comme référence sur votre marché' },
    { label: 'Être cité par les IA', description: 'ChatGPT et Perplexity recommandent les marques qu\'ils "connaissent"' },
    { label: 'Amplifier une base SEO solide', description: 'Vous avez les fondations, il manque l\'autorité' },
    { label: 'Investir dans la qualité', description: 'Vous préférez 5 liens de qualité à 50 liens médiocres' },
  ],
  ctaTitle: 'Prêt à construire votre autorité ?',
  ctaDescription: 'On analyse votre profil de liens actuel et on identifie les opportunités. Stratégie sur mesure.',
  ctaButtonText: 'Discutons de votre projet',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 14. CLIENTS (composant global sans data)
// ============================================

// ============================================
// 15. TESTIMONIALS (composant global sans data)
// ============================================

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
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le netlinking et notre stratégie',
  items: [
    {
      id: 'faq-1',
      question: 'Combien de liens par mois dans une campagne netlinking ?',
      answer: 'Il n\'y a pas de nombre magique. Mieux vaut 5 liens de qualité que 50 liens médiocres. Notre agence netlinking calibre la stratégie en fonction de vos objectifs et de ce que font vos concurrents.',
    },
    {
      id: 'faq-2',
      question: 'Achetez-vous des liens ?',
      answer: 'Nous travaillons avec des partenaires éditoriaux, ce qui peut impliquer une contrepartie. Mais nous ne faisons jamais d\'achat de liens en masse sur des plateformes douteuses. La qualité et la pertinence thématique priment toujours sur le volume.',
    },
    {
      id: 'faq-3',
      question: 'Combien de temps avant de voir l\'impact ?',
      answer: 'Généralement 2 à 4 mois. Les liens mettent du temps à être pris en compte par Google et à produire leur plein effet sur les rankings. C\'est un investissement moyen-long terme qui construit des actifs durables.',
    },
    {
      id: 'faq-4',
      question: 'Et les liens NoFollow ?',
      answer: 'Les liens NoFollow ont aussi de la valeur. Un profil de liens naturel contient des DoFollow et des NoFollow. Les NoFollow apportent notoriété, trafic référent et diversité. Pour les IA génératives, c\'est la mention de votre marque dans un contexte pertinent qui compte, pas seulement l\'attribut du lien.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 18. CTA DATA
// ============================================
export const ctaData = {
  title: 'Prêt à lancer',
  titleHighlight: 'votre stratégie netlinking',
  description: 'Audit gratuit de votre profil de liens actuel. Notre agence netlinking identifie vos opportunités et conçoit une campagne netlinking sur-mesure pour construire votre autorité.',
  secondaryDescription: 'Première étape : un échange de 30 minutes pour comprendre votre situation. Sans engagement.',
  buttonText: 'Discutons de votre projet',
  checklistItems: [
    { id: '1', text: 'Sans engagement' },
    { id: '2', text: 'Audit offert' },
    { id: '3', text: 'Stratégie sur mesure' },
  ],
};
