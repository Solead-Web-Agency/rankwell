/**
 * DATA : Page CMS Weebly (FR)
 * Route : /agence-geo-seo/cms/weebly
 *
 * Weebly : SaaS rachet\u00e9 par Square en 2018, en fin de vie (remplac\u00e9 par Square Online).
 * SEO tr\u00e8s basique, drag-and-drop, pas de schema.org natif, redirections limit\u00e9es.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'weebly',
    title: 'Agence SEO & GEO Weebly - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Weebly. Audit technique, migration Square Online, limites SEO natives, performance : m\u00e9thodologie compl\u00e8te pour Weebly.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Weebly' },
    ],
    title: 'SEO & GEO Weebly : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Balises H limit\u00e9es \u00e0 H2, URLs impos\u00e9es avec pr\u00e9fixes /store/ et /blog/, absence de schema.org natif : le r\u00e9f\u00e9rencement sur Weebly se heurte \u00e0 des contraintes structurelles que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO technique et GEO pour maximiser votre visibilit\u00e9 ou piloter une migration sans perte de trafic.',
    ctaText: 'Demander un audit SEO & GEO Weebly',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Weebly (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Weebly',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Weebly propulse encore environ 700 000 sites actifs</strong>, principalement des vitrines de TPE et freelances. La plateforme g\u00e8re le SSL, le responsive et le sitemap XML automatiquement. L\'\u00e9diteur drag-and-drop permet de modifier titres, meta descriptions et textes alt sans code. Pour les sites de moins de 20 pages, Weebly offre un socle suffisant pour d\u00e9marrer une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Weebly limite nativement les balises heading \u00e0 H2</strong>. Les URLs imposent des pr\u00e9fixes en anglais (/store/, /blog/), le nom du site est concat\u00e9n\u00e9 \u00e0 chaque title, et il n\'existe aucun balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">schema.org</a> natif ni contr\u00f4le du sitemap. Depuis le rachat par Square en 2018, la plateforme ne re\u00e7oit plus de mises \u00e0 jour SEO et oriente les utilisateurs vers Square Online.',
    geoAngle:
      'Selon Rankwell, l\'absence de schema.org natif et l\'impossibilit\u00e9 de structurer les contenus au-del\u00e0 du H2 rendent les sites Weebly parmi les moins citables par les moteurs IA. Sans injection de JSON-LD via l\'\u00e9diteur de code, un site Weebly reste invisible pour ChatGPT, Perplexity et Gemini.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Weebly et solutions',
    interpretation:
      'Ces probl\u00e8mes sont inh\u00e9rents \u00e0 l\'architecture ferm\u00e9e de Weebly. Certains peuvent \u00eatre att\u00e9nu\u00e9s par des injections de code custom, d\'autres n\u00e9cessitent une migration vers un CMS plus flexible. Un audit technique identifie les limites corrigeables et celles qui justifient un changement de plateforme.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Balises heading limit\u00e9es \u00e0 H2 (pas de H3/H4 natifs)',
        'Structure Hn plate, Google ne comprend pas la hi\u00e9rarchie du contenu',
        'Injection de balises H3/H4 via l\'\u00e9diteur de code HTML int\u00e9gr\u00e9 ou app tierce (Weebly App Center)',
      ],
      [
        'URLs avec pr\u00e9fixes impos\u00e9s (/store/, /blog/, /category/)',
        'URLs non optimis\u00e9es, pr\u00e9fixes en anglais sur les sites francophones',
        'Int\u00e9gration de mots-cl\u00e9s dans la partie modifiable du slug, redirections 301 si migration',
      ],
      [
        'Nom du site concat\u00e9n\u00e9 dans chaque balise title',
        'Titles trop longs, dilution du signal de mots-cl\u00e9s principaux',
        'R\u00e9duction du nom de site au strict minimum dans les r\u00e9glages g\u00e9n\u00e9raux Weebly',
      ],
      [
        'Absence de schema.org natif',
        'Pas de rich snippets, invisibilit\u00e9 pour les moteurs IA',
        'Injection manuelle de JSON-LD dans le header ou le footer via l\'\u00e9diteur de code Weebly',
      ],
      [
        'Pas de contr\u00f4le sur le sitemap XML g\u00e9n\u00e9r\u00e9 automatiquement',
        'Pages inutiles index\u00e9es, crawl budget gaspill\u00e9',
        'D\u00e9sindexation manuelle via meta robots noindex sur les pages non strat\u00e9giques',
      ],
      [
        'Performances de chargement m\u00e9diocres (pas de CDN configurable, pas de cache avanc\u00e9)',
        'LCP \u00e9lev\u00e9 sur mobile, Core Web Vitals d\u00e9grad\u00e9s',
        'Compression des images avant upload, r\u00e9duction des \u00e9l\u00e9ments drag-and-drop lourds (vid\u00e9os, GIF), activation du lazy loading via code embed',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Weebly',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Weebly.',
    steps: [
      {
        title: 'Audit technique Weebly',
        subtitle: 'Analyse compl\u00e8te de la configuration Weebly : structure Hn, URLs, balises title, sitemap, performances et limites de la plateforme.',
        items: [
          'Inventaire des pages et de leur structure Hn (H1/H2 seuls ou H3+ inject\u00e9s)',
          'Analyse des URLs : pr\u00e9fixes impos\u00e9s, slugs modifi\u00e9s, redirections actives',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'V\u00e9rification du sitemap XML g\u00e9n\u00e9r\u00e9 automatiquement et des pages index\u00e9es',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Weebly dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Diagnostic de migration',
        subtitle: '\u00c9valuation de la pertinence d\'une migration depuis Weebly vers un CMS plus performant (WordPress, Webflow, Shopify) ou vers Square Online.',
        items: [
          'Inventaire des pages, contenus et m\u00e9dias \u00e0 migrer',
          'Analyse des URLs actuelles et plan de redirections 301 complet',
          'Comparatif des CMS cibles selon les besoins (vitrine, e-commerce, blog)',
          'Estimation du risque SEO de la migration et plan de mitigation',
        ],
      },
      {
        title: 'Optimisation dans les limites de Weebly',
        subtitle: 'Si la migration n\'est pas imm\u00e9diate, optimisation maximale du SEO dans le cadre contraint de la plateforme.',
        items: [
          'Injection de balises H3/H4 via l\'\u00e9diteur de code HTML int\u00e9gr\u00e9',
          'Optimisation des titres de page (r\u00e9duction du nom de site, mots-cl\u00e9s en d\u00e9but de title)',
          'Compression et renommage des images avant upload (alt text, noms de fichiers descriptifs)',
          'Ajout de meta robots noindex sur les pages non strat\u00e9giques',
        ],
      },
      {
        title: 'Injection de schema.org',
        subtitle: 'Ajout manuel de donn\u00e9es structur\u00e9es JSON-LD dans Weebly pour compenser l\'absence de balisage natif.',
        items: [
          'Balisage WebSite et Organization dans le header global via l\'\u00e9diteur de code',
          'BreadcrumbList inject\u00e9 page par page via le champ "Header Code" de Weebly',
          'FAQPage sur les pages de questions-r\u00e9ponses',
          'LocalBusiness pour les sites de commerces locaux (adresse, horaires, avis)',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, adapt\u00e9s aux contraintes de l\'\u00e9diteur Weebly.',
        items: [
          'Articles de blog de 800+ mots avec structure Hn inject\u00e9e en HTML',
          'Pages piliers couvrant les th\u00e9matiques principales de l\'activit\u00e9',
          'Maillage interne entre pages et articles (liens contextuels dans le contenu)',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de qualit\u00e9, d\'autant plus importants que Weebly offre peu de leviers techniques internes.',
        items: [
          'Backlinks depuis des annuaires locaux, blogs th\u00e9matiques et sites partenaires',
          'Inscriptions sur les plateformes d\'avis (Google Business Profile, Trustpilot)',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans le secteur d\'activit\u00e9',
          'Mentions de marque dans des comparatifs et guides pour renforcer la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et le suivi de la migration si applicable.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages, blog, boutique)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          'Suivi des redirections 301 et de l\'indexation post-migration si applicable',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe, que vous restiez sur Weebly ou que vous migriez vers un autre CMS.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Weebly',
        description: 'Diagnostic complet de votre site Weebly : structure Hn (H2 natifs vs H3+ inject\u00e9s), URLs avec pr\u00e9fixes impos\u00e9s, balises title concat\u00e9n\u00e9es, Core Web Vitals, sitemap automatique, avec la liste des corrections possibles et des limites non contournables.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org injectable dans Weebly',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et LocalBusiness en JSON-LD, pr\u00eat \u00e0 coller dans le champ "Header Code" de Weebly. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pour chaque type de page.',
      },
      {
        id: 4,
        title: 'Plan de migration SEO-safe',
        description: 'Inventaire des pages et contenus, tableau de correspondance des URLs anciennes et nouvelles, plan de redirections 301 complet, calendrier de migration par lots et checklist de validation post-migration.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des annuaires locaux, blogs th\u00e9matiques et sites partenaires de votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, \u00e9tat des redirections 301 (si migration en cours) et recommandations pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Weebly dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel outil pour cr\u00e9er un site facilement ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site Weebly n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal de d\u00e9couverte.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Weebly ?", le LLM ne cite aucune agence par son nom. Il fournit des crit\u00e8res de s\u00e9lection g\u00e9n\u00e9riques (exp\u00e9rience sur la plateforme, ma\u00eetrise des limites techniques Weebly). Le volume de sources francophones est tr\u00e8s faible (2 \u00e0 3 sites). Les rares mentions concernent Web Alliance et des blogs sp\u00e9cialis\u00e9s comme NoCode-SEO. Aucune agence n\'est recommand\u00e9e directement.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Weebly", le LLM g\u00e9n\u00e8re un guide en 7 \u00e0 10 points basiques : titres, meta descriptions, alt text, URLs, sitemap. Il pr\u00e9cise que Weebly g\u00e8re le SSL et le responsive automatiquement mais que les options SEO avanc\u00e9es sont limit\u00e9es. Les sources privil\u00e9gi\u00e9es sont le Help Center Weebly, Page Optimizer Pro et Weeblytutorials. Aucune agence cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Weebly vs Wix pour le SEO", le LLM produit un comparatif syst\u00e9matiquement d\u00e9favorable \u00e0 Weebly. Wix est pr\u00e9sent\u00e9 comme sup\u00e9rieur : SEO Wiz int\u00e9gr\u00e9, Google Search Console native, templates plus performants sur mobile. Weebly est critiqu\u00e9 sur ses r\u00e9glages SEO difficiles \u00e0 trouver, l\'absence de checklist SEO, et des performances mobiles m\u00e9diocres.</p><h4>Requ\u00eates de migration</h4><p>Sur les requ\u00eates li\u00e9es \u00e0 la migration Weebly, le LLM confirme la fin de vie de la plateforme et la transition vers Square Online. Il pr\u00e9cise que la migration n\'est pas automatique : il faut recr\u00e9er le site int\u00e9gralement. Les redirections 301 doivent \u00eatre configur\u00e9es manuellement. Aucune source ne couvre cet angle avec une m\u00e9thodologie SEO structur\u00e9e.</p>',
    structuredData:
      'Weebly ne propose aucun balisage schema.org natif. Pour un site Weebly, les types recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation). Ces balisages doivent \u00eatre inject\u00e9s manuellement en JSON-LD via le champ "Header Code" de Weebly (r\u00e9glages de chaque page) ou via le footer global. Cette injection manuelle est la seule mani\u00e8re d\'obtenir des rich snippets Google et de fournir aux LLM des donn\u00e9es structur\u00e9es exploitables.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Weebly par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org et entit\u00e9s nomm\u00e9es). Sur Weebly, la Densit\u00e9 Factuelle est g\u00e9n\u00e9ralement le score le plus faible en raison de l\'absence de schema.org natif.',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Weebly',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Weebly ?',
        answer:
          'Le budget SEO pour un site Weebly d\u00e9pend du nombre de pages, des limites techniques \u00e0 contourner et de la question de la migration. Chez Rankwell, les accompagnements SEO Weebly d\u00e9marrent \u00e0 800 EUR/mois pour un site vitrine de moins de 20 pages (optimisation dans les limites de la plateforme). Si une migration vers WordPress, Webflow ou Shopify est n\u00e9cessaire, un budget de 2 000 \u00e0 5 000 EUR s\'ajoute pour le pilotage SEO de la migration (redirections 301, correspondance d\'URLs, validation post-migration).',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Weebly ?',
        answer:
          'Les corrections techniques accessibles sur Weebly (titres, meta descriptions, alt text, injection de H3/H4) produisent des effets mesurables en 1 \u00e0 2 mois. Le positionnement sur des mots-cl\u00e9s concurrentiels est limit\u00e9 par les contraintes de la plateforme : sans migration, les gains plafonnent rapidement. En cas de migration vers un CMS plus performant, les premiers r\u00e9sultats post-migration apparaissent en 2 \u00e0 4 mois si les redirections 301 sont correctement configur\u00e9es. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial.',
      },
      {
        question: 'Faut-il migrer depuis Weebly ou rester sur la plateforme ?',
        answer:
          'Weebly est en fin de vie depuis son rachat par Square en 2018. La plateforme ne re\u00e7oit plus de mises \u00e0 jour SEO significatives et Square pousse les utilisateurs vers Square Online. Si votre site g\u00e9n\u00e8re du trafic organique, une migration pilot\u00e9e (avec plan de redirections 301 complet) pr\u00e9serve vos acquis SEO. Pour les sites de moins de 10 pages \u00e0 faible trafic, recr\u00e9er directement le site sur un CMS moderne (WordPress, Webflow) est souvent plus rentable. Rankwell \u00e9value chaque situation et recommande la solution adapt\u00e9e.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de chargement de mon site Weebly ?',
        answer:
          'Weebly ne propose ni CDN configurable ni syst\u00e8me de cache avanc\u00e9. Les leviers accessibles sont la compression des images avant upload (format WebP ou JPEG optimis\u00e9 sous 200 Ko), la r\u00e9duction des \u00e9l\u00e9ments lourds dans l\'\u00e9diteur drag-and-drop (vid\u00e9os en autoplay, GIF anim\u00e9s, widgets tiers), et l\'activation du lazy loading via injection de code dans le footer. Rankwell mesure les Core Web Vitals de chaque page et identifie les \u00e9l\u00e9ments responsables de la lenteur.',
      },
      {
        question: 'Comment faire citer mon site Weebly par ChatGPT et Perplexity ?',
        answer:
          'Les sites Weebly sont particuli\u00e8rement d\u00e9savantag\u00e9s en citabilit\u00e9 IA : absence de schema.org natif, structure Hn plate, contenus souvent courts. Pour augmenter les chances d\'\u00eatre cit\u00e9, trois actions sont prioritaires : injecter du JSON-LD manuellement (WebSite, Organization, FAQPage), produire des contenus longs avec des donn\u00e9es factuelles v\u00e9rifiables, et obtenir des mentions de marque sur des sources tierces (annuaires, blogs, presse locale). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Weebly est-il encore un choix viable pour le SEO en 2026 ?',
        answer:
          'Weebly n\'est plus un choix recommand\u00e9 pour le SEO en 2026. La plateforme est en maintenance minimale depuis le rachat par Square, les fonctionnalit\u00e9s SEO n\'ont pas \u00e9volu\u00e9 (pas de schema.org, balises H limit\u00e9es, pas de contr\u00f4le du sitemap), et Square oriente ses investissements vers Square Online. Pour un site existant, Rankwell maximise le SEO dans les limites de la plateforme tout en pr\u00e9parant une migration vers un CMS plus flexible (WordPress, Webflow, Shopify selon le besoin).',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Weebly ?',
        answer:
          'Rankwell combine la connaissance des limites techniques de Weebly (H tags restreints, URLs impos\u00e9es, absence de schema.org natif) avec une expertise en migration SEO et en visibilit\u00e9 IA (GEO) que 93 % des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes inclut un diagnostic de migration (faut-il rester ou partir ?) et un pilotage complet des redirections 301. Le Score GEO propri\u00e9taire mesure votre visibilit\u00e9 dans les moteurs IA, un enjeu critique pour les sites Weebly qui partent avec un d\u00e9ficit structurel de citabilit\u00e9.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Weebly ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Weebly. Nos consultants SEO & GEO analysent vos contraintes techniques, votre potentiel de migration et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Artisan', href: '/agence-geo-seo/secteur/artisan' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Commerce de proximit\u00e9', href: '/agence-geo-seo/secteur/commerce-proximite' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
      ],
      cms: [
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
        { label: 'SEO Jimdo', href: '/agence-geo-seo/cms/jimdo' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Migration SEO', href: '/glossaire/migration-seo' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Wix', href: '/agence-geo-seo/cms/wix' },
      { label: 'Jimdo', href: '/agence-geo-seo/cms/jimdo' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
    ],
  },
};

export default data;
