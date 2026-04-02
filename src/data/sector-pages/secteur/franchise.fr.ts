/**
 * DATA : Page Secteur Franchises (FR)
 * Route : /agence-geo-seo/secteur/franchise
 *
 * Cible : entrepreneurs et candidats à la franchise cherchant à ouvrir,
 * développer ou optimiser la visibilité en ligne d'un réseau franchisé.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'franchise',
    title: 'Agence GEO & SEO pour Franchises - Rankwell',
    description:
      'Rankwell accompagne les réseaux de franchise dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la franchise.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Franchises' },
    ],
    title: 'GEO & SEO Franchise : visibilité Google & moteurs IA',
    subtitle:
      'Chaque point de vente de votre réseau doit capter sa propre clientèle locale. Nos experts conçoivent des stratégies de référencement GEO & SEO qui articulent la visibilité nationale de l\'enseigne et la performance locale de chaque franchisé.',
    ctaText: 'Demander un audit GEO & SEO franchise',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les franchises',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">63 % des requêtes liées à une franchise contiennent une intention locale ou transactionnelle</strong>. Le candidat cherche un réseau fiable, le consommateur final cherche l\'enseigne la plus proche. Ce double flux fait de la franchise un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> à grande échelle, où chaque point de vente doit se positionner sur « enseigne + ville ».',
    constraints:
      '<strong class="text-secondary dark:text-accent">La franchise impose une double contrainte SEO unique</strong> : cohérence de marque du franchiseur et contenu local différencié par franchisé. Le DIP (obligatoire depuis la loi Doubin de 1989) génère un corpus que les moteurs indexent. Les réseaux qui ne maîtrisent pas la duplication entre pages locales perdent en visibilité.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">L\'Observatoire de la Franchise, Toute la Franchise, AC Franchise</strong> et les annuaires spécialisés monopolisent les premières positions sur « ouvrir une franchise » et « franchise rentable ». Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un réseau reste invisible face à ces plateformes.',
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
      { keyword: 'ouvrir une franchise', volume: 800, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'franchise mcdo', volume: 800, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'devenir franchisé', volume: 600, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'franchise rentable', volume: 500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'contrat de franchise', volume: 900, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'prix franchise mcdo', volume: 350, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'comment ouvrir une franchise', volume: 350, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'ouvrir une franchise sans apport', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'franchise la plus rentable', volume: 150, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'ouvrir une franchise rentable', volume: 150, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches comme « ouvrir une franchise » ou « franchise rentable » traduisent l\'intention d\'entrepreneurs en quête d\'un réseau solide. Les candidats comparent les enseignes, les coûts d\'entrée et les retours sur investissement. Si votre réseau de franchise ne figure pas parmi les premiers résultats Google, ni dans les recommandations des moteurs IA, ces candidats rejoignent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les franchises',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes spécifiques des réseaux de franchise.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse de l\'architecture multi-sites du réseau : site vitrine du franchiseur, pages locales des franchisés, cohérence des URLs et gestion de la duplication de contenu entre points de vente.',
        items: [
          'Détection des contenus dupliqués entre pages franchisés',
          'Balises schema.org LocalBusiness par point de vente',
          'Performance et Core Web Vitals sur chaque template local',
          'Crawl et indexation des pages enseigne + ville',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité du réseau dans les réponses de ChatGPT, Perplexity et Gemini. Les LLM citent-ils votre enseigne quand un internaute demande « quelle franchise ouvrir en restauration ? ».',
        items: [
          'Analyse de l\'univers informatif du réseau de franchise',
          'Mesure de la légitimité et citabilité de l\'enseigne',
          'Évaluation de la densité factuelle (DIP, chiffres clés, témoignages)',
          'Benchmark concurrentiel sur les requêtes IA liées à la franchise',
        ],
      },
      {
        title: 'Étude de marché & mots-clés franchise',
        subtitle: 'Cartographie des requêtes des candidats à la franchise (« ouvrir une franchise + secteur ») et des consommateurs finaux (« enseigne + ville »). Identification des zones géographiques à fort potentiel.',
        items: [
          'Requêtes candidats : « franchise rentable », « devenir franchisé »',
          'Requêtes consommateurs : « enseigne + ville », « à proximité »',
          'Analyse des requêtes posées aux moteurs IA sur le choix de franchise',
          'Volumes de recherche par secteur d\'activité et par zone',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Structuration du site pour servir les deux audiences : candidats franchisés en parcours de décision et clients finaux en recherche locale.',
        items: [
          'Page enseigne → page secteur → page recrutement franchisés',
          'Pages locales uniques par point de vente (pas de duplication)',
          'Optimisation des balises title, meta, Hn par template',
          'Maillage interne entre pages nationales et pages locales',
        ],
      },
      {
        title: 'Stratégie de contenu franchise',
        subtitle: 'Création de contenus qui positionnent l\'enseigne comme référence du secteur : guides pour les candidats, témoignages de franchisés, données de performance du réseau.',
        items: [
          'Guides « ouvrir une franchise en [secteur] » ciblant les PAA Google',
          'Fiches transparentes : apport, droit d\'entrée, CA moyen, redevances',
          'Témoignages de franchisés avec données de résultats vérifiables',
          'Contenus factuels auto-suffisants, rédigés pour être citables par les LLM',
        ],
      },
      {
        title: 'Autorité & netlinking franchise',
        subtitle: 'Développement de l\'autorité du réseau via les annuaires franchise qualifiés, la presse spécialisée et les événements du secteur.',
        items: [
          'Observatoire de la Franchise, Toute la Franchise, AC Franchise',
          'Communiqués presse sur les ouvertures et résultats du réseau',
          'Présence sur le Salon de la Franchise et les événements FFF',
          'Partenariats avec les CCI et organismes d\'accompagnement',
        ],
      },
      {
        title: 'Google Business Profile & SEO local multi-sites',
        subtitle: 'Optimisation de chaque fiche Google Business Profile du réseau pour capter les requêtes « enseigne + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie GBP principale adaptée au secteur de chaque franchisé',
          'Gestion centralisée des avis clients et stratégie de collecte par point de vente',
          'Photos, horaires, attributs et posts cohérents avec la charte de l\'enseigne',
          'Citations NAP identiques sur les annuaires locaux et franchise',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel consolidé pour le franchiseur et individualisé par franchisé : positions Google, trafic organique, visibilité IA et conversions.',
        items: [
          'Positions Google par mot-clé (national + local par point de vente)',
          'Trafic organique par franchisé et par zone géographique',
          'Score GEO : visibilité du réseau dans les moteurs IA',
          'Demandes de contact candidats + clients finaux par point de vente',
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
        title: 'Audit technique du site',
        description: 'Analyse de l\'architecture, de la vitesse de chargement et de l\'indexation, avec un focus sur les pages réseau, concept et candidature franchisé.',
      },
      {
        id: 2,
        title: 'Audit GEO de citabilité IA',
        description: 'Mesure de la visibilité de votre enseigne dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100, benchmark concurrentiel et plan de progression.',
      },
      {
        id: 3,
        title: 'Kit schema.org franchise',
        description: 'Balisage structuré Organization, LocalBusiness et FAQPage avec votre concept, vos implantations par ville et vos données de recrutement franchisé.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages concept et implantations, guides (ouvrir une franchise, DIP), articles développement réseau, FAQ, le tout intégré dans votre CMS ou livré par FTP.',
      },
      {
        id: 5,
        title: 'Campagne de netlinking',
        description: 'Liens depuis les annuaires franchise (FFF, Observatoire de la Franchise), les blogs entrepreneurs et la presse économique spécialisée.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel avec positions Google par point de vente, trafic organique candidats et clients, score GEO et suivi de la visibilité dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre réseau de franchise dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un entrepreneur demande à ChatGPT « quelle franchise recommandes-tu pour ouvrir un commerce ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre enseigne n\'apparaît dans aucune source citée, elle est absente de ce canal d\'acquisition de candidats.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quelle franchise recommandes-tu pour ouvrir un commerce ? » : le LLM ne recommande pas une enseigne unique. Il structure sa réponse par catégorie de secteur (restauration rapide, services à la personne, fitness, immobilier) et cite 3 à 5 enseignes par catégorie avec les fourchettes d\'apport personnel et de droit d\'entrée. Les réseaux disposant de données financières publiques et vérifiables sont systématiquement cités.</p><h4>Requêtes d\'information</h4><p>« Comment choisir une bonne franchise ? » : le LLM génère un guide structuré en 6 à 8 critères (solidité du réseau, rentabilité documentée, contenu du DIP, apport personnel, accompagnement, zone d\'exclusivité). Il ne cite aucune enseigne spécifique. Les sites publiant des guides comparatifs avec données chiffrées actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes tarifaires</h4><p>« Coût franchise restauration rapide » : le LLM fournit des fourchettes détaillées par enseigne (McDonald\'s : 150 000 à 250 000 euros d\'apport, Subway : 50 000 à 100 000 euros). Les sites proposant des grilles de coûts précises (droit d\'entrée, aménagement, redevances) sont prioritairement extraits.</p><h4>Requêtes de comparaison</h4><p>« Franchise vs commerce indépendant » : le LLM structure un comparatif avec des chiffres (taux de survie à 5 ans de 80 % pour les franchisés contre 50 % pour les indépendants, source FFF). Les contenus factuels et les sources institutionnelles (Fédération Française de la Franchise) dominent les citations.</p>',
    structuredData:
      '<p>Pour les réseaux de franchise, les types schema.org recommandés sont : <code>Organization</code> (enseigne franchiseur), <code>LocalBusiness</code> (chaque point de vente franchisé), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>LocalBusiness</code> avec sous-type sectoriel (par exemple <code>Restaurant</code> ou <code>Store</code>) permet à Google et aux LLM d\'identifier précisément chaque franchisé, sa localisation, ses horaires et ses avis.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre réseau de franchise par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus du réseau), la Légitimité & Citabilité (signaux de confiance externes, mentions presse, annuaires franchise), et la Densité Factuelle (richesse des données structurées, chiffres clés du réseau et entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les franchises',
    items: [
      {
        question: 'Combien coûte le référencement d\'un réseau de franchise ?',
        answer:
          'Le budget SEO pour un réseau de franchise dépend du nombre de points de vente et de la couverture géographique ciblée. Chez Rankwell, les accompagnements SEO pour les réseaux de franchise démarrent à 2 000 euros par mois pour un franchiseur avec 5 à 10 implantations, et peuvent atteindre 8 000 à 12 000 euros par mois pour un réseau national de 50 points de vente ou plus, incluant la gestion des pages locales et le reporting consolidé.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO franchise ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les pages locales de franchisés sur des zones à faible concurrence (villes moyennes) se positionnent plus rapidement que les requêtes nationales comme « franchise rentable ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le nombre de points de vente à référencer.',
      },
      {
        question: 'Comment éviter la duplication de contenu entre les pages de chaque franchisé ?',
        answer:
          'La duplication est le piège principal du SEO franchise. Copier la même description sur 50 pages locales en changeant uniquement le nom de la ville pénalise l\'ensemble du réseau. Rankwell crée des templates de pages locales avec des blocs de contenu unique par franchisé (avis locaux, équipe, services spécifiques, événements) tout en maintenant la cohérence de marque exigée par le franchiseur.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un réseau de franchise ?',
        answer:
          'Un blog est un levier puissant pour les réseaux de franchise, à condition de cibler les deux audiences. Pour les candidats à la franchise : guides « ouvrir une franchise en [secteur] », témoignages de franchisés, analyses de rentabilité. Pour les clients finaux : contenus locaux par point de vente. Rankwell recommande 2 à 4 articles par mois au niveau du franchiseur, complétés par des contenus locaux trimestriels par franchisé.',
      },
      {
        question: 'Comment un réseau de franchise peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un réseau doit accumuler des signaux de notoriété sur le web : présence sur les annuaires franchise (Observatoire de la Franchise, AC Franchise), mentions dans la presse économique, fiches Google Business optimisées par point de vente, données financières transparentes (DIP, CA moyen, nombre de franchisés). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une franchise ?',
        answer:
          'Le SEO national positionne le franchiseur sur les requêtes génériques (« franchise rentable », « devenir franchisé ») pour recruter de nouveaux candidats. Le SEO local positionne chaque franchisé sur « enseigne + ville » pour capter les clients finaux dans sa zone de chalandise. Rankwell combine les deux approches : une stratégie de contenu nationale pour le recrutement et des pages locales optimisées par point de vente.',
      },
      {
        question: 'Les annuaires franchise suffisent-ils pour être visible ?',
        answer:
          'Les annuaires comme l\'Observatoire de la Franchise ou Toute la Franchise sont utiles pour la visibilité initiale auprès des candidats, mais ils créent une dépendance : votre enseigne n\'est qu\'un profil parmi des centaines. Un site propre bien référencé permet de contrôler le discours de marque, de convertir directement et de construire une autorité durable. Rankwell aide les réseaux de franchise à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre réseau de franchise visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre réseau. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à vos enjeux multi-sites.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
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
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Garage auto', href: '/agence-geo-seo/secteur/garage' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Organization',
};

export default data;
