/**
 * DATA : Page CMS Jimdo (FR)
 * Route : /agence-geo-seo/cms/jimdo
 *
 * SaaS allemand (Hambourg), cible TPE/artisans.
 * Jimdo Dolphin (IA) + Jimdo Creator (classique, plus mis a jour).
 * SEO tres basique : meta title/description, alt images, pas de 301,
 * pas de schema.org natif, blog minimaliste.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'jimdo',
    title: 'Agence SEO & GEO Jimdo - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Jimdo. Audit technique, contournement des limites Jimdo Dolphin, performance, SEO local : m\u00e9thodologie adapt\u00e9e aux TPE et artisans.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Jimdo' },
    ],
    title: 'SEO & GEO Jimdo : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Meta title global non personnalisable par page dans Jimdo Dolphin, absence de redirections 301, aucun balisage schema.org natif : le r\u00e9f\u00e9rencement d\'un site Jimdo se heurte \u00e0 des limites que les guides g\u00e9n\u00e9ralistes ne couvrent pas. Nos experts combinent SEO technique adapt\u00e9 aux contraintes SaaS et GEO pour positionner votre site sur Google et rendre votre marque citable par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Jimdo',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Jimdo (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Jimdo',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Jimdo alimente pr\u00e8s de 4 % du march\u00e9 des website builders</strong>, dont 43 % de TPE. La plateforme g\u00e8re le SSL, le sitemap XML et le responsive automatiquement. Jimdo Dolphin produit un site fonctionnel en quelques minutes via un questionnaire IA. Pour les TPE et artisans, Jimdo offre une base technique saine pour une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> sans maintenance serveur.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Jimdo Dolphin ne permet pas de personnaliser le meta title page par page</strong>. Les redirections 301 sont absentes dans Dolphin et limit\u00e9es aux plans Business/Shop dans Creator. Aucun balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">schema.org</a> natif, un blog sans cat\u00e9gories ni tags, et aucune extension SEO tierce (contrairement \u00e0 Wix ou WordPress).',
    geoAngle:
      'Selon Rankwell, l\'absence de schema.org prive les LLM de la couche s\u00e9mantique n\u00e9cessaire \u00e0 l\'extraction de faits. Compenser ce d\u00e9ficit impose un travail renforc\u00e9 sur les signaux off-site (fiche Google Business Profile, annuaires sectoriels, mentions de marque) et sur la densit\u00e9 factuelle des contenus publi\u00e9s dans l\'\u00e9diteur Jimdo.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Jimdo et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Jimdo non optimis\u00e9s. Les limites de la plateforme SaaS imposent des solutions de contournement sp\u00e9cifiques. Un audit technique identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections r\u00e9alisables.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Meta title global dans Jimdo Dolphin (titre unique pour toutes les pages)',
        'Perte de pertinence par mot-cl\u00e9, toutes les pages ciblent le m\u00eame signal',
        'Migration vers Creator (si possible) pour le contr\u00f4le par page, ou compensation via les balises H1 et le contenu textuel optimis\u00e9 page par page',
      ],
      [
        'Aucune redirection 301 native (Dolphin) ou limit\u00e9e aux plans premium (Creator)',
        'Perte de jus SEO lors de restructurations, erreurs 404 non corrig\u00e9es',
        'Redirection au niveau du registrar DNS (CNAME + 301 c\u00f4t\u00e9 h\u00e9bergeur de domaine), ou migration vers Creator plan Business',
      ],
      [
        'Absence de schema.org natif',
        'Aucun rich snippet (FAQ, avis, produit), invisibilit\u00e9 s\u00e9mantique pour les LLM',
        'Injection de JSON-LD via le widget HTML de Creator, ou signal off-site (Google Business Profile avec attributs structur\u00e9s)',
      ],
      [
        'Blog minimaliste sans cat\u00e9gories, tags ni URLs personnalisables',
        'Impossible de construire un cocon s\u00e9mantique, pas de maillage th\u00e9matique',
        'Structuration du blog par titres H2/H3 dans chaque article, maillage interne manuel entre articles et pages, ancres descriptives',
      ],
      [
        'Aucun acc\u00e8s aux apps ou extensions SEO tierces',
        'Pas d\'outil d\'analyse de mots-cl\u00e9s, d\'audit on-page ou de monitoring int\u00e9gr\u00e9',
        'Utilisation de Google Search Console + Google Analytics externes, audit SEO par Rankwell avec outils professionnels (Ahrefs, Screaming Frog)',
      ],
      [
        'Images non compress\u00e9es par d\u00e9faut et pas de lazy loading natif sur Creator',
        'Temps de chargement d\u00e9grad\u00e9, LCP \u00e9lev\u00e9 sur mobile',
        'Compression manuelle avant upload (TinyPNG, Squoosh), dimensionnement exact des images, format WebP quand support\u00e9',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Jimdo',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s et les limites techniques de Jimdo.',
    steps: [
      {
        title: 'Audit technique Jimdo',
        subtitle: 'Analyse compl\u00e8te de votre site Jimdo : version utilis\u00e9e (Dolphin ou Creator), plan souscrit, configuration SEO existante et Core Web Vitals.',
        items: [
          'Identification de la version Jimdo (Dolphin ou Creator) et du plan actif (Free, Start, Grow, Business)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'V\u00e9rification des meta title et meta description existants (globaux ou par page)',
          'Inventaire des pages index\u00e9es dans Google Search Console vs pages r\u00e9ellement utiles',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Jimdo dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (y compris ceux sur Wix ou WordPress)',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Cartographie des limites et solutions de contournement',
        subtitle: 'Jimdo impose des contraintes sp\u00e9cifiques. Cette \u00e9tape identifie ce qui est r\u00e9alisable nativement et ce qui n\u00e9cessite des solutions externes.',
        items: [
          'Identification des fonctionnalit\u00e9s bloqu\u00e9es par le plan actuel (301, meta par page, widget HTML)',
          '\u00c9valuation du gain potentiel d\'un changement de plan (Grow vers Business pour les 301)',
          'Liste des solutions de contournement via outils externes (GSC, GTM, DNS)',
          'Recommandation de migration vers un CMS plus flexible si le potentiel SEO le justifie',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement dans les limites de l\'\u00e9diteur Jimdo.',
        items: [
          'Compression et redimensionnement de toutes les images avant upload',
          'R\u00e9duction du nombre de sections par page pour all\u00e9ger le DOM',
          'V\u00e9rification du poids des polices personnalis\u00e9es et des vid\u00e9os embarqu\u00e9es',
          'Test de performance avant/apr\u00e8s via PageSpeed Insights et WebPageTest',
        ],
      },
      {
        title: 'Optimisation SEO on-page',
        subtitle: 'Configuration maximale des param\u00e8tres SEO accessibles dans Jimdo, compl\u00e9t\u00e9e par du contenu optimis\u00e9.',
        items: [
          'R\u00e9daction de meta title et meta description uniques pour chaque page (Creator) ou optimisation via H1 (Dolphin)',
          'Texte alternatif descriptif sur chaque image contenant le mot-cl\u00e9 cible',
          'Structure H1 > H2 > H3 hi\u00e9rarchis\u00e9e dans chaque page',
          'Soumission du sitemap XML \u00e0 Google Search Console',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu et SEO local',
        subtitle: 'Cr\u00e9ation de contenus adapt\u00e9s au format Jimdo et renforcement du SEO local pour les TPE et artisans.',
        items: [
          'Pages de services d\u00e9taill\u00e9es avec donn\u00e9es factuelles (prix, zones, sp\u00e9cialisations)',
          'Articles de blog structur\u00e9s (H2/H3, listes, paragraphes factuels courts)',
          'Optimisation de la fiche Google Business Profile (cat\u00e9gories, attributs, photos, FAQ)',
          'Inscriptions dans les annuaires sectoriels et locaux pour renforcer les citations NAP',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des sources externes, levier principal quand les options on-site sont limit\u00e9es.',
        items: [
          'Backlinks depuis des annuaires professionnels et chambres de commerce locales',
          'Mentions de marque dans des guides locaux et articles comparatifs',
          'Avis clients v\u00e9rifi\u00e9s sur Google Business Profile et plateformes sectorielles',
          'Chaque mention externe compense l\'absence de signaux on-site (schema.org, 301)',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et l\'\u00e9valuation du plafond technique Jimdo.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique mesur\u00e9 via Google Analytics (connect\u00e9 en externe)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA (ChatGPT, Perplexity, Gemini)',
          '\u00c9valuation trimestrielle : le potentiel SEO justifie-t-il une migration vers WordPress ou Webflow ?',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vous-m\u00eame ou votre prestataire web, adapt\u00e9 aux contraintes de Jimdo.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Jimdo',
        description: 'Diagnostic complet de votre site Jimdo : version (Dolphin ou Creator), plan actif, Core Web Vitals, pages index\u00e9es, limites techniques identifi\u00e9es et solutions de contournement class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Guide d\'optimisation on-page Jimdo',
        description: 'Mode d\'emploi pas \u00e0 pas pour configurer les meta title, meta description, textes alternatifs et structure de titres dans l\'\u00e9diteur Jimdo (Dolphin et Creator). Captures d\'\u00e9cran et instructions adapt\u00e9es \u00e0 votre plan.',
      },
      {
        id: 4,
        title: 'Strat\u00e9gie de contenu et SEO local',
        description: 'Plan \u00e9ditorial adapt\u00e9 au blog Jimdo (articles courts, FAQ locales, pages de services), optimisation de la fiche Google Business Profile et liste d\'annuaires sectoriels pour le SEO local.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des annuaires professionnels, chambres de commerce et m\u00e9dias locaux. Suivi des mentions de marque et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page, trafic organique (via Google Analytics externe), \u00e9volution du Score GEO, performance technique Jimdo et recommandation de migration si le plafond est atteint.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Jimdo dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quel artisan choisir pour ce service dans ma ville ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site Jimdo n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence SEO Jimdo</h4><p>Sur "quelle agence SEO pour un site Jimdo ?", le LLM ne cite aucune agence. Il commence par signaler que Jimdo est un constructeur SaaS aux fonctionnalit\u00e9s SEO limit\u00e9es et sugg\u00e8re souvent de migrer vers WordPress ou Webflow pour les projets ambitieux. Il fournit des crit\u00e8res de s\u00e9lection g\u00e9n\u00e9riques (exp\u00e9rience SaaS, compr\u00e9hension des limites Jimdo) et renvoie vers Sortlist ou des freelances. L\'agence qui d\u00e9montre une expertise concr\u00e8te des limites Jimdo a le potentiel d\'\u00eatre cit\u00e9e en premier.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Jimdo", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant les meta title/description, les images, la structure H1/H2/H3, le blog et Google Search Console. Les sources privil\u00e9gi\u00e9es sont le centre d\'aide Jimdo, tooltester.com et websitebuilderexpert.com. Aucune agence n\'est mentionn\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Jimdo vs Wix pour le SEO", le LLM positionne Jimdo en retrait : Wix offre un SEO Wizard, des redirections 301, des apps tierces et un blog avanc\u00e9 que Jimdo ne propose pas. Jimdo est pr\u00e9sent\u00e9 comme adapt\u00e9 aux sites personnels simples. Les contenus qui publient des comparatifs factuels avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO sur Jimdo", le LLM identifie 6 \u00e0 8 limites sp\u00e9cifiques : meta title global Dolphin, absence de 301, pas de schema.org, blog minimaliste, pas d\'extensions SEO. Les contenus qui listent ces limites avec des solutions de contournement concr\u00e8tes sont les premiers extraits comme sources.</p>',
    structuredData:
      'Jimdo ne propose aucun balisage schema.org natif dans Dolphin ni dans Creator. Pour un site Jimdo, les types recommand\u00e9s seraient <code>LocalBusiness</code> (TPE/artisans), <code>WebSite</code> (type principal) et <code>BreadcrumbList</code> (navigation). En l\'absence de support natif, la seule option est l\'injection de JSON-LD via le widget HTML de Creator (plans payants), ou le renforcement des signaux structur\u00e9s via Google Business Profile (cat\u00e9gories, attributs, horaires, FAQ). Les LLM extraient ces signaux externes en compl\u00e9ment du contenu du site.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Jimdo par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus publi\u00e9s dans l\'\u00e9diteur Jimdo), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes : avis Google, backlinks, mentions dans les annuaires), et la Densit\u00e9 Factuelle (richesse factuelle des textes, compens\u00e9e par les donn\u00e9es structur\u00e9es du Google Business Profile en l\'absence de schema.org on-site).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Jimdo',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Jimdo ?',
        answer:
          'Le budget SEO pour un site Jimdo d\u00e9pend du plan souscrit (Free, Start, Grow, Business) et du nombre de pages. Chez Rankwell, les accompagnements SEO Jimdo d\u00e9marrent \u00e0 800 EUR/mois pour un site vitrine de TPE ou d\'artisan. Ce budget inclut l\'audit technique, l\'optimisation on-page dans les limites de l\'\u00e9diteur Jimdo, la strat\u00e9gie de contenu adapt\u00e9e au blog minimaliste, le SEO local (Google Business Profile, annuaires) et le suivi GEO. Si le potentiel SEO justifie une migration vers WordPress ou Webflow, Rankwell \u00e9value le co\u00fbt et le retour sur investissement avant de recommander le changement.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Jimdo ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 2 et 4 mois pour les optimisations on-page (meta title, structure H1, images) et le SEO local (fiche Google Business Profile). Le positionnement sur des mots-cl\u00e9s concurrentiels prend 4 \u00e0 8 mois. Sur Jimdo, le plafond technique est atteint plus vite que sur WordPress ou Webflow : l\'absence de redirections 301, de schema.org et d\'extensions SEO limite la progression au-del\u00e0 d\'un certain seuil. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial et \u00e9value r\u00e9guli\u00e8rement si la plateforme reste adapt\u00e9e.',
      },
      {
        question: 'Jimdo Dolphin ou Jimdo Creator : lequel est le mieux pour le SEO ?',
        answer:
          'Jimdo Creator offre plus de contr\u00f4le SEO que Dolphin : meta title et meta description par page, textes alternatifs modifiables, widget HTML pour injecter du code (schema.org, Google Tag Manager), et redirections 301 sur les plans Business et Shop. Dolphin automatise le SEO de base (sitemaps, SSL) mais impose un titre global non personnalisable par page. Attention : Creator n\'est plus activement mis \u00e0 jour depuis 2024 et les nouveaux clients sont orient\u00e9s vers Dolphin. Rankwell adapte la strat\u00e9gie \u00e0 la version utilis\u00e9e.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de mon site Jimdo ?',
        answer:
          'La vitesse d\'un site Jimdo d\u00e9pend principalement du poids des images, du nombre de sections par page et des vid\u00e9os embarqu\u00e9es. Jimdo ne propose ni syst\u00e8me de cache configurable, ni CDN personnalisable, ni lazy loading natif dans Creator. Rankwell intervient en amont de l\'upload : compression des images (TinyPNG, Squoosh), redimensionnement exact, limitation des sections par page, et remplacement des vid\u00e9os embarqu\u00e9es par des liens ou des vignettes cliquables. Ces actions am\u00e9liorent le LCP mesurable via PageSpeed Insights.',
      },
      {
        question: 'Comment faire citer mon site Jimdo par ChatGPT et Perplexity ?',
        answer:
          'L\'absence de schema.org natif sur Jimdo complique la citabilit\u00e9 par les moteurs IA. Pour compenser, trois leviers sont prioritaires : publier des contenus riches en donn\u00e9es factuelles v\u00e9rifiables (chiffres, prix, zones d\'intervention, sp\u00e9cialisations), multiplier les signaux externes (avis Google, mentions dans les annuaires professionnels, articles de presse locale), et optimiser la fiche Google Business Profile qui sert de source structur\u00e9e aux LLM. Le Score GEO de Rankwell mesure ces dimensions et identifie les leviers prioritaires pour votre site Jimdo.',
      },
      {
        question: 'Jimdo est-il encore un bon choix pour le SEO en 2026 ?',
        answer:
          'Jimdo reste adapt\u00e9 aux TPE et artisans qui ont besoin d\'un site de pr\u00e9sence rapide sans enjeu de positionnement sur des mots-cl\u00e9s concurrentiels. Ses limites SEO (pas de 301, pas de schema.org, blog basique, meta title global sur Dolphin) le placent en retrait de Wix, Squarespace et WordPress sur le plan du r\u00e9f\u00e9rencement. Pour un SEO local de proximit\u00e9, Jimdo peut suffire si le travail off-site (Google Business Profile, annuaires, avis) est solide. Rankwell \u00e9value votre situation et recommande Jimdo, la migration ou un renforcement off-site selon le potentiel identifi\u00e9.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Jimdo ?',
        answer:
          'Rankwell conna\u00eet les limites techniques de Jimdo (meta title global Dolphin, absence de 301 et de schema.org, blog sans cat\u00e9gories) et sait travailler dans un cadre contraint. Notre m\u00e9thodologie en 8 \u00e9tapes int\u00e8gre des solutions de contournement sp\u00e9cifiques \u00e0 Jimdo (injection JSON-LD via widget HTML, redirection DNS, SEO local renforc\u00e9). Nous ajoutons la dimension GEO que 93 % des agences SEO ne proposent pas. Le Score GEO propri\u00e9taire mesure votre visibilit\u00e9 dans les moteurs IA, un levier que vos concurrents sur Jimdo ne travaillent pas.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Jimdo ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Jimdo. Nos consultants SEO & GEO analysent les limites de votre plan, votre contenu, votre SEO local et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Artisan', href: '/agence-geo-seo/secteur/artisan' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Migration SEO', href: '/agence-geo-seo/projet/migration' },
      ],
      cms: [
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
        { label: 'SEO Weebly', href: '/agence-geo-seo/cms/weebly' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
        { label: 'Citabilit\u00e9', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Wix', href: '/agence-geo-seo/cms/wix' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'Weebly', href: '/agence-geo-seo/cms/weebly' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Framer', href: '/agence-geo-seo/cms/framer' },
    ],
  },
};

export default data;
