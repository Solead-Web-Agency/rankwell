{
  /* ================
Integration-page-3 section
================ */
}
import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import googleMeet from '@public/images/icons/google-meet.svg';
import google from '@public/images/icons/google.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import msYammer from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import vlWhite from '@public/images/icons/vl-white.svg';
import vl from '@public/images/icons/vl.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-20 md:pb-28 lg:pb-44 xl:pb-[200px]">
      <RevealAnimation delay={0.1} offset={80}>
        <div className="w-[95%] 2xl:max-w-[1440px] rounded-4xl mx-auto py-[70px] px-10 md:px-[75px] bg-white dark:bg-background-6 relative z-10 md:min-h-[740px]">
          <div className="text-center max-w-[410px] lg:mt-20 mx-auto relative z-10 w-fit">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">
                Effortless app <br className="hidden lg:block" />
                integration.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-14">
                Seamlessly connect your favorite tools and platforms without the usual hassle. Our solution is designed
                to make
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/integration-01"
                  className="section-button btn btn-secondary btn-md hover:btn-primary dark:btn-accent inline-block">
                  See it in Action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="lg:absolute lg:w-1/2 lg:max-w-[400px] 2xl:max-w-[582px] 2xl:left-0 xl:left-20 lg:left-10 left-5 bottom-0 lg:bottom-auto lg:top-0 lg:block hidden">
            <div className="flex flex-row flex-wrap lg:flex-col gap-5 lg:gap-[40px] 2xl:pl-[70px] lg:py-[70px] py-10 relative h-full">
              <RevealAnimation delay={0.4}>
                <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ml-[60px] xl:ml-[100px]">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={googleMeet} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:self-start">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={gmail} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={marvel} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ml-[60px] xl:ml-[100px]">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={confluence} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={framer} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ml-[100px] xl:ml-[185px]">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={vl} className="size-full dark:hidden" alt="integration icon" />
                      <Image src={vlWhite} className="size-full hidden dark:block" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={edge} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="lg:absolute lg:w-1/2 lg:max-w-[400px] 2xl:max-w-[582px] 2xl:right-0 xl:right-28 lg:right-10 right-5 bottom-0 lg:bottom-auto lg:top-0 lg:block hidden">
            <div className="flex flex-row flex-wrap lg:flex-col gap-5 lg:gap-[40px] 2xl:pr-[70px] lg:py-[70px] py-10 relative h-full">
              <RevealAnimation delay={0.4}>
                <div className="flex lg:self-end lg:mr-[60px] xl:mr-[100px]">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={confluence} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:self-end">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={slack} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={snapchat} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:mr-[60px] lg:self-end xl:mr-[100px]">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={google} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={msYammer} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:mr-[100px] xl:mr-[185px] self-end">
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={microsoft} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                  <figure className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                    <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-8 rounded-full p-6">
                      <Image src={figma} className="size-full" alt="integration icon" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* mobile view  */}
          <div className="lg:hidden flex gap-4 flex-wrap items-center justify-center md:mt-20 mt-8 sm:px-10 px-6 integration-list-1">
            <RevealAnimation delay={0.4}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={googleMeet} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={gmail} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={marvel} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={confluence} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={framer} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={vl} className="size-full dark:hidden" alt="integration icon" />
                  <Image src={vlWhite} className="size-full hidden dark:block" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={edge} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={confluence} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={slack} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={snapchat} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={google} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={msYammer} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={microsoft} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <figure className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                  <Image src={figma} className="size-full" alt="integration icon" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Integration;
