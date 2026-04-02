/**
 * DATA : Page Projet Création de site (FR)
 * Route : /agence-geo-seo/projet/creation-site
 *
 * Contenu enrichi via rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'creation-site',
    title: 'SEO & GEO Création de site : Agence Rankwell',
    description:
      'Rankwell intègre le référencement SEO et la visibilité IA (GEO) dès la création de votre site. Architecture, schema.org, CMS, stratégie de contenu initiale.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Création de site' },
    ],
    title: 'SEO & GEO pour création de site : méthodologie complète',
    subtitle:
      'Architecture GEO-native, choix du CMS orienté référencement, balisage schema.org intégré dès le développement : nos experts construisent la visibilité SEO et IA de votre site avant même sa mise en ligne.',
    ctaText: 'Demander un audit SEO & GEO création de site',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour une création de site',
    technicalContext:
      'Un site créé sans stratégie SEO accumule une <strong class="text-secondary dark:text-accent">dette technique mesurable dès les 6 premiers mois</strong> : URL sans logique sémantique, balises title par défaut, absence de sitemap. Corriger ces fondations a posteriori coûte 2 à 5 fois plus cher. L\'enjeu premier est l\'<a href="/glossaire/seo-technique" class="text-rw-blue hover:underline">architecture technique</a> : silos URL, hiérarchie Hn, canonical tags et directives robots pour Googlebot et les robots IA.',
    marketData:
      '<strong class="text-secondary dark:text-accent">71 % des PME françaises disposent d\'un site web</strong>, mais moins de 30 % ont fait appel à un expert SEO lors de la conception. La requête "création site internet" génère <strong class="text-secondary dark:text-accent">14 800 recherches par mois</strong>. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> intervenant dès la conception pose les fondations de visibilité Google et IA dès le lancement.',
    geoAngle:
      'Selon Rankwell, le SEO technique en 2026 porte un double enjeu : garantir l\'accessibilité aux robots classiques (Googlebot, Bingbot) et aux robots IA (GPTBot, ClaudeBot, PerplexityBot), car ces deux familles ont des comportements distincts et leurs directives robots.txt doivent être gérées séparément.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO technique en 2026 porte un double enjeu : garantir l\'accessibilité du site aux robots d\'indexation classiques (Googlebot, Bingbot) et aux robots des moteurs IA (GPTBot, ClaudeBot, PerplexityBot), car ces deux familles de crawlers ont des comportements distincts et leurs directives robots.txt doivent être gérées séparément.',
    glossarySlug: 'seo-technique',
    glossaryLabel: 'En savoir plus sur le SEO technique',
  },

  // ============================================
  // BLOC 3 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie SEO & GEO pour votre création de site',
    subtitle: 'Notre approche de référencement structurée en 7 étapes, conçue pour intégrer la visibilité SEO et IA dès la conception de votre site.',
    steps: [
      {
        title: 'Cahier des charges SEO et GEO',
        subtitle: 'Rédaction du cahier des charges technique intégrant les exigences de référencement naturel et de citabilité IA avant le choix du prestataire ou du CMS.',
        items: [
          'Définition des objectifs de visibilité : positions Google cibles et présence dans les réponses IA',
          'Spécifications techniques SEO : structure URL, balises, sitemap, robots.txt',
          'Exigences GEO : balisage schema.org natif, accessibilité aux robots IA, contenus factuels',
          'Critères de sélection CMS basés sur la flexibilité SEO et la compatibilité IA',
        ],
      },
      {
        title: 'Audit GEO : benchmark de citabilité pré-lancement',
        subtitle: 'Analyse de la visibilité IA de votre marque et de vos concurrents avant la mise en ligne, pour calibrer la stratégie de contenu initiale.',
        items: [
          'Test de 20 à 30 requêtes sectorielles sur ChatGPT, Perplexity et Gemini',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, Légitimité, Densité Factuelle',
          'Benchmark contre 3 à 5 concurrents déjà en ligne',
          'Identification des entités et des contenus à créer en priorité pour la citabilité',
        ],
      },
      {
        title: 'Architecture de site et arborescence GEO-native',
        subtitle: 'Construction de l\'arborescence en silos sémantiques, avec une hiérarchie de pages pensée pour Google et les moteurs IA.',
        items: [
          'Arborescence en silos : pages piliers, sous-pages thématiques, maillage interne planifié',
          'Structure URL propre avec slugs sémantiques (pas d\'ID numériques ni de paramètres)',
          'Plan de pagination et gestion des canonical tags dès la conception',
          'Architecture des balises Hn cohérente sur chaque gabarit de page',
        ],
      },
      {
        title: 'Choix du CMS et configuration technique',
        subtitle: 'Sélection du CMS adapté au projet (WordPress, Shopify, Next.js, Webflow) et configuration des paramètres SEO natifs.',
        items: [
          'Audit des capacités SEO natives du CMS retenu : URL rewriting, meta tags, sitemap auto',
          'Configuration du robots.txt avec directives séparées pour Googlebot et les robots IA',
          'Installation et paramétrage des plugins SEO (Yoast, Rank Math ou équivalent)',
          'Mise en place du rendu serveur (SSR/SSG) si framework JavaScript',
        ],
      },
      {
        title: 'Balisage schema.org et données structurées',
        subtitle: 'Intégration du balisage schema.org sur chaque type de page dès le développement, pour alimenter Google et les Knowledge Graphs des LLM.',
        items: [
          'Balisage WebSite et Organization sur la page d\'accueil',
          'Balisage Service, FAQPage et BreadcrumbList sur les pages de services',
          'Balisage Article et Person sur les pages de contenu éditorial',
          'Validation via le Rich Results Test et vérification d\'ingestion par les robots IA',
        ],
      },
      {
        title: 'Stratégie de contenu initiale',
        subtitle: 'Rédaction et intégration des contenus de lancement : pages piliers, FAQ, mentions légales SEO-friendly, et contenus factuels citables par les LLM.',
        items: [
          'Rédaction des pages piliers avec densité factuelle élevée (chiffres, sources, entités nommées)',
          'Création de FAQ structurées par thématique pour le balisage FAQPage',
          'Pages "À propos" et mentions légales enrichies pour le Knowledge Graph',
          'Passages auto-suffisants rédigés pour extraction par les moteurs IA',
        ],
      },
      {
        title: 'Recettage SEO et suivi post-lancement',
        subtitle: 'Vérification technique complète avant mise en ligne, puis suivi des positions Google et de la citabilité IA pendant les 3 premiers mois.',
        items: [
          'Crawl pré-production : vérification des URL, canonical, sitemap, robots.txt, vitesse',
          'Soumission du sitemap à Google Search Console et vérification de l\'indexation',
          'Monitoring des positions Google par page et par mot-clé cible',
          'Suivi du Score GEO : évolution de la citabilité IA sur les requêtes stratégiques',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 4 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en référencement, votre équipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Cahier des charges SEO',
        description: 'Document de spécifications techniques SEO et GEO à intégrer au cahier des charges de développement : structure URL, balises, robots.txt, schema.org, critères CMS.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO pré-lancement',
        description: 'Analyse de la citabilité de votre marque sur ChatGPT, Perplexity et Gemini avant la mise en ligne, avec Score GEO et benchmark concurrentiel.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage WebSite, Organization, Service, FAQPage et BreadcrumbList adapté à votre CMS, avec guide d\'intégration technique et fichiers JSON-LD prêts à déployer.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Rédaction des pages piliers, FAQ et contenus de lancement, avec intégration directe sur votre CMS. Création des gabarits de pages optimisés pour le référencement.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de premiers backlinks depuis des annuaires professionnels, blogs sectoriels et médias spécialisés pour établir l\'autorité du domaine dès le lancement.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions Google par page, du trafic organique, de l\'indexation progressive et de l\'évolution du Score GEO pendant les 3 premiers mois.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilité IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre nouveau site dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande à ChatGPT "comment créer un site optimisé pour le SEO ?", le LLM compile des sources web pour formuler sa réponse. Si votre site n\'existe dans aucune source citée au moment de son lancement, il démarre avec un déficit de citabilité que seul un travail GEO structuré peut combler.',
    llmBehavior:
      '<h4>Requêtes de recommandation d\'agence</h4><p>Sur "quelle agence pour créer un site SEO-friendly ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de critères de sélection (expertise technique, portfolio, méthodologie SEO intégrée) et renvoie vers des annuaires comme Sortlist ou Malt. L\'agence qui publie une méthodologie détaillée de création de site avec intégration SEO et GEO a le potentiel d\'être citée.</p><h4>Requêtes techniques</h4><p>Sur "comment créer un site optimisé pour le SEO dès le départ", le LLM génère un guide en 8 à 12 points couvrant le choix du domaine, la structure URL, les balises Hn, le sitemap et le robots.txt. Il ne mentionne pas la dimension GEO ni la configuration des robots IA. Les contenus qui intègrent cette couche supplémentaire se différencient.</p><h4>Requêtes comparatives CMS</h4><p>Sur "quel CMS choisir pour un bon référencement", le LLM produit un tableau comparatif de 5 à 7 CMS avec WordPress systématiquement en tête pour la flexibilité SEO. Aucun CMS n\'est évalué sur sa compatibilité avec les robots IA ni sur sa capacité à intégrer du schema.org natif sans plugin.</p><h4>Requêtes sur la visibilité IA</h4><p>Sur "comment rendre un nouveau site visible sur les moteurs IA", le LLM recommande le balisage schema.org, les fiches entités (Wikipedia, Wikidata) et la présence sur des sources tierces. Aucune méthodologie structurée ni outil de mesure de citabilité n\'est mentionné.</p>',
    structuredData:
      '<p>Pour un nouveau site, les types schema.org à intégrer dès le développement sont : <code>WebSite</code> (page d\'accueil avec potentialité de sitelinks), <code>Organization</code> (identité de l\'entité), <code>Service</code> (pages de prestations), <code>FAQPage</code> (pages FAQ), <code>BreadcrumbList</code> (navigation). Le balisage <code>WebSite</code> avec <code>SearchAction</code> permet à Google d\'afficher un sitelink search box, et l\'ensemble des types alimente les Knowledge Graphs des LLM dès le premier crawl.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre nouveau site par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus initiaux), la Légitimité et Citabilité (premières mentions presse, backlinks, fiches entités), et la Densité Factuelle (richesse du balisage schema.org et des données structurées intégrées dès le lancement).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour création de site',
    items: [
      {
        question: 'Combien coûte la création d\'un site avec SEO intégré ?',
        answer:
          'Le budget dépend du type de site (vitrine, e-commerce, applicatif) et du volume de contenus initiaux. Chez Rankwell, l\'accompagnement SEO et GEO pour une création de site démarre à 1 500 EUR pour le cahier des charges technique et l\'architecture, auxquels s\'ajoutent 1 000 à 3 000 EUR/mois pour la stratégie de contenu et le suivi post-lancement. Ce budget est distinct du coût de développement du site lui-même.',
      },
      {
        question: 'Combien de temps faut-il pour qu\'un nouveau site soit visible sur Google ?',
        answer:
          'L\'indexation initiale par Google prend 1 à 4 semaines après la soumission du sitemap via Search Console. Les premières positions sur des requêtes de niche apparaissent entre 2 et 4 mois. Les requêtes concurrentielles nécessitent 6 à 12 mois de travail continu. Rankwell accélère le processus en posant une architecture SEO-native et en soumettant le site aux robots IA dès la mise en ligne.',
      },
      {
        question: 'Pourquoi intégrer le SEO dès la conception plutôt qu\'après le lancement ?',
        answer:
          'Un site développé sans stratégie SEO accumule une dette technique : URL non sémantiques, balises Hn incohérentes, absence de canonical tags, contenu dupliqué entre pages de staging et pages de production. Corriger ces fondations après le lancement coûte 2 à 5 fois plus cher et retarde l\'indexation de 3 à 6 mois. Rankwell intègre le référencement dans le cahier des charges de développement pour éviter ce surcoût.',
      },
      {
        question: 'Quel CMS choisir pour un site optimisé SEO et GEO ?',
        answer:
          'Le choix dépend du projet. WordPress convient aux sites vitrine et blogs grâce à ses plugins SEO (Yoast, Rank Math). Shopify et PrestaShop sont adaptés au e-commerce. Next.js et Webflow offrent un contrôle total sur le rendu et le balisage pour les projets sur mesure. Rankwell évalue chaque CMS sur 4 critères : flexibilité SEO, compatibilité robots IA, capacité schema.org native et performance de rendu.',
      },
      {
        question: 'Comment être cité par ChatGPT dès le lancement de mon site ?',
        answer:
          'La citabilité IA repose sur trois piliers : des contenus factuels avec des données vérifiables (chiffres, sources, entités nommées), un balisage schema.org complet (WebSite, Organization, Service), et des mentions de votre marque sur des sources tierces (presse, annuaires professionnels, comparateurs). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les actions prioritaires pour établir la citabilité dès le jour 1.',
      },
      {
        question: 'Quelle différence entre SEO et GEO pour un nouveau site ?',
        answer:
          'Le SEO positionne vos pages dans les résultats de recherche Google. Le GEO (Generative Engine Optimization) fait citer votre marque et vos contenus dans les réponses générées par ChatGPT, Perplexity et Google AI Overviews. Pour un nouveau site, le GEO est un avantage concurrentiel : vos concurrents établis ont un historique SEO, mais la plupart n\'ont aucune stratégie GEO. Rankwell exploite cette fenêtre en construisant la citabilité IA dès la conception.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour la création de mon site ?',
        answer:
          'Rankwell est la seule agence à intégrer le GEO dès la phase de conception du site. Notre méthodologie en 7 étapes couvre le cahier des charges SEO, le benchmark de citabilité IA, l\'architecture GEO-native, le choix du CMS, le balisage schema.org, la stratégie de contenu initiale et le suivi post-lancement. Le Score GEO propriétaire mesure la visibilité de votre site dans les moteurs IA, un indicateur qu\'aucun autre prestataire ne propose à ce stade du projet.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à lancer un site visible dès le jour 1 ?',
    description:
      'Demandez un audit GEO & SEO gratuit pour votre projet de création de site. Nos consultants SEO & GEO analysent votre secteur, vos concurrents et votre stratégie, et vous proposent un cahier des charges technique adapté.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
      ],
      projets: [
        { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
      ],
      glossaire: [
        { label: 'SEO technique', href: '/glossaire/seo-technique' },
        { label: 'Données structurées (Schema.org)', href: '/glossaire/donnees-structurees' },
        { label: 'Robots d\'indexation IA', href: '/glossaire/robots-ia' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises sites web et projets digitaux',
    items: [
      { label: 'Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
      { label: 'E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      { label: 'Migration de site', href: '/agence-geo-seo/projet/migration' },
      { label: 'Application web', href: '/agence-geo-seo/projet/application-web' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
    ],
  },
};

export default data;
