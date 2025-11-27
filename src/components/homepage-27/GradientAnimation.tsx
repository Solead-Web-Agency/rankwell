'use client';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useEffect, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin);
}

const PATH_IDS = [
  'curve-path-1',
  'curve-path-2',
  'curve-path-3',
  'curve-path-4',
  'curve-path-5',
  'curve-path-6',
  'curve-path-7',
  'curve-path-8',
] as const;

// start → end colors per path
const GRADIENTS: Array<[string, string]> = [
  ['#83E7EE', '#F9EB57'],
  ['#F9EB57', '#83E7EE'],
  ['#83E7EE', '#F9EB57'],
  ['#83E7EE', '#F9EB57'],
  ['#F9EB57', '#83E7EE'],
  ['#83E7EE', '#F9EB57'],
  ['#F9EB57', '#83E7EE'],
  ['#83E7EE', '#F9EB57'],
];

const interpolateColor = (c1: string, c2: string, f: number) => {
  const r1 = parseInt(c1.slice(1, 3), 16),
    g1 = parseInt(c1.slice(3, 5), 16),
    b1 = parseInt(c1.slice(5, 7), 16);
  const r2 = parseInt(c2.slice(1, 3), 16),
    g2 = parseInt(c2.slice(3, 5), 16),
    b2 = parseInt(c2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * f);
  const g = Math.round(g1 + (g2 - g1) * f);
  const b = Math.round(b1 + (b2 - b1) * f);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const RECT_COUNT = 60;

const GradientAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Use useEffect for more reliable initialization
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      try {
        PATH_IDS.forEach((pathId, idx) => {
          const path = svg.querySelector<SVGPathElement>(`#${pathId}`);
          if (!path) {
            console.warn(`Path not found: ${pathId}`);
            return;
          }

          const group = idx + 1;
          const [startCol, endCol] = GRADIENTS[idx];
          const baseDelay = gsap.utils.random(0, 2);
          const duration = gsap.utils.random(3, 6);

          // Animate each rect along the path using MotionPath
          for (let i = 1; i <= RECT_COUNT; i++) {
            const rect = svg.querySelector<SVGRectElement>(`#rect-${group}-${i}`);
            if (!rect) {
              continue;
            }

            // Calculate gradient color based on position
            const factor = (i - 1) / (RECT_COUNT - 1);
            rect.setAttribute('fill', interpolateColor(startCol, endCol, factor));

            // Animate rect along the path
            gsap.to(rect, {
              motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
              },
              duration: duration,
              ease: 'power1.inOut',
              repeat: -1,
              delay: baseDelay + i * 0.002, // Slight stagger to create continuous line
            });
          }
        });
      } catch (error) {
        console.error('Error in gradient animation:', error);
        // Silent error handling
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const renderRectGroup = (groupId: number) =>
    Array.from({ length: RECT_COUNT }, (_, i) => (
      <rect key={`rect-${groupId}-${i + 1}`} id={`rect-${groupId}-${i + 1}`} width={2} height={2} />
    ));

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      className="xl:max-w-[1392px] xl:max-h-[1500px] max-[400px]:max-w-[320px] max-[400px]:max-h-[500px] mx-auto h-full w-full relative top-0"
      viewBox="0 0 1392 1378"
      fill="none">
      <path
        id="curve-path-1"
        d="M409.5 0V688.857C409.5 739.32 387.08 787.176 348.307 819.475L210.193 934.525C171.42 966.824 149 1014.68 149 1065.14V1436"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-2"
        d="M984 0V688.857C984 739.32 1006.42 787.176 1045.19 819.475L1183.31 934.525C1222.08 966.824 1244.5 1014.68 1244.5 1065.14V1436"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-3"
        d="M301.5 0V647.386C301.5 696.681 280.102 743.549 242.854 775.839L59.6455 934.661C22.3976 966.951 1 1013.82 1 1063.11V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-4"
        d="M1090.5 0V647.386C1090.5 696.681 1111.9 743.549 1149.15 775.839L1332.35 934.661C1369.6 966.951 1391 1013.82 1391 1063.11V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-5"
        d="M517.5 0V704.584C517.5 749.67 499.589 792.911 467.708 824.792L356.792 935.708C324.911 967.589 307 1010.83 307 1055.92V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-6"
        d="M876 0V704.584C876 749.67 893.911 792.911 925.792 824.792L1036.71 935.708C1068.59 967.589 1086.5 1010.83 1086.5 1055.92V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-7"
        d="M625.5 0V679.422C625.5 709.28 617.636 738.611 602.7 764.465L497.8 946.035C482.864 971.889 475 1001.22 475 1031.08V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-8"
        d="M768 0V679.422C768 709.28 775.864 738.611 790.8 764.465L895.7 946.035C910.636 971.889 918.5 1001.22 918.5 1031.08V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />

      {/* 8 groups × 60 rects */}
      {Array.from({ length: 8 }, (_, g) => renderRectGroup(g + 1))}
    </svg>
  );
};

export default GradientAnimation;
