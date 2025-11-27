import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroPerspective from './HeroPerspective';

const Hero = () => {
  return (
    <section className="bg-[url('/images/home-page-5/hero-bg.svg')] bg-top bg-no-repeat pt-[160px] lg:pt-[180px] xl:pt-[228px] dark:bg-[url('/images/home-page-5/hero-bg-dark.svg')]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Over 50,000 reliable companies</span>
            </RevealAnimation>
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[842px] text-center">Showcasing the cutting edge of product evaluation</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-center">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                  Latin, though it looks like it
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex w-full flex-col items-center justify-center gap-y-3 pt-8 text-center sm:w-auto sm:flex-row md:gap-x-4 md:pt-10 lg:pt-12 xl:pt-14">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/login-01"
                    className="btn btn-primary hover:btn-secondary btn-w btn-xl dark:hover:btn-white w-[90%] sm:w-auto">
                    Get started
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white hover:btn-primary btn-xl dark:btn-transparent w-[90%] sm:w-auto">
                    Book a call
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* video  */}
          <HeroPerspective />
        </div>
      </div>
    </section>
  );
};

export default Hero;
