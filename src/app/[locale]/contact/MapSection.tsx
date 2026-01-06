/**
 * MAP SECTION - Client Component pour la carte
 * Nécessaire car le Map utilise ssr: false
 */

'use client';

import dynamic from 'next/dynamic';
import RevealAnimation from '@/components/animation/RevealAnimation';

// Map chargé dynamiquement (client-side only)
const Map = dynamic(() => import('@/components/shared/global/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-background-2 dark:bg-background-6 animate-pulse rounded-2xl" />
  ),
});

interface MapSectionProps {
  title: string;
  paris: {
    title: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  dubai: {
    title: string;
    address: string;
    latitude: number;
    longitude: number;
  };
}

const MapSection = ({ title, paris, dubai }: MapSectionProps) => {
  return (
    <section className="py-14 md:py-16 lg:py-20 xl:py-[100px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-10">
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-3">{title}</h2>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Paris */}
          <RevealAnimation delay={0.3}>
            <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5 overflow-hidden">
              <div className="w-full h-[300px] rounded-2xl overflow-hidden mb-4">
                <Map
                  latitude={paris.latitude}
                  longitude={paris.longitude}
                  zoom={15}
                  markerLabel={paris.title}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-heading-6 mb-2">{paris.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  {paris.address}
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Dubai */}
          <RevealAnimation delay={0.4}>
            <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5 overflow-hidden">
              <div className="w-full h-[300px] rounded-2xl overflow-hidden mb-4">
                <Map
                  latitude={dubai.latitude}
                  longitude={dubai.longitude}
                  zoom={15}
                  markerLabel={dubai.title}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-heading-6 mb-2">{dubai.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  {dubai.address}
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

MapSection.displayName = 'MapSection';
export default MapSection;
