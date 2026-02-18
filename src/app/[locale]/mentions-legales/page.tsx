import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';
import MentionsLegalesContent from './MentionsLegalesContent';

// ============================================
// Types
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// Metadata
// ============================================
const metadataContent = {
  fr: {
    title: 'Mentions légales - Rankwell',
    description: 'Mentions légales du site Rankwell. Informations sur l\'éditeur, les conditions d\'utilisation et la propriété intellectuelle.',
  },
  en: {
    title: 'Legal Notice - Rankwell',
    description: 'Legal notice of Rankwell website. Information about the publisher, terms of use and intellectual property.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const meta = metadataContent[locale as keyof typeof metadataContent] || metadataContent.fr;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: locale === defaultLocale
        ? 'https://rankwell.agency/mentions-legales'
        : `https://rankwell.agency${getLocalizedPath('/mentions-legales', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.agency/mentions-legales',
        'en': `https://rankwell.agency${getLocalizedPath('/mentions-legales', 'en')}`,
        'x-default': 'https://rankwell.agency/mentions-legales',
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function MentionsLegalesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <MentionsLegalesContent locale={locale as Locale} />;
}
