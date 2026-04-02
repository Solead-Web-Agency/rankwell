/**
 * DATA : Page CMS Drupal (FR)
 * Route : /agence-geo-seo/cms/drupal
 *
 * CMS open source enterprise : gouvernements, universites, grandes entreprises.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'drupal',
    title: 'Agence SEO & GEO Drupal - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Drupal. Modules, taxonomies, performance Varnish, schema.org : m\u00e9thodologie compl\u00e8te pour Drupal.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Drupal' },
    ],
    title: 'SEO & GEO Drupal : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Taxonomies complexes non optimis\u00e9es, cache Varnish mal configur\u00e9, modules SEO d\u00e9connect\u00e9s les uns des autres : le r\u00e9f\u00e9rencement d\'un site Drupal exige une expertise CMS que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Drupal',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Drupal (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Drupal',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Drupal propulse 7,5 % des 1 000 sites les plus visit\u00e9s au monde</strong>, dont whitehouse.gov et europa.eu. Son architecture offre des taxonomies hi\u00e9rarchiques illimit\u00e9es, une gestion multilingue native et un contr\u00f4le total sur le HTML, les URL et les <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a>. Ces capacit\u00e9s en font un socle solide pour une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> enterprise.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Moins de 1 % des sites web utilisent Drupal</strong>, ce qui r\u00e9duit l\'\u00e9cosyst\u00e8me de modules SEO. Pathauto, Metatag, Redirect et Simple XML Sitemap doivent \u00eatre install\u00e9s manuellement. Sans <a href="/glossaire/seo-technique" class="text-rw-blue hover:underline">expertise technique SEO</a> sp\u00e9cifique, les taxonomies g\u00e9n\u00e8rent du contenu dupliqu\u00e9 et les mises \u00e0 jour majeures cassent les configurations existantes.',
    geoAngle:
      'Selon Rankwell, les taxonomies hi\u00e9rarchiques de Drupal permettent de construire un graphe d\'entit\u00e9s exploitable par les LLM, mais cette citabilit\u00e9 IA reste latente si le schema.org n\'est pas inject\u00e9 via Schema.org Metatag et si les vues de taxonomie ne contiennent pas de passages factuels auto-suffisants.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Drupal et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Drupal non optimis\u00e9s, en particulier ceux qui exploitent des taxonomies complexes et des vues personnalis\u00e9es. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Taxonomies non optimis\u00e9es (pages de termes vides ou dupliqu\u00e9es)',
        'Contenu dupliqu\u00e9 massif, dilution du crawl budget sur des centaines de pages pauvres',
        'Audit des vocabulaires, noindex sur les termes non strat\u00e9giques, enrichissement des pages de taxonomie avec du contenu \u00e9ditorial unique',
      ],
      [
        'Absence de Pathauto ou patterns URL incoh\u00e9rents (/node/123)',
        'URL non lisibles, perte de signal s\u00e9mantique pour Google et les LLM',
        'Installation et configuration de Pathauto avec patterns par type de contenu (/blog/[title], /service/[term]/[title]), redirections 301 via le module Redirect',
      ],
      [
        'Cache Varnish/Redis mal configur\u00e9 ou absent',
        'TTFB > 2s, LCP d\u00e9grad\u00e9, perte de positions sur mobile',
        'Mise en place de Varnish en reverse proxy avec purge automatique via le module Purge, Redis pour le cache back-end, CDN Cloudflare en frontal',
      ],
      [
        'Modules Metatag et Schema.org Metatag non install\u00e9s',
        'Pas de contr\u00f4le sur les balises title/description, pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Installation de Metatag + Schema.org Metatag, configuration des mappings par type de contenu (Article, Organization, BreadcrumbList, FAQPage)',
      ],
      [
        'Vues (Views) g\u00e9n\u00e9rant des pages non canoniques et de la pagination infinie',
        'Pages en double index\u00e9es, crawl budget gaspill\u00e9 sur des variantes de tri et de filtre',
        'Canonical tags sur chaque vue, noindex sur les pages de filtre/tri, pagination avec rel=next/prev, limitation du nombre de pages index\u00e9es',
      ],
      [
        'Migration Drupal 9 vers 10/11 avec perte de configurations SEO',
        'Redirections 301 manquantes, sitemaps cass\u00e9s, balisage schema.org perdu',
        'Audit pr\u00e9-migration des URL et des modules SEO, plan de redirections complet, reconfiguration de Simple XML Sitemap et Metatag apr\u00e8s migration',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Drupal',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Drupal.',
    steps: [
      {
        title: 'Audit technique Drupal',
        subtitle: 'Analyse compl\u00e8te de l\'installation Drupal : version du core, modules contribu\u00e9s, configuration serveur (PHP, Varnish, Redis) et Core Web Vitals.',
        items: [
          'Inventaire des modules actifs, inactifs et obsol\u00e8tes (compatibilit\u00e9 Drupal 10/11)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (taxonomies vides, vues dupliqu\u00e9es, fichiers /node/)',
          'V\u00e9rification de la s\u00e9curit\u00e9 : mises \u00e0 jour de s\u00e9curit\u00e9 Drupal, permissions, certificat SSL, en-t\u00eates HTTP',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Drupal dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des modules',
        subtitle: 'Suppression des modules obsol\u00e8tes ou redondants, consolidation de la stack technique Drupal pour la performance et la maintenabilit\u00e9.',
        items: [
          'D\u00e9sinstallation des modules inactifs ou incompatibles avec Drupal 10/11',
          'Remplacement des modules non maintenus par des alternatives support\u00e9es',
          'Consolidation des modules SEO : Pathauto + Metatag + Redirect + Simple XML Sitemap comme stack de r\u00e9f\u00e9rence',
          'Nettoyage de la base de donn\u00e9es : r\u00e9visions de contenu, tables orphelines, cache expir\u00e9',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Configuration de la couche de cache Drupal (interne, Varnish, Redis) et optimisation du front-end pour atteindre les seuils Core Web Vitals.',
        items: [
          'Configuration du cache interne Drupal (page cache, dynamic page cache, render cache)',
          'Mise en place de Varnish en reverse proxy avec purge automatique (module Purge)',
          'Redis ou Memcached pour le cache back-end (sessions, entity cache)',
          'Agr\u00e9gation CSS/JS via le module Advanced CSS/JS Aggregation, images en WebP avec lazy loading',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet des modules Pathauto, Metatag, Redirect et Schema.org Metatag pour maximiser le contr\u00f4le sur les URL, les balises et les donn\u00e9es structur\u00e9es.',
        items: [
          'Patterns Pathauto par type de contenu et par vocabulaire de taxonomie',
          'Metatag : configuration des balises title, description, canonical et Open Graph par bundle',
          'Simple XML Sitemap : g\u00e9n\u00e9ration multilingue avec hreflang et exclusion des pages non strat\u00e9giques',
          'Schema.org Metatag : balisage Organization, WebSite, BreadcrumbList, FAQPage par type de contenu',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Drupal',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s exploitant les taxonomies hi\u00e9rarchiques et le syst\u00e8me de vues de Drupal pour le r\u00e9f\u00e9rencement et la citabilit\u00e9 IA.',
        items: [
          'Architecture de contenu bas\u00e9e sur les vocabulaires de taxonomie (cocon s\u00e9mantique natif)',
          'Pages de taxonomie enrichies avec du contenu \u00e9ditorial unique (pas de simples listes de nodes)',
          'FAQ structur\u00e9es via des types de contenu d\u00e9di\u00e9s avec balisage FAQPage automatique',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis la communaut\u00e9 Drupal (Drupal.org, DrupalCon, blogs contribu\u00e9s)',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique dans votre secteur',
          'Mentions de marque dans des comparatifs CMS et guides techniques',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et le suivi de la sant\u00e9 technique Drupal.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu et par vocabulaire de taxonomie',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi des mises \u00e0 jour de s\u00e9curit\u00e9 Drupal',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique Drupal, vos r\u00e9f\u00e9renceurs ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Drupal',
        description: 'Diagnostic complet de votre installation Drupal : inventaire des modules (actifs, obsol\u00e8tes, incompatibles), analyse des taxonomies et des vues, Core Web Vitals, configuration Varnish/Redis, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Drupal',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, configur\u00e9 directement via le module Schema.org Metatag. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pour votre \u00e9quipe Drupal.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans Drupal via l\'interface d\'administration ou par d\u00e9ploiement de configuration (Drush, Config Split). Cr\u00e9ation de types de contenu et de vues sur mesure si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis la communaut\u00e9 Drupal (Drupal.org, blogs contribu\u00e9s), m\u00e9dias sp\u00e9cialis\u00e9s et sites \u00e0 forte autorit\u00e9 dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par taxonomie, \u00e9volution du Score GEO, sant\u00e9 technique Drupal (modules, mises \u00e0 jour de s\u00e9curit\u00e9, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Drupal dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un d\u00e9cideur demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Drupal ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Drupal ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience Drupal, connaissance des modules SEO, r\u00e9f\u00e9rences clients enterprise, capacit\u00e9 \u00e0 g\u00e9rer les migrations de version) et renvoie vers des annuaires comme Sortlist ou Clutch. L\'agence qui publie une m\u00e9thodologie d\u00e9taill\u00e9e avec des r\u00e9sultats chiffr\u00e9s sur des projets Drupal a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Drupal", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 12 points couvrant Pathauto, Metatag, Simple XML Sitemap, le cache Varnish, les donn\u00e9es structur\u00e9es et le maillage interne. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont Drupal.org, Acquia et les blogs techniques sp\u00e9cialis\u00e9s Drupal comme Drupfan.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Drupal vs WordPress pour le SEO", le LLM produit un comparatif structur\u00e9 de 6 \u00e0 8 crit\u00e8res. Drupal est pr\u00e9sent\u00e9 comme plus performant nativement (cache int\u00e9gr\u00e9, pas de surcharge de plugins) mais plus complexe \u00e0 configurer. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates sur les modules SEO</h4><p>Sur "meilleurs modules SEO pour Drupal", le LLM fournit une liste de 6 \u00e0 10 modules class\u00e9s par fonction : Pathauto (URL), Metatag (m\u00e9tadonn\u00e9es), Redirect (redirections), Simple XML Sitemap, Easy Breadcrumb, Real-time SEO. Les contenus qui structurent chaque module avec son r\u00f4le pr\u00e9cis et sa configuration recommand\u00e9e ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Drupal, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>GovernmentOrganization</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation via Easy Breadcrumb), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>WebPage</code> (contenus \u00e9ditoriaux). Le module Schema.org Metatag permet de configurer ces types par bundle (type de contenu). Combine avec le module Metatag, il offre un contr\u00f4le granulaire sur le balisage inject\u00e9 dans chaque page.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Drupal par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus structur\u00e9s via les taxonomies Drupal), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans la communaut\u00e9 Drupal), et la Densit\u00e9 Factuelle (richesse du balisage schema.org via Schema.org Metatag, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Drupal',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Drupal ?',
        answer:
          'Le budget SEO pour un site Drupal d\u00e9pend de la complexit\u00e9 de l\'architecture (nombre de types de contenu, vocabulaires de taxonomie, modules contribu\u00e9s) et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Drupal d\u00e9marrent \u00e0 2 000 EUR/mois pour un site institutionnel de taille moyenne, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les portails enterprise multilingues avec des centaines de milliers de pages. Ce budget inclut l\'audit technique, la configuration des modules SEO, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Drupal ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (configuration de Pathauto, mise en place de Varnish, nettoyage des taxonomies). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les optimisations de performance Drupal (cache, agr\u00e9gation CSS/JS) produisent des effets mesurables d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial.',
      },
      {
        question: 'Quels modules SEO sont indispensables sur Drupal ?',
        answer:
          'La stack SEO de r\u00e9f\u00e9rence pour Drupal comprend cinq modules fondamentaux : Pathauto (URL propres automatiques), Metatag (balises title, description, Open Graph), Redirect (redirections 301), Simple XML Sitemap (sitemap multilingue avec hreflang) et Schema.org Metatag (donn\u00e9es structur\u00e9es par type de contenu). Easy Breadcrumb et Real-time SEO compl\u00e8tent la stack. Rankwell configure chaque module en fonction de votre architecture de contenu et de vos vocabulaires de taxonomie.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Drupal ?',
        answer:
          'La lenteur d\'un site Drupal provient g\u00e9n\u00e9ralement de trois causes : absence de cache reverse proxy (Varnish), modules contribu\u00e9s non optimis\u00e9s qui ex\u00e9cutent des requ\u00eates lourdes, et vues complexes non paginables. Rankwell commence par un audit de performance qui identifie les goulets d\'\u00e9tranglement, configure le cache interne Drupal (page cache, render cache), d\u00e9ploie Varnish avec purge automatique et Redis pour le cache back-end, puis optimise le front-end (agr\u00e9gation CSS/JS, images WebP, CDN).',
      },
      {
        question: 'Comment faire citer mon site Drupal par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Drupal, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (exploitant les taxonomies hi\u00e9rarchiques de Drupal pour structurer l\'information), un balisage schema.org complet via le module Schema.org Metatag (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9.',
      },
      {
        question: 'Drupal est-il toujours un bon choix pour le SEO en 2026 ?',
        answer:
          'Drupal reste le CMS le plus adapt\u00e9 aux sites complexes et multilingues en 2026 : ses taxonomies hi\u00e9rarchiques, sa gestion multilingue native (traduction entit\u00e9 par entit\u00e9 avec hreflang automatique) et sa s\u00e9curit\u00e9 enterprise en font un choix solide pour les portails institutionnels et les grandes organisations. Cependant, WordPress (accessibilit\u00e9) et Next.js (SSR natif) offrent des avantages sur des points pr\u00e9cis. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux sp\u00e9cificit\u00e9s de chaque CMS.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Drupal ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Drupal (audit des modules, configuration Pathauto/Metatag/Schema.org Metatag, optimisation Varnish/Redis) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de Drupal : taxonomies complexes, migrations de version, performance enterprise, multilingue. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Drupal ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Drupal. Nos consultants SEO & GEO analysent votre architecture de taxonomies, vos modules, votre configuration Varnish et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Immobilier', href: '/agence-geo-seo/secteur/immobilier' },
        { label: 'SEO \u00c9ducation', href: '/agence-geo-seo/secteur/education' },
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'SEO international', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Joomla', href: '/agence-geo-seo/cms/joomla' },
        { label: 'SEO TYPO3', href: '/agence-geo-seo/cms/typo3' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'E-E-A-T', href: '/glossaire/e-e-a-t' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Joomla', href: '/agence-geo-seo/cms/joomla' },
      { label: 'TYPO3', href: '/agence-geo-seo/cms/typo3' },
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
    ],
  },
};

export default data;
