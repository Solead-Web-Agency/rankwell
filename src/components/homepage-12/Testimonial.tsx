import testimonials from '@/data/json/testimonials/testimonials.json';
import trustPilotLogo from '@public/images/icons/trustpilot-logo.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="xl:pt-[100px] lg:pt-[90px] md:py-20 py-16">
      <div className="main-container">
        {/* Header Section */}
        <div className="mb-14 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-5"> Reviews </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Hear from our customers about their
              <br className="hidden md:block" />
              <span className="text-primary-500 inline-block"> experiences with us</span>
            </h2>
          </RevealAnimation>
        </div>
      </div>

      {/* Review Cards */}
      <RevealAnimation delay={0.4} duration={1.5}>
        <Marquee autoFill pauseOnHover className="w-full overflow-hidden">
          <div className="flex items-center justify-center gap-8 py-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative min-h-[245px] max-w-[340px] min-w-[340px] perspective-[1000px] sm:max-w-[358px] sm:min-w-[358px] ${index === 0 ? 'ml-8' : ''}`}>
                <div className="flipper h-full w-full">
                  {/* Front of Card */}
                  <div className="front dark:bg-background-6 absolute top-0 left-0 h-fit w-full space-y-8 rounded-[20px] bg-white p-8">
                    <p className="text-secondary dark:text-accent line-clamp-3 max-w-[297px] text-wrap">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="border-stroke-4 dark:border-stroke-5 border-t" />
                    <figure className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        className="size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] object-cover object-center"
                        alt={`${testimonial.name}'s avatar`}
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                      <figcaption>
                        <h3 className="text-tagline-1 dark:text-accent font-medium">{testimonial.name}</h3>
                        <p className="text-tagline-2 dark:text-accent/60">{testimonial.position}</p>
                      </figcaption>
                    </figure>
                  </div>

                  {/* Back of Card */}
                  <div className="back bg-secondary dark:bg-background-6 absolute top-0 left-0 flex h-full min-h-[245px] w-full max-w-[340px] min-w-[340px] flex-col items-center justify-center space-y-2 overflow-hidden rounded-[20px] p-8 sm:max-w-[358px] sm:min-w-[358px]">
                    <div className="absolute -top-[185px] -left-[184px] z-10 h-full w-full -rotate-[90deg] bg-[url('/images/gradient/gradient-9.png')] bg-contain bg-no-repeat" />
                    <h3 className="text-ns-green relative z-20 text-[64px] leading-[1.1] font-light">
                      {testimonial.rating}
                    </h3>
                    <figure className="relative z-20 h-10 w-20">
                      <Image
                        src={trustPilotLogo}
                        alt="Trust Pilot logo"
                        className="h-full w-full object-contain"
                        width={80}
                        height={40}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </RevealAnimation>
    </section>
  );
};
Testimonial.displayName = 'Testimonial';
export default Testimonial;
