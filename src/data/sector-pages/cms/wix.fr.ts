/**
 * DATA : Page CMS Wix (FR)
 * Route : /agence-geo-seo/cms/wix
 *
 * Wix : plateforme SaaS, SEO Setup Checklist (ex-SEO Wiz), rendu SSR natif,
 * URLs ameliorees mais historique de mauvaise reputation SEO, Velo (JavaScript),
 * pas d'acces serveur. Contenu base sur auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'wix',
    title: 'Agence SEO & GEO Wix - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Wix. Audit technique, performance, schema.org, Velo : m\u00e9thodologie compl\u00e8te pour d\u00e9passer les limites de la plateforme.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Wix' },
    ],
    title: 'SEO & GEO Wix : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Rendu JavaScript, contr\u00f4le serveur inexistant, poids CSS/JS propri\u00e9taire non modifiable : le r\u00e9f\u00e9rencement d\'un site Wix impose des contraintes que le SEO g\u00e9n\u00e9raliste ignore. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Wix',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Wix (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Wix',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Wix domine le march\u00e9 des website builders avec 45 % de parts de march\u00e9</strong>. La plateforme propose un SSR natif, un sitemap XML automatique, un CDN mondial, le SSL int\u00e9gr\u00e9 et la conversion WebP automatique. Le SEO Setup Checklist guide la configuration des balises et textes alternatifs, ce qui facilite le travail initial d\'une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Les sites Wix affichent un temps de chargement moyen de 3 \u00e0 4 secondes</strong> \u00e0 cause d\'un JavaScript propri\u00e9taire non modifiable. Il n\'existe pas d\'acc\u00e8s au serveur ni de .htaccess, les noms de fichiers image sont cryptiques, et le code Velo n\'est pas interpr\u00e9t\u00e9 par tous les crawlers, cr\u00e9ant des risques d\'<a href="/glossaire/indexation" class="text-rw-blue hover:underline">indexation</a> incompl\u00e8te.',
    geoAngle:
      'Selon Rankwell, les sites Wix souffrent d\'un d\u00e9ficit de citabilit\u00e9 IA li\u00e9 \u00e0 la structure propri\u00e9taire de la plateforme : le manque de contr\u00f4le sur le code source et l\'absence de plugins SEO tiers limitent la production de signaux exploitables par les moteurs IA sans intervention technique via Velo.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Wix et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Wix non optimis\u00e9s par un sp\u00e9cialiste. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la visibilit\u00e9 dans les moteurs IA. Un audit technique identifie ceux qui s\'appliquent \u00e0 votre site et permet de prioriser les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Poids JavaScript/CSS propri\u00e9taire non modifiable',
        'LCP > 3s sur mobile, d\u00e9gradation des Core Web Vitals',
        'Optimisation des contenus charg\u00e9s (images WebP, lazy loading), suppression des sections et widgets inutilis\u00e9s, activation du CDN Wix',
      ],
      [
        'Noms de fichiers image cryptiques (09a0ab7~mv2.jpg)',
        'Perte de signal s\u00e9mantique dans Google Images, alt text insuffisant',
        'Renommage syst\u00e9matique des images avant upload, r\u00e9daction de textes alternatifs descriptifs int\u00e9grant les mots-cl\u00e9s cibles',
      ],
      [
        'Contr\u00f4le limit\u00e9 du robots.txt et absence de .htaccess',
        'Impossibilit\u00e9 de bloquer certaines URL parasites, gestion fine des directives impossible',
        'Utilisation du panneau SEO Wix pour les r\u00e8gles disponibles, noindex sur les pages non strat\u00e9giques via les param\u00e8tres de page',
      ],
      [
        'Contenu Velo (JavaScript client) invisible pour certains crawlers',
        'Pages partiellement index\u00e9es par les moteurs autres que Google',
        'Injection du seoMarkup sur les \u00e9l\u00e9ments custom, chargement des donn\u00e9es via datasets (SSR) plut\u00f4t que via code onReady()',
      ],
      [
        'Pagination non optimis\u00e9e sur les catalogues importants',
        'Dilution du crawl budget, pages profondes non index\u00e9es',
        'Architecture en silos th\u00e9matiques, liens internes contextuels vers les pages profondes, canonical tags sur les pages pagin\u00e9es',
      ],
      [
        'Absence de balisage schema.org avanc\u00e9 en natif',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD via Velo (wix-seo API) pour les types Organization, LocalBusiness, FAQPage, BreadcrumbList',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Wix',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Wix.',
    steps: [
      {
        title: 'Audit technique Wix',
        subtitle: 'Analyse compl\u00e8te de votre site Wix : configuration SEO Setup Checklist, performance, rendu JavaScript et Core Web Vitals.',
        items: [
          'V\u00e9rification de la configuration Wix SEO Setup Checklist (titles, meta descriptions, alt images)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du rendu SSR vs client-side : identification des contenus Velo non index\u00e9s',
          'Inventaire des pages index\u00e9es vs pages parasites (tags, filtres, pagination)',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Wix dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation de la structure',
        subtitle: 'Suppression des pages, sections et widgets inutilis\u00e9s qui alourdissent le site et diluent le signal th\u00e9matique.',
        items: [
          'Suppression des pages brouillon et des sections masqu\u00e9es non supprim\u00e9es',
          'Nettoyage des applications Wix App Market non utilis\u00e9es (chacune ajoute du JavaScript)',
          'Restructuration du menu de navigation pour refl\u00e9ter les silos th\u00e9matiques',
          'Mise en place de redirections 301 en masse via le gestionnaire Wix',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement dans les limites de la plateforme SaaS.',
        items: [
          'Compression et redimensionnement des images avant upload (Wix convertit en WebP automatiquement)',
          'Activation du lazy loading natif sur les \u00e9l\u00e9ments sous la ligne de flottaison',
          'R\u00e9duction du nombre de sections par page (chaque section ajoute du DOM)',
          'V\u00e9rification de l\'activation du CDN Wix et du cache navigateur',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet des options SEO Wix et injection de balisage structur\u00e9 via Velo.',
        items: [
          'URLs personnalis\u00e9es et descriptives pour chaque page, article et produit',
          'Sitemap XML v\u00e9rifi\u00e9 (exclusion des pages non strat\u00e9giques via noindex)',
          'Balisage schema.org inject\u00e9 via la wix-seo API : Organization, WebSite, BreadcrumbList, FAQPage',
          'Configuration des balises canonical et des meta robots page par page',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Wix',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s via le blog int\u00e9gr\u00e9 et les pages dynamiques de Wix.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s en cocon s\u00e9mantique via les cat\u00e9gories du blog Wix',
          'Maillage interne contextuel entre articles, pages statiques et collections dynamiques',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google, r\u00e9dig\u00e9es en passages factuels auto-suffisants',
          'Contenus charg\u00e9s via datasets (rendu SSR) pour garantir l\'indexation compl\u00e8te',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es et des mentions exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs tech, comparateurs de website builders et m\u00e9dias sectoriels',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique',
          'Mentions de marque dans des articles comparatifs (Wix vs WordPress, Wix vs Squarespace)',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages statiques, blog, collections)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et surveillance des mises \u00e0 jour Wix impactant le SEO',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe, votre webmaster Wix ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Wix',
        description: 'Diagnostic complet de votre site Wix : configuration SEO Setup Checklist, Core Web Vitals, rendu SSR vs Velo, pages index\u00e9es vs parasites, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Wix',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, inject\u00e9 via la wix-seo API (Velo). Guide d\'int\u00e9gration avec extraits de code pr\u00eats \u00e0 copier.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles de blog et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans l\'\u00e9diteur Wix ou via les collections de donn\u00e9es dynamiques (CMS Wix).',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech, comparateurs de website builders et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, surveillance des Core Web Vitals et des mises \u00e0 jour Wix impactant le r\u00e9f\u00e9rencement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Wix dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Wix ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Wix ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience Wix, ma\u00eetrise du SEO technique SaaS, r\u00e9f\u00e9rences clients) et renvoie vers des annuaires comme Sortlist ou des listes de classement. Quelques agences niches apparaissent dans les SERP Google (Promoovoir, Wixeo), mais les LLM ne les recommandent pas nommement. L\'agence qui publie une m\u00e9thodologie document\u00e9e avec des r\u00e9sultats mesurables a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Wix", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 12 points : nom de domaine personnalis\u00e9, HTTPS, SEO Setup Checklist, images compress\u00e9es, blog actif, sitemap automatique. Les sources privil\u00e9gi\u00e9es sont le Wix SEO Hub (wix.com/seo/learn), La Fabrique du Net et des blogs sp\u00e9cialis\u00e9s Wix. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Wix vs WordPress pour le SEO", le LLM produit un tableau de 6 \u00e0 8 crit\u00e8res. WordPress est pr\u00e9sent\u00e9 comme sup\u00e9rieur en flexibilit\u00e9 et performance (chargement < 2s vs 3-4s). Wix est reconnu pour sa simplicit\u00e9, ses outils int\u00e9gr\u00e9s et son SSR natif. Les sites publiant des comparatifs structur\u00e9s avec donn\u00e9es mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO sur Wix", le LLM distingue les limites de la plateforme (poids JS, robots.txt, noms d\'images) des erreurs utilisateur (blog inexploit\u00e9, meta descriptions vides). Les contenus structurant probl\u00e8me/impact/solution en tableau ou en liste num\u00e9rot\u00e9e ont la meilleure chance d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour un site Wix, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus du blog). Wix g\u00e9n\u00e8re un balisage de base automatiquement, mais les types avanc\u00e9s n\u00e9cessitent une injection via la wix-seo API (Velo). Ce balisage compl\u00e9mentaire permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs r\u00e9ponses.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Wix par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Wix',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Wix ?',
        answer:
          'Le budget SEO pour un site Wix d\u00e9pend du nombre de pages, de la complexit\u00e9 technique et du niveau de concurrence sur vos mots-cl\u00e9s. Chez Rankwell, les accompagnements SEO Wix d\u00e9marrent \u00e0 1 200 EUR/mois pour un site vitrine de moins de 30 pages, et atteignent 2 500 \u00e0 5 000 EUR/mois pour les sites avec blog actif, collections dynamiques ou boutique Wix eCommerce. Ce budget inclut l\'audit technique, l\'optimisation dans les limites de la plateforme, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Wix ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (nettoyage de pages, optimisation des images, configuration SEO Setup Checklist). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Sur Wix, les gains de performance sont limit\u00e9s par le poids du code propri\u00e9taire, ce qui rend la strat\u00e9gie de contenu et le netlinking d\'autant plus d\u00e9terminants. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial.',
      },
      {
        question: 'Faut-il passer de Wix \u00e0 WordPress pour un meilleur SEO ?',
        answer:
          'Pas forc\u00e9ment. En 2026, Wix offre un SSR natif, un sitemap automatique, un CDN int\u00e9gr\u00e9 et des URLs personnalisables. Pour un site vitrine ou un blog de moins de 200 pages, Wix peut atteindre de bonnes positions si le contenu et le netlinking sont travaill\u00e9s. En revanche, pour un catalogue e-commerce de plus de 1 000 r\u00e9f\u00e9rences ou un projet n\u00e9cessitant un contr\u00f4le technique total (robots.txt, .htaccess, cache serveur), WordPress ou une solution open source sera plus adapt\u00e9. Rankwell analyse votre situation avant de recommander une migration.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Wix ?',
        answer:
          'La lenteur d\'un site Wix provient principalement de trois facteurs : le poids du code JavaScript propri\u00e9taire (non modifiable), les images non compress\u00e9es avant upload, et l\'accumulation de sections et widgets sur une m\u00eame page. Rankwell intervient sur les leviers accessibles : compression des images en amont, suppression des sections et applications Wix App Market inutilis\u00e9es, activation du lazy loading et r\u00e9duction du nombre de polices charg\u00e9es. Ces optimisations permettent de gagner 0,5 \u00e0 1,5 seconde sur le LCP.',
      },
      {
        question: 'Comment faire citer mon site Wix par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Wix, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions), un balisage schema.org inject\u00e9 via la wix-seo API (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces fiables. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site, malgr\u00e9 les contraintes de la plateforme.',
      },
      {
        question: 'Wix est-il toujours un mauvais choix pour le SEO en 2026 ?',
        answer:
          'Non. La r\u00e9putation de Wix comme plateforme inadapt\u00e9e au SEO date d\'avant 2020, quand la plateforme reposait enti\u00e8rement sur du Flash puis du JavaScript client. En 2026, Wix propose le SSR natif, un CDN mondial, la conversion automatique en WebP, des URLs personnalisables et des balises canonical configurables. Les limites restantes concernent le poids du code propri\u00e9taire, l\'absence d\'acc\u00e8s serveur et le contr\u00f4le partiel du robots.txt. Rankwell adapte sa m\u00e9thodologie SEO et GEO \u00e0 ces contraintes sp\u00e9cifiques.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Wix ?',
        answer:
          'Rankwell combine l\'expertise SEO technique sur plateforme SaaS (audit de performance, injection schema.org via Velo, optimisation dans les limites Wix) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les contraintes propres \u00e0 Wix : absence d\'acc\u00e8s serveur, poids JavaScript non modifiable, balisage avanc\u00e9 via API. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Wix ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Wix. Nos consultants SEO & GEO analysent votre configuration, votre performance, votre balisage et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Artisan', href: '/agence-geo-seo/secteur/artisan' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
        { label: 'Indexation', href: '/glossaire/indexation' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Jimdo', href: '/agence-geo-seo/cms/jimdo' },
      { label: 'Weebly', href: '/agence-geo-seo/cms/weebly' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
    ],
  },
};

export default data;
