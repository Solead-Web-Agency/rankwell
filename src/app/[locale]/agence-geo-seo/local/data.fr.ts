/**
 * ============================================
 * DATA - Contenu de la page SEO Local / GEO Local
 * Sections dans l'ordre d'apparition sur la page
 * ============================================
 *
 * Mots-clés cibles intégrés naturellement :
 * - expert seo local / expert geo local
 * - agence seo local / agence geo local
 */

import type { BreadcrumbItem, TocItem, RecapItem, FAQServiceItem, FeatureItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Agence SEO local et référencement local - Rankwell',
  description: 'Agence SEO local experte en référencement local. Dominez les recherches de proximité sur Google et les IA. Google Business Profile, citations locales et GEO local.',
};

// ============================================
// 1. HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'GEO & SEO', href: '/agence-geo-seo' },
    { label: 'SEO Local' },
  ] as BreadcrumbItem[],
  title: 'Agence SEO local : dominez le référencement local',
  description: 'Vos clients cherchent "près de chez moi". Êtes-vous visible ? Notre agence de référencement local optimise votre présence sur Google ET sur les IA qui recommandent des adresses.',
  ctaText: 'Parler de votre visibilité locale',
  ctaHref: '/contact',
  // image: '/images/pages/agence-geo-seo/local/hero.webp',
  imageAlt: 'SEO local et GEO local Rankwell',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 2. INTRO DATA
// ============================================
export const introData = {
  badge: 'Agence SEO Local',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    '46% des recherches Google ont une intention locale. "Restaurant italien Lyon", "plombier urgent Paris 15", "avocat droit du travail Bordeaux". Si vous n\'êtes pas visible sur ces requêtes, vous perdez des clients chaque jour.',
    'Mais le référencement local ne se limite plus à Google. ChatGPT recommande des commerces. Perplexity suggère des prestataires. Les IA génératives deviennent des annuaires intelligents.',
    'Découvrez comment notre agence de référencement local et notre expertise en <strong class="text-secondary dark:text-accent">SEO local et GEO local</strong> vous positionnent là où vos clients vous cherchent. Google Maps, pack local, ET réponses des IA conversationnelles.',
  ],
  tocItems: [
    { id: 'approche', label: 'Notre approche', icon: 'Compass' },
    { id: 'enjeux', label: 'Enjeux du local', icon: 'CircleAlert' },
    { id: 'piliers', label: '5 piliers', icon: 'Columns2' },
    { id: 'gbp', label: 'Google Business', icon: 'MapPin' },
    { id: 'citations', label: 'Citations locales', icon: 'Quote' },
    { id: 'avis', label: 'Avis clients', icon: 'Star' },
    { id: 'mesure', label: 'KPIs locaux', icon: 'ChartBar' },
    { id: 'pour-qui', label: 'Pour qui ?', icon: 'Users' },
    { id: 'faq', label: 'FAQ', icon: 'CircleQuestionMark' },
  ] as TocItem[],
};

// ============================================
// 3. ENJEUX LOCAL DATA (#enjeux)
// ============================================
export const enjeuxLocalData = {
  sectionId: 'enjeux',
  badge: 'Enjeux',
  accentColor: 'rw-blue' as const,
  title: 'Pourquoi le référencement local est devenu stratégique ?',
  subtitle: 'Les comportements de recherche ont changé. Le SEO local n\'est plus une option, c\'est un canal d\'acquisition majeur.',
  reasons: [
    {
      id: 'comportement',
      title: 'Recherches "near me"',
      description: 'Les recherches "près de chez moi" ont explosé de 500% en 5 ans. Vos clients cherchent local, sur mobile, avec une intention d\'action immédiate.',
      icon: 'MapPin',
    },
    {
      id: 'conversion',
      title: 'Taux de conversion élevé',
      description: '78% des recherches locales mobiles aboutissent à un achat en magasin dans les 24h. L\'intention locale est une intention d\'achat.',
      icon: 'ShoppingBag',
    },
    {
      id: 'ia-locale',
      title: 'Les IA recommandent des adresses',
      description: 'ChatGPT et Perplexity suggèrent maintenant des commerces locaux. Être bien référencé localement, c\'est aussi être recommandé par les IA.',
      icon: 'Bot',
    },
  ],
};

