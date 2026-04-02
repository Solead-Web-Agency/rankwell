/**
 * DATA : Page Secteur Agences immobilières (FR)
 * Route : /agence-geo-seo/secteur/agence-immobiliere
 *
 * Mots-clés réels Ahrefs (mars 2026), marché FR
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'agence-immobiliere',
    title: 'Agence GEO & SEO pour Agences Immobilières - Rankwell',
    description:
      'Rankwell accompagne les agences immobilières dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur immobilier.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Agences immobilières' },
    ],
    title: 'GEO & SEO Agence Immobilière : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs acquéreurs et vendeurs vous cherchent sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du marché immobilier local.',
    ctaText: 'Demander un audit GEO & SEO immobilier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les agences immobilières',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">92 000 recherches mensuelles sur « agence immobilière » et 33 000 sur « agence immobilière autour de moi »</strong>. Le marché est hyper-local : chaque requête associe transaction, bien et ville. C\'est un terrain de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la fiche Google Business Profile et le Local Pack décident du premier contact.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le stock de biens change en permanence</strong> : des centaines d\'annonces publiées et dépubliées chaque mois, générant URL éphémères et pages 404. La loi Hoguet impose des mentions légales indexables (carte professionnelle, garantie financière, barème d\'honoraires).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">SeLoger, Leboncoin, Bien\'ici, Logic-Immo, PAP</strong> trustent les premières positions et investissent massivement en SEO et SEA. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte de l\'immobilier, une agence reste invisible face à ces portails nationaux.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (E-E-A-T)
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
      { keyword: 'agence immobilière', volume: 92000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'agence immobilière autour de moi', volume: 33000, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'estimation bien immobilier', volume: 9100, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'achat appartement', volume: 9100, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'agence immobilière paris', volume: 5500, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'achat appartement paris', volume: 4200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'agence immobilière lyon', volume: 3100, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'agence immobilière bordeaux', volume: 2800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'agence immobilière toulouse', volume: 2800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'agence immobilière location', volume: 1600, intent: 'transactionnelle', difficulty: 'moyenne' },
    ],
    interpretation:
      'Chaque mois, plus de 92 000 recherches sur « agence immobilière » et 33 000 sur « agence immobilière autour de moi » représentent autant de vendeurs ou acquéreurs potentiels. Les requêtes transactionnelles (« achat appartement paris » : 4 200/mois, « estimation bien immobilier » : 9 100/mois) révèlent une intention forte. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre agence n\'y figure pas, ces mandats vont à la concurrence.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les agences immobilières',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du marché immobilier et à la gestion d\'un catalogue de biens en rotation permanente.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la gestion des annonces expirées (301 vs 404 vs soft-404) et des facteurs techniques qui freinent l\'indexation du catalogue immobilier.',
        items: [
          'Gestion des URL d\'annonces vendues ou expirées',
          'Balises schema.org RealEstateAgent et Offer',
          'Performance et Core Web Vitals sur les pages de listing',
          'Crawl budget : indexation sélective du catalogue',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'agence dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'agence immobilière',
          'Mesure de la légitimité et citabilité sur les requêtes locales',
          'Évaluation de la densité factuelle du contenu (quartiers, prix, tendances)',
          'Benchmark concurrentiel sur les requêtes IA immobilières',
        ],
      },
      {
        title: 'Étude de marché & mots-clés immobiliers',
        subtitle: 'Cartographie des requêtes par type de transaction (vente, location, estimation), type de bien et zone géographique. Identification des niches locales à forte intention.',
        items: [
          'Combinaisons transaction + bien + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA (« meilleure agence immobilière à... »)',
          'Volumes de recherche réels par quartier et arrondissement',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne qui convertit : page quartier → page type de bien → page estimation → page contact.',
        items: [
          'Pages de quartier optimisées (prix au m², tendances, commodités)',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par zone géographique',
        ],
      },
      {
        title: 'Stratégie de contenu immobilier',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise locale de l\'agence : guides de quartier, analyses de marché, conseils achat/vente, rédigés pour être citables par les LLM.',
        items: [
          'Guides de quartier avec données chiffrées (prix au m², évolution, transports)',
          'Phrases factuelles auto-suffisantes : tendances marché local, délais de vente moyens',
          'FAQ acheteurs et vendeurs répondant aux PAA Google',
        ],
      },
      {
        title: 'Autorité & netlinking immobilier',
        subtitle: 'Développement de l\'autorité via les portails immobiliers, la presse locale et les partenariats institutionnels.',
        items: [
          'Profils optimisés sur SeLoger, Bien\'ici, MeilleursAgents',
          'Publications dans la presse immobilière locale et nationale',
          'Partenariats avec les notaires, mairies et offices du tourisme locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'agence pour capter les requêtes locales « agence immobilière + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Real estate agency + catégories secondaires (gestion locative, estimation)',
          'Gestion des avis clients et stratégie de collecte post-transaction',
          'Photos des locaux, des biens vendus, des quartiers couverts',
          'Citations NAP cohérentes sur les annuaires immobiliers et locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par zone géographique et les leads générés (estimations, demandes de visite, mandats).',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par type de transaction (vente, location, estimation)',
          'Score GEO : visibilité dans les moteurs IA',
          'Leads générés et taux de conversion par canal',
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
        description: 'Diagnostic du site, architecture des pages biens/quartiers, vitesse, indexation des annonces.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes immobilières, benchmark concurrents locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage RealEstateAgent, Offer, Place, FAQPage avec zones géographiques et types de biens.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages quartiers, guides achat/vente/location, articles marché local, FAQ, intégration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis portails immobiliers, blogs habitat, presse locale, annuaires (SeLoger, Bien\'ici), suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par zone géographique, trafic organique, contacts vendeurs/acquéreurs attribués au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre agence immobilière dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quelle est la meilleure agence immobilière à Lyon ? » ou « comment estimer mon appartement à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre agence n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de mandats.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4>' +
      '<p>À la question « quelle agence immobilière recommandes-tu à Bordeaux ? », les LLM citent <strong>5 à 7 réseaux nationaux</strong> (Century 21, Orpi, Laforêt, Guy Hoquet, ERA) et parfois des enseignes de niche (Barnes pour le luxe). <strong>Aucune agence indépendante locale n\'est citée</strong> : seuls les réseaux à forte notoriété web apparaissent.</p>' +
      '<h4>Requêtes informationnelles</h4>' +
      '<p>Sur « comment choisir une bonne agence immobilière pour vendre ? » ou « estimation gratuite de mon bien », les LLM produisent un guide en 6-8 critères <strong>sans citer aucune agence</strong>. Ils redirigent systématiquement vers les portails : MeilleursAgents (cité dans 4 requêtes sur 5), SeLoger, Leboncoin, Bien\'ici. L\'agence qui fournit le contenu source (guide de quartier, analyse de marché) peut apparaître en référence.</p>' +
      '<h4>Requêtes comparatives</h4>' +
      '<p>« Agence immobilière vs mandataire : quelle différence ? » est la requête qui génère le plus de citations : <strong>9 noms en une seule réponse</strong> (Century 21, Orpi, Stéphane Plaza côté agences ; IAD, Safti, Capifrance côté mandataires). Le LLM a besoin d\'exemples concrets pour illustrer la comparaison.</p>' +
      '<h4>Requêtes géolocalisées</h4>' +
      '<p>Sur « agence immobilière autour de moi » (33 000 recherches/mois), <strong>ChatGPT active le mode Search avec carte Maps</strong> et affiche les agences proches avec avis et horaires. Claude redirige vers Google Maps et MeilleursAgents sans pouvoir géolocaliser. Dans les deux cas, la fiche Google Business Profile complète (catégorie, 100+ avis récents, photos) est le facteur déterminant.</p>',
    structuredData:
      '<p>Pour les agences immobilières, les types schema.org recommandés sont : <code>RealEstateAgent</code> (type principal), <code>Offer</code> (pour les biens en catalogue), <code>Place</code> (pour les quartiers et villes couverts), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>RealEstateAgent</code> permet à Google et aux LLM d\'identifier précisément la zone géographique, les services proposés (vente, location, gestion) et les avis clients de l\'agence.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre agence immobilière par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les quartiers et le marché local), la Légitimité & Citabilité (signaux de confiance externes : avis, portails, presse), et la Densité Factuelle (richesse des données structurées et des entités nommées : prix au m², volumes de transactions, tendances).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les agences immobilières',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'agence immobilière ?',
        answer:
          'Le budget SEO pour une agence immobilière dépend du nombre de villes couvertes et du périmètre de services (vente, location, gestion). Chez Rankwell, les accompagnements SEO pour les agences immobilières démarrent à 1 500 €/mois pour une zone géographique, et peuvent atteindre 5 000-8 000 €/mois pour un réseau multi-agences couvrant plusieurs départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO immobilier ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « agence immobilière quartier Bacalan Bordeaux ») sont plus rapides à positionner que les requêtes nationales très concurrentielles dominées par SeLoger ou Leboncoin. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone.',
      },
      {
        question: 'Comment gérer les annonces expirées sans perdre de référencement ?',
        answer:
          'Les annonces vendues ou retirées génèrent des pages 404 qui gaspillent le crawl budget et dégradent l\'expérience utilisateur. Rankwell met en place une stratégie de redirection 301 vers la page de quartier ou de type de bien correspondante, un sitemap dynamique qui exclut les annonces expirées, et un balisage schema.org Offer avec statut « Sold » pour les biens vendus, ce qui enrichit les signaux de transaction pour Google et les LLM.',
      },
      {
        question: 'Faut-il un blog immobilier pour améliorer son référencement ?',
        answer:
          'Un blog immobilier est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des acquéreurs et vendeurs (prix au m² par quartier, tendances du marché local, conseils pour vendre vite), démontrer une expertise locale vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois ciblant des requêtes informationnelles de longue traîne liées à vos zones couvertes.',
      },
      {
        question: 'Comment une agence immobilière peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une agence immobilière doit accumuler des signaux de notoriété sur le web : présence sur les portails (SeLoger, Bien\'ici, MeilleursAgents), avis Google nombreux et récents, profil GBP optimisé, contenus riches sur le marché local (guides de quartier, analyses de prix). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une agence immobilière ?',
        answer:
          'Le SEO local cible les requêtes « agence immobilière + ville/quartier » et s\'appuie sur Google Business Profile, les avis clients et les citations locales (Pages Jaunes, annuaires immobiliers). Le SEO national vise des requêtes génériques (« estimation immobilière en ligne », « prix immobilier France ») et nécessite du contenu data-driven à forte autorité. Rankwell combine les deux approches selon la stratégie de développement de l\'agence.',
      },
      {
        question: 'SeLoger et les portails immobiliers suffisent-ils pour être visible ?',
        answer:
          'Les portails comme SeLoger ou Leboncoin sont utiles pour la diffusion d\'annonces, mais ils créent une dépendance coûteuse : l\'agence paie pour chaque annonce et n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de recevoir des leads gratuits, de contrôler son image de marque et de construire une autorité locale durable que les portails ne peuvent pas retirer. Rankwell aide les agences immobilières à bâtir cette visibilité organique indépendante grâce à une stratégie de référencement SEO & GEO qui réduit progressivement la dépendance aux portails payants.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre agence immobilière visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre zone géographique.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Promoteur immobilier', href: '/agence-geo-seo/secteur/promoteur-immobilier' },
        { label: 'SEO Diagnostiqueur', href: '/agence-geo-seo/secteur/diagnostiqueur' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
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
        { label: 'SEO local', href: '/glossaire/seo-local' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Promoteur immobilier', href: '/agence-geo-seo/secteur/promoteur-immobilier' },
      { label: 'Diagnostiqueur immobilier', href: '/agence-geo-seo/secteur/diagnostiqueur' },
      { label: 'Syndic de copropriété', href: '/agence-geo-seo/secteur/syndic' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
    ],
  },

  // Schema.org type principal
  schemaType: 'RealEstateAgent',
};

export default data;
