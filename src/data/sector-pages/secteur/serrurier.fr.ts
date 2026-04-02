/**
 * DATA : Page Secteur Serruriers (FR)
 * Route : /agence-geo-seo/secteur/serrurier
 *
 * Secteur BTP / dépannage à dominante locale, marqué par un fort taux d'arnaques.
 * La confiance et la transparence tarifaire sont les angles différenciants.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'serrurier',
    title: 'Agence GEO & SEO pour Serruriers - Rankwell',
    description:
      'Rankwell accompagne les serruriers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la serrurerie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Serruriers' },
    ],
    title: 'GEO & SEO Serrurier : visibilité Google & moteurs IA',
    subtitle:
      'Vos clients vous cherchent dans l\'urgence, souvent la nuit, sur mobile. Nos experts conçoivent des stratégies de référencement GEO & SEO qui placent votre entreprise de serrurerie devant les résultats des plateformes et des arnaqueurs.',
    ctaText: 'Demander un audit GEO & SEO serrurier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les serruriers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches serrurerie sont effectuées sur mobile, dans l\'urgence</strong> (porte claquée, clé cassée, cambriolage). « Serrurier autour de moi » totalise 11 000 recherches/mois. C\'est un secteur de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le premier résultat capte la quasi-totalité des appels : l\'internaute bloqué dehors appelle le premier numéro crédible.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La serrurerie est le secteur le plus touché par les arnaques en ligne</strong> selon la DGCCRF. Des centaines de faux sites saturent Google Ads avec des prix d\'appel à 39 euros, puis facturent 800 à 1 500 euros sur place. Un serrurier légitime positionné en résultat naturel inspire davantage confiance qu\'une annonce payante.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Pages Jaunes, MesDépanneurs.fr, Travaux.com, Allo-Dépannage</strong> captent les requêtes transactionnelles tandis que Google Ads concentre les annonces frauduleuses. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un serrurier honnête reste invisible derrière les plateformes et les sites frauduleux.',
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
      { keyword: 'serrurier', volume: 53000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'serrurier autour de moi', volume: 11000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'serrurier paris', volume: 11000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'serrurier nice', volume: 5300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'serrurerie autour de moi', volume: 3400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'serrurier lyon', volume: 3600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'prix serrurier', volume: 900, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'changement serrure', volume: 900, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'ouverture de porte', volume: 800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'combien coute un serrurier', volume: 250, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 53 000 recherches sont effectuées sur le seul terme « serrurier », auxquelles s\'ajoutent des dizaines de milliers de requêtes locales (« serrurier + ville », « serrurier autour de moi »). La majorité de ces recherches se font dans l\'urgence, sur mobile, avec un taux de conversion immédiat. Si votre entreprise n\'apparait pas dans les 3 premiers résultats Google ou dans la recommandation d\'un moteur IA, c\'est un concurrent (ou un arnaqueur) qui décroche l\'appel.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les serruriers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la serrurerie et du dépannage d\'urgence.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement mobile et des signaux de confiance indispensables dans un secteur miné par la fraude.',
        items: [
          'Structure des pages par type d\'intervention (ouverture, changement, blindage)',
          'Balises schema.org Locksmith',
          'Performance mobile et Core Web Vitals',
          'Vérification des signaux de confiance (SIRET, assurance, certifications)',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité de votre entreprise dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre activité de serrurerie',
          'Mesure de la légitimité et citabilité face aux plateformes',
          'Évaluation de la densité factuelle (grilles tarifaires, qualifications)',
          'Benchmark concurrentiel sur les requêtes IA de dépannage',
        ],
      },
      {
        title: 'Étude de marché & mots-clés serrurerie',
        subtitle: 'Cartographie des requêtes par type d\'intervention et zone géographique. Identification des combinaisons à fort potentiel de conversion.',
        items: [
          'Combinaisons intervention + ville à faible concurrence organique',
          'Requêtes d\'urgence (« serrurier nuit », « ouverture porte dimanche »)',
          'Volumes de recherche réels par type de prestation',
          'Analyse des requêtes posées aux moteurs IA sur le dépannage',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage pensé pour le parcours d\'un client en situation d\'urgence : il cherche une intervention, un prix et un numéro.',
        items: [
          'Page intervention → page zone → page contact/devis',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec signaux de confiance',
        ],
      },
      {
        title: 'Stratégie de contenu serrurerie',
        subtitle: 'Création de contenus informatifs qui démontrent l\'expertise du serrurier et installent la confiance dans un secteur où le prospect se méfie.',
        items: [
          'Guides pratiques : « comment reconnaitre un serrurier fiable »',
          'Grilles tarifaires transparentes par type d\'intervention',
          'Phrases factuelles auto-suffisantes avec données vérifiables (certifications, assurance)',
          'FAQ ciblant les PAA Google sur les arnaques et les prix',
        ],
      },
      {
        title: 'Autorité & netlinking serrurerie',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les publications spécialisées du bâtiment.',
        items: [
          'Pages Jaunes, 118 712, MesDépanneurs.fr',
          'Annuaires professionnels du bâtiment (FFB, CAPEB)',
          'Mentions dans la presse locale et les sites d\'information consommateurs',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « serrurier + ville » et « serrurier autour de moi », et apparaitre dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Locksmith + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte post-intervention',
          'Photos d\'interventions réelles, horaires (y compris disponibilité nuit/week-end)',
          'Citations NAP cohérentes sur les annuaires du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type d\'intervention et les appels générés.',
        items: [
          'Positions Google par mot-clé et par zone géographique',
          'Trafic organique par type d\'intervention',
          'Score GEO : visibilité dans les moteurs IA',
          'Appels entrants, demandes de devis et conversions',
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
        description: 'Diagnostic complet de votre site : pages de d\u00e9pannage et d\'installation de serrures, vitesse de chargement mobile, indexation locale et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates serrurier aupr\u00e8s des moteurs IA, benchmark de vos concurrents locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Locksmith, Service et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos prestations d\'urgence et vos zones d\'intervention.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages prestations serrurerie, articles s\u00e9curit\u00e9 et anti-effraction, FAQ tarifs transparents, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis PagesJaunes, annuaires artisans certifi\u00e9s et presse locale. Suivi du Domain Rating et de la progression.',
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
    title: 'Visibilité IA : votre entreprise de serrurerie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute bloqué dehors demande à ChatGPT « quel serrurier fiable appeler à Paris ? », le LLM compile des informations du web pour formuler sa réponse. Si votre entreprise n\'apparait dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition, et c\'est un concurrent ou une plateforme qui capte l\'appel.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel serrurier recommandes-tu à Paris ? » : le LLM ne cite aucun serrurier par son nom. Il fournit une liste de 5 à 7 critères pour choisir un prestataire fiable (vérification du SIRET, avis Google, devis avant intervention, transparence tarifaire) et renvoie vers les plateformes (Pages Jaunes, MesDépanneurs.fr). Le risque d\'arnaque est systématiquement mentionné.</p><h4>Requêtes d\'information et anti-arnaque</h4><p>« Comment choisir un serrurier fiable et éviter les arnaques ? » : le LLM génère un guide structuré en 6 à 8 points (immatriculation au répertoire des métiers, devis écrit, refus des forfaits téléphoniques, vérification des avis). Il cite la DGCCRF et les associations de consommateurs comme recours. Les sites publiant du contenu sur la transparence tarifaire et les qualifications ont un fort potentiel de citation.</p><h4>Requêtes tarifaires</h4><p>« Prix ouverture de porte serrurier » : le LLM fournit des fourchettes détaillées : ouverture simple entre 80 et 150 euros en journée, porte blindée entre 150 et 350 euros, majoration de 50 à 100 % la nuit. Les sites proposant des grilles tarifaires actualisées et vérifiables sont les sources les plus facilement extractibles.</p><h4>Requêtes locales et Maps</h4><p>Sur « serrurier en urgence autour de moi la nuit », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les serruriers disposant d\'une fiche Google Business Profile complète (horaires 24h/24, avis récents, photos d\'interventions) apparaissent en priorité dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les serruriers, les types schema.org recommandés sont : <code>Locksmith</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Locksmith</code> permet à Google et aux LLM d\'identifier précisément la zone d\'intervention, les types de prestations, les horaires de disponibilité et les avis clients du professionnel.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de serrurerie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos interventions), la Légitimité & Citabilité (signaux de confiance externes : avis, annuaires, mentions presse), et la Densité Factuelle (richesse des données structurées, grilles tarifaires et entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les serruriers',
    items: [
      {
        question: 'Combien coute le référencement d\'un site de serrurier ?',
        answer:
          'Le budget SEO pour un serrurier dépend du nombre de zones géographiques ciblées et de la concurrence locale. Chez Rankwell, les accompagnements SEO pour les serruriers démarrent à 1 200 euros/mois pour une ville et un type d\'intervention, et peuvent atteindre 3 000 à 5 000 euros/mois pour une couverture multi-villes en Ile-de-France ou dans plusieurs métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO serrurerie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (« serrurier urgence Montpellier ») sont plus rapides à positionner que les requêtes très concurrentielles comme « serrurier Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone.',
      },
      {
        question: 'Comment se différencier des sites frauduleux dans les résultats Google ?',
        answer:
          'Le secteur de la serrurerie est le plus touché par les arnaques en ligne selon la DGCCRF. La différenciation passe par des signaux de confiance vérifiables : numéro SIRET affiché, assurance décennale, grille tarifaire transparente, avis clients authentiques sur Google Business Profile. Rankwell intègre ces signaux dans chaque page et dans le balisage schema.org pour que Google et les moteurs IA identifient votre entreprise comme légitime.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de serrurier ?',
        answer:
          'Un blog est un levier efficace s\'il cible les bonnes requêtes. Les articles les plus performants pour un serrurier répondent à des questions concrètes : « comment reconnaitre un serrurier fiable », « prix changement de serrure 3 points », « que faire en cas de porte claquée ». Rankwell recommande 2 à 4 articles par mois, ciblant les PAA Google et les requêtes informationnelles liées aux interventions de serrurerie.',
      },
      {
        question: 'Comment un serrurier peut-il apparaitre dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un serrurier doit accumuler des signaux de confiance sur le web : fiche Google Business complète avec avis récents, présence sur les annuaires professionnels (Pages Jaunes, FFB, CAPEB), contenus riches et factuels sur son site (grilles tarifaires, certifications, zones d\'intervention). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un serrurier ?',
        answer:
          'Le SEO local cible les requêtes « serrurier + ville » et « serrurier autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« prix serrurier », « changement serrure ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la couverture géographique de votre activité.',
      },
      {
        question: 'Les plateformes comme Pages Jaunes ou MesDépanneurs suffisent-elles pour être visible ?',
        answer:
          'Les plateformes apportent une visibilité initiale, mais elles créent une dépendance : votre entreprise n\'est qu\'un profil parmi des centaines, et le client compare sur le prix sans fidélisation possible. Un site propre bien référencé permet de contrôler votre image, d\'afficher vos certifications et grilles tarifaires, et de convertir directement. Rankwell aide les serruriers à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de serrurerie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
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
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Locksmith',
};

export default data;
