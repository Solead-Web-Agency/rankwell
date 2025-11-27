'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { generateTOC } from '@/utils/generateTOC';
import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface TableOfContentProps {
  markdownContent: string;
}

const TableOfContent = ({ markdownContent }: TableOfContentProps) => {
  const lenis = useLenis();

  // Generate TOC from markdown content
  const tocItems = useMemo(() => generateTOC(markdownContent), [markdownContent]);

  // Get section IDs for tracking active section
  const sectionIds = useMemo(() => tocItems.map((item) => item.id), [tocItems]);

  // Track currently active section
  const activeSection = useActiveSection(sectionIds);

  // Handle smooth scroll to section
  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(`#${targetId}`, {
          offset: -100,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    },
    [lenis],
  );
  return (
    <RevealAnimation delay={0.3}>
      <div className="table-of-contents lg:max-w-[449px] w-full lg:block lg:sticky lg:top-20 hidden">
        <div className="p-11 rounded-[20px] bg-background-1 dark:bg-background-6 space-y-4 w-full">
          <h3 className="text-heading-5">Table of Contents</h3>
          <ul className="table-of-list w-full">
            {tocItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isLastItem = index === tocItems.length - 1;

              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollToSection(e, item.id)}
                    className={`group py-4 flex items-center justify-between transition-all duration-300 ease-out hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg px-2 -mx-2 ${
                      !isLastItem ? 'border-b border-b-stroke-4 dark:border-b-stroke-7' : ''
                    }`}>
                    <span
                      className={`text-lg leading-[27px] transition-all duration-300 ease-out ${
                        isActive
                          ? 'font-medium text-secondary dark:text-accent transform translate-x-1'
                          : 'font-normal text-secondary/60 dark:text-accent/60 group-hover:text-secondary/80 dark:group-hover:text-accent/80'
                      }`}
                      style={{ paddingLeft: `${(item.level - 2) * 16}px` }} // Indent based on heading level
                    >
                      {item.title}
                    </span>
                    <span
                      className={`transition-all duration-300 ease-out transform ${
                        isActive
                          ? 'opacity-100 scale-100 translate-x-0'
                          : 'opacity-0 scale-95 translate-x-2 group-hover:opacity-60 group-hover:scale-100 group-hover:translate-x-0'
                      }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                        <path
                          d="M10 8.5L14 12.5L10 16.5"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </RevealAnimation>
  );
};
TableOfContent.displayName = 'TableOfContent';
export default TableOfContent;
