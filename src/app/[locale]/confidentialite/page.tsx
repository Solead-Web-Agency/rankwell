import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';
import ConfidentialiteContent from './ConfidentialiteContent';

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
    title: 'Politique de confidentialité - Rankwell',
    description: 'Politique de confidentialité de Rankwell. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
  },
  en: {
    title: 'Privacy Policy - Rankwell',
    description: 'Rankwell privacy policy. Learn how we collect, use and protect your personal data.',
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
        ? 'https://rankwell.agency/confidentialite'
        : `https://rankwell.agency${getLocalizedPath('/confidentialite', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.agency/confidentialite',
        'en': `https://rankwell.agency${getLocalizedPath('/confidentialite', 'en')}`,
        'x-default': 'https://rankwell.agency/confidentialite',
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function ConfidentialitePage({ params }: PageProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <ConfidentialiteContent locale={locale as Locale} />;
}
