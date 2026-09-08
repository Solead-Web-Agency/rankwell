/**
 * LANDINGFOOTER - Pied de page minimal des landing pages
 *
 * Coordonnées, mentions légales et confidentialité uniquement.
 * Aucune navigation vers le reste du site.
 */

import Image from 'next/image';
import Link from 'next/link';
import { organizationData } from '@/lib/schema';
import { ROUTES } from '@/lib/routes';
import PhoneReveal from './PhoneReveal';

export interface LandingFooterProps {
  legalNotice: string;
  privacyPolicy: string;
  /** Texte du bouton qui révèle le numéro */
  phoneRevealText?: string;
}

const LandingFooter = ({ legalNotice, privacyPolicy, phoneRevealText }: LandingFooterProps) => {
  const paris = organizationData.locations.paris;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-background-8 text-white">
      <div className="main-container py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <Image
              src="/images/shared/logo-header.webp"
              alt="Rankwell"
              width={180}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-tagline-2 text-white/60">
              {paris.streetAddress}, {paris.postalCode} {paris.city}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-8 gap-y-2 text-tagline-2 text-white/80">
            <PhoneReveal
              phoneHref={`tel:${paris.telephone}`}
              phoneLabel={paris.telephoneDisplay}
              revealText={phoneRevealText}
              source="footer"
              variant="text"
              className="hover:text-white hover:opacity-100 transition-colors"
            />
            <a href={`mailto:${paris.email}`} className="hover:text-white transition-colors">
              {paris.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-tagline-3 text-white/50">
          <span>© {year} {organizationData.name}. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href={ROUTES.LEGAL.MENTIONS} className="hover:text-white transition-colors">
              {legalNotice}
            </Link>
            <Link href={ROUTES.LEGAL.CONFIDENTIALITE} className="hover:text-white transition-colors">
              {privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

LandingFooter.displayName = 'LandingFooter';
export default LandingFooter;
