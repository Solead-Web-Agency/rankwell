import edgeIcon from '@public/images/icons/edge.svg';
import figmaIcon from '@public/images/icons/figma.svg';
import framerIcon from '@public/images/icons/framer.svg';
import gmailIcon from '@public/images/icons/gmail.svg';
import googleIcon from '@public/images/icons/google.svg';
import marvelIcon from '@public/images/icons/marvel.svg';
import microsoftIcon from '@public/images/icons/microsoft.svg';
import yammerIcon from '@public/images/icons/ms_yammer.svg';
import slackIcon from '@public/images/icons/slack.svg';
import snapchatIcon from '@public/images/icons/snapchat.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

// Logos array
const marqueeLogosOne = [
  { id: 1, src: googleIcon, alt: 'Google logo' },
  { id: 2, src: slackIcon, alt: 'Slack logo' },
  { id: 3, src: snapchatIcon, alt: 'Snapchat logo' },
  { id: 4, src: yammerIcon, alt: 'Yammer logo' },
  { id: 5, src: figmaIcon, alt: 'Figma logo' },
  { id: 6, src: microsoftIcon, alt: 'Microsoft logo' },
];

const marqueeLogosTwo = [
  { id: 1, src: googleIcon, alt: 'Google Meet logo' },
  { id: 2, src: edgeIcon, alt: 'Microsoft Edge logo' },
  { id: 3, src: yammerIcon, alt: 'LV logo' },
  { id: 4, src: framerIcon, alt: 'Framer logo' },
  { id: 5, src: marvelIcon, alt: 'Marvel logo' },
  { id: 6, src: gmailIcon, alt: 'Gmail logo' },
];

const Integration = () => {
  return (
    <section
      className="py-20 md:py-[100px] lg:py-36 xl:py-[200px] bg-background-1 dark:bg-background-5"
      aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* integration heading  */}
          <div className="max-w-[1028px] text-center w-full mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="mb-5 badge badge-green">Integration</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Enhance your productivity effortlessly with over 50 integrations.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="md:max-w-[582px] mx-auto w-full">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>
          </div>
          {/* brand logos  */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              {/* Marquee row one */}
              <div className="relative max-w-[1128px] mx-auto">
                <div
                  className="absolute left-0 top-0 h-16 md:h-[115px] w-[100px] md:w-[315px] 
          bg-gradient-to-r from-background-1 to-transparent dark:from-background-5 z-40"
                />
                <div
                  className="absolute right-0 top-0 h-16 md:h-[115px] w-[100px] md:w-[315px] 
          bg-gradient-to-l from-background-1 to-transparent dark:from-background-5 z-40"
                />
                <Marquee autoFill direction="right" speed={40}>
                  <div className="flex items-center gap-[34px] justify-center">
                    {marqueeLogosOne.map((logo) => (
                      <figure
                        key={logo.id}
                        className="size-16 md:size-20 lg:size-[120px] bg-white dark:bg-background-8 
                  rounded-[16px] border-[10px] border-background-1 dark:border-background-6 
                  flex items-center justify-center first:ml-8">
                        <Image src={logo.src} alt={logo.alt} className="size-12" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>

              {/* Marquee row two */}
              <div className="relative max-w-[828px] mx-auto">
                <div
                  className="absolute left-0 top-0 h-16 md:h-[115px] w-[100px] md:w-[315px] 
          bg-gradient-to-r from-background-1 to-transparent dark:from-background-5 z-40"
                />
                <div
                  className="absolute right-0 top-0 h-16 md:h-[115px] w-[100px] md:w-[315px] 
          bg-gradient-to-l from-background-1 to-transparent dark:from-background-5 z-40"
                />
                <Marquee autoFill speed={40}>
                  <div className="flex items-center gap-[34px] justify-center" aria-label="Integration partners row 2">
                    {marqueeLogosTwo.map((logo) => (
                      <figure
                        key={logo.id}
                        className="size-16 md:size-20 lg:size-[120px] bg-white dark:bg-background-8 
                  rounded-[16px] border-[10px] border-background-1 dark:border-background-6 
                  flex items-center justify-center first:ml-8">
                        <Image src={logo.src} alt={logo.alt} className="size-12" />
                      </figure>
                    ))}
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
