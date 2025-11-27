import gradient14 from '@public/images/gradient/gradient-14.png';
import heroDark from '@public/images/home-page-20/hero-dark.jpg';
import hero from '@public/images/home-page-20/hero.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section
      className="relative lg:pt-[234px] md:pt-[180px] sm:pt-[160px] pt-[150px] xl:pb-[200px] md:pb-[130px] sm:pb-[100px] pb-20"
      aria-label="Hero section">
      <div className="main-container lg:space-y-[100px] md:space-y-[80px] space-y-[50px]">
        <div className="text-center space-y-10 md:space-y-14">
          <div className="sm:space-y-4 space-y-2 relative z-20">
            <RevealAnimation delay={0.1}>
              <h1 className="lg:max-w-full md:max-w-[800px] sm:max-w-[600px] max-w-[450px] mx-auto">
                Integrated risk management software
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="xl:max-w-[802px] md:max-w-[630px] max-w-[500px] w-full mx-auto">
                NextSaaS helps organizations identify, analyze, and mitigate risks with a powerful, unified platform.
                From policy oversight to advanced analytics—manage risk across the enterprise, all in one place.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="relative z-20">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary btn-xl hover:btn-primary dark:btn-accent w-[90%] md:w-auto mx-auto"
                aria-label="Get started with NextSaaS">
                Get started now
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative z-10">
          <RevealAnimation delay={0.5}>
            <div className="-z-10 absolute lg:-top-[35%] -top-[50%] left-1/2 -translate-x-1/2">
              {/* hero bg gradient  */}
              <figure className="xl:size-[897px] lg:size-[700px] md:size-[650px] sm:size-[550px] min-[425px]:size-[400px] size-[350px] mx-auto flex items-center justify-center select-none pointer-events-none">
                <Image src={gradient14} alt="Decorative gradient background" className="w-full h-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          <div>
            {/* hero main img  */}
            <RevealAnimation delay={0.5}>
              <figure className="xl:max-w-[1170px] lg:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] max-w-[450px] w-full mx-auto overflow-hidden rounded-xl md:rounded-[20px] opacity-0">
                <Image
                  src={hero}
                  alt="NextSaaS risk management platform interface"
                  className="size-full object-cover dark:hidden"
                />
                <Image
                  src={heroDark}
                  alt="NextSaaS risk management platform interface"
                  className="size-full object-cover hidden dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
