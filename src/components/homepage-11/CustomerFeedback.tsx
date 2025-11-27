import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import grayClientLogo1 from '@public/images/icons/gray-client-logo-1.svg';
import grayClientLogo2 from '@public/images/icons/gray-client-logo-2.svg';
import grayClientLogo3 from '@public/images/icons/gray-client-logo-3.svg';
import grayClientLogo4 from '@public/images/icons/gray-client-logo-4.svg';
import grayClientLogo5 from '@public/images/icons/gray-client-logo-5.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const clientLogos = [
  { id: 1, src: grayClientLogo1, alt: 'Client company logo 1' },
  { id: 2, src: grayClientLogo2, alt: 'Client company logo 2' },
  { id: 3, src: grayClientLogo3, alt: 'Client company logo 3' },
  { id: 4, src: grayClientLogo4, alt: 'Client company logo 4' },
  { id: 5, src: grayClientLogo5, alt: 'Client company logo 5' },
];

const CustomerFeedback = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] max-xl:px-5 overflow-hidden">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] text-center mx-auto max-sm:mx-3 rounded-4xl pt-16 lg:pt-[100px] pb-10 -z-0 bg-secondary dark:bg-background-6 overflow-hidden relative">
          {/* Decorative Gradients */}
          <div
            className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-[50deg] z-10 left-[28%] -top-[22%] w-[108px] h-[982px] select-none pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-45 z-10 right-[8%] -top-[22%] w-[108px] h-[982px] select-none pointer-events-none"
            aria-hidden="true"
          />
          <RevealAnimation delay={0.3} duration={0.4} direction="left" offset={60}>
            <div className="absolute -top-[22%] sm:-top-[45%] md:-top-[80%] lg:-top-[90%] rotate-[11deg] select-none pointer-events-none -left-[40%] md:-left-[34%] w-full h-full -z-10">
              <Image src={gradient6} alt="Decorative mesh gradient background" className="scale-[60%]" priority />
            </div>
          </RevealAnimation>

          {/* Customer Testimonial */}
          <article className="text-center">
            {/* Customer Avatars */}
            <div>
              <div className="flex justify-center -space-x-2.5" role="group" aria-label="Customer avatars">
                <RevealAnimation delay={0.2} direction="right" offset={50}>
                  <Image
                    className="inline-block size-[38px] rounded-full ring-2 ring-accent bg-ns-yellow"
                    src={avatar1}
                    alt="Customer avatar 1"
                    width={38}
                    height={38}
                    loading="lazy"
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.3} direction="right" offset={50}>
                  <Image
                    className="inline-block size-[38px] rounded-full ring-2 ring-accent bg-ns-red"
                    src={avatar2}
                    alt="Customer avatar 2"
                    width={38}
                    height={38}
                    loading="lazy"
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="right" offset={50}>
                  <Image
                    className="inline-block size-[38px] rounded-full relative z-0 ring-2 ring-accent bg-ns-green"
                    src={avatar3}
                    alt="Customer avatar 3"
                    width={38}
                    height={38}
                    loading="lazy"
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.5} direction="right" offset={50}>
                  <div className="inline-flex items-center relative z-10 justify-center size-[38px] bg-ns-cyan rounded-full ring-2 ring-accent text-secondary/80 text-tagline-3 font-medium">
                    99+
                  </div>
                </RevealAnimation>
              </div>

              <div className="mt-5">
                <RevealAnimation delay={0.2}>
                  <p className="font-normal block text-accent text-heading-6">Trusted by 20k+</p>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-3 text-center text-accent/60">Customers across the globe</p>
                </RevealAnimation>
              </div>
            </div>

            {/* Testimonial Quote */}
            <RevealAnimation delay={0.4}>
              <blockquote className="text-lg lg:text-heading-6 font-normal max-w-[578px] mx-auto mt-6 lg:mt-10 text-white px-4 sm:px-0">
                &ldquo;Since switching to NextSaaS, our email deliverability has improved by 40%, and engagement is at
                an all-time high.&rdquo;
              </blockquote>
            </RevealAnimation>

            {/* Call to Action */}
            <RevealAnimation delay={0.6} offset={70}>
              <div className="mt-9 mb-10 lg:mb-14">
                <LinkButton
                  href="/case-study"
                  className="btn btn-base btn-dark hover:btn-primary w-[90%] md:w-auto"
                  aria-label="View case studies">
                  See case studies
                </LinkButton>
              </div>
            </RevealAnimation>
          </article>

          {/* Client Logos */}
          <RevealAnimation delay={0.6}>
            <div className="max-w-[1130px] mx-auto relative">
              <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-secondary to-transparent dark:from-background-6 z-50" />
              <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-secondary to-transparent dark:from-background-6 z-40" />
              <Marquee autoFill speed={40}>
                <div
                  className="flex items-center justify-center border-t border-accent/10 dark:border-none pt-10 gap-4 md:gap-8"
                  role="group">
                  {clientLogos.map((logo, index) => (
                    <figure key={logo.id} className={`min-w-[140px] md:min-w-[201px] ${index === 0 ? 'ml-8' : ''}`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        className="lg:w-auto"
                        width={120}
                        height={40}
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default CustomerFeedback;
