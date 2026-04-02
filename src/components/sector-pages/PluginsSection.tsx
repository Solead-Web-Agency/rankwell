/**
 * PLUGINSSECTION — Plugins / Apps SEO recommandés (Template CMS, Bloc 6)
 * Top 5 plugins avec rôle et configuration
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { CMSPlugin } from '@/types/sector-pages';

interface PluginsSectionProps {
  title: string;
  items: CMSPlugin[];
  rankwellChoice: string;
}

export default function PluginsSection({ title, items, rankwellChoice }: PluginsSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
        </RevealAnimation>

        <div className="space-y-4 max-w-4xl mb-8">
          {items.map((plugin, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.05}>
              <div className="flex gap-4 p-5 rounded-xl bg-background-1 dark:bg-background-6 border border-border/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rw-blue-light text-rw-blue flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary dark:text-accent mb-1">{plugin.name}</h3>
                  <p className="text-sm text-secondary/70 dark:text-accent/70 mb-1">{plugin.role}</p>
                  <p className="text-sm text-secondary/60 dark:text-accent/60 italic">{plugin.config}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.35}>
          <div className="p-6 rounded-xl bg-rw-blue-light/50 dark:bg-rw-blue/10 border border-rw-blue/20 max-w-4xl">
            <p className="text-secondary dark:text-accent leading-relaxed">
              <strong className="text-rw-blue">Choix Rankwell :</strong> {rankwellChoice}
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
