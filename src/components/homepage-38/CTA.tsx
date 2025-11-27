{
  /* =========================
CTA section
===========================*/
}
import line1 from '@public/images/home-page-37/line-1.svg';
import line2 from '@public/images/home-page-37/line-2.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const CTA = () => {
  return (
    <section className="py-16 lg:py-22 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="text-center bg-background-12 rounded-4xl space-y-8 overflow-hidden mx-auto py-28 px-5 flex flex-col items-center justify-center relative z-0">
            <RevealAnimation delay={0.3} direction="left" offset={90} useSpring duration={2.4}>
              <figure className="absolute -left-[10%] select-none pointer-events-none md:-left-[5%] lg:left-0 -bottom-10">
                <Image src={line1} alt="cta image" className="select-none pointer-events-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="right" offset={90} useSpring duration={2.4}>
              <figure className="absolute -right-[16%] select-none pointer-events-none md:-right-[10%] lg:right-0 top-0">
                <Image src={line2} alt="cta image" className="select-none pointer-events-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>

            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h2 data-ns-animate="" data-delay="0.1">
                  Get noticed. get hired. get started.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  Create a resume that’s tailored, professional, and ready to
                  <br className="lg:block hidden" />
                  impress—powered by NestSaaS.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex flex-col md:flex-row gap-4 justify-center items-center max-md:w-full md:w-auto mx-auto md:mx-0">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="group list-none w-[90%] sm:w-auto">
                  <Link
                    href="/login-01"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-5 border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Get Started now
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
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
