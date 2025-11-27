import aboutDataIntegration1Dark from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
import aboutDataIntegration1 from '@public/images/home-page-6/about-data-integration-1.png';
import aboutDataIntegration2Dark from '@public/images/home-page-6/about-data-integration-2-dark.svg';
import aboutDataIntegration2 from '@public/images/home-page-6/about-data-integration-2.svg';
import aboutDataIntegration3Dark from '@public/images/home-page-6/about-data-integration-3-dark.svg';
import aboutDataIntegration3 from '@public/images/home-page-6/about-data-integration-3.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const integrationFeatures = [
  {
    id: 1,
    text: 'On Demand Support',
    delay: 0.6,
  },
  {
    id: 2,
    text: 'Information Sharing',
    delay: 0.7,
  },
  {
    id: 3,
    text: 'Cloud Technology',
    delay: 0.8,
  },
];

const Integration = () => {
  return (
    <section className="lg:pt-[100px] pt-[50px] md:pt-[75px] lg:pb-[100px] pb-[50px] md:pb-[75px] bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-16">
          <div className="col-span-12 lg:col-span-6 lg:pt-[150px] pt-[100px]">
            <div className="relative z-10 inline-block max-lg:left-1/2 max-lg:-translate-x-1/2">
              <RevealAnimation delay={0.2} direction="left" offset={100}>
                <figure className="max-w-[358px] rounded-[20px]">
                  <Image
                    src={aboutDataIntegration1}
                    alt="about-data-integration"
                    className="size-full dark:hidden rounded-[20px] object-cover"
                  />
                  <Image
                    src={aboutDataIntegration1Dark}
                    alt="about-data-integration"
                    className="size-full hidden dark:inline-block rounded-[20px] object-cover"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="right">
                <figure className="absolute max-sm:w-[200px] md:w-[250px] lg:w-[260px] xl:w-auto -top-12 -right-14 sm:-top-[90px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration2}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration2Dark}
                    alt="about-data"
                    className="size-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right">
                <figure className="absolute max-sm:w-[130px] bottom-12 -right-14 sm:bottom-[85px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] -z-10 rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration3}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration3Dark}
                    alt="about-data-integration"
                    className="size-full object-cover hidden dark:inline-block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3 lg:text-left text-center">
              <RevealAnimation delay={0.3}>
                <span className="badge badge-cyan">Data integrations</span>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <h2 className="max-w-[592px] w-full lg:mx-0 mx-auto">
                  A clear vision is essential for understanding wealth dynamics.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="lg:max-w-[592px] max-w-[450px] w-full lg:mx-0 mx-auto">
                  A clear vision is essential for understanding wealth dynamics because it provides direction, purpose,
                  and clarity in navigating financial growth and sustainability.
                </p>
              </RevealAnimation>
            </div>
            <div className="pt-8 pb-14">
              <ul className="flex items-center lg:justify-start justify-center xl:gap-6 gap-4 flex-wrap">
                {integrationFeatures.map((feature) => (
                  <RevealAnimation key={feature.id} delay={feature.delay}>
                    <li className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                            className="stroke-secondary dark:stroke-accent"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="lg:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent/60">
                        {feature.text}
                      </span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
            <RevealAnimation delay={0.8}>
              <div className="lg:text-left text-center">
                <LinkButton
                  href="/integration-01"
                  className="btn btn-primary hover:btn-secondary btn-xl max-[376px]:w-full max-[426px]:w-[87%] md:w-auto dark:hover:btn-accent">
                  Start your journey
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
