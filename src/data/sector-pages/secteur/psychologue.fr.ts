/**
 * DATA : Page Secteur Psychologues (FR)
 * Route : /agence-geo-seo/secteur/psychologue
 *
 * Mots-clés Ahrefs (mars 2026), auto-test LLM réalisé le 18/03/2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'psychologue',
    title: 'Agence GEO & SEO pour Psychologues - Rankwell',
    description:
      'Rankwell accompagne les psychologues dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la santé mentale.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Psychologues' },
    ],
    title: 'GEO & SEO Psychologue : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs patients vous cherchent sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du métier de psychologue.',
    ctaText: 'Demander un audit GEO & SEO psychologue',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les psychologues',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">76 000 recherches mensuelles sur « psychologue »</strong>, dont 15 000 sur « psychologue autour de moi ». Les patients cherchent par spécialisation et par ville (« psychologue TCC Lyon », « psychologue enfant Nantes »). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 premiers résultats du Local Pack Google et les recommandations des moteurs IA.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google avec exigence E-E-A-T maximale</strong>. Le titre de psychologue est protégé par la loi n°85-772 et requiert un numéro ADELI. Le Code de déontologie interdit les promesses de guérison, impose le respect du secret professionnel et exige la transparence sur les qualifications et l\'approche thérapeutique.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, MonPsy (CPAM), Pages Jaunes et Psychologue.net</strong> captent la majorité du trafic transactionnel. Le dispositif MonPsy domine les requêtes liées au remboursement des séances. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un cabinet de psychologie reste invisible face à ces plateformes.',
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
      { keyword: 'psychologue autour de moi', volume: 15000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'psychologue paris', volume: 3800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'psychologue emdr', volume: 3500, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'psychologue enfant', volume: 3000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'psychologue lyon', volume: 2300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'psychologue toulouse', volume: 2300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'psychologue tcc', volume: 2200, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'psychologue en ligne', volume: 2200, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'psychologue nantes', volume: 2000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'différence entre psychologue et psychiatre', volume: 2800, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, 15 000 recherches sur « psychologue autour de moi » et des milliers de requêtes locales comme « psychologue toulouse » ou « psychologue lyon » représentent autant de patients potentiels. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces patients consultent un confrère.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les psychologues',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la santé mentale.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation de votre cabinet.',
        items: [
          'Structure des pages par spécialisation (TCC, EMDR, thérapie de couple, enfant)',
          'Balises schema.org MedicalBusiness et Psychologist',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA en santé mentale',
        ],
      },
      {
        title: 'Étude de marché & mots-clés en psychologie',
        subtitle: 'Cartographie des requêtes par spécialisation thérapeutique et zone géographique. Identification des combinaisons à fort potentiel et faible concurrence.',
        items: [
          'Combinaisons spécialisation + ville (« psychologue TCC Lyon », « psychologue enfant Nantes »)',
          'Analyse des requêtes posées aux moteurs IA sur la santé mentale',
          'Volumes de recherche réels par approche thérapeutique',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page spécialisation (TCC, EMDR) vers page psychologue vers page contact/prise de rendez-vous',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu en santé mentale',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du psychologue, rédigés pour être citables par les LLM tout en respectant le Code de déontologie.',
        items: [
          'Guides et FAQ répondant aux PAA Google (anxiété, dépression, burn-out, thérapie enfant)',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Respect strict du Code de déontologie des psychologues (pas de promesses de résultats)',
        ],
      },
      {
        title: 'Autorité & netlinking en psychologie',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les publications spécialisées en santé mentale.',
        items: [
          'Doctolib, Psychologue.net, MonPsy, annuaire du SNP',
          'Publications dans la presse spécialisée (Psychologies Magazine, Le Journal des Psychologues)',
          'Partenariats avec des sites institutionnels (ARS, CPAM)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « psychologue + ville » et « psychologue autour de moi », et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Psychologist + catégories secondaires par spécialisation',
          'Gestion des avis patients et stratégie de collecte (dans le respect du secret professionnel)',
          'Photos du cabinet, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires de santé mentale',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialisation et les demandes de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialisation thérapeutique',
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
        description: 'Diagnostic site du cabinet, conformit\u00e9 YMYL sant\u00e9 mentale, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates psychologie, benchmark confr\u00e8res, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Psychologist, MedicalBusiness, FAQPage avec sp\u00e9cialit\u00e9s (TCC, EMDR, enfant, couple).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages sp\u00e9cialit\u00e9s, articles (anxi\u00e9t\u00e9, d\u00e9pression, stress), FAQ remboursement MonPsy, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires psy (Doctolib, MonPsy CPAM, Psychologue.net), blogs sant\u00e9 mentale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par sp\u00e9cialit\u00e9, trafic organique, prises de RDV attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel psychologue recommandes-tu à Toulouse ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel psychologue recommandes-tu à Toulouse ? » : le LLM ne cite aucun psychologue par nom. Il fournit une liste de 5 à 7 critères de sélection (titre ADELI, spécialisation, avis Google, proximité) et renvoie systématiquement vers les annuaires : Doctolib, MonPsy (CPAM), Pages Jaunes, Syndicat National des Psychologues.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon psychologue ? » : le LLM génère un guide structuré en 6 à 8 critères sans citer de cabinet ni de source externe. Le psychologue qui publie ce type de contenu factuel sur son site (vérification du numéro ADELI, différences entre approches TCC/EMDR/psychanalyse) peut être cité en référence.</p><h4>Requêtes comparatives</h4><p>« Psychologue vs psychiatre vs psychothérapeute ? » : le LLM produit un tableau comparatif détaillé avec formation, prescription, remboursement. Il cite le Code de la santé publique et le décret de 2010. Les sites proposant ce type de comparatif structuré avec des données réglementaires précises sont les sources les plus extractibles.</p><h4>Requêtes tarifaires</h4><p>« Prix séance psychologue » : le LLM donne des fourchettes chiffrées (50 à 120 euros en tarif libre, 30 euros via MonPsy). Les sites publiant des grilles tarifaires actualisées avec la distinction Paris/province ont le plus de chances d\'être cités.</p><h4>Requêtes locales et Maps</h4><p>Sur « psychologue autour de moi pour anxiété », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les psychologues disposant d\'une fiche Google Business Profile complète (catégorie Psychologist, spécialisation dans la description, avis récents) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets de psychologie, les types schema.org recommandés sont : <code>MedicalBusiness</code> (type principal), <code>Psychologist</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>MedicalBusiness</code> avec le sous-type <code>Psychologist</code> permet à Google et aux LLM d\'identifier précisément la spécialisation thérapeutique, la localisation et les avis patients du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus en santé mentale), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les psychologues',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de psychologue ?',
        answer:
          'Le budget SEO pour un psychologue dépend de la zone géographique ciblée et du nombre de spécialisations à positionner (TCC, EMDR, thérapie enfant, thérapie de couple). Chez Rankwell, les accompagnements SEO pour les psychologues démarrent à 1 200 euros par mois pour une spécialisation et une ville, et peuvent atteindre 3 000 à 5 000 euros par mois pour un cabinet multi-spécialisations en Île-de-France.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un psychologue ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (par exemple « psychologue EMDR Nantes ») sont plus rapides à positionner que les requêtes très concurrentielles comme « psychologue Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone géographique.',
      },
      {
        question: 'Le SEO est-il compatible avec le Code de déontologie des psychologues ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de déontologie des psychologues, à condition de respecter certaines règles : pas de promesses de guérison ou de résultats thérapeutiques, respect du secret professionnel dans les témoignages, transparence sur les qualifications (numéro ADELI, diplôme universitaire) et l\'approche thérapeutique. Rankwell connaît ces contraintes et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un cabinet de psychologie ?',
        answer:
          'Un blog en santé mentale est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (inspirées des PAA Google) : « comment gérer une crise d\'anxiété », « quand consulter un psychologue pour son enfant ». Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne, rédigés pour être citables par les moteurs IA.',
      },
      {
        question: 'Comment un psychologue peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un psychologue doit accumuler des signaux de notoriété sur le web : présence sur Doctolib et les annuaires professionnels (SNP, Psychologue.net), mentions dans la presse spécialisée, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un psychologue ?',
        answer:
          'Le SEO local cible les requêtes « psychologue + spécialisation + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations locales. Le SEO national vise des requêtes génériques comme « psychologue en ligne » ou « comment choisir un psychologue » et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie et l\'implantation géographique du cabinet.',
      },
      {
        question: 'Doctolib et MonPsy suffisent-ils pour être visible en tant que psychologue ?',
        answer:
          'Doctolib et le dispositif MonPsy sont utiles pour la visibilité initiale, mais ils créent une dépendance : le psychologue n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de contrôler son image, de détailler son approche thérapeutique, de convertir directement les patients et de construire une autorité durable. Rankwell aide les psychologues à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
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
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
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
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Psychologist',
};

export default data;
