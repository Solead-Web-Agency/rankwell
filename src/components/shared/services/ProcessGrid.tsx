/**
 * PROCESSGRID - Grille de process/étapes avec icônes
 *
 * Affiche une grille de cartes (5 éléments max avec layout spécial pour les 2 derniers).
 * Remplace : AuditProcess
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

export interface ProcessGridItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessGridProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  steps: ProcessGridItem[];
}

const ProcessGrid = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  steps,
}: ProcessGridProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[552px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[692px] mx-auto">{subtitle}</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-5">
          {steps.map((step, index) => {
            // Special layout for steps 4 and 5 (bottom row) when 5 items
            const isBottomRow = steps.length === 5 && index >= 3;
            const colClass =
              isBottomRow && index === 3
                ? 'col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3'
                : 'col-span-12 md:col-span-6 lg:col-span-4';

            return (
              <div key={step.id} className={colClass}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <p className={`text-tagline-2 ${colors.text}`}>{step.stepNumber}</p>
                      <Icon name={step.icon as any} className="w-12 h-12 text-secondary dark:text-accent" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                    </div>
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

ProcessGrid.displayName = 'ProcessGrid';
export default ProcessGrid;
