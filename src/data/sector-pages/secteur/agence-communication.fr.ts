/**
 * DATA : Page Secteur Agences de communication (FR)
 * Route : /agence-geo-seo/secteur/agence-communication
 *
 * Mots-clés Ahrefs (country FR) - mars 2026
 * Rapport de test LLM : rapport-test-agence-communication.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'agence-communication',
    title: 'Agence GEO & SEO pour Agences de communication - Rankwell',
    description:
      'Rankwell accompagne les agences de communication dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la communication.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Agences de communication' },
    ],
    title: 'GEO & SEO Agence de communication : visibilité Google & moteurs IA',
    subtitle:
      'Vos prospects cherchent une agence de communication sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du marché de la communication.',
    ctaText: 'Demander un audit GEO & SEO agence de communication',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les agences de communication',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">63 % des requêtes agences de communication contiennent un nom de ville</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 à 5 agences visibles dans le Local Pack Google ou recommandées par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Plus de 15 000 agences de communication en France</strong> (AACC, Syntec Conseil). Les requêtes génériques (5 700 recherches/mois) sont dominées par les annuaires et comparateurs. Sans spécialisation sectorielle ou géographique claire, une agence reste noyée dans la masse.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Sortlist, Clutch, Trustfolio, Communication&Entreprises</strong> captent le trafic transactionnel et concentrent avis clients et classements. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une agence dépend entièrement de ces intermédiaires pour sa visibilité.',
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
      { keyword: 'agence de communication', volume: 5700, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'agence de communication paris', volume: 1600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'agence de communication lyon', volume: 1000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'agence de communication digitale', volume: 900, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'agence de communication bordeaux', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'agence de communication toulouse', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'agence de communication visuelle', volume: 400, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'agence de communication lille', volume: 450, intent: 'locale', difficulty: 'faible' },
      { keyword: 'agence de communication nantes', volume: 450, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'agence de communication 360', volume: 300, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 12 000 recherches locales comme \u00AB agence de communication Paris \u00BB ou \u00AB agence de communication Lyon \u00BB représentent autant de prospects en phase de sélection. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre agence n\'y figure pas, ces contrats vont à vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les agences de communication',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la communication.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages portfolio et réalisations.',
        items: [
          'Structure des pages par type de prestation (branding, digital, événementiel, RP)',
          'Balises schema.org ProfessionalService',
          'Performance et Core Web Vitals sur les pages riches en visuels',
          'Crawl et indexation des études de cas et réalisations clients',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'agence dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'agence',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA du secteur communication',
        ],
      },
      {
        title: 'Étude de marché & mots-clés communication',
        subtitle: 'Cartographie des requêtes par spécialité (digitale, visuelle, événementielle, 360) et zone géographique. Identification des créneaux à faible concurrence.',
        items: [
          'Combinaisons spécialité + ville à fort potentiel',
          'Analyse des requêtes posées aux moteurs IA sur le choix d\'une agence',
          'Volumes de recherche réels par type de prestation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du prospect : de la découverte à la prise de contact.',
        items: [
          'Page spécialité \u2192 étude de cas \u2192 page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu communication',
        subtitle: 'Création de contenus démontrant l\'expertise de l\'agence sur ses domaines de spécialisation, rédigés pour être citables par les LLM.',
        items: [
          'Études de cas chiffrées avec résultats mesurables (ROI, visibilité, engagement)',
          'Articles de fond sur les tendances de la communication',
          'Guides pratiques répondant aux PAA Google (\u00AB comment choisir une agence de com \u00BB)',
        ],
      },
      {
        title: 'Autorité & netlinking communication',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les publications sectorielles.',
        items: [
          'Sortlist, Clutch, Trustfolio, Communication&Entreprises',
          'Publications dans la presse professionnelle (Stratégies, CB News, INfluencia)',
          'Partenariats avec les syndicats professionnels (AACC, Syntec Conseil)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales \u00AB agence de communication + ville \u00BB et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Agence de communication + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte',
          'Photos de réalisations, bureau, équipe et posts réguliers',
          'Citations NAP cohérentes sur les annuaires professionnels',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par page de spécialité',
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
        description: 'Diagnostic complet du site de votre agence : architecture des pages services et r\u00e9alisations, vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre agence dans ChatGPT, Perplexity et Gemini sur vos requ\u00eates communication cibles. Benchmark contre 3 \u00e0 5 agences concurrentes et Score GEO sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage ProfessionalService, MarketingAgency et FAQPage pr\u00eat \u00e0 int\u00e9grer, adapt\u00e9 aux sp\u00e9cialit\u00e9s de votre agence. Livr\u00e9 avec un guide d\'int\u00e9gration pour votre CMS (WordPress, Webflow ou autre).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages services, cas clients et portfolio, articles communication et marketing, FAQ. Int\u00e9gration directe sur votre CMS ou par FTP, avec cr\u00e9ation de templates de pages si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis Sortlist, Trustfolio, blogs marketing et presse sp\u00e9cialis\u00e9e. Suivi des liens obtenus et progression du Domain Rating de votre agence.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page de service et par mot-cl\u00e9 local, trafic organique par sp\u00e9cialit\u00e9, \u00e9volution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre agence dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un dirigeant demande à ChatGPT \u00AB quelle agence de communication recommandes-tu à Lyon ? \u00BB, le LLM compile des informations provenant du web pour formuler sa réponse. Si votre agence n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de clients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>\u00AB Quelle agence de communication recommandes-tu à Lyon ? \u00BB : le LLM ne cite pas d\'agences nommées. Il fournit une liste de 5 à 7 critères de sélection (spécialisation sectorielle, portfolio, avis clients, transparence tarifaire) et renvoie vers les annuaires Sortlist, Clutch et Google Maps. Les agences disposant d\'avis nombreux et d\'un portfolio détaillé en ligne seraient les mieux positionnées pour être citées.</p><h4>Requêtes d\'information</h4><p>\u00AB Comment choisir une bonne agence de communication ? \u00BB : le LLM génère un guide structuré en 6 à 8 critères sans citer de source externe. Les sites publiant ce type de contenu avec des données chiffrées sur les tarifs moyens et des cas concrets ont le meilleur potentiel de citation.</p><h4>Requêtes tarifaires</h4><p>\u00AB Prix prestation agence de communication \u00BB : le LLM donne des fourchettes par type de prestation (identité visuelle : 2 000 à 15 000 euros, community management : 500 à 3 000 euros/mois, stratégie globale : 1 500 à 10 000 euros/mois). Les sites proposant des grilles tarifaires détaillées et actualisées sont les candidats prioritaires à l\'extraction.</p><h4>Requêtes locales et Maps</h4><p>Sur \u00AB agence de communication autour de moi \u00BB, <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les agences disposant d\'une fiche Google Business Profile complète (catégorie \u00AB Agence de communication \u00BB, avis récents, photos de réalisations) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les agences de communication, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>MarketingAgency</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>ProfessionalService</code> permet à Google et aux LLM d\'identifier précisément les spécialités de l\'agence, sa localisation et les avis clients.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre agence par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les agences de communication',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'agence de communication ?',
        answer:
          'Le budget SEO pour une agence de communication dépend du nombre de spécialités à positionner et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les agences de communication démarrent à 1 500 \u20AC/mois pour une spécialité et une ville, et peuvent atteindre 4 000 à 7 000 \u20AC/mois pour une agence multi-spécialités en Île-de-France ou sur plusieurs métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour une agence de communication ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : \u00AB agence de communication événementielle Nantes \u00BB) sont plus rapides à positionner que les requêtes nationales très concurrentielles (\u00AB agence de communication digitale \u00BB, difficulté 53/100 sur Ahrefs). Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Une agence de communication a-t-elle besoin de SEO alors qu\'elle maîtrise le marketing digital ?',
        answer:
          'La communication et le référencement sont deux expertises distinctes. Une agence de communication excelle en création, en stratégie de marque et en pilotage de campagnes, mais le SEO technique (architecture, crawl, Core Web Vitals) et le GEO (optimisation pour les moteurs IA) requièrent des compétences spécifiques. Chez Rankwell, 40 % des agences accompagnées reconnaissent que leur propre site est leur pire vitrine en matière de référencement.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une agence de communication ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des prospects (\u00AB comment choisir une agence de communication \u00BB, \u00AB différence entre agence de com et agence de pub \u00BB), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment une agence de communication peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une agence doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels (Sortlist, Clutch, AACC), mentions dans la presse sectorielle (Stratégies, CB News), profil Google Business optimisé, études de cas chiffrées sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une agence de communication ?',
        answer:
          'Le SEO local cible les requêtes \u00AB agence de communication + ville \u00BB et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (\u00AB meilleure agence de communication digitale \u00BB) et nécessite du contenu éditorial à forte autorité. Rankwell combine les deux approches selon le périmètre géographique de l\'agence et ses objectifs de développement.',
      },
      {
        question: 'Sortlist et les classements d\'agences suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Sortlist ou Clutch sont utiles pour la visibilité initiale, mais elles créent une dépendance : l\'agence n\'est qu\'un profil parmi des centaines, et chaque lead est facturé. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les agences de communication à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre agence visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
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
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
