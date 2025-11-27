import { cn } from '@/utils/cn';
import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import { default as google, default as googleMeet } from '@public/images/icons/google.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import { default as lv, default as ms_yammer } from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    name: 'Google',
    image: google,
  },
  {
    id: 2,
    name: 'Slack',
    image: slack,
  },
  {
    id: 3,
    name: 'Confluence',
    image: confluence,
  },
  {
    id: 4,
    name: 'Snapchat',
    image: snapchat,
  },
  {
    id: 5,
    name: 'Yammer',
    image: ms_yammer,
  },
  {
    id: 6,
    name: 'Figma',
    image: figma,
  },
  {
    id: 7,
    name: 'Microsoft',
    image: microsoft,
  },
  {
    id: 8,
    name: 'Google Meet',
    image: googleMeet,
  },
  {
    id: 9,
    name: 'Microsoft Edge',
    image: edge,
  },
  {
    id: 10,
    name: 'LV',
    image: lv,
  },
  {
    id: 11,
    name: 'Framer',
    image: framer,
  },
  {
    id: 12,
    name: 'Marvel',
    image: marvel,
  },
  {
    id: 13,
    name: 'Gmail',
    image: gmail,
  },
];

const Integration = () => {
  return (
    <section className="py-24 lg:py-[120px] bg-background-1 dark:bg-background-6" aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* integration heading  */}
          <div className="max-w-[1028px] text-center w-full mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Integration</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Enhance your productivity effortlessly with over 50 integrations.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[582px] mx-auto w-full">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>
          </div>
          {/* brand logos  */}
          <div className="space-y-6">
            {/* marquee logo one  */}
            <RevealAnimation delay={0.4}>
              <div className="max-w-[1128px] mx-auto relative">
                <div className="absolute left-0 top-0 h-20 w-[100px] md:h-[115px] md:w-[105px] bg-gradient-to-r from-background-1 to-transparent dark:from-background-6 z-40" />
                <div className="absolute right-0 top-0 h-20 w-[100px] md:h-[115px] md:w-[105px] bg-gradient-to-l from-background-1 to-transparent dark:from-background-6 z-40" />
                <Marquee pauseOnHover={true} autoFill={true}>
                  <div className="flex items-center gap-2 md:!gap-6 justify-center">
                    {data.slice(0, 7).map((item, index) => (
                      <figure
                        key={item.id}
                        className={cn(
                          'size-16 shrink-0 md:size-[100px] bg-white dark:bg-background-6 rounded-2xl border-[10px] border-background-2 dark:border-background-5 flex items-center justify-center',

                          index === 0 && 'ml-0',
                        )}>
                        <Image src={item.image} alt={item.name} loading="lazy" className="size-12" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>
            </RevealAnimation>
            {/* marquee logo two  */}
            <RevealAnimation delay={0.5}>
              <div className="max-w-[984px] mx-auto relative">
                <div className="absolute left-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-r from-background-1 to-transparent dark:from-background-6 z-40" />
                <div className="absolute right-0 top-0 h-[115px] w-[10%] md:w-[15%] bg-gradient-to-l from-background-1 to-transparent dark:from-background-6 z-40" />
                <Marquee pauseOnHover={true} autoFill={true} direction="right">
                  <div className="flex items-center gap-2 md:!gap-6 justify-center">
                    {data.slice(8).map((item, index) => (
                      <figure
                        key={item.id}
                        className={cn(
                          'size-16 shrink-0 md:size-[100px] bg-white dark:bg-background-6 rounded-2xl border-[10px] border-background-2 dark:border-background-5 flex items-center justify-center',

                          index === 0 && 'ml-0',
                        )}>
                        <Image src={item.image} alt={item.name} loading="lazy" className="size-12" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
