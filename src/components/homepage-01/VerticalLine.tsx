'use client';

import { useRef } from 'react';
import { useLineExpandAnimation } from '../../hooks/useLineExpandAnimation';

const VerticalLine = () => {
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);
  const lineRef3 = useRef<HTMLDivElement>(null);
  const lineRef4 = useRef<HTMLDivElement>(null);
  const lineRef5 = useRef<HTMLDivElement>(null);
  const lineRef6 = useRef<HTMLDivElement>(null);

  const lineRefs = [lineRef1, lineRef2, lineRef3, lineRef4, lineRef5, lineRef6];

  useLineExpandAnimation({ refs: lineRefs });
  return (
    // Vertical lines background
    <div className="main-container absolute top-5 left-[50%] -z-0 flex h-full -translate-x-1/2 justify-between gap-[239px]">
      {lineRefs.map((lineRef, i) => (
        <div
          key={i}
          ref={lineRef}
          className="from-stroke-1 to-stroke-1/30 dark:from-stroke-5 dark:to-stroke-5/30 h-0 w-px bg-gradient-to-b"
          aria-hidden="true"></div>
      ))}
    </div>
  );
};

export default VerticalLine;
