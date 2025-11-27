import { CompanyProgressIcon, CompanyProgressIcon2 } from '@/icons';
import companyDarkImage from '@public/images/home-page-4/company-dark.png';
import companyImage from '@public/images/home-page-4/company.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Solutions = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-[100px] xl:items-start xl:gap-[100px]">
          <div className="col-span-12 xl:col-span-6">
            <div className="mx-auto max-w-[600px] text-center xl:mx-0 xl:max-w-full xl:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan">Company</span>
              </RevealAnimation>

              <div className="mt-5 mb-8 space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Genuine solutions for authentic web hosting</h2>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[450px] xl:mx-0">
                    Genuine solutions for authentic web hosting prioritize reliability, transparency, and performance
                    without the fluff.
                  </p>
                </RevealAnimation>
              </div>

              <div className="mx-auto mb-14 flex w-full max-w-[550px] flex-col items-center gap-9 sm:flex-row xl:mx-0">
                <RevealAnimation delay={0.4}>
                  <div className="flex w-full max-w-[250px] flex-1 items-center justify-center gap-4">
                    <div className="relative size-[70px]">
                      <CompanyProgressIcon />
                      <div className="text-heading-6 text-secondary dark:text-accent absolute inset-0 flex items-center justify-center font-normal">
                        <NumberAnimation number={60} speed={1700} interval={200} rooms={2}>
                          60
                        </NumberAnimation>
                        <span className="font-inherit">%</span>
                      </div>
                    </div>
                    <p className="text-secondary text-tagline-1 dark:text-accent font-medium">
                      Clients are experts in web development.
                    </p>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.5}>
                  <div className="flex w-full max-w-[227px] flex-1 items-center gap-4">
                    <div className="relative size-[70px]">
                      <CompanyProgressIcon2 />
                      <div className="text-heading-6 text-secondary dark:text-accent absolute inset-0 flex items-center justify-center font-normal">
                        <NumberAnimation number={40} speed={1700} interval={200} rooms={2}>
                          40
                        </NumberAnimation>
                        <span className="font-inherit">%</span>
                      </div>
                    </div>
                    <p className="text-secondary text-tagline-1 dark:text-accent font-medium">
                      Websites that are presently hosted.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.6}>
                <div>
                  <LinkButton
                    href="/features-01"
                    className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary">
                    <span>Read More</span>
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-6">
            <RevealAnimation delay={0.7}>
              <figure className="mx-auto w-full max-w-[592px]">
                <Image src={companyImage} alt="solutions-01" className="w-full dark:hidden" priority />
                <Image src={companyDarkImage} alt="solutions-01" className="hidden w-full dark:block" priority />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
