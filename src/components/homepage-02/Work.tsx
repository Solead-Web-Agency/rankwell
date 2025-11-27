import workBg from '@public/images/home-page-2/work-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Work steps data
const workStepsData = [
  {
    id: 1,
    step: '1',
    badgeColor: 'bg-ns-yellow',
    title: 'Create your complimentary account today',
    description: 'Get started quickly by creating a free is of account with just your email address.',
  },
  {
    id: 2,
    step: '2',
    badgeColor: 'bg-ns-green',
    title: 'Customize and improve your experience',
    description: 'Discover our user-friendly customization tools. Designs, add your personal flair.',
  },
  {
    id: 3,
    step: '3',
    badgeColor: 'bg-ns-cyan',
    title: 'Accelerate the growth of your business',
    description: 'watching your vision come to life as a stunning digital masterpiece..',
  },
];

const Work = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="bg-secondary dark:text-ns-yellow relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl p-5 max-lg:w-[90%] max-lg:rounded-2xl max-lg:px-5 max-lg:py-12 sm:p-10 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[176px]">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image quality={100} src={workBg} alt=" about bg" className="h-full w-full object-cover" />
        </div>
        <div className="mb-[112px] flex flex-col items-center space-y-5 gap-y-4 text-center max-lg:mb-12 max-lg:space-y-3">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blur-light text-ns-yellow">How It Works</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent max-lg:text-heading-6 mx-auto max-w-[750px]">
                Simple actions, limitless opportunities
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent max-lg:text-tagline-2 max-w-[850px]">
                Armed with concepts, we carefully design and refine every detail to align with your vision and goals.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:gap-4 md:grid-cols-3 md:gap-8">
          {workStepsData.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
              <div className="flex flex-col items-center justify-center rounded-[20px] bg-white/14 p-8 text-center backdrop-blur-[50px] md:p-4 lg:p-8">
                <h4
                  className={`text-heading-6 dark:text-secondary ${step.badgeColor} mb-6 inline-block rounded-[48px] px-10 py-1.5 max-lg:mb-3`}>
                  {step.step}
                </h4>
                <h5 className="text-accent mb-2 max-lg:text-lg">{step.title}</h5>
                <p className="text-accent/60 max-lg:text-tagline-2">{step.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Work.displayName = 'Work';
export default Work;
