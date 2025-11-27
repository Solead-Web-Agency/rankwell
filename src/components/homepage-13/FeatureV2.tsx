import feature1Dark from '@public/images/home-page-13/feature-1-dark.png';
import feature1 from '@public/images/home-page-13/feature-1.png';
import feature2Dark from '@public/images/home-page-13/feature-2-dark.png';
import feature2 from '@public/images/home-page-13/feature-2.png';
import feature3Dark from '@public/images/home-page-13/feature-3-dark.png';
import feature3 from '@public/images/home-page-13/feature-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Live chat & voice messages',
    description: 'Enjoy seamless communication that keeps you connected in real-time, eliminating any delays.',
    image: feature1,
    imageDark: feature1Dark,
  },
  {
    id: 2,
    title: 'Task & reminder management',
    description: 'Ensure your projects stay on schedule by integrating project management directly into',
    image: feature2,
    imageDark: feature2Dark,
  },
  {
    id: 3,
    title: 'Cloud storage history Checking',
    description: 'Safeguard your crucial chats and files, ensuring they are always accessible and never lost.',
    image: feature3,
    imageDark: feature3Dark,
  },
];

const FeatureV2 = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 md:mb-[70px] text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>
              Meet our cutting-edge <br className="hidden md:block" />
              crypto features
            </h2>
          </RevealAnimation>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:gap-x-8">
          {data.map((item) => (
            <RevealAnimation delay={0.4 + (item.id - 1) * 0.1} key={item.id}>
              <div className="col-span-12 lg:col-span-4">
                <div className="px-8 md:px-[42px] pt-[42px] pb-[42px] lg:pb-[56px] rounded-[20px] bg-white dark:bg-background-6 flex flex-col gap-y-6 sm:gap-y-0 md:flex-row md:gap-x-6 lg:gap-y-6 lg:gap-x-0 lg:flex-col items-center lg:items-start space-y-6">
                  <figure className="rounded-2xl overflow-hidden my-auto">
                    <Image src={item.image} alt="feature image" className="dark:hidden size-full" />
                    <Image src={item.imageDark} alt="feature image" className="hidden dark:block" />
                  </figure>
                  <div className="space-y-2">
                    <h5 className="max-md:text-heading-6">{item.title}</h5>
                    <p className="line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.7}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/features-01"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg lg:btn-xl w-[90%] md:w-auto mx-auto md:mx-0">
              Explore features
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FeatureV2;
