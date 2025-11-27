'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
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

const NavbarThree = ({ btnClassName }: { btnClassName?: string }) => {
  const { isScrolled } = useNavbarScroll(150);
  return (
    <MobileMenuProvider>
      <RevealAnimation delay={0.1} direction="up" offset={100}>
        <header className="dark:bg-background-5 border-stroke-2 dark:border-stroke-6 fixed top-0 right-0 left-0 z-10 flex items-center border-b bg-white px-5 py-5 xl:py-0">
          <div
            className={cn(
              'mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 transition-all duration-500 ease-in-out',
              isScrolled && 'px-0',
            )}>
            <Logo />
            <div className="flex items-center gap-[76px]">
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center gap-6">
                  {navigationItems.map((item) => {
                    const renderMegaMenu = () => {
                      switch (item?.megaMenuComponent) {
                        case 'HomeMegaMenu':
                          return <HomeMegaMenu />;
                        case 'PageMegaMenu':
                          return <PageMegaMenu />;
                        case 'AboutMenu':
                          return <AboutMenu />;
                        case 'ServicesMenu':
                          return <ServicesMenu />;
                        case 'BlogMenu':
                          return <BlogMenu />;
                        default:
                          return null;
                      }
                    };

                    // mega menu render
                    return (
                      <li
                        key={item?.id}
                        className={cn('py-6', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                        <NavItemLink variant="border" item={item} />
                        {item.hasDropdown && renderMegaMenu()}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="flex items-center gap-2">
                <NavCTAButton
                  href="/signup-01"
                  btnClassName={cn('btn-primary hover:btn-white-dark dark:hover:btn-white', btnClassName)}
                  label="Get started"
                />
                {/* mobile menu btn */}
                <MobileMenuButton />
              </div>
            </div>
          </div>
          <MobileMenu />
        </header>
      </RevealAnimation>
    </MobileMenuProvider>
  );
};

export default NavbarThree;
