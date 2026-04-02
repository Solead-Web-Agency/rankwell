/**
 * DATA : Page CMS Gatsby (FR)
 * Route : /agence-geo-seo/cms/gatsby
 *
 * Gatsby = framework React SSG (Static Site Generation), racheté par Netlify en 2023.
 * Gatsby Cloud fermé en 2024. GraphQL data layer, gatsby-plugin-image, builds longs.
 * Ecosystème de plugins en stagnation, communauté en migration vers Next.js et Astro.
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'gatsby',
    title: 'Agence SEO & GEO Gatsby - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Gatsby. Audit technique SSG, GraphQL, gatsby-plugin-image, temps de build, schema.org : m\u00e9thodologie compl\u00e8te pour Gatsby.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Gatsby' },
    ],
    title: 'SEO & GEO Gatsby : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Temps de build qui explosent au-del\u00e0 de 5 000 pages, plugins non maintenus depuis la fermeture de Gatsby Cloud, absence de r\u00e9g\u00e9n\u00e9ration incr\u00e9mentale : le r\u00e9f\u00e9rencement d\'un site Gatsby pose des d\u00e9fis que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique React SSG et GEO pour positionner votre site sur Google et le faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Gatsby',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Gatsby (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Gatsby',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Gatsby alimente environ 43 000 sites actifs et d\u00e9tient 5,9 % du march\u00e9 des g\u00e9n\u00e9rateurs de sites statiques</strong>. Son pr\u00e9-rendu HTML complet au build rend chaque page imm\u00e9diatement crawlable par Googlebot sans ex\u00e9cution JavaScript. Le pipeline gatsby-plugin-image convertit automatiquement les images en WebP avec lazy loading, et le GraphQL data layer unifie les sources de donn\u00e9es. Cette architecture statique est un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Les builds Gatsby d\u00e9passent 30 minutes pour les sites de plus de 5 000 pages</strong>, sans Incremental Static Regeneration (ISR). Depuis la fermeture de Gatsby Cloud en 2024, plusieurs plugins populaires (gatsby-plugin-react-helmet, gatsby-remark-images) ne sont plus maintenus. Les probl\u00e8mes d\'<a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">hydratation React</a> (flash de contenu, CLS \u00e9lev\u00e9) p\u00e9nalisent les pages dynamiques, et chaque modification de contenu impose un rebuild complet.',
    geoAngle:
      'Selon Rankwell, les sites Gatsby disposent d\'un avantage structurel en citabilit\u00e9 IA gr\u00e2ce au HTML statique pr\u00e9-rendu que GPTBot et PerplexityBot crawlent sans barri\u00e8re JavaScript. Cette citabilit\u00e9 reste inactive si le schema.org n\'est pas inject\u00e9 dans les composants React, si les passages factuels ne sont pas structur\u00e9s pour l\'extraction par les LLM, et si les plugins SEO obsol\u00e8tes produisent des meta tags incomplets.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Gatsby et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Gatsby en production, en particulier ceux qui n\'ont pas migr\u00e9 vers Gatsby v5 ou qui utilisent des plugins non maintenus. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Temps de build > 30 min (sites de 5 000+ pages)',
        'D\u00e9lais de mise en production, contenu obsol\u00e8te index\u00e9 pendant des heures',
        'Optimisation des requ\u00eates GraphQL, r\u00e9duction du nombre de nodes, builds parall\u00e9lis\u00e9s, migration vers Gatsby v5 DSG (Deferred Static Generation)',
      ],
      [
        'gatsby-plugin-react-helmet d\u00e9pr\u00e9ci\u00e9 (remplac\u00e9 par Gatsby Head API en v4.19+)',
        'Meta tags manquants ou dupliqu\u00e9s, title/description absents sur certaines pages',
        'Migration vers Gatsby Head API : export du composant Head dans chaque template, suppression de react-helmet',
      ],
      [
        'Absence de schema.org par d\u00e9faut',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD (WebSite, Organization, BreadcrumbList, FAQPage) via le composant Head ou un composant SEO React d\u00e9di\u00e9',
      ],
      [
        'Hydratation React : flash de contenu et CLS \u00e9lev\u00e9',
        'Cumulative Layout Shift > 0.1, p\u00e9nalisation Core Web Vitals sur mobile',
        'Chargement diff\u00e9r\u00e9 des composants dynamiques (React.lazy + Suspense), CSS critique en inline, r\u00e9duction du JS client',
      ],
      [
        'Plugins non maintenus depuis la fermeture de Gatsby Cloud (2024)',
        'Failles de s\u00e9curit\u00e9, incompatibilit\u00e9s avec les versions r\u00e9centes de Node.js et React',
        'Audit de l\'\u00e9cosyst\u00e8me de plugins, remplacement des plugins abandonn\u00e9s par des alternatives actives ou du code custom',
      ],
      [
        'Pas d\'ISR : chaque modification oblige un rebuild complet',
        'Contenu p\u00e9rim\u00e9 rest\u00e9 en cache CDN, d\u00e9lai de publication de plusieurs dizaines de minutes',
        'Activation de DSG (Deferred Static Generation) en Gatsby v5, builds incr\u00e9mentaux via Netlify Build Plugins, ou \u00e9valuation d\'une migration vers Next.js ISR',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Gatsby',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Gatsby.',
    steps: [
      {
        title: 'Audit technique Gatsby',
        subtitle: 'Analyse compl\u00e8te de l\'architecture Gatsby : version du framework, GraphQL data layer, plugins install\u00e9s, temps de build et Core Web Vitals.',
        items: [
          'Inventaire des plugins (actifs, d\u00e9pr\u00e9ci\u00e9s, non maintenus depuis la fermeture de Gatsby Cloud)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) : analyse des probl\u00e8mes d\'hydratation React',
          'Audit du GraphQL data layer : requ\u00eates lentes, nodes excessifs, sources de donn\u00e9es non optimis\u00e9es',
          'V\u00e9rification de la version Gatsby (v4 vs v5), compatibilit\u00e9 Node.js et React',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Gatsby dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage de l\'\u00e9cosyst\u00e8me de plugins',
        subtitle: 'Suppression ou remplacement des plugins Gatsby d\u00e9pr\u00e9ci\u00e9s ou abandonn\u00e9s qui alourdissent les builds et cr\u00e9ent des incompatibilit\u00e9s.',
        items: [
          'Migration de gatsby-plugin-react-helmet vers Gatsby Head API',
          'Remplacement des plugins de transformation d\'images obsol\u00e8tes par gatsby-plugin-image',
          'Suppression des plugins source inutilis\u00e9s qui allongent les requ\u00eates GraphQL',
          'Mise \u00e0 jour des d\u00e9pendances critiques (gatsby-plugin-sharp, gatsby-transformer-sharp)',
        ],
      },
      {
        title: 'Optimisation de la performance et des builds',
        subtitle: 'R\u00e9duction des temps de build et am\u00e9lioration de la vitesse de chargement des pages g\u00e9n\u00e9r\u00e9es.',
        items: [
          'Optimisation des requ\u00eates GraphQL (filtres, limits, fragments partag\u00e9s)',
          'Activation de Deferred Static Generation (DSG) en Gatsby v5 pour les pages \u00e0 faible trafic',
          'Configuration du CDN (Netlify, Cloudflare) et des headers de cache',
          'Conversion syst\u00e9matique des images en WebP/AVIF via gatsby-plugin-image avec placeholders flous',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet du SEO on-page via les composants React et le fichier gatsby-node.js.',
        items: [
          'Composant Head avec title, meta description, canonical et Open Graph par template',
          'Sitemap XML via gatsby-plugin-sitemap (exclusion des pages non strat\u00e9giques)',
          'Robots.txt via gatsby-plugin-robots-txt avec directives sp\u00e9cifiques pour GPTBot et ClaudeBot',
          'Balisage schema.org inject\u00e9 en JSON-LD : WebSite, Organization, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Gatsby',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, int\u00e9gr\u00e9s via le data layer GraphQL.',
        items: [
          'Pages piliers + articles satellites aliment\u00e9s par un CMS headless (Contentful, Strapi, Markdown)',
          'Maillage interne g\u00e9r\u00e9 via les requ\u00eates GraphQL et les composants de navigation React',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google, int\u00e9gr\u00e9es comme content type dans le data layer',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs tech, plateformes Jamstack et communaut\u00e9s React/Gatsby',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique',
          'Mentions de marque dans des articles comparatifs SSG (Gatsby, Next.js, Astro, Hugo)',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et la sant\u00e9 technique Gatsby.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages statiques, articles, landing pages)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          'Suivi des temps de build, des Core Web Vitals et de la compatibilit\u00e9 des plugins Gatsby',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique, vos d\u00e9veloppeurs React ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Gatsby',
        description: 'Diagnostic complet de votre architecture Gatsby : inventaire des plugins (actifs, d\u00e9pr\u00e9ci\u00e9s, abandonn\u00e9s), temps de build, requ\u00eates GraphQL lentes, Core Web Vitals, probl\u00e8mes d\'hydratation React, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Gatsby',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, inject\u00e9 en JSON-LD dans le composant Head ou un composant SEO React d\u00e9di\u00e9. Guide d\'int\u00e9gration avec extraits de code pour vos d\u00e9veloppeurs.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration via le CMS headless connect\u00e9 au GraphQL data layer Gatsby (Contentful, Strapi, Markdown) ou par pull request sur le repository Git.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech, plateformes Jamstack, communaut\u00e9s React et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique Gatsby (temps de build, plugins, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Gatsby dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel framework React choisir pour le SEO ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site Gatsby n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Gatsby ?", le LLM ne cite aucune agence par son nom. Il explique que Gatsby est un framework React SSG et fournit une liste de 5 \u00e0 6 crit\u00e8res de s\u00e9lection : exp\u00e9rience en SSG et React, ma\u00eetrise du GraphQL data layer, connaissance de gatsby-plugin-image et des plugins SEO, capacit\u00e9 \u00e0 optimiser les temps de build. Les sources implicites sont la documentation officielle Gatsby et DigitalOcean. Le terrain est totalement vierge pour une agence SEO sp\u00e9cialis\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Gatsby", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant gatsby-plugin-react-helmet (ou Gatsby Head API), gatsby-plugin-sitemap, gatsby-plugin-image, JSON-LD, robots.txt et optimisation des requ\u00eates GraphQL. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont la doc officielle Gatsby, RankTracker et DigitalOcean.</p><h4>Requ\u00eates comparatives</h4><p>Sur "Gatsby vs Next.js pour le SEO en 2026", le LLM produit un comparatif de 6 \u00e0 8 crit\u00e8res. Gatsby est pr\u00e9sent\u00e9 comme sup\u00e9rieur pour les sites 100 % statiques, mais p\u00e9nalis\u00e9 par les builds longs, l\'absence d\'ISR et le d\u00e9clin de l\'\u00e9cosyst\u00e8me depuis la fermeture de Gatsby Cloud. Next.js domine pour les sites dynamiques et e-commerce. Les contenus structur\u00e9s avec des crit\u00e8res mesurables sont favoris\u00e9s.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Gatsby", le LLM fournit 6 \u00e0 8 probl\u00e8mes sp\u00e9cifiques : builds longs, plugins non maintenus, hydratation React, absence d\'ISR, GraphQL complexe. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour un site Gatsby, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). Gatsby ne g\u00e8re aucun balisage par d\u00e9faut : le JSON-LD doit \u00eatre inject\u00e9 manuellement dans le composant Head (Gatsby v4.19+) ou via un composant React SEO d\u00e9di\u00e9. Ce balisage permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs r\u00e9ponses.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Gatsby par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages). Les sites Gatsby b\u00e9n\u00e9ficient d\'un HTML statique compl\u00e8tement crawlable, mais leur Score GEO stagne si le balisage JSON-LD et les passages factuels ne sont pas int\u00e9gr\u00e9s dans les composants React.',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Gatsby',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Gatsby ?',
        answer:
          'Le budget SEO pour un site Gatsby d\u00e9pend du nombre de pages, de la complexit\u00e9 du GraphQL data layer et de l\'\u00e9tat des plugins install\u00e9s. Chez Rankwell, les accompagnements SEO Gatsby d\u00e9marrent \u00e0 1 500 EUR/mois pour un site de moins de 100 pages, et atteignent 3 000 \u00e0 5 000 EUR/mois pour les sites volumineux n\u00e9cessitant une optimisation des builds, une migration de plugins ou une refonte du balisage schema.org. Ce budget inclut l\'audit technique, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Gatsby ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 2 et 4 mois pour les corrections techniques (migration vers Gatsby Head API, optimisation des builds, nettoyage de plugins). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les am\u00e9liorations de performance (Core Web Vitals, temps de build r\u00e9duits) produisent des effets mesurables d\u00e8s les premi\u00e8res semaines. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre architecture Gatsby.',
      },
      {
        question: 'Faut-il migrer de gatsby-plugin-react-helmet vers Gatsby Head API ?',
        answer:
          'Depuis Gatsby v4.19, la Gatsby Head API remplace officiellement gatsby-plugin-react-helmet. L\'ancien plugin reste fonctionnel mais n\'est plus mis \u00e0 jour, ce qui cr\u00e9e des risques de compatibilit\u00e9 avec React 18+ et Node.js r\u00e9cent. La Head API est plus simple (un export Head par fichier page), plus performante (pas de d\u00e9pendance externe), et g\u00e8re nativement les balises title, meta, canonical et Open Graph. Rankwell accompagne cette migration et v\u00e9rifie que chaque template conserve ses meta tags apr\u00e8s la transition.',
      },
      {
        question: 'Comment r\u00e9duire les temps de build de mon site Gatsby ?',
        answer:
          'Les builds longs sur Gatsby proviennent de trois causes principales : requ\u00eates GraphQL non optimis\u00e9es (pas de filtres, pas de limits), trop de plugins source qui g\u00e9n\u00e8rent des milliers de nodes, et images non pr\u00e9-trait\u00e9es. Rankwell audite le data layer, r\u00e9duit les nodes superflus, optimise les fragments GraphQL partag\u00e9s, active Deferred Static Generation (DSG) en Gatsby v5 pour les pages \u00e0 faible trafic, et configure les builds parall\u00e9lis\u00e9s sur Netlify ou Vercel.',
      },
      {
        question: 'Comment faire citer mon site Gatsby par ChatGPT et Perplexity ?',
        answer:
          'Les sites Gatsby ont un avantage : le HTML statique pr\u00e9-rendu est compl\u00e8tement crawlable par GPTBot et PerplexityBot. Pour transformer cet avantage en citations, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions), un balisage JSON-LD complet inject\u00e9 dans les composants React (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces. Le Score GEO de Rankwell mesure ces trois dimensions.',
      },
      {
        question: 'Gatsby est-il toujours un bon choix pour le SEO en 2026 ?',
        answer:
          'Gatsby reste performant pour les sites statiques de petite \u00e0 moyenne taille (blogs, portfolios, sites documentaires) gr\u00e2ce \u00e0 son HTML pr\u00e9-rendu et son pipeline d\'images. Cependant, le d\u00e9clin de l\'\u00e9cosyst\u00e8me depuis la fermeture de Gatsby Cloud (2024), l\'absence d\'ISR natif et les builds longs sur les gros sites en font un choix limit\u00e9 face \u00e0 Next.js ou Astro. Rankwell conseille ses clients Gatsby sur l\'optimisation de l\'existant ou, si n\u00e9cessaire, sur la migration vers un framework plus adapt\u00e9.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Gatsby ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Gatsby (audit du GraphQL data layer, migration vers Head API, optimisation des builds, pipeline gatsby-plugin-image, injection de schema.org en React) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de Gatsby : plugins obsol\u00e8tes, builds longs, absence d\'ISR, hydratation React. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Gatsby ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Gatsby. Nos consultants SEO & GEO analysent votre architecture React, vos plugins, vos temps de build et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO Tech', href: '/agence-geo-seo/secteur/tech' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
        { label: 'SEO Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
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
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
    ],
  },
};

export default data;
