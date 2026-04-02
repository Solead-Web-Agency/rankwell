/**
 * DATA : Page Projet Migration de site (FR)
 * Route : /agence-geo-seo/projet/migration
 *
 * Contenu enrichi via rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'migration',
    title: 'Migration SEO & GEO de site : Agence Rankwell',
    description:
      'Rankwell accompagne la migration SEO et GEO de votre site. Redirections 301, mapping URL, pr\u00e9servation du trafic et de la citabilit\u00e9 IA. M\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Migration de site' },
    ],
    title: 'SEO & GEO pour migration de site : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Redirections 301, mapping de milliers d\'URL, pr\u00e9servation des backlinks et du Knowledge Graph : le r\u00e9f\u00e9rencement d\'une migration de site exige une expertise technique que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO et GEO pour prot\u00e9ger votre trafic organique et votre visibilit\u00e9 dans les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO migration',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour une migration de site',
    technicalContext:
      'Chaque URL existante doit \u00eatre mapp\u00e9e vers sa nouvelle contrepartie avec une <a href="/glossaire/migration-seo" class="text-rw-blue hover:underline">redirection 301</a> unitaire. Sur un site de <strong class="text-secondary dark:text-accent">10 000 \u00e0 500 000 URL</strong>, une seule cha\u00eene de redirections dilue le PageRank et ralentit le crawl. Les <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">donn\u00e9es structur\u00e9es</a> schema.org doivent \u00eatre recr\u00e9\u00e9es et les canonical tags valid\u00e9s, sous peine de d\u00e9sindexation massive.',
    marketData:
      '<strong class="text-secondary dark:text-accent">60 \u00e0 80 % des migrations sans accompagnement SEO entra\u00eenent une perte de trafic organique</strong>. La r\u00e9cup\u00e9ration prend <strong class="text-secondary dark:text-accent">3 \u00e0 6 mois</strong> pour une migration bien pilot\u00e9e, mais la perte peut \u00eatre d\u00e9finitive sans redirections. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> exp\u00e9riment\u00e9e r\u00e9duit le risque \u00e0 moins de 10 % du trafic initial.',
    geoAngle:
      'Selon Rankwell, une migration comporte un risque invisible : la perte de signaux dans le Knowledge Graph et la rupture de la citabilit\u00e9 IA. Les entit\u00e9s et donn\u00e9es structur\u00e9es de l\'ancien domaine alimentent les r\u00e9ponses de ChatGPT et Perplexity. Si ces signaux ne sont pas transf\u00e9r\u00e9s, la marque dispara\u00eet des r\u00e9ponses g\u00e9n\u00e9ratives.',
  },

  // ============================================
  // QUOTE : Phrase nucl\u00e9aire du r\u00e9f\u00e9rentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, une migration SEO en 2026 comporte un risque invisible que les m\u00e9thodologies traditionnelles ne couvrent pas : la perte de signaux dans le Knowledge Graph et la rupture de la citabilit\u00e9 IA.',
    glossarySlug: 'migration-seo',
    glossaryLabel: 'En savoir plus sur la migration SEO',
  },

  // ============================================
  // BLOC 3 : M\u00e9thodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre migration de site',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques techniques sp\u00e9cifiques de la migration.',
    steps: [
      {
        title: 'Audit pr\u00e9-migration : \u00e9tat des lieux complet',
        subtitle: 'Crawl exhaustif du site actuel pour capturer chaque URL index\u00e9e, chaque backlink, chaque donn\u00e9e structur\u00e9e et chaque position organique avant toute intervention.',
        items: [
          'Crawl complet (Screaming Frog) : inventaire des URL, status codes, canonical tags',
          'Export des positions Google par page via Search Console et Haloscan',
          'Cartographie des backlinks entrants par URL (Ahrefs/Haloscan)',
          'Inventaire des donn\u00e9es structur\u00e9es schema.org en place sur l\'ancien site',
        ],
      },
      {
        title: 'Audit GEO pr\u00e9-migration : citabilit\u00e9 IA de l\'ancien domaine',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre marque et de vos pages dans les moteurs IA (ChatGPT, Perplexity, Gemini) avant la migration.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates strat\u00e9giques sur les LLM pour mesurer la citabilit\u00e9 actuelle',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Identification des pages cit\u00e9es par les LLM (pages \u00e0 prot\u00e9ger en priorit\u00e9)',
          'Benchmark de la pr\u00e9sence Knowledge Graph de la marque (Wikidata, Google KP)',
        ],
      },
      {
        title: 'Plan de redirections 301 et mapping URL',
        subtitle: 'Cr\u00e9ation du fichier de mapping entre chaque URL de l\'ancien site et sa correspondance sur le nouveau, avec v\u00e9rification d\'absence de cha\u00eenes de redirections.',
        items: [
          'Mapping 1:1 de chaque URL index\u00e9e vers sa nouvelle URL (pas de redirections vers la homepage)',
          'V\u00e9rification syst\u00e9matique : 0 cha\u00eene de redirections (max 1 saut par URL)',
          'Traitement sp\u00e9cifique des URL recevant des backlinks externes (redirections prioritaires)',
          'Plan de suppression : pages obsol\u00e8tes redirig\u00e9es vers la page parente la plus pertinente',
        ],
      },
      {
        title: 'Transfert des donn\u00e9es structur\u00e9es et du balisage',
        subtitle: 'Recr\u00e9ation du balisage schema.org sur le nouveau site et v\u00e9rification des canonical tags, hreflang et balises meta.',
        items: [
          'Migration du balisage schema.org (WebSite, Organization, BreadcrumbList, FAQPage)',
          'V\u00e9rification des canonical tags : chaque URL pointe vers elle-m\u00eame, pas vers l\'ancien domaine',
          'Transfert des balises hreflang pour les sites multilingues',
          'Validation du robots.txt et du sitemap.xml sur le nouveau domaine',
        ],
      },
      {
        title: 'Tests en pr\u00e9-production et recettage SEO',
        subtitle: 'V\u00e9rification de l\'int\u00e9gralit\u00e9 des redirections et du balisage sur un environnement de staging avant la mise en production.',
        items: [
          'Crawl du site de staging : v\u00e9rification des status codes, des redirections et des canonical',
          'Test de chaque redirection 301 sur les URL \u00e0 fort trafic et \u00e0 fort backlink',
          'Validation du balisage schema.org via le Rich Results Test de Google',
          'Contr\u00f4le des performances (Core Web Vitals) sur le nouveau site',
        ],
      },
      {
        title: 'Mise en production et soumission aux moteurs',
        subtitle: 'Bascule coordonn\u00e9e avec l\'h\u00e9bergeur, soumission du nouveau sitemap et notification \u00e0 Google via Search Console.',
        items: [
          'Activation des redirections 301 c\u00f4t\u00e9 serveur (htaccess, nginx ou CDN)',
          'Soumission du nouveau sitemap.xml dans Google Search Console',
          'Demande d\'indexation des pages strat\u00e9giques via l\'outil d\'inspection d\'URL',
          'V\u00e9rification de l\'accessibilit\u00e9 aux robots IA (GPTBot, ClaudeBot, PerplexityBot)',
        ],
      },
      {
        title: 'Monitoring post-migration et it\u00e9rations',
        subtitle: 'Suivi quotidien des positions, du trafic organique, des erreurs de crawl et du Score GEO pendant 3 \u00e0 6 mois apr\u00e8s la mise en production.',
        items: [
          'Suivi quotidien des erreurs 404 dans Search Console (correction sous 24h)',
          'Comparaison hebdomadaire des positions avant/apr\u00e8s migration par page',
          'Monitoring du trafic organique segment\u00e9 par type de page',
          'Score GEO post-migration : v\u00e9rification de la citabilit\u00e9 IA sur le nouveau domaine',
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
        title: 'Plan de redirections 301',
        description: 'Fichier de mapping complet (ancien URL vers nouveau URL) avec r\u00e8gles de priorit\u00e9 par trafic et par backlinks. Inclut les r\u00e8gles regex pour les patterns r\u00e9p\u00e9titifs et la v\u00e9rification z\u00e9ro cha\u00eene de redirections.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO pr\u00e9-migration',
        description: 'Score GEO de r\u00e9f\u00e9rence avant migration, pages cit\u00e9es par les moteurs IA, benchmark Knowledge Graph. Ce document sert de base pour mesurer l\'impact de la migration sur la visibilit\u00e9 IA.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage WebSite, Organization, BreadcrumbList et FAQPage adapt\u00e9 au nouveau CMS, avec guide d\'int\u00e9gration. V\u00e9rification de la parit\u00e9 avec le balisage de l\'ancien site.',
      },
      {
        id: 4,
        title: 'Crawl comparatif avant/apr\u00e8s',
        description: 'Rapport de crawl complet de l\'ancien et du nouveau site, avec diff\u00e9rentiel des status codes, des canonical tags et des pages index\u00e9es. Identification des \u00e9carts \u00e0 corriger.',
      },
      {
        id: 5,
        title: 'Dashboard de monitoring post-migration',
        description: 'Tableau de bord avec suivi quotidien des positions, du trafic organique segment\u00e9, des erreurs 404 et du Score GEO. Alertes automatiques en cas de chute anormale.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO post-migration',
        description: 'Bilan \u00e0 3 et 6 mois : comparaison des positions, du trafic et de la citabilit\u00e9 IA avant et apr\u00e8s migration. Pourcentage de r\u00e9cup\u00e9ration par cat\u00e9gorie de pages.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site migr\u00e9 dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "comment r\u00e9ussir une migration de site sans perdre son r\u00e9f\u00e9rencement ?", le LLM compile des sources techniques pour g\u00e9n\u00e9rer sa r\u00e9ponse. Si votre ancien domaine \u00e9tait cit\u00e9 par les moteurs IA et que la migration rompt ces signaux, votre marque dispara\u00eet de ce canal de visibilit\u00e9.',
    llmBehavior:
      '<h4>Requ\u00eates sur la m\u00e9thodologie de migration</h4><p>Sur "comment migrer un site sans perdre son r\u00e9f\u00e9rencement ?", le LLM g\u00e9n\u00e8re un guide structur\u00e9 en 8 \u00e0 12 \u00e9tapes couvrant l\'audit pr\u00e9-migration, le mapping URL, les redirections 301 et le monitoring post-migration. Il ne cite aucune agence par son nom. Les contenus riches en \u00e9tapes chiffr\u00e9es et en cas r\u00e9els sont privil\u00e9gi\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates sur les risques de migration</h4><p>Sur "migration de CMS : quels risques SEO ?", le LLM \u00e9num\u00e8re 6 \u00e0 8 risques techniques (perte de backlinks, cha\u00eenes de redirections, d\u00e9sindexation, perte de donn\u00e9es structur\u00e9es). Il cite des fourchettes de perte de trafic (60 \u00e0 80 % sans accompagnement) et renvoie vers des \u00e9tudes Ahrefs et Moz. Les agences qui publient des benchmarks de migration avec des r\u00e9sultats document\u00e9s ont le potentiel d\'\u00eatre cit\u00e9es.</p><h4>Requ\u00eates de d\u00e9lais et de r\u00e9cup\u00e9ration</h4><p>Sur "combien de temps pour r\u00e9cup\u00e9rer le trafic apr\u00e8s une migration ?", le LLM distingue les cas : changement de domaine (6 \u00e0 12 mois), changement de CMS (1 \u00e0 3 mois), migration HTTPS (2 \u00e0 4 semaines). Les sources avec des courbes de r\u00e9cup\u00e9ration document\u00e9es et des \u00e9tudes de cas chiffr\u00e9es sont favoris\u00e9es.</p><h4>Requ\u00eates sur la visibilit\u00e9 IA et migration</h4><p>Sur "comment pr\u00e9server la visibilit\u00e9 IA lors d\'une migration ?", le LLM traite la question avec moins de certitude que les requ\u00eates classiques. Peu de sources documentent ce sujet. C\'est un terrain quasi vierge pour une agence GEO qui publie une m\u00e9thodologie de transfert des signaux de citabilit\u00e9.</p>',
    structuredData:
      '<p>Pour une migration de site, les types schema.org \u00e0 pr\u00e9server et recr\u00e9er sont : <code>WebSite</code> (identit\u00e9 du domaine), <code>Organization</code> (entit\u00e9 de marque), <code>BreadcrumbList</code> (navigation hi\u00e9rarchique), <code>FAQPage</code> (contenus informationnels) et <code>Service</code> (offre commerciale). Le balisage <code>WebSite</code> avec les propri\u00e9t\u00e9s <code>url</code> et <code>potentialAction</code> doit pointer vers le nouveau domaine pour que Google et les LLM associent l\'entit\u00e9 de marque \u00e0 la nouvelle URL.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100, avant et apr\u00e8s migration. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus transf\u00e9r\u00e9s), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (backlinks redirig\u00e9s, mentions de marque conserv\u00e9es), et la Densit\u00e9 Factuelle (balisage schema.org recr\u00e9\u00e9, entit\u00e9s nomm\u00e9es pr\u00e9serv\u00e9es sur le nouveau domaine).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour migration de site',
    items: [
      {
        question: 'Combien co\u00fbte l\'accompagnement SEO d\'une migration de site ?',
        answer:
          'Le budget d\u00e9pend du nombre d\'URL \u00e0 migrer, de la complexit\u00e9 technique (changement de domaine, de CMS ou de structure URL) et du volume de backlinks \u00e0 pr\u00e9server. Chez Rankwell, les accompagnements migration SEO d\u00e9marrent \u00e0 3 000 EUR pour un site de moins de 500 URL et atteignent 10 000 \u00e0 25 000 EUR pour les sites de plus de 50 000 URL avec enjeux multi-domaines. Ce budget couvre l\'audit pr\u00e9-migration, le plan de redirections, les tests en staging et le monitoring post-migration.',
      },
      {
        question: 'Combien de temps faut-il pour r\u00e9cup\u00e9rer le trafic apr\u00e8s une migration ?',
        answer:
          'La dur\u00e9e d\u00e9pend du type de migration. Un changement de protocole (HTTP vers HTTPS) se stabilise en 2 \u00e0 4 semaines. Un changement de CMS avec pr\u00e9servation des URL n\u00e9cessite 1 \u00e0 3 mois. Un changement de domaine complet demande 3 \u00e0 6 mois, parfois jusqu\'\u00e0 12 mois sur les secteurs tr\u00e8s concurrentiels. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'analyse du profil de backlinks et du volume de pages index\u00e9es avant migration.',
      },
      {
        question: 'Comment \u00e9viter les cha\u00eenes de redirections lors d\'une migration ?',
        answer:
          'Une cha\u00eene de redirections se forme quand une URL A redirige vers B, qui redirige vers C. Chaque saut suppl\u00e9mentaire dilue le PageRank transmis et ralentit le crawl. La r\u00e8gle chez Rankwell est stricte : maximum 1 saut par URL. Le plan de redirections est g\u00e9n\u00e9r\u00e9 en mappant chaque URL indexable de l\'ancien site directement vers sa correspondance finale sur le nouveau site. Les redirections existantes (h\u00e9rit\u00e9es de migrations pr\u00e9c\u00e9dentes) sont mises \u00e0 jour pour pointer directement vers la destination finale.',
      },
      {
        question: 'Quel CMS choisir pour remplacer l\'ancien lors d\'une migration ?',
        answer:
          'Le choix d\u00e9pend du type de site et des objectifs. WordPress convient aux sites vitrines et blogs avec moins de 5 000 pages. Shopify et PrestaShop s\'adaptent aux e-commerces de taille moyenne. Headless CMS (Strapi, Contentful) offrent une flexibilit\u00e9 maximale pour les architectures complexes. Rankwell \u00e9value chaque CMS sur trois crit\u00e8res : gestion native des URL et redirections, support du balisage schema.org, et accessibilit\u00e9 aux robots IA (GPTBot, ClaudeBot).',
      },
      {
        question: 'Comment pr\u00e9server la visibilit\u00e9 IA de mon site apr\u00e8s une migration ?',
        answer:
          'Les moteurs IA (ChatGPT, Perplexity, Gemini) citent votre site sur la base de signaux construits sur l\'ancien domaine : mentions de marque, donn\u00e9es structur\u00e9es, entit\u00e9s nomm\u00e9es. Pour pr\u00e9server ces signaux, trois actions sont n\u00e9cessaires : recr\u00e9er le balisage schema.org \u00e0 l\'identique sur le nouveau domaine, maintenir l\'accessibilit\u00e9 aux robots IA (pas de blocage GPTBot dans le robots.txt), et v\u00e9rifier que le Score GEO post-migration reste stable. Rankwell mesure la citabilit\u00e9 avant et apr\u00e8s migration pour d\u00e9tecter toute rupture.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO classique et GEO pour une migration de site ?',
        answer:
          'Le SEO de migration se concentre sur les redirections 301, la pr\u00e9servation des positions Google et la conservation des backlinks. Le GEO de migration ajoute une couche suppl\u00e9mentaire : la pr\u00e9servation des signaux de citabilit\u00e9 IA (Knowledge Graph, donn\u00e9es structur\u00e9es, mentions de marque dans les corpus des LLM). Un site peut r\u00e9cup\u00e9rer ses positions Google en 3 mois mais perdre sa visibilit\u00e9 dans ChatGPT si les entit\u00e9s et le balisage ne sont pas transf\u00e9r\u00e9s. Rankwell int\u00e8gre les deux dimensions dans une m\u00e9thodologie unifi\u00e9e.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour la migration SEO de mon site ?',
        answer:
          'Rankwell combine l\'expertise technique de migration (mapping URL, redirections 301 sans cha\u00eene, recettage en staging) avec la dimension GEO que 93 % des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 7 \u00e9tapes inclut un audit de citabilit\u00e9 IA pr\u00e9-migration, un plan de transfert des donn\u00e9es structur\u00e9es et un monitoring du Score GEO post-migration. Ce suivi double (positions Google + visibilit\u00e9 moteurs IA) est un indicateur qu\'aucun autre prestataire ne propose dans le cadre d\'une migration.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 migrer votre site sans perdre votre visibilit\u00e9 ?',
    description:
      'Demandez un audit GEO & SEO gratuit avant votre migration. Nos consultants SEO & GEO analysent votre site actuel, cartographient vos URL et vos backlinks, et vous proposent un plan de migration s\u00e9curis\u00e9.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
        { label: 'SEO Caviste', href: '/agence-geo-seo/secteur/caviste' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      ],
      projets: [
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      ],
      glossaire: [
        { label: 'Migration SEO', href: '/glossaire/migration-seo' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Crawl budget', href: '/glossaire/crawl-budget' },
      ],
    },
  },

  // Bandeau maillage : projets et secteurs proches
  relatedSectors: {
    title: 'Nos expertises projets web',
    items: [
      { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
      { label: 'Marketplace', href: '/agence-geo-seo/projet/marketplace' },
      { label: 'Application web', href: '/agence-geo-seo/projet/application-web' },
    ],
  },
};

export default data;
