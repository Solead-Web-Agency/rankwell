/**
 * DATA : Page CMS Odoo (FR)
 * Route : /agence-geo-seo/cms/odoo
 *
 * Odoo : ERP open source avec CMS et e-commerce int\u00e9gr\u00e9s (Website Builder).
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'odoo',
    title: 'Agence SEO & GEO Odoo - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Odoo. Website Builder, e-commerce int\u00e9gr\u00e9, modules communautaires, schema.org : m\u00e9thodologie compl\u00e8te pour Odoo.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Odoo' },
    ],
    title: 'SEO & GEO Odoo : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Le Website Builder Odoo int\u00e8gre un SEO basique (meta tags, sitemap, compression WebP), mais ne propose ni schema.org avanc\u00e9, ni redirections 301 natives, ni contr\u00f4le fin du JavaScript QWeb. Nos experts combinent SEO technique et GEO pour positionner votre site Odoo sur Google et dans les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Odoo',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Odoo (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Odoo',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Odoo compte plus de 12 millions d\'utilisateurs</strong> et couvre ERP, CRM, e-commerce et CMS dans un m\u00eame \u00e9cosyst\u00e8me. Le Website Builder g\u00e9n\u00e8re un sitemap XML, compresse en WebP et int\u00e8gre un outil d\'analyse SEO (meta tags, densit\u00e9 H1/H2). Les th\u00e8mes Bootstrap garantissent un responsive natif, et l\'int\u00e9gration e-commerce/ERP est un atout pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Le Website Builder Odoo ne propose pas de schema.org avanc\u00e9 en natif</strong> (seuls les microdata basiques produits/\u00e9v\u00e9nements). Le JavaScript QWeb alourdit le DOM et d\u00e9grade les Core Web Vitals. Pas de redirections 301 natives, pas de gestion du <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a>, et sur Odoo Online l\'installation de modules communautaires SEO est bloqu\u00e9e.',
    geoAngle:
      'Selon Rankwell, l\'absence de schema.org avanc\u00e9 (Organization, FAQPage, BreadcrumbList) et la faible densit\u00e9 factuelle des pages g\u00e9n\u00e9r\u00e9es par le Website Builder cr\u00e9ent un d\u00e9ficit de citabilit\u00e9 IA. L\'injection de JSON-LD via des modules communautaires ou du code Python custom est indispensable pour que les LLM extraient des entit\u00e9s exploitables.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Odoo et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Odoo non optimis\u00e9s, en particulier ceux d\u00e9ploy\u00e9s sur Odoo Online sans acc\u00e8s aux modules communautaires. Un audit technique identifie les blocages sp\u00e9cifiques \u00e0 votre version (v16, v17, v18) et \u00e0 votre mode de d\u00e9ploiement.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Pas de schema.org avanc\u00e9 natif (seuls microdata basiques produits/\u00e9v\u00e9nements)',
        'Aucun rich snippet FAQ, BreadcrumbList ou Organization dans les SERP',
        'Injection de JSON-LD via module communautaire (ta_website_schema) ou code Python custom dans les templates QWeb',
      ],
      [
        'JavaScript QWeb lourd sur les pages riches en widgets',
        'LCP > 3,5s sur mobile, d\u00e9gradation du score Core Web Vitals',
        'Audit des widgets par page, suppression des blocs dynamiques non essentiels, lazy loading des modules JavaScript non critiques',
      ],
      [
        'Pas de module de redirections 301 natif',
        'Perte de jus SEO lors des changements d\'URL ou migrations de version',
        'Configuration des redirections au niveau serveur (Nginx/Apache) ou via module communautaire de redirection Odoo',
      ],
      [
        'Contenu duplique entre pages catalogue et variantes produit',
        'Cannibalisation interne, dilution du crawl budget',
        'Balises canonical inject\u00e9es dans les templates QWeb, param\u00e9trage des URLs de variantes en noindex',
      ],
      [
        'Odoo Online bloque l\'installation de modules communautaires SEO',
        'Impossible d\'ajouter schema.org, redirections, ou outils SEO avanc\u00e9s',
        'Migration vers Odoo.sh ou On Premise pour acc\u00e9der aux modules communautaires, ou injection via Google Tag Manager en solution de contournement',
      ],
      [
        'URLs de blog et pages non optimis\u00e9es par d\u00e9faut (/blog/slug-auto-genere)',
        'Perte de signal s\u00e9mantique, URLs trop longues ou non descriptives',
        'Personnalisation manuelle des slugs dans l\'interface Odoo, r\u00e8gles de nommage coh\u00e9rentes, r\u00e9\u00e9criture d\'URL via configuration serveur',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Odoo',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques d\'Odoo.',
    steps: [
      {
        title: 'Audit technique Odoo',
        subtitle: 'Analyse compl\u00e8te de votre installation Odoo : version (v16, v17, v18), mode de d\u00e9ploiement (Online, SH, On Premise), modules actifs et configuration serveur.',
        items: [
          'Identification de la version Odoo et du mode de d\u00e9ploiement (Online, SH, On Premise)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) avec focus sur le poids JavaScript QWeb',
          'Inventaire des modules Website, eCommerce et Blog actifs et de leur impact sur le rendu',
          'V\u00e9rification du sitemap XML g\u00e9n\u00e9r\u00e9, du robots.txt et de la configuration HTTPS/SSL',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Odoo dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (sur Odoo et sur d\'autres CMS)',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des modules',
        subtitle: 'Suppression des modules inutilis\u00e9s qui alourdissent le site et cr\u00e9ent des conflits entre le Website Builder et les autres applications Odoo.',
        items: [
          'D\u00e9sactivation des modules Website non essentiels (animations, widgets dynamiques superflus)',
          'Nettoyage de la base PostgreSQL (pages brouillon, produits archiv\u00e9s encore index\u00e9s)',
          'Rationalisation des th\u00e8mes Odoo : suppression des assets CSS/JS inutilis\u00e9s',
          'V\u00e9rification des conflits entre modules e-commerce, blog et website',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'R\u00e9duction du poids JavaScript QWeb et am\u00e9lioration de la vitesse de chargement sp\u00e9cifique \u00e0 l\'architecture Odoo (Python/PostgreSQL).',
        items: [
          'Configuration du cache serveur (Nginx reverse proxy, cache statique des assets)',
          'Optimisation des requ\u00eates PostgreSQL pour les pages catalogue volumineuses',
          'Compression et lazy loading des images produit dans le module e-commerce',
          'Mise en place d\'un CDN pour les assets statiques (CSS, JS, images)',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet du SEO Odoo au-del\u00e0 des fonctionnalit\u00e9s natives : schema.org, redirections, canonical, via modules communautaires ou code custom.',
        items: [
          'Installation et configuration du module ta_website_schema pour le balisage JSON-LD (Organization, BreadcrumbList, FAQPage, Product)',
          'Mise en place des redirections 301 via configuration serveur ou module communautaire',
          'Injection de balises canonical dans les templates QWeb pour les pages catalogue',
          'Personnalisation des slugs URL pour les pages, articles de blog et fiches produit',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Odoo',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, int\u00e9gr\u00e9s directement dans le module Blog et les pages Website.',
        items: [
          'Pages piliers + articles blog organis\u00e9s en cocon s\u00e9mantique via le module Blog Odoo',
          'Maillage interne entre fiches produit, pages cat\u00e9gorie et articles de blog',
          'FAQ th\u00e9matiques avec balisage FAQPage inject\u00e9 via JSON-LD',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks depuis des sites sp\u00e9cialis\u00e9s ERP, e-commerce et m\u00e9dias sectoriels.',
        items: [
          'Backlinks depuis des blogs sp\u00e9cialis\u00e9s Odoo, annuaires de partenaires et comparateurs ERP',
          'Publications invit\u00e9es sur des m\u00e9dias e-commerce et gestion d\'entreprise',
          'Mentions de marque dans des guides comparatifs ERP/CMS (Odoo vs WordPress, Odoo vs Shopify)',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les indicateurs de sant\u00e9 technique Odoo.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages, blog, fiches produit)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi de la performance serveur Odoo (temps de r\u00e9ponse Python, charge PostgreSQL)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique Odoo, votre int\u00e9grateur ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Odoo',
        description: 'Diagnostic complet de votre installation Odoo : version, mode de d\u00e9ploiement (Online, SH, On Premise), modules actifs, Core Web Vitals, poids JavaScript QWeb, et liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Odoo',
        description: 'Balisage JSON-LD Organization, BreadcrumbList, FAQPage et Product configur\u00e9 via le module communautaire ta_website_schema ou inject\u00e9 en code Python dans les templates QWeb. Guide de d\u00e9ploiement pour votre int\u00e9grateur Odoo.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles blog et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans le module Blog et le Website Builder Odoo, avec balisage schema.org inject\u00e9 pour chaque contenu.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs sp\u00e9cialis\u00e9s Odoo, annuaires de partenaires certifi\u00e9s, comparateurs ERP et m\u00e9dias e-commerce. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique Odoo (temps de r\u00e9ponse serveur, Core Web Vitals, modules actifs) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Odoo dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel ERP avec un bon CMS pour le e-commerce ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site Odoo ne contient pas de donn\u00e9es structur\u00e9es exploitables ni de passages factuels v\u00e9rifiables, il est invisible dans ce canal.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Odoo ?", le LLM cite plusieurs agences par leur nom (Jloo, Prelium, Etowline, Captivea) et mentionne le service SEO natif d\'Odoo. Contrairement aux requ\u00eates WordPress ou Shopify, l\'\u00e9cosyst\u00e8me Odoo est assez restreint pour que les acteurs sp\u00e9cialis\u00e9s soient identifiables nommement. Les agences cit\u00e9es sont des int\u00e9grateurs Odoo, pas des sp\u00e9cialistes SEO. Aucune ne mentionne la dimension GEO ou la visibilit\u00e9 dans les moteurs IA.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Odoo", le LLM g\u00e9n\u00e8re un guide en 7 points centr\u00e9 sur les fonctionnalit\u00e9s natives : meta tags, mots-cl\u00e9s, compression WebP, structure H1/H2, alt text, responsive Bootstrap. Les sources privil\u00e9gi\u00e9es sont la documentation officielle Odoo (v13 \u00e0 v18) et les blogs de partenaires francophones (Yotech, Cybrosys, CLB Consult). Les limites sp\u00e9cifiques (JavaScript QWeb, absence de schema.org avanc\u00e9) ne sont pas abord\u00e9es.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Odoo vs WordPress pour le SEO", le LLM produit un comparatif \u00e9quilibr\u00e9 : WordPress sup\u00e9rieur en flexibilit\u00e9 SEO (plugins Yoast, RankMath), Odoo sup\u00e9rieur en int\u00e9gration backend (ERP, CRM, e-commerce natif). L\'\u00e9cosyst\u00e8me de modules Odoo est signal\u00e9 comme nettement plus petit. Les sites qui publient des comparatifs structur\u00e9s avec des crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Odoo", le LLM identifie des probl\u00e8mes g\u00e9n\u00e9raux (animations excessives, images lourdes, contenu creux) mais ne mentionne pas les limites sp\u00e9cifiques d\'Odoo (pas de redirections 301 natives, pas de schema.org avanc\u00e9, JavaScript QWeb lourd). Un contenu qui d\u00e9taille ces probl\u00e8mes techniques sp\u00e9cifiques a le potentiel d\'\u00eatre extrait comme source de r\u00e9f\u00e9rence.</p>',
    structuredData:
      'Pour un site Odoo, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Product</code> et <code>Offer</code> (fiches produit e-commerce). Odoo impl\u00e9mente nativement des microdata basiques pour les produits et \u00e9v\u00e9nements, mais pas de JSON-LD avanc\u00e9. L\'installation du module communautaire ta_website_schema ou l\'injection directe dans les templates QWeb est n\u00e9cessaire pour couvrir l\'ensemble des types recommand\u00e9s.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Odoo par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les comparateurs ERP), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Odoo',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Odoo ?',
        answer:
          'Le budget SEO pour un site Odoo d\u00e9pend du mode de d\u00e9ploiement (Online, SH, On Premise), du nombre de pages produit et du niveau de concurrence de votre secteur. Chez Rankwell, les accompagnements SEO Odoo d\u00e9marrent \u00e0 1 500 EUR/mois pour un site vitrine Odoo Website, et atteignent 3 000 \u00e0 5 000 EUR/mois pour les sites e-commerce avec catalogue volumineux n\u00e9cessitant du d\u00e9veloppement Python custom. Ce budget inclut l\'audit technique, la configuration schema.org, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Odoo ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 2 et 4 mois pour les corrections techniques (optimisation du JavaScript QWeb, compression des images, mise en place des redirections 301). Le positionnement sur des mots-cl\u00e9s concurrentiels demande 4 \u00e0 8 mois de travail continu. Les optimisations de performance serveur (cache Nginx, requ\u00eates PostgreSQL) produisent des effets mesurables d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel adapt\u00e9 \u00e0 votre version Odoo et votre mode d\'h\u00e9bergement.',
      },
      {
        question: 'Faut-il migrer d\'Odoo Online vers Odoo.sh pour le SEO ?',
        answer:
          'Odoo Online limite l\'installation de modules communautaires SEO. Si votre site n\u00e9cessite du balisage schema.org avanc\u00e9, des redirections 301, ou des optimisations de code QWeb, la migration vers Odoo.sh (ou On Premise) est recommand\u00e9e. Odoo.sh permet d\'installer des modules communautaires tout en d\u00e9l\u00e9guant la gestion serveur \u00e0 Odoo S.A. Rankwell \u00e9value le rapport co\u00fbt/b\u00e9n\u00e9fice de cette migration en fonction de vos objectifs SEO et de votre volume de trafic.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de mon site Odoo ?',
        answer:
          'La lenteur d\'un site Odoo provient g\u00e9n\u00e9ralement de trois causes : des widgets dynamiques QWeb trop nombreux qui alourdissent le DOM, des images produit non optimis\u00e9es malgr\u00e9 la compression WebP native, et des requ\u00eates PostgreSQL lentes sur les catalogues volumineux. Rankwell commence par un audit de performance qui identifie les widgets responsables de la lenteur, configure le cache serveur Nginx, optimise les requ\u00eates de base de donn\u00e9es et met en place un CDN pour les assets statiques.',
      },
      {
        question: 'Comment faire citer mon site Odoo par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Odoo, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, sp\u00e9cifications techniques), un balisage schema.org complet (inject\u00e9 via module communautaire ou code Python custom dans les templates QWeb), et des mentions de votre marque sur des sources tierces (comparateurs ERP, blogs Odoo, presse sp\u00e9cialis\u00e9e). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Odoo est-il un bon choix pour le SEO e-commerce en 2026 ?',
        answer:
          'Odoo offre un SEO e-commerce natif correct (sitemap, meta tags, URLs personnalisables, compression WebP) et l\'avantage unique d\'une int\u00e9gration totale entre le CMS, le module e-commerce et l\'ERP. Cependant, son \u00e9cosyst\u00e8me de modules SEO est limit\u00e9 compar\u00e9 \u00e0 WordPress/WooCommerce ou Shopify, et le balisage schema.org avanc\u00e9 n\u00e9cessite un d\u00e9veloppement sp\u00e9cifique. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et limites d\'Odoo.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Odoo ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Odoo (optimisation QWeb, configuration serveur Python/PostgreSQL, injection schema.org, modules communautaires) avec la dimension GEO que les int\u00e9grateurs Odoo classiques ne proposent pas. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les sp\u00e9cificit\u00e9s d\'Odoo : d\u00e9ploiement Online/SH/On Premise, performance du framework JavaScript, e-commerce int\u00e9gr\u00e9. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Odoo ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Odoo. Nos consultants SEO & GEO analysent votre installation, vos modules, votre performance serveur et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
      ],
      projets: [
        { label: 'SEO Site e-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
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
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'HubSpot', href: '/agence-geo-seo/cms/hubspot' },
      { label: 'Salesforce', href: '/agence-geo-seo/cms/salesforce' },
    ],
  },
};

export default data;
