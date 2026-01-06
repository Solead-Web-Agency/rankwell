'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { getFooterColumns, getCompanyInfo, officesInfo } from '@/data/navigation';
import { ROUTES } from '@/lib/routes';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { useLocale, getLocalizedHref } from '@/lib/i18n';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  className?: string;
}

// UI strings
const uiStrings = {
  fr: {
    qualiopiText: 'Certifié au titre des actions de formation',
    legalNotice: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    visitOffice: 'Découvrir',
  },
  en: {
    qualiopiText: 'Certified for training activities',
    legalNotice: 'Legal notice',
    privacyPolicy: 'Privacy policy',
    visitOffice: 'Discover',
  },
};

const Footer: FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const footerColumns = getFooterColumns(locale);
  const companyInfo = getCompanyInfo(locale);
  const homeHref = getLocalizedHref('/', locale);
  const strings = uiStrings[locale];

  return (
    <footer className={cn('relative overflow-hidden', className)}>
      {/* ============================================ */}
      {/* SECTION 1: Logo + Social + Navigation */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-background-2 to-white dark:from-background-7 dark:to-background-8">
        <div className="main-container">
          <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-12 pt-16 pb-14 lg:gap-x-8 xl:pt-20">
            {/* Logo + Description + Social */}
            <div className="col-span-12 lg:col-span-4">
              <div className="xl:max-w-[320px]">
                {/* Logo */}
                <Link href={homeHref} className="inline-block group">
                  <Image
                    src="/images/shared/logo-header.webp"
                    alt="Rankwell"
                    width={160}
                    height={36}
                    className="h-9 w-auto logo-blue dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
                  />
                </Link>
                <p className="mt-5 mb-7 text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {companyInfo.description}
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {/* LinkedIn */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={companyInfo.social.linkedin}
                    className="group flex size-11 items-center justify-center rounded-full bg-white dark:bg-background-6 border border-stroke-2 dark:border-stroke-6 transition-all duration-300 hover:border-transparent hover:bg-[#0077B5] hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary/70 dark:text-accent/70 group-hover:text-white transition-colors"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  {/* Facebook */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={companyInfo.social.facebook}
                    className="group flex size-11 items-center justify-center rounded-full bg-white dark:bg-background-6 border border-stroke-2 dark:border-stroke-6 transition-all duration-300 hover:border-transparent hover:bg-[#1877F2] hover:scale-110 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary/70 dark:text-accent/70 group-hover:text-white transition-colors"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  {/* Instagram */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={companyInfo.social.instagram}
                    className="group flex size-11 items-center justify-center rounded-full bg-white dark:bg-background-6 border border-stroke-2 dark:border-stroke-6 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:scale-110 hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary/70 dark:text-accent/70 group-hover:text-white transition-colors"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 lg:col-span-8">
              {footerColumns.map((column) => (
                <div key={column.title} className="col-span-6 md:col-span-4">
                  <div className="space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-secondary dark:text-white">
                      {column.title}
                    </p>
                    <ul className="space-y-3">
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={getLocalizedHref(link.href, locale)}
                            className="group inline-flex items-center text-secondary/70 transition-colors hover:text-primary dark:text-accent/70 dark:hover:text-primary"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 2: Offices + Qualiopi */}
      {/* ============================================ */}
      <div className="bg-white dark:bg-background-8 border-t border-stroke-2 dark:border-stroke-6">
        <div className="main-container">
          <div className="py-10 grid grid-cols-12 gap-8 items-start">
            {/* Paris Office */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="group">
                <Link
                  href={getLocalizedHref(officesInfo.paris.href, locale)}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <span className="relative">
                    {officesInfo.paris.name}
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                  <span>{officesInfo.paris.address}, {officesInfo.paris.city}</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                  <a href={`tel:${officesInfo.paris.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {officesInfo.paris.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <Mail className="w-4 h-4 shrink-0 text-primary/60" />
                  <a href={`mailto:${officesInfo.paris.email}`} className="hover:text-primary transition-colors">
                    {officesInfo.paris.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Dubai Office */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="group">
                <Link
                  href={getLocalizedHref(officesInfo.dubai.href, locale)}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <span className="relative">
                    {officesInfo.dubai.name}
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                  <span>{officesInfo.dubai.address}, {officesInfo.dubai.city}</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                  <a href={`tel:${officesInfo.dubai.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {officesInfo.dubai.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-secondary/70 dark:text-accent/70">
                  <Mail className="w-4 h-4 shrink-0 text-primary/60" />
                  <a href={`mailto:${officesInfo.dubai.email}`} className="hover:text-primary transition-colors">
                    {officesInfo.dubai.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Spacer for alignment */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* Qualiopi */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-start lg:items-end">
              <div className="px-4 py-3 bg-white dark:bg-background-6 rounded-xl border border-stroke-2 dark:border-stroke-6 overflow-hidden">
                <div className="-my-10">
                  <Image
                    src="/images/shared/qualiopi.avif"
                    alt="Qualiopi"
                    width={200}
                    height={120}
                    className="h-auto w-[180px] object-contain"
                  />
                </div>
                <p className="mt-1 text-[10px] text-secondary/60 dark:text-accent/60 text-center whitespace-nowrap">
                  {strings.qualiopiText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 3: Copyright + Legal */}
      {/* ============================================ */}
      <div className="bg-secondary dark:bg-background-9">
        <div className="main-container">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              &copy; {currentYear} {companyInfo.name} - {companyInfo.tagline}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={getLocalizedHref(ROUTES.LEGAL.MENTIONS, locale)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {strings.legalNotice}
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href={getLocalizedHref(ROUTES.LEGAL.CONFIDENTIALITE, locale)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {strings.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
