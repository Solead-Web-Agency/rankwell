import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import balanceDark from '@public/images/home-page-10/balance-dark.png';
import balance from '@public/images/home-page-10/balance.png';
import controlCardDark from '@public/images/home-page-10/control-card-dark.png';
import controlCard from '@public/images/home-page-10/control-card.png';
import dailyPaymentDark from '@public/images/home-page-10/daily-payment-dark.png';
import dailyPayment from '@public/images/home-page-10/daily-payment.png';
import earningDark from '@public/images/home-page-10/earning-dark.png';
import earning from '@public/images/home-page-10/earning.png';
import revenueDark from '@public/images/home-page-10/revenue-dark.png';
import revenue from '@public/images/home-page-10/revenue.png';
import timeIncreaseDark from '@public/images/home-page-10/time-increase-dark.png';
import timeIncrease from '@public/images/home-page-10/time-increase.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="lg:py-[100px] py-[60px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-5 mb-10 md:mb-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Enterprise-grade security &amp; intelligence</h2>
          </RevealAnimation>
        </div>
        <div className="space-y-[42px]">
          <RevealAnimation delay={0.3}>
            <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Big data consulting</h3>
                      <p className="max-w-[410px] w-full lg:text-tagline-1 text-tagline-2">
                        Utilize comprehensive data security frameworks to effectively safeguard sensitive information
                        from unauthorized access and breaches.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/big-data-consulting"
                        className="btn hover:btn-secondary dark:hover:btn-white btn-primary btn-md block sm:inline-block w-[90%] sm:w-auto mx-auto">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center md:justify-end lg:gap-8 gap-5">
                    <figure className="xl:max-w-[233px] max-w-[200px] w-full rounded-2xl overflow-hidden">
                      <Image src={timeIncrease} alt="time increase" className="size-full object-cover dark:hidden" />
                      <Image
                        src={timeIncreaseDark}
                        alt="time increase"
                        className="size-full object-cover hidden dark:block"
                      />
                    </figure>
                    <figure className="xl:max-w-[350px] max-w-[200px] w-full rounded-2xl overflow-hidden">
                      <Image src={controlCard} alt="control car" className="size-full object-cover dark:hidden" />
                      <Image
                        src={controlCardDark}
                        alt="control card"
                        className="size-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center md:gap-8 gap-5">
                    <figure className="xl:max-w-[326px] max-w-[200px] max-h-[317px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={revenue} alt="revenue" className="size-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="size-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="xl:max-w-[255px] max-w-[200px] max-h-[178px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={balance} alt="balance" className="size-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="size-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Machine learning &amp; AI</h3>
                      <p className="max-w-[493px] w-full lg:text-tagline-1 text-tagline-2">
                        Utilize advanced predictive analytics to proactively identify potential threats before they
                        escalate. by analyzing patterns and trends in data.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/machine-learning-and-ai"
                        className="btn btn-white dark:btn-transparent hover:btn-primary btn-md block sm:inline-block w-[90%] sm:w-auto mx-auto">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Business analysis</h3>
                      <p className="max-w-[380px] w-full lg:text-tagline-1 text-tagline-2">
                        Continuously monitor for vulnerabilities and implement proactive measures to prevent cyber
                        attacks before they can occur.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/business-analysis"
                        className="btn dark:btn-transparent btn-white btn-md block sm:inline-block w-[90%] sm:w-auto mx-auto hover:btn-primary">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-start sm:flex-row flex-col md:gap-8 gap-5">
                    <figure className="xl:max-w-[350px] sm:max-w-[200px] max-h-[345px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={earning} alt="earning" className="size-full sm:object-cover dark:hidden" />
                      <Image src={earningDark} alt="earning" className="size-full sm:object-cover hidden dark:block" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="xl:max-w-[286px] sm:max-w-[200px] max-h-[190px] h-full w-full rounded-2xl overflow-hidden">
                        <Image
                          src={dailyPayment}
                          alt="daily payment"
                          className="size-full sm:object-cover dark:hidden"
                        />
                        <Image
                          src={dailyPaymentDark}
                          alt="daily payment"
                          className="size-full sm:object-cover hidden dark:block"
                        />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex sm:-space-x-3.5 -space-x-2 justify-center sm:justify-start cursor-pointer">
                            <Image
                              className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white dark:ring-black bg-ns-green"
                              src={avatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white dark:ring-black bg-ns-green"
                              src={avatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="inline-block sm:size-11 size-7 shrink-0 rounded-full relative z-0 ring-4 ring-white dark:ring-black bg-ns-green"
                              src={avatar3}
                              alt="Avatar 3"
                            />
                            <div className="inline-flex items-center relative z-10 justify-center sm:size-11 size-7 shrink-0 bg-ns-green rounded-full ring-4 ring-white dark:ring-black text-secondary/80 text-tagline-3 font-medium">
                              99+
                            </div>
                          </div>
                          <div className="text-center sm:text-left">
                            <p className="font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                            <p className="text-tagline-2 font-normal">Customers across the globe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
