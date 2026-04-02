/**
 * PRICINGSECTION — "Combien ça coûte" (Template Projet, Bloc 7)
 * Fourchettes tarifaires, ROI, facteurs de prix
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface PricingSectionProps {
  title: string;
  ranges: string;
  roiComparison: string;
  factors: string;
  citablePassage: string;
}

export default function PricingSection({ title, ranges, roiComparison, factors, citablePassage }: PricingSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="max-w-4xl">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
          </RevealAnimation>

          <div className="grid gap-6 md:grid-cols-3">
            <RevealAnimation delay={0.15}>
              <div className="p-6 rounded-xl bg-white dark:bg-background-7 border border-border/30 dark:border-border/10">
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-3">Fourchettes tarifaires</h3>
                <div
                  className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: ranges }}
                />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="p-6 rounded-xl bg-white dark:bg-background-7 border border-border/30 dark:border-border/10">
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-3">ROI : SEO vs SEA</h3>
                <div
                  className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: roiComparison }}
                />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.25}>
              <div className="p-6 rounded-xl bg-white dark:bg-background-7 border border-border/30 dark:border-border/10">
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-3">Ce qui influence le prix</h3>
                <div
                  className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: factors }}
                />
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <blockquote className="mt-8 p-6 rounded-xl bg-rw-blue/5 dark:bg-rw-blue/10 border-l-4 border-rw-blue">
              <p className="text-secondary dark:text-accent leading-relaxed font-medium italic">
                {citablePassage}
              </p>
            </blockquote>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
