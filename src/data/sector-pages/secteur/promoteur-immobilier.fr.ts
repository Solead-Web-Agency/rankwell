/**
 * DATA : Page Secteur Promoteurs immobiliers (FR)
 * Route : /agence-geo-seo/secteur/promoteur-immobilier
 *
 * Données Ahrefs (country: fr) - mars 2026
 * Auto-test LLM : 5 requêtes testées, rapport dans rapport-test-promoteur-immobilier.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'promoteur-immobilier',
    title: 'Agence GEO & SEO pour Promoteurs immobiliers - Rankwell',
    description:
      'Rankwell accompagne les promoteurs immobiliers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour la promotion immobilière.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Promoteurs immobiliers' },
    ],
    title: 'GEO & SEO Promoteur immobilier : visibilité Google & moteurs IA',
    subtitle:
      'Vos programmes neufs doivent apparaître là où les acquéreurs et investisseurs cherchent : sur Google, mais aussi dans les réponses de ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au cycle de commercialisation immobilière.',
    ctaText: 'Demander un audit GEO & SEO promoteur immobilier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les promoteurs immobiliers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches programmes neufs contiennent un nom de ville ou de quartier</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> à double échelle : chaque programme doit être positionné sur sa commune, et la marque du promoteur doit rayonner sur l\'ensemble de ses zones d\'implantation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Cycle de commercialisation de 12 à 24 mois par programme</strong> : le SEO doit produire des résultats dans cette fenêtre. Le secteur est soumis aux évolutions réglementaires (Pinel, PTZ, RE2020, ZAN) qui modifient les requêtes des acquéreurs à chaque loi de finances.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">SeLoger Neuf, Logic-Immo, Bien\'ici, Explorimmoneuf</strong> captent une part dominante du trafic sur « programme neuf + ville ». Les portails nationaux (Nexity, Bouygues Immobilier, Kaufman & Broad) occupent les premières positions par leur autorité de domaine. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un promoteur régional reste invisible.',
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
      { keyword: 'promoteur immobilier', volume: 7000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'immobilier neuf', volume: 1100, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'programme immobilier neuf', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'promoteur immobilier autour de moi', volume: 600, intent: 'locale', difficulty: 'faible' },
      { keyword: 'investissement immobilier neuf', volume: 600, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'promoteur immobilier toulouse', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'programme immobilier neuf lyon', volume: 350, intent: 'locale', difficulty: 'faible' },
      { keyword: 'promoteur immobilier bordeaux', volume: 350, intent: 'locale', difficulty: 'faible' },
      { keyword: 'promoteur immobilier paris', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'programme neuf bordeaux', volume: 300, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches comme « promoteur immobilier autour de moi » ou « programme immobilier neuf Lyon » représentent autant d\'acquéreurs et d\'investisseurs en phase active de recherche. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si vos programmes n\'y figurent pas, ces acheteurs signent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les promoteurs immobiliers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de la promotion immobilière.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site du promoteur, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages programmes.',
        items: [
          'Structure des pages par programme, ville et typologie de bien',
          'Balises schema.org RealEstateAgent et Residence',
          'Performance et Core Web Vitals (fiches programmes avec visuels lourds)',
          'Crawl et indexation des pages programmes actifs vs archivés',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du promoteur dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du promoteur',
          'Mesure de la légitimité et citabilité face aux portails (SeLoger Neuf, Bien\'ici)',
          'Évaluation de la densité factuelle des fiches programmes',
          'Benchmark concurrentiel sur les requêtes IA immobilières',
        ],
      },
      {
        title: 'Étude de marché & mots-clés immobiliers',
        subtitle: 'Cartographie des requêtes par type de programme, zone géographique et profil d\'acquéreur. Identification des combinaisons à fort potentiel.',
        items: [
          'Combinaisons "programme neuf + ville" et "promoteur + région"',
          'Requêtes liées aux dispositifs fiscaux (Pinel, PTZ, LMNP)',
          'Analyse des requêtes posées aux moteurs IA sur l\'immobilier neuf',
          'Volumes de recherche par ville et par type de bien',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours acquéreur et le crawl Google.',
        items: [
          'Page ville → page programme → formulaire de contact / prise de rendez-vous',
          'Requête principale + 3 à 5 requêtes secondaires par fiche programme',
          'Optimisation des balises title, meta, Hn par programme',
          'Gestion du cycle de vie des pages (lancement, commercialisation, livré)',
        ],
      },
      {
        title: 'Stratégie de contenu immobilier',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise du promoteur, rédigés pour être citables par les LLM.',
        items: [
          'Guides acquéreurs : acheter en VEFA, garanties, étapes de la livraison',
          'Pages de ville avec données marché (prix au m2, évolution, demande locative)',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Contenus sur les dispositifs fiscaux actualisés à chaque loi de finances',
        ],
      },
      {
        title: 'Autorité & netlinking immobilier',
        subtitle: 'Développement de l\'autorité via les portails immobiliers qualifiés et les publications spécialisées.',
        items: [
          'SeLoger Neuf, Logic-Immo, Bien\'ici, Explorimmoneuf',
          'Publications dans la presse immobilière (Le Moniteur, Batiactu, Immoweek)',
          'Partenariats avec des sites institutionnels (ANIL, notaires.fr)',
          'Communiqués de presse sur les lancements de programmes',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation des fiches Google Business Profile du promoteur et de chaque bureau de vente pour capter les requêtes locales et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Real estate developer + catégories secondaires par activité',
          'Fiche GBP par bureau de vente et par programme phare',
          'Photos des résidences, plans, rendus 3D et posts réguliers',
          'Citations NAP cohérentes sur les portails immobiliers et annuaires locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par programme et les demandes de contact générées.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par fiche programme',
          'Score GEO : visibilité dans les moteurs IA',
          'Leads générés et taux de conversion par programme',
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
        description: 'Diagnostic site, pages programmes neufs, vitesse, indexation des r\u00e9sidences.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates immobilier neuf, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage RealEstateAgent, Residence, Offer, FAQPage avec programmes et localisations.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages programmes, guides achat neuf (Pinel, PTZ), articles quartiers, FAQ, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis portails immobilier neuf (SeLoger Neuf, Explorimmoneuf), presse immobili\u00e8re, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par programme et ville, trafic organique, demandes de plaquette attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : vos programmes dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel promoteur immobilier recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre marque n\'apparaît dans aucune source citée, vos programmes sont invisibles dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel promoteur immobilier recommandes-tu à Lyon ? » : le LLM cite 5 à 7 noms, majoritairement des promoteurs nationaux (Bouygues Immobilier, Nexity, Kaufman & Broad, Vinci Immobilier). Chaque nom est accompagné d\'un qualificatif de positionnement. Les promoteurs régionaux ou indépendants ne sont cités que s\'ils disposent d\'une forte présence web et presse.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon promoteur immobilier ? » : le LLM génère un guide structuré en 6 à 8 critères (garantie financière d\'achèvement, labels NF Habitat, historique de livraisons, avis acquéreurs). Aucun promoteur n\'est cité nommément. Le promoteur qui publie ce type de contenu sur son site peut être extrait comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix immobilier neuf au m2 Paris » : le LLM fournit des fourchettes chiffrées par arrondissement (8 000 à 15 000 euros/m2, pics au-delà de 20 000 euros). Les sites proposant des baromètres de prix géolocalisés et actualisés sont favorisés comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « programme neuf autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les programmes référencés sur les portails (SeLoger Neuf, Bien\'ici) et disposant d\'une fiche Google Business Profile complète apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les promoteurs immobiliers, les types schema.org recommandés sont : <code>RealEstateAgent</code> (type principal), <code>Residence</code> (par programme), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>RealEstateAgent</code> permet à Google et aux LLM d\'identifier précisément la zone d\'intervention, les types de programmes et les certifications du promoteur.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre marque par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos programmes et votre marché), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les promoteurs immobiliers',
    items: [
      {
        question: 'Combien coûte le référencement du site d\'un promoteur immobilier ?',
        answer:
          'Le budget SEO pour un promoteur immobilier dépend du nombre de programmes actifs et des zones géographiques ciblées. Chez Rankwell, les accompagnements SEO pour les promoteurs démarrent à 2 000 euros/mois pour un portefeuille de 3 à 5 programmes sur une région, et peuvent atteindre 6 000 à 10 000 euros/mois pour un promoteur multi-régions avec 15 programmes ou plus en commercialisation simultanée.',
      },
      {
        question: 'Combien de temps faut-il pour positionner un programme neuf sur Google ?',
        answer:
          'Les premiers résultats apparaissent entre 3 et 6 mois. Les requêtes locales de niche (ex : « programme neuf Villeurbanne 3 pièces ») sont plus rapides à positionner que les requêtes nationales concurrentielles. Rankwell fournit un calendrier prévisionnel aligné sur le cycle de commercialisation de chaque programme, car le SEO doit produire des leads pendant la fenêtre de vente.',
      },
      {
        question: 'Comment gérer le SEO des programmes déjà livrés ou soldés ?',
        answer:
          'Les pages de programmes livrés ne doivent pas être supprimées : elles portent de l\'autorité et des backlinks. Rankwell recommande de les transformer en pages de témoignage ou de portefeuille de réalisations, avec une redirection du trafic vers les programmes actifs de la même ville. Cette stratégie conserve le capital SEO accumulé tout en orientant les acquéreurs vers l\'offre disponible.',
      },
      {
        question: 'Un promoteur doit-il publier des contenus éditoriaux pour améliorer son SEO ?',
        answer:
          'Les contenus éditoriaux sont un levier puissant pour capter les requêtes informationnelles des acquéreurs : guides d\'achat en VEFA, explications des dispositifs fiscaux (Pinel, PTZ), données marché par ville. Rankwell recommande 2 à 4 contenus par mois, ciblant des requêtes de longue traîne liées aux préoccupations réelles des acheteurs et investisseurs.',
      },
      {
        question: 'Comment un promoteur immobilier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un promoteur doit accumuler des signaux de notoriété sur le web : présence sur les portails immobiliers (SeLoger Neuf, Bien\'ici), mentions dans la presse spécialisée (Le Moniteur, Immoweek), fiche Google Business Profile optimisée par bureau de vente, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un promoteur ?',
        answer:
          'Le SEO local cible les requêtes « programme neuf + ville » et « promoteur + région » en s\'appuyant sur Google Business Profile, les avis acquéreurs et les citations sur les portails locaux. Le SEO national vise des requêtes génériques (« meilleur promoteur immobilier », « investissement immobilier neuf ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon l\'implantation géographique du promoteur.',
      },
      {
        question: 'Les portails immobiliers (SeLoger, Bien\'ici) suffisent-ils pour être visible ?',
        answer:
          'Les portails immobiliers sont indispensables pour la diffusion des programmes, mais ils créent une dépendance : le promoteur n\'est qu\'une fiche parmi des milliers, sans contrôle sur le parcours acquéreur ni sur la conversion. Un site propre bien référencé permet de maîtriser son image de marque, de convertir directement et de construire une autorité durable que les portails ne peuvent pas retirer. Rankwell aide les promoteurs à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des portails.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre vos programmes visibles ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre portefeuille de programmes.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
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
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'RealEstateAgent',
};

export default data;
