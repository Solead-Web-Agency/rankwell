import investmentImage from '@public/images/home-page-23/invesment.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Investment = () => {
  return (
    <section className="py-[25px] sm:py-[35px] md:py-[50px] lg:py-[75px] xl:py-[100px]">
      <div className="main-container">
        <div className="bg-white dark:bg-background-6 rounded-2xl overflow-hidden sm:rounded-3xl md:rounded-4xl max-sm:px-7 max-sm:py-10 md:pl-[42px] md:pr-2.5 md:py-2.5">
          <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-y-12 gap-8 lg:gap-0">
            <div className="w-full sm:max-w-[520px] space-y-8 sm:space-y-10 md:space-y-14 col-span-12 md:col-span-6">
              <div className="space-y-3 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <h2>
                    Get your investment
                    <span className="text-primary-500"> right and secure </span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="w-full md:max-w-[464px]">
                    We work with you to create an investment plan tailored to your goals and tolerance for risk.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/our-services-01"
                    rel="noopener noreferrer"
                    className="btn btn-white hover:btn-secondary btn-lg md:btn-xl w-full dark:btn-transparent dark:hover:btn-accent md:w-auto"
                    aria-label="Learn more about secure investment planning">
                    Learn more
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4} offset={100} direction="right">
              <figure
                className="w-full md:max-w-[615px] overflow-hidden rounded-xl sm:rounded-[20px] md:rounded-3xl col-span-12 md:col-span-6"
                role="img"
                aria-label="Investment planning visualization">
                <Image
                  src={investmentImage}
                  alt="Secure investment planning illustration showing portfolio diversification"
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
