/**
 * CLIENTS - Bandeau logos clients défilant
 * Composant global utilisable sur toutes les pages
 * Supporte i18n via prop locale
 */

'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { type Locale } from '@/lib/i18n';

interface ClientsProps {
  locale?: Locale;
  bgWhite?: boolean;
}

// Logos clients Rankwell
const clientLogos = [
  { id: 1, src: '/images/shared/clients/loreal.png', alt: "L'Oréal" },
  { id: 2, src: '/images/shared/clients/djs-avocats.png', alt: 'DJS Avocats' },
  { id: 3, src: '/images/shared/clients/office-depot.png', alt: 'Office Depot' },
  { id: 4, src: '/images/shared/clients/keobiz.png', alt: 'Keobiz' },
  { id: 5, src: '/images/shared/clients/guoji-pai.png', alt: 'Guoji Pai' },
  { id: 6, src: '/images/shared/clients/la-case-du-cousin-paul.png', alt: 'La Case du Cousin Paul' },
  { id: 7, src: '/images/shared/clients/yann-couvreur.png', alt: 'Yann Couvreur' },
  { id: 8, src: '/images/shared/clients/district-immo.png', alt: 'District Immo' },
  { id: 9, src: '/images/shared/clients/certideal-1.png', alt: 'Certideal' },
  { id: 10, src: '/images/shared/clients/culinaries.png', alt: 'Culinaries' },
  { id: 11, src: '/images/shared/clients/norela.png', alt: 'Norela' },
  { id: 12, src: '/images/shared/clients/medai.png', alt: 'Medai' },
  { id: 13, src: '/images/shared/clients/lunii.png', alt: 'Lunii' },
  { id: 14, src: '/images/shared/clients/ekyog.png', alt: 'Ekyog' },
  { id: 15, src: '/images/shared/clients/relais-dor.png', alt: "Relais d'Or" },
  { id: 16, src: '/images/shared/clients/creaform.png', alt: 'Creaform' },
  { id: 17, src: '/images/shared/clients/ikoula.png', alt: 'Ikoula' },
  { id: 18, src: '/images/shared/clients/filorga.png', alt: 'Filorga' },
  { id: 19, src: '/images/shared/clients/pharmacie-monge.png', alt: 'Pharmacie Monge' },
  { id: 20, src: '/images/shared/clients/crazy-horse-1.png', alt: 'Crazy Horse' },
  { id: 21, src: '/images/shared/clients/socloz.png', alt: 'Socloz' },
  { id: 22, src: '/images/shared/clients/swissquote.png', alt: 'Swissquote' },
  { id: 23, src: '/images/shared/clients/les-furets.png', alt: 'Les Furets' },
  { id: 24, src: '/images/shared/clients/financiale.png', alt: 'Financiale' },
  { id: 25, src: '/images/shared/clients/tailor-trucks.png', alt: 'Tailor Trucks' },
  { id: 26, src: '/images/shared/clients/tout-le-monde-bochart.png', alt: 'Tout le Monde Bochart' },
  { id: 27, src: '/images/shared/clients/visiodent.png', alt: 'Visiodent' },
  { id: 28, src: '/images/shared/clients/menzzo-1.png', alt: 'Menzzo' },
  { id: 29, src: '/images/shared/clients/e-idols.png', alt: 'E-Idols' },
  { id: 30, src: '/images/shared/clients/moment.png', alt: 'Moment' },
  { id: 31, src: '/images/shared/clients/winamax.png', alt: 'Winamax' },
  { id: 32, src: '/images/shared/clients/seppic.png', alt: 'Seppic' },
];

const titleByLocale = {
  fr: {
    text: 'Ils font confiance à ',
    highlight: 'nos expertises',
  },
  en: {
    text: 'They trust ',
    highlight: 'our expertise',
  },
};

const Clients = ({ locale = 'fr', bgWhite = false }: ClientsProps) => {
  const title = titleByLocale[locale];

  return (
    <RevealAnimation delay={0.1}>
      <section className={cn(
        'xl:py-[100px] lg:py-[90px] md:py-20 py-16',
        bgWhite && 'bg-white dark:bg-background-8'
      )}>
        <div className="main-container mb-12">
          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <span className="text-secondary dark:text-accent" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                {title.text}<span className="text-rw-coral">{title.highlight}</span>
              </span>
            </div>
          </RevealAnimation>
        </div>
        <div className="main-container">
          <Marquee autoFill speed={40}>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo, index) => (
                <figure key={logo.id} className={cn('min-w-[120px] md:min-w-[160px]', index === 0 && 'ml-8')}>
                  <Image
                    src={logo.src}
                    className="h-14 md:h-16 w-auto object-contain brightness-0 dark:brightness-100"
                    alt={logo.alt}
                    width={160}
                    height={40}
                  />
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </RevealAnimation>
  );
};

Clients.displayName = 'Clients';
export default Clients;
