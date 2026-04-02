/**
 * DATA : Page Projet E-commerce (FR)
 * Route : /agence-geo-seo/projet/ecommerce
 *
 * Contenu enrichi via Haloscan et rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'ecommerce',
    title: 'SEO & GEO E-commerce : Agence Rankwell',
    description:
      'Rankwell optimise le r\u00e9f\u00e9rencement SEO et la visibilit\u00e9 IA (GEO) des sites e-commerce. Crawl budget, schema Product, comparatif CMS, m\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'E-commerce' },
    ],
    title: 'SEO & GEO pour site e-commerce : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Crawl budget, fiches produit dupliqu\u00e9es, filtres \u00e0 facettes, schema Product : le r\u00e9f\u00e9rencement d\'un site e-commerce pose des probl\u00e8mes techniques que le SEO g\u00e9n\u00e9raliste ne r\u00e9sout pas. Nos experts combinent SEO et GEO pour positionner vos pages sur Google et faire citer vos produits par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO e-commerce',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour un site e-commerce',
    technicalContext:
      'Un site e-commerce g\u00e9n\u00e8re <strong class="text-secondary dark:text-accent">10 000 \u00e0 500 000 URL indexables</strong>. Si 60 % du <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> est gaspill\u00e9 sur des pages de filtres \u00e0 facettes, les fiches produit strat\u00e9giques ne sont jamais crawl\u00e9es. Cannibalisation cat\u00e9gories/produits et contenu dupliqu\u00e9 fournisseur aggravent le probl\u00e8me sur les gros catalogues.',
    marketData:
      '<strong class="text-secondary dark:text-accent">43 % du trafic e-commerce provient du canal organique</strong>, avec un taux de conversion de 1,5 \u00e0 3 %. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> sp\u00e9cialis\u00e9e capte ce trafic \u00e0 forte intention d\'achat, l\u00e0 o\u00f9 le SEO g\u00e9n\u00e9raliste \u00e9choue sur les probl\u00e9matiques catalogue.',
    geoAngle:
      'Selon Rankwell, les LLM deviennent un canal de recommandation produit \u00e0 part enti\u00e8re. ChatGPT et Perplexity comparent des produits, recommandent des marques et citent des fiches dans leurs r\u00e9ponses, ce qui impose d\'optimiser la citabilit\u00e9 IA de chaque fiche strat\u00e9gique.',
  },

  // ============================================
  // QUOTE : Phrase nucl\u00e9aire du r\u00e9f\u00e9rentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO e-commerce en 2026 int\u00e8gre un enjeu in\u00e9dit : les LLM deviennent un canal de recommandation produit \u00e0 part enti\u00e8re. ChatGPT et Perplexity comparent des produits, recommandent des marques et citent des fiches produit dans leurs r\u00e9ponses.',
    glossarySlug: 'seo-ecommerce',
    glossaryLabel: 'En savoir plus sur le SEO e-commerce',
  },

  // ============================================
  // BLOC 3 : M\u00e9thodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre site e-commerce',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques techniques sp\u00e9cifiques du e-commerce.',
    steps: [
      {
        title: 'Audit technique e-commerce',
        subtitle: 'Analyse compl\u00e8te de l\'architecture du catalogue, de la gestion des filtres \u00e0 facettes et du crawl budget r\u00e9el via les logs serveur.',
        items: [
          'Structure des cat\u00e9gories, pagination et canonical tags',
          'Gestion des filtres \u00e0 facettes et hreflang multilingue',
          'Identification des pages orphelines et cha\u00eenes de redirections',
          'Mesure du crawl budget : ratio URL strat\u00e9giques vs URL gaspill\u00e9es',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 produit et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de vos produits et de votre marque dans les moteurs IA (ChatGPT, Perplexity, Gemini).',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates d\'achat type sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des fiches produit cit\u00e9es vs ignor\u00e9es',
        ],
      },
      {
        title: 'Architecture de catalogue et maillage interne',
        subtitle: 'Restructuration de l\'arborescence pour maximiser la distribution du PageRank vers les pages \u00e0 forte valeur commerciale.',
        items: [
          'Siloing th\u00e9matique : univers produit, sous-cat\u00e9gories, fiches',
          'Traitement des filtres : indexation s\u00e9lective, noindex ou canonical',
          'R\u00e9duction du crawl budget gaspill\u00e9 de 40 \u00e0 60 %',
          'Concentration de l\'indexation sur les pages g\u00e9n\u00e9ratrices de CA',
        ],
      },
      {
        title: 'Optimisation des fiches produit pour Google et les LLM',
        subtitle: 'R\u00e9daction de descriptions uniques avec donn\u00e9es factuelles v\u00e9rifiables et balisage schema.org complet.',
        items: [
          'Descriptions produit originales : dimensions, mat\u00e9riaux, certifications',
          'Balisage Product, Offer, AggregateRating sur chaque fiche',
          'Optimisation des images (alt text, WebP, lazy loading)',
          'Passages auto-suffisants citables par les moteurs IA',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu \u00e9ditoriale',
        subtitle: 'Cr\u00e9ation de contenus informationnels autour du catalogue : guides d\'achat, comparatifs et FAQ th\u00e9matiques.',
        items: [
          'Guides d\'achat ciblant les requ\u00eates "comment choisir un [produit]"',
          'Tableaux comparatifs avec crit\u00e8res chiffr\u00e9s et recommandations attribu\u00e9es',
          'Calendrier \u00e9ditorial align\u00e9 sur la saisonnalit\u00e9 (soldes, Black Friday, rentr\u00e9e)',
          'Passages factuels structur\u00e9s pour extraction par les LLM',
        ],
      },
      {
        title: 'Netlinking et autorit\u00e9 e-commerce',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des donn\u00e9es propri\u00e9taires.',
        items: [
          'Backlinks de blogs experts, magazines de niche, comparateurs ind\u00e9pendants',
          'Publication de benchmarks et statistiques propri\u00e9taires',
          'Pr\u00e9sence sur Trustpilot, Avis V\u00e9rifi\u00e9s et comparateurs pertinents',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel avec positions par cat\u00e9gorie, trafic organique segment\u00e9, CA g\u00e9n\u00e9r\u00e9 et Score GEO.',
        items: [
          'Positions Google par cat\u00e9gorie et par fiche produit strat\u00e9gique',
          'Trafic organique segment\u00e9 par type de page',
          'Score GEO : visibilit\u00e9 dans les moteurs IA sur les requ\u00eates d\'achat',
          'Ajustement it\u00e9ratif : r\u00e9allocation vers les cat\u00e9gories \u00e0 plus fort ROI',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 4 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en r\u00e9f\u00e9rencement, votre \u00e9quipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Crawl map de votre catalogue produit, diagnostic du crawl budget, analyse des filtres \u00e0 facettes et de la pagination, avec les actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de vos fiches produit et de votre marque sur ChatGPT, Perplexity et Gemini, avec benchmark concurrentiel et Score GEO d\u00e9taill\u00e9.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Product, Offer, AggregateRating et BreadcrumbList adapt\u00e9 \u00e0 votre CMS e-commerce, avec guide d\'int\u00e9gration par plateforme (Shopify, PrestaShop, WooCommerce).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de guides d\'achat, comparatifs produit et FAQ, avec int\u00e9gration directe sur votre CMS via FTP. Cr\u00e9ation des templates de pages cat\u00e9gorie et fiches produit si besoin.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs e-commerce, comparateurs et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur produit. Suivi des liens acquis et de la progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions par cat\u00e9gorie produit, du trafic organique segment\u00e9, du chiffre d\'affaires g\u00e9n\u00e9r\u00e9 par le canal SEO, et de l\'\u00e9volution du Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre boutique e-commerce dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quel est le meilleur aspirateur robot en 2026 ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos fiches produit ne sont dans aucune source cit\u00e9e, vos produits sont absents de ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site e-commerce ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de crit\u00e8res de s\u00e9lection (exp\u00e9rience sectorielle, r\u00e9f\u00e9rences clients, m\u00e9thodologie technique) et renvoie vers des annuaires comme Sortlist ou Trustfolio. L\'agence qui structure son contenu avec des m\u00e9thodologies d\u00e9taill\u00e9es et des comparatifs CMS a le potentiel d\'\u00eatre cit\u00e9e en r\u00e9f\u00e9rence.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'une boutique en ligne", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 10 points couvrant la structure des URL, les balises, les images et le schema Product. Il ne cite aucune agence. Les contenus riches en donn\u00e9es chiffr\u00e9es sont privil\u00e9gi\u00e9s comme sources.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "meilleur CMS e-commerce pour le SEO", le LLM produit un tableau comparatif de 5 \u00e0 6 plateformes avec avantages et limites pour chacune. Les sites qui publient des comparatifs structur\u00e9s avec des crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de donn\u00e9es chiffr\u00e9es</h4><p>Sur "taux de conversion moyen SEO e-commerce", le LLM fournit des fourchettes (1,5 % \u00e0 3 %) et cite des \u00e9tudes de march\u00e9 (Contentsquare, Wolfgang Digital). Les agences qui publient leurs propres benchmarks avec des m\u00e9thodologies transparentes pourraient \u00eatre cit\u00e9es au m\u00eame titre.</p>',
    structuredData:
      '<p>Pour un site e-commerce, les types schema.org recommand\u00e9s sont : <code>Product</code> et <code>Offer</code> (sur chaque fiche produit), <code>AggregateRating</code> (si avis clients), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (guides d\'achat), <code>ItemList</code> (pages de cat\u00e9gorie). Le balisage <code>Product</code> avec prix, disponibilit\u00e9 et avis permet \u00e0 Google d\'afficher des rich snippets et aux LLM d\'extraire des donn\u00e9es produit structur\u00e9es pour leurs recommandations.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site e-commerce par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus produit et \u00e9ditorial), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (avis clients, mentions presse, backlinks de sites sp\u00e9cialis\u00e9s), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es produit structur\u00e9es, entit\u00e9s nomm\u00e9es dans les fiches).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour site e-commerce',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site e-commerce ?',
        answer:
          'Le budget SEO pour un site e-commerce d\u00e9pend du nombre de produits, de la complexit\u00e9 technique du CMS et du niveau de concurrence sectorielle. Chez Rankwell, les accompagnements SEO e-commerce d\u00e9marrent \u00e0 2 000 EUR/mois pour un catalogue de moins de 1 000 r\u00e9f\u00e9rences, et atteignent 5 000 \u00e0 10 000 EUR/mois pour les catalogues de plus de 10 000 produits avec enjeux multi-pays. Ce budget inclut l\'audit technique, l\'optimisation des fiches, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur un site e-commerce ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 3 et 6 mois pour les cat\u00e9gories de niche \u00e0 faible concurrence. Les cat\u00e9gories \u00e0 forte concurrence (mode, high-tech, beaut\u00e9) n\u00e9cessitent 6 \u00e0 12 mois de travail soutenu. Le nettoyage technique (crawl budget, canonicals, filtres \u00e0 facettes) produit des effets mesurables d\u00e8s le premier mois en termes de pages index\u00e9es. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit concurrentiel initial.',
      },
      {
        question: 'Comment g\u00e9rer le crawl budget sur un catalogue de 50 000 produits ?',
        answer:
          'Le crawl budget se g\u00e8re en trois leviers : bloquer l\'indexation des filtres \u00e0 facettes non strat\u00e9giques (via robots.txt ou meta noindex), configurer des balises canonical pour \u00e9liminer le contenu dupliqu\u00e9 entre variantes produit, et renforcer le maillage interne vers les pages \u00e0 forte valeur commerciale. Rankwell analyse les logs serveur pour identifier exactement o\u00f9 Googlebot passe son temps et r\u00e9alloue le crawl vers les pages qui g\u00e9n\u00e8rent du chiffre d\'affaires.',
      },
      {
        question: 'Quel CMS choisir pour le SEO d\'un site e-commerce ?',
        answer:
          'Le choix d\u00e9pend du volume de catalogue et du budget technique. Shopify convient aux PME avec un catalogue de moins de 5 000 r\u00e9f\u00e9rences. PrestaShop et WooCommerce offrent une meilleure flexibilit\u00e9 SEO pour les catalogues moyens. Magento et Sylius sont adapt\u00e9s aux grands catalogues multi-pays. Rankwell a une expertise SEO et GEO sur ces cinq plateformes et adapte sa m\u00e9thodologie aux sp\u00e9cificit\u00e9s techniques de chaque CMS.',
      },
      {
        question: 'Comment faire citer mes produits par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent vos produits, trois conditions sont n\u00e9cessaires : des fiches produit contenant des donn\u00e9es factuelles v\u00e9rifiables (dimensions, mat\u00e9riaux, certifications), un balisage schema.org Product/Offer complet, et des mentions de votre marque sur des sources tierces (comparateurs, blogs sp\u00e9cialis\u00e9s, presse). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de vos produits.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO classique et GEO pour un site e-commerce ?',
        answer:
          'Le SEO positionne vos pages dans les r\u00e9sultats de recherche Google (positions 1 \u00e0 10). Le GEO (Generative Engine Optimization) fait citer vos produits et votre marque dans les r\u00e9ponses g\u00e9n\u00e9r\u00e9es par ChatGPT, Perplexity et Google AI Overviews. Les deux disciplines partagent des fondamentaux (contenu de qualit\u00e9, balisage structur\u00e9) mais le GEO exige en plus une densit\u00e9 factuelle \u00e9lev\u00e9e et des donn\u00e9es structur\u00e9es exploitables par les LLM. Rankwell est la seule agence \u00e0 int\u00e9grer les deux approches dans une m\u00e9thodologie unifi\u00e9e.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site e-commerce ?',
        answer:
          'Rankwell combine l\'expertise SEO technique (crawl budget, architecture de catalogue, schema Product) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 7 \u00e9tapes est con\u00e7ue sp\u00e9cifiquement pour les probl\u00e9matiques e-commerce : fiches produit dupliqu\u00e9es, filtres \u00e0 facettes, pagination, et cannibalisation. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de vos produits dans les moteurs IA, un indicateur qu\'aucun autre prestataire ne propose.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 rendre votre boutique e-commerce visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site e-commerce. Nos consultants SEO & GEO analysent votre catalogue, votre architecture technique et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
        { label: 'SEO Caviste', href: '/agence-geo-seo/secteur/caviste' },
        { label: 'SEO Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
        { label: 'SEO Opticien', href: '/agence-geo-seo/secteur/opticien' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      ],
      projets: [
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Marketplace', href: '/agence-geo-seo/projet/marketplace' },
      ],
      cms: [
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
      ],
      glossaire: [
        { label: 'SEO e-commerce', href: '/glossaire/seo-ecommerce' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises commerce et retail',
    items: [
      { label: 'Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
      { label: 'Caviste', href: '/agence-geo-seo/secteur/caviste' },
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Opticien', href: '/agence-geo-seo/secteur/opticien' },
      { label: 'Franchise', href: '/agence-geo-seo/secteur/franchise' },
      { label: 'Marketplace', href: '/agence-geo-seo/projet/marketplace' },
    ],
  },
};

export default data;
