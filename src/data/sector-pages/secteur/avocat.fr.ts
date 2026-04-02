/**
 * DATA : Page Secteur Avocats (FR)
 * Route : /agence-geo-seo/secteur/avocat
 *
 * Page pilote, contenu de référence pour valider le template
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'avocat',
    title: 'Agence GEO & SEO pour Avocats - Rankwell',
    description:
      'Rankwell accompagne les cabinets d\'avocats dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur juridique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Avocats' },
    ],
    title: 'GEO & SEO Avocat : visibilité Google & moteurs IA',
    subtitle:
      'Votre cabinet doit être trouvé là où vos futurs clients cherchent : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes du secteur juridique.',
    ctaText: 'Demander un audit GEO & SEO avocat',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les avocats',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">72 % des requêtes juridiques contiennent un nom de ville</strong> (« avocat divorce Paris », « cabinet droit du travail Lyon »). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 cabinets du Local Pack Google ou ceux cités par un moteur IA.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL</strong> par Google : exigence E-E-A-T maximale. Chaque contenu doit démontrer une expertise vérifiable (barreau, publications, mentions presse) et la déontologie limite les approches SEO agressives.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Justifit, Avocats.fr, LegalPlace, Legalstart</strong> dominent les requêtes transactionnelles génériques. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur juridique, un cabinet reste invisible face à ces plateformes.',
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
      { keyword: 'avocat autour de moi', volume: 7600, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'avocat droit du travail', volume: 5700, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'avocat commis d\'office', volume: 4600, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'avocat fiscaliste', volume: 3600, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'avocat paris', volume: 3600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'avocat droit des étrangers', volume: 2800, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'avocat droit de la famille', volume: 2700, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'avocat divorce', volume: 2600, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'avocat fiscaliste paris', volume: 1500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'avocat divorce paris', volume: 1300, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches locales comme « avocat autour de moi » ou « avocat divorce paris » représentent autant de clients potentiels. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre cabinet n\'y figure pas, ces clients vont ailleurs.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les avocats',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur juridique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par domaine de droit',
          'Balises schema.org Attorney',
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
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés juridiques',
        subtitle: 'Cartographie des requêtes par spécialité juridique et zone géographique. Identification des « zones blanches » à fort potentiel.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par spécialité',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours utilisateur et le crawl Google.',
        items: [
          'Page spécialité → page avocat → page contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu juridique',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du cabinet, rédigés pour être citables par les LLM.',
        items: [
          'Guides et FAQ répondant aux PAA Google',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Respect de la déontologie de la profession',
        ],
      },
      {
        title: 'Autorité & netlinking juridique',
        subtitle: 'Développement de l\'autorité via les annuaires juridiques qualifiés et les publications spécialisées.',
        items: [
          'Avocats.fr, Justifit, Legal500',
          'Publications dans la presse juridique',
          'Partenariats avec des sites institutionnels',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du cabinet pour capter les requêtes locales « avocat + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Attorney + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte',
          'Photos, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires juridiques',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les demandes de contact générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par spécialité',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de contact et conversions',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en référencement, votre équipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic complet du site de votre cabinet : architecture des pages par domaine de droit, vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives classées par priorité.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité de votre cabinet dans ChatGPT, Perplexity et Gemini sur vos requêtes juridiques cibles. Benchmark contre 3 à 5 cabinets concurrents et Score GEO sur 100 (Univers Informatif, Légitimité, Densité Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage Attorney, LegalService, FAQPage et BreadcrumbList prêt à intégrer, adapté aux spécialités de votre cabinet. Livré avec un guide d\'intégration pour votre CMS (WordPress, Webflow ou autre).',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Rédaction de pages de pratique (droit du travail, divorce, pénal), articles juridiques, FAQ inspirées des PAA Google. Intégration directe sur votre CMS ou par FTP, avec création de templates de pages si nécessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires juridiques (Avocats.fr, Justifit, Legal500), blogs droit et presse spécialisée. Suivi des liens obtenus et progression du Domain Rating de votre cabinet.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par page de pratique et par mot-clé local, trafic organique par spécialité juridique, évolution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre cabinet dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel avocat en droit du travail recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre cabinet n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel avocat recommandes-tu à Paris pour un divorce ? » : le LLM ne cite pas de cabinet précis. Il fournit une liste de critères de sélection (spécialisation, avis clients, proximité) et renvoie vers les annuaires du barreau, Justifit et Avocats.fr.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon avocat ? » ou « avocat pénaliste vs civiliste » : le LLM génère un guide structuré en 5 à 7 critères, sans citer de cabinet ni de source externe. Le cabinet qui publie ce type de contenu sur son site peut être cité en référence.</p><h4>Requêtes tarifaires</h4><p>« Tarif avocat pour un divorce à l\'amiable » : le LLM donne des fourchettes chiffrées (1 500 à 4 000 euros par conjoint). Les sites proposant des données de prix précises et actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « avocat autour de moi pour droit du travail », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les cabinets disposant d\'une fiche Google Business Profile complète (catégorie, avis récents, photos) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les cabinets d\'avocats, les types schema.org recommandés sont : <code>Attorney</code> (type principal), <code>LegalService</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Attorney</code> permet à Google et aux LLM d\'identifier précisément le domaine de compétence, la localisation et les avis clients du cabinet.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre cabinet par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les avocats',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'avocat ?',
        answer:
          'Le budget SEO pour un cabinet d\'avocats dépend du nombre de spécialités et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les cabinets démarrent à 1 500 €/mois pour une spécialité et une ville, et peuvent atteindre 4 000-6 000 €/mois pour un cabinet multi-spécialités en Île-de-France.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO juridique ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « avocat droit des étrangers Nantes ») sont plus rapides à positionner que les requêtes nationales très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Le SEO est-il compatible avec la déontologie des avocats ?',
        answer:
          'Oui, le SEO est parfaitement compatible avec les règles déontologiques fixées par le CNB, à condition de respecter certaines limites : pas de promesses de résultats, pas de témoignages clients nominatifs sans consentement, transparence sur les honoraires. Rankwell connaît ces contraintes et adapte chaque stratégie en conséquence.',
      },
      {
        question: 'Faut-il un blog juridique pour améliorer son référencement ?',
        answer:
          'Un blog juridique est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles (inspirées des PAA Google), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un avocat peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un cabinet doit accumuler des signaux de notoriété sur le web : présence sur les annuaires juridiques, mentions dans la presse, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un avocat ?',
        answer:
          'Le SEO local cible les requêtes « avocat + spécialité + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur avocat pénaliste ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie du cabinet.',
      },
      {
        question: 'Justifit et les annuaires suffisent-ils pour être visible ?',
        answer:
          'Les annuaires comme Justifit sont utiles pour la visibilité initiale, mais ils créent une dépendance : le cabinet n\'est qu\'un profil parmi des centaines. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les cabinets à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
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
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
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
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Attorney',
};

export default data;
