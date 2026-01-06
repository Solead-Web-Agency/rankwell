/**
 * PROCESSHOMEPAGE - Section process spécifique à la page d'accueil
 * Design: 2 colonnes avec visual dashboard et étapes numérotées
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

// ============================================
// VISUEL : Illustration Process Business Centrix
// ============================================
const ProcessVisual = () => (
  <div className="relative bg-white dark:bg-background-7 rounded-[24px] p-6 lg:p-8 border border-stroke-1 dark:border-stroke-6">
    {/* Header avec Rankwell One */}
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-stroke-1 dark:border-stroke-6">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-rw-cyan"></div>
        <span className="text-sm font-medium text-secondary dark:text-accent">Rankwell One</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-xs text-secondary/60 dark:text-accent/60">Live</span>
      </div>
    </div>

    {/* Dashboard metrics */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-background-1 dark:bg-background-6 rounded-xl p-4">
        <p className="text-xs text-secondary/60 dark:text-accent/60 mb-1">Trafic organique</p>
        <p className="text-xl font-semibold text-secondary dark:text-accent">+47%</p>
        <div className="flex items-center gap-1 mt-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-green-500">
            <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs text-green-500">vs mois dernier</span>
        </div>
      </div>
      <div className="bg-background-1 dark:bg-background-6 rounded-xl p-4">
        <p className="text-xs text-secondary/60 dark:text-accent/60 mb-1">Conversions</p>
        <p className="text-xl font-semibold text-secondary dark:text-accent">+23%</p>
        <div className="flex items-center gap-1 mt-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-green-500">
            <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs text-green-500">vs mois dernier</span>
        </div>
      </div>
    </div>

    {/* Progress bar section */}
    <div className="bg-background-1 dark:bg-background-6 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-secondary dark:text-accent">Objectifs Q4</p>
        <span className="text-xs text-rw-cyan font-medium">78%</span>
      </div>
      <div className="w-full h-2 bg-background-3 dark:bg-background-5 rounded-full overflow-hidden">
        <div className="h-full bg-rw-cyan rounded-full" style={{ width: '78%' }}></div>
      </div>
    </div>

    {/* Actions récentes */}
    <div className="space-y-3">
      <p className="text-xs text-secondary/60 dark:text-accent/60 uppercase tracking-wider">Actions récentes</p>
      <div className="flex items-center gap-3 p-3 bg-background-1 dark:bg-background-6 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-rw-purple/10 flex items-center justify-center">
          <span className="text-rw-purple text-sm">✓</span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-secondary dark:text-accent">15 contenus optimisés</p>
          <p className="text-xs text-secondary/50 dark:text-accent/50">Il y a 2 heures</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-background-1 dark:bg-background-6 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-rw-cyan/10 flex items-center justify-center">
          <span className="text-rw-cyan text-sm">↗</span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-secondary dark:text-accent">3 nouveaux backlinks</p>
          <p className="text-xs text-secondary/50 dark:text-accent/50">Il y a 5 heures</p>
        </div>
      </div>
    </div>
  </div>
);

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessHomepageProps {
  badge: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

const ProcessHomepage = ({
  badge,
  title,
  description,
  steps,
}: ProcessHomepageProps) => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-rw-blue-light text-rw-blue">{badge}</span>
          </RevealAnimation>

          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[624px]">{title}</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[802px]" dangerouslySetInnerHTML={{ __html: description }} />
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
          <div className="col-span-12 xl:col-span-5">
            <div>
              <RevealAnimation delay={0.4} direction="right" offset={100}>
                <div className="mx-auto max-w-[478px] xl:mx-0">
                  <ProcessVisual />
                </div>
              </RevealAnimation>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-7">
            <div className="flex flex-col items-center gap-y-5">
              {steps.map((step, idx) => (
                <RevealAnimation key={step.number} delay={0.5 + idx * 0.1}>
                  <div className="bg-background-3 dark:bg-background-7 flex w-full max-w-[596px] flex-col items-start gap-y-4 rounded-[20px] px-7 py-5 sm:flex-row sm:gap-[22px] sm:px-[34px] sm:py-6">
                    {/* Number circle */}
                    <div className="bg-rw-blue text-white flex size-10 shrink-0 items-center justify-center rounded-full font-medium">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-secondary text-lg leading-[27px] font-medium dark:text-accent">
                        {step.title}
                      </h3>
                      <p>{step.description}</p>
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

ProcessHomepage.displayName = 'ProcessHomepage';
export default ProcessHomepage;
