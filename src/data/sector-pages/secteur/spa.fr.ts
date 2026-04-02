/**
 * DATA : Page Secteur Spas (FR)
 * Route : /agence-geo-seo/secteur/spa
 *
 * Contenu rédigé pour les exploitants de spas (spas privatifs, spas d'hôtel,
 * centres de bien-être, thalassothérapie). Mots-clés Ahrefs, mars 2026.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'spa',
    title: 'Agence GEO & SEO pour Spas - Rankwell',
    description:
      'Rankwell accompagne les spas et centres de bien-être dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du bien-être.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Spas' },
    ],
    title: 'GEO & SEO Spa : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent leur prochain soin sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur bien-être.',
    ctaText: 'Demander un audit GEO & SEO spa',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les spas',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des requêtes spa contiennent un nom de ville ou « autour de moi »</strong>. Le client cherche un lieu accessible dans l\'heure, sur mobile, et choisit parmi les 3 premiers résultats du Local Pack ou la recommandation d\'un moteur IA. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où chaque position compte.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les recherches « spa » augmentent de 40 à 60 % entre octobre et février</strong>, puis chutent en été. Les avis clients sont décisifs : un spa sous 4,3 étoiles perd en visibilité locale. Le contenu doit aussi rassurer sur l\'hygiène et les certifications des praticiens pour satisfaire les exigences E-E-A-T de Google.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Treatwell, Planity, Spa Etc, Wonderbox et Booking</strong> monopolisent les positions organiques sur les requêtes bien-être et facturent des commissions sur chaque réservation. Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un spa reste dépendant de ces intermédiaires.',
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
      { keyword: 'spa paris', volume: 20000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'spa lyon', volume: 18000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'spa autour de moi', volume: 8500, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'spa privatif', volume: 7100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'hotel spa paris', volume: 3600, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'spa privatif paris', volume: 2200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'spa privatif couple', volume: 1700, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'spa massage paris', volume: 1400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'spa privatif autour de moi', volume: 1100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'meilleur spa paris', volume: 800, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de recherches locales comme « spa paris » ou « spa privatif couple » représentent autant de clients prêts à réserver un soin. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre spa n\'y figure pas, ces clients réservent chez un concurrent ou passent par une plateforme tierce.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les spas',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur bien-être et spa.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages soins et prestations.',
        items: [
          'Structure des pages par type de soin (massage, hammam, balnéo, soin visage)',
          'Balises schema.org HealthAndBeautyBusiness et DaySpa',
          'Performance et Core Web Vitals sur mobile',
          'Crawl et indexation des pages de réservation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du spa dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du spa',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA bien-être',
        ],
      },
      {
        title: 'Étude de marché & mots-clés bien-être',
        subtitle: 'Cartographie des requêtes par type de soin, formule (privatif, duo, journée) et zone géographique. Identification des combinaisons à fort potentiel et faible concurrence.',
        items: [
          'Combinaisons soin + ville à faible concurrence',
          'Analyse des requêtes conversationnelles posées aux moteurs IA',
          'Volumes de recherche réels par catégorie de prestation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de réservation et le crawl Google.',
        items: [
          'Page catégorie de soin vers page prestation vers page réservation',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par prestation',
        ],
      },
      {
        title: 'Stratégie de contenu bien-être',
        subtitle: 'Création de contenus éducatifs mettant en valeur l\'expertise du spa, rédigés pour être citables par les LLM et pour répondre aux questions fréquentes des clients.',
        items: [
          'Guides comparatifs (spa privatif vs spa d\'hôtel, hammam vs sauna)',
          'Phrases factuelles auto-suffisantes avec données tarifaires et de durée',
          'FAQ répondant aux PAA Google sur les soins et les prix',
        ],
      },
      {
        title: 'Autorité & netlinking bien-être',
        subtitle: 'Développement de l\'autorité via les annuaires et plateformes spécialisés du secteur bien-être.',
        items: [
          'Treatwell, Planity, Spa Etc, Tripadvisor',
          'Publications dans la presse lifestyle et bien-être',
          'Partenariats avec des hôtels, offices de tourisme et guides locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du spa pour capter les requêtes locales « spa + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale DaySpa + catégories secondaires (Massage, Hammam)',
          'Gestion des avis clients et stratégie de collecte post-soin',
          'Photos des cabines, espaces détente, équipements et soins signature',
          'Citations NAP cohérentes sur les annuaires bien-être',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de soin et les réservations générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par catégorie de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Réservations en ligne et demandes de contact',
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
        description: 'Diagnostic site, pages soins/forfaits, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes spa/bien-etre, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage DaySpa, HealthAndBeautyBusiness, FAQPage avec soins et tarifs.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages soins, articles bien-etre/relaxation, FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires bien-etre (Treatwell, Balinea), blogs spa, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par soin, trafic organique, reservations attribuees au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre spa dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel spa recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre établissement n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel spa recommandes-tu à Paris ? » : le LLM cite 5 à 8 établissements par nom, en privilégiant les spas hôteliers de luxe (Cheval Blanc, Mandarin Oriental, Nuxe Spa) et les enseignes à forte notoriété web. Chaque mention inclut le quartier, la gamme de prix et la spécialité du lieu. Les spas indépendants sont rarement cités sauf en cas de mentions presse multiples.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon spa ? » : le LLM génère un guide structuré en 6 à 8 critères (hygiène, certifications des praticiens, gamme de soins, avis clients, rapport qualité/prix) sans citer de source ni d\'établissement. Les spas publiant des contenus factuels avec des données propres (labels, nombre de praticiens certifiés) ont un potentiel de citation élevé.</p><h4>Requêtes tarifaires</h4><p>« Prix massage en spa » : le LLM donne des fourchettes précises (massage relaxant 50 à 90 euros pour 50 min, soin signature en spa hôtelier 120 à 300 euros). Les sites affichant des grilles tarifaires détaillées et actualisées sont prioritairement extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « spa autour de moi pour un week-end en couple », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les spas disposant d\'une fiche Google Business Profile complète (catégorie DaySpa, avis récents, photos des espaces, attributs « spa privatif ») apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les spas, les types schema.org recommandés sont : <code>DaySpa</code> (type principal), <code>HealthAndBeautyBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>DaySpa</code> permet à Google et aux LLM d\'identifier précisément la catégorie d\'établissement, la localisation, les types de soins proposés et les avis clients.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre spa par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos soins), la Légitimité & Citabilité (signaux de confiance externes : avis, mentions presse, annuaires), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les spas',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de spa ?',
        answer:
          'Le budget SEO pour un spa dépend du nombre de prestations et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les spas démarrent à 1 500 euros par mois pour un établissement mono-site, et peuvent atteindre 4 000 à 6 000 euros par mois pour un réseau de spas ou un spa d\'hôtel en zone très concurrentielle comme Paris ou Lyon.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO bien-être ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (par exemple « spa privatif Reims » ou « hammam Bordeaux ») sont plus rapides à positionner que les requêtes nationales très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre zone.',
      },
      {
        question: 'Comment gérer la saisonnalité du trafic spa en SEO ?',
        answer:
          'Les recherches « spa » augmentent de 40 à 60 % entre octobre et février, puis chutent en été. Rankwell anticipe cette saisonnalité en programmant les contenus et campagnes de netlinking en amont des pics, et en travaillant les requêtes hors saison (soins post-sport en été, coffrets cadeaux en automne) pour lisser le trafic sur l\'année.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un spa ?',
        answer:
          'Un blog bien-être est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des clients (« spa privatif ou spa d\'hôtel, lequel choisir ? », « bienfaits du hammam »), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un spa peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un spa doit accumuler des signaux de notoriété sur le web : présence sur les annuaires bien-être (Treatwell, Spa Etc), mentions dans la presse lifestyle, profil Google Business optimisé avec avis récents, contenus riches et factuels sur son site (grilles tarifaires, descriptions de soins). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un spa ?',
        answer:
          'Le SEO local cible les requêtes « spa + ville » et « spa autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur spa de France », « spa privatif couple ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie et le positionnement du spa.',
      },
      {
        question: 'Treatwell et les plateformes de réservation suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Treatwell ou Planity sont utiles pour la visibilité initiale, mais elles créent une dépendance : le spa n\'est qu\'un profil parmi des centaines, soumis à des commissions sur chaque réservation. Un site propre bien référencé permet de contrôler son image, de convertir directement sans commission et de construire une autorité durable. Rankwell aide les spas à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre spa visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Hôtel', href: '/agence-geo-seo/secteur/hotel' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
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
      { label: 'Hôtel', href: '/agence-geo-seo/secteur/hotel' },
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'DaySpa',
};

export default data;
