import selectUsImg01DarkImage from '@public/images/home-page-9/select-us-img-01-dark.png';
import selectUsImg01Image from '@public/images/home-page-9/select-us-img-01.png';
import selectUsImg02DarkImage from '@public/images/home-page-9/select-us-img-02-dark.png';
import selectUsImg02Image from '@public/images/home-page-9/select-us-img-02.png';
import selectUsImg03DarkImage from '@public/images/home-page-9/select-us-img-03-dark.png';
import selectUsImg03Image from '@public/images/home-page-9/select-us-img-03.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const keyFeatures = [
  { id: 1, icon: 'ns-shape-50', label: 'Cloud-native & scalable' },
  { id: 2, icon: 'ns-shape-22', label: 'Enterprise-grade security' },
  { id: 3, icon: 'ns-shape-23', label: 'Seamless integrations' },
  { id: 4, icon: 'ns-shape-36', label: 'Always up-to-date' },
];

const SelectUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px] overflow-hidden" aria-label="Reasons to select us">
      <div className="main-container">
        <div className="flex items-center flex-col sm:flex-row xl:gap-[100px]">
          {/* left part  */}
          <div className="space-y-[42px]">
            {/* heading  */}
            <div className="md:max-w-[536px] w-full text-center md:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-white mb-5">Reasons to select us</span>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[452px] md:w-full mb-3">Easily manage your cash flow.</h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p>
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                  &amp; After magazine.
                </p>
              </RevealAnimation>
            </div>

            {/* list  */}
            <ul className="space-y-6" aria-label="Our key features">
              {keyFeatures.map((feature, idx) => (
                <RevealAnimation key={feature.id} delay={0.4 + idx * 0.1}>
                  <li className="px-3 flex items-center gap-4">
                    <span className={`${feature.icon} text-[36px] text-secondary dark:text-accent`}></span>
                    <p className="font-medium text-secondary dark:text-accent">{feature.label}</p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>

          {/* right part  */}
          <div className="relative">
            <RevealAnimation delay={0.5} direction="up">
              <figure className="w-[370px] md:w-[382px] lg:w-[574px] xl:w-[802px] overflow-hidden">
                <Image
                  src={selectUsImg01Image}
                  alt="Dashboard interface showing cash flow management"
                  className="size-full object-cover dark:hidden"
                  loading="lazy"
                  width={802}
                  height={600}
                />
                <Image
                  src={selectUsImg01DarkImage}
                  alt="Dashboard interface showing cash flow management"
                  className="size-full object-cover hidden dark:inline-block"
                  loading="lazy"
                  width={802}
                  height={600}
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.8} direction="right">
              <figure className="absolute w-[150px] lg:w-[200px] xl:w-[300px] left-[189px] md:top-[73px] md:left-[210px] lg:left-[350px] lg:top-[130px] xl:left-[459px] xl:top-[170px] top-[68px] shadow-5 rounded-[10px] overflow-hidden">
                <Image
                  src={selectUsImg03Image}
                  alt="Financial analytics chart"
                  className="size-full object-cover dark:hidden"
                  loading="lazy"
                  width={300}
                  height={200}
                />
                <Image
                  src={selectUsImg03DarkImage}
                  alt="Financial analytics chart"
                  className="size-full object-cover hidden dark:inline-block"
                  loading="lazy"
                  width={300}
                  height={200}
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={1} direction="right">
              <figure className="absolute w-[200px] bottom-[57px] right-[25px] md:right-[37px] xl:w-[395px] lg:w-[300px] lg:right-[42px] lg:bottom-[87px] xl:right-[68px] xl:bottom-[124px] rounded-[10px] overflow-hidden">
                <Image
                  src={selectUsImg02Image}
                  alt="Mobile app interface for cash management"
                  className="size-full object-cover dark:hidden"
                  loading="lazy"
                  width={395}
                  height={300}
                />
                <Image
                  src={selectUsImg02DarkImage}
                  alt="Mobile app interface for cash management"
                  className="size-full object-cover hidden dark:inline-block"
                  loading="lazy"
                  width={395}
                  height={300}
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectUs;
