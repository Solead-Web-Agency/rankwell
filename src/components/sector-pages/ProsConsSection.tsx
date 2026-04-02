/**
 * PROSCONSSECTION — Avantages ET limites SEO (Template CMS, Bloc 3)
 * L'approche honnête = E-E-A-T fort, aucun concurrent ne fait ça
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface ProsConsSectionProps {
  title: string;
  pros: string[];
  cons: string[];
  comparisonNote: string;
  citablePassage: string;
}

export default function ProsConsSection({ title, pros, cons, comparisonNote, citablePassage }: ProsConsSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
        </RevealAnimation>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Avantages */}
          <RevealAnimation delay={0.15}>
            <div className="p-6 rounded-xl bg-green-50/60 dark:bg-green-950/20 border border-green-200/40 dark:border-green-800/20">
              <h3 className="text-heading-6 text-green-800 dark:text-green-400 mb-4">Avantages SEO</h3>
              <ul className="space-y-3">
                {pros.map((pro, i) => (
                  <li key={i} className="flex gap-2 text-secondary/80 dark:text-accent/80">
                    <span className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Limites */}
          <RevealAnimation delay={0.2}>
            <div className="p-6 rounded-xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/40 dark:border-orange-800/20">
              <h3 className="text-heading-6 text-orange-800 dark:text-orange-400 mb-4">Limites SEO</h3>
              <ul className="space-y-3">
                {cons.map((con, i) => (
                  <li key={i} className="flex gap-2 text-secondary/80 dark:text-accent/80">
                    <span className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5">⚠</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.25}>
          <p className="text-secondary/80 dark:text-accent/80 leading-relaxed mb-6">{comparisonNote}</p>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <blockquote className="p-6 rounded-xl bg-rw-blue/5 dark:bg-rw-blue/10 border-l-4 border-rw-blue">
            <p className="text-secondary dark:text-accent leading-relaxed font-medium italic">
              {citablePassage}
            </p>
          </blockquote>
        </RevealAnimation>
      </div>
    </section>
  );
}
