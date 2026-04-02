/**
 * KEYWORDSMARKETTABS — Keywords by market (US / UK / UAE)
 * Used on EN sector pages to display keyword data per market with tabs.
 *
 * Design: matches GeoVisibilitySection tab pattern (sliding indicator, crossfade)
 * Table: matches TableauService rendering (striped header, highlighted last column)
 */

'use client';

import { useState, useCallback } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import type { KeywordEntry } from '@/types/sector-pages';

// ============================================
// TAB CONFIG
// ============================================

const marketTabs = [
  {
    id: 'us',
    icon: 'Globe',
    label: 'United States',
    shortLabel: 'US',
    flagClass: 'fi fi-us',
  },
  {
    id: 'uk',
    icon: 'Globe',
    label: 'United Kingdom',
    shortLabel: 'UK',
    flagClass: 'fi fi-gb',
  },
  {
    id: 'uae',
    icon: 'Globe',
    label: 'UAE',
    shortLabel: 'UAE',
    flagClass: 'fi fi-ae',
  },
] as const;

type MarketId = (typeof marketTabs)[number]['id'];

// ============================================
// HELPERS
// ============================================

const columns = ['Keyword', 'Volume/mo', 'Intent', 'Difficulty'];

const intentLabels: Record<KeywordEntry['intent'], string> = {
  transactionnelle: 'Transactional',
  informationnelle: 'Informational',
  navigationnelle: 'Navigational',
  commerciale: 'Commercial',
  locale: 'Local',
  mixte: 'Mixed',
};

const difficultyLabels: Record<KeywordEntry['difficulty'], string> = {
  'faible': 'Low',
  'moyenne': 'Medium',
  'élevée': 'High',
  'très élevée': 'Very high',
};

// ============================================
// PROPS
// ============================================

interface KeywordsMarketTabsProps {
  sectionId?: string;
  title: string;
  subtitle?: string;
  markets: {
    us: KeywordEntry[];
    uk: KeywordEntry[];
    uae: KeywordEntry[];
  };
  accentColor?: RwColor;
}

// ============================================
// COMPONENT
// ============================================

export default function KeywordsMarketTabs({
  sectionId,
  title,
  subtitle,
  markets,
  accentColor = 'rw-blue',
}: KeywordsMarketTabsProps) {
  const [activeTab, setActiveTab] = useState<MarketId>('us');
  const [displayedTab, setDisplayedTab] = useState<MarketId>('us');
  const [contentVisible, setContentVisible] = useState(true);

  const activeIndex = marketTabs.findIndex((t) => t.id === activeTab);
  const activeConfig = marketTabs.find((t) => t.id === activeTab)!;
  const colors = colorVariants[accentColor];

  const switchTab = useCallback(
    (id: MarketId) => {
      if (id === activeTab) return;
      setContentVisible(false);
      setTimeout(() => {
        setActiveTab(id);
        setDisplayedTab(id);
        requestAnimationFrame(() => setContentVisible(true));
      }, 150);
    },
    [activeTab],
  );

  const currentEntries = markets[displayedTab];
  const rows = currentEntries.map((e) => [
    e.keyword,
    e.volume.toLocaleString('en-US'),
    intentLabels[e.intent],
    difficultyLabels[e.difficulty] || e.difficulty,
  ]);

  return (
    <section
      id={sectionId}
      className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-7"
    >
      <div className="main-container">
        {/* ── Header ── */}
        <div className="text-center space-y-3 mb-12 lg:mb-14">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>Keywords by market</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[720px] mx-auto">{title}</h2>
          </RevealAnimation>
          {subtitle && (
            <RevealAnimation delay={0.3}>
              <p className="mt-4 text-secondary/60 dark:text-white/60 max-w-[600px] mx-auto text-tagline-1 leading-relaxed">
                {subtitle}
              </p>
            </RevealAnimation>
          )}
        </div>

        {/* ── Tabs + Table widget ── */}
        <RevealAnimation delay={0.4}>
          <div className="rounded-2xl bg-white dark:bg-background-6 border border-stroke-2/60 dark:border-stroke-6/60 overflow-hidden">
            {/* ─ Tab navigation with sliding indicator ─ */}
            <nav
              className="relative flex gap-1 overflow-x-auto px-4 pt-4 pb-2 scrollbar-none border-b border-stroke-1/50 dark:border-stroke-6/40 bg-gradient-to-r from-rw-blue/[0.03] to-transparent dark:from-rw-blue/[0.06]"
              aria-label="Market tabs"
            >
              {/* Sliding pill */}
              <div
                className="absolute top-4 rounded-xl bg-white dark:bg-background-7 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)] border border-stroke-2/60 dark:border-stroke-6/60 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  width: `calc(${100 / marketTabs.length}% - ${((marketTabs.length - 1) * 4) / marketTabs.length}px - 8px)`,
                  height: 'calc(100% - 24px)',
                  transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
                }}
              />

              {marketTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => switchTab(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="keywords-market-panel"
                    className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-xl text-left transition-colors duration-200 cursor-pointer shrink-0 flex-1 justify-center bg-transparent"
                  >
                    {/* Label */}
                    <div className="min-w-0">
                      <p
                        className={[
                          'text-tagline-1 font-medium transition-colors duration-200 whitespace-nowrap',
                          isActive ? 'text-secondary dark:text-white' : 'text-secondary/50 dark:text-white/40',
                        ].join(' ')}
                      >
                        <span className="hidden sm:inline"><span className={`${tab.flagClass} rounded-sm mr-2`} aria-hidden="true" />{tab.label}</span>
                        <span className="sm:hidden"><span className={`${tab.flagClass} rounded-sm mr-1.5`} aria-hidden="true" />{tab.shortLabel}</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* ─ Table panel — crossfade ─ */}
            <div
              id="keywords-market-panel"
              role="tabpanel"
              className="transition-all duration-200 ease-out"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {/* Panel header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-stroke-1/50 dark:border-stroke-6/40">
                <div
                  className={`w-9 h-9 rounded-lg ${colors.bgLight} flex items-center justify-center transition-transform duration-300`}
                  style={{ transform: contentVisible ? 'scale(1)' : 'scale(0.9)' }}
                >
                  <Icon name="Search" className={`w-[18px] h-[18px] ${colors.text}`} strokeWidth={2} />
                </div>
                <h3
                  className="text-tagline-1 font-medium text-secondary dark:text-white transition-opacity duration-150"
                  style={{ opacity: contentVisible ? 1 : 0 }}
                >
                  <span className={`${activeConfig.flagClass} rounded-sm mr-2`} aria-hidden="true" />{activeConfig.label}
                </h3>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-background-1 dark:bg-background-5">
                      {columns.map((col, index) => (
                        <th
                          key={`col-${col}-${index}`}
                          className="text-left p-4 font-medium text-secondary/80 dark:text-white/70 text-tagline-2"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr
                        key={`row-${displayedTab}-${rowIndex}`}
                        className="border-t border-stroke-1 dark:border-stroke-6"
                      >
                        {row.map((cell, cellIndex) => {
                          const isFirstColumn = cellIndex === 0;
                          const isLastColumn = cellIndex === row.length - 1;

                          return (
                            <td
                              key={`cell-${rowIndex}-${cellIndex}`}
                              className={`p-4 ${
                                isFirstColumn
                                  ? 'font-medium'
                                  : isLastColumn
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
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}

KeywordsMarketTabs.displayName = 'KeywordsMarketTabs';
