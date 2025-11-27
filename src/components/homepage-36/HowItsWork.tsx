import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import newArrow from '../../../public/images/icons/new-arrow.svg';
import RevealAnimation from '../animation/RevealAnimation';
const HowItsWork = () => {
  return (
    <section className="py-20 md:py-28 lg:py-34 xl:py-39">
      <div className="main-container">
        <div className="mb-10 md:mb-11 text-center lg:max-w-[730px] lg:mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">How It Work</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Generate AI Speech with NextSaaS</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Turn text into natural, human-like voices instantly with powerful AI speech technology.</p>
          </RevealAnimation>
        </div>
        <div className="flex justify-center items-center gap-8 relative flex-col sm:flex-row max-lg:flex-wrap">
          <RevealAnimation delay={0.4} direction="left" offset={80}>
            <div className="bg-ns-green rounded-[20px] max-w-[408px]  w-full flex flex-col justify-between p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-3 text-[52px] text-secondary"> </span>
              </div>
              <div className="max-md:space-y-0.5 space-y-1 text-center">
                <h3 className="text-heading-6 md:text-heading-5">Multiple voice options.</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Choose from a wide range of male and female voices to match your brand’s style.
                </p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5} direction="left" offset={100} duration={0.6}>
            <div className="bg-background-3 ring-8 ring-white rounded-[80px] py-9 px-4 absolute top-1/2 z-10 -translate-y-1/2 left-[31%] hidden lg:inline-block max-w-[52px] w-full overflow-hidden">
              <Marquee autoFill speed={30} direction="right" className="size-6 overflow-hidden ">
                <figure className="size-6 flex items-center justify-center">
                  <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                  <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                </figure>
              </Marquee>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.7} direction="left" offset={70} duration={0.5}>
            <div className="bg-background-3 rounded-[20px] max-w-[408px]  w-full flex flex-col justify-between p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-2 text-[52px] text-secondary"> </span>
              </div>
              <div className="max-md:space-y-0.5 space-y-1 text-center">
                <h3 className="text-heading-6 md:text-heading-5">Realistic &amp; clear audio</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Deliver lifelike speech that feels authentic and engaging for your audience.
                </p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.8} direction="left" offset={100} duration={0.6}>
            <div className="bg-background-3 z-10 ring-8 ring-white rounded-[80px] py-9 px-4 absolute top-1/2 -translate-y-1/2 right-[31%] hidden lg:inline-block max-w-[52px] w-full overflow-hidden">
              <Marquee autoFill speed={30} direction="right" className="size-6 overflow-hidden ">
                <figure className="size-6 flex items-center justify-center">
                  <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                  <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                </figure>
              </Marquee>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={1} direction="left" offset={80} duration={0.7}>
            <div className="bg-ns-green rounded-[20px] max-w-[408px]  w-full flex flex-col justify-between p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-8 text-[52px] text-secondary"> </span>
              </div>
              <div className="max-md:space-y-0.5 space-y-1 text-center">
                <h3 className="text-heading-6 md:text-heading-5">Fast &amp; easy conversion.</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Convert your text into speech within seconds — no technical skills required.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="text-center mt-14 group">
            <Link
              href="/pricing-02"
              className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-[90%] md:w-auto mx-auto md:mx-0">
              <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                Generate Voice
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

export default HowItsWork;
