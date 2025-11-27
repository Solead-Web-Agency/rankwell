{
  /* =========================
Feature v1 section
===========================*/
}
import cardOneImgDark from '@public/images/home-page-9/feature-card-img-01-dark.png';
import cardOneImg from '@public/images/home-page-9/feature-card-img-01.png';
import cardTwoImgDark from '@public/images/home-page-9/feature-card-img-02-dark.png';
import cardTwoImg from '@public/images/home-page-9/feature-card-img-02.png';
import cardThreeImgDark from '@public/images/home-page-9/feature-card-img-03-dark.png';
import cardThreeImg from '@public/images/home-page-9/feature-card-img-03.png';
import cardFourImgDark from '@public/images/home-page-9/feature-card-img-04-dark.png';
import cardFourImg from '@public/images/home-page-9/feature-card-img-04.png';
import cardFiveImgDark from '@public/images/home-page-9/feature-card-img-05-dark.png';
import cardFiveImg from '@public/images/home-page-9/feature-card-img-05.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const Features = () => {
  return (
    <section className="pb-[200px] pt-[100px]" aria-label="Features">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* feature heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[814px] mx-auto">Everything you need to manage money smarter</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[734px] mx-auto">
                NextSaaS simplifies finance with powerful tools designed for clarity, speed, and growth. Whether you’re
                budgeting, forecasting, or tracking cash flow—our platform keeps you in control.
              </p>
            </RevealAnimation>
          </div>
          {/* feature cards  */}
          {/* 1st row cards  */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-8 sm:gap-x-8">
            {/* card one  */}

            <RevealAnimation delay={0.5}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardOneImg}
                      alt="Fast and secure cloud upload feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardOneImgDark}
                      alt="Fast and secure cloud upload feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Fast &amp; secure cloud upload</h3>
                  <p>Store, access, and manage data from anywhere.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card two  */}
            <RevealAnimation delay={0.6}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardTwoImg}
                      alt="Automated workflows feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardTwoImgDark}
                      alt="Automated workflows feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Automated workflows</h3>
                  <p>Store, access, and manage data from anywhere.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card three  */}
            <RevealAnimation delay={0.7}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardThreeImg}
                      alt="Smart search and AI insights feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardThreeImgDark}
                      alt="Smart search and AI insights feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Smart search &amp; AI insights</h3>
                  <p>Store, access, and manage data from anywhere.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {/* 2nd row cards  */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-8 sm:gap-x-8">
            {/* card four  */}
            <RevealAnimation delay={0.8}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardFourImg}
                      alt="Teamwork and leadership feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFourImgDark}
                      alt="Teamwork and leadership feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Teamwork &amp; leadership</h3>
                  <p>Store, access, and manage data from anywhere.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card five  */}
            <RevealAnimation delay={0.9}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardFiveImg}
                      alt="Custom dashboards feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFiveImgDark}
                      alt="Custom dashboards feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Custom dashboards</h3>
                  <p>Store, access, and manage data from anywhere.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
Features.displayName = 'Features';
export default Features;
