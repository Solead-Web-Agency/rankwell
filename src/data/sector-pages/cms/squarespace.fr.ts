/**
 * DATA : Page CMS Squarespace (FR)
 * Route : /agence-geo-seo/cms/squarespace
 *
 * SaaS design-first, SEO basique correct (SSL, responsive, URLs clean),
 * mais limite (pas de plugins, pas de .htaccess, schema basique, pas de redirections regex).
 * Contenu enrichi via analyse concurrentielle et rapport de test LLM (mars 2026).
 */

import type { CmsPageData } from '@/types/sector-pages';

const data: CmsPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'squarespace',
    title: 'Agence SEO & GEO Squarespace - Rankwell',
    description:
      'Rankwell optimise le SEO et la visibilit\u00e9 IA (GEO) de votre site Squarespace. Audit technique, performance, schema.org, limites de personnalisation : m\u00e9thodologie compl\u00e8te pour Squarespace.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'CMS & Plateformes', href: '/agence-geo-seo/secteurs' },
      { label: 'Squarespace' },
    ],
    title: 'SEO & GEO Squarespace : r\u00e9f\u00e9rencement et visibilit\u00e9 IA',
    subtitle:
      'Structure de headings impos\u00e9e par le th\u00e8me, schema.org limit\u00e9 au strict minimum, aucune possibilit\u00e9 de redirections regex : le r\u00e9f\u00e9rencement d\'un site Squarespace se heurte \u00e0 des contraintes que le SEO g\u00e9n\u00e9raliste ne r\u00e9sout pas. Nos experts combinent SEO technique et GEO pour positionner votre site sur Google et rendre votre marque citable par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO Squarespace',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est different sur Squarespace (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent sur Squarespace',
    seoStrengths:
      '<strong class="text-secondary dark:text-accent">Squarespace propulse plus de 4,4 millions de sites web actifs</strong>. La plateforme g\u00e8re automatiquement le SSL, le responsive, le sitemap.xml et les URLs propres. Son panneau SEO par page permet d\'\u00e9diter title et meta description sans comp\u00e9tence technique, couvrant environ 60 % des crit\u00e8res de <a href="/agence-geo-seo" class="text-rw-blue hover:underline">r\u00e9f\u00e9rencement SEO et GEO</a> basiques.',
    seoLimitations:
      '<strong class="text-secondary dark:text-accent">Squarespace ne dispose d\'aucun plugin SEO comparable \u00e0 Yoast ou RankMath</strong>. La hi\u00e9rarchie Hn est impos\u00e9e par le th\u00e8me, les redirections ne supportent pas les regex, et le balisage <a href="/glossaire/donnees-structurees" class="text-rw-blue hover:underline">schema.org</a> natif se limite \u00e0 WebSite et SearchAction. Les th\u00e8mes chargent du JavaScript propri\u00e9taire non configurable qui d\u00e9grade le LCP.',
    geoAngle:
      'Selon Rankwell, les sites Squarespace souffrent d\'un d\u00e9ficit de citabilit\u00e9 IA structurel : le schema.org natif se r\u00e9duit \u00e0 WebSite et SearchAction, et la plateforme n\'offre aucun m\u00e9canisme natif pour injecter du JSON-LD enrichi (Organization, FAQPage, LocalBusiness). Sans intervention experte, un site Squarespace reste invisible pour les moteurs IA.',
  },

  // ============================================
  // QUOTE : Phrase nucleaire du referentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilit\u00e9 d\'une marque par les LLM d\u00e9pend moins de sa notori\u00e9t\u00e9 que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait v\u00e9rifiable, une donn\u00e9e sourc\u00e9e ou une distinction formalis\u00e9e sera extrait pr\u00e9f\u00e9rentiellement par les moteurs IA, ind\u00e9pendamment de son autorit\u00e9 de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilit\u00e9',
  },

  // ============================================
  // BLOC 3 : Problemes techniques courants (TableauService)
  // ============================================
  technicalTable: {
    title: 'Probl\u00e8mes SEO fr\u00e9quents sur Squarespace et solutions',
    interpretation:
      'Ces probl\u00e8mes touchent la majorit\u00e9 des sites Squarespace non optimis\u00e9s. Chacun limite le positionnement Google et r\u00e9duit la citabilit\u00e9 par les moteurs IA. Un audit technique cibl\u00e9 identifie lesquels s\'appliquent \u00e0 votre site et priorise les corrections.',
    columns: ['Probl\u00e8me', 'Impact SEO', 'Solution Rankwell'],
    rows: [
      [
        'Hi\u00e9rarchie des Hn impos\u00e9e par le th\u00e8me (H1 en double, H3 avant H2)',
        'Confusion s\u00e9mantique pour Google, perte de signal hi\u00e9rarchique',
        'Injection de code personnalis\u00e9 (Custom CSS/HTML blocks) pour corriger la structure Hn sans casser le design du th\u00e8me',
      ],
      [
        'Schema.org natif limit\u00e9 \u00e0 WebSite et SearchAction',
        'Pas de rich snippets, invisibilit\u00e9 pour les LLM',
        'Injection de JSON-LD via Code Injection (header/footer) : Organization, LocalBusiness, BreadcrumbList, FAQPage, Product selon l\'activit\u00e9',
      ],
      [
        'Redirections uniquement chemin \u00e0 chemin (pas de regex)',
        'Migration impossible \u00e0 grande \u00e9chelle, liens morts lors de refonte',
        'Mappage URL par URL avant migration, utilisation d\'un proxy Cloudflare pour les redirections complexes si n\u00e9cessaire',
      ],
      [
        'Performance d\u00e9grad\u00e9e par les images et le JavaScript du th\u00e8me',
        'LCP > 4s sur mobile, chute de positionnement sur les requ\u00eates mobiles',
        'Compression et redimensionnement des images avant upload, limitation des animations et vid\u00e9os int\u00e9gr\u00e9es, activation du lazy loading natif',
      ],
      [
        'Meta descriptions h\u00e9rit\u00e9es de la description globale du site',
        'Contenu dupliqu\u00e9 dans les SERP, CTR r\u00e9duit',
        'R\u00e9daction de meta descriptions uniques pour chaque page et article via le panneau SEO de Squarespace',
      ],
      [
        'Texte alt des images li\u00e9 aux l\u00e9gendes au lieu de descriptions optimis\u00e9es',
        'Images non index\u00e9es dans Google Images, accessibilit\u00e9 d\u00e9grad\u00e9e',
        'Saisie manuelle du texte alt (distinct de la l\u00e9gende) pour chaque image via le panneau d\'\u00e9dition d\'image Squarespace',
      ],
    ],
  },

  // ============================================
  // BLOC 4 : Methodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour Squarespace',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 8 \u00e9tapes, con\u00e7ue pour les sp\u00e9cificit\u00e9s techniques de Squarespace.',
    steps: [
      {
        title: 'Audit technique Squarespace',
        subtitle: 'Analyse compl\u00e8te du site Squarespace : th\u00e8me actif, structure des Hn, balisage schema.org, performance et configuration SEO native.',
        items: [
          'V\u00e9rification de la hi\u00e9rarchie Hn g\u00e9n\u00e9r\u00e9e par le th\u00e8me sur chaque type de page',
          'Mesure des Core Web Vitals (LCP, FID, CLS) sur mobile et desktop',
          'Audit du balisage schema.org natif et des lacunes (Organization, FAQPage, BreadcrumbList absents)',
          'Inventaire des redirections 301 existantes et d\u00e9tection des liens morts',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de votre site Squarespace dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propri\u00e9taire Rankwell.',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates li\u00e9es \u00e0 votre activit\u00e9 sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 concurrents directs',
          'Identification des contenus cit\u00e9s vs ignor\u00e9s par les moteurs IA',
        ],
      },
      {
        title: 'Correction de la structure HTML',
        subtitle: 'R\u00e9paration de la hi\u00e9rarchie des balises Hn et du balisage s\u00e9mantique sans alt\u00e9rer le design du th\u00e8me Squarespace.',
        items: [
          'Injection de code personnalis\u00e9 via les blocs Code et le Code Injection pour corriger les Hn',
          'Suppression des H1 multiples g\u00e9n\u00e9r\u00e9s par le th\u00e8me',
          'Ajout de balises s\u00e9mantiques (nav, main, article) absentes du template natif',
          'V\u00e9rification de la coh\u00e9rence Hn sur les pages blog, portfolio et boutique',
        ],
      },
      {
        title: 'Optimisation de la performance',
        subtitle: 'Am\u00e9lioration de la vitesse de chargement dans les limites de la plateforme Squarespace, sans acc\u00e8s au serveur ni au .htaccess.',
        items: [
          'Compression et redimensionnement des images avant upload (objectif : < 200 Ko par image)',
          'R\u00e9duction des animations, vid\u00e9os embed\u00e9es et galeries lourdes sur la page d\'accueil',
          'Activation du lazy loading natif Squarespace pour les images sous la ligne de flottaison',
          'Mise en place d\'un CDN externe (Cloudflare) si le LCP reste critique apr\u00e8s optimisation',
        ],
      },
      {
        title: 'Configuration SEO avanc\u00e9e',
        subtitle: 'Param\u00e9trage complet des fonctions SEO natives de Squarespace et injection du balisage manquant.',
        items: [
          'R\u00e9daction de title et meta description uniques pour chaque page',
          'Injection de JSON-LD via Code Injection : Organization, BreadcrumbList, FAQPage, LocalBusiness',
          'Configuration des redirections 301 (URL par URL) pour les pages supprim\u00e9es ou restructur\u00e9es',
          'V\u00e9rification et soumission du sitemap.xml dans Google Search Console',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu Squarespace',
        subtitle: 'Cr\u00e9ation de contenus structur\u00e9s pour le r\u00e9f\u00e9rencement Google et la citabilit\u00e9 par les moteurs IA, adapt\u00e9e aux possibilit\u00e9s du blog Squarespace.',
        items: [
          'Pages piliers + articles satellites organis\u00e9s en cat\u00e9gories et tags Squarespace',
          'Maillage interne contextualis\u00e9 entre pages de service, articles de blog et portfolio',
          'FAQ th\u00e9matiques int\u00e9gr\u00e9es via des blocs Accordion natifs de Squarespace',
          'Passages factuels auto-suffisants con\u00e7us pour l\'extraction par les LLM',
        ],
      },
      {
        title: 'Autorit\u00e9 et netlinking',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du domaine via des backlinks de sites sp\u00e9cialis\u00e9s et des mentions de marque exploitables par les LLM.',
        items: [
          'Backlinks depuis des annuaires sectoriels, blogs th\u00e9matiques et m\u00e9dias sp\u00e9cialis\u00e9s',
          'Publications invit\u00e9es sur des sites \u00e0 forte autorit\u00e9 dans le secteur cr\u00e9atif',
          'Mentions de marque dans des comparatifs de plateformes web et guides d\'achat',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique, le Score GEO et les actions correctives pour le mois suivant.',
        items: [
          'Positions Google par mot-cl\u00e9 et par page',
          'Trafic organique segment\u00e9 par type de contenu (pages, blog, portfolio)',
          'Score GEO : visibilit\u00e9 dans les moteurs IA',
          '\u00c9volution des Core Web Vitals et suivi des limites techniques Squarespace',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par votre \u00e9quipe, votre webdesigner Squarespace ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique Squarespace',
        description: 'Diagnostic complet de votre site Squarespace : structure des Hn par th\u00e8me, balisage schema.org natif, Core Web Vitals, redirections et liens morts, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre site et de votre marque dans ChatGPT, Perplexity et Gemini, sur vos requ\u00eates cibles. Benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org Squarespace',
        description: 'Balisage JSON-LD complet (Organization, BreadcrumbList, FAQPage, LocalBusiness, Product) inject\u00e9 via le Code Injection de Squarespace. Guide d\'int\u00e9gration avec captures d\'\u00e9cran pour votre webdesigner.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages, articles de blog et FAQ optimis\u00e9s SEO et GEO. Int\u00e9gration directe dans l\'\u00e9diteur visuel Squarespace (blocs texte, accordions FAQ, galeries optimis\u00e9es).',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs sectoriels, annuaires sp\u00e9cialis\u00e9s (cr\u00e9atifs, design, restauration) et m\u00e9dias th\u00e9matiques. Suivi des liens acquis et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page et par mot-cl\u00e9, trafic organique segment\u00e9, \u00e9volution du Score GEO, \u00e9tat de la performance Squarespace (Core Web Vitals, poids des pages) et recommandations d\'ajustement.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilite IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre site Squarespace dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande \u00e0 ChatGPT "quelle agence choisir pour mon site Squarespace ?", le LLM compile des sources web pour formuler sa r\u00e9ponse. Si votre site n\'appara\u00eet dans aucune source cit\u00e9e, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un site Squarespace ?", le LLM ne recommande aucune agence de mani\u00e8re directe. Il fournit des crit\u00e8res de s\u00e9lection (exp\u00e9rience Squarespace, r\u00e9f\u00e9rences clients, ma\u00eetrise des limites techniques) et renvoie vers des listes \u00e9ditorielles ou des annuaires. En francophone, AdPremier et quelques consultants ind\u00e9pendants apparaissent. SEOSpace (plugin officiel, 40 000+ sites) est le seul outil nomm\u00e9 r\u00e9guli\u00e8rement. L\'agence qui structure son contenu avec une m\u00e9thodologie document\u00e9e et des r\u00e9sultats chiffr\u00e9s a le potentiel d\'\u00eatre cit\u00e9e.</p><h4>Requ\u00eates techniques</h4><p>Sur "comment am\u00e9liorer le SEO d\'un site Squarespace", le LLM g\u00e9n\u00e8re un guide en 8 \u00e0 12 points couvrant les meta titles, les images, le maillage interne et l\'int\u00e9gration GSC. Il ne cite aucune agence. Les sources privil\u00e9gi\u00e9es sont Squarespace Help Center, Gooweb, Square Design et Mon Lab Digital. La dimension GEO est totalement absente.</p><h4>Requ\u00eates comparatives CMS</h4><p>Sur "Squarespace vs WordPress pour le SEO", le LLM produit un tableau de 6 \u00e0 8 crit\u00e8res. WordPress est pr\u00e9sent\u00e9 comme sup\u00e9rieur en flexibilit\u00e9 (plugins, .htaccess, schema.org complet). Squarespace est pr\u00e9sent\u00e9 comme suffisant pour les fondamentaux mais limit\u00e9 en personnalisation. Les sites publiant des comparatifs structur\u00e9s avec crit\u00e8res mesurables sont favoris\u00e9s comme sources.</p><h4>Requ\u00eates de probl\u00e8mes techniques</h4><p>Sur "probl\u00e8mes SEO fr\u00e9quents sur Squarespace", le LLM fournit une liste de 6 \u00e0 8 probl\u00e8mes sp\u00e9cifiques : Hn impos\u00e9s par le th\u00e8me, schema.org limit\u00e9, pas de redirections regex, performance image. Les contenus structur\u00e9s en probl\u00e8me/solution en tableau ont les meilleures chances d\'\u00eatre extraits.</p>',
    structuredData:
      'Pour un site Squarespace, le balisage schema.org natif se limite \u00e0 <code>WebSite</code> et <code>SearchAction</code>. Tous les types suppl\u00e9mentaires doivent \u00eatre inject\u00e9s manuellement via le Code Injection (header) : <code>Organization</code> ou <code>LocalBusiness</code> (selon l\'activit\u00e9), <code>BreadcrumbList</code> (navigation), <code>FAQPage</code> (pages de FAQ), <code>Product</code> (pour Squarespace Commerce). Cette injection manuelle est la seule voie pour obtenir des rich snippets Google et permettre aux LLM d\'extraire des donn\u00e9es structur\u00e9es exploitables.',
    geoScore:
      'Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre site Squarespace par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (pr\u00e9sence et profondeur des contenus), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (signaux de confiance externes, backlinks, mentions), et la Densit\u00e9 Factuelle (richesse du balisage schema.org, donn\u00e9es structur\u00e9es et entit\u00e9s nomm\u00e9es dans les pages).',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 7 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour Squarespace',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un site Squarespace ?',
        answer:
          'Le budget SEO pour un site Squarespace d\u00e9pend du nombre de pages, du th\u00e8me utilis\u00e9 et du niveau de concurrence sur vos requ\u00eates cibles. Chez Rankwell, les accompagnements SEO Squarespace d\u00e9marrent \u00e0 1 200 EUR/mois pour un site vitrine de moins de 30 pages, et atteignent 2 500 \u00e0 4 000 EUR/mois pour les sites portfolio ou e-commerce Squarespace Commerce avec des centaines de pages. Ce budget inclut l\'audit technique, l\'injection du balisage schema.org, la strat\u00e9gie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur Squarespace ?',
        answer:
          'Les premiers r\u00e9sultats apparaissent g\u00e9n\u00e9ralement entre 2 et 4 mois pour les corrections techniques (structure Hn, meta descriptions, schema.org). Le positionnement sur des mots-cl\u00e9s concurrentiels n\u00e9cessite 4 \u00e0 8 mois de travail soutenu. Les gains de performance (compression images, r\u00e9duction du LCP) produisent des effets mesurables d\u00e8s le premier mois. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial de votre site Squarespace.',
      },
      {
        question: 'Peut-on ajouter du schema.org avanc\u00e9 sur Squarespace sans plugins ?',
        answer:
          'Oui, mais uniquement via le Code Injection (header ou footer) disponible dans les param\u00e8tres avanc\u00e9s de Squarespace. Le balisage natif se limite \u00e0 WebSite et SearchAction. Pour obtenir des rich snippets Google (FAQ, avis, fil d\'Ariane), il faut injecter du JSON-LD manuellement pour chaque type : Organization, BreadcrumbList, FAQPage, LocalBusiness, Product. Rankwell produit ces snippets et les int\u00e8gre directement dans votre site.',
      },
      {
        question: 'Comment am\u00e9liorer la vitesse de mon site Squarespace ?',
        answer:
          'La lenteur d\'un site Squarespace provient de trois causes principales : images t\u00e9l\u00e9charg\u00e9es sans compression (souvent > 2 Mo), animations et vid\u00e9os int\u00e9gr\u00e9es en page d\'accueil, et JavaScript propri\u00e9taire du th\u00e8me non configurable. Rankwell intervient en amont (compression et redimensionnement avant upload, limitation des galeries lourdes) et configure le lazy loading natif. Si le LCP reste critique, un proxy CDN (Cloudflare) peut \u00eatre plac\u00e9 devant Squarespace pour acc\u00e9l\u00e9rer la livraison.',
      },
      {
        question: 'Comment faire citer mon site Squarespace par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent votre site Squarespace, trois conditions sont n\u00e9cessaires : un contenu riche en donn\u00e9es factuelles v\u00e9rifiables (chiffres, comparatifs, d\u00e9finitions) et non purement visuel, un balisage schema.org inject\u00e9 manuellement (le natif Squarespace est insuffisant), et des mentions de votre marque sur des sources tierces (blogs, presse, annuaires). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter la citabilit\u00e9 de votre site.',
      },
      {
        question: 'Squarespace est-il un bon choix pour le SEO en 2026 ?',
        answer:
          'Squarespace couvre les fondamentaux SEO (SSL, responsive, URLs propres, sitemap automatique) et convient aux sites vitrines de cr\u00e9ateurs, photographes et restaurants. Pour les projets ou le SEO est une priorit\u00e9 strat\u00e9gique (e-commerce, \u00e9ditorial, lead generation), ses limites deviennent un frein : pas de plugins SEO, schema.org basique, redirections URL par URL, performance image non optimale. Rankwell adapte sa m\u00e9thodologie SEO et GEO aux contraintes sp\u00e9cifiques de Squarespace pour en extraire le maximum.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site Squarespace ?',
        answer:
          'Rankwell combine l\'expertise SEO technique Squarespace (correction des Hn du th\u00e8me, injection de JSON-LD via Code Injection, optimisation de la performance dans les limites de la plateforme) avec la dimension GEO que la quasi-totalit\u00e9 des agences SEO n\'int\u00e8grent pas encore. Notre m\u00e9thodologie en 8 \u00e9tapes est con\u00e7ue pour les contraintes sp\u00e9cifiques de Squarespace : absence de plugins, schema.org limit\u00e9, redirections manuelles. Le Score GEO propri\u00e9taire mesure la visibilit\u00e9 de votre site dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 optimiser votre site Squarespace ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site Squarespace. Nos consultants SEO & GEO analysent votre th\u00e8me, votre balisage, votre performance et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Consultant', href: '/agence-geo-seo/secteur/consultant' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
      ],
      glossaire: [
        { label: 'Citabilit\u00e9', href: '/glossaire/citabilite' },
        { label: 'Donn\u00e9es structur\u00e9es (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Core Web Vitals', href: '/glossaire/core-web-vitals' },
      ],
    },
  },

  // Bandeau maillage : CMS proches
  relatedSectors: {
    title: 'SEO & GEO par CMS et plateforme',
    items: [
      { label: 'Webflow', href: '/agence-geo-seo/cms/webflow' },
      { label: 'Wix', href: '/agence-geo-seo/cms/wix' },
      { label: 'WordPress', href: '/agence-geo-seo/cms/wordpress' },
      { label: 'Framer', href: '/agence-geo-seo/cms/framer' },
      { label: 'Shopify', href: '/agence-geo-seo/cms/shopify' },
      { label: 'Weebly', href: '/agence-geo-seo/cms/weebly' },
    ],
  },
};

export default data;
