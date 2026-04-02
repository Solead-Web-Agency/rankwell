/**
 * CMSCOMPARISON — Tableau comparatif CMS (Template Projet, Bloc 5)
 * 3-5 CMS avec flexibilité SEO, performance, coût, IA-readiness
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import type { CMSComparisonEntry } from '@/types/sector-pages';

interface CmsComparisonProps {
  title: string;
  entries: CMSComparisonEntry[];
  recommendation: string;
}

export default function CmsComparison({ title, entries, recommendation }: CmsComparisonProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="overflow-x-auto rounded-xl border border-border/40 dark:border-border/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background-1 dark:bg-background-6">
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">CMS</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Flexibilité SEO</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Performance</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Coût</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">IA-readiness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {entries.map((entry, i) => (
                  <tr key={i} className="hover:bg-background-1/50 dark:hover:bg-background-6/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-secondary dark:text-accent">
                      <Link
                        href={`/agence-geo-seo/cms/${entry.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                        className="text-rw-blue hover:underline"
                      >
                        {entry.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-secondary/80 dark:text-accent/80">{entry.seoFlexibility}</td>
                    <td className="px-4 py-3 text-secondary/80 dark:text-accent/80">{entry.performance}</td>
                    <td className="px-4 py-3 text-secondary/80 dark:text-accent/80">{entry.cost}</td>
                    <td className="px-4 py-3 text-secondary/80 dark:text-accent/80">{entry.aiReadiness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <p className="mt-6 text-secondary/80 dark:text-accent/80 leading-relaxed">{recommendation}</p>
        </RevealAnimation>
      </div>
    </section>
  );
}
