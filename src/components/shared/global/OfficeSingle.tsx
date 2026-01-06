'use client';

/**
 * OFFICESINGLE - Section pour afficher un seul bureau avec carte
 * Version simplifiée de OfficesDetailed pour les pages locales
 */

import dynamic from 'next/dynamic';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// Map dynamique (évite les erreurs SSR avec Leaflet)
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-background-2 dark:bg-background-6 animate-pulse rounded-xl" />
  ),
});

export interface OfficeSingleData {
  title: string;
  subtitle?: string;
  address: string;
  city: string;
  transports?: string;
  hours: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
}

export interface OfficeSingleProps {
  sectionId?: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  office: OfficeSingleData;
  accentColor?: RwColor;
}

export default function OfficeSingle({
  sectionId = 'bureaux',
  title,
  description,
  secondaryDescription,
  office,
  accentColor = 'rw-blue',
}: OfficeSingleProps) {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-16 md:py-20 lg:py-[90px] bg-background-1 dark:bg-background-9">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-heading-3">{title}</h2>
              <p className="text-lg text-secondary/80 dark:text-accent/80">
                {description}
              </p>
              {secondaryDescription && (
                <p className="text-secondary/70 dark:text-accent/70">
                  {secondaryDescription}
                </p>
              )}

              {/* Infos pratiques */}
              <div className="bg-white dark:bg-background-8 rounded-[20px] p-6 md:p-8 space-y-4">
                <h3 className={`text-heading-5 ${colors.text}`}>{office.title}</h3>
                {office.subtitle && (
                  <p className="text-secondary/70 dark:text-accent/70 text-sm">
                    {office.subtitle}
                  </p>
                )}

                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-secondary/50 min-w-[70px]">Adresse</span>
                    <span className="text-secondary dark:text-accent">
                      {office.address}, {office.city}
                    </span>
                  </p>
                  {office.transports && (
                    <p className="flex items-start gap-3">
                      <span className="text-secondary/50 min-w-[70px]">Transports</span>
                      <span className="text-secondary dark:text-accent">
                        {office.transports}
                      </span>
                    </p>
                  )}
                  <p className="flex items-start gap-3">
                    <span className="text-secondary/50 min-w-[70px]">Horaires</span>
                    <span className="text-secondary dark:text-accent">
                      {office.hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-secondary/50 min-w-[70px]">Téléphone</span>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className={`${colors.text} hover:underline`}
                    >
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-secondary/50 min-w-[70px]">Email</span>
                    <a
                      href={`mailto:${office.email}`}
                      className={`${colors.text} hover:underline`}
                    >
                      {office.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Right: Map */}
          <RevealAnimation delay={0.3}>
            <div className="h-[350px] md:h-[400px] rounded-[20px] overflow-hidden">
              <Map
                latitude={office.latitude}
                longitude={office.longitude}
                zoom={15}
                markerLabel={office.title}
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}

OfficeSingle.displayName = 'OfficeSingle';
