/**
 * EXPERTISES MEGA MENU
 * Menu déroulant à 3 colonnes pour les expertises
 * Style: HomeMegaMenu du thème homepage-38
 */

'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Fragment } from 'react';
import { GEO_SEO_ROUTES, SEA_ROUTES, DATA_ROUTES } from '@/lib/routes';
import { type Locale, getLocalizedHref } from '@/lib/i18n';

interface MegaMenuItem {
  id: string;
  label: string;
  labelEn?: string;
  href: string;
}

interface MegaMenuColumn {
  id: string;
  title: string;
  titleEn?: string;
  href: string;
  items: MegaMenuItem[];
}

// Structure des colonnes du mega-menu
const expertisesColumns: MegaMenuColumn[] = [
  {
    id: 'geo-seo',
    title: 'GEO & SEO',
    titleEn: 'GEO & SEO',
    href: GEO_SEO_ROUTES.INDEX,
    items: [
      { id: 'audit', label: 'Audit SEO', labelEn: 'SEO Audit', href: GEO_SEO_ROUTES.AUDIT },
      { id: 'technique-semantique', label: 'Technique & sémantique', labelEn: 'Technical & semantic', href: GEO_SEO_ROUTES.TECHNIQUE_SEMANTIQUE },
      { id: 'netlinking', label: 'Netlinking', labelEn: 'Link building', href: GEO_SEO_ROUTES.NETLINKING },
      { id: 'creation-contenu', label: 'Création de contenu', labelEn: 'Content creation', href: GEO_SEO_ROUTES.CREATION_CONTENU },
      { id: 'local', label: 'SEO local', labelEn: 'Local SEO', href: GEO_SEO_ROUTES.LOCAL },
      { id: 'international', label: 'SEO international', labelEn: 'International SEO', href: GEO_SEO_ROUTES.INTERNATIONAL },
    ],
  },
  {
    id: 'sea',
    title: 'SEA',
    titleEn: 'SEA',
    href: SEA_ROUTES.INDEX,
    items: [
      { id: 'setup', label: 'Setup campagnes', labelEn: 'Campaign setup', href: SEA_ROUTES.SETUP },
      { id: 'accompagnement', label: 'Accompagnement', labelEn: 'Management', href: SEA_ROUTES.ACCOMPAGNEMENT },
      { id: 'analyse-semantique', label: 'Analyse sémantique', labelEn: 'Semantic analysis', href: SEA_ROUTES.ANALYSE_SEMANTIQUE },
      { id: 'sea-local', label: 'SEA local', labelEn: 'Local SEA', href: SEA_ROUTES.LOCAL },
      { id: 'sea-international', label: 'SEA international', labelEn: 'International SEA', href: SEA_ROUTES.INTERNATIONAL },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    titleEn: 'Data',
    href: DATA_ROUTES.INDEX,
    items: [
      { id: 'tracking', label: 'Tracking', labelEn: 'Tracking', href: DATA_ROUTES.TRACKING },
      { id: 'analytics', label: 'Analytics', labelEn: 'Analytics', href: DATA_ROUTES.ANALYTICS },
      { id: 'cro', label: 'CRO', labelEn: 'CRO', href: DATA_ROUTES.CRO },
    ],
  },
];

interface ExpertisesMegaMenuProps {
  isOpen: boolean;
  locale: Locale;
}

const ExpertisesMegaMenu = ({ isOpen, locale }: ExpertisesMegaMenuProps) => {
  return (
    <div>
      {/* Invisible bridge to maintain hover state */}
      <div className={cn(
        'fixed top-full left-1/2 z-40 w-full max-w-[1140px] -translate-x-1/2 overflow-hidden bg-transparent py-6',
        isOpen ? 'flex' : 'hidden'
      )} />

      {/* Main mega-menu container */}
      <div
        className={cn(
          'dark:bg-background-8 shadow-lg dark:border-stroke-6 border-stroke-2 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full max-w-[1000px] -translate-x-1/2 translate-y-10 overflow-hidden rounded-[20px] border bg-white opacity-0 transition-all duration-300',
          isOpen && 'pointer-events-auto translate-y-0 opacity-100'
        )}
      >
        <div className="relative flex w-full">
          <div className="flex flex-1 justify-between gap-6 px-10 py-12">
            {expertisesColumns.map((column, index) => (
              <Fragment key={column.id}>
                <div
                  className={cn(
                    'flex-1',
                    index === 0 ? 'pr-4' : index === expertisesColumns.length - 1 ? 'pl-4' : 'px-4'
                  )}
                >
                  {/* Column title - link to pillar page */}
                  <Link
                    href={getLocalizedHref(column.href, locale)}
                    className="group/title flex items-center gap-2 mb-5 text-base font-semibold text-secondary dark:text-accent transition-colors hover:text-primary"
                  >
                    <span>{locale === 'en' && column.titleEn ? column.titleEn : column.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover/title:opacity-100 group-hover/title:translate-x-0"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>

                  {/* Column items */}
                  <ul className="space-y-3">
                    {column.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={getLocalizedHref(item.href, locale)}
                          className="group/item flex items-center gap-1 text-sm text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent transition-all duration-200"
                        >
                          <span>{locale === 'en' && item.labelEn ? item.labelEn : item.label}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="opacity-0 translate-x-0 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-1"
                          >
                            <path
                              d="M8 12L12 8L8 4"
                              className="stroke-secondary dark:stroke-accent"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical separator */}
                {index < expertisesColumns.length - 1 && (
                  <div className="bg-secondary/10 dark:bg-accent/10 h-auto w-px self-stretch" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisesMegaMenu;
