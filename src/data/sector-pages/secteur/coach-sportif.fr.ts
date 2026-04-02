/**
 * DATA : Page Secteur Coachs sportifs (FR)
 * Route : /agence-geo-seo/secteur/coach-sportif
 *
 * Mots-clés Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'coach-sportif',
    title: 'Agence GEO & SEO pour Coachs Sportifs - Rankwell',
    description:
      'Rankwell accompagne les coachs sportifs dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le coaching sportif.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Coachs sportifs' },
    ],
    title: 'GEO & SEO Coach Sportif : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients vous cherchent sur Google et interrogent ChatGPT avant de réserver une séance. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au marché ultra-local du coaching sportif.',
    ctaText: 'Demander un audit GEO & SEO coach sportif',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les coachs sportifs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Coach sportif » cumule 16 000 recherches mensuelles, dont 4 400 pour « coach sportif autour de moi »</strong>. Le client cherche un professionnel proche et consulte les avis Google avant de prendre contact. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 premiers résultats du Local Pack et les recommandations d\'un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le coaching sportif exige un diplôme d\'État (BPJEPS, DEJEPS ou licence STAPS) et une carte professionnelle DRAJES</strong>. Les contenus doivent respecter cette réglementation : pas de résultats garantis, pas de conseil médical. Google classe le fitness en catégorie YMYL, ce qui impose un niveau E-E-A-T élevé sur chaque page.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Superprof, Trainme, Coach Hunter, Ownsport et Google Maps</strong> captent la majorité des requêtes transactionnelles. Un coach sans site propre n\'est qu\'un profil parmi des milliers. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un coach indépendant reste invisible face à ces agrégateurs.',
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
      { keyword: 'coach sportif', volume: 16000, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'coach sportif autour de moi', volume: 4400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coach sportif paris', volume: 1100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coaching sportif', volume: 900, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'coach sportif lyon', volume: 900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coach sportif toulouse', volume: 800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coach sportif bordeaux', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'prix coach sportif', volume: 600, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'coach sportif à domicile', volume: 500, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'coach sportif en ligne', volume: 500, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 20 000 recherches portent sur le coaching sportif en France. La requête « coach sportif autour de moi » (4 400 recherches) montre que les clients cherchent un professionnel de proximité, prêt à intervenir rapidement. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre profil n\'y figure pas, ces clients réservent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les coachs sportifs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur du coaching sportif.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site du coach : architecture des pages par spécialité (perte de poids, remise en forme, préparation sportive), vitesse de chargement mobile et facteurs techniques bloquant l\'indexation.',
        items: [
          'Structure des pages par spécialité et zone d\'intervention',
          'Balises schema.org SportsActivityLocation et Person',
          'Performance mobile et Core Web Vitals',
          'Crawl et indexation des pages de prestations',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité du coach dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du coach',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA du coaching',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du coaching',
        subtitle: 'Cartographie des requêtes par spécialité de coaching et zone géographique. Identification des combinaisons « coach sportif + ville » à fort potentiel.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur le coaching',
          'Volumes de recherche réels par type de prestation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du client : page d\'accueil vers spécialité, puis vers zone d\'intervention, puis vers prise de contact.',
        items: [
          'Page spécialité vers page zone vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu fitness',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du coach : guides d\'exercices, conseils nutritionnels de base, FAQ sur les certifications, rédigés pour être citables par les LLM.',
        items: [
          'Guides et FAQ répondant aux PAA Google sur le coaching',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Respect de la réglementation DRAJES et des limites de la profession',
        ],
      },
      {
        title: 'Autorité & netlinking fitness',
        subtitle: 'Développement de l\'autorité via les annuaires et plateformes spécialisées du secteur sport et bien-être.',
        items: [
          'Superprof, Trainme, Coach Hunter, Ownsport',
          'Annuaires fédérations sportives et DRAJES',
          'Publications sur les blogs fitness et magazines sport',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du coach pour capter les requêtes « coach sportif + ville » et « coach sportif autour de moi » dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Personal Trainer + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte post-séance',
          'Photos d\'entraînement, horaires, zone d\'intervention et attributs',
          'Citations NAP cohérentes sur les annuaires fitness',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les prises de contact générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de contact et réservations de séances',
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
        description: 'Diagnostic du site : pages prestations, sp\u00e9cialit\u00e9s, vitesse mobile et indexation. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates coaching sportif, benchmark contre 3 \u00e0 5 concurrents locaux et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage SportsActivityLocation, Person et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec sp\u00e9cialit\u00e9s, certifications et zone d\'intervention.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages coaching (perte de poids, renforcement, posture), articles fitness et nutrition, et FAQ. Int\u00e9gration CMS ou FTP et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires sport, Superprof, blogs fitness et presse. Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, prises de contact attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité de coaching dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel coach sportif recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre profil n\'apparaît dans aucune source citée, vous êtes invisible dans ce nouveau canal d\'acquisition de clients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel coach sportif recommandes-tu à Lyon ? » : le LLM ne cite aucun coach par son nom. Il produit une liste de 5 à 7 critères de sélection (certifications BPJEPS/DEJEPS, spécialisation, avis clients, première séance d\'évaluation) et renvoie vers Superprof, Trainme et Coach Hunter. Le coach qui publie ces preuves de compétence sur son propre site peut être cité en priorité.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon coach sportif ? » : le LLM génère un guide structuré en 6 à 8 critères (diplôme, spécialisation, expérience, avis, méthode de suivi) sans citer de source externe. Les sites publiant des guides factuels détaillés sur ces critères ont la meilleure chance d\'être extraits comme référence.</p><h4>Requêtes tarifaires</h4><p>« Prix séance coach sportif » : le LLM fournit des fourchettes précises (40 à 80 euros la séance à domicile, 50 à 100 euros en salle privée) et mentionne le crédit d\'impôt de 50 % pour les services à la personne. Les sites proposant des grilles tarifaires actualisées et détaillées par formule sont les plus susceptibles d\'être cités.</p><h4>Requêtes locales et Maps</h4><p>Sur « coach sportif autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les coachs disposant d\'une fiche Google Business Profile complète (catégorie Personal Trainer, avis récents, photos d\'entraînement, zone d\'intervention) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les coachs sportifs, les types schema.org recommandés sont : <code>SportsActivityLocation</code> (type principal pour les lieux d\'exercice), <code>Person</code> avec <code>hasOccupation</code> (pour identifier le professionnel), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Person</code> avec la propriété <code>hasCredential</code> permet à Google et aux LLM d\'identifier le diplôme (BPJEPS, DEJEPS), la spécialisation et la zone d\'intervention du coach.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité de coaching par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les coachs sportifs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de coach sportif ?',
        answer:
          'Le budget SEO pour un coach sportif dépend du nombre de spécialités proposées et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les coachs sportifs démarrent à 800 euros par mois pour une spécialité et une ville, et peuvent atteindre 2 500 euros par mois pour un coach multi-spécialités couvrant plusieurs arrondissements parisiens ou une agglomération entière.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un coach sportif ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 5 mois. Les requêtes locales de niche (« coach sportif remise en forme Bordeaux ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « coach sportif à domicile ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone d\'intervention.',
      },
      {
        question: 'Faut-il un diplôme spécifique pour apparaître en tant que coach sportif sur Google ?',
        answer:
          'En France, exercer le coaching sportif contre rémunération exige un diplôme reconnu par l\'État (BPJEPS, DEJEPS, licence STAPS, CQP) et une carte professionnelle délivrée par la DRAJES. Google valorise les profils dont les qualifications sont documentées sur le site (page « À propos », balisage schema.org). Rankwell intègre ces preuves de compétence dans la stratégie SEO et GEO pour renforcer les signaux E-E-A-T.',
      },
      {
        question: 'Faut-il un blog fitness pour améliorer son référencement ?',
        answer:
          'Un blog fitness est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles (inspirées des PAA Google), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne comme « différence coach sportif à domicile et en salle » ou « comment choisir un coach sportif certifié ».',
      },
      {
        question: 'Comment un coach sportif peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un coach sportif doit accumuler des signaux de notoriété sur le web : présence sur les plateformes spécialisées (Superprof, Trainme), avis Google récents et détaillés, contenus factuels sur son site (spécialités, certifications, tarifs). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un coach sportif ?',
        answer:
          'Le SEO local cible les requêtes « coach sportif + ville » ou « coach sportif autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur coach sportif en ligne ») et nécessite du contenu éducatif à forte autorité. Pour un coach indépendant, Rankwell privilégie le SEO local, car 80 % des clients réservent un professionnel dans un rayon de 15 kilomètres.',
      },
      {
        question: 'Superprof et les plateformes de mise en relation suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Superprof ou Trainme sont utiles pour la visibilité initiale, mais elles créent une dépendance : le coach n\'est qu\'un profil parmi des milliers, soumis aux algorithmes de la plateforme et à ses commissions (jusqu\'à 15 %). Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les coachs à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité de coaching visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
        { label: 'SEO Spa', href: '/agence-geo-seo/secteur/spa' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
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
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Barbier', href: '/agence-geo-seo/secteur/barbier' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
    ],
  },

  // Schema.org type principal
  schemaType: 'SportsActivityLocation',
};

export default data;
