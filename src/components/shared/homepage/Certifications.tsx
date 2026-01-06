/**
 * CERTIFICATIONS - Bandeau certifications partenaires
 * Composant exclusif à la page d'accueil
 */

'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '@/components/animation/RevealAnimation';

// Logos certifications
const certificationLogos = [
  { id: 1, src: '/images/shared/certifications/facebook.svg', alt: 'Meta Business Partner' },
  { id: 2, src: '/images/shared/certifications/google.svg', alt: 'Google Partner' },
  { id: 3, src: '/images/shared/certifications/baidu.svg', alt: 'Baidu' },
  { id: 4, src: '/images/shared/certifications/qaseo.png', alt: 'QASEO' },
  { id: 5, src: '/images/shared/certifications/ceseo.png', alt: 'CESEO' },
];

const Certifications = () => {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 lg:-mt-[60px]" aria-label="Nos certifications">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div
            className="rounded-2xl py-6 px-6 md:py-8 md:px-10 bg-[#a8b5de] dark:bg-background-6"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {/* Left: Title */}
              <div className="lg:w-1/4 text-center shrink-0 flex items-center justify-center">
                <span className="text-white dark:text-accent" style={{ fontSize: '1.7rem', fontWeight: 400 }}>
                  Nos certifications
                </span>
              </div>

              {/* Right: Logos Marquee */}
              <div className="lg:w-3/4 w-full">
                <div className="relative">
                  <Marquee pauseOnHover={true} autoFill={true} speed={25}>
                    <div className="flex items-center justify-center gap-8">
                      {certificationLogos.map((logo, index) => (
                        <figure
                          key={logo.id}
                          aria-label={logo.alt}
                          className={`min-w-[100px] md:min-w-[140px] ${index === 0 ? 'ml-8' : ''}`}>
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain"
                          />
                        </figure>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Certifications.displayName = 'Certifications';
export default Certifications;
