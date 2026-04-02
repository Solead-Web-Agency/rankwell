/**
 * DATA : Page CMS OpenCart (FR)
 * Route : /agence-geo-seo/cms/opencart
 *
 * CMS e-commerce open source PHP/MySQL. SEO basique natif,
 * extensions necessaires pour canonical, sitemap, schema.org.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'opencart',
    title: 'Agence SEO & GEO OpenCart : Référencement - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique OpenCart. URLs dupliqu\u00e9es, canonical, schema.org Product, extensions SEO : m\u00e9thodologie compl\u00e8te pour OpenCart.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'OpenCart' },
    ],
    title: 'SEO & GEO OpenCart : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'URLs dupliqu\u00e9es par les chemins de cat\u00e9gories, absence de canonical natif, sitemap inexistant sans extension : le r\u00e9f\u00e9rencement d\'une boutique OpenCart exige une expertise technique sp\u00e9cifique. Nos experts combinent SEO technique et GEO pour positionner votre boutique sur Google et rendre votre marque citable par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO OpenCart',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur OpenCart (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur OpenCart',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">OpenCart \u00e9quipe plus de 400 000 boutiques actives dans le monde</strong>. Son architecture MVC en PHP natif offre un acc\u00e8s direct aux controllers, templates Twig et .htaccess pour un contr\u00f4le complet sur les r\u00e8gles de r\u00e9\u00e9criture d\'URL et le balisage HTML. Le module SEO URL int\u00e9gr\u00e9 et le faible poids du core (moins de 30 Mo) garantissent un temps de r\u00e9ponse serveur rapide, un atout pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Le marketplace OpenCart liste environ 13 000 extensions contre 40 000+ pour WooCommerce</strong>, et aucune n\'est pr\u00e9install\u00e9e pour le SEO. Le CMS ne g\u00e9n\u00e8re ni canonical, ni sitemap XML, ni redirections 301, ni schema.org Product sans extension tierce. Cette lacune provoque l\'indexation de dizaines de variantes d\'URL par produit, cr\u00e9ant un risque de <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">cannibalisation SEO</a> d\u00e8s le d\u00e9ploiement.',
    geoAngle:
      'Selon Rankwell, les boutiques OpenCart souffrent d\'un d\u00e9ficit de citabilit\u00e9 IA li\u00e9 \u00e0 l\'absence de schema.org Product natif et au manque de passages factuels structur\u00e9s sur les fiches produits. Les LLM comparant des produits e-commerce privil\u00e9gient les sources dont les donn\u00e9es techniques (prix, disponibilit\u00e9, sp\u00e9cifications) sont encapsul\u00e9es dans du JSON-LD.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur OpenCart et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la grande majorit\u00e9 des boutiques OpenCart non optimis\u00e9es. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 des moteurs IA \u00e0 extraire vos fiches produits. Un audit technique cibl\u00e9 identifie ceux qui s\'appliquent \u00e0 votre boutique et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'URLs dupliqu\u00e9es (produit accessible via plusieurs chemins de cat\u00e9gories)',
        'Dilution du crawl budget, cannibalisation entre variantes d\'URL',
        'Activation du module SEO URL, r\u00e9\u00e9criture canonique unique par produit, directives canonical via extension SEO Module Pro',
      ],
      [
        'Absence de balises canonical natives',
        'Google indexe plusieurs versions de la m\u00eame page, perte de signal PageRank',
        'Installation d\'une extension canonical (SEO Pack ou SEO Module Pro), v\u00e9rification syst\u00e9matique via Screaming Frog',
      ],
      [
        'Pas de sitemap XML natif',
        'Googlebot ne d\u00e9couvre pas toutes les pages, indexation incompl\u00e8te du catalogue',
        'Extension XML Sitemap Generator, soumission dans Google Search Console, exclusion des pages filtr\u00e9es et de la pagination',
      ],
      [
        'Absence de schema.org Product sur les fiches',
        'Pas de rich snippets produit (prix, disponibilit\u00e9, avis), invisibilit\u00e9 pour les LLM e-commerce',
        'Injection JSON-LD Product via extension Google Rich Snippets ou modification du template product.twig',
      ],
      [
        'Meta-descriptions identiques ou absentes sur les cat\u00e9gories',
        'CTR faible dans les SERP, signal de contenu pauvre pour Google',
        'R\u00e9daction manuelle des meta par cat\u00e9gorie dans l\'admin OpenCart, audit des balises via GSC',
      ],
      [
        'Pas de gestion native des redirections 301',
        'Erreurs 404 lors des suppressions de produits, perte de jus de liens',
        'Gestion des redirections via .htaccess ou extension d\u00e9di\u00e9e, monitoring des 404 dans GSC',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour OpenCart',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques d\'OpenCart.',
    steps: [
      {
        title: 'Audit technique OpenCart',
        subtitle: 'Analyse compl\u00e8te de l\'installation OpenCart : version du core (3.x ou 4.x), extensions actives, configuration PHP, performance serveur et Core Web Vitals.',
        items: [
          'Inventaire des extensions install\u00e9es (actives, inactives, obsol\u00e8tes)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : d\u00e9tection des URLs dupliqu\u00e9es par les chemins de cat\u00e9gories et les filtres',
          'V\u00e9rification de la s\u00e9curit\u00e9 : version PHP, certificat SSL, en-t\u00eates HTTP de s\u00e9curit\u00e9',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique OpenCart dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et votre secteur sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (y compris sur d\'autres CMS)',
          'Identification des fiches produits cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et correction des URLs',
        subtitle: '\u00c9limination des URLs dupliqu\u00e9es et mise en place d\'une structure d\'URL canonique propre sur l\'ensemble du catalogue.',
        items: [
          'Configuration du module SEO URL pour des routes uniques par produit',
          'D\u00e9sactivation ou suppression des extensions inutilis\u00e9es et obsol\u00e8tes',
          'Correction des templates Twig qui g\u00e9n\u00e8rent des balises Hn incorrectes',
          'Mise en place des balises canonical sur chaque type de page (produit, cat\u00e9gorie, marque)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement en tirant parti de la l\u00e9g\u00e8ret\u00e9 native du core OpenCart.',
        items: [
          'Configuration du cache OPcache PHP et du cache OpenCart natif',
          'Compression des images produits en WebP avec lazy loading',
          'Mise en place d\'un CDN (Cloudflare, BunnyCDN) pour les assets statiques',
          'Minification CSS/JS et chargement diff\u00e9r\u00e9 des scripts non critiques',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Installation et param\u00e9trage des extensions SEO indispensables pour combler les lacunes natives d\'OpenCart.',
        items: [
          'Extension SEO Pack ou SEO Module Pro : canonical, meta, redirections 301',
          'G\u00e9n\u00e9ration du sitemap XML avec exclusion des pages filtr\u00e9es et paginations',
          'Balisage schema.org Product, BreadcrumbList, Organization via JSON-LD',
          'Configuration des meta-descriptions uniques par cat\u00e9gorie et par page CMS',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Enrichissement des fiches produits et des pages cat\u00e9gories pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA.',
        items: [
          'R\u00e9daction de descriptions produits uniques avec donn\u00e9es techniques structur\u00e9es',
          'Cr\u00e9ation de guides d\'achat et de comparatifs li\u00e9s aux cat\u00e9gories produits',
          'FAQ th\u00e9matiques par cat\u00e9gorie, inspir\u00e9es des People Also Ask de Google',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque dans les guides d\'achat.',
        items: [
          'Backlinks depuis des comparateurs de prix, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique dans votre secteur',
          'Mentions de marque et de produits dans des guides d\'achat et avis ind\u00e9pendants',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA de vos fiches produits',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par fiche produit',
          'Trafic organique segment\u00e9 par type de page (produit, cat\u00e9gorie, guide)',
          'Score GEO : visibilit\u00e9 de vos produits dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et de la sant\u00e9 technique OpenCart',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique, votre webmaster OpenCart ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique OpenCart',
        description: 'Diagnostic complet de votre installation OpenCart : inventaire des extensions (actives, obsol\u00e8tes, en conflit), Core Web Vitals, crawl budget, d\u00e9tection des URLs dupliqu\u00e9es et liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre boutique et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates produits. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org OpenCart',
        description: 'Balisage JSON-LD Product, BreadcrumbList, Organization et AggregateRating configur\u00e9 via l\'extension Google Rich Snippets ou par injection directe dans les templates Twig. Guide d\'int\u00e9gration pas \u00e0 pas.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produits, descriptions de cat\u00e9gories et guides d\'achat optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans le back-office OpenCart ou par acc\u00e8s FTP sur les templates Twig.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs de prix, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par fiche produit et cat\u00e9gorie, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique OpenCart (extensions, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique OpenCart dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel produit choisir pour [votre cat\u00e9gorie] ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produits OpenCart ne contiennent ni balisage Product, ni donn\u00e9es techniques structur\u00e9es, elles sont invisibles dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site OpenCart ?", le LLM ne cite aucune agence par son nom. Il pr\u00e9cise qu\'OpenCart est un CMS e-commerce de niche avec une communaut\u00e9 plus restreinte que PrestaShop ou WooCommerce, et recommande de chercher une agence familiarise avec l\'architecture MVC (controller/model/view) du CMS. Il renvoie vers le marketplace OpenCart et les forums communautaires. L\'agence qui publie une m\u00e9thodologie document\u00e9e et des cas clients OpenCart a un fort potentiel de citation.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site OpenCart", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant l\'activation des SEO URLs, l\'installation d\'extensions canonical et sitemap, la compression des images, et le balisage schema.org. Les sources privil\u00e9gi\u00e9es sont la documentation officielle OpenCart et quelques blogs techniques anglophones. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "OpenCart vs PrestaShop pour le SEO", le LLM produit un comparatif en 5 \u00e0 7 crit\u00e8res. OpenCart est positionn\u00e9 comme plus l\u00e9ger mais inf\u00e9rieur en SEO natif. Les sites qui publient des comparatifs chiffr\u00e9s avec des crit\u00e8res mesurables (nombre d\'extensions, fonctions natives, performance) sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO courants sur OpenCart", le LLM liste les URLs dupliqu\u00e9es, l\'absence de canonical, le sitemap manquant et les meta-descriptions identiques. Les contenus qui d\u00e9taillent chaque probl\u00e8me avec sa solution technique ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour une boutique OpenCart, les types schema.org recommand\u00e9s sont : <code>Product</code> (fiches produits avec prix, disponibilit\u00e9, SKU), <code>AggregateRating</code> (avis clients), <code>BreadcrumbList</code> (navigation par cat\u00e9gories), <code>Organization</code> (identit\u00e9 de la boutique), <code>WebSite</code> avec <code>SearchAction</code> (recherche interne). OpenCart ne g\u00e9n\u00e8re aucun de ces types nativement. L\'injection se fait via l\'extension Google Rich Snippets ou par modification directe des templates Twig (catalog/view/theme/*/template/product/product.twig).',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique OpenCart par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (profondeur des descriptions produits et des contenus \u00e9ditoriaux), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (backlinks, mentions de marque, avis clients externes), et la Densit\u00e9 Factuelle (richesse du balisage schema.org Product, donn\u00e9es techniques structur\u00e9es et sp\u00e9cifications v\u00e9rifiables).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour OpenCart',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une boutique OpenCart ?',
        answer:
          'Le budget SEO pour une boutique OpenCart d\u00e9pend du nombre de produits, de la complexit\u00e9 technique et du niveau de concurrence dans votre secteur. Chez Rankwell, les accompagnements SEO OpenCart d\u00e9marrent \u00e0 1 200 EUR/mois pour un catalogue de moins de 500 r\u00e9f\u00e9rences, et atteignent 2 500 \u00e0 5 000 EUR/mois pour les catalogues volumineux avec plusieurs langues. Ce budget inclut la correction des URLs dupliqu\u00e9es, l\'installation des extensions SEO manquantes, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur OpenCart ?',
        answer:
          'Les corrections techniques (canonical, sitemap, redirections 301) produisent des effets mesurables en 1 \u00e0 2 mois, car elles r\u00e9solvent des probl\u00e8mes d\'indexation qui bloquent le crawl. Le positionnement sur des mots-cl\u00e9s produits concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les boutiques OpenCart partent souvent d\'une base technique d\u00e9ficitaire (URLs dupliqu\u00e9es, pas de schema.org), ce qui signifie que les gains initiaux sont plus rapides une fois les fondations corrig\u00e9es. Rankwell fournit un calendrier pr\u00e9visionnel apr\u00e8s l\'audit.',
      },
      {
        question: 'SEO Module Pro ou SEO Pack : quelle extension SEO choisir pour OpenCart ?',
        answer:
          'SEO Module Pro centralise la gestion des canonical, des meta et des redirections 301 dans une interface unique. SEO Pack va plus loin avec le rewriting d\'URLs avanc\u00e9, la g\u00e9n\u00e9ration de sitemap et les rich snippets. Le choix d\u00e9pend de votre version d\'OpenCart (3.x ou 4.x) et de vos besoins. Rankwell teste les deux extensions en environnement de staging avant installation en production, pour \u00e9viter les conflits avec vos modules existants.',
      },
      {
        question: 'Comment r\u00e9duire les probl\u00e8mes de performance de ma boutique OpenCart ?',
        answer:
          'OpenCart est nativement l\u00e9ger (core de moins de 30 Mo), mais la performance se d\u00e9grade avec l\'accumulation d\'extensions, d\'images non compress\u00e9es et de requ\u00eates SQL non optimis\u00e9es. Rankwell identifie les extensions qui ralentissent le rendu, active le cache OPcache PHP, convertit les images en WebP, met en place un CDN et optimise les requ\u00eates de base de donn\u00e9es. L\'objectif est un LCP inf\u00e9rieur \u00e0 2,5 secondes sur mobile.',
      },
      {
        question: 'Comment faire citer ma boutique OpenCart par ChatGPT et Perplexity ?',
        answer:
          'Les moteurs IA citent en priorit\u00e9 les boutiques dont les fiches produits contiennent du balisage schema.org Product avec prix, disponibilit\u00e9 et avis, des sp\u00e9cifications techniques v\u00e9rifiables et des guides d\'achat structur\u00e9s. OpenCart ne produit aucun de ces signaux nativement. Le Score GEO de Rankwell mesure trois dimensions (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle) et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de vos produits par les LLM.',
      },
      {
        question: 'OpenCart est-il un bon choix pour le SEO e-commerce en 2026 ?',
        answer:
          'OpenCart convient aux petits et moyens catalogues (moins de 5 000 produits) qui recherchent un CMS l\u00e9ger et auto-h\u00e9berg\u00e9. Sa performance serveur native est un atout, mais ses lacunes en SEO natif (pas de canonical, pas de sitemap, pas de schema.org) n\u00e9cessitent un investissement en extensions et en configuration. Face \u00e0 PrestaShop (SEO natif plus complet) ou WooCommerce (plus d\'extensions gratuites), OpenCart reste comp\u00e9titif si l\'\u00e9quipe technique peut maintenir les extensions SEO. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et limites sp\u00e9cifiques d\'OpenCart.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique OpenCart ?',
        answer:
          'Rankwell combine l\'expertise SEO technique OpenCart (correction des URLs dupliqu\u00e9es, installation et configuration des extensions SEO, balisage schema.org Product, optimisation des templates Twig) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques d\'OpenCart : absence de canonical natif, sitemap manquant, d\u00e9pendance aux extensions. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos fiches produits dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique OpenCart ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique OpenCart. Nos consultants SEO & GEO analysent vos extensions, vos URLs, votre balisage schema.org et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Artisan', href: '/agence-geo-seo/secteur/artisan' },
        { label: 'SEO PME', href: '/agence-geo-seo/secteur/pme' },
      ],
      projets: [
        { label: 'SEO Site e-commerce', href: '/agence-geo-seo/projet/site-ecommerce' },
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Cannibalisation SEO', href: '/glossaire/cannibalisation-seo' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'Sylius', href: '/agence-geo-seo/cms/sylius' },
    ],
  },
};

export default data;
