/**
 * LOCALE LAYOUT - Layout spécifique à la locale
 * Gère : lang attribute, metadata avec hreflang, Header, Footer, Schema.org
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import ConditionalLayout from '@/components/layout/ConditionalLayout';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo';
import {
  locales,
  defaultLocale,
  isValidLocale,
  baseUrl,
  ogLocales,
  type Locale,
} from '@/lib/i18n';

// ============================================
// STATIC PARAMS - Générer les pages pour chaque locale
// ============================================
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ============================================
// METADATA - Titre par défaut et hreflang global
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const isDefaultLocale = locale === defaultLocale;
  const currentUrl = isDefaultLocale ? baseUrl : `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === 'fr'
          ? 'Rankwell - Agence GEO, SEO, SEA & Data'
          : 'Rankwell - GEO, SEO, SEA & Data Agency',
      template: '%s | Rankwell',
    },
    description:
      locale === 'fr'
        ? 'Rankwell accompagne les entreprises dans leur croissance digitale avec des strategies SEO, SEA et Data sur mesure. Bureaux a Paris et Dubai.'
        : 'Rankwell supports businesses in their digital growth with tailored SEO, SEA and Data strategies. Offices in Paris and Dubai.',
    alternates: {
      canonical: currentUrl,
      languages: {
        'fr': baseUrl,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocales[locale as Locale],
      alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
      siteName: 'Rankwell',
      url: currentUrl,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ============================================
// LAYOUT COMPONENT
// ============================================
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Valider la locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      {/* Injecter l'attribut lang dynamiquement via script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "${locale}";`,
        }}
      />

      {/* Schema.org global - rendered in body, not head */}
      <OrganizationJsonLd locale={locale as Locale} />
      <WebSiteJsonLd locale={locale as Locale} />

      {/* Providers et layout conditionnel */}
      <ClientProviders>
        <LocaleProvider locale={locale as Locale}>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </LocaleProvider>
      </ClientProviders>
    </>
  );
}
