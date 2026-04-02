/**
 * DATA : Page CMS Nuxt.js (FR)
 * Route : /agence-geo-seo/cms/nuxtjs
 *
 * Nuxt.js = framework Vue.js avec SSR/SSG/ISR natif, auto-imports,
 * module @nuxtjs/seo (sitemap, robots, schema.org, OG image), Nuxt Content
 * (blog Markdown), composable useHead()/useSeoMeta().
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'nuxtjs',
    title: 'Agence SEO & GEO Nuxt.js - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Nuxt.js. Rendu hybride SSR/SSG, module @nuxtjs/seo, useSchemaOrg, Nuxt Content, auto-imports : m\u00e9thodologie compl\u00e8te pour Nuxt.js.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Nuxt.js' },
    ],
    title: 'SEO & GEO Nuxt.js : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Hydration mismatch, SSR d\u00e9sactiv\u00e9 par erreur, meta tags absents c\u00f4t\u00e9 serveur : le r\u00e9f\u00e9rencement d\'un site Nuxt.js exige une ma\u00eetrise du rendu hybride Vue.js et du module @nuxtjs/seo. Nos experts combinent SEO technique Nuxt.js et GEO pour positionner votre site sur Google et le faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Nuxt.js',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Nuxt.js (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Nuxt.js',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Nuxt.js alimente plus de 400 000 sites web</strong> et se positionne comme le framework Vue.js de r\u00e9f\u00e9rence pour le SEO. Son rendu hybride (SSR, SSG, ISR) d\u00e9livre du HTML complet \u00e0 Googlebot sans attendre l\'ex\u00e9cution JavaScript. Le module @nuxtjs/seo regroupe sitemap XML, robots.txt, schema.org, Open Graph et link checker en un seul package, un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Nuxt.js ne repr\u00e9sente que 0,3 % des sites web</strong>, contre 2,3 % pour Next.js, avec des ressources SEO sp\u00e9cifiques plus limit\u00e9es. Les erreurs d\'hydratation g\u00e9n\u00e8rent des incoh\u00e9rences dans le DOM visible par Googlebot, et si le SSR est d\u00e9sactiv\u00e9 (ssr: false), les pages deviennent invisibles pour les crawlers. Sans configuration explicite, le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> est gaspill\u00e9 sur des routes dynamiques non d\u00e9clar\u00e9es dans le sitemap.',
    geoAngle:
      'Selon Rankwell, Nuxt.js dispose d\'un levier de citabilit\u00e9 IA unique gr\u00e2ce au composable useSchemaOrg du module nuxt-schema-org : chaque page peut injecter un graphe JSON-LD type-safe (WebSite, Organization, FAQPage) directement depuis le code Vue. Cette capacit\u00e9 reste latente si le rendu hybride est mal configur\u00e9 et si les passages factuels sont noy\u00e9s dans des composants non rendus c\u00f4t\u00e9 serveur.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO technique en 2026 porte un double enjeu : garantir l\'accessibilit\u00e9 du site aux robots d\'indexation classiques (Googlebot, Bingbot) et aux robots des moteurs IA (GPTBot, ClaudeBot, PerplexityBot), car ces deux familles de crawlers ont des comportements distincts et leurs directives robots.txt doivent \u00eatre g\u00e9r\u00e9es s\u00e9par\u00e9ment.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'En savoir plus sur le SEO technique',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Nuxt.js et solutions',
    interpretation:
      'Ces probl\u00e8mes d\u00e9coulent de la flexibilit\u00e9 du rendu hybride de Nuxt.js : chaque route peut \u00eatre SSR, SSG, ISR ou CSR, ce qui multiplie les configurations possibles et les risques d\'erreur. Un audit technique identifie les routes concern\u00e9es et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Hydration mismatch entre rendu serveur et rendu client',
        'Contenu diff\u00e9rent index\u00e9 par Googlebot et vu par l\'utilisateur, erreurs console',
        'Audit des composants Vue avec rendu conditionnel (v-if sur des donn\u00e9es client-only), migration vers <ClientOnly> pour les blocs non essentiels au SEO',
      ],
      [
        'SSR d\u00e9sactiv\u00e9 sur des routes critiques (ssr: false dans routeRules)',
        'Pages invisibles pour Googlebot, z\u00e9ro indexation',
        'Audit de nuxt.config.ts et des routeRules, r\u00e9activation du SSR sur toutes les routes indexables, SSG via prerender pour les pages statiques',
      ],
      [
        'Meta tags d\u00e9finis dans onMounted() au lieu de useSeoMeta()',
        'Indexation sans titre ni description, CTR effondre dans les SERP',
        'Migration des meta tags vers useSeoMeta() (composable SSR-compatible), suppression des useHead() dans les hooks client-only',
      ],
      [
        'Sitemap incomplet : routes dynamiques absentes',
        'Google ne d\u00e9couvre pas les nouvelles pages, indexation partielle',
        'Configuration du module @nuxtjs/sitemap avec sources dynamiques (API, Nuxt Content), d\u00e9claration des patterns de routes dans nuxt.config.ts',
      ],
      [
        'Absence de schema.org ou balisage inject\u00e9 uniquement c\u00f4t\u00e9 client',
        'Pas de rich snippets, donn\u00e9es structur\u00e9es invisibles pour les LLM',
        'Installation de nuxt-schema-org, injection de JSON-LD via useSchemaOrg() dans chaque layout et page (WebSite, Organization, BreadcrumbList, FAQPage)',
      ],
      [
        'Nuxt Content : articles Markdown non g\u00e9n\u00e9r\u00e9s en SSG',
        'Articles rendus en CSR, d\u00e9lai d\'indexation, contenu absent du cache Google',
        'Activation de la prerender pour les routes /blog/* dans nuxt.config.ts, g\u00e9n\u00e9ration statique du sitemap Nuxt Content avec le module @nuxtjs/sitemap',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Nuxt.js',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Nuxt.js et de son \u00e9cosyst\u00e8me Vue.js.',
    steps: [
      {
        title: 'Audit technique Nuxt.js',
        subtitle: 'Analyse compl\u00e8te de la configuration Nuxt : nuxt.config.ts, routeRules, modules install\u00e9s, mode de rendu par route et Core Web Vitals.',
        items: [
          'V\u00e9rification du mode de rendu par route (SSR, SSG, ISR, CSR) via les routeRules',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Audit des modules install\u00e9s : @nuxtjs/seo, @nuxt/image, @nuxtjs/i18n, Nuxt Content',
          'D\u00e9tection des hydration mismatches via le mode de d\u00e9veloppement Nuxt et la comparaison View Source vs DOM rendu',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Nuxt.js dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Correction du rendu hybride',
        subtitle: 'R\u00e9solution des probl\u00e8mes de rendu qui bloquent l\'indexation : SSR d\u00e9sactiv\u00e9, hydration mismatches, meta tags absents c\u00f4t\u00e9 serveur.',
        items: [
          'R\u00e9activation du SSR sur les routes critiques, SSG via prerender pour les pages statiques',
          'Correction des hydration mismatches (composants <ClientOnly>, v-if sur process.client)',
          'Migration des meta tags de useHead()/onMounted() vers useSeoMeta() (SSR natif)',
          'Configuration des routeRules : SSR pour le dynamique, SSG pour le marketing, ISR avec stale-while-revalidate pour le contenu fr\u00e9quemment mis \u00e0 jour',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement en exploitant les auto-imports, le tree-shaking et le lazy loading natifs de Nuxt.js.',
        items: [
          'Audit du bundle via Nuxt DevTools (taille par chunk, code inutilis\u00e9)',
          'Activation du module @nuxt/image pour le lazy loading, le redimensionnement et la conversion WebP automatique',
          'Configuration du cache ISR (stale-while-revalidate) pour r\u00e9duire le TTFB des pages dynamiques',
          'V\u00e9rification que les auto-imports fonctionnent correctement (pas d\'imports manuels de composables Vue en double)',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet du module @nuxtjs/seo et de ses sous-modules pour maximiser le contr\u00f4le sur les balises, sitemaps et donn\u00e9es structur\u00e9es.',
        items: [
          'Installation et configuration de @nuxtjs/seo (sitemap, robots, schema.org, OG image, link checker)',
          'G\u00e9n\u00e9ration du sitemap XML dynamique avec d\u00e9claration des routes dynamiques et int\u00e9gration Nuxt Content',
          'Configuration du robots.txt via @nuxtjs/robots avec gestion explicite de GPTBot, ClaudeBot et PerplexityBot',
          'Injection de JSON-LD type-safe via useSchemaOrg() : WebSite, Organization, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Nuxt.js',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, en exploitant Nuxt Content pour le blog.',
        items: [
          'Cocon s\u00e9mantique structur\u00e9 via le syst\u00e8me de pages Nuxt (dossiers imbriqu\u00e9s dans /pages)',
          'Blog en Markdown avec Nuxt Content : articles g\u00e9n\u00e9r\u00e9s en SSG, front matter pour les meta tags, composants Vue dans le Markdown (MDC)',
          'Maillage interne g\u00e9r\u00e9 via les composants NuxtLink et les relations entre articles Nuxt Content',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs Vue.js, des communaut\u00e9s Nuxt.js et des comparateurs de frameworks JavaScript',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique (Vue.js News, DEV.to, Smashing Magazine)',
          'Mentions de marque dans des articles comparatifs de frameworks et des guides techniques Vue.js',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique de votre site Nuxt.js.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de route (SSR, SSG, ISR)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals, taux d\'indexation et statut des routeRules',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe de d\u00e9veloppement Vue.js, votre \u00e9quipe marketing ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Nuxt.js',
        description: 'Diagnostic complet de votre configuration Nuxt : nuxt.config.ts, routeRules par route (SSR/SSG/ISR/CSR), modules install\u00e9s (@nuxtjs/seo, @nuxt/image, Nuxt Content), Core Web Vitals, hydration mismatches, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Nuxt.js',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, inject\u00e9 via le composable useSchemaOrg() du module nuxt-schema-org. Le kit inclut les snippets Vue pr\u00eats \u00e0 int\u00e9grer dans vos layouts et pages.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration via Nuxt Content (articles Markdown avec front matter et composants MDC) ou directement dans les pages Vue avec useSeoMeta() pour les meta tags.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs Vue.js, des communaut\u00e9s Nuxt.js, des comparateurs de frameworks JavaScript et des m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique Nuxt.js (routeRules, Core Web Vitals, taux d\'indexation, statut des modules) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Nuxt.js dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Nuxt.js ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Le terrain est vierge : les contenus SEO sur Nuxt.js sont produits par nuxtseo.com (documentation technique) ou par des blogs de d\u00e9veloppeurs (Medium, DEV.to). Aucune agence SEO n\'est cit\u00e9e.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Nuxt.js ?", le LLM ne cite aucune agence SEO. Il explique que Nuxt.js est un framework Vue.js avec SSR/SSG int\u00e9gr\u00e9 et que le SEO n\u00e9cessite une ma\u00eetrise du rendu hybride et du module @nuxtjs/seo. Il mentionne des agences de d\u00e9veloppement Nuxt.js (Incrona, Neodelta, TheCodingMachine) mais aucune agence SEO. L\'agence qui publie un contenu structur\u00e9 sur le SEO Nuxt.js, avec m\u00e9thodologie et r\u00e9sultats, occupe un espace totalement vide.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Nuxt.js", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points centr\u00e9 sur le module @nuxtjs/seo, le composable useSeoMeta(), le rendu hybride (routeRules), le sitemap dynamique et l\'injection JSON-LD via nuxt-schema-org. Les sources privil\u00e9gi\u00e9es sont nuxtseo.com, la documentation officielle nuxt.com et des blogs techniques (Djamware, js-seo.org). Aucune agence SEO n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives</h4><p>Sur "Nuxt.js vs Next.js pour le SEO", le LLM produit un tableau comparatif o\u00f9 les deux frameworks sont pr\u00e9sent\u00e9s comme \u00e9quivalents. Nuxt.js est avantag\u00e9 par son module @nuxtjs/seo all-in-one, Next.js par son adoption plus large (2,3 % des sites contre 0,3 %). Les sites publiant des comparatifs structur\u00e9s avec des crit\u00e8res mesurables (Core Web Vitals, couverture schema.org, taux d\'indexation) sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Nuxt.js", le LLM fournit 6 \u00e0 8 probl\u00e8mes li\u00e9s au rendu hybride : hydration mismatch, SSR d\u00e9sactiv\u00e9, meta tags dans onMounted(), sitemap incomplet, absence de schema.org, images non optimis\u00e9es. Les contenus qui pr\u00e9sentent chaque probl\u00e8me avec une solution de configuration Nuxt pr\u00e9cise (routeRules, useSeoMeta, nuxt.config.ts) ont les meilleures chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Nuxt.js, le balisage schema.org s\'injecte via le module nuxt-schema-org (inclus dans @nuxtjs/seo) en utilisant le composable <code>useSchemaOrg()</code> type-safe. Types recommand\u00e9s : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus Nuxt Content). Le composable g\u00e9n\u00e8re un graphe JSON-LD valid\u00e9 \u00e0 la compilation, ce qui \u00e9limine les erreurs de balisage courantes. Les types sont d\u00e9finis dans le code Vue, pas dans un plugin externe, ce qui garantit un contr\u00f4le total par page.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Nuxt.js par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus rendus en SSR/SSG), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les communaut\u00e9s Vue.js et Nuxt.js), et la Densit\u00e9 Factuelle (richesse du balisage JSON-LD inject\u00e9 via useSchemaOrg et entit\u00e9s nomm\u00e9es dans les pages rendues c\u00f4t\u00e9 serveur).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Nuxt.js',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Nuxt.js ?',
        answer:
          'Le budget SEO pour un site Nuxt.js d\u00e9pend de la complexit\u00e9 du rendu hybride (SSR, SSG, ISR), du nombre de routes dynamiques et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Nuxt.js d\u00e9marrent \u00e0 2 000 EUR/mois pour un site vitrine de moins de 50 pages, et atteignent 4 000 \u00e0 7 000 EUR/mois pour les projets avec blog Nuxt Content, multilingue @nuxtjs/i18n ou architecture multi-domaines. Ce budget inclut l\'audit technique de la configuration Nuxt, l\'optimisation des routeRules et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Nuxt.js ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 1 et 3 mois pour les corrections techniques (r\u00e9activation du SSR, correction des hydration mismatches, configuration du sitemap via @nuxtjs/seo). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les gains de performance (Core Web Vitals, LCP) sont mesurables d\u00e8s les premi\u00e8res semaines gr\u00e2ce aux auto-imports et au tree-shaking natif de Nuxt. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre configuration.',
      },
      {
        question: 'Le module @nuxtjs/seo suffit-il pour le r\u00e9f\u00e9rencement ?',
        answer:
          '@nuxtjs/seo regroupe sitemap XML, robots.txt, schema.org (via nuxt-schema-org), images Open Graph (via nuxt-og-image), link checker et SEO utils en un seul package. C\'est le meilleur point de d\u00e9part technique pour Nuxt.js. Cependant, le module ne corrige pas les hydration mismatches, ne g\u00e8re pas les routeRules (SSR vs SSG vs ISR par route), ne r\u00e9dige pas de contenu optimis\u00e9 et ne d\u00e9veloppe pas l\'autorit\u00e9 du domaine. Rankwell configure le module ET pilote la strat\u00e9gie de contenu et de netlinking qui le compl\u00e8te.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Nuxt.js ?',
        answer:
          'La lenteur d\'un site Nuxt.js provient g\u00e9n\u00e9ralement de trois causes : bundles JavaScript trop volumineux (imports manuels au lieu des auto-imports Nuxt), images non optimis\u00e9es (absence du module @nuxt/image), et routes dynamiques sans cache ISR (stale-while-revalidate). Rankwell commence par auditer le bundle via Nuxt DevTools pour identifier les chunks surdimensionn\u00e9s, configure @nuxt/image pour le lazy loading et la conversion WebP, et active l\'ISR sur les routes \u00e0 fort trafic pour r\u00e9duire le TTFB.',
      },
      {
        question: 'Comment faire citer mon site Nuxt.js par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Nuxt.js, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (rendu en SSR ou SSG pour \u00eatre accessible aux crawlers IA), un balisage JSON-LD complet inject\u00e9 via useSchemaOrg() (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces (blogs Vue.js, presse sp\u00e9cialis\u00e9e, comparateurs). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'Nuxt.js est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'Nuxt.js est un excellent choix pour le SEO en 2026 gr\u00e2ce \u00e0 son rendu hybride (SSR, SSG, ISR), son module @nuxtjs/seo all-in-one et ses auto-imports qui r\u00e9duisent le bundle. Par rapport \u00e0 Next.js, Nuxt.js offre un \u00e9cosyst\u00e8me SEO plus centralis\u00e9 (un seul module vs plusieurs librairies). En revanche, la communaut\u00e9 est plus restreinte (0,3 % des sites contre 2,3 % pour Next.js) et les ressources SEO sp\u00e9cifiques sont moins nombreuses. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux sp\u00e9cificit\u00e9s de Nuxt.js et de l\'\u00e9cosyst\u00e8me Vue.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Nuxt.js ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Nuxt.js (audit de routeRules, configuration du rendu hybride SSR/SSG/ISR, module @nuxtjs/seo, useSchemaOrg, Nuxt Content, @nuxt/image) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques propres \u00e0 Nuxt.js : hydration mismatches, meta tags non rendus c\u00f4t\u00e9 serveur, sitemap dynamique, gestion des bots IA dans robots.txt. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Nuxt.js ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Nuxt.js. Nos consultants SEO & GEO analysent votre configuration de rendu hybride, vos routeRules, votre couverture schema.org via useSchemaOrg et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
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
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
        { label: 'SEO Gatsby', href: '/agence-geo-seo/cms/gatsby' },
        { label: 'SEO Strapi', href: '/agence-geo-seo/cms/strapi' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Gatsby', href: '/agence-geo-seo/cms/gatsby' },
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
    ],
  },
};

export default data;
