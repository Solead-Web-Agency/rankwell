/**
 * DATA : Page Secteur Experts-comptables (FR)
 * Route : /agence-geo-seo/secteur/expert-comptable
 *
 * Contenu adapte au secteur de l'expertise comptable :
 * marche local + en ligne, YMYL financier, plateformes Pennylane/Dougs/Indy
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'expert-comptable',
    title: 'Agence GEO & SEO pour Experts-comptables - Rankwell',
    description:
      'Rankwell accompagne les cabinets d\'expertise comptable dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur comptable.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Experts-comptables' },
    ],
    title: 'GEO & SEO Expert-comptable : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients comparent les cabinets sur Google et interrogent ChatGPT avant de choisir leur expert-comptable. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur comptable.',
    ctaText: 'Demander un audit GEO & SEO expert-comptable',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les experts-comptables',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">56 % des requêtes comptables contiennent un nom de ville ou « autour de moi »</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> hybride : les dirigeants veulent un interlocuteur de proximité, mais comparent aussi les offres 100 % en ligne comme Pennylane ou Dougs.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL financier par Google</strong> : les contenus comptables et fiscaux exigent une démonstration E-E-A-T maximale. Chaque page doit prouver l\'inscription à l\'Ordre des experts-comptables, citer des sources réglementaires et éviter toute promesse d\'optimisation fiscale agressive.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Pennylane, Dougs, Indy, Keobiz et L\'Expert-Comptable.com</strong> captent une part croissante des requêtes transactionnelles grâce à des budgets SEO importants et des contenus éducatifs massifs. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un cabinet traditionnel est relégué en page 2.',
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
      { keyword: 'expert comptable', volume: 23000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'cabinet comptable', volume: 4000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'expert comptable en ligne', volume: 2100, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'cabinet d\'expertise comptable', volume: 1700, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'expert comptable paris', volume: 1300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'expert comptable autour de moi', volume: 1300, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'expert comptable lyon', volume: 1100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'cabinet comptable autour de moi', volume: 900, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'expert comptable nantes', volume: 800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'expert comptable bordeaux', volume: 700, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de dirigeants et créateurs d\'entreprise cherchent un expert-comptable sur Google. Les requêtes locales comme « expert comptable autour de moi » ou « expert comptable Lyon » représentent autant de mandats potentiels. La majorité contacte les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces clients signent chez un concurrent ou sur une plateforme en ligne.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les experts-comptables',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de l\'expertise comptable.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages de services comptables.',
        items: [
          'Structure des pages par type de prestation (tenue comptable, social, fiscalité, création)',
          'Balises schema.org AccountingService',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages sectorielles',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA comptables',
        ],
      },
      {
        title: 'Étude de marché & mots-clés comptables',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à faible concurrence.',
        items: [
          'Combinaisons prestation + ville (« expert comptable LMNP Lyon »)',
          'Analyse des requêtes posées aux moteurs IA sur la comptabilité',
          'Volumes de recherche réels par spécialité comptable',
          'Requêtes comparatives « expert comptable en ligne vs cabinet »',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du dirigeant qui cherche un expert-comptable.',
        items: [
          'Page prestation → page secteur client → page contact/devis',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
          'Pages dédiées par forme juridique (SAS, SARL, auto-entrepreneur)',
        ],
      },
      {
        title: 'Stratégie de contenu comptable',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du cabinet, rédigés pour être citables par les LLM et conformes à la déontologie de la profession.',
        items: [
          'Guides pratiques répondant aux PAA Google (« comment choisir un expert-comptable »)',
          'Phrases factuelles auto-suffisantes avec données chiffrées et références réglementaires',
          'Articles sur les obligations comptables par statut juridique',
          'Respect du Code de déontologie des experts-comptables',
        ],
      },
      {
        title: 'Autorité & netlinking comptable',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les publications spécialisées du secteur.',
        items: [
          'Annuaire de l\'Ordre des experts-comptables, Experts-Comptables.fr',
          'Publications dans la presse économique et comptable (Les Echos, Compta Online)',
          'Partenariats avec les CCI et réseaux professionnels',
          'Backlinks depuis les sites institutionnels (URSSAF, impots.gouv.fr)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « expert comptable + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Accounting firm + catégories secondaires par prestation',
          'Gestion des avis clients et stratégie de collecte ciblée (dirigeants, créateurs)',
          'Photos du cabinet, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires comptables et économiques',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé comptable',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et prises de rendez-vous',
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
        description: 'Diagnostic site du cabinet, pages services (bilan, fiscal, social), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates comptables, benchmark confr\u00e8res, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage AccountingService, ProfessionalService, FAQPage avec domaines de comp\u00e9tence.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages services, articles fiscalit\u00e9/social, FAQ entrepreneurs, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires comptables (Ordre des experts-comptables), blogs gestion, presse PME, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par service, trafic organique, demandes de contact attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un dirigeant demande à ChatGPT « quel expert-comptable recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de mandats.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel expert-comptable recommandes-tu à Lyon ? » : le LLM ne cite aucun cabinet local précis. Il fournit une liste de 6 à 8 critères de sélection (inscription à l\'Ordre, spécialisation sectorielle, outils numériques, avis clients) et renvoie vers l\'annuaire de l\'Ordre ou Google Maps. Seules les plateformes nationales (Pennylane, Dougs, Indy) sont nommées car elles disposent d\'une forte empreinte web.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon expert-comptable ? » : le LLM génère un guide structuré en 6 à 8 critères sans citer de cabinet ni de source externe. Le cabinet qui publie ce type de contenu structuré sur son site, avec des données réglementaires vérifiables, peut être cité en référence.</p><h4>Requêtes tarifaires</h4><p>« Prix expert-comptable pour une SAS » : le LLM donne des fourchettes précises (150 à 300 euros/mois pour une SAS simple, 300 à 700 euros/mois avec salariés). Les sites proposant des grilles tarifaires détaillées et actualisées par forme juridique ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « expert comptable autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie Accounting firm, avis récents, spécialisations visibles) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets d\'expertise comptable, les types schema.org recommandés sont : <code>AccountingService</code> (type principal), <code>ProfessionalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>AccountingService</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées, la localisation et les certifications du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus comptables), la Légitimité & Citabilité (signaux de confiance externes, inscription à l\'Ordre), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les experts-comptables',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'expert-comptable ?',
        answer:
          'Le budget SEO pour un cabinet d\'expertise comptable dépend du nombre de prestations à promouvoir et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cabinets comptables démarrent à 1 500 euros/mois pour une ville et une spécialité, et peuvent atteindre 4 000 à 6 000 euros/mois pour un cabinet multi-sites en Île-de-France.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO comptable ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « expert comptable LMNP Nantes ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « expert comptable en ligne ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Le SEO est-il compatible avec la déontologie des experts-comptables ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de déontologie des experts-comptables, à condition de respecter certaines règles : pas de publicité comparative, transparence sur les honoraires, interdiction de démarchage abusif, respect du secret professionnel dans les études de cas. Rankwell connaît ces contraintes fixées par l\'Ordre et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un cabinet comptable ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des dirigeants (« quelle différence entre expert-comptable et comptable », « obligations comptables SAS »), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un expert-comptable peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet doit accumuler des signaux de notoriété sur le web : présence sur l\'annuaire de l\'Ordre, mentions dans la presse économique, profil Google Business optimisé, contenus riches et factuels sur son site avec des données réglementaires sourcées. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un expert-comptable ?',
        answer:
          'Le SEO local cible les requêtes « expert comptable + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales (CCI, annuaires économiques). Le SEO national vise des requêtes génériques comme « expert comptable en ligne » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie de développement du cabinet.',
      },
      {
        question: 'Les plateformes en ligne comme Pennylane ou Dougs suffisent-elles à rendre un cabinet visible ?',
        answer:
          'Les plateformes en ligne captent les requêtes transactionnelles grâce à des investissements SEO massifs, mais elles ne remplacent pas la visibilité propre d\'un cabinet. Un site bien référencé permet de contrôler son image, de cibler sa clientèle locale et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les cabinets à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
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
        { label: 'E-E-A-T', href: '/glossaire/eeat' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
    ],
  },

  // Schema.org type principal
  schemaType: 'AccountingService',
};

export default data;
