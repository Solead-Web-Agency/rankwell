import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import avatar4 from '@public/images/avatar/avatar-4.png';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-background-3 dark:bg-background-7">
      <div className="mb-14 text-center">
        <div className="space-y-5">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Client words</h2>
          </RevealAnimation>
        </div>
      </div>
      <div>
        <RevealAnimation delay={0.4}>
          <Marquee autoFill pauseOnHover direction="left" gradient className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-6 scroll-bar">
              <div className="min-w-xs sm:min-w-md md:min-w-[722px] p-8 md:p-14 rounded-[20px] backdrop-blur-[22px] space-y-6 sm:space-y-8 md:space-y-10 bg-background-2 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 transition-colors duration-300 ease-linear ml-6 {=$class}">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="size-12 md:size-[84px] rounded-full overflow-hidden bg-(image:--color-gradient-1)">
                      <Image
                        src={avatar2}
                        alt="avatar"
                        width={100}
                        height={100}
                        quality={100}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-tagline-2 font-medium lg:text-tagline-1">Sarah Johnson</h3>
                      <p className="text-tagline-3">TechCorp Solutions</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="px-2.5 py-1 rounded-full md:w-[74px] md:h-11 h-8 w-14 flex items-center justify-center bg-background-3 dark:bg-background-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_1182_25010)">
                          <path
                            d="M9.45202 0H11.2924L7.27177 5.08308L12.0017 12H8.29819L5.3975 7.80492L2.07844 12H0.236996L4.53741 6.56308L0 0H3.7975L6.41947 3.83446L9.45202 0ZM8.80612 10.7815H9.82587L3.24339 1.15446H2.1491L8.80612 10.7815Z"
                            className="fill-secondary dark:fill-white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_25010">
                            <rect width={12} height={12} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="max-w-[610px] md:text-heading-6 sm:text-tagline-1 text-tagline-2 text-wrap">
                    The platform transformed our workflow completely. The intuitive interface and powerful features
                    helped us increase productivity by 40%. Our team loves how seamless everything works together.
                  </p>
                </div>
              </div>
              <div className="min-w-xs sm:min-w-md md:min-w-[722px] p-8 md:p-14 rounded-[20px] backdrop-blur-[22px] space-y-6 sm:space-y-8 md:space-y-10 bg-background-2 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 transition-colors duration-300 ease-linear {=$activeCard}">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="size-12 md:size-[84px] rounded-full overflow-hidden bg-(image:--color-gradient-1)">
                      <Image
                        src={avatar3}
                        alt="avatar"
                        width={100}
                        height={100}
                        quality={100}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-tagline-2 font-medium lg:text-tagline-1">Michael Chen</h3>
                      <p className="text-tagline-3">InnovateLabs</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="px-2.5 py-1 rounded-full md:w-[74px] md:h-11 h-8 w-14 flex items-center justify-center bg-background-3 dark:bg-background-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_1182_25010)">
                          <path
                            d="M9.45202 0H11.2924L7.27177 5.08308L12.0017 12H8.29819L5.3975 7.80492L2.07844 12H0.236996L4.53741 6.56308L0 0H3.7975L6.41947 3.83446L9.45202 0ZM8.80612 10.7815H9.82587L3.24339 1.15446H2.1491L8.80612 10.7815Z"
                            className="fill-secondary dark:fill-white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_25010">
                            <rect width={12} height={12} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="max-w-[610px] md:text-heading-6 sm:text-tagline-1 text-tagline-2 text-wrap">
                    Outstanding customer support and lightning-fast performance. The analytics dashboard gives us
                    insights we never had before. This tool has become essential to our daily operations.
                  </p>
                </div>
              </div>
              <div className="min-w-xs sm:min-w-md md:min-w-[722px] p-8 md:p-14 rounded-[20px] backdrop-blur-[22px] space-y-6 sm:space-y-8 md:space-y-10 bg-background-2 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 transition-colors duration-300 ease-linear {=$class}">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="size-12 md:size-[84px] rounded-full overflow-hidden bg-(image:--color-gradient-1)">
                      <Image
                        src={avatar4}
                        alt="avatar"
                        width={100}
                        height={100}
                        quality={100}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-tagline-2 font-medium lg:text-tagline-1">Emily Rodriguez</h3>
                      <p className="text-tagline-3">Global Dynamics</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="px-2.5 py-1 rounded-full md:w-[74px] md:h-11 h-8 w-14 flex items-center justify-center bg-background-3 dark:bg-background-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_1182_25010)">
                          <path
                            d="M9.45202 0H11.2924L7.27177 5.08308L12.0017 12H8.29819L5.3975 7.80492L2.07844 12H0.236996L4.53741 6.56308L0 0H3.7975L6.41947 3.83446L9.45202 0ZM8.80612 10.7815H9.82587L3.24339 1.15446H2.1491L8.80612 10.7815Z"
                            className="fill-secondary dark:fill-white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_25010">
                            <rect width={12} height={12} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="max-w-[610px] md:text-heading-6 sm:text-tagline-1 text-tagline-2 text-wrap">
                    The integration capabilities are incredible. We&apos;ve streamlined our entire process and reduced
                    manual work by 60%. The ROI was immediate and the team adoption was seamless.
                  </p>
                </div>
              </div>
            </div>
          </Marquee>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonial;
