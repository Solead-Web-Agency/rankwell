'use client';

/**
 * OFFICESDETAILED - Section bureaux détaillés avec cartes
 * Composant client pour gérer le dynamic import de Leaflet
 */

import dynamic from 'next/dynamic';
import RevealAnimation from '@/components/animation/RevealAnimation';

// Map dynamique (évite les erreurs SSR)
const Map = dynamic(() => import('@/components/shared/global/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-background-2 dark:bg-background-6 animate-pulse rounded-xl" />
  ),
});

interface OfficeData {
  title: string;
  subtitle: string;
  address: string;
  city: string;
  metro?: string;
  hours: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  services: string[];
}

interface OfficesDetailedProps {
  paris: OfficeData;
  dubai: OfficeData;
}

export default function OfficesDetailed({ paris, dubai }: OfficesDetailedProps) {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] bg-background-1 dark:bg-background-9">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Paris */}
          <RevealAnimation delay={0.2}>
            <div className="bg-white dark:bg-background-8 rounded-[20px] overflow-hidden">
              {/* Map */}
              <div className="h-[250px] md:h-[280px]">
                <Map
                  latitude={paris.latitude}
                  longitude={paris.longitude}
                  zoom={15}
                  markerLabel="Rankwell Paris"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <h2 className="text-heading-4 md:text-heading-3 text-rw-blue mb-2">
                    {paris.title}
                  </h2>
                  <p className="text-secondary/70 dark:text-accent/70">
                    {paris.subtitle}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Adresse</span>
                    <span className="text-secondary dark:text-accent">
                      {paris.address}, {paris.city}
                    </span>
                  </p>
                  {paris.metro && (
                    <p className="flex items-start gap-2">
                      <span className="text-secondary/50 min-w-[70px]">Métro</span>
                      <span className="text-secondary dark:text-accent">
                        {paris.metro}
                      </span>
                    </p>
                  )}
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Horaires</span>
                    <span className="text-secondary dark:text-accent">
                      {paris.hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Téléphone</span>
                    <a
                      href={`tel:${paris.phone.replace(/\s/g, '')}`}
                      className="text-rw-blue hover:underline"
                    >
                      {paris.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Email</span>
                    <a
                      href={`mailto:${paris.email}`}
                      className="text-rw-blue hover:underline"
                    >
                      {paris.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary dark:text-white mb-2">
                    Ce qu&apos;on y fait
                  </h3>
                  <ul className="space-y-1.5">
                    {paris.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary/70 dark:text-accent/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-rw-blue flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Dubaï */}
          <RevealAnimation delay={0.3}>
            <div className="bg-white dark:bg-background-8 rounded-[20px] overflow-hidden">
              {/* Map */}
              <div className="h-[250px] md:h-[280px]">
                <Map
                  latitude={dubai.latitude}
                  longitude={dubai.longitude}
                  zoom={15}
                  markerLabel="Rankwell Dubai"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <h2 className="text-heading-4 md:text-heading-3 text-rw-purple mb-2">
                    {dubai.title}
                  </h2>
                  <p className="text-secondary/70 dark:text-accent/70">
                    {dubai.subtitle}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Adresse</span>
                    <span className="text-secondary dark:text-accent">
                      {dubai.address}, {dubai.city}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Horaires</span>
                    <span className="text-secondary dark:text-accent">
                      {dubai.hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Téléphone</span>
                    <a
                      href={`tel:${dubai.phone.replace(/\s/g, '')}`}
                      className="text-rw-purple hover:underline"
                    >
                      {dubai.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-secondary/50 min-w-[70px]">Email</span>
                    <a
                      href={`mailto:${dubai.email}`}
                      className="text-rw-purple hover:underline"
                    >
                      {dubai.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary dark:text-white mb-2">
                    Ce qu&apos;on y fait
                  </h3>
                  <ul className="space-y-1.5">
                    {dubai.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary/70 dark:text-accent/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-rw-purple flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
