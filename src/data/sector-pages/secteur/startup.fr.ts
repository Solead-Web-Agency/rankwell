/**
 * DATA : Page Secteur Startups (FR)
 * Route : /agence-geo-seo/secteur/startup
 *
 * Secteur NATIONAL (pas de dominante locale).
 * Cible : fondateurs, CEO, CTO, CMO de startups early-stage et scale-ups.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'startup',
    title: 'Agence GEO & SEO pour Startups - Rankwell',
    description:
      'Rankwell accompagne les startups dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour l\'écosystème startup.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Startups' },
    ],
    title: 'GEO & SEO Startup : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs utilisateurs cherchent des solutions sur Google et interrogent ChatGPT avant de choisir un outil. Nos experts conçoivent des stratégies de référencement GEO & SEO calibrées pour les cycles courts et les budgets contraints des startups.',
    ctaText: 'Demander un audit GEO & SEO startup',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les startups',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">78 % des requêtes SaaS B2B sont informationnelles</strong> (comparatifs, alternatives, guides pratiques). Les startups ne rivalisent pas sur des requêtes locales, mais sur des termes de niche à forte intention. L\'enjeu est de capter un trafic qualifié qui convertit en essais gratuits ou en démos.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Vitesse d\'exécution et budget limité</strong> : une startup early-stage ne peut pas investir 18 mois avant de voir un retour. Le SEO doit produire des résultats en 3 à 6 mois. La dette technique (frameworks JS, SPA, rendu côté client) freine souvent l\'indexation, et les pivots produit fréquents rendent obsolètes des contenus entiers.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">G2, Capterra, Product Hunt, TrustRadius et les comparateurs IA</strong> captent la majorité du trafic transactionnel sur « meilleur outil {catégorie} ». Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> qui comprend l\'écosystème startup, une jeune entreprise reste invisible face à ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (Citabilité)
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilité',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'startup', volume: 5800, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'lean startup', volume: 1000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'licorne startup', volume: 700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'startup nation', volume: 250, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'investir dans des startup', volume: 350, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'expert comptable startup', volume: 200, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'startup française', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'incubateur startup', volume: 150, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'créer une startup', volume: 70, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'business plan startup', volume: 50, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Les recherches liées aux startups en France sont à dominante informationnelle et nationale. Des milliers de fondateurs cherchent chaque mois des ressources pour créer, financer et développer leur entreprise. La startup qui publie des contenus de référence sur ces sujets capte un trafic qualifié et se positionne comme acteur crédible aux yeux de Google et des moteurs IA.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les startups',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de l\'écosystème startup : cycles courts, budget maîtrisé, pivots fréquents.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, avec un focus sur les problématiques techniques fréquentes des startups : frameworks JavaScript (React, Next.js, Vue), SPA mal indexées, temps de chargement.',
        items: [
          'Rendu côté serveur vs côté client et impact sur l\'indexation',
          'Balises schema.org Organization et SoftwareApplication',
          'Performance et Core Web Vitals',
          'Crawl et indexation des applications web',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de la startup dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la startup',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA de la verticale',
        ],
      },
      {
        title: 'Étude de marché & mots-clés de niche',
        subtitle: 'Cartographie des requêtes par verticale produit et stade de maturité. Identification des « zones blanches » SEO que les concurrents n\'ont pas encore couvertes.',
        items: [
          'Requêtes comparatives (« alternative à {concurrent} »)',
          'Requêtes bottom-of-funnel (« meilleur outil {catégorie} »)',
          'Analyse des requêtes posées aux moteurs IA sur la verticale',
          'Volumes de recherche par segment de marché cible',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours utilisateur SaaS : du contenu éducatif vers la page produit, puis vers la conversion.',
        items: [
          'Page catégorie → page fonctionnalité → page pricing → signup',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu product-led',
        subtitle: 'Création de contenus qui démontrent l\'expertise de la startup tout en servant l\'acquisition : guides pratiques, benchmarks, études de cas rédigés pour être citables par les LLM.',
        items: [
          'Contenus bottom-of-funnel et comparatifs pilotés par la data',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Templates et outils gratuits générateurs de backlinks',
        ],
      },
      {
        title: 'Autorité & netlinking startup',
        subtitle: 'Développement de l\'autorité via les médias tech, les plateformes de notation et les publications spécialisées de l\'écosystème.',
        items: [
          'Product Hunt, G2, Capterra, TrustRadius',
          'Publications sur Maddyness, Journal du Net, FrenchWeb',
          'RP digitales et communiqués de levées de fonds',
        ],
      },
      {
        title: 'Présence sur les plateformes de découverte',
        subtitle: 'Optimisation des profils sur les plateformes où les décideurs cherchent et comparent les solutions SaaS : annuaires, marketplaces, répertoires open source.',
        items: [
          'Fiches G2, Capterra et TrustRadius avec avis vérifiés',
          'Profil Product Hunt optimisé pour les lancements',
          'Annuaires spécialisés par verticale (FinTech, HealthTech, EdTech)',
          'Présence sur GitHub et Stack Overflow pour les outils techniques',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par segment de marché et les signups générés par le canal organique.',
        items: [
          'Positions Google par mot-clé stratégique',
          'Trafic organique par landing page produit',
          'Score GEO : visibilité dans les moteurs IA',
          'Signups, démos et conversions attribués au SEO',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Audit technique complet',
        description: 'Analyse approfondie de vos pages produit, pricing et blog : indexation, Core Web Vitals, rendu JavaScript, architecture du site et freins techniques identifiés.',
      },
      {
        id: 2,
        title: 'Audit GEO',
        description: 'Mesure de la visibilite de votre startup dans les reponses de ChatGPT, Perplexity et Google AI Overviews. Score GEO sur 100 avec benchmark concurrentiel sur votre verticale.',
      },
      {
        id: 3,
        title: 'Kit schema.org',
        description: 'Balisage SoftwareApplication, Organization et FAQPage pret a integrer. Chaque type est configure avec les proprietes adaptees a votre produit et a votre positionnement.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages produit optimisees, content hub (guides, comparatifs, use cases), articles thought leadership, FAQ. Livraison via CMS ou FTP selon votre stack.',
      },
      {
        id: 5,
        title: 'Netlinking startup',
        description: 'Acquisition de liens depuis des blogs tech et SaaS, Product Hunt, et des medias startup (Maddyness, FrenchWeb). Chaque lien cible une page strategique de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Rapport mensuel incluant positions Google, trafic organique, signups attribues au canal SEO, et evolution du score GEO avec suivi de la citabilite IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre startup dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un décideur demande à ChatGPT « quel est le meilleur outil de gestion de projet pour une startup ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre startup n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quelle agence SEO recommandes-tu pour une startup SaaS ? » : le LLM ne cite aucune agence par nom. Il fournit une liste de 5 à 7 critères de sélection (expertise SaaS, compréhension du product-led growth, tarification adaptée). Les agences qui publient des études de cas chiffrées sur des startups ont les meilleures chances d\'être citées à l\'avenir.</p><h4>Requêtes d\'information</h4><p>« Comment une startup peut-elle se positionner sur Google ? » : le LLM génère un guide structuré en 6 à 8 étapes sans citer de source ni d\'agence. Le contenu est synthétisé depuis des blogs tech (HubSpot, Ahrefs, Moz) et des médias startup (Maddyness, TechCrunch). La startup qui produit ce type de contenu sur son site peut être citée en référence.</p><h4>Requêtes budgétaires</h4><p>« Budget SEO pour une startup early-stage » : le LLM fournit des fourchettes chiffrées (freelance 500 à 2 000 EUR/mois, agence 1 500 à 5 000 EUR/mois) sans attribution. Les sites proposant des données tarifaires précises et actualisées pour les startups ont un potentiel de citation élevé.</p><h4>Requêtes comparatives</h4><p>« SEO ou SEA pour une startup ? » ou « startup vs scale-up en SEO » : le LLM produit des tableaux comparatifs structurés. C\'est le format le plus extractible. Les contenus qui formalisent des distinctions claires avec des données chiffrées sont prioritaires dans les réponses génératives.</p>',
    structuredData:
      '<p>Pour les startups, les types schema.org recommandés sont : <code>Organization</code> (type principal), <code>SoftwareApplication</code> (pour les produits SaaS), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Organization</code> combiné à <code>SoftwareApplication</code> permet à Google et aux LLM d\'identifier précisément la verticale, les fonctionnalités et le positionnement de la startup.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre startup par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes : avis G2, mentions presse, backlinks tech), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les startups',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de startup ?',
        answer:
          'Le budget SEO pour une startup dépend du stade de maturité et de la complexité technique du site. Chez Rankwell, les accompagnements SEO pour les startups démarrent à 1 500 EUR/mois pour une verticale unique, et peuvent atteindre 4 000 à 8 000 EUR/mois pour une scale-up multi-marchés avec des enjeux d\'internationalisation.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO startup ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche longue traîne (« alternative à {concurrent} {verticale} ») se positionnent plus vite que les requêtes génériques concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre verticale et priorise les actions à retour rapide.',
      },
      {
        question: 'Le SEO est-il compatible avec un pivot produit fréquent ?',
        answer:
          'Oui, à condition d\'anticiper. Un pivot modifie les mots-clés cibles, les pages à prioriser et parfois l\'architecture du site. Rankwell intègre une veille continue sur le positionnement produit de la startup et adapte la stratégie SEO à chaque itération. Les redirections 301, la conservation de l\'autorité acquise et la mise à jour du contenu sont planifiées en amont pour éviter toute perte de trafic.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement de sa startup ?',
        answer:
          'Un blog est un levier puissant s\'il sert l\'acquisition. Les articles doivent répondre aux requêtes réelles des utilisateurs cibles (comparatifs, guides, tutoriels) et être rédigés pour être citables par les moteurs IA. Rankwell recommande 3 à 6 articles par mois pour une startup en phase de croissance, ciblant des requêtes informationnelles et bottom-of-funnel à forte intention.',
      },
      {
        question: 'Comment une startup peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une startup doit accumuler des signaux de notoriété vérifiables sur le web : avis sur G2 et Capterra, mentions dans la presse tech, profil Product Hunt, contenus riches et factuels sur son site, données structurées schema.org. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'SEO ou SEA : quel canal privilégier pour une startup ?',
        answer:
          'Les deux sont complémentaires. Le SEA (Google Ads) apporte des résultats immédiats et permet de valider rapidement un marché, mais le coût par clic augmente avec la concurrence et crée une dépendance au budget. Le SEO construit un actif durable à coût marginal décroissant. Rankwell recommande de combiner les deux en early-stage, puis de transférer progressivement le budget vers le SEO à mesure que l\'autorité organique se construit.',
      },
      {
        question: 'Les plateformes comme G2 et Capterra suffisent-elles pour être visible ?',
        answer:
          'Les plateformes de notation comme G2, Capterra et TrustRadius sont utiles pour la crédibilité et le référencement initial, mais elles créent une dépendance : la startup n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les startups à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des agrégateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre startup visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre stade de développement.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO PME', href: '/agence-geo-seo/secteur/pme' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
      ],
      projets: [
        { label: 'SEO Application web & SaaS', href: '/agence-geo-seo/projet/application-web' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'PME', href: '/agence-geo-seo/secteur/pme' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Franchise', href: '/agence-geo-seo/secteur/franchise' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Organization',
};

export default data;
