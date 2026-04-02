/**
 * DATA : Page Projet Application web & SaaS (FR)
 * Route : /agence-geo-seo/projet/application-web
 *
 * Contenu enrichi via auto-test LLM et analyse sectorielle (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'application-web',
    title: 'SEO & GEO Application Web SaaS : Agence Rankwell',
    description:
      'Rankwell optimise le r\u00e9f\u00e9rencement SEO et la visibilit\u00e9 IA (GEO) des applications web et SaaS. Rendering JS, schema SoftwareApplication, content hub.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Application web & SaaS' },
    ],
    title: 'SEO & GEO pour application web et SaaS : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Rendering JavaScript, contenu derri\u00e8re login, pages indexables limit\u00e9es : le r\u00e9f\u00e9rencement d\'une application SaaS repose sur des leviers distincts du SEO classique. Nos experts combinent SEO technique et GEO pour positionner vos landing pages sur Google et faire citer votre solution par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO SaaS',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour une application web',
    technicalContext:
      'Les frameworks JavaScript (React, Angular, Vue) g\u00e9n\u00e8rent le HTML c\u00f4t\u00e9 client. Googlebot ex\u00e9cute le JS avec un d\u00e9lai de <strong class="text-secondary dark:text-accent">5 \u00e0 20 secondes par page</strong>, laissant invisible tout contenu inject\u00e9 apr\u00e8s le chargement initial. Le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> est gaspill\u00e9 sur des \u00e9tats d\'interface sans URL propre, et les sections derri\u00e8re login restent inaccessibles aux crawlers.',
    marketData:
      'Le march\u00e9 SaaS fran\u00e7ais repr\u00e9sente <strong class="text-secondary dark:text-accent">20 milliards d\'euros</strong>, et le content marketing g\u00e9n\u00e8re <strong class="text-secondary dark:text-accent">67 % du pipeline de leads</strong> B2B. Les comparateurs (G2, Capterra) dominent les SERP sur les requ\u00eates cat\u00e9gorielles. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> sp\u00e9cialis\u00e9e SaaS reprend la main sur ce trafic qualifi\u00e9.',
    geoAngle:
      'Selon Rankwell, les donn\u00e9es structur\u00e9es jouent un double r\u00f4le : elles alimentent les rich snippets Google et fournissent aux LLM une couche de compr\u00e9hension s\u00e9mantique facilitant l\'extraction factuelle. Un type SoftwareApplication correctement balis\u00e9 devient une entit\u00e9 directement ing\u00e9rable par un moteur IA.',
  },

  // ============================================
  // QUOTE : Phrase nucl\u00e9aire du r\u00e9f\u00e9rentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, les donn\u00e9es structur\u00e9es jouent un double r\u00f4le : elles alimentent les r\u00e9sultats enrichis de Google (rich snippets, FAQ, avis) et elles fournissent aux LLM une couche de compr\u00e9hension s\u00e9mantique explicite qui facilite l\'extraction factuelle. Un type SoftwareApplication correctement balis\u00e9 devient une entit\u00e9 directement ing\u00e9rable par un moteur IA.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'En savoir plus sur les donn\u00e9es structur\u00e9es',
  },

  // ============================================
  // BLOC 3 : M\u00e9thodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre application SaaS',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques techniques sp\u00e9cifiques des applications web et SaaS.',
    steps: [
      {
        title: 'Audit technique : rendering et accessibilit\u00e9 crawler',
        subtitle: 'Analyse du rendu JavaScript, du comportement de Googlebot sur vos pages dynamiques et de l\'accessibilit\u00e9 du contenu prot\u00e9g\u00e9 par login.',
        items: [
          'Test de rendering JS : comparaison HTML initial vs DOM rendu par Googlebot',
          'Identification des contenus invisibles (lazy loading, SPA routing, modales)',
          'Audit des sections derri\u00e8re authentification : pages accessibles vs verrouill\u00e9es',
          'Analyse des logs serveur : taux de crawl des landing pages vs pages applicatives',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 SaaS et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre solution dans les r\u00e9ponses de ChatGPT, Perplexity et Gemini sur les requ\u00eates de cat\u00e9gorie logicielle.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates "meilleur outil de [cat\u00e9gorie]" sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents SaaS directs',
          'Identification des sources cit\u00e9es par les LLM (G2, Capterra, presse tech, blogs)',
        ],
      },
      {
        title: 'Architecture de contenu et hub th\u00e9matique',
        subtitle: 'Construction d\'une arborescence de pages indexables autour du produit : landing pages par use case, glossaire, centre de ressources.',
        items: [
          'Pages "solutions par persona" et "solutions par secteur" ciblant des requ\u00eates sp\u00e9cifiques',
          'Pages de comparaison "alternative \u00e0 [concurrent]" et "vs [concurrent]"',
          'Glossaire sectoriel optimis\u00e9 pour les requ\u00eates d\u00e9finitionnelles',
          'Hub de ressources : \u00e9tudes de cas, templates, calculateurs ROI',
        ],
      },
      {
        title: 'Optimisation on-page et balisage SoftwareApplication',
        subtitle: 'D\u00e9ploiement du schema.org SoftwareApplication sur les pages produit et pricing, avec des donn\u00e9es factuelles exploitables par les LLM.',
        items: [
          'Balisage SoftwareApplication avec cat\u00e9gorie, OS, prix et notes agr\u00e9g\u00e9es',
          'Meta tags dynamiques g\u00e9n\u00e9r\u00e9s c\u00f4t\u00e9 serveur (SSR ou pre-rendering)',
          'Passages auto-suffisants sur chaque landing page : fonctionnalit\u00e9s, pricing, int\u00e9grations',
          'FAQ structur\u00e9e par page avec balisage FAQPage',
        ],
      },
      {
        title: 'Strat\u00e9gie de content marketing SaaS',
        subtitle: 'Production de contenus informationnels ciblant le haut de funnel : guides, \u00e9tudes sectorielles, benchmarks propri\u00e9taires.',
        items: [
          'Articles "comment [r\u00e9soudre probl\u00e8me]" ciblant les requ\u00eates informationnelles du persona',
          '\u00c9tudes de cas chiffr\u00e9es avec m\u00e9triques v\u00e9rifiables (ROI, temps gagn\u00e9, adoption)',
          'Benchmarks sectoriels publi\u00e9s sous licence ouverte pour g\u00e9n\u00e9rer des backlinks naturels',
          'Documentation produit publique index\u00e9e et structur\u00e9e en topic clusters',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking SaaS',
        subtitle: 'D\u00e9veloppement de la notori\u00e9t\u00e9 de la solution via les canaux propres au SaaS : comparateurs, presse tech, int\u00e9grations partenaires.',
        items: [
          'Profils optimis\u00e9s sur G2, Capterra, TrustRadius et Product Hunt',
          'Acquisition de backlinks via des articles de presse tech et des partenariats d\'int\u00e9gration',
          'Publication de donn\u00e9es propri\u00e9taires pour g\u00e9n\u00e9rer des citations dans les \u00e9tudes sectorielles',
          'Chaque mention tierce renforce le PageRank et la citabilit\u00e9 dans les r\u00e9ponses IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel avec positions par cluster th\u00e9matique, trafic organique par type de page, leads g\u00e9n\u00e9r\u00e9s et Score GEO.',
        items: [
          'Positions Google par landing page et par article du content hub',
          'Trafic organique segment\u00e9 : landing pages, blog, documentation, glossaire',
          'Score GEO : citations de la solution dans les r\u00e9ponses IA sur les requ\u00eates cat\u00e9gorielles',
          'Ajustement it\u00e9ratif : r\u00e9allocation vers les clusters \u00e0 plus fort taux de conversion MQL',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 4 : Livrables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en r\u00e9f\u00e9rencement, votre \u00e9quipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic du rendering JavaScript (comparaison HTML brut vs DOM rendu), inventaire des pages invisibles pour Googlebot, analyse des logs serveur et plan de correction SSR/pre-rendering.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre solution SaaS sur ChatGPT, Perplexity et Gemini pour les requ\u00eates "meilleur outil de [cat\u00e9gorie]", avec benchmark concurrentiel et Score GEO d\u00e9taill\u00e9.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage SoftwareApplication, Offer, AggregateRating et FAQPage adapt\u00e9 \u00e0 vos pages produit et pricing, avec guide d\'int\u00e9gration pour Next.js, Nuxt ou Angular.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de landing pages par use case, pages de comparaison "vs [concurrent]", \u00e9tudes de cas chiffr\u00e9es et articles de glossaire sectoriel. Int\u00e9gration directe sur votre CMS ou via Git.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs SaaS (G2, Capterra), des blogs tech et des m\u00e9dias sp\u00e9cialis\u00e9s. Suivi des profils sur les plateformes d\'avis et de la progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions par cluster th\u00e9matique, du trafic organique segment\u00e9 par type de page (landing, blog, docs), des MQL g\u00e9n\u00e9r\u00e9s par le canal organique, et de l\'\u00e9volution du Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre application SaaS dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un d\u00e9cideur demande \u00e0 ChatGPT "quel est le meilleur outil de gestion de projet pour une PME ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre solution n\'appara\u00eet dans aucune source cit\u00e9e (comparateur, presse tech, blog), elle est absente de ce canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de strat\u00e9gie SEO SaaS</h4><p>Sur "comment am\u00e9liorer le SEO d\'une application SaaS ?", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 12 points couvrant le content marketing (blog, guides, glossaires), le SEO technique (rendering JS, pre-rendering, SSR) et les pages de comparaison. Il cite des blogs SaaS (Ahrefs, HubSpot, Moz) mais aucune agence SEO.</p><h4>Requ\u00eates comparatives SaaS vs e-commerce</h4><p>Sur "SEO pour SaaS vs SEO pour e-commerce ?", le LLM distingue les deux approches : faible volume de pages indexables et d\u00e9pendance au content marketing pour le SaaS, catalogues de milliers de pages et mots-cl\u00e9s transactionnels pour le e-commerce. Le format est structur\u00e9 par crit\u00e8re, sans citation d\'agence.</p><h4>Requ\u00eates techniques de rendering</h4><p>Sur "comment rendre une app web indexable par Google ?", le LLM fournit un guide d\u00e9taill\u00e9 mentionnant SSR, SSG, pre-rendering, et des frameworks pr\u00e9cis (Next.js, Nuxt.js, Angular Universal). Les contenus incluant des audits r\u00e9els avec captures Googlebot seraient favoris\u00e9s comme sources.</p><h4>Requ\u00eates de visibilit\u00e9 IA pour SaaS</h4><p>Sur "comment faire citer son SaaS par ChatGPT et Perplexity ?", le LLM recommande la pr\u00e9sence sur G2, Capterra et TrustRadius, la publication de donn\u00e9es propri\u00e9taires et le balisage SoftwareApplication. Aucune mention de GEO ni de score de citabilit\u00e9 dans les r\u00e9sultats.</p>',
    structuredData:
      '<p>Pour une application web SaaS, les types schema.org recommand\u00e9s sont : <code>SoftwareApplication</code> (sur la page produit et pricing, avec cat\u00e9gorie, syst\u00e8me d\'exploitation et offre tarifaire), <code>Organization</code> (page \u00e0 propos), <code>FAQPage</code> (centre d\'aide et FAQ publique), <code>BreadcrumbList</code> (navigation). Le balisage <code>SoftwareApplication</code> avec <code>Offer</code> et <code>AggregateRating</code> permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es produit structur\u00e9es pour leurs recommandations cat\u00e9gorielles.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre application SaaS par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur du content hub, documentation publique, glossaire sectoriel), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (avis sur G2/Capterra, mentions presse tech, backlinks de blogs sp\u00e9cialis\u00e9s), et la Densit\u00e9 Factuelle (richesse du balisage SoftwareApplication, donn\u00e9es produit structur\u00e9es, entit\u00e9s nomm\u00e9es dans les landing pages).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour application web et SaaS',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une application SaaS ?',
        answer:
          'Le budget SEO pour un SaaS d\u00e9pend du nombre de landing pages \u00e0 cr\u00e9er, de la complexit\u00e9 technique du rendering et du niveau de concurrence sur la cat\u00e9gorie logicielle. Chez Rankwell, les accompagnements SEO SaaS d\u00e9marrent \u00e0 2 000 EUR/mois pour une solution avec moins de 20 landing pages et un blog existant, et atteignent 6 000 \u00e0 12 000 EUR/mois pour les \u00e9diteurs multi-produits ciblant plusieurs march\u00e9s. Ce budget inclut l\'audit technique, la strat\u00e9gie de contenu, le netlinking et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur un SaaS ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent entre 3 et 6 mois pour les requ\u00eates informationnelles (guides, glossaire) \u00e0 faible concurrence. Les requ\u00eates cat\u00e9gorielles comp\u00e9titives ("meilleur outil de [cat\u00e9gorie]") n\u00e9cessitent 6 \u00e0 12 mois de travail soutenu. La correction du rendering JavaScript produit des effets mesurables d\u00e8s le premier mois en termes de pages index\u00e9es. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit concurrentiel et le volume de contenu \u00e0 produire.',
      },
      {
        question: 'Comment indexer les pages d\'une application JavaScript (React, Angular, Vue) ?',
        answer:
          'Les applications JavaScript monopage (SPA) posent un probl\u00e8me d\'indexation : Googlebot ex\u00e9cute le JS avec un d\u00e9lai de 5 \u00e0 20 secondes, et certains contenus rendus dynamiquement ne sont jamais crawl\u00e9s. La solution est le SSR (Server-Side Rendering) via Next.js, Nuxt ou Angular Universal, ou le pre-rendering pour les pages statiques. Rankwell audite le rendering r\u00e9el de vos pages via les logs serveur et Google Search Console, puis met en place la solution technique adapt\u00e9e \u00e0 votre stack.',
      },
      {
        question: 'Quel framework choisir pour le SEO d\'une application SaaS ?',
        answer:
          'Next.js (React) est le framework le plus mature pour le SEO SaaS gr\u00e2ce \u00e0 son support natif du SSR, SSG et ISR. Nuxt (Vue) offre des capacit\u00e9s \u00e9quivalentes. Angular Universal convient aux applications Angular existantes. Pour les SaaS avec peu de contenu public, une approche headless CMS (Contentful, Strapi) coupl\u00e9e \u00e0 un g\u00e9n\u00e9rateur statique fonctionne bien. Rankwell a une expertise SEO et GEO sur ces frameworks et adapte sa m\u00e9thodologie aux sp\u00e9cificit\u00e9s de chaque stack technique.',
      },
      {
        question: 'Comment faire citer mon SaaS par ChatGPT et Perplexity ?',
        answer:
          'Les LLM citent les solutions SaaS pr\u00e9sentes dans trois types de sources : les comparateurs (G2, Capterra, TrustRadius), la presse tech et les blogs sp\u00e9cialis\u00e9s, et les contenus \u00e9ducatifs publi\u00e9s par l\'\u00e9diteur lui-m\u00eame (benchmarks, \u00e9tudes sectorielles). Le balisage schema.org SoftwareApplication renforce la compr\u00e9hension s\u00e9mantique. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre solution.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO et GEO pour une application SaaS ?',
        answer:
          'Le SEO positionne vos landing pages dans les r\u00e9sultats Google sur des requ\u00eates comme "outil de [cat\u00e9gorie]". Le GEO (Generative Engine Optimization) fait citer votre solution dans les r\u00e9ponses g\u00e9n\u00e9r\u00e9es par ChatGPT, Perplexity et Google AI Overviews quand un prospect demande "quel est le meilleur logiciel de [cat\u00e9gorie] ?". Les deux disciplines partagent des fondamentaux (contenu structur\u00e9, autorit\u00e9 de domaine) mais le GEO exige en plus des donn\u00e9es factuelles v\u00e9rifiables et un balisage SoftwareApplication complet. Rankwell int\u00e8gre les deux approches dans une m\u00e9thodologie unifi\u00e9e.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon application SaaS ?',
        answer:
          'Rankwell combine l\'expertise SEO technique (rendering JS, architecture de contenu SaaS, schema SoftwareApplication) avec la dimension GEO que la majorit\u00e9 des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 7 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques SaaS : contenu derri\u00e8re login, faible volume de pages indexables, d\u00e9pendance au content marketing, et concurrence des comparateurs sur les requ\u00eates cat\u00e9gorielles. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre solution dans les moteurs IA, un indicateur qu\'aucun autre prestataire ne propose.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 rendre votre application SaaS visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre application web. Nos consultants SEO & GEO analysent votre rendering, votre architecture de contenu et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action adapt\u00e9.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO Fintech', href: '/agence-geo-seo/secteur/fintech' },
        { label: 'SEO Franchise', href: '/agence-geo-seo/secteur/franchise' },
      ],
      projets: [
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Blog', href: '/agence-geo-seo/projet/blog' },
      ],
      cms: [
        { label: 'SEO Next.js', href: '/agence-geo-seo/cms/nextjs' },
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Content marketing SEO', href: '/glossaire/content-marketing-seo' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises tech et digital',
    items: [
      { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      { label: 'Blog', href: '/agence-geo-seo/projet/blog' },
      { label: 'Marketplace', href: '/agence-geo-seo/projet/marketplace' },
      { label: 'Franchise', href: '/agence-geo-seo/secteur/franchise' },
    ],
  },
};

export default data;
