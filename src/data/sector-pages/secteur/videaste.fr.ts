/**
 * DATA : Page Secteur Vidéastes (FR)
 * Route : /agence-geo-seo/secteur/videaste
 *
 * Contenu 100 % sectoriel, mots-clés Ahrefs (mars 2026)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'videaste',
    title: 'Agence GEO & SEO pour Vidéastes - Rankwell',
    description:
      'Rankwell accompagne les vidéastes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la production vidéo.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Vidéastes' },
    ],
    title: 'GEO & SEO Vidéaste : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un vidéaste sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au marché visuel et local de la vidéo.',
    ctaText: 'Demander un audit GEO & SEO vidéaste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les vidéastes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Plus de 60 % des requêtes vidéaste contiennent une ville ou une spécialité</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue sur le showreel visible dans les résultats YouTube et Google, ou sur la recommandation d\'un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La vidéo seule ne suffit pas au référencement</strong>. Google ne lit pas le contenu d\'une vidéo hébergée sur Vimeo ou YouTube sans texte contextuel. Un portfolio de 50 films sans pages optimisées (title, description, transcription) reste invisible. Chaque spécialité (mariage, corporate, événementiel) nécessite sa propre stratégie sémantique.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Mariages.net, Zankyou, Instagram, YouTube et les plateformes freelance (Malt, Fiverr)</strong> captent l\'essentiel du trafic. Instagram détourne les prospects vers un écosystème fermé, sans lien vers le site du vidéaste. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un vidéaste reste noyé parmi les profils des plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (Citabilité)
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilité',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'vidéaste', volume: 2100, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'vidéaste mariage', volume: 450, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'production vidéo', volume: 350, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'vidéaste lyon', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vidéaste bordeaux', volume: 200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vidéaste nantes', volume: 200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vidéaste paris', volume: 150, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vidéaste mariage lyon', volume: 150, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vidéaste entreprise', volume: 100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'vidéaste mariage tarif', volume: 100, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches locales comme « vidéaste mariage Lyon » ou « vidéaste paris » représentent autant de clients potentiels pour votre activité. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre site n\'y figure pas, ces clients contactent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les vidéastes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la production vidéo.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages portfolio.',
        items: [
          'Structure des pages par spécialité (mariage, corporate, événementiel)',
          'Balises schema.org VideoObject et ProfessionalService',
          'Performance et Core Web Vitals (impact des vidéos embarquées)',
          'Crawl et indexation des pages portfolio',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du vidéaste dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du vidéaste',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés vidéo',
        subtitle: 'Cartographie des requêtes par spécialité et zone géographique. Identification des combinaisons à fort potentiel avec faible concurrence.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par spécialité (mariage, corporate, drone)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours utilisateur : du showreel vers la page de contact.',
        items: [
          'Page spécialité, page projet, page tarifs, page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn et des descriptions vidéo',
        ],
      },
      {
        title: 'Stratégie de contenu vidéo & éditorial',
        subtitle: 'Création de contenus textuels qui accompagnent les vidéos : descriptions optimisées, articles de blog, guides tarifaires citables par les LLM.',
        items: [
          'Pages de réalisation avec texte contextuel et transcription',
          'Guides pratiques : « comment choisir un vidéaste mariage »',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
        ],
      },
      {
        title: 'Autorité & netlinking créatif',
        subtitle: 'Développement de l\'autorité via les annuaires de mariage, les blogs spécialisés et les publications dans la presse locale.',
        items: [
          'Mariages.net, Zankyou, La Mariée aux Pieds Nus',
          'Publications dans la presse locale et les blogs mariage/événementiel',
          'Profils Malt, LinkedIn et plateformes créatives',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « vidéaste + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Videographer + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte après chaque prestation',
          'Photos de tournage, extraits vidéo, posts réguliers',
          'Citations NAP cohérentes sur les annuaires créatifs et de mariage',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialité',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic complet de votre site : architecture des pages portfolio et prestations vid\u00e9o, vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre activit\u00e9 de vid\u00e9aste dans ChatGPT, Perplexity et Gemini sur vos requ\u00eates cibles. Benchmark contre 3 \u00e0 5 vid\u00e9astes concurrents et Score GEO sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage ProfessionalService, VideoObject et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec les types de production couverts (mariage, corporate, \u00e9v\u00e9nementiel). Livr\u00e9 avec un guide d\'int\u00e9gration pour votre CMS (WordPress, Squarespace ou autre).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages par prestation (mariage, corporate, \u00e9v\u00e9nementiel), articles sur les tendances vid\u00e9o, FAQ. Int\u00e9gration directe sur votre CMS ou par FTP, avec cr\u00e9ation de templates de pages si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires vid\u00e9o et mariage (Mariages.net, Zankyou), Vimeo, blogs production vid\u00e9o et presse locale. Suivi des liens obtenus et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par sp\u00e9cialit\u00e9 et par ville, trafic organique, demandes de devis g\u00e9n\u00e9r\u00e9es, \u00e9volution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité de vidéaste dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel vidéaste mariage recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre site n\'apparaît dans aucune source citée, vous êtes invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel vidéaste mariage recommandes-tu à Paris ? » : le LLM ne cite aucun vidéaste par nom. Il fournit une liste de 5 à 7 critères de sélection (style cinématographique, expérience, qualité du showreel, avis Google) et renvoie vers Mariages.net, Zankyou et Instagram. Le vidéaste qui publie ces critères sous forme de guide structuré sur son propre site peut être cité en référence.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon vidéaste ? » : le LLM génère un guide structuré en 6 à 8 points (portfolio, style, matériel, devis, délais de livraison) sans citer de source externe. Les sites qui proposent ce type de contenu éditorial avec des données concrètes (durée moyenne d\'un film, matériel utilisé) ont plus de chances d\'être extraits comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix vidéaste mariage » : le LLM donne des fourchettes chiffrées par gamme. Formule basique (cérémonie + cocktail, 4 à 6 heures) : 800 à 1 500 euros. Formule complète (journée entière, clip cinématographique) : 1 500 à 3 500 euros. Les sites proposant des grilles tarifaires détaillées et actualisées sont les plus citables.</p><h4>Requêtes locales et Maps</h4><p>Sur « vidéaste autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les vidéastes disposant d\'une fiche Google Business Profile complète (catégorie Videographer, avis récents, portfolio lié, photos de tournage) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les vidéastes, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>VideoObject</code> (pour chaque réalisation), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>VideoObject</code> permet à Google et aux LLM d\'identifier précisément le sujet, la durée et la description de chaque vidéo publiée sur le site.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité de vidéaste par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les vidéastes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de vidéaste ?',
        answer:
          'Le budget SEO pour un vidéaste dépend de la zone géographique ciblée et du nombre de spécialités (mariage, corporate, événementiel). Chez Rankwell, les accompagnements SEO pour les vidéastes démarrent à 800 euros/mois pour une spécialité et une ville, et peuvent atteindre 2 500 à 4 000 euros/mois pour un vidéaste multi-spécialités couvrant plusieurs grandes villes.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO vidéaste ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « vidéaste mariage Nantes ») sont plus rapides à positionner que les requêtes nationales très génériques. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone et de votre spécialité.',
      },
      {
        question: 'Mes vidéos YouTube suffisent-elles pour mon référencement Google ?',
        answer:
          'YouTube est un levier puissant, mais il ne remplace pas un site web optimisé. Les vidéos YouTube sont référencées sur YouTube et Google Vidéos, pas dans les résultats web classiques. Un site propre permet de combiner le contenu vidéo avec du texte optimisé (descriptions, transcriptions, guides), ce qui multiplie les points d\'entrée sur Google. Rankwell intègre la stratégie YouTube dans une approche SEO globale, en reliant chaque vidéo à une page optimisée sur votre site.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un vidéaste ?',
        answer:
          'Un blog est un levier efficace s\'il cible les bonnes requêtes. Les articles doivent répondre à des questions réelles (« comment choisir un vidéaste mariage », « prix vidéaste entreprise ») et démontrer une expertise vérifiable. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne liées à vos spécialités.',
      },
      {
        question: 'Comment un vidéaste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un vidéaste doit accumuler des signaux de notoriété sur le web : présence sur les annuaires de mariage et plateformes créatives, mentions dans la presse locale, profil Google Business optimisé, contenus riches et factuels sur son site (grilles tarifaires, guides). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un vidéaste ?',
        answer:
          'Le SEO local cible les requêtes « vidéaste + spécialité + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur vidéaste mariage France ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la zone d\'intervention et la stratégie du vidéaste.',
      },
      {
        question: 'Les plateformes comme Mariages.net et Malt suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme Mariages.net ou Malt sont utiles pour la visibilité initiale, mais elles créent une dépendance : le vidéaste n\'est qu\'un profil parmi des centaines, soumis à l\'algorithme et aux conditions de la plateforme. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les vidéastes à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité de vidéaste visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
      { label: 'Traducteur', href: '/agence-geo-seo/secteur/traducteur' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
