/**
 * DATA : Page Projet Site vitrine (FR)
 * Route : /agence-geo-seo/projet/site-vitrine
 *
 * Contenu enrichi via Haloscan et rapport de test LLM (mars 2026).
 */

import type { ProjetPageData } from '@/types/sector-pages';

const data: ProjetPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'site-vitrine',
    title: 'SEO & GEO Site vitrine : Agence Rankwell',
    description:
      'Rankwell optimise le référencement SEO et la visibilité IA (GEO) des sites vitrines. Architecture plate, contenu thin, schema LocalBusiness, méthodologie complète.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Types de projets', href: '/agence-geo-seo/secteurs' },
      { label: 'Site vitrine' },
    ],
    title: 'SEO & GEO pour site vitrine : méthodologie complète',
    subtitle:
      'Architecture plate, contenu insuffisant pour ranker, dépendance à Google Business Profile : le référencement d\'un site vitrine impose de compenser un faible volume de pages par une densité sémantique et factuelle maximale. Nos experts combinent SEO et GEO pour positionner chaque page de service sur Google et faire citer votre activité par les moteurs IA.',
    ctaText: 'Demander un audit SEO & GEO site vitrine',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour un site vitrine',
    technicalContext:
      'Un site vitrine compte en moyenne <strong class="text-secondary dark:text-accent">5 à 15 pages indexables</strong>. Cette architecture plate prive Google de signaux de profondeur thématique : chaque page doit porter un poids sémantique suffisant pour établir une <a href="/glossaire/topical-authority" class="text-rw-blue hover:underline">autorité thématique</a>. Sans cela, les pages de service stagnent sous la 3e page, noyées par les annuaires.',
    marketData:
      'La requête "site vitrine" génère <strong class="text-secondary dark:text-accent">4 100 recherches mensuelles</strong> en France, mais moins de 20 % des TPE investissent dans un référencement structuré au-delà de Google Business Profile. Une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée transforme ces sites sous-exploités en canaux d\'acquisition durable.',
    geoAngle:
      'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site vitrine dont chaque paragraphe contient un fait vérifiable ou une donnée sourcée sera extrait préférentiellement par les moteurs IA.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site vitrine dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilité',
  },

  // ============================================
  // BLOC 3 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie SEO & GEO pour votre site vitrine',
    subtitle: 'Notre approche de référencement structurée en 7 étapes, conçue pour les problématiques techniques spécifiques du site vitrine.',
    steps: [
      {
        title: 'Audit technique du site vitrine',
        subtitle: 'Analyse de l\'architecture plate, du balisage HTML de chaque page et des signaux de performance (Core Web Vitals, HTTPS, mobile-first).',
        items: [
          'Cartographie des 5 à 15 pages existantes et de leur profondeur sémantique',
          'Vérification des balises title, meta description et Hn sur chaque page de service',
          'Analyse du temps de chargement, du CLS et du LCP page par page',
          'Détection des pages orphelines, des canonical manquants et des erreurs 404',
        ],
      },
      {
        title: 'Audit GEO : citabilité de votre activité par les moteurs IA',
        subtitle: 'Évaluation de la visibilité de votre marque et de vos services dans les réponses de ChatGPT, Perplexity et Gemini.',
        items: [
          'Test de 20 à 30 requêtes locales et métier sur les LLM',
          'Calcul du Score GEO sur 3 dimensions : Univers Informatif, Légitimité, Densité Factuelle',
          'Benchmark contre 3 à 5 concurrents locaux directs',
          'Identification des services cités vs ignorés par les moteurs IA',
        ],
      },
      {
        title: 'Architecture et densification des pages',
        subtitle: 'Restructuration du site pour passer d\'une architecture plate à une arborescence sémantiquement riche, sans gonfler artificiellement le nombre de pages.',
        items: [
          'Création d\'une page dédiée par service (au lieu d\'une seule page fourre-tout)',
          'Ajout d\'une section FAQ par page de service (questions locales réelles)',
          'Mise en place d\'un blog avec 2 à 4 articles mensuels liés aux services',
          'Maillage interne entre pages de service, articles et page d\'accueil',
        ],
      },
      {
        title: 'Optimisation on-page et Google Business Profile',
        subtitle: 'Rédaction de contenus uniques par page avec données factuelles vérifiables et synchronisation du site avec la fiche GBP.',
        items: [
          'Rédaction de descriptions de service avec chiffres, zones, certifications',
          'Balisage schema.org LocalBusiness, Service, FAQPage et BreadcrumbList',
          'Cohérence NAP (Nom, Adresse, Téléphone) entre le site et la fiche GBP',
          'Intégration d\'avis clients structurés et de témoignages vérifiables',
        ],
      },
      {
        title: 'Stratégie de contenu pour site vitrine',
        subtitle: 'Création de contenus éditoriaux ciblant les requêtes informationnelles que les pages de service ne captent pas.',
        items: [
          'Articles de blog répondant aux questions fréquentes du secteur',
          'Guides pratiques avec données locales (réglementations, tarifs moyens)',
          'Pages de témoignages et études de cas avec résultats mesurables',
          'Passages auto-suffisants structurés pour extraction par les moteurs IA',
        ],
      },
      {
        title: 'Netlinking local et autorité de domaine',
        subtitle: 'Acquisition de backlinks depuis des sources locales et sectorielles pour compenser le faible volume de pages du site.',
        items: [
          'Inscriptions sur les annuaires professionnels locaux (CCI, PagesJaunes, Yelp)',
          'Partenariats avec des blogs et médias locaux pour des articles invités',
          'Mentions dans la presse locale et les sites institutionnels',
          'Chaque lien externe renforce le PageRank et la citabilité IA de la marque',
        ],
      },
      {
        title: 'Suivi, reporting et itérations',
        subtitle: 'Reporting mensuel avec positions par page de service, trafic organique, leads générés et Score GEO.',
        items: [
          'Positions Google par page de service et par requête locale cible',
          'Trafic organique segmenté par page et par source (Google, Bing, IA)',
          'Score GEO : évolution de la citabilité dans les moteurs IA',
          'Ajustement itératif : renforcement des pages sous-performantes',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 4 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Chaque livrable est un document ou un outil exploitable par vos experts en référencement, votre équipe technique ou votre direction.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic de l\'architecture plate de votre site vitrine, analyse du balisage Hn et des meta par page de service, inventaire des problèmes de performance et des erreurs d\'indexation, avec actions correctives classées par priorité.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité de votre marque et de vos services sur ChatGPT, Perplexity et Gemini, avec benchmark contre vos concurrents locaux et Score GEO détaillé sur les requêtes métier.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage LocalBusiness, Service, FAQPage et BreadcrumbList adapté à votre CMS (WordPress, Wix, Squarespace), avec guide d\'intégration et validation Rich Results Test.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Rédaction de pages de service détaillées, d\'articles de blog et de FAQ, avec intégration directe sur votre CMS via FTP. Création de templates de pages si votre site manque de structure.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis des annuaires locaux (CCI, PagesJaunes), des blogs sectoriels et des partenaires locaux. Suivi des liens acquis et de la progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Suivi mensuel des positions par page de service, du trafic organique par source, du nombre de leads générés par le canal SEO, et de l\'évolution du Score GEO sur les requêtes locales.',
      },
    ],
  },

  // ============================================
  // BLOC 5 : Visibilité IA (GeoVisibilitySection)
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre site vitrine dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un prospect demande à ChatGPT "quel avocat spécialisé en droit du travail à Lyon ?", le LLM compile des sources web pour formuler sa réponse. Si votre site vitrine ne figure dans aucune source citée, votre cabinet est invisible dans ce nouveau canal de recommandation.',
    llmBehavior:
      '<h4>Requêtes de recommandation d\'agence</h4><p>Sur "agence SEO pour site vitrine, laquelle choisir ?", le LLM ne cite aucune agence par son nom. Il fournit une liste de critères de sélection (spécialisation PME/TPE, transparence tarifaire, reporting mensuel) et renvoie vers des annuaires comme Sortlist ou Clutch. Un site d\'agence publiant une méthodologie structurée et des études de cas sur des sites vitrines pourrait émerger comme source de référence.</p><h4>Requêtes techniques</h4><p>Sur "comment améliorer le SEO d\'un site vitrine ?", le LLM génère un guide en 8 à 10 points couvrant les balises title, la création de pages de contenu supplémentaires, le maillage interne et la fiche Google Business Profile. Aucune agence n\'est citée. Les conseils restent génériques et ne contiennent pas de données chiffrées spécifiques au site vitrine.</p><h4>Requêtes comparatives</h4><p>Sur "site vitrine vs site e-commerce : lequel est mieux pour le SEO ?", le LLM produit un comparatif expliquant que le e-commerce a plus de pages indexables et de signaux de fraîcheur, tandis que le site vitrine souffre d\'un volume de contenu limité. Il ne cite aucune source. Les sites publiant des comparatifs avec des critères mesurables seraient favorisés comme sources d\'extraction.</p><h4>Requêtes sur la visibilité IA</h4><p>Sur "comment rendre un site vitrine visible sur ChatGPT ?", le LLM dispose de très peu de matériel. Ses conseils restent spéculatifs : enrichir le contenu factuel, ajouter du schema.org, développer la présence sur des sources tierces. C\'est un terrain quasiment vierge où le premier contenu structuré et substantiel a de fortes chances d\'être ingéré comme source de référence par les moteurs IA.</p>',
    structuredData:
      '<p>Pour un site vitrine, les types schema.org recommandés sont : <code>LocalBusiness</code> (avec sous-type adapté au métier, par exemple <code>LegalService</code> ou <code>MedicalBusiness</code>), <code>Service</code> (sur chaque page de prestation), <code>FAQPage</code> (sur les FAQ thématiques), <code>BreadcrumbList</code> (navigation) et <code>Organization</code> (informations de l\'entreprise). Le balisage <code>LocalBusiness</code> avec horaires, zone desservie et avis permet à Google d\'afficher des rich snippets locaux et aux LLM d\'extraire des données vérifiables sur votre activité.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre site vitrine par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus de service et éditoriaux), la Légitimité et Citabilité (avis clients, mentions dans la presse locale, backlinks d\'annuaires professionnels), et la Densité Factuelle (richesse du balisage schema.org, données de contact structurées, entités nommées dans les pages de service).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 6 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour site vitrine',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site vitrine ?',
        answer:
          'Le budget SEO pour un site vitrine dépend du nombre de pages, du secteur d\'activité et du niveau de concurrence locale. Chez Rankwell, les accompagnements SEO pour sites vitrines démarrent à 800 EUR/mois pour un site de 5 à 10 pages, et atteignent 2 000 à 3 000 EUR/mois pour les projets incluant la production de contenu éditorial et le netlinking local. Ce budget inclut l\'audit technique, l\'optimisation on-page, la stratégie de contenu et le suivi GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats SEO sur un site vitrine ?',
        answer:
          'Les premiers résultats apparaissent entre 2 et 4 mois pour les requêtes locales à faible concurrence (nom de métier + ville). Les requêtes nationales ou à forte concurrence nécessitent 4 à 8 mois de travail soutenu. La création de pages de service dédiées produit des effets mesurables dès le premier mois en termes de pages indexées. Rankwell fournit un calendrier prévisionnel adapté à la densité concurrentielle de votre zone géographique.',
      },
      {
        question: 'Combien de pages faut-il pour bien référencer un site vitrine ?',
        answer:
          'Un site vitrine performant en SEO comporte au minimum 8 à 15 pages stratégiques : une page d\'accueil optimisée, une page dédiée par service (pas une seule page fourre-tout), une page "à propos" avec expertise documentée, une page contact avec données NAP, une FAQ par thématique, et un blog avec 2 à 4 articles mensuels. Rankwell structure cette arborescence pour maximiser la couverture sémantique sans gonfler artificiellement le nombre d\'URL.',
      },
      {
        question: 'Quel CMS choisir pour le SEO d\'un site vitrine ?',
        answer:
          'WordPress reste le CMS le plus flexible pour le SEO d\'un site vitrine : gestion native des balises, plugins SEO éprouvés (Yoast, Rank Math), et contrôle total du balisage schema.org. Wix et Squarespace conviennent aux très petits sites (moins de 10 pages) mais limitent la personnalisation technique. Webflow offre un bon compromis entre design et contrôle SEO. Rankwell adapte sa méthodologie aux spécificités techniques de chaque plateforme et intègre le balisage GEO quel que soit le CMS.',
      },
      {
        question: 'Comment être cité par ChatGPT pour mon site vitrine ?',
        answer:
          'Pour que les moteurs IA citent votre activité, trois conditions sont nécessaires : des pages de service contenant des données factuelles vérifiables (certifications, zone d\'intervention, tarifs indicatifs), un balisage schema.org LocalBusiness et Service complet, et des mentions de votre marque sur des sources tierces (annuaires professionnels, presse locale, avis Google). Le Score GEO de Rankwell mesure ces trois dimensions et identifie les leviers prioritaires pour augmenter votre citabilité dans les réponses IA.',
      },
      {
        question: 'Quelle différence entre SEO classique et GEO pour un site vitrine ?',
        answer:
          'Le SEO positionne vos pages de service dans les résultats de recherche Google (positions 1 à 10). Le GEO (Generative Engine Optimization) fait citer votre activité dans les réponses générées par ChatGPT, Perplexity et Google AI Overviews. Pour un site vitrine, la différence est critique : avec seulement 5 à 15 pages, le potentiel SEO est plafonné par le volume de contenu. Le GEO permet de gagner en visibilité via la citabilité, même avec peu de pages, à condition que chaque page soit riche en données factuelles. Rankwell intègre les deux approches dans une méthodologie unifiée.',
      },
      {
        question: 'Pourquoi choisir Rankwell pour le SEO de mon site vitrine ?',
        answer:
          'Rankwell combine l\'expertise SEO technique (architecture de site vitrine, balisage LocalBusiness, optimisation GBP) avec la dimension GEO que la grande majorité des agences SEO n\'intègre pas encore. Notre méthodologie en 7 étapes est conçue pour la contrainte principale du site vitrine : transformer un petit nombre de pages en sources d\'autorité thématique. Le Score GEO propriétaire mesure la visibilité de votre activité dans les moteurs IA, un indicateur qu\'aucun autre prestataire ne propose pour les sites vitrines.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre site vitrine visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site vitrine. Nos consultants SEO & GEO analysent votre architecture, vos pages de service et votre visibilité dans les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Médecin', href: '/agence-geo-seo/secteur/medecin' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
      ],
      projets: [
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
        { label: 'Blog', href: '/agence-geo-seo/projet/blog' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      ],
      glossaire: [
        { label: 'Citabilité', href: '/glossaire/citabilite' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
        { label: 'Données structurées (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : secteurs et projets proches
  relatedSectors: {
    title: 'Nos expertises pour les professions libérales et les PME',
    items: [
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'PME', href: '/agence-geo-seo/secteur/pme' },
      { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
    ],
  },
};

export default data;
