import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import confluenceIcon from '@public/images/icons/confluence.svg';
import figmaIcon from '@public/images/icons/figma.svg';
import framerIcon from '@public/images/icons/framer.svg';
import gmailIcon from '@public/images/icons/gmail.svg';
import googleMeetIcon from '@public/images/icons/google-meet.svg';
import marvelIcon from '@public/images/icons/marvel.svg';
import microsoftIcon from '@public/images/icons/microsoft.svg';
import msYammerIcon from '@public/images/icons/ms_yammer.svg';
import slackIcon from '@public/images/icons/slack.svg';
import snapchatIcon from '@public/images/icons/snapchat.svg';
import Marquee from 'react-fast-marquee';

const integrations = [
  { id: 1, src: confluenceIcon, alt: 'Confluence' },
  { id: 2, src: figmaIcon, alt: 'Figma' },
  { id: 3, src: framerIcon, alt: 'Framer' },
  { id: 4, src: gmailIcon, alt: 'Gmail' },
  { id: 5, src: googleMeetIcon, alt: 'Google Meet' },
  { id: 6, src: marvelIcon, alt: 'Marvel' },
  { id: 7, src: microsoftIcon, alt: 'Microsoft' },
  { id: 8, src: msYammerIcon, alt: 'Microsoft Yammer' },
  { id: 9, src: slackIcon, alt: 'Slack' },
  { id: 10, src: snapchatIcon, alt: 'Snapchat' },
];

const Integration = () => {
  return (
    <section className="py-28 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5"> Integration </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Make productivity easier with <br className="hidden lg:block" />
              50+ integrations
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mb-8 lg:max-w-[620px] mx-auto">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
              though it looks like nothing.
            </p>
          </RevealAnimation>
        </div>

        {/* Integration items */}
        <RevealAnimation delay={0.4}>
          <div className="max-w-[968px] mx-auto relative">
            <div className="absolute left-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-r from-white to-transparent dark:from-background-7 z-40" />
            <div className="absolute right-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-l from-white to-transparent dark:from-background-7 z-40" />
            <Marquee autoFill speed={40}>
              <div className="flex items-center justify-center gap-6">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className="bg-background-2 dark:bg-background-6 size-[100px] flex items-center justify-center rounded-[20px] first:ml-6">
                    <Image src={integration.src} alt={integration.alt} className="size-12" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.5}>
          <div className="max-w-[844px] mx-auto mt-6 relative">
            <div className="absolute left-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-r from-white to-transparent dark:from-background-7 z-40" />
            <div className="absolute right-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-l from-white to-transparent dark:from-background-7 z-40" />
            <Marquee autoFill speed={40} direction="right">
              <div className="flex items-center justify-center gap-6">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className="bg-background-2 dark:bg-background-6 size-[100px] flex items-center justify-center rounded-[20px] first:ml-6">
                    <Image src={integration.src} alt={integration.alt} className="size-12" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Integration;
