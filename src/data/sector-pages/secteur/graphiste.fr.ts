/**
 * DATA : Page Secteur Graphistes (FR)
 * Route : /agence-geo-seo/secteur/graphiste
 *
 * Mots-clés Ahrefs (country: fr) - mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'graphiste',
    title: 'Agence GEO & SEO pour Graphistes - Rankwell',
    description:
      'Rankwell accompagne les graphistes et designers graphiques dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du design graphique.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Graphistes' },
    ],
    title: 'GEO & SEO Graphiste : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un graphiste sur Google, Malt ou dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au marché du design graphique et à la logique de portfolio.',
    ctaText: 'Demander un audit GEO & SEO graphiste',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les graphistes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">65 % des requêtes graphiste contiennent une ville ou la mention « freelance »</strong>. Le marché est atomisé entre des milliers de freelances et de petits studios. La décision du client se joue sur le portfolio visible, les avis et la position dans les résultats de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a>.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le portfolio est le premier critère de conversion, mais Google ne lit pas les images</strong>. Un site composé à 90 % de visuels sans texte structuré est quasi invisible. Le défi est de rendre le travail visuel indexable (balises alt, légendes, texte contextuel) tout en conservant l\'impact esthétique.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Malt, Fiverr, 99designs, Graphiste.com, Behance et Dribbble</strong> se positionnent systématiquement en première page sur « graphiste freelance » et « graphiste + ville ». Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un graphiste indépendant reste noyé dans les annuaires.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (Citabilité)
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilité',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'graphiste', volume: 13000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'designer graphique', volume: 4400, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'graphiste freelance', volume: 1700, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'logo graphiste', volume: 500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'graphiste toulouse', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'graphiste paris', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'devis graphiste', volume: 350, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'graphiste bordeaux', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'graphiste lyon', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'graphiste marseille', volume: 200, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches locales comme « graphiste freelance », « graphiste toulouse » ou « devis graphiste » représentent autant de clients potentiels pour un studio ou un indépendant. La majorité clique sur les 3 premiers résultats Google ou suit la recommandation d\'un moteur IA. Si votre site n\'y figure pas, ces projets partent vers les plateformes ou un concurrent mieux référencé.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les graphistes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur du design graphique.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site portfolio, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des visuels.',
        items: [
          'Indexabilité des pages portfolio (images, texte contextuel)',
          'Balises schema.org VisualArtwork et ProfessionalService',
          'Performance et Core Web Vitals (poids des images)',
          'Crawl et indexation des galeries',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du graphiste dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du graphiste',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du design graphique',
        subtitle: 'Cartographie des requêtes par spécialité créative (identité visuelle, packaging, web design) et zone géographique.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par type de prestation',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site pour rendre chaque projet du portfolio indexable et compréhensible par Google.',
        items: [
          'Page prestation (logo, print, web) avec texte et visuels',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Balises alt descriptives, légendes et texte contextuel pour chaque visuel',
        ],
      },
      {
        title: 'Stratégie de contenu créatif',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du graphiste, rédigés pour être citables par les LLM.',
        items: [
          'Études de cas projet avec brief, processus et résultat',
          'Articles sur les tendances graphiques et les bonnes pratiques',
          'FAQ sur les tarifs, les délais et le processus créatif',
        ],
      },
      {
        title: 'Autorité & netlinking créatif',
        subtitle: 'Développement de l\'autorité via les plateformes de design, les publications spécialisées et les prix créatifs.',
        items: [
          'Profils Behance, Dribbble, Malt avec lien retour',
          'Publications dans les blogs et magazines de design',
          'Participation à des concours et prix créatifs (Awwwards, CSS Design Awards)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « graphiste + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Graphic Designer + catégories secondaires',
          'Gestion des avis clients et stratégie de collecte post-projet',
          'Photos des réalisations, horaires et attributs complétés',
          'Citations NAP cohérentes sur les annuaires de freelances',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par prestation (logo, print, web)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions',
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
        description: 'Diagnostic du site et du portfolio : vitesse de chargement, indexation des images, balises alt, architecture des galeries. Chaque point bloquant est document\u00e9 avec sa correction.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 dans les moteurs IA sur les requ\u00eates du design graphique, benchmark contre 3 \u00e0 5 concurrents locaux et Score GEO chiffr\u00e9 sur 100.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage ProfessionalService, VisualArtwork et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec prestations, zone d\'intervention et portfolio structur\u00e9.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages services design, cas clients, articles tendances graphiques et FAQ. Int\u00e9gration CMS ou FTP et templates de pages.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis Behance, Dribbble, blogs design et presse cr\u00e9ative. Suivi du Domain Rating et des nouveaux liens acquis.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par page, trafic organique, demandes de devis attribu\u00e9es au canal SEO et Score GEO. Livr\u00e9 chaque mois avec les \u00e9volutions.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité de graphiste dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel graphiste freelance recommandes-tu à Toulouse ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre site n\'apparaît dans aucune source citée, vous êtes invisible dans ce nouveau canal d\'acquisition de clients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel graphiste freelance recommandes-tu à Toulouse ? » : le LLM ne cite aucun graphiste nommément. Il fournit une liste de 5 à 7 critères de sélection (portfolio, spécialisation, avis clients, tarifs) et redirige vers les plateformes Malt, Fiverr, Behance et Dribbble. Les graphistes disposant d\'un site propre bien référencé et de profils actifs sur ces plateformes cumulent les signaux de visibilité.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon graphiste ? » : le LLM génère un guide structuré en 6 à 8 critères sans citer de source externe. Les sites publiant des guides comparatifs avec des données chiffrées (fourchettes tarifaires, délais par type de prestation) ont le plus fort potentiel de citation.</p><h4>Requêtes tarifaires</h4><p>« Prix création logo graphiste » : le LLM donne des fourchettes détaillées par niveau d\'expérience : freelance débutant (200 à 500 euros), freelance confirmé (500 à 2 000 euros), agence de design (2 000 à 10 000 euros). Les contenus proposant des grilles tarifaires précises et actualisées sont extraits en priorité.</p><h4>Requêtes locales et Maps</h4><p>Sur « graphiste autour de moi », le LLM oriente vers Google Maps et les plateformes de freelances avec filtre géographique. Les graphistes disposant d\'une fiche Google Business Profile complète (catégorie Graphic Designer, portfolio photos, avis récents) bénéficient d\'une visibilité accrue dans les réponses géolocalisées.</p>',
    structuredData:
      '<p>Pour les graphistes, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>VisualArtwork</code> (pour les projets du portfolio), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>ProfessionalService</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées, la localisation et les avis clients du graphiste.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité de graphiste par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les graphistes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de graphiste ?',
        answer:
          'Le budget SEO pour un graphiste freelance ou un studio de design dépend du nombre de prestations et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les graphistes démarrent à 800 euros/mois pour un freelance ciblant une ville, et peuvent atteindre 2 500 à 4 000 euros/mois pour un studio multi-spécialités visant plusieurs métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un graphiste ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « graphiste freelance Bordeaux ») sont plus rapides à positionner que les requêtes nationales concurrentielles comme « graphiste freelance ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Mon portfolio est composé d\'images : comment Google peut-il le référencer ?',
        answer:
          'Google ne lit pas les images directement. Pour rendre un portfolio indexable, chaque visuel doit être accompagné d\'un texte contextuel : balise alt descriptive, légende, titre du projet, brief client, description du processus créatif. Rankwell structure chaque page portfolio pour qu\'elle soit lisible par les moteurs de recherche tout en conservant l\'impact visuel.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement de son site de graphiste ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des clients (tarifs, tendances, processus créatif) et démontrer une expertise vérifiable. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne comme « combien coûte un logo » ou « tendances graphiques 2026 ».',
      },
      {
        question: 'Comment un graphiste peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un graphiste doit accumuler des signaux de notoriété sur le web : profils actifs sur Behance, Dribbble et Malt, mentions dans des publications spécialisées, fiche Google Business Profile optimisée, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un graphiste ?',
        answer:
          'Le SEO local cible les requêtes « graphiste + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« graphiste freelance », « designer graphique ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie du graphiste et sa zone de chalandise.',
      },
      {
        question: 'Les plateformes comme Malt ou Fiverr suffisent-elles pour trouver des clients ?',
        answer:
          'Les plateformes de freelances sont utiles pour la visibilité initiale, mais elles créent une dépendance : le graphiste n\'est qu\'un profil parmi des milliers, soumis à la commission et à l\'algorithme de la plateforme. Un site propre bien référencé permet de contrôler son image, de convertir directement sans commission et de construire une autorité durable. Rankwell aide les graphistes à bâtir cette présence en ligne indépendante grâce à une stratégie de référencement SEO & GEO autonome.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité de graphiste visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
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
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Barbier', href: '/agence-geo-seo/secteur/barbier' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
