import { cn } from '@/utils/cn';
import gradient6 from '@public/images/gradient/gradient-6.png';
import realTimeChart from '@public/images/home-page-20/real-time-chart.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Cross-functional visibility',
    description: 'Connect risks across silos',
    icon: 'ns-shape-34',
  },
  {
    id: 2,
    title: 'Automation & workflows',
    description: 'Reduce manual work and errors',
    icon: 'ns-shape-36',
  },
  {
    id: 3,
    title: 'Customizable modules',
    description: 'Tailor solutions to your industry',
    icon: 'ns-shape-8',
  },
  {
    id: 4,
    title: 'Real-time data',
    description: 'See your app in action as you create it',
    icon: 'ns-shape-8',
  },
  {
    id: 5,
    title: 'Enterprise-grade security',
    description: 'Your data, protected and compliant',
    icon: 'ns-shape-41',
  },
  {
    id: 6,
    title: 'Smart insights',
    description: 'Actionable reports at a glance',
    icon: 'ns-shape-3',
  },
];

const FeatureV2 = () => {
  return (
    <section className="relative xl:py-[200px] md:py-[100px] py-16 bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="md:py-14 sm:py-10 py-8 md:px-[42px] sm:px-8 px-5 rounded-4xl bg-white dark:bg-background-8 space-y-[70px] relative overflow-hidden">
          <RevealAnimation delay={0.3} direction="up" offset={100}>
            <figure className="absolute -top-[15%] pointer-events-none lg:-top-[30%] xl:-top-[27%] -right-[72%] min-[470px]:-right-[60%] sm:-right-[40%] lg:-right-[24%] xl:-right-[21%] blur-[4px] rotate-[103deg] max-w-[420px] max-h-[480px] select-none">
              <Image src={gradient6} className="w-full h-full object-cover" alt="NextSass" />
            </figure>
          </RevealAnimation>
          <div className="sm:space-y-7 space-y-4 sm:text-left text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="lg:max-w-[731px] sm:max-w-[500px] max-w-[350px] sm:mx-0 mx-auto w-full">
                Strategic risk management that moves you forward
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div>
                <LinkButton
                  href="/analytics"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent w-[90%] md:w-auto mx-auto">
                  Learn our approach
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <div className="grid grid-cols-12 xl:gap-[60px] lg:gap-10 md:gap-6 min-[575px]:gap-8 gap-y-8">
              <div className="col-span-12 min-[575px]:col-span-6 lg:col-span-3 lg:order-1 order-1">
                <div className="min-[575px]:space-y-8 space-y-6">
                  {data.slice(0, 3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="left" offset={100} key={item.id}>
                      <div className="space-y-4">
                        <div className="min-[575px]:text-left text-center">
                          <span className={cn('text-[36px] text-secondary dark:text-accent inline-block', item.icon)} />
                        </div>
                        <div className="min-[575px]:text-left text-center">
                          <p className="font-medium text-secondary dark:text-accent">{item.title}</p>
                          <p className="text-tagline-2">{item.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:order-2 order-3">
                <RevealAnimation delay={0.3} offset={100}>
                  <div className="xl:p-8 sm:p-6 p-4 rounded-[20px] bg-background-2 dark:bg-background-5 space-y-6">
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">Real-time data</h3>
                      <p>See your app in action as you create it</p>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-4 gap-y-4">
                      <div className="flex-1 h-full rounded-2xl overflow-hidden bg-background-3 dark:bg-background-8">
                        <div className="bg-ns-green py-2 px-[25px] flex items-center justify-between">
                          <p className="text-tagline-2 text-secondary">Mon</p>
                          <p className="text-tagline-2">12</p>
                        </div>
                        <div className="py-2 px-4">
                          <div className="py-9 space-y-2">
                            <div className="p-2 rounded-lg bg-background-2 dark:bg-background-5">
                              <p className="text-tagline-2 text-secondary dark:text-accent">05:00</p>
                              <p className="text-tagline-2">Combo room</p>
                            </div>
                            <div className="p-2 rounded-lg dark:bg-background-7">
                              <p className="text-tagline-2 text-secondary dark:text-accent">09:00</p>
                              <p className="text-tagline-2">Combo room</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 h-full rounded-2xl overflow-hidden bg-background-3 dark:bg-background-8">
                        <div className="p-4">
                          <p className="text-secondary dark:text-accent text-tagline-2">Customers</p>
                          <figure className="mt-5 mb-4 max-w-[150px] mx-auto w-full">
                            <Image src={realTimeChart} alt="customer" />
                          </figure>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Total customers</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">45%</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Returning’s customers</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">100%</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-tagline-3">Avg. spent per visit</p>
                              <p className="text-tagline-3 text-secondary dark:text-accent">45%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <div className="col-span-12 min-[575px]:col-span-6 lg:col-span-3 lg:order-3 order-2">
                <div className="min-[575px]:space-y-8 space-y-6">
                  {data.slice(3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="right" offset={100} key={item.id}>
                      <div className="space-y-4">
                        <div className="min-[575px]:text-left text-center">
                          <span className={cn('text-[36px] text-secondary dark:text-accent inline-block', item.icon)} />
                        </div>
                        <div className="min-[575px]:text-left text-center">
                          <p className="font-medium text-secondary dark:text-accent">{item.title}</p>
                          <p className="text-tagline-2">{item.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
