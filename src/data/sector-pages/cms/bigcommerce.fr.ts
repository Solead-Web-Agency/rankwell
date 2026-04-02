/**
 * DATA : Page CMS BigCommerce (FR)
 * Route : /agence-geo-seo/cms/bigcommerce
 *
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'bigcommerce',
    title: 'Agence SEO & GEO BigCommerce - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique BigCommerce. URLs personnalisables, microdata Product, multi-storefront, Stencil : m\u00e9thodologie compl\u00e8te pour BigCommerce.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'BigCommerce' },
    ],
    title: 'SEO & GEO BigCommerce : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Blog natif publi\u00e9 sur un sous-domaine, th\u00e8mes Stencil peu flexibles, schema.org limit\u00e9 \u00e0 la microdata Product : le r\u00e9f\u00e9rencement d\'une boutique BigCommerce exige une expertise sp\u00e9cifique. Nos experts combinent SEO technique et GEO pour positionner votre boutique sur Google et faire citer vos produits par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO BigCommerce',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur BigCommerce (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur BigCommerce',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">BigCommerce propulse plus de 37 000 boutiques actives et g\u00e9n\u00e8re 34 milliards de dollars de GMV annuel</strong>. La plateforme offre des URLs personnalisables sans pr\u00e9fixe impos\u00e9, des redirections 301 natives, un sitemap XML automatique et une microdata Product int\u00e9gr\u00e9e (prix, stock, avis) dans les th\u00e8mes Stencil. L\'infrastructure Google Cloud Platform avec CDN Akamai et z\u00e9ro frais de transaction en font un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Moins de 15 th\u00e8mes Stencil gratuits sont disponibles</strong>, et le blog natif publie sur un sous-domaine, diluant l\'autorit\u00e9 du domaine principal. Le balisage schema.org se limite \u00e0 la microdata Product : FAQPage, BreadcrumbList et Organization n\u00e9cessitent une injection JSON-LD manuelle. Les variantes produit g\u00e9n\u00e8rent du <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">contenu dupliqu\u00e9</a> via des param\u00e8tres d\'URL mal canonicalis\u00e9s, et il n\'existe pas d\'environnement de staging.',
    geoAngle:
      'Selon Rankwell, les boutiques BigCommerce qui compl\u00e8tent la microdata Product native par une injection JSON-LD (Organization, FAQPage, BreadcrumbList) cr\u00e9ent un graphe d\'entit\u00e9s directement ing\u00e9rable par les LLM. La capacit\u00e9 multi-storefront, unique parmi les SaaS e-commerce, permet de d\u00e9ployer des contenus factuels localis\u00e9s par march\u00e9 pour la citation IA multilingue.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO e-commerce en 2026 int\u00e8gre un enjeu in\u00e9dit : les LLM deviennent un canal de recommandation produit \u00e0 part enti\u00e8re. ChatGPT et Perplexity comparent des produits, recommandent des marques et citent des fiches produit dans leurs r\u00e9ponses.',
    glossarySlug: 'seo-ecommerce',
    glossaryLabel: 'En savoir plus sur le SEO e-commerce',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur BigCommerce et solutions',
    interpretation:
      'Ces probl\u00e8mes affectent la majorit\u00e9 des boutiques BigCommerce non optimis\u00e9es. Chacun d\u00e9grade le positionnement Google et r\u00e9duit la capacit\u00e9 de vos fiches produit \u00e0 \u00eatre cit\u00e9es par les moteurs IA. Un audit technique BigCommerce identifie lesquels affectent votre boutique et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Blog natif publi\u00e9 sur un sous-domaine',
        'Le contenu \u00e9ditorial ne transf\u00e8re pas son autorit\u00e9 au domaine principal',
        'Migration du blog vers le domaine principal via int\u00e9gration headless WordPress sur un sous-r\u00e9pertoire (/blog/) ou cr\u00e9ation de pages CMS BigCommerce enrichies',
      ],
      [
        'Contenu dupliqu\u00e9 via les variantes produit et param\u00e8tres d\'URL',
        'Dilution du crawl budget, cannibalisation entre URLs de variantes',
        'Audit des canonical tags par variante, consolidation via redirections 301, configuration des param\u00e8tres d\'URL dans GSC',
      ],
      [
        'Th\u00e8mes Stencil avec objets template pr\u00e9d\u00e9finis',
        'Impossible d\'afficher certaines donn\u00e9es structurelles (cat\u00e9gorie parente, attributs custom) dans le template produit',
        'Utilisation des custom fields et des metafields BigCommerce pour injecter des donn\u00e9es suppl\u00e9mentaires, compl\u00e9ment via Widgets API',
      ],
      [
        'Schema.org limit\u00e9 \u00e0 la microdata Product',
        'Pas de rich snippets FAQ, pas de breadcrumbs enrichis, invisibilit\u00e9 partielle pour les LLM',
        'Injection de JSON-LD compl\u00e9mentaire (Organization, WebSite, BreadcrumbList, FAQPage) via Script Manager ou modification du th\u00e8me Stencil',
      ],
      [
        'Absence d\'environnement de staging natif',
        'Risque d\'erreurs SEO en production (URLs cass\u00e9es, meta tags perdus)',
        'Duplication du th\u00e8me Stencil pour pr\u00e9visualisation, checklist de v\u00e9rification pr\u00e9-d\u00e9ploiement, monitoring post-d\u00e9ploiement via crawl Screaming Frog',
      ],
      [
        'Pagination des pages cat\u00e9gorie mal configur\u00e9e',
        'Pages de pagination index\u00e9es sans contenu unique, dilution du crawl budget',
        'Impl\u00e9mentation des balises rel="next/prev" dans le th\u00e8me Stencil, ajout de contenu unique en t\u00eate de chaque cat\u00e9gorie',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour BigCommerce',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de BigCommerce.',
    steps: [
      {
        title: 'Audit technique BigCommerce',
        subtitle: 'Analyse compl\u00e8te de votre boutique BigCommerce : th\u00e8me Stencil, apps install\u00e9es via le marketplace, configuration des URLs, microdata Product et Core Web Vitals.',
        items: [
          'Inventaire des apps et scripts tiers inject\u00e9s via Script Manager',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur fiches produit, pages cat\u00e9gorie et pages marque',
          'Analyse du contenu dupliqu\u00e9 : variantes produit, param\u00e8tres d\'URL, pages de pagination',
          'V\u00e9rification du sitemap XML automatique, du robots.txt et de la configuration CDN Akamai',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique BigCommerce dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates produit et marque sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs sur votre segment mid-market',
          'Identification des fiches produit cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation technique',
        subtitle: 'Suppression des scripts tiers inutiles et optimisation de la configuration Stencil pour r\u00e9duire le poids des pages.',
        items: [
          'Audit des scripts inject\u00e9s via Script Manager (analytics, chat, popups)',
          'D\u00e9sinstallation des apps marketplace non utilis\u00e9es et nettoyage du code r\u00e9siduel',
          'Consolidation des variantes produit pour \u00e9liminer les URL dupliqu\u00e9es',
          'Configuration des canonical tags pour chaque type de page (produit, cat\u00e9gorie, marque)',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration des Core Web Vitals en exploitant l\'infrastructure Google Cloud Platform et le CDN Akamai natif de BigCommerce.',
        items: [
          'Compression des images via Akamai Image Manager (r\u00e9duction jusqu\'\u00e0 70 % du poids)',
          'Lazy loading natif sur les images produit et les galeries',
          'Chargement diff\u00e9r\u00e9 des scripts non critiques (avis, widgets, popups)',
          'Optimisation des fichiers CSS/JS du th\u00e8me Stencil (suppression du code inutilis\u00e9)',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e BigCommerce',
        subtitle: 'Param\u00e9trage complet du balisage schema.org, des meta tags et des redirections pour exploiter le plein potentiel SEO de la plateforme.',
        items: [
          'Personnalisation des URLs produit, cat\u00e9gorie et marque (sans pr\u00e9fixe impos\u00e9)',
          'Injection de JSON-LD compl\u00e9mentaire : Organization, WebSite, BreadcrumbList, FAQPage via Script Manager',
          'V\u00e9rification et enrichissement de la microdata Product native (prix, GTIN, stock, avis agr\u00e9g\u00e9s)',
          'Configuration des redirections 301 depuis le panneau admin BigCommerce',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 produit par les moteurs IA, en contournant les limites du blog natif.',
        items: [
          'Fiches produit enrichies avec sp\u00e9cifications techniques, comparatifs et FAQ int\u00e9gr\u00e9es',
          'Pages CMS BigCommerce pour les guides d\'achat et contenus \u00e9ditoriaux (sur le domaine principal)',
          'Descriptions de cat\u00e9gories optimis\u00e9es avec contenu unique et maillage interne vers les fiches produit',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 de votre boutique via des backlinks depuis des comparateurs, m\u00e9dias sp\u00e9cialis\u00e9s et publications sectorielles.',
        items: [
          'Backlinks depuis des comparateurs produit, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s',
          'R\u00e9f\u00e9rencement sur les annuaires B2B et marketplaces sectoriels',
          'Mentions de marque dans des guides d\'achat et articles comparatifs mid-market',
          'Chaque mention externe renforce le Domain Rating et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les KPIs e-commerce BigCommerce.',
        items: [
          'Positions Google par fiche produit, page cat\u00e9gorie et page marque',
          'Trafic organique segment\u00e9 par type de page (produit, cat\u00e9gorie, marque, CMS)',
          'Score GEO : \u00e9volution de la visibilit\u00e9 dans les moteurs IA',
          'Suivi des Core Web Vitals et de la sant\u00e9 technique BigCommerce (apps, Stencil, CDN Akamai)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe e-commerce, votre d\u00e9veloppeur BigCommerce ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique BigCommerce',
        description: 'Diagnostic complet de votre boutique BigCommerce : inventaire des apps marketplace, audit du contenu dupliqu\u00e9 (variantes, param\u00e8tres d\'URL), Core Web Vitals par type de page, analyse du th\u00e8me Stencil, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre boutique et de vos produits dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org BigCommerce',
        description: 'V\u00e9rification de la microdata Product native (prix, GTIN, avis, stock) et injection de JSON-LD compl\u00e9mentaire (Organization, WebSite, BreadcrumbList, FAQPage) via Script Manager. Guide d\'int\u00e9gration Stencil avec exemples de code.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produit, descriptions de cat\u00e9gories, guides d\'achat et pages CMS optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans l\'admin BigCommerce ou via le th\u00e8me Stencil.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs produit, blogs e-commerce et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur mid-market. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par fiche produit et cat\u00e9gorie, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique BigCommerce (apps, Stencil, Core Web Vitals, CDN Akamai) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique BigCommerce dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle plateforme e-commerce mid-market choisir ?" ou "quel produit recommander dans [votre cat\u00e9gorie] ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit BigCommerce ne contiennent pas de donn\u00e9es factuelles structur\u00e9es au-del\u00e0 de la microdata native, votre boutique reste invisible dans ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site BigCommerce ?", le LLM ne cite aucune agence SEO sp\u00e9cialis\u00e9e BigCommerce par son nom. Il fournit 5 \u00e0 7 crit\u00e8res de s\u00e9lection (exp\u00e9rience prouv\u00e9e sur BigCommerce, connaissance de Stencil et des API, r\u00e9f\u00e9rences e-commerce mid-market) et mentionne des annuaires comme Sortlist. OOEO est \u00e9voqu\u00e9e comme int\u00e9gratrice BigCommerce en France, mais pas comme experte SEO. Le vivier francophone d\'experts BigCommerce est quasi vide, ce qui repr\u00e9sente une opportunit\u00e9 de positionnement.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site BigCommerce", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 10 points couvrant la personnalisation des URLs, l\'optimisation des meta tags, la compression d\'images via Akamai Image Manager, la configuration du sitemap et les redirections 301. Il pr\u00e9cise que BigCommerce g\u00e8re environ 85 % du SEO technique nativement. Les sources cit\u00e9es sont le blog officiel BigCommerce, SeoProfy, HigherVisibility et ResultFirst.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "BigCommerce vs Shopify pour le SEO", le LLM produit un tableau comparatif de 6 \u00e0 8 crit\u00e8res. BigCommerce est pr\u00e9sent\u00e9 comme sup\u00e9rieur sur les URLs (personnalisables, pas de pr\u00e9fixe impos\u00e9), l\'absence de frais de transaction et la microdata Product native. Shopify est pr\u00e9sent\u00e9 comme sup\u00e9rieur sur l\'\u00e9cosyst\u00e8me d\'apps et la communaut\u00e9 de d\u00e9veloppeurs. BigCommerce est positionn\u00e9 pour le mid-market (500 \u00e0 50 000 produits).</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur BigCommerce", le LLM fournit une liste de 6 \u00e0 9 probl\u00e8mes sp\u00e9cifiques : blog en sous-domaine, contenu dupliqu\u00e9 par les variantes, th\u00e8mes Stencil peu flexibles, absence de staging, canonical tags difficiles \u00e0 configurer. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits comme source.</p>',
    structuredData:
      'Pour une boutique BigCommerce, la microdata Product est int\u00e9gr\u00e9e nativement dans les th\u00e8mes Stencil (prix, disponibilit\u00e9, avis agr\u00e9g\u00e9s). Les types schema.org compl\u00e9mentaires \u00e0 injecter en JSON-LD via Script Manager sont : <code>Organization</code> (identit\u00e9 de la marque), <code>WebSite</code> (avec SearchAction pour la barre de recherche), <code>BreadcrumbList</code> (navigation hi\u00e9rarchique), <code>FAQPage</code> (FAQ produit ou FAQ g\u00e9n\u00e9rale). Pour les boutiques multi-storefront, le balisage <code>Organization</code> doit \u00eatre d\u00e9clin\u00e9 par march\u00e9 avec des attributs <code>areaServed</code> distincts. La combinaison microdata native + JSON-LD inject\u00e9 permet \u00e0 Google d\'afficher les rich snippets produit et aux LLM d\'extraire des entit\u00e9s structur\u00e9es pour leurs recommandations d\'achat.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique BigCommerce par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit, guides d\'achat, pages CMS), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (avis clients, mentions dans des comparateurs, backlinks e-commerce mid-market), et la Densit\u00e9 Factuelle (richesse de la microdata Product native, JSON-LD compl\u00e9mentaire et sp\u00e9cifications mesurables dans les fiches produit).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour BigCommerce',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une boutique BigCommerce ?',
        answer:
          'Le budget SEO pour une boutique BigCommerce d\u00e9pend du nombre de produits, du nombre de storefronts et du niveau de concurrence. Chez Rankwell, les accompagnements SEO BigCommerce d\u00e9marrent \u00e0 1 500 EUR/mois pour une boutique mono-storefront de moins de 500 produits, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les configurations multi-storefront ou les catalogues de plusieurs milliers de r\u00e9f\u00e9rences. Ce budget inclut l\'audit technique Stencil, l\'optimisation des fiches produit, le balisage schema.org compl\u00e9mentaire et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur BigCommerce ?',
        answer:
          'Les corrections techniques (canonical tags sur les variantes, nettoyage du contenu dupliqu\u00e9, injection de JSON-LD) produisent des effets mesurables en 2 \u00e0 4 semaines. Le positionnement sur des mots-cl\u00e9s concurrentiels de cat\u00e9gorie produit n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. L\'avantage de BigCommerce est que son infrastructure (CDN Akamai, Google Cloud Platform, microdata Product native) \u00e9limine les probl\u00e8mes de performance d\u00e8s le d\u00e9part. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre boutique.',
      },
      {
        question: 'Comment contourner les limites du blog natif BigCommerce ?',
        answer:
          'Le blog natif BigCommerce publie les articles sur un sous-domaine, ce qui emp\u00eache le contenu \u00e9ditorial de renforcer l\'autorit\u00e9 du domaine principal. Deux solutions existent : int\u00e9grer un blog WordPress en headless sur un sous-r\u00e9pertoire (/blog/) via l\'API BigCommerce, ou utiliser les pages CMS BigCommerce pour cr\u00e9er des guides d\'achat et du contenu SEO directement sur le domaine principal. Rankwell recommande la seconde approche pour les boutiques qui n\'ont pas de ressources de d\u00e9veloppement d\u00e9di\u00e9es.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de ma boutique BigCommerce ?',
        answer:
          'BigCommerce repose sur Google Cloud Platform avec un CDN Akamai qui compresse automatiquement les images (r\u00e9duction jusqu\'\u00e0 70 % via Akamai Image Manager). Les probl\u00e8mes de vitesse proviennent g\u00e9n\u00e9ralement des scripts tiers inject\u00e9s via Script Manager (widgets d\'avis, chat en direct, popups) et du code Stencil non optimis\u00e9. Rankwell audite chaque script, d\u00e9sactive les chargements synchrones non critiques, et optimise les fichiers CSS/JS du th\u00e8me pour am\u00e9liorer les Core Web Vitals.',
      },
      {
        question: 'Comment faire citer ma boutique BigCommerce par ChatGPT et Perplexity ?',
        answer:
          'Les moteurs IA citent les boutiques dont les fiches produit contiennent des donn\u00e9es factuelles v\u00e9rifiables : sp\u00e9cifications techniques chiffr\u00e9es, comparatifs structur\u00e9s, certifications, avis clients agr\u00e9g\u00e9s. Sur BigCommerce, la microdata Product native fournit une base solide, mais elle doit \u00eatre compl\u00e9t\u00e9e par du JSON-LD (FAQPage, Organization) et des contenus \u00e9ditoriaux publi\u00e9s sur le domaine principal. Le Score GEO de Rankwell mesure ces dimensions et identifie les fiches produit \u00e0 optimiser en priorit\u00e9.',
      },
      {
        question: 'BigCommerce est-il un bon choix pour le SEO e-commerce en 2026 ?',
        answer:
          'BigCommerce offre un socle SEO natif sup\u00e9rieur \u00e0 Shopify sur plusieurs points : URLs personnalisables sans pr\u00e9fixe, microdata Product int\u00e9gr\u00e9e, redirections 301 depuis l\'admin, aucun frais de transaction. Il convient particuli\u00e8rement aux marchands mid-market (500 \u00e0 50 000 produits) qui veulent plus de contr\u00f4le SEO qu\'avec Shopify sans la complexit\u00e9 d\'un Magento auto-h\u00e9berg\u00e9. Les limites principales restent le blog en sous-domaine et les th\u00e8mes Stencil peu flexibles. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et limites sp\u00e9cifiques de BigCommerce.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique BigCommerce ?',
        answer:
          'Rankwell combine l\'expertise SEO technique BigCommerce (audit Stencil, microdata Product, injection JSON-LD via Script Manager, gestion du contenu dupliqu\u00e9 par variantes, multi-storefront) avec la dimension GEO que les rares agences BigCommerce n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes couvre les probl\u00e9matiques propres \u00e0 BigCommerce : blog en sous-domaine, schema.org incomplet, absence de staging, pagination non optimis\u00e9e. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos produits dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique BigCommerce ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique BigCommerce. Nos consultants SEO & GEO analysent votre catalogue, votre th\u00e8me Stencil, votre balisage Product et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Mode & Textile', href: '/agence-geo-seo/secteur/mode' },
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
      ],
      projets: [
        { label: 'SEO Site e-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'SEO international', href: '/agence-geo-seo/projet/international' },
      ],
      cms: [
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      { label: 'OpenCart', href: '/agence-geo-seo/cms/opencart' },
    ],
  },
};

export default data;