// ============================================
// 4. QUOTE 1 DATA
// ============================================
export const quote1Data = {
  quote: 'Think globally, act locally. The best marketing strategy ever.',
  author: 'Seth Godin',
  role: 'Marketing Author & Entrepreneur',
};

// ============================================
// 5. RECAPBOX DATA (#approche)
// ============================================
export const recapBoxData = {
  sectionId: 'approche',
  badge: 'Notre approche',
  accentColor: 'rw-blue' as const,
  title: 'Une stratégie de référencement local qui couvre tous les fronts',
  subtitle: 'Le SEO local ne se résume pas à Google Business Profile. Notre agence SEO local maîtrise l\'écosystème complet.',
  items: [
    {
      id: 1,
      title: 'Google Business Profile',
      description: 'Optimisation complète de votre fiche : catégories, attributs, posts, photos, Q&A.',
      icon: 'MapPin',
    },
    {
      id: 2,
      title: 'Citations et NAP',
      description: 'Cohérence de vos informations sur tous les annuaires et plateformes locales.',
      icon: 'Building2',
    },
    {
      id: 3,
      title: 'Contenu géolocalisé',
      description: 'Pages locales, landing pages par zone, contenu qui répond aux intentions locales.',
      icon: 'FileText',
    },
    {
      id: 4,
      title: 'Réputation et avis',
      description: 'Stratégie d\'acquisition d\'avis et gestion de votre e-réputation locale.',
      icon: 'Star',
    },
  ] as RecapItem[],
};

// ============================================
// 6. TRUST BANNER (composant global sans data)
// ============================================

// ============================================
// 7. 5 PILIERS SEO LOCAL DATA (#piliers)
// ============================================
export const piliersLocalData = {
  sectionId: 'piliers',
  badge: '5 piliers',
  accentColor: 'rw-blue' as const,
  title: 'Les 5 piliers d\'un référencement local efficace',
  subtitle: 'Une stratégie SEO local solide repose sur ces 5 dimensions. Chacune renforce les autres.',
  dimensions: [
    {
      dimension: 1,
      label: 'PILIER 1',
      title: 'Google Business Profile',
      subtitle: 'Votre vitrine sur Google Maps et le pack local.',
      items: ['Catégories et attributs optimisés', 'Posts réguliers et actualités', 'Photos et vidéos de qualité', 'Questions/Réponses complétées', 'Horaires et services à jour'],
    },
    {
      dimension: 2,
      label: 'PILIER 2',
      title: 'Citations locales',
      subtitle: 'Votre présence sur les annuaires et plateformes.',
      items: ['NAP cohérent partout', 'Annuaires sectoriels', 'Pages Jaunes, Yelp, TripAdvisor', 'Chambres de commerce', 'Sites d\'actualités locales'],
    },
    {
      dimension: 3,
      label: 'PILIER 3',
      title: 'Contenu local',
      subtitle: 'Des pages qui répondent aux recherches de proximité.',
      items: ['Pages par zone géographique', 'Landing pages par service + ville', 'Blog avec ancrage local', 'Actualités et événements locaux', 'Études de cas clients locaux'],
    },
    {
      dimension: 4,
      label: 'PILIER 4',
      title: 'Avis et réputation',
      subtitle: 'La preuve sociale qui fait la différence.',
      items: ['Stratégie d\'acquisition d\'avis', 'Réponse systématique aux avis', 'Gestion des avis négatifs', 'Diversification des plateformes', 'Intégration sur votre site'],
    },
    {
      dimension: 5,
      label: 'PILIER 5',
      title: 'Signaux techniques',
      subtitle: 'Les fondations techniques du SEO local.',
      items: ['Schema LocalBusiness', 'Données structurées géographiques', 'Mobile-first impératif', 'Vitesse de chargement', 'Pages AMP si pertinent'],
    },
  ],
};

