/**
 * STEPSDIMENSIONS - Timeline verticale avec cartes alternées gauche/droite
 *
 * Utilisé pour afficher des étapes, dimensions ou piliers avec animation GSAP.
 * Remplace : AuditDimensions, MethodeNetlinking, ContentPiliers
 */

'use client';

import { useGSAP } from '@gsap/react';
import { useRef, useId } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

import { gsap } from 'gsap';

// Dégradés personnalisés par couleur d'accent
const gradientColors: Record<RwColor, { start: string; mid1: string; mid2: string; end: string }> = {
  'rw-blue': {
    start: '#0031cc',    // rw-blue
    mid1: '#4169e1',     // royal blue
    mid2: '#87ceeb',     // sky blue
    end: '#0031cc',      // rw-blue
  },
  'rw-cyan': {
    start: '#19c8dc',    // rw-cyan
    mid1: '#64D9FD',     // cyan clair
    mid2: '#7E57FD',     // violet
    end: '#19c8dc',      // rw-cyan
  },
  'rw-purple': {
    start: '#632cce',    // rw-purple
    mid1: '#9B59B6',     // violet moyen
    mid2: '#B04BFD',     // magenta
    end: '#632cce',      // rw-purple
  },
  'rw-coral': {
    start: '#ffa69e',    // rw-coral
    mid1: '#ff7b6b',     // coral foncé
    mid2: '#ffb347',     // orange
    end: '#ffa69e',      // rw-coral
  },
  'rw-pink': {
    start: '#ffc7d4',    // rw-pink
    mid1: '#ff9eb5',     // pink foncé
    mid2: '#e6a8d7',     // lavender
    end: '#ffc7d4',      // rw-pink
  },
};
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StepDimensionItem {
  dimension?: number;
  step?: number; // Alias pour dimension
  label: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface StepsDimensionsProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  dimensions?: StepDimensionItem[];
  steps?: StepDimensionItem[]; // Alias pour dimensions
}

const StepsDimensions = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  dimensions,
  steps,
}: StepsDimensionsProps) => {
  const colors = colorVariants[accentColor];
  const uniqueId = useId();

  // Supporte à la fois dimensions et steps comme prop
  const items = dimensions || steps || [];

  // Créer dynamiquement les refs selon le nombre de dimensions
  const stepLineRefs = useRef<(SVGSVGElement | null)[]>([]);
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const stepLines = stepLineRefs.current.filter(Boolean) as SVGSVGElement[];

      if (!stepLines.length) return;

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: 380,
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
    { scope: scopeRef, revertOnUpdate: true },
  );

  const renderDimensionCard = (dim: StepDimensionItem, index: number, position: 'left' | 'right') => {
    const positionClasses = position === 'left'
      ? 'lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2'
      : 'lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2';

    return (
      <RevealAnimation delay={0.2 + index * 0.1}>
        <div className={`card-item absolute ${positionClasses} max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-sm:bg-background-4`}>
          <p className={`text-tagline-2 ${colors.text}`}>{dim.label}</p>
          <div className="space-y-2">
            <h3 className="text-heading-6 lg:text-heading-5">{dim.title}</h3>
            <p className="text-secondary/70 dark:text-accent/70">{dim.subtitle}</p>
            <div className="space-y-1.5 pt-2">
              {dim.items.map((item, itemIndex) => (
                <p key={itemIndex} className="flex items-center gap-2 text-sm text-secondary/80 dark:text-accent/80">
                  <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full shrink-0`} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </RevealAnimation>
    );
  };

  const renderStepLine = (index: number) => {
    const gradientId = `paint0_linear_${uniqueId.replace(/:/g, '')}_step${index + 1}`;
    const gradient = gradientColors[accentColor];

    return (
      <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
        <svg
          ref={(el) => { stepLineRefs.current[index] = el; }}
          xmlns="http://www.w3.org/2000/svg"
          className="w-1 h-[0px] step-line"
          viewBox="0 0 2 222"
          fill="none">
          <path
            d="M1 1L0.99999 221"
            stroke={`url(#${gradientId})`}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={gradientId}
              x1="0.5"
              y1={1}
              x2="0.49999"
              y2={221}
              gradientUnits="userSpaceOnUse">
              <stop offset={0} stopColor={gradient.start} />
              <stop offset="0.33" stopColor={gradient.mid1} />
              <stop offset="0.66" stopColor={gradient.mid2} />
              <stop offset={1} stopColor={gradient.end} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <section id={sectionId} className="pb-[100px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[610px] mx-auto">{subtitle}</p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="process-steps" ref={scopeRef}>
            <div className="max-w-[870px] mx-auto mb-[100px]">
              {items.map((dim, index) => {
                const isLast = index === items.length - 1;
                // Alternance stricte : gauche (0), droite (1), gauche (2), droite (3)...
                const position = index % 2 === 0 ? 'left' : 'right';
                // Supporte dimension ou step comme numéro
                const stepNumber = dim.dimension ?? dim.step ?? index + 1;

                return (
                  <div key={stepNumber} className="relative">
                    <div>
                      <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                        <div className={`size-7 ${colors.bg} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-medium">{stepNumber}</span>
                        </div>
                      </div>
                      {!isLast && renderStepLine(index)}
                    </div>
                    {renderDimensionCard(dim, index, position)}
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

StepsDimensions.displayName = 'StepsDimensions';
export default StepsDimensions;
