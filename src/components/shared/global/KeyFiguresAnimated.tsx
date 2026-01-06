/**
 * KEYFIGURESANIMATED - Section de chiffres clés avec compteurs animés
 * Basé sur OurAchievements du thème
 *
 * Affiche des chiffres clés avec animation de comptage au scroll
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import NumberAnimation from '@/components/animation/NumberAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

// ============================================
// TYPES
// ============================================
export interface KeyFigureItem {
  id: number;
  icon: string;
  number: number;
  suffix?: string;
  label: string;
}

export interface KeyFiguresAnimatedProps {
  sectionId?: string;
  badge?: string;
  badgeClassName?: string;
  title?: string;
  subtitle?: string;
  items: KeyFigureItem[];
  accentColor?: RwColor;
}

const KeyFiguresAnimated = ({
  sectionId = 'chiffres',
  badge,
  badgeClassName,
  title,
  subtitle,
  items,
  accentColor = 'rw-cyan',
}: KeyFiguresAnimatedProps) => {
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeClassName || colors.badge;

  return (
    <section id={sectionId} className="py-16 md:py-20 lg:py-[90px] xl:py-[100px] bg-white dark:bg-background-8">
      <div className="main-container">
        {/* Header */}
        {(badge || title || subtitle) && (
          <div className="text-center space-y-5 mb-12 md:mb-16">
            {badge && (
              <RevealAnimation delay={0.1}>
                <span className={`badge ${badgeClasses}`}>{badge}</span>
              </RevealAnimation>
            )}
            {title && (
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 md:text-heading-2">{title}</h2>
              </RevealAnimation>
            )}
            {subtitle && (
              <RevealAnimation delay={0.3}>
                <p className="max-w-[600px] mx-auto text-secondary/80 dark:text-accent/80">
                  {subtitle}
                </p>
              </RevealAnimation>
            )}
          </div>
        )}

        {/* Figures Grid */}
        <RevealAnimation delay={0.4}>
          <div className="bg-secondary dark:bg-background-6 rounded-[20px] py-8 md:py-10">
            <div className="flex flex-col items-center md:flex-row">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-1 flex-col items-center justify-center gap-4 py-6 md:py-4 max-md:border-b border-accent/20 md:not-last:border-r ${
                    index === items.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className={`${colors.bg} w-fit rounded-full p-4`}>
                    <Icon name={item.icon as any} className="w-6 h-6 text-white" />
                  </div>

                  {/* Number + Label */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-heading-3 md:text-heading-2 text-white font-bold">
                      <NumberAnimation
                        number={item.number}
                        speed={2000}
                        interval={200}
                        space={36}
                        rooms={String(item.number).length}
                      />
                      {item.suffix && (
                        <span className="text-heading-3 md:text-heading-2">{item.suffix}</span>
                      )}
                    </div>
                    <p className="text-accent/80 mt-1">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

KeyFiguresAnimated.displayName = 'KeyFiguresAnimated';
export default KeyFiguresAnimated;
