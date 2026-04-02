/**
 * DATA : Page Secteur Menuisiers (FR)
 * Route : /agence-geo-seo/secteur/menuisier
 *
 * Contenu 100 % sectoriel, non interchangeable.
 * Mots-clés Ahrefs (country "fr", mars 2026).
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'menuisier',
    title: 'Agence GEO & SEO pour Menuisiers - Rankwell',
    description:
      'Rankwell accompagne les menuisiers et entreprises de menuiserie dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la menuiserie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Menuisiers' },
    ],
    title: 'GEO & SEO Menuisier : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un menuisier sur Google et dans les réponses IA. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du secteur de la menuiserie.',
    ctaText: 'Demander un audit GEO & SEO menuisier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les menuisiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des requêtes menuisier contiennent une composante locale</strong> (« menuisier autour de moi », « menuisier bordeaux »). Le client cherche un artisan de proximité sur mobile pour un projet concret : fenêtres, dressing, escalier. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 résultats du Local Pack.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le secteur exige confiance artisanale et conformité technique.</strong> Le client vérifie qualification (CAP, Brevet de maîtrise, Qualibat, RGE pour les menuiseries extérieures), assurance décennale et avis avant de contacter un menuisier. Sans ces signaux de confiance sur le site, Google et les moteurs IA relèguent le professionnel derrière les plateformes.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Houzz, Travaux.com, Pages Jaunes, Quotatis et Habitatpresto</strong> captent les requêtes transactionnelles de menuiserie avec des devis comparatifs instantanés. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un menuisier indépendant reste invisible face à ces agrégateurs.',
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
      { keyword: 'menuisier', volume: 12000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'menuisier autour de moi', volume: 4000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'menuiserie autour de moi', volume: 2500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'menuiserie sur mesure', volume: 600, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'menuisier paris', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'menuisier bordeaux', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'menuisier ébéniste', volume: 600, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'menuisier lyon', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'devis menuiserie', volume: 450, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'artisan menuisier', volume: 350, intent: 'mixte', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches locales comme « menuisier autour de moi » ou « menuisier bordeaux » représentent autant de projets concrets : pose de fenêtres, création de dressing, fabrication d\'escalier. La majorité des particuliers contacte les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre atelier n\'y figure pas, ces chantiers vont à un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les menuisiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la menuiserie.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site de menuiserie.',
        items: [
          'Structure des pages par type de prestation (menuiserie intérieure, extérieure, agencement)',
          'Balises schema.org Carpenter et HomeAndConstructionBusiness',
          'Performance et Core Web Vitals (images de réalisations souvent lourdes)',
          'Crawl et indexation des galeries photo de chantiers',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du menuisier dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'entreprise de menuiserie',
          'Mesure de la légitimité et citabilité sur les requêtes artisanales',
          'Évaluation de la densité factuelle du contenu (labels, certifications, réalisations)',
          'Benchmark concurrentiel sur les requêtes IA du secteur bois',
        ],
      },
      {
        title: 'Étude de marché & mots-clés menuiserie',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à fort potentiel et faible concurrence.',
        items: [
          'Combinaisons prestation + ville (« menuisier bordeaux », « menuiserie sur mesure lyon »)',
          'Analyse des requêtes posées aux moteurs IA sur la menuiserie',
          'Volumes de recherche réels par spécialité (escalier, dressing, fenêtre, agencement)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du particulier en recherche d\'un menuisier.',
        items: [
          'Page prestation (escalier, fenêtre, dressing) vers page devis vers page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec les termes du secteur bois',
        ],
      },
      {
        title: 'Stratégie de contenu menuiserie',
        subtitle: 'Création de contenus qui démontrent le savoir-faire de l\'atelier, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : « Comment choisir entre menuiserie bois, PVC et aluminium »',
          'Pages de réalisations avec photos avant/après et données techniques',
          'FAQ répondant aux PAA Google (prix, délais, labels, différences métiers)',
        ],
      },
      {
        title: 'Autorité & netlinking menuiserie',
        subtitle: 'Développement de l\'autorité via les annuaires artisanaux qualifiés et les publications spécialisées du secteur bois.',
        items: [
          'Houzz, Qualibat, Chambre des Métiers et de l\'Artisanat',
          'Publications dans la presse spécialisée bois et construction',
          'Partenariats avec les sites de la Fédération Française du Bâtiment et de la CAPEB',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'atelier pour capter les requêtes locales « menuisier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Carpenter + catégories secondaires (Cabinetry, Woodworker)',
          'Gestion des avis clients et stratégie de collecte post-chantier',
          'Photos de réalisations, horaires, zone d\'intervention et posts réguliers',
          'Citations NAP cohérentes sur les annuaires artisanaux (Pages Jaunes, Houzz, Qualibat)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé menuiserie',
          'Trafic organique par prestation (escalier, dressing, fenêtre)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions téléphoniques',
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
        title: 'Audit technique SEO',
        description: 'Analyse approfondie de l\'architecture de votre site : pages réalisations, pages prestations (escalier, dressing, fenêtre), vitesse de chargement et indexation des galeries photo.',
      },
      {
        id: 2,
        title: 'Audit GEO (visibilité IA)',
        description: 'Mesure de la citabilité de votre atelier dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100 avec benchmark contre vos concurrents locaux.',
      },
      {
        id: 3,
        title: 'Kit schema.org menuisier',
        description: 'Balisage structuré Carpenter, HomeAndConstructionBusiness et FAQPage, prêt à intégrer. Permet à Google et aux moteurs IA d\'identifier vos spécialités et votre zone.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Rédaction de pages réalisations, articles sur le bois et l\'aménagement, FAQ devis et délais. Livraison au format CMS ou via injection FTP.',
      },
      {
        id: 5,
        title: 'Netlinking artisan',
        description: 'Acquisition de liens depuis Houzz, Qualibat, blogs habitat et presse spécialisée construction pour renforcer l\'autorité de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel : positions Google par mot-clé et par ville, trafic organique par prestation, score GEO et demandes de devis générées.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre atelier de menuiserie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel menuisier recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre atelier n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel menuisier recommandes-tu à Lyon ? » : le LLM ne cite aucun artisan par nom. Il fournit une liste de 6 à 7 critères de sélection (qualification CAP/Brevet de maîtrise, label Qualibat, assurance décennale, avis clients) et renvoie vers Houzz, Pages Jaunes et Travaux.com. Les menuisiers disposant d\'une fiche Google Business complète et d\'avis récents sont mentionnés comme plus faciles à évaluer.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon menuisier ? » : le LLM génère un guide structuré en critères (qualifications, labels, devis comparatifs, visite d\'un chantier précédent). Aucun professionnel cité. Le menuisier qui publie ce type de contenu structuré sur son site peut être extrait comme source de référence.</p><h4>Requêtes comparatives</h4><p>« Menuisier vs ébéniste : quelle différence ? » : le LLM distingue clairement les deux métiers. Le menuisier travaille les éléments fonctionnels du bâtiment (fenêtres, portes, escaliers, placards), l\'ébéniste se spécialise dans la fabrication et restauration de meubles. Les sites formalisant cette distinction avec des données précises ont de fortes chances d\'être extraits.</p><h4>Requêtes tarifaires et locales</h4><p>« Prix menuisier pour un dressing sur mesure » : le LLM donne des fourchettes chiffrées (800 à 3 000 euros pour un dressing linéaire, 3 000 à 8 000 euros pour un dressing en L avec finitions). Sur « menuisier autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les ateliers disposant d\'une fiche GBP complète (catégorie, avis récents, photos de réalisations) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les menuisiers, les types schema.org recommandés sont : <code>Carpenter</code> (type principal, sous-type de <code>HomeAndConstructionBusiness</code>), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Carpenter</code> permet à Google et aux LLM d\'identifier précisément la spécialité (menuiserie intérieure, extérieure, agencement), la zone d\'intervention et les avis clients de l\'artisan.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre atelier de menuiserie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur les prestations menuiserie), la Légitimité & Citabilité (signaux de confiance externes : Qualibat, avis, presse), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les menuisiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de menuisier ?',
        answer:
          'Le budget SEO pour un menuisier dépend de la zone géographique ciblée et du nombre de prestations à référencer (menuiserie intérieure, extérieure, agencement). Chez Rankwell, les accompagnements SEO pour les menuisiers démarrent à 1 200 euros/mois pour une zone locale et une spécialité, et peuvent atteindre 3 500 à 5 000 euros/mois pour une entreprise de menuiserie multi-prestations couvrant plusieurs départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO menuiserie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« menuisier agencement Nantes », « menuiserie sur mesure Strasbourg ») sont plus rapides à positionner que les requêtes génériques très concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre marché local.',
      },
      {
        question: 'Quels labels et certifications aident au référencement d\'un menuisier ?',
        answer:
          'Les labels Qualibat, RGE (Reconnu Garant de l\'Environnement, obligatoire pour les travaux de rénovation énergétique ouvrant droit aux aides) et le Brevet de maîtrise délivré par la Chambre des Métiers sont des signaux de confiance forts. Google et les moteurs IA les utilisent pour évaluer la crédibilité du professionnel. Rankwell intègre ces certifications dans la stratégie de contenu et le balisage structuré du site.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de menuiserie ?',
        answer:
          'Un blog est un levier efficace s\'il est bien ciblé. Les articles doivent répondre à des questions réelles des clients (choix entre bois, PVC et aluminium, entretien des menuiseries, différence menuisier/ébéniste) et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 3 articles par mois, ciblant des requêtes informationnelles de longue traîne liées au secteur bois.',
      },
      {
        question: 'Comment un menuisier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un menuisier doit accumuler des signaux de notoriété sur le web : présence sur les annuaires artisanaux (Houzz, Qualibat, Pages Jaunes), avis clients positifs, profil Google Business optimisé, contenus riches et factuels sur son site (prix, réalisations, certifications). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un menuisier ?',
        answer:
          'Le SEO local cible les requêtes « menuisier + ville » ou « menuisier autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires artisanaux. Le SEO national vise des requêtes plus larges (« menuiserie sur mesure », « fabricant de fenêtres bois ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon l\'ambition et la zone de chalandise du menuisier.',
      },
      {
        question: 'Les plateformes de mise en relation suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme Travaux.com, Habitatpresto ou Quotatis sont utiles pour la visibilité initiale, mais elles créent une dépendance : le menuisier n\'est qu\'un profil parmi des centaines, soumis à la concurrence par le prix. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les menuisiers à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre atelier de menuiserie visible ?',
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
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
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
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Carpenter',
};

export default data;
