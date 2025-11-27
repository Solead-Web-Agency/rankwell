import gradient6Img from '@public/images/gradient/gradient-6.png';
import profitChartImg from '@public/images/home-page-26/profit-chart.png';
import profitDarkChartImg from '@public/images/home-page-26/profit-dark-chart.png';
import selectUsImg01Dark from '@public/images/home-page-28/select-us-img-01-dark.png';
import selectUsImg01 from '@public/images/home-page-28/select-us-img-01.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const crmFeatures = [
  {
    id: 1,
    icon: 'ns-shape-8',
    text: 'A version for offline use is available.',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    text: 'Designed to be both scalable and secure.',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    text: 'Feature powered by artificial intelligence.',
  },
  {
    id: 4,
    icon: 'ns-shape-21',
    text: 'It offers both scalability and robust security.',
  },
];

const SelectUs = () => {
  return (
    <section className="py-[100px] bg-background-3 dark:bg-background-7 overflow-hidden">
      <div className="main-container">
        <div className="flex items-center justify-between flex-col gap-y-14 lg:gap-0 lg:flex-row relative">
          {/* left side  */}
          <div className="space-y-14">
            {/* heading  */}
            <div className="max-w-[536px] md:w-full space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">Reasons to select us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Easily manage your cash flow.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                    &amp; After magazine.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            {/* list  */}
            <ul className="space-y-2" aria-label="Key CRM features">
              {crmFeatures.map((feature, idx) => (
                <RevealAnimation key={feature.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-start gap-3 p-3">
                    <div className="overflow-hidden" aria-hidden="true">
                      <span className={`${feature.icon} text-[36px] text-secondary dark:text-accent`} />
                    </div>
                    <h3 className="text-tagline-1 font-normal leading-[150%] text-secondary dark:text-accent">
                      {feature.text}
                    </h3>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          {/* right side  */}
          <RevealAnimation delay={0.2} offset={100}>
            <div
              className="relative w-[320px] lg:w-[431px] xl:w-[459px] md:w-[459px] h-[450px] md:h-[598px] lg:h-[489px] xl:h-[598px] bg-background-1 dark:bg-background-6 rounded-[20px] overflow-hidden"
              role="presentation">
              {/* bg img  */}
              <figure
                className="size-[700px] select-none pointer-events-none absolute top-[-173px] right-[-80px] overflow-hidden rotate-[240deg] z-10"
                aria-hidden="true">
                <Image src={gradient6Img} alt="Decorative gradient background" className="size-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          {/* right side img one  */}
          <RevealAnimation delay={0.5} offset={100} duration={2} useSpring={true} direction="right">
            <figure
              className="w-[153px] lg:w-[188px] xl:w-[210px] 2xl:w-[253px] md:w-[253px] overflow-hidden z-20 absolute top-[590px] lg:top-10 max-[376px]:top-[666px] right-[-5px] lg:right-[-19px] xl:right-[-15px] 2xl:right-[-83px] rounded-xl sm:rounded-[20px]"
              aria-hidden="true">
              <Image
                src={selectUsImg01}
                alt="CRM dashboard visualization"
                className="size-full object-cover dark:hidden"
              />
              <Image
                src={selectUsImg01Dark}
                alt="CRM dashboard visualization"
                className="size-full object-cover hidden dark:inline-block"
              />
            </figure>
          </RevealAnimation>
          {/* right side img three  */}
          <RevealAnimation delay={0.7} offset={100} duration={2} useSpring={true} direction="right">
            <figure
              className="md:max-w-[364px] max-w-[250px] lg:max-w-[300px] xl:max-w-[324px] 2xl:max-w-[395px] w-full shadow-3 overflow-hidden z-20 absolute bottom-[46px] right-[10px] md:right-[12px] lg:right-[-16px] xl:right-[-1px] 2xl:right-[-82px] rounded-xl sm:rounded-[20px]"
              aria-hidden="true">
              <Image
                src={profitChartImg}
                alt="CRM financial dashboard"
                className="size-full object-cover dark:hidden"
              />
              <Image
                src={profitDarkChartImg}
                alt="CRM financial dashboard"
                className="size-full object-cover hidden dark:inline-block"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SelectUs;