// ============================================
// 8. POINT VIGILANCE DATA
// ============================================
export const pointVigilanceData = {
  label: 'GEO local : la nouvelle frontière',
  text: 'Les IA génératives commencent à recommander des commerces et prestataires locaux. ChatGPT suggère des restaurants, Perplexity propose des avocats. Votre référencement local bien structuré alimente ce que ces IA "savent" de vous. Le GEO local devient aussi important que le SEO local.',
};

// ============================================
// 9. GBP OPTIMISATION DATA (#gbp) - Ce qui compte pour une fiche optimisée
// ============================================
export const gbpData = {
  sectionId: 'gbp',
  badge: 'Google Business Profile',
  accentColor: 'rw-blue' as const,
  title: 'Les critères d\'une fiche Google Business optimisée',
  subtitle: 'Votre fiche GBP est souvent le premier contact avec vos prospects. Voici ce qui fait la différence.',
  items: [
    {
      id: 1,
      title: 'Informations complètes',
      description: 'Catégories bien choisies, attributs renseignés, description avec mots-clés locaux. Google favorise les fiches exhaustives.',
      icon: 'ClipboardList',
    },
    {
      id: 2,
      title: 'Contenu visuel de qualité',
      description: 'Les fiches avec photos génèrent 42% de demandes d\'itinéraire en plus. La qualité visuelle influence directement le taux de clic.',
      icon: 'Image',
    },
    {
      id: 3,
      title: 'Activité régulière',
      description: 'Posts, actualités, offres : une fiche active envoie un signal positif à Google. Les fiches "vivantes" remontent dans le pack local.',
      icon: 'Calendar',
    },
    {
      id: 4,
      title: 'Questions/Réponses',
      description: 'La section Q&A est indexée par Google. Des réponses complètes à vos FAQ renforcent votre pertinence sur les requêtes associées.',
      icon: 'MessageCircle',
    },
  ],
};

// ============================================
// 10. TABLEAU CITATIONS DATA (#citations)
// ============================================
export const tableauCitationsData = {
  sectionId: 'citations',
  badge: 'Citations',
  accentColor: 'rw-blue' as const,
  title: 'Quelles citations locales sont essentielles ?',
  subtitle: 'Les citations (mentions de votre NAP) renforcent votre légitimité locale. Voici les plateformes prioritaires par secteur.',
  columns: ['Secteur', 'Plateformes essentielles', 'Plateformes secondaires', 'Impact estimé'],
  rows: [
    ['Restauration', 'TripAdvisor, TheFork, Yelp', 'Google Maps, Pages Jaunes, Foursquare', '★★★★★'],
    ['Services B2C', 'Pages Jaunes, Yelp, Trustpilot', 'Societe.com, Mappy, 118 712', '★★★★☆'],
    ['Santé', 'Doctolib, Pages Jaunes, Google Maps', 'Annuaires Ordre professionnel', '★★★★★'],
    ['Immobilier', 'SeLoger, LeBonCoin, Bien\'ici', 'MeilleursAgents, PAP', '★★★★☆'],
    ['Services B2B', 'LinkedIn, Google Maps, Kompass', 'Societe.com, Europages', '★★★☆☆'],
    ['Commerce de détail', 'Google Maps, Pages Jaunes, Yelp', 'Mappy, Apple Maps', '★★★★☆'],
  ],
};

