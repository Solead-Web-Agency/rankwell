/**
 * PROCESSTIMELINE - Timeline verticale avec cartes alternées (style process-02)
 * Composant global utilisable sur toutes les pages
 *
 * Design: Ligne verticale centrale, cartes alternant gauche/droite avec animation GSAP
 *
 * Props:
 * - sectionId: ID pour l'ancre
 * - badge: Texte du badge
 * - badgeClassName: Classes CSS du badge
 * - title: Titre de la section
 * - subtitle: Sous-titre
 * - steps: Tableau d'étapes [{id, title, description, items?}]
 * - accentColor: Couleur d'accent (défaut: 'rw-purple')
 * - stepLabel: Label des étapes ("DIMENSION", "ÉTAPE", etc.)
 */

'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import type { Locale } from '@/lib/i18n';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// LOCALIZED DEFAULTS
// ============================================
const defaultTexts: Record<Locale, { title: string; subtitle: string; stepLabel: string }> = {
  fr: {
    title: 'Notre processus',
    subtitle: 'Description du processus',
    stepLabel: 'ÉTAPE',
  },
  en: {
    title: 'Our process',
    subtitle: 'Process description',
    stepLabel: 'STEP',
  },
};

// ============================================
// TYPES
// ============================================
export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  items?: string[];
}

export interface ProcessTimelineProps {
  sectionId?: string;
  badge?: string;
  badgeClassName?: string;
  title?: string;
  subtitle?: string;
  steps?: TimelineStep[];
  accentColor?: string;
  stepLabel?: string;
  /** Mode compact pour des étapes avec peu de texte */
  compact?: boolean;
  locale?: Locale;
}

const ProcessTimeline = ({
  sectionId = 'timeline',
  badge = 'Process',
  badgeClassName = 'bg-rw-purple-light text-rw-purple',
  title,
  subtitle,
  steps = [],
  accentColor = 'rw-purple',
  stepLabel,
  compact = false,
  locale = 'fr',
}: ProcessTimelineProps) => {
  const defaults = defaultTexts[locale];
  const finalTitle = title ?? defaults.title;
  const finalSubtitle = subtitle ?? defaults.subtitle;
  const finalStepLabel = stepLabel ?? defaults.stepLabel;
  // Hauteurs selon le mode compact ou non
  const lineHeight = compact ? 180 : 380;
  const stepLineRefs = useRef<(SVGSVGElement | null)[]>([]);
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const animationInitialized = useRef(false);

  useGSAP(
    () => {
      if (animationInitialized.current) return;
      animationInitialized.current = true;

      const stepLines = stepLineRefs.current.filter(Boolean) as SVGSVGElement[];

      if (!stepLines.length) return;

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: lineHeight,
          duration: 1.5,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: scopeRef },
  );

  return (
    <section id={sectionId} className="pb-[100px] xl:pb-[200px] pt-[100px]" ref={scopeRef}>
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${badgeClassName}`}>{badge}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{finalTitle}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[610px] mx-auto">
                {finalSubtitle}
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="process-steps">
            <div className="max-w-[870px] mx-auto mb-[100px]">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} className="relative">
                    <div>
                      {/* Circle indicator */}
                      <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                        <div className={`size-7 bg-${accentColor} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-medium">{index + 1}</span>
                        </div>
                      </div>
                      {/* Vertical line with gradient */}
                      {!isLast && (
                        <div className={`${compact ? 'h-[150px] lg:h-[180px]' : 'h-[320px] lg:h-[380px]'} w-1 mx-auto bg-stroke-2 dark:bg-stroke-6`}>
                          <svg
                            ref={(el) => { stepLineRefs.current[index] = el; }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-1 h-[0px] step-line"
                            viewBox="0 0 2 222"
                            fill="none">
                            <path
                              d="M1 1L0.99999 221"
                              stroke={`url(#paint_timeline_step${index})`}
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id={`paint_timeline_step${index}`}
                                x1="0.5"
                                y1={1}
                                x2="0.49999"
                                y2={221}
                                gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="#64D9FD" />
                                <stop offset="0.25" stopColor="#7E57FD" />
                                <stop offset="0.5" stopColor="white" />
                                <stop offset={1} stopColor="#B04BFD" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </div>
                    {/* Content card */}
                    <RevealAnimation delay={0.2 + index * 0.1}>
                      <div className={`card-item absolute ${isLeft ? 'lg:left-0 left-1/2 -translate-x-1/2' : 'lg:right-0 right-1/2 translate-x-1/2'} lg:top-0 lg:translate-x-0 lg:translate-y-0 ${isLast ? 'top-16' : 'top-1/2 -translate-y-1/2'} max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-sm:bg-background-4`}>
                        <p className={`text-tagline-2 text-${accentColor}`}>{finalStepLabel} {index + 1}</p>
                        <div className="space-y-2">
                          <h3 className="text-heading-6 lg:text-heading-5">{step.title}</h3>
                          <p className="text-secondary/70 dark:text-accent/70">
                            {step.description}
                          </p>
                          {step.items && step.items.length > 0 && (
                            <div className="space-y-1.5 pt-2">
                              {step.items.map((item, i) => (
                                <p key={i} className="flex items-center gap-2 text-sm text-secondary/80 dark:text-accent/80">
                                  <span className={`w-1.5 h-1.5 bg-${accentColor} rounded-full shrink-0`} />
                                  {item}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </RevealAnimation>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ProcessTimeline.displayName = 'ProcessTimeline';
export default ProcessTimeline;
