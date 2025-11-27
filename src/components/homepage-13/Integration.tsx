import gradient16 from '@public/images/gradient/gradient-16.png';
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
    <section className="my-14 md:my-20 lg:my-[100px] xl:my-[200px] w-[95%] 2xl:max-w-[1440px] rounded-4xl mx-auto py-[70px] px-10 md:px-[75px] bg-white dark:bg-background-6 relative z-10 md:min-h-[740px] overflow-hidden">
      {/* bottom gradient */}
      <RevealAnimation delay={0.7} offset={120}>
        <figure className="absolute select-none pointer-events-none bottom-[-206px] sm:-bottom-[150px] max-md:w-[400px] max-md:h-[500px] left-[-17%] sm:left-[40%] -translate-x-1/2 md:-bottom-[250px] w-full h-full -rotate-[96deg] sm:-rotate-[30deg] -z-10">
          <Image src={gradient16} alt="bg" className="w-[115%] h-[224%]" />
        </figure>
      </RevealAnimation>

      {/* content  */}
      <div className="text-center relative z-10 w-fit mx-auto space-y-[25px]">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-cyan mb-5">Integration</span>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <h2 className="mb-3">
            Best productivity with <br className="hidden lg:block" />
            50+ integrations
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="lg:max-w-[620px] mx-auto mb-14">
            Seamlessly connect your favorite tools and platforms without the usual hassle. Our solution is designed to
            make
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div>
            <LinkButton
              href="/integration-01"
              className="btn btn-secondary btn-md inline-block dark:btn-accent hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
              See it in Action
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>

      <div className="md:absolute md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px] md:left-0 md:top-0 hidden md:block">
        <div className="flex flex-row flex-wrap md:flex-col gap-5 md:gap-[40px] 2xl:pl-[70px] py-[70px] relative h-full">
          <div className="flex md:ml-5 lg:ml-[60px] xl:ml-[100px]">
            <RevealAnimation delay={0.1}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={googleMeet} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:gap-8 md:ml-5 lg:ml-4 xl:ml-0 lg:gap-[50px] xl:gap-[75px] md:self-start">
            <RevealAnimation delay={0.2}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={gmail} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={marvel} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:gap-8 lg:gap-[50px] xl:gap-[75px] md:ml-5 lg:ml-[60px] xl:ml-[100px]">
            <RevealAnimation delay={0.4}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={confluence} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={framer} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:gap-8 lg:gap-[50px] xl:gap-[75px] md:ml-5 lg:ml-[100px] xl:ml-[185px]">
            <RevealAnimation delay={0.6}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={vl} alt="integration icon" className="dark:hidden size-12 object-contain" />
                  <Image src={vlWhite} alt="integration icon" className="hidden dark:block size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={edge} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <div className="md:absolute md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px] md:right-0 md:top-0 hidden md:block">
        <div className="flex flex-row flex-wrap md:flex-col gap-5 md:gap-[40px] 2xl:pr-[70px] py-[70px] relative h-full">
          <div className="flex md:self-end md:mr-5 lg:mr-[60px] xl:mr-[100px]">
            <RevealAnimation delay={0.1}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={confluence} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 lg:gap-[50px] mr-4 xl:mr-0 xl:gap-[75px] md:self-end">
            <RevealAnimation delay={0.1}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={slack} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={snapchat} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] md:mr-5 lg:mr-[60px] md:self-end xl:mr-[100px]">
            <RevealAnimation delay={0.3}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={google} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={msYammer} alt="integration icon" className="size-12 object-cover" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] md:mr-5 lg:mr-[100px] xl:mr-[185px] self-end">
            <RevealAnimation delay={0.5}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={microsoft} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="size-[100px] xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full">
                <div className="size-[80px] xl:size-[100px] flex items-center justify-center bg-white dark:bg-background-6 rounded-full p-6">
                  <Image src={figma} alt="integration icon" className="size-12 object-contain" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
