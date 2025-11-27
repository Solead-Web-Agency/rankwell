import { DownArrowIcon, UpArrowIcon } from '@/icons';
import featureImg from '@public/images/about-page-03/feature.png';
import salesAssetDarkImg from '@public/images/about-page-03/sales-asset-dark.svg';
import salesAssetImg from '@public/images/about-page-03/sales-asset.svg';
import satisfiedUserAssetLightImg from '@public/images/about-page-03/satisfied-user-asset-light.png';
import satisfiedUserAssetImg from '@public/images/about-page-03/satisfied-user-asset.png';
import badge3Img from '@public/images/home-page-7/badge-3.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="pb-14 pt-10 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] overflow-hidden">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="xl:text-heading-1 font-medium lg:max-w-[980px] mx-auto">
              Engineered for advancement. Crafted for potential.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="lg:max-w-[904px] mx-auto">
              At NextSaaS, we create tools that simplify your work, scale with your growth, and bring clarity to
              complexity. From streamlining operations to unlocking insights, our platform is built to support your
              entire journey—from startup to enterprise.
            </p>
          </RevealAnimation>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col-reverse gap-y-7 gap-x-4 md:flex-row justify-around items-start md:items-center lg:items-end 2xl:justify-evenly">
          {/* Left Column Images */}
          <article
            aria-label="Feature supporting images"
            className="space-y-[25px] flex flex-row max-md:gap-2 max-md:justify-between md:flex-col items-center md:hidden lg:block">
            <RevealAnimation delay={0.4} duration={2.8} useSpring={true} direction="left">
              <figure className="max-w-[254px] rounded-2xl shadow-5 overflow-hidden max-h-[250px]">
                <Image
                  src={salesAssetImg}
                  className="size-full shadow-5 object-cover block dark:hidden"
                  alt="Sales performance visualization"
                  loading="lazy"
                />
                <Image
                  src={salesAssetDarkImg}
                  className="size-full shadow-5 object-cover hidden dark:block"
                  alt="Sales performance visualization"
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5} duration={2.2} useSpring={true}>
              <figure className="max-w-[143px] rounded-2xl shadow-2 overflow-hidden max-h-[110px]">
                <Image
                  src={satisfiedUserAssetImg}
                  className="size-full object-cover block dark:hidden"
                  alt="Sales Asset"
                />
                <Image
                  src={satisfiedUserAssetLightImg}
                  className="size-full object-cover hidden dark:block"
                  alt="Sales Asset"
                />
              </figure>
            </RevealAnimation>
          </article>

          {/* Center Main Feature Image */}
          <RevealAnimation delay={0.5} direction="up">
            <figure aria-label="Main feature visualization" className="max-w-[630px] max-h-[564px]">
              <Image
                src={featureImg}
                alt="Main platform feature visualization"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>

          {/* Right Column  Balance */}
          <article className="space-y-[37px] max-md:w-full">
            <RevealAnimation delay={0.5} useSpring={true} duration={2.2}>
              <figure>
                <Image src={badge3Img} alt="Achievement badge" loading="lazy" />
              </figure>
            </RevealAnimation>

            {/* Investment  */}
            <RevealAnimation delay={0.4} direction="right">
              <div className="flex items-start flex-col bg-secondary dark:bg-accent w-full md:w-[148px] h-auto md:h-[91px] gap-1 p-4 rounded-2xl">
                <h3 className="text-tagline-2 text-accent dark:text-secondary font-normal">Investment target</h3>
                <h3 className="text-heading-5 flex items-center justify-center gap-0.5 text-ns-green dark:text-secondary font-normal">
                  <NumberAnimation number={76} speed={2500} interval={180} rooms={2} heightSpaceRatio={2.6}>
                    76
                  </NumberAnimation>
                  %
                </h3>
              </div>
            </RevealAnimation>

            {/* Balance Card */}
            <RevealAnimation delay={0.6} direction="right">
              <div className="bg-white dark:bg-black rounded-2xl p-6 max-w-full md:max-w-[288px] min-w-full md:min-w-[288px]">
                <div className="text-left">
                  <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Balance</span>
                  <h3 className="text-[40px] flex items-center font-normal leading-[1.2] mt-2 mb-[30px]">
                    $
                    <NumberAnimation number={45324} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.2} />
                  </h3>
                </div>

                <div className="flex gap-3">
                  {/* Income Card */}
                  <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                      <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                        <DownArrowIcon className="size-[8px] dark:fill-background-5" />
                      </span>
                      Income
                    </div>
                    <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                      $
                      <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </div>
                  </div>

                  {/* Expenses Card */}
                  <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                      <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                        <UpArrowIcon className="size-[9px] dark:fill-background-5" />
                      </span>
                      Expenses
                    </div>
                    <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                      $
                      <NumberAnimation number={2321} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Feature;
