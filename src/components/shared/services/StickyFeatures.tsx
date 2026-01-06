/**
 * STICKYFEATURES - Section avec header sticky à gauche et liste d'items à droite
 *
 * Layout 2 colonnes : header sticky + liste d'éléments avec icônes.
 * Remplace : Difference
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

export interface StickyFeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StickyFeaturesProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  items: StickyFeatureItem[];
}

const StickyFeatures = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  items,
}: StickyFeaturesProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Colonne gauche - Header */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className={`badge ${colors.badge}`}>{badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-3">{title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/80 dark:text-accent/80">{subtitle}</p>
              </RevealAnimation>
            </div>
          </div>

          {/* Colonne droite - Items */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6">
              {items.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                  <div className="p-6 bg-background-2 dark:bg-background-6 rounded-[20px] flex gap-5 items-start hover:translate-y-[-4px] transition-transform duration-300">
                    <div className={`shrink-0 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <Icon name={item.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 font-medium">{item.title}</h3>
                      <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

StickyFeatures.displayName = 'StickyFeatures';
export default StickyFeatures;
