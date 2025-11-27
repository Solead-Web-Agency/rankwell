import gradient32 from '@public/images/gradient/gradient-32.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative">
      <div className="lg:main-container xl:max-w-[1440px] mx-auto w-full -mb-10 md:-mb-8 lg:-mb-6 px-5 lg:px-0 xl:-mb-14 relative z-10">
        <div className="py-[76px] bg-secondary dark:bg-background-8 rounded-4xl relative z-10 overflow-hidden">
          <RevealAnimation delay={0.3} direction="left" offset={100}>
            <figure className="cta-bg-gradient -z-10 absolute -left-[30%] -top-[90%] md:-left-[30%] md:-top-[190%] lg:-left-[30%] xl:-left-[15%] lg:-top-[190%] size-[550px] md:size-[1050px] pointer-events-none select-none">
              <Image src={gradient32} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="text-center space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-green">Let’s started</span>
            </RevealAnimation>
            <div className="space-y-6">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[830px] mx-auto text-white">Ready to build real wealth?</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60 px-4 sm:px-0">Let’s take the guesswork out of your financial future.</p>
                </RevealAnimation>
              </div>
              <ul className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-x-3 justify-center">
                <RevealAnimation delay={0.4} direction="left" offset={50}>
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/signup-02"
                      className="btn btn-primary border-0 hover:btn-white btn-md w-[90%] sm:w-auto">
                      Sign up free
                    </LinkButton>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="right" offset={50}>
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-white hover:btn-primary btn-md dark:btn-transparent w-[90%] sm:w-auto">
                      Talk to a wealth coach
                    </LinkButton>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
