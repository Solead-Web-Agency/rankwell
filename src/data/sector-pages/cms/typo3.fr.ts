/**
 * DATA : Page CMS TYPO3 (FR)
 * Route : /agence-geo-seo/cms/typo3
 *
 * CMS enterprise open source d'origine allemande.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'typo3',
    title: 'Agence SEO & GEO TYPO3 - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site TYPO3. Audit technique, extensions SEO, TypoScript, multi-site, schema.org : m\u00e9thodologie compl\u00e8te pour TYPO3.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'TYPO3' },
    ],
    title: 'SEO & GEO TYPO3 : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Configuration TypoScript complexe, speaking URLs fragment\u00e9es entre arborescences de langue, extensions SEO limit\u00e9es en nombre : le r\u00e9f\u00e9rencement d\'un site TYPO3 exige une expertise technique que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique et GEO pour positionner votre site TYPO3 sur Google et dans les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO TYPO3',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur TYPO3 (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur TYPO3',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">TYPO3 alimente plus de 500 000 installations dans le monde</strong>, dont plus de 45 % en Allemagne, Autriche et Suisse. Ce CMS enterprise int\u00e8gre nativement multi-site, multilingue avec hreflang automatiques, redirections (depuis v9.5) et speaking URLs via le Site Management module. Cette architecture offre un contr\u00f4le structurel sup\u00e9rieur pour une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> avanc\u00e9e.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">40 \u00e0 45 % des installations TYPO3 tournent sur des versions non support\u00e9es</strong>, exposant ces sites \u00e0 des failles et des incompatibilit\u00e9s avec les extensions SEO r\u00e9centes. TYPO3 ne propose pas de schema.org natif : il faut installer brotkrueml/schema ou cs_seo. L\'\u00e9cosyst\u00e8me d\'extensions SEO reste restreint (une dizaine contre plusieurs centaines pour WordPress), et le d\u00e9ficit de d\u00e9veloppeurs TYPO3 hors zone DACH cr\u00e9e un <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">goulot d\'\u00e9tranglement technique</a> sur les projets francophones.',
    geoAngle:
      'Selon Rankwell, les sites TYPO3 multi-domaines disposent d\'un avantage structurel en citabilit\u00e9 IA gr\u00e2ce \u00e0 la gestion native des hreflang et de l\'arborescence multilingue, fournissant aux LLM des signaux de localisation clairs. Cette citabilit\u00e9 reste inactive tant que le balisage schema.org n\'est pas inject\u00e9 via une extension d\u00e9di\u00e9e et que les passages factuels ne sont pas structur\u00e9s pour l\'extraction.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur TYPO3 et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites TYPO3 non optimis\u00e9s, en particulier ceux rest\u00e9s sur des versions ant\u00e9rieures \u00e0 la v11. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre installation.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Speaking URLs mal configur\u00e9es (slugs dupliqu\u00e9s entre langues)',
        'Cannibalisation interne entre versions linguistiques, hreflang incoh\u00e9rents',
        'Audit des slugs par arborescence de langue dans le Site Management module, correction des doublons, v\u00e9rification crois\u00e9e des hreflang',
      ],
      [
        'Version TYPO3 obsol\u00e8te (v8, v9, v10 non support\u00e9es)',
        'Failles de s\u00e9curit\u00e9, incompatibilit\u00e9 avec les extensions SEO r\u00e9centes, perte de fonctionnalit\u00e9s',
        'Plan de migration vers TYPO3 v12 ou v13, audit de compatibilit\u00e9 des extensions, tests de non-r\u00e9gression SEO',
      ],
      [
        'Absence de balisage schema.org (pas natif dans TYPO3)',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Installation et configuration de brotkrueml/schema ou cs_seo, balisage WebSite, Organization, BreadcrumbList, FAQPage en JSON-LD',
      ],
      [
        'Meta-tags fragment\u00e9s (param\u00e8tres globaux vs page vs TypoScript)',
        'Titres en double, descriptions incoh\u00e9rentes, conflits de priorit\u00e9',
        'Centralisation via cs_seo ou Yoast for TYPO3, suppression des surcharges TypoScript obsol\u00e8tes, audit page par page',
      ],
      [
        'Cache mal configur\u00e9 (pages non mises en cache ou cache trop agressif)',
        'LCP > 3s, contenu p\u00e9rim\u00e9 servi aux crawlers',
        'Configuration du caching framework TYPO3 avec Redis ou Varnish, activation de StaticFileCache pour le cache HTML',
      ],
      [
        'Sitemap XML incluant des pages non strat\u00e9giques (archives, doublons, pages masqu\u00e9es)',
        'Dilution du crawl budget, indexation de pages inutiles',
        'Configuration du sitemap natif (ext:seo) avec exclusion des types de pages non pertinents, v\u00e9rification dans Google Search Console',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour TYPO3',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de TYPO3.',
    steps: [
      {
        title: 'Audit technique TYPO3',
        subtitle: 'Analyse compl\u00e8te de l\'installation TYPO3 : version du CMS, extensions actives, configuration TypoScript, Site Management et Core Web Vitals.',
        items: [
          'Inventaire des extensions install\u00e9es (actives, inactives, incompatibles avec la version courante)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (doublons multilingues, pages masqu\u00e9es)',
          'V\u00e9rification de la s\u00e9curit\u00e9 : version TYPO3, certificat SSL, headers HTTP, workspaces',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site TYPO3 dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (y compris ceux sur WordPress ou Drupal)',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des extensions',
        subtitle: 'Suppression des extensions obsol\u00e8tes ou redondantes qui alourdissent le site et cr\u00e9ent des conflits de configuration.',
        items: [
          'D\u00e9sactivation des extensions non utilis\u00e9es ou incompatibles avec la version TYPO3 courante',
          'Consolidation des extensions SEO : choix d\'un outil principal (cs_seo ou Yoast for TYPO3)',
          'Nettoyage des surcharges TypoScript h\u00e9rit\u00e9es de versions ant\u00e9rieures',
          'Mise \u00e0 jour des extensions critiques (brotkrueml/schema, StaticFileCache, redirects)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via le caching framework TYPO3, la compression et l\'optimisation des assets.',
        items: [
          'Configuration de StaticFileCache pour le cache HTML statique',
          'Mise en place de Redis ou Varnish comme backend de cache',
          'Conversion des images en WebP via FAL (File Abstraction Layer) avec lazy loading',
          'Minification CSS/JS via TypoScript (compressJs, compressCss, concatenateJs)',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet de l\'extension SEO core et des extensions tierces pour maximiser le contr\u00f4le sur les balises, sitemaps et donn\u00e9es structur\u00e9es.',
        items: [
          'Speaking URLs propres via le Site Management module (configuration par site et par langue)',
          'Sitemap XML configur\u00e9 via ext:seo (exclusion des pages non strat\u00e9giques)',
          'Hreflang automatiques v\u00e9rifi\u00e9s par arborescence multilingue',
          'Balisage schema.org : Organization, WebSite, BreadcrumbList, FAQPage via brotkrueml/schema',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu TYPO3',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, int\u00e9gr\u00e9s via les content elements TYPO3.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s en cocon s\u00e9mantique',
          'Maillage interne contextuel entre contenus via les content elements et TypoLink',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google, int\u00e9gr\u00e9es dans des content elements d\u00e9di\u00e9s',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks sp\u00e9cialis\u00e9s et des mentions exploitables par les moteurs IA.',
        items: [
          'Backlinks depuis des blogs techniques TYPO3 (T3Planet, b13, TYPO3 News), m\u00e9dias sectoriels et comparateurs',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique dans votre secteur',
          'Mentions de marque dans des guides comparatifs CMS et articles sp\u00e9cialis\u00e9s',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page (segment\u00e9es par langue pour les sites multi-domaines)',
          'Trafic organique segment\u00e9 par type de contenu et par version linguistique',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et de la sant\u00e9 technique TYPO3 (version, extensions, cache)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos \u00e9quipes techniques, votre agence TYPO3 ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique TYPO3',
        description: 'Diagnostic complet de votre installation TYPO3 : version du CMS, inventaire des extensions (actives, obsol\u00e8tes, en conflit), configuration TypoScript, Core Web Vitals, speaking URLs, hreflang et crawl budget, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org TYPO3',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, configur\u00e9 via brotkrueml/schema ou cs_seo. Guide d\'int\u00e9gration avec documentation TypoScript et Fluid pour votre \u00e9quipe.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans TYPO3 via les content elements natifs ou par acc\u00e8s backend avec gestion des workspaces pour la validation \u00e9ditoriale.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs TYPO3 (T3Planet, b13), m\u00e9dias techniques, comparateurs CMS et sites sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9 (segment\u00e9 par langue pour les multi-sites), trafic organique, \u00e9volution du Score GEO, sant\u00e9 technique TYPO3 (extensions, cache, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site TYPO3 dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site TYPO3 ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site TYPO3 ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de crit\u00e8res de s\u00e9lection (exp\u00e9rience TYPO3, ma\u00eetrise de TypoScript et Fluid, r\u00e9f\u00e9rences enterprise) et oriente vers le TYPO3 Partner Directory ou Sortlist. Le march\u00e9 est domin\u00e9 par les agences germanophones sp\u00e9cialis\u00e9es TYPO3. L\'agence qui publie une m\u00e9thodologie SEO sp\u00e9cifique TYPO3 avec des r\u00e9sultats chiffr\u00e9s a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site TYPO3", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 10 points couvrant le Site Management module, les speaking URLs, les extensions SEO (cs_seo, Yoast for TYPO3), le sitemap natif et le cache. Les sources privil\u00e9gi\u00e9es sont la documentation officielle (docs.typo3.org), T3Planet et b13.com. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "TYPO3 vs WordPress pour le SEO", le LLM produit un tableau de 5 \u00e0 7 crit\u00e8res. TYPO3 est positionn\u00e9 comme le choix enterprise (multi-site, s\u00e9curit\u00e9, multilingue natif) face \u00e0 WordPress (flexibilit\u00e9 plugins, accessibilit\u00e9 marketing). Les sites publiant des comparatifs avec crit\u00e8res mesurables et donn\u00e9es chiffr\u00e9es sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates d\'extensions SEO</h4><p>Sur "meilleures extensions SEO pour TYPO3", le LLM classe cs_seo, brotkrueml/schema, Yoast for TYPO3 et mindshape_seo avec leurs fonctionnalit\u00e9s et limites de compatibilit\u00e9 version. Il souligne que l\'\u00e9cosyst\u00e8me est plus restreint que celui de WordPress. Les contenus avec tableaux comparatifs d\'extensions sont privil\u00e9gi\u00e9s pour l\'extraction.</p>',
    structuredData:
      'Pour un site TYPO3, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). TYPO3 ne g\u00e8re pas nativement le schema.org : l\'extension brotkrueml/schema (compatible v12-v13) permet d\'injecter du JSON-LD propre via des ViewHelpers Fluid ou via la configuration TypoScript. L\'extension cs_seo ajoute \u00e9galement des options JSON-LD par page. Le balisage permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs r\u00e9ponses.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site TYPO3 par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour TYPO3',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site TYPO3 ?',
        answer:
          'Le budget SEO pour un site TYPO3 d\u00e9pend de la complexit\u00e9 de l\'installation (mono-site ou multi-domaines), du nombre de langues g\u00e9r\u00e9es et du niveau de concurrence sectoriel. Chez Rankwell, les accompagnements SEO TYPO3 d\u00e9marrent \u00e0 2 000 EUR/mois pour un site corporate mono-langue, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les installations multi-sites multilingues avec plusieurs dizaines de milliers de pages. Ce budget inclut l\'audit technique, la configuration des extensions SEO, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur TYPO3 ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (speaking URLs, cache, redirections). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les optimisations de performance TYPO3 (StaticFileCache, Redis, compression des assets) produisent des effets mesurables sur les Core Web Vitals d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre installation.',
      },
      {
        question: 'Faut-il choisir cs_seo ou Yoast SEO pour TYPO3 ?',
        answer:
          'cs_seo est l\'extension SEO la plus compl\u00e8te pour TYPO3 : SERP preview, analyse on-page, Open Graph, JSON-LD et compatibilit\u00e9 jusqu\'\u00e0 TYPO3 v11. Yoast SEO for TYPO3 apporte le readability scoring et l\'analyse de mots-cl\u00e9s, mais sa compatibilit\u00e9 s\'arr\u00eate \u00e0 TYPO3 v10. Pour les installations r\u00e9centes (v12, v13), cs_seo est le choix recommand\u00e9, compl\u00e9t\u00e9 par brotkrueml/schema pour le balisage JSON-LD avanc\u00e9. Rankwell configure l\'extension la mieux adapt\u00e9e \u00e0 votre version de TYPO3.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site TYPO3 ?',
        answer:
          'La lenteur d\'un site TYPO3 provient g\u00e9n\u00e9ralement de trois causes : cache mal configur\u00e9 (pages non mises en cache ou cache p\u00e9rim\u00e9), configuration TypoScript non optimis\u00e9e (CSS/JS non minifi\u00e9s, chargement synchrone), et absence de CDN. Rankwell commence par un audit de performance qui identifie les goulots : activation de StaticFileCache, mise en place de Redis comme backend de cache, compression et concat\u00e9nation des assets via TypoScript, conversion des images en WebP via le FAL, et mise en place d\'un CDN.',
      },
      {
        question: 'Comment faire citer mon site TYPO3 par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site TYPO3, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions), un balisage schema.org complet via brotkrueml/schema (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces (blogs techniques, presse sectorielle, annuaires sp\u00e9cialis\u00e9s). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'TYPO3 est-il toujours un bon CMS pour le SEO en 2026 ?',
        answer:
          'TYPO3 reste un CMS solide pour le SEO enterprise en 2026, gr\u00e2ce \u00e0 sa gestion native du multi-site, du multilingue (hreflang automatiques) et des workflows \u00e9ditoriaux. Ses limites sont l\'\u00e9cosyst\u00e8me d\'extensions SEO plus restreint que WordPress, l\'absence de schema.org natif, et la d\u00e9pendance \u00e0 des d\u00e9veloppeurs sp\u00e9cialis\u00e9s. TYPO3 convient aux grands groupes, aux sites institutionnels et aux projets multi-domaines. Pour les PME ou les sites vitrines, WordPress ou Webflow offrent un ratio effort/r\u00e9sultat plus favorable. Rankwell adapte sa m\u00e9thodologie aux sp\u00e9cificit\u00e9s de chaque CMS.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site TYPO3 ?',
        answer:
          'Rankwell combine l\'expertise SEO technique TYPO3 (audit d\'extensions, configuration TypoScript, speaking URLs, hreflang, schema.org via brotkrueml/schema) avec la dimension GEO que les agences TYPO3 traditionnelles n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de TYPO3 : gestion multi-site, multilingue, cache, extensions limit\u00e9es. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA, un angle mort de 93 % des agences SEO.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site TYPO3 ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site TYPO3. Nos consultants SEO & GEO analysent votre installation, vos extensions, votre configuration multi-site et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
        { label: 'SEO Assurance', href: '/agence-geo-seo/secteur/assurance' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Drupal', href: '/agence-geo-seo/cms/drupal' },
        { label: 'SEO Joomla', href: '/agence-geo-seo/cms/joomla' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'SEO international', href: '/glossaire/seo-international' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Drupal', href: '/agence-geo-seo/cms/drupal' },
      { label: 'Joomla', href: '/agence-geo-seo/cms/joomla' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
    ],
  },
};

export default data;
