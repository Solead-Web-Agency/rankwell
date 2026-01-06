/**
 * REASONSGRID - Grille de 3 cartes avec icônes
 *
 * Affiche 3 raisons/avantages en grille avec icône, titre et description.
 * Remplace : PourquoiLiens
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

export interface ReasonItem {
  id: string | number;
  title: string;
  description: string;
  // Support both 'description' (from ReasonsGrid) and 'desc' (from Results)
  desc?: string;
  icon: string;
}

export interface ReasonsGridProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  reasons: ReasonItem[];
}

const ReasonsGrid = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  reasons,
}: ReasonsGridProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[600px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[700px] mx-auto">{subtitle}</p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {reasons.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="h-full p-6 lg:p-8 rounded-[20px] bg-background-1 dark:bg-background-6 space-y-4">
                <Icon name={item.icon as any} className={`w-12 h-12 ${colors.text}`} />
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

ReasonsGrid.displayName = 'ReasonsGrid';
export default ReasonsGrid;
