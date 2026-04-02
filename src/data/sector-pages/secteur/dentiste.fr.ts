/**
 * DATA : Page Secteur Dentistes (FR)
 * Route : /agence-geo-seo/secteur/dentiste
 *
 * Données Ahrefs Keywords Explorer, mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'dentiste',
    title: 'Agence GEO & SEO pour Dentistes - Rankwell',
    description:
      'Rankwell accompagne les cabinets dentaires dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur dentaire.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Dentistes' },
    ],
    title: 'GEO & SEO Dentiste : visibilité Google & moteurs IA',
    subtitle:
      'Doctolib capte la majorité du trafic dentaire en ligne. Nos experts conçoivent des stratégies de référencement GEO & SEO qui permettent à votre cabinet de reprendre le contrôle de sa visibilité sur Google et dans les réponses des moteurs IA.',
    ctaText: 'Demander un audit GEO & SEO dentiste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les dentistes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches dentaires sont géolocalisées</strong> (« dentiste autour de moi », « cabinet dentaire Paris »). Les patients choisissent dans un rayon de 15 minutes : c\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité dans le Local Pack et les réponses IA géolocalisées détermine le nombre de nouveaux patients.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL</strong> par Google : exigence E-E-A-T maximale. Chaque page doit être attribuée à un praticien identifiable (Ordre, RPPS). Le Code de déontologie (article R.4127-215) interdit la publicité directe et impose des contenus informatifs sourcés.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, Denteo, Doctissimo, Pages Jaunes</strong> monopolisent les premières positions Google. Doctolib capte 70 à 80 % de la visibilité sur « dentiste + ville ». Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte santé, un cabinet reste invisible face à ces plateformes.',
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
    title: 'Ce que vos futurs patients tapent sur Google',
    entries: [
      { keyword: 'dentiste', volume: 71000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'urgence dentaire', volume: 26000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'blanchiment dentaire', volume: 20000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'dentiste autour de moi', volume: 14000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'cabinet dentaire', volume: 12000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'dentiste de garde', volume: 5300, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'implant dentaire prix', volume: 3400, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'dentiste toulouse', volume: 3000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'couronne dentaire prix', volume: 2500, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'dentiste paris', volume: 2500, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 130 000 recherches combinent requêtes géolocalisées (« dentiste autour de moi », « dentiste toulouse »), urgences (« urgence dentaire », « dentiste de garde ») et soins spécifiques (« implant dentaire prix », « blanchiment dentaire »). La majorité des patients cliquent sur les 3 premiers résultats, ou suivent la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients prennent rendez-vous chez un confrère.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les dentistes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur dentaire et aux exigences YMYL de Google.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du cabinet, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages de soins.',
        items: [
          'Structure des pages par type de soin (implantologie, orthodontie, parodontologie)',
          'Balises schema.org Dentist et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages praticiens',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet dentaire',
          'Mesure de la légitimité et citabilité du praticien',
          'Évaluation de la densité factuelle du contenu santé',
          'Benchmark concurrentiel sur les requêtes IA dentaires',
        ],
      },
      {
        title: 'Étude de marché & mots-clés dentaires',
        subtitle: 'Cartographie des requêtes par type de soin et zone géographique. Identification des « zones blanches » à fort potentiel où la concurrence Doctolib est plus faible.',
        items: [
          'Combinaisons soin + ville à faible concurrence (ex : « implant dentaire Lyon »)',
          'Analyse des requêtes posées aux moteurs IA sur les soins dentaires',
          'Volumes de recherche réels par spécialité dentaire',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page soin → page praticien → page prise de rendez-vous',
          'Requête principale + 3-5 requêtes secondaires par page de soin',
          'Optimisation des balises title, meta, Hn pour chaque acte dentaire',
        ],
      },
      {
        title: 'Stratégie de contenu santé dentaire',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du cabinet, rédigés pour être citables par les LLM tout en respectant le Code de déontologie dentaire.',
        items: [
          'Guides patients et FAQ répondant aux PAA Google (« est-ce que les implants font mal ? »)',
          'Phrases factuelles auto-suffisantes avec données chiffrées sur les soins',
          'Respect du Code de déontologie : contenu informatif, pas promotionnel',
        ],
      },
      {
        title: 'Autorité & netlinking santé',
        subtitle: 'Développement de l\'autorité du cabinet via les annuaires dentaires qualifiés et les publications santé spécialisées.',
        items: [
          'Ordre national des chirurgiens-dentistes, Denteo, annuaire ADF',
          'Publications dans la presse santé spécialisée',
          'Partenariats avec des sites institutionnels (ARS, UFSBD)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « dentiste + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Dentist + catégories secondaires (Orthodontiste, Implantologue)',
          'Gestion des avis patients et stratégie de collecte post-consultation',
          'Photos du cabinet, équipements, horaires et attributs (accessible PMR, parking)',
          'Citations NAP cohérentes sur les annuaires santé (Doctolib, Denteo, Pages Jaunes)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de soin et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé dentaire',
          'Trafic organique par page de soin',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3×3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic du site du cabinet dentaire : vitesse de chargement, indexation, balisage, architecture des pages de soins.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes dentaires dans ChatGPT et Perplexity, benchmark confrères, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage Dentist, MedicalOrganization, FAQPage, BreadcrumbList avec spécialités et horaires.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages de soins (implants, orthodontie, blanchiment), articles patient, FAQ, intégration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires santé, blogs dentaires, Doctolib, presse santé locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par page de soin, trafic organique, prises de RDV attribuées au canal SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dentaire dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel dentiste recommandes-tu à Lyon pour un implant ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes locales : « quel dentiste à Toulouse ? », « meilleur dentiste pour implants à Paris ? »</h4>' +
      '<p>Claude, Gemini et Perplexity refusent de citer un dentiste nommément. Le secteur dentaire est classé YMYL : les LLM appliquent un filtre de prudence maximal et renvoient systématiquement vers <strong>Doctolib, Google Maps et l\'annuaire de l\'Ordre des chirurgiens-dentistes</strong>. Sur 5 requêtes testées, 0 nom de praticien cité. C\'est le pattern le plus marqué du secteur santé.</p>' +
      '<p>L\'exception notable : <strong>ChatGPT avec Search activé</strong>. Sur « dentiste autour de moi ouvert le samedi » ou « quel dentiste à Toulouse ? », ChatGPT affiche une carte Maps avec des cabinets réels (noms, adresses, notes, horaires). Les cabinets avec une fiche Google Business Profile complète apparaissent directement dans la réponse IA.</p>' +
      '<h4>Requêtes informationnelles : « comment choisir un bon dentiste ? », « dentiste vs orthodontiste »</h4>' +
      '<p>Tous les LLM génèrent un guide structuré en critères numérotés (inscription à l\'Ordre, conventionnement, avis patients, spécialités, équipement). Aucun praticien n\'est cité. Le cabinet dont le site fournit ce type de contenu expert (guides patients, FAQ détaillées sur les soins, comparatifs de spécialités) peut être extrait comme source par le LLM.</p>' +
      '<h4>Ce qui déclenche la visibilité dans les réponses IA</h4>' +
      '<p>Les LLM recommandent Doctolib dans 4 requêtes sur 5 et Google Maps dans 3 sur 5. Être bien référencé sur ces plateformes = visibilité indirecte dans les réponses IA. Sur le site propre du cabinet, ce sont les <strong>contenus informatifs et factuels</strong> (guides implantologie, FAQ blanchiment, pages par spécialité) qui génèrent la citabilité, pas les pages promotionnelles. Les avis patients récents sont mentionnés comme critère de choix dans 3 requêtes sur 5.</p>',
    structuredData:
      '<p>Pour les cabinets dentaires, les types schema.org recommandés sont : <code>Dentist</code> (type principal), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Dentist</code> permet à Google et aux LLM d\'identifier précisément les spécialités du praticien (implantologie, orthodontie, parodontologie), la localisation du cabinet et les avis patients.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet dentaire par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus santé), la Légitimité & Citabilité (signaux de confiance externes : Ordre des dentistes, avis, presse santé), et la Densité Factuelle (richesse des données structurées et des entités nommées liées aux actes dentaires).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les dentistes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de cabinet dentaire ?',
        answer:
          'Le budget SEO pour un cabinet dentaire dépend du nombre de spécialités proposées et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cabinets dentaires démarrent à 1 200 €/mois pour un cabinet mono-praticien sur une ville, et peuvent atteindre 3 500-5 000 €/mois pour un centre dentaire multi-praticiens en zone urbaine concurrentielle.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO dentaire ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « parodontologue Angers ») sont plus rapides à positionner que les requêtes génériques très concurrentielles comme « dentiste Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau d\'autorité actuel de votre site.',
      },
      {
        question: 'Le SEO est-il compatible avec le Code de déontologie des chirurgiens-dentistes ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de déontologie (articles R.4127-215 à R.4127-225 du CSP), à condition de respecter les règles : pas de publicité directe, pas de comparaison avec d\'autres praticiens, pas de promesses de résultats thérapeutiques. Les contenus doivent rester informatifs et éducatifs. Rankwell connaît ces contraintes déontologiques propres aux chirurgiens-dentistes et adapte chaque stratégie de contenu en conséquence.',
      },
      {
        question: 'Faut-il un blog santé pour améliorer le référencement d\'un cabinet dentaire ?',
        answer:
          'Un blog santé est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles de patients (« est-ce qu\'un implant dentaire fait mal ? », « à quel âge commencer l\'orthodontie ? »), démontrer une expertise médicale vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois, ciblant des requêtes informationnelles de patients.',
      },
      {
        question: 'Comment un dentiste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet dentaire doit accumuler des signaux de notoriété : présence sur les annuaires santé (Doctolib, Denteo, Ordre des dentistes), avis patients récents et positifs, profil Google Business optimisé, contenus riches et factuels sur les soins proposés. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour les praticiens de santé.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un dentiste ?',
        answer:
          'Le SEO local cible les requêtes « dentiste + ville » et « cabinet dentaire autour de moi », et s\'appuie sur Google Business Profile, les avis patients et les citations dans les annuaires santé. Le SEO national vise des requêtes génériques comme « meilleur implantologue » et nécessite du contenu éducatif à forte autorité médicale. Pour un cabinet dentaire, le SEO local représente 80-90 % du potentiel. Rankwell combine les deux approches selon la stratégie du cabinet.',
      },
      {
        question: 'Doctolib suffit-il pour être visible en tant que dentiste ?',
        answer:
          'Doctolib est essentiel pour la prise de rendez-vous, mais il crée une dépendance : votre cabinet n\'est qu\'un profil parmi des milliers, sans contrôle sur le classement ni sur l\'image projetée. Un site propre bien référencé permet de se différencier par ses spécialités (implantologie, esthétique dentaire), de contrôler son image et de convertir directement les patients. Rankwell aide les cabinets dentaires à bâtir une autorité propre grâce à une stratégie de référencement SEO & GEO indépendante de Doctolib.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet dentaire visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur dentaire.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
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
        { label: 'E-E-A-T', href: '/glossaire/eeat' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
      { label: 'Psychologue', href: '/agence-geo-seo/secteur/psychologue' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Dentist',
};

export default data;
