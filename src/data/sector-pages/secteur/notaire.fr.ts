/**
 * DATA : Page Secteur Notaires (FR)
 * Route : /agence-geo-seo/secteur/notaire
 *
 * Mots-clés réels Ahrefs (mars 2026), marché FR
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'notaire',
    title: 'Agence GEO & SEO pour Notaires - Rankwell',
    description:
      'Rankwell accompagne les études notariales dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur notarial.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Notaires' },
    ],
    title: 'GEO & SEO Notaire : visibilité Google & moteurs IA',
    subtitle:
      'Votre étude notariale doit être trouvée par les particuliers et les entreprises qui recherchent un notaire : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du notariat.',
    ctaText: 'Demander un audit GEO & SEO notaire',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les notaires',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">80 % des requêtes liées aux notaires contiennent un critère géographique</strong> (« notaire paris », « office notarial autour de moi »). Les particuliers cherchent un notaire pour des actes immobiliers, des successions ou du droit de la famille. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité se joue dans le Local Pack Google et les recommandations des moteurs IA.',
    constraints:
      'Le notariat est une <strong class="text-secondary dark:text-accent">profession réglementée par ordonnance de 1945, sous tutelle du ministère de la Justice</strong>. Publicité comparative, démarchage et promesse de résultats sont interdits. Les émoluments sont fixés par décret, rendant toute différenciation tarifaire impossible. L\'E-E-A-T repose sur l\'expertise juridique démontrée et la confiance institutionnelle.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Notaires.fr, Immobilier.notaires.fr, LegalPlace et Legalstart</strong> captent le trafic transactionnel avec leurs annuaires et outils de calcul (frais de notaire, estimation immobilière). Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une étude notariale reste noyée derrière ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'Selon Rankwell, les signaux E-E-A-T ne servent pas qu\'à satisfaire les Quality Raters de Google. Ils constituent le principal critère de sélection des sources par les moteurs IA, qui privilégient les contenus démontrant une expertise vérifiable et une expérience documentée plutôt qu\'une simple autorité de domaine.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'En savoir plus sur l\'E-E-A-T',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'frais de notaire', volume: 45000, intent: 'informationnelle', difficulty: 'élevée' },
      { keyword: 'notaire autour de moi', volume: 8600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'notaire immobilier', volume: 8300, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'office notarial', volume: 4900, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'frais de notaire succession', volume: 3100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'notaire paris', volume: 1600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'office notarial autour de moi', volume: 1000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'notaire toulouse', volume: 900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'notaire bordeaux', volume: 800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'notaire lyon', volume: 700, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      '« Frais de notaire » cumule à lui seul 45 000 recherches mensuelles en France, un volume considérable qui montre l\'importance du notariat dans le quotidien des particuliers. Les requêtes de proximité (« notaire autour de moi », « notaire paris », « notaire lyon ») totalisent plus de 12 000 recherches locales par mois. La majorité des clics va aux 3 premiers résultats du Local Pack Google, ou à la recommandation d\'un moteur IA. Si votre étude n\'y figure pas, ces clients s\'adressent à un confrère.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les notaires',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur notarial et à la réglementation de la profession.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site de l\'étude notariale, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par domaine d\'intervention (immobilier, succession, famille, entreprise)',
          'Balises schema.org Notary et LegalService',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages d\'actes notariés',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'étude dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'étude notariale',
          'Mesure de la légitimité et citabilité auprès des LLM',
          'Évaluation de la densité factuelle du contenu juridique',
          'Benchmark concurrentiel sur les requêtes IA liées au notariat',
        ],
      },
      {
        title: 'Étude de marché & mots-clés notariaux',
        subtitle: 'Cartographie des requêtes par domaine d\'intervention notariale et zone géographique. Identification des combinaisons sous-exploitées à fort potentiel.',
        items: [
          'Combinaisons domaine d\'acte + ville à faible concurrence (succession Lyon, notaire immobilier Nantes)',
          'Analyse des requêtes posées aux moteurs IA sur le notariat',
          'Volumes de recherche réels par type d\'acte (immobilier, donation, PACS, testament)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de l\'internaute cherchant un notaire et le crawl Google.',
        items: [
          'Page domaine d\'intervention → page notaire → page contact / prise de rendez-vous',
          'Requête principale + 3-5 requêtes secondaires par page (ex : « notaire succession » + « frais de notaire succession » + « déblocage fonds succession »)',
          'Optimisation des balises title, meta, Hn avec les termes notariaux',
        ],
      },
      {
        title: 'Stratégie de contenu notarial',
        subtitle: 'Création de contenus éducatifs sur les actes notariés, rédigés pour démontrer l\'expertise de l\'étude et être citables par les LLM.',
        items: [
          'Guides pratiques sur les procédures notariales (vente immobilière, succession, donation-partage)',
          'FAQ répondant aux PAA Google (« combien coûte un acte notarié ? », « quel est le rôle du notaire ? »)',
          'Phrases factuelles auto-suffisantes avec références juridiques (Code civil, décrets tarifaires)',
        ],
      },
      {
        title: 'Autorité & netlinking notarial',
        subtitle: 'Développement de l\'autorité via les annuaires institutionnels du notariat et les publications juridiques spécialisées.',
        items: [
          'Notaires.fr (annuaire officiel du Conseil supérieur du notariat)',
          'Annuaires des chambres départementales et régionales',
          'Publications dans la presse juridique et immobilière spécialisée',
          'Partenariats avec les sites institutionnels (chambres de commerce, mairies)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'étude notariale pour capter les requêtes locales « notaire + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Notary + catégories secondaires (Real Estate Service, Legal Service)',
          'Gestion des avis clients et stratégie de collecte post-signature d\'acte',
          'Photos de l\'étude, horaires d\'ouverture, attributs et posts réguliers',
          'Citations NAP cohérentes sur notaires.fr, Pages Jaunes et annuaires locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par domaine d\'intervention notariale et les demandes de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé notarial',
          'Trafic organique par type d\'acte (immobilier, succession, famille)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de rendez-vous et prises de contact via le site',
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
        description: 'Diagnostic site de l\'etude, architecture pages actes/services, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes notariales, benchmark confreres, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage Notary, LegalService, FAQPage, BreadcrumbList avec domaines de competence (succession, immobilier, famille).',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages actes notaries, guides succession/donation/immobilier, FAQ frais de notaire, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires notariaux (notaires.fr, CSN), blogs juridiques, presse immobiliere, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par type d\'acte, trafic organique, prises de contact attribuees au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre étude notariale dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel notaire recommandes-tu pour une succession à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre étude n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de clients.',
    llmBehavior:
      '<h4>Aucun nom d\'étude cité spontanément</h4>' +
      '<p>Sur 5 requêtes testées (« quel notaire recommandes-tu à Paris pour un achat immobilier ? », « comment choisir un bon notaire ? », « notaire vs avocat pour une succession », « frais de notaire pour 300 000 € », « notaire autour de moi pour une donation »), <strong>aucun LLM ne cite de nom d\'étude notariale</strong>. Le modèle refuse explicitement de recommander un notaire spécifique et renvoie systématiquement vers l\'annuaire officiel notaires.fr ou Google Maps.</p>' +
      '<h4>Notaires.fr : réflexe n°1 du LLM</h4>' +
      '<p>L\'annuaire du Conseil supérieur du notariat est mentionné dans 3 réponses sur 5 comme première ressource. C\'est l\'équivalent de Doctolib pour les dentistes : <strong>la plateforme institutionnelle que le LLM juge la plus fiable</strong>. Google Business Profile arrive en deuxième position, cité à chaque requête locale.</p>' +
      '<h4>Les calculs de frais : contenu le plus citable</h4>' +
      '<p>Sur « frais de notaire pour 300 000 € », le LLM produit un calcul détaillé avec barème dégressif, droits de mutation par composante et estimation finale (~21 000-22 000 €). Ce contenu factuel et chiffré est extrait des sites qui fournissent des <strong>guides de calcul structurés par type d\'acte</strong>, un levier direct de citabilité pour les études notariales.</p>' +
      '<h4>Requêtes locales : Search + Maps activé</h4>' +
      '<p>Sur « notaire autour de moi » et « quel notaire à Paris », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les études avec une fiche GBP complète (catégorie Notary, avis récents, photos) apparaissent dans la réponse IA. Le LLM ne recommande pas un nom, mais affiche les résultats locaux les mieux référencés.</p>',
    structuredData:
      '<p>Pour les études notariales, les types schema.org recommandés sont : <code>Notary</code> (type principal), <code>LegalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Notary</code> permet à Google et aux LLM d\'identifier précisément les domaines d\'intervention, la localisation et les avis clients de l\'étude. Le type <code>LegalService</code> renforce le signal de profession réglementée.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre étude notariale par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les actes notariés), la Légitimité & Citabilité (signaux de confiance externes : annuaires officiels, presse juridique, avis), et la Densité Factuelle (richesse des données structurées et des entités nommées liées au notariat).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les notaires',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de notaire ?',
        answer:
          'Le budget SEO pour une étude notariale dépend du nombre de domaines d\'intervention mis en avant et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les notaires démarrent à 1 500 €/mois pour une étude locale mono-ville, et peuvent atteindre 4 000-5 000 €/mois pour un office notarial multi-sites en Île-de-France ou dans une grande métropole.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO notarial ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« notaire donation Nantes », « notaire PACS Bordeaux ») sont plus rapides à positionner que les requêtes nationales très concurrentielles dominées par notaires.fr. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone géographique.',
      },
      {
        question: 'Le SEO est-il compatible avec la réglementation du notariat ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le statut d\'officier public. Les notaires ne sont pas soumis aux mêmes restrictions publicitaires que les avocats, mais restent encadrés par le Conseil supérieur du notariat (CSN) : interdiction de publicité comparative, obligation de dignité et de modération. Rankwell connaît ces contraintes spécifiques au notariat et adapte chaque stratégie pour respecter les obligations déontologiques tout en maximisant la visibilité.',
      },
      {
        question: 'Faut-il un blog juridique pour améliorer le référencement d\'un notaire ?',
        answer:
          'Un blog sur les thématiques notariales est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des particuliers (frais de notaire, déroulement d\'une succession, avantages du PACS notarié), démontrer l\'expertise de l\'étude et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois ciblant des requêtes informationnelles à forte intention.',
      },
      {
        question: 'Comment un notaire peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une étude notariale doit accumuler des signaux de notoriété sur le web : présence sur l\'annuaire officiel notaires.fr, mentions dans la presse locale et juridique, fiche Google Business optimisée avec avis récents, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour les études notariales.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un notaire ?',
        answer:
          'Le SEO local cible les requêtes « notaire + ville » ou « office notarial + quartier » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires locaux. Le SEO national vise des requêtes génériques comme « notaire immobilier » ou « frais de notaire succession » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie de développement de l\'étude.',
      },
      {
        question: 'Le portail notaires.fr suffit-il pour être visible en ligne ?',
        answer:
          'Le portail officiel notaires.fr est utile pour référencer l\'existence de l\'étude, mais il crée une dépendance : votre fiche est identique à celle de milliers de confrères, sans possibilité de différenciation. Un site propre bien référencé permet de mettre en avant vos domaines d\'expertise, de publier du contenu éducatif, de convertir directement les visiteurs en rendez-vous et de construire une autorité durable. Rankwell aide les études notariales à bâtir cette présence propre grâce à une stratégie de référencement SEO & GEO indépendante des portails institutionnels.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre étude notariale visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur notarial.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
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
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Promoteur immobilier', href: '/agence-geo-seo/secteur/promoteur-immobilier' },
      { label: 'Diagnostiqueur immobilier', href: '/agence-geo-seo/secteur/diagnostiqueur' },
      { label: 'Syndic de copropriété', href: '/agence-geo-seo/secteur/syndic' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Notary',
};

export default data;
