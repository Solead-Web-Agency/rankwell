/**
 * GEOVISIBILITYSECTION — Section Visibilité IA / GEO
 * LE bloc différenciant — présent dans les 3 templates
 *
 * Design: split-tab widget avec sliding indicator,
 * crossfade du contenu, micro-interactions polish.
 */

'use client';

import { useState, useCallback } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import type { GeoVisibilityData } from '@/types/sector-pages';

// ============================================
// TAB CONFIG
// ============================================

const tabConfigByLocale = {
  fr: [
    { id: 'llm', icon: 'BrainCog', label: 'Moteurs IA', fullTitle: 'Comment les moteurs IA répondent' },
    { id: 'structured', icon: 'Braces', label: 'Données structurées', fullTitle: 'Balisage schema.org recommandé' },
    { id: 'score', icon: 'Gauge', label: 'Score GEO', fullTitle: 'Citabilité IA sur 3 dimensions' },
  ],
  en: [
    { id: 'llm', icon: 'BrainCog', label: 'AI Engines', fullTitle: 'How AI engines respond' },
    { id: 'structured', icon: 'Braces', label: 'Structured Data', fullTitle: 'Recommended schema.org markup' },
    { id: 'score', icon: 'Gauge', label: 'GEO Score', fullTitle: 'AI citability across 3 dimensions' },
  ],
} as const;

// ============================================
// COMPONENT
// ============================================

interface GeoVisibilitySectionProps {
  data: GeoVisibilityData;
  sectionId?: string;
  locale?: 'fr' | 'en';
}

