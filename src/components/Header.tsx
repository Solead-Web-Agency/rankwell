'use client';

import { MobileMenuProvider, useMobileMenuContext } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getNavigation, type NavItem } from '@/data/navigation';
import { useLocale, getLocalizedHref, type Locale } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ExpertisesMegaMenu from '@/components/ExpertisesMegaMenu';

// UI strings for localization
const uiStrings = {
  fr: {
    contact: 'Nous contacter',
    viewAll: 'Voir tout',
  },
  en: {
    contact: 'Contact us',
    viewAll: 'View all',
  },
};

/**
 * Détermine la couleur du logo selon la section courante
 * - /agence-sea/* ou /en/sea-agency/* → cyan
 * - /agence-data/* ou /en/data-agency/* → purple
 * - Partout ailleurs (dont /agence-geo-seo/*, /en/geo-seo-agency/*) → blue (défaut)
 */
function getLogoColorClass(pathname: string): string {
  if (pathname.startsWith('/agence-sea') || pathname.startsWith('/en/sea-agency')) {
    return 'logo-cyan';
  }
  if (pathname.startsWith('/agence-data') || pathname.startsWith('/en/data-agency')) {
    return 'logo-purple';
  }
  // Par défaut (homepage, geo-seo, etc.) → blue
  return 'logo-blue';
}

