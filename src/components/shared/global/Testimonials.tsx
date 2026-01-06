/**
 * TESTIMONIALS - Carrousel témoignages clients
 * Composant global utilisable sur toutes les pages
 * Supporte i18n via prop locale
 */

'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { type Locale } from '@/lib/i18n';

interface TestimonialsProps {
  locale?: Locale;
}

// Témoignages clients Rankwell
const testimonialsDataByLocale = {
  fr: [
    {
      id: 1,
      quote:
        "Une équipe très professionnelle, travaillant dur pour améliorer le ranking et la visibilité de notre site dans les résultats de recherche. Rankwell présente une grande expertise en matière de référencement et de stratégie en ligne. Les résultats que nous avons obtenus ont été à la hauteur de nos attentes.",
      name: 'Jeremie Herscovic',
      position: 'CEO & Founder',
      logo: '/images/shared/testimonials/socloz.png',
      company: 'Socloz',
    },
    {
      id: 2,
      quote:
        "Grâce à la stratégie SEO internationale engagée par Rankwell, nous sommes enfin visibles à l'international, ce qui aide grandement à notre activité !",
      name: 'Yoann Valensi',
      position: 'Co-fondateur',
      logo: '/images/shared/testimonials/certideal.png',
      company: 'Certideal',
    },
    {
      id: 3,
      quote:
        "Merci aux équipes de Rankwell qui ont su nous accompagner dans la digitalisation de notre cabinet ! Grâce à une stratégie multicanale – SEO, SEA et Social Ads, nous bénéficions d'une excellente visibilité dans la durée.",
      name: 'David Smadja',
      position: 'Avocat associé et fondateur',
      logo: '/images/shared/testimonials/djs-avocats.png',
      company: 'DJS Avocats',
    },
    {
      id: 4,
      quote:
        "Notre site e-commerce a grandement bénéficié des services de Rankwell sans qui nous ne serions parvenus jusqu'au top 3 des résultats de recherche !",
      name: 'Baroukh Cohen',
      position: 'Fondateur',
      logo: '/images/shared/testimonials/menzzo.png',
      company: 'Menzzo',
    },
    {
      id: 5,
      quote:
        "En tant qu'agence internationale, Rankwell a su mener notre visibilité internationale aux meilleures positions. Leur expertise en SEO anglophone est indiscutable.",
      name: 'Nathalie Kaczmarek',
      position: 'Marketing Manager',
      logo: '/images/shared/testimonials/roller-grill.png',
      company: 'Roller Grill',
    },
    {
      id: 6,
      quote:
        "Bénéficier des stratégies internationales en termes de référencement naturel a été un réel avantage pour notre visibilité à l'échelle internationale, réel avantage concurrentiel pour notre cœur de métier.",
      name: 'Lucie Le Trequesser',
      position: 'Responsable eCommerce',
      logo: '/images/shared/testimonials/crazy-horse.png',
      company: 'Crazy Horse',
    },
  ],
  en: [
    {
      id: 1,
      quote:
        "A very professional team, working hard to improve our site's ranking and visibility in search results. Rankwell has great expertise in SEO and online strategy. The results we achieved met our expectations.",
      name: 'Jeremie Herscovic',
      position: 'CEO & Founder',
      logo: '/images/shared/testimonials/socloz.png',
      company: 'Socloz',
    },
    {
      id: 2,
      quote:
        "Thanks to Rankwell's international SEO strategy, we are finally visible internationally, which greatly helps our business!",
      name: 'Yoann Valensi',
      position: 'Co-founder',
      logo: '/images/shared/testimonials/certideal.png',
      company: 'Certideal',
    },
    {
      id: 3,
      quote:
        "Thanks to the Rankwell teams who supported us in the digitalization of our firm! With a multichannel strategy – SEO, SEA and Social Ads, we enjoy excellent long-term visibility.",
      name: 'David Smadja',
      position: 'Partner & Founder',
      logo: '/images/shared/testimonials/djs-avocats.png',
      company: 'DJS Avocats',
    },
    {
      id: 4,
      quote:
        "Our e-commerce site greatly benefited from Rankwell's services, without whom we would not have reached the top 3 of search results!",
      name: 'Baroukh Cohen',
      position: 'Founder',
      logo: '/images/shared/testimonials/menzzo.png',
      company: 'Menzzo',
    },
    {
      id: 5,
      quote:
        "As an international agency, Rankwell has successfully brought our international visibility to the best positions. Their expertise in English-language SEO is undeniable.",
      name: 'Nathalie Kaczmarek',
      position: 'Marketing Manager',
      logo: '/images/shared/testimonials/roller-grill.png',
      company: 'Roller Grill',
    },
    {
      id: 6,
      quote:
        "Benefiting from international SEO strategies has been a real advantage for our global visibility, a true competitive edge for our core business.",
      name: 'Lucie Le Trequesser',
      position: 'eCommerce Manager',
      logo: '/images/shared/testimonials/crazy-horse.png',
      company: 'Crazy Horse',
    },
  ],
};

const headerByLocale = {
  fr: {
    badge: 'Témoignages',
    title: 'Découvrez ce que nos clients',
    titleHighlight: 'disent de nous',
  },
  en: {
    badge: 'Testimonials',
    title: 'Discover what our clients',
    titleHighlight: 'say about us',
  },
};

const Testimonials = ({ locale = 'fr' }: TestimonialsProps) => {
  const testimonialsData = testimonialsDataByLocale[locale];
  const header = headerByLocale[locale];

  return (
    <section className="bg-background-2 dark:bg-background-5 pt-20 pb-14 md:pt-24 md:pb-16 lg:pt-[150px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-[67px]">
        {/* Header Section */}
        <div className="mb-14 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-rw-coral-light text-rw-coral mb-5">{header.badge}</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3 max-w-[750px] mx-auto">
              {header.title}
              <br className="hidden md:block" />
              <span className="text-rw-coral inline-block">{header.titleHighlight}</span>
            </h2>
          </RevealAnimation>
        </div>
      </div>

      {/* Review Cards Marquee */}
      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill pauseOnHover className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-8 py-4">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`group relative max-w-[340px] min-w-[340px] sm:max-w-[358px] sm:min-w-[358px] ${index === 0 ? 'ml-8' : ''}`}>
                  {/* Card */}
                  <div className="dark:bg-background-6 h-fit w-full space-y-8 rounded-[20px] bg-white p-8">
                    <p className="text-secondary dark:text-accent max-w-[297px] text-wrap">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="border-stroke-4 dark:border-stroke-5 border-t" />
                    <figure className="flex items-center gap-3">
                      <Image
                        src={testimonial.logo}
                        className="h-10 w-auto object-contain brightness-0 dark:brightness-100"
                        alt={testimonial.company}
                        width={80}
                        height={40}
                      />
                      <figcaption>
                        <span className="text-tagline-1 dark:text-accent font-medium block">{testimonial.name}</span>
                        <p className="text-tagline-2 dark:text-accent/60">{testimonial.position}</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

Testimonials.displayName = 'Testimonials';
export default Testimonials;
