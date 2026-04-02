/**
 * DATA : Page Secteur Fleuristes (FR)
 * Route : /agence-geo-seo/secteur/fleuriste
 *
 * Contenu unique pour le secteur floral : comportement de recherche
 * ultra-local, saisonnalité forte, concurrence des réseaux de livraison.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'fleuriste',
    title: 'Agence GEO & SEO pour Fleuristes - Rankwell',
    description:
      'Rankwell accompagne les fleuristes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur floral.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Fleuristes' },
    ],
    title: 'GEO & SEO Fleuriste : visibilité Google & moteurs IA',
    subtitle:
      'Votre boutique doit apparaître quand un client cherche un fleuriste dans sa ville, sur Google comme dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du commerce floral.',
    ctaText: 'Demander un audit GEO & SEO fleuriste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les fleuristes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">82 000 recherches mensuelles sur « fleuriste » en France, dont 28 000 sur « fleuriste autour de moi »</strong>. Le client cherche une boutique proche, ouverte maintenant, sur mobile. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité se joue dans le Local Pack Google et les réponses IA géolocalisées.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La saisonnalité structure l\'activité</strong> : fête des Mères, Saint-Valentin, Toussaint et fêtes de fin d\'année concentrent les pics de chiffre d\'affaires. Un fleuriste qui n\'a pas positionné ses pages et sa fiche Google Business avant ces dates perd des commandes au profit des réseaux de livraison en ligne.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Interflora, Aquarelle, Florajet et les marketplaces de livraison florale</strong> dominent les requêtes transactionnelles nationales (« livraison fleurs », 20 000 recherches/mois). Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un fleuriste indépendant reste invisible face à ces acteurs.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'fleuriste', volume: 82000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'fleuriste autour de moi', volume: 28000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'livraison fleurs', volume: 20000, intent: 'commerciale', difficulty: 'très élevée' },
      { keyword: 'fleuriste à proximité', volume: 17000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'fleuriste paris', volume: 3400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'livraison de fleurs à domicile', volume: 3200, intent: 'transactionnelle', difficulty: 'très élevée' },
      { keyword: 'fleuriste toulouse', volume: 3000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'fleuriste ouvert', volume: 2900, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'fleuriste nantes', volume: 2200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'livraison fleurs pas cher', volume: 1700, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 82 000 recherches sur « fleuriste » et 28 000 sur « fleuriste autour de moi » représentent des clients prêts à pousser la porte d\'une boutique ou à passer commande. La majorité clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre boutique n\'y figure pas, ces clients commandent chez Interflora ou un concurrent mieux référencé.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les fleuristes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du commerce floral et à sa forte saisonnalité.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des freins techniques à l\'indexation, avec une attention particulière aux galeries photos de compositions florales.',
        items: [
          'Structure des pages par type de composition (bouquet, gerbe, plante, décoration événementielle)',
          'Balises schema.org Florist et Product',
          'Performance et Core Web Vitals (optimisation des images haute résolution)',
          'Crawl et indexation des pages saisonnières',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre boutique dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre boutique',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA florales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés floraux',
        subtitle: 'Cartographie des requêtes par type de composition, occasion et zone géographique. Identification des créneaux à faible concurrence autour des événements saisonniers.',
        items: [
          'Combinaisons occasion + ville (« bouquet mariage Lyon », « livraison deuil Bordeaux »)',
          'Analyse des requêtes posées aux moteurs IA sur les fleurs',
          'Volumes de recherche par saison (Saint-Valentin, fête des Mères, Toussaint)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours client : de la recherche à la commande.',
        items: [
          'Page collection → page composition → page commande/livraison',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par catégorie florale',
        ],
      },
      {
        title: 'Stratégie de contenu florale',
        subtitle: 'Création de contenus saisonniers et éducatifs démontrant le savoir-faire artisanal, rédigés pour être citables par les LLM.',
        items: [
          'Guides saisonniers (fleurs de saison, entretien, signification)',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Contenu autour des événements (mariage, deuil, naissance, fêtes)',
        ],
      },
      {
        title: 'Autorité & netlinking floral',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels, les partenariats locaux et les publications spécialisées.',
        items: [
          'Pages Jaunes, PagesJaunes.fr, annuaires locaux de la ville',
          'Partenariats avec wedding planners, organisateurs d\'événements, pompes funèbres',
          'Présence sur les sites des Chambres de Commerce et des Syndicats de fleuristes',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « fleuriste + ville » et « fleuriste autour de moi », et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Florist + catégories secondaires (livraison de fleurs, décoration événementielle)',
          'Photos de compositions actualisées chaque semaine',
          'Gestion des avis clients et stratégie de collecte après chaque commande',
          'Citations NAP cohérentes sur les annuaires locaux et sectoriels',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de composition et les commandes générées, avec un focus sur les pics saisonniers.',
        items: [
          'Positions Google par mot-clé floral',
          'Trafic organique par catégorie (bouquets, plantes, livraison)',
          'Score GEO : visibilité dans les moteurs IA',
          'Commandes et demandes de devis générées',
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
        title: 'Audit technique du site',
        description: 'Analyse de l\'architecture, de la vitesse de chargement et de l\'indexation, avec un focus sur les pages de créations florales et les pages de livraison.',
      },
      {
        id: 2,
        title: 'Audit GEO de citabilité IA',
        description: 'Mesure de la visibilité de votre boutique dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100, benchmark concurrentiel et plan de progression.',
      },
      {
        id: 3,
        title: 'Kit schema.org fleuriste',
        description: 'Balisage structuré Florist, LocalBusiness et FAQPage avec vos zones de livraison, vos services (mariage, deuil, événementiel) et vos horaires.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages créations florales, articles par occasion et saison (mariage, deuil, fêtes des Mères), FAQ, le tout intégré dans votre CMS ou livré par FTP.',
      },
      {
        id: 5,
        title: 'Campagne de netlinking',
        description: 'Liens depuis les annuaires partenaires Interflora, les blogs mariage et décoration, et la presse locale de votre zone de chalandise.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel avec positions Google, trafic organique par catégorie florale, score GEO et suivi de la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre boutique dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel fleuriste recommandes-tu à Nantes ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre boutique n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel fleuriste recommandes-tu à Nantes ? » : le LLM ne cite aucun fleuriste par nom. Il fournit 5 à 6 critères de sélection (avis Google, fraîcheur des fleurs, créativité, proximité) et renvoie vers Google Maps. Avec le mode Search activé, <strong>ChatGPT affiche une carte Maps</strong> avec les fiches GBP des fleuristes les mieux notés de la ville.</p><h4>Requêtes comparatives</h4><p>« Fleuriste local vs Interflora : quelle différence ? » : le LLM produit une comparaison structurée. Fleuriste local : compositions sur mesure, fleurs fraîches du marché, relation de proximité. Interflora : réseau de 6 000 partenaires, livraison nationale, commande 24h/24. Le LLM précise que les compositions Interflora sont assemblées par un fleuriste partenaire local.</p><h4>Requêtes tarifaires</h4><p>« Prix bouquet de fleurs fleuriste » : le LLM donne des fourchettes chiffrées par type de composition (bouquet simple 15 à 30 euros, composition événementielle 50 à 150 euros, bouquet de mariée 80 à 250 euros). Les sites proposant des grilles tarifaires détaillées et actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « fleuriste autour de moi livraison », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les fleuristes disposant d\'une fiche GBP complète (photos de compositions récentes, avis clients avec note supérieure à 4,2, mention « livraison » dans les services) apparaissent en priorité dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les fleuristes, les types schema.org recommandés sont : <code>Florist</code> (type principal), <code>Product</code> (pour chaque composition), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Florist</code> permet à Google et aux LLM d\'identifier précisément la localisation, les services proposés (livraison, mariage, deuil) et les avis clients de la boutique.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre boutique par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus floraux), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les fleuristes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de fleuriste ?',
        answer:
          'Le budget SEO pour un fleuriste dépend de la zone géographique ciblée et du nombre de services proposés (boutique, livraison, mariage, deuil). Chez Rankwell, les accompagnements SEO pour les fleuristes démarrent à 800 euros/mois pour une ville et peuvent atteindre 2 500 euros/mois pour un fleuriste multi-villes avec boutique en ligne.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO floral ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 5 mois. Les requêtes locales de niche (« fleuriste livraison Angers ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « livraison fleurs ». Rankwell fournit un calendrier prévisionnel synchronisé avec les pics saisonniers de votre activité.',
      },
      {
        question: 'Comment gérer la saisonnalité en SEO quand on est fleuriste ?',
        answer:
          'La Saint-Valentin, la fête des Mères, la Toussaint et les fêtes de fin d\'année sont les 4 pics majeurs du commerce floral. Le référencement de ces pages saisonnières doit être préparé 2 à 3 mois en amont pour laisser le temps à Google d\'indexer et de positionner le contenu. Rankwell anticipe ces pics dans la stratégie éditoriale et optimise les pages dédiées avant chaque événement.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un fleuriste ?',
        answer:
          'Un blog floral est un levier efficace s\'il répond à des questions réelles : signification des fleurs, entretien des bouquets, fleurs de saison, idées cadeaux par occasion. Ces contenus éducatifs attirent du trafic informationnel et démontrent le savoir-faire artisanal du fleuriste. Rankwell recommande 2 à 3 articles par mois, ciblant des requêtes longue traîne saisonnières.',
      },
      {
        question: 'Comment un fleuriste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un fleuriste doit accumuler des signaux de notoriété : fiche Google Business Profile complète avec photos récentes, avis clients réguliers, mentions dans la presse locale, contenu riche et factuel sur son site (grille tarifaire, zones de livraison, spécialités). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un fleuriste ?',
        answer:
          'Le SEO local cible les requêtes « fleuriste + ville » et « fleuriste autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise les requêtes comme « livraison fleurs » et nécessite un site e-commerce avec un catalogue structuré. Rankwell adapte la stratégie selon le modèle économique : boutique de quartier, livraison locale, ou vente en ligne nationale.',
      },
      {
        question: 'Interflora et les réseaux de livraison suffisent-ils pour être visible ?',
        answer:
          'Les réseaux comme Interflora, Aquarelle ou Florajet apportent des commandes, mais ils créent une dépendance : le fleuriste n\'est qu\'un exécutant parmi des milliers de partenaires, avec des marges réduites et aucun contrôle sur sa visibilité. Un site propre bien référencé permet de recevoir des commandes directes, de fixer ses prix et de construire une clientèle fidèle. Rankwell aide les fleuristes à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre boutique visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Barbier', href: '/agence-geo-seo/secteur/barbier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Florist',
};

export default data;
