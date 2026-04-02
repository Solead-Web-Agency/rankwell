/**
 * DATA : Page CMS Sylius (FR)
 * Route : /agence-geo-seo/cms/sylius
 *
 * Framework e-commerce PHP/Symfony, API-first, architecture headless native.
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'sylius',
    title: 'Agence SEO & GEO Sylius - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre boutique Sylius. Audit technique Symfony, plugins SEO, schema.org, performance API-first : m\u00e9thodologie compl\u00e8te pour Sylius.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Sylius' },
    ],
    title: 'SEO & GEO Sylius : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Z\u00e9ro gestion SEO native, pas de sitemap XML int\u00e9gr\u00e9, pas de schema.org par d\u00e9faut : Sylius offre une libert\u00e9 totale mais exige que chaque brique SEO soit construite sur mesure. Nos experts combinent SEO technique Symfony et GEO pour positionner votre boutique sur Google et la faire citer par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Sylius',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Sylius (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Sylius',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Sylius \u00e9quipe plus de 7 000 boutiques actives</strong> (+34 % sur un an). B\u00e2ti sur Symfony et API Platform, le framework offre un contr\u00f4le total sur le HTML, les routes et le balisage structur\u00e9. Son architecture d\u00e9coupl\u00e9e permet le SSR via Nuxt.js ou Next.js, garantissant un DOM lisible par Googlebot et un socle solide pour le <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a>.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Sylius ne fournit aucune fonctionnalit\u00e9 SEO native</strong> : ni meta-tags, ni sitemap XML, ni schema.org. Tout repose sur des plugins communautaires (Dedi SEO, BetterSEO, Sitemap Plugin) ou du code Symfony custom. Un front SPA sans SSR emp\u00eache l\'<a href="/glossaire/indexation" class="text-rw-blue hover:underline">indexation</a>, et la communaut\u00e9 restreinte (0,04 % de part de march\u00e9) limite l\'\u00e9cosyst\u00e8me de plugins.',
    geoAngle:
      'Selon Rankwell, l\'architecture API-first de Sylius permet d\'injecter des donn\u00e9es structur\u00e9es Product, Offer et BreadcrumbList \u00e0 la granularit\u00e9 la plus fine. Mais cette citabilit\u00e9 IA reste th\u00e9orique tant que le balisage JSON-LD n\'est pas impl\u00e9ment\u00e9 et que les fiches produit ne contiennent pas de passages factuels exploitables par les LLM.',
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
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Sylius et solutions',
    interpretation:
      'Sylius laisse au d\u00e9veloppeur la responsabilit\u00e9 de chaque brique SEO. Ces probl\u00e8mes touchent la quasi-totalit\u00e9 des boutiques non optimis\u00e9es et sont directement li\u00e9s \u00e0 l\'absence de fonctions SEO natives dans le framework. Un audit technique Symfony identifie lesquels s\'appliquent \u00e0 votre projet.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Aucun meta-tag configurable sans plugin (ni title, ni description)',
        'Pages index\u00e9es avec des balises g\u00e9n\u00e9riques, CTR d\u00e9grad\u00e9 dans les SERP',
        'Installation et configuration du plugin Dedi SEO ou BetterSEO (JoppeDC) pour g\u00e9rer les meta-tags par produit, taxon et page CMS',
      ],
      [
        'Pas de sitemap XML g\u00e9n\u00e9r\u00e9 par d\u00e9faut',
        'Googlebot ne d\u00e9couvre pas les nouvelles pages produit, indexation retard\u00e9e',
        'D\u00e9ploiement du Sitemap Plugin de Stefan Doorn avec r\u00e9g\u00e9n\u00e9ration automatique et soumission via Google Search Console',
      ],
      [
        'Rendu JavaScript avec front SPA d\u00e9coupl\u00e9 (React, Vue)',
        'Contenu invisible pour Googlebot si le SSR est absent, pages vides dans l\'index',
        'Configuration du SSR via Nuxt.js ou Next.js, pr\u00e9-rendu statique (SSG) des pages catalogue, v\u00e9rification via l\'outil d\'inspection d\'URL de la GSC',
      ],
      [
        'Pas de schema.org int\u00e9gr\u00e9 (Product, Offer, BreadcrumbList)',
        'Pas de rich snippets (prix, avis, disponibilit\u00e9), invisibilit\u00e9 pour les LLM',
        'Injection du balisage JSON-LD via le plugin Dedi (RichSnippets Product + Breadcrumb) ou code Twig/Symfony custom pour les types sp\u00e9cifiques',
      ],
      [
        'Contenu duplique entre pages produit et pages taxon (cat\u00e9gorie)',
        'Dilution du crawl budget, cannibalisation entre URL produit et URL cat\u00e9gorie',
        'Configuration des balises canonical via le routing Symfony, noindex sur les pages de filtres et les paginations non strat\u00e9giques',
      ],
      [
        'Redirections 301 non g\u00e9r\u00e9es par l\'interface admin',
        'Liens cass\u00e9s apr\u00e8s modification d\'URL, perte de PageRank accumul\u00e9',
        'Mise en place d\'un syst\u00e8me de redirections via la configuration routing Symfony (config/routes.yaml) ou bundle d\u00e9di\u00e9, suivi mensuel des 404',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Sylius',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Sylius et son architecture Symfony.',
    steps: [
      {
        title: 'Audit technique Sylius',
        subtitle: 'Analyse compl\u00e8te de l\'installation Sylius : version Symfony, configuration PHP, plugins install\u00e9s, architecture front (monolithique ou d\u00e9coupl\u00e9e) et Core Web Vitals.',
        items: [
          'Inventaire des plugins Sylius actifs (Dedi SEO, BetterSEO, Sitemap, CMS Page)',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur les pages produit et cat\u00e9gorie',
          'Analyse du crawl budget : pages index\u00e9es vs pages gaspill\u00e9es (filtres, paginations, taxons vides)',
          'V\u00e9rification du rendu SSR/SSG si le front est d\u00e9coupl\u00e9 (Nuxt.js, Next.js)',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre boutique Sylius dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 vos produits et votre marque sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs (m\u00eame niche produit)',
          'Identification des fiches produit cit\u00e9es vs ignor\u00e9es par les moteurs IA',
        ],
      },
      {
        title: 'Construction de la couche SEO manquante',
        subtitle: 'Installation et configuration des plugins SEO indispensables que Sylius ne fournit pas nativement.',
        items: [
          'D\u00e9ploiement du plugin Dedi SEO (meta-tags, OpenGraph, RichSnippets) ou BetterSEO selon le contexte',
          'Configuration du Sitemap Plugin avec exclusion des pages non strat\u00e9giques',
          'Mise en place des URL canoniques et des redirections 301 via le routing Symfony',
          'Configuration du robots.txt et des directives X-Robots-Tag pour les ressources non-HTML',
        ],
      },
      {
        title: 'Optimisation de la performance Symfony',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement en exploitant les leviers sp\u00e9cifiques de Symfony et de l\'architecture Sylius.',
        items: [
          'Activation de OPcache et configuration de Redis pour le cache HTTP et les sessions',
          'Optimisation des requ\u00eates Doctrine ORM (lazy loading, pagination efficace)',
          'Compression et conversion des images produit en WebP avec lazy loading',
          'Mise en place d\'un CDN (Cloudflare, BunnyCDN) et configuration des headers Cache-Control',
        ],
      },
      {
        title: 'Balisage schema.org e-commerce',
        subtitle: 'Impl\u00e9mentation compl\u00e8te du balisage structur\u00e9 pour les fiches produit, cat\u00e9gories et pages marque.',
        items: [
          'Balisage Product + Offer sur chaque fiche produit (prix, disponibilit\u00e9, avis)',
          'BreadcrumbList sur toutes les pages via le plugin Dedi ou en Twig custom',
          'Organization et WebSite sur les pages principales',
          'FAQPage sur les pages de contenu et les guides d\'achat',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu e-commerce',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement et la citabilit\u00e9 IA, int\u00e9gr\u00e9s via le SyliusCmsPage Plugin de Monsieur Biz.',
        items: [
          'Guides d\'achat et comparatifs produit organis\u00e9s en cocon s\u00e9mantique',
          'Descriptions de cat\u00e9gories (taxons) enrichies avec donn\u00e9es techniques factuelles',
          'FAQ par cat\u00e9gorie inspir\u00e9es des PAA Google, r\u00e9dig\u00e9es pour l\'extraction LLM',
          'Maillage interne entre fiches produit, guides et pages cat\u00e9gorie',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s dans l\'e-commerce et votre secteur.',
        items: [
          'Backlinks depuis des comparateurs produit, blogs e-commerce et m\u00e9dias sectoriels',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans votre niche',
          'Mentions de marque dans les guides d\'achat et articles comparatifs',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA de vos fiches produit',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et l\'\u00e9tat de sant\u00e9 technique de l\'installation Sylius.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page produit/cat\u00e9gorie',
          'Trafic organique segment\u00e9 par type de page (produit, taxon, guide, CMS)',
          'Score GEO : visibilit\u00e9 de vos produits et de votre marque dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi des plugins Sylius (mises \u00e0 jour, compatibilit\u00e9)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe de d\u00e9veloppement Symfony, votre \u00e9quipe e-commerce ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Sylius',
        description: 'Diagnostic complet de votre installation Sylius : version Symfony et PHP, plugins actifs (Dedi SEO, BetterSEO, Sitemap), architecture front (monolithique ou d\u00e9coupl\u00e9e SSR/SSG), Core Web Vitals, crawl budget, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de vos produits et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates e-commerce cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Sylius',
        description: 'Balisage Product, Offer, AggregateRating, BreadcrumbList et Organization, impl\u00e9ment\u00e9 via le plugin Dedi SEO ou en injection Twig/JSON-LD custom dans vos templates Symfony. Guide technique avec exemples de code pour votre \u00e9quipe.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de fiches produit, guides d\'achat et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans Sylius via le SyliusCmsPage Plugin de Monsieur Biz ou par acc\u00e8s au code Twig.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs e-commerce, blogs sp\u00e9cialis\u00e9s et m\u00e9dias de votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page produit et cat\u00e9gorie, trafic organique segment\u00e9, \u00e9volution du Score GEO, sant\u00e9 technique Sylius (version Symfony, plugins, Core Web Vitals) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique Sylius dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel est le meilleur produit pour [votre cat\u00e9gorie] ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit Sylius ne contiennent pas de donn\u00e9es structur\u00e9es exploitables, votre boutique est invisible dans ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Sylius ?", le LLM ne cite aucune agence par son nom. Il explique que Sylius est un framework de niche (0,04 % de part de march\u00e9 e-commerce) et recommande de chercher une agence combinant expertise Symfony et SEO technique. Il mentionne que l\'\u00e9cosyst\u00e8me est concentr\u00e9 en France (50 % des utilisateurs) et en Pologne. L\'agence qui d\u00e9montre une expertise technique Sylius document\u00e9e a le potentiel d\'\u00eatre cit\u00e9e en premier.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Sylius ?", le LLM g\u00e9n\u00e8re un guide en 7 \u00e0 9 points insistant sur l\'absence de SEO natif. Il recommande les plugins Dedi SEO et BetterSEO de JoppeDC, le Sitemap Plugin de Stefan Doorn, et la configuration SSR pour les fronts d\u00e9coupl\u00e9s. Les sources privil\u00e9gi\u00e9es sont la documentation Sylius, le Sylius Store et GitHub. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Sylius vs PrestaShop pour le SEO", le LLM produit un comparatif o\u00f9 PrestaShop est pr\u00e9sent\u00e9 comme plus accessible en SEO (URL rewriting natif, meta par produit, sitemap int\u00e9gr\u00e9) tandis que Sylius est positionn\u00e9 comme plus flexible mais exigeant un SEO enti\u00e8rement construit sur mesure. Les contenus publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Sylius", le LLM fournit une liste de 6 \u00e0 8 probl\u00e8mes sp\u00e9cifiques \u00e0 l\'architecture API-first : absence de meta-tags natifs, pas de sitemap XML, pas de schema.org int\u00e9gr\u00e9, rendu JavaScript non index\u00e9, contenu dupliqu\u00e9 entre produits et taxons. Les contenus qui structurent probl\u00e8me/solution en tableau sont extraits pr\u00e9f\u00e9rentiellement.</p>',
    structuredData:
      'Pour une boutique Sylius, les types schema.org recommand\u00e9s sont : <code>Product</code> + <code>Offer</code> (fiches produit avec prix, disponibilit\u00e9, avis), <code>BreadcrumbList</code> (navigation entre taxons), <code>Organization</code> (page d\'accueil), <code>WebSite</code> + <code>SearchAction</code> (recherche interne), <code>FAQPage</code> (guides d\'achat). Le plugin Dedi SEO g\u00e8re nativement les RichSnippets Product et Breadcrumb. Pour les types suppl\u00e9mentaires (AggregateRating, Review, ItemList), une injection JSON-LD custom en Twig est n\u00e9cessaire. Ce balisage permet \u00e0 Google d\'afficher les rich snippets prix/avis et aux LLM d\'extraire des donn\u00e9es produit structur\u00e9es pour leurs recommandations.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre boutique Sylius par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (profondeur des fiches produit, guides d\'achat et contenus \u00e9ditoriaux), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks e-commerce, mentions dans les comparateurs), et la Densit\u00e9 Factuelle (richesse du balisage schema.org Product/Offer, donn\u00e9es techniques v\u00e9rifiables dans les fiches).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Sylius',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Sylius ?',
        answer:
          'Le budget SEO pour une boutique Sylius d\u00e9pend de la taille du catalogue, de l\'architecture front (monolithique ou d\u00e9coupl\u00e9e) et de la pr\u00e9sence ou non de plugins SEO d\u00e9j\u00e0 install\u00e9s. Chez Rankwell, les accompagnements SEO Sylius d\u00e9marrent \u00e0 2 000 EUR/mois pour une boutique de moins de 500 produits, et atteignent 4 000 \u00e0 8 000 EUR/mois pour les catalogues volumineux avec front d\u00e9coupl\u00e9 en Nuxt.js ou Next.js. Le budget est plus \u00e9lev\u00e9 que pour un CMS avec SEO natif car chaque brique technique doit \u00eatre construite ou configur\u00e9e sur mesure.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Sylius ?',
        answer:
          'La mise en place de la couche SEO manquante (plugins Dedi SEO, sitemap, schema.org, SSR) prend 4 \u00e0 8 semaines. Les premiers effets sur l\'indexation apparaissent d\u00e8s le premier mois apr\u00e8s d\u00e9ploiement du sitemap et du SSR. Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu, incluant la cr\u00e9ation de contenus et le netlinking. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit technique initial de votre installation Symfony.',
      },
      {
        question: 'Faut-il choisir le plugin Dedi SEO ou BetterSEO pour Sylius ?',
        answer:
          'Le plugin Dedi SEO (par l\'agence Dedi) offre la couverture la plus compl\u00e8te : meta-tags, OpenGraph, RichSnippets Product et Breadcrumb, plus l\'int\u00e9gration Google Analytics et Tag Manager. BetterSEO de JoppeDC se concentre sur les rich snippets produit et les images SEO-friendly. Rankwell recommande g\u00e9n\u00e9ralement Dedi SEO comme base, compl\u00e9t\u00e9 par le Sitemap Plugin de Stefan Doorn et des injections JSON-LD custom en Twig pour les types schema.org non couverts.',
      },
      {
        question: 'Comment g\u00e9rer le SEO d\'un front Sylius d\u00e9coupl\u00e9 en SPA ?',
        answer:
          'Un front d\u00e9coupl\u00e9 en React ou Vue qui ne fait pas de rendu c\u00f4t\u00e9 serveur (SSR) produit un HTML vide pour Googlebot, ce qui emp\u00eache l\'indexation. Rankwell configure le SSR via Nuxt.js (Vue) ou Next.js (React) pour que chaque page produit et cat\u00e9gorie soit rendue c\u00f4t\u00e9 serveur avec le balisage schema.org inject\u00e9 dans le HTML initial. Le pr\u00e9-rendu statique (SSG) est recommand\u00e9 pour les pages catalogue stables.',
      },
      {
        question: 'Comment faire citer ma boutique Sylius par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent vos produits, trois conditions sont n\u00e9cessaires : des fiches produit contenant des donn\u00e9es factuelles v\u00e9rifiables (sp\u00e9cifications techniques, comparaisons, prix), un balisage schema.org Product + Offer complet inject\u00e9 en JSON-LD, et des mentions de votre marque sur des comparateurs et m\u00e9dias tiers. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de vos fiches.',
      },
      {
        question: 'Sylius est-il un bon choix pour le SEO e-commerce en 2026 ?',
        answer:
          'Sylius offre la flexibilit\u00e9 maximale gr\u00e2ce \u00e0 Symfony et API Platform, mais son SEO est enti\u00e8rement \u00e0 construire. Pour une \u00e9quipe technique capable de maintenir l\'architecture, c\'est un excellent choix : le contr\u00f4le total sur le HTML, les routes et le balisage structur\u00e9 surpasse ce que proposent PrestaShop ou Magento. Pour une \u00e9quipe sans d\u00e9veloppeur Symfony, le co\u00fbt de mise en place SEO peut d\u00e9passer celui d\'un CMS avec fonctions natives. Rankwell adapte sa m\u00e9thodologie \u00e0 chaque contexte.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma boutique Sylius ?',
        answer:
          'Rankwell combine l\'expertise SEO technique e-commerce (audit Symfony, plugins Dedi SEO/BetterSEO, balisage Product/Offer, SSR) avec la dimension GEO que la quasi-totalit\u00e9 des agences SEO Sylius n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes inclut la construction compl\u00e8te de la couche SEO que Sylius ne fournit pas nativement. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos produits dans les moteurs IA, un enjeu critique pour le e-commerce en 2026.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre boutique Sylius ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre boutique Sylius. Nos consultants SEO & GEO analysent votre architecture Symfony, vos plugins, votre balisage structur\u00e9 et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO PME', href: '/agence-geo-seo/secteur/pme' },
      ],
      projets: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'SEO Marketplace', href: '/agence-geo-seo/projet/marketplace' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO Magento', href: '/agence-geo-seo/cms/magento' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      { label: 'Magento', href: '/agence-geo-seo/cms/magento' },
      { label: 'WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'OpenCart', href: '/agence-geo-seo/cms/opencart' },
    ],
  },
};

export default data;