export default function GeoVisibilitySection({ data, sectionId, locale = 'fr' }: GeoVisibilitySectionProps) {
  const tabConfig = tabConfigByLocale[locale] || tabConfigByLocale.fr;
  const [activeTab, setActiveTab] = useState('score');
  const [displayedTab, setDisplayedTab] = useState('score');
  const [contentVisible, setContentVisible] = useState(true);

  const activeIndex = tabConfig.findIndex((t) => t.id === activeTab);
  const activeConfig = tabConfig.find((t) => t.id === activeTab)!;

  const contentMap: Record<string, string> = {
    llm: data.llmBehavior,
    structured: data.structuredData,
    score: data.geoScore,
  };

  const switchTab = useCallback(
    (id: string) => {
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

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-gradient-to-b from-background-1 via-background-1 to-white dark:from-background-8 dark:via-background-8 dark:to-background-7">
      <div className="main-container">

        {/* ── Header ── */}
        <div className="text-center mb-12 lg:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-rw-blue-light text-rw-blue mb-5">
              {locale === 'en' ? 'GEO — AI Visibility' : 'GEO — Visibilité IA'}
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[720px] mx-auto">{data.title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mt-4 text-secondary/60 dark:text-white/60 max-w-[600px] mx-auto text-tagline-1 leading-relaxed">
              {data.intro}
            </p>
          </RevealAnimation>
        </div>

        {/* ── Widget ── */}
        <RevealAnimation delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-4 lg:gap-5">

            {/* ─ Tab navigation with sliding indicator ─ */}
            <nav
              className="relative flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0 lg:self-start scrollbar-none"
              aria-label="Onglets GEO"
            >
              {/* Desktop sliding pill */}
              <div
                className="absolute left-0 right-0 rounded-xl bg-white dark:bg-background-7 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)] border border-stroke-2/60 dark:border-stroke-6/60 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none hidden lg:block"
                style={{
                  height: `calc(${100 / tabConfig.length}% - ${((tabConfig.length - 1) * 4) / tabConfig.length}px)`,
                  transform: `translateY(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
                }}
              />

              {/* Mobile sliding pill */}
              <div
                className="absolute top-0 bottom-0 rounded-xl bg-white dark:bg-background-7 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] border border-stroke-2/60 dark:border-stroke-6/60 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none lg:hidden"
                style={{
                  width: `calc(${100 / tabConfig.length}% - ${((tabConfig.length - 1) * 4) / tabConfig.length}px)`,
                  transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
                }}
              />

              {tabConfig.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => switchTab(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="geo-panel"
                    className="relative z-10 flex items-center gap-3 px-4 py-3 lg:gap-4 lg:px-5 lg:py-5 rounded-xl text-left transition-colors duration-200 cursor-pointer flex-1 lg:flex-none lg:w-full bg-transparent"
                  >
                    {/* Icon with glow */}
                    <div
                      className={[
                        'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                        isActive
                          ? 'bg-rw-blue shadow-[0_0_20px_rgba(0,49,204,0.35)] scale-110'
                          : 'bg-background-3 dark:bg-background-9',
                      ].join(' ')}
                    >
                      <Icon
                        name={tab.icon}
                        className={[
                          'w-6 h-6 transition-colors duration-200',
                          isActive ? 'text-white' : 'text-secondary/35 dark:text-white/30',
                        ].join(' ')}
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                    </div>

                    {/* Label */}
                    <div className="min-w-0">
                      <p
                        className={[
                          'text-tagline-1 font-medium transition-colors duration-200',
                          isActive ? 'text-secondary dark:text-white' : 'text-secondary/50 dark:text-white/40',
                        ].join(' ')}
                      >
                        {tab.label}
                      </p>
                      <p
                        className={[
                          'text-tagline-3 mt-0.5 hidden lg:block transition-colors duration-200',
                          isActive ? 'text-secondary/45 dark:text-white/35' : 'text-secondary/25 dark:text-white/18',
                        ].join(' ')}
                      >
                        {tab.fullTitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* ─ Content panel ─ */}
            <div
              id="geo-panel"
              role="tabpanel"
              className="rounded-2xl bg-white dark:bg-background-7 border border-stroke-2/60 dark:border-stroke-6/60 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            >
              {/* Panel header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-stroke-1/50 dark:border-stroke-6/40 bg-gradient-to-r from-rw-blue/[0.03] to-transparent dark:from-rw-blue/[0.06]">
                <div
                  className="w-9 h-9 rounded-lg bg-rw-blue/8 dark:bg-rw-blue/15 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: contentVisible ? 'scale(1)' : 'scale(0.9)' }}
                >
                  <Icon name={activeConfig.icon} className="w-[18px] h-[18px] text-rw-blue" strokeWidth={2} />
                </div>
                <h3
                  className="text-tagline-1 font-medium text-secondary dark:text-white transition-opacity duration-150"
                  style={{ opacity: contentVisible ? 1 : 0 }}
                >
                  {activeConfig.fullTitle}
                </h3>
              </div>

              {/* Panel body — crossfade */}
              <div
                className="px-6 py-5 md:px-8 md:py-6 transition-all duration-200 ease-out"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(6px)',
                }}
              >
                <div
                  className={[
                    'prose prose-sm dark:prose-invert max-w-none leading-relaxed',
                    'text-secondary/70 dark:text-white/60',
                    '[&_h4]:text-[14px] [&_h4]:font-semibold [&_h4]:uppercase [&_h4]:tracking-wide [&_h4]:text-rw-blue [&_h4]:mt-6 [&_h4]:mb-2 [&_h4:first-child]:mt-0',
                    '[&_p]:mb-3 [&_p:last-child]:mb-0',
                    '[&_code]:bg-rw-blue/[0.06] [&_code]:text-rw-blue [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-[13px] [&_code]:font-mono [&_code]:font-medium [&_code]:border [&_code]:border-rw-blue/10',
                    'dark:[&_code]:bg-rw-blue/15 dark:[&_code]:border-rw-blue/20',
                    '[&_strong]:text-secondary/90 dark:[&_strong]:text-white/80',
                  ].join(' ')}
                  dangerouslySetInnerHTML={{ __html: contentMap[displayedTab] }}
                />

                {/* Glossary links — inline dans le panel */}
                {data.glossaryLinks && data.glossaryLinks.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-4 border-t border-stroke-1/40 dark:border-stroke-6/30">
                    {data.glossaryLinks.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="text-tagline-3 text-rw-blue hover:text-rw-blue/70 transition-colors duration-200 flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7-7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
}
