import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="md:mt-4 lg:mt-6 xl:mt-[30px]">
      <div className="max-w-[1860px] mx-auto pt-[170px] sm:pt-[190px] md:pt-[210px] lg:pt-[220px] pb-[80px] sm:pb-[100px] lg:pb-[200px] max-h-[940px] md:rounded-[30px] xl:rounded-[50px] relative overflow-hidden">
        <video
          className="size-full absolute top-0 left-0 object-cover object-center  min-h-[100%] scale-[1.1]"
          autoPlay={true}
          muted={true}
          loop={true}>
          <source src="/video/getty-watch.mp4" type="video/mp4" />
          <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
          <track
            src="descriptions/lawyer-hero-video-desc.vtt"
            kind="descriptions"
            srcLang="en"
            label="English Descriptions"
          />
          Your browser does not support the video tag.
        </video>
        <div className="main-container">
          <div className="space-y-3 md:space-y-5 text-center md:text-left max-lg:max-w-[500px]">
            <RevealAnimation delay={0.1}>
              <span className="inline-block text-tagline-2 font-medium backdrop-blur-[18px] rounded-full px-5 py-1.5 bg-accent/10 text-primary-50 dark:text-ns-green">
                Keep an eye on your finances
              </span>
            </RevealAnimation>
            <div className="space-y-2.5 md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[666px] leading-[1.2]">
                  <span className="hero-text-gradient hero-text-color-2 block">
                    Enhance productivity with quick time tracking.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60 max-w-[580px]">
                  Stay focused and make every minute count with our intuitive time tracking solution. Whether
                  you&apos;re managing a team or working solo, quick time tracking helps you identify where your time
                  goes, eliminate
                </p>
              </RevealAnimation>
              <ul className="flex flex-col flex-wrap sm:flex-row items-start md:items-center gap-y-3 gap-x-9 mt-8 md:mt-[54px]">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                      <CheckIcon className="fill-white dark:fill-accent" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> Automated time tracking </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                      <CheckIcon className="fill-white dark:fill-accent" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> In-depth productivity reports </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20">
                      <CheckIcon className="fill-white dark:fill-accent" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> Effortless project management </span>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          <ul className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-x-4 justify-center md:justify-start mt-12 md:mt-14 lg:mb-[100px]">
            <RevealAnimation delay={0.7} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/pricing-01"
                  className="btn btn-green hover:btn-white dark:hover:btn-accent mx-auto sm:mx-0 block md:inline-block w-[90%] md:w-auto btn-lg md:btn-xl border-0">
                  Try it free
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.9} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/signup-01"
                  className="btn btn-lg md:btn-xl dark:btn-transparent dark:border btn-dark bg-accent/20 mx-auto sm:mx-0 block md:inline-block w-[90%] md:w-auto hover:btn-green">
                  Watch now
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
