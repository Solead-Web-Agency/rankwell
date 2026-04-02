/**
 * DATA : Page Secteur Pharmacies (FR)
 * Route : /agence-geo-seo/secteur/pharmacie
 *
 * Mots-clés Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'pharmacie',
    title: 'Agence GEO & SEO pour Pharmacies - Rankwell',
    description:
      'Rankwell accompagne les pharmacies dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur pharmaceutique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Pharmacies' },
    ],
    title: 'GEO & SEO Pharmacie : visibilité Google & moteurs IA',
    subtitle:
      'Vos patients cherchent une pharmacie ouverte, un service de garde ou un conseil santé : sur Google, dans Google Maps et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes réglementaires de l\'officine.',
    ctaText: 'Demander un audit GEO & SEO pharmacie',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les pharmacies',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches liées aux pharmacies sont géolocalisées ou contiennent un marqueur d\'urgence</strong> (« pharmacie de garde aujourd\'hui », « pharmacie ouverte dimanche »). Le patient cherche une officine accessible immédiatement, sur mobile. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la fiche Google Business Profile et les horaires à jour sont le premier critère de visibilité.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google avec exigence E-E-A-T maximale</strong>. Le Code de la santé publique (articles L.5125-31 et suivants) interdit la publicité directe, impose la mention du pharmacien titulaire et restreint les allégations thérapeutiques. Les pharmacies en ligne doivent afficher le logo commun européen et l\'agrément ARS.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Google Maps, le 3237, monpharmacien.com et les plateformes de parapharmacie en ligne (Pharma GDD, Shop Pharmacie)</strong> captent une part croissante du trafic. Les pharmacies en ligne agréées dominent les requêtes transactionnelles produit. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une officine reste invisible face à ces plateformes.',
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
      { keyword: 'pharmacie de garde', volume: 144000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'pharmacie de garde aujourd\'hui', volume: 56000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'pharmacie à proximité', volume: 36000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'pharmacie en ligne', volume: 26000, intent: 'commerciale', difficulty: 'très élevée' },
      { keyword: 'pharmacie ouverte', volume: 24000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'pharmacie autour de moi', volume: 14000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'pharmacie ouverte dimanche', volume: 13000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'test covid pharmacie', volume: 11000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'pharmacie de garde marseille', volume: 9200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'pharmacie de garde paris', volume: 4000, intent: 'locale', difficulty: 'moyenne' },
    ],
    interpretation:
      'Chaque mois, des centaines de milliers de recherches locales comme « pharmacie de garde » ou « pharmacie ouverte dimanche » représentent des patients en besoin immédiat. La majorité clique sur le premier résultat Maps ou suit la recommandation d\'un moteur IA. Si votre officine n\'apparaît pas avec des horaires à jour et des services clairement listés, ces patients se tournent vers une autre pharmacie.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les pharmacies',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et aux spécificités du secteur pharmaceutique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site de l\'officine, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par univers produit (prescription, OTC, parapharmacie, dispositifs médicaux)',
          'Balises schema.org Pharmacy et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation des fiches produit',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'officine dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la pharmacie',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu santé',
          'Benchmark concurrentiel sur les requêtes IA pharmaceutiques',
        ],
      },
      {
        title: 'Étude de marché & mots-clés pharmaceutiques',
        subtitle: 'Cartographie des requêtes par type de service (garde, vaccination, tests, conseil) et zone géographique. Identification des créneaux horaires à forte demande.',
        items: [
          'Combinaisons service + ville + urgence à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur les médicaments et services',
          'Volumes de recherche réels par catégorie de produit et service',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page service (garde, vaccination, test) vers page pharmacie vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par univers produit',
        ],
      },
      {
        title: 'Stratégie de contenu santé',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise pharmaceutique de l\'officine, rédigés pour être citables par les LLM et conformes au Code de la santé publique.',
        items: [
          'Guides santé et FAQ répondant aux PAA Google (automédication, prévention, conseils saisonniers)',
          'Phrases factuelles auto-suffisantes avec données chiffrées vérifiables',
          'Respect des restrictions du CSP sur les allégations thérapeutiques',
        ],
      },
      {
        title: 'Autorité & netlinking pharmaceutique',
        subtitle: 'Développement de l\'autorité via les annuaires santé qualifiés et les publications spécialisées du secteur.',
        items: [
          'Ordre des pharmaciens, Meddispar, annuairedespharmacies.fr',
          'Mentions dans la presse santé et les sites institutionnels (ARS, ANSM)',
          'Partenariats avec les réseaux de santé locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'officine pour capter les requêtes locales « pharmacie + ville » et les recherches de garde, et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Pharmacy + attributs de services (vaccination, test Covid, click & collect)',
          'Gestion des avis patients et stratégie de collecte',
          'Horaires de garde renseignés et mis à jour, photos de la devanture et de l\'espace conseil',
          'Citations NAP cohérentes sur les annuaires santé et les Pages Jaunes',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de service et les conversions générées (appels, itinéraires, commandes click & collect).',
        items: [
          'Positions Google par mot-clé santé et service',
          'Trafic organique par catégorie de service',
          'Score GEO : visibilité dans les moteurs IA',
          'Conversions : appels, itinéraires Maps, prises de rendez-vous',
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
        description: 'Diagnostic site officine, pages services (garde, vaccination, t\u00e9l\u00e9consultation), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates pharmacie, benchmark concurrents locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Pharmacy, MedicalOrganization, FAQPage avec services et horaires de garde.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages services, articles sant\u00e9/pr\u00e9vention, FAQ horaires et garde, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires pharmacie, blogs sant\u00e9, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par service, trafic organique, visites en officine attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre pharmacie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un patient demande à ChatGPT « quelle pharmacie de garde à Lyon ce soir ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre officine n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de garde et d\'urgence</h4><p>« Quelle pharmacie de garde à Lyon ce soir ? » : le LLM ne cite aucune pharmacie par nom. Il renvoie vers le 3237 (service vocal de l\'Ordre des pharmaciens), le site monpharmacien.com et Google Maps. Les officines ne sont jamais nommées directement dans la réponse textuelle.</p><h4>Requêtes d\'information et de conseil</h4><p>« Comment choisir une bonne pharmacie ? » : le LLM génère un guide structuré en 5 à 7 critères (proximité, horaires, spécialités comme l\'orthopédie ou la dermocosmétique, qualité du conseil, services complémentaires, avis Google). Aucune pharmacie citée nommément. La pharmacie qui publie ces critères sur son site peut être référencée comme source.</p><h4>Requêtes de comparaison</h4><p>« Pharmacie en ligne vs pharmacie physique ? » : le LLM produit un comparatif factuel. Il mentionne la réglementation ARS, le logo commun européen et cite 2 à 3 pharmacies en ligne connues (Pharma GDD, Shop Pharmacie) comme exemples. Les officines physiques avec un site e-commerce agréé bénéficient d\'une double visibilité.</p><h4>Requêtes locales et Maps</h4><p>Sur « pharmacie autour de moi ouverte maintenant », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les officines avec une fiche Google Business Profile complète (horaires de garde à jour, services listés, avis récents) apparaissent directement dans la réponse IA géolocalisée.</p>',
    structuredData:
      '<p>Pour les pharmacies, les types schema.org recommandés sont : <code>Pharmacy</code> (type principal), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Pharmacy</code> permet à Google et aux LLM d\'identifier précisément les services proposés (garde, vaccination, tests), la localisation et les horaires d\'ouverture de l\'officine.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre pharmacie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus santé), la Légitimité & Citabilité (signaux de confiance externes comme l\'Ordre des pharmaciens et l\'ARS), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les pharmacies',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de pharmacie ?',
        answer:
          'Le budget SEO pour une pharmacie dépend du périmètre : site vitrine local, site e-commerce avec parapharmacie, ou les deux. Chez Rankwell, les accompagnements SEO pour les officines démarrent à 1 200 euros par mois pour un site vitrine local, et peuvent atteindre 3 500 à 5 000 euros par mois pour un site e-commerce parapharmacie avec catalogue produit.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pharmaceutique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« pharmacie de garde + ville ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « pharmacie en ligne ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone de chalandise.',
      },
      {
        question: 'Le SEO est-il compatible avec la réglementation pharmaceutique ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de la santé publique, à condition de respecter les articles L.5125-31 et suivants : pas de publicité directe pour les médicaments de prescription, mention obligatoire du pharmacien titulaire, respect des restrictions sur les allégations thérapeutiques. Pour les pharmacies en ligne, l\'agrément ARS et le logo commun européen doivent être visibles. Rankwell connaît ces contraintes et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog santé pour améliorer son référencement ?',
        answer:
          'Un blog santé est un levier puissant s\'il est bien exécuté et conforme à la réglementation. Les articles doivent répondre à des questions réelles des patients (inspirées des PAA Google), démontrer l\'expertise pharmaceutique et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois sur des thématiques saisonnières (allergies, grippe, soleil) ou des guides d\'automédication.',
      },
      {
        question: 'Comment une pharmacie peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une officine doit accumuler des signaux de notoriété sur le web : présence sur les annuaires santé (Ordre des pharmaciens, Pages Jaunes), fiche Google Business Profile complète avec services listés, contenus santé factuels et sourcés sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une pharmacie ?',
        answer:
          'Le SEO local cible les requêtes « pharmacie + ville » ou « pharmacie de garde + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations NAP sur les annuaires santé. Le SEO national vise des requêtes génériques (« pharmacie en ligne », « parapharmacie pas cher ») et nécessite du contenu éducatif à forte autorité et un catalogue produit optimisé. Rankwell combine les deux approches selon le modèle de l\'officine.',
      },
      {
        question: 'Google Maps et le 3237 suffisent-ils pour être visible ?',
        answer:
          'Google Maps et le 3237 sont utiles pour la visibilité de garde, mais ils créent une dépendance : votre officine n\'est qu\'un point parmi des centaines. Un site propre bien référencé permet de contrôler votre image, de présenter vos services spécifiques (orthopédie, dermocosmétique, entretiens pharmaceutiques), de convertir directement et de construire une autorité durable que les annuaires ne peuvent pas retirer. Rankwell aide les pharmacies à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre pharmacie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Prestashop', href: '/agence-geo-seo/cms/prestashop' },
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
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
      { label: 'Opticien', href: '/agence-geo-seo/secteur/opticien' },
      { label: 'Vétérinaire', href: '/agence-geo-seo/secteur/veterinaire' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Pharmacy',
};

export default data;
