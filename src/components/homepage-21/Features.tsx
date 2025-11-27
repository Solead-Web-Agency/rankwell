import { DownArrowIcon, UpArrowIcon } from '@/icons';
import gradientImg from '@public/images/gradient/gradient-14.png';
import starEmojiImg from '@public/images/home-page-21/star-emoji.png';
import visaCardImg from '@public/images/home-page-21/visa-card.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const Features = () => {
  return (
    <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 lg:col-span-7 xl:col-span-8">
              <div className="relative overflow-hidden rounded-[20px] border-8 border-white dark:border-background-9">
                <RevealAnimation delay={0.2} direction="up" offset={200}>
                  <div className="absolute -z-0 -top-[80%] min-[400px]:-top-[105%] sm:-top-[110%] lg:-top-[90%] xl:-top-[80%] -right-[30%] rotate-[274deg] max-w-[560px] select-none pointer-events-none">
                    <Image src={gradientImg} alt="gradient" />
                  </div>
                </RevealAnimation>
                <div className="p-6 md:p-8 h-full bg-background-3 dark:bg-background-6 space-y-8 md:space-y-14">
                  <div className="space-y-2 relative z-10">
                    <span className="badge badge-green mb-3 md:mb-5">How it works</span>
                    <h2 className="text-secondary dark:text-accent md:max-w-[564px]">
                      Modern tools for real-life money management
                    </h2>
                    <p className="text-secondary/60 dark:text-accent/80 md:max-w-[480px]">
                      Modern tools simplify managing your money like never before. from clear, customizable budgets to
                      intelligent savings goals.
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/features-01"
                      className="btn btn-md btn-secondary hover:btn-primary dark:btn-transparent w-full md:w-auto">
                      Learn more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
              <div className="py-6 px-4 md:px-7 rounded-[20px] h-full border-8 border-white dark:border-background-9 bg-background-3 dark:bg-background-6 space-y-6 rounded-br-[20px] rounded-bl-[20px]">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Crystal-clear budgeting</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[206px]">
                    Create, monitor, and adjust budgets with ease.
                  </p>
                </div>
                <div className="bg-white dark:bg-background-5 rounded-2xl p-6">
                  <div className="text-left">
                    <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Balance</span>
                    <h3 className="text-heading-5 flex items-center mt-2 mb-[30px] lg:mb-4 xl:mb-[30px]">
                      $
                      <NumberAnimation number={48257} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-background-4 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary">
                        <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                          <DownArrowIcon className="size-[8px] dark:fill-background-5" />
                        </span>
                        Income
                      </div>
                      <div className="text-lg flex items-center dark:text-secondary font-medium leading-[1.5]">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-white">
                        <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                          <UpArrowIcon className="size-[9px] dark:fill-background-5" />
                        </span>
                        Expenses
                      </div>
                      <div className="text-lg flex items-center font-medium leading-[1.5] text-white">
                        $
                        <NumberAnimation number={2321} speed={2000} interval={200} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="py-6 px-4 md:px-7 rounded-[20px] h-full border-8 border-white dark:border-background-9 bg-background-3 dark:bg-background-6 space-y-6 rounded-br-[20px] rounded-bl-[20px]">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Smarter saving goals</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[276px]">
                    Set personal targets and watch your savings grow over time.
                  </p>
                </div>
                <div className="bg-white dark:bg-background-5 rounded-2xl p-6" aria-label="Tottal saving ">
                  <div className="text-left">
                    <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Total saving</span>
                    <h3 className="total-saving text-heading-5 mt-2 mb-[30px]">$56,324</h3>
                  </div>
                  <div
                    data-progress-item=""
                    data-progress-value={88}
                    data-progress-duration="2.5"
                    className="bg-background-2 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-tagline-1 dark:text-accent">May</span>
                      <span className="flex items-center gap-1 text-tagline-1 font-medium dark:text-accent">
                        $
                        <NumberAnimation number={56324} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </span>
                    </div>
                    <Progress />
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="py-6 px-4 md:px-7 rounded-[20px] h-full border-8 border-white dark:border-background-9 bg-background-3 dark:bg-background-6 space-y-6 rounded-br-[20px] rounded-bl-[20px]">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Debt tracking</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[344px]">
                    Organize your loans and credit card payments with real-time progress updates.
                  </p>
                </div>
                <figure className="rounded-2xl overflow-hidden">
                  <Image src={visaCardImg} alt="Visa" className="w-full h-full object-cover" />
                </figure>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="py-6 px-4 md:px-7 rounded-[20px] h-full border-8 border-white dark:border-background-9 bg-background-3 dark:bg-background-6 space-y-6 rounded-br-[20px] rounded-bl-[20px]">
                <div className="space-y-1">
                  <h5 className="text-secondary dark:text-accent">Cash flow overview</h5>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-[310px]">
                    Get a visual breakdown of your income, bills, and spending patterns.
                  </p>
                </div>
                <div className="bg-background-2 dark:bg-background-5 relative flex items-center justify-center py-[30px] md:py-5 lg:py-[30px] rounded-2xl">
                  <figure>
                    <Image src={starEmojiImg} alt="Star emoji" />
                  </figure>
                  <div className="cash-flow-wrapper absolute top-1/2 -translate-y-[180%] -translate-x-[114%] -rotate-[24deg]">
                    <div className="text-heading-5 flex items-center gap-1 py-1 px-3.5 rounded-[31px] text-white dark:text-secondary dark:bg-accent bg-secondary">
                      <NumberAnimation number={90} speed={1800} interval={100} rooms={2} heightSpaceRatio={2.5} />%
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

export default Features;
