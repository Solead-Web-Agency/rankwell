/**
 * LANDINGFINALCTA - CTA de fin de page (ouvre la modale)
 *
 * Même structure visuelle que le composant CTA global, sans lien sortant.
 */

import { ReactNode } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import LandingCtaButton from './LandingCtaButton';

export interface LandingFinalCtaProps {
  title: ReactNode;
  description: string;
  buttonText: string;
  checklistItems: { id: string; text: string }[];
  accentColor?: RwColor;
}

const LandingFinalCta = ({
  title,
  description,
  buttonText,
  checklistItems,
  accentColor = 'rw-cyan',
}: LandingFinalCtaProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-4 max-w-[810px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mb-8 lg:max-w-[600px] mx-auto">{description}</p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="md:inline-block">
              <LandingCtaButton
                source="final-cta"
                className={`btn-md md:btn-xl ${colors.bg} text-white hover:opacity-90 w-full md:w-auto`}
              >
                {buttonText}
              </LandingCtaButton>
            </div>
          </RevealAnimation>

          <div className="flex flex-wrap max-lg:gap-5 items-center justify-center mt-6 md:mt-8 gap-[42px]">
            {checklistItems.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                <div className="flex items-center gap-3">
                  <span className={`size-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <Icon name="Check" className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-tagline-2 text-secondary dark:text-accent">{item.text}</span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

LandingFinalCta.displayName = 'LandingFinalCta';
export default LandingFinalCta;
