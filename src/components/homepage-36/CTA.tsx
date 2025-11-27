import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[112px] xl:pt-[112px]">
      <div className="main-container">
        <div className="text-center max-w-[649px] space-y-8 mx-auto">
          <RevealAnimation delay={0.1}>
            <h2>Discover the key features of our mobile app.</h2>
          </RevealAnimation>
          <div className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-center gap-x-4">
            <RevealAnimation delay={0.4} direction="left" offset={50}>
              <li className="group list-none w-[90%] sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    App Store
                  </span>
                  <div className="relative overflow-hidden size-6">
                    {/* one  */}
                    <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="white" />
                        <path d="M5 5H7V7H5V5Z" fill="white" />
                        <path d="M14 8H16V10H14V8Z" fill="white" />
                        <path d="M8 8H10V10H8V8Z" fill="white" />
                        <path d="M17 11H19V13H17V11Z" fill="white" />
                        <path d="M11 11H13V13H11V11Z" fill="white" />
                        <path d="M14 14H16V16H14V14Z" fill="white" />
                        <path d="M8 14H10V16H8V14Z" fill="white" />
                        <path d="M11 17H13V19H11V17Z" fill="white" />
                        <path d="M5 17H7V19H5V17Z" fill="white" />
                      </svg>
                    </span>
                    {/* two  */}
                    <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="white" />
                        <path d="M5 5H7V7H5V5Z" fill="white" />
                        <path d="M14 8H16V10H14V8Z" fill="white" />
                        <path d="M8 8H10V10H8V8Z" fill="white" />
                        <path d="M17 11H19V13H17V11Z" fill="white" />
                        <path d="M11 11H13V13H11V11Z" fill="white" />
                        <path d="M14 14H16V16H14V14Z" fill="white" />
                        <path d="M8 14H10V16H8V14Z" fill="white" />
                        <path d="M11 17H13V19H11V17Z" fill="white" />
                        <path d="M5 17H7V19H5V17Z" fill="white" />
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50}>
              <li className="group list-none w-[90%] sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase bg-background-4 border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Google play
                  </span>
                  <div className="relative overflow-hidden size-6">
                    {/* one  */}
                    <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="white" />
                        <path d="M5 5H7V7H5V5Z" fill="white" />
                        <path d="M14 8H16V10H14V8Z" fill="white" />
                        <path d="M8 8H10V10H8V8Z" fill="white" />
                        <path d="M17 11H19V13H17V11Z" fill="white" />
                        <path d="M11 11H13V13H11V11Z" fill="white" />
                        <path d="M14 14H16V16H14V14Z" fill="white" />
                        <path d="M8 14H10V16H8V14Z" fill="white" />
                        <path d="M11 17H13V19H11V17Z" fill="white" />
                        <path d="M5 17H7V19H5V17Z" fill="white" />
                      </svg>
                    </span>
                    {/* two  */}
                    <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                        <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                        <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                        <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                        <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                        <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                        <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                        <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                        <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                        <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
