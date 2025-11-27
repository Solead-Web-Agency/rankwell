import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import featureCardImg3Dark from '@public/images/home-page-5/feature-card-img-3-dark.svg';
import featureCardImg3 from '@public/images/home-page-5/feature-card-img-3.svg';
import featureImg04Dark from '@public/images/home-page-5/feature-img-04-dark.svg';
import featureImg04 from '@public/images/home-page-5/feature-img-04.svg';
import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-[100px] pb-[100px] md:pb-[85px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="mx-auto max-w-[628px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Features</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Discover our cutting-edge analytics features.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>Discover our cutting-edge analytics features designed to transform the way you understand</p>
              </RevealAnimation>
            </div>
          </div>
          {/* cards  */}
          <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
            {/* card one  */}

            <RevealAnimation delay={0.4}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                {/* card heading  */}
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Oversee project budgets</h3>
                  <p>Overseeing project budgets involves carefully planning, monitoring and managing the financial</p>
                </div>
                {/* card description   */}

                <RevealAnimation animationType="to" direction="up" offset={0} delay={0.7} rotation={-7}>
                  <div className="group dark:bg-background-8 absolute top-[44%] left-[7%] flex w-full max-w-[350px] flex-col items-center justify-center gap-y-9 overflow-hidden rounded-2xl bg-white px-6 py-8">
                    {/* avatar and heading  */}
                    <div className="w-full space-y-4">
                      {/* avatar  */}
                      <div className="flex justify-center -space-x-3.5">
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar1}
                          alt="Avatar 1"
                        />
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar2}
                          alt="Avatar 2"
                        />
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar3}
                          alt="Avatar 3"
                        />
                        <div className="bg-ns-green relative z-10 inline-flex size-11 items-center justify-center overflow-hidden rounded-full ring-4 ring-white dark:ring-black">
                          <figure>
                            {/* light Icon */}
                            <Image
                              src={arrowUpRight}
                              alt="Arrow Icon"
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0"
                            />
                            <Image
                              src={arrowUpRight}
                              alt="Arrow Icon"
                              className="absolute -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] group-hover:opacity-100"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="space-y-1 text-center">
                        <p className="text-heading-6 text-secondary dark:text-accent">20k+ Global Investment</p>
                        <p className="text-secondary dark:text-accent">Get Global Investment policy in the year</p>
                      </div>
                    </div>
                    {/* circle with text */}
                    <figure className="h-[136px] w-[302px] overflow-hidden">
                      <Image src={featureImg04} alt="circle with text" className="size-full object-cover dark:hidden" />
                      <Image
                        src={featureImg04Dark}
                        alt="circle with text"
                        className="hidden size-full object-cover dark:block"
                      />
                    </figure>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>
            {/* card two  */}

            <RevealAnimation delay={0.5}>
              <article className="bg-ns-green h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] pt-[29px] sm:px-[29px]">
                {/* card heading  */}
                <div className="space-y-4 text-center xl:text-left">
                  <h3 className="text-secondary text-heading-5">Optimized data workflows</h3>
                  <p className="dark:text-secondary/60">
                    Optimized data workflows refer to the streamlined and efficient processes for collecting
                  </p>
                </div>
                {/* card description   */}
                <RevealAnimation delay={0.5} offset={100}>
                  <div className="bg-secondary w-full space-y-9 rounded-2xl px-6 py-8">
                    {/* chart heading  */}
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-accent text-heading-6">Revenue</h4>
                        <p className="text-accent/60">20%</p>
                      </div>
                      <p className="text-accent/60">$5230</p>
                    </div>
                    {/* bar chart  */}
                    <div className="flex items-end gap-[30px] pb-[70px]">
                      <div className="bg-ns-green h-[115px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[81px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[160px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[101px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[134px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[177px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[47px] w-4 rounded-t-4xl" />
                    </div>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>
            {/* card three  */}

            <RevealAnimation delay={0.6}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                {/* card heading  */}
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Comprehend user interactions</h3>
                  <p>Comprehending user interactions involves understanding how users engage with a</p>
                </div>
                {/* card description   */}
                <RevealAnimation animationType="to" delay={0.7} rotation={7} offset={0}>
                  <div className="group dark:bg-background-8 absolute top-[43%] -right-1.5 w-[350px] space-y-2 rounded-2xl bg-white px-6 py-8 pb-20 sm:right-[8%]">
                    {/* chart heading  */}
                    <div className="flex w-full items-center justify-between">
                      <h4 className="text-heading-6">User activity</h4>
                      <button aria-label="More options">
                        <svg xmlns="http://www.w3.org/2000/svg" width={6} height={16} viewBox="0 0 6 16" fill="none">
                          <path
                            d="M3.48151 3.91788C2.65926 3.81692 2.07454 3.06851 2.17549 2.24626C2.27645 1.42401 3.02487 0.839283 3.84712 0.940243C4.66937 1.0412 5.25409 1.78961 5.15313 2.61187C5.05217 3.43412 4.30376 4.01884 3.48151 3.91788Z"
                            fill="#1A1A1C"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M2.75029 9.87316C1.92804 9.7722 1.34332 9.02379 1.44428 8.20153C1.54524 7.37928 2.29365 6.79456 3.1159 6.89552C3.93815 6.99648 4.52288 7.74489 4.42192 8.56714C4.32096 9.3894 3.57255 9.97412 2.75029 9.87316Z"
                            fill="#1A1A1C"
                            fillOpacity="0.2"
                          />
                          <path
                            d="M2.01908 15.8284C1.19683 15.7275 0.612102 14.9791 0.713062 14.1568C0.814022 13.3346 1.56243 12.7498 2.38469 12.8508C3.20694 12.9518 3.79166 13.7002 3.6907 14.5224C3.58974 15.3447 2.84133 15.9294 2.01908 15.8284Z"
                            fill="#1A1A1C"
                            fillOpacity="0.2"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* line chart  */}
                    <figure>
                      <Image src={featureCardImg3} alt="User activity chart" className="dark:hidden" />
                      <Image src={featureCardImg3Dark} alt="User activity chart" className="hidden dark:block" />
                    </figure>
                    {/* avatar and text  */}
                    <div className="flex flex-col gap-y-2">
                      <div className="flex items-start -space-x-3.5">
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar1}
                          alt="Avatar 1"
                        />
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar2}
                          alt="Avatar 2"
                        />
                        <Image
                          className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white dark:ring-black"
                          src={avatar3}
                          alt="Avatar 3"
                        />
                        <div className="bg-ns-green relative z-10 inline-flex size-11 items-center justify-center overflow-hidden rounded-full ring-4 ring-white dark:ring-black">
                          <figure>
                            {/* light Icon */}
                            <Image
                              src={arrowUpRight}
                              alt="Arrow Icon"
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0"
                            />
                            <Image
                              src={arrowUpRight}
                              alt="Arrow Icon"
                              className="absolute -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] group-hover:opacity-100"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-secondary text-heading-6 dark:text-accent">Trusted by 20k+</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
