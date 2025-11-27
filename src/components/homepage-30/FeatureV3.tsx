import roundImage from '@public/images/home-page-7/round-image.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const FeatureV3 = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 lg:py-[150px] md:py-[100px] py-[75px] overflow-hidden">
      <div className="main-container flex flex-col lg:flex-row items-center lg:gap-[100px] md:gap-y-20 gap-y-14">
        <div className="md:flex-1 relative flex lg:justify-start justify-center w-full lg:w-auto">
          <RevealAnimation delay={0.2} offset={200}>
            <figure className="max-w-[400px] lg:max-w-[450px] overflow-hidden">
              <Image src={roundImage} alt="Finance Hero" className="size-full" width={450} height={450} priority />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} offset={100} direction="right">
            <figure className="absolute bottom-24 rounded-[12px] overflow-hidden shadow-1 right-[1%] md:right-[10%] lg:right-0 min-w-[288px] space-y-2 bg-white dark:bg-background-9 p-4 min-h-[100px] max-h-[101px]">
              <figcaption className="flex justify-between gap-2">
                <span className="text-tagline-1 font-normal dark:text-accent"> Today&apos;s Revenue </span>
                <span className="text-lg font-medium flex items-center gap-1 leading-[1.5] text-secondary dark:text-accent">
                  $
                  <NumberAnimation number={53224} speed={1000} interval={180} rooms={5} heightSpaceRatio={2.5} />
                </span>
              </figcaption>
              <Progress />
            </figure>
          </RevealAnimation>
        </div>
        <div className="md:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:mx-0 mx-auto lg:max-w-full max-w-[550px]">
          <div className="space-y-3 mb-6 text-left">
            <RevealAnimation delay={0.1}>
              <h2>What makes our security software stand out</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Take control of your finances with us and experience the confidence that comes with smart money
                management. Whether you&apos;re looking to budget better
              </p>
            </RevealAnimation>
          </div>
          <ul className="mb-14 flex flex-col w-full justify-start gap-y-2.5">
            <RevealAnimation delay={0.3}>
              <li className="flex items-center gap-3 lg:py-2.5 py-1.5">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="fill-white dark:fill-secondary"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                  Comprehensive antivirus
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="flex items-center gap-3 lg:py-2.5 py-1.5">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="fill-white dark:fill-secondary"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                  One-click system cleanup
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="flex items-center gap-3 lg:py-2.5 py-1.5">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="fill-white dark:fill-secondary"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                  Encrypted cloud backup
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="flex items-center gap-3 lg:py-2.5 py-1.5">
                <span className="bg-secondary dark:bg-accent rounded-full size-[18px] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="fill-white dark:fill-secondary"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                  Identity theft protection
                </span>
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="w-full">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary dark:btn-accent dark:hover:btn-white-dark lg:btn-xl btn-lg w-[85%] lg:w-auto hover:btn-white">
                Free download
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
