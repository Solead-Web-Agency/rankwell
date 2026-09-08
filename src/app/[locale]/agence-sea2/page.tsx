/**
 * LANDING PAGE CONVERSION - Agence SEA
 * URL: /agence-sea2 (FR uniquement)
 *
 * Doublon condensé de /agence-sea orienté génération de leads :
 * - Page standalone : pas de header/footer du site (voir ConditionalLayout)
 * - Formulaire en modale, ouvert par tous les CTA (+ exit intent desktop)
 * - Barre CTA sticky sur mobile
 * - noindex + hors sitemap : aucun impact SEO sur /agence-sea
 *   (déclarée dans src/lib/i18n/config.ts et src/middleware.ts)
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { baseUrl, defaultLocale } from '@/lib/i18n';

// Composants landing (standalone)
import {
  LandingShell,
  LandingHeader,
  LandingHero,
  LandingOffer,
  LandingFinalCta,
  LandingFooter,
} from '@/components/shared/landing';

// Composants shared réutilisés
import { RecapBoxService, ProcessSteps, FAQService } from '@/components/shared/services';
import { Clients, Testimonials, KeyFiguresAnimated } from '@/components/shared/global';

// Données
import {
  settings,
  metadata as pageMetadata,
  headerData,
  heroData,
  recapBoxData,
  chiffresData,
  methodeData,
  offerData,
  faqData,
  finalCtaData,
  modalData,
  stickyBarData,
  footerData,
} from './data.fr';

// ============================================
// Types
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

const PAGE_PATH = '/agence-sea2';
const PAGE_URL = `${baseUrl}${PAGE_PATH}`;

// ============================================
// Metadata - noindex (doublon conversion de /agence-sea)
// ============================================
export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Rankwell',
    url: PAGE_URL,
    title: pageMetadata.title,
    description: pageMetadata.description,
  },
};

// ============================================
// Page Component
// ============================================
export default async function AgenceSea2Page({ params }: PageProps) {
  const { locale } = await params;

  // Page FR uniquement (le middleware redirige déjà /en/agence-sea2)
  if (locale !== defaultLocale) {
    notFound();
  }

  const { accentColor } = settings;

  return (
    <LandingShell
      modal={modalData}
      stickyBar={stickyBarData}
      formId={settings.formId}
      exitIntent={settings.exitIntent}
      exitIntentDelay={settings.exitIntentDelay}
      accentColor={accentColor}
    >
      <LandingHeader
        ctaText={headerData.ctaText}
        phoneLabel={headerData.phoneLabel}
        phoneHref={headerData.phoneHref}
        accentColor={accentColor}
      />

      {/* pb-24 sur mobile : espace pour la barre sticky */}
      <main className="min-h-screen bg-background-3 dark:bg-background-7 pb-24 md:pb-0">
        <LandingHero
          badge={heroData.badge}
          title={
            <>
              {heroData.title} <span className="text-rw-cyan">{heroData.titleHighlight}</span>
            </>
          }
          description={heroData.description}
          benefits={heroData.benefits}
          ctaText={heroData.ctaText}
          ctaSubtext={heroData.ctaSubtext}
          phoneLabel={heroData.phoneLabel}
          phoneHref={heroData.phoneHref}
          image={heroData.image}
          imageAlt={heroData.imageAlt}
          socialProof={heroData.socialProof}
          accentColor={accentColor}
        />

        <Clients locale="fr" bgWhite />

        <RecapBoxService
          sectionId={recapBoxData.sectionId}
          badge={recapBoxData.badge}
          accentColor={accentColor}
          title={recapBoxData.title}
          subtitle={recapBoxData.subtitle}
          items={recapBoxData.items}
        />

        <KeyFiguresAnimated
          sectionId={chiffresData.sectionId}
          items={chiffresData.items}
          accentColor={accentColor}
        />

        <ProcessSteps
          sectionId={methodeData.sectionId}
          badge={methodeData.badge}
          accentColor={accentColor}
          title={methodeData.title}
          subtitle={methodeData.subtitle}
          steps={methodeData.steps}
        />

        <LandingOffer
          sectionId={offerData.sectionId}
          badge={offerData.badge}
          title={offerData.title}
          subtitle={offerData.subtitle}
          includedTitle={offerData.includedTitle}
          included={offerData.included}
          forWhoTitle={offerData.forWhoTitle}
          forWho={offerData.forWho}
          ctaText={offerData.ctaText}
          ctaNote={offerData.ctaNote}
          accentColor={accentColor}
        />

        <Testimonials locale="fr" />

        <FAQService
          sectionId={faqData.sectionId}
          badge={faqData.badge}
          accentColor={accentColor}
          title={faqData.title}
          subtitle={faqData.subtitle}
          items={faqData.items}
        />

        <LandingFinalCta
          title={
            <>
              {finalCtaData.title} <span className="text-rw-cyan">{finalCtaData.titleHighlight}</span>
            </>
          }
          description={finalCtaData.description}
          buttonText={finalCtaData.buttonText}
          checklistItems={finalCtaData.checklistItems}
          accentColor={accentColor}
        />
      </main>

      <LandingFooter legalNotice={footerData.legalNotice} privacyPolicy={footerData.privacyPolicy} />
    </LandingShell>
  );
}
