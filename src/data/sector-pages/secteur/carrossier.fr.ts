/**
 * DATA : Page Secteur Carrossiers (FR)
 * Route : /agence-geo-seo/secteur/carrossier
 *
 * Mots-clés Ahrefs, mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'carrossier',
    title: 'Agence GEO & SEO pour Carrossiers - Rankwell',
    description:
      'Rankwell accompagne les carrossiers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la carrosserie automobile.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Carrossiers' },
    ],
    title: 'GEO & SEO Carrossier : visibilité Google & moteurs IA',
    subtitle:
      'Votre atelier de carrosserie doit apparaître quand un automobiliste cherche une réparation, un débosselage ou une remise en peinture à proximité. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur de la carrosserie.',
    ctaText: 'Demander un audit GEO & SEO carrossier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les carrossiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Carrosserie autour de moi » génère 9 600 recherches mensuelles</strong>, et la quasi-totalité des requêtes contiennent une intention locale. L\'automobiliste accidenté a besoin d\'une réponse immédiate, souvent depuis son mobile sur le lieu du sinistre. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité dans le Local Pack détermine le choix du réparateur.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le système des agréments assurance structure le marché</strong> : les compagnies orientent les assurés vers leurs réseaux (AD Carrosserie, AXIAL, CRF). Les automobilistes ignorent souvent leur droit au libre choix du réparateur (article L211-5-1 du Code des assurances). Un carrossier indépendant doit se rendre visible en ligne pour capter les clients qui comparent.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vroomly, iDGarages, Allogarage et les réseaux agréés (AD, AXIAL, CRF)</strong> captent les requêtes transactionnelles avec devis en ligne et comparaison de prix, tandis que Pages Jaunes et Google Maps dominent les recherches locales. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur automobile, un carrossier indépendant est invisible.',
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
      { keyword: 'carrosserie autour de moi', volume: 9600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'carrossier', volume: 5700, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'carrossier autour de moi', volume: 2400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'carrossier pas cher autour de moi', volume: 600, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'réparation carrosserie', volume: 600, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'débosselage carrosserie', volume: 500, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'réparer carrosserie enfoncée prix', volume: 450, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'devis carrosserie', volume: 700, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'carrossier toulouse', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'carrossier marseille', volume: 200, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, près de 10 000 automobilistes cherchent une carrosserie à proximité et des milliers d\'autres comparent les prix de réparation ou de débosselage. La majorité contacte l\'un des 3 premiers résultats du Local Pack Google, ou suit la recommandation d\'un moteur IA. Si votre atelier de carrosserie n\'y figure pas, ces clients vont chez un concurrent ou suivent l\'orientation de leur assureur.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les carrossiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la carrosserie automobile.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation de votre atelier de carrosserie.',
        items: [
          'Structure des pages par type de prestation (débosselage, peinture, redressage de châssis)',
          'Balises schema.org AutoBodyShop',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre carrosserie dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'atelier',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA liées à la carrosserie',
        ],
      },
      {
        title: 'Étude de marché & mots-clés carrosserie',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à fort potentiel non couvertes par la concurrence.',
        items: [
          'Combinaisons prestation + ville à faible concurrence (« débosselage sans peinture nantes »)',
          'Analyse des requêtes posées aux moteurs IA sur la carrosserie',
          'Volumes de recherche réels par type de réparation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de l\'automobiliste accidenté ou en besoin de réparation.',
        items: [
          'Page prestation (débosselage, peinture, réparation pare-chocs) vers page devis vers page contact',
          'Requête principale + 3-5 requêtes secondaires par page de prestation',
          'Optimisation des balises title, meta, Hn avec le vocabulaire de la carrosserie',
        ],
      },
      {
        title: 'Stratégie de contenu carrosserie',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise de l\'atelier, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : « comment remplir un constat amiable », « débosselage sans peinture vs classique »',
          'Grilles tarifaires détaillées par type de dommage et de prestation',
          'FAQ sur le libre choix du réparateur et les droits face à l\'assureur',
        ],
      },
      {
        title: 'Autorité & netlinking carrosserie',
        subtitle: 'Développement de l\'autorité via les annuaires automobiles qualifiés et les fédérations professionnelles.',
        items: [
          'Vroomly, iDGarages, Allogarage, Pages Jaunes',
          'Inscription aux fédérations (FFC, CNPA, FNA)',
          'Mentions dans la presse locale et les guides automobiles régionaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'atelier pour capter les requêtes locales « carrossier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale « Carrosserie automobile » + catégories secondaires (peinture auto, débosselage)',
          'Photos de l\'atelier, des cabines de peinture et des réalisations avant/après',
          'Gestion des avis clients avec stratégie de collecte post-restitution du véhicule',
          'Citations NAP cohérentes sur les annuaires automobiles et locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé carrosserie',
          'Trafic organique par type de prestation',
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
        description: 'Diagnostic complet de votre site : pages prestations de r\u00e9paration carrosserie, vitesse de chargement, indexation locale et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates carrossier aupr\u00e8s des moteurs IA, benchmark de vos concurrents locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage AutoBodyShop, AutomotiveBusiness et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos types de r\u00e9parations et vos zones d\'intervention.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages d\u00e9bosselage, peinture et pare-brise, articles sinistre et assurance, FAQ, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis Vroomly, iDGarages, annuaires auto et presse locale. Suivi du Domain Rating et de la progression.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation et par zone, trafic organique, demandes de devis attribu\u00e9es au SEO, \u00e9volution du Score GEO et recommandations pour la p\u00e9riode suivante.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre carrosserie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un automobiliste demande à ChatGPT « quel carrossier recommandes-tu à Marseille ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre atelier n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel carrossier recommandes-tu à Marseille ? » : le LLM ne cite aucun atelier par son nom. Il fournit 5 à 7 critères de sélection (agréments assurance, avis Google, certifications constructeur, proximité, garantie sur les travaux) et renvoie vers Google Maps, les Pages Jaunes et les comparateurs type Vroomly ou iDGarages. Sur ChatGPT, le mode Search avec carte Maps est activé pour afficher les fiches GBP les mieux notées.</p><h4>Requêtes d\'information et de comparaison</h4><p>« Carrossier agréé assurance vs carrossier indépendant ? » : le LLM produit un comparatif structuré. Il mentionne la prise en charge directe pour l\'agréé, le libre choix des pièces pour l\'indépendant, et cite l\'article L211-5-1 du Code des assurances sur le libre choix du réparateur. Aucun nom de professionnel cité, mais les carrosseries publiant ce type de contenu juridique et factuel sur leur site ont une opportunité de citation.</p><h4>Requêtes tarifaires</h4><p>« Prix débosselage carrosserie » : le LLM donne des fourchettes chiffrées par technique : débosselage sans peinture (PDR) entre 80 et 250 euros par bosse, débosselage classique avec reprise de peinture entre 200 et 600 euros. Les sites proposant des grilles tarifaires détaillées par type de dommage sont les sources les plus susceptibles d\'être extraites.</p><h4>Requêtes locales et Maps</h4><p>Sur « carrossier autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les carrosseries disposant d\'une fiche Google Business Profile complète (catégorie « Carrosserie automobile », note supérieure à 4 étoiles, photos de l\'atelier et des réalisations avant/après) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les ateliers de carrosserie, les types schema.org recommandés sont : <code>AutoBodyShop</code> (type principal), <code>AutomotiveBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>AutoBodyShop</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées (débosselage, peinture, redressage), la localisation et les avis clients de l\'atelier.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre carrosserie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les prestations de carrosserie), la Légitimité & Citabilité (signaux de confiance externes, avis, inscriptions fédérations), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les carrossiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de carrossier ?',
        answer:
          'Le budget SEO pour une carrosserie dépend de la zone de chalandise et du nombre de prestations à référencer (débosselage, peinture complète, redressage de châssis, lustrage). Chez Rankwell, les accompagnements SEO pour les carrossiers démarrent à 1 200 euros par mois pour une ville et montent à 3 000-4 500 euros par mois pour un atelier multi-sites ou couvrant une métropole entière.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO carrosserie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« débosselage sans peinture nantes », « carrossier agréé axa toulouse ») se positionnent plus rapidement que les requêtes génériques très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone de chalandise.',
      },
      {
        question: 'Le SEO permet-il de toucher les clients orientés par leur assurance ?',
        answer:
          'Oui, et c\'est un enjeu central pour les carrossiers indépendants. De nombreux automobilistes ignorent leur droit au libre choix du réparateur garanti par l\'article L211-5-1 du Code des assurances. Un contenu SEO bien construit qui informe sur ce droit (FAQ, guides pratiques) capte ces recherches informationnelles et redirige les assurés vers votre atelier plutôt que vers le réseau agréé. Rankwell intègre cette dimension juridique dans chaque stratégie de contenu carrosserie.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une carrosserie ?',
        answer:
          'Un blog est un levier puissant pour une carrosserie s\'il répond aux questions réelles des automobilistes : « comment enlever une rayure sur une carrosserie », « débosselage sans peinture ou traditionnel », « que faire après un accrochage de parking ». Ces contenus démontrent une expertise vérifiable et sont facilement citables par les moteurs IA. Rankwell recommande 2 à 3 articles par mois ciblant des requêtes informationnelles liées aux types de dommages et de réparations.',
      },
      {
        question: 'Comment un carrossier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un carrossier doit accumuler des signaux de notoriété sur le web : présence sur les annuaires automobiles (Vroomly, iDGarages, Allogarage), avis Google nombreux et récents, fiche Google Business Profile complète avec photos avant/après des réparations, et contenus factuels sur son site (grilles tarifaires, types de prestations, certifications). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un carrossier ?',
        answer:
          'Le SEO local cible les requêtes « carrossier + ville » et « carrosserie autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations NAP sur les annuaires automobiles. Le SEO national vise des requêtes génériques (« meilleur carrossier pour véhicule de collection ») et nécessite du contenu expert à forte autorité. Pour la grande majorité des carrosseries, le SEO local est prioritaire. Rankwell adapte la répartition entre local et national selon la stratégie de l\'atelier.',
      },
      {
        question: 'Vroomly et les comparateurs suffisent-ils pour être visible en tant que carrossier ?',
        answer:
          'Les comparateurs comme Vroomly ou iDGarages sont utiles pour capter des demandes de devis, mais ils créent une dépendance : votre carrosserie n\'est qu\'un profil parmi des centaines, en concurrence directe sur le prix. Un site propre bien référencé permet de contrôler votre image, de mettre en avant vos spécialités (peinture haut de gamme, véhicules de collection, débosselage sans peinture), de convertir directement sans commission et de construire une autorité durable. Rankwell aide les carrossiers à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des comparateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre carrosserie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur de la carrosserie.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Garage auto', href: '/agence-geo-seo/secteur/garage' },
        { label: 'SEO Concessionnaire', href: '/agence-geo-seo/secteur/concessionnaire' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
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
      { label: 'Garage auto', href: '/agence-geo-seo/secteur/garage' },
      { label: 'Concessionnaire', href: '/agence-geo-seo/secteur/concessionnaire' },
      { label: 'Déménageur', href: '/agence-geo-seo/secteur/demenageur' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'AutoBodyShop',
};

export default data;
