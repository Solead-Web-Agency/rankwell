import feature2Dark from '@public/images/home-page-8/feature-2-dark.png';
import feature2 from '@public/images/home-page-8/feature-2.png';
import selectUsImg02Dark from '@public/images/home-page-9/select-us-img-02-dark.png';
import selectUsImg02 from '@public/images/home-page-9/select-us-img-02.png';
import selectUsImg03Dark from '@public/images/home-page-9/select-us-img-03-dark.png';
import selectUsImg03 from '@public/images/home-page-9/select-us-img-03.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FeaturesV3Data = [
  {
    icon: 'ns-shape-8',
    text: 'A version for offline use is available.',
  },
  {
    icon: 'ns-shape-9',
    text: 'Designed to be both scalable and secure.',
  },
  {
    icon: 'ns-shape-12',
    text: 'Feature powered by artificial intelligence.',
  },
  {
    icon: 'ns-shape-21',
    text: 'It offers both scalability and robust security.',
  },
];

const FeaturesV3 = () => {
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-12 lp:gap-[100px] xl:gap-20 lg:gap-14 lg:gap-y-0 gap-y-8 md:gap-y-14 items-center">
          <div className="col-span-12 lp:col-span-7 max-lg:order-1 lg:col-span-6">
            <div className="max-w-[704px] lg:mx-0 mx-auto">
              <div className="relative w-full xl:max-w-[504px] sm:max-w-[400px] max-w-[300px] lg:mx-0 mx-auto">
                <RevealAnimation delay={0.1} offset={100}>
                  <figure>
                    <Image src={feature2} alt="features" className="w-full h-full object-cover dark:hidden" />
                    <Image src={feature2Dark} alt="features" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.3} offset={100} direction="right" useSpring duration={2}>
                  <figure className="absolute xl:top-[38%] top-[40%] right-0 xl:-right-7 xl:max-w-[253px] sm:max-w-[200px] max-w-[150px] w-full z-10">
                    <Image src={selectUsImg03} alt="features" className="w-full h-full dark:hidden" />
                    <Image src={selectUsImg03Dark} alt="features" className="w-full h-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.4} offset={100} direction="right" useSpring duration={2}>
                  <figure className="absolute bottom-10 xl:bottom-1/12 right-0 xl:max-w-[395px] sm:max-w-[300px] max-w-[200px] w-full rounded-[10px] overflow-hidden">
                    <Image src={selectUsImg02} alt="features" className="w-full h-full dark:hidden" />
                    <Image src={selectUsImg02Dark} alt="features" className="w-full h-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="col-span-12 lp:col-span-5 max-lg:order-0 lg:col-span-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan">Reasons to select us</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[521px]">Easily manage your cash flow.</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                      &amp; After magazine.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {FeaturesV3Data.map((item, idx) => (
                    <RevealAnimation delay={0.4 + idx * 0.1} key={item.icon}>
                      <li className="p-2 flex items-center gap-4">
                        <span className={`${item.icon} text-[36px] text-secondary dark:text-accent`}> </span>
                        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">{item.text}</span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesV3;
