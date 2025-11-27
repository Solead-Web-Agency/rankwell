import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="bg-secondary py-28 relative overflow-hidden z-10">
      <RevealAnimation delay={0.2} direction="up" offset={100}>
        <figure className="cta-gradient absolute size-[1140px] -top-[150%] left-[5%] rotate-[10deg] -z-10 select-none pointer-events-none">
          <Image src={gradient4} alt="pricing bg" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="flex flex-col xl:flex-row xl:items-center items-center gap-y-12 justify-between">
          <div className="flex-1">
            <div className="space-y-3 xl:text-left text-center">
              <RevealAnimation delay={0.1}>
                <h2 className="md:max-w-[649px] max-w-[300px] xl:text-heading-2 text-heading-5 xl:mx-0 mx-auto text-white">
                  Need help? contact our experts
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="sm:max-w-[380px] max-w-[350px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-full text-accent/60">
                  Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec tellus cras
                  ornare.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="sm:flex-1">
            <div className="sm:max-w-[462px] max-w-full xl:ml-auto mx-auto xl:mx-0 w-full space-y-6">
              <RevealAnimation delay={0.3}>
                <form className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    aria-label="email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 sm:w-auto w-[90%] border border-accent/10 bg-accent/10 focus:ring-1 focus:ring-primary-500 px-5 py-3 rounded-full h-12 placeholder:text-tagline-1 placeholder:font-normal focus:outline-none text-accent placeholder:text-accent/60 font-normal"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-md h-12 sm:w-auto w-[90%] hover:btn-white dark:hover:btn-accent">
                    <span>Get started</span>
                  </button>
                </form>
              </RevealAnimation>
              <ul className="flex flex-col sm:flex-row items-center md:gap-x-12 gap-y-5">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span className="size-5 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        viewBox="0 0 10 7"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                          className="fill-accent"
                        />
                      </svg>
                    </span>
                    <span className="text-accent font-normal text-tagline-2">No credit card required</span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span className="size-5 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        viewBox="0 0 10 7"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                          className="fill-accent"
                        />
                      </svg>
                    </span>
                    <span className="text-accent font-normal text-tagline-2">14-Day free trial</span>
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
