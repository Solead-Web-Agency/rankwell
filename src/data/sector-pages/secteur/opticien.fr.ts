/**
 * DATA : Page Secteur Opticiens (FR)
 * Route : /agence-geo-seo/secteur/opticien
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'opticien',
    title: 'Agence GEO & SEO pour Opticiens - Rankwell',
    description:
      'Rankwell accompagne les opticiens dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur optique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Opticiens' },
    ],
    title: 'GEO & SEO Opticien : visibilité Google & moteurs IA',
    subtitle:
      'Votre magasin d\'optique doit apparaître en premier quand un client cherche un opticien à proximité, sur Google comme dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur optique.',
    ctaText: 'Demander un audit GEO & SEO opticien',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les opticiens',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">16 000 recherches mensuelles sur « opticien autour de moi »</strong> en France. Le client cherche un opticien proche, sur mobile, avec une intention de visite immédiate. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le Local Pack Google et les recommandations des moteurs IA déterminent qui capte le flux.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le 100 % Santé a uniformisé l\'offre tarifaire du panier A</strong>, rendant la différenciation par le prix quasi impossible sur les équipements de base. L\'opticien doit se démarquer par son expertise (contactologie, basse vision, lunettes enfants) et sa visibilité en ligne.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Krys, Afflelou, Optical Center, GrandOptical</strong> captent l\'essentiel de la visibilité organique grâce à leurs budgets nationaux. Les annuaires mutualistes (Kalixia, Santéclair, Carte Blanche) dominent les requêtes de prise en charge. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un opticien indépendant reste invisible.',
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
      { keyword: 'opticien', volume: 30000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'opticien autour de moi', volume: 16000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'lunettes de vue', volume: 5900, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'opticien à proximité', volume: 2000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'opticien paris', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'opticien toulouse', volume: 1400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'opticien mutualiste', volume: 1300, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'opticien marseille', volume: 1200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'opticien lyon', volume: 1200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'meilleur opticien', volume: 1200, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, « opticien autour de moi » génère à lui seul 16 000 recherches. Ces requêtes de proximité traduisent une intention de visite immédiate : le client veut un magasin accessible, bien noté, avec prise en charge mutuelle. La majorité clique sur les 3 premiers résultats du Local Pack ou suit la recommandation d\'un moteur IA. Si votre magasin n\'y figure pas, ces clients poussent la porte d\'un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les opticiens',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur optique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation de votre magasin d\'optique.',
        items: [
          'Structure des pages par spécialité (lunettes de vue, lentilles, solaire, basse vision)',
          'Balises schema.org Optician',
          'Performance et Core Web Vitals',
          'Crawl et indexation des fiches produit',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre magasin dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre enseigne',
          'Mesure de la légitimité et citabilité face aux grandes chaînes',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA du secteur optique',
        ],
      },
      {
        title: 'Étude de marché & mots-clés optiques',
        subtitle: 'Cartographie des requêtes par spécialité optique et zone de chalandise. Identification des opportunités à faible concurrence.',
        items: [
          'Combinaisons spécialité + ville ("opticien contactologie Lyon", "lunettes enfant Toulouse")',
          'Analyse des requêtes posées aux moteurs IA ("comment choisir un bon opticien")',
          'Volumes de recherche réels par spécialité et par réseau mutualiste',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat du client en optique.',
        items: [
          'Page spécialité (vue, solaire, lentilles) vers page magasin vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec le vocabulaire du secteur',
        ],
      },
      {
        title: 'Stratégie de contenu optique',
        subtitle: 'Création de contenus éducatifs valorisant l\'expertise de l\'opticien, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : verres progressifs vs unifocaux, entretien des lentilles, protection lumière bleue',
          'FAQ répondant aux PAA Google ("prix lunettes de vue", "reste à charge 100% Santé")',
          'Données tarifaires précises et actualisées, attractives pour les LLM',
        ],
      },
      {
        title: 'Autorité & netlinking optique',
        subtitle: 'Développement de l\'autorité de votre site via les annuaires professionnels et les sources spécialisées du secteur.',
        items: [
          'Inscription dans les annuaires de réseaux mutualistes (Kalixia, Santéclair, Carte Blanche)',
          'Présence sur les annuaires professionnels (Syndicat national des opticiens, GIFO)',
          'Partenariats locaux avec des ophtalmologues et professionnels de santé',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de votre magasin pour capter les requêtes « opticien + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Optician + catégories secondaires (lunettes, lentilles de contact)',
          'Gestion des avis clients et stratégie de collecte après chaque équipement',
          'Photos du magasin, de l\'atelier de montage et des collections de montures',
          'Citations NAP cohérentes sur les annuaires optiques et les réseaux mutualistes',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé (opticien + ville, lunettes de vue, lentilles)',
          'Trafic organique par spécialité optique',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et visites en magasin attribuées au SEO',
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
        title: 'Audit technique du site',
        description: 'Analyse de l\'architecture, de la vitesse de chargement et de l\'indexation, avec un focus sur les pages lunettes, lentilles et services optiques.',
      },
      {
        id: 2,
        title: 'Audit GEO de citabilité IA',
        description: 'Mesure de la visibilité de votre magasin dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100, benchmark concurrentiel et plan de progression.',
      },
      {
        id: 3,
        title: 'Kit schema.org opticien',
        description: 'Balisage structuré Optician, LocalBusiness et FAQPage avec vos marques de montures, vos services (examen de vue, adaptation lentilles) et vos réseaux mutualistes.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages services (examen de vue, adaptation lentilles), guides (choisir ses lunettes, mutuelle optique), FAQ, le tout intégré dans votre CMS ou livré par FTP.',
      },
      {
        id: 5,
        title: 'Campagne de netlinking',
        description: 'Liens depuis les annuaires santé (Kalixia, Santéclair), les blogs optique, la presse spécialisée et les annuaires professionnels du secteur.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel avec positions Google, trafic organique par spécialité optique, score GEO et suivi de la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre magasin d\'optique dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel opticien recommandes-tu à Marseille ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre magasin n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel opticien recommandes-tu à Marseille ? » : le LLM ne cite aucun opticien par nom. Il fournit 5 à 6 critères de sélection (diplôme, spécialisations, avis Google, prise en charge mutuelle) et renvoie vers PagesJaunes, les annuaires de réseaux mutualistes (Kalixia, Santéclair) et Google Maps. Les opticiens indépendants sont absents des réponses.</p><h4>Requêtes comparatives</h4><p>« Opticien indépendant vs chaîne (Krys, Afflelou) : quelle différence ? » : le LLM structure une comparaison en deux colonnes. Il cite les 4 grandes enseignes par leur nom (Krys, Afflelou, Optical Center, GrandOptical), mais aucun opticien indépendant n\'est nommé. Seule la catégorie "indépendant" est décrite. Publier un comparatif détaillé sur son site crée un signal de citabilité.</p><h4>Requêtes tarifaires</h4><p>« Prix lunettes de vue opticien » : le LLM donne des fourchettes (monture 50 à 400 euros, verres progressifs 150 à 600 euros, total 200 à 800 euros). Il mentionne le dispositif 100% Santé (panier A, reste à charge zéro). Les sites affichant des grilles tarifaires précises et actualisées sont les plus susceptibles d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « opticien autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les magasins disposant d\'une fiche Google Business Profile complète (catégorie Optician, avis récents, photos de la boutique et de l\'atelier) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les opticiens, les types schema.org recommandés sont : <code>Optician</code> (type principal), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Optician</code> permet à Google et aux LLM d\'identifier précisément les spécialités proposées (lunettes de vue, lentilles, solaire), la localisation et les avis clients du magasin.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre magasin d\'optique par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur l\'optique), la Légitimité & Citabilité (signaux de confiance externes, annuaires, avis), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les opticiens',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'opticien ?',
        answer:
          'Le budget SEO pour un opticien dépend de la zone de chalandise et du nombre de spécialités mises en avant (vue, solaire, lentilles, basse vision). Chez Rankwell, les accompagnements SEO pour les opticiens démarrent à 1 200 euros par mois pour un magasin unique et une ville, et peuvent atteindre 3 000 à 5 000 euros par mois pour un réseau multi-points de vente.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO optique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (par exemple « opticien contactologie Nantes » ou « lunettes enfant Rennes ») sont plus rapides à positionner que les requêtes génériques très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone.',
      },
      {
        question: 'Le 100% Santé impacte-t-il le SEO d\'un opticien ?',
        answer:
          'Oui, le dispositif 100% Santé a créé de nouvelles requêtes à fort volume (« lunettes 100% Santé », « reste à charge zéro optique ») et modifié le comportement d\'achat des clients. Un opticien qui publie des contenus détaillés sur le panier A et le panier B, avec des grilles tarifaires claires, capte ce trafic informationnel. Rankwell intègre cette dimension dans chaque stratégie de contenu pour le secteur optique.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un opticien ?',
        answer:
          'Un blog est un levier efficace s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des clients : comment choisir ses verres progressifs, quand changer de lentilles, quels traitements de verres existent. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne qui positionnent l\'opticien comme expert de confiance.',
      },
      {
        question: 'Comment un opticien peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un opticien doit accumuler des signaux de notoriété sur le web : présence dans les annuaires de réseaux mutualistes, avis Google nombreux et récents, profil Google Business optimisé, contenus riches et factuels sur son site (grilles tarifaires, guides par spécialité). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un opticien ?',
        answer:
          'Le SEO local cible les requêtes « opticien + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations dans les annuaires mutualistes. Le SEO national vise des requêtes génériques (« meilleur opticien », « lunettes de vue ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon le nombre de points de vente et l\'ambition de l\'opticien.',
      },
      {
        question: 'Les réseaux mutualistes (Kalixia, Santéclair) suffisent-ils pour être visible en ligne ?',
        answer:
          'Les annuaires de réseaux mutualistes sont utiles pour capter les clients cherchant un opticien agréé, mais ils créent une dépendance : le magasin n\'est qu\'une ligne parmi des centaines. Un site propre bien référencé permet de contrôler son image, de mettre en avant ses spécialités et de convertir directement. Rankwell aide les opticiens à bâtir une autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre magasin d\'optique visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
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
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Bijoutier', href: '/agence-geo-seo/secteur/bijoutier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Optician',
};

export default data;
