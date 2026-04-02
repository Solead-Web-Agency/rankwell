/**
 * DATA : Page Secteur Ostéopathes (FR)
 * Route : /agence-geo-seo/secteur/osteopathe
 *
 * Mots-clés Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'osteopathe',
    title: 'Agence GEO & SEO pour Ostéopathes - Rankwell',
    description:
      'Rankwell accompagne les ostéopathes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de l\'ostéopathie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Ostéopathes' },
    ],
    title: 'GEO & SEO Ostéopathe : visibilité Google & moteurs IA',
    subtitle:
      'Votre cabinet d\'ostéopathie doit apparaître là où vos futurs patients cherchent : sur Google et dans les réponses de ChatGPT ou Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités de l\'ostéopathie.',
    ctaText: 'Demander un audit GEO & SEO ostéopathe',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les ostéopathes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Ostéopathe » cumule 123 000 recherches mensuelles en France</strong>, dont plus de la moitié géolocalisées (« ostéopathe paris », « ostéopathe autour de moi »). Le patient cherche un praticien proche et disponible rapidement, en comparant les avis. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité se joue entre le Local Pack Google et les recommandations des moteurs IA.',
    constraints:
      'L\'ostéopathie est une <strong class="text-secondary dark:text-accent">médecine complémentaire encadrée par le décret n° 2007-435</strong>. Seuls les praticiens inscrits au registre ADELI peuvent exercer sous ce titre protégé. Les contenus web interdisent toute promesse thérapeutique ou revendication de guérison, et imposent la transparence sur les tarifs et limites de la discipline.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, Ostéo2ls, le ROF et Google Maps</strong> captent la majorité du trafic de prise de rendez-vous. Un praticien sans site propre dépend entièrement de ces plateformes. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un cabinet reste un profil parmi des milliers.',
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
      { keyword: 'ostéopathe', volume: 123000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'ostéopathe autour de moi', volume: 11000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ostéopathie', volume: 5300, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'prix ostéopathe', volume: 1400, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'ostéopathe paris', volume: 1300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'remboursement ostéopathe', volume: 1300, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'ostéopathe marseille', volume: 1100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'ostéopathe lyon', volume: 1000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'kiné ostéopathe', volume: 900, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'ostéopathe toulouse', volume: 900, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, « ostéopathe » génère plus de 123 000 recherches, et « ostéopathe autour de moi » en cumule 11 000 supplémentaires. La majorité de ces patients cliquent sur les 3 premiers résultats du Local Pack Google, ou suivent la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients prennent rendez-vous chez un confrère.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les ostéopathes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et au marché local de l\'ostéopathie.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation du cabinet.',
        items: [
          'Structure des pages par spécialité ostéopathique (structurel, viscéral, crânien, pédiatrique)',
          'Balises schema.org MedicalBusiness et Physician',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA en ostéopathie',
        ],
      },
      {
        title: 'Étude de marché & mots-clés ostéopathie',
        subtitle: 'Cartographie des requêtes par spécialité et zone géographique. Identification des combinaisons « ostéopathe + spécialisation + ville » à faible concurrence.',
        items: [
          'Combinaisons spécialité + ville à fort potentiel (ostéopathe sportif Lyon, ostéopathe bébé Bordeaux)',
          'Analyse des requêtes posées aux moteurs IA sur l\'ostéopathie',
          'Volumes de recherche réels par spécialisation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page spécialité (mal de dos, grossesse, sport) vers page praticien vers page rendez-vous',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu ostéopathique',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du praticien, rédigés pour être citables par les LLM et conformes au cadre déontologique.',
        items: [
          'Guides et FAQ répondant aux PAA Google (prix, remboursement, différence kiné/ostéopathe)',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Respect du cadre déontologique : pas de promesse de guérison, transparence sur les limites',
        ],
      },
      {
        title: 'Autorité & netlinking ostéopathie',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels et les publications spécialisées en santé.',
        items: [
          'ROF (Registre des Ostéopathes de France), Doctolib, Ostéo2ls',
          'Publications dans la presse santé et bien-être',
          'Partenariats avec des sites de mutuelles et complémentaires santé',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « ostéopathe + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Osteopath + catégories secondaires par spécialité',
          'Gestion des avis patients et stratégie de collecte post-consultation',
          'Photos du cabinet, horaires, attributs (accessibilité, parking) et posts réguliers',
          'Citations NAP cohérentes sur les annuaires santé',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les demandes de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialité ostéopathique',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de rendez-vous et conversions',
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
        description: 'Diagnostic site du cabinet, pages specialites (structurel, visceral, cranien), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes osteopathie, benchmark confreres, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage MedicalBusiness, Physician, FAQPage avec specialites et motifs de consultation.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages specialites, articles conseils (mal de dos, posture), FAQ remboursement, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires osteopathie (ROF, Doctolib), blogs sante, presse bien-etre, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par specialite, trafic organique, prises de RDV attribuees, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel ostéopathe recommandes-tu à Bordeaux ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel ostéopathe recommandes-tu à Bordeaux ? » : le LLM ne cite aucun praticien par nom. Il fournit une liste de 5 critères de sélection (formation en école agréée, inscription ADELI, spécialisation, avis patients, première consultation d\'écoute) et renvoie vers Doctolib, le ROF et Google Maps.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon ostéopathe ? » ou « ostéopathe vs kinésithérapeute » : le LLM génère un guide structuré en 6 critères ou un comparatif détaillé (accès direct vs prescription, remboursement Sécurité sociale vs mutuelle). Le cabinet qui publie ce type de contenu structuré sur son site peut être cité comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix séance ostéopathe » : le LLM donne des fourchettes chiffrées (50 à 80 euros en province, 70 à 120 euros à Paris) et détaille le fonctionnement du remboursement mutuelle. Les sites proposant des données de prix actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « ostéopathe autour de moi pour mal de dos », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie Osteopath, avis récents, spécialisation indiquée) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets d\'ostéopathie, les types schema.org recommandés sont : <code>MedicalBusiness</code> (type principal), <code>Physician</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>MedicalBusiness</code> permet à Google et aux LLM d\'identifier précisément la spécialité, la localisation et les avis patients du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet d\'ostéopathie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les ostéopathes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'ostéopathe ?',
        answer:
          'Le budget SEO pour un cabinet d\'ostéopathie dépend de la zone géographique et du nombre de spécialités à positionner. Chez Rankwell, les accompagnements SEO pour les ostéopathes démarrent à 800 euros par mois pour une spécialité et une ville, et peuvent atteindre 2 500 à 3 500 euros par mois pour un cabinet multi-praticiens en métropole avec plusieurs spécialisations (sportif, pédiatrique, viscéral).',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO ostéopathie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « ostéopathe sportif Nantes ») sont plus rapides à positionner que les requêtes métropolitaines très concurrentielles comme « ostéopathe Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone.',
      },
      {
        question: 'Le SEO est-il compatible avec le cadre réglementaire de l\'ostéopathie ?',
        answer:
          'Oui. Le décret n° 2007-435 encadre l\'exercice de l\'ostéopathie et le titre est protégé (inscription ADELI obligatoire). Les contenus web doivent éviter toute promesse thérapeutique ou revendication de guérison, et rester transparents sur les tarifs et les limites de la discipline. Rankwell connaît ces contraintes spécifiques et adapte chaque stratégie de contenu en conséquence.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un cabinet d\'ostéopathie ?',
        answer:
          'Un blog santé est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (différence kiné/ostéopathe, prix d\'une séance, remboursement mutuelle) et respecter le cadre déontologique. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles comme « ostéopathie viscérale » ou « ostéopathe pour bébé ».',
      },
      {
        question: 'Comment un ostéopathe peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet doit accumuler des signaux de notoriété sur le web : présence sur le ROF et Doctolib, mentions dans la presse santé, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un ostéopathe ?',
        answer:
          'Le SEO local cible les requêtes « ostéopathe + ville » ou « ostéopathe autour de moi » et s\'appuie sur Google Business Profile, les avis patients et les citations locales. Le SEO national vise des requêtes génériques (« ostéopathie viscérale », « ostéopathe sportif ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie et la zone de chalandise du cabinet.',
      },
      {
        question: 'Doctolib suffit-il pour être visible en tant qu\'ostéopathe ?',
        answer:
          'Doctolib est utile pour la prise de rendez-vous, mais il crée une dépendance : le praticien n\'est qu\'un profil parmi des milliers, sans contrôle sur son image ni sur l\'algorithme de classement interne. Un site propre bien référencé permet de convertir directement, de démontrer son expertise et de construire une autorité durable. Rankwell aide les ostéopathes à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre cabinet visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
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
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Kinésithérapeute', href: '/agence-geo-seo/secteur/kinesitherapeute' },
      { label: 'Psychologue', href: '/agence-geo-seo/secteur/psychologue' },
      { label: 'Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
    ],
  },

  // Schema.org type principal
  schemaType: 'MedicalBusiness',
};

export default data;
