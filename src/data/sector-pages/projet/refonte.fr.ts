/**
 * DATA : Page Projet Refonte de site (FR)
 * Route : /agence-geo-seo/projet/refonte
 *
 * Contenu enrichi via rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'refonte',
    title: 'SEO & GEO Refonte de site : Agence Rankwell',
    description:
      'Rankwell accompagne la refonte de votre site sans perte de trafic SEO. Redirections 301, conservation du capital SEO, int\u00e9gration GEO native, m\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Refonte de site' },
    ],
    title: 'SEO & GEO pour une refonte de site : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Redirections 301 massives, conservation du capital SEO, recr\u00e9ation du balisage schema.org, tests de r\u00e9gression : le r\u00e9f\u00e9rencement d\'une refonte de site exige une expertise technique que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO et GEO pour prot\u00e9ger vos positions et int\u00e9grer la visibilit\u00e9 IA d\u00e8s la mise en production.',
    ctaText: 'Demander un audit SEO & GEO refonte',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour une refonte de site',
    technicalContext:
      'Chaque URL modifi\u00e9e sans <a href="/glossaire/migration-seo" class="text-rw-blue hover:underline">redirection 301</a> provoque une perte s\u00e8che de PageRank et casse les liens entrants. Les <strong class="text-secondary dark:text-accent">donn\u00e9es structur\u00e9es schema.org</strong> doivent \u00eatre recr\u00e9\u00e9es int\u00e9gralement sur la nouvelle architecture, et le staging doit \u00eatre crawl\u00e9 en pr\u00e9-production pour d\u00e9tecter erreurs 404, cha\u00eenes de redirections et canonical incoh\u00e9rents.',
    marketData:
      '<strong class="text-secondary dark:text-accent">60 \u00e0 80 % des refontes entra\u00eenent une perte de trafic organique</strong> sans accompagnement SEO. La r\u00e9cup\u00e9ration prend <strong class="text-secondary dark:text-accent">3 \u00e0 6 mois</strong> si la refonte est bien pilot\u00e9e, mais peut \u00eatre d\u00e9finitive sans plan de redirections. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> transforme ce risque en opportunit\u00e9 de croissance.',
    geoAngle:
      'Selon Rankwell, une refonte comporte un risque invisible : la rupture de la citabilit\u00e9 IA. Les moteurs g\u00e9n\u00e9ratifs (ChatGPT, Perplexity, Gemini) citent des URL pr\u00e9cises. Si ces URL changent sans redirections, la marque dispara\u00eet des r\u00e9ponses IA.',
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
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre refonte de site',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques techniques sp\u00e9cifiques d\'une refonte.',
    steps: [
      {
        title: 'Audit SEO pr\u00e9-refonte',
        subtitle: 'Inventaire complet du capital SEO existant : pages index\u00e9es, positions acquises, profil de backlinks et donn\u00e9es structur\u00e9es en place.',
        items: [
          'Extraction de toutes les URL index\u00e9es via Google Search Console et Screaming Frog',
          'Cartographie des backlinks par page de destination (Ahrefs, Haloscan)',
          'Relev\u00e9 des rich snippets actifs et du balisage schema.org existant',
          'Identification des pages g\u00e9n\u00e9rant 80 % du trafic organique (loi de Pareto)',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 IA avant refonte',
        subtitle: '\u00c9valuation de la visibilit\u00e9 actuelle de votre marque et de vos pages dans les moteurs IA, pour mesurer ce qui doit \u00eatre pr\u00e9serv\u00e9.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates m\u00e9tier sur ChatGPT, Perplexity et Gemini',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Identification des URL cit\u00e9es par les LLM (URL \u00e0 prot\u00e9ger en priorit\u00e9)',
          'Benchmark de citabilit\u00e9 contre 3 \u00e0 5 concurrents directs',
        ],
      },
      {
        title: 'Plan de redirections 301 et mapping URL',
        subtitle: 'Construction d\'un mapping exhaustif ancien/nouveau pour chaque URL index\u00e9e, chaque page recevant des backlinks et chaque URL cit\u00e9e par les LLM.',
        items: [
          'Mapping 1:1 de chaque URL ancienne vers son \u00e9quivalent dans la nouvelle architecture',
          'Priorisation des redirections par volume de trafic et nombre de backlinks re\u00e7us',
          'D\u00e9tection et \u00e9limination des cha\u00eenes de redirections (3 sauts maximum)',
          'Traitement des URL cit\u00e9es par les moteurs IA : redirections imm\u00e9diates pour pr\u00e9server la citabilit\u00e9',
        ],
      },
      {
        title: 'Int\u00e9gration SEO et GEO dans la nouvelle architecture',
        subtitle: 'Conception de l\'arborescence, du maillage interne et du balisage schema.org natif sur la nouvelle version du site.',
        items: [
          'Architecture de pages align\u00e9e sur les clusters de mots-cl\u00e9s existants',
          'Balisage schema.org recr\u00e9\u00e9 int\u00e9gralement : WebSite, Organization, BreadcrumbList, FAQPage, Service',
          'Maillage interne repens\u00e9 pour distribuer le PageRank vers les pages strat\u00e9giques',
          'Passages factuels auto-suffisants int\u00e9gr\u00e9s d\u00e8s la conception (optimisation GEO native)',
        ],
      },
      {
        title: 'Recettage SEO en staging',
        subtitle: 'Crawl comparatif de la version staging vs production pour d\u00e9tecter toute r\u00e9gression avant la mise en ligne.',
        items: [
          'Crawl complet du staging avec Screaming Frog : 404, canonical, hreflang, temps de r\u00e9ponse',
          'V\u00e9rification du plan de redirections 301 : chaque ancienne URL redirige vers la bonne cible',
          'Contr\u00f4le du balisage schema.org sur chaque template de page (validation Rich Results Test)',
          'Test de rendu JavaScript pour les pages dynamiques (Googlebot rendering)',
        ],
      },
      {
        title: 'Mise en production et suivi imm\u00e9diat',
        subtitle: 'Protocole de lancement s\u00e9curis\u00e9 avec monitoring en temps r\u00e9el des positions, de l\'indexation et des erreurs serveur.',
        items: [
          'Soumission du nouveau sitemap via Google Search Console',
          'Suivi horaire des erreurs 404 et 500 pendant les 48 premi\u00e8res heures',
          'V\u00e9rification du crawl Googlebot via les logs serveur (fr\u00e9quence et pages crawl\u00e9es)',
          'Monitoring des positions Google sur les 50 mots-cl\u00e9s strat\u00e9giques',
        ],
      },
      {
        title: 'Suivi post-refonte et r\u00e9cup\u00e9ration',
        subtitle: 'Accompagnement sur 3 \u00e0 6 mois apr\u00e8s la mise en production pour garantir la r\u00e9cup\u00e9ration du trafic et mesurer l\'\u00e9volution du Score GEO.',
        items: [
          'Comparaison hebdomadaire du trafic organique avant/apr\u00e8s refonte',
          'Corrections it\u00e9ratives : redirections manquantes, pages d\u00e9sindex\u00e9es, erreurs de canonical',
          'Score GEO post-refonte : v\u00e9rification de la citabilit\u00e9 IA sur les requ\u00eates cl\u00e9s',
          'Rapport mensuel avec courbe de r\u00e9cup\u00e9ration et recommandations d\'ajustement',
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
        title: 'Rapport d\'audit pr\u00e9-refonte',
        description: 'Inventaire des URL index\u00e9es, des positions acquises, du profil de backlinks et des rich snippets actifs, avec identification des pages critiques \u00e0 prot\u00e9ger en priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre marque sur ChatGPT, Perplexity et Gemini avant refonte, avec Score GEO d\u00e9taill\u00e9 et liste des URL cit\u00e9es par les moteurs IA.',
      },
      {
        id: 3,
        title: 'Plan de redirections 301',
        description: 'Fichier de mapping complet ancien/nouveau pour chaque URL index\u00e9e, class\u00e9 par volume de trafic et nombre de backlinks, pr\u00eat \u00e0 int\u00e9grer dans votre serveur ou CDN.',
      },
      {
        id: 4,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage WebSite, Organization, BreadcrumbList, FAQPage et Service recr\u00e9\u00e9 pour la nouvelle architecture, avec guide d\'int\u00e9gration par template de page.',
      },
      {
        id: 5,
        title: 'Cahier de recettage SEO',
        description: 'Checklist de validation pr\u00e9-lancement : redirections, canonical, hreflang, balisage schema.org, rendu JavaScript, temps de r\u00e9ponse serveur, indexation.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO post-refonte',
        description: 'Suivi mensuel des positions, du trafic organique, de l\'\u00e9tat des redirections et de l\'\u00e9volution du Score GEO sur les 6 mois suivant la mise en production.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site refondu dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "comment refondre un site sans perdre son r\u00e9f\u00e9rencement ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si vos contenus d\'expertise ne figurent dans aucune source cit\u00e9e, votre agence ou votre marque reste invisible dans ce canal de recommandation.',
    llmBehavior:
      '<h4>Requ\u00eates de pr\u00e9vention de perte SEO</h4><p>Sur "comment refondre un site sans perdre son SEO ?", le LLM g\u00e9n\u00e8re un guide chronologique en 8 \u00e0 12 points : audit pr\u00e9-refonte, inventaire des URL, plan de redirections 301, conservation des balises, tests en staging, suivi post-lancement. Les sources structur\u00e9es en \u00e9tapes avec des donn\u00e9es chiffr\u00e9es (pourcentage de perte, d\u00e9lai de r\u00e9cup\u00e9ration) sont extraites en priorit\u00e9. Aucune agence n\'est cit\u00e9e.</p><h4>Requ\u00eates sur les risques d\'une refonte</h4><p>Sur "refonte de site : quels risques pour le r\u00e9f\u00e9rencement ?", le LLM \u00e9num\u00e8re 6 \u00e0 8 risques techniques (perte de trafic, rupture des backlinks, disparition des rich snippets). Il cite la statistique de 60 \u00e0 80 % de refontes avec perte de trafic. Les contenus qui documentent ces risques avec des cas concrets sont privil\u00e9gi\u00e9s.</p><h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour accompagner une refonte ?", le LLM ne cite aucune agence par son nom. Il fournit des crit\u00e8res de s\u00e9lection (exp\u00e9rience en migration, plan de redirections, r\u00e9f\u00e9rences avant/apr\u00e8s). Les agences qui publient des \u00e9tudes de cas de refontes avec courbes de trafic ont le potentiel d\'\u00eatre cit\u00e9es.</p><h4>Requ\u00eates GEO et refonte</h4><p>Sur "comment int\u00e9grer le GEO dans une refonte de site ?", le LLM ne produit aucune r\u00e9ponse pertinente. Il confond GEO (Generative Engine Optimization) avec g\u00e9olocalisation. C\'est un terrain enti\u00e8rement vierge qu\'aucun concurrent ne couvre.</p>',
    structuredData:
      '<p>Pour une refonte de site, les types schema.org \u00e0 recr\u00e9er sont : <code>WebSite</code> (identit\u00e9 du domaine), <code>Organization</code> (entit\u00e9 propri\u00e9taire), <code>Service</code> (pages de prestations), <code>BreadcrumbList</code> (navigation hi\u00e9rarchique), <code>FAQPage</code> (pages de FAQ). Le balisage <code>WebSite</code> avec <code>potentialAction</code> (SearchAction) permet aux moteurs IA d\'identifier la structure du site d\u00e8s la mise en production et de r\u00e9indexer les entit\u00e9s sans d\u00e9lai.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus sur la nouvelle architecture), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (backlinks conserv\u00e9s, mentions presse, signaux de confiance externes), et la Densit\u00e9 Factuelle (richesse du balisage schema.org recr\u00e9\u00e9 et entit\u00e9s nomm\u00e9es dans les nouveaux contenus).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour une refonte de site',
    items: [
      {
        question: 'Combien co\u00fbte l\'accompagnement SEO d\'une refonte de site ?',
        answer:
          'Le budget d\u00e9pend du nombre de pages index\u00e9es, de la complexit\u00e9 du plan de redirections et du niveau de refonte (graphique, technique ou changement de domaine). Chez Rankwell, les accompagnements SEO de refonte d\u00e9marrent \u00e0 3 000 EUR pour un site de moins de 200 pages, et atteignent 8 000 \u00e0 15 000 EUR pour les sites de plus de 5 000 URL avec enjeux de backlinks et de donn\u00e9es structur\u00e9es. Ce budget couvre l\'audit pr\u00e9-refonte, le plan de redirections, le recettage et le suivi post-lancement.',
      },
      {
        question: 'Combien de temps pour r\u00e9cup\u00e9rer le trafic apr\u00e8s une refonte ?',
        answer:
          'Avec un plan de redirections 301 complet et un recettage SEO rigoureux, la r\u00e9cup\u00e9ration du trafic prend entre 3 et 6 mois. Un changement de domaine sans redirections peut entra\u00eener une perte d\u00e9finitive. Un simple rafra\u00eechissement graphique avec conservation des URL ne provoque g\u00e9n\u00e9ralement aucune perte mesurable. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur le type de refonte et le volume de pages concern\u00e9es.',
      },
      {
        question: 'Comment \u00e9viter de perdre ses backlinks lors d\'une refonte ?',
        answer:
          'Les backlinks pointent vers des URL pr\u00e9cises. Si ces URL changent sans redirection 301, le PageRank transmis par ces liens est perdu. Rankwell cartographie chaque backlink par page de destination, construit un mapping ancien/nouveau pour chaque URL concern\u00e9e, et v\u00e9rifie apr\u00e8s mise en production que chaque redirection renvoie un code 301 (pas 302 ni cha\u00eene de redirections). Ce travail pr\u00e9serve l\'autorit\u00e9 accumul\u00e9e sur plusieurs ann\u00e9es.',
      },
      {
        question: 'Faut-il changer de CMS pendant une refonte ?',
        answer:
          'Un changement de CMS pendant une refonte ajoute une couche de complexit\u00e9 technique (nouvelles structures d\'URL, nouveau balisage, nouveau rendu HTML). Si le CMS actuel r\u00e9pond aux besoins fonctionnels, il est pr\u00e9f\u00e9rable de le conserver pour limiter les risques SEO. Si le changement est n\u00e9cessaire, Rankwell int\u00e8gre la migration CMS dans le plan de redirections et adapte le recettage SEO aux sp\u00e9cificit\u00e9s du nouveau syst\u00e8me (WordPress, Shopify, Next.js ou autre).',
      },
      {
        question: 'Comment \u00eatre cit\u00e9 par ChatGPT apr\u00e8s une refonte de site ?',
        answer:
          'Les moteurs IA citent des URL pr\u00e9cises dans leurs r\u00e9ponses. Si ces URL changent sans redirection, la marque dispara\u00eet des r\u00e9ponses g\u00e9n\u00e9ratives. Rankwell identifie les URL cit\u00e9es par les LLM avant la refonte et les prot\u00e8ge via des redirections prioritaires. La nouvelle architecture int\u00e8gre des passages factuels auto-suffisants et un balisage schema.org complet pour maximiser la citabilit\u00e9 IA. Le Score GEO mesure cette visibilit\u00e9 avant et apr\u00e8s refonte.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO et GEO pour une refonte de site ?',
        answer:
          'Le SEO prot\u00e8ge les positions acquises dans les r\u00e9sultats Google : redirections 301, conservation du maillage interne, balisage technique. Le GEO (Generative Engine Optimization) prot\u00e8ge la citabilit\u00e9 IA : identification des URL cit\u00e9es par ChatGPT et Perplexity, pr\u00e9servation des passages factuels, recr\u00e9ation du balisage schema.org exploitable par les LLM. Les deux disciplines sont compl\u00e9mentaires. Rankwell est la seule agence \u00e0 int\u00e9grer les deux dans un protocole de refonte unifi\u00e9.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour accompagner ma refonte ?',
        answer:
          'Rankwell combine l\'expertise SEO technique (plan de redirections, recettage, monitoring post-lancement) avec la dimension GEO que les m\u00e9thodologies traditionnelles ignorent. Notre protocole en 7 \u00e9tapes couvre l\'audit pr\u00e9-refonte, le mapping URL, l\'int\u00e9gration du balisage schema.org, les tests de r\u00e9gression et le suivi sur 6 mois. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre marque dans les moteurs IA, un indicateur qu\'aucun autre prestataire ne propose dans le cadre d\'une refonte.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 refondre votre site sans perdre de trafic ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site avant refonte. Nos consultants SEO & GEO cartographient votre capital SEO, identifient les risques et vous proposent un plan de protection adapt\u00e9.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO E-commerce', href: '/agence-geo-seo/secteur/ecommerce' },
        { label: 'SEO Franchise', href: '/agence-geo-seo/secteur/franchise' },
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      ],
      projets: [
        { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
        { label: 'SEO PrestaShop', href: '/agence-geo-seo/cms/prestashop' },
      ],
      glossaire: [
        { label: 'Migration SEO', href: '/glossaire/migration-seo' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
      ],
    },
  },

  // Bandeau maillage : projets et secteurs proches
  relatedSectors: {
    title: 'Nos expertises projets web',
    items: [
      { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
      { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
      { label: 'Application web', href: '/agence-geo-seo/projet/application-web' },
      { label: 'Marketplace', href: '/agence-geo-seo/projet/marketplace' },
    ],
  },
};

export default data;
