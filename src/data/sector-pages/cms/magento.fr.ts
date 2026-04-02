/**
 * DATA : Page CMS Magento / Adobe Commerce (FR)
 * Route : /agence-geo-seo/cms/magento
 *
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 * Magento = plateforme e-commerce enterprise, rachetee par Adobe (Adobe Commerce).
 * Forces : controle SEO total, catalogues massifs, multistore, hreflang natif.
 * Limites : infrastructure lourde (Varnish, Redis, Elasticsearch), cout eleve, complexite technique.
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'magento',
    title: 'Agence SEO & GEO Magento - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Magento / Adobe Commerce. Layered navigation, Varnish, schema.org Product, multistore : m\u00e9thodologie compl\u00e8te pour Magento 2.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Magento' },
    ],
    title: 'SEO & GEO Magento : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Navigation \u00e0 facettes non canonique, JavaScript bloat, URL rewrites mal configur\u00e9es : le r\u00e9f\u00e9rencement d\'un site Magento 2 exige une expertise technique que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique et GEO pour positionner votre catalogue sur Google et faire citer vos produits par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Magento',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Magento (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Magento',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Magento propulse plus de 100 000 boutiques et g\u00e9n\u00e8re plus de 155 milliards de dollars de volume marchand annuel</strong>. La plateforme offre des URL rewrites granulaires, des canonical tags par produit, des sitemaps XML par store view et la gestion native du multistore et des hreflang. Le balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a> Product est injectable dans les templates Phtml, ce qui en fait la r\u00e9f\u00e9rence pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> sur des catalogues internationaux.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">La layered navigation g\u00e9n\u00e8re des milliers d\'URL de filtres indexables par d\u00e9faut</strong>, chaque combinaison cr\u00e9ant une page sans canonical, ce qui dilue massivement le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a>. Magento 2 souffre aussi d\'un JavaScript bloat natif (RequireJS, KnockoutJS) qui d\u00e9grade les Core Web Vitals et n\u00e9cessite une infrastructure lourde (Varnish, Redis, Elasticsearch).',
    geoAngle:
      'Selon Rankwell, les sites Magento peuvent injecter du schema.org Product enrichi (prix, stock, avis, GTIN) dans les templates Phtml, mais cet avantage reste latent sans configuration explicite des donn\u00e9es structur\u00e9es et sans passages factuels auto-suffisants sur les pages cat\u00e9gories.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Magento et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des boutiques Magento 2 non optimis\u00e9es. Chaque d\u00e9faut technique d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 du site \u00e0 \u00eatre cit\u00e9 par les moteurs IA. Un audit sp\u00e9cifique Magento identifie les corrections prioritaires pour votre catalogue.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Layered navigation : chaque combinaison de filtres g\u00e9n\u00e8re une URL distincte',
        'Milliers de pages dupliqu\u00e9es index\u00e9es, crawl budget gaspill\u00e9',
        'Canonical tags sur les pages filtr\u00e9es, noindex via robots meta sur les combinaisons non strat\u00e9giques, configuration de l\'extension Amasty ou Mageworx',
      ],
      [
        'JavaScript bloat (RequireJS, KnockoutJS natifs Magento 2)',
        'LCP > 4s sur mobile, score PageSpeed inf\u00e9rieur \u00e0 40',
        'Migration vers Hyv\u00e4 ou suppression des modules JS inutilis\u00e9s, bundling critique, d\u00e9f\u00e9rrement des scripts non essentiels',
      ],
      [
        'URLs \u00e0 param\u00e8tres multiples non canoniques (?color=red&size=M)',
        'Dilution d\'autorit\u00e9, pages en concurrence avec les cat\u00e9gories principales',
        'Rewrite rules Varnish/Nginx, canonical tags dynamiques, param\u00e8tres exclus dans Google Search Console',
      ],
      [
        'Sitemap XML incluant les pages CMS, filtres et store views inactives',
        'Crawl budget gaspill\u00e9 sur des URL non strat\u00e9giques',
        'Configuration granulaire du sitemap natif Magento : exclusion des filtres, des pages noindex et des store views d\u00e9sactiv\u00e9es',
      ],
      [
        'Absence de schema.org Product enrichi (prix, stock, avis, GTIN)',
        'Pas de rich snippets produit, invisibilit\u00e9 pour les LLM',
        'Injection du balisage Product, AggregateRating et Offer dans les templates Phtml ou via extension d\u00e9di\u00e9e',
      ],
      [
        'Configuration multistore avec hreflang manquants ou incoh\u00e9rents',
        'Cannibalisation entre store views, mauvais ciblage g\u00e9ographique',
        'G\u00e9n\u00e9ration automatique des hreflang par store view, audit des mappings langue/pays, balises x-default',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Magento',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Magento 2 et Adobe Commerce.',
    steps: [
      {
        title: 'Audit technique Magento',
        subtitle: 'Analyse compl\u00e8te de l\'installation Magento 2 : version, modules actifs, configuration serveur (Varnish, Redis, Elasticsearch) et Core Web Vitals.',
        items: [
          'Inventaire des modules install\u00e9s (actifs, d\u00e9sactiv\u00e9s, en conflit)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (layered navigation, param\u00e8tres de filtres)',
          'V\u00e9rification de la stack serveur : Varnish actif, Redis configur\u00e9, Elasticsearch fonctionnel',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre catalogue Magento dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et cat\u00e9gories sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents e-commerce directs',
          'Identification des fiches produit et pages cat\u00e9gories cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage technique et rationalisation',
        subtitle: 'Suppression des modules Magento inutilis\u00e9s, correction des URL rewrites cass\u00e9es et nettoyage de la base de donn\u00e9es.',
        items: [
          'D\u00e9sactivation des modules natifs inutilis\u00e9s (Magento_Wishlist, Magento_Newsletter si non utilis\u00e9s)',
          'Nettoyage de la table url_rewrite (entr\u00e9es obsol\u00e8tes, redirections en boucle)',
          'Correction des canonical tags sur la layered navigation',
          'Suppression des store views et CMS pages inactives du sitemap',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via la configuration de Varnish, la compression des assets et l\'optimisation du rendu front-end.',
        items: [
          'Configuration optimale de Varnish Full Page Cache et Redis pour les sessions et le cache objet',
          'Compression des images produit (WebP, lazy loading natif Magento 2)',
          'Audit du JavaScript : suppression de RequireJS sur les pages critiques, bundling s\u00e9lectif',
          'Mise en place d\'un CDN (Fastly, Cloudflare) pour les assets statiques',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage des URL rewrites, des canonicals, du sitemap et du balisage schema.org Product dans Magento 2.',
        items: [
          'URL rewrites propres (suppression des cat\u00e9gories parentes dans les URL produits)',
          'Canonical tags dynamiques sur les pages cat\u00e9gories et les filtres',
          'Sitemap XML configur\u00e9 par store view (exclusion des pages noindex)',
          'Balisage schema.org : Product, AggregateRating, Offer, BreadcrumbList, Organization',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour les pages cat\u00e9gories, les fiches produit et les guides d\'achat.',
        items: [
          'R\u00e9daction de descriptions cat\u00e9gories uniques avec donn\u00e9es factuelles et comparatifs',
          'Enrichissement des fiches produit : sp\u00e9cifications techniques, FAQ produit, guides de taille',
          'Cr\u00e9ation de guides d\'achat et comparatifs pour capter les requ\u00eates informationnelles',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de m\u00e9dias e-commerce, comparateurs et sites sp\u00e9cialis\u00e9s.',
        items: [
          'Backlinks depuis des comparateurs produits, blogs e-commerce et m\u00e9dias sectoriels',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique',
          'Mentions de marque dans des guides d\'achat et articles comparatifs',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique Magento.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page (cat\u00e9gories, fiches produit, guides)',
          'Trafic organique segment\u00e9 par type de page et par store view',
          'Score GEO : visibilit\u00e9 des produits et de la marque dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et \u00e9tat de la stack serveur (Varnish, Redis, Elasticsearch)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique Magento, votre agence de d\u00e9veloppement ou votre direction e-commerce.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Magento',
        description: 'Diagnostic complet de votre installation Magento 2 : inventaire des modules (actifs, d\u00e9sactiv\u00e9s, en conflit), configuration Varnish/Redis/Elasticsearch, Core Web Vitals, crawl budget, layered navigation, avec la liste des corrections class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre catalogue et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates produit cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Magento',
        description: 'Balisage Product, AggregateRating, Offer, BreadcrumbList et Organization inject\u00e9 dans vos templates Phtml ou configur\u00e9 via Amasty SEO Toolkit / Mageworx SEO Suite. Guide d\'int\u00e9gration technique pour votre \u00e9quipe de d\u00e9veloppement.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de descriptions cat\u00e9gories, fiches produit enrichies, guides d\'achat et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans le back-office Magento 2 ou par d\u00e9ploiement sur votre environnement de staging.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs produits, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par cat\u00e9gorie et fiche produit, trafic organique segment\u00e9 par store view, \u00e9volution du Score GEO, sant\u00e9 technique Magento (Varnish, Redis, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Magento dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel site pour acheter [votre produit] ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre catalogue Magento n\'appara\u00eet dans aucune source cit\u00e9e, vos produits sont invisibles dans ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence Magento</h4><p>Sur "quelle agence SEO pour un site Magento ?", le LLM ne cite aucune agence fran\u00e7aise. Il fournit une liste de crit\u00e8res de s\u00e9lection (exp\u00e9rience Magento/Adobe Commerce, ma\u00eetrise de Varnish et Elasticsearch, r\u00e9f\u00e9rences sur des catalogues de plus de 10 000 r\u00e9f\u00e9rences) et renvoie vers les programmes partenaires Adobe. Seules des agences anglophones sp\u00e9cialis\u00e9es (1Digital Agency, IWD Agency) sont mentionn\u00e9es. L\'agence fran\u00e7aise qui publie une m\u00e9thodologie d\u00e9taill\u00e9e avec r\u00e9sultats chiffr\u00e9s sur Magento a un terrain vierge \u00e0 occuper.</p><h4>Requ\u00eates techniques Magento</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Magento", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 10 \u00e0 14 points couvrant les URL rewrites, la layered navigation, les canonicals, les sitemaps, les extensions SEO (Amasty, Mageworx), la configuration Varnish, et le balisage schema.org Product. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont la documentation Adobe Commerce, Amasty Blog, Nexcess et FireBear Studio.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Magento vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. Magento est pr\u00e9sent\u00e9 comme la plateforme offrant le contr\u00f4le technique le plus complet, mais n\u00e9cessitant une infrastructure co\u00fbteuse et des comp\u00e9tences d\u00e9veloppement avanc\u00e9es. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Magento", le LLM fournit une liste de 8 \u00e0 12 probl\u00e8mes sp\u00e9cifiques (layered navigation, JavaScript bloat, URL \u00e0 param\u00e8tres). Les contenus qui structurent probl\u00e8me/impact/solution en tableau sont les plus extraits comme source de r\u00e9f\u00e9rence.</p>',
    structuredData:
      'Pour un site Magento 2, les types schema.org recommand\u00e9s sont : <code>Product</code> avec <code>Offer</code> et <code>AggregateRating</code> (fiches produit), <code>BreadcrumbList</code> (navigation), <code>Organization</code> (page d\'accueil), <code>ItemList</code> (pages cat\u00e9gories), <code>FAQPage</code> (guides et FAQ). Magento ne g\u00e8re pas nativement le balisage enrichi : l\'injection se fait via les templates Phtml, les extensions Amasty ou Mageworx, ou par module custom. Le balisage permet \u00e0 Google d\'afficher des rich snippets produit (prix, disponibilit\u00e9, avis) et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs recommandations.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre catalogue Magento par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit, guides d\'achat et comparatifs), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks depuis des m\u00e9dias e-commerce et comparateurs), et la Densit\u00e9 Factuelle (richesse du balisage schema.org Product, donn\u00e9es techniques et sp\u00e9cifications sur les fiches produit).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Magento',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Magento ?',
        answer:
          'Le budget SEO pour un site Magento d\u00e9pend du nombre de produits, de la complexit\u00e9 de la layered navigation et du nombre de store views actives. Chez Rankwell, les accompagnements SEO Magento d\u00e9marrent \u00e0 2 500 EUR/mois pour un catalogue de moins de 5 000 produits, et atteignent 5 000 \u00e0 10 000 EUR/mois pour les catalogues massifs (50 000+ r\u00e9f\u00e9rences) avec multistores internationaux. Ce budget inclut l\'audit technique, l\'optimisation de la stack serveur, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Magento ?',
        answer:
          'Les corrections techniques Magento (layered navigation, canonicals, Varnish) produisent des effets mesurables sur le crawl budget d\u00e8s le premier mois. Les gains de positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessitent 4 \u00e0 8 mois de travail soutenu, selon le niveau de concurrence e-commerce. L\'optimisation des Core Web Vitals (suppression du JavaScript bloat) am\u00e9liore les scores PageSpeed en 2 \u00e0 4 semaines. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre installation Magento.',
      },
      {
        question: 'Faut-il choisir Amasty SEO Toolkit ou Mageworx SEO Suite pour Magento ?',
        answer:
          'Amasty SEO Toolkit et Mageworx SEO Suite Ultimate sont les deux extensions SEO de r\u00e9f\u00e9rence pour Magento 2. Amasty (environ 249 USD) propose une solution all-in-one couvrant les meta-tags, rich snippets, sitemaps et canonical URLs. Mageworx (environ 299 USD) se distingue par la gestion avanc\u00e9e du contenu dupliqu\u00e9, les templates de meta-tags et l\'int\u00e9gration OpenAI pour g\u00e9n\u00e9rer des descriptions produit. Rankwell travaille avec les deux extensions et recommande celle qui correspond le mieux \u00e0 votre configuration existante et au volume de votre catalogue.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Magento ?',
        answer:
          'La lenteur d\'un site Magento 2 provient g\u00e9n\u00e9ralement de trois causes : un JavaScript bloat natif (RequireJS et KnockoutJS chargent des centaines de kilooctets inutiles), une configuration serveur sous-dimensionn\u00e9e (Varnish, Redis ou Elasticsearch absents ou mal configur\u00e9s), et des images produit non compress\u00e9es. Rankwell commence par un audit de performance qui identifie les modules responsables de la lenteur, configure Varnish Full Page Cache, active Redis pour les sessions, convertit les images en WebP et \u00e9value la migration du th\u00e8me vers Hyv\u00e4 pour supprimer le front-end legacy.',
      },
      {
        question: 'Comment faire citer mon catalogue Magento par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent vos produits Magento, trois conditions sont n\u00e9cessaires : des fiches produit riches en donn\u00e9es factuelles v\u00e9rifiables (sp\u00e9cifications techniques, comparatifs, GTIN), un balisage schema.org Product complet (Product, Offer, AggregateRating), et des mentions de vos produits sur des sources tierces (comparateurs, presse sp\u00e9cialis\u00e9e, avis ind\u00e9pendants). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre catalogue.',
      },
      {
        question: 'Magento est-il toujours le meilleur CMS e-commerce pour le SEO en 2026 ?',
        answer:
          'Magento (Adobe Commerce) reste la plateforme e-commerce offrant le contr\u00f4le SEO le plus complet en 2026 : URL rewrites granulaires, canonical tags, hreflang natif, acc\u00e8s total au code. Cependant, Shopify offre une performance native sup\u00e9rieure sans configuration serveur, et WooCommerce h\u00e9rite de l\'\u00e9cosyst\u00e8me plugins WordPress. Magento convient aux catalogues de plus de 10 000 r\u00e9f\u00e9rences, aux multistores internationaux et aux entreprises disposant d\'une \u00e9quipe technique d\u00e9di\u00e9e. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux sp\u00e9cificit\u00e9s de chaque plateforme.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Magento ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Magento (audit de la layered navigation, configuration Varnish/Redis, balisage schema.org Product, gestion multistore) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de Magento 2 : contenu dupliqu\u00e9 par les filtres, JavaScript bloat, infrastructure serveur, hreflang multistore. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre catalogue dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Magento ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Magento. Nos consultants SEO & GEO analysent votre catalogue, votre layered navigation, votre stack serveur et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Mode & Textile', href: '/agence-geo-seo/secteur/mode-textile' },
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
      ],
      projets: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
        { label: 'SEO International', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
      { label: 'OpenCart', href: '/agence-geo-seo/cms/opencart' },
      { label: 'Sylius', href: '/agence-geo-seo/cms/sylius' },
    ],
  },
};

export default data;
