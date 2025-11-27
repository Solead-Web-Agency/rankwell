import { CheckIcon } from '@/icons';
import roundImageImg from '@public/images/home-page-7/round-image.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const teamList = [
  { id: 1, label: 'Sales Teams' },
  { id: 2, label: 'Marketing Teams' },
  { id: 3, label: 'Customer Support Teams' },
  { id: 4, label: 'Small Businesses & Enterprises' },
];

const HowItWork = () => {
  return (
    <section
      className="pt-[100px] bg-background-2 dark:bg-background-5 pb-[200px] overflow-hidden"
      aria-label="Who uses NextSaaS CRM">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row items-center gap-[100px]">
          {/* left img  */}
          <div className="relative max-w-[490px] xl:max-w-[595px] w-full">
            <RevealAnimation delay={0.1} offset={100}>
              <figure>
                <Image src={roundImageImg} alt="Finance Hero" className="w-full lg:max-w-[450px] h-auto" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3} offset={100} direction="right">
              <figure className="absolute bottom-24 rounded-[12px] overflow-hidden shadow-1 right-0 min-w-[288px] space-y-2 bg-white dark:bg-background-6 p-4 min-h-[100px] max-h-[101px]">
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
          {/* right side content  */}
          <div className="max-w-[595px] lg:max-w-max mx-auto flex flex-col items-start">
            <RevealAnimation delay={0.4}>
              <h2 className="mb-3">Who uses NextSaaS CRM</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="mb-6">
                Take control of your finances with us and experience the confidence that comes with smart money
                management. Whether you&apos;re looking to budget better
              </p>
            </RevealAnimation>
            <ul className="mb-14 space-y-2.5">
              {teamList.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-4">
                    <span className="bg-secondary dark:bg-accent rounded-full size-[18px] shrink-0 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    <span className="text-tagline-1 font-medium text-secondary dark:text-accent">{item.label}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/about-02"
                  className="btn btn-secondary btn-xl hover:btn-primary dark:btn-accent"
                  aria-label="Learn how NextSaaS CRM works">
                  How it works
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
