/**
 * DATA : Page CMS Framer (FR)
 * Route : /agence-geo-seo/cms/framer
 *
 * Framer : SaaS design/prototypage devenu CMS no-code, React-based, SSG rapide.
 * SEO basique (meta, sitemap auto, 301), mais CMS content limite, schema.org
 * manuel en JSON-LD, pas de blog structure, ecosysteme naissant.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'framer',
    title: 'Agence SEO & GEO Framer - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Framer. Runtime React, CMS limit\u00e9, schema.org manuel : m\u00e9thodologie compl\u00e8te pour Framer.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Framer' },
    ],
    title: 'SEO & GEO Framer : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Runtime React de 200 \u00e0 500 Ko, CMS sans cat\u00e9gories hi\u00e9rarchiques, schema.org absent par d\u00e9faut : le r\u00e9f\u00e9rencement d\'un site Framer exige des solutions techniques que le design seul ne couvre pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Framer',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Framer (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Framer',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Framer combine SSG et pr\u00e9-rendu intelligent (TPR) pour livrer des pages statiques depuis un CDN mondial</strong>, avec un LCP moyen inf\u00e9rieur \u00e0 1,5 s. La plateforme g\u00e9n\u00e8re automatiquement sitemap XML, robots.txt, canonical et certificat SSL. Les images sont converties en WebP/AVIF et le JavaScript d\u00e9coup\u00e9 en chunks via Rolldown (LCP am\u00e9lior\u00e9 de 41 %), un socle performant pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Le runtime React de Framer transf\u00e8re 200 \u00e0 500 Ko de JavaScript par page</strong>, contre 50 \u00e0 150 Ko pour un site HTML/Astro \u00e9quivalent. Le CMS ne supporte ni cat\u00e9gories hi\u00e9rarchiques ni relations entre collections, interdisant toute architecture en <a href="/glossaire/cocon-semantique" class="text-rw-blue hover:underline">cocon s\u00e9mantique</a> native. Le schema.org est absent par d\u00e9faut, les redirections 301 plafonn\u00e9es \u00e0 100 (plan Pro) et les canonical custom r\u00e9serv\u00e9s au plan Enterprise.',
    geoAngle:
      'Selon Rankwell, les sites Framer souffrent d\'un d\u00e9ficit structurel de citabilit\u00e9 IA : aucune donn\u00e9e structur\u00e9e par d\u00e9faut, des contenus \u00e9ditoriaux rarement assez profonds pour constituer des passages factuels auto-suffisants, et un \u00e9cosyst\u00e8me tiers trop naissant pour g\u00e9n\u00e9rer des mentions de marque exploitables par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Framer et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des sites Framer non optimis\u00e9s. Chaque point d\u00e9grade le positionnement Google ou r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections par impact.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Runtime React de 200 \u00e0 500 Ko par page',
        'LCP d\u00e9grad\u00e9 sur mobile, score Lighthouse inf\u00e9rieur \u00e0 70 sur les pages lourdes',
        'R\u00e9duction des animations complexes, lazy loading des composants non critiques, suppression des interactions inutiles en dessous de la ligne de flottaison',
      ],
      [
        'Schema.org absent par d\u00e9faut',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM en extraction factuelle',
        'Injection manuelle de JSON-LD via Custom Code : WebSite, Organization, BreadcrumbList, FAQPage, avec variables CMS dynamiques (syntaxe {{}})',
      ],
      [
        'CMS sans cat\u00e9gories hi\u00e9rarchiques ni tags',
        'Architecture plate, pas de cocon s\u00e9mantique natif, maillage interne limit\u00e9',
        'Cr\u00e9ation de pages piliers manuelles avec liens contextuels vers les pages CMS, structuration par collections th\u00e9matiques',
      ],
      [
        'Slugs d\'URL non traduisibles en multilingue',
        'URLs identiques en FR et EN, signal de langue affaibli pour Google',
        'Configuration des balises hreflang dans le Custom Code, localisation des meta title et descriptions, structure de dossiers /fr/ et /en/',
      ],
      [
        'Redirections 301 limit\u00e9es \u00e0 100 sur le plan Pro',
        'Risque de 404 massifs lors de migrations ou restructurations',
        '\u00c9valuation du plan tarifaire avant migration, gestion des redirections au niveau CDN/DNS si le quota Framer est insuffisant',
      ],
      [
        'Canonical custom r\u00e9serv\u00e9 au plan Enterprise',
        'Contenu dupliqu\u00e9 entre pages similaires sans signal canonical explicite',
        'Audit des pages dupliqu\u00e9es, consolidation du contenu, n\u00e9gociation du plan Enterprise si les canonical sont critiques',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Framer',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Framer.',
    steps: [
      {
        title: 'Audit technique Framer',
        subtitle: 'Analyse compl\u00e8te de votre site Framer : plan tarifaire, collections CMS, animations, poids JavaScript et Core Web Vitals.',
        items: [
          'Inventaire des pages, collections CMS et composants interactifs',
          'Mesure des Core Web Vitals (LCP, INP, CLS) sur mobile et desktop',
          'Analyse du poids JavaScript total : runtime React + animations + composants custom',
          'V\u00e9rification de la configuration : sitemap, robots.txt, redirections 301, canonical',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Framer dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'All\u00e9gement du runtime et des animations',
        subtitle: 'R\u00e9duction du poids JavaScript et des animations Framer pour atteindre un LCP mobile inf\u00e9rieur \u00e0 2,5 s.',
        items: [
          'Audit des animations : suppression des transitions complexes sur mobile',
          'Lazy loading des composants interactifs hors de la zone visible',
          'V\u00e9rification du d\u00e9coupage en chunks (Rolldown) et identification des scripts bloquants',
          'Optimisation des images : compression WebP/AVIF, dimensionnement adaptatif',
        ],
      },
      {
        title: 'Injection du balisage schema.org',
        subtitle: 'Cr\u00e9ation et injection du balisage JSON-LD dans le Custom Code de Framer, avec variables dynamiques pour les pages CMS.',
        items: [
          'Balisage WebSite, Organization, BreadcrumbList pour le site global',
          'Balisage FAQPage sur les pages de FAQ, Article ou BlogPosting sur les contenus \u00e9ditoriaux',
          'Injection dynamique via la syntaxe {{}} de Framer pour les pages CMS (titre, date, auteur)',
          'Validation avec Google Rich Results Test et Schema.org Validator',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage des meta tags, des redirections et des balises hreflang pour maximiser le contr\u00f4le SEO dans Framer.',
        items: [
          'Meta title et description optimis\u00e9s page par page (y compris les pages CMS)',
          'Configuration des redirections 301 pour les anciennes URLs (gestion du quota du plan)',
          'Balises hreflang en Custom Code pour les sites multilingues',
          'Soumission du sitemap XML \u00e0 Google Search Console',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu pour Framer',
        subtitle: 'Cr\u00e9ation de contenus optimis\u00e9s pour le r\u00e9f\u00e9rencement, adapt\u00e9s aux limites du CMS Framer.',
        items: [
          'Pages piliers cr\u00e9\u00e9es en pages statiques avec liens contextuels vers les collections CMS',
          'Maillage interne manuel entre pages et articles (pas de relations CMS natives)',
          'FAQ th\u00e9matiques avec passages factuels auto-suffisants pour l\'extraction par les LLM',
          'Contenu enrichi en donn\u00e9es v\u00e9rifiables (chiffres, comparatifs, sp\u00e9cifications)',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s design, SaaS et no-code.',
        items: [
          'Backlinks depuis des blogs no-code, magazines design et annuaires SaaS',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans l\'\u00e9cosyst\u00e8me startup',
          'Mentions de marque dans des comparatifs Framer vs Webflow et guides d\'achat CMS',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages statiques vs CMS)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et du poids JavaScript global du site Framer',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe design, votre d\u00e9veloppeur ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Framer',
        description: 'Diagnostic complet de votre site Framer : poids JavaScript (runtime React + animations), Core Web Vitals, collections CMS, configuration sitemap/robots.txt/redirections, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Framer',
        description: 'Balisage JSON-LD complet (WebSite, Organization, BreadcrumbList, FAQPage, Article) inject\u00e9 dans le Custom Code de Framer. Variables dynamiques {{}} pour les pages CMS. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pas \u00e0 pas.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages et articles optimis\u00e9s SEO et GEO. Int\u00e9gration dans le CMS Framer ou en pages statiques. Maillage interne manuel pour compenser l\'absence de relations entre collections.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs no-code, comparateurs de plateformes design et m\u00e9dias sp\u00e9cialis\u00e9s SaaS/startup. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique, \u00e9volution du Score GEO, Core Web Vitals, poids JavaScript du runtime Framer et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Framer dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site Framer ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Framer ?", le LLM ne recommande aucune agence par son nom. Il fournit 5 \u00e0 6 crit\u00e8res de s\u00e9lection (exp\u00e9rience no-code, ma\u00eetrise des contraintes Framer, r\u00e9f\u00e9rences SaaS/design). SLASHR (Lille) est mentionn\u00e9e comme proposition de service, sans recommandation directe. Le march\u00e9 francophone est vide : aucune agence n\'est cit\u00e9e nativement.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Framer", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant les meta tags, les slugs, le schema.org en JSON-LD via Custom Code, la compression des images et la r\u00e9duction des animations. Les sources dominantes sont anglophones : clicks.supply, BRIX Templates, documentation officielle Framer.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Framer vs Webflow pour le SEO", le LLM produit un tableau de 6 \u00e0 8 crit\u00e8res. Webflow est syst\u00e9matiquement pr\u00e9sent\u00e9 comme sup\u00e9rieur en SEO avanc\u00e9 (controle du sitemap, redirections wildcard, CMS hi\u00e9rarchique). Framer est qualifi\u00e9 de "suffisant pour les sites simples". Les contenus structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Framer", le LLM cite le runtime React (200 \u00e0 500 Ko), le schema.org absent, le CMS limit\u00e9 et les redirections plafonn\u00e9es. Les contenus structur\u00e9s en probl\u00e8me/solution avec donn\u00e9es chiffr\u00e9es ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Framer, les types schema.org doivent \u00eatre inject\u00e9s manuellement en JSON-LD via le Custom Code : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation, absent nativement), <code>FAQPage</code> (pages de FAQ), <code>Article</code> ou <code>BlogPosting</code> (contenus CMS). La syntaxe de variables dynamiques <code>{{}}</code> de Framer permet de g\u00e9n\u00e9rer du JSON-LD unique par page CMS. Contrairement \u00e0 WordPress (Yoast/RankMath) ou Webflow (Finsweet), Framer ne dispose d\'aucun outil int\u00e9gr\u00e9 pour le balisage.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Framer par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus, souvent limit\u00e9e par le CMS Framer), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans l\'\u00e9cosyst\u00e8me no-code/design), et la Densit\u00e9 Factuelle (richesse du balisage JSON-LD inject\u00e9 manuellement et pr\u00e9sence d\'entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Framer',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Framer ?',
        answer:
          'Le budget SEO pour un site Framer d\u00e9pend du nombre de pages, du plan tarifaire Framer utilis\u00e9 et du niveau de concurrence sur vos mots-cl\u00e9s. Chez Rankwell, les accompagnements SEO Framer d\u00e9marrent \u00e0 1 200 EUR/mois pour un site vitrine de moins de 30 pages, et atteignent 2 500 \u00e0 4 000 EUR/mois pour les sites avec CMS dynamique et strat\u00e9gie de contenu \u00e9ditoriale. Ce budget inclut l\'audit technique, l\'injection du balisage schema.org, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Framer ?',
        answer:
          'Les corrections techniques (all\u00e9gement du runtime, injection du schema.org, configuration des redirections) produisent des effets mesurables en 1 \u00e0 2 mois. Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu, car la strat\u00e9gie de contenu sur Framer est plus lente \u00e0 d\u00e9ployer (maillage interne manuel, pas de cocon s\u00e9mantique natif). Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre site Framer.',
      },
      {
        question: 'Comment ajouter le balisage schema.org sur un site Framer ?',
        answer:
          'Framer ne g\u00e9n\u00e8re aucun balisage schema.org par d\u00e9faut. Il faut injecter du JSON-LD manuellement dans le Custom Code (section head) du site. Pour les pages CMS, la syntaxe de variables dynamiques {{}} de Framer permet de g\u00e9n\u00e9rer un balisage unique par page (titre, date, auteur). Rankwell fournit un kit JSON-LD complet (WebSite, Organization, BreadcrumbList, FAQPage, Article) pr\u00eat \u00e0 int\u00e9grer, valid\u00e9 avec Google Rich Results Test.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site Framer ?',
        answer:
          'Le poids d\'un site Framer provient principalement du runtime React (200 \u00e0 500 Ko de JavaScript), des animations complexes et des images non optimis\u00e9es. Rankwell commence par un audit de performance qui identifie les composants les plus lourds, supprime les animations non essentielles sur mobile, configure le lazy loading des \u00e9l\u00e9ments hors viewport et v\u00e9rifie que Framer exploite correctement le d\u00e9coupage en chunks Rolldown et la compression WebP/AVIF.',
      },
      {
        question: 'Comment faire citer mon site Framer par ChatGPT et Perplexity ?',
        answer:
          'Les sites Framer sont rarement cit\u00e9s par les moteurs IA, car leur CMS produit peu de contenu \u00e9ditorial profond et aucun balisage schema.org natif. Pour augmenter votre citabilit\u00e9, trois actions sont n\u00e9cessaires : injecter du JSON-LD complet, publier des contenus avec des donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, sp\u00e9cifications), et obtenir des mentions de votre marque sur des sources tierces. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Framer est-il adapt\u00e9 pour le SEO en 2026 ?',
        answer:
          'Framer est adapt\u00e9 pour le SEO de sites vitrines, portfolios et landing pages de startups. Sa performance SSG native et son CDN mondial offrent un bon socle technique. En revanche, pour les strat\u00e9gies de contenu ambitieuses (blog \u00e0 fort volume, e-commerce, cocon s\u00e9mantique), le CMS reste trop limit\u00e9 (pas de cat\u00e9gories, pas de tags, pas de relations entre collections). Rankwell adapte sa m\u00e9thodologie SEO et GEO au p\u00e9rim\u00e8tre r\u00e9el de Framer, sans promettre ce que la plateforme ne peut pas d\u00e9livrer.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Framer ?',
        answer:
          'Rankwell combine l\'expertise SEO technique sur les plateformes no-code (Framer, Webflow, Squarespace) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques de Framer : runtime React lourd, schema.org absent, CMS limit\u00e9, redirections plafonn\u00e9es. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA, un angle que vos concurrents ne couvrent pas.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Framer ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Framer. Nos consultants SEO & GEO analysent votre runtime, vos collections CMS, votre balisage schema.org et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO H\u00f4tel', href: '/agence-geo-seo/secteur/hotel' },
        { label: 'SEO Agence immobili\u00e8re', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
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
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'Wix', href: '/agence-geo-seo/cms/wix' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Next.js', href: '/agence-geo-seo/cms/nextjs' },
    ],
  },
};

export default data;
