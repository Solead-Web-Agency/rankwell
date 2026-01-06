/**
 * DELIVERABLESGRID - Grille de livrables/éléments en 2 colonnes
 *
 * Affiche une grille de cartes simples titre + description.
 * Remplace : Livrables
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

export interface DeliverableItem {
  id: number;
  title: string;
  description: string;
}

export interface DeliverablesGridProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  items: DeliverableItem[];
}

const DeliverablesGrid = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  items,
}: DeliverablesGridProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[600px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[600px] mx-auto">{subtitle}</p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {items.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="h-full p-6 lg:p-8 rounded-[20px] bg-background-1 dark:bg-background-6 space-y-3">
                <h3 className="text-heading-6 font-medium">{item.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

DeliverablesGrid.displayName = 'DeliverablesGrid';
export default DeliverablesGrid;
