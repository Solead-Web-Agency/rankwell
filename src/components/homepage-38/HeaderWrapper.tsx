'use client';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils/cn';
import { Fragment } from 'react';
import TopNavMarquee from '../shared/TopNavMarquee';
import NavbarOne from '../shared/header/NavbarOne';

const HeaderWrapper = () => {
  const { showTopNavMarquee } = useAppContext();

  return (
    <Fragment>
      <TopNavMarquee fillClass="fill-secondary" />
      <NavbarOne
        className={cn('bg-transparent backdrop-blur-[25px]', showTopNavMarquee ? 'lg:top-15 md:top-12 top-8' : 'top-5')}
        btnClassName="btn-secondary hover:btn-primary btn-md"
        navItemClass="hover:bg-accent/70 transition-colors !duration-500 !ease-in-out hover:!text-secondary"
      />
    </Fragment>
  );
};

export default HeaderWrapper;
