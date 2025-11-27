'use client';

import { useRef } from 'react';
import { useLineExpandAnimation } from '../../hooks/useLineExpandAnimation';

const LineExpand = () => {
  const lineExpandRef1 = useRef<HTMLDivElement>(null);
  const lineExpandRef2 = useRef<HTMLDivElement>(null);
  const lineExpandRef3 = useRef<HTMLDivElement>(null);
  const lineExpandRef4 = useRef<HTMLDivElement>(null);
  const lineExpandRef5 = useRef<HTMLDivElement>(null);
  const lineExpandRef6 = useRef<HTMLDivElement>(null);

  const refs = [lineExpandRef1, lineExpandRef2, lineExpandRef3, lineExpandRef4, lineExpandRef5, lineExpandRef6];

  useLineExpandAnimation({ refs });

  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 h-full max-w-[1290px] flex justify-between lg:gap-[239px] sm:gap-[200px] gap-[150px]">
      <div
        ref={lineExpandRef1}
        className="lp:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
      <div
        ref={lineExpandRef2}
        className="lp:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
      <div
        ref={lineExpandRef3}
        className="lg:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
      <div
        ref={lineExpandRef4}
        className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
      <div
        ref={lineExpandRef5}
        className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
      <div
        ref={lineExpandRef6}
        className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
      />
    </div>
  );
};

export default LineExpand;
