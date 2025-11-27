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
import LogoV2 from './LogoV2';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarTwoProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarTwo: FC<NavbarTwoProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'lp:!max-w-[1290px] bg-accent/10 dark:bg-background-7/40 fixed top-14 max-md:!top-8 left-1/2 z-50 mx-auto flex w-full max-w-[360px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] min-[425px]:max-w-[380px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0',
            className,
            isScrolled && 'bg-background-7 top-4 transition-all duration-500 ease-in-out',
          )}>
          {/* logo */}
          <LogoV2 />
          {/* navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center gap-6">
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
                  <li
                    key={item?.id}
                    className={cn('py-5', item?.hasDropdown ? 'group/nav relative cursor-pointer' : '')}>
                    <NavItemLink variant="white" item={item} />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>
          <NavCTAButton
            href="/signup-01"
            btnClassName={cn(isScrolled && 'btn-white', btnClassName)}
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

NavbarTwo.displayName = 'NavbarTwo';
export default NavbarTwo;
