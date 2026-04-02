/**
 * DATA : Page Projet Marketplace (FR)
 * Route : /agence-geo-seo/projet/marketplace
 *
 * Contenu enrichi via Haloscan et rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'marketplace',
    title: 'SEO & GEO Marketplace : Agence Rankwell',
    description:
      'Rankwell optimise le r\u00e9f\u00e9rencement SEO et la visibilit\u00e9 IA (GEO) des marketplaces. Crawl budget, contenu multi-vendeurs, schema AggregateOffer, m\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Marketplace' },
    ],
    title: 'SEO & GEO pour marketplace : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Contenu multi-vendeurs, crawl budget sur des millions de pages, duplicate cross-vendeurs, double audience acheteurs/vendeurs : le r\u00e9f\u00e9rencement d\'une marketplace pose des probl\u00e8mes de volume et de gouvernance que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO et GEO pour positionner vos pages sur Google et rendre votre plateforme citable par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO marketplace',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour une marketplace',
    technicalContext:
      'Une marketplace g\u00e9n\u00e8re <strong class="text-secondary dark:text-accent">entre 500 000 et 20 millions d\'URL indexables</strong>. Le <a href="/glossaire/crawl-budget" class="text-rw-blue hover:underline">crawl budget</a> est le premier goulot d\'\u00e9tranglement : quand un m\u00eame produit est list\u00e9 par 15 vendeurs, Google indexe 15 pages quasi-identiques. Les m\u00e9ga-menus combinatoires et les ruptures de stock massives aggravent le probl\u00e8me.',
    marketData:
      'Les marketplaces repr\u00e9sentent <strong class="text-secondary dark:text-accent">35 % du CA e-commerce en France</strong>. Les plateformes de niche d\u00e9pendent du SEO pour <strong class="text-secondary dark:text-accent">40 \u00e0 55 % de leurs visites</strong>. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> qui ma\u00eetrise les probl\u00e9matiques multi-vendeurs transforme ce volume en trafic qualifi\u00e9.',
    geoAngle:
      'Selon Rankwell, le SEO programmatique fonctionne \u00e0 condition que chaque page g\u00e9n\u00e9r\u00e9e apporte une valeur informationnelle distincte. Les moteurs IA p\u00e9nalisent le contenu programmatique limit\u00e9 \u00e0 des variations superficielles d\'un m\u00eame gabarit.',
  },

  // ============================================
  // QUOTE : Phrase nucl\u00e9aire du r\u00e9f\u00e9rentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO programmatique fonctionne \u00e0 condition que chaque page g\u00e9n\u00e9r\u00e9e apporte une valeur informationnelle distincte. Les moteurs IA p\u00e9nalisent le contenu programmatique qui se limite \u00e0 des variations superficielles d\'un m\u00eame gabarit.',
    glossarySlug: 'seo-programmatique',
    glossaryLabel: 'En savoir plus sur le SEO programmatique',
  },

  // ============================================
  // BLOC 3 : M\u00e9thodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre marketplace',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques techniques sp\u00e9cifiques des marketplaces multi-vendeurs.',
    steps: [
      {
        title: 'Audit technique marketplace',
        subtitle: 'Analyse du crawl budget r\u00e9el via les logs serveur, identification des pages multi-vendeurs dupliqu\u00e9es et des filtres combinatoires non ma\u00eetris\u00e9s.',
        items: [
          'Ratio URL strat\u00e9giques vs URL gaspill\u00e9es sur un catalogue de 100 000+ pages',
          'D\u00e9tection des fiches produit dupliqu\u00e9es entre vendeurs (m\u00eame EAN, descriptions identiques)',
          'Cartographie des m\u00e9ga-menus et des filtres \u00e0 facettes combinatoires',
          'Audit des pages 404 li\u00e9es aux ruptures de stock et aux fermetures de boutiques vendeur',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 plateforme et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre marketplace dans les moteurs IA (ChatGPT, Perplexity, Gemini) face aux g\u00e9ants du secteur.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates d\'achat type sur les LLM pour v\u00e9rifier si votre plateforme est cit\u00e9e',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre Amazon, Cdiscount, ManoMano et vos concurrents directs de niche',
          'Identification des cat\u00e9gories produit cit\u00e9es vs ignor\u00e9es par les LLM',
        ],
      },
      {
        title: 'Architecture multi-vendeurs et gouvernance du catalogue',
        subtitle: 'Restructuration de l\'arborescence pour centraliser l\'autorit\u00e9 SEO sur les pages produit canoniques et limiter la duplication cross-vendeurs.',
        items: [
          'Page produit canonique unique par EAN, agr\u00e9geant les offres de tous les vendeurs',
          'Siloing th\u00e9matique : univers, cat\u00e9gories, sous-cat\u00e9gories, fiches',
          'Indexation s\u00e9lective des filtres \u00e0 facettes : noindex sur les combinaisons sans volume de recherche',
          'Gestion des pages boutique vendeur : indexation conditionnelle selon le volume et la qualit\u00e9',
        ],
      },
      {
        title: 'Optimisation des fiches produit pour Google et les LLM',
        subtitle: 'Cadrage du contenu vendeur via des templates enrichis et balisage schema.org adapt\u00e9 au mod\u00e8le multi-offres.',
        items: [
          'Templates de fiches avec champs obligatoires : caract\u00e9ristiques techniques, mat\u00e9riaux, certifications',
          'Balisage Product et AggregateOffer pour agr\u00e9ger prix min/max de plusieurs vendeurs',
          'Enrichissement automatique par les avis clients et les questions/r\u00e9ponses',
          'Passages factuels auto-suffisants citables par les moteurs IA',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu \u00e9ditorial marketplace',
        subtitle: 'Cr\u00e9ation de contenus informationnels pour capter le trafic haut de funnel et renforcer l\'autorit\u00e9 th\u00e9matique de la plateforme.',
        items: [
          'Guides d\'achat ciblant les requ\u00eates "comment choisir un [produit]"',
          'Comparatifs inter-vendeurs avec crit\u00e8res objectifs (prix, d\u00e9lai, note)',
          'Pages "tendances" et "s\u00e9lections" pour capter les requ\u00eates informationnelles saisonni\u00e8res',
          'Contenus destin\u00e9s aux vendeurs (guides, ressources) pour capter la double audience B2B',
        ],
      },
      {
        title: 'Netlinking et autorit\u00e9 de plateforme',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de m\u00e9dias sp\u00e9cialis\u00e9s et des signaux de confiance propres aux marketplaces.',
        items: [
          'Backlinks depuis des comparateurs ind\u00e9pendants, m\u00e9dias e-commerce et blogs de niche',
          'Publication de donn\u00e9es propri\u00e9taires : tendances de prix, volumes de vente par cat\u00e9gorie',
          'Pr\u00e9sence sur Trustpilot, Avis V\u00e9rifi\u00e9s et les comparateurs de marketplaces',
          'Relations presse autour des lancements de nouvelles cat\u00e9gories ou vendeurs phares',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel avec positions par cat\u00e9gorie, trafic organique segment\u00e9 par type de page, et \u00e9volution du Score GEO.',
        items: [
          'Positions Google par cat\u00e9gorie, par type de page (fiche, boutique, filtre) et par vendeur strat\u00e9gique',
          'Trafic organique segment\u00e9 : acheteurs vs vendeurs potentiels',
          'Score GEO : visibilit\u00e9 dans les moteurs IA sur les requ\u00eates d\'achat et de comparaison',
          'Ajustement it\u00e9ratif : r\u00e9allocation vers les cat\u00e9gories \u00e0 plus fort taux de conversion',
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
        description: 'Crawl map de votre catalogue multi-vendeurs, diagnostic du crawl budget, analyse des fiches dupliqu\u00e9es entre vendeurs et des filtres combinatoires, avec les actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre plateforme et de vos cat\u00e9gories phares sur ChatGPT, Perplexity et Gemini, avec benchmark face aux leaders (Amazon, ManoMano) et Score GEO d\u00e9taill\u00e9.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Product, AggregateOffer, Organization et BreadcrumbList adapt\u00e9 au mod\u00e8le multi-vendeurs, avec guide d\'int\u00e9gration par CMS marketplace (Mirakl, Wizaplace, Sharetribe).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de guides d\'achat, comparatifs et pages cat\u00e9gorie, avec int\u00e9gration directe via CMS ou FTP. Cr\u00e9ation de templates de fiches produit et de pages vendeur optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des comparateurs de marketplaces, m\u00e9dias e-commerce et blogs sp\u00e9cialis\u00e9s dans votre vertical produit. Suivi de la progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions par cat\u00e9gorie et par type de page, du trafic organique segment\u00e9 acheteurs/vendeurs, du chiffre d\'affaires g\u00e9n\u00e9r\u00e9 par le canal SEO, et de l\'\u00e9volution du Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre marketplace dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande \u00e0 ChatGPT "quelle marketplace pour acheter du mobilier artisanal ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Les plateformes g\u00e9n\u00e9ralistes (Amazon, Cdiscount) sont syst\u00e9matiquement cit\u00e9es. Si votre marketplace de niche n\'appara\u00eet dans aucune source cit\u00e9e, elle est invisible dans ce nouveau canal de d\u00e9couverte.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation de marketplace</h4><p>Sur "quelle marketplace pour acheter [produit de niche] ?", le LLM cite syst\u00e9matiquement Amazon et Etsy comme r\u00e9f\u00e9rences g\u00e9n\u00e9ralistes, puis mentionne 2 \u00e0 3 plateformes sp\u00e9cialis\u00e9es si elles apparaissent dans des comparatifs ou des articles de presse. Les marketplaces de niche qui publient des contenus \u00e9ditoriaux riches (guides, s\u00e9lections, donn\u00e9es de march\u00e9) ont plus de chances d\'\u00eatre int\u00e9gr\u00e9es \u00e0 la r\u00e9ponse.</p><h4>Requ\u00eates techniques SEO marketplace</h4><p>Sur "comment am\u00e9liorer le SEO d\'une marketplace ?", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 12 points couvrant l\'architecture, le contenu vendeur, les filtres et le schema.org. Il ne cite aucune agence. Les contenus segment\u00e9s par type de marketplace (B2C, B2B, C2C) et enrichis de benchmarks chiffr\u00e9s seraient privil\u00e9gi\u00e9s comme sources.</p><h4>Requ\u00eates comparatives</h4><p>Sur "marketplace vs e-commerce classique pour le SEO", le LLM produit un comparatif structur\u00e9 sur 5 \u00e0 7 crit\u00e8res : contr\u00f4le du contenu, volume de pages, duplicate, double audience. Il cite Amazon et Etsy comme exemples mais aucune source d\'expertise. Les agences qui publient des \u00e9tudes de cas marketplace avec des r\u00e9sultats mesurables seraient extract\u00e9es.</p><h4>Requ\u00eates sur le contenu dupliqu\u00e9</h4><p>Sur "comment g\u00e9rer le contenu dupliqu\u00e9 sur une marketplace ?", le LLM fournit des solutions techniques pr\u00e9cises (canonical, regroupement par EAN, templates enrichis). Les sources avec des benchmarks chiffr\u00e9s sur le taux de duplication observ\u00e9 seraient cit\u00e9es en priorit\u00e9.</p>',
    structuredData:
      '<p>Pour une marketplace, les types schema.org recommand\u00e9s sont : <code>Product</code> et <code>AggregateOffer</code> (sur chaque fiche multi-vendeurs, agr\u00e9geant prix min/max et nombre d\'offres), <code>Organization</code> (page plateforme et pages boutique vendeur), <code>ItemList</code> (pages de cat\u00e9gorie et r\u00e9sultats de recherche), <code>BreadcrumbList</code> (navigation). Le balisage <code>AggregateOffer</code> est sp\u00e9cifique aux marketplaces : il permet \u00e0 Google d\'afficher la fourchette de prix multi-vendeurs dans les rich snippets et aux LLM d\'extraire des donn\u00e9es de comparaison structur\u00e9es.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre marketplace par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (profondeur des contenus \u00e9ditoriaux, guides et s\u00e9lections au-del\u00e0 des simples fiches produit), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (mentions presse, backlinks de comparateurs, avis plateforme sur Trustpilot), et la Densit\u00e9 Factuelle (richesse du balisage schema.org multi-vendeurs, donn\u00e9es de march\u00e9, entit\u00e9s nomm\u00e9es dans les pages cat\u00e9gorie).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour marketplace',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'une marketplace ?',
        answer:
          'Le budget SEO pour une marketplace d\u00e9pend du nombre de vendeurs actifs, du volume de fiches produit et de la complexit\u00e9 technique de la plateforme. Chez Rankwell, les accompagnements SEO marketplace d\u00e9marrent \u00e0 3 000 EUR/mois pour une plateforme de moins de 50 000 fiches, et atteignent 8 000 \u00e0 15 000 EUR/mois pour les marketplaces de plus de 500 000 pages avec enjeux multi-cat\u00e9gories. Ce budget inclut l\'audit technique, la gouvernance du contenu vendeur, la strat\u00e9gie de contenu \u00e9ditorial et le suivi GEO.',
      },
      {
        question: 'Combien de temps pour voir des r\u00e9sultats SEO sur une marketplace ?',
        answer:
          'Les premiers effets du nettoyage technique (d\u00e9sindexation des filtres, canonical cross-vendeurs) apparaissent en 1 \u00e0 2 mois sur le ratio de pages index\u00e9es. Les gains de positions sur les cat\u00e9gories strat\u00e9giques n\u00e9cessitent 4 \u00e0 8 mois selon la concurrence sectorielle. Les niches verticales (marketplace artisanat, marketplace B2B industriel) progressent plus vite que les g\u00e9n\u00e9ralistes. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit du crawl budget et le benchmark concurrentiel.',
      },
      {
        question: 'Comment g\u00e9rer le contenu dupliqu\u00e9 entre vendeurs sur une marketplace ?',
        answer:
          'Sur une marketplace, un m\u00eame produit (m\u00eame EAN) peut \u00eatre list\u00e9 par 10 \u00e0 50 vendeurs avec des descriptions quasi-identiques. La solution technique consiste \u00e0 cr\u00e9er une page produit canonique unique qui agr\u00e8ge toutes les offres, \u00e0 enrichir cette page avec des attributs techniques v\u00e9rifi\u00e9s et des avis clients, et \u00e0 appliquer des balises canonical sur les pages vendeur individuelles. Rankwell impl\u00e9mente ce mod\u00e8le avec un balisage AggregateOffer qui affiche la fourchette de prix dans les r\u00e9sultats Google.',
      },
      {
        question: 'Quel CMS choisir pour cr\u00e9er une marketplace optimis\u00e9e SEO ?',
        answer:
          'Le choix d\u00e9pend du mod\u00e8le \u00e9conomique et du volume de vendeurs. Mirakl convient aux grandes marketplaces B2C (Galeries Lafayette, Darty). Sharetribe est adapt\u00e9 aux marketplaces de services et C2C. Wizaplace cible le B2B avec une gestion fine des catalogues fournisseurs. WooCommerce avec Dokan ou WCFM permet de d\u00e9marrer avec un budget r\u00e9duit. Rankwell a une expertise SEO et GEO sur ces quatre plateformes et adapte sa m\u00e9thodologie aux contraintes techniques de chaque solution.',
      },
      {
        question: 'Comment faire citer ma marketplace par ChatGPT et Perplexity ?',
        answer:
          'Les LLM recommandent syst\u00e9matiquement les marketplaces connues (Amazon, Leboncoin, Etsy) car elles disposent de millions de mentions web. Pour qu\'une marketplace de niche soit cit\u00e9e, trois conditions sont n\u00e9cessaires : des contenus \u00e9ditoriaux factuels au-del\u00e0 des fiches produit (guides, s\u00e9lections, tendances), des mentions sur des sources tierces (presse sp\u00e9cialis\u00e9e, comparateurs, blogs), et un balisage schema.org AggregateOffer complet. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO et GEO pour une marketplace ?',
        answer:
          'Le SEO positionne les pages de votre marketplace dans les r\u00e9sultats Google (positions 1 \u00e0 10). Le GEO (Generative Engine Optimization) fait citer votre plateforme dans les r\u00e9ponses de ChatGPT, Perplexity et Google AI Overviews. Pour une marketplace, l\'enjeu GEO est encore plus critique que pour un site e-commerce classique : les LLM recommandent par d\u00e9faut les g\u00e9ants (Amazon, Cdiscount). Rankwell int\u00e8gre les deux approches pour que votre plateforme de niche soit visible sur les deux canaux.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de ma marketplace ?',
        answer:
          'Rankwell combine l\'expertise SEO technique des plateformes multi-vendeurs (crawl budget sur des catalogues de 500 000+ pages, canonical cross-vendeurs, balisage AggregateOffer) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 7 \u00e9tapes couvre les probl\u00e9matiques sp\u00e9cifiques aux marketplaces : gouvernance du contenu vendeur, double audience acheteurs/vendeurs, et gestion des ruptures de stock massives. Le Score GEO propri\u00e9taire mesure la citabilit\u00e9 de votre plateforme face aux g\u00e9ants du secteur.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 rendre votre marketplace visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre marketplace. Nos consultants SEO & GEO analysent votre catalogue multi-vendeurs, votre architecture technique et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action adapt\u00e9.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Franchise', href: '/agence-geo-seo/secteur/franchise' },
        { label: 'SEO Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
        { label: 'SEO Caviste', href: '/agence-geo-seo/secteur/caviste' },
        { label: 'SEO Opticien', href: '/agence-geo-seo/secteur/opticien' },
      ],
      projets: [
        { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
      ],
      cms: [
        { label: 'SEO WooCommerce', href: '/agence-geo-seo/cms/woocommerce' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      ],
      glossaire: [
        { label: 'SEO programmatique', href: '/glossaire/seo-programmatique' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises commerce et plateformes',
    items: [
      { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      { label: 'Franchise', href: '/agence-geo-seo/secteur/franchise' },
      { label: 'Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
      { label: 'Caviste', href: '/agence-geo-seo/secteur/caviste' },
      { label: 'Opticien', href: '/agence-geo-seo/secteur/opticien' },
      { label: 'Refonte', href: '/agence-geo-seo/projet/refonte' },
      { label: 'Migration', href: '/agence-geo-seo/projet/migration' },
    ],
  },
};

export default data;
