'use client';

import Link from 'next/link';
import { useLocale, getLocalizedHref } from '@/lib/i18n';
import { type ComponentProps } from 'react';

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  /** French path (internal route) */
  href: string;
};

/**
 * LocalizedLink - Link component that automatically localizes URLs
 *
 * Use French paths internally, the component handles translation for English
 *
 * @example
 * <LocalizedLink href="/agence-sea/audit">Audit SEA</LocalizedLink>
 * // In FR: renders /agence-sea/audit
 * // In EN: renders /en/sea-agency/audit
 */
export default function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const locale = useLocale();
  const localizedHref = getLocalizedHref(href, locale);

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
