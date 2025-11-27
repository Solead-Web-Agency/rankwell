import gradient13 from '@public/images/gradient/gradient-13.png';
import gradient8 from '@public/images/gradient/gradient-8.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="py-[170px] bg-white dark:bg-background-6 relative overflow-hidden">
      {/* left gradient */}
      <RevealAnimation delay={0.1} offset={100} direction="left">
        <figure
          className="absolute w-[400px] lg:w-[500px] xl:w-[584px] top-[-214px] left-[-100px] lg:top-[-250px] xl:top-[-295px] lg:left-[-52px] xl:left-[-52px] select-none pointer-events-none"
          aria-hidden="true">
          <Image src={gradient8} alt="Decorative gradient background" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="space-y-14">
          {/* heading text  */}
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2 className="max-w-[648px] md:w-full mx-auto text-center">
                Let&apos;s build your future, one
                <span className="text-primary-500"> investment at a time. </span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[760px] mx-auto text-center md:w-full">
                Let&apos;s build your future, one investment at a time. Whether you&apos;re just starting out or looking
                to expand your portfolio, every step you take today brings you closer to your goals.
              </p>
            </RevealAnimation>
          </div>
          {/* cta btn  */}
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <LinkButton
                href="/contact-us-page"
                rel="noopener noreferrer"
                className="btn btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark btn-xl"
                aria-label="Schedule your complimentary investment strategy consultation">
                Book your free strategy call
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      {/* right gradient */}
      <RevealAnimation delay={0.4} direction="right" offset={100}>
        <figure
          className="absolute w-[200px] lg:w-[300px] xl:w-[409px] bottom-[-50px] xl:bottom-[-72px] right-2.5 select-none pointer-events-none"
          aria-hidden="true">
          <Image src={gradient13} alt="Decorative gradient background" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default CTA;
