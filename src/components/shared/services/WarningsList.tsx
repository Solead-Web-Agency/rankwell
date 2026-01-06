/**
 * WARNINGSLIST - Liste d'avertissements/pratiques à éviter
 *
 * Affiche une liste avec icône X rouge et footer optionnel.
 * Remplace : PratiquesRefusees
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

export interface WarningItem {
  label: string;
  description: string;
}

export interface WarningsListProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  footerText?: string;
  items: WarningItem[];
}

const WarningsList = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  footerText,
  items,
}: WarningsListProps) => {
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

        <div className="max-w-[700px] mx-auto space-y-4">
          {items.map((item, index) => (
            <RevealAnimation key={`${item.label}-${index}`} delay={0.3 + index * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background-1 dark:bg-background-6">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L11 11M11 3L3 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {footerText && (
          <RevealAnimation delay={0.8}>
            <p className="max-w-[700px] mx-auto mt-8 text-center text-secondary/70 dark:text-accent/70">
              {footerText}
            </p>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

WarningsList.displayName = 'WarningsList';
export default WarningsList;
