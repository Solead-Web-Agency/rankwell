import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const logos = [
  {
    src: 'images/icons/google.svg',
    alt: 'Google logo',
    className: 'ml-8',
  },
  {
    src: 'images/icons/slack.svg',
    alt: 'Slack logo',
  },
  {
    src: 'images/icons/confluence.svg',
    alt: 'Confluence logo',
  },
  {
    src: 'images/icons/snapchat.svg',
    alt: 'Snapchat logo',
  },
  {
    src: ['images/icons/ms_yammer.svg', 'images/icons/ms_yammer-dark.svg'],
    alt: 'Yammer logo',
    isDark: true,
  },
  {
    src: 'images/icons/figma.svg',
    alt: 'Figma logo',
  },
  {
    src: 'images/icons/microsoft.svg',
    alt: 'Microsoft logo',
  },
];
const IntegrationMarquee = () => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="space-y-7">
        {/* marquee logo one  */}
        <div className="relative mx-auto max-w-[1128px]">
          <div className="from-background-2/90 dark:from-background-7 absolute top-0 left-0 z-40 h-[115px] w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2/90 dark:from-background-7 absolute top-0 right-0 z-40 h-[115px] w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill speed={40}>
            <div className="flex items-center justify-center gap-[34px]" role="group">
              {logos.map((logo, idx) => (
                <figure
                  key={idx}
                  className={`dark:bg-background-6 flex size-[100px] items-center justify-center rounded-full bg-white p-6 ${logo.className || ''}`}>
                  {logo.isDark ? (
                    <>
                      <Image
                        src={Array.isArray(logo.src) ? logo.src[0] : logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="size-12 object-cover dark:hidden"
                        width={100}
                        height={100}
                      />
                      <Image
                        src={Array.isArray(logo.src) ? logo.src[1] : logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="hidden dark:inline-block"
                        width={100}
                        height={100}
                      />
                    </>
                  ) : (
                    <Image
                      src={Array.isArray(logo.src) ? logo.src[0] : logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      width={100}
                      height={100}
                      className="size-12 object-cover"
                    />
                  )}
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
        {/* marquee logo two  */}
        <div className="relative mx-auto max-w-[985px]">
          <div className="from-background-2/90 dark:from-background-7 absolute top-0 left-0 z-40 h-[115px] w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2/90 dark:from-background-7 absolute top-0 right-0 z-40 h-[115px] w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill speed={40} direction="right">
            <div className="flex items-center justify-center gap-[34px]" aria-label="Integration partners row 2">
              {logos.map((logo, idx) => (
                <figure
                  key={idx}
                  className={`dark:bg-background-6 flex size-[100px] items-center justify-center rounded-full bg-white p-6 ${logo.className || ''}`}>
                  {logo.isDark ? (
                    <>
                      <Image
                        src={Array.isArray(logo.src) ? logo.src[0] : logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        width={100}
                        height={100}
                        className="size-12 object-cover dark:hidden"
                      />
                      <Image
                        src={Array.isArray(logo.src) ? logo.src[1] : logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        width={100}
                        height={100}
                        className="hidden dark:inline-block"
                      />
                    </>
                  ) : (
                    <Image
                      src={Array.isArray(logo.src) ? logo.src[0] : logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      width={100}
                      height={100}
                      className="size-12 object-cover"
                    />
                  )}
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </RevealAnimation>
  );
};

IntegrationMarquee.displayName = 'IntegrationMarquee';
export default IntegrationMarquee;
