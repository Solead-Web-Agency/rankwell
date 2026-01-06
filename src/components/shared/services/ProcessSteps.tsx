/**
 * PROCESSSTEPS - Process horizontal en 4 étapes avec flèches animées
 *
 * Affiche 4 cartes horizontales avec des flèches Marquee entre elles.
 * Remplace : ProcessMethode, InternationalProcess
 */

'use client';

import { cn } from '@/utils/cn';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

export interface ProcessStepItem {
  id: string;
  stepNumber: number | string;
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  steps: ProcessStepItem[];
}

const ArrowIcon = () => (
  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L7 12L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"/>
    <path d="M7 2L12 12L7 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"/>
  </svg>
);

const ProcessSteps = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  steps,
}: ProcessStepsProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section
      id={sectionId}
      className="pt-16 lg:pt-22 xl:pt-39 pb-12 md:pb-16 lg:pb-22 xl:pb-28 bg-white dark:bg-background-7"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="text-center space-y-3">
            <RevealAnimation delay={0.1}>
              <span className={`badge ${colors.badge}`}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id={`${sectionId}-heading`} itemProp="name">
                {title}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-[#323A44] dark:text-accent/80" itemProp="description">
                {subtitle}
              </p>
            </RevealAnimation>
          </div>
          {/* cards */}
          <div
            className="flex max-xl:flex-wrap items-stretch justify-center gap-x-3 gap-y-6 relative"
            role="list"
            aria-label="Step-by-step process"
          >
            {steps.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left" className="flex">
                <div
                  className={cn(
                    'p-10.5 w-full md:max-w-[306px] rounded-[20px] flex flex-col',
                    index % 2 === 0 ? 'bg-background-3 dark:bg-background-6' : `${colors.bgLight} dark:bg-opacity-20`
                  )}
                  role="listitem"
                  itemType="https://schema.org/HowToStep"
                >
                  {/* Numéro - hauteur fixe */}
                  <div className="h-16 mb-6">
                    <span className="text-heading-3" aria-hidden="true">
                      {step.stepNumber}
                    </span>
                  </div>
                  {/* Titre - hauteur fixe pour 2 lignes max */}
                  <div className="h-16 mb-3">
                    <h3 className="text-heading-5" itemProp="name">
                      {step.title}
                    </h3>
                  </div>
                  {/* Description - prend le reste */}
                  <p className="max-w-[222px]" itemProp="text">
                    {step.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}

            {/* Flèches entre les cartes - masquées sur mobile, visibles sur xl */}
            {steps.slice(0, -1).map((_, index) => {
              // Calcul de la position horizontale dynamique
              const totalSteps = steps.length;
              const position = ((index + 1) / totalSteps) * 100;
              return (
                <RevealAnimation key={`arrow-${index}`} delay={0.3 + index * 0.2} direction="left">
                  <div
                    className="bg-background-3 dark:bg-background-6 overflow-hidden z-10 ring-8 ring-white dark:ring-background-7 rounded-[80px] py-6 px-2.5 absolute -translate-y-1/2 top-1/2 hidden xl:block max-w-[44px] w-full -translate-x-1/2"
                    style={{ left: `${position}%` }}
                  >
                    <Marquee speed={17} delay={0} direction="right" autoFill className="h-6 overflow-hidden">
                      <figure className="w-3.5 h-6 flex items-center justify-center mx-3 text-secondary dark:text-accent">
                        <ArrowIcon />
                      </figure>
                    </Marquee>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

ProcessSteps.displayName = 'ProcessSteps';
export default ProcessSteps;
