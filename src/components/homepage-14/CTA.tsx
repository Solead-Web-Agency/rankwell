import gradient10 from '@public/images/gradient/gradient-10.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section aria-label="Call to Action" className="relative top-12 z-20">
      <div className="max-w-[1400px] max-lg:px-5 mx-auto">
        <div className="py-[76px] bg-secondary dark:bg-black rounded-4xl relative overflow-hidden px-4 sm:px-0">
          {/* bg left  */}
          <RevealAnimation delay={0.2}>
            <figure className="absolute left-[-141px] top-[-155px] size-[280px] md:size-[300px] lg:size-[400px] rotate-180 select-none pointer-events-none">
              <Image src={gradient10} alt="Decorative gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="max-w-[649px] mx-auto md:w-full text-center space-y-8">
            <div className="space-y-2">
              <RevealAnimation delay={0.2}>
                <h2 className="text-white" id="cta-heading">
                  Ready to take the first step?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60">
                  Get a custom quote, check your eligibility, or talk to a real expert—today.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/login-01"
                  className="btn btn-primary border-0 btn-lg hover:btn-white dark:hover:btn-secondary w-[90%] md:w-auto mx-auto md:mx-0">
                  Start application
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          {/* bg-right  */}
          <RevealAnimation delay={0.2}>
            <figure className="absolute right-[-160px] top-[-132px] size-[280px] md:size-[300px] lg:size-[350px] rotate-180 select-none pointer-events-none">
              <Image src={gradient10} alt="Decorative gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
