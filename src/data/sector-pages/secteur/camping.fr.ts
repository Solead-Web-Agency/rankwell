/**
 * DATA : Page Secteur Campings (FR)
 * Route : /agence-geo-seo/secteur/camping
 *
 * Contenu adapté au secteur de l'hôtellerie de plein air.
 * Mots-clés Ahrefs (country: fr) - mars 2026.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'camping',
    title: 'Agence GEO & SEO pour Campings - Rankwell',
    description:
      'Rankwell accompagne les campings dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour l\'hôtellerie de plein air.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Campings' },
    ],
    title: 'GEO & SEO Camping : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs vacanciers comparent sur Google et interrogent ChatGPT avant de réserver. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées à la saisonnalité et aux spécificités de l\'hôtellerie de plein air.',
    ctaText: 'Demander un audit GEO & SEO camping',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les campings',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches camping associent une destination géographique</strong>. La décision de réservation se joue entre les 3 premiers résultats Google, la fiche Maps ou la recommandation d\'un moteur IA. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où chaque région concentre des dizaines de campings concurrents sur les mêmes requêtes saisonnières.',
    constraints:
      '<strong class="text-secondary dark:text-accent">70 % du chiffre d\'affaires se concentre entre mai et septembre</strong>. Un camping qui commence son SEO en juin a déjà perdu la haute saison. Le classement en étoiles (1 à 5), la distinction camping/glamping et la réglementation HPA ajoutent des couches de complexité que les moteurs IA peinent à restituer.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Campings.com, Camping.fr, Capfun, Sandaya, Yelloh! Village, Tohapi</strong> dominent les requêtes transactionnelles et prélèvent des commissions sur chaque réservation. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un camping indépendant reste invisible face à ces agrégateurs.',
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
      { keyword: 'camping', volume: 141000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'camping argeles sur mer', volume: 20000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'camping autour de moi', volume: 15000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'camping bretagne', volume: 14000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'camping vendée', volume: 13000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'camping ardeche', volume: 13000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'camping corse', volume: 12000, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'camping sud de la france', volume: 9400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'camping bord de mer', volume: 6100, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'meilleur camping de france', volume: 2000, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de vacanciers tapent « camping » suivi d\'une région, d\'un littoral ou de « autour de moi ». La requête générique « camping » dépasse 141 000 recherches mensuelles, et chaque variante locale (Ardèche, Bretagne, Vendée, Corse) génère entre 12 000 et 20 000 recherches. Si votre établissement n\'apparaît pas dans les 3 premiers résultats ou dans la réponse d\'un moteur IA, ces vacanciers réservent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les campings',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de l\'hôtellerie de plein air.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation. Attention particulière aux pages hébergements, tarifs et galeries photos.',
        items: [
          'Structure des pages par type d\'hébergement (emplacements, mobil-homes, chalets, glamping)',
          'Balises schema.org LodgingBusiness et Campground',
          'Performance et Core Web Vitals (galeries photos lourdes)',
          'Crawl et indexation des modules de réservation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du camping dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du camping (contenu destination, activités, équipements)',
          'Mesure de la légitimité et citabilité face aux chaînes (Capfun, Sandaya, Yelloh!)',
          'Évaluation de la densité factuelle du contenu (tarifs, classement, capacité)',
          'Benchmark concurrentiel sur les requêtes IA de la destination',
        ],
      },
      {
        title: 'Étude de marché & mots-clés tourisme',
        subtitle: 'Cartographie des requêtes par destination, type d\'hébergement et saison. Identification des « zones blanches » saisonnières à fort potentiel.',
        items: [
          'Combinaisons destination + type d\'hébergement + critère (piscine, bord de mer, famille)',
          'Analyse des requêtes posées aux moteurs IA sur la destination',
          'Volumes de recherche réels par saison (basse, moyenne, haute)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du vacancier et le crawl Google.',
        items: [
          'Page destination → page hébergement → module de réservation',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn intégrant région et type d\'hébergement',
        ],
      },
      {
        title: 'Stratégie de contenu tourisme',
        subtitle: 'Création de contenus destination démontrant l\'expertise locale du camping, rédigés pour être citables par les LLM.',
        items: [
          'Guides destination et FAQ répondant aux PAA Google (« que faire en Ardèche », « plages Vendée »)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (capacité, équipements, distances)',
          'Contenus saisonniers anticipés (publiés 3 à 4 mois avant la haute saison)',
        ],
      },
      {
        title: 'Autorité & netlinking tourisme',
        subtitle: 'Développement de l\'autorité via les annuaires touristiques qualifiés et les partenariats locaux.',
        items: [
          'Camping.fr, Campings.com, FFCC (Fédération Française de Camping et Caravaning)',
          'Offices de tourisme et comités départementaux du tourisme',
          'Partenariats avec des blogs voyage et guides touristiques régionaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du camping pour capter les requêtes locales « camping + destination » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Campground + catégories secondaires (RV park, glamping)',
          'Gestion des avis clients et stratégie de collecte post-séjour',
          'Photos professionnelles (drone, piscine, hébergements, vues), horaires saisonniers, attributs',
          'Citations NAP cohérentes sur les annuaires touristiques et plateformes de réservation',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type d\'hébergement et les réservations générées.',
        items: [
          'Positions Google par mot-clé et par destination',
          'Trafic organique par page hébergement et par saison',
          'Score GEO : visibilité dans les moteurs IA',
          'Réservations directes et taux de conversion',
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
        description: 'Diagnostic du site : pages emplacements, mobil-homes, tarifs, galeries photos et module de r\u00e9servation. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates camping, benchmark contre 3 \u00e0 5 \u00e9tablissements concurrents et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Campground, LodgingBusiness et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec \u00e9quipements, activit\u00e9s et types d\'h\u00e9bergement.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages h\u00e9bergements, guides destination et activit\u00e9s, articles saisons et FAQ. Int\u00e9gration CMS ou FTP et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis portails camping, blogs vacances et presse tourisme. Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, r\u00e9servations directes attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre camping dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel camping recommandes-tu en Ardèche ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre camping n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal de réservation.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel camping recommandes-tu en Ardèche ? » : le LLM cite 5 à 7 campings par nom, avec classification en étoiles, équipements clés et localisation. Les établissements cités disposent systématiquement d\'une fiche Google Business Profile riche (photos, avis, note supérieure à 4,0) et d\'une présence sur les comparateurs (Camping.fr, Campings.com).</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon camping ? » : le LLM produit un guide structuré en 6 à 8 critères (localisation, équipements, classement étoiles, avis clients, budget, activités enfants, proximité mer ou montagne). Aucun camping n\'est cité. Le camping qui publie ce type de contenu sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix emplacement camping 4 étoiles » : le LLM fournit des fourchettes (25 à 55 euros par nuit pour un emplacement nu, 50 à 120 euros par nuit pour un mobil-home selon la saison). Il distingue basse et haute saison, et précise que les campings littoraux PACA ou Corse pratiquent des tarifs 30 à 50 % supérieurs à la moyenne nationale.</p><h4>Requêtes locales et Maps</h4><p>Sur « camping autour de moi avec piscine », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les campings disposant d\'une fiche Google Business Profile complète (catégorie Campground, photos récentes, avis et note) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les campings, les types schema.org recommandés sont : <code>Campground</code> (type principal), <code>LodgingBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Campground</code> permet à Google et aux LLM d\'identifier précisément le type d\'hébergement, la localisation, le classement étoiles et les équipements du camping.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre camping par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus destination et hébergements), la Légitimité & Citabilité (signaux de confiance externes : avis, annuaires touristiques, mentions presse), et la Densité Factuelle (richesse des données structurées : tarifs, capacité, équipements, classement).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les campings',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de camping ?',
        answer:
          'Le budget SEO pour un camping dépend du nombre de destinations ciblées, du nombre de types d\'hébergements et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les campings démarrent à 1 500 euros par mois pour un établissement mono-site, et peuvent atteindre 4 000 à 7 000 euros par mois pour un groupe multi-campings visant plusieurs régions.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO camping ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. La saisonnalité impose de lancer le travail SEO au plus tard en octobre pour être positionné avant la saison suivante. Les requêtes de niche (« camping avec piscine couverte Morbihan ») sont plus rapides à positionner que les requêtes génériques régionales. Rankwell fournit un calendrier prévisionnel aligné sur la saisonnalité touristique.',
      },
      {
        question: 'Le classement en étoiles influence-t-il le référencement d\'un camping ?',
        answer:
          'Le classement Atout France (1 à 5 étoiles) n\'est pas un facteur de ranking Google direct, mais il influence le taux de clic et la confiance des vacanciers. Les moteurs IA comme ChatGPT mentionnent systématiquement la classification étoiles dans leurs recommandations. Un camping dont le classement est correctement balisé en schema.org bénéficie d\'une meilleure visibilité dans les résultats enrichis Google. Rankwell intègre cette dimension dans chaque audit.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un camping ?',
        answer:
          'Un blog destination est un levier puissant s\'il est bien exécuté. Les articles doivent répondre aux questions réelles des vacanciers (« que faire en Ardèche en famille », « plages accessibles Vendée »), démontrer la connaissance du territoire et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, publiés 3 à 4 mois avant la haute saison pour capter le trafic de planification.',
      },
      {
        question: 'Comment un camping peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un camping doit accumuler des signaux de notoriété sur le web : présence sur les annuaires touristiques (Camping.fr, FFCC), avis Google récents et positifs, mentions dans la presse et les blogs voyage, contenus riches et factuels sur son site (équipements, tarifs, activités). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un camping ?',
        answer:
          'Le SEO local cible les requêtes « camping + destination » (Ardèche, Vendée, Corse) et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires touristiques. Le SEO national vise des requêtes génériques (« meilleur camping de France », « camping 5 étoiles ») et nécessite du contenu destination à forte autorité. Rankwell combine les deux approches selon la stratégie et la zone de chalandise du camping.',
      },
      {
        question: 'Les plateformes comme Campings.com suffisent-elles pour remplir un camping ?',
        answer:
          'Les plateformes de réservation (Campings.com, Camping.fr, Pitchup) sont utiles pour la visibilité initiale, mais elles créent une dépendance : le camping n\'est qu\'un établissement parmi des milliers, et chaque réservation génère une commission. Un site propre bien référencé permet de recevoir des réservations directes sans commission, de contrôler son image et de construire une autorité durable. Rankwell aide les campings à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des agrégateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre camping visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à la saisonnalité de votre activité.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Spa', href: '/agence-geo-seo/secteur/spa' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
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
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Bar', href: '/agence-geo-seo/secteur/bar' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Campground',
};

export default data;
