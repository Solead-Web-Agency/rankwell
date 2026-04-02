'use client';

/**
 * GUIDE WIDGETS — Composants interactifs pour les articles
 *
 * 4 widgets éditoriaux flat + seamless :
 * - Stats : metric cards Vercel-style, count-up au scroll
 * - Bar Chart : barres arrondies, valeur en bout, grid subtile
 * - Comparator : côte à côte desktop, segmented control mobile
 * - Timeline : étapes numérotées, fil connecteur, mini-cards
 *
 * Design : flat, clean, light — tokens Rankwell, dark mode via dark:
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import type { WidgetBlock } from '@/data/guides/types';

// ============================================
// HOOKS
// ============================================

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: string, inView: boolean, duration = 1200) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    const match = target.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const hasDecimal = numStr.includes('.');
    const numVal = parseFloat(numStr.replace(',', '.'));

    if (isNaN(numVal)) {
      setDisplay(target);
      return;
    }

    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numVal * eased;

      if (hasDecimal) {
        const decimals = numStr.split('.')[1]?.length || 1;
        setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.round(current).toLocaleString('fr-FR')}${suffix}`);
      }

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, inView, duration]);

  return display;
}

// ============================================
// ACCENT SYSTEM
// ============================================

const accentMap = {
  blue: { text: 'text-rw-blue', bg: 'bg-rw-blue', border: 'border-rw-blue', hex: '#0031cc' },
  cyan: { text: 'text-rw-cyan', bg: 'bg-rw-cyan', border: 'border-rw-cyan', hex: '#19c8dc' },
  purple: { text: 'text-rw-purple', bg: 'bg-rw-purple', border: 'border-rw-purple', hex: '#632cce' },
  coral: { text: 'text-rw-coral', bg: 'bg-rw-coral', border: 'border-rw-coral', hex: '#ffa69e' },
} as const;

type AccentKey = keyof typeof accentMap;

function getAccent(key?: string) {
  return accentMap[(key as AccentKey) || 'blue'] || accentMap.blue;
}

// Cycle d'accents pour les items sans accent explicite
const accentCycle: AccentKey[] = ['blue', 'cyan', 'purple', 'coral'];

// ============================================
// STATS WIDGET — Vercel analytics-style cards
// ============================================

interface StatsConfig {
  title?: string;
  items: { value: string; label: string; accent?: AccentKey }[];
}

function StatCard({ item, inView, index }: { item: StatsConfig['items'][0]; inView: boolean; index: number }) {
  const accent = getAccent(item.accent || accentCycle[index % accentCycle.length]);
  const display = useCountUp(item.value, inView, 1000 + index * 150);

  return (
    <div
      className="relative rounded-xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-5 transition-all duration-300 hover:border-stroke-3 dark:hover:border-stroke-7 hover:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 400ms ${index * 80}ms, transform 400ms ${index * 80}ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms, box-shadow 300ms`,
      }}
    >
      <p className={`text-heading-4 lg:text-heading-3 font-semibold ${accent.text} tracking-tight tabular-nums leading-none`}>
        {display}
      </p>
      <p className="mt-2 text-tagline-2 text-secondary/50 dark:text-white/45 leading-snug">
        {item.label}
      </p>
    </div>
  );
}

function StatsWidget({ config }: { config: StatsConfig }) {
  const { ref, inView } = useInView(0.2);

  return (
    <div ref={ref} className="my-10">
      {config.title && (
        <p className="mb-4 text-tagline-2 font-medium tracking-wide text-secondary/40 dark:text-white/35 uppercase">
          {config.title}
        </p>
      )}
      <div className={`grid gap-3 ${
        config.items.length <= 2
          ? 'grid-cols-2'
          : config.items.length === 3
            ? 'grid-cols-3'
            : 'grid-cols-2 sm:grid-cols-4'
      }`}>
        {config.items.map((item, i) => (
          <StatCard key={i} item={item} inView={inView} index={i} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// BAR CHART WIDGET — Clean data visualization
// ============================================

interface BarChartConfig {
  title?: string;
  items: { label: string; value: number; displayValue?: string }[];
  maxValue?: number;
  accent?: AccentKey;
}

function BarChartWidget({ config }: { config: BarChartConfig }) {
  const max = config.maxValue || Math.max(...config.items.map((d) => d.value));
  const accent = getAccent(config.accent);
  const { ref, inView } = useInView(0.2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div ref={ref} className="my-10 rounded-xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 p-6">
      {config.title && (
        <p className="text-tagline-1 font-medium text-secondary dark:text-white mb-6">
          {config.title}
        </p>
      )}

      <div className="space-y-5">
        {config.items.map((item, i) => {
          const pct = Math.round((item.value / max) * 100);
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <div
              key={i}
              className="cursor-default transition-opacity duration-200"
              style={{ opacity: isDimmed ? 0.3 : 1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className={`text-tagline-2 font-medium transition-colors duration-200 ${
                  isHovered ? 'text-secondary dark:text-white' : 'text-secondary/70 dark:text-white/55'
                }`}>
                  {item.label}
                </span>
              </div>

              {/* Bar container with grid lines */}
              <div className="relative">
                {/* Background grid */}
                <div className="absolute inset-0 flex">
                  {[0, 1, 2, 3, 4].map((tick) => (
                    <div key={tick} className="flex-1 border-r border-stroke-2/40 dark:border-stroke-6/30 last:border-r-0" />
                  ))}
                </div>

                {/* Bar */}
                <div className="relative h-8 rounded-lg bg-background-2/60 dark:bg-background-9/40 overflow-hidden">
                  <div
                    className={`h-full rounded-lg ${accent.bg} flex items-center justify-end transition-all`}
                    style={{
                      width: inView ? `${Math.max(pct, 8)}%` : '0%',
                      transitionDuration: `${700 + i * 120}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: isHovered ? 1 : 0.85,
                    }}
                  >
                    {/* Value inside bar */}
                    <span
                      className="text-tagline-3 font-semibold text-white tabular-nums pr-3 whitespace-nowrap"
                      style={{
                        opacity: inView ? 1 : 0,
                        transition: `opacity 300ms ${700 + i * 120 + 200}ms`,
                      }}
                    >
                      {item.displayValue || item.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scale */}
      <div className="mt-3 flex justify-between text-tagline-3 text-secondary/25 dark:text-white/20 tabular-nums">
        <span>0</span>
        <span>{Math.round(max * 0.25)}</span>
        <span>{Math.round(max * 0.5)}</span>
        <span>{Math.round(max * 0.75)}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

// ============================================
// COMPARATOR WIDGET — Side-by-side + mobile toggle
// ============================================

interface ComparatorConfig {
  title?: string;
  optionA: { label: string; points: string[] };
  optionB: { label: string; points: string[] };
}

function ComparatorWidget({ config }: { config: ComparatorConfig }) {
  const [active, setActive] = useState<'A' | 'B'>('A');

  const renderPoints = (points: string[], accent: 'blue' | 'purple') => (
    <ul className="p-5 space-y-1.5">
      {points.map((point, i) => (
        <li
          key={i}
          className="flex items-start gap-3 rounded-lg px-3 py-2 -mx-1 transition-colors duration-150 hover:bg-background-2/60 dark:hover:bg-background-9/40 cursor-default"
        >
          <svg className={`mt-[5px] shrink-0 w-3.5 h-3.5 ${accent === 'blue' ? 'text-rw-blue' : 'text-rw-purple'}`} viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-tagline-2 text-secondary/70 dark:text-white/60 leading-relaxed">
            {point}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="my-10">
      {config.title && (
        <p className="text-tagline-1 font-medium text-secondary dark:text-white mb-4">
          {config.title}
        </p>
      )}

      {/* Desktop: side-by-side */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-3">
        {([
          { side: 'A' as const, option: config.optionA, accent: 'blue' as const, accentBg: 'bg-rw-blue', accentText: 'text-rw-blue', lightBg: 'bg-rw-blue-light dark:bg-rw-blue/12' },
          { side: 'B' as const, option: config.optionB, accent: 'purple' as const, accentBg: 'bg-rw-purple', accentText: 'text-rw-purple', lightBg: 'bg-rw-purple-light dark:bg-rw-purple/12' },
        ]).map(({ side, option, accent, accentText, lightBg }) => (
          <div
            key={side}
            className="rounded-xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 transition-shadow duration-200 hover:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="px-5 py-3.5 border-b border-stroke-2 dark:border-stroke-6 bg-background-1/50 dark:bg-background-9/30">
              <div className="flex items-center gap-2.5">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded text-tagline-3 font-semibold ${accentText} ${lightBg}`}>
                  {side}
                </span>
                <span className="text-tagline-2 font-medium text-secondary dark:text-white">
                  {option.label}
                </span>
              </div>
            </div>
            {renderPoints(option.points, accent)}
          </div>
        ))}
      </div>

      {/* Mobile: segmented control */}
      <div className="md:hidden">
        <div className="relative flex rounded-xl border border-stroke-2 dark:border-stroke-6 bg-background-1 dark:bg-background-7 p-1 mb-3">
          {/* Sliding indicator */}
          <div
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-white dark:bg-background-9 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out"
            style={{ transform: active === 'A' ? 'translateX(0)' : 'translateX(calc(100% + 8px))' }}
          />
          {(['A', 'B'] as const).map((side) => {
            const option = side === 'A' ? config.optionA : config.optionB;
            const accentText = side === 'A' ? 'text-rw-blue' : 'text-rw-purple';
            return (
              <button
                key={side}
                onClick={() => setActive(side)}
                className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2.5 text-tagline-2 font-medium text-center rounded-lg transition-colors duration-200 ${
                  active === side
                    ? `text-secondary dark:text-white`
                    : 'text-secondary/35 dark:text-white/35'
                }`}
              >
                <span className={`text-tagline-3 font-semibold transition-colors duration-200 ${active === side ? accentText : ''}`}>
                  {side}
                </span>
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="rounded-xl border border-stroke-2 dark:border-stroke-6 bg-white dark:bg-background-7 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: active === 'A' ? 'translateX(0)' : 'translateX(-50%)', width: '200%' }}
          >
            <div className="w-1/2">{renderPoints(config.optionA.points, 'blue')}</div>
            <div className="w-1/2">{renderPoints(config.optionB.points, 'purple')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// TIMELINE WIDGET — Editorial numbered steps
// ============================================

interface TimelineConfig {
  title?: string;
  steps: { label: string; description: string }[];
}

function TimelineWidget({ config }: { config: TimelineConfig }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, inView } = useInView(0.15);

  const toggle = useCallback((i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div ref={ref} className="my-10">
      {config.title && (
        <p className="text-tagline-1 font-medium text-secondary dark:text-white mb-5">
          {config.title}
        </p>
      )}

      <div className="relative pl-12">
        {/* Connecting thread */}
        <div
          className="absolute left-[15px] top-5 bottom-5 w-px transition-all duration-700"
          style={{
            background: 'linear-gradient(to bottom, var(--color-stroke-2), transparent)',
            clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        <div className="space-y-2">
          {config.steps.map((step, i) => {
            const isExpanded = expandedIndex === i;
            const total = config.steps.length;
            // Progressive weight: earlier steps are lighter, later steps darker
            const weight = 0.4 + (i / Math.max(total - 1, 1)) * 0.6;

            return (
              <div
                key={i}
                className="relative cursor-pointer select-none group"
                onClick={() => toggle(i)}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 450ms ${i * 80}ms, transform 450ms ${i * 80}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
              >
                {/* Step number — positioned on the thread line */}
                <div className="absolute -left-12 top-3 z-10 flex h-[30px] w-[30px] items-center justify-center">
                  <span
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-lg text-tagline-3 font-semibold transition-all duration-300 ${
                      isExpanded
                        ? 'bg-rw-blue text-white shadow-[0_2px_8px_-2px_rgba(0,49,204,0.3)]'
                        : 'bg-background-2 dark:bg-background-9 text-secondary/45 dark:text-white/35 group-hover:bg-rw-blue-light group-hover:text-rw-blue dark:group-hover:bg-rw-blue/12'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Step card */}
                <div
                  className={`rounded-xl px-5 py-3.5 transition-all duration-300 ${
                    isExpanded
                      ? 'bg-white dark:bg-background-7 border border-stroke-2 dark:border-stroke-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]'
                      : 'border border-transparent hover:bg-background-1/60 dark:hover:bg-background-7/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={`text-tagline-1 font-medium transition-colors duration-200 ${
                        isExpanded
                          ? 'text-secondary dark:text-white'
                          : 'group-hover:text-secondary dark:group-hover:text-white'
                      }`}
                      style={{
                        color: !isExpanded ? `rgba(var(--color-secondary-rgb, 23, 23, 23), ${weight})` : undefined,
                      }}
                    >
                      {step.label}
                    </p>
                    <svg
                      className={`w-4 h-4 shrink-0 text-secondary/25 dark:text-white/20 transition-all duration-300 ${
                        isExpanded ? 'rotate-180 text-rw-blue' : 'group-hover:text-secondary/50 dark:group-hover:text-white/40'
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Description — collapsible */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isExpanded ? '200px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? '8px' : '0px',
                    }}
                  >
                    <p className="text-tagline-2 text-secondary/55 dark:text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================
// WIDGET REGISTRY — Dispatch par type
// ============================================

export default function GuideWidget({ block }: { block: WidgetBlock }) {
  switch (block.widgetType) {
    case 'stats':
      return <StatsWidget config={block.config as unknown as StatsConfig} />;
    case 'bar-chart':
      return <BarChartWidget config={block.config as unknown as BarChartConfig} />;
    case 'comparator':
      return <ComparatorWidget config={block.config as unknown as ComparatorConfig} />;
    case 'timeline':
      return <TimelineWidget config={block.config as unknown as TimelineConfig} />;
    default:
      return null;
  }
}
