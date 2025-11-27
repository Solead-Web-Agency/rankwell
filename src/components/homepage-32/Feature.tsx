import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Feature = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:pt-[100px] pt-[50px] sm:pb-8 md:pb-14 lg:pb-24 xl:pb-0">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row bg-background-2 dark:bg-background-8 bg-[url('/images/home-page-18/hero-bottom-bg.png')] bg-no-repeat bg-cover bg-top-right rounded-[20px] lg:max-w-full max-sm:max-w-[420px] mx-auto lg:mx-0">
            <div className="lg:flex-1/2 md:py-16 sm:py-10 py-8 lg:pl-14 px-8 lg:px-0">
              <div className="max-w-[587px] mb-9 space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2>Track metrics from all your tools</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p>
                    &nbsp;Whether you&apos;re a startup or an enterprise, NextSaaS connects with your favorite data
                    sources to unify everything into one visual command center.
                  </p>
                </RevealAnimation>
              </div>
              <div>
                <ul className="space-y-2">
                  <RevealAnimation delay={0.3}>
                    <li className="flex items-center gap-3">
                      <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={8}
                          viewBox="0 0 10 8"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </span>
                      <span className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                        Custom dashboards
                      </span>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <li className="flex items-center gap-3">
                      <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={8}
                          viewBox="0 0 10 8"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </span>
                      <span className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                        Flexible data connectors
                      </span>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <li className="flex items-center gap-3">
                      <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={8}
                          viewBox="0 0 10 8"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                            className="fill-white dark:fill-secondary"
                          />
                        </svg>
                      </span>
                      <span className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                        Scalable for any team
                      </span>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
              <RevealAnimation delay={0.6}>
                <div className="md:mt-[70px] mt-11 data-visualization-feature-button">
                  <LinkButton
                    href="/pricing-01"
                    className="text-tagline-2 font-medium btn btn-secondary btn-md dark:btn-transparent hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
                    Connect your data source
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="lg:flex-1/2 lg:pe-5">
              <RevealAnimation delay={0.3} direction="left">
                <div className="relative h-full">
                  <figure className="max-lg:flex max-lg:items-center max-lg:justify-center lg:absolute lg:right-0 lg:bottom-0 lg:max-w-[525px] sm:max-w-[500px] max-w-[300px] mx-auto">
                    <Image
                      src="/images/home-page-32/feature.png"
                      alt="Feature visualization dashboard"
                      className="w-fill h-fill"
                      width={525}
                      height={400}
                    />
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Feature;
