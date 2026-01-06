/**
 * OFFICESMAP - Section bureaux avec cartes Leaflet
 * Affiche les bureaux avec leurs adresses et cartes interactives
 */

'use client';

import dynamic from 'next/dynamic';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// Import dynamique pour éviter les erreurs SSR avec Leaflet
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-background-2 dark:bg-background-6 animate-pulse rounded-xl" />
  ),
});

export interface OfficeItem {
  id: number;
  title: string;
  description: string;
  address?: string;
  latitude: number;
  longitude: number;
}

export interface OfficesMapProps {
  sectionId?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  offices: OfficeItem[];
  accentColor?: RwColor;
  cta?: {
    text: string;
    href: string;
  };
}

const OfficesMap = ({
  sectionId = 'bureaux',
  badge,
  title,
  subtitle,
  offices,
  accentColor = 'rw-purple',
  cta,
}: OfficesMapProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section
      id={sectionId}
      className="py-16 md:py-20 lg:py-[90px] xl:py-[100px] bg-white dark:bg-background-8"
    >
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* Header */}
          {(badge || title || subtitle) && (
            <div className="space-y-5 flex flex-col items-center justify-center">
              {badge && (
                <RevealAnimation delay={0.1}>
                  <span className={`badge ${colors.badge}`}>{badge}</span>
                </RevealAnimation>
              )}
              {title && (
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[578px] text-heading-4 md:text-heading-2 text-center">
                    {title}
                  </h2>
                </RevealAnimation>
              )}
              {subtitle && (
                <RevealAnimation delay={0.25}>
                  <p className="max-w-[600px] text-center text-secondary/80 dark:text-accent/80">
                    {subtitle}
                  </p>
                </RevealAnimation>
              )}
            </div>
          )}

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {offices.map((office, idx) => (
              <RevealAnimation key={office.id} delay={0.3 + idx * 0.1}>
                <div className="flex flex-col">
                  {/* Map */}
                  <div className="w-full rounded-[20px] bg-background-2 dark:bg-background-6 p-2.5 mb-3">
                    <div className="h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                      <Map
                        latitude={office.latitude}
                        longitude={office.longitude}
                        zoom={15}
                        markerLabel={office.title}
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-[22px] sm:text-heading-5">{office.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">{office.description}</p>
                    {office.address && (
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mt-2">
                        📍 {office.address}
                      </p>
                    )}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* CTA */}
          {cta && (
            <RevealAnimation delay={0.5}>
              <div className="flex justify-center">
                <LinkButton
                  href={cta.href}
                  className={`btn-lg ${colors.bg} text-white hover:opacity-90`}
                >
                  {cta.text}
                </LinkButton>
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

OfficesMap.displayName = 'OfficesMap';
export default OfficesMap;
