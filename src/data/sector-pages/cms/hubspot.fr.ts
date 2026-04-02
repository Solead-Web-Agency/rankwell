/**
 * DATA : Page CMS HubSpot (FR)
 * Route : /agence-geo-seo/cms/hubspot
 *
 * CMS integre au CRM HubSpot : SEO Recommendations natif, topic clusters,
 * Content Strategy Tool, CDN global, HubL templates, A/B testing natif,
 * smart content. Cout eleve (Content Hub Pro ~420 EUR/mois), vendor lock-in,
 * personnalisation limitee vs WordPress, HubL = langage proprietaire.
 * Contenu enrichi via auto-test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'hubspot',
    title: 'Agence SEO & GEO HubSpot CMS - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site HubSpot CMS. Topic clusters, HubL, Content Strategy Tool, schema.org : m\u00e9thodologie compl\u00e8te pour HubSpot.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'HubSpot CMS' },
    ],
    title: 'SEO & GEO HubSpot CMS : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Topic clusters fig\u00e9s, HubL propri\u00e9taire, balisage schema.org limit\u00e9 au natif : le r\u00e9f\u00e9rencement d\'un site HubSpot CMS impose des contraintes que les int\u00e9grateurs HubSpot ne traitent pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et faire citer votre marque par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO HubSpot',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur HubSpot CMS (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur HubSpot CMS',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">HubSpot CMS alimente plus de 200 000 sites web dans le monde</strong>, principalement en B2B. Il int\u00e8gre nativement SEO Recommendations, Content Strategy Tool (topic clusters), A/B testing, CDN global et compression d\'images. Le CRM connect\u00e9 relie les donn\u00e9es de conversion aux performances organiques, un avantage unique pour piloter une strat\u00e9gie de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> orient\u00e9e ROI.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Le Content Hub Pro co\u00fbte environ 420 EUR/mois, soit pr\u00e8s de 5 000 EUR par an</strong> avant les co\u00fbts d\'int\u00e9gration. HubL, le langage de templates propri\u00e9taire, ne s\'exporte vers aucun autre CMS (vendor lock-in). Les param\u00e8tres d\'URL automatiques (<code>?hsid=</code>) cr\u00e9ent du <a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">contenu dupliqu\u00e9</a> sans canonicals forc\u00e9s, et l\'absence d\'acc\u00e8s au code serveur limite les redirections complexes et le balisage schema.org.',
    geoAngle:
      'Selon Rankwell, les topic clusters natifs de HubSpot organisent le contenu en graphes th\u00e9matiques lisibles par les LLM, un avantage structurel en GEO. Cette citabilit\u00e9 ne s\'active que si le balisage schema.org d\u00e9passe le niveau natif (limit\u00e9 \u00e0 Organization et BreadcrumbList) et si les passages factuels sont r\u00e9dig\u00e9s pour l\'extraction.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le content marketing SEO entre dans une phase o\u00f9 deux logiques de production coexistent : le contenu optimis\u00e9 pour les clics (title accrocheur, r\u00e9ponse partielle pour forcer le clic) et le contenu optimis\u00e9 pour la citation IA (r\u00e9ponse compl\u00e8te, donn\u00e9es v\u00e9rifiables, passages auto-suffisants). Les deux logiques produisent des formats diff\u00e9rents et mesurent des KPI diff\u00e9rents. Les sites qui ne distinguent pas ces deux objectifs perdent en efficacit\u00e9 sur les deux fronts.',
    glossarySlug: 'content-marketing-seo',
    glossaryLabel: 'En savoir plus sur le content marketing SEO',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur HubSpot CMS et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites HubSpot CMS non audit\u00e9s par un sp\u00e9cialiste SEO externe. Les int\u00e9grateurs HubSpot se concentrent sur le CRM et l\'inbound, pas sur le r\u00e9f\u00e9rencement technique. Un audit cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Param\u00e8tres d\'URL automatiques (?hsid=, ?hstc=)',
        'Contenu dupliqu\u00e9, dilution du crawl budget sur des centaines de variantes',
        'For\u00e7age des balises canonical via module HubL custom, r\u00e8gles d\'exclusion dans le robots.txt, param\u00e9trage dans Google Search Console',
      ],
      [
        'Meta-tags non granulaires sur pages HubDB/dynamiques',
        'Title et description identiques sur toutes les pages listing, perte de pertinence',
        'Injection de meta-tags dynamiques via HubL (hubl_tag) et tokens HubDB pour g\u00e9n\u00e9rer des titres uniques par entr\u00e9e',
      ],
      [
        'Schema.org limit\u00e9 au natif (Organization, BreadcrumbList)',
        'Pas de rich snippets FAQ, Article ou Product, invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD custom dans le <head> via module HubL d\u00e9di\u00e9 : FAQPage, Article, Service, How-To selon le type de page',
      ],
      [
        'Topic clusters fig\u00e9s dans le Content Strategy Tool',
        'Architecture s\u00e9mantique rigide, impossible de cr\u00e9er des cocons multi-niveaux',
        'Compl\u00e9ter les topic clusters natifs par un maillage interne contextuel manuel entre articles et pillar pages',
      ],
      [
        'Pas d\'acc\u00e8s .htaccess ni au code serveur',
        'Redirections limit\u00e9es aux 301 simples, pas de r\u00e8gles regex, pas de headers HTTP avanc\u00e9s',
        'Utilisation du gestionnaire de redirections HubSpot pour les cas simples, CDN Cloudflare en frontal pour les r\u00e8gles complexes et les headers de s\u00e9curit\u00e9',
      ],
      [
        'Scripts tiers non ma\u00eetris\u00e9s (tracking, chatbots, analytics)',
        'LCP d\u00e9grad\u00e9, TBT \u00e9lev\u00e9, perte de positions sur mobile',
        'Audit des scripts charg\u00e9s, d\u00e9f\u00e9rrement des scripts non critiques, suppression des modules inutilis\u00e9s, monitoring Core Web Vitals',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour HubSpot CMS',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de HubSpot CMS.',
    steps: [
      {
        title: 'Audit technique HubSpot CMS',
        subtitle: 'Analyse compl\u00e8te de votre portail HubSpot : modules actifs, templates HubL, configuration CDN, Core Web Vitals et param\u00e8tres d\'URL.',
        items: [
          'Inventaire des modules HubL actifs et des templates utilis\u00e9s',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Analyse du crawl budget : pages index\u00e9es vs pages g\u00e9n\u00e9r\u00e9es par les param\u00e8tres ?hsid et ?hstc',
          'V\u00e9rification des canonicals, redirections et configuration du robots.txt',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site HubSpot dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Nettoyage et rationalisation du portail',
        subtitle: 'Suppression des modules inutilis\u00e9s, des pages fantomes et des param\u00e8tres d\'URL qui polluent l\'index Google.',
        items: [
          'D\u00e9sactivation des modules HubL non utilis\u00e9s qui chargent du CSS/JS inutile',
          'Suppression ou noindex des pages g\u00e9n\u00e9r\u00e9es automatiquement (landing pages obsol\u00e8tes, templates de test)',
          'Exclusion des variantes d\'URL param\u00e9tr\u00e9es du sitemap XML',
          'Consolidation des topic clusters : fusion des clusters redondants, nettoyage des liens internes cass\u00e9s',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse malgr\u00e9 les contraintes d\'une plateforme h\u00e9berg\u00e9e o\u00f9 l\'acc\u00e8s au serveur est ferm\u00e9.',
        items: [
          'Activation de la compression d\'images native et conversion WebP',
          'Audit des scripts tiers : d\u00e9f\u00e9rrement du tracking, suppression des chatbots non essentiels',
          'Configuration du CDN HubSpot et, si n\u00e9cessaire, ajout de Cloudflare en frontal',
          'R\u00e9duction du poids des templates HubL : suppression des modules h\u00e9rit\u00e9s et simplification du DOM',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage SEO au-del\u00e0 des r\u00e9glages natifs de HubSpot, via des modules HubL custom et des injections manuelles.',
        items: [
          'Injection de JSON-LD custom (FAQPage, Article, Service, HowTo) dans le <head> via module HubL',
          'Meta-tags dynamiques pour les pages HubDB (title et description uniques par entr\u00e9e)',
          'Canonical forc\u00e9 sur toutes les pages avec param\u00e8tres d\'URL',
          'Int\u00e9gration Google Search Console et param\u00e9trage des URL parameters',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu HubSpot',
        subtitle: 'Exploitation du Content Strategy Tool et des topic clusters natifs, compl\u00e9t\u00e9s par un maillage interne contextuel pour le SEO et la citabilit\u00e9 IA.',
        items: [
          'Pillar pages + articles satellites organis\u00e9s en topic clusters via l\'outil natif HubSpot',
          'Maillage interne contextuel additionnel entre articles, au-del\u00e0 des liens automatiques des clusters',
          'R\u00e9daction de passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
          'A/B testing natif sur les titles et meta descriptions pour maximiser le CTR organique',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s B2B et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des blogs SaaS, m\u00e9dias B2B et comparateurs de solutions',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans votre secteur',
          'Mentions de marque dans des articles comparatifs CRM et marketing automation',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel croisant les donn\u00e9es SEO (positions, trafic) et les donn\u00e9es CRM HubSpot (leads, conversions) pour piloter le ROI.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par topic cluster et par pillar page',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          'Croisement avec les donn\u00e9es CRM HubSpot (MQL, SQL, taux de conversion organique)',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe marketing, votre int\u00e9grateur HubSpot ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique HubSpot CMS',
        description: 'Diagnostic complet de votre portail HubSpot : modules HubL actifs, param\u00e8tres d\'URL probl\u00e9matiques (?hsid, ?hstc), Core Web Vitals, crawl budget, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org HubSpot',
        description: 'Modules JSON-LD custom d\u00e9velopp\u00e9s en HubL pour injecter FAQPage, Article, Service et HowTo dans le <head> de vos pages. Guide d\'installation pour votre \u00e9quipe ou votre int\u00e9grateur HubSpot.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pillar pages, articles et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans HubSpot CMS via l\'\u00e9diteur natif, avec configuration des topic clusters et du maillage interne.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs SaaS, comparateurs B2B et m\u00e9dias sp\u00e9cialis\u00e9s dans votre secteur. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9 par topic cluster, \u00e9volution du Score GEO, et croisement avec les donn\u00e9es CRM HubSpot (leads, conversions organiques).',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site HubSpot dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence SEO choisir pour un site HubSpot ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Il renvoie vers le marketplace HubSpot et liste des crit\u00e8res de s\u00e9lection, sans citer d\'agence SEO sp\u00e9cialis\u00e9e. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site HubSpot CMS ?", le LLM ne cite aucune agence SEO sp\u00e9cialis\u00e9e. Il renvoie vers le directory officiel HubSpot Solutions Marketplace (336 partenaires en France) et liste des crit\u00e8res de s\u00e9lection : certification HubSpot, exp\u00e9rience CMS Hub, ma\u00eetrise de l\'inbound marketing. Les agences mentionn\u00e9es (Markentive, Make the Grade, Adimeo) sont pr\u00e9sent\u00e9es comme int\u00e9grateurs HubSpot, pas comme experts SEO technique. L\'agence qui d\u00e9montre une expertise SEO technique sp\u00e9cifique \u00e0 HubSpot CMS (HubL, schema.org, crawl budget) a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site HubSpot CMS", le LLM g\u00e9n\u00e8re un guide de 8 \u00e0 10 points centr\u00e9 sur les outils natifs : SEO Recommendations, Content Strategy Tool, topic clusters, compression d\'images, CDN global. Il ne mentionne pas les limites de personnalisation (HubL propri\u00e9taire, pas d\'acc\u00e8s serveur). Les sources privil\u00e9gi\u00e9es sont le blog officiel HubSpot, Impala Web Studio et INSIDEA.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "HubSpot CMS vs WordPress pour le SEO", le LLM produit un tableau comparatif de 5 \u00e0 7 crit\u00e8res. HubSpot est pr\u00e9sent\u00e9 comme sup\u00e9rieur pour les outils SEO natifs et la performance, WordPress pour la flexibilit\u00e9 technique et le co\u00fbt. Le prix du Content Hub Pro (environ 420 EUR/mois) est syst\u00e9matiquement cit\u00e9 comme frein. Les sites publiant des comparatifs avec crit\u00e8res mesurables sont favoris\u00e9s comme sources d\'extraction.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur HubSpot CMS", le LLM identifie 6 \u00e0 8 probl\u00e8mes sp\u00e9cifiques : param\u00e8tres d\'URL (?hsid=), meta-tags non granulaires sur pages HubDB, schema.org limit\u00e9, topic clusters fig\u00e9s. Les sources sont le Community Forum HubSpot, Diagram et INSIDEA. Les contenus qui structurent probl\u00e8me/solution en tableau ont le plus de chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site HubSpot CMS, les types schema.org recommand\u00e9s sont : <code>WebSite</code> (type principal), <code>Organization</code> (natif dans HubSpot), <code>BreadcrumbList</code> (natif), <code>FAQPage</code> (injection custom via module HubL), <code>Article</code> ou <code>BlogPosting</code> (injection custom pour le blog), <code>Service</code> (injection custom pour les pages de service). HubSpot ne g\u00e8re nativement que Organization et BreadcrumbList. Les autres types n\u00e9cessitent un module HubL d\u00e9di\u00e9 pour injecter le JSON-LD dans le <code>&lt;head&gt;</code>.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site HubSpot par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus, qualit\u00e9 des topic clusters), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions dans les m\u00e9dias B2B), et la Densit\u00e9 Factuelle (richesse du balisage schema.org au-del\u00e0 du natif HubSpot, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour HubSpot CMS',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site HubSpot CMS ?',
        answer:
          'Le budget SEO pour un site HubSpot CMS d\u00e9pend du nombre de pages, de la complexit\u00e9 des topic clusters et du niveau de personnalisation technique n\u00e9cessaire (modules HubL custom, schema.org). Il faut ajouter le co\u00fbt de la plateforme elle-m\u00eame : le Content Hub Pro co\u00fbte environ 420 EUR/mois. Chez Rankwell, les accompagnements SEO HubSpot d\u00e9marrent \u00e0 1 500 EUR/mois pour un portail de moins de 100 pages, et atteignent 3 000 \u00e0 5 000 EUR/mois pour les portails complexes avec HubDB et smart content.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur HubSpot CMS ?',
        answer:
          'Les corrections techniques (canonicals, param\u00e8tres d\'URL, nettoyage du crawl budget) produisent des effets mesurables d\u00e8s le premier mois. Le positionnement sur des mots-cl\u00e9s concurrentiels via les topic clusters n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. La performance native de HubSpot (CDN global, cache automatique) acc\u00e9l\u00e8re les gains sur les Core Web Vitals par rapport \u00e0 un CMS auto-h\u00e9berg\u00e9. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre portail.',
      },
      {
        question: 'Peut-on ajouter du schema.org avanc\u00e9 sur HubSpot CMS ?',
        answer:
          'HubSpot CMS ne g\u00e8re nativement que les types Organization et BreadcrumbList. Pour ajouter FAQPage, Article, Service ou HowTo, il faut d\u00e9velopper un module HubL d\u00e9di\u00e9 qui injecte du JSON-LD dans la balise <head> de chaque template. Rankwell cr\u00e9e ces modules custom et fournit un guide d\'installation pour votre \u00e9quipe ou votre int\u00e9grateur HubSpot. Ce balisage avanc\u00e9 active les rich snippets Google et am\u00e9liore la citabilit\u00e9 par les moteurs IA.',
      },
      {
        question: 'Comment r\u00e9duire la lenteur de mon site HubSpot CMS ?',
        answer:
          'La lenteur d\'un site HubSpot CMS provient rarement de l\'h\u00e9bergement (le CDN global est performant) mais des scripts tiers : tracking, chatbots, modules analytics, widgets de formulaire. Rankwell commence par un audit de performance qui identifie les scripts responsables du TBT \u00e9lev\u00e9, d\u00e9f\u00e8re les scripts non critiques, supprime les modules HubL inutilis\u00e9s et simplifie le DOM des templates. Les images sont converties en WebP via la compression native HubSpot.',
      },
      {
        question: 'Comment faire citer mon site HubSpot par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site HubSpot, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles organis\u00e9 en topic clusters (la structure native de HubSpot facilite ce point), un balisage schema.org complet au-del\u00e0 du natif (FAQPage, Article, Service via module HubL custom), et des mentions de votre marque sur des sources B2B tierces. Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'HubSpot CMS est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'HubSpot CMS excelle pour les \u00e9quipes marketing B2B qui veulent un CMS int\u00e9gr\u00e9 au CRM avec des outils SEO natifs (topic clusters, A/B testing, SEO Recommendations). Il est moins adapt\u00e9 aux sites e-commerce, aux m\u00e9dias \u00e9ditoriaux ou aux projets n\u00e9cessitant un contr\u00f4le technique avanc\u00e9 sur le code (schema.org custom, redirections regex, SSR). Le co\u00fbt (environ 420 EUR/mois pour le Content Hub Pro) et le vendor lock-in (HubL ne s\'exporte pas) sont deux points \u00e0 \u00e9valuer. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux forces et limites de HubSpot CMS.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site HubSpot CMS ?',
        answer:
          'Rankwell combine l\'expertise SEO technique HubSpot (modules HubL custom, schema.org avanc\u00e9, nettoyage des param\u00e8tres d\'URL, topic clusters) avec la dimension GEO que les int\u00e9grateurs HubSpot certifi\u00e9s n\'int\u00e8grent pas. Notre m\u00e9thodologie en 8 \u00e9tapes traite les probl\u00e9matiques sp\u00e9cifiques de HubSpot CMS : vendor lock-in technique, balisage limit\u00e9, contenu dupliqu\u00e9 par les param\u00e8tres d\'URL. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site HubSpot CMS ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site HubSpot CMS. Nos consultants SEO & GEO analysent vos topic clusters, vos modules HubL, votre balisage schema.org et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Startup', href: '/agence-geo-seo/secteur/startup' },
        { label: 'SEO Industrie', href: '/agence-geo-seo/secteur/industrie' },
        { label: 'SEO PME', href: '/agence-geo-seo/secteur/pme' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Application web & SaaS', href: '/agence-geo-seo/projet/application-web' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Salesforce', href: '/agence-geo-seo/cms/salesforce' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
      ],
      glossaire: [
        { label: 'Content marketing SEO', href: '/glossaire/content-marketing-seo' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'E-E-A-T', href: '/glossaire/e-e-a-t' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Salesforce', href: '/agence-geo-seo/cms/salesforce' },
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Contentful', href: '/agence-geo-seo/cms/contentful' },
      { label: 'Odoo', href: '/agence-geo-seo/cms/odoo' },
    ],
  },
};

export default data;
