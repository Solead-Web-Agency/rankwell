/**
 * DATA : Page Secteur Couvreurs (FR)
 * Route : /agence-geo-seo/secteur/couvreur
 *
 * Mots-clés Ahrefs (mars 2026), marché FR
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'couvreur',
    title: 'Agence GEO & SEO pour Couvreurs - Rankwell',
    description:
      'Rankwell accompagne les couvreurs et entreprises de couverture dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la toiture.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Couvreurs' },
    ],
    title: 'GEO & SEO Couvreur : visibilité Google & moteurs IA',
    subtitle:
      'Vos prochains clients cherchent un couvreur sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur de la couverture et de la toiture.',
    ctaText: 'Demander un audit GEO & SEO couvreur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les couvreurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Couvreur autour de moi » totalise 11 000 recherches mensuelles</strong>, et chaque grande ville génère entre 1 000 et 3 300 requêtes locales. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où 85 % des recherches incluent une ville ou la géolocalisation, et la décision se joue entre les 3 couvreurs du Local Pack.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La garantie décennale obligatoire et la qualification Qualibat</strong> sont des signaux de confiance que Google attend dans les contenus. Le secteur est touché par les arnaques post-tempête : les moteurs de recherche et les LLM valorisent les artisans affichant certifications, avis vérifiés et ancienneté démontrable.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Habitatpresto, Quotatis, Pages Jaunes, Travaux.com</strong> captent la majorité du trafic transactionnel sur les devis toiture. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un couvreur indépendant reste invisible face à ces plateformes et paie des leads au prix fort.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'couvreur', volume: 20000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'couvreur autour de moi', volume: 11000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'couvreur bordeaux', volume: 3300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'couvreur nantes', volume: 2600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'couvreur zingueur', volume: 2500, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'couvreur toulouse', volume: 2500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'rénovation toiture', volume: 1700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'couvreur paris', volume: 1400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'couvreur toiture', volume: 1400, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'prix toiture m2', volume: 1100, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 20 000 recherches portent sur le terme « couvreur » et 11 000 sur « couvreur autour de moi ». Les requêtes locales (couvreur + ville) représentent des milliers de particuliers en recherche active d\'un artisan. La majorité clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre entreprise n\'y figure pas, ces chantiers vont à vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les couvreurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la couverture et du bâtiment.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation par Google et les robots IA.',
        items: [
          'Structure des pages par type d\'intervention (couverture, zinguerie, étanchéité, isolation)',
          'Balises schema.org RoofingContractor',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise de couverture dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'entreprise',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA du secteur toiture',
        ],
      },
      {
        title: 'Étude de marché & mots-clés couverture',
        subtitle: 'Cartographie des requêtes par type d\'intervention et zone géographique. Identification des combinaisons couvreur + ville à fort potentiel.',
        items: [
          'Combinaisons intervention + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur la toiture',
          'Volumes de recherche réels par spécialité (zinguerie, ardoise, tuile, zinc)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du particulier qui cherche un couvreur.',
        items: [
          'Page spécialité (réfection, réparation, isolation) → page couvreur → page devis',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu couverture',
        subtitle: 'Création de contenus pratiques démontrant l\'expertise de l\'entreprise, rédigés pour être citables par les LLM.',
        items: [
          'Guides de prix au m2 par matériau (tuile, ardoise, zinc, bac acier)',
          'FAQ répondant aux PAA Google (durée de vie, entretien, aides)',
          'Phrases factuelles auto-suffisantes avec données chiffrées sur les matériaux',
        ],
      },
      {
        title: 'Autorité & netlinking bâtiment',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels et les sources sectorielles de la couverture.',
        items: [
          'Inscription CAPEB, FFB, annuaires Qualibat et RGE',
          'Présence sur les plateformes de devis (Habitatpresto, Quotatis)',
          'Partenariats avec des sites spécialisés bâtiment et rénovation',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « couvreur + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Roofing Contractor + catégories secondaires (zingueur, étancheur)',
          'Gestion des avis clients et stratégie de collecte post-chantier',
          'Photos de réalisations avant/après, certifications et qualifications',
          'Citations NAP cohérentes sur les annuaires du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type d\'intervention et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialité couverture',
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
        title: 'Audit technique SEO',
        description: 'Analyse approfondie de l\'architecture de votre site : pages prestations toiture (réfection, réparation, isolation), vitesse de chargement et indexation.',
      },
      {
        id: 2,
        title: 'Audit GEO (visibilité IA)',
        description: 'Mesure de la citabilité de votre entreprise dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100 avec benchmark contre vos concurrents locaux.',
      },
      {
        id: 3,
        title: 'Kit schema.org couvreur',
        description: 'Balisage structuré RoofingContractor, Service et FAQPage, prêt à intégrer. Permet à Google et aux moteurs IA d\'identifier vos interventions et votre zone.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Rédaction de pages réfection, isolation et zinguerie, articles entretien toiture, FAQ matériaux et prix. Livraison au format CMS ou via injection FTP.',
      },
      {
        id: 5,
        title: 'Netlinking bâtiment',
        description: 'Acquisition de liens depuis Qualibat, FFB, blogs habitat et presse spécialisée construction pour renforcer l\'autorité de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel : positions Google par mot-clé et par ville, trafic organique par spécialité couverture, score GEO et demandes de devis générées.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de couverture dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un particulier demande à ChatGPT « quel couvreur recommandes-tu à Toulouse ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de chantiers.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel couvreur recommandes-tu à Toulouse ? » : le LLM ne cite aucun artisan par nom. Il fournit une liste de 5 à 6 critères de sélection (garantie décennale, certification Qualibat, avis Google, ancienneté) et renvoie vers les Pages Jaunes, la CAPEB locale et les plateformes de mise en relation comme Habitatpresto.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon couvreur ? » : le LLM génère un guide structuré en 6 à 7 critères sans citer de source. Vérifier la décennale, demander 3 devis, contrôler les certifications Qualibat et RGE, consulter les avis. Les couvreurs publiant ce type de contenu sur leur site ont le plus de chances d\'être cités en référence.</p><h4>Requêtes tarifaires</h4><p>« Prix réfection toiture au m2 » : le LLM donne des fourchettes par matériau (tuiles 80 à 120 euros/m2, ardoise 100 à 150 euros/m2, zinc 150 à 200 euros/m2). Les sites proposant des grilles tarifaires détaillées et actualisées sont extraits comme source prioritaire.</p><h4>Requêtes locales et Maps</h4><p>Sur « couvreur autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les entreprises de couverture disposant d\'une fiche Google Business Profile complète (catégorie Roofing Contractor, avis récents, photos de chantiers) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les couvreurs, les types schema.org recommandés sont : <code>RoofingContractor</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>RoofingContractor</code> permet à Google et aux LLM d\'identifier précisément le type d\'intervention, la zone desservie et les avis clients de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de couverture par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les couvreurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de couvreur ?',
        answer:
          'Le budget SEO pour un couvreur dépend de la zone géographique ciblée et du nombre de spécialités (couverture, zinguerie, isolation). Chez Rankwell, les accompagnements SEO pour les artisans couvreurs démarrent à 1 200 euros/mois pour une ville et une spécialité, et peuvent atteindre 3 000 à 5 000 euros/mois pour une entreprise de couverture multi-départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO couverture ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« couvreur zingueur + ville moyenne ») sont plus rapides à positionner que les requêtes départementales concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone.',
      },
      {
        question: 'Le SEO peut-il aider un couvreur à se démarquer face aux arnaques post-tempête ?',
        answer:
          'Oui, le SEO permet de mettre en avant les signaux de confiance qui distinguent un artisan sérieux : garantie décennale affichée, certifications Qualibat et RGE visibles, avis clients vérifiés, ancienneté de l\'entreprise. Rankwell structure ces éléments pour que Google et les moteurs IA les identifient et les valorisent dans leurs résultats.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de couvreur ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des particuliers (prix au m2, durée de vie des matériaux, aides à la rénovation), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois ciblant des requêtes de longue traîne.',
      },
      {
        question: 'Comment un couvreur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un couvreur doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels (CAPEB, Qualibat, Pages Jaunes), avis Google réguliers, profil Business optimisé, contenus riches et factuels sur son site (guides de prix, FAQ matériaux). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un couvreur ?',
        answer:
          'Le SEO local cible les requêtes « couvreur + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires du bâtiment. Le SEO national vise des requêtes génériques (« rénovation toiture prix m2 ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon le rayon d\'intervention de l\'artisan.',
      },
      {
        question: 'Les plateformes de devis (Habitatpresto, Quotatis) suffisent-elles pour être visible ?',
        answer:
          'Les plateformes de devis apportent des leads mais créent une dépendance coûteuse : le couvreur paie chaque contact et n\'a aucun contrôle sur son image. Un site propre bien référencé permet de recevoir des demandes de devis directes, de contrôler sa réputation en ligne et de construire une autorité durable. Rankwell aide les couvreurs à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de couverture visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Vitrier', href: '/agence-geo-seo/secteur/vitrier' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'RoofingContractor',
};

export default data;
