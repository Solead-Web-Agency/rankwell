/**
 * DATA : Page CMS Webflow (FR)
 * Route : /agence-geo-seo/cms/webflow
 *
 * Webflow : SaaS no-code/low-code, controle HTML/CSS total, CDN Fastly,
 * pas de plugins SEO, schema.org en custom code, collections CMS limitees.
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'webflow',
    title: 'Agence SEO & GEO Webflow - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Webflow. Custom code schema.org, collections CMS, Core Web Vitals, CDN Fastly : m\u00e9thodologie compl\u00e8te pour Webflow.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Webflow' },
    ],
    title: 'SEO & GEO Webflow : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Absence de balisage schema.org natif, collections CMS limit\u00e9es pour les gros catalogues, custom code obligatoire pour le SEO avanc\u00e9 : le r\u00e9f\u00e9rencement d\'un site Webflow exige une expertise que le no-code seul ne couvre pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Webflow',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Webflow (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Webflow',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Webflow propulse environ 822 000 sites avec un code HTML/CSS s\u00e9mantiquement propre</strong> et un CDN Fastly int\u00e9gr\u00e9 (TTFB 30 % plus rapide que l\'h\u00e9bergement mutualis\u00e9). Les meta-tags, redirections 301, sitemap XML et Open Graph sont configurables nativement par page et par collection CMS, ce qui en fait une plateforme solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Webflow ne propose aucun balisage schema.org natif</strong> : chaque type doit \u00eatre inject\u00e9 via Custom Code. Les collections CMS sont limit\u00e9es \u00e0 10 000 \u00e9l\u00e9ments, il n\'y a pas de plugin SEO central, et la <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">cannibalisation SEO</a> peut survenir entre pages statiques et pages CMS traitant le m\u00eame sujet.',
    geoAngle:
      'Selon Rankwell, les sites Webflow disposent d\'un avantage en citabilit\u00e9 IA gr\u00e2ce \u00e0 leur HTML propre lisible par GPTBot et ClaudeBot, mais cet avantage reste latent tant que le schema.org n\'est pas inject\u00e9 en custom code et que les collections CMS ne contiennent pas de passages factuels auto-suffisants.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilit\u00e9 d\'une marque par les LLM d\u00e9pend moins de sa notori\u00e9t\u00e9 que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait v\u00e9rifiable, une donn\u00e9e sourc\u00e9e ou une distinction formalis\u00e9e sera extrait pr\u00e9f\u00e9rentiellement par les moteurs IA, ind\u00e9pendamment de son autorit\u00e9 de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilit\u00e9',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Webflow et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Webflow non optimis\u00e9s par un sp\u00e9cialiste SEO. Le no-code simplifie la cr\u00e9ation, mais chaque erreur de configuration se r\u00e9percute directement sur le positionnement Google et la visibilit\u00e9 dans les moteurs IA.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Absence de schema.org (pas de balisage natif)',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD (Organization, WebSite, BreadcrumbList, FAQPage) via Custom Code embed dans les page settings et le project settings',
      ],
      [
        'Indexation du sous-domaine webflow.io active',
        'Contenu dupliqu\u00e9 entre domaine custom et webflow.io, dilution du crawl',
        'D\u00e9sactivation dans Settings > SEO > Indexation Webflow + v\u00e9rification via Search Console',
      ],
      [
        'Animations Interactions 2.0 non audit\u00e9es',
        'JavaScript suppl\u00e9mentaire, d\u00e9gradation du LCP et de l\'INP sur mobile',
        'Audit PageSpeed par page, suppression des animations non visibles au-dessus de la ligne de flottaison, lazy-trigger sur scroll',
      ],
      [
        'Collections CMS avec slugs g\u00e9n\u00e9riques ("item-1", "item-2")',
        'URL non lisibles, perte de signal s\u00e9mantique pour Google et les LLM',
        'Renommage syst\u00e9matique des slugs avec mot-cl\u00e9 cible, audit des URL existantes, redirections 301 si n\u00e9cessaire',
      ],
      [
        'Images non compress\u00e9es dans le CMS (PNG/JPEG volumineux)',
        'LCP > 4s, p\u00e9nalit\u00e9 Core Web Vitals sur mobile',
        'Conversion en WebP avant upload, dimensionnement responsif via srcset natif Webflow, lazy loading sur les images below the fold',
      ],
      [
        'Hi\u00e9rarchie Hn cass\u00e9e (plusieurs H1, H2 utilis\u00e9s pour le style)',
        'Confusion s\u00e9mantique pour les crawlers, perte de pertinence th\u00e9matique',
        'Audit de la structure Hn page par page, correction dans le Designer Webflow (un seul H1, cascade logique H2 > H3 > H4)',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Webflow',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Webflow.',
    steps: [
      {
        title: 'Audit technique Webflow',
        subtitle: 'Analyse compl\u00e8te du projet Webflow : structure des collections CMS, configuration du domaine custom, Core Web Vitals et animations.',
        items: [
          'Inventaire des collections CMS, des pages statiques et des template pages',
          'Mesure des Core Web Vitals (LCP, INP, CLS) sur mobile et desktop via PageSpeed Insights',
          'V\u00e9rification de la d\u00e9sactivation de l\'indexation webflow.io et du canonical vers le domaine custom',
          'Audit des animations Interactions 2.0 et de leur impact sur le JavaScript total',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Webflow dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et restructuration du projet',
        subtitle: 'Rationalisation des collections CMS, suppression des pages orphelines et correction de la hi\u00e9rarchie Hn.',
        items: [
          'Suppression des pages CMS en doublon avec les pages statiques (cannibalisation)',
          'Correction de la hi\u00e9rarchie Hn sur chaque page (un seul H1, cascade logique)',
          'Renommage des slugs CMS avec les mots-cl\u00e9s cibles',
          'Nettoyage du code custom obsol\u00e8te dans les embeds',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration des Core Web Vitals en exploitant le CDN Fastly natif et en r\u00e9duisant le poids des assets.',
        items: [
          'Compression des images en WebP avec dimensionnement responsif (srcset natif Webflow)',
          'Audit et r\u00e9duction des animations Interactions 2.0 sur mobile',
          'Lazy loading syst\u00e9matique sur les images et vid\u00e9os below the fold',
          'Minification CSS/JS automatique v\u00e9rifi\u00e9e via les Webflow project settings',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Injection du balisage schema.org en custom code et param\u00e9trage complet des meta-tags pour chaque page et collection.',
        items: [
          'Injection JSON-LD : Organization, WebSite, BreadcrumbList, FAQPage dans les Custom Code du projet et des pages',
          'Configuration des meta title et description par page statique et par collection item',
          'Sitemap XML natif v\u00e9rifi\u00e9 et soumis \u00e0 Google Search Console',
          'Redirections 301 natives configur\u00e9es pour les anciennes URL (onglet Redirects Webflow)',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Webflow',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s dans les collections CMS, optimis\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA.',
        items: [
          'Pages piliers (pages statiques) + articles satellites (collection CMS Blog) en cocon s\u00e9mantique',
          'Maillage interne entre pages statiques et \u00e9l\u00e9ments de collection via les champs Reference et Multi-Reference',
          'FAQ th\u00e9matiques int\u00e9gr\u00e9es avec balisage FAQPage en custom code embed',
          'Passages factuels auto-suffisants dans chaque Rich Text field, con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs no-code, magazines tech et comparateurs SaaS',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 th\u00e9matique (Webflow Blog, Product Hunt, Medium)',
          'Mentions de marque dans des articles comparatifs et guides CMS',
          'Chaque mention externe renforce le Domain Rating et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page (statiques + CMS)',
          'Trafic organique segment\u00e9 par type de contenu (pages statiques vs collection items)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi des animations Webflow ajout\u00e9es',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe design, votre d\u00e9veloppeur Webflow ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Webflow',
        description: 'Diagnostic complet de votre projet Webflow : structure des collections CMS, hi\u00e9rarchie Hn, Core Web Vitals, animations, indexation du sous-domaine webflow.io, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Webflow',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et types sp\u00e9cifiques \u00e0 votre activit\u00e9, livr\u00e9 en JSON-LD pr\u00eat \u00e0 coller dans les blocs Custom Code embed de Webflow. Guide d\'injection avec captures d\'\u00e9cran du Designer.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles CMS et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans les collections CMS Webflow via l\'Editor ou le Designer, avec configuration des champs SEO pour chaque collection item.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs no-code, comparateurs SaaS et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page statique et collection item, trafic organique segment\u00e9, \u00e9volution du Score GEO, Core Web Vitals et suivi des animations Webflow ajout\u00e9es au projet.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Webflow dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Webflow ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Contrairement aux requ\u00eates WordPress, il cite des agences sp\u00e9cialis\u00e9es Webflow par leur nom (Digidop, Noqode, Synqro). Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, vos concurrents captent ce canal d\'acquisition \u00e0 votre place.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Webflow ?", le LLM cite plusieurs agences par leur nom, contrairement aux requ\u00eates WordPress o\u00f9 il se limite \u00e0 des crit\u00e8res g\u00e9n\u00e9riques. Il mentionne Digidop (premi\u00e8re agence fran\u00e7aise sp\u00e9cialis\u00e9e Webflow, 100+ projets), Noqode (positionnement AEO/moteurs IA), Majorflow et Synqro (Webflow Partner certifi\u00e9e). Il distingue les agences certifi\u00e9es Webflow Partner des agences SEO g\u00e9n\u00e9ralistes. L\'agence qui combine expertise Webflow et m\u00e9thodologie GEO document\u00e9e a le potentiel de s\'ins\u00e9rer dans cette liste.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Webflow", le LLM produit un guide structur\u00e9 en 9 \u00e0 12 points insistant sur les capacit\u00e9s natives (meta-tags, redirections 301, sitemap, SSL). Il souligne que l\'optimisation avanc\u00e9e (schema.org, hreflang) passe par du custom code. Sources privil\u00e9gi\u00e9es : Webflow Blog officiel, Finsweet SEO Guide, Superforge, Elias Studio.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Webflow vs WordPress pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. Webflow est pr\u00e9sent\u00e9 comme plus rapide par d\u00e9faut (CDN Fastly, code propre) mais moins flexible (pas de Yoast, collections limit\u00e9es). Les sites publiant des comparatifs structur\u00e9s avec donn\u00e9es mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Webflow", le LLM identifie 7 \u00e0 10 probl\u00e8mes sp\u00e9cifiques : slugs CMS g\u00e9n\u00e9riques, indexation webflow.io, animations Interactions 2.0 lourdes, absence de schema.org natif, hi\u00e9rarchie Hn cass\u00e9e. Les contenus structur\u00e9s en probl\u00e8me/solution ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour un site Webflow, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (collection Blog). Webflow ne g\u00e8re aucun de ces types nativement. Le balisage doit \u00eatre inject\u00e9 en JSON-LD dans les blocs Custom Code (project settings pour les types globaux, page settings pour les types sp\u00e9cifiques). Finsweet propose des composants facilitant l\'injection, mais la configuration reste manuelle.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Webflow par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus dans les collections CMS et les pages statiques), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les m\u00e9dias no-code), et la Densit\u00e9 Factuelle (richesse du balisage schema.org inject\u00e9 en custom code, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les Rich Text fields).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Webflow',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Webflow ?',
        answer:
          'Le budget SEO pour un site Webflow d\u00e9pend du nombre de pages statiques et de collections CMS, de la complexit\u00e9 du balisage schema.org \u00e0 injecter et du niveau de concurrence. Chez Rankwell, les accompagnements SEO Webflow d\u00e9marrent \u00e0 1 500 EUR/mois pour un site vitrine de moins de 30 pages, et atteignent 3 000 \u00e0 5 000 EUR/mois pour les sites avec plusieurs collections CMS et des besoins en contenu \u00e9ditorial. Ce budget inclut l\'audit technique, l\'injection du schema.org en custom code, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Webflow ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (d\u00e9sactivation de l\'indexation webflow.io, injection du schema.org, correction des slugs CMS). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les optimisations de performance (images WebP, audit des animations) produisent des effets mesurables sur les Core Web Vitals d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial.',
      },
      {
        question: 'Comment ajouter le balisage schema.org sur un site Webflow ?',
        answer:
          'Webflow ne g\u00e8re pas le schema.org nativement. Le balisage doit \u00eatre inject\u00e9 en JSON-LD dans les blocs Custom Code : dans les project settings pour les types globaux (Organization, WebSite) et dans les page settings pour les types sp\u00e9cifiques (FAQPage, BreadcrumbList, Article). Rankwell livre un kit JSON-LD pr\u00eat \u00e0 coller, avec un guide illustr\u00e9 pour chaque injection dans le Designer Webflow. Finsweet Attributes peut faciliter certaines int\u00e9grations, mais la configuration reste manuelle.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de chargement de mon site Webflow ?',
        answer:
          'Webflow b\u00e9n\u00e9ficie d\'un CDN Fastly et d\'une minification automatique, mais les animations Interactions 2.0, les images non compress\u00e9es et les embeds tiers (vid\u00e9os, widgets) d\u00e9gradent les Core Web Vitals. Rankwell audite chaque page avec PageSpeed Insights, identifie les animations responsables d\'un LCP \u00e9lev\u00e9, convertit les images en WebP avant upload, applique le lazy loading sur les \u00e9l\u00e9ments below the fold et supprime les scripts custom obsol\u00e8tes.',
      },
      {
        question: 'Comment faire citer mon site Webflow par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Webflow, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables dans les Rich Text fields de vos collections CMS, un balisage schema.org complet inject\u00e9 en custom code (WebSite, Organization, FAQPage), et des mentions de votre marque sur des sources tierces (blogs no-code, presse, annuaires). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'Webflow est-il un bon CMS pour le SEO en 2026 ?',
        answer:
          'Webflow offre d\'excellentes bases SEO natives : code HTML propre, CDN Fastly rapide, meta-tags configurables par page, redirections 301, sitemap automatique. Il surpasse WordPress en performance par d\u00e9faut (pas de plugins parasites, TTFB 30 % plus rapide que l\'h\u00e9bergement mutualis\u00e9). En revanche, il manque de flexibilit\u00e9 pour le SEO avanc\u00e9 : pas de schema.org natif, collections CMS limit\u00e9es \u00e0 10 000 \u00e9l\u00e9ments, pas d\'acc\u00e8s serveur. Rankwell adapte sa m\u00e9thodologie aux contraintes sp\u00e9cifiques de Webflow pour en exploiter les forces.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Webflow ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Webflow (injection schema.org en custom code, optimisation des collections CMS, audit des animations Interactions 2.0, Core Web Vitals) avec la dimension GEO que les agences Webflow sp\u00e9cialis\u00e9es n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques propres \u00e0 Webflow : absence de balisage natif, collections CMS limit\u00e9es, cannibalisation pages statiques/CMS. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Webflow ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Webflow. Nos consultants SEO & GEO analysent vos collections CMS, votre balisage schema.org, vos Core Web Vitals et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO Agence', href: '/agence-geo-seo/secteur/agence' },
        { label: 'SEO SaaS', href: '/agence-geo-seo/secteur/saas' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
        { label: 'SEO Framer', href: '/agence-geo-seo/cms/framer' },
      ],
      glossaire: [
        { label: 'Citabilit\u00e9', href: '/glossaire/citabilite' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'Framer', href: '/agence-geo-seo/cms/framer' },
      { label: 'Wix', href: '/agence-geo-seo/cms/wix' },
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
    ],
  },
};

export default data;
