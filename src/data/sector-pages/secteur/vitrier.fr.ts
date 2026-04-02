/**
 * DATA : Page Secteur Vitriers (FR)
 * Route : /agence-geo-seo/secteur/vitrier
 *
 * Données Ahrefs, country "fr", mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'vitrier',
    title: 'Agence GEO & SEO pour Vitriers - Rankwell',
    description:
      'Rankwell accompagne les vitriers et entreprises de vitrerie dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la vitrerie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Vitriers' },
    ],
    title: 'GEO & SEO Vitrier : visibilité Google & moteurs IA',
    subtitle:
      'Vos clients cherchent un vitrier en urgence sur Google ou dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au métier de la vitrerie et à ses contraintes d\'intervention rapide.',
    ctaText: 'Demander un audit GEO & SEO vitrier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les vitriers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches vitrier contiennent un élément géographique.</strong> L\'urgence domine : bris de glace, cambriolage, fenêtre cassée. Le client choisit le premier professionnel visible et joignable. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se prend en moins de 5 minutes, souvent depuis un mobile.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le secteur de la vitrerie souffre d\'un fort déficit de confiance en ligne.</strong> La DGCCRF signale régulièrement des arnaques au dépannage vitrier (surfacturation, pièces au triple du prix). Google et les LLM pénalisent les sites sans certification Qualibat, décennale affichée ni avis authentiques. Un vitrier légitime doit surcompenser par des preuves d\'expertise.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Pages Jaunes, Allo-Vitrier, HomeServe et les franchises (Lapeyre, Point Fort Fichet)</strong> captent les requêtes transactionnelles et d\'urgence, tandis que Hoggo et AlloVoisins couvrent les devis. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un artisan vitrier reste invisible derrière ces intermédiaires.',
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
      { keyword: 'vitrier', volume: 2700, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'vitrier autour de moi', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vitrerie', volume: 500, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'vitrier paris', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vitrier lyon', volume: 700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vitrier toulouse', volume: 350, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vitrier bordeaux', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'vitrerie autour de moi', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'dépannage vitrerie', volume: 150, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'coût remplacement vitre', volume: 150, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 7 000 recherches locales comme « vitrier autour de moi » ou « vitrier paris » sont effectuées par des particuliers confrontés à un bris de glace ou un besoin de remplacement de vitre. La majorité contacte le premier résultat visible, ou suit la recommandation d\'un moteur IA. Si votre entreprise de vitrerie n\'apparaît pas dans les 3 premiers résultats, ces clients appellent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les vitriers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la vitrerie et du dépannage.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site de vitrier.',
        items: [
          'Structure des pages par type de prestation (dépannage, remplacement, pose de double vitrage)',
          'Balises schema.org HomeAndConstructionBusiness et GlassShop',
          'Performance et Core Web Vitals (critique pour les recherches mobiles en urgence)',
          'Crawl et indexation des pages de zone géographique',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise de vitrerie dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre entreprise de vitrerie',
          'Mesure de la légitimité et citabilité face aux plateformes de mise en relation',
          'Évaluation de la densité factuelle du contenu (grilles tarifaires, certifications)',
          'Benchmark concurrentiel sur les requêtes IA du secteur vitrier',
        ],
      },
      {
        title: 'Étude de marché & mots-clés vitrerie',
        subtitle: 'Cartographie des requêtes par type d\'intervention et zone géographique. Identification des combinaisons à faible concurrence avec un fort potentiel de conversion.',
        items: [
          'Combinaisons prestation + ville (« vitrier bordeaux », « remplacement double vitrage lyon »)',
          'Analyse des requêtes d\'urgence et de dépannage',
          'Volumes de recherche réels par type d\'intervention (pose, réparation, remplacement)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours utilisateur d\'urgence et le crawl Google.',
        items: [
          'Page prestation (dépannage, double vitrage, vitrine) vers page zone vers page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par prestation et par ville',
        ],
      },
      {
        title: 'Stratégie de contenu vitrerie',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise de votre entreprise : guides tarifaires, comparatifs de vitrage, conseils de sécurité, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques répondant aux PAA Google (« prix remplacement double vitrage », « vitrier vs miroitier »)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (fourchettes de prix, délais)',
          'Contenus de confiance : certifications affichées, photos de chantiers réels, témoignages vérifiés',
        ],
      },
      {
        title: 'Autorité & netlinking vitrerie',
        subtitle: 'Développement de l\'autorité via les annuaires artisanaux qualifiés et les publications spécialisées dans le bâtiment.',
        items: [
          'Pages Jaunes, Houzz, 123Devis, annuaires de la Chambre des Métiers',
          'Citations dans les sites spécialisés bâtiment et rénovation',
          'Partenariats avec des sites institutionnels (CAPEB, FFB, Qualibat)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « vitrier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Glass Shop + catégories secondaires (service de réparation de vitres)',
          'Gestion des avis clients et stratégie de collecte après chaque intervention',
          'Photos de chantiers, horaires (y compris disponibilité urgence), attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires artisanaux et les Pages Jaunes',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé et par zone géographique',
          'Trafic organique par prestation (dépannage, pose, remplacement)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis, appels et conversions',
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
        description: 'Diagnostic complet de votre site : pages de d\u00e9pannage et de remplacement de vitrage, vitesse de chargement mobile, indexation locale et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates vitrier aupr\u00e8s des moteurs IA, benchmark de vos concurrents locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage HomeAndConstructionBusiness, Service et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos zones d\'intervention et vos prestations d\'urgence.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages vitrerie et miroiterie, articles double vitrage et isolation, FAQ, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis PagesJaunes, annuaires artisans et presse locale. Suivi du Domain Rating et de la progression.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation et par zone, trafic organique, appels et devis attribu\u00e9s au SEO, \u00e9volution du Score GEO et recommandations pour la p\u00e9riode suivante.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de vitrerie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel vitrier recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise de vitrerie n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel vitrier recommandes-tu à Paris ? » : le LLM ne cite aucun vitrier par nom. Il fournit une liste de 5 à 7 critères de sélection (certification Qualibat, assurance décennale, avis Google, devis avant intervention) et renvoie vers les annuaires comme les Pages Jaunes ou Hoggo. Le vitrier qui cumule ces signaux de confiance sur son propre site a plus de chances d\'être cité en tant que source.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon vitrier ? » ou « vitrier vs miroitier : quelle différence ? » : le LLM génère un guide structuré en critères sans citer de professionnel ni de source externe. Le vitrier qui publie ce type de contenu éducatif et factuel sur son site peut être extrait comme référence.</p><h4>Requêtes tarifaires</h4><p>« Prix remplacement double vitrage » : le LLM donne des fourchettes chiffrées (150 à 400 euros par m2 pour un double vitrage standard). Les sites proposant des grilles tarifaires détaillées, actualisées et segmentées par type de vitrage ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « vitrier autour de moi » ou « vitrier en urgence », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les vitriers disposant d\'une fiche Google Business Profile complète (catégorie Glass Shop, avis récents, photos de chantiers, horaires d\'urgence) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les vitriers, les types schema.org recommandés sont : <code>HomeAndConstructionBusiness</code> (type principal), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>HomeAndConstructionBusiness</code> permet à Google et aux LLM d\'identifier précisément le type de prestation (dépannage, pose, remplacement), la zone d\'intervention et les certifications du vitrier.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de vitrerie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur la vitrerie), la Légitimité & Citabilité (signaux de confiance externes, certifications Qualibat, avis), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les vitriers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de vitrier ?',
        answer:
          'Le budget SEO pour un vitrier dépend de la zone géographique ciblée et du nombre de prestations à positionner (dépannage, pose de double vitrage, vitrerie-miroiterie). Chez Rankwell, les accompagnements SEO pour les vitriers démarrent à 800 euros/mois pour une ville et une prestation principale, et peuvent atteindre 2 500 euros/mois pour une couverture multi-villes en Île-de-France.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO vitrerie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (« vitrier Annecy », « remplacement double vitrage Nantes ») sont plus rapides à positionner que les requêtes génériques très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone d\'intervention.',
      },
      {
        question: 'Comment un vitrier peut-il se différencier des plateformes de mise en relation ?',
        answer:
          'Les plateformes comme Pages Jaunes, HomeServe ou AlloVoisins captent du trafic mais diluent votre identité : vous n\'êtes qu\'un profil parmi des centaines. Un site propre bien référencé permet de contrôler votre image, d\'afficher vos certifications Qualibat et votre assurance décennale, et de convertir directement sans commission. Rankwell aide les vitriers à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des intermédiaires.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de vitrerie ?',
        answer:
          'Un blog vitrerie est un levier efficace s\'il est bien exécuté. Les articles doivent répondre à des questions réelles (« prix remplacement double vitrage », « vitrier vs miroitier », « comment sécuriser une vitrine après un cambriolage »), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 3 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un vitrier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un vitrier doit accumuler des signaux de notoriété sur le web : présence sur les annuaires artisanaux, mentions dans les sites spécialisés bâtiment, profil Google Business optimisé avec des avis récents, contenus riches et factuels sur son site (grilles tarifaires, guides de choix, certifications). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un vitrier ?',
        answer:
          'Le SEO local cible les requêtes « vitrier + ville » et « vitrier autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« prix double vitrage », « comment choisir un vitrier ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon votre zone d\'intervention et vos objectifs de croissance.',
      },
      {
        question: 'Les annuaires suffisent-ils pour être visible en tant que vitrier ?',
        answer:
          'Les annuaires comme Pages Jaunes ou 123Devis sont utiles pour la visibilité initiale, mais ils créent une dépendance : vous n\'êtes qu\'une fiche parmi des centaines, sans contrôle sur votre image ni sur la conversion. Un site propre bien référencé permet de se distinguer des arnaques au dépannage, d\'afficher ses preuves de confiance et de convertir directement. Rankwell aide les vitriers à construire une autorité durable que les plateformes ne peuvent pas retirer.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de vitrerie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur de la vitrerie.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Garage auto', href: '/agence-geo-seo/secteur/garage' },
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
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Garage auto', href: '/agence-geo-seo/secteur/garage' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Diagnostiqueur', href: '/agence-geo-seo/secteur/diagnostiqueur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