// ============================================
// 11. AVIS CLIENTS DATA (#avis) - Pourquoi les avis comptent en SEO local
// ============================================
export const avisClientsData = {
  sectionId: 'avis',
  badge: 'Avis clients',
  accentColor: 'rw-blue' as const,
  title: 'Pourquoi les avis sont un signal SEO local majeur ?',
  subtitle: 'Les avis influencent directement votre positionnement dans le pack local. Voici ce que Google et les IA évaluent.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Volume et récence',
      description: 'Google favorise les entreprises avec des avis récents et réguliers. Un flux constant d\'avis signale une activité vivante.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Note moyenne',
      description: 'La note influence le CTR dans le pack local. Entre deux résultats, l\'utilisateur clique sur celui avec 4.7 étoiles plutôt que 3.9.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Réponses aux avis',
      description: 'Répondre aux avis (positifs comme négatifs) envoie un signal d\'engagement. Google le prend en compte. Les IA aussi.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Mots-clés dans les avis',
      description: 'Les termes utilisés par vos clients dans leurs avis renforcent votre pertinence thématique. "Excellent plombier rapide" aide à ranker sur ces requêtes.',
    },
  ],
};

// ============================================
// 12. KPIs LOCAUX DATA (#mesure)
// ============================================
export const kpisLocauxData = {
  sectionId: 'mesure',
  badge: 'Mesure',
  badgeVariant: 'colored' as const,
  accentColor: 'rw-blue' as const,
  title: 'Comment mesurons-nous votre référencement local ?',
  subtitle: 'Des KPIs spécifiques au SEO local pour suivre votre progression et ajuster la stratégie.',
  items: [
    {
      id: 1,
      // image: '/images/pages/agence-geo-seo/local/kpi-pack-local.webp',
      alt: 'Visibilité dans le pack local Google',
      title: 'Visibilité pack local',
      desc: 'Position moyenne dans le pack local (top 3) sur vos mots-clés cibles.',
    },
    {
      id: 2,
      // image: '/images/pages/agence-geo-seo/local/kpi-impressions-gbp.webp',
      alt: 'Impressions Google Business Profile',
      title: 'Impressions GBP',
      desc: 'Nombre de fois où votre fiche apparaît dans les recherches et sur Maps.',
    },
    {
      id: 3,
      // image: '/images/pages/agence-geo-seo/local/kpi-actions-gbp.webp',
      alt: 'Actions depuis Google Business Profile',
      title: 'Actions depuis GBP',
      desc: 'Appels, itinéraires, visites site depuis votre fiche Google Business.',
    },
    {
      id: 4,
      // image: '/images/pages/agence-geo-seo/local/kpi-avis.webp',
      alt: 'Note et volume d\'avis clients',
      title: 'Note et volume d\'avis',
      desc: 'Évolution de votre note moyenne et du nombre d\'avis sur les plateformes clés.',
    },
    {
      id: 5,
      // image: '/images/pages/agence-geo-seo/local/kpi-trafic-local.webp',
      alt: 'Trafic organique local',
      title: 'Trafic local organique',
      desc: 'Visiteurs depuis des requêtes géolocalisées sur votre site web.',
    },
    {
      id: 6,
      // image: '/images/pages/agence-geo-seo/local/kpi-presence-ia.webp',
      alt: 'Présence dans les réponses IA locales',
      title: 'Présence IA locale',
      desc: 'Votre entreprise recommandée par ChatGPT/Perplexity sur des requêtes locales.',
    },
  ] as FeatureItem[],
};

// ============================================
// 13. FORWHO DATA (#pour-qui)
// ============================================
export const forWhoData = {
  sectionId: 'pour-qui',
  title: 'Pour qui est notre agence de référencement local ?',
  subtitle: 'Notre agence SEO local accompagne toute entreprise avec une zone de chalandise géographique définie.',
  criteria: [
    { label: 'Commerces physiques', description: 'Boutiques, restaurants, salons, magasins avec pignon sur rue' },
    { label: 'Services de proximité', description: 'Artisans, professions libérales, services à domicile' },
    { label: 'Franchises et réseaux', description: 'Gestion multi-établissements avec cohérence de marque' },
    { label: 'Professionnels de santé', description: 'Médecins, dentistes, kinés, cliniques, laboratoires' },
    { label: 'Agences immobilières', description: 'Visibilité sur les recherches locales d\'achat/location' },
  ],
  ctaTitle: 'Prêt à dominer votre zone ?',
  ctaDescription: 'On analyse votre présence locale actuelle et on identifie vos opportunités. Audit gratuit de votre visibilité.',
  ctaButtonText: 'Demander un audit local',
  ctaButtonHref: '/contact',
  accentColor: 'rw-blue' as const,
};

