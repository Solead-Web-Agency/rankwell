/**
 * DATA : Page Secteur Bijoutiers (FR)
 * Route : /agence-geo-seo/secteur/bijoutier
 *
 * Mots-clés Ahrefs (mars 2026, country FR) :
 * bijouterie (45 000), bijouterie autour de moi (12 000), bijoutier (4 700),
 * bijouterie paris (3 900), bijouterie en ligne (2 400), bijouterie lyon (2 200)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bijoutier',
    title: 'Agence GEO & SEO pour Bijoutiers - Rankwell',
    description:
      'Rankwell accompagne les bijoutiers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la bijouterie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Bijoutiers' },
    ],
    title: 'GEO & SEO Bijoutier : visibilité Google & moteurs IA',
    subtitle:
      'Votre bijouterie doit être trouvée là où vos futurs clients cherchent : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur de la bijouterie.',
    ctaText: 'Demander un audit GEO & SEO bijoutier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les bijoutiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Bijouterie autour de moi » cumule 12 000 recherches mensuelles en France</strong>. Les clients cherchent sur mobile, en repérage avant un achat important (bague de fiançailles, cadeau). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 bijouteries du Local Pack Google ou celles recommandées par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le Code de la consommation impose poinçons et titrage des métaux précieux (or 750 millièmes, platine 950)</strong>. Le titre d\'Artisan Bijoutier et les certifications Kimberley pour les diamants sont des signaux de confiance forts pour Google et les LLM. Chaque contenu doit refléter cette expertise vérifiable.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Histoire d\'Or, Maty, Julien d\'Orcel et les marketplaces (Etsy, Amazon)</strong> captent la majorité du trafic organique sur les requêtes transactionnelles. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une bijouterie indépendante reste invisible face à ces enseignes.',
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
      { keyword: 'bijouterie autour de moi', volume: 12000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'bijoutier', volume: 4700, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'bijouterie paris', volume: 3900, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'bijouterie en ligne', volume: 2400, intent: 'transactionnelle', difficulty: 'très élevée' },
      { keyword: 'bijouterie lyon', volume: 2200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'bijouterie à proximité', volume: 1700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'bijoutier paris', volume: 700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'bijoutier autour de moi', volume: 700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'bijoutier lyon', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'artisan bijoutier', volume: 450, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 12 000 recherches « bijouterie autour de moi » représentent autant de clients prêts à pousser la porte d\'une boutique. Ajoutez les milliers de requêtes locales par ville (Paris, Lyon, Toulouse, Bordeaux), et le potentiel dépasse 30 000 visites qualifiées. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre bijouterie n\'y figure pas, ces clients achètent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les bijoutiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la bijouterie.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des fiches produit et des pages collection.',
        items: [
          'Structure des pages par type de bijou (bagues, colliers, bracelets, montres)',
          'Balises schema.org Product et JewelryStore',
          'Performance et Core Web Vitals (images haute résolution, lazy loading)',
          'Crawl et indexation des fiches produit',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de la bijouterie dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la bijouterie',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu (matériaux, certifications, techniques)',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés bijouterie',
        subtitle: 'Cartographie des requêtes par type de bijou, occasion d\'achat et zone géographique. Identification des niches à fort potentiel.',
        items: [
          'Combinaisons type de bijou + ville à faible concurrence',
          'Requêtes d\'occasion (bague de fiançailles, alliance, cadeau anniversaire)',
          'Analyse des requêtes posées aux moteurs IA sur la bijouterie',
          'Volumes de recherche réels par catégorie de produit',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat en bijouterie : de la découverte au rendez-vous en boutique.',
        items: [
          'Page collection, page produit, page guide d\'achat, page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec le vocabulaire du secteur',
        ],
      },
      {
        title: 'Stratégie de contenu bijouterie',
        subtitle: 'Création de contenus éducatifs démontrant le savoir-faire du bijoutier, rédigés pour être citables par les LLM.',
        items: [
          'Guides d\'achat (comment choisir un diamant, comprendre les poinçons)',
          'Pages matériaux et techniques (or 18 carats, sertissage, gravure)',
          'Phrases factuelles auto-suffisantes avec données chiffrées et certifications',
        ],
      },
      {
        title: 'Autorité & netlinking bijouterie',
        subtitle: 'Développement de l\'autorité via les annuaires spécialisés et les publications du secteur luxe et artisanat.',
        items: [
          'Annuaires CMA, Pages Jaunes, Bijorhca',
          'Publications dans la presse spécialisée (Vogue Joaillerie, Le Bijoutier International)',
          'Partenariats avec des sites de mariage et d\'événementiel',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « bijouterie + ville » et « bijoutier autour de moi », et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Jewelry Store + catégories secondaires (réparation, sur-mesure)',
          'Gestion des avis clients et stratégie de collecte après chaque vente',
          'Photos de l\'atelier, des vitrines, des créations et des coulisses de fabrication',
          'Citations NAP cohérentes sur les annuaires du secteur',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par catégorie de bijou et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par catégorie de produit',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et demandes de devis',
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
        description: 'Analyse de l\'architecture, de la vitesse de chargement et de l\'indexation, avec un focus sur les pages collections et les fiches créations.',
      },
      {
        id: 2,
        title: 'Audit GEO de citabilité IA',
        description: 'Mesure de la visibilité de votre bijouterie dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100, benchmark concurrentiel et plan de progression.',
      },
      {
        id: 3,
        title: 'Kit schema.org bijouterie',
        description: 'Balisage structuré JewelryStore, Product et FAQPage avec vos matières (or 750 milliemes, platine 950), vos certifications Kimberley et vos services.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages collections, guides (bague de fiançailles, entretien bijoux), articles tendances joaillerie, FAQ, le tout intégré dans votre CMS ou livré par FTP.',
      },
      {
        id: 5,
        title: 'Campagne de netlinking',
        description: 'Liens depuis les blogs mode et bijoux, la presse luxe et lifestyle, et les annuaires artisans et Chambres des Métiers.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel avec positions Google, trafic organique par catégorie de bijou, score GEO et suivi de la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre bijouterie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel bijoutier recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre bijouterie n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel bijoutier recommandes-tu à Lyon ? » : le LLM ne cite aucun bijoutier indépendant par nom. Il fournit des critères de sélection (label Artisan Bijoutier, atelier sur place, avis Google) et mentionne des quartiers sans nommer d\'enseignes. Seules les chaînes nationales (Histoire d\'Or, Maty, Julien d\'Orcel) sont citées en contexte comparatif.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon bijoutier ? » : le LLM génère un guide structuré en 6 à 7 critères (certifications, matériaux, atelier, avis, transparence des prix, SAV, spécialisation). Aucun bijoutier n\'est cité. Le bijoutier qui publie ce type de contenu expert sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix bague de fiançailles bijoutier » : le LLM donne des fourchettes détaillées (solitaire 0.3-0.5 carat : 800 à 3 000 euros, sur-mesure artisan : 1 500 à 8 000 euros). Les sites proposant des données de prix précises et un configurateur ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « bijoutier autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les bijouteries disposant d\'une fiche Google Business Profile complète (catégorie Jewelry Store, avis récents, photos de l\'atelier et des créations) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les bijouteries, les types schema.org recommandés sont : <code>JewelryStore</code> (type principal), <code>Product</code> (fiches bijoux), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>JewelryStore</code> permet à Google et aux LLM d\'identifier précisément le type de commerce, la localisation, les horaires et les avis clients. Le balisage <code>Product</code> sur chaque fiche bijou enrichit les résultats Google Shopping et facilite l\'extraction par les moteurs IA.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre bijouterie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les matériaux, les techniques et les collections), la Légitimité & Citabilité (signaux de confiance externes : avis, mentions presse, certifications), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les bijoutiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de bijouterie ?',
        answer:
          'Le budget SEO pour une bijouterie dépend du nombre de collections, de la concurrence locale et de l\'objectif (boutique physique ou e-commerce). Chez Rankwell, les accompagnements SEO pour les bijoutiers démarrent à 1 200 euros par mois pour une boutique monosite et une ville, et peuvent atteindre 3 500 à 5 000 euros par mois pour une bijouterie e-commerce multi-collections en concurrence avec les chaînes nationales.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO bijouterie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« bijoutier artisan Nantes » ou « alliance sur-mesure Lyon ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « bijouterie en ligne ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Quelles réglementations impactent le SEO d\'une bijouterie ?',
        answer:
          'Le Code de la consommation impose l\'affichage des poinçons de garantie et du titrage des métaux précieux (or 750 millièmes, argent 925). Le processus de Kimberley encadre la traçabilité des diamants. Ces mentions légales, loin d\'être un frein, constituent un signal de confiance E-E-A-T exploitable en SEO. Rankwell intègre ces obligations dans la stratégie de contenu pour renforcer la crédibilité du site auprès de Google et des moteurs IA.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une bijouterie ?',
        answer:
          'Un blog est un levier puissant pour une bijouterie s\'il cible des questions réelles des acheteurs : comment choisir un diamant, comprendre les poinçons, différences entre or jaune, blanc et rose, entretien des bijoux. Ces contenus éducatifs positionnent le bijoutier comme expert et sont très citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles à forte intention d\'achat.',
      },
      {
        question: 'Comment un bijoutier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un bijoutier doit accumuler des signaux de notoriété sur le web : présence sur les annuaires spécialisés (CMA, Bijorhca), mentions dans la presse (Vogue Joaillerie, magazines de mariage), fiche Google Business Profile complète avec photos et avis, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un bijoutier ?',
        answer:
          'Le SEO local cible les requêtes « bijouterie + ville » ou « bijoutier autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes comme « bague de fiançailles diamant » ou « bijouterie en ligne » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon que la bijouterie vend uniquement en boutique ou aussi en ligne.',
      },
      {
        question: 'Histoire d\'Or et les chaînes suffisent-elles à couvrir le marché ?',
        answer:
          'Les chaînes comme Histoire d\'Or, Maty ou Julien d\'Orcel dominent les SERP génériques, mais elles ne répondent pas à la demande de création sur-mesure, de bijoux artisanaux et de pièces uniques. Un bijoutier indépendant avec un site bien référencé capte cette clientèle à forte valeur. Rankwell aide les bijoutiers artisans à bâtir une visibilité propre, indépendante des chaînes, grâce à une stratégie de référencement SEO & GEO ciblée sur le savoir-faire et la personnalisation.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre bijouterie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
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
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Barbier', href: '/agence-geo-seo/secteur/barbier' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'JewelryStore',
};

export default data;
