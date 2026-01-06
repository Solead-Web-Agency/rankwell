/**
 * TABLEAUSERVICE - Composant tableau générique pour pages services
 *
 * Design basé sur le style du thème : fond blanc/background-6, rounded-[20px], bordures subtiles
 *
 * Props:
 * - badge: Texte du badge
 * - badgeClassName: Classes CSS du badge (défaut: bg-rw-purple-light text-rw-purple)
 * - title: Titre de la section
 * - subtitle: Sous-titre descriptif
 * - columns: Tableau des en-têtes de colonnes
 * - rows: Tableau des lignes (chaque ligne est un tableau de valeurs)
 * - highlightLastColumn: Met en valeur la dernière colonne (défaut: false)
 * - accentColor: Couleur d'accent pour la dernière colonne si highlight (défaut: rw-purple)
 *
 * Usage:
 * import { TableauService } from '@/components/shared/services';
 *
 * <TableauService
 *   badge="Analyse"
 *   title="Mon tableau"
 *   columns={['Col 1', 'Col 2', 'Col 3']}
 *   rows={[
 *     ['Valeur 1', 'Valeur 2', 'Valeur 3'],
 *     ['Valeur A', 'Valeur B', 'Valeur C'],
 *   ]}
 * />
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

export interface TableauServiceProps {
  sectionId?: string;
  badge?: string;
  badgeClassName?: string;
  title: string;
  subtitle?: string;
  columns: string[];
  rows: string[][];
  highlightLastColumn?: boolean;
  /** Couleur d'accent (ex: 'rw-blue', 'rw-cyan', 'rw-purple', 'rw-coral', 'rw-pink') */
  accentColor?: RwColor;
}

const TableauService = ({
  sectionId,
  badge,
  badgeClassName,
  title,
  subtitle,
  columns,
  rows,
  highlightLastColumn = false,
  accentColor = 'rw-purple',
}: TableauServiceProps) => {
  // Récupère les classes depuis le color mapping
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeClassName || colors.badge;
  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-12">
          {badge && (
            <RevealAnimation delay={0.1}>
              <span className={`badge ${badgeClasses}`}>{badge}</span>
            </RevealAnimation>
          )}
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[700px] mx-auto">{title}</h2>
          </RevealAnimation>
          {subtitle && (
            <RevealAnimation delay={0.3}>
              <p className="max-w-[700px] mx-auto">{subtitle}</p>
            </RevealAnimation>
          )}
        </div>

        <RevealAnimation delay={0.4}>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-background-6 rounded-[20px] overflow-hidden">
              <thead>
                <tr className="bg-background-1 dark:bg-background-5">
                  {columns.map((col, index) => (
                    <th key={`col-${col}-${index}`} className="text-left p-4 font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`row-${row[0]}-${rowIndex}`} className="border-t border-stroke-1 dark:border-stroke-6">
                    {row.map((cell, cellIndex) => {
                      const isFirstColumn = cellIndex === 0;
                      const isLastColumn = cellIndex === row.length - 1;
                      const shouldHighlight = highlightLastColumn && isLastColumn;

                      return (
                        <td
                          key={`cell-${rowIndex}-${cellIndex}-${cell.substring(0, 20)}`}
                          className={`p-4 ${
                            isFirstColumn
                              ? 'font-medium'
                              : shouldHighlight
                                ? `${colors.text} font-medium`
                                : 'text-secondary/70 dark:text-accent/70'
                          }`}
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

TableauService.displayName = 'TableauService';
export default TableauService;
