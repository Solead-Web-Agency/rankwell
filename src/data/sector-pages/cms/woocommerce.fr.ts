/**
 * DATA : Page CMS WooCommerce (FR)
 * Route : /agence-geo-seo/cms/woocommerce
 *
 * Extension e-commerce de WordPress : herite de ses forces SEO (plugins, controle HTML)
 * et de ses faiblesses (dependance plugins, lenteur), avec des problematiques
 * specifiques au e-commerce (variantes produit, catalogue massif, schema Product).
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'woocommerce',
    title: 'Agence SEO & GEO WooCommerce - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique WooCommerce. Fiches produits, performance catalogue, schema Product, variantes : m\u00e9thodologie compl\u00e8te pour WooCommerce.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'WooCommerce' },
    ],
    title: 'SEO & GEO WooCommerce : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Variantes de produits qui g\u00e9n\u00e8rent du contenu dupliqu\u00e9, base de donn\u00e9es wp_postmeta qui ralentit au-del\u00e0 de 5 000 r\u00e9f\u00e9rences, descriptions copi\u00e9es du fournisseur : le r\u00e9f\u00e9rencement d\'une boutique WooCommerce exige une double expertise WordPress et e-commerce. Nos experts combinent SEO technique et GEO pour positionner vos fiches produits sur Google et faire citer votre catalogue par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO WooCommerce',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur WooCommerce (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur WooCommerce',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">WooCommerce propulse environ 33 % des boutiques e-commerce dans le monde</strong>. Il h\u00e9rite du contr\u00f4le total WordPress sur le HTML, les permaliens et le balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a>, avec des plugins matures comme Yoast + addon WooCommerce ou RankMath pour le schema Product automatique. Cette flexibilit\u00e9 permet une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> enti\u00e8rement personnalis\u00e9e.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">La table wp_postmeta d\u00e9passe 4 \u00e0 5 millions de lignes au-del\u00e0 de 10 000 produits</strong>, d\u00e9gradant les Core Web Vitals. Les variantes cr\u00e9ent des URLs multiples qui diluent le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a>, les filtres \u00e0 facettes g\u00e9n\u00e8rent des milliers de pages indexables, et les descriptions fournisseur produisent du contenu dupliqu\u00e9 \u00e0 grande \u00e9chelle.',
    geoAngle:
      'Selon Rankwell, WooCommerce offre un levier de citabilit\u00e9 IA unique gr\u00e2ce \u00e0 la combinaison du schema Product et de la flexibilit\u00e9 WordPress pour le contenu \u00e9ditorial. Mais cette citabilit\u00e9 reste th\u00e9orique sans descriptions produits originales, sans FAQ structur\u00e9es et sans signaux E-E-A-T v\u00e9rifiables par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur WooCommerce et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des boutiques WooCommerce d\u00e8s que le catalogue d\u00e9passe quelques centaines de produits. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 des moteurs IA \u00e0 extraire vos fiches produits comme sources fiables. Un audit technique cibl\u00e9 identifie lesquels affectent votre boutique et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Lenteur base de donn\u00e9es (wp_postmeta > 4M lignes)',
        'LCP > 4s sur les pages cat\u00e9gories, abandon panier mobile',
        'Nettoyage des transients expir\u00e9s, index SQL sur colonnes critiques (prix, stock), migration vers HPOS (High-Performance Order Storage)',
      ],
      [
        'Contenu dupliqu\u00e9 par les variantes produit',
        'Dilution du crawl budget, cannibalisation entre variantes et fiche principale',
        'Canonical vers la fiche parent, noindex sur les variantes individuelles, regroupement des attributs en un seul schema Product',
      ],
      [
        'URLs non optimis\u00e9es (/product-category/, /product/)',
        'URLs longues, perte de signal s\u00e9mantique, hi\u00e9rarchie confuse',
        'Suppression des bases /product/ et /product-category/ via les r\u00e9glages WooCommerce, redirections 301 sur les anciennes URLs',
      ],
      [
        'Filtres \u00e0 facettes indexables (taille, couleur, prix)',
        'Milliers de pages quasi-identiques index\u00e9es, explosion du crawl budget',
        'Noindex + nofollow sur les URLs filtr\u00e9es, canonical vers la cat\u00e9gorie parente, configuration via Yoast ou RankMath',
      ],
      [
        'Descriptions produits copi\u00e9es du fournisseur',
        'Contenu dupliqu\u00e9 inter-sites, aucun avantage concurrentiel en SEO ni en citabilit\u00e9 IA',
        'R\u00e9\u00e9criture des descriptions avec valeur ajout\u00e9e (b\u00e9n\u00e9fices, cas d\'usage, donn\u00e9es techniques originales), FAQ par cat\u00e9gorie',
      ],
      [
        'Schema Product absent ou incomplet',
        'Pas de rich snippets produit (prix, avis, stock), invisibilit\u00e9 pour les LLM',
        'Configuration du schema Product via RankMath (gratuit) ou Yoast WooCommerce SEO addon, ajout des champs offers, aggregateRating et availability',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour WooCommerce',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de WooCommerce.',
    steps: [
      {
        title: 'Audit technique WooCommerce',
        subtitle: 'Analyse compl\u00e8te de l\'installation WooCommerce : plugins actifs, th\u00e8me, version PHP, \u00e9tat de la base de donn\u00e9es et Core Web Vitals sur les pages produits et cat\u00e9gories.',
        items: [
          'Inventaire des plugins (WooCommerce core, addons SEO, extensions de paiement, livraison)',
          'Mesure des Core Web Vitals sur pages produits, cat\u00e9gories et panier (mobile et desktop)',
          'Analyse de la base de donn\u00e9es : taille de wp_postmeta, transients expir\u00e9s, sessions orphelines',
          'Audit du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (variantes, filtres, pagination)',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique WooCommerce dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et cat\u00e9gories sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (m\u00eames produits, m\u00eame march\u00e9)',
          'Identification des fiches produits cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation WooCommerce',
        subtitle: 'Suppression des plugins redondants, nettoyage de la base de donn\u00e9es et \u00e9limination des pages parasites qui alourdissent le catalogue.',
        items: [
          'R\u00e9duction des plugins actifs (objectif : conserver uniquement les extensions essentielles au fonctionnement boutique)',
          'Purge de la base de donn\u00e9es : transients, r\u00e9visions, sessions expir\u00e9es, meta orphelines',
          'Suppression ou noindex des variantes produit autonomes, pages de r\u00e9sultats internes et filtres',
          'Activation du HPOS (High-Performance Order Storage) pour d\u00e9charger wp_postmeta',
        ],
      },
      {
        title: 'Optimisation de la performance catalogue',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement des pages produits et cat\u00e9gories via cache, compression et optimisation des requ\u00eates SQL.',
        items: [
          'Configuration de WP Rocket ou LiteSpeed Cache avec r\u00e8gles sp\u00e9cifiques WooCommerce (exclusion panier, checkout)',
          'Conversion des images produits en WebP avec lazy loading et dimensionnement adaptatif',
          'Mise en place d\'un CDN (Cloudflare, BunnyCDN) avec cache des pages cat\u00e9gories',
          'Ajout d\'index SQL sur les colonnes critiques (prix, stock, cat\u00e9gories) pour acc\u00e9l\u00e9rer les requ\u00eates catalogue',
        ],
      },
      {
        title: 'Configuration SEO e-commerce avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet du plugin SEO pour maximiser la visibilit\u00e9 des fiches produits, cat\u00e9gories et pages de marque.',
        items: [
          'Permaliens produits nettoy\u00e9s (suppression de /product/ et /product-category/), breadcrumbs e-commerce activ\u00e9s',
          'Sitemap XML segment\u00e9 : produits actifs, cat\u00e9gories principales, pages \u00e9ditoriales (exclusion des variantes et filtres)',
          'Schema Product complet : offers, aggregateRating, availability, brand via RankMath ou Yoast WooCommerce SEO',
          'Canonical tags sur les variantes, noindex sur les filtres \u00e0 facettes et les pages de r\u00e9sultats internes',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s autour du catalogue pour capter les requ\u00eates informationnelles et renforcer la citabilit\u00e9 IA.',
        items: [
          'R\u00e9\u00e9criture des descriptions produits avec b\u00e9n\u00e9fices, cas d\'usage et donn\u00e9es techniques originales',
          'Guides d\'achat et comparatifs par cat\u00e9gorie, reli\u00e9s aux fiches produits par maillage interne',
          'FAQ th\u00e9matiques par cat\u00e9gorie inspir\u00e9es des PAA Google et des questions pos\u00e9es aux LLM',
          'Passages factuels auto-suffisants dans chaque guide (prix, sp\u00e9cifications, comparaisons) con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks depuis des sites sp\u00e9cialis\u00e9s dans votre secteur produit.',
        items: [
          'Backlinks depuis des comparateurs produits, blogs sp\u00e9cialis\u00e9s et m\u00e9dias de votre secteur',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique (guides d\'achat, tests produits)',
          'Mentions de marque dans des articles comparatifs cit\u00e9s par les LLM comme sources de recommandation',
          'Acquisition d\'avis clients v\u00e9rifi\u00e9s qui alimentent le schema aggregateRating et renforcent la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google par fiche produit, le trafic organique, le Score GEO et les actions correctives.',
        items: [
          'Positions Google par mot-cl\u00e9 produit et par cat\u00e9gorie',
          'Trafic organique segment\u00e9 par type de page (produits, cat\u00e9gories, guides, blog)',
          'Score GEO : visibilit\u00e9 du catalogue dans les moteurs IA (recommandations produit)',
          '\u00c9volution des Core Web Vitals et de la sant\u00e9 technique WooCommerce (base de donn\u00e9es, plugins, cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe e-commerce, votre d\u00e9veloppeur WordPress ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique WooCommerce',
        description: 'Diagnostic complet de votre boutique WooCommerce : inventaire des plugins (core, SEO, paiement, livraison), \u00e9tat de la base de donn\u00e9es wp_postmeta, Core Web Vitals par type de page, crawl budget et s\u00e9curit\u00e9, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre boutique et de vos produits dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates catalogue. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org WooCommerce',
        description: 'Balisage Product (offers, aggregateRating, availability, brand), BreadcrumbList e-commerce, Organization et FAQPage, configur\u00e9 dans RankMath ou via l\'addon Yoast WooCommerce SEO. Guide d\'int\u00e9gration avec captures pour votre \u00e9quipe.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9\u00e9criture des descriptions produits, cr\u00e9ation de guides d\'achat et FAQ par cat\u00e9gorie, optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans WooCommerce via l\'\u00e9diteur Gutenberg ou par acc\u00e8s FTP.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs produits, blogs sp\u00e9cialis\u00e9s et m\u00e9dias de votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par fiche produit et par cat\u00e9gorie, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique WooCommerce (base de donn\u00e9es, plugins, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique WooCommerce dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel est le meilleur produit pour [besoin] ?", le LLM compile des sources web pour formuler sa recommandation. Si vos fiches produits WooCommerce ne contiennent pas de donn\u00e9es factuelles structur\u00e9es (prix, sp\u00e9cifications, avis), votre catalogue est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site WooCommerce ?", le LLM ne cite aucune agence directement. Il fournit une liste de crit\u00e8res de s\u00e9lection : exp\u00e9rience e-commerce, double comp\u00e9tence WordPress et WooCommerce, connaissance des probl\u00e9matiques catalogue (variantes, performance base de donn\u00e9es, schema Product). Il renvoie vers des annuaires comme Sortlist et des classements comme L\'Essentiel de l\'Eco. SeoMix est mentionn\u00e9 pour son expertise WordPress globale. L\'agence qui d\u00e9montre une m\u00e9thodologie sp\u00e9cifique WooCommerce avec des r\u00e9sultats chiffr\u00e9s a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site WooCommerce", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant l\'architecture des URLs (supprimer /product/ et /product-category/), l\'optimisation des fiches produits (descriptions originales, pas de copie fournisseur), la performance (cache, base de donn\u00e9es), les plugins SEO (Yoast WooCommerce SEO, RankMath) et le maillage interne (produits similaires, guides d\'achat). Les sources privil\u00e9gi\u00e9es sont WPBeginner, RankMath Blog et Premiere Page.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "WooCommerce vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. WooCommerce est pr\u00e9sent\u00e9 comme plus flexible (contr\u00f4le total URL, meta, schema.org) mais plus complexe et d\u00e9pendant de la qualit\u00e9 de l\'h\u00e9bergement. Shopify est pr\u00e9sent\u00e9 comme plus simple avec une structure d\'URL fig\u00e9e qui pr\u00e9vient les erreurs. Les sites qui publient des comparatifs factuels avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO courants sur WooCommerce", le LLM fournit une liste de 7 \u00e0 10 probl\u00e8mes sp\u00e9cifiques : contenu dupliqu\u00e9 par les variantes, lenteur de la base de donn\u00e9es wp_postmeta, filtres \u00e0 facettes indexables, descriptions copi\u00e9es du fournisseur, absence de schema Product. Les contenus structurant probl\u00e8me, impact et solution en tableau sont les plus susceptibles d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour une boutique WooCommerce, les types schema.org recommand\u00e9s sont : <code>Product</code> (type principal sur les fiches, avec <code>offers</code>, <code>aggregateRating</code>, <code>availability</code> et <code>brand</code>), <code>BreadcrumbList</code> (navigation e-commerce), <code>Organization</code> (identit\u00e9 marchande), <code>WebSite</code> (SearchAction pour la recherche interne), <code>FAQPage</code> (FAQ cat\u00e9gories et guides). RankMath g\u00e8re nativement le schema Product. L\'addon Yoast WooCommerce SEO (79 \u20ac/an) ajoute le balisage Product avec champs dynamiques (prix, stock). Ce balisage permet \u00e0 Google d\'afficher des rich snippets produit et aux LLM d\'extraire prix, avis et disponibilit\u00e9 pour leurs recommandations.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique WooCommerce par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produits, guides d\'achat, comparatifs), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (avis clients v\u00e9rifi\u00e9s, backlinks depuis des comparateurs et m\u00e9dias sp\u00e9cialis\u00e9s), et la Densit\u00e9 Factuelle (richesse du balisage schema Product, donn\u00e9es prix/stock/avis et entit\u00e9s produits structur\u00e9es).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour WooCommerce',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une boutique WooCommerce ?',
        answer:
          'Le budget SEO pour une boutique WooCommerce d\u00e9pend du nombre de produits, de la complexit\u00e9 du catalogue (variantes, attributs) et du niveau de concurrence sur votre march\u00e9. Chez Rankwell, les accompagnements SEO WooCommerce d\u00e9marrent \u00e0 2 000 EUR/mois pour une boutique de moins de 500 produits, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les catalogues de plusieurs milliers de r\u00e9f\u00e9rences n\u00e9cessitant un travail approfondi sur la base de donn\u00e9es, les fiches produits et la strat\u00e9gie de contenu.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur WooCommerce ?',
        answer:
          'Les corrections techniques (nettoyage de la base de donn\u00e9es, optimisation du cache, redirections) produisent des effets mesurables d\u00e8s le premier mois sur la vitesse de chargement. Le positionnement des fiches produits sur des mots-cl\u00e9s transactionnels n\u00e9cessite 3 \u00e0 6 mois de travail soutenu. La r\u00e9\u00e9criture des descriptions et la cr\u00e9ation de guides d\'achat montrent des r\u00e9sultats \u00e0 partir du 4e mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre catalogue.',
      },
      {
        question: 'Faut-il utiliser RankMath ou Yoast WooCommerce SEO pour le balisage produit ?',
        answer:
          'RankMath g\u00e8re le schema Product nativement et gratuitement, avec les champs offers, aggregateRating et availability. Yoast n\u00e9cessite l\'addon WooCommerce SEO (79 EUR/an) pour le m\u00eame niveau de balisage produit. RankMath offre aussi l\'analyse multi-mots-cl\u00e9s et les redirections int\u00e9gr\u00e9es en version gratuite. Rankwell travaille avec les deux plugins et recommande celui qui s\'int\u00e8gre le mieux \u00e0 votre configuration existante.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de ma boutique WooCommerce ?',
        answer:
          'La lenteur d\'une boutique WooCommerce provient souvent de trois causes : la base de donn\u00e9es wp_postmeta surcharg\u00e9e (au-del\u00e0 de 4 millions de lignes sur les gros catalogues), les images produits non compress\u00e9es et les plugins trop nombreux. Rankwell commence par un audit de performance qui mesure l\'impact de chaque composant, nettoie la base de donn\u00e9es (transients, sessions, meta orphelines), active le HPOS pour les commandes et configure un cache sp\u00e9cifique WooCommerce (WP Rocket avec exclusions panier et checkout).',
      },
      {
        question: 'Comment faire citer mes produits WooCommerce par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA recommandent vos produits, trois conditions sont n\u00e9cessaires : des fiches produits contenant des donn\u00e9es factuelles v\u00e9rifiables (sp\u00e9cifications techniques, prix, comparaisons chiffr\u00e9es), un balisage schema Product complet (offers, aggregateRating, availability, brand) et des avis clients v\u00e9rifi\u00e9s publi\u00e9s sur votre site et sur des plateformes tierces. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les fiches \u00e0 optimiser en priorit\u00e9.',
      },
      {
        question: 'WooCommerce est-il le meilleur choix pour le SEO e-commerce en 2026 ?',
        answer:
          'WooCommerce reste la solution e-commerce la plus flexible pour le SEO gr\u00e2ce au contr\u00f4le total sur les URLs, le HTML, le balisage schema.org et les redirections. Mais cette flexibilit\u00e9 a un co\u00fbt : elle exige des comp\u00e9tences techniques plus \u00e9lev\u00e9es que Shopify, et la performance se d\u00e9grade sans optimisation proactive de la base de donn\u00e9es. Pour les catalogues de moins de 1 000 produits, WooCommerce et Shopify offrent des r\u00e9sultats SEO comparables. Au-del\u00e0, Rankwell recommande WooCommerce pour sa capacit\u00e9 de personnalisation avanc\u00e9e.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique WooCommerce ?',
        answer:
          'Rankwell combine l\'expertise technique WordPress (audit de plugins, base de donn\u00e9es, performance) avec la connaissance des probl\u00e9matiques e-commerce sp\u00e9cifiques \u00e0 WooCommerce (variantes produit, filtres \u00e0 facettes, schema Product, descriptions catalogue) et la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes traite chaque couche du probl\u00e8me : infrastructure WordPress, catalogue WooCommerce, contenu produit et visibilit\u00e9 dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique WooCommerce ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique WooCommerce. Nos consultants SEO & GEO analysent votre catalogue, votre base de donn\u00e9es, vos fiches produits et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Artisan', href: '/agence-geo-seo/secteur/artisan' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      ],
      projets: [
        { label: 'SEO Site e-commerce', href: '/agence-geo-seo/projet/site-ecommerce' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
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
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
      { label: 'OpenCart', href: '/agence-geo-seo/cms/opencart' },
    ],
  },
};

export default data;
