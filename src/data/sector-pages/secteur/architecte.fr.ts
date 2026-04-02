/**
 * DATA : Page Secteur : Architectes (FR)
 * Route : /agence-geo-seo/secteur/architecte
 *
 * Mots-clés Ahrefs (FR, mars 2026), volumes réels
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'architecte',
    title: 'Agence GEO & SEO pour Architectes - Rankwell',
    description:
      'Rankwell accompagne les cabinets d\'architecture dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur architectural.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Architectes' },
    ],
    title: 'GEO & SEO Architecte : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs maîtres d\'ouvrage vous cherchent sur Google et interrogent ChatGPT avant de confier leur projet. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités des cabinets d\'architecture.',
    ctaText: 'Demander un audit GEO & SEO architecte',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les architectes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">65 % des recherches d\'architecte contiennent un nom de ville ou « autour de moi »</strong>. Le recours à un architecte est obligatoire au-delà de 150 m² de surface de plancher : c\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le prospect compare 2-3 cabinets avant de prendre contact.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Profession réglementée par l\'Ordre des architectes</strong> : titre protégé (DPLG/HMONP), code de déontologie encadrant la communication. Pas de témoignages comparatifs ni de promesses de résultats chiffrés. Chaque contenu doit concilier valorisation du portfolio et obligations ordinales.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Architectes-pour-tous.fr, Archidvisor, Houzz, Trouver-mon-architecte.fr</strong> captent les requêtes transactionnelles et concentrent les avis clients. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un cabinet d\'architecture reste noyé dans ces annuaires.',
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
      { keyword: 'architecte d\'intérieur', volume: 25000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'architecte', volume: 22000, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'maison architecte', volume: 3500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'architecte autour de moi', volume: 1400, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'architecte d\'intérieur paris', volume: 1200, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'architecte paris', volume: 700, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'prix architecte', volume: 700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'architecte d\'intérieur lyon', volume: 700, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'architecte bordeaux', volume: 450, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'tarif architecte', volume: 400, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, « architecte d\'intérieur » cumule 25 000 recherches et « architecte » 22 000, soit un bassin massif de particuliers et promoteurs en quête d\'un professionnel. Les requêtes locales (« architecte autour de moi », « architecte paris », « architecte bordeaux ») et les requêtes prix/tarif traduisent une intention de contact immédiate. Si votre cabinet n\'apparaît pas dans les 3 premiers résultats Google ou dans la réponse d\'un moteur IA, ces projets vont à vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les architectes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur architectural et aux exigences de l\'Ordre des architectes.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages projets et du portfolio.',
        items: [
          'Structure des pages par typologie de projet (maison individuelle, rénovation, tertiaire, urbanisme)',
          'Balises schema.org ArchitectureFirm et ProfessionalService',
          'Performance et Core Web Vitals (images HD du portfolio souvent non optimisées)',
          'Crawl et indexation des galeries visuelles',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet d\'architecture',
          'Mesure de la légitimité et citabilité auprès des LLM',
          'Évaluation de la densité factuelle du contenu (surfaces, budgets, matériaux)',
          'Benchmark concurrentiel sur les requêtes IA du secteur architectural',
        ],
      },
      {
        title: 'Étude de marché & mots-clés architecture',
        subtitle: 'Cartographie des requêtes par spécialité architecturale et zone géographique. Identification des niches à faible concurrence (rénovation patrimoine, extension bois, architecture bioclimatique).',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur l\'architecture',
          'Volumes de recherche réels par typologie de projet',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du maître d\'ouvrage, du premier contact à la demande de devis.',
        items: [
          'Page spécialité (maison, rénovation, tertiaire) → page projet → page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec terminologie architecturale',
        ],
      },
      {
        title: 'Stratégie de contenu architecture',
        subtitle: 'Création de contenus valorisant l\'expertise du cabinet (études de cas, guides réglementaires, analyses de projets), rédigés pour être citables par les LLM.',
        items: [
          'Études de cas détaillées avec données chiffrées (surface, budget, délai, matériaux)',
          'Guides pratiques : permis de construire, RE2020, rénovation énergétique',
          'Phrases factuelles auto-suffisantes respectant la déontologie de l\'Ordre',
        ],
      },
      {
        title: 'Autorité & netlinking architectural',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les publications spécialisées du secteur.',
        items: [
          'Architectes-pour-tous.fr, Archidvisor, Houzz, Trouver-mon-architecte.fr',
          'Publications dans la presse spécialisée (AMC, d\'Architectures, Le Moniteur)',
          'Partenariats avec les CAUE et sites institutionnels (Ordre des architectes)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « architecte + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Architect + catégories secondaires (Building Firm, Architectural Designer)',
          'Photos de projets réalisés, plans, chantiers en cours',
          'Gestion des avis clients et stratégie de collecte post-livraison',
          'Citations NAP cohérentes sur les annuaires du secteur architectural',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité architecturale et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialité (construction neuve, rénovation, extension)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et prises de contact',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Un accompagnement d\'experts en référencement GEO & SEO, adapté au secteur de l\'architecture, avec des livrables concrets à chaque étape.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic du site du cabinet, architecture des pages projets et réalisations, vitesse de chargement, indexation du portfolio. Chaque frein technique identifié est accompagné de sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes architecte auprès de ChatGPT, Perplexity et Gemini. Benchmark des confrères locaux et Score GEO sur 100, avec les trois dimensions : Univers Informatif, Légitimité & Citabilité, Densité Factuelle.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage Architect, ProfessionalService, ImageGallery et FAQPage prêt à intégrer. Spécialités couvertes : extension, rénovation, construction neuve, avec zone d\'intervention et données du cabinet.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages projets et réalisations optimisées, articles sur les tendances architecturales et la réglementation RE2020, FAQ sectorielles. Intégration CMS ou FTP avec templates adaptés au site du cabinet.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires architecture (Houzz, Architectes-pour-tous.fr), les blogs design et la presse spécialisée (AMC, Le Moniteur). Suivi du Domain Rating et de l\'évolution du profil de liens.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par type de projet et zone géographique, trafic organique, demandes de contact attribuées au SEO. Score GEO actualisé mesurant la visibilité du cabinet dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un particulier demande à ChatGPT « quel architecte recommandes-tu pour une extension à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de projets.',
    llmBehavior:
      '<h4>Aucun cabinet individuel cité, jamais</h4><p>Sur les 5 requêtes testées (« quel architecte recommandes-tu pour une extension à Lyon ? », « comment choisir un bon architecte ? », « architecte DPLG vs architecte d\'intérieur », « prix architecte construction maison », « architecte autour de moi pour rénovation »), <strong>aucun LLM ne cite de cabinet d\'architecture nommé</strong>. Même sur une requête locale explicite avec ville, le modèle refuse la recommandation nominative et renvoie vers les annuaires.</p><h4>L\'Ordre des architectes, ancre de confiance absolue</h4><p>L\'Ordre des architectes est mentionné dans 100 % des réponses : vérification du titre DPLG/HMONP, annuaire Architectes-pour-tous.fr, cadre déontologique. C\'est la seule institution systématiquement citée. Un cabinet référencé dans les ressources de l\'Ordre (annuaire, prix, publications) bénéficie d\'un avantage structurel de citabilité.</p><h4>Les plateformes captent toute la visibilité</h4><p>Architectes-pour-tous.fr, Archidvisor, Houzz et Trouver-mon-architecte.fr apparaissent dans 4 réponses sur 5 comme intermédiaires de recherche. Les sites de cabinets individuels restent invisibles. Sur « architecte autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong> : seuls les cabinets avec une fiche Google Business Profile complète (catégorie Architect, photos, avis récents) apparaissent dans la réponse IA.</p><h4>Honoraires génériques, opportunité de citabilité</h4><p>Les fourchettes données restent vagues : « 8-15 % du montant des travaux ». Un cabinet publiant des exemples tarifaires détaillés par type de projet (extension 40 m², rénovation 120 m², construction neuve 150 m²) fournirait la source factuelle que les LLM préfèrent extraire.</p>',
    structuredData:
      '<p>Pour les cabinets d\'architecture, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>ArchitectureFirm</code> (sous-type spécifique, non officiel mais reconnu), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>ProfessionalService</code> permet à Google et aux LLM d\'identifier précisément les spécialités du cabinet (construction neuve, rénovation, urbanisme), la zone d\'intervention et les réalisations.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet d\'architecture par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus architecturaux), la Légitimité & Citabilité (signaux de confiance externes : presse, annuaires, Ordre), et la Densité Factuelle (richesse des données structurées et des entités nommées dans le portfolio).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les architectes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'architecte ?',
        answer:
          'Le budget SEO pour un cabinet d\'architecture dépend du nombre de spécialités couvertes (construction neuve, rénovation, urbanisme) et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cabinets d\'architecture démarrent à 1 500 \u20AC/mois pour une spécialité et une agglomération, et peuvent atteindre 4 000-5 000 \u20AC/mois pour un cabinet multi-spécialités couvrant plusieurs régions.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un architecte ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche locale (ex : « architecte extension bois Nantes ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « architecte paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau de maturité SEO du site existant.',
      },
      {
        question: 'Le SEO est-il compatible avec la déontologie de l\'Ordre des architectes ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le code de déontologie de l\'Ordre des architectes. Le référencement naturel repose sur la création de contenu informatif et la structuration technique du site, ce qui est autorisé. Les seules limites concernent la publicité comparative et les promesses de résultats chiffrés non vérifiables. Rankwell connaît ces contraintes et adapte chaque stratégie pour valoriser le portfolio et l\'expertise du cabinet sans contrevenir aux obligations ordinales.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un cabinet d\'architecture ?',
        answer:
          'Un blog est un levier puissant pour les architectes, à condition de publier des contenus à forte valeur ajoutée : études de cas de projets livrés avec données chiffrées (surface, budget, matériaux, délai), guides pratiques sur le permis de construire ou la RE2020, et analyses des tendances architecturales. Rankwell recommande 2-4 publications par mois, ciblant des requêtes informationnelles de longue traîne et rédigées pour être citables par les moteurs IA.',
      },
      {
        question: 'Comment un architecte peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels (Archidvisor, Houzz, Architectes-pour-tous.fr), mentions dans la presse spécialisée (AMC, Le Moniteur), profil Google Business optimisé avec photos de réalisations, et contenus riches et factuels sur son site (études de cas détaillées). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un architecte ?',
        answer:
          'Le SEO local cible les requêtes « architecte + ville » ou « cabinet architecte autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires régionaux. Le SEO national vise des requêtes génériques (« architecte maison contemporaine ») et nécessite du contenu éditorial à forte autorité (études de cas, publications presse). Rankwell combine les deux approches selon la stratégie du cabinet et sa zone d\'intervention.',
      },
      {
        question: 'Les plateformes comme Houzz ou Archidvisor suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme Houzz, Archidvisor ou Architectes-pour-tous.fr sont utiles pour la visibilité initiale et la collecte d\'avis, mais elles créent une dépendance : le cabinet n\'est qu\'un profil parmi des milliers, sans contrôle sur l\'algorithme de classement. Un site propre bien référencé permet de présenter son portfolio en détail, de convertir directement les prospects et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les cabinets à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur de l\'architecture.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Promoteur immobilier', href: '/agence-geo-seo/secteur/promoteur-immobilier' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
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
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Promoteur immobilier', href: '/agence-geo-seo/secteur/promoteur-immobilier' },
      { label: 'Diagnostiqueur immobilier', href: '/agence-geo-seo/secteur/diagnostiqueur' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
