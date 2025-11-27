import { homeMegaMenuColumns } from '@/data/header';
import { cn } from '@/utils/cn';
import { Fragment } from 'react';
import MegaMenuItem from './MegaMenuItem';

interface HomeMegaMenuProps {
  className?: string;
}

const HomeMegaMenu = ({ className }: HomeMegaMenuProps) => {
  return (
    <div>
      <div className="fixed top-full left-1/2 z-40 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden bg-transparent py-6 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'dark:bg-background-6 shadow-1 dark:border-background-5 border-stroke-4 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full max-w-[1290px] -translate-x-1/2 translate-y-10 overflow-hidden rounded-[20px] border bg-white opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className,
        )}>
        <div className="relative flex w-full">
          <div className="flex flex-1 justify-between gap-10 px-[60px] py-[70px]">
            {homeMegaMenuColumns.map((column, index) => (
              <Fragment key={column.id}>
                <ul
                  key={column.id}
                  className={cn(
                    'space-y-5',
                    index === 0 ? 'pr-4' : index === homeMegaMenuColumns.length - 1 ? 'pl-4' : 'px-4',
                  )}>
                  {column.items.map((item) => (
                    <MegaMenuItem key={item.id} item={item} />
                  ))}
                </ul>
                {index < homeMegaMenuColumns.length - 1 && (
                  <div key={`separator-${index}`} className="bg-secondary/10 dark:bg-accent/10 h-full w-px"></div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMegaMenu;
