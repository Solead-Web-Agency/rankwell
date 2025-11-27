import RevealAnimation from '@/components/animation/RevealAnimation';
import AboutAvatarCard from './AboutAvatarCard';
import AboutList from './AboutList';
import AboutUserCard from './AboutUserCard';

const About = () => {
  return (
    <section className="bg-background-3 dark:bg-background-6 relative pt-20 pb-14 max-sm:pt-10 max-sm:pb-10 md:pt-[100px] md:pb-16 lg:pt-[160px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto max-w-[750px] max-sm:max-w-[320px]">
              Create a flawless website down to the last pixel.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[850px] max-sm:max-w-[300px]">
              Creating a flawless website down to the last pixel means crafting a digital experience with exceptional
              attention to detail, where every element is perfectly aligned, visually balanced, and functionally
              seamless.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-[42px] max-sm:gap-x-0 max-sm:gap-y-[42px]">
          <AboutList />
          <AboutAvatarCard />
          <AboutUserCard />
        </div>
      </div>
    </section>
  );
};

About.displayName = 'About';
export default About;
