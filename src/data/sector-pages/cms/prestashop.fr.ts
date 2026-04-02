/**
 * DATA : Page CMS PrestaShop (FR)
 * Route : /agence-geo-seo/cms/prestashop
 *
 * CMS e-commerce open source francais, leader en France et en Espagne.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'prestashop',
    title: 'Agence SEO & GEO PrestaShop - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique PrestaShop. Modules SEO, URLs, filtres \u00e0 facettes, performance, schema.org Product : m\u00e9thodologie compl\u00e8te pour PrestaShop.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'PrestaShop' },
    ],
    title: 'SEO & GEO PrestaShop : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'URLs avec IDs num\u00e9riques, filtres \u00e0 facettes non g\u00e9r\u00e9s nativement, performances d\u00e9grad\u00e9es par la surcharge de modules : le r\u00e9f\u00e9rencement d\'une boutique PrestaShop exige une expertise technique sp\u00e9cifique. Nos experts combinent SEO technique et GEO pour positionner votre e-commerce sur Google et le faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO PrestaShop',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur PrestaShop (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur PrestaShop',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">PrestaShop \u00e9quipe environ 300 000 boutiques dans plus de 190 pays</strong>, dont 39 % en France. Le CMS offre un contr\u00f4le total sur les URLs, les meta par produit et l\'injection de <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a> dans les templates Smarty. Les modules SEO Expert et Pretty URLs gèrent la r\u00e9\u00e9criture d\'URL et les canonicals, ce qui en fait un CMS flexible pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> e-commerce.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">70 % des boutiques PrestaShop \u00e9chouent aux Core Web Vitals sur mobile</strong>. La configuration par d\u00e9faut g\u00e9n\u00e8re des URLs avec IDs num\u00e9riques, aucun sitemap XML ni schema.org Product natif. Les filtres \u00e0 facettes cr\u00e9ent des milliers de pages indexables qui diluent le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a>, et l\'absence de blog int\u00e9gr\u00e9 freine le contenu \u00e9ditorial.',
    geoAngle:
      'Selon Rankwell, les boutiques PrestaShop souffrent d\'un d\u00e9ficit de citabilit\u00e9 IA parce que le schema.org Product n\'est pas activ\u00e9 par d\u00e9faut. Configurer le module SEO Expert pour injecter des donn\u00e9es structur\u00e9es Product, AggregateRating et FAQ sur chaque fiche est le premier levier GEO mesurable sur PrestaShop.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur PrestaShop et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des boutiques PrestaShop non optimis\u00e9es. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 des moteurs IA \u00e0 citer vos produits. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre boutique et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'URLs avec IDs num\u00e9riques (/product.php?id_product=847)',
        'URL non lisibles, perte de signal s\u00e9mantique pour Google et les LLM',
        'Module Pretty URLs : suppression des IDs, r\u00e9\u00e9criture en /nom-produit/, redirections 301 automatiques',
      ],
      [
        'Filtres \u00e0 facettes indexables (couleur, taille, prix)',
        'Milliers de pages dupliquées index\u00e9es, dilution du crawl budget',
        'Noindex/nofollow sur les combinaisons de filtres, canonical vers la cat\u00e9gorie parent, module Canonical URL',
      ],
      [
        'Canonicals incoh\u00e9rents sur les combinaisons produit',
        'Contenu dupliqu\u00e9 entre variantes, cannibalisation entre URLs de combinaisons',
        'Configuration du canonical vers l\'URL produit par d\u00e9faut (sans ID combinaison), module SEO Expert',
      ],
      [
        'Performances d\u00e9grad\u00e9es (LCP > 4s sur mobile)',
        'Perte de positions mobiles, taux de rebond \u00e9lev\u00e9',
        'Activation du CCC natif PrestaShop (Combine, Compress, Cache), CDN, compression images WebP, h\u00e9bergement optimis\u00e9 PHP 8.2+',
      ],
      [
        'Absence de sitemap XML natif',
        'Pages orphelines non d\u00e9couvertes par Google',
        'Module Google Sitemap, exclusion des pages filtr\u00e9es et des combinaisons, soumission via Google Search Console',
      ],
      [
        'Balisage schema.org Product absent par d\u00e9faut',
        'Pas de rich snippets (prix, avis, stock), invisibilit\u00e9 pour les LLM',
        'Injection de schema.org Product, AggregateRating et Offer dans les templates Smarty ou via le module SEO Expert',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour PrestaShop',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de PrestaShop.',
    steps: [
      {
        title: 'Audit technique PrestaShop',
        subtitle: 'Analyse compl\u00e8te de l\'installation PrestaShop : version du CMS, modules actifs, configuration serveur PHP, version MySQL et Core Web Vitals.',
        items: [
          'Inventaire des modules install\u00e9s (actifs, inactifs, obsol\u00e8tes, en conflit)',
          'Mesure des Core Web Vitals (LCP, INP, CLS) sur les pages produit, cat\u00e9gorie et accueil',
          'Analyse du crawl budget : pages index\u00e9es vs pages parasites (facettes, combinaisons, pagination)',
          'V\u00e9rification de la configuration SEO : URLs simplifi\u00e9es, canonicals, robots.txt, sitemap',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique PrestaShop dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et \u00e0 votre marque sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents e-commerce directs',
          'Identification des fiches produit cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des modules',
        subtitle: 'Suppression des modules redondants ou obsol\u00e8tes qui alourdissent la boutique et cr\u00e9ent des conflits techniques.',
        items: [
          'D\u00e9sactivation des modules non utilis\u00e9s qui injectent du JS/CSS en front-office',
          'Remplacement des modules lourds par des alternatives l\u00e9g\u00e8res ou natives PrestaShop 8',
          'Audit des hooks : suppression des appels de modules sur les pages critiques (produit, cat\u00e9gorie)',
          'Nettoyage de la base de donn\u00e9es MySQL (logs, paniers abandonn\u00e9s, sessions expir\u00e9es)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via le CCC natif de PrestaShop, la compression des images et la configuration serveur.',
        items: [
          'Activation du CCC PrestaShop (Combine, Compress, Cache CSS/JS)',
          'Conversion des images catalogue en WebP avec lazy loading',
          'Mise en place d\'un CDN (Cloudflare, KeyCDN) pour les assets statiques',
          'Optimisation serveur : PHP 8.2+, OPcache, Redis ou Memcached pour le cache objet',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage des modules SEO Expert et Pretty URLs pour maximiser le contr\u00f4le sur les URLs, canonicals et donn\u00e9es structur\u00e9es.',
        items: [
          'Pretty URLs activ\u00e9 : suppression des IDs, r\u00e9\u00e9criture en /nom-produit/ et /nom-categorie/',
          'Canonicals configur\u00e9s par produit, combinaison, cat\u00e9gorie et page CMS',
          'Noindex sur les pages de filtres \u00e0 facettes, pagination et recherche interne',
          'Balisage schema.org : Product, AggregateRating, Offer, BreadcrumbList, Organization',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus optimis\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, adapt\u00e9s aux contraintes de PrestaShop.',
        items: [
          'Descriptions produit enrichies avec donn\u00e9es factuelles (mat\u00e9riaux, dimensions, certifications)',
          'Pages cat\u00e9gorie avec texte \u00e9ditorial structur\u00e9 (H2/H3, FAQ, tableaux comparatifs)',
          'Blog e-commerce via module d\u00e9di\u00e9 (guides d\'achat, comparatifs, conseils d\'utilisation)',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM sur chaque fiche produit',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites e-commerce, comparateurs et m\u00e9dias sp\u00e9cialis\u00e9s.',
        items: [
          'Backlinks depuis des comparateurs de prix, blogs e-commerce et magazines sp\u00e9cialis\u00e9s',
          'Inscriptions sur les annuaires e-commerce et places de march\u00e9 sectorielles',
          'Mentions de marque dans des articles comparatifs et guides d\'achat en ligne',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA de la boutique',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page produit/cat\u00e9gorie',
          'Trafic organique segment\u00e9 par type de page (produit, cat\u00e9gorie, blog, CMS)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA sur les requ\u00eates produit',
          '\u00c9volution des Core Web Vitals et sant\u00e9 technique PrestaShop (modules, PHP, base de donn\u00e9es)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique, votre agence e-commerce ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique PrestaShop',
        description: 'Diagnostic complet de votre installation PrestaShop : inventaire des modules (actifs, obsol\u00e8tes, en conflit), Core Web Vitals par type de page, crawl budget, canonicals, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre boutique et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates produit cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org PrestaShop',
        description: 'Balisage Product, AggregateRating, Offer, BreadcrumbList et Organization inject\u00e9 dans les templates Smarty ou configur\u00e9 via le module SEO Expert. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pour votre \u00e9quipe technique.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produit, pages cat\u00e9gorie, guides d\'achat et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans le back-office PrestaShop ou par acc\u00e8s FTP aux templates Smarty.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs de prix, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur produit. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page produit et cat\u00e9gorie, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique PrestaShop (modules, Core Web Vitals, base de donn\u00e9es) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique PrestaShop dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel site pour acheter {votre produit} ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit PrestaShop ne contiennent pas de donn\u00e9es structur\u00e9es et de passages factuels exploitables, votre boutique reste invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence SEO PrestaShop</h4><p>Sur "quelle agence SEO pour un site PrestaShop ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 6 crit\u00e8res de s\u00e9lection (exp\u00e9rience PrestaShop, ma\u00eetrise des modules SEO Expert et Pretty URLs, connaissance des filtres \u00e0 facettes) et renvoie vers des annuaires. L\'agence qui publie une m\u00e9thodologie structur\u00e9e et des r\u00e9sultats chiffr\u00e9s sur des boutiques PrestaShop a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site PrestaShop", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant les URLs simplifi\u00e9es, les canonicals, le CCC natif, le sitemap XML via module et le balisage schema.org. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont la documentation officielle PrestaShop et les blogs sp\u00e9cialis\u00e9s.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "PrestaShop vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. PrestaShop est pr\u00e9sent\u00e9 comme plus flexible (acc\u00e8s au code, URLs personnalisables) mais plus technique et sans blog natif. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO courants sur PrestaShop", le LLM fournit une liste de 7 \u00e0 9 probl\u00e8mes sp\u00e9cifiques : URLs avec IDs, facettes indexables, canonicals incoh\u00e9rents, performances m\u00e9diocres, absence de blog natif. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour une boutique PrestaShop, les types schema.org recommand\u00e9s sont : <code>Product</code> avec <code>Offer</code> (prix, disponibilit\u00e9, devise) et <code>AggregateRating</code> (note, nombre d\'avis) sur chaque fiche produit, <code>BreadcrumbList</code> (navigation), <code>Organization</code> (marque), <code>FAQPage</code> (pages de FAQ et guides d\'achat), et <code>ItemList</code> (pages cat\u00e9gorie). Le module SEO Expert g\u00e8re une partie de ces types. Pour les types manquants, l\'injection se fait dans les templates Smarty (.tpl). Ce balisage permet \u00e0 Google d\'afficher des rich snippets (prix, \u00e9toiles, stock) et aux LLM d\'extraire des donn\u00e9es produit structur\u00e9es pour leurs r\u00e9ponses.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique PrestaShop par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit et \u00e9ditoriaux), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks depuis comparateurs, mentions de marque), et la Densit\u00e9 Factuelle (richesse du balisage schema.org Product, donn\u00e9es structur\u00e9es et caract\u00e9ristiques techniques sur les fiches produit).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour PrestaShop',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une boutique PrestaShop ?',
        answer:
          'Le budget SEO pour une boutique PrestaShop d\u00e9pend du nombre de produits, de la complexit\u00e9 du catalogue (filtres, combinaisons, multilingue) et du niveau de concurrence. Chez Rankwell, les accompagnements SEO PrestaShop d\u00e9marrent \u00e0 1 500 EUR/mois pour une boutique de moins de 500 r\u00e9f\u00e9rences, et atteignent 3 000 \u00e0 7 000 EUR/mois pour les catalogues de plusieurs milliers de produits avec filtres \u00e0 facettes et gestion multiboutique. Ce budget inclut l\'audit technique, la configuration des modules SEO, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur PrestaShop ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (URLs simplifi\u00e9es, canonicals, suppression des pages de filtres index\u00e9es). Le positionnement sur des mots-cl\u00e9s produit concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les optimisations de performance PrestaShop (CCC, CDN, PHP 8.2) produisent des effets mesurables d\u00e8s le premier mois sur les Core Web Vitals. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre boutique.',
      },
      {
        question: 'Comment g\u00e9rer les filtres \u00e0 facettes sur PrestaShop sans d\u00e9truire le SEO ?',
        answer:
          'Les filtres \u00e0 facettes (couleur, taille, prix, marque) cr\u00e9ent des milliers de combinaisons d\'URLs indexables qui diluent le crawl budget et g\u00e9n\u00e8rent du contenu dupliqu\u00e9. Rankwell configure un syst\u00e8me de gestion des facettes en trois couches : canonical vers la cat\u00e9gorie parente, noindex/nofollow sur les combinaisons non strat\u00e9giques, et indexation s\u00e9lective des filtres \u00e0 fort volume de recherche (par exemple "canap\u00e9 cuir noir"). Le module Canonical URL et la configuration du robots.txt compl\u00e8tent le dispositif.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de ma boutique PrestaShop ?',
        answer:
          'La lenteur d\'une boutique PrestaShop provient g\u00e9n\u00e9ralement de quatre causes : trop de modules actifs qui injectent du JavaScript en front-office, images catalogue non compress\u00e9es, h\u00e9bergement mutualis\u00e9 sous-dimensionn\u00e9, et version PHP obsol\u00e8te. Rankwell commence par un audit de performance qui identifie les modules responsables de la lenteur, active le CCC natif de PrestaShop (Combine, Compress, Cache), convertit les images en WebP, configure un CDN et recommande un h\u00e9bergement PHP 8.2+ avec OPcache.',
      },
      {
        question: 'Comment faire citer ma boutique PrestaShop par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre boutique PrestaShop, trois conditions sont n\u00e9cessaires : des fiches produit enrichies en donn\u00e9es factuelles v\u00e9rifiables (mat\u00e9riaux, dimensions, certifications, comparatifs), un balisage schema.org Product complet (prix, avis, stock via le module SEO Expert), et des mentions de votre marque sur des sources tierces (comparateurs de prix, blogs sp\u00e9cialis\u00e9s, presse e-commerce). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre boutique.',
      },
      {
        question: 'PrestaShop est-il toujours un bon CMS pour le SEO e-commerce en 2026 ?',
        answer:
          'PrestaShop reste un choix pertinent pour le SEO e-commerce en 2026, gr\u00e2ce \u00e0 son contr\u00f4le total sur les URLs, les meta-tags par produit et l\'acc\u00e8s direct au code source des templates Smarty. Cependant, sa configuration par d\u00e9faut n\u00e9cessite un travail technique important (Pretty URLs, canonicals, schema.org). Des alternatives comme Shopify offrent de meilleures performances natives mais avec moins de flexibilit\u00e9 SEO (URLs non modifiables). Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et aux limites de chaque plateforme e-commerce.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique PrestaShop ?',
        answer:
          'Rankwell combine l\'expertise SEO technique PrestaShop (configuration des modules SEO Expert et Pretty URLs, gestion des filtres \u00e0 facettes, injection de schema.org Product dans les templates Smarty) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de PrestaShop : URLs avec IDs, facettes non g\u00e9r\u00e9es, absence de blog natif, performances d\u00e9grad\u00e9es. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre boutique dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique PrestaShop ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique PrestaShop. Nos consultants SEO & GEO analysent vos modules, vos URLs, vos filtres \u00e0 facettes et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
        { label: 'SEO Caviste', href: '/agence-geo-seo/secteur/caviste' },
        { label: 'SEO Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      ],
      projets: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'OpenCart', href: '/agence-geo-seo/cms/opencart' },
      { label: 'BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
    ],
  },
};

export default data;
