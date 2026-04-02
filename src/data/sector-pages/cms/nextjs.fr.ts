/**
 * DATA : Page CMS Next.js (FR)
 * Route : /agence-geo-seo/cms/nextjs
 *
 * Framework React avec SSR/SSG/ISR natif, App Router, Metadata API.
 * Contenu enrichi via auto-test LLM et analyse concurrentielle (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'nextjs',
    title: 'Agence SEO & GEO Next.js - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Next.js. SSR, SSG, Metadata API, generateStaticParams, schema.org : m\u00e9thodologie compl\u00e8te pour Next.js.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Next.js' },
    ],
    title: 'SEO & GEO Next.js : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Rendu client-side qui bloque l\'indexation, m\u00e9tadonn\u00e9es dispers\u00e9es dans le code, absence de CMS int\u00e9gr\u00e9 pour la gestion de contenu : le r\u00e9f\u00e9rencement d\'un site Next.js exige une double expertise SEO et d\u00e9veloppement React. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Next.js',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Next.js (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Next.js',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Next.js propulse plus de 1,1 million de sites en production</strong> (Vercel, TikTok, Twitch, Notion). Ses trois modes de rendu natifs (SSR, SSG, ISR) servent du HTML complet aux robots sans plugin tiers. La Metadata API centralise les balises dans le code et <code>generateStaticParams</code> g\u00e9n\u00e8re des milliers de pages statiques au build, permettant une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> programmatique.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Un composant React rendu c\u00f4t\u00e9 client est invisible pour Googlebot pendant 5 \u00e0 10 secondes</strong>. Next.js n\'int\u00e8gre aucun CMS (headless CMS externe requis), le dossier <code>_next/</code> gaspille du <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> et le schema.org exige du JSON-LD inject\u00e9 manuellement dans chaque layout sans interface graphique.',
    geoAngle:
      'Selon Rankwell, le HTML g\u00e9n\u00e9r\u00e9 c\u00f4t\u00e9 serveur par Next.js est imm\u00e9diatement lisible par GPTBot et ClaudeBot, et le JSON-LD inject\u00e9 dans le code source fournit aux LLM des donn\u00e9es structur\u00e9es fiables. Cet avantage ne se concr\u00e9tise que si les composants critiques utilisent le SSR et si les passages factuels sont structur\u00e9s pour l\'extraction.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Next.js et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des sites Next.js dont l\'architecture n\'a pas \u00e9t\u00e9 pens\u00e9e pour le r\u00e9f\u00e9rencement. Un audit technique identifie lesquels impactent votre site et priorise les corrections selon leur effet sur le positionnement Google et la citabilit\u00e9 IA.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Composants rendus c\u00f4t\u00e9 client (CSR) au lieu du serveur',
        'Contenu invisible pour Googlebot et les robots IA jusqu\'\u00e0 l\'ex\u00e9cution du JS',
        'Audit composant par composant : migration vers les Server Components (RSC) de l\'App Router pour tout contenu indexable',
      ],
      [
        'M\u00e9tadonn\u00e9es absentes ou dupliqu\u00e9es sur les pages dynamiques',
        'Titres et descriptions identiques sur des centaines de pages g\u00e9n\u00e9r\u00e9es par generateStaticParams',
        'Configuration de la Metadata API avec generateMetadata() dynamique et template de titre par segment de route',
      ],
      [
        'Dossier _next/ crawl\u00e9 par les robots',
        'Gaspillage de crawl budget sur les fichiers JS/CSS/images statiques',
        'Blocage de /_next/ dans le robots.txt, v\u00e9rification que le SSR ne d\u00e9pend pas de ces URL pour le rendu',
      ],
      [
        'Absence de schema.org (pas de plugin natif)',
        'Pas de rich snippets, donn\u00e9es non structur\u00e9es pour les LLM',
        'Injection de JSON-LD dans les layouts et pages via des composants React d\u00e9di\u00e9s (WebSite, Organization, BreadcrumbList, FAQPage)',
      ],
      [
        'Hydratation lente sur les pages lourdes (Suspense, streaming)',
        'LCP > 3s sur mobile, CLS li\u00e9 au chargement progressif des composants',
        'D\u00e9coupage des composants lourds avec dynamic() et loading.tsx, pr\u00e9chargement des donn\u00e9es critiques dans le layout serveur',
      ],
      [
        'CMS headless mal configur\u00e9 (Strapi, Contentful, Prismic)',
        'Contenu non revalid\u00e9 apr\u00e8s publication, pages obsol\u00e8tes en cache',
        'Configuration d\'ISR (Incremental Static Regeneration) avec revalidation par webhook depuis le headless CMS',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Next.js',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Next.js.',
    steps: [
      {
        title: 'Audit technique Next.js',
        subtitle: 'Analyse de l\'architecture Next.js : mode de rendu par page (SSR, SSG, CSR, ISR), configuration de l\'App Router et Core Web Vitals.',
        items: [
          'Cartographie des pages par mode de rendu (Server Components vs Client Components)',
          'Mesure des Core Web Vitals (LCP, INP, CLS) sur mobile et desktop via Lighthouse CI',
          'Analyse du crawl budget : pages index\u00e9es vs URL _next/ gaspill\u00e9es dans les logs serveur',
          'V\u00e9rification de la configuration du headless CMS (Strapi, Contentful, Prismic) et du pipeline de revalidation',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Next.js dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'V\u00e9rification que le HTML rendu c\u00f4t\u00e9 serveur est accessible \u00e0 GPTBot et ClaudeBot (pas bloqu\u00e9 par robots.txt)',
        ],
      },
      {
        title: 'Rationalisation de l\'architecture de rendu',
        subtitle: 'Migration des composants critiques de CSR vers SSR/SSG pour garantir l\'indexabilit\u00e9 du contenu par Google et les robots IA.',
        items: [
          'Identification des composants Client qui devraient \u00eatre Server Components',
          'Configuration de generateStaticParams pour la g\u00e9n\u00e9ration statique des pages \u00e0 fort volume',
          'Mise en place d\'ISR avec revalidation par webhook pour le contenu dynamique',
          'Suppression du JavaScript mort et des d\u00e9pendances npm inutilis\u00e9es (tree shaking, analyse du bundle)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration des Core Web Vitals via les outils natifs de Next.js : next/image, next/font, next/script.',
        items: [
          'Conversion des images via next/image (WebP automatique, lazy loading, dimensionnement responsive)',
          'Chargement des polices via next/font pour \u00e9liminer le FOUT (Flash of Unstyled Text)',
          'Configuration de next/script avec strategy="lazyOnload" pour les scripts tiers non critiques',
          'D\u00e9ploiement sur Vercel ou CDN edge pour servir les pages depuis le point de pr\u00e9sence le plus proche',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet de la Metadata API, du sitemap dynamique et du balisage schema.org via des composants React d\u00e9di\u00e9s.',
        items: [
          'Metadata API : generateMetadata() dynamique par page avec template de titre par segment',
          'Sitemap XML dynamique via app/sitemap.ts avec exclusion des routes techniques',
          'robots.txt configur\u00e9 dans app/robots.ts : blocage de /_next/, gestion fine de GPTBot et ClaudeBot',
          'Balisage schema.org : composants JSON-LD pour WebSite, Organization, BreadcrumbList, FAQPage, Article',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu pour Next.js',
        subtitle: 'Production de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 IA, int\u00e9gr\u00e9s via le headless CMS.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s en cocon s\u00e9mantique dans le headless CMS',
          'Maillage interne contextuel entre pages g\u00e9n\u00e9r\u00e9es par generateStaticParams',
          'FAQ th\u00e9matiques structur\u00e9es en JSON-LD FAQPage pour l\'extraction par les LLM',
          'Passages factuels auto-suffisants int\u00e9gr\u00e9s dans chaque page (d\u00e9finitions, chiffres, comparatifs)',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s tech et des mentions exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs tech, publications React/JavaScript et comparateurs de frameworks',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique (d\u00e9veloppement web, SaaS)',
          'Mentions de marque dans des articles comparatifs et \u00e9tudes de cas techniques',
          'Chaque mention externe renforce le Domain Rating et la citabilit\u00e9 IA de la marque',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique du site Next.js.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page (suivi des pages SSR vs SSG)',
          'Trafic organique segment\u00e9 par type de contenu et par source de rendu',
          'Score GEO : visibilit\u00e9 dans les moteurs IA (ChatGPT, Perplexity, Gemini)',
          '\u00c9volution des Core Web Vitals et monitoring des erreurs d\'indexation dans la Search Console',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos d\u00e9veloppeurs React, votre \u00e9quipe produit ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Next.js',
        description: 'Diagnostic complet de votre architecture Next.js : cartographie SSR/SSG/CSR par page, Core Web Vitals, analyse du bundle JavaScript, configuration du headless CMS, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Next.js',
        description: 'Composants React JSON-LD pr\u00eats \u00e0 int\u00e9grer dans l\'App Router : WebSite, Organization, BreadcrumbList, FAQPage, Article et types sp\u00e9cifiques \u00e0 votre activit\u00e9. Code TypeScript document\u00e9 avec instructions d\'int\u00e9gration pour vos d\u00e9veloppeurs.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages et articles optimis\u00e9s SEO et GEO. Int\u00e9gration dans votre headless CMS (Strapi, Contentful, Prismic) ou directement dans les fichiers MDX du projet Next.js.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech, publications React/JavaScript, comparateurs de frameworks et m\u00e9dias sp\u00e9cialis\u00e9s SaaS. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par mode de rendu (SSR/SSG), \u00e9volution du Score GEO, Core Web Vitals et recommandations d\'ajustement technique.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Next.js dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Next.js ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Next.js ?", le LLM ne cite aucune agence par son nom. Il liste des crit\u00e8res de s\u00e9lection (ma\u00eetrise du SSR, exp\u00e9rience React, configuration des Metadata API) et renvoie vers des annuaires ou des classements g\u00e9n\u00e9ralistes. Les agences de d\u00e9veloppement Next.js (ID Interactive, Premier Octet) sont parfois mentionn\u00e9es, mais jamais pour leur expertise SEO. L\'agence qui combine expertise technique Next.js et m\u00e9thodologie SEO document\u00e9e a le potentiel d\'\u00eatre cit\u00e9e en premier.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Next.js", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 6 \u00e0 8 points : strat\u00e9gies de rendu (SSR, SSG, ISR), Metadata API, composant next/image, JSON-LD, Core Web Vitals et outils de suivi. Les sources privil\u00e9gi\u00e9es sont la documentation officielle Next.js, le Vercel Blog et les articles Strapi. Le contenu est fortement orient\u00e9 d\u00e9veloppeur. Aucune agence SEO n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives</h4><p>Sur "Next.js vs WordPress pour le SEO", le LLM produit un comparatif de 5 \u00e0 6 crit\u00e8res : performance, controle du rendu, \u00e9cosyst\u00e8me plugins, co\u00fbts et maintenance. Next.js est pr\u00e9sent\u00e9 comme sup\u00e9rieur en performance et en contr\u00f4le du HTML, mais plus exigeant en comp\u00e9tences techniques. Les sites publiant des comparatifs avec donn\u00e9es mesur\u00e9es (Core Web Vitals, TTFB) sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Next.js", le LLM liste 6 \u00e0 8 probl\u00e8mes : rendu CSR non index\u00e9, m\u00e9tadonn\u00e9es dupliqu\u00e9es, dossier _next/ crawl\u00e9, schema.org absent, hydratation lente et gestion du streaming/Suspense. Les sources sont la documentation officielle, des articles Medium et des discussions GitHub (vercel/next.js). Les contenus structur\u00e9s en tableau probl\u00e8me/solution sont favoris\u00e9s pour l\'extraction.</p>',
    structuredData:
      'Pour un site Next.js, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). Next.js ne dispose pas de plugin SEO int\u00e9gr\u00e9 : le balisage s\'impl\u00e9mente via des composants React qui injectent du JSON-LD dans le <code>&lt;head&gt;</code> de chaque page. La biblioth\u00e8que <code>next-seo</code> simplifie cette injection, mais la Metadata API native de l\'App Router (Next.js 14+) offre une alternative sans d\u00e9pendance externe.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Next.js par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus rendus c\u00f4t\u00e9 serveur), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks depuis des sources tech, mentions dans des publications React/JavaScript), et la Densit\u00e9 Factuelle (richesse du balisage JSON-LD inject\u00e9 dans le code source et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Next.js',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Next.js ?',
        answer:
          'Le budget SEO pour un site Next.js d\u00e9pend de la complexit\u00e9 de l\'architecture (nombre de pages g\u00e9n\u00e9r\u00e9es par generateStaticParams, configuration du headless CMS, modes de rendu utilis\u00e9s). Chez Rankwell, les accompagnements SEO Next.js d\u00e9marrent \u00e0 2 000 EUR/mois pour un site de moins de 100 pages, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les applications avec des milliers de pages dynamiques (e-commerce headless, marketplace, SaaS). Ce budget inclut l\'audit technique, l\'optimisation de l\'architecture de rendu, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Next.js ?',
        answer:
          'Les corrections techniques (migration CSR vers SSR, configuration de la Metadata API, optimisation du robots.txt) produisent des effets mesurables d\u00e8s le premier mois dans la Search Console. Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu sur le contenu et le netlinking. L\'avantage de Next.js est que les optimisations de performance (next/image, next/font, ISR) am\u00e9liorent les Core Web Vitals rapidement. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre architecture.',
      },
      {
        question: 'Faut-il utiliser next-seo ou la Metadata API native de Next.js ?',
        answer:
          'Les deux approches sont valides. La Metadata API native de l\'App Router (Next.js 14+) g\u00e8re les balises title, description et Open Graph sans d\u00e9pendance externe, avec generateMetadata() pour les pages dynamiques. La biblioth\u00e8que next-seo ajoute des composants JSON-LD pr\u00eats \u00e0 l\'emploi (FAQPage, Article, Product) et simplifie la gestion du schema.org. Rankwell recommande la Metadata API native pour les m\u00e9tadonn\u00e9es de base et next-seo (ou des composants JSON-LD custom) pour les donn\u00e9es structur\u00e9es avanc\u00e9es.',
      },
      {
        question: 'Comment r\u00e9soudre les probl\u00e8mes d\'indexation li\u00e9s au rendu JavaScript ?',
        answer:
          'Le probl\u00e8me principal est le rendu c\u00f4t\u00e9 client (CSR) : les composants marqu\u00e9s "use client" ne sont pas rendus dans le HTML initial envoy\u00e9 \u00e0 Googlebot. Rankwell audite chaque page pour identifier les composants qui devraient utiliser le rendu serveur (Server Components). La migration vers les RSC de l\'App Router garantit que le contenu indexable est pr\u00e9sent dans le HTML source. Pour les composants interactifs, on utilise le pattern "progressive enhancement" : contenu statique en SSR, interactivit\u00e9 en CSR.',
      },
      {
        question: 'Comment faire citer mon site Next.js par ChatGPT et Perplexity ?',
        answer:
          'Les moteurs IA citent les sites dont le contenu est accessible sans ex\u00e9cution JavaScript (HTML rendu c\u00f4t\u00e9 serveur), riche en donn\u00e9es factuelles v\u00e9rifiables et structur\u00e9 en JSON-LD. Next.js offre un avantage natif gr\u00e2ce au SSR, mais il faut que les passages factuels soient explicites et que les robots IA (GPTBot, ClaudeBot) ne soient pas bloqu\u00e9s par le robots.txt. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'Next.js est-il le meilleur framework pour le SEO en 2026 ?',
        answer:
          'Next.js est le framework React le plus performant pour le SEO en 2026, gr\u00e2ce \u00e0 ses trois modes de rendu natifs (SSR, SSG, ISR), sa Metadata API int\u00e9gr\u00e9e et ses optimisations de performance (next/image, next/font). Nuxt.js offre un avantage similaire dans l\'\u00e9cosyst\u00e8me Vue.js. WordPress reste plus accessible pour les sites \u00e9ditoriaux sans \u00e9quipe de d\u00e9veloppement. Le choix d\u00e9pend de vos ressources techniques : Next.js exige une \u00e9quipe React. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux sp\u00e9cificit\u00e9s de chaque stack technique.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Next.js ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Next.js (audit de l\'architecture SSR/SSG, configuration de la Metadata API, composants JSON-LD, optimisation des Core Web Vitals) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques de Next.js : rendu client-side non index\u00e9, headless CMS mal configur\u00e9, schema.org absent, dossier _next/ crawl\u00e9 par les bots. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Next.js ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Next.js. Nos consultants SEO & GEO analysent votre architecture de rendu, votre configuration Metadata API, vos Core Web Vitals et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
        { label: 'SEO Gatsby', href: '/agence-geo-seo/cms/gatsby' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      { label: 'Gatsby', href: '/agence-geo-seo/cms/gatsby' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
    ],
  },
};

export default data;
