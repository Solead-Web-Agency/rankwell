/**
 * DATA : Page CMS Prismic (FR)
 * Route : /agence-geo-seo/cms/prismic
 *
 * Prismic = headless CMS SaaS, Slice Machine (composants reutilisables),
 * API REST + GraphQL, Route Resolver (mapping URL natif),
 * SDK natifs Next.js/Nuxt/SvelteKit, CDN imgix integre.
 * SEO = depend 100 % du frontend, zero SEO natif cote CMS.
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'prismic',
    title: 'Agence SEO & GEO Prismic - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Prismic. Slice Machine, Route Resolver, SSR/SSG, schema.org frontend, CDN imgix : m\u00e9thodologie compl\u00e8te pour Prismic.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Prismic' },
    ],
    title: 'SEO & GEO Prismic : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Slice Machine sans balisage structur\u00e9, Route Resolver mal configur\u00e9, z\u00e9ro sitemap natif : le r\u00e9f\u00e9rencement d\'un site Prismic repose enti\u00e8rement sur le framework frontend (Next.js, Nuxt, SvelteKit). Nos experts combinent SEO technique headless et GEO pour positionner votre site sur Google et le faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Prismic',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Prismic (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Prismic',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Prismic alimente environ 1 480 sites</strong> en tant que CMS headless orient\u00e9 website-building. Le Slice Machine permet de construire des pages \u00e0 partir de composants r\u00e9utilisables, le Route Resolver offre un mapping URL natif \u00e0 deux niveaux, et le CDN imgix int\u00e9gr\u00e9 optimise les images en WebP/AVIF. Associ\u00e9 \u00e0 Next.js ou Nuxt en SSR/SSG, Prismic fournit un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Prismic ne g\u00e9n\u00e8re aucun sitemap XML, aucune redirection 301 ni aucun schema.org</strong> : tout repose sur le frontend. Un Route Resolver mal configur\u00e9 produit des 404 en cascade, et sans SSR/SSG le rendu JavaScript rend les pages invisibles pour Googlebot, g\u00e9n\u00e9rant un <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> gaspill\u00e9. Le plan gratuit (1 utilisateur) impose le passage au plan Medium (150 USD/mois) d\u00e8s qu\'une \u00e9quipe \u00e9ditoriale intervient.',
    geoAngle:
      'Selon Rankwell, le Slice Machine permet de structurer des passages factuels auto-suffisants dans chaque composant r\u00e9utilisable, et le Route Resolver garantit des URL s\u00e9mantiques stables. Mais cette citabilit\u00e9 IA reste latente tant que le frontend ne transforme pas les Slices en balisage JSON-LD exploitable par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Prismic et solutions',
    interpretation:
      'Ces probl\u00e8mes d\u00e9coulent de l\'architecture headless de Prismic, o\u00f9 le CMS g\u00e8re le contenu sans contr\u00f4ler le rendu. Chacun impacte le positionnement Google et la capacit\u00e9 des moteurs IA \u00e0 extraire vos donn\u00e9es. Un audit technique identifie ceux qui s\'appliquent \u00e0 votre configuration et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Frontend en CSR pur (React SPA sans SSR ni SSG)',
        'Pages invisibles pour Googlebot, z\u00e9ro indexation organique',
        'Migration vers Next.js (SSR/SSG via @prismicio/next) ou Nuxt (@prismicio/nuxt), avec g\u00e9n\u00e9ration statique des routes Prismic',
      ],
      [
        'Route Resolver mal configur\u00e9 ou absent',
        'URLs incoh\u00e9rentes, liens internes cass\u00e9s, 404 en cascade',
        'Configuration du Route Resolver dans prismicio.ts avec mapping explicite par Page Type, tests automatis\u00e9s des URLs g\u00e9n\u00e9r\u00e9es',
      ],
      [
        'Pas de sitemap XML g\u00e9n\u00e9r\u00e9 par Prismic',
        'D\u00e9couverte des pages incompl\u00e8te, crawl inefficace',
        'G\u00e9n\u00e9ration automatique via next-sitemap (Next.js) ou nuxt-sitemap (Nuxt), aliment\u00e9 par l\'API Prismic avec filtrage des Page Types',
      ],
      [
        'Champs SEO du Page Type non valid\u00e9s par les \u00e9diteurs',
        'Meta titles en doublon, descriptions vides, perte de CTR',
        'Ajout de validations custom dans le Slice Machine (longueur meta title 50-60 car., meta description obligatoire), formation des \u00e9diteurs',
      ],
      [
        'Redirections 301 non g\u00e9r\u00e9es nativement',
        'Perte de PageRank lors des changements de slug, erreurs 404',
        'Gestion des redirections dans next.config.js (redirects) ou via des r\u00e8gles CDN Vercel/Netlify, avec un Custom Type "Redirect" dans Prismic',
      ],
      [
        'Absence de schema.org malgr\u00e9 des Slices riches en contenu',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Mapping syst\u00e9matique des Slices vers les types schema.org (Article, FAQPage, HowTo) via un composant JSON-LD inject\u00e9 dans le layout frontend',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Prismic',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Prismic et de son architecture headless.',
    steps: [
      {
        title: 'Audit technique Prismic + frontend',
        subtitle: 'Analyse compl\u00e8te de l\'architecture headless : Slice Machine, Page Types, Route Resolver, framework frontend (Next.js, Nuxt, SvelteKit) et Core Web Vitals.',
        items: [
          'Inventaire des Page Types, Custom Types et Slices dans le Slice Machine',
          'V\u00e9rification du Route Resolver : coh\u00e9rence des URLs g\u00e9n\u00e9r\u00e9es, niveaux d\'imbrication, gestion des slugs',
          'Mesure des Core Web Vitals (LCP, INP, CLS) et v\u00e9rification du mode de rendu frontend (CSR, SSR, SSG)',
          'Audit des champs SEO des Page Types : pr\u00e9sence du meta title, meta description, OG image, UID',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Prismic dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Correction de l\'architecture headless',
        subtitle: 'R\u00e9solution des probl\u00e8mes structurels li\u00e9s \u00e0 la s\u00e9paration backend Prismic / frontend qui bloquent l\'indexation et la performance SEO.',
        items: [
          'Passage en SSR ou SSG si le frontend est en CSR pur (migration vers @prismicio/next ou @prismicio/nuxt)',
          'Reconfiguration du Route Resolver pour des URLs s\u00e9mantiques coh\u00e9rentes (cat\u00e9gorie/slug, blog/article)',
          'G\u00e9n\u00e9ration automatique du sitemap XML via next-sitemap ou nuxt-sitemap, aliment\u00e9 par l\'API Prismic',
          'Cr\u00e9ation d\'un Custom Type "Redirect" pour g\u00e9rer les redirections 301 depuis l\'interface Prismic',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'R\u00e9duction des temps de chargement en exploitant le CDN imgix int\u00e9gr\u00e9 \u00e0 Prismic et les strat\u00e9gies de cache du framework frontend.',
        items: [
          'Configuration du CDN imgix Prismic : format WebP/AVIF automatique, redimensionnement adaptatif, lazy loading',
          'Activation de l\'ISR (Incremental Static Regeneration) sur Next.js pour les pages \u00e0 fort trafic',
          'Mise en cache des r\u00e9ponses API Prismic via le CDN du framework (Vercel Edge, Netlify CDN)',
          'Minification CSS/JS et chargement diff\u00e9r\u00e9 des scripts non critiques dans le layout frontend',
        ],
      },
      {
        title: 'Balisage schema.org et donn\u00e9es structur\u00e9es',
        subtitle: 'Mapping syst\u00e9matique des Slices et Page Types Prismic vers les types schema.org pour maximiser les rich snippets et la citabilit\u00e9 IA.',
        items: [
          'Balisage WebSite, Organization, BreadcrumbList inject\u00e9 en JSON-LD dans le layout principal du frontend',
          'Mapping Article, FAQPage, HowTo, Product sur les Slices correspondants du Slice Machine',
          'G\u00e9n\u00e9ration dynamique du JSON-LD depuis les champs Prismic via le SDK @prismicio/client',
          'Tests de validation avec le Rich Results Test de Google sur chaque Page Type',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Prismic',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s exploit\u00e9s par le Slice Machine pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 IA.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s via les relations entre documents Prismic (Content Relationship)',
          'Maillage interne automatis\u00e9 gr\u00e2ce aux champs Link et Content Relationship du Slice Machine',
          'FAQ structur\u00e9es comme Slices r\u00e9utilisables, avec rendu JSON-LD FAQPage automatique c\u00f4t\u00e9 frontend',
          'Passages factuels auto-suffisants dans chaque Slice, con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es tech et headless CMS.',
        items: [
          'Backlinks depuis des blogs tech headless, des comparateurs SaaS et des communaut\u00e9s Jamstack',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans l\'\u00e9cosyst\u00e8me Prismic (DevTo, Smashing Magazine, CSS-Tricks)',
          'Mentions de marque dans des articles comparatifs headless CMS et guides d\'architecture frontend',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique de la stack Prismic + frontend.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par Page Type Prismic (page, blog_post, landing)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals, taux d\'indexation et coh\u00e9rence du Route Resolver',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe de d\u00e9veloppement, vos \u00e9diteurs Prismic ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Prismic',
        description: 'Diagnostic complet de votre architecture headless : inventaire des Page Types et Slices, configuration du Route Resolver, mode de rendu frontend (CSR/SSR/SSG), Core Web Vitals, champs SEO manquants ou non valid\u00e9s, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Prismic',
        description: 'Mapping complet des Slices et Page Types vers les types schema.org (Article, FAQPage, HowTo, BreadcrumbList). Code frontend (Next.js ou Nuxt) pour la g\u00e9n\u00e9ration dynamique du JSON-LD depuis les champs Prismic via le SDK @prismicio/client.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages et FAQ optimis\u00e9es SEO et GEO. Int\u00e9gration directe dans Prismic via le Slice Machine et le Writing Room. Cr\u00e9ation de Slices d\u00e9di\u00e9es (FAQ, T\u00e9moignage, Comparatif) si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech headless, des comparateurs SaaS et des m\u00e9dias sp\u00e9cialis\u00e9s Jamstack. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par Page Type Prismic, \u00e9volution du Score GEO, sant\u00e9 technique du frontend (indexabilit\u00e9, Core Web Vitals, Route Resolver) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Prismic dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Prismic ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Le terrain est encore plus vierge que pour WordPress ou Shopify : les contenus SEO sur Prismic sont presque exclusivement produits par Prismic (blog officiel) ou par des agences de d\u00e9veloppement. Aucune agence SEO n\'est cit\u00e9e.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Prismic ?", le LLM ne cite aucune agence SEO par son nom. Il explique que Prismic est un CMS headless et que le SEO d\u00e9pend du frontend (Next.js, Nuxt, SvelteKit). Il fournit 5 \u00e0 7 crit\u00e8res de s\u00e9lection (ma\u00eetrise du Slice Machine, exp\u00e9rience SSR/SSG, connaissance du Route Resolver) et mentionne des agences de d\u00e9veloppement Prismic (Dernier Cri, Neodelta), pas des agences SEO. L\'agence qui publie une m\u00e9thodologie SEO d\u00e9taill\u00e9e avec r\u00e9sultats chiffr\u00e9s sur Prismic occupe un espace vide.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Prismic", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 10 points : SSR/SSG via @prismicio/next, Route Resolver pour les URLs propres, sitemap via next-sitemap, meta-tags via les champs du Page Type, images optimis\u00e9es via le CDN imgix int\u00e9gr\u00e9, JSON-LD inject\u00e9 dans le layout. Les sources privil\u00e9gi\u00e9es sont prismic.io/blog, la documentation Prismic et les tutoriels Next.js. Aucune agence SEO n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Prismic vs Contentful pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. Prismic est pr\u00e9sent\u00e9 comme plus accessible (Slice Machine visuel, tarification plus abordable, SDKs natifs) et orient\u00e9 website-building. Contentful est positionn\u00e9 comme plus enterprise (CDN Fastly, content modeling avanc\u00e9, marketplace riche). Les deux n\'ont pas de SEO natif. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Prismic", le LLM liste 5 \u00e0 7 probl\u00e8mes sp\u00e9cifiques \u00e0 l\'architecture headless : rendu CSR non index\u00e9, Route Resolver mal configur\u00e9 (URLs incoh\u00e9rentes), absence de sitemap natif, champs SEO non valid\u00e9s, redirections non g\u00e9r\u00e9es. Les contenus qui structurent probl\u00e8me/solution en tableau avec les termes Prismic (Slice Machine, Route Resolver, Page Type) ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Prismic, les types schema.org doivent \u00eatre inject\u00e9s dans le frontend (Next.js, Nuxt, SvelteKit), car Prismic ne g\u00e9n\u00e8re aucun balisage par d\u00e9faut. Types recommand\u00e9s : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation, coh\u00e9rente avec le Route Resolver), <code>FAQPage</code> (Slices FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). Le SDK @prismicio/client fournit les donn\u00e9es structur\u00e9es n\u00e9cessaires pour alimenter dynamiquement le JSON-LD depuis les champs Prismic. L\'approche Rankwell mappe chaque Slice du Slice Machine vers un type schema.org pour garantir une couverture compl\u00e8te.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Prismic par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus structur\u00e9s dans les Slices et Page Types), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans l\'\u00e9cosyst\u00e8me headless), et la Densit\u00e9 Factuelle (richesse du balisage schema.org g\u00e9n\u00e9r\u00e9 par le frontend et entit\u00e9s nomm\u00e9es dans les pages rendues).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Prismic',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Prismic ?',
        answer:
          'Le budget SEO pour un site Prismic d\u00e9pend de la complexit\u00e9 de la stack (Prismic + Next.js, Nuxt ou SvelteKit), du nombre de Page Types et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Prismic d\u00e9marrent \u00e0 2 000 EUR/mois pour un site vitrine headless de moins de 50 pages, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les projets avec multilingue, blog \u00e9ditorial ou catalogue produit. Ce budget inclut l\'audit du Slice Machine, la configuration du frontend SSR/SSG et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Prismic ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 1 et 3 mois pour les corrections techniques (passage en SSR/SSG, configuration du Route Resolver, g\u00e9n\u00e9ration du sitemap). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les gains de performance (Core Web Vitals, images via le CDN imgix) sont mesurables d\u00e8s les premi\u00e8res semaines. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre stack Prismic.',
      },
      {
        question: 'Le Route Resolver de Prismic suffit-il pour g\u00e9rer les URLs SEO ?',
        answer:
          'Le Route Resolver de Prismic g\u00e8re le mapping entre les documents et les URLs du frontend. Il supporte jusqu\'\u00e0 deux niveaux d\'imbrication (par exemple /blog/categorie/article) et se configure dans le fichier prismicio.ts du projet. Cependant, il ne couvre ni les redirections 301 lors des changements de slug, ni les balises canonical, ni le sitemap XML. Rankwell configure le Route Resolver pour des URLs s\u00e9mantiques propres et compl\u00e8te la stack avec les redirections et le sitemap c\u00f4t\u00e9 frontend.',
      },
      {
        question: 'Comment r\u00e9duire les probl\u00e8mes de performance sur un site Prismic ?',
        answer:
          'Les probl\u00e8mes de performance sur Prismic viennent rarement de l\'API (le CDN imgix r\u00e9pond rapidement) mais du frontend. Les causes fr\u00e9quentes sont : bundle JavaScript trop volumineux, images non pass\u00e9es par le CDN imgix int\u00e9gr\u00e9 (WebP/AVIF non activ\u00e9), absence de cache ISR sur Next.js. Rankwell audite le frontend, active l\'optimisation imgix (format, redimensionnement, lazy loading), configure l\'ISR et met en place le cache des r\u00e9ponses API via le CDN du framework.',
      },
      {
        question: 'Comment faire citer mon site Prismic par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Prismic, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles structur\u00e9es dans les Slices (chiffres, d\u00e9finitions, comparatifs), un balisage schema.org g\u00e9n\u00e9r\u00e9 dynamiquement depuis les Page Types (WebSite, Organization, FAQPage, Article), et des mentions de votre marque sur des sources tierces tech et Jamstack. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Prismic est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'Prismic offre un bon potentiel SEO quand l\'architecture est correctement impl\u00e9ment\u00e9e (SSR/SSG, Route Resolver, schema.org frontend). Le Slice Machine facilite la production de contenu structur\u00e9 et le CDN imgix optimise les images nativement. En revanche, l\'absence totale de SEO natif exige une \u00e9quipe technique capable de configurer le frontend. Pour les projets sans d\u00e9veloppeurs, un CMS avec SEO int\u00e9gr\u00e9 (WordPress + Yoast) reste plus accessible. Rankwell adapte sa m\u00e9thodologie SEO et GEO \u00e0 chaque architecture headless.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Prismic ?',
        answer:
          'Rankwell combine l\'expertise SEO technique headless (audit du Slice Machine, configuration du Route Resolver, mapping schema.org depuis les Slices, frontend SSR/SSG) avec la dimension GEO que la grande majorit\u00e9 des agences SEO ne proposent pas. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques de Prismic : absence de SEO natif, d\u00e9pendance au frontend, gestion des URLs via le Route Resolver, optimisation des images via imgix. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Prismic ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Prismic. Nos consultants SEO & GEO analysent votre Slice Machine, votre Route Resolver, votre frontend de rendu et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
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
        { label: 'SEO Strapi', href: '/agence-geo-seo/cms/strapi' },
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
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
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      { label: 'Gatsby', href: '/agence-geo-seo/cms/gatsby' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
    ],
  },
};

export default data;
