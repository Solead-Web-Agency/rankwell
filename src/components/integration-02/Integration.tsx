{
  /* =========================
Integration page 2  section
===========================*/
}
import { cn } from '@/utils/cn';
import confluenceIcon from '@public/images/icons/confluence.svg';
import edgeIcon from '@public/images/icons/edge.svg';
import figmaIcon from '@public/images/icons/figma.svg';
import framerIcon from '@public/images/icons/framer.svg';
import gmailIcon from '@public/images/icons/gmail.svg';
import googleMeetIcon from '@public/images/icons/google-meet.svg';
import googleIcon from '@public/images/icons/google.svg';
import marvelDarkIcon from '@public/images/icons/marvel-dark.svg';
import marvelIcon from '@public/images/icons/marvel.svg';
import microsoftIcon from '@public/images/icons/microsoft.svg';
import yammerDarkIcon from '@public/images/icons/ms_yammer-dark.svg';
import yammerIcon from '@public/images/icons/ms_yammer.svg';
import slackIcon from '@public/images/icons/slack.svg';
import snapchatIcon from '@public/images/icons/snapchat.svg';
import vlWhiteIcon from '@public/images/icons/vl-white.svg';
import vlIcon from '@public/images/icons/vl.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface IntegrationProps {
  className?: string;
  badgeClass?: string;
}
const Integration = ({ className, badgeClass }: IntegrationProps) => {
  return (
    <section className={cn('py-14 md:py-16 lg:py-[88px] xl:py-[100px]', className)} aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* integration heading  */}
          <div className="max-w-[1028px] text-center mx-auto space-y-5">
            <RevealAnimation delay={0.2}>
              <span className={cn('badge badge-green', badgeClass)}>Integration</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2>Enhance your productivity effortlessly with over 50 integrations.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[582px] mx-auto">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                  Latin though it looks like nothing.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* brand logos  */}
          <RevealAnimation delay={0.5} instant>
            <div className="space-y-7">
              {/* marquee logo one  */}
              <div className="relative max-w-[1128px] mx-auto">
                <div className="absolute left-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                <div className="absolute right-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />

                <Marquee autoFill speed={40}>
                  <div className="flex items-center justify-center">
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8">
                      <Image src={googleIcon} alt="Google logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={slackIcon} alt="Slack logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={confluenceIcon} alt="Confluence logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={snapchatIcon} alt="Snapchat logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={yammerIcon} alt="Yammer logo" loading="lazy" className="dark:hidden size-12" />
                      <Image
                        src={yammerDarkIcon}
                        alt="Yammer logo"
                        loading="lazy"
                        className="hidden dark:inline-block"
                      />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={figmaIcon} alt="Figma logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={microsoftIcon} alt="Microsoft logo" loading="lazy" className="size-12" />
                    </figure>
                  </div>
                </Marquee>
              </div>
              {/* marquee logo two  */}
              <div className="relative max-w-[985px] mx-auto">
                <div className="absolute left-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                <div className="absolute right-0 top-0 h-[115px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />
                <Marquee autoFill direction="right" speed={40}>
                  <div className="flex items-center gap-[34px] justify-center">
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8">
                      <Image src={googleMeetIcon} alt="Google Meet logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={edgeIcon} alt="Microsoft Edge logo" width={48} height={48} loading="lazy" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={vlIcon} alt="LV logo" loading="lazy" className="dark:hidden size-12" />
                      <Image src={vlWhiteIcon} alt="LV logo" loading="lazy" className="hidden dark:inline-block" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={framerIcon} alt="Framer logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={marvelIcon} alt="Marvel logo" loading="lazy" className="dark:hidden size-12" />
                      <Image
                        src={marvelDarkIcon}
                        alt="Marvel logo"
                        loading="lazy"
                        className="hidden dark:inline-block"
                      />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={confluenceIcon} alt="Confluence logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="size-[70px] md:size-[100px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center">
                      <Image src={gmailIcon} alt="Gmail logo" loading="lazy" className="size-12" />
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
