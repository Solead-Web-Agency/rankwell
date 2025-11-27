import featureImg03Dark from '@public/images/home-page-23/feature-img-03-dark.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeatureV3 = () => {
  return (
    <section className="pt-[50px] md:pt-[100px] lg:[150px] xl:pt-[200px] pb-16 md:pb-20 lg:[90px] xl:pb-[100px] overflow-hidden">
      <div className="main-container">
        <div className="bg-white dark:bg-background-6 rounded-[20px] md:bg-[url('/images/home-page-23/feature-v3-bg.png')] md:bg-no-repeat md:bg-cover md:bg-top-left">
          <div className="max-md:pt-10 md:py-10 lg:py-16 max-lg:space-y-10 pl-7 lg:pl-14 pr-3.5 lg:pr-[42px] relative">
            {/* content  */}
            <div className="lg:max-w-[587px] max-md:text-center md:ml-[390px] lg:ml-[490px] xl:ml-[590px] mt-3">
              <div className="space-y-8 md:space-y-14">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="savings-heading">
                      Earn more on
                      <span className="text-primary-500"> your savings </span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="lg:max-w-[518px]">
                      We don&apos;t just help you invest—we help you grow. Our users enjoy above-average returns, all
                      with lower fees and less hassle.
                    </p>
                  </RevealAnimation>
                </div>
                {/* link btn  */}
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/features-01"
                      rel="noopener noreferrer"
                      className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-md w-[85%] md:w-auto mx-auto md:mx-0"
                      aria-label="Learn more about our high-yield savings options">
                      Learn more
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            {/* img  */}
            <RevealAnimation delay={0.3} direction="right" offset={100}>
              <figure className="w-[340px] sm:w-[450px] md:w-[450px] lg:w-[540px] xl:w-[670px] mx-auto md:mx-0 overflow-hidden md:absolute top-[-10px] min-[925px]:top-[-85px] lg:top-[-90px] xl:top-[-204px] -left-6">
                <Image
                  src={featureImg03Dark}
                  alt="Savings growth visualization showing increasing returns"
                  className="size-full object-cover"
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
