/**
 * DATA : Page Secteur Cliniques (FR)
 * Route : /agence-geo-seo/secteur/clinique
 *
 * Données Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'clinique',
    title: 'Agence GEO & SEO pour Cliniques - Rankwell',
    description:
      'Rankwell accompagne les cliniques privées dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la santé.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Cliniques' },
    ],
    title: 'GEO & SEO Clinique : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs patients cherchent une clinique sur Google et dans les réponses de ChatGPT ou Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux exigences du secteur de la santé privée.',
    ctaText: 'Demander un audit GEO & SEO clinique',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les cliniques',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">65 % des recherches liées aux cliniques contiennent un nom de ville ou « autour de moi »</strong>. Le patient compare les établissements via les palmarès annuels (Le Point, Le Figaro), les avis Google et les données HAS. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la réputation en ligne conditionne directement le choix de l\'établissement.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google avec le plus haut niveau d\'exigence E-E-A-T</strong>. Chaque contenu doit démontrer une expertise médicale vérifiable (certifications HAS, accréditations, publications scientifiques). Le Code de la santé publique interdit toute promesse thérapeutique et impose une information loyale du patient.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, Elsan, Ramsay Santé et scope.sante.fr (HAS)</strong> dominent les SERP, renforcés par les palmarès annuels des magazines. Les grands groupes captent la visibilité par leur volume de pages et leur autorité de domaine. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur santé, une clinique indépendante reste invisible.',
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
      { keyword: 'clinique', volume: 16000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'clinique autour de moi', volume: 2300, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'clinique privée', volume: 700, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'tarif accouchement clinique privée', volume: 500, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'clinique esthétique paris', volume: 350, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'prix opération cataracte clinique privée', volume: 250, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'clinique privée paris', volume: 200, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'clinique privée lyon', volume: 200, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'meilleure clinique privée paris', volume: 150, intent: 'locale', difficulty: 'faible' },
      { keyword: 'clinique privée autour de moi', volume: 100, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de patients recherchent « clinique autour de moi » ou « clinique privée Paris » sur Google. Ces requêtes représentent autant de patients potentiels qui comparent les établissements, consultent les avis et les données HAS. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre clinique n\'y figure pas, ces patients choisissent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les cliniques',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et concurrentielles du secteur de la santé privée.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site de la clinique, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages spécialités et praticiens.',
        items: [
          'Structure des pages par pôle médical et spécialité',
          'Balises schema.org MedicalClinic et MedicalOrganization',
          'Performance et Core Web Vitals',
          'Crawl et indexation des fiches praticiens',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de la clinique dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la clinique',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu médical',
          'Benchmark concurrentiel sur les requêtes IA santé',
        ],
      },
      {
        title: 'Étude de marché & mots-clés santé',
        subtitle: 'Cartographie des requêtes par spécialité médicale et zone géographique. Identification des combinaisons spécialité + ville à fort potentiel.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur la santé',
          'Volumes de recherche réels par pôle médical',
          'Requêtes tarifaires (prix opération, tarif hospitalisation)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page spécialité > page praticien > prise de rendez-vous',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par pôle médical',
        ],
      },
      {
        title: 'Stratégie de contenu médical',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise médicale de la clinique, rédigés pour être citables par les LLM et conformes au Code de la santé publique.',
        items: [
          'Guides patients et FAQ répondant aux PAA Google',
          'Phrases factuelles auto-suffisantes avec données chiffrées (taux de réussite, volumes d\'actes)',
          'Respect du Code de la santé publique et de l\'interdiction de publicité thérapeutique',
        ],
      },
      {
        title: 'Autorité & netlinking santé',
        subtitle: 'Développement de l\'autorité via les annuaires santé qualifiés et les publications spécialisées.',
        items: [
          'Inscription sur scope.sante.fr (HAS), Ameli.fr, Doctolib',
          'Mentions dans les palmarès annuels (Le Point, Le Figaro Santé)',
          'Publications dans la presse médicale et partenariats institutionnels',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de la clinique pour capter les requêtes locales « clinique + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale MedicalClinic + catégories secondaires par spécialité',
          'Gestion des avis patients et stratégie de collecte après hospitalisation',
          'Photos du plateau technique, des chambres et des équipements',
          'Citations NAP cohérentes sur les annuaires santé (Ameli, PagesJaunes Santé)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité médicale et les demandes de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé et par pôle médical',
          'Trafic organique par spécialité',
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
        description: 'Diagnostic site, pages sp\u00e9cialit\u00e9s/services, conformit\u00e9 YMYL, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates clinique, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage MedicalClinic, Hospital, MedicalSpecialty, FAQPage avec services et praticiens.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages sp\u00e9cialit\u00e9s m\u00e9dicales, fiches interventions, FAQ tarifs/mutuelles, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires sant\u00e9, classements (Le Point, Le Figaro), donn\u00e9es HAS, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par sp\u00e9cialit\u00e9, trafic organique, demandes de RDV/admission attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre clinique dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quelle clinique privée recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre clinique n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quelle clinique privée recommandes-tu à Paris ? » : le LLM ne recommande pas de clinique en particulier. Il fournit une liste de 6 à 8 critères de sélection (accréditation HAS, spécialisation, conventionnement secteur 1 ou 2, avis patients) et renvoie vers les palmarès annuels du Point et du Figaro Santé. Il cite 3 à 4 cliniques parisiennes connues en tant qu\'exemples, pas en tant que recommandations.</p><h4>Requêtes d\'information</h4><p>« Comment choisir une bonne clinique ? » : le LLM génère un guide structuré en 6 à 8 critères sans citer de clinique ni de source externe. Les critères couvrent l\'accréditation HAS, le taux d\'infections nosocomiales, la spécialisation du plateau technique et le conventionnement. Les cliniques publiant ce type de contenu éducatif sur leur site peuvent être citées en référence.</p><h4>Requêtes tarifaires</h4><p>« Prix opération clinique privée » : le LLM donne des fourchettes chiffrées par type d\'intervention (prothèse de hanche : 8 000 à 15 000 euros, cataracte : 1 500 à 3 000 euros par oeil). Il distingue le tarif conventionné du dépassement d\'honoraires. Les sites proposant des grilles tarifaires détaillées et structurées en tableau sont cités comme source en priorité.</p><h4>Requêtes locales et Maps</h4><p>Sur « clinique autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cliniques disposant d\'une fiche Google Business Profile complète (catégorie MedicalClinic, avis récents, photos du plateau technique, spécialités listées) apparaissent directement dans la réponse IA géolocalisée.</p>',
    structuredData:
      '<p>Pour les cliniques, les types schema.org recommandés sont : <code>MedicalClinic</code> (type principal), <code>MedicalOrganization</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>MedicalClinic</code> permet à Google et aux LLM d\'identifier précisément les spécialités médicales, la localisation, les praticiens et les avis patients de l\'établissement.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre clinique par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus médicaux), la Légitimité & Citabilité (signaux de confiance externes : HAS, palmarès, presse médicale), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les cliniques',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de clinique ?',
        answer:
          'Le budget SEO pour une clinique dépend du nombre de spécialités médicales et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cliniques démarrent à 2 000 euros par mois pour un pôle médical et une ville, et peuvent atteindre 6 000 à 10 000 euros par mois pour un établissement multi-spécialités en Île-de-France. Le retour sur investissement se mesure en volume de prises de rendez-vous supplémentaires.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour une clinique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 4 et 6 mois. Les requêtes locales de niche (ex : « clinique ophtalmologie Nantes ») se positionnent plus rapidement que les requêtes nationales très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale, en tenant compte du poids des grands groupes de santé sur les SERP.',
      },
      {
        question: 'Le SEO est-il compatible avec la réglementation sanitaire ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec le Code de la santé publique, à condition de respecter l\'interdiction de publicité thérapeutique, de ne pas formuler de promesses de résultats médicaux et de fournir une information loyale et objective au patient. Rankwell connaît ces contraintes réglementaires propres aux établissements de soins et adapte chaque stratégie en conséquence, en s\'appuyant sur du contenu éducatif validé par les praticiens.',
      },
      {
        question: 'Faut-il un blog médical pour améliorer le référencement d\'une clinique ?',
        answer:
          'Un blog médical est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (inspirées des PAA Google), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne (guides préopératoires, FAQ par spécialité, comparatifs entre techniques).',
      },
      {
        question: 'Comment une clinique peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une clinique doit accumuler des signaux de notoriété sur le web : présence dans les palmarès santé (Le Point, Le Figaro), données HAS positives sur scope.sante.fr, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une clinique ?',
        answer:
          'Le SEO local cible les requêtes « clinique + spécialité + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations NAP sur les annuaires santé. Le SEO national vise des requêtes génériques (« meilleure clinique chirurgie esthétique ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon le positionnement et le rayonnement géographique de la clinique.',
      },
      {
        question: 'Doctolib et les palmarès suffisent-ils pour être visible en ligne ?',
        answer:
          'Les plateformes comme Doctolib et les palmarès annuels sont utiles pour la visibilité initiale, mais ils créent une dépendance : la clinique n\'est qu\'un profil parmi des centaines. Un site propre bien référencé permet de contrôler son image, de présenter son plateau technique et de convertir directement les visiteurs en patients. Rankwell aide les cliniques à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes tierces.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre clinique visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
        { label: 'SEO Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
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
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Kinésithérapeute', href: '/agence-geo-seo/secteur/kinesitherapeute' },
    ],
  },

  // Schema.org type principal
  schemaType: 'MedicalClinic',
};

export default data;
