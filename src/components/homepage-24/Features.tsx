import selectUsReasonDark from '@public/images/home-page-22/select-us-reason-dark.png';
import selectUsReason from '@public/images/home-page-22/select-us-reason.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featuresData = [
  {
    id: '1',
    icon: 'ns-shape-10',
    title: ' Understand your options clearly',
  },
  {
    id: '2',
    icon: 'ns-shape-12',
    title: 'Choose your own coverage limits',
  },
  {
    id: '3',
    icon: 'ns-shape-14',
    title: 'File claims in minutes, not days',
  },
  {
    id: '4',
    icon: 'ns-shape-16',
    title: 'Access support from any device',
  },
];

const Features = () => {
  return (
    <section className="lg:py-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} offset={100}>
              <figure className="lg:max-w-[669px] max-w-[500px] lg:mx-0 mx-auto w-full">
                <Image src={selectUsReason} alt="select-us-reason" className="size-full dark:hidden" />
                <Image src={selectUsReasonDark} alt="select-us-reason" className="size-full dark:block hidden" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="sm:space-y-8 space-y-5 lg:mx-0 mx-auto lg:max-w-full max-w-[500px]">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan">Reasons to select us</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2>Personalized coverage that makes sense</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      Your lifestyle is unique—your insurance should be too. Our team helps you find the perfect policy
                      by analyzing your needs, explaining your options, and guiding you through every step.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="sm:space-y-2 space-y-1">
                  {featuresData.map((item, index) => (
                    <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                      <li className="p-2 flex items-center gap-4">
                        <span className={`${item.icon} text-[36px] text-secondary dark:text-accent`} />
                        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">{item.title}</span>
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

export default Features;
