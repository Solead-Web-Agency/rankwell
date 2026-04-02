/**
 * DATA : Page CMS Joomla (FR)
 * Route : /agence-geo-seo/cms/joomla
 *
 * Joomla : CMS open source, architecture ACL avancee, multilingue natif,
 * communaute en declin (de 10.9 % a 1.8 % de part de marche entre 2011 et 2025).
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'joomla',
    title: 'Agence SEO & GEO Joomla - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Joomla. Meta-tags, \u00e9l\u00e9ments de menu, 4SEO, contenu dupliqu\u00e9, migration Joomla 5 : m\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Joomla' },
    ],
    title: 'SEO & GEO Joomla : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Meta-tags r\u00e9partis entre configuration globale, articles et \u00e9l\u00e9ments de menu, contenu dupliqu\u00e9 par les liens de menu multiples, URLs complexes avec identifiants num\u00e9riques : le r\u00e9f\u00e9rencement d\'un site Joomla exige une expertise sp\u00e9cifique. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et le rendre citable par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Joomla',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Joomla (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Joomla',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Joomla alimente environ 1,8 % des sites web dans le monde</strong> avec des fonctionnalit\u00e9s SEO natives sup\u00e9rieures \u00e0 WordPress par d\u00e9faut : meta-tags par article et par menu, r\u00e9\u00e9criture d\'URL SEF int\u00e9gr\u00e9e, multilingue natif (70+ packs). Joomla 5 int\u00e8gre 7 plugins <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">schema.org</a> natifs, permettant un <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> sans extension tierce pour le balisage de base.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">60 % des sites Joomla tournent encore sur la version 3.x</strong>, priv\u00e9e de correctifs de s\u00e9curit\u00e9. Les meta-tags se r\u00e9partissent entre param\u00e8tres globaux, articles et menus sans hi\u00e9rarchie claire, cr\u00e9ant conflits et doublons. Plusieurs menus pointant vers un m\u00eame article g\u00e9n\u00e8rent des URLs distinctes, source de <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">cannibalisation SEO</a> sans canonical explicite.',
    geoAngle:
      'Selon Rankwell, les sites Joomla 5 disposent d\'un avantage en citabilit\u00e9 IA gr\u00e2ce au multilingue natif et aux 7 plugins schema.org int\u00e9gr\u00e9s. Cet avantage reste latent tant que les meta-tags sont dispers\u00e9s entre configuration globale, articles et menus sans gouvernance unifi\u00e9e.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Joomla et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des sites Joomla non optimis\u00e9s, en particulier ceux encore sous Joomla 3.x. Chacun d\u00e9grade le positionnement Google et limite la citabilit\u00e9 par les moteurs IA. Un audit technique sp\u00e9cifique Joomla identifie lesquels touchent votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'URLs complexes avec identifiants (/index.php?option=com_content&id=123)',
        'URL non lisible, perte de signal s\u00e9mantique, CTR r\u00e9duit dans les SERP',
        'Activation des SEF URLs + reecriture mod_rewrite dans .htaccess, configuration de 4SEF pour des URLs propres sans identifiant',
      ],
      [
        'Contenu dupliqu\u00e9 via \u00e9l\u00e9ments de menu multiples',
        'Plusieurs URLs pour le m\u00eame article, dilution du crawl budget et cannibalisation',
        'Audit des \u00e9l\u00e9ments de menu, canonical tags via 4SEO, r\u00e8gle "un article = un seul chemin de menu"',
      ],
      [
        'Meta-tags dispers\u00e9s (global / article / menu)',
        'Conflits de title et description, meta vides ou dupliqu\u00e9es',
        'Gouvernance centralis\u00e9e via 4SEO avec r\u00e8gles de priorit\u00e9 (menu > article > global), audit exhaustif des 3 niveaux',
      ],
      [
        'Version Joomla 3.x obsolete (60 % des sites)',
        'Failles de s\u00e9curit\u00e9, pas de schema.org natif, pas de canonical int\u00e9gr\u00e9',
        'Plan de migration Joomla 3 vers Joomla 5 avec audit SEO pr\u00e9/post migration, redirections 301 et contr\u00f4le des URLs',
      ],
      [
        'Absence de schema.org ou balisage limit\u00e9 au type Article',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Activation des 7 plugins schema.org natifs de Joomla 5, compl\u00e9ment par Google Structured Data (extension Tassos) pour les types sp\u00e9cifiques',
      ],
      [
        'Performance m\u00e9diocre (extensions lourdes, pas de cache)',
        'LCP > 4s sur mobile, perte de positions',
        'Activation du cache natif Joomla, minification CSS/JS via JCH Optimize, CDN, audit des extensions non utilis\u00e9es',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Joomla',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Joomla.',
    steps: [
      {
        title: 'Audit technique Joomla',
        subtitle: 'Analyse compl\u00e8te de l\'installation Joomla : version du CMS, extensions actives, configuration des \u00e9l\u00e9ments de menu, \u00e9tat des meta-tags et Core Web Vitals.',
        items: [
          'Inventaire des extensions (actives, d\u00e9sactiv\u00e9es, incompatibles Joomla 5)',
          'Cartographie des \u00e9l\u00e9ments de menu et d\u00e9tection des chemins dupliqu\u00e9s',
          'Audit des meta-tags sur les 3 niveaux (global, article, menu) pour rep\u00e9rer conflits et doublons',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Joomla dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des extensions',
        subtitle: 'Suppression des extensions inutilis\u00e9es ou incompatibles qui alourdissent le site et g\u00e9n\u00e8rent des conflits techniques.',
        items: [
          'D\u00e9sinstallation des extensions obsol\u00e8tes (sh404SEF, JoomSEF) et migration vers 4SEO',
          'Suppression des composants inactifs qui chargent encore du CSS/JS en front',
          'Rationalisation des templates : un seul template actif optimis\u00e9 pour la performance',
          'Nettoyage de la base de donn\u00e9es (tables orphelines des extensions d\u00e9sinstall\u00e9es)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via le cache natif Joomla, la compression des assets et l\'optimisation des images.',
        items: [
          'Activation et configuration du cache natif Joomla (progressif ou conservateur selon le site)',
          'Minification et concat\u00e9nation CSS/JS via JCH Optimize',
          'Conversion des images en WebP avec lazy loading',
          'Mise en place d\'un CDN (Cloudflare, BunnyCDN) et configuration du .htaccess pour la compression Gzip',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e Joomla',
        subtitle: 'Param\u00e9trage complet de 4SEO et des options natives Joomla pour unifier la gestion des meta-tags, sitemaps et donn\u00e9es structur\u00e9es.',
        items: [
          'SEF URLs activ\u00e9es avec reecriture mod_rewrite, suppression de /index.php/ du chemin',
          'Gouvernance des meta-tags : r\u00e8gles de priorit\u00e9 menu > article > global via 4SEO',
          'Sitemap XML configur\u00e9 (exclusion des pages non strat\u00e9giques, articles en double)',
          'Balisage schema.org via les 7 plugins natifs Joomla 5 + Google Structured Data pour les types sp\u00e9cifiques',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Joomla',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, int\u00e9gr\u00e9s via l\'\u00e9diteur natif Joomla.',
        items: [
          'Cat\u00e9gories Joomla organis\u00e9es en cocon s\u00e9mantique (une cat\u00e9gorie = un cluster th\u00e9matique)',
          'Maillage interne contextuel entre articles via les options de liens natifs Joomla',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google, balis\u00e9es en FAQPage schema.org',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des sites institutionnels, m\u00e9dias sp\u00e9cialis\u00e9s et annuaires sectoriels',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique',
          'Mentions de marque dans des articles comparatifs et guides de migration Joomla',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par cat\u00e9gorie Joomla',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi de la sant\u00e9 technique Joomla (version, extensions, s\u00e9curit\u00e9)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique, votre webmaster Joomla ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Joomla',
        description: 'Diagnostic complet de votre installation Joomla : cartographie des \u00e9l\u00e9ments de menu et des chemins dupliqu\u00e9s, inventaire des extensions (actives, obsol\u00e8tes, incompatibles Joomla 5), audit des meta-tags sur 3 niveaux, Core Web Vitals et actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Joomla',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, configur\u00e9 via les 7 plugins natifs de Joomla 5 et compl\u00e9t\u00e9 par Google Structured Data (extension Tassos) pour les types non couverts.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans Joomla via l\'\u00e9diteur natif (TinyMCE ou JCE) avec configuration des meta-tags au niveau article et \u00e9l\u00e9ment de menu.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des sites institutionnels, annuaires sectoriels et m\u00e9dias sp\u00e9cialis\u00e9s dans votre domaine. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par cat\u00e9gorie Joomla, \u00e9volution du Score GEO, sant\u00e9 technique (version Joomla, extensions, compatibilit\u00e9) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Joomla dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Joomla ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Joomla ?", le LLM ne cite aucune agence par son nom. Il \u00e9num\u00e8re 5 \u00e0 6 crit\u00e8res de s\u00e9lection (expertise Joomla sp\u00e9cifique, connaissance de l\'architecture ACL et des \u00e9l\u00e9ments de menu, ma\u00eetrise de 4SEO, capacit\u00e9 \u00e0 g\u00e9rer le multilingue natif) et renvoie vers des annuaires g\u00e9n\u00e9ralistes. L\'agence qui publie une m\u00e9thodologie d\u00e9taill\u00e9e avec des r\u00e9sultats chiffr\u00e9s sur Joomla a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Joomla", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points centr\u00e9 sur les sp\u00e9cificit\u00e9s Joomla : activation des SEF URLs, configuration des meta-tags par \u00e9l\u00e9ment de menu, installation de 4SEO, gestion du contenu dupliqu\u00e9. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont JoomlaSEO.com, la documentation officielle Joomla et Weeblr (\u00e9diteur de 4SEO).</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Joomla vs WordPress pour le SEO", le LLM produit un comparatif \u00e9quilibr\u00e9. Joomla est reconnu pour ses options SEO natives sup\u00e9rieures (meta-tags par article et par menu, multilingue natif) mais WordPress l\'emporte par son \u00e9cosyst\u00e8me de plugins (Yoast, RankMath). Les contenus qui quantifient les diff\u00e9rences (nombre d\'extensions, part de march\u00e9, fonctionnalit\u00e9s natives vs plugin) sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Joomla", le LLM liste 7 \u00e0 9 probl\u00e8mes sp\u00e9cifiques : URLs avec identifiants num\u00e9riques, duplication via les \u00e9l\u00e9ments de menu multiples, meta-tags dispers\u00e9s entre 3 niveaux, robots.txt trop permissif. Les contenus structur\u00e9s en tableau probl\u00e8me/solution ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Joomla 5, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> (contenus \u00e9ditoriaux). Joomla 5 int\u00e8gre 7 plugins schema.org natifs qui couvrent les types de base. Pour les types sp\u00e9cifiques (Product, Event, Service), l\'extension Google Structured Data de Tassos compl\u00e8te le balisage. Ce balisage permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es structur\u00e9es.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Joomla par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
      { label: 'Meta-tags Joomla', href: '/glossaire/meta-tags-joomla' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Joomla',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Joomla ?',
        answer:
          'Le budget SEO pour un site Joomla d\u00e9pend du nombre de pages, de la version du CMS et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Joomla d\u00e9marrent \u00e0 1 500 EUR/mois pour un site vitrine de moins de 50 pages, et atteignent 3 000 \u00e0 5 000 EUR/mois pour les sites multilingues ou les portails institutionnels avec des centaines de pages. Ce budget inclut l\'audit technique (meta-tags, \u00e9l\u00e9ments de menu, extensions), la strat\u00e9gie de contenu et le suivi GEO. Si une migration de Joomla 3 vers Joomla 5 est n\u00e9cessaire, un budget compl\u00e9mentaire est pr\u00e9vu pour s\u00e9curiser les acquis SEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Joomla ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (nettoyage des URLs dupliqu\u00e9es, unification des meta-tags, activation des SEF URLs). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Si votre site est encore sous Joomla 3.x, la migration vers Joomla 5 peut allonger le calendrier de 1 \u00e0 2 mois suppl\u00e9mentaires. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre installation Joomla.',
      },
      {
        question: 'Faut-il installer 4SEO ou utiliser les options SEO natives de Joomla 5 ?',
        answer:
          'Joomla 5 a am\u00e9lior\u00e9 ses options SEO natives (canonical tags, plugins schema.org int\u00e9gr\u00e9s), mais ces fonctionnalit\u00e9s restent basiques pour un site professionnel. 4SEO, successeur de sh404SEF, centralise la gestion des meta-tags avec des r\u00e8gles de priorit\u00e9, g\u00e8re les redirections 301, produit des rapports d\'erreurs et configure l\'Open Graph. Rankwell recommande 4SEO pour tout site Joomla de plus de 20 pages, compl\u00e9t\u00e9 par les plugins schema.org natifs pour le balisage structur\u00e9.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Joomla ?',
        answer:
          'La lenteur d\'un site Joomla provient g\u00e9n\u00e9ralement de trois causes : des extensions obsoletes qui chargent du CSS/JS inutile, l\'absence de mise en cache, et un h\u00e9bergement mutualis\u00e9 sous-dimensionn\u00e9. Rankwell commence par un audit de performance qui identifie les extensions responsables de la lenteur, active le cache natif Joomla (progressif ou conservateur), installe JCH Optimize pour la minification des assets, convertit les images en WebP et configure un CDN.',
      },
      {
        question: 'Comment faire citer mon site Joomla par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Joomla, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions), un balisage schema.org complet (via les plugins natifs Joomla 5 et Google Structured Data), et des mentions de votre marque sur des sources tierces (blogs, presse, annuaires). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site Joomla.',
      },
      {
        question: 'Joomla est-il encore un bon choix pour le SEO en 2026 ?',
        answer:
          'Joomla reste pertinent pour le SEO en 2026, en particulier pour les sites institutionnels multilingues et les portails avec gestion fine des droits (ACL). Joomla 5 a combl\u00e9 plusieurs lacunes (schema.org natif, canonical tags, am\u00e9lioration des SEF URLs). En revanche, sa part de march\u00e9 en d\u00e9clin (de 10,9 % en 2011 \u00e0 1,8 % en 2025) r\u00e9duit le vivier de d\u00e9veloppeurs et d\'extensions disponibles. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces de Joomla tout en anticipant les risques li\u00e9s \u00e0 l\'\u00e9volution de son \u00e9cosyst\u00e8me.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Joomla ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Joomla (audit des meta-tags sur 3 niveaux, nettoyage des URLs dupliqu\u00e9es, migration 4SEO, configuration schema.org natif) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques de Joomla : dispersion des meta-tags, contenu dupliqu\u00e9 par les \u00e9l\u00e9ments de menu, migration vers Joomla 5 et configuration des extensions SEO. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Joomla ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Joomla. Nos consultants SEO & GEO analysent votre configuration, vos \u00e9l\u00e9ments de menu, vos extensions et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Association', href: '/agence-geo-seo/secteur/association' },
        { label: 'SEO Collectivit\u00e9', href: '/agence-geo-seo/secteur/collectivite' },
        { label: 'SEO \u00c9ducation', href: '/agence-geo-seo/secteur/education' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Drupal', href: '/agence-geo-seo/cms/drupal' },
        { label: 'SEO TYPO3', href: '/agence-geo-seo/cms/typo3' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Meta-tags Joomla', href: '/glossaire/meta-tags-joomla' },
        { label: 'Cannibalisation SEO', href: '/glossaire/cannibalisation-seo' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Drupal', href: '/agence-geo-seo/cms/drupal' },
      { label: 'TYPO3', href: '/agence-geo-seo/cms/typo3' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
    ],
  },
};

export default data;
