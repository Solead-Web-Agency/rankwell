import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import google_meet from '@public/images/icons/google-meet.svg';
import google from '@public/images/icons/google.svg';
import marvel_dark from '@public/images/icons/marvel-dark.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import ms_yammer_dark from '@public/images/icons/ms_yammer-dark.svg';
import ms_yammer from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import vl_white from '@public/images/icons/vl-white.svg';
import vl from '@public/images/icons/vl.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Integration = () => {
  return (
    <section
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px] bg-background-2 dark:bg-background-6"
      aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* integration heading  */}
          <div className="max-w-[1028px] text-center w-full mx-auto">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green mb-5">Integration</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-3 lg:text-heading-2 mb-3">
                Enhance your productivity effortlessly with over 50 integrations.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60 max-w-[582px] mx-auto w-full">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>
          </div>
          {/* brand logos  */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-7">
              {/* marquee logo one  */}
              <div className="relative max-w-[1128px] mx-auto">
                {/* left gradient overlay  */}
                <div className="absolute left-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                {/* right gradient overlay  */}
                <div className="absolute right-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />
                <Marquee autoFill speed={70}>
                  <div className="flex items-center gap-5 md:gap-[34px] justify-center" role="group">
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={google} alt="Google logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={slack} alt="Slack logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={confluence} alt="Confluence logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={snapchat} alt="Snapchat logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={ms_yammer} alt="Yammer logo" loading="lazy" className="dark:hidden size-12" />
                      <Image
                        src={ms_yammer_dark}
                        alt="Yammer logo"
                        loading="lazy"
                        className="hidden dark:inline-block"
                      />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={figma} alt="Figma logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={microsoft} alt="Microsoft logo" loading="lazy" className="size-12" />
                    </figure>
                  </div>
                </Marquee>
              </div>

              {/* marquee logo two  */}
              <div className="relative max-w-[985px] mx-auto">
                {/* left side gradient overlay  */}
                <div className="absolute left-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                {/* right side gradient overlay  */}
                <div className="absolute right-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />
                <Marquee autoFill speed={70} direction="right">
                  <div className="flex items-center gap-[34px] justify-center" role="group">
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={google_meet} alt="Google Meet logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={edge} alt="Microsoft Edge logo" width={48} height={48} loading="lazy" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={vl} alt="LV logo" loading="lazy" className="dark:hidden size-12" />
                      <Image src={vl_white} alt="LV logo" loading="lazy" className="hidden dark:inline-block" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={framer} alt="Framer logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={marvel} alt="Marvel logo" loading="lazy" className="dark:hidden size-12" />
                      <Image src={marvel_dark} alt="Marvel logo" loading="lazy" className="hidden dark:inline-block" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={confluence} alt="Confluence logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                      <Image src={gmail} alt="Gmail logo" loading="lazy" className="size-12" />
                    </figure>
                  </div>
                </Marquee>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
