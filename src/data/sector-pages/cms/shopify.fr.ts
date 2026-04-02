/**
 * DATA : Page CMS Shopify (FR)
 * Route : /agence-geo-seo/cms/shopify
 *
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'shopify',
    title: 'Agence SEO & GEO Shopify - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique Shopify. URLs, contenu dupliqu\u00e9, schema Product, apps SEO : m\u00e9thodologie compl\u00e8te pour Shopify.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Shopify' },
    ],
    title: 'SEO & GEO Shopify : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'URLs fig\u00e9es en /collections/ et /products/, contenu dupliqu\u00e9 par les collections, schema Product absent par d\u00e9faut : le r\u00e9f\u00e9rencement d\'une boutique Shopify exige une expertise sp\u00e9cifique. Nos experts combinent SEO technique et GEO pour positionner votre boutique sur Google et faire citer vos produits par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Shopify',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Shopify (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Shopify',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">5,6 millions de boutiques actives et un CDN int\u00e9gr\u00e9 \u00e0 309 ms de temps de chargement moyen</strong>. Shopify g\u00e8re nativement le SSL, le sitemap XML, les canonical tags et les redirections 301. Les metafields permettent d\'enrichir le balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a> Product, ce qui concentre la strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> sur le contenu et l\'autorit\u00e9.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Un produit dans 3 collections g\u00e9n\u00e8re 4 URLs accessibles</strong>, diluant le crawl budget. Les pr\u00e9fixes d\'URL rigides (/products/, /collections/) aplatissent l\'architecture, le blog natif ne permet pas de <a href="/glossaire/cocon-semantique" class="text-rw-blue hover:underline">cocon s\u00e9mantique</a> et le sitemap reste automatique sans contr\u00f4le des URLs incluses.',
    geoAngle:
      'Selon Rankwell, les boutiques Shopify qui exploitent les metafields pour injecter du schema Product enrichi (prix, GTIN, avis) et qui structurent leurs fiches avec des passages factuels auto-suffisants deviennent des sources privil\u00e9gi\u00e9es de recommandation pour ChatGPT et Perplexity.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO e-commerce en 2026 int\u00e8gre un enjeu in\u00e9dit : les LLM deviennent un canal de recommandation produit \u00e0 part enti\u00e8re. ChatGPT et Perplexity comparent des produits, recommandent des marques et citent des fiches produit dans leurs r\u00e9ponses.',
    glossarySlug: 'seo-ecommerce',
    glossaryLabel: 'En savoir plus sur le SEO e-commerce',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Shopify et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des boutiques Shopify non optimis\u00e9es. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 de vos fiches produit \u00e0 \u00eatre cit\u00e9es par les moteurs IA. Un audit technique identifie lesquels affectent votre boutique et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Contenu dupliqu\u00e9 : 1 produit dans 3 collections = 4 URLs',
        'Dilution du crawl budget, cannibalisation entre URLs produit',
        'Audit des canonical tags, consolidation via redirections 301, suppression des collections redondantes',
      ],
      [
        'Structure d\'URL rigide (/products/, /collections/, /pages/)',
        'Architecture plate, perte de signal hi\u00e9rarchique pour Google',
        'Optimisation des handles d\'URL, organisation des collections en navigation \u00e0 facettes, maillage interne contextuel',
      ],
      [
        'Absence de schema Product enrichi par d\u00e9faut',
        'Pas de rich snippets produit (prix, avis, stock), invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD Product via metafields ou app d\u00e9di\u00e9e (JSON-LD for SEO, Tiny SEO), avec prix, GTIN, avis agr\u00e9g\u00e9s',
      ],
      [
        'Pages de tags index\u00e9es automatiquement',
        'Centaines de pages thin content dans l\'index Google',
        'Noindex sur les pages de tags via modification du theme Liquid, cr\u00e9ation de vraies collections pour les tags \u00e0 volume de recherche',
      ],
      [
        'Blog natif limit\u00e9 (pas de cat\u00e9gories, pas de cocon s\u00e9mantique)',
        'Difficult\u00e9 \u00e0 construire une autorit\u00e9 th\u00e9matique via le contenu',
        'Organisation des articles par tags strat\u00e9giques, maillage interne entre articles et fiches produit, FAQ produit int\u00e9gr\u00e9es',
      ],
      [
        'Sitemap g\u00e9n\u00e9r\u00e9 automatiquement sans contr\u00f4le',
        'Inclusion de pages inutiles (mentions l\u00e9gales, pages de politique), exclusion impossible',
        'Filtrage via robots.txt personnalis\u00e9 (theme editor), compl\u00e9ment par soumission d\'un sitemap additionnel dans GSC',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Shopify',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Shopify.',
    steps: [
      {
        title: 'Audit technique Shopify',
        subtitle: 'Analyse compl\u00e8te de votre boutique Shopify : th\u00e8me, apps install\u00e9es, configuration des URLs, canonical tags et Core Web Vitals.',
        items: [
          'Inventaire des apps actives et d\u00e9tection de celles qui injectent du JS bloquant',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur fiches produit et pages collection',
          'Analyse du contenu dupliqu\u00e9 : mapping des URLs produit par collection',
          'V\u00e9rification du robots.txt, du sitemap et de la configuration SSL',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique Shopify dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates produit et marque sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs sur votre cat\u00e9gorie produit',
          'Identification des fiches produit cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des apps',
        subtitle: 'Suppression des apps redondantes ou inutilis\u00e9es qui alourdissent votre boutique et d\u00e9gradent les temps de chargement.',
        items: [
          'D\u00e9sinstallation des apps inactives (restes de code dans le th\u00e8me inclus)',
          'Remplacement des apps lourdes par des solutions natives ou l\u00e9g\u00e8res',
          'Nettoyage du code Liquid inject\u00e9 par les apps d\u00e9sinstall\u00e9es',
          'V\u00e9rification que les scripts tiers n\'ajoutent pas de noindex accidentel',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement en exploitant le CDN natif Shopify et en optimisant les assets du th\u00e8me.',
        items: [
          'Compression des images en WebP avec lazy loading natif Shopify',
          'R\u00e9duction du CSS/JS du th\u00e8me (suppression du code inutilis\u00e9)',
          'Exploitation du CDN Shopify et preconnect sur les ressources tierces',
          'Chargement diff\u00e9r\u00e9 des scripts d\'apps non critiques (avis, chat, popups)',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e Shopify',
        subtitle: 'Param\u00e9trage complet des meta tags, du schema.org et des redirections pour compenser les limites natives de la plateforme.',
        items: [
          'Optimisation des handles d\'URL pour chaque produit, collection et page',
          'Injection de JSON-LD Product enrichi via metafields (prix, GTIN, avis, disponibilit\u00e9)',
          'Personnalisation du robots.txt via le theme editor Liquid',
          'Balisage compl\u00e9mentaire : Organization, WebSite, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 produit par les moteurs IA.',
        items: [
          'Fiches produit enrichies avec sp\u00e9cifications, comparatifs et FAQ int\u00e9gr\u00e9es',
          'Guides d\'achat et articles de blog reli\u00e9s aux collections par maillage interne',
          'Descriptions de collections optimis\u00e9es avec contenu unique (pas de texte g\u00e9n\u00e9rique)',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 de votre boutique via des backlinks depuis des m\u00e9dias sp\u00e9cialis\u00e9s, comparateurs et influenceurs de votre niche.',
        items: [
          'Backlinks depuis des comparateurs produit, blogs sp\u00e9cialis\u00e9s et m\u00e9dias e-commerce',
          'R\u00e9f\u00e9rencement sur les marketplaces et annuaires sectoriels',
          'Mentions de marque dans des guides d\'achat et articles comparatifs',
          'Chaque mention externe renforce le Domain Rating et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les KPIs e-commerce.',
        items: [
          'Positions Google par fiche produit, collection et article de blog',
          'Trafic organique segment\u00e9 par type de page (produit, collection, blog)',
          'Score GEO : \u00e9volution de la visibilit\u00e9 dans les moteurs IA',
          'Suivi des Core Web Vitals et de la sant\u00e9 technique Shopify (apps, th\u00e8me)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe e-commerce, votre d\u00e9veloppeur Shopify ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Shopify',
        description: 'Diagnostic complet de votre boutique Shopify : inventaire des apps (actives, r\u00e9sidus de code, conflits), audit du contenu dupliqu\u00e9 par collection, Core Web Vitals par type de page, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre boutique et de vos produits dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Shopify',
        description: 'Balisage Product enrichi (prix, GTIN, avis, disponibilit\u00e9) inject\u00e9 via metafields ou app d\u00e9di\u00e9e, plus les types Organization, WebSite, BreadcrumbList et FAQPage. Guide d\'int\u00e9gration Liquid avec exemples de code.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produit, descriptions de collections, guides d\'achat et articles de blog optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans l\'admin Shopify ou via le th\u00e8me Liquid.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs produit, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par fiche produit et collection, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique Shopify (apps, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique Shopify dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel est le meilleur produit pour..." ou "quelle boutique en ligne recommander pour...", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit ne contiennent pas de donn\u00e9es factuelles structur\u00e9es, votre boutique est invisible dans ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Shopify ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience Shopify prouv\u00e9e, r\u00e9f\u00e9rences e-commerce, ma\u00eetrise des contraintes techniques Shopify) et renvoie vers des annuaires comme Sortlist ou des listes \u00e9ditorialisees. Kalys est mentionn\u00e9e comme agence 100 % sp\u00e9cialis\u00e9e Shopify. L\'agence qui d\u00e9montre une m\u00e9thodologie document\u00e9e avec des r\u00e9sultats chiffr\u00e9s a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Shopify", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 12 points couvrant les handles d\'URL, les meta descriptions, les images, le blog, le schema.org via metafields et la soumission du sitemap. Il pr\u00e9cise que Shopify g\u00e8re environ 80 % du SEO technique nativement. Les sources privil\u00e9gi\u00e9es sont le blog officiel Shopify, le Help Center et les guides francophones (Dialekta, Axome).</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Shopify vs WooCommerce pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. Shopify est pr\u00e9sent\u00e9 comme plus performant nativement (CDN, 309 ms, SSL) mais plus limit\u00e9 (URLs fig\u00e9es, pas de sous-cat\u00e9gories). WooCommerce est pr\u00e9sent\u00e9 comme plus flexible techniquement. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Shopify", le LLM fournit une liste de 7 \u00e0 10 probl\u00e8mes sp\u00e9cifiques : contenu dupliqu\u00e9 par les collections, URLs rigides, tags index\u00e9s, schema.org absent. Les contenus qui structurent probl\u00e8me/solution en tableau ou en liste num\u00e9rot\u00e9e ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour une boutique Shopify, les types schema.org recommand\u00e9s sont : <code>Product</code> (type principal, enrichi via metafields avec prix, GTIN, avis, disponibilit\u00e9), <code>Organization</code> (identit\u00e9 de la marque), <code>WebSite</code> (avec SearchAction pour la barre de recherche), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ produit ou FAQ g\u00e9n\u00e9rale), <code>CollectionPage</code> (pages de collection). Le balisage Product enrichi est le plus critique : il permet \u00e0 Google d\'afficher les rich snippets produit (prix, \u00e9toiles, stock) et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs recommandations d\'achat.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique Shopify par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit, guides d\'achat, blog), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (avis clients, mentions dans des comparateurs, backlinks e-commerce), et la Densit\u00e9 Factuelle (richesse du balisage Product, donn\u00e9es structur\u00e9es et sp\u00e9cifications mesurables dans les fiches produit).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Shopify',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une boutique Shopify ?',
        answer:
          'Le budget SEO pour une boutique Shopify d\u00e9pend du nombre de produits, du niveau de concurrence et de la complexit\u00e9 du catalogue. Chez Rankwell, les accompagnements SEO Shopify d\u00e9marrent \u00e0 1 500 EUR/mois pour une boutique de moins de 200 produits, et atteignent 3 000 \u00e0 6 000 EUR/mois pour les catalogues volumineux ou les boutiques Shopify Plus avec des enjeux internationaux. Ce budget inclut l\'audit technique, l\'optimisation des fiches produit, le balisage schema.org et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Shopify ?',
        answer:
          'Les corrections techniques (contenu dupliqu\u00e9, canonical tags, pages de tags d\u00e9sindexees) produisent des effets mesurables en 2 \u00e0 4 semaines. Le positionnement sur des mots-cl\u00e9s concurrentiels (noms de produits, cat\u00e9gories) n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. L\'avantage de Shopify est que la performance native (CDN, SSL, mobile-first) \u00e9limine les probl\u00e8mes de vitesse d\u00e8s le d\u00e9part. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre boutique.',
      },
      {
        question: 'Comment g\u00e9rer le contenu dupliqu\u00e9 cr\u00e9\u00e9 par les collections Shopify ?',
        answer:
          'Shopify g\u00e9n\u00e8re une URL par collection pour chaque produit, en plus de l\'URL canonique /products/. Par exemple, un t-shirt pr\u00e9sent dans 3 collections produit 4 URLs distinctes. La solution repose sur la v\u00e9rification des balises canonical (Shopify les g\u00e8re automatiquement, mais certains th\u00e8mes les modifient), la suppression des collections redondantes et la mise en place de redirections 301 pour les collections fusionn\u00e9es. Rankwell audite chaque URL produit pour d\u00e9tecter les cas de cannibalisation.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de ma boutique Shopify ?',
        answer:
          'Shopify offre un CDN int\u00e9gr\u00e9 avec un temps de chargement moyen de 309 ms, mais les apps tierces d\u00e9gradent cette performance. Chaque app installe du JavaScript qui s\'ex\u00e9cute sur chaque page, m\u00eame apr\u00e8s d\u00e9sinstallation si le code Liquid n\'est pas nettoy\u00e9. Rankwell commence par un audit des apps : d\u00e9sinstallation des apps inutilis\u00e9es, nettoyage du code r\u00e9siduel dans le th\u00e8me, compression des images en WebP et chargement diff\u00e9r\u00e9 des scripts non critiques.',
      },
      {
        question: 'Comment faire citer ma boutique Shopify par ChatGPT et Perplexity ?',
        answer:
          'Les moteurs IA citent les boutiques dont les fiches produit contiennent des donn\u00e9es factuelles v\u00e9rifiables : sp\u00e9cifications techniques, comparatifs, certifications, avis clients agr\u00e9g\u00e9s. Sur Shopify, cela passe par l\'enrichissement des metafields Product (GTIN, mat\u00e9riaux, dimensions), l\'injection de JSON-LD complet et la cr\u00e9ation de guides d\'achat structur\u00e9s. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les fiches produit \u00e0 optimiser en priorit\u00e9.',
      },
      {
        question: 'Shopify est-il un bon choix pour le SEO e-commerce en 2026 ?',
        answer:
          'Shopify est un excellent choix pour les marchands qui veulent un socle technique fiable sans g\u00e9rer l\'h\u00e9bergement, la s\u00e9curit\u00e9 ou les mises \u00e0 jour. Sa performance native (CDN, 309 ms, SSL) surpasse la plupart des installations WooCommerce ou PrestaShop non optimis\u00e9es. En revanche, les boutiques qui ont besoin d\'une architecture URL complexe (sous-cat\u00e9gories, facettes avanc\u00e9es) ou d\'un contr\u00f4le total sur le serveur pr\u00e9f\u00e9reront WooCommerce ou Magento. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et limites de chaque plateforme.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique Shopify ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Shopify (audit d\'apps, gestion du contenu dupliqu\u00e9 par collection, injection de schema Product via metafields, optimisation Liquid) avec la dimension GEO que les agences Shopify sp\u00e9cialis\u00e9es n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques propres \u00e0 Shopify : URLs fig\u00e9es, pages de tags, sitemap automatique, blog limit\u00e9. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos produits dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique Shopify ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique Shopify. Nos consultants SEO & GEO analysent votre catalogue, vos collections, votre balisage Product et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Mode & Textile', href: '/agence-geo-seo/secteur/mode' },
        { label: 'SEO Cosm\u00e9tique', href: '/agence-geo-seo/secteur/cosmetique' },
      ],
      projets: [
        { label: 'SEO Site e-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'SEO international', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
    ],
  },
};

export default data;
