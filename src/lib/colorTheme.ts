/**
 * ============================================
 * COLOR THEME - Système de couleurs Rankwell
 * ============================================
 *
 * Ce fichier centralise le mapping des couleurs pour les composants.
 * Tailwind ne peut pas générer de classes dynamiques (ex: `bg-${color}`),
 * donc on utilise un mapping statique qui garantit que les classes existent.
 *
 * Catégories de services :
 * - GEO/SEO : rw-blue
 * - SEA     : rw-cyan
 * - DATA    : rw-purple
 * - Compléments : rw-coral, rw-pink (utilisables partout)
 */

/**
 * TAILWIND SAFELIST - Ces classes doivent être incluses dans le build
 * Ne pas supprimer ce commentaire, il permet à Tailwind de scanner ces classes :
 *
 * text-rw-blue bg-rw-blue bg-rw-blue-light bg-rw-blue-soft border-rw-blue border-rw-blue-light
 * text-rw-cyan bg-rw-cyan bg-rw-cyan-light bg-rw-cyan-soft border-rw-cyan border-rw-cyan-light
 * text-rw-purple bg-rw-purple bg-rw-purple-light bg-rw-purple-soft border-rw-purple border-rw-purple-light
 * text-rw-coral bg-rw-coral bg-rw-coral-light bg-rw-coral-soft border-rw-coral border-rw-coral-light
 * text-rw-pink bg-rw-pink bg-rw-pink-light bg-rw-pink-soft border-rw-pink border-rw-pink-light
 *
 * Hover states:
 * hover:text-rw-blue hover:bg-rw-blue group-hover:bg-rw-blue group-hover:text-rw-blue
 * hover:text-rw-cyan hover:bg-rw-cyan group-hover:bg-rw-cyan group-hover:text-rw-cyan
 * hover:text-rw-purple hover:bg-rw-purple group-hover:bg-rw-purple group-hover:text-rw-purple
 * hover:text-rw-coral hover:bg-rw-coral group-hover:bg-rw-coral group-hover:text-rw-coral
 * hover:text-rw-pink hover:bg-rw-pink group-hover:bg-rw-pink group-hover:text-rw-pink
 */

/**
 * Couleurs disponibles dans le thème Rankwell
 */
export type RwColor = 'rw-blue' | 'rw-cyan' | 'rw-purple' | 'rw-coral' | 'rw-pink';

/**
 * Mapping des variantes de couleurs vers les classes Tailwind statiques
 * Chaque couleur a ses variantes : base, light (bg transparent), soft (bg opaque)
 */
export const colorVariants = {
  'rw-blue': {
    text: 'text-rw-blue',
    bg: 'bg-rw-blue',
    bgLight: 'bg-rw-blue-light',
    bgSoft: 'bg-rw-blue-soft',
    border: 'border-rw-blue',
    borderLight: 'border-rw-blue-light',
    // Pour les badges
    badge: 'bg-rw-blue-light text-rw-blue',
    // Hover states
    hoverText: 'hover:text-rw-blue',
    hoverBg: 'hover:bg-rw-blue',
    groupHoverBg: 'group-hover:bg-rw-blue',
    groupHoverText: 'group-hover:text-rw-blue',
  },
  'rw-cyan': {
    text: 'text-rw-cyan',
    bg: 'bg-rw-cyan',
    bgLight: 'bg-rw-cyan-light',
    bgSoft: 'bg-rw-cyan-soft',
    border: 'border-rw-cyan',
    borderLight: 'border-rw-cyan-light',
    badge: 'bg-rw-cyan-light text-rw-cyan',
    hoverText: 'hover:text-rw-cyan',
    hoverBg: 'hover:bg-rw-cyan',
    groupHoverBg: 'group-hover:bg-rw-cyan',
    groupHoverText: 'group-hover:text-rw-cyan',
  },
  'rw-purple': {
    text: 'text-rw-purple',
    bg: 'bg-rw-purple',
    bgLight: 'bg-rw-purple-light',
    bgSoft: 'bg-rw-purple-soft',
    border: 'border-rw-purple',
    borderLight: 'border-rw-purple-light',
    badge: 'bg-rw-purple-light text-rw-purple',
    hoverText: 'hover:text-rw-purple',
    hoverBg: 'hover:bg-rw-purple',
    groupHoverBg: 'group-hover:bg-rw-purple',
    groupHoverText: 'group-hover:text-rw-purple',
  },
  'rw-coral': {
    text: 'text-rw-coral',
    bg: 'bg-rw-coral',
    bgLight: 'bg-rw-coral-light',
    bgSoft: 'bg-rw-coral-soft',
    border: 'border-rw-coral',
    borderLight: 'border-rw-coral-light',
    badge: 'bg-rw-coral-light text-rw-coral',
    hoverText: 'hover:text-rw-coral',
    hoverBg: 'hover:bg-rw-coral',
    groupHoverBg: 'group-hover:bg-rw-coral',
    groupHoverText: 'group-hover:text-rw-coral',
  },
  'rw-pink': {
    text: 'text-rw-pink',
    bg: 'bg-rw-pink',
    bgLight: 'bg-rw-pink-light',
    bgSoft: 'bg-rw-pink-soft',
    border: 'border-rw-pink',
    borderLight: 'border-rw-pink-light',
    badge: 'bg-rw-pink-light text-rw-pink',
    hoverText: 'hover:text-rw-pink',
    hoverBg: 'hover:bg-rw-pink',
    groupHoverBg: 'group-hover:bg-rw-pink',
    groupHoverText: 'group-hover:text-rw-pink',
  },
} as const;

/**
 * Helper pour obtenir les classes d'une couleur
 */
export function getColorClasses(color: RwColor) {
  return colorVariants[color];
}

/**
 * Helper pour obtenir une classe spécifique
 */
export function getColorClass(color: RwColor, variant: keyof typeof colorVariants['rw-blue']) {
  return colorVariants[color][variant];
}

/**
 * Thèmes par catégorie de service
 * Permet de définir quelle couleur principale utiliser par section
 */
export const serviceThemes = {
  'geo-seo': 'rw-blue',
  'sea': 'rw-cyan',
  'data': 'rw-purple',
} as const;

export type ServiceCategory = keyof typeof serviceThemes;
