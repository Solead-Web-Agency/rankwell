'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const TimelineSVG = () => {
  const svgOneRef = useRef<SVGPathElement>(null);
  const svgTwoRef = useRef<SVGPathElement>(null);
  const svgThreeRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    const svgDraw = () => {
      const refs = [svgOneRef.current, svgTwoRef.current, svgThreeRef.current];
      const validRefs = refs.filter((ref) => ref !== null);

      gsap.set(validRefs, { visibility: 'visible' });

      if (validRefs.length > 0) {
        validRefs.forEach((ref) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
            },
          });

          tl.from(ref, {
            duration: 1,
            drawSVG: 1,
            delay: 0.5,
            ease: 'power2.out',
          });
        });
      }
    };

    if (typeof window !== 'undefined') {
      svgDraw();
    }
  });

  return (
    <div className="absolute top-2/3 left-1/2 -z-0 hidden -translate-x-[50%] lg:block">
      <svg
        width={880}
        height={275}
        viewBox="0 0 880 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-stroke-3 dark:stroke-stroke-8">
        <g clipPath="url(#clip0_6586_24283)">
          <path ref={svgOneRef} d="M439.672 0.5L440.359 274.499" />
          <path
            ref={svgTwoRef}
            d="M439.672 129.969V129.969C439.672 146.249 426.474 159.446 410.194 159.446H40.6719C18.5805 159.446 0.671875 177.355 0.671875 199.446V273.969"
          />
          <path
            ref={svgThreeRef}
            d="M440.328 129.969V129.969C440.328 146.249 453.526 159.446 469.806 159.446H839.328C861.42 159.446 879.328 177.355 879.328 199.446V273.969"
          />
        </g>
        <defs>
          <clipPath id="clip0_6586_24283">
            <rect width="878.656" height="273.999" fill="white" transform="translate(0.671875 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TimelineSVG;
