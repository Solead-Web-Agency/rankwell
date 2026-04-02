/**
 * METHODOLOGYSTEPS — Étapes numérotées de la méthodologie Rankwell
 * Utilisé par Secteur (Bloc 4), Projet (Bloc 3), CMS (Bloc 5)
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { MethodologyStep } from '@/types/sector-pages';

interface MethodologyStepsProps {
  title: string;
  steps: MethodologyStep[];
  /** Texte différenciant Rankwell (template CMS uniquement) */
  differentiator?: string;
}

export default function MethodologySteps({ title, steps, differentiator }: MethodologyStepsProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-10">{title}</h2>
        </RevealAnimation>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.05}>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rw-blue-light text-rw-blue flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">{step.title}</h3>
                  <div
                    className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {differentiator && (
          <RevealAnimation delay={0.1 + steps.length * 0.05}>
            <div className="mt-10 p-6 rounded-xl bg-rw-blue-light/50 dark:bg-rw-blue/10 border border-rw-blue/20">
              <p className="text-secondary dark:text-accent leading-relaxed font-medium">{differentiator}</p>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
}
