/**
 * CATEGORIESGRID - Grille de catégories avec icônes et listes
 *
 * Basé sur le style des catégories de OutilsService, sans le marquee.
 * Affiche 4 colonnes avec icône, titre et liste d'items.
 *
 * Props:
 * - sectionId: ID de la section pour l'ancre
 * - badge: Texte du badge
 * - accentColor: Couleur d'accent
 * - title: Titre de la section
 * - subtitle: Sous-titre
 * - categories: Liste [{category, icon, items[]}]
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

// ============================================
// TYPES
// ============================================
export interface CategoryItem {
  category: string;
  icon: string;
  items: string[];
}

export interface CategoriesGridProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  categories: CategoryItem[];
}

// ============================================
// COMPOSANT
// ============================================
const CategoriesGrid = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  categories,
}: CategoriesGridProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-1 dark:bg-background-8">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-5 max-w-[800px] mx-auto">
            <RevealAnimation delay={0.1}>
              <span className={`badge ${colors.badge}`}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>{subtitle}</p>
            </RevealAnimation>
          </div>

          {/* Categories Grid - style HowItWork (4 colonnes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-y-6 sm:gap-x-5 md:gap-x-8 relative">
            {/* Ligne pointillée horizontale (desktop uniquement) */}
            <RevealAnimation delay={0.4} direction="left">
              <div className="w-[calc(100%-20%)] hidden lg:block absolute top-[22%] left-[10%] z-0 h-[1px] bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.2)_0_4px,_transparent_4px_8px)] dark:bg-[repeating-linear-gradient(to_right,_rgba(255,255,255,0.2)_0_4px,_transparent_4px_8px)]" />
            </RevealAnimation>

            {categories.map((item, index) => (
              <RevealAnimation key={`${item.category}-${index}`} delay={0.4 + index * 0.1} direction="left">
                <div className="text-center flex flex-col items-center justify-center space-y-4 py-6 px-4">
                  <div className="size-14 md:size-16 bg-white dark:bg-background-7 border-8 border-background-2 dark:border-background-5 rounded-full flex items-center justify-center relative z-10">
                    <Icon name={item.icon as any} className={`w-6 h-6 md:w-7 md:h-7 ${colors.text}`} aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6">{item.category}</h3>
                    <ul className="space-y-0.5">
                      {item.items.map((text, itemIndex) => (
                        <li key={itemIndex} className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CategoriesGrid.displayName = 'CategoriesGrid';
export default CategoriesGrid;
