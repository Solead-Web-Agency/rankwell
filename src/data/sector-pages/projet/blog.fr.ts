/**
 * DATA : Page Projet Blog (FR)
 * Route : /agence-geo-seo/projet/blog
 *
 * Contenu enrichi via rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'blog',
    title: 'SEO & GEO Blog : Agence Rankwell',
    description:
      'Rankwell optimise le r\u00e9f\u00e9rencement SEO et la visibilit\u00e9 IA (GEO) de votre blog. Cannibalisation, E-E-A-T auteur, maillage pilier/satellite, m\u00e9thodologie compl\u00e8te.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Blog' },
    ],
    title: 'SEO & GEO pour blog : m\u00e9thodologie compl\u00e8te',
    subtitle:
      'Cannibalisation th\u00e9matique, content decay, E-E-A-T auteur, maillage pilier/satellite : le r\u00e9f\u00e9rencement d\'un blog pose des probl\u00e8mes \u00e9ditoriaux que le SEO g\u00e9n\u00e9raliste ne couvre pas. Nos experts combinent SEO et GEO pour positionner vos articles sur Google et faire citer votre expertise par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO blog',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est diff\u00e9rent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est diff\u00e9rent pour un blog',
    technicalContext:
      '<a href="/glossaire/cannibalisation-seo" class="text-rw-blue hover:underline">Cannibalisation th\u00e9matique</a> massive : <strong class="text-secondary dark:text-accent">jusqu\'\u00e0 30 % des articles ciblent les m\u00eames clusters de mots-cl\u00e9s</strong>. Le content decay touche 50 % des contenus apr\u00e8s 2 ans, et Google \u00e9value d\u00e9sormais l\'<a href="/glossaire/e-e-a-t" class="text-rw-blue hover:underline">E-E-A-T</a> au niveau de l\'auteur : un blog sans profils auteurs structur\u00e9s perd en cr\u00e9dibilit\u00e9.',
    marketData:
      '<strong class="text-secondary dark:text-accent">77 % du trafic organique d\'un blog provient d\'articles de plus de 6 mois</strong>. Les blogs r\u00e9guliers g\u00e9n\u00e8rent <strong class="text-secondary dark:text-accent">3,5 fois plus de trafic</strong> que les blogs sporadiques. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> identifie les articles \u00e0 mettre \u00e0 jour, fusionner ou cr\u00e9er pour combler les lacunes th\u00e9matiques.',
    geoAngle:
      'Selon Rankwell, le blog est le type de site le plus cit\u00e9 par les moteurs IA sur les requ\u00eates informationnelles. Un blog dont chaque article identifie son auteur (balisage Person), cite ses sources et structure ses donn\u00e9es en passages auto-suffisants devient une source de r\u00e9f\u00e9rence pour les LLM.',
  },

  // ============================================
  // QUOTE : Phrase nucl\u00e9aire du r\u00e9f\u00e9rentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le content marketing SEO entre dans une phase o\u00f9 deux logiques de production coexistent : le contenu optimis\u00e9 pour les clics (title accrocheur, r\u00e9ponse partielle pour forcer le clic) et le contenu optimis\u00e9 pour la citation IA (r\u00e9ponse compl\u00e8te, donn\u00e9es v\u00e9rifiables, passages auto-suffisants). Les deux logiques produisent des formats diff\u00e9rents et mesurent des KPI diff\u00e9rents. Les sites qui ne distinguent pas ces deux objectifs perdent en efficacit\u00e9 sur les deux fronts.',
    glossarySlug: 'content-marketing-seo',
    glossaryLabel: 'En savoir plus sur le content marketing SEO',
  },

  // ============================================
  // BLOC 3 : M\u00e9thodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre m\u00e9thodologie SEO & GEO pour votre blog',
    subtitle: 'Notre approche de r\u00e9f\u00e9rencement structur\u00e9e en 7 \u00e9tapes, con\u00e7ue pour les probl\u00e9matiques \u00e9ditoriales sp\u00e9cifiques du blog.',
    steps: [
      {
        title: 'Audit de cannibalisation et cartographie \u00e9ditoriale',
        subtitle: 'Identification de tous les articles en comp\u00e9tition interne sur les m\u00eames clusters de mots-cl\u00e9s, avec mesure de l\'impact sur les positions.',
        items: [
          'Clustering s\u00e9mantique de l\'ensemble des articles existants',
          'D\u00e9tection des doublons th\u00e9matiques et des chevauchements de mots-cl\u00e9s',
          'Mesure du content decay : articles en perte de trafic depuis plus de 12 mois',
          'Matrice article/mot-cl\u00e9 : identification des cannibalisations actives',
        ],
      },
      {
        title: 'Audit GEO : citabilit\u00e9 \u00e9ditoriale et pr\u00e9sence IA',
        subtitle: '\u00c9valuation de la visibilit\u00e9 de vos articles et de vos auteurs dans les moteurs IA (ChatGPT, Perplexity, Gemini).',
        items: [
          'Test de 20 \u00e0 30 requ\u00eates informationnelles sur les LLM li\u00e9es \u00e0 votre th\u00e9matique',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle',
          'Benchmark contre 3 \u00e0 5 blogs concurrents directs',
          'Analyse de la reconnaissance auteur : les LLM citent-ils vos experts ?',
        ],
      },
      {
        title: 'Architecture pilier/satellite et maillage interne',
        subtitle: 'Restructuration du blog en clusters th\u00e9matiques avec articles piliers et articles satellites reli\u00e9s par un maillage interne optimis\u00e9.',
        items: [
          'D\u00e9finition des articles piliers (1 par cluster th\u00e9matique principal)',
          'Rattachement des articles satellites \u00e0 leur pilier via liens contextuels',
          'Suppression ou fusion des articles cannibalisant sans trafic ni backlinks',
          'Distribution du PageRank : les piliers re\u00e7oivent le plus de liens internes',
        ],
      },
      {
        title: 'Optimisation on-page et balisage Article/Person',
        subtitle: 'Renforcement de chaque article avec un balisage schema.org complet et des profils auteurs structur\u00e9s pour le E-E-A-T.',
        items: [
          'Balisage Article ou BlogPosting avec datePublished et dateModified',
          'Profils auteurs avec schema Person : nom, r\u00f4le, expertise, liens sociaux',
          'Passages auto-suffisants : chaque section contient un fait v\u00e9rifiable citable par les LLM',
          'Optimisation des images (alt text descriptif, WebP, lazy loading)',
        ],
      },
      {
        title: 'Strat\u00e9gie de contenu et calendrier de mise \u00e0 jour',
        subtitle: 'Planification des nouveaux articles et des mises \u00e0 jour d\'articles existants pour contrer le content decay.',
        items: [
          'Plan de contenu bas\u00e9 sur les lacunes th\u00e9matiques identifi\u00e9es dans l\'audit',
          'Calendrier de rafra\u00eechissement : mise \u00e0 jour des articles dont le trafic d\u00e9cline',
          'Ratio cible : 40 % nouveaux articles, 60 % mises \u00e0 jour d\'articles existants',
          'Format double : contenu pour le clic (title accrocheur) et contenu pour la citation IA (r\u00e9ponse compl\u00e8te)',
        ],
      },
      {
        title: 'Netlinking et autorit\u00e9 \u00e9ditoriale',
        subtitle: 'D\u00e9veloppement de l\'autorit\u00e9 du blog via des backlinks de sites sp\u00e9cialis\u00e9s et la visibilit\u00e9 des auteurs.',
        items: [
          'Guest posting sur des blogs et m\u00e9dias de r\u00e9f\u00e9rence dans votre th\u00e9matique',
          'Cr\u00e9ation de ressources citables : \u00e9tudes, infographies, donn\u00e9es propri\u00e9taires',
          'Construction des profils auteurs sur des plateformes tierces (LinkedIn, Medium, presse)',
          'Chaque mention externe renforce le PageRank et la citabilit\u00e9 IA de l\'auteur',
        ],
      },
      {
        title: 'Suivi, reporting et it\u00e9rations',
        subtitle: 'Reporting mensuel avec positions par cluster, trafic organique par article, taux de content decay et Score GEO.',
        items: [
          'Positions Google par cluster th\u00e9matique et par article pilier',
          'Trafic organique segment\u00e9 : nouveaux articles vs articles mis \u00e0 jour',
          'Score GEO : \u00e9volution de la citabilit\u00e9 dans les moteurs IA sur les requ\u00eates informationnelles',
          'Taux de content decay mensuel et plan de rafra\u00eechissement ajust\u00e9',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 4 : Livrables (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en r\u00e9f\u00e9rencement, votre \u00e9quipe \u00e9ditoriale ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit de cannibalisation',
        description: 'Cartographie compl\u00e8te des chevauchements th\u00e9matiques entre articles, matrice article/mot-cl\u00e9, liste des fusions et suppressions recommand\u00e9es, avec impact estim\u00e9 sur les positions.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de vos articles et de vos auteurs sur ChatGPT, Perplexity et Gemini, avec benchmark concurrentiel et Score GEO d\u00e9taill\u00e9 par cluster th\u00e9matique.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Article, BlogPosting, Person (auteurs), BreadcrumbList et FAQPage adapt\u00e9 \u00e0 votre CMS, avec guide d\'int\u00e9gration par plateforme (WordPress, Ghost, Webflow).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction d\'articles piliers, mises \u00e0 jour d\'articles existants et cr\u00e9ation de FAQ th\u00e9matiques, avec int\u00e9gration directe sur votre CMS. Cr\u00e9ation des templates d\'articles optimis\u00e9s si besoin.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des blogs experts, m\u00e9dias de niche et plateformes \u00e9ditoriales. Suivi de la progression du Domain Rating et des mentions auteurs sur les sites tiers.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions par cluster th\u00e9matique, du trafic organique par article, du taux de content decay, et de l\'\u00e9volution du Score GEO sur les requ\u00eates informationnelles.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilit\u00e9 IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilit\u00e9 IA : votre blog dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande \u00e0 ChatGPT "comment \u00e9viter la cannibalisation sur un blog ?", le LLM compile des sources web pour construire sa r\u00e9ponse. Si aucun de vos articles n\'appara\u00eet dans les sources cit\u00e9es, votre expertise est invisible dans ce canal de d\u00e9couverte.',
    llmBehavior:
      '<h4>Requ\u00eates de recommandation d\'agence</h4><p>Sur "quelle agence SEO pour un blog ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de crit\u00e8res g\u00e9n\u00e9riques (exp\u00e9rience en content marketing, r\u00e9f\u00e9rences \u00e9ditoriales, ma\u00eetrise du E-E-A-T) et oriente vers des annuaires. L\'agence qui publie une m\u00e9thodologie d\u00e9taill\u00e9e de gestion du content decay et de la cannibalisation a le potentiel d\'\u00eatre cit\u00e9e en r\u00e9f\u00e9rence.</p><h4>Requ\u00eates techniques sur la cannibalisation</h4><p>Sur "comment \u00e9viter la cannibalisation sur un blog ?", le LLM g\u00e9n\u00e8re un guide en 5 \u00e0 7 points (clustering, fusion d\'articles, canonical tags, redirections 301) sans chiffrer l\'impact sur les positions. Les sources cit\u00e9es sont des blogs SEO g\u00e9n\u00e9ralistes. Aucune m\u00e9thodologie structur\u00e9e ni aucun outil de diagnostic n\'est mentionn\u00e9.</p><h4>Requ\u00eates sur la fr\u00e9quence de publication</h4><p>Sur "quelle fr\u00e9quence de publication pour un blog SEO ?", le LLM fournit des fourchettes variables (2 \u00e0 4 articles par mois pour les PME) et recommande la qualit\u00e9 sur la quantit\u00e9. Il mentionne le content decay mais ne d\u00e9taille pas de m\u00e9thodologie de rafra\u00eechissement syst\u00e9matique.</p><h4>Requ\u00eates sur la citabilit\u00e9 IA</h4><p>Sur "comment faire citer son blog par ChatGPT ?", le LLM recommande des donn\u00e9es factuelles v\u00e9rifiables, le balisage Article et Person, et des sources cit\u00e9es dans le contenu. Il ne mentionne aucun score de citabilit\u00e9 ni aucune m\u00e9thodologie d\'audit GEO structur\u00e9e.</p>',
    structuredData:
      '<p>Pour un blog, les types schema.org recommand\u00e9s sont : <code>Article</code> et <code>BlogPosting</code> (sur chaque article), <code>Person</code> (profil auteur avec nom, r\u00f4le, expertise et liens sociaux), <code>BreadcrumbList</code> (navigation cat\u00e9gorie/article), <code>FAQPage</code> (articles en format questions-r\u00e9ponses). Le balisage <code>Person</code> li\u00e9 \u00e0 l\'auteur renforce le signal E-E-A-T aupr\u00e8s de Google et fournit aux LLM une entit\u00e9 auteur identifiable pour attribuer les citations.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilit\u00e9 de votre blog par les moteurs IA sur une \u00e9chelle de 0 \u00e0 100. Il \u00e9value trois dimensions : l\'Univers Informatif (couverture th\u00e9matique, profondeur des articles piliers et satellites), la L\u00e9gitimit\u00e9 et Citabilit\u00e9 (reconnaissance des auteurs, mentions presse, backlinks de sites sp\u00e9cialis\u00e9s), et la Densit\u00e9 Factuelle (richesse du balisage Article/Person, donn\u00e9es chiffr\u00e9es par article, passages auto-suffisants).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : m\u00e9thode compl\u00e8te', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fr\u00e9quentes : SEO pour blog',
    items: [
      {
        question: 'Combien co\u00fbte le r\u00e9f\u00e9rencement d\'un blog ?',
        answer:
          'Le budget SEO pour un blog d\u00e9pend du volume d\'articles existants, de la fr\u00e9quence de publication cible et du niveau de concurrence th\u00e9matique. Chez Rankwell, les accompagnements SEO blog d\u00e9marrent \u00e0 1 500 EUR/mois pour un blog de moins de 200 articles, et atteignent 3 000 \u00e0 6 000 EUR/mois pour les blogs de plus de 500 articles avec enjeux de cannibalisation et de content decay. Ce budget inclut l\'audit de cannibalisation, la strat\u00e9gie de contenu, les mises \u00e0 jour d\'articles et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des r\u00e9sultats SEO sur un blog ?',
        answer:
          'Le nettoyage de la cannibalisation (fusions, redirections, restructuration du maillage) produit des effets mesurables en 4 \u00e0 8 semaines sur les positions. Les nouveaux articles piliers atteignent leur potentiel de trafic en 3 \u00e0 6 mois. La mise \u00e0 jour d\'articles anciens en content decay peut r\u00e9cup\u00e9rer 40 \u00e0 70 % du trafic perdu en 6 \u00e0 10 semaines. Rankwell fournit un calendrier pr\u00e9visionnel bas\u00e9 sur l\'audit initial du blog.',
      },
      {
        question: 'Comment savoir si mon blog a un probl\u00e8me de cannibalisation ?',
        answer:
          'La cannibalisation se d\u00e9tecte quand plusieurs articles se positionnent sur les m\u00eames requ\u00eates, alternent en position dans les SERP (URL flapping), ou se disputent le m\u00eame trafic. Rankwell utilise un clustering s\u00e9mantique automatis\u00e9 pour regrouper tous les articles par th\u00e9matique et identifier les chevauchements. Un blog de plus de 100 articles sans strat\u00e9gie de clustering pr\u00e9sente presque syst\u00e9matiquement des cannibalisations actives.',
      },
      {
        question: 'Quel CMS choisir pour un blog optimis\u00e9 SEO ?',
        answer:
          'WordPress reste le CMS le plus flexible pour le SEO blog, avec un \u00e9cosyst\u00e8me de plugins d\u00e9di\u00e9s (Yoast, Rank Math) et un balisage Article natif. Ghost offre de meilleures performances brutes et un balisage structur\u00e9 int\u00e9gr\u00e9. Webflow convient aux blogs visuels avec un contr\u00f4le fin du rendu HTML. Rankwell a une expertise SEO et GEO sur ces trois plateformes et adapte le balisage Person/Article aux sp\u00e9cificit\u00e9s de chaque CMS.',
      },
      {
        question: 'Comment faire citer mon blog par ChatGPT et Perplexity ?',
        answer:
          'Pour que les moteurs IA citent vos articles, trois conditions doivent \u00eatre r\u00e9unies : des passages contenant des donn\u00e9es factuelles v\u00e9rifiables (chiffres sourc\u00e9s, comparaisons mesurables), un balisage schema.org Article et Person complet pour identifier l\'auteur et son expertise, et des mentions de vos auteurs sur des sources tierces (conf\u00e9rences, podcasts, articles invit\u00e9s). Le Score GEO de Rankwell mesure ces trois dimensions et priorise les leviers d\'am\u00e9lioration.',
      },
      {
        question: 'Quelle diff\u00e9rence entre SEO classique et GEO pour un blog ?',
        answer:
          'Le SEO positionne vos articles dans les r\u00e9sultats de recherche Google (positions 1 \u00e0 10). Le GEO (Generative Engine Optimization) fait citer vos articles et vos auteurs dans les r\u00e9ponses g\u00e9n\u00e9r\u00e9es par ChatGPT, Perplexity et Google AI Overviews. Pour un blog, la diff\u00e9rence est particuli\u00e8rement marqu\u00e9e : les LLM extraient les passages factuels d\'articles de blog plus que de tout autre type de site. Rankwell int\u00e8gre les deux approches dans une m\u00e9thodologie unique adapt\u00e9e au contenu \u00e9ditorial.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon blog ?',
        answer:
          'Rankwell combine l\'expertise SEO \u00e9ditoriale (cannibalisation, maillage pilier/satellite, content decay, E-E-A-T auteur) avec la dimension GEO que la plupart des agences SEO n\'int\u00e8grent pas. Notre m\u00e9thodologie en 7 \u00e9tapes est con\u00e7ue pour les probl\u00e9matiques sp\u00e9cifiques du blog : articles en comp\u00e9tition interne, perte de trafic sur les contenus anciens, absence de profils auteurs structur\u00e9s. Le Score GEO propri\u00e9taire mesure la citabilit\u00e9 de vos articles dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Pr\u00eat \u00e0 rendre votre blog visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre blog. Nos consultants SEO & GEO analysent vos articles, votre maillage interne et votre visibilit\u00e9 dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
        { label: 'SEO Association', href: '/agence-geo-seo/secteur/association' },
        { label: 'SEO Franchise', href: '/agence-geo-seo/secteur/franchise' },
      ],
      projets: [
        { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
      ],
      glossaire: [
        { label: 'Content marketing SEO', href: '/glossaire/content-marketing-seo' },
        { label: 'Cannibalisation SEO', href: '/glossaire/cannibalisation-seo' },
        { label: 'E-E-A-T', href: '/glossaire/e-e-a-t' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises contenu et \u00e9ditorial',
    items: [
      { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
      { label: 'Cr\u00e9ation de site', href: '/agence-geo-seo/projet/creation-site' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
      { label: 'Association', href: '/agence-geo-seo/secteur/association' },
      { label: 'Franchise', href: '/agence-geo-seo/secteur/franchise' },
    ],
  },
};

export default data;
