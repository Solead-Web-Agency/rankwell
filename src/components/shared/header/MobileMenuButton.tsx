'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';

const MobileMenuButton = () => {
  const { openMenu } = useMobileMenuContext();

  return (
    <div className="block xl:hidden">
      <button
        onClick={openMenu}
        className="nav-hamburger bg-background-4 dark:bg-background-6 hover:bg-background-5 dark:hover:bg-background-7 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-200 hover:scale-105 group"
        aria-label="Open mobile menu">
        <span className="sr-only">Menu</span>
        <span className="bg-stroke-9 group-hover:bg-stroke-1 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"></span>
        <span className="bg-stroke-9 group-hover:bg-stroke-1 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"></span>
        <span className="bg-stroke-9 group-hover:bg-stroke-1 dark:bg-stroke-1 block h-0.5 w-6 transition-all duration-200"></span>
      </button>
    </div>
  );
};

export default MobileMenuButton;
