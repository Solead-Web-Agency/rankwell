/**
 * DATA : Page CMS Salesforce Commerce Cloud (FR)
 * Route : /agence-geo-seo/cms/salesforce
 *
 * Salesforce Commerce Cloud (SFCC, ex-Demandware) : plateforme e-commerce enterprise SaaS.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'salesforce',
    title: 'Agence SEO & GEO Salesforce Commerce Cloud - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Salesforce Commerce Cloud. Business Manager, SFRA, URL rules, multi-site international : m\u00e9thodologie compl\u00e8te pour SFCC.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Salesforce Commerce Cloud' },
    ],
    title: 'SEO & GEO Salesforce Commerce Cloud : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Soft 404, index bloat par les URL param\u00e9tr\u00e9es, templates ISML non optimis\u00e9s : le r\u00e9f\u00e9rencement d\'un site Salesforce Commerce Cloud exige une expertise technique que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique SFCC et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Salesforce',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Salesforce Commerce Cloud (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Salesforce Commerce Cloud',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Plus de 13 000 sites e-commerce tournent sur Salesforce Commerce Cloud</strong>. Le Business Manager offre des URL rules personnalisables, des sitemaps segment\u00e9s, des meta-tags rule-based et un multi-site/multi-langue natif avec hreflang. La SFRA fournit une base front-end moderne avec redirections 301 natives, un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> enterprise.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">60 \u00e0 70 % du temps SEO d\'un lancement SFRA est consacr\u00e9 aux redirections 301</strong>. Les templates ISML exigent des d\u00e9veloppeurs certifi\u00e9s, la recherche param\u00e9tr\u00e9e g\u00e9n\u00e8re un <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">index bloat massif</a>, et les pages inexistantes redirigent vers l\'accueil au lieu de renvoyer un 404. Le mod\u00e8le tarifaire bas\u00e9 sur le GMV (1 \u00e0 3 %) reste co\u00fbteux.',
    geoAngle:
      'Selon Rankwell, l\'architecture multi-site de SFCC permet de publier des contenus factuels localis\u00e9s par march\u00e9, un avantage structurel en citabilit\u00e9 IA. Mais cette citabilit\u00e9 reste th\u00e9orique si le balisage schema.org Product et Organization n\'est pas inject\u00e9 via les templates ISML et si les pages cat\u00e9gories conservent des meta-tags g\u00e9n\u00e9riques.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Salesforce Commerce Cloud et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des sites SFCC non optimis\u00e9s. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la visibilit\u00e9 dans les moteurs IA. Un audit technique centr\u00e9 sur le Business Manager et les templates ISML identifie les corrections prioritaires.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Index bloat par la recherche param\u00e9tr\u00e9e (chaque combinaison de filtres g\u00e9n\u00e8re une URL)',
        'Dilution du crawl budget, des milliers de pages inutiles index\u00e9es',
        'Configuration de canonicals dans le Business Manager, noindex sur les URL \u00e0 param\u00e8tres de tri et de filtres, nettoyage du sitemap XML',
      ],
      [
        'Soft 404 : pages inexistantes redirig\u00e9es vers la page d\'accueil',
        'Googlebot ne d\u00e9tecte pas les erreurs, pages fant\u00f4mes dans l\'index',
        'Configuration du pipeline de gestion des erreurs SFRA pour retourner un code HTTP 404 explicite avec page d\u00e9di\u00e9e',
      ],
      [
        'Meta-tags g\u00e9n\u00e9riques ou dupliqu\u00e9s sur les pages cat\u00e9gories',
        'Cannibalisation interne, CTR faible dans les SERP',
        'Activation des meta-tags bas\u00e9s sur des r\u00e8gles (rule-based) dans le Business Manager, templates de title et description par type de page',
      ],
      [
        'Templates ISML non optimis\u00e9s (JavaScript bloat, rendu lent)',
        'LCP > 4s, perte de positions sur mobile, taux de rebond \u00e9lev\u00e9',
        'Audit des templates ISML, chargement diff\u00e9r\u00e9 des scripts non critiques, optimisation du cache CDN Salesforce',
      ],
      [
        'Absence de hreflang x-default sur les sites multi-pays',
        'Concurrence entre versions locales dans les SERP, perte de trafic international',
        'Configuration des hreflang via le Business Manager avec x-default pointant vers la version principale, audit des URL rules par locale',
      ],
      [
        'Absence de schema.org Product enrichi',
        'Pas de rich snippets produit (prix, avis, stock), invisibilit\u00e9 pour les LLM',
        'Injection de schema.org Product, BreadcrumbList et Organization via les templates ISML ou le Page Designer SFCC',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Salesforce Commerce Cloud',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Salesforce Commerce Cloud (SFCC).',
    steps: [
      {
        title: 'Audit technique Salesforce Commerce Cloud',
        subtitle: 'Analyse compl\u00e8te de la configuration SFCC : Business Manager, URL rules, templates ISML, cache CDN et Core Web Vitals.',
        items: [
          'Revue de la configuration du Business Manager (URL rules, sitemaps, robots.txt, meta-tags)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur les pages produits, cat\u00e9gories et recherche',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (URL param\u00e9tr\u00e9es, soft 404, doublons)',
          'V\u00e9rification de la configuration SFRA : version, pipelines, controllers custom',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site SFCC dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et votre marque sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs sur votre march\u00e9 e-commerce',
          'Identification des fiches produit et cat\u00e9gories cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage de l\'index et rationalisation des URL',
        subtitle: 'Suppression des URL parasites g\u00e9n\u00e9r\u00e9es par la recherche param\u00e9tr\u00e9e et les filtres de navigation SFCC.',
        items: [
          'Identification et desindexation des URL \u00e0 param\u00e8tres de tri, de filtres et de pagination',
          'Correction des soft 404 : pipeline d\'erreur SFRA renvoyant un vrai code 404',
          'Nettoyage du sitemap XML : exclusion des pages non strat\u00e9giques, segmentation par type',
          'Mise en place de canonicals sur les URL de recherche interne et les variantes de produits',
        ],
      },
      {
        title: 'Optimisation de la performance SFCC',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via le cache CDN Salesforce, la compression des images et l\'optimisation des templates ISML.',
        items: [
          'Configuration optimale du cache CDN int\u00e9gr\u00e9 \u00e0 la plateforme',
          'Conversion des images produit en WebP avec lazy loading',
          'Audit des templates ISML : suppression du JavaScript bloat, chargement diff\u00e9r\u00e9',
          'Minification CSS/JS et optimisation du rendu critique sur mobile',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e dans le Business Manager',
        subtitle: 'Param\u00e9trage complet du Business Manager SFCC pour maximiser le contr\u00f4le sur les URL, meta-tags, sitemaps et redirections.',
        items: [
          'URL rules optimis\u00e9es par cat\u00e9gorie, produit et marque (< 70 caract\u00e8res, attribut name)',
          'Meta-tags bas\u00e9s sur des r\u00e8gles (rule-based) pour les pages cat\u00e9gories et produits',
          'Sitemaps XML segment\u00e9s par type de contenu avec priorit\u00e9s diff\u00e9renci\u00e9es',
          'Balisage schema.org : Product, Organization, BreadcrumbList, FAQPage via ISML ou Page Designer',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce SFCC',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, int\u00e9gr\u00e9s via le Page Designer.',
        items: [
          'Pages guides et cat\u00e9gories enrichies organis\u00e9es en cocon s\u00e9mantique',
          'Fiches produit avec descriptions factuelles, specs techniques et comparatifs',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google, con\u00e7ues pour l\'extraction LLM',
          'Contenu localis\u00e9 par march\u00e9 (multi-site natif SFCC) avec hreflang coh\u00e9rent',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de m\u00e9dias sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des comparateurs e-commerce, m\u00e9dias retail et blogs sp\u00e9cialis\u00e9s',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans votre secteur',
          'Mentions de marque dans des guides d\'achat et classements produits',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA de vos fiches produit',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9, page produit et page cat\u00e9gorie',
          'Trafic organique segment\u00e9 par type de page et par march\u00e9 (multi-site)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA par cat\u00e9gorie de produits',
          '\u00c9volution des Core Web Vitals et sant\u00e9 technique SFCC (index bloat, soft 404, cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos \u00e9quipes techniques SFCC, votre \u00e9quipe marketing ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique SFCC',
        description: 'Diagnostic complet de votre configuration Salesforce Commerce Cloud : Business Manager (URL rules, sitemaps, meta-tags), templates ISML, Core Web Vitals, crawl budget, soft 404, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates produits cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Salesforce Commerce Cloud',
        description: 'Balisage Product, Organization, BreadcrumbList et FAQPage con\u00e7u pour SFCC, avec sp\u00e9cifications d\'injection via les templates ISML ou le Page Designer. Guide d\'int\u00e9gration pour vos d\u00e9veloppeurs SFCC.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produit, pages cat\u00e9gories et guides d\'achat optimis\u00e9s SEO et GEO. Int\u00e9gration via le Page Designer SFCC ou livraison de specs pour vos d\u00e9veloppeurs ISML.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs e-commerce, m\u00e9dias retail et blogs sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page produit et cat\u00e9gorie, trafic organique segment\u00e9 par march\u00e9 (multi-site), \u00e9volution du Score GEO, sant\u00e9 technique SFCC (index bloat, soft 404, cache CDN) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Salesforce Commerce Cloud dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel site e-commerce recommander pour [votre cat\u00e9gorie de produits] ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit et vos pages cat\u00e9gories n\'apparaissent dans aucune source cit\u00e9e, votre boutique SFCC est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence SEO SFCC</h4><p>Sur "quelle agence SEO pour un site Salesforce Commerce Cloud ?", le LLM cite quelques agences par nom car elles disposent de pages d\u00e9di\u00e9es bien r\u00e9f\u00e9renc\u00e9es. Il fournit une liste de crit\u00e8res de s\u00e9lection centr\u00e9s sur l\'expertise SFCC : ma\u00eetrise du Business Manager, connaissance SFRA, gestion du multi-site international. Aucune agence ne domine clairement. L\'agence qui structure son contenu avec une m\u00e9thodologie d\u00e9taill\u00e9e, des cas clients SFCC et une dimension GEO/IA a le potentiel de devenir la r\u00e9f\u00e9rence.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Salesforce Commerce Cloud", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 12 points centr\u00e9 sur le Business Manager et SFRA : URL rules, sitemaps XML segment\u00e9s, meta-tags rule-based, robots.txt, redirections 301. Il insiste sur le fait que 60 \u00e0 70 % du temps SEO lors d\'un lancement SFRA est consacr\u00e9 aux redirections. Les sources privil\u00e9gi\u00e9es sont la documentation Salesforce officielle, NOVOS, Resignal et Foxglove Partner. Aucune agence fran\u00e7aise n\'est cit\u00e9e dans ce contexte technique.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Salesforce Commerce Cloud vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. SFCC est pr\u00e9sent\u00e9 comme la plateforme offrant un contr\u00f4le technique complet (URL personnalisables, multi-site natif, Einstein Copilot) mais avec un co\u00fbt \u00e9lev\u00e9 (1 \u00e0 3 % du GMV) et une complexit\u00e9 qui n\u00e9cessite des d\u00e9veloppeurs certifi\u00e9s. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Salesforce Commerce Cloud", le LLM fournit une liste de 8 \u00e0 10 probl\u00e8mes sp\u00e9cifiques : soft 404, index bloat par les URL param\u00e9tr\u00e9es, meta-tags g\u00e9n\u00e9riques, sitemaps gonfl\u00e9s, absence de hreflang x-default. Les contenus qui structurent probl\u00e8me/impact/solution en tableau ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour un site Salesforce Commerce Cloud, les types schema.org recommand\u00e9s sont : <code>Product</code> (fiches produit avec prix, avis, disponibilit\u00e9), <code>Organization</code> (entit\u00e9 marchande), <code>BreadcrumbList</code> (navigation cat\u00e9gorie > sous-cat\u00e9gorie > produit), <code>FAQPage</code> (pages de FAQ), <code>Offer</code> (offres commerciales et promotions). L\'injection se fait via les templates ISML ou le Page Designer SFCC. Le balisage permet \u00e0 Google d\'afficher des rich snippets produit et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs r\u00e9ponses de recommandation.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Salesforce Commerce Cloud par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit et cat\u00e9gorie), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les m\u00e9dias retail), et la Densit\u00e9 Factuelle (richesse du balisage schema.org Product, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les fiches produit).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Salesforce Commerce Cloud',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Salesforce Commerce Cloud ?',
        answer:
          'Le budget SEO pour un site SFCC d\u00e9pend du nombre de produits, du nombre de sites (multi-site international) et de la complexit\u00e9 des templates ISML. Chez Rankwell, les accompagnements SEO Salesforce Commerce Cloud d\u00e9marrent \u00e0 3 000 EUR/mois pour un site mono-pays avec un catalogue de moins de 5 000 produits, et atteignent 6 000 \u00e0 12 000 EUR/mois pour les configurations multi-site internationales avec des dizaines de milliers de r\u00e9f\u00e9rences. Ce budget inclut l\'audit du Business Manager, l\'optimisation des templates, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Salesforce Commerce Cloud ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 2 et 4 mois pour les corrections techniques (nettoyage de l\'index bloat, correction des soft 404, configuration des canonicals). Le positionnement sur des mots-cl\u00e9s concurrentiels e-commerce n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. La r\u00e9solution des probl\u00e8mes de crawl budget li\u00e9s aux URL param\u00e9tr\u00e9es SFCC produit des effets mesurables d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial du Business Manager.',
      },
      {
        question: 'Faut-il migrer vers SFRA pour am\u00e9liorer le SEO de mon site SFCC ?',
        answer:
          'La migration vers SFRA (Storefront Reference Architecture) am\u00e9liore la base technique du SEO gr\u00e2ce \u00e0 une architecture front-end plus moderne et performante. Cependant, 60 \u00e0 70 % du temps de la migration est consacr\u00e9 aux redirections 301 : chaque URL existante doit \u00eatre mapp\u00e9e vers sa nouvelle version pour \u00e9viter une perte de positions. Rankwell audite votre configuration actuelle, \u00e9value le gain SEO potentiel de la migration SFRA et produit le plan de redirections complet si la migration est justifi\u00e9e.',
      },
      {
        question: 'Comment r\u00e9duire l\'index bloat sur Salesforce Commerce Cloud ?',
        answer:
          'L\'index bloat sur SFCC provient principalement des URL g\u00e9n\u00e9r\u00e9es par la recherche param\u00e9tr\u00e9e et les filtres de navigation : chaque combinaison de filtres cr\u00e9e une URL distincte. Rankwell configure des canonicals dans le Business Manager, applique le noindex sur les URL de tri et de filtres, nettoie le sitemap XML en excluant les pages non strat\u00e9giques, et met en place un monitoring pour d\u00e9tecter les nouvelles URL parasites g\u00e9n\u00e9r\u00e9es par les mises \u00e0 jour de catalogue.',
      },
      {
        question: 'Comment faire citer mes produits SFCC par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent vos fiches produit Salesforce Commerce Cloud, trois conditions sont n\u00e9cessaires : des descriptions produit riches en donn\u00e9es factuelles v\u00e9rifiables (specs techniques, comparatifs, mat\u00e9riaux), un balisage schema.org Product complet inject\u00e9 via les templates ISML (prix, avis, disponibilit\u00e9), et des mentions de votre marque sur des sources tierces (comparateurs, presse retail, guides d\'achat). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Salesforce Commerce Cloud est-il adapt\u00e9 au SEO en 2026 ?',
        answer:
          'SFCC offre un contr\u00f4le technique complet sur le SEO (URL rules, sitemaps segment\u00e9s, meta-tags rule-based, multi-site natif) et b\u00e9n\u00e9ficie d\'Einstein Copilot pour la g\u00e9n\u00e9ration de contenus. Cependant, la plateforme reste complexe : les templates ISML n\u00e9cessitent des d\u00e9veloppeurs sp\u00e9cialis\u00e9s, la documentation SEO est lacunaire, et le co\u00fbt bas\u00e9 sur le GMV est \u00e9lev\u00e9. SFCC convient aux entreprises enterprise avec un budget technique. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux contraintes sp\u00e9cifiques de la plateforme.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Salesforce Commerce Cloud ?',
        answer:
          'Rankwell combine l\'expertise SEO technique SFCC (audit du Business Manager, optimisation ISML, URL rules, multi-site international) avec la dimension GEO que la grande majorit\u00e9 des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de Salesforce Commerce Cloud : index bloat, soft 404, meta-tags g\u00e9n\u00e9riques, hreflang multi-site. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos produits dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Salesforce Commerce Cloud ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site SFCC. Nos consultants SEO & GEO analysent votre configuration Business Manager, vos templates ISML, votre multi-site international et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Mode & Luxe', href: '/agence-geo-seo/secteur/mode' },
        { label: 'SEO Retail', href: '/agence-geo-seo/secteur/retail' },
      ],
      projets: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
        { label: 'SEO International', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO international', href: '/glossaire/seo-international' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'BigCommerce', href: '/agence-geo-seo/cms/bigcommerce' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'HubSpot', href: '/agence-geo-seo/cms/hubspot' },
      { label: 'Odoo', href: '/agence-geo-seo/cms/odoo' },
    ],
  },
};

export default data;
