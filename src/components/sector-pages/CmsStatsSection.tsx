/**
 * CMSSTATSSECTION — "{CMS} en chiffres" (Template CMS, Bloc 2)
 * 3-5 statistiques clés + audience cible
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { CMSStat } from '@/types/sector-pages';

interface CmsStatsSectionProps {
  title: string;
  items: CMSStat[];
  audience: string;
}

export default function CmsStatsSection({ title, items, audience }: CmsStatsSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
        </RevealAnimation>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
          {items.map((stat, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.05}>
              <div className="p-5 rounded-xl bg-white dark:bg-background-7 border border-border/30 dark:border-border/10 text-center">
                <div className="text-2xl font-bold text-rw-blue mb-1">{stat.value}</div>
                <div className="text-sm text-secondary/70 dark:text-accent/70">{stat.label}</div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.3}>
          <p className="text-secondary/80 dark:text-accent/80 leading-relaxed">{audience}</p>
        </RevealAnimation>
      </div>
    </section>
  );
}
