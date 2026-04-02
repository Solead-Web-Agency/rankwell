/**
 * DATA : Page Secteur Médecins (FR)
 * Route : /agence-geo-seo/secteur/medecin
 *
 * Contenu 100 % spécifique au secteur médical (médecins généralistes, cabinets médicaux)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'medecin',
    title: 'Agence GEO & SEO pour Médecins - Rankwell',
    description:
      'Rankwell accompagne les médecins et cabinets médicaux dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur médical.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Médecins' },
    ],
    title: 'GEO & SEO Médecin : visibilité Google & moteurs IA',
    subtitle:
      'Doctolib capte plus de 80 % des clics sur les requêtes médicales locales. Nos experts conçoivent des stratégies de référencement GEO & SEO pour rendre votre cabinet médical visible sur Google et dans les réponses de ChatGPT et Perplexity.',
    ctaText: 'Demander un audit GEO & SEO médecin',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les médecins',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">81 % des requêtes médicales de premier recours contiennent une intention locale</strong> (« médecin généraliste autour de moi », « cabinet médical + ville »). Le patient cherche un praticien disponible à proximité, souvent sur mobile et en urgence. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre Doctolib et le Local Pack Google.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL</strong> par Google : exigence E-E-A-T maximale. Chaque page doit démontrer une expertise vérifiable (Conseil de l\'Ordre, diplômes). Le Code de déontologie (article R.4127-19) interdit la publicité directe et toute promesse thérapeutique.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Doctolib, Maiia, Qare, Ameli.fr</strong> monopolisent les premières positions sur les requêtes médicales. Doctolib référence plus de 340 000 praticiens en France. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée santé, un cabinet reste invisible face à ces plateformes.',
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
      { keyword: 'cabinet médical', volume: 20000, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'médecin généraliste', volume: 11000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'cabinet médical autour de moi', volume: 9800, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'médecin généraliste autour de moi', volume: 5300, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'médecin de garde', volume: 4900, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'médecin généraliste sans rdv', volume: 4200, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'médecin autour de moi', volume: 2500, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'médecin traitant', volume: 2300, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'trouver un médecin généraliste qui prend des nouveaux patients', volume: 2100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'trouver un médecin traitant', volume: 1900, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 20 000 patients cherchent un « cabinet médical » et près de 10 000 un « cabinet médical autour de moi ». Les requêtes d\'urgence (« médecin de garde », « sans rdv ») et de recherche de praticien (« trouver un médecin traitant », « qui prend des nouveaux patients ») représentent un volume cumulé de plus de 60 000 recherches mensuelles. Si votre cabinet n\'apparaît pas dans ces résultats, ces patients prennent rendez-vous ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les médecins',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et déontologiques du secteur médical.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du cabinet, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation par Google et les robots IA.',
        items: [
          'Structure des pages par spécialité médicale et pathologie',
          'Balises schema.org Physician et MedicalOrganization',
          'Performance et Core Web Vitals (mobile prioritaire pour le médical)',
          'Crawl et indexation par Googlebot, GPTBot, ClaudeBot',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du cabinet dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du cabinet médical',
          'Mesure de la légitimité et citabilité du praticien',
          'Évaluation de la densité factuelle du contenu santé',
          'Benchmark concurrentiel sur les requêtes IA médicales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés médicaux',
        subtitle: 'Cartographie des requêtes par spécialité médicale, pathologie et zone géographique. Identification des zones de déserts médicaux à fort potentiel de recherche.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Requêtes « médecin traitant » et « cabinet médical » par bassin de vie',
          'Volumes de recherche réels par pathologie et acte médical',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours patient et le crawl Google.',
        items: [
          'Page spécialité → page praticien → page prise de rendez-vous',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn conformes à la déontologie médicale',
        ],
      },
      {
        title: 'Stratégie de contenu médical',
        subtitle: 'Création de contenus éducatifs santé démontrant l\'expertise du praticien, rédigés pour être citables par les LLM tout en respectant le Code de déontologie médicale.',
        items: [
          'Fiches pathologies et guides de prévention répondant aux PAA Google',
          'Phrases factuelles auto-suffisantes avec données épidémiologiques sourcées',
          'Respect de l\'article R.4127-19 : pas de promesse thérapeutique, pas de publicité',
        ],
      },
      {
        title: 'Autorité & netlinking médical',
        subtitle: 'Développement de l\'autorité via les annuaires de santé qualifiés et les publications médicales.',
        items: [
          'Doctolib, Maiia, Pages Jaunes Santé, Conseil de l\'Ordre',
          'Publications sur des sites de vulgarisation médicale (Vidal, HAS)',
          'Partenariats avec des institutions de santé et universités',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « médecin + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Doctor + catégories secondaires par spécialité (General practitioner)',
          'Gestion des avis patients et stratégie de collecte conforme à la déontologie',
          'Photos du cabinet, horaires de consultation, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires médicaux (Doctolib, Maiia, Ameli)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité médicale et les prises de rendez-vous générées.',
        items: [
          'Positions Google par mot-clé médical',
          'Trafic organique par spécialité et pathologie',
          'Score GEO : visibilité dans les moteurs IA',
          'Prises de rendez-vous et conversions patient',
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
        description: 'Diagnostic complet du site du cabinet médical : conformité YMYL, vitesse de chargement, indexation par Google et les robots IA, balisage HTML et structured data. Chaque frein identifié est classé par priorité.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes médicales clés (ChatGPT, Perplexity, Gemini), benchmark face aux confrères et plateformes comme Doctolib, et Score GEO sur 100 mesurant votre visibilité dans les moteurs IA.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage Physician, MedicalOrganization, MedicalClinic et FAQPage prêt à déployer, incluant spécialités médicales, horaires de consultation, coordonnées et avis patients structurés.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages pathologies, fiches conseils patients, FAQ santé rédigées pour Google et les LLM. Intégration directe dans votre CMS ou via FTP, avec templates conformes à la déontologie médicale.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires santé (Doctolib, Ameli), blogs médicaux et presse santé. Suivi du Domain Rating et de l\'évolution du profil de liens du cabinet.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique par spécialité, prises de rendez-vous Doctolib attribuées au référencement et Score GEO. Un rapport mensuel avec les indicateurs qui comptent.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un patient demande à ChatGPT « quel médecin généraliste recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition de patients.',
    llmBehavior:
      '<h4>Zéro nom de praticien : le secteur le plus verrouillé</h4>' +
      '<p>Sur 5 requêtes testées (« quel médecin généraliste prend de nouveaux patients à Nantes ? », « comment trouver un bon médecin traitant ? », « médecin de garde autour de moi ce soir », « avis médecin Dr Dupont Paris 15e »), <strong>aucun LLM ne cite de nom de médecin</strong>. Le secteur médical est traité comme YMYL maximal : les modèles refusent toute recommandation nominative.</p>' +
      '<h4>Doctolib et Ameli, réponses par défaut</h4>' +
      '<p>Dans 4 réponses sur 5, le LLM redirige vers <strong>Doctolib</strong> (filtre « accepte nouveaux patients », page avis) et <strong>Ameli.fr</strong> (annuaire officiel, parcours de soins). Google Maps est mentionné en complément dans 3 cas sur 5. Le site propre d\'un cabinet n\'apparaît jamais comme destination suggérée.</p>' +
      '<h4>Urgences : mode numéros de téléphone</h4>' +
      '<p>Sur « médecin de garde autour de moi ce soir », le LLM adopte un comportement urgentiste : il donne le <strong>15 (SAMU)</strong>, le <strong>116 117</strong> (régulation médicale) et <strong>SOS Médecins</strong> en priorité, avant toute recherche web.</p>' +
      '<h4>Contenu éducatif : le seul levier de citabilité</h4>' +
      '<p>Sur « médecin généraliste vs spécialiste : quand consulter qui ? », le LLM produit un guide pédagogique sans citer de source. Un cabinet publiant du <strong>contenu médical expert et sourcé</strong> (fiches pathologies, prévention) peut devenir une référence citée sur ces requêtes informationnelles, à condition de respecter l\'article R.4127-19 du Code de déontologie.</p>',
    structuredData:
      '<p>Pour les cabinets médicaux, les types schema.org recommandés sont : <code>Physician</code> (type principal), <code>MedicalOrganization</code>, <code>MedicalClinic</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Physician</code> permet à Google et aux LLM d\'identifier précisément la spécialité médicale, la localisation, les horaires de consultation et les avis patients du praticien.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet médical par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus santé), la Légitimité & Citabilité (signaux de confiance externes : Conseil de l\'Ordre, publications, avis), et la Densité Factuelle (richesse des données structurées et des entités nommées médicales).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les médecins',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de cabinet médical ?',
        answer:
          'Le budget SEO pour un cabinet médical dépend du nombre de praticiens, de la concurrence locale et des spécialités couvertes. Chez Rankwell, les accompagnements SEO pour les cabinets médicaux démarrent à 1 200 €/mois pour un médecin généraliste sur une ville, et peuvent atteindre 3 500-5 000 €/mois pour un cabinet pluridisciplinaire en zone urbaine dense comme Paris ou Lyon.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO médical ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « médecin généraliste sans rdv Nantes ») sont plus rapides à positionner que les requêtes nationales ou celles dominées par Doctolib. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre bassin de patients.',
      },
      {
        question: 'Le SEO est-il compatible avec le Code de déontologie médicale ?',
        answer:
          'Oui, le SEO est compatible avec le Code de déontologie médicale, à condition de respecter l\'article R.4127-19 qui interdit la publicité directe. Concrètement : pas de promesses de guérison, pas de comparaisons avec d\'autres praticiens, pas de témoignages patients à visée promotionnelle. Le contenu doit rester informatif et éducatif. Rankwell connaît ces contraintes et adapte chaque stratégie en conséquence, en produisant des contenus conformes validés avant publication.',
      },
      {
        question: 'Faut-il un blog santé pour améliorer le référencement de son cabinet ?',
        answer:
          'Un blog santé est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des patients (inspirées des PAA Google), démontrer une expertise médicale vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois ciblant des requêtes informationnelles : fiches pathologies, guides de prévention, explications de procédures médicales courantes.',
      },
      {
        question: 'Comment un médecin peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet doit accumuler des signaux de notoriété sur le web : profil Doctolib complet, avis Google récents et positifs, présence sur les annuaires de santé (Maiia, Pages Jaunes Santé), contenus médicaux factuels et sourcés sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour le secteur médical.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un médecin ?',
        answer:
          'Le SEO local cible les requêtes « médecin + spécialité + ville » et s\'appuie sur Google Business Profile, les avis patients et les citations sur les annuaires médicaux. Le SEO national vise des requêtes génériques (« comment choisir un médecin traitant ») et nécessite du contenu éducatif à forte autorité E-E-A-T. Pour un cabinet de ville, le SEO local représente 80 % du potentiel. Rankwell combine les deux approches selon la stratégie du praticien.',
      },
      {
        question: 'Doctolib suffit-il pour être visible en tant que médecin ?',
        answer:
          'Doctolib est indispensable pour la prise de rendez-vous, mais il crée une dépendance : le praticien n\'est qu\'un profil parmi 340 000 autres, soumis à l\'algorithme de la plateforme. Un site propre bien référencé permet de contrôler son image, de publier du contenu médical éducatif, de renforcer son E-E-A-T et de construire une autorité durable que Doctolib ne peut pas retirer. Rankwell aide les cabinets à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
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
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
        { label: 'SEO Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
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
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Chirurgien', href: '/agence-geo-seo/secteur/chirurgien' },
      { label: 'Ophtalmologue', href: '/agence-geo-seo/secteur/ophtalmologue' },
      { label: 'Dermatologue', href: '/agence-geo-seo/secteur/dermatologue' },
      { label: 'Ostéopathe', href: '/agence-geo-seo/secteur/osteopathe' },
      { label: 'Psychologue', href: '/agence-geo-seo/secteur/psychologue' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
      { label: 'Clinique', href: '/agence-geo-seo/secteur/clinique' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Physician',
};

export default data;
