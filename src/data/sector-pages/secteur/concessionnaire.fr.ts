/**
 * DATA - Page Secteur : Concessionnaires automobiles (FR)
 * Route : /agence-geo-seo/secteur/concessionnaire
 *
 * Mots-clés Ahrefs, mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'concessionnaire',
    title: 'Agence GEO & SEO pour Concessionnaires - Rankwell',
    description:
      'Rankwell accompagne les concessionnaires automobiles dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur automobile.',
  },

  // ============================================
  // BLOC 1 - HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Concessionnaires' },
    ],
    title: 'GEO & SEO Concessionnaire : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs acheteurs comparent en ligne avant de pousser la porte d\'une concession. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur automobile et à la concurrence des portails multimarques.',
    ctaText: 'Demander un audit GEO & SEO concessionnaire',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 - Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les concessionnaires',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">81 % des acheteurs automobiles commencent leur parcours en ligne.</strong> Les requêtes combinent marque, modèle et ville : « concessionnaire Peugeot Lyon », « Toyota occasion Marseille ». C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 concessions du Local Pack et les portails qui dominent les résultats organiques.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le panier moyen d\'un véhicule neuf dépasse 27 000 euros en France.</strong> Ce montant classe le secteur parmi les achats à cycle long : le prospect consulte en moyenne 4,2 sources avant de contacter une concession. Chaque contenu doit répondre aux interrogations sur les prix, le financement, la reprise et les délais.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">La Centrale, leboncoin, Autosphere, Aramis Auto, Stellantis &You</strong> captent une part massive du trafic transactionnel automobile. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un concessionnaire reste noyé dans les résultats de ces portails, y compris sur son propre nom de marque.',
  },

  // ============================================
  // QUOTE - Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 - Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'concessionnaire', volume: 28000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'concessionnaire automobile', volume: 12000, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'concessionnaire autour de moi', volume: 3300, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'concessionnaire peugeot', volume: 2800, intent: 'locale', difficulty: 'faible' },
      { keyword: 'concessionnaire renault', volume: 2300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'concessionnaire toyota', volume: 1600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'concessionnaire automobile autour de moi', volume: 1100, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'achat voiture neuve', volume: 900, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'voiture occasion concessionnaire', volume: 800, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'concessionnaire occasion', volume: 800, intent: 'commerciale', difficulty: 'élevée' },
    ],
    interpretation:
      'Chaque mois, plus de 28 000 recherches portent sur le terme « concessionnaire » et des milliers d\'autres combinent une marque avec une localité. La majorité des acheteurs clique sur les 3 premiers résultats ou suit la recommandation d\'un moteur IA. Si votre concession n\'y figure pas, ces acheteurs se rendent chez un concurrent situé à quelques kilomètres.',
  },

  // ============================================
  // BLOC 4 - Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les concessionnaires',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur automobile.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site de la concession, de la gestion du stock en ligne et des facteurs techniques qui freinent l\'indexation des fiches véhicules.',
        items: [
          'Indexation des pages stock (neuf, occasion, véhicules de démonstration)',
          'Balises schema.org AutoDealer et Vehicle',
          'Performance et Core Web Vitals sur les pages riches en photos',
          'Crawl des filtres de recherche et gestion des facettes',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de la concession dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la concession',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu (prix, disponibilités, services)',
          'Benchmark concurrentiel sur les requêtes IA automobiles',
        ],
      },
      {
        title: 'Étude de marché & mots-clés automobiles',
        subtitle: 'Cartographie des requêtes par marque, modèle, type de véhicule et zone de chalandise. Identification des combinaisons à fort potentiel sous-exploitées.',
        items: [
          'Combinaisons marque + modèle + ville à faible concurrence',
          'Requêtes d\'intention d\'achat : neuf, occasion, LOA, LLD',
          'Analyse des requêtes posées aux moteurs IA sur l\'automobile',
          'Volumes de recherche réels par marque et segment',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat automobile et le crawl Google.',
        items: [
          'Page marque → page modèle → fiche véhicule → page contact/essai',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par type de page',
          'Pages de destination pour les offres promotionnelles et les campagnes saisonnières',
        ],
      },
      {
        title: 'Stratégie de contenu automobile',
        subtitle: 'Création de contenus qui répondent aux questions des acheteurs à chaque étape de leur parcours, rédigés pour être citables par les LLM.',
        items: [
          'Guides comparatifs (essence vs diesel vs électrique, LOA vs LLD vs crédit)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (prix, consommation, autonomie)',
          'Pages de conseil : entretien, reprise, financement, assurance',
        ],
      },
      {
        title: 'Autorité & netlinking automobile',
        subtitle: 'Développement de l\'autorité via les annuaires automobiles qualifiés et les publications spécialisées du secteur.',
        items: [
          'La Centrale, Autosphere, L\'argus, Caradisiac',
          'Publications dans la presse automobile régionale et nationale',
          'Partenariats avec des sites de comparateurs et guides d\'achat',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation des fiches Google Business Profile de chaque point de vente pour capter les requêtes locales « concessionnaire + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Car Dealer + catégories secondaires par marque représentée',
          'Gestion des avis clients et stratégie de collecte post-livraison',
          'Photos du showroom, du parc occasion et de l\'atelier, horaires et attributs',
          'Citations NAP cohérentes sur les annuaires automobiles et les pages jaunes',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par marque et modèle, et les demandes de contact ou d\'essai générées.',
        items: [
          'Positions Google par mot-clé (marque + ville, modèle + occasion)',
          'Trafic organique par type de page (stock neuf, occasion, services)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de contact, prises de rendez-vous et demandes d\'essai',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 - Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic complet de votre site : pages stock v\u00e9hicules et pages marques, vitesse de chargement, indexation des fiches et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates concessionnaire aupr\u00e8s des moteurs IA, benchmark de vos concurrents locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage AutoDealer, Vehicle, Offer et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos marques repr\u00e9sent\u00e9es et vos services.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages mod\u00e8les, guides d\'achat LOA, LLD et occasion, FAQ financement, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis les annuaires auto, La Centrale et blogs automobile. Suivi du Domain Rating et de la progression.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par marque et par zone, trafic organique, demandes d\'essai et contacts attribu\u00e9s au SEO, \u00e9volution du Score GEO et recommandations pour la p\u00e9riode suivante.',
      },
    ],
  },

  // ============================================
  // BLOC 6 - Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre concession dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel concessionnaire auto recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre concession n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel concessionnaire auto recommandes-tu à Lyon ? » : le LLM ne cite aucun établissement par nom. Il fournit une liste de critères de sélection (proximité, marque, avis clients, qualité du SAV) et renvoie vers les outils de localisation des constructeurs et Google Maps. Le concessionnaire qui accumule des signaux de notoriété en ligne (avis, mentions presse locale, contenu factuel) a une chance d\'être nommé dans les futures réponses.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon concessionnaire ? » ou « concessionnaire vs mandataire auto, quelle différence ? » : le LLM génère un guide structuré en 6 à 8 critères (transparence des prix, SAV, certifications constructeur, conditions de financement) sans citer de source externe. Les concessions publiant ce type de contenu factuel sur leur site peuvent devenir la source citée par le LLM.</p><h4>Requêtes tarifaires</h4><p>« Prix voiture neuve concessionnaire » : le LLM donne des fourchettes par segment (citadine 15 000-22 000 euros, SUV 28 000-55 000 euros) et détaille les leviers de négociation (remise catalogue, reprise, financement constructeur, bonus écologique). Les sites proposant des grilles tarifaires actualisées par modèle ont un avantage de citabilité.</p><h4>Requêtes locales et Maps</h4><p>Sur « concessionnaire autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les concessions disposant d\'une fiche Google Business Profile complète (catégorie Car Dealer, avis récents, photos du showroom, horaires) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les concessionnaires automobiles, les types schema.org recommandés sont : <code>AutoDealer</code> (type principal), <code>Vehicle</code> (pour chaque fiche véhicule), <code>Offer</code> (pour les prix et promotions), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>AutoDealer</code> permet à Google et aux LLM d\'identifier précisément les marques représentées, la localisation et les services proposés par la concession.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre concession par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les marques, modèles et services), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 - FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les concessionnaires',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de concessionnaire automobile ?',
        answer:
          'Le budget SEO pour un concessionnaire dépend du nombre de marques représentées, de la taille du stock en ligne et de la zone de chalandise ciblée. Chez Rankwell, les accompagnements SEO pour les concessionnaires démarrent à 2 000 euros par mois pour un site mono-marque et une zone locale, et peuvent atteindre 5 000 à 8 000 euros par mois pour un groupe multimarque couvrant plusieurs départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO automobile ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« concessionnaire Toyota Nantes ») sont plus rapides à positionner que les requêtes génériques nationales. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau d\'autorité du site existant.',
      },
      {
        question: 'Comment référencer les fiches véhicules qui changent constamment ?',
        answer:
          'La rotation du stock est le principal défi SEO des concessionnaires. Rankwell met en place une architecture qui dissocie les pages modèles permanentes (indexées et positionnées) des fiches véhicules unitaires (stock dynamique). Les pages modèles captent le trafic SEO et renvoient vers les véhicules disponibles. Cette structure évite les erreurs 404 massives et conserve l\'autorité acquise.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une concession ?',
        answer:
          'Un blog est un levier puissant s\'il est bien ciblé. Les articles doivent répondre aux questions réelles des acheteurs (comparatifs, guides d\'achat, conseils de financement, évolutions réglementaires), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne liées à l\'automobile.',
      },
      {
        question: 'Comment un concessionnaire peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, une concession doit accumuler des signaux de notoriété sur le web : présence sur les portails automobiles (La Centrale, L\'argus), mentions dans la presse locale, profil Google Business optimisé avec des avis récents, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un concessionnaire ?',
        answer:
          'Le SEO local cible les requêtes « concessionnaire + marque + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur SUV hybride 2026 ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la stratégie commerciale de la concession : un groupe multisite bénéficie d\'un SEO local par point de vente et d\'un SEO national pour la marque groupe.',
      },
      {
        question: 'La Centrale et leboncoin suffisent-ils pour vendre des véhicules en ligne ?',
        answer:
          'Les portails comme La Centrale ou leboncoin sont utiles pour la visibilité des annonces, mais ils créent une dépendance coûteuse : le concessionnaire paie un abonnement et reste un profil parmi des milliers. Un site propre bien référencé permet de contrôler son image, de convertir directement sans commission et de construire une autorité durable. Rankwell aide les concessionnaires à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des portails.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre concession visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Garage auto', href: '/agence-geo-seo/secteur/garage' },
        { label: 'SEO Assurance', href: '/agence-geo-seo/secteur/assurance' },
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'SEO E-commerce', href: '/agence-geo-seo/projet/ecommerce' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Prestashop', href: '/agence-geo-seo/cms/prestashop' },
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
      { label: 'Garage auto', href: '/agence-geo-seo/secteur/garage' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Diagnostiqueur immobilier', href: '/agence-geo-seo/secteur/diagnostiqueur' },
      { label: 'Syndic de copropriété', href: '/agence-geo-seo/secteur/syndic' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'AutoDealer',
};

export default data;
