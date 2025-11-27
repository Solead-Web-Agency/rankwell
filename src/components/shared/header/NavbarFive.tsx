'use client';

// Header v1
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import { FC } from 'react';
import MobileMenu from '../MobileMenu';
import AboutMenu from '../mega-menu/AboutMenu';
import BlogMenu from '../mega-menu/BlogMenu';
import HomeMegaMenu from '../mega-menu/HomeMegaMenu';
import PageMegaMenu from '../mega-menu/PageMegaMenu';
import ServicesMenu from '../mega-menu/ServicesMenu';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarFiveProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarFive: FC<NavbarFiveProps> = ({ className, megaMenuColor }) => {
  const { isScrolled } = useNavbarScroll(100);

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'lp:!max-w-[1290px] fixed top-6 left-1/2 z-50 mx-auto flex w-full max-w-[320px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-2.5 transition-all duration-500 ease-in-out min-[425px]:max-w-[360px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0',
            isScrolled && 'bg-background-1 dark:bg-background-5 top-4 backdrop-blur-[15px]',
            className,
          )}>
          {/* logo */}
          <Logo />
          {/* navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {navigationItems.map((item) => {
                const renderMegaMenu = () => {
                  switch (item?.megaMenuComponent) {
                    case 'HomeMegaMenu':
                      return <HomeMegaMenu className={megaMenuColor} />;
                    case 'PageMegaMenu':
                      return <PageMegaMenu className={megaMenuColor} />;
                    case 'AboutMenu':
                      return <AboutMenu className={megaMenuColor} />;
                    case 'ServicesMenu':
                      return <ServicesMenu className={megaMenuColor} />;
                    case 'BlogMenu':
                      return <BlogMenu className={megaMenuColor} />;
                    default:
                      return null;
                  }
                };

                // mega menu render
                return (
                  <li key={item?.id} className={cn('py-2.5', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                    <NavItemLink item={item} />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>
          <NavCTAButton
            href="/signup-01"
            btnClassName={'btn-primary hover:btn-secondary dark:hover:btn-accent'}
            label="Get started"
          />
          {/* mobile menu btn */}
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarFive.displayName = 'NavbarFive';
export default NavbarFive;
