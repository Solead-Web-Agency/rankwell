import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-28 bg-white dark:bg-background-6" aria-label="Use Case Overview">
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="xl:max-w-[649px] lg:max-w-[476px] w-full space-y-5 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Get started</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent text-heading-4 lg:text-heading-2 max-w-[449px] lg:text-left mx-auto lg:mx-0">
                  Ready to
                  <span className="text-primary-500"> scale your </span>
                  property business
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>Start your free trial today and see your ideas come to life easily and creatively.</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-[80%]">
            <RevealAnimation delay={0.4}>
              <form
                action="#"
                method="post"
                className="flex items-center flex-col gap-5 md:flex-row justify-start lg:gap-3">
                <input
                  type="email"
                  name="email"
                  id="userEmail-cta-v3"
                  placeholder="Enter your email"
                  className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 placeholder:font-normal font-normal"
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-full max-[376px]:w-[97%] md:w-[28%] lg:w-auto">
                  <span>Get started</span>
                </button>
              </form>
            </RevealAnimation>
            <ul className="flex items-center flex-col md:flex-row justify-center lg:justify-start gap-y-5 md:gap-x-[42px]">
              <RevealAnimation delay={0.5}>
                <li className="flex items-center justify-center gap-2">
                  <span className="size-[18px] bg-secondary dark:bg-accent shrink-0 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={7}
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                      className="fill-white dark:fill-secondary">
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center justify-center gap-2">
                  <span className="size-[18px] bg-secondary dark:bg-accent shrink-0 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={7}
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                      className="fill-white dark:fill-secondary">
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p className="text-tagline-3 sm:text-tagline-2">14-Day free trial</p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
