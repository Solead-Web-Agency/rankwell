/**
 * DATA : Page CMS Strapi (FR)
 * Route : /agence-geo-seo/cms/strapi
 *
 * Strapi = headless CMS open source Node.js, API-first (REST + GraphQL).
 * Pas de frontend : le SEO depend entierement du framework cote client (Next.js, Nuxt.js, Gatsby).
 * Plugin officiel @strapi/plugin-seo + strapi-plugin-sitemap (communautaire).
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'strapi',
    title: 'Agence SEO & GEO Strapi - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Strapi. Audit technique headless, SSR/SSG, API caching, schema.org frontend, plugin @strapi/plugin-seo : m\u00e9thodologie compl\u00e8te pour Strapi.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Strapi' },
    ],
    title: 'SEO & GEO Strapi : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'CMS headless sans frontend, z\u00e9ro SEO natif, schema.org inexistant par d\u00e9faut : le r\u00e9f\u00e9rencement d\'un site Strapi repose enti\u00e8rement sur l\'impl\u00e9mentation du framework front (Next.js, Nuxt.js). Nos experts combinent SEO technique headless et GEO pour positionner votre site sur Google et le faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Strapi',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Strapi (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Strapi',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Strapi d\u00e9tient 6,6 % du march\u00e9 des CMS API-first</strong> et alimente plus de 2 300 entreprises. Son architecture headless (API REST + GraphQL) permet de construire des sites en SSR/SSG avec Next.js, Nuxt.js ou Gatsby, offrant des Core Web Vitals sup\u00e9rieurs aux CMS monolithiques et un contr\u00f4le total sur le HTML rendu. Cette flexibilit\u00e9 en fait un choix solide pour une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> sur mesure.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Strapi ne g\u00e9n\u00e8re aucune URL, aucun sitemap et aucun schema.org par d\u00e9faut</strong> : tout repose sur le code frontend. Le plugin @strapi/plugin-seo ajoute meta title et description, mais ne couvre ni redirections 301, ni canonical, ni balisage structur\u00e9. Sans SSR ou SSG, les pages restent invisibles pour Googlebot, et un site mal impl\u00e9ment\u00e9 cumule les probl\u00e8mes de <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> gaspill\u00e9.',
    geoAngle:
      'Selon Rankwell, Strapi pr\u00e9sente un paradoxe en citabilit\u00e9 IA : l\'API-first permet de structurer des passages factuels extractibles et d\'injecter un balisage JSON-LD pr\u00e9cis, mais aucune de ces optimisations n\'existe par d\u00e9faut. Sans schema.org impl\u00e9ment\u00e9 dans le frontend et sans contenus r\u00e9dig\u00e9s pour l\'extraction par les LLM, un site Strapi reste invisible pour les moteurs IA.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, les donn\u00e9es structur\u00e9es jouent un double r\u00f4le : elles alimentent les r\u00e9sultats enrichis de Google (rich snippets, FAQ, avis) et elles fournissent aux LLM une couche de compr\u00e9hension s\u00e9mantique explicite qui facilite l\'extraction factuelle. Un type DefinedTerm correctement balis\u00e9 devient une entit\u00e9 directement ing\u00e9rable par un moteur IA.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'En savoir plus sur les donn\u00e9es structur\u00e9es',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Strapi et solutions',
    interpretation:
      'Ces probl\u00e8mes ne sont pas des bugs de Strapi : ils d\u00e9coulent de l\'architecture headless, o\u00f9 le CMS ne contr\u00f4le pas le rendu. Chaque point n\u00e9cessite une intervention dans le code du frontend. Un audit technique identifie lesquels s\'appliquent \u00e0 votre projet et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Rendu JavaScript c\u00f4t\u00e9 client (CSR) sans SSR ni SSG',
        'Pages invisibles pour Googlebot, z\u00e9ro indexation',
        'Migration vers Next.js (SSR/SSG) ou Nuxt.js (mode universal), avec getStaticProps ou generateStaticParams pour chaque route',
      ],
      [
        'Aucun sitemap XML par d\u00e9faut',
        'Google ne d\u00e9couvre pas les nouvelles pages, indexation incompl\u00e8te',
        'Installation de strapi-plugin-sitemap avec cron quotidien, ou g\u00e9n\u00e9ration dynamique via next-sitemap c\u00f4t\u00e9 Next.js',
      ],
      [
        'Pas de redirections 301 natives',
        'Perte de jus SEO lors des changements de slug, erreurs 404 en cascade',
        'Gestion des redirections dans next.config.js (rewrites/redirects), ou via un middleware NGINX/Cloudflare en amont',
      ],
      [
        'Temps de r\u00e9ponse API lents sans cache',
        'LCP > 4s, d\u00e9gradation des Core Web Vitals et perte de positions mobile',
        'Cache multi-couche : reverse proxy Cloudflare/NGINX sur les GET Strapi, ISR (Incremental Static Regeneration) c\u00f4t\u00e9 Next.js, Redis pour les requ\u00eates r\u00e9currentes',
      ],
      [
        'Absence de schema.org (aucun balisage par d\u00e9faut)',
        'Pas de rich snippets, pas de donn\u00e9es structur\u00e9es pour les LLM',
        'Injection de JSON-LD (WebSite, Organization, BreadcrumbList, FAQPage) dans le layout Next.js/Nuxt.js, aliment\u00e9 par les champs Strapi via l\'API',
      ],
      [
        'Contenu dupliqu\u00e9 entre routes frontend',
        'Cannibalisation interne, dilution du crawl budget',
        'Balises canonical g\u00e9n\u00e9r\u00e9es dynamiquement dans le head du frontend, mapping 1:1 entre chaque entry Strapi et une seule URL',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Strapi',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Strapi et de son architecture headless.',
    steps: [
      {
        title: 'Audit technique Strapi + frontend',
        subtitle: 'Analyse de l\'architecture compl\u00e8te : configuration Strapi (content types, plugins, API), framework frontend (Next.js, Nuxt.js, Gatsby), et infrastructure d\'h\u00e9bergement.',
        items: [
          'Inventaire des content types, composants et relations dans l\'admin Strapi',
          'V\u00e9rification du mode de rendu frontend (CSR, SSR, SSG, ISR) et de son impact sur l\'indexation',
          'Mesure des Core Web Vitals (LCP, FID, CLS) et des temps de r\u00e9ponse API Strapi',
          'Audit des plugins install\u00e9s : @strapi/plugin-seo, strapi-plugin-sitemap, strapi-plugin-generate-schema',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Strapi dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Correction de l\'architecture headless',
        subtitle: 'R\u00e9solution des probl\u00e8mes structurels li\u00e9s \u00e0 la s\u00e9paration backend/frontend qui bloquent l\'indexation et la performance SEO.',
        items: [
          'Passage en SSR ou SSG si le frontend est en CSR pur (migration Next.js App Router ou Nuxt.js mode universal)',
          'Mise en place du cache API multi-couche (Cloudflare, Redis, ISR)',
          'Configuration du sitemap dynamique (strapi-plugin-sitemap ou next-sitemap)',
          'Cr\u00e9ation du syst\u00e8me de redirections 301 dans le frontend ou le reverse proxy',
        ],
      },
      {
        title: 'Optimisation de la performance API',
        subtitle: 'R\u00e9duction des temps de r\u00e9ponse de l\'API Strapi pour garantir un LCP inf\u00e9rieur \u00e0 2,5 secondes sur toutes les pages.',
        items: [
          'Audit des requ\u00eates API (populate, filters, pagination) et r\u00e9duction du payload JSON',
          'Mise en cache des requ\u00eates GET via reverse proxy (Cloudflare, NGINX, Fastly)',
          'Activation de l\'ISR (Incremental Static Regeneration) pour les pages \u00e0 fort trafic',
          'Optimisation des images via le media library Strapi : transformation WebP, redimensionnement, lazy loading c\u00f4t\u00e9 frontend',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Mise en place de toutes les briques SEO techniques que Strapi ne fournit pas nativement : meta tags, canonical, schema.org, robots.txt.',
        items: [
          'Ajout du composant shared.seo via @strapi/plugin-seo sur chaque content type',
          'G\u00e9n\u00e9ration dynamique des balises canonical et meta robots dans le head du frontend',
          'Injection du balisage JSON-LD (WebSite, Organization, BreadcrumbList, FAQPage) depuis les donn\u00e9es API',
          'Configuration du robots.txt et du sitemap XML avec soumission \u00e0 Google Search Console',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu headless',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s dans Strapi pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, en exploitant la flexibilit\u00e9 des content types.',
        items: [
          'Mod\u00e9lisation des content types Strapi pour supporter les cocons s\u00e9mantiques (relations parent/enfant entre pages)',
          'Maillage interne g\u00e9r\u00e9 via des champs de relation Strapi, rendu dynamiquement c\u00f4t\u00e9 frontend',
          'FAQ structur\u00e9es comme composants r\u00e9p\u00e9tables (repeatable components) dans Strapi, avec rendu JSON-LD automatique',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs tech, des communaut\u00e9s headless CMS et des comparateurs SaaS',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique (Jamstack, DevTo, Smashing Magazine)',
          'Mentions de marque dans des articles comparatifs headless CMS et guides techniques',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique de la stack Strapi + frontend.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par content type Strapi',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals, temps de r\u00e9ponse API et taux d\'indexation',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe de d\u00e9veloppement, votre \u00e9quipe marketing ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Strapi',
        description: 'Diagnostic complet de votre stack Strapi + frontend : inventaire des content types et composants, mode de rendu (CSR/SSR/SSG/ISR), temps de r\u00e9ponse API, Core Web Vitals, plugins install\u00e9s (@strapi/plugin-seo, sitemap), avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Strapi',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, inject\u00e9 en JSON-LD dans le layout Next.js ou Nuxt.js. Le kit inclut les snippets de code pr\u00eats \u00e0 int\u00e9grer, aliment\u00e9s dynamiquement par l\'API Strapi.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration dans Strapi via les content types d\u00e9di\u00e9s, avec configuration des champs shared.seo (meta title, meta description) et des composants r\u00e9p\u00e9tables pour les FAQ.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech, des communaut\u00e9s Jamstack, des comparateurs headless CMS et des m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique de la stack Strapi (temps API, taux d\'indexation, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Strapi dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Strapi ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Le terrain est encore plus vierge que pour WordPress ou Shopify : les contenus SEO sur Strapi sont presque exclusivement produits par Strapi (blog officiel) ou par des agences de d\u00e9veloppement. Aucune agence SEO n\'est cit\u00e9e.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Strapi ?", le LLM ne cite aucune agence SEO. Il explique que Strapi est un CMS headless et que le SEO d\u00e9pend du frontend. Il fournit des crit\u00e8res de s\u00e9lection (ma\u00eetrise des architectures headless, exp\u00e9rience SSR/SSG, connaissance du plugin @strapi/plugin-seo) et mentionne des agences de d\u00e9veloppement Strapi (Incrona, Terros), pas des agences SEO. L\'agence qui publie un contenu structur\u00e9 sur le SEO headless Strapi, avec m\u00e9thodologie et r\u00e9sultats, occupe un espace vide.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Strapi", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points centr\u00e9 sur l\'impl\u00e9mentation frontend : SSR/SSG, plugin @strapi/plugin-seo, sitemap, cache API, JSON-LD. Les sources privil\u00e9gi\u00e9es sont le blog officiel Strapi, SALT.agency et les documentations Next.js/Nuxt.js. Aucune agence SEO n\'est cit\u00e9e dans les r\u00e9ponses techniques.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Strapi vs WordPress pour le SEO", le LLM produit un tableau comparatif o\u00f9 WordPress domine sur le SEO natif et Strapi sur la performance. Il souligne que Strapi n\u00e9cessite une \u00e9quipe de d\u00e9veloppement pour chaque fonctionnalit\u00e9 SEO. Les sites publiant des comparatifs structur\u00e9s avec des crit\u00e8res mesurables (temps de r\u00e9ponse API, couverture schema.org, taux d\'indexation) sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Strapi", le LLM fournit 6 \u00e0 8 probl\u00e8mes li\u00e9s \u00e0 l\'architecture headless : CSR sans SSR, absence de sitemap, pas de redirections, meta tags manquants, API lente, contenu dupliqu\u00e9. Les contenus qui pr\u00e9sentent chaque probl\u00e8me avec une solution technique pr\u00e9cise (extraits de code, configuration) ont les meilleures chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Strapi, les types schema.org doivent \u00eatre inject\u00e9s dans le frontend (Next.js, Nuxt.js), car Strapi ne g\u00e9n\u00e8re aucun balisage par d\u00e9faut. Types recommand\u00e9s : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). Le plugin strapi-plugin-generate-schema peut automatiser le mapping entre content types Strapi et schema.org JSON-LD via un param\u00e8tre ?schemaOrg=true sur les requ\u00eates API. L\'approche Rankwell combine ce plugin avec une injection manuelle des types non couverts pour garantir une couverture compl\u00e8te.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Strapi par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus servis par l\'API Strapi), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les communaut\u00e9s tech), et la Densit\u00e9 Factuelle (richesse du balisage JSON-LD inject\u00e9 dans le frontend et entit\u00e9s nomm\u00e9es dans les pages rendues).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Strapi',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Strapi ?',
        answer:
          'Le budget SEO pour un site Strapi d\u00e9pend de la complexit\u00e9 de la stack (Strapi + Next.js, Nuxt.js ou Gatsby), du nombre de content types et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Strapi d\u00e9marrent \u00e0 2 000 EUR/mois pour un site vitrine headless de moins de 50 pages, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les projets avec catalogue produit, multilingue ou architecture multi-sites. Ce budget inclut l\'audit technique de la stack compl\u00e8te, la configuration SEO du frontend et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Strapi ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 1 et 3 mois pour les corrections techniques (passage en SSR/SSG, mise en place du sitemap, configuration du cache API). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les gains de performance (Core Web Vitals, temps de r\u00e9ponse API) sont mesurables d\u00e8s les premi\u00e8res semaines. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre stack Strapi.',
      },
      {
        question: 'Le plugin @strapi/plugin-seo suffit-il pour le r\u00e9f\u00e9rencement ?',
        answer:
          'Non. Le plugin officiel @strapi/plugin-seo ajoute un composant shared.seo avec meta title, meta description et apercu SERP dans l\'admin Strapi. C\'est utile pour la gestion \u00e9ditoriale des meta tags, mais il ne couvre ni le sitemap XML, ni les redirections 301, ni les balises canonical, ni le schema.org, ni le robots.txt. Toutes ces briques doivent \u00eatre impl\u00e9ment\u00e9es dans le frontend (Next.js, Nuxt.js). Rankwell configure le plugin ET le frontend pour une couverture SEO compl\u00e8te.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur d\'un site Strapi ?',
        answer:
          'La lenteur d\'un site Strapi provient g\u00e9n\u00e9ralement de trois causes : requ\u00eates API non optimis\u00e9es (populate profond, payloads JSON volumineux), absence de cache (pas de reverse proxy, pas d\'ISR), et h\u00e9bergement sous-dimensionn\u00e9. Rankwell commence par auditer les requ\u00eates API pour r\u00e9duire les payloads, configure un cache multi-couche (Cloudflare en reverse proxy, ISR c\u00f4t\u00e9 Next.js, Redis pour les requ\u00eates r\u00e9currentes), et optimise les images via le media library Strapi (WebP, lazy loading).',
      },
      {
        question: 'Comment faire citer mon site Strapi par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Strapi, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables, un balisage JSON-LD complet inject\u00e9 dans le frontend (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces (blogs tech, communaut\u00e9s Jamstack, presse sp\u00e9cialis\u00e9e). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires. L\'avantage de Strapi : la flexibilit\u00e9 de l\'API permet de structurer des passages optimis\u00e9s pour l\'extraction par les LLM.',
      },
      {
        question: 'Strapi est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'Strapi est un excellent choix pour le SEO \u00e0 condition de disposer d\'une \u00e9quipe de d\u00e9veloppement capable d\'impl\u00e9menter chaque brique SEO dans le frontend. Les sites Strapi bien configur\u00e9s en SSR/SSG obtiennent des Core Web Vitals sup\u00e9rieurs aux CMS monolithiques (WordPress, Drupal). En revanche, si votre \u00e9quipe n\'a pas de comp\u00e9tences Next.js ou Nuxt.js, un CMS avec SEO int\u00e9gr\u00e9 (WordPress + Yoast) sera plus efficace. Rankwell adapte sa m\u00e9thodologie SEO et GEO \u00e0 votre stack technique.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Strapi ?',
        answer:
          'Rankwell combine l\'expertise SEO technique headless (audit de stack Strapi + Next.js/Nuxt.js, configuration SSR/SSG, cache API, JSON-LD frontend) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les sp\u00e9cificit\u00e9s de l\'architecture headless : chaque brique SEO absente par d\u00e9faut (sitemap, redirections, canonical, schema.org) est prise en charge. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Strapi ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Strapi. Nos consultants SEO & GEO analysent votre stack headless (Strapi + frontend), vos temps de r\u00e9ponse API, votre couverture schema.org et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
      ],
      projets: [
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'SEO technique', href: '/agence-geo-seo/projet/seo-technique' },
      ],
      cms: [
        { label: 'SEO Contentful', href: '/agence-geo-seo/cms/contentful' },
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
        { label: 'SEO Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
      { label: 'Prismic', href: '/agence-geo-seo/cms/prismic' },
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      { label: 'Gatsby', href: '/agence-geo-seo/cms/gatsby' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
    ],
  },
};

export default data;
