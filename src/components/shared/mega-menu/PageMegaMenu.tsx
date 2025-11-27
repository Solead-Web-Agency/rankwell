import { pageMegaMenuColumns } from '@/data/header';
import { cn } from '@/utils/cn';
import React from 'react';
import PageMegaMenuItem from './PageMegaMenuItem';

interface PageMegaMenuProps {
  className?: string;
}

const PageMegaMenu = ({ className }: PageMegaMenuProps) => {
  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'shadow-1 dark:border-background-5 border-stroke-4 dark:bg-background-6 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full max-w-[1290px] -translate-x-1/2 translate-y-10 overflow-hidden rounded-[20px] border bg-white opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className,
        )}>
        <div className="relative flex w-full">
          <div className="flex flex-1 justify-between gap-10 px-[60px] py-[70px]">
            {pageMegaMenuColumns.map((column, index) => (
              <React.Fragment key={column.id}>
                <ul
                  key={column.id}
                  className={cn(
                    'w-full max-w-[200px] space-y-5',
                    index === 0 ? 'pr-4' : index === pageMegaMenuColumns.length - 1 ? 'px-4' : 'px-4',
                  )}>
                  {column.items.map((item) => (
                    <PageMegaMenuItem key={item.id} item={item} />
                  ))}
                </ul>
                {index < pageMegaMenuColumns.length - 1 && (
                  <div key={`separator-${index}`} className="bg-secondary/10 dark:bg-accent/10 h-full w-px"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMegaMenu;
