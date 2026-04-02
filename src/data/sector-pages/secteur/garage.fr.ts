/**
 * DATA - Page Secteur : Garages automobiles (FR)
 * Route : /agence-geo-seo/secteur/garage
 *
 * Mots-clés Ahrefs, mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'garage',
    title: 'Agence GEO & SEO pour Garages Auto - Rankwell',
    description:
      'Rankwell accompagne les garages automobiles dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur automobile.',
  },

  // ============================================
  // BLOC 1 - HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Garages automobiles' },
    ],
    title: 'GEO & SEO Garage Auto : visibilité Google & moteurs IA',
    subtitle:
      'Votre garage doit apparaître quand un automobiliste cherche une réparation, un entretien ou un contrôle technique à proximité. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes du secteur automobile.',
    ctaText: 'Demander un audit GEO & SEO garage auto',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 - Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les garages auto',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches garage contiennent une intention locale</strong> (« garage automobile autour de moi », « garagiste toulouse »). L\'automobiliste cherche une solution immédiate, sur mobile. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue en quelques minutes entre les 3 garages du Local Pack ou celui recommandé par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La confiance est le critère n°1</strong> : les automobilistes redoutent surfacturations et réparations inutiles. Un garage sous 4 étoiles Google perd 60 % de son potentiel de clics. La réglementation impose l\'affichage des tarifs horaires et des devis détaillés.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Vroomly, iDGarages, Allogarage, GoodMecano</strong> et les franchises (Midas, Speedy, Norauto) captent les requêtes transactionnelles avec devis en ligne. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur automobile, un garage indépendant reste invisible.',
  },

  // ============================================
  // QUOTE - Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 - Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'garage automobile', volume: 15000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'contrôle technique autour de moi', volume: 9500, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'garage auto', volume: 8400, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'garagiste', volume: 6100, intent: 'informationnelle', difficulty: 'élevée' },
      { keyword: 'garage automobile autour de moi', volume: 4100, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'garagiste autour de moi', volume: 4000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'garage automobile à proximité', volume: 3400, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'garage auto autour de moi', volume: 1700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'réparation voiture', volume: 500, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'garagiste a domicile', volume: 500, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 50 000 recherches liées aux garages automobiles traduisent un besoin immédiat : trouver un garagiste à proximité, passer un contrôle technique ou faire réparer son véhicule. « Contrôle technique autour de moi » à lui seul génère 9 500 requêtes mensuelles. La majorité des automobilistes choisit l\'un des 3 premiers garages affichés dans le Local Pack Google, ou suit la recommandation d\'un moteur IA. Si votre garage n\'y figure pas, ces clients roulent vers un concurrent.',
  },

  // ============================================
  // BLOC 4 - Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les garages auto',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur automobile et de la réparation mécanique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du garage, de la vitesse de chargement mobile et des facteurs techniques qui freinent l\'indexation des pages services et prestations.',
        items: [
          'Structure des pages par type de prestation (entretien, réparation, carrosserie, contrôle technique)',
          'Balises schema.org AutoRepair et AutomotiveBusiness',
          'Performance mobile et Core Web Vitals',
          'Crawl et indexation des fiches prestations',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du garage dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du garage (marques réparées, spécialités, certifications)',
          'Mesure de la légitimité et citabilité face aux réseaux franchisés',
          'Évaluation de la densité factuelle du contenu (tarifs, délais, équipements)',
          'Benchmark concurrentiel sur les requêtes IA automobiles',
        ],
      },
      {
        title: 'Étude de marché & mots-clés automobiles',
        subtitle: 'Cartographie des requêtes par type de prestation, marque de véhicule et zone de chalandise. Identification des niches à faible concurrence.',
        items: [
          'Combinaisons prestation + ville à fort potentiel (« vidange Lyon », « distribution Toulouse »)',
          'Analyse des requêtes posées aux moteurs IA sur l\'entretien automobile',
          'Volumes de recherche réels par type de réparation et par marque',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un parcours pensé pour l\'automobiliste en recherche de prestation et pour le crawl Google.',
        items: [
          'Page prestation → page tarifs → page devis / contact',
          'Requête principale + 3-5 requêtes secondaires par page service',
          'Optimisation des balises title, meta, Hn avec les noms de prestations et de marques',
        ],
      },
      {
        title: 'Stratégie de contenu automobile',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du garage en mécanique, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : « Quand changer sa courroie de distribution ? », « Symptômes d\'un embrayage usé »',
          'FAQ avec données chiffrées (coûts moyens, intervalles d\'entretien par marque)',
          'Phrases factuelles auto-suffisantes sur les spécialités du garage',
        ],
      },
      {
        title: 'Autorité & netlinking automobile',
        subtitle: 'Développement de l\'autorité via les annuaires automobiles qualifiés et les partenariats locaux.',
        items: [
          'Vroomly, iDGarages, Allogarage, Pages Jaunes',
          'Partenariats avec des auto-écoles, concessionnaires et assureurs locaux',
          'Inscriptions aux réseaux et labels qualité (Autoprimo, Top Garage, Précisium)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du garage pour capter les requêtes « garage + ville » et « garagiste autour de moi » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Auto Repair Shop + catégories secondaires (vidange, pneus, climatisation)',
          'Gestion des avis clients et stratégie de collecte après chaque intervention',
          'Photos de l\'atelier, des équipements de diagnostic et du parc véhicules',
          'Citations NAP cohérentes sur les annuaires automobiles et locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé automobile',
          'Trafic organique par prestation et par zone géographique',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis, appels téléphoniques et itinéraires Maps',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 - Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Un accompagnement d\'experts en référencement GEO & SEO, adapté au secteur automobile, avec des livrables concrets à chaque étape.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic complet du site du garage : pages prestations (révision, réparation, contrôle technique), vitesse de chargement mobile, indexation des fiches services et identification des freins techniques au référencement.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes garage et garagiste dans ChatGPT, Perplexity et Gemini. Benchmark des concurrents locaux et des réseaux franchisés. Score GEO sur 100 avec détail par dimension.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage structuré AutoRepair, AutomotiveBusiness, Service et FAQPage prêt à intégrer. Inclut les marques de véhicules réparées, les prestations proposées et les données de localisation du garage.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Rédaction et mise en ligne de pages prestations, pages marques véhicules, articles conseils entretien et FAQ. Intégration CMS ou FTP avec templates optimisés pour le référencement.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires automobiles (Vroomly, iDGarages, PagesJaunes), blogs auto et presse locale. Suivi du Domain Rating et de l\'évolution du profil de liens.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par prestation, trafic organique par zone géographique, prises de rendez-vous atelier attribuées au SEO et Score GEO mesurant la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 - Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre garage dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un automobiliste demande à ChatGPT « quel garage recommandes-tu pour une vidange à Nantes ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre garage n\'apparaît dans aucune source citée (ni sur les annuaires, ni via des avis, ni sur votre propre site), il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Les franchises en réponse par défaut</h4>' +
      '<p>Sur la requête « quel garage auto recommandes-tu à Toulouse ? », les LLM ne citent aucun garage indépendant. Midas, Norauto, Speedy et Feu Vert apparaissent systématiquement comme réponse de repli : le LLM n\'a pas de données locales fiables sur les indépendants et se rabat sur les enseignes nationales qu\'il connaît.</p>' +
      '<h4>Requêtes informationnelles : mode guide sans citation</h4>' +
      '<p>Sur « comment choisir un bon garagiste de confiance ? » ou « garage indépendant vs concessionnaire pour la révision ? », le LLM produit un guide éducatif structuré (critères de choix, comparatif avantages/inconvénients). Il cite des labels qualité (Top Garage, Précisium, Autoprimo) et des données réglementaires (règlement UE n° 1400/2002 sur la garantie constructeur), mais aucune enseigne ni aucun garage nommément.</p>' +
      '<h4>Prix et horaires : fourchettes sans source</h4>' +
      '<p>Sur « prix contrôle technique 2026 », les LLM donnent une fourchette (60-90 €) et citent les réseaux de CT (Dekra, Sécuritest, Autovision), mais jamais de prix exact ni de lien vers un comparateur. Sur « garage auto ouvert le samedi autour de moi », le LLM ne peut pas répondre sans moteur de recherche intégré et redirige vers Google Maps.</p>' +
      '<h4>ChatGPT Search change la donne</h4>' +
      '<p>Quand ChatGPT active son mode Search sur une requête locale, il affiche une carte Maps avec 3-5 garages, leurs notes Google et leurs horaires. Les garages avec une fiche Google Business complète (catégorie Auto Repair Shop, avis récents, photos d\'atelier) apparaissent directement dans la réponse IA. <strong>C\'est le seul LLM capable de recommander un garage indépendant par son nom</strong>, à condition que celui-ci soit visible sur Google Maps et les annuaires automobiles.</p>',
    structuredData:
      '<p>Pour les garages automobiles, les types schema.org recommandés sont : <code>AutoRepair</code> (type principal), <code>AutomotiveBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>AutoRepair</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées (vidange, freinage, distribution, climatisation), la localisation et les avis clients du garage.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre garage par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos prestations et spécialités), la Légitimité & Citabilité (signaux de confiance externes : avis, annuaires, mentions), et la Densité Factuelle (richesse des données structurées et des entités nommées : marques réparées, certifications, équipements).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 - FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les garages auto',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de garage automobile ?',
        answer:
          'Le budget SEO pour un garage automobile dépend de la taille de la zone de chalandise et du nombre de prestations à positionner. Chez Rankwell, les accompagnements SEO pour les garages démarrent à 800 €/mois pour un garage mono-site ciblant une ville et ses alentours, et peuvent atteindre 2 500-4 000 €/mois pour un réseau de garages multi-sites ou un indépendant visant une métropole concurrentielle.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO automobile ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« garage distribution Nantes », « vidange hybride Montpellier ») se positionnent plus rapidement que les requêtes génériques très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau d\'optimisation actuel de votre fiche Google Business.',
      },
      {
        question: 'Comment un garage indépendant peut-il rivaliser avec les réseaux franchisés en SEO ?',
        answer:
          'Les réseaux Midas, Speedy ou Norauto disposent de budgets marketing conséquents, mais leur SEO local est souvent générique : pages identiques d\'un point de vente à l\'autre, peu de contenu spécifique. Un garage indépendant avec un site bien optimisé, des avis clients authentiques, du contenu expert sur ses spécialités (boîte automatique, véhicules allemands, hybrides) et une fiche Google complète peut surpasser un franchisé dans le Local Pack. Rankwell exploite précisément ces leviers de différenciation.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un garage ?',
        answer:
          'Un blog automobile est un levier puissant pour un garage s\'il répond aux questions réelles des automobilistes : « quand changer sa courroie de distribution », « symptômes d\'un embrayage usé », « différence entre vidange et révision ». Ces contenus démontrent une expertise vérifiable et sont facilement citables par les moteurs IA. Rankwell recommande 2-3 articles par mois ciblant des requêtes informationnelles liées aux prestations du garage.',
      },
      {
        question: 'Comment un garage peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un garage doit accumuler des signaux de notoriété sur le web : présence sur les annuaires automobiles (Vroomly, iDGarages, Allogarage), avis Google nombreux et récents, fiche Google Business Profile complète avec photos de l\'atelier, et contenus factuels sur son site (tarifs, spécialités, marques réparées). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un garage ?',
        answer:
          'Le SEO local cible les requêtes « garage + ville » et « garagiste autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations NAP sur les annuaires automobiles. Le SEO national vise des requêtes génériques (« meilleur garage pour distribution ») et nécessite du contenu expert à forte autorité. Pour la grande majorité des garages, le SEO local est prioritaire. Rankwell adapte la répartition du budget entre local et national selon la stratégie du garage.',
      },
      {
        question: 'Vroomly et les comparateurs suffisent-ils pour être visible ?',
        answer:
          'Les comparateurs comme Vroomly ou iDGarages sont utiles pour capter des demandes de devis, mais ils créent une dépendance : le garage n\'est qu\'un profil parmi des centaines, en concurrence directe sur le prix. Un site propre bien référencé permet de contrôler son image, de mettre en avant ses spécialités (véhicules de collection, hybrides, utilitaires), de convertir directement sans commission et de construire une autorité durable. Rankwell aide les garages à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des comparateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre garage visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur automobile.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Concessionnaire', href: '/agence-geo-seo/secteur/concessionnaire' },
        { label: 'SEO Carrossier', href: '/agence-geo-seo/secteur/carrossier' },
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

  // Bandeau maillage - secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Concessionnaire', href: '/agence-geo-seo/secteur/concessionnaire' },
      { label: 'Carrossier', href: '/agence-geo-seo/secteur/carrossier' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Chauffagiste', href: '/agence-geo-seo/secteur/chauffagiste' },
      { label: 'Déménageur', href: '/agence-geo-seo/secteur/demenageur' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'AutoRepair',
};

export default data;
