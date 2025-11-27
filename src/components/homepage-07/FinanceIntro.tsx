import { CheckIcon } from '@/icons';
import roundImage from '@public/images/home-page-7/round-image.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const FinanceIntro = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 overflow-hidden py-10 md:py-20 2xl:py-[120px]">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-10 lg:gap-24">
        <div className="md:flex-1 relative flex justify-start w-full lg:w-auto">
          <RevealAnimation delay={0.1} direction="up" offset={100}>
            <figure>
              <Image src={roundImage} alt="Finance Hero" className="w-full lg:max-w-[450px] h-auto" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="absolute bottom-24 rounded-[12px] overflow-hidden shadow-1 right-0 min-w-[288px] space-y-2 bg-white dark:bg-background-6 p-4 min-h-[100px] max-h-[101px]">
              <figcaption className="flex justify-between gap-2">
                <span className="text-tagline-1 font-normal dark:text-accent"> Today&apos;s Revenue </span>
                <p className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                  <span className="font-inherit"> $ </span>
                  <NumberAnimation
                    number={53224}
                    speed={1500}
                    interval={180}
                    rooms={5}
                    heightSpaceRatio={2.5}
                    className="text-lg font-medium leading-[1.5] text-secondary dark:text-accent">
                    53,224
                  </NumberAnimation>
                </p>
              </figcaption>
              <Progress duration={2} />
            </figure>
          </RevealAnimation>
        </div>
        <div className="md:flex-1 flex flex-col items-center md:items-start lg:items-start lg:text-left">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-3">Take control of your finances with us</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mb-6">
              Take control of your finances with us and experience the confidence that comes with smart money
              management. Whether you&apos;re looking to budget better
            </p>
          </RevealAnimation>
          <ul className="mb-14 space-y-2.5">
            <RevealAnimation delay={0.3}>
              <li className="text-tagline-1 font-normal flex items-center gap-4 dark:text-accent">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                Methods for recording accounting entries
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="text-tagline-1 font-normal flex items-center gap-4 dark:text-accent">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                Statements of cash flow
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="text-tagline-1 font-normal flex items-center gap-4 dark:text-accent">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center">
                  <CheckIcon />
                </span>
                Statements of cash flow
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.6}>
            <div className="w-full md:w-auto">
              <LinkButton
                href="/about-02"
                className="btn btn-secondary btn-lg md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0 hover:btn-primary dark:btn-accent font-medium text-tagline-1">
                <span>Get started</span>
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinanceIntro;
