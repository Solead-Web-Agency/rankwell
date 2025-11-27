import gradient12 from '@public/images/gradient/gradient-12.png';
import heroBottomImage from '@public/images/home-page-18/hero-bottom-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
const Invitation = () => {
  return (
    <section className="lg:mt-[220px] md:mt-[150px] sm:mt-[100px] mt-[50px]">
      <div className="main-container">
        <div className="relative z-[20]">
          <div className="relative z-0">
            <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]">
              <RevealAnimation delay={0.5} direction="right" offset={100} start="top 10%">
                <figure className="-z-10 absolute lg:-top-[170%] md:-top-[65%] sm:-top-[75%] select-none -top-[110%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] pointer-events-none">
                  <Image src={gradient12} alt="gradient" />
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="sm:flex-1/2 lg:py-16 py-10 sm:py-6 md:py-10 lg:pl-14 sm:pl-10 sm:px-0 px-6">
                <div className="md:mb-14 sm:mb-10 mb-6 md:max-w-[420px] max-w-[340px] sm:mx-0 mx-auto sm:text-left text-center">
                  <RevealAnimation delay={0.1}>
                    <h5 className="md:mb-7 sm:mb-5 mb-3 lg:text-heading-5 md:text-heading-6 text-tagline-1">
                      Join thousands of people who trust NextSaaS to protect what matters most—affordably and
                      efficiently.
                    </h5>
                  </RevealAnimation>
                  <RevealAnimation delay={0.1}>
                    <p className="font-medium text-secondary dark:text-accent">Jhon Lee</p>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="text-tagline-2">Head of customer Success</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div className="sm:text-left text-center">
                    <LinkButton
                      href="/our-services-02"
                      className="text-tagline-2 font-medium btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md w-[90%] md:w-auto mx-auto md:mx-0">
                      Learn More
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <div className="sm:flex-1/2 lg:pe-[42px] 2xl:pe-[200px]">
                <div className="relative h-full">
                  <RevealAnimation delay={0.4} direction="left" offset={100}>
                    <figure className="max-md:flex max-md:items-center max-md:justify-center md:absolute md:right-0 md:bottom-0 lg:max-w-[525px] md:max-w-[350px] sm:max-w-[300px] max-w-[250px] md:mx-0 mx-auto">
                      <Image src={heroBottomImage} alt="shape" className="w-full h-full" />
                    </figure>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Invitation.displayName = 'Invitation';
export default Invitation;
