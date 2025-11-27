'use client';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils/cn';
import { Fragment } from 'react';
import TopNavButtons from '../shared/TopNavButtons';
import NavbarOne from '../shared/header/NavbarOne';

const HeaderWrapper = () => {
  const { showTopNav } = useAppContext();

  return (
    <Fragment>
      <TopNavButtons fillClass="fill-secondary" />
      <NavbarOne
        className={cn('bg-white backdrop-blur-[25px]', showTopNav ? 'top-13.5' : 'top-5')}
        btnClassName="btn-secondary hover:btn-primary"
        navItemClass="!text-secondary60 hover:!text-secondary !transition-colors !duration-300 !ease-in-out"
      />
    </Fragment>
  );
};

export default HeaderWrapper;
