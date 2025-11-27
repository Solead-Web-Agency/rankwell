import { CheckIcon } from '@/icons';
import totalEarnImg from '@public/images/about-page-02/total-earn.png';
import roundImage from '@public/images/home-page-7/round-image.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeaturesV2 = () => {
  return (
    <section className="pt-[200px] pb-28">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-12 gap-x-24 overflow-hidden">
        <div className="md:flex-1 relative flex justify-start w-full lg:w-auto">
          <RevealAnimation delay={0.2}>
            <Image src={roundImage} alt="Finance Hero" className="w-full max-w-[450px] h-auto" />
          </RevealAnimation>
          <RevealAnimation delay={0.3} direction="right" offset={90}>
            <div className="absolute top-[49%] right-[15%] bg-ns-yellow p-4 rounded-2xl text-heading-4 max-w-[219px] max-h-[70px] flex items-center justify-center">
              $
              <NumberAnimation number={245450} speed={2000} interval={200} rooms={6} />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100}>
            <figure className="rounded-xl max-w-[186px] w-full overflow-hidden shadow-10 absolute bottom-[15%] right-[17%]">
              <Image src={totalEarnImg} alt="Finance Hero" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
        <div className="md:flex-1 flex flex-col lg:items-start lg:text-left">
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Designed to deliver Tangible outcomes</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mb-6">
              Take control of your finances with us and experience the confidence that comes with smart money
              management. Whether you&apos;re looking to budget better
            </p>
          </RevealAnimation>
          <ul className="mb-10 md:mb-14 space-y-2 md:space-y-3.5">
            <RevealAnimation delay={0.4}>
              <li className="text-tagline-1 font-medium flex items-center gap-3 dark:text-accent">
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                Clarity Over Clutter
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="text-tagline-1 font-medium flex items-center gap-3 dark:text-accent">
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                People Before Features
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="text-tagline-1 font-medium flex items-center gap-3 dark:text-accent">
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                Security as a Standard
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.7}>
            <div>
              <LinkButton
                href="/signup-01"
                className="btn btn-secondary hover:btn-white dark:btn-white-dark btn-xl block md:inline-block w-full md:w-auto mx-auto">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesV2;
