/**
 * KEYWORDTABLE — Tableau de mots-clés stratégiques (Template Secteur, Bloc 3)
 * Affiche 5-7 mots-clés avec volume, intention, difficulté
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { KeywordEntry } from '@/types/sector-pages';

interface KeywordTableProps {
  title: string;
  entries: KeywordEntry[];
  interpretation: string;
}

const intentLabels: Record<KeywordEntry['intent'], string> = {
  transactionnelle: 'Transactionnelle',
  informationnelle: 'Informationnelle',
  navigationnelle: 'Navigationnelle',
  commerciale: 'Commerciale',
  locale: 'Locale',
  mixte: 'Mixte',
};

const difficultyColors: Record<KeywordEntry['difficulty'], string> = {
  faible: 'text-green-600 dark:text-green-400',
  moyenne: 'text-yellow-600 dark:text-yellow-400',
  élevée: 'text-orange-600 dark:text-orange-400',
  'très élevée': 'text-red-600 dark:text-red-400',
};

export default function KeywordTable({ title, entries, interpretation }: KeywordTableProps) {
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
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Requête</th>
                  <th className="text-right px-4 py-3 font-semibold text-secondary dark:text-accent">Volume / mois</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Intention</th>
                  <th className="text-left px-4 py-3 font-semibold text-secondary dark:text-accent">Difficulté</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {entries.map((entry, i) => (
                  <tr key={i} className="hover:bg-background-1/50 dark:hover:bg-background-6/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-secondary dark:text-accent">{entry.keyword}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-secondary/80 dark:text-accent/80">
                      {entry.volume.toLocaleString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 text-secondary/80 dark:text-accent/80">{intentLabels[entry.intent]}</td>
                    <td className={`px-4 py-3 font-medium capitalize ${difficultyColors[entry.difficulty]}`}>
                      {entry.difficulty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <p className="mt-6 text-secondary/80 dark:text-accent/80 leading-relaxed">{interpretation}</p>
        </RevealAnimation>
      </div>
    </section>
  );
}
