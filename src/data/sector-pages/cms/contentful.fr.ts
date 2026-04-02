/**
 * DATA : Page CMS Contentful (FR)
 * Route : /agence-geo-seo/cms/contentful
 *
 * Headless CMS SaaS enterprise, Content Delivery API + Content Management API,
 * pas de frontend (Next.js/Gatsby/Nuxt), SEO = depend 100% du frontend,
 * content modeling structure, CDN Fastly integre.
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'contentful',
    title: 'Agence SEO & GEO Contentful - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Contentful. Content modeling, rendu SSR/SSG, schema.org, performance CDN Fastly : m\u00e9thodologie compl\u00e8te pour Contentful.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Contentful' },
    ],
    title: 'SEO & GEO Contentful : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Contentful s\u00e9pare le contenu du frontend : le SEO repose enti\u00e8rement sur la couche de rendu (Next.js, Gatsby, Nuxt) et sur la rigueur du content modeling. Nos experts combinent SEO technique et GEO pour que votre architecture headless se positionne sur Google et soit cit\u00e9e par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Contentful',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Contentful (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Contentful',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Contentful alimente plus de 4 000 entreprises dont 30 % du Fortune 500</strong>. Son content modeling structur\u00e9 (champs typ\u00e9s, r\u00e9f\u00e9rences, m\u00e9dias) facilite la g\u00e9n\u00e9ration automatique de <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a> schema.org. La Content Delivery API via CDN Fastly (70+ points de pr\u00e9sence) garantit des temps de r\u00e9ponse inf\u00e9rieurs \u00e0 100 ms, un socle performant pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> enterprise.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Contentful ne g\u00e8re aucune fonctionnalit\u00e9 SEO nativement</strong> : pas de sitemap XML, pas de meta-tags automatiques, pas de redirections 301. Tout repose sur le frontend, et un rendu CSR rend le contenu invisible pour Googlebot. Les \u00e9diteurs publient sans validation SEO, cr\u00e9ant des pages sans meta description. Sans <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">gestion du crawl budget</a> c\u00f4t\u00e9 CMS, les environnements de staging peuvent \u00eatre index\u00e9s par erreur.',
    geoAngle:
      'Selon Rankwell, la force de Contentful pour la citabilit\u00e9 IA r\u00e9side dans son content modeling typ\u00e9 : chaque champ structur\u00e9 peut alimenter directement le balisage schema.org via le frontend. Cette citabilit\u00e9 reste latente tant que le rendu SSR/SSG ne transforme pas les content types en passages factuels auto-suffisants exploitables par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Contentful et solutions',
    interpretation:
      'Ces probl\u00e8mes sont sp\u00e9cifiques \u00e0 l\'architecture headless de Contentful. Chacun impacte le positionnement Google et la capacit\u00e9 des moteurs IA \u00e0 extraire des donn\u00e9es fiables. Un audit technique identifie ceux qui s\'appliquent \u00e0 votre configuration et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Frontend en CSR pur (React SPA sans SSR)',
        'Googlebot ne voit pas le contenu, pages vides dans l\'index',
        'Migration vers Next.js (SSR/SSG) ou Gatsby (SSG), pre-rendering pour les bots si migration impossible',
      ],
      [
        'Pas de sitemap XML g\u00e9n\u00e9r\u00e9 par Contentful',
        'D\u00e9couverte des pages incomplète, crawl inefficace',
        'G\u00e9n\u00e9ration automatique du sitemap via le frontend (next-sitemap, gatsby-plugin-sitemap) aliment\u00e9 par la Content Delivery API',
      ],
      [
        'Meta-tags absents ou non valid\u00e9s par les \u00e9diteurs',
        'Titles en doublon, descriptions vides, perte de CTR',
        'Cr\u00e9ation de champs SEO obligatoires dans chaque content type (seoTitle, seoDescription, seoImage) avec validation Contentful',
      ],
      [
        'Redirections 301 non g\u00e9r\u00e9es nativement',
        'Erreurs 404 lors des changements d\'URL, perte de PageRank',
        'Content type d\u00e9di\u00e9 "Redirect" dans Contentful + middleware de redirection c\u00f4t\u00e9 frontend ou r\u00e8gles CDN Fastly/Vercel',
      ],
      [
        'Environnements de preview index\u00e9s par Google',
        'Contenu dupliqu\u00e9 entre production et staging, dilution d\'autorit\u00e9',
        'Noindex + authentification sur les environnements preview, robots.txt s\u00e9par\u00e9 par environnement, canonical vers production',
      ],
      [
        'Absence de schema.org malgr\u00e9 un content model riche',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Mapping syst\u00e9matique des content types vers les types schema.org (Article, Product, FAQPage) via le frontend, injection en JSON-LD dans le head',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Contentful',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Contentful.',
    steps: [
      {
        title: 'Audit technique Contentful',
        subtitle: 'Analyse compl\u00e8te de l\'architecture headless : content model, configuration des environnements, frontend de rendu et Core Web Vitals.',
        items: [
          'Inventaire des content types et de leurs champs SEO (seoTitle, seoDescription, alt text)',
          'V\u00e9rification du mode de rendu frontend (SSR, SSG, CSR) et de l\'indexabilit\u00e9 par Googlebot',
          'Mesure des Core Web Vitals (LCP, INP, CLS) sur les pages cl\u00e9s',
          'Audit des environnements Contentful : preview, staging, production (risques d\'indexation crois\u00e9e)',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Contentful dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Restructuration du content model',
        subtitle: 'Refonte des content types Contentful pour int\u00e9grer les champs SEO et les r\u00e9f\u00e9rences inter-contenus n\u00e9cessaires au maillage interne.',
        items: [
          'Ajout de champs SEO obligatoires sur chaque content type (titre, description, image OG, slug)',
          'Cr\u00e9ation de content types d\u00e9di\u00e9s : Redirect (301), FAQ, Author (E-E-A-T)',
          'Mise en place de r\u00e9f\u00e9rences entre content types pour le maillage interne automatis\u00e9',
          'Configuration des validations Contentful (longueur meta title, meta description obligatoire)',
        ],
      },
      {
        title: 'Optimisation du frontend SSR/SSG',
        subtitle: 'Configuration du framework frontend (Next.js, Gatsby, Nuxt) pour garantir l\'indexabilit\u00e9 et la performance.',
        items: [
          'Mise en place du rendu SSR ou SSG avec revalidation incr\u00e9mentale (ISR sur Next.js)',
          'G\u00e9n\u00e9ration automatique du sitemap XML via la Content Delivery API',
          'Configuration des redirections 301 via le middleware frontend ou les r\u00e8gles CDN',
          'Optimisation des images via le CDN Contentful Images API (format WebP, redimensionnement automatique)',
        ],
      },
      {
        title: 'Balisage schema.org et donn\u00e9es structur\u00e9es',
        subtitle: 'Mapping syst\u00e9matique des content types Contentful vers les types schema.org pour maximiser les rich snippets et la citabilit\u00e9 IA.',
        items: [
          'Balisage WebSite, Organization, BreadcrumbList inject\u00e9 en JSON-LD dans le layout principal',
          'Mapping Article, Product, FAQPage, HowTo sur les content types correspondants',
          'G\u00e9n\u00e9ration dynamique du JSON-LD depuis les champs Contentful via le frontend',
          'Tests de validation avec le Rich Results Test de Google',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Contentful',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s exploit\u00e9s par le content model pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 IA.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s via les r\u00e9f\u00e9rences Contentful',
          'Maillage interne automatis\u00e9 gr\u00e2ce aux champs de r\u00e9f\u00e9rence entre content types',
          'FAQ th\u00e9matiques cr\u00e9\u00e9es comme content type d\u00e9di\u00e9, r\u00e9utilisables sur plusieurs pages',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sources sp\u00e9cialis\u00e9es tech et enterprise.',
        items: [
          'Backlinks depuis des blogs tech headless CMS, magazines SaaS et comparateurs enterprise',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans l\'\u00e9cosyst\u00e8me Contentful/JAMstack',
          'Mentions de marque dans des articles comparatifs headless CMS et guides d\'architecture',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par content type Contentful',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi de l\'indexabilit\u00e9 du frontend',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe technique, vos \u00e9diteurs Contentful ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Contentful',
        description: 'Diagnostic complet de votre architecture headless : content model (champs SEO manquants, validations absentes), mode de rendu frontend (SSR/SSG/CSR), Core Web Vitals, risques d\'indexation crois\u00e9e entre environnements, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Contentful',
        description: 'Mapping complet des content types Contentful vers les types schema.org (Article, Product, FAQPage, BreadcrumbList). Code frontend (Next.js ou Gatsby) pour la g\u00e9n\u00e9ration dynamique du JSON-LD depuis les champs Contentful.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages et FAQ optimis\u00e9es SEO et GEO. Int\u00e9gration directe dans les content types Contentful via l\'interface web ou la Content Management API. Cr\u00e9ation de content types d\u00e9di\u00e9s si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs tech headless, comparateurs SaaS enterprise et m\u00e9dias sp\u00e9cialis\u00e9s JAMstack. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par content type, \u00e9volution du Score GEO, sant\u00e9 technique du frontend (indexabilit\u00e9, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Contentful dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Contentful ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce canal d\'acquisition en pleine croissance.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Contentful ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience headless CMS, ma\u00eetrise du content modeling, capacit\u00e9 \u00e0 configurer le frontend SSR/SSG, r\u00e9f\u00e9rences enterprise). Il renvoie vers la page partenaires de Contentful ou des annuaires comme Sortlist et Clutch. L\'agence qui publie une m\u00e9thodologie d\u00e9taill\u00e9e et des r\u00e9sultats chiffr\u00e9s sur Contentful a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Contentful", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 10 points couvrant le content modeling, le rendu SSR/SSG, le sitemap, les redirections et les Core Web Vitals. Il insiste sur la d\u00e9pendance au frontend. Les sources privil\u00e9gi\u00e9es sont contentful.com/seo-guide, Zesty.io et les blogs techniques headless. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Contentful vs Strapi pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. Contentful est pr\u00e9sent\u00e9 comme plus mature et scalable (CDN Fastly, Kubernetes, marketplace riche) mais plus co\u00fbteux. Strapi est positionn\u00e9 comme open source et plus flexible. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Contentful", le LLM liste 5 \u00e0 7 probl\u00e8mes sp\u00e9cifiques \u00e0 l\'architecture headless : rendu CSR non index\u00e9, absence de sitemap natif, meta-tags non valid\u00e9s, redirections non g\u00e9r\u00e9es. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Contentful, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> (entit\u00e9 \u00e9ditrice), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux), <code>Product</code> (fiches produit si e-commerce). La particularit\u00e9 de Contentful est que le balisage doit \u00eatre g\u00e9n\u00e9r\u00e9 dynamiquement c\u00f4t\u00e9 frontend depuis les champs du content model, via un composant JSON-LD inject\u00e9 dans le head. Aucun plugin natif ne g\u00e8re le schema.org.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Contentful par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus structur\u00e9s dans le content model), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans l\'\u00e9cosyst\u00e8me headless), et la Densit\u00e9 Factuelle (richesse du balisage schema.org g\u00e9n\u00e9r\u00e9 par le frontend et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Contentful',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Contentful ?',
        answer:
          'Le budget SEO pour un site Contentful est g\u00e9n\u00e9ralement plus \u00e9lev\u00e9 que pour un CMS traditionnel, car il inclut l\'optimisation du frontend SSR/SSG en plus du contenu. Chez Rankwell, les accompagnements SEO Contentful d\u00e9marrent \u00e0 2 500 EUR/mois pour un site vitrine de moins de 100 pages, et atteignent 5 000 \u00e0 10 000 EUR/mois pour les architectures multi-locales avec plusieurs dizaines de content types. Ce budget couvre l\'audit du content model, la configuration du frontend, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Contentful ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 2 et 4 mois pour les corrections techniques (passage en SSR/SSG, ajout des meta-tags, g\u00e9n\u00e9ration du sitemap). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. La restructuration du content model produit des effets mesurables d\u00e8s que Google recrawle les pages corrig\u00e9es. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre architecture Contentful.',
      },
      {
        question: 'Faut-il utiliser Next.js ou Gatsby comme frontend pour le SEO sur Contentful ?',
        answer:
          'Next.js et Gatsby sont les deux frameworks les plus utilis\u00e9s avec Contentful. Next.js offre le SSR (Server-Side Rendering) et l\'ISR (Incremental Static Regeneration), adapt\u00e9s aux sites avec du contenu mis \u00e0 jour fr\u00e9quemment. Gatsby g\u00e9n\u00e8re des pages statiques ultra-rapides, id\u00e9ales pour les sites vitrines et blogs. Rankwell recommande Next.js pour les projets enterprise multi-locales, et Gatsby pour les sites \u00e0 contenu stable. Le choix d\u00e9pend de la fr\u00e9quence de publication et du nombre de pages.',
      },
      {
        question: 'Comment r\u00e9duire les probl\u00e8mes de performance sur un site Contentful ?',
        answer:
          'Les probl\u00e8mes de performance sur Contentful viennent rarement du CMS lui-m\u00eame (le CDN Fastly r\u00e9pond en moins de 100 ms) mais du frontend. Les causes fr\u00e9quentes sont : bundle JavaScript trop volumineux, images non optimis\u00e9es (ne pas utiliser la Contentful Images API), appels API en cascade au lieu de requ\u00eates batch\u00e9es. Rankwell audite le frontend, optimise le tree-shaking, active la Contentful Images API (format WebP, redimensionnement) et configure le cache des r\u00e9ponses API.',
      },
      {
        question: 'Comment faire citer mon site Contentful par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Contentful, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles structur\u00e9es dans le content model (chiffres, d\u00e9finitions, comparatifs), un balisage schema.org g\u00e9n\u00e9r\u00e9 dynamiquement depuis les content types (WebSite, Organization, FAQPage, Article), et des mentions de votre marque sur des sources tierces tech et enterprise. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Contentful est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'Contentful offre un excellent potentiel SEO quand l\'architecture est correctement impl\u00e9ment\u00e9e (SSR/SSG, sitemap, schema.org). Son content modeling structur\u00e9 facilite la production de donn\u00e9es structur\u00e9es et le maillage interne automatis\u00e9. En revanche, l\'absence totale de SEO natif exige une \u00e9quipe technique capable de configurer le frontend. Pour les entreprises sans d\u00e9veloppeurs, un CMS traditionnel comme WordPress reste plus accessible. Rankwell adapte sa m\u00e9thodologie SEO et GEO \u00e0 chaque architecture headless.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Contentful ?',
        answer:
          'Rankwell combine l\'expertise SEO technique headless (audit du content model, configuration frontend SSR/SSG, mapping schema.org depuis les content types) avec la dimension GEO que la grande majorit\u00e9 des agences SEO ne proposent pas. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques de Contentful : absence de SEO natif, d\u00e9pendance au frontend, content modeling, gestion des environnements. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Contentful ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Contentful. Nos consultants SEO & GEO analysent votre content model, votre frontend de rendu et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
        { label: 'SEO Fintech', href: '/agence-geo-seo/secteur/fintech' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
      ],
      projets: [
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'SEO international', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO Strapi', href: '/agence-geo-seo/cms/strapi' },
        { label: 'SEO Prismic', href: '/agence-geo-seo/cms/prismic' },
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
      { label: 'Strapi', href: '/agence-geo-seo/cms/strapi' },
      { label: 'Prismic', href: '/agence-geo-seo/cms/prismic' },
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Gatsby', href: '/agence-geo-seo/cms/gatsby' },
      { label: 'Nuxt.js', href: '/agence-geo-seo/cms/nuxtjs' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
    ],
  },
};

export default data;