// ============================================
// 14. CLIENTS (composant global sans data)
// ============================================

// ============================================
// 15. TESTIMONIALS (composant global sans data)
// ============================================

// ============================================
// 16. QUOTE 2 DATA
// ============================================
export const quote2Data = {
  quote: 'Local SEO is not about gaming the system. It\'s about making sure your business shows up when people need you.',
  author: 'Mike Blumenthal',
  role: 'Local Search Expert',
};

// ============================================
// 17. FAQ DATA (#faq)
// ============================================
export const faqData = {
  sectionId: 'faq',
  badge: 'FAQ',
  accentColor: 'rw-blue' as const,
  title: 'Questions fréquentes',
  subtitle: 'Tout ce que vous devez savoir sur le référencement local et le GEO local',
  items: [
    {
      id: 'faq-1',
      question: 'Combien de temps pour voir des résultats en référencement local ?',
      answer: 'Le SEO local peut produire des résultats plus rapidement que le SEO national. Comptez 2 à 4 mois pour voir des améliorations significatives dans le pack local. L\'optimisation Google Business Profile a un impact quasi-immédiat. Les citations et le contenu local mettent plus de temps à produire leurs effets.',
    },
    {
      id: 'faq-2',
      question: 'Faut-il plusieurs fiches Google Business pour plusieurs services ?',
      answer: 'Non, sauf si vous avez plusieurs adresses physiques distinctes. Une seule fiche par établissement, avec toutes vos catégories de services. Créer des fiches fictives est une violation des guidelines Google qui peut entraîner la suppression de votre présence.',
    },
    {
      id: 'faq-3',
      question: 'Comment gérer les avis négatifs ?',
      answer: 'Répondez toujours, rapidement et professionnellement. Reconnaissez le problème, proposez une solution, invitez à poursuivre en privé. Une réponse bien gérée transforme un avis négatif en démonstration de votre service client. Ne jamais ignorer, ne jamais être agressif.',
    },
    {
      id: 'faq-4',
      question: 'Le référencement local fonctionne-t-il pour les entreprises B2B ?',
      answer: 'Oui, mais différemment. Les recherches B2B locales existent : "agence web Lyon", "expert comptable Paris 8", "avocat droit des affaires Marseille". Notre agence SEO local adapte la stratégie : moins d\'avis grand public, plus de citations professionnelles et de contenu d\'expertise locale.',
    },
    {
      id: 'faq-5',
      question: 'Qu\'est-ce que le GEO local exactement ?',
      answer: 'Le GEO local, c\'est l\'optimisation pour être recommandé par les IA génératives sur des requêtes locales. "Quel est le meilleur restaurant italien à Nice ?" posé à ChatGPT. Les IA s\'appuient sur les mêmes signaux que Google (avis, citations, autorité) mais ajoutent la notion de "fiabilité de source". Être bien positionné en SEO local alimente aussi votre présence GEO locale.',
    },
  ] as FAQServiceItem[],
};

// ============================================
// 18. CTA DATA
// ============================================
export const ctaData = {
  title: 'Vos clients vous cherchent',
  titleHighlight: 'près de chez eux',
  description: 'Le référencement local n\'est plus optionnel. Vos concurrents sont déjà dans le pack local, sur Google Maps, dans les réponses de ChatGPT. Et vous ?',
  secondaryDescription: 'Première étape : un audit gratuit de votre présence locale. Notre agence SEO local analyse votre fiche Google Business, vos citations, vos avis. Et on vous montre où sont vos opportunités.',
  buttonText: 'Obtenir mon audit local gratuit',
  checklistItems: [
    { id: '1', text: 'Audit offert' },
    { id: '2', text: 'Sans engagement' },
    { id: '3', text: 'Opportunités identifiées' },
  ],
};
