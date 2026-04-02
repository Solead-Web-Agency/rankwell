/**
 * TECHNICALPROBLEMSECTION — Problèmes techniques courants (Template CMS, Bloc 4)
 * Contenu d'EXPERT impossible à recycler — signal E-E-A-T maximal
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { CMSTechnicalProblem } from '@/types/sector-pages';

interface TechnicalProblemsSectionProps {
  title: string;
  items: CMSTechnicalProblem[];
}

export default function TechnicalProblemsSection({ title, items }: TechnicalProblemsSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
        </RevealAnimation>

        <div className="space-y-6 max-w-4xl">
          {items.map((item, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.05}>
              <div className="p-6 rounded-xl bg-white dark:bg-background-7 border border-border/30 dark:border-border/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold">
                    !
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">{item.problem}</h3>
                    <div
                      className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.solution }}
                    />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
