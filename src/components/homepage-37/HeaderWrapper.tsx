'use client';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils/cn';
import { Fragment } from 'react';
import TopNavDescription from '../shared/TopNavDescription';
import NavbarTwo from '../shared/header/NavbarTwo';

const HeaderWrapper = () => {
  const { showTopNavDescription } = useAppContext();

  return (
    <Fragment>
      <TopNavDescription />
      <NavbarTwo
        className={cn(
          'bg-accent/10 dark:bg-background-7/40 backdrop-blur-[25px]',
          showTopNavDescription ? 'top-14 max-md:!top-14' : 'top-5',
        )}
        btnClassName="btn-white hover:btn-primary"
      />
    </Fragment>
  );
};

export default HeaderWrapper;
