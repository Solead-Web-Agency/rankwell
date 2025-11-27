import mainFeatureDark from '@public/images/home-page-12/main-feature-dark.png';
import mainFeature from '@public/images/home-page-12/main-feature.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Sales CRM',
  },
  {
    id: 2,
    title: 'Marketing automation',
  },
  {
    id: 3,
    title: 'Mobile CRM app',
  },
  {
    id: 4,
    title: 'Customer portal',
  },
  {
    id: 5,
    title: 'Lead management system',
  },
  {
    id: 6,
    title: 'API & developer platform',
  },
  {
    id: 7,
    title: 'Real estate',
  },
  {
    id: 8,
    title: 'Finance & banking',
  },
  {
    id: 9,
    title: 'E-commerce',
  },
  {
    id: 10,
    title: 'Travel & hospitality',
  },
  {
    id: 11,
    title: 'B2B SaaS',
  },
  {
    id: 12,
    title: 'And more!',
  },
];

const FeatureV2 = () => {
  return (
    <section className="xl:py-[200px] lg:py-[100px] py-16 md:py-20">
      <div className="main-container">
        <div className="space-y-5 text-center mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Features</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>
                A<span className="text-primary-500"> one-stop </span>solution
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="lg:max-w-[674px] max-w-[500px] mx-auto">
                With our lead capture automation software, you can effortlessly collect, manage, and nurture leads from
                various online and offline sources in real-time.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-10 md:space-y-20 lg:space-y-[100px]">
          <div className="flex items-center xl:gap-12 lg:gap-8 gap-y-6 lg:flex-row flex-col">
            <RevealAnimation delay={0.5} offset={70} start="top 88%">
              <div className="xl:p-[42px] p-8 rounded-[20px] bg-background-1 space-y-6 dark:bg-background-6 xl:max-w-[360px] lg:max-w-[300px] max-w-[500px] w-full">
                <h3 className="xl:text-heading-4 text-heading-5">Our products</h3>
                <ul>
                  {data.slice(0, 6).map((item) => (
                    <li key={item.id} className="flex items-center gap-2 xl:py-2.5 py-1.5">
                      <span className="size-5 bg-background-3 rounded-full flex shrink-0 items-center justify-center dark:bg-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={7}
                          viewBox="0 0 10 7"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M9.125 1.02734L3.875 6.27711L1.25 3.65234"
                            className="stroke-secondary"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-secondary dark:text-accent">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6} offset={70} start="top 88%">
              <div>
                <figure className="lg:max-w-[485px] max-w-[350px] mx-auto w-full">
                  <Image src={mainFeature} className="w-full h-full object-cover dark:hidden" alt="Features" />
                  <Image
                    src={mainFeatureDark}
                    className="w-full h-full object-cover hidden dark:block"
                    alt="Features"
                  />
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7} offset={70} start="top 88%">
              <div className="xl:p-[42px] p-8 rounded-[20px] bg-background-1 space-y-6 dark:bg-background-6 xl:max-w-[360px] lg:max-w-[300px] max-w-[500px] w-full">
                <h3 className="xl:text-heading-4 text-heading-5">Industries we serve</h3>
                <ul>
                  {data.slice(6).map((item) => (
                    <li key={item.id} className="flex items-center gap-2 xl:py-2.5 py-1.5">
                      <span className="size-5 bg-background-3 rounded-full flex shrink-0 items-center justify-center dark:bg-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={7}
                          viewBox="0 0 10 7"
                          fill="none"
                          className="shrink-0">
                          <path
                            d="M9.125 1.02734L3.875 6.27711L1.25 3.65234"
                            className="stroke-secondary"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-secondary dark:text-accent">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.8}>
            <div className="text-center">
              <LinkButton
                href="/features-01"
                className="btn hover:btn-primary dark:btn-accent btn-secondary btn-lg w-[85%] md:w-auto md:btn-xl">
                Explore all features
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
