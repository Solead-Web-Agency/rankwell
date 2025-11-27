import RevealAnimation from '../animation/RevealAnimation';
import HeroFormAndAvatar from './HeroFormAndAvatar';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <section className="pt-[115px] pb-[80px] lg:pb-[150px]">
      <div className="max-w-[1440px] mx-auto px-6 2xl:px-0">
        <div
          className="bg-primary-500 rounded-[30px] h-[860px] bg-[url('/images/home-page-28/hero-bg.svg')] bg-center bg-cover bg-no-repeat flex items-center lg:flex-row justify-between flex-col overflow-hidden"
          role="banner">
          {/* heading  */}
          <div className="w-full lg:max-w-[450px] xl:max-w-[536px] p-6 lg:p-0 lg:ml-6 xl:ml-[100px] space-y-14">
            <div className="space-y-5 text-center md:text-left">
              <RevealAnimation delay={0.1}>
                <span className="inline-block badge badge-blur dark:!text-ns-green" id="badge-crm">
                  Modern CRM
                </span>
              </RevealAnimation>
              <div className="space-y-4">
                <RevealAnimation delay={0.2}>
                  <h1 className="text-accent">AI-powered CRM for businesses</h1>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[468px] md:w-full text-accent/60">
                    Automate sales, streamline customer relationships, and scale your business—all in one intuitive
                    platform.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <HeroFormAndAvatar />
          </div>
          {/* img  */}
          <HeroImages />
        </div>
      </div>
    </section>
  );
};

export default Hero;
