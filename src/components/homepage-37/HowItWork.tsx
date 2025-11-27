import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const HowItWork = () => {
  return (
    <section className="py-20 md:py-28 lg:py-30 xl:pt-39 xl:pb-30">
      <div className="main-container">
        <div className="mb-7 md:mb-19 text-center lg:max-w-[730px] lg:mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">How It Works</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Your AI journey in 3 steps</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[350px] mx-auto">
              From setup to automation, getting started with your AI gadget is effortless.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start xl:items-center gap-y-6 sm:gap-x-5 md:gap-x-8 relative">
          <RevealAnimation delay={0.6} direction="left">
            <div className="w-[calc(100%-35%)] hidden sm:block absolute top-[22%] min-[860px]:top-[27.5%] left-[17%] z-0 h-[1px] bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.2)_0_4px,_transparent_4px_8px)]" />
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-background-12 rounded-[60px] text-secondary">1</div>
              <div className="space-y-1">
                <h5>Connect your device</h5>
                <p className="text-tagline-1">Unbox and link your AI gadget to the NextSaaS app in just a few taps.</p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-background-12 rounded-[60px] text-secondary">2</div>
              <div className="space-y-1">
                <h5>Customize &amp; sync</h5>
                <p className="text-tagline-1">
                  Set preferences, link accounts, and let the system learn your lifestyle.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-background-12 rounded-[60px] text-secondary">3</div>
              <div className="space-y-1">
                <h5>Automate &amp; control</h5>
                <p className="text-tagline-1">Enjoy real-time insights, hands-free control, and smart automation.</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
        {/* btn  */}
        <RevealAnimation delay={0.7}>
          <div className="text-center mt-14 group">
            <Link
              href="/process-02"
              className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
              <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                See our process
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
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default HowItWork;
