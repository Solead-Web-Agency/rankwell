/**
 * SERVICESHOMEPAGE - Section "Nos Expertises" de la page d'accueil
 * Design basé sur our-services-02 : grandes cartes horizontales avec images
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Image, { StaticImageData } from 'next/image';

// ============================================
// TYPES EXPORTÉS
// ============================================
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  href: string;
  buttonText: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  // Position de l'image: left ou right (alterne par défaut)
  imagePosition?: 'left' | 'right';
}

export interface ServicesHomepageProps {
  sectionId?: string;
  badge: string;
  title: string;
  description?: string;
  items: ServiceItem[];
}

// ============================================
// COMPOSANT SERVICESHOMEPAGE
// ============================================
const ServicesHomepage = ({
  sectionId,
  badge,
  title,
  description,
  items,
}: ServicesHomepageProps) => {
  return (
    <section id={sectionId} className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-32 lg:pb-44 xl:pb-[150px]">
      <div className="main-container">
        {/* Header */}
        <div className="space-y-5 mb-[70px] text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge bg-rw-cyan-light text-rw-cyan">{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>{title}</h2>
          </RevealAnimation>
          {description && (
            <RevealAnimation delay={0.4}>
              <p className="max-w-[600px] mx-auto">{description}</p>
            </RevealAnimation>
          )}
        </div>

        {/* Service Cards */}
        <div className="space-y-[42px]">
          {items.map((service, index) => {
            // Alterner la position de l'image si non spécifiée
            const imageOnLeft = service.imagePosition
              ? service.imagePosition === 'left'
              : index % 2 !== 0;

            return (
              <RevealAnimation key={service.id} delay={0.4 + index * 0.1}>
                <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
                  <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                    {/* Content - order changes based on image position */}
                    <div className={`col-span-12 lg:col-span-6 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="space-y-8">
                        <div className="space-y-3">
                          <h3>{service.title}</h3>
                          <p className="max-w-[493px] w-full">{service.description}</p>
                        </div>
                        <div>
                          <LinkButton
                            href={service.href}
                            className="btn hover:bg-rw-cyan hover:text-white hover:border-rw-cyan btn-white dark:btn-transparent btn-md">
                            {service.buttonText}
                          </LinkButton>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`col-span-12 lg:col-span-6 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex items-center justify-center">
                        {service.image ? (
                          <figure className="max-w-[500px] w-full rounded-[20px] overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.imageAlt || service.title}
                              width={500}
                              height={350}
                              className="w-full h-auto object-cover"
                            />
                          </figure>
                        ) : (
                          <div className="max-w-[500px] w-full aspect-[500/350] rounded-[20px] bg-background-2 dark:bg-background-5 flex flex-col items-center justify-center border-2 border-dashed border-stroke-1 dark:border-stroke-5">
                            <svg className="w-16 h-16 text-secondary/30 dark:text-accent/30 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm text-secondary/40 dark:text-accent/40">Image à ajouter</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ServicesHomepage.displayName = 'ServicesHomepage';
export default ServicesHomepage;