const HeaderContent: FC = () => {
  const { isScrolled } = useNavbarScroll(100);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { toggleMenu, isOpen } = useMobileMenuContext();
  const pathname = usePathname();
  const locale = useLocale();
  const logoColorClass = getLogoColorClass(pathname);
  const navigation = getNavigation(locale);
  const strings = uiStrings[locale];
  const homeHref = getLocalizedHref('/', locale);

  return (
    <header>
      <div
        className={cn(
          'fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[320px] -translate-x-1/2 items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-3',
          'border border-stroke-2/50 bg-transparent backdrop-blur-[25px] dark:border-stroke-6/50',
          isScrolled && 'top-2 lg:top-2'
        )}
      >
        {/* Logo Rankwell - couleur selon la section */}
        <Link href={homeHref} className="flex items-center ml-2">
          <Image
            src="/images/shared/logo-header.webp"
            alt="Rankwell"
            width={180}
            height={40}
            className={cn('h-10 w-auto dark:brightness-0 dark:invert', logoColorClass)}
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center">
            {navigation.map((item) => (
              <li
                key={item.id}
                className="group/nav relative cursor-pointer py-2.5"
                onMouseEnter={() => {
                  if (item.children) setOpenMenu(item.id);
                }}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubmenu(null);
                }}
              >
                <Link
                  href={getLocalizedHref(item.href, locale)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-secondary/70 dark:text-accent/70 rounded-full transition-all duration-500 ease-in-out hover:bg-accent/20 hover:text-secondary dark:hover:text-accent dark:hover:bg-secondary/20 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openMenu === item.id && 'rotate-180'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu pour Expertises */}
                {item.id === 'expertises' && (
                  <ExpertisesMegaMenu isOpen={openMenu === item.id} locale={locale} />
                )}

                {/* Dropdown Menu standard (niveau 2) - pour les autres items */}
                {item.children && item.id !== 'expertises' && (
                  <div
                    className={cn(
                      'absolute left-0 top-full min-w-[220px] rounded-xl bg-white p-4 shadow-lg transition-all dark:bg-background-8',
                      openMenu === item.id ? 'visible opacity-100' : 'invisible opacity-0'
                    )}
                  >
                    <ul className="space-y-1">
                      {item.children.map((child) => (
                        <li
                          key={child.id}
                          className="relative"
                          onMouseEnter={() => child.children && setOpenSubmenu(child.id)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <Link
                            href={getLocalizedHref(child.href, locale)}
                            className={cn(
                              'flex items-center justify-between rounded-lg px-3 py-2 text-sm text-secondary transition-colors hover:bg-gray-100 hover:text-primary dark:text-accent dark:hover:bg-background-7',
                              openSubmenu === child.id && 'bg-gray-100 text-primary dark:bg-background-7'
                            )}
                          >
                            {child.label}
                            {child.children && (
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>

                          {/* Sous-menu (niveau 3) */}
                          {child.children && (
                            <div
                              className={cn(
                                'absolute left-full top-0 ml-1 min-w-[200px] rounded-xl bg-white p-4 shadow-lg transition-all dark:bg-background-8',
                                openSubmenu === child.id ? 'visible opacity-100' : 'invisible opacity-0'
                              )}
                            >
                              <ul className="space-y-1">
                                {child.children.map((subChild) => (
                                  <li key={subChild.id}>
                                    <Link
                                      href={getLocalizedHref(subChild.href, locale)}
                                      className="block rounded-lg px-3 py-2 text-sm text-secondary transition-colors hover:bg-gray-100 hover:text-primary dark:text-accent dark:hover:bg-background-7"
                                    >
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button Desktop + Language Switcher */}
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={getLocalizedHref('/contact', locale)}
            className="rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary hover:shadow-lg"
          >
            {strings.contact}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-background-8 xl:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

const MobileMenu: FC = () => {
  const { isOpen, closeMenu, activeSubmenu, toggleSubmenu, activeSubSubmenu, toggleSubSubmenu } = useMobileMenuContext();
  const locale = useLocale();
  const navigation = getNavigation(locale);
  const strings = uiStrings[locale];

  // Helper to get short label for mobile menu (removes "Agence " or "Agency ")
  const getShortLabel = (label: string) => {
    return label.replace(/^(Agence |Agency )/, '');
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-40 bg-white transition-transform duration-300 dark:bg-background-8 xl:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="flex h-full flex-col overflow-y-auto pt-24 pb-8">
        <nav className="px-6">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-secondary dark:text-white"
                    >
                      {item.label}
                      <svg
                        className={cn(
                          'h-5 w-5 transition-transform',
                          activeSubmenu === item.id && 'rotate-180'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <ul
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        activeSubmenu === item.id ? 'max-h-[800px]' : 'max-h-0'
                      )}
                    >
                      {/* Lien "View all" seulement si href n'est pas # */}
                      {item.href !== '#' && (
                        <li>
                          <Link
                            href={getLocalizedHref(item.href, locale)}
                            onClick={closeMenu}
                            className="block py-2 pl-4 text-primary"
                          >
                            {strings.viewAll}
                          </Link>
                        </li>
                      )}
                      {item.children.map((child) => (
                        <li key={child.id}>
                          {child.children ? (
                            // Niveau 2 avec sous-items (niveau 3)
                            // Sur mobile : affiche le label court (ex: "GEO & SEO") comme bouton
                            // et le label complet (ex: "Agence GEO & SEO") comme lien vers la page pilier
                            <>
                              <button
                                onClick={() => toggleSubSubmenu(child.id)}
                                className="flex w-full items-center justify-between py-2 pl-4 text-secondary/70 dark:text-accent/70"
                              >
                                {/* Label court pour le bouton mobile */}
                                {getShortLabel(child.label)}
                                <svg
                                  className={cn(
                                    'h-4 w-4 transition-transform',
                                    activeSubSubmenu === child.id && 'rotate-180'
                                  )}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              <ul
                                className={cn(
                                  'overflow-hidden transition-all duration-300',
                                  activeSubSubmenu === child.id ? 'max-h-96' : 'max-h-0'
                                )}
                              >
                                {/* Lien vers la page pilier avec le nom complet */}
                                <li>
                                  <Link
                                    href={getLocalizedHref(child.href, locale)}
                                    onClick={closeMenu}
                                    className="block py-2 pl-8 text-primary text-sm font-medium"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                                {child.children.map((subChild) => (
                                  <li key={subChild.id}>
                                    <Link
                                      href={getLocalizedHref(subChild.href, locale)}
                                      onClick={closeMenu}
                                      className="block py-2 pl-8 text-secondary/60 text-sm dark:text-accent/60"
                                    >
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            // Niveau 2 simple (sans sous-items)
                            <Link
                              href={getLocalizedHref(child.href, locale)}
                              onClick={closeMenu}
                              className="block py-2 pl-4 text-secondary/70 dark:text-accent/70"
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={getLocalizedHref(item.href, locale)}
                    onClick={closeMenu}
                    className="block py-3 text-lg font-medium text-secondary dark:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language switcher + CTA for mobile */}
        <div className="mt-auto px-6 pt-8 space-y-4">
          <div className="flex justify-center">
            <LanguageSwitcher locale={locale} />
          </div>
          <Link
            href={getLocalizedHref('/contact', locale)}
            onClick={closeMenu}
            className="block w-full rounded-full bg-primary py-3 text-center font-medium text-white"
          >
            {strings.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header: FC = () => {
  return (
    <MobileMenuProvider>
      <HeaderContent />
    </MobileMenuProvider>
  );
};

export default Header;
