import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const HeroContent = () => {
  return (
    <div className="main-container z-10 flex flex-col items-center text-center">
      <RevealAnimation delay={0.1}>
        <span className="badge badge-yellow mb-5">Artificial intelligence solutions</span>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <h1 className="max-[426px]:text-heading-5 max-sm:text-heading-4 mb-4 font-medium max-[426px]:mb-2.5 max-sm:max-w-[450px]">
          Effortlessly build advanced website
          <br className="hidden md:block" />
          with AI-driven solutions
        </h1>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="mb-10 max-w-[625px] max-sm:max-w-[420px] sm:mb-14">
          Effortlessly build advanced websites with AI-driven solutions that streamline every step of the development
          process. From intelligent design suggestions to automated
        </p>
      </RevealAnimation>
      <ul className="mb-7 flex flex-col gap-4 max-md:w-full md:mb-14 md:flex-row">
        <RevealAnimation delay={0.3} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/login-01"
              className="btn max-md:btn-md btn-xl dark:btn-accent btn-secondary hover:btn-white dark:hover:btn-transparent w-full max-md:mx-auto md:w-auto">
              Get started
            </LinkButton>
          </li>
        </RevealAnimation>
        <RevealAnimation delay={0.5} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/pricing-01"
              className="btn btn-white max-md:btn-md btn-xl hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full max-md:mx-auto md:w-auto">
              Free trial
            </LinkButton>
          </li>
        </RevealAnimation>
      </ul>
    </div>
  );
};

export default HeroContent;
