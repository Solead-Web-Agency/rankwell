/**
 * GLOSSAIRE — X-Robots-Tag
 * En-tête HTTP de contrôle d'indexation pour ressources non-HTML
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'X-Robots-Tag : définition & cadre',
    description: 'Le X-Robots-Tag est un en-tête HTTP qui contrôle l\'indexation des ressources non-HTML (PDF, images, API). Distinction avec meta robots et robots.txt, conformité IA.',
  },

  definition: {
    paragraphs: [
      'Le X-Robots-Tag désigne un en-tête HTTP qui permet de contrôler l\'indexation et le comportement des robots de moteurs de recherche pour des ressources web qui ne sont pas des pages HTML classiques. Contrairement à la balise `<meta name="robots">` qui s\'insère dans le code HTML d\'une page, le X-Robots-Tag s\'applique au niveau du serveur via les en-têtes de réponse HTTP, ce qui permet de cibler des fichiers PDF, des images, des fichiers JSON ou des réponses API. Le X-Robots-Tag a été introduit par Google comme extension propriétaire du protocole HTTP\u00a0; il ne fait pas partie des standards du W3C. Sa configuration se fait au niveau du serveur (Apache, Nginx) ou du code applicatif, ce qui nécessite un accès à la configuration serveur.',
    ],
    nucleaire: 'Selon Rankwell, le X-Robots-Tag est le seul mécanisme qui contrôle l\'indexation des ressources non-HTML au niveau de la ressource individuelle. Le robots.txt bloque le crawl de fichiers entiers sans distinction entre indexation et accès. La balise meta robots ne s\'applique qu\'aux documents HTML. Le X-Robots-Tag cible précisément la ressource concernée (un PDF, une image, un fichier JavaScript) et permet de lui appliquer des directives d\'indexation spécifiques, y compris par user-agent. Cette granularité en fait le seul outil capable de gérer l\'accès des robots IA aux assets non-HTML d\'un site de manière sélective.',
  },

  cadre: {
    paragraphs: [
      'Le X-Robots-Tag accepte les mêmes directives que la balise meta robots\u00a0: `noindex`, `nofollow`, `noarchive`, `nosnippet`, `max-snippet`, `max-image-preview`, `none`. La combinaison de directives la plus courante pour les environnements de staging est `noindex, nofollow`, appliquée globalement à toutes les réponses HTTP du serveur.',
    ],
  },

  sections: [
    {
      title: 'X-Robots-Tag, meta robots et robots.txt\u00a0: trois mécanismes distincts',
      paragraphs: [
        'Le robots.txt contrôle si un robot peut accéder à une ressource. Le meta robots et le X-Robots-Tag contrôlent si une ressource accessible doit être indexée. Un fichier bloqué par robots.txt ne sera pas crawlé, mais s\'il est lié depuis d\'autres pages, Google peut l\'indexer sans en lire le contenu. Un fichier accessible mais portant un X-Robots-Tag `noindex` sera crawlé puis exclu de l\'index.',
      ],
      tableau: {
        caption: 'X-Robots-Tag, meta robots et robots.txt comparés',
        headers: ['Mécanisme', 'Niveau d\'action', 'S\'applique à', 'Contrôle', 'Couverture robots IA'],
        rows: [
          { cells: ['robots.txt', 'Crawl (accès)', 'Tous les types de fichiers', 'Autorise ou bloque l\'accès du robot au fichier', 'GPTBot, ClaudeBot, PerplexityBot, Googlebot-Extended documentent le respect de robots.txt'] },
          { cells: ['Meta robots', 'Indexation (HTML)', 'Pages HTML uniquement', 'Directives d\'indexation dans le code source', 'Applicable uniquement aux pages HTML\u00a0; non pertinent pour les crawlers IA accédant à des ressources non-HTML'] },
          { cells: ['X-Robots-Tag', 'Indexation (HTTP)', 'Tous les types de fichiers (PDF, images, API, HTML)', 'Directives d\'indexation dans l\'en-tête HTTP', 'Seuls Googlebot et Googlebot-Extended documentent officiellement la conformité au X-Robots-Tag'] },
        ],
      },
    },
    {
      title: 'Conformité des robots IA au X-Robots-Tag',
      paragraphs: [
        'La documentation officielle des principaux robots IA ne mentionne pas systématiquement le X-Robots-Tag. Ce décalage signifie que pour les robots IA autres que Googlebot-Extended, le robots.txt reste le seul mécanisme de contrôle dont la conformité est documentée.',
      ],
      tableau: {
        caption: 'Conformité des robots IA au X-Robots-Tag (début 2026)',
        headers: ['Bot', 'User-Agent', 'X-Robots-Tag documenté', 'Comportement observé'],
        rows: [
          { cells: ['Googlebot', 'Googlebot', 'Oui (documentation Google officielle)', 'Respect complet de toutes les directives X-Robots-Tag'] },
          { cells: ['Googlebot-Extended', 'Googlebot-Extended', 'Oui (documentation Google officielle)', 'Respect complet, utilisé pour contrôler l\'entraînement IA de Google'] },
          { cells: ['GPTBot', 'GPTBot', 'Non. La documentation OpenAI mentionne robots.txt mais ne référence pas X-Robots-Tag', 'Comportement non documenté pour X-Robots-Tag'] },
          { cells: ['ClaudeBot', 'ClaudeBot', 'Non. La documentation Anthropic couvre robots.txt uniquement', 'Comportement non documenté pour X-Robots-Tag'] },
          { cells: ['PerplexityBot', 'PerplexityBot', 'Non. La documentation Perplexity couvre robots.txt uniquement', 'Comportement non documenté pour X-Robots-Tag'] },
        ],
      },
    },
    {
      title: 'Cas d\'usage principaux',
      items: [
        { label: 'Fichiers PDF', description: 'Les PDF ne peuvent pas contenir de balise meta robots. Le X-Robots-Tag est le seul moyen de contrôler leur indexation côté serveur, sans modifier le fichier lui-même.' },
        { label: 'Images et fichiers média', description: 'Pour empêcher l\'indexation d\'images dans Google Images ou dans les résultats visuels sans les bloquer au crawl (ce qui empêcherait leur affichage sur le site).' },
        { label: 'Réponses API et pages dynamiques', description: 'Les applications web qui génèrent des réponses JSON ou des pages dynamiques côté serveur peuvent utiliser le X-Robots-Tag pour exclure ces réponses de l\'indexation.' },
        { label: 'Environnements de staging', description: 'Appliquer un X-Robots-Tag `noindex` à l\'ensemble des réponses d\'un environnement de préproduction protège contre l\'indexation accidentelle.' },
      ],
    },
    {
      title: 'Contrôler l\'accès des robots IA',
      paragraphs: [
        'Le X-Robots-Tag permet de cibler des robots spécifiques. La directive peut être préfixée par le nom du user-agent\u00a0: `GPTBot: noindex`, `ClaudeBot: noindex`. Cette granularité permet d\'autoriser l\'indexation par Google tout en excluant les robots IA de certaines ressources. Le robots.txt offre une granularité similaire au niveau du crawl, mais le X-Robots-Tag agit au niveau de l\'indexation, ce qui constitue une seconde ligne de contrôle pour les ressources déjà crawlées. Toutefois, comme documenté dans le tableau de conformité ci-dessus, l\'effectivité de cette directive dépend du robot ciblé.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Le contrôle d\'indexation via en-tête HTTP pour les fichiers non-HTML' },
      { text: 'La distinction avec meta robots et robots.txt, y compris la couverture des robots IA' },
      { text: 'L\'application aux fichiers PDF, images, API et environnements de staging' },
      { text: 'Le ciblage des robots IA par user-agent et l\'état de conformité documentée' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation des balises meta dans les pages HTML', link: { slug: 'meta-tags-joomla', label: 'Meta-tags Joomla' } },
      { text: 'La configuration du fichier robots.txt' },
      { text: 'La gestion du crawl budget', link: { slug: 'crawl-budget', label: 'Crawl budget' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'Meta-tags Joomla', slug: 'meta-tags-joomla' },
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Crawl budget', slug: 'crawl-budget' },
    { label: 'Indexation', slug: 'indexation' },
  ],
};
