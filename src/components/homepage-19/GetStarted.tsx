import gradient32 from '@public/images/gradient/gradient-32.png';
import gradient33 from '@public/images/gradient/gradient-33.png';
import gradient34 from '@public/images/gradient/gradient-34.png';
import gradient9 from '@public/images/gradient/gradient-9.png';
import stepImg01 from '@public/images/home-page-19/step-img-01.png';
import stepImg02Dark from '@public/images/home-page-19/step-img-02-dark.png';
import stepImg02 from '@public/images/home-page-19/step-img-02.png';
import stepImg03Dark from '@public/images/home-page-19/step-img-03-dark.png';
import stepImg03 from '@public/images/home-page-19/step-img-03.png';
import stepImg04Dark from '@public/images/home-page-19/step-img-04-dark.png';
import stepImg04 from '@public/images/home-page-19/step-img-04.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const GetStarted = () => {
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[100px]" aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[60px] gap-y-12 items-start">
          <div className="col-span-12 xl:col-span-6 lg:sticky lg:top-28">
            <div className="space-y-7 xl:text-left text-center">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="xl:max-w-[629px] w-full xl:mx-0 mx-auto">What makes us stand out</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="xl:max-w-[544px]">
                    What distinguishes us is our commitment to empowering bold founders, dynamic teams, and innovative
                    entrepreneurs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="w-full">
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto">
                    Get started now
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <StackCardWrapper
              topOffset="13vh"
              gap="24px"
              initDelay={100}
              className="xl:max-w-full max-w-[820px] xl:mx-0 mx-auto">
              {/* Card one */}
              <StackCardItem>
                <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[465px] max-w-full sm:mx-0 mx-auto w-full overflow-hidden">
                  {/* gradient border img */}
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-99%] left-[-52%] md:-left-[103%] rotate-[-41deg] select-none pointer-events-none">
                    <Image src={gradient32} alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>
                  <figure className="p-8 bg-white dark:bg-black rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Innovative ideas</h5>
                      <p className="max-w-[250px]">Built with modern business challenges in mind</p>
                    </figcaption>
                    <figure className="max-w-[385px] w-full">
                      <Image src={stepImg01} alt="step" className="w-full md:max-h-[300px] md:min-h-[300px]" />
                    </figure>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card two */}
              <StackCardItem>
                <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[465px] max-w-full w-full overflow-hidden">
                  {/* gradient border img */}
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-76%] md:top-[-111%] left-[-62%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                    <Image src={gradient33} alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>
                  <figure className="p-8 bg-white dark:bg-black rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Top-rated features</h5>
                      <p className="max-w-[250px]">Only what you need, nothing you don&apos;t</p>
                    </figcaption>
                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <Image
                        src={stepImg02}
                        alt="step"
                        className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                      />
                      <Image
                        src={stepImg02Dark}
                        alt="step"
                        className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card three */}
              <StackCardItem>
                <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[465px] max-w-full w-full overflow-hidden">
                  {/* gradient border img */}
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-75%] md:top-[-111%] left-[-65%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                    <Image src={gradient34} alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>
                  <figure className="p-8 bg-white dark:bg-black rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Beautiful interface</h5>
                      <p className="max-w-[250px]">Designed to impress, built to perform</p>
                    </figcaption>
                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <Image
                        src={stepImg03}
                        alt="step"
                        className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                      />
                      <Image
                        src={stepImg03Dark}
                        alt="step"
                        className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card four */}
              <StackCardItem>
                <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[465px] max-w-full w-full overflow-hidden">
                  {/* gradient border img */}
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-97%] max-[376px]:left-[-40%] left-[-30%] md:left-[-60%] lg:left-[-48%] rotate-[245deg] select-none pointer-events-none">
                    <Image src={gradient9} alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>
                  <figure className="p-8 bg-white dark:bg-black rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Simple solutions</h5>
                      <p className="max-w-[250px]">No fluff, just functionality</p>
                    </figcaption>
                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <Image
                        src={stepImg04}
                        alt="step"
                        className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                      />
                      <Image
                        src={stepImg04Dark}
                        alt="step"
                        className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
