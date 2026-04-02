/**
 * DATA : Page CMS WordPress (FR)
 * Route : /agence-geo-seo/cms/wordpress
 *
 * Page pilote CMS, contenu de reference pour valider le template.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'wordpress',
    title: 'Agence SEO & GEO WordPress - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site WordPress. Audit technique, plugins, performance, schema.org : m\u00e9thodologie compl\u00e8te pour WordPress.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'WordPress' },
    ],
    title: 'SEO & GEO WordPress : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Surcharge de plugins, lenteur de chargement, contenu dupliqu\u00e9 par les archives et les tags : le r\u00e9f\u00e9rencement d\'un site WordPress pose des probl\u00e8mes que le SEO g\u00e9n\u00e9raliste ne r\u00e9sout pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO WordPress',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur WordPress (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur WordPress',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">43 % des sites web dans le monde tournent sur WordPress</strong>. Des plugins comme Yoast SEO et RankMath centralisent la gestion des balises, sitemaps et <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a>. Le contr\u00f4le total sur le HTML, les redirections 301 et le schema.org en fait le CMS le plus flexible pour une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> avanc\u00e9e.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Un site WordPress moyen charge 20 \u00e0 30 plugins</strong>, dont certains injectent du JavaScript inutile et d\u00e9gradent les Core Web Vitals. Les archives, tags et pages auteur g\u00e9n\u00e8rent du <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">contenu dupliqu\u00e9</a> qui dilue le crawl budget, et la plateforme concentre 90 % des piratages de CMS.',
    geoAngle:
      'Selon Rankwell, les sites WordPress peuvent g\u00e9n\u00e9rer des donn\u00e9es structur\u00e9es compl\u00e8tes via Yoast ou RankMath, mais cette citabilit\u00e9 IA ne s\'active que si le balisage schema.org est correct, si le contenu contient des passages factuels auto-suffisants et si les signaux E-E-A-T sont v\u00e9rifiables par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur WordPress et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites WordPress non optimis\u00e9s. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Lenteur de chargement (20+ plugins actifs)',
        'LCP > 4s, perte de positions sur mobile',
        'Audit de plugins, suppression des doublons, mise en cache (WP Rocket), CDN, h\u00e9bergement optimis\u00e9',
      ],
      [
        'Contenu dupliqu\u00e9 (archives, tags, pagination)',
        'Dilution du crawl budget, cannibalisation interne',
        'Noindex sur les archives inutiles, canonical tags, suppression des tags non strat\u00e9giques',
      ],
      [
        'Permaliens non optimis\u00e9s (/?p=123)',
        'URL non lisibles, perte de signal s\u00e9mantique',
        'Configuration en /%postname%/, redirections 301 sur les anciennes URL',
      ],
      [
        'Conflits entre plugins SEO',
        'Sitemaps multiples, balises meta en double',
        'Audit des plugins actifs, choix d\'un plugin SEO unique (Yoast ou RankMath), d\u00e9sactivation des doublons',
      ],
      [
        'Failles de s\u00e9curit\u00e9 (version obsolete, plugins non mis a jour)',
        'Injection de spam, d\u00e9sindexation par Google Safe Browsing',
        'Mise \u00e0 jour WordPress + plugins + th\u00e8me, pare-feu applicatif (Wordfence/Sucuri), headers de s\u00e9curit\u00e9',
      ],
      [
        'Absence de schema.org ou balisage incomplet',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Configuration compl\u00e8te du balisage WebSite, Organization, BreadcrumbList, FAQPage via Yoast/RankMath ou injection custom',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour WordPress',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de WordPress.',
    steps: [
      {
        title: 'Audit technique WordPress',
        subtitle: 'Analyse compl\u00e8te de l\'installation WordPress : plugins actifs, th\u00e8me, version PHP, configuration serveur et Core Web Vitals.',
        items: [
          'Inventaire des plugins (actifs, inactifs, en conflit)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (archives, tags, attachments)',
          'V\u00e9rification de la s\u00e9curit\u00e9 : version WordPress, certificat SSL, headers HTTP',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site WordPress dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation des plugins',
        subtitle: 'Suppression des plugins redondants ou inutilis\u00e9s qui alourdissent le site et cr\u00e9ent des conflits techniques.',
        items: [
          'R\u00e9duction du nombre de plugins actifs (objectif : 10 \u00e0 15 essentiels)',
          'Remplacement des plugins lourds par des alternatives l\u00e9g\u00e8res',
          'Configuration optimale du plugin SEO principal (Yoast ou RankMath)',
          'Suppression des scripts JS/CSS inutiles charg\u00e9s en front',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement via la mise en cache, la compression et l\'optimisation des images.',
        items: [
          'Configuration de WP Rocket ou LiteSpeed Cache',
          'Conversion des images en WebP avec lazy loading',
          'Mise en place d\'un CDN (Cloudflare, BunnyCDN)',
          'Minification CSS/JS et chargement diff\u00e9r\u00e9 des scripts non critiques',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet de Yoast SEO ou RankMath pour maximiser le contr\u00f4le sur les balises, sitemaps et donn\u00e9es structur\u00e9es.',
        items: [
          'Permaliens en /%postname%/, breadcrumbs activ\u00e9s',
          'Sitemap XML configur\u00e9 (exclusion des pages non strat\u00e9giques)',
          'Noindex sur archives auteur, tags, pages de recherche',
          'Balisage schema.org : Organization, WebSite, BreadcrumbList, FAQPage',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu WordPress',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s en cocon s\u00e9mantique',
          'Maillage interne automatique et contextuel entre articles et pages',
          'FAQ th\u00e9matiques inspir\u00e9es des PAA Google',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs WordPress, magazines tech et comparateurs',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique',
          'Mentions de marque dans des articles comparatifs et guides d\'achat',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et de la sant\u00e9 technique WordPress',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en r\u00e9f\u00e9rencement, votre \u00e9quipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique WordPress',
        description: 'Diagnostic complet de votre installation WordPress : inventaire des plugins (actifs, inactifs, en conflit), Core Web Vitals, crawl budget, s\u00e9curit\u00e9, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org WordPress',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, configur\u00e9 directement dans Yoast ou RankMath. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pour votre \u00e9quipe.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans WordPress via l\'\u00e9diteur Gutenberg ou par acc\u00e8s FTP. Cr\u00e9ation de templates de pages sur mesure si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs WordPress, comparateurs tech et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique WordPress (plugins, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site WordPress dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site WordPress ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site WordPress ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience WordPress, r\u00e9f\u00e9rences clients, ma\u00eetrise des plugins SEO) et renvoie vers des annuaires comme Sortlist. L\'agence qui structure son contenu avec une m\u00e9thodologie d\u00e9taill\u00e9e et des r\u00e9sultats chiffr\u00e9s a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site WordPress", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 10 \u00e0 12 points couvrant les permaliens, les plugins, les images, la mise en cache et le balisage schema.org. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont WPBeginner, Kinsta et les documentations de Yoast.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "WordPress vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. WordPress est pr\u00e9sent\u00e9 comme plus flexible mais n\u00e9cessitant plus de maintenance. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO courants sur WordPress", le LLM fournit une liste de 8 \u00e0 10 probl\u00e8mes avec solutions pour chacun. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour un site WordPress, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus \u00e9ditoriaux). Yoast SEO et RankMath g\u00e8rent nativement la plupart de ces types. Le balisage permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es structur\u00e9es pour leurs r\u00e9ponses.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site WordPress par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour WordPress',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site WordPress ?',
        answer:
          'Le budget SEO pour un site WordPress d\u00e9pend du nombre de pages, de la complexit\u00e9 technique et du niveau de concurrence. Chez Rankwell, les accompagnements SEO WordPress d\u00e9marrent \u00e0 1 500 EUR/mois pour un site vitrine de moins de 50 pages, et atteignent 3 000 \u00e0 6 000 EUR/mois pour les sites \u00e9ditoriaux ou e-commerce WooCommerce avec des milliers de pages. Ce budget inclut l\'audit technique, l\'optimisation des plugins, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur WordPress ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (nettoyage de plugins, vitesse de chargement, redirections). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les optimisations techniques WordPress (crawl budget, Core Web Vitals) produisent des effets mesurables d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial.',
      },
      {
        question: 'Faut-il choisir Yoast SEO ou RankMath pour WordPress ?',
        answer:
          'Yoast SEO et RankMath sont les deux plugins SEO de r\u00e9f\u00e9rence pour WordPress. Yoast est le plus populaire avec une interface intuitive et une version gratuite g\u00e9n\u00e9reuse. RankMath offre plus de fonctionnalit\u00e9s gratuites (analyse multi-mots-cl\u00e9s, redirections int\u00e9gr\u00e9es, schema.org avanc\u00e9). Rankwell travaille avec les deux plugins et recommande celui qui correspond le mieux \u00e0 votre configuration existante et \u00e0 vos besoins sp\u00e9cifiques.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site WordPress ?',
        answer:
          'La lenteur d\'un site WordPress provient g\u00e9n\u00e9ralement de trois causes : trop de plugins actifs (20+ chargent du JavaScript inutile), images non compress\u00e9es, et h\u00e9bergement mutualis\u00e9 sous-dimensionn\u00e9. Rankwell commence par un audit de performance qui identifie les plugins responsables de la lenteur, remplace les doublons, configure un syst\u00e8me de cache (WP Rocket), convertit les images en WebP et met en place un CDN.',
      },
      {
        question: 'Comment faire citer mon site WordPress par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site WordPress, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions), un balisage schema.org complet (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces (blogs, presse, annuaires). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'WordPress est-il toujours le meilleur CMS pour le SEO en 2026 ?',
        answer:
          'WordPress reste le CMS le plus flexible pour le SEO en 2026, gr\u00e2ce \u00e0 son contr\u00f4le total sur le code HTML, ses plugins SEO matures et sa communaut\u00e9 massive. Cependant, des alternatives comme Webflow (performance native) ou Next.js (SSR et SSG) offrent des avantages techniques sur des points pr\u00e9cis. Le choix d\u00e9pend de vos besoins : WordPress convient aux sites \u00e9ditoriaux, vitrines et WooCommerce. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux sp\u00e9cificit\u00e9s de chaque CMS.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site WordPress ?',
        answer:
          'Rankwell combine l\'expertise SEO technique WordPress (audit de plugins, optimisation de la performance, configuration Yoast/RankMath, schema.org) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de WordPress : surcharge de plugins, contenu dupliqu\u00e9, s\u00e9curit\u00e9, Core Web Vitals. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site WordPress ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site WordPress. Nos consultants SEO & GEO analysent votre installation, vos plugins, votre performance et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO M\u00e9decin', href: '/agence-geo-seo/secteur/medecin' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
        { label: 'E-E-A-T', href: '/glossaire/e-e-a-t' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Drupal', href: '/agence-geo-seo/cms/drupal' },
      { label: 'Joomla', href: '/agence-geo-seo/cms/joomla' },
    ],
  },
};

export default data;
