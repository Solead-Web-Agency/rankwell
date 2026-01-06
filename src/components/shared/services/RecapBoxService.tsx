/**
 * RECAPBOXSERVICE - Grille de 4 cartes avec icônes pour pages services
 *
 * Usage: Section résumant les points clés/avantages d'un service
 * Design: 4 cartes en grille avec icône, titre et description
 *
 * Props:
 * - sectionId: ID pour l'ancre
 * - badge: Texte du badge
 * - badgeClassName: Classes CSS du badge
 * - title: Titre de la section
 * - subtitle: Sous-titre/description
 * - items: Tableau de 4 items [{id, title, description, icon}]
 * - accentColor: Couleur d'accent pour les icônes (ex: 'rw-purple')
 *
 * Usage:
 * import { RecapBoxService } from '@/components/shared/services';
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

// ============================================
// TYPES
// ============================================
export interface RecapItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface RecapBoxServiceProps {
  sectionId: string;
  badge: string;
  badgeClassName?: string;
  title: string;
  subtitle: string;
  items: RecapItem[];
  /** Couleur d'accent (ex: 'rw-blue', 'rw-cyan', 'rw-purple', 'rw-coral', 'rw-pink') */
  accentColor?: RwColor;
}

const RecapBoxService = ({
  sectionId,
  badge,
  badgeClassName,
  title,
  subtitle,
  items,
  accentColor = 'rw-blue',
}: RecapBoxServiceProps) => {
  // Récupère les classes depuis le color mapping
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeClassName || colors.badge;
  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${badgeClasses}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[600px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[600px] mx-auto">
              {subtitle}
            </p>
          </RevealAnimation>
        </div>

        <div className={`grid grid-cols-12 xl:gap-8 md:gap-6 gap-y-5 ${items.length === 5 ? 'xl:[&>*:nth-child(4)]:col-start-3 xl:[&>*:nth-child(5)]:col-start-6' : ''}`}>
          {items.map((item, index) => {
            // Pour 5 items: les 3 premiers sur une ligne (col-span-4), les 2 derniers centrés
            const isLastRowOf5 = items.length === 5 && index >= 3;
            const colSpanClass = items.length === 5
              ? (isLastRowOf5 ? 'col-span-12 md:col-span-6 xl:col-span-4' : 'col-span-12 md:col-span-6 xl:col-span-4')
              : 'col-span-12 md:col-span-6 xl:col-span-3';

            return (
              <div key={`${item.title}-${item.id}`} className={colSpanClass}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="h-full px-6 py-8 rounded-[20px] bg-white dark:bg-background-6 space-y-5 text-center flex flex-col items-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out">
                    <div className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <Icon name={item.icon as any} className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-heading-6 font-normal">{item.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70 flex-1">{item.description}</p>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

RecapBoxService.displayName = 'RecapBoxService';
export default RecapBoxService;
