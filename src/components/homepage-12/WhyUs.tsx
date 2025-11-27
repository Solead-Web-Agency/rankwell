import whyUsPattern from '@public/images/home-page-12/why-us-pattern.png';
import selectUsImg02Dark from '@public/images/home-page-9/select-us-img-02-dark.png';
import selectUsImg02 from '@public/images/home-page-9/select-us-img-02.png';
import selectUsImg03Dark from '@public/images/home-page-9/select-us-img-03-dark.png';
import selectUsImg03 from '@public/images/home-page-9/select-us-img-03.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const WhyUs = () => {
  return (
    <section
      className="lg:pt-[100px] pt-16 lg:pb-[200px] pb-[100px] bg-background-2 dark:bg-background-6 overflow-hidden"
      aria-label="Reasons to select us">
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row xl:gap-[100px] lg:gap-20 gap-y-14">
          <div className="xl:space-y-[42px] space-y-9">
            <div className="max-w-[536px] md:w-full space-y-5 lg:mb-14 mb-8">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">Reasons to select us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2 className="xl:max-w-[446px]">
                    A highly effective
                    <span className="text-primary-500"> unified platform</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="max-w-[433px]">
                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                    &amp; After magazine.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <ul className="md:space-y-2" aria-label="Our key features">
              <RevealAnimation delay={0.5}>
                <li className="px-3 flex items-center gap-3 py-2">
                  <span className="ns-shape-1 text-[36px] text-secondary dark:text-accent" />
                  <p className="font-medium text-secondary dark:text-accent">Analyze Your Data</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="px-3 flex items-center gap-3 py-2">
                  <span className="ns-shape-47 text-[36px] text-secondary dark:text-accent" />
                  <p className="font-medium text-secondary dark:text-accent">Collaborate Securely</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7} start="top 85%">
                <li className="px-3 flex items-center gap-3 py-2">
                  <span className="ns-shape-34 text-[36px] text-secondary dark:text-accent" />
                  <p className="font-medium text-secondary dark:text-accent">Embedded Analytics</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.8} start="top 85%">
                <li className="px-3 flex items-center gap-3 py-2">
                  <span className="ns-shape-28 text-[36px] text-secondary dark:text-accent" />
                  <p className="font-medium text-secondary dark:text-accent">Easy &amp; Intuitive</p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <div>
            <div className="relative">
              <RevealAnimation delay={0.5} direction="up">
                <figure className="max-w-[370px] md:max-w-[382px] lg:max-w-[574px] xl:max-w-[802px] overflow-hidden">
                  <Image
                    src={whyUsPattern}
                    alt="Dashboard interface showing cash flow management"
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="right">
                <figure className="absolute w-full max-w-[150px] lg:max-w-[200px] xl:max-w-[253px] left-[190px] md:top-[73px] md:left-[210px] lg:left-[350px] lg:top-[130px] xl:left-[459px] xl:top-[170px] top-[68px] shadow-5 rounded-[10px] overflow-hidden">
                  <Image
                    src={selectUsImg03}
                    alt="Financial analytics chart"
                    className="size-full object-cover dark:hidden"
                    loading="lazy"
                  />
                  <Image
                    src={selectUsImg03Dark}
                    alt="Financial analytics chart"
                    className="size-full object-cover hidden dark:inline-block"
                    loading="lazy"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8} direction="right">
                <figure className="absolute max-w-[200px] bottom-[57px] right-[25px] md:right-[37px] xl:max-w-[395px] lg:max-w-[300px] w-full lg:right-[42px] lg:bottom-[87px] xl:right-[68px] xl:bottom-[124px] rounded-[10px] overflow-hidden">
                  <Image
                    src={selectUsImg02}
                    alt="Mobile app interface for cash management"
                    className="size-full object-cover dark:hidden"
                    loading="lazy"
                  />
                  <Image
                    src={selectUsImg02Dark}
                    alt="Mobile app interface for cash management"
                    className="size-full object-cover hidden dark:inline-block"
                    loading="lazy"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
